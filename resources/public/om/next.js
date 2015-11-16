// Compiled by ClojureScript 1.7.145 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('goog.debug.Console');
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
om.next.node__GT_key = (function om$next$node__GT_key(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.ffirst.call(null,node);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
var node_SINGLEQUOTE_ = cljs.core.first.call(null,node);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,node_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;

}
}
});
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__29261_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__29261_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__29261_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__29261_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__29262 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__29262;
continue;
}
break;
}
});
om.next.union_QMARK_ = (function om$next$union_QMARK_(node){
return (cljs.core.map_QMARK_.call(null,node)) && (((1) < cljs.core.count.call(null,node)));
});
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__29271 = clojure.zip.down.call(null,loc);
var G__29272 = path__$1;
loc = G__29271;
path__$1 = G__29272;
continue;
} else {
var vec__29270 = path__$1;
var k = cljs.core.nth.call(null,vec__29270,(0),null);
var ks = cljs.core.nthnext.call(null,vec__29270,(1));
if(om.next.union_QMARK_.call(null,node)){
var node__$1 = clojure.zip.node.call(null,om.next.move_to_key.call(null,loc,k));
var G__29273 = clojure.zip.replace.call(null,loc,node__$1);
var G__29274 = ks;
loc = G__29273;
path__$1 = G__29274;
continue;
} else {
var k_SINGLEQUOTE_ = om.next.node__GT_key.call(null,node);
if(cljs.core.keyword_identical_QMARK_.call(null,k,k_SINGLEQUOTE_)){
if(cljs.core.map_QMARK_.call(null,node)){
var G__29275 = om.next.move_to_key.call(null,loc,k);
var G__29276 = ks;
loc = G__29275;
path__$1 = G__29276;
continue;
} else {
var G__29277 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__29278 = ks;
loc = G__29277;
path__$1 = G__29278;
continue;
}
} else {
var G__29279 = clojure.zip.right.call(null,loc);
var G__29280 = path__$1;
loc = G__29279;
path__$1 = G__29280;
continue;
}
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.focus_query;
om.next.join_key = (function om$next$join_key(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.ffirst.call(null,node);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
return om$next$join_key.call(null,cljs.core.first.call(null,node));
} else {
return node;

}
}
});
om.next.focused_join = (function om$next$focused_join(node,ks){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst.call(null,node),om.next.focus_query.call(null,cljs.core.second.call(null,cljs.core.first.call(null,node)),ks)], true, false);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,node)),om$next$focused_join.call(null,cljs.core.first.call(null,node),ks));
} else {
return node;

}
}
});
om.next.focus_query = (function om$next$focus_query(query,path){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__29282 = path;
var k = cljs.core.nth.call(null,vec__29282,(0),null);
var ks = cljs.core.nthnext.call(null,vec__29282,(1));
var match = ((function (vec__29282,k,ks){
return (function om$next$focus_query_$_match(x){
return cljs.core._EQ_.call(null,k,om.next.join_key.call(null,x));
});})(vec__29282,k,ks))
;
var value = ((function (vec__29282,k,ks){
return (function om$next$focus_query_$_value(x){
return om.next.focused_join.call(null,x,ks);
});})(vec__29282,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query.call(null,cljs.core.get.call(null,query,k),ks),new cljs.core.Keyword("om.next","union","om.next/union",1397420192),true], true, false);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
});
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args29283 = [];
var len__18249__auto___29287 = arguments.length;
var i__18250__auto___29288 = (0);
while(true){
if((i__18250__auto___29288 < len__18249__auto___29287)){
args29283.push((arguments[i__18250__auto___29288]));

var G__29289 = (i__18250__auto___29288 + (1));
i__18250__auto___29288 = G__29289;
continue;
} else {
}
break;
}

var G__29285 = args29283.length;
switch (G__29285) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29283.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__17179__auto__ = (cljs.core._EQ_.call(null,bound,new cljs.core.Symbol(null,"*","*",345799209,null))) || (cljs.core.not_EQ_.call(null,path,bound));
if(and__17179__auto__){
var and__17179__auto____$1 = cljs.core.some.call(null,cljs.core.map_QMARK_,focus);
if(cljs.core.truth_(and__17179__auto____$1)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__17179__auto____$1;
}
} else {
return and__17179__auto__;
}
})())){
var vec__29286 = cljs.core.ffirst.call(null,focus);
var k = cljs.core.nth.call(null,vec__29286,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29286,(1),null);
var G__29291 = focus_SINGLEQUOTE_;
var G__29292 = bound;
var G__29293 = cljs.core.conj.call(null,path,k);
focus = G__29291;
bound = G__29292;
path = G__29293;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ref for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__17846__auto__ = (((this$ == null))?null:this$);
var m__17847__auto__ = (om.next.ident[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,this$,props);
} else {
var m__17847__auto____$1 = (om.next.ident["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});

(om.next.Ident["_"] = true);

(om.next.ident["_"] = (function (this$,props){
return this$;
}));

/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__17846__auto__ = (((this$ == null))?null:this$);
var m__17847__auto__ = (om.next.params[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,this$);
} else {
var m__17847__auto____$1 = (om.next.params["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__17846__auto__ = (((this$ == null))?null:this$);
var m__17847__auto__ = (om.next.query[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,this$);
} else {
var m__17847__auto____$1 = (om.next.query["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__17846__auto__ = (((this$ == null))?null:this$);
var m__17847__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,this$,new_state);
} else {
var m__17847__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__17846__auto__ = (((this$ == null))?null:this$);
var m__17847__auto__ = (om.next._get_state[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,this$);
} else {
var m__17847__auto____$1 = (om.next._get_state["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__17846__auto__ = (((this$ == null))?null:this$);
var m__17847__auto__ = (om.next._get_rendered_state[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,this$);
} else {
var m__17847__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__17846__auto__ = (((this$ == null))?null:this$);
var m__17847__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,this$);
} else {
var m__17847__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__17179__auto__ = (x instanceof cljs.core.Symbol);
if(and__17179__auto__){
return goog.string.startsWith(cljs.core.name.call(null,x),"?");
} else {
return and__17179__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,cljs.core.name.call(null,x).substring((1)));
});
om.next.bind_query = (function om$next$bind_query(query,params){
var replace_var = (function om$next$bind_query_$_replace_var(node){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,node))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,node),node);
} else {
return node;
}
});
return clojure.walk.prewalk.call(null,replace_var,query);
});
om.next.component_QMARK_;

om.next.get_reconciler;

om.next.props;
om.next.get_local_query_data = (function om$next$get_local_query_data(component){
var G__29295 = om.next.get_reconciler.call(null,component);
var G__29295__$1 = (((G__29295 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__29295));
var G__29295__$2 = (((G__29295__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__29295__$1));
var G__29295__$3 = (((G__29295__$2 == null))?null:cljs.core.deref.call(null,G__29295__$2));
var G__29295__$4 = (((G__29295__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__29295__$3));
var G__29295__$5 = (((G__29295__$4 == null))?null:cljs.core.get.call(null,G__29295__$4,component));
return G__29295__$5;
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data.call(null,component),om.next.query.call(null,component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data.call(null,component),om.next.params.call(null,component));
});
om.next.get_component_query = (function om$next$get_component_query(c){
var qps = om.next.get_local_query_data.call(null,c);
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(qps,om.next.query.call(null,c));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(c),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c'","c'",-167114389,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(qps,om.next.params.call(null,c))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.type.call(null,c)], null));
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x))){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
var q = om.next.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var x__$1 = Object.create(x.prototype);
if(((!((x__$1 == null)))?(((false) || (x__$1.om$next$IQuery$))?true:(((!x__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x__$1):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x__$1))){
var q = om.next.query.call(null,x__$1);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x__$1),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x__$1], null));
} else {
return null;
}
} else {
return null;
}
}
});
om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$IQuery$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x);
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props.call(null,null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4423__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4423__auto__)){
var rk = temp__4423__auto__;
return rk;
} else {
var temp__4423__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 * om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args29302 = [];
var len__18249__auto___29309 = arguments.length;
var i__18250__auto___29310 = (0);
while(true){
if((i__18250__auto___29310 < len__18249__auto___29309)){
args29302.push((arguments[i__18250__auto___29310]));

var G__29311 = (i__18250__auto___29310 + (1));
i__18250__auto___29310 = G__29311;
continue;
} else {
}
break;
}

var G__29304 = args29302.length;
switch (G__29304) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29302.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__29305){
var map__29306 = p__29305;
var map__29306__$1 = ((((!((map__29306 == null)))?((((map__29306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29306):map__29306);
var opts = map__29306__$1;
var validator = cljs.core.get.call(null,map__29306__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.call(null,map__29306__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"class","class",-390430469,null))))].join('')));
}

