// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16785__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16785__auto__){
return or__16785__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16785__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39280_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39280_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__39285 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39286 = null;
var count__39287 = (0);
var i__39288 = (0);
while(true){
if((i__39288 < count__39287)){
var n = cljs.core._nth.call(null,chunk__39286,i__39288);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39289 = seq__39285;
var G__39290 = chunk__39286;
var G__39291 = count__39287;
var G__39292 = (i__39288 + (1));
seq__39285 = G__39289;
chunk__39286 = G__39290;
count__39287 = G__39291;
i__39288 = G__39292;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39285);
if(temp__4425__auto__){
var seq__39285__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39285__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__39285__$1);
var G__39293 = cljs.core.chunk_rest.call(null,seq__39285__$1);
var G__39294 = c__17588__auto__;
var G__39295 = cljs.core.count.call(null,c__17588__auto__);
var G__39296 = (0);
seq__39285 = G__39293;
chunk__39286 = G__39294;
count__39287 = G__39295;
i__39288 = G__39296;
continue;
} else {
var n = cljs.core.first.call(null,seq__39285__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39297 = cljs.core.next.call(null,seq__39285__$1);
var G__39298 = null;
var G__39299 = (0);
var G__39300 = (0);
seq__39285 = G__39297;
chunk__39286 = G__39298;
count__39287 = G__39299;
i__39288 = G__39300;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__39339_39346 = cljs.core.seq.call(null,deps);
var chunk__39340_39347 = null;
var count__39341_39348 = (0);
var i__39342_39349 = (0);
while(true){
if((i__39342_39349 < count__39341_39348)){
var dep_39350 = cljs.core._nth.call(null,chunk__39340_39347,i__39342_39349);
topo_sort_helper_STAR_.call(null,dep_39350,(depth + (1)),state);

var G__39351 = seq__39339_39346;
var G__39352 = chunk__39340_39347;
var G__39353 = count__39341_39348;
var G__39354 = (i__39342_39349 + (1));
seq__39339_39346 = G__39351;
chunk__39340_39347 = G__39352;
count__39341_39348 = G__39353;
i__39342_39349 = G__39354;
continue;
} else {
var temp__4425__auto___39355 = cljs.core.seq.call(null,seq__39339_39346);
if(temp__4425__auto___39355){
var seq__39339_39356__$1 = temp__4425__auto___39355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39339_39356__$1)){
var c__17588__auto___39357 = cljs.core.chunk_first.call(null,seq__39339_39356__$1);
var G__39358 = cljs.core.chunk_rest.call(null,seq__39339_39356__$1);
var G__39359 = c__17588__auto___39357;
var G__39360 = cljs.core.count.call(null,c__17588__auto___39357);
var G__39361 = (0);
seq__39339_39346 = G__39358;
chunk__39340_39347 = G__39359;
count__39341_39348 = G__39360;
i__39342_39349 = G__39361;
continue;
} else {
var dep_39362 = cljs.core.first.call(null,seq__39339_39356__$1);
topo_sort_helper_STAR_.call(null,dep_39362,(depth + (1)),state);

var G__39363 = cljs.core.next.call(null,seq__39339_39356__$1);
var G__39364 = null;
var G__39365 = (0);
var G__39366 = (0);
seq__39339_39346 = G__39363;
chunk__39340_39347 = G__39364;
count__39341_39348 = G__39365;
i__39342_39349 = G__39366;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39343){
var vec__39345 = p__39343;
var x = cljs.core.nth.call(null,vec__39345,(0),null);
var xs = cljs.core.nthnext.call(null,vec__39345,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39345,x,xs,get_deps__$1){
return (function (p1__39301_SHARP_){
return clojure.set.difference.call(null,p1__39301_SHARP_,x);
});})(vec__39345,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39379 = cljs.core.seq.call(null,provides);
var chunk__39380 = null;
var count__39381 = (0);
var i__39382 = (0);
while(true){
if((i__39382 < count__39381)){
var prov = cljs.core._nth.call(null,chunk__39380,i__39382);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39383_39391 = cljs.core.seq.call(null,requires);
var chunk__39384_39392 = null;
var count__39385_39393 = (0);
var i__39386_39394 = (0);
while(true){
if((i__39386_39394 < count__39385_39393)){
var req_39395 = cljs.core._nth.call(null,chunk__39384_39392,i__39386_39394);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39395,prov);

var G__39396 = seq__39383_39391;
var G__39397 = chunk__39384_39392;
var G__39398 = count__39385_39393;
var G__39399 = (i__39386_39394 + (1));
seq__39383_39391 = G__39396;
chunk__39384_39392 = G__39397;
count__39385_39393 = G__39398;
i__39386_39394 = G__39399;
continue;
} else {
var temp__4425__auto___39400 = cljs.core.seq.call(null,seq__39383_39391);
if(temp__4425__auto___39400){
var seq__39383_39401__$1 = temp__4425__auto___39400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39383_39401__$1)){
var c__17588__auto___39402 = cljs.core.chunk_first.call(null,seq__39383_39401__$1);
var G__39403 = cljs.core.chunk_rest.call(null,seq__39383_39401__$1);
var G__39404 = c__17588__auto___39402;
var G__39405 = cljs.core.count.call(null,c__17588__auto___39402);
var G__39406 = (0);
seq__39383_39391 = G__39403;
chunk__39384_39392 = G__39404;
count__39385_39393 = G__39405;
i__39386_39394 = G__39406;
continue;
} else {
var req_39407 = cljs.core.first.call(null,seq__39383_39401__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39407,prov);

var G__39408 = cljs.core.next.call(null,seq__39383_39401__$1);
var G__39409 = null;
var G__39410 = (0);
var G__39411 = (0);
seq__39383_39391 = G__39408;
chunk__39384_39392 = G__39409;
count__39385_39393 = G__39410;
i__39386_39394 = G__39411;
continue;
}
} else {
}
}
break;
}

var G__39412 = seq__39379;
var G__39413 = chunk__39380;
var G__39414 = count__39381;
var G__39415 = (i__39382 + (1));
seq__39379 = G__39412;
chunk__39380 = G__39413;
count__39381 = G__39414;
i__39382 = G__39415;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39379);
if(temp__4425__auto__){
var seq__39379__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39379__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__39379__$1);
var G__39416 = cljs.core.chunk_rest.call(null,seq__39379__$1);
var G__39417 = c__17588__auto__;
var G__39418 = cljs.core.count.call(null,c__17588__auto__);
var G__39419 = (0);
seq__39379 = G__39416;
chunk__39380 = G__39417;
count__39381 = G__39418;
i__39382 = G__39419;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39379__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39387_39420 = cljs.core.seq.call(null,requires);
var chunk__39388_39421 = null;
var count__39389_39422 = (0);
var i__39390_39423 = (0);
while(true){
if((i__39390_39423 < count__39389_39422)){
var req_39424 = cljs.core._nth.call(null,chunk__39388_39421,i__39390_39423);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39424,prov);

var G__39425 = seq__39387_39420;
var G__39426 = chunk__39388_39421;
var G__39427 = count__39389_39422;
var G__39428 = (i__39390_39423 + (1));
seq__39387_39420 = G__39425;
chunk__39388_39421 = G__39426;
count__39389_39422 = G__39427;
i__39390_39423 = G__39428;
continue;
} else {
var temp__4425__auto___39429__$1 = cljs.core.seq.call(null,seq__39387_39420);
if(temp__4425__auto___39429__$1){
var seq__39387_39430__$1 = temp__4425__auto___39429__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39387_39430__$1)){
var c__17588__auto___39431 = cljs.core.chunk_first.call(null,seq__39387_39430__$1);
var G__39432 = cljs.core.chunk_rest.call(null,seq__39387_39430__$1);
var G__39433 = c__17588__auto___39431;
var G__39434 = cljs.core.count.call(null,c__17588__auto___39431);
var G__39435 = (0);
seq__39387_39420 = G__39432;
chunk__39388_39421 = G__39433;
count__39389_39422 = G__39434;
i__39390_39423 = G__39435;
continue;
} else {
var req_39436 = cljs.core.first.call(null,seq__39387_39430__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39436,prov);

var G__39437 = cljs.core.next.call(null,seq__39387_39430__$1);
var G__39438 = null;
var G__39439 = (0);
var G__39440 = (0);
seq__39387_39420 = G__39437;
chunk__39388_39421 = G__39438;
count__39389_39422 = G__39439;
i__39390_39423 = G__39440;
continue;
}
} else {
}
}
break;
}

