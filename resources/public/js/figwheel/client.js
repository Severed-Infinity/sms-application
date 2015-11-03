// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38135__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__38135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38136__i = 0, G__38136__a = new Array(arguments.length -  0);
while (G__38136__i < G__38136__a.length) {G__38136__a[G__38136__i] = arguments[G__38136__i + 0]; ++G__38136__i;}
  args = new cljs.core.IndexedSeq(G__38136__a,0);
} 
return G__38135__delegate.call(this,args);};
G__38135.cljs$lang$maxFixedArity = 0;
G__38135.cljs$lang$applyTo = (function (arglist__38137){
var args = cljs.core.seq(arglist__38137);
return G__38135__delegate(args);
});
G__38135.cljs$core$IFn$_invoke$arity$variadic = G__38135__delegate;
return G__38135;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38138){
var map__38141 = p__38138;
var map__38141__$1 = ((((!((map__38141 == null)))?((((map__38141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38141):map__38141);
var message = cljs.core.get.call(null,map__38141__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38141__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16785__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16773__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16773__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16773__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21381__auto___38289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___38289,ch){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___38289,ch){
return (function (state_38259){
var state_val_38260 = (state_38259[(1)]);
if((state_val_38260 === (7))){
var inst_38255 = (state_38259[(2)]);
var state_38259__$1 = state_38259;
var statearr_38261_38290 = state_38259__$1;
(statearr_38261_38290[(2)] = inst_38255);

(statearr_38261_38290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (1))){
var state_38259__$1 = state_38259;
var statearr_38262_38291 = state_38259__$1;
(statearr_38262_38291[(2)] = null);

(statearr_38262_38291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (4))){
var inst_38218 = (state_38259[(7)]);
var inst_38218__$1 = (state_38259[(2)]);
var state_38259__$1 = (function (){var statearr_38263 = state_38259;
(statearr_38263[(7)] = inst_38218__$1);

return statearr_38263;
})();
if(cljs.core.truth_(inst_38218__$1)){
var statearr_38264_38292 = state_38259__$1;
(statearr_38264_38292[(1)] = (5));

} else {
var statearr_38265_38293 = state_38259__$1;
(statearr_38265_38293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (15))){
var inst_38225 = (state_38259[(8)]);
var inst_38240 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38225);
var inst_38241 = cljs.core.first.call(null,inst_38240);
var inst_38242 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38241);
var inst_38243 = console.warn("Figwheel: Not loading code with warnings - ",inst_38242);
var state_38259__$1 = state_38259;
var statearr_38266_38294 = state_38259__$1;
(statearr_38266_38294[(2)] = inst_38243);

(statearr_38266_38294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (13))){
var inst_38248 = (state_38259[(2)]);
var state_38259__$1 = state_38259;
var statearr_38267_38295 = state_38259__$1;
(statearr_38267_38295[(2)] = inst_38248);

(statearr_38267_38295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (6))){
var state_38259__$1 = state_38259;
var statearr_38268_38296 = state_38259__$1;
(statearr_38268_38296[(2)] = null);

(statearr_38268_38296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (17))){
var inst_38246 = (state_38259[(2)]);
var state_38259__$1 = state_38259;
var statearr_38269_38297 = state_38259__$1;
(statearr_38269_38297[(2)] = inst_38246);

(statearr_38269_38297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (3))){
var inst_38257 = (state_38259[(2)]);
var state_38259__$1 = state_38259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38259__$1,inst_38257);
} else {
if((state_val_38260 === (12))){
var inst_38224 = (state_38259[(9)]);
var inst_38238 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38224,opts);
var state_38259__$1 = state_38259;
if(cljs.core.truth_(inst_38238)){
var statearr_38270_38298 = state_38259__$1;
(statearr_38270_38298[(1)] = (15));

} else {
var statearr_38271_38299 = state_38259__$1;
(statearr_38271_38299[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (2))){
var state_38259__$1 = state_38259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38259__$1,(4),ch);
} else {
if((state_val_38260 === (11))){
var inst_38225 = (state_38259[(8)]);
var inst_38230 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38231 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38225);
var inst_38232 = cljs.core.async.timeout.call(null,(1000));
var inst_38233 = [inst_38231,inst_38232];
var inst_38234 = (new cljs.core.PersistentVector(null,2,(5),inst_38230,inst_38233,null));
var state_38259__$1 = state_38259;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38259__$1,(14),inst_38234);
} else {
if((state_val_38260 === (9))){
var state_38259__$1 = state_38259;
var statearr_38272_38300 = state_38259__$1;
(statearr_38272_38300[(2)] = null);

(statearr_38272_38300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (5))){
var inst_38218 = (state_38259[(7)]);
var inst_38220 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38221 = (new cljs.core.PersistentArrayMap(null,2,inst_38220,null));
var inst_38222 = (new cljs.core.PersistentHashSet(null,inst_38221,null));
var inst_38223 = figwheel.client.focus_msgs.call(null,inst_38222,inst_38218);
var inst_38224 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38223);
var inst_38225 = cljs.core.first.call(null,inst_38223);
var inst_38226 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_38259__$1 = (function (){var statearr_38273 = state_38259;
(statearr_38273[(8)] = inst_38225);

(statearr_38273[(9)] = inst_38224);

return statearr_38273;
})();
if(cljs.core.truth_(inst_38226)){
var statearr_38274_38301 = state_38259__$1;
(statearr_38274_38301[(1)] = (8));

} else {
var statearr_38275_38302 = state_38259__$1;
(statearr_38275_38302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (14))){
var inst_38236 = (state_38259[(2)]);
var state_38259__$1 = state_38259;
var statearr_38276_38303 = state_38259__$1;
(statearr_38276_38303[(2)] = inst_38236);

(statearr_38276_38303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (16))){
var state_38259__$1 = state_38259;
var statearr_38277_38304 = state_38259__$1;
(statearr_38277_38304[(2)] = null);

(statearr_38277_38304[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (10))){
var inst_38251 = (state_38259[(2)]);
var state_38259__$1 = (function (){var statearr_38278 = state_38259;
(statearr_38278[(10)] = inst_38251);

return statearr_38278;
})();
var statearr_38279_38305 = state_38259__$1;
(statearr_38279_38305[(2)] = null);

(statearr_38279_38305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (8))){
var inst_38224 = (state_38259[(9)]);
var inst_38228 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38224,opts);
var state_38259__$1 = state_38259;
if(cljs.core.truth_(inst_38228)){
var statearr_38280_38306 = state_38259__$1;
(statearr_38280_38306[(1)] = (11));

} else {
var statearr_38281_38307 = state_38259__$1;
(statearr_38281_38307[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21381__auto___38289,ch))
;
return ((function (switch__21316__auto__,c__21381__auto___38289,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____0 = (function (){
var statearr_38285 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38285[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__);

(statearr_38285[(1)] = (1));

return statearr_38285;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____1 = (function (state_38259){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_38259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e38286){if((e38286 instanceof Object)){
var ex__21320__auto__ = e38286;
var statearr_38287_38308 = state_38259;
(statearr_38287_38308[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38309 = state_38259;
state_38259 = G__38309;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__ = function(state_38259){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____1.call(this,state_38259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___38289,ch))
})();
var state__21383__auto__ = (function (){var statearr_38288 = f__21382__auto__.call(null);
(statearr_38288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___38289);

return statearr_38288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___38289,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38310_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38310_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38317 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38317){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_38315 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_38316 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_38315,_STAR_print_newline_STAR_38316,base_path_38317){
return (function() { 
var G__38318__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__38318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38319__i = 0, G__38319__a = new Array(arguments.length -  0);
while (G__38319__i < G__38319__a.length) {G__38319__a[G__38319__i] = arguments[G__38319__i + 0]; ++G__38319__i;}
  args = new cljs.core.IndexedSeq(G__38319__a,0);
} 
return G__38318__delegate.call(this,args);};
G__38318.cljs$lang$maxFixedArity = 0;
G__38318.cljs$lang$applyTo = (function (arglist__38320){
var args = cljs.core.seq(arglist__38320);
return G__38318__delegate(args);
});
G__38318.cljs$core$IFn$_invoke$arity$variadic = G__38318__delegate;
return G__38318;
})()
;})(_STAR_print_fn_STAR_38315,_STAR_print_newline_STAR_38316,base_path_38317))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38316;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38315;
}}catch (e38314){if((e38314 instanceof Error)){
var e = e38314;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38317], null));
} else {
var e = e38314;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_38317))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38321){
var map__38328 = p__38321;
var map__38328__$1 = ((((!((map__38328 == null)))?((((map__38328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38328):map__38328);
var opts = map__38328__$1;
var build_id = cljs.core.get.call(null,map__38328__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38328,map__38328__$1,opts,build_id){
return (function (p__38330){
var vec__38331 = p__38330;
var map__38332 = cljs.core.nth.call(null,vec__38331,(0),null);
var map__38332__$1 = ((((!((map__38332 == null)))?((((map__38332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38332):map__38332);
var msg = map__38332__$1;
var msg_name = cljs.core.get.call(null,map__38332__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38331,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38331,map__38332,map__38332__$1,msg,msg_name,_,map__38328,map__38328__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38331,map__38332,map__38332__$1,msg,msg_name,_,map__38328,map__38328__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38328,map__38328__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38338){
var vec__38339 = p__38338;
var map__38340 = cljs.core.nth.call(null,vec__38339,(0),null);
var map__38340__$1 = ((((!((map__38340 == null)))?((((map__38340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38340):map__38340);
var msg = map__38340__$1;
var msg_name = cljs.core.get.call(null,map__38340__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38339,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38342){
var map__38352 = p__38342;
var map__38352__$1 = ((((!((map__38352 == null)))?((((map__38352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38352):map__38352);
var on_compile_warning = cljs.core.get.call(null,map__38352__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38352__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38352,map__38352__$1,on_compile_warning,on_compile_fail){
return (function (p__38354){
var vec__38355 = p__38354;
var map__38356 = cljs.core.nth.call(null,vec__38355,(0),null);
var map__38356__$1 = ((((!((map__38356 == null)))?((((map__38356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38356):map__38356);
var msg = map__38356__$1;
var msg_name = cljs.core.get.call(null,map__38356__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38355,(1));
var pred__38358 = cljs.core._EQ_;
var expr__38359 = msg_name;
if(cljs.core.truth_(pred__38358.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38359))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38358.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38359))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38352,map__38352__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__,msg_hist,msg_names,msg){
return (function (state_38575){
var state_val_38576 = (state_38575[(1)]);
if((state_val_38576 === (7))){
var inst_38499 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
if(cljs.core.truth_(inst_38499)){
var statearr_38577_38623 = state_38575__$1;
(statearr_38577_38623[(1)] = (8));

} else {
var statearr_38578_38624 = state_38575__$1;
(statearr_38578_38624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (20))){
var inst_38569 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38579_38625 = state_38575__$1;
(statearr_38579_38625[(2)] = inst_38569);

(statearr_38579_38625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (27))){
var inst_38565 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38580_38626 = state_38575__$1;
(statearr_38580_38626[(2)] = inst_38565);

(statearr_38580_38626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (1))){
var inst_38492 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38575__$1 = state_38575;
if(cljs.core.truth_(inst_38492)){
var statearr_38581_38627 = state_38575__$1;
(statearr_38581_38627[(1)] = (2));

} else {
var statearr_38582_38628 = state_38575__$1;
(statearr_38582_38628[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (24))){
var inst_38567 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38583_38629 = state_38575__$1;
(statearr_38583_38629[(2)] = inst_38567);

(statearr_38583_38629[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (4))){
var inst_38573 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38575__$1,inst_38573);
} else {
if((state_val_38576 === (15))){
var inst_38571 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38584_38630 = state_38575__$1;
(statearr_38584_38630[(2)] = inst_38571);

(statearr_38584_38630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (21))){
var inst_38530 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38585_38631 = state_38575__$1;
(statearr_38585_38631[(2)] = inst_38530);

(statearr_38585_38631[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (31))){
var inst_38554 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38575__$1 = state_38575;
if(cljs.core.truth_(inst_38554)){
var statearr_38586_38632 = state_38575__$1;
(statearr_38586_38632[(1)] = (34));

} else {
var statearr_38587_38633 = state_38575__$1;
(statearr_38587_38633[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (32))){
var inst_38563 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38588_38634 = state_38575__$1;
(statearr_38588_38634[(2)] = inst_38563);

(statearr_38588_38634[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (33))){
var inst_38552 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38589_38635 = state_38575__$1;
(statearr_38589_38635[(2)] = inst_38552);

(statearr_38589_38635[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (13))){
var inst_38513 = figwheel.client.heads_up.clear.call(null);
var state_38575__$1 = state_38575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38575__$1,(16),inst_38513);
} else {
if((state_val_38576 === (22))){
var inst_38534 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38535 = figwheel.client.heads_up.append_message.call(null,inst_38534);
var state_38575__$1 = state_38575;
var statearr_38590_38636 = state_38575__$1;
(statearr_38590_38636[(2)] = inst_38535);

(statearr_38590_38636[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (36))){
var inst_38561 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38591_38637 = state_38575__$1;
(statearr_38591_38637[(2)] = inst_38561);

(statearr_38591_38637[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (29))){
var inst_38545 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38592_38638 = state_38575__$1;
(statearr_38592_38638[(2)] = inst_38545);

(statearr_38592_38638[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (6))){
var inst_38494 = (state_38575[(7)]);
var state_38575__$1 = state_38575;
var statearr_38593_38639 = state_38575__$1;
(statearr_38593_38639[(2)] = inst_38494);

(statearr_38593_38639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (28))){
var inst_38541 = (state_38575[(2)]);
var inst_38542 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38543 = figwheel.client.heads_up.display_warning.call(null,inst_38542);
var state_38575__$1 = (function (){var statearr_38594 = state_38575;
(statearr_38594[(8)] = inst_38541);

return statearr_38594;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38575__$1,(29),inst_38543);
} else {
if((state_val_38576 === (25))){
var inst_38539 = figwheel.client.heads_up.clear.call(null);
var state_38575__$1 = state_38575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38575__$1,(28),inst_38539);
} else {
if((state_val_38576 === (34))){
var inst_38556 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38575__$1 = state_38575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38575__$1,(37),inst_38556);
} else {
if((state_val_38576 === (17))){
var inst_38521 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38595_38640 = state_38575__$1;
(statearr_38595_38640[(2)] = inst_38521);

(statearr_38595_38640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (3))){
var inst_38511 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38575__$1 = state_38575;
if(cljs.core.truth_(inst_38511)){
var statearr_38596_38641 = state_38575__$1;
(statearr_38596_38641[(1)] = (13));

} else {
var statearr_38597_38642 = state_38575__$1;
(statearr_38597_38642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (12))){
var inst_38507 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38598_38643 = state_38575__$1;
(statearr_38598_38643[(2)] = inst_38507);

(statearr_38598_38643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (2))){
var inst_38494 = (state_38575[(7)]);
var inst_38494__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_38575__$1 = (function (){var statearr_38599 = state_38575;
(statearr_38599[(7)] = inst_38494__$1);

return statearr_38599;
})();
if(cljs.core.truth_(inst_38494__$1)){
var statearr_38600_38644 = state_38575__$1;
(statearr_38600_38644[(1)] = (5));

} else {
var statearr_38601_38645 = state_38575__$1;
(statearr_38601_38645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (23))){
var inst_38537 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38575__$1 = state_38575;
if(cljs.core.truth_(inst_38537)){
var statearr_38602_38646 = state_38575__$1;
(statearr_38602_38646[(1)] = (25));

} else {
var statearr_38603_38647 = state_38575__$1;
(statearr_38603_38647[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (35))){
var state_38575__$1 = state_38575;
var statearr_38604_38648 = state_38575__$1;
(statearr_38604_38648[(2)] = null);

(statearr_38604_38648[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (19))){
var inst_38532 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38575__$1 = state_38575;
if(cljs.core.truth_(inst_38532)){
var statearr_38605_38649 = state_38575__$1;
(statearr_38605_38649[(1)] = (22));

} else {
var statearr_38606_38650 = state_38575__$1;
(statearr_38606_38650[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (11))){
var inst_38503 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38607_38651 = state_38575__$1;
(statearr_38607_38651[(2)] = inst_38503);

(statearr_38607_38651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (9))){
var inst_38505 = figwheel.client.heads_up.clear.call(null);
var state_38575__$1 = state_38575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38575__$1,(12),inst_38505);
} else {
if((state_val_38576 === (5))){
var inst_38496 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38575__$1 = state_38575;
var statearr_38608_38652 = state_38575__$1;
(statearr_38608_38652[(2)] = inst_38496);

(statearr_38608_38652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (14))){
var inst_38523 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38575__$1 = state_38575;
if(cljs.core.truth_(inst_38523)){
var statearr_38609_38653 = state_38575__$1;
(statearr_38609_38653[(1)] = (18));

} else {
var statearr_38610_38654 = state_38575__$1;
(statearr_38610_38654[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (26))){
var inst_38547 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38575__$1 = state_38575;
if(cljs.core.truth_(inst_38547)){
var statearr_38611_38655 = state_38575__$1;
(statearr_38611_38655[(1)] = (30));

} else {
var statearr_38612_38656 = state_38575__$1;
(statearr_38612_38656[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (16))){
var inst_38515 = (state_38575[(2)]);
var inst_38516 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38517 = figwheel.client.format_messages.call(null,inst_38516);
var inst_38518 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38519 = figwheel.client.heads_up.display_error.call(null,inst_38517,inst_38518);
var state_38575__$1 = (function (){var statearr_38613 = state_38575;
(statearr_38613[(9)] = inst_38515);

return statearr_38613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38575__$1,(17),inst_38519);
} else {
if((state_val_38576 === (30))){
var inst_38549 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38550 = figwheel.client.heads_up.display_warning.call(null,inst_38549);
var state_38575__$1 = state_38575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38575__$1,(33),inst_38550);
} else {
if((state_val_38576 === (10))){
var inst_38509 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38614_38657 = state_38575__$1;
(statearr_38614_38657[(2)] = inst_38509);

(statearr_38614_38657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (18))){
var inst_38525 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38526 = figwheel.client.format_messages.call(null,inst_38525);
var inst_38527 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38528 = figwheel.client.heads_up.display_error.call(null,inst_38526,inst_38527);
var state_38575__$1 = state_38575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38575__$1,(21),inst_38528);
} else {
if((state_val_38576 === (37))){
var inst_38558 = (state_38575[(2)]);
var state_38575__$1 = state_38575;
var statearr_38615_38658 = state_38575__$1;
(statearr_38615_38658[(2)] = inst_38558);

(statearr_38615_38658[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38576 === (8))){
var inst_38501 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38575__$1 = state_38575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38575__$1,(11),inst_38501);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21381__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21316__auto__,c__21381__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____0 = (function (){
var statearr_38619 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38619[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__);

(statearr_38619[(1)] = (1));

return statearr_38619;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____1 = (function (state_38575){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_38575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e38620){if((e38620 instanceof Object)){
var ex__21320__auto__ = e38620;
var statearr_38621_38659 = state_38575;
(statearr_38621_38659[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38660 = state_38575;
state_38575 = G__38660;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__ = function(state_38575){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____1.call(this,state_38575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__,msg_hist,msg_names,msg))
})();
var state__21383__auto__ = (function (){var statearr_38622 = f__21382__auto__.call(null);
(statearr_38622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_38622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__,msg_hist,msg_names,msg))
);

return c__21381__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21381__auto___38723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___38723,ch){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___38723,ch){
return (function (state_38706){
var state_val_38707 = (state_38706[(1)]);
if((state_val_38707 === (1))){
var state_38706__$1 = state_38706;
var statearr_38708_38724 = state_38706__$1;
(statearr_38708_38724[(2)] = null);

(statearr_38708_38724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (2))){
var state_38706__$1 = state_38706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38706__$1,(4),ch);
} else {
if((state_val_38707 === (3))){
var inst_38704 = (state_38706[(2)]);
var state_38706__$1 = state_38706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38706__$1,inst_38704);
} else {
if((state_val_38707 === (4))){
var inst_38694 = (state_38706[(7)]);
var inst_38694__$1 = (state_38706[(2)]);
var state_38706__$1 = (function (){var statearr_38709 = state_38706;
(statearr_38709[(7)] = inst_38694__$1);

return statearr_38709;
})();
if(cljs.core.truth_(inst_38694__$1)){
var statearr_38710_38725 = state_38706__$1;
(statearr_38710_38725[(1)] = (5));

} else {
var statearr_38711_38726 = state_38706__$1;
(statearr_38711_38726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (5))){
var inst_38694 = (state_38706[(7)]);
var inst_38696 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38694);
var state_38706__$1 = state_38706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38706__$1,(8),inst_38696);
} else {
if((state_val_38707 === (6))){
var state_38706__$1 = state_38706;
var statearr_38712_38727 = state_38706__$1;
(statearr_38712_38727[(2)] = null);

(statearr_38712_38727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (7))){
var inst_38702 = (state_38706[(2)]);
var state_38706__$1 = state_38706;
var statearr_38713_38728 = state_38706__$1;
(statearr_38713_38728[(2)] = inst_38702);

(statearr_38713_38728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (8))){
var inst_38698 = (state_38706[(2)]);
var state_38706__$1 = (function (){var statearr_38714 = state_38706;
(statearr_38714[(8)] = inst_38698);

return statearr_38714;
})();
var statearr_38715_38729 = state_38706__$1;
(statearr_38715_38729[(2)] = null);

(statearr_38715_38729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21381__auto___38723,ch))
;
return ((function (switch__21316__auto__,c__21381__auto___38723,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21317__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21317__auto____0 = (function (){
var statearr_38719 = [null,null,null,null,null,null,null,null,null];
(statearr_38719[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21317__auto__);

(statearr_38719[(1)] = (1));

return statearr_38719;
});
var figwheel$client$heads_up_plugin_$_state_machine__21317__auto____1 = (function (state_38706){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_38706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e38720){if((e38720 instanceof Object)){
var ex__21320__auto__ = e38720;
var statearr_38721_38730 = state_38706;
(statearr_38721_38730[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38731 = state_38706;
state_38706 = G__38731;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21317__auto__ = function(state_38706){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21317__auto____1.call(this,state_38706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21317__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21317__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___38723,ch))
})();
var state__21383__auto__ = (function (){var statearr_38722 = f__21382__auto__.call(null);
(statearr_38722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___38723);

return statearr_38722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___38723,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__){
return (function (state_38752){
var state_val_38753 = (state_38752[(1)]);
if((state_val_38753 === (1))){
var inst_38747 = cljs.core.async.timeout.call(null,(3000));
var state_38752__$1 = state_38752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38752__$1,(2),inst_38747);
} else {
if((state_val_38753 === (2))){
var inst_38749 = (state_38752[(2)]);
var inst_38750 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38752__$1 = (function (){var statearr_38754 = state_38752;
(statearr_38754[(7)] = inst_38749);

return statearr_38754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38752__$1,inst_38750);
} else {
return null;
}
}
});})(c__21381__auto__))
;
return ((function (switch__21316__auto__,c__21381__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____0 = (function (){
var statearr_38758 = [null,null,null,null,null,null,null,null];
(statearr_38758[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__);

(statearr_38758[(1)] = (1));

return statearr_38758;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____1 = (function (state_38752){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_38752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e38759){if((e38759 instanceof Object)){
var ex__21320__auto__ = e38759;
var statearr_38760_38762 = state_38752;
(statearr_38760_38762[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38763 = state_38752;
state_38752 = G__38763;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__ = function(state_38752){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____1.call(this,state_38752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_38761 = f__21382__auto__.call(null);
(statearr_38761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_38761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__))
);

return c__21381__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38764){
var map__38771 = p__38764;
var map__38771__$1 = ((((!((map__38771 == null)))?((((map__38771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38771):map__38771);
var ed = map__38771__$1;
var formatted_exception = cljs.core.get.call(null,map__38771__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38771__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38771__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38773_38777 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38774_38778 = null;
var count__38775_38779 = (0);
var i__38776_38780 = (0);
while(true){
if((i__38776_38780 < count__38775_38779)){
var msg_38781 = cljs.core._nth.call(null,chunk__38774_38778,i__38776_38780);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38781);

var G__38782 = seq__38773_38777;
var G__38783 = chunk__38774_38778;
var G__38784 = count__38775_38779;
var G__38785 = (i__38776_38780 + (1));
seq__38773_38777 = G__38782;
chunk__38774_38778 = G__38783;
count__38775_38779 = G__38784;
i__38776_38780 = G__38785;
continue;
} else {
var temp__4425__auto___38786 = cljs.core.seq.call(null,seq__38773_38777);
if(temp__4425__auto___38786){
var seq__38773_38787__$1 = temp__4425__auto___38786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38773_38787__$1)){
var c__17588__auto___38788 = cljs.core.chunk_first.call(null,seq__38773_38787__$1);
var G__38789 = cljs.core.chunk_rest.call(null,seq__38773_38787__$1);
var G__38790 = c__17588__auto___38788;
var G__38791 = cljs.core.count.call(null,c__17588__auto___38788);
var G__38792 = (0);
seq__38773_38777 = G__38789;
chunk__38774_38778 = G__38790;
count__38775_38779 = G__38791;
i__38776_38780 = G__38792;
continue;
} else {
var msg_38793 = cljs.core.first.call(null,seq__38773_38787__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38793);

var G__38794 = cljs.core.next.call(null,seq__38773_38787__$1);
var G__38795 = null;
var G__38796 = (0);
var G__38797 = (0);
seq__38773_38777 = G__38794;
chunk__38774_38778 = G__38795;
count__38775_38779 = G__38796;
i__38776_38780 = G__38797;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38798){
var map__38801 = p__38798;
var map__38801__$1 = ((((!((map__38801 == null)))?((((map__38801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38801):map__38801);
var w = map__38801__$1;
var message = cljs.core.get.call(null,map__38801__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16773__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16773__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16773__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38809 = cljs.core.seq.call(null,plugins);
var chunk__38810 = null;
var count__38811 = (0);
var i__38812 = (0);
while(true){
if((i__38812 < count__38811)){
var vec__38813 = cljs.core._nth.call(null,chunk__38810,i__38812);
var k = cljs.core.nth.call(null,vec__38813,(0),null);
var plugin = cljs.core.nth.call(null,vec__38813,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38815 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38809,chunk__38810,count__38811,i__38812,pl_38815,vec__38813,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38815.call(null,msg_hist);
});})(seq__38809,chunk__38810,count__38811,i__38812,pl_38815,vec__38813,k,plugin))
);
} else {
}

var G__38816 = seq__38809;
var G__38817 = chunk__38810;
var G__38818 = count__38811;
var G__38819 = (i__38812 + (1));
seq__38809 = G__38816;
chunk__38810 = G__38817;
count__38811 = G__38818;
i__38812 = G__38819;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38809);
if(temp__4425__auto__){
var seq__38809__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38809__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__38809__$1);
var G__38820 = cljs.core.chunk_rest.call(null,seq__38809__$1);
var G__38821 = c__17588__auto__;
var G__38822 = cljs.core.count.call(null,c__17588__auto__);
var G__38823 = (0);
seq__38809 = G__38820;
chunk__38810 = G__38821;
count__38811 = G__38822;
i__38812 = G__38823;
continue;
} else {
var vec__38814 = cljs.core.first.call(null,seq__38809__$1);
var k = cljs.core.nth.call(null,vec__38814,(0),null);
var plugin = cljs.core.nth.call(null,vec__38814,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38824 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38809,chunk__38810,count__38811,i__38812,pl_38824,vec__38814,k,plugin,seq__38809__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38824.call(null,msg_hist);
});})(seq__38809,chunk__38810,count__38811,i__38812,pl_38824,vec__38814,k,plugin,seq__38809__$1,temp__4425__auto__))
);
} else {
}

var G__38825 = cljs.core.next.call(null,seq__38809__$1);
var G__38826 = null;
var G__38827 = (0);
var G__38828 = (0);
seq__38809 = G__38825;
chunk__38810 = G__38826;
count__38811 = G__38827;
i__38812 = G__38828;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38829 = [];
var len__17843__auto___38832 = arguments.length;
var i__17844__auto___38833 = (0);
while(true){
if((i__17844__auto___38833 < len__17843__auto___38832)){
args38829.push((arguments[i__17844__auto___38833]));

var G__38834 = (i__17844__auto___38833 + (1));
i__17844__auto___38833 = G__38834;
continue;
} else {
}
break;
}

var G__38831 = args38829.length;
switch (G__38831) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38829.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17850__auto__ = [];
var len__17843__auto___38840 = arguments.length;
var i__17844__auto___38841 = (0);
while(true){
if((i__17844__auto___38841 < len__17843__auto___38840)){
args__17850__auto__.push((arguments[i__17844__auto___38841]));

var G__38842 = (i__17844__auto___38841 + (1));
i__17844__auto___38841 = G__38842;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((0) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17851__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38837){
var map__38838 = p__38837;
var map__38838__$1 = ((((!((map__38838 == null)))?((((map__38838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38838):map__38838);
var opts = map__38838__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38836){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38836));
});

//# sourceMappingURL=client.js.map