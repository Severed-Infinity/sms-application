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
var seq__30285_30299 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30286_30300 = null;
var count__30287_30301 = (0);
var i__30288_30302 = (0);
while(true){
if((i__30288_30302 < count__30287_30301)){
var f_30303 = cljs.core._nth.call(null,chunk__30286_30300,i__30288_30302);
cljs.core.println.call(null,"  ",f_30303);

var G__30304 = seq__30285_30299;
var G__30305 = chunk__30286_30300;
var G__30306 = count__30287_30301;
var G__30307 = (i__30288_30302 + (1));
seq__30285_30299 = G__30304;
chunk__30286_30300 = G__30305;
count__30287_30301 = G__30306;
i__30288_30302 = G__30307;
continue;
} else {
var temp__4425__auto___30308 = cljs.core.seq.call(null,seq__30285_30299);
if(temp__4425__auto___30308){
var seq__30285_30309__$1 = temp__4425__auto___30308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30285_30309__$1)){
var c__17993__auto___30310 = cljs.core.chunk_first.call(null,seq__30285_30309__$1);
var G__30311 = cljs.core.chunk_rest.call(null,seq__30285_30309__$1);
var G__30312 = c__17993__auto___30310;
var G__30313 = cljs.core.count.call(null,c__17993__auto___30310);
var G__30314 = (0);
seq__30285_30299 = G__30311;
chunk__30286_30300 = G__30312;
count__30287_30301 = G__30313;
i__30288_30302 = G__30314;
continue;
} else {
var f_30315 = cljs.core.first.call(null,seq__30285_30309__$1);
cljs.core.println.call(null,"  ",f_30315);

var G__30316 = cljs.core.next.call(null,seq__30285_30309__$1);
var G__30317 = null;
var G__30318 = (0);
var G__30319 = (0);
seq__30285_30299 = G__30316;
chunk__30286_30300 = G__30317;
count__30287_30301 = G__30318;
i__30288_30302 = G__30319;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30320 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17190__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17190__auto__)){
return or__17190__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30320);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30320)))?cljs.core.second.call(null,arglists_30320):arglists_30320));
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
var seq__30289 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30290 = null;
var count__30291 = (0);
var i__30292 = (0);
while(true){
if((i__30292 < count__30291)){
var vec__30293 = cljs.core._nth.call(null,chunk__30290,i__30292);
var name = cljs.core.nth.call(null,vec__30293,(0),null);
var map__30294 = cljs.core.nth.call(null,vec__30293,(1),null);
var map__30294__$1 = ((((!((map__30294 == null)))?((((map__30294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30294):map__30294);
var doc = cljs.core.get.call(null,map__30294__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30294__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30321 = seq__30289;
var G__30322 = chunk__30290;
var G__30323 = count__30291;
var G__30324 = (i__30292 + (1));
seq__30289 = G__30321;
chunk__30290 = G__30322;
count__30291 = G__30323;
i__30292 = G__30324;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30289);
if(temp__4425__auto__){
var seq__30289__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30289__$1)){
var c__17993__auto__ = cljs.core.chunk_first.call(null,seq__30289__$1);
var G__30325 = cljs.core.chunk_rest.call(null,seq__30289__$1);
var G__30326 = c__17993__auto__;
var G__30327 = cljs.core.count.call(null,c__17993__auto__);
var G__30328 = (0);
seq__30289 = G__30325;
chunk__30290 = G__30326;
count__30291 = G__30327;
i__30292 = G__30328;
continue;
} else {
var vec__30296 = cljs.core.first.call(null,seq__30289__$1);
var name = cljs.core.nth.call(null,vec__30296,(0),null);
var map__30297 = cljs.core.nth.call(null,vec__30296,(1),null);
var map__30297__$1 = ((((!((map__30297 == null)))?((((map__30297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30297):map__30297);
var doc = cljs.core.get.call(null,map__30297__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30297__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30329 = cljs.core.next.call(null,seq__30289__$1);
var G__30330 = null;
var G__30331 = (0);
var G__30332 = (0);
seq__30289 = G__30329;
chunk__30290 = G__30330;
count__30291 = G__30331;
i__30292 = G__30332;
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