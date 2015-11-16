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
var G__27102__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27103__i = 0, G__27103__a = new Array(arguments.length -  0);
while (G__27103__i < G__27103__a.length) {G__27103__a[G__27103__i] = arguments[G__27103__i + 0]; ++G__27103__i;}
  args = new cljs.core.IndexedSeq(G__27103__a,0);
} 
return G__27102__delegate.call(this,args);};
G__27102.cljs$lang$maxFixedArity = 0;
G__27102.cljs$lang$applyTo = (function (arglist__27104){
var args = cljs.core.seq(arglist__27104);
return G__27102__delegate(args);
});
G__27102.cljs$core$IFn$_invoke$arity$variadic = G__27102__delegate;
return G__27102;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27105){
var map__27108 = p__27105;
var map__27108__$1 = ((((!((map__27108 == null)))?((((map__27108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27108):map__27108);
var message = cljs.core.get.call(null,map__27108__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27108__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17190__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17190__auto__)){
return or__17190__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17178__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17178__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17178__auto__;
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
var c__21787__auto___27256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___27256,ch){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___27256,ch){
return (function (state_27226){
var state_val_27227 = (state_27226[(1)]);
if((state_val_27227 === (7))){
var inst_27222 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27228_27257 = state_27226__$1;
(statearr_27228_27257[(2)] = inst_27222);

(statearr_27228_27257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (1))){
var state_27226__$1 = state_27226;
var statearr_27229_27258 = state_27226__$1;
(statearr_27229_27258[(2)] = null);

(statearr_27229_27258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (4))){
var inst_27185 = (state_27226[(7)]);
var inst_27185__$1 = (state_27226[(2)]);
var state_27226__$1 = (function (){var statearr_27230 = state_27226;
(statearr_27230[(7)] = inst_27185__$1);

return statearr_27230;
})();
if(cljs.core.truth_(inst_27185__$1)){
var statearr_27231_27259 = state_27226__$1;
(statearr_27231_27259[(1)] = (5));

} else {
var statearr_27232_27260 = state_27226__$1;
(statearr_27232_27260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (15))){
var inst_27192 = (state_27226[(8)]);
var inst_27207 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27192);
var inst_27208 = cljs.core.first.call(null,inst_27207);
var inst_27209 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27208);
var inst_27210 = console.warn("Figwheel: Not loading code with warnings - ",inst_27209);
var state_27226__$1 = state_27226;
var statearr_27233_27261 = state_27226__$1;
(statearr_27233_27261[(2)] = inst_27210);

(statearr_27233_27261[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (13))){
var inst_27215 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27234_27262 = state_27226__$1;
(statearr_27234_27262[(2)] = inst_27215);

(statearr_27234_27262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (6))){
var state_27226__$1 = state_27226;
var statearr_27235_27263 = state_27226__$1;
(statearr_27235_27263[(2)] = null);

(statearr_27235_27263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (17))){
var inst_27213 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27236_27264 = state_27226__$1;
(statearr_27236_27264[(2)] = inst_27213);

(statearr_27236_27264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (3))){
var inst_27224 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27226__$1,inst_27224);
} else {
if((state_val_27227 === (12))){
var inst_27191 = (state_27226[(9)]);
var inst_27205 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27191,opts);
var state_27226__$1 = state_27226;
if(cljs.core.truth_(inst_27205)){
var statearr_27237_27265 = state_27226__$1;
(statearr_27237_27265[(1)] = (15));

} else {
var statearr_27238_27266 = state_27226__$1;
(statearr_27238_27266[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (2))){
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27226__$1,(4),ch);
} else {
if((state_val_27227 === (11))){
var inst_27192 = (state_27226[(8)]);
var inst_27197 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27198 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27192);
var inst_27199 = cljs.core.async.timeout.call(null,(1000));
var inst_27200 = [inst_27198,inst_27199];
var inst_27201 = (new cljs.core.PersistentVector(null,2,(5),inst_27197,inst_27200,null));
var state_27226__$1 = state_27226;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27226__$1,(14),inst_27201);
} else {
if((state_val_27227 === (9))){
var state_27226__$1 = state_27226;
var statearr_27239_27267 = state_27226__$1;
(statearr_27239_27267[(2)] = null);

(statearr_27239_27267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (5))){
var inst_27185 = (state_27226[(7)]);
var inst_27187 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27188 = (new cljs.core.PersistentArrayMap(null,2,inst_27187,null));
var inst_27189 = (new cljs.core.PersistentHashSet(null,inst_27188,null));
var inst_27190 = figwheel.client.focus_msgs.call(null,inst_27189,inst_27185);
var inst_27191 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27190);
var inst_27192 = cljs.core.first.call(null,inst_27190);
var inst_27193 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_27226__$1 = (function (){var statearr_27240 = state_27226;
(statearr_27240[(8)] = inst_27192);

(statearr_27240[(9)] = inst_27191);

return statearr_27240;
})();
if(cljs.core.truth_(inst_27193)){
var statearr_27241_27268 = state_27226__$1;
(statearr_27241_27268[(1)] = (8));

} else {
var statearr_27242_27269 = state_27226__$1;
(statearr_27242_27269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (14))){
var inst_27203 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27243_27270 = state_27226__$1;
(statearr_27243_27270[(2)] = inst_27203);

(statearr_27243_27270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (16))){
var state_27226__$1 = state_27226;
var statearr_27244_27271 = state_27226__$1;
(statearr_27244_27271[(2)] = null);

(statearr_27244_27271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (10))){
var inst_27218 = (state_27226[(2)]);
var state_27226__$1 = (function (){var statearr_27245 = state_27226;
(statearr_27245[(10)] = inst_27218);

return statearr_27245;
})();
var statearr_27246_27272 = state_27226__$1;
(statearr_27246_27272[(2)] = null);

(statearr_27246_27272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (8))){
var inst_27191 = (state_27226[(9)]);
var inst_27195 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27191,opts);
var state_27226__$1 = state_27226;
if(cljs.core.truth_(inst_27195)){
var statearr_27247_27273 = state_27226__$1;
(statearr_27247_27273[(1)] = (11));

} else {
var statearr_27248_27274 = state_27226__$1;
(statearr_27248_27274[(1)] = (12));

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
});})(c__21787__auto___27256,ch))
;
return ((function (switch__21722__auto__,c__21787__auto___27256,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21723__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21723__auto____0 = (function (){
var statearr_27252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27252[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21723__auto__);

(statearr_27252[(1)] = (1));

return statearr_27252;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21723__auto____1 = (function (state_27226){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_27226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e27253){if((e27253 instanceof Object)){
var ex__21726__auto__ = e27253;
var statearr_27254_27275 = state_27226;
(statearr_27254_27275[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27276 = state_27226;
state_27226 = G__27276;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21723__auto__ = function(state_27226){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21723__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21723__auto____1.call(this,state_27226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21723__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21723__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___27256,ch))
})();
var state__21789__auto__ = (function (){var statearr_27255 = f__21788__auto__.call(null);
(statearr_27255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___27256);

return statearr_27255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___27256,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27277_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27277_SHARP_));
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
var base_path_27284 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27284){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27282 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27283 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27282,_STAR_print_newline_STAR_27283,base_path_27284){
return (function() { 
var G__27285__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27286__i = 0, G__27286__a = new Array(arguments.length -  0);
while (G__27286__i < G__27286__a.length) {G__27286__a[G__27286__i] = arguments[G__27286__i + 0]; ++G__27286__i;}
  args = new cljs.core.IndexedSeq(G__27286__a,0);
} 
return G__27285__delegate.call(this,args);};
G__27285.cljs$lang$maxFixedArity = 0;
G__27285.cljs$lang$applyTo = (function (arglist__27287){
var args = cljs.core.seq(arglist__27287);
return G__27285__delegate(args);
});
G__27285.cljs$core$IFn$_invoke$arity$variadic = G__27285__delegate;
return G__27285;
})()
;})(_STAR_print_fn_STAR_27282,_STAR_print_newline_STAR_27283,base_path_27284))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27283;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27282;
}}catch (e27281){if((e27281 instanceof Error)){
var e = e27281;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27284], null));
} else {
var e = e27281;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27284))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27288){
var map__27295 = p__27288;
var map__27295__$1 = ((((!((map__27295 == null)))?((((map__27295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27295):map__27295);
var opts = map__27295__$1;
var build_id = cljs.core.get.call(null,map__27295__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27295,map__27295__$1,opts,build_id){
return (function (p__27297){
var vec__27298 = p__27297;
var map__27299 = cljs.core.nth.call(null,vec__27298,(0),null);
var map__27299__$1 = ((((!((map__27299 == null)))?((((map__27299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27299):map__27299);
var msg = map__27299__$1;
var msg_name = cljs.core.get.call(null,map__27299__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27298,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27298,map__27299,map__27299__$1,msg,msg_name,_,map__27295,map__27295__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27298,map__27299,map__27299__$1,msg,msg_name,_,map__27295,map__27295__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27295,map__27295__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27305){
var vec__27306 = p__27305;
var map__27307 = cljs.core.nth.call(null,vec__27306,(0),null);
var map__27307__$1 = ((((!((map__27307 == null)))?((((map__27307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27307):map__27307);
var msg = map__27307__$1;
var msg_name = cljs.core.get.call(null,map__27307__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27306,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27309){
var map__27319 = p__27309;
var map__27319__$1 = ((((!((map__27319 == null)))?((((map__27319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27319):map__27319);
var on_compile_warning = cljs.core.get.call(null,map__27319__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27319__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27319,map__27319__$1,on_compile_warning,on_compile_fail){
return (function (p__27321){
var vec__27322 = p__27321;
var map__27323 = cljs.core.nth.call(null,vec__27322,(0),null);
var map__27323__$1 = ((((!((map__27323 == null)))?((((map__27323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27323):map__27323);
var msg = map__27323__$1;
var msg_name = cljs.core.get.call(null,map__27323__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27322,(1));
var pred__27325 = cljs.core._EQ_;
var expr__27326 = msg_name;
if(cljs.core.truth_(pred__27325.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27326))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27325.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27326))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27319,map__27319__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto__,msg_hist,msg_names,msg){
return (function (state_27542){
var state_val_27543 = (state_27542[(1)]);
if((state_val_27543 === (7))){
var inst_27466 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
if(cljs.core.truth_(inst_27466)){
var statearr_27544_27590 = state_27542__$1;
(statearr_27544_27590[(1)] = (8));

} else {
var statearr_27545_27591 = state_27542__$1;
(statearr_27545_27591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (20))){
var inst_27536 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27546_27592 = state_27542__$1;
(statearr_27546_27592[(2)] = inst_27536);

(statearr_27546_27592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (27))){
var inst_27532 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27547_27593 = state_27542__$1;
(statearr_27547_27593[(2)] = inst_27532);

(statearr_27547_27593[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (1))){
var inst_27459 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27542__$1 = state_27542;
if(cljs.core.truth_(inst_27459)){
var statearr_27548_27594 = state_27542__$1;
(statearr_27548_27594[(1)] = (2));

} else {
var statearr_27549_27595 = state_27542__$1;
(statearr_27549_27595[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (24))){
var inst_27534 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27550_27596 = state_27542__$1;
(statearr_27550_27596[(2)] = inst_27534);

(statearr_27550_27596[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (4))){
var inst_27540 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27542__$1,inst_27540);
} else {
if((state_val_27543 === (15))){
var inst_27538 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27551_27597 = state_27542__$1;
(statearr_27551_27597[(2)] = inst_27538);

(statearr_27551_27597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (21))){
var inst_27497 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27552_27598 = state_27542__$1;
(statearr_27552_27598[(2)] = inst_27497);

(statearr_27552_27598[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (31))){
var inst_27521 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27542__$1 = state_27542;
if(cljs.core.truth_(inst_27521)){
var statearr_27553_27599 = state_27542__$1;
(statearr_27553_27599[(1)] = (34));

} else {
var statearr_27554_27600 = state_27542__$1;
(statearr_27554_27600[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (32))){
var inst_27530 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27555_27601 = state_27542__$1;
(statearr_27555_27601[(2)] = inst_27530);

(statearr_27555_27601[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (33))){
var inst_27519 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27556_27602 = state_27542__$1;
(statearr_27556_27602[(2)] = inst_27519);

(statearr_27556_27602[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (13))){
var inst_27480 = figwheel.client.heads_up.clear.call(null);
var state_27542__$1 = state_27542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27542__$1,(16),inst_27480);
} else {
if((state_val_27543 === (22))){
var inst_27501 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27502 = figwheel.client.heads_up.append_message.call(null,inst_27501);
var state_27542__$1 = state_27542;
var statearr_27557_27603 = state_27542__$1;
(statearr_27557_27603[(2)] = inst_27502);

(statearr_27557_27603[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (36))){
var inst_27528 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27558_27604 = state_27542__$1;
(statearr_27558_27604[(2)] = inst_27528);

(statearr_27558_27604[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (29))){
var inst_27512 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27559_27605 = state_27542__$1;
(statearr_27559_27605[(2)] = inst_27512);

(statearr_27559_27605[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (6))){
var inst_27461 = (state_27542[(7)]);
var state_27542__$1 = state_27542;
var statearr_27560_27606 = state_27542__$1;
(statearr_27560_27606[(2)] = inst_27461);

(statearr_27560_27606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (28))){
var inst_27508 = (state_27542[(2)]);
var inst_27509 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27510 = figwheel.client.heads_up.display_warning.call(null,inst_27509);
var state_27542__$1 = (function (){var statearr_27561 = state_27542;
(statearr_27561[(8)] = inst_27508);

return statearr_27561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27542__$1,(29),inst_27510);
} else {
if((state_val_27543 === (25))){
var inst_27506 = figwheel.client.heads_up.clear.call(null);
var state_27542__$1 = state_27542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27542__$1,(28),inst_27506);
} else {
if((state_val_27543 === (34))){
var inst_27523 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27542__$1 = state_27542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27542__$1,(37),inst_27523);
} else {
if((state_val_27543 === (17))){
var inst_27488 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27562_27607 = state_27542__$1;
(statearr_27562_27607[(2)] = inst_27488);

(statearr_27562_27607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (3))){
var inst_27478 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27542__$1 = state_27542;
if(cljs.core.truth_(inst_27478)){
var statearr_27563_27608 = state_27542__$1;
(statearr_27563_27608[(1)] = (13));

} else {
var statearr_27564_27609 = state_27542__$1;
(statearr_27564_27609[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (12))){
var inst_27474 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27565_27610 = state_27542__$1;
(statearr_27565_27610[(2)] = inst_27474);

(statearr_27565_27610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (2))){
var inst_27461 = (state_27542[(7)]);
var inst_27461__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_27542__$1 = (function (){var statearr_27566 = state_27542;
(statearr_27566[(7)] = inst_27461__$1);

return statearr_27566;
})();
if(cljs.core.truth_(inst_27461__$1)){
var statearr_27567_27611 = state_27542__$1;
(statearr_27567_27611[(1)] = (5));

} else {
var statearr_27568_27612 = state_27542__$1;
(statearr_27568_27612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (23))){
var inst_27504 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27542__$1 = state_27542;
if(cljs.core.truth_(inst_27504)){
var statearr_27569_27613 = state_27542__$1;
(statearr_27569_27613[(1)] = (25));

} else {
var statearr_27570_27614 = state_27542__$1;
(statearr_27570_27614[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (35))){
var state_27542__$1 = state_27542;
var statearr_27571_27615 = state_27542__$1;
(statearr_27571_27615[(2)] = null);

(statearr_27571_27615[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (19))){
var inst_27499 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27542__$1 = state_27542;
if(cljs.core.truth_(inst_27499)){
var statearr_27572_27616 = state_27542__$1;
(statearr_27572_27616[(1)] = (22));

} else {
var statearr_27573_27617 = state_27542__$1;
(statearr_27573_27617[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (11))){
var inst_27470 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27574_27618 = state_27542__$1;
(statearr_27574_27618[(2)] = inst_27470);

(statearr_27574_27618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (9))){
var inst_27472 = figwheel.client.heads_up.clear.call(null);
var state_27542__$1 = state_27542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27542__$1,(12),inst_27472);
} else {
if((state_val_27543 === (5))){
var inst_27463 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27542__$1 = state_27542;
var statearr_27575_27619 = state_27542__$1;
(statearr_27575_27619[(2)] = inst_27463);

(statearr_27575_27619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (14))){
var inst_27490 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27542__$1 = state_27542;
if(cljs.core.truth_(inst_27490)){
var statearr_27576_27620 = state_27542__$1;
(statearr_27576_27620[(1)] = (18));

} else {
var statearr_27577_27621 = state_27542__$1;
(statearr_27577_27621[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (26))){
var inst_27514 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27542__$1 = state_27542;
if(cljs.core.truth_(inst_27514)){
var statearr_27578_27622 = state_27542__$1;
(statearr_27578_27622[(1)] = (30));

} else {
var statearr_27579_27623 = state_27542__$1;
(statearr_27579_27623[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (16))){
var inst_27482 = (state_27542[(2)]);
var inst_27483 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27484 = figwheel.client.format_messages.call(null,inst_27483);
var inst_27485 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27486 = figwheel.client.heads_up.display_error.call(null,inst_27484,inst_27485);
var state_27542__$1 = (function (){var statearr_27580 = state_27542;
(statearr_27580[(9)] = inst_27482);

return statearr_27580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27542__$1,(17),inst_27486);
} else {
if((state_val_27543 === (30))){
var inst_27516 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27517 = figwheel.client.heads_up.display_warning.call(null,inst_27516);
var state_27542__$1 = state_27542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27542__$1,(33),inst_27517);
} else {
if((state_val_27543 === (10))){
var inst_27476 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27581_27624 = state_27542__$1;
(statearr_27581_27624[(2)] = inst_27476);

(statearr_27581_27624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (18))){
var inst_27492 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27493 = figwheel.client.format_messages.call(null,inst_27492);
var inst_27494 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27495 = figwheel.client.heads_up.display_error.call(null,inst_27493,inst_27494);
var state_27542__$1 = state_27542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27542__$1,(21),inst_27495);
} else {
if((state_val_27543 === (37))){
var inst_27525 = (state_27542[(2)]);
var state_27542__$1 = state_27542;
var statearr_27582_27625 = state_27542__$1;
(statearr_27582_27625[(2)] = inst_27525);

(statearr_27582_27625[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27543 === (8))){
var inst_27468 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27542__$1 = state_27542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27542__$1,(11),inst_27468);
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
});})(c__21787__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21722__auto__,c__21787__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21723__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21723__auto____0 = (function (){
var statearr_27586 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27586[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21723__auto__);

(statearr_27586[(1)] = (1));

return statearr_27586;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21723__auto____1 = (function (state_27542){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_27542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e27587){if((e27587 instanceof Object)){
var ex__21726__auto__ = e27587;
var statearr_27588_27626 = state_27542;
(statearr_27588_27626[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27627 = state_27542;
state_27542 = G__27627;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21723__auto__ = function(state_27542){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21723__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21723__auto____1.call(this,state_27542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21723__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21723__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto__,msg_hist,msg_names,msg))
})();
var state__21789__auto__ = (function (){var statearr_27589 = f__21788__auto__.call(null);
(statearr_27589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto__);

return statearr_27589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto__,msg_hist,msg_names,msg))
);

return c__21787__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21787__auto___27690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___27690,ch){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___27690,ch){
return (function (state_27673){
var state_val_27674 = (state_27673[(1)]);
if((state_val_27674 === (1))){
var state_27673__$1 = state_27673;
var statearr_27675_27691 = state_27673__$1;
(statearr_27675_27691[(2)] = null);

(statearr_27675_27691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (2))){
var state_27673__$1 = state_27673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27673__$1,(4),ch);
} else {
if((state_val_27674 === (3))){
var inst_27671 = (state_27673[(2)]);
var state_27673__$1 = state_27673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27673__$1,inst_27671);
} else {
if((state_val_27674 === (4))){
var inst_27661 = (state_27673[(7)]);
var inst_27661__$1 = (state_27673[(2)]);
var state_27673__$1 = (function (){var statearr_27676 = state_27673;
(statearr_27676[(7)] = inst_27661__$1);

return statearr_27676;
})();
if(cljs.core.truth_(inst_27661__$1)){
var statearr_27677_27692 = state_27673__$1;
(statearr_27677_27692[(1)] = (5));

} else {
var statearr_27678_27693 = state_27673__$1;
(statearr_27678_27693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (5))){
var inst_27661 = (state_27673[(7)]);
var inst_27663 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27661);
var state_27673__$1 = state_27673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27673__$1,(8),inst_27663);
} else {
if((state_val_27674 === (6))){
var state_27673__$1 = state_27673;
var statearr_27679_27694 = state_27673__$1;
(statearr_27679_27694[(2)] = null);

(statearr_27679_27694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (7))){
var inst_27669 = (state_27673[(2)]);
var state_27673__$1 = state_27673;
var statearr_27680_27695 = state_27673__$1;
(statearr_27680_27695[(2)] = inst_27669);

(statearr_27680_27695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27674 === (8))){
var inst_27665 = (state_27673[(2)]);
var state_27673__$1 = (function (){var statearr_27681 = state_27673;
(statearr_27681[(8)] = inst_27665);

return statearr_27681;
})();
var statearr_27682_27696 = state_27673__$1;
(statearr_27682_27696[(2)] = null);

(statearr_27682_27696[(1)] = (2));


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
});})(c__21787__auto___27690,ch))
;
return ((function (switch__21722__auto__,c__21787__auto___27690,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21723__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21723__auto____0 = (function (){
var statearr_27686 = [null,null,null,null,null,null,null,null,null];
(statearr_27686[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21723__auto__);

(statearr_27686[(1)] = (1));

return statearr_27686;
});
var figwheel$client$heads_up_plugin_$_state_machine__21723__auto____1 = (function (state_27673){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_27673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e27687){if((e27687 instanceof Object)){
var ex__21726__auto__ = e27687;
var statearr_27688_27697 = state_27673;
(statearr_27688_27697[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27698 = state_27673;
state_27673 = G__27698;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21723__auto__ = function(state_27673){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21723__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21723__auto____1.call(this,state_27673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21723__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21723__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___27690,ch))
})();
var state__21789__auto__ = (function (){var statearr_27689 = f__21788__auto__.call(null);
(statearr_27689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___27690);

return statearr_27689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___27690,ch))
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
var c__21787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto__){
return (function (state_27719){
var state_val_27720 = (state_27719[(1)]);
if((state_val_27720 === (1))){
var inst_27714 = cljs.core.async.timeout.call(null,(3000));
var state_27719__$1 = state_27719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27719__$1,(2),inst_27714);
} else {
if((state_val_27720 === (2))){
var inst_27716 = (state_27719[(2)]);
var inst_27717 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27719__$1 = (function (){var statearr_27721 = state_27719;
(statearr_27721[(7)] = inst_27716);

return statearr_27721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27719__$1,inst_27717);
} else {
return null;
}
}
});})(c__21787__auto__))
;
return ((function (switch__21722__auto__,c__21787__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21723__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21723__auto____0 = (function (){
var statearr_27725 = [null,null,null,null,null,null,null,null];
(statearr_27725[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21723__auto__);

(statearr_27725[(1)] = (1));

return statearr_27725;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21723__auto____1 = (function (state_27719){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_27719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e27726){if((e27726 instanceof Object)){
var ex__21726__auto__ = e27726;
var statearr_27727_27729 = state_27719;
(statearr_27727_27729[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27730 = state_27719;
state_27719 = G__27730;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21723__auto__ = function(state_27719){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21723__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21723__auto____1.call(this,state_27719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21723__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21723__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_27728 = f__21788__auto__.call(null);
(statearr_27728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto__);

return statearr_27728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto__))
);

return c__21787__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27731){
var map__27738 = p__27731;
var map__27738__$1 = ((((!((map__27738 == null)))?((((map__27738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27738):map__27738);
var ed = map__27738__$1;
var formatted_exception = cljs.core.get.call(null,map__27738__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27738__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27738__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27740_27744 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27741_27745 = null;
var count__27742_27746 = (0);
var i__27743_27747 = (0);
while(true){
if((i__27743_27747 < count__27742_27746)){
var msg_27748 = cljs.core._nth.call(null,chunk__27741_27745,i__27743_27747);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27748);

var G__27749 = seq__27740_27744;
var G__27750 = chunk__27741_27745;
var G__27751 = count__27742_27746;
var G__27752 = (i__27743_27747 + (1));
seq__27740_27744 = G__27749;
chunk__27741_27745 = G__27750;
count__27742_27746 = G__27751;
i__27743_27747 = G__27752;
continue;
} else {
var temp__4425__auto___27753 = cljs.core.seq.call(null,seq__27740_27744);
if(temp__4425__auto___27753){
var seq__27740_27754__$1 = temp__4425__auto___27753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27740_27754__$1)){
var c__17993__auto___27755 = cljs.core.chunk_first.call(null,seq__27740_27754__$1);
var G__27756 = cljs.core.chunk_rest.call(null,seq__27740_27754__$1);
var G__27757 = c__17993__auto___27755;
var G__27758 = cljs.core.count.call(null,c__17993__auto___27755);
var G__27759 = (0);
seq__27740_27744 = G__27756;
chunk__27741_27745 = G__27757;
count__27742_27746 = G__27758;
i__27743_27747 = G__27759;
continue;
} else {
var msg_27760 = cljs.core.first.call(null,seq__27740_27754__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27760);

var G__27761 = cljs.core.next.call(null,seq__27740_27754__$1);
var G__27762 = null;
var G__27763 = (0);
var G__27764 = (0);
seq__27740_27744 = G__27761;
chunk__27741_27745 = G__27762;
count__27742_27746 = G__27763;
i__27743_27747 = G__27764;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27765){
var map__27768 = p__27765;
var map__27768__$1 = ((((!((map__27768 == null)))?((((map__27768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27768):map__27768);
var w = map__27768__$1;
var message = cljs.core.get.call(null,map__27768__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__17178__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17178__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17178__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27776 = cljs.core.seq.call(null,plugins);
var chunk__27777 = null;
var count__27778 = (0);
var i__27779 = (0);
while(true){
if((i__27779 < count__27778)){
var vec__27780 = cljs.core._nth.call(null,chunk__27777,i__27779);
var k = cljs.core.nth.call(null,vec__27780,(0),null);
var plugin = cljs.core.nth.call(null,vec__27780,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27782 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27776,chunk__27777,count__27778,i__27779,pl_27782,vec__27780,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27782.call(null,msg_hist);
});})(seq__27776,chunk__27777,count__27778,i__27779,pl_27782,vec__27780,k,plugin))
);
} else {
}

var G__27783 = seq__27776;
var G__27784 = chunk__27777;
var G__27785 = count__27778;
var G__27786 = (i__27779 + (1));
seq__27776 = G__27783;
chunk__27777 = G__27784;
count__27778 = G__27785;
i__27779 = G__27786;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27776);
if(temp__4425__auto__){
var seq__27776__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27776__$1)){
var c__17993__auto__ = cljs.core.chunk_first.call(null,seq__27776__$1);
var G__27787 = cljs.core.chunk_rest.call(null,seq__27776__$1);
var G__27788 = c__17993__auto__;
var G__27789 = cljs.core.count.call(null,c__17993__auto__);
var G__27790 = (0);
seq__27776 = G__27787;
chunk__27777 = G__27788;
count__27778 = G__27789;
i__27779 = G__27790;
continue;
} else {
var vec__27781 = cljs.core.first.call(null,seq__27776__$1);
var k = cljs.core.nth.call(null,vec__27781,(0),null);
var plugin = cljs.core.nth.call(null,vec__27781,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27791 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27776,chunk__27777,count__27778,i__27779,pl_27791,vec__27781,k,plugin,seq__27776__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27791.call(null,msg_hist);
});})(seq__27776,chunk__27777,count__27778,i__27779,pl_27791,vec__27781,k,plugin,seq__27776__$1,temp__4425__auto__))
);
} else {
}

var G__27792 = cljs.core.next.call(null,seq__27776__$1);
var G__27793 = null;
var G__27794 = (0);
var G__27795 = (0);
seq__27776 = G__27792;
chunk__27777 = G__27793;
count__27778 = G__27794;
i__27779 = G__27795;
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
var args27796 = [];
var len__18248__auto___27799 = arguments.length;
var i__18249__auto___27800 = (0);
while(true){
if((i__18249__auto___27800 < len__18248__auto___27799)){
args27796.push((arguments[i__18249__auto___27800]));

var G__27801 = (i__18249__auto___27800 + (1));
i__18249__auto___27800 = G__27801;
continue;
} else {
}
break;
}

var G__27798 = args27796.length;
switch (G__27798) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27796.length)].join('')));

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
var args__18255__auto__ = [];
var len__18248__auto___27807 = arguments.length;
var i__18249__auto___27808 = (0);
while(true){
if((i__18249__auto___27808 < len__18248__auto___27807)){
args__18255__auto__.push((arguments[i__18249__auto___27808]));

var G__27809 = (i__18249__auto___27808 + (1));
i__18249__auto___27808 = G__27809;
continue;
} else {
}
break;
}

var argseq__18256__auto__ = ((((0) < args__18255__auto__.length))?(new cljs.core.IndexedSeq(args__18255__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__18256__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27804){
var map__27805 = p__27804;
var map__27805__$1 = ((((!((map__27805 == null)))?((((map__27805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27805):map__27805);
var opts = map__27805__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27803){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27803));
});

//# sourceMappingURL=client.js.map