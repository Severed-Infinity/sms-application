(ns sms-application.message-handler
  (:gen-class)
  (:require [cheshire.core :refer :all]
            [hara.time :as time]
            [sms-application.utilities :as util])
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
     (fiber (snd incoming-queue message))
     (generate-string message))))

(defn- sort-message [message]
  (if (contains? @output-channels-list (:dest message))
    (let [contact (get @output-channels-list (:dest message))]
      (fiber (snd contact message)))
    (let [out-chan (channel -1)]
      (fiber (snd out-chan message))
      (swap! output-channels-list assoc (:dest message) out-chan))))

(defn monitor-messages []
  (println "monitoring for messages…")
  (loop []
    (when-let [next-message (rcv incoming-queue)]
      (sort-message next-message))
    (recur)))

(defn outgoing-messages [src]
  (let [return (loop [coll     []
                      out-chan (or (get @output-channels-list (:user src))
                                   (channel))]
                 (when-let [message-fiber (spawn-fiber #(rcv out-chan 100 :ms))]
                   (let [new-message (join message-fiber)]
                     (if (empty? new-message)
                       (do
                         (close! out-chan)
                         #_(println (closed? out-chan))
                         (swap! output-channels-list dissoc (:user src))
                         coll)
                       (recur (conj coll new-message)
                              out-chan)))))
        output (util/format-messages return)]
    (generate-string #_(assoc {} :messages) output)))

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
