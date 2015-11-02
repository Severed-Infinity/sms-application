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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27935_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27935_SHARP_));
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
var seq__27940 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27941 = null;
var count__27942 = (0);
var i__27943 = (0);
while(true){
if((i__27943 < count__27942)){
var n = cljs.core._nth.call(null,chunk__27941,i__27943);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27944 = seq__27940;
var G__27945 = chunk__27941;
var G__27946 = count__27942;
var G__27947 = (i__27943 + (1));
seq__27940 = G__27944;
chunk__27941 = G__27945;
count__27942 = G__27946;
i__27943 = G__27947;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27940);
if(temp__4425__auto__){
var seq__27940__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27940__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__27940__$1);
var G__27948 = cljs.core.chunk_rest.call(null,seq__27940__$1);
var G__27949 = c__17588__auto__;
var G__27950 = cljs.core.count.call(null,c__17588__auto__);
var G__27951 = (0);
seq__27940 = G__27948;
chunk__27941 = G__27949;
count__27942 = G__27950;
i__27943 = G__27951;
continue;
} else {
var n = cljs.core.first.call(null,seq__27940__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27952 = cljs.core.next.call(null,seq__27940__$1);
var G__27953 = null;
var G__27954 = (0);
var G__27955 = (0);
seq__27940 = G__27952;
chunk__27941 = G__27953;
count__27942 = G__27954;
i__27943 = G__27955;
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

var seq__27994_28001 = cljs.core.seq.call(null,deps);
var chunk__27995_28002 = null;
var count__27996_28003 = (0);
var i__27997_28004 = (0);
while(true){
if((i__27997_28004 < count__27996_28003)){
var dep_28005 = cljs.core._nth.call(null,chunk__27995_28002,i__27997_28004);
topo_sort_helper_STAR_.call(null,dep_28005,(depth + (1)),state);

var G__28006 = seq__27994_28001;
var G__28007 = chunk__27995_28002;
var G__28008 = count__27996_28003;
var G__28009 = (i__27997_28004 + (1));
seq__27994_28001 = G__28006;
chunk__27995_28002 = G__28007;
count__27996_28003 = G__28008;
i__27997_28004 = G__28009;
continue;
} else {
var temp__4425__auto___28010 = cljs.core.seq.call(null,seq__27994_28001);
if(temp__4425__auto___28010){
var seq__27994_28011__$1 = temp__4425__auto___28010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27994_28011__$1)){
var c__17588__auto___28012 = cljs.core.chunk_first.call(null,seq__27994_28011__$1);
var G__28013 = cljs.core.chunk_rest.call(null,seq__27994_28011__$1);
var G__28014 = c__17588__auto___28012;
var G__28015 = cljs.core.count.call(null,c__17588__auto___28012);
var G__28016 = (0);
seq__27994_28001 = G__28013;
chunk__27995_28002 = G__28014;
count__27996_28003 = G__28015;
i__27997_28004 = G__28016;
continue;
} else {
var dep_28017 = cljs.core.first.call(null,seq__27994_28011__$1);
topo_sort_helper_STAR_.call(null,dep_28017,(depth + (1)),state);

var G__28018 = cljs.core.next.call(null,seq__27994_28011__$1);
var G__28019 = null;
var G__28020 = (0);
var G__28021 = (0);
seq__27994_28001 = G__28018;
chunk__27995_28002 = G__28019;
count__27996_28003 = G__28020;
i__27997_28004 = G__28021;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27998){
var vec__28000 = p__27998;
var x = cljs.core.nth.call(null,vec__28000,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28000,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28000,x,xs,get_deps__$1){
return (function (p1__27956_SHARP_){
return clojure.set.difference.call(null,p1__27956_SHARP_,x);
});})(vec__28000,x,xs,get_deps__$1))
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
var seq__28034 = cljs.core.seq.call(null,provides);
var chunk__28035 = null;
var count__28036 = (0);
var i__28037 = (0);
while(true){
if((i__28037 < count__28036)){
var prov = cljs.core._nth.call(null,chunk__28035,i__28037);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28038_28046 = cljs.core.seq.call(null,requires);
var chunk__28039_28047 = null;
var count__28040_28048 = (0);
var i__28041_28049 = (0);
while(true){
if((i__28041_28049 < count__28040_28048)){
var req_28050 = cljs.core._nth.call(null,chunk__28039_28047,i__28041_28049);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28050,prov);

var G__28051 = seq__28038_28046;
var G__28052 = chunk__28039_28047;
var G__28053 = count__28040_28048;
var G__28054 = (i__28041_28049 + (1));
seq__28038_28046 = G__28051;
chunk__28039_28047 = G__28052;
count__28040_28048 = G__28053;
i__28041_28049 = G__28054;
continue;
} else {
var temp__4425__auto___28055 = cljs.core.seq.call(null,seq__28038_28046);
if(temp__4425__auto___28055){
var seq__28038_28056__$1 = temp__4425__auto___28055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28038_28056__$1)){
var c__17588__auto___28057 = cljs.core.chunk_first.call(null,seq__28038_28056__$1);
var G__28058 = cljs.core.chunk_rest.call(null,seq__28038_28056__$1);
var G__28059 = c__17588__auto___28057;
var G__28060 = cljs.core.count.call(null,c__17588__auto___28057);
var G__28061 = (0);
seq__28038_28046 = G__28058;
chunk__28039_28047 = G__28059;
count__28040_28048 = G__28060;
i__28041_28049 = G__28061;
continue;
} else {
var req_28062 = cljs.core.first.call(null,seq__28038_28056__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28062,prov);

var G__28063 = cljs.core.next.call(null,seq__28038_28056__$1);
var G__28064 = null;
var G__28065 = (0);
var G__28066 = (0);
seq__28038_28046 = G__28063;
chunk__28039_28047 = G__28064;
count__28040_28048 = G__28065;
i__28041_28049 = G__28066;
continue;
}
} else {
}
}
break;
}

var G__28067 = seq__28034;
var G__28068 = chunk__28035;
var G__28069 = count__28036;
var G__28070 = (i__28037 + (1));
seq__28034 = G__28067;
chunk__28035 = G__28068;
count__28036 = G__28069;
i__28037 = G__28070;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28034);
if(temp__4425__auto__){
var seq__28034__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28034__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__28034__$1);
var G__28071 = cljs.core.chunk_rest.call(null,seq__28034__$1);
var G__28072 = c__17588__auto__;
var G__28073 = cljs.core.count.call(null,c__17588__auto__);
var G__28074 = (0);
seq__28034 = G__28071;
chunk__28035 = G__28072;
count__28036 = G__28073;
i__28037 = G__28074;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28034__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28042_28075 = cljs.core.seq.call(null,requires);
var chunk__28043_28076 = null;
var count__28044_28077 = (0);
var i__28045_28078 = (0);
while(true){
if((i__28045_28078 < count__28044_28077)){
var req_28079 = cljs.core._nth.call(null,chunk__28043_28076,i__28045_28078);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28079,prov);

var G__28080 = seq__28042_28075;
var G__28081 = chunk__28043_28076;
var G__28082 = count__28044_28077;
var G__28083 = (i__28045_28078 + (1));
seq__28042_28075 = G__28080;
chunk__28043_28076 = G__28081;
count__28044_28077 = G__28082;
i__28045_28078 = G__28083;
continue;
} else {
var temp__4425__auto___28084__$1 = cljs.core.seq.call(null,seq__28042_28075);
if(temp__4425__auto___28084__$1){
var seq__28042_28085__$1 = temp__4425__auto___28084__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28042_28085__$1)){
var c__17588__auto___28086 = cljs.core.chunk_first.call(null,seq__28042_28085__$1);
var G__28087 = cljs.core.chunk_rest.call(null,seq__28042_28085__$1);
var G__28088 = c__17588__auto___28086;
var G__28089 = cljs.core.count.call(null,c__17588__auto___28086);
var G__28090 = (0);
seq__28042_28075 = G__28087;
chunk__28043_28076 = G__28088;
count__28044_28077 = G__28089;
i__28045_28078 = G__28090;
continue;
} else {
var req_28091 = cljs.core.first.call(null,seq__28042_28085__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28091,prov);

var G__28092 = cljs.core.next.call(null,seq__28042_28085__$1);
var G__28093 = null;
var G__28094 = (0);
var G__28095 = (0);
seq__28042_28075 = G__28092;
chunk__28043_28076 = G__28093;
count__28044_28077 = G__28094;
i__28045_28078 = G__28095;
continue;
}
} else {
}
}
break;
}

