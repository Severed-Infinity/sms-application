(ns sms-application.utilities)

(defn format-message [message]
  (dissoc message :dest))

(defn format-messages [messages]
  (let [src (fn [messages]
              (->> messages first :src keyword))]
    (loop [output-map {}
           messages   messages]
      (if (seq messages)
        (if (contains? output-map (src messages))
          (recur (update output-map (src messages)
                         conj (format-message
                                (first messages)))
                 (rest messages))
          (recur (assoc output-map (src messages)
                   [(format-message (first messages))])
                 (rest messages)))
        output-map))))
