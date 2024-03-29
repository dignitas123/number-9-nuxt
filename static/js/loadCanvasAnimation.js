; (function () {
  if (window.screen.width > 780) {
    /*!
     * VERSION: beta 1.9.4
     * DATE: 2014-07-17
     * UPDATES AND DOCS AT: http://www.greensock.com
     *
     * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
     * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    const _gsScope =
      typeof module !== "undefined" &&
        module.exports &&
        typeof global !== "undefined"
        ? global
        : this || window
      ; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict"
        _gsScope._gsDefine(
          "easing.Back",
          ["easing.Ease"],
          function (t) {
            let e
            let i
            let s
            const r = _gsScope.GreenSockGlobals || _gsScope
            const n = r.com.greensock
            const a = 2 * Math.PI
            const o = Math.PI / 2
            const h = n._class
            const l = function (e, i) {
              const s = h("easing." + e, function () { }, !0)
              const r = (s.prototype = new t())
              return (r.constructor = s), (r.getRatio = i), s
            }
            const _ = t.register || function () { }
            const u = function (t, e, i, s) {
              const r = h(
                "easing." + t,
                {
                  easeOut: new e(),
                  easeIn: new i(),
                  easeInOut: new s(),
                },
                !0
              )
              return _(r, t), r
            }
            const c = function (t, e, i) {
              ; (this.t = t),
                (this.v = e),
                i &&
                ((this.next = i),
                  (i.prev = this),
                  (this.c = i.v - e),
                  (this.gap = i.t - t))
            }
            const p = function (e, i) {
              const s = h(
                "easing." + e,
                function (t) {
                  ; (this._p1 = t || t === 0 ? t : 1.70158),
                    (this._p2 = 1.525 * this._p1)
                },
                !0
              )
              const r = (s.prototype = new t())
              return (
                (r.constructor = s),
                (r.getRatio = i),
                (r.config = function (t) {
                  return new s(t)
                }),
                s
              )
            }
            const f = u(
              "Back",
              p("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
              }),
              p("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
              }),
              p("BackInOut", function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                  : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
              })
            )
            const m = h(
              "easing.SlowMo",
              function (t, e, i) {
                ; (e = e || e === 0 ? e : 0.7),
                  t == null ? (t = 0.7) : t > 1 && (t = 1),
                  (this._p = t !== 1 ? e : 0),
                  (this._p1 = (1 - t) / 2),
                  (this._p2 = t),
                  (this._p3 = this._p1 + this._p2),
                  (this._calcEnd = i === !0)
              },
              !0
            )
            let d = (m.prototype = new t())
            return (
              (d.constructor = m),
              (d.getRatio = function (t) {
                const e = t + (0.5 - t) * this._p
                return this._p1 > t
                  ? this._calcEnd
                    ? 1 - (t = 1 - t / this._p1) * t
                    : e - (t = 1 - t / this._p1) * t * t * t * e
                  : t > this._p3
                    ? this._calcEnd
                      ? 1 - (t = (t - this._p3) / this._p1) * t
                      : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                    : this._calcEnd
                      ? 1
                      : e
              }),
              (m.ease = new m(0.7, 0.7)),
              (d.config = m.config = function (t, e, i) {
                return new m(t, e, i)
              }),
              (e = h(
                "easing.SteppedEase",
                function (t) {
                  ; (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + 1)
                },
                !0
              )),
              (d = e.prototype = new t()),
              (d.constructor = e),
              (d.getRatio = function (t) {
                return (
                  t < 0 ? (t = 0) : t >= 1 && (t = 0.999999999),
                  ((this._p2 * t) >> 0) * this._p1
                )
              }),
              (d.config = e.config = function (t) {
                return new e(t)
              }),
              (i = h(
                "easing.RoughEase",
                function (e) {
                  e = e || {}
                  for (
                    var i,
                    s,
                    r,
                    n,
                    a,
                    o,
                    h = e.taper || "none",
                    l = [],
                    _ = 0,
                    u = 0 | (e.points || 20),
                    p = u,
                    f = e.randomize !== !1,
                    m = e.clamp === !0,
                    d = e.template instanceof t ? e.template : null,
                    g = typeof e.strength === "number" ? 0.4 * e.strength : 0.4;
                    --p > -1;

                  )
                    (i = f ? Math.random() : (1 / u) * p),
                      (s = d ? d.getRatio(i) : i),
                      h === "none"
                        ? (r = g)
                        : h === "out"
                          ? ((n = 1 - i), (r = n * n * g))
                          : h === "in"
                            ? (r = i * i * g)
                            : i < 0.5
                              ? ((n = 2 * i), (r = 0.5 * n * n * g))
                              : ((n = 2 * (1 - i)), (r = 0.5 * n * n * g)),
                      f
                        ? (s += Math.random() * r - 0.5 * r)
                        : p % 2
                          ? (s += 0.5 * r)
                          : (s -= 0.5 * r),
                      m && (s > 1 ? (s = 1) : s < 0 && (s = 0)),
                      (l[_++] = { x: i, y: s })
                  for (
                    l.sort(function (t, e) {
                      return t.x - e.x
                    }),
                    o = new c(1, 1, null),
                    p = u;
                    --p > -1;

                  )
                    (a = l[p]), (o = new c(a.x, a.y, o))
                  this._prev = new c(0, 0, o.t !== 0 ? o : o.next)
                },
                !0
              )),
              (d = i.prototype = new t()),
              (d.constructor = i),
              (d.getRatio = function (t) {
                let e = this._prev
                if (t > e.t) {
                  for (; e.next && t >= e.t;) e = e.next
                  e = e.prev
                } else for (; e.prev && e.t >= t;) e = e.prev
                return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c
              }),
              (d.config = function (t) {
                return new i(t)
              }),
              (i.ease = new i()),
              u(
                "Bounce",
                l("BounceOut", function (t) {
                  return 1 / 2.75 > t
                    ? 7.5625 * t * t
                    : 2 / 2.75 > t
                      ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                      : 2.5 / 2.75 > t
                        ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                        : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
                }),
                l("BounceIn", function (t) {
                  return 1 / 2.75 > (t = 1 - t)
                    ? 1 - 7.5625 * t * t
                    : 2 / 2.75 > t
                      ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                      : 2.5 / 2.75 > t
                        ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                        : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375)
                }),
                l("BounceInOut", function (t) {
                  const e = t < 0.5
                  return (
                    (t = e ? 1 - 2 * t : 2 * t - 1),
                    (t =
                      1 / 2.75 > t
                        ? 7.5625 * t * t
                        : 2 / 2.75 > t
                          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                          : 2.5 / 2.75 > t
                            ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                            : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                    e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                  )
                })
              ),
              u(
                "Circ",
                l("CircOut", function (t) {
                  return Math.sqrt(1 - (t -= 1) * t)
                }),
                l("CircIn", function (t) {
                  return -(Math.sqrt(1 - t * t) - 1)
                }),
                l("CircInOut", function (t) {
                  return (t *= 2) < 1
                    ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                    : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })
              ),
              (s = function (e, i, s) {
                const r = h(
                  "easing." + e,
                  function (t, e) {
                    ; (this._p1 = t || 1),
                      (this._p2 = e || s),
                      (this._p3 = (this._p2 / a) * (Math.asin(1 / this._p1) || 0))
                  },
                  !0
                )
                const n = (r.prototype = new t())
                return (
                  (n.constructor = r),
                  (n.getRatio = i),
                  (n.config = function (t, e) {
                    return new r(t, e)
                  }),
                  r
                )
              }),
              u(
                "Elastic",
                s(
                  "ElasticOut",
                  function (t) {
                    return (
                      this._p1 *
                      Math.pow(2, -10 * t) *
                      Math.sin(((t - this._p3) * a) / this._p2) +
                      1
                    )
                  },
                  0.3
                ),
                s(
                  "ElasticIn",
                  function (t) {
                    return -(
                      this._p1 *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin(((t - this._p3) * a) / this._p2)
                    )
                  },
                  0.3
                ),
                s(
                  "ElasticInOut",
                  function (t) {
                    return (t *= 2) < 1
                      ? -0.5 *
                      this._p1 *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin(((t - this._p3) * a) / this._p2)
                      : 0.5 *
                      this._p1 *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin(((t - this._p3) * a) / this._p2) +
                      1
                  },
                  0.45
                )
              ),
              u(
                "Expo",
                l("ExpoOut", function (t) {
                  return 1 - Math.pow(2, -10 * t)
                }),
                l("ExpoIn", function (t) {
                  return Math.pow(2, 10 * (t - 1)) - 0.001
                }),
                l("ExpoInOut", function (t) {
                  return (t *= 2) < 1
                    ? 0.5 * Math.pow(2, 10 * (t - 1))
                    : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))
                })
              ),
              u(
                "Sine",
                l("SineOut", function (t) {
                  return Math.sin(t * o)
                }),
                l("SineIn", function (t) {
                  return -Math.cos(t * o) + 1
                }),
                l("SineInOut", function (t) {
                  return -0.5 * (Math.cos(Math.PI * t) - 1)
                })
              ),
              h(
                "easing.EaseLookup",
                {
                  find(e) {
                    return t.map[e]
                  },
                },
                !0
              ),
              _(r.SlowMo, "SlowMo", "ease,"),
              _(i, "RoughEase", "ease,"),
              _(e, "SteppedEase", "ease,"),
              f
            )
          },
          !0
        )
      }),
        _gsScope._gsDefine && _gsScope._gsQueue.pop()()

      /*!
       * VERSION: 1.13.1
       * DATE: 2014-07-22
       * UPDATES AND DOCS AT: http://www.greensock.com
       *
       * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
       * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
       * Club GreenSock members, the software agreement that was issued with your membership.
       *
       * @author: Jack Doyle, jack@greensock.com
       */
      ; (function (t, e) {
        "use strict"
        const i = (t.GreenSockGlobals = t.GreenSockGlobals || t)
        if (!i.TweenLite) {
          let s
          let n
          let r
          let a
          let o
          const l = function (t) {
            let e
            const s = t.split(".")
            let n = i
            for (e = 0; s.length > e; e++) n[s[e]] = n = n[s[e]] || {}
            return n
          }
          const h = l("com.greensock")
          const _ = 1e-10
          const u = function (t) {
            let e
            const i = []
            const s = t.length
            for (e = 0; e !== s; i.push(t[e++]));
            return i
          }
          const f = function () { }
          const m = (function () {
            const t = Object.prototype.toString
            const e = t.call([])
            return function (i) {
              return (
                i != null &&
                (Array.isArray(i) ||
                  (typeof i === "object" && !!i.push && t.call(i) === e))
              )
            }
          })()
          const p = {}
          var c = function (s, n, r, a) {
            ; (this.sc = p[s] ? p[s].sc : []),
              (p[s] = this),
              (this.gsClass = null),
              (this.func = r)
            const o = []
              ; (this.check = function (h) {
                for (var _, u, f, m, d = n.length, v = d; --d > -1;)
                  (_ = p[n[d]] || new c(n[d], [])).gsClass
                    ? ((o[d] = _.gsClass), v--)
                    : h && _.sc.push(this)
                if (v === 0 && r)
                  for (
                    u = ("com.greensock." + s).split("."),
                    f = u.pop(),
                    m = l(u.join("."))[f] = this.gsClass = r.apply(r, o),
                    a &&
                    ((i[f] = m),
                      typeof define === "function" && define.amd
                        ? define((t.GreenSockAMDPath
                          ? t.GreenSockAMDPath + "/"
                          : "") + s.split(".").pop(), [], function () {
                            return m
                          })
                        : s === e &&
                        typeof module !== "undefined" &&
                        module.exports &&
                        (module.exports = m)),
                    d = 0;
                    this.sc.length > d;
                    d++
                  )
                    this.sc[d].check()
              }),
                this.check(!0)
          }
          const d = (t._gsDefine = function (t, e, i, s) {
            return new c(t, e, i, s)
          })
          const v = (h._class = function (t, e, i) {
            return (
              (e = e || function () { }),
              d(
                t,
                [],
                function () {
                  return e
                },
                i
              ),
              e
            )
          })
          d.globals = i
          const g = [0, 0, 1, 1]
          const T = []
          const y = v(
            "easing.Ease",
            function (t, e, i, s) {
              ; (this._func = t),
                (this._type = i || 0),
                (this._power = s || 0),
                (this._params = e ? g.concat(e) : g)
            },
            !0
          )
          const w = (y.map = {})
          const P = (y.register = function (t, e, i, s) {
            for (
              var n,
              r,
              a,
              o,
              l = e.split(","),
              _ = l.length,
              u = (i || "easeIn,easeOut,easeInOut").split(",");
              --_ > -1;

            )
              for (
                r = l[_],
                n = s ? v("easing." + r, null, !0) : h.easing[r] || {},
                a = u.length;
                --a > -1;

              )
                (o = u[a]),
                  (w[r + "." + o] = w[o + r] = n[o] = t.getRatio
                    ? t
                    : t[o] || new t())
          })
          for (
            r = y.prototype,
            r._calcEnd = !1,
            r.getRatio = function (t) {
              if (this._func)
                return (
                  (this._params[0] = t), this._func.apply(null, this._params)
                )
              const e = this._type
              const i = this._power
              let s =
                e === 1 ? 1 - t : e === 2 ? t : t < 0.5 ? 2 * t : 2 * (1 - t)
              return (
                i === 1
                  ? (s *= s)
                  : i === 2
                    ? (s *= s * s)
                    : i === 3
                      ? (s *= s * s * s)
                      : i === 4 && (s *= s * s * s * s),
                e === 1 ? 1 - s : e === 2 ? s : t < 0.5 ? s / 2 : 1 - s / 2
              )
            },
            s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
            n = s.length;
            --n > -1;

          )
            (r = s[n] + ",Power" + n),
              P(new y(null, null, 1, n), r, "easeOut", !0),
              P(
                new y(null, null, 2, n),
                r,
                "easeIn" + (n === 0 ? ",easeNone" : "")
              ),
              P(new y(null, null, 3, n), r, "easeInOut")
              ; (w.linear = h.easing.Linear.easeIn),
                (w.swing = h.easing.Quad.easeInOut)
          const b = v("events.EventDispatcher", function (t) {
            ; (this._listeners = {}), (this._eventTarget = t || this)
          })
            ; (r = b.prototype),
              (r.addEventListener = function (t, e, i, s, n) {
                n = n || 0
                let r
                let l
                let h = this._listeners[t]
                let _ = 0
                for (
                  h == null && (this._listeners[t] = h = []), l = h.length;
                  --l > -1;

                )
                  (r = h[l]),
                    r.c === e && r.s === i
                      ? h.splice(l, 1)
                      : _ === 0 && n > r.pr && (_ = l + 1)
                h.splice(_, 0, { c: e, s: i, up: s, pr: n }),
                  this !== a || o || a.wake()
              }),
              (r.removeEventListener = function (t, e) {
                let i
                const s = this._listeners[t]
                if (s)
                  for (i = s.length; --i > -1;)
                    if (s[i].c === e) return s.splice(i, 1), void 0
              }),
              (r.dispatchEvent = function (t) {
                let e
                let i
                let s
                const n = this._listeners[t]
                if (n)
                  for (e = n.length, i = this._eventTarget; --e > -1;)
                    (s = n[e]),
                      s.up
                        ? s.c.call(s.s || i, {
                          type: t,
                          target: i,
                        })
                        : s.c.call(s.s || i)
              })
          let k = t.requestAnimationFrame
          let A = t.cancelAnimationFrame
          const S =
            Date.now ||
            function () {
              return new Date().getTime()
            }
          let x = S()
          for (s = ["ms", "moz", "webkit", "o"], n = s.length; --n > -1 && !k;)
            (k = t[s[n] + "RequestAnimationFrame"]),
              (A =
                t[s[n] + "CancelAnimationFrame"] ||
                t[s[n] + "CancelRequestAnimationFrame"])
          v("Ticker", function (t, e) {
            let i
            let s
            let n
            let r
            let l
            const h = this
            let u = S()
            let m = e !== !1 && k
            let p = 500
            let c = 33
            var d = function (t) {
              let e
              let a
              const o = S() - x
              o > p && (u += o - c),
                (x += o),
                (h.time = (x - u) / 1e3),
                (e = h.time - l),
                (!i || e > 0 || t === !0) &&
                (h.frame++, (l += e + (e >= r ? 0.004 : r - e)), (a = !0)),
                t !== !0 && (n = s(d)),
                a && h.dispatchEvent("tick")
            }
            b.call(h),
              (h.time = h.frame = 0),
              (h.tick = function () {
                d(!0)
              }),
              (h.lagSmoothing = function (t, e) {
                ; (p = t || 1 / _), (c = Math.min(e, p, 0))
              }),
              (h.sleep = function () {
                n != null &&
                  (m && A ? A(n) : clearTimeout(n),
                    (s = f),
                    (n = null),
                    h === a && (o = !1))
              }),
              (h.wake = function () {
                n !== null ? h.sleep() : h.frame > 10 && (x = S() - p + 5),
                  (s =
                    i === 0
                      ? f
                      : m && k
                        ? k
                        : function (t) {
                          return setTimeout(t, 0 | (1e3 * (l - h.time) + 1))
                        }),
                  h === a && (o = !0),
                  d(2)
              }),
              (h.fps = function (t) {
                return arguments.length
                  ? ((i = t),
                    (r = 1 / (i || 60)),
                    (l = this.time + r),
                    h.wake(),
                    void 0)
                  : i
              }),
              (h.useRAF = function (t) {
                return arguments.length
                  ? (h.sleep(), (m = t), h.fps(i), void 0)
                  : m
              }),
              h.fps(t),
              setTimeout(function () {
                m && (!n || h.frame < 5) && h.useRAF(!1)
              }, 1500)
          }),
            (r = h.Ticker.prototype = new h.events.EventDispatcher()),
            (r.constructor = h.Ticker)
          const C = v("core.Animation", function (t, e) {
            if (
              ((this.vars = e = e || {}),
                (this._duration = this._totalDuration = t || 0),
                (this._delay = Number(e.delay) || 0),
                (this._timeScale = 1),
                (this._active = e.immediateRender === !0),
                (this.data = e.data),
                (this._reversed = e.reversed === !0),
                B)
            ) {
              o || a.wake()
              const i = this.vars.useFrames ? q : B
              i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
          })
            ; (a = C.ticker = new h.Ticker()),
              (r = C.prototype),
              (r._dirty = r._gc = r._initted = r._paused = !1),
              (r._totalTime = r._time = 0),
              (r._rawPrevTime = -1),
              (r._next = r._last = r._onUpdate = r._timeline = r.timeline = null),
              (r._paused = !1)
          var R = function () {
            o && S() - x > 2e3 && a.wake(), setTimeout(R, 2e3)
          }
          R(),
            (r.play = function (t, e) {
              return t != null && this.seek(t, e), this.reversed(!1).paused(!1)
            }),
            (r.pause = function (t, e) {
              return t != null && this.seek(t, e), this.paused(!0)
            }),
            (r.resume = function (t, e) {
              return t != null && this.seek(t, e), this.paused(!1)
            }),
            (r.seek = function (t, e) {
              return this.totalTime(Number(t), e !== !1)
            }),
            (r.restart = function (t, e) {
              return this.reversed(!1)
                .paused(!1)
                .totalTime(t ? -this._delay : 0, e !== !1, !0)
            }),
            (r.reverse = function (t, e) {
              return (
                t != null && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              )
            }),
            (r.render = function () { }),
            (r.invalidate = function () {
              return this
            }),
            (r.isActive = function () {
              let t
              const e = this._timeline
              const i = this._startTime
              return (
                !e ||
                (!this._gc &&
                  !this._paused &&
                  e.isActive() &&
                  (t = e.rawTime()) >= i &&
                  i + this.totalDuration() / this._timeScale > t)
              )
            }),
            (r._enabled = function (t, e) {
              return (
                o || a.wake(),
                (this._gc = !t),
                (this._active = this.isActive()),
                e !== !0 &&
                (t && !this.timeline
                  ? this._timeline.add(this, this._startTime - this._delay)
                  : !t && this.timeline && this._timeline._remove(this, !0)),
                !1
              )
            }),
            (r._kill = function () {
              return this._enabled(!1, !1)
            }),
            (r.kill = function (t, e) {
              return this._kill(t, e), this
            }),
            (r._uncache = function (t) {
              for (let e = t ? this : this.timeline; e;)
                (e._dirty = !0), (e = e.timeline)
              return this
            }),
            (r._swapSelfInParams = function (t) {
              for (var e = t.length, i = t.concat(); --e > -1;)
                t[e] === "{self}" && (i[e] = this)
              return i
            }),
            (r.eventCallback = function (t, e, i, s) {
              if ((t || "").substr(0, 2) === "on") {
                const n = this.vars
                if (arguments.length === 1) return n[t]
                e == null
                  ? delete n[t]
                  : ((n[t] = e),
                    (n[t + "Params"] =
                      m(i) && i.join("").includes("{self}")
                        ? this._swapSelfInParams(i)
                        : i),
                    (n[t + "Scope"] = s)),
                  t === "onUpdate" && (this._onUpdate = e)
              }
              return this
            }),
            (r.delay = function (t) {
              return arguments.length
                ? (this._timeline.smoothChildTiming &&
                  this.startTime(this._startTime + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay
            }),
            (r.duration = function (t) {
              return arguments.length
                ? ((this._duration = this._totalDuration = t),
                  this._uncache(!0),
                  this._timeline.smoothChildTiming &&
                  this._time > 0 &&
                  this._time < this._duration &&
                  t !== 0 &&
                  this.totalTime(this._totalTime * (t / this._duration), !0),
                  this)
                : ((this._dirty = !1), this._duration)
            }),
            (r.totalDuration = function (t) {
              return (
                (this._dirty = !1),
                arguments.length ? this.duration(t) : this._totalDuration
              )
            }),
            (r.time = function (t, e) {
              return arguments.length
                ? (this._dirty && this.totalDuration(),
                  this.totalTime(t > this._duration ? this._duration : t, e))
                : this._time
            }),
            (r.totalTime = function (t, e, i) {
              if ((o || a.wake(), !arguments.length)) return this._totalTime
              if (this._timeline) {
                if (
                  (t < 0 && !i && (t += this.totalDuration()),
                    this._timeline.smoothChildTiming)
                ) {
                  this._dirty && this.totalDuration()
                  const s = this._totalDuration
                  let n = this._timeline
                  if (
                    (t > s && !i && (t = s),
                      (this._startTime =
                        (this._paused ? this._pauseTime : n._time) -
                        (this._reversed ? s - t : t) / this._timeScale),
                      n._dirty || this._uncache(!1),
                      n._timeline)
                  )
                    for (; n._timeline;)
                      n._timeline._time !==
                        (n._startTime + n._totalTime) / n._timeScale &&
                        n.totalTime(n._totalTime, !0),
                        (n = n._timeline)
                }
                this._gc && this._enabled(!0, !1),
                  (this._totalTime !== t || this._duration === 0) &&
                  (this.render(t, e, !1), O.length && M())
              }
              return this
            }),
            (r.progress = r.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.duration() * t, e)
                : this._time / this.duration()
            }),
            (r.startTime = function (t) {
              return arguments.length
                ? (t !== this._startTime &&
                  ((this._startTime = t),
                    this.timeline &&
                    this.timeline._sortChildren &&
                    this.timeline.add(this, t - this._delay)),
                  this)
                : this._startTime
            }),
            (r.timeScale = function (t) {
              if (!arguments.length) return this._timeScale
              if (
                ((t = t || _), this._timeline && this._timeline.smoothChildTiming)
              ) {
                const e = this._pauseTime
                const i = e || e === 0 ? e : this._timeline.totalTime()
                this._startTime =
                  i - ((i - this._startTime) * this._timeScale) / t
              }
              return (this._timeScale = t), this._uncache(!1)
            }),
            (r.reversed = function (t) {
              return arguments.length
                ? (t != this._reversed &&
                  ((this._reversed = t),
                    this.totalTime(
                      this._timeline && !this._timeline.smoothChildTiming
                        ? this.totalDuration() - this._totalTime
                        : this._totalTime,
                      !0
                    )),
                  this)
                : this._reversed
            }),
            (r.paused = function (t) {
              if (!arguments.length) return this._paused
              if (t != this._paused && this._timeline) {
                o || t || a.wake()
                const e = this._timeline
                const i = e.rawTime()
                const s = i - this._pauseTime
                !t &&
                  e.smoothChildTiming &&
                  ((this._startTime += s), this._uncache(!1)),
                  (this._pauseTime = t ? i : null),
                  (this._paused = t),
                  (this._active = this.isActive()),
                  !t &&
                  s !== 0 &&
                  this._initted &&
                  this.duration() &&
                  this.render(
                    e.smoothChildTiming
                      ? this._totalTime
                      : (i - this._startTime) / this._timeScale,
                    !0,
                    !0
                  )
              }
              return this._gc && !t && this._enabled(!0, !1), this
            })
          const D = v("core.SimpleTimeline", function (t) {
            C.call(this, 0, t),
              (this.autoRemoveChildren = this.smoothChildTiming = !0)
          })
            ; (r = D.prototype = new C()),
              (r.constructor = D),
              (r.kill()._gc = !1),
              (r._first = r._last = null),
              (r._sortChildren = !1),
              (r.add = r.insert = function (t, e) {
                let i, s
                if (
                  ((t._startTime = Number(e || 0) + t._delay),
                    t._paused &&
                    this !== t._timeline &&
                    (t._pauseTime =
                      t._startTime +
                      (this.rawTime() - t._startTime) / t._timeScale),
                    t.timeline && t.timeline._remove(t, !0),
                    (t.timeline = t._timeline = this),
                    t._gc && t._enabled(!0, !0),
                    (i = this._last),
                    this._sortChildren)
                )
                  for (s = t._startTime; i && i._startTime > s;) i = i._prev
                return (
                  i
                    ? ((t._next = i._next), (i._next = t))
                    : ((t._next = this._first), (this._first = t)),
                  t._next ? (t._next._prev = t) : (this._last = t),
                  (t._prev = i),
                  this._timeline && this._uncache(!0),
                  this
                )
              }),
              (r._remove = function (t, e) {
                return (
                  t.timeline === this &&
                  (e || t._enabled(!1, !0),
                    t._prev
                      ? (t._prev._next = t._next)
                      : this._first === t && (this._first = t._next),
                    t._next
                      ? (t._next._prev = t._prev)
                      : this._last === t && (this._last = t._prev),
                    (t._next = t._prev = t.timeline = null),
                    this._timeline && this._uncache(!0)),
                  this
                )
              }),
              (r.render = function (t, e, i) {
                let s
                let n = this._first
                for (this._totalTime = this._time = this._rawPrevTime = t; n;)
                  (s = n._next),
                    (n._active || (t >= n._startTime && !n._paused)) &&
                    (n._reversed
                      ? n.render(
                        (n._dirty ? n.totalDuration() : n._totalDuration) -
                        (t - n._startTime) * n._timeScale,
                        e,
                        i
                      )
                      : n.render((t - n._startTime) * n._timeScale, e, i)),
                    (n = s)
              }),
              (r.rawTime = function () {
                return o || a.wake(), this._totalTime
              })
          var I = v(
            "TweenLite",
            function (e, i, s) {
              if (
                (C.call(this, i, s),
                  (this.render = I.prototype.render),
                  e == null)
              )
                throw "Cannot tween a null target."
              this.target = e = typeof e !== "string" ? e : I.selector(e) || e
              let n
              let r
              let a
              const o =
                e.jquery ||
                (e.length &&
                  e !== t &&
                  e[0] &&
                  (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType)))
              let l = this.vars.overwrite
              if (
                ((this._overwrite = l =
                  l == null
                    ? Q[I.defaultOverwrite]
                    : typeof l === "number"
                      ? l >> 0
                      : Q[l]),
                  (o || Array.isArray(e) || (e.push && m(e))) &&
                  typeof e[0] !== "number")
              )
                for (
                  this._targets = a = u(e),
                  this._propLookup = [],
                  this._siblings = [],
                  n = 0;
                  a.length > n;
                  n++
                )
                  (r = a[n]),
                    r
                      ? typeof r !== "string"
                        ? r.length &&
                          r !== t &&
                          r[0] &&
                          (r[0] === t ||
                            (r[0].nodeType && r[0].style && !r.nodeType))
                          ? (a.splice(n--, 1),
                            (this._targets = a = a.concat(u(r))))
                          : ((this._siblings[n] = $(r, this, !1)),
                            l === 1 &&
                            this._siblings[n].length > 1 &&
                            K(r, this, null, 1, this._siblings[n]))
                        : ((r = a[n--] = I.selector(r)),
                          typeof r === "string" && a.splice(n + 1, 1))
                      : a.splice(n--, 1)
              else
                (this._propLookup = {}),
                  (this._siblings = $(e, this, !1)),
                  l === 1 &&
                  this._siblings.length > 1 &&
                  K(e, this, null, 1, this._siblings)
                  ; (this.vars.immediateRender ||
                    (i === 0 &&
                      this._delay === 0 &&
                      this.vars.immediateRender !== !1)) &&
                    ((this._time = -_), this.render(-this._delay))
            },
            !0
          )
          const E = function (e) {
            return (
              e.length &&
              e !== t &&
              e[0] &&
              (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
            )
          }
          const z = function (t, e) {
            let i
            const s = {}
            for (i in t)
              G[i] ||
                (i in e &&
                  i !== "transform" &&
                  i !== "x" &&
                  i !== "y" &&
                  i !== "width" &&
                  i !== "height" &&
                  i !== "className" &&
                  i !== "border") ||
                !(!U[i] || (U[i] && U[i]._autoCSS)) ||
                ((s[i] = t[i]), delete t[i])
            t.css = s
          }
            ; (r = I.prototype = new C()),
              (r.constructor = I),
              (r.kill()._gc = !1),
              (r.ratio = 0),
              (r._firstPT = r._targets = r._overwrittenProps = r._startAt = null),
              (r._notifyPluginsOfEnabled = r._lazy = !1),
              (I.version = "1.13.1"),
              (I.defaultEase = r._ease = new y(null, null, 1, 1)),
              (I.defaultOverwrite = "auto"),
              (I.ticker = a),
              (I.autoSleep = !0),
              (I.lagSmoothing = function (t, e) {
                a.lagSmoothing(t, e)
              }),
              (I.selector =
                t.$ ||
                t.jQuery ||
                function (e) {
                  const i = t.$ || t.jQuery
                  return i
                    ? ((I.selector = i), i(e))
                    : typeof document === "undefined"
                      ? e
                      : document.querySelectorAll
                        ? document.querySelectorAll(e)
                        : document.getElementById(e.charAt(0) === "#" ? e.substr(1) : e)
                })
          var O = []
          let L = {}
          const N = (I._internals = {
            isArray: m,
            isSelector: E,
            lazyTweens: O,
          })
          var U = (I._plugins = {})
          const F = (N.tweenLookup = {})
          let j = 0
          var G = (N.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
          })
          var Q = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            true: 1,
            false: 0,
          }
          var q = (C._rootFramesTimeline = new D())
          var B = (C._rootTimeline = new D())
          var M = (N.lazyRender = function () {
            let t = O.length
            for (L = {}; --t > -1;)
              (s = O[t]),
                s && s._lazy !== !1 && (s.render(s._lazy, !1, !0), (s._lazy = !1))
            O.length = 0
          })
            ; (B._startTime = a.time),
              (q._startTime = a.frame),
              (B._active = q._active = !0),
              setTimeout(M, 1),
              (C._updateRoot = I.render = function () {
                let t, e, i
                if (
                  (O.length && M(),
                    B.render((a.time - B._startTime) * B._timeScale, !1, !1),
                    q.render((a.frame - q._startTime) * q._timeScale, !1, !1),
                    O.length && M(),
                    !(a.frame % 120))
                ) {
                  for (i in F) {
                    for (e = F[i].tweens, t = e.length; --t > -1;)
                      e[t]._gc && e.splice(t, 1)
                    e.length === 0 && delete F[i]
                  }
                  if (
                    ((i = B._first),
                      (!i || i._paused) &&
                      I.autoSleep &&
                      !q._first &&
                      a._listeners.tick.length === 1)
                  ) {
                    for (; i && i._paused;) i = i._next
                    i || a.sleep()
                  }
                }
              }),
              a.addEventListener("tick", C._updateRoot)
          var $ = function (t, e, i) {
            let s
            let n
            let r = t._gsTweenID
            if (
              (F[r || (t._gsTweenID = r = "t" + j++)] ||
                (F[r] = { target: t, tweens: [] }),
                e && ((s = F[r].tweens), (s[(n = s.length)] = e), i))
            )
              for (; --n > -1;) s[n] === e && s.splice(n, 1)
            return F[r].tweens
          }
          var K = function (t, e, i, s, n) {
            let r, a, o, l
            if (s === 1 || s >= 4) {
              for (l = n.length, r = 0; l > r; r++)
                if ((o = n[r]) !== e) o._gc || (o._enabled(!1, !1) && (a = !0))
                else if (s === 5) break
              return a
            }
            let h
            const u = e._startTime + _
            const f = []
            let m = 0
            const p = e._duration === 0
            for (r = n.length; --r > -1;)
              (o = n[r]) === e ||
                o._gc ||
                o._paused ||
                (o._timeline !== e._timeline
                  ? ((h = h || H(e, 0, p)), H(o, h, p) === 0 && (f[m++] = o))
                  : u >= o._startTime &&
                  o._startTime + o.totalDuration() / o._timeScale > u &&
                  (((p || !o._initted) && u - o._startTime <= 2e-10) ||
                    (f[m++] = o)))
            for (r = m; --r > -1;)
              (o = f[r]),
                s === 2 && o._kill(i, t) && (a = !0),
                (s !== 2 || (!o._firstPT && o._initted)) &&
                o._enabled(!1, !1) &&
                (a = !0)
            return a
          }
          var H = function (t, e, i) {
            for (
              var s = t._timeline, n = s._timeScale, r = t._startTime;
              s._timeline;

            ) {
              if (((r += s._startTime), (n *= s._timeScale), s._paused))
                return -100
              s = s._timeline
            }
            return (
              (r /= n),
              r > e
                ? r - e
                : (i && r === e) || (!t._initted && 2 * _ > r - e)
                  ? _
                  : (r += t.totalDuration() / t._timeScale / n) > e + _
                    ? 0
                    : r - e - _
            )
          }
            ; (r._init = function () {
              let t
              let e
              let i
              let s
              let n
              const r = this.vars
              const a = this._overwrittenProps
              const o = this._duration
              const l = !!r.immediateRender
              let h = r.ease
              if (r.startAt) {
                this._startAt &&
                  (this._startAt.render(-1, !0), this._startAt.kill()),
                  (n = {})
                for (s in r.startAt) n[s] = r.startAt[s]
                if (
                  ((n.overwrite = !1),
                    (n.immediateRender = !0),
                    (n.lazy = l && r.lazy !== !1),
                    (n.startAt = n.delay = null),
                    (this._startAt = I.to(this.target, 0, n)),
                    l)
                )
                  if (this._time > 0) this._startAt = null
                  else if (o !== 0) return
              } else if (r.runBackwards && o !== 0)
                if (this._startAt)
                  this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    (this._startAt = null)
                else {
                  i = {}
                  for (s in r) (G[s] && s !== "autoCSS") || (i[s] = r[s])
                  if (
                    ((i.overwrite = 0),
                      (i.data = "isFromStart"),
                      (i.lazy = l && r.lazy !== !1),
                      (i.immediateRender = l),
                      (this._startAt = I.to(this.target, 0, i)),
                      l)
                  ) {
                    if (this._time === 0) return
                  } else this._startAt._init(), this._startAt._enabled(!1)
                }
              if (
                ((this._ease = h = h
                  ? h instanceof y
                    ? h
                    : typeof h === "function"
                      ? new y(h, r.easeParams)
                      : w[h] || I.defaultEase
                  : I.defaultEase),
                  Array.isArray(r.easeParams) &&
                  h.config &&
                  (this._ease = h.config.apply(h, r.easeParams)),
                  (this._easeType = this._ease._type),
                  (this._easePower = this._ease._power),
                  (this._firstPT = null),
                  this._targets)
              )
                for (t = this._targets.length; --t > -1;)
                  this._initProps(
                    this._targets[t],
                    (this._propLookup[t] = {}),
                    this._siblings[t],
                    a ? a[t] : null
                  ) && (e = !0)
              else
                e = this._initProps(
                  this.target,
                  this._propLookup,
                  this._siblings,
                  a
                )
              if (
                (e && I._onPluginEvent("_onInitAllProps", this),
                  a &&
                  (this._firstPT ||
                    (typeof this.target !== "function" && this._enabled(!1, !1))),
                  r.runBackwards)
              )
                for (i = this._firstPT; i;)
                  (i.s += i.c), (i.c = -i.c), (i = i._next)
                    ; (this._onUpdate = r.onUpdate), (this._initted = !0)
            }),
              (r._initProps = function (e, i, s, n) {
                let r, a, o, l, h, _
                if (e == null) return !1
                L[e._gsTweenID] && M(),
                  this.vars.css ||
                  (e.style &&
                    e !== t &&
                    e.nodeType &&
                    U.css &&
                    this.vars.autoCSS !== !1 &&
                    z(this.vars, e))
                for (r in this.vars) {
                  if (((_ = this.vars[r]), G[r]))
                    _ &&
                      (Array.isArray(_) || (_.push && m(_))) &&
                      _.join("").includes("{self}") &&
                      (this.vars[r] = _ = this._swapSelfInParams(_, this))
                  else if (
                    U[r] &&
                    (l = new U[r]())._onInitTween(e, this.vars[r], this)
                  ) {
                    for (
                      this._firstPT = h = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: r,
                        pg: !0,
                        pr: l._priority,
                      },
                      a = l._overwriteProps.length;
                      --a > -1;

                    )
                      i[l._overwriteProps[a]] = this._firstPT
                        ; (l._priority || l._onInitAllProps) && (o = !0),
                          (l._onDisable || l._onEnable) &&
                          (this._notifyPluginsOfEnabled = !0)
                  } else
                    (this._firstPT = i[r] = h = {
                      _next: this._firstPT,
                      t: e,
                      p: r,
                      f: typeof e[r] === "function",
                      n: r,
                      pg: !1,
                      pr: 0,
                    }),
                      (h.s = h.f
                        ? e[
                          r.indexOf("set") ||
                            typeof e["get" + r.substr(3)] !== "function"
                            ? r
                            : "get" + r.substr(3)
                        ]()
                        : parseFloat(e[r])),
                      (h.c =
                        typeof _ === "string" && _.charAt(1) === "="
                          ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2))
                          : Number(_) - h.s || 0)
                  h && h._next && (h._next._prev = h)
                }
                return n && this._kill(n, e)
                  ? this._initProps(e, i, s, n)
                  : this._overwrite > 1 &&
                    this._firstPT &&
                    s.length > 1 &&
                    K(e, this, i, this._overwrite, s)
                    ? (this._kill(i, e), this._initProps(e, i, s, n))
                    : (this._firstPT &&
                      ((this.vars.lazy !== !1 && this._duration) ||
                        (this.vars.lazy && !this._duration)) &&
                      (L[e._gsTweenID] = !0),
                      o)
              }),
              (r.render = function (t, e, i) {
                let s
                let n
                let r
                let a
                const o = this._time
                const l = this._duration
                const h = this._rawPrevTime
                if (t >= l)
                  (this._totalTime = this._time = l),
                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                    this._reversed || ((s = !0), (n = "onComplete")),
                    l === 0 &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                      (t === 0 || h < 0 || h === _) &&
                      h !== t &&
                      ((i = !0), h > _ && (n = "onReverseComplete")),
                      (this._rawPrevTime = a = !e || t || h === t ? t : _))
                else if (t < 1e-7)
                  (this._totalTime = this._time = 0),
                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                    (o !== 0 || (l === 0 && h > 0 && h !== _)) &&
                    ((n = "onReverseComplete"), (s = this._reversed)),
                    t < 0
                      ? ((this._active = !1),
                        l === 0 &&
                        (this._initted || !this.vars.lazy || i) &&
                        (h >= 0 && (i = !0),
                          (this._rawPrevTime = a = !e || t || h === t ? t : _)))
                      : this._initted || (i = !0)
                else if (((this._totalTime = this._time = t), this._easeType)) {
                  let u = t / l
                  const f = this._easeType
                  const m = this._easePower
                    ; (f === 1 || (f === 3 && u >= 0.5)) && (u = 1 - u),
                      f === 3 && (u *= 2),
                      m === 1
                        ? (u *= u)
                        : m === 2
                          ? (u *= u * u)
                          : m === 3
                            ? (u *= u * u * u)
                            : m === 4 && (u *= u * u * u * u),
                      (this.ratio =
                        f === 1
                          ? 1 - u
                          : f === 2
                            ? u
                            : t / l < 0.5
                              ? u / 2
                              : 1 - u / 2)
                } else this.ratio = this._ease.getRatio(t / l)
                if (this._time !== o || i) {
                  if (!this._initted) {
                    if ((this._init(), !this._initted || this._gc)) return
                    if (
                      !i &&
                      this._firstPT &&
                      ((this.vars.lazy !== !1 && this._duration) ||
                        (this.vars.lazy && !this._duration))
                    )
                      return (
                        (this._time = this._totalTime = o),
                        (this._rawPrevTime = h),
                        O.push(this),
                        (this._lazy = t),
                        void 0
                      )
                    this._time && !s
                      ? (this.ratio = this._ease.getRatio(this._time / l))
                      : s &&
                      this._ease._calcEnd &&
                      (this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1))
                  }
                  for (
                    this._lazy !== !1 && (this._lazy = !1),
                    this._active ||
                    (!this._paused &&
                      this._time !== o &&
                      t >= 0 &&
                      (this._active = !0)),
                    o === 0 &&
                    (this._startAt &&
                      (t >= 0
                        ? this._startAt.render(t, e, i)
                        : n || (n = "_dummyGS")),
                      this.vars.onStart &&
                      (this._time !== 0 || l === 0) &&
                      (e ||
                        this.vars.onStart.apply(
                          this.vars.onStartScope || this,
                          this.vars.onStartParams || T
                        ))),
                    r = this._firstPT;
                    r;

                  )
                    r.f
                      ? r.t[r.p](r.c * this.ratio + r.s)
                      : (r.t[r.p] = r.c * this.ratio + r.s),
                      (r = r._next)
                  this._onUpdate &&
                    (t < 0 &&
                      this._startAt &&
                      this._startTime &&
                      this._startAt.render(t, e, i),
                      e ||
                      ((this._time !== o || s) &&
                        this._onUpdate.apply(
                          this.vars.onUpdateScope || this,
                          this.vars.onUpdateParams || T
                        ))),
                    n &&
                    (!this._gc || i) &&
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startTime &&
                      this._startAt.render(t, e, i),
                      s &&
                      (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                        (this._active = !1)),
                      !e &&
                      this.vars[n] &&
                      this.vars[n].apply(
                        this.vars[n + "Scope"] || this,
                        this.vars[n + "Params"] || T
                      ),
                      l === 0 &&
                      this._rawPrevTime === _ &&
                      a !== _ &&
                      (this._rawPrevTime = 0))
                }
              }),
              (r._kill = function (t, e) {
                if (
                  (t === "all" && (t = null),
                    t == null && (e == null || e === this.target))
                )
                  return (this._lazy = !1), this._enabled(!1, !1)
                e =
                  typeof e !== "string"
                    ? e || this._targets || this.target
                    : I.selector(e) || e
                let i, s, n, r, a, o, l, h
                if ((m(e) || E(e)) && typeof e[0] !== "number")
                  for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0)
                else {
                  if (this._targets) {
                    for (i = this._targets.length; --i > -1;)
                      if (e === this._targets[i]) {
                        ; (a = this._propLookup[i] || {}),
                          (this._overwrittenProps = this._overwrittenProps || []),
                          (s = this._overwrittenProps[i] = t
                            ? this._overwrittenProps[i] || {}
                            : "all")
                        break
                      }
                  } else {
                    if (e !== this.target) return !1
                      ; (a = this._propLookup),
                        (s = this._overwrittenProps = t
                          ? this._overwrittenProps || {}
                          : "all")
                  }
                  if (a) {
                    ; (l = t || a),
                      (h =
                        t !== s &&
                        s !== "all" &&
                        t !== a &&
                        (typeof t !== "object" || !t._tempKill))
                    for (n in l)
                      (r = a[n]) &&
                        (r.pg && r.t._kill(l) && (o = !0),
                          (r.pg && r.t._overwriteProps.length !== 0) ||
                          (r._prev
                            ? (r._prev._next = r._next)
                            : r === this._firstPT && (this._firstPT = r._next),
                            r._next && (r._next._prev = r._prev),
                            (r._next = r._prev = null)),
                          delete a[n]),
                        h && (s[n] = 1)
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                  }
                }
                return o
              }),
              (r.invalidate = function () {
                return (
                  this._notifyPluginsOfEnabled &&
                  I._onPluginEvent("_onDisable", this),
                  (this._firstPT = null),
                  (this._overwrittenProps = null),
                  (this._onUpdate = null),
                  (this._startAt = null),
                  (this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1),
                  (this._propLookup = this._targets ? {} : []),
                  this
                )
              }),
              (r._enabled = function (t, e) {
                if ((o || a.wake(), t && this._gc)) {
                  let i
                  const s = this._targets
                  if (s)
                    for (i = s.length; --i > -1;)
                      this._siblings[i] = $(s[i], this, !0)
                  else this._siblings = $(this.target, this, !0)
                }
                return (
                  C.prototype._enabled.call(this, t, e),
                  this._notifyPluginsOfEnabled && this._firstPT
                    ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    : !1
                )
              }),
              (I.to = function (t, e, i) {
                return new I(t, e, i)
              }),
              (I.from = function (t, e, i) {
                return (
                  (i.runBackwards = !0),
                  (i.immediateRender = i.immediateRender != 0),
                  new I(t, e, i)
                )
              }),
              (I.fromTo = function (t, e, i, s) {
                return (
                  (s.startAt = i),
                  (s.immediateRender =
                    s.immediateRender != 0 && i.immediateRender != 0),
                  new I(t, e, s)
                )
              }),
              (I.delayedCall = function (t, e, i, s, n) {
                return new I(e, 0, {
                  delay: t,
                  onComplete: e,
                  onCompleteParams: i,
                  onCompleteScope: s,
                  onReverseComplete: e,
                  onReverseCompleteParams: i,
                  onReverseCompleteScope: s,
                  immediateRender: !1,
                  useFrames: n,
                  overwrite: 0,
                })
              }),
              (I.set = function (t, e) {
                return new I(t, 0, e)
              }),
              (I.getTweensOf = function (t, e) {
                if (t == null) return []
                t = typeof t !== "string" ? t : I.selector(t) || t
                let i, s, n, r
                if ((m(t) || E(t)) && typeof t[0] !== "number") {
                  for (i = t.length, s = []; --i > -1;)
                    s = s.concat(I.getTweensOf(t[i], e))
                  for (i = s.length; --i > -1;)
                    for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1)
                } else
                  for (s = $(t).concat(), i = s.length; --i > -1;)
                    (s[i]._gc || (e && !s[i].isActive())) && s.splice(i, 1)
                return s
              }),
              (I.killTweensOf = I.killDelayedCallsTo = function (t, e, i) {
                typeof e === "object" && ((i = e), (e = !1))
                for (let s = I.getTweensOf(t, e), n = s.length; --n > -1;)
                  s[n]._kill(i, t)
              })
          var J = v(
            "plugins.TweenPlugin",
            function (t, e) {
              ; (this._overwriteProps = (t || "").split(",")),
                (this._propName = this._overwriteProps[0]),
                (this._priority = e || 0),
                (this._super = J.prototype)
            },
            !0
          )
          if (
            ((r = J.prototype),
              (J.version = "1.10.1"),
              (J.API = 2),
              (r._firstPT = null),
              (r._addTween = function (t, e, i, s, n, r) {
                let a, o
                return s != null &&
                  (a =
                    typeof s === "number" || s.charAt(1) !== "="
                      ? Number(s) - i
                      : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)))
                  ? ((this._firstPT = o = {
                    _next: this._firstPT,
                    t,
                    p: e,
                    s: i,
                    c: a,
                    f: typeof t[e] === "function",
                    n: n || e,
                    r,
                  }),
                    o._next && (o._next._prev = o),
                    o)
                  : void 0
              }),
              (r.setRatio = function (t) {
                for (var e, i = this._firstPT, s = 1e-6; i;)
                  (e = i.c * t + i.s),
                    i.r ? (e = Math.round(e)) : s > e && e > -s && (e = 0),
                    i.f ? i.t[i.p](e) : (i.t[i.p] = e),
                    (i = i._next)
              }),
              (r._kill = function (t) {
                let e
                const i = this._overwriteProps
                let s = this._firstPT
                if (t[this._propName] != null) this._overwriteProps = []
                else
                  for (e = i.length; --e > -1;) t[i[e]] != null && i.splice(e, 1)
                for (; s;)
                  t[s.n] != null &&
                    (s._next && (s._next._prev = s._prev),
                      s._prev
                        ? ((s._prev._next = s._next), (s._prev = null))
                        : this._firstPT === s && (this._firstPT = s._next)),
                    (s = s._next)
                return !1
              }),
              (r._roundProps = function (t, e) {
                for (let i = this._firstPT; i;)
                  (t[this._propName] ||
                    (i.n != null && t[i.n.split(this._propName + "_").join("")])) &&
                    (i.r = e),
                    (i = i._next)
              }),
              (I._onPluginEvent = function (t, e) {
                let i
                let s
                let n
                let r
                let a
                let o = e._firstPT
                if (t === "_onInitAllProps") {
                  for (; o;) {
                    for (a = o._next, s = n; s && s.pr > o.pr;) s = s._next
                      ; (o._prev = s ? s._prev : r) ? (o._prev._next = o) : (n = o),
                        (o._next = s) ? (s._prev = o) : (r = o),
                        (o = a)
                  }
                  o = e._firstPT = n
                }
                for (; o;)
                  o.pg && typeof o.t[t] === "function" && o.t[t]() && (i = !0),
                    (o = o._next)
                return i
              }),
              (J.activate = function (t) {
                for (let e = t.length; --e > -1;)
                  t[e].API === J.API && (U[new t[e]()._propName] = t[e])
                return !0
              }),
              (d.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API))
                  throw "illegal plugin definition."
                let e
                const i = t.propName
                const s = t.priority || 0
                const n = t.overwriteProps
                const r = {
                  init: "_onInitTween",
                  set: "setRatio",
                  kill: "_kill",
                  round: "_roundProps",
                  initAll: "_onInitAllProps",
                }
                const a = v(
                  "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
                  function () {
                    J.call(this, i, s), (this._overwriteProps = n || [])
                  },
                  t.global === !0
                )
                const o = (a.prototype = new J(i))
                  ; (o.constructor = a), (a.API = t.API)
                for (e in r) typeof t[e] === "function" && (o[r[e]] = t[e])
                return (a.version = t.version), J.activate([a]), a
              }),
              (s = t._gsQueue))
          ) {
            for (n = 0; s.length > n; n++) s[n]()
            for (r in p)
              p[r].func ||
                t.console.log(
                  "GSAP encountered missing dependency: com.greensock." + r
                )
          }
          o = !1
        }
      })(
        typeof module !== "undefined" &&
          module.exports &&
          typeof global !== "undefined"
          ? global
          : this || window,
        "TweenLite"
      )
      ; (function () {
        let width
        let height
        let largeHeader
        let canvas
        let ctx
        let points
        let target
        let animateHeader = true

        // Main
        document.addEventListener("DOMContentLoaded", function (event) {
          initHeader()
          initAnimation()
          addListeners()
        })

        function initHeader() {
          width = window.innerWidth
          height = window.innerHeight
          target = { x: width / 2, y: height / 2 }

          largeHeader = document.getElementById("pageContent")
          largeHeader.style.height = height + "px"

          canvas = document.getElementById("demo-canvas")
          canvas.width = width
          canvas.height = height
          ctx = canvas.getContext("2d")

          // create points
          points = []
          for (let x = 0; x < width; x = x + width / 20) {
            for (let y = 0; y < height; y = y + height / 20) {
              const px = x + (Math.random() * width) / 20
              const py = y + (Math.random() * height) / 20
              const p = { x: px, originX: px, y: py, originY: py }
              points.push(p)
            }
          }

          // for each point find the 5 closest points
          for (var i = 0; i < points.length; i++) {
            const closest = []
            const p1 = points[i]
            for (let j = 0; j < points.length; j++) {
              const p2 = points[j]
              if (!(p1 == p2)) {
                let placed = false
                for (var k = 0; k < 3; k++) {
                  if (!placed) {
                    if (closest[k] == undefined) {
                      closest[k] = p2
                      placed = true
                    }
                  }
                }

                for (var k = 0; k < 3; k++) {
                  if (!placed) {
                    if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                      closest[k] = p2
                      placed = true
                    }
                  }
                }
              }
            }
            p1.closest = closest
          }

          // assign a circle to each point
          for (var i in points) {
            const c = new Circle(
              points[i],
              2 + Math.random() * 0.7,
              "rgba(255,255,255,0.3)"
            )
            points[i].circle = c
          }
        }

        // Event handling
        function addListeners() {
          if (!("ontouchstart" in window)) {
            window.addEventListener("mousemove", mouseMove)
          }
          window.addEventListener("scroll", scrollCheck)
          window.addEventListener("resize", resize)
        }

        function mouseMove(e) {
          let posx = (posy = 0)
          if (e.pageX || e.pageY) {
            posx = e.pageX
            posy = e.pageY
          } else if (e.clientX || e.clientY) {
            posx =
              e.clientX +
              document.body.scrollLeft +
              document.documentElement.scrollLeft
            posy =
              e.clientY +
              document.body.scrollTop +
              document.documentElement.scrollTop
          }
          target.x = posx
          target.y = posy
        }

        function scrollCheck() {
          if (document.body.scrollTop > height) animateHeader = false
          else animateHeader = true
        }

        function resize() {
          width = window.innerWidth
          height = window.innerHeight
          largeHeader.style.height = height + "px"
          canvas.width = width
          canvas.height = height
        }

        // animation
        function initAnimation() {
          animate()
          for (const i in points) {
            shiftPoint(points[i])
          }
        }

        function animate() {
          if (animateHeader) {
            ctx.clearRect(0, 0, width, height)
            for (const i in points) {
              // detect points in range
              if (Math.abs(getDistance(target, points[i])) < 13000) {
                points[i].active = 0.3
                points[i].circle.active = 0.6
              } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                points[i].active = 0.1
                points[i].circle.active = 0.3
              } else if (Math.abs(getDistance(target, points[i])) < 80000) {
                points[i].active = 0.02
                points[i].circle.active = 0.1
              } else {
                points[i].active = 0
                points[i].circle.active = 0
              }

              drawLines(points[i])
              points[i].circle.draw()
            }
          }
          requestAnimationFrame(animate)
        }

        function shiftPoint(p) {
          TweenLite.to(p, 1 + 1 * Math.random(), {
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100,
            ease: Circ.easeInOut,
            onComplete() {
              shiftPoint(p)
            },
          })
        }

        // Canvas manipulation
        function drawLines(p) {
          if (!p.active) return
          for (const i in p.closest) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p.closest[i].x, p.closest[i].y)
            ctx.strokeStyle = "rgba(255,255,255," + p.active + ")"
            ctx.stroke()
          }
        }

        function Circle(pos, rad, color) {
          const _this = this

            // constructor
            ; (function () {
              _this.pos = pos || null
              _this.radius = rad || null
              _this.color = color || null
            })()

          this.draw = function () {
            if (!_this.active) return
            ctx.beginPath()
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false)
            ctx.fillStyle = "rgba(255,255,255," + _this.active + ")"
            ctx.fill()
          }
        }

        // Util
        function getDistance(p1, p2) {
          return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
        }
      })()
  }
})()
