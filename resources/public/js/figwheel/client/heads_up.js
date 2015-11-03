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
var args__17850__auto__ = [];
var len__17843__auto___38980 = arguments.length;
var i__17844__auto___38981 = (0);
while(true){
if((i__17844__auto___38981 < len__17843__auto___38980)){
args__17850__auto__.push((arguments[i__17844__auto___38981]));

var G__38982 = (i__17844__auto___38981 + (1));
i__17844__auto___38981 = G__38982;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((2) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17851__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__38972_38983 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__38973_38984 = null;
var count__38974_38985 = (0);
var i__38975_38986 = (0);
while(true){
if((i__38975_38986 < count__38974_38985)){
var k_38987 = cljs.core._nth.call(null,chunk__38973_38984,i__38975_38986);
e.setAttribute(cljs.core.name.call(null,k_38987),cljs.core.get.call(null,attrs,k_38987));

var G__38988 = seq__38972_38983;
var G__38989 = chunk__38973_38984;
var G__38990 = count__38974_38985;
var G__38991 = (i__38975_38986 + (1));
seq__38972_38983 = G__38988;
chunk__38973_38984 = G__38989;
count__38974_38985 = G__38990;
i__38975_38986 = G__38991;
continue;
} else {
var temp__4425__auto___38992 = cljs.core.seq.call(null,seq__38972_38983);
if(temp__4425__auto___38992){
var seq__38972_38993__$1 = temp__4425__auto___38992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38972_38993__$1)){
var c__17588__auto___38994 = cljs.core.chunk_first.call(null,seq__38972_38993__$1);
var G__38995 = cljs.core.chunk_rest.call(null,seq__38972_38993__$1);
var G__38996 = c__17588__auto___38994;
var G__38997 = cljs.core.count.call(null,c__17588__auto___38994);
var G__38998 = (0);
seq__38972_38983 = G__38995;
chunk__38973_38984 = G__38996;
count__38974_38985 = G__38997;
i__38975_38986 = G__38998;
continue;
} else {
var k_38999 = cljs.core.first.call(null,seq__38972_38993__$1);
e.setAttribute(cljs.core.name.call(null,k_38999),cljs.core.get.call(null,attrs,k_38999));

var G__39000 = cljs.core.next.call(null,seq__38972_38993__$1);
var G__39001 = null;
var G__39002 = (0);
var G__39003 = (0);
seq__38972_38983 = G__39000;
chunk__38973_38984 = G__39001;
count__38974_38985 = G__39002;
i__38975_38986 = G__39003;
continue;
}
} else {
}
}
break;
}

var seq__38976_39004 = cljs.core.seq.call(null,children);
var chunk__38977_39005 = null;
var count__38978_39006 = (0);
var i__38979_39007 = (0);
while(true){
if((i__38979_39007 < count__38978_39006)){
var ch_39008 = cljs.core._nth.call(null,chunk__38977_39005,i__38979_39007);
e.appendChild(ch_39008);

var G__39009 = seq__38976_39004;
var G__39010 = chunk__38977_39005;
var G__39011 = count__38978_39006;
var G__39012 = (i__38979_39007 + (1));
seq__38976_39004 = G__39009;
chunk__38977_39005 = G__39010;
count__38978_39006 = G__39011;
i__38979_39007 = G__39012;
continue;
} else {
var temp__4425__auto___39013 = cljs.core.seq.call(null,seq__38976_39004);
if(temp__4425__auto___39013){
var seq__38976_39014__$1 = temp__4425__auto___39013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38976_39014__$1)){
var c__17588__auto___39015 = cljs.core.chunk_first.call(null,seq__38976_39014__$1);
var G__39016 = cljs.core.chunk_rest.call(null,seq__38976_39014__$1);
var G__39017 = c__17588__auto___39015;
var G__39018 = cljs.core.count.call(null,c__17588__auto___39015);
var G__39019 = (0);
seq__38976_39004 = G__39016;
chunk__38977_39005 = G__39017;
count__38978_39006 = G__39018;
i__38979_39007 = G__39019;
continue;
} else {
var ch_39020 = cljs.core.first.call(null,seq__38976_39014__$1);
e.appendChild(ch_39020);

var G__39021 = cljs.core.next.call(null,seq__38976_39014__$1);
var G__39022 = null;
var G__39023 = (0);
var G__39024 = (0);
seq__38976_39004 = G__39021;
chunk__38977_39005 = G__39022;
count__38978_39006 = G__39023;
i__38979_39007 = G__39024;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq38969){
var G__38970 = cljs.core.first.call(null,seq38969);
var seq38969__$1 = cljs.core.next.call(null,seq38969);
var G__38971 = cljs.core.first.call(null,seq38969__$1);
var seq38969__$2 = cljs.core.next.call(null,seq38969__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__38970,G__38971,seq38969__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17702__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__,hierarchy__17702__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__,hierarchy__17702__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17702__auto__,method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__));
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
var el_39025 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_39025.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_39025.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_39025.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_39025);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__39026,st_map){
var map__39031 = p__39026;
var map__39031__$1 = ((((!((map__39031 == null)))?((((map__39031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39031):map__39031);
var container_el = cljs.core.get.call(null,map__39031__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__39031,map__39031__$1,container_el){
return (function (p__39033){
var vec__39034 = p__39033;
var k = cljs.core.nth.call(null,vec__39034,(0),null);
var v = cljs.core.nth.call(null,vec__39034,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__39031,map__39031__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__39035,dom_str){
var map__39038 = p__39035;
var map__39038__$1 = ((((!((map__39038 == null)))?((((map__39038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39038):map__39038);
var c = map__39038__$1;
var content_area_el = cljs.core.get.call(null,map__39038__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__39040){
var map__39043 = p__39040;
var map__39043__$1 = ((((!((map__39043 == null)))?((((map__39043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39043):map__39043);
var content_area_el = cljs.core.get.call(null,map__39043__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__){
return (function (state_39086){
var state_val_39087 = (state_39086[(1)]);
if((state_val_39087 === (1))){
var inst_39071 = (state_39086[(7)]);
var inst_39071__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39072 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39073 = ["10px","10px","100%","68px","1.0"];
var inst_39074 = cljs.core.PersistentHashMap.fromArrays(inst_39072,inst_39073);
var inst_39075 = cljs.core.merge.call(null,inst_39074,style);
var inst_39076 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39071__$1,inst_39075);
var inst_39077 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39071__$1,msg);
var inst_39078 = cljs.core.async.timeout.call(null,(300));
var state_39086__$1 = (function (){var statearr_39088 = state_39086;
(statearr_39088[(7)] = inst_39071__$1);

(statearr_39088[(8)] = inst_39076);

(statearr_39088[(9)] = inst_39077);

return statearr_39088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39086__$1,(2),inst_39078);
} else {
if((state_val_39087 === (2))){
var inst_39071 = (state_39086[(7)]);
var inst_39080 = (state_39086[(2)]);
var inst_39081 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_39082 = ["auto"];
var inst_39083 = cljs.core.PersistentHashMap.fromArrays(inst_39081,inst_39082);
var inst_39084 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39071,inst_39083);
var state_39086__$1 = (function (){var statearr_39089 = state_39086;
(statearr_39089[(10)] = inst_39080);

return statearr_39089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39086__$1,inst_39084);
} else {
return null;
}
}
});})(c__21381__auto__))
;
return ((function (switch__21316__auto__,c__21381__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto____0 = (function (){
var statearr_39093 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39093[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto__);

(statearr_39093[(1)] = (1));

return statearr_39093;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto____1 = (function (state_39086){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_39086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e39094){if((e39094 instanceof Object)){
var ex__21320__auto__ = e39094;
var statearr_39095_39097 = state_39086;
(statearr_39095_39097[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39098 = state_39086;
state_39086 = G__39098;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto__ = function(state_39086){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto____1.call(this,state_39086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_39096 = f__21382__auto__.call(null);
(statearr_39096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_39096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__))
);

return c__21381__auto__;
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
var vec__39100 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__39100,(0),null);
var ln = cljs.core.nth.call(null,vec__39100,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__39103 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__39103,(0),null);
var file_line = cljs.core.nth.call(null,vec__39103,(1),null);
var file_column = cljs.core.nth.call(null,vec__39103,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__39103,file_name,file_line,file_column){
return (function (p1__39101_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__39101_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__39103,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16785__auto__ = file_line;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var and__16773__auto__ = cause;
if(cljs.core.truth_(and__16773__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16773__auto__;
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
var map__39106 = figwheel.client.heads_up.ensure_container.call(null);
var map__39106__$1 = ((((!((map__39106 == null)))?((((map__39106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39106):map__39106);
var content_area_el = cljs.core.get.call(null,map__39106__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__){
return (function (state_39154){
var state_val_39155 = (state_39154[(1)]);
if((state_val_39155 === (1))){
var inst_39137 = (state_39154[(7)]);
var inst_39137__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39138 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39139 = ["0.0"];
var inst_39140 = cljs.core.PersistentHashMap.fromArrays(inst_39138,inst_39139);
var inst_39141 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39137__$1,inst_39140);
var inst_39142 = cljs.core.async.timeout.call(null,(300));
var state_39154__$1 = (function (){var statearr_39156 = state_39154;
(statearr_39156[(7)] = inst_39137__$1);

(statearr_39156[(8)] = inst_39141);

return statearr_39156;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39154__$1,(2),inst_39142);
} else {
if((state_val_39155 === (2))){
var inst_39137 = (state_39154[(7)]);
var inst_39144 = (state_39154[(2)]);
var inst_39145 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_39146 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_39147 = cljs.core.PersistentHashMap.fromArrays(inst_39145,inst_39146);
var inst_39148 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39137,inst_39147);
var inst_39149 = cljs.core.async.timeout.call(null,(200));
var state_39154__$1 = (function (){var statearr_39157 = state_39154;
(statearr_39157[(9)] = inst_39148);

(statearr_39157[(10)] = inst_39144);

return statearr_39157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39154__$1,(3),inst_39149);
} else {
if((state_val_39155 === (3))){
var inst_39137 = (state_39154[(7)]);
var inst_39151 = (state_39154[(2)]);
var inst_39152 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39137,"");
var state_39154__$1 = (function (){var statearr_39158 = state_39154;
(statearr_39158[(11)] = inst_39151);

return statearr_39158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39154__$1,inst_39152);
} else {
return null;
}
}
}
});})(c__21381__auto__))
;
return ((function (switch__21316__auto__,c__21381__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21317__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21317__auto____0 = (function (){
var statearr_39162 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39162[(0)] = figwheel$client$heads_up$clear_$_state_machine__21317__auto__);

(statearr_39162[(1)] = (1));

return statearr_39162;
});
var figwheel$client$heads_up$clear_$_state_machine__21317__auto____1 = (function (state_39154){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_39154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e39163){if((e39163 instanceof Object)){
var ex__21320__auto__ = e39163;
var statearr_39164_39166 = state_39154;
(statearr_39164_39166[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39167 = state_39154;
state_39154 = G__39167;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21317__auto__ = function(state_39154){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21317__auto____1.call(this,state_39154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21317__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21317__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_39165 = f__21382__auto__.call(null);
(statearr_39165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_39165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__))
);

return c__21381__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__){
return (function (state_39199){
var state_val_39200 = (state_39199[(1)]);
if((state_val_39200 === (1))){
var inst_39189 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_39199__$1 = state_39199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39199__$1,(2),inst_39189);
} else {
if((state_val_39200 === (2))){
var inst_39191 = (state_39199[(2)]);
var inst_39192 = cljs.core.async.timeout.call(null,(400));
var state_39199__$1 = (function (){var statearr_39201 = state_39199;
(statearr_39201[(7)] = inst_39191);

return statearr_39201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39199__$1,(3),inst_39192);
} else {
if((state_val_39200 === (3))){
var inst_39194 = (state_39199[(2)]);
var inst_39195 = figwheel.client.heads_up.clear.call(null);
var state_39199__$1 = (function (){var statearr_39202 = state_39199;
(statearr_39202[(8)] = inst_39194);

return statearr_39202;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39199__$1,(4),inst_39195);
} else {
if((state_val_39200 === (4))){
var inst_39197 = (state_39199[(2)]);
var state_39199__$1 = state_39199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39199__$1,inst_39197);
} else {
return null;
}
}
}
}
});})(c__21381__auto__))
;
return ((function (switch__21316__auto__,c__21381__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto____0 = (function (){
var statearr_39206 = [null,null,null,null,null,null,null,null,null];
(statearr_39206[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto__);

(statearr_39206[(1)] = (1));

return statearr_39206;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto____1 = (function (state_39199){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_39199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e39207){if((e39207 instanceof Object)){
var ex__21320__auto__ = e39207;
var statearr_39208_39210 = state_39199;
(statearr_39208_39210[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39211 = state_39199;
state_39199 = G__39211;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto__ = function(state_39199){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto____1.call(this,state_39199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_39209 = f__21382__auto__.call(null);
(statearr_39209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_39209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__))
);

return c__21381__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map