! function() {
    var e = function(e) {
            var t = {
                exports: {}
            };
            return e.call(t.exports, t, t.exports), t.exports
        },
        c = function() {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), e
            }
        }(),
        p = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        w = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        };
    e(function(e, t) {
        "use strict";

        function d(e, t) {
            if (e.length != t.length) throw Error("Payload body and response have different number of items");
            for (var n = 0; n < t.length; n++) {
                var r = 1,
                    a = t[n],
                    o = e[n];
                if (a.id != o.id) throw Error("Inconsistent IDs between server response and request payload");
                a.quantity && (r = a.quantity), l(o, r)
            }
        }

        function s(e, t) {
            for (var n = new Array(t), r = 0; r < t; r++) n[r] = {};
            var a = !0,
                o = !1,
                i = undefined;
            try {
                for (var s, c = decodeURI(e).split("&")[Symbol.iterator](); !(a = (s = c.next()).done); a = !0) {
                    var d = s.value.split("="),
                        u = d[0].match(/items\[(\d+)\]\[(\w+)\].*/);
                    if (u) {
                        var l = u[1],
                            f = u[2];
                        "quantity" === f ? n[l].quantity = d[1] : "id" === f && (n[l].id = d[1])
                    }
                }
            } catch (y) {
                o = !0, i = y
            } finally {
                try {
                    !a && c["return"] && c["return"]()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }

        function u(e) {
            if (!e) return 1;
            try {
                return JSON.parse(e).quantity || 1
            } catch (a) {
                if (e instanceof FormData) {
                    if (e.has("quantity")) return e.get("quantity")
                } else
                    for (var t = e.split("&"), n = 0; n < t.length; n++) {
                        var r = t[n].split("=");
                        if ("quantity" === r[0]) return r[1]
                    }
            }
            return 1
        }

        function l(e, t) {
            var n = y({
                variantId: String(e.id),
                productId: e.product_id,
                currency: window.ShopifyAnalytics.meta.currency,
                quantity: String(t || 1),
                price: e.price / 100,
                name: e.title,
                sku: e.sku,
                brand: e.vendor,
                variant: e.variant_title,
                category: e.product_type
            }, f());
            window.ShopifyAnalytics.lib.track("Added Product", n);
            var r = y({
                referer: window.location.href
            }, n);
            window.ShopifyAnalytics.lib.track("monorail://trekkie_storefront_track_added_product/1.1", r)
        }

        function f() {
            var e = {};
            return window.ShopifyAnalytics.meta.page && (e = {
                pageType: window.ShopifyAnalytics.meta.page.pageType,
                resourceType: window.ShopifyAnalytics.meta.page.resourceType,
                resourceId: window.ShopifyAnalytics.meta.page.resourceId
            }), e
        }

        function y(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, r, a, h = function() {
            function a(e, t, n, r) {
                p(this, a), this.xhr = e, this.url = t, this.method = n, this.body = r
            }
            return c(a, null, [{
                key: "handleXhrOpen",
                value: function e() {}
            }]), c(a, [{
                key: "onReadyStateChange",
                value: function t() {
                    this.xhr.readyState === XMLHttpRequest.DONE && this.handleXhrDone({
                        method: this.method,
                        url: this.url,
                        body: this.body,
                        xhr: this.xhr
                    }), this.oldOnReadyStateChange && this.oldOnReadyStateChange()
                }
            }, {
                key: "handleXhrDone",
                value: function n(r) {
                    var t = this;
                    try {
                        switch (r.url) {
                            case "/cart/add":
                            case "/cart/add.js":
                            case "/cart/add.json":
                                a._parsePayloadResponse(r, function(e) {
                                    var t = Object.keys(e);
                                    if (1 === t.length && "items" === t[0]) {
                                        var n = e.items;
                                        d(n, s(r.body, n.length))
                                    } else l(e, u(r.body))
                                });
                                break;
                            case "/cart/change.js":
                            case "/cart/clear.js":
                            case "/cart.js":
                                a._parsePayloadResponse(r, function(e) {
                                    return t.facebookMessengerPayment(e)
                                })
                        }
                    } catch (e) {
                        console && console.warn && console.warn("[shop_events_listener] Error in handleXhrDone:  " + e.message)
                    }
                }
            }, {
                key: "facebookMessengerPayment",
                value: function r(e) {
                    window.MessengerExtensions && window.MessengerExtensions.isInExtension() && window.MessengerExtensions.updateCart(function() {}, function() {}, e.item_count, "https://" + window.location.hostname + "/cart", 300)
                }
            }], [{
                key: "parseBlobToJson",
                value: function o(e, t) {
                    var n = new FileReader;
                    n.addEventListener("loadend", function() {
                        return t(JSON.parse(String.fromCharCode.apply(String, w(new Uint8Array(n.result)))))
                    }), n.readAsArrayBuffer(e)
                }
            }, {
                key: "_parsePayloadResponse",
                value: function i(e, t) {
                    e.xhr.response instanceof Blob ? a.parseBlobToJson(e.xhr.response, t) : e.xhr.responseText && t(JSON.parse(e.xhr.responseText))
                }
            }]), a
        }();
        t["default"] = h,
            function() {
                function r(e, t, n) {
                    window.jQuery && window.jQuery(e).bind ? window.jQuery(e).bind(t, n) : e.addEventListener ? e.addEventListener(t, n) : e.attachEvent && e.attachEvent("on" + t, n)
                }

                function a(e) {
                    if (!((e = e || window.event).defaultPrevented || e.isDefaultPrevented && e.isDefaultPrevented())) {
                        var t = e.target || e.srcElement;
                        if (t && (t.getAttribute("action") || t.getAttribute("href"))) try {
                            var n = c((t.id.options ? t.id.options[t.id.selectedIndex] : t.id).value);
                            n.quantity = String(t.quantity ? t.quantity.value : 1), window.ShopifyAnalytics.lib.track("Added Product", n);
                            var r = y({
                                referer: window.location.href
                            }, n);
                            window.ShopifyAnalytics.lib.track("monorail://trekkie_storefront_track_added_product/1.1", r)
                        } catch (a) {
                            console && console.warn && console.warn("[shop_events_listener] Error in handleSubmitCartAdd: " + a.message)
                        }
                    }
                }

                function o(e) {
                    var t = (e = e || window.event).target || e.srcElement;
                    if (t && t.getAttribute("action")) try {
                        window.ShopifyAnalytics.lib.track("Added Payment", {
                            currency: window.ShopifyAnalytics.meta.currency,
                            total: window.ShopifyAnalytics.meta.checkout.payment_due / 100
                        })
                    } catch (n) {
                        console && console.warn && console.warn("[shop_events_listener] Error in handleSubmitToPaymentAdd: " + n.message)
                    }
                }

                function i(e) {
                    s((e = e || window.event).currentTarget)
                }

                function s(e) {
                    try {
                        var t = void 0;
                        if (!(t = e.id.options && e.id.options[e.id.selectedIndex] ? e.id.options[e.id.selectedIndex] : e.id)) return;
                        var n = t.value;
                        if (window.ShopifyAnalytics.meta.selectedVariantId && window.ShopifyAnalytics.meta.selectedVariantId == n) return;
                        var r = c(window.ShopifyAnalytics.meta.selectedVariantId = n);
                        window.ShopifyAnalytics.lib.track("Viewed Product Variant", r)
                    } catch (a) {
                        console && console.warn && console.warn("[shop_events_listener] Error in trackViewedProductVariant: " + a.message)
                    }
                }

                function c(e) {
                    var t = y(n(e), f());
                    return t.currency = window.ShopifyAnalytics.meta.currency, t
                }

                function n(e) {
                    var t = void 0,
                        n = window.ShopifyAnalytics.meta.product;
                    if (n) {
                        t = {
                            productId: n.id,
                            productGid: n.gid,
                            brand: n.vendor,
                            category: n.type
                        };
                        for (var r = 0; r < n.variants.length; r++)
                            if (n.variants[r].id == e) {
                                var a = n.variants[r];
                                t = y(t, {
                                    variantId: e,
                                    price: a.price / 100,
                                    name: a.name,
                                    sku: a.sku,
                                    variant: a.public_title
                                })
                            }
                    } else t = {
                        variantId: e
                    };
                    return t
                }
                r(window, "load", function() {
                    for (var e = 0; e < document.forms.length; e++) {
                        var t = document.forms[e].getAttribute("action");
                        t && 0 <= t.indexOf("/cart/add") && (r(document.forms[e], "submit", a), r(document.forms[e], "change", i), s(document.forms[e]));
                        var n = document.forms[e].elements.previous_step;
                        n && "payment_method" === n.value && r(document.forms[e], "submit", o)
                    }
                })
            }(), n = XMLHttpRequest, r = n.prototype.open, a = n.prototype.send, n.prototype.open = function(e, t) {
                this._url = t, this._method = e, h.handleXhrOpen(), r.apply(this, arguments)
            }, n.prototype.send = function(e) {
                var t = new h(this, this._url, this._method, e);
                this.addEventListener ? this.addEventListener("readystatechange", t.onReadyStateChange.bind(t), !1) : (t.oldOnReadyStateChange = this.onreadystatechange, this.onreadystatechange = t.onReadyStateChange), a.call(this, e)
            },
            function(e, t) {
                function o(e, n) {
                    e.clone().json().then(function(e) {
                        var t = n.items;
                        return d(e.items, t), e
                    })["catch"](c)
                }

                function i(e) {
                    e.clone().json().then(function(e) {
                        return h.prototype.facebookMessengerPayment(e)
                    })["catch"](c)
                }

                function s(e, t) {
                    var n = u(t);
                    e.clone().json().then(function(e) {
                        return l(e, n)
                    })["catch"](c)
                }

                function c(e) {
                    console && console.warn && console.warn("[shop_events_listener] Error in handleFetchRequest:  " + e.message)
                }
                "function" == typeof t && (e.fetch = function() {
                    var a = arguments;
                    return t.apply(this, Array.prototype.slice.call(arguments)).then(function(e) {
                        if (!e.ok) return e;
                        try {
                            switch (!0) {
                                case e.url.endsWith("/cart/add.js"):
                                case e.url.endsWith("/cart/add.json"):
                                case e.url.endsWith("/cart/add"):
                                    try {
                                        var t = JSON.parse(a[1].body),
                                            n = Object.keys(t);
                                        if (1 === n.length && "items" === n[0]) {
                                            o(e, t);
                                            break
                                        }
                                    } catch (r) {}
                                    s(e, a[1].body);
                                    break;
                                case e.url.includes("/cart/change.js"):
                                case e.url.includes("/cart/clear.js"):
                                case e.url.includes("/cart.js"):
                                    i(e)
                            }
                        } catch (r) {
                            c(r)
                        }
                        return e
                    })
                })
            }(window, window.fetch)
    })
}("undefined" != typeof global ? global : "undefined" != typeof window && window);