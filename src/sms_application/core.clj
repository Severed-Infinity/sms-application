(ns sms-application.core
  (:gen-class)
  (:use [co.paralleluniverse.pulsar core])
  (:require
    #_[co.paralleluniverse.fiber.httpkit.client :as client]
    [org.httpkit.server :as server]
    [sms-application.api :as app-api])
  (:refer-clojure :exclude [await promise]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;message server dev-stuff
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defonce message-server (atom nil))

(defn start-server []
  (reset! message-server (server/run-server #'app-api/app {:port 3033})))

(defn stop-server []
  (when-not (nil? @message-server)
    (@message-server :timeout 100)
    (reset! message-server nil)))

(defn reset-server []
  (stop-server)
  (start-server))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;message server functions
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defrecord Message [src dest body])

(def incoming-queue (channel))

(defn incoming-message [src dest body]
  (fiber
    (snd incoming-queue (Message. src dest body))))

(def outgoing-queue (channel))

(defn sort-message->output-channel [])

;;;;
;;input/output testing
;;;;
(defn print-message [message]
  (let [{:keys [src dest body]} message]
    (println src dest body)))

(def test-message-system
  (do
    (incoming-message "086" "087" "hello")
    (fiber
      (let [message (rcv incoming-queue)]
        (println message)
        (print-message message)))))

;;;;
;;end of testing
;;;;

(defn -main []
  (fiber (start-server)))

(-main)
