'use strict'
;(self.webpackChunkitrix_game_client =
  self.webpackChunkitrix_game_client || []).push([
  [398],
  {
    896: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return Qe
          },
        })
      var a = s(791),
        t = s(504),
        r = s(871),
        i = s(348),
        l = 'Home_main__6GbQv',
        c = 'Home_wrapper__Ce14n',
        o = 'Home_content__wrapper__LkgMb',
        d = 'Home_column__X6izR',
        u = 'Home_img__N7NQ0',
        m = 'Home_img1__AsJPx',
        h = 'Home_img2__Dyjmg',
        x = 'Home_row__FYwgB',
        _ = 'Home_content__header__Foxxu',
        g = 'Home_content__GWLDp',
        j = 'Home_after__login__0MMxI',
        p = 'Home_image__wrapper__wXJMU',
        v = 'Home_content1__ZxbGG',
        f = 'Home_nav__links__XoDUA',
        w = 'Home_other__pages__hvh3W',
        N = 'Home_btnGrad__8azU4',
        y = 'Home_hi__erHpY',
        b = s(878),
        C = s(152),
        k = 'Menu_MenuIcon__gFJdr',
        S = 'Menu_NavBar__nIA6a',
        H = 'Menu_active__LsPUM',
        L = s(184),
        G = [
          { name: 'Home', link: '/' },
          { name: 'Rules', link: '/rules' },
          { name: 'LeaderBoard', link: '/leaderboard' },
        ]
      function A(e) {
        var n = e.desktop,
          s = (0, a.useContext)(i.i),
          l = (0, a.useState)(!1),
          c = (0, C.Z)(l, 2),
          o = c[0],
          d = c[1],
          u = (0, r.TH)()
        return n || o
          ? (0, L.jsx)('nav', {
              className: S,
              children: (0, L.jsxs)('ul', {
                onClick: function () {
                  return d(!o)
                },
                children: [
                  n
                    ? (0, L.jsx)(L.Fragment, {})
                    : (0, L.jsx)('li', {
                        children: (0, L.jsx)('svg', {
                          xmlns: 'http://www.w3.org/2000/svg',
                          fill: 'currentColor',
                          viewBox: '0 0 16 16',
                          children: (0, L.jsx)('path', {
                            d: 'M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z',
                          }),
                        }),
                      }),
                  G.map(function (e) {
                    return e.link === u.pathname
                      ? (0, L.jsx)(
                          t.rU,
                          {
                            to: e.link,
                            children: (0, L.jsx)('li', {
                              className: H,
                              children: e.name,
                            }),
                          },
                          e.name,
                        )
                      : (0, L.jsx)(
                          t.rU,
                          {
                            to: e.link,
                            children: (0, L.jsx)('li', { children: e.name }),
                          },
                          e.name,
                        )
                  }),
                  s.isLogin
                    ? (0, L.jsx)(t.rU, {
                        to: '/',
                        children: (0, L.jsx)('li', {
                          onClick: function () {
                            return (0, b.RD)(s.handleIsLogin)
                          },
                          children: 'Logout',
                        }),
                      })
                    : (0, L.jsx)(L.Fragment, {}),
                ],
              }),
            })
          : (0, L.jsx)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'currentColor',
              className: k,
              viewBox: '0 0 16 16',
              onClick: function () {
                return d(!o)
              },
              children: (0, L.jsx)('path', {
                fillRule: 'evenodd',
                d: 'M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z',
              }),
            })
      }
      function I() {
        var e = (0, a.useState)({ width: void 0, height: void 0 }),
          n = (0, C.Z)(e, 2),
          s = n[0],
          t = n[1]
        return (
          (0, a.useEffect)(function () {
            if ('undefined' !== typeof window) {
              var e = function () {
                t({ width: window.innerWidth, height: window.innerHeight })
              }
              return (
                window.addEventListener('resize', e),
                e(),
                function () {
                  return window.removeEventListener('resize', e)
                }
              )
            }
          }, []),
          s
        )
      }
      function B() {
        var e = I(),
          n = a.useContext(i.i)
        return (0, L.jsxs)('main', {
          className: l,
          children: [
            (0, L.jsx)(A, { loggedIn: n.isLogin, desktop: e.width > 1024 }),
            (0, L.jsx)('div', {
              className: c,
              children: (0, L.jsx)('div', {
                className: 'after__login',
                children: (0, L.jsx)('div', {
                  className: 'content1',
                  children: (0, L.jsxs)('div', {
                    className: j,
                    children: [
                      (0, L.jsxs)('div', {
                        className: v,
                        children: [
                          (0, L.jsx)('div', {
                            className: y,
                            title: 'Chamber of secrets',
                            children: 'Chamber of secrets',
                          }),
                          (0, L.jsxs)('div', {
                            className: f,
                            children: [
                              (0, L.jsx)(t.rU, {
                                className: N,
                                to: '/game',
                                children: 'Play Game',
                              }),
                              (0, L.jsx)(t.rU, {
                                className: w,
                                to: '/leaderboard',
                                children: 'LeaderBoard',
                              }),
                              (0, L.jsx)(t.rU, {
                                className: w,
                                to: '/team',
                                children: 'Our Team',
                              }),
                              (0, L.jsx)('span', {
                                className: w,
                                onClick: function () {
                                  ;(0, b.RD)(n.handleIsLogin)
                                },
                                children: 'Logout',
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, L.jsx)('div', { className: p }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        })
      }
      function E() {
        var e = (0, r.s0)(),
          n = I()
        return (0, L.jsxs)('main', {
          className: l,
          children: [
            (0, L.jsx)(A, { loggedIn: !0, desktop: n.width > 1024 }),
            (0, L.jsx)('div', {
              className: c,
              children: (0, L.jsx)('div', {
                className: o,
                children: (0, L.jsxs)('div', {
                  className: g,
                  children: [
                    (0, L.jsx)('p', {
                      className: _,
                      children: ' Chamber Of Secrets ',
                    }),
                    (0, L.jsxs)('div', {
                      className: x,
                      children: [
                        (0, L.jsxs)('div', {
                          className: d,
                          children: [
                            (0, L.jsx)('div', {
                              onClick: function () {
                                return e('/register')
                              },
                              className: ''.concat(u, ' ').concat(m),
                            }),
                            (0, L.jsx)('p', { children: ' Sign Up' }),
                          ],
                        }),
                        (0, L.jsxs)('div', {
                          className: d,
                          children: [
                            (0, L.jsx)('div', {
                              onClick: function () {
                                return e('/login')
                              },
                              className: ''.concat(u, ' ').concat(h),
                            }),
                            (0, L.jsx)('p', { children: ' Login ' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        })
      }
      var F = function () {
          var e = a.useContext(i.i)
          return (0, L.jsx)('div', {
            children: e.isLogin ? (0, L.jsx)(B, {}) : (0, L.jsx)(E, {}),
          })
        },
        Z = s(861),
        W = s(757),
        M = s.n(W),
        D = 'Game_main__+0xaN',
        U = 'Game_wrapper__0g2rD',
        q = 'Game_GamePage__lj+VD',
        R = 'Game_QuestionBar__7wEWI',
        T = 'Game_nexticon__HLBJQ',
        O = 'Game_previcon__Jd6ng',
        Q = 'Game_QuestionImg__-+44o',
        z = 'Game_AnswerBar__4+sER',
        J = 'Game_AnswerBarInput__HWQzo',
        P = 'Game_AnswerBarBottom__1F0Bq',
        V = 'Game_AnswerBarIcon__vO3VS',
        Y = 'Game_AnswerBarHint__K3HED',
        X = 'Game_AnswerBarSubmit__MqnTp',
        K = 'Game_AnswerBarOnelineBottom__Wo1Ll',
        $ = 'Game_GreyLayer__AbNU7',
        ee = 'Game_HintBox__87WwY',
        ne = 'Game_game__nav__kegaA',
        se = 'Game_game__menu__-JxLQ',
        ae = 'Game_trophy__wGrJw',
        te = 'Game_message__DS4GI',
        re = 'Game_AnswerBarSubmitlap__NFRQU',
        ie = 'Game_AnswerBarHintlap__U9ReQ',
        le = (function () {
          var e = (0, Z.Z)(
            M().mark(function e(n) {
              var s, a
              return M().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        fetch('/api/game/verify', {
                          method: 'POST',
                          body: JSON.stringify(n),
                          headers: { 'Content-Type': 'application/json' },
                        })
                      )
                    case 2:
                      return (s = e.sent), (a = s.json()), e.abrupt('return', a)
                    case 5:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )
          return function (n) {
            return e.apply(this, arguments)
          }
        })(),
        ce = (function () {
          var e = (0, Z.Z)(
            M().mark(function e() {
              var n, s
              return M().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), fetch('/api/game')
                    case 2:
                      return (n = e.sent), (e.next = 5), n.json()
                    case 5:
                      return (s = e.sent), e.abrupt('return', s)
                    case 7:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        oe = s(952)
      function de(e) {
        var n = (0, a.useState)(0),
          s = (0, C.Z)(n, 2),
          t = s[0],
          r = s[1],
          i = a.useContext(he),
          l = { images: i.data.questions, hints: i.data.hints }
        return 'Mobile' === e.for
          ? (0, L.jsxs)('div', {
              className: R,
              children: [
                (0, L.jsx)('img', {
                  className: O,
                  src: 'images/right.png',
                  alt: 'right image',
                  onClick: function () {
                    t >= l.images.length - 1 ? r(0) : r(t + 1)
                  },
                }),
                (0, L.jsx)('img', { className: Q, src: l.images[t].url }),
                (0, L.jsx)('img', {
                  className: T,
                  src: 'images/right.png',
                  alt: 'left image',
                  onClick: function () {
                    r(t <= 0 ? l.images.length - 1 : t - 1)
                  },
                }),
              ],
            })
          : (0, L.jsx)('div', {
              className: R,
              children: l.images.map(function (e) {
                return (0,
                L.jsx)('img', { src: e.url, className: Q, alt: 'Question Image' }, e.id)
              }),
            })
      }
      function ue(e) {
        return !0 === e.show
          ? (0, L.jsxs)(L.Fragment, {
              children: [
                (0, L.jsx)('div', {
                  className: $,
                  onClick: function () {
                    e.setShowHint(!1)
                  },
                }),
                (0, L.jsx)('div', {
                  className: ee,
                  children: e.hints.map(function (e) {
                    return (0,
                    L.jsx)(L.Fragment, { children: (0, L.jsxs)('p', { children: ['Hint ', e.id, ': \xa0\xa0 ', e.msg] }, e.id) })
                  }),
                }),
              ],
            })
          : (0, L.jsx)(L.Fragment, {})
      }
      function me(e) {
        var n = (0, a.useState)(!1),
          s = (0, C.Z)(n, 2),
          t = s[0],
          r = s[1],
          i = (0, a.useState)(''),
          l = (0, C.Z)(i, 2),
          c = l[0],
          o = l[1],
          d = (0, a.useState)(!1),
          u = (0, C.Z)(d, 2),
          m = u[0],
          h = u[1],
          x = a.useContext(he)
        function _(e) {
          e.preventDefault(),
            0 !== c.trim().length
              ? (h(!0),
                le({ level: x.data.level, answer: c }).then(function (e) {
                  if ((h(!1), console.log(e), 'Success' === e.message)) {
                    var n = e.data
                    if (null == e.data)
                      return void x.handleMessage('Game Over!')
                    var s = {
                      level: n.level,
                      hints: n.hints,
                      questions: n.questions,
                    }
                    x.changeData(s), o(''), x.handleError(e.message)
                  } else h(!1), x.handleError(e.message)
                }))
              : x.handleError("Answer Can't Be Empty")
        }
        return 'Mobile' === e.for
          ? (0, L.jsxs)(L.Fragment, {
              children: [
                (0, L.jsx)('div', {
                  className: z,
                  children: (0, L.jsxs)('form', {
                    children: [
                      (0, L.jsx)('input', {
                        className: J,
                        type: 'text',
                        value: c,
                        onChange: function (e) {
                          o(e.target.value)
                        },
                        placeholder: 'Enter Answer',
                      }),
                      (0, L.jsxs)('div', {
                        className: P,
                        children: [
                          (0, L.jsxs)('button', {
                            className: Y,
                            onClick: function (e) {
                              e.preventDefault(), r(!0)
                            },
                            children: [
                              'Hint',
                              (0, L.jsx)('img', {
                                className: V,
                                src: 'images/idea.jpg',
                              }),
                            ],
                          }),
                          (0, L.jsx)('button', {
                            disabled: m,
                            type: 'button',
                            className: X,
                            onClick: function (e) {
                              return _(e)
                            },
                            children: 'submit',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, L.jsx)(ue, {
                  show: t,
                  hints: x.data.hints,
                  setShowHint: r,
                }),
              ],
            })
          : (0, L.jsxs)(L.Fragment, {
              children: [
                (0, L.jsx)('div', {
                  className: z,
                  children: (0, L.jsxs)('div', {
                    className: K,
                    children: [
                      (0, L.jsxs)('button', {
                        className: ie,
                        onClick: function (e) {
                          e.preventDefault(), r(!0)
                        },
                        children: [
                          (0, L.jsx)('p', { children: 'Hint' }),
                          (0, L.jsx)('img', {
                            className: V,
                            src: 'images/idea.jpg',
                          }),
                        ],
                      }),
                      (0, L.jsx)('input', {
                        type: 'text',
                        className: J,
                        placeholder: 'Enter Answer',
                        value: c,
                        onChange: function (e) {
                          o(e.target.value)
                        },
                      }),
                      (0, L.jsx)('button', {
                        className: re,
                        type: 'button',
                        onClick: _,
                        children: 'submit',
                      }),
                    ],
                  }),
                }),
                (0, L.jsx)(ue, {
                  show: t,
                  hints: x.data.hints,
                  setShowHint: r,
                }),
              ],
            })
      }
      s(138)
      var he = a.createContext()
      var xe = function () {
        var e = I(),
          n = (0, a.useState)(null),
          s = (0, C.Z)(n, 2),
          t = s[0],
          r = s[1],
          i = (0, a.useState)(''),
          l = (0, C.Z)(i, 2),
          c = l[0],
          o = l[1],
          d = { data: t, changeData: r, message: c, handleMessage: o }
        return (
          (0, a.useEffect)(function () {
            ;(0, Z.Z)(
              M().mark(function e() {
                var n, s
                return M().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), ce()
                      case 2:
                        'Success' === (n = e.sent).message
                          ? (((s = {}).level = n.questionData.level),
                            (s.questions = n.questionData.images),
                            (s.hints = n.questionData.hints),
                            r(s))
                          : o(n.message)
                      case 4:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )()
          }, []),
          '' !== c
            ? (0, L.jsxs)('main', {
                className: D,
                children: [
                  (0, L.jsx)(A, { loggedIn: !0, desktop: e.width > 1024 }),
                  (0, L.jsx)('div', {
                    className: U,
                    children: (0, L.jsx)('div', {
                      className: q,
                      children: (0, L.jsx)('div', {
                        className: te,
                        children: (0, L.jsx)('h1', { children: c }),
                      }),
                    }),
                  }),
                ],
              })
            : (0, L.jsxs)('main', {
                className: D,
                children: [
                  (0, L.jsx)(A, { loggedIn: !0, desktop: e.width > 1024 }),
                  (0, L.jsx)('div', {
                    className: U,
                    children: (0, L.jsx)(he.Provider, {
                      value: d,
                      children: (0, L.jsxs)('div', {
                        className: q,
                        children: [
                          (0, L.jsxs)('div', {
                            className: ne,
                            children: [
                              (0, L.jsx)('span', { className: se }),
                              (0, L.jsx)('span', {
                                className: ae,
                                children:
                                  null !== t &&
                                  (0, L.jsxs)('div', {
                                    children: [
                                      t.level,
                                      ' ',
                                      (0, L.jsx)(oe.xng, {
                                        style: { color: 'yellow' },
                                      }),
                                      ' ',
                                    ],
                                  }),
                              }),
                            ],
                          }),
                          e.width <= 1300
                            ? (0, L.jsxs)(L.Fragment, {
                                children: [
                                  (0, L.jsx)(de, { for: 'Mobile' }),
                                  (0, L.jsx)(me, { for: 'Mobile' }),
                                ],
                              })
                            : (0, L.jsxs)(L.Fragment, {
                                children: [
                                  (0, L.jsx)(de, {}),
                                  (0, L.jsx)(me, {}),
                                ],
                              }),
                        ],
                      }),
                    }),
                  }),
                ],
              })
        )
      }
      var _e = function () {
          return (0, L.jsx)('div', { children: 'Leaderboard' })
        },
        ge = 'Login_main__OFmWj',
        je = 'Login_wrapper__+Nfl1',
        pe = 'Login_login__dH0gZ',
        ve = 'Login_darkLayer__qL9s4',
        fe = 'Login_loginBox__upQPW',
        we = 'Login_createAccount__OEJ18',
        Ne =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      function ye(e) {
        return e.toLowerCase().match(Ne)
      }
      function be(e) {
        return e.length >= 8
      }
      function Ce() {
        var e = (0, a.useState)(!1),
          n = (0, C.Z)(e, 2),
          s = n[0],
          t = n[1]
        return (0, L.jsxs)(L.Fragment, {
          children: [
            (0, L.jsx)('span', {
              style: { display: s ? '' : 'none' },
              children: ' Invalid Email ',
            }),
            (0, L.jsx)('input', {
              type: 'email',
              placeholder: 'Email',
              name: 'email',
              id: 'email',
              autoComplete: 'on',
              onChange: function (e) {
                return (function (e) {
                  ye(e.target.value)
                    ? ((e.target.style.border = '0.1rem solid green'), t(!1))
                    : ((e.target.style.border = '0.1rem solid red'), t(!0)),
                    '' === e.target.value &&
                      (t(!1), (e.target.style.border = ''))
                })(e)
              },
              required: !0,
            }),
          ],
        })
      }
      function ke(e) {
        var n = (0, a.useState)(!1),
          s = (0, C.Z)(n, 2),
          t = s[0],
          r = s[1]
        return (0, L.jsxs)(L.Fragment, {
          children: [
            (0, L.jsx)('span', {
              style: { display: t ? '' : 'none' },
              children: 'Minimum 8 Characters ',
            }),
            (0, L.jsx)('input', {
              type: 'password',
              placeholder: 'password',
              name: 'password',
              id: 'password',
              autoComplete: 'on',
              onChange: function (e) {
                return (function (e) {
                  be(e.target.value)
                    ? ((e.target.style.border = '0.1rem solid green'), r(!1))
                    : ((e.target.style.border = '0.1rem solid red'), r(!0)),
                    '' === e.target.value &&
                      (r(!1), (e.target.style.border = ''))
                })(e)
              },
              required: !0,
            }),
          ],
        })
      }
      function Se(e) {
        var n = (0, a.useState)(!1),
          s = (0, C.Z)(n, 2),
          t = s[0],
          r = s[1]
        return (0, L.jsxs)(L.Fragment, {
          children: [
            (0, L.jsx)('span', {
              style: { display: t ? '' : 'none' },
              children: 'Minimum 8 Characters ',
            }),
            (0, L.jsx)('input', {
              type: 'password',
              placeholder: 'confirm password',
              name: 'password',
              id: 'confirmpassword',
              autoComplete: 'on',
              onChange: function (e) {
                return (function (e) {
                  e.target.value === document.getElementById('password').value
                    ? ((e.target.style.border = '0.1rem solid green'), r(!1))
                    : ((e.target.style.border = '0.1rem solid red'), r(!0)),
                    '' === e.target.value &&
                      (r(!1), (e.target.style.border = ''))
                })(e)
              },
              required: !0,
            }),
          ],
        })
      }
      var He = function () {
          var e = a.useContext(i.i),
            n = I(),
            s = (0, r.s0)()
          return (0, L.jsxs)('main', {
            className: ge,
            children: [
              (0, L.jsx)(A, { loggedIn: !0, desktop: n.width > 1024 }),
              (0, L.jsx)('div', {
                className: je,
                children: (0, L.jsx)('div', {
                  className: pe,
                  children: (0, L.jsx)('div', {
                    className: ve,
                    children: (0, L.jsxs)('form', {
                      className: fe,
                      children: [
                        (0, L.jsx)('h1', { children: 'Sign In' }),
                        (0, L.jsx)(Ce, {}),
                        (0, L.jsx)(ke, {}),
                        (0, L.jsx)('input', {
                          type: 'button',
                          value: 'Sign In',
                          onClick: function (n) {
                            return (function (n) {
                              var s = {
                                email: document.getElementById('email').value,
                                password:
                                  document.getElementById('password').value,
                              }
                              ye(s.email) &&
                                be(s.password) &&
                                (0, Z.Z)(
                                  M().mark(function n() {
                                    var a, t
                                    return M().wrap(function (n) {
                                      for (;;)
                                        switch ((n.prev = n.next)) {
                                          case 0:
                                            return (
                                              (n.next = 2),
                                              fetch('/api/users/auth', {
                                                method: 'POST',
                                                body: JSON.stringify(s),
                                                headers: {
                                                  'Content-Type':
                                                    'application/json',
                                                },
                                              })
                                            )
                                          case 2:
                                            return (
                                              (a = n.sent),
                                              (n.next = 5),
                                              a.json()
                                            )
                                          case 5:
                                            'success' ===
                                              (t = n.sent).message &&
                                              (0, b.vx)(
                                                t.token,
                                                e.handleIsLogin,
                                              )
                                          case 7:
                                          case 'end':
                                            return n.stop()
                                        }
                                    }, n)
                                  }),
                                )()
                            })()
                          },
                        }),
                        (0, L.jsxs)('div', {
                          className: we,
                          children: [
                            (0, L.jsx)('p', {
                              children: 'Dont have an account?',
                            }),
                            (0, L.jsx)('input', {
                              type: 'button',
                              value: 'Sign Up',
                              onClick: function () {
                                return s('/register')
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          })
        },
        Le = 'Rules_main__GIxjv',
        Ge = 'Rules_wrapper__ReoAq',
        Ae = 'Rules_section__dSiFW',
        Ie = 'Rules_bg__cnwNG',
        Be = 'Rules_one__68+Yw',
        Ee = 'Rules_ruletext__S6ckw'
      var Fe = function () {
          var e = I()
          return (0, L.jsxs)('main', {
            className: Le,
            children: [
              (0, L.jsx)(A, { loggedIn: !0, desktop: e.width > 1024 }),
              (0, L.jsx)('div', { className: Ge }),
              (0, L.jsx)('div', {
                className: Ie,
                children: (0, L.jsxs)('section', {
                  className: Be,
                  children: [
                    (0, L.jsx)('div', { className: Ae, children: 'Rules' }),
                    (0, L.jsxs)('div', {
                      className: Ee,
                      children: [
                        'This is a treasure kind of a game in which the participant should try to find the answer by identifying the similarity and connecting the given images. ',
                        (0, L.jsx)('br', {}),
                        (0, L.jsx)('br', {}),
                        'The game will be live for three days.',
                        (0, L.jsx)('br', {}),
                        (0, L.jsx)('br', {}),
                        'Each day is independent and one winner will be chosen each day.',
                        (0, L.jsx)('br', {}),
                        (0, L.jsx)('br', {}),
                        'The UI of the website has no relation to the questions.',
                        (0, L.jsx)('br', {}),
                        (0, L.jsx)('br', {}),
                        'Clues will be updated periodically in the specified time.',
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        },
        Ze = 'Signup_main__UxcTo',
        We = 'Signup_wrapper__8m1s3',
        Me = 'Signup_container__lV1-P',
        De = 'Signup_aldreadyHavingAccount__QNkPm',
        Ue = s(221)
      var qe = function () {
        var e = a.useContext(i.i),
          n = I(),
          s = (0, r.s0)()
        return (0, L.jsxs)('main', {
          className: Ze,
          children: [
            (0, L.jsx)(A, { loggedIn: !0, desktop: n.width > 1024 }),
            (0, L.jsx)('div', {
              className: We,
              children: (0, L.jsxs)('div', {
                className: Me,
                children: [
                  (0, L.jsx)('h1', { children: 'Signup' }),
                  (0, L.jsxs)('form', {
                    action: '',
                    children: [
                      (0, L.jsx)('input', {
                        type: 'text',
                        name: 'name',
                        id: 'name',
                        placeholder: 'Name',
                      }),
                      (0, L.jsx)(Ce, {}),
                      (0, L.jsx)('input', {
                        type: 'text',
                        name: 'clg',
                        id: 'clg',
                        placeholder: 'College',
                        required: !0,
                      }),
                      (0, L.jsx)(ke, {}),
                      (0, L.jsx)(Se, {}),
                      (0, L.jsx)('input', {
                        type: 'button',
                        value: 'Sign Up',
                        onClick: function (n) {
                          return (function (n) {
                            n.preventDefault()
                            var s = {
                              name: document.getElementById('name').value,
                              email: document.getElementById('email').value,
                              clg: document.getElementById('clg').value,
                              password:
                                document.getElementById('password').value,
                            }
                            ye(s.email) &&
                              be(s.password) &&
                              (0, Z.Z)(
                                M().mark(function n() {
                                  var a, t
                                  return M().wrap(function (n) {
                                    for (;;)
                                      switch ((n.prev = n.next)) {
                                        case 0:
                                          return (
                                            (n.next = 2),
                                            fetch('/api/users/new', {
                                              method: 'POST',
                                              body: JSON.stringify(s),
                                              headers: {
                                                'Content-Type':
                                                  'application/json',
                                              },
                                            })
                                          )
                                        case 2:
                                          return (
                                            (a = n.sent), (n.next = 5), a.json()
                                          )
                                        case 5:
                                          'success' === (t = n.sent).message &&
                                            (0, b.vx)(t.token, e.handleIsLogin)
                                        case 7:
                                        case 'end':
                                          return n.stop()
                                      }
                                  }, n)
                                }),
                              )()
                          })(n)
                        },
                      }),
                      (0, L.jsxs)('div', {
                        className: De,
                        children: [
                          (0, L.jsx)('p', {
                            children: 'Already have an account?',
                          }),
                          (0, L.jsx)('input', {
                            type: 'button',
                            value: 'SignIn',
                            onClick: function () {
                              return s('/login')
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, L.jsx)(Ue.mh, {}),
          ],
        })
      }
      var Re = function () {
        return (0, L.jsx)('div', { children: 'Team' })
      }
      function Te() {
        return (0, L.jsxs)(r.Z5, {
          children: [
            (0, L.jsx)(r.AW, { element: (0, L.jsx)(xe, {}), path: '/game' }),
            (0, L.jsx)(r.AW, { element: (0, L.jsx)(Re, {}), path: '/team' }),
            (0, L.jsx)(r.AW, {
              element: (0, L.jsx)(_e, {}),
              path: '/leaderboard',
            }),
            (0, L.jsx)(r.AW, { element: (0, L.jsx)(F, {}), path: '/' }),
            (0, L.jsx)(r.AW, { element: (0, L.jsx)(Fe, {}), path: '/rules' }),
            (0, L.jsx)(r.AW, {
              element: (0, L.jsx)(r.Fg, { to: '/' }),
              path: '/*',
            }),
          ],
        })
      }
      function Oe() {
        return (0, L.jsxs)(r.Z5, {
          children: [
            (0, L.jsx)(r.AW, { element: (0, L.jsx)(F, {}), path: '/' }),
            (0, L.jsx)(r.AW, { element: (0, L.jsx)(He, {}), path: '/login' }),
            (0, L.jsx)(r.AW, {
              element: (0, L.jsx)(qe, {}),
              path: '/register',
            }),
            (0, L.jsx)(r.AW, { element: (0, L.jsx)(Fe, {}), path: '/rules' }),
            (0, L.jsx)(r.AW, {
              element: (0, L.jsx)(r.Fg, { to: '/' }),
              path: '/*',
            }),
          ],
        })
      }
      var Qe = function () {
        var e = a.useContext(i.i)
        return (0, L.jsx)(L.Fragment, {
          children: (0, L.jsx)(t.VK, {
            children:
              !0 === e.isLogin ? (0, L.jsx)(Te, {}) : (0, L.jsx)(Oe, {}),
          }),
        })
      }
    },
  },
])
//# sourceMappingURL=398.26f88b15.chunk.js.map
