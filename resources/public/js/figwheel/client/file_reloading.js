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
var or__17190__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17190__auto__){
return or__17190__auto__;
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
var or__17190__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__17190__auto__)){
return or__17190__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28183_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28183_SHARP_));
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
var seq__28188 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28189 = null;
var count__28190 = (0);
var i__28191 = (0);
while(true){
if((i__28191 < count__28190)){
var n = cljs.core._nth.call(null,chunk__28189,i__28191);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28192 = seq__28188;
var G__28193 = chunk__28189;
var G__28194 = count__28190;
var G__28195 = (i__28191 + (1));
seq__28188 = G__28192;
chunk__28189 = G__28193;
count__28190 = G__28194;
i__28191 = G__28195;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28188);
if(temp__4425__auto__){
var seq__28188__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28188__$1)){
var c__17993__auto__ = cljs.core.chunk_first.call(null,seq__28188__$1);
var G__28196 = cljs.core.chunk_rest.call(null,seq__28188__$1);
var G__28197 = c__17993__auto__;
var G__28198 = cljs.core.count.call(null,c__17993__auto__);
var G__28199 = (0);
seq__28188 = G__28196;
chunk__28189 = G__28197;
count__28190 = G__28198;
i__28191 = G__28199;
continue;
} else {
var n = cljs.core.first.call(null,seq__28188__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28200 = cljs.core.next.call(null,seq__28188__$1);
var G__28201 = null;
var G__28202 = (0);
var G__28203 = (0);
seq__28188 = G__28200;
chunk__28189 = G__28201;
count__28190 = G__28202;
i__28191 = G__28203;
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

var seq__28242_28249 = cljs.core.seq.call(null,deps);
var chunk__28243_28250 = null;
var count__28244_28251 = (0);
var i__28245_28252 = (0);
while(true){
if((i__28245_28252 < count__28244_28251)){
var dep_28253 = cljs.core._nth.call(null,chunk__28243_28250,i__28245_28252);
topo_sort_helper_STAR_.call(null,dep_28253,(depth + (1)),state);

var G__28254 = seq__28242_28249;
var G__28255 = chunk__28243_28250;
var G__28256 = count__28244_28251;
var G__28257 = (i__28245_28252 + (1));
seq__28242_28249 = G__28254;
chunk__28243_28250 = G__28255;
count__28244_28251 = G__28256;
i__28245_28252 = G__28257;
continue;
} else {
var temp__4425__auto___28258 = cljs.core.seq.call(null,seq__28242_28249);
if(temp__4425__auto___28258){
var seq__28242_28259__$1 = temp__4425__auto___28258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28242_28259__$1)){
var c__17993__auto___28260 = cljs.core.chunk_first.call(null,seq__28242_28259__$1);
var G__28261 = cljs.core.chunk_rest.call(null,seq__28242_28259__$1);
var G__28262 = c__17993__auto___28260;
var G__28263 = cljs.core.count.call(null,c__17993__auto___28260);
var G__28264 = (0);
seq__28242_28249 = G__28261;
chunk__28243_28250 = G__28262;
count__28244_28251 = G__28263;
i__28245_28252 = G__28264;
continue;
} else {
var dep_28265 = cljs.core.first.call(null,seq__28242_28259__$1);
topo_sort_helper_STAR_.call(null,dep_28265,(depth + (1)),state);

var G__28266 = cljs.core.next.call(null,seq__28242_28259__$1);
var G__28267 = null;
var G__28268 = (0);
var G__28269 = (0);
seq__28242_28249 = G__28266;
chunk__28243_28250 = G__28267;
count__28244_28251 = G__28268;
i__28245_28252 = G__28269;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28246){
var vec__28248 = p__28246;
var x = cljs.core.nth.call(null,vec__28248,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28248,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28248,x,xs,get_deps__$1){
return (function (p1__28204_SHARP_){
return clojure.set.difference.call(null,p1__28204_SHARP_,x);
});})(vec__28248,x,xs,get_deps__$1))
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
var seq__28282 = cljs.core.seq.call(null,provides);
var chunk__28283 = null;
var count__28284 = (0);
var i__28285 = (0);
while(true){
if((i__28285 < count__28284)){
var prov = cljs.core._nth.call(null,chunk__28283,i__28285);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28286_28294 = cljs.core.seq.call(null,requires);
var chunk__28287_28295 = null;
var count__28288_28296 = (0);
var i__28289_28297 = (0);
while(true){
if((i__28289_28297 < count__28288_28296)){
var req_28298 = cljs.core._nth.call(null,chunk__28287_28295,i__28289_28297);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28298,prov);

var G__28299 = seq__28286_28294;
var G__28300 = chunk__28287_28295;
var G__28301 = count__28288_28296;
var G__28302 = (i__28289_28297 + (1));
seq__28286_28294 = G__28299;
chunk__28287_28295 = G__28300;
count__28288_28296 = G__28301;
i__28289_28297 = G__28302;
continue;
} else {
var temp__4425__auto___28303 = cljs.core.seq.call(null,seq__28286_28294);
if(temp__4425__auto___28303){
var seq__28286_28304__$1 = temp__4425__auto___28303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28286_28304__$1)){
var c__17993__auto___28305 = cljs.core.chunk_first.call(null,seq__28286_28304__$1);
var G__28306 = cljs.core.chunk_rest.call(null,seq__28286_28304__$1);
var G__28307 = c__17993__auto___28305;
var G__28308 = cljs.core.count.call(null,c__17993__auto___28305);
var G__28309 = (0);
seq__28286_28294 = G__28306;
chunk__28287_28295 = G__28307;
count__28288_28296 = G__28308;
i__28289_28297 = G__28309;
continue;
} else {
var req_28310 = cljs.core.first.call(null,seq__28286_28304__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28310,prov);

var G__28311 = cljs.core.next.call(null,seq__28286_28304__$1);
var G__28312 = null;
var G__28313 = (0);
var G__28314 = (0);
seq__28286_28294 = G__28311;
chunk__28287_28295 = G__28312;
count__28288_28296 = G__28313;
i__28289_28297 = G__28314;
continue;
}
} else {
}
}
break;
}

var G__28315 = seq__28282;
var G__28316 = chunk__28283;
var G__28317 = count__28284;
var G__28318 = (i__28285 + (1));
seq__28282 = G__28315;
chunk__28283 = G__28316;
count__28284 = G__28317;
i__28285 = G__28318;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28282);
if(temp__4425__auto__){
var seq__28282__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28282__$1)){
var c__17993__auto__ = cljs.core.chunk_first.call(null,seq__28282__$1);
var G__28319 = cljs.core.chunk_rest.call(null,seq__28282__$1);
var G__28320 = c__17993__auto__;
var G__28321 = cljs.core.count.call(null,c__17993__auto__);
var G__28322 = (0);
seq__28282 = G__28319;
chunk__28283 = G__28320;
count__28284 = G__28321;
i__28285 = G__28322;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28282__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28290_28323 = cljs.core.seq.call(null,requires);
var chunk__28291_28324 = null;
var count__28292_28325 = (0);
var i__28293_28326 = (0);
while(true){
if((i__28293_28326 < count__28292_28325)){
var req_28327 = cljs.core._nth.call(null,chunk__28291_28324,i__28293_28326);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28327,prov);

var G__28328 = seq__28290_28323;
var G__28329 = chunk__28291_28324;
var G__28330 = count__28292_28325;
var G__28331 = (i__28293_28326 + (1));
seq__28290_28323 = G__28328;
chunk__28291_28324 = G__28329;
count__28292_28325 = G__28330;
i__28293_28326 = G__28331;
continue;
} else {
var temp__4425__auto___28332__$1 = cljs.core.seq.call(null,seq__28290_28323);
if(temp__4425__auto___28332__$1){
var seq__28290_28333__$1 = temp__4425__auto___28332__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28290_28333__$1)){
var c__17993__auto___28334 = cljs.core.chunk_first.call(null,seq__28290_28333__$1);
var G__28335 = cljs.core.chunk_rest.call(null,seq__28290_28333__$1);
var G__28336 = c__17993__auto___28334;
var G__28337 = cljs.core.count.call(null,c__17993__auto___28334);
var G__28338 = (0);
seq__28290_28323 = G__28335;
chunk__28291_28324 = G__28336;
count__28292_28325 = G__28337;
i__28293_28326 = G__28338;
continue;
} else {
var req_28339 = cljs.core.first.call(null,seq__28290_28333__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28339,prov);

var G__28340 = cljs.core.next.call(null,seq__28290_28333__$1);
var G__28341 = null;
var G__28342 = (0);
var G__28343 = (0);
seq__28290_28323 = G__28340;
chunk__28291_28324 = G__28341;
count__28292_28325 = G__28342;
i__28293_28326 = G__28343;
continue;
}
} else {
}
}
break;
}

