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
if(typeof cljs.core.async.t_cljs$core$async40353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40353 = (function (fn_handler,f,meta40354){
this.fn_handler = fn_handler;
this.f = f;
this.meta40354 = meta40354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40355,meta40354__$1){
var self__ = this;
var _40355__$1 = this;
return (new cljs.core.async.t_cljs$core$async40353(self__.fn_handler,self__.f,meta40354__$1));
});

cljs.core.async.t_cljs$core$async40353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40355){
var self__ = this;
var _40355__$1 = this;
return self__.meta40354;
});

cljs.core.async.t_cljs$core$async40353.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta40354","meta40354",216786632,null)], null);
});

cljs.core.async.t_cljs$core$async40353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40353";

cljs.core.async.t_cljs$core$async40353.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async40353");
});

cljs.core.async.__GT_t_cljs$core$async40353 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async40353(fn_handler__$1,f__$1,meta40354){
return (new cljs.core.async.t_cljs$core$async40353(fn_handler__$1,f__$1,meta40354));
});

}

return (new cljs.core.async.t_cljs$core$async40353(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args40358 = [];
var len__17843__auto___40361 = arguments.length;
var i__17844__auto___40362 = (0);
while(true){
if((i__17844__auto___40362 < len__17843__auto___40361)){
args40358.push((arguments[i__17844__auto___40362]));

var G__40363 = (i__17844__auto___40362 + (1));
i__17844__auto___40362 = G__40363;
continue;
} else {
}
break;
}

var G__40360 = args40358.length;
switch (G__40360) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40358.length)].join('')));

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
var args40365 = [];
var len__17843__auto___40368 = arguments.length;
var i__17844__auto___40369 = (0);
while(true){
if((i__17844__auto___40369 < len__17843__auto___40368)){
args40365.push((arguments[i__17844__auto___40369]));

var G__40370 = (i__17844__auto___40369 + (1));
i__17844__auto___40369 = G__40370;
continue;
} else {
}
break;
}

var G__40367 = args40365.length;
switch (G__40367) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40365.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40372 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40372);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40372,ret){
return (function (){
return fn1.call(null,val_40372);
});})(val_40372,ret))
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
var args40373 = [];
var len__17843__auto___40376 = arguments.length;
var i__17844__auto___40377 = (0);
while(true){
if((i__17844__auto___40377 < len__17843__auto___40376)){
args40373.push((arguments[i__17844__auto___40377]));

var G__40378 = (i__17844__auto___40377 + (1));
i__17844__auto___40377 = G__40378;
continue;
} else {
}
break;
}

var G__40375 = args40373.length;
switch (G__40375) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40373.length)].join('')));

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
var n__17688__auto___40380 = n;
var x_40381 = (0);
while(true){
if((x_40381 < n__17688__auto___40380)){
(a[x_40381] = (0));

var G__40382 = (x_40381 + (1));
x_40381 = G__40382;
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

var G__40383 = (i + (1));
i = G__40383;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40387 = (function (alt_flag,flag,meta40388){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta40388 = meta40388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40389,meta40388__$1){
var self__ = this;
var _40389__$1 = this;
return (new cljs.core.async.t_cljs$core$async40387(self__.alt_flag,self__.flag,meta40388__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40389){
var self__ = this;
var _40389__$1 = this;
return self__.meta40388;
});})(flag))
;

cljs.core.async.t_cljs$core$async40387.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40387.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40388","meta40388",-1964441146,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40387";

cljs.core.async.t_cljs$core$async40387.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async40387");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40387 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40387(alt_flag__$1,flag__$1,meta40388){
return (new cljs.core.async.t_cljs$core$async40387(alt_flag__$1,flag__$1,meta40388));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40387(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40393 = (function (alt_handler,flag,cb,meta40394){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta40394 = meta40394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40395,meta40394__$1){
var self__ = this;
var _40395__$1 = this;
return (new cljs.core.async.t_cljs$core$async40393(self__.alt_handler,self__.flag,self__.cb,meta40394__$1));
});

cljs.core.async.t_cljs$core$async40393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40395){
var self__ = this;
var _40395__$1 = this;
return self__.meta40394;
});

cljs.core.async.t_cljs$core$async40393.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40394","meta40394",309022806,null)], null);
});

cljs.core.async.t_cljs$core$async40393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40393";

cljs.core.async.t_cljs$core$async40393.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async40393");
});

cljs.core.async.__GT_t_cljs$core$async40393 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40393(alt_handler__$1,flag__$1,cb__$1,meta40394){
return (new cljs.core.async.t_cljs$core$async40393(alt_handler__$1,flag__$1,cb__$1,meta40394));
});

}

