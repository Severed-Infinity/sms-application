(ns sms-application.core
  (:gen-class)
  (:require
    [ring.util.response :refer [file-response]]
    [ring.middleware.resource :refer [wrap-resource]]
    [ring.middleware.file-info :refer [wrap-file-info]]
    [org.httpkit.server :as server]
    [co.paralleluniverse.fiber.httpkit.client :refer :all]
    [co.paralleluniverse.pulsar.core :refer [fiber]]
    [compojure.core :refer :all]
    [compojure.route :as route]))

(defn index []
  (file-response "public/index.html" {:root "resources"}))

(defroutes handler
  (GET "/" [] (index))
  (route/resources "/")
  (route/not-found "not found"))

(defonce server (atom nil))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn -main []
  (reset! server (server/run-server
                   handler {:port 8080})))

(defn print-message [message]
  (println (str message)))
