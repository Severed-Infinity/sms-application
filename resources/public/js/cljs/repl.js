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
var seq__39228_39242 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39229_39243 = null;
var count__39230_39244 = (0);
var i__39231_39245 = (0);
while(true){
if((i__39231_39245 < count__39230_39244)){
var f_39246 = cljs.core._nth.call(null,chunk__39229_39243,i__39231_39245);
cljs.core.println.call(null,"  ",f_39246);

var G__39247 = seq__39228_39242;
var G__39248 = chunk__39229_39243;
var G__39249 = count__39230_39244;
var G__39250 = (i__39231_39245 + (1));
seq__39228_39242 = G__39247;
chunk__39229_39243 = G__39248;
count__39230_39244 = G__39249;
i__39231_39245 = G__39250;
continue;
} else {
var temp__4425__auto___39251 = cljs.core.seq.call(null,seq__39228_39242);
if(temp__4425__auto___39251){
var seq__39228_39252__$1 = temp__4425__auto___39251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39228_39252__$1)){
var c__17588__auto___39253 = cljs.core.chunk_first.call(null,seq__39228_39252__$1);
var G__39254 = cljs.core.chunk_rest.call(null,seq__39228_39252__$1);
var G__39255 = c__17588__auto___39253;
var G__39256 = cljs.core.count.call(null,c__17588__auto___39253);
var G__39257 = (0);
seq__39228_39242 = G__39254;
chunk__39229_39243 = G__39255;
count__39230_39244 = G__39256;
i__39231_39245 = G__39257;
continue;
} else {
var f_39258 = cljs.core.first.call(null,seq__39228_39252__$1);
cljs.core.println.call(null,"  ",f_39258);

var G__39259 = cljs.core.next.call(null,seq__39228_39252__$1);
var G__39260 = null;
var G__39261 = (0);
var G__39262 = (0);
seq__39228_39242 = G__39259;
chunk__39229_39243 = G__39260;
count__39230_39244 = G__39261;
i__39231_39245 = G__39262;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39263 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16785__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39263);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39263)))?cljs.core.second.call(null,arglists_39263):arglists_39263));
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
var seq__39232 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39233 = null;
var count__39234 = (0);
var i__39235 = (0);
while(true){
if((i__39235 < count__39234)){
var vec__39236 = cljs.core._nth.call(null,chunk__39233,i__39235);
var name = cljs.core.nth.call(null,vec__39236,(0),null);
var map__39237 = cljs.core.nth.call(null,vec__39236,(1),null);
var map__39237__$1 = ((((!((map__39237 == null)))?((((map__39237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39237):map__39237);
var doc = cljs.core.get.call(null,map__39237__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39237__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39264 = seq__39232;
var G__39265 = chunk__39233;
var G__39266 = count__39234;
var G__39267 = (i__39235 + (1));
seq__39232 = G__39264;
chunk__39233 = G__39265;
count__39234 = G__39266;
i__39235 = G__39267;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39232);
if(temp__4425__auto__){
var seq__39232__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39232__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__39232__$1);
var G__39268 = cljs.core.chunk_rest.call(null,seq__39232__$1);
var G__39269 = c__17588__auto__;
var G__39270 = cljs.core.count.call(null,c__17588__auto__);
var G__39271 = (0);
seq__39232 = G__39268;
chunk__39233 = G__39269;
count__39234 = G__39270;
i__39235 = G__39271;
continue;
} else {
var vec__39239 = cljs.core.first.call(null,seq__39232__$1);
var name = cljs.core.nth.call(null,vec__39239,(0),null);
var map__39240 = cljs.core.nth.call(null,vec__39239,(1),null);
var map__39240__$1 = ((((!((map__39240 == null)))?((((map__39240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39240):map__39240);
var doc = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39272 = cljs.core.next.call(null,seq__39232__$1);
var G__39273 = null;
var G__39274 = (0);
var G__39275 = (0);
seq__39232 = G__39272;
chunk__39233 = G__39273;
count__39234 = G__39274;
i__39235 = G__39275;
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