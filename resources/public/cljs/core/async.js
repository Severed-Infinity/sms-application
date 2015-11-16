// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async32137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32137 = (function (fn_handler,f,meta32138){
this.fn_handler = fn_handler;
this.f = f;
this.meta32138 = meta32138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32139,meta32138__$1){
var self__ = this;
var _32139__$1 = this;
return (new cljs.core.async.t_cljs$core$async32137(self__.fn_handler,self__.f,meta32138__$1));
});

cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32139){
var self__ = this;
var _32139__$1 = this;
return self__.meta32138;
});

cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta32138","meta32138",2125257412,null)], null);
});

cljs.core.async.t_cljs$core$async32137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32137";

cljs.core.async.t_cljs$core$async32137.cljs$lang$ctorPrWriter = (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async32137");
});

cljs.core.async.__GT_t_cljs$core$async32137 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async32137(fn_handler__$1,f__$1,meta32138){
return (new cljs.core.async.t_cljs$core$async32137(fn_handler__$1,f__$1,meta32138));
});

}

return (new cljs.core.async.t_cljs$core$async32137(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args32142 = [];
var len__18249__auto___32145 = arguments.length;
var i__18250__auto___32146 = (0);
while(true){
if((i__18250__auto___32146 < len__18249__auto___32145)){
args32142.push((arguments[i__18250__auto___32146]));

var G__32147 = (i__18250__auto___32146 + (1));
i__18250__auto___32146 = G__32147;
continue;
} else {
}
break;
}

var G__32144 = args32142.length;
switch (G__32144) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32142.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args32149 = [];
var len__18249__auto___32152 = arguments.length;
var i__18250__auto___32153 = (0);
while(true){
if((i__18250__auto___32153 < len__18249__auto___32152)){
args32149.push((arguments[i__18250__auto___32153]));

var G__32154 = (i__18250__auto___32153 + (1));
i__18250__auto___32153 = G__32154;
continue;
} else {
}
break;
}

var G__32151 = args32149.length;
switch (G__32151) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32149.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32156 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32156);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32156,ret){
return (function (){
return fn1.call(null,val_32156);
});})(val_32156,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args32157 = [];
var len__18249__auto___32160 = arguments.length;
var i__18250__auto___32161 = (0);
while(true){
if((i__18250__auto___32161 < len__18249__auto___32160)){
args32157.push((arguments[i__18250__auto___32161]));

var G__32162 = (i__18250__auto___32161 + (1));
i__18250__auto___32161 = G__32162;
continue;
} else {
}
break;
}

var G__32159 = args32157.length;
switch (G__32159) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32157.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18094__auto___32164 = n;
var x_32165 = (0);
while(true){
if((x_32165 < n__18094__auto___32164)){
(a[x_32165] = (0));

var G__32166 = (x_32165 + (1));
x_32165 = G__32166;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32167 = (i + (1));
i = G__32167;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32171 = (function (alt_flag,flag,meta32172){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32172 = meta32172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32173,meta32172__$1){
var self__ = this;
var _32173__$1 = this;
return (new cljs.core.async.t_cljs$core$async32171(self__.alt_flag,self__.flag,meta32172__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32173){
var self__ = this;
var _32173__$1 = this;
return self__.meta32172;
});})(flag))
;

cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32171.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32172","meta32172",-1684646642,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32171";

cljs.core.async.t_cljs$core$async32171.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async32171");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32171 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32171(alt_flag__$1,flag__$1,meta32172){
return (new cljs.core.async.t_cljs$core$async32171(alt_flag__$1,flag__$1,meta32172));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32171(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32177 = (function (alt_handler,flag,cb,meta32178){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32178 = meta32178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32179,meta32178__$1){
var self__ = this;
var _32179__$1 = this;
return (new cljs.core.async.t_cljs$core$async32177(self__.alt_handler,self__.flag,self__.cb,meta32178__$1));
});

cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32179){
var self__ = this;
var _32179__$1 = this;
return self__.meta32178;
});

cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32178","meta32178",1323219539,null)], null);
});

cljs.core.async.t_cljs$core$async32177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32177";

cljs.core.async.t_cljs$core$async32177.cljs$lang$ctorPrWriter = (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async32177");
});

cljs.core.async.__GT_t_cljs$core$async32177 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32177(alt_handler__$1,flag__$1,cb__$1,meta32178){
return (new cljs.core.async.t_cljs$core$async32177(alt_handler__$1,flag__$1,cb__$1,meta32178));
});

}