return ((function (map__29306,map__29306__$1,opts,validator,keyfn){
return (function() { 
var G__29313__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"props","props",2093813254,null))))].join('')));
}
}

if(cljs.core.truth_(om.next._STAR_instrument_STAR_)){
return cljs.core.apply.call(null,om.next._STAR_instrument_STAR_,props,children);
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__29308 = ref;
var G__29308__$1 = (((ref instanceof cljs.core.Keyword))?[cljs.core.str(G__29308)].join(''):G__29308);
return G__29308__$1;
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,{"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_},children);
}
};
var G__29313 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__29314__i = 0, G__29314__a = new Array(arguments.length -  1);
while (G__29314__i < G__29314__a.length) {G__29314__a[G__29314__i] = arguments[G__29314__i + 1]; ++G__29314__i;}
  children = new cljs.core.IndexedSeq(G__29314__a,0);
} 
return G__29313__delegate.call(this,props,children);};
G__29313.cljs$lang$maxFixedArity = 1;
G__29313.cljs$lang$applyTo = (function (arglist__29315){
var props = cljs.core.first(arglist__29315);
var children = cljs.core.rest(arglist__29315);
return G__29313__delegate(props,children);
});
G__29313.cljs$core$IFn$_invoke$arity$variadic = G__29313__delegate;
return G__29313;
})()
;
;})(map__29306,map__29306__$1,opts,validator,keyfn))
});

om.next.factory.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
return x.om$isComponent;
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args29316 = [];
var len__18249__auto___29319 = arguments.length;
var i__18250__auto___29320 = (0);
while(true){
if((i__18250__auto___29320 < len__18249__auto___29319)){
args29316.push((arguments[i__18250__auto___29320]));

var G__29321 = (i__18250__auto___29320 + (1));
i__18250__auto___29320 = G__29321;
continue;
} else {
}
break;
}

var G__29318 = args29316.length;
switch (G__29318) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29316.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;
om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args29323 = [];
var len__18249__auto___29326 = arguments.length;
var i__18250__auto___29327 = (0);
while(true){
if((i__18250__auto___29327 < len__18249__auto___29326)){
args29323.push((arguments[i__18250__auto___29327]));

var G__29328 = (i__18250__auto___29327 + (1));
i__18250__auto___29327 = G__29328;
continue;
} else {
}
break;
}

var G__29325 = args29323.length;
switch (G__29325) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29323.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;
om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,next_props),om.next.get_props.call(null,component.props),om.next.get_next_props.call(null,component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
});
/**
 * Get basis t value for when the component last read its props from
 * the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *   the mount root.
 */
om.next.depth = (function om$next$depth(component){
return om.next.get_prop.call(null,component,"omcljs$depth");
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return component.props.key;
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__17191__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
});
om.next.shared = (function om$next$shared(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.get_prop.call(null,component,"omcljs$shared");
});
om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var G__29331 = c.state;
goog.object.set(G__29331,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__29331;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
});
/**
 * Add computed properties to props.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if(cljs.core.vector_QMARK_.call(null,props)){
var G__29334 = props;
var G__29334__$1 = ((!(cljs.core.empty_QMARK_.call(null,computed_map)))?cljs.core.vary_meta.call(null,G__29334,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map):G__29334);
return G__29334__$1;
} else {
var G__29335 = props;
var G__29335__$1 = ((!(cljs.core.empty_QMARK_.call(null,computed_map)))?cljs.core.assoc.call(null,G__29335,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map):G__29335);
return G__29335__$1;
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args29336 = [];
var len__18249__auto___29341 = arguments.length;
var i__18250__auto___29342 = (0);
while(true){
if((i__18250__auto___29342 < len__18249__auto___29341)){
args29336.push((arguments[i__18250__auto___29342]));

var G__29343 = (i__18250__auto___29342 + (1));
i__18250__auto___29342 = G__29343;
continue;
} else {
}
break;
}

var G__29338 = args29336.length;
switch (G__29338) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29336.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
var props = (function (){var G__29339 = x;
var G__29339__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__29339):G__29339);
return G__29339__$1;
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329)], null),(function (){var G__29340 = k_or_ks;
var G__29340__$1 = ((!(cljs.core.sequential_QMARK_.call(null,k_or_ks)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__29340],null)):G__29340);
return G__29340__$1;
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;
/**
 * Given a component return its ident
 */
