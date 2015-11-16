(ns sms-application.web-view
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

#_(defui HelloWorld
    Object
    (dom/render [this]
      (dom/div nil (get (om/props this) :title))))

#_(def hello (om/factory HelloWorld))

#_(js/ReactDOM.render
    (apply dom/div nil
      (map #(hello {:title (str "Hello " %)}) (range 10)))
    (gdom/getElement "app"))

(def app-state (atom {}))

#_(defui Counter
    Object
    (dom/render [this]
      (let [{:keys [count]} (om/props this)]
        (dom/div nil
          (dom/span nil (str "Count: " count))
          (dom/button
            #js {:onClick
                 (fn [e]
                   (swap! app-state update-in [:count] inc))}
            "Click me!")))))

(def reconciler
  (om/reconciler {:state app-state}))

#_(om/add-root! reconciler
    Counter (gdom/getElement "app"))


(defui MessageInput
  Object
  (render [this]
    (dom/form #js {:method "post"}
      (dom/p nil "welcome to hell.")
      (dom/label #js {:htmlFor "message"} "Message ")
      (dom/input #js {:type "text" :id "message" :name
                            "message"})
      (dom/button #js {:type "submit"} "Send
                                   ."))))

(om/add-root! reconciler MessageInput (gdom/getElement "app"))