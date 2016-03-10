(ns sms-application.core
  (:gen-class)
  (:use [co.paralleluniverse.pulsar core])
  (:require
    #_[co.paralleluniverse.fiber.httpkit.client :as client]
    [org.httpkit.server :as server]
    [org.httpkit.client :as client]
    [sms-application.api :as app-api]
    [environ.core :refer [env]])
  (:refer-clojure :exclude [await promise]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;message server dev-stuff
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defonce message-server (atom nil))

(defn start-server [& [port]]
  (println "starting web server…")
  (reset! message-server (server/run-server #'app-api/app {:port port})))

(defn stop-server []
  (println "stopping web server…")
  (when-not (nil? @message-server)
    (@message-server :timeout 100)
    (reset! message-server nil)))

(defn reset-server [& [port]]
  (stop-server)
  (start-server port))

(defn -main [& [port]]
  (let [port (Integer. ^Integer (or port (env :port) 3033))
        server (fiber (start-server port))
        monitor (spawn-fiber sms-application.message-handler/monitor-messages)]
    (join monitor)
    (join server)))

#_(client/get "http://localhost:3033/user/0862561423/messages")
#_(-main)