om.next.get_ident = (function om$next$get_ident(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.ident.call(null,component,om.next.props.call(null,component));
});
om.next.schedule_render_BANG_;
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component))){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__4423__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__4423__auto__)){
var r = temp__4423__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args29347 = [];
var len__18249__auto___29351 = arguments.length;
var i__18250__auto___29352 = (0);
while(true){
if((i__18250__auto___29352 < len__18249__auto___29351)){
args29347.push((arguments[i__18250__auto___29352]));

var G__29353 = (i__18250__auto___29352 + (1));
i__18250__auto___29352 = G__29353;
continue;
} else {
}
break;
}

var G__29349 = args29347.length;
switch (G__29349) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29347.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component)))?om.next._get_state.call(null,component):(function (){var temp__4425__auto__ = component.state;
if(cljs.core.truth_(temp__4425__auto__)){
var state = temp__4425__auto__;
var or__17191__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Update a component's local state. Similar to Clojure(Script)'s update-in.
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args29355 = [];
var len__18249__auto___29365 = arguments.length;
var i__18250__auto___29366 = (0);
while(true){
if((i__18250__auto___29366 < len__18249__auto___29365)){
args29355.push((arguments[i__18250__auto___29366]));

var G__29367 = (i__18250__auto___29366 + (1));
i__18250__auto___29366 = G__29367;
continue;
} else {
}
break;
}

var G__29364 = args29355.length;
switch (G__29364) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__18268__auto__ = (new cljs.core.IndexedSeq(args29355.slice((6)),(0)));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__18268__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq29356){
var G__29357 = cljs.core.first.call(null,seq29356);
var seq29356__$1 = cljs.core.next.call(null,seq29356);
var G__29358 = cljs.core.first.call(null,seq29356__$1);
var seq29356__$2 = cljs.core.next.call(null,seq29356__$1);
var G__29359 = cljs.core.first.call(null,seq29356__$2);
var seq29356__$3 = cljs.core.next.call(null,seq29356__$2);
var G__29360 = cljs.core.first.call(null,seq29356__$3);
var seq29356__$4 = cljs.core.next.call(null,seq29356__$3);
var G__29361 = cljs.core.first.call(null,seq29356__$4);
var seq29356__$5 = cljs.core.next.call(null,seq29356__$4);
var G__29362 = cljs.core.first.call(null,seq29356__$5);
var seq29356__$6 = cljs.core.next.call(null,seq29356__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29357,G__29358,G__29359,G__29360,G__29361,G__29362,seq29356__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,component))){
return om.next._get_rendered_state.call(null,component);
} else {
var G__29372 = component;
var G__29372__$1 = (((G__29372 == null))?null:G__29372.state);
var G__29372__$2 = (((G__29372__$1 == null))?null:goog.object.get(G__29372__$1,"omcljs$state"));
return G__29372__$2;
}
});
om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ILocalState,c))){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__4425__auto__ = (function (){var G__29376 = c;
var G__29376__$1 = (((G__29376 == null))?null:G__29376.state);
var G__29376__$2 = (((G__29376__$1 == null))?null:goog.object.get(G__29376__$1,"omcljs$pendingState"));
return G__29376__$2;
})();
if(cljs.core.truth_(temp__4425__auto__)){
var pending = temp__4425__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args29377 = [];
var len__18249__auto___29380 = arguments.length;
var i__18250__auto___29381 = (0);
while(true){
if((i__18250__auto___29381 < len__18249__auto___29380)){
args29377.push((arguments[i__18250__auto___29381]));

var G__29382 = (i__18250__auto___29381 + (1));
i__18250__auto___29381 = G__29382;
continue;
} else {
}
break;
}

var G__29379 = args29377.length;
switch (G__29379) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29377.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return component.setState({"omcljs$state": new_state},null);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Change the query of a component. Will schedule a re-render.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(component,new_query){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var r = om.next.get_reconciler.call(null,component);
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));
if((om.next._STAR_logger_STAR_ == null)){
} else {
goog.log.info(om.next._STAR_logger_STAR_,[cljs.core.str((function (){var temp__4425__auto__ = om.next.ident.call(null,component,om.next.props.call(null,component));
if(cljs.core.truth_(temp__4425__auto__)){
var ref = temp__4425__auto__;
return [cljs.core.str(cljs.core.pr_str.call(null,ref)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str("changed query '"),cljs.core.str(new_query),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),component], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new_query], null));

om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

om.next.protocols.reindex_BANG_.call(null,r);

return null;
});
/**
 * Change the query parameters of a component. Will schedule a re-render.
 */
om.next.set_params_BANG_ = (function om$next$set_params_BANG_(component,new_params){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var r = om.next.get_reconciler.call(null,component);
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));
if((om.next._STAR_logger_STAR_ == null)){
} else {
goog.log.info(om.next._STAR_logger_STAR_,[cljs.core.str((function (){var temp__4425__auto__ = om.next.ident.call(null,component,om.next.props.call(null,component));
if(cljs.core.truth_(temp__4425__auto__)){
var ref = temp__4425__auto__;
return [cljs.core.str(cljs.core.pr_str.call(null,ref)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str("changed query params "),cljs.core.str(new_params),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),component], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new_params], null));

om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

om.next.protocols.reindex_BANG_.call(null,r);

return null;
});
/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__29385 = component.refs;
var G__29385__$1 = (((G__29385 == null))?null:goog.object.get(G__29385,name));
return G__29385__$1;
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args29386 = [];
var len__18249__auto___29389 = arguments.length;
var i__18250__auto___29390 = (0);
while(true){
if((i__18250__auto___29390 < len__18249__auto___29389)){
args29386.push((arguments[i__18250__auto___29390]));

var G__29391 = (i__18250__auto___29390 + (1));
i__18250__auto___29390 = G__29391;
continue;
} else {
}
break;
}

var G__29388 = args29386.length;
switch (G__29388) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29386.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var c__$1 = c;
var ret = cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,c__$1));
while(true){
var temp__4423__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var p = temp__4423__auto__;
if(cljs.core.truth_(om.next.iquery_QMARK_.call(null,p))){
var G__29393 = p;
var G__29394 = cljs.core.cons.call(null,cljs.core.type.call(null,p),ret);
c__$1 = G__29393;
ret = G__29394;
continue;
} else {
var G__29395 = p;
var G__29396 = ret;
c__$1 = G__29395;
ret = G__29396;
continue;
}
} else {
var seen = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.take_while.call(null,((function (c__$1,ret,seen,temp__4423__auto__){
return (function (x){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),x)){
return null;
} else {
cljs.core.swap_BANG_.call(null,seen,cljs.core.conj,x);

return x;
}
});})(c__$1,ret,seen,temp__4423__auto__))
,ret);
}
break;
}
});
om.next.join_value = (function om$next$join_value(node){
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.ffirst.call(null,node);
} else {
return cljs.core.first.call(null,node);
}
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"subquery-class","subquery-class",-917164088,null))))].join('')));
}

var ref = (function (){var G__29398 = subquery_ref;
var G__29398__$1 = (((subquery_ref instanceof cljs.core.Keyword))?[cljs.core.str(G__29398)].join(''):G__29398);
return G__29398__$1;
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
});
om.next.reconciler_QMARK_;
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
var f = (function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
});
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(300));
} else {
return null;
}
});
om.next.remove_root_BANG_;
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args29399 = [];
var len__18249__auto___29402 = arguments.length;
var i__18250__auto___29403 = (0);
while(true){
if((i__18250__auto___29403 < len__18249__auto___29402)){
args29399.push((arguments[i__18250__auto___29403]));

var G__29404 = (i__18250__auto___29403 + (1));
i__18250__auto___29403 = G__29404;
continue;
} else {
}
break;
}

var G__29401 = args29399.length;
switch (G__29401) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29399.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"root-class","root-class",1372859229,null))))].join('')));
}

