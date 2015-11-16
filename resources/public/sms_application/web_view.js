// Compiled by ClojureScript 1.7.145 {}
goog.provide('sms_application.web_view');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
sms_application.web_view.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
sms_application.web_view.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),sms_application.web_view.app_state], null));
