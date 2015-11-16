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
if(typeof cljs.core.async.t_cljs$core$async29256 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29256 = (function (fn_handler,f,meta29257){
this.fn_handler = fn_handler;
this.f = f;
this.meta29257 = meta29257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29258,meta29257__$1){
var self__ = this;
var _29258__$1 = this;
return (new cljs.core.async.t_cljs$core$async29256(self__.fn_handler,self__.f,meta29257__$1));
});

cljs.core.async.t_cljs$core$async29256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29258){
var self__ = this;
var _29258__$1 = this;
return self__.meta29257;
});

cljs.core.async.t_cljs$core$async29256.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta29257","meta29257",-1804424205,null)], null);
});

cljs.core.async.t_cljs$core$async29256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29256";

cljs.core.async.t_cljs$core$async29256.cljs$lang$ctorPrWriter = (function (this__17788__auto__,writer__17789__auto__,opt__17790__auto__){
return cljs.core._write.call(null,writer__17789__auto__,"cljs.core.async/t_cljs$core$async29256");
});

cljs.core.async.__GT_t_cljs$core$async29256 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async29256(fn_handler__$1,f__$1,meta29257){
return (new cljs.core.async.t_cljs$core$async29256(fn_handler__$1,f__$1,meta29257));
});

}

return (new cljs.core.async.t_cljs$core$async29256(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args29261 = [];
var len__18248__auto___29264 = arguments.length;
var i__18249__auto___29265 = (0);
while(true){
if((i__18249__auto___29265 < len__18248__auto___29264)){
args29261.push((arguments[i__18249__auto___29265]));

var G__29266 = (i__18249__auto___29265 + (1));
i__18249__auto___29265 = G__29266;
continue;
} else {
}
break;
}

var G__29263 = args29261.length;
switch (G__29263) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29261.length)].join('')));

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
var args29268 = [];
var len__18248__auto___29271 = arguments.length;
var i__18249__auto___29272 = (0);
while(true){
if((i__18249__auto___29272 < len__18248__auto___29271)){
args29268.push((arguments[i__18249__auto___29272]));

var G__29273 = (i__18249__auto___29272 + (1));
i__18249__auto___29272 = G__29273;
continue;
} else {
}
break;
}

var G__29270 = args29268.length;
switch (G__29270) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29268.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29275 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29275);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29275,ret){
return (function (){
return fn1.call(null,val_29275);
});})(val_29275,ret))
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
var args29276 = [];
var len__18248__auto___29279 = arguments.length;
var i__18249__auto___29280 = (0);
while(true){
if((i__18249__auto___29280 < len__18248__auto___29279)){
args29276.push((arguments[i__18249__auto___29280]));

var G__29281 = (i__18249__auto___29280 + (1));
i__18249__auto___29280 = G__29281;
continue;
} else {
}
break;
}

var G__29278 = args29276.length;
switch (G__29278) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29276.length)].join('')));

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
var n__18093__auto___29283 = n;
var x_29284 = (0);
while(true){
if((x_29284 < n__18093__auto___29283)){
(a[x_29284] = (0));

var G__29285 = (x_29284 + (1));
x_29284 = G__29285;
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

var G__29286 = (i + (1));
i = G__29286;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29290 = (function (alt_flag,flag,meta29291){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29291 = meta29291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29292,meta29291__$1){
var self__ = this;
var _29292__$1 = this;
return (new cljs.core.async.t_cljs$core$async29290(self__.alt_flag,self__.flag,meta29291__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29292){
var self__ = this;
var _29292__$1 = this;
return self__.meta29291;
});})(flag))
;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29290.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29290.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29291","meta29291",-1409481786,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29290";

cljs.core.async.t_cljs$core$async29290.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17788__auto__,writer__17789__auto__,opt__17790__auto__){
return cljs.core._write.call(null,writer__17789__auto__,"cljs.core.async/t_cljs$core$async29290");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29290 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29290(alt_flag__$1,flag__$1,meta29291){
return (new cljs.core.async.t_cljs$core$async29290(alt_flag__$1,flag__$1,meta29291));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29290(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29296 = (function (alt_handler,flag,cb,meta29297){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29297 = meta29297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29298,meta29297__$1){
var self__ = this;
var _29298__$1 = this;
return (new cljs.core.async.t_cljs$core$async29296(self__.alt_handler,self__.flag,self__.cb,meta29297__$1));
});

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29298){
var self__ = this;
var _29298__$1 = this;
return self__.meta29297;
});

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29297","meta29297",-674787472,null)], null);
});

cljs.core.async.t_cljs$core$async29296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29296";

cljs.core.async.t_cljs$core$async29296.cljs$lang$ctorPrWriter = (function (this__17788__auto__,writer__17789__auto__,opt__17790__auto__){
return cljs.core._write.call(null,writer__17789__auto__,"cljs.core.async/t_cljs$core$async29296");
});

cljs.core.async.__GT_t_cljs$core$async29296 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29296(alt_handler__$1,flag__$1,cb__$1,meta29297){
return (new cljs.core.async.t_cljs$core$async29296(alt_handler__$1,flag__$1,cb__$1,meta29297));
});

}