var temp__4425__auto___29406 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__4425__auto___29406)){
var old_reconciler_29407 = temp__4425__auto___29406;
om.next.remove_root_BANG_.call(null,old_reconciler_29407,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__17846__auto__ = (((c == null))?null:c);
var m__17847__auto__ = (om.next.tx_intercept[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,c,tx);
} else {
var m__17847__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310)], null));
});
om.next.gather_sends = (function om$next$gather_sends(p__29409,tx,remotes){
var map__29414 = p__29409;
var map__29414__$1 = ((((!((map__29414 == null)))?((((map__29414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29414):map__29414);
var env = map__29414__$1;
var parser = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__29414,map__29414__$1,env,parser){
return (function (p1__29408_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__29408_SHARP_,parser.call(null,env,tx,p1__29408_SHARP_)],null));
});})(map__29414,map__29414__$1,env,parser))
),cljs.core.filter.call(null,((function (map__29414,map__29414__$1,env,parser){
return (function (p__29416){
var vec__29417 = p__29416;
var _ = cljs.core.nth.call(null,vec__29417,(0),null);
var v = cljs.core.nth.call(null,vec__29417,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__29414,map__29414__$1,env,parser))
)),remotes);
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__17179__auto__ = c;
if(cljs.core.truth_(and__17179__auto__)){
return cljs.core.not.call(null,ref);
} else {
return and__17179__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (((om.next._STAR_logger_STAR_ == null))?null:goog.log.info(om.next._STAR_logger_STAR_,[cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join('')));
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,(cljs.core.truth_(ref__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref__$1], null):cljs.core.PersistentVector.EMPTY),cljs.core.remove.call(null,cljs.core.symbol_QMARK_,cljs.core.keys.call(null,v))));

if(cljs.core.empty_QMARK_.call(null,snds)){
return null;
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,snds);

return om.next.schedule_sends_BANG_.call(null,r);
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering. If given a reconciler can be
 * optionally passed a ref as the second argument.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args29418 = [];
var len__18249__auto___29423 = arguments.length;
var i__18250__auto___29424 = (0);
while(true){
if((i__18250__auto___29424 < len__18249__auto___29423)){
args29418.push((arguments[i__18250__auto___29424]));

var G__29425 = (i__18250__auto___29424 + (1));
i__18250__auto___29424 = G__29425;
continue;
} else {
}
break;
}

var G__29420 = args29418.length;
switch (G__29420) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29418.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null))))].join('')));
}

if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx);
} else {
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("transact! invoked by component "),cljs.core.str(x),cljs.core.str(" that does not implement IQuery")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IQuery","IQuery",-2026788688,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var p = om.next.parent.call(null,x);
var tx__$1 = tx;
while(true){
if((p == null)){
return om.next.transact_STAR_.call(null,om.next.get_reconciler.call(null,x),x,null,tx__$1);
} else {
var tx__$2 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:(((!p.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.ITxIntercept,p):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.ITxIntercept,p)))?om.next.tx_intercept.call(null,p,tx__$1):tx__$1);
var G__29427 = om.next.parent.call(null,p);
var G__29428 = tx__$2;
p = G__29427;
tx__$1 = G__29428;
continue;
}
break;
}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__29429){
var map__29432 = p__29429;
var map__29432__$1 = ((((!((map__29432 == null)))?((((map__29432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29432):map__29432);
var opts = map__29432__$1;
var read = cljs.core.get.call(null,map__29432__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__29432__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))))].join('')));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
om.next.join_QMARK_ = (function om$next$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_.call(null,x))?cljs.core.first.call(null,x):x);
return cljs.core.map_QMARK_.call(null,x__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,__meta,__extmap,__hash){
this.indexes = indexes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var class$ = (function (){var G__29440 = x;
var G__29440__$1 = ((om.next.component_QMARK_.call(null,x))?cljs.core.type.call(null,G__29440):G__29440);
return G__29440__$1;
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$build_index_STAR_(class$__$1,selector,path,classpath){
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),om.next.query_template.call(null,om.next.focus_query.call(null,rootq,path),path));
} else {
}

if(cljs.core.vector_QMARK_.call(null,selector)){
var map__29495 = cljs.core.group_by.call(null,om.next.join_QMARK_,selector);
var map__29495__$1 = ((((!((map__29495 == null)))?((((map__29495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29495):map__29495);
var props = cljs.core.get.call(null,map__29495__$1,false);
var joins = cljs.core.get.call(null,map__29495__$1,true);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__29495,map__29495__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__29434_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__29434_SHARP_,cljs.core.zipmap.call(null,props,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true))));
});})(map__29495,map__29495__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var seq__29497 = cljs.core.seq.call(null,joins);
var chunk__29498 = null;
var count__29499 = (0);
var i__29500 = (0);
while(true){
if((i__29500 < count__29499)){
var join = cljs.core._nth.call(null,chunk__29498,i__29500);
var vec__29501_29519 = om.next.join_value.call(null,join);
var prop_29520 = cljs.core.nth.call(null,vec__29501_29519,(0),null);
var selector_SINGLEQUOTE__29521 = cljs.core.nth.call(null,vec__29501_29519,(1),null);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__29497,chunk__29498,count__29499,i__29500,vec__29501_29519,prop_29520,selector_SINGLEQUOTE__29521,join,map__29495,map__29495__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__29435_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__29435_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_29520,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__29497,chunk__29498,count__29499,i__29500,vec__29501_29519,prop_29520,selector_SINGLEQUOTE__29521,join,map__29495,map__29495__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__29522 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE__29521));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__29522,selector_SINGLEQUOTE__29521,cljs.core.conj.call(null,path,prop_29520),(function (){var G__29502 = classpath;
var G__29502__$1 = (cljs.core.truth_(class_SINGLEQUOTE__29522)?cljs.core.conj.call(null,G__29502,class_SINGLEQUOTE__29522):G__29502);
return G__29502__$1;
})());

var G__29523 = seq__29497;
var G__29524 = chunk__29498;
var G__29525 = count__29499;
var G__29526 = (i__29500 + (1));
seq__29497 = G__29523;
chunk__29498 = G__29524;
count__29499 = G__29525;
i__29500 = G__29526;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29497);
if(temp__4425__auto__){
var seq__29497__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29497__$1)){
var c__17994__auto__ = cljs.core.chunk_first.call(null,seq__29497__$1);
var G__29527 = cljs.core.chunk_rest.call(null,seq__29497__$1);
var G__29528 = c__17994__auto__;
var G__29529 = cljs.core.count.call(null,c__17994__auto__);
var G__29530 = (0);
seq__29497 = G__29527;
chunk__29498 = G__29528;
count__29499 = G__29529;
i__29500 = G__29530;
continue;
} else {
var join = cljs.core.first.call(null,seq__29497__$1);
var vec__29503_29531 = om.next.join_value.call(null,join);
var prop_29532 = cljs.core.nth.call(null,vec__29503_29531,(0),null);
var selector_SINGLEQUOTE__29533 = cljs.core.nth.call(null,vec__29503_29531,(1),null);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__29497,chunk__29498,count__29499,i__29500,vec__29503_29531,prop_29532,selector_SINGLEQUOTE__29533,join,seq__29497__$1,temp__4425__auto__,map__29495,map__29495__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__29435_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__29435_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_29532,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__29497,chunk__29498,count__29499,i__29500,vec__29503_29531,prop_29532,selector_SINGLEQUOTE__29533,join,seq__29497__$1,temp__4425__auto__,map__29495,map__29495__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__29534 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE__29533));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__29534,selector_SINGLEQUOTE__29533,cljs.core.conj.call(null,path,prop_29532),(function (){var G__29504 = classpath;
var G__29504__$1 = (cljs.core.truth_(class_SINGLEQUOTE__29534)?cljs.core.conj.call(null,G__29504,class_SINGLEQUOTE__29534):G__29504);
return G__29504__$1;
})());

