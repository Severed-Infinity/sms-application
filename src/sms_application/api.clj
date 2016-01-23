(ns sms-application.api
  #_(:use [bidi.bidi])
  (:require [bidi.ring :as ring]
            [bidi.bidi :refer [path-for match-route]]))

;;possibly remove the spaces for url sake
;;with spaces (0|\+353|353)\s{0,1}(83|85|86|87|88|89)\s{0,1}\d{3}\s{0,1}\d{4}
;;without spaces (0|\+353|353)(83|85|86|87|88|89)\d{7}
(def api-routes ["/" {["user/" [#"(0|\+353|353)(83|85|86|87|88|89)\d{7}" :user] "/"]
                           {"message"  :send-message
                            "messages" :get-messages}
                      true :not-found}])

(def api-handler {:get-messages (fn [req] {:status 200 :body (str "unread messages " (:route-params req))})
                  :send-message (fn [req] {:status 200 :body (str "sent message " (:route-params req))})
                  :not-found    (fn [req] {:status 404 :body (str "not-found {:uri \"" (:uri req) "\"}")})})

(defn key-handler [key] (key api-handler))

(def app (ring/make-handler api-routes key-handler))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;testing api route paths
;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(path-for api-routes :message :user "0862561423")
(path-for api-routes :messages :user "0862573298")

(match-route api-routes "/message.html")
(match-route api-routes "/user/0862561423/messages")