return (new cljs.core.async.t_cljs$core$async29296(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29299_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29299_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29300_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29300_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17190__auto__ = wport;
if(cljs.core.truth_(or__17190__auto__)){
return or__17190__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29301 = (i + (1));
i = G__29301;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17190__auto__ = ret;
if(cljs.core.truth_(or__17190__auto__)){
return or__17190__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__17178__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17178__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17178__auto__;
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
var args__18255__auto__ = [];
var len__18248__auto___29307 = arguments.length;
var i__18249__auto___29308 = (0);
while(true){
if((i__18249__auto___29308 < len__18248__auto___29307)){
args__18255__auto__.push((arguments[i__18249__auto___29308]));

var G__29309 = (i__18249__auto___29308 + (1));
i__18249__auto___29308 = G__29309;
continue;
} else {
}
break;
}

var argseq__18256__auto__ = ((((1) < args__18255__auto__.length))?(new cljs.core.IndexedSeq(args__18255__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18256__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29304){
var map__29305 = p__29304;
var map__29305__$1 = ((((!((map__29305 == null)))?((((map__29305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29305):map__29305);
var opts = map__29305__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29302){
var G__29303 = cljs.core.first.call(null,seq29302);
var seq29302__$1 = cljs.core.next.call(null,seq29302);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29303,seq29302__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29310 = [];
var len__18248__auto___29360 = arguments.length;
var i__18249__auto___29361 = (0);
while(true){
if((i__18249__auto___29361 < len__18248__auto___29360)){
args29310.push((arguments[i__18249__auto___29361]));

var G__29362 = (i__18249__auto___29361 + (1));
i__18249__auto___29361 = G__29362;
continue;
} else {
}
break;
}

var G__29312 = args29310.length;
switch (G__29312) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29310.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21787__auto___29364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___29364){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___29364){
return (function (state_29336){
var state_val_29337 = (state_29336[(1)]);
if((state_val_29337 === (7))){
var inst_29332 = (state_29336[(2)]);
var state_29336__$1 = state_29336;
var statearr_29338_29365 = state_29336__$1;
(statearr_29338_29365[(2)] = inst_29332);

(statearr_29338_29365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (1))){
var state_29336__$1 = state_29336;
var statearr_29339_29366 = state_29336__$1;
(statearr_29339_29366[(2)] = null);

(statearr_29339_29366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (4))){
var inst_29315 = (state_29336[(7)]);
var inst_29315__$1 = (state_29336[(2)]);
var inst_29316 = (inst_29315__$1 == null);
var state_29336__$1 = (function (){var statearr_29340 = state_29336;
(statearr_29340[(7)] = inst_29315__$1);

return statearr_29340;
})();
if(cljs.core.truth_(inst_29316)){
var statearr_29341_29367 = state_29336__$1;
(statearr_29341_29367[(1)] = (5));

} else {
var statearr_29342_29368 = state_29336__$1;
(statearr_29342_29368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (13))){
var state_29336__$1 = state_29336;
var statearr_29343_29369 = state_29336__$1;
(statearr_29343_29369[(2)] = null);

(statearr_29343_29369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (6))){
var inst_29315 = (state_29336[(7)]);
var state_29336__$1 = state_29336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29336__$1,(11),to,inst_29315);
} else {
if((state_val_29337 === (3))){
var inst_29334 = (state_29336[(2)]);
var state_29336__$1 = state_29336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29336__$1,inst_29334);
} else {
if((state_val_29337 === (12))){
var state_29336__$1 = state_29336;
var statearr_29344_29370 = state_29336__$1;
(statearr_29344_29370[(2)] = null);

(statearr_29344_29370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (2))){
var state_29336__$1 = state_29336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29336__$1,(4),from);
} else {
if((state_val_29337 === (11))){
var inst_29325 = (state_29336[(2)]);
var state_29336__$1 = state_29336;
if(cljs.core.truth_(inst_29325)){
var statearr_29345_29371 = state_29336__$1;
(statearr_29345_29371[(1)] = (12));

} else {
var statearr_29346_29372 = state_29336__$1;
(statearr_29346_29372[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (9))){
var state_29336__$1 = state_29336;
var statearr_29347_29373 = state_29336__$1;
(statearr_29347_29373[(2)] = null);

(statearr_29347_29373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (5))){
var state_29336__$1 = state_29336;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29348_29374 = state_29336__$1;
(statearr_29348_29374[(1)] = (8));

} else {
var statearr_29349_29375 = state_29336__$1;
(statearr_29349_29375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (14))){
var inst_29330 = (state_29336[(2)]);
var state_29336__$1 = state_29336;
var statearr_29350_29376 = state_29336__$1;
(statearr_29350_29376[(2)] = inst_29330);

(statearr_29350_29376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (10))){
var inst_29322 = (state_29336[(2)]);
var state_29336__$1 = state_29336;
var statearr_29351_29377 = state_29336__$1;
(statearr_29351_29377[(2)] = inst_29322);

(statearr_29351_29377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29337 === (8))){
var inst_29319 = cljs.core.async.close_BANG_.call(null,to);
var state_29336__$1 = state_29336;
var statearr_29352_29378 = state_29336__$1;
(statearr_29352_29378[(2)] = inst_29319);

(statearr_29352_29378[(1)] = (10));


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
});})(c__21787__auto___29364))
;
return ((function (switch__21722__auto__,c__21787__auto___29364){
return (function() {
var cljs$core$async$state_machine__21723__auto__ = null;
var cljs$core$async$state_machine__21723__auto____0 = (function (){
var statearr_29356 = [null,null,null,null,null,null,null,null];
(statearr_29356[(0)] = cljs$core$async$state_machine__21723__auto__);

(statearr_29356[(1)] = (1));

return statearr_29356;
});
var cljs$core$async$state_machine__21723__auto____1 = (function (state_29336){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_29336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e29357){if((e29357 instanceof Object)){
var ex__21726__auto__ = e29357;
var statearr_29358_29379 = state_29336;
(statearr_29358_29379[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29380 = state_29336;
state_29336 = G__29380;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$state_machine__21723__auto__ = function(state_29336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21723__auto____1.call(this,state_29336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21723__auto____0;
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21723__auto____1;
return cljs$core$async$state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___29364))
})();
var state__21789__auto__ = (function (){var statearr_29359 = f__21788__auto__.call(null);
(statearr_29359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___29364);

return statearr_29359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___29364))
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
return (function (p__29564){
var vec__29565 = p__29564;
var v = cljs.core.nth.call(null,vec__29565,(0),null);
var p = cljs.core.nth.call(null,vec__29565,(1),null);
var job = vec__29565;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21787__auto___29747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___29747,res,vec__29565,v,p,job,jobs,results){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___29747,res,vec__29565,v,p,job,jobs,results){
return (function (state_29570){
var state_val_29571 = (state_29570[(1)]);
if((state_val_29571 === (1))){
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29570__$1,(2),res,v);
} else {
if((state_val_29571 === (2))){
var inst_29567 = (state_29570[(2)]);
var inst_29568 = cljs.core.async.close_BANG_.call(null,res);
var state_29570__$1 = (function (){var statearr_29572 = state_29570;
(statearr_29572[(7)] = inst_29567);

return statearr_29572;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29570__$1,inst_29568);
} else {
return null;
}
}
});})(c__21787__auto___29747,res,vec__29565,v,p,job,jobs,results))
;
return ((function (switch__21722__auto__,c__21787__auto___29747,res,vec__29565,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0 = (function (){
var statearr_29576 = [null,null,null,null,null,null,null,null];
(statearr_29576[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__);

(statearr_29576[(1)] = (1));

return statearr_29576;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1 = (function (state_29570){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_29570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e29577){if((e29577 instanceof Object)){
var ex__21726__auto__ = e29577;
var statearr_29578_29748 = state_29570;
(statearr_29578_29748[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29749 = state_29570;
state_29570 = G__29749;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__ = function(state_29570){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1.call(this,state_29570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___29747,res,vec__29565,v,p,job,jobs,results))
})();
var state__21789__auto__ = (function (){var statearr_29579 = f__21788__auto__.call(null);
(statearr_29579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___29747);

return statearr_29579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___29747,res,vec__29565,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29580){
var vec__29581 = p__29580;
var v = cljs.core.nth.call(null,vec__29581,(0),null);
var p = cljs.core.nth.call(null,vec__29581,(1),null);
var job = vec__29581;
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
var n__18093__auto___29750 = n;
var __29751 = (0);
while(true){
if((__29751 < n__18093__auto___29750)){
var G__29582_29752 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29582_29752) {
case "compute":
var c__21787__auto___29754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29751,c__21787__auto___29754,G__29582_29752,n__18093__auto___29750,jobs,results,process,async){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (__29751,c__21787__auto___29754,G__29582_29752,n__18093__auto___29750,jobs,results,process,async){
return (function (state_29595){
var state_val_29596 = (state_29595[(1)]);
if((state_val_29596 === (1))){
var state_29595__$1 = state_29595;
var statearr_29597_29755 = state_29595__$1;
(statearr_29597_29755[(2)] = null);

(statearr_29597_29755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29596 === (2))){
var state_29595__$1 = state_29595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29595__$1,(4),jobs);
} else {
if((state_val_29596 === (3))){
var inst_29593 = (state_29595[(2)]);
var state_29595__$1 = state_29595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29595__$1,inst_29593);
} else {
if((state_val_29596 === (4))){
var inst_29585 = (state_29595[(2)]);
var inst_29586 = process.call(null,inst_29585);
var state_29595__$1 = state_29595;
if(cljs.core.truth_(inst_29586)){
var statearr_29598_29756 = state_29595__$1;
(statearr_29598_29756[(1)] = (5));

} else {
var statearr_29599_29757 = state_29595__$1;
(statearr_29599_29757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29596 === (5))){
var state_29595__$1 = state_29595;
var statearr_29600_29758 = state_29595__$1;
(statearr_29600_29758[(2)] = null);

(statearr_29600_29758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29596 === (6))){
var state_29595__$1 = state_29595;
var statearr_29601_29759 = state_29595__$1;
(statearr_29601_29759[(2)] = null);

(statearr_29601_29759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29596 === (7))){
var inst_29591 = (state_29595[(2)]);
var state_29595__$1 = state_29595;
var statearr_29602_29760 = state_29595__$1;
(statearr_29602_29760[(2)] = inst_29591);

(statearr_29602_29760[(1)] = (3));


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
});})(__29751,c__21787__auto___29754,G__29582_29752,n__18093__auto___29750,jobs,results,process,async))
;
return ((function (__29751,switch__21722__auto__,c__21787__auto___29754,G__29582_29752,n__18093__auto___29750,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0 = (function (){
var statearr_29606 = [null,null,null,null,null,null,null];
(statearr_29606[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__);

(statearr_29606[(1)] = (1));

return statearr_29606;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1 = (function (state_29595){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_29595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e29607){if((e29607 instanceof Object)){
var ex__21726__auto__ = e29607;
var statearr_29608_29761 = state_29595;
(statearr_29608_29761[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29762 = state_29595;
state_29595 = G__29762;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__ = function(state_29595){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1.call(this,state_29595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__;
})()
;})(__29751,switch__21722__auto__,c__21787__auto___29754,G__29582_29752,n__18093__auto___29750,jobs,results,process,async))
})();
var state__21789__auto__ = (function (){var statearr_29609 = f__21788__auto__.call(null);
(statearr_29609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___29754);

return statearr_29609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(__29751,c__21787__auto___29754,G__29582_29752,n__18093__auto___29750,jobs,results,process,async))
);


break;
case "async":
var c__21787__auto___29763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29751,c__21787__auto___29763,G__29582_29752,n__18093__auto___29750,jobs,results,process,async){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (__29751,c__21787__auto___29763,G__29582_29752,n__18093__auto___29750,jobs,results,process,async){
return (function (state_29622){
var state_val_29623 = (state_29622[(1)]);
if((state_val_29623 === (1))){
var state_29622__$1 = state_29622;
var statearr_29624_29764 = state_29622__$1;
(statearr_29624_29764[(2)] = null);

(statearr_29624_29764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29623 === (2))){
var state_29622__$1 = state_29622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29622__$1,(4),jobs);
} else {
if((state_val_29623 === (3))){
var inst_29620 = (state_29622[(2)]);
var state_29622__$1 = state_29622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29622__$1,inst_29620);
} else {
if((state_val_29623 === (4))){
var inst_29612 = (state_29622[(2)]);
var inst_29613 = async.call(null,inst_29612);
var state_29622__$1 = state_29622;
if(cljs.core.truth_(inst_29613)){
var statearr_29625_29765 = state_29622__$1;
(statearr_29625_29765[(1)] = (5));

} else {
var statearr_29626_29766 = state_29622__$1;
(statearr_29626_29766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29623 === (5))){
var state_29622__$1 = state_29622;
var statearr_29627_29767 = state_29622__$1;
(statearr_29627_29767[(2)] = null);

(statearr_29627_29767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29623 === (6))){
var state_29622__$1 = state_29622;
var statearr_29628_29768 = state_29622__$1;
(statearr_29628_29768[(2)] = null);

(statearr_29628_29768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29623 === (7))){
var inst_29618 = (state_29622[(2)]);
var state_29622__$1 = state_29622;
var statearr_29629_29769 = state_29622__$1;
(statearr_29629_29769[(2)] = inst_29618);

(statearr_29629_29769[(1)] = (3));


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
});})(__29751,c__21787__auto___29763,G__29582_29752,n__18093__auto___29750,jobs,results,process,async))
;
return ((function (__29751,switch__21722__auto__,c__21787__auto___29763,G__29582_29752,n__18093__auto___29750,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0 = (function (){
var statearr_29633 = [null,null,null,null,null,null,null];
(statearr_29633[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__);

(statearr_29633[(1)] = (1));

return statearr_29633;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1 = (function (state_29622){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_29622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e29634){if((e29634 instanceof Object)){
var ex__21726__auto__ = e29634;
var statearr_29635_29770 = state_29622;
(statearr_29635_29770[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29771 = state_29622;
state_29622 = G__29771;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__ = function(state_29622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1.call(this,state_29622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__;
})()
;})(__29751,switch__21722__auto__,c__21787__auto___29763,G__29582_29752,n__18093__auto___29750,jobs,results,process,async))
})();
var state__21789__auto__ = (function (){var statearr_29636 = f__21788__auto__.call(null);
(statearr_29636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___29763);

return statearr_29636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(__29751,c__21787__auto___29763,G__29582_29752,n__18093__auto___29750,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29772 = (__29751 + (1));
__29751 = G__29772;
continue;
} else {
}
break;
}

var c__21787__auto___29773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___29773,jobs,results,process,async){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___29773,jobs,results,process,async){
return (function (state_29658){
var state_val_29659 = (state_29658[(1)]);
if((state_val_29659 === (1))){
var state_29658__$1 = state_29658;
var statearr_29660_29774 = state_29658__$1;
(statearr_29660_29774[(2)] = null);

(statearr_29660_29774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (2))){
var state_29658__$1 = state_29658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29658__$1,(4),from);
} else {
if((state_val_29659 === (3))){
var inst_29656 = (state_29658[(2)]);
var state_29658__$1 = state_29658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29658__$1,inst_29656);
} else {
if((state_val_29659 === (4))){
var inst_29639 = (state_29658[(7)]);
var inst_29639__$1 = (state_29658[(2)]);
var inst_29640 = (inst_29639__$1 == null);
var state_29658__$1 = (function (){var statearr_29661 = state_29658;
(statearr_29661[(7)] = inst_29639__$1);

return statearr_29661;
})();
if(cljs.core.truth_(inst_29640)){
var statearr_29662_29775 = state_29658__$1;
(statearr_29662_29775[(1)] = (5));

} else {
var statearr_29663_29776 = state_29658__$1;
(statearr_29663_29776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (5))){
var inst_29642 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29658__$1 = state_29658;
var statearr_29664_29777 = state_29658__$1;
(statearr_29664_29777[(2)] = inst_29642);

(statearr_29664_29777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (6))){
var inst_29639 = (state_29658[(7)]);
var inst_29644 = (state_29658[(8)]);
var inst_29644__$1 = cljs.core.async.chan.call(null,(1));
var inst_29645 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29646 = [inst_29639,inst_29644__$1];
var inst_29647 = (new cljs.core.PersistentVector(null,2,(5),inst_29645,inst_29646,null));
var state_29658__$1 = (function (){var statearr_29665 = state_29658;
(statearr_29665[(8)] = inst_29644__$1);

return statearr_29665;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29658__$1,(8),jobs,inst_29647);
} else {
if((state_val_29659 === (7))){
var inst_29654 = (state_29658[(2)]);
var state_29658__$1 = state_29658;
var statearr_29666_29778 = state_29658__$1;
(statearr_29666_29778[(2)] = inst_29654);

(statearr_29666_29778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29659 === (8))){
var inst_29644 = (state_29658[(8)]);
var inst_29649 = (state_29658[(2)]);
var state_29658__$1 = (function (){var statearr_29667 = state_29658;
(statearr_29667[(9)] = inst_29649);

return statearr_29667;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29658__$1,(9),results,inst_29644);
} else {
if((state_val_29659 === (9))){
var inst_29651 = (state_29658[(2)]);
var state_29658__$1 = (function (){var statearr_29668 = state_29658;
(statearr_29668[(10)] = inst_29651);

return statearr_29668;
})();
var statearr_29669_29779 = state_29658__$1;
(statearr_29669_29779[(2)] = null);

(statearr_29669_29779[(1)] = (2));


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
});})(c__21787__auto___29773,jobs,results,process,async))
;
return ((function (switch__21722__auto__,c__21787__auto___29773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0 = (function (){
var statearr_29673 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29673[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__);

(statearr_29673[(1)] = (1));

return statearr_29673;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1 = (function (state_29658){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_29658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e29674){if((e29674 instanceof Object)){
var ex__21726__auto__ = e29674;
var statearr_29675_29780 = state_29658;
(statearr_29675_29780[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29781 = state_29658;
state_29658 = G__29781;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__ = function(state_29658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1.call(this,state_29658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___29773,jobs,results,process,async))
})();
var state__21789__auto__ = (function (){var statearr_29676 = f__21788__auto__.call(null);
(statearr_29676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___29773);

return statearr_29676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___29773,jobs,results,process,async))
);


var c__21787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto__,jobs,results,process,async){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto__,jobs,results,process,async){
return (function (state_29714){
var state_val_29715 = (state_29714[(1)]);
if((state_val_29715 === (7))){
var inst_29710 = (state_29714[(2)]);
var state_29714__$1 = state_29714;
var statearr_29716_29782 = state_29714__$1;
(statearr_29716_29782[(2)] = inst_29710);

(statearr_29716_29782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (20))){
var state_29714__$1 = state_29714;
var statearr_29717_29783 = state_29714__$1;
(statearr_29717_29783[(2)] = null);

(statearr_29717_29783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (1))){
var state_29714__$1 = state_29714;
var statearr_29718_29784 = state_29714__$1;
(statearr_29718_29784[(2)] = null);

(statearr_29718_29784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (4))){
var inst_29679 = (state_29714[(7)]);
var inst_29679__$1 = (state_29714[(2)]);
var inst_29680 = (inst_29679__$1 == null);
var state_29714__$1 = (function (){var statearr_29719 = state_29714;
(statearr_29719[(7)] = inst_29679__$1);

return statearr_29719;
})();
if(cljs.core.truth_(inst_29680)){
var statearr_29720_29785 = state_29714__$1;
(statearr_29720_29785[(1)] = (5));

} else {
var statearr_29721_29786 = state_29714__$1;
(statearr_29721_29786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (15))){
var inst_29692 = (state_29714[(8)]);
var state_29714__$1 = state_29714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29714__$1,(18),to,inst_29692);
} else {
if((state_val_29715 === (21))){
var inst_29705 = (state_29714[(2)]);
var state_29714__$1 = state_29714;
var statearr_29722_29787 = state_29714__$1;
(statearr_29722_29787[(2)] = inst_29705);

(statearr_29722_29787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (13))){
var inst_29707 = (state_29714[(2)]);
var state_29714__$1 = (function (){var statearr_29723 = state_29714;
(statearr_29723[(9)] = inst_29707);

return statearr_29723;
})();
var statearr_29724_29788 = state_29714__$1;
(statearr_29724_29788[(2)] = null);

(statearr_29724_29788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (6))){
var inst_29679 = (state_29714[(7)]);
var state_29714__$1 = state_29714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29714__$1,(11),inst_29679);
} else {
if((state_val_29715 === (17))){
var inst_29700 = (state_29714[(2)]);
var state_29714__$1 = state_29714;
if(cljs.core.truth_(inst_29700)){
var statearr_29725_29789 = state_29714__$1;
(statearr_29725_29789[(1)] = (19));

} else {
var statearr_29726_29790 = state_29714__$1;
(statearr_29726_29790[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (3))){
var inst_29712 = (state_29714[(2)]);
var state_29714__$1 = state_29714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29714__$1,inst_29712);
} else {
if((state_val_29715 === (12))){
var inst_29689 = (state_29714[(10)]);
var state_29714__$1 = state_29714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29714__$1,(14),inst_29689);
} else {
if((state_val_29715 === (2))){
var state_29714__$1 = state_29714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29714__$1,(4),results);
} else {
if((state_val_29715 === (19))){
var state_29714__$1 = state_29714;
var statearr_29727_29791 = state_29714__$1;
(statearr_29727_29791[(2)] = null);

(statearr_29727_29791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (11))){
var inst_29689 = (state_29714[(2)]);
var state_29714__$1 = (function (){var statearr_29728 = state_29714;
(statearr_29728[(10)] = inst_29689);

return statearr_29728;
})();
var statearr_29729_29792 = state_29714__$1;
(statearr_29729_29792[(2)] = null);

(statearr_29729_29792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (9))){
var state_29714__$1 = state_29714;
var statearr_29730_29793 = state_29714__$1;
(statearr_29730_29793[(2)] = null);

(statearr_29730_29793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (5))){
var state_29714__$1 = state_29714;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29731_29794 = state_29714__$1;
(statearr_29731_29794[(1)] = (8));

} else {
var statearr_29732_29795 = state_29714__$1;
(statearr_29732_29795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (14))){
var inst_29694 = (state_29714[(11)]);
var inst_29692 = (state_29714[(8)]);
var inst_29692__$1 = (state_29714[(2)]);
var inst_29693 = (inst_29692__$1 == null);
var inst_29694__$1 = cljs.core.not.call(null,inst_29693);
var state_29714__$1 = (function (){var statearr_29733 = state_29714;
(statearr_29733[(11)] = inst_29694__$1);

(statearr_29733[(8)] = inst_29692__$1);

return statearr_29733;
})();
if(inst_29694__$1){
var statearr_29734_29796 = state_29714__$1;
(statearr_29734_29796[(1)] = (15));

} else {
var statearr_29735_29797 = state_29714__$1;
(statearr_29735_29797[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (16))){
var inst_29694 = (state_29714[(11)]);
var state_29714__$1 = state_29714;
var statearr_29736_29798 = state_29714__$1;
(statearr_29736_29798[(2)] = inst_29694);

(statearr_29736_29798[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (10))){
var inst_29686 = (state_29714[(2)]);
var state_29714__$1 = state_29714;
var statearr_29737_29799 = state_29714__$1;
(statearr_29737_29799[(2)] = inst_29686);

(statearr_29737_29799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (18))){
var inst_29697 = (state_29714[(2)]);
var state_29714__$1 = state_29714;
var statearr_29738_29800 = state_29714__$1;
(statearr_29738_29800[(2)] = inst_29697);

(statearr_29738_29800[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29715 === (8))){
var inst_29683 = cljs.core.async.close_BANG_.call(null,to);
var state_29714__$1 = state_29714;
var statearr_29739_29801 = state_29714__$1;
(statearr_29739_29801[(2)] = inst_29683);

(statearr_29739_29801[(1)] = (10));


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
});})(c__21787__auto__,jobs,results,process,async))
;
return ((function (switch__21722__auto__,c__21787__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0 = (function (){
var statearr_29743 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__);

(statearr_29743[(1)] = (1));

return statearr_29743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1 = (function (state_29714){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_29714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e29744){if((e29744 instanceof Object)){
var ex__21726__auto__ = e29744;
var statearr_29745_29802 = state_29714;
(statearr_29745_29802[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29803 = state_29714;
state_29714 = G__29803;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__ = function(state_29714){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1.call(this,state_29714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto__,jobs,results,process,async))
})();
var state__21789__auto__ = (function (){var statearr_29746 = f__21788__auto__.call(null);
(statearr_29746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto__);

return statearr_29746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto__,jobs,results,process,async))
);

return c__21787__auto__;
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
var args29804 = [];
var len__18248__auto___29807 = arguments.length;
var i__18249__auto___29808 = (0);
while(true){
if((i__18249__auto___29808 < len__18248__auto___29807)){
args29804.push((arguments[i__18249__auto___29808]));

var G__29809 = (i__18249__auto___29808 + (1));
i__18249__auto___29808 = G__29809;
continue;
} else {
}
break;
}

var G__29806 = args29804.length;
switch (G__29806) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29804.length)].join('')));

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
var args29811 = [];
var len__18248__auto___29814 = arguments.length;
var i__18249__auto___29815 = (0);
while(true){
if((i__18249__auto___29815 < len__18248__auto___29814)){
args29811.push((arguments[i__18249__auto___29815]));

var G__29816 = (i__18249__auto___29815 + (1));
i__18249__auto___29815 = G__29816;
continue;
} else {
}
break;
}

var G__29813 = args29811.length;
switch (G__29813) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29811.length)].join('')));

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
var args29818 = [];
var len__18248__auto___29871 = arguments.length;
var i__18249__auto___29872 = (0);
while(true){
if((i__18249__auto___29872 < len__18248__auto___29871)){
args29818.push((arguments[i__18249__auto___29872]));

var G__29873 = (i__18249__auto___29872 + (1));
i__18249__auto___29872 = G__29873;
continue;
} else {
}
break;
}

var G__29820 = args29818.length;
switch (G__29820) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29818.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21787__auto___29875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___29875,tc,fc){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___29875,tc,fc){
return (function (state_29846){
var state_val_29847 = (state_29846[(1)]);
if((state_val_29847 === (7))){
var inst_29842 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29848_29876 = state_29846__$1;
(statearr_29848_29876[(2)] = inst_29842);

(statearr_29848_29876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (1))){
var state_29846__$1 = state_29846;
var statearr_29849_29877 = state_29846__$1;
(statearr_29849_29877[(2)] = null);

(statearr_29849_29877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (4))){
var inst_29823 = (state_29846[(7)]);
var inst_29823__$1 = (state_29846[(2)]);
var inst_29824 = (inst_29823__$1 == null);
var state_29846__$1 = (function (){var statearr_29850 = state_29846;
(statearr_29850[(7)] = inst_29823__$1);

return statearr_29850;
})();
if(cljs.core.truth_(inst_29824)){
var statearr_29851_29878 = state_29846__$1;
(statearr_29851_29878[(1)] = (5));

} else {
var statearr_29852_29879 = state_29846__$1;
(statearr_29852_29879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (13))){
var state_29846__$1 = state_29846;
var statearr_29853_29880 = state_29846__$1;
(statearr_29853_29880[(2)] = null);

(statearr_29853_29880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (6))){
var inst_29823 = (state_29846[(7)]);
var inst_29829 = p.call(null,inst_29823);
var state_29846__$1 = state_29846;
if(cljs.core.truth_(inst_29829)){
var statearr_29854_29881 = state_29846__$1;
(statearr_29854_29881[(1)] = (9));

} else {
var statearr_29855_29882 = state_29846__$1;
(statearr_29855_29882[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (3))){
var inst_29844 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29846__$1,inst_29844);
} else {
if((state_val_29847 === (12))){
var state_29846__$1 = state_29846;
var statearr_29856_29883 = state_29846__$1;
(statearr_29856_29883[(2)] = null);

(statearr_29856_29883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (2))){
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29846__$1,(4),ch);
} else {
if((state_val_29847 === (11))){
var inst_29823 = (state_29846[(7)]);
var inst_29833 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29846__$1,(8),inst_29833,inst_29823);
} else {
if((state_val_29847 === (9))){
var state_29846__$1 = state_29846;
var statearr_29857_29884 = state_29846__$1;
(statearr_29857_29884[(2)] = tc);

(statearr_29857_29884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (5))){
var inst_29826 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29827 = cljs.core.async.close_BANG_.call(null,fc);
var state_29846__$1 = (function (){var statearr_29858 = state_29846;
(statearr_29858[(8)] = inst_29826);

return statearr_29858;
})();
var statearr_29859_29885 = state_29846__$1;
(statearr_29859_29885[(2)] = inst_29827);

(statearr_29859_29885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (14))){
var inst_29840 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29860_29886 = state_29846__$1;
(statearr_29860_29886[(2)] = inst_29840);

(statearr_29860_29886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (10))){
var state_29846__$1 = state_29846;
var statearr_29861_29887 = state_29846__$1;
(statearr_29861_29887[(2)] = fc);

(statearr_29861_29887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (8))){
var inst_29835 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
if(cljs.core.truth_(inst_29835)){
var statearr_29862_29888 = state_29846__$1;
(statearr_29862_29888[(1)] = (12));

} else {
var statearr_29863_29889 = state_29846__$1;
(statearr_29863_29889[(1)] = (13));

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
});})(c__21787__auto___29875,tc,fc))
;
return ((function (switch__21722__auto__,c__21787__auto___29875,tc,fc){
return (function() {
var cljs$core$async$state_machine__21723__auto__ = null;
var cljs$core$async$state_machine__21723__auto____0 = (function (){
var statearr_29867 = [null,null,null,null,null,null,null,null,null];
(statearr_29867[(0)] = cljs$core$async$state_machine__21723__auto__);

(statearr_29867[(1)] = (1));

return statearr_29867;
});
var cljs$core$async$state_machine__21723__auto____1 = (function (state_29846){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_29846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e29868){if((e29868 instanceof Object)){
var ex__21726__auto__ = e29868;
var statearr_29869_29890 = state_29846;
(statearr_29869_29890[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29891 = state_29846;
state_29846 = G__29891;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$state_machine__21723__auto__ = function(state_29846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21723__auto____1.call(this,state_29846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21723__auto____0;
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21723__auto____1;
return cljs$core$async$state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___29875,tc,fc))
})();
var state__21789__auto__ = (function (){var statearr_29870 = f__21788__auto__.call(null);
(statearr_29870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___29875);

return statearr_29870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___29875,tc,fc))
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
var c__21787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto__){
return (function (state_29938){
var state_val_29939 = (state_29938[(1)]);
if((state_val_29939 === (1))){
var inst_29924 = init;
var state_29938__$1 = (function (){var statearr_29940 = state_29938;
(statearr_29940[(7)] = inst_29924);

return statearr_29940;
})();
var statearr_29941_29956 = state_29938__$1;
(statearr_29941_29956[(2)] = null);

(statearr_29941_29956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29939 === (2))){
var state_29938__$1 = state_29938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29938__$1,(4),ch);
} else {
if((state_val_29939 === (3))){
var inst_29936 = (state_29938[(2)]);
var state_29938__$1 = state_29938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29938__$1,inst_29936);
} else {
if((state_val_29939 === (4))){
var inst_29927 = (state_29938[(8)]);
var inst_29927__$1 = (state_29938[(2)]);
var inst_29928 = (inst_29927__$1 == null);
var state_29938__$1 = (function (){var statearr_29942 = state_29938;
(statearr_29942[(8)] = inst_29927__$1);

return statearr_29942;
})();
if(cljs.core.truth_(inst_29928)){
var statearr_29943_29957 = state_29938__$1;
(statearr_29943_29957[(1)] = (5));

} else {
var statearr_29944_29958 = state_29938__$1;
(statearr_29944_29958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29939 === (5))){
var inst_29924 = (state_29938[(7)]);
var state_29938__$1 = state_29938;
var statearr_29945_29959 = state_29938__$1;
(statearr_29945_29959[(2)] = inst_29924);

(statearr_29945_29959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29939 === (6))){
var inst_29927 = (state_29938[(8)]);
var inst_29924 = (state_29938[(7)]);
var inst_29931 = f.call(null,inst_29924,inst_29927);
var inst_29924__$1 = inst_29931;
var state_29938__$1 = (function (){var statearr_29946 = state_29938;
(statearr_29946[(7)] = inst_29924__$1);

return statearr_29946;
})();
var statearr_29947_29960 = state_29938__$1;
(statearr_29947_29960[(2)] = null);

(statearr_29947_29960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29939 === (7))){
var inst_29934 = (state_29938[(2)]);
var state_29938__$1 = state_29938;
var statearr_29948_29961 = state_29938__$1;
(statearr_29948_29961[(2)] = inst_29934);

(statearr_29948_29961[(1)] = (3));


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
});})(c__21787__auto__))
;
return ((function (switch__21722__auto__,c__21787__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21723__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21723__auto____0 = (function (){
var statearr_29952 = [null,null,null,null,null,null,null,null,null];
(statearr_29952[(0)] = cljs$core$async$reduce_$_state_machine__21723__auto__);

(statearr_29952[(1)] = (1));

return statearr_29952;
});
var cljs$core$async$reduce_$_state_machine__21723__auto____1 = (function (state_29938){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_29938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e29953){if((e29953 instanceof Object)){
var ex__21726__auto__ = e29953;
var statearr_29954_29962 = state_29938;
(statearr_29954_29962[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29963 = state_29938;
state_29938 = G__29963;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21723__auto__ = function(state_29938){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21723__auto____1.call(this,state_29938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21723__auto____0;
cljs$core$async$reduce_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21723__auto____1;
return cljs$core$async$reduce_$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_29955 = f__21788__auto__.call(null);
(statearr_29955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto__);

return statearr_29955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto__))
);

return c__21787__auto__;
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
var args29964 = [];
var len__18248__auto___30016 = arguments.length;
var i__18249__auto___30017 = (0);
while(true){
if((i__18249__auto___30017 < len__18248__auto___30016)){
args29964.push((arguments[i__18249__auto___30017]));

var G__30018 = (i__18249__auto___30017 + (1));
i__18249__auto___30017 = G__30018;
continue;
} else {
}
break;
}

var G__29966 = args29964.length;
switch (G__29966) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29964.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto__){
return (function (state_29991){
var state_val_29992 = (state_29991[(1)]);
if((state_val_29992 === (7))){
var inst_29973 = (state_29991[(2)]);
var state_29991__$1 = state_29991;
var statearr_29993_30020 = state_29991__$1;
(statearr_29993_30020[(2)] = inst_29973);

(statearr_29993_30020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (1))){
var inst_29967 = cljs.core.seq.call(null,coll);
var inst_29968 = inst_29967;
var state_29991__$1 = (function (){var statearr_29994 = state_29991;
(statearr_29994[(7)] = inst_29968);

return statearr_29994;
})();
var statearr_29995_30021 = state_29991__$1;
(statearr_29995_30021[(2)] = null);

(statearr_29995_30021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (4))){
var inst_29968 = (state_29991[(7)]);
var inst_29971 = cljs.core.first.call(null,inst_29968);
var state_29991__$1 = state_29991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29991__$1,(7),ch,inst_29971);
} else {
if((state_val_29992 === (13))){
var inst_29985 = (state_29991[(2)]);
var state_29991__$1 = state_29991;
var statearr_29996_30022 = state_29991__$1;
(statearr_29996_30022[(2)] = inst_29985);

(statearr_29996_30022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (6))){
var inst_29976 = (state_29991[(2)]);
var state_29991__$1 = state_29991;
if(cljs.core.truth_(inst_29976)){
var statearr_29997_30023 = state_29991__$1;
(statearr_29997_30023[(1)] = (8));

} else {
var statearr_29998_30024 = state_29991__$1;
(statearr_29998_30024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (3))){
var inst_29989 = (state_29991[(2)]);
var state_29991__$1 = state_29991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29991__$1,inst_29989);
} else {
if((state_val_29992 === (12))){
var state_29991__$1 = state_29991;
var statearr_29999_30025 = state_29991__$1;
(statearr_29999_30025[(2)] = null);

(statearr_29999_30025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (2))){
var inst_29968 = (state_29991[(7)]);
var state_29991__$1 = state_29991;
if(cljs.core.truth_(inst_29968)){
var statearr_30000_30026 = state_29991__$1;
(statearr_30000_30026[(1)] = (4));

} else {
var statearr_30001_30027 = state_29991__$1;
(statearr_30001_30027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (11))){
var inst_29982 = cljs.core.async.close_BANG_.call(null,ch);
var state_29991__$1 = state_29991;
var statearr_30002_30028 = state_29991__$1;
(statearr_30002_30028[(2)] = inst_29982);

(statearr_30002_30028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (9))){
var state_29991__$1 = state_29991;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30003_30029 = state_29991__$1;
(statearr_30003_30029[(1)] = (11));

} else {
var statearr_30004_30030 = state_29991__$1;
(statearr_30004_30030[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (5))){
var inst_29968 = (state_29991[(7)]);
var state_29991__$1 = state_29991;
var statearr_30005_30031 = state_29991__$1;
(statearr_30005_30031[(2)] = inst_29968);

(statearr_30005_30031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (10))){
var inst_29987 = (state_29991[(2)]);
var state_29991__$1 = state_29991;
var statearr_30006_30032 = state_29991__$1;
(statearr_30006_30032[(2)] = inst_29987);

(statearr_30006_30032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29992 === (8))){
var inst_29968 = (state_29991[(7)]);
var inst_29978 = cljs.core.next.call(null,inst_29968);
var inst_29968__$1 = inst_29978;
var state_29991__$1 = (function (){var statearr_30007 = state_29991;
(statearr_30007[(7)] = inst_29968__$1);

return statearr_30007;
})();
var statearr_30008_30033 = state_29991__$1;
(statearr_30008_30033[(2)] = null);

(statearr_30008_30033[(1)] = (2));


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
});})(c__21787__auto__))
;
return ((function (switch__21722__auto__,c__21787__auto__){
return (function() {
var cljs$core$async$state_machine__21723__auto__ = null;
var cljs$core$async$state_machine__21723__auto____0 = (function (){
var statearr_30012 = [null,null,null,null,null,null,null,null];
(statearr_30012[(0)] = cljs$core$async$state_machine__21723__auto__);

(statearr_30012[(1)] = (1));

return statearr_30012;
});
var cljs$core$async$state_machine__21723__auto____1 = (function (state_29991){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_29991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e30013){if((e30013 instanceof Object)){
var ex__21726__auto__ = e30013;
var statearr_30014_30034 = state_29991;
(statearr_30014_30034[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30035 = state_29991;
state_29991 = G__30035;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$state_machine__21723__auto__ = function(state_29991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21723__auto____1.call(this,state_29991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21723__auto____0;
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21723__auto____1;
return cljs$core$async$state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_30015 = f__21788__auto__.call(null);
(statearr_30015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto__);

return statearr_30015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto__))
);

return c__21787__auto__;
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
var x__17845__auto__ = (((_ == null))?null:_);
var m__17846__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17845__auto__)]);
if(!((m__17846__auto__ == null))){
return m__17846__auto__.call(null,_);
} else {
var m__17846__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17846__auto____$1 == null))){
return m__17846__auto____$1.call(null,_);
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
var x__17845__auto__ = (((m == null))?null:m);
var m__17846__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17845__auto__)]);
if(!((m__17846__auto__ == null))){
return m__17846__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17846__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17846__auto____$1 == null))){
return m__17846__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17845__auto__ = (((m == null))?null:m);
var m__17846__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17845__auto__)]);
if(!((m__17846__auto__ == null))){
return m__17846__auto__.call(null,m,ch);
} else {
var m__17846__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17846__auto____$1 == null))){
return m__17846__auto____$1.call(null,m,ch);
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
var x__17845__auto__ = (((m == null))?null:m);
var m__17846__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17845__auto__)]);
if(!((m__17846__auto__ == null))){
return m__17846__auto__.call(null,m);
} else {
var m__17846__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17846__auto____$1 == null))){
return m__17846__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async30257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30257 = (function (mult,ch,cs,meta30258){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30258 = meta30258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30259,meta30258__$1){
var self__ = this;
var _30259__$1 = this;
return (new cljs.core.async.t_cljs$core$async30257(self__.mult,self__.ch,self__.cs,meta30258__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30259){
var self__ = this;
var _30259__$1 = this;
return self__.meta30258;
});})(cs))
;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30257.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30258","meta30258",-1899820720,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30257";

cljs.core.async.t_cljs$core$async30257.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17788__auto__,writer__17789__auto__,opt__17790__auto__){
return cljs.core._write.call(null,writer__17789__auto__,"cljs.core.async/t_cljs$core$async30257");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30257 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30257(mult__$1,ch__$1,cs__$1,meta30258){
return (new cljs.core.async.t_cljs$core$async30257(mult__$1,ch__$1,cs__$1,meta30258));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30257(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21787__auto___30478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___30478,cs,m,dchan,dctr,done){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___30478,cs,m,dchan,dctr,done){
return (function (state_30390){
var state_val_30391 = (state_30390[(1)]);
if((state_val_30391 === (7))){
var inst_30386 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
var statearr_30392_30479 = state_30390__$1;
(statearr_30392_30479[(2)] = inst_30386);

(statearr_30392_30479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (20))){
var inst_30291 = (state_30390[(7)]);
var inst_30301 = cljs.core.first.call(null,inst_30291);
var inst_30302 = cljs.core.nth.call(null,inst_30301,(0),null);
var inst_30303 = cljs.core.nth.call(null,inst_30301,(1),null);
var state_30390__$1 = (function (){var statearr_30393 = state_30390;
(statearr_30393[(8)] = inst_30302);

return statearr_30393;
})();
if(cljs.core.truth_(inst_30303)){
var statearr_30394_30480 = state_30390__$1;
(statearr_30394_30480[(1)] = (22));

} else {
var statearr_30395_30481 = state_30390__$1;
(statearr_30395_30481[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (27))){
var inst_30262 = (state_30390[(9)]);
var inst_30338 = (state_30390[(10)]);
var inst_30333 = (state_30390[(11)]);
var inst_30331 = (state_30390[(12)]);
var inst_30338__$1 = cljs.core._nth.call(null,inst_30331,inst_30333);
var inst_30339 = cljs.core.async.put_BANG_.call(null,inst_30338__$1,inst_30262,done);
var state_30390__$1 = (function (){var statearr_30396 = state_30390;
(statearr_30396[(10)] = inst_30338__$1);

return statearr_30396;
})();
if(cljs.core.truth_(inst_30339)){
var statearr_30397_30482 = state_30390__$1;
(statearr_30397_30482[(1)] = (30));

} else {
var statearr_30398_30483 = state_30390__$1;
(statearr_30398_30483[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (1))){
var state_30390__$1 = state_30390;
var statearr_30399_30484 = state_30390__$1;
(statearr_30399_30484[(2)] = null);

(statearr_30399_30484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (24))){
var inst_30291 = (state_30390[(7)]);
var inst_30308 = (state_30390[(2)]);
var inst_30309 = cljs.core.next.call(null,inst_30291);
var inst_30271 = inst_30309;
var inst_30272 = null;
var inst_30273 = (0);
var inst_30274 = (0);
var state_30390__$1 = (function (){var statearr_30400 = state_30390;
(statearr_30400[(13)] = inst_30272);

(statearr_30400[(14)] = inst_30271);

(statearr_30400[(15)] = inst_30308);

(statearr_30400[(16)] = inst_30273);

(statearr_30400[(17)] = inst_30274);

return statearr_30400;
})();
var statearr_30401_30485 = state_30390__$1;
(statearr_30401_30485[(2)] = null);

(statearr_30401_30485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (39))){
var state_30390__$1 = state_30390;
var statearr_30405_30486 = state_30390__$1;
(statearr_30405_30486[(2)] = null);

(statearr_30405_30486[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (4))){
var inst_30262 = (state_30390[(9)]);
var inst_30262__$1 = (state_30390[(2)]);
var inst_30263 = (inst_30262__$1 == null);
var state_30390__$1 = (function (){var statearr_30406 = state_30390;
(statearr_30406[(9)] = inst_30262__$1);

return statearr_30406;
})();
if(cljs.core.truth_(inst_30263)){
var statearr_30407_30487 = state_30390__$1;
(statearr_30407_30487[(1)] = (5));

} else {
var statearr_30408_30488 = state_30390__$1;
(statearr_30408_30488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (15))){
var inst_30272 = (state_30390[(13)]);
var inst_30271 = (state_30390[(14)]);
var inst_30273 = (state_30390[(16)]);
var inst_30274 = (state_30390[(17)]);
var inst_30287 = (state_30390[(2)]);
var inst_30288 = (inst_30274 + (1));
var tmp30402 = inst_30272;
var tmp30403 = inst_30271;
var tmp30404 = inst_30273;
var inst_30271__$1 = tmp30403;
var inst_30272__$1 = tmp30402;
var inst_30273__$1 = tmp30404;
var inst_30274__$1 = inst_30288;
var state_30390__$1 = (function (){var statearr_30409 = state_30390;
(statearr_30409[(18)] = inst_30287);

(statearr_30409[(13)] = inst_30272__$1);

(statearr_30409[(14)] = inst_30271__$1);

(statearr_30409[(16)] = inst_30273__$1);

(statearr_30409[(17)] = inst_30274__$1);

return statearr_30409;
})();
var statearr_30410_30489 = state_30390__$1;
(statearr_30410_30489[(2)] = null);

(statearr_30410_30489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (21))){
var inst_30312 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
var statearr_30414_30490 = state_30390__$1;
(statearr_30414_30490[(2)] = inst_30312);

(statearr_30414_30490[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (31))){
var inst_30338 = (state_30390[(10)]);
var inst_30342 = done.call(null,null);
var inst_30343 = cljs.core.async.untap_STAR_.call(null,m,inst_30338);
var state_30390__$1 = (function (){var statearr_30415 = state_30390;
(statearr_30415[(19)] = inst_30342);

return statearr_30415;
})();
var statearr_30416_30491 = state_30390__$1;
(statearr_30416_30491[(2)] = inst_30343);

(statearr_30416_30491[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (32))){
var inst_30330 = (state_30390[(20)]);
var inst_30333 = (state_30390[(11)]);
var inst_30332 = (state_30390[(21)]);
var inst_30331 = (state_30390[(12)]);
var inst_30345 = (state_30390[(2)]);
var inst_30346 = (inst_30333 + (1));
var tmp30411 = inst_30330;
var tmp30412 = inst_30332;
var tmp30413 = inst_30331;
var inst_30330__$1 = tmp30411;
var inst_30331__$1 = tmp30413;
var inst_30332__$1 = tmp30412;
var inst_30333__$1 = inst_30346;
var state_30390__$1 = (function (){var statearr_30417 = state_30390;
(statearr_30417[(22)] = inst_30345);

(statearr_30417[(20)] = inst_30330__$1);

(statearr_30417[(11)] = inst_30333__$1);

(statearr_30417[(21)] = inst_30332__$1);

(statearr_30417[(12)] = inst_30331__$1);

return statearr_30417;
})();
var statearr_30418_30492 = state_30390__$1;
(statearr_30418_30492[(2)] = null);

(statearr_30418_30492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (40))){
var inst_30358 = (state_30390[(23)]);
var inst_30362 = done.call(null,null);
var inst_30363 = cljs.core.async.untap_STAR_.call(null,m,inst_30358);
var state_30390__$1 = (function (){var statearr_30419 = state_30390;
(statearr_30419[(24)] = inst_30362);

return statearr_30419;
})();
var statearr_30420_30493 = state_30390__$1;
(statearr_30420_30493[(2)] = inst_30363);

(statearr_30420_30493[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (33))){
var inst_30349 = (state_30390[(25)]);
var inst_30351 = cljs.core.chunked_seq_QMARK_.call(null,inst_30349);
var state_30390__$1 = state_30390;
if(inst_30351){
var statearr_30421_30494 = state_30390__$1;
(statearr_30421_30494[(1)] = (36));

} else {
var statearr_30422_30495 = state_30390__$1;
(statearr_30422_30495[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (13))){
var inst_30281 = (state_30390[(26)]);
var inst_30284 = cljs.core.async.close_BANG_.call(null,inst_30281);
var state_30390__$1 = state_30390;
var statearr_30423_30496 = state_30390__$1;
(statearr_30423_30496[(2)] = inst_30284);

(statearr_30423_30496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (22))){
var inst_30302 = (state_30390[(8)]);
var inst_30305 = cljs.core.async.close_BANG_.call(null,inst_30302);
var state_30390__$1 = state_30390;
var statearr_30424_30497 = state_30390__$1;
(statearr_30424_30497[(2)] = inst_30305);

(statearr_30424_30497[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (36))){
var inst_30349 = (state_30390[(25)]);
var inst_30353 = cljs.core.chunk_first.call(null,inst_30349);
var inst_30354 = cljs.core.chunk_rest.call(null,inst_30349);
var inst_30355 = cljs.core.count.call(null,inst_30353);
var inst_30330 = inst_30354;
var inst_30331 = inst_30353;
var inst_30332 = inst_30355;
var inst_30333 = (0);
var state_30390__$1 = (function (){var statearr_30425 = state_30390;
(statearr_30425[(20)] = inst_30330);

(statearr_30425[(11)] = inst_30333);

(statearr_30425[(21)] = inst_30332);

(statearr_30425[(12)] = inst_30331);

return statearr_30425;
})();
var statearr_30426_30498 = state_30390__$1;
(statearr_30426_30498[(2)] = null);

(statearr_30426_30498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (41))){
var inst_30349 = (state_30390[(25)]);
var inst_30365 = (state_30390[(2)]);
var inst_30366 = cljs.core.next.call(null,inst_30349);
var inst_30330 = inst_30366;
var inst_30331 = null;
var inst_30332 = (0);
var inst_30333 = (0);
var state_30390__$1 = (function (){var statearr_30427 = state_30390;
(statearr_30427[(20)] = inst_30330);

(statearr_30427[(11)] = inst_30333);

(statearr_30427[(27)] = inst_30365);

(statearr_30427[(21)] = inst_30332);

(statearr_30427[(12)] = inst_30331);

return statearr_30427;
})();
var statearr_30428_30499 = state_30390__$1;
(statearr_30428_30499[(2)] = null);

(statearr_30428_30499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (43))){
var state_30390__$1 = state_30390;
var statearr_30429_30500 = state_30390__$1;
(statearr_30429_30500[(2)] = null);

(statearr_30429_30500[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (29))){
var inst_30374 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
var statearr_30430_30501 = state_30390__$1;
(statearr_30430_30501[(2)] = inst_30374);

(statearr_30430_30501[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (44))){
var inst_30383 = (state_30390[(2)]);
var state_30390__$1 = (function (){var statearr_30431 = state_30390;
(statearr_30431[(28)] = inst_30383);

return statearr_30431;
})();
var statearr_30432_30502 = state_30390__$1;
(statearr_30432_30502[(2)] = null);

(statearr_30432_30502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (6))){
var inst_30322 = (state_30390[(29)]);
var inst_30321 = cljs.core.deref.call(null,cs);
var inst_30322__$1 = cljs.core.keys.call(null,inst_30321);
var inst_30323 = cljs.core.count.call(null,inst_30322__$1);
var inst_30324 = cljs.core.reset_BANG_.call(null,dctr,inst_30323);
var inst_30329 = cljs.core.seq.call(null,inst_30322__$1);
var inst_30330 = inst_30329;
var inst_30331 = null;
var inst_30332 = (0);
var inst_30333 = (0);
var state_30390__$1 = (function (){var statearr_30433 = state_30390;
(statearr_30433[(29)] = inst_30322__$1);

(statearr_30433[(20)] = inst_30330);

(statearr_30433[(11)] = inst_30333);

(statearr_30433[(30)] = inst_30324);

(statearr_30433[(21)] = inst_30332);

(statearr_30433[(12)] = inst_30331);

return statearr_30433;
})();
var statearr_30434_30503 = state_30390__$1;
(statearr_30434_30503[(2)] = null);

(statearr_30434_30503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (28))){
var inst_30330 = (state_30390[(20)]);
var inst_30349 = (state_30390[(25)]);
var inst_30349__$1 = cljs.core.seq.call(null,inst_30330);
var state_30390__$1 = (function (){var statearr_30435 = state_30390;
(statearr_30435[(25)] = inst_30349__$1);

return statearr_30435;
})();
if(inst_30349__$1){
var statearr_30436_30504 = state_30390__$1;
(statearr_30436_30504[(1)] = (33));

} else {
var statearr_30437_30505 = state_30390__$1;
(statearr_30437_30505[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (25))){
var inst_30333 = (state_30390[(11)]);
var inst_30332 = (state_30390[(21)]);
var inst_30335 = (inst_30333 < inst_30332);
var inst_30336 = inst_30335;
var state_30390__$1 = state_30390;
if(cljs.core.truth_(inst_30336)){
var statearr_30438_30506 = state_30390__$1;
(statearr_30438_30506[(1)] = (27));

} else {
var statearr_30439_30507 = state_30390__$1;
(statearr_30439_30507[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (34))){
var state_30390__$1 = state_30390;
var statearr_30440_30508 = state_30390__$1;
(statearr_30440_30508[(2)] = null);

(statearr_30440_30508[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (17))){
var state_30390__$1 = state_30390;
var statearr_30441_30509 = state_30390__$1;
(statearr_30441_30509[(2)] = null);

(statearr_30441_30509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (3))){
var inst_30388 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30390__$1,inst_30388);
} else {
if((state_val_30391 === (12))){
var inst_30317 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
var statearr_30442_30510 = state_30390__$1;
(statearr_30442_30510[(2)] = inst_30317);

(statearr_30442_30510[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (2))){
var state_30390__$1 = state_30390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30390__$1,(4),ch);
} else {
if((state_val_30391 === (23))){
var state_30390__$1 = state_30390;
var statearr_30443_30511 = state_30390__$1;
(statearr_30443_30511[(2)] = null);

(statearr_30443_30511[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (35))){
var inst_30372 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
var statearr_30444_30512 = state_30390__$1;
(statearr_30444_30512[(2)] = inst_30372);

(statearr_30444_30512[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (19))){
var inst_30291 = (state_30390[(7)]);
var inst_30295 = cljs.core.chunk_first.call(null,inst_30291);
var inst_30296 = cljs.core.chunk_rest.call(null,inst_30291);
var inst_30297 = cljs.core.count.call(null,inst_30295);
var inst_30271 = inst_30296;
var inst_30272 = inst_30295;
var inst_30273 = inst_30297;
var inst_30274 = (0);
var state_30390__$1 = (function (){var statearr_30445 = state_30390;
(statearr_30445[(13)] = inst_30272);

(statearr_30445[(14)] = inst_30271);

(statearr_30445[(16)] = inst_30273);

(statearr_30445[(17)] = inst_30274);

return statearr_30445;
})();
var statearr_30446_30513 = state_30390__$1;
(statearr_30446_30513[(2)] = null);

(statearr_30446_30513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (11))){
var inst_30271 = (state_30390[(14)]);
var inst_30291 = (state_30390[(7)]);
var inst_30291__$1 = cljs.core.seq.call(null,inst_30271);
var state_30390__$1 = (function (){var statearr_30447 = state_30390;
(statearr_30447[(7)] = inst_30291__$1);

return statearr_30447;
})();
if(inst_30291__$1){
var statearr_30448_30514 = state_30390__$1;
(statearr_30448_30514[(1)] = (16));

} else {
var statearr_30449_30515 = state_30390__$1;
(statearr_30449_30515[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (9))){
var inst_30319 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
var statearr_30450_30516 = state_30390__$1;
(statearr_30450_30516[(2)] = inst_30319);

(statearr_30450_30516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (5))){
var inst_30269 = cljs.core.deref.call(null,cs);
var inst_30270 = cljs.core.seq.call(null,inst_30269);
var inst_30271 = inst_30270;
var inst_30272 = null;
var inst_30273 = (0);
var inst_30274 = (0);
var state_30390__$1 = (function (){var statearr_30451 = state_30390;
(statearr_30451[(13)] = inst_30272);

(statearr_30451[(14)] = inst_30271);

(statearr_30451[(16)] = inst_30273);

(statearr_30451[(17)] = inst_30274);

return statearr_30451;
})();
var statearr_30452_30517 = state_30390__$1;
(statearr_30452_30517[(2)] = null);

(statearr_30452_30517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (14))){
var state_30390__$1 = state_30390;
var statearr_30453_30518 = state_30390__$1;
(statearr_30453_30518[(2)] = null);

(statearr_30453_30518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (45))){
var inst_30380 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
var statearr_30454_30519 = state_30390__$1;
(statearr_30454_30519[(2)] = inst_30380);

(statearr_30454_30519[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (26))){
var inst_30322 = (state_30390[(29)]);
var inst_30376 = (state_30390[(2)]);
var inst_30377 = cljs.core.seq.call(null,inst_30322);
var state_30390__$1 = (function (){var statearr_30455 = state_30390;
(statearr_30455[(31)] = inst_30376);

return statearr_30455;
})();
if(inst_30377){
var statearr_30456_30520 = state_30390__$1;
(statearr_30456_30520[(1)] = (42));

} else {
var statearr_30457_30521 = state_30390__$1;
(statearr_30457_30521[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (16))){
var inst_30291 = (state_30390[(7)]);
var inst_30293 = cljs.core.chunked_seq_QMARK_.call(null,inst_30291);
var state_30390__$1 = state_30390;
if(inst_30293){
var statearr_30458_30522 = state_30390__$1;
(statearr_30458_30522[(1)] = (19));

} else {
var statearr_30459_30523 = state_30390__$1;
(statearr_30459_30523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (38))){
var inst_30369 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
var statearr_30460_30524 = state_30390__$1;
(statearr_30460_30524[(2)] = inst_30369);

(statearr_30460_30524[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (30))){
var state_30390__$1 = state_30390;
var statearr_30461_30525 = state_30390__$1;
(statearr_30461_30525[(2)] = null);

(statearr_30461_30525[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (10))){
var inst_30272 = (state_30390[(13)]);
var inst_30274 = (state_30390[(17)]);
var inst_30280 = cljs.core._nth.call(null,inst_30272,inst_30274);
var inst_30281 = cljs.core.nth.call(null,inst_30280,(0),null);
var inst_30282 = cljs.core.nth.call(null,inst_30280,(1),null);
var state_30390__$1 = (function (){var statearr_30462 = state_30390;
(statearr_30462[(26)] = inst_30281);

return statearr_30462;
})();
if(cljs.core.truth_(inst_30282)){
var statearr_30463_30526 = state_30390__$1;
(statearr_30463_30526[(1)] = (13));

} else {
var statearr_30464_30527 = state_30390__$1;
(statearr_30464_30527[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (18))){
var inst_30315 = (state_30390[(2)]);
var state_30390__$1 = state_30390;
var statearr_30465_30528 = state_30390__$1;
(statearr_30465_30528[(2)] = inst_30315);

(statearr_30465_30528[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (42))){
var state_30390__$1 = state_30390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30390__$1,(45),dchan);
} else {
if((state_val_30391 === (37))){
var inst_30262 = (state_30390[(9)]);
var inst_30358 = (state_30390[(23)]);
var inst_30349 = (state_30390[(25)]);
var inst_30358__$1 = cljs.core.first.call(null,inst_30349);
var inst_30359 = cljs.core.async.put_BANG_.call(null,inst_30358__$1,inst_30262,done);
var state_30390__$1 = (function (){var statearr_30466 = state_30390;
(statearr_30466[(23)] = inst_30358__$1);

return statearr_30466;
})();
if(cljs.core.truth_(inst_30359)){
var statearr_30467_30529 = state_30390__$1;
(statearr_30467_30529[(1)] = (39));

} else {
var statearr_30468_30530 = state_30390__$1;
(statearr_30468_30530[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30391 === (8))){
var inst_30273 = (state_30390[(16)]);
var inst_30274 = (state_30390[(17)]);
var inst_30276 = (inst_30274 < inst_30273);
var inst_30277 = inst_30276;
var state_30390__$1 = state_30390;
if(cljs.core.truth_(inst_30277)){
var statearr_30469_30531 = state_30390__$1;
(statearr_30469_30531[(1)] = (10));

} else {
var statearr_30470_30532 = state_30390__$1;
(statearr_30470_30532[(1)] = (11));

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
});})(c__21787__auto___30478,cs,m,dchan,dctr,done))
;
return ((function (switch__21722__auto__,c__21787__auto___30478,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21723__auto__ = null;
var cljs$core$async$mult_$_state_machine__21723__auto____0 = (function (){
var statearr_30474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30474[(0)] = cljs$core$async$mult_$_state_machine__21723__auto__);

(statearr_30474[(1)] = (1));

return statearr_30474;
});
var cljs$core$async$mult_$_state_machine__21723__auto____1 = (function (state_30390){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_30390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e30475){if((e30475 instanceof Object)){
var ex__21726__auto__ = e30475;
var statearr_30476_30533 = state_30390;
(statearr_30476_30533[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30534 = state_30390;
state_30390 = G__30534;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21723__auto__ = function(state_30390){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21723__auto____1.call(this,state_30390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21723__auto____0;
cljs$core$async$mult_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21723__auto____1;
return cljs$core$async$mult_$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___30478,cs,m,dchan,dctr,done))
})();
var state__21789__auto__ = (function (){var statearr_30477 = f__21788__auto__.call(null);
(statearr_30477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___30478);

return statearr_30477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___30478,cs,m,dchan,dctr,done))
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
var args30535 = [];
var len__18248__auto___30538 = arguments.length;
var i__18249__auto___30539 = (0);
while(true){
if((i__18249__auto___30539 < len__18248__auto___30538)){
args30535.push((arguments[i__18249__auto___30539]));

var G__30540 = (i__18249__auto___30539 + (1));
i__18249__auto___30539 = G__30540;
continue;
} else {
}
break;
}

var G__30537 = args30535.length;
switch (G__30537) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30535.length)].join('')));

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
var x__17845__auto__ = (((m == null))?null:m);
var m__17846__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17845__auto__)]);
if(!((m__17846__auto__ == null))){
return m__17846__auto__.call(null,m,ch);
} else {
var m__17846__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17846__auto____$1 == null))){
return m__17846__auto____$1.call(null,m,ch);
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
var x__17845__auto__ = (((m == null))?null:m);
var m__17846__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17845__auto__)]);
if(!((m__17846__auto__ == null))){
return m__17846__auto__.call(null,m,ch);
} else {
var m__17846__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17846__auto____$1 == null))){
return m__17846__auto____$1.call(null,m,ch);
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
var x__17845__auto__ = (((m == null))?null:m);
var m__17846__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17845__auto__)]);
if(!((m__17846__auto__ == null))){
return m__17846__auto__.call(null,m);
} else {
var m__17846__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17846__auto____$1 == null))){
return m__17846__auto____$1.call(null,m);
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
var x__17845__auto__ = (((m == null))?null:m);
var m__17846__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17845__auto__)]);
if(!((m__17846__auto__ == null))){
return m__17846__auto__.call(null,m,state_map);
} else {
var m__17846__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17846__auto____$1 == null))){
return m__17846__auto____$1.call(null,m,state_map);
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
var x__17845__auto__ = (((m == null))?null:m);
var m__17846__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17845__auto__)]);
if(!((m__17846__auto__ == null))){
return m__17846__auto__.call(null,m,mode);
} else {
var m__17846__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17846__auto____$1 == null))){
return m__17846__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__18255__auto__ = [];
var len__18248__auto___30552 = arguments.length;
var i__18249__auto___30553 = (0);
while(true){
if((i__18249__auto___30553 < len__18248__auto___30552)){
args__18255__auto__.push((arguments[i__18249__auto___30553]));

var G__30554 = (i__18249__auto___30553 + (1));
i__18249__auto___30553 = G__30554;
continue;
} else {
}
break;
}

var argseq__18256__auto__ = ((((3) < args__18255__auto__.length))?(new cljs.core.IndexedSeq(args__18255__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18256__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30546){
var map__30547 = p__30546;
var map__30547__$1 = ((((!((map__30547 == null)))?((((map__30547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30547):map__30547);
var opts = map__30547__$1;
var statearr_30549_30555 = state;
(statearr_30549_30555[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__30547,map__30547__$1,opts){
return (function (val){
var statearr_30550_30556 = state;
(statearr_30550_30556[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30547,map__30547__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_30551_30557 = state;
(statearr_30551_30557[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30542){
var G__30543 = cljs.core.first.call(null,seq30542);
var seq30542__$1 = cljs.core.next.call(null,seq30542);
var G__30544 = cljs.core.first.call(null,seq30542__$1);
var seq30542__$2 = cljs.core.next.call(null,seq30542__$1);
var G__30545 = cljs.core.first.call(null,seq30542__$2);
var seq30542__$3 = cljs.core.next.call(null,seq30542__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30543,G__30544,G__30545,seq30542__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30721 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30721 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30722){
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
this.meta30722 = meta30722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30723,meta30722__$1){
var self__ = this;
var _30723__$1 = this;
return (new cljs.core.async.t_cljs$core$async30721(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30722__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30723){
var self__ = this;
var _30723__$1 = this;
return self__.meta30722;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30721.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30721.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30721.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30721.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30721.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30721.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30721.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30721.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30721.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30722","meta30722",-1249521225,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30721";

cljs.core.async.t_cljs$core$async30721.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17788__auto__,writer__17789__auto__,opt__17790__auto__){
return cljs.core._write.call(null,writer__17789__auto__,"cljs.core.async/t_cljs$core$async30721");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30721 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30721(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30722){
return (new cljs.core.async.t_cljs$core$async30721(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30722));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30721(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21787__auto___30884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___30884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___30884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30821){
var state_val_30822 = (state_30821[(1)]);
if((state_val_30822 === (7))){
var inst_30739 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30823_30885 = state_30821__$1;
(statearr_30823_30885[(2)] = inst_30739);

(statearr_30823_30885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (20))){
var inst_30751 = (state_30821[(7)]);
var state_30821__$1 = state_30821;
var statearr_30824_30886 = state_30821__$1;
(statearr_30824_30886[(2)] = inst_30751);

(statearr_30824_30886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (27))){
var state_30821__$1 = state_30821;
var statearr_30825_30887 = state_30821__$1;
(statearr_30825_30887[(2)] = null);

(statearr_30825_30887[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (1))){
var inst_30727 = (state_30821[(8)]);
var inst_30727__$1 = calc_state.call(null);
var inst_30729 = (inst_30727__$1 == null);
var inst_30730 = cljs.core.not.call(null,inst_30729);
var state_30821__$1 = (function (){var statearr_30826 = state_30821;
(statearr_30826[(8)] = inst_30727__$1);

return statearr_30826;
})();
if(inst_30730){
var statearr_30827_30888 = state_30821__$1;
(statearr_30827_30888[(1)] = (2));

} else {
var statearr_30828_30889 = state_30821__$1;
(statearr_30828_30889[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (24))){
var inst_30774 = (state_30821[(9)]);
var inst_30781 = (state_30821[(10)]);
var inst_30795 = (state_30821[(11)]);
var inst_30795__$1 = inst_30774.call(null,inst_30781);
var state_30821__$1 = (function (){var statearr_30829 = state_30821;
(statearr_30829[(11)] = inst_30795__$1);

return statearr_30829;
})();
if(cljs.core.truth_(inst_30795__$1)){
var statearr_30830_30890 = state_30821__$1;
(statearr_30830_30890[(1)] = (29));

} else {
var statearr_30831_30891 = state_30821__$1;
(statearr_30831_30891[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (4))){
var inst_30742 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
if(cljs.core.truth_(inst_30742)){
var statearr_30832_30892 = state_30821__$1;
(statearr_30832_30892[(1)] = (8));

} else {
var statearr_30833_30893 = state_30821__$1;
(statearr_30833_30893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (15))){
var inst_30768 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
if(cljs.core.truth_(inst_30768)){
var statearr_30834_30894 = state_30821__$1;
(statearr_30834_30894[(1)] = (19));

} else {
var statearr_30835_30895 = state_30821__$1;
(statearr_30835_30895[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (21))){
var inst_30773 = (state_30821[(12)]);
var inst_30773__$1 = (state_30821[(2)]);
var inst_30774 = cljs.core.get.call(null,inst_30773__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30775 = cljs.core.get.call(null,inst_30773__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30776 = cljs.core.get.call(null,inst_30773__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30821__$1 = (function (){var statearr_30836 = state_30821;
(statearr_30836[(9)] = inst_30774);

(statearr_30836[(13)] = inst_30775);

(statearr_30836[(12)] = inst_30773__$1);

return statearr_30836;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30821__$1,(22),inst_30776);
} else {
if((state_val_30822 === (31))){
var inst_30803 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
if(cljs.core.truth_(inst_30803)){
var statearr_30837_30896 = state_30821__$1;
(statearr_30837_30896[(1)] = (32));

} else {
var statearr_30838_30897 = state_30821__$1;
(statearr_30838_30897[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (32))){
var inst_30780 = (state_30821[(14)]);
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30821__$1,(35),out,inst_30780);
} else {
if((state_val_30822 === (33))){
var inst_30773 = (state_30821[(12)]);
var inst_30751 = inst_30773;
var state_30821__$1 = (function (){var statearr_30839 = state_30821;
(statearr_30839[(7)] = inst_30751);

return statearr_30839;
})();
var statearr_30840_30898 = state_30821__$1;
(statearr_30840_30898[(2)] = null);

(statearr_30840_30898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (13))){
var inst_30751 = (state_30821[(7)]);
var inst_30758 = inst_30751.cljs$lang$protocol_mask$partition0$;
var inst_30759 = (inst_30758 & (64));
var inst_30760 = inst_30751.cljs$core$ISeq$;
var inst_30761 = (inst_30759) || (inst_30760);
var state_30821__$1 = state_30821;
if(cljs.core.truth_(inst_30761)){
var statearr_30841_30899 = state_30821__$1;
(statearr_30841_30899[(1)] = (16));

} else {
var statearr_30842_30900 = state_30821__$1;
(statearr_30842_30900[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (22))){
var inst_30781 = (state_30821[(10)]);
var inst_30780 = (state_30821[(14)]);
var inst_30779 = (state_30821[(2)]);
var inst_30780__$1 = cljs.core.nth.call(null,inst_30779,(0),null);
var inst_30781__$1 = cljs.core.nth.call(null,inst_30779,(1),null);
var inst_30782 = (inst_30780__$1 == null);
var inst_30783 = cljs.core._EQ_.call(null,inst_30781__$1,change);
var inst_30784 = (inst_30782) || (inst_30783);
var state_30821__$1 = (function (){var statearr_30843 = state_30821;
(statearr_30843[(10)] = inst_30781__$1);

(statearr_30843[(14)] = inst_30780__$1);

return statearr_30843;
})();
if(cljs.core.truth_(inst_30784)){
var statearr_30844_30901 = state_30821__$1;
(statearr_30844_30901[(1)] = (23));

} else {
var statearr_30845_30902 = state_30821__$1;
(statearr_30845_30902[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (36))){
var inst_30773 = (state_30821[(12)]);
var inst_30751 = inst_30773;
var state_30821__$1 = (function (){var statearr_30846 = state_30821;
(statearr_30846[(7)] = inst_30751);

return statearr_30846;
})();
var statearr_30847_30903 = state_30821__$1;
(statearr_30847_30903[(2)] = null);

(statearr_30847_30903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (29))){
var inst_30795 = (state_30821[(11)]);
var state_30821__$1 = state_30821;
var statearr_30848_30904 = state_30821__$1;
(statearr_30848_30904[(2)] = inst_30795);

(statearr_30848_30904[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (6))){
var state_30821__$1 = state_30821;
var statearr_30849_30905 = state_30821__$1;
(statearr_30849_30905[(2)] = false);

(statearr_30849_30905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (28))){
var inst_30791 = (state_30821[(2)]);
var inst_30792 = calc_state.call(null);
var inst_30751 = inst_30792;
var state_30821__$1 = (function (){var statearr_30850 = state_30821;
(statearr_30850[(7)] = inst_30751);

(statearr_30850[(15)] = inst_30791);

return statearr_30850;
})();
var statearr_30851_30906 = state_30821__$1;
(statearr_30851_30906[(2)] = null);

(statearr_30851_30906[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (25))){
var inst_30817 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30852_30907 = state_30821__$1;
(statearr_30852_30907[(2)] = inst_30817);

(statearr_30852_30907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (34))){
var inst_30815 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30853_30908 = state_30821__$1;
(statearr_30853_30908[(2)] = inst_30815);

(statearr_30853_30908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (17))){
var state_30821__$1 = state_30821;
var statearr_30854_30909 = state_30821__$1;
(statearr_30854_30909[(2)] = false);

(statearr_30854_30909[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (3))){
var state_30821__$1 = state_30821;
var statearr_30855_30910 = state_30821__$1;
(statearr_30855_30910[(2)] = false);

(statearr_30855_30910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (12))){
var inst_30819 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30821__$1,inst_30819);
} else {
if((state_val_30822 === (2))){
var inst_30727 = (state_30821[(8)]);
var inst_30732 = inst_30727.cljs$lang$protocol_mask$partition0$;
var inst_30733 = (inst_30732 & (64));
var inst_30734 = inst_30727.cljs$core$ISeq$;
var inst_30735 = (inst_30733) || (inst_30734);
var state_30821__$1 = state_30821;
if(cljs.core.truth_(inst_30735)){
var statearr_30856_30911 = state_30821__$1;
(statearr_30856_30911[(1)] = (5));

} else {
var statearr_30857_30912 = state_30821__$1;
(statearr_30857_30912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (23))){
var inst_30780 = (state_30821[(14)]);
var inst_30786 = (inst_30780 == null);
var state_30821__$1 = state_30821;
if(cljs.core.truth_(inst_30786)){
var statearr_30858_30913 = state_30821__$1;
(statearr_30858_30913[(1)] = (26));

} else {
var statearr_30859_30914 = state_30821__$1;
(statearr_30859_30914[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (35))){
var inst_30806 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
if(cljs.core.truth_(inst_30806)){
var statearr_30860_30915 = state_30821__$1;
(statearr_30860_30915[(1)] = (36));

} else {
var statearr_30861_30916 = state_30821__$1;
(statearr_30861_30916[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (19))){
var inst_30751 = (state_30821[(7)]);
var inst_30770 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30751);
var state_30821__$1 = state_30821;
var statearr_30862_30917 = state_30821__$1;
(statearr_30862_30917[(2)] = inst_30770);

(statearr_30862_30917[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (11))){
var inst_30751 = (state_30821[(7)]);
var inst_30755 = (inst_30751 == null);
var inst_30756 = cljs.core.not.call(null,inst_30755);
var state_30821__$1 = state_30821;
if(inst_30756){
var statearr_30863_30918 = state_30821__$1;
(statearr_30863_30918[(1)] = (13));

} else {
var statearr_30864_30919 = state_30821__$1;
(statearr_30864_30919[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (9))){
var inst_30727 = (state_30821[(8)]);
var state_30821__$1 = state_30821;
var statearr_30865_30920 = state_30821__$1;
(statearr_30865_30920[(2)] = inst_30727);

(statearr_30865_30920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (5))){
var state_30821__$1 = state_30821;
var statearr_30866_30921 = state_30821__$1;
(statearr_30866_30921[(2)] = true);

(statearr_30866_30921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (14))){
var state_30821__$1 = state_30821;
var statearr_30867_30922 = state_30821__$1;
(statearr_30867_30922[(2)] = false);

(statearr_30867_30922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (26))){
var inst_30781 = (state_30821[(10)]);
var inst_30788 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30781);
var state_30821__$1 = state_30821;
var statearr_30868_30923 = state_30821__$1;
(statearr_30868_30923[(2)] = inst_30788);

(statearr_30868_30923[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (16))){
var state_30821__$1 = state_30821;
var statearr_30869_30924 = state_30821__$1;
(statearr_30869_30924[(2)] = true);

(statearr_30869_30924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (38))){
var inst_30811 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30870_30925 = state_30821__$1;
(statearr_30870_30925[(2)] = inst_30811);

(statearr_30870_30925[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (30))){
var inst_30774 = (state_30821[(9)]);
var inst_30775 = (state_30821[(13)]);
var inst_30781 = (state_30821[(10)]);
var inst_30798 = cljs.core.empty_QMARK_.call(null,inst_30774);
var inst_30799 = inst_30775.call(null,inst_30781);
var inst_30800 = cljs.core.not.call(null,inst_30799);
var inst_30801 = (inst_30798) && (inst_30800);
var state_30821__$1 = state_30821;
var statearr_30871_30926 = state_30821__$1;
(statearr_30871_30926[(2)] = inst_30801);

(statearr_30871_30926[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (10))){
var inst_30727 = (state_30821[(8)]);
var inst_30747 = (state_30821[(2)]);
var inst_30748 = cljs.core.get.call(null,inst_30747,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30749 = cljs.core.get.call(null,inst_30747,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30750 = cljs.core.get.call(null,inst_30747,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30751 = inst_30727;
var state_30821__$1 = (function (){var statearr_30872 = state_30821;
(statearr_30872[(16)] = inst_30748);

(statearr_30872[(7)] = inst_30751);

(statearr_30872[(17)] = inst_30750);

(statearr_30872[(18)] = inst_30749);

return statearr_30872;
})();
var statearr_30873_30927 = state_30821__$1;
(statearr_30873_30927[(2)] = null);

(statearr_30873_30927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (18))){
var inst_30765 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30874_30928 = state_30821__$1;
(statearr_30874_30928[(2)] = inst_30765);

(statearr_30874_30928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (37))){
var state_30821__$1 = state_30821;
var statearr_30875_30929 = state_30821__$1;
(statearr_30875_30929[(2)] = null);

(statearr_30875_30929[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (8))){
var inst_30727 = (state_30821[(8)]);
var inst_30744 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30727);
var state_30821__$1 = state_30821;
var statearr_30876_30930 = state_30821__$1;
(statearr_30876_30930[(2)] = inst_30744);

(statearr_30876_30930[(1)] = (10));


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
});})(c__21787__auto___30884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21722__auto__,c__21787__auto___30884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21723__auto__ = null;
var cljs$core$async$mix_$_state_machine__21723__auto____0 = (function (){
var statearr_30880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30880[(0)] = cljs$core$async$mix_$_state_machine__21723__auto__);

(statearr_30880[(1)] = (1));

return statearr_30880;
});
var cljs$core$async$mix_$_state_machine__21723__auto____1 = (function (state_30821){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_30821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e30881){if((e30881 instanceof Object)){
var ex__21726__auto__ = e30881;
var statearr_30882_30931 = state_30821;
(statearr_30882_30931[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30932 = state_30821;
state_30821 = G__30932;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21723__auto__ = function(state_30821){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21723__auto____1.call(this,state_30821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21723__auto____0;
cljs$core$async$mix_$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21723__auto____1;
return cljs$core$async$mix_$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___30884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21789__auto__ = (function (){var statearr_30883 = f__21788__auto__.call(null);
(statearr_30883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___30884);

return statearr_30883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___30884,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17845__auto__ = (((p == null))?null:p);
var m__17846__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17845__auto__)]);
if(!((m__17846__auto__ == null))){
return m__17846__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17846__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17846__auto____$1 == null))){
return m__17846__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17845__auto__ = (((p == null))?null:p);
var m__17846__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17845__auto__)]);
if(!((m__17846__auto__ == null))){
return m__17846__auto__.call(null,p,v,ch);
} else {
var m__17846__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17846__auto____$1 == null))){
return m__17846__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30933 = [];
var len__18248__auto___30936 = arguments.length;
var i__18249__auto___30937 = (0);
while(true){
if((i__18249__auto___30937 < len__18248__auto___30936)){
args30933.push((arguments[i__18249__auto___30937]));

var G__30938 = (i__18249__auto___30937 + (1));
i__18249__auto___30937 = G__30938;
continue;
} else {
}
break;
}

var G__30935 = args30933.length;
switch (G__30935) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30933.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17845__auto__ = (((p == null))?null:p);
var m__17846__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17845__auto__)]);
if(!((m__17846__auto__ == null))){
return m__17846__auto__.call(null,p);
} else {
var m__17846__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17846__auto____$1 == null))){
return m__17846__auto____$1.call(null,p);
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
var x__17845__auto__ = (((p == null))?null:p);
var m__17846__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17845__auto__)]);
if(!((m__17846__auto__ == null))){
return m__17846__auto__.call(null,p,v);
} else {
var m__17846__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17846__auto____$1 == null))){
return m__17846__auto____$1.call(null,p,v);
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
var args30941 = [];
var len__18248__auto___31066 = arguments.length;
var i__18249__auto___31067 = (0);
while(true){
if((i__18249__auto___31067 < len__18248__auto___31066)){
args30941.push((arguments[i__18249__auto___31067]));

var G__31068 = (i__18249__auto___31067 + (1));
i__18249__auto___31067 = G__31068;
continue;
} else {
}
break;
}

var G__30943 = args30941.length;
switch (G__30943) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30941.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17190__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17190__auto__)){
return or__17190__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17190__auto__,mults){
return (function (p1__30940_SHARP_){
if(cljs.core.truth_(p1__30940_SHARP_.call(null,topic))){
return p1__30940_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30940_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17190__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30944 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30945){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30945 = meta30945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30946,meta30945__$1){
var self__ = this;
var _30946__$1 = this;
return (new cljs.core.async.t_cljs$core$async30944(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30945__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30946){
var self__ = this;
var _30946__$1 = this;
return self__.meta30945;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30944.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30944.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30945","meta30945",-312720953,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30944";

cljs.core.async.t_cljs$core$async30944.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17788__auto__,writer__17789__auto__,opt__17790__auto__){
return cljs.core._write.call(null,writer__17789__auto__,"cljs.core.async/t_cljs$core$async30944");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30944 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30944(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30945){
return (new cljs.core.async.t_cljs$core$async30944(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30945));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30944(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21787__auto___31070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___31070,mults,ensure_mult,p){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___31070,mults,ensure_mult,p){
return (function (state_31018){
var state_val_31019 = (state_31018[(1)]);
if((state_val_31019 === (7))){
var inst_31014 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31020_31071 = state_31018__$1;
(statearr_31020_31071[(2)] = inst_31014);

(statearr_31020_31071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (20))){
var state_31018__$1 = state_31018;
var statearr_31021_31072 = state_31018__$1;
(statearr_31021_31072[(2)] = null);

(statearr_31021_31072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (1))){
var state_31018__$1 = state_31018;
var statearr_31022_31073 = state_31018__$1;
(statearr_31022_31073[(2)] = null);

(statearr_31022_31073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (24))){
var inst_30997 = (state_31018[(7)]);
var inst_31006 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30997);
var state_31018__$1 = state_31018;
var statearr_31023_31074 = state_31018__$1;
(statearr_31023_31074[(2)] = inst_31006);

(statearr_31023_31074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (4))){
var inst_30949 = (state_31018[(8)]);
var inst_30949__$1 = (state_31018[(2)]);
var inst_30950 = (inst_30949__$1 == null);
var state_31018__$1 = (function (){var statearr_31024 = state_31018;
(statearr_31024[(8)] = inst_30949__$1);

return statearr_31024;
})();
if(cljs.core.truth_(inst_30950)){
var statearr_31025_31075 = state_31018__$1;
(statearr_31025_31075[(1)] = (5));

} else {
var statearr_31026_31076 = state_31018__$1;
(statearr_31026_31076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (15))){
var inst_30991 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31027_31077 = state_31018__$1;
(statearr_31027_31077[(2)] = inst_30991);

(statearr_31027_31077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (21))){
var inst_31011 = (state_31018[(2)]);
var state_31018__$1 = (function (){var statearr_31028 = state_31018;
(statearr_31028[(9)] = inst_31011);

return statearr_31028;
})();
var statearr_31029_31078 = state_31018__$1;
(statearr_31029_31078[(2)] = null);

(statearr_31029_31078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (13))){
var inst_30973 = (state_31018[(10)]);
var inst_30975 = cljs.core.chunked_seq_QMARK_.call(null,inst_30973);
var state_31018__$1 = state_31018;
if(inst_30975){
var statearr_31030_31079 = state_31018__$1;
(statearr_31030_31079[(1)] = (16));

} else {
var statearr_31031_31080 = state_31018__$1;
(statearr_31031_31080[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (22))){
var inst_31003 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
if(cljs.core.truth_(inst_31003)){
var statearr_31032_31081 = state_31018__$1;
(statearr_31032_31081[(1)] = (23));

} else {
var statearr_31033_31082 = state_31018__$1;
(statearr_31033_31082[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (6))){
var inst_30997 = (state_31018[(7)]);
var inst_30949 = (state_31018[(8)]);
var inst_30999 = (state_31018[(11)]);
var inst_30997__$1 = topic_fn.call(null,inst_30949);
var inst_30998 = cljs.core.deref.call(null,mults);
var inst_30999__$1 = cljs.core.get.call(null,inst_30998,inst_30997__$1);
var state_31018__$1 = (function (){var statearr_31034 = state_31018;
(statearr_31034[(7)] = inst_30997__$1);

(statearr_31034[(11)] = inst_30999__$1);

return statearr_31034;
})();
if(cljs.core.truth_(inst_30999__$1)){
var statearr_31035_31083 = state_31018__$1;
(statearr_31035_31083[(1)] = (19));

} else {
var statearr_31036_31084 = state_31018__$1;
(statearr_31036_31084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (25))){
var inst_31008 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31037_31085 = state_31018__$1;
(statearr_31037_31085[(2)] = inst_31008);

(statearr_31037_31085[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (17))){
var inst_30973 = (state_31018[(10)]);
var inst_30982 = cljs.core.first.call(null,inst_30973);
var inst_30983 = cljs.core.async.muxch_STAR_.call(null,inst_30982);
var inst_30984 = cljs.core.async.close_BANG_.call(null,inst_30983);
var inst_30985 = cljs.core.next.call(null,inst_30973);
var inst_30959 = inst_30985;
var inst_30960 = null;
var inst_30961 = (0);
var inst_30962 = (0);
var state_31018__$1 = (function (){var statearr_31038 = state_31018;
(statearr_31038[(12)] = inst_30962);

(statearr_31038[(13)] = inst_30984);

(statearr_31038[(14)] = inst_30960);

(statearr_31038[(15)] = inst_30959);

(statearr_31038[(16)] = inst_30961);

return statearr_31038;
})();
var statearr_31039_31086 = state_31018__$1;
(statearr_31039_31086[(2)] = null);

(statearr_31039_31086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (3))){
var inst_31016 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31018__$1,inst_31016);
} else {
if((state_val_31019 === (12))){
var inst_30993 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31040_31087 = state_31018__$1;
(statearr_31040_31087[(2)] = inst_30993);

(statearr_31040_31087[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (2))){
var state_31018__$1 = state_31018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31018__$1,(4),ch);
} else {
if((state_val_31019 === (23))){
var state_31018__$1 = state_31018;
var statearr_31041_31088 = state_31018__$1;
(statearr_31041_31088[(2)] = null);

(statearr_31041_31088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (19))){
var inst_30949 = (state_31018[(8)]);
var inst_30999 = (state_31018[(11)]);
var inst_31001 = cljs.core.async.muxch_STAR_.call(null,inst_30999);
var state_31018__$1 = state_31018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31018__$1,(22),inst_31001,inst_30949);
} else {
if((state_val_31019 === (11))){
var inst_30973 = (state_31018[(10)]);
var inst_30959 = (state_31018[(15)]);
var inst_30973__$1 = cljs.core.seq.call(null,inst_30959);
var state_31018__$1 = (function (){var statearr_31042 = state_31018;
(statearr_31042[(10)] = inst_30973__$1);

return statearr_31042;
})();
if(inst_30973__$1){
var statearr_31043_31089 = state_31018__$1;
(statearr_31043_31089[(1)] = (13));

} else {
var statearr_31044_31090 = state_31018__$1;
(statearr_31044_31090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (9))){
var inst_30995 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31045_31091 = state_31018__$1;
(statearr_31045_31091[(2)] = inst_30995);

(statearr_31045_31091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (5))){
var inst_30956 = cljs.core.deref.call(null,mults);
var inst_30957 = cljs.core.vals.call(null,inst_30956);
var inst_30958 = cljs.core.seq.call(null,inst_30957);
var inst_30959 = inst_30958;
var inst_30960 = null;
var inst_30961 = (0);
var inst_30962 = (0);
var state_31018__$1 = (function (){var statearr_31046 = state_31018;
(statearr_31046[(12)] = inst_30962);

(statearr_31046[(14)] = inst_30960);

(statearr_31046[(15)] = inst_30959);

(statearr_31046[(16)] = inst_30961);

return statearr_31046;
})();
var statearr_31047_31092 = state_31018__$1;
(statearr_31047_31092[(2)] = null);

(statearr_31047_31092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (14))){
var state_31018__$1 = state_31018;
var statearr_31051_31093 = state_31018__$1;
(statearr_31051_31093[(2)] = null);

(statearr_31051_31093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (16))){
var inst_30973 = (state_31018[(10)]);
var inst_30977 = cljs.core.chunk_first.call(null,inst_30973);
var inst_30978 = cljs.core.chunk_rest.call(null,inst_30973);
var inst_30979 = cljs.core.count.call(null,inst_30977);
var inst_30959 = inst_30978;
var inst_30960 = inst_30977;
var inst_30961 = inst_30979;
var inst_30962 = (0);
var state_31018__$1 = (function (){var statearr_31052 = state_31018;
(statearr_31052[(12)] = inst_30962);

(statearr_31052[(14)] = inst_30960);

(statearr_31052[(15)] = inst_30959);

(statearr_31052[(16)] = inst_30961);

return statearr_31052;
})();
var statearr_31053_31094 = state_31018__$1;
(statearr_31053_31094[(2)] = null);

(statearr_31053_31094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (10))){
var inst_30962 = (state_31018[(12)]);
var inst_30960 = (state_31018[(14)]);
var inst_30959 = (state_31018[(15)]);
var inst_30961 = (state_31018[(16)]);
var inst_30967 = cljs.core._nth.call(null,inst_30960,inst_30962);
var inst_30968 = cljs.core.async.muxch_STAR_.call(null,inst_30967);
var inst_30969 = cljs.core.async.close_BANG_.call(null,inst_30968);
var inst_30970 = (inst_30962 + (1));
var tmp31048 = inst_30960;
var tmp31049 = inst_30959;
var tmp31050 = inst_30961;
var inst_30959__$1 = tmp31049;
var inst_30960__$1 = tmp31048;
var inst_30961__$1 = tmp31050;
var inst_30962__$1 = inst_30970;
var state_31018__$1 = (function (){var statearr_31054 = state_31018;
(statearr_31054[(12)] = inst_30962__$1);

(statearr_31054[(17)] = inst_30969);

(statearr_31054[(14)] = inst_30960__$1);

(statearr_31054[(15)] = inst_30959__$1);

(statearr_31054[(16)] = inst_30961__$1);

return statearr_31054;
})();
var statearr_31055_31095 = state_31018__$1;
(statearr_31055_31095[(2)] = null);

(statearr_31055_31095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (18))){
var inst_30988 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31056_31096 = state_31018__$1;
(statearr_31056_31096[(2)] = inst_30988);

(statearr_31056_31096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (8))){
var inst_30962 = (state_31018[(12)]);
var inst_30961 = (state_31018[(16)]);
var inst_30964 = (inst_30962 < inst_30961);
var inst_30965 = inst_30964;
var state_31018__$1 = state_31018;
if(cljs.core.truth_(inst_30965)){
var statearr_31057_31097 = state_31018__$1;
(statearr_31057_31097[(1)] = (10));

} else {
var statearr_31058_31098 = state_31018__$1;
(statearr_31058_31098[(1)] = (11));

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
});})(c__21787__auto___31070,mults,ensure_mult,p))
;
return ((function (switch__21722__auto__,c__21787__auto___31070,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21723__auto__ = null;
var cljs$core$async$state_machine__21723__auto____0 = (function (){
var statearr_31062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31062[(0)] = cljs$core$async$state_machine__21723__auto__);

(statearr_31062[(1)] = (1));

return statearr_31062;
});
var cljs$core$async$state_machine__21723__auto____1 = (function (state_31018){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_31018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e31063){if((e31063 instanceof Object)){
var ex__21726__auto__ = e31063;
var statearr_31064_31099 = state_31018;
(statearr_31064_31099[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31100 = state_31018;
state_31018 = G__31100;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$state_machine__21723__auto__ = function(state_31018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21723__auto____1.call(this,state_31018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21723__auto____0;
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21723__auto____1;
return cljs$core$async$state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___31070,mults,ensure_mult,p))
})();
var state__21789__auto__ = (function (){var statearr_31065 = f__21788__auto__.call(null);
(statearr_31065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___31070);

return statearr_31065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___31070,mults,ensure_mult,p))
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
var args31101 = [];
var len__18248__auto___31104 = arguments.length;
var i__18249__auto___31105 = (0);
while(true){
if((i__18249__auto___31105 < len__18248__auto___31104)){
args31101.push((arguments[i__18249__auto___31105]));

var G__31106 = (i__18249__auto___31105 + (1));
i__18249__auto___31105 = G__31106;
continue;
} else {
}
break;
}

var G__31103 = args31101.length;
switch (G__31103) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31101.length)].join('')));

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
var args31108 = [];
var len__18248__auto___31111 = arguments.length;
var i__18249__auto___31112 = (0);
while(true){
if((i__18249__auto___31112 < len__18248__auto___31111)){
args31108.push((arguments[i__18249__auto___31112]));

var G__31113 = (i__18249__auto___31112 + (1));
i__18249__auto___31112 = G__31113;
continue;
} else {
}
break;
}

var G__31110 = args31108.length;
switch (G__31110) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31108.length)].join('')));

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
var args31115 = [];
var len__18248__auto___31186 = arguments.length;
var i__18249__auto___31187 = (0);
while(true){
if((i__18249__auto___31187 < len__18248__auto___31186)){
args31115.push((arguments[i__18249__auto___31187]));

var G__31188 = (i__18249__auto___31187 + (1));
i__18249__auto___31187 = G__31188;
continue;
} else {
}
break;
}

var G__31117 = args31115.length;
switch (G__31117) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31115.length)].join('')));

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
var c__21787__auto___31190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___31190,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___31190,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31156){
var state_val_31157 = (state_31156[(1)]);
if((state_val_31157 === (7))){
var state_31156__$1 = state_31156;
var statearr_31158_31191 = state_31156__$1;
(statearr_31158_31191[(2)] = null);

(statearr_31158_31191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (1))){
var state_31156__$1 = state_31156;
var statearr_31159_31192 = state_31156__$1;
(statearr_31159_31192[(2)] = null);

(statearr_31159_31192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (4))){
var inst_31120 = (state_31156[(7)]);
var inst_31122 = (inst_31120 < cnt);
var state_31156__$1 = state_31156;
if(cljs.core.truth_(inst_31122)){
var statearr_31160_31193 = state_31156__$1;
(statearr_31160_31193[(1)] = (6));

} else {
var statearr_31161_31194 = state_31156__$1;
(statearr_31161_31194[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (15))){
var inst_31152 = (state_31156[(2)]);
var state_31156__$1 = state_31156;
var statearr_31162_31195 = state_31156__$1;
(statearr_31162_31195[(2)] = inst_31152);

(statearr_31162_31195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (13))){
var inst_31145 = cljs.core.async.close_BANG_.call(null,out);
var state_31156__$1 = state_31156;
var statearr_31163_31196 = state_31156__$1;
(statearr_31163_31196[(2)] = inst_31145);

(statearr_31163_31196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (6))){
var state_31156__$1 = state_31156;
var statearr_31164_31197 = state_31156__$1;
(statearr_31164_31197[(2)] = null);

(statearr_31164_31197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (3))){
var inst_31154 = (state_31156[(2)]);
var state_31156__$1 = state_31156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31156__$1,inst_31154);
} else {
if((state_val_31157 === (12))){
var inst_31142 = (state_31156[(8)]);
var inst_31142__$1 = (state_31156[(2)]);
var inst_31143 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31142__$1);
var state_31156__$1 = (function (){var statearr_31165 = state_31156;
(statearr_31165[(8)] = inst_31142__$1);

return statearr_31165;
})();
if(cljs.core.truth_(inst_31143)){
var statearr_31166_31198 = state_31156__$1;
(statearr_31166_31198[(1)] = (13));

} else {
var statearr_31167_31199 = state_31156__$1;
(statearr_31167_31199[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (2))){
var inst_31119 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31120 = (0);
var state_31156__$1 = (function (){var statearr_31168 = state_31156;
(statearr_31168[(9)] = inst_31119);

(statearr_31168[(7)] = inst_31120);

return statearr_31168;
})();
var statearr_31169_31200 = state_31156__$1;
(statearr_31169_31200[(2)] = null);

(statearr_31169_31200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (11))){
var inst_31120 = (state_31156[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31156,(10),Object,null,(9));
var inst_31129 = chs__$1.call(null,inst_31120);
var inst_31130 = done.call(null,inst_31120);
var inst_31131 = cljs.core.async.take_BANG_.call(null,inst_31129,inst_31130);
var state_31156__$1 = state_31156;
var statearr_31170_31201 = state_31156__$1;
(statearr_31170_31201[(2)] = inst_31131);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31156__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (9))){
var inst_31120 = (state_31156[(7)]);
var inst_31133 = (state_31156[(2)]);
var inst_31134 = (inst_31120 + (1));
var inst_31120__$1 = inst_31134;
var state_31156__$1 = (function (){var statearr_31171 = state_31156;
(statearr_31171[(10)] = inst_31133);

(statearr_31171[(7)] = inst_31120__$1);

return statearr_31171;
})();
var statearr_31172_31202 = state_31156__$1;
(statearr_31172_31202[(2)] = null);

(statearr_31172_31202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (5))){
var inst_31140 = (state_31156[(2)]);
var state_31156__$1 = (function (){var statearr_31173 = state_31156;
(statearr_31173[(11)] = inst_31140);

return statearr_31173;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31156__$1,(12),dchan);
} else {
if((state_val_31157 === (14))){
var inst_31142 = (state_31156[(8)]);
var inst_31147 = cljs.core.apply.call(null,f,inst_31142);
var state_31156__$1 = state_31156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31156__$1,(16),out,inst_31147);
} else {
if((state_val_31157 === (16))){
var inst_31149 = (state_31156[(2)]);
var state_31156__$1 = (function (){var statearr_31174 = state_31156;
(statearr_31174[(12)] = inst_31149);

return statearr_31174;
})();
var statearr_31175_31203 = state_31156__$1;
(statearr_31175_31203[(2)] = null);

(statearr_31175_31203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (10))){
var inst_31124 = (state_31156[(2)]);
var inst_31125 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31156__$1 = (function (){var statearr_31176 = state_31156;
(statearr_31176[(13)] = inst_31124);

return statearr_31176;
})();
var statearr_31177_31204 = state_31156__$1;
(statearr_31177_31204[(2)] = inst_31125);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31156__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (8))){
var inst_31138 = (state_31156[(2)]);
var state_31156__$1 = state_31156;
var statearr_31178_31205 = state_31156__$1;
(statearr_31178_31205[(2)] = inst_31138);

(statearr_31178_31205[(1)] = (5));


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
});})(c__21787__auto___31190,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21722__auto__,c__21787__auto___31190,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21723__auto__ = null;
var cljs$core$async$state_machine__21723__auto____0 = (function (){
var statearr_31182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31182[(0)] = cljs$core$async$state_machine__21723__auto__);

(statearr_31182[(1)] = (1));

return statearr_31182;
});
var cljs$core$async$state_machine__21723__auto____1 = (function (state_31156){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_31156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e31183){if((e31183 instanceof Object)){
var ex__21726__auto__ = e31183;
var statearr_31184_31206 = state_31156;
(statearr_31184_31206[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31207 = state_31156;
state_31156 = G__31207;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$state_machine__21723__auto__ = function(state_31156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21723__auto____1.call(this,state_31156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21723__auto____0;
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21723__auto____1;
return cljs$core$async$state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___31190,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21789__auto__ = (function (){var statearr_31185 = f__21788__auto__.call(null);
(statearr_31185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___31190);

return statearr_31185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___31190,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31209 = [];
var len__18248__auto___31265 = arguments.length;
var i__18249__auto___31266 = (0);
while(true){
if((i__18249__auto___31266 < len__18248__auto___31265)){
args31209.push((arguments[i__18249__auto___31266]));

var G__31267 = (i__18249__auto___31266 + (1));
i__18249__auto___31266 = G__31267;
continue;
} else {
}
break;
}

var G__31211 = args31209.length;
switch (G__31211) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31209.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21787__auto___31269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___31269,out){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___31269,out){
return (function (state_31241){
var state_val_31242 = (state_31241[(1)]);
if((state_val_31242 === (7))){
var inst_31220 = (state_31241[(7)]);
var inst_31221 = (state_31241[(8)]);
var inst_31220__$1 = (state_31241[(2)]);
var inst_31221__$1 = cljs.core.nth.call(null,inst_31220__$1,(0),null);
var inst_31222 = cljs.core.nth.call(null,inst_31220__$1,(1),null);
var inst_31223 = (inst_31221__$1 == null);
var state_31241__$1 = (function (){var statearr_31243 = state_31241;
(statearr_31243[(7)] = inst_31220__$1);

(statearr_31243[(8)] = inst_31221__$1);

(statearr_31243[(9)] = inst_31222);

return statearr_31243;
})();
if(cljs.core.truth_(inst_31223)){
var statearr_31244_31270 = state_31241__$1;
(statearr_31244_31270[(1)] = (8));

} else {
var statearr_31245_31271 = state_31241__$1;
(statearr_31245_31271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (1))){
var inst_31212 = cljs.core.vec.call(null,chs);
var inst_31213 = inst_31212;
var state_31241__$1 = (function (){var statearr_31246 = state_31241;
(statearr_31246[(10)] = inst_31213);

return statearr_31246;
})();
var statearr_31247_31272 = state_31241__$1;
(statearr_31247_31272[(2)] = null);

(statearr_31247_31272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (4))){
var inst_31213 = (state_31241[(10)]);
var state_31241__$1 = state_31241;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31241__$1,(7),inst_31213);
} else {
if((state_val_31242 === (6))){
var inst_31237 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
var statearr_31248_31273 = state_31241__$1;
(statearr_31248_31273[(2)] = inst_31237);

(statearr_31248_31273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (3))){
var inst_31239 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31241__$1,inst_31239);
} else {
if((state_val_31242 === (2))){
var inst_31213 = (state_31241[(10)]);
var inst_31215 = cljs.core.count.call(null,inst_31213);
var inst_31216 = (inst_31215 > (0));
var state_31241__$1 = state_31241;
if(cljs.core.truth_(inst_31216)){
var statearr_31250_31274 = state_31241__$1;
(statearr_31250_31274[(1)] = (4));

} else {
var statearr_31251_31275 = state_31241__$1;
(statearr_31251_31275[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (11))){
var inst_31213 = (state_31241[(10)]);
var inst_31230 = (state_31241[(2)]);
var tmp31249 = inst_31213;
var inst_31213__$1 = tmp31249;
var state_31241__$1 = (function (){var statearr_31252 = state_31241;
(statearr_31252[(10)] = inst_31213__$1);

(statearr_31252[(11)] = inst_31230);

return statearr_31252;
})();
var statearr_31253_31276 = state_31241__$1;
(statearr_31253_31276[(2)] = null);

(statearr_31253_31276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (9))){
var inst_31221 = (state_31241[(8)]);
var state_31241__$1 = state_31241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31241__$1,(11),out,inst_31221);
} else {
if((state_val_31242 === (5))){
var inst_31235 = cljs.core.async.close_BANG_.call(null,out);
var state_31241__$1 = state_31241;
var statearr_31254_31277 = state_31241__$1;
(statearr_31254_31277[(2)] = inst_31235);

(statearr_31254_31277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (10))){
var inst_31233 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
var statearr_31255_31278 = state_31241__$1;
(statearr_31255_31278[(2)] = inst_31233);

(statearr_31255_31278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (8))){
var inst_31213 = (state_31241[(10)]);
var inst_31220 = (state_31241[(7)]);
var inst_31221 = (state_31241[(8)]);
var inst_31222 = (state_31241[(9)]);
var inst_31225 = (function (){var cs = inst_31213;
var vec__31218 = inst_31220;
var v = inst_31221;
var c = inst_31222;
return ((function (cs,vec__31218,v,c,inst_31213,inst_31220,inst_31221,inst_31222,state_val_31242,c__21787__auto___31269,out){
return (function (p1__31208_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31208_SHARP_);
});
;})(cs,vec__31218,v,c,inst_31213,inst_31220,inst_31221,inst_31222,state_val_31242,c__21787__auto___31269,out))
})();
var inst_31226 = cljs.core.filterv.call(null,inst_31225,inst_31213);
var inst_31213__$1 = inst_31226;
var state_31241__$1 = (function (){var statearr_31256 = state_31241;
(statearr_31256[(10)] = inst_31213__$1);

return statearr_31256;
})();
var statearr_31257_31279 = state_31241__$1;
(statearr_31257_31279[(2)] = null);

(statearr_31257_31279[(1)] = (2));


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
});})(c__21787__auto___31269,out))
;
return ((function (switch__21722__auto__,c__21787__auto___31269,out){
return (function() {
var cljs$core$async$state_machine__21723__auto__ = null;
var cljs$core$async$state_machine__21723__auto____0 = (function (){
var statearr_31261 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31261[(0)] = cljs$core$async$state_machine__21723__auto__);

(statearr_31261[(1)] = (1));

return statearr_31261;
});
var cljs$core$async$state_machine__21723__auto____1 = (function (state_31241){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_31241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e31262){if((e31262 instanceof Object)){
var ex__21726__auto__ = e31262;
var statearr_31263_31280 = state_31241;
(statearr_31263_31280[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31281 = state_31241;
state_31241 = G__31281;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$state_machine__21723__auto__ = function(state_31241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21723__auto____1.call(this,state_31241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21723__auto____0;
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21723__auto____1;
return cljs$core$async$state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___31269,out))
})();
var state__21789__auto__ = (function (){var statearr_31264 = f__21788__auto__.call(null);
(statearr_31264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___31269);

return statearr_31264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___31269,out))
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
var args31282 = [];
var len__18248__auto___31331 = arguments.length;
var i__18249__auto___31332 = (0);
while(true){
if((i__18249__auto___31332 < len__18248__auto___31331)){
args31282.push((arguments[i__18249__auto___31332]));

var G__31333 = (i__18249__auto___31332 + (1));
i__18249__auto___31332 = G__31333;
continue;
} else {
}
break;
}

var G__31284 = args31282.length;
switch (G__31284) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31282.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21787__auto___31335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___31335,out){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___31335,out){
return (function (state_31308){
var state_val_31309 = (state_31308[(1)]);
if((state_val_31309 === (7))){
var inst_31290 = (state_31308[(7)]);
var inst_31290__$1 = (state_31308[(2)]);
var inst_31291 = (inst_31290__$1 == null);
var inst_31292 = cljs.core.not.call(null,inst_31291);
var state_31308__$1 = (function (){var statearr_31310 = state_31308;
(statearr_31310[(7)] = inst_31290__$1);

return statearr_31310;
})();
if(inst_31292){
var statearr_31311_31336 = state_31308__$1;
(statearr_31311_31336[(1)] = (8));

} else {
var statearr_31312_31337 = state_31308__$1;
(statearr_31312_31337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (1))){
var inst_31285 = (0);
var state_31308__$1 = (function (){var statearr_31313 = state_31308;
(statearr_31313[(8)] = inst_31285);

return statearr_31313;
})();
var statearr_31314_31338 = state_31308__$1;
(statearr_31314_31338[(2)] = null);

(statearr_31314_31338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (4))){
var state_31308__$1 = state_31308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31308__$1,(7),ch);
} else {
if((state_val_31309 === (6))){
var inst_31303 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31315_31339 = state_31308__$1;
(statearr_31315_31339[(2)] = inst_31303);

(statearr_31315_31339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (3))){
var inst_31305 = (state_31308[(2)]);
var inst_31306 = cljs.core.async.close_BANG_.call(null,out);
var state_31308__$1 = (function (){var statearr_31316 = state_31308;
(statearr_31316[(9)] = inst_31305);

return statearr_31316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31308__$1,inst_31306);
} else {
if((state_val_31309 === (2))){
var inst_31285 = (state_31308[(8)]);
var inst_31287 = (inst_31285 < n);
var state_31308__$1 = state_31308;
if(cljs.core.truth_(inst_31287)){
var statearr_31317_31340 = state_31308__$1;
(statearr_31317_31340[(1)] = (4));

} else {
var statearr_31318_31341 = state_31308__$1;
(statearr_31318_31341[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (11))){
var inst_31285 = (state_31308[(8)]);
var inst_31295 = (state_31308[(2)]);
var inst_31296 = (inst_31285 + (1));
var inst_31285__$1 = inst_31296;
var state_31308__$1 = (function (){var statearr_31319 = state_31308;
(statearr_31319[(8)] = inst_31285__$1);

(statearr_31319[(10)] = inst_31295);

return statearr_31319;
})();
var statearr_31320_31342 = state_31308__$1;
(statearr_31320_31342[(2)] = null);

(statearr_31320_31342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (9))){
var state_31308__$1 = state_31308;
var statearr_31321_31343 = state_31308__$1;
(statearr_31321_31343[(2)] = null);

(statearr_31321_31343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (5))){
var state_31308__$1 = state_31308;
var statearr_31322_31344 = state_31308__$1;
(statearr_31322_31344[(2)] = null);

(statearr_31322_31344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (10))){
var inst_31300 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31323_31345 = state_31308__$1;
(statearr_31323_31345[(2)] = inst_31300);

(statearr_31323_31345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (8))){
var inst_31290 = (state_31308[(7)]);
var state_31308__$1 = state_31308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31308__$1,(11),out,inst_31290);
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
});})(c__21787__auto___31335,out))
;
return ((function (switch__21722__auto__,c__21787__auto___31335,out){
return (function() {
var cljs$core$async$state_machine__21723__auto__ = null;
var cljs$core$async$state_machine__21723__auto____0 = (function (){
var statearr_31327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31327[(0)] = cljs$core$async$state_machine__21723__auto__);

(statearr_31327[(1)] = (1));

return statearr_31327;
});
var cljs$core$async$state_machine__21723__auto____1 = (function (state_31308){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_31308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e31328){if((e31328 instanceof Object)){
var ex__21726__auto__ = e31328;
var statearr_31329_31346 = state_31308;
(statearr_31329_31346[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31347 = state_31308;
state_31308 = G__31347;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$state_machine__21723__auto__ = function(state_31308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21723__auto____1.call(this,state_31308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21723__auto____0;
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21723__auto____1;
return cljs$core$async$state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___31335,out))
})();
var state__21789__auto__ = (function (){var statearr_31330 = f__21788__auto__.call(null);
(statearr_31330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___31335);

return statearr_31330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___31335,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31355 = (function (map_LT_,f,ch,meta31356){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31356 = meta31356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31357,meta31356__$1){
var self__ = this;
var _31357__$1 = this;
return (new cljs.core.async.t_cljs$core$async31355(self__.map_LT_,self__.f,self__.ch,meta31356__$1));
});

cljs.core.async.t_cljs$core$async31355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31357){
var self__ = this;
var _31357__$1 = this;
return self__.meta31356;
});

cljs.core.async.t_cljs$core$async31355.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31355.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31355.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31355.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31355.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31358 = (function (map_LT_,f,ch,meta31356,_,fn1,meta31359){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31356 = meta31356;
this._ = _;
this.fn1 = fn1;
this.meta31359 = meta31359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31360,meta31359__$1){
var self__ = this;
var _31360__$1 = this;
return (new cljs.core.async.t_cljs$core$async31358(self__.map_LT_,self__.f,self__.ch,self__.meta31356,self__._,self__.fn1,meta31359__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31360){
var self__ = this;
var _31360__$1 = this;
return self__.meta31359;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31348_SHARP_){
return f1.call(null,(((p1__31348_SHARP_ == null))?null:self__.f.call(null,p1__31348_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31358.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31356","meta31356",-280539290,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31355","cljs.core.async/t_cljs$core$async31355",-1020682463,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31359","meta31359",1291521572,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31358.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31358";

cljs.core.async.t_cljs$core$async31358.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17788__auto__,writer__17789__auto__,opt__17790__auto__){
return cljs.core._write.call(null,writer__17789__auto__,"cljs.core.async/t_cljs$core$async31358");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31358 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31358(map_LT___$1,f__$1,ch__$1,meta31356__$1,___$2,fn1__$1,meta31359){
return (new cljs.core.async.t_cljs$core$async31358(map_LT___$1,f__$1,ch__$1,meta31356__$1,___$2,fn1__$1,meta31359));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31358(self__.map_LT_,self__.f,self__.ch,self__.meta31356,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17178__auto__ = ret;
if(cljs.core.truth_(and__17178__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17178__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31355.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31355.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31356","meta31356",-280539290,null)], null);
});

cljs.core.async.t_cljs$core$async31355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31355";

cljs.core.async.t_cljs$core$async31355.cljs$lang$ctorPrWriter = (function (this__17788__auto__,writer__17789__auto__,opt__17790__auto__){
return cljs.core._write.call(null,writer__17789__auto__,"cljs.core.async/t_cljs$core$async31355");
});

cljs.core.async.__GT_t_cljs$core$async31355 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31355(map_LT___$1,f__$1,ch__$1,meta31356){
return (new cljs.core.async.t_cljs$core$async31355(map_LT___$1,f__$1,ch__$1,meta31356));
});

}

return (new cljs.core.async.t_cljs$core$async31355(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31364 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31364 = (function (map_GT_,f,ch,meta31365){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31365 = meta31365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31366,meta31365__$1){
var self__ = this;
var _31366__$1 = this;
return (new cljs.core.async.t_cljs$core$async31364(self__.map_GT_,self__.f,self__.ch,meta31365__$1));
});

cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31366){
var self__ = this;
var _31366__$1 = this;
return self__.meta31365;
});

cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31364.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31365","meta31365",1834147686,null)], null);
});

cljs.core.async.t_cljs$core$async31364.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31364";

cljs.core.async.t_cljs$core$async31364.cljs$lang$ctorPrWriter = (function (this__17788__auto__,writer__17789__auto__,opt__17790__auto__){
return cljs.core._write.call(null,writer__17789__auto__,"cljs.core.async/t_cljs$core$async31364");
});

cljs.core.async.__GT_t_cljs$core$async31364 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31364(map_GT___$1,f__$1,ch__$1,meta31365){
return (new cljs.core.async.t_cljs$core$async31364(map_GT___$1,f__$1,ch__$1,meta31365));
});

}

return (new cljs.core.async.t_cljs$core$async31364(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31370 = (function (filter_GT_,p,ch,meta31371){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31371 = meta31371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31372,meta31371__$1){
var self__ = this;
var _31372__$1 = this;
return (new cljs.core.async.t_cljs$core$async31370(self__.filter_GT_,self__.p,self__.ch,meta31371__$1));
});

cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31372){
var self__ = this;
var _31372__$1 = this;
return self__.meta31371;
});

cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31371","meta31371",2107928915,null)], null);
});

cljs.core.async.t_cljs$core$async31370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31370";

cljs.core.async.t_cljs$core$async31370.cljs$lang$ctorPrWriter = (function (this__17788__auto__,writer__17789__auto__,opt__17790__auto__){
return cljs.core._write.call(null,writer__17789__auto__,"cljs.core.async/t_cljs$core$async31370");
});

cljs.core.async.__GT_t_cljs$core$async31370 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31370(filter_GT___$1,p__$1,ch__$1,meta31371){
return (new cljs.core.async.t_cljs$core$async31370(filter_GT___$1,p__$1,ch__$1,meta31371));
});

}

return (new cljs.core.async.t_cljs$core$async31370(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31373 = [];
var len__18248__auto___31417 = arguments.length;
var i__18249__auto___31418 = (0);
while(true){
if((i__18249__auto___31418 < len__18248__auto___31417)){
args31373.push((arguments[i__18249__auto___31418]));

var G__31419 = (i__18249__auto___31418 + (1));
i__18249__auto___31418 = G__31419;
continue;
} else {
}
break;
}

var G__31375 = args31373.length;
switch (G__31375) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31373.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21787__auto___31421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___31421,out){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___31421,out){
return (function (state_31396){
var state_val_31397 = (state_31396[(1)]);
if((state_val_31397 === (7))){
var inst_31392 = (state_31396[(2)]);
var state_31396__$1 = state_31396;
var statearr_31398_31422 = state_31396__$1;
(statearr_31398_31422[(2)] = inst_31392);

(statearr_31398_31422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (1))){
var state_31396__$1 = state_31396;
var statearr_31399_31423 = state_31396__$1;
(statearr_31399_31423[(2)] = null);

(statearr_31399_31423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (4))){
var inst_31378 = (state_31396[(7)]);
var inst_31378__$1 = (state_31396[(2)]);
var inst_31379 = (inst_31378__$1 == null);
var state_31396__$1 = (function (){var statearr_31400 = state_31396;
(statearr_31400[(7)] = inst_31378__$1);

return statearr_31400;
})();
if(cljs.core.truth_(inst_31379)){
var statearr_31401_31424 = state_31396__$1;
(statearr_31401_31424[(1)] = (5));

} else {
var statearr_31402_31425 = state_31396__$1;
(statearr_31402_31425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (6))){
var inst_31378 = (state_31396[(7)]);
var inst_31383 = p.call(null,inst_31378);
var state_31396__$1 = state_31396;
if(cljs.core.truth_(inst_31383)){
var statearr_31403_31426 = state_31396__$1;
(statearr_31403_31426[(1)] = (8));

} else {
var statearr_31404_31427 = state_31396__$1;
(statearr_31404_31427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (3))){
var inst_31394 = (state_31396[(2)]);
var state_31396__$1 = state_31396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31396__$1,inst_31394);
} else {
if((state_val_31397 === (2))){
var state_31396__$1 = state_31396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31396__$1,(4),ch);
} else {
if((state_val_31397 === (11))){
var inst_31386 = (state_31396[(2)]);
var state_31396__$1 = state_31396;
var statearr_31405_31428 = state_31396__$1;
(statearr_31405_31428[(2)] = inst_31386);

(statearr_31405_31428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (9))){
var state_31396__$1 = state_31396;
var statearr_31406_31429 = state_31396__$1;
(statearr_31406_31429[(2)] = null);

(statearr_31406_31429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (5))){
var inst_31381 = cljs.core.async.close_BANG_.call(null,out);
var state_31396__$1 = state_31396;
var statearr_31407_31430 = state_31396__$1;
(statearr_31407_31430[(2)] = inst_31381);

(statearr_31407_31430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (10))){
var inst_31389 = (state_31396[(2)]);
var state_31396__$1 = (function (){var statearr_31408 = state_31396;
(statearr_31408[(8)] = inst_31389);

return statearr_31408;
})();
var statearr_31409_31431 = state_31396__$1;
(statearr_31409_31431[(2)] = null);

(statearr_31409_31431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (8))){
var inst_31378 = (state_31396[(7)]);
var state_31396__$1 = state_31396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31396__$1,(11),out,inst_31378);
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
});})(c__21787__auto___31421,out))
;
return ((function (switch__21722__auto__,c__21787__auto___31421,out){
return (function() {
var cljs$core$async$state_machine__21723__auto__ = null;
var cljs$core$async$state_machine__21723__auto____0 = (function (){
var statearr_31413 = [null,null,null,null,null,null,null,null,null];
(statearr_31413[(0)] = cljs$core$async$state_machine__21723__auto__);

(statearr_31413[(1)] = (1));

return statearr_31413;
});
var cljs$core$async$state_machine__21723__auto____1 = (function (state_31396){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_31396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e31414){if((e31414 instanceof Object)){
var ex__21726__auto__ = e31414;
var statearr_31415_31432 = state_31396;
(statearr_31415_31432[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31433 = state_31396;
state_31396 = G__31433;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$state_machine__21723__auto__ = function(state_31396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21723__auto____1.call(this,state_31396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21723__auto____0;
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21723__auto____1;
return cljs$core$async$state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___31421,out))
})();
var state__21789__auto__ = (function (){var statearr_31416 = f__21788__auto__.call(null);
(statearr_31416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___31421);

return statearr_31416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___31421,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31434 = [];
var len__18248__auto___31437 = arguments.length;
var i__18249__auto___31438 = (0);
while(true){
if((i__18249__auto___31438 < len__18248__auto___31437)){
args31434.push((arguments[i__18249__auto___31438]));

var G__31439 = (i__18249__auto___31438 + (1));
i__18249__auto___31438 = G__31439;
continue;
} else {
}
break;
}

var G__31436 = args31434.length;
switch (G__31436) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31434.length)].join('')));

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
var c__21787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto__){
return (function (state_31606){
var state_val_31607 = (state_31606[(1)]);
if((state_val_31607 === (7))){
var inst_31602 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31608_31649 = state_31606__$1;
(statearr_31608_31649[(2)] = inst_31602);

(statearr_31608_31649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (20))){
var inst_31572 = (state_31606[(7)]);
var inst_31583 = (state_31606[(2)]);
var inst_31584 = cljs.core.next.call(null,inst_31572);
var inst_31558 = inst_31584;
var inst_31559 = null;
var inst_31560 = (0);
var inst_31561 = (0);
var state_31606__$1 = (function (){var statearr_31609 = state_31606;
(statearr_31609[(8)] = inst_31561);

(statearr_31609[(9)] = inst_31558);

(statearr_31609[(10)] = inst_31559);

(statearr_31609[(11)] = inst_31560);

(statearr_31609[(12)] = inst_31583);

return statearr_31609;
})();
var statearr_31610_31650 = state_31606__$1;
(statearr_31610_31650[(2)] = null);

(statearr_31610_31650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (1))){
var state_31606__$1 = state_31606;
var statearr_31611_31651 = state_31606__$1;
(statearr_31611_31651[(2)] = null);

(statearr_31611_31651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (4))){
var inst_31547 = (state_31606[(13)]);
var inst_31547__$1 = (state_31606[(2)]);
var inst_31548 = (inst_31547__$1 == null);
var state_31606__$1 = (function (){var statearr_31612 = state_31606;
(statearr_31612[(13)] = inst_31547__$1);

return statearr_31612;
})();
if(cljs.core.truth_(inst_31548)){
var statearr_31613_31652 = state_31606__$1;
(statearr_31613_31652[(1)] = (5));

} else {
var statearr_31614_31653 = state_31606__$1;
(statearr_31614_31653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (15))){
var state_31606__$1 = state_31606;
var statearr_31618_31654 = state_31606__$1;
(statearr_31618_31654[(2)] = null);

(statearr_31618_31654[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (21))){
var state_31606__$1 = state_31606;
var statearr_31619_31655 = state_31606__$1;
(statearr_31619_31655[(2)] = null);

(statearr_31619_31655[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (13))){
var inst_31561 = (state_31606[(8)]);
var inst_31558 = (state_31606[(9)]);
var inst_31559 = (state_31606[(10)]);
var inst_31560 = (state_31606[(11)]);
var inst_31568 = (state_31606[(2)]);
var inst_31569 = (inst_31561 + (1));
var tmp31615 = inst_31558;
var tmp31616 = inst_31559;
var tmp31617 = inst_31560;
var inst_31558__$1 = tmp31615;
var inst_31559__$1 = tmp31616;
var inst_31560__$1 = tmp31617;
var inst_31561__$1 = inst_31569;
var state_31606__$1 = (function (){var statearr_31620 = state_31606;
(statearr_31620[(8)] = inst_31561__$1);

(statearr_31620[(14)] = inst_31568);

(statearr_31620[(9)] = inst_31558__$1);

(statearr_31620[(10)] = inst_31559__$1);

(statearr_31620[(11)] = inst_31560__$1);

return statearr_31620;
})();
var statearr_31621_31656 = state_31606__$1;
(statearr_31621_31656[(2)] = null);

(statearr_31621_31656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (22))){
var state_31606__$1 = state_31606;
var statearr_31622_31657 = state_31606__$1;
(statearr_31622_31657[(2)] = null);

(statearr_31622_31657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (6))){
var inst_31547 = (state_31606[(13)]);
var inst_31556 = f.call(null,inst_31547);
var inst_31557 = cljs.core.seq.call(null,inst_31556);
var inst_31558 = inst_31557;
var inst_31559 = null;
var inst_31560 = (0);
var inst_31561 = (0);
var state_31606__$1 = (function (){var statearr_31623 = state_31606;
(statearr_31623[(8)] = inst_31561);

(statearr_31623[(9)] = inst_31558);

(statearr_31623[(10)] = inst_31559);

(statearr_31623[(11)] = inst_31560);

return statearr_31623;
})();
var statearr_31624_31658 = state_31606__$1;
(statearr_31624_31658[(2)] = null);

(statearr_31624_31658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (17))){
var inst_31572 = (state_31606[(7)]);
var inst_31576 = cljs.core.chunk_first.call(null,inst_31572);
var inst_31577 = cljs.core.chunk_rest.call(null,inst_31572);
var inst_31578 = cljs.core.count.call(null,inst_31576);
var inst_31558 = inst_31577;
var inst_31559 = inst_31576;
var inst_31560 = inst_31578;
var inst_31561 = (0);
var state_31606__$1 = (function (){var statearr_31625 = state_31606;
(statearr_31625[(8)] = inst_31561);

(statearr_31625[(9)] = inst_31558);

(statearr_31625[(10)] = inst_31559);

(statearr_31625[(11)] = inst_31560);

return statearr_31625;
})();
var statearr_31626_31659 = state_31606__$1;
(statearr_31626_31659[(2)] = null);

(statearr_31626_31659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (3))){
var inst_31604 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31606__$1,inst_31604);
} else {
if((state_val_31607 === (12))){
var inst_31592 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31627_31660 = state_31606__$1;
(statearr_31627_31660[(2)] = inst_31592);

(statearr_31627_31660[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (2))){
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31606__$1,(4),in$);
} else {
if((state_val_31607 === (23))){
var inst_31600 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31628_31661 = state_31606__$1;
(statearr_31628_31661[(2)] = inst_31600);

(statearr_31628_31661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (19))){
var inst_31587 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31629_31662 = state_31606__$1;
(statearr_31629_31662[(2)] = inst_31587);

(statearr_31629_31662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (11))){
var inst_31572 = (state_31606[(7)]);
var inst_31558 = (state_31606[(9)]);
var inst_31572__$1 = cljs.core.seq.call(null,inst_31558);
var state_31606__$1 = (function (){var statearr_31630 = state_31606;
(statearr_31630[(7)] = inst_31572__$1);

return statearr_31630;
})();
if(inst_31572__$1){
var statearr_31631_31663 = state_31606__$1;
(statearr_31631_31663[(1)] = (14));

} else {
var statearr_31632_31664 = state_31606__$1;
(statearr_31632_31664[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (9))){
var inst_31594 = (state_31606[(2)]);
var inst_31595 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31606__$1 = (function (){var statearr_31633 = state_31606;
(statearr_31633[(15)] = inst_31594);

return statearr_31633;
})();
if(cljs.core.truth_(inst_31595)){
var statearr_31634_31665 = state_31606__$1;
(statearr_31634_31665[(1)] = (21));

} else {
var statearr_31635_31666 = state_31606__$1;
(statearr_31635_31666[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (5))){
var inst_31550 = cljs.core.async.close_BANG_.call(null,out);
var state_31606__$1 = state_31606;
var statearr_31636_31667 = state_31606__$1;
(statearr_31636_31667[(2)] = inst_31550);

(statearr_31636_31667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (14))){
var inst_31572 = (state_31606[(7)]);
var inst_31574 = cljs.core.chunked_seq_QMARK_.call(null,inst_31572);
var state_31606__$1 = state_31606;
if(inst_31574){
var statearr_31637_31668 = state_31606__$1;
(statearr_31637_31668[(1)] = (17));

} else {
var statearr_31638_31669 = state_31606__$1;
(statearr_31638_31669[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (16))){
var inst_31590 = (state_31606[(2)]);
var state_31606__$1 = state_31606;
var statearr_31639_31670 = state_31606__$1;
(statearr_31639_31670[(2)] = inst_31590);

(statearr_31639_31670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31607 === (10))){
var inst_31561 = (state_31606[(8)]);
var inst_31559 = (state_31606[(10)]);
var inst_31566 = cljs.core._nth.call(null,inst_31559,inst_31561);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31606__$1,(13),out,inst_31566);
} else {
if((state_val_31607 === (18))){
var inst_31572 = (state_31606[(7)]);
var inst_31581 = cljs.core.first.call(null,inst_31572);
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31606__$1,(20),out,inst_31581);
} else {
if((state_val_31607 === (8))){
var inst_31561 = (state_31606[(8)]);
var inst_31560 = (state_31606[(11)]);
var inst_31563 = (inst_31561 < inst_31560);
var inst_31564 = inst_31563;
var state_31606__$1 = state_31606;
if(cljs.core.truth_(inst_31564)){
var statearr_31640_31671 = state_31606__$1;
(statearr_31640_31671[(1)] = (10));

} else {
var statearr_31641_31672 = state_31606__$1;
(statearr_31641_31672[(1)] = (11));

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
});})(c__21787__auto__))
;
return ((function (switch__21722__auto__,c__21787__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21723__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21723__auto____0 = (function (){
var statearr_31645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31645[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21723__auto__);

(statearr_31645[(1)] = (1));

return statearr_31645;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21723__auto____1 = (function (state_31606){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_31606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e31646){if((e31646 instanceof Object)){
var ex__21726__auto__ = e31646;
var statearr_31647_31673 = state_31606;
(statearr_31647_31673[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31674 = state_31606;
state_31606 = G__31674;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21723__auto__ = function(state_31606){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21723__auto____1.call(this,state_31606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21723__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21723__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_31648 = f__21788__auto__.call(null);
(statearr_31648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto__);

return statearr_31648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto__))
);

return c__21787__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31675 = [];
var len__18248__auto___31678 = arguments.length;
var i__18249__auto___31679 = (0);
while(true){
if((i__18249__auto___31679 < len__18248__auto___31678)){
args31675.push((arguments[i__18249__auto___31679]));

var G__31680 = (i__18249__auto___31679 + (1));
i__18249__auto___31679 = G__31680;
continue;
} else {
}
break;
}

var G__31677 = args31675.length;
switch (G__31677) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31675.length)].join('')));

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
var args31682 = [];
var len__18248__auto___31685 = arguments.length;
var i__18249__auto___31686 = (0);
while(true){
if((i__18249__auto___31686 < len__18248__auto___31685)){
args31682.push((arguments[i__18249__auto___31686]));

var G__31687 = (i__18249__auto___31686 + (1));
i__18249__auto___31686 = G__31687;
continue;
} else {
}
break;
}

var G__31684 = args31682.length;
switch (G__31684) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31682.length)].join('')));

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
var args31689 = [];
var len__18248__auto___31740 = arguments.length;
var i__18249__auto___31741 = (0);
while(true){
if((i__18249__auto___31741 < len__18248__auto___31740)){
args31689.push((arguments[i__18249__auto___31741]));

var G__31742 = (i__18249__auto___31741 + (1));
i__18249__auto___31741 = G__31742;
continue;
} else {
}
break;
}

var G__31691 = args31689.length;
switch (G__31691) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31689.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21787__auto___31744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___31744,out){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___31744,out){
return (function (state_31715){
var state_val_31716 = (state_31715[(1)]);
if((state_val_31716 === (7))){
var inst_31710 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31717_31745 = state_31715__$1;
(statearr_31717_31745[(2)] = inst_31710);

(statearr_31717_31745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (1))){
var inst_31692 = null;
var state_31715__$1 = (function (){var statearr_31718 = state_31715;
(statearr_31718[(7)] = inst_31692);

return statearr_31718;
})();
var statearr_31719_31746 = state_31715__$1;
(statearr_31719_31746[(2)] = null);

(statearr_31719_31746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (4))){
var inst_31695 = (state_31715[(8)]);
var inst_31695__$1 = (state_31715[(2)]);
var inst_31696 = (inst_31695__$1 == null);
var inst_31697 = cljs.core.not.call(null,inst_31696);
var state_31715__$1 = (function (){var statearr_31720 = state_31715;
(statearr_31720[(8)] = inst_31695__$1);

return statearr_31720;
})();
if(inst_31697){
var statearr_31721_31747 = state_31715__$1;
(statearr_31721_31747[(1)] = (5));

} else {
var statearr_31722_31748 = state_31715__$1;
(statearr_31722_31748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (6))){
var state_31715__$1 = state_31715;
var statearr_31723_31749 = state_31715__$1;
(statearr_31723_31749[(2)] = null);

(statearr_31723_31749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (3))){
var inst_31712 = (state_31715[(2)]);
var inst_31713 = cljs.core.async.close_BANG_.call(null,out);
var state_31715__$1 = (function (){var statearr_31724 = state_31715;
(statearr_31724[(9)] = inst_31712);

return statearr_31724;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31715__$1,inst_31713);
} else {
if((state_val_31716 === (2))){
var state_31715__$1 = state_31715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31715__$1,(4),ch);
} else {
if((state_val_31716 === (11))){
var inst_31695 = (state_31715[(8)]);
var inst_31704 = (state_31715[(2)]);
var inst_31692 = inst_31695;
var state_31715__$1 = (function (){var statearr_31725 = state_31715;
(statearr_31725[(10)] = inst_31704);

(statearr_31725[(7)] = inst_31692);

return statearr_31725;
})();
var statearr_31726_31750 = state_31715__$1;
(statearr_31726_31750[(2)] = null);

(statearr_31726_31750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (9))){
var inst_31695 = (state_31715[(8)]);
var state_31715__$1 = state_31715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31715__$1,(11),out,inst_31695);
} else {
if((state_val_31716 === (5))){
var inst_31692 = (state_31715[(7)]);
var inst_31695 = (state_31715[(8)]);
var inst_31699 = cljs.core._EQ_.call(null,inst_31695,inst_31692);
var state_31715__$1 = state_31715;
if(inst_31699){
var statearr_31728_31751 = state_31715__$1;
(statearr_31728_31751[(1)] = (8));

} else {
var statearr_31729_31752 = state_31715__$1;
(statearr_31729_31752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (10))){
var inst_31707 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31730_31753 = state_31715__$1;
(statearr_31730_31753[(2)] = inst_31707);

(statearr_31730_31753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (8))){
var inst_31692 = (state_31715[(7)]);
var tmp31727 = inst_31692;
var inst_31692__$1 = tmp31727;
var state_31715__$1 = (function (){var statearr_31731 = state_31715;
(statearr_31731[(7)] = inst_31692__$1);

return statearr_31731;
})();
var statearr_31732_31754 = state_31715__$1;
(statearr_31732_31754[(2)] = null);

(statearr_31732_31754[(1)] = (2));


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
});})(c__21787__auto___31744,out))
;
return ((function (switch__21722__auto__,c__21787__auto___31744,out){
return (function() {
var cljs$core$async$state_machine__21723__auto__ = null;
var cljs$core$async$state_machine__21723__auto____0 = (function (){
var statearr_31736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31736[(0)] = cljs$core$async$state_machine__21723__auto__);

(statearr_31736[(1)] = (1));

return statearr_31736;
});
var cljs$core$async$state_machine__21723__auto____1 = (function (state_31715){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_31715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e31737){if((e31737 instanceof Object)){
var ex__21726__auto__ = e31737;
var statearr_31738_31755 = state_31715;
(statearr_31738_31755[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31756 = state_31715;
state_31715 = G__31756;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$state_machine__21723__auto__ = function(state_31715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21723__auto____1.call(this,state_31715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21723__auto____0;
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21723__auto____1;
return cljs$core$async$state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___31744,out))
})();
var state__21789__auto__ = (function (){var statearr_31739 = f__21788__auto__.call(null);
(statearr_31739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___31744);

return statearr_31739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___31744,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31757 = [];
var len__18248__auto___31827 = arguments.length;
var i__18249__auto___31828 = (0);
while(true){
if((i__18249__auto___31828 < len__18248__auto___31827)){
args31757.push((arguments[i__18249__auto___31828]));

var G__31829 = (i__18249__auto___31828 + (1));
i__18249__auto___31828 = G__31829;
continue;
} else {
}
break;
}

var G__31759 = args31757.length;
switch (G__31759) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31757.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21787__auto___31831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___31831,out){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___31831,out){
return (function (state_31797){
var state_val_31798 = (state_31797[(1)]);
if((state_val_31798 === (7))){
var inst_31793 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31799_31832 = state_31797__$1;
(statearr_31799_31832[(2)] = inst_31793);

(statearr_31799_31832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (1))){
var inst_31760 = (new Array(n));
var inst_31761 = inst_31760;
var inst_31762 = (0);
var state_31797__$1 = (function (){var statearr_31800 = state_31797;
(statearr_31800[(7)] = inst_31761);

(statearr_31800[(8)] = inst_31762);

return statearr_31800;
})();
var statearr_31801_31833 = state_31797__$1;
(statearr_31801_31833[(2)] = null);

(statearr_31801_31833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (4))){
var inst_31765 = (state_31797[(9)]);
var inst_31765__$1 = (state_31797[(2)]);
var inst_31766 = (inst_31765__$1 == null);
var inst_31767 = cljs.core.not.call(null,inst_31766);
var state_31797__$1 = (function (){var statearr_31802 = state_31797;
(statearr_31802[(9)] = inst_31765__$1);

return statearr_31802;
})();
if(inst_31767){
var statearr_31803_31834 = state_31797__$1;
(statearr_31803_31834[(1)] = (5));

} else {
var statearr_31804_31835 = state_31797__$1;
(statearr_31804_31835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (15))){
var inst_31787 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31805_31836 = state_31797__$1;
(statearr_31805_31836[(2)] = inst_31787);

(statearr_31805_31836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (13))){
var state_31797__$1 = state_31797;
var statearr_31806_31837 = state_31797__$1;
(statearr_31806_31837[(2)] = null);

(statearr_31806_31837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (6))){
var inst_31762 = (state_31797[(8)]);
var inst_31783 = (inst_31762 > (0));
var state_31797__$1 = state_31797;
if(cljs.core.truth_(inst_31783)){
var statearr_31807_31838 = state_31797__$1;
(statearr_31807_31838[(1)] = (12));

} else {
var statearr_31808_31839 = state_31797__$1;
(statearr_31808_31839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (3))){
var inst_31795 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31797__$1,inst_31795);
} else {
if((state_val_31798 === (12))){
var inst_31761 = (state_31797[(7)]);
var inst_31785 = cljs.core.vec.call(null,inst_31761);
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31797__$1,(15),out,inst_31785);
} else {
if((state_val_31798 === (2))){
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31797__$1,(4),ch);
} else {
if((state_val_31798 === (11))){
var inst_31777 = (state_31797[(2)]);
var inst_31778 = (new Array(n));
var inst_31761 = inst_31778;
var inst_31762 = (0);
var state_31797__$1 = (function (){var statearr_31809 = state_31797;
(statearr_31809[(7)] = inst_31761);

(statearr_31809[(10)] = inst_31777);

(statearr_31809[(8)] = inst_31762);

return statearr_31809;
})();
var statearr_31810_31840 = state_31797__$1;
(statearr_31810_31840[(2)] = null);

(statearr_31810_31840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (9))){
var inst_31761 = (state_31797[(7)]);
var inst_31775 = cljs.core.vec.call(null,inst_31761);
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31797__$1,(11),out,inst_31775);
} else {
if((state_val_31798 === (5))){
var inst_31770 = (state_31797[(11)]);
var inst_31761 = (state_31797[(7)]);
var inst_31762 = (state_31797[(8)]);
var inst_31765 = (state_31797[(9)]);
var inst_31769 = (inst_31761[inst_31762] = inst_31765);
var inst_31770__$1 = (inst_31762 + (1));
var inst_31771 = (inst_31770__$1 < n);
var state_31797__$1 = (function (){var statearr_31811 = state_31797;
(statearr_31811[(11)] = inst_31770__$1);

(statearr_31811[(12)] = inst_31769);

return statearr_31811;
})();
if(cljs.core.truth_(inst_31771)){
var statearr_31812_31841 = state_31797__$1;
(statearr_31812_31841[(1)] = (8));

} else {
var statearr_31813_31842 = state_31797__$1;
(statearr_31813_31842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (14))){
var inst_31790 = (state_31797[(2)]);
var inst_31791 = cljs.core.async.close_BANG_.call(null,out);
var state_31797__$1 = (function (){var statearr_31815 = state_31797;
(statearr_31815[(13)] = inst_31790);

return statearr_31815;
})();
var statearr_31816_31843 = state_31797__$1;
(statearr_31816_31843[(2)] = inst_31791);

(statearr_31816_31843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (10))){
var inst_31781 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31817_31844 = state_31797__$1;
(statearr_31817_31844[(2)] = inst_31781);

(statearr_31817_31844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (8))){
var inst_31770 = (state_31797[(11)]);
var inst_31761 = (state_31797[(7)]);
var tmp31814 = inst_31761;
var inst_31761__$1 = tmp31814;
var inst_31762 = inst_31770;
var state_31797__$1 = (function (){var statearr_31818 = state_31797;
(statearr_31818[(7)] = inst_31761__$1);

(statearr_31818[(8)] = inst_31762);

return statearr_31818;
})();
var statearr_31819_31845 = state_31797__$1;
(statearr_31819_31845[(2)] = null);

(statearr_31819_31845[(1)] = (2));


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
});})(c__21787__auto___31831,out))
;
return ((function (switch__21722__auto__,c__21787__auto___31831,out){
return (function() {
var cljs$core$async$state_machine__21723__auto__ = null;
var cljs$core$async$state_machine__21723__auto____0 = (function (){
var statearr_31823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31823[(0)] = cljs$core$async$state_machine__21723__auto__);

(statearr_31823[(1)] = (1));

return statearr_31823;
});
var cljs$core$async$state_machine__21723__auto____1 = (function (state_31797){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_31797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e31824){if((e31824 instanceof Object)){
var ex__21726__auto__ = e31824;
var statearr_31825_31846 = state_31797;
(statearr_31825_31846[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31847 = state_31797;
state_31797 = G__31847;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$state_machine__21723__auto__ = function(state_31797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21723__auto____1.call(this,state_31797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21723__auto____0;
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21723__auto____1;
return cljs$core$async$state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___31831,out))
})();
var state__21789__auto__ = (function (){var statearr_31826 = f__21788__auto__.call(null);
(statearr_31826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___31831);

return statearr_31826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___31831,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31848 = [];
var len__18248__auto___31922 = arguments.length;
var i__18249__auto___31923 = (0);
while(true){
if((i__18249__auto___31923 < len__18248__auto___31922)){
args31848.push((arguments[i__18249__auto___31923]));

var G__31924 = (i__18249__auto___31923 + (1));
i__18249__auto___31923 = G__31924;
continue;
} else {
}
break;
}

var G__31850 = args31848.length;
switch (G__31850) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31848.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21787__auto___31926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21787__auto___31926,out){
return (function (){
var f__21788__auto__ = (function (){var switch__21722__auto__ = ((function (c__21787__auto___31926,out){
return (function (state_31892){
var state_val_31893 = (state_31892[(1)]);
if((state_val_31893 === (7))){
var inst_31888 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31894_31927 = state_31892__$1;
(statearr_31894_31927[(2)] = inst_31888);

(statearr_31894_31927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (1))){
var inst_31851 = [];
var inst_31852 = inst_31851;
var inst_31853 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31892__$1 = (function (){var statearr_31895 = state_31892;
(statearr_31895[(7)] = inst_31852);

(statearr_31895[(8)] = inst_31853);

return statearr_31895;
})();
var statearr_31896_31928 = state_31892__$1;
(statearr_31896_31928[(2)] = null);

(statearr_31896_31928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (4))){
var inst_31856 = (state_31892[(9)]);
var inst_31856__$1 = (state_31892[(2)]);
var inst_31857 = (inst_31856__$1 == null);
var inst_31858 = cljs.core.not.call(null,inst_31857);
var state_31892__$1 = (function (){var statearr_31897 = state_31892;
(statearr_31897[(9)] = inst_31856__$1);

return statearr_31897;
})();
if(inst_31858){
var statearr_31898_31929 = state_31892__$1;
(statearr_31898_31929[(1)] = (5));

} else {
var statearr_31899_31930 = state_31892__$1;
(statearr_31899_31930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (15))){
var inst_31882 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31900_31931 = state_31892__$1;
(statearr_31900_31931[(2)] = inst_31882);

(statearr_31900_31931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (13))){
var state_31892__$1 = state_31892;
var statearr_31901_31932 = state_31892__$1;
(statearr_31901_31932[(2)] = null);

(statearr_31901_31932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (6))){
var inst_31852 = (state_31892[(7)]);
var inst_31877 = inst_31852.length;
var inst_31878 = (inst_31877 > (0));
var state_31892__$1 = state_31892;
if(cljs.core.truth_(inst_31878)){
var statearr_31902_31933 = state_31892__$1;
(statearr_31902_31933[(1)] = (12));

} else {
var statearr_31903_31934 = state_31892__$1;
(statearr_31903_31934[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (3))){
var inst_31890 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31892__$1,inst_31890);
} else {
if((state_val_31893 === (12))){
var inst_31852 = (state_31892[(7)]);
var inst_31880 = cljs.core.vec.call(null,inst_31852);
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31892__$1,(15),out,inst_31880);
} else {
if((state_val_31893 === (2))){
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31892__$1,(4),ch);
} else {
if((state_val_31893 === (11))){
var inst_31856 = (state_31892[(9)]);
var inst_31860 = (state_31892[(10)]);
var inst_31870 = (state_31892[(2)]);
var inst_31871 = [];
var inst_31872 = inst_31871.push(inst_31856);
var inst_31852 = inst_31871;
var inst_31853 = inst_31860;
var state_31892__$1 = (function (){var statearr_31904 = state_31892;
(statearr_31904[(7)] = inst_31852);

(statearr_31904[(11)] = inst_31870);

(statearr_31904[(12)] = inst_31872);

(statearr_31904[(8)] = inst_31853);

return statearr_31904;
})();
var statearr_31905_31935 = state_31892__$1;
(statearr_31905_31935[(2)] = null);

(statearr_31905_31935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (9))){
var inst_31852 = (state_31892[(7)]);
var inst_31868 = cljs.core.vec.call(null,inst_31852);
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31892__$1,(11),out,inst_31868);
} else {
if((state_val_31893 === (5))){
var inst_31856 = (state_31892[(9)]);
var inst_31860 = (state_31892[(10)]);
var inst_31853 = (state_31892[(8)]);
var inst_31860__$1 = f.call(null,inst_31856);
var inst_31861 = cljs.core._EQ_.call(null,inst_31860__$1,inst_31853);
var inst_31862 = cljs.core.keyword_identical_QMARK_.call(null,inst_31853,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31863 = (inst_31861) || (inst_31862);
var state_31892__$1 = (function (){var statearr_31906 = state_31892;
(statearr_31906[(10)] = inst_31860__$1);

return statearr_31906;
})();
if(cljs.core.truth_(inst_31863)){
var statearr_31907_31936 = state_31892__$1;
(statearr_31907_31936[(1)] = (8));

} else {
var statearr_31908_31937 = state_31892__$1;
(statearr_31908_31937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (14))){
var inst_31885 = (state_31892[(2)]);
var inst_31886 = cljs.core.async.close_BANG_.call(null,out);
var state_31892__$1 = (function (){var statearr_31910 = state_31892;
(statearr_31910[(13)] = inst_31885);

return statearr_31910;
})();
var statearr_31911_31938 = state_31892__$1;
(statearr_31911_31938[(2)] = inst_31886);

(statearr_31911_31938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (10))){
var inst_31875 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31912_31939 = state_31892__$1;
(statearr_31912_31939[(2)] = inst_31875);

(statearr_31912_31939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (8))){
var inst_31856 = (state_31892[(9)]);
var inst_31852 = (state_31892[(7)]);
var inst_31860 = (state_31892[(10)]);
var inst_31865 = inst_31852.push(inst_31856);
var tmp31909 = inst_31852;
var inst_31852__$1 = tmp31909;
var inst_31853 = inst_31860;
var state_31892__$1 = (function (){var statearr_31913 = state_31892;
(statearr_31913[(7)] = inst_31852__$1);

(statearr_31913[(8)] = inst_31853);

(statearr_31913[(14)] = inst_31865);

return statearr_31913;
})();
var statearr_31914_31940 = state_31892__$1;
(statearr_31914_31940[(2)] = null);

(statearr_31914_31940[(1)] = (2));


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
});})(c__21787__auto___31926,out))
;
return ((function (switch__21722__auto__,c__21787__auto___31926,out){
return (function() {
var cljs$core$async$state_machine__21723__auto__ = null;
var cljs$core$async$state_machine__21723__auto____0 = (function (){
var statearr_31918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31918[(0)] = cljs$core$async$state_machine__21723__auto__);

(statearr_31918[(1)] = (1));

return statearr_31918;
});
var cljs$core$async$state_machine__21723__auto____1 = (function (state_31892){
while(true){
var ret_value__21724__auto__ = (function (){try{while(true){
var result__21725__auto__ = switch__21722__auto__.call(null,state_31892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21725__auto__;
}
break;
}
}catch (e31919){if((e31919 instanceof Object)){
var ex__21726__auto__ = e31919;
var statearr_31920_31941 = state_31892;
(statearr_31920_31941[(5)] = ex__21726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31942 = state_31892;
state_31892 = G__31942;
continue;
} else {
return ret_value__21724__auto__;
}
break;
}
});
cljs$core$async$state_machine__21723__auto__ = function(state_31892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21723__auto____1.call(this,state_31892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21723__auto____0;
cljs$core$async$state_machine__21723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21723__auto____1;
return cljs$core$async$state_machine__21723__auto__;
})()
;})(switch__21722__auto__,c__21787__auto___31926,out))
})();
var state__21789__auto__ = (function (){var statearr_31921 = f__21788__auto__.call(null);
(statearr_31921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21787__auto___31926);

return statearr_31921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21789__auto__);
});})(c__21787__auto___31926,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map