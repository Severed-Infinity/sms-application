(defproject sms-application "0.1.0-SNAPSHOT"
  :description "An sms application designed to use a built in messaging system, web-texts and standard sms functionalities."
  :url "https://github.com/Severed-Infinity/sms-application"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [com.stuartsierra/component "0.3.0"]
                 [co.paralleluniverse/pulsar "0.7.3"]
                 [co.paralleluniverse/comsat-httpkit "0.5.0"]
                 [compojure "1.4.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [org.omcljs/om "1.0.0-alpha14"]
                 [figwheel-sidecar "0.4.0" :scope "provided"]]
  :java-agents [[co.paralleluniverse/quasar-core "0.7.3"]]
  :main ^:skip-aot sms-application.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