return (new cljs.core.async.t_cljs$core$async32177(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32180_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32180_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32181_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32181_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17191__auto__ = wport;
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32182 = (i + (1));
i = G__32182;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17191__auto__ = ret;
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__17179__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17179__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17179__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__18256__auto__ = [];
var len__18249__auto___32188 = arguments.length;
var i__18250__auto___32189 = (0);
while(true){
if((i__18250__auto___32189 < len__18249__auto___32188)){
args__18256__auto__.push((arguments[i__18250__auto___32189]));

var G__32190 = (i__18250__auto___32189 + (1));
i__18250__auto___32189 = G__32190;
continue;
} else {
}
break;
}

var argseq__18257__auto__ = ((((1) < args__18256__auto__.length))?(new cljs.core.IndexedSeq(args__18256__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18257__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32185){
var map__32186 = p__32185;
var map__32186__$1 = ((((!((map__32186 == null)))?((((map__32186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32186):map__32186);
var opts = map__32186__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32183){
var G__32184 = cljs.core.first.call(null,seq32183);
var seq32183__$1 = cljs.core.next.call(null,seq32183);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32184,seq32183__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args32191 = [];
var len__18249__auto___32241 = arguments.length;
var i__18250__auto___32242 = (0);
while(true){
if((i__18250__auto___32242 < len__18249__auto___32241)){
args32191.push((arguments[i__18250__auto___32242]));

var G__32243 = (i__18250__auto___32242 + (1));
i__18250__auto___32242 = G__32243;
continue;
} else {
}
break;
}

var G__32193 = args32191.length;
switch (G__32193) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32191.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21877__auto___32245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___32245){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___32245){
return (function (state_32217){
var state_val_32218 = (state_32217[(1)]);
if((state_val_32218 === (7))){
var inst_32213 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32219_32246 = state_32217__$1;
(statearr_32219_32246[(2)] = inst_32213);

(statearr_32219_32246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (1))){
var state_32217__$1 = state_32217;
var statearr_32220_32247 = state_32217__$1;
(statearr_32220_32247[(2)] = null);

(statearr_32220_32247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (4))){
var inst_32196 = (state_32217[(7)]);
var inst_32196__$1 = (state_32217[(2)]);
var inst_32197 = (inst_32196__$1 == null);
var state_32217__$1 = (function (){var statearr_32221 = state_32217;
(statearr_32221[(7)] = inst_32196__$1);

return statearr_32221;
})();
if(cljs.core.truth_(inst_32197)){
var statearr_32222_32248 = state_32217__$1;
(statearr_32222_32248[(1)] = (5));

} else {
var statearr_32223_32249 = state_32217__$1;
(statearr_32223_32249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (13))){
var state_32217__$1 = state_32217;
var statearr_32224_32250 = state_32217__$1;
(statearr_32224_32250[(2)] = null);

(statearr_32224_32250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (6))){
var inst_32196 = (state_32217[(7)]);
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32217__$1,(11),to,inst_32196);
} else {
if((state_val_32218 === (3))){
var inst_32215 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32217__$1,inst_32215);
} else {
if((state_val_32218 === (12))){
var state_32217__$1 = state_32217;
var statearr_32225_32251 = state_32217__$1;
(statearr_32225_32251[(2)] = null);

(statearr_32225_32251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (2))){
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32217__$1,(4),from);
} else {
if((state_val_32218 === (11))){
var inst_32206 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
if(cljs.core.truth_(inst_32206)){
var statearr_32226_32252 = state_32217__$1;
(statearr_32226_32252[(1)] = (12));

} else {
var statearr_32227_32253 = state_32217__$1;
(statearr_32227_32253[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (9))){
var state_32217__$1 = state_32217;
var statearr_32228_32254 = state_32217__$1;
(statearr_32228_32254[(2)] = null);

(statearr_32228_32254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (5))){
var state_32217__$1 = state_32217;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32229_32255 = state_32217__$1;
(statearr_32229_32255[(1)] = (8));

} else {
var statearr_32230_32256 = state_32217__$1;
(statearr_32230_32256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (14))){
var inst_32211 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32231_32257 = state_32217__$1;
(statearr_32231_32257[(2)] = inst_32211);

(statearr_32231_32257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (10))){
var inst_32203 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32232_32258 = state_32217__$1;
(statearr_32232_32258[(2)] = inst_32203);

(statearr_32232_32258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (8))){
var inst_32200 = cljs.core.async.close_BANG_.call(null,to);
var state_32217__$1 = state_32217;
var statearr_32233_32259 = state_32217__$1;
(statearr_32233_32259[(2)] = inst_32200);

(statearr_32233_32259[(1)] = (10));


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
});})(c__21877__auto___32245))
;
return ((function (switch__21812__auto__,c__21877__auto___32245){
return (function() {
var cljs$core$async$state_machine__21813__auto__ = null;
var cljs$core$async$state_machine__21813__auto____0 = (function (){
var statearr_32237 = [null,null,null,null,null,null,null,null];
(statearr_32237[(0)] = cljs$core$async$state_machine__21813__auto__);

(statearr_32237[(1)] = (1));

return statearr_32237;
});
var cljs$core$async$state_machine__21813__auto____1 = (function (state_32217){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_32217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e32238){if((e32238 instanceof Object)){
var ex__21816__auto__ = e32238;
var statearr_32239_32260 = state_32217;
(statearr_32239_32260[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32261 = state_32217;
state_32217 = G__32261;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$state_machine__21813__auto__ = function(state_32217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21813__auto____1.call(this,state_32217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21813__auto____0;
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21813__auto____1;
return cljs$core$async$state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___32245))
})();
var state__21879__auto__ = (function (){var statearr_32240 = f__21878__auto__.call(null);
(statearr_32240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___32245);

return statearr_32240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___32245))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32445){
var vec__32446 = p__32445;
var v = cljs.core.nth.call(null,vec__32446,(0),null);
var p = cljs.core.nth.call(null,vec__32446,(1),null);
var job = vec__32446;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21877__auto___32628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___32628,res,vec__32446,v,p,job,jobs,results){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___32628,res,vec__32446,v,p,job,jobs,results){
return (function (state_32451){
var state_val_32452 = (state_32451[(1)]);
if((state_val_32452 === (1))){
var state_32451__$1 = state_32451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32451__$1,(2),res,v);
} else {
if((state_val_32452 === (2))){
var inst_32448 = (state_32451[(2)]);
var inst_32449 = cljs.core.async.close_BANG_.call(null,res);
var state_32451__$1 = (function (){var statearr_32453 = state_32451;
(statearr_32453[(7)] = inst_32448);

return statearr_32453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32451__$1,inst_32449);
} else {
return null;
}
}
});})(c__21877__auto___32628,res,vec__32446,v,p,job,jobs,results))
;
return ((function (switch__21812__auto__,c__21877__auto___32628,res,vec__32446,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0 = (function (){
var statearr_32457 = [null,null,null,null,null,null,null,null];
(statearr_32457[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__);

(statearr_32457[(1)] = (1));

return statearr_32457;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1 = (function (state_32451){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_32451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e32458){if((e32458 instanceof Object)){
var ex__21816__auto__ = e32458;
var statearr_32459_32629 = state_32451;
(statearr_32459_32629[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32630 = state_32451;
state_32451 = G__32630;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__ = function(state_32451){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1.call(this,state_32451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___32628,res,vec__32446,v,p,job,jobs,results))
})();
var state__21879__auto__ = (function (){var statearr_32460 = f__21878__auto__.call(null);
(statearr_32460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___32628);

return statearr_32460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___32628,res,vec__32446,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32461){
var vec__32462 = p__32461;
var v = cljs.core.nth.call(null,vec__32462,(0),null);
var p = cljs.core.nth.call(null,vec__32462,(1),null);
var job = vec__32462;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18094__auto___32631 = n;
var __32632 = (0);
while(true){
if((__32632 < n__18094__auto___32631)){
var G__32463_32633 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32463_32633) {
case "compute":
var c__21877__auto___32635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32632,c__21877__auto___32635,G__32463_32633,n__18094__auto___32631,jobs,results,process,async){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (__32632,c__21877__auto___32635,G__32463_32633,n__18094__auto___32631,jobs,results,process,async){
return (function (state_32476){
var state_val_32477 = (state_32476[(1)]);
if((state_val_32477 === (1))){
var state_32476__$1 = state_32476;
var statearr_32478_32636 = state_32476__$1;
(statearr_32478_32636[(2)] = null);

(statearr_32478_32636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (2))){
var state_32476__$1 = state_32476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32476__$1,(4),jobs);
} else {
if((state_val_32477 === (3))){
var inst_32474 = (state_32476[(2)]);
var state_32476__$1 = state_32476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32476__$1,inst_32474);
} else {
if((state_val_32477 === (4))){
var inst_32466 = (state_32476[(2)]);
var inst_32467 = process.call(null,inst_32466);
var state_32476__$1 = state_32476;
if(cljs.core.truth_(inst_32467)){
var statearr_32479_32637 = state_32476__$1;
(statearr_32479_32637[(1)] = (5));

} else {
var statearr_32480_32638 = state_32476__$1;
(statearr_32480_32638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (5))){
var state_32476__$1 = state_32476;
var statearr_32481_32639 = state_32476__$1;
(statearr_32481_32639[(2)] = null);

(statearr_32481_32639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (6))){
var state_32476__$1 = state_32476;
var statearr_32482_32640 = state_32476__$1;
(statearr_32482_32640[(2)] = null);

(statearr_32482_32640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (7))){
var inst_32472 = (state_32476[(2)]);
var state_32476__$1 = state_32476;
var statearr_32483_32641 = state_32476__$1;
(statearr_32483_32641[(2)] = inst_32472);

(statearr_32483_32641[(1)] = (3));


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
});})(__32632,c__21877__auto___32635,G__32463_32633,n__18094__auto___32631,jobs,results,process,async))
;
return ((function (__32632,switch__21812__auto__,c__21877__auto___32635,G__32463_32633,n__18094__auto___32631,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0 = (function (){
var statearr_32487 = [null,null,null,null,null,null,null];
(statearr_32487[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__);

(statearr_32487[(1)] = (1));

return statearr_32487;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1 = (function (state_32476){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_32476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e32488){if((e32488 instanceof Object)){
var ex__21816__auto__ = e32488;
var statearr_32489_32642 = state_32476;
(statearr_32489_32642[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32643 = state_32476;
state_32476 = G__32643;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__ = function(state_32476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1.call(this,state_32476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__;
})()
;})(__32632,switch__21812__auto__,c__21877__auto___32635,G__32463_32633,n__18094__auto___32631,jobs,results,process,async))
})();
var state__21879__auto__ = (function (){var statearr_32490 = f__21878__auto__.call(null);
(statearr_32490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___32635);

return statearr_32490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(__32632,c__21877__auto___32635,G__32463_32633,n__18094__auto___32631,jobs,results,process,async))
);


break;
case "async":
var c__21877__auto___32644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32632,c__21877__auto___32644,G__32463_32633,n__18094__auto___32631,jobs,results,process,async){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (__32632,c__21877__auto___32644,G__32463_32633,n__18094__auto___32631,jobs,results,process,async){
return (function (state_32503){
var state_val_32504 = (state_32503[(1)]);
if((state_val_32504 === (1))){
var state_32503__$1 = state_32503;
var statearr_32505_32645 = state_32503__$1;
(statearr_32505_32645[(2)] = null);

(statearr_32505_32645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (2))){
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32503__$1,(4),jobs);
} else {
if((state_val_32504 === (3))){
var inst_32501 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32503__$1,inst_32501);
} else {
if((state_val_32504 === (4))){
var inst_32493 = (state_32503[(2)]);
var inst_32494 = async.call(null,inst_32493);
var state_32503__$1 = state_32503;
if(cljs.core.truth_(inst_32494)){
var statearr_32506_32646 = state_32503__$1;
(statearr_32506_32646[(1)] = (5));

} else {
var statearr_32507_32647 = state_32503__$1;
(statearr_32507_32647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (5))){
var state_32503__$1 = state_32503;
var statearr_32508_32648 = state_32503__$1;
(statearr_32508_32648[(2)] = null);

(statearr_32508_32648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (6))){
var state_32503__$1 = state_32503;
var statearr_32509_32649 = state_32503__$1;
(statearr_32509_32649[(2)] = null);

(statearr_32509_32649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (7))){
var inst_32499 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
var statearr_32510_32650 = state_32503__$1;
(statearr_32510_32650[(2)] = inst_32499);

(statearr_32510_32650[(1)] = (3));


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
});})(__32632,c__21877__auto___32644,G__32463_32633,n__18094__auto___32631,jobs,results,process,async))
;
return ((function (__32632,switch__21812__auto__,c__21877__auto___32644,G__32463_32633,n__18094__auto___32631,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0 = (function (){
var statearr_32514 = [null,null,null,null,null,null,null];
(statearr_32514[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__);

(statearr_32514[(1)] = (1));

return statearr_32514;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1 = (function (state_32503){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_32503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e32515){if((e32515 instanceof Object)){
var ex__21816__auto__ = e32515;
var statearr_32516_32651 = state_32503;
(statearr_32516_32651[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32652 = state_32503;
state_32503 = G__32652;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__ = function(state_32503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1.call(this,state_32503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__;
})()
;})(__32632,switch__21812__auto__,c__21877__auto___32644,G__32463_32633,n__18094__auto___32631,jobs,results,process,async))
})();
var state__21879__auto__ = (function (){var statearr_32517 = f__21878__auto__.call(null);
(statearr_32517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___32644);

return statearr_32517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(__32632,c__21877__auto___32644,G__32463_32633,n__18094__auto___32631,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32653 = (__32632 + (1));
__32632 = G__32653;
continue;
} else {
}
break;
}

var c__21877__auto___32654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___32654,jobs,results,process,async){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___32654,jobs,results,process,async){
return (function (state_32539){
var state_val_32540 = (state_32539[(1)]);
if((state_val_32540 === (1))){
var state_32539__$1 = state_32539;
var statearr_32541_32655 = state_32539__$1;
(statearr_32541_32655[(2)] = null);

(statearr_32541_32655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (2))){
var state_32539__$1 = state_32539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32539__$1,(4),from);
} else {
if((state_val_32540 === (3))){
var inst_32537 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32539__$1,inst_32537);
} else {
if((state_val_32540 === (4))){
var inst_32520 = (state_32539[(7)]);
var inst_32520__$1 = (state_32539[(2)]);
var inst_32521 = (inst_32520__$1 == null);
var state_32539__$1 = (function (){var statearr_32542 = state_32539;
(statearr_32542[(7)] = inst_32520__$1);

return statearr_32542;
})();
if(cljs.core.truth_(inst_32521)){
var statearr_32543_32656 = state_32539__$1;
(statearr_32543_32656[(1)] = (5));

} else {
var statearr_32544_32657 = state_32539__$1;
(statearr_32544_32657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (5))){
var inst_32523 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32539__$1 = state_32539;
var statearr_32545_32658 = state_32539__$1;
(statearr_32545_32658[(2)] = inst_32523);

(statearr_32545_32658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (6))){
var inst_32525 = (state_32539[(8)]);
var inst_32520 = (state_32539[(7)]);
var inst_32525__$1 = cljs.core.async.chan.call(null,(1));
var inst_32526 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32527 = [inst_32520,inst_32525__$1];
var inst_32528 = (new cljs.core.PersistentVector(null,2,(5),inst_32526,inst_32527,null));
var state_32539__$1 = (function (){var statearr_32546 = state_32539;
(statearr_32546[(8)] = inst_32525__$1);

return statearr_32546;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32539__$1,(8),jobs,inst_32528);
} else {
if((state_val_32540 === (7))){
var inst_32535 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
var statearr_32547_32659 = state_32539__$1;
(statearr_32547_32659[(2)] = inst_32535);

(statearr_32547_32659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (8))){
var inst_32525 = (state_32539[(8)]);
var inst_32530 = (state_32539[(2)]);
var state_32539__$1 = (function (){var statearr_32548 = state_32539;
(statearr_32548[(9)] = inst_32530);

return statearr_32548;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32539__$1,(9),results,inst_32525);
} else {
if((state_val_32540 === (9))){
var inst_32532 = (state_32539[(2)]);
var state_32539__$1 = (function (){var statearr_32549 = state_32539;
(statearr_32549[(10)] = inst_32532);

return statearr_32549;
})();
var statearr_32550_32660 = state_32539__$1;
(statearr_32550_32660[(2)] = null);

(statearr_32550_32660[(1)] = (2));


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
});})(c__21877__auto___32654,jobs,results,process,async))
;
return ((function (switch__21812__auto__,c__21877__auto___32654,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0 = (function (){
var statearr_32554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__);

(statearr_32554[(1)] = (1));

return statearr_32554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1 = (function (state_32539){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_32539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e32555){if((e32555 instanceof Object)){
var ex__21816__auto__ = e32555;
var statearr_32556_32661 = state_32539;
(statearr_32556_32661[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32662 = state_32539;
state_32539 = G__32662;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__ = function(state_32539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1.call(this,state_32539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___32654,jobs,results,process,async))
})();
var state__21879__auto__ = (function (){var statearr_32557 = f__21878__auto__.call(null);
(statearr_32557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___32654);

return statearr_32557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___32654,jobs,results,process,async))
);


var c__21877__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto__,jobs,results,process,async){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto__,jobs,results,process,async){
return (function (state_32595){
var state_val_32596 = (state_32595[(1)]);
if((state_val_32596 === (7))){
var inst_32591 = (state_32595[(2)]);
var state_32595__$1 = state_32595;
var statearr_32597_32663 = state_32595__$1;
(statearr_32597_32663[(2)] = inst_32591);

(statearr_32597_32663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (20))){
var state_32595__$1 = state_32595;
var statearr_32598_32664 = state_32595__$1;
(statearr_32598_32664[(2)] = null);

(statearr_32598_32664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (1))){
var state_32595__$1 = state_32595;
var statearr_32599_32665 = state_32595__$1;
(statearr_32599_32665[(2)] = null);

(statearr_32599_32665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (4))){
var inst_32560 = (state_32595[(7)]);
var inst_32560__$1 = (state_32595[(2)]);
var inst_32561 = (inst_32560__$1 == null);
var state_32595__$1 = (function (){var statearr_32600 = state_32595;
(statearr_32600[(7)] = inst_32560__$1);

return statearr_32600;
})();
if(cljs.core.truth_(inst_32561)){
var statearr_32601_32666 = state_32595__$1;
(statearr_32601_32666[(1)] = (5));

} else {
var statearr_32602_32667 = state_32595__$1;
(statearr_32602_32667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (15))){
var inst_32573 = (state_32595[(8)]);
var state_32595__$1 = state_32595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32595__$1,(18),to,inst_32573);
} else {
if((state_val_32596 === (21))){
var inst_32586 = (state_32595[(2)]);
var state_32595__$1 = state_32595;
var statearr_32603_32668 = state_32595__$1;
(statearr_32603_32668[(2)] = inst_32586);

(statearr_32603_32668[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (13))){
var inst_32588 = (state_32595[(2)]);
var state_32595__$1 = (function (){var statearr_32604 = state_32595;
(statearr_32604[(9)] = inst_32588);

return statearr_32604;
})();
var statearr_32605_32669 = state_32595__$1;
(statearr_32605_32669[(2)] = null);

(statearr_32605_32669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (6))){
var inst_32560 = (state_32595[(7)]);
var state_32595__$1 = state_32595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32595__$1,(11),inst_32560);
} else {
if((state_val_32596 === (17))){
var inst_32581 = (state_32595[(2)]);
var state_32595__$1 = state_32595;
if(cljs.core.truth_(inst_32581)){
var statearr_32606_32670 = state_32595__$1;
(statearr_32606_32670[(1)] = (19));

} else {
var statearr_32607_32671 = state_32595__$1;
(statearr_32607_32671[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (3))){
var inst_32593 = (state_32595[(2)]);
var state_32595__$1 = state_32595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32595__$1,inst_32593);
} else {
if((state_val_32596 === (12))){
var inst_32570 = (state_32595[(10)]);
var state_32595__$1 = state_32595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32595__$1,(14),inst_32570);
} else {
if((state_val_32596 === (2))){
var state_32595__$1 = state_32595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32595__$1,(4),results);
} else {
if((state_val_32596 === (19))){
var state_32595__$1 = state_32595;
var statearr_32608_32672 = state_32595__$1;
(statearr_32608_32672[(2)] = null);

(statearr_32608_32672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (11))){
var inst_32570 = (state_32595[(2)]);
var state_32595__$1 = (function (){var statearr_32609 = state_32595;
(statearr_32609[(10)] = inst_32570);

return statearr_32609;
})();
var statearr_32610_32673 = state_32595__$1;
(statearr_32610_32673[(2)] = null);

(statearr_32610_32673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (9))){
var state_32595__$1 = state_32595;
var statearr_32611_32674 = state_32595__$1;
(statearr_32611_32674[(2)] = null);

(statearr_32611_32674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (5))){
var state_32595__$1 = state_32595;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32612_32675 = state_32595__$1;
(statearr_32612_32675[(1)] = (8));

} else {
var statearr_32613_32676 = state_32595__$1;
(statearr_32613_32676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (14))){
var inst_32573 = (state_32595[(8)]);
var inst_32575 = (state_32595[(11)]);
var inst_32573__$1 = (state_32595[(2)]);
var inst_32574 = (inst_32573__$1 == null);
var inst_32575__$1 = cljs.core.not.call(null,inst_32574);
var state_32595__$1 = (function (){var statearr_32614 = state_32595;
(statearr_32614[(8)] = inst_32573__$1);

(statearr_32614[(11)] = inst_32575__$1);

return statearr_32614;
})();
if(inst_32575__$1){
var statearr_32615_32677 = state_32595__$1;
(statearr_32615_32677[(1)] = (15));

} else {
var statearr_32616_32678 = state_32595__$1;
(statearr_32616_32678[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (16))){
var inst_32575 = (state_32595[(11)]);
var state_32595__$1 = state_32595;
var statearr_32617_32679 = state_32595__$1;
(statearr_32617_32679[(2)] = inst_32575);

(statearr_32617_32679[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (10))){
var inst_32567 = (state_32595[(2)]);
var state_32595__$1 = state_32595;
var statearr_32618_32680 = state_32595__$1;
(statearr_32618_32680[(2)] = inst_32567);

(statearr_32618_32680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (18))){
var inst_32578 = (state_32595[(2)]);
var state_32595__$1 = state_32595;
var statearr_32619_32681 = state_32595__$1;
(statearr_32619_32681[(2)] = inst_32578);

(statearr_32619_32681[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (8))){
var inst_32564 = cljs.core.async.close_BANG_.call(null,to);
var state_32595__$1 = state_32595;
var statearr_32620_32682 = state_32595__$1;
(statearr_32620_32682[(2)] = inst_32564);

(statearr_32620_32682[(1)] = (10));


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
});})(c__21877__auto__,jobs,results,process,async))
;
return ((function (switch__21812__auto__,c__21877__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0 = (function (){
var statearr_32624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__);

(statearr_32624[(1)] = (1));

return statearr_32624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1 = (function (state_32595){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_32595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e32625){if((e32625 instanceof Object)){
var ex__21816__auto__ = e32625;
var statearr_32626_32683 = state_32595;
(statearr_32626_32683[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32684 = state_32595;
state_32595 = G__32684;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__ = function(state_32595){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1.call(this,state_32595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto__,jobs,results,process,async))
})();
var state__21879__auto__ = (function (){var statearr_32627 = f__21878__auto__.call(null);
(statearr_32627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto__);

return statearr_32627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto__,jobs,results,process,async))
);

return c__21877__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args32685 = [];
var len__18249__auto___32688 = arguments.length;
var i__18250__auto___32689 = (0);
while(true){
if((i__18250__auto___32689 < len__18249__auto___32688)){
args32685.push((arguments[i__18250__auto___32689]));

var G__32690 = (i__18250__auto___32689 + (1));
i__18250__auto___32689 = G__32690;
continue;
} else {
}
break;
}

var G__32687 = args32685.length;
switch (G__32687) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32685.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args32692 = [];
var len__18249__auto___32695 = arguments.length;
var i__18250__auto___32696 = (0);
while(true){
if((i__18250__auto___32696 < len__18249__auto___32695)){
args32692.push((arguments[i__18250__auto___32696]));

var G__32697 = (i__18250__auto___32696 + (1));
i__18250__auto___32696 = G__32697;
continue;
} else {
}
break;
}

var G__32694 = args32692.length;
switch (G__32694) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32692.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args32699 = [];
var len__18249__auto___32752 = arguments.length;
var i__18250__auto___32753 = (0);
while(true){
if((i__18250__auto___32753 < len__18249__auto___32752)){
args32699.push((arguments[i__18250__auto___32753]));

var G__32754 = (i__18250__auto___32753 + (1));
i__18250__auto___32753 = G__32754;
continue;
} else {
}
break;
}

var G__32701 = args32699.length;
switch (G__32701) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32699.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21877__auto___32756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___32756,tc,fc){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___32756,tc,fc){
return (function (state_32727){
var state_val_32728 = (state_32727[(1)]);
if((state_val_32728 === (7))){
var inst_32723 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
var statearr_32729_32757 = state_32727__$1;
(statearr_32729_32757[(2)] = inst_32723);

(statearr_32729_32757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (1))){
var state_32727__$1 = state_32727;
var statearr_32730_32758 = state_32727__$1;
(statearr_32730_32758[(2)] = null);

(statearr_32730_32758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (4))){
var inst_32704 = (state_32727[(7)]);
var inst_32704__$1 = (state_32727[(2)]);
var inst_32705 = (inst_32704__$1 == null);
var state_32727__$1 = (function (){var statearr_32731 = state_32727;
(statearr_32731[(7)] = inst_32704__$1);

return statearr_32731;
})();
if(cljs.core.truth_(inst_32705)){
var statearr_32732_32759 = state_32727__$1;
(statearr_32732_32759[(1)] = (5));

} else {
var statearr_32733_32760 = state_32727__$1;
(statearr_32733_32760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (13))){
var state_32727__$1 = state_32727;
var statearr_32734_32761 = state_32727__$1;
(statearr_32734_32761[(2)] = null);

(statearr_32734_32761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (6))){
var inst_32704 = (state_32727[(7)]);
var inst_32710 = p.call(null,inst_32704);
var state_32727__$1 = state_32727;
if(cljs.core.truth_(inst_32710)){
var statearr_32735_32762 = state_32727__$1;
(statearr_32735_32762[(1)] = (9));

} else {
var statearr_32736_32763 = state_32727__$1;
(statearr_32736_32763[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (3))){
var inst_32725 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32727__$1,inst_32725);
} else {
if((state_val_32728 === (12))){
var state_32727__$1 = state_32727;
var statearr_32737_32764 = state_32727__$1;
(statearr_32737_32764[(2)] = null);

(statearr_32737_32764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (2))){
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32727__$1,(4),ch);
} else {
if((state_val_32728 === (11))){
var inst_32704 = (state_32727[(7)]);
var inst_32714 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32727__$1,(8),inst_32714,inst_32704);
} else {
if((state_val_32728 === (9))){
var state_32727__$1 = state_32727;
var statearr_32738_32765 = state_32727__$1;
(statearr_32738_32765[(2)] = tc);

(statearr_32738_32765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (5))){
var inst_32707 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32708 = cljs.core.async.close_BANG_.call(null,fc);
var state_32727__$1 = (function (){var statearr_32739 = state_32727;
(statearr_32739[(8)] = inst_32707);

return statearr_32739;
})();
var statearr_32740_32766 = state_32727__$1;
(statearr_32740_32766[(2)] = inst_32708);

(statearr_32740_32766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (14))){
var inst_32721 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
var statearr_32741_32767 = state_32727__$1;
(statearr_32741_32767[(2)] = inst_32721);

(statearr_32741_32767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (10))){
var state_32727__$1 = state_32727;
var statearr_32742_32768 = state_32727__$1;
(statearr_32742_32768[(2)] = fc);

(statearr_32742_32768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (8))){
var inst_32716 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
if(cljs.core.truth_(inst_32716)){
var statearr_32743_32769 = state_32727__$1;
(statearr_32743_32769[(1)] = (12));

} else {
var statearr_32744_32770 = state_32727__$1;
(statearr_32744_32770[(1)] = (13));

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
});})(c__21877__auto___32756,tc,fc))
;
return ((function (switch__21812__auto__,c__21877__auto___32756,tc,fc){
return (function() {
var cljs$core$async$state_machine__21813__auto__ = null;
var cljs$core$async$state_machine__21813__auto____0 = (function (){
var statearr_32748 = [null,null,null,null,null,null,null,null,null];
(statearr_32748[(0)] = cljs$core$async$state_machine__21813__auto__);

(statearr_32748[(1)] = (1));

return statearr_32748;
});
var cljs$core$async$state_machine__21813__auto____1 = (function (state_32727){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_32727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e32749){if((e32749 instanceof Object)){
var ex__21816__auto__ = e32749;
var statearr_32750_32771 = state_32727;
(statearr_32750_32771[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32772 = state_32727;
state_32727 = G__32772;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$state_machine__21813__auto__ = function(state_32727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21813__auto____1.call(this,state_32727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21813__auto____0;
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21813__auto____1;
return cljs$core$async$state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___32756,tc,fc))
})();
var state__21879__auto__ = (function (){var statearr_32751 = f__21878__auto__.call(null);
(statearr_32751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___32756);

return statearr_32751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___32756,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21877__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto__){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto__){
return (function (state_32819){
var state_val_32820 = (state_32819[(1)]);
if((state_val_32820 === (1))){
var inst_32805 = init;
var state_32819__$1 = (function (){var statearr_32821 = state_32819;
(statearr_32821[(7)] = inst_32805);

return statearr_32821;
})();
var statearr_32822_32837 = state_32819__$1;
(statearr_32822_32837[(2)] = null);

(statearr_32822_32837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (2))){
var state_32819__$1 = state_32819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32819__$1,(4),ch);
} else {
if((state_val_32820 === (3))){
var inst_32817 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32819__$1,inst_32817);
} else {
if((state_val_32820 === (4))){
var inst_32808 = (state_32819[(8)]);
var inst_32808__$1 = (state_32819[(2)]);
var inst_32809 = (inst_32808__$1 == null);
var state_32819__$1 = (function (){var statearr_32823 = state_32819;
(statearr_32823[(8)] = inst_32808__$1);

return statearr_32823;
})();
if(cljs.core.truth_(inst_32809)){
var statearr_32824_32838 = state_32819__$1;
(statearr_32824_32838[(1)] = (5));

} else {
var statearr_32825_32839 = state_32819__$1;
(statearr_32825_32839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (5))){
var inst_32805 = (state_32819[(7)]);
var state_32819__$1 = state_32819;
var statearr_32826_32840 = state_32819__$1;
(statearr_32826_32840[(2)] = inst_32805);

(statearr_32826_32840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (6))){
var inst_32808 = (state_32819[(8)]);
var inst_32805 = (state_32819[(7)]);
var inst_32812 = f.call(null,inst_32805,inst_32808);
var inst_32805__$1 = inst_32812;
var state_32819__$1 = (function (){var statearr_32827 = state_32819;
(statearr_32827[(7)] = inst_32805__$1);

return statearr_32827;
})();
var statearr_32828_32841 = state_32819__$1;
(statearr_32828_32841[(2)] = null);

(statearr_32828_32841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (7))){
var inst_32815 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
var statearr_32829_32842 = state_32819__$1;
(statearr_32829_32842[(2)] = inst_32815);

(statearr_32829_32842[(1)] = (3));


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
});})(c__21877__auto__))
;
return ((function (switch__21812__auto__,c__21877__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21813__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21813__auto____0 = (function (){
var statearr_32833 = [null,null,null,null,null,null,null,null,null];
(statearr_32833[(0)] = cljs$core$async$reduce_$_state_machine__21813__auto__);

(statearr_32833[(1)] = (1));

return statearr_32833;
});
var cljs$core$async$reduce_$_state_machine__21813__auto____1 = (function (state_32819){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_32819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e32834){if((e32834 instanceof Object)){
var ex__21816__auto__ = e32834;
var statearr_32835_32843 = state_32819;
(statearr_32835_32843[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32844 = state_32819;
state_32819 = G__32844;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21813__auto__ = function(state_32819){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21813__auto____1.call(this,state_32819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21813__auto____0;
cljs$core$async$reduce_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21813__auto____1;
return cljs$core$async$reduce_$_state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto__))
})();
var state__21879__auto__ = (function (){var statearr_32836 = f__21878__auto__.call(null);
(statearr_32836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto__);

return statearr_32836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto__))
);

return c__21877__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args32845 = [];
var len__18249__auto___32897 = arguments.length;
var i__18250__auto___32898 = (0);
while(true){
if((i__18250__auto___32898 < len__18249__auto___32897)){
args32845.push((arguments[i__18250__auto___32898]));

var G__32899 = (i__18250__auto___32898 + (1));
i__18250__auto___32898 = G__32899;
continue;
} else {
}
break;
}

var G__32847 = args32845.length;
switch (G__32847) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32845.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21877__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto__){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto__){
return (function (state_32872){
var state_val_32873 = (state_32872[(1)]);
if((state_val_32873 === (7))){
var inst_32854 = (state_32872[(2)]);
var state_32872__$1 = state_32872;
var statearr_32874_32901 = state_32872__$1;
(statearr_32874_32901[(2)] = inst_32854);

(statearr_32874_32901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (1))){
var inst_32848 = cljs.core.seq.call(null,coll);
var inst_32849 = inst_32848;
var state_32872__$1 = (function (){var statearr_32875 = state_32872;
(statearr_32875[(7)] = inst_32849);

return statearr_32875;
})();
var statearr_32876_32902 = state_32872__$1;
(statearr_32876_32902[(2)] = null);

(statearr_32876_32902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (4))){
var inst_32849 = (state_32872[(7)]);
var inst_32852 = cljs.core.first.call(null,inst_32849);
var state_32872__$1 = state_32872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32872__$1,(7),ch,inst_32852);
} else {
if((state_val_32873 === (13))){
var inst_32866 = (state_32872[(2)]);
var state_32872__$1 = state_32872;
var statearr_32877_32903 = state_32872__$1;
(statearr_32877_32903[(2)] = inst_32866);

(statearr_32877_32903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (6))){
var inst_32857 = (state_32872[(2)]);
var state_32872__$1 = state_32872;
if(cljs.core.truth_(inst_32857)){
var statearr_32878_32904 = state_32872__$1;
(statearr_32878_32904[(1)] = (8));

} else {
var statearr_32879_32905 = state_32872__$1;
(statearr_32879_32905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (3))){
var inst_32870 = (state_32872[(2)]);
var state_32872__$1 = state_32872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32872__$1,inst_32870);
} else {
if((state_val_32873 === (12))){
var state_32872__$1 = state_32872;
var statearr_32880_32906 = state_32872__$1;
(statearr_32880_32906[(2)] = null);

(statearr_32880_32906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (2))){
var inst_32849 = (state_32872[(7)]);
var state_32872__$1 = state_32872;
if(cljs.core.truth_(inst_32849)){
var statearr_32881_32907 = state_32872__$1;
(statearr_32881_32907[(1)] = (4));

} else {
var statearr_32882_32908 = state_32872__$1;
(statearr_32882_32908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (11))){
var inst_32863 = cljs.core.async.close_BANG_.call(null,ch);
var state_32872__$1 = state_32872;
var statearr_32883_32909 = state_32872__$1;
(statearr_32883_32909[(2)] = inst_32863);

(statearr_32883_32909[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (9))){
var state_32872__$1 = state_32872;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32884_32910 = state_32872__$1;
(statearr_32884_32910[(1)] = (11));

} else {
var statearr_32885_32911 = state_32872__$1;
(statearr_32885_32911[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (5))){
var inst_32849 = (state_32872[(7)]);
var state_32872__$1 = state_32872;
var statearr_32886_32912 = state_32872__$1;
(statearr_32886_32912[(2)] = inst_32849);

(statearr_32886_32912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (10))){
var inst_32868 = (state_32872[(2)]);
var state_32872__$1 = state_32872;
var statearr_32887_32913 = state_32872__$1;
(statearr_32887_32913[(2)] = inst_32868);

(statearr_32887_32913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32873 === (8))){
var inst_32849 = (state_32872[(7)]);
var inst_32859 = cljs.core.next.call(null,inst_32849);
var inst_32849__$1 = inst_32859;
var state_32872__$1 = (function (){var statearr_32888 = state_32872;
(statearr_32888[(7)] = inst_32849__$1);

return statearr_32888;
})();
var statearr_32889_32914 = state_32872__$1;
(statearr_32889_32914[(2)] = null);

(statearr_32889_32914[(1)] = (2));


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
});})(c__21877__auto__))
;
return ((function (switch__21812__auto__,c__21877__auto__){
return (function() {
var cljs$core$async$state_machine__21813__auto__ = null;
var cljs$core$async$state_machine__21813__auto____0 = (function (){
var statearr_32893 = [null,null,null,null,null,null,null,null];
(statearr_32893[(0)] = cljs$core$async$state_machine__21813__auto__);

(statearr_32893[(1)] = (1));

return statearr_32893;
});
var cljs$core$async$state_machine__21813__auto____1 = (function (state_32872){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_32872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e32894){if((e32894 instanceof Object)){
var ex__21816__auto__ = e32894;
var statearr_32895_32915 = state_32872;
(statearr_32895_32915[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32916 = state_32872;
state_32872 = G__32916;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$state_machine__21813__auto__ = function(state_32872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21813__auto____1.call(this,state_32872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21813__auto____0;
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21813__auto____1;
return cljs$core$async$state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto__))
})();
var state__21879__auto__ = (function (){var statearr_32896 = f__21878__auto__.call(null);
(statearr_32896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto__);

return statearr_32896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto__))
);

return c__21877__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17846__auto__ = (((_ == null))?null:_);
var m__17847__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,_);
} else {
var m__17847__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17847__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m,ch);
} else {
var m__17847__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m);
} else {
var m__17847__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33138 = (function (mult,ch,cs,meta33139){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33139 = meta33139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33140,meta33139__$1){
var self__ = this;
var _33140__$1 = this;
return (new cljs.core.async.t_cljs$core$async33138(self__.mult,self__.ch,self__.cs,meta33139__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33140){
var self__ = this;
var _33140__$1 = this;
return self__.meta33139;
});})(cs))
;

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33138.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33138.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33139","meta33139",-1648833073,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33138";

cljs.core.async.t_cljs$core$async33138.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async33138");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33138 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33138(mult__$1,ch__$1,cs__$1,meta33139){
return (new cljs.core.async.t_cljs$core$async33138(mult__$1,ch__$1,cs__$1,meta33139));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33138(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21877__auto___33359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___33359,cs,m,dchan,dctr,done){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___33359,cs,m,dchan,dctr,done){
return (function (state_33271){
var state_val_33272 = (state_33271[(1)]);
if((state_val_33272 === (7))){
var inst_33267 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33273_33360 = state_33271__$1;
(statearr_33273_33360[(2)] = inst_33267);

(statearr_33273_33360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (20))){
var inst_33172 = (state_33271[(7)]);
var inst_33182 = cljs.core.first.call(null,inst_33172);
var inst_33183 = cljs.core.nth.call(null,inst_33182,(0),null);
var inst_33184 = cljs.core.nth.call(null,inst_33182,(1),null);
var state_33271__$1 = (function (){var statearr_33274 = state_33271;
(statearr_33274[(8)] = inst_33183);

return statearr_33274;
})();
if(cljs.core.truth_(inst_33184)){
var statearr_33275_33361 = state_33271__$1;
(statearr_33275_33361[(1)] = (22));

} else {
var statearr_33276_33362 = state_33271__$1;
(statearr_33276_33362[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (27))){
var inst_33212 = (state_33271[(9)]);
var inst_33219 = (state_33271[(10)]);
var inst_33214 = (state_33271[(11)]);
var inst_33143 = (state_33271[(12)]);
var inst_33219__$1 = cljs.core._nth.call(null,inst_33212,inst_33214);
var inst_33220 = cljs.core.async.put_BANG_.call(null,inst_33219__$1,inst_33143,done);
var state_33271__$1 = (function (){var statearr_33277 = state_33271;
(statearr_33277[(10)] = inst_33219__$1);

return statearr_33277;
})();
if(cljs.core.truth_(inst_33220)){
var statearr_33278_33363 = state_33271__$1;
(statearr_33278_33363[(1)] = (30));

} else {
var statearr_33279_33364 = state_33271__$1;
(statearr_33279_33364[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (1))){
var state_33271__$1 = state_33271;
var statearr_33280_33365 = state_33271__$1;
(statearr_33280_33365[(2)] = null);

(statearr_33280_33365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (24))){
var inst_33172 = (state_33271[(7)]);
var inst_33189 = (state_33271[(2)]);
var inst_33190 = cljs.core.next.call(null,inst_33172);
var inst_33152 = inst_33190;
var inst_33153 = null;
var inst_33154 = (0);
var inst_33155 = (0);
var state_33271__$1 = (function (){var statearr_33281 = state_33271;
(statearr_33281[(13)] = inst_33153);

(statearr_33281[(14)] = inst_33154);

(statearr_33281[(15)] = inst_33189);

(statearr_33281[(16)] = inst_33155);

(statearr_33281[(17)] = inst_33152);

return statearr_33281;
})();
var statearr_33282_33366 = state_33271__$1;
(statearr_33282_33366[(2)] = null);

(statearr_33282_33366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (39))){
var state_33271__$1 = state_33271;
var statearr_33286_33367 = state_33271__$1;
(statearr_33286_33367[(2)] = null);

(statearr_33286_33367[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (4))){
var inst_33143 = (state_33271[(12)]);
var inst_33143__$1 = (state_33271[(2)]);
var inst_33144 = (inst_33143__$1 == null);
var state_33271__$1 = (function (){var statearr_33287 = state_33271;
(statearr_33287[(12)] = inst_33143__$1);

return statearr_33287;
})();
if(cljs.core.truth_(inst_33144)){
var statearr_33288_33368 = state_33271__$1;
(statearr_33288_33368[(1)] = (5));

} else {
var statearr_33289_33369 = state_33271__$1;
(statearr_33289_33369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (15))){
var inst_33153 = (state_33271[(13)]);
var inst_33154 = (state_33271[(14)]);
var inst_33155 = (state_33271[(16)]);
var inst_33152 = (state_33271[(17)]);
var inst_33168 = (state_33271[(2)]);
var inst_33169 = (inst_33155 + (1));
var tmp33283 = inst_33153;
var tmp33284 = inst_33154;
var tmp33285 = inst_33152;
var inst_33152__$1 = tmp33285;
var inst_33153__$1 = tmp33283;
var inst_33154__$1 = tmp33284;
var inst_33155__$1 = inst_33169;
var state_33271__$1 = (function (){var statearr_33290 = state_33271;
(statearr_33290[(13)] = inst_33153__$1);

(statearr_33290[(14)] = inst_33154__$1);

(statearr_33290[(16)] = inst_33155__$1);

(statearr_33290[(18)] = inst_33168);

(statearr_33290[(17)] = inst_33152__$1);

return statearr_33290;
})();
var statearr_33291_33370 = state_33271__$1;
(statearr_33291_33370[(2)] = null);

(statearr_33291_33370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (21))){
var inst_33193 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33295_33371 = state_33271__$1;
(statearr_33295_33371[(2)] = inst_33193);

(statearr_33295_33371[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (31))){
var inst_33219 = (state_33271[(10)]);
var inst_33223 = done.call(null,null);
var inst_33224 = cljs.core.async.untap_STAR_.call(null,m,inst_33219);
var state_33271__$1 = (function (){var statearr_33296 = state_33271;
(statearr_33296[(19)] = inst_33223);

return statearr_33296;
})();
var statearr_33297_33372 = state_33271__$1;
(statearr_33297_33372[(2)] = inst_33224);

(statearr_33297_33372[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (32))){
var inst_33211 = (state_33271[(20)]);
var inst_33213 = (state_33271[(21)]);
var inst_33212 = (state_33271[(9)]);
var inst_33214 = (state_33271[(11)]);
var inst_33226 = (state_33271[(2)]);
var inst_33227 = (inst_33214 + (1));
var tmp33292 = inst_33211;
var tmp33293 = inst_33213;
var tmp33294 = inst_33212;
var inst_33211__$1 = tmp33292;
var inst_33212__$1 = tmp33294;
var inst_33213__$1 = tmp33293;
var inst_33214__$1 = inst_33227;
var state_33271__$1 = (function (){var statearr_33298 = state_33271;
(statearr_33298[(20)] = inst_33211__$1);

(statearr_33298[(22)] = inst_33226);

(statearr_33298[(21)] = inst_33213__$1);

(statearr_33298[(9)] = inst_33212__$1);

(statearr_33298[(11)] = inst_33214__$1);

return statearr_33298;
})();
var statearr_33299_33373 = state_33271__$1;
(statearr_33299_33373[(2)] = null);

(statearr_33299_33373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (40))){
var inst_33239 = (state_33271[(23)]);
var inst_33243 = done.call(null,null);
var inst_33244 = cljs.core.async.untap_STAR_.call(null,m,inst_33239);
var state_33271__$1 = (function (){var statearr_33300 = state_33271;
(statearr_33300[(24)] = inst_33243);

return statearr_33300;
})();
var statearr_33301_33374 = state_33271__$1;
(statearr_33301_33374[(2)] = inst_33244);

(statearr_33301_33374[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (33))){
var inst_33230 = (state_33271[(25)]);
var inst_33232 = cljs.core.chunked_seq_QMARK_.call(null,inst_33230);
var state_33271__$1 = state_33271;
if(inst_33232){
var statearr_33302_33375 = state_33271__$1;
(statearr_33302_33375[(1)] = (36));

} else {
var statearr_33303_33376 = state_33271__$1;
(statearr_33303_33376[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (13))){
var inst_33162 = (state_33271[(26)]);
var inst_33165 = cljs.core.async.close_BANG_.call(null,inst_33162);
var state_33271__$1 = state_33271;
var statearr_33304_33377 = state_33271__$1;
(statearr_33304_33377[(2)] = inst_33165);

(statearr_33304_33377[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (22))){
var inst_33183 = (state_33271[(8)]);
var inst_33186 = cljs.core.async.close_BANG_.call(null,inst_33183);
var state_33271__$1 = state_33271;
var statearr_33305_33378 = state_33271__$1;
(statearr_33305_33378[(2)] = inst_33186);

(statearr_33305_33378[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (36))){
var inst_33230 = (state_33271[(25)]);
var inst_33234 = cljs.core.chunk_first.call(null,inst_33230);
var inst_33235 = cljs.core.chunk_rest.call(null,inst_33230);
var inst_33236 = cljs.core.count.call(null,inst_33234);
var inst_33211 = inst_33235;
var inst_33212 = inst_33234;
var inst_33213 = inst_33236;
var inst_33214 = (0);
var state_33271__$1 = (function (){var statearr_33306 = state_33271;
(statearr_33306[(20)] = inst_33211);

(statearr_33306[(21)] = inst_33213);

(statearr_33306[(9)] = inst_33212);

(statearr_33306[(11)] = inst_33214);

return statearr_33306;
})();
var statearr_33307_33379 = state_33271__$1;
(statearr_33307_33379[(2)] = null);

(statearr_33307_33379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (41))){
var inst_33230 = (state_33271[(25)]);
var inst_33246 = (state_33271[(2)]);
var inst_33247 = cljs.core.next.call(null,inst_33230);
var inst_33211 = inst_33247;
var inst_33212 = null;
var inst_33213 = (0);
var inst_33214 = (0);
var state_33271__$1 = (function (){var statearr_33308 = state_33271;
(statearr_33308[(20)] = inst_33211);

(statearr_33308[(21)] = inst_33213);

(statearr_33308[(27)] = inst_33246);

(statearr_33308[(9)] = inst_33212);

(statearr_33308[(11)] = inst_33214);

return statearr_33308;
})();
var statearr_33309_33380 = state_33271__$1;
(statearr_33309_33380[(2)] = null);

(statearr_33309_33380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (43))){
var state_33271__$1 = state_33271;
var statearr_33310_33381 = state_33271__$1;
(statearr_33310_33381[(2)] = null);

(statearr_33310_33381[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (29))){
var inst_33255 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33311_33382 = state_33271__$1;
(statearr_33311_33382[(2)] = inst_33255);

(statearr_33311_33382[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (44))){
var inst_33264 = (state_33271[(2)]);
var state_33271__$1 = (function (){var statearr_33312 = state_33271;
(statearr_33312[(28)] = inst_33264);

return statearr_33312;
})();
var statearr_33313_33383 = state_33271__$1;
(statearr_33313_33383[(2)] = null);

(statearr_33313_33383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (6))){
var inst_33203 = (state_33271[(29)]);
var inst_33202 = cljs.core.deref.call(null,cs);
var inst_33203__$1 = cljs.core.keys.call(null,inst_33202);
var inst_33204 = cljs.core.count.call(null,inst_33203__$1);
var inst_33205 = cljs.core.reset_BANG_.call(null,dctr,inst_33204);
var inst_33210 = cljs.core.seq.call(null,inst_33203__$1);
var inst_33211 = inst_33210;
var inst_33212 = null;
var inst_33213 = (0);
var inst_33214 = (0);
var state_33271__$1 = (function (){var statearr_33314 = state_33271;
(statearr_33314[(20)] = inst_33211);

(statearr_33314[(30)] = inst_33205);

(statearr_33314[(29)] = inst_33203__$1);

(statearr_33314[(21)] = inst_33213);

(statearr_33314[(9)] = inst_33212);

(statearr_33314[(11)] = inst_33214);

return statearr_33314;
})();
var statearr_33315_33384 = state_33271__$1;
(statearr_33315_33384[(2)] = null);

(statearr_33315_33384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (28))){
var inst_33211 = (state_33271[(20)]);
var inst_33230 = (state_33271[(25)]);
var inst_33230__$1 = cljs.core.seq.call(null,inst_33211);
var state_33271__$1 = (function (){var statearr_33316 = state_33271;
(statearr_33316[(25)] = inst_33230__$1);

return statearr_33316;
})();
if(inst_33230__$1){
var statearr_33317_33385 = state_33271__$1;
(statearr_33317_33385[(1)] = (33));

} else {
var statearr_33318_33386 = state_33271__$1;
(statearr_33318_33386[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (25))){
var inst_33213 = (state_33271[(21)]);
var inst_33214 = (state_33271[(11)]);
var inst_33216 = (inst_33214 < inst_33213);
var inst_33217 = inst_33216;
var state_33271__$1 = state_33271;
if(cljs.core.truth_(inst_33217)){
var statearr_33319_33387 = state_33271__$1;
(statearr_33319_33387[(1)] = (27));

} else {
var statearr_33320_33388 = state_33271__$1;
(statearr_33320_33388[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (34))){
var state_33271__$1 = state_33271;
var statearr_33321_33389 = state_33271__$1;
(statearr_33321_33389[(2)] = null);

(statearr_33321_33389[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (17))){
var state_33271__$1 = state_33271;
var statearr_33322_33390 = state_33271__$1;
(statearr_33322_33390[(2)] = null);

(statearr_33322_33390[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (3))){
var inst_33269 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33271__$1,inst_33269);
} else {
if((state_val_33272 === (12))){
var inst_33198 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33323_33391 = state_33271__$1;
(statearr_33323_33391[(2)] = inst_33198);

(statearr_33323_33391[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (2))){
var state_33271__$1 = state_33271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33271__$1,(4),ch);
} else {
if((state_val_33272 === (23))){
var state_33271__$1 = state_33271;
var statearr_33324_33392 = state_33271__$1;
(statearr_33324_33392[(2)] = null);

(statearr_33324_33392[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (35))){
var inst_33253 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33325_33393 = state_33271__$1;
(statearr_33325_33393[(2)] = inst_33253);

(statearr_33325_33393[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (19))){
var inst_33172 = (state_33271[(7)]);
var inst_33176 = cljs.core.chunk_first.call(null,inst_33172);
var inst_33177 = cljs.core.chunk_rest.call(null,inst_33172);
var inst_33178 = cljs.core.count.call(null,inst_33176);
var inst_33152 = inst_33177;
var inst_33153 = inst_33176;
var inst_33154 = inst_33178;
var inst_33155 = (0);
var state_33271__$1 = (function (){var statearr_33326 = state_33271;
(statearr_33326[(13)] = inst_33153);

(statearr_33326[(14)] = inst_33154);

(statearr_33326[(16)] = inst_33155);

(statearr_33326[(17)] = inst_33152);

return statearr_33326;
})();
var statearr_33327_33394 = state_33271__$1;
(statearr_33327_33394[(2)] = null);

(statearr_33327_33394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (11))){
var inst_33172 = (state_33271[(7)]);
var inst_33152 = (state_33271[(17)]);
var inst_33172__$1 = cljs.core.seq.call(null,inst_33152);
var state_33271__$1 = (function (){var statearr_33328 = state_33271;
(statearr_33328[(7)] = inst_33172__$1);

return statearr_33328;
})();
if(inst_33172__$1){
var statearr_33329_33395 = state_33271__$1;
(statearr_33329_33395[(1)] = (16));

} else {
var statearr_33330_33396 = state_33271__$1;
(statearr_33330_33396[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (9))){
var inst_33200 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33331_33397 = state_33271__$1;
(statearr_33331_33397[(2)] = inst_33200);

(statearr_33331_33397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (5))){
var inst_33150 = cljs.core.deref.call(null,cs);
var inst_33151 = cljs.core.seq.call(null,inst_33150);
var inst_33152 = inst_33151;
var inst_33153 = null;
var inst_33154 = (0);
var inst_33155 = (0);
var state_33271__$1 = (function (){var statearr_33332 = state_33271;
(statearr_33332[(13)] = inst_33153);

(statearr_33332[(14)] = inst_33154);

(statearr_33332[(16)] = inst_33155);

(statearr_33332[(17)] = inst_33152);

return statearr_33332;
})();
var statearr_33333_33398 = state_33271__$1;
(statearr_33333_33398[(2)] = null);

(statearr_33333_33398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (14))){
var state_33271__$1 = state_33271;
var statearr_33334_33399 = state_33271__$1;
(statearr_33334_33399[(2)] = null);

(statearr_33334_33399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (45))){
var inst_33261 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33335_33400 = state_33271__$1;
(statearr_33335_33400[(2)] = inst_33261);

(statearr_33335_33400[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (26))){
var inst_33203 = (state_33271[(29)]);
var inst_33257 = (state_33271[(2)]);
var inst_33258 = cljs.core.seq.call(null,inst_33203);
var state_33271__$1 = (function (){var statearr_33336 = state_33271;
(statearr_33336[(31)] = inst_33257);

return statearr_33336;
})();
if(inst_33258){
var statearr_33337_33401 = state_33271__$1;
(statearr_33337_33401[(1)] = (42));

} else {
var statearr_33338_33402 = state_33271__$1;
(statearr_33338_33402[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (16))){
var inst_33172 = (state_33271[(7)]);
var inst_33174 = cljs.core.chunked_seq_QMARK_.call(null,inst_33172);
var state_33271__$1 = state_33271;
if(inst_33174){
var statearr_33339_33403 = state_33271__$1;
(statearr_33339_33403[(1)] = (19));

} else {
var statearr_33340_33404 = state_33271__$1;
(statearr_33340_33404[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (38))){
var inst_33250 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33341_33405 = state_33271__$1;
(statearr_33341_33405[(2)] = inst_33250);

(statearr_33341_33405[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (30))){
var state_33271__$1 = state_33271;
var statearr_33342_33406 = state_33271__$1;
(statearr_33342_33406[(2)] = null);

(statearr_33342_33406[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (10))){
var inst_33153 = (state_33271[(13)]);
var inst_33155 = (state_33271[(16)]);
var inst_33161 = cljs.core._nth.call(null,inst_33153,inst_33155);
var inst_33162 = cljs.core.nth.call(null,inst_33161,(0),null);
var inst_33163 = cljs.core.nth.call(null,inst_33161,(1),null);
var state_33271__$1 = (function (){var statearr_33343 = state_33271;
(statearr_33343[(26)] = inst_33162);

return statearr_33343;
})();
if(cljs.core.truth_(inst_33163)){
var statearr_33344_33407 = state_33271__$1;
(statearr_33344_33407[(1)] = (13));

} else {
var statearr_33345_33408 = state_33271__$1;
(statearr_33345_33408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (18))){
var inst_33196 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33346_33409 = state_33271__$1;
(statearr_33346_33409[(2)] = inst_33196);

(statearr_33346_33409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (42))){
var state_33271__$1 = state_33271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33271__$1,(45),dchan);
} else {
if((state_val_33272 === (37))){
var inst_33230 = (state_33271[(25)]);
var inst_33239 = (state_33271[(23)]);
var inst_33143 = (state_33271[(12)]);
var inst_33239__$1 = cljs.core.first.call(null,inst_33230);
var inst_33240 = cljs.core.async.put_BANG_.call(null,inst_33239__$1,inst_33143,done);
var state_33271__$1 = (function (){var statearr_33347 = state_33271;
(statearr_33347[(23)] = inst_33239__$1);

return statearr_33347;
})();
if(cljs.core.truth_(inst_33240)){
var statearr_33348_33410 = state_33271__$1;
(statearr_33348_33410[(1)] = (39));

} else {
var statearr_33349_33411 = state_33271__$1;
(statearr_33349_33411[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (8))){
var inst_33154 = (state_33271[(14)]);
var inst_33155 = (state_33271[(16)]);
var inst_33157 = (inst_33155 < inst_33154);
var inst_33158 = inst_33157;
var state_33271__$1 = state_33271;
if(cljs.core.truth_(inst_33158)){
var statearr_33350_33412 = state_33271__$1;
(statearr_33350_33412[(1)] = (10));

} else {
var statearr_33351_33413 = state_33271__$1;
(statearr_33351_33413[(1)] = (11));

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
});})(c__21877__auto___33359,cs,m,dchan,dctr,done))
;
return ((function (switch__21812__auto__,c__21877__auto___33359,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21813__auto__ = null;
var cljs$core$async$mult_$_state_machine__21813__auto____0 = (function (){
var statearr_33355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33355[(0)] = cljs$core$async$mult_$_state_machine__21813__auto__);

(statearr_33355[(1)] = (1));

return statearr_33355;
});
var cljs$core$async$mult_$_state_machine__21813__auto____1 = (function (state_33271){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_33271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e33356){if((e33356 instanceof Object)){
var ex__21816__auto__ = e33356;
var statearr_33357_33414 = state_33271;
(statearr_33357_33414[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33415 = state_33271;
state_33271 = G__33415;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21813__auto__ = function(state_33271){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21813__auto____1.call(this,state_33271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21813__auto____0;
cljs$core$async$mult_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21813__auto____1;
return cljs$core$async$mult_$_state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___33359,cs,m,dchan,dctr,done))
})();
var state__21879__auto__ = (function (){var statearr_33358 = f__21878__auto__.call(null);
(statearr_33358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___33359);

return statearr_33358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___33359,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args33416 = [];
var len__18249__auto___33419 = arguments.length;
var i__18250__auto___33420 = (0);
while(true){
if((i__18250__auto___33420 < len__18249__auto___33419)){
args33416.push((arguments[i__18250__auto___33420]));

var G__33421 = (i__18250__auto___33420 + (1));
i__18250__auto___33420 = G__33421;
continue;
} else {
}
break;
}

var G__33418 = args33416.length;
switch (G__33418) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33416.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m,ch);
} else {
var m__17847__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m,ch);
} else {
var m__17847__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m);
} else {
var m__17847__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m,state_map);
} else {
var m__17847__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17846__auto__ = (((m == null))?null:m);
var m__17847__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,m,mode);
} else {
var m__17847__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__18256__auto__ = [];
var len__18249__auto___33433 = arguments.length;
var i__18250__auto___33434 = (0);
while(true){
if((i__18250__auto___33434 < len__18249__auto___33433)){
args__18256__auto__.push((arguments[i__18250__auto___33434]));

var G__33435 = (i__18250__auto___33434 + (1));
i__18250__auto___33434 = G__33435;
continue;
} else {
}
break;
}

var argseq__18257__auto__ = ((((3) < args__18256__auto__.length))?(new cljs.core.IndexedSeq(args__18256__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18257__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33427){
var map__33428 = p__33427;
var map__33428__$1 = ((((!((map__33428 == null)))?((((map__33428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33428):map__33428);
var opts = map__33428__$1;
var statearr_33430_33436 = state;
(statearr_33430_33436[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__33428,map__33428__$1,opts){
return (function (val){
var statearr_33431_33437 = state;
(statearr_33431_33437[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33428,map__33428__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_33432_33438 = state;
(statearr_33432_33438[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33423){
var G__33424 = cljs.core.first.call(null,seq33423);
var seq33423__$1 = cljs.core.next.call(null,seq33423);
var G__33425 = cljs.core.first.call(null,seq33423__$1);
var seq33423__$2 = cljs.core.next.call(null,seq33423__$1);
var G__33426 = cljs.core.first.call(null,seq33423__$2);
var seq33423__$3 = cljs.core.next.call(null,seq33423__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33424,G__33425,G__33426,seq33423__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33602 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33602 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33603){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33603 = meta33603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33604,meta33603__$1){
var self__ = this;
var _33604__$1 = this;
return (new cljs.core.async.t_cljs$core$async33602(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33603__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33604){
var self__ = this;
var _33604__$1 = this;
return self__.meta33603;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33602.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33603","meta33603",-2033330971,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33602.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33602";

cljs.core.async.t_cljs$core$async33602.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async33602");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33602 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33602(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33603){
return (new cljs.core.async.t_cljs$core$async33602(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33603));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33602(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21877__auto___33765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___33765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___33765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33702){
var state_val_33703 = (state_33702[(1)]);
if((state_val_33703 === (7))){
var inst_33620 = (state_33702[(2)]);
var state_33702__$1 = state_33702;
var statearr_33704_33766 = state_33702__$1;
(statearr_33704_33766[(2)] = inst_33620);

(statearr_33704_33766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (20))){
var inst_33632 = (state_33702[(7)]);
var state_33702__$1 = state_33702;
var statearr_33705_33767 = state_33702__$1;
(statearr_33705_33767[(2)] = inst_33632);

(statearr_33705_33767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (27))){
var state_33702__$1 = state_33702;
var statearr_33706_33768 = state_33702__$1;
(statearr_33706_33768[(2)] = null);

(statearr_33706_33768[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (1))){
var inst_33608 = (state_33702[(8)]);
var inst_33608__$1 = calc_state.call(null);
var inst_33610 = (inst_33608__$1 == null);
var inst_33611 = cljs.core.not.call(null,inst_33610);
var state_33702__$1 = (function (){var statearr_33707 = state_33702;
(statearr_33707[(8)] = inst_33608__$1);

return statearr_33707;
})();
if(inst_33611){
var statearr_33708_33769 = state_33702__$1;
(statearr_33708_33769[(1)] = (2));

} else {
var statearr_33709_33770 = state_33702__$1;
(statearr_33709_33770[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (24))){
var inst_33655 = (state_33702[(9)]);
var inst_33676 = (state_33702[(10)]);
var inst_33662 = (state_33702[(11)]);
var inst_33676__$1 = inst_33655.call(null,inst_33662);
var state_33702__$1 = (function (){var statearr_33710 = state_33702;
(statearr_33710[(10)] = inst_33676__$1);

return statearr_33710;
})();
if(cljs.core.truth_(inst_33676__$1)){
var statearr_33711_33771 = state_33702__$1;
(statearr_33711_33771[(1)] = (29));

} else {
var statearr_33712_33772 = state_33702__$1;
(statearr_33712_33772[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (4))){
var inst_33623 = (state_33702[(2)]);
var state_33702__$1 = state_33702;
if(cljs.core.truth_(inst_33623)){
var statearr_33713_33773 = state_33702__$1;
(statearr_33713_33773[(1)] = (8));

} else {
var statearr_33714_33774 = state_33702__$1;
(statearr_33714_33774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (15))){
var inst_33649 = (state_33702[(2)]);
var state_33702__$1 = state_33702;
if(cljs.core.truth_(inst_33649)){
var statearr_33715_33775 = state_33702__$1;
(statearr_33715_33775[(1)] = (19));

} else {
var statearr_33716_33776 = state_33702__$1;
(statearr_33716_33776[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (21))){
var inst_33654 = (state_33702[(12)]);
var inst_33654__$1 = (state_33702[(2)]);
var inst_33655 = cljs.core.get.call(null,inst_33654__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33656 = cljs.core.get.call(null,inst_33654__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33657 = cljs.core.get.call(null,inst_33654__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33702__$1 = (function (){var statearr_33717 = state_33702;
(statearr_33717[(13)] = inst_33656);

(statearr_33717[(9)] = inst_33655);

(statearr_33717[(12)] = inst_33654__$1);

return statearr_33717;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33702__$1,(22),inst_33657);
} else {
if((state_val_33703 === (31))){
var inst_33684 = (state_33702[(2)]);
var state_33702__$1 = state_33702;
if(cljs.core.truth_(inst_33684)){
var statearr_33718_33777 = state_33702__$1;
(statearr_33718_33777[(1)] = (32));

} else {
var statearr_33719_33778 = state_33702__$1;
(statearr_33719_33778[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (32))){
var inst_33661 = (state_33702[(14)]);
var state_33702__$1 = state_33702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33702__$1,(35),out,inst_33661);
} else {
if((state_val_33703 === (33))){
var inst_33654 = (state_33702[(12)]);
var inst_33632 = inst_33654;
var state_33702__$1 = (function (){var statearr_33720 = state_33702;
(statearr_33720[(7)] = inst_33632);

return statearr_33720;
})();
var statearr_33721_33779 = state_33702__$1;
(statearr_33721_33779[(2)] = null);

(statearr_33721_33779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (13))){
var inst_33632 = (state_33702[(7)]);
var inst_33639 = inst_33632.cljs$lang$protocol_mask$partition0$;
var inst_33640 = (inst_33639 & (64));
var inst_33641 = inst_33632.cljs$core$ISeq$;
var inst_33642 = (inst_33640) || (inst_33641);
var state_33702__$1 = state_33702;
if(cljs.core.truth_(inst_33642)){
var statearr_33722_33780 = state_33702__$1;
(statearr_33722_33780[(1)] = (16));

} else {
var statearr_33723_33781 = state_33702__$1;
(statearr_33723_33781[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (22))){
var inst_33661 = (state_33702[(14)]);
var inst_33662 = (state_33702[(11)]);
var inst_33660 = (state_33702[(2)]);
var inst_33661__$1 = cljs.core.nth.call(null,inst_33660,(0),null);
var inst_33662__$1 = cljs.core.nth.call(null,inst_33660,(1),null);
var inst_33663 = (inst_33661__$1 == null);
var inst_33664 = cljs.core._EQ_.call(null,inst_33662__$1,change);
var inst_33665 = (inst_33663) || (inst_33664);
var state_33702__$1 = (function (){var statearr_33724 = state_33702;
(statearr_33724[(14)] = inst_33661__$1);

(statearr_33724[(11)] = inst_33662__$1);

return statearr_33724;
})();
if(cljs.core.truth_(inst_33665)){
var statearr_33725_33782 = state_33702__$1;
(statearr_33725_33782[(1)] = (23));

} else {
var statearr_33726_33783 = state_33702__$1;
(statearr_33726_33783[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (36))){
var inst_33654 = (state_33702[(12)]);
var inst_33632 = inst_33654;
var state_33702__$1 = (function (){var statearr_33727 = state_33702;
(statearr_33727[(7)] = inst_33632);

return statearr_33727;
})();
var statearr_33728_33784 = state_33702__$1;
(statearr_33728_33784[(2)] = null);

(statearr_33728_33784[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (29))){
var inst_33676 = (state_33702[(10)]);
var state_33702__$1 = state_33702;
var statearr_33729_33785 = state_33702__$1;
(statearr_33729_33785[(2)] = inst_33676);

(statearr_33729_33785[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (6))){
var state_33702__$1 = state_33702;
var statearr_33730_33786 = state_33702__$1;
(statearr_33730_33786[(2)] = false);

(statearr_33730_33786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (28))){
var inst_33672 = (state_33702[(2)]);
var inst_33673 = calc_state.call(null);
var inst_33632 = inst_33673;
var state_33702__$1 = (function (){var statearr_33731 = state_33702;
(statearr_33731[(7)] = inst_33632);

(statearr_33731[(15)] = inst_33672);

return statearr_33731;
})();
var statearr_33732_33787 = state_33702__$1;
(statearr_33732_33787[(2)] = null);

(statearr_33732_33787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (25))){
var inst_33698 = (state_33702[(2)]);
var state_33702__$1 = state_33702;
var statearr_33733_33788 = state_33702__$1;
(statearr_33733_33788[(2)] = inst_33698);

(statearr_33733_33788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (34))){
var inst_33696 = (state_33702[(2)]);
var state_33702__$1 = state_33702;
var statearr_33734_33789 = state_33702__$1;
(statearr_33734_33789[(2)] = inst_33696);

(statearr_33734_33789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (17))){
var state_33702__$1 = state_33702;
var statearr_33735_33790 = state_33702__$1;
(statearr_33735_33790[(2)] = false);

(statearr_33735_33790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (3))){
var state_33702__$1 = state_33702;
var statearr_33736_33791 = state_33702__$1;
(statearr_33736_33791[(2)] = false);

(statearr_33736_33791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (12))){
var inst_33700 = (state_33702[(2)]);
var state_33702__$1 = state_33702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33702__$1,inst_33700);
} else {
if((state_val_33703 === (2))){
var inst_33608 = (state_33702[(8)]);
var inst_33613 = inst_33608.cljs$lang$protocol_mask$partition0$;
var inst_33614 = (inst_33613 & (64));
var inst_33615 = inst_33608.cljs$core$ISeq$;
var inst_33616 = (inst_33614) || (inst_33615);
var state_33702__$1 = state_33702;
if(cljs.core.truth_(inst_33616)){
var statearr_33737_33792 = state_33702__$1;
(statearr_33737_33792[(1)] = (5));

} else {
var statearr_33738_33793 = state_33702__$1;
(statearr_33738_33793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (23))){
var inst_33661 = (state_33702[(14)]);
var inst_33667 = (inst_33661 == null);
var state_33702__$1 = state_33702;
if(cljs.core.truth_(inst_33667)){
var statearr_33739_33794 = state_33702__$1;
(statearr_33739_33794[(1)] = (26));

} else {
var statearr_33740_33795 = state_33702__$1;
(statearr_33740_33795[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (35))){
var inst_33687 = (state_33702[(2)]);
var state_33702__$1 = state_33702;
if(cljs.core.truth_(inst_33687)){
var statearr_33741_33796 = state_33702__$1;
(statearr_33741_33796[(1)] = (36));

} else {
var statearr_33742_33797 = state_33702__$1;
(statearr_33742_33797[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (19))){
var inst_33632 = (state_33702[(7)]);
var inst_33651 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33632);
var state_33702__$1 = state_33702;
var statearr_33743_33798 = state_33702__$1;
(statearr_33743_33798[(2)] = inst_33651);

(statearr_33743_33798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (11))){
var inst_33632 = (state_33702[(7)]);
var inst_33636 = (inst_33632 == null);
var inst_33637 = cljs.core.not.call(null,inst_33636);
var state_33702__$1 = state_33702;
if(inst_33637){
var statearr_33744_33799 = state_33702__$1;
(statearr_33744_33799[(1)] = (13));

} else {
var statearr_33745_33800 = state_33702__$1;
(statearr_33745_33800[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (9))){
var inst_33608 = (state_33702[(8)]);
var state_33702__$1 = state_33702;
var statearr_33746_33801 = state_33702__$1;
(statearr_33746_33801[(2)] = inst_33608);

(statearr_33746_33801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (5))){
var state_33702__$1 = state_33702;
var statearr_33747_33802 = state_33702__$1;
(statearr_33747_33802[(2)] = true);

(statearr_33747_33802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (14))){
var state_33702__$1 = state_33702;
var statearr_33748_33803 = state_33702__$1;
(statearr_33748_33803[(2)] = false);

(statearr_33748_33803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (26))){
var inst_33662 = (state_33702[(11)]);
var inst_33669 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33662);
var state_33702__$1 = state_33702;
var statearr_33749_33804 = state_33702__$1;
(statearr_33749_33804[(2)] = inst_33669);

(statearr_33749_33804[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (16))){
var state_33702__$1 = state_33702;
var statearr_33750_33805 = state_33702__$1;
(statearr_33750_33805[(2)] = true);

(statearr_33750_33805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (38))){
var inst_33692 = (state_33702[(2)]);
var state_33702__$1 = state_33702;
var statearr_33751_33806 = state_33702__$1;
(statearr_33751_33806[(2)] = inst_33692);

(statearr_33751_33806[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (30))){
var inst_33656 = (state_33702[(13)]);
var inst_33655 = (state_33702[(9)]);
var inst_33662 = (state_33702[(11)]);
var inst_33679 = cljs.core.empty_QMARK_.call(null,inst_33655);
var inst_33680 = inst_33656.call(null,inst_33662);
var inst_33681 = cljs.core.not.call(null,inst_33680);
var inst_33682 = (inst_33679) && (inst_33681);
var state_33702__$1 = state_33702;
var statearr_33752_33807 = state_33702__$1;
(statearr_33752_33807[(2)] = inst_33682);

(statearr_33752_33807[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (10))){
var inst_33608 = (state_33702[(8)]);
var inst_33628 = (state_33702[(2)]);
var inst_33629 = cljs.core.get.call(null,inst_33628,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33630 = cljs.core.get.call(null,inst_33628,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33631 = cljs.core.get.call(null,inst_33628,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33632 = inst_33608;
var state_33702__$1 = (function (){var statearr_33753 = state_33702;
(statearr_33753[(7)] = inst_33632);

(statearr_33753[(16)] = inst_33629);

(statearr_33753[(17)] = inst_33630);

(statearr_33753[(18)] = inst_33631);

return statearr_33753;
})();
var statearr_33754_33808 = state_33702__$1;
(statearr_33754_33808[(2)] = null);

(statearr_33754_33808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (18))){
var inst_33646 = (state_33702[(2)]);
var state_33702__$1 = state_33702;
var statearr_33755_33809 = state_33702__$1;
(statearr_33755_33809[(2)] = inst_33646);

(statearr_33755_33809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (37))){
var state_33702__$1 = state_33702;
var statearr_33756_33810 = state_33702__$1;
(statearr_33756_33810[(2)] = null);

(statearr_33756_33810[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (8))){
var inst_33608 = (state_33702[(8)]);
var inst_33625 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33608);
var state_33702__$1 = state_33702;
var statearr_33757_33811 = state_33702__$1;
(statearr_33757_33811[(2)] = inst_33625);

(statearr_33757_33811[(1)] = (10));


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
});})(c__21877__auto___33765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21812__auto__,c__21877__auto___33765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21813__auto__ = null;
var cljs$core$async$mix_$_state_machine__21813__auto____0 = (function (){
var statearr_33761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33761[(0)] = cljs$core$async$mix_$_state_machine__21813__auto__);

(statearr_33761[(1)] = (1));

return statearr_33761;
});
var cljs$core$async$mix_$_state_machine__21813__auto____1 = (function (state_33702){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_33702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e33762){if((e33762 instanceof Object)){
var ex__21816__auto__ = e33762;
var statearr_33763_33812 = state_33702;
(statearr_33763_33812[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33813 = state_33702;
state_33702 = G__33813;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21813__auto__ = function(state_33702){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21813__auto____1.call(this,state_33702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21813__auto____0;
cljs$core$async$mix_$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21813__auto____1;
return cljs$core$async$mix_$_state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___33765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21879__auto__ = (function (){var statearr_33764 = f__21878__auto__.call(null);
(statearr_33764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___33765);

return statearr_33764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___33765,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17846__auto__ = (((p == null))?null:p);
var m__17847__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17847__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17846__auto__ = (((p == null))?null:p);
var m__17847__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,p,v,ch);
} else {
var m__17847__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args33814 = [];
var len__18249__auto___33817 = arguments.length;
var i__18250__auto___33818 = (0);
while(true){
if((i__18250__auto___33818 < len__18249__auto___33817)){
args33814.push((arguments[i__18250__auto___33818]));

var G__33819 = (i__18250__auto___33818 + (1));
i__18250__auto___33818 = G__33819;
continue;
} else {
}
break;
}

var G__33816 = args33814.length;
switch (G__33816) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33814.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17846__auto__ = (((p == null))?null:p);
var m__17847__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,p);
} else {
var m__17847__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17846__auto__ = (((p == null))?null:p);
var m__17847__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17846__auto__)]);
if(!((m__17847__auto__ == null))){
return m__17847__auto__.call(null,p,v);
} else {
var m__17847__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17847__auto____$1 == null))){
return m__17847__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args33822 = [];
var len__18249__auto___33947 = arguments.length;
var i__18250__auto___33948 = (0);
while(true){
if((i__18250__auto___33948 < len__18249__auto___33947)){
args33822.push((arguments[i__18250__auto___33948]));

var G__33949 = (i__18250__auto___33948 + (1));
i__18250__auto___33948 = G__33949;
continue;
} else {
}
break;
}

var G__33824 = args33822.length;
switch (G__33824) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33822.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17191__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17191__auto__)){
return or__17191__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17191__auto__,mults){
return (function (p1__33821_SHARP_){
if(cljs.core.truth_(p1__33821_SHARP_.call(null,topic))){
return p1__33821_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33821_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17191__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33825 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33826){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33826 = meta33826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33827,meta33826__$1){
var self__ = this;
var _33827__$1 = this;
return (new cljs.core.async.t_cljs$core$async33825(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33826__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33825.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33827){
var self__ = this;
var _33827__$1 = this;
return self__.meta33826;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33825.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33825.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33825.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async33825.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33825.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33825.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33825.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33825.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33826","meta33826",1754426162,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33825.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33825";

cljs.core.async.t_cljs$core$async33825.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async33825");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33825 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33825(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33826){
return (new cljs.core.async.t_cljs$core$async33825(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33826));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33825(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21877__auto___33951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___33951,mults,ensure_mult,p){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___33951,mults,ensure_mult,p){
return (function (state_33899){
var state_val_33900 = (state_33899[(1)]);
if((state_val_33900 === (7))){
var inst_33895 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
var statearr_33901_33952 = state_33899__$1;
(statearr_33901_33952[(2)] = inst_33895);

(statearr_33901_33952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (20))){
var state_33899__$1 = state_33899;
var statearr_33902_33953 = state_33899__$1;
(statearr_33902_33953[(2)] = null);

(statearr_33902_33953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (1))){
var state_33899__$1 = state_33899;
var statearr_33903_33954 = state_33899__$1;
(statearr_33903_33954[(2)] = null);

(statearr_33903_33954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (24))){
var inst_33878 = (state_33899[(7)]);
var inst_33887 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33878);
var state_33899__$1 = state_33899;
var statearr_33904_33955 = state_33899__$1;
(statearr_33904_33955[(2)] = inst_33887);

(statearr_33904_33955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (4))){
var inst_33830 = (state_33899[(8)]);
var inst_33830__$1 = (state_33899[(2)]);
var inst_33831 = (inst_33830__$1 == null);
var state_33899__$1 = (function (){var statearr_33905 = state_33899;
(statearr_33905[(8)] = inst_33830__$1);

return statearr_33905;
})();
if(cljs.core.truth_(inst_33831)){
var statearr_33906_33956 = state_33899__$1;
(statearr_33906_33956[(1)] = (5));

} else {
var statearr_33907_33957 = state_33899__$1;
(statearr_33907_33957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (15))){
var inst_33872 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
var statearr_33908_33958 = state_33899__$1;
(statearr_33908_33958[(2)] = inst_33872);

(statearr_33908_33958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (21))){
var inst_33892 = (state_33899[(2)]);
var state_33899__$1 = (function (){var statearr_33909 = state_33899;
(statearr_33909[(9)] = inst_33892);

return statearr_33909;
})();
var statearr_33910_33959 = state_33899__$1;
(statearr_33910_33959[(2)] = null);

(statearr_33910_33959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (13))){
var inst_33854 = (state_33899[(10)]);
var inst_33856 = cljs.core.chunked_seq_QMARK_.call(null,inst_33854);
var state_33899__$1 = state_33899;
if(inst_33856){
var statearr_33911_33960 = state_33899__$1;
(statearr_33911_33960[(1)] = (16));

} else {
var statearr_33912_33961 = state_33899__$1;
(statearr_33912_33961[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (22))){
var inst_33884 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
if(cljs.core.truth_(inst_33884)){
var statearr_33913_33962 = state_33899__$1;
(statearr_33913_33962[(1)] = (23));

} else {
var statearr_33914_33963 = state_33899__$1;
(statearr_33914_33963[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (6))){
var inst_33878 = (state_33899[(7)]);
var inst_33880 = (state_33899[(11)]);
var inst_33830 = (state_33899[(8)]);
var inst_33878__$1 = topic_fn.call(null,inst_33830);
var inst_33879 = cljs.core.deref.call(null,mults);
var inst_33880__$1 = cljs.core.get.call(null,inst_33879,inst_33878__$1);
var state_33899__$1 = (function (){var statearr_33915 = state_33899;
(statearr_33915[(7)] = inst_33878__$1);

(statearr_33915[(11)] = inst_33880__$1);

return statearr_33915;
})();
if(cljs.core.truth_(inst_33880__$1)){
var statearr_33916_33964 = state_33899__$1;
(statearr_33916_33964[(1)] = (19));

} else {
var statearr_33917_33965 = state_33899__$1;
(statearr_33917_33965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (25))){
var inst_33889 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
var statearr_33918_33966 = state_33899__$1;
(statearr_33918_33966[(2)] = inst_33889);

(statearr_33918_33966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (17))){
var inst_33854 = (state_33899[(10)]);
var inst_33863 = cljs.core.first.call(null,inst_33854);
var inst_33864 = cljs.core.async.muxch_STAR_.call(null,inst_33863);
var inst_33865 = cljs.core.async.close_BANG_.call(null,inst_33864);
var inst_33866 = cljs.core.next.call(null,inst_33854);
var inst_33840 = inst_33866;
var inst_33841 = null;
var inst_33842 = (0);
var inst_33843 = (0);
var state_33899__$1 = (function (){var statearr_33919 = state_33899;
(statearr_33919[(12)] = inst_33840);

(statearr_33919[(13)] = inst_33841);

(statearr_33919[(14)] = inst_33865);

(statearr_33919[(15)] = inst_33843);

(statearr_33919[(16)] = inst_33842);

return statearr_33919;
})();
var statearr_33920_33967 = state_33899__$1;
(statearr_33920_33967[(2)] = null);

(statearr_33920_33967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (3))){
var inst_33897 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33899__$1,inst_33897);
} else {
if((state_val_33900 === (12))){
var inst_33874 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
var statearr_33921_33968 = state_33899__$1;
(statearr_33921_33968[(2)] = inst_33874);

(statearr_33921_33968[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (2))){
var state_33899__$1 = state_33899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33899__$1,(4),ch);
} else {
if((state_val_33900 === (23))){
var state_33899__$1 = state_33899;
var statearr_33922_33969 = state_33899__$1;
(statearr_33922_33969[(2)] = null);

(statearr_33922_33969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (19))){
var inst_33880 = (state_33899[(11)]);
var inst_33830 = (state_33899[(8)]);
var inst_33882 = cljs.core.async.muxch_STAR_.call(null,inst_33880);
var state_33899__$1 = state_33899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33899__$1,(22),inst_33882,inst_33830);
} else {
if((state_val_33900 === (11))){
var inst_33840 = (state_33899[(12)]);
var inst_33854 = (state_33899[(10)]);
var inst_33854__$1 = cljs.core.seq.call(null,inst_33840);
var state_33899__$1 = (function (){var statearr_33923 = state_33899;
(statearr_33923[(10)] = inst_33854__$1);

return statearr_33923;
})();
if(inst_33854__$1){
var statearr_33924_33970 = state_33899__$1;
(statearr_33924_33970[(1)] = (13));

} else {
var statearr_33925_33971 = state_33899__$1;
(statearr_33925_33971[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (9))){
var inst_33876 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
var statearr_33926_33972 = state_33899__$1;
(statearr_33926_33972[(2)] = inst_33876);

(statearr_33926_33972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (5))){
var inst_33837 = cljs.core.deref.call(null,mults);
var inst_33838 = cljs.core.vals.call(null,inst_33837);
var inst_33839 = cljs.core.seq.call(null,inst_33838);
var inst_33840 = inst_33839;
var inst_33841 = null;
var inst_33842 = (0);
var inst_33843 = (0);
var state_33899__$1 = (function (){var statearr_33927 = state_33899;
(statearr_33927[(12)] = inst_33840);

(statearr_33927[(13)] = inst_33841);

(statearr_33927[(15)] = inst_33843);

(statearr_33927[(16)] = inst_33842);

return statearr_33927;
})();
var statearr_33928_33973 = state_33899__$1;
(statearr_33928_33973[(2)] = null);

(statearr_33928_33973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (14))){
var state_33899__$1 = state_33899;
var statearr_33932_33974 = state_33899__$1;
(statearr_33932_33974[(2)] = null);

(statearr_33932_33974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (16))){
var inst_33854 = (state_33899[(10)]);
var inst_33858 = cljs.core.chunk_first.call(null,inst_33854);
var inst_33859 = cljs.core.chunk_rest.call(null,inst_33854);
var inst_33860 = cljs.core.count.call(null,inst_33858);
var inst_33840 = inst_33859;
var inst_33841 = inst_33858;
var inst_33842 = inst_33860;
var inst_33843 = (0);
var state_33899__$1 = (function (){var statearr_33933 = state_33899;
(statearr_33933[(12)] = inst_33840);

(statearr_33933[(13)] = inst_33841);

(statearr_33933[(15)] = inst_33843);

(statearr_33933[(16)] = inst_33842);

return statearr_33933;
})();
var statearr_33934_33975 = state_33899__$1;
(statearr_33934_33975[(2)] = null);

(statearr_33934_33975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (10))){
var inst_33840 = (state_33899[(12)]);
var inst_33841 = (state_33899[(13)]);
var inst_33843 = (state_33899[(15)]);
var inst_33842 = (state_33899[(16)]);
var inst_33848 = cljs.core._nth.call(null,inst_33841,inst_33843);
var inst_33849 = cljs.core.async.muxch_STAR_.call(null,inst_33848);
var inst_33850 = cljs.core.async.close_BANG_.call(null,inst_33849);
var inst_33851 = (inst_33843 + (1));
var tmp33929 = inst_33840;
var tmp33930 = inst_33841;
var tmp33931 = inst_33842;
var inst_33840__$1 = tmp33929;
var inst_33841__$1 = tmp33930;
var inst_33842__$1 = tmp33931;
var inst_33843__$1 = inst_33851;
var state_33899__$1 = (function (){var statearr_33935 = state_33899;
(statearr_33935[(12)] = inst_33840__$1);

(statearr_33935[(13)] = inst_33841__$1);

(statearr_33935[(17)] = inst_33850);

(statearr_33935[(15)] = inst_33843__$1);

(statearr_33935[(16)] = inst_33842__$1);

return statearr_33935;
})();
var statearr_33936_33976 = state_33899__$1;
(statearr_33936_33976[(2)] = null);

(statearr_33936_33976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (18))){
var inst_33869 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
var statearr_33937_33977 = state_33899__$1;
(statearr_33937_33977[(2)] = inst_33869);

(statearr_33937_33977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (8))){
var inst_33843 = (state_33899[(15)]);
var inst_33842 = (state_33899[(16)]);
var inst_33845 = (inst_33843 < inst_33842);
var inst_33846 = inst_33845;
var state_33899__$1 = state_33899;
if(cljs.core.truth_(inst_33846)){
var statearr_33938_33978 = state_33899__$1;
(statearr_33938_33978[(1)] = (10));

} else {
var statearr_33939_33979 = state_33899__$1;
(statearr_33939_33979[(1)] = (11));

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
});})(c__21877__auto___33951,mults,ensure_mult,p))
;
return ((function (switch__21812__auto__,c__21877__auto___33951,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21813__auto__ = null;
var cljs$core$async$state_machine__21813__auto____0 = (function (){
var statearr_33943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33943[(0)] = cljs$core$async$state_machine__21813__auto__);

(statearr_33943[(1)] = (1));

return statearr_33943;
});
var cljs$core$async$state_machine__21813__auto____1 = (function (state_33899){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_33899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e33944){if((e33944 instanceof Object)){
var ex__21816__auto__ = e33944;
var statearr_33945_33980 = state_33899;
(statearr_33945_33980[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33981 = state_33899;
state_33899 = G__33981;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$state_machine__21813__auto__ = function(state_33899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21813__auto____1.call(this,state_33899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21813__auto____0;
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21813__auto____1;
return cljs$core$async$state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___33951,mults,ensure_mult,p))
})();
var state__21879__auto__ = (function (){var statearr_33946 = f__21878__auto__.call(null);
(statearr_33946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___33951);

return statearr_33946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___33951,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args33982 = [];
var len__18249__auto___33985 = arguments.length;
var i__18250__auto___33986 = (0);
while(true){
if((i__18250__auto___33986 < len__18249__auto___33985)){
args33982.push((arguments[i__18250__auto___33986]));

var G__33987 = (i__18250__auto___33986 + (1));
i__18250__auto___33986 = G__33987;
continue;
} else {
}
break;
}

var G__33984 = args33982.length;
switch (G__33984) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33982.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args33989 = [];
var len__18249__auto___33992 = arguments.length;
var i__18250__auto___33993 = (0);
while(true){
if((i__18250__auto___33993 < len__18249__auto___33992)){
args33989.push((arguments[i__18250__auto___33993]));

var G__33994 = (i__18250__auto___33993 + (1));
i__18250__auto___33993 = G__33994;
continue;
} else {
}
break;
}

var G__33991 = args33989.length;
switch (G__33991) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33989.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args33996 = [];
var len__18249__auto___34067 = arguments.length;
var i__18250__auto___34068 = (0);
while(true){
if((i__18250__auto___34068 < len__18249__auto___34067)){
args33996.push((arguments[i__18250__auto___34068]));

var G__34069 = (i__18250__auto___34068 + (1));
i__18250__auto___34068 = G__34069;
continue;
} else {
}
break;
}

var G__33998 = args33996.length;
switch (G__33998) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33996.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21877__auto___34071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___34071,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___34071,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34037){
var state_val_34038 = (state_34037[(1)]);
if((state_val_34038 === (7))){
var state_34037__$1 = state_34037;
var statearr_34039_34072 = state_34037__$1;
(statearr_34039_34072[(2)] = null);

(statearr_34039_34072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (1))){
var state_34037__$1 = state_34037;
var statearr_34040_34073 = state_34037__$1;
(statearr_34040_34073[(2)] = null);

(statearr_34040_34073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (4))){
var inst_34001 = (state_34037[(7)]);
var inst_34003 = (inst_34001 < cnt);
var state_34037__$1 = state_34037;
if(cljs.core.truth_(inst_34003)){
var statearr_34041_34074 = state_34037__$1;
(statearr_34041_34074[(1)] = (6));

} else {
var statearr_34042_34075 = state_34037__$1;
(statearr_34042_34075[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (15))){
var inst_34033 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
var statearr_34043_34076 = state_34037__$1;
(statearr_34043_34076[(2)] = inst_34033);

(statearr_34043_34076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (13))){
var inst_34026 = cljs.core.async.close_BANG_.call(null,out);
var state_34037__$1 = state_34037;
var statearr_34044_34077 = state_34037__$1;
(statearr_34044_34077[(2)] = inst_34026);

(statearr_34044_34077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (6))){
var state_34037__$1 = state_34037;
var statearr_34045_34078 = state_34037__$1;
(statearr_34045_34078[(2)] = null);

(statearr_34045_34078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (3))){
var inst_34035 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34037__$1,inst_34035);
} else {
if((state_val_34038 === (12))){
var inst_34023 = (state_34037[(8)]);
var inst_34023__$1 = (state_34037[(2)]);
var inst_34024 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34023__$1);
var state_34037__$1 = (function (){var statearr_34046 = state_34037;
(statearr_34046[(8)] = inst_34023__$1);

return statearr_34046;
})();
if(cljs.core.truth_(inst_34024)){
var statearr_34047_34079 = state_34037__$1;
(statearr_34047_34079[(1)] = (13));

} else {
var statearr_34048_34080 = state_34037__$1;
(statearr_34048_34080[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (2))){
var inst_34000 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34001 = (0);
var state_34037__$1 = (function (){var statearr_34049 = state_34037;
(statearr_34049[(9)] = inst_34000);

(statearr_34049[(7)] = inst_34001);

return statearr_34049;
})();
var statearr_34050_34081 = state_34037__$1;
(statearr_34050_34081[(2)] = null);

(statearr_34050_34081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (11))){
var inst_34001 = (state_34037[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34037,(10),Object,null,(9));
var inst_34010 = chs__$1.call(null,inst_34001);
var inst_34011 = done.call(null,inst_34001);
var inst_34012 = cljs.core.async.take_BANG_.call(null,inst_34010,inst_34011);
var state_34037__$1 = state_34037;
var statearr_34051_34082 = state_34037__$1;
(statearr_34051_34082[(2)] = inst_34012);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34037__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (9))){
var inst_34001 = (state_34037[(7)]);
var inst_34014 = (state_34037[(2)]);
var inst_34015 = (inst_34001 + (1));
var inst_34001__$1 = inst_34015;
var state_34037__$1 = (function (){var statearr_34052 = state_34037;
(statearr_34052[(7)] = inst_34001__$1);

(statearr_34052[(10)] = inst_34014);

return statearr_34052;
})();
var statearr_34053_34083 = state_34037__$1;
(statearr_34053_34083[(2)] = null);

(statearr_34053_34083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (5))){
var inst_34021 = (state_34037[(2)]);
var state_34037__$1 = (function (){var statearr_34054 = state_34037;
(statearr_34054[(11)] = inst_34021);

return statearr_34054;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34037__$1,(12),dchan);
} else {
if((state_val_34038 === (14))){
var inst_34023 = (state_34037[(8)]);
var inst_34028 = cljs.core.apply.call(null,f,inst_34023);
var state_34037__$1 = state_34037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34037__$1,(16),out,inst_34028);
} else {
if((state_val_34038 === (16))){
var inst_34030 = (state_34037[(2)]);
var state_34037__$1 = (function (){var statearr_34055 = state_34037;
(statearr_34055[(12)] = inst_34030);

return statearr_34055;
})();
var statearr_34056_34084 = state_34037__$1;
(statearr_34056_34084[(2)] = null);

(statearr_34056_34084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (10))){
var inst_34005 = (state_34037[(2)]);
var inst_34006 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34037__$1 = (function (){var statearr_34057 = state_34037;
(statearr_34057[(13)] = inst_34005);

return statearr_34057;
})();
var statearr_34058_34085 = state_34037__$1;
(statearr_34058_34085[(2)] = inst_34006);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34037__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34038 === (8))){
var inst_34019 = (state_34037[(2)]);
var state_34037__$1 = state_34037;
var statearr_34059_34086 = state_34037__$1;
(statearr_34059_34086[(2)] = inst_34019);

(statearr_34059_34086[(1)] = (5));


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
});})(c__21877__auto___34071,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21812__auto__,c__21877__auto___34071,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21813__auto__ = null;
var cljs$core$async$state_machine__21813__auto____0 = (function (){
var statearr_34063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34063[(0)] = cljs$core$async$state_machine__21813__auto__);

(statearr_34063[(1)] = (1));

return statearr_34063;
});
var cljs$core$async$state_machine__21813__auto____1 = (function (state_34037){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_34037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e34064){if((e34064 instanceof Object)){
var ex__21816__auto__ = e34064;
var statearr_34065_34087 = state_34037;
(statearr_34065_34087[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34088 = state_34037;
state_34037 = G__34088;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$state_machine__21813__auto__ = function(state_34037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21813__auto____1.call(this,state_34037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21813__auto____0;
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21813__auto____1;
return cljs$core$async$state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___34071,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21879__auto__ = (function (){var statearr_34066 = f__21878__auto__.call(null);
(statearr_34066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___34071);

return statearr_34066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___34071,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args34090 = [];
var len__18249__auto___34146 = arguments.length;
var i__18250__auto___34147 = (0);
while(true){
if((i__18250__auto___34147 < len__18249__auto___34146)){
args34090.push((arguments[i__18250__auto___34147]));

var G__34148 = (i__18250__auto___34147 + (1));
i__18250__auto___34147 = G__34148;
continue;
} else {
}
break;
}

var G__34092 = args34090.length;
switch (G__34092) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34090.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21877__auto___34150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___34150,out){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___34150,out){
return (function (state_34122){
var state_val_34123 = (state_34122[(1)]);
if((state_val_34123 === (7))){
var inst_34101 = (state_34122[(7)]);
var inst_34102 = (state_34122[(8)]);
var inst_34101__$1 = (state_34122[(2)]);
var inst_34102__$1 = cljs.core.nth.call(null,inst_34101__$1,(0),null);
var inst_34103 = cljs.core.nth.call(null,inst_34101__$1,(1),null);
var inst_34104 = (inst_34102__$1 == null);
var state_34122__$1 = (function (){var statearr_34124 = state_34122;
(statearr_34124[(7)] = inst_34101__$1);

(statearr_34124[(9)] = inst_34103);

(statearr_34124[(8)] = inst_34102__$1);

return statearr_34124;
})();
if(cljs.core.truth_(inst_34104)){
var statearr_34125_34151 = state_34122__$1;
(statearr_34125_34151[(1)] = (8));

} else {
var statearr_34126_34152 = state_34122__$1;
(statearr_34126_34152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (1))){
var inst_34093 = cljs.core.vec.call(null,chs);
var inst_34094 = inst_34093;
var state_34122__$1 = (function (){var statearr_34127 = state_34122;
(statearr_34127[(10)] = inst_34094);

return statearr_34127;
})();
var statearr_34128_34153 = state_34122__$1;
(statearr_34128_34153[(2)] = null);

(statearr_34128_34153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (4))){
var inst_34094 = (state_34122[(10)]);
var state_34122__$1 = state_34122;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34122__$1,(7),inst_34094);
} else {
if((state_val_34123 === (6))){
var inst_34118 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34129_34154 = state_34122__$1;
(statearr_34129_34154[(2)] = inst_34118);

(statearr_34129_34154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (3))){
var inst_34120 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34122__$1,inst_34120);
} else {
if((state_val_34123 === (2))){
var inst_34094 = (state_34122[(10)]);
var inst_34096 = cljs.core.count.call(null,inst_34094);
var inst_34097 = (inst_34096 > (0));
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34097)){
var statearr_34131_34155 = state_34122__$1;
(statearr_34131_34155[(1)] = (4));

} else {
var statearr_34132_34156 = state_34122__$1;
(statearr_34132_34156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (11))){
var inst_34094 = (state_34122[(10)]);
var inst_34111 = (state_34122[(2)]);
var tmp34130 = inst_34094;
var inst_34094__$1 = tmp34130;
var state_34122__$1 = (function (){var statearr_34133 = state_34122;
(statearr_34133[(10)] = inst_34094__$1);

(statearr_34133[(11)] = inst_34111);

return statearr_34133;
})();
var statearr_34134_34157 = state_34122__$1;
(statearr_34134_34157[(2)] = null);

(statearr_34134_34157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (9))){
var inst_34102 = (state_34122[(8)]);
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34122__$1,(11),out,inst_34102);
} else {
if((state_val_34123 === (5))){
var inst_34116 = cljs.core.async.close_BANG_.call(null,out);
var state_34122__$1 = state_34122;
var statearr_34135_34158 = state_34122__$1;
(statearr_34135_34158[(2)] = inst_34116);

(statearr_34135_34158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (10))){
var inst_34114 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34136_34159 = state_34122__$1;
(statearr_34136_34159[(2)] = inst_34114);

(statearr_34136_34159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (8))){
var inst_34094 = (state_34122[(10)]);
var inst_34101 = (state_34122[(7)]);
var inst_34103 = (state_34122[(9)]);
var inst_34102 = (state_34122[(8)]);
var inst_34106 = (function (){var cs = inst_34094;
var vec__34099 = inst_34101;
var v = inst_34102;
var c = inst_34103;
return ((function (cs,vec__34099,v,c,inst_34094,inst_34101,inst_34103,inst_34102,state_val_34123,c__21877__auto___34150,out){
return (function (p1__34089_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34089_SHARP_);
});
;})(cs,vec__34099,v,c,inst_34094,inst_34101,inst_34103,inst_34102,state_val_34123,c__21877__auto___34150,out))
})();
var inst_34107 = cljs.core.filterv.call(null,inst_34106,inst_34094);
var inst_34094__$1 = inst_34107;
var state_34122__$1 = (function (){var statearr_34137 = state_34122;
(statearr_34137[(10)] = inst_34094__$1);

return statearr_34137;
})();
var statearr_34138_34160 = state_34122__$1;
(statearr_34138_34160[(2)] = null);

(statearr_34138_34160[(1)] = (2));


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
});})(c__21877__auto___34150,out))
;
return ((function (switch__21812__auto__,c__21877__auto___34150,out){
return (function() {
var cljs$core$async$state_machine__21813__auto__ = null;
var cljs$core$async$state_machine__21813__auto____0 = (function (){
var statearr_34142 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34142[(0)] = cljs$core$async$state_machine__21813__auto__);

(statearr_34142[(1)] = (1));

return statearr_34142;
});
var cljs$core$async$state_machine__21813__auto____1 = (function (state_34122){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_34122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e34143){if((e34143 instanceof Object)){
var ex__21816__auto__ = e34143;
var statearr_34144_34161 = state_34122;
(statearr_34144_34161[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34162 = state_34122;
state_34122 = G__34162;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$state_machine__21813__auto__ = function(state_34122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21813__auto____1.call(this,state_34122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21813__auto____0;
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21813__auto____1;
return cljs$core$async$state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___34150,out))
})();
var state__21879__auto__ = (function (){var statearr_34145 = f__21878__auto__.call(null);
(statearr_34145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___34150);

return statearr_34145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___34150,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args34163 = [];
var len__18249__auto___34212 = arguments.length;
var i__18250__auto___34213 = (0);
while(true){
if((i__18250__auto___34213 < len__18249__auto___34212)){
args34163.push((arguments[i__18250__auto___34213]));

var G__34214 = (i__18250__auto___34213 + (1));
i__18250__auto___34213 = G__34214;
continue;
} else {
}
break;
}

var G__34165 = args34163.length;
switch (G__34165) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34163.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21877__auto___34216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___34216,out){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___34216,out){
return (function (state_34189){
var state_val_34190 = (state_34189[(1)]);
if((state_val_34190 === (7))){
var inst_34171 = (state_34189[(7)]);
var inst_34171__$1 = (state_34189[(2)]);
var inst_34172 = (inst_34171__$1 == null);
var inst_34173 = cljs.core.not.call(null,inst_34172);
var state_34189__$1 = (function (){var statearr_34191 = state_34189;
(statearr_34191[(7)] = inst_34171__$1);

return statearr_34191;
})();
if(inst_34173){
var statearr_34192_34217 = state_34189__$1;
(statearr_34192_34217[(1)] = (8));

} else {
var statearr_34193_34218 = state_34189__$1;
(statearr_34193_34218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (1))){
var inst_34166 = (0);
var state_34189__$1 = (function (){var statearr_34194 = state_34189;
(statearr_34194[(8)] = inst_34166);

return statearr_34194;
})();
var statearr_34195_34219 = state_34189__$1;
(statearr_34195_34219[(2)] = null);

(statearr_34195_34219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (4))){
var state_34189__$1 = state_34189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34189__$1,(7),ch);
} else {
if((state_val_34190 === (6))){
var inst_34184 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34196_34220 = state_34189__$1;
(statearr_34196_34220[(2)] = inst_34184);

(statearr_34196_34220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (3))){
var inst_34186 = (state_34189[(2)]);
var inst_34187 = cljs.core.async.close_BANG_.call(null,out);
var state_34189__$1 = (function (){var statearr_34197 = state_34189;
(statearr_34197[(9)] = inst_34186);

return statearr_34197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34189__$1,inst_34187);
} else {
if((state_val_34190 === (2))){
var inst_34166 = (state_34189[(8)]);
var inst_34168 = (inst_34166 < n);
var state_34189__$1 = state_34189;
if(cljs.core.truth_(inst_34168)){
var statearr_34198_34221 = state_34189__$1;
(statearr_34198_34221[(1)] = (4));

} else {
var statearr_34199_34222 = state_34189__$1;
(statearr_34199_34222[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (11))){
var inst_34166 = (state_34189[(8)]);
var inst_34176 = (state_34189[(2)]);
var inst_34177 = (inst_34166 + (1));
var inst_34166__$1 = inst_34177;
var state_34189__$1 = (function (){var statearr_34200 = state_34189;
(statearr_34200[(8)] = inst_34166__$1);

(statearr_34200[(10)] = inst_34176);

return statearr_34200;
})();
var statearr_34201_34223 = state_34189__$1;
(statearr_34201_34223[(2)] = null);

(statearr_34201_34223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (9))){
var state_34189__$1 = state_34189;
var statearr_34202_34224 = state_34189__$1;
(statearr_34202_34224[(2)] = null);

(statearr_34202_34224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (5))){
var state_34189__$1 = state_34189;
var statearr_34203_34225 = state_34189__$1;
(statearr_34203_34225[(2)] = null);

(statearr_34203_34225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (10))){
var inst_34181 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34204_34226 = state_34189__$1;
(statearr_34204_34226[(2)] = inst_34181);

(statearr_34204_34226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (8))){
var inst_34171 = (state_34189[(7)]);
var state_34189__$1 = state_34189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34189__$1,(11),out,inst_34171);
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
});})(c__21877__auto___34216,out))
;
return ((function (switch__21812__auto__,c__21877__auto___34216,out){
return (function() {
var cljs$core$async$state_machine__21813__auto__ = null;
var cljs$core$async$state_machine__21813__auto____0 = (function (){
var statearr_34208 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34208[(0)] = cljs$core$async$state_machine__21813__auto__);

(statearr_34208[(1)] = (1));

return statearr_34208;
});
var cljs$core$async$state_machine__21813__auto____1 = (function (state_34189){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_34189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e34209){if((e34209 instanceof Object)){
var ex__21816__auto__ = e34209;
var statearr_34210_34227 = state_34189;
(statearr_34210_34227[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34228 = state_34189;
state_34189 = G__34228;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$state_machine__21813__auto__ = function(state_34189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21813__auto____1.call(this,state_34189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21813__auto____0;
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21813__auto____1;
return cljs$core$async$state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___34216,out))
})();
var state__21879__auto__ = (function (){var statearr_34211 = f__21878__auto__.call(null);
(statearr_34211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___34216);

return statearr_34211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___34216,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34236 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34236 = (function (map_LT_,f,ch,meta34237){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34237 = meta34237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34238,meta34237__$1){
var self__ = this;
var _34238__$1 = this;
return (new cljs.core.async.t_cljs$core$async34236(self__.map_LT_,self__.f,self__.ch,meta34237__$1));
});

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34238){
var self__ = this;
var _34238__$1 = this;
return self__.meta34237;
});

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34239 = (function (map_LT_,f,ch,meta34237,_,fn1,meta34240){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34237 = meta34237;
this._ = _;
this.fn1 = fn1;
this.meta34240 = meta34240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34241,meta34240__$1){
var self__ = this;
var _34241__$1 = this;
return (new cljs.core.async.t_cljs$core$async34239(self__.map_LT_,self__.f,self__.ch,self__.meta34237,self__._,self__.fn1,meta34240__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34241){
var self__ = this;
var _34241__$1 = this;
return self__.meta34240;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34239.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34229_SHARP_){
return f1.call(null,(((p1__34229_SHARP_ == null))?null:self__.f.call(null,p1__34229_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34239.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34237","meta34237",729631938,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34236","cljs.core.async/t_cljs$core$async34236",-1572054849,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34240","meta34240",314384541,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34239";

cljs.core.async.t_cljs$core$async34239.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async34239");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34239 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34239(map_LT___$1,f__$1,ch__$1,meta34237__$1,___$2,fn1__$1,meta34240){
return (new cljs.core.async.t_cljs$core$async34239(map_LT___$1,f__$1,ch__$1,meta34237__$1,___$2,fn1__$1,meta34240));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34239(self__.map_LT_,self__.f,self__.ch,self__.meta34237,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17179__auto__ = ret;
if(cljs.core.truth_(and__17179__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17179__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34236.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34237","meta34237",729631938,null)], null);
});

cljs.core.async.t_cljs$core$async34236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34236";

cljs.core.async.t_cljs$core$async34236.cljs$lang$ctorPrWriter = (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async34236");
});

cljs.core.async.__GT_t_cljs$core$async34236 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34236(map_LT___$1,f__$1,ch__$1,meta34237){
return (new cljs.core.async.t_cljs$core$async34236(map_LT___$1,f__$1,ch__$1,meta34237));
});

}

return (new cljs.core.async.t_cljs$core$async34236(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34245 = (function (map_GT_,f,ch,meta34246){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34246 = meta34246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34247,meta34246__$1){
var self__ = this;
var _34247__$1 = this;
return (new cljs.core.async.t_cljs$core$async34245(self__.map_GT_,self__.f,self__.ch,meta34246__$1));
});

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34247){
var self__ = this;
var _34247__$1 = this;
return self__.meta34246;
});

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34246","meta34246",1417801467,null)], null);
});

cljs.core.async.t_cljs$core$async34245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34245";

cljs.core.async.t_cljs$core$async34245.cljs$lang$ctorPrWriter = (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async34245");
});

cljs.core.async.__GT_t_cljs$core$async34245 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34245(map_GT___$1,f__$1,ch__$1,meta34246){
return (new cljs.core.async.t_cljs$core$async34245(map_GT___$1,f__$1,ch__$1,meta34246));
});

}

return (new cljs.core.async.t_cljs$core$async34245(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34251 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34251 = (function (filter_GT_,p,ch,meta34252){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34252 = meta34252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34253,meta34252__$1){
var self__ = this;
var _34253__$1 = this;
return (new cljs.core.async.t_cljs$core$async34251(self__.filter_GT_,self__.p,self__.ch,meta34252__$1));
});

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34253){
var self__ = this;
var _34253__$1 = this;
return self__.meta34252;
});

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34252","meta34252",334368649,null)], null);
});

cljs.core.async.t_cljs$core$async34251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34251";

cljs.core.async.t_cljs$core$async34251.cljs$lang$ctorPrWriter = (function (this__17789__auto__,writer__17790__auto__,opt__17791__auto__){
return cljs.core._write.call(null,writer__17790__auto__,"cljs.core.async/t_cljs$core$async34251");
});

cljs.core.async.__GT_t_cljs$core$async34251 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34251(filter_GT___$1,p__$1,ch__$1,meta34252){
return (new cljs.core.async.t_cljs$core$async34251(filter_GT___$1,p__$1,ch__$1,meta34252));
});

}

return (new cljs.core.async.t_cljs$core$async34251(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args34254 = [];
var len__18249__auto___34298 = arguments.length;
var i__18250__auto___34299 = (0);
while(true){
if((i__18250__auto___34299 < len__18249__auto___34298)){
args34254.push((arguments[i__18250__auto___34299]));

var G__34300 = (i__18250__auto___34299 + (1));
i__18250__auto___34299 = G__34300;
continue;
} else {
}
break;
}

var G__34256 = args34254.length;
switch (G__34256) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34254.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21877__auto___34302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___34302,out){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___34302,out){
return (function (state_34277){
var state_val_34278 = (state_34277[(1)]);
if((state_val_34278 === (7))){
var inst_34273 = (state_34277[(2)]);
var state_34277__$1 = state_34277;
var statearr_34279_34303 = state_34277__$1;
(statearr_34279_34303[(2)] = inst_34273);

(statearr_34279_34303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (1))){
var state_34277__$1 = state_34277;
var statearr_34280_34304 = state_34277__$1;
(statearr_34280_34304[(2)] = null);

(statearr_34280_34304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (4))){
var inst_34259 = (state_34277[(7)]);
var inst_34259__$1 = (state_34277[(2)]);
var inst_34260 = (inst_34259__$1 == null);
var state_34277__$1 = (function (){var statearr_34281 = state_34277;
(statearr_34281[(7)] = inst_34259__$1);

return statearr_34281;
})();
if(cljs.core.truth_(inst_34260)){
var statearr_34282_34305 = state_34277__$1;
(statearr_34282_34305[(1)] = (5));

} else {
var statearr_34283_34306 = state_34277__$1;
(statearr_34283_34306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (6))){
var inst_34259 = (state_34277[(7)]);
var inst_34264 = p.call(null,inst_34259);
var state_34277__$1 = state_34277;
if(cljs.core.truth_(inst_34264)){
var statearr_34284_34307 = state_34277__$1;
(statearr_34284_34307[(1)] = (8));

} else {
var statearr_34285_34308 = state_34277__$1;
(statearr_34285_34308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (3))){
var inst_34275 = (state_34277[(2)]);
var state_34277__$1 = state_34277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34277__$1,inst_34275);
} else {
if((state_val_34278 === (2))){
var state_34277__$1 = state_34277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34277__$1,(4),ch);
} else {
if((state_val_34278 === (11))){
var inst_34267 = (state_34277[(2)]);
var state_34277__$1 = state_34277;
var statearr_34286_34309 = state_34277__$1;
(statearr_34286_34309[(2)] = inst_34267);

(statearr_34286_34309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (9))){
var state_34277__$1 = state_34277;
var statearr_34287_34310 = state_34277__$1;
(statearr_34287_34310[(2)] = null);

(statearr_34287_34310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (5))){
var inst_34262 = cljs.core.async.close_BANG_.call(null,out);
var state_34277__$1 = state_34277;
var statearr_34288_34311 = state_34277__$1;
(statearr_34288_34311[(2)] = inst_34262);

(statearr_34288_34311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (10))){
var inst_34270 = (state_34277[(2)]);
var state_34277__$1 = (function (){var statearr_34289 = state_34277;
(statearr_34289[(8)] = inst_34270);

return statearr_34289;
})();
var statearr_34290_34312 = state_34277__$1;
(statearr_34290_34312[(2)] = null);

(statearr_34290_34312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34278 === (8))){
var inst_34259 = (state_34277[(7)]);
var state_34277__$1 = state_34277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34277__$1,(11),out,inst_34259);
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
});})(c__21877__auto___34302,out))
;
return ((function (switch__21812__auto__,c__21877__auto___34302,out){
return (function() {
var cljs$core$async$state_machine__21813__auto__ = null;
var cljs$core$async$state_machine__21813__auto____0 = (function (){
var statearr_34294 = [null,null,null,null,null,null,null,null,null];
(statearr_34294[(0)] = cljs$core$async$state_machine__21813__auto__);

(statearr_34294[(1)] = (1));

return statearr_34294;
});
var cljs$core$async$state_machine__21813__auto____1 = (function (state_34277){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_34277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e34295){if((e34295 instanceof Object)){
var ex__21816__auto__ = e34295;
var statearr_34296_34313 = state_34277;
(statearr_34296_34313[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34314 = state_34277;
state_34277 = G__34314;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$state_machine__21813__auto__ = function(state_34277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21813__auto____1.call(this,state_34277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21813__auto____0;
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21813__auto____1;
return cljs$core$async$state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___34302,out))
})();
var state__21879__auto__ = (function (){var statearr_34297 = f__21878__auto__.call(null);
(statearr_34297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___34302);

return statearr_34297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___34302,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34315 = [];
var len__18249__auto___34318 = arguments.length;
var i__18250__auto___34319 = (0);
while(true){
if((i__18250__auto___34319 < len__18249__auto___34318)){
args34315.push((arguments[i__18250__auto___34319]));

var G__34320 = (i__18250__auto___34319 + (1));
i__18250__auto___34319 = G__34320;
continue;
} else {
}
break;
}

var G__34317 = args34315.length;
switch (G__34317) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34315.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21877__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto__){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto__){
return (function (state_34487){
var state_val_34488 = (state_34487[(1)]);
if((state_val_34488 === (7))){
var inst_34483 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
var statearr_34489_34530 = state_34487__$1;
(statearr_34489_34530[(2)] = inst_34483);

(statearr_34489_34530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (20))){
var inst_34453 = (state_34487[(7)]);
var inst_34464 = (state_34487[(2)]);
var inst_34465 = cljs.core.next.call(null,inst_34453);
var inst_34439 = inst_34465;
var inst_34440 = null;
var inst_34441 = (0);
var inst_34442 = (0);
var state_34487__$1 = (function (){var statearr_34490 = state_34487;
(statearr_34490[(8)] = inst_34464);

(statearr_34490[(9)] = inst_34440);

(statearr_34490[(10)] = inst_34439);

(statearr_34490[(11)] = inst_34441);

(statearr_34490[(12)] = inst_34442);

return statearr_34490;
})();
var statearr_34491_34531 = state_34487__$1;
(statearr_34491_34531[(2)] = null);

(statearr_34491_34531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (1))){
var state_34487__$1 = state_34487;
var statearr_34492_34532 = state_34487__$1;
(statearr_34492_34532[(2)] = null);

(statearr_34492_34532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (4))){
var inst_34428 = (state_34487[(13)]);
var inst_34428__$1 = (state_34487[(2)]);
var inst_34429 = (inst_34428__$1 == null);
var state_34487__$1 = (function (){var statearr_34493 = state_34487;
(statearr_34493[(13)] = inst_34428__$1);

return statearr_34493;
})();
if(cljs.core.truth_(inst_34429)){
var statearr_34494_34533 = state_34487__$1;
(statearr_34494_34533[(1)] = (5));

} else {
var statearr_34495_34534 = state_34487__$1;
(statearr_34495_34534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (15))){
var state_34487__$1 = state_34487;
var statearr_34499_34535 = state_34487__$1;
(statearr_34499_34535[(2)] = null);

(statearr_34499_34535[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (21))){
var state_34487__$1 = state_34487;
var statearr_34500_34536 = state_34487__$1;
(statearr_34500_34536[(2)] = null);

(statearr_34500_34536[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (13))){
var inst_34440 = (state_34487[(9)]);
var inst_34439 = (state_34487[(10)]);
var inst_34441 = (state_34487[(11)]);
var inst_34442 = (state_34487[(12)]);
var inst_34449 = (state_34487[(2)]);
var inst_34450 = (inst_34442 + (1));
var tmp34496 = inst_34440;
var tmp34497 = inst_34439;
var tmp34498 = inst_34441;
var inst_34439__$1 = tmp34497;
var inst_34440__$1 = tmp34496;
var inst_34441__$1 = tmp34498;
var inst_34442__$1 = inst_34450;
var state_34487__$1 = (function (){var statearr_34501 = state_34487;
(statearr_34501[(9)] = inst_34440__$1);

(statearr_34501[(10)] = inst_34439__$1);

(statearr_34501[(11)] = inst_34441__$1);

(statearr_34501[(14)] = inst_34449);

(statearr_34501[(12)] = inst_34442__$1);

return statearr_34501;
})();
var statearr_34502_34537 = state_34487__$1;
(statearr_34502_34537[(2)] = null);

(statearr_34502_34537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (22))){
var state_34487__$1 = state_34487;
var statearr_34503_34538 = state_34487__$1;
(statearr_34503_34538[(2)] = null);

(statearr_34503_34538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (6))){
var inst_34428 = (state_34487[(13)]);
var inst_34437 = f.call(null,inst_34428);
var inst_34438 = cljs.core.seq.call(null,inst_34437);
var inst_34439 = inst_34438;
var inst_34440 = null;
var inst_34441 = (0);
var inst_34442 = (0);
var state_34487__$1 = (function (){var statearr_34504 = state_34487;
(statearr_34504[(9)] = inst_34440);

(statearr_34504[(10)] = inst_34439);

(statearr_34504[(11)] = inst_34441);

(statearr_34504[(12)] = inst_34442);

return statearr_34504;
})();
var statearr_34505_34539 = state_34487__$1;
(statearr_34505_34539[(2)] = null);

(statearr_34505_34539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (17))){
var inst_34453 = (state_34487[(7)]);
var inst_34457 = cljs.core.chunk_first.call(null,inst_34453);
var inst_34458 = cljs.core.chunk_rest.call(null,inst_34453);
var inst_34459 = cljs.core.count.call(null,inst_34457);
var inst_34439 = inst_34458;
var inst_34440 = inst_34457;
var inst_34441 = inst_34459;
var inst_34442 = (0);
var state_34487__$1 = (function (){var statearr_34506 = state_34487;
(statearr_34506[(9)] = inst_34440);

(statearr_34506[(10)] = inst_34439);

(statearr_34506[(11)] = inst_34441);

(statearr_34506[(12)] = inst_34442);

return statearr_34506;
})();
var statearr_34507_34540 = state_34487__$1;
(statearr_34507_34540[(2)] = null);

(statearr_34507_34540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (3))){
var inst_34485 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34487__$1,inst_34485);
} else {
if((state_val_34488 === (12))){
var inst_34473 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
var statearr_34508_34541 = state_34487__$1;
(statearr_34508_34541[(2)] = inst_34473);

(statearr_34508_34541[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (2))){
var state_34487__$1 = state_34487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34487__$1,(4),in$);
} else {
if((state_val_34488 === (23))){
var inst_34481 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
var statearr_34509_34542 = state_34487__$1;
(statearr_34509_34542[(2)] = inst_34481);

(statearr_34509_34542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (19))){
var inst_34468 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
var statearr_34510_34543 = state_34487__$1;
(statearr_34510_34543[(2)] = inst_34468);

(statearr_34510_34543[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (11))){
var inst_34453 = (state_34487[(7)]);
var inst_34439 = (state_34487[(10)]);
var inst_34453__$1 = cljs.core.seq.call(null,inst_34439);
var state_34487__$1 = (function (){var statearr_34511 = state_34487;
(statearr_34511[(7)] = inst_34453__$1);

return statearr_34511;
})();
if(inst_34453__$1){
var statearr_34512_34544 = state_34487__$1;
(statearr_34512_34544[(1)] = (14));

} else {
var statearr_34513_34545 = state_34487__$1;
(statearr_34513_34545[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (9))){
var inst_34475 = (state_34487[(2)]);
var inst_34476 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34487__$1 = (function (){var statearr_34514 = state_34487;
(statearr_34514[(15)] = inst_34475);

return statearr_34514;
})();
if(cljs.core.truth_(inst_34476)){
var statearr_34515_34546 = state_34487__$1;
(statearr_34515_34546[(1)] = (21));

} else {
var statearr_34516_34547 = state_34487__$1;
(statearr_34516_34547[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (5))){
var inst_34431 = cljs.core.async.close_BANG_.call(null,out);
var state_34487__$1 = state_34487;
var statearr_34517_34548 = state_34487__$1;
(statearr_34517_34548[(2)] = inst_34431);

(statearr_34517_34548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (14))){
var inst_34453 = (state_34487[(7)]);
var inst_34455 = cljs.core.chunked_seq_QMARK_.call(null,inst_34453);
var state_34487__$1 = state_34487;
if(inst_34455){
var statearr_34518_34549 = state_34487__$1;
(statearr_34518_34549[(1)] = (17));

} else {
var statearr_34519_34550 = state_34487__$1;
(statearr_34519_34550[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (16))){
var inst_34471 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
var statearr_34520_34551 = state_34487__$1;
(statearr_34520_34551[(2)] = inst_34471);

(statearr_34520_34551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (10))){
var inst_34440 = (state_34487[(9)]);
var inst_34442 = (state_34487[(12)]);
var inst_34447 = cljs.core._nth.call(null,inst_34440,inst_34442);
var state_34487__$1 = state_34487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34487__$1,(13),out,inst_34447);
} else {
if((state_val_34488 === (18))){
var inst_34453 = (state_34487[(7)]);
var inst_34462 = cljs.core.first.call(null,inst_34453);
var state_34487__$1 = state_34487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34487__$1,(20),out,inst_34462);
} else {
if((state_val_34488 === (8))){
var inst_34441 = (state_34487[(11)]);
var inst_34442 = (state_34487[(12)]);
var inst_34444 = (inst_34442 < inst_34441);
var inst_34445 = inst_34444;
var state_34487__$1 = state_34487;
if(cljs.core.truth_(inst_34445)){
var statearr_34521_34552 = state_34487__$1;
(statearr_34521_34552[(1)] = (10));

} else {
var statearr_34522_34553 = state_34487__$1;
(statearr_34522_34553[(1)] = (11));

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
});})(c__21877__auto__))
;
return ((function (switch__21812__auto__,c__21877__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21813__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21813__auto____0 = (function (){
var statearr_34526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34526[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21813__auto__);

(statearr_34526[(1)] = (1));

return statearr_34526;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21813__auto____1 = (function (state_34487){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_34487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e34527){if((e34527 instanceof Object)){
var ex__21816__auto__ = e34527;
var statearr_34528_34554 = state_34487;
(statearr_34528_34554[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34555 = state_34487;
state_34487 = G__34555;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21813__auto__ = function(state_34487){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21813__auto____1.call(this,state_34487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21813__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21813__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto__))
})();
var state__21879__auto__ = (function (){var statearr_34529 = f__21878__auto__.call(null);
(statearr_34529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto__);

return statearr_34529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto__))
);

return c__21877__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34556 = [];
var len__18249__auto___34559 = arguments.length;
var i__18250__auto___34560 = (0);
while(true){
if((i__18250__auto___34560 < len__18249__auto___34559)){
args34556.push((arguments[i__18250__auto___34560]));

var G__34561 = (i__18250__auto___34560 + (1));
i__18250__auto___34560 = G__34561;
continue;
} else {
}
break;
}

var G__34558 = args34556.length;
switch (G__34558) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34556.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args34563 = [];
var len__18249__auto___34566 = arguments.length;
var i__18250__auto___34567 = (0);
while(true){
if((i__18250__auto___34567 < len__18249__auto___34566)){
args34563.push((arguments[i__18250__auto___34567]));

var G__34568 = (i__18250__auto___34567 + (1));
i__18250__auto___34567 = G__34568;
continue;
} else {
}
break;
}

var G__34565 = args34563.length;
switch (G__34565) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34563.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args34570 = [];
var len__18249__auto___34621 = arguments.length;
var i__18250__auto___34622 = (0);
while(true){
if((i__18250__auto___34622 < len__18249__auto___34621)){
args34570.push((arguments[i__18250__auto___34622]));

var G__34623 = (i__18250__auto___34622 + (1));
i__18250__auto___34622 = G__34623;
continue;
} else {
}
break;
}

var G__34572 = args34570.length;
switch (G__34572) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34570.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21877__auto___34625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___34625,out){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___34625,out){
return (function (state_34596){
var state_val_34597 = (state_34596[(1)]);
if((state_val_34597 === (7))){
var inst_34591 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
var statearr_34598_34626 = state_34596__$1;
(statearr_34598_34626[(2)] = inst_34591);

(statearr_34598_34626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (1))){
var inst_34573 = null;
var state_34596__$1 = (function (){var statearr_34599 = state_34596;
(statearr_34599[(7)] = inst_34573);

return statearr_34599;
})();
var statearr_34600_34627 = state_34596__$1;
(statearr_34600_34627[(2)] = null);

(statearr_34600_34627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (4))){
var inst_34576 = (state_34596[(8)]);
var inst_34576__$1 = (state_34596[(2)]);
var inst_34577 = (inst_34576__$1 == null);
var inst_34578 = cljs.core.not.call(null,inst_34577);
var state_34596__$1 = (function (){var statearr_34601 = state_34596;
(statearr_34601[(8)] = inst_34576__$1);

return statearr_34601;
})();
if(inst_34578){
var statearr_34602_34628 = state_34596__$1;
(statearr_34602_34628[(1)] = (5));

} else {
var statearr_34603_34629 = state_34596__$1;
(statearr_34603_34629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (6))){
var state_34596__$1 = state_34596;
var statearr_34604_34630 = state_34596__$1;
(statearr_34604_34630[(2)] = null);

(statearr_34604_34630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (3))){
var inst_34593 = (state_34596[(2)]);
var inst_34594 = cljs.core.async.close_BANG_.call(null,out);
var state_34596__$1 = (function (){var statearr_34605 = state_34596;
(statearr_34605[(9)] = inst_34593);

return statearr_34605;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34596__$1,inst_34594);
} else {
if((state_val_34597 === (2))){
var state_34596__$1 = state_34596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34596__$1,(4),ch);
} else {
if((state_val_34597 === (11))){
var inst_34576 = (state_34596[(8)]);
var inst_34585 = (state_34596[(2)]);
var inst_34573 = inst_34576;
var state_34596__$1 = (function (){var statearr_34606 = state_34596;
(statearr_34606[(10)] = inst_34585);

(statearr_34606[(7)] = inst_34573);

return statearr_34606;
})();
var statearr_34607_34631 = state_34596__$1;
(statearr_34607_34631[(2)] = null);

(statearr_34607_34631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (9))){
var inst_34576 = (state_34596[(8)]);
var state_34596__$1 = state_34596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34596__$1,(11),out,inst_34576);
} else {
if((state_val_34597 === (5))){
var inst_34576 = (state_34596[(8)]);
var inst_34573 = (state_34596[(7)]);
var inst_34580 = cljs.core._EQ_.call(null,inst_34576,inst_34573);
var state_34596__$1 = state_34596;
if(inst_34580){
var statearr_34609_34632 = state_34596__$1;
(statearr_34609_34632[(1)] = (8));

} else {
var statearr_34610_34633 = state_34596__$1;
(statearr_34610_34633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (10))){
var inst_34588 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
var statearr_34611_34634 = state_34596__$1;
(statearr_34611_34634[(2)] = inst_34588);

(statearr_34611_34634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (8))){
var inst_34573 = (state_34596[(7)]);
var tmp34608 = inst_34573;
var inst_34573__$1 = tmp34608;
var state_34596__$1 = (function (){var statearr_34612 = state_34596;
(statearr_34612[(7)] = inst_34573__$1);

return statearr_34612;
})();
var statearr_34613_34635 = state_34596__$1;
(statearr_34613_34635[(2)] = null);

(statearr_34613_34635[(1)] = (2));


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
});})(c__21877__auto___34625,out))
;
return ((function (switch__21812__auto__,c__21877__auto___34625,out){
return (function() {
var cljs$core$async$state_machine__21813__auto__ = null;
var cljs$core$async$state_machine__21813__auto____0 = (function (){
var statearr_34617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34617[(0)] = cljs$core$async$state_machine__21813__auto__);

(statearr_34617[(1)] = (1));

return statearr_34617;
});
var cljs$core$async$state_machine__21813__auto____1 = (function (state_34596){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_34596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e34618){if((e34618 instanceof Object)){
var ex__21816__auto__ = e34618;
var statearr_34619_34636 = state_34596;
(statearr_34619_34636[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34637 = state_34596;
state_34596 = G__34637;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$state_machine__21813__auto__ = function(state_34596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21813__auto____1.call(this,state_34596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21813__auto____0;
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21813__auto____1;
return cljs$core$async$state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___34625,out))
})();
var state__21879__auto__ = (function (){var statearr_34620 = f__21878__auto__.call(null);
(statearr_34620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___34625);

return statearr_34620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___34625,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34638 = [];
var len__18249__auto___34708 = arguments.length;
var i__18250__auto___34709 = (0);
while(true){
if((i__18250__auto___34709 < len__18249__auto___34708)){
args34638.push((arguments[i__18250__auto___34709]));

var G__34710 = (i__18250__auto___34709 + (1));
i__18250__auto___34709 = G__34710;
continue;
} else {
}
break;
}

var G__34640 = args34638.length;
switch (G__34640) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34638.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21877__auto___34712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___34712,out){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___34712,out){
return (function (state_34678){
var state_val_34679 = (state_34678[(1)]);
if((state_val_34679 === (7))){
var inst_34674 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34680_34713 = state_34678__$1;
(statearr_34680_34713[(2)] = inst_34674);

(statearr_34680_34713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (1))){
var inst_34641 = (new Array(n));
var inst_34642 = inst_34641;
var inst_34643 = (0);
var state_34678__$1 = (function (){var statearr_34681 = state_34678;
(statearr_34681[(7)] = inst_34643);

(statearr_34681[(8)] = inst_34642);

return statearr_34681;
})();
var statearr_34682_34714 = state_34678__$1;
(statearr_34682_34714[(2)] = null);

(statearr_34682_34714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (4))){
var inst_34646 = (state_34678[(9)]);
var inst_34646__$1 = (state_34678[(2)]);
var inst_34647 = (inst_34646__$1 == null);
var inst_34648 = cljs.core.not.call(null,inst_34647);
var state_34678__$1 = (function (){var statearr_34683 = state_34678;
(statearr_34683[(9)] = inst_34646__$1);

return statearr_34683;
})();
if(inst_34648){
var statearr_34684_34715 = state_34678__$1;
(statearr_34684_34715[(1)] = (5));

} else {
var statearr_34685_34716 = state_34678__$1;
(statearr_34685_34716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (15))){
var inst_34668 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34686_34717 = state_34678__$1;
(statearr_34686_34717[(2)] = inst_34668);

(statearr_34686_34717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (13))){
var state_34678__$1 = state_34678;
var statearr_34687_34718 = state_34678__$1;
(statearr_34687_34718[(2)] = null);

(statearr_34687_34718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (6))){
var inst_34643 = (state_34678[(7)]);
var inst_34664 = (inst_34643 > (0));
var state_34678__$1 = state_34678;
if(cljs.core.truth_(inst_34664)){
var statearr_34688_34719 = state_34678__$1;
(statearr_34688_34719[(1)] = (12));

} else {
var statearr_34689_34720 = state_34678__$1;
(statearr_34689_34720[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (3))){
var inst_34676 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34678__$1,inst_34676);
} else {
if((state_val_34679 === (12))){
var inst_34642 = (state_34678[(8)]);
var inst_34666 = cljs.core.vec.call(null,inst_34642);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34678__$1,(15),out,inst_34666);
} else {
if((state_val_34679 === (2))){
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34678__$1,(4),ch);
} else {
if((state_val_34679 === (11))){
var inst_34658 = (state_34678[(2)]);
var inst_34659 = (new Array(n));
var inst_34642 = inst_34659;
var inst_34643 = (0);
var state_34678__$1 = (function (){var statearr_34690 = state_34678;
(statearr_34690[(10)] = inst_34658);

(statearr_34690[(7)] = inst_34643);

(statearr_34690[(8)] = inst_34642);

return statearr_34690;
})();
var statearr_34691_34721 = state_34678__$1;
(statearr_34691_34721[(2)] = null);

(statearr_34691_34721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (9))){
var inst_34642 = (state_34678[(8)]);
var inst_34656 = cljs.core.vec.call(null,inst_34642);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34678__$1,(11),out,inst_34656);
} else {
if((state_val_34679 === (5))){
var inst_34646 = (state_34678[(9)]);
var inst_34643 = (state_34678[(7)]);
var inst_34651 = (state_34678[(11)]);
var inst_34642 = (state_34678[(8)]);
var inst_34650 = (inst_34642[inst_34643] = inst_34646);
var inst_34651__$1 = (inst_34643 + (1));
var inst_34652 = (inst_34651__$1 < n);
var state_34678__$1 = (function (){var statearr_34692 = state_34678;
(statearr_34692[(11)] = inst_34651__$1);

(statearr_34692[(12)] = inst_34650);

return statearr_34692;
})();
if(cljs.core.truth_(inst_34652)){
var statearr_34693_34722 = state_34678__$1;
(statearr_34693_34722[(1)] = (8));

} else {
var statearr_34694_34723 = state_34678__$1;
(statearr_34694_34723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (14))){
var inst_34671 = (state_34678[(2)]);
var inst_34672 = cljs.core.async.close_BANG_.call(null,out);
var state_34678__$1 = (function (){var statearr_34696 = state_34678;
(statearr_34696[(13)] = inst_34671);

return statearr_34696;
})();
var statearr_34697_34724 = state_34678__$1;
(statearr_34697_34724[(2)] = inst_34672);

(statearr_34697_34724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (10))){
var inst_34662 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34698_34725 = state_34678__$1;
(statearr_34698_34725[(2)] = inst_34662);

(statearr_34698_34725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (8))){
var inst_34651 = (state_34678[(11)]);
var inst_34642 = (state_34678[(8)]);
var tmp34695 = inst_34642;
var inst_34642__$1 = tmp34695;
var inst_34643 = inst_34651;
var state_34678__$1 = (function (){var statearr_34699 = state_34678;
(statearr_34699[(7)] = inst_34643);

(statearr_34699[(8)] = inst_34642__$1);

return statearr_34699;
})();
var statearr_34700_34726 = state_34678__$1;
(statearr_34700_34726[(2)] = null);

(statearr_34700_34726[(1)] = (2));


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
});})(c__21877__auto___34712,out))
;
return ((function (switch__21812__auto__,c__21877__auto___34712,out){
return (function() {
var cljs$core$async$state_machine__21813__auto__ = null;
var cljs$core$async$state_machine__21813__auto____0 = (function (){
var statearr_34704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34704[(0)] = cljs$core$async$state_machine__21813__auto__);

(statearr_34704[(1)] = (1));

return statearr_34704;
});
var cljs$core$async$state_machine__21813__auto____1 = (function (state_34678){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_34678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e34705){if((e34705 instanceof Object)){
var ex__21816__auto__ = e34705;
var statearr_34706_34727 = state_34678;
(statearr_34706_34727[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34728 = state_34678;
state_34678 = G__34728;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$state_machine__21813__auto__ = function(state_34678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21813__auto____1.call(this,state_34678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21813__auto____0;
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21813__auto____1;
return cljs$core$async$state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___34712,out))
})();
var state__21879__auto__ = (function (){var statearr_34707 = f__21878__auto__.call(null);
(statearr_34707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___34712);

return statearr_34707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___34712,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34729 = [];
var len__18249__auto___34803 = arguments.length;
var i__18250__auto___34804 = (0);
while(true){
if((i__18250__auto___34804 < len__18249__auto___34803)){
args34729.push((arguments[i__18250__auto___34804]));

var G__34805 = (i__18250__auto___34804 + (1));
i__18250__auto___34804 = G__34805;
continue;
} else {
}
break;
}

var G__34731 = args34729.length;
switch (G__34731) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34729.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21877__auto___34807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21877__auto___34807,out){
return (function (){
var f__21878__auto__ = (function (){var switch__21812__auto__ = ((function (c__21877__auto___34807,out){
return (function (state_34773){
var state_val_34774 = (state_34773[(1)]);
if((state_val_34774 === (7))){
var inst_34769 = (state_34773[(2)]);
var state_34773__$1 = state_34773;
var statearr_34775_34808 = state_34773__$1;
(statearr_34775_34808[(2)] = inst_34769);

(statearr_34775_34808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (1))){
var inst_34732 = [];
var inst_34733 = inst_34732;
var inst_34734 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34773__$1 = (function (){var statearr_34776 = state_34773;
(statearr_34776[(7)] = inst_34734);

(statearr_34776[(8)] = inst_34733);

return statearr_34776;
})();
var statearr_34777_34809 = state_34773__$1;
(statearr_34777_34809[(2)] = null);

(statearr_34777_34809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (4))){
var inst_34737 = (state_34773[(9)]);
var inst_34737__$1 = (state_34773[(2)]);
var inst_34738 = (inst_34737__$1 == null);
var inst_34739 = cljs.core.not.call(null,inst_34738);
var state_34773__$1 = (function (){var statearr_34778 = state_34773;
(statearr_34778[(9)] = inst_34737__$1);

return statearr_34778;
})();
if(inst_34739){
var statearr_34779_34810 = state_34773__$1;
(statearr_34779_34810[(1)] = (5));

} else {
var statearr_34780_34811 = state_34773__$1;
(statearr_34780_34811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (15))){
var inst_34763 = (state_34773[(2)]);
var state_34773__$1 = state_34773;
var statearr_34781_34812 = state_34773__$1;
(statearr_34781_34812[(2)] = inst_34763);

(statearr_34781_34812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (13))){
var state_34773__$1 = state_34773;
var statearr_34782_34813 = state_34773__$1;
(statearr_34782_34813[(2)] = null);

(statearr_34782_34813[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (6))){
var inst_34733 = (state_34773[(8)]);
var inst_34758 = inst_34733.length;
var inst_34759 = (inst_34758 > (0));
var state_34773__$1 = state_34773;
if(cljs.core.truth_(inst_34759)){
var statearr_34783_34814 = state_34773__$1;
(statearr_34783_34814[(1)] = (12));

} else {
var statearr_34784_34815 = state_34773__$1;
(statearr_34784_34815[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (3))){
var inst_34771 = (state_34773[(2)]);
var state_34773__$1 = state_34773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34773__$1,inst_34771);
} else {
if((state_val_34774 === (12))){
var inst_34733 = (state_34773[(8)]);
var inst_34761 = cljs.core.vec.call(null,inst_34733);
var state_34773__$1 = state_34773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34773__$1,(15),out,inst_34761);
} else {
if((state_val_34774 === (2))){
var state_34773__$1 = state_34773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34773__$1,(4),ch);
} else {
if((state_val_34774 === (11))){
var inst_34737 = (state_34773[(9)]);
var inst_34741 = (state_34773[(10)]);
var inst_34751 = (state_34773[(2)]);
var inst_34752 = [];
var inst_34753 = inst_34752.push(inst_34737);
var inst_34733 = inst_34752;
var inst_34734 = inst_34741;
var state_34773__$1 = (function (){var statearr_34785 = state_34773;
(statearr_34785[(11)] = inst_34751);

(statearr_34785[(7)] = inst_34734);

(statearr_34785[(12)] = inst_34753);

(statearr_34785[(8)] = inst_34733);

return statearr_34785;
})();
var statearr_34786_34816 = state_34773__$1;
(statearr_34786_34816[(2)] = null);

(statearr_34786_34816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (9))){
var inst_34733 = (state_34773[(8)]);
var inst_34749 = cljs.core.vec.call(null,inst_34733);
var state_34773__$1 = state_34773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34773__$1,(11),out,inst_34749);
} else {
if((state_val_34774 === (5))){
var inst_34737 = (state_34773[(9)]);
var inst_34734 = (state_34773[(7)]);
var inst_34741 = (state_34773[(10)]);
var inst_34741__$1 = f.call(null,inst_34737);
var inst_34742 = cljs.core._EQ_.call(null,inst_34741__$1,inst_34734);
var inst_34743 = cljs.core.keyword_identical_QMARK_.call(null,inst_34734,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34744 = (inst_34742) || (inst_34743);
var state_34773__$1 = (function (){var statearr_34787 = state_34773;
(statearr_34787[(10)] = inst_34741__$1);

return statearr_34787;
})();
if(cljs.core.truth_(inst_34744)){
var statearr_34788_34817 = state_34773__$1;
(statearr_34788_34817[(1)] = (8));

} else {
var statearr_34789_34818 = state_34773__$1;
(statearr_34789_34818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (14))){
var inst_34766 = (state_34773[(2)]);
var inst_34767 = cljs.core.async.close_BANG_.call(null,out);
var state_34773__$1 = (function (){var statearr_34791 = state_34773;
(statearr_34791[(13)] = inst_34766);

return statearr_34791;
})();
var statearr_34792_34819 = state_34773__$1;
(statearr_34792_34819[(2)] = inst_34767);

(statearr_34792_34819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (10))){
var inst_34756 = (state_34773[(2)]);
var state_34773__$1 = state_34773;
var statearr_34793_34820 = state_34773__$1;
(statearr_34793_34820[(2)] = inst_34756);

(statearr_34793_34820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (8))){
var inst_34737 = (state_34773[(9)]);
var inst_34741 = (state_34773[(10)]);
var inst_34733 = (state_34773[(8)]);
var inst_34746 = inst_34733.push(inst_34737);
var tmp34790 = inst_34733;
var inst_34733__$1 = tmp34790;
var inst_34734 = inst_34741;
var state_34773__$1 = (function (){var statearr_34794 = state_34773;
(statearr_34794[(7)] = inst_34734);

(statearr_34794[(14)] = inst_34746);

(statearr_34794[(8)] = inst_34733__$1);

return statearr_34794;
})();
var statearr_34795_34821 = state_34773__$1;
(statearr_34795_34821[(2)] = null);

(statearr_34795_34821[(1)] = (2));


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
});})(c__21877__auto___34807,out))
;
return ((function (switch__21812__auto__,c__21877__auto___34807,out){
return (function() {
var cljs$core$async$state_machine__21813__auto__ = null;
var cljs$core$async$state_machine__21813__auto____0 = (function (){
var statearr_34799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34799[(0)] = cljs$core$async$state_machine__21813__auto__);

(statearr_34799[(1)] = (1));

return statearr_34799;
});
var cljs$core$async$state_machine__21813__auto____1 = (function (state_34773){
while(true){
var ret_value__21814__auto__ = (function (){try{while(true){
var result__21815__auto__ = switch__21812__auto__.call(null,state_34773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21815__auto__;
}
break;
}
}catch (e34800){if((e34800 instanceof Object)){
var ex__21816__auto__ = e34800;
var statearr_34801_34822 = state_34773;
(statearr_34801_34822[(5)] = ex__21816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34823 = state_34773;
state_34773 = G__34823;
continue;
} else {
return ret_value__21814__auto__;
}
break;
}
});
cljs$core$async$state_machine__21813__auto__ = function(state_34773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21813__auto____1.call(this,state_34773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21813__auto____0;
cljs$core$async$state_machine__21813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21813__auto____1;
return cljs$core$async$state_machine__21813__auto__;
})()
;})(switch__21812__auto__,c__21877__auto___34807,out))
})();
var state__21879__auto__ = (function (){var statearr_34802 = f__21878__auto__.call(null);
(statearr_34802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21877__auto___34807);

return statearr_34802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21879__auto__);
});})(c__21877__auto___34807,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map