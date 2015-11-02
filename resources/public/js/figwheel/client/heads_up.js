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
var len__17843__auto___27635 = arguments.length;
var i__17844__auto___27636 = (0);
while(true){
if((i__17844__auto___27636 < len__17843__auto___27635)){
args__17850__auto__.push((arguments[i__17844__auto___27636]));

var G__27637 = (i__17844__auto___27636 + (1));
i__17844__auto___27636 = G__27637;
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
var seq__27627_27638 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27628_27639 = null;
var count__27629_27640 = (0);
var i__27630_27641 = (0);
while(true){
if((i__27630_27641 < count__27629_27640)){
var k_27642 = cljs.core._nth.call(null,chunk__27628_27639,i__27630_27641);
e.setAttribute(cljs.core.name.call(null,k_27642),cljs.core.get.call(null,attrs,k_27642));

var G__27643 = seq__27627_27638;
var G__27644 = chunk__27628_27639;
var G__27645 = count__27629_27640;
var G__27646 = (i__27630_27641 + (1));
seq__27627_27638 = G__27643;
chunk__27628_27639 = G__27644;
count__27629_27640 = G__27645;
i__27630_27641 = G__27646;
continue;
} else {
var temp__4425__auto___27647 = cljs.core.seq.call(null,seq__27627_27638);
if(temp__4425__auto___27647){
var seq__27627_27648__$1 = temp__4425__auto___27647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27627_27648__$1)){
var c__17588__auto___27649 = cljs.core.chunk_first.call(null,seq__27627_27648__$1);
var G__27650 = cljs.core.chunk_rest.call(null,seq__27627_27648__$1);
var G__27651 = c__17588__auto___27649;
var G__27652 = cljs.core.count.call(null,c__17588__auto___27649);
var G__27653 = (0);
seq__27627_27638 = G__27650;
chunk__27628_27639 = G__27651;
count__27629_27640 = G__27652;
i__27630_27641 = G__27653;
continue;
} else {
var k_27654 = cljs.core.first.call(null,seq__27627_27648__$1);
e.setAttribute(cljs.core.name.call(null,k_27654),cljs.core.get.call(null,attrs,k_27654));

var G__27655 = cljs.core.next.call(null,seq__27627_27648__$1);
var G__27656 = null;
var G__27657 = (0);
var G__27658 = (0);
seq__27627_27638 = G__27655;
chunk__27628_27639 = G__27656;
count__27629_27640 = G__27657;
i__27630_27641 = G__27658;
continue;
}
} else {
}
}
break;
}

