// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__18255__auto__ = [];
var len__18248__auto___27947 = arguments.length;
var i__18249__auto___27948 = (0);
while(true){
if((i__18249__auto___27948 < len__18248__auto___27947)){
args__18255__auto__.push((arguments[i__18249__auto___27948]));

var G__27949 = (i__18249__auto___27948 + (1));
i__18249__auto___27948 = G__27949;
continue;
} else {
}
break;
}

var argseq__18256__auto__ = ((((2) < args__18255__auto__.length))?(new cljs.core.IndexedSeq(args__18255__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18256__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27939_27950 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27940_27951 = null;
var count__27941_27952 = (0);
var i__27942_27953 = (0);
while(true){
if((i__27942_27953 < count__27941_27952)){
var k_27954 = cljs.core._nth.call(null,chunk__27940_27951,i__27942_27953);
e.setAttribute(cljs.core.name.call(null,k_27954),cljs.core.get.call(null,attrs,k_27954));

var G__27955 = seq__27939_27950;
var G__27956 = chunk__27940_27951;
var G__27957 = count__27941_27952;
var G__27958 = (i__27942_27953 + (1));
seq__27939_27950 = G__27955;
chunk__27940_27951 = G__27956;
count__27941_27952 = G__27957;
i__27942_27953 = G__27958;
continue;
} else {
var temp__4425__auto___27959 = cljs.core.seq.call(null,seq__27939_27950);
if(temp__4425__auto___27959){
var seq__27939_27960__$1 = temp__4425__auto___27959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27939_27960__$1)){
var c__17993__auto___27961 = cljs.core.chunk_first.call(null,seq__27939_27960__$1);
var G__27962 = cljs.core.chunk_rest.call(null,seq__27939_27960__$1);
var G__27963 = c__17993__auto___27961;
var G__27964 = cljs.core.count.call(null,c__17993__auto___27961);
var G__27965 = (0);
seq__27939_27950 = G__27962;
chunk__27940_27951 = G__27963;
count__27941_27952 = G__27964;
i__27942_27953 = G__27965;
continue;
} else {
var k_27966 = cljs.core.first.call(null,seq__27939_27960__$1);
e.setAttribute(cljs.core.name.call(null,k_27966),cljs.core.get.call(null,attrs,k_27966));

var G__27967 = cljs.core.next.call(null,seq__27939_27960__$1);
var G__27968 = null;
var G__27969 = (0);
var G__27970 = (0);
seq__27939_27950 = G__27967;
chunk__27940_27951 = G__27968;
count__27941_27952 = G__27969;
i__27942_27953 = G__27970;
continue;
}
} else {
}
}
break;
}

var seq__27943_27971 = cljs.core.seq.call(null,children);
var chunk__27944_27972 = null;
var count__27945_27973 = (0);
var i__27946_27974 = (0);
while(true){
if((i__27946_27974 < count__27945_27973)){
var ch_27975 = cljs.core._nth.call(null,chunk__27944_27972,i__27946_27974);
e.appendChild(ch_27975);

var G__27976 = seq__27943_27971;
var G__27977 = chunk__27944_27972;
var G__27978 = count__27945_27973;
var G__27979 = (i__27946_27974 + (1));
seq__27943_27971 = G__27976;
chunk__27944_27972 = G__27977;
count__27945_27973 = G__27978;
i__27946_27974 = G__27979;
continue;
} else {
var temp__4425__auto___27980 = cljs.core.seq.call(null,seq__27943_27971);
if(temp__4425__auto___27980){
var seq__27943_27981__$1 = temp__4425__auto___27980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27943_27981__$1)){
var c__17993__auto___27982 = cljs.core.chunk_first.call(null,seq__27943_27981__$1);
var G__27983 = cljs.core.chunk_rest.call(null,seq__27943_27981__$1);
var G__27984 = c__17993__auto___27982;
var G__27985 = cljs.core.count.call(null,c__17993__auto___27982);
var G__27986 = (0);
seq__27943_27971 = G__27983;
chunk__27944_27972 = G__27984;
count__27945_27973 = G__27985;
i__27946_27974 = G__27986;
continue;
} else {
var ch_27987 = cljs.core.first.call(null,seq__27943_27981__$1);
e.appendChild(ch_27987);

var G__27988 = cljs.core.next.call(null,seq__27943_27981__$1);
var G__27989 = null;
var G__27990 = (0);
var G__27991 = (0);
seq__27943_27971 = G__27988;
chunk__27944_27972 = G__27989;
count__27945_27973 = G__27990;
i__27946_27974 = G__27991;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27936){
var G__27937 = cljs.core.first.call(null,seq27936);
var seq27936__$1 = cljs.core.next.call(null,seq27936);
var G__27938 = cljs.core.first.call(null,seq27936__$1);
var seq27936__$2 = cljs.core.next.call(null,seq27936__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27937,G__27938,seq27936__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18103__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18104__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18105__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18106__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18107__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18103__auto__,prefer_table__18104__auto__,method_cache__18105__auto__,cached_hierarchy__18106__auto__,hierarchy__18107__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18103__auto__,prefer_table__18104__auto__,method_cache__18105__auto__,cached_hierarchy__18106__auto__,hierarchy__18107__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18107__auto__,method_table__18103__auto__,prefer_table__18104__auto__,method_cache__18105__auto__,cached_hierarchy__18106__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27992 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27992.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27992.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27992.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27992);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27993,st_map){
var map__27998 = p__27993;
var map__27998__$1 = ((((!((map__27998 == null)))?((((map__27998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27998):map__27998);
var container_el = cljs.core.get.call(null,map__27998__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27998,map__27998__$1,container_el){
return (function (p__28000){
var vec__28001 = p__28000;
var k = cljs.core.nth.call(null,vec__28001,(0),null);
var v = cljs.core.nth.call(null,vec__28001,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27998,map__27998__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28002,dom_str){
var map__28005 = p__28002;
var map__28005__$1 = ((((!((map__28005 == null)))?((((map__28005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28005):map__28005);
var c = map__28005__$1;
var content_area_el = cljs.core.get.call(null,map__28005__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28007){
var map__28010 = p__28007;
var map__28010__$1 = ((((!((map__28010 == null)))?((((map__28010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28010):map__28010);
var content_area_el = cljs.core.get.call(null,map__28010__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto__){
return (function (state_28053){
var state_val_28054 = (state_28053[(1)]);
if((state_val_28054 === (1))){
var inst_28038 = (state_28053[(7)]);
var inst_28038__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28039 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28040 = ["10px","10px","100%","68px","1.0"];
var inst_28041 = cljs.core.PersistentHashMap.fromArrays(inst_28039,inst_28040);
var inst_28042 = cljs.core.merge.call(null,inst_28041,style);
var inst_28043 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28038__$1,inst_28042);
var inst_28044 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28038__$1,msg);
var inst_28045 = cljs.core.async.timeout.call(null,(300));
var state_28053__$1 = (function (){var statearr_28055 = state_28053;
(statearr_28055[(7)] = inst_28038__$1);

(statearr_28055[(8)] = inst_28043);

(statearr_28055[(9)] = inst_28044);

return statearr_28055;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28053__$1,(2),inst_28045);
} else {
if((state_val_28054 === (2))){
var inst_28038 = (state_28053[(7)]);
var inst_28047 = (state_28053[(2)]);
var inst_28048 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28049 = ["auto"];
var inst_28050 = cljs.core.PersistentHashMap.fromArrays(inst_28048,inst_28049);
var inst_28051 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28038,inst_28050);
var state_28053__$1 = (function (){var statearr_28056 = state_28053;
(statearr_28056[(10)] = inst_28047);

return statearr_28056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28053__$1,inst_28051);
} else {
return null;
}
}
});})(c__21787__auto__))
;
return ((function (switch__21722__auto__,c__21787__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21723__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21723__auto____0 = (function (){
var statearr_28060 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28060[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21723__auto__);

(statearr_28060[(1)] = (1));

return statearr_28060;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21723__auto____1 = (function (state_28053){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_28053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e28061){if((e28061 instanceof Object)){
var ex__21726__auto__ = e28061;
var statearr_28062_28064 = state_28053;
(statearr_28062_28064[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28065 = state_28053;
state_28053 = G__28065;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21723__auto__ = function(state_28053){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21723__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21723__auto____1.call(this,state_28053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21723__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21723__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_28063 = f__21788__auto__.call(null);
(statearr_28063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto__);

return statearr_28063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto__))
);

return c__21787__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28067 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28067,(0),null);
var ln = cljs.core.nth.call(null,vec__28067,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28070 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28070,(0),null);
var file_line = cljs.core.nth.call(null,vec__28070,(1),null);
var file_column = cljs.core.nth.call(null,vec__28070,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28070,file_name,file_line,file_column){
return (function (p1__28068_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28068_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28070,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__17190__auto__ = file_line;
if(cljs.core.truth_(or__17190__auto__)){
return or__17190__auto__;
} else {
var and__17178__auto__ = cause;
if(cljs.core.truth_(and__17178__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__17178__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28073 = figwheel.client.heads_up.ensure_container.call(null);
var map__28073__$1 = ((((!((map__28073 == null)))?((((map__28073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28073):map__28073);
var content_area_el = cljs.core.get.call(null,map__28073__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto__){
return (function (state_28121){
var state_val_28122 = (state_28121[(1)]);
if((state_val_28122 === (1))){
var inst_28104 = (state_28121[(7)]);
var inst_28104__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28105 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28106 = ["0.0"];
var inst_28107 = cljs.core.PersistentHashMap.fromArrays(inst_28105,inst_28106);
var inst_28108 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28104__$1,inst_28107);
var inst_28109 = cljs.core.async.timeout.call(null,(300));
var state_28121__$1 = (function (){var statearr_28123 = state_28121;
(statearr_28123[(7)] = inst_28104__$1);

(statearr_28123[(8)] = inst_28108);

return statearr_28123;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28121__$1,(2),inst_28109);
} else {
if((state_val_28122 === (2))){
var inst_28104 = (state_28121[(7)]);
var inst_28111 = (state_28121[(2)]);
var inst_28112 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28113 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28114 = cljs.core.PersistentHashMap.fromArrays(inst_28112,inst_28113);
var inst_28115 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28104,inst_28114);
var inst_28116 = cljs.core.async.timeout.call(null,(200));
var state_28121__$1 = (function (){var statearr_28124 = state_28121;
(statearr_28124[(9)] = inst_28111);

(statearr_28124[(10)] = inst_28115);

return statearr_28124;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28121__$1,(3),inst_28116);
} else {
if((state_val_28122 === (3))){
var inst_28104 = (state_28121[(7)]);
var inst_28118 = (state_28121[(2)]);
var inst_28119 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28104,"");
var state_28121__$1 = (function (){var statearr_28125 = state_28121;
(statearr_28125[(11)] = inst_28118);

return statearr_28125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28121__$1,inst_28119);
} else {
return null;
}
}
}
});})(c__21787__auto__))
;
return ((function (switch__21722__auto__,c__21787__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21723__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21723__auto____0 = (function (){
var statearr_28129 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28129[(0)] = figwheel$client$heads_up$clear_$_state_machine__21723__auto__);

(statearr_28129[(1)] = (1));

return statearr_28129;
});
var figwheel$client$heads_up$clear_$_state_machine__21723__auto____1 = (function (state_28121){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_28121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e28130){if((e28130 instanceof Object)){
var ex__21726__auto__ = e28130;
var statearr_28131_28133 = state_28121;
(statearr_28131_28133[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28134 = state_28121;
state_28121 = G__28134;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21723__auto__ = function(state_28121){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21723__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21723__auto____1.call(this,state_28121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21723__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21723__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_28132 = f__21788__auto__.call(null);
(statearr_28132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto__);

return statearr_28132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto__))
);

return c__21787__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto__){
return (function (state_28166){
var state_val_28167 = (state_28166[(1)]);
if((state_val_28167 === (1))){
var inst_28156 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28166__$1 = state_28166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28166__$1,(2),inst_28156);
} else {
if((state_val_28167 === (2))){
var inst_28158 = (state_28166[(2)]);
var inst_28159 = cljs.core.async.timeout.call(null,(400));
var state_28166__$1 = (function (){var statearr_28168 = state_28166;
(statearr_28168[(7)] = inst_28158);

return statearr_28168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28166__$1,(3),inst_28159);
} else {
if((state_val_28167 === (3))){
var inst_28161 = (state_28166[(2)]);
var inst_28162 = figwheel.client.heads_up.clear.call(null);
var state_28166__$1 = (function (){var statearr_28169 = state_28166;
(statearr_28169[(8)] = inst_28161);

return statearr_28169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28166__$1,(4),inst_28162);
} else {
if((state_val_28167 === (4))){
var inst_28164 = (state_28166[(2)]);
var state_28166__$1 = state_28166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28166__$1,inst_28164);
} else {
return null;
}
}
}
}
});})(c__21787__auto__))
;
return ((function (switch__21722__auto__,c__21787__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21723__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21723__auto____0 = (function (){
var statearr_28173 = [null,null,null,null,null,null,null,null,null];
(statearr_28173[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21723__auto__);

(statearr_28173[(1)] = (1));

return statearr_28173;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21723__auto____1 = (function (state_28166){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_28166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e28174){if((e28174 instanceof Object)){
var ex__21726__auto__ = e28174;
var statearr_28175_28177 = state_28166;
(statearr_28175_28177[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28178 = state_28166;
state_28166 = G__28178;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21723__auto__ = function(state_28166){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21723__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21723__auto____1.call(this,state_28166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21723__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21723__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_28176 = f__21788__auto__.call(null);
(statearr_28176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto__);

return statearr_28176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto__))
);

return c__21787__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map