! function(n) {
    "use strict";
    var t, e, o, r;
    ! function(n) {
        n.TRACKING_LOADED = "trackingConsentLoaded", n.TRACKING_ACCEPTED = "trackingConsentAccepted", n.TRACKING_DECLINED = "trackingConsentDeclined", n.TRACKING_RESET = "trackingConsentReset"
    }(t || (t = {})),
    function(n) {
        n.ACCEPTED = "yes", n.DECLINED = "no", n.NO_INTERACTION = "no_interaction", n.NO_VALUE = ""
    }(e || (e = {})),
    function(n) {
        n.GDPR = "GDPR", n.CCPA = "CCPA", n.NO_VALUE = ""
    }(o || (o = {})),
    function(n) {
        n.CCPA_BLOCK_ALL = "CCPA_BLOCK_ALL", n.GDPR = "GDPR"
    }(r || (r = {}));

    function c() {
        const n = document.cookie ? document.cookie.split("; ") : [];
        let t = void 0;
        return n.forEach(n => {
            const [e, o] = n.split("=");
            if ("_tracking_consent" === decodeURIComponent(e)) {
                var r = JSON.parse(decodeURIComponent(o));
                t = r
            }
        }), t
    }

    function s(n, t, e) {
        const o = new XMLHttpRequest,
            r = "https://" + document.location.host + "/set_tracking_consent.json",
            c = JSON.stringify(n);
        o.open("POST", r, !0), o.setRequestHeader("Content-Type", "application/json"), o.onreadystatechange = function() {
            if (4 !== o.readyState) return;
            const n = 0 === o.status || 200 >= o.status && o.status < 400;
            let r;
            try {
                r = JSON.parse(o.responseText)
            } catch (n) {
                r = {
                    error: "Unknown error"
                }
            }
            n ? (e && document.dispatchEvent(new CustomEvent(e, {
                detail: {}
            })), t(null, r)) : t(r)
        }, o.send(c)
    }

    function i(n, e) {
        if (null == n || "boolean" != typeof n) throw TypeError("setTrackingConsent must be called with a boolean consent value");
        if (null == e || "function" != typeof e) throw TypeError("setTrackingConsent must be called with a callback function");
        return !0 === n ? s({
            consent: !0
        }, e, t.TRACKING_ACCEPTED) : s({
            consent: !1
        }, e, t.TRACKING_DECLINED)
    }

    function u() {
        try {
            const t = c();
            return t && t.consent === e.ACCEPTED || t && t.consent === e.DECLINED || t && t.consent === e.NO_VALUE ? (n = t.consent) === e.NO_VALUE ? e.NO_INTERACTION : n : e.NO_VALUE
        } catch (n) {
            return !1
        }
        var n
    }

    function a() {
        var n;
        try {
            const t = c(),
                e = (null == t ? void 0 : t.regulation) === o.CCPA ? r.CCPA_BLOCK_ALL : t.regulation;
            return Boolean(null === (n = null == t ? void 0 : t.prefs) || void 0 === n ? void 0 : n.limit.includes(e))
        } catch (n) {
            return !1
        }
    }

    function C() {
        try {
            const n = c();
            return null == n ? void 0 : n.prefs
        } catch (n) {
            return !1
        }
    }

    function E() {
        try {
            const n = c();
            return !!(!n || n && n.consent === e.ACCEPTED || function() {
                const n = c();
                switch (f().toUpperCase()) {
                    case o.NO_VALUE:
                        return n.consent !== e.DECLINED;
                    case o.GDPR:
                        return n.consent !== e.DECLINED && n.consent !== e.NO_VALUE;
                    default:
                        return !0
                }
            }())
        } catch (n) {
            return !1
        }
    }

    function l() {
        try {
            return !(c() && ! function() {
                switch (f().toUpperCase()) {
                    case o.CCPA:
                        return !a();
                    default:
                        return !0
                }
            }())
        } catch (n) {
            return !1
        }
    }

    function f() {
        const n = c();
        if (n && n.regulation) switch (n.regulation.toUpperCase()) {
            case o.GDPR:
                return o.GDPR;
            case o.CCPA:
                return o.CCPA;
            default:
                return ""
        }
        return ""
    }

    function d() {
        return f() === o.GDPR && a() && u() === e.NO_INTERACTION
    }

    function A() {
        return {
            getTrackingConsent: u,
            setTrackingConsent: i,
            userCanBeTracked: E,
            getRegulation: f,
            isRegulationEnforced: a,
            getShopPrefs: C,
            shouldShowGDPRBanner: d,
            userDataCanBeExported: l
        }
    }
    window.Shopify = window.Shopify ? window.Shopify : {}, window.Shopify.customerPrivacy = window.Shopify.trackingConsent = A(), n.CONSENT_COOKIE_NAME = "_tracking_consent", n.shopifyConsentAPI = A
}({});
//# sourceMappingURL=consent-tracking-api.js.map