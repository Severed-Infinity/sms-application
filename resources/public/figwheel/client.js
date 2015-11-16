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
var G__29983__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29984__i = 0, G__29984__a = new Array(arguments.length -  0);
while (G__29984__i < G__29984__a.length) {G__29984__a[G__29984__i] = arguments[G__29984__i + 0]; ++G__29984__i;}
  args = new cljs.core.IndexedSeq(G__29984__a,0);
} 
return G__29983__delegate.call(this,args);};
G__29983.cljs$lang$maxFixedArity = 0;
G__29983.cljs$lang$applyTo = (function (arglist__29985){
var args = cljs.core.seq(arglist__29985);
return G__29983__delegate(args);
});
G__29983.cljs$core$IFn$_invoke$arity$variadic = G__29983__delegate;
return G__29983;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29986){
var map__29989 = p__29986;
var map__29989__$1 = ((((!((map__29989 == null)))?((((map__29989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29989):map__29989);
var message = cljs.core.get.call(null,map__29989__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29989__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17191__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17179__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17179__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17179__auto__;
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
var c__21877__auto___30137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___30137,ch){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___30137,ch){
return (function (state_30107){
var state_val_30108 = (state_30107[(1)]);
if((state_val_30108 === (7))){
var inst_30103 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30109_30138 = state_30107__$1;
(statearr_30109_30138[(2)] = inst_30103);

(statearr_30109_30138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (1))){
var state_30107__$1 = state_30107;
var statearr_30110_30139 = state_30107__$1;
(statearr_30110_30139[(2)] = null);

(statearr_30110_30139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (4))){
var inst_30066 = (state_30107[(7)]);
var inst_30066__$1 = (state_30107[(2)]);
var state_30107__$1 = (function (){var statearr_30111 = state_30107;
(statearr_30111[(7)] = inst_30066__$1);

return statearr_30111;
})();
if(cljs.core.truth_(inst_30066__$1)){
var statearr_30112_30140 = state_30107__$1;
(statearr_30112_30140[(1)] = (5));

} else {
var statearr_30113_30141 = state_30107__$1;
(statearr_30113_30141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (15))){
var inst_30073 = (state_30107[(8)]);
var inst_30088 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30073);
var inst_30089 = cljs.core.first.call(null,inst_30088);
var inst_30090 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30089);
var inst_30091 = console.warn("Figwheel: Not loading code with warnings - ",inst_30090);
var state_30107__$1 = state_30107;
var statearr_30114_30142 = state_30107__$1;
(statearr_30114_30142[(2)] = inst_30091);

(statearr_30114_30142[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (13))){
var inst_30096 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30115_30143 = state_30107__$1;
(statearr_30115_30143[(2)] = inst_30096);

(statearr_30115_30143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (6))){
var state_30107__$1 = state_30107;
var statearr_30116_30144 = state_30107__$1;
(statearr_30116_30144[(2)] = null);

(statearr_30116_30144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (17))){
var inst_30094 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30117_30145 = state_30107__$1;
(statearr_30117_30145[(2)] = inst_30094);

(statearr_30117_30145[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (3))){
var inst_30105 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30107__$1,inst_30105);
} else {
if((state_val_30108 === (12))){
var inst_30072 = (state_30107[(9)]);
var inst_30086 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30072,opts);
var state_30107__$1 = state_30107;
if(cljs.core.truth_(inst_30086)){
var statearr_30118_30146 = state_30107__$1;
(statearr_30118_30146[(1)] = (15));

} else {
var statearr_30119_30147 = state_30107__$1;
(statearr_30119_30147[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (2))){
var state_30107__$1 = state_30107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30107__$1,(4),ch);
} else {
if((state_val_30108 === (11))){
var inst_30073 = (state_30107[(8)]);
var inst_30078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30079 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30073);
var inst_30080 = cljs.core.async.timeout.call(null,(1000));
var inst_30081 = [inst_30079,inst_30080];
var inst_30082 = (new cljs.core.PersistentVector(null,2,(5),inst_30078,inst_30081,null));
var state_30107__$1 = state_30107;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30107__$1,(14),inst_30082);
} else {
if((state_val_30108 === (9))){
var state_30107__$1 = state_30107;
var statearr_30120_30148 = state_30107__$1;
(statearr_30120_30148[(2)] = null);

(statearr_30120_30148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (5))){
var inst_30066 = (state_30107[(7)]);
var inst_30068 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30069 = (new cljs.core.PersistentArrayMap(null,2,inst_30068,null));
var inst_30070 = (new cljs.core.PersistentHashSet(null,inst_30069,null));
var inst_30071 = figwheel.client.focus_msgs.call(null,inst_30070,inst_30066);
var inst_30072 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30071);
var inst_30073 = cljs.core.first.call(null,inst_30071);
var inst_30074 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_30107__$1 = (function (){var statearr_30121 = state_30107;
(statearr_30121[(9)] = inst_30072);

(statearr_30121[(8)] = inst_30073);

return statearr_30121;
})();
if(cljs.core.truth_(inst_30074)){
var statearr_30122_30149 = state_30107__$1;
(statearr_30122_30149[(1)] = (8));

} else {
var statearr_30123_30150 = state_30107__$1;
(statearr_30123_30150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (14))){
var inst_30084 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30124_30151 = state_30107__$1;
(statearr_30124_30151[(2)] = inst_30084);

(statearr_30124_30151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (16))){
var state_30107__$1 = state_30107;
var statearr_30125_30152 = state_30107__$1;
(statearr_30125_30152[(2)] = null);

(statearr_30125_30152[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (10))){
var inst_30099 = (state_30107[(2)]);
var state_30107__$1 = (function (){var statearr_30126 = state_30107;
(statearr_30126[(10)] = inst_30099);

return statearr_30126;
})();
var statearr_30127_30153 = state_30107__$1;
(statearr_30127_30153[(2)] = null);

(statearr_30127_30153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (8))){
var inst_30072 = (state_30107[(9)]);
var inst_30076 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30072,opts);
var state_30107__$1 = state_30107;
if(cljs.core.truth_(inst_30076)){
var statearr_30128_30154 = state_30107__$1;
(statearr_30128_30154[(1)] = (11));

} else {
var statearr_30129_30155 = state_30107__$1;
(statearr_30129_30155[(1)] = (12));

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
});})(c__21877__auto___30137,ch))
;
return ((function (switch__21812__auto__,c__21877__auto___30137,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21813__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21813__auto____0 = (function (){
var statearr_30133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30133[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21813__auto__);

(statearr_30133[(1)] = (1));

return statearr_30133;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21813__auto____1 = (function (state_30107){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_30107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e30134){if((e30134 instanceof Object)){
var ex__21816__auto__ = e30134;
var statearr_30135_30156 = state_30107;
(statearr_30135_30156[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30157 = state_30107;
state_30107 = G__30157;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21813__auto__ = function(state_30107){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21813__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21813__auto____1.call(this,state_30107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21813__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21813__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___30137,ch))
})();
var state__21879__auto__ = (function (){var statearr_30136 = f__21878__auto__.call(null);
(statearr_30136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___30137);

return statearr_30136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___30137,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30158_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30158_SHARP_));
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
var base_path_30165 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30165){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_30163 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30164 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30163,_STAR_print_newline_STAR_30164,base_path_30165){
return (function() { 
var G__30166__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30167__i = 0, G__30167__a = new Array(arguments.length -  0);
while (G__30167__i < G__30167__a.length) {G__30167__a[G__30167__i] = arguments[G__30167__i + 0]; ++G__30167__i;}
  args = new cljs.core.IndexedSeq(G__30167__a,0);
} 
return G__30166__delegate.call(this,args);};
G__30166.cljs$lang$maxFixedArity = 0;
G__30166.cljs$lang$applyTo = (function (arglist__30168){
var args = cljs.core.seq(arglist__30168);
return G__30166__delegate(args);
});
G__30166.cljs$core$IFn$_invoke$arity$variadic = G__30166__delegate;
return G__30166;
})()
;})(_STAR_print_fn_STAR_30163,_STAR_print_newline_STAR_30164,base_path_30165))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30164;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30163;
}}catch (e30162){if((e30162 instanceof Error)){
var e = e30162;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30165], null));
} else {
var e = e30162;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30165))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30169){
var map__30176 = p__30169;
var map__30176__$1 = ((((!((map__30176 == null)))?((((map__30176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30176):map__30176);
var opts = map__30176__$1;
var build_id = cljs.core.get.call(null,map__30176__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30176,map__30176__$1,opts,build_id){
return (function (p__30178){
var vec__30179 = p__30178;
var map__30180 = cljs.core.nth.call(null,vec__30179,(0),null);
var map__30180__$1 = ((((!((map__30180 == null)))?((((map__30180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30180):map__30180);
var msg = map__30180__$1;
var msg_name = cljs.core.get.call(null,map__30180__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30179,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30179,map__30180,map__30180__$1,msg,msg_name,_,map__30176,map__30176__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30179,map__30180,map__30180__$1,msg,msg_name,_,map__30176,map__30176__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30176,map__30176__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30186){
var vec__30187 = p__30186;
var map__30188 = cljs.core.nth.call(null,vec__30187,(0),null);
var map__30188__$1 = ((((!((map__30188 == null)))?((((map__30188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30188):map__30188);
var msg = map__30188__$1;
var msg_name = cljs.core.get.call(null,map__30188__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30187,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30190){
var map__30200 = p__30190;
var map__30200__$1 = ((((!((map__30200 == null)))?((((map__30200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30200):map__30200);
var on_compile_warning = cljs.core.get.call(null,map__30200__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30200__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30200,map__30200__$1,on_compile_warning,on_compile_fail){
return (function (p__30202){
var vec__30203 = p__30202;
var map__30204 = cljs.core.nth.call(null,vec__30203,(0),null);
var map__30204__$1 = ((((!((map__30204 == null)))?((((map__30204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30204):map__30204);
var msg = map__30204__$1;
var msg_name = cljs.core.get.call(null,map__30204__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30203,(1));
var pred__30206 = cljs.core._EQ_;
var expr__30207 = msg_name;
if(cljs.core.truth_(pred__30206.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30207))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30206.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30207))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30200,map__30200__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21877__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto__,msg_hist,msg_names,msg){
return (function (state_30423){
var state_val_30424 = (state_30423[(1)]);
if((state_val_30424 === (7))){
var inst_30347 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
if(cljs.core.truth_(inst_30347)){
var statearr_30425_30471 = state_30423__$1;
(statearr_30425_30471[(1)] = (8));

} else {
var statearr_30426_30472 = state_30423__$1;
(statearr_30426_30472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (20))){
var inst_30417 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30427_30473 = state_30423__$1;
(statearr_30427_30473[(2)] = inst_30417);

(statearr_30427_30473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (27))){
var inst_30413 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30428_30474 = state_30423__$1;
(statearr_30428_30474[(2)] = inst_30413);

(statearr_30428_30474[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (1))){
var inst_30340 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30423__$1 = state_30423;
if(cljs.core.truth_(inst_30340)){
var statearr_30429_30475 = state_30423__$1;
(statearr_30429_30475[(1)] = (2));

} else {
var statearr_30430_30476 = state_30423__$1;
(statearr_30430_30476[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (24))){
var inst_30415 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30431_30477 = state_30423__$1;
(statearr_30431_30477[(2)] = inst_30415);

(statearr_30431_30477[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (4))){
var inst_30421 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30423__$1,inst_30421);
} else {
if((state_val_30424 === (15))){
var inst_30419 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30432_30478 = state_30423__$1;
(statearr_30432_30478[(2)] = inst_30419);

(statearr_30432_30478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (21))){
var inst_30378 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30433_30479 = state_30423__$1;
(statearr_30433_30479[(2)] = inst_30378);

(statearr_30433_30479[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (31))){
var inst_30402 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30423__$1 = state_30423;
if(cljs.core.truth_(inst_30402)){
var statearr_30434_30480 = state_30423__$1;
(statearr_30434_30480[(1)] = (34));

} else {
var statearr_30435_30481 = state_30423__$1;
(statearr_30435_30481[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (32))){
var inst_30411 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30436_30482 = state_30423__$1;
(statearr_30436_30482[(2)] = inst_30411);

(statearr_30436_30482[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (33))){
var inst_30400 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30437_30483 = state_30423__$1;
(statearr_30437_30483[(2)] = inst_30400);

(statearr_30437_30483[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (13))){
var inst_30361 = figwheel.client.heads_up.clear.call(null);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30423__$1,(16),inst_30361);
} else {
if((state_val_30424 === (22))){
var inst_30382 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30383 = figwheel.client.heads_up.append_message.call(null,inst_30382);
var state_30423__$1 = state_30423;
var statearr_30438_30484 = state_30423__$1;
(statearr_30438_30484[(2)] = inst_30383);

(statearr_30438_30484[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (36))){
var inst_30409 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30439_30485 = state_30423__$1;
(statearr_30439_30485[(2)] = inst_30409);

(statearr_30439_30485[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (29))){
var inst_30393 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30440_30486 = state_30423__$1;
(statearr_30440_30486[(2)] = inst_30393);

(statearr_30440_30486[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (6))){
var inst_30342 = (state_30423[(7)]);
var state_30423__$1 = state_30423;
var statearr_30441_30487 = state_30423__$1;
(statearr_30441_30487[(2)] = inst_30342);

(statearr_30441_30487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (28))){
var inst_30389 = (state_30423[(2)]);
var inst_30390 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30391 = figwheel.client.heads_up.display_warning.call(null,inst_30390);
var state_30423__$1 = (function (){var statearr_30442 = state_30423;
(statearr_30442[(8)] = inst_30389);

return statearr_30442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30423__$1,(29),inst_30391);
} else {
if((state_val_30424 === (25))){
var inst_30387 = figwheel.client.heads_up.clear.call(null);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30423__$1,(28),inst_30387);
} else {
if((state_val_30424 === (34))){
var inst_30404 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30423__$1,(37),inst_30404);
} else {
if((state_val_30424 === (17))){
var inst_30369 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30443_30488 = state_30423__$1;
(statearr_30443_30488[(2)] = inst_30369);

(statearr_30443_30488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (3))){
var inst_30359 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30423__$1 = state_30423;
if(cljs.core.truth_(inst_30359)){
var statearr_30444_30489 = state_30423__$1;
(statearr_30444_30489[(1)] = (13));

} else {
var statearr_30445_30490 = state_30423__$1;
(statearr_30445_30490[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (12))){
var inst_30355 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30446_30491 = state_30423__$1;
(statearr_30446_30491[(2)] = inst_30355);

(statearr_30446_30491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (2))){
var inst_30342 = (state_30423[(7)]);
var inst_30342__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_30423__$1 = (function (){var statearr_30447 = state_30423;
(statearr_30447[(7)] = inst_30342__$1);

return statearr_30447;
})();
if(cljs.core.truth_(inst_30342__$1)){
var statearr_30448_30492 = state_30423__$1;
(statearr_30448_30492[(1)] = (5));

} else {
var statearr_30449_30493 = state_30423__$1;
(statearr_30449_30493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (23))){
var inst_30385 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30423__$1 = state_30423;
if(cljs.core.truth_(inst_30385)){
var statearr_30450_30494 = state_30423__$1;
(statearr_30450_30494[(1)] = (25));

} else {
var statearr_30451_30495 = state_30423__$1;
(statearr_30451_30495[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (35))){
var state_30423__$1 = state_30423;
var statearr_30452_30496 = state_30423__$1;
(statearr_30452_30496[(2)] = null);

(statearr_30452_30496[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (19))){
var inst_30380 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30423__$1 = state_30423;
if(cljs.core.truth_(inst_30380)){
var statearr_30453_30497 = state_30423__$1;
(statearr_30453_30497[(1)] = (22));

} else {
var statearr_30454_30498 = state_30423__$1;
(statearr_30454_30498[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (11))){
var inst_30351 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30455_30499 = state_30423__$1;
(statearr_30455_30499[(2)] = inst_30351);

(statearr_30455_30499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (9))){
var inst_30353 = figwheel.client.heads_up.clear.call(null);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30423__$1,(12),inst_30353);
} else {
if((state_val_30424 === (5))){
var inst_30344 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30423__$1 = state_30423;
var statearr_30456_30500 = state_30423__$1;
(statearr_30456_30500[(2)] = inst_30344);

(statearr_30456_30500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (14))){
var inst_30371 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30423__$1 = state_30423;
if(cljs.core.truth_(inst_30371)){
var statearr_30457_30501 = state_30423__$1;
(statearr_30457_30501[(1)] = (18));

} else {
var statearr_30458_30502 = state_30423__$1;
(statearr_30458_30502[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (26))){
var inst_30395 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30423__$1 = state_30423;
if(cljs.core.truth_(inst_30395)){
var statearr_30459_30503 = state_30423__$1;
(statearr_30459_30503[(1)] = (30));

} else {
var statearr_30460_30504 = state_30423__$1;
(statearr_30460_30504[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (16))){
var inst_30363 = (state_30423[(2)]);
var inst_30364 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30365 = figwheel.client.format_messages.call(null,inst_30364);
var inst_30366 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30367 = figwheel.client.heads_up.display_error.call(null,inst_30365,inst_30366);
var state_30423__$1 = (function (){var statearr_30461 = state_30423;
(statearr_30461[(9)] = inst_30363);

return statearr_30461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30423__$1,(17),inst_30367);
} else {
if((state_val_30424 === (30))){
var inst_30397 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30398 = figwheel.client.heads_up.display_warning.call(null,inst_30397);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30423__$1,(33),inst_30398);
} else {
if((state_val_30424 === (10))){
var inst_30357 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30462_30505 = state_30423__$1;
(statearr_30462_30505[(2)] = inst_30357);

(statearr_30462_30505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (18))){
var inst_30373 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30374 = figwheel.client.format_messages.call(null,inst_30373);
var inst_30375 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30376 = figwheel.client.heads_up.display_error.call(null,inst_30374,inst_30375);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30423__$1,(21),inst_30376);
} else {
if((state_val_30424 === (37))){
var inst_30406 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30463_30506 = state_30423__$1;
(statearr_30463_30506[(2)] = inst_30406);

(statearr_30463_30506[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (8))){
var inst_30349 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30423__$1,(11),inst_30349);
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
});})(c__21877__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21812__auto__,c__21877__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21813__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21813__auto____0 = (function (){
var statearr_30467 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30467[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21813__auto__);

(statearr_30467[(1)] = (1));

return statearr_30467;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21813__auto____1 = (function (state_30423){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_30423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e30468){if((e30468 instanceof Object)){
var ex__21816__auto__ = e30468;
var statearr_30469_30507 = state_30423;
(statearr_30469_30507[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30508 = state_30423;
state_30423 = G__30508;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21813__auto__ = function(state_30423){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21813__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21813__auto____1.call(this,state_30423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21813__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21813__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto__,msg_hist,msg_names,msg))
})();
var state__21879__auto__ = (function (){var statearr_30470 = f__21878__auto__.call(null);
(statearr_30470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto__);

return statearr_30470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto__,msg_hist,msg_names,msg))
);

return c__21877__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21877__auto___30571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___30571,ch){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___30571,ch){
return (function (state_30554){
var state_val_30555 = (state_30554[(1)]);
if((state_val_30555 === (1))){
var state_30554__$1 = state_30554;
var statearr_30556_30572 = state_30554__$1;
(statearr_30556_30572[(2)] = null);

(statearr_30556_30572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (2))){
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30554__$1,(4),ch);
} else {
if((state_val_30555 === (3))){
var inst_30552 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30554__$1,inst_30552);
} else {
if((state_val_30555 === (4))){
var inst_30542 = (state_30554[(7)]);
var inst_30542__$1 = (state_30554[(2)]);
var state_30554__$1 = (function (){var statearr_30557 = state_30554;
(statearr_30557[(7)] = inst_30542__$1);

return statearr_30557;
})();
if(cljs.core.truth_(inst_30542__$1)){
var statearr_30558_30573 = state_30554__$1;
(statearr_30558_30573[(1)] = (5));

} else {
var statearr_30559_30574 = state_30554__$1;
(statearr_30559_30574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (5))){
var inst_30542 = (state_30554[(7)]);
var inst_30544 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30542);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30554__$1,(8),inst_30544);
} else {
if((state_val_30555 === (6))){
var state_30554__$1 = state_30554;
var statearr_30560_30575 = state_30554__$1;
(statearr_30560_30575[(2)] = null);

(statearr_30560_30575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (7))){
var inst_30550 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30561_30576 = state_30554__$1;
(statearr_30561_30576[(2)] = inst_30550);

(statearr_30561_30576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (8))){
var inst_30546 = (state_30554[(2)]);
var state_30554__$1 = (function (){var statearr_30562 = state_30554;
(statearr_30562[(8)] = inst_30546);

return statearr_30562;
})();
var statearr_30563_30577 = state_30554__$1;
(statearr_30563_30577[(2)] = null);

(statearr_30563_30577[(1)] = (2));


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
});})(c__21877__auto___30571,ch))
;
return ((function (switch__21812__auto__,c__21877__auto___30571,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21813__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21813__auto____0 = (function (){
var statearr_30567 = [null,null,null,null,null,null,null,null,null];
(statearr_30567[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21813__auto__);

(statearr_30567[(1)] = (1));

return statearr_30567;
});
var figwheel$client$heads_up_plugin_$_state_machine__21813__auto____1 = (function (state_30554){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_30554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e30568){if((e30568 instanceof Object)){
var ex__21816__auto__ = e30568;
var statearr_30569_30578 = state_30554;
(statearr_30569_30578[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30579 = state_30554;
state_30554 = G__30579;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21813__auto__ = function(state_30554){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21813__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21813__auto____1.call(this,state_30554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21813__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21813__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___30571,ch))
})();
var state__21879__auto__ = (function (){var statearr_30570 = f__21878__auto__.call(null);
(statearr_30570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___30571);

return statearr_30570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___30571,ch))
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
var c__21877__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto__){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto__){
return (function (state_30600){
var state_val_30601 = (state_30600[(1)]);
if((state_val_30601 === (1))){
var inst_30595 = cljs.core.async.timeout.call(null,(3000));
var state_30600__$1 = state_30600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30600__$1,(2),inst_30595);
} else {
if((state_val_30601 === (2))){
var inst_30597 = (state_30600[(2)]);
var inst_30598 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30600__$1 = (function (){var statearr_30602 = state_30600;
(statearr_30602[(7)] = inst_30597);

return statearr_30602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30600__$1,inst_30598);
} else {
return null;
}
}
});})(c__21877__auto__))
;
return ((function (switch__21812__auto__,c__21877__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21813__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21813__auto____0 = (function (){
var statearr_30606 = [null,null,null,null,null,null,null,null];
(statearr_30606[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21813__auto__);

(statearr_30606[(1)] = (1));

return statearr_30606;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21813__auto____1 = (function (state_30600){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_30600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e30607){if((e30607 instanceof Object)){
var ex__21816__auto__ = e30607;
var statearr_30608_30610 = state_30600;
(statearr_30608_30610[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30611 = state_30600;
state_30600 = G__30611;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21813__auto__ = function(state_30600){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21813__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21813__auto____1.call(this,state_30600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21813__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21813__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto__))
})();
var state__21879__auto__ = (function (){var statearr_30609 = f__21878__auto__.call(null);
(statearr_30609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto__);

return statearr_30609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto__))
);

return c__21877__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30612){
var map__30619 = p__30612;
var map__30619__$1 = ((((!((map__30619 == null)))?((((map__30619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30619):map__30619);
var ed = map__30619__$1;
var formatted_exception = cljs.core.get.call(null,map__30619__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30619__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30619__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30621_30625 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30622_30626 = null;
var count__30623_30627 = (0);
var i__30624_30628 = (0);
while(true){
if((i__30624_30628 < count__30623_30627)){
var msg_30629 = cljs.core._nth.call(null,chunk__30622_30626,i__30624_30628);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30629);

var G__30630 = seq__30621_30625;
var G__30631 = chunk__30622_30626;
var G__30632 = count__30623_30627;
var G__30633 = (i__30624_30628 + (1));
seq__30621_30625 = G__30630;
chunk__30622_30626 = G__30631;
count__30623_30627 = G__30632;
i__30624_30628 = G__30633;
continue;
} else {
var temp__4425__auto___30634 = cljs.core.seq.call(null,seq__30621_30625);
if(temp__4425__auto___30634){
var seq__30621_30635__$1 = temp__4425__auto___30634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30621_30635__$1)){
var c__17994__auto___30636 = cljs.core.chunk_first.call(null,seq__30621_30635__$1);
var G__30637 = cljs.core.chunk_rest.call(null,seq__30621_30635__$1);
var G__30638 = c__17994__auto___30636;
var G__30639 = cljs.core.count.call(null,c__17994__auto___30636);
var G__30640 = (0);
seq__30621_30625 = G__30637;
chunk__30622_30626 = G__30638;
count__30623_30627 = G__30639;
i__30624_30628 = G__30640;
continue;
} else {
var msg_30641 = cljs.core.first.call(null,seq__30621_30635__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30641);

var G__30642 = cljs.core.next.call(null,seq__30621_30635__$1);
var G__30643 = null;
var G__30644 = (0);
var G__30645 = (0);
seq__30621_30625 = G__30642;
chunk__30622_30626 = G__30643;
count__30623_30627 = G__30644;
i__30624_30628 = G__30645;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30646){
var map__30649 = p__30646;
var map__30649__$1 = ((((!((map__30649 == null)))?((((map__30649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30649):map__30649);
var w = map__30649__$1;
var message = cljs.core.get.call(null,map__30649__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__17179__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17179__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17179__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30657 = cljs.core.seq.call(null,plugins);
var chunk__30658 = null;
var count__30659 = (0);
var i__30660 = (0);
while(true){
if((i__30660 < count__30659)){
var vec__30661 = cljs.core._nth.call(null,chunk__30658,i__30660);
var k = cljs.core.nth.call(null,vec__30661,(0),null);
var plugin = cljs.core.nth.call(null,vec__30661,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30663 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30657,chunk__30658,count__30659,i__30660,pl_30663,vec__30661,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30663.call(null,msg_hist);
});})(seq__30657,chunk__30658,count__30659,i__30660,pl_30663,vec__30661,k,plugin))
);
} else {
}

var G__30664 = seq__30657;
var G__30665 = chunk__30658;
var G__30666 = count__30659;
var G__30667 = (i__30660 + (1));
seq__30657 = G__30664;
chunk__30658 = G__30665;
count__30659 = G__30666;
i__30660 = G__30667;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30657);
if(temp__4425__auto__){
var seq__30657__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30657__$1)){
var c__17994__auto__ = cljs.core.chunk_first.call(null,seq__30657__$1);
var G__30668 = cljs.core.chunk_rest.call(null,seq__30657__$1);
var G__30669 = c__17994__auto__;
var G__30670 = cljs.core.count.call(null,c__17994__auto__);
var G__30671 = (0);
seq__30657 = G__30668;
chunk__30658 = G__30669;
count__30659 = G__30670;
i__30660 = G__30671;
continue;
} else {
var vec__30662 = cljs.core.first.call(null,seq__30657__$1);
var k = cljs.core.nth.call(null,vec__30662,(0),null);
var plugin = cljs.core.nth.call(null,vec__30662,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30672 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30657,chunk__30658,count__30659,i__30660,pl_30672,vec__30662,k,plugin,seq__30657__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30672.call(null,msg_hist);
});})(seq__30657,chunk__30658,count__30659,i__30660,pl_30672,vec__30662,k,plugin,seq__30657__$1,temp__4425__auto__))
);
} else {
}

var G__30673 = cljs.core.next.call(null,seq__30657__$1);
var G__30674 = null;
var G__30675 = (0);
var G__30676 = (0);
seq__30657 = G__30673;
chunk__30658 = G__30674;
count__30659 = G__30675;
i__30660 = G__30676;
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
var args30677 = [];
var len__18249__auto___30680 = arguments.length;
var i__18250__auto___30681 = (0);
while(true){
if((i__18250__auto___30681 < len__18249__auto___30680)){
args30677.push((arguments[i__18250__auto___30681]));

var G__30682 = (i__18250__auto___30681 + (1));
i__18250__auto___30681 = G__30682;
continue;
} else {
}
break;
}

var G__30679 = args30677.length;
switch (G__30679) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30677.length)].join('')));

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
var args__18256__auto__ = [];
var len__18249__auto___30688 = arguments.length;
var i__18250__auto___30689 = (0);
while(true){
if((i__18250__auto___30689 < len__18249__auto___30688)){
args__18256__auto__.push((arguments[i__18250__auto___30689]));

var G__30690 = (i__18250__auto___30689 + (1));
i__18250__auto___30689 = G__30690;
continue;
} else {
}
break;
}

var argseq__18257__auto__ = ((((0) < args__18256__auto__.length))?(new cljs.core.IndexedSeq(args__18256__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__18257__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30685){
var map__30686 = p__30685;
var map__30686__$1 = ((((!((map__30686 == null)))?((((map__30686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30686):map__30686);
var opts = map__30686__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30684){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30684));
});

//# sourceMappingURL=client.js.map