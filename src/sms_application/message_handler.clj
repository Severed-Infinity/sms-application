(ns sms-application.message-handler
  (:gen-class)
  (:use [co.paralleluniverse.pulsar core])
  (:refer-clojure :exclude [await promise]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;message server functions
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(declare print-message)
(defrecord Message [src dest body])
(defn Message->map [message]
  (reduce conj {} message))

(def incoming-queue (channel -1))
(def outgoing-queue (channel -1))

;TODO remove println
(defn incoming-message [src dest body]
  #_(println "message recieved {" src dest body "}")
  (fiber
    (snd incoming-queue (->Message src dest body))))

#_(defn sort-message->output-channel [])
;(incoming-message "0234" "01724" "hello test")

;TODO replace print-message with channel redirection based on number
(defn monitor-messages []
  (println "monitoring for messages…")
  (loop []
    (when-let [next-message (rcv incoming-queue)]
      (fiber (snd outgoing-queue next-message))
      (print-message next-message)
      #_(println (str "is outgoing-queue open?" (closed? outgoing-queue))))
    (recur)))

(defn outgoing-messages [src]
  ;TODO problem here is message needs to be of type map and not record
  ;TODO must be better way as works sometimes and others not
  ;TODO crashes all the itme, why?
  (when-let [#_(message #(rcv-into {} outgoing-queue 1))
             message-fiber (spawn-fiber #(rcv-into {} outgoing-queue 1))]
    (print-message message-fiber)
    (join message-fiber))
  #_(println (join
               (spawn-fiber (loop [coll []]
                              (recur
                                (when-let [message (rcv-into [] outgoing-queue 1)]
                                  (conj coll (map Message->map message)))))))))
;;;;
;;input/output testing
;;;;
(defn print-message [message]
  (let [{:keys [src dest body]} message]
    (println "printing… " src dest body "\n")))

#_(def test-message-system
    (do
      (incoming-message "086" "087" "hello")
      (fiber
        (let [message (rcv incoming-queue)]
          (println message)
          (print-message message)))))

;;;;
;;end of testing
;;;;