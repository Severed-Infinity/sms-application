// Compiled by ClojureScript 1.7.145 {}
goog.provide('sms_application.web_view');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
sms_application.web_view.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
sms_application.web_view.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),sms_application.web_view.app_state], null));
/**
 * @constructor
 */
sms_application.web_view.MessageInput = (function sms_application$web_view$MessageInput(){
var this__20020__auto__ = this;
React.Component.apply(this__20020__auto__,arguments);

if(!((this__20020__auto__.getInitialState == null))){
this__20020__auto__.state = this__20020__auto__.getInitialState();
} else {
this__20020__auto__.state = {};
}

return this__20020__auto__;
});

sms_application.web_view.MessageInput.prototype = goog.object.clone(React.Component.prototype);

var x21197_21205 = sms_application.web_view.MessageInput.prototype;
x21197_21205.componentWillUpdate = ((function (x21197_21205){
return (function (next_props__19961__auto__,next_state__19962__auto__){
var this__19960__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19960__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19960__auto__);
});})(x21197_21205))
;

x21197_21205.shouldComponentUpdate = ((function (x21197_21205){
return (function (next_props__19961__auto__,next_state__19962__auto__){
var this__19960__auto__ = this;
var or__17190__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19960__auto__),goog.object.get(next_props__19961__auto__,"omcljs$value"));
if(or__17190__auto__){
return or__17190__auto__;
} else {
var and__17178__auto__ = this__19960__auto__.state;
if(cljs.core.truth_(and__17178__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19960__auto__.state,"omcljs$state"),goog.object.get(next_state__19962__auto__,"omcljs$state"));
} else {
return and__17178__auto__;
}
}
});})(x21197_21205))
;

x21197_21205.componentWillUnmount = ((function (x21197_21205){
return (function (){
var this__19960__auto__ = this;
var r__19966__auto__ = om.next.get_reconciler.call(null,this__19960__auto__);
var cfg__19967__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19966__auto__);
var st__19968__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19967__auto__);
var indexer__19965__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19967__auto__);
if((st__19968__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19968__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19960__auto__);
}

if((indexer__19965__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19965__auto__,this__19960__auto__);
}
});})(x21197_21205))
;

x21197_21205.componentDidUpdate = ((function (x21197_21205){
return (function (prev_props__19963__auto__,prev_state__19964__auto__){
var this__19960__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19960__auto__);
});})(x21197_21205))
;

x21197_21205.isMounted = ((function (x21197_21205){
return (function (){
var this__19960__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19960__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21197_21205))
;

x21197_21205.componentWillMount = ((function (x21197_21205){
return (function (){
var this__19960__auto__ = this;
var indexer__19965__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19960__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19965__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19965__auto__,this__19960__auto__);
}
});})(x21197_21205))
;

x21197_21205.render = ((function (x21197_21205){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21198 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21199 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21200 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21201 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21202 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.form({"method": "post"},React.DOM.p(null,"welcome to hell."),React.DOM.label({"htmlFor": "message"},"Message "),om.dom.input.call(null,{"type": "text", "id": "message", "name": "message"}),React.DOM.button({"type": "submit"},"Send\n                                   ."));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21202;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21201;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21200;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21199;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21198;
}});})(x21197_21205))
;


sms_application.web_view.MessageInput.prototype.constructor = sms_application.web_view.MessageInput;

sms_application.web_view.MessageInput.prototype.om$isComponent = true;

var x21203_21206 = sms_application.web_view.MessageInput;


var x21204_21207 = sms_application.web_view.MessageInput.prototype;


sms_application.web_view.MessageInput.cljs$lang$type = true;

sms_application.web_view.MessageInput.cljs$lang$ctorStr = "sms-application.web-view/MessageInput";

sms_application.web_view.MessageInput.cljs$lang$ctorPrWriter = (function (this__20022__auto__,writer__20023__auto__,opt__20024__auto__){
return cljs.core._write.call(null,writer__20023__auto__,"sms-application.web-view/MessageInput");
});
om.next.add_root_BANG_.call(null,sms_application.web_view.reconciler,sms_application.web_view.MessageInput,goog.dom.getElement("app"));

//# sourceMappingURL=web_view.js.map