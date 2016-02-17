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

(defn incoming-message [src dest body]
  (println "message recieved" src dest body)
  (fiber
    (snd incoming-queue (Message. src dest body))))

#_(def outgoing-queue (channel))

#_(defn sort-message->output-channel [])
(incoming-message "0234" "01724" "hello test")

(defn monitor-messages []
  #_(let [in-mess (fn [] ((rcv incoming-message)))])
  (while true
    (let [next-message (rcv incoming-queue)]
      (print-message next-message))))

;;;;
;;input/output testing
;;;;
(defn print-message [message]
  (let [{:keys [src dest body]} message]
    (println "\nprinting… " src dest body "\n")))

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