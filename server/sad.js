! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.io = e() : t.io = e() }(this, function() {
        return function(t) {
                function e(r) { if (n[r]) return n[r].exports; var o = n[r] = { exports: {}, id: r, loaded: !1 }; return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports } var n = {}; return e.m = t, e.c = n, e.p = "", e(0) }([function(t, e, n) {
                        function r(t, e) { "object" == typeof t && (e = t, t = void 0), e = e || {}; var n, r = o(t),
                                i = r.source,
                                u = r.id,
                                p = r.path,
                                h = c[u] && p in c[u].nsps,
                                f = e.forceNew || e["force new connection"] || !1 === e.multiplex || h; return f ? (a("ignoring socket cache for %s", i), n = s(i, e)) : (c[u] || (a("new io instance for %s", i), c[u] = s(i, e)), n = c[u]), r.query && !e.query && (e.query = r.query), n.socket(r.path, e) } var o = n(1),
                            i = n(7),
                            s = n(15),
                            a = n(3)("socket.io-client");
                        t.exports = e = r; var c = e.managers = {};
                        e.protocol = i.protocol, e.connect = r, e.Manager = n(15), e.Socket = n(39) }, function(t, e, n) {
                        function r(t, e) { var n = t;
                            e = e || "undefined" != typeof location && location, null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t), t = "undefined" != typeof e ? e.protocol + "//" + t : "https://" + t), i("parse %s", t), n = o(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/"; var r = n.host.indexOf(":") !== -1,
                                s = r ? "[" + n.host + "]" : n.host; return n.id = n.protocol + "://" + s + ":" + n.port, n.href = n.protocol + "://" + s + (e && e.port === n.port ? "" : ":" + n.port), n } var o = n(2),
                            i = n(3)("socket.io-client:url");
                        t.exports = r }, function(t, e) { var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                            r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                        t.exports = function(t) { var e = t,
                                o = t.indexOf("["),
                                i = t.indexOf("]");
                            o != -1 && i != -1 && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length)); for (var s = n.exec(t || ""), a = {}, c = 14; c--;) a[r[c]] = s[c] || ""; return o != -1 && i != -1 && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a } }, function(t, e, n) {
                        (function(r) { "use strict";

                            function o() { return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)) }

                            function i(e) { if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), this.useColors) { var n = "color: " + this.color;
                                    e.splice(1, 0, n, "color: inherit"); var r = 0,
                                        o = 0;
                                    e[0].replace(/%[a-zA-Z%]/g, function(t) { "%%" !== t && (r++, "%c" === t && (o = r)) }), e.splice(o, 0, n) } }

                            function s() { var t; return "object" === ("undefined" == typeof console ? "undefined" : p(console)) && console.log && (t = console).log.apply(t, arguments) }

                            function a(t) { try { t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug") } catch (n) {} }

                            function c() { var t = void 0; try { t = e.storage.getItem("debug") } catch (n) {} return !t && "undefined" != typeof r && "env" in r && (t = r.env.DEBUG), t }

                            function u() { try { return localStorage } catch (t) {} } var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
                            e.log = s, e.formatArgs = i, e.save = a, e.load = c, e.useColors = o, e.storage = u(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.exports = n(5)(e); var h = t.exports.formatters;
                            h.j = function(t) { try { return JSON.stringify(t) } catch (e) { return "[UnexpectedJSONParseError]: " + e.message } } }).call(e, n(4)) }, function(t, e) {
                        function n() { throw new Error("setTimeout has not been defined") }

                        function r() { throw new Error("clearTimeout has not been defined") }

                        function o(t) { if (p === setTimeout) return setTimeout(t, 0); if ((p === n || !p) && setTimeout) return p = setTimeout, setTimeout(t, 0); try { return p(t, 0) } catch (e) { try { return p.call(null, t, 0) } catch (e) { return p.call(this, t, 0) } } }

                        function i(t) { if (h === clearTimeout) return clearTimeout(t); if ((h === r || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t); try { return h(t) } catch (e) { try { return h.call(null, t) } catch (e) { return h.call(this, t) } } }

                        function s() { y && l && (y = !1, l.length ? d = l.concat(d) : m = -1, d.length && a()) }

                        function a() { if (!y) { var t = o(s);
                                y = !0; for (var e = d.length; e;) { for (l = d, d = []; ++m < e;) l && l[m].run();
                                    m = -1, e = d.length }
                                l = null, y = !1, i(t) } }

                        function c(t, e) { this.fun = t, this.array = e }

                        function u() {} var p, h, f = t.exports = {};! function() { try { p = "function" == typeof setTimeout ? setTimeout : n } catch (t) { p = n } try { h = "function" == typeof clearTimeout ? clearTimeout : r } catch (t) { h = r } }(); var l, d = [],
                            y = !1,
                            m = -1;
                        f.nextTick = function(t) { var e = new Array(arguments.length - 1); if (arguments.length > 1)
                                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                            d.push(new c(t, e)), 1 !== d.length || y || o(a) }, c.prototype.run = function() { this.fun.apply(null, this.array) }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function(t) { return [] }, f.binding = function(t) { throw new Error("process.binding is not supported") }, f.cwd = function() { return "/" }, f.chdir = function(t) { throw new Error("process.chdir is not supported") }, f.umask = function() { return 0 } }, function(t, e, n) { "use strict";

                        function r(t) { if (Array.isArray(t)) { for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e]; return n } return Array.from(t) }

                        function o(t) {
                            function e(t) { for (var e = 0, n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n), e |= 0; return o.colors[Math.abs(e) % o.colors.length] }

                            function o(t) {
                                function n() { for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i]; if (n.enabled) { var s = n,
                                            a = Number(new Date),
                                            c = a - (r || a);
                                        s.diff = c, s.prev = r, s.curr = a, r = a, e[0] = o.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O"); var u = 0;
                                        e[0] = e[0].replace(/%([a-zA-Z%])/g, function(t, n) { if ("%%" === t) return t;
                                            u++; var r = o.formatters[n]; if ("function" == typeof r) { var i = e[u];
                                                t = r.call(s, i), e.splice(u, 1), u-- } return t }), o.formatArgs.call(s, e); var p = s.log || o.log;
                                        p.apply(s, e) } } var r = void 0; return n.namespace = t, n.enabled = o.enabled(t), n.useColors = o.useColors(), n.color = e(t), n.destroy = i, n.extend = s, "function" == typeof o.init && o.init(n), o.instances.push(n), n }

                            function i() { var t = o.instances.indexOf(this); return t !== -1 && (o.instances.splice(t, 1), !0) }

                            function s(t, e) { var n = o(this.namespace + ("undefined" == typeof e ? ":" : e) + t); return n.log = this.log, n }

                            function a(t) { o.save(t), o.names = [], o.skips = []; var e = void 0,
                                    n = ("string" == typeof t ? t : "").split(/[\s,]+/),
                                    r = n.length; for (e = 0; e < r; e++) n[e] && (t = n[e].replace(/\*/g, ".*?"), "-" === t[0] ? o.skips.push(new RegExp("^" + t.substr(1) + "$")) : o.names.push(new RegExp("^" + t + "$"))); for (e = 0; e < o.instances.length; e++) { var i = o.instances[e];
                                    i.enabled = o.enabled(i.namespace) } }

                            function c() { var t = [].concat(r(o.names.map(p)), r(o.skips.map(p).map(function(t) { return "-" + t }))).join(","); return o.enable(""), t }

                            function u(t) { if ("*" === t[t.length - 1]) return !0; var e = void 0,
                                    n = void 0; for (e = 0, n = o.skips.length; e < n; e++)
                                    if (o.skips[e].test(t)) return !1;
                                for (e = 0, n = o.names.length; e < n; e++)
                                    if (o.names[e].test(t)) return !0;
                                return !1 }

                            function p(t) { return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, "*") }

                            function h(t) { return t instanceof Error ? t.stack || t.message : t } return o.debug = o, o["default"] = o, o.coerce = h, o.disable = c, o.enable = a, o.enabled = u, o.humanize = n(6), Object.keys(t).forEach(function(e) { o[e] = t[e] }), o.instances = [], o.names = [], o.skips = [], o.formatters = {}, o.selectColor = e, o.enable(o.load()), o }
                        t.exports = o }, function(t, e) {
                        function n(t) { if (t = String(t), !(t.length > 100)) { var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t); if (e) { var n = parseFloat(e[1]),
                                        r = (e[2] || "ms").toLowerCase(); switch (r) {
                                        case "years":
                                        case "year":
                                        case "yrs":
                                        case "yr":
                                        case "y":
                                            return n * h;
                                        case "weeks":
                                        case "week":
                                        case "w":
                                            return n * p;
                                        case "days":
                                        case "day":
                                        case "d":
                                            return n * u;
                                        case "hours":
                                        case "hour":
                                        case "hrs":
                                        case "hr":
                                        case "h":
                                            return n * c;
                                        case "minutes":
                                        case "minute":
                                        case "mins":
                                        case "min":
                                        case "m":
                                            return n * a;
                                        case "seconds":
                                        case "second":
                                        case "secs":
                                        case "sec":
                                        case "s":
                                            return n * s;
                                        case "milliseconds":
                                        case "millisecond":
                                        case "msecs":
                                        case "msec":
                                        case "ms":
                                            return n;
                                        default:
                                            return } } } }

                        function r(t) { var e = Math.abs(t); return e >= u ? Math.round(t / u) + "d" : e >= c ? Math.round(t / c) + "h" : e >= a ? Math.round(t / a) + "m" : e >= s ? Math.round(t / s) + "s" : t + "ms" }

                        function o(t) { var e = Math.abs(t); return e >= u ? i(t, e, u, "day") : e >= c ? i(t, e, c, "hour") : e >= a ? i(t, e, a, "minute") : e >= s ? i(t, e, s, "second") : t + " ms" }

                        function i(t, e, n, r) { var o = e >= 1.5 * n; return Math.round(t / n) + " " + r + (o ? "s" : "") } var s = 1e3,
                            a = 60 * s,
                            c = 60 * a,
                            u = 24 * c,
                            p = 7 * u,
                            h = 365.25 * u;
                        t.exports = function(t, e) { e = e || {}; var i = typeof t; if ("string" === i && t.length > 0) return n(t); if ("number" === i && isFinite(t)) return e["long"] ? o(t) : r(t); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t)) } }, function(t, e, n) {
                        function r() {}

                        function o(t) { var n = "" + t.type; if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += t.attachments + "-"), t.nsp && "/" !== t.nsp && (n += t.nsp + ","), null != t.id && (n += t.id), null != t.data) { var r = i(t.data); if (r === !1) return g;
                                n += r } return f("encoded %j as %s", t, n), n }

                        function i(t) { try { return JSON.stringify(t) } catch (e) { return !1 } }

                        function s(t, e) {
                            function n(t) { var n = d.deconstructPacket(t),
                                    r = o(n.packet),
                                    i = n.buffers;
                                i.unshift(r), e(i) }
                            d.removeBlobs(t, n) }

                        function a() { this.reconstructor = null }

                        function c(t) { var n = 0,
                                r = { type: Number(t.charAt(0)) }; if (null == e.types[r.type]) return h("unknown packet type " + r.type); if (e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type) { for (var o = "";
                                    "-" !== t.charAt(++n) && (o += t.charAt(n), n != t.length);); if (o != Number(o) || "-" !== t.charAt(n)) throw new Error("Illegal attachments");
                                r.attachments = Number(o) } if ("/" === t.charAt(n + 1))
                                for (r.nsp = ""; ++n;) { var i = t.charAt(n); if ("," === i) break; if (r.nsp += i, n === t.length) break } else r.nsp = "/"; var s = t.charAt(n + 1); if ("" !== s && Number(s) == s) { for (r.id = ""; ++n;) { var i = t.charAt(n); if (null == i || Number(i) != i) {--n; break } if (r.id += t.charAt(n), n === t.length) break }
                                r.id = Number(r.id) } if (t.charAt(++n)) { var a = u(t.substr(n)),
                                    c = a !== !1 && (r.type === e.ERROR || y(a)); if (!c) return h("invalid payload");
                                r.data = a } return f("decoded %s as %j", t, r), r }

                        function u(t) { try { return JSON.parse(t) } catch (e) { return !1 } }

                        function p(t) { this.reconPack = t, this.buffers = [] }

                        function h(t) { return { type: e.ERROR, data: "parser error: " + t } } var f = n(8)("socket.io-parser"),
                            l = n(11),
                            d = n(12),
                            y = n(13),
                            m = n(14);
                        e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = r, e.Decoder = a; var g = e.ERROR + '"encode error"';
                        r.prototype.encode = function(t, n) { if (f("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) s(t, n);
                            else { var r = o(t);
                                n([r]) } }, l(a.prototype), a.prototype.add = function(t) { var n; if ("string" == typeof t) n = c(t), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new p(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
                            else { if (!m(t) && !t.base64) throw new Error("Unknown type: " + t); if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                                n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, this.emit("decoded", n)) } }, a.prototype.destroy = function() { this.reconstructor && this.reconstructor.finishedReconstruction() }, p.prototype.takeBinaryData = function(t) { if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) { var e = d.reconstructPacket(this.reconPack, this.buffers); return this.finishedReconstruction(), e } return null }, p.prototype.finishedReconstruction = function() { this.reconPack = null, this.buffers = [] } }, function(t, e, n) {
                        (function(r) { "use strict";

                            function o() { return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)) }

                            function i(t) { var n = this.useColors; if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) { var r = "color: " + this.color;
                                    t.splice(1, 0, r, "color: inherit"); var o = 0,
                                        i = 0;
                                    t[0].replace(/%[a-zA-Z%]/g, function(t) { "%%" !== t && (o++, "%c" === t && (i = o)) }), t.splice(i, 0, r) } }

                            function s() { return "object" === ("undefined" == typeof console ? "undefined" : p(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments) }

                            function a(t) { try { null == t ? e.storage.removeItem("debug") : e.storage.debug = t } catch (n) {} }

                            function c() { var t; try { t = e.storage.debug } catch (n) {} return !t && "undefined" != typeof r && "env" in r && (t = r.env.DEBUG), t }

                            function u() { try { return window.localStorage } catch (t) {} } var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
                            e = t.exports = n(9), e.log = s, e.formatArgs = i, e.save = a, e.load = c, e.useColors = o, e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function(t) { try { return JSON.stringify(t) } catch (e) { return "[UnexpectedJSONParseError]: " + e.message } }, e.enable(c()) }).call(e, n(4)) }, function(t, e, n) { "use strict";

                        function r(t) { var n, r = 0; for (n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0; return e.colors[Math.abs(r) % e.colors.length] }

                        function o(t) {
                            function n() { if (n.enabled) { var t = n,
                                        r = +new Date,
                                        i = r - (o || r);
                                    t.diff = i, t.prev = o, t.curr = r, o = r; for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                                    s[0] = e.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O"); var c = 0;
                                    s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) { if ("%%" === n) return n;
                                        c++; var o = e.formatters[r]; if ("function" == typeof o) { var i = s[c];
                                            n = o.call(t, i), s.splice(c, 1), c-- } return n }), e.formatArgs.call(t, s); var u = n.log || e.log || console.log.bind(console);
                                    u.apply(t, s) } } var o; return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = r(t), n.destroy = i, "function" == typeof e.init && e.init(n), e.instances.push(n), n }

                        function i() { var t = e.instances.indexOf(this); return t !== -1 && (e.instances.splice(t, 1), !0) }

                        function s(t) { e.save(t), e.names = [], e.skips = []; var n, r = ("string" == typeof t ? t : "").split(/[\s,]+/),
                                o = r.length; for (n = 0; n < o; n++) r[n] && (t = r[n].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$"))); for (n = 0; n < e.instances.length; n++) { var i = e.instances[n];
                                i.enabled = e.enabled(i.namespace) } }

                        function a() { e.enable("") }

                        function c(t) { if ("*" === t[t.length - 1]) return !0; var n, r; for (n = 0, r = e.skips.length; n < r; n++)
                                if (e.skips[n].test(t)) return !1;
                            for (n = 0, r = e.names.length; n < r; n++)
                                if (e.names[n].test(t)) return !0;
                            return !1 }

                        function u(t) { return t instanceof Error ? t.stack || t.message : t }
                        e = t.exports = o.debug = o["default"] = o, e.coerce = u, e.disable = a, e.enable = s, e.enabled = c, e.humanize = n(10), e.instances = [], e.names = [], e.skips = [], e.formatters = {} }, function(t, e) {
                        function n(t) { if (t = String(t), !(t.length > 100)) { var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t); if (e) { var n = parseFloat(e[1]),
                                        r = (e[2] || "ms").toLowerCase(); switch (r) {
                                        case "years":
                                        case "year":
                                        case "yrs":
                                        case "yr":
                                        case "y":
                                            return n * p;
                                        case "days":
                                        case "day":
                                        case "d":
                                            return n * u;
                                        case "hours":
                                        case "hour":
                                        case "hrs":
                                        case "hr":
                                        case "h":
                                            return n * c;
                                        case "minutes":
                                        case "minute":
                                        case "mins":
                                        case "min":
                                        case "m":
                                            return n * a;
                                        case "seconds":
                                        case "second":
                                        case "secs":
                                        case "sec":
                                        case "s":
                                            return n * s;
                                        case "milliseconds":
                                        case "millisecond":
                                        case "msecs":
                                        case "msec":
                                        case "ms":
                                            return n;
                                        default:
                                            return } } } }

                        function r(t) { return t >= u ? Math.round(t / u) + "d" : t >= c ? Math.round(t / c) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms" }

                        function o(t) { return i(t, u, "day") || i(t, c, "hour") || i(t, a, "minute") || i(t, s, "second") || t + " ms" }

                        function i(t, e, n) { if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s" } var s = 1e3,
                            a = 60 * s,
                            c = 60 * a,
                            u = 24 * c,
                            p = 365.25 * u;
                        t.exports = function(t, e) { e = e || {}; var i = typeof t; if ("string" === i && t.length > 0) return n(t); if ("number" === i && isNaN(t) === !1) return e["long"] ? o(t) : r(t); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t)) } }, function(t, e, n) {
                        function r(t) { if (t) return o(t) }

                        function o(t) { for (var e in r.prototype) t[e] = r.prototype[e]; return t }
                        t.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this }, r.prototype.once = function(t, e) {
                            function n() { this.off(t, n), e.apply(this, arguments) } return n.fn = e, this.on(t, n), this }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) { if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this; var n = this._callbacks["$" + t]; if (!n) return this; if (1 == arguments.length) return delete this._callbacks["$" + t], this; for (var r, o = 0; o < n.length; o++)
                                if (r = n[o], r === e || r.fn === e) { n.splice(o, 1); break }
                            return this }, r.prototype.emit = function(t) { this._callbacks = this._callbacks || {}; var e = [].slice.call(arguments, 1),
                                n = this._callbacks["$" + t]; if (n) { n = n.slice(0); for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, e) } return this }, r.prototype.listeners = function(t) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [] }, r.prototype.hasListeners = function(t) { return !!this.listeners(t).length } }, function(t, e, n) {
                        function r(t, e) { if (!t) return t; if (s(t)) { var n = { _placeholder: !0, num: e.length }; return e.push(t), n } if (i(t)) { for (var o = new Array(t.length), a = 0; a < t.length; a++) o[a] = r(t[a], e); return o } if ("object" == typeof t && !(t instanceof Date)) { var o = {}; for (var c in t) o[c] = r(t[c], e); return o } return t }

                        function o(t, e) { if (!t) return t; if (t && t._placeholder) return e[t.num]; if (i(t))
                                for (var n = 0; n < t.length; n++) t[n] = o(t[n], e);
                            else if ("object" == typeof t)
                                for (var r in t) t[r] = o(t[r], e); return t } var i = n(13),
                            s = n(14),
                            a = Object.prototype.toString,
                            c = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === a.call(Blob),
                            u = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === a.call(File);
                        e.deconstructPacket = function(t) { var e = [],
                                n = t.data,
                                o = t; return o.data = r(n, e), o.attachments = e.length, { packet: o, buffers: e } }, e.reconstructPacket = function(t, e) { return t.data = o(t.data, e), t.attachments = void 0, t }, e.removeBlobs = function(t, e) {
                            function n(t, a, p) { if (!t) return t; if (c && t instanceof Blob || u && t instanceof File) { r++; var h = new FileReader;
                                    h.onload = function() { p ? p[a] = this.result : o = this.result, --r || e(o) }, h.readAsArrayBuffer(t) } else if (i(t))
                                    for (var f = 0; f < t.length; f++) n(t[f], f, t);
                                else if ("object" == typeof t && !s(t))
                                    for (var l in t) n(t[l], l, t) } var r = 0,
                                o = t;
                            n(o), r || e(o) } }, function(t, e) { var n = {}.toString;
                        t.exports = Array.isArray || function(t) { return "[object Array]" == n.call(t) } }, function(t, e) {
                        function n(t) { return r && Buffer.isBuffer(t) || o && (t instanceof ArrayBuffer || i(t)) }
                        t.exports = n; var r = "function" == typeof Buffer && "function" == typeof Buffer.isBuffer,
                            o = "function" == typeof ArrayBuffer,
                            i = function(t) { return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer } }, function(t, e, n) {
                        function r(t, e) { if (!(this instanceof r)) return new r(t, e);
                            t && "object" == typeof t && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new f({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = []; var n = e.parser || a;
                            this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = e.autoConnect !== !1, this.autoConnect && this.open() } var o = n(16),
                            i = n(39),
                            s = n(11),
                            a = n(7),
                            c = n(41),
                            u = n(42),
                            p = n(3)("socket.io-client:manager"),
                            h = n(38),
                            f = n(43),
                            l = Object.prototype.hasOwnProperty;
                        t.exports = r, r.prototype.emitAll = function() { this.emit.apply(this, arguments); for (var t in this.nsps) l.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments) }, r.prototype.updateSocketIds = function() { for (var t in this.nsps) l.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t)) }, r.prototype.generateId = function(t) { return ("/" === t ? "" : t + "#") + this.engine.id }, s(r.prototype), r.prototype.reconnection = function(t) { return arguments.length ? (this._reconnection = !!t, this) : this._reconnection }, r.prototype.reconnectionAttempts = function(t) { return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts }, r.prototype.reconnectionDelay = function(t) { return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay }, r.prototype.randomizationFactor = function(t) { return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor }, r.prototype.reconnectionDelayMax = function(t) { return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax }, r.prototype.timeout = function(t) { return arguments.length ? (this._timeout = t, this) : this._timeout }, r.prototype.maybeReconnectOnOpen = function() {!this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect() }, r.prototype.open = r.prototype.connect = function(t, e) { if (p("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                            p("opening %s", this.uri), this.engine = o(this.uri, this.opts); var n = this.engine,
                                r = this;
                            this.readyState = "opening", this.skipReconnect = !1; var i = c(n, "open", function() { r.onopen(), t && t() }),
                                s = c(n, "error", function(e) { if (p("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", e), t) { var n = new Error("Connection error");
                                        n.data = e, t(n) } else r.maybeReconnectOnOpen() }); if (!1 !== this._timeout) { var a = this._timeout;
                                p("connect attempt will timeout after %d", a); var u = setTimeout(function() { p("connect attempt timed out after %d", a), i.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", a) }, a);
                                this.subs.push({ destroy: function() { clearTimeout(u) } }) } return this.subs.push(i), this.subs.push(s), this }, r.prototype.onopen = function() { p("open"), this.cleanup(), this.readyState = "open", this.emit("open"); var t = this.engine;
                            this.subs.push(c(t, "data", u(this, "ondata"))), this.subs.push(c(t, "ping", u(this, "onping"))), this.subs.push(c(t, "pong", u(this, "onpong"))), this.subs.push(c(t, "error", u(this, "onerror"))), this.subs.push(c(t, "close", u(this, "onclose"))), this.subs.push(c(this.decoder, "decoded", u(this, "ondecoded"))) }, r.prototype.onping = function() { this.lastPing = new Date, this.emitAll("ping") }, r.prototype.onpong = function() { this.emitAll("pong", new Date - this.lastPing) }, r.prototype.ondata = function(t) { this.decoder.add(t) }, r.prototype.ondecoded = function(t) { this.emit("packet", t) }, r.prototype.onerror = function(t) { p("error", t), this.emitAll("error", t) }, r.prototype.socket = function(t, e) {
                            function n() {~h(o.connecting, r) || o.connecting.push(r) } var r = this.nsps[t]; if (!r) { r = new i(this, t, e), this.nsps[t] = r; var o = this;
                                r.on("connecting", n), r.on("connect", function() { r.id = o.generateId(t) }), this.autoConnect && n() } return r }, r.prototype.destroy = function(t) { var e = h(this.connecting, t);~e && this.connecting.splice(e, 1), this.connecting.length || this.close() }, r.prototype.packet = function(t) { p("writing packet %j", t); var e = this;
                            t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function(n) { for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);
                                e.encoding = !1, e.processPacketQueue() })) }, r.prototype.processPacketQueue = function() { if (this.packetBuffer.length > 0 && !this.encoding) { var t = this.packetBuffer.shift();
                                this.packet(t) } }, r.prototype.cleanup = function() { p("cleanup"); for (var t = this.subs.length, e = 0; e < t; e++) { var n = this.subs.shift();
                                n.destroy() }
                            this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy() }, r.prototype.close = r.prototype.disconnect = function() { p("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close() }, r.prototype.onclose = function(t) { p("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect() }, r.prototype.reconnect = function() { if (this.reconnecting || this.skipReconnect) return this; var t = this; if (this.backoff.attempts >= this._reconnectionAttempts) p("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
                            else { var e = this.backoff.duration();
                                p("will wait %dms before reconnect attempt", e), this.reconnecting = !0; var n = setTimeout(function() { t.skipReconnect || (p("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function(e) { e ? (p("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (p("reconnect success"), t.onreconnect()) })) }, e);
                                this.subs.push({ destroy: function() { clearTimeout(n) } }) } }, r.prototype.onreconnect = function() { var t = this.backoff.attempts;
                            this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t) } }, function(t, e, n) { t.exports = n(17), t.exports.parser = n(24) }, function(t, e, n) {
                        function r(t, e) { return this instanceof r ? (e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = p(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = p(e.host).host), this.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.withCredentials = !1 !== e.withCredentials, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.transportOptions = e.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized, this.forceNode = !!e.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders), e.localAddress && (this.localAddress = e.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, void this.open()) : new r(t, e) }

                        function o(t) { var e = {}; for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]); return e }
                        var i = n(18),
                            s = n(11),
                            a = n(3)("engine.io-client:socket"),
                            c = n(38),
                            u = n(24),
                            p = n(2),
                            h = n(32);
                        t.exports = r, r.priorWebsocketSuccess = !1, s(r.prototype), r.protocol = u.protocol, r.Socket = r, r.Transport = n(23), r.transports = n(18), r.parser = n(24), r.prototype.createTransport = function(t) { a('creating transport "%s"', t); var e = o(this.query);
                                e.EIO = u.protocol, e.transport = t; var n = this.transportOptions[t] || {};
                                this.id && (e.sid = this.id); var r = new i[t]({ query: e, socket: this, agent: n.agent || this.agent, hostname: n.hostname || this.hostname, port: n.port || this.port, secure: n.secure || this.secure, path: n.path || this.path, forceJSONP: n.forceJSONP || this.forceJSONP, jsonp: n.jsonp || this.jsonp, forceBase64: n.forceBase64 || this.forceBase64, enablesXDR: n.enablesXDR || this.enablesXDR, withCredentials: n.withCredentials || this.withCredentials, timestampRequests: n.timestampRequests || this.timestampRequests, timestampParam: n.timestampParam || this.timestampParam, policyPort: n.policyPort || this.policyPort, pfx: n.pfx || this.pfx, key: n.key || this.key, passphrase: n.passphrase || this.passphrase, cert: n.cert || this.cert, ca: n.ca || this.ca, ciphers: n.ciphers || this.ciphers, rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate, extraHeaders: n.extraHeaders || this.extraHeaders, forceNode: n.forceNode || this.forceNode, localAddress: n.localAddress || this.localAddress, requestTimeout: n.requestTimeout || this.requestTimeout, protocols: n.protocols || void 0, isReactNative: this.isReactNative }); return r }, r.prototype.open = function() {
                                var t;
                                if (this.rememberUpgrade && r.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) t = "websocket";
                                else {