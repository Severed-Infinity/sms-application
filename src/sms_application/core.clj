(ns sms-application.core
  (:gen-class)
  (:use [co.paralleluniverse.pulsar core])
  (:require
    #_[co.paralleluniverse.fiber.httpkit.client :as client]
    [org.httpkit.server :as server]
    [sms-application.api :as app-api]
    [environ.core :refer [env]])
  (:refer-clojure :exclude [await promise]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;message server dev-stuff
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defonce message-server (atom nil))

(defn start-server [& port]
  (reset! message-server (server/run-server #'app-api/app {:port port})))

(defn stop-server []
  (when-not (nil? @message-server)
    (@message-server :timeout 100)
    (reset! message-server nil)))

(defn reset-server []
  (stop-server)
  (start-server))

(defn -main [& [port]]
  (let [port (or port (env :port) 3033)]
    (fiber sms-application.message-handler/monitor-messages)
    (fiber (start-server port))))