! function() {
    var t = function(t) {
            var e = {
                exports: {}
            };
            return t.call(e.exports, e, e.exports), e.exports
        },
        p = function(t) {
            return function() {
                var a = t.apply(this, arguments);
                return new Promise(function(i, u) {
                    function s(t, e) {
                        try {
                            var r = a[t](e),
                                n = r.value
                        } catch (o) {
                            return void u(o)
                        }
                        if (!r.done) return Promise.resolve(n).then(function(t) {
                            s("next", t)
                        }, function(t) {
                            s("throw", t)
                        });
                        i(n)
                    }
                    return s("next")
                })
            }
        },
        e = function(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        },
        v = t(function(t) {
            var e = {}.toString;
            t.exports = function(t) {
                return e.call(t).slice(8, -1)
            }
        }),
        O = t(function(t) {
            var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = e)
        }),
        o = t(function(t) {
            var e = "__core-js_shared__",
                r = O[e] || (O[e] = {});
            t.exports = function(t) {
                return r[t] || (r[t] = {})
            }
        }),
        s = t(function(t) {
            var e = 0,
                r = Math.random();
            t.exports = function(t) {
                return "Symbol(".concat(t === undefined ? "" : t, ")_", (++e + r).toString(36))
            }
        }),
        P = t(function(t) {
            var e = o("wks"),
                r = O.Symbol,
                n = "function" == typeof r;
            (t.exports = function(t) {
                return e[t] || (e[t] = n && r[t] || (n ? r : s)("Symbol." + t))
            }).store = e
        }),
        A = t(function(t) {
            var o = P("toStringTag"),
                i = "Arguments" == v(function() {
                    return arguments
                }()),
                u = function(t, e) {
                    try {
                        return t[e]
                    } catch (r) {}
                };
            t.exports = function(t) {
                var e, r, n;
                return t === undefined ? "Undefined" : null === t ? "Null" : "string" == typeof(r = u(e = Object(t), o)) ? r : i ? v(e) : "Object" == (n = v(e)) && "function" == typeof e.callee ? "Arguments" : n
            }
        }),
        B = t(function(t) {
            t.exports = function(t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        }),
        d = t(function(t) {
            t.exports = function(t) {
                if (!B(t)) throw TypeError(t + " is not an object!");
                return t
            }
        }),
        r = t(function(t) {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (e) {
                    return !0
                }
            }
        }),
        n = t(function(t) {
            t.exports = !r(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }),
        m = t(function(t) {
            var e = O.document,
                r = B(e) && B(e.createElement);
            t.exports = function(t) {
                return r ? e.createElement(t) : {}
            }
        }),
        u = t(function(t) {
            t.exports = !n && !r(function() {
                return 7 != Object.defineProperty(m("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }),
        a = t(function(t) {
            t.exports = function(t, e) {
                if (!B(t)) return t;
                var r, n;
                if (e && "function" == typeof(r = t.toString) && !B(n = r.call(t))) return n;
                if ("function" == typeof(r = t.valueOf) && !B(n = r.call(t))) return n;
                if (!e && "function" == typeof(r = t.toString) && !B(n = r.call(t))) return n;
                throw TypeError("Can't convert object to primitive value")
            }
        }),
        c = t(function(t, e) {
            var o = Object.defineProperty;
            e.f = n ? Object.defineProperty : function i(t, e, r) {
                if (d(t), e = a(e, !0), d(r), u) try {
                    return o(t, e, r)
                } catch (n) {}
                if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
                return "value" in r && (t[e] = r.value), t
            }
        }),
        i = t(function(t) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        }),
        j = t(function(t) {
            t.exports = n ? function(t, e, r) {
                return c.f(t, e, i(1, r))
            } : function(t, e, r) {
                return t[e] = r, t
            }
        }),
        L = t(function(t) {
            var r = {}.hasOwnProperty;
            t.exports = function(t, e) {
                return r.call(t, e)
            }
        }),
        R = t(function(t) {
            var e = t.exports = {
                version: "2.5.1"
            };
            "number" == typeof __e && (__e = e)
        }),
        F = t(function(t) {
            var i = s("src"),
                e = "toString",
                r = Function[e],
                u = ("" + r).split(e);
            R.inspectSource = function(t) {
                return r.call(t)
            }, (t.exports = function(t, e, r, n) {
                var o = "function" == typeof r;
                o && (L(r, "name") || j(r, "name", e)), t[e] !== r && (o && (L(r, i) || j(r, i, t[e] ? "" + t[e] : u.join(String(e)))), t === O ? t[e] = r : n ? t[e] ? t[e] = r : j(t, e, r) : (delete t[e], j(t, e, r)))
            })(Function.prototype, e, function n() {
                return "function" == typeof this && this[i] || r.call(this)
            })
        }),
        f = (t(function() {
            "use strict";
            var t = {};
            t[P("toStringTag")] = "z", t + "" != "[object z]" && F(Object.prototype, "toString", function e() {
                return "[object " + A(this) + "]"
            }, !0)
        }), t(function(t) {
            var e = Math.ceil,
                r = Math.floor;
            t.exports = function(t) {
                return isNaN(t = +t) ? 0 : (0 < t ? r : e)(t)
            }
        })),
        h = t(function(t) {
            t.exports = function(t) {
                if (t == undefined) throw TypeError("Can't call method on  " + t);
                return t
            }
        }),
        l = t(function(t) {
            t.exports = function(s) {
                return function(t, e) {
                    var r, n, o = String(h(t)),
                        i = f(e),
                        u = o.length;
                    return i < 0 || u <= i ? s ? "" : undefined : (r = o.charCodeAt(i)) < 55296 || 56319 < r || i + 1 === u || (n = o.charCodeAt(i + 1)) < 56320 || 57343 < n ? s ? o.charAt(i) : r : s ? o.slice(i, i + 2) : n - 56320 + (r - 55296 << 10) + 65536
                }
            }
        }),
        k = t(function(t) {
            t.exports = !1
        }),
        I = t(function(t) {
            t.exports = function(t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t
            }
        }),
        M = t(function(t) {
            t.exports = function(n, o, t) {
                if (I(n), o === undefined) return n;
                switch (t) {
                    case 1:
                        return function(t) {
                            return n.call(o, t)
                        };
                    case 2:
                        return function(t, e) {
                            return n.call(o, t, e)
                        };
                    case 3:
                        return function(t, e, r) {
                            return n.call(o, t, e, r)
                        }
                }
                return function() {
                    return n.apply(o, arguments)
                }
            }
        }),
        U = t(function(t) {
            var y = "prototype",
                v = function(t, e, r) {
                    var n, o, i, u, s = t & v.F,
                        a = t & v.G,
                        c = t & v.S,
                        f = t & v.P,
                        h = t & v.B,
                        l = a ? O : c ? O[e] || (O[e] = {}) : (O[e] || {})[y],
                        p = a ? R : R[e] || (R[e] = {}),
                        d = p[y] || (p[y] = {});
                    for (n in a && (r = e), r) i = ((o = !s && l && l[n] !== undefined) ? l : r)[n], u = h && o ? M(i, O) : f && "function" == typeof i ? M(Function.call, i) : i, l && F(l, n, i, t & v.U), p[n] != i && j(p, n, u), f && d[n] != i && (d[n] = i)
                };
            O.core = R, v.F = 1, v.G = 2, v.S = 4, v.P = 8, v.B = 16, v.W = 32, v.U = 64, v.R = 128, t.exports = v
        }),
        D = t(function(t) {
            t.exports = {}
        }),
        y = t(function(t) {
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                return "String" == v(t) ? t.split("") : Object(t)
            }
        }),
        b = t(function(t) {
            t.exports = function(t) {
                return y(h(t))
            }
        }),
        w = t(function(t) {
            var e = Math.min;
            t.exports = function(t) {
                return 0 < t ? e(f(t), 9007199254740991) : 0
            }
        }),
        g = t(function(t) {
            var r = Math.max,
                n = Math.min;
            t.exports = function(t, e) {
                return (t = f(t)) < 0 ? r(t + e, 0) : n(t, e)
            }
        }),
        x = t(function(t) {
            t.exports = function(s) {
                return function(t, e, r) {
                    var n, o = b(t),
                        i = w(o.length),
                        u = g(r, i);
                    if (s && e != e) {
                        for (; u < i;)
                            if ((n = o[u++]) != n) return !0
                    } else
                        for (; u < i; u++)
                            if ((s || u in o) && o[u] === e) return s || u || 0;
                    return !s && -1
                }
            }
        }),
        _ = t(function(t) {
            var e = o("keys");
            t.exports = function(t) {
                return e[t] || (e[t] = s(t))
            }
        }),
        E = t(function(t) {
            var u = x(!1),
                s = _("IE_PROTO");
            t.exports = function(t, e) {
                var r, n = b(t),
                    o = 0,
                    i = [];
                for (r in n) r != s && L(n, r) && i.push(r);
                for (; e.length > o;) L(n, r = e[o++]) && (~u(i, r) || i.push(r));
                return i
            }
        }),
        T = t(function(t) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }),
        S = t(function(t) {
            t.exports = Object.keys || function e(t) {
                return E(t, T)
            }
        }),
        C = t(function(t) {
            t.exports = n ? Object.defineProperties : function u(t, e) {
                d(t);
                for (var r, n = S(e), o = n.length, i = 0; i < o;) c.f(t, r = n[i++], e[r]);
                return t
            }
        }),
        G = t(function(t) {
            var e = O.document;
            t.exports = e && e.documentElement
        }),
        N = t(function(t) {
            var n = _("IE_PROTO"),
                o = function() {},
                i = "prototype",
                u = function() {
                    var t, e = m("iframe"),
                        r = T.length,
                        n = "<",
                        o = ">";
                    for (e.style.display = "none", G.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write(n + "script" + o + "document.F=Object" + n + "/script" + o), t.close(), u = t.F; r--;) delete u[i][T[r]];
                    return u()
                };
            t.exports = Object.create || function s(t, e) {
                var r;
                return null !== t ? (o[i] = d(t), r = new o, o[i] = null, r[n] = t) : r = u(), e === undefined ? r : C(r, e)
            }
        }),
        H = t(function(t) {
            var n = c.f,
                o = P("toStringTag");
            t.exports = function(t, e, r) {
                t && !L(t = r ? t : t.prototype, o) && n(t, o, {
                    configurable: !0,
                    value: e
                })
            }
        }),
        V = t(function(t) {
            "use strict";
            var n = {};
            j(n, P("iterator"), function() {
                return this
            }), t.exports = function(t, e, r) {
                t.prototype = N(n, {
                    next: i(1, r)
                }), H(t, e + " Iterator")
            }
        }),
        q = t(function(t) {
            t.exports = function(t) {
                return Object(h(t))
            }
        }),
        z = t(function(t) {
            var e = _("IE_PROTO"),
                r = Object.prototype;
            t.exports = Object.getPrototypeOf || function(t) {
                return t = q(t), L(t, e) ? t[e] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? r : null
            }
        }),
        W = t(function(t) {
            "use strict";
            var g = P("iterator"),
                x = !([].keys && "next" in [].keys()),
                _ = "@@iterator",
                E = "keys",
                T = "values",
                S = function() {
                    return this
                };
            t.exports = function(t, e, o, r, n, i, u) {
                V(o, e, r);
                var s, a, c, f = function(t) {
                        if (!x && t in d) return d[t];
                        switch (t) {
                            case E:
                                return function e() {
                                    return new o(this, t)
                                };
                            case T:
                                return function r() {
                                    return new o(this, t)
                                }
                        }
                        return function n() {
                            return new o(this, t)
                        }
                    },
                    h = e + " Iterator",
                    l = n == T,
                    p = !1,
                    d = t.prototype,
                    y = d[g] || d[_] || n && d[n],
                    v = y || f(n),
                    m = n ? l ? f("entries") : v : undefined,
                    b = "Array" == e && d.entries || y;
                if (b && (c = z(b.call(new t))) !== Object.prototype && c.next && (H(c, h, !0), k || L(c, g) || j(c, g, S)), l && y && y.name !== T && (p = !0, v = function w() {
                        return y.call(this)
                    }), k && !u || !x && !p && d[g] || j(d, g, v), D[e] = v, D[h] = S, n)
                    if (s = {
                            values: l ? v : f(T),
                            keys: i ? v : f(E),
                            entries: m
                        }, u)
                        for (a in s) a in d || F(d, a, s[a]);
                    else U(U.P + U.F * (x || p), e, s);
                return s
            }
        }),
        K = (t(function() {
            "use strict";
            var n = l(!0);
            W(String, "String", function(t) {
                this._t = String(t), this._i = 0
            }, function() {
                var t, e = this._t,
                    r = this._i;
                return r >= e.length ? {
                    value: undefined,
                    done: !0
                } : (t = n(e, r), this._i += t.length, {
                    value: t,
                    done: !1
                })
            })
        }), t(function(t) {
            var e = P("unscopables"),
                r = Array.prototype;
            r[e] == undefined && j(r, e, {}), t.exports = function(t) {
                r[e][t] = !0
            }
        })),
        X = t(function(t) {
            t.exports = function(t, e) {
                return {
                    value: e,
                    done: !!t
                }
            }
        }),
        Y = t(function(t) {
            "use strict";
            t.exports = W(Array, "Array", function(t, e) {
                this._t = b(t), this._i = 0, this._k = e
            }, function() {
                var t = this._t,
                    e = this._k,
                    r = this._i++;
                return !t || r >= t.length ? (this._t = undefined, X(1)) : X(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
            }, "values"), D.Arguments = D.Array, K("keys"), K("values"), K("entries")
        }),
        J = (t(function() {
            for (var t = P("iterator"), e = P("toStringTag"), r = D.Array, n = {
                    CSSRuleList: !0,
                    CSSStyleDeclaration: !1,
                    CSSValueList: !1,
                    ClientRectList: !1,
                    DOMRectList: !1,
                    DOMStringList: !1,
                    DOMTokenList: !0,
                    DataTransferItemList: !1,
                    FileList: !1,
                    HTMLAllCollection: !1,
                    HTMLCollection: !1,
                    HTMLFormElement: !1,
                    HTMLSelectElement: !1,
                    MediaList: !0,
                    MimeTypeArray: !1,
                    NamedNodeMap: !1,
                    NodeList: !0,
                    PaintRequestList: !1,
                    Plugin: !1,
                    PluginArray: !1,
                    SVGLengthList: !1,
                    SVGNumberList: !1,
                    SVGPathSegList: !1,
                    SVGPointList: !1,
                    SVGStringList: !1,
                    SVGTransformList: !1,
                    SourceBufferList: !1,
                    StyleSheetList: !0,
                    TextTrackCueList: !1,
                    TextTrackList: !1,
                    TouchList: !1
                }, o = S(n), i = 0; i < o.length; i++) {
                var u, s = o[i],
                    a = n[s],
                    c = O[s],
                    f = c && c.prototype;
                if (f && (f[t] || j(f, t, r), f[e] || j(f, e, s), D[s] = r, a))
                    for (u in Y) f[u] || F(f, u, Y[u], !0)
            }
        }), t(function(t) {
            t.exports = function(t, e, r, n) {
                if (!(t instanceof e) || n !== undefined && n in t) throw TypeError(r + ": incorrect invocation!");
                return t
            }
        })),
        $ = t(function(t) {
            t.exports = function(t, e, r, n) {
                try {
                    return n ? e(d(r)[0], r[1]) : e(r)
                } catch (i) {
                    var o = t["return"];
                    throw o !== undefined && d(o.call(t)), i
                }
            }
        }),
        Q = t(function(t) {
            var e = P("iterator"),
                r = Array.prototype;
            t.exports = function(t) {
                return t !== undefined && (D.Array === t || r[e] === t)
            }
        }),
        Z = t(function(t) {
            var e = P("iterator");
            t.exports = R.getIteratorMethod = function(t) {
                if (t != undefined) return t[e] || t["@@iterator"] || D[A(t)]
            }
        }),
        tt = t(function(t, e) {
            var l = {},
                p = {};
            (e = t.exports = function(t, e, r, n, o) {
                var i, u, s, a, c = o ? function() {
                        return t
                    } : Z(t),
                    f = M(r, n, e ? 2 : 1),
                    h = 0;
                if ("function" != typeof c) throw TypeError(t + " is not iterable!");
                if (Q(c)) {
                    for (i = w(t.length); h < i; h++)
                        if ((a = e ? f(d(u = t[h])[0], u[1]) : f(t[h])) === l || a === p) return a
                } else
                    for (s = c.call(t); !(u = s.next()).done;)
                        if ((a = $(s, f, u.value, e)) === l || a === p) return a
            }).BREAK = l, e.RETURN = p
        }),
        et = t(function(t) {
            var o = P("species");
            t.exports = function(t, e) {
                var r, n = d(t).constructor;
                return n === undefined || (r = d(n)[o]) == undefined ? e : I(r)
            }
        }),
        rt = t(function(t) {
            t.exports = function(t, e, r) {
                var n = r === undefined;
                switch (e.length) {
                    case 0:
                        return n ? t() : t.call(r);
                    case 1:
                        return n ? t(e[0]) : t.call(r, e[0]);
                    case 2:
                        return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
                    case 3:
                        return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
                    case 4:
                        return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3])
                }
                return t.apply(r, e)
            }
        }),
        nt = t(function(t) {
            var n, e, r, o = O.process,
                i = O.setImmediate,
                u = O.clearImmediate,
                s = O.MessageChannel,
                a = O.Dispatch,
                c = 0,
                f = {},
                h = "onreadystatechange",
                l = function() {
                    var t = +this;
                    if (f.hasOwnProperty(t)) {
                        var e = f[t];
                        delete f[t], e()
                    }
                },
                p = function(t) {
                    l.call(t.data)
                };
            i && u || (i = function d(t) {
                for (var e = [], r = 1; arguments.length > r;) e.push(arguments[r++]);
                return f[++c] = function() {
                    rt("function" == typeof t ? t : Function(t), e)
                }, n(c), c
            }, u = function y(t) {
                delete f[t]
            }, "process" == v(o) ? n = function(t) {
                o.nextTick(M(l, t, 1))
            } : a && a.now ? n = function(t) {
                a.now(M(l, t, 1))
            } : s ? (r = (e = new s).port2, e.port1.onmessage = p, n = M(r.postMessage, r, 1)) : O.addEventListener && "function" == typeof postMessage && !O.importScripts ? (n = function(t) {
                O.postMessage(t + "", "*")
            }, O.addEventListener("message", p, !1)) : n = h in m("script") ? function(t) {
                G.appendChild(m("script"))[h] = function() {
                    G.removeChild(this), l.call(t)
                }
            } : function(t) {
                setTimeout(M(l, t, 1), 0)
            }), t.exports = {
                set: i,
                clear: u
            }
        }),
        ot = t(function(t) {
            var s = nt.set,
                a = O.MutationObserver || O.WebKitMutationObserver,
                c = O.process,
                f = O.Promise,
                h = "process" == v(c);
            t.exports = function() {
                var n, o, i, t = function() {
                    var t, e;
                    for (h && (t = c.domain) && t.exit(); n;) {
                        e = n.fn, n = n.next;
                        try {
                            e()
                        } catch (r) {
                            throw n ? i() : o = undefined, r
                        }
                    }
                    o = undefined, t && t.enter()
                };
                if (h) i = function() {
                    c.nextTick(t)
                };
                else if (a) {
                    var e = !0,
                        r = document.createTextNode("");
                    new a(t).observe(r, {
                        characterData: !0
                    }), i = function() {
                        r.data = e = !e
                    }
                } else if (f && f.resolve) {
                    var u = f.resolve();
                    i = function() {
                        u.then(t)
                    }
                } else i = function() {
                    s.call(O, t)
                };
                return function(t) {
                    var e = {
                        fn: t,
                        next: undefined
                    };
                    o && (o.next = e), n || (n = e, i()), o = e
                }
            }
        }),
        it = t(function(t) {
            "use strict";

            function e(t) {
                var r, n;
                this.promise = new t(function(t, e) {
                    if (r !== undefined || n !== undefined) throw TypeError("Bad Promise constructor");
                    r = t, n = e
                }), this.resolve = I(r), this.reject = I(n)
            }
            t.exports.f = function(t) {
                return new e(t)
            }
        }),
        ut = t(function(t) {
            t.exports = function(t) {
                try {
                    return {
                        e: !1,
                        v: t()
                    }
                } catch (e) {
                    return {
                        e: !0,
                        v: e
                    }
                }
            }
        }),
        st = t(function(t) {
            t.exports = function(t, e) {
                if (d(t), B(e) && e.constructor === t) return e;
                var r = it.f(t);
                return (0, r.resolve)(e), r.promise
            }
        }),
        at = t(function(t) {
            t.exports = function(t, e, r) {
                for (var n in e) F(t, n, e[n], r);
                return t
            }
        }),
        ct = t(function(t) {
            "use strict";
            var r = P("species");
            t.exports = function(t) {
                var e = O[t];
                n && e && !e[r] && c.f(e, r, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        }),
        ft = t(function(t) {
            var i = P("iterator"),
                u = !1;
            try {
                var e = [7][i]();
                e["return"] = function() {
                    u = !0
                }, Array.from(e, function() {
                    throw 2
                })
            } catch (s) {}
            t.exports = function(t, e) {
                if (!e && !u) return !1;
                var r = !1;
                try {
                    var n = [7],
                        o = n[i]();
                    o.next = function() {
                        return {
                            done: r = !0
                        }
                    }, n[i] = function() {
                        return o
                    }, t(n)
                } catch (s) {}
                return r
            }
        });
    t(function() {
        "use strict";
        var r, e, n, o, t = nt.set,
            i = ot(),
            u = "Promise",
            h = O.TypeError,
            s = O.process,
            a = O[u],
            c = "process" == A(s),
            f = function() {},
            l = e = it.f,
            p = !! function() {
                try {
                    var t = a.resolve(1),
                        e = (t.constructor = {})[P("species")] = function(t) {
                            t(f, f)
                        };
                    return (c || "function" == typeof PromiseRejectionEvent) && t.then(f) instanceof e
                } catch (r) {}
            }(),
            d = function(t) {
                var e;
                return !(!B(t) || "function" != typeof(e = t.then)) && e
            },
            y = function(f, r) {
                if (!f._n) {
                    f._n = !0;
                    var n = f._c;
                    i(function() {
                        for (var a = f._v, c = 1 == f._s, t = 0, e = function(t) {
                                var e, r, n = c ? t.ok : t.fail,
                                    o = t.resolve,
                                    i = t.reject,
                                    u = t.domain;
                                try {
                                    n ? (c || (2 == f._h && b(f), f._h = 1), !0 === n ? e = a : (u && u.enter(), e = n(a), u && u.exit()), e === t.promise ? i(h("Promise-chain cycle")) : (r = d(e)) ? r.call(e, o, i) : o(e)) : i(a)
                                } catch (s) {
                                    i(s)
                                }
                            }; n.length > t;) e(n[t++]);
                        f._c = [], f._n = !1, r && !f._h && v(f)
                    })
                }
            },
            v = function(i) {
                t.call(O, function() {
                    var t, e, r, n = i._v,
                        o = m(i);
                    if (o && (t = ut(function() {
                            c ? s.emit("unhandledRejection", n, i) : (e = O.onunhandledrejection) ? e({
                                promise: i,
                                reason: n
                            }) : (r = O.console) && r.error && r.error("Unhandled promise rejection", n)
                        }), i._h = c || m(i) ? 2 : 1), i._a = undefined, o && t.e) throw t.v
                })
            },
            m = function(t) {
                if (1 == t._h) return !1;
                for (var e, r = t._a || t._c, n = 0; r.length > n;)
                    if ((e = r[n++]).fail || !m(e.promise)) return !1;
                return !0
            },
            b = function(e) {
                t.call(O, function() {
                    var t;
                    c ? s.emit("rejectionHandled", e) : (t = O.onrejectionhandled) && t({
                        promise: e,
                        reason: e._v
                    })
                })
            },
            w = function(t) {
                var e = this;
                e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), y(e, !0))
            },
            g = function(r) {
                var n, o = this;
                if (!o._d) {
                    o._d = !0, o = o._w || o;
                    try {
                        if (o === r) throw h("Promise can't be resolved itself");
                        (n = d(r)) ? i(function() {
                            var t = {
                                _w: o,
                                _d: !1
                            };
                            try {
                                n.call(r, M(g, t, 1), M(w, t, 1))
                            } catch (e) {
                                w.call(t, e)
                            }
                        }): (o._v = r, o._s = 1, y(o, !1))
                    } catch (t) {
                        w.call({
                            _w: o,
                            _d: !1
                        }, t)
                    }
                }
            };
        p || (a = function x(t) {
            J(this, a, u, "_h"), I(t), r.call(this);
            try {
                t(M(g, this, 1), M(w, this, 1))
            } catch (e) {
                w.call(this, e)
            }
        }, (r = function _() {
            this._c = [], this._a = undefined, this._s = 0, this._d = !1, this._v = undefined, this._h = 0, this._n = !1
        }).prototype = at(a.prototype, {
            then: function E(t, e) {
                var r = l(et(this, a));
                return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = c ? s.domain : undefined, this._c.push(r), this._a && this._a.push(r), this._s && y(this, !1), r.promise
            },
            "catch": function(t) {
                return this.then(undefined, t)
            }
        }), n = function() {
            var t = new r;
            this.promise = t, this.resolve = M(g, t, 1), this.reject = M(w, t, 1)
        }, it.f = l = function(t) {
            return t === a || t === o ? new n(t) : e(t)
        }), U(U.G + U.W + U.F * !p, {
            Promise: a
        }), H(a, u), ct(u), o = R[u], U(U.S + U.F * !p, u, {
            reject: function T(t) {
                var e = l(this);
                return (0, e.reject)(t), e.promise
            }
        }), U(U.S + U.F * (k || !p), u, {
            resolve: function S(t) {
                return st(k && this === o ? a : this, t)
            }
        }), U(U.S + U.F * !(p && ft(function(t) {
            a.all(t)["catch"](f)
        })), u, {
            all: function j(t) {
                var u = this,
                    e = l(u),
                    s = e.resolve,
                    a = e.reject,
                    r = ut(function() {
                        var n = [],
                            o = 0,
                            i = 1;
                        tt(t, !1, function(t) {
                            var e = o++,
                                r = !1;
                            n.push(undefined), i++, u.resolve(t).then(function(t) {
                                r || (r = !0, n[e] = t, --i || s(n))
                            }, a)
                        }), --i || s(n)
                    });
                return r.e && a(r.v), e.promise
            },
            race: function L(t) {
                var e = this,
                    r = l(e),
                    n = r.reject,
                    o = ut(function() {
                        tt(t, !1, function(t) {
                            e.resolve(t).then(r.resolve, n)
                        })
                    });
                return o.e && n(o.v), r.promise
            }
        })
    }), t(function(t) {
        t.exports = R.Promise
    });
    ! function(t) {
        "use strict";

        function n(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function o(t) {
            return "string" != typeof t && (t = String(t)), t
        }

        function i(e) {
            var t = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: t === undefined,
                        value: t
                    }
                }
            };
            return m.iterable && (t[Symbol.iterator] = function() {
                return t
            }), t
        }

        function u(e) {
            this.map = {}, e instanceof u ? e.forEach(function(t, e) {
                this.append(e, t)
            }, this) : Array.isArray(e) ? e.forEach(function(t) {
                this.append(t[0], t[1])
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t])
            }, this)
        }

        function e(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function s(r) {
            return new Promise(function(t, e) {
                r.onload = function() {
                    t(r.result)
                }, r.onerror = function() {
                    e(r.error)
                }
            })
        }

        function r(t) {
            var e = new FileReader,
                r = s(e);
            return e.readAsArrayBuffer(t), r
        }

        function a(t) {
            var e = new FileReader,
                r = s(e);
            return e.readAsText(t), r
        }

        function c(t) {
            for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
            return r.join("")
        }

        function f(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function h() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t)
                    if ("string" == typeof t) this._bodyText = t;
                    else if (m.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (m.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (m.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (m.arrayBuffer && m.blob && w(t)) this._bodyArrayBuffer = f(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!m.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !g(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = f(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : m.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, m.blob && (this.blob = function() {
                var t = e(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? e(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(r)
            }), this.text = function() {
                var t = e(this);
                if (t) return t;
                if (this._bodyBlob) return a(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, m.formData && (this.formData = function() {
                return this.text().then(d)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function l(t) {
            var e = t.toUpperCase();
            return -1 < x.indexOf(e) ? e : t
        }

        function p(t, e) {
            var r = (e = e || {}).body;
            if (t instanceof p) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new u(t.headers)), this.method = t.method, this.mode = t.mode, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new u(e.headers)), this.method = l(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r)
        }

        function d(t) {
            var o = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var e = t.split("="),
                        r = e.shift().replace(/\+/g, " "),
                        n = e.join("=").replace(/\+/g, " ");
                    o.append(decodeURIComponent(r), decodeURIComponent(n))
                }
            }), o
        }

        function y(t) {
            var o = new u;
            return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                var e = t.split(":"),
                    r = e.shift().trim();
                if (r) {
                    var n = e.join(":").trim();
                    o.append(r, n)
                }
            }), o
        }

        function v(t, e) {
            e || (e = {}), this.type = "default", this.status = e.status === undefined ? 200 : e.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new u(e.headers), this.url = e.url || "", this._initBody(t)
        }
        if (!t.fetch) {
            var m = {
                searchParams: "URLSearchParams" in t,
                iterable: "Symbol" in t && "iterator" in Symbol,
                blob: "FileReader" in t && "Blob" in t && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData" in t,
                arrayBuffer: "ArrayBuffer" in t
            };
            if (m.arrayBuffer) var b = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                w = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                },
                g = ArrayBuffer.isView || function(t) {
                    return t && -1 < b.indexOf(Object.prototype.toString.call(t))
                };
            u.prototype.append = function(t, e) {
                t = n(t), e = o(e);
                var r = this.map[t];
                this.map[t] = r ? r + "," + e : e
            }, u.prototype["delete"] = function(t) {
                delete this.map[n(t)]
            }, u.prototype.get = function(t) {
                return t = n(t), this.has(t) ? this.map[t] : null
            }, u.prototype.has = function(t) {
                return this.map.hasOwnProperty(n(t))
            }, u.prototype.set = function(t, e) {
                this.map[n(t)] = o(e)
            }, u.prototype.forEach = function(t, e) {
                for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
            }, u.prototype.keys = function() {
                var r = [];
                return this.forEach(function(t, e) {
                    r.push(e)
                }), i(r)
            }, u.prototype.values = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t)
                }), i(e)
            }, u.prototype.entries = function() {
                var r = [];
                return this.forEach(function(t, e) {
                    r.push([e, t])
                }), i(r)
            }, m.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
            var x = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            p.prototype.clone = function() {
                return new p(this, {
                    body: this._bodyInit
                })
            }, h.call(p.prototype), h.call(v.prototype), v.prototype.clone = function() {
                return new v(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new u(this.headers),
                    url: this.url
                })
            }, v.error = function() {
                var t = new v(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var _ = [301, 302, 303, 307, 308];
            v.redirect = function(t, e) {
                if (-1 === _.indexOf(e)) throw new RangeError("Invalid status code");
                return new v(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = u, t.Request = p, t.Response = v, t.fetch = function(o, i) {
                return new Promise(function(r, t) {
                    var e = new p(o, i),
                        n = new XMLHttpRequest;
                    n.onload = function() {
                        var t = {
                            status: n.status,
                            statusText: n.statusText,
                            headers: y(n.getAllResponseHeaders() || "")
                        };
                        t.url = "responseURL" in n ? n.responseURL : t.headers.get("X-Request-URL");
                        var e = "response" in n ? n.response : n.responseText;
                        r(new v(e, t))
                    }, n.onerror = function() {
                        t(new TypeError("Network request failed"))
                    }, n.ontimeout = function() {
                        t(new TypeError("Network request failed"))
                    }, n.open(e.method, e.url, !0), "include" === e.credentials ? n.withCredentials = !0 : "omit" === e.credentials && (n.withCredentials = !1), "responseType" in n && m.blob && (n.responseType = "blob"), e.headers.forEach(function(t, e) {
                        n.setRequestHeader(e, t)
                    }), n.send("undefined" == typeof e._bodyInit ? null : e._bodyInit)
                })
            }, t.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : this),
    function(t) {
        "use strict";

        function i(t, e, r, n) {
            var o = e && e.prototype instanceof s ? e : s,
                i = Object.create(o.prototype),
                u = new l(n || []);
            return i._invoke = a(t, r, u), i
        }

        function f(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch (n) {
                return {
                    type: "throw",
                    arg: n
                }
            }
        }

        function s() {}

        function r() {}

        function e() {}

        function n(t) {
            ["next", "throw", "return"].forEach(function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            })
        }

        function u(s) {
            function a(t, e, r, n) {
                var o = f(s[t], s, e);
                if ("throw" !== o.type) {
                    var i = o.arg,
                        u = i.value;
                    return u && "object" == typeof u && m.call(u, "__await") ? Promise.resolve(u.__await).then(function(t) {
                        a("next", t, r, n)
                    }, function(t) {
                        a("throw", t, r, n)
                    }) : Promise.resolve(u).then(function(t) {
                        i.value = t, r(i)
                    }, function(t) {
                        return a("throw", t, r, n)
                    })
                }
                n(o.arg)
            }

            function t(r, n) {
                function t() {
                    return new Promise(function(t, e) {
                        a(r, n, t, e)
                    })
                }
                return e = e ? e.then(t, t) : t()
            }
            var e;
            this._invoke = t
        }

        function a(i, u, s) {
            var a = T;
            return function c(t, e) {
                if (a === j) throw new Error("Generator is already running");
                if (a === L) {
                    if ("throw" === t) throw e;
                    return d()
                }
                for (s.method = t, s.arg = e;;) {
                    var r = s.delegate;
                    if (r) {
                        var n = h(r, s);
                        if (n) {
                            if (n === O) continue;
                            return n
                        }
                    }
                    if ("next" === s.method) s.sent = s._sent = s.arg;
                    else if ("throw" === s.method) {
                        if (a === T) throw a = L, s.arg;
                        s.dispatchException(s.arg)
                    } else "return" === s.method && s.abrupt("return", s.arg);
                    a = j;
                    var o = f(i, u, s);
                    if ("normal" === o.type) {
                        if (a = s.done ? L : S, o.arg === O) continue;
                        return {
                            value: o.arg,
                            done: s.done
                        }
                    }
                    "throw" === o.type && (a = L, s.method = "throw", s.arg = o.arg)
                }
            }
        }

        function h(t, e) {
            var r = t.iterator[e.method];
            if (r === y) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator["return"] && (e.method = "return", e.arg = y, h(t, e), "throw" === e.method)) return O;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return O
            }
            var n = f(r, t.iterator, e.arg);
            if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, O;
            var o = n.arg;
            return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = y), e.delegate = null, O) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, O)
        }

        function o(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function c(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function l(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(o, this), this.reset(!0)
        }

        function p(t) {
            if (t) {
                var e = t[w];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var r = -1,
                        n = function n() {
                            for (; ++r < t.length;)
                                if (m.call(t, r)) return n.value = t[r], n.done = !1, n;
                            return n.value = y, n.done = !0, n
                        };
                    return n.next = n
                }
            }
            return {
                next: d
            }
        }

        function d() {
            return {
                value: y,
                done: !0
            }
        }
        var y, v = Object.prototype,
            m = v.hasOwnProperty,
            b = "function" == typeof Symbol ? Symbol : {},
            w = b.iterator || "@@iterator",
            g = b.asyncIterator || "@@asyncIterator",
            x = b.toStringTag || "@@toStringTag",
            _ = "object" == typeof module,
            E = t.regeneratorRuntime;
        if (E) _ && (module.exports = E);
        else {
            (E = t.regeneratorRuntime = _ ? module.exports : {}).wrap = i;
            var T = "suspendedStart",
                S = "suspendedYield",
                j = "executing",
                L = "completed",
                O = {},
                P = {};
            P[w] = function() {
                return this
            };
            var A = Object.getPrototypeOf,
                B = A && A(A(p([])));
            B && B !== v && m.call(B, w) && (P = B);
            var R = e.prototype = s.prototype = Object.create(P);
            r.prototype = R.constructor = e, e.constructor = r, e[x] = r.displayName = "GeneratorFunction", E.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === r || "GeneratorFunction" === (e.displayName || e.name))
            }, E.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e, x in t || (t[x] = "GeneratorFunction")), t.prototype = Object.create(R), t
            }, E.awrap = function(t) {
                return {
                    __await: t
                }
            }, n(u.prototype), u.prototype[g] = function() {
                return this
            }, E.AsyncIterator = u, E.async = function(t, e, r, n) {
                var o = new u(i(t, e, r, n));
                return E.isGeneratorFunction(e) ? o : o.next().then(function(t) {
                    return t.done ? t.value : o.next()
                })
            }, n(R), R[x] = "Generator", R[w] = function() {
                return this
            }, R.toString = function() {
                return "[object Generator]"
            }, E.keys = function(e) {
                var r = [];
                for (var t in e) r.push(t);
                return r.reverse(),
                    function n() {
                        for (; r.length;) {
                            var t = r.pop();
                            if (t in e) return n.value = t, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, E.values = p, l.prototype = {
                constructor: l,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = y, this.done = !1, this.delegate = null, this.method = "next", this.arg = y, this.tryEntries.forEach(c), !t)
                        for (var e in this) "t" === e.charAt(0) && m.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = y)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(r) {
                    function t(t, e) {
                        return i.type = "throw", i.arg = r, n.next = t, e && (n.method = "next", n.arg = y), !!e
                    }
                    if (this.done) throw r;
                    for (var n = this, e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e],
                            i = o.completion;
                        if ("root" === o.tryLoc) return t("end");
                        if (o.tryLoc <= this.prev) {
                            var u = m.call(o, "catchLoc"),
                                s = m.call(o, "finallyLoc");
                            if (u && s) {
                                if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                            } else if (u) {
                                if (this.prev < o.catchLoc) return t(o.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && m.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, O) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), O
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), c(r), O
                    }
                },
                "catch": function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                c(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: p(t),
                        resultName: e,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = y), O
                }
            }
        }
    }(function() {
        return this || "object" == typeof self && self
    }() || Function("return this")());
    var ht = t(function(t, e) {
        "use strict";

        function r() {
            var t = new RegExp(a + "=([^;]+)").exec(document.cookie);
            return t ? unescape(t[1]).toLowerCase() : null
        }

        function n(t, e) {
            var r = 1 < arguments.length && e !== undefined ? arguments[1] : 720,
                n = (new Date).getTime(),
                o = new Date(n + 3600 * r * 1e3);
            document.cookie = a + "=" + t + "; expires=" + o.toGMTString() + "; path=/"
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, i, u = (o = p(regeneratorRuntime.mark(function c() {
                return regeneratorRuntime.wrap(function e(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (null !== r()) return t.abrupt("return");
                            t.next = 3;
                            break;
                        case 3:
                            return t.next = 5, s();
                        case 5:
                            !0 === t.sent ? n("true") : n("pending", 1);
                        case 7:
                        case "end":
                            return t.stop()
                    }
                }, c, this)
            })), function f() {
                return o.apply(this, arguments)
            }),
            s = (i = p(regeneratorRuntime.mark(function h() {
                var e, r, n;
                return regeneratorRuntime.wrap(function o(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, fetch("https://" + window.ShopifyPay.apiHost + "/session?v=1", {
                                credentials: "include"
                            });
                        case 3:
                            return e = t.sent, t.next = 6, e.json();
                        case 6:
                            return r = t.sent, n = r.eligible, t.abrupt("return", n);
                        case 11:
                            return t.prev = 11, t.t0 = t["catch"](0), t.abrupt("return", !1);
                        case 14:
                        case "end":
                            return t.stop()
                    }
                }, h, this, [
                    [0, 11]
                ])
            })), function l() {
                return i.apply(this, arguments)
            });
        e.setRedirectState = n;
        var a = "shopify_pay_redirect";
        e["default"] = u
    });
    t(function() {
        "use strict";
        (0, e(ht)["default"])()
    })
}("undefined" != typeof global ? global : "undefined" != typeof window && window);