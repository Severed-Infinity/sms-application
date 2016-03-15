(ns sms-application.message-handler
  (:gen-class)
  (:require [cheshire.core :refer :all]
            [hara.time :as time])
  (:use [co.paralleluniverse.pulsar core])
  (:refer-clojure :exclude [await promise])
  (:import (java.util Date)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;message server functions
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(declare print-message)
(defrecord Message [src dest message timestamp])

(def output-channels-list (atom {}))
(def incoming-queue (channel -1))

(defn incoming-message
  ([req]
   (let [message (map->Message
                   (assoc
                     (clojure.walk/keywordize-keys (:multipart-params req))
                     :timestamp (time/now {:type Date})))]
     #_(print-message message)
     (fiber (snd incoming-queue message)))))

(defn sort-message [message]
  (if (contains? @output-channels-list (:dest message))
    (let [contact (get @output-channels-list (:dest message))]
      (fiber (snd contact message)))
    (let [out-chan (channel -1)]
      (fiber (snd out-chan message))
      (swap! output-channels-list assoc (:dest message) out-chan)))
  #_(println @output-channels-list))

(defn monitor-messages []
  (println "monitoring for messages…")
  (loop []
    (when-let [next-message (rcv incoming-queue)]
      (sort-message next-message))
    (recur)))

(defn outgoing-messages [src]
  #_(println "request route-params" src)
  (loop [coll     []
         out-chan (or (get @output-channels-list (:user src))
                      (channel))]
    (when-let [message-fiber (spawn-fiber #(rcv out-chan 100 :ms))]
      (let [new-message (join message-fiber)]
        (if (empty? new-message)
          (do
            (close! out-chan)
            #_(println (closed? out-chan))
            (swap! output-channels-list dissoc (:user src))
            (generate-string coll))
          (recur (conj coll (generate-string new-message)
                       ) out-chan))))))

;;;;
;;input/output testing
;;;;
(defn print-message [available-message]
  (let [{:keys [src dest message timestamp]}
        available-message]
    (println "printing… " src dest message timestamp)))

;;;;
;;end of testing
;;;;