var G__39441 = cljs.core.next.call(null,seq__39379__$1);
var G__39442 = null;
var G__39443 = (0);
var G__39444 = (0);
seq__39379 = G__39441;
chunk__39380 = G__39442;
count__39381 = G__39443;
i__39382 = G__39444;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39449_39453 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39450_39454 = null;
var count__39451_39455 = (0);
var i__39452_39456 = (0);
while(true){
if((i__39452_39456 < count__39451_39455)){
var ns_39457 = cljs.core._nth.call(null,chunk__39450_39454,i__39452_39456);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39457);

var G__39458 = seq__39449_39453;
var G__39459 = chunk__39450_39454;
var G__39460 = count__39451_39455;
var G__39461 = (i__39452_39456 + (1));
seq__39449_39453 = G__39458;
chunk__39450_39454 = G__39459;
count__39451_39455 = G__39460;
i__39452_39456 = G__39461;
continue;
} else {
var temp__4425__auto___39462 = cljs.core.seq.call(null,seq__39449_39453);
if(temp__4425__auto___39462){
var seq__39449_39463__$1 = temp__4425__auto___39462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39449_39463__$1)){
var c__17588__auto___39464 = cljs.core.chunk_first.call(null,seq__39449_39463__$1);
var G__39465 = cljs.core.chunk_rest.call(null,seq__39449_39463__$1);
var G__39466 = c__17588__auto___39464;
var G__39467 = cljs.core.count.call(null,c__17588__auto___39464);
var G__39468 = (0);
seq__39449_39453 = G__39465;
chunk__39450_39454 = G__39466;
count__39451_39455 = G__39467;
i__39452_39456 = G__39468;
continue;
} else {
var ns_39469 = cljs.core.first.call(null,seq__39449_39463__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39469);

var G__39470 = cljs.core.next.call(null,seq__39449_39463__$1);
var G__39471 = null;
var G__39472 = (0);
var G__39473 = (0);
seq__39449_39453 = G__39470;
chunk__39450_39454 = G__39471;
count__39451_39455 = G__39472;
i__39452_39456 = G__39473;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16785__auto__ = goog.require__;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39474__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39475__i = 0, G__39475__a = new Array(arguments.length -  0);
while (G__39475__i < G__39475__a.length) {G__39475__a[G__39475__i] = arguments[G__39475__i + 0]; ++G__39475__i;}
  args = new cljs.core.IndexedSeq(G__39475__a,0);
} 
return G__39474__delegate.call(this,args);};
G__39474.cljs$lang$maxFixedArity = 0;
G__39474.cljs$lang$applyTo = (function (arglist__39476){
var args = cljs.core.seq(arglist__39476);
return G__39474__delegate(args);
});
G__39474.cljs$core$IFn$_invoke$arity$variadic = G__39474__delegate;
return G__39474;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39477 = cljs.core._EQ_;
var expr__39478 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39477.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39478))){
return ((function (pred__39477,expr__39478){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e39480){if((e39480 instanceof Error)){
var e = e39480;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39480;

}
}})());
});
;})(pred__39477,expr__39478))
} else {
if(cljs.core.truth_(pred__39477.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39478))){
return ((function (pred__39477,expr__39478){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__39477,expr__39478){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39477,expr__39478))
);

return deferred.addErrback(((function (deferred,pred__39477,expr__39478){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39477,expr__39478))
);
});
;})(pred__39477,expr__39478))
} else {
return ((function (pred__39477,expr__39478){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39477,expr__39478))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39481,callback){
var map__39484 = p__39481;
var map__39484__$1 = ((((!((map__39484 == null)))?((((map__39484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39484):map__39484);
var file_msg = map__39484__$1;
var request_url = cljs.core.get.call(null,map__39484__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39484,map__39484__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39484,map__39484__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__){
return (function (state_39508){
var state_val_39509 = (state_39508[(1)]);
if((state_val_39509 === (7))){
var inst_39504 = (state_39508[(2)]);
var state_39508__$1 = state_39508;
var statearr_39510_39530 = state_39508__$1;
(statearr_39510_39530[(2)] = inst_39504);

(statearr_39510_39530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39509 === (1))){
var state_39508__$1 = state_39508;
var statearr_39511_39531 = state_39508__$1;
(statearr_39511_39531[(2)] = null);

(statearr_39511_39531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39509 === (4))){
var inst_39488 = (state_39508[(7)]);
var inst_39488__$1 = (state_39508[(2)]);
var state_39508__$1 = (function (){var statearr_39512 = state_39508;
(statearr_39512[(7)] = inst_39488__$1);

return statearr_39512;
})();
if(cljs.core.truth_(inst_39488__$1)){
var statearr_39513_39532 = state_39508__$1;
(statearr_39513_39532[(1)] = (5));

} else {
var statearr_39514_39533 = state_39508__$1;
(statearr_39514_39533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39509 === (6))){
var state_39508__$1 = state_39508;
var statearr_39515_39534 = state_39508__$1;
(statearr_39515_39534[(2)] = null);

(statearr_39515_39534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39509 === (3))){
var inst_39506 = (state_39508[(2)]);
var state_39508__$1 = state_39508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39508__$1,inst_39506);
} else {
if((state_val_39509 === (2))){
var state_39508__$1 = state_39508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39508__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39509 === (11))){
var inst_39500 = (state_39508[(2)]);
var state_39508__$1 = (function (){var statearr_39516 = state_39508;
(statearr_39516[(8)] = inst_39500);

return statearr_39516;
})();
var statearr_39517_39535 = state_39508__$1;
(statearr_39517_39535[(2)] = null);

(statearr_39517_39535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39509 === (9))){
var inst_39492 = (state_39508[(9)]);
var inst_39494 = (state_39508[(10)]);
var inst_39496 = inst_39494.call(null,inst_39492);
var state_39508__$1 = state_39508;
var statearr_39518_39536 = state_39508__$1;
(statearr_39518_39536[(2)] = inst_39496);

(statearr_39518_39536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39509 === (5))){
var inst_39488 = (state_39508[(7)]);
var inst_39490 = figwheel.client.file_reloading.blocking_load.call(null,inst_39488);
var state_39508__$1 = state_39508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39508__$1,(8),inst_39490);
} else {
if((state_val_39509 === (10))){
var inst_39492 = (state_39508[(9)]);
var inst_39498 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39492);
var state_39508__$1 = state_39508;
var statearr_39519_39537 = state_39508__$1;
(statearr_39519_39537[(2)] = inst_39498);

(statearr_39519_39537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39509 === (8))){
var inst_39488 = (state_39508[(7)]);
var inst_39494 = (state_39508[(10)]);
var inst_39492 = (state_39508[(2)]);
var inst_39493 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39494__$1 = cljs.core.get.call(null,inst_39493,inst_39488);
var state_39508__$1 = (function (){var statearr_39520 = state_39508;
(statearr_39520[(9)] = inst_39492);

(statearr_39520[(10)] = inst_39494__$1);

return statearr_39520;
})();
if(cljs.core.truth_(inst_39494__$1)){
var statearr_39521_39538 = state_39508__$1;
(statearr_39521_39538[(1)] = (9));

} else {
var statearr_39522_39539 = state_39508__$1;
(statearr_39522_39539[(1)] = (10));

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
});})(c__21381__auto__))
;
return ((function (switch__21316__auto__,c__21381__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21317__auto__ = null;
var figwheel$client$file_reloading$state_machine__21317__auto____0 = (function (){
var statearr_39526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39526[(0)] = figwheel$client$file_reloading$state_machine__21317__auto__);

(statearr_39526[(1)] = (1));

return statearr_39526;
});
var figwheel$client$file_reloading$state_machine__21317__auto____1 = (function (state_39508){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_39508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e39527){if((e39527 instanceof Object)){
var ex__21320__auto__ = e39527;
var statearr_39528_39540 = state_39508;
(statearr_39528_39540[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39541 = state_39508;
state_39508 = G__39541;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21317__auto__ = function(state_39508){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21317__auto____1.call(this,state_39508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21317__auto____0;
figwheel$client$file_reloading$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21317__auto____1;
return figwheel$client$file_reloading$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_39529 = f__21382__auto__.call(null);
(statearr_39529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_39529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__))
);

return c__21381__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39542,callback){
var map__39545 = p__39542;
var map__39545__$1 = ((((!((map__39545 == null)))?((((map__39545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39545):map__39545);
var file_msg = map__39545__$1;
var namespace = cljs.core.get.call(null,map__39545__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39545,map__39545__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39545,map__39545__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39547){
var map__39550 = p__39547;
var map__39550__$1 = ((((!((map__39550 == null)))?((((map__39550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39550):map__39550);
var file_msg = map__39550__$1;
var namespace = cljs.core.get.call(null,map__39550__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16773__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16773__auto__){
var or__16785__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16773__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39552,callback){
var map__39555 = p__39552;
var map__39555__$1 = ((((!((map__39555 == null)))?((((map__39555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39555):map__39555);
var file_msg = map__39555__$1;
var request_url = cljs.core.get.call(null,map__39555__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39555__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21381__auto___39643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___39643,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___39643,out){
return (function (state_39625){
var state_val_39626 = (state_39625[(1)]);
if((state_val_39626 === (1))){
var inst_39603 = cljs.core.nth.call(null,files,(0),null);
var inst_39604 = cljs.core.nthnext.call(null,files,(1));
var inst_39605 = files;
var state_39625__$1 = (function (){var statearr_39627 = state_39625;
(statearr_39627[(7)] = inst_39605);

(statearr_39627[(8)] = inst_39603);

(statearr_39627[(9)] = inst_39604);

return statearr_39627;
})();
var statearr_39628_39644 = state_39625__$1;
(statearr_39628_39644[(2)] = null);

(statearr_39628_39644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39626 === (2))){
var inst_39605 = (state_39625[(7)]);
var inst_39608 = (state_39625[(10)]);
var inst_39608__$1 = cljs.core.nth.call(null,inst_39605,(0),null);
var inst_39609 = cljs.core.nthnext.call(null,inst_39605,(1));
var inst_39610 = (inst_39608__$1 == null);
var inst_39611 = cljs.core.not.call(null,inst_39610);
var state_39625__$1 = (function (){var statearr_39629 = state_39625;
(statearr_39629[(11)] = inst_39609);

(statearr_39629[(10)] = inst_39608__$1);

return statearr_39629;
})();
if(inst_39611){
var statearr_39630_39645 = state_39625__$1;
(statearr_39630_39645[(1)] = (4));

} else {
var statearr_39631_39646 = state_39625__$1;
(statearr_39631_39646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39626 === (3))){
var inst_39623 = (state_39625[(2)]);
var state_39625__$1 = state_39625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39625__$1,inst_39623);
} else {
if((state_val_39626 === (4))){
var inst_39608 = (state_39625[(10)]);
var inst_39613 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39608);
var state_39625__$1 = state_39625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39625__$1,(7),inst_39613);
} else {
if((state_val_39626 === (5))){
var inst_39619 = cljs.core.async.close_BANG_.call(null,out);
var state_39625__$1 = state_39625;
var statearr_39632_39647 = state_39625__$1;
(statearr_39632_39647[(2)] = inst_39619);

(statearr_39632_39647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39626 === (6))){
var inst_39621 = (state_39625[(2)]);
var state_39625__$1 = state_39625;
var statearr_39633_39648 = state_39625__$1;
(statearr_39633_39648[(2)] = inst_39621);

(statearr_39633_39648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39626 === (7))){
var inst_39609 = (state_39625[(11)]);
var inst_39615 = (state_39625[(2)]);
var inst_39616 = cljs.core.async.put_BANG_.call(null,out,inst_39615);
var inst_39605 = inst_39609;
var state_39625__$1 = (function (){var statearr_39634 = state_39625;
(statearr_39634[(7)] = inst_39605);

(statearr_39634[(12)] = inst_39616);

return statearr_39634;
})();
var statearr_39635_39649 = state_39625__$1;
(statearr_39635_39649[(2)] = null);

(statearr_39635_39649[(1)] = (2));


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
});})(c__21381__auto___39643,out))
;
return ((function (switch__21316__auto__,c__21381__auto___39643,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____0 = (function (){
var statearr_39639 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39639[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__);

(statearr_39639[(1)] = (1));

return statearr_39639;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____1 = (function (state_39625){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_39625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e39640){if((e39640 instanceof Object)){
var ex__21320__auto__ = e39640;
var statearr_39641_39650 = state_39625;
(statearr_39641_39650[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39651 = state_39625;
state_39625 = G__39651;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__ = function(state_39625){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____1.call(this,state_39625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___39643,out))
})();
var state__21383__auto__ = (function (){var statearr_39642 = f__21382__auto__.call(null);
(statearr_39642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___39643);

return statearr_39642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___39643,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39652,opts){
var map__39656 = p__39652;
var map__39656__$1 = ((((!((map__39656 == null)))?((((map__39656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39656):map__39656);
var eval_body__$1 = cljs.core.get.call(null,map__39656__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39656__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16773__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16773__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16773__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39658){var e = e39658;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39659_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39659_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__39664){
var vec__39665 = p__39664;
var k = cljs.core.nth.call(null,vec__39665,(0),null);
var v = cljs.core.nth.call(null,vec__39665,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39666){
var vec__39667 = p__39666;
var k = cljs.core.nth.call(null,vec__39667,(0),null);
var v = cljs.core.nth.call(null,vec__39667,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39671,p__39672){
var map__39919 = p__39671;
var map__39919__$1 = ((((!((map__39919 == null)))?((((map__39919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39919):map__39919);
var opts = map__39919__$1;
var before_jsload = cljs.core.get.call(null,map__39919__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39919__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39919__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39920 = p__39672;
var map__39920__$1 = ((((!((map__39920 == null)))?((((map__39920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39920):map__39920);
var msg = map__39920__$1;
var files = cljs.core.get.call(null,map__39920__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39920__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39920__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40073){
var state_val_40074 = (state_40073[(1)]);
if((state_val_40074 === (7))){
var inst_39936 = (state_40073[(7)]);
var inst_39934 = (state_40073[(8)]);
var inst_39935 = (state_40073[(9)]);
var inst_39937 = (state_40073[(10)]);
var inst_39942 = cljs.core._nth.call(null,inst_39935,inst_39937);
var inst_39943 = figwheel.client.file_reloading.eval_body.call(null,inst_39942,opts);
var inst_39944 = (inst_39937 + (1));
var tmp40075 = inst_39936;
var tmp40076 = inst_39934;
var tmp40077 = inst_39935;
var inst_39934__$1 = tmp40076;
var inst_39935__$1 = tmp40077;
var inst_39936__$1 = tmp40075;
var inst_39937__$1 = inst_39944;
var state_40073__$1 = (function (){var statearr_40078 = state_40073;
(statearr_40078[(7)] = inst_39936__$1);

(statearr_40078[(8)] = inst_39934__$1);

(statearr_40078[(9)] = inst_39935__$1);

(statearr_40078[(11)] = inst_39943);

(statearr_40078[(10)] = inst_39937__$1);

return statearr_40078;
})();
var statearr_40079_40165 = state_40073__$1;
(statearr_40079_40165[(2)] = null);

(statearr_40079_40165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (20))){
var inst_39977 = (state_40073[(12)]);
var inst_39985 = figwheel.client.file_reloading.sort_files.call(null,inst_39977);
var state_40073__$1 = state_40073;
var statearr_40080_40166 = state_40073__$1;
(statearr_40080_40166[(2)] = inst_39985);

(statearr_40080_40166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (27))){
var state_40073__$1 = state_40073;
var statearr_40081_40167 = state_40073__$1;
(statearr_40081_40167[(2)] = null);

(statearr_40081_40167[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (1))){
var inst_39926 = (state_40073[(13)]);
var inst_39923 = before_jsload.call(null,files);
var inst_39924 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39925 = (function (){return ((function (inst_39926,inst_39923,inst_39924,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39668_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39668_SHARP_);
});
;})(inst_39926,inst_39923,inst_39924,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39926__$1 = cljs.core.filter.call(null,inst_39925,files);
var inst_39927 = cljs.core.not_empty.call(null,inst_39926__$1);
var state_40073__$1 = (function (){var statearr_40082 = state_40073;
(statearr_40082[(14)] = inst_39924);

(statearr_40082[(15)] = inst_39923);

(statearr_40082[(13)] = inst_39926__$1);

return statearr_40082;
})();
if(cljs.core.truth_(inst_39927)){
var statearr_40083_40168 = state_40073__$1;
(statearr_40083_40168[(1)] = (2));

} else {
var statearr_40084_40169 = state_40073__$1;
(statearr_40084_40169[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (24))){
var state_40073__$1 = state_40073;
var statearr_40085_40170 = state_40073__$1;
(statearr_40085_40170[(2)] = null);

(statearr_40085_40170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (39))){
var inst_40027 = (state_40073[(16)]);
var state_40073__$1 = state_40073;
var statearr_40086_40171 = state_40073__$1;
(statearr_40086_40171[(2)] = inst_40027);

(statearr_40086_40171[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (46))){
var inst_40068 = (state_40073[(2)]);
var state_40073__$1 = state_40073;
var statearr_40087_40172 = state_40073__$1;
(statearr_40087_40172[(2)] = inst_40068);

(statearr_40087_40172[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (4))){
var inst_39971 = (state_40073[(2)]);
var inst_39972 = cljs.core.List.EMPTY;
var inst_39973 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39972);
var inst_39974 = (function (){return ((function (inst_39971,inst_39972,inst_39973,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39669_SHARP_){
var and__16773__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39669_SHARP_);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39669_SHARP_));
} else {
return and__16773__auto__;
}
});
;})(inst_39971,inst_39972,inst_39973,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39975 = cljs.core.filter.call(null,inst_39974,files);
var inst_39976 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39977 = cljs.core.concat.call(null,inst_39975,inst_39976);
var state_40073__$1 = (function (){var statearr_40088 = state_40073;
(statearr_40088[(17)] = inst_39973);

(statearr_40088[(18)] = inst_39971);

(statearr_40088[(12)] = inst_39977);

return statearr_40088;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40089_40173 = state_40073__$1;
(statearr_40089_40173[(1)] = (16));

} else {
var statearr_40090_40174 = state_40073__$1;
(statearr_40090_40174[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (15))){
var inst_39961 = (state_40073[(2)]);
var state_40073__$1 = state_40073;
var statearr_40091_40175 = state_40073__$1;
(statearr_40091_40175[(2)] = inst_39961);

(statearr_40091_40175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (21))){
var inst_39987 = (state_40073[(19)]);
var inst_39987__$1 = (state_40073[(2)]);
var inst_39988 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39987__$1);
var state_40073__$1 = (function (){var statearr_40092 = state_40073;
(statearr_40092[(19)] = inst_39987__$1);

return statearr_40092;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40073__$1,(22),inst_39988);
} else {
if((state_val_40074 === (31))){
var inst_40071 = (state_40073[(2)]);
var state_40073__$1 = state_40073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40073__$1,inst_40071);
} else {
if((state_val_40074 === (32))){
var inst_40027 = (state_40073[(16)]);
var inst_40032 = inst_40027.cljs$lang$protocol_mask$partition0$;
var inst_40033 = (inst_40032 & (64));
var inst_40034 = inst_40027.cljs$core$ISeq$;
var inst_40035 = (inst_40033) || (inst_40034);
var state_40073__$1 = state_40073;
if(cljs.core.truth_(inst_40035)){
var statearr_40093_40176 = state_40073__$1;
(statearr_40093_40176[(1)] = (35));

} else {
var statearr_40094_40177 = state_40073__$1;
(statearr_40094_40177[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (40))){
var inst_40048 = (state_40073[(20)]);
var inst_40047 = (state_40073[(2)]);
var inst_40048__$1 = cljs.core.get.call(null,inst_40047,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40049 = cljs.core.get.call(null,inst_40047,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40050 = cljs.core.not_empty.call(null,inst_40048__$1);
var state_40073__$1 = (function (){var statearr_40095 = state_40073;
(statearr_40095[(20)] = inst_40048__$1);

(statearr_40095[(21)] = inst_40049);

return statearr_40095;
})();
if(cljs.core.truth_(inst_40050)){
var statearr_40096_40178 = state_40073__$1;
(statearr_40096_40178[(1)] = (41));

} else {
var statearr_40097_40179 = state_40073__$1;
(statearr_40097_40179[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (33))){
var state_40073__$1 = state_40073;
var statearr_40098_40180 = state_40073__$1;
(statearr_40098_40180[(2)] = false);

(statearr_40098_40180[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (13))){
var inst_39947 = (state_40073[(22)]);
var inst_39951 = cljs.core.chunk_first.call(null,inst_39947);
var inst_39952 = cljs.core.chunk_rest.call(null,inst_39947);
var inst_39953 = cljs.core.count.call(null,inst_39951);
var inst_39934 = inst_39952;
var inst_39935 = inst_39951;
var inst_39936 = inst_39953;
var inst_39937 = (0);
var state_40073__$1 = (function (){var statearr_40099 = state_40073;
(statearr_40099[(7)] = inst_39936);

(statearr_40099[(8)] = inst_39934);

(statearr_40099[(9)] = inst_39935);

(statearr_40099[(10)] = inst_39937);

return statearr_40099;
})();
var statearr_40100_40181 = state_40073__$1;
(statearr_40100_40181[(2)] = null);

(statearr_40100_40181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (22))){
var inst_39995 = (state_40073[(23)]);
var inst_39990 = (state_40073[(24)]);
var inst_39991 = (state_40073[(25)]);
var inst_39987 = (state_40073[(19)]);
var inst_39990__$1 = (state_40073[(2)]);
var inst_39991__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39990__$1);
var inst_39992 = (function (){var all_files = inst_39987;
var res_SINGLEQUOTE_ = inst_39990__$1;
var res = inst_39991__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39995,inst_39990,inst_39991,inst_39987,inst_39990__$1,inst_39991__$1,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39670_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39670_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39995,inst_39990,inst_39991,inst_39987,inst_39990__$1,inst_39991__$1,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39993 = cljs.core.filter.call(null,inst_39992,inst_39990__$1);
var inst_39994 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39995__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39994);
var inst_39996 = cljs.core.not_empty.call(null,inst_39995__$1);
var state_40073__$1 = (function (){var statearr_40101 = state_40073;
(statearr_40101[(23)] = inst_39995__$1);

(statearr_40101[(24)] = inst_39990__$1);

(statearr_40101[(25)] = inst_39991__$1);

(statearr_40101[(26)] = inst_39993);

return statearr_40101;
})();
if(cljs.core.truth_(inst_39996)){
var statearr_40102_40182 = state_40073__$1;
(statearr_40102_40182[(1)] = (23));

} else {
var statearr_40103_40183 = state_40073__$1;
(statearr_40103_40183[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (36))){
var state_40073__$1 = state_40073;
var statearr_40104_40184 = state_40073__$1;
(statearr_40104_40184[(2)] = false);

(statearr_40104_40184[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (41))){
var inst_40048 = (state_40073[(20)]);
var inst_40052 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40053 = cljs.core.map.call(null,inst_40052,inst_40048);
var inst_40054 = cljs.core.pr_str.call(null,inst_40053);
var inst_40055 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40054)].join('');
var inst_40056 = figwheel.client.utils.log.call(null,inst_40055);
var state_40073__$1 = state_40073;
var statearr_40105_40185 = state_40073__$1;
(statearr_40105_40185[(2)] = inst_40056);

(statearr_40105_40185[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (43))){
var inst_40049 = (state_40073[(21)]);
var inst_40059 = (state_40073[(2)]);
var inst_40060 = cljs.core.not_empty.call(null,inst_40049);
var state_40073__$1 = (function (){var statearr_40106 = state_40073;
(statearr_40106[(27)] = inst_40059);

return statearr_40106;
})();
if(cljs.core.truth_(inst_40060)){
var statearr_40107_40186 = state_40073__$1;
(statearr_40107_40186[(1)] = (44));

} else {
var statearr_40108_40187 = state_40073__$1;
(statearr_40108_40187[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (29))){
var inst_40027 = (state_40073[(16)]);
var inst_39995 = (state_40073[(23)]);
var inst_39990 = (state_40073[(24)]);
var inst_39991 = (state_40073[(25)]);
var inst_39993 = (state_40073[(26)]);
var inst_39987 = (state_40073[(19)]);
var inst_40023 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40026 = (function (){var all_files = inst_39987;
var res_SINGLEQUOTE_ = inst_39990;
var res = inst_39991;
var files_not_loaded = inst_39993;
var dependencies_that_loaded = inst_39995;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40027,inst_39995,inst_39990,inst_39991,inst_39993,inst_39987,inst_40023,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40025){
var map__40109 = p__40025;
var map__40109__$1 = ((((!((map__40109 == null)))?((((map__40109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40109):map__40109);
var namespace = cljs.core.get.call(null,map__40109__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40027,inst_39995,inst_39990,inst_39991,inst_39993,inst_39987,inst_40023,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40027__$1 = cljs.core.group_by.call(null,inst_40026,inst_39993);
var inst_40029 = (inst_40027__$1 == null);
var inst_40030 = cljs.core.not.call(null,inst_40029);
var state_40073__$1 = (function (){var statearr_40111 = state_40073;
(statearr_40111[(16)] = inst_40027__$1);

(statearr_40111[(28)] = inst_40023);

return statearr_40111;
})();
if(inst_40030){
var statearr_40112_40188 = state_40073__$1;
(statearr_40112_40188[(1)] = (32));

} else {
var statearr_40113_40189 = state_40073__$1;
(statearr_40113_40189[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (44))){
var inst_40049 = (state_40073[(21)]);
var inst_40062 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40049);
var inst_40063 = cljs.core.pr_str.call(null,inst_40062);
var inst_40064 = [cljs.core.str("not required: "),cljs.core.str(inst_40063)].join('');
var inst_40065 = figwheel.client.utils.log.call(null,inst_40064);
var state_40073__$1 = state_40073;
var statearr_40114_40190 = state_40073__$1;
(statearr_40114_40190[(2)] = inst_40065);

(statearr_40114_40190[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (6))){
var inst_39968 = (state_40073[(2)]);
var state_40073__$1 = state_40073;
var statearr_40115_40191 = state_40073__$1;
(statearr_40115_40191[(2)] = inst_39968);

(statearr_40115_40191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (28))){
var inst_39993 = (state_40073[(26)]);
var inst_40020 = (state_40073[(2)]);
var inst_40021 = cljs.core.not_empty.call(null,inst_39993);
var state_40073__$1 = (function (){var statearr_40116 = state_40073;
(statearr_40116[(29)] = inst_40020);

return statearr_40116;
})();
if(cljs.core.truth_(inst_40021)){
var statearr_40117_40192 = state_40073__$1;
(statearr_40117_40192[(1)] = (29));

} else {
var statearr_40118_40193 = state_40073__$1;
(statearr_40118_40193[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (25))){
var inst_39991 = (state_40073[(25)]);
var inst_40007 = (state_40073[(2)]);
var inst_40008 = cljs.core.not_empty.call(null,inst_39991);
var state_40073__$1 = (function (){var statearr_40119 = state_40073;
(statearr_40119[(30)] = inst_40007);

return statearr_40119;
})();
if(cljs.core.truth_(inst_40008)){
var statearr_40120_40194 = state_40073__$1;
(statearr_40120_40194[(1)] = (26));

} else {
var statearr_40121_40195 = state_40073__$1;
(statearr_40121_40195[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (34))){
var inst_40042 = (state_40073[(2)]);
var state_40073__$1 = state_40073;
if(cljs.core.truth_(inst_40042)){
var statearr_40122_40196 = state_40073__$1;
(statearr_40122_40196[(1)] = (38));

} else {
var statearr_40123_40197 = state_40073__$1;
(statearr_40123_40197[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (17))){
var state_40073__$1 = state_40073;
var statearr_40124_40198 = state_40073__$1;
(statearr_40124_40198[(2)] = recompile_dependents);

(statearr_40124_40198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (3))){
var state_40073__$1 = state_40073;
var statearr_40125_40199 = state_40073__$1;
(statearr_40125_40199[(2)] = null);

(statearr_40125_40199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (12))){
var inst_39964 = (state_40073[(2)]);
var state_40073__$1 = state_40073;
var statearr_40126_40200 = state_40073__$1;
(statearr_40126_40200[(2)] = inst_39964);

(statearr_40126_40200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (2))){
var inst_39926 = (state_40073[(13)]);
var inst_39933 = cljs.core.seq.call(null,inst_39926);
var inst_39934 = inst_39933;
var inst_39935 = null;
var inst_39936 = (0);
var inst_39937 = (0);
var state_40073__$1 = (function (){var statearr_40127 = state_40073;
(statearr_40127[(7)] = inst_39936);

(statearr_40127[(8)] = inst_39934);

(statearr_40127[(9)] = inst_39935);

(statearr_40127[(10)] = inst_39937);

return statearr_40127;
})();
var statearr_40128_40201 = state_40073__$1;
(statearr_40128_40201[(2)] = null);

(statearr_40128_40201[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (23))){
var inst_39995 = (state_40073[(23)]);
var inst_39990 = (state_40073[(24)]);
var inst_39991 = (state_40073[(25)]);
var inst_39993 = (state_40073[(26)]);
var inst_39987 = (state_40073[(19)]);
var inst_39998 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40000 = (function (){var all_files = inst_39987;
var res_SINGLEQUOTE_ = inst_39990;
var res = inst_39991;
var files_not_loaded = inst_39993;
var dependencies_that_loaded = inst_39995;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39995,inst_39990,inst_39991,inst_39993,inst_39987,inst_39998,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39999){
var map__40129 = p__39999;
var map__40129__$1 = ((((!((map__40129 == null)))?((((map__40129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40129):map__40129);
var request_url = cljs.core.get.call(null,map__40129__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39995,inst_39990,inst_39991,inst_39993,inst_39987,inst_39998,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40001 = cljs.core.reverse.call(null,inst_39995);
var inst_40002 = cljs.core.map.call(null,inst_40000,inst_40001);
var inst_40003 = cljs.core.pr_str.call(null,inst_40002);
var inst_40004 = figwheel.client.utils.log.call(null,inst_40003);
var state_40073__$1 = (function (){var statearr_40131 = state_40073;
(statearr_40131[(31)] = inst_39998);

return statearr_40131;
})();
var statearr_40132_40202 = state_40073__$1;
(statearr_40132_40202[(2)] = inst_40004);

(statearr_40132_40202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (35))){
var state_40073__$1 = state_40073;
var statearr_40133_40203 = state_40073__$1;
(statearr_40133_40203[(2)] = true);

(statearr_40133_40203[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (19))){
var inst_39977 = (state_40073[(12)]);
var inst_39983 = figwheel.client.file_reloading.expand_files.call(null,inst_39977);
var state_40073__$1 = state_40073;
var statearr_40134_40204 = state_40073__$1;
(statearr_40134_40204[(2)] = inst_39983);

(statearr_40134_40204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (11))){
var state_40073__$1 = state_40073;
var statearr_40135_40205 = state_40073__$1;
(statearr_40135_40205[(2)] = null);

(statearr_40135_40205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (9))){
var inst_39966 = (state_40073[(2)]);
var state_40073__$1 = state_40073;
var statearr_40136_40206 = state_40073__$1;
(statearr_40136_40206[(2)] = inst_39966);

(statearr_40136_40206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (5))){
var inst_39936 = (state_40073[(7)]);
var inst_39937 = (state_40073[(10)]);
var inst_39939 = (inst_39937 < inst_39936);
var inst_39940 = inst_39939;
var state_40073__$1 = state_40073;
if(cljs.core.truth_(inst_39940)){
var statearr_40137_40207 = state_40073__$1;
(statearr_40137_40207[(1)] = (7));

} else {
var statearr_40138_40208 = state_40073__$1;
(statearr_40138_40208[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (14))){
var inst_39947 = (state_40073[(22)]);
var inst_39956 = cljs.core.first.call(null,inst_39947);
var inst_39957 = figwheel.client.file_reloading.eval_body.call(null,inst_39956,opts);
var inst_39958 = cljs.core.next.call(null,inst_39947);
var inst_39934 = inst_39958;
var inst_39935 = null;
var inst_39936 = (0);
var inst_39937 = (0);
var state_40073__$1 = (function (){var statearr_40139 = state_40073;
(statearr_40139[(7)] = inst_39936);

(statearr_40139[(8)] = inst_39934);

(statearr_40139[(9)] = inst_39935);

(statearr_40139[(10)] = inst_39937);

(statearr_40139[(32)] = inst_39957);

return statearr_40139;
})();
var statearr_40140_40209 = state_40073__$1;
(statearr_40140_40209[(2)] = null);

(statearr_40140_40209[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (45))){
var state_40073__$1 = state_40073;
var statearr_40141_40210 = state_40073__$1;
(statearr_40141_40210[(2)] = null);

(statearr_40141_40210[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (26))){
var inst_39995 = (state_40073[(23)]);
var inst_39990 = (state_40073[(24)]);
var inst_39991 = (state_40073[(25)]);
var inst_39993 = (state_40073[(26)]);
var inst_39987 = (state_40073[(19)]);
var inst_40010 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40012 = (function (){var all_files = inst_39987;
var res_SINGLEQUOTE_ = inst_39990;
var res = inst_39991;
var files_not_loaded = inst_39993;
var dependencies_that_loaded = inst_39995;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39995,inst_39990,inst_39991,inst_39993,inst_39987,inst_40010,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40011){
var map__40142 = p__40011;
var map__40142__$1 = ((((!((map__40142 == null)))?((((map__40142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40142):map__40142);
var namespace = cljs.core.get.call(null,map__40142__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40142__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39995,inst_39990,inst_39991,inst_39993,inst_39987,inst_40010,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40013 = cljs.core.map.call(null,inst_40012,inst_39991);
var inst_40014 = cljs.core.pr_str.call(null,inst_40013);
var inst_40015 = figwheel.client.utils.log.call(null,inst_40014);
var inst_40016 = (function (){var all_files = inst_39987;
var res_SINGLEQUOTE_ = inst_39990;
var res = inst_39991;
var files_not_loaded = inst_39993;
var dependencies_that_loaded = inst_39995;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39995,inst_39990,inst_39991,inst_39993,inst_39987,inst_40010,inst_40012,inst_40013,inst_40014,inst_40015,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39995,inst_39990,inst_39991,inst_39993,inst_39987,inst_40010,inst_40012,inst_40013,inst_40014,inst_40015,state_val_40074,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40017 = setTimeout(inst_40016,(10));
var state_40073__$1 = (function (){var statearr_40144 = state_40073;
(statearr_40144[(33)] = inst_40010);

(statearr_40144[(34)] = inst_40015);

return statearr_40144;
})();
var statearr_40145_40211 = state_40073__$1;
(statearr_40145_40211[(2)] = inst_40017);

(statearr_40145_40211[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (16))){
var state_40073__$1 = state_40073;
var statearr_40146_40212 = state_40073__$1;
(statearr_40146_40212[(2)] = reload_dependents);

(statearr_40146_40212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (38))){
var inst_40027 = (state_40073[(16)]);
var inst_40044 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40027);
var state_40073__$1 = state_40073;
var statearr_40147_40213 = state_40073__$1;
(statearr_40147_40213[(2)] = inst_40044);

(statearr_40147_40213[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (30))){
var state_40073__$1 = state_40073;
var statearr_40148_40214 = state_40073__$1;
(statearr_40148_40214[(2)] = null);

(statearr_40148_40214[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (10))){
var inst_39947 = (state_40073[(22)]);
var inst_39949 = cljs.core.chunked_seq_QMARK_.call(null,inst_39947);
var state_40073__$1 = state_40073;
if(inst_39949){
var statearr_40149_40215 = state_40073__$1;
(statearr_40149_40215[(1)] = (13));

} else {
var statearr_40150_40216 = state_40073__$1;
(statearr_40150_40216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (18))){
var inst_39981 = (state_40073[(2)]);
var state_40073__$1 = state_40073;
if(cljs.core.truth_(inst_39981)){
var statearr_40151_40217 = state_40073__$1;
(statearr_40151_40217[(1)] = (19));

} else {
var statearr_40152_40218 = state_40073__$1;
(statearr_40152_40218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (42))){
var state_40073__$1 = state_40073;
var statearr_40153_40219 = state_40073__$1;
(statearr_40153_40219[(2)] = null);

(statearr_40153_40219[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (37))){
var inst_40039 = (state_40073[(2)]);
var state_40073__$1 = state_40073;
var statearr_40154_40220 = state_40073__$1;
(statearr_40154_40220[(2)] = inst_40039);

(statearr_40154_40220[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40074 === (8))){
var inst_39934 = (state_40073[(8)]);
var inst_39947 = (state_40073[(22)]);
var inst_39947__$1 = cljs.core.seq.call(null,inst_39934);
var state_40073__$1 = (function (){var statearr_40155 = state_40073;
(statearr_40155[(22)] = inst_39947__$1);

return statearr_40155;
})();
if(inst_39947__$1){
var statearr_40156_40221 = state_40073__$1;
(statearr_40156_40221[(1)] = (10));

} else {
var statearr_40157_40222 = state_40073__$1;
(statearr_40157_40222[(1)] = (11));

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
});})(c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21316__auto__,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____0 = (function (){
var statearr_40161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40161[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__);

(statearr_40161[(1)] = (1));

return statearr_40161;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____1 = (function (state_40073){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_40073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e40162){if((e40162 instanceof Object)){
var ex__21320__auto__ = e40162;
var statearr_40163_40223 = state_40073;
(statearr_40163_40223[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40224 = state_40073;
state_40073 = G__40224;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__ = function(state_40073){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____1.call(this,state_40073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21383__auto__ = (function (){var statearr_40164 = f__21382__auto__.call(null);
(statearr_40164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_40164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__,map__39919,map__39919__$1,opts,before_jsload,on_jsload,reload_dependents,map__39920,map__39920__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21381__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40227,link){
var map__40230 = p__40227;
var map__40230__$1 = ((((!((map__40230 == null)))?((((map__40230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40230):map__40230);
var file = cljs.core.get.call(null,map__40230__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__40230,map__40230__$1,file){
return (function (p1__40225_SHARP_,p2__40226_SHARP_){
if(cljs.core._EQ_.call(null,p1__40225_SHARP_,p2__40226_SHARP_)){
return p1__40225_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__40230,map__40230__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40236){
var map__40237 = p__40236;
var map__40237__$1 = ((((!((map__40237 == null)))?((((map__40237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40237):map__40237);
var match_length = cljs.core.get.call(null,map__40237__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40237__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40232_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40232_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args40239 = [];
var len__17843__auto___40242 = arguments.length;
var i__17844__auto___40243 = (0);
while(true){
if((i__17844__auto___40243 < len__17843__auto___40242)){
args40239.push((arguments[i__17844__auto___40243]));

var G__40244 = (i__17844__auto___40243 + (1));
i__17844__auto___40243 = G__40244;
continue;
} else {
}
break;
}

var G__40241 = args40239.length;
switch (G__40241) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40239.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40246_SHARP_,p2__40247_SHARP_){
return cljs.core.assoc.call(null,p1__40246_SHARP_,cljs.core.get.call(null,p2__40247_SHARP_,key),p2__40247_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__40248){
var map__40251 = p__40248;
var map__40251__$1 = ((((!((map__40251 == null)))?((((map__40251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40251):map__40251);
var f_data = map__40251__$1;
var file = cljs.core.get.call(null,map__40251__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40253,files_msg){
var map__40260 = p__40253;
var map__40260__$1 = ((((!((map__40260 == null)))?((((map__40260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40260):map__40260);
var opts = map__40260__$1;
var on_cssload = cljs.core.get.call(null,map__40260__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__40262_40266 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__40263_40267 = null;
var count__40264_40268 = (0);
var i__40265_40269 = (0);
while(true){
if((i__40265_40269 < count__40264_40268)){
var f_40270 = cljs.core._nth.call(null,chunk__40263_40267,i__40265_40269);
figwheel.client.file_reloading.reload_css_file.call(null,f_40270);

var G__40271 = seq__40262_40266;
var G__40272 = chunk__40263_40267;
var G__40273 = count__40264_40268;
var G__40274 = (i__40265_40269 + (1));
seq__40262_40266 = G__40271;
chunk__40263_40267 = G__40272;
count__40264_40268 = G__40273;
i__40265_40269 = G__40274;
continue;
} else {
var temp__4425__auto___40275 = cljs.core.seq.call(null,seq__40262_40266);
if(temp__4425__auto___40275){
var seq__40262_40276__$1 = temp__4425__auto___40275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40262_40276__$1)){
var c__17588__auto___40277 = cljs.core.chunk_first.call(null,seq__40262_40276__$1);
var G__40278 = cljs.core.chunk_rest.call(null,seq__40262_40276__$1);
var G__40279 = c__17588__auto___40277;
var G__40280 = cljs.core.count.call(null,c__17588__auto___40277);
var G__40281 = (0);
seq__40262_40266 = G__40278;
chunk__40263_40267 = G__40279;
count__40264_40268 = G__40280;
i__40265_40269 = G__40281;
continue;
} else {
var f_40282 = cljs.core.first.call(null,seq__40262_40276__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_40282);

var G__40283 = cljs.core.next.call(null,seq__40262_40276__$1);
var G__40284 = null;
var G__40285 = (0);
var G__40286 = (0);
seq__40262_40266 = G__40283;
chunk__40263_40267 = G__40284;
count__40264_40268 = G__40285;
i__40265_40269 = G__40286;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__40260,map__40260__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__40260,map__40260__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map