var seq__27631_27659 = cljs.core.seq.call(null,children);
var chunk__27632_27660 = null;
var count__27633_27661 = (0);
var i__27634_27662 = (0);
while(true){
if((i__27634_27662 < count__27633_27661)){
var ch_27663 = cljs.core._nth.call(null,chunk__27632_27660,i__27634_27662);
e.appendChild(ch_27663);

var G__27664 = seq__27631_27659;
var G__27665 = chunk__27632_27660;
var G__27666 = count__27633_27661;
var G__27667 = (i__27634_27662 + (1));
seq__27631_27659 = G__27664;
chunk__27632_27660 = G__27665;
count__27633_27661 = G__27666;
i__27634_27662 = G__27667;
continue;
} else {
var temp__4425__auto___27668 = cljs.core.seq.call(null,seq__27631_27659);
if(temp__4425__auto___27668){
var seq__27631_27669__$1 = temp__4425__auto___27668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27631_27669__$1)){
var c__17588__auto___27670 = cljs.core.chunk_first.call(null,seq__27631_27669__$1);
var G__27671 = cljs.core.chunk_rest.call(null,seq__27631_27669__$1);
var G__27672 = c__17588__auto___27670;
var G__27673 = cljs.core.count.call(null,c__17588__auto___27670);
var G__27674 = (0);
seq__27631_27659 = G__27671;
chunk__27632_27660 = G__27672;
count__27633_27661 = G__27673;
i__27634_27662 = G__27674;
continue;
} else {
var ch_27675 = cljs.core.first.call(null,seq__27631_27669__$1);
e.appendChild(ch_27675);

var G__27676 = cljs.core.next.call(null,seq__27631_27669__$1);
var G__27677 = null;
var G__27678 = (0);
var G__27679 = (0);
seq__27631_27659 = G__27676;
chunk__27632_27660 = G__27677;
count__27633_27661 = G__27678;
i__27634_27662 = G__27679;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27624){
var G__27625 = cljs.core.first.call(null,seq27624);
var seq27624__$1 = cljs.core.next.call(null,seq27624);
var G__27626 = cljs.core.first.call(null,seq27624__$1);
var seq27624__$2 = cljs.core.next.call(null,seq27624__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27625,G__27626,seq27624__$2);
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
var el_27680 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27680.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27680.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27680.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27680);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27681,st_map){
var map__27686 = p__27681;
var map__27686__$1 = ((((!((map__27686 == null)))?((((map__27686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27686):map__27686);
var container_el = cljs.core.get.call(null,map__27686__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27686,map__27686__$1,container_el){
return (function (p__27688){
var vec__27689 = p__27688;
var k = cljs.core.nth.call(null,vec__27689,(0),null);
var v = cljs.core.nth.call(null,vec__27689,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27686,map__27686__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27690,dom_str){
var map__27693 = p__27690;
var map__27693__$1 = ((((!((map__27693 == null)))?((((map__27693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27693):map__27693);
var c = map__27693__$1;
var content_area_el = cljs.core.get.call(null,map__27693__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27695){
var map__27698 = p__27695;
var map__27698__$1 = ((((!((map__27698 == null)))?((((map__27698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27698):map__27698);
var content_area_el = cljs.core.get.call(null,map__27698__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_27741){
var state_val_27742 = (state_27741[(1)]);
if((state_val_27742 === (1))){
var inst_27726 = (state_27741[(7)]);
var inst_27726__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27727 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27728 = ["10px","10px","100%","68px","1.0"];
var inst_27729 = cljs.core.PersistentHashMap.fromArrays(inst_27727,inst_27728);
var inst_27730 = cljs.core.merge.call(null,inst_27729,style);
var inst_27731 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27726__$1,inst_27730);
var inst_27732 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27726__$1,msg);
var inst_27733 = cljs.core.async.timeout.call(null,(300));
var state_27741__$1 = (function (){var statearr_27743 = state_27741;
(statearr_27743[(7)] = inst_27726__$1);

(statearr_27743[(8)] = inst_27731);

(statearr_27743[(9)] = inst_27732);

return statearr_27743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27741__$1,(2),inst_27733);
} else {
if((state_val_27742 === (2))){
var inst_27726 = (state_27741[(7)]);
var inst_27735 = (state_27741[(2)]);
var inst_27736 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27737 = ["auto"];
var inst_27738 = cljs.core.PersistentHashMap.fromArrays(inst_27736,inst_27737);
var inst_27739 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27726,inst_27738);
var state_27741__$1 = (function (){var statearr_27744 = state_27741;
(statearr_27744[(10)] = inst_27735);

return statearr_27744;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27741__$1,inst_27739);
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
var statearr_27748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27748[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto__);

(statearr_27748[(1)] = (1));

return statearr_27748;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto____1 = (function (state_27741){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27749){if((e27749 instanceof Object)){
var ex__21320__auto__ = e27749;
var statearr_27750_27752 = state_27741;
(statearr_27750_27752[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27753 = state_27741;
state_27741 = G__27753;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto__ = function(state_27741){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto____1.call(this,state_27741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_27751 = f__21382__auto__.call(null);
(statearr_27751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_27751;
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
var vec__27755 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__27755,(0),null);
var ln = cljs.core.nth.call(null,vec__27755,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27758 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27758,(0),null);
var file_line = cljs.core.nth.call(null,vec__27758,(1),null);
var file_column = cljs.core.nth.call(null,vec__27758,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27758,file_name,file_line,file_column){
return (function (p1__27756_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27756_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27758,file_name,file_line,file_column))
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
var map__27761 = figwheel.client.heads_up.ensure_container.call(null);
var map__27761__$1 = ((((!((map__27761 == null)))?((((map__27761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27761):map__27761);
var content_area_el = cljs.core.get.call(null,map__27761__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__){
return (function (state_27809){
var state_val_27810 = (state_27809[(1)]);
if((state_val_27810 === (1))){
var inst_27792 = (state_27809[(7)]);
var inst_27792__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27793 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27794 = ["0.0"];
var inst_27795 = cljs.core.PersistentHashMap.fromArrays(inst_27793,inst_27794);
var inst_27796 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27792__$1,inst_27795);
var inst_27797 = cljs.core.async.timeout.call(null,(300));
var state_27809__$1 = (function (){var statearr_27811 = state_27809;
(statearr_27811[(7)] = inst_27792__$1);

(statearr_27811[(8)] = inst_27796);

return statearr_27811;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27809__$1,(2),inst_27797);
} else {
if((state_val_27810 === (2))){
var inst_27792 = (state_27809[(7)]);
var inst_27799 = (state_27809[(2)]);
var inst_27800 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27801 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27802 = cljs.core.PersistentHashMap.fromArrays(inst_27800,inst_27801);
var inst_27803 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27792,inst_27802);
var inst_27804 = cljs.core.async.timeout.call(null,(200));
var state_27809__$1 = (function (){var statearr_27812 = state_27809;
(statearr_27812[(9)] = inst_27803);

(statearr_27812[(10)] = inst_27799);

return statearr_27812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27809__$1,(3),inst_27804);
} else {
if((state_val_27810 === (3))){
var inst_27792 = (state_27809[(7)]);
var inst_27806 = (state_27809[(2)]);
var inst_27807 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27792,"");
var state_27809__$1 = (function (){var statearr_27813 = state_27809;
(statearr_27813[(11)] = inst_27806);

return statearr_27813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27809__$1,inst_27807);
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
var statearr_27817 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27817[(0)] = figwheel$client$heads_up$clear_$_state_machine__21317__auto__);

(statearr_27817[(1)] = (1));

return statearr_27817;
});
var figwheel$client$heads_up$clear_$_state_machine__21317__auto____1 = (function (state_27809){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27818){if((e27818 instanceof Object)){
var ex__21320__auto__ = e27818;
var statearr_27819_27821 = state_27809;
(statearr_27819_27821[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27822 = state_27809;
state_27809 = G__27822;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21317__auto__ = function(state_27809){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21317__auto____1.call(this,state_27809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21317__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21317__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_27820 = f__21382__auto__.call(null);
(statearr_27820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_27820;
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
return (function (state_27854){
var state_val_27855 = (state_27854[(1)]);
if((state_val_27855 === (1))){
var inst_27844 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27854__$1 = state_27854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27854__$1,(2),inst_27844);
} else {
if((state_val_27855 === (2))){
var inst_27846 = (state_27854[(2)]);
var inst_27847 = cljs.core.async.timeout.call(null,(400));
var state_27854__$1 = (function (){var statearr_27856 = state_27854;
(statearr_27856[(7)] = inst_27846);

return statearr_27856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27854__$1,(3),inst_27847);
} else {
if((state_val_27855 === (3))){
var inst_27849 = (state_27854[(2)]);
var inst_27850 = figwheel.client.heads_up.clear.call(null);
var state_27854__$1 = (function (){var statearr_27857 = state_27854;
(statearr_27857[(8)] = inst_27849);

return statearr_27857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27854__$1,(4),inst_27850);
} else {
if((state_val_27855 === (4))){
var inst_27852 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27854__$1,inst_27852);
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
var statearr_27861 = [null,null,null,null,null,null,null,null,null];
(statearr_27861[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto__);

(statearr_27861[(1)] = (1));

return statearr_27861;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto____1 = (function (state_27854){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27862){if((e27862 instanceof Object)){
var ex__21320__auto__ = e27862;
var statearr_27863_27865 = state_27854;
(statearr_27863_27865[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27866 = state_27854;
state_27854 = G__27866;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto__ = function(state_27854){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto____1.call(this,state_27854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_27864 = f__21382__auto__.call(null);
(statearr_27864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_27864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__))
);

return c__21381__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map