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
var G__26790__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26791__i = 0, G__26791__a = new Array(arguments.length -  0);
while (G__26791__i < G__26791__a.length) {G__26791__a[G__26791__i] = arguments[G__26791__i + 0]; ++G__26791__i;}
  args = new cljs.core.IndexedSeq(G__26791__a,0);
} 
return G__26790__delegate.call(this,args);};
G__26790.cljs$lang$maxFixedArity = 0;
G__26790.cljs$lang$applyTo = (function (arglist__26792){
var args = cljs.core.seq(arglist__26792);
return G__26790__delegate(args);
});
G__26790.cljs$core$IFn$_invoke$arity$variadic = G__26790__delegate;
return G__26790;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26793){
var map__26796 = p__26793;
var map__26796__$1 = ((((!((map__26796 == null)))?((((map__26796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26796):map__26796);
var message = cljs.core.get.call(null,map__26796__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26796__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21381__auto___26944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___26944,ch){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___26944,ch){
return (function (state_26914){
var state_val_26915 = (state_26914[(1)]);
if((state_val_26915 === (7))){
var inst_26910 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26916_26945 = state_26914__$1;
(statearr_26916_26945[(2)] = inst_26910);

(statearr_26916_26945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (1))){
var state_26914__$1 = state_26914;
var statearr_26917_26946 = state_26914__$1;
(statearr_26917_26946[(2)] = null);

(statearr_26917_26946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (4))){
var inst_26873 = (state_26914[(7)]);
var inst_26873__$1 = (state_26914[(2)]);
var state_26914__$1 = (function (){var statearr_26918 = state_26914;
(statearr_26918[(7)] = inst_26873__$1);

return statearr_26918;
})();
if(cljs.core.truth_(inst_26873__$1)){
var statearr_26919_26947 = state_26914__$1;
(statearr_26919_26947[(1)] = (5));

} else {
var statearr_26920_26948 = state_26914__$1;
(statearr_26920_26948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (15))){
var inst_26880 = (state_26914[(8)]);
var inst_26895 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26880);
var inst_26896 = cljs.core.first.call(null,inst_26895);
var inst_26897 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26896);
var inst_26898 = console.warn("Figwheel: Not loading code with warnings - ",inst_26897);
var state_26914__$1 = state_26914;
var statearr_26921_26949 = state_26914__$1;
(statearr_26921_26949[(2)] = inst_26898);

(statearr_26921_26949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (13))){
var inst_26903 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26922_26950 = state_26914__$1;
(statearr_26922_26950[(2)] = inst_26903);

(statearr_26922_26950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (6))){
var state_26914__$1 = state_26914;
var statearr_26923_26951 = state_26914__$1;
(statearr_26923_26951[(2)] = null);

(statearr_26923_26951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (17))){
var inst_26901 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26924_26952 = state_26914__$1;
(statearr_26924_26952[(2)] = inst_26901);

(statearr_26924_26952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (3))){
var inst_26912 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26914__$1,inst_26912);
} else {
if((state_val_26915 === (12))){
var inst_26879 = (state_26914[(9)]);
var inst_26893 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26879,opts);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26893)){
var statearr_26925_26953 = state_26914__$1;
(statearr_26925_26953[(1)] = (15));

} else {
var statearr_26926_26954 = state_26914__$1;
(statearr_26926_26954[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (2))){
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,(4),ch);
} else {
if((state_val_26915 === (11))){
var inst_26880 = (state_26914[(8)]);
var inst_26885 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26886 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26880);
var inst_26887 = cljs.core.async.timeout.call(null,(1000));
var inst_26888 = [inst_26886,inst_26887];
var inst_26889 = (new cljs.core.PersistentVector(null,2,(5),inst_26885,inst_26888,null));
var state_26914__$1 = state_26914;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26914__$1,(14),inst_26889);
} else {
if((state_val_26915 === (9))){
var state_26914__$1 = state_26914;
var statearr_26927_26955 = state_26914__$1;
(statearr_26927_26955[(2)] = null);

(statearr_26927_26955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (5))){
var inst_26873 = (state_26914[(7)]);
var inst_26875 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26876 = (new cljs.core.PersistentArrayMap(null,2,inst_26875,null));
var inst_26877 = (new cljs.core.PersistentHashSet(null,inst_26876,null));
var inst_26878 = figwheel.client.focus_msgs.call(null,inst_26877,inst_26873);
var inst_26879 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26878);
var inst_26880 = cljs.core.first.call(null,inst_26878);
var inst_26881 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_26914__$1 = (function (){var statearr_26928 = state_26914;
(statearr_26928[(9)] = inst_26879);

(statearr_26928[(8)] = inst_26880);

return statearr_26928;
})();
if(cljs.core.truth_(inst_26881)){
var statearr_26929_26956 = state_26914__$1;
(statearr_26929_26956[(1)] = (8));

} else {
var statearr_26930_26957 = state_26914__$1;
(statearr_26930_26957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (14))){
var inst_26891 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26931_26958 = state_26914__$1;
(statearr_26931_26958[(2)] = inst_26891);

(statearr_26931_26958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (16))){
var state_26914__$1 = state_26914;
var statearr_26932_26959 = state_26914__$1;
(statearr_26932_26959[(2)] = null);

(statearr_26932_26959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (10))){
var inst_26906 = (state_26914[(2)]);
var state_26914__$1 = (function (){var statearr_26933 = state_26914;
(statearr_26933[(10)] = inst_26906);

return statearr_26933;
})();
var statearr_26934_26960 = state_26914__$1;
(statearr_26934_26960[(2)] = null);

(statearr_26934_26960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (8))){
var inst_26879 = (state_26914[(9)]);
var inst_26883 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26879,opts);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26883)){
var statearr_26935_26961 = state_26914__$1;
(statearr_26935_26961[(1)] = (11));

} else {
var statearr_26936_26962 = state_26914__$1;
(statearr_26936_26962[(1)] = (12));

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
});})(c__21381__auto___26944,ch))
;
return ((function (switch__21316__auto__,c__21381__auto___26944,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____0 = (function (){
var statearr_26940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26940[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__);

(statearr_26940[(1)] = (1));

return statearr_26940;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____1 = (function (state_26914){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_26914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e26941){if((e26941 instanceof Object)){
var ex__21320__auto__ = e26941;
var statearr_26942_26963 = state_26914;
(statearr_26942_26963[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26964 = state_26914;
state_26914 = G__26964;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__ = function(state_26914){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____1.call(this,state_26914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___26944,ch))
})();
var state__21383__auto__ = (function (){var statearr_26943 = f__21382__auto__.call(null);
(statearr_26943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___26944);

return statearr_26943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___26944,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26965_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26965_SHARP_));
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
var base_path_26972 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26972){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26970 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26971 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26970,_STAR_print_newline_STAR_26971,base_path_26972){
return (function() { 
var G__26973__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26974__i = 0, G__26974__a = new Array(arguments.length -  0);
while (G__26974__i < G__26974__a.length) {G__26974__a[G__26974__i] = arguments[G__26974__i + 0]; ++G__26974__i;}
  args = new cljs.core.IndexedSeq(G__26974__a,0);
} 
return G__26973__delegate.call(this,args);};
G__26973.cljs$lang$maxFixedArity = 0;
G__26973.cljs$lang$applyTo = (function (arglist__26975){
var args = cljs.core.seq(arglist__26975);
return G__26973__delegate(args);
});
G__26973.cljs$core$IFn$_invoke$arity$variadic = G__26973__delegate;
return G__26973;
})()
;})(_STAR_print_fn_STAR_26970,_STAR_print_newline_STAR_26971,base_path_26972))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26971;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26970;
}}catch (e26969){if((e26969 instanceof Error)){
var e = e26969;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26972], null));
} else {
var e = e26969;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26972))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26976){
var map__26983 = p__26976;
var map__26983__$1 = ((((!((map__26983 == null)))?((((map__26983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26983):map__26983);
var opts = map__26983__$1;
var build_id = cljs.core.get.call(null,map__26983__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26983,map__26983__$1,opts,build_id){
return (function (p__26985){
var vec__26986 = p__26985;
var map__26987 = cljs.core.nth.call(null,vec__26986,(0),null);
var map__26987__$1 = ((((!((map__26987 == null)))?((((map__26987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26987):map__26987);
var msg = map__26987__$1;
var msg_name = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26986,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26986,map__26987,map__26987__$1,msg,msg_name,_,map__26983,map__26983__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26986,map__26987,map__26987__$1,msg,msg_name,_,map__26983,map__26983__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26983,map__26983__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26993){
var vec__26994 = p__26993;
var map__26995 = cljs.core.nth.call(null,vec__26994,(0),null);
var map__26995__$1 = ((((!((map__26995 == null)))?((((map__26995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26995):map__26995);
var msg = map__26995__$1;
var msg_name = cljs.core.get.call(null,map__26995__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26994,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26997){
var map__27007 = p__26997;
var map__27007__$1 = ((((!((map__27007 == null)))?((((map__27007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27007):map__27007);
var on_compile_warning = cljs.core.get.call(null,map__27007__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27007__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27007,map__27007__$1,on_compile_warning,on_compile_fail){
return (function (p__27009){
var vec__27010 = p__27009;
var map__27011 = cljs.core.nth.call(null,vec__27010,(0),null);
var map__27011__$1 = ((((!((map__27011 == null)))?((((map__27011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27011):map__27011);
var msg = map__27011__$1;
var msg_name = cljs.core.get.call(null,map__27011__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27010,(1));
var pred__27013 = cljs.core._EQ_;
var expr__27014 = msg_name;
if(cljs.core.truth_(pred__27013.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27014))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27013.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27014))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27007,map__27007__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__,msg_hist,msg_names,msg){
return (function (state_27230){
var state_val_27231 = (state_27230[(1)]);
if((state_val_27231 === (7))){
var inst_27154 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
if(cljs.core.truth_(inst_27154)){
var statearr_27232_27278 = state_27230__$1;
(statearr_27232_27278[(1)] = (8));

} else {
var statearr_27233_27279 = state_27230__$1;
(statearr_27233_27279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (20))){
var inst_27224 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27234_27280 = state_27230__$1;
(statearr_27234_27280[(2)] = inst_27224);

(statearr_27234_27280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (27))){
var inst_27220 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27235_27281 = state_27230__$1;
(statearr_27235_27281[(2)] = inst_27220);

(statearr_27235_27281[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (1))){
var inst_27147 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27230__$1 = state_27230;
if(cljs.core.truth_(inst_27147)){
var statearr_27236_27282 = state_27230__$1;
(statearr_27236_27282[(1)] = (2));

} else {
var statearr_27237_27283 = state_27230__$1;
(statearr_27237_27283[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (24))){
var inst_27222 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27238_27284 = state_27230__$1;
(statearr_27238_27284[(2)] = inst_27222);

(statearr_27238_27284[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (4))){
var inst_27228 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27230__$1,inst_27228);
} else {
if((state_val_27231 === (15))){
var inst_27226 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27239_27285 = state_27230__$1;
(statearr_27239_27285[(2)] = inst_27226);

(statearr_27239_27285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (21))){
var inst_27185 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27240_27286 = state_27230__$1;
(statearr_27240_27286[(2)] = inst_27185);

(statearr_27240_27286[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (31))){
var inst_27209 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27230__$1 = state_27230;
if(cljs.core.truth_(inst_27209)){
var statearr_27241_27287 = state_27230__$1;
(statearr_27241_27287[(1)] = (34));

} else {
var statearr_27242_27288 = state_27230__$1;
(statearr_27242_27288[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (32))){
var inst_27218 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27243_27289 = state_27230__$1;
(statearr_27243_27289[(2)] = inst_27218);

(statearr_27243_27289[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (33))){
var inst_27207 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27244_27290 = state_27230__$1;
(statearr_27244_27290[(2)] = inst_27207);

(statearr_27244_27290[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (13))){
var inst_27168 = figwheel.client.heads_up.clear.call(null);
var state_27230__$1 = state_27230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27230__$1,(16),inst_27168);
} else {
if((state_val_27231 === (22))){
var inst_27189 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27190 = figwheel.client.heads_up.append_message.call(null,inst_27189);
var state_27230__$1 = state_27230;
var statearr_27245_27291 = state_27230__$1;
(statearr_27245_27291[(2)] = inst_27190);

(statearr_27245_27291[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (36))){
var inst_27216 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27246_27292 = state_27230__$1;
(statearr_27246_27292[(2)] = inst_27216);

(statearr_27246_27292[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (29))){
var inst_27200 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27247_27293 = state_27230__$1;
(statearr_27247_27293[(2)] = inst_27200);

(statearr_27247_27293[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (6))){
var inst_27149 = (state_27230[(7)]);
var state_27230__$1 = state_27230;
var statearr_27248_27294 = state_27230__$1;
(statearr_27248_27294[(2)] = inst_27149);

(statearr_27248_27294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (28))){
var inst_27196 = (state_27230[(2)]);
var inst_27197 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27198 = figwheel.client.heads_up.display_warning.call(null,inst_27197);
var state_27230__$1 = (function (){var statearr_27249 = state_27230;
(statearr_27249[(8)] = inst_27196);

return statearr_27249;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27230__$1,(29),inst_27198);
} else {
if((state_val_27231 === (25))){
var inst_27194 = figwheel.client.heads_up.clear.call(null);
var state_27230__$1 = state_27230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27230__$1,(28),inst_27194);
} else {
if((state_val_27231 === (34))){
var inst_27211 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27230__$1 = state_27230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27230__$1,(37),inst_27211);
} else {
if((state_val_27231 === (17))){
var inst_27176 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27250_27295 = state_27230__$1;
(statearr_27250_27295[(2)] = inst_27176);

(statearr_27250_27295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (3))){
var inst_27166 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27230__$1 = state_27230;
if(cljs.core.truth_(inst_27166)){
var statearr_27251_27296 = state_27230__$1;
(statearr_27251_27296[(1)] = (13));

} else {
var statearr_27252_27297 = state_27230__$1;
(statearr_27252_27297[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (12))){
var inst_27162 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27253_27298 = state_27230__$1;
(statearr_27253_27298[(2)] = inst_27162);

(statearr_27253_27298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (2))){
var inst_27149 = (state_27230[(7)]);
var inst_27149__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_27230__$1 = (function (){var statearr_27254 = state_27230;
(statearr_27254[(7)] = inst_27149__$1);

return statearr_27254;
})();
if(cljs.core.truth_(inst_27149__$1)){
var statearr_27255_27299 = state_27230__$1;
(statearr_27255_27299[(1)] = (5));

} else {
var statearr_27256_27300 = state_27230__$1;
(statearr_27256_27300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (23))){
var inst_27192 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27230__$1 = state_27230;
if(cljs.core.truth_(inst_27192)){
var statearr_27257_27301 = state_27230__$1;
(statearr_27257_27301[(1)] = (25));

} else {
var statearr_27258_27302 = state_27230__$1;
(statearr_27258_27302[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (35))){
var state_27230__$1 = state_27230;
var statearr_27259_27303 = state_27230__$1;
(statearr_27259_27303[(2)] = null);

(statearr_27259_27303[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (19))){
var inst_27187 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27230__$1 = state_27230;
if(cljs.core.truth_(inst_27187)){
var statearr_27260_27304 = state_27230__$1;
(statearr_27260_27304[(1)] = (22));

} else {
var statearr_27261_27305 = state_27230__$1;
(statearr_27261_27305[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (11))){
var inst_27158 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27262_27306 = state_27230__$1;
(statearr_27262_27306[(2)] = inst_27158);

(statearr_27262_27306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (9))){
var inst_27160 = figwheel.client.heads_up.clear.call(null);
var state_27230__$1 = state_27230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27230__$1,(12),inst_27160);
} else {
if((state_val_27231 === (5))){
var inst_27151 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27230__$1 = state_27230;
var statearr_27263_27307 = state_27230__$1;
(statearr_27263_27307[(2)] = inst_27151);

(statearr_27263_27307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (14))){
var inst_27178 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27230__$1 = state_27230;
if(cljs.core.truth_(inst_27178)){
var statearr_27264_27308 = state_27230__$1;
(statearr_27264_27308[(1)] = (18));

} else {
var statearr_27265_27309 = state_27230__$1;
(statearr_27265_27309[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (26))){
var inst_27202 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27230__$1 = state_27230;
if(cljs.core.truth_(inst_27202)){
var statearr_27266_27310 = state_27230__$1;
(statearr_27266_27310[(1)] = (30));

} else {
var statearr_27267_27311 = state_27230__$1;
(statearr_27267_27311[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (16))){
var inst_27170 = (state_27230[(2)]);
var inst_27171 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27172 = figwheel.client.format_messages.call(null,inst_27171);
var inst_27173 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27174 = figwheel.client.heads_up.display_error.call(null,inst_27172,inst_27173);
var state_27230__$1 = (function (){var statearr_27268 = state_27230;
(statearr_27268[(9)] = inst_27170);

return statearr_27268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27230__$1,(17),inst_27174);
} else {
if((state_val_27231 === (30))){
var inst_27204 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27205 = figwheel.client.heads_up.display_warning.call(null,inst_27204);
var state_27230__$1 = state_27230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27230__$1,(33),inst_27205);
} else {
if((state_val_27231 === (10))){
var inst_27164 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27269_27312 = state_27230__$1;
(statearr_27269_27312[(2)] = inst_27164);

(statearr_27269_27312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (18))){
var inst_27180 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27181 = figwheel.client.format_messages.call(null,inst_27180);
var inst_27182 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27183 = figwheel.client.heads_up.display_error.call(null,inst_27181,inst_27182);
var state_27230__$1 = state_27230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27230__$1,(21),inst_27183);
} else {
if((state_val_27231 === (37))){
var inst_27213 = (state_27230[(2)]);
var state_27230__$1 = state_27230;
var statearr_27270_27313 = state_27230__$1;
(statearr_27270_27313[(2)] = inst_27213);

(statearr_27270_27313[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27231 === (8))){
var inst_27156 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27230__$1 = state_27230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27230__$1,(11),inst_27156);
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
var statearr_27274 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27274[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__);

(statearr_27274[(1)] = (1));

return statearr_27274;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____1 = (function (state_27230){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27275){if((e27275 instanceof Object)){
var ex__21320__auto__ = e27275;
var statearr_27276_27314 = state_27230;
(statearr_27276_27314[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27315 = state_27230;
state_27230 = G__27315;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__ = function(state_27230){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____1.call(this,state_27230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__,msg_hist,msg_names,msg))
})();
var state__21383__auto__ = (function (){var statearr_27277 = f__21382__auto__.call(null);
(statearr_27277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_27277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__,msg_hist,msg_names,msg))
);

return c__21381__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21381__auto___27378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___27378,ch){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___27378,ch){
return (function (state_27361){
var state_val_27362 = (state_27361[(1)]);
if((state_val_27362 === (1))){
var state_27361__$1 = state_27361;
var statearr_27363_27379 = state_27361__$1;
(statearr_27363_27379[(2)] = null);

(statearr_27363_27379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (2))){
var state_27361__$1 = state_27361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27361__$1,(4),ch);
} else {
if((state_val_27362 === (3))){
var inst_27359 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27361__$1,inst_27359);
} else {
if((state_val_27362 === (4))){
var inst_27349 = (state_27361[(7)]);
var inst_27349__$1 = (state_27361[(2)]);
var state_27361__$1 = (function (){var statearr_27364 = state_27361;
(statearr_27364[(7)] = inst_27349__$1);

return statearr_27364;
})();
if(cljs.core.truth_(inst_27349__$1)){
var statearr_27365_27380 = state_27361__$1;
(statearr_27365_27380[(1)] = (5));

} else {
var statearr_27366_27381 = state_27361__$1;
(statearr_27366_27381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (5))){
var inst_27349 = (state_27361[(7)]);
var inst_27351 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27349);
var state_27361__$1 = state_27361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27361__$1,(8),inst_27351);
} else {
if((state_val_27362 === (6))){
var state_27361__$1 = state_27361;
var statearr_27367_27382 = state_27361__$1;
(statearr_27367_27382[(2)] = null);

(statearr_27367_27382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (7))){
var inst_27357 = (state_27361[(2)]);
var state_27361__$1 = state_27361;
var statearr_27368_27383 = state_27361__$1;
(statearr_27368_27383[(2)] = inst_27357);

(statearr_27368_27383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27362 === (8))){
var inst_27353 = (state_27361[(2)]);
var state_27361__$1 = (function (){var statearr_27369 = state_27361;
(statearr_27369[(8)] = inst_27353);

return statearr_27369;
})();
var statearr_27370_27384 = state_27361__$1;
(statearr_27370_27384[(2)] = null);

(statearr_27370_27384[(1)] = (2));


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
});})(c__21381__auto___27378,ch))
;
return ((function (switch__21316__auto__,c__21381__auto___27378,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21317__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21317__auto____0 = (function (){
var statearr_27374 = [null,null,null,null,null,null,null,null,null];
(statearr_27374[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21317__auto__);

(statearr_27374[(1)] = (1));

return statearr_27374;
});
var figwheel$client$heads_up_plugin_$_state_machine__21317__auto____1 = (function (state_27361){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27375){if((e27375 instanceof Object)){
var ex__21320__auto__ = e27375;
var statearr_27376_27385 = state_27361;
(statearr_27376_27385[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27386 = state_27361;
state_27361 = G__27386;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21317__auto__ = function(state_27361){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21317__auto____1.call(this,state_27361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21317__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21317__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___27378,ch))
})();
var state__21383__auto__ = (function (){var statearr_27377 = f__21382__auto__.call(null);
(statearr_27377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___27378);

return statearr_27377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___27378,ch))
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
return (function (state_27407){
var state_val_27408 = (state_27407[(1)]);
if((state_val_27408 === (1))){
var inst_27402 = cljs.core.async.timeout.call(null,(3000));
var state_27407__$1 = state_27407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27407__$1,(2),inst_27402);
} else {
if((state_val_27408 === (2))){
var inst_27404 = (state_27407[(2)]);
var inst_27405 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27407__$1 = (function (){var statearr_27409 = state_27407;
(statearr_27409[(7)] = inst_27404);

return statearr_27409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27407__$1,inst_27405);
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
var statearr_27413 = [null,null,null,null,null,null,null,null];
(statearr_27413[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__);

(statearr_27413[(1)] = (1));

return statearr_27413;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____1 = (function (state_27407){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27414){if((e27414 instanceof Object)){
var ex__21320__auto__ = e27414;
var statearr_27415_27417 = state_27407;
(statearr_27415_27417[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27418 = state_27407;
state_27407 = G__27418;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__ = function(state_27407){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____1.call(this,state_27407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_27416 = f__21382__auto__.call(null);
(statearr_27416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_27416;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27419){
var map__27426 = p__27419;
var map__27426__$1 = ((((!((map__27426 == null)))?((((map__27426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27426):map__27426);
var ed = map__27426__$1;
var formatted_exception = cljs.core.get.call(null,map__27426__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27426__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27426__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27428_27432 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27429_27433 = null;
var count__27430_27434 = (0);
var i__27431_27435 = (0);
while(true){
if((i__27431_27435 < count__27430_27434)){
var msg_27436 = cljs.core._nth.call(null,chunk__27429_27433,i__27431_27435);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27436);

var G__27437 = seq__27428_27432;
var G__27438 = chunk__27429_27433;
var G__27439 = count__27430_27434;
var G__27440 = (i__27431_27435 + (1));
seq__27428_27432 = G__27437;
chunk__27429_27433 = G__27438;
count__27430_27434 = G__27439;
i__27431_27435 = G__27440;
continue;
} else {
var temp__4425__auto___27441 = cljs.core.seq.call(null,seq__27428_27432);
if(temp__4425__auto___27441){
var seq__27428_27442__$1 = temp__4425__auto___27441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27428_27442__$1)){
var c__17588__auto___27443 = cljs.core.chunk_first.call(null,seq__27428_27442__$1);
var G__27444 = cljs.core.chunk_rest.call(null,seq__27428_27442__$1);
var G__27445 = c__17588__auto___27443;
var G__27446 = cljs.core.count.call(null,c__17588__auto___27443);
var G__27447 = (0);
seq__27428_27432 = G__27444;
chunk__27429_27433 = G__27445;
count__27430_27434 = G__27446;
i__27431_27435 = G__27447;
continue;
} else {
var msg_27448 = cljs.core.first.call(null,seq__27428_27442__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27448);

var G__27449 = cljs.core.next.call(null,seq__27428_27442__$1);
var G__27450 = null;
var G__27451 = (0);
var G__27452 = (0);
seq__27428_27432 = G__27449;
chunk__27429_27433 = G__27450;
count__27430_27434 = G__27451;
i__27431_27435 = G__27452;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27453){
var map__27456 = p__27453;
var map__27456__$1 = ((((!((map__27456 == null)))?((((map__27456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27456):map__27456);
var w = map__27456__$1;
var message = cljs.core.get.call(null,map__27456__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__27464 = cljs.core.seq.call(null,plugins);
var chunk__27465 = null;
var count__27466 = (0);
var i__27467 = (0);
while(true){
if((i__27467 < count__27466)){
var vec__27468 = cljs.core._nth.call(null,chunk__27465,i__27467);
var k = cljs.core.nth.call(null,vec__27468,(0),null);
var plugin = cljs.core.nth.call(null,vec__27468,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27470 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27464,chunk__27465,count__27466,i__27467,pl_27470,vec__27468,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27470.call(null,msg_hist);
});})(seq__27464,chunk__27465,count__27466,i__27467,pl_27470,vec__27468,k,plugin))
);
} else {
}

var G__27471 = seq__27464;
var G__27472 = chunk__27465;
var G__27473 = count__27466;
var G__27474 = (i__27467 + (1));
seq__27464 = G__27471;
chunk__27465 = G__27472;
count__27466 = G__27473;
i__27467 = G__27474;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27464);
if(temp__4425__auto__){
var seq__27464__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27464__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__27464__$1);
var G__27475 = cljs.core.chunk_rest.call(null,seq__27464__$1);
var G__27476 = c__17588__auto__;
var G__27477 = cljs.core.count.call(null,c__17588__auto__);
var G__27478 = (0);
seq__27464 = G__27475;
chunk__27465 = G__27476;
count__27466 = G__27477;
i__27467 = G__27478;
continue;
} else {
var vec__27469 = cljs.core.first.call(null,seq__27464__$1);
var k = cljs.core.nth.call(null,vec__27469,(0),null);
var plugin = cljs.core.nth.call(null,vec__27469,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27479 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27464,chunk__27465,count__27466,i__27467,pl_27479,vec__27469,k,plugin,seq__27464__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27479.call(null,msg_hist);
});})(seq__27464,chunk__27465,count__27466,i__27467,pl_27479,vec__27469,k,plugin,seq__27464__$1,temp__4425__auto__))
);
} else {
}

var G__27480 = cljs.core.next.call(null,seq__27464__$1);
var G__27481 = null;
var G__27482 = (0);
var G__27483 = (0);
seq__27464 = G__27480;
chunk__27465 = G__27481;
count__27466 = G__27482;
i__27467 = G__27483;
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
var args27484 = [];
var len__17843__auto___27487 = arguments.length;
var i__17844__auto___27488 = (0);
while(true){
if((i__17844__auto___27488 < len__17843__auto___27487)){
args27484.push((arguments[i__17844__auto___27488]));

var G__27489 = (i__17844__auto___27488 + (1));
i__17844__auto___27488 = G__27489;
continue;
} else {
}
break;
}

var G__27486 = args27484.length;
switch (G__27486) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27484.length)].join('')));

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
var len__17843__auto___27495 = arguments.length;
var i__17844__auto___27496 = (0);
while(true){
if((i__17844__auto___27496 < len__17843__auto___27495)){
args__17850__auto__.push((arguments[i__17844__auto___27496]));

var G__27497 = (i__17844__auto___27496 + (1));
i__17844__auto___27496 = G__27497;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((0) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17851__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27492){
var map__27493 = p__27492;
var map__27493__$1 = ((((!((map__27493 == null)))?((((map__27493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27493):map__27493);
var opts = map__27493__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27491){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27491));
});

//# sourceMappingURL=client.js.map