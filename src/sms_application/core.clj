(ns sms-application.core
  (:gen-class)
  (:use [co.paralleluniverse.pulsar core])
  (:import [co.paralleluniverse.fibers Fiber])
  (:refer-clojure :exclude [await promise]))

(def incoming-queue (channel))

(defn incoming-message [src dest message]
  (fiber
    (snd incoming-queue [src dest message])))

(def outgoing-queue (channel))

(defn print-message [src dest message]
  (println src dest message))

(defn -main []
  (incoming-message "086" "087" "hello")
  (fiber
    (let [message (rcv incoming-queue)]
      (println message))))