var G__28344 = cljs.core.next.call(null,seq__28282__$1);
var G__28345 = null;
var G__28346 = (0);
var G__28347 = (0);
seq__28282 = G__28344;
chunk__28283 = G__28345;
count__28284 = G__28346;
i__28285 = G__28347;
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
var seq__28352_28356 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28353_28357 = null;
var count__28354_28358 = (0);
var i__28355_28359 = (0);
while(true){
if((i__28355_28359 < count__28354_28358)){
var ns_28360 = cljs.core._nth.call(null,chunk__28353_28357,i__28355_28359);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28360);

var G__28361 = seq__28352_28356;
var G__28362 = chunk__28353_28357;
var G__28363 = count__28354_28358;
var G__28364 = (i__28355_28359 + (1));
seq__28352_28356 = G__28361;
chunk__28353_28357 = G__28362;
count__28354_28358 = G__28363;
i__28355_28359 = G__28364;
continue;
} else {
var temp__4425__auto___28365 = cljs.core.seq.call(null,seq__28352_28356);
if(temp__4425__auto___28365){
var seq__28352_28366__$1 = temp__4425__auto___28365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28352_28366__$1)){
var c__17993__auto___28367 = cljs.core.chunk_first.call(null,seq__28352_28366__$1);
var G__28368 = cljs.core.chunk_rest.call(null,seq__28352_28366__$1);
var G__28369 = c__17993__auto___28367;
var G__28370 = cljs.core.count.call(null,c__17993__auto___28367);
var G__28371 = (0);
seq__28352_28356 = G__28368;
chunk__28353_28357 = G__28369;
count__28354_28358 = G__28370;
i__28355_28359 = G__28371;
continue;
} else {
var ns_28372 = cljs.core.first.call(null,seq__28352_28366__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28372);

var G__28373 = cljs.core.next.call(null,seq__28352_28366__$1);
var G__28374 = null;
var G__28375 = (0);
var G__28376 = (0);
seq__28352_28356 = G__28373;
chunk__28353_28357 = G__28374;
count__28354_28358 = G__28375;
i__28355_28359 = G__28376;
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
goog.require_figwheel_backup_ = (function (){var or__17190__auto__ = goog.require__;
if(cljs.core.truth_(or__17190__auto__)){
return or__17190__auto__;
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
var G__28377__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28378__i = 0, G__28378__a = new Array(arguments.length -  0);
while (G__28378__i < G__28378__a.length) {G__28378__a[G__28378__i] = arguments[G__28378__i + 0]; ++G__28378__i;}
  args = new cljs.core.IndexedSeq(G__28378__a,0);
} 
return G__28377__delegate.call(this,args);};
G__28377.cljs$lang$maxFixedArity = 0;
G__28377.cljs$lang$applyTo = (function (arglist__28379){
var args = cljs.core.seq(arglist__28379);
return G__28377__delegate(args);
});
G__28377.cljs$core$IFn$_invoke$arity$variadic = G__28377__delegate;
return G__28377;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28380 = cljs.core._EQ_;
var expr__28381 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28380.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28381))){
return ((function (pred__28380,expr__28381){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28383){if((e28383 instanceof Error)){
var e = e28383;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28383;

}
}})());
});
;})(pred__28380,expr__28381))
} else {
if(cljs.core.truth_(pred__28380.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28381))){
return ((function (pred__28380,expr__28381){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28380,expr__28381){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28380,expr__28381))
);

return deferred.addErrback(((function (deferred,pred__28380,expr__28381){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28380,expr__28381))
);
});
;})(pred__28380,expr__28381))
} else {
return ((function (pred__28380,expr__28381){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28380,expr__28381))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28384,callback){
var map__28387 = p__28384;
var map__28387__$1 = ((((!((map__28387 == null)))?((((map__28387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28387):map__28387);
var file_msg = map__28387__$1;
var request_url = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28387,map__28387__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28387,map__28387__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto__){
return (function (state_28411){
var state_val_28412 = (state_28411[(1)]);
if((state_val_28412 === (7))){
var inst_28407 = (state_28411[(2)]);
var state_28411__$1 = state_28411;
var statearr_28413_28433 = state_28411__$1;
(statearr_28413_28433[(2)] = inst_28407);

(statearr_28413_28433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28412 === (1))){
var state_28411__$1 = state_28411;
var statearr_28414_28434 = state_28411__$1;
(statearr_28414_28434[(2)] = null);

(statearr_28414_28434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28412 === (4))){
var inst_28391 = (state_28411[(7)]);
var inst_28391__$1 = (state_28411[(2)]);
var state_28411__$1 = (function (){var statearr_28415 = state_28411;
(statearr_28415[(7)] = inst_28391__$1);

return statearr_28415;
})();
if(cljs.core.truth_(inst_28391__$1)){
var statearr_28416_28435 = state_28411__$1;
(statearr_28416_28435[(1)] = (5));

} else {
var statearr_28417_28436 = state_28411__$1;
(statearr_28417_28436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28412 === (6))){
var state_28411__$1 = state_28411;
var statearr_28418_28437 = state_28411__$1;
(statearr_28418_28437[(2)] = null);

(statearr_28418_28437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28412 === (3))){
var inst_28409 = (state_28411[(2)]);
var state_28411__$1 = state_28411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28411__$1,inst_28409);
} else {
if((state_val_28412 === (2))){
var state_28411__$1 = state_28411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28411__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28412 === (11))){
var inst_28403 = (state_28411[(2)]);
var state_28411__$1 = (function (){var statearr_28419 = state_28411;
(statearr_28419[(8)] = inst_28403);

return statearr_28419;
})();
var statearr_28420_28438 = state_28411__$1;
(statearr_28420_28438[(2)] = null);

(statearr_28420_28438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28412 === (9))){
var inst_28397 = (state_28411[(9)]);
var inst_28395 = (state_28411[(10)]);
var inst_28399 = inst_28397.call(null,inst_28395);
var state_28411__$1 = state_28411;
var statearr_28421_28439 = state_28411__$1;
(statearr_28421_28439[(2)] = inst_28399);

(statearr_28421_28439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28412 === (5))){
var inst_28391 = (state_28411[(7)]);
var inst_28393 = figwheel.client.file_reloading.blocking_load.call(null,inst_28391);
var state_28411__$1 = state_28411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28411__$1,(8),inst_28393);
} else {
if((state_val_28412 === (10))){
var inst_28395 = (state_28411[(10)]);
var inst_28401 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28395);
var state_28411__$1 = state_28411;
var statearr_28422_28440 = state_28411__$1;
(statearr_28422_28440[(2)] = inst_28401);

(statearr_28422_28440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28412 === (8))){
var inst_28397 = (state_28411[(9)]);
var inst_28391 = (state_28411[(7)]);
var inst_28395 = (state_28411[(2)]);
var inst_28396 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28397__$1 = cljs.core.get.call(null,inst_28396,inst_28391);
var state_28411__$1 = (function (){var statearr_28423 = state_28411;
(statearr_28423[(9)] = inst_28397__$1);

(statearr_28423[(10)] = inst_28395);

return statearr_28423;
})();
if(cljs.core.truth_(inst_28397__$1)){
var statearr_28424_28441 = state_28411__$1;
(statearr_28424_28441[(1)] = (9));

} else {
var statearr_28425_28442 = state_28411__$1;
(statearr_28425_28442[(1)] = (10));

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
});})(c__21787__auto__))
;
return ((function (switch__21722__auto__,c__21787__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21723__auto__ = null;
var figwheel$client$file_reloading$state_machine__21723__auto____0 = (function (){
var statearr_28429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28429[(0)] = figwheel$client$file_reloading$state_machine__21723__auto__);

(statearr_28429[(1)] = (1));

return statearr_28429;
});
var figwheel$client$file_reloading$state_machine__21723__auto____1 = (function (state_28411){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_28411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e28430){if((e28430 instanceof Object)){
var ex__21726__auto__ = e28430;
var statearr_28431_28443 = state_28411;
(statearr_28431_28443[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28444 = state_28411;
state_28411 = G__28444;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21723__auto__ = function(state_28411){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21723__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21723__auto____1.call(this,state_28411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21723__auto____0;
figwheel$client$file_reloading$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21723__auto____1;
return figwheel$client$file_reloading$state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_28432 = f__21788__auto__.call(null);
(statearr_28432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto__);

return statearr_28432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto__))
);

return c__21787__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28445,callback){
var map__28448 = p__28445;
var map__28448__$1 = ((((!((map__28448 == null)))?((((map__28448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28448):map__28448);
var file_msg = map__28448__$1;
var namespace = cljs.core.get.call(null,map__28448__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28448,map__28448__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28448,map__28448__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28450){
var map__28453 = p__28450;
var map__28453__$1 = ((((!((map__28453 == null)))?((((map__28453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28453):map__28453);
var file_msg = map__28453__$1;
var namespace = cljs.core.get.call(null,map__28453__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__17178__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__17178__auto__){
var or__17190__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17190__auto__)){
return or__17190__auto__;
} else {
var or__17190__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17190__auto____$1)){
return or__17190__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__17178__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28455,callback){
var map__28458 = p__28455;
var map__28458__$1 = ((((!((map__28458 == null)))?((((map__28458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28458):map__28458);
var file_msg = map__28458__$1;
var request_url = cljs.core.get.call(null,map__28458__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28458__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21787__auto___28546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___28546,out){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___28546,out){
return (function (state_28528){
var state_val_28529 = (state_28528[(1)]);
if((state_val_28529 === (1))){
var inst_28506 = cljs.core.nth.call(null,files,(0),null);
var inst_28507 = cljs.core.nthnext.call(null,files,(1));
var inst_28508 = files;
var state_28528__$1 = (function (){var statearr_28530 = state_28528;
(statearr_28530[(7)] = inst_28507);

(statearr_28530[(8)] = inst_28508);

(statearr_28530[(9)] = inst_28506);

return statearr_28530;
})();
var statearr_28531_28547 = state_28528__$1;
(statearr_28531_28547[(2)] = null);

(statearr_28531_28547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (2))){
var inst_28508 = (state_28528[(8)]);
var inst_28511 = (state_28528[(10)]);
var inst_28511__$1 = cljs.core.nth.call(null,inst_28508,(0),null);
var inst_28512 = cljs.core.nthnext.call(null,inst_28508,(1));
var inst_28513 = (inst_28511__$1 == null);
var inst_28514 = cljs.core.not.call(null,inst_28513);
var state_28528__$1 = (function (){var statearr_28532 = state_28528;
(statearr_28532[(11)] = inst_28512);

(statearr_28532[(10)] = inst_28511__$1);

return statearr_28532;
})();
if(inst_28514){
var statearr_28533_28548 = state_28528__$1;
(statearr_28533_28548[(1)] = (4));

} else {
var statearr_28534_28549 = state_28528__$1;
(statearr_28534_28549[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (3))){
var inst_28526 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28528__$1,inst_28526);
} else {
if((state_val_28529 === (4))){
var inst_28511 = (state_28528[(10)]);
var inst_28516 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28511);
var state_28528__$1 = state_28528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28528__$1,(7),inst_28516);
} else {
if((state_val_28529 === (5))){
var inst_28522 = cljs.core.async.close_BANG_.call(null,out);
var state_28528__$1 = state_28528;
var statearr_28535_28550 = state_28528__$1;
(statearr_28535_28550[(2)] = inst_28522);

(statearr_28535_28550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (6))){
var inst_28524 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
var statearr_28536_28551 = state_28528__$1;
(statearr_28536_28551[(2)] = inst_28524);

(statearr_28536_28551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (7))){
var inst_28512 = (state_28528[(11)]);
var inst_28518 = (state_28528[(2)]);
var inst_28519 = cljs.core.async.put_BANG_.call(null,out,inst_28518);
var inst_28508 = inst_28512;
var state_28528__$1 = (function (){var statearr_28537 = state_28528;
(statearr_28537[(8)] = inst_28508);

(statearr_28537[(12)] = inst_28519);

return statearr_28537;
})();
var statearr_28538_28552 = state_28528__$1;
(statearr_28538_28552[(2)] = null);

(statearr_28538_28552[(1)] = (2));


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
});})(c__21787__auto___28546,out))
;
return ((function (switch__21722__auto__,c__21787__auto___28546,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21723__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21723__auto____0 = (function (){
var statearr_28542 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28542[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21723__auto__);

(statearr_28542[(1)] = (1));

return statearr_28542;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21723__auto____1 = (function (state_28528){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_28528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e28543){if((e28543 instanceof Object)){
var ex__21726__auto__ = e28543;
var statearr_28544_28553 = state_28528;
(statearr_28544_28553[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28554 = state_28528;
state_28528 = G__28554;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21723__auto__ = function(state_28528){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21723__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21723__auto____1.call(this,state_28528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21723__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21723__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___28546,out))
})();
var state__21789__auto__ = (function (){var statearr_28545 = f__21788__auto__.call(null);
(statearr_28545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___28546);

return statearr_28545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___28546,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28555,opts){
var map__28559 = p__28555;
var map__28559__$1 = ((((!((map__28559 == null)))?((((map__28559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28559):map__28559);
var eval_body__$1 = cljs.core.get.call(null,map__28559__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28559__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__17178__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17178__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17178__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28561){var e = e28561;
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
return (function (p1__28562_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28562_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28567){
var vec__28568 = p__28567;
var k = cljs.core.nth.call(null,vec__28568,(0),null);
var v = cljs.core.nth.call(null,vec__28568,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28569){
var vec__28570 = p__28569;
var k = cljs.core.nth.call(null,vec__28570,(0),null);
var v = cljs.core.nth.call(null,vec__28570,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28574,p__28575){
var map__28822 = p__28574;
var map__28822__$1 = ((((!((map__28822 == null)))?((((map__28822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28822):map__28822);
var opts = map__28822__$1;
var before_jsload = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28823 = p__28575;
var map__28823__$1 = ((((!((map__28823 == null)))?((((map__28823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28823):map__28823);
var msg = map__28823__$1;
var files = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28976){
var state_val_28977 = (state_28976[(1)]);
if((state_val_28977 === (7))){
var inst_28839 = (state_28976[(7)]);
var inst_28837 = (state_28976[(8)]);
var inst_28838 = (state_28976[(9)]);
var inst_28840 = (state_28976[(10)]);
var inst_28845 = cljs.core._nth.call(null,inst_28838,inst_28840);
var inst_28846 = figwheel.client.file_reloading.eval_body.call(null,inst_28845,opts);
var inst_28847 = (inst_28840 + (1));
var tmp28978 = inst_28839;
var tmp28979 = inst_28837;
var tmp28980 = inst_28838;
var inst_28837__$1 = tmp28979;
var inst_28838__$1 = tmp28980;
var inst_28839__$1 = tmp28978;
var inst_28840__$1 = inst_28847;
var state_28976__$1 = (function (){var statearr_28981 = state_28976;
(statearr_28981[(7)] = inst_28839__$1);

(statearr_28981[(8)] = inst_28837__$1);

(statearr_28981[(9)] = inst_28838__$1);

(statearr_28981[(10)] = inst_28840__$1);

(statearr_28981[(11)] = inst_28846);

return statearr_28981;
})();
var statearr_28982_29068 = state_28976__$1;
(statearr_28982_29068[(2)] = null);

(statearr_28982_29068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (20))){
var inst_28880 = (state_28976[(12)]);
var inst_28888 = figwheel.client.file_reloading.sort_files.call(null,inst_28880);
var state_28976__$1 = state_28976;
var statearr_28983_29069 = state_28976__$1;
(statearr_28983_29069[(2)] = inst_28888);

(statearr_28983_29069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (27))){
var state_28976__$1 = state_28976;
var statearr_28984_29070 = state_28976__$1;
(statearr_28984_29070[(2)] = null);

(statearr_28984_29070[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (1))){
var inst_28829 = (state_28976[(13)]);
var inst_28826 = before_jsload.call(null,files);
var inst_28827 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28828 = (function (){return ((function (inst_28829,inst_28826,inst_28827,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28571_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28571_SHARP_);
});
;})(inst_28829,inst_28826,inst_28827,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28829__$1 = cljs.core.filter.call(null,inst_28828,files);
var inst_28830 = cljs.core.not_empty.call(null,inst_28829__$1);
var state_28976__$1 = (function (){var statearr_28985 = state_28976;
(statearr_28985[(14)] = inst_28826);

(statearr_28985[(13)] = inst_28829__$1);

(statearr_28985[(15)] = inst_28827);

return statearr_28985;
})();
if(cljs.core.truth_(inst_28830)){
var statearr_28986_29071 = state_28976__$1;
(statearr_28986_29071[(1)] = (2));

} else {
var statearr_28987_29072 = state_28976__$1;
(statearr_28987_29072[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (24))){
var state_28976__$1 = state_28976;
var statearr_28988_29073 = state_28976__$1;
(statearr_28988_29073[(2)] = null);

(statearr_28988_29073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (39))){
var inst_28930 = (state_28976[(16)]);
var state_28976__$1 = state_28976;
var statearr_28989_29074 = state_28976__$1;
(statearr_28989_29074[(2)] = inst_28930);

(statearr_28989_29074[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (46))){
var inst_28971 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
var statearr_28990_29075 = state_28976__$1;
(statearr_28990_29075[(2)] = inst_28971);

(statearr_28990_29075[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (4))){
var inst_28874 = (state_28976[(2)]);
var inst_28875 = cljs.core.List.EMPTY;
var inst_28876 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28875);
var inst_28877 = (function (){return ((function (inst_28874,inst_28875,inst_28876,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28572_SHARP_){
var and__17178__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28572_SHARP_);
if(cljs.core.truth_(and__17178__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28572_SHARP_));
} else {
return and__17178__auto__;
}
});
;})(inst_28874,inst_28875,inst_28876,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28878 = cljs.core.filter.call(null,inst_28877,files);
var inst_28879 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28880 = cljs.core.concat.call(null,inst_28878,inst_28879);
var state_28976__$1 = (function (){var statearr_28991 = state_28976;
(statearr_28991[(17)] = inst_28874);

(statearr_28991[(18)] = inst_28876);

(statearr_28991[(12)] = inst_28880);

return statearr_28991;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28992_29076 = state_28976__$1;
(statearr_28992_29076[(1)] = (16));

} else {
var statearr_28993_29077 = state_28976__$1;
(statearr_28993_29077[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (15))){
var inst_28864 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
var statearr_28994_29078 = state_28976__$1;
(statearr_28994_29078[(2)] = inst_28864);

(statearr_28994_29078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (21))){
var inst_28890 = (state_28976[(19)]);
var inst_28890__$1 = (state_28976[(2)]);
var inst_28891 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28890__$1);
var state_28976__$1 = (function (){var statearr_28995 = state_28976;
(statearr_28995[(19)] = inst_28890__$1);

return statearr_28995;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28976__$1,(22),inst_28891);
} else {
if((state_val_28977 === (31))){
var inst_28974 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28976__$1,inst_28974);
} else {
if((state_val_28977 === (32))){
var inst_28930 = (state_28976[(16)]);
var inst_28935 = inst_28930.cljs$lang$protocol_mask$partition0$;
var inst_28936 = (inst_28935 & (64));
var inst_28937 = inst_28930.cljs$core$ISeq$;
var inst_28938 = (inst_28936) || (inst_28937);
var state_28976__$1 = state_28976;
if(cljs.core.truth_(inst_28938)){
var statearr_28996_29079 = state_28976__$1;
(statearr_28996_29079[(1)] = (35));

} else {
var statearr_28997_29080 = state_28976__$1;
(statearr_28997_29080[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (40))){
var inst_28951 = (state_28976[(20)]);
var inst_28950 = (state_28976[(2)]);
var inst_28951__$1 = cljs.core.get.call(null,inst_28950,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28952 = cljs.core.get.call(null,inst_28950,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28953 = cljs.core.not_empty.call(null,inst_28951__$1);
var state_28976__$1 = (function (){var statearr_28998 = state_28976;
(statearr_28998[(20)] = inst_28951__$1);

(statearr_28998[(21)] = inst_28952);

return statearr_28998;
})();
if(cljs.core.truth_(inst_28953)){
var statearr_28999_29081 = state_28976__$1;
(statearr_28999_29081[(1)] = (41));

} else {
var statearr_29000_29082 = state_28976__$1;
(statearr_29000_29082[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (33))){
var state_28976__$1 = state_28976;
var statearr_29001_29083 = state_28976__$1;
(statearr_29001_29083[(2)] = false);

(statearr_29001_29083[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (13))){
var inst_28850 = (state_28976[(22)]);
var inst_28854 = cljs.core.chunk_first.call(null,inst_28850);
var inst_28855 = cljs.core.chunk_rest.call(null,inst_28850);
var inst_28856 = cljs.core.count.call(null,inst_28854);
var inst_28837 = inst_28855;
var inst_28838 = inst_28854;
var inst_28839 = inst_28856;
var inst_28840 = (0);
var state_28976__$1 = (function (){var statearr_29002 = state_28976;
(statearr_29002[(7)] = inst_28839);

(statearr_29002[(8)] = inst_28837);

(statearr_29002[(9)] = inst_28838);

(statearr_29002[(10)] = inst_28840);

return statearr_29002;
})();
var statearr_29003_29084 = state_28976__$1;
(statearr_29003_29084[(2)] = null);

(statearr_29003_29084[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (22))){
var inst_28890 = (state_28976[(19)]);
var inst_28894 = (state_28976[(23)]);
var inst_28898 = (state_28976[(24)]);
var inst_28893 = (state_28976[(25)]);
var inst_28893__$1 = (state_28976[(2)]);
var inst_28894__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28893__$1);
var inst_28895 = (function (){var all_files = inst_28890;
var res_SINGLEQUOTE_ = inst_28893__$1;
var res = inst_28894__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28890,inst_28894,inst_28898,inst_28893,inst_28893__$1,inst_28894__$1,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28573_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28573_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28890,inst_28894,inst_28898,inst_28893,inst_28893__$1,inst_28894__$1,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28896 = cljs.core.filter.call(null,inst_28895,inst_28893__$1);
var inst_28897 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28898__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28897);
var inst_28899 = cljs.core.not_empty.call(null,inst_28898__$1);
var state_28976__$1 = (function (){var statearr_29004 = state_28976;
(statearr_29004[(26)] = inst_28896);

(statearr_29004[(23)] = inst_28894__$1);

(statearr_29004[(24)] = inst_28898__$1);

(statearr_29004[(25)] = inst_28893__$1);

return statearr_29004;
})();
if(cljs.core.truth_(inst_28899)){
var statearr_29005_29085 = state_28976__$1;
(statearr_29005_29085[(1)] = (23));

} else {
var statearr_29006_29086 = state_28976__$1;
(statearr_29006_29086[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (36))){
var state_28976__$1 = state_28976;
var statearr_29007_29087 = state_28976__$1;
(statearr_29007_29087[(2)] = false);

(statearr_29007_29087[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (41))){
var inst_28951 = (state_28976[(20)]);
var inst_28955 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28956 = cljs.core.map.call(null,inst_28955,inst_28951);
var inst_28957 = cljs.core.pr_str.call(null,inst_28956);
var inst_28958 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28957)].join('');
var inst_28959 = figwheel.client.utils.log.call(null,inst_28958);
var state_28976__$1 = state_28976;
var statearr_29008_29088 = state_28976__$1;
(statearr_29008_29088[(2)] = inst_28959);

(statearr_29008_29088[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (43))){
var inst_28952 = (state_28976[(21)]);
var inst_28962 = (state_28976[(2)]);
var inst_28963 = cljs.core.not_empty.call(null,inst_28952);
var state_28976__$1 = (function (){var statearr_29009 = state_28976;
(statearr_29009[(27)] = inst_28962);

return statearr_29009;
})();
if(cljs.core.truth_(inst_28963)){
var statearr_29010_29089 = state_28976__$1;
(statearr_29010_29089[(1)] = (44));

} else {
var statearr_29011_29090 = state_28976__$1;
(statearr_29011_29090[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (29))){
var inst_28890 = (state_28976[(19)]);
var inst_28896 = (state_28976[(26)]);
var inst_28894 = (state_28976[(23)]);
var inst_28898 = (state_28976[(24)]);
var inst_28893 = (state_28976[(25)]);
var inst_28930 = (state_28976[(16)]);
var inst_28926 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28929 = (function (){var all_files = inst_28890;
var res_SINGLEQUOTE_ = inst_28893;
var res = inst_28894;
var files_not_loaded = inst_28896;
var dependencies_that_loaded = inst_28898;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28890,inst_28896,inst_28894,inst_28898,inst_28893,inst_28930,inst_28926,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28928){
var map__29012 = p__28928;
var map__29012__$1 = ((((!((map__29012 == null)))?((((map__29012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29012):map__29012);
var namespace = cljs.core.get.call(null,map__29012__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28890,inst_28896,inst_28894,inst_28898,inst_28893,inst_28930,inst_28926,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28930__$1 = cljs.core.group_by.call(null,inst_28929,inst_28896);
var inst_28932 = (inst_28930__$1 == null);
var inst_28933 = cljs.core.not.call(null,inst_28932);
var state_28976__$1 = (function (){var statearr_29014 = state_28976;
(statearr_29014[(28)] = inst_28926);

(statearr_29014[(16)] = inst_28930__$1);

return statearr_29014;
})();
if(inst_28933){
var statearr_29015_29091 = state_28976__$1;
(statearr_29015_29091[(1)] = (32));

} else {
var statearr_29016_29092 = state_28976__$1;
(statearr_29016_29092[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (44))){
var inst_28952 = (state_28976[(21)]);
var inst_28965 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28952);
var inst_28966 = cljs.core.pr_str.call(null,inst_28965);
var inst_28967 = [cljs.core.str("not required: "),cljs.core.str(inst_28966)].join('');
var inst_28968 = figwheel.client.utils.log.call(null,inst_28967);
var state_28976__$1 = state_28976;
var statearr_29017_29093 = state_28976__$1;
(statearr_29017_29093[(2)] = inst_28968);

(statearr_29017_29093[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (6))){
var inst_28871 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
var statearr_29018_29094 = state_28976__$1;
(statearr_29018_29094[(2)] = inst_28871);

(statearr_29018_29094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (28))){
var inst_28896 = (state_28976[(26)]);
var inst_28923 = (state_28976[(2)]);
var inst_28924 = cljs.core.not_empty.call(null,inst_28896);
var state_28976__$1 = (function (){var statearr_29019 = state_28976;
(statearr_29019[(29)] = inst_28923);

return statearr_29019;
})();
if(cljs.core.truth_(inst_28924)){
var statearr_29020_29095 = state_28976__$1;
(statearr_29020_29095[(1)] = (29));

} else {
var statearr_29021_29096 = state_28976__$1;
(statearr_29021_29096[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (25))){
var inst_28894 = (state_28976[(23)]);
var inst_28910 = (state_28976[(2)]);
var inst_28911 = cljs.core.not_empty.call(null,inst_28894);
var state_28976__$1 = (function (){var statearr_29022 = state_28976;
(statearr_29022[(30)] = inst_28910);

return statearr_29022;
})();
if(cljs.core.truth_(inst_28911)){
var statearr_29023_29097 = state_28976__$1;
(statearr_29023_29097[(1)] = (26));

} else {
var statearr_29024_29098 = state_28976__$1;
(statearr_29024_29098[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (34))){
var inst_28945 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
if(cljs.core.truth_(inst_28945)){
var statearr_29025_29099 = state_28976__$1;
(statearr_29025_29099[(1)] = (38));

} else {
var statearr_29026_29100 = state_28976__$1;
(statearr_29026_29100[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (17))){
var state_28976__$1 = state_28976;
var statearr_29027_29101 = state_28976__$1;
(statearr_29027_29101[(2)] = recompile_dependents);

(statearr_29027_29101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (3))){
var state_28976__$1 = state_28976;
var statearr_29028_29102 = state_28976__$1;
(statearr_29028_29102[(2)] = null);

(statearr_29028_29102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (12))){
var inst_28867 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
var statearr_29029_29103 = state_28976__$1;
(statearr_29029_29103[(2)] = inst_28867);

(statearr_29029_29103[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (2))){
var inst_28829 = (state_28976[(13)]);
var inst_28836 = cljs.core.seq.call(null,inst_28829);
var inst_28837 = inst_28836;
var inst_28838 = null;
var inst_28839 = (0);
var inst_28840 = (0);
var state_28976__$1 = (function (){var statearr_29030 = state_28976;
(statearr_29030[(7)] = inst_28839);

(statearr_29030[(8)] = inst_28837);

(statearr_29030[(9)] = inst_28838);

(statearr_29030[(10)] = inst_28840);

return statearr_29030;
})();
var statearr_29031_29104 = state_28976__$1;
(statearr_29031_29104[(2)] = null);

(statearr_29031_29104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (23))){
var inst_28890 = (state_28976[(19)]);
var inst_28896 = (state_28976[(26)]);
var inst_28894 = (state_28976[(23)]);
var inst_28898 = (state_28976[(24)]);
var inst_28893 = (state_28976[(25)]);
var inst_28901 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28903 = (function (){var all_files = inst_28890;
var res_SINGLEQUOTE_ = inst_28893;
var res = inst_28894;
var files_not_loaded = inst_28896;
var dependencies_that_loaded = inst_28898;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28890,inst_28896,inst_28894,inst_28898,inst_28893,inst_28901,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28902){
var map__29032 = p__28902;
var map__29032__$1 = ((((!((map__29032 == null)))?((((map__29032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29032):map__29032);
var request_url = cljs.core.get.call(null,map__29032__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28890,inst_28896,inst_28894,inst_28898,inst_28893,inst_28901,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28904 = cljs.core.reverse.call(null,inst_28898);
var inst_28905 = cljs.core.map.call(null,inst_28903,inst_28904);
var inst_28906 = cljs.core.pr_str.call(null,inst_28905);
var inst_28907 = figwheel.client.utils.log.call(null,inst_28906);
var state_28976__$1 = (function (){var statearr_29034 = state_28976;
(statearr_29034[(31)] = inst_28901);

return statearr_29034;
})();
var statearr_29035_29105 = state_28976__$1;
(statearr_29035_29105[(2)] = inst_28907);

(statearr_29035_29105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (35))){
var state_28976__$1 = state_28976;
var statearr_29036_29106 = state_28976__$1;
(statearr_29036_29106[(2)] = true);

(statearr_29036_29106[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (19))){
var inst_28880 = (state_28976[(12)]);
var inst_28886 = figwheel.client.file_reloading.expand_files.call(null,inst_28880);
var state_28976__$1 = state_28976;
var statearr_29037_29107 = state_28976__$1;
(statearr_29037_29107[(2)] = inst_28886);

(statearr_29037_29107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (11))){
var state_28976__$1 = state_28976;
var statearr_29038_29108 = state_28976__$1;
(statearr_29038_29108[(2)] = null);

(statearr_29038_29108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (9))){
var inst_28869 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
var statearr_29039_29109 = state_28976__$1;
(statearr_29039_29109[(2)] = inst_28869);

(statearr_29039_29109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (5))){
var inst_28839 = (state_28976[(7)]);
var inst_28840 = (state_28976[(10)]);
var inst_28842 = (inst_28840 < inst_28839);
var inst_28843 = inst_28842;
var state_28976__$1 = state_28976;
if(cljs.core.truth_(inst_28843)){
var statearr_29040_29110 = state_28976__$1;
(statearr_29040_29110[(1)] = (7));

} else {
var statearr_29041_29111 = state_28976__$1;
(statearr_29041_29111[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (14))){
var inst_28850 = (state_28976[(22)]);
var inst_28859 = cljs.core.first.call(null,inst_28850);
var inst_28860 = figwheel.client.file_reloading.eval_body.call(null,inst_28859,opts);
var inst_28861 = cljs.core.next.call(null,inst_28850);
var inst_28837 = inst_28861;
var inst_28838 = null;
var inst_28839 = (0);
var inst_28840 = (0);
var state_28976__$1 = (function (){var statearr_29042 = state_28976;
(statearr_29042[(7)] = inst_28839);

(statearr_29042[(8)] = inst_28837);

(statearr_29042[(9)] = inst_28838);

(statearr_29042[(10)] = inst_28840);

(statearr_29042[(32)] = inst_28860);

return statearr_29042;
})();
var statearr_29043_29112 = state_28976__$1;
(statearr_29043_29112[(2)] = null);

(statearr_29043_29112[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (45))){
var state_28976__$1 = state_28976;
var statearr_29044_29113 = state_28976__$1;
(statearr_29044_29113[(2)] = null);

(statearr_29044_29113[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (26))){
var inst_28890 = (state_28976[(19)]);
var inst_28896 = (state_28976[(26)]);
var inst_28894 = (state_28976[(23)]);
var inst_28898 = (state_28976[(24)]);
var inst_28893 = (state_28976[(25)]);
var inst_28913 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28915 = (function (){var all_files = inst_28890;
var res_SINGLEQUOTE_ = inst_28893;
var res = inst_28894;
var files_not_loaded = inst_28896;
var dependencies_that_loaded = inst_28898;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28890,inst_28896,inst_28894,inst_28898,inst_28893,inst_28913,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28914){
var map__29045 = p__28914;
var map__29045__$1 = ((((!((map__29045 == null)))?((((map__29045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29045):map__29045);
var namespace = cljs.core.get.call(null,map__29045__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29045__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28890,inst_28896,inst_28894,inst_28898,inst_28893,inst_28913,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28916 = cljs.core.map.call(null,inst_28915,inst_28894);
var inst_28917 = cljs.core.pr_str.call(null,inst_28916);
var inst_28918 = figwheel.client.utils.log.call(null,inst_28917);
var inst_28919 = (function (){var all_files = inst_28890;
var res_SINGLEQUOTE_ = inst_28893;
var res = inst_28894;
var files_not_loaded = inst_28896;
var dependencies_that_loaded = inst_28898;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28890,inst_28896,inst_28894,inst_28898,inst_28893,inst_28913,inst_28915,inst_28916,inst_28917,inst_28918,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28890,inst_28896,inst_28894,inst_28898,inst_28893,inst_28913,inst_28915,inst_28916,inst_28917,inst_28918,state_val_28977,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28920 = setTimeout(inst_28919,(10));
var state_28976__$1 = (function (){var statearr_29047 = state_28976;
(statearr_29047[(33)] = inst_28913);

(statearr_29047[(34)] = inst_28918);

return statearr_29047;
})();
var statearr_29048_29114 = state_28976__$1;
(statearr_29048_29114[(2)] = inst_28920);

(statearr_29048_29114[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (16))){
var state_28976__$1 = state_28976;
var statearr_29049_29115 = state_28976__$1;
(statearr_29049_29115[(2)] = reload_dependents);

(statearr_29049_29115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (38))){
var inst_28930 = (state_28976[(16)]);
var inst_28947 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28930);
var state_28976__$1 = state_28976;
var statearr_29050_29116 = state_28976__$1;
(statearr_29050_29116[(2)] = inst_28947);

(statearr_29050_29116[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (30))){
var state_28976__$1 = state_28976;
var statearr_29051_29117 = state_28976__$1;
(statearr_29051_29117[(2)] = null);

(statearr_29051_29117[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (10))){
var inst_28850 = (state_28976[(22)]);
var inst_28852 = cljs.core.chunked_seq_QMARK_.call(null,inst_28850);
var state_28976__$1 = state_28976;
if(inst_28852){
var statearr_29052_29118 = state_28976__$1;
(statearr_29052_29118[(1)] = (13));

} else {
var statearr_29053_29119 = state_28976__$1;
(statearr_29053_29119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (18))){
var inst_28884 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
if(cljs.core.truth_(inst_28884)){
var statearr_29054_29120 = state_28976__$1;
(statearr_29054_29120[(1)] = (19));

} else {
var statearr_29055_29121 = state_28976__$1;
(statearr_29055_29121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (42))){
var state_28976__$1 = state_28976;
var statearr_29056_29122 = state_28976__$1;
(statearr_29056_29122[(2)] = null);

(statearr_29056_29122[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (37))){
var inst_28942 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
var statearr_29057_29123 = state_28976__$1;
(statearr_29057_29123[(2)] = inst_28942);

(statearr_29057_29123[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (8))){
var inst_28837 = (state_28976[(8)]);
var inst_28850 = (state_28976[(22)]);
var inst_28850__$1 = cljs.core.seq.call(null,inst_28837);
var state_28976__$1 = (function (){var statearr_29058 = state_28976;
(statearr_29058[(22)] = inst_28850__$1);

return statearr_29058;
})();
if(inst_28850__$1){
var statearr_29059_29124 = state_28976__$1;
(statearr_29059_29124[(1)] = (10));

} else {
var statearr_29060_29125 = state_28976__$1;
(statearr_29060_29125[(1)] = (11));

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
});})(c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21722__auto__,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21723__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21723__auto____0 = (function (){
var statearr_29064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29064[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21723__auto__);

(statearr_29064[(1)] = (1));

return statearr_29064;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21723__auto____1 = (function (state_28976){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_28976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e29065){if((e29065 instanceof Object)){
var ex__21726__auto__ = e29065;
var statearr_29066_29126 = state_28976;
(statearr_29066_29126[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29127 = state_28976;
state_28976 = G__29127;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21723__auto__ = function(state_28976){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21723__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21723__auto____1.call(this,state_28976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21723__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21723__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21789__auto__ = (function (){var statearr_29067 = f__21788__auto__.call(null);
(statearr_29067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto__);

return statearr_29067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto__,map__28822,map__28822__$1,opts,before_jsload,on_jsload,reload_dependents,map__28823,map__28823__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21787__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29130,link){
var map__29133 = p__29130;
var map__29133__$1 = ((((!((map__29133 == null)))?((((map__29133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29133):map__29133);
var file = cljs.core.get.call(null,map__29133__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29133,map__29133__$1,file){
return (function (p1__29128_SHARP_,p2__29129_SHARP_){
if(cljs.core._EQ_.call(null,p1__29128_SHARP_,p2__29129_SHARP_)){
return p1__29128_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29133,map__29133__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29139){
var map__29140 = p__29139;
var map__29140__$1 = ((((!((map__29140 == null)))?((((map__29140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29140):map__29140);
var match_length = cljs.core.get.call(null,map__29140__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29140__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29135_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29135_SHARP_);
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
var args29142 = [];
var len__18248__auto___29145 = arguments.length;
var i__18249__auto___29146 = (0);
while(true){
if((i__18249__auto___29146 < len__18248__auto___29145)){
args29142.push((arguments[i__18249__auto___29146]));

var G__29147 = (i__18249__auto___29146 + (1));
i__18249__auto___29146 = G__29147;
continue;
} else {
}
break;
}

var G__29144 = args29142.length;
switch (G__29144) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29142.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29149_SHARP_,p2__29150_SHARP_){
return cljs.core.assoc.call(null,p1__29149_SHARP_,cljs.core.get.call(null,p2__29150_SHARP_,key),p2__29150_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29151){
var map__29154 = p__29151;
var map__29154__$1 = ((((!((map__29154 == null)))?((((map__29154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29154):map__29154);
var f_data = map__29154__$1;
var file = cljs.core.get.call(null,map__29154__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29156,files_msg){
var map__29163 = p__29156;
var map__29163__$1 = ((((!((map__29163 == null)))?((((map__29163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29163):map__29163);
var opts = map__29163__$1;
var on_cssload = cljs.core.get.call(null,map__29163__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29165_29169 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29166_29170 = null;
var count__29167_29171 = (0);
var i__29168_29172 = (0);
while(true){
if((i__29168_29172 < count__29167_29171)){
var f_29173 = cljs.core._nth.call(null,chunk__29166_29170,i__29168_29172);
figwheel.client.file_reloading.reload_css_file.call(null,f_29173);

var G__29174 = seq__29165_29169;
var G__29175 = chunk__29166_29170;
var G__29176 = count__29167_29171;
var G__29177 = (i__29168_29172 + (1));
seq__29165_29169 = G__29174;
chunk__29166_29170 = G__29175;
count__29167_29171 = G__29176;
i__29168_29172 = G__29177;
continue;
} else {
var temp__4425__auto___29178 = cljs.core.seq.call(null,seq__29165_29169);
if(temp__4425__auto___29178){
var seq__29165_29179__$1 = temp__4425__auto___29178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29165_29179__$1)){
var c__17993__auto___29180 = cljs.core.chunk_first.call(null,seq__29165_29179__$1);
var G__29181 = cljs.core.chunk_rest.call(null,seq__29165_29179__$1);
var G__29182 = c__17993__auto___29180;
var G__29183 = cljs.core.count.call(null,c__17993__auto___29180);
var G__29184 = (0);
seq__29165_29169 = G__29181;
chunk__29166_29170 = G__29182;
count__29167_29171 = G__29183;
i__29168_29172 = G__29184;
continue;
} else {
var f_29185 = cljs.core.first.call(null,seq__29165_29179__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29185);

var G__29186 = cljs.core.next.call(null,seq__29165_29179__$1);
var G__29187 = null;
var G__29188 = (0);
var G__29189 = (0);
seq__29165_29169 = G__29186;
chunk__29166_29170 = G__29187;
count__29167_29171 = G__29188;
i__29168_29172 = G__29189;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29163,map__29163__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29163,map__29163__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map