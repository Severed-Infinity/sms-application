(ns sms-application.core
  (:gen-class)
  (:require
    [org.httpkit.server :as server]
    [co.paralleluniverse.fiber.httpkit.client :refer :all]
    [co.paralleluniverse.pulsar.core :refer [fiber]]
    [compojure.core :refer :all]
    [compojure.route :as route]))

(defn app [req]
  {:status  200
   :headers {"content-type" "text/html"}
   :body    "hello HTTP!"})

(defonce server (atom nil))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn handler [req]
  (server/with-channel req channel
    (server/on-close channel (fn [status] (println "channel
    closed, " status)))
    (if (server/websocket? channel)
      (println "WebSocket channel")
      (println "HTTP channel"))
    (server/on-receive channel (fn [data] (server/send!
                                            channel data)
                                 ))))

(defn launch-server []
  (reset! server (server/run-server #'handler {:port 8080})))

(defn -main []
  launch-server)
