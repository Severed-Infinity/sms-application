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
var or__17191__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17191__auto__){
return or__17191__auto__;
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
var or__17191__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31064_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31064_SHARP_));
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
var seq__31069 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31070 = null;
var count__31071 = (0);
var i__31072 = (0);
while(true){
if((i__31072 < count__31071)){
var n = cljs.core._nth.call(null,chunk__31070,i__31072);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31073 = seq__31069;
var G__31074 = chunk__31070;
var G__31075 = count__31071;
var G__31076 = (i__31072 + (1));
seq__31069 = G__31073;
chunk__31070 = G__31074;
count__31071 = G__31075;
i__31072 = G__31076;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31069);
if(temp__4425__auto__){
var seq__31069__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31069__$1)){
var c__17994__auto__ = cljs.core.chunk_first.call(null,seq__31069__$1);
var G__31077 = cljs.core.chunk_rest.call(null,seq__31069__$1);
var G__31078 = c__17994__auto__;
var G__31079 = cljs.core.count.call(null,c__17994__auto__);
var G__31080 = (0);
seq__31069 = G__31077;
chunk__31070 = G__31078;
count__31071 = G__31079;
i__31072 = G__31080;
continue;
} else {
var n = cljs.core.first.call(null,seq__31069__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31081 = cljs.core.next.call(null,seq__31069__$1);
var G__31082 = null;
var G__31083 = (0);
var G__31084 = (0);
seq__31069 = G__31081;
chunk__31070 = G__31082;
count__31071 = G__31083;
i__31072 = G__31084;
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

var seq__31123_31130 = cljs.core.seq.call(null,deps);
var chunk__31124_31131 = null;
var count__31125_31132 = (0);
var i__31126_31133 = (0);
while(true){
if((i__31126_31133 < count__31125_31132)){
var dep_31134 = cljs.core._nth.call(null,chunk__31124_31131,i__31126_31133);
topo_sort_helper_STAR_.call(null,dep_31134,(depth + (1)),state);

var G__31135 = seq__31123_31130;
var G__31136 = chunk__31124_31131;
var G__31137 = count__31125_31132;
var G__31138 = (i__31126_31133 + (1));
seq__31123_31130 = G__31135;
chunk__31124_31131 = G__31136;
count__31125_31132 = G__31137;
i__31126_31133 = G__31138;
continue;
} else {
var temp__4425__auto___31139 = cljs.core.seq.call(null,seq__31123_31130);
if(temp__4425__auto___31139){
var seq__31123_31140__$1 = temp__4425__auto___31139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31123_31140__$1)){
var c__17994__auto___31141 = cljs.core.chunk_first.call(null,seq__31123_31140__$1);
var G__31142 = cljs.core.chunk_rest.call(null,seq__31123_31140__$1);
var G__31143 = c__17994__auto___31141;
var G__31144 = cljs.core.count.call(null,c__17994__auto___31141);
var G__31145 = (0);
seq__31123_31130 = G__31142;
chunk__31124_31131 = G__31143;
count__31125_31132 = G__31144;
i__31126_31133 = G__31145;
continue;
} else {
var dep_31146 = cljs.core.first.call(null,seq__31123_31140__$1);
topo_sort_helper_STAR_.call(null,dep_31146,(depth + (1)),state);

var G__31147 = cljs.core.next.call(null,seq__31123_31140__$1);
var G__31148 = null;
var G__31149 = (0);
var G__31150 = (0);
seq__31123_31130 = G__31147;
chunk__31124_31131 = G__31148;
count__31125_31132 = G__31149;
i__31126_31133 = G__31150;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31127){
var vec__31129 = p__31127;
var x = cljs.core.nth.call(null,vec__31129,(0),null);
var xs = cljs.core.nthnext.call(null,vec__31129,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31129,x,xs,get_deps__$1){
return (function (p1__31085_SHARP_){
return clojure.set.difference.call(null,p1__31085_SHARP_,x);
});})(vec__31129,x,xs,get_deps__$1))
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
var seq__31163 = cljs.core.seq.call(null,provides);
var chunk__31164 = null;
var count__31165 = (0);
var i__31166 = (0);
while(true){
if((i__31166 < count__31165)){
var prov = cljs.core._nth.call(null,chunk__31164,i__31166);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31167_31175 = cljs.core.seq.call(null,requires);
var chunk__31168_31176 = null;
var count__31169_31177 = (0);
var i__31170_31178 = (0);
while(true){
if((i__31170_31178 < count__31169_31177)){
var req_31179 = cljs.core._nth.call(null,chunk__31168_31176,i__31170_31178);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31179,prov);

var G__31180 = seq__31167_31175;
var G__31181 = chunk__31168_31176;
var G__31182 = count__31169_31177;
var G__31183 = (i__31170_31178 + (1));
seq__31167_31175 = G__31180;
chunk__31168_31176 = G__31181;
count__31169_31177 = G__31182;
i__31170_31178 = G__31183;
continue;
} else {
var temp__4425__auto___31184 = cljs.core.seq.call(null,seq__31167_31175);
if(temp__4425__auto___31184){
var seq__31167_31185__$1 = temp__4425__auto___31184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31167_31185__$1)){
var c__17994__auto___31186 = cljs.core.chunk_first.call(null,seq__31167_31185__$1);
var G__31187 = cljs.core.chunk_rest.call(null,seq__31167_31185__$1);
var G__31188 = c__17994__auto___31186;
var G__31189 = cljs.core.count.call(null,c__17994__auto___31186);
var G__31190 = (0);
seq__31167_31175 = G__31187;
chunk__31168_31176 = G__31188;
count__31169_31177 = G__31189;
i__31170_31178 = G__31190;
continue;
} else {
var req_31191 = cljs.core.first.call(null,seq__31167_31185__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31191,prov);

var G__31192 = cljs.core.next.call(null,seq__31167_31185__$1);
var G__31193 = null;
var G__31194 = (0);
var G__31195 = (0);
seq__31167_31175 = G__31192;
chunk__31168_31176 = G__31193;
count__31169_31177 = G__31194;
i__31170_31178 = G__31195;
continue;
}
} else {
}
}
break;
}

var G__31196 = seq__31163;
var G__31197 = chunk__31164;
var G__31198 = count__31165;
var G__31199 = (i__31166 + (1));
seq__31163 = G__31196;
chunk__31164 = G__31197;
count__31165 = G__31198;
i__31166 = G__31199;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31163);
if(temp__4425__auto__){
var seq__31163__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31163__$1)){
var c__17994__auto__ = cljs.core.chunk_first.call(null,seq__31163__$1);
var G__31200 = cljs.core.chunk_rest.call(null,seq__31163__$1);
var G__31201 = c__17994__auto__;
var G__31202 = cljs.core.count.call(null,c__17994__auto__);
var G__31203 = (0);
seq__31163 = G__31200;
chunk__31164 = G__31201;
count__31165 = G__31202;
i__31166 = G__31203;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31163__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31171_31204 = cljs.core.seq.call(null,requires);
var chunk__31172_31205 = null;
var count__31173_31206 = (0);
var i__31174_31207 = (0);
while(true){
if((i__31174_31207 < count__31173_31206)){
var req_31208 = cljs.core._nth.call(null,chunk__31172_31205,i__31174_31207);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31208,prov);

var G__31209 = seq__31171_31204;
var G__31210 = chunk__31172_31205;
var G__31211 = count__31173_31206;
var G__31212 = (i__31174_31207 + (1));
seq__31171_31204 = G__31209;
chunk__31172_31205 = G__31210;
count__31173_31206 = G__31211;
i__31174_31207 = G__31212;
continue;
} else {
var temp__4425__auto___31213__$1 = cljs.core.seq.call(null,seq__31171_31204);
if(temp__4425__auto___31213__$1){
var seq__31171_31214__$1 = temp__4425__auto___31213__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31171_31214__$1)){
var c__17994__auto___31215 = cljs.core.chunk_first.call(null,seq__31171_31214__$1);
var G__31216 = cljs.core.chunk_rest.call(null,seq__31171_31214__$1);
var G__31217 = c__17994__auto___31215;
var G__31218 = cljs.core.count.call(null,c__17994__auto___31215);
var G__31219 = (0);
seq__31171_31204 = G__31216;
chunk__31172_31205 = G__31217;
count__31173_31206 = G__31218;
i__31174_31207 = G__31219;
continue;
} else {
var req_31220 = cljs.core.first.call(null,seq__31171_31214__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31220,prov);

var G__31221 = cljs.core.next.call(null,seq__31171_31214__$1);
var G__31222 = null;
var G__31223 = (0);
var G__31224 = (0);
seq__31171_31204 = G__31221;
chunk__31172_31205 = G__31222;
count__31173_31206 = G__31223;
i__31174_31207 = G__31224;
continue;
}
} else {
}
}
break;
}