var G__29535 = cljs.core.next.call(null,seq__29497__$1);
var G__29536 = null;
var G__29537 = (0);
var G__29538 = (0);
seq__29497 = G__29535;
chunk__29498 = G__29536;
count__29499 = G__29537;
i__29500 = G__29538;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var seq__29505 = cljs.core.seq.call(null,selector);
var chunk__29506 = null;
var count__29507 = (0);
var i__29508 = (0);
while(true){
if((i__29508 < count__29507)){
var vec__29509 = cljs.core._nth.call(null,chunk__29506,i__29508);
var k = cljs.core.nth.call(null,vec__29509,(0),null);
var selector_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29509,(1),null);
var class_SINGLEQUOTE__29539 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE_));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__29539,selector_SINGLEQUOTE_,cljs.core.conj.call(null,path,k),(function (){var G__29510 = classpath;
var G__29510__$1 = (cljs.core.truth_(class_SINGLEQUOTE__29539)?cljs.core.conj.call(null,G__29510,class_SINGLEQUOTE__29539):G__29510);
return G__29510__$1;
})());

var G__29540 = seq__29505;
var G__29541 = chunk__29506;
var G__29542 = count__29507;
var G__29543 = (i__29508 + (1));
seq__29505 = G__29540;
chunk__29506 = G__29541;
count__29507 = G__29542;
i__29508 = G__29543;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29505);
if(temp__4425__auto__){
var seq__29505__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29505__$1)){
var c__17994__auto__ = cljs.core.chunk_first.call(null,seq__29505__$1);
var G__29544 = cljs.core.chunk_rest.call(null,seq__29505__$1);
var G__29545 = c__17994__auto__;
var G__29546 = cljs.core.count.call(null,c__17994__auto__);
var G__29547 = (0);
seq__29505 = G__29544;
chunk__29506 = G__29545;
count__29507 = G__29546;
i__29508 = G__29547;
continue;
} else {
var vec__29511 = cljs.core.first.call(null,seq__29505__$1);
var k = cljs.core.nth.call(null,vec__29511,(0),null);
var selector_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29511,(1),null);
var class_SINGLEQUOTE__29548 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector_SINGLEQUOTE_));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__29548,selector_SINGLEQUOTE_,cljs.core.conj.call(null,path,k),(function (){var G__29512 = classpath;
var G__29512__$1 = (cljs.core.truth_(class_SINGLEQUOTE__29548)?cljs.core.conj.call(null,G__29512,class_SINGLEQUOTE__29548):G__29512);
return G__29512__$1;
})());

var G__29549 = cljs.core.next.call(null,seq__29505__$1);
var G__29550 = null;
var G__29551 = (0);
var G__29552 = (0);
seq__29505 = G__29549;
chunk__29506 = G__29550;
count__29507 = G__29551;
i__29508 = G__29552;
continue;
}
} else {
return null;
}
}
break;
}
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
build_index_STAR_.call(null,class$,rootq,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null));

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ref = om.next.ident.call(null,c,om.next.props.call(null,c));
if(!(om.next.component_QMARK_.call(null,ref))){
var G__29513 = indexes__$2;
var G__29513__$1 = (cljs.core.truth_(ref)?cljs.core.update_in.call(null,G__29513,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ref], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c):G__29513);
return G__29513__$1;
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.disj,c);
var ref = om.next.ident.call(null,c,om.next.props.call(null,c));
if(!(om.next.component_QMARK_.call(null,ref))){
var G__29514 = indexes__$2;
var G__29514__$1 = (cljs.core.truth_(ref)?cljs.core.update_in.call(null,G__29514,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ref], null),cljs.core.disj,c):G__29514);
return G__29514__$1;
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var cs = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407));
if(!(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407),cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null));
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (cs__$1,cs,indexes__$1,___$1){
return (function (p1__29436_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__29436_SHARP_], null));
});})(cs__$1,cs,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
throw (new Error([cljs.core.str("Invalid key "),cljs.core.str(k),cljs.core.str(", key must be ref or keyword")].join('')));
}
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17805__auto__,k__17806__auto__){
var self__ = this;
var this__17805__auto____$1 = this;
return cljs.core._lookup.call(null,this__17805__auto____$1,k__17806__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17807__auto__,k29438,else__17808__auto__){
var self__ = this;
var this__17807__auto____$1 = this;
var G__29515 = (((k29438 instanceof cljs.core.Keyword))?k29438.fqn:null);
switch (G__29515) {
case "indexes":
return self__.indexes;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29438,else__17808__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17819__auto__,writer__17820__auto__,opts__17821__auto__){
var self__ = this;
var this__17819__auto____$1 = this;
var pr_pair__17822__auto__ = ((function (this__17819__auto____$1){
return (function (keyval__17823__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17820__auto__,cljs.core.pr_writer,""," ","",opts__17821__auto__,keyval__17823__auto__);
});})(this__17819__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17820__auto__,pr_pair__17822__auto__,"#om.next.Indexer{",", ","}",opts__17821__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IIterable$ = true;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29437){
var self__ = this;
var G__29437__$1 = this;
return (new cljs.core.RecordIter((0),G__29437__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17803__auto__){
var self__ = this;
var this__17803__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17799__auto__){
var self__ = this;
var this__17799__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17809__auto__){
var self__ = this;
var this__17809__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17800__auto__){
var self__ = this;
var this__17800__auto____$1 = this;
var h__17626__auto__ = self__.__hash;
if(!((h__17626__auto__ == null))){
return h__17626__auto__;
} else {
var h__17626__auto____$1 = cljs.core.hash_imap.call(null,this__17800__auto____$1);
self__.__hash = h__17626__auto____$1;

return h__17626__auto____$1;
}
});

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17801__auto__,other__17802__auto__){
var self__ = this;
var this__17801__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17179__auto__ = other__17802__auto__;
if(cljs.core.truth_(and__17179__auto__)){
var and__17179__auto____$1 = (this__17801__auto____$1.constructor === other__17802__auto__.constructor);
if(and__17179__auto____$1){
return cljs.core.equiv_map.call(null,this__17801__auto____$1,other__17802__auto__);
} else {
return and__17179__auto____$1;
}
} else {
return and__17179__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17814__auto__,k__17815__auto__){
var self__ = this;
var this__17814__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__17815__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17814__auto____$1),self__.__meta),k__17815__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17815__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17812__auto__,k__17813__auto__,G__29437){
var self__ = this;
var this__17812__auto____$1 = this;
var pred__29516 = cljs.core.keyword_identical_QMARK_;
var expr__29517 = k__17813__auto__;
if(cljs.core.truth_(pred__29516.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__29517))){
return (new om.next.Indexer(G__29437,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17813__auto__,G__29437),null));
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17817__auto__){
var self__ = this;
var this__17817__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17804__auto__,G__29437){
var self__ = this;
var this__17804__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,G__29437,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17810__auto__,entry__17811__auto__){
var self__ = this;
var this__17810__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17811__auto__)){
return cljs.core._assoc.call(null,this__17810__auto____$1,cljs.core._nth.call(null,entry__17811__auto__,(0)),cljs.core._nth.call(null,entry__17811__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17810__auto____$1,entry__17811__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__17839__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__17839__auto__,writer__17840__auto__){
return cljs.core._write.call(null,writer__17840__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes){
return (new om.next.Indexer(indexes,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__29439){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__29439),null,cljs.core.dissoc.call(null,G__29439,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null)),null,null,null));
});
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
om.next.class_path__GT_query = (function om$next$class_path__GT_query(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args29555 = [];
var len__18249__auto___29560 = arguments.length;
var i__18250__auto___29561 = (0);
while(true){
if((i__18250__auto___29561 < len__18249__auto___29560)){
args29555.push((arguments[i__18250__auto___29561]));

var G__29562 = (i__18250__auto___29561 + (1));
i__18250__auto___29561 = G__29562;
continue;
} else {
}
break;
}

var G__29557 = args29555.length;
switch (G__29557) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29555.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(((!((component == null)))?(((false) || (component.om$next$IQuery$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component))){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,path){
if(((!((component == null)))?(((false) || (component.om$next$IQuery$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,component))){
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),path);
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path_SINGLEQUOTE_,cp,qs){
return (function (p1__29554_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__29554_SHARP_),path_SINGLEQUOTE_));
});})(path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace.call(null,q,om.next.get_query.call(null,component));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;
om.next.to_class = (function om$next$to_class(class$){
if(!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:(((!class$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,class$):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,class$)))){
return Object.create(class$.prototype);
} else {
return class$;
}
});
om.next.normalize_STAR_ = (function om$next$normalize_STAR_(selector,data,refs){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),selector)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,selector)){
var class$ = om.next.to_class.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,selector)));
var ref = om.next.ident.call(null,class$,data);
return om$next$normalize_STAR_.call(null,cljs.core.get.call(null,selector,cljs.core.first.call(null,ref)),data,refs);
} else {
var q = cljs.core.seq.call(null,selector);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((q == null))){
var node = cljs.core.first.call(null,q);
if(cljs.core.truth_(om.next.join_QMARK_.call(null,node))){
var vec__29571 = om.next.join_value.call(null,node);
var k = cljs.core.nth.call(null,vec__29571,(0),null);
var sel = cljs.core.nth.call(null,vec__29571,(1),null);
var class$ = om.next.to_class.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel)));
var v = cljs.core.get.call(null,data,k);
if(cljs.core.map_QMARK_.call(null,v)){
var x = om$next$normalize_STAR_.call(null,sel,v,refs);
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__29574 = cljs.core.next.call(null,q);
var G__29575 = cljs.core.assoc.call(null,ret,k,i);
q = G__29574;
ret = G__29575;
continue;
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__29571,k,sel,class$,v,node){
return (function (p1__29566_SHARP_){
return om$next$normalize_STAR_.call(null,sel,p1__29566_SHARP_,refs);
});})(q,ret,vec__29571,k,sel,class$,v,node))
),v);
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__29571,k,sel,class$,v,node){
return (function (p1__29567_SHARP_){
return om.next.ident.call(null,class$,p1__29567_SHARP_);
});})(q,ret,xs,vec__29571,k,sel,class$,v,node))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel)){
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst.call(null,is)], null),((function (q,ret,xs,is,vec__29571,k,sel,class$,v,node){
return (function (ys){
return cljs.core.merge_with.call(null,cljs.core.merge,ys,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.second,is),xs));
});})(q,ret,xs,is,vec__29571,k,sel,class$,v,node))
);
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,xs,is,vec__29571,k,sel,class$,v,node){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,xs,is,vec__29571,k,sel,class$,v,node){
return (function (ret__$1,p__29572){
var vec__29573 = p__29572;
var i = cljs.core.nth.call(null,vec__29573,(0),null);
var x = cljs.core.nth.call(null,vec__29573,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,xs,is,vec__29571,k,sel,class$,v,node))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,xs,is,vec__29571,k,sel,class$,v,node))
);
}

