// Compiled by ClojureScript 1.7.145 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state], null));
/**
 * @constructor
 */
om_tutorial.core.MessageInput = (function om_tutorial$core$MessageInput(){
var this__20095__auto__ = this;
React.Component.apply(this__20095__auto__,arguments);

if(!((this__20095__auto__.getInitialState == null))){
this__20095__auto__.state = this__20095__auto__.getInitialState();
} else {
this__20095__auto__.state = {};
}

return this__20095__auto__;
});

om_tutorial.core.MessageInput.prototype = goog.object.clone(React.Component.prototype);

var x34171_34179 = om_tutorial.core.MessageInput.prototype;
x34171_34179.componentWillUpdate = ((function (x34171_34179){
return (function (next_props__20036__auto__,next_state__20037__auto__){
var this__20035__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__20035__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20035__auto__);
});})(x34171_34179))
;

x34171_34179.shouldComponentUpdate = ((function (x34171_34179){
return (function (next_props__20036__auto__,next_state__20037__auto__){
var this__20035__auto__ = this;
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20035__auto__),goog.object.get(next_props__20036__auto__,"omcljs$value"));
if(or__16785__auto__){
return or__16785__auto__;
} else {
var and__16773__auto__ = this__20035__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20035__auto__.state,"omcljs$state"),goog.object.get(next_state__20037__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
}
});})(x34171_34179))
;

x34171_34179.componentWillUnmount = ((function (x34171_34179){
return (function (){
var this__20035__auto__ = this;
var r__20041__auto__ = om.next.get_reconciler.call(null,this__20035__auto__);
var cfg__20042__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20041__auto__);
var st__20043__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20042__auto__);
var indexer__20040__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20042__auto__);
if((st__20043__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20043__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20035__auto__);
}

if((indexer__20040__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20040__auto__,this__20035__auto__);
}
});})(x34171_34179))
;

x34171_34179.componentDidUpdate = ((function (x34171_34179){
return (function (prev_props__20038__auto__,prev_state__20039__auto__){
var this__20035__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20035__auto__);
});})(x34171_34179))
;

x34171_34179.isMounted = ((function (x34171_34179){
return (function (){
var this__20035__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20035__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34171_34179))
;

x34171_34179.componentWillMount = ((function (x34171_34179){
return (function (){
var this__20035__auto__ = this;
var indexer__20040__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20035__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20040__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20040__auto__,this__20035__auto__);
}
});})(x34171_34179))
;

x34171_34179.render = ((function (x34171_34179){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_34172 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34173 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34174 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34175 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34176 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.form(null,React.DOM.label({"for": "message"},"Message"),om.dom.input.call(null,{"type": "text", "id": "message"}),React.DOM.button({"type": "submit"},"Send."));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34176;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34175;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34174;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34173;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34172;
}});})(x34171_34179))
;


om_tutorial.core.MessageInput.prototype.constructor = om_tutorial.core.MessageInput;

om_tutorial.core.MessageInput.prototype.om$isComponent = true;

var x34177_34180 = om_tutorial.core.MessageInput;


var x34178_34181 = om_tutorial.core.MessageInput.prototype;


om_tutorial.core.MessageInput.cljs$lang$type = true;

om_tutorial.core.MessageInput.cljs$lang$ctorStr = "om-tutorial.core/MessageInput";

om_tutorial.core.MessageInput.cljs$lang$ctorPrWriter = (function (this__20097__auto__,writer__20098__auto__,opt__20099__auto__){
return cljs.core._write.call(null,writer__20098__auto__,"om-tutorial.core/MessageInput");
});
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.MessageInput,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map