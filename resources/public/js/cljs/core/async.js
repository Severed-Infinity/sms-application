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
if(typeof cljs.core.async.t_cljs$core$async29008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29008 = (function (fn_handler,f,meta29009){
this.fn_handler = fn_handler;
this.f = f;
this.meta29009 = meta29009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29010,meta29009__$1){
var self__ = this;
var _29010__$1 = this;
return (new cljs.core.async.t_cljs$core$async29008(self__.fn_handler,self__.f,meta29009__$1));
});

cljs.core.async.t_cljs$core$async29008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29010){
var self__ = this;
var _29010__$1 = this;
return self__.meta29009;
});

cljs.core.async.t_cljs$core$async29008.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29008.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29008.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta29009","meta29009",-2141824060,null)], null);
});

cljs.core.async.t_cljs$core$async29008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29008";

cljs.core.async.t_cljs$core$async29008.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async29008");
});

cljs.core.async.__GT_t_cljs$core$async29008 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async29008(fn_handler__$1,f__$1,meta29009){
return (new cljs.core.async.t_cljs$core$async29008(fn_handler__$1,f__$1,meta29009));
});

}

return (new cljs.core.async.t_cljs$core$async29008(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args29013 = [];
var len__17843__auto___29016 = arguments.length;
var i__17844__auto___29017 = (0);
while(true){
if((i__17844__auto___29017 < len__17843__auto___29016)){
args29013.push((arguments[i__17844__auto___29017]));

var G__29018 = (i__17844__auto___29017 + (1));
i__17844__auto___29017 = G__29018;
continue;
} else {
}
break;
}

var G__29015 = args29013.length;
switch (G__29015) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29013.length)].join('')));

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
var args29020 = [];
var len__17843__auto___29023 = arguments.length;
var i__17844__auto___29024 = (0);
while(true){
if((i__17844__auto___29024 < len__17843__auto___29023)){
args29020.push((arguments[i__17844__auto___29024]));

var G__29025 = (i__17844__auto___29024 + (1));
i__17844__auto___29024 = G__29025;
continue;
} else {
}
break;
}

var G__29022 = args29020.length;
switch (G__29022) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29020.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29027 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29027);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29027,ret){
return (function (){
return fn1.call(null,val_29027);
});})(val_29027,ret))
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
var args29028 = [];
var len__17843__auto___29031 = arguments.length;
var i__17844__auto___29032 = (0);
while(true){
if((i__17844__auto___29032 < len__17843__auto___29031)){
args29028.push((arguments[i__17844__auto___29032]));

var G__29033 = (i__17844__auto___29032 + (1));
i__17844__auto___29032 = G__29033;
continue;
} else {
}
break;
}

var G__29030 = args29028.length;
switch (G__29030) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29028.length)].join('')));

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
var n__17688__auto___29035 = n;
var x_29036 = (0);
while(true){
if((x_29036 < n__17688__auto___29035)){
(a[x_29036] = (0));

var G__29037 = (x_29036 + (1));
x_29036 = G__29037;
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

var G__29038 = (i + (1));
i = G__29038;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29042 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29042 = (function (alt_flag,flag,meta29043){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29043 = meta29043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29044,meta29043__$1){
var self__ = this;
var _29044__$1 = this;
return (new cljs.core.async.t_cljs$core$async29042(self__.alt_flag,self__.flag,meta29043__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29044){
var self__ = this;
var _29044__$1 = this;
return self__.meta29043;
});})(flag))
;

cljs.core.async.t_cljs$core$async29042.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29042.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29043","meta29043",-1159642813,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29042";

cljs.core.async.t_cljs$core$async29042.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async29042");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29042 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29042(alt_flag__$1,flag__$1,meta29043){
return (new cljs.core.async.t_cljs$core$async29042(alt_flag__$1,flag__$1,meta29043));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29042(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29048 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29048 = (function (alt_handler,flag,cb,meta29049){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29049 = meta29049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29050,meta29049__$1){
var self__ = this;
var _29050__$1 = this;
return (new cljs.core.async.t_cljs$core$async29048(self__.alt_handler,self__.flag,self__.cb,meta29049__$1));
});

cljs.core.async.t_cljs$core$async29048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29050){
var self__ = this;
var _29050__$1 = this;
return self__.meta29049;
});

cljs.core.async.t_cljs$core$async29048.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29049","meta29049",-1050640718,null)], null);
});

cljs.core.async.t_cljs$core$async29048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29048";

cljs.core.async.t_cljs$core$async29048.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async29048");
});

cljs.core.async.__GT_t_cljs$core$async29048 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29048(alt_handler__$1,flag__$1,cb__$1,meta29049){
return (new cljs.core.async.t_cljs$core$async29048(alt_handler__$1,flag__$1,cb__$1,meta29049));
});

}

