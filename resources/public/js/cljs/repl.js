// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22070_22084 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22071_22085 = null;
var count__22072_22086 = (0);
var i__22073_22087 = (0);
while(true){
if((i__22073_22087 < count__22072_22086)){
var f_22088 = cljs.core._nth.call(null,chunk__22071_22085,i__22073_22087);
cljs.core.println.call(null,"  ",f_22088);

var G__22089 = seq__22070_22084;
var G__22090 = chunk__22071_22085;
var G__22091 = count__22072_22086;
var G__22092 = (i__22073_22087 + (1));
seq__22070_22084 = G__22089;
chunk__22071_22085 = G__22090;
count__22072_22086 = G__22091;
i__22073_22087 = G__22092;
continue;
} else {
var temp__4425__auto___22093 = cljs.core.seq.call(null,seq__22070_22084);
if(temp__4425__auto___22093){
var seq__22070_22094__$1 = temp__4425__auto___22093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22070_22094__$1)){
var c__17996__auto___22095 = cljs.core.chunk_first.call(null,seq__22070_22094__$1);
var G__22096 = cljs.core.chunk_rest.call(null,seq__22070_22094__$1);
var G__22097 = c__17996__auto___22095;
var G__22098 = cljs.core.count.call(null,c__17996__auto___22095);
var G__22099 = (0);
seq__22070_22084 = G__22096;
chunk__22071_22085 = G__22097;
count__22072_22086 = G__22098;
i__22073_22087 = G__22099;
continue;
} else {
var f_22100 = cljs.core.first.call(null,seq__22070_22094__$1);
cljs.core.println.call(null,"  ",f_22100);

var G__22101 = cljs.core.next.call(null,seq__22070_22094__$1);
var G__22102 = null;
var G__22103 = (0);
var G__22104 = (0);
seq__22070_22084 = G__22101;
chunk__22071_22085 = G__22102;
count__22072_22086 = G__22103;
i__22073_22087 = G__22104;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22105 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17193__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17193__auto__)){
return or__17193__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22105);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22105)))?cljs.core.second.call(null,arglists_22105):arglists_22105));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22074 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22075 = null;
var count__22076 = (0);
var i__22077 = (0);
while(true){
if((i__22077 < count__22076)){
var vec__22078 = cljs.core._nth.call(null,chunk__22075,i__22077);
var name = cljs.core.nth.call(null,vec__22078,(0),null);
var map__22079 = cljs.core.nth.call(null,vec__22078,(1),null);
var map__22079__$1 = ((((!((map__22079 == null)))?((((map__22079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22079):map__22079);
var doc = cljs.core.get.call(null,map__22079__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22079__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22106 = seq__22074;
var G__22107 = chunk__22075;
var G__22108 = count__22076;
var G__22109 = (i__22077 + (1));
seq__22074 = G__22106;
chunk__22075 = G__22107;
count__22076 = G__22108;
i__22077 = G__22109;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22074);
if(temp__4425__auto__){
var seq__22074__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22074__$1)){
var c__17996__auto__ = cljs.core.chunk_first.call(null,seq__22074__$1);
var G__22110 = cljs.core.chunk_rest.call(null,seq__22074__$1);
var G__22111 = c__17996__auto__;
var G__22112 = cljs.core.count.call(null,c__17996__auto__);
var G__22113 = (0);
seq__22074 = G__22110;
chunk__22075 = G__22111;
count__22076 = G__22112;
i__22077 = G__22113;
continue;
} else {
var vec__22081 = cljs.core.first.call(null,seq__22074__$1);
var name = cljs.core.nth.call(null,vec__22081,(0),null);
var map__22082 = cljs.core.nth.call(null,vec__22081,(1),null);
var map__22082__$1 = ((((!((map__22082 == null)))?((((map__22082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22082):map__22082);
var doc = cljs.core.get.call(null,map__22082__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22082__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22114 = cljs.core.next.call(null,seq__22074__$1);
var G__22115 = null;
var G__22116 = (0);
var G__22117 = (0);
seq__22074 = G__22114;
chunk__22075 = G__22115;
count__22076 = G__22116;
i__22077 = G__22117;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map