var G__28096 = cljs.core.next.call(null,seq__28034__$1);
var G__28097 = null;
var G__28098 = (0);
var G__28099 = (0);
seq__28034 = G__28096;
chunk__28035 = G__28097;
count__28036 = G__28098;
i__28037 = G__28099;
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
var seq__28104_28108 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28105_28109 = null;
var count__28106_28110 = (0);
var i__28107_28111 = (0);
while(true){
if((i__28107_28111 < count__28106_28110)){
var ns_28112 = cljs.core._nth.call(null,chunk__28105_28109,i__28107_28111);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28112);

var G__28113 = seq__28104_28108;
var G__28114 = chunk__28105_28109;
var G__28115 = count__28106_28110;
var G__28116 = (i__28107_28111 + (1));
seq__28104_28108 = G__28113;
chunk__28105_28109 = G__28114;
count__28106_28110 = G__28115;
i__28107_28111 = G__28116;
continue;
} else {
var temp__4425__auto___28117 = cljs.core.seq.call(null,seq__28104_28108);
if(temp__4425__auto___28117){
var seq__28104_28118__$1 = temp__4425__auto___28117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28104_28118__$1)){
var c__17588__auto___28119 = cljs.core.chunk_first.call(null,seq__28104_28118__$1);
var G__28120 = cljs.core.chunk_rest.call(null,seq__28104_28118__$1);
var G__28121 = c__17588__auto___28119;
var G__28122 = cljs.core.count.call(null,c__17588__auto___28119);
var G__28123 = (0);
seq__28104_28108 = G__28120;
chunk__28105_28109 = G__28121;
count__28106_28110 = G__28122;
i__28107_28111 = G__28123;
continue;
} else {
var ns_28124 = cljs.core.first.call(null,seq__28104_28118__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28124);

var G__28125 = cljs.core.next.call(null,seq__28104_28118__$1);
var G__28126 = null;
var G__28127 = (0);
var G__28128 = (0);
seq__28104_28108 = G__28125;
chunk__28105_28109 = G__28126;
count__28106_28110 = G__28127;
i__28107_28111 = G__28128;
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
var G__28129__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28130__i = 0, G__28130__a = new Array(arguments.length -  0);
while (G__28130__i < G__28130__a.length) {G__28130__a[G__28130__i] = arguments[G__28130__i + 0]; ++G__28130__i;}
  args = new cljs.core.IndexedSeq(G__28130__a,0);
} 
return G__28129__delegate.call(this,args);};
G__28129.cljs$lang$maxFixedArity = 0;
G__28129.cljs$lang$applyTo = (function (arglist__28131){
var args = cljs.core.seq(arglist__28131);
return G__28129__delegate(args);
});
G__28129.cljs$core$IFn$_invoke$arity$variadic = G__28129__delegate;
return G__28129;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28132 = cljs.core._EQ_;
var expr__28133 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28132.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28133))){
return ((function (pred__28132,expr__28133){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28135){if((e28135 instanceof Error)){
var e = e28135;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28135;

}
}})());
});
;})(pred__28132,expr__28133))
} else {
if(cljs.core.truth_(pred__28132.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28133))){
return ((function (pred__28132,expr__28133){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28132,expr__28133){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28132,expr__28133))
);

return deferred.addErrback(((function (deferred,pred__28132,expr__28133){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28132,expr__28133))
);
});
;})(pred__28132,expr__28133))
} else {
return ((function (pred__28132,expr__28133){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28132,expr__28133))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28136,callback){
var map__28139 = p__28136;
var map__28139__$1 = ((((!((map__28139 == null)))?((((map__28139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28139):map__28139);
var file_msg = map__28139__$1;
var request_url = cljs.core.get.call(null,map__28139__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28139,map__28139__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28139,map__28139__$1,file_msg,request_url))
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
return (function (state_28163){
var state_val_28164 = (state_28163[(1)]);
if((state_val_28164 === (7))){
var inst_28159 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28165_28185 = state_28163__$1;
(statearr_28165_28185[(2)] = inst_28159);

(statearr_28165_28185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (1))){
var state_28163__$1 = state_28163;
var statearr_28166_28186 = state_28163__$1;
(statearr_28166_28186[(2)] = null);

(statearr_28166_28186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (4))){
var inst_28143 = (state_28163[(7)]);
var inst_28143__$1 = (state_28163[(2)]);
var state_28163__$1 = (function (){var statearr_28167 = state_28163;
(statearr_28167[(7)] = inst_28143__$1);

return statearr_28167;
})();
if(cljs.core.truth_(inst_28143__$1)){
var statearr_28168_28187 = state_28163__$1;
(statearr_28168_28187[(1)] = (5));

} else {
var statearr_28169_28188 = state_28163__$1;
(statearr_28169_28188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (6))){
var state_28163__$1 = state_28163;
var statearr_28170_28189 = state_28163__$1;
(statearr_28170_28189[(2)] = null);

(statearr_28170_28189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (3))){
var inst_28161 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28163__$1,inst_28161);
} else {
if((state_val_28164 === (2))){
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28163__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28164 === (11))){
var inst_28155 = (state_28163[(2)]);
var state_28163__$1 = (function (){var statearr_28171 = state_28163;
(statearr_28171[(8)] = inst_28155);

return statearr_28171;
})();
var statearr_28172_28190 = state_28163__$1;
(statearr_28172_28190[(2)] = null);

(statearr_28172_28190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (9))){
var inst_28147 = (state_28163[(9)]);
var inst_28149 = (state_28163[(10)]);
var inst_28151 = inst_28149.call(null,inst_28147);
var state_28163__$1 = state_28163;
var statearr_28173_28191 = state_28163__$1;
(statearr_28173_28191[(2)] = inst_28151);

(statearr_28173_28191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (5))){
var inst_28143 = (state_28163[(7)]);
var inst_28145 = figwheel.client.file_reloading.blocking_load.call(null,inst_28143);
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28163__$1,(8),inst_28145);
} else {
if((state_val_28164 === (10))){
var inst_28147 = (state_28163[(9)]);
var inst_28153 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28147);
var state_28163__$1 = state_28163;
var statearr_28174_28192 = state_28163__$1;
(statearr_28174_28192[(2)] = inst_28153);

(statearr_28174_28192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (8))){
var inst_28143 = (state_28163[(7)]);
var inst_28149 = (state_28163[(10)]);
var inst_28147 = (state_28163[(2)]);
var inst_28148 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28149__$1 = cljs.core.get.call(null,inst_28148,inst_28143);
var state_28163__$1 = (function (){var statearr_28175 = state_28163;
(statearr_28175[(9)] = inst_28147);

(statearr_28175[(10)] = inst_28149__$1);

return statearr_28175;
})();
if(cljs.core.truth_(inst_28149__$1)){
var statearr_28176_28193 = state_28163__$1;
(statearr_28176_28193[(1)] = (9));

} else {
var statearr_28177_28194 = state_28163__$1;
(statearr_28177_28194[(1)] = (10));

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
var statearr_28181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28181[(0)] = figwheel$client$file_reloading$state_machine__21317__auto__);

(statearr_28181[(1)] = (1));

return statearr_28181;
});
var figwheel$client$file_reloading$state_machine__21317__auto____1 = (function (state_28163){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_28163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e28182){if((e28182 instanceof Object)){
var ex__21320__auto__ = e28182;
var statearr_28183_28195 = state_28163;
(statearr_28183_28195[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28196 = state_28163;
state_28163 = G__28196;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21317__auto__ = function(state_28163){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21317__auto____1.call(this,state_28163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21317__auto____0;
figwheel$client$file_reloading$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21317__auto____1;
return figwheel$client$file_reloading$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_28184 = f__21382__auto__.call(null);
(statearr_28184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_28184;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28197,callback){
var map__28200 = p__28197;
var map__28200__$1 = ((((!((map__28200 == null)))?((((map__28200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28200):map__28200);
var file_msg = map__28200__$1;
var namespace = cljs.core.get.call(null,map__28200__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28200,map__28200__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28200,map__28200__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28202){
var map__28205 = p__28202;
var map__28205__$1 = ((((!((map__28205 == null)))?((((map__28205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28205):map__28205);
var file_msg = map__28205__$1;
var namespace = cljs.core.get.call(null,map__28205__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28207,callback){
var map__28210 = p__28207;
var map__28210__$1 = ((((!((map__28210 == null)))?((((map__28210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28210):map__28210);
var file_msg = map__28210__$1;
var request_url = cljs.core.get.call(null,map__28210__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28210__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21381__auto___28298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___28298,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___28298,out){
return (function (state_28280){
var state_val_28281 = (state_28280[(1)]);
if((state_val_28281 === (1))){
var inst_28258 = cljs.core.nth.call(null,files,(0),null);
var inst_28259 = cljs.core.nthnext.call(null,files,(1));
var inst_28260 = files;
var state_28280__$1 = (function (){var statearr_28282 = state_28280;
(statearr_28282[(7)] = inst_28258);

(statearr_28282[(8)] = inst_28259);

(statearr_28282[(9)] = inst_28260);

return statearr_28282;
})();
var statearr_28283_28299 = state_28280__$1;
(statearr_28283_28299[(2)] = null);

(statearr_28283_28299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (2))){
var inst_28260 = (state_28280[(9)]);
var inst_28263 = (state_28280[(10)]);
var inst_28263__$1 = cljs.core.nth.call(null,inst_28260,(0),null);
var inst_28264 = cljs.core.nthnext.call(null,inst_28260,(1));
var inst_28265 = (inst_28263__$1 == null);
var inst_28266 = cljs.core.not.call(null,inst_28265);
var state_28280__$1 = (function (){var statearr_28284 = state_28280;
(statearr_28284[(10)] = inst_28263__$1);

(statearr_28284[(11)] = inst_28264);

return statearr_28284;
})();
if(inst_28266){
var statearr_28285_28300 = state_28280__$1;
(statearr_28285_28300[(1)] = (4));

} else {
var statearr_28286_28301 = state_28280__$1;
(statearr_28286_28301[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (3))){
var inst_28278 = (state_28280[(2)]);
var state_28280__$1 = state_28280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28280__$1,inst_28278);
} else {
if((state_val_28281 === (4))){
var inst_28263 = (state_28280[(10)]);
var inst_28268 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28263);
var state_28280__$1 = state_28280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28280__$1,(7),inst_28268);
} else {
if((state_val_28281 === (5))){
var inst_28274 = cljs.core.async.close_BANG_.call(null,out);
var state_28280__$1 = state_28280;
var statearr_28287_28302 = state_28280__$1;
(statearr_28287_28302[(2)] = inst_28274);

(statearr_28287_28302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (6))){
var inst_28276 = (state_28280[(2)]);
var state_28280__$1 = state_28280;
var statearr_28288_28303 = state_28280__$1;
(statearr_28288_28303[(2)] = inst_28276);

(statearr_28288_28303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28281 === (7))){
var inst_28264 = (state_28280[(11)]);
var inst_28270 = (state_28280[(2)]);
var inst_28271 = cljs.core.async.put_BANG_.call(null,out,inst_28270);
var inst_28260 = inst_28264;
var state_28280__$1 = (function (){var statearr_28289 = state_28280;
(statearr_28289[(9)] = inst_28260);

(statearr_28289[(12)] = inst_28271);

return statearr_28289;
})();
var statearr_28290_28304 = state_28280__$1;
(statearr_28290_28304[(2)] = null);

(statearr_28290_28304[(1)] = (2));


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
});})(c__21381__auto___28298,out))
;
return ((function (switch__21316__auto__,c__21381__auto___28298,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____0 = (function (){
var statearr_28294 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28294[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__);

(statearr_28294[(1)] = (1));

return statearr_28294;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____1 = (function (state_28280){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_28280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e28295){if((e28295 instanceof Object)){
var ex__21320__auto__ = e28295;
var statearr_28296_28305 = state_28280;
(statearr_28296_28305[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28306 = state_28280;
state_28280 = G__28306;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__ = function(state_28280){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____1.call(this,state_28280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___28298,out))
})();
var state__21383__auto__ = (function (){var statearr_28297 = f__21382__auto__.call(null);
(statearr_28297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___28298);

return statearr_28297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___28298,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28307,opts){
var map__28311 = p__28307;
var map__28311__$1 = ((((!((map__28311 == null)))?((((map__28311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28311):map__28311);
var eval_body__$1 = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28313){var e = e28313;
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
return (function (p1__28314_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28314_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28319){
var vec__28320 = p__28319;
var k = cljs.core.nth.call(null,vec__28320,(0),null);
var v = cljs.core.nth.call(null,vec__28320,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28321){
var vec__28322 = p__28321;
var k = cljs.core.nth.call(null,vec__28322,(0),null);
var v = cljs.core.nth.call(null,vec__28322,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28326,p__28327){
var map__28574 = p__28326;
var map__28574__$1 = ((((!((map__28574 == null)))?((((map__28574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28574):map__28574);
var opts = map__28574__$1;
var before_jsload = cljs.core.get.call(null,map__28574__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28574__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28574__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28575 = p__28327;
var map__28575__$1 = ((((!((map__28575 == null)))?((((map__28575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28575):map__28575);
var msg = map__28575__$1;
var files = cljs.core.get.call(null,map__28575__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28575__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28575__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28728){
var state_val_28729 = (state_28728[(1)]);
if((state_val_28729 === (7))){
var inst_28592 = (state_28728[(7)]);
var inst_28591 = (state_28728[(8)]);
var inst_28590 = (state_28728[(9)]);
var inst_28589 = (state_28728[(10)]);
var inst_28597 = cljs.core._nth.call(null,inst_28590,inst_28592);
var inst_28598 = figwheel.client.file_reloading.eval_body.call(null,inst_28597,opts);
var inst_28599 = (inst_28592 + (1));
var tmp28730 = inst_28591;
var tmp28731 = inst_28590;
var tmp28732 = inst_28589;
var inst_28589__$1 = tmp28732;
var inst_28590__$1 = tmp28731;
var inst_28591__$1 = tmp28730;
var inst_28592__$1 = inst_28599;
var state_28728__$1 = (function (){var statearr_28733 = state_28728;
(statearr_28733[(7)] = inst_28592__$1);

(statearr_28733[(8)] = inst_28591__$1);

(statearr_28733[(9)] = inst_28590__$1);

(statearr_28733[(10)] = inst_28589__$1);

(statearr_28733[(11)] = inst_28598);

return statearr_28733;
})();
var statearr_28734_28820 = state_28728__$1;
(statearr_28734_28820[(2)] = null);

(statearr_28734_28820[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (20))){
var inst_28632 = (state_28728[(12)]);
var inst_28640 = figwheel.client.file_reloading.sort_files.call(null,inst_28632);
var state_28728__$1 = state_28728;
var statearr_28735_28821 = state_28728__$1;
(statearr_28735_28821[(2)] = inst_28640);

(statearr_28735_28821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (27))){
var state_28728__$1 = state_28728;
var statearr_28736_28822 = state_28728__$1;
(statearr_28736_28822[(2)] = null);

(statearr_28736_28822[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (1))){
var inst_28581 = (state_28728[(13)]);
var inst_28578 = before_jsload.call(null,files);
var inst_28579 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28580 = (function (){return ((function (inst_28581,inst_28578,inst_28579,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28323_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28323_SHARP_);
});
;})(inst_28581,inst_28578,inst_28579,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28581__$1 = cljs.core.filter.call(null,inst_28580,files);
var inst_28582 = cljs.core.not_empty.call(null,inst_28581__$1);
var state_28728__$1 = (function (){var statearr_28737 = state_28728;
(statearr_28737[(14)] = inst_28578);

(statearr_28737[(15)] = inst_28579);

(statearr_28737[(13)] = inst_28581__$1);

return statearr_28737;
})();
if(cljs.core.truth_(inst_28582)){
var statearr_28738_28823 = state_28728__$1;
(statearr_28738_28823[(1)] = (2));

} else {
var statearr_28739_28824 = state_28728__$1;
(statearr_28739_28824[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (24))){
var state_28728__$1 = state_28728;
var statearr_28740_28825 = state_28728__$1;
(statearr_28740_28825[(2)] = null);

(statearr_28740_28825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (39))){
var inst_28682 = (state_28728[(16)]);
var state_28728__$1 = state_28728;
var statearr_28741_28826 = state_28728__$1;
(statearr_28741_28826[(2)] = inst_28682);

(statearr_28741_28826[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (46))){
var inst_28723 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
var statearr_28742_28827 = state_28728__$1;
(statearr_28742_28827[(2)] = inst_28723);

(statearr_28742_28827[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (4))){
var inst_28626 = (state_28728[(2)]);
var inst_28627 = cljs.core.List.EMPTY;
var inst_28628 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28627);
var inst_28629 = (function (){return ((function (inst_28626,inst_28627,inst_28628,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28324_SHARP_){
var and__16773__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28324_SHARP_);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28324_SHARP_));
} else {
return and__16773__auto__;
}
});
;})(inst_28626,inst_28627,inst_28628,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28630 = cljs.core.filter.call(null,inst_28629,files);
var inst_28631 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28632 = cljs.core.concat.call(null,inst_28630,inst_28631);
var state_28728__$1 = (function (){var statearr_28743 = state_28728;
(statearr_28743[(17)] = inst_28628);

(statearr_28743[(18)] = inst_28626);

(statearr_28743[(12)] = inst_28632);

return statearr_28743;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28744_28828 = state_28728__$1;
(statearr_28744_28828[(1)] = (16));

} else {
var statearr_28745_28829 = state_28728__$1;
(statearr_28745_28829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (15))){
var inst_28616 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
var statearr_28746_28830 = state_28728__$1;
(statearr_28746_28830[(2)] = inst_28616);

(statearr_28746_28830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (21))){
var inst_28642 = (state_28728[(19)]);
var inst_28642__$1 = (state_28728[(2)]);
var inst_28643 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28642__$1);
var state_28728__$1 = (function (){var statearr_28747 = state_28728;
(statearr_28747[(19)] = inst_28642__$1);

return statearr_28747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28728__$1,(22),inst_28643);
} else {
if((state_val_28729 === (31))){
var inst_28726 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28728__$1,inst_28726);
} else {
if((state_val_28729 === (32))){
var inst_28682 = (state_28728[(16)]);
var inst_28687 = inst_28682.cljs$lang$protocol_mask$partition0$;
var inst_28688 = (inst_28687 & (64));
var inst_28689 = inst_28682.cljs$core$ISeq$;
var inst_28690 = (inst_28688) || (inst_28689);
var state_28728__$1 = state_28728;
if(cljs.core.truth_(inst_28690)){
var statearr_28748_28831 = state_28728__$1;
(statearr_28748_28831[(1)] = (35));

} else {
var statearr_28749_28832 = state_28728__$1;
(statearr_28749_28832[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (40))){
var inst_28703 = (state_28728[(20)]);
var inst_28702 = (state_28728[(2)]);
var inst_28703__$1 = cljs.core.get.call(null,inst_28702,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28704 = cljs.core.get.call(null,inst_28702,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28705 = cljs.core.not_empty.call(null,inst_28703__$1);
var state_28728__$1 = (function (){var statearr_28750 = state_28728;
(statearr_28750[(21)] = inst_28704);

(statearr_28750[(20)] = inst_28703__$1);

return statearr_28750;
})();
if(cljs.core.truth_(inst_28705)){
var statearr_28751_28833 = state_28728__$1;
(statearr_28751_28833[(1)] = (41));

} else {
var statearr_28752_28834 = state_28728__$1;
(statearr_28752_28834[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (33))){
var state_28728__$1 = state_28728;
var statearr_28753_28835 = state_28728__$1;
(statearr_28753_28835[(2)] = false);

(statearr_28753_28835[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (13))){
var inst_28602 = (state_28728[(22)]);
var inst_28606 = cljs.core.chunk_first.call(null,inst_28602);
var inst_28607 = cljs.core.chunk_rest.call(null,inst_28602);
var inst_28608 = cljs.core.count.call(null,inst_28606);
var inst_28589 = inst_28607;
var inst_28590 = inst_28606;
var inst_28591 = inst_28608;
var inst_28592 = (0);
var state_28728__$1 = (function (){var statearr_28754 = state_28728;
(statearr_28754[(7)] = inst_28592);

(statearr_28754[(8)] = inst_28591);

(statearr_28754[(9)] = inst_28590);

(statearr_28754[(10)] = inst_28589);

return statearr_28754;
})();
var statearr_28755_28836 = state_28728__$1;
(statearr_28755_28836[(2)] = null);

(statearr_28755_28836[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (22))){
var inst_28646 = (state_28728[(23)]);
var inst_28642 = (state_28728[(19)]);
var inst_28650 = (state_28728[(24)]);
var inst_28645 = (state_28728[(25)]);
var inst_28645__$1 = (state_28728[(2)]);
var inst_28646__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28645__$1);
var inst_28647 = (function (){var all_files = inst_28642;
var res_SINGLEQUOTE_ = inst_28645__$1;
var res = inst_28646__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28646,inst_28642,inst_28650,inst_28645,inst_28645__$1,inst_28646__$1,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28325_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28325_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28646,inst_28642,inst_28650,inst_28645,inst_28645__$1,inst_28646__$1,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28648 = cljs.core.filter.call(null,inst_28647,inst_28645__$1);
var inst_28649 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28650__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28649);
var inst_28651 = cljs.core.not_empty.call(null,inst_28650__$1);
var state_28728__$1 = (function (){var statearr_28756 = state_28728;
(statearr_28756[(26)] = inst_28648);

(statearr_28756[(23)] = inst_28646__$1);

(statearr_28756[(24)] = inst_28650__$1);

(statearr_28756[(25)] = inst_28645__$1);

return statearr_28756;
})();
if(cljs.core.truth_(inst_28651)){
var statearr_28757_28837 = state_28728__$1;
(statearr_28757_28837[(1)] = (23));

} else {
var statearr_28758_28838 = state_28728__$1;
(statearr_28758_28838[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (36))){
var state_28728__$1 = state_28728;
var statearr_28759_28839 = state_28728__$1;
(statearr_28759_28839[(2)] = false);

(statearr_28759_28839[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (41))){
var inst_28703 = (state_28728[(20)]);
var inst_28707 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28708 = cljs.core.map.call(null,inst_28707,inst_28703);
var inst_28709 = cljs.core.pr_str.call(null,inst_28708);
var inst_28710 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28709)].join('');
var inst_28711 = figwheel.client.utils.log.call(null,inst_28710);
var state_28728__$1 = state_28728;
var statearr_28760_28840 = state_28728__$1;
(statearr_28760_28840[(2)] = inst_28711);

(statearr_28760_28840[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (43))){
var inst_28704 = (state_28728[(21)]);
var inst_28714 = (state_28728[(2)]);
var inst_28715 = cljs.core.not_empty.call(null,inst_28704);
var state_28728__$1 = (function (){var statearr_28761 = state_28728;
(statearr_28761[(27)] = inst_28714);

return statearr_28761;
})();
if(cljs.core.truth_(inst_28715)){
var statearr_28762_28841 = state_28728__$1;
(statearr_28762_28841[(1)] = (44));

} else {
var statearr_28763_28842 = state_28728__$1;
(statearr_28763_28842[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (29))){
var inst_28648 = (state_28728[(26)]);
var inst_28646 = (state_28728[(23)]);
var inst_28642 = (state_28728[(19)]);
var inst_28650 = (state_28728[(24)]);
var inst_28645 = (state_28728[(25)]);
var inst_28682 = (state_28728[(16)]);
var inst_28678 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28681 = (function (){var all_files = inst_28642;
var res_SINGLEQUOTE_ = inst_28645;
var res = inst_28646;
var files_not_loaded = inst_28648;
var dependencies_that_loaded = inst_28650;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28648,inst_28646,inst_28642,inst_28650,inst_28645,inst_28682,inst_28678,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28680){
var map__28764 = p__28680;
var map__28764__$1 = ((((!((map__28764 == null)))?((((map__28764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28764):map__28764);
var namespace = cljs.core.get.call(null,map__28764__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28648,inst_28646,inst_28642,inst_28650,inst_28645,inst_28682,inst_28678,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28682__$1 = cljs.core.group_by.call(null,inst_28681,inst_28648);
var inst_28684 = (inst_28682__$1 == null);
var inst_28685 = cljs.core.not.call(null,inst_28684);
var state_28728__$1 = (function (){var statearr_28766 = state_28728;
(statearr_28766[(28)] = inst_28678);

(statearr_28766[(16)] = inst_28682__$1);

return statearr_28766;
})();
if(inst_28685){
var statearr_28767_28843 = state_28728__$1;
(statearr_28767_28843[(1)] = (32));

} else {
var statearr_28768_28844 = state_28728__$1;
(statearr_28768_28844[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (44))){
var inst_28704 = (state_28728[(21)]);
var inst_28717 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28704);
var inst_28718 = cljs.core.pr_str.call(null,inst_28717);
var inst_28719 = [cljs.core.str("not required: "),cljs.core.str(inst_28718)].join('');
var inst_28720 = figwheel.client.utils.log.call(null,inst_28719);
var state_28728__$1 = state_28728;
var statearr_28769_28845 = state_28728__$1;
(statearr_28769_28845[(2)] = inst_28720);

(statearr_28769_28845[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (6))){
var inst_28623 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
var statearr_28770_28846 = state_28728__$1;
(statearr_28770_28846[(2)] = inst_28623);

(statearr_28770_28846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (28))){
var inst_28648 = (state_28728[(26)]);
var inst_28675 = (state_28728[(2)]);
var inst_28676 = cljs.core.not_empty.call(null,inst_28648);
var state_28728__$1 = (function (){var statearr_28771 = state_28728;
(statearr_28771[(29)] = inst_28675);

return statearr_28771;
})();
if(cljs.core.truth_(inst_28676)){
var statearr_28772_28847 = state_28728__$1;
(statearr_28772_28847[(1)] = (29));

} else {
var statearr_28773_28848 = state_28728__$1;
(statearr_28773_28848[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (25))){
var inst_28646 = (state_28728[(23)]);
var inst_28662 = (state_28728[(2)]);
var inst_28663 = cljs.core.not_empty.call(null,inst_28646);
var state_28728__$1 = (function (){var statearr_28774 = state_28728;
(statearr_28774[(30)] = inst_28662);

return statearr_28774;
})();
if(cljs.core.truth_(inst_28663)){
var statearr_28775_28849 = state_28728__$1;
(statearr_28775_28849[(1)] = (26));

} else {
var statearr_28776_28850 = state_28728__$1;
(statearr_28776_28850[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (34))){
var inst_28697 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
if(cljs.core.truth_(inst_28697)){
var statearr_28777_28851 = state_28728__$1;
(statearr_28777_28851[(1)] = (38));

} else {
var statearr_28778_28852 = state_28728__$1;
(statearr_28778_28852[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (17))){
var state_28728__$1 = state_28728;
var statearr_28779_28853 = state_28728__$1;
(statearr_28779_28853[(2)] = recompile_dependents);

(statearr_28779_28853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (3))){
var state_28728__$1 = state_28728;
var statearr_28780_28854 = state_28728__$1;
(statearr_28780_28854[(2)] = null);

(statearr_28780_28854[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (12))){
var inst_28619 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
var statearr_28781_28855 = state_28728__$1;
(statearr_28781_28855[(2)] = inst_28619);

(statearr_28781_28855[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (2))){
var inst_28581 = (state_28728[(13)]);
var inst_28588 = cljs.core.seq.call(null,inst_28581);
var inst_28589 = inst_28588;
var inst_28590 = null;
var inst_28591 = (0);
var inst_28592 = (0);
var state_28728__$1 = (function (){var statearr_28782 = state_28728;
(statearr_28782[(7)] = inst_28592);

(statearr_28782[(8)] = inst_28591);

(statearr_28782[(9)] = inst_28590);

(statearr_28782[(10)] = inst_28589);

return statearr_28782;
})();
var statearr_28783_28856 = state_28728__$1;
(statearr_28783_28856[(2)] = null);

(statearr_28783_28856[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (23))){
var inst_28648 = (state_28728[(26)]);
var inst_28646 = (state_28728[(23)]);
var inst_28642 = (state_28728[(19)]);
var inst_28650 = (state_28728[(24)]);
var inst_28645 = (state_28728[(25)]);
var inst_28653 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28655 = (function (){var all_files = inst_28642;
var res_SINGLEQUOTE_ = inst_28645;
var res = inst_28646;
var files_not_loaded = inst_28648;
var dependencies_that_loaded = inst_28650;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28648,inst_28646,inst_28642,inst_28650,inst_28645,inst_28653,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28654){
var map__28784 = p__28654;
var map__28784__$1 = ((((!((map__28784 == null)))?((((map__28784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28784):map__28784);
var request_url = cljs.core.get.call(null,map__28784__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28648,inst_28646,inst_28642,inst_28650,inst_28645,inst_28653,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28656 = cljs.core.reverse.call(null,inst_28650);
var inst_28657 = cljs.core.map.call(null,inst_28655,inst_28656);
var inst_28658 = cljs.core.pr_str.call(null,inst_28657);
var inst_28659 = figwheel.client.utils.log.call(null,inst_28658);
var state_28728__$1 = (function (){var statearr_28786 = state_28728;
(statearr_28786[(31)] = inst_28653);

return statearr_28786;
})();
var statearr_28787_28857 = state_28728__$1;
(statearr_28787_28857[(2)] = inst_28659);

(statearr_28787_28857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (35))){
var state_28728__$1 = state_28728;
var statearr_28788_28858 = state_28728__$1;
(statearr_28788_28858[(2)] = true);

(statearr_28788_28858[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (19))){
var inst_28632 = (state_28728[(12)]);
var inst_28638 = figwheel.client.file_reloading.expand_files.call(null,inst_28632);
var state_28728__$1 = state_28728;
var statearr_28789_28859 = state_28728__$1;
(statearr_28789_28859[(2)] = inst_28638);

(statearr_28789_28859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (11))){
var state_28728__$1 = state_28728;
var statearr_28790_28860 = state_28728__$1;
(statearr_28790_28860[(2)] = null);

(statearr_28790_28860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (9))){
var inst_28621 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
var statearr_28791_28861 = state_28728__$1;
(statearr_28791_28861[(2)] = inst_28621);

(statearr_28791_28861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (5))){
var inst_28592 = (state_28728[(7)]);
var inst_28591 = (state_28728[(8)]);
var inst_28594 = (inst_28592 < inst_28591);
var inst_28595 = inst_28594;
var state_28728__$1 = state_28728;
if(cljs.core.truth_(inst_28595)){
var statearr_28792_28862 = state_28728__$1;
(statearr_28792_28862[(1)] = (7));

} else {
var statearr_28793_28863 = state_28728__$1;
(statearr_28793_28863[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (14))){
var inst_28602 = (state_28728[(22)]);
var inst_28611 = cljs.core.first.call(null,inst_28602);
var inst_28612 = figwheel.client.file_reloading.eval_body.call(null,inst_28611,opts);
var inst_28613 = cljs.core.next.call(null,inst_28602);
var inst_28589 = inst_28613;
var inst_28590 = null;
var inst_28591 = (0);
var inst_28592 = (0);
var state_28728__$1 = (function (){var statearr_28794 = state_28728;
(statearr_28794[(7)] = inst_28592);

(statearr_28794[(8)] = inst_28591);

(statearr_28794[(32)] = inst_28612);

(statearr_28794[(9)] = inst_28590);

(statearr_28794[(10)] = inst_28589);

return statearr_28794;
})();
var statearr_28795_28864 = state_28728__$1;
(statearr_28795_28864[(2)] = null);

(statearr_28795_28864[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (45))){
var state_28728__$1 = state_28728;
var statearr_28796_28865 = state_28728__$1;
(statearr_28796_28865[(2)] = null);

(statearr_28796_28865[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (26))){
var inst_28648 = (state_28728[(26)]);
var inst_28646 = (state_28728[(23)]);
var inst_28642 = (state_28728[(19)]);
var inst_28650 = (state_28728[(24)]);
var inst_28645 = (state_28728[(25)]);
var inst_28665 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28667 = (function (){var all_files = inst_28642;
var res_SINGLEQUOTE_ = inst_28645;
var res = inst_28646;
var files_not_loaded = inst_28648;
var dependencies_that_loaded = inst_28650;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28648,inst_28646,inst_28642,inst_28650,inst_28645,inst_28665,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28666){
var map__28797 = p__28666;
var map__28797__$1 = ((((!((map__28797 == null)))?((((map__28797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28797):map__28797);
var namespace = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28648,inst_28646,inst_28642,inst_28650,inst_28645,inst_28665,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28668 = cljs.core.map.call(null,inst_28667,inst_28646);
var inst_28669 = cljs.core.pr_str.call(null,inst_28668);
var inst_28670 = figwheel.client.utils.log.call(null,inst_28669);
var inst_28671 = (function (){var all_files = inst_28642;
var res_SINGLEQUOTE_ = inst_28645;
var res = inst_28646;
var files_not_loaded = inst_28648;
var dependencies_that_loaded = inst_28650;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28648,inst_28646,inst_28642,inst_28650,inst_28645,inst_28665,inst_28667,inst_28668,inst_28669,inst_28670,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28648,inst_28646,inst_28642,inst_28650,inst_28645,inst_28665,inst_28667,inst_28668,inst_28669,inst_28670,state_val_28729,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28672 = setTimeout(inst_28671,(10));
var state_28728__$1 = (function (){var statearr_28799 = state_28728;
(statearr_28799[(33)] = inst_28665);

(statearr_28799[(34)] = inst_28670);

return statearr_28799;
})();
var statearr_28800_28866 = state_28728__$1;
(statearr_28800_28866[(2)] = inst_28672);

(statearr_28800_28866[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (16))){
var state_28728__$1 = state_28728;
var statearr_28801_28867 = state_28728__$1;
(statearr_28801_28867[(2)] = reload_dependents);

(statearr_28801_28867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (38))){
var inst_28682 = (state_28728[(16)]);
var inst_28699 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28682);
var state_28728__$1 = state_28728;
var statearr_28802_28868 = state_28728__$1;
(statearr_28802_28868[(2)] = inst_28699);

(statearr_28802_28868[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (30))){
var state_28728__$1 = state_28728;
var statearr_28803_28869 = state_28728__$1;
(statearr_28803_28869[(2)] = null);

(statearr_28803_28869[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (10))){
var inst_28602 = (state_28728[(22)]);
var inst_28604 = cljs.core.chunked_seq_QMARK_.call(null,inst_28602);
var state_28728__$1 = state_28728;
if(inst_28604){
var statearr_28804_28870 = state_28728__$1;
(statearr_28804_28870[(1)] = (13));

} else {
var statearr_28805_28871 = state_28728__$1;
(statearr_28805_28871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (18))){
var inst_28636 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
if(cljs.core.truth_(inst_28636)){
var statearr_28806_28872 = state_28728__$1;
(statearr_28806_28872[(1)] = (19));

} else {
var statearr_28807_28873 = state_28728__$1;
(statearr_28807_28873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (42))){
var state_28728__$1 = state_28728;
var statearr_28808_28874 = state_28728__$1;
(statearr_28808_28874[(2)] = null);

(statearr_28808_28874[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (37))){
var inst_28694 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
var statearr_28809_28875 = state_28728__$1;
(statearr_28809_28875[(2)] = inst_28694);

(statearr_28809_28875[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (8))){
var inst_28589 = (state_28728[(10)]);
var inst_28602 = (state_28728[(22)]);
var inst_28602__$1 = cljs.core.seq.call(null,inst_28589);
var state_28728__$1 = (function (){var statearr_28810 = state_28728;
(statearr_28810[(22)] = inst_28602__$1);

return statearr_28810;
})();
if(inst_28602__$1){
var statearr_28811_28876 = state_28728__$1;
(statearr_28811_28876[(1)] = (10));

} else {
var statearr_28812_28877 = state_28728__$1;
(statearr_28812_28877[(1)] = (11));

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
});})(c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21316__auto__,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____0 = (function (){
var statearr_28816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28816[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__);

(statearr_28816[(1)] = (1));

return statearr_28816;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____1 = (function (state_28728){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_28728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e28817){if((e28817 instanceof Object)){
var ex__21320__auto__ = e28817;
var statearr_28818_28878 = state_28728;
(statearr_28818_28878[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28879 = state_28728;
state_28728 = G__28879;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__ = function(state_28728){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____1.call(this,state_28728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21383__auto__ = (function (){var statearr_28819 = f__21382__auto__.call(null);
(statearr_28819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_28819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__,map__28574,map__28574__$1,opts,before_jsload,on_jsload,reload_dependents,map__28575,map__28575__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21381__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28882,link){
var map__28885 = p__28882;
var map__28885__$1 = ((((!((map__28885 == null)))?((((map__28885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28885):map__28885);
var file = cljs.core.get.call(null,map__28885__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28885,map__28885__$1,file){
return (function (p1__28880_SHARP_,p2__28881_SHARP_){
if(cljs.core._EQ_.call(null,p1__28880_SHARP_,p2__28881_SHARP_)){
return p1__28880_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28885,map__28885__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28891){
var map__28892 = p__28891;
var map__28892__$1 = ((((!((map__28892 == null)))?((((map__28892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28892):map__28892);
var match_length = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28892__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28887_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28887_SHARP_);
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
var args28894 = [];
var len__17843__auto___28897 = arguments.length;
var i__17844__auto___28898 = (0);
while(true){
if((i__17844__auto___28898 < len__17843__auto___28897)){
args28894.push((arguments[i__17844__auto___28898]));

var G__28899 = (i__17844__auto___28898 + (1));
i__17844__auto___28898 = G__28899;
continue;
} else {
}
break;
}

var G__28896 = args28894.length;
switch (G__28896) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28894.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28901_SHARP_,p2__28902_SHARP_){
return cljs.core.assoc.call(null,p1__28901_SHARP_,cljs.core.get.call(null,p2__28902_SHARP_,key),p2__28902_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28903){
var map__28906 = p__28903;
var map__28906__$1 = ((((!((map__28906 == null)))?((((map__28906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28906):map__28906);
var f_data = map__28906__$1;
var file = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28908,files_msg){
var map__28915 = p__28908;
var map__28915__$1 = ((((!((map__28915 == null)))?((((map__28915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28915):map__28915);
var opts = map__28915__$1;
var on_cssload = cljs.core.get.call(null,map__28915__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28917_28921 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28918_28922 = null;
var count__28919_28923 = (0);
var i__28920_28924 = (0);
while(true){
if((i__28920_28924 < count__28919_28923)){
var f_28925 = cljs.core._nth.call(null,chunk__28918_28922,i__28920_28924);
figwheel.client.file_reloading.reload_css_file.call(null,f_28925);

var G__28926 = seq__28917_28921;
var G__28927 = chunk__28918_28922;
var G__28928 = count__28919_28923;
var G__28929 = (i__28920_28924 + (1));
seq__28917_28921 = G__28926;
chunk__28918_28922 = G__28927;
count__28919_28923 = G__28928;
i__28920_28924 = G__28929;
continue;
} else {
var temp__4425__auto___28930 = cljs.core.seq.call(null,seq__28917_28921);
if(temp__4425__auto___28930){
var seq__28917_28931__$1 = temp__4425__auto___28930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28917_28931__$1)){
var c__17588__auto___28932 = cljs.core.chunk_first.call(null,seq__28917_28931__$1);
var G__28933 = cljs.core.chunk_rest.call(null,seq__28917_28931__$1);
var G__28934 = c__17588__auto___28932;
var G__28935 = cljs.core.count.call(null,c__17588__auto___28932);
var G__28936 = (0);
seq__28917_28921 = G__28933;
chunk__28918_28922 = G__28934;
count__28919_28923 = G__28935;
i__28920_28924 = G__28936;
continue;
} else {
var f_28937 = cljs.core.first.call(null,seq__28917_28931__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28937);

var G__28938 = cljs.core.next.call(null,seq__28917_28931__$1);
var G__28939 = null;
var G__28940 = (0);
var G__28941 = (0);
seq__28917_28921 = G__28938;
chunk__28918_28922 = G__28939;
count__28919_28923 = G__28940;
i__28920_28924 = G__28941;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28915,map__28915__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28915,map__28915__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map