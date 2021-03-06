(ns sms-application.api
  (:require [bidi.ring :as ring]
            [bidi.bidi :refer [path-for match-route]]
            [ring.middleware.params :as params]
            [ring.middleware.multipart-params :as mul-params]
            [sms-application.message-handler :refer [incoming-message
                                                     outgoing-messages]]))

;;possibly remove the spaces for url sake
;;with spaces (0|\+353|353)\s{0,1}(83|85|86|87|88|89)\s{0,1}\d{3}\s{0,1}\d{4}
;;without spaces (0|\+353|353)(83|85|86|87|88|89)\d{7}
;TODO shorten url to /message and /messages and
;replace /user/[number] with a token
(def api-routes
  ["/" {["user/" [#"(0|\+353|353)(83|85|86|87|88|89)\d{7}" :user] "/"]
        {"message"  {:post :send-message}
         "messages" {:get :get-messages}}
        true :not-found}])

;TODO look at some how using interceptors
(def api-handler
  {:get-messages (fn [req] {:status 200 :body (outgoing-messages (:route-params req))})
   :send-message (fn [req] {:status 201 :body (incoming-message req)})
   :not-found    (fn [req] {:status 404 :body (str "not-found {:uri \"" (:uri req) "\"}")})})

(defn key-handler [api-key] (get api-handler api-key))

(def app (-> (ring/make-handler api-routes key-handler)
             ;ring params required to access form data through url&|body
             params/wrap-params
             mul-params/wrap-multipart-params))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;testing api route paths
;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(path-for api-routes :message :user "0862561423")
(path-for api-routes :messages :user "0862573298")

(match-route api-routes "/message.html")
(match-route api-routes "/user/0862561423/messages")
