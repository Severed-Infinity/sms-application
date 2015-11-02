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
var seq__27883_27897 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27884_27898 = null;
var count__27885_27899 = (0);
var i__27886_27900 = (0);
while(true){
if((i__27886_27900 < count__27885_27899)){
var f_27901 = cljs.core._nth.call(null,chunk__27884_27898,i__27886_27900);
cljs.core.println.call(null,"  ",f_27901);

var G__27902 = seq__27883_27897;
var G__27903 = chunk__27884_27898;
var G__27904 = count__27885_27899;
var G__27905 = (i__27886_27900 + (1));
seq__27883_27897 = G__27902;
chunk__27884_27898 = G__27903;
count__27885_27899 = G__27904;
i__27886_27900 = G__27905;
continue;
} else {
var temp__4425__auto___27906 = cljs.core.seq.call(null,seq__27883_27897);
if(temp__4425__auto___27906){
var seq__27883_27907__$1 = temp__4425__auto___27906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27883_27907__$1)){
var c__17588__auto___27908 = cljs.core.chunk_first.call(null,seq__27883_27907__$1);
var G__27909 = cljs.core.chunk_rest.call(null,seq__27883_27907__$1);
var G__27910 = c__17588__auto___27908;
var G__27911 = cljs.core.count.call(null,c__17588__auto___27908);
var G__27912 = (0);
seq__27883_27897 = G__27909;
chunk__27884_27898 = G__27910;
count__27885_27899 = G__27911;
i__27886_27900 = G__27912;
continue;
} else {
var f_27913 = cljs.core.first.call(null,seq__27883_27907__$1);
cljs.core.println.call(null,"  ",f_27913);

var G__27914 = cljs.core.next.call(null,seq__27883_27907__$1);
var G__27915 = null;
var G__27916 = (0);
var G__27917 = (0);
seq__27883_27897 = G__27914;
chunk__27884_27898 = G__27915;
count__27885_27899 = G__27916;
i__27886_27900 = G__27917;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27918 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16785__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27918);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27918)))?cljs.core.second.call(null,arglists_27918):arglists_27918));
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
var seq__27887 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27888 = null;
var count__27889 = (0);
var i__27890 = (0);
while(true){
if((i__27890 < count__27889)){
var vec__27891 = cljs.core._nth.call(null,chunk__27888,i__27890);
var name = cljs.core.nth.call(null,vec__27891,(0),null);
var map__27892 = cljs.core.nth.call(null,vec__27891,(1),null);
var map__27892__$1 = ((((!((map__27892 == null)))?((((map__27892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27892):map__27892);
var doc = cljs.core.get.call(null,map__27892__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27892__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27919 = seq__27887;
var G__27920 = chunk__27888;
var G__27921 = count__27889;
var G__27922 = (i__27890 + (1));
seq__27887 = G__27919;
chunk__27888 = G__27920;
count__27889 = G__27921;
i__27890 = G__27922;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27887);
if(temp__4425__auto__){
var seq__27887__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27887__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__27887__$1);
var G__27923 = cljs.core.chunk_rest.call(null,seq__27887__$1);
var G__27924 = c__17588__auto__;
var G__27925 = cljs.core.count.call(null,c__17588__auto__);
var G__27926 = (0);
seq__27887 = G__27923;
chunk__27888 = G__27924;
count__27889 = G__27925;
i__27890 = G__27926;
continue;
} else {
var vec__27894 = cljs.core.first.call(null,seq__27887__$1);
var name = cljs.core.nth.call(null,vec__27894,(0),null);
var map__27895 = cljs.core.nth.call(null,vec__27894,(1),null);
var map__27895__$1 = ((((!((map__27895 == null)))?((((map__27895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27895):map__27895);
var doc = cljs.core.get.call(null,map__27895__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27895__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27927 = cljs.core.next.call(null,seq__27887__$1);
var G__27928 = null;
var G__27929 = (0);
var G__27930 = (0);
seq__27887 = G__27927;
chunk__27888 = G__27928;
count__27889 = G__27929;
i__27890 = G__27930;
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