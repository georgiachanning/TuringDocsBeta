! function(e, t) {
    for (var n in t) e[n] = t[n]
}(window, function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 6)
}([function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = {
        createElement: function(e, t) {
            var n = document.createElement(e);
            t && Array.prototype.forEach.call(Object.keys(t), function(e) {
                n.setAttribute(e, t[e])
            });
            for (var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];
            return function e(t) {
                Array.prototype.forEach.call(t, function(t) {
                    "string" == typeof t || "number" == typeof t ? n.textContent += t : Array.isArray(t) ? e(t) : void 0 !== t.__html ? n.innerHTML += t.__html : t instanceof Node && n.appendChild(t)
                })
            }(i), n
        }
    }, e.exports = t.default
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof fetch ? fetch.bind() : function(e, t) {
        return t = t || {}, new Promise(function(n, r) {
            function i() {
                var e, t = [],
                    n = [],
                    r = {};
                return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, function(i, o, a) {
                    t.push(o = o.toLowerCase()), n.push([o, a]), e = r[o], r[o] = e ? e + "," + a : a
                }), {
                    ok: 1 == (o.status / 200 | 0),
                    status: o.status,
                    statusText: o.statusText,
                    url: o.responseURL,
                    clone: i,
                    text: function() {
                        return Promise.resolve(o.responseText)
                    },
                    json: function() {
                        return Promise.resolve(o.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([o.response]))
                    },
                    headers: {
                        keys: function() {
                            return t
                        },
                        entries: function() {
                            return n
                        },
                        get: function(e) {
                            return r[e.toLowerCase()]
                        },
                        has: function(e) {
                            return e.toLowerCase() in r
                        }
                    }
                }
            }
            var o = new XMLHttpRequest;
            o.open(t.method || "get", e);
            for (var a in t.headers) o.setRequestHeader(a, t.headers[a]);
            o.withCredentials = "include" == t.credentials, o.onload = function() {
                n(i())
            }, o.onerror = r, o.send(t.body)
        })
    };
    t.default = r
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t, n, i) {
            var o = this;
            r(this, e), this.els_ = Array.prototype.slice.call("string" == typeof t ? document.querySelectorAll(t) : [].concat(t)), this.handler_ = "function" == typeof i ? {
                update: i
            } : i, this.events_ = [].concat(n), this.update_ = function(e) {
                return o.handler_.update(e)
            }
        }
        return e.prototype.listen = function() {
            var e = this;
            this.els_.forEach(function(t) {
                e.events_.forEach(function(n) {
                    t.addEventListener(n, e.update_, !1)
                })
            }), "function" == typeof this.handler_.setup && this.handler_.setup()
        }, e.prototype.unlisten = function() {
            var e = this;
            this.els_.forEach(function(t) {
                e.events_.forEach(function(n) {
                    t.removeEventListener(n, e.update_)
                })
            }), "function" == typeof this.handler_.reset && this.handler_.reset()
        }, e
    }();
    t.default = i
}, , , function(e, t, n) {
    "use strict";
    (function(e) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(t) {
            new f.default.Event.Listener(document, "DOMContentLoaded", function() {
                if (!(document.body instanceof HTMLElement)) throw new ReferenceError;
                l.default.attach(document.body), Modernizr.addTest("ios", function() {
                    return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
                });
                var t = document.querySelectorAll("table:not([class])");
                if (Array.prototype.forEach.call(t, function(t) {
                        var n = e.createElement("div", {
                            class: "md-typeset__scrollwrap"
                        }, e.createElement("div", {
                            class: "md-typeset__table"
                        }));
                        t.nextSibling ? t.parentNode.insertBefore(n, t.nextSibling) : t.parentNode.appendChild(n), n.children[0].appendChild(t)
                    }), c.default.isSupported()) {
                    var n = document.querySelectorAll(".codehilite > pre, pre > code");
                    Array.prototype.forEach.call(n, function(t, n) {
                        var r = "__code_" + n,
                            i = e.createElement("button", {
                                class: "md-clipboard",
                                title: h("clipboard.copy"),
                                "data-clipboard-target": "#" + r + " pre, #" + r + " code"
                            }, e.createElement("span", {
                                class: "md-clipboard__message"
                            })),
                            o = t.parentNode;
                        o.id = r, o.insertBefore(i, t)
                    });
                    new c.default(".md-clipboard").on("success", function(e) {
                        var t = e.trigger.querySelector(".md-clipboard__message");
                        if (!(t instanceof HTMLElement)) throw new ReferenceError;
                        e.clearSelection(), t.dataset.mdTimer && clearTimeout(parseInt(t.dataset.mdTimer, 10)), t.classList.add("md-clipboard__message--active"), t.innerHTML = h("clipboard.copied"), t.dataset.mdTimer = setTimeout(function() {
                            t.classList.remove("md-clipboard__message--active"), t.dataset.mdTimer = ""
                        }, 2e3).toString()
                    })
                }
                if (!Modernizr.details) {
                    var r = document.querySelectorAll("details > summary");
                    Array.prototype.forEach.call(r, function(e) {
                        e.addEventListener("click", function(e) {
                            var t = e.target.parentNode;
                            t.hasAttribute("open") ? t.removeAttribute("open") : t.setAttribute("open", "")
                        })
                    })
                }
                var i = function() {
                    if (document.location.hash) {
                        var e = document.getElementById(document.location.hash.substring(1));
                        if (!e) return;
                        for (var t = e.parentNode; t && !(t instanceof HTMLDetailsElement);) t = t.parentNode;
                        if (t && !t.open) {
                            t.open = !0;
                            var n = location.hash;
                            location.hash = " ", location.hash = n
                        }
                    }
                };
                if (window.addEventListener("hashchange", i), i(), Modernizr.ios) {
                    var o = document.querySelectorAll("[data-md-scrollfix]");
                    Array.prototype.forEach.call(o, function(e) {
                        e.addEventListener("touchstart", function() {
                            var t = e.scrollTop;
                            0 === t ? e.scrollTop = 1 : t + e.offsetHeight === e.scrollHeight && (e.scrollTop = t - 1)
                        })
                    })
                }
            }).listen(), new f.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new f.default.Header.Shadow("[data-md-component=container]", "[data-md-component=header]")).listen(), new f.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new f.default.Header.Title("[data-md-component=title]", ".md-typeset h1")).listen(), document.querySelector("[data-md-component=hero]") && new f.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new f.default.Tabs.Toggle("[data-md-component=hero]")).listen(), document.querySelector("[data-md-component=tabs]") && new f.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new f.default.Tabs.Toggle("[data-md-component=tabs]")).listen(), new f.default.Event.MatchMedia("(min-width: 1220px)", new f.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new f.default.Sidebar.Position("[data-md-component=navigation]", "[data-md-component=header]"))), document.querySelector("[data-md-component=toc]") && new f.default.Event.MatchMedia("(min-width: 960px)", new f.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new f.default.Sidebar.Position("[data-md-component=toc]", "[data-md-component=header]"))), new f.default.Event.MatchMedia("(min-width: 960px)", new f.default.Event.Listener(window, "scroll", new f.default.Nav.Blur("[data-md-component=toc] [href]")));
            var n = document.querySelectorAll("[data-md-component=collapsible]");
            Array.prototype.forEach.call(n, function(e) {
                    new f.default.Event.MatchMedia("(min-width: 1220px)", new f.default.Event.Listener(e.previousElementSibling, "click", new f.default.Nav.Collapse(e)))
                }), new f.default.Event.MatchMedia("(max-width: 1219px)", new f.default.Event.Listener("[data-md-component=navigation] [data-md-toggle]", "change", new f.default.Nav.Scrolling("[data-md-component=navigation] nav"))), document.querySelector("[data-md-component=search]") && (new f.default.Event.MatchMedia("(max-width: 959px)", new f.default.Event.Listener("[data-md-toggle=search]", "change", new f.default.Search.Lock("[data-md-toggle=search]"))), new f.default.Event.Listener("[data-md-component=query]", ["focus", "keyup", "change"], new f.default.Search.Result("[data-md-component=result]", function() {
                    return fetch("/v0.19.2/search/search_index.json", {
                        credentials: "same-origin"
                    }).then(function(e) {
                        return e.json()
                    }).then(function(e) {
                        return e.docs.map(function(e) {
                            return e.location = t.url.base + e.location, e
                        })
                    })
                })).listen(), new f.default.Event.Listener("[data-md-component=reset]", "click", function() {
                    setTimeout(function() {
                        var e = document.querySelector("[data-md-component=query]");
                        if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                        e.focus()
                    }, 10)
                }).listen(), new f.default.Event.Listener("[data-md-toggle=search]", "change", function(e) {
                    setTimeout(function(e) {
                        if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                        if (e.checked) {
                            var t = document.querySelector("[data-md-component=query]");
                            if (!(t instanceof HTMLInputElement)) throw new ReferenceError;
                            t.focus()
                        }
                    }, 400, e.target)
                }).listen(), new f.default.Event.MatchMedia("(min-width: 960px)", new f.default.Event.Listener("[data-md-component=query]", "focus", function() {
                    var e = document.querySelector("[data-md-toggle=search]");
                    if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                    e.checked || (e.checked = !0, e.dispatchEvent(new CustomEvent("change")))
                })), new f.default.Event.Listener(window, "keydown", function(e) {
                    var t = document.querySelector("[data-md-toggle=search]");
                    if (!(t instanceof HTMLInputElement)) throw new ReferenceError;
                    var n = document.querySelector("[data-md-component=query]");
                    if (!(n instanceof HTMLInputElement)) throw new ReferenceError;
                    if (!e.metaKey && !e.ctrlKey)
                        if (t.checked) {
                            if (13 === e.keyCode) {
                                if (n === document.activeElement) {
                                    e.preventDefault();
                                    var r = document.querySelector("[data-md-component=search] [href][data-md-state=active]");
                                    r instanceof HTMLLinkElement && (window.location = r.getAttribute("href"), t.checked = !1, t.dispatchEvent(new CustomEvent("change")), n.blur())
                                }
                            } else if (9 === e.keyCode || 27 === e.keyCode) t.checked = !1, t.dispatchEvent(new CustomEvent("change")), n.blur();
                            else if (-1 !== [8, 37, 39].indexOf(e.keyCode)) n !== document.activeElement && n.focus();
                            else if (-1 !== [38, 40].indexOf(e.keyCode)) {
                                var i = e.keyCode,
                                    o = Array.prototype.slice.call(document.querySelectorAll("[data-md-component=query], [data-md-component=search] [href]")),
                                    a = o.find(function(e) {
                                        if (!(e instanceof HTMLElement)) throw new ReferenceError;
                                        return "active" === e.dataset.mdState
                                    });
                                a && (a.dataset.mdState = "");
                                var s = Math.max(0, (o.indexOf(a) + o.length + (38 === i ? -1 : 1)) % o.length);
                                return o[s] && (o[s].dataset.mdState = "active", o[s].focus()), e.preventDefault(), e.stopPropagation(), !1
                            }
                        } else document.activeElement && !document.activeElement.form && (70 !== e.keyCode && 83 !== e.keyCode || (n.focus(), e.preventDefault()))
                }).listen(), new f.default.Event.Listener(window, "keypress", function() {
                    var e = document.querySelector("[data-md-toggle=search]");
                    if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                    if (e.checked) {
                        var t = document.querySelector("[data-md-component=query]");
                        if (!(t instanceof HTMLInputElement)) throw new ReferenceError;
                        t !== document.activeElement && t.focus()
                    }
                }).listen()), new f.default.Event.Listener(document.body, "keydown", function(e) {
                    if (9 === e.keyCode) {
                        var t = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[for]:not([tabindex])");
                        Array.prototype.forEach.call(t, function(e) {
                            e.offsetHeight && (e.tabIndex = 0)
                        })
                    }
                }).listen(), new f.default.Event.Listener(document.body, "mousedown", function() {
                    var e = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[tabindex]");
                    Array.prototype.forEach.call(e, function(e) {
                        e.removeAttribute("tabIndex")
                    })
                }).listen(), document.body.addEventListener("click", function() {
                    "tabbing" === document.body.dataset.mdState && (document.body.dataset.mdState = "")
                }), new f.default.Event.MatchMedia("(max-width: 959px)", new f.default.Event.Listener("[data-md-component=navigation] [href^='#']", "click", function() {
                    var e = document.querySelector("[data-md-toggle=drawer]");
                    if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                    e.checked && (e.checked = !1, e.dispatchEvent(new CustomEvent("change")))
                })),
                function() {
                    var e = document.querySelector("[data-md-source]");
                    if (!e) return a.default.resolve([]);
                    if (!(e instanceof HTMLAnchorElement)) throw new ReferenceError;
                    switch (e.dataset.mdSource) {
                        case "github":
                            return new f.default.Source.Adapter.GitHub(e).fetch();
                        default:
                            return a.default.resolve([])
                    }
                }().then(function(e) {
                    var t = document.querySelectorAll("[data-md-source]");
                    Array.prototype.forEach.call(t, function(t) {
                        new f.default.Source.Repository(t).initialize(e)
                    })
                })
        }
        t.__esModule = !0, t.app = void 0, n(7), n(8), n(9), n(10), n(11), n(12), n(13);
        var o = n(14),
            a = r(o),
            s = n(19),
            c = r(s),
            u = n(20),
            l = r(u),
            d = n(21),
            f = r(d);
        window.Promise = window.Promise || a.default;
        var h = function(e) {
                var t = document.getElementsByName("lang:" + e)[0];
                if (!(t instanceof HTMLMetaElement)) throw new ReferenceError;
                return t.content
            },
            p = {
                initialize: i
            };
        t.app = p
    }).call(t, n(0))
}, function(e, t, n) {
    e.exports = n.p + "assets/images/icons/bitbucket.1b09e088.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/images/icons/github.f0b8504a.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/images/icons/gitlab.6dd19c00.svg"
}, function(e, t) {}, function(e, t) {}, function(e, t) {
    try {
        var n = new window.CustomEvent("test");
        if (n.preventDefault(), !0 !== n.defaultPrevented) throw new Error("Could not prevent default")
    } catch (e) {
        var r = function(e, t) {
            var n, r;
            return t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            }, n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r = n.preventDefault, n.preventDefault = function() {
                r.call(this);
                try {
                    Object.defineProperty(this, "defaultPrevented", {
                        get: function() {
                            return !0
                        }
                    })
                } catch (e) {
                    this.defaultPrevented = !0
                }
            }, n
        };
        r.prototype = window.Event.prototype, window.CustomEvent = r
    }
}, function(e, t, n) {
    window.fetch || (window.fetch = n(2).default || n(2))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            function r() {}

            function i(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }

            function o(e) {
                if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
            }

            function a(e, t) {
                for (; 3 === e._state;) e = e._value;
                if (0 === e._state) return void e._deferreds.push(t);
                e._handled = !0, o._immediateFn(function() {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null === n) return void(1 === e._state ? s : c)(t.promise, e._value);
                    var r;
                    try {
                        r = n(e._value)
                    } catch (e) {
                        return void c(t.promise, e)
                    }
                    s(t.promise, r)
                })
            }

            function s(e, t) {
                try {
                    if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if (t instanceof o) return e._state = 3, e._value = t, void u(e);
                        if ("function" == typeof n) return void d(i(n, t), e)
                    }
                    e._state = 1, e._value = t, u(e)
                } catch (t) {
                    c(e, t)
                }
            }

            function c(e, t) {
                e._state = 2, e._value = t, u(e)
            }

            function u(e) {
                2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                    e._handled || o._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++) a(e, e._deferreds[t]);
                e._deferreds = null
            }

            function l(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
            }

            function d(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0, s(t, e))
                    }, function(e) {
                        n || (n = !0, c(t, e))
                    })
                } catch (e) {
                    if (n) return;
                    n = !0, c(t, e)
                }
            }
            var f = n(18),
                h = setTimeout;
            o.prototype.catch = function(e) {
                return this.then(null, e)
            }, o.prototype.then = function(e, t) {
                var n = new this.constructor(r);
                return a(this, new l(e, t, n)), n
            }, o.prototype.finally = f.a, o.all = function(e) {
                return new o(function(t, n) {
                    function r(e, a) {
                        try {
                            if (a && ("object" == typeof a || "function" == typeof a)) {
                                var s = a.then;
                                if ("function" == typeof s) return void s.call(a, function(t) {
                                    r(e, t)
                                }, n)
                            }
                            i[e] = a, 0 == --o && t(i)
                        } catch (e) {
                            n(e)
                        }
                    }
                    if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                    var i = Array.prototype.slice.call(e);
                    if (0 === i.length) return t([]);
                    for (var o = i.length, a = 0; a < i.length; a++) r(a, i[a])
                })
            }, o.resolve = function(e) {
                return e && "object" == typeof e && e.constructor === o ? e : new o(function(t) {
                    t(e)
                })
            }, o.reject = function(e) {
                return new o(function(t, n) {
                    n(e)
                })
            }, o.race = function(e) {
                return new o(function(t, n) {
                    for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n)
                })
            }, o._immediateFn = "function" == typeof e && function(t) {
                e(t)
            } || function(e) {
                h(e, 0)
            }, o._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }, t.default = o
        }.call(t, n(15).setImmediate)
}, function(e, t, n) {
    (function(e) {
        function r(e, t) {
            this._id = e, this._clearFn = t
        }
        var i = Function.prototype.apply;
        t.setTimeout = function() {
            return new r(i.call(setTimeout, window, arguments), clearTimeout)
        }, t.setInterval = function() {
            return new r(i.call(setInterval, window, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }, t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }, n(16), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(t, n(1))
}, function(e, t, n) {
    (function(e, t) {
        ! function(e, n) {
            "use strict";

            function r(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                var r = {
                    callback: e,
                    args: t
                };
                return u[c] = r, s(c), c++
            }

            function i(e) {
                delete u[e]
            }

            function o(e) {
                var t = e.callback,
                    r = e.args;
                switch (r.length) {
                    case 0:
                        t();
                        break;
                    case 1:
                        t(r[0]);
                        break;
                    case 2:
                        t(r[0], r[1]);
                        break;
                    case 3:
                        t(r[0], r[1], r[2]);
                        break;
                    default:
                        t.apply(n, r)
                }
            }

            function a(e) {
                if (l) setTimeout(a, 0, e);
                else {
                    var t = u[e];
                    if (t) {
                        l = !0;
                        try {
                            o(t)
                        } finally {
                            i(e), l = !1
                        }
                    }
                }
            }
            if (!e.setImmediate) {
                var s, c = 1,
                    u = {},
                    l = !1,
                    d = e.document,
                    f = Object.getPrototypeOf && Object.getPrototypeOf(e);
                f = f && f.setTimeout ? f : e, "[object process]" === {}.toString.call(e.process) ? function() {
                    s = function(e) {
                        t.nextTick(function() {
                            a(e)
                        })
                    }
                }() : function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            n = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }() ? function() {
                    var t = "setImmediate$" + Math.random() + "$",
                        n = function(n) {
                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length))
                        };
                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), s = function(n) {
                        e.postMessage(t + n, "*")
                    }
                }() : e.MessageChannel ? function() {
                    var e = new MessageChannel;
                    e.port1.onmessage = function(e) {
                        a(e.data)
                    }, s = function(t) {
                        e.port2.postMessage(t)
                    }
                }() : d && "onreadystatechange" in d.createElement("script") ? function() {
                    var e = d.documentElement;
                    s = function(t) {
                        var n = d.createElement("script");
                        n.onreadystatechange = function() {
                            a(t), n.onreadystatechange = null, e.removeChild(n), n = null
                        }, e.appendChild(n)
                    }
                }() : function() {
                    s = function(e) {
                        setTimeout(a, 0, e)
                    }
                }(), f.setImmediate = r, f.clearImmediate = i
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(t, n(1), n(17))
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (t) {
            try {
                return l.call(null, e, 0)
            } catch (t) {
                return l.call(this, e, 0)
            }
        }
    }

    function o(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === r || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (t) {
            try {
                return d.call(null, e)
            } catch (t) {
                return d.call(this, e)
            }
        }
    }

    function a() {
        m && h && (m = !1, h.length ? p = h.concat(p) : v = -1, p.length && s())
    }

    function s() {
        if (!m) {
            var e = i(a);
            m = !0;
            for (var t = p.length; t;) {
                for (h = p, p = []; ++v < t;) h && h[v].run();
                v = -1, t = p.length
            }
            h = null, m = !1, o(e)
        }
    }

    function c(e, t) {
        this.fun = e, this.array = t
    }

    function u() {}
    var l, d, f = e.exports = {};
    ! function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            l = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            d = r
        }
    }();
    var h, p = [],
        m = !1,
        v = -1;
    f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        p.push(new c(e, t)), 1 !== p.length || m || i(s)
    }, c.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function(e) {
        return []
    }, f.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = this.constructor;
        return this.then(function(n) {
            return t.resolve(e()).then(function() {
                return n
            })
        }, function(n) {
            return t.resolve(e()).then(function() {
                return t.reject(n)
            })
        })
    }
}, function(e, t, n) {
    ! function(t, n) {
        e.exports = n()
    }(0, function() {
        return function(e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.i = function(e) {
                return e
            }, t.d = function(e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 3)
        }([function(e, t, n) {
            var r, i, o;
            ! function(a, s) {
                i = [e, n(7)], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o)
            }(0, function(e, t) {
                "use strict";

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                var r = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(t),
                    i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    a = function() {
                        function e(t) {
                            n(this, e), this.resolveOptions(t), this.initSelection()
                        }
                        return o(e, [{
                            key: "resolveOptions",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function() {
                                var e = this,
                                    t = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function() {
                                    return e.removeFake()
                                }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                                var n = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, r.default)(this.fakeElem), this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function() {
                                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function() {
                                this.selectedText = (0, r.default)(this.target), this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function() {
                                var e = void 0;
                                try {
                                    e = document.execCommand(this.action)
                                } catch (t) {
                                    e = !1
                                }
                                this.handleResult(e)
                            }
                        }, {
                            key: "handleResult",
                            value: function(e) {
                                this.emitter.emit(e ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function() {
                                this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(e) {
                                if (void 0 !== e) {
                                    if (!e || "object" !== (void 0 === e ? "undefined" : i(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = e
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]), e
                    }();
                e.exports = a
            })
        }, function(e, t, n) {
            function r(e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!s.string(t)) throw new TypeError("Second argument must be a String");
                if (!s.fn(n)) throw new TypeError("Third argument must be a Function");
                if (s.node(e)) return i(e, t, n);
                if (s.nodeList(e)) return o(e, t, n);
                if (s.string(e)) return a(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function i(e, t, n) {
                return e.addEventListener(t, n), {
                    destroy: function() {
                        e.removeEventListener(t, n)
                    }
                }
            }

            function o(e, t, n) {
                return Array.prototype.forEach.call(e, function(e) {
                    e.addEventListener(t, n)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(e, function(e) {
                            e.removeEventListener(t, n)
                        })
                    }
                }
            }

            function a(e, t, n) {
                return c(document.body, e, t, n)
            }
            var s = n(6),
                c = n(5);
            e.exports = r
        }, function(e, t) {
            function n() {}
            n.prototype = {
                on: function(e, t, n) {
                    var r = this.e || (this.e = {});
                    return (r[e] || (r[e] = [])).push({
                        fn: t,
                        ctx: n
                    }), this
                },
                once: function(e, t, n) {
                    function r() {
                        i.off(e, r), t.apply(n, arguments)
                    }
                    var i = this;
                    return r._ = t, this.on(e, r, n)
                },
                emit: function(e) {
                    var t = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[e] || []).slice(),
                        r = 0,
                        i = n.length;
                    for (r; r < i; r++) n[r].fn.apply(n[r].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var n = this.e || (this.e = {}),
                        r = n[e],
                        i = [];
                    if (r && t)
                        for (var o = 0, a = r.length; o < a; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
                    return i.length ? n[e] = i : delete n[e], this
                }
            }, e.exports = n
        }, function(e, t, n) {
            var r, i, o;
            ! function(a, s) {
                i = [e, n(0), n(2), n(1)], r = s, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o)
            }(0, function(e, t, n, r) {
                "use strict";

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function o(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function a(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function s(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                function c(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n)
                }
                var u = i(t),
                    l = i(n),
                    d = i(r),
                    f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    h = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    p = function(e) {
                        function t(e, n) {
                            o(this, t);
                            var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return r.resolveOptions(n), r.listenClick(e), r
                        }
                        return s(t, e), h(t, [{
                            key: "resolveOptions",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === f(e.container) ? e.container : document.body
                            }
                        }, {
                            key: "listenClick",
                            value: function(e) {
                                var t = this;
                                this.listener = (0, d.default)(e, "click", function(e) {
                                    return t.onClick(e)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function(e) {
                                var t = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new u.default({
                                    action: this.action(t),
                                    target: this.target(t),
                                    text: this.text(t),
                                    container: this.container,
                                    trigger: t,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function(e) {
                                return c("action", e)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function(e) {
                                var t = c("target", e);
                                if (t) return document.querySelector(t)
                            }
                        }, {
                            key: "defaultText",
                            value: function(e) {
                                return c("text", e)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    t = "string" == typeof e ? [e] : e,
                                    n = !!document.queryCommandSupported;
                                return t.forEach(function(e) {
                                    n = n && !!document.queryCommandSupported(e)
                                }), n
                            }
                        }]), t
                    }(l.default);
                e.exports = p
            })
        }, function(e, t) {
            function n(e, t) {
                for (; e && e.nodeType !== r;) {
                    if ("function" == typeof e.matches && e.matches(t)) return e;
                    e = e.parentNode
                }
            }
            var r = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var i = Element.prototype;
                i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
            }
            e.exports = n
        }, function(e, t, n) {
            function r(e, t, n, r, i) {
                var a = o.apply(this, arguments);
                return e.addEventListener(n, a, i), {
                    destroy: function() {
                        e.removeEventListener(n, a, i)
                    }
                }
            }

            function i(e, t, n, i, o) {
                return "function" == typeof e.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function(e) {
                    return r(e, t, n, i, o)
                }))
            }

            function o(e, t, n, r) {
                return function(n) {
                    n.delegateTarget = a(n.target, t), n.delegateTarget && r.call(e, n)
                }
            }
            var a = n(4);
            e.exports = i
        }, function(e, t) {
            t.node = function(e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, t.nodeList = function(e) {
                var n = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
            }, t.string = function(e) {
                return "string" == typeof e || e instanceof String
            }, t.fn = function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        }, function(e, t) {
            function n(e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value;
                else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                    var n = e.hasAttribute("readonly");
                    n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
                } else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var r = window.getSelection(),
                        i = document.createRange();
                    i.selectNodeContents(e), r.removeAllRanges(), r.addRange(i), t = r.toString()
                }
                return t
            }
            e.exports = n
        }])
    })
}, function(e, t, n) {
    var r;
    ! function() {
        "use strict";

        function i(e, t) {
            var n;
            if (t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = e, this.tapDelay = t.tapDelay || 200, this.tapTimeout = t.tapTimeout || 700, !i.notNeeded(e)) {
                for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], o = this, s = 0, c = r.length; s < c; s++) o[r[s]] = function(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                }(o[r[s]], o);
                a && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, r) {
                    var i = Node.prototype.removeEventListener;
                    "click" === t ? i.call(e, t, n.hijacked || n, r) : i.call(e, t, n, r)
                }, e.addEventListener = function(t, n, r) {
                    var i = Node.prototype.addEventListener;
                    "click" === t ? i.call(e, t, n.hijacked || (n.hijacked = function(e) {
                        e.propagationStopped || n(e)
                    }), r) : i.call(e, t, n, r)
                }), "function" == typeof e.onclick && (n = e.onclick, e.addEventListener("click", function(e) {
                    n(e)
                }, !1), e.onclick = null)
            }
        }
        var o = navigator.userAgent.indexOf("Windows Phone") >= 0,
            a = navigator.userAgent.indexOf("Android") > 0 && !o,
            s = /iP(ad|hone|od)/.test(navigator.userAgent) && !o,
            c = s && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            u = s && /OS [6-7]_\d/.test(navigator.userAgent),
            l = navigator.userAgent.indexOf("BB10") > 0;
        i.prototype.needsClick = function(e) {
            switch (e.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (e.disabled) return !0;
                    break;
                case "input":
                    if (s && "file" === e.type || e.disabled) return !0;
                    break;
                case "label":
                case "iframe":
                case "video":
                    return !0
            }
            return /\bneedsclick\b/.test(e.className)
        }, i.prototype.needsFocus = function(e) {
            switch (e.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !a;
                case "input":
                    switch (e.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1
                    }
                    return !e.disabled && !e.readOnly;
                default:
                    return /\bneedsfocus\b/.test(e.className)
            }
        }, i.prototype.sendClick = function(e, t) {
            var n, r;
            document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
        }, i.prototype.determineEventType = function(e) {
            return a && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
        }, i.prototype.focus = function(e) {
            var t;
            s && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
        }, i.prototype.updateScrollParent = function(e) {
            var t, n;
            if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
                n = e;
                do {
                    if (n.scrollHeight > n.offsetHeight) {
                        t = n, e.fastClickScrollParent = n;
                        break
                    }
                    n = n.parentElement
                } while (n)
            }
            t && (t.fastClickLastScrollTop = t.scrollTop)
        }, i.prototype.getTargetElementFromEventTarget = function(e) {
            return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
        }, i.prototype.onTouchStart = function(e) {
            var t, n, r;
            if (e.targetTouches.length > 1) return !0;
            if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], s) {
                if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return !0;
                if (!c) {
                    if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                    this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
        }, i.prototype.touchHasMoved = function(e) {
            var t = e.changedTouches[0],
                n = this.touchBoundary;
            return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
        }, i.prototype.onTouchMove = function(e) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
        }, i.prototype.findControl = function(e) {
            return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, i.prototype.onTouchEnd = function(e) {
            var t, n, r, i, o, l = this.targetElement;
            if (!this.trackingClick) return !0;
            if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
            if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, u && (o = e.changedTouches[0], l = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || l, l.fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (r = l.tagName.toLowerCase())) {
                if (t = this.findControl(l)) {
                    if (this.focus(l), a) return !1;
                    l = t
                }
            } else if (this.needsFocus(l)) return e.timeStamp - n > 100 || s && window.top !== window && "input" === r ? (this.targetElement = null, !1) : (this.focus(l), this.sendClick(l, e), s && "select" === r || (this.targetElement = null, e.preventDefault()), !1);
            return !(!s || c || !(i = l.fastClickScrollParent) || i.fastClickLastScrollTop === i.scrollTop) || (this.needsClick(l) || (e.preventDefault(), this.sendClick(l, e)), !1)
        }, i.prototype.onTouchCancel = function() {
            this.trackingClick = !1, this.targetElement = null
        }, i.prototype.onMouse = function(e) {
            return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
        }, i.prototype.onClick = function(e) {
            var t;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
        }, i.prototype.destroy = function() {
            var e = this.layer;
            a && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, i.notNeeded = function(e) {
            var t, n, r;
            if (void 0 === window.ontouchstart) return !0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!a) return !0;
                if (t = document.querySelector("meta[name=viewport]")) {
                    if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                    if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
            }
            if (l && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
                if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
            return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
        }, i.attach = function(e, t) {
            return new i(e, t)
        }, void 0 !== (r = function() {
            return i
        }.call(t, n, t, e)) && (e.exports = r)
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(22),
        o = r(i),
        a = n(24),
        s = r(a),
        c = n(27),
        u = r(c),
        l = n(31),
        d = r(l),
        f = n(37),
        h = r(f),
        p = n(39),
        m = r(p),
        v = n(45),
        y = r(v);
    t.default = {
        Event: o.default,
        Header: s.default,
        Nav: u.default,
        Search: d.default,
        Sidebar: h.default,
        Source: m.default,
        Tabs: y.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(3),
        o = r(i),
        a = n(23),
        s = r(a);
    t.default = {
        Listener: o.default,
        MatchMedia: s.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = n(3),
        o = (function(e) {
            e && e.__esModule
        }(i), function e(t, n) {
            r(this, e), this.handler_ = function(e) {
                e.matches ? n.listen() : n.unlisten()
            };
            var i = window.matchMedia(t);
            i.addListener(this.handler_), this.handler_(i)
        });
    t.default = o
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(25),
        o = r(i),
        a = n(26),
        s = r(a);
    t.default = {
        Shadow: o.default,
        Title: s.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t, n) {
            r(this, e);
            var i = "string" == typeof t ? document.querySelector(t) : t;
            if (!(i instanceof HTMLElement && i.parentNode instanceof HTMLElement)) throw new ReferenceError;
            if (this.el_ = i.parentNode, !((i = "string" == typeof n ? document.querySelector(n) : n) instanceof HTMLElement)) throw new ReferenceError;
            this.header_ = i, this.height_ = 0, this.active_ = !1
        }
        return e.prototype.setup = function() {
            for (var e = this.el_; e = e.previousElementSibling;) {
                if (!(e instanceof HTMLElement)) throw new ReferenceError;
                this.height_ += e.offsetHeight
            }
            this.update()
        }, e.prototype.update = function(e) {
            if (!e || "resize" !== e.type && "orientationchange" !== e.type) {
                var t = window.pageYOffset >= this.height_;
                t !== this.active_ && (this.header_.dataset.mdState = (this.active_ = t) ? "shadow" : "")
            } else this.height_ = 0, this.setup()
        }, e.prototype.reset = function() {
            this.header_.dataset.mdState = "", this.height_ = 0, this.active_ = !1
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t, n) {
            r(this, e);
            var i = "string" == typeof t ? document.querySelector(t) : t;
            if (!(i instanceof HTMLElement)) throw new ReferenceError;
            if (this.el_ = i, !((i = "string" == typeof n ? document.querySelector(n) : n) instanceof HTMLHeadingElement)) throw new ReferenceError;
            this.header_ = i, this.active_ = !1
        }
        return e.prototype.setup = function() {
            var e = this;
            Array.prototype.forEach.call(this.el_.children, function(t) {
                t.style.width = e.el_.offsetWidth - 20 + "px"
            })
        }, e.prototype.update = function(e) {
            var t = this,
                n = window.pageYOffset >= this.header_.offsetTop;
            n !== this.active_ && (this.el_.dataset.mdState = (this.active_ = n) ? "active" : ""), "resize" !== e.type && "orientationchange" !== e.type || Array.prototype.forEach.call(this.el_.children, function(e) {
                e.style.width = t.el_.offsetWidth - 20 + "px"
            })
        }, e.prototype.reset = function() {
            this.el_.dataset.mdState = "", this.el_.style.width = "", this.active_ = !1
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(28),
        o = r(i),
        a = n(29),
        s = r(a),
        c = n(30),
        u = r(c);
    t.default = {
        Blur: o.default,
        Collapse: s.default,
        Scrolling: u.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t) {
            r(this, e), this.els_ = "string" == typeof t ? document.querySelectorAll(t) : t, this.index_ = 0, this.offset_ = window.pageYOffset, this.dir_ = !1, this.anchors_ = [].reduce.call(this.els_, function(e, t) {
                return e.concat(document.getElementById(t.hash.substring(1)) || [])
            }, [])
        }
        return e.prototype.setup = function() {
            this.update()
        }, e.prototype.update = function() {
            var e = window.pageYOffset,
                t = this.offset_ - e < 0;
            if (this.dir_ !== t && (this.index_ = this.index_ = t ? 0 : this.els_.length - 1), 0 !== this.anchors_.length) {
                if (this.offset_ <= e)
                    for (var n = this.index_ + 1; n < this.els_.length && this.anchors_[n].offsetTop - 80 <= e; n++) n > 0 && (this.els_[n - 1].dataset.mdState = "blur"), this.index_ = n;
                else
                    for (var r = this.index_; r >= 0; r--) {
                        if (!(this.anchors_[r].offsetTop - 80 > e)) {
                            this.index_ = r;
                            break
                        }
                        r > 0 && (this.els_[r - 1].dataset.mdState = "")
                    }
                this.offset_ = e, this.dir_ = t
            }
        }, e.prototype.reset = function() {
            Array.prototype.forEach.call(this.els_, function(e) {
                e.dataset.mdState = ""
            }), this.index_ = 0, this.offset_ = window.pageYOffset
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t) {
            r(this, e);
            var n = "string" == typeof t ? document.querySelector(t) : t;
            if (!(n instanceof HTMLElement)) throw new ReferenceError;
            this.el_ = n
        }
        return e.prototype.setup = function() {
            var e = this.el_.getBoundingClientRect().height;
            this.el_.style.display = e ? "block" : "none", this.el_.style.overflow = e ? "visible" : "hidden"
        }, e.prototype.update = function() {
            var e = this,
                t = this.el_.getBoundingClientRect().height;
            if (this.el_.style.display = "block", this.el_.style.overflow = "", t) this.el_.style.maxHeight = t + "px", requestAnimationFrame(function() {
                e.el_.setAttribute("data-md-state", "animate"), e.el_.style.maxHeight = "0px"
            });
            else {
                this.el_.setAttribute("data-md-state", "expand"), this.el_.style.maxHeight = "";
                var n = this.el_.getBoundingClientRect().height;
                this.el_.removeAttribute("data-md-state"), this.el_.style.maxHeight = "0px", requestAnimationFrame(function() {
                    e.el_.setAttribute("data-md-state", "animate"), e.el_.style.maxHeight = n + "px"
                })
            }
            var r = function e(n) {
                var r = n.target;
                if (!(r instanceof HTMLElement)) throw new ReferenceError;
                r.removeAttribute("data-md-state"), r.style.maxHeight = "", r.style.display = t ? "none" : "block", r.style.overflow = t ? "hidden" : "visible", r.removeEventListener("transitionend", e)
            };
            this.el_.addEventListener("transitionend", r, !1)
        }, e.prototype.reset = function() {
            this.el_.dataset.mdState = "", this.el_.style.maxHeight = "", this.el_.style.display = "", this.el_.style.overflow = ""
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t) {
            r(this, e);
            var n = "string" == typeof t ? document.querySelector(t) : t;
            if (!(n instanceof HTMLElement)) throw new ReferenceError;
            this.el_ = n
        }
        return e.prototype.setup = function() {
            this.el_.children[this.el_.children.length - 1].style.webkitOverflowScrolling = "touch";
            var e = this.el_.querySelectorAll("[data-md-toggle]");
            Array.prototype.forEach.call(e, function(e) {
                if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                if (e.checked) {
                    var t = e.nextElementSibling;
                    if (!(t instanceof HTMLElement)) throw new ReferenceError;
                    for (;
                        "NAV" !== t.tagName && t.nextElementSibling;) t = t.nextElementSibling;
                    if (!(e.parentNode instanceof HTMLElement && e.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError;
                    var n = e.parentNode.parentNode,
                        r = t.children[t.children.length - 1];
                    n.style.webkitOverflowScrolling = "", r.style.webkitOverflowScrolling = "touch"
                }
            })
        }, e.prototype.update = function(e) {
            var t = e.target;
            if (!(t instanceof HTMLElement)) throw new ReferenceError;
            var n = t.nextElementSibling;
            if (!(n instanceof HTMLElement)) throw new ReferenceError;
            for (;
                "NAV" !== n.tagName && n.nextElementSibling;) n = n.nextElementSibling;
            if (!(t.parentNode instanceof HTMLElement && t.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError;
            var r = t.parentNode.parentNode,
                i = n.children[n.children.length - 1];
            if (r.style.webkitOverflowScrolling = "", i.style.webkitOverflowScrolling = "", !t.checked) {
                var o = function e() {
                    n instanceof HTMLElement && (r.style.webkitOverflowScrolling = "touch", n.removeEventListener("transitionend", e))
                };
                n.addEventListener("transitionend", o, !1)
            }
            if (t.checked) {
                var a = function e() {
                    n instanceof HTMLElement && (i.style.webkitOverflowScrolling = "touch", n.removeEventListener("transitionend", e))
                };
                n.addEventListener("transitionend", a, !1)
            }
        }, e.prototype.reset = function() {
            this.el_.children[1].style.webkitOverflowScrolling = "";
            var e = this.el_.querySelectorAll("[data-md-toggle]");
            Array.prototype.forEach.call(e, function(e) {
                if (!(e instanceof HTMLInputElement)) throw new ReferenceError;
                if (e.checked) {
                    var t = e.nextElementSibling;
                    if (!(t instanceof HTMLElement)) throw new ReferenceError;
                    for (;
                        "NAV" !== t.tagName && t.nextElementSibling;) t = t.nextElementSibling;
                    if (!(e.parentNode instanceof HTMLElement && e.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError;
                    var n = e.parentNode.parentNode,
                        r = t.children[t.children.length - 1];
                    n.style.webkitOverflowScrolling = "", r.style.webkitOverflowScrolling = ""
                }
            })
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(32),
        o = r(i),
        a = n(33),
        s = r(a);
    t.default = {
        Lock: o.default,
        Result: s.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t) {
            r(this, e);
            var n = "string" == typeof t ? document.querySelector(t) : t;
            if (!(n instanceof HTMLInputElement)) throw new ReferenceError;
            if (this.el_ = n, !document.body) throw new ReferenceError;
            this.lock_ = document.body
        }
        return e.prototype.setup = function() {
            this.update()
        }, e.prototype.update = function() {
            var e = this;
            this.el_.checked ? (this.offset_ = window.pageYOffset, setTimeout(function() {
                window.scrollTo(0, 0), e.el_.checked && (e.lock_.dataset.mdState = "lock")
            }, 400)) : (this.lock_.dataset.mdState = "", setTimeout(function() {
                void 0 !== e.offset_ && window.scrollTo(0, e.offset_)
            }, 100))
        }, e.prototype.reset = function() {
            "lock" === this.lock_.dataset.mdState && window.scrollTo(0, this.offset_), this.lock_.dataset.mdState = ""
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";
    (function(e) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var o = n(34),
            a = r(o),
            s = n(35),
            c = r(s),
            u = function(e, t) {
                var n = t;
                if (e.length > n) {
                    for (;
                        " " !== e[n] && --n > 0;);
                    return e.substring(0, n) + "..."
                }
                return e
            },
            l = function(e) {
                var t = document.getElementsByName("lang:" + e)[0];
                if (!(t instanceof HTMLMetaElement)) throw new ReferenceError;
                return t.content
            },
            d = function() {
                function t(e, n) {
                    i(this, t);
                    var r = "string" == typeof e ? document.querySelector(e) : e;
                    if (!(r instanceof HTMLElement)) throw new ReferenceError;
                    this.el_ = r;
                    var o = Array.prototype.slice.call(this.el_.children),
                        a = o[0],
                        s = o[1];
                    this.data_ = n, this.meta_ = a, this.list_ = s, this.message_ = {
                        placeholder: this.meta_.textContent,
                        none: l("search.result.none"),
                        one: l("search.result.one"),
                        other: l("search.result.other")
                    };
                    var u = l("search.tokenizer");
                    u.length && (c.default.tokenizer.separator = u), this.lang_ = l("search.language").split(",").filter(Boolean).map(function(e) {
                        return e.trim()
                    })
                }
                return t.prototype.update = function(t) {
                    var n = this;
                    if ("focus" !== t.type || this.index_) {
                        if ("focus" === t.type || "keyup" === t.type) {
                            var r = t.target;
                            if (!(r instanceof HTMLInputElement)) throw new ReferenceError;
                            if (!this.index_ || r.value === this.value_) return;
                            for (; this.list_.firstChild;) this.list_.removeChild(this.list_.firstChild);
                            if (this.value_ = r.value, 0 === this.value_.length) return void(this.meta_.textContent = this.message_.placeholder);
                            var i = this.index_.query(function(e) {
                                    n.value_.toLowerCase().split(" ").filter(Boolean).forEach(function(t) {
                                        e.term(t, {
                                            wildcard: c.default.Query.wildcard.TRAILING
                                        })
                                    })
                                }).reduce(function(e, t) {
                                    var r = n.docs_.get(t.ref);
                                    if (r.parent) {
                                        var i = r.parent.location;
                                        e.set(i, (e.get(i) || []).concat(t))
                                    } else {
                                        var o = r.location;
                                        e.set(o, e.get(o) || [])
                                    }
                                    return e
                                }, new Map),
                                o = (0, a.default)(this.value_.trim()).replace(new RegExp(c.default.tokenizer.separator, "img"), "|"),
                                s = new RegExp("(^|" + c.default.tokenizer.separator + ")(" + o + ")", "img"),
                                d = function(e, t, n) {
                                    return t + "<em>" + n + "</em>"
                                };
                            this.stack_ = [], i.forEach(function(t, r) {
                                var i, o = n.docs_.get(r),
                                    a = e.createElement("li", {
                                        class: "md-search-result__item"
                                    }, e.createElement("a", {
                                        href: o.location,
                                        title: o.title,
                                        class: "md-search-result__link",
                                        tabindex: "-1"
                                    }, e.createElement("article", {
                                        class: "md-search-result__article md-search-result__article--document"
                                    }, e.createElement("h1", {
                                        class: "md-search-result__title"
                                    }, {
                                        __html: o.title.replace(s, d)
                                    }), o.text.length ? e.createElement("p", {
                                        class: "md-search-result__teaser"
                                    }, {
                                        __html: o.text.replace(s, d)
                                    }) : {}))),
                                    c = t.map(function(t) {
                                        return function() {
                                            var r = n.docs_.get(t.ref);
                                            a.appendChild(e.createElement("a", {
                                                href: r.location,
                                                title: r.title,
                                                class: "md-search-result__link",
                                                "data-md-rel": "anchor",
                                                tabindex: "-1"
                                            }, e.createElement("article", {
                                                class: "md-search-result__article"
                                            }, e.createElement("h1", {
                                                class: "md-search-result__title"
                                            }, {
                                                __html: r.title.replace(s, d)
                                            }), r.text.length ? e.createElement("p", {
                                                class: "md-search-result__teaser"
                                            }, {
                                                __html: u(r.text.replace(s, d), 400)
                                            }) : {})))
                                        }
                                    });
                                (i = n.stack_).push.apply(i, [function() {
                                    return n.list_.appendChild(a)
                                }].concat(c))
                            });
                            var f = this.el_.parentNode;
                            if (!(f instanceof HTMLElement)) throw new ReferenceError;
                            for (; this.stack_.length && f.offsetHeight >= f.scrollHeight - 16;) this.stack_.shift()();
                            var h = this.list_.querySelectorAll("[data-md-rel=anchor]");
                            switch (Array.prototype.forEach.call(h, function(e) {
                                ["click", "keydown"].forEach(function(t) {
                                    e.addEventListener(t, function(n) {
                                        if ("keydown" !== t || 13 === n.keyCode) {
                                            var r = document.querySelector("[data-md-toggle=search]");
                                            if (!(r instanceof HTMLInputElement)) throw new ReferenceError;
                                            r.checked && (r.checked = !1, r.dispatchEvent(new CustomEvent("change"))), n.preventDefault(), setTimeout(function() {
                                                document.location.href = e.href
                                            }, 100)
                                        }
                                    })
                                })
                            }), i.size) {
                                case 0:
                                    this.meta_.textContent = this.message_.none;
                                    break;
                                case 1:
                                    this.meta_.textContent = this.message_.one;
                                    break;
                                default:
                                    this.meta_.textContent = this.message_.other.replace("#", i.size)
                            }
                        }
                    } else {
                        var p = function(e) {
                            n.docs_ = e.reduce(function(e, t) {
                                var n = t.location.split("#"),
                                    r = n[0];
                                return n[1] && (t.parent = e.get(r), t.parent && !t.parent.done && (t.parent.title = t.title, t.parent.text = t.text, t.parent.done = !0)), t.text = t.text.replace(/\n/g, " ").replace(/\s+/g, " ").replace(/\s+([,.:;!?])/g, function(e, t) {
                                    return t
                                }), t.parent && t.parent.title === t.title || e.set(t.location, t), e
                            }, new Map);
                            var t = n.docs_,
                                r = n.lang_;
                            n.stack_ = [], n.index_ = (0, c.default)(function() {
                                var e, n = this,
                                    i = {
                                        "search.pipeline.trimmer": c.default.trimmer,
                                        "search.pipeline.stopwords": c.default.stopWordFilter
                                    },
                                    o = Object.keys(i).reduce(function(e, t) {
                                        return l(t).match(/^false$/i) || e.push(i[t]), e
                                    }, []);
                                this.pipeline.reset(), o && (e = this.pipeline).add.apply(e, o), 1 === r.length && "en" !== r[0] && c.default[r[0]] ? this.use(c.default[r[0]]) : r.length > 1 && this.use(c.default.multiLanguage.apply(c.default, r)), this.field("title", {
                                    boost: 10
                                }), this.field("text"), this.ref("location"), t.forEach(function(e) {
                                    return n.add(e)
                                })
                            });
                            var i = n.el_.parentNode;
                            if (!(i instanceof HTMLElement)) throw new ReferenceError;
                            i.addEventListener("scroll", function() {
                                for (; n.stack_.length && i.scrollTop + i.offsetHeight >= i.scrollHeight - 16;) n.stack_.splice(0, 10).forEach(function(e) {
                                    return e()
                                })
                            })
                        };
                        setTimeout(function() {
                            return "function" == typeof n.data_ ? n.data_().then(p) : p(n.data_)
                        }, 250)
                    }
                }, t
            }();
        t.default = d
    }).call(t, n(0))
}, function(e, t, n) {
    "use strict";
    var r = /[|\\{}()[\]^$+*?.]/g;
    e.exports = function(e) {
        if ("string" != typeof e) throw new TypeError("Expected a string");
        return e.replace(r, "\\$&")
    }
}, function(e, t, n) {
    (function(t) {
        e.exports = t.lunr = n(36)
    }).call(t, n(1))
}, function(e, t, n) {
    var r, i;
    ! function() {
        var o = function(e) {
            var t = new o.Builder;
            return t.pipeline.add(o.trimmer, o.stopWordFilter, o.stemmer), t.searchPipeline.add(o.stemmer), e.call(t, t), t.build()
        };
        o.version = "2.1.5", o.utils = {}, o.utils.warn = function(e) {
                return function(t) {
                    e.console && console.warn && console.warn(t)
                }
            }(this), o.utils.asString = function(e) {
                return void 0 === e || null === e ? "" : e.toString()
            }, o.FieldRef = function(e, t, n) {
                this.docRef = e, this.fieldName = t, this._stringValue = n
            }, o.FieldRef.joiner = "/", o.FieldRef.fromString = function(e) {
                var t = e.indexOf(o.FieldRef.joiner);
                if (-1 === t) throw "malformed field ref string";
                var n = e.slice(0, t),
                    r = e.slice(t + 1);
                return new o.FieldRef(r, n, e)
            }, o.FieldRef.prototype.toString = function() {
                return void 0 == this._stringValue && (this._stringValue = this.fieldName + o.FieldRef.joiner + this.docRef), this._stringValue
            }, o.idf = function(e, t) {
                var n = 0;
                for (var r in e) "_index" != r && (n += Object.keys(e[r]).length);
                var i = (t - n + .5) / (n + .5);
                return Math.log(1 + Math.abs(i))
            }, o.Token = function(e, t) {
                this.str = e || "", this.metadata = t || {}
            }, o.Token.prototype.toString = function() {
                return this.str
            }, o.Token.prototype.update = function(e) {
                return this.str = e(this.str, this.metadata), this
            }, o.Token.prototype.clone = function(e) {
                return e = e || function(e) {
                    return e
                }, new o.Token(e(this.str, this.metadata), this.metadata)
            }, o.tokenizer = function(e) {
                if (null == e || void 0 == e) return [];
                if (Array.isArray(e)) return e.map(function(e) {
                    return new o.Token(o.utils.asString(e).toLowerCase())
                });
                for (var t = e.toString().trim().toLowerCase(), n = t.length, r = [], i = 0, a = 0; i <= n; i++) {
                    var s = t.charAt(i),
                        c = i - a;
                    (s.match(o.tokenizer.separator) || i == n) && (c > 0 && r.push(new o.Token(t.slice(a, i), {
                        position: [a, c],
                        index: r.length
                    })), a = i + 1)
                }
                return r
            }, o.tokenizer.separator = /[\s\-]+/, o.Pipeline = function() {
                this._stack = []
            }, o.Pipeline.registeredFunctions = Object.create(null), o.Pipeline.registerFunction = function(e, t) {
                t in this.registeredFunctions && o.utils.warn("Overwriting existing registered function: " + t), e.label = t, o.Pipeline.registeredFunctions[e.label] = e
            }, o.Pipeline.warnIfFunctionNotRegistered = function(e) {
                e.label && e.label in this.registeredFunctions || o.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", e)
            }, o.Pipeline.load = function(e) {
                var t = new o.Pipeline;
                return e.forEach(function(e) {
                    var n = o.Pipeline.registeredFunctions[e];
                    if (!n) throw new Error("Cannot load unregistered function: " + e);
                    t.add(n)
                }), t
            }, o.Pipeline.prototype.add = function() {
                Array.prototype.slice.call(arguments).forEach(function(e) {
                    o.Pipeline.warnIfFunctionNotRegistered(e), this._stack.push(e)
                }, this)
            }, o.Pipeline.prototype.after = function(e, t) {
                o.Pipeline.warnIfFunctionNotRegistered(t);
                var n = this._stack.indexOf(e);
                if (-1 == n) throw new Error("Cannot find existingFn");
                n += 1, this._stack.splice(n, 0, t)
            }, o.Pipeline.prototype.before = function(e, t) {
                o.Pipeline.warnIfFunctionNotRegistered(t);
                var n = this._stack.indexOf(e);
                if (-1 == n) throw new Error("Cannot find existingFn");
                this._stack.splice(n, 0, t)
            }, o.Pipeline.prototype.remove = function(e) {
                var t = this._stack.indexOf(e); - 1 != t && this._stack.splice(t, 1)
            }, o.Pipeline.prototype.run = function(e) {
                for (var t = this._stack.length, n = 0; n < t; n++) {
                    var r = this._stack[n];
                    e = e.reduce(function(t, n, i) {
                        var o = r(n, i, e);
                        return void 0 === o || "" === o ? t : t.concat(o)
                    }, [])
                }
                return e
            }, o.Pipeline.prototype.runString = function(e) {
                var t = new o.Token(e);
                return this.run([t]).map(function(e) {
                    return e.toString()
                })
            }, o.Pipeline.prototype.reset = function() {
                this._stack = []
            }, o.Pipeline.prototype.toJSON = function() {
                return this._stack.map(function(e) {
                    return o.Pipeline.warnIfFunctionNotRegistered(e), e.label
                })
            }, o.Vector = function(e) {
                this._magnitude = 0, this.elements = e || []
            }, o.Vector.prototype.positionForIndex = function(e) {
                if (0 == this.elements.length) return 0;
                for (var t = 0, n = this.elements.length / 2, r = n - t, i = Math.floor(r / 2), o = this.elements[2 * i]; r > 1 && (o < e && (t = i), o > e && (n = i), o != e);) r = n - t, i = t + Math.floor(r / 2), o = this.elements[2 * i];
                return o == e ? 2 * i : o > e ? 2 * i : o < e ? 2 * (i + 1) : void 0
            }, o.Vector.prototype.insert = function(e, t) {
                this.upsert(e, t, function() {
                    throw "duplicate index"
                })
            }, o.Vector.prototype.upsert = function(e, t, n) {
                this._magnitude = 0;
                var r = this.positionForIndex(e);
                this.elements[r] == e ? this.elements[r + 1] = n(this.elements[r + 1], t) : this.elements.splice(r, 0, e, t)
            }, o.Vector.prototype.magnitude = function() {
                if (this._magnitude) return this._magnitude;
                for (var e = 0, t = this.elements.length, n = 1; n < t; n += 2) {
                    var r = this.elements[n];
                    e += r * r
                }
                return this._magnitude = Math.sqrt(e)
            }, o.Vector.prototype.dot = function(e) {
                for (var t = 0, n = this.elements, r = e.elements, i = n.length, o = r.length, a = 0, s = 0, c = 0, u = 0; c < i && u < o;) a = n[c], s = r[u], a < s ? c += 2 : a > s ? u += 2 : a == s && (t += n[c + 1] * r[u + 1], c += 2, u += 2);
                return t
            }, o.Vector.prototype.similarity = function(e) {
                return this.dot(e) / (this.magnitude() * e.magnitude())
            }, o.Vector.prototype.toArray = function() {
                for (var e = new Array(this.elements.length / 2), t = 1, n = 0; t < this.elements.length; t += 2, n++) e[n] = this.elements[t];
                return e
            }, o.Vector.prototype.toJSON = function() {
                return this.elements
            }, o.stemmer = function() {
                var e = {
                        ational: "ate",
                        tional: "tion",
                        enci: "ence",
                        anci: "ance",
                        izer: "ize",
                        bli: "ble",
                        alli: "al",
                        entli: "ent",
                        eli: "e",
                        ousli: "ous",
                        ization: "ize",
                        ation: "ate",
                        ator: "ate",
                        alism: "al",
                        iveness: "ive",
                        fulness: "ful",
                        ousness: "ous",
                        aliti: "al",
                        iviti: "ive",
                        biliti: "ble",
                        logi: "log"
                    },
                    t = {
                        icate: "ic",
                        ative: "",
                        alize: "al",
                        iciti: "ic",
                        ical: "ic",
                        ful: "",
                        ness: ""
                    },
                    n = "[aeiouy]",
                    r = "[^aeiou][^aeiouy]*",
                    i = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),
                    o = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),
                    a = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),
                    s = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),
                    c = /^(.+?)(ss|i)es$/,
                    u = /^(.+?)([^s])s$/,
                    l = /^(.+?)eed$/,
                    d = /^(.+?)(ed|ing)$/,
                    f = /.$/,
                    h = /(at|bl|iz)$/,
                    p = new RegExp("([^aeiouylsz])\\1$"),
                    m = new RegExp("^" + r + n + "[^aeiouwxy]$"),
                    v = /^(.+?[^aeiou])y$/,
                    y = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
                    g = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                    w = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
                    _ = /^(.+?)(s|t)(ion)$/,
                    E = /^(.+?)e$/,
                    x = /ll$/,
                    b = new RegExp("^" + r + n + "[^aeiouwxy]$"),
                    k = function(n) {
                        var r, k, T, S, L, C, M;
                        if (n.length < 3) return n;
                        if (T = n.substr(0, 1), "y" == T && (n = T.toUpperCase() + n.substr(1)), S = c, L = u, S.test(n) ? n = n.replace(S, "$1$2") : L.test(n) && (n = n.replace(L, "$1$2")), S = l, L = d, S.test(n)) {
                            var O = S.exec(n);
                            S = i, S.test(O[1]) && (S = f, n = n.replace(S, ""))
                        } else if (L.test(n)) {
                            var O = L.exec(n);
                            r = O[1], L = s, L.test(r) && (n = r, L = h, C = p, M = m, L.test(n) ? n += "e" : C.test(n) ? (S = f, n = n.replace(S, "")) : M.test(n) && (n += "e"))
                        }
                        if (S = v, S.test(n)) {
                            var O = S.exec(n);
                            r = O[1], n = r + "i"
                        }
                        if (S = y, S.test(n)) {
                            var O = S.exec(n);
                            r = O[1], k = O[2], S = i, S.test(r) && (n = r + e[k])
                        }
                        if (S = g, S.test(n)) {
                            var O = S.exec(n);
                            r = O[1], k = O[2], S = i, S.test(r) && (n = r + t[k])
                        }
                        if (S = w, L = _, S.test(n)) {
                            var O = S.exec(n);
                            r = O[1], S = o, S.test(r) && (n = r)
                        } else if (L.test(n)) {
                            var O = L.exec(n);
                            r = O[1] + O[2], L = o, L.test(r) && (n = r)
                        }
                        if (S = E, S.test(n)) {
                            var O = S.exec(n);
                            r = O[1], S = o, L = a, C = b, (S.test(r) || L.test(r) && !C.test(r)) && (n = r)
                        }
                        return S = x, L = o, S.test(n) && L.test(n) && (S = f, n = n.replace(S, "")), "y" == T && (n = T.toLowerCase() + n.substr(1)), n
                    };
                return function(e) {
                    return e.update(k)
                }
            }(), o.Pipeline.registerFunction(o.stemmer, "stemmer"), o.generateStopWordFilter = function(e) {
                var t = e.reduce(function(e, t) {
                    return e[t] = t, e
                }, {});
                return function(e) {
                    if (e && t[e.toString()] !== e.toString()) return e
                }
            }, o.stopWordFilter = o.generateStopWordFilter(["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]), o.Pipeline.registerFunction(o.stopWordFilter, "stopWordFilter"), o.trimmer = function(e) {
                return e.update(function(e) {
                    return e.replace(/^\W+/, "").replace(/\W+$/, "")
                })
            }, o.Pipeline.registerFunction(o.trimmer, "trimmer"), o.TokenSet = function() {
                this.final = !1, this.edges = {}, this.id = o.TokenSet._nextId, o.TokenSet._nextId += 1
            }, o.TokenSet._nextId = 1, o.TokenSet.fromArray = function(e) {
                for (var t = new o.TokenSet.Builder, n = 0, r = e.length; n < r; n++) t.insert(e[n]);
                return t.finish(), t.root
            }, o.TokenSet.fromClause = function(e) {
                return "editDistance" in e ? o.TokenSet.fromFuzzyString(e.term, e.editDistance) : o.TokenSet.fromString(e.term)
            }, o.TokenSet.fromFuzzyString = function(e, t) {
                for (var n = new o.TokenSet, r = [{
                        node: n,
                        editsRemaining: t,
                        str: e
                    }]; r.length;) {
                    var i = r.pop();
                    if (i.str.length > 0) {
                        var a, s = i.str.charAt(0);
                        s in i.node.edges ? a = i.node.edges[s] : (a = new o.TokenSet, i.node.edges[s] = a), 1 == i.str.length ? a.final = !0 : r.push({
                            node: a,
                            editsRemaining: i.editsRemaining,
                            str: i.str.slice(1)
                        })
                    }
                    if (i.editsRemaining > 0 && i.str.length > 1) {
                        var c, s = i.str.charAt(1);
                        s in i.node.edges ? c = i.node.edges[s] : (c = new o.TokenSet, i.node.edges[s] = c), i.str.length <= 2 ? c.final = !0 : r.push({
                            node: c,
                            editsRemaining: i.editsRemaining - 1,
                            str: i.str.slice(2)
                        })
                    }
                    if (i.editsRemaining > 0 && 1 == i.str.length && (i.node.final = !0), i.editsRemaining > 0 && i.str.length >= 1) {
                        if ("*" in i.node.edges) var u = i.node.edges["*"];
                        else {
                            var u = new o.TokenSet;
                            i.node.edges["*"] = u
                        }
                        1 == i.str.length ? u.final = !0 : r.push({
                            node: u,
                            editsRemaining: i.editsRemaining - 1,
                            str: i.str.slice(1)
                        })
                    }
                    if (i.editsRemaining > 0) {
                        if ("*" in i.node.edges) var l = i.node.edges["*"];
                        else {
                            var l = new o.TokenSet;
                            i.node.edges["*"] = l
                        }
                        0 == i.str.length ? l.final = !0 : r.push({
                            node: l,
                            editsRemaining: i.editsRemaining - 1,
                            str: i.str
                        })
                    }
                    if (i.editsRemaining > 0 && i.str.length > 1) {
                        var d, f = i.str.charAt(0),
                            h = i.str.charAt(1);
                        h in i.node.edges ? d = i.node.edges[h] : (d = new o.TokenSet, i.node.edges[h] = d), 1 == i.str.length ? d.final = !0 : r.push({
                            node: d,
                            editsRemaining: i.editsRemaining - 1,
                            str: f + i.str.slice(2)
                        })
                    }
                }
                return n
            }, o.TokenSet.fromString = function(e) {
                for (var t = new o.TokenSet, n = t, r = !1, i = 0, a = e.length; i < a; i++) {
                    var s = e[i],
                        c = i == a - 1;
                    if ("*" == s) r = !0, t.edges[s] = t, t.final = c;
                    else {
                        var u = new o.TokenSet;
                        u.final = c, t.edges[s] = u, t = u, r && (t.edges["*"] = n)
                    }
                }
                return n
            }, o.TokenSet.prototype.toArray = function() {
                for (var e = [], t = [{
                        prefix: "",
                        node: this
                    }]; t.length;) {
                    var n = t.pop(),
                        r = Object.keys(n.node.edges),
                        i = r.length;
                    n.node.final && e.push(n.prefix);
                    for (var o = 0; o < i; o++) {
                        var a = r[o];
                        t.push({
                            prefix: n.prefix.concat(a),
                            node: n.node.edges[a]
                        })
                    }
                }
                return e
            }, o.TokenSet.prototype.toString = function() {
                if (this._str) return this._str;
                for (var e = this.final ? "1" : "0", t = Object.keys(this.edges).sort(), n = t.length, r = 0; r < n; r++) {
                    var i = t[r];
                    e = e + i + this.edges[i].id
                }
                return e
            }, o.TokenSet.prototype.intersect = function(e) {
                for (var t = new o.TokenSet, n = void 0, r = [{
                        qNode: e,
                        output: t,
                        node: this
                    }]; r.length;) {
                    n = r.pop();
                    for (var i = Object.keys(n.qNode.edges), a = i.length, s = Object.keys(n.node.edges), c = s.length, u = 0; u < a; u++)
                        for (var l = i[u], d = 0; d < c; d++) {
                            var f = s[d];
                            if (f == l || "*" == l) {
                                var h = n.node.edges[f],
                                    p = n.qNode.edges[l],
                                    m = h.final && p.final,
                                    v = void 0;
                                f in n.output.edges ? (v = n.output.edges[f], v.final = v.final || m) : (v = new o.TokenSet, v.final = m, n.output.edges[f] = v), r.push({
                                    qNode: p,
                                    output: v,
                                    node: h
                                })
                            }
                        }
                }
                return t
            }, o.TokenSet.Builder = function() {
                this.previousWord = "", this.root = new o.TokenSet, this.uncheckedNodes = [], this.minimizedNodes = {}
            }, o.TokenSet.Builder.prototype.insert = function(e) {
                var t, n = 0;
                if (e < this.previousWord) throw new Error("Out of order word insertion");
                for (var r = 0; r < e.length && r < this.previousWord.length && e[r] == this.previousWord[r]; r++) n++;
                this.minimize(n), t = 0 == this.uncheckedNodes.length ? this.root : this.uncheckedNodes[this.uncheckedNodes.length - 1].child;
                for (var r = n; r < e.length; r++) {
                    var i = new o.TokenSet,
                        a = e[r];
                    t.edges[a] = i, this.uncheckedNodes.push({
                        parent: t,
                        char: a,
                        child: i
                    }), t = i
                }
                t.final = !0, this.previousWord = e
            }, o.TokenSet.Builder.prototype.finish = function() {
                this.minimize(0)
            }, o.TokenSet.Builder.prototype.minimize = function(e) {
                for (var t = this.uncheckedNodes.length - 1; t >= e; t--) {
                    var n = this.uncheckedNodes[t],
                        r = n.child.toString();
                    r in this.minimizedNodes ? n.parent.edges[n.char] = this.minimizedNodes[r] : (n.child._str = r, this.minimizedNodes[r] = n.child), this.uncheckedNodes.pop()
                }
            }, o.Index = function(e) {
                this.invertedIndex = e.invertedIndex, this.fieldVectors = e.fieldVectors, this.tokenSet = e.tokenSet, this.fields = e.fields, this.pipeline = e.pipeline
            }, o.Index.prototype.search = function(e) {
                return this.query(function(t) {
                    new o.QueryParser(e, t).parse()
                })
            }, o.Index.prototype.query = function(e) {
                var t = new o.Query(this.fields),
                    n = Object.create(null),
                    r = Object.create(null),
                    i = Object.create(null);
                e.call(t, t);
                for (var a = 0; a < t.clauses.length; a++) {
                    var s = t.clauses[a],
                        c = null;
                    c = s.usePipeline ? this.pipeline.runString(s.term) : [s.term];
                    for (var u = 0; u < c.length; u++) {
                        var l = c[u];
                        s.term = l;
                        for (var d = o.TokenSet.fromClause(s), f = this.tokenSet.intersect(d).toArray(), h = 0; h < f.length; h++)
                            for (var p = f[h], m = this.invertedIndex[p], v = m._index, y = 0; y < s.fields.length; y++) {
                                var g = s.fields[y],
                                    w = m[g],
                                    _ = Object.keys(w),
                                    E = p + "/" + g;
                                if (void 0 === r[g] && (r[g] = new o.Vector), r[g].upsert(v, 1 * s.boost, function(e, t) {
                                        return e + t
                                    }), !i[E]) {
                                    for (var x = 0; x < _.length; x++) {
                                        var b, k = _[x],
                                            T = new o.FieldRef(k, g),
                                            S = w[k];
                                        void 0 === (b = n[T]) ? n[T] = new o.MatchData(p, g, S) : b.add(p, g, S)
                                    }
                                    i[E] = !0
                                }
                            }
                    }
                }
                for (var L = Object.keys(n), C = [], M = Object.create(null), a = 0; a < L.length; a++) {
                    var O, A = o.FieldRef.fromString(L[a]),
                        R = A.docRef,
                        I = this.fieldVectors[A],
                        P = r[A.fieldName].similarity(I);
                    if (void 0 !== (O = M[R])) O.score += P, O.matchData.combine(n[A]);
                    else {
                        var N = {
                            ref: R,
                            score: P,
                            matchData: n[A]
                        };
                        M[R] = N, C.push(N)
                    }
                }
                return C.sort(function(e, t) {
                    return t.score - e.score
                })
            }, o.Index.prototype.toJSON = function() {
                var e = Object.keys(this.invertedIndex).sort().map(function(e) {
                        return [e, this.invertedIndex[e]]
                    }, this),
                    t = Object.keys(this.fieldVectors).map(function(e) {
                        return [e, this.fieldVectors[e].toJSON()]
                    }, this);
                return {
                    version: o.version,
                    fields: this.fields,
                    fieldVectors: t,
                    invertedIndex: e,
                    pipeline: this.pipeline.toJSON()
                }
            }, o.Index.load = function(e) {
                var t = {},
                    n = {},
                    r = e.fieldVectors,
                    i = {},
                    a = e.invertedIndex,
                    s = new o.TokenSet.Builder,
                    c = o.Pipeline.load(e.pipeline);
                e.version != o.version && o.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + o.version + "' does not match serialized index '" + e.version + "'");
                for (var u = 0; u < r.length; u++) {
                    var l = r[u],
                        d = l[0],
                        f = l[1];
                    n[d] = new o.Vector(f)
                }
                for (var u = 0; u < a.length; u++) {
                    var l = a[u],
                        h = l[0],
                        p = l[1];
                    s.insert(h), i[h] = p
                }
                return s.finish(), t.fields = e.fields, t.fieldVectors = n, t.invertedIndex = i, t.tokenSet = s.root, t.pipeline = c, new o.Index(t)
            }, o.Builder = function() {
                this._ref = "id", this._fields = [], this.invertedIndex = Object.create(null), this.fieldTermFrequencies = {}, this.fieldLengths = {}, this.tokenizer = o.tokenizer, this.pipeline = new o.Pipeline, this.searchPipeline = new o.Pipeline, this.documentCount = 0, this._b = .75, this._k1 = 1.2, this.termIndex = 0, this.metadataWhitelist = []
            }, o.Builder.prototype.ref = function(e) {
                this._ref = e
            }, o.Builder.prototype.field = function(e) {
                this._fields.push(e)
            }, o.Builder.prototype.b = function(e) {
                this._b = e < 0 ? 0 : e > 1 ? 1 : e
            }, o.Builder.prototype.k1 = function(e) {
                this._k1 = e
            }, o.Builder.prototype.add = function(e) {
                var t = e[this._ref];
                this.documentCount += 1;
                for (var n = 0; n < this._fields.length; n++) {
                    var r = this._fields[n],
                        i = e[r],
                        a = this.tokenizer(i),
                        s = this.pipeline.run(a),
                        c = new o.FieldRef(t, r),
                        u = Object.create(null);
                    this.fieldTermFrequencies[c] = u, this.fieldLengths[c] = 0, this.fieldLengths[c] += s.length;
                    for (var l = 0; l < s.length; l++) {
                        var d = s[l];
                        if (void 0 == u[d] && (u[d] = 0), u[d] += 1, void 0 == this.invertedIndex[d]) {
                            var f = Object.create(null);
                            f._index = this.termIndex, this.termIndex += 1;
                            for (var h = 0; h < this._fields.length; h++) f[this._fields[h]] = Object.create(null);
                            this.invertedIndex[d] = f
                        }
                        void 0 == this.invertedIndex[d][r][t] && (this.invertedIndex[d][r][t] = Object.create(null));
                        for (var p = 0; p < this.metadataWhitelist.length; p++) {
                            var m = this.metadataWhitelist[p],
                                v = d.metadata[m];
                            void 0 == this.invertedIndex[d][r][t][m] && (this.invertedIndex[d][r][t][m] = []), this.invertedIndex[d][r][t][m].push(v)
                        }
                    }
                }
            }, o.Builder.prototype.calculateAverageFieldLengths = function() {
                for (var e = Object.keys(this.fieldLengths), t = e.length, n = {}, r = {}, i = 0; i < t; i++) {
                    var a = o.FieldRef.fromString(e[i]),
                        s = a.fieldName;
                    r[s] || (r[s] = 0), r[s] += 1, n[s] || (n[s] = 0), n[s] += this.fieldLengths[a]
                }
                for (var i = 0; i < this._fields.length; i++) {
                    var s = this._fields[i];
                    n[s] = n[s] / r[s]
                }
                this.averageFieldLength = n
            }, o.Builder.prototype.createFieldVectors = function() {
                for (var e = {}, t = Object.keys(this.fieldTermFrequencies), n = t.length, r = Object.create(null), i = 0; i < n; i++) {
                    for (var a = o.FieldRef.fromString(t[i]), s = a.fieldName, c = this.fieldLengths[a], u = new o.Vector, l = this.fieldTermFrequencies[a], d = Object.keys(l), f = d.length, h = 0; h < f; h++) {
                        var p, m, v, y = d[h],
                            g = l[y],
                            w = this.invertedIndex[y]._index;
                        void 0 === r[y] ? (p = o.idf(this.invertedIndex[y], this.documentCount), r[y] = p) : p = r[y], m = p * ((this._k1 + 1) * g) / (this._k1 * (1 - this._b + this._b * (c / this.averageFieldLength[s])) + g), v = Math.round(1e3 * m) / 1e3, u.insert(w, v)
                    }
                    e[a] = u
                }
                this.fieldVectors = e
            }, o.Builder.prototype.createTokenSet = function() {
                this.tokenSet = o.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())
            }, o.Builder.prototype.build = function() {
                return this.calculateAverageFieldLengths(), this.createFieldVectors(), this.createTokenSet(), new o.Index({
                    invertedIndex: this.invertedIndex,
                    fieldVectors: this.fieldVectors,
                    tokenSet: this.tokenSet,
                    fields: this._fields,
                    pipeline: this.searchPipeline
                })
            }, o.Builder.prototype.use = function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                t.unshift(this), e.apply(this, t)
            }, o.MatchData = function(e, t, n) {
                for (var r = Object.create(null), i = Object.keys(n), o = 0; o < i.length; o++) {
                    var a = i[o];
                    r[a] = n[a].slice()
                }
                this.metadata = Object.create(null), this.metadata[e] = Object.create(null), this.metadata[e][t] = r
            }, o.MatchData.prototype.combine = function(e) {
                for (var t = Object.keys(e.metadata), n = 0; n < t.length; n++) {
                    var r = t[n],
                        i = Object.keys(e.metadata[r]);
                    void 0 == this.metadata[r] && (this.metadata[r] = Object.create(null));
                    for (var o = 0; o < i.length; o++) {
                        var a = i[o],
                            s = Object.keys(e.metadata[r][a]);
                        void 0 == this.metadata[r][a] && (this.metadata[r][a] = Object.create(null));
                        for (var c = 0; c < s.length; c++) {
                            var u = s[c];
                            void 0 == this.metadata[r][a][u] ? this.metadata[r][a][u] = e.metadata[r][a][u] : this.metadata[r][a][u] = this.metadata[r][a][u].concat(e.metadata[r][a][u])
                        }
                    }
                }
            }, o.MatchData.prototype.add = function(e, t, n) {
                if (!(e in this.metadata)) return this.metadata[e] = Object.create(null), void(this.metadata[e][t] = n);
                if (!(t in this.metadata[e])) return void(this.metadata[e][t] = n);
                for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                    var o = r[i];
                    o in this.metadata[e][t] ? this.metadata[e][t][o] = this.metadata[e][t][o].concat(n[o]) : this.metadata[e][t][o] = n[o]
                }
            }, o.Query = function(e) {
                this.clauses = [], this.allFields = e
            }, o.Query.wildcard = new String("*"), o.Query.wildcard.NONE = 0, o.Query.wildcard.LEADING = 1, o.Query.wildcard.TRAILING = 2, o.Query.prototype.clause = function(e) {
                return "fields" in e || (e.fields = this.allFields), "boost" in e || (e.boost = 1), "usePipeline" in e || (e.usePipeline = !0), "wildcard" in e || (e.wildcard = o.Query.wildcard.NONE), e.wildcard & o.Query.wildcard.LEADING && e.term.charAt(0) != o.Query.wildcard && (e.term = "*" + e.term), e.wildcard & o.Query.wildcard.TRAILING && e.term.slice(-1) != o.Query.wildcard && (e.term = e.term + "*"), this.clauses.push(e), this
            }, o.Query.prototype.term = function(e, t) {
                var n = t || {};
                return n.term = e, this.clause(n), this
            }, o.QueryParseError = function(e, t, n) {
                this.name = "QueryParseError", this.message = e, this.start = t, this.end = n
            }, o.QueryParseError.prototype = new Error, o.QueryLexer = function(e) {
                this.lexemes = [], this.str = e, this.length = e.length, this.pos = 0, this.start = 0, this.escapeCharPositions = []
            }, o.QueryLexer.prototype.run = function() {
                for (var e = o.QueryLexer.lexText; e;) e = e(this)
            }, o.QueryLexer.prototype.sliceString = function() {
                for (var e = [], t = this.start, n = this.pos, r = 0; r < this.escapeCharPositions.length; r++) n = this.escapeCharPositions[r], e.push(this.str.slice(t, n)), t = n + 1;
                return e.push(this.str.slice(t, this.pos)), this.escapeCharPositions.length = 0, e.join("")
            }, o.QueryLexer.prototype.emit = function(e) {
                this.lexemes.push({
                    type: e,
                    str: this.sliceString(),
                    start: this.start,
                    end: this.pos
                }), this.start = this.pos
            }, o.QueryLexer.prototype.escapeCharacter = function() {
                this.escapeCharPositions.push(this.pos - 1), this.pos += 1
            }, o.QueryLexer.prototype.next = function() {
                if (this.pos >= this.length) return o.QueryLexer.EOS;
                var e = this.str.charAt(this.pos);
                return this.pos += 1, e
            }, o.QueryLexer.prototype.width = function() {
                return this.pos - this.start
            }, o.QueryLexer.prototype.ignore = function() {
                this.start == this.pos && (this.pos += 1), this.start = this.pos
            }, o.QueryLexer.prototype.backup = function() {
                this.pos -= 1
            }, o.QueryLexer.prototype.acceptDigitRun = function() {
                var e, t;
                do {
                    e = this.next(), t = e.charCodeAt(0)
                } while (t > 47 && t < 58);
                e != o.QueryLexer.EOS && this.backup()
            }, o.QueryLexer.prototype.more = function() {
                return this.pos < this.length
            }, o.QueryLexer.EOS = "EOS", o.QueryLexer.FIELD = "FIELD", o.QueryLexer.TERM = "TERM", o.QueryLexer.EDIT_DISTANCE = "EDIT_DISTANCE", o.QueryLexer.BOOST = "BOOST", o.QueryLexer.lexField = function(e) {
                return e.backup(), e.emit(o.QueryLexer.FIELD), e.ignore(), o.QueryLexer.lexText
            }, o.QueryLexer.lexTerm = function(e) {
                if (e.width() > 1 && (e.backup(), e.emit(o.QueryLexer.TERM)), e.ignore(), e.more()) return o.QueryLexer.lexText
            }, o.QueryLexer.lexEditDistance = function(e) {
                return e.ignore(), e.acceptDigitRun(), e.emit(o.QueryLexer.EDIT_DISTANCE), o.QueryLexer.lexText
            }, o.QueryLexer.lexBoost = function(e) {
                return e.ignore(), e.acceptDigitRun(), e.emit(o.QueryLexer.BOOST), o.QueryLexer.lexText
            }, o.QueryLexer.lexEOS = function(e) {
                e.width() > 0 && e.emit(o.QueryLexer.TERM)
            }, o.QueryLexer.termSeparator = o.tokenizer.separator, o.QueryLexer.lexText = function(e) {
                for (;;) {
                    var t = e.next();
                    if (t == o.QueryLexer.EOS) return o.QueryLexer.lexEOS;
                    if (92 != t.charCodeAt(0)) {
                        if (":" == t) return o.QueryLexer.lexField;
                        if ("~" == t) return e.backup(), e.width() > 0 && e.emit(o.QueryLexer.TERM), o.QueryLexer.lexEditDistance;
                        if ("^" == t) return e.backup(), e.width() > 0 && e.emit(o.QueryLexer.TERM), o.QueryLexer.lexBoost;
                        if (t.match(o.QueryLexer.termSeparator)) return o.QueryLexer.lexTerm
                    } else e.escapeCharacter()
                }
            }, o.QueryParser = function(e, t) {
                this.lexer = new o.QueryLexer(e), this.query = t, this.currentClause = {}, this.lexemeIdx = 0
            }, o.QueryParser.prototype.parse = function() {
                this.lexer.run(), this.lexemes = this.lexer.lexemes;
                for (var e = o.QueryParser.parseFieldOrTerm; e;) e = e(this);
                return this.query
            }, o.QueryParser.prototype.peekLexeme = function() {
                return this.lexemes[this.lexemeIdx]
            }, o.QueryParser.prototype.consumeLexeme = function() {
                var e = this.peekLexeme();
                return this.lexemeIdx += 1, e
            }, o.QueryParser.prototype.nextClause = function() {
                var e = this.currentClause;
                this.query.clause(e), this.currentClause = {}
            }, o.QueryParser.parseFieldOrTerm = function(e) {
                var t = e.peekLexeme();
                if (void 0 != t) switch (t.type) {
                    case o.QueryLexer.FIELD:
                        return o.QueryParser.parseField;
                    case o.QueryLexer.TERM:
                        return o.QueryParser.parseTerm;
                    default:
                        var n = "expected either a field or a term, found " + t.type;
                        throw t.str.length >= 1 && (n += " with value '" + t.str + "'"), new o.QueryParseError(n, t.start, t.end)
                }
            }, o.QueryParser.parseField = function(e) {
                var t = e.consumeLexeme();
                if (void 0 != t) {
                    if (-1 == e.query.allFields.indexOf(t.str)) {
                        var n = e.query.allFields.map(function(e) {
                                return "'" + e + "'"
                            }).join(", "),
                            r = "unrecognised field '" + t.str + "', possible fields: " + n;
                        throw new o.QueryParseError(r, t.start, t.end)
                    }
                    e.currentClause.fields = [t.str];
                    var i = e.peekLexeme();
                    if (void 0 == i) {
                        var r = "expecting term, found nothing";
                        throw new o.QueryParseError(r, t.start, t.end)
                    }
                    switch (i.type) {
                        case o.QueryLexer.TERM:
                            return o.QueryParser.parseTerm;
                        default:
                            var r = "expecting term, found '" + i.type + "'";
                            throw new o.QueryParseError(r, i.start, i.end)
                    }
                }
            }, o.QueryParser.parseTerm = function(e) {
                var t = e.consumeLexeme();
                if (void 0 != t) {
                    e.currentClause.term = t.str.toLowerCase(), -1 != t.str.indexOf("*") && (e.currentClause.usePipeline = !1);
                    var n = e.peekLexeme();
                    if (void 0 == n) return void e.nextClause();
                    switch (n.type) {
                        case o.QueryLexer.TERM:
                            return e.nextClause(), o.QueryParser.parseTerm;
                        case o.QueryLexer.FIELD:
                            return e.nextClause(), o.QueryParser.parseField;
                        case o.QueryLexer.EDIT_DISTANCE:
                            return o.QueryParser.parseEditDistance;
                        case o.QueryLexer.BOOST:
                            return o.QueryParser.parseBoost;
                        default:
                            var r = "Unexpected lexeme type '" + n.type + "'";
                            throw new o.QueryParseError(r, n.start, n.end)
                    }
                }
            }, o.QueryParser.parseEditDistance = function(e) {
                var t = e.consumeLexeme();
                if (void 0 != t) {
                    var n = parseInt(t.str, 10);
                    if (isNaN(n)) {
                        var r = "edit distance must be numeric";
                        throw new o.QueryParseError(r, t.start, t.end)
                    }
                    e.currentClause.editDistance = n;
                    var i = e.peekLexeme();
                    if (void 0 == i) return void e.nextClause();
                    switch (i.type) {
                        case o.QueryLexer.TERM:
                            return e.nextClause(), o.QueryParser.parseTerm;
                        case o.QueryLexer.FIELD:
                            return e.nextClause(), o.QueryParser.parseField;
                        case o.QueryLexer.EDIT_DISTANCE:
                            return o.QueryParser.parseEditDistance;
                        case o.QueryLexer.BOOST:
                            return o.QueryParser.parseBoost;
                        default:
                            var r = "Unexpected lexeme type '" + i.type + "'";
                            throw new o.QueryParseError(r, i.start, i.end)
                    }
                }
            }, o.QueryParser.parseBoost = function(e) {
                var t = e.consumeLexeme();
                if (void 0 != t) {
                    var n = parseInt(t.str, 10);
                    if (isNaN(n)) {
                        var r = "boost must be numeric";
                        throw new o.QueryParseError(r, t.start, t.end)
                    }
                    e.currentClause.boost = n;
                    var i = e.peekLexeme();
                    if (void 0 == i) return void e.nextClause();
                    switch (i.type) {
                        case o.QueryLexer.TERM:
                            return e.nextClause(), o.QueryParser.parseTerm;
                        case o.QueryLexer.FIELD:
                            return e.nextClause(), o.QueryParser.parseField;
                        case o.QueryLexer.EDIT_DISTANCE:
                            return o.QueryParser.parseEditDistance;
                        case o.QueryLexer.BOOST:
                            return o.QueryParser.parseBoost;
                        default:
                            var r = "Unexpected lexeme type '" + i.type + "'";
                            throw new o.QueryParseError(r, i.start, i.end)
                    }
                }
            },
            function(o, a) {
                r = a, void 0 !== (i = "function" == typeof r ? r.call(t, n, t, e) : r) && (e.exports = i)
            }(0, function() {
                return o
            })
    }()
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(38),
        i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t.default = {
        Position: i.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t, n) {
            r(this, e);
            var i = "string" == typeof t ? document.querySelector(t) : t;
            if (!(i instanceof HTMLElement && i.parentNode instanceof HTMLElement)) throw new ReferenceError;
            if (this.el_ = i, this.parent_ = i.parentNode, !((i = "string" == typeof n ? document.querySelector(n) : n) instanceof HTMLElement)) throw new ReferenceError;
            this.header_ = i, this.height_ = 0, this.pad_ = "fixed" === window.getComputedStyle(this.header_).position
        }
        return e.prototype.setup = function() {
            var e = Array.prototype.reduce.call(this.parent_.children, function(e, t) {
                return Math.max(e, t.offsetTop)
            }, 0);
            this.offset_ = e - (this.pad_ ? this.header_.offsetHeight : 0), this.update()
        }, e.prototype.update = function(e) {
            var t = window.pageYOffset,
                n = window.innerHeight;
            e && "resize" === e.type && this.setup();
            var r = {
                    top: this.pad_ ? this.header_.offsetHeight : 0,
                    bottom: this.parent_.offsetTop + this.parent_.offsetHeight
                },
                i = n - r.top - Math.max(0, this.offset_ - t) - Math.max(0, t + n - r.bottom);
            i !== this.height_ && (this.el_.style.height = (this.height_ = i) + "px"), t >= this.offset_ ? "lock" !== this.el_.dataset.mdState && (this.el_.dataset.mdState = "lock") : "lock" === this.el_.dataset.mdState && (this.el_.dataset.mdState = "")
        }, e.prototype.reset = function() {
            this.el_.dataset.mdState = "", this.el_.style.height = "", this.height_ = 0
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(40),
        o = r(i),
        a = n(44),
        s = r(a);
    t.default = {
        Adapter: o.default,
        Repository: s.default
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(41),
        i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t.default = {
        GitHub: i.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    t.__esModule = !0;
    var a = n(42),
        s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(a),
        c = function(e) {
            function t(n) {
                r(this, t);
                var o = i(this, e.call(this, n)),
                    a = /^.+github\.com\/([^\/]+)\/?([^\/]+)?.*$/.exec(o.base_);
                if (a && 3 === a.length) {
                    var s = a[1],
                        c = a[2];
                    console.log("Username: " + s);
                    console.log("Repository: " + c);
                    o.base_ = "https://api.github.com/users/" + s + "/repos", o.name_ = c
                }
                return o
            }
            return o(t, e), t.prototype.fetch_ = function() {
                var e = this;
                return function t() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return fetch(e.base_ + "?per_page=30&page=" + n).then(function(e) {
                        return e.json()
                    }).then(function(r) {
                        if (!(r instanceof Array)) throw new TypeError;
                        if (e.name_) {
                            var i = r.find(function(t) {
                                return t.name === e.name_
                            });
                            return i || 30 !== r.length ? i ? [e.format_(i.stargazers_count) + " Stars", e.format_(i.forks_count) + " Forks"] : [] : t(n + 1)
                        }
                        return [r.length + " Repositories"]
                    })
                }()
            }, t
        }(s.default);
    t.default = c
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = n(43),
        o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i),
        a = function() {
            function e(t) {
                r(this, e);
                var n = "string" == typeof t ? document.querySelector(t) : t;
                if (!(n instanceof HTMLAnchorElement)) throw new ReferenceError;
                this.el_ = n, this.base_ = this.el_.href, this.salt_ = this.hash_(this.base_)
            }
            return e.prototype.fetch = function() {
                var e = this;
                return new Promise(function(t) {
                    var n = o.default.getJSON(e.salt_ + ".cache-source");
                    void 0 !== n ? t(n) : e.fetch_().then(function(n) {
                        o.default.set(e.salt_ + ".cache-source", n, {
                            expires: 1 / 96
                        }), t(n)
                    })
                })
            }, e.prototype.fetch_ = function() {
                throw new Error("fetch_(): Not implemented")
            }, e.prototype.format_ = function(e) {
                return e > 1e4 ? (e / 1e3).toFixed(0) + "k" : e > 1e3 ? (e / 1e3).toFixed(1) + "k" : "" + e
            }, e.prototype.hash_ = function(e) {
                var t = 0;
                if (0 === e.length) return t;
                for (var n = 0, r = e.length; n < r; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                return t
            }, e
        }();
    t.default = a
}, function(e, t, n) {
    var r, i;
    ! function(o) {
        var a = !1;
        if (r = o, void 0 !== (i = "function" == typeof r ? r.call(t, n, t, e) : r) && (e.exports = i), a = !0, e.exports = o(), a = !0, !a) {
            var s = window.Cookies,
                c = window.Cookies = o();
            c.noConflict = function() {
                return window.Cookies = s, c
            }
        }
    }(function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) t[r] = n[r]
            }
            return t
        }

        function t(n) {
            function r(t, i, o) {
                var a;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (o = e({
                                path: "/"
                            }, r.defaults, o), "number" == typeof o.expires) {
                            var s = new Date;
                            s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires), o.expires = s
                        }
                        o.expires = o.expires ? o.expires.toUTCString() : "";
                        try {
                            a = JSON.stringify(i), /^[\{\[]/.test(a) && (i = a)
                        } catch (e) {}
                        i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
                        var c = "";
                        for (var u in o) o[u] && (c += "; " + u, !0 !== o[u] && (c += "=" + o[u]));
                        return document.cookie = t + "=" + i + c
                    }
                    t || (a = {});
                    for (var l = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, f = 0; f < l.length; f++) {
                        var h = l[f].split("="),
                            p = h.slice(1).join("=");
                        this.json || '"' !== p.charAt(0) || (p = p.slice(1, -1));
                        try {
                            var m = h[0].replace(d, decodeURIComponent);
                            if (p = n.read ? n.read(p, m) : n(p, m) || p.replace(d, decodeURIComponent), this.json) try {
                                p = JSON.parse(p)
                            } catch (e) {}
                            if (t === m) {
                                a = p;
                                break
                            }
                            t || (a[m] = p)
                        } catch (e) {}
                    }
                    return a
                }
            }
            return r.set = r, r.get = function(e) {
                return r.call(r, e)
            }, r.getJSON = function() {
                return r.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, r.defaults = {}, r.remove = function(t, n) {
                r(t, "", e(n, {
                    expires: -1
                }))
            }, r.withConverter = t, r
        }
        return t(function() {})
    })
}, function(e, t, n) {
    "use strict";
    (function(e) {
        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = function() {
            function t(e) {
                n(this, t);
                var r = "string" == typeof e ? document.querySelector(e) : e;
                if (!(r instanceof HTMLElement)) throw new ReferenceError;
                this.el_ = r
            }
            return t.prototype.initialize = function(t) {
                t.length && this.el_.children.length && this.el_.children[this.el_.children.length - 1].appendChild(e.createElement("ul", {
                    class: "md-source__facts"
                }, t.map(function(t) {
                    return e.createElement("li", {
                        class: "md-source__fact"
                    }, t)
                }))), this.el_.dataset.mdState = "done"
            }, t
        }();
        t.default = r
    }).call(t, n(0))
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(46),
        i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t.default = {
        Toggle: i.default
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.__esModule = !0;
    var i = function() {
        function e(t) {
            r(this, e);
            var n = "string" == typeof t ? document.querySelector(t) : t;
            if (!(n instanceof Node)) throw new ReferenceError;
            this.el_ = n, this.active_ = !1
        }
        return e.prototype.update = function() {
            var e = window.pageYOffset >= this.el_.children[0].offsetTop + -43;
            e !== this.active_ && (this.el_.dataset.mdState = (this.active_ = e) ? "hidden" : "")
        }, e.prototype.reset = function() {
            this.el_.dataset.mdState = "", this.active_ = !1
        }, e
    }();
    t.default = i
}]));
