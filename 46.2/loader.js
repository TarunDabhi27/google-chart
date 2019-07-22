(function() {
    var a = "' of type ",
        l = "Callback must be a function",
        n = "SCRIPT",
        p = "annotatedtimeline",
        q = "annotationchart",
        r = "array",
        u = "browserchart",
        v = "corechart",
        w = "dygraph",
        x = "function",
        y = "hasOwnProperty",
        // z = "https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}",
        z = "/node_modules/google-chart/46.2/third_party/%{subdir}/%{filename}",        
        A = "imagechart",
        B = "number",
        C = "object",
        D = "orgchart",
        E = "propertyIsEnumerable",
        F = "string",
        G = "text/javascript",
        H = "toLocaleString",
        I = "ui",
        J = "ui_base",
        K = "webfontloader";

    function L() {
        return function(b) {
            return b
        }
    }

    function M() {
        return function() {}
    }

    function O(b) {
        return function() {
            return this[b]
        }
    }

    function P(b) {
        return function() {
            return b
        }
    }
    var Q, R = R || {};
    R.scope = {};
    R.ns = function(b, c, d) {
        b instanceof String && (b = String(b));
        for (var e = b.length, f = 0; f < e; f++) {
            var g = b[f];
            if (c.call(d, g, f, b)) return {
                Rk: f,
                Om: g
            }
        }
        return {
            Rk: -1,
            Om: void 0
        }
    };
    R.ci = !1;
    R.hn = !1;
    R.jn = !1;
    R.Rp = !1;
    R.defineProperty = R.ci || typeof Object.defineProperties == x ? Object.defineProperty : function(b, c, d) {
        b != Array.prototype && b != Object.prototype && (b[c] = d.value)
    };
    R.zk = function(b) {
        return "undefined" != typeof window && window === b ? b : "undefined" != typeof global && null != global ? global : b
    };
    R.global = R.zk(this);
    R.Ql = function(b) {
        if (b) {
            for (var c = R.global, d = ["Promise"], e = 0; e < d.length - 1; e++) {
                var f = d[e];
                f in c || (c[f] = {});
                c = c[f]
            }
            d = d[d.length - 1];
            e = c[d];
            b = b(e);
            b != e && null != b && R.defineProperty(c, d, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
    R.xr = function(b, c, d) {
        if (null == b) throw new TypeError("The 'this' value for String.prototype." + d + " must not be null or undefined");
        if (c instanceof RegExp) throw new TypeError("First argument to String.prototype." + d + " must not be a regular expression");
        return b + ""
    };
    R.sj = function(b) {
        var c = 0;
        return function() {
            return c < b.length ? {
                done: !1,
                value: b[c++]
            } : {
                done: !0
            }
        }
    };
    R.rj = function(b) {
        return {
            next: R.sj(b)
        }
    };
    R.hh = function(b) {
        var c = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
        return c ? c.call(b) : R.rj(b)
    };
    R.Fi = !1;
    R.Ql(function(b) {
        function c(b) {
            this.ba = g.Ga;
            this.ra = void 0;
            this.Gb = [];
            var c = this.ud();
            try {
                b(c.resolve, c.reject)
            } catch (t) {
                c.reject(t)
            }
        }

        function d() {
            this.Ua = null
        }

        function e(b) {
            return b instanceof c ? b : new c(function(c) {
                c(b)
            })
        }
        if (b && !R.Fi) return b;
        d.prototype.tf = function(b) {
            null == this.Ua && (this.Ua = [], this.wj());
            this.Ua.push(b)
        };
        d.prototype.wj = function() {
            var b = this;
            this.uf(function() {
                b.hk()
            })
        };
        var f = R.global.setTimeout;
        d.prototype.uf = function(b) {
            f(b, 0)
        };
        d.prototype.hk = function() {
            for (; this.Ua && this.Ua.length;) {
                var b =
                    this.Ua;
                this.Ua = [];
                for (var c = 0; c < b.length; ++c) {
                    var d = b[c];
                    b[c] = null;
                    try {
                        d()
                    } catch (N) {
                        this.xj(N)
                    }
                }
            }
            this.Ua = null
        };
        d.prototype.xj = function(b) {
            this.uf(function() {
                throw b;
            })
        };
        var g = {
            Ga: 0,
            Sa: 1,
            ua: 2
        };
        c.prototype.ud = function() {
            function b(b) {
                return function(e) {
                    d || (d = !0, b.call(c, e))
                }
            }
            var c = this,
                d = !1;
            return {
                resolve: b(this.Xl),
                reject: b(this.ie)
            }
        };
        c.prototype.Xl = function(b) {
            if (b === this) this.ie(new TypeError("A Promise cannot resolve to itself"));
            else if (b instanceof c) this.rm(b);
            else {
                a: switch (typeof b) {
                    case C:
                        var d =
                            null != b;
                        break a;
                    case x:
                        d = !0;
                        break a;
                    default:
                        d = !1
                }
                d ? this.Wl(b) : this.Vf(b)
            }
        };
        c.prototype.Wl = function(b) {
            var c = void 0;
            try {
                c = b.then
            } catch (t) {
                this.ie(t);
                return
            }
            typeof c == x ? this.sm(c, b) : this.Vf(b)
        };
        c.prototype.ie = function(b) {
            this.Hh(g.ua, b)
        };
        c.prototype.Vf = function(b) {
            this.Hh(g.Sa, b)
        };
        c.prototype.Hh = function(b, c) {
            if (this.ba != g.Ga) throw Error("Cannot settle(" + b + ", " + c + "): Promise already settled in state" + this.ba);
            this.ba = b;
            this.ra = c;
            this.jk()
        };
        c.prototype.jk = function() {
            if (null != this.Gb) {
                for (var b = 0; b < this.Gb.length; ++b) h.tf(this.Gb[b]);
                this.Gb = null
            }
        };
        var h = new d;
        c.prototype.rm = function(b) {
            var c = this.ud();
            b.qc(c.resolve, c.reject)
        };
        c.prototype.sm = function(b, c) {
            var d = this.ud();
            try {
                b.call(c, d.resolve, d.reject)
            } catch (N) {
                d.reject(N)
            }
        };
        c.prototype.then = function(b, d) {
            function e(b, c) {
                return typeof b == x ? function(c) {
                    try {
                        f(b(c))
                    } catch (la) {
                        g(la)
                    }
                } : c
            }
            var f, g, h = new c(function(b, c) {
                f = b;
                g = c
            });
            this.qc(e(b, f), e(d, g));
            return h
        };
        c.prototype["catch"] = function(b) {
            return this.then(void 0, b)
        };
        c.prototype.qc = function(b, c) {
            function d() {
                switch (e.ba) {
                    case g.Sa:
                        b(e.ra);
                        break;
                    case g.ua:
                        c(e.ra);
                        break;
                    default:
                        throw Error("Unexpected state: " + e.ba);
                }
            }
            var e = this;
            null == this.Gb ? h.tf(d) : this.Gb.push(d)
        };
        c.resolve = e;
        c.reject = function(b) {
            return new c(function(c, d) {
                d(b)
            })
        };
        c.race = function(b) {
            return new c(function(c, d) {
                for (var f = R.hh(b), g = f.next(); !g.done; g = f.next()) e(g.value).qc(c, d)
            })
        };
        c.all = function(b) {
            var d = R.hh(b),
                f = d.next();
            return f.done ? e([]) : new c(function(b, c) {
                function g(c) {
                    return function(d) {
                        h[c] = d;
                        k--;
                        0 == k && b(h)
                    }
                }
                var h = [],
                    k = 0;
                do h.push(void 0), k++, e(f.value).qc(g(h.length -
                    1), c), f = d.next(); while (!f.done)
            })
        };
        return c
    });
    var S = S || {};
    S.global = this;
    S.U = function(b) {
        return void 0 !== b
    };
    S.N = function(b) {
        return typeof b == F
    };
    S.Uk = function(b) {
        return "boolean" == typeof b
    };
    S.bc = function(b) {
        return typeof b == B
    };
    S.zd = function(b, c, d) {
        b = b.split(".");
        d = d || S.global;
        b[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + b[0]);
        for (var e; b.length && (e = b.shift());) !b.length && S.U(c) ? d[e] = c : d = d[e] && d[e] !== Object.prototype[e] ? d[e] : d[e] = {}
    };
    S.define = function(b, c) {
        S.zd(b, c)
    };
    S.Z = !0;
    S.K = "en";
    S.ld = !0;
    S.cj = !1;
    S.Bi = !S.Z;
    S.ao = !1;
    S.uu = function(b) {
        if (S.Sg()) throw Error("goog.provide cannot be used within a module.");
        S.Ef(b)
    };
    S.Ef = function(b, c) {
        S.zd(b, c)
    };
    S.xg = function() {
        null === S.vd && (S.vd = S.Ek());
        return S.vd
    };
    S.Oi = /^[\w+/_-]+[=]{0,2}$/;
    S.vd = null;
    S.Ek = function() {
        var b = S.global.document;
        return (b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && S.Oi.test(b) ? b : ""
    };
    S.jj = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
    S.Hc = function(b) {
        if (!S.N(b) || !b || -1 == b.search(S.jj)) throw Error("Invalid module identifier");
        if (!S.Rg()) throw Error("Module " + b + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
        if (S.na.ec) throw Error("goog.module may only be called once per module.");
        S.na.ec = b
    };
    S.Hc.get = P(null);
    S.Hc.Ms = P(null);
    S.Mb = {
        Qe: "es6",
        jd: "goog"
    };
    S.na = null;
    S.Sg = function() {
        return S.Rg() || S.Zk()
    };
    S.Rg = function() {
        return !!S.na && S.na.type == S.Mb.jd
    };
    S.Zk = function() {
        if (S.na && S.na.type == S.Mb.Qe) return !0;
        var b = S.global.$jscomp;
        return b ? typeof b.Ed != x ? !1 : !!b.Ed() : !1
    };
    S.Hc.wd = function() {
        S.na.wd = !0
    };
    S.Wj = function(b) {
        if (S.na) S.na.ec = b;
        else {
            var c = S.global.$jscomp;
            if (!c || typeof c.Ed != x) throw Error('Module with namespace "' + b + '" has been loaded incorrectly.');
            c = c.Ul(c.Ed());
            S.fh[b] = {
                kk: c,
                type: S.Mb.Qe,
                Ml: b
            }
        }
    };
    S.Hc.Wr = S.Wj;
    S.uv = function(b) {
        if (S.Bi) throw b = b || "", Error("Importing test-only code into non-debug environment" + (b ? ": " + b : "."));
    };
    S.ss = M();
    S.Qs = function(b) {
        b = b.split(".");
        for (var c = S.global, d = 0; d < b.length; d++)
            if (c = c[b[d]], !S.$a(c)) return null;
        return c
    };
    S.Zs = function(b, c) {
        c = c || S.global;
        for (var d in b) c[d] = b[d]
    };
    S.Bq = M();
    S.Zv = !1;
    S.bo = !0;
    S.Cl = function(b) {
        S.global.console && S.global.console.error(b)
    };
    S.Ul = M();
    S.Iu = function() {
        return {}
    };
    S.Aj = "";
    S.ob = M();
    S.Aq = function() {
        throw Error("unimplemented abstract method");
    };
    S.Cq = function(b) {
        b.Td = void 0;
        b.Ls = function() {
            if (b.Td) return b.Td;
            S.Z && (S.Jg[S.Jg.length] = b);
            return b.Td = new b
        }
    };
    S.Jg = [];
    S.cp = !0;
    S.Zi = S.Z;
    S.fh = {};
    S.Nn = !1;
    S.oq = "detect";
    S.pq = "";
    S.ej = "transpile.js";
    S.Rd = null;
    S.Mm = function() {
        if (null == S.Rd) {
            try {
                var b = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')
            } catch (c) {
                b = !1
            }
            S.Rd = b
        }
        return S.Rd
    };
    S.Sm = function(b) {
        return "(function(){" + b + "\n;})();\n"
    };
    S.Wt = function(b) {
        var c = S.na;
        try {
            S.na = {
                ec: "",
                wd: !1,
                type: S.Mb.jd
            };
            if (S.wa(b)) var d = b.call(void 0, {});
            else if (S.N(b)) S.Mm() && (b = S.Sm(b)), d = S.Al.call(void 0, b);
            else throw Error("Invalid module definition");
            var e = S.na.ec;
            if (S.N(e) && e) S.na.wd ? S.Ef(e, d) : S.Zi && Object.seal && typeof d == C && null != d && Object.seal(d), S.fh[e] = {
                kk: d,
                type: S.Mb.jd,
                Ml: S.na.ec
            };
            else throw Error('Invalid module name "' + e + '"');
        } finally {
            S.na = c
        }
    };
    S.Al = function(b) {
        eval(b);
        return {}
    };
    S.iu = function(b) {
        b = b.split("/");
        for (var c = 0; c < b.length;) "." == b[c] ? b.splice(c, 1) : c && ".." == b[c] && b[c - 1] && ".." != b[c - 1] ? b.splice(--c, 2) : c++;
        return b.join("/")
    };
    S.yl = function(b) {
        if (S.global.ri) return S.global.ri(b);
        try {
            var c = new S.global.XMLHttpRequest;
            c.open("get", b, !1);
            c.send();
            return 0 == c.status || 200 == c.status ? c.responseText : null
        } catch (d) {
            return null
        }
    };
    S.Qv = function(b, c, d) {
        var e = S.global.$jscomp;
        e || (S.global.$jscomp = e = {});
        var f = e.xe;
        if (!f) {
            var g = S.Aj + S.ej,
                h = S.yl(g);
            if (h) {
                (function() {
                    eval(h + "\n//# sourceURL=" + g)
                }).call(S.global);
                if (S.global.$gwtExport && S.global.$gwtExport.$jscomp && !S.global.$gwtExport.$jscomp.transpile) throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(S.global.$gwtExport));
                S.global.$jscomp.xe = S.global.$gwtExport.$jscomp.transpile;
                e = S.global.$jscomp;
                f = e.xe
            }
        }
        if (!f) {
            var k = " requires transpilation but no transpiler was found.";
            k += ' Please add "//javascript/closure:transpiler" as a data dependency to ensure it is included.';
            f = e.xe = function(b, c) {
                S.Cl(c + k);
                return b
            }
        }
        return f(b, c, d)
    };
    S.ea = function(b) {
        var c = typeof b;
        if (c == C)
            if (b) {
                if (b instanceof Array) return r;
                if (b instanceof Object) return c;
                var d = Object.prototype.toString.call(b);
                if ("[object Window]" == d) return C;
                if ("[object Array]" == d || typeof b.length == B && "undefined" != typeof b.splice && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("splice")) return r;
                if ("[object Function]" == d || "undefined" != typeof b.call && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("call")) return x
            } else return "null";
        else if (c == x && "undefined" == typeof b.call) return C;
        return c
    };
    S.It = function(b) {
        return null === b
    };
    S.$a = function(b) {
        return null != b
    };
    S.isArray = function(b) {
        return S.ea(b) == r
    };
    S.Zb = function(b) {
        var c = S.ea(b);
        return c == r || c == C && typeof b.length == B
    };
    S.ut = function(b) {
        return S.qa(b) && typeof b.getFullYear == x
    };
    S.wa = function(b) {
        return S.ea(b) == x
    };
    S.qa = function(b) {
        var c = typeof b;
        return c == C && null != b || c == x
    };
    S.zg = function(b) {
        return b[S.fb] || (b[S.fb] = ++S.Em)
    };
    S.bt = function(b) {
        return !!b[S.fb]
    };
    S.Sl = function(b) {
        null !== b && "removeAttribute" in b && b.removeAttribute(S.fb);
        try {
            delete b[S.fb]
        } catch (c) {}
    };
    S.fb = "closure_uid_" + (1E9 * Math.random() >>> 0);
    S.Em = 0;
    S.Ks = S.zg;
    S.Du = S.Sl;
    S.Lj = function(b) {
        var c = S.ea(b);
        if (c == C || c == r) {
            if (typeof b.clone === x) return b.clone();
            c = c == r ? [] : {};
            for (var d in b) c[d] = S.Lj(b[d]);
            return c
        }
        return b
    };
    S.Cj = function(b, c, d) {
        return b.call.apply(b.bind, arguments)
    };
    S.Bj = function(b, c, d) {
        if (!b) throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, e);
                return b.apply(c, d)
            }
        }
        return function() {
            return b.apply(c, arguments)
        }
    };
    S.bind = function(b, c, d) {
        S.bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? S.Cj : S.Bj;
        return S.bind.apply(null, arguments)
    };
    S.pb = function(b, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function() {
            var c = d.slice();
            c.push.apply(c, arguments);
            return b.apply(this, c)
        }
    };
    S.au = function(b, c) {
        for (var d in c) b[d] = c[d]
    };
    S.now = S.ld && Date.now || function() {
        return +new Date
    };
    S.Ys = function(b) {
        if (S.global.execScript) S.global.execScript(b, "JavaScript");
        else if (S.global.eval) {
            if (null == S.vc) {
                try {
                    S.global.eval("var _evalTest_ = 1;")
                } catch (e) {}
                if ("undefined" != typeof S.global._evalTest_) {
                    try {
                        delete S.global._evalTest_
                    } catch (e) {}
                    S.vc = !0
                } else S.vc = !1
            }
            if (S.vc) S.global.eval(b);
            else {
                var c = S.global.document,
                    d = c.createElement(n);
                d.type = G;
                d.defer = !1;
                d.appendChild(c.createTextNode(b));
                c.head.appendChild(d);
                c.head.removeChild(d)
            }
        } else throw Error("goog.globalEval not available");
    };
    S.vc = null;
    S.Is = function(b, c) {
        function d(b) {
            b = b.split("-");
            for (var c = [], d = 0; d < b.length; d++) c.push(e(b[d]));
            return c.join("-")
        }

        function e(b) {
            return S.Jf[b] || b
        }
        if ("." == String(b).charAt(0)) throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + b);
        var f = S.Jf ? "BY_WHOLE" == S.Vj ? e : d : L();
        b = c ? b + "-" + f(c) : f(b);
        return S.global.pi ? S.global.pi(b) : b
    };
    S.Zu = function(b, c) {
        S.Jf = b;
        S.Vj = c
    };
    S.Ns = function(b, c) {
        c && (b = b.replace(/\{\$([^}]+)}/g, function(b, e) {
            return null != c && e in c ? c[e] : b
        }));
        return b
    };
    S.Os = L();
    S.Na = function(b, c) {
        S.zd(b, c, void 0)
    };
    S.ls = function(b, c, d) {
        b[c] = d
    };
    S.kb = function(b, c) {
        function d() {}
        d.prototype = c.prototype;
        b.Vc = c.prototype;
        b.prototype = new d;
        b.prototype.constructor = b;
        b.zj = function(b, d, g) {
            for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f];
            return c.prototype[d].apply(b, e)
        }
    };
    S.zj = function(b, c, d) {
        var e = arguments.callee.caller;
        if (S.cj || S.Z && !e) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
        if ("undefined" !== typeof e.Vc) {
            for (var f = Array(arguments.length - 1), g = 1; g < arguments.length; g++) f[g - 1] = arguments[g];
            return e.Vc.constructor.apply(b, f)
        }
        if (typeof c != F && "symbol" != typeof c) throw Error("method names provided to goog.base must be a string or a symbol");
        f = Array(arguments.length -
            2);
        for (g = 2; g < arguments.length; g++) f[g - 2] = arguments[g];
        g = !1;
        for (var h = b.constructor; h; h = h.Vc && h.Vc.constructor)
            if (h.prototype[c] === e) g = !0;
            else if (g) return h.prototype[c].apply(b, f);
        if (b[c] === e) return b.constructor.prototype[c].apply(b, f);
        throw Error("goog.base called from a method of one name to a method of a different name");
    };
    S.scope = function(b) {
        if (S.Sg()) throw Error("goog.scope is not supported within a module.");
        b.call(S.global)
    };
    S.xa = function(b, c) {
        var d = c.constructor,
            e = c.wm;
        d && d != Object.prototype.constructor || (d = function() {
            throw Error("cannot instantiate an interface (no constructor defined).");
        });
        d = S.xa.Qj(d, b);
        b && S.kb(d, b);
        delete c.constructor;
        delete c.wm;
        S.xa.sf(d.prototype, c);
        null != e && (e instanceof Function ? e(d) : S.xa.sf(d, e));
        return d
    };
    S.xa.Yi = S.Z;
    S.xa.Qj = function(b, c) {
        function d() {
            var c = b.apply(this, arguments) || this;
            c[S.fb] = c[S.fb];
            this.constructor === d && e && Object.seal instanceof Function && Object.seal(c);
            return c
        }
        if (!S.xa.Yi) return b;
        var e = !S.xa.ll(c);
        return d
    };
    S.xa.ll = function(b) {
        return b && b.prototype && b.prototype[S.gj]
    };
    S.xa.bf = ["constructor", y, "isPrototypeOf", E, H, "toString", "valueOf"];
    S.xa.sf = function(b, c) {
        for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]);
        for (var e = 0; e < S.xa.bf.length; e++) d = S.xa.bf[e], Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d])
    };
    S.Jv = M();
    S.gj = "goog_defineClass_legacy_unsealable";
    S.debug = {};
    S.debug.Error = function(b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, S.debug.Error);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        b && (this.message = String(b))
    };
    S.kb(S.debug.Error, Error);
    S.debug.Error.prototype.name = "CustomError";
    S.a = {};
    S.a.ia = {
        Ra: 1,
        ln: 2,
        nc: 3,
        Bn: 4,
        eo: 5,
        co: 6,
        Dp: 7,
        In: 8,
        fd: 9,
        Vn: 10,
        Ci: 11,
        rp: 12
    };
    S.u = {};
    S.u.sa = S.Z;
    S.u.hc = function(b, c) {
        S.debug.Error.call(this, S.u.ym(b, c))
    };
    S.kb(S.u.hc, S.debug.Error);
    S.u.hc.prototype.name = "AssertionError";
    S.u.zi = function(b) {
        throw b;
    };
    S.u.xd = S.u.zi;
    S.u.ym = function(b, c) {
        b = b.split("%s");
        for (var d = "", e = b.length - 1, f = 0; f < e; f++) d += b[f] + (f < c.length ? c[f] : "%s");
        return d + b[e]
    };
    S.u.Ia = function(b, c, d, e) {
        var f = "Assertion failed";
        if (d) {
            f += ": " + d;
            var g = e
        } else b && (f += ": " + b, g = c);
        b = new S.u.hc("" + f, g || []);
        S.u.xd(b)
    };
    S.u.cv = function(b) {
        S.u.sa && (S.u.xd = b)
    };
    S.u.assert = function(b, c, d) {
        S.u.sa && !b && S.u.Ia("", null, c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    S.u.ma = function(b, c) {
        S.u.sa && S.u.xd(new S.u.hc("Failure" + (b ? ": " + b : ""), Array.prototype.slice.call(arguments, 1)))
    };
    S.u.Zq = function(b, c, d) {
        S.u.sa && !S.bc(b) && S.u.Ia("Expected number but got %s: %s.", [S.ea(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    S.u.dr = function(b, c, d) {
        S.u.sa && !S.N(b) && S.u.Ia("Expected string but got %s: %s.", [S.ea(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    S.u.Lq = function(b, c, d) {
        S.u.sa && !S.wa(b) && S.u.Ia("Expected function but got %s: %s.", [S.ea(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    S.u.$q = function(b, c, d) {
        S.u.sa && !S.qa(b) && S.u.Ia("Expected object but got %s: %s.", [S.ea(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    S.u.Hq = function(b, c, d) {
        S.u.sa && !S.isArray(b) && S.u.Ia("Expected array but got %s: %s.", [S.ea(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    S.u.Iq = function(b, c, d) {
        S.u.sa && !S.Uk(b) && S.u.Ia("Expected boolean but got %s: %s.", [S.ea(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    S.u.Jq = function(b, c, d) {
        !S.u.sa || S.qa(b) && b.nodeType == S.a.ia.Ra || S.u.Ia("Expected Element but got %s: %s.", [S.ea(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    S.u.Mq = function(b, c, d, e) {
        !S.u.sa || b instanceof c || S.u.Ia("Expected instanceof %s but got %s.", [S.u.yg(c), S.u.yg(b)], d, Array.prototype.slice.call(arguments, 3));
        return b
    };
    S.u.Kq = function(b, c, d) {
        !S.u.sa || typeof b == B && isFinite(b) || S.u.Ia("Expected %s to be a finite number but it is not.", [b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    S.u.cr = function() {
        for (var b in Object.prototype) S.u.ma(b + " should not be enumerable in Object.prototype.")
    };
    S.u.yg = function(b) {
        return b instanceof Function ? b.displayName || b.name || "unknown type name" : b instanceof Object ? b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b) : null === b ? "null" : typeof b
    };
    S.h = {};
    S.La = S.ld;
    S.h.Ja = !1;
    S.h.Pl = function(b) {
        return b[b.length - 1]
    };
    S.h.Tt = S.h.Pl;
    S.h.indexOf = S.La && (S.h.Ja || Array.prototype.indexOf) ? function(b, c, d) {
        return Array.prototype.indexOf.call(b, c, d)
    } : function(b, c, d) {
        d = null == d ? 0 : 0 > d ? Math.max(0, b.length + d) : d;
        if (S.N(b)) return S.N(c) && 1 == c.length ? b.indexOf(c, d) : -1;
        for (; d < b.length; d++)
            if (d in b && b[d] === c) return d;
        return -1
    };
    S.h.lastIndexOf = S.La && (S.h.Ja || Array.prototype.lastIndexOf) ? function(b, c, d) {
        return Array.prototype.lastIndexOf.call(b, c, null == d ? b.length - 1 : d)
    } : function(b, c, d) {
        d = null == d ? b.length - 1 : d;
        0 > d && (d = Math.max(0, b.length + d));
        if (S.N(b)) return S.N(c) && 1 == c.length ? b.lastIndexOf(c, d) : -1;
        for (; 0 <= d; d--)
            if (d in b && b[d] === c) return d;
        return -1
    };
    S.h.forEach = S.La && (S.h.Ja || Array.prototype.forEach) ? function(b, c, d) {
        Array.prototype.forEach.call(b, c, d)
    } : function(b, c, d) {
        for (var e = b.length, f = S.N(b) ? b.split("") : b, g = 0; g < e; g++) g in f && c.call(d, f[g], g, b)
    };
    S.h.Uf = function(b, c) {
        for (var d = S.N(b) ? b.split("") : b, e = b.length - 1; 0 <= e; --e) e in d && c.call(void 0, d[e], e, b)
    };
    S.h.filter = S.La && (S.h.Ja || Array.prototype.filter) ? function(b, c, d) {
        return Array.prototype.filter.call(b, c, d)
    } : function(b, c, d) {
        for (var e = b.length, f = [], g = 0, h = S.N(b) ? b.split("") : b, k = 0; k < e; k++)
            if (k in h) {
                var m = h[k];
                c.call(d, m, k, b) && (f[g++] = m)
            } return f
    };
    S.h.map = S.La && (S.h.Ja || Array.prototype.map) ? function(b, c, d) {
        return Array.prototype.map.call(b, c, d)
    } : function(b, c, d) {
        for (var e = b.length, f = Array(e), g = S.N(b) ? b.split("") : b, h = 0; h < e; h++) h in g && (f[h] = c.call(d, g[h], h, b));
        return f
    };
    S.h.reduce = S.La && (S.h.Ja || Array.prototype.reduce) ? function(b, c, d, e) {
        e && (c = S.bind(c, e));
        return Array.prototype.reduce.call(b, c, d)
    } : function(b, c, d, e) {
        var f = d;
        S.h.forEach(b, function(d, h) {
            f = c.call(e, f, d, h, b)
        });
        return f
    };
    S.h.reduceRight = S.La && (S.h.Ja || Array.prototype.reduceRight) ? function(b, c, d, e) {
        e && (c = S.bind(c, e));
        return Array.prototype.reduceRight.call(b, c, d)
    } : function(b, c, d, e) {
        var f = d;
        S.h.Uf(b, function(d, h) {
            f = c.call(e, f, d, h, b)
        });
        return f
    };
    S.h.some = S.La && (S.h.Ja || Array.prototype.some) ? function(b, c, d) {
        return Array.prototype.some.call(b, c, d)
    } : function(b, c, d) {
        for (var e = b.length, f = S.N(b) ? b.split("") : b, g = 0; g < e; g++)
            if (g in f && c.call(d, f[g], g, b)) return !0;
        return !1
    };
    S.h.every = S.La && (S.h.Ja || Array.prototype.every) ? function(b, c, d) {
        return Array.prototype.every.call(b, c, d)
    } : function(b, c, d) {
        for (var e = b.length, f = S.N(b) ? b.split("") : b, g = 0; g < e; g++)
            if (g in f && !c.call(d, f[g], g, b)) return !1;
        return !0
    };
    S.h.count = function(b, c, d) {
        var e = 0;
        S.h.forEach(b, function(b, g, h) {
            c.call(d, b, g, h) && ++e
        }, d);
        return e
    };
    S.h.find = function(b, c, d) {
        c = S.h.findIndex(b, c, d);
        return 0 > c ? null : S.N(b) ? b.charAt(c) : b[c]
    };
    S.h.findIndex = function(b, c, d) {
        for (var e = b.length, f = S.N(b) ? b.split("") : b, g = 0; g < e; g++)
            if (g in f && c.call(d, f[g], g, b)) return g;
        return -1
    };
    S.h.nk = function(b, c) {
        c = S.h.lk(b, c);
        return 0 > c ? null : S.N(b) ? b.charAt(c) : b[c]
    };
    S.h.lk = function(b, c) {
        for (var d = S.N(b) ? b.split("") : b, e = b.length - 1; 0 <= e; e--)
            if (e in d && c.call(void 0, d[e], e, b)) return e;
        return -1
    };
    S.h.contains = function(b, c) {
        return 0 <= S.h.indexOf(b, c)
    };
    S.h.Db = function(b) {
        return 0 == b.length
    };
    S.h.clear = function(b) {
        if (!S.isArray(b))
            for (var c = b.length - 1; 0 <= c; c--) delete b[c];
        b.length = 0
    };
    S.h.gt = function(b, c) {
        S.h.contains(b, c) || b.push(c)
    };
    S.h.Fg = function(b, c, d) {
        S.h.splice(b, d, 0, c)
    };
    S.h.jt = function(b, c, d) {
        S.pb(S.h.splice, b, d, 0).apply(null, c)
    };
    S.h.insertBefore = function(b, c, d) {
        var e;
        2 == arguments.length || 0 > (e = S.h.indexOf(b, d)) ? b.push(c) : S.h.Fg(b, c, e)
    };
    S.h.remove = function(b, c) {
        c = S.h.indexOf(b, c);
        var d;
        (d = 0 <= c) && S.h.Ib(b, c);
        return d
    };
    S.h.Fu = function(b, c) {
        c = S.h.lastIndexOf(b, c);
        return 0 <= c ? (S.h.Ib(b, c), !0) : !1
    };
    S.h.Ib = function(b, c) {
        return 1 == Array.prototype.splice.call(b, c, 1).length
    };
    S.h.Eu = function(b, c, d) {
        c = S.h.findIndex(b, c, d);
        return 0 <= c ? (S.h.Ib(b, c), !0) : !1
    };
    S.h.Bu = function(b, c, d) {
        var e = 0;
        S.h.Uf(b, function(f, g) {
            c.call(d, f, g, b) && S.h.Ib(b, g) && e++
        });
        return e
    };
    S.h.concat = function(b) {
        return Array.prototype.concat.apply([], arguments)
    };
    S.h.join = function(b) {
        return Array.prototype.concat.apply([], arguments)
    };
    S.h.Rh = function(b) {
        var c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
            return d
        }
        return []
    };
    S.h.clone = S.h.Rh;
    S.h.extend = function(b, c) {
        for (var d = 1; d < arguments.length; d++) {
            var e = arguments[d];
            if (S.Zb(e)) {
                var f = b.length || 0,
                    g = e.length || 0;
                b.length = f + g;
                for (var h = 0; h < g; h++) b[f + h] = e[h]
            } else b.push(e)
        }
    };
    S.h.splice = function(b, c, d, e) {
        return Array.prototype.splice.apply(b, S.h.slice(arguments, 1))
    };
    S.h.slice = function(b, c, d) {
        return 2 >= arguments.length ? Array.prototype.slice.call(b, c) : Array.prototype.slice.call(b, c, d)
    };
    S.h.Cu = function(b, c, d) {
        function e(b) {
            return S.qa(b) ? "o" + S.zg(b) : (typeof b).charAt(0) + b
        }
        c = c || b;
        d = d || e;
        for (var f = {}, g = 0, h = 0; h < b.length;) {
            var k = b[h++],
                m = d(k);
            Object.prototype.hasOwnProperty.call(f, m) || (f[m] = !0, c[g++] = k)
        }
        c.length = g
    };
    S.h.vf = function(b, c, d) {
        return S.h.wf(b, d || S.h.Xa, !1, c)
    };
    S.h.jr = function(b, c, d) {
        return S.h.wf(b, c, !0, void 0, d)
    };
    S.h.wf = function(b, c, d, e, f) {
        for (var g = 0, h = b.length, k; g < h;) {
            var m = g + h >> 1;
            var t = d ? c.call(f, b[m], m, b) : c(e, b[m]);
            0 < t ? g = m + 1 : (h = m, k = !t)
        }
        return k ? g : ~g
    };
    S.h.sort = function(b, c) {
        b.sort(c || S.h.Xa)
    };
    S.h.Dv = function(b, c) {
        for (var d = Array(b.length), e = 0; e < b.length; e++) d[e] = {
            index: e,
            value: b[e]
        };
        var f = c || S.h.Xa;
        S.h.sort(d, function(b, c) {
            return f(b.value, c.value) || b.index - c.index
        });
        for (e = 0; e < b.length; e++) b[e] = d[e].value
    };
    S.h.um = function(b, c, d) {
        var e = d || S.h.Xa;
        S.h.sort(b, function(b, d) {
            return e(c(b), c(d))
        })
    };
    S.h.Av = function(b, c, d) {
        S.h.um(b, function(b) {
            return b[c]
        }, d)
    };
    S.h.Ot = function(b, c, d) {
        c = c || S.h.Xa;
        for (var e = 1; e < b.length; e++) {
            var f = c(b[e - 1], b[e]);
            if (0 < f || 0 == f && d) return !1
        }
        return !0
    };
    S.h.Ub = function(b, c) {
        if (!S.Zb(b) || !S.Zb(c) || b.length != c.length) return !1;
        for (var d = b.length, e = S.h.Xj, f = 0; f < d; f++)
            if (!e(b[f], c[f])) return !1;
        return !0
    };
    S.h.Dr = function(b, c, d) {
        d = d || S.h.Xa;
        for (var e = Math.min(b.length, c.length), f = 0; f < e; f++) {
            var g = d(b[f], c[f]);
            if (0 != g) return g
        }
        return S.h.Xa(b.length, c.length)
    };
    S.h.Xa = function(b, c) {
        return b > c ? 1 : b < c ? -1 : 0
    };
    S.h.mt = function(b, c) {
        return -S.h.Xa(b, c)
    };
    S.h.Xj = function(b, c) {
        return b === c
    };
    S.h.gr = function(b, c, d) {
        d = S.h.vf(b, c, d);
        return 0 > d ? (S.h.Fg(b, c, -(d + 1)), !0) : !1
    };
    S.h.ir = function(b, c, d) {
        c = S.h.vf(b, c, d);
        return 0 <= c ? S.h.Ib(b, c) : !1
    };
    S.h.lr = function(b, c, d) {
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f],
                h = c.call(d, g, f, b);
            S.U(h) && (e[h] || (e[h] = [])).push(g)
        }
        return e
    };
    S.h.Nv = function(b, c, d) {
        var e = {};
        S.h.forEach(b, function(f, g) {
            e[c.call(d, f, g, b)] = f
        });
        return e
    };
    S.h.wu = function(b, c, d) {
        var e = [],
            f = 0,
            g = b;
        d = d || 1;
        void 0 !== c && (f = b, g = c);
        if (0 > d * (g - f)) return [];
        if (0 < d)
            for (b = f; b < g; b += d) e.push(b);
        else
            for (b = f; b > g; b += d) e.push(b);
        return e
    };
    S.h.repeat = function(b, c) {
        for (var d = [], e = 0; e < c; e++) d[e] = b;
        return d
    };
    S.h.flatten = function(b) {
        for (var c = [], d = 0; d < arguments.length; d++) {
            var e = arguments[d];
            if (S.isArray(e))
                for (var f = 0; f < e.length; f += 8192)
                    for (var g = S.h.flatten.apply(null, S.h.slice(e, f, f + 8192)), h = 0; h < g.length; h++) c.push(g[h]);
            else c.push(e)
        }
        return c
    };
    S.h.rotate = function(b, c) {
        b.length && (c %= b.length, 0 < c ? Array.prototype.unshift.apply(b, b.splice(-c, c)) : 0 > c && Array.prototype.push.apply(b, b.splice(0, -c)));
        return b
    };
    S.h.cu = function(b, c, d) {
        c = Array.prototype.splice.call(b, c, 1);
        Array.prototype.splice.call(b, d, 0, c[0])
    };
    S.h.cw = function(b) {
        if (!arguments.length) return [];
        for (var c = [], d = arguments[0].length, e = 1; e < arguments.length; e++) arguments[e].length < d && (d = arguments[e].length);
        for (e = 0; e < d; e++) {
            for (var f = [], g = 0; g < arguments.length; g++) f.push(arguments[g][e]);
            c.push(f)
        }
        return c
    };
    S.h.zv = function(b, c) {
        c = c || Math.random;
        for (var d = b.length - 1; 0 < d; d--) {
            var e = Math.floor(c() * (d + 1)),
                f = b[d];
            b[d] = b[e];
            b[e] = f
        }
    };
    S.h.Ir = function(b, c) {
        var d = [];
        S.h.forEach(c, function(c) {
            d.push(b[c])
        });
        return d
    };
    S.h.Fr = function(b, c, d) {
        return S.h.concat.apply([], S.h.map(b, c, d))
    };
    S.async = {};
    S.async.jc = function(b, c, d) {
        this.wl = d;
        this.Tj = b;
        this.Vl = c;
        this.Ic = 0;
        this.Dc = null
    };
    S.async.jc.prototype.get = function() {
        if (0 < this.Ic) {
            this.Ic--;
            var b = this.Dc;
            this.Dc = b.next;
            b.next = null
        } else b = this.Tj();
        return b
    };
    S.async.jc.prototype.put = function(b) {
        this.Vl(b);
        this.Ic < this.wl && (this.Ic++, b.next = this.Dc, this.Dc = b)
    };
    S.debug.aa = {};
    S.debug.fo = M();
    S.debug.aa.Hb = [];
    S.debug.aa.fe = [];
    S.debug.aa.oh = !1;
    S.debug.aa.register = function(b) {
        S.debug.aa.Hb[S.debug.aa.Hb.length] = b;
        if (S.debug.aa.oh)
            for (var c = S.debug.aa.fe, d = 0; d < c.length; d++) b(S.bind(c[d].Tm, c[d]))
    };
    S.debug.aa.bu = function(b) {
        S.debug.aa.oh = !0;
        for (var c = S.bind(b.Tm, b), d = 0; d < S.debug.aa.Hb.length; d++) S.debug.aa.Hb[d](c);
        S.debug.aa.fe.push(b)
    };
    S.debug.aa.Wv = function(b) {
        var c = S.debug.aa.fe;
        b = S.bind(b.w, b);
        for (var d = 0; d < S.debug.aa.Hb.length; d++) S.debug.aa.Hb[d](b);
        c.length--
    };
    S.a.Go = M();
    S.a.c = function(b) {
        this.zm = b
    };
    S.a.c.prototype.toString = O("zm");
    S.a.c.Um = new S.a.c("A");
    S.a.c.Vm = new S.a.c("ABBR");
    S.a.c.Xm = new S.a.c("ACRONYM");
    S.a.c.Ym = new S.a.c("ADDRESS");
    S.a.c.cn = new S.a.c("APPLET");
    S.a.c.dn = new S.a.c("AREA");
    S.a.c.fn = new S.a.c("ARTICLE");
    S.a.c.gn = new S.a.c("ASIDE");
    S.a.c.nn = new S.a.c("AUDIO");
    S.a.c.on = new S.a.c("B");
    S.a.c.pn = new S.a.c("BASE");
    S.a.c.qn = new S.a.c("BASEFONT");
    S.a.c.rn = new S.a.c("BDI");
    S.a.c.sn = new S.a.c("BDO");
    S.a.c.vn = new S.a.c("BIG");
    S.a.c.wn = new S.a.c("BLOCKQUOTE");
    S.a.c.xn = new S.a.c("BODY");
    S.a.c.Le = new S.a.c("BR");
    S.a.c.yn = new S.a.c("BUTTON");
    S.a.c.zn = new S.a.c("CANVAS");
    S.a.c.An = new S.a.c("CAPTION");
    S.a.c.Cn = new S.a.c("CENTER");
    S.a.c.Dn = new S.a.c("CITE");
    S.a.c.En = new S.a.c("CODE");
    S.a.c.Fn = new S.a.c("COL");
    S.a.c.Gn = new S.a.c("COLGROUP");
    S.a.c.Hn = new S.a.c("COMMAND");
    S.a.c.Jn = new S.a.c("DATA");
    S.a.c.Kn = new S.a.c("DATALIST");
    S.a.c.Ln = new S.a.c("DD");
    S.a.c.Mn = new S.a.c("DEL");
    S.a.c.On = new S.a.c("DETAILS");
    S.a.c.Pn = new S.a.c("DFN");
    S.a.c.Qn = new S.a.c("DIALOG");
    S.a.c.Rn = new S.a.c("DIR");
    S.a.c.Sn = new S.a.c("DIV");
    S.a.c.Tn = new S.a.c("DL");
    S.a.c.Wn = new S.a.c("DT");
    S.a.c.Zn = new S.a.c("EM");
    S.a.c.$n = new S.a.c("EMBED");
    S.a.c.io = new S.a.c("FIELDSET");
    S.a.c.jo = new S.a.c("FIGCAPTION");
    S.a.c.oo = new S.a.c("FIGURE");
    S.a.c.po = new S.a.c("FONT");
    S.a.c.qo = new S.a.c("FOOTER");
    S.a.c.so = new S.a.c("FORM");
    S.a.c.to = new S.a.c("FRAME");
    S.a.c.uo = new S.a.c("FRAMESET");
    S.a.c.vo = new S.a.c("H1");
    S.a.c.wo = new S.a.c("H2");
    S.a.c.xo = new S.a.c("H3");
    S.a.c.yo = new S.a.c("H4");
    S.a.c.zo = new S.a.c("H5");
    S.a.c.Ao = new S.a.c("H6");
    S.a.c.Bo = new S.a.c("HEAD");
    S.a.c.Co = new S.a.c("HEADER");
    S.a.c.Do = new S.a.c("HGROUP");
    S.a.c.Eo = new S.a.c("HR");
    S.a.c.Fo = new S.a.c("HTML");
    S.a.c.Ho = new S.a.c("I");
    S.a.c.Ko = new S.a.c("IFRAME");
    S.a.c.Lo = new S.a.c("IMG");
    S.a.c.Mo = new S.a.c("INPUT");
    S.a.c.No = new S.a.c("INS");
    S.a.c.So = new S.a.c("ISINDEX");
    S.a.c.Vo = new S.a.c("KBD");
    S.a.c.Wo = new S.a.c("KEYGEN");
    S.a.c.Xo = new S.a.c("LABEL");
    S.a.c.Zo = new S.a.c("LEGEND");
    S.a.c.$o = new S.a.c("LI");
    S.a.c.ap = new S.a.c("LINK");
    S.a.c.fp = new S.a.c("MAIN");
    S.a.c.gp = new S.a.c("MAP");
    S.a.c.hp = new S.a.c("MARK");
    S.a.c.ip = new S.a.c("MATH");
    S.a.c.jp = new S.a.c("MENU");
    S.a.c.kp = new S.a.c("MENUITEM");
    S.a.c.lp = new S.a.c("META");
    S.a.c.mp = new S.a.c("METER");
    S.a.c.op = new S.a.c("NAV");
    S.a.c.pp = new S.a.c("NOFRAMES");
    S.a.c.qp = new S.a.c("NOSCRIPT");
    S.a.c.tp = new S.a.c("OBJECT");
    S.a.c.up = new S.a.c("OL");
    S.a.c.vp = new S.a.c("OPTGROUP");
    S.a.c.wp = new S.a.c("OPTION");
    S.a.c.xp = new S.a.c("OUTPUT");
    S.a.c.yp = new S.a.c("P");
    S.a.c.zp = new S.a.c("PARAM");
    S.a.c.Ap = new S.a.c("PICTURE");
    S.a.c.Cp = new S.a.c("PRE");
    S.a.c.Ep = new S.a.c("PROGRESS");
    S.a.c.Q = new S.a.c("Q");
    S.a.c.Fp = new S.a.c("RP");
    S.a.c.Gp = new S.a.c("RT");
    S.a.c.Hp = new S.a.c("RTC");
    S.a.c.Ip = new S.a.c("RUBY");
    S.a.c.Kp = new S.a.c("S");
    S.a.c.Np = new S.a.c("SAMP");
    S.a.c.Op = new S.a.c(n);
    S.a.c.Pp = new S.a.c("SECTION");
    S.a.c.Qp = new S.a.c("SELECT");
    S.a.c.Sp = new S.a.c("SMALL");
    S.a.c.Tp = new S.a.c("SOURCE");
    S.a.c.Up = new S.a.c("SPAN");
    S.a.c.Vp = new S.a.c("STRIKE");
    S.a.c.Wp = new S.a.c("STRONG");
    S.a.c.Xp = new S.a.c("STYLE");
    S.a.c.Yp = new S.a.c("SUB");
    S.a.c.Zp = new S.a.c("SUMMARY");
    S.a.c.$p = new S.a.c("SUP");
    S.a.c.aq = new S.a.c("SVG");
    S.a.c.bq = new S.a.c("TABLE");
    S.a.c.cq = new S.a.c("TBODY");
    S.a.c.eq = new S.a.c("TD");
    S.a.c.fq = new S.a.c("TEMPLATE");
    S.a.c.gq = new S.a.c("TEXTAREA");
    S.a.c.hq = new S.a.c("TFOOT");
    S.a.c.iq = new S.a.c("TH");
    S.a.c.jq = new S.a.c("THEAD");
    S.a.c.kq = new S.a.c("TIME");
    S.a.c.lq = new S.a.c("TITLE");
    S.a.c.mq = new S.a.c("TR");
    S.a.c.nq = new S.a.c("TRACK");
    S.a.c.rq = new S.a.c("TT");
    S.a.c.tq = new S.a.c("U");
    S.a.c.uq = new S.a.c("UL");
    S.a.c.vq = new S.a.c("VAR");
    S.a.c.wq = new S.a.c("VIDEO");
    S.a.c.xq = new S.a.c("WBR");
    S.O = {};
    S.O.Mj = function(b) {
        return function() {
            return b
        }
    };
    S.O.ho = P(!1);
    S.O.qq = P(!0);
    S.O.sp = P(null);
    S.O.Sk = L();
    S.O.error = function(b) {
        return function() {
            throw Error(b);
        }
    };
    S.O.ma = function(b) {
        return function() {
            throw b;
        }
    };
    S.O.lock = function(b, c) {
        c = c || 0;
        return function() {
            return b.apply(this, Array.prototype.slice.call(arguments, 0, c))
        }
    };
    S.O.mu = function(b) {
        return function() {
            return arguments[b]
        }
    };
    S.O.su = function(b, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            c.push.apply(c, d);
            return b.apply(this, c)
        }
    };
    S.O.bw = function(b, c) {
        return S.O.nm(b, S.O.Mj(c))
    };
    S.O.js = function(b, c) {
        return function(d) {
            return c ? b == d : b === d
        }
    };
    S.O.Er = function(b, c) {
        var d = arguments,
            e = d.length;
        return function() {
            var b;
            e && (b = d[e - 1].apply(this, arguments));
            for (var c = e - 2; 0 <= c; c--) b = d[c].call(this, b);
            return b
        }
    };
    S.O.nm = function(b) {
        var c = arguments,
            d = c.length;
        return function() {
            for (var b, f = 0; f < d; f++) b = c[f].apply(this, arguments);
            return b
        }
    };
    S.O.and = function(b) {
        var c = arguments,
            d = c.length;
        return function() {
            for (var b = 0; b < d; b++)
                if (!c[b].apply(this, arguments)) return !1;
            return !0
        }
    };
    S.O.or = function(b) {
        var c = arguments,
            d = c.length;
        return function() {
            for (var b = 0; b < d; b++)
                if (c[b].apply(this, arguments)) return !0;
            return !1
        }
    };
    S.O.lu = function(b) {
        return function() {
            return !b.apply(this, arguments)
        }
    };
    S.O.create = function(b, c) {
        function d() {}
        d.prototype = b.prototype;
        var e = new d;
        b.apply(e, Array.prototype.slice.call(arguments, 1));
        return e
    };
    S.O.li = !0;
    S.O.Gj = function(b) {
        var c = !1,
            d;
        return function() {
            if (!S.O.li) return b();
            c || (d = b(), c = !0);
            return d
        }
    };
    S.O.once = function(b) {
        var c = b;
        return function() {
            if (c) {
                var b = c;
                c = null;
                b()
            }
        }
    };
    S.O.Ur = function(b, c, d) {
        var e = 0;
        return function(f) {
            S.global.clearTimeout(e);
            var g = arguments;
            e = S.global.setTimeout(function() {
                b.apply(d, g)
            }, c)
        }
    };
    S.O.Kv = function(b, c, d) {
        function e() {
            g = S.global.setTimeout(f, c);
            b.apply(d, k)
        }

        function f() {
            g = 0;
            h && (h = !1, e())
        }
        var g = 0,
            h = !1,
            k = [];
        return function(b) {
            k = arguments;
            g ? h = !0 : e()
        }
    };
    S.O.xu = function(b, c, d) {
        function e() {
            f = 0
        }
        var f = 0;
        return function(g) {
            f || (f = S.global.setTimeout(e, c), b.apply(d, arguments))
        }
    };
    S.f = {};
    S.f.ed = !1;
    S.f.Ei = !1;
    S.f.mf = {
        Ze: "\u00a0"
    };
    S.f.startsWith = function(b, c) {
        return 0 == b.lastIndexOf(c, 0)
    };
    S.f.endsWith = function(b, c) {
        var d = b.length - c.length;
        return 0 <= d && b.indexOf(c, d) == d
    };
    S.f.qd = function(b, c) {
        return 0 == S.f.xf(c, b.substr(0, c.length))
    };
    S.f.vr = function(b, c) {
        return 0 == S.f.xf(c, b.substr(b.length - c.length, c.length))
    };
    S.f.wr = function(b, c) {
        return b.toLowerCase() == c.toLowerCase()
    };
    S.f.Iv = function(b, c) {
        for (var d = b.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < d.length;) e += d.shift() + f.shift();
        return e + d.join("%s")
    };
    S.f.Cr = function(b) {
        return b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
    };
    S.f.Vd = function(b) {
        return /^[\s\xa0]*$/.test(b)
    };
    S.f.xt = function(b) {
        return 0 == b.length
    };
    S.f.Db = S.f.Vd;
    S.f.Wk = function(b) {
        return S.f.Vd(S.f.Il(b))
    };
    S.f.wt = S.f.Wk;
    S.f.rt = function(b) {
        return !/[^\t\n\r ]/.test(b)
    };
    S.f.nt = function(b) {
        return !/[^a-zA-Z]/.test(b)
    };
    S.f.Jt = function(b) {
        return !/[^0-9]/.test(b)
    };
    S.f.ot = function(b) {
        return !/[^a-zA-Z0-9]/.test(b)
    };
    S.f.Pt = function(b) {
        return " " == b
    };
    S.f.Qt = function(b) {
        return 1 == b.length && " " <= b && "~" >= b || "\u0080" <= b && "\ufffd" >= b
    };
    S.f.Gv = function(b) {
        return b.replace(/(\r\n|\r|\n)+/g, " ")
    };
    S.f.Jj = function(b) {
        return b.replace(/(\r\n|\r|\n)/g, "\n")
    };
    S.f.ku = function(b) {
        return b.replace(/\xa0|\s/g, " ")
    };
    S.f.ju = function(b) {
        return b.replace(/\xa0|[ \t]+/g, " ")
    };
    S.f.Br = function(b) {
        return b.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
    S.f.trim = S.ld && String.prototype.trim ? function(b) {
        return b.trim()
    } : function(b) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(b)[1]
    };
    S.f.trimLeft = function(b) {
        return b.replace(/^[\s\xa0]+/, "")
    };
    S.f.trimRight = function(b) {
        return b.replace(/[\s\xa0]+$/, "")
    };
    S.f.xf = function(b, c) {
        b = String(b).toLowerCase();
        c = String(c).toLowerCase();
        return b < c ? -1 : b == c ? 0 : 1
    };
    S.f.rh = function(b, c, d) {
        if (b == c) return 0;
        if (!b) return -1;
        if (!c) return 1;
        for (var e = b.toLowerCase().match(d), f = c.toLowerCase().match(d), g = Math.min(e.length, f.length), h = 0; h < g; h++) {
            d = e[h];
            var k = f[h];
            if (d != k) return b = parseInt(d, 10), !isNaN(b) && (c = parseInt(k, 10), !isNaN(c) && b - c) ? b - c : d < k ? -1 : 1
        }
        return e.length != f.length ? e.length - f.length : b < c ? -1 : 1
    };
    S.f.kt = function(b, c) {
        return S.f.rh(b, c, /\d+|\D+/g)
    };
    S.f.pk = function(b, c) {
        return S.f.rh(b, c, /\d+|\.\d+|\D+/g)
    };
    S.f.nu = S.f.pk;
    S.f.Yv = function(b) {
        return encodeURIComponent(String(b))
    };
    S.f.Xv = function(b) {
        return decodeURIComponent(b.replace(/\+/g, " "))
    };
    S.f.ph = function(b, c) {
        return b.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>")
    };
    S.f.Da = function(b, c) {
        if (c) b = b.replace(S.f.ze, "&amp;").replace(S.f.Ye, "&lt;").replace(S.f.Ve, "&gt;").replace(S.f.ff, "&quot;").replace(S.f.hf, "&#39;").replace(S.f.$e, "&#0;"), S.f.ed && (b = b.replace(S.f.Re, "&#101;"));
        else {
            if (!S.f.ai.test(b)) return b; - 1 != b.indexOf("&") && (b = b.replace(S.f.ze, "&amp;")); - 1 != b.indexOf("<") && (b = b.replace(S.f.Ye, "&lt;")); - 1 != b.indexOf(">") && (b = b.replace(S.f.Ve, "&gt;")); - 1 != b.indexOf('"') && (b = b.replace(S.f.ff, "&quot;")); - 1 != b.indexOf("'") && (b = b.replace(S.f.hf, "&#39;")); - 1 != b.indexOf("\x00") &&
                (b = b.replace(S.f.$e, "&#0;"));
            S.f.ed && -1 != b.indexOf("e") && (b = b.replace(S.f.Re, "&#101;"))
        }
        return b
    };
    S.f.ze = /&/g;
    S.f.Ye = /</g;
    S.f.Ve = />/g;
    S.f.ff = /"/g;
    S.f.hf = /'/g;
    S.f.$e = /\x00/g;
    S.f.Re = /e/g;
    S.f.ai = S.f.ed ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
    S.f.Th = function(b) {
        return S.f.contains(b, "&") ? !S.f.Ei && "document" in S.global ? S.f.Uh(b) : S.f.Hm(b) : b
    };
    S.f.Uv = function(b, c) {
        return S.f.contains(b, "&") ? S.f.Uh(b, c) : b
    };
    S.f.Uh = function(b, c) {
        var d = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var e = c ? c.createElement("div") : S.global.document.createElement("div");
        return b.replace(S.f.Ii, function(b, c) {
            var f = d[b];
            if (f) return f;
            "#" == c.charAt(0) && (c = Number("0" + c.substr(1)), isNaN(c) || (f = String.fromCharCode(c)));
            f || (e.innerHTML = b + " ", f = e.firstChild.nodeValue.slice(0, -1));
            return d[b] = f
        })
    };
    S.f.Hm = function(b) {
        return b.replace(/&([^;]+);/g, function(b, d) {
            switch (d) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != d.charAt(0) || (d = Number("0" + d.substr(1)), isNaN(d)) ? b : String.fromCharCode(d)
            }
        })
    };
    S.f.Ii = /&([^;\s<&]+);?/g;
    S.f.Qm = function(b) {
        return S.f.ph(b.replace(/  /g, " &#160;"), void 0)
    };
    S.f.tu = function(b) {
        return b.replace(/(^|[\n ]) /g, "$1" + S.f.mf.Ze)
    };
    S.f.Hv = function(b, c) {
        for (var d = c.length, e = 0; e < d; e++) {
            var f = 1 == d ? c : c.charAt(e);
            if (b.charAt(0) == f && b.charAt(b.length - 1) == f) return b.substring(1, b.length - 1)
        }
        return b
    };
    S.f.truncate = function(b, c, d) {
        d && (b = S.f.Th(b));
        b.length > c && (b = b.substring(0, c - 3) + "...");
        d && (b = S.f.Da(b));
        return b
    };
    S.f.Sv = function(b, c, d, e) {
        d && (b = S.f.Th(b));
        e && b.length > c ? (e > c && (e = c), b = b.substring(0, c - e) + "..." + b.substring(b.length - e)) : b.length > c && (e = Math.floor(c / 2), b = b.substring(0, e + c % 2) + "..." + b.substring(b.length - e));
        d && (b = S.f.Da(b));
        return b
    };
    S.f.qe = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "<"
    };
    S.f.Fc = {
        "'": "\\'"
    };
    S.f.quote = function(b) {
        b = String(b);
        for (var c = ['"'], d = 0; d < b.length; d++) {
            var e = b.charAt(d),
                f = e.charCodeAt(0);
            c[d + 1] = S.f.qe[e] || (31 < f && 127 > f ? e : S.f.Mf(e))
        }
        c.push('"');
        return c.join("")
    };
    S.f.ks = function(b) {
        for (var c = [], d = 0; d < b.length; d++) c[d] = S.f.Mf(b.charAt(d));
        return c.join("")
    };
    S.f.Mf = function(b) {
        if (b in S.f.Fc) return S.f.Fc[b];
        if (b in S.f.qe) return S.f.Fc[b] = S.f.qe[b];
        var c = b.charCodeAt(0);
        if (31 < c && 127 > c) var d = b;
        else {
            if (256 > c) {
                if (d = "\\x", 16 > c || 256 < c) d += "0"
            } else d = "\\u", 4096 > c && (d += "0");
            d += c.toString(16).toUpperCase()
        }
        return S.f.Fc[b] = d
    };
    S.f.contains = function(b, c) {
        return -1 != b.indexOf(c)
    };
    S.f.yf = function(b, c) {
        return S.f.contains(b.toLowerCase(), c.toLowerCase())
    };
    S.f.Jr = function(b, c) {
        return b && c ? b.split(c).length - 1 : 0
    };
    S.f.Ib = L();
    S.f.remove = function(b, c) {
        return b.replace(c, "")
    };
    S.f.Au = function(b, c) {
        c = new RegExp(S.f.ge(c), "g");
        return b.replace(c, "")
    };
    S.f.Gu = function(b, c, d) {
        c = new RegExp(S.f.ge(c), "g");
        return b.replace(c, d.replace(/\$/g, "$$$$"))
    };
    S.f.ge = function(b) {
        return String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    };
    S.f.repeat = String.prototype.repeat ? function(b, c) {
        return b.repeat(c)
    } : function(b, c) {
        return Array(c + 1).join(b)
    };
    S.f.qu = function(b, c, d) {
        b = S.U(d) ? b.toFixed(d) : String(b);
        d = b.indexOf("."); - 1 == d && (d = b.length);
        return S.f.repeat("0", Math.max(0, c - d)) + b
    };
    S.f.Il = function(b) {
        return null == b ? "" : String(b)
    };
    S.f.nr = function(b) {
        return Array.prototype.join.call(arguments, "")
    };
    S.f.Ts = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ S.now()).toString(36)
    };
    S.f.Pb = function(b, c) {
        var d = 0;
        b = S.f.trim(String(b)).split(".");
        c = S.f.trim(String(c)).split(".");
        for (var e = Math.max(b.length, c.length), f = 0; 0 == d && f < e; f++) {
            var g = b[f] || "",
                h = c[f] || "";
            do {
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == g[0].length && 0 == h[0].length) break;
                d = S.f.rd(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || S.f.rd(0 == g[2].length, 0 == h[2].length) || S.f.rd(g[2], h[2]);
                g = g[3];
                h = h[3]
            } while (0 == d)
        }
        return d
    };
    S.f.rd = function(b, c) {
        return b < c ? -1 : b > c ? 1 : 0
    };
    S.f.ct = function(b) {
        for (var c = 0, d = 0; d < b.length; ++d) c = 31 * c + b.charCodeAt(d) >>> 0;
        return c
    };
    S.f.Im = 2147483648 * Math.random() | 0;
    S.f.Sr = function() {
        return "goog_" + S.f.Im++
    };
    S.f.Mv = function(b) {
        var c = Number(b);
        return 0 == c && S.f.Vd(b) ? NaN : c
    };
    S.f.Ct = function(b) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(b)
    };
    S.f.Rt = function(b) {
        return /^([A-Z][a-z]*)+$/.test(b)
    };
    S.f.Lv = function(b) {
        return String(b).replace(/\-([a-z])/g, function(b, d) {
            return d.toUpperCase()
        })
    };
    S.f.Ov = function(b) {
        return String(b).replace(/([A-Z])/g, "-$1").toLowerCase()
    };
    S.f.Pv = function(b, c) {
        c = S.N(c) ? S.f.ge(c) : "\\s";
        return b.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(b, c, f) {
            return c + f.toUpperCase()
        })
    };
    S.f.rr = function(b) {
        return String(b.charAt(0)).toUpperCase() + String(b.substr(1)).toLowerCase()
    };
    S.f.parseInt = function(b) {
        isFinite(b) && (b = String(b));
        return S.N(b) ? /^\s*-?0x/i.test(b) ? parseInt(b, 16) : parseInt(b, 10) : NaN
    };
    S.f.Bv = function(b, c, d) {
        b = b.split(c);
        for (var e = []; 0 < d && b.length;) e.push(b.shift()), d--;
        b.length && e.push(b.join(c));
        return e
    };
    S.f.Ut = function(b, c) {
        if (c) typeof c == F && (c = [c]);
        else return b;
        for (var d = -1, e = 0; e < c.length; e++)
            if ("" != c[e]) {
                var f = b.lastIndexOf(c[e]);
                f > d && (d = f)
            } return -1 == d ? b : b.slice(d + 1)
    };
    S.f.bs = function(b, c) {
        var d = [],
            e = [];
        if (b == c) return 0;
        if (!b.length || !c.length) return Math.max(b.length, c.length);
        for (var f = 0; f < c.length + 1; f++) d[f] = f;
        for (f = 0; f < b.length; f++) {
            e[0] = f + 1;
            for (var g = 0; g < c.length; g++) e[g + 1] = Math.min(e[g] + 1, d[g + 1] + 1, d[g] + Number(b[f] != c[g]));
            for (g = 0; g < d.length; g++) d[g] = e[g]
        }
        return e[c.length]
    };
    S.g = {};
    S.g.userAgent = {};
    S.g.userAgent.D = {};
    S.g.userAgent.D.kg = function() {
        var b = S.g.userAgent.D.Bk();
        return b && (b = b.userAgent) ? b : ""
    };
    S.g.userAgent.D.Bk = function() {
        return S.global.navigator
    };
    S.g.userAgent.D.Wh = S.g.userAgent.D.kg();
    S.g.userAgent.D.wv = function(b) {
        S.g.userAgent.D.Wh = b || S.g.userAgent.D.kg()
    };
    S.g.userAgent.D.Ab = function() {
        return S.g.userAgent.D.Wh
    };
    S.g.userAgent.D.M = function(b) {
        return S.f.contains(S.g.userAgent.D.Ab(), b)
    };
    S.g.userAgent.D.lh = function(b) {
        return S.f.yf(S.g.userAgent.D.Ab(), b)
    };
    S.g.userAgent.D.Of = function(b) {
        for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e; e = c.exec(b);) d.push([e[1], e[2], e[3] || void 0]);
        return d
    };
    S.object = {};
    S.object.is = function(b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    };
    S.object.forEach = function(b, c, d) {
        for (var e in b) c.call(d, b[e], e, b)
    };
    S.object.filter = function(b, c, d) {
        var e = {},
            f;
        for (f in b) c.call(d, b[f], f, b) && (e[f] = b[f]);
        return e
    };
    S.object.map = function(b, c, d) {
        var e = {},
            f;
        for (f in b) e[f] = c.call(d, b[f], f, b);
        return e
    };
    S.object.some = function(b, c, d) {
        for (var e in b)
            if (c.call(d, b[e], e, b)) return !0;
        return !1
    };
    S.object.every = function(b, c, d) {
        for (var e in b)
            if (!c.call(d, b[e], e, b)) return !1;
        return !0
    };
    S.object.Hs = function(b) {
        var c = 0,
            d;
        for (d in b) c++;
        return c
    };
    S.object.Fs = function(b) {
        for (var c in b) return c
    };
    S.object.Gs = function(b) {
        for (var c in b) return b[c]
    };
    S.object.contains = function(b, c) {
        return S.object.Oj(b, c)
    };
    S.object.Xs = function(b) {
        var c = [],
            d = 0,
            e;
        for (e in b) c[d++] = b[e];
        return c
    };
    S.object.ig = function(b) {
        var c = [],
            d = 0,
            e;
        for (e in b) c[d++] = e;
        return c
    };
    S.object.Ws = function(b, c) {
        var d = S.Zb(c),
            e = d ? c : arguments;
        for (d = d ? 0 : 1; d < e.length; d++) {
            if (null == b) return;
            b = b[e[d]]
        }
        return b
    };
    S.object.Nj = function(b, c) {
        return null !== b && c in b
    };
    S.object.Oj = function(b, c) {
        for (var d in b)
            if (b[d] == c) return !0;
        return !1
    };
    S.object.mk = function(b, c, d) {
        for (var e in b)
            if (c.call(d, b[e], e, b)) return e
    };
    S.object.os = function(b, c, d) {
        return (c = S.object.mk(b, c, d)) && b[c]
    };
    S.object.Db = function(b) {
        for (var c in b) return !1;
        return !0
    };
    S.object.clear = function(b) {
        for (var c in b) delete b[c]
    };
    S.object.remove = function(b, c) {
        var d;
        (d = c in b) && delete b[c];
        return d
    };
    S.object.add = function(b, c, d) {
        if (null !== b && c in b) throw Error('The object already contains the key "' + c + '"');
        S.object.set(b, c, d)
    };
    S.object.get = function(b, c, d) {
        return null !== b && c in b ? b[c] : d
    };
    S.object.set = function(b, c, d) {
        b[c] = d
    };
    S.object.fv = function(b, c, d) {
        return c in b ? b[c] : b[c] = d
    };
    S.object.yv = function(b, c, d) {
        if (c in b) return b[c];
        d = d();
        return b[c] = d
    };
    S.object.Ub = function(b, c) {
        for (var d in b)
            if (!(d in c) || b[d] !== c[d]) return !1;
        for (d in c)
            if (!(d in b)) return !1;
        return !0
    };
    S.object.clone = function(b) {
        var c = {},
            d;
        for (d in b) c[d] = b[d];
        return c
    };
    S.object.Jm = function(b) {
        var c = S.ea(b);
        if (c == C || c == r) {
            if (S.wa(b.clone)) return b.clone();
            c = c == r ? [] : {};
            for (var d in b) c[d] = S.object.Jm(b[d]);
            return c
        }
        return b
    };
    S.object.Rv = function(b) {
        var c = {},
            d;
        for (d in b) c[b[d]] = d;
        return c
    };
    S.object.ef = ["constructor", y, "isPrototypeOf", E, H, "toString", "valueOf"];
    S.object.extend = function(b, c) {
        for (var d, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (d in e) b[d] = e[d];
            for (var g = 0; g < S.object.ef.length; g++) d = S.object.ef[g], Object.prototype.hasOwnProperty.call(e, d) && (b[d] = e[d])
        }
    };
    S.object.create = function(b) {
        var c = arguments.length;
        if (1 == c && S.isArray(arguments[0])) return S.object.create.apply(null, arguments[0]);
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = {}, e = 0; e < c; e += 2) d[arguments[e]] = arguments[e + 1];
        return d
    };
    S.object.Rj = function(b) {
        var c = arguments.length;
        if (1 == c && S.isArray(arguments[0])) return S.object.Rj.apply(null, arguments[0]);
        for (var d = {}, e = 0; e < c; e++) d[arguments[e]] = !0;
        return d
    };
    S.object.Lr = function(b) {
        var c = b;
        Object.isFrozen && !Object.isFrozen(b) && (c = Object.create(b), Object.freeze(c));
        return c
    };
    S.object.zt = function(b) {
        return !!Object.isFrozen && Object.isFrozen(b)
    };
    S.object.Es = function(b, c, d) {
        if (!b) return [];
        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return S.object.ig(b);
        for (var e = {}; b && (b !== Object.prototype || c) && (b !== Function.prototype || d);) {
            for (var f = Object.getOwnPropertyNames(b), g = 0; g < f.length; g++) e[f[g]] = !0;
            b = Object.getPrototypeOf(b)
        }
        return S.object.ig(e)
    };
    S.g.userAgent.C = {};
    S.g.userAgent.C.jh = function() {
        return S.g.userAgent.D.M("Opera")
    };
    S.g.userAgent.C.Kl = function() {
        return S.g.userAgent.D.M("Trident") || S.g.userAgent.D.M("MSIE")
    };
    S.g.userAgent.C.ce = function() {
        return S.g.userAgent.D.M("Edge")
    };
    S.g.userAgent.C.ee = function() {
        return S.g.userAgent.D.M("Firefox") || S.g.userAgent.D.M("FxiOS")
    };
    S.g.userAgent.C.kh = function() {
        return S.g.userAgent.D.M("Safari") && !(S.g.userAgent.C.ae() || S.g.userAgent.C.be() || S.g.userAgent.C.jh() || S.g.userAgent.C.ce() || S.g.userAgent.C.ee() || S.g.userAgent.C.$g() || S.g.userAgent.D.M("Android"))
    };
    S.g.userAgent.C.be = function() {
        return S.g.userAgent.D.M("Coast")
    };
    S.g.userAgent.C.Ll = function() {
        return (S.g.userAgent.D.M("iPad") || S.g.userAgent.D.M("iPhone")) && !S.g.userAgent.C.kh() && !S.g.userAgent.C.ae() && !S.g.userAgent.C.be() && !S.g.userAgent.C.ee() && S.g.userAgent.D.M("AppleWebKit")
    };
    S.g.userAgent.C.ae = function() {
        return (S.g.userAgent.D.M("Chrome") || S.g.userAgent.D.M("CriOS")) && !S.g.userAgent.C.ce()
    };
    S.g.userAgent.C.Jl = function() {
        return S.g.userAgent.D.M("Android") && !(S.g.userAgent.C.Mg() || S.g.userAgent.C.Xk() || S.g.userAgent.C.Zd() || S.g.userAgent.C.$g())
    };
    S.g.userAgent.C.Zd = S.g.userAgent.C.jh;
    S.g.userAgent.C.Ec = S.g.userAgent.C.Kl;
    S.g.userAgent.C.ab = S.g.userAgent.C.ce;
    S.g.userAgent.C.Xk = S.g.userAgent.C.ee;
    S.g.userAgent.C.Nt = S.g.userAgent.C.kh;
    S.g.userAgent.C.tt = S.g.userAgent.C.be;
    S.g.userAgent.C.Bt = S.g.userAgent.C.Ll;
    S.g.userAgent.C.Mg = S.g.userAgent.C.ae;
    S.g.userAgent.C.qt = S.g.userAgent.C.Jl;
    S.g.userAgent.C.$g = function() {
        return S.g.userAgent.D.M("Silk")
    };
    S.g.userAgent.C.Xb = function() {
        function b(b) {
            b = S.h.find(b, e);
            return d[b] || ""
        }
        var c = S.g.userAgent.D.Ab();
        if (S.g.userAgent.C.Ec()) return S.g.userAgent.C.Ak(c);
        c = S.g.userAgent.D.Of(c);
        var d = {};
        S.h.forEach(c, function(b) {
            d[b[0]] = b[1]
        });
        var e = S.pb(S.object.Nj, d);
        return S.g.userAgent.C.Zd() ? b(["Version", "Opera"]) : S.g.userAgent.C.ab() ? b(["Edge"]) : S.g.userAgent.C.Mg() ? b(["Chrome", "CriOS"]) : (c = c[2]) && c[1] || ""
    };
    S.g.userAgent.C.Fa = function(b) {
        return 0 <= S.f.Pb(S.g.userAgent.C.Xb(), b)
    };
    S.g.userAgent.C.Ak = function(b) {
        var c = /rv: *([\d\.]*)/.exec(b);
        if (c && c[1]) return c[1];
        c = "";
        var d = /MSIE +([\d\.]+)/.exec(b);
        if (d && d[1])
            if (b = /Trident\/(\d.\d)/.exec(b), "7.0" == d[1])
                if (b && b[1]) switch (b[1]) {
                    case "4.0":
                        c = "8.0";
                        break;
                    case "5.0":
                        c = "9.0";
                        break;
                    case "6.0":
                        c = "10.0";
                        break;
                    case "7.0":
                        c = "11.0"
                } else c = "7.0";
                else c = d[1];
        return c
    };
    S.g.userAgent.W = {};
    S.g.userAgent.W.hl = function() {
        return S.g.userAgent.D.M("Presto")
    };
    S.g.userAgent.W.kl = function() {
        return S.g.userAgent.D.M("Trident") || S.g.userAgent.D.M("MSIE")
    };
    S.g.userAgent.W.ab = function() {
        return S.g.userAgent.D.M("Edge")
    };
    S.g.userAgent.W.bh = function() {
        return S.g.userAgent.D.lh("WebKit") && !S.g.userAgent.W.ab()
    };
    S.g.userAgent.W.Yk = function() {
        return S.g.userAgent.D.M("Gecko") && !S.g.userAgent.W.bh() && !S.g.userAgent.W.kl() && !S.g.userAgent.W.ab()
    };
    S.g.userAgent.W.Xb = function() {
        var b = S.g.userAgent.D.Ab();
        if (b) {
            b = S.g.userAgent.D.Of(b);
            var c = S.g.userAgent.W.yk(b);
            if (c) return "Gecko" == c[0] ? S.g.userAgent.W.Jk(b) : c[1];
            b = b[0];
            var d;
            if (b && (d = b[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) return d[1]
        }
        return ""
    };
    S.g.userAgent.W.yk = function(b) {
        if (!S.g.userAgent.W.ab()) return b[1];
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            if ("Edge" == d[0]) return d
        }
    };
    S.g.userAgent.W.Fa = function(b) {
        return 0 <= S.f.Pb(S.g.userAgent.W.Xb(), b)
    };
    S.g.userAgent.W.Jk = function(b) {
        return (b = S.h.find(b, function(b) {
            return "Firefox" == b[0]
        })) && b[1] || ""
    };
    S.async.Ph = function(b) {
        S.global.setTimeout(function() {
            throw b;
        }, 0)
    };
    S.async.ya = function(b, c, d) {
        var e = b;
        c && (e = S.bind(b, c));
        e = S.async.ya.Xh(e);
        S.wa(S.global.setImmediate) && (d || S.async.ya.Nm()) ? S.global.setImmediate(e) : (S.async.ya.Dh || (S.async.ya.Dh = S.async.ya.Gk()), S.async.ya.Dh(e))
    };
    S.async.ya.Nm = function() {
        return S.global.Window && S.global.Window.prototype && !S.g.userAgent.C.ab() && S.global.Window.prototype.setImmediate == S.global.setImmediate ? !1 : !0
    };
    S.async.ya.Gk = function() {
        var b = S.global.MessageChannel;
        "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && !S.g.userAgent.W.hl() && (b = function() {
            var b = document.createElement("IFRAME");
            b.style.display = "none";
            b.src = "";
            document.documentElement.appendChild(b);
            var c = b.contentWindow;
            b = c.document;
            b.open();
            b.write("");
            b.close();
            var d = "callImmediate" + Math.random(),
                e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host;
            b = S.bind(function(b) {
                if (("*" ==
                        e || b.origin == e) && b.data == d) this.port1.onmessage()
            }, this);
            c.addEventListener("message", b, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    c.postMessage(d, e)
                }
            }
        });
        if ("undefined" !== typeof b && !S.g.userAgent.C.Ec()) {
            var c = new b,
                d = {},
                e = d;
            c.port1.onmessage = function() {
                if (S.U(d.next)) {
                    d = d.next;
                    var b = d.zf;
                    d.zf = null;
                    b()
                }
            };
            return function(b) {
                e.next = {
                    zf: b
                };
                e = e.next;
                c.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement(n) ? function(b) {
            var c = document.createElement(n);
            c.onreadystatechange = function() {
                c.onreadystatechange = null;
                c.parentNode.removeChild(c);
                c = null;
                b();
                b = null
            };
            document.documentElement.appendChild(c)
        } : function(b) {
            S.global.setTimeout(b, 0)
        }
    };
    S.async.ya.Xh = S.O.Sk;
    S.debug.aa.register(function(b) {
        S.async.ya.Xh = b
    });
    S.async.Ma = function() {
        this.Zc = this.Kb = null
    };
    S.async.Ma.dd = 100;
    S.async.Ma.Wb = new S.async.jc(function() {
        return new S.async.md
    }, function(b) {
        b.reset()
    }, S.async.Ma.dd);
    S.async.Ma.prototype.add = function(b, c) {
        var d = S.async.Ma.Wb.get();
        d.set(b, c);
        this.Zc ? this.Zc.next = d : this.Kb = d;
        this.Zc = d
    };
    S.async.Ma.prototype.remove = function() {
        var b = null;
        this.Kb && (b = this.Kb, this.Kb = this.Kb.next, this.Kb || (this.Zc = null), b.next = null);
        return b
    };
    S.async.md = function() {
        this.next = this.scope = this.Bd = null
    };
    S.async.md.prototype.set = function(b, c) {
        this.Bd = b;
        this.scope = c;
        this.next = null
    };
    S.async.md.prototype.reset = function() {
        this.next = this.scope = this.Bd = null
    };
    S.ei = !1;
    S.async.R = function(b, c) {
        S.async.R.Sc || S.async.R.Tk();
        S.async.R.Yc || (S.async.R.Sc(), S.async.R.Yc = !0);
        S.async.R.ye.add(b, c)
    };
    S.async.R.Tk = function() {
        if (S.ei || S.global.Promise && S.global.Promise.resolve) {
            var b = S.global.Promise.resolve(void 0);
            S.async.R.Sc = function() {
                b.then(S.async.R.Nc)
            }
        } else S.async.R.Sc = function() {
            S.async.ya(S.async.R.Nc)
        }
    };
    S.async.R.qs = function(b) {
        S.async.R.Sc = function() {
            S.async.ya(S.async.R.Nc);
            b && b(S.async.R.Nc)
        }
    };
    S.async.R.Yc = !1;
    S.async.R.ye = new S.async.Ma;
    S.Z && (S.async.R.Ku = function() {
        S.async.R.Yc = !1;
        S.async.R.ye = new S.async.Ma
    });
    S.async.R.Nc = function() {
        for (var b; b = S.async.R.ye.remove();) {
            try {
                b.Bd.call(b.scope)
            } catch (c) {
                S.async.Ph(c)
            }
            S.async.Ma.Wb.put(b)
        }
        S.async.R.Yc = !1
    };
    S.a.u = {};
    S.a.u.Xq = M();
    S.a.u.nd = L();
    S.a.u.Nq = M();
    S.a.u.tj = function(b) {
        return S.a.u.nd(b)
    };
    S.a.u.Tq = M();
    S.a.u.Sq = M();
    S.a.u.Oq = M();
    S.a.u.Wq = M();
    S.a.u.vj = function(b) {
        return S.a.u.nd(b)
    };
    S.a.u.Pq = M();
    S.a.u.uj = function(b) {
        return S.a.u.nd(b)
    };
    S.a.u.Qq = M();
    S.a.u.Rq = M();
    S.a.u.Uq = M();
    S.a.u.Vq = M();
    S.a.u.Vr = function(b) {
        return S.qa(b) ? b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b) : void 0 === b ? "undefined" : null === b ? "null" : typeof b
    };
    S.a.u.Ac = function(b) {
        return (b = b && b.ownerDocument) && (b.defaultView || b.parentWindow) || S.global
    };
    S.g.userAgent.platform = {};
    S.g.userAgent.platform.Lg = function() {
        return S.g.userAgent.D.M("Android")
    };
    S.g.userAgent.platform.Wg = function() {
        return S.g.userAgent.D.M("iPod")
    };
    S.g.userAgent.platform.Vg = function() {
        return S.g.userAgent.D.M("iPhone") && !S.g.userAgent.D.M("iPod") && !S.g.userAgent.D.M("iPad")
    };
    S.g.userAgent.platform.Ug = function() {
        return S.g.userAgent.D.M("iPad")
    };
    S.g.userAgent.platform.Tg = function() {
        return S.g.userAgent.platform.Vg() || S.g.userAgent.platform.Ug() || S.g.userAgent.platform.Wg()
    };
    S.g.userAgent.platform.Xg = function() {
        return S.g.userAgent.D.M("Macintosh")
    };
    S.g.userAgent.platform.cl = function() {
        return S.g.userAgent.D.M("Linux")
    };
    S.g.userAgent.platform.eh = function() {
        return S.g.userAgent.D.M("Windows")
    };
    S.g.userAgent.platform.Ng = function() {
        return S.g.userAgent.D.M("CrOS")
    };
    S.g.userAgent.platform.st = function() {
        return S.g.userAgent.D.M("CrKey")
    };
    S.g.userAgent.platform.al = function() {
        return S.g.userAgent.D.lh("KaiOS")
    };
    S.g.userAgent.platform.Xb = function() {
        var b = S.g.userAgent.D.Ab(),
            c = "";
        S.g.userAgent.platform.eh() ? (c = /Windows (?:NT|Phone) ([0-9.]+)/, c = (b = c.exec(b)) ? b[1] : "0.0") : S.g.userAgent.platform.Tg() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, c = (b = c.exec(b)) && b[1].replace(/_/g, ".")) : S.g.userAgent.platform.Xg() ? (c = /Mac OS X ([0-9_.]+)/, c = (b = c.exec(b)) ? b[1].replace(/_/g, ".") : "10") : S.g.userAgent.platform.Lg() ? (c = /Android\s+([^\);]+)(\)|;)/, c = (b = c.exec(b)) && b[1]) : S.g.userAgent.platform.Ng() && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
            c = (b = c.exec(b)) && b[1]);
        return c || ""
    };
    S.g.userAgent.platform.Fa = function(b) {
        return 0 <= S.f.Pb(S.g.userAgent.platform.Xb(), b)
    };
    S.Pa = {};
    S.Pa.object = function(b, c) {
        return c
    };
    S.Pa.pe = function(b) {
        S.Pa.pe[" "](b);
        return b
    };
    S.Pa.pe[" "] = S.ob;
    S.Pa.pr = function(b, c) {
        try {
            return S.Pa.pe(b[c]), !0
        } catch (d) {}
        return !1
    };
    S.Pa.cache = function(b, c, d, e) {
        e = e ? e(c) : c;
        return Object.prototype.hasOwnProperty.call(b, e) ? b[e] : b[e] = d(c)
    };
    S.userAgent = {};
    S.userAgent.De = !1;
    S.userAgent.Be = !1;
    S.userAgent.Ce = !1;
    S.userAgent.Ie = !1;
    S.userAgent.cd = !1;
    S.userAgent.Ge = !1;
    S.userAgent.bi = !1;
    S.userAgent.Lb = S.userAgent.De || S.userAgent.Be || S.userAgent.Ce || S.userAgent.cd || S.userAgent.Ie || S.userAgent.Ge;
    S.userAgent.Ik = function() {
        return S.g.userAgent.D.Ab()
    };
    S.userAgent.Nd = function() {
        return S.global.navigator || null
    };
    S.userAgent.Ps = function() {
        return S.userAgent.Nd()
    };
    S.userAgent.cf = S.userAgent.Lb ? S.userAgent.Ge : S.g.userAgent.C.Zd();
    S.userAgent.$ = S.userAgent.Lb ? S.userAgent.De : S.g.userAgent.C.Ec();
    S.userAgent.Pe = S.userAgent.Lb ? S.userAgent.Be : S.g.userAgent.W.ab();
    S.userAgent.Yn = S.userAgent.Pe || S.userAgent.$;
    S.userAgent.gd = S.userAgent.Lb ? S.userAgent.Ce : S.g.userAgent.W.Yk();
    S.userAgent.Nb = S.userAgent.Lb ? S.userAgent.Ie || S.userAgent.cd : S.g.userAgent.W.bh();
    S.userAgent.fl = function() {
        return S.userAgent.Nb && S.g.userAgent.D.M("Mobile")
    };
    S.userAgent.np = S.userAgent.cd || S.userAgent.fl();
    S.userAgent.Lp = S.userAgent.Nb;
    S.userAgent.ak = function() {
        var b = S.userAgent.Nd();
        return b && b.platform || ""
    };
    S.userAgent.Bp = S.userAgent.ak();
    S.userAgent.Fe = !1;
    S.userAgent.Je = !1;
    S.userAgent.Ee = !1;
    S.userAgent.Ke = !1;
    S.userAgent.Ae = !1;
    S.userAgent.ad = !1;
    S.userAgent.$c = !1;
    S.userAgent.bd = !1;
    S.userAgent.di = !1;
    S.userAgent.Ha = S.userAgent.Fe || S.userAgent.Je || S.userAgent.Ee || S.userAgent.Ke || S.userAgent.Ae || S.userAgent.ad || S.userAgent.$c || S.userAgent.bd;
    S.userAgent.ep = S.userAgent.Ha ? S.userAgent.Fe : S.g.userAgent.platform.Xg();
    S.userAgent.yq = S.userAgent.Ha ? S.userAgent.Je : S.g.userAgent.platform.eh();
    S.userAgent.bl = function() {
        return S.g.userAgent.platform.cl() || S.g.userAgent.platform.Ng()
    };
    S.userAgent.bp = S.userAgent.Ha ? S.userAgent.Ee : S.userAgent.bl();
    S.userAgent.ul = function() {
        var b = S.userAgent.Nd();
        return !!b && S.f.contains(b.appVersion || "", "X11")
    };
    S.userAgent.zq = S.userAgent.Ha ? S.userAgent.Ke : S.userAgent.ul();
    S.userAgent.an = S.userAgent.Ha ? S.userAgent.Ae : S.g.userAgent.platform.Lg();
    S.userAgent.Qo = S.userAgent.Ha ? S.userAgent.ad : S.g.userAgent.platform.Vg();
    S.userAgent.Po = S.userAgent.Ha ? S.userAgent.$c : S.g.userAgent.platform.Ug();
    S.userAgent.Ro = S.userAgent.Ha ? S.userAgent.bd : S.g.userAgent.platform.Wg();
    S.userAgent.Oo = S.userAgent.Ha ? S.userAgent.ad || S.userAgent.$c || S.userAgent.bd : S.g.userAgent.platform.Tg();
    S.userAgent.Uo = S.userAgent.Ha ? S.userAgent.di : S.g.userAgent.platform.al();
    S.userAgent.bk = function() {
        var b = "",
            c = S.userAgent.Kk();
        c && (b = c ? c[1] : "");
        return S.userAgent.$ && (c = S.userAgent.ag(), null != c && c > parseFloat(b)) ? String(c) : b
    };
    S.userAgent.Kk = function() {
        var b = S.userAgent.Ik();
        if (S.userAgent.gd) return /rv:([^\);]+)(\)|;)/.exec(b);
        if (S.userAgent.Pe) return /Edge\/([\d\.]+)/.exec(b);
        if (S.userAgent.$) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(b);
        if (S.userAgent.Nb) return /WebKit\/(\S+)/.exec(b);
        if (S.userAgent.cf) return /(?:Version)[ \/]?(\S+)/.exec(b)
    };
    S.userAgent.ag = function() {
        var b = S.global.document;
        return b ? b.documentMode : void 0
    };
    S.userAgent.VERSION = S.userAgent.bk();
    S.userAgent.compare = function(b, c) {
        return S.f.Pb(b, c)
    };
    S.userAgent.ol = {};
    S.userAgent.Fa = function(b) {
        return S.userAgent.bi || S.Pa.cache(S.userAgent.ol, b, function() {
            return 0 <= S.f.Pb(S.userAgent.VERSION, b)
        })
    };
    S.userAgent.St = S.userAgent.Fa;
    S.userAgent.ac = function(b) {
        return Number(S.userAgent.Di) >= b
    };
    S.userAgent.vt = S.userAgent.ac;
    var T;
    var U = S.global.document,
        aa = S.userAgent.ag();
    T = U && S.userAgent.$ ? aa || ("CSS1Compat" == U.compatMode ? parseInt(S.userAgent.VERSION, 10) : 5) : void 0;
    S.userAgent.Di = T;
    S.a.sb = {
        mi: !S.userAgent.$ || S.userAgent.ac(9),
        ni: !S.userAgent.gd && !S.userAgent.$ || S.userAgent.$ && S.userAgent.ac(9) || S.userAgent.gd && S.userAgent.Fa("1.9.1"),
        Me: S.userAgent.$ && !S.userAgent.Fa("9"),
        oi: S.userAgent.$ || S.userAgent.cf || S.userAgent.Nb,
        Ji: S.userAgent.$,
        Yo: S.userAgent.$ && !S.userAgent.ac(9)
    };
    S.a.tags = {};
    S.a.tags.nj = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    S.a.tags.ql = function(b) {
        return !0 === S.a.tags.nj[b]
    };
    S.f.sq = M();
    S.f.H = function(b, c) {
        this.ue = b === S.f.H.Ue && c || "";
        this.dj = S.f.H.kf
    };
    S.f.H.prototype.Ea = !0;
    S.f.H.prototype.pa = O("ue");
    S.f.H.prototype.toString = function() {
        return "Const{" + this.ue + "}"
    };
    S.f.H.w = function(b) {
        if (b instanceof S.f.H && b.constructor === S.f.H && b.dj === S.f.H.kf) return b.ue;
        S.u.ma("expected object of type Const, got '" + b + "'");
        return "type_error:Const"
    };
    S.f.H.from = function(b) {
        return new S.f.H(S.f.H.Ue, b)
    };
    S.f.H.kf = {};
    S.f.H.Ue = {};
    S.f.H.EMPTY = S.f.H.from("");
    S.b = {};
    S.b.P = function() {
        this.Jc = "";
        this.Ui = S.b.P.ga
    };
    S.b.P.prototype.Ea = !0;
    S.b.P.ga = {};
    S.b.P.wc = function(b) {
        b = S.f.H.w(b);
        return 0 === b.length ? S.b.P.EMPTY : S.b.P.Qb(b)
    };
    S.b.P.us = function(b, c) {
        for (var d = [], e = 1; e < arguments.length; e++) d.push(S.b.P.Kh(arguments[e]));
        return S.b.P.Qb("(" + S.f.H.w(b) + ")(" + d.join(", ") + ");")
    };
    S.b.P.ys = function(b) {
        return S.b.P.Qb(S.b.P.Kh(b))
    };
    S.b.P.prototype.pa = O("Jc");
    S.Z && (S.b.P.prototype.toString = function() {
        return "SafeScript{" + this.Jc + "}"
    });
    S.b.P.w = function(b) {
        if (b instanceof S.b.P && b.constructor === S.b.P && b.Ui === S.b.P.ga) return b.Jc;
        S.u.ma("expected object of type SafeScript, got '" + b + a + S.ea(b));
        return "type_error:SafeScript"
    };
    S.b.P.Kh = function(b) {
        return JSON.stringify(b).replace(/</g, "\\x3c")
    };
    S.b.P.Qb = function(b) {
        return (new S.b.P).lb(b)
    };
    S.b.P.prototype.lb = function(b) {
        this.Jc = b;
        return this
    };
    S.b.P.EMPTY = S.b.P.Qb("");
    S.Ca = {};
    S.Ca.url = {};
    S.Ca.url.Pj = function(b) {
        return S.Ca.url.Ag().createObjectURL(b)
    };
    S.Ca.url.Lu = function(b) {
        S.Ca.url.Ag().revokeObjectURL(b)
    };
    S.Ca.url.Ag = function() {
        var b = S.Ca.url.Sf();
        if (null != b) return b;
        throw Error("This browser doesn't seem to support blob URLs");
    };
    S.Ca.url.Sf = function() {
        return S.U(S.global.URL) && S.U(S.global.URL.createObjectURL) ? S.global.URL : S.U(S.global.webkitURL) && S.U(S.global.webkitURL.createObjectURL) ? S.global.webkitURL : S.U(S.global.createObjectURL) ? S.global : null
    };
    S.Ca.url.kr = function() {
        return null != S.Ca.url.Sf()
    };
    S.i = {};
    S.i.j = {};
    S.i.j.Gi = !1;
    S.i.j.Xe = S.i.j.Gi || ("ar" == S.K.substring(0, 2).toLowerCase() || "fa" == S.K.substring(0, 2).toLowerCase() || "he" == S.K.substring(0, 2).toLowerCase() || "iw" == S.K.substring(0, 2).toLowerCase() || "ps" == S.K.substring(0, 2).toLowerCase() || "sd" == S.K.substring(0, 2).toLowerCase() || "ug" == S.K.substring(0, 2).toLowerCase() || "ur" == S.K.substring(0, 2).toLowerCase() || "yi" == S.K.substring(0, 2).toLowerCase()) && (2 == S.K.length || "-" == S.K.substring(2, 3) || "_" == S.K.substring(2, 3)) || 3 <= S.K.length && "ckb" == S.K.substring(0, 3).toLowerCase() &&
        (3 == S.K.length || "-" == S.K.substring(3, 4) || "_" == S.K.substring(3, 4)) || 7 <= S.K.length && ("-" == S.K.substring(2, 3) || "_" == S.K.substring(2, 3)) && ("adlm" == S.K.substring(3, 7).toLowerCase() || "arab" == S.K.substring(3, 7).toLowerCase() || "hebr" == S.K.substring(3, 7).toLowerCase() || "nkoo" == S.K.substring(3, 7).toLowerCase() || "rohg" == S.K.substring(3, 7).toLowerCase() || "thaa" == S.K.substring(3, 7).toLowerCase()) || 8 <= S.K.length && ("-" == S.K.substring(3, 4) || "_" == S.K.substring(3, 4)) && ("adlm" == S.K.substring(4, 8).toLowerCase() || "arab" ==
            S.K.substring(4, 8).toLowerCase() || "hebr" == S.K.substring(4, 8).toLowerCase() || "nkoo" == S.K.substring(4, 8).toLowerCase() || "rohg" == S.K.substring(4, 8).toLowerCase() || "thaa" == S.K.substring(4, 8).toLowerCase());
    S.i.j.wb = {
        Li: "\u202a",
        Qi: "\u202b",
        df: "\u202c",
        Mi: "\u200e",
        Ri: "\u200f"
    };
    S.i.j.T = {
        cb: 1,
        eb: -1,
        Aa: 0
    };
    S.i.j.mc = "right";
    S.i.j.kc = "left";
    S.i.j.Jo = S.i.j.Xe ? S.i.j.kc : S.i.j.mc;
    S.i.j.Io = S.i.j.Xe ? S.i.j.mc : S.i.j.kc;
    S.i.j.Cm = function(b) {
        return typeof b == B ? 0 < b ? S.i.j.T.cb : 0 > b ? S.i.j.T.eb : S.i.j.T.Aa : null == b ? null : b ? S.i.j.T.eb : S.i.j.T.cb
    };
    S.i.j.Eb = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
    S.i.j.Jb = "\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc";
    S.i.j.Qk = /<[^>]*>|&[^;]+;/g;
    S.i.j.bb = function(b, c) {
        return c ? b.replace(S.i.j.Qk, "") : b
    };
    S.i.j.$l = new RegExp("[" + S.i.j.Jb + "]");
    S.i.j.Dl = new RegExp("[" + S.i.j.Eb + "]");
    S.i.j.Qd = function(b, c) {
        return S.i.j.$l.test(S.i.j.bb(b, c))
    };
    S.i.j.at = S.i.j.Qd;
    S.i.j.Dg = function(b) {
        return S.i.j.Dl.test(S.i.j.bb(b, void 0))
    };
    S.i.j.Gl = new RegExp("^[" + S.i.j.Eb + "]");
    S.i.j.fm = new RegExp("^[" + S.i.j.Jb + "]");
    S.i.j.il = function(b) {
        return S.i.j.fm.test(b)
    };
    S.i.j.dl = function(b) {
        return S.i.j.Gl.test(b)
    };
    S.i.j.Gt = function(b) {
        return !S.i.j.dl(b) && !S.i.j.il(b)
    };
    S.i.j.El = new RegExp("^[^" + S.i.j.Jb + "]*[" + S.i.j.Eb + "]");
    S.i.j.cm = new RegExp("^[^" + S.i.j.Eb + "]*[" + S.i.j.Jb + "]");
    S.i.j.Ih = function(b, c) {
        return S.i.j.cm.test(S.i.j.bb(b, c))
    };
    S.i.j.Mt = S.i.j.Ih;
    S.i.j.vm = function(b, c) {
        return S.i.j.El.test(S.i.j.bb(b, c))
    };
    S.i.j.Et = S.i.j.vm;
    S.i.j.Zg = /^http:\/\/.*/;
    S.i.j.Ht = function(b, c) {
        b = S.i.j.bb(b, c);
        return S.i.j.Zg.test(b) || !S.i.j.Dg(b) && !S.i.j.Qd(b)
    };
    S.i.j.Fl = new RegExp("[" + S.i.j.Eb + "][^" + S.i.j.Jb + "]*$");
    S.i.j.dm = new RegExp("[" + S.i.j.Jb + "][^" + S.i.j.Eb + "]*$");
    S.i.j.ek = function(b, c) {
        return S.i.j.Fl.test(S.i.j.bb(b, c))
    };
    S.i.j.Dt = S.i.j.ek;
    S.i.j.fk = function(b, c) {
        return S.i.j.dm.test(S.i.j.bb(b, c))
    };
    S.i.j.Kt = S.i.j.fk;
    S.i.j.em = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    S.i.j.Lt = function(b) {
        return S.i.j.em.test(b)
    };
    S.i.j.Ej = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
    S.i.j.$s = function(b, c) {
        c = (void 0 === c ? S.i.j.Qd(b) : c) ? S.i.j.wb.Ri : S.i.j.wb.Mi;
        return b.replace(S.i.j.Ej, c + "$&" + c)
    };
    S.i.j.gs = function(b) {
        return "<" == b.charAt(0) ? b.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + b + "</span>"
    };
    S.i.j.hs = function(b) {
        return S.i.j.wb.Qi + b + S.i.j.wb.df
    };
    S.i.j.ds = function(b) {
        return "<" == b.charAt(0) ? b.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + b + "</span>"
    };
    S.i.j.fs = function(b) {
        return S.i.j.wb.Li + b + S.i.j.wb.df
    };
    S.i.j.ck = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
    S.i.j.vl = /left/gi;
    S.i.j.Zl = /right/gi;
    S.i.j.Am = /%%%%/g;
    S.i.j.$t = function(b) {
        return b.replace(S.i.j.ck, ":$1 $4 $3 $2").replace(S.i.j.vl, "%%%%").replace(S.i.j.Zl, S.i.j.kc).replace(S.i.j.Am, S.i.j.mc)
    };
    S.i.j.dk = /([\u0591-\u05f2])"/g;
    S.i.j.tm = /([\u0591-\u05f2])'/g;
    S.i.j.fu = function(b) {
        return b.replace(S.i.j.dk, "$1\u05f4").replace(S.i.j.tm, "$1\u05f3")
    };
    S.i.j.Rm = /\s+/;
    S.i.j.Pk = /[\d\u06f0-\u06f9]/;
    S.i.j.bm = .4;
    S.i.j.Nf = function(b, c) {
        var d = 0,
            e = 0,
            f = !1;
        b = S.i.j.bb(b, c).split(S.i.j.Rm);
        for (c = 0; c < b.length; c++) {
            var g = b[c];
            S.i.j.Ih(g) ? (d++, e++) : S.i.j.Zg.test(g) ? f = !0 : S.i.j.Dg(g) ? e++ : S.i.j.Pk.test(g) && (f = !0)
        }
        return 0 == e ? f ? S.i.j.T.cb : S.i.j.T.Aa : d / e > S.i.j.bm ? S.i.j.T.eb : S.i.j.T.cb
    };
    S.i.j.Xr = function(b, c) {
        return S.i.j.Nf(b, c) == S.i.j.T.eb
    };
    S.i.j.$u = function(b, c) {
        b && (c = S.i.j.Cm(c)) && (b.style.textAlign = c == S.i.j.T.eb ? S.i.j.mc : S.i.j.kc, b.dir = c == S.i.j.T.eb ? "rtl" : "ltr")
    };
    S.i.j.av = function(b, c) {
        switch (S.i.j.Nf(c)) {
            case S.i.j.T.cb:
                b.dir = "ltr";
                break;
            case S.i.j.T.eb:
                b.dir = "rtl";
                break;
            default:
                b.removeAttribute("dir")
        }
    };
    S.i.j.Xn = M();
    S.b.G = function() {
        this.Mc = "";
        this.fj = S.b.G.ga
    };
    S.b.G.prototype.Ea = !0;
    S.b.G.prototype.pa = O("Mc");
    S.b.G.prototype.Sd = !0;
    S.b.G.prototype.jb = function() {
        return S.i.j.T.cb
    };
    S.Z && (S.b.G.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.Mc + "}"
    });
    S.b.G.w = function(b) {
        if (b instanceof S.b.G && b.constructor === S.b.G && b.fj === S.b.G.ga) return b.Mc;
        S.u.ma("expected object of type TrustedResourceUrl, got '" + b + a + S.ea(b));
        return "type_error:TrustedResourceUrl"
    };
    S.b.G.format = function(b, c) {
        var d = S.f.H.w(b);
        if (!S.b.G.ii.test(d)) throw Error("Invalid TrustedResourceUrl format: " + d);
        b = d.replace(S.b.G.Hi, function(b, f) {
            if (!Object.prototype.hasOwnProperty.call(c, f)) throw Error('Found marker, "' + f + '", in format string, "' + d + '", but no valid label mapping found in args: ' + JSON.stringify(c));
            b = c[f];
            return b instanceof S.f.H ? S.f.H.w(b) : encodeURIComponent(String(b))
        });
        return S.b.G.Tb(b)
    };
    S.b.G.Hi = /%{(\w+)}/g;
    S.b.G.ii = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\]+\/|[^:/\\]*[?#]|about:blank#)/i;
    S.b.G.ij = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    S.b.G.rs = function(b, c, d, e) {
        b = S.b.G.format(b, c);
        b = S.b.G.w(b);
        b = S.b.G.ij.exec(b);
        c = b[3] || "";
        return S.b.G.Tb(b[1] + S.b.G.Jh("?", b[2] || "", d) + S.b.G.Jh("#", c, e))
    };
    S.b.G.wc = function(b) {
        return S.b.G.Tb(S.f.H.w(b))
    };
    S.b.G.vs = function(b) {
        for (var c = "", d = 0; d < b.length; d++) c += S.f.H.w(b[d]);
        return S.b.G.Tb(c)
    };
    S.b.G.ga = {};
    S.b.G.Tb = function(b) {
        var c = new S.b.G;
        c.Mc = b;
        return c
    };
    S.b.G.Jh = function(b, c, d) {
        if (null == d) return c;
        if (S.N(d)) return d ? b + encodeURIComponent(d) : "";
        for (var e in d) {
            var f = d[e];
            f = S.isArray(f) ? f : [f];
            for (var g = 0; g < f.length; g++) {
                var h = f[g];
                null != h && (c || (c = b), c += (c.length > b.length ? "&" : "") + encodeURIComponent(e) + "=" + encodeURIComponent(String(h)))
            }
        }
        return c
    };
    S.b.o = function() {
        this.Oa = "";
        this.Xi = S.b.o.ga
    };
    S.b.o.la = "about:invalid#zClosurez";
    S.b.o.prototype.Ea = !0;
    S.b.o.prototype.pa = O("Oa");
    S.b.o.prototype.Sd = !0;
    S.b.o.prototype.jb = function() {
        return S.i.j.T.cb
    };
    S.Z && (S.b.o.prototype.toString = function() {
        return "SafeUrl{" + this.Oa + "}"
    });
    S.b.o.w = function(b) {
        if (b instanceof S.b.o && b.constructor === S.b.o && b.Xi === S.b.o.ga) return b.Oa;
        S.u.ma("expected object of type SafeUrl, got '" + b + a + S.ea(b));
        return "type_error:SafeUrl"
    };
    S.b.o.wc = function(b) {
        return S.b.o.va(S.f.H.w(b))
    };
    S.b.gf = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))$/i;
    S.b.o.ts = function(b) {
        b = S.b.gf.test(b.type) ? S.Ca.url.Pj(b) : S.b.o.la;
        return S.b.o.va(b)
    };
    S.b.xi = /^data:([^;,]*);base64,[a-z0-9+\/]+=*$/i;
    S.b.o.ws = function(b) {
        b = b.replace(/(%0A|%0D)/g, "");
        var c = b.match(S.b.xi);
        c = c && S.b.gf.test(c[1]);
        return S.b.o.va(c ? b : S.b.o.la)
    };
    S.b.o.Cs = function(b) {
        S.f.qd(b, "tel:") || (b = S.b.o.la);
        return S.b.o.va(b)
    };
    S.b.aj = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
    S.b.o.As = function(b) {
        S.b.aj.test(decodeURIComponent(b)) || (b = S.b.o.la);
        return S.b.o.va(b)
    };
    S.b.o.xs = function(b) {
        S.f.qd(b, "fb-messenger://share") || (b = S.b.o.la);
        return S.b.o.va(b)
    };
    S.b.o.Bs = function(b) {
        S.f.qd(b, "sms:") && S.b.o.jl(b) || (b = S.b.o.la);
        return S.b.o.va(b)
    };
    S.b.o.jl = function(b) {
        var c = b.indexOf("#");
        0 < c && (b = b.substring(0, c));
        c = b.match(/[?&]body=/gi);
        if (!c) return !0;
        if (1 < c.length) return !1;
        b = b.match(/[?&]body=([^&]*)/)[1];
        if (!b) return !0;
        try {
            decodeURIComponent(b)
        } catch (d) {
            return !1
        }
        return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(b)
    };
    S.b.o.Tu = function(b, c) {
        return S.b.o.ke(/^chrome-extension:\/\/([^\/]+)\//, b, c)
    };
    S.b.o.Vu = function(b, c) {
        return S.b.o.ke(/^moz-extension:\/\/([^\/]+)\//, b, c)
    };
    S.b.o.Uu = function(b, c) {
        return S.b.o.ke(/^ms-browser-extension:\/\/([^\/]+)\//, b, c)
    };
    S.b.o.ke = function(b, c, d) {
        (b = b.exec(c)) ? (b = b[1], -1 == (d instanceof S.f.H ? [S.f.H.w(d)] : d.map(function(b) {
            return S.f.H.w(b)
        })).indexOf(b) && (c = S.b.o.la)) : c = S.b.o.la;
        return S.b.o.va(c)
    };
    S.b.o.Ds = function(b) {
        return S.b.o.va(S.b.G.w(b))
    };
    S.b.kd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    S.b.o.Mp = S.b.kd;
    S.b.o.Rc = function(b) {
        if (b instanceof S.b.o) return b;
        b = typeof b == C && b.Ea ? b.pa() : String(b);
        S.b.kd.test(b) || (b = S.b.o.la);
        return S.b.o.va(b)
    };
    S.b.o.za = function(b) {
        if (b instanceof S.b.o) return b;
        b = typeof b == C && b.Ea ? b.pa() : String(b);
        S.b.kd.test(b) || (b = S.b.o.la);
        return S.b.o.va(b)
    };
    S.b.o.ga = {};
    S.b.o.va = function(b) {
        var c = new S.b.o;
        c.Oa = b;
        return c
    };
    S.b.o.Wm = S.b.o.va("about:blank");
    S.b.B = function() {
        this.Lc = "";
        this.Wi = S.b.B.ga
    };
    S.b.B.prototype.Ea = !0;
    S.b.B.ga = {};
    S.b.B.wc = function(b) {
        b = S.f.H.w(b);
        return 0 === b.length ? S.b.B.EMPTY : S.b.B.Rb(b)
    };
    S.b.B.yr = M();
    S.b.B.prototype.pa = O("Lc");
    S.Z && (S.b.B.prototype.toString = function() {
        return "SafeStyle{" + this.Lc + "}"
    });
    S.b.B.w = function(b) {
        if (b instanceof S.b.B && b.constructor === S.b.B && b.Wi === S.b.B.ga) return b.Lc;
        S.u.ma("expected object of type SafeStyle, got '" + b + a + S.ea(b));
        return "type_error:SafeStyle"
    };
    S.b.B.Rb = function(b) {
        return (new S.b.B).lb(b)
    };
    S.b.B.prototype.lb = function(b) {
        this.Lc = b;
        return this
    };
    S.b.B.EMPTY = S.b.B.Rb("");
    S.b.B.la = "zClosurez";
    S.b.B.create = function(b) {
        var c = "",
            d;
        for (d in b) {
            if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
            var e = b[d];
            null != e && (e = S.isArray(e) ? S.h.map(e, S.b.B.yh).join(" ") : S.b.B.yh(e), c += d + ":" + e + ";")
        }
        return c ? S.b.B.Rb(c) : S.b.B.EMPTY
    };
    S.b.B.yh = function(b) {
        return b instanceof S.b.o ? 'url("' + S.b.o.w(b).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")' : b instanceof S.f.H ? S.f.H.w(b) : S.b.B.jm(String(b))
    };
    S.b.B.jm = function(b) {
        var c = b.replace(S.b.B.Te, "$1").replace(S.b.B.Te, "$1").replace(S.b.B.lf, "url");
        if (S.b.B.kj.test(c)) {
            if (S.b.B.ti.test(b)) return S.u.ma("String value disallows comments, got: " + b), S.b.B.la;
            if (!S.b.B.Mk(b)) return S.u.ma("String value requires balanced quotes, got: " + b), S.b.B.la;
            if (!S.b.B.Nk(b)) return S.u.ma("String value requires balanced square brackets and one identifier per pair of brackets, got: " + b), S.b.B.la
        } else return S.u.ma("String value allows only " + S.b.B.pf + " and simple functions, got: " +
            b), S.b.B.la;
        return S.b.B.lm(b)
    };
    S.b.B.Mk = function(b) {
        for (var c = !0, d = !0, e = 0; e < b.length; e++) {
            var f = b.charAt(e);
            "'" == f && d ? c = !c : '"' == f && c && (d = !d)
        }
        return c && d
    };
    S.b.B.Nk = function(b) {
        for (var c = !0, d = /^[-_a-zA-Z0-9]$/, e = 0; e < b.length; e++) {
            var f = b.charAt(e);
            if ("]" == f) {
                if (c) return !1;
                c = !0
            } else if ("[" == f) {
                if (!c) return !1;
                c = !1
            } else if (!c && !d.test(f)) return !1
        }
        return c
    };
    S.b.B.pf = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]";
    S.b.B.kj = new RegExp("^" + S.b.B.pf + "+$");
    S.b.B.lf = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
    S.b.B.Te = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;
    S.b.B.ti = /\/\*/;
    S.b.B.lm = function(b) {
        return b.replace(S.b.B.lf, function(b, d, e, f) {
            var c = "";
            e = e.replace(/^(['"])(.*)\1$/, function(b, d, e) {
                c = d;
                return e
            });
            b = S.b.o.Rc(e).pa();
            return d + c + b + c + f
        })
    };
    S.b.B.concat = function(b) {
        function c(b) {
            S.isArray(b) ? S.h.forEach(b, c) : d += S.b.B.w(b)
        }
        var d = "";
        S.h.forEach(arguments, c);
        return d ? S.b.B.Rb(d) : S.b.B.EMPTY
    };
    S.b.S = function() {
        this.Kc = "";
        this.Vi = S.b.S.ga
    };
    S.b.S.prototype.Ea = !0;
    S.b.S.ga = {};
    S.b.S.Nr = function(b, c) {
        if (S.f.contains(b, "<")) throw Error("Selector does not allow '<', got: " + b);
        var d = b.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(d)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + b);
        if (!S.b.S.Lk(d)) throw Error("() and [] in selector must be balanced, got: " + b);
        c instanceof S.b.B || (c = S.b.B.create(c));
        b = b + "{" + S.b.B.w(c) + "}";
        return S.b.S.Sb(b)
    };
    S.b.S.Lk = function(b) {
        for (var c = {
                "(": ")",
                "[": "]"
            }, d = [], e = 0; e < b.length; e++) {
            var f = b[e];
            if (c[f]) d.push(c[f]);
            else if (S.object.contains(c, f) && d.pop() != f) return !1
        }
        return 0 == d.length
    };
    S.b.S.concat = function(b) {
        function c(b) {
            S.isArray(b) ? S.h.forEach(b, c) : d += S.b.S.w(b)
        }
        var d = "";
        S.h.forEach(arguments, c);
        return S.b.S.Sb(d)
    };
    S.b.S.wc = function(b) {
        b = S.f.H.w(b);
        return 0 === b.length ? S.b.S.EMPTY : S.b.S.Sb(b)
    };
    S.b.S.prototype.pa = O("Kc");
    S.Z && (S.b.S.prototype.toString = function() {
        return "SafeStyleSheet{" + this.Kc + "}"
    });
    S.b.S.w = function(b) {
        if (b instanceof S.b.S && b.constructor === S.b.S && b.Vi === S.b.S.ga) return b.Kc;
        S.u.ma("expected object of type SafeStyleSheet, got '" + b + a + S.ea(b));
        return "type_error:SafeStyleSheet"
    };
    S.b.S.Sb = function(b) {
        return (new S.b.S).lb(b)
    };
    S.b.S.prototype.lb = function(b) {
        this.Kc = b;
        return this
    };
    S.b.S.EMPTY = S.b.S.Sb("");
    S.b.s = function() {
        this.Oa = "";
        this.Ti = S.b.s.ga;
        this.uc = null
    };
    S.b.s.prototype.Sd = !0;
    S.b.s.prototype.jb = O("uc");
    S.b.s.prototype.Ea = !0;
    S.b.s.prototype.pa = O("Oa");
    S.Z && (S.b.s.prototype.toString = function() {
        return "SafeHtml{" + this.Oa + "}"
    });
    S.b.s.w = function(b) {
        if (b instanceof S.b.s && b.constructor === S.b.s && b.Ti === S.b.s.ga) return b.Oa;
        S.u.ma("expected object of type SafeHtml, got '" + b + a + S.ea(b));
        return "type_error:SafeHtml"
    };
    S.b.s.Da = function(b) {
        if (b instanceof S.b.s) return b;
        var c = typeof b == C,
            d = null;
        c && b.Sd && (d = b.jb());
        return S.b.s.Ba(S.f.Da(c && b.Ea ? b.pa() : String(b)), d)
    };
    S.b.s.dt = function(b) {
        if (b instanceof S.b.s) return b;
        b = S.b.s.Da(b);
        return S.b.s.Ba(S.f.ph(S.b.s.w(b)), b.jb())
    };
    S.b.s.ft = function(b) {
        if (b instanceof S.b.s) return b;
        b = S.b.s.Da(b);
        return S.b.s.Ba(S.f.Qm(S.b.s.w(b)), b.jb())
    };
    S.b.s.from = S.b.s.Da;
    S.b.s.nf = /^[a-zA-Z0-9-]+$/;
    S.b.s.hj = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    S.b.s.Pi = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    S.b.s.create = function(b, c, d) {
        S.b.s.Pm(String(b));
        return S.b.s.ib(String(b), c, d)
    };
    S.b.s.Pm = function(b) {
        if (!S.b.s.nf.test(b)) throw Error("Invalid tag name <" + b + ">.");
        if (b.toUpperCase() in S.b.s.Pi) throw Error("Tag name <" + b + "> is not allowed for SafeHtml.");
    };
    S.b.s.Kr = function(b, c, d, e) {
        b && S.b.G.w(b);
        var f = {};
        f.src = b || null;
        f.srcdoc = c && S.b.s.w(c);
        b = S.b.s.sc(f, {
            sandbox: ""
        }, d);
        return S.b.s.ib("iframe", b, e)
    };
    S.b.s.Or = function(b, c, d, e) {
        if (!S.b.s.Hj()) throw Error("The browser does not support sandboxed iframes.");
        var f = {};
        f.src = b ? S.b.o.w(S.b.o.Rc(b)) : null;
        f.srcdoc = c || null;
        f.sandbox = "";
        b = S.b.s.sc(f, {}, d);
        return S.b.s.ib("iframe", b, e)
    };
    S.b.s.Hj = function() {
        return S.global.HTMLIFrameElement && "sandbox" in S.global.HTMLIFrameElement.prototype
    };
    S.b.s.Qr = function(b, c) {
        S.b.G.w(b);
        b = S.b.s.sc({
            src: b
        }, {}, c);
        return S.b.s.ib("script", b)
    };
    S.b.s.Pr = function(b, c) {
        for (var d in c) {
            var e = d.toLowerCase();
            if ("language" == e || "src" == e || "text" == e || "type" == e) throw Error('Cannot set "' + e + '" attribute');
        }
        d = "";
        b = S.h.concat(b);
        for (e = 0; e < b.length; e++) d += S.b.P.w(b[e]);
        b = S.b.s.Ba(d, S.i.j.T.Aa);
        return S.b.s.ib("script", c, b)
    };
    S.b.s.Rr = function(b, c) {
        c = S.b.s.sc({
            type: "text/css"
        }, {}, c);
        var d = "";
        b = S.h.concat(b);
        for (var e = 0; e < b.length; e++) d += S.b.S.w(b[e]);
        b = S.b.s.Ba(d, S.i.j.T.Aa);
        return S.b.s.ib("style", c, b)
    };
    S.b.s.Mr = function(b, c) {
        b = S.b.o.w(S.b.o.Rc(b));
        (S.g.userAgent.C.Ec() || S.g.userAgent.C.ab()) && S.f.contains(b, ";") && (b = "'" + b.replace(/'/g, "%27") + "'");
        return S.b.s.ib("meta", {
            "http-equiv": "refresh",
            content: (c || 0) + "; url=" + b
        })
    };
    S.b.s.rk = function(b, c, d) {
        if (d instanceof S.f.H) d = S.f.H.w(d);
        else if ("style" == c.toLowerCase()) d = S.b.s.Hk(d);
        else {
            if (/^on/i.test(c)) throw Error('Attribute "' + c + '" requires goog.string.Const value, "' + d + '" given.');
            if (c.toLowerCase() in S.b.s.hj)
                if (d instanceof S.b.G) d = S.b.G.w(d);
                else if (d instanceof S.b.o) d = S.b.o.w(d);
            else if (S.N(d)) d = S.b.o.Rc(d).pa();
            else throw Error('Attribute "' + c + '" on tag "' + b + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + d + '" given.');
        }
        d.Ea && (d = d.pa());
        return c + '="' + S.f.Da(String(d)) + '"'
    };
    S.b.s.Hk = function(b) {
        if (!S.qa(b)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof b + " given: " + b);
        b instanceof S.b.B || (b = S.b.B.create(b));
        return S.b.B.w(b)
    };
    S.b.s.Tr = function(b, c, d, e) {
        c = S.b.s.create(c, d, e);
        c.uc = b;
        return c
    };
    S.b.s.concat = function(b) {
        function c(b) {
            S.isArray(b) ? S.h.forEach(b, c) : (b = S.b.s.Da(b), e += S.b.s.w(b), b = b.jb(), d == S.i.j.T.Aa ? d = b : b != S.i.j.T.Aa && d != b && (d = null))
        }
        var d = S.i.j.T.Aa,
            e = "";
        S.h.forEach(arguments, c);
        return S.b.s.Ba(e, d)
    };
    S.b.s.Gr = function(b, c) {
        var d = S.b.s.concat(S.h.slice(arguments, 1));
        d.uc = b;
        return d
    };
    S.b.s.ga = {};
    S.b.s.Ba = function(b, c) {
        return (new S.b.s).lb(b, c)
    };
    S.b.s.prototype.lb = function(b, c) {
        this.Oa = b;
        this.uc = c;
        return this
    };
    S.b.s.ib = function(b, c, d) {
        var e = null;
        var f = "<" + b + S.b.s.xm(b, c);
        S.$a(d) ? S.isArray(d) || (d = [d]) : d = [];
        S.a.tags.ql(b.toLowerCase()) ? f += ">" : (e = S.b.s.concat(d), f += ">" + S.b.s.w(e) + "</" + b + ">", e = e.jb());
        (b = c && c.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? S.i.j.T.Aa : null);
        return S.b.s.Ba(f, e)
    };
    S.b.s.xm = function(b, c) {
        var d = "";
        if (c)
            for (var e in c) {
                if (!S.b.s.nf.test(e)) throw Error('Invalid attribute name "' + e + '".');
                var f = c[e];
                S.$a(f) && (d += " " + S.b.s.rk(b, e, f))
            }
        return d
    };
    S.b.s.sc = function(b, c, d) {
        var e = {},
            f;
        for (f in b) e[f] = b[f];
        for (f in c) e[f] = c[f];
        for (f in d) {
            var g = f.toLowerCase();
            if (g in b) throw Error('Cannot override "' + g + '" attribute, got "' + f + '" with value "' + d[f] + '"');
            g in c && delete e[g];
            e[f] = d[f]
        }
        return e
    };
    S.b.s.Un = S.b.s.Ba("<!DOCTYPE html>", S.i.j.T.Aa);
    S.b.s.EMPTY = S.b.s.Ba("", S.i.j.T.Aa);
    S.b.s.Le = S.b.s.Ba("<br>", S.i.j.T.Aa);
    S.a.L = {};
    S.a.L.To = {
        Zm: "afterbegin",
        $m: "afterend",
        tn: "beforebegin",
        un: "beforeend"
    };
    S.a.L.ht = function(b, c, d) {
        b.insertAdjacentHTML(c, S.b.s.w(d))
    };
    S.a.L.$i = {
        MATH: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    S.a.L.$k = S.O.Gj(function() {
        if (S.Z && "undefined" === typeof document) return !1;
        var b = document.createElement("div");
        b.innerHTML = "<div><div></div></div>";
        if (S.Z && !b.firstChild) return !1;
        var c = b.firstChild.firstChild;
        b.innerHTML = "";
        return !c.parentElement
    });
    S.a.L.Km = function(b, c) {
        if (S.a.L.$k())
            for (; b.lastChild;) b.removeChild(b.lastChild);
        b.innerHTML = c
    };
    S.a.L.Eh = function(b, c) {
        if (S.u.sa && S.a.L.$i[b.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + b.tagName + ".");
        S.a.L.Km(b, S.b.s.w(c))
    };
    S.a.L.pv = function(b, c) {
        b.outerHTML = S.b.s.w(c)
    };
    S.a.L.dv = function(b, c) {
        c = c instanceof S.b.o ? c : S.b.o.za(c);
        S.a.u.uj(b).action = S.b.o.w(c)
    };
    S.a.L.Yu = function(b, c) {
        c = c instanceof S.b.o ? c : S.b.o.za(c);
        S.a.u.tj(b).formAction = S.b.o.w(c)
    };
    S.a.L.kv = function(b, c) {
        c = c instanceof S.b.o ? c : S.b.o.za(c);
        S.a.u.vj(b).formAction = S.b.o.w(c)
    };
    S.a.L.rv = function(b, c) {
        b.style.cssText = S.b.B.w(c)
    };
    S.a.L.$r = function(b, c) {
        b.write(S.b.s.w(c))
    };
    S.a.L.Wu = function(b, c) {
        c = c instanceof S.b.o ? c : S.b.o.za(c);
        b.href = S.b.o.w(c)
    };
    S.a.L.iv = function(b, c) {
        c = c instanceof S.b.o ? c : S.b.o.za(c);
        b.src = S.b.o.w(c)
    };
    S.a.L.Xu = function(b, c) {
        c = c instanceof S.b.o ? c : S.b.o.za(c);
        b.src = S.b.o.w(c)
    };
    S.a.L.xv = function(b, c) {
        c = c instanceof S.b.o ? c : S.b.o.za(c);
        b.src = S.b.o.w(c)
    };
    S.a.L.bv = function(b, c) {
        b.src = S.b.G.w(c)
    };
    S.a.L.ev = function(b, c) {
        b.src = S.b.G.w(c)
    };
    S.a.L.gv = function(b, c) {
        b.src = S.b.G.w(c)
    };
    S.a.L.hv = function(b, c) {
        b.srcdoc = S.b.s.w(c)
    };
    S.a.L.mv = function(b, c, d) {
        b.rel = d;
        S.f.yf(d, "stylesheet") ? b.href = S.b.G.w(c) : b.href = c instanceof S.b.G ? S.b.G.w(c) : c instanceof S.b.o ? S.b.o.w(c) : S.b.o.za(c).pa()
    };
    S.a.L.ov = function(b, c) {
        b.data = S.b.G.w(c)
    };
    S.a.L.qm = function(b, c) {
        b.src = S.b.G.w(c);
        (c = S.xg()) && b.setAttribute("nonce", c)
    };
    S.a.L.qv = function(b, c) {
        b.text = S.b.P.w(c);
        (c = S.xg()) && b.setAttribute("nonce", c)
    };
    S.a.L.nv = function(b, c) {
        c = c instanceof S.b.o ? c : S.b.o.za(c);
        b.href = S.b.o.w(c)
    };
    S.a.L.er = function(b, c) {
        c = c instanceof S.b.o ? c : S.b.o.za(c);
        b.assign(S.b.o.w(c))
    };
    S.a.L.Hu = function(b, c) {
        c = c instanceof S.b.o ? c : S.b.o.za(c);
        b.replace(S.b.o.w(c))
    };
    S.a.L.pu = function(b, c, d, e, f) {
        b = b instanceof S.b.o ? b : S.b.o.za(b);
        return (c || window).open(S.b.o.w(b), d ? S.f.H.w(d) : "", e, f)
    };
    S.b.rb = {};
    S.b.rb.gm = function(b, c) {
        return S.b.s.Ba(c, null)
    };
    S.b.rb.Pu = function(b, c) {
        return S.b.P.Qb(c)
    };
    S.b.rb.Qu = function(b, c) {
        return S.b.B.Rb(c)
    };
    S.b.rb.Ru = function(b, c) {
        return S.b.S.Sb(c)
    };
    S.b.rb.Su = function(b, c) {
        return S.b.o.va(c)
    };
    S.b.rb.Tv = function(b, c) {
        return S.b.G.Tb(c)
    };
    S.A = {};
    S.A.vu = function(b) {
        return Math.floor(Math.random() * b)
    };
    S.A.Vv = function(b, c) {
        return b + Math.random() * (c - b)
    };
    S.A.zr = function(b, c, d) {
        return Math.min(Math.max(b, c), d)
    };
    S.A.nh = function(b, c) {
        b %= c;
        return 0 > b * c ? b + c : b
    };
    S.A.Vt = function(b, c, d) {
        return b + d * (c - b)
    };
    S.A.du = function(b, c, d) {
        return Math.abs(b - c) <= (d || 1E-6)
    };
    S.A.se = function(b) {
        return S.A.nh(b, 360)
    };
    S.A.Ev = function(b) {
        return S.A.nh(b, 2 * Math.PI)
    };
    S.A.Sh = function(b) {
        return b * Math.PI / 180
    };
    S.A.Bm = function(b) {
        return 180 * b / Math.PI
    };
    S.A.Fq = function(b, c) {
        return c * Math.cos(S.A.Sh(b))
    };
    S.A.Gq = function(b, c) {
        return c * Math.sin(S.A.Sh(b))
    };
    S.A.angle = function(b, c, d, e) {
        return S.A.se(S.A.Bm(Math.atan2(e - c, d - b)))
    };
    S.A.Eq = function(b, c) {
        b = S.A.se(c) - S.A.se(b);
        180 < b ? b -= 360 : -180 >= b && (b = 360 + b);
        return b
    };
    S.A.sign = function(b) {
        return 0 < b ? 1 : 0 > b ? -1 : b
    };
    S.A.Yt = function(b, c, d, e) {
        d = d || function(b, c) {
            return b == c
        };
        e = e || function(c) {
            return b[c]
        };
        for (var f = b.length, g = c.length, h = [], k = 0; k < f + 1; k++) h[k] = [], h[k][0] = 0;
        for (var m = 0; m < g + 1; m++) h[0][m] = 0;
        for (k = 1; k <= f; k++)
            for (m = 1; m <= g; m++) d(b[k - 1], c[m - 1]) ? h[k][m] = h[k - 1][m - 1] + 1 : h[k][m] = Math.max(h[k - 1][m], h[k][m - 1]);
        var t = [];
        k = f;
        for (m = g; 0 < k && 0 < m;) d(b[k - 1], c[m - 1]) ? (t.unshift(e(k - 1, m - 1)), k--, m--) : h[k - 1][m] > h[k][m - 1] ? k-- : m--;
        return t
    };
    S.A.ve = function(b) {
        return S.h.reduce(arguments, function(b, d) {
            return b + d
        }, 0)
    };
    S.A.yj = function(b) {
        return S.A.ve.apply(null, arguments) / arguments.length
    };
    S.A.im = function(b) {
        var c = arguments.length;
        if (2 > c) return 0;
        var d = S.A.yj.apply(null, arguments);
        return S.A.ve.apply(null, S.h.map(arguments, function(b) {
            return Math.pow(b - d, 2)
        })) / (c - 1)
    };
    S.A.Fv = function(b) {
        return Math.sqrt(S.A.im.apply(null, arguments))
    };
    S.A.At = function(b) {
        return isFinite(b) && 0 == b % 1
    };
    S.A.yt = function(b) {
        return isFinite(b)
    };
    S.A.Ft = function(b) {
        return 0 == b && 0 > 1 / b
    };
    S.A.Xt = function(b) {
        if (0 < b) {
            var c = Math.round(Math.log(b) * Math.LOG10E);
            return c - (parseFloat("1e" + c) > b ? 1 : 0)
        }
        return 0 == b ? -Infinity : NaN
    };
    S.A.Nu = function(b, c) {
        return Math.floor(b + (c || 2E-15))
    };
    S.A.Mu = function(b, c) {
        return Math.ceil(b - (c || 2E-15))
    };
    S.A.X = function(b, c) {
        this.x = S.U(b) ? b : 0;
        this.y = S.U(c) ? c : 0
    };
    S.A.X.prototype.clone = function() {
        return new S.A.X(this.x, this.y)
    };
    S.Z && (S.A.X.prototype.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    });
    S.A.X.prototype.Ub = function(b) {
        return b instanceof S.A.X && S.A.X.Ub(this, b)
    };
    S.A.X.Ub = function(b, c) {
        return b == c ? !0 : b && c ? b.x == c.x && b.y == c.y : !1
    };
    S.A.X.Zr = function(b, c) {
        var d = b.x - c.x;
        b = b.y - c.y;
        return Math.sqrt(d * d + b * b)
    };
    S.A.X.Zt = function(b) {
        return Math.sqrt(b.x * b.x + b.y * b.y)
    };
    S.A.X.azimuth = function(b) {
        return S.A.angle(0, 0, b.x, b.y)
    };
    S.A.X.Cv = function(b, c) {
        var d = b.x - c.x;
        b = b.y - c.y;
        return d * d + b * b
    };
    S.A.X.Yr = function(b, c) {
        return new S.A.X(b.x - c.x, b.y - c.y)
    };
    S.A.X.ve = function(b, c) {
        return new S.A.X(b.x + c.x, b.y + c.y)
    };
    Q = S.A.X.prototype;
    Q.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Q.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Q.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    Q.translate = function(b, c) {
        b instanceof S.A.X ? (this.x += b.x, this.y += b.y) : (this.x += Number(b), S.bc(c) && (this.y += c));
        return this
    };
    Q.scale = function(b, c) {
        c = S.bc(c) ? c : b;
        this.x *= b;
        this.y *= c;
        return this
    };
    S.A.xb = function(b, c) {
        this.width = b;
        this.height = c
    };
    S.A.xb.Ub = function(b, c) {
        return b == c ? !0 : b && c ? b.width == c.width && b.height == c.height : !1
    };
    S.A.xb.prototype.clone = function() {
        return new S.A.xb(this.width, this.height)
    };
    S.Z && (S.A.xb.prototype.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    });
    Q = S.A.xb.prototype;
    Q.pj = function() {
        return this.width * this.height
    };
    Q.aspectRatio = function() {
        return this.width / this.height
    };
    Q.Db = function() {
        return !this.pj()
    };
    Q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    Q.scale = function(b, c) {
        c = S.bc(c) ? c : b;
        this.width *= b;
        this.height *= c;
        return this
    };
    S.a.gi = !1;
    S.a.He = !1;
    S.a.wi = S.a.gi || S.a.He;
    S.a.Hd = function(b) {
        return b ? new S.a.vb(S.a.Za(b)) : S.a.Yj || (S.a.Yj = new S.a.vb)
    };
    S.a.tk = function() {
        return document
    };
    S.a.Id = function(b) {
        return S.a.Ld(document, b)
    };
    S.a.Ld = function(b, c) {
        return S.N(c) ? b.getElementById(c) : c
    };
    S.a.Ck = function(b) {
        return S.a.vg(document, b)
    };
    S.a.vg = function(b, c) {
        return S.a.Ld(b, c)
    };
    S.a.Yh = S.a.Id;
    S.a.getElementsByTagName = function(b, c) {
        return (c || document).getElementsByTagName(String(b))
    };
    S.a.Md = function(b, c, d) {
        return S.a.xc(document, b, c, d)
    };
    S.a.xk = function(b, c, d) {
        return S.a.Kd(document, b, c, d)
    };
    S.a.eg = function(b, c) {
        var d = c || document;
        return S.a.pd(d) ? d.querySelectorAll("." + b) : S.a.xc(document, "*", b, c)
    };
    S.a.Jd = function(b, c) {
        var d = c || document;
        return (d.getElementsByClassName ? d.getElementsByClassName(b)[0] : S.a.Kd(document, "*", b, c)) || null
    };
    S.a.ug = function(b, c) {
        return S.a.Jd(b, c)
    };
    S.a.pd = function(b) {
        return !(!b.querySelectorAll || !b.querySelector)
    };
    S.a.xc = function(b, c, d, e) {
        b = e || b;
        c = c && "*" != c ? String(c).toUpperCase() : "";
        if (S.a.pd(b) && (c || d)) return b.querySelectorAll(c + (d ? "." + d : ""));
        if (d && b.getElementsByClassName) {
            b = b.getElementsByClassName(d);
            if (c) {
                e = {};
                for (var f = 0, g = 0, h; h = b[g]; g++) c == h.nodeName && (e[f++] = h);
                e.length = f;
                return e
            }
            return b
        }
        b = b.getElementsByTagName(c || "*");
        if (d) {
            e = {};
            for (g = f = 0; h = b[g]; g++) c = h.className, typeof c.split == x && S.h.contains(c.split(/\s+/), d) && (e[f++] = h);
            e.length = f;
            return e
        }
        return b
    };
    S.a.Kd = function(b, c, d, e) {
        var f = e || b,
            g = c && "*" != c ? String(c).toUpperCase() : "";
        return S.a.pd(f) && (g || d) ? f.querySelector(g + (d ? "." + d : "")) : S.a.xc(b, c, d, e)[0] || null
    };
    S.a.Zh = S.a.Md;
    S.a.Uc = function(b, c) {
        S.object.forEach(c, function(c, e) {
            c && typeof c == C && c.Ea && (c = c.pa());
            "style" == e ? b.style.cssText = c : "class" == e ? b.className = c : "for" == e ? b.htmlFor = c : S.a.Oe.hasOwnProperty(e) ? b.setAttribute(S.a.Oe[e], c) : S.f.startsWith(e, "aria-") || S.f.startsWith(e, "data-") ? b.setAttribute(e, c) : b[e] = c
        })
    };
    S.a.Oe = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    S.a.Bg = function(b) {
        return S.a.Cg(b || window)
    };
    S.a.Cg = function(b) {
        b = b.document;
        b = S.a.$b(b) ? b.documentElement : b.body;
        return new S.A.xb(b.clientWidth, b.clientHeight)
    };
    S.a.vk = function() {
        return S.a.Fd(window)
    };
    S.a.Js = function(b) {
        return S.a.Fd(b)
    };
    S.a.Fd = function(b) {
        var c = b.document,
            d = 0;
        if (c) {
            d = c.body;
            var e = c.documentElement;
            if (!e || !d) return 0;
            b = S.a.Cg(b).height;
            if (S.a.$b(c) && e.scrollHeight) d = e.scrollHeight != b ? e.scrollHeight : e.offsetHeight;
            else {
                c = e.scrollHeight;
                var f = e.offsetHeight;
                e.clientHeight != f && (c = d.scrollHeight, f = d.offsetHeight);
                d = c > b ? c > f ? c : f : c < f ? c : f
            }
        }
        return d
    };
    S.a.Rs = function(b) {
        return S.a.Hd((b || S.global || window).document).cg()
    };
    S.a.cg = function() {
        return S.a.dg(document)
    };
    S.a.dg = function(b) {
        var c = S.a.Gd(b);
        b = S.a.Ac(b);
        return S.userAgent.$ && S.userAgent.Fa("10") && b.pageYOffset != c.scrollTop ? new S.A.X(c.scrollLeft, c.scrollTop) : new S.A.X(b.pageXOffset || c.scrollLeft, b.pageYOffset || c.scrollTop)
    };
    S.a.wk = function() {
        return S.a.Gd(document)
    };
    S.a.Gd = function(b) {
        return b.scrollingElement ? b.scrollingElement : !S.userAgent.Nb && S.a.$b(b) ? b.documentElement : b.body || b.documentElement
    };
    S.a.Bb = function(b) {
        return b ? S.a.Ac(b) : window
    };
    S.a.Ac = function(b) {
        return b.parentWindow || b.defaultView
    };
    S.a.td = function(b, c, d) {
        return S.a.Gf(document, arguments)
    };
    S.a.Gf = function(b, c) {
        var d = String(c[0]),
            e = c[1];
        if (!S.a.sb.mi && e && (e.name || e.type)) {
            d = ["<", d];
            e.name && d.push(' name="', S.f.Da(e.name), '"');
            if (e.type) {
                d.push(' type="', S.f.Da(e.type), '"');
                var f = {};
                S.object.extend(f, e);
                delete f.type;
                e = f
            }
            d.push(">");
            d = d.join("")
        }
        d = b.createElement(d);
        e && (S.N(e) ? d.className = e : S.isArray(e) ? d.className = e.join(" ") : S.a.Uc(d, e));
        2 < c.length && S.a.rf(b, d, c, 2);
        return d
    };
    S.a.rf = function(b, c, d, e) {
        function f(d) {
            d && c.appendChild(S.N(d) ? b.createTextNode(d) : d)
        }
        for (; e < d.length; e++) {
            var g = d[e];
            S.Zb(g) && !S.a.Xd(g) ? S.h.forEach(S.a.Yd(g) ? S.h.Rh(g) : g, f) : f(g)
        }
    };
    S.a.$h = S.a.td;
    S.a.createElement = function(b) {
        return S.a.Wa(document, b)
    };
    S.a.Wa = function(b, c) {
        return b.createElement(String(c))
    };
    S.a.createTextNode = function(b) {
        return document.createTextNode(String(b))
    };
    S.a.Sj = function(b, c, d) {
        return S.a.Hf(document, b, c, !!d)
    };
    S.a.Hf = function(b, c, d, e) {
        for (var f = S.a.Wa(b, "TABLE"), g = f.appendChild(S.a.Wa(b, "TBODY")), h = 0; h < c; h++) {
            for (var k = S.a.Wa(b, "TR"), m = 0; m < d; m++) {
                var t = S.a.Wa(b, "TD");
                e && S.a.me(t, S.f.mf.Ze);
                k.appendChild(t)
            }
            g.appendChild(k)
        }
        return f
    };
    S.a.Hr = function(b) {
        var c = S.h.map(arguments, S.f.H.w);
        c = S.b.rb.gm(S.f.H.from("Constant HTML string, that gets turned into a Node later, so it will be automatically balanced."), c.join(""));
        return S.a.wh(c)
    };
    S.a.wh = function(b) {
        return S.a.xh(document, b)
    };
    S.a.xh = function(b, c) {
        var d = S.a.Wa(b, "DIV");
        S.a.sb.Ji ? (S.a.L.Eh(d, S.b.s.concat(S.b.s.Le, c)), d.removeChild(d.firstChild)) : S.a.L.Eh(d, c);
        return S.a.Kj(b, d)
    };
    S.a.Kj = function(b, c) {
        if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
        for (b = b.createDocumentFragment(); c.firstChild;) b.appendChild(c.firstChild);
        return b
    };
    S.a.Vk = function() {
        return S.a.$b(document)
    };
    S.a.$b = function(b) {
        return S.a.wi ? S.a.He : "CSS1Compat" == b.compatMode
    };
    S.a.canHaveChildren = function(b) {
        if (b.nodeType != S.a.ia.Ra) return !1;
        switch (b.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case n:
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    S.a.appendChild = function(b, c) {
        b.appendChild(c)
    };
    S.a.append = function(b, c) {
        S.a.rf(S.a.Za(b), b, arguments, 1)
    };
    S.a.je = function(b) {
        for (var c; c = b.firstChild;) b.removeChild(c)
    };
    S.a.Ig = function(b, c) {
        c.parentNode && c.parentNode.insertBefore(b, c)
    };
    S.a.Hg = function(b, c) {
        c.parentNode && c.parentNode.insertBefore(b, c.nextSibling)
    };
    S.a.Gg = function(b, c, d) {
        b.insertBefore(c, b.childNodes[d] || null)
    };
    S.a.removeNode = function(b) {
        return b && b.parentNode ? b.parentNode.removeChild(b) : null
    };
    S.a.vh = function(b, c) {
        var d = c.parentNode;
        d && d.replaceChild(b, c)
    };
    S.a.Tf = function(b) {
        var c, d = b.parentNode;
        if (d && d.nodeType != S.a.ia.Ci) {
            if (b.removeNode) return b.removeNode(!1);
            for (; c = b.firstChild;) d.insertBefore(c, b);
            return S.a.removeNode(b)
        }
    };
    S.a.$f = function(b) {
        return S.a.sb.ni && void 0 != b.children ? b.children : S.h.filter(b.childNodes, function(b) {
            return b.nodeType == S.a.ia.Ra
        })
    };
    S.a.fg = function(b) {
        return S.U(b.firstElementChild) ? b.firstElementChild : S.a.yc(b.firstChild, !0)
    };
    S.a.jg = function(b) {
        return S.U(b.lastElementChild) ? b.lastElementChild : S.a.yc(b.lastChild, !1)
    };
    S.a.lg = function(b) {
        return S.U(b.nextElementSibling) ? b.nextElementSibling : S.a.yc(b.nextSibling, !0)
    };
    S.a.sg = function(b) {
        return S.U(b.previousElementSibling) ? b.previousElementSibling : S.a.yc(b.previousSibling, !1)
    };
    S.a.yc = function(b, c) {
        for (; b && b.nodeType != S.a.ia.Ra;) b = c ? b.nextSibling : b.previousSibling;
        return b
    };
    S.a.mg = function(b) {
        if (!b) return null;
        if (b.firstChild) return b.firstChild;
        for (; b && !b.nextSibling;) b = b.parentNode;
        return b ? b.nextSibling : null
    };
    S.a.tg = function(b) {
        if (!b) return null;
        if (!b.previousSibling) return b.parentNode;
        for (b = b.previousSibling; b && b.lastChild;) b = b.lastChild;
        return b
    };
    S.a.Xd = function(b) {
        return S.qa(b) && 0 < b.nodeType
    };
    S.a.Ud = function(b) {
        return S.qa(b) && b.nodeType == S.a.ia.Ra
    };
    S.a.dh = function(b) {
        return S.qa(b) && b.window == b
    };
    S.a.rg = function(b) {
        var c;
        if (S.a.sb.oi && !(S.userAgent.$ && S.userAgent.Fa("9") && !S.userAgent.Fa("10") && S.global.SVGElement && b instanceof S.global.SVGElement) && (c = b.parentElement)) return c;
        c = b.parentNode;
        return S.a.Ud(c) ? c : null
    };
    S.a.contains = function(b, c) {
        if (!b || !c) return !1;
        if (b.contains && c.nodeType == S.a.ia.Ra) return b == c || b.contains(c);
        if ("undefined" != typeof b.compareDocumentPosition) return b == c || !!(b.compareDocumentPosition(c) & 16);
        for (; c && b != c;) c = c.parentNode;
        return c == b
    };
    S.a.Af = function(b, c) {
        if (b == c) return 0;
        if (b.compareDocumentPosition) return b.compareDocumentPosition(c) & 2 ? 1 : -1;
        if (S.userAgent.$ && !S.userAgent.ac(9)) {
            if (b.nodeType == S.a.ia.fd) return -1;
            if (c.nodeType == S.a.ia.fd) return 1
        }
        if ("sourceIndex" in b || b.parentNode && "sourceIndex" in b.parentNode) {
            var d = b.nodeType == S.a.ia.Ra,
                e = c.nodeType == S.a.ia.Ra;
            if (d && e) return b.sourceIndex - c.sourceIndex;
            var f = b.parentNode,
                g = c.parentNode;
            return f == g ? S.a.Cf(b, c) : !d && S.a.contains(f, c) ? -1 * S.a.Bf(b, c) : !e && S.a.contains(g, b) ? S.a.Bf(c,
                b) : (d ? b.sourceIndex : f.sourceIndex) - (e ? c.sourceIndex : g.sourceIndex)
        }
        e = S.a.Za(b);
        d = e.createRange();
        d.selectNode(b);
        d.collapse(!0);
        b = e.createRange();
        b.selectNode(c);
        b.collapse(!0);
        return d.compareBoundaryPoints(S.global.Range.START_TO_END, b)
    };
    S.a.Bf = function(b, c) {
        var d = b.parentNode;
        if (d == c) return -1;
        for (; c.parentNode != d;) c = c.parentNode;
        return S.a.Cf(c, b)
    };
    S.a.Cf = function(b, c) {
        for (; c = c.previousSibling;)
            if (c == b) return -1;
        return 1
    };
    S.a.Pf = function(b) {
        var c, d = arguments.length;
        if (!d) return null;
        if (1 == d) return arguments[0];
        var e = [],
            f = Infinity;
        for (c = 0; c < d; c++) {
            for (var g = [], h = arguments[c]; h;) g.unshift(h), h = h.parentNode;
            e.push(g);
            f = Math.min(f, g.length)
        }
        g = null;
        for (c = 0; c < f; c++) {
            h = e[0][c];
            for (var k = 1; k < d; k++)
                if (h != e[k][c]) return g;
            g = h
        }
        return g
    };
    S.a.Za = function(b) {
        return b.nodeType == S.a.ia.fd ? b : b.ownerDocument || b.document
    };
    S.a.gg = function(b) {
        return b.contentDocument || b.contentWindow.document
    };
    S.a.hg = function(b) {
        try {
            return b.contentWindow || (b.contentDocument ? S.a.Bb(b.contentDocument) : null)
        } catch (c) {}
        return null
    };
    S.a.me = function(b, c) {
        if ("textContent" in b) b.textContent = c;
        else if (b.nodeType == S.a.ia.nc) b.data = String(c);
        else if (b.firstChild && b.firstChild.nodeType == S.a.ia.nc) {
            for (; b.lastChild != b.firstChild;) b.removeChild(b.lastChild);
            b.firstChild.data = String(c)
        } else {
            S.a.je(b);
            var d = S.a.Za(b);
            b.appendChild(d.createTextNode(String(c)))
        }
    };
    S.a.qg = function(b) {
        if ("outerHTML" in b) return b.outerHTML;
        var c = S.a.Za(b);
        c = S.a.Wa(c, "DIV");
        c.appendChild(b.cloneNode(!0));
        return c.innerHTML
    };
    S.a.Qf = function(b, c) {
        var d = [];
        return S.a.Ad(b, c, d, !0) ? d[0] : void 0
    };
    S.a.Rf = function(b, c) {
        var d = [];
        S.a.Ad(b, c, d, !1);
        return d
    };
    S.a.Ad = function(b, c, d, e) {
        if (null != b)
            for (b = b.firstChild; b;) {
                if (c(b) && (d.push(b), e) || S.a.Ad(b, c, d, e)) return !0;
                b = b.nextSibling
            }
        return !1
    };
    S.a.jf = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    };
    S.a.lc = {
        IMG: " ",
        BR: "\n"
    };
    S.a.Wd = function(b) {
        return S.a.Eg(b) && S.a.ah(b)
    };
    S.a.Ch = function(b, c) {
        c ? b.tabIndex = 0 : (b.tabIndex = -1, b.removeAttribute("tabIndex"))
    };
    S.a.Pg = function(b) {
        var c;
        return (c = S.a.Nl(b) ? !b.disabled && (!S.a.Eg(b) || S.a.ah(b)) : S.a.Wd(b)) && S.userAgent.$ ? S.a.Ok(b) : c
    };
    S.a.Eg = function(b) {
        return S.userAgent.$ && !S.userAgent.Fa("9") ? (b = b.getAttributeNode("tabindex"), S.$a(b) && b.specified) : b.hasAttribute("tabindex")
    };
    S.a.ah = function(b) {
        b = b.tabIndex;
        return S.bc(b) && 0 <= b && 32768 > b
    };
    S.a.Nl = function(b) {
        return "A" == b.tagName || "INPUT" == b.tagName || "TEXTAREA" == b.tagName || "SELECT" == b.tagName || "BUTTON" == b.tagName
    };
    S.a.Ok = function(b) {
        b = !S.wa(b.getBoundingClientRect) || S.userAgent.$ && null == b.parentElement ? {
            height: b.offsetHeight,
            width: b.offsetWidth
        } : b.getBoundingClientRect();
        return S.$a(b) && 0 < b.height && 0 < b.width
    };
    S.a.zc = function(b) {
        if (S.a.sb.Me && null !== b && "innerText" in b) b = S.f.Jj(b.innerText);
        else {
            var c = [];
            S.a.Od(b, c, !0);
            b = c.join("")
        }
        b = b.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        b = b.replace(/\u200B/g, "");
        S.a.sb.Me || (b = b.replace(/ +/g, " "));
        " " != b && (b = b.replace(/^\s*/, ""));
        return b
    };
    S.a.Us = function(b) {
        var c = [];
        S.a.Od(b, c, !1);
        return c.join("")
    };
    S.a.Od = function(b, c, d) {
        if (!(b.nodeName in S.a.jf))
            if (b.nodeType == S.a.ia.nc) d ? c.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(b.nodeValue);
            else if (b.nodeName in S.a.lc) c.push(S.a.lc[b.nodeName]);
        else
            for (b = b.firstChild; b;) S.a.Od(b, c, d), b = b.nextSibling
    };
    S.a.og = function(b) {
        return S.a.zc(b).length
    };
    S.a.pg = function(b, c) {
        c = c || S.a.Za(b).body;
        for (var d = []; b && b != c;) {
            for (var e = b; e = e.previousSibling;) d.unshift(S.a.zc(e));
            b = b.parentNode
        }
        return S.f.trimLeft(d.join("")).replace(/ +/g, " ").length
    };
    S.a.ng = function(b, c, d) {
        b = [b];
        for (var e = 0, f = null; 0 < b.length && e < c;)
            if (f = b.pop(), !(f.nodeName in S.a.jf))
                if (f.nodeType == S.a.ia.nc) {
                    var g = f.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
                    e += g.length
                } else if (f.nodeName in S.a.lc) e += S.a.lc[f.nodeName].length;
        else
            for (g = f.childNodes.length - 1; 0 <= g; g--) b.push(f.childNodes[g]);
        S.qa(d) && (d.yu = f ? f.nodeValue.length + c - e - 1 : 0, d.node = f);
        return f
    };
    S.a.Yd = function(b) {
        if (b && typeof b.length == B) {
            if (S.qa(b)) return typeof b.item == x || typeof b.item == F;
            if (S.wa(b)) return typeof b.item == x
        }
        return !1
    };
    S.a.Dd = function(b, c, d, e) {
        if (!c && !d) return null;
        var f = c ? String(c).toUpperCase() : null;
        return S.a.Cd(b, function(b) {
            return (!f || b.nodeName == f) && (!d || S.N(b.className) && S.h.contains(b.className.split(/\s+/), d))
        }, !0, e)
    };
    S.a.Xf = function(b, c, d) {
        return S.a.Dd(b, null, c, d)
    };
    S.a.Cd = function(b, c, d, e) {
        b && !d && (b = b.parentNode);
        for (d = 0; b && (null == e || d <= e);) {
            if (c(b)) return b;
            b = b.parentNode;
            d++
        }
        return null
    };
    S.a.Wf = function(b) {
        try {
            var c = b && b.activeElement;
            return c && c.nodeName ? c : null
        } catch (d) {
            return null
        }
    };
    S.a.Ss = function() {
        var b = S.a.Bb();
        return S.U(b.devicePixelRatio) ? b.devicePixelRatio : b.matchMedia ? S.a.Gc(3) || S.a.Gc(2) || S.a.Gc(1.5) || S.a.Gc(1) || .75 : 1
    };
    S.a.Gc = function(b) {
        return S.a.Bb().matchMedia("(min-resolution: " + b + "dppx),(min--moz-device-pixel-ratio: " + b + "),(min-resolution: " + 96 * b + "dpi)").matches ? b : 0
    };
    S.a.Zf = function(b) {
        return b.getContext("2d")
    };
    S.a.vb = function(b) {
        this.Y = b || S.global.document || document
    };
    Q = S.a.vb.prototype;
    Q.Hd = S.a.Hd;
    Q.tk = O("Y");
    Q.Id = function(b) {
        return S.a.Ld(this.Y, b)
    };
    Q.Ck = function(b) {
        return S.a.vg(this.Y, b)
    };
    Q.Yh = S.a.vb.prototype.Id;
    Q.getElementsByTagName = function(b, c) {
        return (c || this.Y).getElementsByTagName(String(b))
    };
    Q.Md = function(b, c, d) {
        return S.a.xc(this.Y, b, c, d)
    };
    Q.xk = function(b, c, d) {
        return S.a.Kd(this.Y, b, c, d)
    };
    Q.eg = function(b, c) {
        return S.a.eg(b, c || this.Y)
    };
    Q.Jd = function(b, c) {
        return S.a.Jd(b, c || this.Y)
    };
    Q.ug = function(b, c) {
        return S.a.ug(b, c || this.Y)
    };
    Q.Zh = S.a.vb.prototype.Md;
    Q.Uc = S.a.Uc;
    Q.Bg = function(b) {
        return S.a.Bg(b || this.Bb())
    };
    Q.vk = function() {
        return S.a.Fd(this.Bb())
    };
    Q.td = function(b, c, d) {
        return S.a.Gf(this.Y, arguments)
    };
    Q.$h = S.a.vb.prototype.td;
    Q.createElement = function(b) {
        return S.a.Wa(this.Y, b)
    };
    Q.createTextNode = function(b) {
        return this.Y.createTextNode(String(b))
    };
    Q.Sj = function(b, c, d) {
        return S.a.Hf(this.Y, b, c, !!d)
    };
    Q.wh = function(b) {
        return S.a.xh(this.Y, b)
    };
    Q.Vk = function() {
        return S.a.$b(this.Y)
    };
    Q.Bb = function() {
        return S.a.Ac(this.Y)
    };
    Q.wk = function() {
        return S.a.Gd(this.Y)
    };
    Q.cg = function() {
        return S.a.dg(this.Y)
    };
    Q.Wf = function(b) {
        return S.a.Wf(b || this.Y)
    };
    Q.appendChild = S.a.appendChild;
    Q.append = S.a.append;
    Q.canHaveChildren = S.a.canHaveChildren;
    Q.je = S.a.je;
    Q.Ig = S.a.Ig;
    Q.Hg = S.a.Hg;
    Q.Gg = S.a.Gg;
    Q.removeNode = S.a.removeNode;
    Q.vh = S.a.vh;
    Q.Tf = S.a.Tf;
    Q.$f = S.a.$f;
    Q.fg = S.a.fg;
    Q.jg = S.a.jg;
    Q.lg = S.a.lg;
    Q.sg = S.a.sg;
    Q.mg = S.a.mg;
    Q.tg = S.a.tg;
    Q.Xd = S.a.Xd;
    Q.Ud = S.a.Ud;
    Q.dh = S.a.dh;
    Q.rg = S.a.rg;
    Q.contains = S.a.contains;
    Q.Af = S.a.Af;
    Q.Pf = S.a.Pf;
    Q.Za = S.a.Za;
    Q.gg = S.a.gg;
    Q.hg = S.a.hg;
    Q.me = S.a.me;
    Q.qg = S.a.qg;
    Q.Qf = S.a.Qf;
    Q.Rf = S.a.Rf;
    Q.Wd = S.a.Wd;
    Q.Ch = S.a.Ch;
    Q.Pg = S.a.Pg;
    Q.zc = S.a.zc;
    Q.og = S.a.og;
    Q.pg = S.a.pg;
    Q.ng = S.a.ng;
    Q.Yd = S.a.Yd;
    Q.Dd = S.a.Dd;
    Q.Xf = S.a.Xf;
    Q.Cd = S.a.Cd;
    Q.Zf = S.a.Zf;
    S.Oc = {};
    S.Oc.Jp = M();
    S.Thenable = M();
    S.Thenable.prototype.then = M();
    S.Thenable.We = "$goog_Thenable";
    S.Thenable.qf = function(b) {
        b.prototype[S.Thenable.We] = !0
    };
    S.Thenable.Qg = function(b) {
        if (!b) return !1;
        try {
            return !!b[S.Thenable.We]
        } catch (c) {
            return !1
        }
    };
    S.Promise = function(b, c) {
        this.ba = S.Promise.V.Ga;
        this.ra = void 0;
        this.yb = this.Va = this.ha = null;
        this.yd = !1;
        0 < S.Promise.gb ? this.Xc = 0 : 0 == S.Promise.gb && (this.Bc = !1);
        S.Promise.Ka && (this.re = [], V(this, Error("created")), this.Kf = 0);
        if (b != S.ob) try {
            var d = this;
            b.call(c, function(b) {
                W(d, S.Promise.V.Sa, b)
            }, function(b) {
                if (S.Z && !(b instanceof S.Promise.ub)) try {
                    if (b instanceof Error) throw b;
                    throw Error("Promise rejected.");
                } catch (f) {}
                W(d, S.Promise.V.ua, b)
            })
        } catch (e) {
            W(this, S.Promise.V.ua, e)
        }
    };
    S.Promise.Ka = !1;
    S.Promise.gb = 0;
    S.Promise.V = {
        Ga: 0,
        ki: 1,
        Sa: 2,
        ua: 3
    };
    S.Promise.Ne = function() {
        this.next = this.context = this.Fb = this.fc = this.hb = null;
        this.oc = !1
    };
    S.Promise.Ne.prototype.reset = function() {
        this.context = this.Fb = this.fc = this.hb = null;
        this.oc = !1
    };
    S.Promise.dd = 100;
    S.Promise.Wb = new S.async.jc(function() {
        return new S.Promise.Ne
    }, function(b) {
        b.reset()
    }, S.Promise.dd);
    S.Promise.Yf = function(b, c, d) {
        var e = S.Promise.Wb.get();
        e.fc = b;
        e.Fb = c;
        e.context = d;
        return e
    };
    S.Promise.Yl = function(b) {
        S.Promise.Wb.put(b)
    };
    S.Promise.resolve = function(b) {
        if (b instanceof S.Promise) return b;
        var c = new S.Promise(S.ob);
        W(c, S.Promise.V.Sa, b);
        return c
    };
    S.Promise.reject = function(b) {
        return new S.Promise(function(c, d) {
            d(b)
        })
    };
    S.Promise.Pc = function(b, c, d) {
        S.Promise.mh(b, c, d, null) || S.async.R(S.pb(c, b))
    };
    S.Promise.race = function(b) {
        return new S.Promise(function(c, d) {
            b.length || c(void 0);
            for (var e = 0, f; e < b.length; e++) f = b[e], S.Promise.Pc(f, c, d)
        })
    };
    S.Promise.all = function(b) {
        return new S.Promise(function(c, d) {
            var e = b.length,
                f = [];
            if (e)
                for (var g = function(b, d) {
                        e--;
                        f[b] = d;
                        0 == e && c(f)
                    }, h = function(b) {
                        d(b)
                    }, k = 0, m; k < b.length; k++) m = b[k], S.Promise.Pc(m, S.pb(g, k), h);
            else c(f)
        })
    };
    S.Promise.Dq = function(b) {
        return new S.Promise(function(c) {
            var d = b.length,
                e = [];
            if (d)
                for (var f = function(b, f, g) {
                        d--;
                        e[b] = f ? {
                            qk: !0,
                            value: g
                        } : {
                            qk: !1,
                            reason: g
                        };
                        0 == d && c(e)
                    }, g = 0, h; g < b.length; g++) h = b[g], S.Promise.Pc(h, S.pb(f, g, !0), S.pb(f, g, !1));
            else c(e)
        })
    };
    S.Promise.ps = function(b) {
        return new S.Promise(function(c, d) {
            var e = b.length,
                f = [];
            if (e)
                for (var g = function(b) {
                        c(b)
                    }, h = function(b, c) {
                        e--;
                        f[b] = c;
                        0 == e && d(f)
                    }, k = 0, m; k < b.length; k++) m = b[k], S.Promise.Pc(m, g, S.pb(h, k));
            else c(void 0)
        })
    };
    S.Promise.aw = function() {
        var b, c, d = new S.Promise(function(d, f) {
            b = d;
            c = f
        });
        return new S.Promise.Si(d, b, c)
    };
    S.Promise.prototype.then = function(b, c, d) {
        S.Promise.Ka && V(this, Error("then"));
        return ba(this, S.wa(b) ? b : null, S.wa(c) ? c : null, d)
    };
    S.Thenable.qf(S.Promise);
    S.Promise.prototype.cancel = function(b) {
        this.ba == S.Promise.V.Ga && S.async.R(function() {
            var c = new S.Promise.ub(b);
            ca(this, c)
        }, this)
    };

    function ca(b, c) {
        if (b.ba == S.Promise.V.Ga)
            if (b.ha) {
                var d = b.ha;
                if (d.Va) {
                    for (var e = 0, f = null, g = null, h = d.Va; h && (h.oc || (e++, h.hb == b && (f = h), !(f && 1 < e))); h = h.next) f || (g = h);
                    f && (d.ba == S.Promise.V.Ga && 1 == e ? ca(d, c) : (g ? (e = g, e.next == d.yb && (d.yb = e), e.next = e.next.next) : da(d), ea(d, f, S.Promise.V.ua, c)))
                }
                b.ha = null
            } else W(b, S.Promise.V.ua, c)
    }

    function fa(b, c) {
        b.Va || b.ba != S.Promise.V.Sa && b.ba != S.Promise.V.ua || ha(b);
        b.yb ? b.yb.next = c : b.Va = c;
        b.yb = c
    }

    function ba(b, c, d, e) {
        var f = S.Promise.Yf(null, null, null);
        f.hb = new S.Promise(function(b, h) {
            f.fc = c ? function(d) {
                try {
                    var f = c.call(e, d);
                    b(f)
                } catch (t) {
                    h(t)
                }
            } : b;
            f.Fb = d ? function(c) {
                try {
                    var f = d.call(e, c);
                    !S.U(f) && c instanceof S.Promise.ub ? h(c) : b(f)
                } catch (t) {
                    h(t)
                }
            } : h
        });
        f.hb.ha = b;
        fa(b, f);
        return f.hb
    }
    S.Promise.prototype.Fm = function(b) {
        this.ba = S.Promise.V.Ga;
        W(this, S.Promise.V.Sa, b)
    };
    S.Promise.prototype.Gm = function(b) {
        this.ba = S.Promise.V.Ga;
        W(this, S.Promise.V.ua, b)
    };

    function W(b, c, d) {
        b.ba == S.Promise.V.Ga && (b === d && (c = S.Promise.V.ua, d = new TypeError("Promise cannot resolve to itself")), b.ba = S.Promise.V.ki, S.Promise.mh(d, b.Fm, b.Gm, b) || (b.ra = d, b.ba = c, b.ha = null, ha(b), c != S.Promise.V.ua || d instanceof S.Promise.ub || S.Promise.oj(b, d)))
    }
    S.Promise.mh = function(b, c, d, e) {
        if (b instanceof S.Promise) return S.Promise.Ka && V(b, Error("then")), fa(b, S.Promise.Yf(c || S.ob, d || null, e)), !0;
        if (S.Thenable.Qg(b)) return b.then(c, d, e), !0;
        if (S.qa(b)) try {
            var f = b.then;
            if (S.wa(f)) return S.Promise.Dm(b, f, c, d, e), !0
        } catch (g) {
            return d.call(e, g), !0
        }
        return !1
    };
    S.Promise.Dm = function(b, c, d, e, f) {
        function g(b) {
            k || (k = !0, e.call(f, b))
        }

        function h(b) {
            k || (k = !0, d.call(f, b))
        }
        var k = !1;
        try {
            c.call(b, h, g)
        } catch (m) {
            g(m)
        }
    };

    function ha(b) {
        b.yd || (b.yd = !0, S.async.R(b.ik, b))
    }

    function da(b) {
        var c = null;
        b.Va && (c = b.Va, b.Va = c.next, c.next = null);
        b.Va || (b.yb = null);
        return c
    }
    S.Promise.prototype.ik = function() {
        for (var b; b = da(this);) S.Promise.Ka && this.Kf++, ea(this, b, this.ba, this.ra);
        this.yd = !1
    };

    function ea(b, c, d, e) {
        if (d == S.Promise.V.ua && c.Fb && !c.oc)
            if (0 < S.Promise.gb)
                for (; b && b.Xc; b = b.ha) S.global.clearTimeout(b.Xc), b.Xc = 0;
            else if (0 == S.Promise.gb)
            for (; b && b.Bc; b = b.ha) b.Bc = !1;
        if (c.hb) c.hb.ha = null, S.Promise.Kg(c, d, e);
        else try {
            c.oc ? c.fc.call(c.context) : S.Promise.Kg(c, d, e)
        } catch (f) {
            S.Promise.Cc.call(null, f)
        }
        S.Promise.Yl(c)
    }
    S.Promise.Kg = function(b, c, d) {
        c == S.Promise.V.Sa ? b.fc.call(b.context, d) : b.Fb && b.Fb.call(b.context, d)
    };

    function V(b, c) {
        if (S.Promise.Ka && S.N(c.stack)) {
            var d = c.stack.split("\n", 4)[3];
            c = c.message;
            c += Array(11 - c.length).join(" ");
            b.re.push(c + d)
        }
    }

    function ia(b, c) {
        if (S.Promise.Ka && c && S.N(c.stack) && b.re.length) {
            for (var d = ["Promise trace:"], e = b; e; e = e.ha) {
                for (var f = b.Kf; 0 <= f; f--) d.push(e.re[f]);
                d.push("Value: [" + (e.ba == S.Promise.V.ua ? "REJECTED" : "FULFILLED") + "] <" + String(e.ra) + ">")
            }
            c.stack += "\n\n" + d.join("\n")
        }
    }
    S.Promise.oj = function(b, c) {
        0 < S.Promise.gb ? b.Xc = S.global.setTimeout(function() {
            ia(b, c);
            S.Promise.Cc.call(null, c)
        }, S.Promise.gb) : 0 == S.Promise.gb && (b.Bc = !0, S.async.R(function() {
            b.Bc && (ia(b, c), S.Promise.Cc.call(null, c))
        }))
    };
    S.Promise.Cc = S.async.Ph;
    S.Promise.vv = function(b) {
        S.Promise.Cc = b
    };
    S.Promise.ub = function(b) {
        S.debug.Error.call(this, b)
    };
    S.kb(S.Promise.ub, S.debug.Error);
    S.Promise.ub.prototype.name = "cancel";
    S.Promise.Si = function(b, c, d) {
        this.Oc = b;
        this.resolve = c;
        this.reject = d
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    S.async.F = function(b, c) {
        this.Tc = [];
        this.sh = b;
        this.Lf = c || null;
        this.Cb = this.zb = !1;
        this.ra = void 0;
        this.oe = this.Dj = this.od = !1;
        this.Wc = 0;
        this.ha = null;
        this.pc = 0;
        S.async.F.Ka && (this.sd = null, Error.captureStackTrace && (b = {
            stack: ""
        }, Error.captureStackTrace(b, S.async.F), typeof b.stack == F && (this.sd = b.stack.replace(/^[^\n]*\n/, ""))))
    };
    S.async.F.bj = !1;
    S.async.F.Ka = !1;
    Q = S.async.F.prototype;
    Q.cancel = function(b) {
        if (this.zb) this.ra instanceof S.async.F && this.ra.cancel();
        else {
            if (this.ha) {
                var c = this.ha;
                delete this.ha;
                b ? c.cancel(b) : (c.pc--, 0 >= c.pc && c.cancel())
            }
            this.sh ? this.sh.call(this.Lf, this) : this.oe = !0;
            this.zb || this.Ya(new S.async.F.tb(this))
        }
    };
    Q.Ff = function(b, c) {
        this.od = !1;
        X(this, b, c)
    };

    function X(b, c, d) {
        b.zb = !0;
        b.ra = d;
        b.Cb = !c;
        ja(b)
    }

    function ka(b) {
        if (b.zb) {
            if (!b.oe) throw new S.async.F.gc(b);
            b.oe = !1
        }
    }
    Q.Ob = function(b) {
        ka(this);
        X(this, !0, b)
    };
    Q.Ya = function(b) {
        ka(this);
        ma(this, b);
        X(this, !1, b)
    };

    function ma(b, c) {
        S.async.F.Ka && b.sd && S.qa(c) && c.stack && /^[^\n]+(\n   [^\n]+)+/.test(c.stack) && (c.stack = c.stack + "\nDEFERRED OPERATION:\n" + b.sd)
    }

    function Y(b, c, d) {
        return Z(b, c, null, d)
    }

    function na(b, c) {
        Z(b, null, c, void 0)
    }

    function Z(b, c, d, e) {
        b.Tc.push([c, d, e]);
        b.zb && ja(b);
        return b
    }
    Q.then = function(b, c, d) {
        var e, f, g = new S.Promise(function(b, c) {
            e = b;
            f = c
        });
        Z(this, e, function(b) {
            b instanceof S.async.F.tb ? g.cancel() : f(b)
        });
        return g.then(b, c, d)
    };
    S.Thenable.qf(S.async.F);
    S.async.F.prototype.Fj = function() {
        var b = new S.async.F;
        Z(this, b.Ob, b.Ya, b);
        b.ha = this;
        this.pc++;
        return b
    };

    function oa(b) {
        return S.h.some(b.Tc, function(b) {
            return S.wa(b[1])
        })
    }

    function ja(b) {
        b.Wc && b.zb && oa(b) && (S.async.F.Lm(b.Wc), b.Wc = 0);
        b.ha && (b.ha.pc--, delete b.ha);
        for (var c = b.ra, d = !1, e = !1; b.Tc.length && !b.od;) {
            var f = b.Tc.shift(),
                g = f[0],
                h = f[1];
            f = f[2];
            if (g = b.Cb ? h : g) try {
                var k = g.call(f || b.Lf, c);
                S.U(k) && (b.Cb = b.Cb && (k == c || k instanceof Error), b.ra = c = k);
                if (S.Thenable.Qg(c) || typeof S.global.Promise === x && c instanceof S.global.Promise) e = !0, b.od = !0
            } catch (m) {
                c = m, b.Cb = !0, ma(b, c), oa(b) || (d = !0)
            }
        }
        b.ra = c;
        e ? (e = S.bind(b.Ff, b, !0), k = S.bind(b.Ff, b, !1), c instanceof S.async.F ? (Z(c, e, k), c.Dj = !0) : c.then(e, k)) : S.async.F.bj && c instanceof Error && !(c instanceof S.async.F.tb) && (d = b.Cb = !0);
        d && (b.Wc = S.async.F.mm(c))
    }
    S.async.F.Lh = function(b) {
        var c = new S.async.F;
        c.Ob(b);
        return c
    };
    S.async.F.zs = function(b) {
        var c = new S.async.F;
        b.then(function(b) {
            c.Ob(b)
        }, function(b) {
            c.Ya(b)
        });
        return c
    };
    S.async.F.ma = function(b) {
        var c = new S.async.F;
        c.Ya(b);
        return c
    };
    S.async.F.qr = function() {
        var b = new S.async.F;
        b.cancel();
        return b
    };
    S.async.F.$v = function(b, c, d) {
        return b instanceof S.async.F ? Y(b.Fj(), c, d) : Y(S.async.F.Lh(b), c, d)
    };
    S.async.F.gc = function() {
        S.debug.Error.call(this)
    };
    S.kb(S.async.F.gc, S.debug.Error);
    S.async.F.gc.prototype.message = "Deferred has already fired";
    S.async.F.gc.prototype.name = "AlreadyCalledError";
    S.async.F.tb = function() {
        S.debug.Error.call(this)
    };
    S.kb(S.async.F.tb, S.debug.Error);
    S.async.F.tb.prototype.message = "Deferred was canceled";
    S.async.F.tb.prototype.name = "CanceledError";
    S.async.F.Se = function(b) {
        this.Yb = S.global.setTimeout(S.bind(this.Oh, this), 0);
        this.gk = b
    };
    S.async.F.Se.prototype.Oh = function() {
        delete S.async.F.Vb[this.Yb];
        throw this.gk;
    };
    S.async.F.Vb = {};
    S.async.F.mm = function(b) {
        b = new S.async.F.Se(b);
        S.async.F.Vb[b.Yb] = b;
        return b.Yb
    };
    S.async.F.Lm = function(b) {
        var c = S.async.F.Vb[b];
        c && (S.global.clearTimeout(c.Yb), delete S.async.F.Vb[b])
    };
    S.async.F.Yq = function() {
        var b = S.async.F.Vb,
            c;
        for (c in b) {
            var d = b[c];
            S.global.clearTimeout(d.Yb);
            d.Oh()
        }
    };
    S.I = {};
    S.I.J = {};
    S.I.J.hd = "closure_verification";
    S.I.J.Ai = 5E3;
    S.I.J.le = [];
    S.I.J.hm = function(b, c) {
        function d() {
            var e = b.shift();
            e = S.I.J.Qc(e, c);
            b.length && Z(e, d, d, void 0);
            return e
        }
        if (!b.length) return S.async.F.Lh(null);
        var e = S.I.J.le.length;
        S.h.extend(S.I.J.le, b);
        if (e) return S.I.J.Ah;
        b = S.I.J.le;
        S.I.J.Ah = d();
        return S.I.J.Ah
    };
    S.I.J.Qc = function(b, c) {
        var d = c || {};
        c = d.document || document;
        var e = S.b.G.w(b),
            f = S.a.createElement(n),
            g = {
                Bh: f,
                Qh: void 0
            },
            h = new S.async.F(S.I.J.Ij, g),
            k = null,
            m = S.$a(d.timeout) ? d.timeout : S.I.J.Ai;
        0 < m && (k = window.setTimeout(function() {
            S.I.J.rc(f, !0);
            h.Ya(new S.I.J.Error(S.I.J.ic.TIMEOUT, "Timeout reached for loading script " + e))
        }, m), g.Qh = k);
        f.onload = f.onreadystatechange = function() {
            f.readyState && "loaded" != f.readyState && "complete" != f.readyState || (S.I.J.rc(f, d.Ar || !1, k), h.Ob(null))
        };
        f.onerror = function() {
            S.I.J.rc(f,
                !0, k);
            h.Ya(new S.I.J.Error(S.I.J.ic.Ki, "Error while loading script " + e))
        };
        g = d.attributes || {};
        S.object.extend(g, {
            type: G,
            charset: "UTF-8"
        });
        S.a.Uc(f, g);
        S.a.L.qm(f, b);
        S.I.J.Fk(c).appendChild(f);
        return h
    };
    S.I.J.Ou = function(b, c, d) {
        S.global[S.I.J.hd] || (S.global[S.I.J.hd] = {});
        var e = S.global[S.I.J.hd],
            f = S.b.G.w(b);
        if (S.U(e[c])) return S.async.F.ma(new S.I.J.Error(S.I.J.ic.mj, "Verification object " + c + " already defined."));
        b = S.I.J.Qc(b, d);
        var g = new S.async.F(S.bind(b.cancel, b));
        Y(b, function() {
            var b = e[c];
            S.U(b) ? (g.Ob(b), delete e[c]) : g.Ya(new S.I.J.Error(S.I.J.ic.lj, "Script " + f + " loaded, but verification object " + c + " was not defined."))
        });
        na(b, function(b) {
            S.U(e[c]) && delete e[c];
            g.Ya(b)
        });
        return g
    };
    S.I.J.Fk = function(b) {
        var c = S.a.getElementsByTagName("HEAD", b);
        return !c || S.h.Db(c) ? b.documentElement : c[0]
    };
    S.I.J.Ij = function() {
        if (this && this.Bh) {
            var b = this.Bh;
            b && b.tagName == n && S.I.J.rc(b, !0, this.Qh)
        }
    };
    S.I.J.rc = function(b, c, d) {
        S.$a(d) && S.global.clearTimeout(d);
        b.onload = S.ob;
        b.onerror = S.ob;
        b.onreadystatechange = S.ob;
        c && window.setTimeout(function() {
            S.a.removeNode(b)
        }, 0)
    };
    S.I.J.ic = {
        Ki: 0,
        TIMEOUT: 1,
        lj: 2,
        mj: 3
    };
    S.I.J.Error = function(b, c) {
        var d = "Jsloader error (code #" + b + ")";
        c && (d += ": " + c);
        S.debug.Error.call(this, d);
        this.code = b
    };
    S.kb(S.I.J.Error, S.debug.Error);
    var google = {
        l: {}
    };
    google.l.m = {};
    google.l.m.Qa = {
        Tl: {
            // gstatic: {
            //     debug: S.f.H.from("https://www.gstatic.com/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"),
            //     debug_i18n: S.f.H.from("https://www.gstatic.com/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"),
            //     compiled: S.f.H.from("https://www.gstatic.com/charts/%{version}/js/jsapi_compiled_%{package}_module.js"),
            //     compiled_i18n: S.f.H.from("https://www.gstatic.com/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"),
            //     css: S.f.H.from("https://www.gstatic.com/charts/%{version}/css/%{subdir}/%{filename}"),
            //     css2: S.f.H.from("https://www.gstatic.com/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"),
            //     third_party: S.f.H.from(z),
            //     third_party2: S.f.H.from("https://www.gstatic.com/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"),
            //     third_party_gen: S.f.H.from(z)
            // }

            gstatic: {
                debug: S.f.H.from("/node_modules/google-chart/46.2/js/jsapi_debug_%{package}_module.js"),
                debug_i18n: S.f.H.from("/node_modules/google-chart/46.2/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"),
                compiled: S.f.H.from("/node_modules/google-chart/46.2/js/jsapi_compiled_%{package}_module.js"),
                compiled_i18n: S.f.H.from("/node_modules/google-chart/46.2/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"),
                css: S.f.H.from("/node_modules/google-chart/46.2/css/%{subdir}/%{filename}"),
                css2: S.f.H.from("/node_modules/google-chart/46.2/css/%{subdir1}/%{subdir2}/%{filename}"),
                third_party: S.f.H.from(z),
                third_party2: S.f.H.from("/node_modules/google-chart/46.2/third_party/%{subdir1}/%{subdir2}/%{filename}"),
                third_party_gen: S.f.H.from(z)
            }
        },
        Zj: ["default"],
        $j: {
            format: [],
            "default": ["format"],
            ui: ["default"],
            ui_base: ["default"],
            flashui: [I],
            fw: [I],
            annotatedtimeline: [q],
            annotationchart: [I, "controls", v, "table"],
            areachart: u,
            bar: ["fw", w, K],
            barchart: u,
            browserchart: [I],
            bubbles: ["fw",
                "d3"
            ],
            calendar: ["fw"],
            charteditor: [I, v, A, p, "gauge", "motionchart", D, "table"],
            charteditor_base: [J, v, A, p, "gauge", "motionchart", D, "table_base"],
            circles: ["fw", "d3"],
            clusterchart: [v, "d3"],
            columnchart: u,
            controls: [I],
            controls_base: [J],
            corechart: [I],
            gantt: ["fw", w],
            gauge: [I],
            geochart: [I],
            geomap: ["flashui"],
            geomap_base: [J],
            helloworld: ["fw"],
            imagechart: [I],
            imageareachart: A,
            imagebarchart: A,
            imagelinechart: A,
            imagepiechart: A,
            imagesparkline: A,
            intensitymap: [I],
            line: ["fw", w, K],
            linechart: u,
            map: [I],
            motionchart: ["flashui"],
            orgchart: [I],
            overtimecharts: [I, v],
            piechart: u,
            sankey: ["fw", "d3", "d3.sankey"],
            scatter: ["fw", w, K],
            scatterchart: u,
            sunburst: ["fw", "d3"],
            streamgraph: ["fw", "d3"],
            table: [I],
            table_base: [J],
            timeline: ["fw", I, w],
            treemap: [I],
            wordtree: [I]
        },
        Nh: {
            d3: {
                subdir1: "d3",
                subdir2: "v5",
                filename: "d3.js"
            },
            "d3.sankey": {
                subdir1: "d3_sankey",
                subdir2: "v4",
                filename: "d3.sankey.js"
            },
            webfontloader: {
                subdir: K,
                filename: "webfont.js"
            }
        },
        Mh: {
            dygraph: {
                subdir: "dygraphs",
                filename: "dygraph-tickers-combined.js"
            }
        },
        Uj: {
            "default": [{
                subdir: "core",
                filename: "tooltip.css"
            }],
            annotationchart: [{
                subdir: q,
                filename: "annotationchart.css"
            }],
            charteditor: [{
                subdir: "charteditor",
                filename: "charteditor.css"
            }],
            charteditor_base: [{
                subdir: "charteditor_base",
                filename: "charteditor_base.css"
            }],
            controls: [{
                subdir: "controls",
                filename: "controls.css"
            }],
            imagesparkline: [{
                subdir: A,
                filename: "imagesparkline.css"
            }],
            intensitymap: [{
                subdir: "intensitymap",
                filename: "intensitymap.css"
            }],
            orgchart: [{
                subdir: D,
                filename: "orgchart.css"
            }],
            table: [{
                subdir: "table",
                filename: "table.css"
            }, {
                subdir: "util",
                filename: "format.css"
            }],
            table_base: [{
                subdir: "util",
                filename: "format.css"
            }, {
                subdir: "table",
                filename: "table_base.css"
            }],
            ui: [{
                subdir: "util",
                filename: "util.css"
            }],
            ui_base: [{
                subdir: "util",
                filename: "util_base.css"
            }]
        }
    };
    google.l.m.Ni = {
        af: !0,
        am: !0,
        az: !0,
        ar: !0,
        arb: "ar",
        bg: !0,
        bn: !0,
        ca: !0,
        cs: !0,
        cmn: "zh",
        da: !0,
        de: !0,
        el: !0,
        en: !0,
        en_gb: !0,
        es: !0,
        es_419: !0,
        et: !0,
        eu: !0,
        fa: !0,
        fi: !0,
        fil: !0,
        fr: !0,
        fr_ca: !0,
        gl: !0,
        ka: !0,
        gu: !0,
        he: "iw",
        hi: !0,
        hr: !0,
        hu: !0,
        hy: !0,
        id: !0,
        "in": "id",
        is: !0,
        it: !0,
        iw: !0,
        ja: !0,
        ji: "yi",
        jv: !1,
        jw: "jv",
        km: !0,
        kn: !0,
        ko: !0,
        lo: !0,
        lt: !0,
        lv: !0,
        ml: !0,
        mn: !0,
        mo: "ro",
        mr: !0,
        ms: !0,
        nb: "no",
        ne: !0,
        nl: !0,
        no: !0,
        pl: !0,
        pt: "pt_br",
        pt_br: !0,
        pt_pt: !0,
        ro: !0,
        ru: !0,
        si: !0,
        sk: !0,
        sl: !0,
        sr: !0,
        sv: !0,
        sw: !0,
        swh: "sw",
        ta: !0,
        te: !0,
        th: !0,
        tl: "fil",
        tr: !0,
        uk: !0,
        ur: !0,
        vi: !0,
        yi: !1,
        zh: "zh_cn",
        zh_cn: !0,
        zh_hk: !0,
        zh_tw: !0,
        zsm: "ms",
        zu: !0
    };
    google.l.m.oa = {};
    google.l.m.oa.we = 3E4;
    google.l.m.oa.ih = function(b, c) {
        return {
            format: b,
            qj: c
        }
    };
    google.l.m.oa.Pd = function(b) {
        return S.b.G.format(b.format, b.qj)
    };
    google.l.m.oa.load = function(b, c) {
        b = S.b.G.format(b, c);
        var d = S.I.J.Qc(b, {
            timeout: google.l.m.oa.we,
            attributes: {
                async: !1,
                defer: !1
            }
        });
        return new Promise(function(b) {
            Y(d, b)
        })
    };
    google.l.m.oa.$d = function(b) {
        b = S.h.map(b, google.l.m.oa.Pd);
        if (S.h.Db(b)) return Promise.resolve();
        var c = {
                timeout: google.l.m.oa.we,
                attributes: {
                    async: !1,
                    defer: !1
                }
            },
            d = [];
        !S.userAgent.$ || S.userAgent.Fa(11) ? S.h.forEach(b, function(b) {
            d.push(S.I.J.Qc(b, c))
        }) : d.push(S.I.J.hm(b, c));
        return Promise.all(S.h.map(d, function(b) {
            return new Promise(function(c) {
                return Y(b, c)
            })
        }))
    };
    google.l.m.Ta = {};
    google.l.m.Ta.count = 0;
    google.l.m.Ta.If = function(b, c) {
        var d = c || document,
            e = "load-css-" + google.l.m.Ta.count++,
            f = d.createElement("link");
        f.setAttribute("id", e);
        f.setAttribute("rel", "stylesheet");
        f.setAttribute("type", "text/css");
        return new Promise(function(c, h) {
            S.U(f.addEventListener) ? (f.addEventListener("load", c, !1), f.addEventListener("error", h, !1)) : S.U(f.attachEvent) && f.attachEvent("onload", function() {
                try {
                    S.h.nk(d.styleSheets, function(b) {
                        return b.id === e
                    }) && c()
                } catch (k) {
                    h()
                }
            });
            try {
                (d.querySelector("head") || d).appendChild(f),
                    f.setAttribute("href", b)
            } catch (k) {
                c()
            }
        })
    };
    google.l.m.Ta.load = function(b, c) {
        return google.l.m.Ta.If(b, c)["catch"](M())
    };
    google.l.m.Ta.$d = function(b, c) {
        return Promise.all(S.h.map(b, function(b) {
            b = google.l.m.oa.Pd(b);
            b = S.b.G.w(b);
            return google.l.m.Ta.If(b, c)
        }))
    };
    google.l.m.v = {};
    google.l.m.v.dc = "";
    google.l.m.v.cc = "";
    google.l.m.v.log = M();
    google.l.m.v.error = M();
    google.l.m.v.Og = !1;
    google.l.m.v.Yg = !1;
    google.l.m.v.qb = google.l.m.Qa.Tl.gstatic;
    google.l.m.v.tv = function(b) {
        google.l.m.v.qb = b
    };
    google.l.m.v.Df = function(b) {
        function c(b) {
            for (var e = [], g = 0; g < b.length; g++) {
                var h = b[g];
                if (!d[h]) {
                    d[h] = !0;
                    var k = google.l.m.Qa.$j[h] || [];
                    e = e.concat(c(S.N(k) ? [k] : k));
                    S.N(k) || e.push(h)
                }
            }
            return e
        }
        var d = {};
        return c(b)
    };
    google.l.m.v.mb = {};
    google.l.m.v.Ju = function() {
        google.l.m.v.mb = {}
    };
    google.l.m.v.Dk = function(b) {
        return google.l.m.v.mb[b] && google.l.m.v.mb[b].Oc
    };
    google.l.m.v.Vs = function(b) {
        return google.l.m.v.mb[b] && google.l.m.v.mb[b].loaded
    };
    google.l.m.v.Gh = function(b, c) {
        google.l.m.v.mb[b] = {
            Oc: c,
            loaded: !1
        }
    };
    google.l.m.v.Fh = function(b) {
        google.l.m.v.mb[b].loaded = !0
    };
    google.l.m.v.wg = function(b) {
        var c = [],
            d = [];
        S.h.forEach(b, function(b) {
            var e = google.l.m.v.Dk(b);
            S.U(e) ? c.push(e) : d.push(b)
        });
        return {
            uh: c,
            Vh: d
        }
    };
    google.l.m.v.Bl = function(b) {
        b = google.l.m.v.wg(google.l.m.v.Df(b));
        var c = b.uh,
            d = b.Vh;
        google.l.m.v.log("Load packages + dependencies - previous: " + d);
        var e = S.h.filter(S.h.map(d, function(b) {
                return google.l.m.v.Ol(b)
            }), S.$a),
            f = Promise.all(c).then(function() {
                return google.l.m.oa.$d(e)
            }).then(function() {
                S.h.forEach(d, function(b) {
                    google.l.m.v.Fh(b)
                })
            });
        S.h.forEach(d, function(b) {
            google.l.m.v.Gh(b, f)
        });
        return f
    };
    google.l.m.v.Ol = function(b) {
        var c = {
            version: google.l.m.v.dc,
            language: google.l.m.v.cc,
            "package": b
        };
        google.l.m.Qa.Nh[b] ? (b = google.l.m.Qa.Nh[b], S.object.extend(c, b), b = google.l.m.v.qb[b.subdir ? "third_party" : "third_party2"]) : google.l.m.Qa.Mh[b] ? (S.object.extend(c, google.l.m.Qa.Mh[b]), b = google.l.m.v.qb.third_party_gen) : b = google.l.m.v.qb[(google.l.m.v.Og ? "debug" : google.l.m.v.Yg ? "pseudo" : "compiled") + (google.l.m.v.cc ? "_i18n" : "")];
        return b ? google.l.m.oa.ih(b, c) : null
    };
    google.l.m.v.xl = function(b, c) {
        b = google.l.m.v.Df(b);
        var d = [];
        S.h.forEach(b, function(b) {
            S.h.forEach(google.l.m.Qa.Uj[b] || [], function(b) {
                d.push(b)
            })
        });
        if (0 === d.length) return Promise.resolve();
        var e = {};
        b = S.h.map(d, function(b) {
            var c = (b.subdir || b.subdir1 + "/" + b.subdir2) + "/" + b.filename;
            e[c] = b;
            return c
        });
        b = google.l.m.v.wg(b);
        var f = b.uh,
            g = b.Vh,
            h = S.h.map(g, function(b) {
                return google.l.m.v.gh(e[b])
            }),
            k = Promise.all(f).then(function() {
                return google.l.m.Ta.$d(h, c)
            }).then(function() {
                S.h.forEach(g, function(b) {
                    google.l.m.v.Fh(b)
                })
            });
        S.h.forEach(g, function(b) {
            google.l.m.v.Gh(b, k)
        });
        return k
    };
    google.l.m.v.gh = function(b) {
        var c = google.l.m.v.qb.css,
            d = {
                version: google.l.m.v.dc,
                subdir: b.subdir,
                filename: b.filename
            };
        b.subdir2 && (c = google.l.m.v.qb.css2, d.subdir1 = b.subdir1, d.subdir2 = b.subdir2);
        return google.l.m.oa.ih(c, d)
    };
    google.l.m.v.Hl = function(b) {
        return S.b.G.w(google.l.m.oa.Pd(google.l.m.v.gh(b)))
    };
    S.Na("google.charts.loader.VersionSpecific.makeCssUrl", google.l.m.v.Hl);
    google.l.m.v.qh = function(b) {
        for (var c = b.replace(/-/g, "_").toLowerCase(); S.N(c);) b = c, c = google.l.m.Ni[c], c === b && (c = !1);
        c || (b.match(/_[^_]+$/) ? (b = b.replace(/_[^_]+$/, ""), b = google.l.m.v.qh(b)) : b = "en");
        return b
    };
    google.l.m.v.Rl = function(b, c) {
        var d = c.debug || !1,
            e = c.pseudo || !1,
            f = c.language || "";
        f = google.l.m.v.qh(f);
        b || (b = c.version || "unknown");
        if ("" !== google.l.m.v.dc && google.l.m.v.dc !== b || "" !== google.l.m.v.cc && google.l.m.v.cc !== f) throw Error("Cannot load different versions of Google Charts.");
        "en" === f && (f = "");
        google.l.m.v.dc = b;
        google.l.m.v.cc = f;
        google.l.m.v.Og = d;
        google.l.m.v.Yg = e;
        S.Na("google.visualization.ModulePath", google.l.m.v.qb.format);
        S.Na("google.visualization.Version", b);
        S.Na("google.visualization.Locale",
            f);
        S.Na("google.visualization.isDebug", d);
        S.Na("google.visualization.isPseudo", e);
        S.Na("google.visualization.mapsApiKey", c.mapsApiKey);
        c.timeoutDelay && (google.l.m.oa.we = c.timeoutDelay)
    };
    google.l.m.v.tc = null;
    google.l.m.v.zl = function(b, c) {
        function d(b) {
            return b.getRootNode ? b.getRootNode() : null != b.parentNode ? d(b.parentNode) : b
        }
        google.l.m.v.log("google.charts.load version " + b);
        google.l.m.v.Rl(b, c);
        b = c.packages;
        if (!S.isArray(b) || S.h.Db(b)) b = google.l.m.Qa.Zj;
        var e = d(c.element || document);
        return google.l.m.v.tc = Promise.all([google.l.m.v.xl(b, e), google.l.m.v.Bl(b), c.ignoreWindowOnLoad ? Promise.resolve() : google.l.m.v.rl()]).then(function() {
            google.l.m.v.log("afterLoading " + c.packages + " for " + document.location.href);
            var b = c.callback;
            if (b) {
                if (!S.wa(b)) throw Error(l);
                b()
            }
        })
    };
    google.l.m.v.rl = function() {
        return new Promise(function(b) {
            if ("undefined" == typeof window || "complete" === document.readyState) b();
            else if (window.addEventListener) document.addEventListener("DOMContentLoaded", b, !0), window.addEventListener("load", b, !0);
            else if (window.attachEvent) window.attachEvent("onload", b);
            else {
                var c = window.onload;
                window.onload = S.wa(c) ? function(d) {
                    c(d);
                    b()
                } : b
            }
        })
    };
    google.l.m.v.pm = function(b) {
        if (!google.l.m.v.tc) throw Error("Must call google.charts.load before google.charts.setOnLoadCallback");
        if (!b) return google.l.m.v.tc;
        if (!S.wa(b)) throw Error(l);
        return google.l.m.v.tc.then(b)
    };
    google.l.m.v.load = function(b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
        d = 0;
        "visualization" === c[d] && d++;
        var e = "current";
        S.N(c[d]) && (e = c[d], d++);
        var f = {};
        S.qa(c[d]) && (f = c[d]);
        return google.l.m.v.zl(e, f)
    };
    S.Na("google.charts.loader.VersionSpecific.load", google.l.m.v.load);
    google.l.m.v.om = google.l.m.v.pm;
    S.Na("google.charts.loader.VersionSpecific.setOnLoadCallback", google.l.m.v.om);
}).call(this);