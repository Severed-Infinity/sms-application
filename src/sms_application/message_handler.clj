(ns sms-application.message-handler
  (:gen-class)
  (:use [co.paralleluniverse.pulsar core])
  (:refer-clojure :exclude [await promise]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;message server functions
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(declare print-message)
(defrecord Message [src dest body])

(def incoming-queue (channel))

;TODO remove printlin
(defn incoming-message [src dest body]
  (println "message recieved {" src dest body "}")
  (fiber
    (snd incoming-queue (Message. src dest body))))

#_(def outgoing-queue (channel))

#_(defn sort-message->output-channel [])
;(incoming-message "0234" "01724" "hello test")

;TODO replace print-message with channel redirection based on number
(defn monitor-messages []
  (println "monitoring for messages…")
  (loop []
    (when-let [next-message (rcv incoming-queue)]
      (print-message next-message))
    (recur)))

;;;;
;;input/output testing
;;;;
(defn print-message [message]
  (let [{:keys [src dest body]} message]
    (println "printing… " src dest body "\n")))

#_(def test-message-system
    (do
      (incoming-message "086" "087" "hello")
      (fiber
        (let [message (rcv incoming-queue)]
          (println message)
          (print-message message)))))

;;;;
;;end of testing
;;;;