var G__29576 = cljs.core.next.call(null,q);
var G__29577 = cljs.core.assoc.call(null,ret,k,is);
q = G__29576;
ret = G__29577;
continue;
} else {
if((v == null)){
var G__29578 = cljs.core.next.call(null,q);
var G__29579 = ret;
q = G__29578;
ret = G__29579;
continue;
} else {
var G__29580 = cljs.core.next.call(null,q);
var G__29581 = cljs.core.assoc.call(null,ret,k,v);
q = G__29580;
ret = G__29581;
continue;

}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,node))?cljs.core.first.call(null,node):node);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__29582 = cljs.core.next.call(null,q);
var G__29583 = ret;
q = G__29582;
ret = G__29583;
continue;
} else {
var G__29584 = cljs.core.next.call(null,q);
var G__29585 = cljs.core.assoc.call(null,ret,k,v);
q = G__29584;
ret = G__29585;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-ref
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args29586 = [];
var len__18249__auto___29589 = arguments.length;
var i__18250__auto___29590 = (0);
while(true){
if((i__18250__auto___29590 < len__18249__auto___29589)){
args29586.push((arguments[i__18250__auto___29590]));

var G__29591 = (i__18250__auto___29590 + (1));
i__18250__auto___29590 = G__29591;
continue;
} else {
}
break;
}

var G__29588 = args29586.length;
switch (G__29588) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29586.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.call(null,x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_refs){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next.get_query.call(null,x));
var ret = om.next.normalize_STAR_.call(null,x__$1,data,refs);
if(merge_refs){
return cljs.core.merge.call(null,ret,cljs.core.deref.call(null,refs));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;
om.next.sift_refs = (function om$next$sift_refs(res){
var map__29596 = cljs.core.group_by.call(null,(function (p1__29593_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__29593_SHARP_));
}),res);
var map__29596__$1 = ((((!((map__29596 == null)))?((((map__29596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29596):map__29596);
var refs = cljs.core.get.call(null,map__29596__$1,true);
var rest = cljs.core.get.call(null,map__29596__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,refs),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
om.next.ref_QMARK_ = (function om$next$ref_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (((2) === cljs.core.count.call(null,x))) && ((cljs.core.nth.call(null,x,(0)) instanceof cljs.core.Keyword));
});
/**
 * Given a selector, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(selector,data,refs){
if(cljs.core.vector_QMARK_.call(null,data)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__29598_SHARP_){
return om$next$db__GT_tree.call(null,selector,cljs.core.get_in.call(null,refs,p1__29598_SHARP_),refs);
})),data);
} else {
var map__29602 = cljs.core.group_by.call(null,om.next.join_QMARK_,selector);
var map__29602__$1 = ((((!((map__29602 == null)))?((((map__29602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29602):map__29602);
var props = cljs.core.get.call(null,map__29602__$1,false);
var joins = cljs.core.get.call(null,map__29602__$1,true);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var vec__29604 = om.next.join_value.call(null,join);
var key = cljs.core.nth.call(null,vec__29604,(0),null);
var sel = cljs.core.nth.call(null,vec__29604,(1),null);
var v = cljs.core.get.call(null,data,key);
if(!(om.next.ref_QMARK_.call(null,v))){
var G__29605 = cljs.core.next.call(null,joins__$1);
var G__29606 = cljs.core.assoc.call(null,ret,key,om$next$db__GT_tree.call(null,sel,v,refs));
joins__$1 = G__29605;
ret = G__29606;
continue;
} else {
var G__29607 = cljs.core.next.call(null,joins__$1);
var G__29608 = cljs.core.assoc.call(null,ret,key,om$next$db__GT_tree.call(null,sel,cljs.core.get_in.call(null,refs,v),refs));
joins__$1 = G__29607;
ret = G__29608;
continue;
}
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,data,props),ret);
}
break;
}
}
});
om.next.queue_calls_BANG_ = (function om$next$queue_calls_BANG_(reconciler,res){
return om.next.protocols.queue_BANG_.call(null,reconciler,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)));
});
om.next.merge_refs = (function om$next$merge_refs(tree,config,refs){
var map__29617 = config;
var map__29617__$1 = ((((!((map__29617 == null)))?((((map__29617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29617):map__29617);
var merge_ref = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403));
var indexer = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var step = ((function (map__29617,map__29617__$1,merge_ref,indexer){
return (function om$next$merge_refs_$_step(tree_SINGLEQUOTE_,p__29622){
var vec__29624 = p__29622;
var ref = cljs.core.nth.call(null,vec__29624,(0),null);
var props = cljs.core.nth.call(null,vec__29624,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c = om.next.ref__GT_any.call(null,indexer,ref);
var props_SINGLEQUOTE_ = om.next.tree__GT_db.call(null,c,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ref.call(null,config,tree_SINGLEQUOTE_,ref,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ref.call(null,config,tree_SINGLEQUOTE_,ref,props);
}
});})(map__29617,map__29617__$1,merge_ref,indexer))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,res){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
var vec__29627 = om.next.sift_refs.call(null,res);
var refs = cljs.core.nth.call(null,vec__29627,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__29627,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.call(null,root,res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config),((function (config,root,vec__29627,refs,res_SINGLEQUOTE_,res_SINGLEQUOTE___$1){
return (function (p1__29625_SHARP_){
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_refs.call(null,p1__29625_SHARP_,config,refs),res_SINGLEQUOTE___$1);
});})(config,root,vec__29627,refs,res_SINGLEQUOTE_,res_SINGLEQUOTE___$1))
);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(reconciler,delta){
om.next.queue_calls_BANG_.call(null,reconciler,delta);

return om.next.merge_novelty_BANG_.call(null,reconciler,delta);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17805__auto__,k__17806__auto__){
var self__ = this;
var this__17805__auto____$1 = this;
return cljs.core._lookup.call(null,this__17805__auto____$1,k__17806__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17807__auto__,k29635,else__17808__auto__){
var self__ = this;
var this__17807__auto____$1 = this;
var G__29637 = (((k29635 instanceof cljs.core.Keyword))?k29635.fqn:null);
switch (G__29637) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29635,else__17808__auto__);

}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function (p1__29633_SHARP_){
om.next.queue_calls_BANG_.call(null,this$__$1,p1__29633_SHARP_);

return om.next.merge_novelty_BANG_.call(null,this$__$1,p1__29633_SHARP_);
});})(sends,this$__$1))
);
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.empty_QMARK_.call(null,q)){
new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","skip","om.next/skip",-2023963650)], null),q)){
} else {
var cs_29652 = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,___$1){
return (function (p1__29630_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__29630_SHARP_);
});})(st,q,___$1))
),((function (st,q,___$1){
return (function (p1__29631_SHARP_,p2__29632_SHARP_){
return cljs.core.into.call(null,p1__29631_SHARP_,p2__29632_SHARP_);
});})(st,q,___$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__29638_29653 = self__.config;
var map__29638_29654__$1 = ((((!((map__29638_29653 == null)))?((((map__29638_29653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29638_29653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29638_29653):map__29638_29653);
var ui__GT_props_29655 = cljs.core.get.call(null,map__29638_29654__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env_29656 = om.next.to_env.call(null,self__.config);
var seq__29640_29657 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs_29652));
var chunk__29641_29658 = null;
var count__29642_29659 = (0);
var i__29643_29660 = (0);
while(true){
if((i__29643_29660 < count__29642_29659)){
var c_29661 = cljs.core._nth.call(null,chunk__29641_29658,i__29643_29660);
if(om.next.mounted_QMARK_.call(null,c_29661)){
var computed_29662 = om.next.get_computed.call(null,om.next.props.call(null,c_29661));
var next_props_29663 = om.next.computed.call(null,ui__GT_props_29655.call(null,env_29656,c_29661),computed_29662);
if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c_29661,next_props_29663,om.next.get_state.call(null,c_29661)))){
if(!((next_props_29663 == null))){
om.next.update_component_BANG_.call(null,c_29661,next_props_29663);
} else {
c_29661.forceUpdate();
}
} else {
}
} else {
}

var G__29664 = seq__29640_29657;
var G__29665 = chunk__29641_29658;
var G__29666 = count__29642_29659;
var G__29667 = (i__29643_29660 + (1));
seq__29640_29657 = G__29664;
chunk__29641_29658 = G__29665;
count__29642_29659 = G__29666;
i__29643_29660 = G__29667;
continue;
} else {
var temp__4425__auto___29668 = cljs.core.seq.call(null,seq__29640_29657);
if(temp__4425__auto___29668){
var seq__29640_29669__$1 = temp__4425__auto___29668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29640_29669__$1)){
var c__17994__auto___29670 = cljs.core.chunk_first.call(null,seq__29640_29669__$1);
var G__29671 = cljs.core.chunk_rest.call(null,seq__29640_29669__$1);
var G__29672 = c__17994__auto___29670;
var G__29673 = cljs.core.count.call(null,c__17994__auto___29670);
var G__29674 = (0);
seq__29640_29657 = G__29671;
chunk__29641_29658 = G__29672;
count__29642_29659 = G__29673;
i__29643_29660 = G__29674;
continue;
} else {
var c_29675 = cljs.core.first.call(null,seq__29640_29669__$1);
if(om.next.mounted_QMARK_.call(null,c_29675)){
var computed_29676 = om.next.get_computed.call(null,om.next.props.call(null,c_29675));
var next_props_29677 = om.next.computed.call(null,ui__GT_props_29655.call(null,env_29656,c_29675),computed_29676);
if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c_29675,next_props_29677,om.next.get_state.call(null,c_29675)))){
if(!((next_props_29677 == null))){
om.next.update_component_BANG_.call(null,c_29675,next_props_29677);
} else {
c_29675.forceUpdate();
}
} else {
}
} else {
}

var G__29678 = cljs.core.next.call(null,seq__29640_29669__$1);
var G__29679 = null;
var G__29680 = (0);
var G__29681 = (0);
seq__29640_29657 = G__29678;
chunk__29641_29658 = G__29679;
count__29642_29659 = G__29680;
i__29643_29660 = G__29681;
continue;
}
} else {
}
}
break;
}

}
}

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712)], null),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
if(((!((root_class == null)))?(((false) || (root_class.om$next$IQuery$))?true:(((!root_class.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root_class):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root_class))){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__17179__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__17179__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__17179__auto__;
}
})())){
var new_state_29682 = om.next.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_29683 = cljs.core.meta.call(null,new_state_29682);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_29682,refs_29683));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);

om.next.protocols.queue_BANG_.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","skip","om.next/skip",-2023963650)], null));
} else {
}

var renderf = ((function (ret,rctor,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_29645 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_29646 = om.next._STAR_shared_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29646;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29645;
}});})(ret,rctor,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__17191__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return root_class;
}
})());
if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
var snds = om.next.gather_sends.call(null,env,sel,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,v)){
} else {
renderf.call(null,v);
}

if(cljs.core.empty_QMARK_.call(null,snds)){
return null;
} else {
var temp__4425__auto__ = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4425__auto__)){
var send = temp__4425__auto__;
return send.call(null,snds,((function (send,temp__4425__auto__,env,v,snds,sel,renderf,ret,rctor,this$__$1){
return (function (p1__29628_SHARP_){
om.next.merge_novelty_BANG_.call(null,this$__$1,p1__29628_SHARP_);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel));
});})(send,temp__4425__auto__,env,v,snds,sel,renderf,ret,rctor,this$__$1))
);
} else {
return null;
}
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),target);

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,this$__$1){
return (function (p1__29629_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__29629_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,this$__$1))
);

return new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
});})(renderf,parsef,ret,rctor,this$__$1))
], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),target,((function (renderf,parsef,ret,rctor,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);

return om.next.schedule_render_BANG_.call(null,this$__$1);
});})(renderf,parsef,ret,rctor,this$__$1))
);

parsef.call(null);

return ret;
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
if(((!((root == null)))?(((false) || (root.om$next$IQuery$))?true:(((!root.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root):false)):cljs.core.native_satisfies_QMARK_.call(null,om.next.IQuery,root))){
return om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root);
} else {
return null;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__4425__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__4425__auto__)){
var remove = temp__4425__auto__;
return remove.call(null);
} else {
return null;
}
});

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17819__auto__,writer__17820__auto__,opts__17821__auto__){
var self__ = this;
var this__17819__auto____$1 = this;
var pr_pair__17822__auto__ = ((function (this__17819__auto____$1){
return (function (keyval__17823__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17820__auto__,cljs.core.pr_writer,""," ","",opts__17821__auto__,keyval__17823__auto__);
});})(this__17819__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17820__auto__,pr_pair__17822__auto__,"#om.next.Reconciler{",", ","}",opts__17821__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IIterable$ = true;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29634){
var self__ = this;
var G__29634__$1 = this;
return (new cljs.core.RecordIter((0),G__29634__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17803__auto__){
var self__ = this;
var this__17803__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17799__auto__){
var self__ = this;
var this__17799__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17809__auto__){
var self__ = this;
var this__17809__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17800__auto__){
var self__ = this;
var this__17800__auto____$1 = this;
var h__17626__auto__ = self__.__hash;
if(!((h__17626__auto__ == null))){
return h__17626__auto__;
} else {
var h__17626__auto____$1 = cljs.core.hash_imap.call(null,this__17800__auto____$1);
self__.__hash = h__17626__auto____$1;

return h__17626__auto____$1;
}
});

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17801__auto__,other__17802__auto__){
var self__ = this;
var this__17801__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17179__auto__ = other__17802__auto__;
if(cljs.core.truth_(and__17179__auto__)){
var and__17179__auto____$1 = (this__17801__auto____$1.constructor === other__17802__auto__.constructor);
if(and__17179__auto____$1){
return cljs.core.equiv_map.call(null,this__17801__auto____$1,other__17802__auto__);
} else {
return and__17179__auto____$1;
}
} else {
return and__17179__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17814__auto__,k__17815__auto__){
var self__ = this;
var this__17814__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__17815__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17814__auto____$1),self__.__meta),k__17815__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17815__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17812__auto__,k__17813__auto__,G__29634){
var self__ = this;
var this__17812__auto____$1 = this;
var pred__29648 = cljs.core.keyword_identical_QMARK_;
var expr__29649 = k__17813__auto__;
if(cljs.core.truth_(pred__29648.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__29649))){
return (new om.next.Reconciler(G__29634,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29648.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__29649))){
return (new om.next.Reconciler(self__.config,G__29634,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17813__auto__,G__29634),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17817__auto__){
var self__ = this;
var this__17817__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17804__auto__,G__29634){
var self__ = this;
var this__17804__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__29634,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17810__auto__,entry__17811__auto__){
var self__ = this;
var this__17810__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17811__auto__)){
return cljs.core._assoc.call(null,this__17810__auto____$1,cljs.core._nth.call(null,entry__17811__auto__,(0)),cljs.core._nth.call(null,entry__17811__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17810__auto____$1,entry__17811__auto__);
}
});

om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__17839__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__17839__auto__,writer__17840__auto__){
return cljs.core._write.call(null,writer__17840__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__29636){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__29636),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__29636),null,cljs.core.dissoc.call(null,G__29636,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__29684,c){
var map__29687 = p__29684;
var map__29687__$1 = ((((!((map__29687 == null)))?((((map__29687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29687):map__29687);
var env = map__29687__$1;
var parser = cljs.core.get.call(null,map__29687__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var path = om.next.path.call(null,c);
var fq = om.next.full_query.call(null,c,path);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time.call(null);
var ui = parser.call(null,env,fq);
var e = cljs.core.system_time.call(null);
if((om.next._STAR_logger_STAR_ == null)){
} else {
var dt_29689 = (e - s);
if(((16) < dt_29689)){
goog.log.warning(om.next._STAR_logger_STAR_,[cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_29689),cljs.core.str(" msecs")].join(''));
} else {
}
}

return cljs.core.get_in.call(null,ui,path);
}
});
om.next.default_merge_ref = (function om$next$default_merge_ref(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
});
/**
 * Construct a reconciler from a configuration map, the following options
 * are required:
 * 
 * :state        - the application state, must be IAtom.
 * :normalize    - whether the state should be normalized. If true it is assumed
 *                 all novelty introduced into the system will also need
 *                 normalization.
 * :parser       - the parser to be used
 * :send         - required only if the parser will return a non-empty value when
 *                 run against the supplied :remotes. send is a function of two
 *                 arguments, the map of remote expressions keyed by remote target
 *                 and a callback which should be invoked with the result from each
 *                 remote target. Note this means the callback can be invoked
 *                 multiple times to support parallel fetching and incremental
 *                 loading if desired.
 * :remotes      - a vector of keywords representing remote services which can
 *                 evaluate query expressions. Defaults to [:remote]
 * :root-render  - the root render function. Defaults to ReactDOM.render
 * :root-unmount - the root unmount function. Defuaults to
 *                 ReactDOM.unmountComponentAtNode
 */
om.next.reconciler = (function om$next$reconciler(p__29697){
var map__29701 = p__29697;
var map__29701__$1 = ((((!((map__29701 == null)))?((((map__29701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29701):map__29701);
var config = map__29701__$1;
var root_render = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__29701,map__29701__$1,config){
return (function (p1__29694_SHARP_,p2__29695_SHARP_){
return ReactDOM.render(p1__29694_SHARP_,p2__29695_SHARP_);
});})(map__29701,map__29701__$1,config))
);
var normalize = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var merge_sends = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__29701,map__29701__$1,config,root_render,normalize){
return (function (p1__29690_SHARP_,p2__29691_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__29690_SHARP_,p2__29691_SHARP_);
});})(map__29701,map__29701__$1,config,root_render,normalize))
);
var remotes = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var history = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var merge_ref = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403),om.next.default_merge_ref);
var state = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ui__GT_props = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var root_unmount = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__29701,map__29701__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer){
return (function (p1__29696_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__29696_SHARP_);
});})(map__29701,map__29701__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (map__29701,map__29701__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,root_unmount,send){
return (function (p1__29692_SHARP_,p2__29693_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.merge,p1__29692_SHARP_,p2__29693_SHARP_);
});})(map__29701,map__29701__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,root_unmount,send))
);
var shared = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__29701,map__29701__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__29701,map__29701__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"config","config",-1659574354,null))))].join('')));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"merge-ref","merge-ref",-1505260403),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051)],[merge_sends,remotes,om.next.cache.cache.call(null,history),merge_ref,state_SINGLEQUOTE_,parser,ui__GT_props,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__17191__auto__ = !(norm_QMARK_);
if(or__17191__auto__){
return or__17191__auto__;
} else {
return normalize;
}
})()]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[false,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});

//# sourceMappingURL=next.js.map