return (new cljs.core.async.t_cljs$core$async29048(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29051_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29051_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29052_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29052_SHARP_,port], null));
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
var G__29053 = (i + (1));
i = G__29053;
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
var len__17843__auto___29059 = arguments.length;
var i__17844__auto___29060 = (0);
while(true){
if((i__17844__auto___29060 < len__17843__auto___29059)){
args__17850__auto__.push((arguments[i__17844__auto___29060]));

var G__29061 = (i__17844__auto___29060 + (1));
i__17844__auto___29060 = G__29061;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((1) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17851__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29056){
var map__29057 = p__29056;
var map__29057__$1 = ((((!((map__29057 == null)))?((((map__29057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29057):map__29057);
var opts = map__29057__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29054){
var G__29055 = cljs.core.first.call(null,seq29054);
var seq29054__$1 = cljs.core.next.call(null,seq29054);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29055,seq29054__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29062 = [];
var len__17843__auto___29112 = arguments.length;
var i__17844__auto___29113 = (0);
while(true){
if((i__17844__auto___29113 < len__17843__auto___29112)){
args29062.push((arguments[i__17844__auto___29113]));

var G__29114 = (i__17844__auto___29113 + (1));
i__17844__auto___29113 = G__29114;
continue;
} else {
}
break;
}

var G__29064 = args29062.length;
switch (G__29064) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29062.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21381__auto___29116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___29116){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___29116){
return (function (state_29088){
var state_val_29089 = (state_29088[(1)]);
if((state_val_29089 === (7))){
var inst_29084 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29090_29117 = state_29088__$1;
(statearr_29090_29117[(2)] = inst_29084);

(statearr_29090_29117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (1))){
var state_29088__$1 = state_29088;
var statearr_29091_29118 = state_29088__$1;
(statearr_29091_29118[(2)] = null);

(statearr_29091_29118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (4))){
var inst_29067 = (state_29088[(7)]);
var inst_29067__$1 = (state_29088[(2)]);
var inst_29068 = (inst_29067__$1 == null);
var state_29088__$1 = (function (){var statearr_29092 = state_29088;
(statearr_29092[(7)] = inst_29067__$1);

return statearr_29092;
})();
if(cljs.core.truth_(inst_29068)){
var statearr_29093_29119 = state_29088__$1;
(statearr_29093_29119[(1)] = (5));

} else {
var statearr_29094_29120 = state_29088__$1;
(statearr_29094_29120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (13))){
var state_29088__$1 = state_29088;
var statearr_29095_29121 = state_29088__$1;
(statearr_29095_29121[(2)] = null);

(statearr_29095_29121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (6))){
var inst_29067 = (state_29088[(7)]);
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29088__$1,(11),to,inst_29067);
} else {
if((state_val_29089 === (3))){
var inst_29086 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29088__$1,inst_29086);
} else {
if((state_val_29089 === (12))){
var state_29088__$1 = state_29088;
var statearr_29096_29122 = state_29088__$1;
(statearr_29096_29122[(2)] = null);

(statearr_29096_29122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (2))){
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29088__$1,(4),from);
} else {
if((state_val_29089 === (11))){
var inst_29077 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
if(cljs.core.truth_(inst_29077)){
var statearr_29097_29123 = state_29088__$1;
(statearr_29097_29123[(1)] = (12));

} else {
var statearr_29098_29124 = state_29088__$1;
(statearr_29098_29124[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (9))){
var state_29088__$1 = state_29088;
var statearr_29099_29125 = state_29088__$1;
(statearr_29099_29125[(2)] = null);

(statearr_29099_29125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (5))){
var state_29088__$1 = state_29088;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29100_29126 = state_29088__$1;
(statearr_29100_29126[(1)] = (8));

} else {
var statearr_29101_29127 = state_29088__$1;
(statearr_29101_29127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (14))){
var inst_29082 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29102_29128 = state_29088__$1;
(statearr_29102_29128[(2)] = inst_29082);

(statearr_29102_29128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (10))){
var inst_29074 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29103_29129 = state_29088__$1;
(statearr_29103_29129[(2)] = inst_29074);

(statearr_29103_29129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (8))){
var inst_29071 = cljs.core.async.close_BANG_.call(null,to);
var state_29088__$1 = state_29088;
var statearr_29104_29130 = state_29088__$1;
(statearr_29104_29130[(2)] = inst_29071);

(statearr_29104_29130[(1)] = (10));


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
});})(c__21381__auto___29116))
;
return ((function (switch__21316__auto__,c__21381__auto___29116){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_29108 = [null,null,null,null,null,null,null,null];
(statearr_29108[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_29108[(1)] = (1));

return statearr_29108;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_29088){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_29088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e29109){if((e29109 instanceof Object)){
var ex__21320__auto__ = e29109;
var statearr_29110_29131 = state_29088;
(statearr_29110_29131[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29132 = state_29088;
state_29088 = G__29132;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_29088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_29088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___29116))
})();
var state__21383__auto__ = (function (){var statearr_29111 = f__21382__auto__.call(null);
(statearr_29111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___29116);

return statearr_29111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___29116))
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
return (function (p__29316){
var vec__29317 = p__29316;
var v = cljs.core.nth.call(null,vec__29317,(0),null);
var p = cljs.core.nth.call(null,vec__29317,(1),null);
var job = vec__29317;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21381__auto___29499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___29499,res,vec__29317,v,p,job,jobs,results){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___29499,res,vec__29317,v,p,job,jobs,results){
return (function (state_29322){
var state_val_29323 = (state_29322[(1)]);
if((state_val_29323 === (1))){
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29322__$1,(2),res,v);
} else {
if((state_val_29323 === (2))){
var inst_29319 = (state_29322[(2)]);
var inst_29320 = cljs.core.async.close_BANG_.call(null,res);
var state_29322__$1 = (function (){var statearr_29324 = state_29322;
(statearr_29324[(7)] = inst_29319);

return statearr_29324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29322__$1,inst_29320);
} else {
return null;
}
}
});})(c__21381__auto___29499,res,vec__29317,v,p,job,jobs,results))
;
return ((function (switch__21316__auto__,c__21381__auto___29499,res,vec__29317,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_29328 = [null,null,null,null,null,null,null,null];
(statearr_29328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_29328[(1)] = (1));

return statearr_29328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_29322){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_29322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e29329){if((e29329 instanceof Object)){
var ex__21320__auto__ = e29329;
var statearr_29330_29500 = state_29322;
(statearr_29330_29500[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29501 = state_29322;
state_29322 = G__29501;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_29322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_29322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___29499,res,vec__29317,v,p,job,jobs,results))
})();
var state__21383__auto__ = (function (){var statearr_29331 = f__21382__auto__.call(null);
(statearr_29331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___29499);

return statearr_29331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___29499,res,vec__29317,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29332){
var vec__29333 = p__29332;
var v = cljs.core.nth.call(null,vec__29333,(0),null);
var p = cljs.core.nth.call(null,vec__29333,(1),null);
var job = vec__29333;
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
var n__17688__auto___29502 = n;
var __29503 = (0);
while(true){
if((__29503 < n__17688__auto___29502)){
var G__29334_29504 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29334_29504) {
case "compute":
var c__21381__auto___29506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29503,c__21381__auto___29506,G__29334_29504,n__17688__auto___29502,jobs,results,process,async){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (__29503,c__21381__auto___29506,G__29334_29504,n__17688__auto___29502,jobs,results,process,async){
return (function (state_29347){
var state_val_29348 = (state_29347[(1)]);
if((state_val_29348 === (1))){
var state_29347__$1 = state_29347;
var statearr_29349_29507 = state_29347__$1;
(statearr_29349_29507[(2)] = null);

(statearr_29349_29507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (2))){
var state_29347__$1 = state_29347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29347__$1,(4),jobs);
} else {
if((state_val_29348 === (3))){
var inst_29345 = (state_29347[(2)]);
var state_29347__$1 = state_29347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29347__$1,inst_29345);
} else {
if((state_val_29348 === (4))){
var inst_29337 = (state_29347[(2)]);
var inst_29338 = process.call(null,inst_29337);
var state_29347__$1 = state_29347;
if(cljs.core.truth_(inst_29338)){
var statearr_29350_29508 = state_29347__$1;
(statearr_29350_29508[(1)] = (5));

} else {
var statearr_29351_29509 = state_29347__$1;
(statearr_29351_29509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (5))){
var state_29347__$1 = state_29347;
var statearr_29352_29510 = state_29347__$1;
(statearr_29352_29510[(2)] = null);

(statearr_29352_29510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (6))){
var state_29347__$1 = state_29347;
var statearr_29353_29511 = state_29347__$1;
(statearr_29353_29511[(2)] = null);

(statearr_29353_29511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29348 === (7))){
var inst_29343 = (state_29347[(2)]);
var state_29347__$1 = state_29347;
var statearr_29354_29512 = state_29347__$1;
(statearr_29354_29512[(2)] = inst_29343);

(statearr_29354_29512[(1)] = (3));


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
});})(__29503,c__21381__auto___29506,G__29334_29504,n__17688__auto___29502,jobs,results,process,async))
;
return ((function (__29503,switch__21316__auto__,c__21381__auto___29506,G__29334_29504,n__17688__auto___29502,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_29358 = [null,null,null,null,null,null,null];
(statearr_29358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_29358[(1)] = (1));

return statearr_29358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_29347){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_29347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e29359){if((e29359 instanceof Object)){
var ex__21320__auto__ = e29359;
var statearr_29360_29513 = state_29347;
(statearr_29360_29513[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29514 = state_29347;
state_29347 = G__29514;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_29347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_29347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(__29503,switch__21316__auto__,c__21381__auto___29506,G__29334_29504,n__17688__auto___29502,jobs,results,process,async))
})();
var state__21383__auto__ = (function (){var statearr_29361 = f__21382__auto__.call(null);
(statearr_29361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___29506);

return statearr_29361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(__29503,c__21381__auto___29506,G__29334_29504,n__17688__auto___29502,jobs,results,process,async))
);


break;
case "async":
var c__21381__auto___29515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29503,c__21381__auto___29515,G__29334_29504,n__17688__auto___29502,jobs,results,process,async){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (__29503,c__21381__auto___29515,G__29334_29504,n__17688__auto___29502,jobs,results,process,async){
return (function (state_29374){
var state_val_29375 = (state_29374[(1)]);
if((state_val_29375 === (1))){
var state_29374__$1 = state_29374;
var statearr_29376_29516 = state_29374__$1;
(statearr_29376_29516[(2)] = null);

(statearr_29376_29516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (2))){
var state_29374__$1 = state_29374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29374__$1,(4),jobs);
} else {
if((state_val_29375 === (3))){
var inst_29372 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29374__$1,inst_29372);
} else {
if((state_val_29375 === (4))){
var inst_29364 = (state_29374[(2)]);
var inst_29365 = async.call(null,inst_29364);
var state_29374__$1 = state_29374;
if(cljs.core.truth_(inst_29365)){
var statearr_29377_29517 = state_29374__$1;
(statearr_29377_29517[(1)] = (5));

} else {
var statearr_29378_29518 = state_29374__$1;
(statearr_29378_29518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (5))){
var state_29374__$1 = state_29374;
var statearr_29379_29519 = state_29374__$1;
(statearr_29379_29519[(2)] = null);

(statearr_29379_29519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (6))){
var state_29374__$1 = state_29374;
var statearr_29380_29520 = state_29374__$1;
(statearr_29380_29520[(2)] = null);

(statearr_29380_29520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (7))){
var inst_29370 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
var statearr_29381_29521 = state_29374__$1;
(statearr_29381_29521[(2)] = inst_29370);

(statearr_29381_29521[(1)] = (3));


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
});})(__29503,c__21381__auto___29515,G__29334_29504,n__17688__auto___29502,jobs,results,process,async))
;
return ((function (__29503,switch__21316__auto__,c__21381__auto___29515,G__29334_29504,n__17688__auto___29502,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_29385 = [null,null,null,null,null,null,null];
(statearr_29385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_29385[(1)] = (1));

return statearr_29385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_29374){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_29374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e29386){if((e29386 instanceof Object)){
var ex__21320__auto__ = e29386;
var statearr_29387_29522 = state_29374;
(statearr_29387_29522[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29523 = state_29374;
state_29374 = G__29523;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_29374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_29374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(__29503,switch__21316__auto__,c__21381__auto___29515,G__29334_29504,n__17688__auto___29502,jobs,results,process,async))
})();
var state__21383__auto__ = (function (){var statearr_29388 = f__21382__auto__.call(null);
(statearr_29388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___29515);

return statearr_29388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(__29503,c__21381__auto___29515,G__29334_29504,n__17688__auto___29502,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29524 = (__29503 + (1));
__29503 = G__29524;
continue;
} else {
}
break;
}

var c__21381__auto___29525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___29525,jobs,results,process,async){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___29525,jobs,results,process,async){
return (function (state_29410){
var state_val_29411 = (state_29410[(1)]);
if((state_val_29411 === (1))){
var state_29410__$1 = state_29410;
var statearr_29412_29526 = state_29410__$1;
(statearr_29412_29526[(2)] = null);

(statearr_29412_29526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (2))){
var state_29410__$1 = state_29410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29410__$1,(4),from);
} else {
if((state_val_29411 === (3))){
var inst_29408 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29410__$1,inst_29408);
} else {
if((state_val_29411 === (4))){
var inst_29391 = (state_29410[(7)]);
var inst_29391__$1 = (state_29410[(2)]);
var inst_29392 = (inst_29391__$1 == null);
var state_29410__$1 = (function (){var statearr_29413 = state_29410;
(statearr_29413[(7)] = inst_29391__$1);

return statearr_29413;
})();
if(cljs.core.truth_(inst_29392)){
var statearr_29414_29527 = state_29410__$1;
(statearr_29414_29527[(1)] = (5));

} else {
var statearr_29415_29528 = state_29410__$1;
(statearr_29415_29528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (5))){
var inst_29394 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29410__$1 = state_29410;
var statearr_29416_29529 = state_29410__$1;
(statearr_29416_29529[(2)] = inst_29394);

(statearr_29416_29529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (6))){
var inst_29391 = (state_29410[(7)]);
var inst_29396 = (state_29410[(8)]);
var inst_29396__$1 = cljs.core.async.chan.call(null,(1));
var inst_29397 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29398 = [inst_29391,inst_29396__$1];
var inst_29399 = (new cljs.core.PersistentVector(null,2,(5),inst_29397,inst_29398,null));
var state_29410__$1 = (function (){var statearr_29417 = state_29410;
(statearr_29417[(8)] = inst_29396__$1);

return statearr_29417;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29410__$1,(8),jobs,inst_29399);
} else {
if((state_val_29411 === (7))){
var inst_29406 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29418_29530 = state_29410__$1;
(statearr_29418_29530[(2)] = inst_29406);

(statearr_29418_29530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (8))){
var inst_29396 = (state_29410[(8)]);
var inst_29401 = (state_29410[(2)]);
var state_29410__$1 = (function (){var statearr_29419 = state_29410;
(statearr_29419[(9)] = inst_29401);

return statearr_29419;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29410__$1,(9),results,inst_29396);
} else {
if((state_val_29411 === (9))){
var inst_29403 = (state_29410[(2)]);
var state_29410__$1 = (function (){var statearr_29420 = state_29410;
(statearr_29420[(10)] = inst_29403);

return statearr_29420;
})();
var statearr_29421_29531 = state_29410__$1;
(statearr_29421_29531[(2)] = null);

(statearr_29421_29531[(1)] = (2));


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
});})(c__21381__auto___29525,jobs,results,process,async))
;
return ((function (switch__21316__auto__,c__21381__auto___29525,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_29425 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29425[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_29425[(1)] = (1));

return statearr_29425;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_29410){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_29410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e29426){if((e29426 instanceof Object)){
var ex__21320__auto__ = e29426;
var statearr_29427_29532 = state_29410;
(statearr_29427_29532[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29533 = state_29410;
state_29410 = G__29533;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_29410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_29410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___29525,jobs,results,process,async))
})();
var state__21383__auto__ = (function (){var statearr_29428 = f__21382__auto__.call(null);
(statearr_29428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___29525);

return statearr_29428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___29525,jobs,results,process,async))
);


var c__21381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto__,jobs,results,process,async){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto__,jobs,results,process,async){
return (function (state_29466){
var state_val_29467 = (state_29466[(1)]);
if((state_val_29467 === (7))){
var inst_29462 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
var statearr_29468_29534 = state_29466__$1;
(statearr_29468_29534[(2)] = inst_29462);

(statearr_29468_29534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (20))){
var state_29466__$1 = state_29466;
var statearr_29469_29535 = state_29466__$1;
(statearr_29469_29535[(2)] = null);

(statearr_29469_29535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (1))){
var state_29466__$1 = state_29466;
var statearr_29470_29536 = state_29466__$1;
(statearr_29470_29536[(2)] = null);

(statearr_29470_29536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (4))){
var inst_29431 = (state_29466[(7)]);
var inst_29431__$1 = (state_29466[(2)]);
var inst_29432 = (inst_29431__$1 == null);
var state_29466__$1 = (function (){var statearr_29471 = state_29466;
(statearr_29471[(7)] = inst_29431__$1);

return statearr_29471;
})();
if(cljs.core.truth_(inst_29432)){
var statearr_29472_29537 = state_29466__$1;
(statearr_29472_29537[(1)] = (5));

} else {
var statearr_29473_29538 = state_29466__$1;
(statearr_29473_29538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (15))){
var inst_29444 = (state_29466[(8)]);
var state_29466__$1 = state_29466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29466__$1,(18),to,inst_29444);
} else {
if((state_val_29467 === (21))){
var inst_29457 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
var statearr_29474_29539 = state_29466__$1;
(statearr_29474_29539[(2)] = inst_29457);

(statearr_29474_29539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (13))){
var inst_29459 = (state_29466[(2)]);
var state_29466__$1 = (function (){var statearr_29475 = state_29466;
(statearr_29475[(9)] = inst_29459);

return statearr_29475;
})();
var statearr_29476_29540 = state_29466__$1;
(statearr_29476_29540[(2)] = null);

(statearr_29476_29540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (6))){
var inst_29431 = (state_29466[(7)]);
var state_29466__$1 = state_29466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29466__$1,(11),inst_29431);
} else {
if((state_val_29467 === (17))){
var inst_29452 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
if(cljs.core.truth_(inst_29452)){
var statearr_29477_29541 = state_29466__$1;
(statearr_29477_29541[(1)] = (19));

} else {
var statearr_29478_29542 = state_29466__$1;
(statearr_29478_29542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (3))){
var inst_29464 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29466__$1,inst_29464);
} else {
if((state_val_29467 === (12))){
var inst_29441 = (state_29466[(10)]);
var state_29466__$1 = state_29466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29466__$1,(14),inst_29441);
} else {
if((state_val_29467 === (2))){
var state_29466__$1 = state_29466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29466__$1,(4),results);
} else {
if((state_val_29467 === (19))){
var state_29466__$1 = state_29466;
var statearr_29479_29543 = state_29466__$1;
(statearr_29479_29543[(2)] = null);

(statearr_29479_29543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (11))){
var inst_29441 = (state_29466[(2)]);
var state_29466__$1 = (function (){var statearr_29480 = state_29466;
(statearr_29480[(10)] = inst_29441);

return statearr_29480;
})();
var statearr_29481_29544 = state_29466__$1;
(statearr_29481_29544[(2)] = null);

(statearr_29481_29544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (9))){
var state_29466__$1 = state_29466;
var statearr_29482_29545 = state_29466__$1;
(statearr_29482_29545[(2)] = null);

(statearr_29482_29545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (5))){
var state_29466__$1 = state_29466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29483_29546 = state_29466__$1;
(statearr_29483_29546[(1)] = (8));

} else {
var statearr_29484_29547 = state_29466__$1;
(statearr_29484_29547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (14))){
var inst_29446 = (state_29466[(11)]);
var inst_29444 = (state_29466[(8)]);
var inst_29444__$1 = (state_29466[(2)]);
var inst_29445 = (inst_29444__$1 == null);
var inst_29446__$1 = cljs.core.not.call(null,inst_29445);
var state_29466__$1 = (function (){var statearr_29485 = state_29466;
(statearr_29485[(11)] = inst_29446__$1);

(statearr_29485[(8)] = inst_29444__$1);

return statearr_29485;
})();
if(inst_29446__$1){
var statearr_29486_29548 = state_29466__$1;
(statearr_29486_29548[(1)] = (15));

} else {
var statearr_29487_29549 = state_29466__$1;
(statearr_29487_29549[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (16))){
var inst_29446 = (state_29466[(11)]);
var state_29466__$1 = state_29466;
var statearr_29488_29550 = state_29466__$1;
(statearr_29488_29550[(2)] = inst_29446);

(statearr_29488_29550[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (10))){
var inst_29438 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
var statearr_29489_29551 = state_29466__$1;
(statearr_29489_29551[(2)] = inst_29438);

(statearr_29489_29551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (18))){
var inst_29449 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
var statearr_29490_29552 = state_29466__$1;
(statearr_29490_29552[(2)] = inst_29449);

(statearr_29490_29552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (8))){
var inst_29435 = cljs.core.async.close_BANG_.call(null,to);
var state_29466__$1 = state_29466;
var statearr_29491_29553 = state_29466__$1;
(statearr_29491_29553[(2)] = inst_29435);

(statearr_29491_29553[(1)] = (10));


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
var statearr_29495 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_29495[(1)] = (1));

return statearr_29495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_29466){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_29466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e29496){if((e29496 instanceof Object)){
var ex__21320__auto__ = e29496;
var statearr_29497_29554 = state_29466;
(statearr_29497_29554[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29555 = state_29466;
state_29466 = G__29555;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_29466){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_29466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__,jobs,results,process,async))
})();
var state__21383__auto__ = (function (){var statearr_29498 = f__21382__auto__.call(null);
(statearr_29498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_29498;
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
var args29556 = [];
var len__17843__auto___29559 = arguments.length;
var i__17844__auto___29560 = (0);
while(true){
if((i__17844__auto___29560 < len__17843__auto___29559)){
args29556.push((arguments[i__17844__auto___29560]));

var G__29561 = (i__17844__auto___29560 + (1));
i__17844__auto___29560 = G__29561;
continue;
} else {
}
break;
}

var G__29558 = args29556.length;
switch (G__29558) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29556.length)].join('')));

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
var args29563 = [];
var len__17843__auto___29566 = arguments.length;
var i__17844__auto___29567 = (0);
while(true){
if((i__17844__auto___29567 < len__17843__auto___29566)){
args29563.push((arguments[i__17844__auto___29567]));

var G__29568 = (i__17844__auto___29567 + (1));
i__17844__auto___29567 = G__29568;
continue;
} else {
}
break;
}

var G__29565 = args29563.length;
switch (G__29565) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29563.length)].join('')));

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
var args29570 = [];
var len__17843__auto___29623 = arguments.length;
var i__17844__auto___29624 = (0);
while(true){
if((i__17844__auto___29624 < len__17843__auto___29623)){
args29570.push((arguments[i__17844__auto___29624]));

var G__29625 = (i__17844__auto___29624 + (1));
i__17844__auto___29624 = G__29625;
continue;
} else {
}
break;
}

var G__29572 = args29570.length;
switch (G__29572) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29570.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21381__auto___29627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___29627,tc,fc){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___29627,tc,fc){
return (function (state_29598){
var state_val_29599 = (state_29598[(1)]);
if((state_val_29599 === (7))){
var inst_29594 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
var statearr_29600_29628 = state_29598__$1;
(statearr_29600_29628[(2)] = inst_29594);

(statearr_29600_29628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (1))){
var state_29598__$1 = state_29598;
var statearr_29601_29629 = state_29598__$1;
(statearr_29601_29629[(2)] = null);

(statearr_29601_29629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (4))){
var inst_29575 = (state_29598[(7)]);
var inst_29575__$1 = (state_29598[(2)]);
var inst_29576 = (inst_29575__$1 == null);
var state_29598__$1 = (function (){var statearr_29602 = state_29598;
(statearr_29602[(7)] = inst_29575__$1);

return statearr_29602;
})();
if(cljs.core.truth_(inst_29576)){
var statearr_29603_29630 = state_29598__$1;
(statearr_29603_29630[(1)] = (5));

} else {
var statearr_29604_29631 = state_29598__$1;
(statearr_29604_29631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (13))){
var state_29598__$1 = state_29598;
var statearr_29605_29632 = state_29598__$1;
(statearr_29605_29632[(2)] = null);

(statearr_29605_29632[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (6))){
var inst_29575 = (state_29598[(7)]);
var inst_29581 = p.call(null,inst_29575);
var state_29598__$1 = state_29598;
if(cljs.core.truth_(inst_29581)){
var statearr_29606_29633 = state_29598__$1;
(statearr_29606_29633[(1)] = (9));

} else {
var statearr_29607_29634 = state_29598__$1;
(statearr_29607_29634[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (3))){
var inst_29596 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29598__$1,inst_29596);
} else {
if((state_val_29599 === (12))){
var state_29598__$1 = state_29598;
var statearr_29608_29635 = state_29598__$1;
(statearr_29608_29635[(2)] = null);

(statearr_29608_29635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (2))){
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29598__$1,(4),ch);
} else {
if((state_val_29599 === (11))){
var inst_29575 = (state_29598[(7)]);
var inst_29585 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29598__$1,(8),inst_29585,inst_29575);
} else {
if((state_val_29599 === (9))){
var state_29598__$1 = state_29598;
var statearr_29609_29636 = state_29598__$1;
(statearr_29609_29636[(2)] = tc);

(statearr_29609_29636[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (5))){
var inst_29578 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29579 = cljs.core.async.close_BANG_.call(null,fc);
var state_29598__$1 = (function (){var statearr_29610 = state_29598;
(statearr_29610[(8)] = inst_29578);

return statearr_29610;
})();
var statearr_29611_29637 = state_29598__$1;
(statearr_29611_29637[(2)] = inst_29579);

(statearr_29611_29637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (14))){
var inst_29592 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
var statearr_29612_29638 = state_29598__$1;
(statearr_29612_29638[(2)] = inst_29592);

(statearr_29612_29638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (10))){
var state_29598__$1 = state_29598;
var statearr_29613_29639 = state_29598__$1;
(statearr_29613_29639[(2)] = fc);

(statearr_29613_29639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (8))){
var inst_29587 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
if(cljs.core.truth_(inst_29587)){
var statearr_29614_29640 = state_29598__$1;
(statearr_29614_29640[(1)] = (12));

} else {
var statearr_29615_29641 = state_29598__$1;
(statearr_29615_29641[(1)] = (13));

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
});})(c__21381__auto___29627,tc,fc))
;
return ((function (switch__21316__auto__,c__21381__auto___29627,tc,fc){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_29619 = [null,null,null,null,null,null,null,null,null];
(statearr_29619[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_29619[(1)] = (1));

return statearr_29619;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_29598){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_29598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e29620){if((e29620 instanceof Object)){
var ex__21320__auto__ = e29620;
var statearr_29621_29642 = state_29598;
(statearr_29621_29642[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29643 = state_29598;
state_29598 = G__29643;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_29598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_29598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___29627,tc,fc))
})();
var state__21383__auto__ = (function (){var statearr_29622 = f__21382__auto__.call(null);
(statearr_29622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___29627);

return statearr_29622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___29627,tc,fc))
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
return (function (state_29690){
var state_val_29691 = (state_29690[(1)]);
if((state_val_29691 === (1))){
var inst_29676 = init;
var state_29690__$1 = (function (){var statearr_29692 = state_29690;
(statearr_29692[(7)] = inst_29676);

return statearr_29692;
})();
var statearr_29693_29708 = state_29690__$1;
(statearr_29693_29708[(2)] = null);

(statearr_29693_29708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (2))){
var state_29690__$1 = state_29690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29690__$1,(4),ch);
} else {
if((state_val_29691 === (3))){
var inst_29688 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29690__$1,inst_29688);
} else {
if((state_val_29691 === (4))){
var inst_29679 = (state_29690[(8)]);
var inst_29679__$1 = (state_29690[(2)]);
var inst_29680 = (inst_29679__$1 == null);
var state_29690__$1 = (function (){var statearr_29694 = state_29690;
(statearr_29694[(8)] = inst_29679__$1);

return statearr_29694;
})();
if(cljs.core.truth_(inst_29680)){
var statearr_29695_29709 = state_29690__$1;
(statearr_29695_29709[(1)] = (5));

} else {
var statearr_29696_29710 = state_29690__$1;
(statearr_29696_29710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (5))){
var inst_29676 = (state_29690[(7)]);
var state_29690__$1 = state_29690;
var statearr_29697_29711 = state_29690__$1;
(statearr_29697_29711[(2)] = inst_29676);

(statearr_29697_29711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (6))){
var inst_29676 = (state_29690[(7)]);
var inst_29679 = (state_29690[(8)]);
var inst_29683 = f.call(null,inst_29676,inst_29679);
var inst_29676__$1 = inst_29683;
var state_29690__$1 = (function (){var statearr_29698 = state_29690;
(statearr_29698[(7)] = inst_29676__$1);

return statearr_29698;
})();
var statearr_29699_29712 = state_29690__$1;
(statearr_29699_29712[(2)] = null);

(statearr_29699_29712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29691 === (7))){
var inst_29686 = (state_29690[(2)]);
var state_29690__$1 = state_29690;
var statearr_29700_29713 = state_29690__$1;
(statearr_29700_29713[(2)] = inst_29686);

(statearr_29700_29713[(1)] = (3));


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
var statearr_29704 = [null,null,null,null,null,null,null,null,null];
(statearr_29704[(0)] = cljs$core$async$reduce_$_state_machine__21317__auto__);

(statearr_29704[(1)] = (1));

return statearr_29704;
});
var cljs$core$async$reduce_$_state_machine__21317__auto____1 = (function (state_29690){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_29690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e29705){if((e29705 instanceof Object)){
var ex__21320__auto__ = e29705;
var statearr_29706_29714 = state_29690;
(statearr_29706_29714[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29715 = state_29690;
state_29690 = G__29715;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21317__auto__ = function(state_29690){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21317__auto____1.call(this,state_29690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21317__auto____0;
cljs$core$async$reduce_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21317__auto____1;
return cljs$core$async$reduce_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_29707 = f__21382__auto__.call(null);
(statearr_29707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_29707;
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
var args29716 = [];
var len__17843__auto___29768 = arguments.length;
var i__17844__auto___29769 = (0);
while(true){
if((i__17844__auto___29769 < len__17843__auto___29768)){
args29716.push((arguments[i__17844__auto___29769]));

var G__29770 = (i__17844__auto___29769 + (1));
i__17844__auto___29769 = G__29770;
continue;
} else {
}
break;
}

var G__29718 = args29716.length;
switch (G__29718) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29716.length)].join('')));

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
return (function (state_29743){
var state_val_29744 = (state_29743[(1)]);
if((state_val_29744 === (7))){
var inst_29725 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
var statearr_29745_29772 = state_29743__$1;
(statearr_29745_29772[(2)] = inst_29725);

(statearr_29745_29772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (1))){
var inst_29719 = cljs.core.seq.call(null,coll);
var inst_29720 = inst_29719;
var state_29743__$1 = (function (){var statearr_29746 = state_29743;
(statearr_29746[(7)] = inst_29720);

return statearr_29746;
})();
var statearr_29747_29773 = state_29743__$1;
(statearr_29747_29773[(2)] = null);

(statearr_29747_29773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (4))){
var inst_29720 = (state_29743[(7)]);
var inst_29723 = cljs.core.first.call(null,inst_29720);
var state_29743__$1 = state_29743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29743__$1,(7),ch,inst_29723);
} else {
if((state_val_29744 === (13))){
var inst_29737 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
var statearr_29748_29774 = state_29743__$1;
(statearr_29748_29774[(2)] = inst_29737);

(statearr_29748_29774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (6))){
var inst_29728 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
if(cljs.core.truth_(inst_29728)){
var statearr_29749_29775 = state_29743__$1;
(statearr_29749_29775[(1)] = (8));

} else {
var statearr_29750_29776 = state_29743__$1;
(statearr_29750_29776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (3))){
var inst_29741 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29743__$1,inst_29741);
} else {
if((state_val_29744 === (12))){
var state_29743__$1 = state_29743;
var statearr_29751_29777 = state_29743__$1;
(statearr_29751_29777[(2)] = null);

(statearr_29751_29777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (2))){
var inst_29720 = (state_29743[(7)]);
var state_29743__$1 = state_29743;
if(cljs.core.truth_(inst_29720)){
var statearr_29752_29778 = state_29743__$1;
(statearr_29752_29778[(1)] = (4));

} else {
var statearr_29753_29779 = state_29743__$1;
(statearr_29753_29779[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (11))){
var inst_29734 = cljs.core.async.close_BANG_.call(null,ch);
var state_29743__$1 = state_29743;
var statearr_29754_29780 = state_29743__$1;
(statearr_29754_29780[(2)] = inst_29734);

(statearr_29754_29780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (9))){
var state_29743__$1 = state_29743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29755_29781 = state_29743__$1;
(statearr_29755_29781[(1)] = (11));

} else {
var statearr_29756_29782 = state_29743__$1;
(statearr_29756_29782[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (5))){
var inst_29720 = (state_29743[(7)]);
var state_29743__$1 = state_29743;
var statearr_29757_29783 = state_29743__$1;
(statearr_29757_29783[(2)] = inst_29720);

(statearr_29757_29783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (10))){
var inst_29739 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
var statearr_29758_29784 = state_29743__$1;
(statearr_29758_29784[(2)] = inst_29739);

(statearr_29758_29784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (8))){
var inst_29720 = (state_29743[(7)]);
var inst_29730 = cljs.core.next.call(null,inst_29720);
var inst_29720__$1 = inst_29730;
var state_29743__$1 = (function (){var statearr_29759 = state_29743;
(statearr_29759[(7)] = inst_29720__$1);

return statearr_29759;
})();
var statearr_29760_29785 = state_29743__$1;
(statearr_29760_29785[(2)] = null);

(statearr_29760_29785[(1)] = (2));


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
var statearr_29764 = [null,null,null,null,null,null,null,null];
(statearr_29764[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_29764[(1)] = (1));

return statearr_29764;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_29743){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_29743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e29765){if((e29765 instanceof Object)){
var ex__21320__auto__ = e29765;
var statearr_29766_29786 = state_29743;
(statearr_29766_29786[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29787 = state_29743;
state_29743 = G__29787;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_29743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_29743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_29767 = f__21382__auto__.call(null);
(statearr_29767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_29767;
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
if(typeof cljs.core.async.t_cljs$core$async30009 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30009 = (function (mult,ch,cs,meta30010){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30010 = meta30010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30011,meta30010__$1){
var self__ = this;
var _30011__$1 = this;
return (new cljs.core.async.t_cljs$core$async30009(self__.mult,self__.ch,self__.cs,meta30010__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30011){
var self__ = this;
var _30011__$1 = this;
return self__.meta30010;
});})(cs))
;

cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30009.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30010","meta30010",1506080374,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30009.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30009";

cljs.core.async.t_cljs$core$async30009.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async30009");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30009 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30009(mult__$1,ch__$1,cs__$1,meta30010){
return (new cljs.core.async.t_cljs$core$async30009(mult__$1,ch__$1,cs__$1,meta30010));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30009(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21381__auto___30230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___30230,cs,m,dchan,dctr,done){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___30230,cs,m,dchan,dctr,done){
return (function (state_30142){
var state_val_30143 = (state_30142[(1)]);
if((state_val_30143 === (7))){
var inst_30138 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30144_30231 = state_30142__$1;
(statearr_30144_30231[(2)] = inst_30138);

(statearr_30144_30231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (20))){
var inst_30043 = (state_30142[(7)]);
var inst_30053 = cljs.core.first.call(null,inst_30043);
var inst_30054 = cljs.core.nth.call(null,inst_30053,(0),null);
var inst_30055 = cljs.core.nth.call(null,inst_30053,(1),null);
var state_30142__$1 = (function (){var statearr_30145 = state_30142;
(statearr_30145[(8)] = inst_30054);

return statearr_30145;
})();
if(cljs.core.truth_(inst_30055)){
var statearr_30146_30232 = state_30142__$1;
(statearr_30146_30232[(1)] = (22));

} else {
var statearr_30147_30233 = state_30142__$1;
(statearr_30147_30233[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (27))){
var inst_30090 = (state_30142[(9)]);
var inst_30085 = (state_30142[(10)]);
var inst_30083 = (state_30142[(11)]);
var inst_30014 = (state_30142[(12)]);
var inst_30090__$1 = cljs.core._nth.call(null,inst_30083,inst_30085);
var inst_30091 = cljs.core.async.put_BANG_.call(null,inst_30090__$1,inst_30014,done);
var state_30142__$1 = (function (){var statearr_30148 = state_30142;
(statearr_30148[(9)] = inst_30090__$1);

return statearr_30148;
})();
if(cljs.core.truth_(inst_30091)){
var statearr_30149_30234 = state_30142__$1;
(statearr_30149_30234[(1)] = (30));

} else {
var statearr_30150_30235 = state_30142__$1;
(statearr_30150_30235[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (1))){
var state_30142__$1 = state_30142;
var statearr_30151_30236 = state_30142__$1;
(statearr_30151_30236[(2)] = null);

(statearr_30151_30236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (24))){
var inst_30043 = (state_30142[(7)]);
var inst_30060 = (state_30142[(2)]);
var inst_30061 = cljs.core.next.call(null,inst_30043);
var inst_30023 = inst_30061;
var inst_30024 = null;
var inst_30025 = (0);
var inst_30026 = (0);
var state_30142__$1 = (function (){var statearr_30152 = state_30142;
(statearr_30152[(13)] = inst_30060);

(statearr_30152[(14)] = inst_30026);

(statearr_30152[(15)] = inst_30025);

(statearr_30152[(16)] = inst_30024);

(statearr_30152[(17)] = inst_30023);

return statearr_30152;
})();
var statearr_30153_30237 = state_30142__$1;
(statearr_30153_30237[(2)] = null);

(statearr_30153_30237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (39))){
var state_30142__$1 = state_30142;
var statearr_30157_30238 = state_30142__$1;
(statearr_30157_30238[(2)] = null);

(statearr_30157_30238[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (4))){
var inst_30014 = (state_30142[(12)]);
var inst_30014__$1 = (state_30142[(2)]);
var inst_30015 = (inst_30014__$1 == null);
var state_30142__$1 = (function (){var statearr_30158 = state_30142;
(statearr_30158[(12)] = inst_30014__$1);

return statearr_30158;
})();
if(cljs.core.truth_(inst_30015)){
var statearr_30159_30239 = state_30142__$1;
(statearr_30159_30239[(1)] = (5));

} else {
var statearr_30160_30240 = state_30142__$1;
(statearr_30160_30240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (15))){
var inst_30026 = (state_30142[(14)]);
var inst_30025 = (state_30142[(15)]);
var inst_30024 = (state_30142[(16)]);
var inst_30023 = (state_30142[(17)]);
var inst_30039 = (state_30142[(2)]);
var inst_30040 = (inst_30026 + (1));
var tmp30154 = inst_30025;
var tmp30155 = inst_30024;
var tmp30156 = inst_30023;
var inst_30023__$1 = tmp30156;
var inst_30024__$1 = tmp30155;
var inst_30025__$1 = tmp30154;
var inst_30026__$1 = inst_30040;
var state_30142__$1 = (function (){var statearr_30161 = state_30142;
(statearr_30161[(14)] = inst_30026__$1);

(statearr_30161[(15)] = inst_30025__$1);

(statearr_30161[(16)] = inst_30024__$1);

(statearr_30161[(18)] = inst_30039);

(statearr_30161[(17)] = inst_30023__$1);

return statearr_30161;
})();
var statearr_30162_30241 = state_30142__$1;
(statearr_30162_30241[(2)] = null);

(statearr_30162_30241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (21))){
var inst_30064 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30166_30242 = state_30142__$1;
(statearr_30166_30242[(2)] = inst_30064);

(statearr_30166_30242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (31))){
var inst_30090 = (state_30142[(9)]);
var inst_30094 = done.call(null,null);
var inst_30095 = cljs.core.async.untap_STAR_.call(null,m,inst_30090);
var state_30142__$1 = (function (){var statearr_30167 = state_30142;
(statearr_30167[(19)] = inst_30094);

return statearr_30167;
})();
var statearr_30168_30243 = state_30142__$1;
(statearr_30168_30243[(2)] = inst_30095);

(statearr_30168_30243[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (32))){
var inst_30085 = (state_30142[(10)]);
var inst_30083 = (state_30142[(11)]);
var inst_30082 = (state_30142[(20)]);
var inst_30084 = (state_30142[(21)]);
var inst_30097 = (state_30142[(2)]);
var inst_30098 = (inst_30085 + (1));
var tmp30163 = inst_30083;
var tmp30164 = inst_30082;
var tmp30165 = inst_30084;
var inst_30082__$1 = tmp30164;
var inst_30083__$1 = tmp30163;
var inst_30084__$1 = tmp30165;
var inst_30085__$1 = inst_30098;
var state_30142__$1 = (function (){var statearr_30169 = state_30142;
(statearr_30169[(10)] = inst_30085__$1);

(statearr_30169[(11)] = inst_30083__$1);

(statearr_30169[(22)] = inst_30097);

(statearr_30169[(20)] = inst_30082__$1);

(statearr_30169[(21)] = inst_30084__$1);

return statearr_30169;
})();
var statearr_30170_30244 = state_30142__$1;
(statearr_30170_30244[(2)] = null);

(statearr_30170_30244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (40))){
var inst_30110 = (state_30142[(23)]);
var inst_30114 = done.call(null,null);
var inst_30115 = cljs.core.async.untap_STAR_.call(null,m,inst_30110);
var state_30142__$1 = (function (){var statearr_30171 = state_30142;
(statearr_30171[(24)] = inst_30114);

return statearr_30171;
})();
var statearr_30172_30245 = state_30142__$1;
(statearr_30172_30245[(2)] = inst_30115);

(statearr_30172_30245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (33))){
var inst_30101 = (state_30142[(25)]);
var inst_30103 = cljs.core.chunked_seq_QMARK_.call(null,inst_30101);
var state_30142__$1 = state_30142;
if(inst_30103){
var statearr_30173_30246 = state_30142__$1;
(statearr_30173_30246[(1)] = (36));

} else {
var statearr_30174_30247 = state_30142__$1;
(statearr_30174_30247[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (13))){
var inst_30033 = (state_30142[(26)]);
var inst_30036 = cljs.core.async.close_BANG_.call(null,inst_30033);
var state_30142__$1 = state_30142;
var statearr_30175_30248 = state_30142__$1;
(statearr_30175_30248[(2)] = inst_30036);

(statearr_30175_30248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (22))){
var inst_30054 = (state_30142[(8)]);
var inst_30057 = cljs.core.async.close_BANG_.call(null,inst_30054);
var state_30142__$1 = state_30142;
var statearr_30176_30249 = state_30142__$1;
(statearr_30176_30249[(2)] = inst_30057);

(statearr_30176_30249[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (36))){
var inst_30101 = (state_30142[(25)]);
var inst_30105 = cljs.core.chunk_first.call(null,inst_30101);
var inst_30106 = cljs.core.chunk_rest.call(null,inst_30101);
var inst_30107 = cljs.core.count.call(null,inst_30105);
var inst_30082 = inst_30106;
var inst_30083 = inst_30105;
var inst_30084 = inst_30107;
var inst_30085 = (0);
var state_30142__$1 = (function (){var statearr_30177 = state_30142;
(statearr_30177[(10)] = inst_30085);

(statearr_30177[(11)] = inst_30083);

(statearr_30177[(20)] = inst_30082);

(statearr_30177[(21)] = inst_30084);

return statearr_30177;
})();
var statearr_30178_30250 = state_30142__$1;
(statearr_30178_30250[(2)] = null);

(statearr_30178_30250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (41))){
var inst_30101 = (state_30142[(25)]);
var inst_30117 = (state_30142[(2)]);
var inst_30118 = cljs.core.next.call(null,inst_30101);
var inst_30082 = inst_30118;
var inst_30083 = null;
var inst_30084 = (0);
var inst_30085 = (0);
var state_30142__$1 = (function (){var statearr_30179 = state_30142;
(statearr_30179[(10)] = inst_30085);

(statearr_30179[(11)] = inst_30083);

(statearr_30179[(27)] = inst_30117);

(statearr_30179[(20)] = inst_30082);

(statearr_30179[(21)] = inst_30084);

return statearr_30179;
})();
var statearr_30180_30251 = state_30142__$1;
(statearr_30180_30251[(2)] = null);

(statearr_30180_30251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (43))){
var state_30142__$1 = state_30142;
var statearr_30181_30252 = state_30142__$1;
(statearr_30181_30252[(2)] = null);

(statearr_30181_30252[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (29))){
var inst_30126 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30182_30253 = state_30142__$1;
(statearr_30182_30253[(2)] = inst_30126);

(statearr_30182_30253[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (44))){
var inst_30135 = (state_30142[(2)]);
var state_30142__$1 = (function (){var statearr_30183 = state_30142;
(statearr_30183[(28)] = inst_30135);

return statearr_30183;
})();
var statearr_30184_30254 = state_30142__$1;
(statearr_30184_30254[(2)] = null);

(statearr_30184_30254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (6))){
var inst_30074 = (state_30142[(29)]);
var inst_30073 = cljs.core.deref.call(null,cs);
var inst_30074__$1 = cljs.core.keys.call(null,inst_30073);
var inst_30075 = cljs.core.count.call(null,inst_30074__$1);
var inst_30076 = cljs.core.reset_BANG_.call(null,dctr,inst_30075);
var inst_30081 = cljs.core.seq.call(null,inst_30074__$1);
var inst_30082 = inst_30081;
var inst_30083 = null;
var inst_30084 = (0);
var inst_30085 = (0);
var state_30142__$1 = (function (){var statearr_30185 = state_30142;
(statearr_30185[(10)] = inst_30085);

(statearr_30185[(11)] = inst_30083);

(statearr_30185[(20)] = inst_30082);

(statearr_30185[(21)] = inst_30084);

(statearr_30185[(30)] = inst_30076);

(statearr_30185[(29)] = inst_30074__$1);

return statearr_30185;
})();
var statearr_30186_30255 = state_30142__$1;
(statearr_30186_30255[(2)] = null);

(statearr_30186_30255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (28))){
var inst_30082 = (state_30142[(20)]);
var inst_30101 = (state_30142[(25)]);
var inst_30101__$1 = cljs.core.seq.call(null,inst_30082);
var state_30142__$1 = (function (){var statearr_30187 = state_30142;
(statearr_30187[(25)] = inst_30101__$1);

return statearr_30187;
})();
if(inst_30101__$1){
var statearr_30188_30256 = state_30142__$1;
(statearr_30188_30256[(1)] = (33));

} else {
var statearr_30189_30257 = state_30142__$1;
(statearr_30189_30257[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (25))){
var inst_30085 = (state_30142[(10)]);
var inst_30084 = (state_30142[(21)]);
var inst_30087 = (inst_30085 < inst_30084);
var inst_30088 = inst_30087;
var state_30142__$1 = state_30142;
if(cljs.core.truth_(inst_30088)){
var statearr_30190_30258 = state_30142__$1;
(statearr_30190_30258[(1)] = (27));

} else {
var statearr_30191_30259 = state_30142__$1;
(statearr_30191_30259[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (34))){
var state_30142__$1 = state_30142;
var statearr_30192_30260 = state_30142__$1;
(statearr_30192_30260[(2)] = null);

(statearr_30192_30260[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (17))){
var state_30142__$1 = state_30142;
var statearr_30193_30261 = state_30142__$1;
(statearr_30193_30261[(2)] = null);

(statearr_30193_30261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (3))){
var inst_30140 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30142__$1,inst_30140);
} else {
if((state_val_30143 === (12))){
var inst_30069 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30194_30262 = state_30142__$1;
(statearr_30194_30262[(2)] = inst_30069);

(statearr_30194_30262[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (2))){
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30142__$1,(4),ch);
} else {
if((state_val_30143 === (23))){
var state_30142__$1 = state_30142;
var statearr_30195_30263 = state_30142__$1;
(statearr_30195_30263[(2)] = null);

(statearr_30195_30263[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (35))){
var inst_30124 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30196_30264 = state_30142__$1;
(statearr_30196_30264[(2)] = inst_30124);

(statearr_30196_30264[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (19))){
var inst_30043 = (state_30142[(7)]);
var inst_30047 = cljs.core.chunk_first.call(null,inst_30043);
var inst_30048 = cljs.core.chunk_rest.call(null,inst_30043);
var inst_30049 = cljs.core.count.call(null,inst_30047);
var inst_30023 = inst_30048;
var inst_30024 = inst_30047;
var inst_30025 = inst_30049;
var inst_30026 = (0);
var state_30142__$1 = (function (){var statearr_30197 = state_30142;
(statearr_30197[(14)] = inst_30026);

(statearr_30197[(15)] = inst_30025);

(statearr_30197[(16)] = inst_30024);

(statearr_30197[(17)] = inst_30023);

return statearr_30197;
})();
var statearr_30198_30265 = state_30142__$1;
(statearr_30198_30265[(2)] = null);

(statearr_30198_30265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (11))){
var inst_30023 = (state_30142[(17)]);
var inst_30043 = (state_30142[(7)]);
var inst_30043__$1 = cljs.core.seq.call(null,inst_30023);
var state_30142__$1 = (function (){var statearr_30199 = state_30142;
(statearr_30199[(7)] = inst_30043__$1);

return statearr_30199;
})();
if(inst_30043__$1){
var statearr_30200_30266 = state_30142__$1;
(statearr_30200_30266[(1)] = (16));

} else {
var statearr_30201_30267 = state_30142__$1;
(statearr_30201_30267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (9))){
var inst_30071 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30202_30268 = state_30142__$1;
(statearr_30202_30268[(2)] = inst_30071);

(statearr_30202_30268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (5))){
var inst_30021 = cljs.core.deref.call(null,cs);
var inst_30022 = cljs.core.seq.call(null,inst_30021);
var inst_30023 = inst_30022;
var inst_30024 = null;
var inst_30025 = (0);
var inst_30026 = (0);
var state_30142__$1 = (function (){var statearr_30203 = state_30142;
(statearr_30203[(14)] = inst_30026);

(statearr_30203[(15)] = inst_30025);

(statearr_30203[(16)] = inst_30024);

(statearr_30203[(17)] = inst_30023);

return statearr_30203;
})();
var statearr_30204_30269 = state_30142__$1;
(statearr_30204_30269[(2)] = null);

(statearr_30204_30269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (14))){
var state_30142__$1 = state_30142;
var statearr_30205_30270 = state_30142__$1;
(statearr_30205_30270[(2)] = null);

(statearr_30205_30270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (45))){
var inst_30132 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30206_30271 = state_30142__$1;
(statearr_30206_30271[(2)] = inst_30132);

(statearr_30206_30271[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (26))){
var inst_30074 = (state_30142[(29)]);
var inst_30128 = (state_30142[(2)]);
var inst_30129 = cljs.core.seq.call(null,inst_30074);
var state_30142__$1 = (function (){var statearr_30207 = state_30142;
(statearr_30207[(31)] = inst_30128);

return statearr_30207;
})();
if(inst_30129){
var statearr_30208_30272 = state_30142__$1;
(statearr_30208_30272[(1)] = (42));

} else {
var statearr_30209_30273 = state_30142__$1;
(statearr_30209_30273[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (16))){
var inst_30043 = (state_30142[(7)]);
var inst_30045 = cljs.core.chunked_seq_QMARK_.call(null,inst_30043);
var state_30142__$1 = state_30142;
if(inst_30045){
var statearr_30210_30274 = state_30142__$1;
(statearr_30210_30274[(1)] = (19));

} else {
var statearr_30211_30275 = state_30142__$1;
(statearr_30211_30275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (38))){
var inst_30121 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30212_30276 = state_30142__$1;
(statearr_30212_30276[(2)] = inst_30121);

(statearr_30212_30276[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (30))){
var state_30142__$1 = state_30142;
var statearr_30213_30277 = state_30142__$1;
(statearr_30213_30277[(2)] = null);

(statearr_30213_30277[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (10))){
var inst_30026 = (state_30142[(14)]);
var inst_30024 = (state_30142[(16)]);
var inst_30032 = cljs.core._nth.call(null,inst_30024,inst_30026);
var inst_30033 = cljs.core.nth.call(null,inst_30032,(0),null);
var inst_30034 = cljs.core.nth.call(null,inst_30032,(1),null);
var state_30142__$1 = (function (){var statearr_30214 = state_30142;
(statearr_30214[(26)] = inst_30033);

return statearr_30214;
})();
if(cljs.core.truth_(inst_30034)){
var statearr_30215_30278 = state_30142__$1;
(statearr_30215_30278[(1)] = (13));

} else {
var statearr_30216_30279 = state_30142__$1;
(statearr_30216_30279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (18))){
var inst_30067 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30217_30280 = state_30142__$1;
(statearr_30217_30280[(2)] = inst_30067);

(statearr_30217_30280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (42))){
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30142__$1,(45),dchan);
} else {
if((state_val_30143 === (37))){
var inst_30110 = (state_30142[(23)]);
var inst_30014 = (state_30142[(12)]);
var inst_30101 = (state_30142[(25)]);
var inst_30110__$1 = cljs.core.first.call(null,inst_30101);
var inst_30111 = cljs.core.async.put_BANG_.call(null,inst_30110__$1,inst_30014,done);
var state_30142__$1 = (function (){var statearr_30218 = state_30142;
(statearr_30218[(23)] = inst_30110__$1);

return statearr_30218;
})();
if(cljs.core.truth_(inst_30111)){
var statearr_30219_30281 = state_30142__$1;
(statearr_30219_30281[(1)] = (39));

} else {
var statearr_30220_30282 = state_30142__$1;
(statearr_30220_30282[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (8))){
var inst_30026 = (state_30142[(14)]);
var inst_30025 = (state_30142[(15)]);
var inst_30028 = (inst_30026 < inst_30025);
var inst_30029 = inst_30028;
var state_30142__$1 = state_30142;
if(cljs.core.truth_(inst_30029)){
var statearr_30221_30283 = state_30142__$1;
(statearr_30221_30283[(1)] = (10));

} else {
var statearr_30222_30284 = state_30142__$1;
(statearr_30222_30284[(1)] = (11));

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
});})(c__21381__auto___30230,cs,m,dchan,dctr,done))
;
return ((function (switch__21316__auto__,c__21381__auto___30230,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21317__auto__ = null;
var cljs$core$async$mult_$_state_machine__21317__auto____0 = (function (){
var statearr_30226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30226[(0)] = cljs$core$async$mult_$_state_machine__21317__auto__);

(statearr_30226[(1)] = (1));

return statearr_30226;
});
var cljs$core$async$mult_$_state_machine__21317__auto____1 = (function (state_30142){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_30142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e30227){if((e30227 instanceof Object)){
var ex__21320__auto__ = e30227;
var statearr_30228_30285 = state_30142;
(statearr_30228_30285[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30286 = state_30142;
state_30142 = G__30286;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21317__auto__ = function(state_30142){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21317__auto____1.call(this,state_30142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21317__auto____0;
cljs$core$async$mult_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21317__auto____1;
return cljs$core$async$mult_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___30230,cs,m,dchan,dctr,done))
})();
var state__21383__auto__ = (function (){var statearr_30229 = f__21382__auto__.call(null);
(statearr_30229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___30230);

return statearr_30229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___30230,cs,m,dchan,dctr,done))
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
var args30287 = [];
var len__17843__auto___30290 = arguments.length;
var i__17844__auto___30291 = (0);
while(true){
if((i__17844__auto___30291 < len__17843__auto___30290)){
args30287.push((arguments[i__17844__auto___30291]));

var G__30292 = (i__17844__auto___30291 + (1));
i__17844__auto___30291 = G__30292;
continue;
} else {
}
break;
}

var G__30289 = args30287.length;
switch (G__30289) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30287.length)].join('')));

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
var len__17843__auto___30304 = arguments.length;
var i__17844__auto___30305 = (0);
while(true){
if((i__17844__auto___30305 < len__17843__auto___30304)){
args__17850__auto__.push((arguments[i__17844__auto___30305]));

var G__30306 = (i__17844__auto___30305 + (1));
i__17844__auto___30305 = G__30306;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((3) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17851__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30298){
var map__30299 = p__30298;
var map__30299__$1 = ((((!((map__30299 == null)))?((((map__30299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30299):map__30299);
var opts = map__30299__$1;
var statearr_30301_30307 = state;
(statearr_30301_30307[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__30299,map__30299__$1,opts){
return (function (val){
var statearr_30302_30308 = state;
(statearr_30302_30308[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30299,map__30299__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_30303_30309 = state;
(statearr_30303_30309[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30294){
var G__30295 = cljs.core.first.call(null,seq30294);
var seq30294__$1 = cljs.core.next.call(null,seq30294);
var G__30296 = cljs.core.first.call(null,seq30294__$1);
var seq30294__$2 = cljs.core.next.call(null,seq30294__$1);
var G__30297 = cljs.core.first.call(null,seq30294__$2);
var seq30294__$3 = cljs.core.next.call(null,seq30294__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30295,G__30296,G__30297,seq30294__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30473 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30474){
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
this.meta30474 = meta30474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30475,meta30474__$1){
var self__ = this;
var _30475__$1 = this;
return (new cljs.core.async.t_cljs$core$async30473(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30474__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30475){
var self__ = this;
var _30475__$1 = this;
return self__.meta30474;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30473.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30473.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30473.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30473.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30473.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30473.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30473.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30473.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30473.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30474","meta30474",2006448590,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30473";

cljs.core.async.t_cljs$core$async30473.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async30473");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30473 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30473(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30474){
return (new cljs.core.async.t_cljs$core$async30473(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30474));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30473(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21381__auto___30636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___30636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___30636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30573){
var state_val_30574 = (state_30573[(1)]);
if((state_val_30574 === (7))){
var inst_30491 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30575_30637 = state_30573__$1;
(statearr_30575_30637[(2)] = inst_30491);

(statearr_30575_30637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (20))){
var inst_30503 = (state_30573[(7)]);
var state_30573__$1 = state_30573;
var statearr_30576_30638 = state_30573__$1;
(statearr_30576_30638[(2)] = inst_30503);

(statearr_30576_30638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (27))){
var state_30573__$1 = state_30573;
var statearr_30577_30639 = state_30573__$1;
(statearr_30577_30639[(2)] = null);

(statearr_30577_30639[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (1))){
var inst_30479 = (state_30573[(8)]);
var inst_30479__$1 = calc_state.call(null);
var inst_30481 = (inst_30479__$1 == null);
var inst_30482 = cljs.core.not.call(null,inst_30481);
var state_30573__$1 = (function (){var statearr_30578 = state_30573;
(statearr_30578[(8)] = inst_30479__$1);

return statearr_30578;
})();
if(inst_30482){
var statearr_30579_30640 = state_30573__$1;
(statearr_30579_30640[(1)] = (2));

} else {
var statearr_30580_30641 = state_30573__$1;
(statearr_30580_30641[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (24))){
var inst_30547 = (state_30573[(9)]);
var inst_30526 = (state_30573[(10)]);
var inst_30533 = (state_30573[(11)]);
var inst_30547__$1 = inst_30526.call(null,inst_30533);
var state_30573__$1 = (function (){var statearr_30581 = state_30573;
(statearr_30581[(9)] = inst_30547__$1);

return statearr_30581;
})();
if(cljs.core.truth_(inst_30547__$1)){
var statearr_30582_30642 = state_30573__$1;
(statearr_30582_30642[(1)] = (29));

} else {
var statearr_30583_30643 = state_30573__$1;
(statearr_30583_30643[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (4))){
var inst_30494 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30494)){
var statearr_30584_30644 = state_30573__$1;
(statearr_30584_30644[(1)] = (8));

} else {
var statearr_30585_30645 = state_30573__$1;
(statearr_30585_30645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (15))){
var inst_30520 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30520)){
var statearr_30586_30646 = state_30573__$1;
(statearr_30586_30646[(1)] = (19));

} else {
var statearr_30587_30647 = state_30573__$1;
(statearr_30587_30647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (21))){
var inst_30525 = (state_30573[(12)]);
var inst_30525__$1 = (state_30573[(2)]);
var inst_30526 = cljs.core.get.call(null,inst_30525__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30527 = cljs.core.get.call(null,inst_30525__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30528 = cljs.core.get.call(null,inst_30525__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30573__$1 = (function (){var statearr_30588 = state_30573;
(statearr_30588[(13)] = inst_30527);

(statearr_30588[(10)] = inst_30526);

(statearr_30588[(12)] = inst_30525__$1);

return statearr_30588;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30573__$1,(22),inst_30528);
} else {
if((state_val_30574 === (31))){
var inst_30555 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30555)){
var statearr_30589_30648 = state_30573__$1;
(statearr_30589_30648[(1)] = (32));

} else {
var statearr_30590_30649 = state_30573__$1;
(statearr_30590_30649[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (32))){
var inst_30532 = (state_30573[(14)]);
var state_30573__$1 = state_30573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30573__$1,(35),out,inst_30532);
} else {
if((state_val_30574 === (33))){
var inst_30525 = (state_30573[(12)]);
var inst_30503 = inst_30525;
var state_30573__$1 = (function (){var statearr_30591 = state_30573;
(statearr_30591[(7)] = inst_30503);

return statearr_30591;
})();
var statearr_30592_30650 = state_30573__$1;
(statearr_30592_30650[(2)] = null);

(statearr_30592_30650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (13))){
var inst_30503 = (state_30573[(7)]);
var inst_30510 = inst_30503.cljs$lang$protocol_mask$partition0$;
var inst_30511 = (inst_30510 & (64));
var inst_30512 = inst_30503.cljs$core$ISeq$;
var inst_30513 = (inst_30511) || (inst_30512);
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30513)){
var statearr_30593_30651 = state_30573__$1;
(statearr_30593_30651[(1)] = (16));

} else {
var statearr_30594_30652 = state_30573__$1;
(statearr_30594_30652[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (22))){
var inst_30533 = (state_30573[(11)]);
var inst_30532 = (state_30573[(14)]);
var inst_30531 = (state_30573[(2)]);
var inst_30532__$1 = cljs.core.nth.call(null,inst_30531,(0),null);
var inst_30533__$1 = cljs.core.nth.call(null,inst_30531,(1),null);
var inst_30534 = (inst_30532__$1 == null);
var inst_30535 = cljs.core._EQ_.call(null,inst_30533__$1,change);
var inst_30536 = (inst_30534) || (inst_30535);
var state_30573__$1 = (function (){var statearr_30595 = state_30573;
(statearr_30595[(11)] = inst_30533__$1);

(statearr_30595[(14)] = inst_30532__$1);

return statearr_30595;
})();
if(cljs.core.truth_(inst_30536)){
var statearr_30596_30653 = state_30573__$1;
(statearr_30596_30653[(1)] = (23));

} else {
var statearr_30597_30654 = state_30573__$1;
(statearr_30597_30654[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (36))){
var inst_30525 = (state_30573[(12)]);
var inst_30503 = inst_30525;
var state_30573__$1 = (function (){var statearr_30598 = state_30573;
(statearr_30598[(7)] = inst_30503);

return statearr_30598;
})();
var statearr_30599_30655 = state_30573__$1;
(statearr_30599_30655[(2)] = null);

(statearr_30599_30655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (29))){
var inst_30547 = (state_30573[(9)]);
var state_30573__$1 = state_30573;
var statearr_30600_30656 = state_30573__$1;
(statearr_30600_30656[(2)] = inst_30547);

(statearr_30600_30656[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (6))){
var state_30573__$1 = state_30573;
var statearr_30601_30657 = state_30573__$1;
(statearr_30601_30657[(2)] = false);

(statearr_30601_30657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (28))){
var inst_30543 = (state_30573[(2)]);
var inst_30544 = calc_state.call(null);
var inst_30503 = inst_30544;
var state_30573__$1 = (function (){var statearr_30602 = state_30573;
(statearr_30602[(7)] = inst_30503);

(statearr_30602[(15)] = inst_30543);

return statearr_30602;
})();
var statearr_30603_30658 = state_30573__$1;
(statearr_30603_30658[(2)] = null);

(statearr_30603_30658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (25))){
var inst_30569 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30604_30659 = state_30573__$1;
(statearr_30604_30659[(2)] = inst_30569);

(statearr_30604_30659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (34))){
var inst_30567 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30605_30660 = state_30573__$1;
(statearr_30605_30660[(2)] = inst_30567);

(statearr_30605_30660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (17))){
var state_30573__$1 = state_30573;
var statearr_30606_30661 = state_30573__$1;
(statearr_30606_30661[(2)] = false);

(statearr_30606_30661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (3))){
var state_30573__$1 = state_30573;
var statearr_30607_30662 = state_30573__$1;
(statearr_30607_30662[(2)] = false);

(statearr_30607_30662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (12))){
var inst_30571 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30573__$1,inst_30571);
} else {
if((state_val_30574 === (2))){
var inst_30479 = (state_30573[(8)]);
var inst_30484 = inst_30479.cljs$lang$protocol_mask$partition0$;
var inst_30485 = (inst_30484 & (64));
var inst_30486 = inst_30479.cljs$core$ISeq$;
var inst_30487 = (inst_30485) || (inst_30486);
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30487)){
var statearr_30608_30663 = state_30573__$1;
(statearr_30608_30663[(1)] = (5));

} else {
var statearr_30609_30664 = state_30573__$1;
(statearr_30609_30664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (23))){
var inst_30532 = (state_30573[(14)]);
var inst_30538 = (inst_30532 == null);
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30538)){
var statearr_30610_30665 = state_30573__$1;
(statearr_30610_30665[(1)] = (26));

} else {
var statearr_30611_30666 = state_30573__$1;
(statearr_30611_30666[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (35))){
var inst_30558 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30558)){
var statearr_30612_30667 = state_30573__$1;
(statearr_30612_30667[(1)] = (36));

} else {
var statearr_30613_30668 = state_30573__$1;
(statearr_30613_30668[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (19))){
var inst_30503 = (state_30573[(7)]);
var inst_30522 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30503);
var state_30573__$1 = state_30573;
var statearr_30614_30669 = state_30573__$1;
(statearr_30614_30669[(2)] = inst_30522);

(statearr_30614_30669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (11))){
var inst_30503 = (state_30573[(7)]);
var inst_30507 = (inst_30503 == null);
var inst_30508 = cljs.core.not.call(null,inst_30507);
var state_30573__$1 = state_30573;
if(inst_30508){
var statearr_30615_30670 = state_30573__$1;
(statearr_30615_30670[(1)] = (13));

} else {
var statearr_30616_30671 = state_30573__$1;
(statearr_30616_30671[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (9))){
var inst_30479 = (state_30573[(8)]);
var state_30573__$1 = state_30573;
var statearr_30617_30672 = state_30573__$1;
(statearr_30617_30672[(2)] = inst_30479);

(statearr_30617_30672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (5))){
var state_30573__$1 = state_30573;
var statearr_30618_30673 = state_30573__$1;
(statearr_30618_30673[(2)] = true);

(statearr_30618_30673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (14))){
var state_30573__$1 = state_30573;
var statearr_30619_30674 = state_30573__$1;
(statearr_30619_30674[(2)] = false);

(statearr_30619_30674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (26))){
var inst_30533 = (state_30573[(11)]);
var inst_30540 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30533);
var state_30573__$1 = state_30573;
var statearr_30620_30675 = state_30573__$1;
(statearr_30620_30675[(2)] = inst_30540);

(statearr_30620_30675[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (16))){
var state_30573__$1 = state_30573;
var statearr_30621_30676 = state_30573__$1;
(statearr_30621_30676[(2)] = true);

(statearr_30621_30676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (38))){
var inst_30563 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30622_30677 = state_30573__$1;
(statearr_30622_30677[(2)] = inst_30563);

(statearr_30622_30677[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (30))){
var inst_30527 = (state_30573[(13)]);
var inst_30526 = (state_30573[(10)]);
var inst_30533 = (state_30573[(11)]);
var inst_30550 = cljs.core.empty_QMARK_.call(null,inst_30526);
var inst_30551 = inst_30527.call(null,inst_30533);
var inst_30552 = cljs.core.not.call(null,inst_30551);
var inst_30553 = (inst_30550) && (inst_30552);
var state_30573__$1 = state_30573;
var statearr_30623_30678 = state_30573__$1;
(statearr_30623_30678[(2)] = inst_30553);

(statearr_30623_30678[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (10))){
var inst_30479 = (state_30573[(8)]);
var inst_30499 = (state_30573[(2)]);
var inst_30500 = cljs.core.get.call(null,inst_30499,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30501 = cljs.core.get.call(null,inst_30499,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30502 = cljs.core.get.call(null,inst_30499,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30503 = inst_30479;
var state_30573__$1 = (function (){var statearr_30624 = state_30573;
(statearr_30624[(7)] = inst_30503);

(statearr_30624[(16)] = inst_30500);

(statearr_30624[(17)] = inst_30502);

(statearr_30624[(18)] = inst_30501);

return statearr_30624;
})();
var statearr_30625_30679 = state_30573__$1;
(statearr_30625_30679[(2)] = null);

(statearr_30625_30679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (18))){
var inst_30517 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30626_30680 = state_30573__$1;
(statearr_30626_30680[(2)] = inst_30517);

(statearr_30626_30680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (37))){
var state_30573__$1 = state_30573;
var statearr_30627_30681 = state_30573__$1;
(statearr_30627_30681[(2)] = null);

(statearr_30627_30681[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (8))){
var inst_30479 = (state_30573[(8)]);
var inst_30496 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30479);
var state_30573__$1 = state_30573;
var statearr_30628_30682 = state_30573__$1;
(statearr_30628_30682[(2)] = inst_30496);

(statearr_30628_30682[(1)] = (10));


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
});})(c__21381__auto___30636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21316__auto__,c__21381__auto___30636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21317__auto__ = null;
var cljs$core$async$mix_$_state_machine__21317__auto____0 = (function (){
var statearr_30632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30632[(0)] = cljs$core$async$mix_$_state_machine__21317__auto__);

(statearr_30632[(1)] = (1));

return statearr_30632;
});
var cljs$core$async$mix_$_state_machine__21317__auto____1 = (function (state_30573){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_30573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e30633){if((e30633 instanceof Object)){
var ex__21320__auto__ = e30633;
var statearr_30634_30683 = state_30573;
(statearr_30634_30683[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30684 = state_30573;
state_30573 = G__30684;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21317__auto__ = function(state_30573){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21317__auto____1.call(this,state_30573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21317__auto____0;
cljs$core$async$mix_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21317__auto____1;
return cljs$core$async$mix_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___30636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21383__auto__ = (function (){var statearr_30635 = f__21382__auto__.call(null);
(statearr_30635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___30636);

return statearr_30635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___30636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args30685 = [];
var len__17843__auto___30688 = arguments.length;
var i__17844__auto___30689 = (0);
while(true){
if((i__17844__auto___30689 < len__17843__auto___30688)){
args30685.push((arguments[i__17844__auto___30689]));

var G__30690 = (i__17844__auto___30689 + (1));
i__17844__auto___30689 = G__30690;
continue;
} else {
}
break;
}

var G__30687 = args30685.length;
switch (G__30687) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30685.length)].join('')));

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
var args30693 = [];
var len__17843__auto___30818 = arguments.length;
var i__17844__auto___30819 = (0);
while(true){
if((i__17844__auto___30819 < len__17843__auto___30818)){
args30693.push((arguments[i__17844__auto___30819]));

var G__30820 = (i__17844__auto___30819 + (1));
i__17844__auto___30819 = G__30820;
continue;
} else {
}
break;
}

var G__30695 = args30693.length;
switch (G__30695) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30693.length)].join('')));

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
return (function (p1__30692_SHARP_){
if(cljs.core.truth_(p1__30692_SHARP_.call(null,topic))){
return p1__30692_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30692_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16785__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30696 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30697){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30697 = meta30697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30698,meta30697__$1){
var self__ = this;
var _30698__$1 = this;
return (new cljs.core.async.t_cljs$core$async30696(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30697__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30698){
var self__ = this;
var _30698__$1 = this;
return self__.meta30697;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30696.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30696.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30696.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30696.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30696.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30696.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30696.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30697","meta30697",-1608415523,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30696";

cljs.core.async.t_cljs$core$async30696.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async30696");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30696 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30696(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30697){
return (new cljs.core.async.t_cljs$core$async30696(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30697));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30696(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21381__auto___30822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___30822,mults,ensure_mult,p){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___30822,mults,ensure_mult,p){
return (function (state_30770){
var state_val_30771 = (state_30770[(1)]);
if((state_val_30771 === (7))){
var inst_30766 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
var statearr_30772_30823 = state_30770__$1;
(statearr_30772_30823[(2)] = inst_30766);

(statearr_30772_30823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (20))){
var state_30770__$1 = state_30770;
var statearr_30773_30824 = state_30770__$1;
(statearr_30773_30824[(2)] = null);

(statearr_30773_30824[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (1))){
var state_30770__$1 = state_30770;
var statearr_30774_30825 = state_30770__$1;
(statearr_30774_30825[(2)] = null);

(statearr_30774_30825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (24))){
var inst_30749 = (state_30770[(7)]);
var inst_30758 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30749);
var state_30770__$1 = state_30770;
var statearr_30775_30826 = state_30770__$1;
(statearr_30775_30826[(2)] = inst_30758);

(statearr_30775_30826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (4))){
var inst_30701 = (state_30770[(8)]);
var inst_30701__$1 = (state_30770[(2)]);
var inst_30702 = (inst_30701__$1 == null);
var state_30770__$1 = (function (){var statearr_30776 = state_30770;
(statearr_30776[(8)] = inst_30701__$1);

return statearr_30776;
})();
if(cljs.core.truth_(inst_30702)){
var statearr_30777_30827 = state_30770__$1;
(statearr_30777_30827[(1)] = (5));

} else {
var statearr_30778_30828 = state_30770__$1;
(statearr_30778_30828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (15))){
var inst_30743 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
var statearr_30779_30829 = state_30770__$1;
(statearr_30779_30829[(2)] = inst_30743);

(statearr_30779_30829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (21))){
var inst_30763 = (state_30770[(2)]);
var state_30770__$1 = (function (){var statearr_30780 = state_30770;
(statearr_30780[(9)] = inst_30763);

return statearr_30780;
})();
var statearr_30781_30830 = state_30770__$1;
(statearr_30781_30830[(2)] = null);

(statearr_30781_30830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (13))){
var inst_30725 = (state_30770[(10)]);
var inst_30727 = cljs.core.chunked_seq_QMARK_.call(null,inst_30725);
var state_30770__$1 = state_30770;
if(inst_30727){
var statearr_30782_30831 = state_30770__$1;
(statearr_30782_30831[(1)] = (16));

} else {
var statearr_30783_30832 = state_30770__$1;
(statearr_30783_30832[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (22))){
var inst_30755 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
if(cljs.core.truth_(inst_30755)){
var statearr_30784_30833 = state_30770__$1;
(statearr_30784_30833[(1)] = (23));

} else {
var statearr_30785_30834 = state_30770__$1;
(statearr_30785_30834[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (6))){
var inst_30751 = (state_30770[(11)]);
var inst_30701 = (state_30770[(8)]);
var inst_30749 = (state_30770[(7)]);
var inst_30749__$1 = topic_fn.call(null,inst_30701);
var inst_30750 = cljs.core.deref.call(null,mults);
var inst_30751__$1 = cljs.core.get.call(null,inst_30750,inst_30749__$1);
var state_30770__$1 = (function (){var statearr_30786 = state_30770;
(statearr_30786[(11)] = inst_30751__$1);

(statearr_30786[(7)] = inst_30749__$1);

return statearr_30786;
})();
if(cljs.core.truth_(inst_30751__$1)){
var statearr_30787_30835 = state_30770__$1;
(statearr_30787_30835[(1)] = (19));

} else {
var statearr_30788_30836 = state_30770__$1;
(statearr_30788_30836[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (25))){
var inst_30760 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
var statearr_30789_30837 = state_30770__$1;
(statearr_30789_30837[(2)] = inst_30760);

(statearr_30789_30837[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (17))){
var inst_30725 = (state_30770[(10)]);
var inst_30734 = cljs.core.first.call(null,inst_30725);
var inst_30735 = cljs.core.async.muxch_STAR_.call(null,inst_30734);
var inst_30736 = cljs.core.async.close_BANG_.call(null,inst_30735);
var inst_30737 = cljs.core.next.call(null,inst_30725);
var inst_30711 = inst_30737;
var inst_30712 = null;
var inst_30713 = (0);
var inst_30714 = (0);
var state_30770__$1 = (function (){var statearr_30790 = state_30770;
(statearr_30790[(12)] = inst_30711);

(statearr_30790[(13)] = inst_30712);

(statearr_30790[(14)] = inst_30714);

(statearr_30790[(15)] = inst_30736);

(statearr_30790[(16)] = inst_30713);

return statearr_30790;
})();
var statearr_30791_30838 = state_30770__$1;
(statearr_30791_30838[(2)] = null);

(statearr_30791_30838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (3))){
var inst_30768 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30770__$1,inst_30768);
} else {
if((state_val_30771 === (12))){
var inst_30745 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
var statearr_30792_30839 = state_30770__$1;
(statearr_30792_30839[(2)] = inst_30745);

(statearr_30792_30839[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (2))){
var state_30770__$1 = state_30770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30770__$1,(4),ch);
} else {
if((state_val_30771 === (23))){
var state_30770__$1 = state_30770;
var statearr_30793_30840 = state_30770__$1;
(statearr_30793_30840[(2)] = null);

(statearr_30793_30840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (19))){
var inst_30751 = (state_30770[(11)]);
var inst_30701 = (state_30770[(8)]);
var inst_30753 = cljs.core.async.muxch_STAR_.call(null,inst_30751);
var state_30770__$1 = state_30770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30770__$1,(22),inst_30753,inst_30701);
} else {
if((state_val_30771 === (11))){
var inst_30711 = (state_30770[(12)]);
var inst_30725 = (state_30770[(10)]);
var inst_30725__$1 = cljs.core.seq.call(null,inst_30711);
var state_30770__$1 = (function (){var statearr_30794 = state_30770;
(statearr_30794[(10)] = inst_30725__$1);

return statearr_30794;
})();
if(inst_30725__$1){
var statearr_30795_30841 = state_30770__$1;
(statearr_30795_30841[(1)] = (13));

} else {
var statearr_30796_30842 = state_30770__$1;
(statearr_30796_30842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (9))){
var inst_30747 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
var statearr_30797_30843 = state_30770__$1;
(statearr_30797_30843[(2)] = inst_30747);

(statearr_30797_30843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (5))){
var inst_30708 = cljs.core.deref.call(null,mults);
var inst_30709 = cljs.core.vals.call(null,inst_30708);
var inst_30710 = cljs.core.seq.call(null,inst_30709);
var inst_30711 = inst_30710;
var inst_30712 = null;
var inst_30713 = (0);
var inst_30714 = (0);
var state_30770__$1 = (function (){var statearr_30798 = state_30770;
(statearr_30798[(12)] = inst_30711);

(statearr_30798[(13)] = inst_30712);

(statearr_30798[(14)] = inst_30714);

(statearr_30798[(16)] = inst_30713);

return statearr_30798;
})();
var statearr_30799_30844 = state_30770__$1;
(statearr_30799_30844[(2)] = null);

(statearr_30799_30844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (14))){
var state_30770__$1 = state_30770;
var statearr_30803_30845 = state_30770__$1;
(statearr_30803_30845[(2)] = null);

(statearr_30803_30845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (16))){
var inst_30725 = (state_30770[(10)]);
var inst_30729 = cljs.core.chunk_first.call(null,inst_30725);
var inst_30730 = cljs.core.chunk_rest.call(null,inst_30725);
var inst_30731 = cljs.core.count.call(null,inst_30729);
var inst_30711 = inst_30730;
var inst_30712 = inst_30729;
var inst_30713 = inst_30731;
var inst_30714 = (0);
var state_30770__$1 = (function (){var statearr_30804 = state_30770;
(statearr_30804[(12)] = inst_30711);

(statearr_30804[(13)] = inst_30712);

(statearr_30804[(14)] = inst_30714);

(statearr_30804[(16)] = inst_30713);

return statearr_30804;
})();
var statearr_30805_30846 = state_30770__$1;
(statearr_30805_30846[(2)] = null);

(statearr_30805_30846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (10))){
var inst_30711 = (state_30770[(12)]);
var inst_30712 = (state_30770[(13)]);
var inst_30714 = (state_30770[(14)]);
var inst_30713 = (state_30770[(16)]);
var inst_30719 = cljs.core._nth.call(null,inst_30712,inst_30714);
var inst_30720 = cljs.core.async.muxch_STAR_.call(null,inst_30719);
var inst_30721 = cljs.core.async.close_BANG_.call(null,inst_30720);
var inst_30722 = (inst_30714 + (1));
var tmp30800 = inst_30711;
var tmp30801 = inst_30712;
var tmp30802 = inst_30713;
var inst_30711__$1 = tmp30800;
var inst_30712__$1 = tmp30801;
var inst_30713__$1 = tmp30802;
var inst_30714__$1 = inst_30722;
var state_30770__$1 = (function (){var statearr_30806 = state_30770;
(statearr_30806[(12)] = inst_30711__$1);

(statearr_30806[(13)] = inst_30712__$1);

(statearr_30806[(14)] = inst_30714__$1);

(statearr_30806[(17)] = inst_30721);

(statearr_30806[(16)] = inst_30713__$1);

return statearr_30806;
})();
var statearr_30807_30847 = state_30770__$1;
(statearr_30807_30847[(2)] = null);

(statearr_30807_30847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (18))){
var inst_30740 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
var statearr_30808_30848 = state_30770__$1;
(statearr_30808_30848[(2)] = inst_30740);

(statearr_30808_30848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (8))){
var inst_30714 = (state_30770[(14)]);
var inst_30713 = (state_30770[(16)]);
var inst_30716 = (inst_30714 < inst_30713);
var inst_30717 = inst_30716;
var state_30770__$1 = state_30770;
if(cljs.core.truth_(inst_30717)){
var statearr_30809_30849 = state_30770__$1;
(statearr_30809_30849[(1)] = (10));

} else {
var statearr_30810_30850 = state_30770__$1;
(statearr_30810_30850[(1)] = (11));

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
});})(c__21381__auto___30822,mults,ensure_mult,p))
;
return ((function (switch__21316__auto__,c__21381__auto___30822,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_30814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30814[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_30814[(1)] = (1));

return statearr_30814;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_30770){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_30770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e30815){if((e30815 instanceof Object)){
var ex__21320__auto__ = e30815;
var statearr_30816_30851 = state_30770;
(statearr_30816_30851[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30852 = state_30770;
state_30770 = G__30852;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_30770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_30770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___30822,mults,ensure_mult,p))
})();
var state__21383__auto__ = (function (){var statearr_30817 = f__21382__auto__.call(null);
(statearr_30817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___30822);

return statearr_30817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___30822,mults,ensure_mult,p))
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
var args30853 = [];
var len__17843__auto___30856 = arguments.length;
var i__17844__auto___30857 = (0);
while(true){
if((i__17844__auto___30857 < len__17843__auto___30856)){
args30853.push((arguments[i__17844__auto___30857]));

var G__30858 = (i__17844__auto___30857 + (1));
i__17844__auto___30857 = G__30858;
continue;
} else {
}
break;
}

var G__30855 = args30853.length;
switch (G__30855) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30853.length)].join('')));

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
var args30860 = [];
var len__17843__auto___30863 = arguments.length;
var i__17844__auto___30864 = (0);
while(true){
if((i__17844__auto___30864 < len__17843__auto___30863)){
args30860.push((arguments[i__17844__auto___30864]));

var G__30865 = (i__17844__auto___30864 + (1));
i__17844__auto___30864 = G__30865;
continue;
} else {
}
break;
}

var G__30862 = args30860.length;
switch (G__30862) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30860.length)].join('')));

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
var args30867 = [];
var len__17843__auto___30938 = arguments.length;
var i__17844__auto___30939 = (0);
while(true){
if((i__17844__auto___30939 < len__17843__auto___30938)){
args30867.push((arguments[i__17844__auto___30939]));

var G__30940 = (i__17844__auto___30939 + (1));
i__17844__auto___30939 = G__30940;
continue;
} else {
}
break;
}

var G__30869 = args30867.length;
switch (G__30869) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30867.length)].join('')));

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
var c__21381__auto___30942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___30942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___30942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30908){
var state_val_30909 = (state_30908[(1)]);
if((state_val_30909 === (7))){
var state_30908__$1 = state_30908;
var statearr_30910_30943 = state_30908__$1;
(statearr_30910_30943[(2)] = null);

(statearr_30910_30943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (1))){
var state_30908__$1 = state_30908;
var statearr_30911_30944 = state_30908__$1;
(statearr_30911_30944[(2)] = null);

(statearr_30911_30944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (4))){
var inst_30872 = (state_30908[(7)]);
var inst_30874 = (inst_30872 < cnt);
var state_30908__$1 = state_30908;
if(cljs.core.truth_(inst_30874)){
var statearr_30912_30945 = state_30908__$1;
(statearr_30912_30945[(1)] = (6));

} else {
var statearr_30913_30946 = state_30908__$1;
(statearr_30913_30946[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (15))){
var inst_30904 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
var statearr_30914_30947 = state_30908__$1;
(statearr_30914_30947[(2)] = inst_30904);

(statearr_30914_30947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (13))){
var inst_30897 = cljs.core.async.close_BANG_.call(null,out);
var state_30908__$1 = state_30908;
var statearr_30915_30948 = state_30908__$1;
(statearr_30915_30948[(2)] = inst_30897);

(statearr_30915_30948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (6))){
var state_30908__$1 = state_30908;
var statearr_30916_30949 = state_30908__$1;
(statearr_30916_30949[(2)] = null);

(statearr_30916_30949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (3))){
var inst_30906 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30908__$1,inst_30906);
} else {
if((state_val_30909 === (12))){
var inst_30894 = (state_30908[(8)]);
var inst_30894__$1 = (state_30908[(2)]);
var inst_30895 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30894__$1);
var state_30908__$1 = (function (){var statearr_30917 = state_30908;
(statearr_30917[(8)] = inst_30894__$1);

return statearr_30917;
})();
if(cljs.core.truth_(inst_30895)){
var statearr_30918_30950 = state_30908__$1;
(statearr_30918_30950[(1)] = (13));

} else {
var statearr_30919_30951 = state_30908__$1;
(statearr_30919_30951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (2))){
var inst_30871 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30872 = (0);
var state_30908__$1 = (function (){var statearr_30920 = state_30908;
(statearr_30920[(7)] = inst_30872);

(statearr_30920[(9)] = inst_30871);

return statearr_30920;
})();
var statearr_30921_30952 = state_30908__$1;
(statearr_30921_30952[(2)] = null);

(statearr_30921_30952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (11))){
var inst_30872 = (state_30908[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30908,(10),Object,null,(9));
var inst_30881 = chs__$1.call(null,inst_30872);
var inst_30882 = done.call(null,inst_30872);
var inst_30883 = cljs.core.async.take_BANG_.call(null,inst_30881,inst_30882);
var state_30908__$1 = state_30908;
var statearr_30922_30953 = state_30908__$1;
(statearr_30922_30953[(2)] = inst_30883);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30908__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (9))){
var inst_30872 = (state_30908[(7)]);
var inst_30885 = (state_30908[(2)]);
var inst_30886 = (inst_30872 + (1));
var inst_30872__$1 = inst_30886;
var state_30908__$1 = (function (){var statearr_30923 = state_30908;
(statearr_30923[(7)] = inst_30872__$1);

(statearr_30923[(10)] = inst_30885);

return statearr_30923;
})();
var statearr_30924_30954 = state_30908__$1;
(statearr_30924_30954[(2)] = null);

(statearr_30924_30954[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (5))){
var inst_30892 = (state_30908[(2)]);
var state_30908__$1 = (function (){var statearr_30925 = state_30908;
(statearr_30925[(11)] = inst_30892);

return statearr_30925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30908__$1,(12),dchan);
} else {
if((state_val_30909 === (14))){
var inst_30894 = (state_30908[(8)]);
var inst_30899 = cljs.core.apply.call(null,f,inst_30894);
var state_30908__$1 = state_30908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30908__$1,(16),out,inst_30899);
} else {
if((state_val_30909 === (16))){
var inst_30901 = (state_30908[(2)]);
var state_30908__$1 = (function (){var statearr_30926 = state_30908;
(statearr_30926[(12)] = inst_30901);

return statearr_30926;
})();
var statearr_30927_30955 = state_30908__$1;
(statearr_30927_30955[(2)] = null);

(statearr_30927_30955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (10))){
var inst_30876 = (state_30908[(2)]);
var inst_30877 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30908__$1 = (function (){var statearr_30928 = state_30908;
(statearr_30928[(13)] = inst_30876);

return statearr_30928;
})();
var statearr_30929_30956 = state_30908__$1;
(statearr_30929_30956[(2)] = inst_30877);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30908__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30909 === (8))){
var inst_30890 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
var statearr_30930_30957 = state_30908__$1;
(statearr_30930_30957[(2)] = inst_30890);

(statearr_30930_30957[(1)] = (5));


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
});})(c__21381__auto___30942,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21316__auto__,c__21381__auto___30942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_30934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30934[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_30934[(1)] = (1));

return statearr_30934;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_30908){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_30908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e30935){if((e30935 instanceof Object)){
var ex__21320__auto__ = e30935;
var statearr_30936_30958 = state_30908;
(statearr_30936_30958[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30959 = state_30908;
state_30908 = G__30959;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_30908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_30908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___30942,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21383__auto__ = (function (){var statearr_30937 = f__21382__auto__.call(null);
(statearr_30937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___30942);

return statearr_30937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___30942,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30961 = [];
var len__17843__auto___31017 = arguments.length;
var i__17844__auto___31018 = (0);
while(true){
if((i__17844__auto___31018 < len__17843__auto___31017)){
args30961.push((arguments[i__17844__auto___31018]));

var G__31019 = (i__17844__auto___31018 + (1));
i__17844__auto___31018 = G__31019;
continue;
} else {
}
break;
}

var G__30963 = args30961.length;
switch (G__30963) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30961.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21381__auto___31021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___31021,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___31021,out){
return (function (state_30993){
var state_val_30994 = (state_30993[(1)]);
if((state_val_30994 === (7))){
var inst_30972 = (state_30993[(7)]);
var inst_30973 = (state_30993[(8)]);
var inst_30972__$1 = (state_30993[(2)]);
var inst_30973__$1 = cljs.core.nth.call(null,inst_30972__$1,(0),null);
var inst_30974 = cljs.core.nth.call(null,inst_30972__$1,(1),null);
var inst_30975 = (inst_30973__$1 == null);
var state_30993__$1 = (function (){var statearr_30995 = state_30993;
(statearr_30995[(7)] = inst_30972__$1);

(statearr_30995[(8)] = inst_30973__$1);

(statearr_30995[(9)] = inst_30974);

return statearr_30995;
})();
if(cljs.core.truth_(inst_30975)){
var statearr_30996_31022 = state_30993__$1;
(statearr_30996_31022[(1)] = (8));

} else {
var statearr_30997_31023 = state_30993__$1;
(statearr_30997_31023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (1))){
var inst_30964 = cljs.core.vec.call(null,chs);
var inst_30965 = inst_30964;
var state_30993__$1 = (function (){var statearr_30998 = state_30993;
(statearr_30998[(10)] = inst_30965);

return statearr_30998;
})();
var statearr_30999_31024 = state_30993__$1;
(statearr_30999_31024[(2)] = null);

(statearr_30999_31024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (4))){
var inst_30965 = (state_30993[(10)]);
var state_30993__$1 = state_30993;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30993__$1,(7),inst_30965);
} else {
if((state_val_30994 === (6))){
var inst_30989 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31000_31025 = state_30993__$1;
(statearr_31000_31025[(2)] = inst_30989);

(statearr_31000_31025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (3))){
var inst_30991 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30993__$1,inst_30991);
} else {
if((state_val_30994 === (2))){
var inst_30965 = (state_30993[(10)]);
var inst_30967 = cljs.core.count.call(null,inst_30965);
var inst_30968 = (inst_30967 > (0));
var state_30993__$1 = state_30993;
if(cljs.core.truth_(inst_30968)){
var statearr_31002_31026 = state_30993__$1;
(statearr_31002_31026[(1)] = (4));

} else {
var statearr_31003_31027 = state_30993__$1;
(statearr_31003_31027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (11))){
var inst_30965 = (state_30993[(10)]);
var inst_30982 = (state_30993[(2)]);
var tmp31001 = inst_30965;
var inst_30965__$1 = tmp31001;
var state_30993__$1 = (function (){var statearr_31004 = state_30993;
(statearr_31004[(10)] = inst_30965__$1);

(statearr_31004[(11)] = inst_30982);

return statearr_31004;
})();
var statearr_31005_31028 = state_30993__$1;
(statearr_31005_31028[(2)] = null);

(statearr_31005_31028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (9))){
var inst_30973 = (state_30993[(8)]);
var state_30993__$1 = state_30993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30993__$1,(11),out,inst_30973);
} else {
if((state_val_30994 === (5))){
var inst_30987 = cljs.core.async.close_BANG_.call(null,out);
var state_30993__$1 = state_30993;
var statearr_31006_31029 = state_30993__$1;
(statearr_31006_31029[(2)] = inst_30987);

(statearr_31006_31029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (10))){
var inst_30985 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31007_31030 = state_30993__$1;
(statearr_31007_31030[(2)] = inst_30985);

(statearr_31007_31030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (8))){
var inst_30972 = (state_30993[(7)]);
var inst_30965 = (state_30993[(10)]);
var inst_30973 = (state_30993[(8)]);
var inst_30974 = (state_30993[(9)]);
var inst_30977 = (function (){var cs = inst_30965;
var vec__30970 = inst_30972;
var v = inst_30973;
var c = inst_30974;
return ((function (cs,vec__30970,v,c,inst_30972,inst_30965,inst_30973,inst_30974,state_val_30994,c__21381__auto___31021,out){
return (function (p1__30960_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30960_SHARP_);
});
;})(cs,vec__30970,v,c,inst_30972,inst_30965,inst_30973,inst_30974,state_val_30994,c__21381__auto___31021,out))
})();
var inst_30978 = cljs.core.filterv.call(null,inst_30977,inst_30965);
var inst_30965__$1 = inst_30978;
var state_30993__$1 = (function (){var statearr_31008 = state_30993;
(statearr_31008[(10)] = inst_30965__$1);

return statearr_31008;
})();
var statearr_31009_31031 = state_30993__$1;
(statearr_31009_31031[(2)] = null);

(statearr_31009_31031[(1)] = (2));


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
});})(c__21381__auto___31021,out))
;
return ((function (switch__21316__auto__,c__21381__auto___31021,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_31013 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31013[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_31013[(1)] = (1));

return statearr_31013;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_30993){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_30993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e31014){if((e31014 instanceof Object)){
var ex__21320__auto__ = e31014;
var statearr_31015_31032 = state_30993;
(statearr_31015_31032[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31033 = state_30993;
state_30993 = G__31033;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_30993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_30993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___31021,out))
})();
var state__21383__auto__ = (function (){var statearr_31016 = f__21382__auto__.call(null);
(statearr_31016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___31021);

return statearr_31016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___31021,out))
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
var args31034 = [];
var len__17843__auto___31083 = arguments.length;
var i__17844__auto___31084 = (0);
while(true){
if((i__17844__auto___31084 < len__17843__auto___31083)){
args31034.push((arguments[i__17844__auto___31084]));

var G__31085 = (i__17844__auto___31084 + (1));
i__17844__auto___31084 = G__31085;
continue;
} else {
}
break;
}

var G__31036 = args31034.length;
switch (G__31036) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31034.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21381__auto___31087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___31087,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___31087,out){
return (function (state_31060){
var state_val_31061 = (state_31060[(1)]);
if((state_val_31061 === (7))){
var inst_31042 = (state_31060[(7)]);
var inst_31042__$1 = (state_31060[(2)]);
var inst_31043 = (inst_31042__$1 == null);
var inst_31044 = cljs.core.not.call(null,inst_31043);
var state_31060__$1 = (function (){var statearr_31062 = state_31060;
(statearr_31062[(7)] = inst_31042__$1);

return statearr_31062;
})();
if(inst_31044){
var statearr_31063_31088 = state_31060__$1;
(statearr_31063_31088[(1)] = (8));

} else {
var statearr_31064_31089 = state_31060__$1;
(statearr_31064_31089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (1))){
var inst_31037 = (0);
var state_31060__$1 = (function (){var statearr_31065 = state_31060;
(statearr_31065[(8)] = inst_31037);

return statearr_31065;
})();
var statearr_31066_31090 = state_31060__$1;
(statearr_31066_31090[(2)] = null);

(statearr_31066_31090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (4))){
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(7),ch);
} else {
if((state_val_31061 === (6))){
var inst_31055 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31067_31091 = state_31060__$1;
(statearr_31067_31091[(2)] = inst_31055);

(statearr_31067_31091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (3))){
var inst_31057 = (state_31060[(2)]);
var inst_31058 = cljs.core.async.close_BANG_.call(null,out);
var state_31060__$1 = (function (){var statearr_31068 = state_31060;
(statearr_31068[(9)] = inst_31057);

return statearr_31068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31060__$1,inst_31058);
} else {
if((state_val_31061 === (2))){
var inst_31037 = (state_31060[(8)]);
var inst_31039 = (inst_31037 < n);
var state_31060__$1 = state_31060;
if(cljs.core.truth_(inst_31039)){
var statearr_31069_31092 = state_31060__$1;
(statearr_31069_31092[(1)] = (4));

} else {
var statearr_31070_31093 = state_31060__$1;
(statearr_31070_31093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (11))){
var inst_31037 = (state_31060[(8)]);
var inst_31047 = (state_31060[(2)]);
var inst_31048 = (inst_31037 + (1));
var inst_31037__$1 = inst_31048;
var state_31060__$1 = (function (){var statearr_31071 = state_31060;
(statearr_31071[(10)] = inst_31047);

(statearr_31071[(8)] = inst_31037__$1);

return statearr_31071;
})();
var statearr_31072_31094 = state_31060__$1;
(statearr_31072_31094[(2)] = null);

(statearr_31072_31094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (9))){
var state_31060__$1 = state_31060;
var statearr_31073_31095 = state_31060__$1;
(statearr_31073_31095[(2)] = null);

(statearr_31073_31095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (5))){
var state_31060__$1 = state_31060;
var statearr_31074_31096 = state_31060__$1;
(statearr_31074_31096[(2)] = null);

(statearr_31074_31096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (10))){
var inst_31052 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31075_31097 = state_31060__$1;
(statearr_31075_31097[(2)] = inst_31052);

(statearr_31075_31097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (8))){
var inst_31042 = (state_31060[(7)]);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31060__$1,(11),out,inst_31042);
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
});})(c__21381__auto___31087,out))
;
return ((function (switch__21316__auto__,c__21381__auto___31087,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_31079 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31079[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_31079[(1)] = (1));

return statearr_31079;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_31060){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_31060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e31080){if((e31080 instanceof Object)){
var ex__21320__auto__ = e31080;
var statearr_31081_31098 = state_31060;
(statearr_31081_31098[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31099 = state_31060;
state_31060 = G__31099;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_31060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_31060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___31087,out))
})();
var state__21383__auto__ = (function (){var statearr_31082 = f__21382__auto__.call(null);
(statearr_31082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___31087);

return statearr_31082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___31087,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31107 = (function (map_LT_,f,ch,meta31108){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31108 = meta31108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31109,meta31108__$1){
var self__ = this;
var _31109__$1 = this;
return (new cljs.core.async.t_cljs$core$async31107(self__.map_LT_,self__.f,self__.ch,meta31108__$1));
});

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31109){
var self__ = this;
var _31109__$1 = this;
return self__.meta31108;
});

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31110 = (function (map_LT_,f,ch,meta31108,_,fn1,meta31111){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31108 = meta31108;
this._ = _;
this.fn1 = fn1;
this.meta31111 = meta31111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31112,meta31111__$1){
var self__ = this;
var _31112__$1 = this;
return (new cljs.core.async.t_cljs$core$async31110(self__.map_LT_,self__.f,self__.ch,self__.meta31108,self__._,self__.fn1,meta31111__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31112){
var self__ = this;
var _31112__$1 = this;
return self__.meta31111;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31110.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31100_SHARP_){
return f1.call(null,(((p1__31100_SHARP_ == null))?null:self__.f.call(null,p1__31100_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31110.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31108","meta31108",-918816022,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31107","cljs.core.async/t_cljs$core$async31107",-13429534,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31111","meta31111",339348969,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31110";

cljs.core.async.t_cljs$core$async31110.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async31110");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31110 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31110(map_LT___$1,f__$1,ch__$1,meta31108__$1,___$2,fn1__$1,meta31111){
return (new cljs.core.async.t_cljs$core$async31110(map_LT___$1,f__$1,ch__$1,meta31108__$1,___$2,fn1__$1,meta31111));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31110(self__.map_LT_,self__.f,self__.ch,self__.meta31108,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31108","meta31108",-918816022,null)], null);
});

cljs.core.async.t_cljs$core$async31107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31107";

cljs.core.async.t_cljs$core$async31107.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async31107");
});

cljs.core.async.__GT_t_cljs$core$async31107 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31107(map_LT___$1,f__$1,ch__$1,meta31108){
return (new cljs.core.async.t_cljs$core$async31107(map_LT___$1,f__$1,ch__$1,meta31108));
});

}

return (new cljs.core.async.t_cljs$core$async31107(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31116 = (function (map_GT_,f,ch,meta31117){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31117 = meta31117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31118,meta31117__$1){
var self__ = this;
var _31118__$1 = this;
return (new cljs.core.async.t_cljs$core$async31116(self__.map_GT_,self__.f,self__.ch,meta31117__$1));
});

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31118){
var self__ = this;
var _31118__$1 = this;
return self__.meta31117;
});

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31117","meta31117",-1612838953,null)], null);
});

cljs.core.async.t_cljs$core$async31116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31116";

cljs.core.async.t_cljs$core$async31116.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async31116");
});

cljs.core.async.__GT_t_cljs$core$async31116 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31116(map_GT___$1,f__$1,ch__$1,meta31117){
return (new cljs.core.async.t_cljs$core$async31116(map_GT___$1,f__$1,ch__$1,meta31117));
});

}

return (new cljs.core.async.t_cljs$core$async31116(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31122 = (function (filter_GT_,p,ch,meta31123){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31123 = meta31123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31124,meta31123__$1){
var self__ = this;
var _31124__$1 = this;
return (new cljs.core.async.t_cljs$core$async31122(self__.filter_GT_,self__.p,self__.ch,meta31123__$1));
});

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31124){
var self__ = this;
var _31124__$1 = this;
return self__.meta31123;
});

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31123","meta31123",-111530584,null)], null);
});

cljs.core.async.t_cljs$core$async31122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31122";

cljs.core.async.t_cljs$core$async31122.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async31122");
});

cljs.core.async.__GT_t_cljs$core$async31122 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31122(filter_GT___$1,p__$1,ch__$1,meta31123){
return (new cljs.core.async.t_cljs$core$async31122(filter_GT___$1,p__$1,ch__$1,meta31123));
});

}

return (new cljs.core.async.t_cljs$core$async31122(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31125 = [];
var len__17843__auto___31169 = arguments.length;
var i__17844__auto___31170 = (0);
while(true){
if((i__17844__auto___31170 < len__17843__auto___31169)){
args31125.push((arguments[i__17844__auto___31170]));

var G__31171 = (i__17844__auto___31170 + (1));
i__17844__auto___31170 = G__31171;
continue;
} else {
}
break;
}

var G__31127 = args31125.length;
switch (G__31127) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31125.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21381__auto___31173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___31173,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___31173,out){
return (function (state_31148){
var state_val_31149 = (state_31148[(1)]);
if((state_val_31149 === (7))){
var inst_31144 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31150_31174 = state_31148__$1;
(statearr_31150_31174[(2)] = inst_31144);

(statearr_31150_31174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (1))){
var state_31148__$1 = state_31148;
var statearr_31151_31175 = state_31148__$1;
(statearr_31151_31175[(2)] = null);

(statearr_31151_31175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (4))){
var inst_31130 = (state_31148[(7)]);
var inst_31130__$1 = (state_31148[(2)]);
var inst_31131 = (inst_31130__$1 == null);
var state_31148__$1 = (function (){var statearr_31152 = state_31148;
(statearr_31152[(7)] = inst_31130__$1);

return statearr_31152;
})();
if(cljs.core.truth_(inst_31131)){
var statearr_31153_31176 = state_31148__$1;
(statearr_31153_31176[(1)] = (5));

} else {
var statearr_31154_31177 = state_31148__$1;
(statearr_31154_31177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (6))){
var inst_31130 = (state_31148[(7)]);
var inst_31135 = p.call(null,inst_31130);
var state_31148__$1 = state_31148;
if(cljs.core.truth_(inst_31135)){
var statearr_31155_31178 = state_31148__$1;
(statearr_31155_31178[(1)] = (8));

} else {
var statearr_31156_31179 = state_31148__$1;
(statearr_31156_31179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (3))){
var inst_31146 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31148__$1,inst_31146);
} else {
if((state_val_31149 === (2))){
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31148__$1,(4),ch);
} else {
if((state_val_31149 === (11))){
var inst_31138 = (state_31148[(2)]);
var state_31148__$1 = state_31148;
var statearr_31157_31180 = state_31148__$1;
(statearr_31157_31180[(2)] = inst_31138);

(statearr_31157_31180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (9))){
var state_31148__$1 = state_31148;
var statearr_31158_31181 = state_31148__$1;
(statearr_31158_31181[(2)] = null);

(statearr_31158_31181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (5))){
var inst_31133 = cljs.core.async.close_BANG_.call(null,out);
var state_31148__$1 = state_31148;
var statearr_31159_31182 = state_31148__$1;
(statearr_31159_31182[(2)] = inst_31133);

(statearr_31159_31182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (10))){
var inst_31141 = (state_31148[(2)]);
var state_31148__$1 = (function (){var statearr_31160 = state_31148;
(statearr_31160[(8)] = inst_31141);

return statearr_31160;
})();
var statearr_31161_31183 = state_31148__$1;
(statearr_31161_31183[(2)] = null);

(statearr_31161_31183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31149 === (8))){
var inst_31130 = (state_31148[(7)]);
var state_31148__$1 = state_31148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31148__$1,(11),out,inst_31130);
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
});})(c__21381__auto___31173,out))
;
return ((function (switch__21316__auto__,c__21381__auto___31173,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_31165 = [null,null,null,null,null,null,null,null,null];
(statearr_31165[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_31165[(1)] = (1));

return statearr_31165;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_31148){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_31148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e31166){if((e31166 instanceof Object)){
var ex__21320__auto__ = e31166;
var statearr_31167_31184 = state_31148;
(statearr_31167_31184[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31185 = state_31148;
state_31148 = G__31185;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_31148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_31148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___31173,out))
})();
var state__21383__auto__ = (function (){var statearr_31168 = f__21382__auto__.call(null);
(statearr_31168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___31173);

return statearr_31168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___31173,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31186 = [];
var len__17843__auto___31189 = arguments.length;
var i__17844__auto___31190 = (0);
while(true){
if((i__17844__auto___31190 < len__17843__auto___31189)){
args31186.push((arguments[i__17844__auto___31190]));

var G__31191 = (i__17844__auto___31190 + (1));
i__17844__auto___31190 = G__31191;
continue;
} else {
}
break;
}

var G__31188 = args31186.length;
switch (G__31188) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31186.length)].join('')));

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
return (function (state_31358){
var state_val_31359 = (state_31358[(1)]);
if((state_val_31359 === (7))){
var inst_31354 = (state_31358[(2)]);
var state_31358__$1 = state_31358;
var statearr_31360_31401 = state_31358__$1;
(statearr_31360_31401[(2)] = inst_31354);

(statearr_31360_31401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (20))){
var inst_31324 = (state_31358[(7)]);
var inst_31335 = (state_31358[(2)]);
var inst_31336 = cljs.core.next.call(null,inst_31324);
var inst_31310 = inst_31336;
var inst_31311 = null;
var inst_31312 = (0);
var inst_31313 = (0);
var state_31358__$1 = (function (){var statearr_31361 = state_31358;
(statearr_31361[(8)] = inst_31310);

(statearr_31361[(9)] = inst_31312);

(statearr_31361[(10)] = inst_31335);

(statearr_31361[(11)] = inst_31311);

(statearr_31361[(12)] = inst_31313);

return statearr_31361;
})();
var statearr_31362_31402 = state_31358__$1;
(statearr_31362_31402[(2)] = null);

(statearr_31362_31402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (1))){
var state_31358__$1 = state_31358;
var statearr_31363_31403 = state_31358__$1;
(statearr_31363_31403[(2)] = null);

(statearr_31363_31403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (4))){
var inst_31299 = (state_31358[(13)]);
var inst_31299__$1 = (state_31358[(2)]);
var inst_31300 = (inst_31299__$1 == null);
var state_31358__$1 = (function (){var statearr_31364 = state_31358;
(statearr_31364[(13)] = inst_31299__$1);

return statearr_31364;
})();
if(cljs.core.truth_(inst_31300)){
var statearr_31365_31404 = state_31358__$1;
(statearr_31365_31404[(1)] = (5));

} else {
var statearr_31366_31405 = state_31358__$1;
(statearr_31366_31405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (15))){
var state_31358__$1 = state_31358;
var statearr_31370_31406 = state_31358__$1;
(statearr_31370_31406[(2)] = null);

(statearr_31370_31406[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (21))){
var state_31358__$1 = state_31358;
var statearr_31371_31407 = state_31358__$1;
(statearr_31371_31407[(2)] = null);

(statearr_31371_31407[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (13))){
var inst_31310 = (state_31358[(8)]);
var inst_31312 = (state_31358[(9)]);
var inst_31311 = (state_31358[(11)]);
var inst_31313 = (state_31358[(12)]);
var inst_31320 = (state_31358[(2)]);
var inst_31321 = (inst_31313 + (1));
var tmp31367 = inst_31310;
var tmp31368 = inst_31312;
var tmp31369 = inst_31311;
var inst_31310__$1 = tmp31367;
var inst_31311__$1 = tmp31369;
var inst_31312__$1 = tmp31368;
var inst_31313__$1 = inst_31321;
var state_31358__$1 = (function (){var statearr_31372 = state_31358;
(statearr_31372[(14)] = inst_31320);

(statearr_31372[(8)] = inst_31310__$1);

(statearr_31372[(9)] = inst_31312__$1);

(statearr_31372[(11)] = inst_31311__$1);

(statearr_31372[(12)] = inst_31313__$1);

return statearr_31372;
})();
var statearr_31373_31408 = state_31358__$1;
(statearr_31373_31408[(2)] = null);

(statearr_31373_31408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (22))){
var state_31358__$1 = state_31358;
var statearr_31374_31409 = state_31358__$1;
(statearr_31374_31409[(2)] = null);

(statearr_31374_31409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (6))){
var inst_31299 = (state_31358[(13)]);
var inst_31308 = f.call(null,inst_31299);
var inst_31309 = cljs.core.seq.call(null,inst_31308);
var inst_31310 = inst_31309;
var inst_31311 = null;
var inst_31312 = (0);
var inst_31313 = (0);
var state_31358__$1 = (function (){var statearr_31375 = state_31358;
(statearr_31375[(8)] = inst_31310);

(statearr_31375[(9)] = inst_31312);

(statearr_31375[(11)] = inst_31311);

(statearr_31375[(12)] = inst_31313);

return statearr_31375;
})();
var statearr_31376_31410 = state_31358__$1;
(statearr_31376_31410[(2)] = null);

(statearr_31376_31410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (17))){
var inst_31324 = (state_31358[(7)]);
var inst_31328 = cljs.core.chunk_first.call(null,inst_31324);
var inst_31329 = cljs.core.chunk_rest.call(null,inst_31324);
var inst_31330 = cljs.core.count.call(null,inst_31328);
var inst_31310 = inst_31329;
var inst_31311 = inst_31328;
var inst_31312 = inst_31330;
var inst_31313 = (0);
var state_31358__$1 = (function (){var statearr_31377 = state_31358;
(statearr_31377[(8)] = inst_31310);

(statearr_31377[(9)] = inst_31312);

(statearr_31377[(11)] = inst_31311);

(statearr_31377[(12)] = inst_31313);

return statearr_31377;
})();
var statearr_31378_31411 = state_31358__$1;
(statearr_31378_31411[(2)] = null);

(statearr_31378_31411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (3))){
var inst_31356 = (state_31358[(2)]);
var state_31358__$1 = state_31358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31358__$1,inst_31356);
} else {
if((state_val_31359 === (12))){
var inst_31344 = (state_31358[(2)]);
var state_31358__$1 = state_31358;
var statearr_31379_31412 = state_31358__$1;
(statearr_31379_31412[(2)] = inst_31344);

(statearr_31379_31412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (2))){
var state_31358__$1 = state_31358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31358__$1,(4),in$);
} else {
if((state_val_31359 === (23))){
var inst_31352 = (state_31358[(2)]);
var state_31358__$1 = state_31358;
var statearr_31380_31413 = state_31358__$1;
(statearr_31380_31413[(2)] = inst_31352);

(statearr_31380_31413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (19))){
var inst_31339 = (state_31358[(2)]);
var state_31358__$1 = state_31358;
var statearr_31381_31414 = state_31358__$1;
(statearr_31381_31414[(2)] = inst_31339);

(statearr_31381_31414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (11))){
var inst_31310 = (state_31358[(8)]);
var inst_31324 = (state_31358[(7)]);
var inst_31324__$1 = cljs.core.seq.call(null,inst_31310);
var state_31358__$1 = (function (){var statearr_31382 = state_31358;
(statearr_31382[(7)] = inst_31324__$1);

return statearr_31382;
})();
if(inst_31324__$1){
var statearr_31383_31415 = state_31358__$1;
(statearr_31383_31415[(1)] = (14));

} else {
var statearr_31384_31416 = state_31358__$1;
(statearr_31384_31416[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (9))){
var inst_31346 = (state_31358[(2)]);
var inst_31347 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31358__$1 = (function (){var statearr_31385 = state_31358;
(statearr_31385[(15)] = inst_31346);

return statearr_31385;
})();
if(cljs.core.truth_(inst_31347)){
var statearr_31386_31417 = state_31358__$1;
(statearr_31386_31417[(1)] = (21));

} else {
var statearr_31387_31418 = state_31358__$1;
(statearr_31387_31418[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (5))){
var inst_31302 = cljs.core.async.close_BANG_.call(null,out);
var state_31358__$1 = state_31358;
var statearr_31388_31419 = state_31358__$1;
(statearr_31388_31419[(2)] = inst_31302);

(statearr_31388_31419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (14))){
var inst_31324 = (state_31358[(7)]);
var inst_31326 = cljs.core.chunked_seq_QMARK_.call(null,inst_31324);
var state_31358__$1 = state_31358;
if(inst_31326){
var statearr_31389_31420 = state_31358__$1;
(statearr_31389_31420[(1)] = (17));

} else {
var statearr_31390_31421 = state_31358__$1;
(statearr_31390_31421[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (16))){
var inst_31342 = (state_31358[(2)]);
var state_31358__$1 = state_31358;
var statearr_31391_31422 = state_31358__$1;
(statearr_31391_31422[(2)] = inst_31342);

(statearr_31391_31422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (10))){
var inst_31311 = (state_31358[(11)]);
var inst_31313 = (state_31358[(12)]);
var inst_31318 = cljs.core._nth.call(null,inst_31311,inst_31313);
var state_31358__$1 = state_31358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31358__$1,(13),out,inst_31318);
} else {
if((state_val_31359 === (18))){
var inst_31324 = (state_31358[(7)]);
var inst_31333 = cljs.core.first.call(null,inst_31324);
var state_31358__$1 = state_31358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31358__$1,(20),out,inst_31333);
} else {
if((state_val_31359 === (8))){
var inst_31312 = (state_31358[(9)]);
var inst_31313 = (state_31358[(12)]);
var inst_31315 = (inst_31313 < inst_31312);
var inst_31316 = inst_31315;
var state_31358__$1 = state_31358;
if(cljs.core.truth_(inst_31316)){
var statearr_31392_31423 = state_31358__$1;
(statearr_31392_31423[(1)] = (10));

} else {
var statearr_31393_31424 = state_31358__$1;
(statearr_31393_31424[(1)] = (11));

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
var statearr_31397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31397[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__);

(statearr_31397[(1)] = (1));

return statearr_31397;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____1 = (function (state_31358){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_31358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e31398){if((e31398 instanceof Object)){
var ex__21320__auto__ = e31398;
var statearr_31399_31425 = state_31358;
(statearr_31399_31425[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31426 = state_31358;
state_31358 = G__31426;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__ = function(state_31358){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____1.call(this,state_31358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto__))
})();
var state__21383__auto__ = (function (){var statearr_31400 = f__21382__auto__.call(null);
(statearr_31400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto__);

return statearr_31400;
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
var args31427 = [];
var len__17843__auto___31430 = arguments.length;
var i__17844__auto___31431 = (0);
while(true){
if((i__17844__auto___31431 < len__17843__auto___31430)){
args31427.push((arguments[i__17844__auto___31431]));

var G__31432 = (i__17844__auto___31431 + (1));
i__17844__auto___31431 = G__31432;
continue;
} else {
}
break;
}

var G__31429 = args31427.length;
switch (G__31429) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31427.length)].join('')));

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
var args31434 = [];
var len__17843__auto___31437 = arguments.length;
var i__17844__auto___31438 = (0);
while(true){
if((i__17844__auto___31438 < len__17843__auto___31437)){
args31434.push((arguments[i__17844__auto___31438]));

var G__31439 = (i__17844__auto___31438 + (1));
i__17844__auto___31438 = G__31439;
continue;
} else {
}
break;
}

var G__31436 = args31434.length;
switch (G__31436) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31434.length)].join('')));

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
var args31441 = [];
var len__17843__auto___31492 = arguments.length;
var i__17844__auto___31493 = (0);
while(true){
if((i__17844__auto___31493 < len__17843__auto___31492)){
args31441.push((arguments[i__17844__auto___31493]));

var G__31494 = (i__17844__auto___31493 + (1));
i__17844__auto___31493 = G__31494;
continue;
} else {
}
break;
}

var G__31443 = args31441.length;
switch (G__31443) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31441.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21381__auto___31496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___31496,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___31496,out){
return (function (state_31467){
var state_val_31468 = (state_31467[(1)]);
if((state_val_31468 === (7))){
var inst_31462 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31469_31497 = state_31467__$1;
(statearr_31469_31497[(2)] = inst_31462);

(statearr_31469_31497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (1))){
var inst_31444 = null;
var state_31467__$1 = (function (){var statearr_31470 = state_31467;
(statearr_31470[(7)] = inst_31444);

return statearr_31470;
})();
var statearr_31471_31498 = state_31467__$1;
(statearr_31471_31498[(2)] = null);

(statearr_31471_31498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (4))){
var inst_31447 = (state_31467[(8)]);
var inst_31447__$1 = (state_31467[(2)]);
var inst_31448 = (inst_31447__$1 == null);
var inst_31449 = cljs.core.not.call(null,inst_31448);
var state_31467__$1 = (function (){var statearr_31472 = state_31467;
(statearr_31472[(8)] = inst_31447__$1);

return statearr_31472;
})();
if(inst_31449){
var statearr_31473_31499 = state_31467__$1;
(statearr_31473_31499[(1)] = (5));

} else {
var statearr_31474_31500 = state_31467__$1;
(statearr_31474_31500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (6))){
var state_31467__$1 = state_31467;
var statearr_31475_31501 = state_31467__$1;
(statearr_31475_31501[(2)] = null);

(statearr_31475_31501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (3))){
var inst_31464 = (state_31467[(2)]);
var inst_31465 = cljs.core.async.close_BANG_.call(null,out);
var state_31467__$1 = (function (){var statearr_31476 = state_31467;
(statearr_31476[(9)] = inst_31464);

return statearr_31476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31467__$1,inst_31465);
} else {
if((state_val_31468 === (2))){
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31467__$1,(4),ch);
} else {
if((state_val_31468 === (11))){
var inst_31447 = (state_31467[(8)]);
var inst_31456 = (state_31467[(2)]);
var inst_31444 = inst_31447;
var state_31467__$1 = (function (){var statearr_31477 = state_31467;
(statearr_31477[(7)] = inst_31444);

(statearr_31477[(10)] = inst_31456);

return statearr_31477;
})();
var statearr_31478_31502 = state_31467__$1;
(statearr_31478_31502[(2)] = null);

(statearr_31478_31502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (9))){
var inst_31447 = (state_31467[(8)]);
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31467__$1,(11),out,inst_31447);
} else {
if((state_val_31468 === (5))){
var inst_31444 = (state_31467[(7)]);
var inst_31447 = (state_31467[(8)]);
var inst_31451 = cljs.core._EQ_.call(null,inst_31447,inst_31444);
var state_31467__$1 = state_31467;
if(inst_31451){
var statearr_31480_31503 = state_31467__$1;
(statearr_31480_31503[(1)] = (8));

} else {
var statearr_31481_31504 = state_31467__$1;
(statearr_31481_31504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (10))){
var inst_31459 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31482_31505 = state_31467__$1;
(statearr_31482_31505[(2)] = inst_31459);

(statearr_31482_31505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (8))){
var inst_31444 = (state_31467[(7)]);
var tmp31479 = inst_31444;
var inst_31444__$1 = tmp31479;
var state_31467__$1 = (function (){var statearr_31483 = state_31467;
(statearr_31483[(7)] = inst_31444__$1);

return statearr_31483;
})();
var statearr_31484_31506 = state_31467__$1;
(statearr_31484_31506[(2)] = null);

(statearr_31484_31506[(1)] = (2));


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
});})(c__21381__auto___31496,out))
;
return ((function (switch__21316__auto__,c__21381__auto___31496,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_31488 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31488[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_31488[(1)] = (1));

return statearr_31488;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_31467){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_31467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e31489){if((e31489 instanceof Object)){
var ex__21320__auto__ = e31489;
var statearr_31490_31507 = state_31467;
(statearr_31490_31507[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31508 = state_31467;
state_31467 = G__31508;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_31467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_31467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___31496,out))
})();
var state__21383__auto__ = (function (){var statearr_31491 = f__21382__auto__.call(null);
(statearr_31491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___31496);

return statearr_31491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___31496,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31509 = [];
var len__17843__auto___31579 = arguments.length;
var i__17844__auto___31580 = (0);
while(true){
if((i__17844__auto___31580 < len__17843__auto___31579)){
args31509.push((arguments[i__17844__auto___31580]));

var G__31581 = (i__17844__auto___31580 + (1));
i__17844__auto___31580 = G__31581;
continue;
} else {
}
break;
}

var G__31511 = args31509.length;
switch (G__31511) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31509.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21381__auto___31583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___31583,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___31583,out){
return (function (state_31549){
var state_val_31550 = (state_31549[(1)]);
if((state_val_31550 === (7))){
var inst_31545 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31551_31584 = state_31549__$1;
(statearr_31551_31584[(2)] = inst_31545);

(statearr_31551_31584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (1))){
var inst_31512 = (new Array(n));
var inst_31513 = inst_31512;
var inst_31514 = (0);
var state_31549__$1 = (function (){var statearr_31552 = state_31549;
(statearr_31552[(7)] = inst_31513);

(statearr_31552[(8)] = inst_31514);

return statearr_31552;
})();
var statearr_31553_31585 = state_31549__$1;
(statearr_31553_31585[(2)] = null);

(statearr_31553_31585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (4))){
var inst_31517 = (state_31549[(9)]);
var inst_31517__$1 = (state_31549[(2)]);
var inst_31518 = (inst_31517__$1 == null);
var inst_31519 = cljs.core.not.call(null,inst_31518);
var state_31549__$1 = (function (){var statearr_31554 = state_31549;
(statearr_31554[(9)] = inst_31517__$1);

return statearr_31554;
})();
if(inst_31519){
var statearr_31555_31586 = state_31549__$1;
(statearr_31555_31586[(1)] = (5));

} else {
var statearr_31556_31587 = state_31549__$1;
(statearr_31556_31587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (15))){
var inst_31539 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31557_31588 = state_31549__$1;
(statearr_31557_31588[(2)] = inst_31539);

(statearr_31557_31588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (13))){
var state_31549__$1 = state_31549;
var statearr_31558_31589 = state_31549__$1;
(statearr_31558_31589[(2)] = null);

(statearr_31558_31589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (6))){
var inst_31514 = (state_31549[(8)]);
var inst_31535 = (inst_31514 > (0));
var state_31549__$1 = state_31549;
if(cljs.core.truth_(inst_31535)){
var statearr_31559_31590 = state_31549__$1;
(statearr_31559_31590[(1)] = (12));

} else {
var statearr_31560_31591 = state_31549__$1;
(statearr_31560_31591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (3))){
var inst_31547 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31549__$1,inst_31547);
} else {
if((state_val_31550 === (12))){
var inst_31513 = (state_31549[(7)]);
var inst_31537 = cljs.core.vec.call(null,inst_31513);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31549__$1,(15),out,inst_31537);
} else {
if((state_val_31550 === (2))){
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31549__$1,(4),ch);
} else {
if((state_val_31550 === (11))){
var inst_31529 = (state_31549[(2)]);
var inst_31530 = (new Array(n));
var inst_31513 = inst_31530;
var inst_31514 = (0);
var state_31549__$1 = (function (){var statearr_31561 = state_31549;
(statearr_31561[(7)] = inst_31513);

(statearr_31561[(10)] = inst_31529);

(statearr_31561[(8)] = inst_31514);

return statearr_31561;
})();
var statearr_31562_31592 = state_31549__$1;
(statearr_31562_31592[(2)] = null);

(statearr_31562_31592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (9))){
var inst_31513 = (state_31549[(7)]);
var inst_31527 = cljs.core.vec.call(null,inst_31513);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31549__$1,(11),out,inst_31527);
} else {
if((state_val_31550 === (5))){
var inst_31513 = (state_31549[(7)]);
var inst_31522 = (state_31549[(11)]);
var inst_31517 = (state_31549[(9)]);
var inst_31514 = (state_31549[(8)]);
var inst_31521 = (inst_31513[inst_31514] = inst_31517);
var inst_31522__$1 = (inst_31514 + (1));
var inst_31523 = (inst_31522__$1 < n);
var state_31549__$1 = (function (){var statearr_31563 = state_31549;
(statearr_31563[(12)] = inst_31521);

(statearr_31563[(11)] = inst_31522__$1);

return statearr_31563;
})();
if(cljs.core.truth_(inst_31523)){
var statearr_31564_31593 = state_31549__$1;
(statearr_31564_31593[(1)] = (8));

} else {
var statearr_31565_31594 = state_31549__$1;
(statearr_31565_31594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (14))){
var inst_31542 = (state_31549[(2)]);
var inst_31543 = cljs.core.async.close_BANG_.call(null,out);
var state_31549__$1 = (function (){var statearr_31567 = state_31549;
(statearr_31567[(13)] = inst_31542);

return statearr_31567;
})();
var statearr_31568_31595 = state_31549__$1;
(statearr_31568_31595[(2)] = inst_31543);

(statearr_31568_31595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (10))){
var inst_31533 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31569_31596 = state_31549__$1;
(statearr_31569_31596[(2)] = inst_31533);

(statearr_31569_31596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (8))){
var inst_31513 = (state_31549[(7)]);
var inst_31522 = (state_31549[(11)]);
var tmp31566 = inst_31513;
var inst_31513__$1 = tmp31566;
var inst_31514 = inst_31522;
var state_31549__$1 = (function (){var statearr_31570 = state_31549;
(statearr_31570[(7)] = inst_31513__$1);

(statearr_31570[(8)] = inst_31514);

return statearr_31570;
})();
var statearr_31571_31597 = state_31549__$1;
(statearr_31571_31597[(2)] = null);

(statearr_31571_31597[(1)] = (2));


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
});})(c__21381__auto___31583,out))
;
return ((function (switch__21316__auto__,c__21381__auto___31583,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_31575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31575[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_31575[(1)] = (1));

return statearr_31575;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_31549){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_31549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e31576){if((e31576 instanceof Object)){
var ex__21320__auto__ = e31576;
var statearr_31577_31598 = state_31549;
(statearr_31577_31598[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31599 = state_31549;
state_31549 = G__31599;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_31549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_31549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___31583,out))
})();
var state__21383__auto__ = (function (){var statearr_31578 = f__21382__auto__.call(null);
(statearr_31578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___31583);

return statearr_31578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___31583,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31600 = [];
var len__17843__auto___31674 = arguments.length;
var i__17844__auto___31675 = (0);
while(true){
if((i__17844__auto___31675 < len__17843__auto___31674)){
args31600.push((arguments[i__17844__auto___31675]));

var G__31676 = (i__17844__auto___31675 + (1));
i__17844__auto___31675 = G__31676;
continue;
} else {
}
break;
}

var G__31602 = args31600.length;
switch (G__31602) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31600.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21381__auto___31678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21381__auto___31678,out){
return (function (){
var f__21382__auto__ = (function (){var switch__21316__auto__ = ((function (c__21381__auto___31678,out){
return (function (state_31644){
var state_val_31645 = (state_31644[(1)]);
if((state_val_31645 === (7))){
var inst_31640 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31646_31679 = state_31644__$1;
(statearr_31646_31679[(2)] = inst_31640);

(statearr_31646_31679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (1))){
var inst_31603 = [];
var inst_31604 = inst_31603;
var inst_31605 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31644__$1 = (function (){var statearr_31647 = state_31644;
(statearr_31647[(7)] = inst_31605);

(statearr_31647[(8)] = inst_31604);

return statearr_31647;
})();
var statearr_31648_31680 = state_31644__$1;
(statearr_31648_31680[(2)] = null);

(statearr_31648_31680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (4))){
var inst_31608 = (state_31644[(9)]);
var inst_31608__$1 = (state_31644[(2)]);
var inst_31609 = (inst_31608__$1 == null);
var inst_31610 = cljs.core.not.call(null,inst_31609);
var state_31644__$1 = (function (){var statearr_31649 = state_31644;
(statearr_31649[(9)] = inst_31608__$1);

return statearr_31649;
})();
if(inst_31610){
var statearr_31650_31681 = state_31644__$1;
(statearr_31650_31681[(1)] = (5));

} else {
var statearr_31651_31682 = state_31644__$1;
(statearr_31651_31682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (15))){
var inst_31634 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31652_31683 = state_31644__$1;
(statearr_31652_31683[(2)] = inst_31634);

(statearr_31652_31683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (13))){
var state_31644__$1 = state_31644;
var statearr_31653_31684 = state_31644__$1;
(statearr_31653_31684[(2)] = null);

(statearr_31653_31684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (6))){
var inst_31604 = (state_31644[(8)]);
var inst_31629 = inst_31604.length;
var inst_31630 = (inst_31629 > (0));
var state_31644__$1 = state_31644;
if(cljs.core.truth_(inst_31630)){
var statearr_31654_31685 = state_31644__$1;
(statearr_31654_31685[(1)] = (12));

} else {
var statearr_31655_31686 = state_31644__$1;
(statearr_31655_31686[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (3))){
var inst_31642 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31644__$1,inst_31642);
} else {
if((state_val_31645 === (12))){
var inst_31604 = (state_31644[(8)]);
var inst_31632 = cljs.core.vec.call(null,inst_31604);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31644__$1,(15),out,inst_31632);
} else {
if((state_val_31645 === (2))){
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(4),ch);
} else {
if((state_val_31645 === (11))){
var inst_31612 = (state_31644[(10)]);
var inst_31608 = (state_31644[(9)]);
var inst_31622 = (state_31644[(2)]);
var inst_31623 = [];
var inst_31624 = inst_31623.push(inst_31608);
var inst_31604 = inst_31623;
var inst_31605 = inst_31612;
var state_31644__$1 = (function (){var statearr_31656 = state_31644;
(statearr_31656[(11)] = inst_31622);

(statearr_31656[(7)] = inst_31605);

(statearr_31656[(12)] = inst_31624);

(statearr_31656[(8)] = inst_31604);

return statearr_31656;
})();
var statearr_31657_31687 = state_31644__$1;
(statearr_31657_31687[(2)] = null);

(statearr_31657_31687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (9))){
var inst_31604 = (state_31644[(8)]);
var inst_31620 = cljs.core.vec.call(null,inst_31604);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31644__$1,(11),out,inst_31620);
} else {
if((state_val_31645 === (5))){
var inst_31605 = (state_31644[(7)]);
var inst_31612 = (state_31644[(10)]);
var inst_31608 = (state_31644[(9)]);
var inst_31612__$1 = f.call(null,inst_31608);
var inst_31613 = cljs.core._EQ_.call(null,inst_31612__$1,inst_31605);
var inst_31614 = cljs.core.keyword_identical_QMARK_.call(null,inst_31605,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31615 = (inst_31613) || (inst_31614);
var state_31644__$1 = (function (){var statearr_31658 = state_31644;
(statearr_31658[(10)] = inst_31612__$1);

return statearr_31658;
})();
if(cljs.core.truth_(inst_31615)){
var statearr_31659_31688 = state_31644__$1;
(statearr_31659_31688[(1)] = (8));

} else {
var statearr_31660_31689 = state_31644__$1;
(statearr_31660_31689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (14))){
var inst_31637 = (state_31644[(2)]);
var inst_31638 = cljs.core.async.close_BANG_.call(null,out);
var state_31644__$1 = (function (){var statearr_31662 = state_31644;
(statearr_31662[(13)] = inst_31637);

return statearr_31662;
})();
var statearr_31663_31690 = state_31644__$1;
(statearr_31663_31690[(2)] = inst_31638);

(statearr_31663_31690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (10))){
var inst_31627 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31664_31691 = state_31644__$1;
(statearr_31664_31691[(2)] = inst_31627);

(statearr_31664_31691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (8))){
var inst_31612 = (state_31644[(10)]);
var inst_31604 = (state_31644[(8)]);
var inst_31608 = (state_31644[(9)]);
var inst_31617 = inst_31604.push(inst_31608);
var tmp31661 = inst_31604;
var inst_31604__$1 = tmp31661;
var inst_31605 = inst_31612;
var state_31644__$1 = (function (){var statearr_31665 = state_31644;
(statearr_31665[(7)] = inst_31605);

(statearr_31665[(14)] = inst_31617);

(statearr_31665[(8)] = inst_31604__$1);

return statearr_31665;
})();
var statearr_31666_31692 = state_31644__$1;
(statearr_31666_31692[(2)] = null);

(statearr_31666_31692[(1)] = (2));


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
});})(c__21381__auto___31678,out))
;
return ((function (switch__21316__auto__,c__21381__auto___31678,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_31670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31670[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_31670[(1)] = (1));

return statearr_31670;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_31644){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_31644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e31671){if((e31671 instanceof Object)){
var ex__21320__auto__ = e31671;
var statearr_31672_31693 = state_31644;
(statearr_31672_31693[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31694 = state_31644;
state_31644 = G__31694;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_31644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_31644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21381__auto___31678,out))
})();
var state__21383__auto__ = (function (){var statearr_31673 = f__21382__auto__.call(null);
(statearr_31673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21381__auto___31678);

return statearr_31673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21383__auto__);
});})(c__21381__auto___31678,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map