(ns script.figwheel
  (require [figwheel-sidecar.repl :as r]
           [figwheel-sidecar.repl-api :as ra]
           [com.stuartsierra.component :as component]))

(def figwheel-config
  {:figwheel-options {}
   :build-ids        ["dev"]
   :all-builds
                     [{:id           "dev"
                       :figwheel     true
                       :source-paths ["src"]
                       :compiler     {:main
                                                  'sms-application.web-view
                                      :asset-path "js"
                                      :output-to  "resources/public/js/main.js"
                                      :output-dir "resources/public/js"
                                      :verbose    true}}]})

(defrecord Figwheel []
  component/Lifecycle
  (start [config]
    (ra/start-figwheel! config)
    config)
  (stop [config]
    (ra/stop-autobuild)
    config))

(defn handler [request]
  {:status  200
   :headers {"Content-Type" "text/plain"}
   :body    "Hello World"})

(def system
  (atom
    (component/system-map

      :figwheel (map->Figwheel figwheel-config))))

(defn start []
  (swap! system component/start))

(defn stop []
  (swap! system component/stop))

(defn reload []
  (stop)
  (start))

(defn repl []
  (ra/cljs-repl))
