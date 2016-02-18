(defproject sms-application "0.1.0-SNAPSHOT"
  :description "An sms application designed to use a built in messaging system, web-texts and standard sms functionalities."
  :url "https://github.com/Severed-Infinity/sms-application"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [co.paralleluniverse/pulsar "0.7.4" :exclusions [org.clojure/tools.analyzer.jvm org.clojure/tools.analyzer]]
                 [co.paralleluniverse/comsat-httpkit "0.5.0"]
                 [bidi "1.25.0"]
                 [environ "1.0.2"]
                 [ring/ring-core "1.4.0"]
                 ;requirement for ring multipart
                 [javax.servlet/servlet-api "2.5"]]
  :plugins [[lein-environ "1.0.2"]]
  :java-agents [[co.paralleluniverse/quasar-core "0.7.4" :options "m"]]
  :manifest {"Premain-Class"           "co.paralleluniverse.fibers.instrument.JavaAgent"
             "Agent-Class"             "co.paralleluniverse.fibers.instrument.JavaAgent"
             "Can-Retransform-Classes" "true"
             "Can-Redefine-Classes"    "true"}
  :bootclasspath true
  :main sms-application.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :auto-instrument-all
                      {:jvm-opts ["-Dco.paralleluniverse.pulsar.instrument.auto=all"
                                  "-Dco.paralleluniverse.fibers.verifyInstrumentation=true"]}}
  :capsule {:types {:fat {}}}
  :heroku {:app-name      "sfinity-server"
           :jdk-version   "1.8"
           :include-files ["target/uberjar/sms-application-0.1.0-SNAPSHOT-standalone.jar"]
           :process-type  ["web java -jar target/uberjar/sms-application-0.1.0-SNAPSHOT-standalone.jar"]})
