(ns sms-application.core
  (:gen-class)
  (:use [co.paralleluniverse.pulsar core])
  (:refer-clojure :exclude [await promise]))

(defrecord Message [src dest body])

(def incoming-queue (channel))

(defn incoming-message [src dest body]
  (fiber
    (snd incoming-queue (Message. src dest body))))

(def outgoing-queue (channel))

(defn sort-message->output-channel [])

(defn print-message [message]
  (let [{:keys [src dest body]} message]
    (println src dest body)))

(defn -main []
  (incoming-message "086" "087" "hello")
  (fiber
    (let [message (rcv incoming-queue)]
      (do
        (println message)
        (print-message message)))))