return (new cljs.core.async.t_cljs$core$async40393(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40396_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40396_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40397_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40397_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16785__auto__ = wport;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40398 = (i + (1));
i = G__40398;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16785__auto__ = ret;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16773__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16773__auto__;
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
var args__17850__auto__ = [];
var len__17843__auto___40404 = arguments.length;
var i__17844__auto___40405 = (0);
while(true){
if((i__17844__auto___40405 < len__17843__auto___40404)){
args__17850__auto__.push((arguments[i__17844__auto___40405]));

var G__40406 = (i__17844__auto___40405 + (1));
i__17844__auto___40405 = G__40406;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((1) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17851__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40401){
var map__40402 = p__40401;
var map__40402__$1 = ((((!((map__40402 == null)))?((((map__40402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40402):map__40402);
var opts = map__40402__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40399){
var G__40400 = cljs.core.first.call(null,seq40399);
var seq40399__$1 = cljs.core.next.call(null,seq40399);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40400,seq40399__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args40407 = [];
var len__17843__auto___40457 = arguments.length;
var i__17844__auto___40458 = (0);
while(true){
if((i__17844__auto___40458 < len__17843__auto___40457)){
args40407.push((arguments[i__17844__auto___40458]));

var G__40459 = (i__17844__auto___40458 + (1));
i__17844__auto___40458 = G__40459;
continue;
} else {
}
break;
}

var G__40409 = args40407.length;
switch (G__40409) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40407.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21381__auto___40461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___40461){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___40461){
return (function (state_40433){
var state_val_40434 = (state_40433[(1)]);
if((state_val_40434 === (7))){
var inst_40429 = (state_40433[(2)]);
var state_40433__$1 = state_40433;
var statearr_40435_40462 = state_40433__$1;
(statearr_40435_40462[(2)] = inst_40429);

(statearr_40435_40462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40434 === (1))){
var state_40433__$1 = state_40433;
var statearr_40436_40463 = state_40433__$1;
(statearr_40436_40463[(2)] = null);

(statearr_40436_40463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40434 === (4))){
var inst_40412 = (state_40433[(7)]);
var inst_40412__$1 = (state_40433[(2)]);
var inst_40413 = (inst_40412__$1 == null);
var state_40433__$1 = (function (){var statearr_40437 = state_40433;
(statearr_40437[(7)] = inst_40412__$1);

return statearr_40437;
})();
if(cljs.core.truth_(inst_40413)){
var statearr_40438_40464 = state_40433__$1;
(statearr_40438_40464[(1)] = (5));

} else {
var statearr_40439_40465 = state_40433__$1;
(statearr_40439_40465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40434 === (13))){
var state_40433__$1 = state_40433;
var statearr_40440_40466 = state_40433__$1;
(statearr_40440_40466[(2)] = null);

(statearr_40440_40466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40434 === (6))){
var inst_40412 = (state_40433[(7)]);
var state_40433__$1 = state_40433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40433__$1,(11),to,inst_40412);
} else {
if((state_val_40434 === (3))){
var inst_40431 = (state_40433[(2)]);
var state_40433__$1 = state_40433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40433__$1,inst_40431);
} else {
if((state_val_40434 === (12))){
var state_40433__$1 = state_40433;
var statearr_40441_40467 = state_40433__$1;
(statearr_40441_40467[(2)] = null);

(statearr_40441_40467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40434 === (2))){
var state_40433__$1 = state_40433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40433__$1,(4),from);
} else {
if((state_val_40434 === (11))){
var inst_40422 = (state_40433[(2)]);
var state_40433__$1 = state_40433;
if(cljs.core.truth_(inst_40422)){
var statearr_40442_40468 = state_40433__$1;
(statearr_40442_40468[(1)] = (12));

} else {
var statearr_40443_40469 = state_40433__$1;
(statearr_40443_40469[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40434 === (9))){
var state_40433__$1 = state_40433;
var statearr_40444_40470 = state_40433__$1;
(statearr_40444_40470[(2)] = null);

(statearr_40444_40470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40434 === (5))){
var state_40433__$1 = state_40433;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40445_40471 = state_40433__$1;
(statearr_40445_40471[(1)] = (8));

} else {
var statearr_40446_40472 = state_40433__$1;
(statearr_40446_40472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40434 === (14))){
var inst_40427 = (state_40433[(2)]);
var state_40433__$1 = state_40433;
var statearr_40447_40473 = state_40433__$1;
(statearr_40447_40473[(2)] = inst_40427);

(statearr_40447_40473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40434 === (10))){
var inst_40419 = (state_40433[(2)]);
var state_40433__$1 = state_40433;
var statearr_40448_40474 = state_40433__$1;
(statearr_40448_40474[(2)] = inst_40419);

(statearr_40448_40474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40434 === (8))){
var inst_40416 = cljs.core.async.close_BANG_.call(null,to);
var state_40433__$1 = state_40433;
var statearr_40449_40475 = state_40433__$1;
(statearr_40449_40475[(2)] = inst_40416);

(statearr_40449_40475[(1)] = (10));


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
});})(c__21381__auto___40461))
;
return ((function (switch__21316__auto__,c__21381__auto___40461){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_40453 = [null,null,null,null,null,null,null,null];
(statearr_40453[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_40453[(1)] = (1));

return statearr_40453;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_40433){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_40433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e40454){if((e40454 instanceof Object)){
var ex__21320__auto__ = e40454;
var statearr_40455_40476 = state_40433;
(statearr_40455_40476[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40477 = state_40433;
state_40433 = G__40477;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_40433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_40433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___40461))
})();
var state__21383__auto__ = (function (){var statearr_40456 = f__21382__auto__.call(null);
(statearr_40456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___40461);

return statearr_40456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___40461))
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
return (function (p__40661){
var vec__40662 = p__40661;
var v = cljs.core.nth.call(null,vec__40662,(0),null);
var p = cljs.core.nth.call(null,vec__40662,(1),null);
var job = vec__40662;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21381__auto___40844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___40844,res,vec__40662,v,p,job,jobs,results){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___40844,res,vec__40662,v,p,job,jobs,results){
return (function (state_40667){
var state_val_40668 = (state_40667[(1)]);
if((state_val_40668 === (1))){
var state_40667__$1 = state_40667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40667__$1,(2),res,v);
} else {
if((state_val_40668 === (2))){
var inst_40664 = (state_40667[(2)]);
var inst_40665 = cljs.core.async.close_BANG_.call(null,res);
var state_40667__$1 = (function (){var statearr_40669 = state_40667;
(statearr_40669[(7)] = inst_40664);

return statearr_40669;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40667__$1,inst_40665);
} else {
return null;
}
}
});})(c__21381__auto___40844,res,vec__40662,v,p,job,jobs,results))
;
return ((function (switch__21316__auto__,c__21381__auto___40844,res,vec__40662,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_40673 = [null,null,null,null,null,null,null,null];
(statearr_40673[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_40673[(1)] = (1));

return statearr_40673;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_40667){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_40667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e40674){if((e40674 instanceof Object)){
var ex__21320__auto__ = e40674;
var statearr_40675_40845 = state_40667;
(statearr_40675_40845[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40846 = state_40667;
state_40667 = G__40846;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_40667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_40667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___40844,res,vec__40662,v,p,job,jobs,results))
})();
var state__21383__auto__ = (function (){var statearr_40676 = f__21382__auto__.call(null);
(statearr_40676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___40844);

return statearr_40676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___40844,res,vec__40662,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40677){
var vec__40678 = p__40677;
var v = cljs.core.nth.call(null,vec__40678,(0),null);
var p = cljs.core.nth.call(null,vec__40678,(1),null);
var job = vec__40678;
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
var n__17688__auto___40847 = n;
var __40848 = (0);
while(true){
if((__40848 < n__17688__auto___40847)){
var G__40679_40849 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40679_40849) {
case "compute":
var c__21381__auto___40851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40848,c__21381__auto___40851,G__40679_40849,n__17688__auto___40847,jobs,results,process,async){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (__40848,c__21381__auto___40851,G__40679_40849,n__17688__auto___40847,jobs,results,process,async){
return (function (state_40692){
var state_val_40693 = (state_40692[(1)]);
if((state_val_40693 === (1))){
var state_40692__$1 = state_40692;
var statearr_40694_40852 = state_40692__$1;
(statearr_40694_40852[(2)] = null);

(statearr_40694_40852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (2))){
var state_40692__$1 = state_40692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40692__$1,(4),jobs);
} else {
if((state_val_40693 === (3))){
var inst_40690 = (state_40692[(2)]);
var state_40692__$1 = state_40692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40692__$1,inst_40690);
} else {
if((state_val_40693 === (4))){
var inst_40682 = (state_40692[(2)]);
var inst_40683 = process.call(null,inst_40682);
var state_40692__$1 = state_40692;
if(cljs.core.truth_(inst_40683)){
var statearr_40695_40853 = state_40692__$1;
(statearr_40695_40853[(1)] = (5));

} else {
var statearr_40696_40854 = state_40692__$1;
(statearr_40696_40854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (5))){
var state_40692__$1 = state_40692;
var statearr_40697_40855 = state_40692__$1;
(statearr_40697_40855[(2)] = null);

(statearr_40697_40855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (6))){
var state_40692__$1 = state_40692;
var statearr_40698_40856 = state_40692__$1;
(statearr_40698_40856[(2)] = null);

(statearr_40698_40856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40693 === (7))){
var inst_40688 = (state_40692[(2)]);
var state_40692__$1 = state_40692;
var statearr_40699_40857 = state_40692__$1;
(statearr_40699_40857[(2)] = inst_40688);

(statearr_40699_40857[(1)] = (3));


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
});})(__40848,c__21381__auto___40851,G__40679_40849,n__17688__auto___40847,jobs,results,process,async))
;
return ((function (__40848,switch__21316__auto__,c__21381__auto___40851,G__40679_40849,n__17688__auto___40847,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_40703 = [null,null,null,null,null,null,null];
(statearr_40703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_40703[(1)] = (1));

return statearr_40703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_40692){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_40692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e40704){if((e40704 instanceof Object)){
var ex__21320__auto__ = e40704;
var statearr_40705_40858 = state_40692;
(statearr_40705_40858[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40859 = state_40692;
state_40692 = G__40859;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_40692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_40692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(__40848,switch__21316__auto__,c__21381__auto___40851,G__40679_40849,n__17688__auto___40847,jobs,results,process,async))
})();
var state__21383__auto__ = (function (){var statearr_40706 = f__21382__auto__.call(null);
(statearr_40706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___40851);

return statearr_40706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(__40848,c__21381__auto___40851,G__40679_40849,n__17688__auto___40847,jobs,results,process,async))
);


break;
case "async":
var c__21381__auto___40860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40848,c__21381__auto___40860,G__40679_40849,n__17688__auto___40847,jobs,results,process,async){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (__40848,c__21381__auto___40860,G__40679_40849,n__17688__auto___40847,jobs,results,process,async){
return (function (state_40719){
var state_val_40720 = (state_40719[(1)]);
if((state_val_40720 === (1))){
var state_40719__$1 = state_40719;
var statearr_40721_40861 = state_40719__$1;
(statearr_40721_40861[(2)] = null);

(statearr_40721_40861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (2))){
var state_40719__$1 = state_40719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40719__$1,(4),jobs);
} else {
if((state_val_40720 === (3))){
var inst_40717 = (state_40719[(2)]);
var state_40719__$1 = state_40719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40719__$1,inst_40717);
} else {
if((state_val_40720 === (4))){
var inst_40709 = (state_40719[(2)]);
var inst_40710 = async.call(null,inst_40709);
var state_40719__$1 = state_40719;
if(cljs.core.truth_(inst_40710)){
var statearr_40722_40862 = state_40719__$1;
(statearr_40722_40862[(1)] = (5));

} else {
var statearr_40723_40863 = state_40719__$1;
(statearr_40723_40863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (5))){
var state_40719__$1 = state_40719;
var statearr_40724_40864 = state_40719__$1;
(statearr_40724_40864[(2)] = null);

(statearr_40724_40864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (6))){
var state_40719__$1 = state_40719;
var statearr_40725_40865 = state_40719__$1;
(statearr_40725_40865[(2)] = null);

(statearr_40725_40865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (7))){
var inst_40715 = (state_40719[(2)]);
var state_40719__$1 = state_40719;
var statearr_40726_40866 = state_40719__$1;
(statearr_40726_40866[(2)] = inst_40715);

(statearr_40726_40866[(1)] = (3));


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
});})(__40848,c__21381__auto___40860,G__40679_40849,n__17688__auto___40847,jobs,results,process,async))
;
return ((function (__40848,switch__21316__auto__,c__21381__auto___40860,G__40679_40849,n__17688__auto___40847,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_40730 = [null,null,null,null,null,null,null];
(statearr_40730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_40730[(1)] = (1));

return statearr_40730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_40719){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_40719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e40731){if((e40731 instanceof Object)){
var ex__21320__auto__ = e40731;
var statearr_40732_40867 = state_40719;
(statearr_40732_40867[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40868 = state_40719;
state_40719 = G__40868;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_40719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_40719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(__40848,switch__21316__auto__,c__21381__auto___40860,G__40679_40849,n__17688__auto___40847,jobs,results,process,async))
})();
var state__21383__auto__ = (function (){var statearr_40733 = f__21382__auto__.call(null);
(statearr_40733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___40860);

return statearr_40733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(__40848,c__21381__auto___40860,G__40679_40849,n__17688__auto___40847,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__40869 = (__40848 + (1));
__40848 = G__40869;
continue;
} else {
}
break;
}

var c__21381__auto___40870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___40870,jobs,results,process,async){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___40870,jobs,results,process,async){
return (function (state_40755){
var state_val_40756 = (state_40755[(1)]);
if((state_val_40756 === (1))){
var state_40755__$1 = state_40755;
var statearr_40757_40871 = state_40755__$1;
(statearr_40757_40871[(2)] = null);

(statearr_40757_40871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40756 === (2))){
var state_40755__$1 = state_40755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40755__$1,(4),from);
} else {
if((state_val_40756 === (3))){
var inst_40753 = (state_40755[(2)]);
var state_40755__$1 = state_40755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40755__$1,inst_40753);
} else {
if((state_val_40756 === (4))){
var inst_40736 = (state_40755[(7)]);
var inst_40736__$1 = (state_40755[(2)]);
var inst_40737 = (inst_40736__$1 == null);
var state_40755__$1 = (function (){var statearr_40758 = state_40755;
(statearr_40758[(7)] = inst_40736__$1);

return statearr_40758;
})();
if(cljs.core.truth_(inst_40737)){
var statearr_40759_40872 = state_40755__$1;
(statearr_40759_40872[(1)] = (5));

} else {
var statearr_40760_40873 = state_40755__$1;
(statearr_40760_40873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40756 === (5))){
var inst_40739 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40755__$1 = state_40755;
var statearr_40761_40874 = state_40755__$1;
(statearr_40761_40874[(2)] = inst_40739);

(statearr_40761_40874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40756 === (6))){
var inst_40741 = (state_40755[(8)]);
var inst_40736 = (state_40755[(7)]);
var inst_40741__$1 = cljs.core.async.chan.call(null,(1));
var inst_40742 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40743 = [inst_40736,inst_40741__$1];
var inst_40744 = (new cljs.core.PersistentVector(null,2,(5),inst_40742,inst_40743,null));
var state_40755__$1 = (function (){var statearr_40762 = state_40755;
(statearr_40762[(8)] = inst_40741__$1);

return statearr_40762;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40755__$1,(8),jobs,inst_40744);
} else {
if((state_val_40756 === (7))){
var inst_40751 = (state_40755[(2)]);
var state_40755__$1 = state_40755;
var statearr_40763_40875 = state_40755__$1;
(statearr_40763_40875[(2)] = inst_40751);

(statearr_40763_40875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40756 === (8))){
var inst_40741 = (state_40755[(8)]);
var inst_40746 = (state_40755[(2)]);
var state_40755__$1 = (function (){var statearr_40764 = state_40755;
(statearr_40764[(9)] = inst_40746);

return statearr_40764;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40755__$1,(9),results,inst_40741);
} else {
if((state_val_40756 === (9))){
var inst_40748 = (state_40755[(2)]);
var state_40755__$1 = (function (){var statearr_40765 = state_40755;
(statearr_40765[(10)] = inst_40748);

return statearr_40765;
})();
var statearr_40766_40876 = state_40755__$1;
(statearr_40766_40876[(2)] = null);

(statearr_40766_40876[(1)] = (2));


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
});})(c__21381__auto___40870,jobs,results,process,async))
;
return ((function (switch__21316__auto__,c__21381__auto___40870,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_40770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40770[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_40770[(1)] = (1));

return statearr_40770;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_40755){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_40755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e40771){if((e40771 instanceof Object)){
var ex__21320__auto__ = e40771;
var statearr_40772_40877 = state_40755;
(statearr_40772_40877[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40878 = state_40755;
state_40755 = G__40878;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_40755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_40755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___40870,jobs,results,process,async))
})();
var state__21383__auto__ = (function (){var statearr_40773 = f__21382__auto__.call(null);
(statearr_40773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___40870);

return statearr_40773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___40870,jobs,results,process,async))
);


var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__,jobs,results,process,async){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__,jobs,results,process,async){
return (function (state_40811){
var state_val_40812 = (state_40811[(1)]);
if((state_val_40812 === (7))){
var inst_40807 = (state_40811[(2)]);
var state_40811__$1 = state_40811;
var statearr_40813_40879 = state_40811__$1;
(statearr_40813_40879[(2)] = inst_40807);

(statearr_40813_40879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (20))){
var state_40811__$1 = state_40811;
var statearr_40814_40880 = state_40811__$1;
(statearr_40814_40880[(2)] = null);

(statearr_40814_40880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (1))){
var state_40811__$1 = state_40811;
var statearr_40815_40881 = state_40811__$1;
(statearr_40815_40881[(2)] = null);

(statearr_40815_40881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (4))){
var inst_40776 = (state_40811[(7)]);
var inst_40776__$1 = (state_40811[(2)]);
var inst_40777 = (inst_40776__$1 == null);
var state_40811__$1 = (function (){var statearr_40816 = state_40811;
(statearr_40816[(7)] = inst_40776__$1);

return statearr_40816;
})();
if(cljs.core.truth_(inst_40777)){
var statearr_40817_40882 = state_40811__$1;
(statearr_40817_40882[(1)] = (5));

} else {
var statearr_40818_40883 = state_40811__$1;
(statearr_40818_40883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (15))){
var inst_40789 = (state_40811[(8)]);
var state_40811__$1 = state_40811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40811__$1,(18),to,inst_40789);
} else {
if((state_val_40812 === (21))){
var inst_40802 = (state_40811[(2)]);
var state_40811__$1 = state_40811;
var statearr_40819_40884 = state_40811__$1;
(statearr_40819_40884[(2)] = inst_40802);

(statearr_40819_40884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (13))){
var inst_40804 = (state_40811[(2)]);
var state_40811__$1 = (function (){var statearr_40820 = state_40811;
(statearr_40820[(9)] = inst_40804);

return statearr_40820;
})();
var statearr_40821_40885 = state_40811__$1;
(statearr_40821_40885[(2)] = null);

(statearr_40821_40885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (6))){
var inst_40776 = (state_40811[(7)]);
var state_40811__$1 = state_40811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40811__$1,(11),inst_40776);
} else {
if((state_val_40812 === (17))){
var inst_40797 = (state_40811[(2)]);
var state_40811__$1 = state_40811;
if(cljs.core.truth_(inst_40797)){
var statearr_40822_40886 = state_40811__$1;
(statearr_40822_40886[(1)] = (19));

} else {
var statearr_40823_40887 = state_40811__$1;
(statearr_40823_40887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (3))){
var inst_40809 = (state_40811[(2)]);
var state_40811__$1 = state_40811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40811__$1,inst_40809);
} else {
if((state_val_40812 === (12))){
var inst_40786 = (state_40811[(10)]);
var state_40811__$1 = state_40811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40811__$1,(14),inst_40786);
} else {
if((state_val_40812 === (2))){
var state_40811__$1 = state_40811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40811__$1,(4),results);
} else {
if((state_val_40812 === (19))){
var state_40811__$1 = state_40811;
var statearr_40824_40888 = state_40811__$1;
(statearr_40824_40888[(2)] = null);

(statearr_40824_40888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (11))){
var inst_40786 = (state_40811[(2)]);
var state_40811__$1 = (function (){var statearr_40825 = state_40811;
(statearr_40825[(10)] = inst_40786);

return statearr_40825;
})();
var statearr_40826_40889 = state_40811__$1;
(statearr_40826_40889[(2)] = null);

(statearr_40826_40889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (9))){
var state_40811__$1 = state_40811;
var statearr_40827_40890 = state_40811__$1;
(statearr_40827_40890[(2)] = null);

(statearr_40827_40890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (5))){
var state_40811__$1 = state_40811;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40828_40891 = state_40811__$1;
(statearr_40828_40891[(1)] = (8));

} else {
var statearr_40829_40892 = state_40811__$1;
(statearr_40829_40892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (14))){
var inst_40789 = (state_40811[(8)]);
var inst_40791 = (state_40811[(11)]);
var inst_40789__$1 = (state_40811[(2)]);
var inst_40790 = (inst_40789__$1 == null);
var inst_40791__$1 = cljs.core.not.call(null,inst_40790);
var state_40811__$1 = (function (){var statearr_40830 = state_40811;
(statearr_40830[(8)] = inst_40789__$1);

(statearr_40830[(11)] = inst_40791__$1);

return statearr_40830;
})();
if(inst_40791__$1){
var statearr_40831_40893 = state_40811__$1;
(statearr_40831_40893[(1)] = (15));

} else {
var statearr_40832_40894 = state_40811__$1;
(statearr_40832_40894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (16))){
var inst_40791 = (state_40811[(11)]);
var state_40811__$1 = state_40811;
var statearr_40833_40895 = state_40811__$1;
(statearr_40833_40895[(2)] = inst_40791);

(statearr_40833_40895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (10))){
var inst_40783 = (state_40811[(2)]);
var state_40811__$1 = state_40811;
var statearr_40834_40896 = state_40811__$1;
(statearr_40834_40896[(2)] = inst_40783);

(statearr_40834_40896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (18))){
var inst_40794 = (state_40811[(2)]);
var state_40811__$1 = state_40811;
var statearr_40835_40897 = state_40811__$1;
(statearr_40835_40897[(2)] = inst_40794);

(statearr_40835_40897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40812 === (8))){
var inst_40780 = cljs.core.async.close_BANG_.call(null,to);
var state_40811__$1 = state_40811;
var statearr_40836_40898 = state_40811__$1;
(statearr_40836_40898[(2)] = inst_40780);

(statearr_40836_40898[(1)] = (10));


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
});})(c__21381__auto__,jobs,results,process,async))
;
return ((function (switch__21316__auto__,c__21381__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_40840 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_40840[(1)] = (1));

return statearr_40840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_40811){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_40811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e40841){if((e40841 instanceof Object)){
var ex__21320__auto__ = e40841;
var statearr_40842_40899 = state_40811;
(statearr_40842_40899[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40900 = state_40811;
state_40811 = G__40900;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_40811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_40811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__,jobs,results,process,async))
})();
var state__21383__auto__ = (function (){var statearr_40843 = f__21382__auto__.call(null);
(statearr_40843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_40843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__,jobs,results,process,async))
);

return c__21381__auto__;
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
var args40901 = [];
var len__17843__auto___40904 = arguments.length;
var i__17844__auto___40905 = (0);
while(true){
if((i__17844__auto___40905 < len__17843__auto___40904)){
args40901.push((arguments[i__17844__auto___40905]));

var G__40906 = (i__17844__auto___40905 + (1));
i__17844__auto___40905 = G__40906;
continue;
} else {
}
break;
}

var G__40903 = args40901.length;
switch (G__40903) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40901.length)].join('')));

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
var args40908 = [];
var len__17843__auto___40911 = arguments.length;
var i__17844__auto___40912 = (0);
while(true){
if((i__17844__auto___40912 < len__17843__auto___40911)){
args40908.push((arguments[i__17844__auto___40912]));

var G__40913 = (i__17844__auto___40912 + (1));
i__17844__auto___40912 = G__40913;
continue;
} else {
}
break;
}

var G__40910 = args40908.length;
switch (G__40910) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40908.length)].join('')));

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
var args40915 = [];
var len__17843__auto___40968 = arguments.length;
var i__17844__auto___40969 = (0);
while(true){
if((i__17844__auto___40969 < len__17843__auto___40968)){
args40915.push((arguments[i__17844__auto___40969]));

var G__40970 = (i__17844__auto___40969 + (1));
i__17844__auto___40969 = G__40970;
continue;
} else {
}
break;
}

var G__40917 = args40915.length;
switch (G__40917) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40915.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21381__auto___40972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___40972,tc,fc){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___40972,tc,fc){
return (function (state_40943){
var state_val_40944 = (state_40943[(1)]);
if((state_val_40944 === (7))){
var inst_40939 = (state_40943[(2)]);
var state_40943__$1 = state_40943;
var statearr_40945_40973 = state_40943__$1;
(statearr_40945_40973[(2)] = inst_40939);

(statearr_40945_40973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40944 === (1))){
var state_40943__$1 = state_40943;
var statearr_40946_40974 = state_40943__$1;
(statearr_40946_40974[(2)] = null);

(statearr_40946_40974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40944 === (4))){
var inst_40920 = (state_40943[(7)]);
var inst_40920__$1 = (state_40943[(2)]);
var inst_40921 = (inst_40920__$1 == null);
var state_40943__$1 = (function (){var statearr_40947 = state_40943;
(statearr_40947[(7)] = inst_40920__$1);

return statearr_40947;
})();
if(cljs.core.truth_(inst_40921)){
var statearr_40948_40975 = state_40943__$1;
(statearr_40948_40975[(1)] = (5));

} else {
var statearr_40949_40976 = state_40943__$1;
(statearr_40949_40976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40944 === (13))){
var state_40943__$1 = state_40943;
var statearr_40950_40977 = state_40943__$1;
(statearr_40950_40977[(2)] = null);

(statearr_40950_40977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40944 === (6))){
var inst_40920 = (state_40943[(7)]);
var inst_40926 = p.call(null,inst_40920);
var state_40943__$1 = state_40943;
if(cljs.core.truth_(inst_40926)){
var statearr_40951_40978 = state_40943__$1;
(statearr_40951_40978[(1)] = (9));

} else {
var statearr_40952_40979 = state_40943__$1;
(statearr_40952_40979[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40944 === (3))){
var inst_40941 = (state_40943[(2)]);
var state_40943__$1 = state_40943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40943__$1,inst_40941);
} else {
if((state_val_40944 === (12))){
var state_40943__$1 = state_40943;
var statearr_40953_40980 = state_40943__$1;
(statearr_40953_40980[(2)] = null);

(statearr_40953_40980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40944 === (2))){
var state_40943__$1 = state_40943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40943__$1,(4),ch);
} else {
if((state_val_40944 === (11))){
var inst_40920 = (state_40943[(7)]);
var inst_40930 = (state_40943[(2)]);
var state_40943__$1 = state_40943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40943__$1,(8),inst_40930,inst_40920);
} else {
if((state_val_40944 === (9))){
var state_40943__$1 = state_40943;
var statearr_40954_40981 = state_40943__$1;
(statearr_40954_40981[(2)] = tc);

(statearr_40954_40981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40944 === (5))){
var inst_40923 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40924 = cljs.core.async.close_BANG_.call(null,fc);
var state_40943__$1 = (function (){var statearr_40955 = state_40943;
(statearr_40955[(8)] = inst_40923);

return statearr_40955;
})();
var statearr_40956_40982 = state_40943__$1;
(statearr_40956_40982[(2)] = inst_40924);

(statearr_40956_40982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40944 === (14))){
var inst_40937 = (state_40943[(2)]);
var state_40943__$1 = state_40943;
var statearr_40957_40983 = state_40943__$1;
(statearr_40957_40983[(2)] = inst_40937);

(statearr_40957_40983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40944 === (10))){
var state_40943__$1 = state_40943;
var statearr_40958_40984 = state_40943__$1;
(statearr_40958_40984[(2)] = fc);

(statearr_40958_40984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40944 === (8))){
var inst_40932 = (state_40943[(2)]);
var state_40943__$1 = state_40943;
if(cljs.core.truth_(inst_40932)){
var statearr_40959_40985 = state_40943__$1;
(statearr_40959_40985[(1)] = (12));

} else {
var statearr_40960_40986 = state_40943__$1;
(statearr_40960_40986[(1)] = (13));

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
});})(c__21381__auto___40972,tc,fc))
;
return ((function (switch__21316__auto__,c__21381__auto___40972,tc,fc){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_40964 = [null,null,null,null,null,null,null,null,null];
(statearr_40964[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_40964[(1)] = (1));

return statearr_40964;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_40943){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_40943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e40965){if((e40965 instanceof Object)){
var ex__21320__auto__ = e40965;
var statearr_40966_40987 = state_40943;
(statearr_40966_40987[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40988 = state_40943;
state_40943 = G__40988;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_40943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_40943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___40972,tc,fc))
})();
var state__21383__auto__ = (function (){var statearr_40967 = f__21382__auto__.call(null);
(statearr_40967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___40972);

return statearr_40967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___40972,tc,fc))
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
var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__){
return (function (state_41035){
var state_val_41036 = (state_41035[(1)]);
if((state_val_41036 === (1))){
var inst_41021 = init;
var state_41035__$1 = (function (){var statearr_41037 = state_41035;
(statearr_41037[(7)] = inst_41021);

return statearr_41037;
})();
var statearr_41038_41053 = state_41035__$1;
(statearr_41038_41053[(2)] = null);

(statearr_41038_41053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41036 === (2))){
var state_41035__$1 = state_41035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41035__$1,(4),ch);
} else {
if((state_val_41036 === (3))){
var inst_41033 = (state_41035[(2)]);
var state_41035__$1 = state_41035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41035__$1,inst_41033);
} else {
if((state_val_41036 === (4))){
var inst_41024 = (state_41035[(8)]);
var inst_41024__$1 = (state_41035[(2)]);
var inst_41025 = (inst_41024__$1 == null);
var state_41035__$1 = (function (){var statearr_41039 = state_41035;
(statearr_41039[(8)] = inst_41024__$1);

return statearr_41039;
})();
if(cljs.core.truth_(inst_41025)){
var statearr_41040_41054 = state_41035__$1;
(statearr_41040_41054[(1)] = (5));

} else {
var statearr_41041_41055 = state_41035__$1;
(statearr_41041_41055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41036 === (5))){
var inst_41021 = (state_41035[(7)]);
var state_41035__$1 = state_41035;
var statearr_41042_41056 = state_41035__$1;
(statearr_41042_41056[(2)] = inst_41021);

(statearr_41042_41056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41036 === (6))){
var inst_41021 = (state_41035[(7)]);
var inst_41024 = (state_41035[(8)]);
var inst_41028 = f.call(null,inst_41021,inst_41024);
var inst_41021__$1 = inst_41028;
var state_41035__$1 = (function (){var statearr_41043 = state_41035;
(statearr_41043[(7)] = inst_41021__$1);

return statearr_41043;
})();
var statearr_41044_41057 = state_41035__$1;
(statearr_41044_41057[(2)] = null);

(statearr_41044_41057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41036 === (7))){
var inst_41031 = (state_41035[(2)]);
var state_41035__$1 = state_41035;
var statearr_41045_41058 = state_41035__$1;
(statearr_41045_41058[(2)] = inst_41031);

(statearr_41045_41058[(1)] = (3));


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
});})(c__21381__auto__))
;
return ((function (switch__21316__auto__,c__21381__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21317__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21317__auto____0 = (function (){
var statearr_41049 = [null,null,null,null,null,null,null,null,null];
(statearr_41049[(0)] = cljs$core$async$reduce_$_state_machine__21317__auto__);

(statearr_41049[(1)] = (1));

return statearr_41049;
});
var cljs$core$async$reduce_$_state_machine__21317__auto____1 = (function (state_41035){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_41035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e41050){if((e41050 instanceof Object)){
var ex__21320__auto__ = e41050;
var statearr_41051_41059 = state_41035;
(statearr_41051_41059[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41060 = state_41035;
state_41035 = G__41060;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21317__auto__ = function(state_41035){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21317__auto____1.call(this,state_41035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21317__auto____0;
cljs$core$async$reduce_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21317__auto____1;
return cljs$core$async$reduce_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_41052 = f__21382__auto__.call(null);
(statearr_41052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_41052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__))
);

return c__21381__auto__;
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
var args41061 = [];
var len__17843__auto___41113 = arguments.length;
var i__17844__auto___41114 = (0);
while(true){
if((i__17844__auto___41114 < len__17843__auto___41113)){
args41061.push((arguments[i__17844__auto___41114]));

var G__41115 = (i__17844__auto___41114 + (1));
i__17844__auto___41114 = G__41115;
continue;
} else {
}
break;
}

var G__41063 = args41061.length;
switch (G__41063) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41061.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__){
return (function (state_41088){
var state_val_41089 = (state_41088[(1)]);
if((state_val_41089 === (7))){
var inst_41070 = (state_41088[(2)]);
var state_41088__$1 = state_41088;
var statearr_41090_41117 = state_41088__$1;
(statearr_41090_41117[(2)] = inst_41070);

(statearr_41090_41117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (1))){
var inst_41064 = cljs.core.seq.call(null,coll);
var inst_41065 = inst_41064;
var state_41088__$1 = (function (){var statearr_41091 = state_41088;
(statearr_41091[(7)] = inst_41065);

return statearr_41091;
})();
var statearr_41092_41118 = state_41088__$1;
(statearr_41092_41118[(2)] = null);

(statearr_41092_41118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (4))){
var inst_41065 = (state_41088[(7)]);
var inst_41068 = cljs.core.first.call(null,inst_41065);
var state_41088__$1 = state_41088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41088__$1,(7),ch,inst_41068);
} else {
if((state_val_41089 === (13))){
var inst_41082 = (state_41088[(2)]);
var state_41088__$1 = state_41088;
var statearr_41093_41119 = state_41088__$1;
(statearr_41093_41119[(2)] = inst_41082);

(statearr_41093_41119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (6))){
var inst_41073 = (state_41088[(2)]);
var state_41088__$1 = state_41088;
if(cljs.core.truth_(inst_41073)){
var statearr_41094_41120 = state_41088__$1;
(statearr_41094_41120[(1)] = (8));

} else {
var statearr_41095_41121 = state_41088__$1;
(statearr_41095_41121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (3))){
var inst_41086 = (state_41088[(2)]);
var state_41088__$1 = state_41088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41088__$1,inst_41086);
} else {
if((state_val_41089 === (12))){
var state_41088__$1 = state_41088;
var statearr_41096_41122 = state_41088__$1;
(statearr_41096_41122[(2)] = null);

(statearr_41096_41122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (2))){
var inst_41065 = (state_41088[(7)]);
var state_41088__$1 = state_41088;
if(cljs.core.truth_(inst_41065)){
var statearr_41097_41123 = state_41088__$1;
(statearr_41097_41123[(1)] = (4));

} else {
var statearr_41098_41124 = state_41088__$1;
(statearr_41098_41124[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (11))){
var inst_41079 = cljs.core.async.close_BANG_.call(null,ch);
var state_41088__$1 = state_41088;
var statearr_41099_41125 = state_41088__$1;
(statearr_41099_41125[(2)] = inst_41079);

(statearr_41099_41125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (9))){
var state_41088__$1 = state_41088;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41100_41126 = state_41088__$1;
(statearr_41100_41126[(1)] = (11));

} else {
var statearr_41101_41127 = state_41088__$1;
(statearr_41101_41127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (5))){
var inst_41065 = (state_41088[(7)]);
var state_41088__$1 = state_41088;
var statearr_41102_41128 = state_41088__$1;
(statearr_41102_41128[(2)] = inst_41065);

(statearr_41102_41128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (10))){
var inst_41084 = (state_41088[(2)]);
var state_41088__$1 = state_41088;
var statearr_41103_41129 = state_41088__$1;
(statearr_41103_41129[(2)] = inst_41084);

(statearr_41103_41129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41089 === (8))){
var inst_41065 = (state_41088[(7)]);
var inst_41075 = cljs.core.next.call(null,inst_41065);
var inst_41065__$1 = inst_41075;
var state_41088__$1 = (function (){var statearr_41104 = state_41088;
(statearr_41104[(7)] = inst_41065__$1);

return statearr_41104;
})();
var statearr_41105_41130 = state_41088__$1;
(statearr_41105_41130[(2)] = null);

(statearr_41105_41130[(1)] = (2));


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
});})(c__21381__auto__))
;
return ((function (switch__21316__auto__,c__21381__auto__){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_41109 = [null,null,null,null,null,null,null,null];
(statearr_41109[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_41109[(1)] = (1));

return statearr_41109;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_41088){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_41088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e41110){if((e41110 instanceof Object)){
var ex__21320__auto__ = e41110;
var statearr_41111_41131 = state_41088;
(statearr_41111_41131[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41132 = state_41088;
state_41088 = G__41132;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_41088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_41088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_41112 = f__21382__auto__.call(null);
(statearr_41112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_41112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__))
);

return c__21381__auto__;
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
var x__17440__auto__ = (((_ == null))?null:_);
var m__17441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,_);
} else {
var m__17441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,_);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async41354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41354 = (function (mult,ch,cs,meta41355){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta41355 = meta41355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41356,meta41355__$1){
var self__ = this;
var _41356__$1 = this;
return (new cljs.core.async.t_cljs$core$async41354(self__.mult,self__.ch,self__.cs,meta41355__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41356){
var self__ = this;
var _41356__$1 = this;
return self__.meta41355;
});})(cs))
;

cljs.core.async.t_cljs$core$async41354.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41354.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async41354.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41354.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41354.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41354.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41355","meta41355",444546021,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41354";

cljs.core.async.t_cljs$core$async41354.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async41354");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41354 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41354(mult__$1,ch__$1,cs__$1,meta41355){
return (new cljs.core.async.t_cljs$core$async41354(mult__$1,ch__$1,cs__$1,meta41355));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41354(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21381__auto___41575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___41575,cs,m,dchan,dctr,done){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___41575,cs,m,dchan,dctr,done){
return (function (state_41487){
var state_val_41488 = (state_41487[(1)]);
if((state_val_41488 === (7))){
var inst_41483 = (state_41487[(2)]);
var state_41487__$1 = state_41487;
var statearr_41489_41576 = state_41487__$1;
(statearr_41489_41576[(2)] = inst_41483);

(statearr_41489_41576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (20))){
var inst_41388 = (state_41487[(7)]);
var inst_41398 = cljs.core.first.call(null,inst_41388);
var inst_41399 = cljs.core.nth.call(null,inst_41398,(0),null);
var inst_41400 = cljs.core.nth.call(null,inst_41398,(1),null);
var state_41487__$1 = (function (){var statearr_41490 = state_41487;
(statearr_41490[(8)] = inst_41399);

return statearr_41490;
})();
if(cljs.core.truth_(inst_41400)){
var statearr_41491_41577 = state_41487__$1;
(statearr_41491_41577[(1)] = (22));

} else {
var statearr_41492_41578 = state_41487__$1;
(statearr_41492_41578[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (27))){
var inst_41428 = (state_41487[(9)]);
var inst_41435 = (state_41487[(10)]);
var inst_41359 = (state_41487[(11)]);
var inst_41430 = (state_41487[(12)]);
var inst_41435__$1 = cljs.core._nth.call(null,inst_41428,inst_41430);
var inst_41436 = cljs.core.async.put_BANG_.call(null,inst_41435__$1,inst_41359,done);
var state_41487__$1 = (function (){var statearr_41493 = state_41487;
(statearr_41493[(10)] = inst_41435__$1);

return statearr_41493;
})();
if(cljs.core.truth_(inst_41436)){
var statearr_41494_41579 = state_41487__$1;
(statearr_41494_41579[(1)] = (30));

} else {
var statearr_41495_41580 = state_41487__$1;
(statearr_41495_41580[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (1))){
var state_41487__$1 = state_41487;
var statearr_41496_41581 = state_41487__$1;
(statearr_41496_41581[(2)] = null);

(statearr_41496_41581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (24))){
var inst_41388 = (state_41487[(7)]);
var inst_41405 = (state_41487[(2)]);
var inst_41406 = cljs.core.next.call(null,inst_41388);
var inst_41368 = inst_41406;
var inst_41369 = null;
var inst_41370 = (0);
var inst_41371 = (0);
var state_41487__$1 = (function (){var statearr_41497 = state_41487;
(statearr_41497[(13)] = inst_41405);

(statearr_41497[(14)] = inst_41369);

(statearr_41497[(15)] = inst_41371);

(statearr_41497[(16)] = inst_41368);

(statearr_41497[(17)] = inst_41370);

return statearr_41497;
})();
var statearr_41498_41582 = state_41487__$1;
(statearr_41498_41582[(2)] = null);

(statearr_41498_41582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (39))){
var state_41487__$1 = state_41487;
var statearr_41502_41583 = state_41487__$1;
(statearr_41502_41583[(2)] = null);

(statearr_41502_41583[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (4))){
var inst_41359 = (state_41487[(11)]);
var inst_41359__$1 = (state_41487[(2)]);
var inst_41360 = (inst_41359__$1 == null);
var state_41487__$1 = (function (){var statearr_41503 = state_41487;
(statearr_41503[(11)] = inst_41359__$1);

return statearr_41503;
})();
if(cljs.core.truth_(inst_41360)){
var statearr_41504_41584 = state_41487__$1;
(statearr_41504_41584[(1)] = (5));

} else {
var statearr_41505_41585 = state_41487__$1;
(statearr_41505_41585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (15))){
var inst_41369 = (state_41487[(14)]);
var inst_41371 = (state_41487[(15)]);
var inst_41368 = (state_41487[(16)]);
var inst_41370 = (state_41487[(17)]);
var inst_41384 = (state_41487[(2)]);
var inst_41385 = (inst_41371 + (1));
var tmp41499 = inst_41369;
var tmp41500 = inst_41368;
var tmp41501 = inst_41370;
var inst_41368__$1 = tmp41500;
var inst_41369__$1 = tmp41499;
var inst_41370__$1 = tmp41501;
var inst_41371__$1 = inst_41385;
var state_41487__$1 = (function (){var statearr_41506 = state_41487;
(statearr_41506[(14)] = inst_41369__$1);

(statearr_41506[(15)] = inst_41371__$1);

(statearr_41506[(16)] = inst_41368__$1);

(statearr_41506[(17)] = inst_41370__$1);

(statearr_41506[(18)] = inst_41384);

return statearr_41506;
})();
var statearr_41507_41586 = state_41487__$1;
(statearr_41507_41586[(2)] = null);

(statearr_41507_41586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (21))){
var inst_41409 = (state_41487[(2)]);
var state_41487__$1 = state_41487;
var statearr_41511_41587 = state_41487__$1;
(statearr_41511_41587[(2)] = inst_41409);

(statearr_41511_41587[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (31))){
var inst_41435 = (state_41487[(10)]);
var inst_41439 = done.call(null,null);
var inst_41440 = cljs.core.async.untap_STAR_.call(null,m,inst_41435);
var state_41487__$1 = (function (){var statearr_41512 = state_41487;
(statearr_41512[(19)] = inst_41439);

return statearr_41512;
})();
var statearr_41513_41588 = state_41487__$1;
(statearr_41513_41588[(2)] = inst_41440);

(statearr_41513_41588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (32))){
var inst_41429 = (state_41487[(20)]);
var inst_41428 = (state_41487[(9)]);
var inst_41427 = (state_41487[(21)]);
var inst_41430 = (state_41487[(12)]);
var inst_41442 = (state_41487[(2)]);
var inst_41443 = (inst_41430 + (1));
var tmp41508 = inst_41429;
var tmp41509 = inst_41428;
var tmp41510 = inst_41427;
var inst_41427__$1 = tmp41510;
var inst_41428__$1 = tmp41509;
var inst_41429__$1 = tmp41508;
var inst_41430__$1 = inst_41443;
var state_41487__$1 = (function (){var statearr_41514 = state_41487;
(statearr_41514[(20)] = inst_41429__$1);

(statearr_41514[(9)] = inst_41428__$1);

(statearr_41514[(22)] = inst_41442);

(statearr_41514[(21)] = inst_41427__$1);

(statearr_41514[(12)] = inst_41430__$1);

return statearr_41514;
})();
var statearr_41515_41589 = state_41487__$1;
(statearr_41515_41589[(2)] = null);

(statearr_41515_41589[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (40))){
var inst_41455 = (state_41487[(23)]);
var inst_41459 = done.call(null,null);
var inst_41460 = cljs.core.async.untap_STAR_.call(null,m,inst_41455);
var state_41487__$1 = (function (){var statearr_41516 = state_41487;
(statearr_41516[(24)] = inst_41459);

return statearr_41516;
})();
var statearr_41517_41590 = state_41487__$1;
(statearr_41517_41590[(2)] = inst_41460);

(statearr_41517_41590[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (33))){
var inst_41446 = (state_41487[(25)]);
var inst_41448 = cljs.core.chunked_seq_QMARK_.call(null,inst_41446);
var state_41487__$1 = state_41487;
if(inst_41448){
var statearr_41518_41591 = state_41487__$1;
(statearr_41518_41591[(1)] = (36));

} else {
var statearr_41519_41592 = state_41487__$1;
(statearr_41519_41592[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (13))){
var inst_41378 = (state_41487[(26)]);
var inst_41381 = cljs.core.async.close_BANG_.call(null,inst_41378);
var state_41487__$1 = state_41487;
var statearr_41520_41593 = state_41487__$1;
(statearr_41520_41593[(2)] = inst_41381);

(statearr_41520_41593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (22))){
var inst_41399 = (state_41487[(8)]);
var inst_41402 = cljs.core.async.close_BANG_.call(null,inst_41399);
var state_41487__$1 = state_41487;
var statearr_41521_41594 = state_41487__$1;
(statearr_41521_41594[(2)] = inst_41402);

(statearr_41521_41594[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (36))){
var inst_41446 = (state_41487[(25)]);
var inst_41450 = cljs.core.chunk_first.call(null,inst_41446);
var inst_41451 = cljs.core.chunk_rest.call(null,inst_41446);
var inst_41452 = cljs.core.count.call(null,inst_41450);
var inst_41427 = inst_41451;
var inst_41428 = inst_41450;
var inst_41429 = inst_41452;
var inst_41430 = (0);
var state_41487__$1 = (function (){var statearr_41522 = state_41487;
(statearr_41522[(20)] = inst_41429);

(statearr_41522[(9)] = inst_41428);

(statearr_41522[(21)] = inst_41427);

(statearr_41522[(12)] = inst_41430);

return statearr_41522;
})();
var statearr_41523_41595 = state_41487__$1;
(statearr_41523_41595[(2)] = null);

(statearr_41523_41595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (41))){
var inst_41446 = (state_41487[(25)]);
var inst_41462 = (state_41487[(2)]);
var inst_41463 = cljs.core.next.call(null,inst_41446);
var inst_41427 = inst_41463;
var inst_41428 = null;
var inst_41429 = (0);
var inst_41430 = (0);
var state_41487__$1 = (function (){var statearr_41524 = state_41487;
(statearr_41524[(20)] = inst_41429);

(statearr_41524[(9)] = inst_41428);

(statearr_41524[(21)] = inst_41427);

(statearr_41524[(12)] = inst_41430);

(statearr_41524[(27)] = inst_41462);

return statearr_41524;
})();
var statearr_41525_41596 = state_41487__$1;
(statearr_41525_41596[(2)] = null);

(statearr_41525_41596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (43))){
var state_41487__$1 = state_41487;
var statearr_41526_41597 = state_41487__$1;
(statearr_41526_41597[(2)] = null);

(statearr_41526_41597[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (29))){
var inst_41471 = (state_41487[(2)]);
var state_41487__$1 = state_41487;
var statearr_41527_41598 = state_41487__$1;
(statearr_41527_41598[(2)] = inst_41471);

(statearr_41527_41598[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (44))){
var inst_41480 = (state_41487[(2)]);
var state_41487__$1 = (function (){var statearr_41528 = state_41487;
(statearr_41528[(28)] = inst_41480);

return statearr_41528;
})();
var statearr_41529_41599 = state_41487__$1;
(statearr_41529_41599[(2)] = null);

(statearr_41529_41599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (6))){
var inst_41419 = (state_41487[(29)]);
var inst_41418 = cljs.core.deref.call(null,cs);
var inst_41419__$1 = cljs.core.keys.call(null,inst_41418);
var inst_41420 = cljs.core.count.call(null,inst_41419__$1);
var inst_41421 = cljs.core.reset_BANG_.call(null,dctr,inst_41420);
var inst_41426 = cljs.core.seq.call(null,inst_41419__$1);
var inst_41427 = inst_41426;
var inst_41428 = null;
var inst_41429 = (0);
var inst_41430 = (0);
var state_41487__$1 = (function (){var statearr_41530 = state_41487;
(statearr_41530[(20)] = inst_41429);

(statearr_41530[(9)] = inst_41428);

(statearr_41530[(29)] = inst_41419__$1);

(statearr_41530[(21)] = inst_41427);

(statearr_41530[(12)] = inst_41430);

(statearr_41530[(30)] = inst_41421);

return statearr_41530;
})();
var statearr_41531_41600 = state_41487__$1;
(statearr_41531_41600[(2)] = null);

(statearr_41531_41600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (28))){
var inst_41427 = (state_41487[(21)]);
var inst_41446 = (state_41487[(25)]);
var inst_41446__$1 = cljs.core.seq.call(null,inst_41427);
var state_41487__$1 = (function (){var statearr_41532 = state_41487;
(statearr_41532[(25)] = inst_41446__$1);

return statearr_41532;
})();
if(inst_41446__$1){
var statearr_41533_41601 = state_41487__$1;
(statearr_41533_41601[(1)] = (33));

} else {
var statearr_41534_41602 = state_41487__$1;
(statearr_41534_41602[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (25))){
var inst_41429 = (state_41487[(20)]);
var inst_41430 = (state_41487[(12)]);
var inst_41432 = (inst_41430 < inst_41429);
var inst_41433 = inst_41432;
var state_41487__$1 = state_41487;
if(cljs.core.truth_(inst_41433)){
var statearr_41535_41603 = state_41487__$1;
(statearr_41535_41603[(1)] = (27));

} else {
var statearr_41536_41604 = state_41487__$1;
(statearr_41536_41604[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (34))){
var state_41487__$1 = state_41487;
var statearr_41537_41605 = state_41487__$1;
(statearr_41537_41605[(2)] = null);

(statearr_41537_41605[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (17))){
var state_41487__$1 = state_41487;
var statearr_41538_41606 = state_41487__$1;
(statearr_41538_41606[(2)] = null);

(statearr_41538_41606[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (3))){
var inst_41485 = (state_41487[(2)]);
var state_41487__$1 = state_41487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41487__$1,inst_41485);
} else {
if((state_val_41488 === (12))){
var inst_41414 = (state_41487[(2)]);
var state_41487__$1 = state_41487;
var statearr_41539_41607 = state_41487__$1;
(statearr_41539_41607[(2)] = inst_41414);

(statearr_41539_41607[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (2))){
var state_41487__$1 = state_41487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41487__$1,(4),ch);
} else {
if((state_val_41488 === (23))){
var state_41487__$1 = state_41487;
var statearr_41540_41608 = state_41487__$1;
(statearr_41540_41608[(2)] = null);

(statearr_41540_41608[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (35))){
var inst_41469 = (state_41487[(2)]);
var state_41487__$1 = state_41487;
var statearr_41541_41609 = state_41487__$1;
(statearr_41541_41609[(2)] = inst_41469);

(statearr_41541_41609[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (19))){
var inst_41388 = (state_41487[(7)]);
var inst_41392 = cljs.core.chunk_first.call(null,inst_41388);
var inst_41393 = cljs.core.chunk_rest.call(null,inst_41388);
var inst_41394 = cljs.core.count.call(null,inst_41392);
var inst_41368 = inst_41393;
var inst_41369 = inst_41392;
var inst_41370 = inst_41394;
var inst_41371 = (0);
var state_41487__$1 = (function (){var statearr_41542 = state_41487;
(statearr_41542[(14)] = inst_41369);

(statearr_41542[(15)] = inst_41371);

(statearr_41542[(16)] = inst_41368);

(statearr_41542[(17)] = inst_41370);

return statearr_41542;
})();
var statearr_41543_41610 = state_41487__$1;
(statearr_41543_41610[(2)] = null);

(statearr_41543_41610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (11))){
var inst_41368 = (state_41487[(16)]);
var inst_41388 = (state_41487[(7)]);
var inst_41388__$1 = cljs.core.seq.call(null,inst_41368);
var state_41487__$1 = (function (){var statearr_41544 = state_41487;
(statearr_41544[(7)] = inst_41388__$1);

return statearr_41544;
})();
if(inst_41388__$1){
var statearr_41545_41611 = state_41487__$1;
(statearr_41545_41611[(1)] = (16));

} else {
var statearr_41546_41612 = state_41487__$1;
(statearr_41546_41612[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (9))){
var inst_41416 = (state_41487[(2)]);
var state_41487__$1 = state_41487;
var statearr_41547_41613 = state_41487__$1;
(statearr_41547_41613[(2)] = inst_41416);

(statearr_41547_41613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (5))){
var inst_41366 = cljs.core.deref.call(null,cs);
var inst_41367 = cljs.core.seq.call(null,inst_41366);
var inst_41368 = inst_41367;
var inst_41369 = null;
var inst_41370 = (0);
var inst_41371 = (0);
var state_41487__$1 = (function (){var statearr_41548 = state_41487;
(statearr_41548[(14)] = inst_41369);

(statearr_41548[(15)] = inst_41371);

(statearr_41548[(16)] = inst_41368);

(statearr_41548[(17)] = inst_41370);

return statearr_41548;
})();
var statearr_41549_41614 = state_41487__$1;
(statearr_41549_41614[(2)] = null);

(statearr_41549_41614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (14))){
var state_41487__$1 = state_41487;
var statearr_41550_41615 = state_41487__$1;
(statearr_41550_41615[(2)] = null);

(statearr_41550_41615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (45))){
var inst_41477 = (state_41487[(2)]);
var state_41487__$1 = state_41487;
var statearr_41551_41616 = state_41487__$1;
(statearr_41551_41616[(2)] = inst_41477);

(statearr_41551_41616[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (26))){
var inst_41419 = (state_41487[(29)]);
var inst_41473 = (state_41487[(2)]);
var inst_41474 = cljs.core.seq.call(null,inst_41419);
var state_41487__$1 = (function (){var statearr_41552 = state_41487;
(statearr_41552[(31)] = inst_41473);

return statearr_41552;
})();
if(inst_41474){
var statearr_41553_41617 = state_41487__$1;
(statearr_41553_41617[(1)] = (42));

} else {
var statearr_41554_41618 = state_41487__$1;
(statearr_41554_41618[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (16))){
var inst_41388 = (state_41487[(7)]);
var inst_41390 = cljs.core.chunked_seq_QMARK_.call(null,inst_41388);
var state_41487__$1 = state_41487;
if(inst_41390){
var statearr_41555_41619 = state_41487__$1;
(statearr_41555_41619[(1)] = (19));

} else {
var statearr_41556_41620 = state_41487__$1;
(statearr_41556_41620[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (38))){
var inst_41466 = (state_41487[(2)]);
var state_41487__$1 = state_41487;
var statearr_41557_41621 = state_41487__$1;
(statearr_41557_41621[(2)] = inst_41466);

(statearr_41557_41621[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (30))){
var state_41487__$1 = state_41487;
var statearr_41558_41622 = state_41487__$1;
(statearr_41558_41622[(2)] = null);

(statearr_41558_41622[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (10))){
var inst_41369 = (state_41487[(14)]);
var inst_41371 = (state_41487[(15)]);
var inst_41377 = cljs.core._nth.call(null,inst_41369,inst_41371);
var inst_41378 = cljs.core.nth.call(null,inst_41377,(0),null);
var inst_41379 = cljs.core.nth.call(null,inst_41377,(1),null);
var state_41487__$1 = (function (){var statearr_41559 = state_41487;
(statearr_41559[(26)] = inst_41378);

return statearr_41559;
})();
if(cljs.core.truth_(inst_41379)){
var statearr_41560_41623 = state_41487__$1;
(statearr_41560_41623[(1)] = (13));

} else {
var statearr_41561_41624 = state_41487__$1;
(statearr_41561_41624[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (18))){
var inst_41412 = (state_41487[(2)]);
var state_41487__$1 = state_41487;
var statearr_41562_41625 = state_41487__$1;
(statearr_41562_41625[(2)] = inst_41412);

(statearr_41562_41625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (42))){
var state_41487__$1 = state_41487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41487__$1,(45),dchan);
} else {
if((state_val_41488 === (37))){
var inst_41359 = (state_41487[(11)]);
var inst_41446 = (state_41487[(25)]);
var inst_41455 = (state_41487[(23)]);
var inst_41455__$1 = cljs.core.first.call(null,inst_41446);
var inst_41456 = cljs.core.async.put_BANG_.call(null,inst_41455__$1,inst_41359,done);
var state_41487__$1 = (function (){var statearr_41563 = state_41487;
(statearr_41563[(23)] = inst_41455__$1);

return statearr_41563;
})();
if(cljs.core.truth_(inst_41456)){
var statearr_41564_41626 = state_41487__$1;
(statearr_41564_41626[(1)] = (39));

} else {
var statearr_41565_41627 = state_41487__$1;
(statearr_41565_41627[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (8))){
var inst_41371 = (state_41487[(15)]);
var inst_41370 = (state_41487[(17)]);
var inst_41373 = (inst_41371 < inst_41370);
var inst_41374 = inst_41373;
var state_41487__$1 = state_41487;
if(cljs.core.truth_(inst_41374)){
var statearr_41566_41628 = state_41487__$1;
(statearr_41566_41628[(1)] = (10));

} else {
var statearr_41567_41629 = state_41487__$1;
(statearr_41567_41629[(1)] = (11));

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
});})(c__21381__auto___41575,cs,m,dchan,dctr,done))
;
return ((function (switch__21316__auto__,c__21381__auto___41575,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21317__auto__ = null;
var cljs$core$async$mult_$_state_machine__21317__auto____0 = (function (){
var statearr_41571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41571[(0)] = cljs$core$async$mult_$_state_machine__21317__auto__);

(statearr_41571[(1)] = (1));

return statearr_41571;
});
var cljs$core$async$mult_$_state_machine__21317__auto____1 = (function (state_41487){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_41487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e41572){if((e41572 instanceof Object)){
var ex__21320__auto__ = e41572;
var statearr_41573_41630 = state_41487;
(statearr_41573_41630[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41631 = state_41487;
state_41487 = G__41631;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21317__auto__ = function(state_41487){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21317__auto____1.call(this,state_41487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21317__auto____0;
cljs$core$async$mult_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21317__auto____1;
return cljs$core$async$mult_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___41575,cs,m,dchan,dctr,done))
})();
var state__21383__auto__ = (function (){var statearr_41574 = f__21382__auto__.call(null);
(statearr_41574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___41575);

return statearr_41574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___41575,cs,m,dchan,dctr,done))
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
var args41632 = [];
var len__17843__auto___41635 = arguments.length;
var i__17844__auto___41636 = (0);
while(true){
if((i__17844__auto___41636 < len__17843__auto___41635)){
args41632.push((arguments[i__17844__auto___41636]));

var G__41637 = (i__17844__auto___41636 + (1));
i__17844__auto___41636 = G__41637;
continue;
} else {
}
break;
}

var G__41634 = args41632.length;
switch (G__41634) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41632.length)].join('')));

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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,state_map);
} else {
var m__17441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,state_map);
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
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,mode);
} else {
var m__17441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17850__auto__ = [];
var len__17843__auto___41649 = arguments.length;
var i__17844__auto___41650 = (0);
while(true){
if((i__17844__auto___41650 < len__17843__auto___41649)){
args__17850__auto__.push((arguments[i__17844__auto___41650]));

var G__41651 = (i__17844__auto___41650 + (1));
i__17844__auto___41650 = G__41651;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((3) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17851__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41643){
var map__41644 = p__41643;
var map__41644__$1 = ((((!((map__41644 == null)))?((((map__41644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41644):map__41644);
var opts = map__41644__$1;
var statearr_41646_41652 = state;
(statearr_41646_41652[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__41644,map__41644__$1,opts){
return (function (val){
var statearr_41647_41653 = state;
(statearr_41647_41653[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41644,map__41644__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_41648_41654 = state;
(statearr_41648_41654[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41639){
var G__41640 = cljs.core.first.call(null,seq41639);
var seq41639__$1 = cljs.core.next.call(null,seq41639);
var G__41641 = cljs.core.first.call(null,seq41639__$1);
var seq41639__$2 = cljs.core.next.call(null,seq41639__$1);
var G__41642 = cljs.core.first.call(null,seq41639__$2);
var seq41639__$3 = cljs.core.next.call(null,seq41639__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41640,G__41641,G__41642,seq41639__$3);
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
if(typeof cljs.core.async.t_cljs$core$async41818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41818 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41819){
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
this.meta41819 = meta41819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41820,meta41819__$1){
var self__ = this;
var _41820__$1 = this;
return (new cljs.core.async.t_cljs$core$async41818(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41819__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41820){
var self__ = this;
var _41820__$1 = this;
return self__.meta41819;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41818.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41818.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async41818.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41818.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41818.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41818.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41818.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async41818.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41819","meta41819",354228358,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41818";

cljs.core.async.t_cljs$core$async41818.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async41818");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41818 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41818(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41819){
return (new cljs.core.async.t_cljs$core$async41818(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41819));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41818(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21381__auto___41981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___41981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___41981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41918){
var state_val_41919 = (state_41918[(1)]);
if((state_val_41919 === (7))){
var inst_41836 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41920_41982 = state_41918__$1;
(statearr_41920_41982[(2)] = inst_41836);

(statearr_41920_41982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (20))){
var inst_41848 = (state_41918[(7)]);
var state_41918__$1 = state_41918;
var statearr_41921_41983 = state_41918__$1;
(statearr_41921_41983[(2)] = inst_41848);

(statearr_41921_41983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (27))){
var state_41918__$1 = state_41918;
var statearr_41922_41984 = state_41918__$1;
(statearr_41922_41984[(2)] = null);

(statearr_41922_41984[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (1))){
var inst_41824 = (state_41918[(8)]);
var inst_41824__$1 = calc_state.call(null);
var inst_41826 = (inst_41824__$1 == null);
var inst_41827 = cljs.core.not.call(null,inst_41826);
var state_41918__$1 = (function (){var statearr_41923 = state_41918;
(statearr_41923[(8)] = inst_41824__$1);

return statearr_41923;
})();
if(inst_41827){
var statearr_41924_41985 = state_41918__$1;
(statearr_41924_41985[(1)] = (2));

} else {
var statearr_41925_41986 = state_41918__$1;
(statearr_41925_41986[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (24))){
var inst_41892 = (state_41918[(9)]);
var inst_41871 = (state_41918[(10)]);
var inst_41878 = (state_41918[(11)]);
var inst_41892__$1 = inst_41871.call(null,inst_41878);
var state_41918__$1 = (function (){var statearr_41926 = state_41918;
(statearr_41926[(9)] = inst_41892__$1);

return statearr_41926;
})();
if(cljs.core.truth_(inst_41892__$1)){
var statearr_41927_41987 = state_41918__$1;
(statearr_41927_41987[(1)] = (29));

} else {
var statearr_41928_41988 = state_41918__$1;
(statearr_41928_41988[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (4))){
var inst_41839 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
if(cljs.core.truth_(inst_41839)){
var statearr_41929_41989 = state_41918__$1;
(statearr_41929_41989[(1)] = (8));

} else {
var statearr_41930_41990 = state_41918__$1;
(statearr_41930_41990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (15))){
var inst_41865 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
if(cljs.core.truth_(inst_41865)){
var statearr_41931_41991 = state_41918__$1;
(statearr_41931_41991[(1)] = (19));

} else {
var statearr_41932_41992 = state_41918__$1;
(statearr_41932_41992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (21))){
var inst_41870 = (state_41918[(12)]);
var inst_41870__$1 = (state_41918[(2)]);
var inst_41871 = cljs.core.get.call(null,inst_41870__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41872 = cljs.core.get.call(null,inst_41870__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41873 = cljs.core.get.call(null,inst_41870__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41918__$1 = (function (){var statearr_41933 = state_41918;
(statearr_41933[(13)] = inst_41872);

(statearr_41933[(12)] = inst_41870__$1);

(statearr_41933[(10)] = inst_41871);

return statearr_41933;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41918__$1,(22),inst_41873);
} else {
if((state_val_41919 === (31))){
var inst_41900 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
if(cljs.core.truth_(inst_41900)){
var statearr_41934_41993 = state_41918__$1;
(statearr_41934_41993[(1)] = (32));

} else {
var statearr_41935_41994 = state_41918__$1;
(statearr_41935_41994[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (32))){
var inst_41877 = (state_41918[(14)]);
var state_41918__$1 = state_41918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41918__$1,(35),out,inst_41877);
} else {
if((state_val_41919 === (33))){
var inst_41870 = (state_41918[(12)]);
var inst_41848 = inst_41870;
var state_41918__$1 = (function (){var statearr_41936 = state_41918;
(statearr_41936[(7)] = inst_41848);

return statearr_41936;
})();
var statearr_41937_41995 = state_41918__$1;
(statearr_41937_41995[(2)] = null);

(statearr_41937_41995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (13))){
var inst_41848 = (state_41918[(7)]);
var inst_41855 = inst_41848.cljs$lang$protocol_mask$partition0$;
var inst_41856 = (inst_41855 & (64));
var inst_41857 = inst_41848.cljs$core$ISeq$;
var inst_41858 = (inst_41856) || (inst_41857);
var state_41918__$1 = state_41918;
if(cljs.core.truth_(inst_41858)){
var statearr_41938_41996 = state_41918__$1;
(statearr_41938_41996[(1)] = (16));

} else {
var statearr_41939_41997 = state_41918__$1;
(statearr_41939_41997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (22))){
var inst_41877 = (state_41918[(14)]);
var inst_41878 = (state_41918[(11)]);
var inst_41876 = (state_41918[(2)]);
var inst_41877__$1 = cljs.core.nth.call(null,inst_41876,(0),null);
var inst_41878__$1 = cljs.core.nth.call(null,inst_41876,(1),null);
var inst_41879 = (inst_41877__$1 == null);
var inst_41880 = cljs.core._EQ_.call(null,inst_41878__$1,change);
var inst_41881 = (inst_41879) || (inst_41880);
var state_41918__$1 = (function (){var statearr_41940 = state_41918;
(statearr_41940[(14)] = inst_41877__$1);

(statearr_41940[(11)] = inst_41878__$1);

return statearr_41940;
})();
if(cljs.core.truth_(inst_41881)){
var statearr_41941_41998 = state_41918__$1;
(statearr_41941_41998[(1)] = (23));

} else {
var statearr_41942_41999 = state_41918__$1;
(statearr_41942_41999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (36))){
var inst_41870 = (state_41918[(12)]);
var inst_41848 = inst_41870;
var state_41918__$1 = (function (){var statearr_41943 = state_41918;
(statearr_41943[(7)] = inst_41848);

return statearr_41943;
})();
var statearr_41944_42000 = state_41918__$1;
(statearr_41944_42000[(2)] = null);

(statearr_41944_42000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (29))){
var inst_41892 = (state_41918[(9)]);
var state_41918__$1 = state_41918;
var statearr_41945_42001 = state_41918__$1;
(statearr_41945_42001[(2)] = inst_41892);

(statearr_41945_42001[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (6))){
var state_41918__$1 = state_41918;
var statearr_41946_42002 = state_41918__$1;
(statearr_41946_42002[(2)] = false);

(statearr_41946_42002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (28))){
var inst_41888 = (state_41918[(2)]);
var inst_41889 = calc_state.call(null);
var inst_41848 = inst_41889;
var state_41918__$1 = (function (){var statearr_41947 = state_41918;
(statearr_41947[(15)] = inst_41888);

(statearr_41947[(7)] = inst_41848);

return statearr_41947;
})();
var statearr_41948_42003 = state_41918__$1;
(statearr_41948_42003[(2)] = null);

(statearr_41948_42003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (25))){
var inst_41914 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41949_42004 = state_41918__$1;
(statearr_41949_42004[(2)] = inst_41914);

(statearr_41949_42004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (34))){
var inst_41912 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41950_42005 = state_41918__$1;
(statearr_41950_42005[(2)] = inst_41912);

(statearr_41950_42005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (17))){
var state_41918__$1 = state_41918;
var statearr_41951_42006 = state_41918__$1;
(statearr_41951_42006[(2)] = false);

(statearr_41951_42006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (3))){
var state_41918__$1 = state_41918;
var statearr_41952_42007 = state_41918__$1;
(statearr_41952_42007[(2)] = false);

(statearr_41952_42007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (12))){
var inst_41916 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41918__$1,inst_41916);
} else {
if((state_val_41919 === (2))){
var inst_41824 = (state_41918[(8)]);
var inst_41829 = inst_41824.cljs$lang$protocol_mask$partition0$;
var inst_41830 = (inst_41829 & (64));
var inst_41831 = inst_41824.cljs$core$ISeq$;
var inst_41832 = (inst_41830) || (inst_41831);
var state_41918__$1 = state_41918;
if(cljs.core.truth_(inst_41832)){
var statearr_41953_42008 = state_41918__$1;
(statearr_41953_42008[(1)] = (5));

} else {
var statearr_41954_42009 = state_41918__$1;
(statearr_41954_42009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (23))){
var inst_41877 = (state_41918[(14)]);
var inst_41883 = (inst_41877 == null);
var state_41918__$1 = state_41918;
if(cljs.core.truth_(inst_41883)){
var statearr_41955_42010 = state_41918__$1;
(statearr_41955_42010[(1)] = (26));

} else {
var statearr_41956_42011 = state_41918__$1;
(statearr_41956_42011[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (35))){
var inst_41903 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
if(cljs.core.truth_(inst_41903)){
var statearr_41957_42012 = state_41918__$1;
(statearr_41957_42012[(1)] = (36));

} else {
var statearr_41958_42013 = state_41918__$1;
(statearr_41958_42013[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (19))){
var inst_41848 = (state_41918[(7)]);
var inst_41867 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41848);
var state_41918__$1 = state_41918;
var statearr_41959_42014 = state_41918__$1;
(statearr_41959_42014[(2)] = inst_41867);

(statearr_41959_42014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (11))){
var inst_41848 = (state_41918[(7)]);
var inst_41852 = (inst_41848 == null);
var inst_41853 = cljs.core.not.call(null,inst_41852);
var state_41918__$1 = state_41918;
if(inst_41853){
var statearr_41960_42015 = state_41918__$1;
(statearr_41960_42015[(1)] = (13));

} else {
var statearr_41961_42016 = state_41918__$1;
(statearr_41961_42016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (9))){
var inst_41824 = (state_41918[(8)]);
var state_41918__$1 = state_41918;
var statearr_41962_42017 = state_41918__$1;
(statearr_41962_42017[(2)] = inst_41824);

(statearr_41962_42017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (5))){
var state_41918__$1 = state_41918;
var statearr_41963_42018 = state_41918__$1;
(statearr_41963_42018[(2)] = true);

(statearr_41963_42018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (14))){
var state_41918__$1 = state_41918;
var statearr_41964_42019 = state_41918__$1;
(statearr_41964_42019[(2)] = false);

(statearr_41964_42019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (26))){
var inst_41878 = (state_41918[(11)]);
var inst_41885 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41878);
var state_41918__$1 = state_41918;
var statearr_41965_42020 = state_41918__$1;
(statearr_41965_42020[(2)] = inst_41885);

(statearr_41965_42020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (16))){
var state_41918__$1 = state_41918;
var statearr_41966_42021 = state_41918__$1;
(statearr_41966_42021[(2)] = true);

(statearr_41966_42021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (38))){
var inst_41908 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41967_42022 = state_41918__$1;
(statearr_41967_42022[(2)] = inst_41908);

(statearr_41967_42022[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (30))){
var inst_41872 = (state_41918[(13)]);
var inst_41871 = (state_41918[(10)]);
var inst_41878 = (state_41918[(11)]);
var inst_41895 = cljs.core.empty_QMARK_.call(null,inst_41871);
var inst_41896 = inst_41872.call(null,inst_41878);
var inst_41897 = cljs.core.not.call(null,inst_41896);
var inst_41898 = (inst_41895) && (inst_41897);
var state_41918__$1 = state_41918;
var statearr_41968_42023 = state_41918__$1;
(statearr_41968_42023[(2)] = inst_41898);

(statearr_41968_42023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (10))){
var inst_41824 = (state_41918[(8)]);
var inst_41844 = (state_41918[(2)]);
var inst_41845 = cljs.core.get.call(null,inst_41844,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41846 = cljs.core.get.call(null,inst_41844,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41847 = cljs.core.get.call(null,inst_41844,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41848 = inst_41824;
var state_41918__$1 = (function (){var statearr_41969 = state_41918;
(statearr_41969[(16)] = inst_41847);

(statearr_41969[(17)] = inst_41846);

(statearr_41969[(18)] = inst_41845);

(statearr_41969[(7)] = inst_41848);

return statearr_41969;
})();
var statearr_41970_42024 = state_41918__$1;
(statearr_41970_42024[(2)] = null);

(statearr_41970_42024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (18))){
var inst_41862 = (state_41918[(2)]);
var state_41918__$1 = state_41918;
var statearr_41971_42025 = state_41918__$1;
(statearr_41971_42025[(2)] = inst_41862);

(statearr_41971_42025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (37))){
var state_41918__$1 = state_41918;
var statearr_41972_42026 = state_41918__$1;
(statearr_41972_42026[(2)] = null);

(statearr_41972_42026[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41919 === (8))){
var inst_41824 = (state_41918[(8)]);
var inst_41841 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41824);
var state_41918__$1 = state_41918;
var statearr_41973_42027 = state_41918__$1;
(statearr_41973_42027[(2)] = inst_41841);

(statearr_41973_42027[(1)] = (10));


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
});})(c__21381__auto___41981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21316__auto__,c__21381__auto___41981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21317__auto__ = null;
var cljs$core$async$mix_$_state_machine__21317__auto____0 = (function (){
var statearr_41977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41977[(0)] = cljs$core$async$mix_$_state_machine__21317__auto__);

(statearr_41977[(1)] = (1));

return statearr_41977;
});
var cljs$core$async$mix_$_state_machine__21317__auto____1 = (function (state_41918){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_41918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e41978){if((e41978 instanceof Object)){
var ex__21320__auto__ = e41978;
var statearr_41979_42028 = state_41918;
(statearr_41979_42028[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42029 = state_41918;
state_41918 = G__42029;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21317__auto__ = function(state_41918){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21317__auto____1.call(this,state_41918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21317__auto____0;
cljs$core$async$mix_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21317__auto____1;
return cljs$core$async$mix_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___41981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21383__auto__ = (function (){var statearr_41980 = f__21382__auto__.call(null);
(statearr_41980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___41981);

return statearr_41980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___41981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args42030 = [];
var len__17843__auto___42033 = arguments.length;
var i__17844__auto___42034 = (0);
while(true){
if((i__17844__auto___42034 < len__17843__auto___42033)){
args42030.push((arguments[i__17844__auto___42034]));

var G__42035 = (i__17844__auto___42034 + (1));
i__17844__auto___42034 = G__42035;
continue;
} else {
}
break;
}

var G__42032 = args42030.length;
switch (G__42032) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42030.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p);
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
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v);
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
var args42038 = [];
var len__17843__auto___42163 = arguments.length;
var i__17844__auto___42164 = (0);
while(true){
if((i__17844__auto___42164 < len__17843__auto___42163)){
args42038.push((arguments[i__17844__auto___42164]));

var G__42165 = (i__17844__auto___42164 + (1));
i__17844__auto___42164 = G__42165;
continue;
} else {
}
break;
}

var G__42040 = args42038.length;
switch (G__42040) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42038.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16785__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16785__auto__,mults){
return (function (p1__42037_SHARP_){
if(cljs.core.truth_(p1__42037_SHARP_.call(null,topic))){
return p1__42037_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42037_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16785__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42041 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42042){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42042 = meta42042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42043,meta42042__$1){
var self__ = this;
var _42043__$1 = this;
return (new cljs.core.async.t_cljs$core$async42041(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42042__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42043){
var self__ = this;
var _42043__$1 = this;
return self__.meta42042;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42041.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42041.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42041.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async42041.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42041.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async42041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42041.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42042","meta42042",50743861,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42041";

cljs.core.async.t_cljs$core$async42041.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async42041");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42041 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42042){
return (new cljs.core.async.t_cljs$core$async42041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42042));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42041(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21381__auto___42167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___42167,mults,ensure_mult,p){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___42167,mults,ensure_mult,p){
return (function (state_42115){
var state_val_42116 = (state_42115[(1)]);
if((state_val_42116 === (7))){
var inst_42111 = (state_42115[(2)]);
var state_42115__$1 = state_42115;
var statearr_42117_42168 = state_42115__$1;
(statearr_42117_42168[(2)] = inst_42111);

(statearr_42117_42168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (20))){
var state_42115__$1 = state_42115;
var statearr_42118_42169 = state_42115__$1;
(statearr_42118_42169[(2)] = null);

(statearr_42118_42169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (1))){
var state_42115__$1 = state_42115;
var statearr_42119_42170 = state_42115__$1;
(statearr_42119_42170[(2)] = null);

(statearr_42119_42170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (24))){
var inst_42094 = (state_42115[(7)]);
var inst_42103 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42094);
var state_42115__$1 = state_42115;
var statearr_42120_42171 = state_42115__$1;
(statearr_42120_42171[(2)] = inst_42103);

(statearr_42120_42171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (4))){
var inst_42046 = (state_42115[(8)]);
var inst_42046__$1 = (state_42115[(2)]);
var inst_42047 = (inst_42046__$1 == null);
var state_42115__$1 = (function (){var statearr_42121 = state_42115;
(statearr_42121[(8)] = inst_42046__$1);

return statearr_42121;
})();
if(cljs.core.truth_(inst_42047)){
var statearr_42122_42172 = state_42115__$1;
(statearr_42122_42172[(1)] = (5));

} else {
var statearr_42123_42173 = state_42115__$1;
(statearr_42123_42173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (15))){
var inst_42088 = (state_42115[(2)]);
var state_42115__$1 = state_42115;
var statearr_42124_42174 = state_42115__$1;
(statearr_42124_42174[(2)] = inst_42088);

(statearr_42124_42174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (21))){
var inst_42108 = (state_42115[(2)]);
var state_42115__$1 = (function (){var statearr_42125 = state_42115;
(statearr_42125[(9)] = inst_42108);

return statearr_42125;
})();
var statearr_42126_42175 = state_42115__$1;
(statearr_42126_42175[(2)] = null);

(statearr_42126_42175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (13))){
var inst_42070 = (state_42115[(10)]);
var inst_42072 = cljs.core.chunked_seq_QMARK_.call(null,inst_42070);
var state_42115__$1 = state_42115;
if(inst_42072){
var statearr_42127_42176 = state_42115__$1;
(statearr_42127_42176[(1)] = (16));

} else {
var statearr_42128_42177 = state_42115__$1;
(statearr_42128_42177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (22))){
var inst_42100 = (state_42115[(2)]);
var state_42115__$1 = state_42115;
if(cljs.core.truth_(inst_42100)){
var statearr_42129_42178 = state_42115__$1;
(statearr_42129_42178[(1)] = (23));

} else {
var statearr_42130_42179 = state_42115__$1;
(statearr_42130_42179[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (6))){
var inst_42094 = (state_42115[(7)]);
var inst_42046 = (state_42115[(8)]);
var inst_42096 = (state_42115[(11)]);
var inst_42094__$1 = topic_fn.call(null,inst_42046);
var inst_42095 = cljs.core.deref.call(null,mults);
var inst_42096__$1 = cljs.core.get.call(null,inst_42095,inst_42094__$1);
var state_42115__$1 = (function (){var statearr_42131 = state_42115;
(statearr_42131[(7)] = inst_42094__$1);

(statearr_42131[(11)] = inst_42096__$1);

return statearr_42131;
})();
if(cljs.core.truth_(inst_42096__$1)){
var statearr_42132_42180 = state_42115__$1;
(statearr_42132_42180[(1)] = (19));

} else {
var statearr_42133_42181 = state_42115__$1;
(statearr_42133_42181[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (25))){
var inst_42105 = (state_42115[(2)]);
var state_42115__$1 = state_42115;
var statearr_42134_42182 = state_42115__$1;
(statearr_42134_42182[(2)] = inst_42105);

(statearr_42134_42182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (17))){
var inst_42070 = (state_42115[(10)]);
var inst_42079 = cljs.core.first.call(null,inst_42070);
var inst_42080 = cljs.core.async.muxch_STAR_.call(null,inst_42079);
var inst_42081 = cljs.core.async.close_BANG_.call(null,inst_42080);
var inst_42082 = cljs.core.next.call(null,inst_42070);
var inst_42056 = inst_42082;
var inst_42057 = null;
var inst_42058 = (0);
var inst_42059 = (0);
var state_42115__$1 = (function (){var statearr_42135 = state_42115;
(statearr_42135[(12)] = inst_42057);

(statearr_42135[(13)] = inst_42056);

(statearr_42135[(14)] = inst_42058);

(statearr_42135[(15)] = inst_42081);

(statearr_42135[(16)] = inst_42059);

return statearr_42135;
})();
var statearr_42136_42183 = state_42115__$1;
(statearr_42136_42183[(2)] = null);

(statearr_42136_42183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (3))){
var inst_42113 = (state_42115[(2)]);
var state_42115__$1 = state_42115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42115__$1,inst_42113);
} else {
if((state_val_42116 === (12))){
var inst_42090 = (state_42115[(2)]);
var state_42115__$1 = state_42115;
var statearr_42137_42184 = state_42115__$1;
(statearr_42137_42184[(2)] = inst_42090);

(statearr_42137_42184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (2))){
var state_42115__$1 = state_42115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42115__$1,(4),ch);
} else {
if((state_val_42116 === (23))){
var state_42115__$1 = state_42115;
var statearr_42138_42185 = state_42115__$1;
(statearr_42138_42185[(2)] = null);

(statearr_42138_42185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (19))){
var inst_42046 = (state_42115[(8)]);
var inst_42096 = (state_42115[(11)]);
var inst_42098 = cljs.core.async.muxch_STAR_.call(null,inst_42096);
var state_42115__$1 = state_42115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42115__$1,(22),inst_42098,inst_42046);
} else {
if((state_val_42116 === (11))){
var inst_42070 = (state_42115[(10)]);
var inst_42056 = (state_42115[(13)]);
var inst_42070__$1 = cljs.core.seq.call(null,inst_42056);
var state_42115__$1 = (function (){var statearr_42139 = state_42115;
(statearr_42139[(10)] = inst_42070__$1);

return statearr_42139;
})();
if(inst_42070__$1){
var statearr_42140_42186 = state_42115__$1;
(statearr_42140_42186[(1)] = (13));

} else {
var statearr_42141_42187 = state_42115__$1;
(statearr_42141_42187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (9))){
var inst_42092 = (state_42115[(2)]);
var state_42115__$1 = state_42115;
var statearr_42142_42188 = state_42115__$1;
(statearr_42142_42188[(2)] = inst_42092);

(statearr_42142_42188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (5))){
var inst_42053 = cljs.core.deref.call(null,mults);
var inst_42054 = cljs.core.vals.call(null,inst_42053);
var inst_42055 = cljs.core.seq.call(null,inst_42054);
var inst_42056 = inst_42055;
var inst_42057 = null;
var inst_42058 = (0);
var inst_42059 = (0);
var state_42115__$1 = (function (){var statearr_42143 = state_42115;
(statearr_42143[(12)] = inst_42057);

(statearr_42143[(13)] = inst_42056);

(statearr_42143[(14)] = inst_42058);

(statearr_42143[(16)] = inst_42059);

return statearr_42143;
})();
var statearr_42144_42189 = state_42115__$1;
(statearr_42144_42189[(2)] = null);

(statearr_42144_42189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (14))){
var state_42115__$1 = state_42115;
var statearr_42148_42190 = state_42115__$1;
(statearr_42148_42190[(2)] = null);

(statearr_42148_42190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (16))){
var inst_42070 = (state_42115[(10)]);
var inst_42074 = cljs.core.chunk_first.call(null,inst_42070);
var inst_42075 = cljs.core.chunk_rest.call(null,inst_42070);
var inst_42076 = cljs.core.count.call(null,inst_42074);
var inst_42056 = inst_42075;
var inst_42057 = inst_42074;
var inst_42058 = inst_42076;
var inst_42059 = (0);
var state_42115__$1 = (function (){var statearr_42149 = state_42115;
(statearr_42149[(12)] = inst_42057);

(statearr_42149[(13)] = inst_42056);

(statearr_42149[(14)] = inst_42058);

(statearr_42149[(16)] = inst_42059);

return statearr_42149;
})();
var statearr_42150_42191 = state_42115__$1;
(statearr_42150_42191[(2)] = null);

(statearr_42150_42191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (10))){
var inst_42057 = (state_42115[(12)]);
var inst_42056 = (state_42115[(13)]);
var inst_42058 = (state_42115[(14)]);
var inst_42059 = (state_42115[(16)]);
var inst_42064 = cljs.core._nth.call(null,inst_42057,inst_42059);
var inst_42065 = cljs.core.async.muxch_STAR_.call(null,inst_42064);
var inst_42066 = cljs.core.async.close_BANG_.call(null,inst_42065);
var inst_42067 = (inst_42059 + (1));
var tmp42145 = inst_42057;
var tmp42146 = inst_42056;
var tmp42147 = inst_42058;
var inst_42056__$1 = tmp42146;
var inst_42057__$1 = tmp42145;
var inst_42058__$1 = tmp42147;
var inst_42059__$1 = inst_42067;
var state_42115__$1 = (function (){var statearr_42151 = state_42115;
(statearr_42151[(12)] = inst_42057__$1);

(statearr_42151[(13)] = inst_42056__$1);

(statearr_42151[(14)] = inst_42058__$1);

(statearr_42151[(17)] = inst_42066);

(statearr_42151[(16)] = inst_42059__$1);

return statearr_42151;
})();
var statearr_42152_42192 = state_42115__$1;
(statearr_42152_42192[(2)] = null);

(statearr_42152_42192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (18))){
var inst_42085 = (state_42115[(2)]);
var state_42115__$1 = state_42115;
var statearr_42153_42193 = state_42115__$1;
(statearr_42153_42193[(2)] = inst_42085);

(statearr_42153_42193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (8))){
var inst_42058 = (state_42115[(14)]);
var inst_42059 = (state_42115[(16)]);
var inst_42061 = (inst_42059 < inst_42058);
var inst_42062 = inst_42061;
var state_42115__$1 = state_42115;
if(cljs.core.truth_(inst_42062)){
var statearr_42154_42194 = state_42115__$1;
(statearr_42154_42194[(1)] = (10));

} else {
var statearr_42155_42195 = state_42115__$1;
(statearr_42155_42195[(1)] = (11));

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
});})(c__21381__auto___42167,mults,ensure_mult,p))
;
return ((function (switch__21316__auto__,c__21381__auto___42167,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_42159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42159[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_42159[(1)] = (1));

return statearr_42159;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_42115){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_42115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e42160){if((e42160 instanceof Object)){
var ex__21320__auto__ = e42160;
var statearr_42161_42196 = state_42115;
(statearr_42161_42196[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42197 = state_42115;
state_42115 = G__42197;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_42115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_42115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___42167,mults,ensure_mult,p))
})();
var state__21383__auto__ = (function (){var statearr_42162 = f__21382__auto__.call(null);
(statearr_42162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___42167);

return statearr_42162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___42167,mults,ensure_mult,p))
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
var args42198 = [];
var len__17843__auto___42201 = arguments.length;
var i__17844__auto___42202 = (0);
while(true){
if((i__17844__auto___42202 < len__17843__auto___42201)){
args42198.push((arguments[i__17844__auto___42202]));

var G__42203 = (i__17844__auto___42202 + (1));
i__17844__auto___42202 = G__42203;
continue;
} else {
}
break;
}

var G__42200 = args42198.length;
switch (G__42200) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42198.length)].join('')));

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
var args42205 = [];
var len__17843__auto___42208 = arguments.length;
var i__17844__auto___42209 = (0);
while(true){
if((i__17844__auto___42209 < len__17843__auto___42208)){
args42205.push((arguments[i__17844__auto___42209]));

var G__42210 = (i__17844__auto___42209 + (1));
i__17844__auto___42209 = G__42210;
continue;
} else {
}
break;
}

var G__42207 = args42205.length;
switch (G__42207) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42205.length)].join('')));

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
var args42212 = [];
var len__17843__auto___42283 = arguments.length;
var i__17844__auto___42284 = (0);
while(true){
if((i__17844__auto___42284 < len__17843__auto___42283)){
args42212.push((arguments[i__17844__auto___42284]));

var G__42285 = (i__17844__auto___42284 + (1));
i__17844__auto___42284 = G__42285;
continue;
} else {
}
break;
}

var G__42214 = args42212.length;
switch (G__42214) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42212.length)].join('')));

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
var c__21381__auto___42287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___42287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___42287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42253){
var state_val_42254 = (state_42253[(1)]);
if((state_val_42254 === (7))){
var state_42253__$1 = state_42253;
var statearr_42255_42288 = state_42253__$1;
(statearr_42255_42288[(2)] = null);

(statearr_42255_42288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (1))){
var state_42253__$1 = state_42253;
var statearr_42256_42289 = state_42253__$1;
(statearr_42256_42289[(2)] = null);

(statearr_42256_42289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (4))){
var inst_42217 = (state_42253[(7)]);
var inst_42219 = (inst_42217 < cnt);
var state_42253__$1 = state_42253;
if(cljs.core.truth_(inst_42219)){
var statearr_42257_42290 = state_42253__$1;
(statearr_42257_42290[(1)] = (6));

} else {
var statearr_42258_42291 = state_42253__$1;
(statearr_42258_42291[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (15))){
var inst_42249 = (state_42253[(2)]);
var state_42253__$1 = state_42253;
var statearr_42259_42292 = state_42253__$1;
(statearr_42259_42292[(2)] = inst_42249);

(statearr_42259_42292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (13))){
var inst_42242 = cljs.core.async.close_BANG_.call(null,out);
var state_42253__$1 = state_42253;
var statearr_42260_42293 = state_42253__$1;
(statearr_42260_42293[(2)] = inst_42242);

(statearr_42260_42293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (6))){
var state_42253__$1 = state_42253;
var statearr_42261_42294 = state_42253__$1;
(statearr_42261_42294[(2)] = null);

(statearr_42261_42294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (3))){
var inst_42251 = (state_42253[(2)]);
var state_42253__$1 = state_42253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42253__$1,inst_42251);
} else {
if((state_val_42254 === (12))){
var inst_42239 = (state_42253[(8)]);
var inst_42239__$1 = (state_42253[(2)]);
var inst_42240 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42239__$1);
var state_42253__$1 = (function (){var statearr_42262 = state_42253;
(statearr_42262[(8)] = inst_42239__$1);

return statearr_42262;
})();
if(cljs.core.truth_(inst_42240)){
var statearr_42263_42295 = state_42253__$1;
(statearr_42263_42295[(1)] = (13));

} else {
var statearr_42264_42296 = state_42253__$1;
(statearr_42264_42296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (2))){
var inst_42216 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42217 = (0);
var state_42253__$1 = (function (){var statearr_42265 = state_42253;
(statearr_42265[(9)] = inst_42216);

(statearr_42265[(7)] = inst_42217);

return statearr_42265;
})();
var statearr_42266_42297 = state_42253__$1;
(statearr_42266_42297[(2)] = null);

(statearr_42266_42297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (11))){
var inst_42217 = (state_42253[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42253,(10),Object,null,(9));
var inst_42226 = chs__$1.call(null,inst_42217);
var inst_42227 = done.call(null,inst_42217);
var inst_42228 = cljs.core.async.take_BANG_.call(null,inst_42226,inst_42227);
var state_42253__$1 = state_42253;
var statearr_42267_42298 = state_42253__$1;
(statearr_42267_42298[(2)] = inst_42228);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42253__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (9))){
var inst_42217 = (state_42253[(7)]);
var inst_42230 = (state_42253[(2)]);
var inst_42231 = (inst_42217 + (1));
var inst_42217__$1 = inst_42231;
var state_42253__$1 = (function (){var statearr_42268 = state_42253;
(statearr_42268[(7)] = inst_42217__$1);

(statearr_42268[(10)] = inst_42230);

return statearr_42268;
})();
var statearr_42269_42299 = state_42253__$1;
(statearr_42269_42299[(2)] = null);

(statearr_42269_42299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (5))){
var inst_42237 = (state_42253[(2)]);
var state_42253__$1 = (function (){var statearr_42270 = state_42253;
(statearr_42270[(11)] = inst_42237);

return statearr_42270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42253__$1,(12),dchan);
} else {
if((state_val_42254 === (14))){
var inst_42239 = (state_42253[(8)]);
var inst_42244 = cljs.core.apply.call(null,f,inst_42239);
var state_42253__$1 = state_42253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42253__$1,(16),out,inst_42244);
} else {
if((state_val_42254 === (16))){
var inst_42246 = (state_42253[(2)]);
var state_42253__$1 = (function (){var statearr_42271 = state_42253;
(statearr_42271[(12)] = inst_42246);

return statearr_42271;
})();
var statearr_42272_42300 = state_42253__$1;
(statearr_42272_42300[(2)] = null);

(statearr_42272_42300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (10))){
var inst_42221 = (state_42253[(2)]);
var inst_42222 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42253__$1 = (function (){var statearr_42273 = state_42253;
(statearr_42273[(13)] = inst_42221);

return statearr_42273;
})();
var statearr_42274_42301 = state_42253__$1;
(statearr_42274_42301[(2)] = inst_42222);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42253__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42254 === (8))){
var inst_42235 = (state_42253[(2)]);
var state_42253__$1 = state_42253;
var statearr_42275_42302 = state_42253__$1;
(statearr_42275_42302[(2)] = inst_42235);

(statearr_42275_42302[(1)] = (5));


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
});})(c__21381__auto___42287,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21316__auto__,c__21381__auto___42287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_42279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42279[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_42279[(1)] = (1));

return statearr_42279;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_42253){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_42253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e42280){if((e42280 instanceof Object)){
var ex__21320__auto__ = e42280;
var statearr_42281_42303 = state_42253;
(statearr_42281_42303[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42304 = state_42253;
state_42253 = G__42304;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_42253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_42253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___42287,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21383__auto__ = (function (){var statearr_42282 = f__21382__auto__.call(null);
(statearr_42282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___42287);

return statearr_42282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___42287,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args42306 = [];
var len__17843__auto___42362 = arguments.length;
var i__17844__auto___42363 = (0);
while(true){
if((i__17844__auto___42363 < len__17843__auto___42362)){
args42306.push((arguments[i__17844__auto___42363]));

var G__42364 = (i__17844__auto___42363 + (1));
i__17844__auto___42363 = G__42364;
continue;
} else {
}
break;
}

var G__42308 = args42306.length;
switch (G__42308) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42306.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21381__auto___42366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___42366,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___42366,out){
return (function (state_42338){
var state_val_42339 = (state_42338[(1)]);
if((state_val_42339 === (7))){
var inst_42318 = (state_42338[(7)]);
var inst_42317 = (state_42338[(8)]);
var inst_42317__$1 = (state_42338[(2)]);
var inst_42318__$1 = cljs.core.nth.call(null,inst_42317__$1,(0),null);
var inst_42319 = cljs.core.nth.call(null,inst_42317__$1,(1),null);
var inst_42320 = (inst_42318__$1 == null);
var state_42338__$1 = (function (){var statearr_42340 = state_42338;
(statearr_42340[(7)] = inst_42318__$1);

(statearr_42340[(8)] = inst_42317__$1);

(statearr_42340[(9)] = inst_42319);

return statearr_42340;
})();
if(cljs.core.truth_(inst_42320)){
var statearr_42341_42367 = state_42338__$1;
(statearr_42341_42367[(1)] = (8));

} else {
var statearr_42342_42368 = state_42338__$1;
(statearr_42342_42368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (1))){
var inst_42309 = cljs.core.vec.call(null,chs);
var inst_42310 = inst_42309;
var state_42338__$1 = (function (){var statearr_42343 = state_42338;
(statearr_42343[(10)] = inst_42310);

return statearr_42343;
})();
var statearr_42344_42369 = state_42338__$1;
(statearr_42344_42369[(2)] = null);

(statearr_42344_42369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (4))){
var inst_42310 = (state_42338[(10)]);
var state_42338__$1 = state_42338;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42338__$1,(7),inst_42310);
} else {
if((state_val_42339 === (6))){
var inst_42334 = (state_42338[(2)]);
var state_42338__$1 = state_42338;
var statearr_42345_42370 = state_42338__$1;
(statearr_42345_42370[(2)] = inst_42334);

(statearr_42345_42370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (3))){
var inst_42336 = (state_42338[(2)]);
var state_42338__$1 = state_42338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42338__$1,inst_42336);
} else {
if((state_val_42339 === (2))){
var inst_42310 = (state_42338[(10)]);
var inst_42312 = cljs.core.count.call(null,inst_42310);
var inst_42313 = (inst_42312 > (0));
var state_42338__$1 = state_42338;
if(cljs.core.truth_(inst_42313)){
var statearr_42347_42371 = state_42338__$1;
(statearr_42347_42371[(1)] = (4));

} else {
var statearr_42348_42372 = state_42338__$1;
(statearr_42348_42372[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (11))){
var inst_42310 = (state_42338[(10)]);
var inst_42327 = (state_42338[(2)]);
var tmp42346 = inst_42310;
var inst_42310__$1 = tmp42346;
var state_42338__$1 = (function (){var statearr_42349 = state_42338;
(statearr_42349[(10)] = inst_42310__$1);

(statearr_42349[(11)] = inst_42327);

return statearr_42349;
})();
var statearr_42350_42373 = state_42338__$1;
(statearr_42350_42373[(2)] = null);

(statearr_42350_42373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (9))){
var inst_42318 = (state_42338[(7)]);
var state_42338__$1 = state_42338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42338__$1,(11),out,inst_42318);
} else {
if((state_val_42339 === (5))){
var inst_42332 = cljs.core.async.close_BANG_.call(null,out);
var state_42338__$1 = state_42338;
var statearr_42351_42374 = state_42338__$1;
(statearr_42351_42374[(2)] = inst_42332);

(statearr_42351_42374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (10))){
var inst_42330 = (state_42338[(2)]);
var state_42338__$1 = state_42338;
var statearr_42352_42375 = state_42338__$1;
(statearr_42352_42375[(2)] = inst_42330);

(statearr_42352_42375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42339 === (8))){
var inst_42318 = (state_42338[(7)]);
var inst_42317 = (state_42338[(8)]);
var inst_42319 = (state_42338[(9)]);
var inst_42310 = (state_42338[(10)]);
var inst_42322 = (function (){var cs = inst_42310;
var vec__42315 = inst_42317;
var v = inst_42318;
var c = inst_42319;
return ((function (cs,vec__42315,v,c,inst_42318,inst_42317,inst_42319,inst_42310,state_val_42339,c__21381__auto___42366,out){
return (function (p1__42305_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42305_SHARP_);
});
;})(cs,vec__42315,v,c,inst_42318,inst_42317,inst_42319,inst_42310,state_val_42339,c__21381__auto___42366,out))
})();
var inst_42323 = cljs.core.filterv.call(null,inst_42322,inst_42310);
var inst_42310__$1 = inst_42323;
var state_42338__$1 = (function (){var statearr_42353 = state_42338;
(statearr_42353[(10)] = inst_42310__$1);

return statearr_42353;
})();
var statearr_42354_42376 = state_42338__$1;
(statearr_42354_42376[(2)] = null);

(statearr_42354_42376[(1)] = (2));


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
});})(c__21381__auto___42366,out))
;
return ((function (switch__21316__auto__,c__21381__auto___42366,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_42358 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42358[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_42358[(1)] = (1));

return statearr_42358;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_42338){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_42338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e42359){if((e42359 instanceof Object)){
var ex__21320__auto__ = e42359;
var statearr_42360_42377 = state_42338;
(statearr_42360_42377[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42378 = state_42338;
state_42338 = G__42378;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_42338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_42338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___42366,out))
})();
var state__21383__auto__ = (function (){var statearr_42361 = f__21382__auto__.call(null);
(statearr_42361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___42366);

return statearr_42361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___42366,out))
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
var args42379 = [];
var len__17843__auto___42428 = arguments.length;
var i__17844__auto___42429 = (0);
while(true){
if((i__17844__auto___42429 < len__17843__auto___42428)){
args42379.push((arguments[i__17844__auto___42429]));

var G__42430 = (i__17844__auto___42429 + (1));
i__17844__auto___42429 = G__42430;
continue;
} else {
}
break;
}

var G__42381 = args42379.length;
switch (G__42381) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42379.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21381__auto___42432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___42432,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___42432,out){
return (function (state_42405){
var state_val_42406 = (state_42405[(1)]);
if((state_val_42406 === (7))){
var inst_42387 = (state_42405[(7)]);
var inst_42387__$1 = (state_42405[(2)]);
var inst_42388 = (inst_42387__$1 == null);
var inst_42389 = cljs.core.not.call(null,inst_42388);
var state_42405__$1 = (function (){var statearr_42407 = state_42405;
(statearr_42407[(7)] = inst_42387__$1);

return statearr_42407;
})();
if(inst_42389){
var statearr_42408_42433 = state_42405__$1;
(statearr_42408_42433[(1)] = (8));

} else {
var statearr_42409_42434 = state_42405__$1;
(statearr_42409_42434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42406 === (1))){
var inst_42382 = (0);
var state_42405__$1 = (function (){var statearr_42410 = state_42405;
(statearr_42410[(8)] = inst_42382);

return statearr_42410;
})();
var statearr_42411_42435 = state_42405__$1;
(statearr_42411_42435[(2)] = null);

(statearr_42411_42435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42406 === (4))){
var state_42405__$1 = state_42405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42405__$1,(7),ch);
} else {
if((state_val_42406 === (6))){
var inst_42400 = (state_42405[(2)]);
var state_42405__$1 = state_42405;
var statearr_42412_42436 = state_42405__$1;
(statearr_42412_42436[(2)] = inst_42400);

(statearr_42412_42436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42406 === (3))){
var inst_42402 = (state_42405[(2)]);
var inst_42403 = cljs.core.async.close_BANG_.call(null,out);
var state_42405__$1 = (function (){var statearr_42413 = state_42405;
(statearr_42413[(9)] = inst_42402);

return statearr_42413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42405__$1,inst_42403);
} else {
if((state_val_42406 === (2))){
var inst_42382 = (state_42405[(8)]);
var inst_42384 = (inst_42382 < n);
var state_42405__$1 = state_42405;
if(cljs.core.truth_(inst_42384)){
var statearr_42414_42437 = state_42405__$1;
(statearr_42414_42437[(1)] = (4));

} else {
var statearr_42415_42438 = state_42405__$1;
(statearr_42415_42438[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42406 === (11))){
var inst_42382 = (state_42405[(8)]);
var inst_42392 = (state_42405[(2)]);
var inst_42393 = (inst_42382 + (1));
var inst_42382__$1 = inst_42393;
var state_42405__$1 = (function (){var statearr_42416 = state_42405;
(statearr_42416[(8)] = inst_42382__$1);

(statearr_42416[(10)] = inst_42392);

return statearr_42416;
})();
var statearr_42417_42439 = state_42405__$1;
(statearr_42417_42439[(2)] = null);

(statearr_42417_42439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42406 === (9))){
var state_42405__$1 = state_42405;
var statearr_42418_42440 = state_42405__$1;
(statearr_42418_42440[(2)] = null);

(statearr_42418_42440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42406 === (5))){
var state_42405__$1 = state_42405;
var statearr_42419_42441 = state_42405__$1;
(statearr_42419_42441[(2)] = null);

(statearr_42419_42441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42406 === (10))){
var inst_42397 = (state_42405[(2)]);
var state_42405__$1 = state_42405;
var statearr_42420_42442 = state_42405__$1;
(statearr_42420_42442[(2)] = inst_42397);

(statearr_42420_42442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42406 === (8))){
var inst_42387 = (state_42405[(7)]);
var state_42405__$1 = state_42405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42405__$1,(11),out,inst_42387);
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
});})(c__21381__auto___42432,out))
;
return ((function (switch__21316__auto__,c__21381__auto___42432,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_42424 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42424[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_42424[(1)] = (1));

return statearr_42424;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_42405){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_42405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e42425){if((e42425 instanceof Object)){
var ex__21320__auto__ = e42425;
var statearr_42426_42443 = state_42405;
(statearr_42426_42443[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42444 = state_42405;
state_42405 = G__42444;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_42405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_42405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___42432,out))
})();
var state__21383__auto__ = (function (){var statearr_42427 = f__21382__auto__.call(null);
(statearr_42427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___42432);

return statearr_42427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___42432,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42452 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42452 = (function (map_LT_,f,ch,meta42453){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42453 = meta42453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42454,meta42453__$1){
var self__ = this;
var _42454__$1 = this;
return (new cljs.core.async.t_cljs$core$async42452(self__.map_LT_,self__.f,self__.ch,meta42453__$1));
});

cljs.core.async.t_cljs$core$async42452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42454){
var self__ = this;
var _42454__$1 = this;
return self__.meta42453;
});

cljs.core.async.t_cljs$core$async42452.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42452.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42452.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42452.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42452.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42455 = (function (map_LT_,f,ch,meta42453,_,fn1,meta42456){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta42453 = meta42453;
this._ = _;
this.fn1 = fn1;
this.meta42456 = meta42456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42457,meta42456__$1){
var self__ = this;
var _42457__$1 = this;
return (new cljs.core.async.t_cljs$core$async42455(self__.map_LT_,self__.f,self__.ch,self__.meta42453,self__._,self__.fn1,meta42456__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42457){
var self__ = this;
var _42457__$1 = this;
return self__.meta42456;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42455.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42445_SHARP_){
return f1.call(null,(((p1__42445_SHARP_ == null))?null:self__.f.call(null,p1__42445_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42455.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42453","meta42453",737654466,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42452","cljs.core.async/t_cljs$core$async42452",1750757460,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42456","meta42456",-744860890,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42455";

cljs.core.async.t_cljs$core$async42455.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async42455");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42455 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42455(map_LT___$1,f__$1,ch__$1,meta42453__$1,___$2,fn1__$1,meta42456){
return (new cljs.core.async.t_cljs$core$async42455(map_LT___$1,f__$1,ch__$1,meta42453__$1,___$2,fn1__$1,meta42456));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42455(self__.map_LT_,self__.f,self__.ch,self__.meta42453,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16773__auto__ = ret;
if(cljs.core.truth_(and__16773__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16773__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42452.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42452.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42453","meta42453",737654466,null)], null);
});

cljs.core.async.t_cljs$core$async42452.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42452";

cljs.core.async.t_cljs$core$async42452.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async42452");
});

cljs.core.async.__GT_t_cljs$core$async42452 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42452(map_LT___$1,f__$1,ch__$1,meta42453){
return (new cljs.core.async.t_cljs$core$async42452(map_LT___$1,f__$1,ch__$1,meta42453));
});

}

return (new cljs.core.async.t_cljs$core$async42452(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42461 = (function (map_GT_,f,ch,meta42462){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta42462 = meta42462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42463,meta42462__$1){
var self__ = this;
var _42463__$1 = this;
return (new cljs.core.async.t_cljs$core$async42461(self__.map_GT_,self__.f,self__.ch,meta42462__$1));
});

cljs.core.async.t_cljs$core$async42461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42463){
var self__ = this;
var _42463__$1 = this;
return self__.meta42462;
});

cljs.core.async.t_cljs$core$async42461.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42461.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42461.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42462","meta42462",46902554,null)], null);
});

cljs.core.async.t_cljs$core$async42461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42461";

cljs.core.async.t_cljs$core$async42461.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async42461");
});

cljs.core.async.__GT_t_cljs$core$async42461 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42461(map_GT___$1,f__$1,ch__$1,meta42462){
return (new cljs.core.async.t_cljs$core$async42461(map_GT___$1,f__$1,ch__$1,meta42462));
});

}

return (new cljs.core.async.t_cljs$core$async42461(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42467 = (function (filter_GT_,p,ch,meta42468){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta42468 = meta42468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42469,meta42468__$1){
var self__ = this;
var _42469__$1 = this;
return (new cljs.core.async.t_cljs$core$async42467(self__.filter_GT_,self__.p,self__.ch,meta42468__$1));
});

cljs.core.async.t_cljs$core$async42467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42469){
var self__ = this;
var _42469__$1 = this;
return self__.meta42468;
});

cljs.core.async.t_cljs$core$async42467.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async42467.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42467.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42467.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async42467.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42467.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async42467.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42468","meta42468",-438007804,null)], null);
});

cljs.core.async.t_cljs$core$async42467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42467";

cljs.core.async.t_cljs$core$async42467.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async42467");
});

cljs.core.async.__GT_t_cljs$core$async42467 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42467(filter_GT___$1,p__$1,ch__$1,meta42468){
return (new cljs.core.async.t_cljs$core$async42467(filter_GT___$1,p__$1,ch__$1,meta42468));
});

}

return (new cljs.core.async.t_cljs$core$async42467(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args42470 = [];
var len__17843__auto___42514 = arguments.length;
var i__17844__auto___42515 = (0);
while(true){
if((i__17844__auto___42515 < len__17843__auto___42514)){
args42470.push((arguments[i__17844__auto___42515]));

var G__42516 = (i__17844__auto___42515 + (1));
i__17844__auto___42515 = G__42516;
continue;
} else {
}
break;
}

var G__42472 = args42470.length;
switch (G__42472) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42470.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21381__auto___42518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___42518,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___42518,out){
return (function (state_42493){
var state_val_42494 = (state_42493[(1)]);
if((state_val_42494 === (7))){
var inst_42489 = (state_42493[(2)]);
var state_42493__$1 = state_42493;
var statearr_42495_42519 = state_42493__$1;
(statearr_42495_42519[(2)] = inst_42489);

(statearr_42495_42519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42494 === (1))){
var state_42493__$1 = state_42493;
var statearr_42496_42520 = state_42493__$1;
(statearr_42496_42520[(2)] = null);

(statearr_42496_42520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42494 === (4))){
var inst_42475 = (state_42493[(7)]);
var inst_42475__$1 = (state_42493[(2)]);
var inst_42476 = (inst_42475__$1 == null);
var state_42493__$1 = (function (){var statearr_42497 = state_42493;
(statearr_42497[(7)] = inst_42475__$1);

return statearr_42497;
})();
if(cljs.core.truth_(inst_42476)){
var statearr_42498_42521 = state_42493__$1;
(statearr_42498_42521[(1)] = (5));

} else {
var statearr_42499_42522 = state_42493__$1;
(statearr_42499_42522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42494 === (6))){
var inst_42475 = (state_42493[(7)]);
var inst_42480 = p.call(null,inst_42475);
var state_42493__$1 = state_42493;
if(cljs.core.truth_(inst_42480)){
var statearr_42500_42523 = state_42493__$1;
(statearr_42500_42523[(1)] = (8));

} else {
var statearr_42501_42524 = state_42493__$1;
(statearr_42501_42524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42494 === (3))){
var inst_42491 = (state_42493[(2)]);
var state_42493__$1 = state_42493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42493__$1,inst_42491);
} else {
if((state_val_42494 === (2))){
var state_42493__$1 = state_42493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42493__$1,(4),ch);
} else {
if((state_val_42494 === (11))){
var inst_42483 = (state_42493[(2)]);
var state_42493__$1 = state_42493;
var statearr_42502_42525 = state_42493__$1;
(statearr_42502_42525[(2)] = inst_42483);

(statearr_42502_42525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42494 === (9))){
var state_42493__$1 = state_42493;
var statearr_42503_42526 = state_42493__$1;
(statearr_42503_42526[(2)] = null);

(statearr_42503_42526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42494 === (5))){
var inst_42478 = cljs.core.async.close_BANG_.call(null,out);
var state_42493__$1 = state_42493;
var statearr_42504_42527 = state_42493__$1;
(statearr_42504_42527[(2)] = inst_42478);

(statearr_42504_42527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42494 === (10))){
var inst_42486 = (state_42493[(2)]);
var state_42493__$1 = (function (){var statearr_42505 = state_42493;
(statearr_42505[(8)] = inst_42486);

return statearr_42505;
})();
var statearr_42506_42528 = state_42493__$1;
(statearr_42506_42528[(2)] = null);

(statearr_42506_42528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42494 === (8))){
var inst_42475 = (state_42493[(7)]);
var state_42493__$1 = state_42493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42493__$1,(11),out,inst_42475);
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
});})(c__21381__auto___42518,out))
;
return ((function (switch__21316__auto__,c__21381__auto___42518,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_42510 = [null,null,null,null,null,null,null,null,null];
(statearr_42510[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_42510[(1)] = (1));

return statearr_42510;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_42493){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_42493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e42511){if((e42511 instanceof Object)){
var ex__21320__auto__ = e42511;
var statearr_42512_42529 = state_42493;
(statearr_42512_42529[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42530 = state_42493;
state_42493 = G__42530;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_42493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_42493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___42518,out))
})();
var state__21383__auto__ = (function (){var statearr_42513 = f__21382__auto__.call(null);
(statearr_42513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___42518);

return statearr_42513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___42518,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args42531 = [];
var len__17843__auto___42534 = arguments.length;
var i__17844__auto___42535 = (0);
while(true){
if((i__17844__auto___42535 < len__17843__auto___42534)){
args42531.push((arguments[i__17844__auto___42535]));

var G__42536 = (i__17844__auto___42535 + (1));
i__17844__auto___42535 = G__42536;
continue;
} else {
}
break;
}

var G__42533 = args42531.length;
switch (G__42533) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42531.length)].join('')));

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
var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__){
return (function (state_42703){
var state_val_42704 = (state_42703[(1)]);
if((state_val_42704 === (7))){
var inst_42699 = (state_42703[(2)]);
var state_42703__$1 = state_42703;
var statearr_42705_42746 = state_42703__$1;
(statearr_42705_42746[(2)] = inst_42699);

(statearr_42705_42746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (20))){
var inst_42669 = (state_42703[(7)]);
var inst_42680 = (state_42703[(2)]);
var inst_42681 = cljs.core.next.call(null,inst_42669);
var inst_42655 = inst_42681;
var inst_42656 = null;
var inst_42657 = (0);
var inst_42658 = (0);
var state_42703__$1 = (function (){var statearr_42706 = state_42703;
(statearr_42706[(8)] = inst_42680);

(statearr_42706[(9)] = inst_42656);

(statearr_42706[(10)] = inst_42658);

(statearr_42706[(11)] = inst_42655);

(statearr_42706[(12)] = inst_42657);

return statearr_42706;
})();
var statearr_42707_42747 = state_42703__$1;
(statearr_42707_42747[(2)] = null);

(statearr_42707_42747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (1))){
var state_42703__$1 = state_42703;
var statearr_42708_42748 = state_42703__$1;
(statearr_42708_42748[(2)] = null);

(statearr_42708_42748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (4))){
var inst_42644 = (state_42703[(13)]);
var inst_42644__$1 = (state_42703[(2)]);
var inst_42645 = (inst_42644__$1 == null);
var state_42703__$1 = (function (){var statearr_42709 = state_42703;
(statearr_42709[(13)] = inst_42644__$1);

return statearr_42709;
})();
if(cljs.core.truth_(inst_42645)){
var statearr_42710_42749 = state_42703__$1;
(statearr_42710_42749[(1)] = (5));

} else {
var statearr_42711_42750 = state_42703__$1;
(statearr_42711_42750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (15))){
var state_42703__$1 = state_42703;
var statearr_42715_42751 = state_42703__$1;
(statearr_42715_42751[(2)] = null);

(statearr_42715_42751[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (21))){
var state_42703__$1 = state_42703;
var statearr_42716_42752 = state_42703__$1;
(statearr_42716_42752[(2)] = null);

(statearr_42716_42752[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (13))){
var inst_42656 = (state_42703[(9)]);
var inst_42658 = (state_42703[(10)]);
var inst_42655 = (state_42703[(11)]);
var inst_42657 = (state_42703[(12)]);
var inst_42665 = (state_42703[(2)]);
var inst_42666 = (inst_42658 + (1));
var tmp42712 = inst_42656;
var tmp42713 = inst_42655;
var tmp42714 = inst_42657;
var inst_42655__$1 = tmp42713;
var inst_42656__$1 = tmp42712;
var inst_42657__$1 = tmp42714;
var inst_42658__$1 = inst_42666;
var state_42703__$1 = (function (){var statearr_42717 = state_42703;
(statearr_42717[(9)] = inst_42656__$1);

(statearr_42717[(10)] = inst_42658__$1);

(statearr_42717[(11)] = inst_42655__$1);

(statearr_42717[(12)] = inst_42657__$1);

(statearr_42717[(14)] = inst_42665);

return statearr_42717;
})();
var statearr_42718_42753 = state_42703__$1;
(statearr_42718_42753[(2)] = null);

(statearr_42718_42753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (22))){
var state_42703__$1 = state_42703;
var statearr_42719_42754 = state_42703__$1;
(statearr_42719_42754[(2)] = null);

(statearr_42719_42754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (6))){
var inst_42644 = (state_42703[(13)]);
var inst_42653 = f.call(null,inst_42644);
var inst_42654 = cljs.core.seq.call(null,inst_42653);
var inst_42655 = inst_42654;
var inst_42656 = null;
var inst_42657 = (0);
var inst_42658 = (0);
var state_42703__$1 = (function (){var statearr_42720 = state_42703;
(statearr_42720[(9)] = inst_42656);

(statearr_42720[(10)] = inst_42658);

(statearr_42720[(11)] = inst_42655);

(statearr_42720[(12)] = inst_42657);

return statearr_42720;
})();
var statearr_42721_42755 = state_42703__$1;
(statearr_42721_42755[(2)] = null);

(statearr_42721_42755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (17))){
var inst_42669 = (state_42703[(7)]);
var inst_42673 = cljs.core.chunk_first.call(null,inst_42669);
var inst_42674 = cljs.core.chunk_rest.call(null,inst_42669);
var inst_42675 = cljs.core.count.call(null,inst_42673);
var inst_42655 = inst_42674;
var inst_42656 = inst_42673;
var inst_42657 = inst_42675;
var inst_42658 = (0);
var state_42703__$1 = (function (){var statearr_42722 = state_42703;
(statearr_42722[(9)] = inst_42656);

(statearr_42722[(10)] = inst_42658);

(statearr_42722[(11)] = inst_42655);

(statearr_42722[(12)] = inst_42657);

return statearr_42722;
})();
var statearr_42723_42756 = state_42703__$1;
(statearr_42723_42756[(2)] = null);

(statearr_42723_42756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (3))){
var inst_42701 = (state_42703[(2)]);
var state_42703__$1 = state_42703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42703__$1,inst_42701);
} else {
if((state_val_42704 === (12))){
var inst_42689 = (state_42703[(2)]);
var state_42703__$1 = state_42703;
var statearr_42724_42757 = state_42703__$1;
(statearr_42724_42757[(2)] = inst_42689);

(statearr_42724_42757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (2))){
var state_42703__$1 = state_42703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42703__$1,(4),in$);
} else {
if((state_val_42704 === (23))){
var inst_42697 = (state_42703[(2)]);
var state_42703__$1 = state_42703;
var statearr_42725_42758 = state_42703__$1;
(statearr_42725_42758[(2)] = inst_42697);

(statearr_42725_42758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (19))){
var inst_42684 = (state_42703[(2)]);
var state_42703__$1 = state_42703;
var statearr_42726_42759 = state_42703__$1;
(statearr_42726_42759[(2)] = inst_42684);

(statearr_42726_42759[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (11))){
var inst_42669 = (state_42703[(7)]);
var inst_42655 = (state_42703[(11)]);
var inst_42669__$1 = cljs.core.seq.call(null,inst_42655);
var state_42703__$1 = (function (){var statearr_42727 = state_42703;
(statearr_42727[(7)] = inst_42669__$1);

return statearr_42727;
})();
if(inst_42669__$1){
var statearr_42728_42760 = state_42703__$1;
(statearr_42728_42760[(1)] = (14));

} else {
var statearr_42729_42761 = state_42703__$1;
(statearr_42729_42761[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (9))){
var inst_42691 = (state_42703[(2)]);
var inst_42692 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42703__$1 = (function (){var statearr_42730 = state_42703;
(statearr_42730[(15)] = inst_42691);

return statearr_42730;
})();
if(cljs.core.truth_(inst_42692)){
var statearr_42731_42762 = state_42703__$1;
(statearr_42731_42762[(1)] = (21));

} else {
var statearr_42732_42763 = state_42703__$1;
(statearr_42732_42763[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (5))){
var inst_42647 = cljs.core.async.close_BANG_.call(null,out);
var state_42703__$1 = state_42703;
var statearr_42733_42764 = state_42703__$1;
(statearr_42733_42764[(2)] = inst_42647);

(statearr_42733_42764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (14))){
var inst_42669 = (state_42703[(7)]);
var inst_42671 = cljs.core.chunked_seq_QMARK_.call(null,inst_42669);
var state_42703__$1 = state_42703;
if(inst_42671){
var statearr_42734_42765 = state_42703__$1;
(statearr_42734_42765[(1)] = (17));

} else {
var statearr_42735_42766 = state_42703__$1;
(statearr_42735_42766[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (16))){
var inst_42687 = (state_42703[(2)]);
var state_42703__$1 = state_42703;
var statearr_42736_42767 = state_42703__$1;
(statearr_42736_42767[(2)] = inst_42687);

(statearr_42736_42767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42704 === (10))){
var inst_42656 = (state_42703[(9)]);
var inst_42658 = (state_42703[(10)]);
var inst_42663 = cljs.core._nth.call(null,inst_42656,inst_42658);
var state_42703__$1 = state_42703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42703__$1,(13),out,inst_42663);
} else {
if((state_val_42704 === (18))){
var inst_42669 = (state_42703[(7)]);
var inst_42678 = cljs.core.first.call(null,inst_42669);
var state_42703__$1 = state_42703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42703__$1,(20),out,inst_42678);
} else {
if((state_val_42704 === (8))){
var inst_42658 = (state_42703[(10)]);
var inst_42657 = (state_42703[(12)]);
var inst_42660 = (inst_42658 < inst_42657);
var inst_42661 = inst_42660;
var state_42703__$1 = state_42703;
if(cljs.core.truth_(inst_42661)){
var statearr_42737_42768 = state_42703__$1;
(statearr_42737_42768[(1)] = (10));

} else {
var statearr_42738_42769 = state_42703__$1;
(statearr_42738_42769[(1)] = (11));

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
});})(c__21381__auto__))
;
return ((function (switch__21316__auto__,c__21381__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_42742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42742[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__);

(statearr_42742[(1)] = (1));

return statearr_42742;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____1 = (function (state_42703){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_42703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e42743){if((e42743 instanceof Object)){
var ex__21320__auto__ = e42743;
var statearr_42744_42770 = state_42703;
(statearr_42744_42770[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42771 = state_42703;
state_42703 = G__42771;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__ = function(state_42703){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____1.call(this,state_42703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_42745 = f__21382__auto__.call(null);
(statearr_42745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_42745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto__))
);

return c__21381__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args42772 = [];
var len__17843__auto___42775 = arguments.length;
var i__17844__auto___42776 = (0);
while(true){
if((i__17844__auto___42776 < len__17843__auto___42775)){
args42772.push((arguments[i__17844__auto___42776]));

var G__42777 = (i__17844__auto___42776 + (1));
i__17844__auto___42776 = G__42777;
continue;
} else {
}
break;
}

var G__42774 = args42772.length;
switch (G__42774) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42772.length)].join('')));

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
var args42779 = [];
var len__17843__auto___42782 = arguments.length;
var i__17844__auto___42783 = (0);
while(true){
if((i__17844__auto___42783 < len__17843__auto___42782)){
args42779.push((arguments[i__17844__auto___42783]));

var G__42784 = (i__17844__auto___42783 + (1));
i__17844__auto___42783 = G__42784;
continue;
} else {
}
break;
}

var G__42781 = args42779.length;
switch (G__42781) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42779.length)].join('')));

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
var args42786 = [];
var len__17843__auto___42837 = arguments.length;
var i__17844__auto___42838 = (0);
while(true){
if((i__17844__auto___42838 < len__17843__auto___42837)){
args42786.push((arguments[i__17844__auto___42838]));

var G__42839 = (i__17844__auto___42838 + (1));
i__17844__auto___42838 = G__42839;
continue;
} else {
}
break;
}

var G__42788 = args42786.length;
switch (G__42788) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42786.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21381__auto___42841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___42841,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___42841,out){
return (function (state_42812){
var state_val_42813 = (state_42812[(1)]);
if((state_val_42813 === (7))){
var inst_42807 = (state_42812[(2)]);
var state_42812__$1 = state_42812;
var statearr_42814_42842 = state_42812__$1;
(statearr_42814_42842[(2)] = inst_42807);

(statearr_42814_42842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42813 === (1))){
var inst_42789 = null;
var state_42812__$1 = (function (){var statearr_42815 = state_42812;
(statearr_42815[(7)] = inst_42789);

return statearr_42815;
})();
var statearr_42816_42843 = state_42812__$1;
(statearr_42816_42843[(2)] = null);

(statearr_42816_42843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42813 === (4))){
var inst_42792 = (state_42812[(8)]);
var inst_42792__$1 = (state_42812[(2)]);
var inst_42793 = (inst_42792__$1 == null);
var inst_42794 = cljs.core.not.call(null,inst_42793);
var state_42812__$1 = (function (){var statearr_42817 = state_42812;
(statearr_42817[(8)] = inst_42792__$1);

return statearr_42817;
})();
if(inst_42794){
var statearr_42818_42844 = state_42812__$1;
(statearr_42818_42844[(1)] = (5));

} else {
var statearr_42819_42845 = state_42812__$1;
(statearr_42819_42845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42813 === (6))){
var state_42812__$1 = state_42812;
var statearr_42820_42846 = state_42812__$1;
(statearr_42820_42846[(2)] = null);

(statearr_42820_42846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42813 === (3))){
var inst_42809 = (state_42812[(2)]);
var inst_42810 = cljs.core.async.close_BANG_.call(null,out);
var state_42812__$1 = (function (){var statearr_42821 = state_42812;
(statearr_42821[(9)] = inst_42809);

return statearr_42821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42812__$1,inst_42810);
} else {
if((state_val_42813 === (2))){
var state_42812__$1 = state_42812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42812__$1,(4),ch);
} else {
if((state_val_42813 === (11))){
var inst_42792 = (state_42812[(8)]);
var inst_42801 = (state_42812[(2)]);
var inst_42789 = inst_42792;
var state_42812__$1 = (function (){var statearr_42822 = state_42812;
(statearr_42822[(10)] = inst_42801);

(statearr_42822[(7)] = inst_42789);

return statearr_42822;
})();
var statearr_42823_42847 = state_42812__$1;
(statearr_42823_42847[(2)] = null);

(statearr_42823_42847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42813 === (9))){
var inst_42792 = (state_42812[(8)]);
var state_42812__$1 = state_42812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42812__$1,(11),out,inst_42792);
} else {
if((state_val_42813 === (5))){
var inst_42789 = (state_42812[(7)]);
var inst_42792 = (state_42812[(8)]);
var inst_42796 = cljs.core._EQ_.call(null,inst_42792,inst_42789);
var state_42812__$1 = state_42812;
if(inst_42796){
var statearr_42825_42848 = state_42812__$1;
(statearr_42825_42848[(1)] = (8));

} else {
var statearr_42826_42849 = state_42812__$1;
(statearr_42826_42849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42813 === (10))){
var inst_42804 = (state_42812[(2)]);
var state_42812__$1 = state_42812;
var statearr_42827_42850 = state_42812__$1;
(statearr_42827_42850[(2)] = inst_42804);

(statearr_42827_42850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42813 === (8))){
var inst_42789 = (state_42812[(7)]);
var tmp42824 = inst_42789;
var inst_42789__$1 = tmp42824;
var state_42812__$1 = (function (){var statearr_42828 = state_42812;
(statearr_42828[(7)] = inst_42789__$1);

return statearr_42828;
})();
var statearr_42829_42851 = state_42812__$1;
(statearr_42829_42851[(2)] = null);

(statearr_42829_42851[(1)] = (2));


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
});})(c__21381__auto___42841,out))
;
return ((function (switch__21316__auto__,c__21381__auto___42841,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_42833 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42833[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_42833[(1)] = (1));

return statearr_42833;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_42812){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_42812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e42834){if((e42834 instanceof Object)){
var ex__21320__auto__ = e42834;
var statearr_42835_42852 = state_42812;
(statearr_42835_42852[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42853 = state_42812;
state_42812 = G__42853;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_42812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_42812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___42841,out))
})();
var state__21383__auto__ = (function (){var statearr_42836 = f__21382__auto__.call(null);
(statearr_42836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___42841);

return statearr_42836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___42841,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args42854 = [];
var len__17843__auto___42924 = arguments.length;
var i__17844__auto___42925 = (0);
while(true){
if((i__17844__auto___42925 < len__17843__auto___42924)){
args42854.push((arguments[i__17844__auto___42925]));

var G__42926 = (i__17844__auto___42925 + (1));
i__17844__auto___42925 = G__42926;
continue;
} else {
}
break;
}

var G__42856 = args42854.length;
switch (G__42856) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42854.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21381__auto___42928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___42928,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___42928,out){
return (function (state_42894){
var state_val_42895 = (state_42894[(1)]);
if((state_val_42895 === (7))){
var inst_42890 = (state_42894[(2)]);
var state_42894__$1 = state_42894;
var statearr_42896_42929 = state_42894__$1;
(statearr_42896_42929[(2)] = inst_42890);

(statearr_42896_42929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42895 === (1))){
var inst_42857 = (new Array(n));
var inst_42858 = inst_42857;
var inst_42859 = (0);
var state_42894__$1 = (function (){var statearr_42897 = state_42894;
(statearr_42897[(7)] = inst_42858);

(statearr_42897[(8)] = inst_42859);

return statearr_42897;
})();
var statearr_42898_42930 = state_42894__$1;
(statearr_42898_42930[(2)] = null);

(statearr_42898_42930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42895 === (4))){
var inst_42862 = (state_42894[(9)]);
var inst_42862__$1 = (state_42894[(2)]);
var inst_42863 = (inst_42862__$1 == null);
var inst_42864 = cljs.core.not.call(null,inst_42863);
var state_42894__$1 = (function (){var statearr_42899 = state_42894;
(statearr_42899[(9)] = inst_42862__$1);

return statearr_42899;
})();
if(inst_42864){
var statearr_42900_42931 = state_42894__$1;
(statearr_42900_42931[(1)] = (5));

} else {
var statearr_42901_42932 = state_42894__$1;
(statearr_42901_42932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42895 === (15))){
var inst_42884 = (state_42894[(2)]);
var state_42894__$1 = state_42894;
var statearr_42902_42933 = state_42894__$1;
(statearr_42902_42933[(2)] = inst_42884);

(statearr_42902_42933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42895 === (13))){
var state_42894__$1 = state_42894;
var statearr_42903_42934 = state_42894__$1;
(statearr_42903_42934[(2)] = null);

(statearr_42903_42934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42895 === (6))){
var inst_42859 = (state_42894[(8)]);
var inst_42880 = (inst_42859 > (0));
var state_42894__$1 = state_42894;
if(cljs.core.truth_(inst_42880)){
var statearr_42904_42935 = state_42894__$1;
(statearr_42904_42935[(1)] = (12));

} else {
var statearr_42905_42936 = state_42894__$1;
(statearr_42905_42936[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42895 === (3))){
var inst_42892 = (state_42894[(2)]);
var state_42894__$1 = state_42894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42894__$1,inst_42892);
} else {
if((state_val_42895 === (12))){
var inst_42858 = (state_42894[(7)]);
var inst_42882 = cljs.core.vec.call(null,inst_42858);
var state_42894__$1 = state_42894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42894__$1,(15),out,inst_42882);
} else {
if((state_val_42895 === (2))){
var state_42894__$1 = state_42894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42894__$1,(4),ch);
} else {
if((state_val_42895 === (11))){
var inst_42874 = (state_42894[(2)]);
var inst_42875 = (new Array(n));
var inst_42858 = inst_42875;
var inst_42859 = (0);
var state_42894__$1 = (function (){var statearr_42906 = state_42894;
(statearr_42906[(7)] = inst_42858);

(statearr_42906[(8)] = inst_42859);

(statearr_42906[(10)] = inst_42874);

return statearr_42906;
})();
var statearr_42907_42937 = state_42894__$1;
(statearr_42907_42937[(2)] = null);

(statearr_42907_42937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42895 === (9))){
var inst_42858 = (state_42894[(7)]);
var inst_42872 = cljs.core.vec.call(null,inst_42858);
var state_42894__$1 = state_42894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42894__$1,(11),out,inst_42872);
} else {
if((state_val_42895 === (5))){
var inst_42858 = (state_42894[(7)]);
var inst_42859 = (state_42894[(8)]);
var inst_42862 = (state_42894[(9)]);
var inst_42867 = (state_42894[(11)]);
var inst_42866 = (inst_42858[inst_42859] = inst_42862);
var inst_42867__$1 = (inst_42859 + (1));
var inst_42868 = (inst_42867__$1 < n);
var state_42894__$1 = (function (){var statearr_42908 = state_42894;
(statearr_42908[(12)] = inst_42866);

(statearr_42908[(11)] = inst_42867__$1);

return statearr_42908;
})();
if(cljs.core.truth_(inst_42868)){
var statearr_42909_42938 = state_42894__$1;
(statearr_42909_42938[(1)] = (8));

} else {
var statearr_42910_42939 = state_42894__$1;
(statearr_42910_42939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42895 === (14))){
var inst_42887 = (state_42894[(2)]);
var inst_42888 = cljs.core.async.close_BANG_.call(null,out);
var state_42894__$1 = (function (){var statearr_42912 = state_42894;
(statearr_42912[(13)] = inst_42887);

return statearr_42912;
})();
var statearr_42913_42940 = state_42894__$1;
(statearr_42913_42940[(2)] = inst_42888);

(statearr_42913_42940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42895 === (10))){
var inst_42878 = (state_42894[(2)]);
var state_42894__$1 = state_42894;
var statearr_42914_42941 = state_42894__$1;
(statearr_42914_42941[(2)] = inst_42878);

(statearr_42914_42941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42895 === (8))){
var inst_42858 = (state_42894[(7)]);
var inst_42867 = (state_42894[(11)]);
var tmp42911 = inst_42858;
var inst_42858__$1 = tmp42911;
var inst_42859 = inst_42867;
var state_42894__$1 = (function (){var statearr_42915 = state_42894;
(statearr_42915[(7)] = inst_42858__$1);

(statearr_42915[(8)] = inst_42859);

return statearr_42915;
})();
var statearr_42916_42942 = state_42894__$1;
(statearr_42916_42942[(2)] = null);

(statearr_42916_42942[(1)] = (2));


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
});})(c__21381__auto___42928,out))
;
return ((function (switch__21316__auto__,c__21381__auto___42928,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_42920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42920[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_42920[(1)] = (1));

return statearr_42920;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_42894){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_42894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e42921){if((e42921 instanceof Object)){
var ex__21320__auto__ = e42921;
var statearr_42922_42943 = state_42894;
(statearr_42922_42943[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42944 = state_42894;
state_42894 = G__42944;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_42894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_42894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___42928,out))
})();
var state__21383__auto__ = (function (){var statearr_42923 = f__21382__auto__.call(null);
(statearr_42923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___42928);

return statearr_42923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___42928,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args42945 = [];
var len__17843__auto___43019 = arguments.length;
var i__17844__auto___43020 = (0);
while(true){
if((i__17844__auto___43020 < len__17843__auto___43019)){
args42945.push((arguments[i__17844__auto___43020]));

var G__43021 = (i__17844__auto___43020 + (1));
i__17844__auto___43020 = G__43021;
continue;
} else {
}
break;
}

var G__42947 = args42945.length;
switch (G__42947) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42945.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21381__auto___43023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___43023,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___43023,out){
return (function (state_42989){
var state_val_42990 = (state_42989[(1)]);
if((state_val_42990 === (7))){
var inst_42985 = (state_42989[(2)]);
var state_42989__$1 = state_42989;
var statearr_42991_43024 = state_42989__$1;
(statearr_42991_43024[(2)] = inst_42985);

(statearr_42991_43024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42990 === (1))){
var inst_42948 = [];
var inst_42949 = inst_42948;
var inst_42950 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42989__$1 = (function (){var statearr_42992 = state_42989;
(statearr_42992[(7)] = inst_42949);

(statearr_42992[(8)] = inst_42950);

return statearr_42992;
})();
var statearr_42993_43025 = state_42989__$1;
(statearr_42993_43025[(2)] = null);

(statearr_42993_43025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42990 === (4))){
var inst_42953 = (state_42989[(9)]);
var inst_42953__$1 = (state_42989[(2)]);
var inst_42954 = (inst_42953__$1 == null);
var inst_42955 = cljs.core.not.call(null,inst_42954);
var state_42989__$1 = (function (){var statearr_42994 = state_42989;
(statearr_42994[(9)] = inst_42953__$1);

return statearr_42994;
})();
if(inst_42955){
var statearr_42995_43026 = state_42989__$1;
(statearr_42995_43026[(1)] = (5));

} else {
var statearr_42996_43027 = state_42989__$1;
(statearr_42996_43027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42990 === (15))){
var inst_42979 = (state_42989[(2)]);
var state_42989__$1 = state_42989;
var statearr_42997_43028 = state_42989__$1;
(statearr_42997_43028[(2)] = inst_42979);

(statearr_42997_43028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42990 === (13))){
var state_42989__$1 = state_42989;
var statearr_42998_43029 = state_42989__$1;
(statearr_42998_43029[(2)] = null);

(statearr_42998_43029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42990 === (6))){
var inst_42949 = (state_42989[(7)]);
var inst_42974 = inst_42949.length;
var inst_42975 = (inst_42974 > (0));
var state_42989__$1 = state_42989;
if(cljs.core.truth_(inst_42975)){
var statearr_42999_43030 = state_42989__$1;
(statearr_42999_43030[(1)] = (12));

} else {
var statearr_43000_43031 = state_42989__$1;
(statearr_43000_43031[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42990 === (3))){
var inst_42987 = (state_42989[(2)]);
var state_42989__$1 = state_42989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42989__$1,inst_42987);
} else {
if((state_val_42990 === (12))){
var inst_42949 = (state_42989[(7)]);
var inst_42977 = cljs.core.vec.call(null,inst_42949);
var state_42989__$1 = state_42989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42989__$1,(15),out,inst_42977);
} else {
if((state_val_42990 === (2))){
var state_42989__$1 = state_42989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42989__$1,(4),ch);
} else {
if((state_val_42990 === (11))){
var inst_42953 = (state_42989[(9)]);
var inst_42957 = (state_42989[(10)]);
var inst_42967 = (state_42989[(2)]);
var inst_42968 = [];
var inst_42969 = inst_42968.push(inst_42953);
var inst_42949 = inst_42968;
var inst_42950 = inst_42957;
var state_42989__$1 = (function (){var statearr_43001 = state_42989;
(statearr_43001[(7)] = inst_42949);

(statearr_43001[(11)] = inst_42969);

(statearr_43001[(8)] = inst_42950);

(statearr_43001[(12)] = inst_42967);

return statearr_43001;
})();
var statearr_43002_43032 = state_42989__$1;
(statearr_43002_43032[(2)] = null);

(statearr_43002_43032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42990 === (9))){
var inst_42949 = (state_42989[(7)]);
var inst_42965 = cljs.core.vec.call(null,inst_42949);
var state_42989__$1 = state_42989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42989__$1,(11),out,inst_42965);
} else {
if((state_val_42990 === (5))){
var inst_42953 = (state_42989[(9)]);
var inst_42957 = (state_42989[(10)]);
var inst_42950 = (state_42989[(8)]);
var inst_42957__$1 = f.call(null,inst_42953);
var inst_42958 = cljs.core._EQ_.call(null,inst_42957__$1,inst_42950);
var inst_42959 = cljs.core.keyword_identical_QMARK_.call(null,inst_42950,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42960 = (inst_42958) || (inst_42959);
var state_42989__$1 = (function (){var statearr_43003 = state_42989;
(statearr_43003[(10)] = inst_42957__$1);

return statearr_43003;
})();
if(cljs.core.truth_(inst_42960)){
var statearr_43004_43033 = state_42989__$1;
(statearr_43004_43033[(1)] = (8));

} else {
var statearr_43005_43034 = state_42989__$1;
(statearr_43005_43034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42990 === (14))){
var inst_42982 = (state_42989[(2)]);
var inst_42983 = cljs.core.async.close_BANG_.call(null,out);
var state_42989__$1 = (function (){var statearr_43007 = state_42989;
(statearr_43007[(13)] = inst_42982);

return statearr_43007;
})();
var statearr_43008_43035 = state_42989__$1;
(statearr_43008_43035[(2)] = inst_42983);

(statearr_43008_43035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42990 === (10))){
var inst_42972 = (state_42989[(2)]);
var state_42989__$1 = state_42989;
var statearr_43009_43036 = state_42989__$1;
(statearr_43009_43036[(2)] = inst_42972);

(statearr_43009_43036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42990 === (8))){
var inst_42949 = (state_42989[(7)]);
var inst_42953 = (state_42989[(9)]);
var inst_42957 = (state_42989[(10)]);
var inst_42962 = inst_42949.push(inst_42953);
var tmp43006 = inst_42949;
var inst_42949__$1 = tmp43006;
var inst_42950 = inst_42957;
var state_42989__$1 = (function (){var statearr_43010 = state_42989;
(statearr_43010[(7)] = inst_42949__$1);

(statearr_43010[(14)] = inst_42962);

(statearr_43010[(8)] = inst_42950);

return statearr_43010;
})();
var statearr_43011_43037 = state_42989__$1;
(statearr_43011_43037[(2)] = null);

(statearr_43011_43037[(1)] = (2));


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
});})(c__21381__auto___43023,out))
;
return ((function (switch__21316__auto__,c__21381__auto___43023,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_43015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43015[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_43015[(1)] = (1));

return statearr_43015;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_42989){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_42989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e43016){if((e43016 instanceof Object)){
var ex__21320__auto__ = e43016;
var statearr_43017_43038 = state_42989;
(statearr_43017_43038[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43039 = state_42989;
state_42989 = G__43039;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_42989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_42989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___43023,out))
})();
var state__21383__auto__ = (function (){var statearr_43018 = f__21382__auto__.call(null);
(statearr_43018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___43023);

return statearr_43018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___43023,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map