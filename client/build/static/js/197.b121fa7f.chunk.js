'use strict'
;(self.webpackChunkitrix_game_client =
  self.webpackChunkitrix_game_client || []).push([
  [197],
  {
    550: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return Xe
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
        m = 'Home_img__N7NQ0',
        u = 'Home_img1__AsJPx',
        h = 'Home_img2__Dyjmg',
        x = 'Home_row__FYwgB',
        j = 'Home_content__header__Foxxu',
        _ = 'Home_content__GWLDp',
        g = 'Home_after__login__0MMxI',
        p = 'Home_image__wrapper__wXJMU',
        v = 'Home_content1__ZxbGG',
        f = 'Home_nav__links__XoDUA',
        w = 'Home_other__pages__hvh3W',
        N = 'Home_btnGrad__8azU4',
        b = 'Home_hi__erHpY',
        y = s(878),
        k = s(152),
        C = 'Menu_MenuIcon__gFJdr',
        L = 'Menu_NavBar__nIA6a',
        S = 'Menu_active__LsPUM',
        H = s(184),
        A = [
          { name: 'Home', link: '/' },
          { name: 'Rules', link: '/rules' },
          { name: 'LeaderBoard', link: '/leaderboard' },
        ]
      function G(e) {
        var n = e.desktop,
          s = (0, a.useContext)(i.i),
          l = (0, a.useState)(!1),
          c = (0, k.Z)(l, 2),
          o = c[0],
          d = c[1],
          m = (0, r.TH)()
        return n || o
          ? (0, H.jsx)('nav', {
              className: L,
              children: (0, H.jsxs)('ul', {
                onClick: function () {
                  return d(!o)
                },
                children: [
                  n
                    ? (0, H.jsx)(H.Fragment, {})
                    : (0, H.jsx)('li', {
                        children: (0, H.jsx)('svg', {
                          xmlns: 'http://www.w3.org/2000/svg',
                          fill: 'currentColor',
                          viewBox: '0 0 16 16',
                          children: (0, H.jsx)('path', {
                            d: 'M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z',
                          }),
                        }),
                      }),
                  A.map(function (e) {
                    return e.link === m.pathname
                      ? (0, H.jsx)(
                          t.rU,
                          {
                            to: e.link,
                            children: (0, H.jsx)('li', {
                              className: S,
                              children: e.name,
                            }),
                          },
                          e.name,
                        )
                      : (0, H.jsx)(
                          t.rU,
                          {
                            to: e.link,
                            children: (0, H.jsx)('li', { children: e.name }),
                          },
                          e.name,
                        )
                  }),
                  s.isLogin
                    ? (0, H.jsx)(t.rU, {
                        to: '/',
                        children: (0, H.jsx)('li', {
                          onClick: function () {
                            return (0, y.RD)(s.handleIsLogin)
                          },
                          children: 'Logout',
                        }),
                      })
                    : (0, H.jsx)(H.Fragment, {}),
                ],
              }),
            })
          : (0, H.jsx)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'currentColor',
              className: C,
              viewBox: '0 0 16 16',
              onClick: function () {
                return d(!o)
              },
              children: (0, H.jsx)('path', {
                fillRule: 'evenodd',
                d: 'M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z',
              }),
            })
      }
      function I() {
        var e = (0, a.useState)({ width: void 0, height: void 0 }),
          n = (0, k.Z)(e, 2),
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
        return (0, H.jsxs)('main', {
          className: l,
          children: [
            (0, H.jsx)(G, { loggedIn: n.isLogin, desktop: e.width > 1024 }),
            (0, H.jsx)('div', {
              className: c,
              children: (0, H.jsx)('div', {
                className: 'after__login',
                children: (0, H.jsx)('div', {
                  className: 'content1',
                  children: (0, H.jsxs)('div', {
                    className: g,
                    children: [
                      (0, H.jsxs)('div', {
                        className: v,
                        children: [
                          (0, H.jsx)('div', {
                            className: b,
                            title: 'Chamber of secrets',
                            children: 'Chamber of secrets',
                          }),
                          (0, H.jsxs)('div', {
                            className: f,
                            children: [
                              (0, H.jsx)(t.rU, {
                                className: N,
                                to: '/game',
                                children: 'Play Game',
                              }),
                              (0, H.jsx)(t.rU, {
                                className: w,
                                to: '/leaderboard',
                                children: 'LeaderBoard',
                              }),
                              (0, H.jsx)(t.rU, {
                                className: w,
                                to: '/team',
                                children: 'Our Team',
                              }),
                              (0, H.jsx)('span', {
                                className: w,
                                onClick: function () {
                                  ;(0, y.RD)(n.handleIsLogin)
                                },
                                children: 'Logout',
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, H.jsx)('div', { className: p }),
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
        return (0, H.jsxs)('main', {
          className: l,
          children: [
            (0, H.jsx)(G, { loggedIn: !0, desktop: n.width > 1024 }),
            (0, H.jsx)('div', {
              className: c,
              children: (0, H.jsx)('div', {
                className: o,
                children: (0, H.jsxs)('div', {
                  className: _,
                  children: [
                    (0, H.jsx)('p', {
                      className: j,
                      children: ' Chamber Of Secrets ',
                    }),
                    (0, H.jsxs)('div', {
                      className: x,
                      children: [
                        (0, H.jsxs)('div', {
                          className: d,
                          children: [
                            (0, H.jsx)('div', {
                              onClick: function () {
                                return e('/register')
                              },
                              className: ''.concat(m, ' ').concat(u),
                            }),
                            (0, H.jsx)('p', { children: ' Sign Up' }),
                          ],
                        }),
                        (0, H.jsxs)('div', {
                          className: d,
                          children: [
                            (0, H.jsx)('div', {
                              onClick: function () {
                                return e('/login')
                              },
                              className: ''.concat(m, ' ').concat(h),
                            }),
                            (0, H.jsx)('p', { children: ' Login ' }),
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
          return (0, H.jsx)('div', {
            children: e.isLogin ? (0, H.jsx)(B, {}) : (0, H.jsx)(E, {}),
          })
        },
        Z = s(861),
        W = s(757),
        M = s.n(W),
        R = 'Game_main__+0xaN',
        D = 'Game_wrapper__0g2rD',
        U = 'Game_GamePage__lj+VD',
        q = 'Game_QuestionBar__7wEWI',
        z = 'Game_nexticon__HLBJQ',
        T = 'Game_previcon__Jd6ng',
        O = 'Game_QuestionImg__-+44o',
        J = 'Game_AnswerBar__4+sER',
        P = 'Game_AnswerBarInput__HWQzo',
        Q = 'Game_AnswerBarBottom__1F0Bq',
        Y = 'Game_AnswerBarIcon__vO3VS',
        V = 'Game_AnswerBarHint__K3HED',
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
          s = (0, k.Z)(n, 2),
          t = s[0],
          r = s[1],
          i = a.useContext(he),
          l = { images: i.data.questions, hints: i.data.hints }
        return 'Mobile' === e.for
          ? (0, H.jsxs)('div', {
              className: q,
              children: [
                (0, H.jsx)('img', {
                  className: T,
                  src: 'images/right.png',
                  alt: 'right image',
                  onClick: function () {
                    t >= l.images.length - 1 ? r(0) : r(t + 1)
                  },
                }),
                (0, H.jsx)('img', { className: O, src: l.images[t].url }),
                (0, H.jsx)('img', {
                  className: z,
                  src: 'images/right.png',
                  alt: 'left image',
                  onClick: function () {
                    r(t <= 0 ? l.images.length - 1 : t - 1)
                  },
                }),
              ],
            })
          : (0, H.jsx)('div', {
              className: q,
              children: l.images.map(function (e) {
                return (0,
                H.jsx)('img', { src: e.url, className: O, alt: 'Question Image' }, e.id)
              }),
            })
      }
      function me(e) {
        return !0 === e.show
          ? (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsx)('div', {
                  className: $,
                  onClick: function () {
                    e.setShowHint(!1)
                  },
                }),
                (0, H.jsx)('div', {
                  className: ee,
                  children: e.hints.map(function (e) {
                    return (0,
                    H.jsx)(H.Fragment, { children: (0, H.jsxs)('p', { children: ['Hint ', e.id, ': \xa0\xa0 ', e.msg] }, e.id) })
                  }),
                }),
              ],
            })
          : (0, H.jsx)(H.Fragment, {})
      }
      function ue(e) {
        var n = (0, a.useState)(!1),
          s = (0, k.Z)(n, 2),
          t = s[0],
          r = s[1],
          i = (0, a.useState)(''),
          l = (0, k.Z)(i, 2),
          c = l[0],
          o = l[1],
          d = (0, a.useState)(!1),
          m = (0, k.Z)(d, 2),
          u = m[0],
          h = m[1],
          x = a.useContext(he)
        function j(e) {
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
          ? (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsx)('div', {
                  className: J,
                  children: (0, H.jsxs)('form', {
                    children: [
                      (0, H.jsx)('input', {
                        className: P,
                        type: 'text',
                        value: c,
                        onChange: function (e) {
                          o(e.target.value)
                        },
                        placeholder: 'Enter Answer',
                      }),
                      (0, H.jsxs)('div', {
                        className: Q,
                        children: [
                          (0, H.jsxs)('button', {
                            className: V,
                            onClick: function (e) {
                              e.preventDefault(), r(!0)
                            },
                            children: [
                              'Hint',
                              (0, H.jsx)('img', {
                                className: Y,
                                src: 'images/idea.jpg',
                              }),
                            ],
                          }),
                          (0, H.jsx)('button', {
                            disabled: u,
                            type: 'button',
                            className: X,
                            onClick: function (e) {
                              return j(e)
                            },
                            children: 'submit',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, H.jsx)(me, {
                  show: t,
                  hints: x.data.hints,
                  setShowHint: r,
                }),
              ],
            })
          : (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsx)('div', {
                  className: J,
                  children: (0, H.jsxs)('div', {
                    className: K,
                    children: [
                      (0, H.jsxs)('button', {
                        className: ie,
                        onClick: function (e) {
                          e.preventDefault(), r(!0)
                        },
                        children: [
                          (0, H.jsx)('p', { children: 'Hint' }),
                          (0, H.jsx)('img', {
                            className: Y,
                            src: 'images/idea.jpg',
                          }),
                        ],
                      }),
                      (0, H.jsx)('input', {
                        type: 'text',
                        className: P,
                        placeholder: 'Enter Answer',
                        value: c,
                        onChange: function (e) {
                          o(e.target.value)
                        },
                      }),
                      (0, H.jsx)('button', {
                        className: re,
                        type: 'button',
                        onClick: j,
                        children: 'submit',
                      }),
                    ],
                  }),
                }),
                (0, H.jsx)(me, {
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
            s = (0, k.Z)(n, 2),
            t = s[0],
            r = s[1],
            i = (0, a.useState)(''),
            l = (0, k.Z)(i, 2),
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
                          return console.log('Started'), (e.next = 3), ce()
                        case 3:
                          ;(n = e.sent),
                            console.log(n),
                            'Success' === n.message
                              ? (((s = {}).level = n.questionData.level),
                                (s.questions = n.questionData.images),
                                (s.hints = n.questionData.hints),
                                r(s))
                              : o(n.message)
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )()
            }, []),
            null === t
              ? (0, H.jsxs)('main', {
                  className: R,
                  children: [
                    (0, H.jsx)(G, { loggedIn: !0, desktop: e.width > 1024 }),
                    (0, H.jsx)('div', {
                      className: D,
                      children: (0, H.jsx)('div', {
                        className: U,
                        children: (0, H.jsx)('div', {
                          className: te,
                          children: (0, H.jsx)('h1', { children: 'Loading' }),
                        }),
                      }),
                    }),
                  ],
                })
              : '' !== c
              ? (0, H.jsxs)('main', {
                  className: R,
                  children: [
                    (0, H.jsx)(G, { loggedIn: !0, desktop: e.width > 1024 }),
                    (0, H.jsx)('div', {
                      className: D,
                      children: (0, H.jsx)('div', {
                        className: U,
                        children: (0, H.jsx)('div', {
                          className: te,
                          children: (0, H.jsx)('h1', { children: c }),
                        }),
                      }),
                    }),
                  ],
                })
              : (0, H.jsxs)('main', {
                  className: R,
                  children: [
                    (0, H.jsx)(G, { loggedIn: !0, desktop: e.width > 1024 }),
                    (0, H.jsx)('div', {
                      className: D,
                      children: (0, H.jsx)(he.Provider, {
                        value: d,
                        children: (0, H.jsxs)('div', {
                          className: U,
                          children: [
                            (0, H.jsxs)('div', {
                              className: ne,
                              children: [
                                (0, H.jsx)('span', { className: se }),
                                (0, H.jsx)('span', {
                                  className: ae,
                                  children:
                                    null !== t &&
                                    (0, H.jsxs)('div', {
                                      children: [
                                        t.level,
                                        ' ',
                                        (0, H.jsx)(oe.xng, {
                                          style: { color: 'yellow' },
                                        }),
                                        ' ',
                                      ],
                                    }),
                                }),
                              ],
                            }),
                            e.width <= 1300
                              ? (0, H.jsxs)(H.Fragment, {
                                  children: [
                                    (0, H.jsx)(de, { for: 'Mobile' }),
                                    (0, H.jsx)(ue, { for: 'Mobile' }),
                                  ],
                                })
                              : (0, H.jsxs)(H.Fragment, {
                                  children: [
                                    (0, H.jsx)(de, {}),
                                    (0, H.jsx)(ue, {}),
                                  ],
                                }),
                          ],
                        }),
                      }),
                    }),
                  ],
                })
          )
        },
        je = 'Leaderboard_main__6Wqda',
        _e = 'Leaderboard_mainWrapper__Jcf9c',
        ge = 'Leaderboard_wrapper__F3Ij3',
        pe = 'Leaderboard_greyCover__yTFBB',
        ve = 'Leaderboard_card__L7jNL',
        fe = 'Leaderboard_navigator__GpAH+'
      var we = function () {
          var e = I(),
            n = (0, a.useState)([]),
            s = (0, k.Z)(n, 2),
            t = s[0],
            r = s[1],
            l = a.useContext(i.i),
            c = (0, a.useState)(1),
            o = (0, k.Z)(c, 2),
            d = o[0],
            m = o[1]
          return (
            (0, a.useEffect)(
              function () {
                ;(0, Z.Z)(
                  M().mark(function e() {
                    var n, s
                    return M().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              d < 1 && m(1),
                              (e.next = 3),
                              fetch('/api/leaderboard', {
                                method: 'POST',
                                body: JSON.stringify({
                                  startRank: d,
                                  endRank: d + 10,
                                }),
                                headers: { 'Content-Type': 'application/json' },
                              })
                            )
                          case 3:
                            return (n = e.sent), (e.next = 6), n.json()
                          case 6:
                            ;(s = e.sent), r(s)
                          case 8:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )()
              },
              [d],
            ),
            (0, H.jsxs)('main', {
              className: je,
              children: [
                (0, H.jsx)(G, { loggedIn: l.isLogin, desktop: e.width > 1024 }),
                (0, H.jsx)('div', {
                  className: _e,
                  children: (0, H.jsx)('div', {
                    className: ge,
                    children: (0, H.jsxs)('div', {
                      className: pe,
                      children: [
                        (0, H.jsx)('h1', { children: 'LeaderBoard' }),
                        l.isLogin
                          ? (0, H.jsxs)('div', {
                              className: ve,
                              children: [
                                (0, H.jsx)('p', { children: 'Your Rank' }),
                                (0, H.jsx)('h1', { children: 6 }),
                              ],
                            })
                          : (0, H.jsx)(H.Fragment, {}),
                        (0, H.jsxs)('table', {
                          children: [
                            (0, H.jsx)('thead', {
                              children: (0, H.jsxs)('tr', {
                                children: [
                                  (0, H.jsx)('th', { children: 'Rank' }),
                                  (0, H.jsx)('th', { children: 'Name' }),
                                  (0, H.jsx)('th', { children: 'Level' }),
                                ],
                              }),
                            }),
                            (0, H.jsx)('tbody', {
                              children: t.map(function (e, n) {
                                return (0,
                                H.jsxs)('tr', { children: [(0, H.jsx)('td', { children: d + n }), (0, H.jsx)('td', { children: e.name }), (0, H.jsx)('td', { children: e.level })] }, d + n)
                              }),
                            }),
                          ],
                        }),
                        (0, H.jsxs)('div', {
                          className: fe,
                          children: [
                            (0, H.jsx)('svg', {
                              xmlns: 'http://www.w3.org/2000/svg',
                              fill: 'white',
                              className: 'bi bi-arrow-left-circle',
                              viewBox: '0 0 16 16',
                              children: (0, H.jsx)('path', {
                                fillRule: 'evenodd',
                                d: 'M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z',
                              }),
                            }),
                            (0, H.jsx)('svg', {
                              xmlns: 'http://www.w3.org/2000/svg',
                              fill: 'white',
                              className: 'bi bi-arrow-right-circle',
                              viewBox: '0 0 16 16',
                              onClick: function () {
                                return m(d + 10)
                              },
                              children: (0, H.jsx)('path', {
                                fillRule: 'evenodd',
                                d: 'M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          )
        },
        Ne = 'Login_main__OFmWj',
        be = 'Login_wrapper__+Nfl1',
        ye = 'Login_login__dH0gZ',
        ke = 'Login_darkLayer__qL9s4',
        Ce = 'Login_loginBox__upQPW',
        Le = 'Login_createAccount__OEJ18',
        Se =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      function He(e) {
        return e.toLowerCase().match(Se)
      }
      function Ae(e) {
        return e.length >= 8
      }
      function Ge() {
        var e = (0, a.useState)(!1),
          n = (0, k.Z)(e, 2),
          s = n[0],
          t = n[1]
        return (0, H.jsxs)(H.Fragment, {
          children: [
            (0, H.jsx)('span', {
              style: { display: s ? '' : 'none' },
              children: ' Invalid Email ',
            }),
            (0, H.jsx)('input', {
              type: 'email',
              placeholder: 'Email',
              name: 'email',
              id: 'email',
              autoComplete: 'on',
              onChange: function (e) {
                return (function (e) {
                  He(e.target.value)
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
      function Ie(e) {
        var n = (0, a.useState)(!1),
          s = (0, k.Z)(n, 2),
          t = s[0],
          r = s[1]
        return (0, H.jsxs)(H.Fragment, {
          children: [
            (0, H.jsx)('span', {
              style: { display: t ? '' : 'none' },
              children: 'Minimum 8 Characters ',
            }),
            (0, H.jsx)('input', {
              type: 'password',
              placeholder: 'password',
              name: 'password',
              id: 'password',
              autoComplete: 'on',
              onChange: function (e) {
                return (function (e) {
                  Ae(e.target.value)
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
      function Be(e) {
        var n = (0, a.useState)(!1),
          s = (0, k.Z)(n, 2),
          t = s[0],
          r = s[1]
        return (0, H.jsxs)(H.Fragment, {
          children: [
            (0, H.jsx)('span', {
              style: { display: t ? '' : 'none' },
              children: 'Minimum 8 Characters ',
            }),
            (0, H.jsx)('input', {
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
      var Ee = function () {
          var e = a.useContext(i.i),
            n = I(),
            s = (0, r.s0)()
          return (0, H.jsxs)('main', {
            className: Ne,
            children: [
              (0, H.jsx)(G, { loggedIn: !0, desktop: n.width > 1024 }),
              (0, H.jsx)('div', {
                className: be,
                children: (0, H.jsx)('div', {
                  className: ye,
                  children: (0, H.jsx)('div', {
                    className: ke,
                    children: (0, H.jsxs)('form', {
                      className: Ce,
                      children: [
                        (0, H.jsx)('h1', { children: 'Sign In' }),
                        (0, H.jsx)(Ge, {}),
                        (0, H.jsx)(Ie, {}),
                        (0, H.jsx)('input', {
                          type: 'button',
                          value: 'Sign In',
                          onClick: function (n) {
                            return (function (n) {
                              var s = {
                                email: document.getElementById('email').value,
                                password:
                                  document.getElementById('password').value,
                              }
                              He(s.email) &&
                                Ae(s.password) &&
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
                                              (0, y.vx)(
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
                        (0, H.jsxs)('div', {
                          className: Le,
                          children: [
                            (0, H.jsx)('p', {
                              children: 'Dont have an account?',
                            }),
                            (0, H.jsx)('input', {
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
        Fe = 'Rules_main__GIxjv',
        Ze = 'Rules_wrapper__ReoAq',
        We = 'Rules_section__dSiFW',
        Me = 'Rules_bg__cnwNG',
        Re = 'Rules_one__68+Yw',
        De = 'Rules_ruletext__S6ckw'
      var Ue = function () {
          var e = I()
          return (0, H.jsxs)('main', {
            className: Fe,
            children: [
              (0, H.jsx)(G, { loggedIn: !0, desktop: e.width > 1024 }),
              (0, H.jsx)('div', { className: Ze }),
              (0, H.jsx)('div', {
                className: Me,
                children: (0, H.jsxs)('section', {
                  className: Re,
                  children: [
                    (0, H.jsx)('div', { className: We, children: 'Rules' }),
                    (0, H.jsxs)('div', {
                      className: De,
                      children: [
                        'This is a treasure kind of a game in which the participant should try to find the answer by identifying the similarity and connecting the given images. ',
                        (0, H.jsx)('br', {}),
                        (0, H.jsx)('br', {}),
                        'The game will be live for three days.',
                        (0, H.jsx)('br', {}),
                        (0, H.jsx)('br', {}),
                        'Each day is independent and one winner will be chosen each day.',
                        (0, H.jsx)('br', {}),
                        (0, H.jsx)('br', {}),
                        'The UI of the website has no relation to the questions.',
                        (0, H.jsx)('br', {}),
                        (0, H.jsx)('br', {}),
                        'Clues will be updated periodically in the specified time.',
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        },
        qe = 'Signup_main__UxcTo',
        ze = 'Signup_wrapper__8m1s3',
        Te = 'Signup_container__lV1-P',
        Oe = 'Signup_aldreadyHavingAccount__QNkPm',
        Je = s(221)
      var Pe = function () {
        var e = a.useContext(i.i),
          n = I(),
          s = (0, r.s0)()
        return (0, H.jsxs)('main', {
          className: qe,
          children: [
            (0, H.jsx)(G, { loggedIn: !0, desktop: n.width > 1024 }),
            (0, H.jsx)('div', {
              className: ze,
              children: (0, H.jsxs)('div', {
                className: Te,
                children: [
                  (0, H.jsx)('h1', { children: 'Signup' }),
                  (0, H.jsxs)('form', {
                    action: '',
                    children: [
                      (0, H.jsx)('input', {
                        type: 'text',
                        name: 'name',
                        id: 'name',
                        placeholder: 'Name',
                      }),
                      (0, H.jsx)(Ge, {}),
                      (0, H.jsx)('input', {
                        type: 'text',
                        name: 'clg',
                        id: 'clg',
                        placeholder: 'College',
                        required: !0,
                      }),
                      (0, H.jsx)(Ie, {}),
                      (0, H.jsx)(Be, {}),
                      (0, H.jsx)('input', {
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
                            He(s.email) &&
                              Ae(s.password) &&
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
                                            (0, y.vx)(t.token, e.handleIsLogin)
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
                      (0, H.jsxs)('div', {
                        className: Oe,
                        children: [
                          (0, H.jsx)('p', {
                            children: 'Already have an account?',
                          }),
                          (0, H.jsx)('input', {
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
            (0, H.jsx)(Je.mh, {}),
          ],
        })
      }
      var Qe = function () {
        return (0, H.jsx)('div', { children: 'Team' })
      }
      function Ye() {
        return (0, H.jsxs)(r.Z5, {
          children: [
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(xe, {}), path: '/game' }),
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(Qe, {}), path: '/team' }),
            (0, H.jsx)(r.AW, {
              element: (0, H.jsx)(we, {}),
              path: '/leaderboard',
            }),
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(F, {}), path: '/' }),
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(Ue, {}), path: '/rules' }),
            (0, H.jsx)(r.AW, {
              element: (0, H.jsx)(r.Fg, { to: '/' }),
              path: '/*',
            }),
          ],
        })
      }
      function Ve() {
        return (0, H.jsxs)(r.Z5, {
          children: [
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(F, {}), path: '/' }),
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(Ee, {}), path: '/login' }),
            (0, H.jsx)(r.AW, {
              element: (0, H.jsx)(Pe, {}),
              path: '/register',
            }),
            (0, H.jsx)(r.AW, {
              element: (0, H.jsx)(we, {}),
              path: '/leaderboard',
            }),
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(Ue, {}), path: '/rules' }),
            (0, H.jsx)(r.AW, {
              element: (0, H.jsx)(r.Fg, { to: '/' }),
              path: '/*',
            }),
          ],
        })
      }
      var Xe = function () {
        var e = a.useContext(i.i)
        return (0, H.jsx)(H.Fragment, {
          children: (0, H.jsx)(t.VK, {
            children:
              !0 === e.isLogin ? (0, H.jsx)(Ye, {}) : (0, H.jsx)(Ve, {}),
          }),
        })
      }
    },
  },
])
//# sourceMappingURL=197.b121fa7f.chunk.js.map
