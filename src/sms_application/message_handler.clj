(ns sms-application.message-handler
  (:gen-class)
  (:require [cheshire.core :refer :all])
  (:use [co.paralleluniverse.pulsar core])
  (:refer-clojure :exclude [await promise]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;message server functions
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(declare print-message)
(defrecord Message [src dest message])

(def incoming-queue (channel -1))
(def outgoing-queue (channel -1))

;TODO instead of passing in 3 args pass in the response body and parse it
(defn incoming-message
  ([req]
   (let [message (map->Message
                   (clojure.walk/keywordize-keys (:multipart-params req)))]
     (fiber
       (snd incoming-queue message))))
  ([src dest message]
    #_(println "message recieved {" src dest body "}")
   (fiber
     (snd incoming-queue (->Message src dest message)))))

#_(defn sort-message->output-channel [])
;(incoming-message "0234" "01724" "hello test")

;TODO replace print-message with channel redirection based on number
;TODO remove print-message function
(defn monitor-messages []
  (println "monitoring for messages…")
  (loop []
    (when-let [next-message (rcv incoming-queue)]
      (fiber (snd outgoing-queue next-message))
      (print-message next-message))
    (recur)))

(defn outgoing-messages [src]
  (loop [coll []]
    (when-let [message-fiber (spawn-fiber #(rcv outgoing-queue 100 :ms))]
      (let [new-message (join message-fiber)]
        (if (empty? new-message)
          (generate-string coll {:pretty true})
          (recur (conj coll (generate-string new-message {:pretty true}))))))))

;;;;
;;input/output testing
;;;;
(defn print-message [available-message]
  (let [{:keys [src dest message]} available-message]
    (println "printing… " src dest message "\n")))

;;;;
;;end of testing
;;;;