var G__31225 = cljs.core.next.call(null,seq__31163__$1);
var G__31226 = null;
var G__31227 = (0);
var G__31228 = (0);
seq__31163 = G__31225;
chunk__31164 = G__31226;
count__31165 = G__31227;
i__31166 = G__31228;
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
var seq__31233_31237 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31234_31238 = null;
var count__31235_31239 = (0);
var i__31236_31240 = (0);
while(true){
if((i__31236_31240 < count__31235_31239)){
var ns_31241 = cljs.core._nth.call(null,chunk__31234_31238,i__31236_31240);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31241);

var G__31242 = seq__31233_31237;
var G__31243 = chunk__31234_31238;
var G__31244 = count__31235_31239;
var G__31245 = (i__31236_31240 + (1));
seq__31233_31237 = G__31242;
chunk__31234_31238 = G__31243;
count__31235_31239 = G__31244;
i__31236_31240 = G__31245;
continue;
} else {
var temp__4425__auto___31246 = cljs.core.seq.call(null,seq__31233_31237);
if(temp__4425__auto___31246){
var seq__31233_31247__$1 = temp__4425__auto___31246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31233_31247__$1)){
var c__17994__auto___31248 = cljs.core.chunk_first.call(null,seq__31233_31247__$1);
var G__31249 = cljs.core.chunk_rest.call(null,seq__31233_31247__$1);
var G__31250 = c__17994__auto___31248;
var G__31251 = cljs.core.count.call(null,c__17994__auto___31248);
var G__31252 = (0);
seq__31233_31237 = G__31249;
chunk__31234_31238 = G__31250;
count__31235_31239 = G__31251;
i__31236_31240 = G__31252;
continue;
} else {
var ns_31253 = cljs.core.first.call(null,seq__31233_31247__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31253);

var G__31254 = cljs.core.next.call(null,seq__31233_31247__$1);
var G__31255 = null;
var G__31256 = (0);
var G__31257 = (0);
seq__31233_31237 = G__31254;
chunk__31234_31238 = G__31255;
count__31235_31239 = G__31256;
i__31236_31240 = G__31257;
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
goog.require_figwheel_backup_ = (function (){var or__17191__auto__ = goog.require__;
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
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
var G__31258__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31259__i = 0, G__31259__a = new Array(arguments.length -  0);
while (G__31259__i < G__31259__a.length) {G__31259__a[G__31259__i] = arguments[G__31259__i + 0]; ++G__31259__i;}
  args = new cljs.core.IndexedSeq(G__31259__a,0);
} 
return G__31258__delegate.call(this,args);};
G__31258.cljs$lang$maxFixedArity = 0;
G__31258.cljs$lang$applyTo = (function (arglist__31260){
var args = cljs.core.seq(arglist__31260);
return G__31258__delegate(args);
});
G__31258.cljs$core$IFn$_invoke$arity$variadic = G__31258__delegate;
return G__31258;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31261 = cljs.core._EQ_;
var expr__31262 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31261.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31262))){
return ((function (pred__31261,expr__31262){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31264){if((e31264 instanceof Error)){
var e = e31264;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31264;

}
}})());
});
;})(pred__31261,expr__31262))
} else {
if(cljs.core.truth_(pred__31261.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31262))){
return ((function (pred__31261,expr__31262){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__31261,expr__31262){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31261,expr__31262))
);

return deferred.addErrback(((function (deferred,pred__31261,expr__31262){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31261,expr__31262))
);
});
;})(pred__31261,expr__31262))
} else {
return ((function (pred__31261,expr__31262){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31261,expr__31262))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31265,callback){
var map__31268 = p__31265;
var map__31268__$1 = ((((!((map__31268 == null)))?((((map__31268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31268):map__31268);
var file_msg = map__31268__$1;
var request_url = cljs.core.get.call(null,map__31268__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31268,map__31268__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31268,map__31268__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21877__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto__){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto__){
return (function (state_31292){
var state_val_31293 = (state_31292[(1)]);
if((state_val_31293 === (7))){
var inst_31288 = (state_31292[(2)]);
var state_31292__$1 = state_31292;
var statearr_31294_31314 = state_31292__$1;
(statearr_31294_31314[(2)] = inst_31288);

(statearr_31294_31314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (1))){
var state_31292__$1 = state_31292;
var statearr_31295_31315 = state_31292__$1;
(statearr_31295_31315[(2)] = null);

(statearr_31295_31315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (4))){
var inst_31272 = (state_31292[(7)]);
var inst_31272__$1 = (state_31292[(2)]);
var state_31292__$1 = (function (){var statearr_31296 = state_31292;
(statearr_31296[(7)] = inst_31272__$1);

return statearr_31296;
})();
if(cljs.core.truth_(inst_31272__$1)){
var statearr_31297_31316 = state_31292__$1;
(statearr_31297_31316[(1)] = (5));

} else {
var statearr_31298_31317 = state_31292__$1;
(statearr_31298_31317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (6))){
var state_31292__$1 = state_31292;
var statearr_31299_31318 = state_31292__$1;
(statearr_31299_31318[(2)] = null);

(statearr_31299_31318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (3))){
var inst_31290 = (state_31292[(2)]);
var state_31292__$1 = state_31292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31292__$1,inst_31290);
} else {
if((state_val_31293 === (2))){
var state_31292__$1 = state_31292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31292__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31293 === (11))){
var inst_31284 = (state_31292[(2)]);
var state_31292__$1 = (function (){var statearr_31300 = state_31292;
(statearr_31300[(8)] = inst_31284);

return statearr_31300;
})();
var statearr_31301_31319 = state_31292__$1;
(statearr_31301_31319[(2)] = null);

(statearr_31301_31319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (9))){
var inst_31278 = (state_31292[(9)]);
var inst_31276 = (state_31292[(10)]);
var inst_31280 = inst_31278.call(null,inst_31276);
var state_31292__$1 = state_31292;
var statearr_31302_31320 = state_31292__$1;
(statearr_31302_31320[(2)] = inst_31280);

(statearr_31302_31320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (5))){
var inst_31272 = (state_31292[(7)]);
var inst_31274 = figwheel.client.file_reloading.blocking_load.call(null,inst_31272);
var state_31292__$1 = state_31292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31292__$1,(8),inst_31274);
} else {
if((state_val_31293 === (10))){
var inst_31276 = (state_31292[(10)]);
var inst_31282 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31276);
var state_31292__$1 = state_31292;
var statearr_31303_31321 = state_31292__$1;
(statearr_31303_31321[(2)] = inst_31282);

(statearr_31303_31321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (8))){
var inst_31278 = (state_31292[(9)]);
var inst_31272 = (state_31292[(7)]);
var inst_31276 = (state_31292[(2)]);
var inst_31277 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31278__$1 = cljs.core.get.call(null,inst_31277,inst_31272);
var state_31292__$1 = (function (){var statearr_31304 = state_31292;
(statearr_31304[(9)] = inst_31278__$1);

(statearr_31304[(10)] = inst_31276);

return statearr_31304;
})();
if(cljs.core.truth_(inst_31278__$1)){
var statearr_31305_31322 = state_31292__$1;
(statearr_31305_31322[(1)] = (9));

} else {
var statearr_31306_31323 = state_31292__$1;
(statearr_31306_31323[(1)] = (10));

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
});})(c__21877__auto__))
;
return ((function (switch__21812__auto__,c__21877__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21813__auto__ = null;
var figwheel$client$file_reloading$state_machine__21813__auto____0 = (function (){
var statearr_31310 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31310[(0)] = figwheel$client$file_reloading$state_machine__21813__auto__);

(statearr_31310[(1)] = (1));

return statearr_31310;
});
var figwheel$client$file_reloading$state_machine__21813__auto____1 = (function (state_31292){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_31292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e31311){if((e31311 instanceof Object)){
var ex__21816__auto__ = e31311;
var statearr_31312_31324 = state_31292;
(statearr_31312_31324[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31325 = state_31292;
state_31292 = G__31325;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21813__auto__ = function(state_31292){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21813__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21813__auto____1.call(this,state_31292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21813__auto____0;
figwheel$client$file_reloading$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21813__auto____1;
return figwheel$client$file_reloading$state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto__))
})();
var state__21879__auto__ = (function (){var statearr_31313 = f__21878__auto__.call(null);
(statearr_31313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto__);

return statearr_31313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto__))
);

return c__21877__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31326,callback){
var map__31329 = p__31326;
var map__31329__$1 = ((((!((map__31329 == null)))?((((map__31329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31329):map__31329);
var file_msg = map__31329__$1;
var namespace = cljs.core.get.call(null,map__31329__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31329,map__31329__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31329,map__31329__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31331){
var map__31334 = p__31331;
var map__31334__$1 = ((((!((map__31334 == null)))?((((map__31334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31334):map__31334);
var file_msg = map__31334__$1;
var namespace = cljs.core.get.call(null,map__31334__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__17179__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__17179__auto__){
var or__17191__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
var or__17191__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17191__auto____$1)){
return or__17191__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__17179__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31336,callback){
var map__31339 = p__31336;
var map__31339__$1 = ((((!((map__31339 == null)))?((((map__31339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31339):map__31339);
var file_msg = map__31339__$1;
var request_url = cljs.core.get.call(null,map__31339__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31339__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21877__auto___31427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___31427,out){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___31427,out){
return (function (state_31409){
var state_val_31410 = (state_31409[(1)]);
if((state_val_31410 === (1))){
var inst_31387 = cljs.core.nth.call(null,files,(0),null);
var inst_31388 = cljs.core.nthnext.call(null,files,(1));
var inst_31389 = files;
var state_31409__$1 = (function (){var statearr_31411 = state_31409;
(statearr_31411[(7)] = inst_31387);

(statearr_31411[(8)] = inst_31388);

(statearr_31411[(9)] = inst_31389);

return statearr_31411;
})();
var statearr_31412_31428 = state_31409__$1;
(statearr_31412_31428[(2)] = null);

(statearr_31412_31428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (2))){
var inst_31392 = (state_31409[(10)]);
var inst_31389 = (state_31409[(9)]);
var inst_31392__$1 = cljs.core.nth.call(null,inst_31389,(0),null);
var inst_31393 = cljs.core.nthnext.call(null,inst_31389,(1));
var inst_31394 = (inst_31392__$1 == null);
var inst_31395 = cljs.core.not.call(null,inst_31394);
var state_31409__$1 = (function (){var statearr_31413 = state_31409;
(statearr_31413[(10)] = inst_31392__$1);

(statearr_31413[(11)] = inst_31393);

return statearr_31413;
})();
if(inst_31395){
var statearr_31414_31429 = state_31409__$1;
(statearr_31414_31429[(1)] = (4));

} else {
var statearr_31415_31430 = state_31409__$1;
(statearr_31415_31430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (3))){
var inst_31407 = (state_31409[(2)]);
var state_31409__$1 = state_31409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31409__$1,inst_31407);
} else {
if((state_val_31410 === (4))){
var inst_31392 = (state_31409[(10)]);
var inst_31397 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31392);
var state_31409__$1 = state_31409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31409__$1,(7),inst_31397);
} else {
if((state_val_31410 === (5))){
var inst_31403 = cljs.core.async.close_BANG_.call(null,out);
var state_31409__$1 = state_31409;
var statearr_31416_31431 = state_31409__$1;
(statearr_31416_31431[(2)] = inst_31403);

(statearr_31416_31431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (6))){
var inst_31405 = (state_31409[(2)]);
var state_31409__$1 = state_31409;
var statearr_31417_31432 = state_31409__$1;
(statearr_31417_31432[(2)] = inst_31405);

(statearr_31417_31432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31410 === (7))){
var inst_31393 = (state_31409[(11)]);
var inst_31399 = (state_31409[(2)]);
var inst_31400 = cljs.core.async.put_BANG_.call(null,out,inst_31399);
var inst_31389 = inst_31393;
var state_31409__$1 = (function (){var statearr_31418 = state_31409;
(statearr_31418[(9)] = inst_31389);

(statearr_31418[(12)] = inst_31400);

return statearr_31418;
})();
var statearr_31419_31433 = state_31409__$1;
(statearr_31419_31433[(2)] = null);

(statearr_31419_31433[(1)] = (2));


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
});})(c__21877__auto___31427,out))
;
return ((function (switch__21812__auto__,c__21877__auto___31427,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21813__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21813__auto____0 = (function (){
var statearr_31423 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31423[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21813__auto__);

(statearr_31423[(1)] = (1));

return statearr_31423;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21813__auto____1 = (function (state_31409){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_31409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e31424){if((e31424 instanceof Object)){
var ex__21816__auto__ = e31424;
var statearr_31425_31434 = state_31409;
(statearr_31425_31434[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31435 = state_31409;
state_31409 = G__31435;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21813__auto__ = function(state_31409){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21813__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21813__auto____1.call(this,state_31409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21813__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21813__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___31427,out))
})();
var state__21879__auto__ = (function (){var statearr_31426 = f__21878__auto__.call(null);
(statearr_31426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___31427);

return statearr_31426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___31427,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31436,opts){
var map__31440 = p__31436;
var map__31440__$1 = ((((!((map__31440 == null)))?((((map__31440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31440):map__31440);
var eval_body__$1 = cljs.core.get.call(null,map__31440__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31440__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__17179__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17179__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17179__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31442){var e = e31442;
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
return (function (p1__31443_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31443_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__31448){
var vec__31449 = p__31448;
var k = cljs.core.nth.call(null,vec__31449,(0),null);
var v = cljs.core.nth.call(null,vec__31449,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31450){
var vec__31451 = p__31450;
var k = cljs.core.nth.call(null,vec__31451,(0),null);
var v = cljs.core.nth.call(null,vec__31451,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31455,p__31456){
var map__31703 = p__31455;
var map__31703__$1 = ((((!((map__31703 == null)))?((((map__31703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31703):map__31703);
var opts = map__31703__$1;
var before_jsload = cljs.core.get.call(null,map__31703__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31703__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31703__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31704 = p__31456;
var map__31704__$1 = ((((!((map__31704 == null)))?((((map__31704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31704):map__31704);
var msg = map__31704__$1;
var files = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21877__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31857){
var state_val_31858 = (state_31857[(1)]);
if((state_val_31858 === (7))){
var inst_31720 = (state_31857[(7)]);
var inst_31721 = (state_31857[(8)]);
var inst_31718 = (state_31857[(9)]);
var inst_31719 = (state_31857[(10)]);
var inst_31726 = cljs.core._nth.call(null,inst_31719,inst_31721);
var inst_31727 = figwheel.client.file_reloading.eval_body.call(null,inst_31726,opts);
var inst_31728 = (inst_31721 + (1));
var tmp31859 = inst_31720;
var tmp31860 = inst_31718;
var tmp31861 = inst_31719;
var inst_31718__$1 = tmp31860;
var inst_31719__$1 = tmp31861;
var inst_31720__$1 = tmp31859;
var inst_31721__$1 = inst_31728;
var state_31857__$1 = (function (){var statearr_31862 = state_31857;
(statearr_31862[(7)] = inst_31720__$1);

(statearr_31862[(8)] = inst_31721__$1);

(statearr_31862[(11)] = inst_31727);

(statearr_31862[(9)] = inst_31718__$1);

(statearr_31862[(10)] = inst_31719__$1);

return statearr_31862;
})();
var statearr_31863_31949 = state_31857__$1;
(statearr_31863_31949[(2)] = null);

(statearr_31863_31949[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (20))){
var inst_31761 = (state_31857[(12)]);
var inst_31769 = figwheel.client.file_reloading.sort_files.call(null,inst_31761);
var state_31857__$1 = state_31857;
var statearr_31864_31950 = state_31857__$1;
(statearr_31864_31950[(2)] = inst_31769);

(statearr_31864_31950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (27))){
var state_31857__$1 = state_31857;
var statearr_31865_31951 = state_31857__$1;
(statearr_31865_31951[(2)] = null);

(statearr_31865_31951[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (1))){
var inst_31710 = (state_31857[(13)]);
var inst_31707 = before_jsload.call(null,files);
var inst_31708 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31709 = (function (){return ((function (inst_31710,inst_31707,inst_31708,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31452_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31452_SHARP_);
});
;})(inst_31710,inst_31707,inst_31708,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31710__$1 = cljs.core.filter.call(null,inst_31709,files);
var inst_31711 = cljs.core.not_empty.call(null,inst_31710__$1);
var state_31857__$1 = (function (){var statearr_31866 = state_31857;
(statearr_31866[(14)] = inst_31707);

(statearr_31866[(15)] = inst_31708);

(statearr_31866[(13)] = inst_31710__$1);

return statearr_31866;
})();
if(cljs.core.truth_(inst_31711)){
var statearr_31867_31952 = state_31857__$1;
(statearr_31867_31952[(1)] = (2));

} else {
var statearr_31868_31953 = state_31857__$1;
(statearr_31868_31953[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (24))){
var state_31857__$1 = state_31857;
var statearr_31869_31954 = state_31857__$1;
(statearr_31869_31954[(2)] = null);

(statearr_31869_31954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (39))){
var inst_31811 = (state_31857[(16)]);
var state_31857__$1 = state_31857;
var statearr_31870_31955 = state_31857__$1;
(statearr_31870_31955[(2)] = inst_31811);

(statearr_31870_31955[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (46))){
var inst_31852 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
var statearr_31871_31956 = state_31857__$1;
(statearr_31871_31956[(2)] = inst_31852);

(statearr_31871_31956[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (4))){
var inst_31755 = (state_31857[(2)]);
var inst_31756 = cljs.core.List.EMPTY;
var inst_31757 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31756);
var inst_31758 = (function (){return ((function (inst_31755,inst_31756,inst_31757,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31453_SHARP_){
var and__17179__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31453_SHARP_);
if(cljs.core.truth_(and__17179__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31453_SHARP_));
} else {
return and__17179__auto__;
}
});
;})(inst_31755,inst_31756,inst_31757,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31759 = cljs.core.filter.call(null,inst_31758,files);
var inst_31760 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31761 = cljs.core.concat.call(null,inst_31759,inst_31760);
var state_31857__$1 = (function (){var statearr_31872 = state_31857;
(statearr_31872[(12)] = inst_31761);

(statearr_31872[(17)] = inst_31755);

(statearr_31872[(18)] = inst_31757);

return statearr_31872;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31873_31957 = state_31857__$1;
(statearr_31873_31957[(1)] = (16));

} else {
var statearr_31874_31958 = state_31857__$1;
(statearr_31874_31958[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (15))){
var inst_31745 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
var statearr_31875_31959 = state_31857__$1;
(statearr_31875_31959[(2)] = inst_31745);

(statearr_31875_31959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (21))){
var inst_31771 = (state_31857[(19)]);
var inst_31771__$1 = (state_31857[(2)]);
var inst_31772 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31771__$1);
var state_31857__$1 = (function (){var statearr_31876 = state_31857;
(statearr_31876[(19)] = inst_31771__$1);

return statearr_31876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31857__$1,(22),inst_31772);
} else {
if((state_val_31858 === (31))){
var inst_31855 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31857__$1,inst_31855);
} else {
if((state_val_31858 === (32))){
var inst_31811 = (state_31857[(16)]);
var inst_31816 = inst_31811.cljs$lang$protocol_mask$partition0$;
var inst_31817 = (inst_31816 & (64));
var inst_31818 = inst_31811.cljs$core$ISeq$;
var inst_31819 = (inst_31817) || (inst_31818);
var state_31857__$1 = state_31857;
if(cljs.core.truth_(inst_31819)){
var statearr_31877_31960 = state_31857__$1;
(statearr_31877_31960[(1)] = (35));

} else {
var statearr_31878_31961 = state_31857__$1;
(statearr_31878_31961[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (40))){
var inst_31832 = (state_31857[(20)]);
var inst_31831 = (state_31857[(2)]);
var inst_31832__$1 = cljs.core.get.call(null,inst_31831,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31833 = cljs.core.get.call(null,inst_31831,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31834 = cljs.core.not_empty.call(null,inst_31832__$1);
var state_31857__$1 = (function (){var statearr_31879 = state_31857;
(statearr_31879[(20)] = inst_31832__$1);

(statearr_31879[(21)] = inst_31833);

return statearr_31879;
})();
if(cljs.core.truth_(inst_31834)){
var statearr_31880_31962 = state_31857__$1;
(statearr_31880_31962[(1)] = (41));

} else {
var statearr_31881_31963 = state_31857__$1;
(statearr_31881_31963[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (33))){
var state_31857__$1 = state_31857;
var statearr_31882_31964 = state_31857__$1;
(statearr_31882_31964[(2)] = false);

(statearr_31882_31964[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (13))){
var inst_31731 = (state_31857[(22)]);
var inst_31735 = cljs.core.chunk_first.call(null,inst_31731);
var inst_31736 = cljs.core.chunk_rest.call(null,inst_31731);
var inst_31737 = cljs.core.count.call(null,inst_31735);
var inst_31718 = inst_31736;
var inst_31719 = inst_31735;
var inst_31720 = inst_31737;
var inst_31721 = (0);
var state_31857__$1 = (function (){var statearr_31883 = state_31857;
(statearr_31883[(7)] = inst_31720);

(statearr_31883[(8)] = inst_31721);

(statearr_31883[(9)] = inst_31718);

(statearr_31883[(10)] = inst_31719);

return statearr_31883;
})();
var statearr_31884_31965 = state_31857__$1;
(statearr_31884_31965[(2)] = null);

(statearr_31884_31965[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (22))){
var inst_31779 = (state_31857[(23)]);
var inst_31774 = (state_31857[(24)]);
var inst_31775 = (state_31857[(25)]);
var inst_31771 = (state_31857[(19)]);
var inst_31774__$1 = (state_31857[(2)]);
var inst_31775__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31774__$1);
var inst_31776 = (function (){var all_files = inst_31771;
var res_SINGLEQUOTE_ = inst_31774__$1;
var res = inst_31775__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31779,inst_31774,inst_31775,inst_31771,inst_31774__$1,inst_31775__$1,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31454_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31454_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31779,inst_31774,inst_31775,inst_31771,inst_31774__$1,inst_31775__$1,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31777 = cljs.core.filter.call(null,inst_31776,inst_31774__$1);
var inst_31778 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31779__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31778);
var inst_31780 = cljs.core.not_empty.call(null,inst_31779__$1);
var state_31857__$1 = (function (){var statearr_31885 = state_31857;
(statearr_31885[(23)] = inst_31779__$1);

(statearr_31885[(24)] = inst_31774__$1);

(statearr_31885[(26)] = inst_31777);

(statearr_31885[(25)] = inst_31775__$1);

return statearr_31885;
})();
if(cljs.core.truth_(inst_31780)){
var statearr_31886_31966 = state_31857__$1;
(statearr_31886_31966[(1)] = (23));

} else {
var statearr_31887_31967 = state_31857__$1;
(statearr_31887_31967[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (36))){
var state_31857__$1 = state_31857;
var statearr_31888_31968 = state_31857__$1;
(statearr_31888_31968[(2)] = false);

(statearr_31888_31968[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (41))){
var inst_31832 = (state_31857[(20)]);
var inst_31836 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31837 = cljs.core.map.call(null,inst_31836,inst_31832);
var inst_31838 = cljs.core.pr_str.call(null,inst_31837);
var inst_31839 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31838)].join('');
var inst_31840 = figwheel.client.utils.log.call(null,inst_31839);
var state_31857__$1 = state_31857;
var statearr_31889_31969 = state_31857__$1;
(statearr_31889_31969[(2)] = inst_31840);

(statearr_31889_31969[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (43))){
var inst_31833 = (state_31857[(21)]);
var inst_31843 = (state_31857[(2)]);
var inst_31844 = cljs.core.not_empty.call(null,inst_31833);
var state_31857__$1 = (function (){var statearr_31890 = state_31857;
(statearr_31890[(27)] = inst_31843);

return statearr_31890;
})();
if(cljs.core.truth_(inst_31844)){
var statearr_31891_31970 = state_31857__$1;
(statearr_31891_31970[(1)] = (44));

} else {
var statearr_31892_31971 = state_31857__$1;
(statearr_31892_31971[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (29))){
var inst_31779 = (state_31857[(23)]);
var inst_31811 = (state_31857[(16)]);
var inst_31774 = (state_31857[(24)]);
var inst_31777 = (state_31857[(26)]);
var inst_31775 = (state_31857[(25)]);
var inst_31771 = (state_31857[(19)]);
var inst_31807 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31810 = (function (){var all_files = inst_31771;
var res_SINGLEQUOTE_ = inst_31774;
var res = inst_31775;
var files_not_loaded = inst_31777;
var dependencies_that_loaded = inst_31779;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31779,inst_31811,inst_31774,inst_31777,inst_31775,inst_31771,inst_31807,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31809){
var map__31893 = p__31809;
var map__31893__$1 = ((((!((map__31893 == null)))?((((map__31893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31893):map__31893);
var namespace = cljs.core.get.call(null,map__31893__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31779,inst_31811,inst_31774,inst_31777,inst_31775,inst_31771,inst_31807,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31811__$1 = cljs.core.group_by.call(null,inst_31810,inst_31777);
var inst_31813 = (inst_31811__$1 == null);
var inst_31814 = cljs.core.not.call(null,inst_31813);
var state_31857__$1 = (function (){var statearr_31895 = state_31857;
(statearr_31895[(16)] = inst_31811__$1);

(statearr_31895[(28)] = inst_31807);

return statearr_31895;
})();
if(inst_31814){
var statearr_31896_31972 = state_31857__$1;
(statearr_31896_31972[(1)] = (32));

} else {
var statearr_31897_31973 = state_31857__$1;
(statearr_31897_31973[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (44))){
var inst_31833 = (state_31857[(21)]);
var inst_31846 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31833);
var inst_31847 = cljs.core.pr_str.call(null,inst_31846);
var inst_31848 = [cljs.core.str("not required: "),cljs.core.str(inst_31847)].join('');
var inst_31849 = figwheel.client.utils.log.call(null,inst_31848);
var state_31857__$1 = state_31857;
var statearr_31898_31974 = state_31857__$1;
(statearr_31898_31974[(2)] = inst_31849);

(statearr_31898_31974[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (6))){
var inst_31752 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
var statearr_31899_31975 = state_31857__$1;
(statearr_31899_31975[(2)] = inst_31752);

(statearr_31899_31975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (28))){
var inst_31777 = (state_31857[(26)]);
var inst_31804 = (state_31857[(2)]);
var inst_31805 = cljs.core.not_empty.call(null,inst_31777);
var state_31857__$1 = (function (){var statearr_31900 = state_31857;
(statearr_31900[(29)] = inst_31804);

return statearr_31900;
})();
if(cljs.core.truth_(inst_31805)){
var statearr_31901_31976 = state_31857__$1;
(statearr_31901_31976[(1)] = (29));

} else {
var statearr_31902_31977 = state_31857__$1;
(statearr_31902_31977[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (25))){
var inst_31775 = (state_31857[(25)]);
var inst_31791 = (state_31857[(2)]);
var inst_31792 = cljs.core.not_empty.call(null,inst_31775);
var state_31857__$1 = (function (){var statearr_31903 = state_31857;
(statearr_31903[(30)] = inst_31791);

return statearr_31903;
})();
if(cljs.core.truth_(inst_31792)){
var statearr_31904_31978 = state_31857__$1;
(statearr_31904_31978[(1)] = (26));

} else {
var statearr_31905_31979 = state_31857__$1;
(statearr_31905_31979[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (34))){
var inst_31826 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
if(cljs.core.truth_(inst_31826)){
var statearr_31906_31980 = state_31857__$1;
(statearr_31906_31980[(1)] = (38));

} else {
var statearr_31907_31981 = state_31857__$1;
(statearr_31907_31981[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (17))){
var state_31857__$1 = state_31857;
var statearr_31908_31982 = state_31857__$1;
(statearr_31908_31982[(2)] = recompile_dependents);

(statearr_31908_31982[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (3))){
var state_31857__$1 = state_31857;
var statearr_31909_31983 = state_31857__$1;
(statearr_31909_31983[(2)] = null);

(statearr_31909_31983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (12))){
var inst_31748 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
var statearr_31910_31984 = state_31857__$1;
(statearr_31910_31984[(2)] = inst_31748);

(statearr_31910_31984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (2))){
var inst_31710 = (state_31857[(13)]);
var inst_31717 = cljs.core.seq.call(null,inst_31710);
var inst_31718 = inst_31717;
var inst_31719 = null;
var inst_31720 = (0);
var inst_31721 = (0);
var state_31857__$1 = (function (){var statearr_31911 = state_31857;
(statearr_31911[(7)] = inst_31720);

(statearr_31911[(8)] = inst_31721);

(statearr_31911[(9)] = inst_31718);

(statearr_31911[(10)] = inst_31719);

return statearr_31911;
})();
var statearr_31912_31985 = state_31857__$1;
(statearr_31912_31985[(2)] = null);

(statearr_31912_31985[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (23))){
var inst_31779 = (state_31857[(23)]);
var inst_31774 = (state_31857[(24)]);
var inst_31777 = (state_31857[(26)]);
var inst_31775 = (state_31857[(25)]);
var inst_31771 = (state_31857[(19)]);
var inst_31782 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31784 = (function (){var all_files = inst_31771;
var res_SINGLEQUOTE_ = inst_31774;
var res = inst_31775;
var files_not_loaded = inst_31777;
var dependencies_that_loaded = inst_31779;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31779,inst_31774,inst_31777,inst_31775,inst_31771,inst_31782,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31783){
var map__31913 = p__31783;
var map__31913__$1 = ((((!((map__31913 == null)))?((((map__31913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31913):map__31913);
var request_url = cljs.core.get.call(null,map__31913__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31779,inst_31774,inst_31777,inst_31775,inst_31771,inst_31782,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31785 = cljs.core.reverse.call(null,inst_31779);
var inst_31786 = cljs.core.map.call(null,inst_31784,inst_31785);
var inst_31787 = cljs.core.pr_str.call(null,inst_31786);
var inst_31788 = figwheel.client.utils.log.call(null,inst_31787);
var state_31857__$1 = (function (){var statearr_31915 = state_31857;
(statearr_31915[(31)] = inst_31782);

return statearr_31915;
})();
var statearr_31916_31986 = state_31857__$1;
(statearr_31916_31986[(2)] = inst_31788);

(statearr_31916_31986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (35))){
var state_31857__$1 = state_31857;
var statearr_31917_31987 = state_31857__$1;
(statearr_31917_31987[(2)] = true);

(statearr_31917_31987[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (19))){
var inst_31761 = (state_31857[(12)]);
var inst_31767 = figwheel.client.file_reloading.expand_files.call(null,inst_31761);
var state_31857__$1 = state_31857;
var statearr_31918_31988 = state_31857__$1;
(statearr_31918_31988[(2)] = inst_31767);

(statearr_31918_31988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (11))){
var state_31857__$1 = state_31857;
var statearr_31919_31989 = state_31857__$1;
(statearr_31919_31989[(2)] = null);

(statearr_31919_31989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (9))){
var inst_31750 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
var statearr_31920_31990 = state_31857__$1;
(statearr_31920_31990[(2)] = inst_31750);

(statearr_31920_31990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (5))){
var inst_31720 = (state_31857[(7)]);
var inst_31721 = (state_31857[(8)]);
var inst_31723 = (inst_31721 < inst_31720);
var inst_31724 = inst_31723;
var state_31857__$1 = state_31857;
if(cljs.core.truth_(inst_31724)){
var statearr_31921_31991 = state_31857__$1;
(statearr_31921_31991[(1)] = (7));

} else {
var statearr_31922_31992 = state_31857__$1;
(statearr_31922_31992[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (14))){
var inst_31731 = (state_31857[(22)]);
var inst_31740 = cljs.core.first.call(null,inst_31731);
var inst_31741 = figwheel.client.file_reloading.eval_body.call(null,inst_31740,opts);
var inst_31742 = cljs.core.next.call(null,inst_31731);
var inst_31718 = inst_31742;
var inst_31719 = null;
var inst_31720 = (0);
var inst_31721 = (0);
var state_31857__$1 = (function (){var statearr_31923 = state_31857;
(statearr_31923[(7)] = inst_31720);

(statearr_31923[(32)] = inst_31741);

(statearr_31923[(8)] = inst_31721);

(statearr_31923[(9)] = inst_31718);

(statearr_31923[(10)] = inst_31719);

return statearr_31923;
})();
var statearr_31924_31993 = state_31857__$1;
(statearr_31924_31993[(2)] = null);

(statearr_31924_31993[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (45))){
var state_31857__$1 = state_31857;
var statearr_31925_31994 = state_31857__$1;
(statearr_31925_31994[(2)] = null);

(statearr_31925_31994[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (26))){
var inst_31779 = (state_31857[(23)]);
var inst_31774 = (state_31857[(24)]);
var inst_31777 = (state_31857[(26)]);
var inst_31775 = (state_31857[(25)]);
var inst_31771 = (state_31857[(19)]);
var inst_31794 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31796 = (function (){var all_files = inst_31771;
var res_SINGLEQUOTE_ = inst_31774;
var res = inst_31775;
var files_not_loaded = inst_31777;
var dependencies_that_loaded = inst_31779;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31779,inst_31774,inst_31777,inst_31775,inst_31771,inst_31794,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31795){
var map__31926 = p__31795;
var map__31926__$1 = ((((!((map__31926 == null)))?((((map__31926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31926):map__31926);
var namespace = cljs.core.get.call(null,map__31926__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31926__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31779,inst_31774,inst_31777,inst_31775,inst_31771,inst_31794,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31797 = cljs.core.map.call(null,inst_31796,inst_31775);
var inst_31798 = cljs.core.pr_str.call(null,inst_31797);
var inst_31799 = figwheel.client.utils.log.call(null,inst_31798);
var inst_31800 = (function (){var all_files = inst_31771;
var res_SINGLEQUOTE_ = inst_31774;
var res = inst_31775;
var files_not_loaded = inst_31777;
var dependencies_that_loaded = inst_31779;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31779,inst_31774,inst_31777,inst_31775,inst_31771,inst_31794,inst_31796,inst_31797,inst_31798,inst_31799,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31779,inst_31774,inst_31777,inst_31775,inst_31771,inst_31794,inst_31796,inst_31797,inst_31798,inst_31799,state_val_31858,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31801 = setTimeout(inst_31800,(10));
var state_31857__$1 = (function (){var statearr_31928 = state_31857;
(statearr_31928[(33)] = inst_31794);

(statearr_31928[(34)] = inst_31799);

return statearr_31928;
})();
var statearr_31929_31995 = state_31857__$1;
(statearr_31929_31995[(2)] = inst_31801);

(statearr_31929_31995[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (16))){
var state_31857__$1 = state_31857;
var statearr_31930_31996 = state_31857__$1;
(statearr_31930_31996[(2)] = reload_dependents);

(statearr_31930_31996[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (38))){
var inst_31811 = (state_31857[(16)]);
var inst_31828 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31811);
var state_31857__$1 = state_31857;
var statearr_31931_31997 = state_31857__$1;
(statearr_31931_31997[(2)] = inst_31828);

(statearr_31931_31997[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (30))){
var state_31857__$1 = state_31857;
var statearr_31932_31998 = state_31857__$1;
(statearr_31932_31998[(2)] = null);

(statearr_31932_31998[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (10))){
var inst_31731 = (state_31857[(22)]);
var inst_31733 = cljs.core.chunked_seq_QMARK_.call(null,inst_31731);
var state_31857__$1 = state_31857;
if(inst_31733){
var statearr_31933_31999 = state_31857__$1;
(statearr_31933_31999[(1)] = (13));

} else {
var statearr_31934_32000 = state_31857__$1;
(statearr_31934_32000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (18))){
var inst_31765 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
if(cljs.core.truth_(inst_31765)){
var statearr_31935_32001 = state_31857__$1;
(statearr_31935_32001[(1)] = (19));

} else {
var statearr_31936_32002 = state_31857__$1;
(statearr_31936_32002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (42))){
var state_31857__$1 = state_31857;
var statearr_31937_32003 = state_31857__$1;
(statearr_31937_32003[(2)] = null);

(statearr_31937_32003[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (37))){
var inst_31823 = (state_31857[(2)]);
var state_31857__$1 = state_31857;
var statearr_31938_32004 = state_31857__$1;
(statearr_31938_32004[(2)] = inst_31823);

(statearr_31938_32004[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31858 === (8))){
var inst_31731 = (state_31857[(22)]);
var inst_31718 = (state_31857[(9)]);
var inst_31731__$1 = cljs.core.seq.call(null,inst_31718);
var state_31857__$1 = (function (){var statearr_31939 = state_31857;
(statearr_31939[(22)] = inst_31731__$1);

return statearr_31939;
})();
if(inst_31731__$1){
var statearr_31940_32005 = state_31857__$1;
(statearr_31940_32005[(1)] = (10));

} else {
var statearr_31941_32006 = state_31857__$1;
(statearr_31941_32006[(1)] = (11));

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
});})(c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21812__auto__,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21813__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21813__auto____0 = (function (){
var statearr_31945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31945[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21813__auto__);

(statearr_31945[(1)] = (1));

return statearr_31945;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21813__auto____1 = (function (state_31857){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_31857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e31946){if((e31946 instanceof Object)){
var ex__21816__auto__ = e31946;
var statearr_31947_32007 = state_31857;
(statearr_31947_32007[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32008 = state_31857;
state_31857 = G__32008;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21813__auto__ = function(state_31857){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21813__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21813__auto____1.call(this,state_31857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21813__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21813__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21879__auto__ = (function (){var statearr_31948 = f__21878__auto__.call(null);
(statearr_31948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto__);

return statearr_31948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto__,map__31703,map__31703__$1,opts,before_jsload,on_jsload,reload_dependents,map__31704,map__31704__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21877__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32011,link){
var map__32014 = p__32011;
var map__32014__$1 = ((((!((map__32014 == null)))?((((map__32014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32014):map__32014);
var file = cljs.core.get.call(null,map__32014__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__32014,map__32014__$1,file){
return (function (p1__32009_SHARP_,p2__32010_SHARP_){
if(cljs.core._EQ_.call(null,p1__32009_SHARP_,p2__32010_SHARP_)){
return p1__32009_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__32014,map__32014__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32020){
var map__32021 = p__32020;
var map__32021__$1 = ((((!((map__32021 == null)))?((((map__32021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32021):map__32021);
var match_length = cljs.core.get.call(null,map__32021__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32021__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32016_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32016_SHARP_);
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
var args32023 = [];
var len__18249__auto___32026 = arguments.length;
var i__18250__auto___32027 = (0);
while(true){
if((i__18250__auto___32027 < len__18249__auto___32026)){
args32023.push((arguments[i__18250__auto___32027]));

var G__32028 = (i__18250__auto___32027 + (1));
i__18250__auto___32027 = G__32028;
continue;
} else {
}
break;
}

var G__32025 = args32023.length;
switch (G__32025) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32023.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32030_SHARP_,p2__32031_SHARP_){
return cljs.core.assoc.call(null,p1__32030_SHARP_,cljs.core.get.call(null,p2__32031_SHARP_,key),p2__32031_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32032){
var map__32035 = p__32032;
var map__32035__$1 = ((((!((map__32035 == null)))?((((map__32035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32035):map__32035);
var f_data = map__32035__$1;
var file = cljs.core.get.call(null,map__32035__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32037,files_msg){
var map__32044 = p__32037;
var map__32044__$1 = ((((!((map__32044 == null)))?((((map__32044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32044):map__32044);
var opts = map__32044__$1;
var on_cssload = cljs.core.get.call(null,map__32044__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32046_32050 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32047_32051 = null;
var count__32048_32052 = (0);
var i__32049_32053 = (0);
while(true){
if((i__32049_32053 < count__32048_32052)){
var f_32054 = cljs.core._nth.call(null,chunk__32047_32051,i__32049_32053);
figwheel.client.file_reloading.reload_css_file.call(null,f_32054);

var G__32055 = seq__32046_32050;
var G__32056 = chunk__32047_32051;
var G__32057 = count__32048_32052;
var G__32058 = (i__32049_32053 + (1));
seq__32046_32050 = G__32055;
chunk__32047_32051 = G__32056;
count__32048_32052 = G__32057;
i__32049_32053 = G__32058;
continue;
} else {
var temp__4425__auto___32059 = cljs.core.seq.call(null,seq__32046_32050);
if(temp__4425__auto___32059){
var seq__32046_32060__$1 = temp__4425__auto___32059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32046_32060__$1)){
var c__17994__auto___32061 = cljs.core.chunk_first.call(null,seq__32046_32060__$1);
var G__32062 = cljs.core.chunk_rest.call(null,seq__32046_32060__$1);
var G__32063 = c__17994__auto___32061;
var G__32064 = cljs.core.count.call(null,c__17994__auto___32061);
var G__32065 = (0);
seq__32046_32050 = G__32062;
chunk__32047_32051 = G__32063;
count__32048_32052 = G__32064;
i__32049_32053 = G__32065;
continue;
} else {
var f_32066 = cljs.core.first.call(null,seq__32046_32060__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32066);

var G__32067 = cljs.core.next.call(null,seq__32046_32060__$1);
var G__32068 = null;
var G__32069 = (0);
var G__32070 = (0);
seq__32046_32050 = G__32067;
chunk__32047_32051 = G__32068;
count__32048_32052 = G__32069;
i__32049_32053 = G__32070;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__32044,map__32044__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__32044,map__32044__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map