! function (e) {
    function t(t) {
        for (var o, i, l = t[0], s = t[1], c = t[2], p = 0, h = []; p < l.length; p++) i = l[p], a[i] && h.push(a[i][0]), a[i] = 0;
        for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
        for (u && u(t); h.length;) h.shift()();
        return r.push.apply(r, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], o = !0, l = 1; l < n.length; l++) {
                var s = n[l];
                0 !== a[s] && (o = !1)
            }
            o && (r.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var o = {},
        a = {
            0: 0
        },
        r = [];

    function i(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = o, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var o in e) i.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "";
    var l = window.webpackJsonp = window.webpackJsonp || [],
        s = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var c = 0; c < l.length; c++) t(l[c]);
    var u = s;
    r.push([304, 1]), n()
}({
    100: function (e, t, n) {
        e.exports = n.p + "static/assets/images/displacement-map.4bf69214.png"
    }, 16: function (e, t) {
        e.exports = {
            disabled: "disabled--yb8vG",
            host: "host--eCQUg",
            button: "button--13TCd",
            green: "green--13C_y",
            gray: "gray--IbDG5"
        }
    }, 17: function (e, t) {
        e.exports = {
            host: "host--B5SPD",
            container: "container--fKt-2",
            info: "info--3xHWy",
            group: "group--36dAp",
            green: "green--2R-5q",
            more: "more--1ddCW",
            hero: "hero--185bD",
            mobileContainer: "mobileContainer--3k0A2",
            legend: "legend--2tB8M",
            mobile: "mobile--1_-Qd",
            desktop: "desktop--1nY9U",
            awards: "awards--1C2fB",
            bottom: "bottom--2wX5u",
            loadingMore: "loadingMore--3kmBd",
            kit: "kit--2Q4e9"
        }
    }, 179: function (e, t) {
        e.exports = {
            host: "host--ICETf",
            section: "section--2f2q9"
        }
    }, 292: function (e, t) {
        e.exports = {
            host: "host--1hfkk"
        }
    }, 295: function (e, t, n) {
        e.exports = n.p + "static/assets/images/cr-logo.6df86d4d.png"
    }, 296: function (e, t, n) {
        e.exports = n.p + "static/assets/images/cannes-logo.4ed13749.png"
    }, 297: function (e, t, n) {
        e.exports = n.p + "static/assets/images/lovies-logo.52d34faf.png"
    }, 298: function (e, t, n) {
        e.exports = n.p + "static/assets/images/cssdesignawards.b17cab25.png"
    }, 299: function (e, t, n) {
        var o = n(659);
        e.exports = (o.default || o).template({
            compiler: [7, ">= 4.0.0"],
            main: function (e, t, n, o, a) {
                var r;
                return '<div class="version">' + e.escapeExpression("function" == typeof (r = null != (r = n.VERSION_INFO || (null != t ? t.VERSION_INFO : t)) ? r : n.helperMissing) ? r.call(null != t ? t : e.nullContext || {}, {
                    name: "VERSION_INFO",
                    hash: {},
                    data: a
                }) : r) + '</div>\n<div role="button" class="toggle"></div>\n'
            }, useData: !0
        })
    }, 300: function (e, t, n) {
        e.exports = n.p + "static/assets/audio/sfx_dropthebass.ac8603df.mp3"
    }, 301: function (e, t, n) {
        e.exports = n.p + "static/assets/audio/1-second-of-silence.2e5bf17b.mp3"
    }, 302: function (e, t) {
        e.exports = {
            host: "host--2Gn_I"
        }
    }, 304: function (e, t, n) {
        n(305), n(493), e.exports = n(678)
    }, 32: function (e, t) {
        e.exports = {
            host: "host--1AhbJ",
            filter: "filter--1F_MO",
            underline: "underline--IfEv4",
            active: "active--2FW3A",
            block: "block--2lMOC",
            slideIn: "slideIn--2RmYV",
            slideOut: "slideOut--291NH",
            filterIcon: "filterIcon--hN0RB"
        }
    }, 44: function (e, t) {
        e.exports = {
            host: "host--1bWHR",
            info: "info--3xM88",
            awards: "awards--1S9sM",
            divider: "divider--3iiet",
            p: "p--1Bnlo",
            list: "list--2E1Q8",
            skills: "skills--w-W4m",
            bottom: "bottom--1SooS"
        }
    }, 502: function (e, t) {
        ! function (e) {
            function t(e) {
                return 0 === (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
            }

            function n(e) {
                return new Promise(function (t, n) {
                    ! function o(a) {
                        setTimeout(function () {
                            e && e.data ? t() : a >= 20 ? n() : o(++a)
                        }, 50)
                    }(0)
                })
            }

            function o() {
                f = h ? (e.screen.orientation.angle || 0) * c : (e.orientation || 0) * c
            }

            function a(e) {
                for (var t in p.orientation.data = e, p.orientation.callbacks) p.orientation.callbacks[t].call(this)
            }

            function r(e) {
                for (var t in p.motion.data = e, p.motion.callbacks) p.motion.callbacks[t].call(this)
            }
            if (void 0 === e.FULLTILT || null === e.FULLTILT) {
                var i = Math.PI,
                    l = i / 2,
                    s = 2 * i,
                    c = i / 180,
                    u = 180 / i,
                    p = {
                        orientation: {
                            active: !1,
                            callbacks: [],
                            data: void 0
                        },
                        motion: {
                            active: !1,
                            callbacks: [],
                            data: void 0
                        }
                    },
                    h = !(!e.screen || !e.screen.orientation || void 0 === e.screen.orientation.angle || null === e.screen.orientation.angle),
                    f = (h ? e.screen.orientation.angle : e.orientation || 0) * c,
                    d = l,
                    m = i,
                    y = s / 3,
                    v = -l,
                    g = {
                        version: "0.5.3",
                        getDeviceOrientation: function (e) {
                            return new Promise(function (t, o) {
                                var a = new g.DeviceOrientation(e);
                                a.start(), new n(p.orientation).then(function () {
                                    a._alphaAvailable = p.orientation.data.alpha && null !== p.orientation.data.alpha, a._betaAvailable = p.orientation.data.beta && null !== p.orientation.data.beta, a._gammaAvailable = p.orientation.data.gamma && null !== p.orientation.data.gamma, t(a)
                                }).catch(function () {
                                    a.stop(), o("DeviceOrientation is not supported")
                                })
                            })
                        }, getDeviceMotion: function (e) {
                            return new Promise(function (t, o) {
                                var a = new g.DeviceMotion(e);
                                a.start(), new n(p.motion).then(function () {
                                    a._accelerationXAvailable = p.motion.data.acceleration && p.motion.data.acceleration.x, a._accelerationYAvailable = p.motion.data.acceleration && p.motion.data.acceleration.y, a._accelerationZAvailable = p.motion.data.acceleration && p.motion.data.acceleration.z, a._accelerationIncludingGravityXAvailable = p.motion.data.accelerationIncludingGravity && p.motion.data.accelerationIncludingGravity.x, a._accelerationIncludingGravityYAvailable = p.motion.data.accelerationIncludingGravity && p.motion.data.accelerationIncludingGravity.y, a._accelerationIncludingGravityZAvailable = p.motion.data.accelerationIncludingGravity && p.motion.data.accelerationIncludingGravity.z, a._rotationRateAlphaAvailable = p.motion.data.rotationRate && p.motion.data.rotationRate.alpha, a._rotationRateBetaAvailable = p.motion.data.rotationRate && p.motion.data.rotationRate.beta, a._rotationRateGammaAvailable = p.motion.data.rotationRate && p.motion.data.rotationRate.gamma, t(a)
                                }).catch(function () {
                                    a.stop(), o("DeviceMotion is not supported")
                                })
                            })
                        }, Quaternion: function (e, n, o, a) {
                            var r;
                            this.set = function (e, t, n, o) {
                                this.x = e || 0, this.y = t || 0, this.z = n || 0, this.w = o || 1
                            }, this.copy = function (e) {
                                this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w
                            }, this.setFromEuler = function () {
                                var e, t, n, o, a, r, i, l, s, u, p, h;
                                return function (f) {
                                    return n = ((f = f || {}).alpha || 0) * c, e = (f.beta || 0) * c, t = (f.gamma || 0) * c, r = n / 2, o = e / 2, a = t / 2, i = Math.cos(o), l = Math.cos(a), s = Math.cos(r), u = Math.sin(o), p = Math.sin(a), h = Math.sin(r), this.set(u * l * s - i * p * h, i * p * s + u * l * h, i * l * h + u * p * s, i * l * s - u * p * h), this.normalize(), this
                                }
                            }(), this.setFromRotationMatrix = function () {
                                var e;
                                return function (n) {
                                    return e = n.elements, this.set(.5 * Math.sqrt(1 + e[0] - e[4] - e[8]) * t(e[7] - e[5]), .5 * Math.sqrt(1 - e[0] + e[4] - e[8]) * t(e[2] - e[6]), .5 * Math.sqrt(1 - e[0] - e[4] + e[8]) * t(e[3] - e[1]), .5 * Math.sqrt(1 + e[0] + e[4] + e[8])), this
                                }
                            }(), this.multiply = function (e) {
                                return r = g.Quaternion.prototype.multiplyQuaternions(this, e), this.copy(r), this
                            }, this.rotateX = function (e) {
                                return r = g.Quaternion.prototype.rotateByAxisAngle(this, [1, 0, 0], e), this.copy(r), this
                            }, this.rotateY = function (e) {
                                return r = g.Quaternion.prototype.rotateByAxisAngle(this, [0, 1, 0], e), this.copy(r), this
                            }, this.rotateZ = function (e) {
                                return r = g.Quaternion.prototype.rotateByAxisAngle(this, [0, 0, 1], e), this.copy(r), this
                            }, this.normalize = function () {
                                return g.Quaternion.prototype.normalize(this)
                            }, this.set(e, n, o, a)
                        }
                    };
                g.Quaternion.prototype = {
                    constructor: g.Quaternion,
                    multiplyQuaternions: function () {
                        var e = new g.Quaternion;
                        return function (t, n) {
                            var o = t.x,
                                a = t.y,
                                r = t.z,
                                i = t.w,
                                l = n.x,
                                s = n.y,
                                c = n.z,
                                u = n.w;
                            return e.set(o * u + i * l + a * c - r * s, a * u + i * s + r * l - o * c, r * u + i * c + o * s - a * l, i * u - o * l - a * s - r * c), e
                        }
                    }(),
                    normalize: function (e) {
                        var t = Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w);
                        return 0 === t ? (e.x = 0, e.y = 0, e.z = 0, e.w = 1) : (t = 1 / t, e.x *= t, e.y *= t, e.z *= t, e.w *= t), e
                    }, rotateByAxisAngle: function () {
                        var e, t, n = new g.Quaternion,
                            o = new g.Quaternion;
                        return function (a, r, i) {
                            return e = (i || 0) / 2, t = Math.sin(e), o.set((r[0] || 0) * t, (r[1] || 0) * t, (r[2] || 0) * t, Math.cos(e)), n = g.Quaternion.prototype.multiplyQuaternions(a, o), g.Quaternion.prototype.normalize(n)
                        }
                    }()
                }, g.RotationMatrix = function (e, t, n, o, a, r, i, l, s) {
                    var u;
                    this.elements = new Float32Array(9), this.identity = function () {
                        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
                    }, this.set = function (e, t, n, o, a, r, i, l, s) {
                        this.elements[0] = e || 1, this.elements[1] = t || 0, this.elements[2] = n || 0, this.elements[3] = o || 0, this.elements[4] = a || 1, this.elements[5] = r || 0, this.elements[6] = i || 0, this.elements[7] = l || 0, this.elements[8] = s || 1
                    }, this.copy = function (e) {
                        this.elements[0] = e.elements[0], this.elements[1] = e.elements[1], this.elements[2] = e.elements[2], this.elements[3] = e.elements[3], this.elements[4] = e.elements[4], this.elements[5] = e.elements[5], this.elements[6] = e.elements[6], this.elements[7] = e.elements[7], this.elements[8] = e.elements[8]
                    }, this.setFromEuler = function () {
                        var e, t, n, o, a, r, i, l, s;
                        return function (u) {
                            return n = ((u = u || {}).alpha || 0) * c, e = (u.beta || 0) * c, t = (u.gamma || 0) * c, o = Math.cos(e), a = Math.cos(t), r = Math.cos(n), i = Math.sin(e), l = Math.sin(t), s = Math.sin(n), this.set(r * a - s * i * l, -o * s, a * s * i + r * l, a * s + r * i * l, r * o, s * l - r * a * i, -o * l, i, o * a), this.normalize(), this
                        }
                    }(), this.setFromQuaternion = function () {
                        var e, t, n, o;
                        return function (a) {
                            return e = a.w * a.w, t = a.x * a.x, n = a.y * a.y, o = a.z * a.z, this.set(e + t - n - o, 2 * (a.x * a.y - a.w * a.z), 2 * (a.x * a.z + a.w * a.y), 2 * (a.x * a.y + a.w * a.z), e - t + n - o, 2 * (a.y * a.z - a.w * a.x), 2 * (a.x * a.z - a.w * a.y), 2 * (a.y * a.z + a.w * a.x), e - t - n + o), this
                        }
                    }(), this.multiply = function (e) {
                        return u = g.RotationMatrix.prototype.multiplyMatrices(this, e), this.copy(u), this
                    }, this.rotateX = function (e) {
                        return u = g.RotationMatrix.prototype.rotateByAxisAngle(this, [1, 0, 0], e), this.copy(u), this
                    }, this.rotateY = function (e) {
                        return u = g.RotationMatrix.prototype.rotateByAxisAngle(this, [0, 1, 0], e), this.copy(u), this
                    }, this.rotateZ = function (e) {
                        return u = g.RotationMatrix.prototype.rotateByAxisAngle(this, [0, 0, 1], e), this.copy(u), this
                    }, this.normalize = function () {
                        return g.RotationMatrix.prototype.normalize(this)
                    }, this.set(e, t, n, o, a, r, i, l, s)
                }, g.RotationMatrix.prototype = {
                    constructor: g.RotationMatrix,
                    multiplyMatrices: function () {
                        var e, t, n = new g.RotationMatrix;
                        return function (o, a) {
                            return e = o.elements, t = a.elements, n.set(e[0] * t[0] + e[1] * t[3] + e[2] * t[6], e[0] * t[1] + e[1] * t[4] + e[2] * t[7], e[0] * t[2] + e[1] * t[5] + e[2] * t[8], e[3] * t[0] + e[4] * t[3] + e[5] * t[6], e[3] * t[1] + e[4] * t[4] + e[5] * t[7], e[3] * t[2] + e[4] * t[5] + e[5] * t[8], e[6] * t[0] + e[7] * t[3] + e[8] * t[6], e[6] * t[1] + e[7] * t[4] + e[8] * t[7], e[6] * t[2] + e[7] * t[5] + e[8] * t[8]), n
                        }
                    }(),
                    normalize: function (e) {
                        var t = e.elements,
                            n = t[0] * t[4] * t[8] - t[0] * t[5] * t[7] - t[1] * t[3] * t[8] + t[1] * t[5] * t[6] + t[2] * t[3] * t[7] - t[2] * t[4] * t[6];
                        return t[0] /= n, t[1] /= n, t[2] /= n, t[3] /= n, t[4] /= n, t[5] /= n, t[6] /= n, t[7] /= n, t[8] /= n, e.elements = t, e
                    }, rotateByAxisAngle: function () {
                        var e, t, n = new g.RotationMatrix,
                            o = new g.RotationMatrix,
                            a = !1;
                        return function (r, i, l) {
                            return o.identity(), a = !1, e = Math.sin(l), t = Math.cos(l), 1 === i[0] && 0 === i[1] && 0 === i[2] ? (a = !0, o.elements[4] = t, o.elements[5] = -e, o.elements[7] = e, o.elements[8] = t) : 1 === i[1] && 0 === i[0] && 0 === i[2] ? (a = !0, o.elements[0] = t, o.elements[2] = e, o.elements[6] = -e, o.elements[8] = t) : 1 === i[2] && 0 === i[0] && 0 === i[1] && (a = !0, o.elements[0] = t, o.elements[1] = -e, o.elements[3] = e, o.elements[4] = t), a ? (n = g.RotationMatrix.prototype.multiplyMatrices(r, o), n = g.RotationMatrix.prototype.normalize(n)) : n = r, n
                        }
                    }()
                }, g.Euler = function (e, t, n) {
                    this.set = function (e, t, n) {
                        this.alpha = e || 0, this.beta = t || 0, this.gamma = n || 0
                    }, this.copy = function (e) {
                        this.alpha = e.alpha, this.beta = e.beta, this.gamma = e.gamma
                    }, this.setFromRotationMatrix = function () {
                        var e, t, n, o;
                        return function (a) {
                            (e = a.elements)[8] > 0 ? (t = Math.atan2(-e[1], e[4]), n = Math.asin(e[7]), o = Math.atan2(-e[6], e[8])) : e[8] < 0 ? (t = Math.atan2(e[1], -e[4]), n = -Math.asin(e[7]), n += n >= 0 ? -i : i, o = Math.atan2(e[6], -e[8])) : e[6] > 0 ? (t = Math.atan2(-e[1], e[4]), n = Math.asin(e[7]), o = -l) : e[6] < 0 ? (t = Math.atan2(e[1], -e[4]), n = -Math.asin(e[7]), n += n >= 0 ? -i : i, o = -l) : (t = Math.atan2(e[3], e[0]), n = e[7] > 0 ? l : -l, o = 0), 0 > t && (t += s), t *= u, n *= u, o *= u, this.set(t, n, o)
                        }
                    }(), this.setFromQuaternion = function () {
                        var e, t, n;
                        return function (o) {
                            var a = o.w * o.w,
                                r = o.x * o.x,
                                c = o.y * o.y,
                                p = o.z * o.z,
                                h = a + r + c + p,
                                f = o.w * o.x + o.y * o.z;
                            if (f > .499999 * h) e = 2 * Math.atan2(o.y, o.w), t = l, n = 0;
                            else if ((1e-6 - .5) * h > f) e = -2 * Math.atan2(o.y, o.w), t = -l, n = 0;
                            else {
                                var d = a - r + c - p,
                                    m = 2 * (o.w * o.z - o.x * o.y),
                                    y = a - r - c + p,
                                    v = 2 * (o.w * o.y - o.x * o.z);
                                y > 0 ? (e = Math.atan2(m, d), t = Math.asin(2 * f / h), n = Math.atan2(v, y)) : (e = Math.atan2(-m, -d), t = -Math.asin(2 * f / h), t += 0 > t ? i : -i, n = Math.atan2(-v, -y))
                            }
                            0 > e && (e += s), e *= u, t *= u, n *= u, this.set(e, t, n)
                        }
                    }(), this.rotateX = function (e) {
                        return g.Euler.prototype.rotateByAxisAngle(this, [1, 0, 0], e), this
                    }, this.rotateY = function (e) {
                        return g.Euler.prototype.rotateByAxisAngle(this, [0, 1, 0], e), this
                    }, this.rotateZ = function (e) {
                        return g.Euler.prototype.rotateByAxisAngle(this, [0, 0, 1], e), this
                    }, this.set(e, t, n)
                }, g.Euler.prototype = {
                    constructor: g.Euler,
                    rotateByAxisAngle: function () {
                        var e = new g.RotationMatrix;
                        return function (t, n, o) {
                            return e.setFromEuler(t), e = g.RotationMatrix.prototype.rotateByAxisAngle(e, n, o), t.setFromRotationMatrix(e), t
                        }
                    }()
                }, g.DeviceOrientation = function (t) {
                    this.options = t || {};
                    var n = 0,
                        o = 0;
                    if (this.alphaOffsetScreen = 0, this.alphaOffsetDevice = void 0, "game" === this.options.type) {
                        var a = function (t) {
                            return null !== t.alpha && (this.alphaOffsetDevice = new g.Euler(t.alpha, 0, 0), this.alphaOffsetDevice.rotateZ(-f), ++o >= 10) ? void e.removeEventListener("deviceorientation", a, !1) : void(++n >= 200 && e.removeEventListener("deviceorientation", a, !1))
                        }.bind(this);
                        e.addEventListener("deviceorientation", a, !1)
                    } else if ("world" === this.options.type) {
                        var r = function (t) {
                            return !0 !== t.absolute && void 0 !== t.webkitCompassAccuracy && null !== t.webkitCompassAccuracy && +t.webkitCompassAccuracy >= 0 && +t.webkitCompassAccuracy < 50 && (this.alphaOffsetDevice = new g.Euler(t.webkitCompassHeading, 0, 0), this.alphaOffsetDevice.rotateZ(f), this.alphaOffsetScreen = f, ++o >= 10) ? void e.removeEventListener("deviceorientation", r, !1) : void(++n >= 200 && e.removeEventListener("deviceorientation", r, !1))
                        }.bind(this);
                        e.addEventListener("deviceorientation", r, !1)
                    }
                }, g.DeviceOrientation.prototype = {
                    constructor: g.DeviceOrientation,
                    start: function (t) {
                        t && "[object Function]" == Object.prototype.toString.call(t) && p.orientation.callbacks.push(t), h ? e.screen.orientation.addEventListener("change", o, !1) : e.addEventListener("orientationchange", o, !1), p.orientation.active || (e.addEventListener("deviceorientation", a, !1), p.orientation.active = !0)
                    }, stop: function () {
                        p.orientation.active && (e.removeEventListener("deviceorientation", a, !1), p.orientation.active = !1)
                    }, listen: function (e) {
                        this.start(e)
                    }, getFixedFrameQuaternion: function () {
                        var e = new g.Euler,
                            t = new g.RotationMatrix,
                            n = new g.Quaternion;
                        return function () {
                            var o = p.orientation.data || {
                                    alpha: 0,
                                    beta: 0,
                                    gamma: 0
                                },
                                a = o.alpha;
                            return this.alphaOffsetDevice && (t.setFromEuler(this.alphaOffsetDevice), t.rotateZ(-this.alphaOffsetScreen), e.setFromRotationMatrix(t), e.alpha < 0 && (e.alpha += 360), e.alpha %= 360, a -= e.alpha), e.set(a, o.beta, o.gamma), n.setFromEuler(e), n
                        }
                    }(),
                    getScreenAdjustedQuaternion: function () {
                        var e;
                        return function () {
                            return (e = this.getFixedFrameQuaternion()).rotateZ(-f), e
                        }
                    }(),
                    getFixedFrameMatrix: function () {
                        var e = new g.Euler,
                            t = new g.RotationMatrix;
                        return function () {
                            var n = p.orientation.data || {
                                    alpha: 0,
                                    beta: 0,
                                    gamma: 0
                                },
                                o = n.alpha;
                            return this.alphaOffsetDevice && (t.setFromEuler(this.alphaOffsetDevice), t.rotateZ(-this.alphaOffsetScreen), e.setFromRotationMatrix(t), e.alpha < 0 && (e.alpha += 360), e.alpha %= 360, o -= e.alpha), e.set(o, n.beta, n.gamma), t.setFromEuler(e), t
                        }
                    }(),
                    getScreenAdjustedMatrix: function () {
                        var e;
                        return function () {
                            return (e = this.getFixedFrameMatrix()).rotateZ(-f), e
                        }
                    }(),
                    getFixedFrameEuler: function () {
                        var e, t = new g.Euler;
                        return function () {
                            return e = this.getFixedFrameMatrix(), t.setFromRotationMatrix(e), t
                        }
                    }(),
                    getScreenAdjustedEuler: function () {
                        var e, t = new g.Euler;
                        return function () {
                            return e = this.getScreenAdjustedMatrix(), t.setFromRotationMatrix(e), t
                        }
                    }(),
                    isAbsolute: function () {
                        return !(!p.orientation.data || !0 !== p.orientation.data.absolute)
                    }, getLastRawEventData: function () {
                        return p.orientation.data || {}
                    }, _alphaAvailable: !1,
                    _betaAvailable: !1,
                    _gammaAvailable: !1,
                    isAvailable: function (e) {
                        switch (e) {
                        case this.ALPHA:
                            return this._alphaAvailable;
                        case this.BETA:
                            return this._betaAvailable;
                        case this.GAMMA:
                            return this._gammaAvailable
                        }
                    }, ALPHA: "alpha",
                    BETA: "beta",
                    GAMMA: "gamma"
                }, g.DeviceMotion = function (e) {
                    this.options = e || {}
                }, g.DeviceMotion.prototype = {
                    constructor: g.DeviceMotion,
                    start: function (t) {
                        t && "[object Function]" == Object.prototype.toString.call(t) && p.motion.callbacks.push(t), h ? e.screen.orientation.addEventListener("change", o, !1) : e.addEventListener("orientationchange", o, !1), p.motion.active || (e.addEventListener("devicemotion", r, !1), p.motion.active = !0)
                    }, stop: function () {
                        p.motion.active && (e.removeEventListener("devicemotion", r, !1), p.motion.active = !1)
                    }, listen: function (e) {
                        this.start(e)
                    }, getScreenAdjustedAcceleration: function () {
                        var e = p.motion.data && p.motion.data.acceleration ? p.motion.data.acceleration : {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            t = {};
                        switch (f) {
                        case d:
                            t.x = -e.y, t.y = e.x;
                            break;
                        case m:
                            t.x = -e.x, t.y = -e.y;
                            break;
                        case y:
                        case v:
                            t.x = e.y, t.y = -e.x;
                            break;
                        default:
                            t.x = e.x, t.y = e.y
                        }
                        return t.z = e.z, t
                    }, getScreenAdjustedAccelerationIncludingGravity: function () {
                        var e = p.motion.data && p.motion.data.accelerationIncludingGravity ? p.motion.data.accelerationIncludingGravity : {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            t = {};
                        switch (f) {
                        case d:
                            t.x = -e.y, t.y = e.x;
                            break;
                        case m:
                            t.x = -e.x, t.y = -e.y;
                            break;
                        case y:
                        case v:
                            t.x = e.y, t.y = -e.x;
                            break;
                        default:
                            t.x = e.x, t.y = e.y
                        }
                        return t.z = e.z, t
                    }, getScreenAdjustedRotationRate: function () {
                        var e = p.motion.data && p.motion.data.rotationRate ? p.motion.data.rotationRate : {
                                alpha: 0,
                                beta: 0,
                                gamma: 0
                            },
                            t = {};
                        switch (f) {
                        case d:
                            t.beta = -e.gamma, t.gamma = e.beta;
                            break;
                        case m:
                            t.beta = -e.beta, t.gamma = -e.gamma;
                            break;
                        case y:
                        case v:
                            t.beta = e.gamma, t.gamma = -e.beta;
                            break;
                        default:
                            t.beta = e.beta, t.gamma = e.gamma
                        }
                        return t.alpha = e.alpha, t
                    }, getLastRawEventData: function () {
                        return p.motion.data || {}
                    }, _accelerationXAvailable: !1,
                    _accelerationYAvailable: !1,
                    _accelerationZAvailable: !1,
                    _accelerationIncludingGravityXAvailable: !1,
                    _accelerationIncludingGravityYAvailable: !1,
                    _accelerationIncludingGravityZAvailable: !1,
                    _rotationRateAlphaAvailable: !1,
                    _rotationRateBetaAvailable: !1,
                    _rotationRateGammaAvailable: !1,
                    isAvailable: function (e) {
                        switch (e) {
                        case this.ACCELERATION_X:
                            return this._accelerationXAvailable;
                        case this.ACCELERATION_Y:
                            return this._accelerationYAvailable;
                        case this.ACCELERATION_Z:
                            return this._accelerationZAvailable;
                        case this.ACCELERATION_INCLUDING_GRAVITY_X:
                            return this._accelerationIncludingGravityXAvailable;
                        case this.ACCELERATION_INCLUDING_GRAVITY_Y:
                            return this._accelerationIncludingGravityYAvailable;
                        case this.ACCELERATION_INCLUDING_GRAVITY_Z:
                            return this._accelerationIncludingGravityZAvailable;
                        case this.ROTATION_RATE_ALPHA:
                            return this._rotationRateAlphaAvailable;
                        case this.ROTATION_RATE_BETA:
                            return this._rotationRateBetaAvailable;
                        case this.ROTATION_RATE_GAMMA:
                            return this._rotationRateGammaAvailable
                        }
                    }, ACCELERATION_X: "accelerationX",
                    ACCELERATION_Y: "accelerationY",
                    ACCELERATION_Z: "accelerationZ",
                    ACCELERATION_INCLUDING_GRAVITY_X: "accelerationIncludingGravityX",
                    ACCELERATION_INCLUDING_GRAVITY_Y: "accelerationIncludingGravityY",
                    ACCELERATION_INCLUDING_GRAVITY_Z: "accelerationIncludingGravityZ",
                    ROTATION_RATE_ALPHA: "rotationRateAlpha",
                    ROTATION_RATE_BETA: "rotationRateBeta",
                    ROTATION_RATE_GAMMA: "rotationRateGamma"
                }, e.FULLTILT = g
            }
        }(window), e.exports = FULLTILT
    }, 635: function (e, t, n) {
        (function (t) {
            /*!
             * VERSION: 0.2.1
             * DATE: 2017-10-17
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
             * PixiPlugin is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             */
            var n = e.exports && void 0 !== t ? t : this || window;
            (n._gsQueue || (n._gsQueue = [])).push(function () {
                "use strict";
                var e, t, o, a = /(\d|\.)+/g,
                    r = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    i = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    l = function (e, t, n) {
                        return 255 * (6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                    },
                    s = function (e, t) {
                        var n, o, s, c, u, p, h, f, d, m, y, v = "hsl" === t;
                        if (e)
                            if ("number" == typeof e) n = [e >> 16, e >> 8 & 255, 255 & e];
                            else {
                                if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), i[e]) n = i[e];
                                else if ("#" === e.charAt(0)) 4 === e.length && (o = e.charAt(1), s = e.charAt(2), c = e.charAt(3), e = "#" + o + o + s + s + c + c), n = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                                else if ("hsl" === e.substr(0, 3))
                                    if (n = y = e.match(a), v) {
                                        if (-1 !== e.indexOf("=")) return e.match(r)
                                    } else u = Number(n[0]) % 360 / 360, p = Number(n[1]) / 100, o = 2 * (h = Number(n[2]) / 100) - (s = h <= .5 ? h * (p + 1) : h + p - h * p), n.length > 3 && (n[3] = Number(e[3])), n[0] = l(u + 1 / 3, o, s), n[1] = l(u, o, s), n[2] = l(u - 1 / 3, o, s);
                                else n = e.match(a) || i.transparent;
                                n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3]))
                            } else n = i.black;
                        return v && !y && (o = n[0] / 255, s = n[1] / 255, c = n[2] / 255, h = ((f = Math.max(o, s, c)) + (d = Math.min(o, s, c))) / 2, f === d ? u = p = 0 : (m = f - d, p = h > .5 ? m / (2 - f - d) : m / (f + d), u = f === o ? (s - c) / m + (s < c ? 6 : 0) : f === s ? (c - o) / m + 2 : (o - s) / m + 4, u *= 60), n[0] = u + .5 | 0, n[1] = 100 * p + .5 | 0, n[2] = 100 * h + .5 | 0), "number" === t ? n[0] << 16 | n[1] << 8 | n[2] : n
                    },
                    c = function (e, t) {
                        var n, o, a, r = (e + "").match(p) || [],
                            i = 0,
                            l = "";
                        if (!r.length) return e;
                        for (n = 0; n < r.length; n++) o = r[n], i += (a = e.substr(i, e.indexOf(o, i) - i)).length + o.length, 3 === (o = s(o, t ? "hsl" : "rgb")).length && o.push(1), l += a + (t ? "hsla(" + o[0] + "," + o[1] + "%," + o[2] + "%," + o[3] : "rgba(" + o.join(",")) + ")";
                        return l + e.substr(i)
                    },
                    u = (n.GreenSockGlobals || n).TweenLite,
                    p = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
                    h = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                    f = .212671,
                    d = .072169,
                    m = function (e, t) {
                        var n, o, a = [],
                            r = 0,
                            i = 0;
                        for (n = 0; n < 4; n++) {
                            for (o = 0; o < 5; o++) i = 4 === o ? e[r + 4] : 0, a[r + o] = e[r] * t[o] + e[r + 1] * t[o + 5] + e[r + 2] * t[o + 10] + e[r + 3] * t[o + 15] + i;
                            r += 5
                        }
                        return a
                    },
                    y = function (e, t) {
                        var n = 1 - t,
                            o = n * f,
                            a = .71516 * n,
                            r = n * d;
                        return m([o + t, a, r, 0, 0, o, a + t, r, 0, 0, o, a, r + t, 0, 0, 0, 0, 0, 1, 0], e)
                    },
                    v = function (e, t, n) {
                        var o = s(t),
                            a = o[0] / 255,
                            r = o[1] / 255,
                            i = o[2] / 255,
                            l = 1 - n;
                        return m([l + n * a * f, n * a * .71516, n * a * d, 0, 0, n * r * f, l + n * r * .71516, n * r * d, 0, 0, n * i * f, n * i * .71516, l + n * i * d, 0, 0, 0, 0, 0, 1, 0], e)
                    },
                    g = function (e, t) {
                        t *= Math.PI / 180;
                        var n = Math.cos(t),
                            o = Math.sin(t);
                        return m([f + .787329 * n + o * -f, .71516 + -.71516 * n + -.71516 * o, d + n * -d + .927831 * o, 0, 0, f + n * -f + .143 * o, .71516 + .28484 * n + .14 * o, d + n * -d + -.283 * o, 0, 0, f + n * -f + -.787329 * o, .71516 + -.71516 * n + .71516 * o, d + .927831 * n + o * d, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], e)
                    },
                    b = function (e, t) {
                        return m([t, 0, 0, 0, .5 * (1 - t), 0, t, 0, 0, .5 * (1 - t), 0, 0, t, 0, .5 * (1 - t), 0, 0, 0, 1, 0], e)
                    },
                    _ = function (e, t) {
                        var o, a = n.PIXI.filters[t],
                            r = e.filters || [],
                            i = r.length;
                        if (!a) throw "PixiPlugin error: " + t + " isn't present.";
                        for (; --i > -1;)
                            if (r[i] instanceof a) return r[i];
                        return o = new a, "BlurFilter" === t && (o.blur = 0), r.push(o), e.filters = r, o
                    },
                    w = function (e, t, n, o) {
                        t._addTween(n, e, n[e], o[e], e), t._overwriteProps.push(e)
                    },
                    E = function (e, t) {
                        var o = new n.PIXI.filters.ColorMatrixFilter;
                        return o.matrix = t, o.brightness(e, !0), o.matrix
                    },
                    x = {
                        contrast: 1,
                        saturation: 1,
                        colorizeAmount: 0,
                        colorize: "rgb(255,255,255)",
                        hue: 0,
                        brightness: 1
                    },
                    O = function (e, t, n) {
                        var o, a, r, i = _(e, "ColorMatrixFilter"),
                            l = e._gsColorMatrixFilter = e._gsColorMatrixFilter || {
                                contrast: 1,
                                saturation: 1,
                                colorizeAmount: 0,
                                colorize: "rgb(255,255,255)",
                                hue: 0,
                                brightness: 1
                            },
                            s = t.combineCMF && !("colorMatrixFilter" in t && !t.colorMatrixFilter);
                        r = i.matrix, t.resolution && (i.resolution = t.resolution), t.matrix && t.matrix.length === r.length ? (a = t.matrix, 1 !== l.contrast && w("contrast", n, l, x), l.hue && w("hue", n, l, x), 1 !== l.brightness && w("brightness", n, l, x), l.colorizeAmount && (w("colorize", n, l, x), w("colorizeAmount", n, l, x)), 1 !== l.saturation && w("saturation", n, l, x)) : (a = h.slice(), null != t.contrast ? (a = b(a, Number(t.contrast)), w("contrast", n, l, t)) : 1 !== l.contrast && (s ? a = b(a, l.contrast) : w("contrast", n, l, x)), null != t.hue ? (a = g(a, Number(t.hue)), w("hue", n, l, t)) : l.hue && (s ? a = g(a, l.hue) : w("hue", n, l, x)), null != t.brightness ? (a = E(Number(t.brightness), a), w("brightness", n, l, t)) : 1 !== l.brightness && (s ? a = E(l.brightness, a) : w("brightness", n, l, x)), null != t.colorize ? (t.colorizeAmount = "colorizeAmount" in t ? Number(t.colorizeAmount) : 1, a = v(a, t.colorize, t.colorizeAmount), w("colorize", n, l, t), w("colorizeAmount", n, l, t)) : l.colorizeAmount && (s ? a = v(a, l.colorize, l.colorizeAmount) : (w("colorize", n, l, x), w("colorizeAmount", n, l, x))), null != t.saturation ? (a = y(a, Number(t.saturation)), w("saturation", n, l, t)) : 1 !== l.saturation && (s ? a = y(a, l.saturation) : w("saturation", n, l, x))), o = a.length;
                        for (; --o > -1;) a[o] !== r[o] && n._addTween(r, o, r[o], a[o], "colorMatrixFilter");
                        n._overwriteProps.push("colorMatrixFilter")
                    },
                    P = function (t, n, o, a, r) {
                        var i = a._firstPT = {
                            _next: a._firstPT,
                            t: t,
                            p: n,
                            proxy: {},
                            f: "function" == typeof t[n]
                        };
                        i.proxy[n] = "rgb(" + s(i.f ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : t[n]).join(",") + ")", r._addTween(i.proxy, n, "get", "number" == typeof o ? "rgb(" + s(o, !1).join(",") + ")" : o, n, null, null, e)
                    },
                    S = function (e, t) {
                        var n = t.setRatio,
                            o = function e(o) {
                                var a, r = e._firstPT;
                                for (n.call(t, o); r;) a = s(r.proxy[r.p], "number"), r.f ? r.t[r.p](a) : r.t[r.p] = a, r = r._next;
                                e.graphics && (e.graphics.dirty++, e.graphics.clearDirty++)
                            };
                        return t.setRatio = o, o
                    },
                    M = {
                        tint: 1,
                        lineColor: 1,
                        fillColor: 1
                    },
                    R = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","),
                    C = {
                        x: "position",
                        y: "position",
                        tileX: "tilePosition",
                        tileY: "tilePosition"
                    },
                    T = {
                        colorMatrixFilter: 1,
                        saturation: 1,
                        contrast: 1,
                        hue: 1,
                        colorize: 1,
                        colorizeAmount: 1,
                        brightness: 1,
                        combineCMF: 1
                    },
                    A = Math.PI / 180,
                    L = function (e) {
                        return "string" == typeof e && "=" === e.charAt(1) ? e.substr(0, 2) + parseFloat(e.substr(2)) * A : e * A
                    };
                for (t = 0; t < R.length; t++) o = R[t], C[o + "X"] = o, C[o + "Y"] = o;
                for (o in i) p += "|" + o + "\\b";
                p = new RegExp(p + ")", "gi"), e = function (e) {
                    var t, n = e[0] + " " + e[1];
                    p.lastIndex = 0, p.test(n) && (t = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), e[0] = c(e[0], t), e[1] = c(e[1], t))
                }, u.defaultStringFilter || (u.defaultStringFilter = e);
                var k = n._gsDefine.plugin({
                    propName: "pixi",
                    priority: 0,
                    API: 2,
                    global: !0,
                    version: "0.2.1",
                    init: function (e, t, o, a) {
                        if (!e instanceof n.PIXI.DisplayObject) return !1;
                        var r, i, l, s, c, u, p, h, f, d, m;
                        for (u in t) {
                            if (r = C[u], "function" == typeof (l = t[u]) && (l = l(a || 0, e)), r) i = -1 !== u.charAt(u.length - 1).toLowerCase().indexOf("x") ? "x" : "y", this._addTween(e[r], i, e[r][i], "skew" === r ? L(l) : l, u);
                            else if ("scale" === u || "anchor" === u || "pivot" === u || "tileScale" === u) this._addTween(e[u], "x", e[u].x, l, u + "X"), this._addTween(e[u], "y", e[u].y, l, u + "Y");
                            else if ("rotation" === u) this._addTween(e, u, e.rotation, L(l), u);
                            else if (T[u]) s || (O(e, t.colorMatrixFilter || t, this), s = !0);
                            else if ("blur" === u || "blurX" === u || "blurY" === u || "blurPadding" === u) {
                                if (c = _(e, "BlurFilter"), this._addTween(c, u, c[u], l, u), 0 !== t.blurPadding)
                                    for (p = t.blurPadding || 2 * Math.max(c[u], l), f = e.filters.length; --f > -1;) e.filters[f].padding = Math.max(e.filters[f].padding, p)
                            } else if (M[u])
                                if (h || (h = S(0, this)), ("lineColor" === u || "fillColor" === u) && e instanceof n.PIXI.Graphics) {
                                    for (f = (d = e.graphicsData).length; --f > -1;) P(d[f], u, l, h, this);
                                    h.graphics = e
                                } else P(e, u, l, h, this);
                            else "autoAlpha" === u ? (this._firstPT = m = {
                                t: {
                                    setRatio: function () {
                                        e.visible = !!e.alpha
                                    }
                                },
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 1,
                                pg: 0,
                                n: "visible",
                                pr: 0,
                                m: 0,
                                _next: this._firstPT
                            }, m._next && (m._next._prev = m), this._addTween(e, "alpha", e.alpha, l, "alpha"), this._overwriteProps.push("alpha", "visible")) : this._addTween(e, u, e[u], l, u);
                            this._overwriteProps.push(u)
                        }
                        return !0
                    }
                });
                k.colorProps = M, k.parseColor = s, k.formatColors = c, k.colorStringFilter = e
            }), n._gsDefine && n._gsQueue.pop()(), e.exports = PixiPlugin
        }).call(this, n(23))
    }, 675: function (e, t) {}, 677: function (e, t) {}, 678: function (e, t, n) {
        "use strict";
        n.r(t);
        var o = n(285),
            a = n.n(o),
            r = n(0),
            i = n.n(r),
            l = n(22),
            s = n(287),
            c = n(60),
            u = (n(501), n(502), n(4)),
            p = n.n(u),
            h = n(126),
            f = n(27),
            d = n(176),
            m = n.n(d),
            y = n(61),
            v = n(55),
            g = n(226),
            b = n(288),
            _ = n(289),
            w = n.n(_);

        function E(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var x = new(function () {
                function e() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.supported = !0, this.disallowedUAs = [/.*Trident\/([7-9]|10).*/, /.*rv:([1-9]|10)\.0.*/]
                }
                var t, n, o;
                return t = e, (n = [{
                    key: "check",
                    value: function (e) {
                        return !this.disallowedUAs.some(function (t) {
                            return t.test(e)
                        }) || (this.supported = !1, !1)
                    }
                }]) && E(t.prototype, n), o && E(t, o), e
            }()),
            O = "PLATFORM_REFRESH",
            P = (new w.a).getResult(),
            S = function (e) {
                var t = document.documentElement,
                    n = document.body,
                    o = window.getComputedStyle(n, ":after").getPropertyValue("content").split('"').join("").split("'").join("").split("|"),
                    a = "Windows" === P.os.name || "Mac OS" === P.os.name || "Linux" === P.os.name,
                    r = window.innerWidth,
                    i = window.innerHeight,
                    l = {
                        browser: {
                            name: P.browser.name,
                            version: P.browser.version,
                            major: P.browser.major,
                            isEdge: "Edge" === P.browser.name,
                            isIE: "IE" === P.browser.name,
                            isChrome: "Chrome" === P.browser.name,
                            isSafari: "Safari" === P.browser.name,
                            isFirefox: "Firefox" === P.browser.name
                        },
                        os: {
                            name: P.os.name,
                            version: P.os.version,
                            isAndroid: "Android" === P.os.name,
                            isIos: "iOS" === P.os.name,
                            isWindows: "Windows" === P.os.name,
                            isMac: "Mac OS" === P.os.name,
                            isLinux: "Linux" === P.os.name
                        },
                        device: {
                            isMobile: "mobile" === P.device.type || "tablet" === P.device.type,
                            isPhone: "mobile" === P.device.type,
                            isTablet: "tablet" === P.device.type,
                            isDesktop: a
                        },
                        media: {
                            size: +o[1],
                            breakpoint: o[0],
                            isPhone: +o[1] < 2,
                            isTooSmall: a && (+o[1] < 2 || i < 600),
                            isPortrait: r < i,
                            isLandscape: r > i,
                            isRetina: (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI || 1) >= 2
                        },
                        windowWidth: r,
                        windowHeight: i,
                        supported: x.supported,
                        hidden: !!(document.hidden || document.msHidden || document.webkitHidden || document.mozHidden),
                        visible: "visible" === document.visibilityState
                    };
                return t.className = "", l.device.isMobile && t.classList.add("mobile"), l.device.isPhone && t.classList.add("phone"), l.device.isTablet && t.classList.add("tablet"), l.device.isDesktop && t.classList.add("desktop"), l.media.isRetina && t.classList.add("retina"), l.media.isTooSmall && t.classList.add("toosmall"), l.media.isPortrait && t.classList.add("portrait"), l.media.isLandscape && t.classList.add("landscape"), (l.browser.isEdge || l.browser.isIE) && t.classList.add("microsoft"), l.browser.isIE && t.classList.add("ie"), l.browser.isSafari && t.classList.add("safari"), Object.assign({}, e, P, l)
            },
            M = S({}),
            R = {
                PRELOADED: "PRELOADED",
                SET_FILTER: "SET_FILTER",
                FILTER_ALL: "FILTER_ALL",
                FILTER_WEBSITES: "FILTER_WEBSITES",
                FILTER_PLAYGROUND: "FILTER_PLAYGROUND",
                FETCH_WORKS_SUCCESS: "FETCH_WORKS_SUCCESS",
                FETCH_WORKS_FAILURE: "FETCH_WORKS_FAILURE"
            },
            C = {
                preloaded: !1,
                filter: R.FILTER_ALL,
                works: []
            },
            T = Object(v.a)(),
            A = Object(y.c)({
                router: Object(c.b)(T),
                platform: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M;
                    switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
                    case O:
                        return S(e);
                    default:
                        return e
                    }
                }, general: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case R.PRELOADED:
                        return Object.assign({}, e, {
                            preloaded: t.preloaded
                        });
                    case R.SET_FILTER:
                        return Object.assign({}, e, {
                            filter: t.filter
                        });
                    case R.FETCH_WORKS_SUCCESS:
                        return Object.assign({}, e, {
                            works: t.payload.data
                        });
                    default:
                        return e
                    }
                }
            }),
            L = Object(g.a)(T),
            k = Object(y.d)(Object(y.a)(b.a), Object(y.a)(L), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (e) {
                return e
            }),
            I = Object(y.e)(A, {}, k);
        var N = function () {
                return {
                    type: O
                }
            },
            F = n(3),
            j = n(79),
            z = n.n(j),
            D = n(16),
            H = n.n(D);

        function W(e) {
            return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function B(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function G(e, t) {
            return !t || "object" !== W(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function U(e) {
            return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function V(e, t) {
            return (V = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Y = function (e) {
            function t() {
                var e, n, o;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                return G(o, (n = o = G(this, (e = U(t)).call.apply(e, [this].concat(r))), o.elements = [], o.split = {}, o.gotoWork = function () {
                    o.elements.h1.classList.remove(H.a.disabled), o.elements.h2.classList.add(H.a.disabled), o.elements.about.classList.add(H.a.disabled), o.roleTl.timeScale(2).reverse(), o.aboutTL.timeScale(2).reverse()
                }, o.gotoAbout = function () {
                    var e = o.props.breakpoint;
                    o.elements.h1.classList.remove(H.a.disabled), o.elements.about.classList.add(H.a.disabled), o.aboutTL.timeScale(2).reverse(), "xxsmall" !== e && "xsmall" !== e && "small" !== e || o.roleTl.timeScale(2).reverse()
                }, o.gotoHome = function () {
                    o.elements.h1.classList.add(H.a.disabled), o.elements.h2.classList.remove(H.a.disabled), o.elements.about.classList.remove(H.a.disabled), o.roleTl.totalProgress() < 1 && o.roleTl.timeScale(1).delay(.5).restart(!0), o.aboutTL.totalProgress() < 1 && o.aboutTL.timeScale(1).delay(.5).restart(!0)
                }, o.animateIn = function () {
                    o.elements.h1.classList.add(H.a.disabled), o.elements.h2.classList.remove(H.a.disabled), o.elements.about.classList.remove(H.a.disabled), F.f.set(o.elements.h1, {
                        opacity: 1
                    }), F.f.set(o.elements.h2, {
                        opacity: 1
                    }), F.f.set(o.elements.about, {
                        opacity: 1
                    }), new F.d({
                        delay: .5
                    }).staggerFrom(o.split.h1.chars, .6, {
                        opacity: 0,
                        scale: 0,
                        y: 20,
                        rotationX: -170,
                        transformOrigin: "50% 50% 0",
                        ease: F.c.easeOut
                    }, .02, "+=0"), o.roleTl = new F.d({
                        delay: 1
                    }), o.roleTl.staggerFrom(o.split.h2.chars, .6, {
                        opacity: 0,
                        scale: 0,
                        y: 10,
                        rotationX: -100,
                        transformOrigin: "0% 50% -30",
                        ease: F.c.easeOut
                    }, .01, "0"), o.aboutTL = new F.d({
                        delay: 1
                    }), o.aboutTL.staggerFrom(o.split.about.chars, .75, {
                        opacity: 0,
                        scale: 0,
                        y: 10,
                        rotationX: -100,
                        transformOrigin: "0% 50% -30",
                        ease: F.c.easeOut
                    }, .02, "0"), o.logotypeOver = new F.d, o.logotypeOver.staggerTo(o.split.h1.chars, .6, {
                        opacity: 0,
                        scale: 0,
                        y: 10,
                        rotationX: -100,
                        transformOrigin: "50% 50% 0",
                        ease: F.c.easeOut
                    }, .02, "+=0"), o.logotypeOver.staggerFrom(o.split.h1gray.chars, .6, {
                        opacity: 0,
                        scale: 0,
                        y: 10,
                        rotationX: -170,
                        transformOrigin: "50% 50% 0",
                        ease: F.c.easeOut
                    }, .02, "-=0.9"), o.logotypeOver.stop();
                    var e = o.props,
                        t = e.pathname,
                        n = e.breakpoint; - 1 !== t.indexOf("/work") || -1 !== t.indexOf("/about") && ("xxsmall" === n || "xsmall" === n || "small" === n) ? (o.elements.h1.classList.remove(H.a.disabled), o.elements.h2.classList.add(H.a.disabled), o.elements.about.classList.add(H.a.disabled), o.roleTl.stop(), o.aboutTL.stop()) : -1 !== t.indexOf("/about") && (o.elements.h1.classList.remove(H.a.disabled), o.elements.about.classList.add(H.a.disabled), o.aboutTL.stop())
                }, o.hide = function () {
                    F.f.set(o.elements.h1, {
                        opacity: 0
                    }), F.f.set(o.elements.h2, {
                        opacity: 0
                    }), F.f.set(o.elements.about, {
                        opacity: 0
                    }), o.elements.h2.classList.add(H.a.disabled), o.elements.about.classList.add(H.a.disabled)
                }, o.show = function () {
                    F.f.set(o.elements.h1, {
                        opacity: 1
                    }), F.f.set(o.elements.h2, {
                        opacity: 1
                    }), F.f.set(o.elements.about, {
                        opacity: 1
                    })
                }, o.splitElement = function (e) {
                    o.split[e] = new z.a(o.elements[e], {
                        type: "words, chars"
                    }), F.f.set(o.elements[e], {
                        perspective: 800,
                        backfaceVisibility: "hidden"
                    })
                }, o.onClickRole = function () {
                    (0, o.props.navigateTo)("/about")
                }, o.onLogotypeOver = function () {
                    F.f.set(o.elements.h1gray, {
                        opacity: 1
                    }), o.logotypeOver.timeScale(1).play()
                }, o.onLogotypeOut = function () {
                    o.logotypeOver.timeScale(1.5).reverse()
                }, o.onLogotypeClick = function () {
                    (0, o.props.navigateTo)("/"), o.onLogotypeOut()
                }, o.setRef = function (e) {
                    e && (e.dataset ? o.elements[e.dataset.ref] = e : o.elements[e.props["data-ref"]] = e)
                }, n))
            }
            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && V(e, t)
            }(t, r["PureComponent"]), n = t, (o = [{
                key: "componentDidMount",
                value: function () {
                    this.splitElement("h1"), this.splitElement("h1gray"), this.splitElement("h2"), this.splitElement("about"), this.elements.h1.classList.add(H.a.disabled), this.hide()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function (e) {
                    var t = e.pathname,
                        n = e.preloaded,
                        o = this.props,
                        a = o.pathname;
                    n !== o.preloaded && n && this.animateIn(), t !== a && (-1 !== t.indexOf("/work/") ? this.gotoWork() : -1 !== t.indexOf("/about") ? this.gotoAbout() : "/" === t && this.gotoHome())
                }
            }, {
                key: "render",
                value: function () {
                    return i.a.createElement("div", {
                        className: "Header ".concat(H.a.host),
                        ref: this.setRef,
                        "data-ref": "host"
                    }, i.a.createElement("h1", null, i.a.createElement("div", {
                        id: "green",
                        className: H.a.green,
                        onClick: this.onLogotypeClick,
                        onMouseEnter: this.onLogotypeOver,
                        onMouseLeave: this.onLogotypeOut,
                        ref: this.setRef,
                        "data-ref": "h1",
                        role: "button",
                        tabIndex: 0
                    }, "ICANTCONTROLMYEGO"), i.a.createElement("div", {
                        id: "gray",
                        className: H.a.gray,
                        ref: this.setRef,
                        "data-ref": "h1gray"
                    }, "WHO IS YOUR DADDY?")), i.a.createElement("div", {
                        role: "button",
                        ref: this.setRef,
                        "data-ref": "about",
                        className: H.a.button,
                        onClick: this.onClickRole,
                        tabIndex: "0"
                    }, "About"), i.a.createElement("h2", {
                        ref: this.setRef,
                        "data-ref": "h2"
                    }, "Creative Front-end Developer", i.a.createElement("span", null, "Currently available for freelance and sketching at", " ", i.a.createElement("a", {
                        href: "https://fabio.codes",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, i.a.createElement("span", null), "fabio.codes"))))
                }
            }]) && B(n.prototype, o), a && B(n, a), t
        }();
        Y.mapStateToProps = function (e) {
            return {
                preloaded: e.general.preloaded,
                pathname: e.router.location.pathname,
                breakpoint: e.platform.media.breakpoint
            }
        }, Y.mapDispatchToProps = function (e) {
            return {
                navigateTo: function (t) {
                    return e(Object(f.d)(t))
                }
            }
        }, Y.propTypes = {
            preloaded: p.a.bool.isRequired,
            navigateTo: p.a.func.isRequired,
            pathname: p.a.string.isRequired,
            breakpoint: p.a.string.isRequired
        };
        var X = Object(l.c)(Y.mapStateToProps, Y.mapDispatchToProps)(Y),
            q = n(5),
            Q = n(96),
            Z = n.n(Q),
            K = n(127),
            J = n.n(K),
            $ = n(291),
            ee = n.n($);

        function te(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var ne = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, n, o;
            return t = e, o = [{
                key: "mod",
                value: function (e, t) {
                    return (e % t + t) % t
                }
            }], (n = null) && te(t.prototype, n), o && te(t, o), e
        }();
        ne.norm = function (e, t, n) {
            return (e - t) / (n - t)
        }, ne.lerp = function (e, t, n) {
            return (n - t) * e + t
        }, ne.map = function (e, t, n, o, a) {
            return t === n ? a : ne.lerp(ne.norm(e, t, n), o, a)
        }, ne.clamp = function (e, t, n) {
            return Math.min(Math.max(e, Math.min(t, n)), Math.max(t, n))
        }, ne.distance = function (e, t) {
            var n = t.x - e.x,
                o = t.y - e.y;
            return Math.sqrt(n * n + o * o)
        }, ne.distanceXY = function (e, t, n, o) {
            var a = n - e,
                r = o - t;
            return Math.sqrt(a * a + r * r)
        }, ne.pointInRect = function (e, t, n) {
            return ne.inRange(e, n.x, n.x + n.width) && ne.inRange(t, n.y, n.y + n.height)
        }, ne.inRange = function (e, t, n) {
            return e >= Math.min(t, n) && e <= Math.max(t, n)
        }, ne.rangeIntersect = function (e, t, n, o) {
            return Math.max(e, t) >= Math.min(n, o) && Math.min(e, t) <= Math.max(n, o)
        }, ne.rectIntersect = function (e, t) {
            return ne.rangeIntersect(e.x, e.x + e.width, t.x, t.x + t.width) && ne.rangeIntersect(e.y, e.y + e.height, t.y, t.y + t.height)
        }, ne.degreesToRads = function (e) {
            return e / 180 * Math.PI
        }, ne.radsToDegrees = function (e) {
            return 180 * e / Math.PI
        }, ne.randomRange = function (e, t) {
            return e + Math.random() * (t - e)
        }, ne.randomInt = function (e, t) {
            return Math.floor(e + Math.random() * (t - e + 1))
        }, ne.roundToPlaces = function (e, t) {
            var n = Math.pow(10, t);
            return Math.round(e * n) / n
        }, ne.roundNearest = function (e, t) {
            return Math.round(e / t) * t
        }, ne.quadraticBezier = function (e, t, n, o, a) {
            var r = a || {};
            return r.x = Math.pow(1 - o, 2) * e.x + 2 * (1 - o) * o * t.x + o * o * n.x, r.y = Math.pow(1 - o, 2) * e.y + 2 * (1 - o) * o * t.y + o * o * n.y, r
        }, ne.cubicBezier = function (e, t, n, o, a, r) {
            var i = r || {};
            return i.x = Math.pow(1 - a, 3) * e.x + 3 * Math.pow(1 - a, 2) * a * t.x + 3 * (1 - a) * a * a * n.x + a * a * a * o.x, i.y = Math.pow(1 - a, 3) * e.y + 3 * Math.pow(1 - a, 2) * a * t.y + 3 * (1 - a) * a * a * n.y + a * a * a * o.y, i
        }, ne.lineIntersection = function (e, t, n, o, a, r, i, l) {
            var s, c, u = [void 0],
                p = u[1],
                h = u[2],
                f = {
                    x: null,
                    y: null,
                    onLine1: !1,
                    onLine2: !1
                };
            return 0 === (s = (l - r) * (n - e) - (i - a) * (o - t)) ? f : (c = (n - e) * (p = t - r) - (o - t) * (h = e - a), p = ((i - a) * p - (l - r) * h) / s, h = c / s, f.x = e + p * (n - e), f.y = t + p * (o - t), p > 0 && p < 1 && (f.onLine1 = !0), h > 0 && h < 1 && (f.onLine2 = !0), f)
        }, ne.rootMeanSquare = function (e) {
            for (var t = 0, n = 0; n < e.length; n += 1) t += e[n] * e[n];
            return Math.sqrt(t / e.length)
        }, window.MathUtils = ne;
        var oe = ne;

        function ae(e) {
            return (ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function re(e, t) {
            return !t || "object" !== ae(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function ie(e) {
            return (ie = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function le(e, t) {
            return (le = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var se = "MOUSE_DOWN",
            ce = "MOUSE_UP",
            ue = "MOUSE_WHEEL",
            pe = new(function (e) {
                function t() {
                    var e;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), (e = re(this, ie(t).call(this))).startPos = {
                        x: 0,
                        y: 0
                    }, e.mousePos = {
                        x: 0,
                        y: 0
                    }, e.delta = 0, e.prevDelta = 0, e.dragging = !1, e.magnet = !1, e.disabled = !0, e.gyroEnabled = !1, e.gyroAvailable = !1, e.ON_MOUSE_MOVE = "mousemove", e.ON_MOUSE_DOWN = "mousedown", e.ON_MOUSE_UP = "mouseup", e.mousewheelevt = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel", e.scroller = function (t) {
                        if (!e.disabled) {
                            var n = 0;
                            if (t.do && t.do.gamma && e.gyroEnabled) Math.abs(t.do.gamma) > 10 && (n = oe.clamp(t.do.gamma, -.75, .75));
                            else {
                                var o = t;
                                o || (o = window.event), o.wheelDelta ? n = o.wheelDelta / 120 : o.detail && (n = -o.detail / 3), o.preventDefault && o.preventDefault(), o.returnValue = !1
                            }
                            e.prevDelta = e.delta, e.delta = n, F.f.killDelayedCallsTo(e.resetDelta), F.f.delayedCall(.25, e.resetDelta)
                        }
                    }, e.onDown = function (t) {
                        if (0 === t.button || e.isMobile) {
                            e.dragging = !0, e.gyroEnabled = !0;
                            var n = e.getMouseCoords(t),
                                o = n.x,
                                a = n.y;
                            e.startPos.x = o, e.startPos.y = a, e.setPos(o, a), e.emit(se)
                        }
                    }, e.onUp = function () {
                        e.dragging = !1, e.gyroEnabled = !1, e.emit(ce), e.dragging || (e.startPos.x = e.mousePos.x, e.startPos.y = e.mousePos.y)
                    }, e.onMove = function (t) {
                        var n = e.getMouseCoords(t),
                            o = n.x,
                            a = n.y;
                        e.setPos(o, a), e.dragging || (e.startPos.x = e.mousePos.x, e.startPos.y = e.mousePos.y)
                    }, e.setPos = function (t, n) {
                        e.mousePos.x = t, e.mousePos.y = n
                    }, e.getDistance = function () {
                        return {
                            x: oe.clamp(e.mousePos.x - e.startPos.x, -window.innerWidth / 2, window.innerWidth / 2),
                            y: e.mousePos.y - e.startPos.y
                        }
                    }, e.getMouseCoords = function (t) {
                        var n, o;
                        return e.isMobile ? (n = t.changedTouches[0].clientX, o = t.changedTouches[0].clientY) : (n = t.clientX, o = t.clientY), {
                            x: n,
                            y: o
                        }
                    }, e.resetDelta = function () {
                        e.prevDelta = e.delta, e.delta = 0
                    }, e.update = function () {
                        window.requestAnimationFrame(e.update), e.disabled || e.emit(ue, e.delta)
                    }, e.getMouse = function () {
                        return e.mousePos
                    }, e.isMobile = I.getState().platform.device.isMobile, e.isMobile && (e.ON_MOUSE_MOVE = "touchmove", e.ON_MOUSE_DOWN = "touchstart", e.ON_MOUSE_UP = "touchend"), document.body.addEventListener(e.ON_MOUSE_MOVE, e.onMove), document.body.addEventListener(e.ON_MOUSE_DOWN, e.onDown), window.addEventListener(e.ON_MOUSE_UP, e.onUp), e.isMobile || (e.update(), document.addEventListener(e.mousewheelevt, function (t) {
                        e.scroller(t)
                    }, {
                        passive: !1
                    })), e
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && le(e, t)
                }(t, J.a), t
            }());
        n(635);

        function he(e) {
            return (he = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function fe(e) {
            return (fe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function de(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function me(e, t) {
            return (me = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ye = function (e) {
                function t(e, n, o, a) {
                    var r, i, l;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), i = this, r = !(l = fe(t).call(this)) || "object" !== he(l) && "function" != typeof l ? de(i) : l, ve.call(de(r)), r._data = o, r.interactive = !0, r.isMobile = I.getState().platform.device.isMobile, r.isMobile && (r.ON_MOUSE_OVER = "touchstart", r.ON_MOUSE_OUT = "touchendoutside", r.ON_MOUSE_DOWN = "touchstart", r.ON_MOUSE_UP = "touchend"), r.controlPoints = e, r.areaRect = n, r._index = r.controlPoints[0]._index, r.breakpoint = a, r.tl = new q.Point(0, 0), r.tr = new q.Point(0, 0), r.br = new q.Point(0, 0), r.bl = new q.Point(0, 0), r.mouseClickedPos = new q.Point(0, 0), r._updatePoints(), r.shape = new q.Graphics, r.addChild(r.shape), r.imageContainer = new q.Sprite, r.imageContainer.anchor.set(.5), r.imageContainer.mask = r.shape, r.addChild(r.imageContainer), r.image = q.Sprite.from("static/assets/images/works/".concat(r._data.slug, "/poster.jpg")), r.image.anchor.set(.5), r.imageContainer.addChild(r.image), r._projectsName = new q.Container, r._projectsName.mask = r.shape, r.addChild(r._projectsName), r._title = new q.Text(r._data.title, {
                        fontFamily: "IBM Plex Sans",
                        fontSize: r.getTitleFontsize(),
                        fontWeight: 400,
                        fill: r._data.color,
                        align: "left"
                    }), r._projectsName.addChild(r._title), r._title.y = r._title.height, r._title.anchor.y = 1, r._client = new q.Text(r._data.client, {
                        fontFamily: "IBM Plex Sans",
                        fontSize: r.getClientFontsize(),
                        fontWeight: 100,
                        fill: r._data.color,
                        align: "left"
                    }), r._client.y = r._title.height + 5, r._projectsName.addChild(r._client), r._tech = new q.Text(r._data.tech, {
                        fontFamily: "IBM Plex Sans",
                        fontSize: r.getClientFontsize(),
                        fontWeight: 100,
                        fill: r._data.color,
                        align: "left"
                    }), r._tech.y = r._client.y + r._client.height + 15, r._projectsName.addChild(r._tech), r._projectsName._base = r._tech.y + r._tech.height, r._emitter = new J.a, r.addListener("removed", r._destroy), r.addListener(r.ON_MOUSE_OVER, r._onMouseOver), r.addListener(r.ON_MOUSE_OUT, r._onMouseOut), r.addListener(r.ON_MOUSE_DOWN, r._onMouseClick), r.addListener(r.ON_MOUSE_UP, r._onMouseUp), r._tl = new F.e, r._tl.staggerFrom([r._title, r._client, r._tech], .75, {
                        alpha: 0,
                        y: "+=30",
                        rotation: oe.degreesToRads(4),
                        ease: F.c.easeOut
                    }, .3, "-=0"), r._tl.stop(), r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && me(e, t)
                }(t, q["Container"]), t
            }(),
            ve = function () {
                var e = this;
                this.ON_MOUSE_OVER = "mouseover", this.ON_MOUSE_OUT = "mouseout", this.ON_MOUSE_DOWN = "mousedown", this.ON_MOUSE_UP = "mouseup", this._updatePoints = function () {
                    e.tl.x = e.controlPoints[0]._particle._position.x, e.tl.y = e.controlPoints[0]._particle._position.y, e.tr.x = e.controlPoints[1]._particle._position.x, e.tr.y = e.controlPoints[1]._particle._position.y, e.br.x = e.controlPoints[3]._particle._position.x, e.br.y = e.controlPoints[3]._particle._position.y, e.bl.x = e.controlPoints[2]._particle._position.x, e.bl.y = e.controlPoints[2]._particle._position.y
                }, this._update = function () {
                    e.shape && (e._updatePoints(), e.shape.clear(), e.shape.beginFill(2236962, 1), e.shape.drawPolygon([e.tl, e.tr, e.br, e.bl]), e.shape.endFill(), e.image.height = e.areaRect.h + 250, e.image.scale.x = e.image.scale.y, e.imageContainer.x = e.controlPoints[0]._spring._anchor.x + (e.controlPoints[1]._spring._anchor.x - e.controlPoints[0]._spring._anchor.x) / 2, e.imageContainer.y = e.areaRect.h + e.areaRect.y - e.areaRect.h / 2, e._projectsName.x = e.bl.x + 35, e._projectsName.y = e.areaRect.h + e.areaRect.y - e._projectsName._base - 35)
                }, this._onMouseOver = function () {
                    pe.dragging && !e.isMobile || e._emitter.emit("GRID_CELL_OVER", e._data.slug)
                }, this._onMouseOut = function () {
                    e._emitter.emit("GRID_CELL_OUT", e._data.slug)
                }, this._onMouseClick = function (t) {
                    e.mouseClickedPos.x = t.data.global.x, e.mouseClickedPos.y = t.data.global.y, e.isMobile || e._emitter.emit("GRID_CELL_OUT", e._data.slug)
                }, this._onMouseUp = function (t) {
                    e.isMobile && e._onMouseOut(), e.mouseClickedPos.x === t.data.global.x && e.mouseClickedPos.y === t.data.global.y && (e._data.type === R.FILTER_PLAYGROUND ? window.open("https://play.icantcontrolmyego.net/".concat(e._data.slug), "_blank") : e._emitter.emit("GRID_CELL_CLICK", e._data.slug))
                }, this._on = function () {
                    e.isMobile || e._tl.timeScale(1).play(), F.f.to(e.image, .75, {
                        alpha: 1,
                        ease: F.c.easeOut
                    }), F.f.to(e.imageContainer.scale, 6, {
                        x: 1.15,
                        y: 1.15,
                        ease: F.b.easeNone
                    })
                }, this._out = function () {
                    e.isMobile || e._tl.timeScale(2).reverse(), F.f.to(e.image, .75, {
                        alpha: .75,
                        ease: F.c.easeOut
                    }), F.f.to(e.imageContainer.scale, .75, {
                        x: 1,
                        y: 1,
                        ease: F.c.easeOut
                    })
                }, this._dimOn = function () {
                    F.f.killTweensOf(e.image), F.f.to(e.image, .75, {
                        alpha: .95,
                        ease: F.c.easeOut
                    })
                }, this._dimOut = function () {
                    F.f.killTweensOf(e.image), F.f.to(e.image, .75, {
                        alpha: .25,
                        ease: F.c.easeOut
                    })
                }, this._active = function () {
                    F.f.killTweensOf(e.image), F.f.to(e.image, .75, {
                        alpha: .75,
                        ease: F.c.easeOut
                    }), e.interactive = !0
                }, this._inactive = function () {
                    F.f.killTweensOf(e.image), F.f.to(e.image, .75, {
                        alpha: .15,
                        ease: F.c.easeOut
                    }), e.interactive = !1
                }, this._setFilter = function (t) {
                    e._data.type === t || t === R.FILTER_ALL ? e._active() : e._inactive()
                }, this.getTitleFontsize = function () {
                    return "xlarge" === e.breakpoint ? 29 : 24
                }, this.getClientFontsize = function () {
                    return "xlarge" === e.breakpoint ? 19 : 14
                }, this._onResize = function (t) {
                    e.breakpoint = t, e._title.style.fontSize = e.getTitleFontsize(), e._client.style.fontSize = e.getClientFontsize(), e._tech.style.fontSize = e.getClientFontsize()
                }, this._destroy = function () {
                    ee()(e._emitter), e.removeListener("removed", e._destroy), e.removeListener(e.ON_MOUSE_OVER, e._onMouseOver), e.removeListener(e.ON_MOUSE_OUT, e._onMouseOut), e.removeListener(e.ON_MOUSE_DOWN, e._onMouseClick), e.removeListener(e.ON_MOUSE_UP, e._onMouseUp), e.removeChildren(), e.image.destroy({
                        children: !0
                    }), e.shape.destroy(), e.shape = null, e.image = null, e.controlPoints = null, e._emitter = null, e.destroy()
                }
            },
            ge = ye,
            be = n(9);

        function _e(e) {
            return (_e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function we(e) {
            return (we = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ee(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function xe(e, t) {
            return (xe = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Oe = function (e) {
                function t() {
                    var e, n, o, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), n = this, e = !(o = we(t).call(this)) || "object" !== _e(o) && "function" != typeof o ? Ee(n) : o, Pe.call(Ee(e)), e._anchor = new be(a, r), e._length = i, e._springForce = oe.randomRange(.1, .2), e._reset = new be(0, 0), e._particle = null, e._draw(), e
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && xe(e, t)
                }(t, q["Graphics"]), t
            }(),
            Pe = function () {
                var e = this;
                this._setAnchor = function (t, n) {
                    e._anchor.x = t, e._anchor.y = n
                }, this._connect = function (t) {
                    e._particle = t;
                    var n = t._position.clone().subtract(e._anchor),
                        o = n.length() - e._length;
                    n.normalize();
                    var a = -1 * e._springForce * o;
                    n.multiply(new be(a, a)), t._applyForce(n)
                }, this._constrainLength = function (t, n, o) {
                    if (t._position) {
                        var a = t._position.clone().subtract(e._anchor),
                            r = a.length(),
                            i = oe.clamp(r, n, o);
                        if (i !== r) {
                            var l = i / r;
                            a.multiply(new be(l, l));
                            var s = e._anchor.clone().add(a);
                            t._setPosition(s.x, s.y), t._velocity.multiply(e._reset)
                        }
                    }
                }, this._draw = function () {
                    e._particle && (e.clear(), e.beginFill(3355443, 1), e.drawCircle(e._anchor.x, e._anchor.y, 10), e.endFill(), e.lineStyle(1, 5592405, 1), e.moveTo(e._anchor.x, e._anchor.y), e.lineTo(e._particle._position.x, e._particle._position.y), e.endFill())
                }
            },
            Se = Oe;

        function Me(e) {
            return (Me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Re(e) {
            return (Re = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ce(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Te(e, t) {
            return (Te = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Ae = function (e) {
            function t() {
                var e, n, o, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 ? arguments[2] : void 0;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n = this, e = !(o = Re(t).call(this)) || "object" !== Me(o) && "function" != typeof o ? Ce(n) : o, Le.call(Ce(e)), e._position = new be(a, r), e._velocity = new be(0, 0), e._acceleration = new be(0, 0), e._damping = new be(t.DAMPING, t.DAMPING), e._reset = new be(0, 0), e._text = new q.Text(i, {
                    fontFamily: "IBM Plex Sans",
                    fontSize: 12,
                    fill: 0,
                    align: "center"
                }), e._text.anchor.x = .5, e._text.anchor.y = .5, e._updatePosition(), e
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Te(e, t)
            }(t, q["Graphics"]), t
        }();
        Ae.DAMPING = .4;
        var Le = function () {
                var e = this;
                this._updatePosition = function () {
                    e.x = e._position.x, e.y = e._position.y
                }, this._setPosition = function (t, n) {
                    e._position.x = t, e._position.y = n, e._updatePosition()
                }, this._draw = function () {
                    e.clear(), e.beginFill(65280, 1), e.drawCircle(0, 0, 12), e.endFill()
                }, this._applyForce = function (t) {
                    e._acceleration.add(t)
                }, this._update = function () {
                    e._velocity.add(e._acceleration), e._velocity.multiply(e._damping), e._position.add(e._velocity), e._acceleration.multiply(e._reset), e._updatePosition()
                }
            },
            ke = Ae;

        function Ie(e) {
            return (Ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ne(e, t) {
            return !t || "object" !== Ie(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Fe(e) {
            return (Fe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function je(e, t) {
            return (je = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ze = function (e) {
            function t(e, n, o, a) {
                var r, i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    l = arguments.length > 5 ? arguments[5] : void 0;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (r = Ne(this, Fe(t).call(this))).startPos = new be(0, 0), r.mousePosition = new be(0, 0), r.mouseForce = -600, r._toX = 0, r._toY = 0, r._closed = !1, r._initialPos = {
                    x: 0,
                    y: 0
                }, r._onMouseDown = function () {
                    r.startPos.x = r._spring._anchor.x, r.startPos.y = r._spring._anchor.y
                }, r._onMouseUp = function () {
                    var e = r.isMobile ? 2 : 1;
                    r.startPos.x = r.startPos.x + pe.getDistance().x * e, r.startPos.y = r.startPos.y + pe.getDistance().y
                }, r._onMouseWheel = function (e) {
                    var t = oe.clamp(20 * e, -35, 35);
                    r.startPos.x = r.startPos.x + t
                }, r._update = function () {
                    var e = pe.getMouse();
                    r.mousePosition.x = e.x - r.parent.x, r.mousePosition.y = e.y - r.parent.y;
                    var t = Date.now(),
                        n = Math.min((t - r._particle.time) / 1e3, 1 / 60);
                    r._particle.time = t;
                    var o = r.mousePosition.clone().subtract(r._particle._position),
                        a = o.angle(),
                        i = oe.map(o.x, 0, window.innerWidth, r.mouseForce, 0);
                    r._mouseSpring.x = i * Math.cos(a) * n || 0, r._mouseSpring.y = i * Math.sin(a) * n || 0, pe.magnet && r._particle._applyForce(r._mouseSpring), r._spring._connect(r._particle), r._particle._update(), r._drag()
                }, r._drag = function () {
                    var e = r.isMobile ? 2 : 1;
                    r._toX = r.startPos.x + pe.getDistance().x * e, r._spring._anchor.x += .06 * (r._toX - r._spring._anchor.x), r._spring._anchor.y += .4 * (r._toY - r._spring._anchor.y)
                }, r._animateIn = function () {
                    r.startPos.x = r._initialPos.x, r._toY = r._initialPos.y
                }, r._animateOut = function () {
                    r._initialPos.x = r.startPos.x, r._toY = r._areaRect.y + r._areaRect.h + 5
                }, r._reset = function () {
                    r.startPos.x -= 150, r._spring._anchor.x = r.startPos.x, r._particle._position.x = r.startPos.x, r._toY = r._areaRect.h + r._areaRect.y, r._spring._anchor.y = r._toY, r._particle._position.y = r._toY
                }, r._close = function () {
                    r._closed = !r._closed, r._closed ? r._toY = r._areaRect.h + r._areaRect.y : r._toY = r._initialPos.y
                }, r._onRemoved = function () {
                    r._spring.destroy(), r._particle.destroy(), pe.off(se, r._onMouseDown), pe.off(ce, r._onMouseUp), r.destroy()
                }, r._index = o, r._areaRect = l, r.isMobile = I.getState().platform.device.isMobile, r.isMobile && (r.mouseForce = -200), r._mouseSpring = new be(0, 0), r._initialPos.x = e, r._initialPos.y = n, r._spring = new Se(a, n, 0, i), r.addChild(r._spring), r._particle = new ke(a, n, o), r.addChild(r._particle), r.startPos.x = e, r.startPos.y = n, r._toX = e, r._toY = n, pe.on(se, r._onMouseDown), pe.on(ce, r._onMouseUp), pe.on(ue, r._onMouseWheel), r.addListener("removed", r._onRemoved), r
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && je(e, t)
            }(t, q["Sprite"]), t
        }();
        var De = function e(t) {
            var n = this;
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.controlPoints = [], this.controlPointsBottom = [], this.areaRect = [], this.cells = [], this.activeFilter = R.FILTER_ALL, this.paused = !1, this.addPixiApp = function () {
                n.app = new q.Application(n.windowWidth, n.windowHeight, {
                    autoStart: !1,
                    backgroundColor: 0,
                    transparent: !1,
                    resolution: 2,
                    autoResize: !0
                }), n.appContainer.appendChild(n.app.view), n.container = new q.Container, n.app.stage.addChild(n.container);
                for (var e = 0, t = n.items.length; e < t; e += 1) {
                    var o = q.Texture.from("static/assets/images/works/".concat(n.items[e].slug, "/poster.jpg"));
                    n.app.renderer.plugins.prepare.upload(o.baseTexture)
                }
            }, this.initGrid = function () {
                n.app.stop(), n.paused = !0, pe.on(se, n.onMouseDown), pe.on(ce, n.onMouseUp), n.updateAreaRect(), n.addControlPoints(), n.updateCellsCount(), n.updateAreaRect(), n.resizeControlPoints(!0), n.resizeCells(), n.app.ticker.add(n.update)
            }, this.updateAreaRect = function () {
                n.areaRect.x = e.MARGIN_SIDES, n.areaRect.y = n.header.getBoundingClientRect().bottom + e.MARGIN_TOP, n.areaRect.w = n.app.screen.width - 2 * e.MARGIN_SIDES, n.areaRect.h = n.app.screen.height - n.areaRect.y, n.h2.style.top = "".concat(n.areaRect.y / 2, "px")
            }, this.addControlPoints = function () {
                for (var t = n.items.length, o = -2; o <= e.CELLS + 2; o += 1) {
                    var a = o % t;
                    a < 0 && (a = t + a);
                    var r = Math.floor(n.areaRect.w / e.CELLS) * o + e.MARGIN_SIDES - 60,
                        i = n.getRandomControlPointY(o),
                        l = a % 2 == 0 ? -1 : 1,
                        s = r - oe.randomRange(20, 50) * l,
                        c = n.getControlPointYBottom();
                    n.controlPoints.push(n.addControlPoint(r, i, a, r)), n.controlPointsBottom.push(n.addControlPoint(s, c, a, s, !1))
                }
                for (var u = 0, p = n.controlPoints.length; u < p; u += 1) {
                    n.controlPoints[u]._reset();
                    var h = n.addCell(n.controlPoints[u]._index);
                    h && n.cells.push(h)
                }
            }, this.addControlPoint = function (e, t, o, a) {
                var r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    i = new ze(e, t, o, a, r, n.areaRect);
                return n.container.addChild(i), i
            }, this.getRandomControlPointY = function (e) {
                var t = e % 2 == 0 ? -1 : 1;
                return n.areaRect.y + oe.randomRange(10, 40) * t
            }, this.getControlPointYBottom = function () {
                return n.areaRect.y + n.areaRect.h
            }, this.getControlPointIndex = function (e) {
                return n.controlPoints.findIndex(function (t) {
                    return t._index === e
                })
            }, this.resizeControlPoints = function () {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], o = -2, a = 0, r = n.controlPoints.length; a < r; a += 1) {
                    var i = Math.floor(n.areaRect.w / e.CELLS) * o + e.MARGIN_SIDES;
                    n.controlPoints[a]._toX = i, n.controlPoints[a].startPos.x = i, n.controlPoints[a]._spring._anchor.x = i, n.controlPoints[a]._initialPos.x = i;
                    var l = n.getRandomControlPointY(o);
                    t || (n.controlPoints[a]._toY = l), n.controlPoints[a].startPos.y = l, t || (n.controlPoints[a]._spring._anchor.y = l), n.controlPoints[a]._initialPos.y = l;
                    var s = o % 2 == 0 ? -1 : 1,
                        c = i - oe.randomRange(20, 50) * s;
                    n.controlPointsBottom[a]._toX = c, n.controlPointsBottom[a].startPos.x = c, n.controlPointsBottom[a]._spring._anchor.x = c, n.controlPointsBottom[a]._initialPos.x = c, l = n.getControlPointYBottom(), n.controlPointsBottom[a]._toY = l, n.controlPointsBottom[a].startPos.y = l, n.controlPointsBottom[a]._spring._anchor.y = l, n.controlPointsBottom[a]._initialPos.y = l, o += 1
                }
            }, this.addCell = function (e) {
                var t = n.getControlPointIndex(e);
                if (t === n.controlPoints.length - 1) return null;
                var o = t,
                    a = t + 1,
                    r = new ge([n.controlPoints[o], n.controlPoints[a], n.controlPointsBottom[o], n.controlPointsBottom[a]], n.areaRect, n.items[e], n.breakpoint);
                return r._emitter.on("GRID_CELL_OVER", n._onCellOver), r._emitter.on("GRID_CELL_OUT", n._onCellOut), r._emitter.on("GRID_CELL_CLICK", n._onCellClick), r._setFilter(n.activeFilter), n.container.addChildAt(r, 1), r
            }, this.updateCells = function () {
                for (var e = 0, t = n.cells.length; e < t; e += 1) n.cells[e]._update()
            }, this._onCellOver = function (e) {
                var t = Z()(n.cells, {
                    _data: {
                        slug: e
                    }
                });
                n.cells[t]._on()
            }, this._onCellOut = function (e) {
                var t = Z()(n.cells, {
                    _data: {
                        slug: e
                    }
                });
                n.cells[t]._out()
            }, this._onCellClick = function (e) {
                I.dispatch(Object(f.d)("/work/".concat(e)))
            }, this.resizeCells = function () {
                for (var e = 0, t = n.cells.length; e < t; e += 1) n.cells[e]._onResize(n.breakpoint)
            }, this.onMouseDown = function () {
                n.paused || document.body.classList.add("grabbing")
            }, this.onMouseUp = function () {
                n.paused || document.body.classList.remove("grabbing")
            }, this.animateIn = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .75;
                document.body.classList.add("grab"), n.app.start(), n.paused = !1, F.f.killDelayedCallsTo(n.pauseApp);
                for (var t = n.controlPoints.length, o = 0; o < t; o += 1) F.f.killDelayedCallsTo(n.controlPoints[o]._animateOut), F.f.delayedCall(o / 5 + e, n.controlPoints[o]._animateIn);
                F.f.delayedCall(t / 5 + e, function () {
                    pe.disabled = !1, pe.magnet = !0
                })
            }, this.animateOut = function () {
                pe.disabled = !0, document.body.classList.remove("grab"), pe.magnet = !1;
                for (var e = n.controlPoints.length, t = 0; t < e; t += 1) F.f.delayedCall(t / 10, n.controlPoints[t]._animateOut);
                F.f.delayedCall(e / 10 + 1, n.pauseApp)
            }, this.pauseApp = function () {
                n.app.stop(), n.paused = !0
            }, this.close = function () {
                for (var e = 0, t = n.controlPoints.length; e < t; e += 1) F.f.killDelayedCallsTo(n.controlPoints[e]._close), F.f.delayedCall(e / 50, n.controlPoints[e]._close)
            }, this.setFilter = function (e) {
                n.activeFilter = e;
                for (var t = 0, o = n.cells.length; t < o; t += 1) n.cells[t]._setFilter(e)
            }, this.update = function () {
                if (!n.paused) {
                    if (pe.dragging || pe.delta !== pe.prevDelta) {
                        var t = n.items.length,
                            o = Math.floor(n.areaRect.w / e.CELLS),
                            a = n.controlPoints[1],
                            r = n.controlPoints[n.controlPoints.length - 2],
                            i = n.areaRect.x - 2 * o,
                            l = n.areaRect.x + n.areaRect.w + 2 * o;
                        if (r._toX > l) {
                            n.container.removeChild(n.controlPoints.pop()), n.container.removeChild(n.controlPointsBottom.pop()), n.container.removeChild(n.cells.pop());
                            var s = oe.mod(n.controlPoints[0]._index - 1, t),
                                c = n.controlPoints[0].startPos.x - o,
                                u = n.getRandomControlPointY(s),
                                p = n.controlPoints[0]._toX - o;
                            n.controlPoints.unshift(n.addControlPoint(c, u, s, p));
                            var h = s % 2 == 0 ? -1 : 1,
                                f = c - oe.randomRange(20, 50) * h,
                                d = n.getControlPointYBottom(),
                                m = n.controlPointsBottom[0]._toX - o;
                            n.controlPointsBottom.unshift(n.addControlPoint(f, d, s, m, !1)), n.cells.unshift(n.addCell(s))
                        }
                        if (a._toX < i) {
                            n.container.removeChild(n.controlPoints.shift()), n.container.removeChild(n.controlPointsBottom.shift()), n.container.removeChild(n.cells.shift());
                            var y = (n.controlPoints[n.controlPoints.length - 1]._index + 1) % t,
                                v = n.controlPoints[n.controlPoints.length - 1].startPos.x + o,
                                g = n.getRandomControlPointY(y),
                                b = n.controlPoints[n.controlPoints.length - 1]._toX + o;
                            n.controlPoints.push(n.addControlPoint(v, g, y, b));
                            var _ = y % 2 == 0 ? -1 : 1,
                                w = v - oe.randomRange(20, 50) * _,
                                E = n.getControlPointYBottom(),
                                x = n.controlPoints[n.controlPoints.length - 1]._toX + o;
                            n.controlPointsBottom.push(n.addControlPoint(w, E, y, x, !1)), n.cells.push(n.addCell(0 === y ? t - 1 : y - 1))
                        }
                    }
                    for (var O = 0, P = n.controlPoints.length; O < P; O += 1) n.controlPoints[O]._update(), n.controlPointsBottom[O]._update();
                    n.updateCells()
                }
            }, this.updateCellsCount = function () {
                "medium" === n.breakpoint ? (e.CELLS = 3, e.MARGIN_TOP = 0) : "small" === n.breakpoint || "xsmall" === n.breakpoint || "xxsmall" === n.breakpoint ? (e.CELLS = 1.75, e.MARGIN_TOP = 50) : (e.CELLS = e.CELLS_DEFAULT, e.MARGIN_TOP = 50)
            }, this.onResize = function (e, t, o) {
                n.windowWidth = e, n.windowHeight = t, n.breakpoint = o, n.updateCellsCount(), n.app.renderer.resize(n.windowWidth, n.windowHeight), n.updateAreaRect(), n.resizeControlPoints(), n.resizeCells()
            }, this.destroy = function () {
                n.app.destroy()
            }, this.items = t.items.filter(function (e) {
                return e.active
            }), this.appContainer = t.appContainer, this.dpr = t.dpr, this.windowWidth = t.windowWidth, this.windowHeight = t.windowHeight, this.header = t.header, this.breakpoint = t.breakpoint, this.h2 = document.querySelector(".Header h2"), this.addPixiApp(), F.f.delayedCall(0, this.initGrid)
        };
        De.CELLS = De.CELLS_DEFAULT = 4, De.MARGIN_SIDES = 0, De.MARGIN_TOP = 50;
        var He = De,
            We = n(292),
            Be = n.n(We);

        function Ge(e) {
            return (Ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ue(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Ve(e, t) {
            return !t || "object" !== Ge(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Ye(e) {
            return (Ye = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Xe(e, t) {
            return (Xe = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var qe = function (e) {
            function t() {
                var e, n, o;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                return Ve(o, (n = o = Ve(this, (e = Ye(t)).call.apply(e, [this].concat(r))), o.elements = {}, o.animateIn = function () {
                    o.slider.animateIn(1)
                }, o.animateOut = function () {
                    o.slider.animateOut()
                }, o.setFilter = function (e) {
                    o.slider.setFilter(e)
                }, o.onResize = function (e, t) {
                    o.slider.onResize(e, t, o.props.breakpoint)
                }, n))
            }
            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Xe(e, t)
            }(t, r["PureComponent"]), n = t, (o = [{
                key: "componentDidMount",
                value: function () {}
            }, {
                key: "componentWillReceiveProps",
                value: function (e) {
                    var t = e.windowWidth,
                        n = e.windowHeight,
                        o = e.isRetina,
                        a = e.header,
                        r = e.filter,
                        i = e.breakpoint,
                        l = e.pathname;
                    t === this.props.windowWidth && n === this.props.windowHeight || this.onResize(t, n), a && a !== this.props.header && (this.slider = new He({
                        items: this.props.works,
                        dpr: o ? 2 : 1,
                        appContainer: this.elements.host,
                        windowWidth: t,
                        windowHeight: n,
                        header: a,
                        breakpoint: i
                    }), "/" === l && F.f.delayedCall(0, this.slider.animateIn)), this.props.filter !== r && this.setFilter(r), l !== this.props.pathname && ("/" === l ? this.animateIn() : this.animateOut())
                }
            }, {
                key: "componentWillUnmount",
                value: function () {
                    this.slider.destroy()
                }
            }, {
                key: "render",
                value: function () {
                    var e = this;
                    return i.a.createElement("div", {
                        className: "WorkSlider ".concat(Be.a.host),
                        ref: function (t) {
                            e.elements.host = t
                        }
                    })
                }
            }]) && Ue(n.prototype, o), a && Ue(n, a), t
        }();
        qe.mapStateToProps = function (e) {
            return {
                works: e.general.works,
                isRetina: e.platform.media.isRetina,
                windowWidth: e.platform.windowWidth,
                windowHeight: e.platform.windowHeight,
                filter: e.general.filter,
                breakpoint: e.platform.media.breakpoint,
                pathname: e.router.location.pathname,
                isMobile: e.platform.device.isMobile
            }
        }, qe.propTypes = {
            isRetina: p.a.bool.isRequired,
            windowWidth: p.a.number.isRequired,
            windowHeight: p.a.number.isRequired,
            works: p.a.array.isRequired,
            filter: p.a.string.isRequired,
            header: p.a.any,
            breakpoint: p.a.string.isRequired,
            pathname: p.a.string.isRequired
        }, qe.defaultProps = {
            header: null
        };
        var Qe = Object(l.c)(qe.mapStateToProps)(qe),
            Ze = n(293),
            Ke = n.n(Ze),
            Je = function () {
                return Ke.a.get("static/data/works.json").then(function (e) {
                    return e.data
                })
            },
            $e = function () {
                return function (e) {
                    return new Promise(function (t) {
                        Je().then(function (n) {
                            var o;
                            t(), e((o = n, {
                                type: R.FETCH_WORKS_SUCCESS,
                                payload: {
                                    data: o
                                }
                            }))
                        }).catch(function (t) {
                            return e(function (e) {
                                return {
                                    type: R.FETCH_WORKS_FAILURE,
                                    payload: e
                                }
                            }(t))
                        })
                    })
                }
            },
            et = n(32),
            tt = n.n(et);

        function nt(e) {
            return (nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ot(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function at(e, t) {
            return !t || "object" !== nt(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function rt(e) {
            return (rt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function it(e, t) {
            return (it = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var lt = function (e) {
            function t() {
                var e, n, o;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                return at(o, (n = o = at(this, (e = rt(t)).call.apply(e, [this].concat(r))), o.elements = [], o.split = [], o.state = {
                    header: null
                }, o.gotoWork = function () {
                    o.animateOut()
                }, o.gotoAbout = function () {
                    o.animateOut()
                }, o.gotoHome = function () {
                    o.timeline.delay(1.5).restart(!0)
                }, o.hide = function () {
                    F.f.set(o.elements.filter, {
                        alpha: 0
                    })
                }, o.addKeyboardEvents = function () {
                    o.props.isMobile || document.addEventListener("keypress", o.onKeyPres)
                }, o.onKeyPres = function (e) {
                    119 === e.keyCode ? o.props.setFilter(R.FILTER_WEBSITES) : 112 === e.keyCode ? o.props.setFilter(R.FILTER_PLAYGROUND) : 97 === e.keyCode && o.props.setFilter(R.FILTER_ALL)
                }, o.animateIn = function () {
                    F.f.set(o.elements.filter, {
                        alpha: 1
                    }), o.timeline = new F.d({
                        delay: 3
                    });
                    var e = o.elements.filter.querySelectorAll("li");
                    F.f.set(o.elements.filter, {
                        perspective: 800,
                        backfaceVisibility: "hidden"
                    }), o.timeline.staggerFrom(e, .6, {
                        opacity: 0,
                        y: 20,
                        transformOrigin: "50% 50%",
                        ease: F.c.easeOut
                    }, .02, "-=0.6"), "/" !== o.props.pathname && o.timeline.stop()
                }, o.animateOut = function () {
                    o.timeline.reverse()
                }, o.setFilter = function (e) {
                    o.props.setFilter(e.target.id)
                }, o.splitElement = function (e) {
                    o.split[e] = new z.a(o.elements[e], {
                        type: "words, chars"
                    }), F.f.set(o.elements[e], {
                        perspective: 800,
                        backfaceVisibility: "hidden"
                    })
                }, o.setRef = function (e) {
                    e && (e.dataset ? o.elements[e.dataset.ref] = e : o.elements[e.props["data-ref"]] = e)
                }, n))
            }
            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && it(e, t)
            }(t, r["PureComponent"]), n = t, (o = [{
                key: "componentDidMount",
                value: function () {
                    var e = this;
                    setTimeout(function () {
                        e.setState({
                            header: e.elements.homeHeader
                        })
                    }, 0), this.hide(), this.animateIn(), this.addKeyboardEvents()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function (e) {
                    var t = e.pathname;
                    t !== this.props.pathname && (-1 !== t.indexOf("/work/") ? this.gotoWork() : -1 !== t.indexOf("/about") ? this.gotoAbout() : "/" === t && this.gotoHome())
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.props.filter;
                    return i.a.createElement("div", {
                        className: "Home ".concat(tt.a.host)
                    }, i.a.createElement("section", {
                        ref: this.setRef,
                        "data-ref": "homeHeader"
                    }, i.a.createElement("ul", {
                        className: tt.a.filter,
                        ref: this.setRef,
                        "data-ref": "filter"
                    }, i.a.createElement("li", null, i.a.createElement("div", {
                        className: tt.a.filterIcon
                    }, i.a.createElement("span", null), i.a.createElement("span", null), i.a.createElement("span", null))), i.a.createElement("li", {
                        id: R.FILTER_ALL,
                        className: "".concat(e === R.FILTER_ALL ? tt.a.active : ""),
                        onClick: this.setFilter
                    }, i.a.createElement("div", {
                        className: "".concat(tt.a.block)
                    }), "All", i.a.createElement("span", {
                        className: tt.a.underline
                    })), i.a.createElement("li", {
                        id: R.FILTER_WEBSITES,
                        className: "".concat(e === R.FILTER_WEBSITES ? tt.a.active : ""),
                        onClick: this.setFilter
                    }, i.a.createElement("div", {
                        className: "".concat(tt.a.block)
                    }), "Websites", i.a.createElement("span", {
                        className: tt.a.underline
                    })), i.a.createElement("li", {
                        id: R.FILTER_PLAYGROUND,
                        className: "".concat(e === R.FILTER_PLAYGROUND ? tt.a.active : ""),
                        onClick: this.setFilter
                    }, i.a.createElement("div", {
                        className: "".concat(tt.a.block)
                    }), "Playground", i.a.createElement("span", {
                        className: tt.a.underline
                    })))), i.a.createElement(Qe, {
                        header: this.state.header
                    }))
                }
            }]) && ot(n.prototype, o), a && ot(n, a), t
        }();
        lt.mapStateToProps = function (e) {
            return {
                filter: e.general.filter,
                pathname: e.router.location.pathname,
                isMobile: e.platform.device.isMobile
            }
        }, lt.mapDispatchToProps = function (e) {
            return {
                setFilter: function (t) {
                    return e(function (e) {
                        return {
                            type: R.SET_FILTER,
                            filter: e
                        }
                    }(t))
                }
            }
        }, lt.propTypes = {
            filter: p.a.string.isRequired,
            setFilter: p.a.func.isRequired,
            pathname: p.a.string.isRequired,
            isMobile: p.a.bool.isRequired
        };
        var st = Object(l.c)(lt.mapStateToProps, lt.mapDispatchToProps)(lt),
            ct = n(178),
            ut = n.n(ct),
            pt = n(128);

        function ht(e) {
            return (ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ft(e) {
            return (ft = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function dt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function mt(e, t) {
            return (mt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var yt = function (e) {
                function t(e) {
                    var n, o, a;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), o = this, n = !(a = ft(t).call(this)) || "object" !== ht(a) && "function" != typeof a ? dt(o) : a, vt.call(dt(n)), n.spring = new Se(e.x, e.y, 0, !0), n.addChild(n.spring), n.point = new ke(e.x, e.y, 0), n.addChild(n.point), n
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && mt(e, t)
                }(t, q["Sprite"]), t
            }(),
            vt = function () {
                var e = this;
                this.mousePosition = new be(0, 0), this.mouseForce = -550, this.mouseSpring = new be(0, 0), this._update = function () {
                    var t = pe.getMouse();
                    e.mousePosition.x = t.x, e.mousePosition.y = t.y;
                    var n = Date.now(),
                        o = Math.min((n - e.point.time) / 1e3, 1 / 60);
                    e.point.time = n;
                    var a = e.mousePosition.clone().subtract(e.point._position),
                        r = a.angle(),
                        i = oe.map(a.x, 0, window.innerWidth, e.mouseForce, 0);
                    e.mouseSpring.x = i * Math.cos(r) * o || 0, e.mouseSpring.y = i * Math.sin(r) * o || 0, e.point._applyForce(e.mouseSpring), e.spring._connect(e.point), e.point._update()
                }, this._resize = function (t) {
                    e.spring._anchor.x = t.x, e.spring._anchor.y = t.y
                }
            },
            gt = yt,
            bt = n(97),
            _t = n.n(bt),
            wt = n(98),
            Et = n.n(wt),
            xt = n(99),
            Ot = n.n(xt),
            Pt = n(100),
            St = n.n(Pt);

        function Mt(e) {
            return (Mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Rt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), o.forEach(function (t) {
                    Ct(e, t, n[t])
                })
            }
            return e
        }

        function Ct(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Tt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function At(e, t) {
            return !t || "object" !== Mt(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Lt(e) {
            return (Lt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function kt(e, t) {
            return (kt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var It = ["componentWillAppear", "componentDidAppear", "componentWillEnter", "componentDidEnter", "componentWillLeave", "componentDidLeave"],
            Nt = function (e) {
                var t = Object(r.createFactory)(e),
                    n = function (e) {
                        function n() {
                            return function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, n), At(this, Lt(n).apply(this, arguments))
                        }
                        var o, a, i;
                        return function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && kt(e, t)
                        }(n, r["Component"]), o = n, (a = [{
                            key: "render",
                            value: function () {
                                var e = this;
                                return t(Rt({}, Rt({}, this.props, {
                                    ref: function (t) {
                                        e.ref = t
                                    }
                                }), this.state))
                            }
                        }]) && Tt(o.prototype, a), i && Tt(o, i), n
                    }();
                return It.forEach(function (e) {
                    n.prototype[e] = function (t) {
                        this.ref[e] ? this.ref[e](t) : t && t()
                    }
                }), n
            },
            Ft = n(44),
            jt = n.n(Ft);

        function zt(e) {
            return (zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Dt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Ht(e, t) {
            return !t || "object" !== zt(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Wt(e) {
            return (Wt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Bt(e, t) {
            return (Bt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Gt = function (e) {
            function t(e) {
                var n;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (n = Ht(this, Wt(t).call(this, e))).state = {}, n.elements = [], n.split = [], n.MAX_STRETCH = 900, n.MAX_DISPLACE = 50, n.initScrollbar = function () {
                    n.scrollbar = pt.a.init(n.elements.info, {
                        damping: .1,
                        thumbMinSize: 20,
                        renderByPixels: !0,
                        alwaysShowTracks: !1,
                        continuousScrolling: !1,
                        delegateTo: document
                    }), n.scrollbar.addListener(n.checkScroll)
                }, n.checkScroll = function (e) {
                    var t = e.limit.y - e.offset.y;
                    n.stretch = oe.map(t, e.limit.y, 0, n.MAX_STRETCH, 0)
                }, n.reset = function () {
                    F.f.set(n.elements.info, {
                        alpha: 0
                    }), n.parts = n.elements.host.querySelectorAll("section")
                }, n.animateIn = function () {
                    n.app.start(), n.app.ticker.add(n.update), n.firstSection.style.paddingTop = "".concat(n.h2.getBoundingClientRect().top + 2, "px"), F.f.staggerFrom(n.parts, 1, {
                        y: "+=80",
                        alpha: 0,
                        rotation: 0,
                        transformOrigin: "0 0",
                        delay: 1,
                        ease: F.c.easeOut,
                        onStart: function () {
                            F.f.set(n.elements.info, {
                                alpha: 1
                            })
                        }
                    }, .1), n.pointTR.spring._anchor.x = 0, n.pointTR.point._position.x = 0, n.pointBR.spring._anchor.x = 0, n.pointBR.point._position.x = 0, F.f.to(n.pointTR.spring._anchor, 1, {
                        x: n.tr.x,
                        ease: F.a.easeInOut,
                        delay: 0
                    }), F.f.to(n.pointBR.spring._anchor, 1.25, {
                        x: n.br.x,
                        ease: F.a.easeInOut,
                        delay: .1
                    })
                }, n.animateOut = function (e) {
                    F.f.to(n.pointTR.spring._anchor, .75, {
                        x: 0,
                        ease: F.a.easeInOut,
                        delay: .5,
                        onComplete: function () {
                            F.f.delayedCall(1, e)
                        }
                    }), F.f.to(n.pointBR.spring._anchor, .75, {
                        x: 0,
                        ease: F.a.easeInOut,
                        delay: .4
                    }), F.f.to(n.elements.info, .75, {
                        opacity: 0,
                        y: "+=40",
                        delay: 0,
                        ease: F.c.easeOut
                    })
                }, n.addPIXIApp = function () {
                    var e = n.state,
                        t = e.windowWidth,
                        o = e.windowHeight;
                    n.app = new q.Application(t, o, {
                        autoStart: !1,
                        backgroundColor: 0,
                        transparent: !0,
                        resolution: 2,
                        autoResize: !0
                    }), n.elements.host.appendChild(n.app.view), n.container = new q.Container, n.app.stage.addChild(n.container);
                    for (var a = [q.Texture.from(_t.a), q.Texture.from(Et.a), q.Texture.from(Ot.a), q.Texture.from(St.a)], r = 0, i = a.length; r < i; r += 1) n.app.renderer.plugins.prepare.upload(a[r].baseTexture)
                }, n.addLeftPanel = function () {
                    n.resizePanel(), n.panelMask = new q.Graphics, n.app.stage.addChild(n.panelMask), n.container.mask = n.panelMask, n.panel = new q.Graphics, n.container.addChild(n.panel), n.pointTR = new gt(n.tr), n.container.addChild(n.pointTR), n.pointBR = new gt(n.br), n.container.addChild(n.pointBR), n.face = new q.Sprite, n.container.addChild(n.face), n.faceBottom = q.Sprite.from(Ot.a), n.faceBottom.anchor.set(0, 1), n.face.addChild(n.faceBottom), n.faceMid = q.Sprite.from(Et.a), n.face.addChild(n.faceMid);
                    var e = q.Sprite.from(_t.a);
                    e.anchor.set(0, 1), n.face.addChild(e), n.faceMid.y = -n.faceBottom.height - n.faceMid.height, e.y = n.faceMid.y, n.face.cacheAsBitmap = !0, n.faceBounds = n.face.getBounds(), n.face.cacheAsBitmap = !1, n.stretch = 900, n.faceBoundsHeight = n.faceBounds.height, n.faceMidHeight = n.faceMid.height;
                    var t = q.Sprite.from(St.a);
                    t.texture.baseTexture.wrapMode = q.WRAP_MODES.REPEAT, n.displacementFilter = new q.filters.DisplacementFilter(t, 0), n.displacementFilter.scale.y = 0, n.displacementFilter.resolution = 1, n.noiseFilter = new q.filters.NoiseFilter(.1, .1), n.noiseFilter.blendMode = q.BLEND_MODES.ADD, n.panel.filters = [n.noiseFilter], n.face.filters = [n.displacementFilter], n.drawPanel(), n.resizeFace()
                }, n.drawPanel = function () {
                    n.panel.clear(), n.panel.beginFill(4868682, 1), n.panel.drawPolygon([n.tl, n.pointTR.point._position, n.pointBR.point._position, n.bl]), n.panel.endFill(), n.panelMask.clear(), n.panelMask.beginFill(4868682, 1), n.panelMask.drawPolygon([n.tl, n.pointTR.point._position, n.pointBR.point._position, n.bl]), n.panelMask.endFill()
                }, n.resizePanel = function () {
                    var e = n.props.breakpoint,
                        t = n.state,
                        o = t.windowWidth,
                        a = t.windowHeight,
                        r = .42,
                        i = .32;
                    "xxsmall" !== e && "xsmall" !== e && "small" !== e || (r = 1, i = 1), n.tl = new q.Point(0, 0), n.tr = new q.Point(o * r, 0), n.br = new q.Point(o * i, a), n.bl = new q.Point(0, a)
                }, n.resizeFace = function () {
                    var e = n.state.windowHeight,
                        t = oe.roundToPlaces(oe.map(Math.round(e - .15 * e), 0, n.faceBoundsHeight, 0, 1), 2);
                    n.face.scale.y = t, n.face.scale.x = n.face.scale.y, n.face.y = e + 2
                }, n.onResize = function (e, t) {
                    n.windowWidth = e, n.windowHeight = t, n.resizePanel(), n.resizeFace(), n.pointTR._resize(n.tr), n.pointBR._resize(n.br), n.firstSection.style.paddingTop = "".concat(n.h2.getBoundingClientRect().top + 2, "px"), n.app.renderer.resize(n.windowWidth, n.windowHeight)
                }, n.update = function () {
                    n.pointTR._update(), n.pointBR._update(), n.drawPanel(), n.displacementFilter.scale.x = oe.map(n.stretch, 0, n.MAX_STRETCH, 0, n.MAX_DISPLACE), n.faceMid.height = n.stretch + n.faceMidHeight, n.faceBottom.y = n.stretch, n.noiseFilter.seed = Math.random()
                }, n.setRef = function (e) {
                    e && (e.dataset ? n.elements[e.dataset.ref] = e : n.elements[e.props["data-ref"]] = e)
                }, n.obfuscate = function () {
                    for (var e, t = "fu@029os2yos8yZfmuFy.ous", n = "eEqPXxobcGtJAlQ1fL6zUwBMugHSriy72ksaRZ5KjYvWnOh3TFVN80mCdpD94I", o = t.length, a = "", r = 0; r < t.length; r++) - 1 === n.indexOf(t.charAt(r)) ? a += e = t.charAt(r) : (e = (n.indexOf(t.charAt(r)) - o + n.length) % n.length, a += n.charAt(e));
                    return a
                };
                var o = [];
                e.works.forEach(function (e) {
                    e.awards && (o = o.concat(e.awards))
                });
                var a = ut()(o, function (e) {
                    return e.type
                });
                Object.keys(a).sort(function (e, t) {
                    return a[t].length - a[e].length
                }), Object.keys(a).map(function (e) {
                    var t = ut()(a[e], function (e) {
                        return e.label
                    });
                    return a[e] = t, e
                });
                var r = [];
                return Object.keys(a).forEach(function (e) {
                    var t = Object.keys(a[e]),
                        n = 0;
                    n = t.length > 1 ? t.reduce(function (t, n) {
                        return ("string" == typeof t ? a[e][t].length : t || 0) + ("string" == typeof n ? a[e][n].length : 0)
                    }) : a[e][t[0]].length;
                    var o = t.map(function (t) {
                        return {
                            count: a[e][t].length,
                            name: t
                        }
                    });
                    o.sort(function (e, t) {
                        return t.count - e.count
                    }), r.push({
                        count: n,
                        name: e,
                        awards: o
                    })
                }), r.sort(function (e, t) {
                    return t.count - e.count
                }), r.pop(), r.push({
                    count: 0,
                    name: "Nobel Prize",
                    awards: []
                }), n.state = {
                    awards: r
                }, n
            }
            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Bt(e, t)
            }(t, r["PureComponent"]), n = t, a = [{
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                    var n = e.windowWidth,
                        o = e.windowHeight;
                    return n !== t.windowWidth || o !== t.windowHeight ? {
                        windowWidth: n,
                        windowHeight: o
                    } : null
                }
            }], (o = [{
                key: "componentDidMount",
                value: function () {
                    this.addPIXIApp(), this.addLeftPanel(), this.initScrollbar(), this.reset(), this.firstSection = this.elements.info.querySelector("section:first-child"), this.h2 = document.querySelector(".Header h2"), F.f.delayedCall(1.5, this.animateIn)
                }
            }, {
                key: "componentDidUpdate",
                value: function (e) {
                    var t = e.windowWidth,
                        n = e.windowHeight,
                        o = this.props,
                        a = o.windowWidth,
                        r = o.windowHeight;
                    t === a && n === r || this.onResize(a, r)
                }
            }, {
                key: "componentWillLeave",
                value: function (e) {
                    this.animateOut(e)
                }
            }, {
                key: "componentWillUnmount",
                value: function () {
                    this.scrollbar.destroy(), this.scrollbar = null, this.app.ticker.remove(this.update), this.container.destroy(), this.app.destroy(!0), this.app = null, this.container = null
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.state.awards,
                        t = this.obfuscate(),
                        n = Math.round(e.length / 2) - 2,
                        o = [],
                        a = 0;
                    return o[a] = [], e.forEach(function (e, t) {
                        t === n && (o[++a] = []);
                        var r = e.awards.map(function (e) {
                            return i.a.createElement("li", {
                                key: e.name
                            }, "".concat(e.count, "x ").concat(e.name))
                        });
                        o[a].push(i.a.createElement("li", {
                            key: e.name
                        }, "".concat(e.count, "x ").concat(e.name), i.a.createElement("ul", null, r)))
                    }), i.a.createElement("div", {
                        className: "About ".concat(jt.a.host),
                        ref: this.setRef,
                        "data-ref": "host"
                    }, i.a.createElement("div", {
                        className: jt.a.info,
                        ref: this.setRef,
                        "data-ref": "info"
                    }, i.a.createElement("section", null, i.a.createElement("h2", null, "Short Bio"), i.a.createElement("div", {
                        className: jt.a.divider
                    }, i.a.createElement("span", null), i.a.createElement("span", null)), i.a.createElement("p", null, "My name is Fábio Azevedo and I am currently living and working remotely from Porto, Portugal. I am interested in all sorts of visual development and have been involved in digital media since 2005.", i.a.createElement("br", null), "In 2018, along with", " ", i.a.createElement("a", {
                        href: "http://akaportugal.com",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Pedro Portugal"), ", I created the project", " ", i.a.createElement("a", {
                        href: "https://www.yumans.com",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Yumans"), "."), i.a.createElement("p", null, "Throughout this years I had the pleasure to collaborate with brands such as:"), i.a.createElement("div", {
                        className: jt.a.p
                    }, i.a.createElement("ul", {
                        className: jt.a.list
                    }, i.a.createElement("li", null, "AirBnB"), i.a.createElement("li", null, "Arcade Fire"), i.a.createElement("li", null, "Burberry"), i.a.createElement("li", null, "Chevrolet"), i.a.createElement("li", null, "Disney"), i.a.createElement("li", null, "Focus Features"), i.a.createElement("li", null, "Google"), i.a.createElement("li", null, "Nike"), i.a.createElement("li", null, "Lufthansa"), i.a.createElement("li", null, "SyFy"), i.a.createElement("li", null, "Three"), i.a.createElement("li", null, "Twitter"), i.a.createElement("li", null, "Ubisoft")))), i.a.createElement("section", null, i.a.createElement("h2", null, "Technical stack"), i.a.createElement("div", {
                        className: jt.a.skills
                    }, i.a.createElement("ul", null, i.a.createElement("li", null, "Languages", i.a.createElement("ul", null, i.a.createElement("li", null, "HTML5"), i.a.createElement("li", null, "Javascript"), i.a.createElement("li", null, "CSS3"), i.a.createElement("li", null, "WebGL"), i.a.createElement("li", null, "GLSL"), i.a.createElement("li", null, "PHP"), i.a.createElement("li", null, "SQL"), i.a.createElement("li", null, i.a.createElement("del", null, "Objective-C"))))), i.a.createElement("ul", null, i.a.createElement("li", null, "Web APIs", i.a.createElement("ul", null, i.a.createElement("li", null, "ServiceWorker (PWA)"), i.a.createElement("li", null, "WebAudio"), i.a.createElement("li", null, "WebRTC"), i.a.createElement("li", null, "Media Capture"), i.a.createElement("li", null, "WebWorker"), i.a.createElement("li", null, "WebSpeech")))), i.a.createElement("ul", null, i.a.createElement("li", null, "Frameworks", i.a.createElement("ul", null, i.a.createElement("li", null, "React"), i.a.createElement("li", null, "Redux"), i.a.createElement("li", null, "Vue.js"), i.a.createElement("li", null, "Vuex"), i.a.createElement("li", null, "GSAP"), i.a.createElement("li", null, "D3.js"), i.a.createElement("li", null, "PIXI.js"), i.a.createElement("li", null, "Three.js"), i.a.createElement("li", null, i.a.createElement("del", null, "Angular"))))), i.a.createElement("ul", null, i.a.createElement("li", null, "Physical", i.a.createElement("ul", null, i.a.createElement("li", null, "Leap Motion"), i.a.createElement("li", null, "Augmented Reality"), i.a.createElement("li", null, "Virtual Reality")))))), i.a.createElement("section", null, i.a.createElement("h2", null, "Also on"), i.a.createElement("ul", {
                        className: jt.a.list
                    }, i.a.createElement("li", null, i.a.createElement("a", {
                        href: "mailto:".concat(t),
                        rel: "noopener noreferrer"
                    }, "E-mail")), i.a.createElement("li", null, i.a.createElement("a", {
                        href: "https://wa.me/351912044983",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Whatsapp")), i.a.createElement("li", null, i.a.createElement("a", {
                        href: "https://twitter.com/naso",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Twitter")), i.a.createElement("li", null, i.a.createElement("a", {
                        href: "https://github.com/naso/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Github")), i.a.createElement("li", null, i.a.createElement("a", {
                        href: "https://www.linkedin.com/in/fabioaraujoazevedo/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Linkedin")), i.a.createElement("li", null, i.a.createElement("a", {
                        href: "https://www.behance.net/icantcontrolmyego",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Behance")), i.a.createElement("li", null, i.a.createElement("a", {
                        href: "https://www.instagram.com/icantcontrolmyego/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Instagram")), i.a.createElement("li", null, i.a.createElement("a", {
                        href: "https://savee.it/icantcontrolmyego/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Savee.it")))), i.a.createElement("section", {
                        className: jt.a.awards
                    }, i.a.createElement("div", {
                        className: jt.a.awards
                    }, o.map(function (e, t) {
                        var n, o = "awards".concat(t);
                        return n = e, i.a.createElement("ul", {
                            key: o
                        }, n)
                    }))), i.a.createElement("section", {
                        className: jt.a.bottom
                    }, i.a.createElement("p", null, "Would be glad to hear from you. Get in touch at", " ", i.a.createElement("a", {
                        href: "mailto:".concat(t),
                        rel: "noopener noreferrer"
                    }, i.a.createElement("span", null, "me", i.a.createElement("span", {
                        id: "glitter"
                    }, "nice"), "@", i.a.createElement("span", {
                        id: "glitter"
                    }, "beautiful"), "icant", i.a.createElement("span", {
                        id: "glitter"
                    }, "beautiful"), "controlmyego", i.a.createElement("span", {
                        id: "glitter"
                    }, "beautiful"), ".", i.a.createElement("span", {
                        id: "glitter"
                    }, "beautiful"), "n", i.a.createElement("span", {
                        id: "glitter"
                    }, "beautiful"), "et")), ". 👊🏽"))))
                }
            }]) && Dt(n.prototype, o), a && Dt(n, a), t
        }();
        Gt.mapStateToProps = function (e) {
            return {
                works: e.general.works,
                windowWidth: e.platform.windowWidth,
                windowHeight: e.platform.windowHeight,
                breakpoint: e.platform.media.breakpoint
            }
        }, Gt.propTypes = {
            works: p.a.array.isRequired,
            windowWidth: p.a.number.isRequired,
            windowHeight: p.a.number.isRequired,
            breakpoint: p.a.string.isRequired
        };
        var Ut = Nt(Object(l.c)(Gt.mapStateToProps, null, null, {
                forwardRef: !0
            })(Gt)),
            Vt = n(295),
            Yt = n.n(Vt),
            Xt = n(296),
            qt = n.n(Xt),
            Qt = n(297),
            Zt = n.n(Qt),
            Kt = n(298),
            Jt = n.n(Kt),
            $t = n(81),
            en = n.n($t);

        function tn(e) {
            return (tn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function nn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function on(e, t) {
            return !t || "object" !== tn(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function an(e) {
            return (an = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function rn(e, t) {
            return (rn = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ln = function (e) {
            function t() {
                var e, n, o;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l];
                return on(o, (n = o = on(this, (e = an(t)).call.apply(e, [this].concat(r))), o.setRef = function (e) {
                    e && (e.dataset ? o.elements[e.dataset.ref] = e : o.elements[e.props["data-ref"]] = e)
                }, o.renderFwa = function () {
                    return i.a.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 300 89"
                    }, i.a.createElement("path", {
                        d: "M280.2 38.3h-17.9V19.8c0-2.5-1.4-4.6-3.4-5.7-.9-.5-2-.8-3.1-.8h-60.1c-1.6 0-3 .6-4.2 1.5-.8.5-1.6 1.3-2.1 2.2L169 54.8l-18.4-36c-.3-1.4-1.1-2.7-2.3-3.6-1.9-1.7-4.7-2.2-7.2-1-2.1 1-3.4 3-3.6 5.1l-19.2 35.6L99 17.1c-.7-1.4-1.9-2.5-3.2-3.1-.9-.4-1.9-.7-2.9-.7H44.3c-1.1 0-2.2.3-3.1.8-2 1.1-3.4 3.2-3.4 5.7v18.5h-18c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h17.9v17.9c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5V51.3h30.9c3.6 0 6.5-2.9 6.5-6.5s-2.9-6.5-6.5-6.5H50.8v-12h38.3L112 71.2l.6 1.2c1.7 2.9 5.4 4.1 8.4 2.6 1.9-.9 3.2-2.7 3.6-4.6l19.4-36 18.8 36.8.6 1.2c1.7 2.9 5.4 4.1 8.4 2.6 1.9-.9 3.2-2.7 3.6-4.6l23.8-44h50.1v12h-43.4c-3.5 0-6.3 2.8-6.5 6.2v24.3c0 3.6 2.9 6.5 6.5 6.5h47.7c.7.2 1.4 0 2.2 0 3.6 0 6.5-2.9 6.5-6.5V51.3h17.9c3.6 0 6.5-2.9 6.5-6.5s-2.9-6.5-6.5-6.5zm-31 24H212v-11h37.2v11z",
                        fill: "#fff"
                    }), i.a.createElement("path", {
                        d: "M255.7 13.3c1.1 0 2.2.3 3.1.8 2 1.1 3.4 3.2 3.4 5.7v18.5h17.9c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5h-17.9v17.5c0 3.6-2.9 6.5-6.5 6.5h-49.9c-3.6 0-6.5-2.9-6.5-6.5V44.5c.2-3.5 3-6.2 6.5-6.2h43.4v-12h-50.1l-23.8 44c-.4 1.9-1.6 3.7-3.6 4.6-.9.4-1.9.6-2.8.6-2.3 0-4.4-1.2-5.6-3.2l-.6-1.2L144 34.4l-19 36c-.8 1.9-2 3.6-4 4.6-.9.4-1.9.6-2.8.6-2.3 0-4.4-1.2-5.6-3.2l-.6-1.2-22.9-44.9H50.8v12h30.9c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5H50.8v17.9c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5V51.3h-18c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h17.9V19.8c0-2.5 1.4-4.6 3.4-5.7.9-.5 2-.8 3.1-.8h48.6c1.1 0 2.1.3 2.9.7 1.4.6 2.5 1.7 3.2 3.1l19.2 37.6 19.3-36c1-2 1.5-3.7 3.6-4.7.9-.4 1.9-.6 2.8-.6 1.6 0 3.2.6 4.4 1.7 1.2.9 1.7 1.6 2.6 3.1L169 54.8 189.3 17c.5-.9 1.3-1.7 2.1-2.2 1.1-.9 2.6-1.5 4.2-1.5h60.1m-43.7 49h37.2v-11H212v11M255.7 0h-60.1c-4.4 0-8.6 1.4-12.1 4.1-2.4 1.7-4.3 3.9-5.8 6.4l-.1.1-.1.1-8.3 15.4s-9.7-18.9-12.5-21.2c-3.6-3.1-8.2-4.8-13-4.8-3 0-5.9.7-8.6 2-5.2 2.5-8 7-10.5 12.4l-6.3 11.6-7.6-14.9c-2-4-5.3-7.3-9.4-9.2-2.7-1.3-5.7-2-8.6-2H44.3c-3.3 0-6.6.8-9.5 2.4-6.4 3.5-10.4 10.1-10.4 17.4V25h-4.6C8.9 25 0 33.9 0 44.8s8.9 19.8 19.8 19.8h4.6v4.6c0 10.9 8.9 19.8 19.8 19.8S64 80.1 64 69.2v-4.6h17.6c3.8 0 7.4-1.1 10.4-2.9l7.8 15.2c.4.9.8 1.7 1.4 2.5 3.6 5.9 10 9.5 17 9.5 3 0 5.9-.7 8.6-2 4.8-2.3 9-6.2 11.2-11.3l5.6-12.6 7 13.8c.4.9.8 1.7 1.3 2.5 3.6 5.9 10 9.5 17 9.5 3 0 5.9-.7 8.6-2 4.5-2.2 8.1-6 9.9-10.7 3 7.2 10.1 12.3 18.4 12.3h49.9c10.9 0 19.8-8.5 19.8-19.5v-4.6h4.6c10.9 0 19.8-8.9 19.8-19.8s-8.9-19.8-19.8-19.8h-4.6v-5.2c0-7.3-4-13.9-10.4-17.4C262.3.8 259 0 255.7 0z"
                    }))
                }, o.renderAwwwards = function () {
                    return i.a.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 480 57"
                    }, i.a.createElement("path", {
                        d: "M293 41.9h-19.5L268.8 56h-10.4L278 .9h10.6L308.2 56h-10.4L293 41.9zm-9.8-31.4s-1.3 5.4-2.3 8.5L276 33.8h14.6l-5-14.8c-1-3.1-2.2-8.5-2.2-8.5h-.2zM323.1.9H341c6 0 8.8.5 11.2 1.6 5.6 2.5 9.1 7.8 9.1 15.1 0 6.6-3.5 12.7-9.4 15.1v.2s.8.8 1.9 2.7l11.4 20.6H354l-11-20.7h-9.7v20.6h-10.1L323.1.9zm19.2 25.9c5.4 0 8.8-3.2 8.8-8.7 0-5.3-2.3-8.5-10.2-8.5h-7.7v17.2h9.1zM382.5.9h19c17.2 0 28.4 10.1 28.4 27.5S418.7 56 401.5 56h-19V.9zM401 47.4c11.3 0 18.5-6.6 18.5-19 0-12.3-7.4-18.9-18.5-18.9h-8.3v37.9h8.3zM448 41.9s6 5.8 13.9 5.8c4.2 0 8.1-2.2 8.1-6.7 0-9.9-26.3-8.2-26.3-25.1 0-9.2 8-16 18.6-16 11 0 16.6 5.9 16.6 5.9l-4.4 8.2s-5.3-4.8-12.3-4.8c-4.7 0-8.4 2.7-8.4 6.6 0 9.8 26.2 7.4 26.2 25 0 8.8-6.7 16.1-18.3 16.1-12.4 0-19.2-7.5-19.2-7.5l5.5-7.5zM179 .9L169.8 39c-.7 3.1-.9 5.8-.9 5.8h-.2c-.1 0-.2-2.6-1-5.8L157.8.9H149L139 39c-.9 3.2-.9 5.8-1 5.8h-.2s-.2-2.7-.9-5.8l-6.6-28.6-4.9 20.8 6.2 24.7h11.7l8.5-32.6c.9-3.6 1.4-7.2 1.4-7.2h.1s.5 3.6 1.4 7.2l8.6 32.6H175L189.4.8 179 .9zM241.8.9L232.6 39c-.7 3.1-.9 5.8-.9 5.8h-.2c-.1 0-.1-2.6-1-5.8L220.6.9h-8.8l-10 38.1c-.9 3.2-.9 5.8-1 5.8h-.2s-.2-2.7-.9-5.8l-6.6-28.7-4.9 20.8 6.3 24.9h11.7l8.5-32.6c.9-3.6 1.4-7.2 1.4-7.2h.2s.5 3.6 1.4 7.2l8.5 32.6h11.7L252.2.9h-10.4zM34.6 41.9H15.1L10.4 56H0L19.6.9h10.6L49.8 56H39.3l-4.7-14.1zm-9.8-31.4s-1.3 5.4-2.4 8.5l-4.9 14.7h14.6L27.2 19c-1-3.1-2.2-8.5-2.2-8.5h-.2zM104.9 39.1c.9 3.2.9 5.8 1 5.8h.2s.2-2.7.9-5.8L116.2 1h10.4l-14.3 55.1h-11.7l-8.5-32.6c-.9-3.6-1.4-7.2-1.4-7.2h-.2s-.5 3.6-1.4 7.2l-8.5 32.6H68.9L54.9.9h10.4L74.1 39c.7 3.1.9 5.8.9 5.8h.2c.1 0 .1-2.6 1-5.8L86.2.9H95l9.9 38.2z"
                    }))
                }, o.renderBafta = function () {
                    return i.a.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 60 21"
                    }, i.a.createElement("path", {
                        d: "M3.8 19.2c-.2-.3-.6-.5-.7-1.7-.2-1.1-.5-2.4-1.4-4.4-.5-1.1-.5-2.9 0-3.6.4-.4-.2 1 .7 2 .5.6.8 1.2 1.1 2.5.2.9.1 1.9.4 3.5.2 1.3.6 1.6.8 1.9.1.4-.6.2-.9-.2M1 11.1s-.5-.8-.4-1.7c0-1.1.3-1.4.5-1.9.1-.5-.3-1.4-.3-2 0-.7.2-1.1.6-1.5.3-.3.6-.2.3.1-.2.2-.4.5-.5.9-.2.4-.1.9.1 1.6.2.7.1.9-.1 1.3-.2.5-.3.7-.4 1.2.2-.6.6-.9.7-1.4.2-.8-.4-1.8 0-2.7.1-.3.4-.4.5-.4.1 0 0 .4-.1.5-.2.4.1 1.5.1 2 .1.6-.2 1-.6 1.4-.8 1.1-.5 2.3-.4 2.6m.3-8.6c.1-.1.2-.2.3.1 0 .3.1.5 0 .6-.3.3-.7.7-1 1.7-.2-.5 0-1.8.7-2.4M3.6 6c.5-.5.3-.9.9-1 .5-.1.8.3.9 1 0 .3 0 1-.2 1.1-.5.1-1 .2-1.4.3-.9 0-1-.7-.2-1.4m1.5-2.2C4.6 3.3 5 2 6.3 2.7c-1.1 0-1.2.6-1.2 1.1m2.6 3.9c.2.2.3.5.4.7v.1c-.3-.3-.5-.5-.8-.6-.5-.2-1.1 0-1.6.1-.6.3-.7.2-.5.1 1.4-.9 2.2-.7 2.5-.4m.2 1.4c-.1.2-.4.3-.9.5s-1 .1-1.4-.1c-.3-.1-.4-.2-.7-.3-.2-.2-.1-.4 0-.5.1-.1.8-.5 1.5-.6.5-.1.9.1 1.1.3.2.1.6.4.4.7m-1.7 1.3c-.7.2-1.1-.1-1.4-.5-.2-.2-.4-.8-.2-.8.1.3.8.8 1.4.9.2 0 .4.1.6 0 .1 0 .2.3-.4.4m1.6 5.4c.1-.2.3-.2.5-.2h.5c.2 0 .2.1.1.3-.2.2-.2.3-.4.3-.4 0-.9-.2-.7-.4m7-7.3c-.1-.3-.6-.5-.7-.3.5.2.4.5.1 1.2-.1.3-.5.4-.7.1-.1-.2 0-.4-.1-.7-.1-.1-.1-.1-.1-.3 0-.3.7-.3.7-.4 0-.1-.8-.1-1.6.4l.1-.2c.3-.2.6-.4.9-.5.2-.1.1-.1.1-.2.1-.1 1-.1 1.3.3.2.4 0 .6 0 .6m.9-5.8c.4.6.3 1.6.3 1.8 0 .2 0 .5-.1.7 0-.3 0-.6-.3-.8-.3-.2-.4-.4-.3-1.1.1.4.2.7.5.7-.4-.6.1-1.6-1-2.5.5 1 .1 1.8-.3 2.1-.7.6-1.4.1-1.7 1.1.7-.5.8.1 1.9-.8.1.2.3.4.4.8.2.6.1 1.6.1 2 0 .6-.8.2-1.6 0-.5-.1-1.1-.2-1.6-.2s-.9.2-.9.7c0 .4.2 1.2.2 1.6l.5 3c.1-.8-.1-1.7 0-1.8.1-.2.3-.1.5 0 .4.2.9.4 1.1.2.1-.1-.2-.2-.3-.3-.5-.3-.5-.6-.1-.3.4.2 1 .4 1.3-.2.1-.1.1-.1.1 0 0 .2 0 .2-.1.3-.1.1-.1.2.1.1s.2-.3.3-.3c.1 0 .1.1.1.2.1.2.1 1 .1 1.6 0 .3-.1.8-.3 1.5-.2.8-.7 1.6-.9 2.6-.2 1-.6 2.4-.9 3.2-.6 1.6-1.7 1.4-1.8 1.4-1.6-.1-1.7.5-2.6-.1-.3-.2-.6-.6-.6-1.6 0-.5-.5-.7-.4-1 .2-.5 1.5 0 2.1.1.6.1 1.5 0 1.9-.1.4-.1.4-.3.5-.4.2-.4-.6-.3-1-.3s-.8.1-1.2 0c-.6-.2-.2-1.1.2-1 .6 0 .9.1 1.4 0 .3 0 .6 0 .8.2.2.1.3.3.4.4.1.1.2.2.4 0 .2-.3.2-.8.2-1 0-.2-.1-.2-.2-.1-.1.2-.3.3-.5.3-.4 0-.6-.3-1-.3 0 0-.1 0-.1.1-.1.1-.2.2-.5.2-.4 0-.5-.3-1.1-.2-.8.1-1 .3-1.5.3-.4.1-.6 0-.6-.2s-.3-.4-.8-.1c-.3.3-.6.6-.4 1.3.1.5.1.9-.4.8-.5-.1-.7-.9-.7-1.6 0-.8-.8-2.4-1-2.9-.1-.5-.1-1.8 1.1-1.4.9.3 1-.1 1.6.3.6.5.9 1 .7 1.6-.1.3-.1.6.3.8.3.1.7-.1 1.2.2.5.3.3.4.7.7.2.1.5.2.7.1.3 0 .5-.3.7-.8.1-.4.3-.4.5-.6.4-.3.2-.7.1-.8-.3.8-1 .6-1.2.2-.3-.9-.3-2.7-.7-4.3.2 2.2-.1 2.5.1 4.1 0 .1.2.6-.2.5-.2-.1-.6-.1-.9 0-.7.2-1-.4-.4-1.1.2-.5 0-1.1-.3-1.6-.1-.7.1-1.4.7-2 .4-.4.3-1 .4-1.2.2-.3.5 0 .7.5 0-.6-.1-1.2-.5-1.3-.4-.2-.6-.2-1.2-.2-.5 0-1.6.3-2 .4-.2 0-.3-.2-.2-.4.6-1.6 0-1.9 1.5-3 .8-.6 1.6-.8 2-.8.8 0 .9 1 2.4.5.8-.2 1.3-.4 1.3 0 0 .1-.2.3-.2.6.1-.1.3-.2.5-.5.3-.3.1-.8-.1-.9-.5-.2-.6 0-1.1.3-.5.3-1.5.7-2-.9.2.2.4.6 1.2.7.6.1 1-.5 1-.5s-.9.1-1.2-.3c-.2-.3-.1-.3.4-.3s.7-.4.7-.4-.6.3-1.3-.3c-.1-.1 0-.2.1-.2.3.1 1.1.2 2-.2-1.3 0-1.7-.1-2-.2-.5-.1-1.2-.2-1.4-.2 0 .8-.6 3.8-3.6 2.4 2 .5 2.9-1.1 3.1-2.1 0-.3-.3-.3-.5.1 0 .6-.2 1-.5 1.3.2-.7 0-1.1 0-1.2 0 0-.1-.1-.1 0-.2.3-.6.7-1 .7-.6.1-.8-.1-1.2-.1-.8-.1-1.5 0-1.6.9.7-1.2 2.1-.4 2.7-.3.5 0 .8-.2.9-.3-.5 1.1-1.8.5-1.8.5h-.7c-1 .3-1.1 1.3-1.1 1.3s-.3-.4-.1-1C4 1.6 4.4.9 5.1.7 6 .4 6.3.8 7 .8c.8-.2.7-.8 2.1-.8-.3 0-.8 0-1.5.1-.9.2-3.1-.3-4.2.5-1.2.9-.6 2.7.2 3.1-.2-.2-1.7-3 1.2-3.2-.5.1-.9.3-1.1.7-.3.7.1 2.4 1.7 3.1-.5.7-1.3-.2-1.5-.3-.8.2-1.6-.9-1.5-1.8-.3.9.1 1.4.5 1.7-.7.1-2-2 .4-3.4C2.1.8-.2 2.4 0 5.7.1 7 .3 7.5.2 8.2c0 .7-.2 1.5 0 2.4.2.8.3 1.1.4 1.3.1.2.3.5.4 1.4.1.5.9 4.5 1.9 6.1.6 1 1.2 1.1 2.7 1.3 1.5.2 3.8.2 5.2-.1.2 0 1.4-.2 2.1-1.2.5-.9.9-2.6 1.3-3.8.2-.5.5-1.4.7-2.2.3-1.1.3-1.4.3-2.5 0 0 0-.9-.1-1.2 0-.3 0-1 .1-1.4.1-.4.4-.7.4-1.2.6-.4.5-2 .5-2.6.4-1.4-.3-1.8-.4-1.8m-1.8-1.1c-.1.1-.5-.1-.8.3.9-.3 1.3.5 1.1 1.1 0 .1 0 .1.1 0s.3-.5.4-.8c0-.4-.3-1-.8-1.2-.3-.1-.6-.1-.9.1.7 0 1 .4.9.5"
                    }), i.a.createElement("path", {
                        className: en.a.st0,
                        d: "M0 0h16.3v21H0z"
                    }), i.a.createElement("path", {
                        d: "M55.9 16.5v-.7c-.3 0-.6-.1-1-.1-.8 0-1.5.4-1.5 1.3 0 1.6 2.2.9 2.2 2.2 0 .6-.4.8-.9.8-.4 0-.9-.2-1.1-.6h-.1v.7c.4.1.8.2 1.2.2.8 0 1.4-.4 1.4-1.2 0-1.5-2.2-.9-2.2-2.2 0-.6.5-.8 1-.8.4 0 .8.2 1 .6zm-3.4-.7l-.2 1.5h.2l.4-1.5h-.4zm-4.9 3.8c0 .3-.1.4-.4.5v.1h1.2v-.1c-.4-.1-.4-.2-.4-.8v-2.4l3.2 3.3h.1v-3.8c0-.3.1-.4.4-.5v-.1h-1.1v.1c.4.1.5.2.5 1.3v2.1l-2.7-2.8c-.2-.2-.4-.5-.6-.7h-.1v3.8zm-1.3-3.9h-.1c0 .1-.1.1-.2.1h-2.5v.2c.3 0 .4.1.4 2v1.7c0 .3-.1.4-.4.4v.1h2.9l.1-.7h-.1c-.2.3-.4.5-.8.5h-1.3v-1.9h1.1c.4 0 .5.1.5.3h.1V18v-.4h-.1c-.1.2-.2.3-.5.3h-1.1v-.6-1.2h1c.5 0 .8.2.8.4h.1v-.8zm-6.5 4c0 .2-.1.4-.3.4v.1h1.1v-.1c-.2 0-.3-.2-.3-.4v-1.4c.3 0 .5.2.6.4L42 20h-.1v.1h1V20c-.2-.1-.3-.1-.4-.3l-1.4-1.6c.5-.1 1.1-.6 1.1-1.1 0-1-.8-1.3-1.7-1.3h-1.2v.1c.3 0 .3.2.3.5V19.7zm.5-2.6v-.9c0-.2.1-.2.3-.2.7 0 1.1.5 1.1 1.1 0 .6-.5 1-1.1 1h-.3v-1zm-4.9.7v-1.3c0-.5.1-.5.7-.5 1.2 0 2.1.8 2.1 2.1 0 1.4-.8 1.9-2.1 1.9-.5 0-.6-.1-.6-.4v-1.8zm-.5 1.9c0 .2-.1.4-.3.4v.1h1.8c1.3 0 2.4-.7 2.4-2 0-1.4-1.1-2.3-2.4-2.3h-1.8v.1c.2 0 .3.2.3.4v3.3zm-3.5 0c0 .2-.1.4-.3.4v.1h2.2c.3 0 .5 0 .6.1l.2-.8H34c-.2.3-.4.5-.8.5H32v-1.8-1.8c0-.2.1-.4.3-.4v-.1h-1.2v.1c.3 0 .4.1.4 2.2v1.5zM30 15.8h-1.2v.1c.2 0 .3.2.3.4v3.4c0 .2-.1.4-.3.4v.1h1v-.1c-.2 0-.3-.2-.3-.4v-3.4c0-.2.1-.4.3-.4v-.1zM27 18v1.7c0 .2-.1.4-.2.4v.1h1v-.1c-.2 0-.2-.2-.2-.4v-2.3c0-1.4 0-1.5.3-1.5v-.1h-1.1v.1c.2 0 .3.2.3.4v1.5h-2.9v-1.5c0-.2.1-.4.3-.4v-.1h-1.1v.1c.3 0 .3 0 .3 1.5v2.3c0 .2-.1.4-.2.4v.1h1v-.1c-.2 0-.2-.2-.2-.4V18H27zm-4.2 1.5c-.4.4-.8.6-1.6.6-1 0-1.9-1.1-1.9-2.1 0-1.3.8-2.1 1.9-2.1.5 0 1.1.2 1.3.7h.1l-.1-.7h-.1c-.1 0-.7-.2-1.3-.2-1.5 0-2.5.9-2.5 2.3 0 1.3 1 2.3 2.5 2.3.4 0 .9-.1 1.3-.2l.4-.6z"
                    }), i.a.createElement("path", {
                        className: en.a.st1,
                        d: "M19.8 4.2h.2c.6 0 1-.2 1-.9s-.4-1-.9-1c-.2 0-.3.1-.3.3v1.6zm0 1.9c0 .2.1.3.3.3.7 0 1-.4 1-1 0-.7-.4-1-1-1h-.3v1.7zM19.3 3c0-.5-.1-.6-.3-.6v-.1h1.2c.6 0 1.3.3 1.3 1.1 0 .5-.4.9-.9 1 .6.1 1 .6 1 1.1 0 1-.7 1.1-1.4 1.1H19v-.1c.2 0 .3-.2.3-.4V3zM23.3 5.1h1.6l-.7-2-.9 2zm-.1.2l-.2.6v.3c0 .1.1.2.3.2v.1h-1c.3-.1.4-.2.5-.5l1.5-3.8h.1L25.7 6c.1.3.2.4.5.5v.1H25v-.1c.1-.1.2-.1.2-.2s0-.2-.1-.3l-.2-.6h-1.7zM27.6 4.2h.8c.3 0 .5-.1.5-.3h.1v.8c-.1-.3-.2-.3-.5-.3h-.8V6c0 .2.1.4.3.4v.1h-1.1c.2 0 .3-.2.3-.4V4.2c0-1-.1-1.5-.1-1.7 0-.1-.1-.1-.3-.1v-.1H29.2V3h-.1c0-.2-.1-.4-.5-.4h-1v1.6zM30.7 2.5c-.4 0-.5.1-.6.4H30v-.8c.1 0 .2.1.4.1h3c.1 0 .3 0 .4-.1v.8h-.1c-.1-.3-.2-.4-.6-.4h-.9V6c0 .2.1.3.4.4v.1h-1.4c.3-.1.4-.1.4-.4V2.6h-.9zM34.5 5.1h1.6l-.7-2-.9 2zm-.1.2l-.2.5v.3c0 .1.1.2.3.2v.1h-1v.1c.3-.1.4-.2.5-.5l1.5-3.8h.1L36.9 6c.1.2.1.3.4.5v.1h-1.2v-.1c.1-.1.2-.1.2-.2s0-.2-.1-.3l-.2-.6h-1.6zM42.2 12.9c0 .2-.1.4-.3.4v.1H43v-.1c-.2 0-.3-.2-.3-.4v-1.4c.3 0 .5.2.6.4l1.1 1.3v.2h1v-.1c-.2 0-.3-.1-.4-.3l-1.4-1.6c.5-.1 1.1-.6 1.1-1.1 0-1-.8-1.3-1.7-1.3h-1.2v.1c.3 0 .3.2.3.5v3.3zm.5-2.6v-.9c0-.2.1-.2.3-.2.7 0 1.1.5 1.1 1.1 0 .6-.5 1-1.1 1h-.3v-1zM40.8 9h-.1c0 .1-.1.1-.2.1H38v.1c.3 0 .4.1.4 2v1.7c0 .3-.1.4-.4.4v.1h2.9l.1-.7h-.1c-.1.3-.3.4-.7.4h-1.3v-1.9H40c.4 0 .5.1.5.3h.1v-.4-.4h-.1c-.1.2-.2.3-.5.3h-1.1v-.6c0-.4 0-.9.1-1.2h1c.5 0 .8.2.8.4h.1V9zm-7.7 3.8c0 .3-.1.4-.4.5v.1h1.2v-.1c-.4-.1-.4-.2-.4-.8v-2.4l3.2 3.3h.1V9.7c0-.3.1-.4.4-.5v-.1h-1.1v.1c.4.1.5.2.5 1.3v2.1l-2.7-2.8c-.2-.2-.4-.5-.6-.7h-.1v3.7zm-5.2 0c0 .3-.1.4-.4.5v.1h1.2v-.1c-.4-.1-.4-.2-.4-.8v-2.4l3.2 3.3h.1V9.7c0-.3.1-.4.4-.5v-.1h-1.1v.1c.4.1.5.2.5 1.3v2.1l-2.7-2.8c-.2-.2-.4-.5-.6-.7H28v3.7zm-1.4-3.7h-1.2v.1c.2 0 .3.2.3.4V13c0 .2-.1.4-.3.4v.1h1v-.1c-.2 0-.3-.2-.3-.4V9.6c0-.2.1-.4.3-.4v-.1zm-5.8 4.4l.8-1.7.7 1.7h.1l1.1-2.5c.5-1.1.8-1.7 1.1-1.8v-.1h-1v.1c.2 0 .3.1.3.3 0 .1 0 .3-.1.4l-1.3 2.9-.6-1.4.8-1.6c.1-.3.3-.5.5-.6v-.1h-1v.1c.2 0 .2.1.2.3 0 .1 0 .1-.1.2l-.5 1.3-.6-1.4c0-.1-.1-.2-.1-.2 0-.1.1-.1.2-.1v-.2H20v.1c.2 0 .3.1.4.3l.9 2.1-.6 1.2-1.3-3.1c-.1-.2-.1-.2-.1-.3 0-.1.1-.1.2-.2v-.1h-1.2v.1c.1.1.2.1.4.5l1.7 3.9h.3z"
                    }), i.a.createElement("path", {
                        className: en.a.st0,
                        d: "M0 0h60v21H0z"
                    }))
                }, o.renderWebby = function () {
                    return i.a.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 390 223"
                    }, i.a.createElement("path", {
                        d: "M10.636 121.613v16.312c126.218-7.506 32.35-11.405 0-16.312zM10.636 148.565v16.018l1.055.264c96.158-8.875 68.557-12.11-1.055-16.282z"
                    }), i.a.createElement("path", {
                        d: "M10.636 6.675v52.67c79.138-2.676 79.529-7.162 38.488-12.6l7.382-8.963c50.67 7.776 47.457 20.512 11.072 26.89 12.192 4.287 55.407 12.233 3.163 27.943 8.502 2.31 56.446 14.178-3.163 24.78 9.444 4.265 59.556 10.382 2.108 25.835 14.875 2.443 53.1 10.592 2.637 26.889 19.078 1.996 21.235 2.658 26.361 11.6v34.27h23.198V6.675H10.636z"
                    }), i.a.createElement("path", {
                        d: "M10.636 96.833v16.345c23.742-4.67 132.112-6.565 0-16.345zM10.636 68.977v17.312c74.191-3.991 99.257-9.16 0-17.312z"
                    }), i.a.createElement("g", null, i.a.createElement("path", {
                        d: "M149.13 62.489h-12.658V60h28.012v2.489h-12.655v33.823h-2.699V62.489zM171.333 60h2.698v16.808h23.24V60h2.698v36.312h-2.698V79.296h-23.24v17.016h-2.698V60zM209.409 60h25.833v2.489h-23.135v14.266h20.801v2.491h-20.801v14.577h23.395v2.489h-26.094V60zM138.349 117.184h12.05l7.174 23.809 7.936-23.924h9.818l7.933 23.924 7.174-23.809h11.817l-13.756 41.445h-9.936l-8.231-23.689-8.288 23.689h-9.936l-13.755-41.445zM202.252 137.418v-.156c0-12.367 8.846-22.152 21.372-22.152 14.561 0 21.291 10.725 21.291 23.17 0 .939 0 2.035-.077 3.055h-28.337c1.173 4.617 4.54 6.965 9.156 6.965 3.604 0 6.343-1.33 9.396-4.305l8.217 6.811c-4.069 5.164-9.939 8.609-18.315 8.609-13.306-.001-22.703-8.923-22.703-21.997zm28.806-3.678c-.547-4.699-3.363-7.674-7.434-7.674-3.917 0-6.575 2.975-7.359 7.674h14.793zM253.004 117.184h21.105c5.174 0 8.818 1.293 11.229 3.646 1.645 1.703 2.645 3.879 2.645 6.701v.117c0 4.762-2.705 7.584-6.35 9.172 4.999 1.645 8.174 4.467 8.174 10.053v.115c0 7.057-5.762 11.348-15.58 11.348h-21.224v-41.152zm23.75 12.699c0-2.293-1.82-3.527-5.171-3.527h-7.468v7.23h7.174c3.469 0 5.465-1.176 5.465-3.586v-.117zm-3.938 11.697h-8.7v7.584h8.818c3.526 0 5.469-1.352 5.469-3.762v-.117c0-2.234-1.767-3.705-5.587-3.705zM298.599 117.184h21.105c5.174 0 8.818 1.293 11.229 3.646 1.645 1.703 2.645 3.879 2.645 6.701v.117c0 4.762-2.705 7.584-6.35 9.172 4.999 1.645 8.17 4.467 8.17 10.053v.115c0 7.057-5.759 11.348-15.576 11.348h-21.224v-41.152zm23.75 12.699c0-2.293-1.82-3.527-5.171-3.527h-7.468v7.23h7.174c3.465 0 5.465-1.176 5.465-3.586v-.117zm-3.939 11.697h-8.7v7.584h8.818c3.526 0 5.468-1.352 5.468-3.762v-.117c0-2.234-1.762-3.705-5.586-3.705zM351.095 142.934l-15.696-25.75h12.994l8.464 14.99 8.524-14.99h12.76l-15.643 25.574v15.578h-11.402v-15.402zM156.969 175.922h2.594l16.91 36.572h-2.955l-4.617-10.168h-21.426l-4.617 10.168h-2.8l16.911-36.572zm10.791 23.965l-9.544-21.008-9.599 21.008h19.143zM176.263 176.182h3.009l11.412 32.318 10.636-32.424h2.073L214.03 208.5l11.412-32.318h2.8l-13.175 36.572h-2.179l-10.636-31.541-10.635 31.541h-2.179l-13.175-36.572zM245.824 175.949h2.594l16.91 36.57h-2.955l-4.617-10.166H236.33l-4.617 10.166h-2.8l16.911-36.57zm10.791 23.965l-9.544-21.008-9.599 21.008h19.143zM271.57 176.182h15.252c4.462 0 8.042 1.4 10.221 3.578 1.712 1.713 2.749 4.15 2.749 6.744v.104c0 6.068-4.513 9.547-10.636 10.375l11.983 15.512h-3.425l-11.567-15.043h-11.879v15.043h-2.698v-36.313zm14.941 18.83c6.069 0 10.581-3.061 10.581-8.299v-.105c0-4.875-3.836-7.938-10.426-7.938h-12.398v16.342h12.243zM307.816 176.182h12.088c11.412 0 19.298 7.832 19.298 18.053v.102c0 10.221-7.886 18.158-19.298 18.158h-12.088v-36.313zm2.698 2.488v31.334h9.39c10.115 0 16.495-6.9 16.495-15.562v-.105c0-8.609-6.38-15.666-16.495-15.666h-9.39zM344.178 207.203l1.764-2.023c3.998 3.684 7.68 5.394 13.022 5.394 5.444 0 9.18-3.06 9.18-7.209v-.105c0-3.838-2.02-6.068-10.267-7.729-8.714-1.764-12.247-4.721-12.247-10.221v-.104c0-5.395 4.932-9.543 11.673-9.543 5.295 0 8.768 1.451 12.449 4.408l-1.709 2.127c-3.425-2.957-6.85-4.1-10.842-4.1-5.343 0-8.869 3.062-8.869 6.848v.105c0 3.838 1.973 6.172 10.578 7.936 8.402 1.711 11.936 4.721 11.936 10.012v.104c0 5.861-5.032 9.908-12.037 9.908-5.809.001-10.274-1.917-14.631-5.808z"
                    })))
                }, o.renderCreativeReview = function () {
                    return i.a.createElement("img", {
                        src: Yt.a,
                        alt: "creative review logo"
                    })
                }, o.renderCannes = function () {
                    return i.a.createElement("img", {
                        src: qt.a,
                        alt: "creative review logo"
                    })
                }, o.renderLovies = function () {
                    return i.a.createElement("img", {
                        src: Zt.a,
                        alt: "lovies awards logo"
                    })
                }, o.renderCSSDesignAwards = function () {
                    return i.a.createElement("img", {
                        src: Jt.a,
                        alt: "CSS Design Awards logo"
                    })
                }, n))
            }
            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && rn(e, t)
            }(t, r["PureComponent"]), n = t, (o = [{
                key: "componentDidMount",
                value: function () {}
            }, {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.type,
                        n = e.label,
                        o = {
                            FWA: "fwa",
                            Awwwards: "awwwards",
                            BFTA: "bfta",
                            Webby: "webby",
                            "Creative Review": "creative-review",
                            Lovies: "lovies"
                        };
                    return i.a.createElement("div", {
                        className: en.a.host,
                        id: o[t]
                    }, "fwa" === o[t] && this.renderFwa(), "awwwards" === o[t] && this.renderAwwwards(), "bafta" === o[t] && this.renderBafta(), "webby" === o[t] && this.renderWebby(), "creative-review" === o[t] && this.renderCreativeReview(), "lovies" === o[t] && this.renderLovies(), "" !== n && i.a.createElement("div", {
                        className: en.a.label
                    }, n))
                }
            }]) && nn(n.prototype, o), a && nn(n, a), t
        }();
        ln.propTypes = {
            type: p.a.string.isRequired,
            label: p.a.string.isRequired
        };
        var sn = ln,
            cn = n(17),
            un = n.n(cn);

        function pn(e) {
            return (pn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function hn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function fn(e, t) {
            return !t || "object" !== pn(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function dn(e) {
            return (dn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function mn(e, t) {
            return (mn = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var yn = function (e) {
            function t() {
                var e, n, o;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l];
                return fn(o, (n = o = fn(this, (e = dn(t)).call.apply(e, [this].concat(r))), o.elements = [], o.split = [], o.scrollStatus = null, o.exiting = !1, o.state = {
                    index: -1,
                    hero: null,
                    heroOffset: 0,
                    preloading: !0
                }, o.reset = function () {
                    F.f.set(o.elements.host, {
                        alpha: 0
                    }), F.f.set(o.elements.projectEl, {
                        alpha: 0
                    }), F.f.set(o.elements.forEl, {
                        alpha: 0
                    }), F.f.set(o.elements.inEl, {
                        alpha: 0
                    }), F.f.set(o.elements.withEl, {
                        alpha: 0
                    }), F.f.set(o.elements.asEl, {
                        alpha: 0
                    }), F.f.set(o.elements.exploringEl, {
                        alpha: 0
                    }), F.f.set(o.elements.linkEl, {
                        alpha: 0
                    }), F.f.set(o.elements.loadingMore, {
                        alpha: 0
                    }), F.f.set(o.elements.loadingMoreArrow, {
                        alpha: 0,
                        y: "-=30"
                    }), o.elements.awards && F.f.set(o.elements.awards.querySelectorAll("div"), {
                        alpha: 0,
                        y: "+=30"
                    })
                }, o.splitElement = function (e) {
                    o.split[e] = new z.a(o.elements[e], {
                        type: "lines"
                    })
                }, o.animateIn = function () {
                    F.f.set(o.elements.host, {
                        alpha: 1
                    });
                    for (var e = o.elements, t = e.projectEl, n = e.forEl, a = e.inEl, r = e.withEl, i = e.asEl, l = e.exploringEl, s = e.linkEl, c = e.loadingMore, u = [t, n, a, r, i, l], p = 0, h = u.length; p < h; p += 1) {
                        var f = 1 + p / 10,
                            d = u[p].querySelector("p"),
                            m = u[p].querySelector("h2"),
                            y = u[p].querySelector("h2 .".concat(un.a.green));
                        F.f.staggerFrom([d, m], .75, {
                            alpha: 0,
                            y: "+=40",
                            rotation: 8,
                            transformOrigin: "0 0",
                            delay: f,
                            ease: F.c.easeOut
                        }, .2), F.f.to(y, .75, {
                            autoAlpha: 0,
                            delay: f + .5,
                            ease: F.c.easeOut
                        }), F.f.set(u[p], {
                            alpha: 1
                        })
                    }
                    F.f.set(s, {
                        alpha: 1
                    }), F.f.from(s, .75, {
                        alpha: 0,
                        y: "+=40",
                        rotation: 8,
                        transformOrigin: "0 0",
                        delay: 2,
                        ease: F.c.easeOut
                    }), F.f.to(c, .75, {
                        alpha: 1,
                        delay: 2,
                        onComplete: o.animationInComplete
                    }), o.elements.awards && F.f.staggerTo(o.elements.awards.querySelectorAll("div"), .75, {
                        alpha: 1,
                        y: "-=30",
                        clear: "all",
                        delay: 2
                    }, .15)
                }, o.animationInComplete = function () {
                    o.preloadImages()
                }, o.preloadImages = function () {
                    for (var e = o.props.works[o.state.index], t = e.grid.concat(e.horizontals), n = [], a = 0, r = t.length; a < r; a += 1) {
                        var i = "static/assets/images/works/".concat(e.slug, "/").concat(e.slug, "-").concat(t[a].id, ".").concat(t[a].fileType);
                        n.push(o.loadImage(i))
                    }
                    Promise.all(n).then(function () {
                        o._isMounted && o.setState({
                            preloading: !1
                        }, function () {
                            F.f.set(o.elements.heroContainer, {
                                alpha: 0,
                                y: "+=100"
                            }), o.elements.hero.addEventListener("load", function () {
                                o.setState({
                                    hero: o.elements.hero
                                }, function () {
                                    o.imagesPreloaded()
                                })
                            })
                        })
                    })
                }, o.loadImage = function (e) {
                    return new Promise(function (t) {
                        var n = new Image;
                        n.addEventListener("load", t), n.src = e
                    })
                }, o.imagesPreloaded = function () {
                    o.initScrollbar(), F.f.to(o.elements.heroContainer, 1, {
                        alpha: 1,
                        y: 0,
                        clear: "all",
                        ease: F.c.easeOut
                    }), F.f.to(o.elements.loadingMoreArrow, 1, {
                        alpha: 1,
                        y: 0,
                        clear: "all",
                        ease: F.c.easeOut
                    }), F.f.to(o.elements.loadingMoreSpinner, 1, {
                        autoAlpha: 0,
                        y: "+=10",
                        ease: F.c.easeOut
                    })
                }, o.animateOut = function (e) {
                    F.f.to(o.elements.host, .75, {
                        opacity: 0,
                        ease: F.c.easeOut,
                        onComplete: e
                    })
                }, o.initScrollbar = function () {
                    o.scrollbar = pt.a.init(o.elements.host, {
                        damping: .1,
                        thumbMinSize: 20,
                        renderByPixels: !0,
                        alwaysShowTracks: !1,
                        continuousScrolling: !1,
                        delegateTo: document
                    }), o.scrollbar.addListener(o.checkScroll)
                }, o.checkScroll = function (e) {
                    var t = o.props,
                        n = t.windowHeight,
                        a = t.navigateTo;
                    if (!o.exiting) {
                        var r = e.limit.y - e.offset.y,
                            i = -100;
                        r < n / 1.75 && (i = 100 * (oe.roundToPlaces(oe.map(r, n / 1.75, 0, 0, 1), 2) - 1)), F.f.set(o.elements.arrowBottomContainer, {
                            y: "".concat(i, "%"),
                            force3D: !0
                        }), F.f.set(o.elements.arrowBottom, {
                            y: "".concat(-i, "%"),
                            force3D: !0
                        }), 0 === r && (o.exiting = !0, o.animateOut(function () {
                            o.scrollbar.destroy(), a("/")
                        }))
                    }
                }, o.getHeroOffset = function (e, t) {
                    return e * Math.tan(oe.degreesToRads(t))
                }, o.onResize = function (e) {
                    o.setState({
                        heroOffset: o.getHeroOffset(e, 2)
                    })
                }, o.setRef = function (e) {
                    e && (e.dataset ? o.elements[e.dataset.ref] = e : o.elements[e.props["data-ref"]] = e)
                }, o.renderGrid = function (e, t, n, a, r) {
                    for (var l = o.props.works, s = o.state.index, c = [], u = 0, p = e.length; u < p; u += 1) {
                        var h = oe.mod(u, 3),
                            f = 1 !== h ? h > 1 ? Math.abs(t[u]) : t[u] : 0,
                            d = h === u ? 0 : Math.abs(n[u]),
                            m = n[u],
                            y = oe.roundToPlaces(oe.map(m, a, r, .5, 1), 2),
                            v = l[s],
                            g = v.slug,
                            b = v.title,
                            _ = l[s].grid[u],
                            w = _.id,
                            E = _.fileType,
                            x = "empty" === w ? "".concat(w, ".").concat(E) : "".concat(g, "-").concat(w, ".").concat(E),
                            O = "".concat("static/assets/images/works", "/").concat(g, "/").concat(x);
                        c.push(i.a.createElement("div", {
                            key: "".concat(w, "-").concat(u),
                            style: {
                                transform: "translate3d(".concat(f, "px, ").concat(d, "px, ").concat(m, "px)")
                            }
                        }, i.a.createElement("img", {
                            src: O,
                            alt: b,
                            style: {
                                opacity: y
                            }
                        })))
                    }
                    return c
                }, o.renderHorizontals = function (e, t, n, a, r) {
                    for (var l = o.props.works, s = o.state.index, c = [], u = 0, p = e.length; u < p; u += 1) {
                        var h = t[u],
                            f = n[u],
                            d = oe.roundToPlaces(oe.map(f, a, r, .85, 1), 2),
                            m = l[s],
                            y = m.slug,
                            v = m.title,
                            g = l[s].horizontals[u],
                            b = g.id,
                            _ = g.fileType,
                            w = "".concat("static/assets/images/works", "/").concat(y, "/").concat(y, "-").concat(b, ".").concat(_);
                        c.push(i.a.createElement("div", {
                            key: "".concat(b, "-").concat(u),
                            style: {
                                transform: "translate3d(".concat(0, "px, ", h, "px, ").concat(f, "px)")
                            }
                        }, i.a.createElement("img", {
                            src: w,
                            alt: v,
                            style: {
                                opacity: d
                            }
                        })))
                    }
                    return c
                }, n))
            }
            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && mn(e, t)
            }(t, r["Component"]), n = t, (o = [{
                key: "componentWillMount",
                value: function () {
                    var e = this.props,
                        t = e.pathname,
                        n = e.works,
                        o = e.windowWidth,
                        a = t.split("/")[2],
                        r = Z()(n, {
                            slug: a
                        });
                    this.setState({
                        index: r,
                        heroOffset: this.getHeroOffset(o, 2)
                    })
                }
            }, {
                key: "componentDidMount",
                value: function () {
                    this._isMounted = !0, this.reset(), this.animateIn()
                }
            }, {
                key: "componentWillLeave",
                value: function (e) {
                    this._isMounted = !1, this.animateOut(e)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function (e) {
                    var t = e.windowWidth,
                        n = e.windowHeight,
                        o = this.props,
                        a = o.windowWidth,
                        r = o.windowHeight;
                    t === a && n === r || this.onResize(t)
                }
            }, {
                key: "componentWillUnmount",
                value: function () {
                    this.scrollbar && (this.scrollbar.destroy(), this.scrollbar = null)
                }
            }, {
                key: "shouldComponentUpdate",
                value: function (e) {
                    return "/" !== e.pathname
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.works,
                        n = e.windowWidth,
                        o = e.windowHeight,
                        a = this.state,
                        l = a.index,
                        s = a.heroOffset,
                        c = a.hero,
                        u = a.preloading,
                        p = "400px",
                        h = "400px";
                    if (this.elements.hero) {
                        var f = this.elements.hero.offsetWidth / n;
                        h = this.elements.hero.offsetHeight / f, c && (p = "".concat(c.offsetHeight / f + s, "px"))
                    }
                    for (var d = t[l].grid, m = [], y = [], v = 0, g = 9999, b = 0, _ = d.length; b < _; b += 1) {
                        var w = oe.mod(b, 4);
                        y[b] = w % 2 ? oe.randomInt(-200, -100) : oe.randomInt(-70, 20), m[b] = y[b] / 1.75, y[b] > v && (v = y[b]), y[b] < g && (g = y[b])
                    }
                    for (var E = t[l].horizontals, x = [], O = [], P = 0, S = 9999, M = 0, R = E.length; M < R; M += 1) O[M] = M % 2 != 0 ? oe.randomInt(-60, -40) : oe.randomInt(-10, 20), x[M] = 0, O[M] > P && (P = O[M]), O[M] < S && (S = O[M]);
                    var C = -1 !== t[l].link.indexOf("vimeo") ? "See video" : "See live";
                    return i.a.createElement("div", {
                        className: "Work ".concat(un.a.host),
                        ref: this.setRef,
                        "data-ref": "host",
                        "data-scrollbar": !0
                    }, i.a.createElement("div", {
                        className: un.a.container,
                        style: {
                            height: o
                        }
                    }, i.a.createElement("section", {
                        className: un.a.info
                    }, i.a.createElement("section", null, i.a.createElement("div", {
                        className: un.a.group
                    }, i.a.createElement("div", null, i.a.createElement("div", {
                        ref: this.setRef,
                        "data-ref": "projectEl"
                    }, i.a.createElement("p", null, "PROJECT"), i.a.createElement("h2", null, i.a.createElement("span", {
                        className: un.a.green
                    }, t[l].title), i.a.createElement("span", null, t[l].title))), i.a.createElement("div", {
                        ref: this.setRef,
                        "data-ref": "forEl"
                    }, i.a.createElement("p", null, "FOR"), i.a.createElement("h2", null, i.a.createElement("span", {
                        className: un.a.green
                    }, t[l].client), i.a.createElement("span", null, t[l].client))), i.a.createElement("div", null), i.a.createElement("div", null)), i.a.createElement("div", null, i.a.createElement("div", {
                        ref: this.setRef,
                        "data-ref": "asEl"
                    }, i.a.createElement("p", null, "AS"), i.a.createElement("h2", null, i.a.createElement("span", {
                        className: un.a.green
                    }, t[l].role), i.a.createElement("span", null, t[l].role))), i.a.createElement("div", {
                        ref: this.setRef,
                        "data-ref": "inEl"
                    }, i.a.createElement("p", null, "IN"), i.a.createElement("h2", null, i.a.createElement("span", {
                        className: un.a.green
                    }, t[l].date), i.a.createElement("span", null, t[l].date))), i.a.createElement("div", {
                        ref: this.setRef,
                        "data-ref": "withEl"
                    }, i.a.createElement("p", null, "WITH"), i.a.createElement("h2", null, i.a.createElement("span", {
                        className: un.a.green
                    }, t[l].agency), i.a.createElement("span", null, t[l].agency))), i.a.createElement("div", {
                        ref: this.setRef,
                        "data-ref": "exploringEl"
                    }, i.a.createElement("p", null, "EXPLORING"), i.a.createElement("h2", null, i.a.createElement("span", {
                        className: un.a.green
                    }, t[l].tech), i.a.createElement("span", null, t[l].tech)))))), i.a.createElement("section", {
                        ref: this.setRef,
                        "data-ref": "linkEl"
                    }, "" !== t[l].link && i.a.createElement(r.Fragment, null, i.a.createElement("a", {
                        href: t[l].link,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, i.a.createElement("span", null), C), i.a.createElement("div", {
                        className: un.a.more
                    }, i.a.createElement("span", null), i.a.createElement("span", null), i.a.createElement("span", null))), "" === t[l].link && i.a.createElement("p", null, "Currently offline"), i.a.createElement("div", {
                        ref: this.setRef,
                        "data-ref": "loadingMore",
                        className: un.a.loadingMore
                    }, i.a.createElement("div", {
                        ref: this.setRef,
                        "data-ref": "loadingMoreArrow"
                    }, i.a.createElement("span", {
                        className: un.a.arrow,
                        ref: this.setRef,
                        "data-ref": "arrowDownEl"
                    })), i.a.createElement("div", {
                        ref: this.setRef,
                        "data-ref": "loadingMoreSpinner"
                    }, i.a.createElement("span", null), i.a.createElement("span", null), i.a.createElement("span", null)))))), !u && i.a.createElement("section", {
                        className: un.a.hero
                    }, i.a.createElement("div", {
                        ref: this.setRef,
                        "data-ref": "heroContainer",
                        style: {
                            height: "".concat(h, "px")
                        }
                    }, i.a.createElement("img", {
                        src: "static/assets/images/works/".concat(t[l].slug, "/hero.jpg"),
                        alt: t[l].title,
                        ref: this.setRef,
                        "data-ref": "hero",
                        style: {
                            height: p,
                            transform: "translate3d(-50%, -".concat(s, "px, 0.01px) skewY(2deg)")
                        }
                    }))), d.length > 0 && !u && i.a.createElement("div", {
                        className: un.a.mobileContainer
                    }, i.a.createElement("section", {
                        className: un.a.mobile
                    }, this.renderGrid(d, m, y, g, v)), i.a.createElement("div", {
                        className: un.a.legend
                    }, i.a.createElement("span", null, "M"), i.a.createElement("span", null, "o"), i.a.createElement("span", null, "b"), i.a.createElement("span", null, "i"), i.a.createElement("span", null, "l"), i.a.createElement("span", null, "e"))), E.length > 0 && !u && i.a.createElement("section", {
                        className: un.a.desktop
                    }, this.renderHorizontals(E, x, O, S, P)), t[l].awards && t[l].awards.length > 0 && i.a.createElement("section", {
                        className: un.a.awards,
                        ref: this.setRef,
                        "data-ref": "awards"
                    }, t[l].awards.map(function (e) {
                        return i.a.createElement(sn, {
                            key: "".concat(e.type, "-").concat(e.label),
                            type: e.type,
                            label: e.label
                        })
                    })), !u && i.a.createElement("section", {
                        className: un.a.bottom
                    }, i.a.createElement("div", null, i.a.createElement("span", {
                        ref: this.setRef,
                        "data-ref": "arrowBottomContainer"
                    }, i.a.createElement("span", {
                        ref: this.setRef,
                        "data-ref": "arrowBottom"
                    }, "↓")), i.a.createElement("span", null, "↓"))))
                }
            }]) && hn(n.prototype, o), a && hn(n, a), t
        }();
        yn.mapStateToProps = function (e) {
            return {
                works: e.general.works,
                windowWidth: e.platform.windowWidth,
                windowHeight: e.platform.windowHeight
            }
        }, yn.mapDispatchToProps = function (e) {
            return {
                navigateTo: function (t) {
                    return e(Object(f.d)(t))
                }
            }
        }, yn.propTypes = {
            works: p.a.array.isRequired,
            pathname: p.a.string.isRequired,
            windowWidth: p.a.number.isRequired,
            windowHeight: p.a.number.isRequired,
            navigateTo: p.a.func.isRequired
        };
        var vn = Nt(Object(l.c)(yn.mapStateToProps, yn.mapDispatchToProps, null, {
            forwardRef: !0
        })(yn));

        function gn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var bn = function () {
                function e() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, o;
                return t = e, o = [{
                    key: "log",
                    value: function () {
                        console.groupCollapsed("%c 👊🏽 %c ICANTCONTROLMYEGO.NET %c", "background:#000; padding: 1px; border-radius: 3px 0 0 3px;", "background:#00FF00; padding: 1px; border-radius: 0 3px 3px 0; color: #000", "background:transparent"), console.log("v 1.0.30 built on 2019/09/10 06:06PM"), console.groupEnd()
                    }
                }], (n = null) && gn(t.prototype, n), o && gn(t, o), e
            }(),
            _n = n(299),
            wn = n.n(_n);
        n(675);

        function En(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        new(function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.element = document.createElement("div"), this.element.innerHTML = wn()({
                    VERSION_INFO: "v 1.0.30 built on 2019/09/10 06:06PM"
                }), this.element.classList.add("Version"), this.collapse = this.element.querySelector(".toggle"), this.toggle = this.toggle.bind(this), this.collapse.addEventListener("click", this.toggle)
            }
            var t, n, o;
            return t = e, (n = [{
                key: "toggle",
                value: function () {
                    this.element.classList.toggle("collapsed")
                }
            }]) && En(t.prototype, n), o && En(t, o), e
        }());
        var xn = n(179),
            On = n.n(xn);

        function Pn(e) {
            return (Pn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Sn(e) {
            return (Sn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Mn(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Rn(e, t) {
            return (Rn = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Cn = function (e) {
                function t() {
                    var e, n, o, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), n = this, e = !(o = Sn(t).call(this)) || "object" !== Pn(o) && "function" != typeof o ? Mn(n) : o, Tn.call(Mn(e)), e._anchor = new be(a, r), e._length = i, e._springForce = .16, e._reset = new be(0, 0), e._particle = null, e._draw(), e
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Rn(e, t)
                }(t, q["Graphics"]), t
            }(),
            Tn = function () {
                var e = this;
                this._setAnchor = function (t, n) {
                    e._anchor.x = t, e._anchor.y = n
                }, this._connect = function (t) {
                    e._particle = t;
                    var n = t._position.clone().subtract(e._anchor),
                        o = n.length() - e._length;
                    n.normalize();
                    var a = -1 * e._springForce * o;
                    n.multiply(new be(a, a)), t._applyForce(n)
                }, this._constrainLength = function (t, n, o) {
                    if (t._position) {
                        var a = t._position.clone().subtract(e._anchor),
                            r = a.length(),
                            i = oe.clamp(r, n, o);
                        if (i !== r) {
                            var l = i / r;
                            a.multiply(new be(l, l));
                            var s = e._anchor.clone().add(a);
                            t._setPosition(s.x, s.y), t._velocity.multiply(e._reset)
                        }
                    }
                }, this._draw = function () {
                    e._particle && (e.clear(), e.beginFill(2236962, 1), e.drawCircle(e._anchor.x, e._anchor.y, 1), e.endFill(), e.lineStyle(.5, 2236962, 1), e.moveTo(e._anchor.x, e._anchor.y), e.lineTo(e._particle._position.x, e._particle._position.y), e.endFill())
                }
            },
            An = Cn;

        function Ln(e) {
            return (Ln = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function kn(e) {
            return (kn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function In(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Nn(e, t) {
            return (Nn = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Fn = function (e) {
            function t() {
                var e, n, o, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n = this, e = !(o = kn(t).call(this)) || "object" !== Ln(o) && "function" != typeof o ? In(n) : o, jn.call(In(e)), e._position = new be(a, r), e._velocity = new be(0, 0), e._acceleration = new be(0, 0), e._damping = new be(t.DAMPING, t.DAMPING), e._reset = new be(0, 0), e._green = new q.Graphics, e.addChild(e._green), e._grey = new q.Graphics, e.addChild(e._grey), e._updatePosition(), e._draw(), e
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Nn(e, t)
            }(t, q["Graphics"]), t
        }();
        Fn.DAMPING = .4;
        var jn = function () {
                var e = this;
                this._isLoaded = !1, this._updatePosition = function () {
                    e.x = e._position.x, e.y = e._position.y
                }, this._setPosition = function (t, n) {
                    e._position.x = t, e._position.y = n, e._updatePosition()
                }, this._draw = function () {
                    e._green.clear(), e._green.beginFill(65280, 1), e._green.drawCircle(0, 0, 1), e._green.endFill(), e._grey.clear(), e._grey.beginFill(3355443, 1), e._grey.drawCircle(0, 0, 1), e._grey.endFill()
                }, this._applyForce = function (t) {
                    e._acceleration.add(t)
                }, this._update = function () {
                    e._velocity.add(e._acceleration), e._velocity.multiply(e._damping), e._position.add(e._velocity), e._acceleration.multiply(e._reset), e._updatePosition()
                }, this._loaded = function () {
                    e._isLoaded = !0, F.f.to(e._grey, 1, {
                        alpha: 0
                    })
                }
            },
            zn = Fn;

        function Dn(e) {
            return (Dn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Hn(e, t) {
            return !t || "object" !== Dn(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Wn(e) {
            return (Wn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Bn(e, t) {
            return (Bn = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Gn = function (e) {
            function t(e, n) {
                var o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (o = Hn(this, Wn(t).call(this))).startPos = new be(0, 0), o.mousePosition = new be(0, 0), o.mouseForce = -300, o._toX = 0, o._toY = 0, o._onMouseDown = function () {
                    o.mouseForce = -600
                }, o._onMouseUp = function () {
                    o.mouseForce = -300
                }, o._update = function (e, t) {
                    o.mousePosition.x = e, o.mousePosition.y = t;
                    var n = Date.now(),
                        a = Math.min((n - o._particle.time) / 1e3, 1 / 60);
                    o._particle.time = n;
                    var r = o.mousePosition.clone().subtract(o._particle._position),
                        i = r.angle(),
                        l = oe.map(r.x, 0, window.innerWidth, o.mouseForce, 0);
                    o._mouseSpring.x = l * Math.cos(i) * a || 0, o._mouseSpring.y = l * Math.sin(i) * a || 0, o._particle._applyForce(o._mouseSpring), o._spring._connect(o._particle), o._particle._update()
                }, o._onRemoved = function () {
                    o._spring.destroy(), o._particle.destroy(), o.destroy()
                }, o._fadeOut = function () {
                    o.mouseForce = -900, F.f.to(o._particle, 1, {
                        alpha: 0,
                        ease: F.a.easeOut
                    })
                }, o._mouseSpring = new be(0, 0), o._spring = new An(e, n, 0), o.addChild(o._spring), o._particle = new zn(n, n), o.addChild(o._particle), o.startPos.x = e, o.startPos.y = n, o._toX = e, o._toY = n, pe.on(se, o._onMouseDown), pe.on(ce, o._onMouseUp), o.addListener("removed", o._onRemoved), o
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Bn(e, t)
            }(t, q["Sprite"]), t
        }();
        n(676);

        function Un(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        var Vn = new(function () {
                function e() {
                    var t = this;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.queues = {}, this.getAsset = function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "core";
                        return t.queues[n].getResult(e)
                    }, this.getTexture = function (e) {
                        return t.textures[e]
                    }
                }
                var t, n, o;
                return t = e, (n = [{
                    key: "preload",
                    value: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "core",
                            o = new createjs.LoadQueue(!1);
                        return o.setMaxConnections(10), this.queues[n] = o, new Promise(function (n) {
                            t && o.on("progress", function (e) {
                                var n = e.progress;
                                return t(n)
                            }), o.on("complete", function () {
                                o.off("progress"), o.off("complete"), o.destroy(), n()
                            }), "string" == typeof e ? o.loadFile(e) : e.length > 0 ? o.loadManifest(e) : n()
                        })
                    }
                }, {
                    key: "preloadAsTextures",
                    value: function (e, t) {
                        for (var n = this, o = new q.loaders.Loader, a = 0, r = e.length; a < r; a += 1) o.add(e[a], e[a]);
                        return new Promise(function (e) {
                            t && o.on("progress", function (e) {
                                return t(e)
                            }), o.once("complete", function (t, a) {
                                n.textures = a, o.off("progress"), o.off("complete"), o.destroy(), e()
                            }), o.load()
                        })
                    }
                }]) && Un(t.prototype, n), o && Un(t, o), e
            }()),
            Yn = n(300),
            Xn = n.n(Yn),
            qn = n(301),
            Qn = n.n(qn),
            Zn = n(302),
            Kn = n.n(Zn);

        function Jn(e) {
            return (Jn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function $n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function eo(e, t) {
            return !t || "object" !== Jn(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function to(e) {
            return (to = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function no(e, t) {
            return (no = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var oo = function (e) {
            function t() {
                var e, n, o;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                return eo(o, (n = o = eo(this, (e = to(t)).call.apply(e, [this].concat(r))), o.particles = [], o.progressIndex = 0, o.audioUnlocked = !1, o.unlockAudio = function () {
                    o.audioUnlocked || (o.audio.play(), o.audioUnlocked = !0)
                }, o.onAudioRef = function (e) {
                    o.audioPlayer = e
                }, o.init = function () {
                    for (var e = o.props.works, t = [], n = 0, a = e.length; n < a; n += 1) e[n].active && t.push("static/assets/images/works/".concat(e[n].slug, "/poster.jpg"));
                    t.push(_t.a), t.push(Et.a), t.push(Ot.a), t.push(St.a), Vn.preloadAsTextures(t, o.onPreloaderProgress).then(o.onPreloaderComplete)
                }, o.onPreloaderProgress = function (e) {
                    var t = o.particles.length,
                        n = Math.round(e.progress),
                        a = Math.floor(n * t / 100);
                    o.progressIndex = a
                }, o.onPreloaderComplete = function () {
                    var e = o.props.dispatchSetPreloaded;
                    o.progressIndex = o.particles.length, F.f.delayedCall(2, function () {
                        window.removeEventListener("click", o.unlockAudio), F.f.to(o.text, 1, {
                            alpha: 0,
                            delay: 0,
                            ease: F.a.easeOut
                        });
                        for (var t = function (e, t) {
                            o.audioUnlocked && (o.audio.currentTime = 0, o.audio.play()), F.f.delayedCall(0, function () {
                                o.particles[e]._fadeOut()
                            })
                        }, n = 0, a = o.particles.length; n < a; n += 1) t(n);
                        F.f.delayedCall(1.25, function () {
                            e(!0)
                        })
                    })
                }, o.addPIXIApp = function () {
                    var e = o.props,
                        t = e.windowWidth,
                        n = e.windowHeight;
                    q.utils.skipHello(), o.app = new q.Application(t, n, {
                        backgroundColor: 0,
                        resolution: 2,
                        autoResize: !0
                    }), o.host.appendChild(o.app.view), o.container = new q.Container, o.app.stage.addChild(o.container), o.app.ticker.add(o.update)
                }, o.addParticles = function () {
                    for (var e = 0; e < 40; e += 1) {
                        var t = 50 * e,
                            n = o.app.screen.height / 2,
                            a = new Gn(t, n, e);
                        o.container.addChild(a), o.particles.push(a)
                    }
                    o.text = new q.Text("PRESS FOR\nAUDIO", {
                        fontFamily: "IBM Plex Sans",
                        fontWeight: "100",
                        lineHeight: 16,
                        fontSize: 12,
                        fill: 3355443,
                        align: "center"
                    }), o.text.alpha = 0, F.f.to(o.text, 1, {
                        alpha: 1,
                        delay: 1.15,
                        ease: F.a.easeOut
                    }), o.container.addChild(o.text)
                }, o.distributeInCircle = function () {
                    for (var e = o.particles.length, t = oe.degreesToRads(-90), n = 2 * Math.PI / e, a = o.app.screen.width / 2, r = o.app.screen.height / 2, i = 0; i < e; i += 1) {
                        var l = Math.round(20 + 40 * Math.cos(t) - 20),
                            s = Math.round(20 + 40 * Math.sin(t) - 20);
                        o.particles[i]._toX = l + a, o.particles[i]._toY = s + r, o.particles[i].startPos.x = l, o.particles[i].startPos.y = s, o.particles[i]._spring._anchor.x = l + a, o.particles[i]._spring._anchor.y = s + r, o.particles[i]._particle._position.x = l + a, o.particles[i]._particle._position.y = s + r, t += n
                    }
                }, o.update = function () {
                    for (var e = pe.getMouse().x ? pe.getMouse().x : o.app.screen.width / 2, t = pe.getMouse().y ? pe.getMouse().y : o.app.screen.height / 2, n = 0, a = o.particles.length; n < a; n += 1) o.particles[n]._update(e, t), o.particles[n]._toX = o.particles[n].startPos.x + e, o.particles[n]._toY = o.particles[n].startPos.y + t, o.particles[n]._spring._anchor.x += .75 * (o.particles[n]._toX - o.particles[n]._spring._anchor.x), o.particles[n]._spring._anchor.y += .75 * (o.particles[n]._toY - o.particles[n]._spring._anchor.y), o.progressIndex > n && !o.particles[n]._isLoaded && o.particles[n]._particle._loaded();
                    o.text.x += .075 * (e - o.text.width / 2 - o.text.x), o.text.y += .075 * (t - o.text.height / 2 - o.text.y)
                }, o.onResize = function (e, t) {
                    o.windowWidth = e, o.windowHeight = t, o.app.renderer.resize(o.windowWidth, o.windowHeight)
                }, o.destroy = function () {
                    o.app.ticker.remove(o.update), o.container.destroy(), o.app.destroy(!0)
                }, n))
            }
            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && no(e, t)
            }(t, r["PureComponent"]), n = t, (o = [{
                key: "componentDidMount",
                value: function () {
                    var e = this,
                        t = this.props.dispatchFetchWorks;
                    this.addPIXIApp(), this.addParticles(), this.distributeInCircle(), t().then(function () {
                        return e.init()
                    }), window.addEventListener("click", this.unlockAudio)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function (e) {
                    var t = this.props,
                        n = t.windowWidth,
                        o = t.windowHeight,
                        a = e.windowWidth,
                        r = e.windowHeight;
                    a === n && r === o || this.onResize(n, o)
                }
            }, {
                key: "componentWillUnmount",
                value: function () {
                    this.destroy()
                }
            }, {
                key: "render",
                value: function () {
                    var e = this;
                    return i.a.createElement("div", {
                        className: "Preloader ".concat(Kn.a.host),
                        ref: function (t) {
                            e.host = t
                        }
                    }, i.a.createElement("audio", {
                        ref: function (t) {
                            e.audio = t
                        }, preload: "auto"
                    }, i.a.createElement("source", {
                        src: Xn.a,
                        type: "audio/mpeg"
                    })), i.a.createElement("audio", {
                        ref: this.onAudioRef,
                        src: Qn.a
                    }))
                }
            }]) && $n(n.prototype, o), a && $n(n, a), t
        }();
        oo.mapStateToProps = function (e) {
            return {
                works: e.general.works,
                windowWidth: e.platform.windowWidth,
                windowHeight: e.platform.windowHeight
            }
        }, oo.mapDispatchToProps = {
            dispatchFetchWorks: function () {
                return $e()
            }, dispatchSetPreloaded: function (e) {
                return function (e) {
                    return {
                        type: R.PRELOADED,
                        preloaded: e
                    }
                }(e)
            }
        }, oo.propTypes = {
            works: p.a.array.isRequired,
            windowWidth: p.a.number.isRequired,
            windowHeight: p.a.number.isRequired,
            dispatchFetchWorks: p.a.func.isRequired,
            dispatchSetPreloaded: p.a.func.isRequired
        };
        var ao = Object(l.c)(oo.mapStateToProps, oo.mapDispatchToProps)(oo);

        function ro(e) {
            return (ro = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function io(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function lo(e, t) {
            return !t || "object" !== ro(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function so(e) {
            return (so = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function co(e, t) {
            return (co = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var uo = function (e) {
            function t() {
                var e, n, o;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                return lo(o, (n = o = lo(this, (e = so(t)).call.apply(e, [this].concat(r))), o.elements = [], o.onNavigate = function (e) {
                    (0, o.props.navigateTo)(e.target.dataset.url)
                }, o.setupResize = function () {
                    window.addEventListener("resize", o.onResize), window.addEventListener("orientationchange", o.onResize), window.addEventListener("visibilitychange", o.onResize)
                }, o.onResize = function () {
                    I.dispatch(N()), o.fixAppContainerHeight()
                }, o.fixAppContainerHeight = function () {
                    var e = I.getState().platform;
                    document.body.querySelector("#app-container").style.minHeight = "".concat(e.windowHeight, "px")
                }, o.setRef = function (e) {
                    e && (e.dataset ? o.elements[e.dataset.ref] = e : o.elements[e.props["data-ref"]] = e)
                }, n))
            }
            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && co(e, t)
            }(t, r["PureComponent"]), n = t, (o = [{
                key: "componentDidMount",
                value: function () {
                    "production" === window.env.ENV ? bn.log() : window.env.ENV, this.setupResize()
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.preloaded,
                        n = e.location,
                        o = i.a.createElement(r.Fragment, null, i.a.createElement(st, null), i.a.createElement(m.a, {
                            component: "span"
                        }, -1 !== n.pathname.indexOf("/work/") && i.a.createElement(vn, {
                            key: n.pathname,
                            pathname: n.pathname
                        })), i.a.createElement(m.a, {
                            component: "span"
                        }, -1 !== n.pathname.indexOf("/about") && i.a.createElement(Ut, {
                            key: n.pathname
                        })), i.a.createElement(h.d, null, i.a.createElement(h.b, {
                            key: "about",
                            exact: !0,
                            path: "/about"
                        }), i.a.createElement(h.b, {
                            key: "work",
                            exact: !0,
                            path: "/work/:slug"
                        }), i.a.createElement(h.a, {
                            from: "/:other",
                            to: "/"
                        })));
                    return t || (o = i.a.createElement(ao, null)), i.a.createElement("div", {
                        className: "App ".concat(On.a.host)
                    }, i.a.createElement(X, {
                        ref: this.setRef,
                        "data-ref": "header"
                    }), i.a.createElement("section", {
                        className: On.a.section,
                        key: "section"
                    }, o))
                }
            }]) && io(n.prototype, o), a && io(n, a), t
        }();
        uo.mapPropsToState = function (e) {
            return {
                preloaded: e.general.preloaded
            }
        }, uo.mapDispatchToProps = function (e) {
            return {
                navigateTo: function (t) {
                    return e(Object(f.d)(t))
                }
            }
        }, uo.propTypes = {
            preloaded: u.PropTypes.bool.isRequired,
            navigateTo: u.PropTypes.func.isRequired,
            location: u.PropTypes.object.isRequired
        };
        var po = Object(h.f)(Object(l.c)(uo.mapPropsToState, uo.mapDispatchToProps)(uo)),
            ho = (n(677), {
                custom: {
                    families: ["Teko", "IBM Plex Sans:n1,n4,n5,n6,n7"]
                },
                active: function () {
                    Object(s.render)(i.a.createElement(l.a, {
                        store: I
                    }, i.a.createElement(c.a, {
                        history: T
                    }, i.a.createElement(po, null))), document.getElementById("app-container"))
                }
            });
        a.a.load(ho)
    }, 79: function (e, t, n) {
        (function (n) {
            var o, a, r, i = e.exports && void 0 !== n ? n : this || window;
            /*!
             * VERSION: 0.5.8
             * DATE: 2017-08-22
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
             * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
             * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
             * This work is subject to the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             */
            ! function (e) {
                "use strict";
                var t = e.GreenSockGlobals || e,
                    n = function (e) {
                        var n, o = e.split("."),
                            a = t;
                        for (n = 0; n < o.length; n++) a[o[n]] = a = a[o[n]] || {};
                        return a
                    }("com.greensock.utils"),
                    o = document,
                    a = o.defaultView ? o.defaultView.getComputedStyle : function () {},
                    r = /([A-Z])/g,
                    i = function (e, t, n, o) {
                        var i;
                        return (n = n || a(e, null)) ? i = (e = n.getPropertyValue(t.replace(r, "-$1").toLowerCase())) || n.length ? e : n[t] : e.currentStyle && (i = (n = e.currentStyle)[t]), o ? i : parseInt(i, 10) || 0
                    },
                    l = function (e) {
                        return !!(e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
                    },
                    s = /(?:\r|\n|\t\t)/g,
                    c = /(?:\s\s+)/g,
                    u = 127462,
                    p = 127487,
                    h = function (e) {
                        return (e.charCodeAt(0) - 55296 << 10) + (e.charCodeAt(1) - 56320) + 65536
                    },
                    f = " style='position:relative;display:inline-block;" + (o.all && !o.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
                    d = function (e, t) {
                        var n = -1 !== (e = e || "").indexOf("++"),
                            o = 1;
                        return n && (e = e.split("++").join("")),
                            function () {
                                return "<" + t + f + (e ? " class='" + e + (n ? o++ : "") + "'>" : ">")
                            }
                    },
                    m = n.SplitText = t.SplitText = function (e, t) {
                        if ("string" == typeof e && (e = m.selector(e)), !e) throw "cannot split a null element.";
                        this.elements = l(e) ? function (e) {
                            var t, n, o, a = [],
                                r = e.length;
                            for (t = 0; r > t; t++)
                                if (n = e[t], l(n))
                                    for (o = n.length, o = 0; o < n.length; o++) a.push(n[o]);
                                else a.push(n);
                            return a
                        }(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
                    },
                    y = function e(t, n, o) {
                        var a = t.nodeType;
                        if (1 === a || 9 === a || 11 === a)
                            for (t = t.firstChild; t; t = t.nextSibling) e(t, n, o);
                        else(3 === a || 4 === a) && (t.nodeValue = t.nodeValue.split(n).join(o))
                    },
                    v = function (e, t) {
                        for (var n = t.length; --n > -1;) e.push(t[n])
                    },
                    g = function (e) {
                        var t, n = [],
                            o = e.length;
                        for (t = 0; t !== o; n.push(e[t++]));
                        return n
                    },
                    b = function (e, t, n) {
                        for (var o; e && e !== t;) {
                            if (o = e._next || e.nextSibling) return o.textContent.charAt(0) === n;
                            e = e.parentNode || e._parent
                        }
                        return !1
                    },
                    _ = function e(t) {
                        var n, o, a = g(t.childNodes),
                            r = a.length;
                        for (n = 0; r > n; n++)(o = a[n])._isSplit ? e(o) : (n && 3 === o.previousSibling.nodeType ? o.previousSibling.nodeValue += 3 === o.nodeType ? o.nodeValue : o.firstChild.nodeValue : 3 !== o.nodeType && t.insertBefore(o.firstChild, o), t.removeChild(o))
                    },
                    w = function (e, t, n, r, l, s, c) {
                        var u, p, h, f, d, m, g, w, E, x, O, P, S = a(e),
                            M = i(e, "paddingLeft", S),
                            R = -999,
                            C = i(e, "borderBottomWidth", S) + i(e, "borderTopWidth", S),
                            T = i(e, "borderLeftWidth", S) + i(e, "borderRightWidth", S),
                            A = i(e, "paddingTop", S) + i(e, "paddingBottom", S),
                            L = i(e, "paddingLeft", S) + i(e, "paddingRight", S),
                            k = .2 * i(e, "fontSize"),
                            I = i(e, "textAlign", S, !0),
                            N = [],
                            F = [],
                            j = [],
                            z = t.wordDelimiter || " ",
                            D = t.span ? "span" : "div",
                            H = t.type || t.split || "chars,words,lines",
                            W = l && -1 !== H.indexOf("lines") ? [] : null,
                            B = -1 !== H.indexOf("words"),
                            G = -1 !== H.indexOf("chars"),
                            U = "absolute" === t.position || !0 === t.absolute,
                            V = t.linesClass,
                            Y = -1 !== (V || "").indexOf("++"),
                            X = [];
                        for (W && 1 === e.children.length && e.children[0]._isSplit && (e = e.children[0]), Y && (V = V.split("++").join("")), h = (p = e.getElementsByTagName("*")).length, d = [], u = 0; h > u; u++) d[u] = p[u];
                        if (W || U)
                            for (u = 0; h > u; u++)((m = (f = d[u]).parentNode === e) || U || G && !B) && (P = f.offsetTop, W && m && Math.abs(P - R) > k && ("BR" !== f.nodeName || 0 === u) && (g = [], W.push(g), R = P), U && (f._x = f.offsetLeft, f._y = P, f._w = f.offsetWidth, f._h = f.offsetHeight), W && ((f._isSplit && m || !G && m || B && m || !B && f.parentNode.parentNode === e && !f.parentNode._isSplit) && (g.push(f), f._x -= M, b(f, e, z) && (f._wordEnd = !0)), "BR" === f.nodeName && (f.nextSibling && "BR" === f.nextSibling.nodeName || 0 === u) && W.push([])));
                        for (u = 0; h > u; u++) m = (f = d[u]).parentNode === e, "BR" !== f.nodeName ? (U && (E = f.style, B || m || (f._x += f.parentNode._x, f._y += f.parentNode._y), E.left = f._x + "px", E.top = f._y + "px", E.position = "absolute", E.display = "block", E.width = f._w + 1 + "px", E.height = f._h + "px"), !B && G ? f._isSplit ? (f._next = f.nextSibling, f.parentNode.appendChild(f)) : f.parentNode._isSplit ? (f._parent = f.parentNode, !f.previousSibling && f.firstChild && (f.firstChild._isFirst = !0), f.nextSibling && " " === f.nextSibling.textContent && !f.nextSibling.nextSibling && X.push(f.nextSibling), f._next = f.nextSibling && f.nextSibling._isFirst ? null : f.nextSibling, f.parentNode.removeChild(f), d.splice(u--, 1), h--) : m || (P = !f.nextSibling && b(f.parentNode, e, z), f.parentNode._parent && f.parentNode._parent.appendChild(f), P && f.parentNode.appendChild(o.createTextNode(" ")), t.span && (f.style.display = "inline"), N.push(f)) : f.parentNode._isSplit && !f._isSplit && "" !== f.innerHTML ? F.push(f) : G && !f._isSplit && (t.span && (f.style.display = "inline"), N.push(f))) : W || U ? (f.parentNode && f.parentNode.removeChild(f), d.splice(u--, 1), h--) : B || e.appendChild(f);
                        for (u = X.length; --u > -1;) X[u].parentNode.removeChild(X[u]);
                        if (W) {
                            for (U && (x = o.createElement(D), e.appendChild(x), O = x.offsetWidth + "px", P = x.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(x)), E = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                            for (w = " " === z && (!U || !B && !G), u = 0; u < W.length; u++) {
                                for (g = W[u], (x = o.createElement(D)).style.cssText = "display:block;text-align:" + I + ";position:" + (U ? "absolute;" : "relative;"), V && (x.className = V + (Y ? u + 1 : "")), j.push(x), h = g.length, p = 0; h > p; p++) "BR" !== g[p].nodeName && (f = g[p], x.appendChild(f), w && f._wordEnd && x.appendChild(o.createTextNode(" ")), U && (0 === p && (x.style.top = f._y + "px", x.style.left = M + P + "px"), f.style.top = "0px", P && (f.style.left = f._x - P + "px")));
                                0 === h ? x.innerHTML = "&nbsp;" : B || G || (_(x), y(x, String.fromCharCode(160), " ")), U && (x.style.width = O, x.style.height = f._h + "px"), e.appendChild(x)
                            }
                            e.style.cssText = E
                        }
                        U && (c > e.clientHeight && (e.style.height = c - A + "px", e.clientHeight < c && (e.style.height = c + C + "px")), s > e.clientWidth && (e.style.width = s - L + "px", e.clientWidth < s && (e.style.width = s + T + "px"))), v(n, N), v(r, F), v(l, j)
                    },
                    E = function (e, t, n, a) {
                        var r, i, l, f, d, m, v, g, b, _ = t.span ? "span" : "div",
                            w = -1 !== (t.type || t.split || "chars,words,lines").indexOf("chars"),
                            E = "absolute" === t.position || !0 === t.absolute,
                            x = t.wordDelimiter || " ",
                            O = " " !== x ? "" : E ? "&#173; " : " ",
                            P = t.span ? "</span>" : "</div>",
                            S = !0,
                            M = o.createElement("div"),
                            R = e.parentNode;
                        for (R.insertBefore(M, e), M.textContent = e.nodeValue, R.removeChild(e), v = -1 !== (r = function e(t) {
                            var n = t.nodeType,
                                o = "";
                            if (1 === n || 9 === n || 11 === n) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) o += e(t)
                            } else if (3 === n || 4 === n) return t.nodeValue;
                            return o
                        }(e = M)).indexOf("<"), !1 !== t.reduceWhiteSpace && (r = r.replace(c, " ").replace(s, "")), v && (r = r.split("<").join("{{LT}}")), d = r.length, i = (" " === r.charAt(0) ? O : "") + n(), l = 0; d > l; l++)
                            if ((m = r.charAt(l)) === x && r.charAt(l - 1) !== x && l) {
                                for (i += S ? P : "", S = !1; r.charAt(l + 1) === x;) i += O, l++;
                                l === d - 1 ? i += O : ")" !== r.charAt(l + 1) && (i += O + n(), S = !0)
                            } else "{" === m && "{{LT}}" === r.substr(l, 6) ? (i += w ? a() + "{{LT}}</" + _ + ">" : "{{LT}}", l += 5) : m.charCodeAt(0) >= 55296 && m.charCodeAt(0) <= 56319 || r.charCodeAt(l + 1) >= 65024 && r.charCodeAt(l + 1) <= 65039 ? (g = h(r.substr(l, 2)), b = h(r.substr(l + 2, 2)), f = (u > g || g > p || u > b || b > p) && (127995 > b || b > 127999) ? 2 : 4, i += w && " " !== m ? a() + r.substr(l, f) + "</" + _ + ">" : r.substr(l, f), l += f - 1) : i += w && " " !== m ? a() + m + "</" + _ + ">" : m;
                        e.outerHTML = i + (S ? P : ""), v && y(R, "{{LT}}", "<")
                    },
                    x = function e(t, n, o, a) {
                        var r, l, s = g(t.childNodes),
                            c = s.length,
                            u = "absolute" === n.position || !0 === n.absolute;
                        if (3 !== t.nodeType || c > 1) {
                            for (n.absolute = !1, r = 0; c > r; r++)(3 !== (l = s[r]).nodeType || /\S+/.test(l.nodeValue)) && (u && 3 !== l.nodeType && "inline" === i(l, "display", null, !0) && (l.style.display = "inline-block", l.style.position = "relative"), l._isSplit = !0, e(l, n, o, a));
                            return n.absolute = u, void(t._isSplit = !0)
                        }
                        E(t, n, o, a)
                    },
                    O = m.prototype;
                O.split = function (e) {
                    this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                    for (var t, n, o, a = this.elements.length, r = e.span ? "span" : "div", i = d(e.wordsClass, r), l = d(e.charsClass, r); --a > -1;) o = this.elements[a], this._originals[a] = o.innerHTML, t = o.clientHeight, n = o.clientWidth, x(o, e, i, l), w(o, e, this.chars, this.words, this.lines, n, t);
                    return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
                }, O.revert = function () {
                    if (!this._originals) throw "revert() call wasn't scoped properly.";
                    for (var e = this._originals.length; --e > -1;) this.elements[e].innerHTML = this._originals[e];
                    return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
                }, m.selector = e.$ || e.jQuery || function (t) {
                    var n = e.$ || e.jQuery;
                    return n ? (m.selector = n, n(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                }, m.version = "0.5.8"
            }(i),
            function (n) {
                "use strict";
                var l = function () {
                    return (i.GreenSockGlobals || i).SplitText
                };
                e.exports ? e.exports = l() : (a = [], void 0 === (r = "function" == typeof (o = l) ? o.apply(t, a) : o) || (e.exports = r))
            }()
        }).call(this, n(23))
    }, 81: function (e, t) {
        e.exports = {
            host: "host--21x3k",
            st0: "st0--3FMtb",
            st1: "st1--2MSA-",
            label: "label--1UYcj"
        }
    }, 97: function (e, t, n) {
        e.exports = n.p + "static/assets/images/about-face-top.7ee36242.png"
    }, 98: function (e, t, n) {
        e.exports = n.p + "static/assets/images/about-face-mid.0a798f4c.png"
    }, 99: function (e, t, n) {
        e.exports = n.p + "static/assets/images/about-face-bottom.5f83b1f7.png"
    }
});