'use strict'
;(self.webpackChunkitrix_game_client =
  self.webpackChunkitrix_game_client || []).push([
  [340],
  {
    1140: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return Be
          },
        })
      var t = s(2791),
        a = s(3504),
        r = s(6871),
        i = s(4348),
        l = 'Home_main__6GbQv',
        o = 'Home_wrapper__Ce14n',
        c = 'Home_content__wrapper__LkgMb',
        d = 'Home_column__X6izR',
        u = 'Home_img__N7NQ0',
        m = 'Home_img1__AsJPx',
        h = 'Home_img2__Dyjmg',
        x = 'Home_row__FYwgB',
        g = 'Home_content__header__Foxxu',
        j = 'Home_content__GWLDp',
        p = 'Home_after__login__0MMxI',
        v = 'Home_image__wrapper__wXJMU',
        _ = 'Home_content1__ZxbGG',
        f = 'Home_nav__links__XoDUA',
        w = 'Home_other__pages__hvh3W',
        N = 'Home_btnGrad__8azU4',
        y = 'Home_hi__erHpY',
        b = s(878),
        C = s(8152),
        k = 'Menu_MenuIcon__gFJdr',
        S = 'Menu_NavBar__nIA6a',
        A = 'Menu_active__LsPUM',
        H = s(184),
        B = [
          { name: 'Home', link: '/' },
          { name: 'Rules', link: '/rules' },
          { name: 'LeaderBoard', link: '/leaderboard' },
        ]
      function L(e) {
        var n = e.desktop,
          s = (0, t.useContext)(i.i),
          l = (0, t.useState)(!1),
          o = (0, C.Z)(l, 2),
          c = o[0],
          d = o[1],
          u = (0, r.TH)()
        return n || c
          ? (0, H.jsx)('nav', {
              className: S,
              children: (0, H.jsxs)('ul', {
                onClick: function () {
                  return d(!c)
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
                  B.map(function (e) {
                    return e.link === u.pathname
                      ? (0, H.jsx)(
                          a.rU,
                          {
                            to: e.link,
                            children: (0, H.jsx)('li', {
                              className: A,
                              children: e.name,
                            }),
                          },
                          e.name,
                        )
                      : (0, H.jsx)(
                          a.rU,
                          {
                            to: e.link,
                            children: (0, H.jsx)('li', { children: e.name }),
                          },
                          e.name,
                        )
                  }),
                  s.isLogin
                    ? (0, H.jsx)(a.rU, {
                        to: '/',
                        children: (0, H.jsx)('li', {
                          onClick: function () {
                            return (0, b.RD)(s.handleIsLogin)
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
              className: k,
              viewBox: '0 0 16 16',
              onClick: function () {
                return d(!c)
              },
              children: (0, H.jsx)('path', {
                fillRule: 'evenodd',
                d: 'M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z',
              }),
            })
      }
      function I() {
        var e = (0, t.useState)({ width: void 0, height: void 0 }),
          n = (0, C.Z)(e, 2),
          s = n[0],
          a = n[1]
        return (
          (0, t.useEffect)(function () {
            if ('undefined' !== typeof window) {
              var e = function () {
                a({ width: window.innerWidth, height: window.innerHeight })
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
      function E() {
        var e = I(),
          n = t.useContext(i.i)
        return (0, H.jsxs)('main', {
          className: l,
          children: [
            (0, H.jsx)(L, { loggedIn: n.isLogin, desktop: e.width > 1024 }),
            (0, H.jsx)('div', {
              className: o,
              children: (0, H.jsx)('div', {
                className: 'after__login',
                children: (0, H.jsx)('div', {
                  className: 'content1',
                  children: (0, H.jsxs)('div', {
                    className: p,
                    children: [
                      (0, H.jsxs)('div', {
                        className: _,
                        children: [
                          (0, H.jsx)('div', {
                            className: y,
                            title: 'Chamber of secrets',
                            children: 'Chamber of secrets',
                          }),
                          (0, H.jsxs)('div', {
                            className: f,
                            children: [
                              (0, H.jsx)(a.rU, {
                                className: N,
                                to: '/game',
                                children: 'Play Game',
                              }),
                              (0, H.jsx)(a.rU, {
                                className: w,
                                to: '/leaderboard',
                                children: 'LeaderBoard',
                              }),
                              (0, H.jsx)(a.rU, {
                                className: w,
                                to: '/team',
                                children: 'Our Team',
                              }),
                              (0, H.jsx)('span', {
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
                      (0, H.jsx)('div', { className: v }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        })
      }
      function Z() {
        var e = (0, r.s0)(),
          n = I()
        return (0, H.jsxs)('main', {
          className: l,
          children: [
            (0, H.jsx)(L, { loggedIn: !0, desktop: n.width > 1024 }),
            (0, H.jsx)('div', {
              className: o,
              children: (0, H.jsx)('div', {
                className: c,
                children: (0, H.jsxs)('div', {
                  className: j,
                  children: [
                    (0, H.jsx)('p', {
                      className: g,
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
                              className: ''.concat(u, ' ').concat(m),
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
                              className: ''.concat(u, ' ').concat(h),
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
          var e = t.useContext(i.i)
          return (0, H.jsx)('div', {
            children: e.isLogin ? (0, H.jsx)(E, {}) : (0, H.jsx)(Z, {}),
          })
        },
        W = {},
        M = s(5861),
        U = s(7757),
        q = s.n(U),
        z = s(4569),
        R = s.n(z),
        D = 'http://localhost:3001/api/game'
      function O(e) {
        var n,
          s = e + '='
        return (
          decodeURIComponent(document.cookie)
            .split('; ')
            .forEach(function (e) {
              0 === e.indexOf(s) && (n = e.substring(s.length))
            }),
          n
        )
      }
      var T = (function () {
          var e = (0, M.Z)(
            q().mark(function e(n) {
              var s, t
              return q().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (s = O('jwt')),
                        (t = {}),
                        (e.next = 4),
                        R()
                          .post(''.concat(D, '/verify/'), n, {
                            headers: { Authorization: 'Bearer ' + s },
                          })
                          .then(function (e) {
                            t = e.data
                          })
                      )
                    case 4:
                      return e.abrupt('return', t)
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
        G = (function () {
          var e = (0, M.Z)(
            q().mark(function e() {
              var n, s
              return q().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = O('jwt')),
                        (s = {}),
                        (e.next = 4),
                        R()
                          .get(''.concat(D), {
                            headers: { Authorization: 'Bearer ' + n },
                          })
                          .then(function (e) {
                            s = e.data
                          })
                      )
                    case 4:
                      return e.abrupt('return', s)
                    case 5:
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
        P = s(6952)
      function Q(e) {
        var n = (0, t.useState)(0),
          s = (0, C.Z)(n, 2),
          a = s[0],
          r = s[1],
          i = t.useContext($),
          l = { images: i.data.questions, hints: i.data.hints }
        return 'Mobile' === e.for
          ? (0, H.jsxs)('div', {
              className: 'QuestionBar',
              children: [
                (0, H.jsx)('img', {
                  className: 'prev-icon',
                  src: 'images/right.png',
                  alt: 'right image',
                  onClick: function () {
                    a >= l.images.length - 1 ? r(0) : r(a + 1)
                  },
                }),
                (0, H.jsx)('img', {
                  className: 'Question-Img',
                  src: l.images[a].url,
                }),
                (0, H.jsx)('img', {
                  className: 'next-icon',
                  src: 'images/right.png',
                  alt: 'left image',
                  onClick: function () {
                    r(a <= 0 ? l.images.length - 1 : a - 1)
                  },
                }),
              ],
            })
          : (0, H.jsx)('div', {
              className: 'QuestionBar',
              children: l.images.map(function (e) {
                return (0,
                H.jsx)('img', { src: e.url, className: 'Question-Img', alt: 'Question Image' }, e.id)
              }),
            })
      }
      function J(e) {
        return !0 === e.show
          ? (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsx)('div', {
                  className: 'GreyLayer',
                  onClick: function () {
                    e.setShowHint(!1)
                  },
                }),
                (0, H.jsx)('div', {
                  className: 'HintBox',
                  children: e.hints.map(function (e) {
                    return (0,
                    H.jsx)(H.Fragment, { children: (0, H.jsxs)('p', { children: ['Hint ', e.id, ': \xa0\xa0 ', e.msg] }, e.id) })
                  }),
                }),
              ],
            })
          : (0, H.jsx)(H.Fragment, {})
      }
      function X(e) {
        var n = (0, t.useState)(!1),
          s = (0, C.Z)(n, 2),
          a = s[0],
          r = s[1],
          i = (0, t.useState)(''),
          l = (0, C.Z)(i, 2),
          o = l[0],
          c = l[1],
          d = (0, t.useState)(!1),
          u = (0, C.Z)(d, 2),
          m = u[0],
          h = u[1],
          x = t.useContext($)
        function g() {
          0 !== o.trim().length
            ? (h(!0),
              T({ level: x.data.level, answer: o }).then(function (e) {
                if ((h(!1), console.log(e), 'success' === e.message)) {
                  var n = e.data,
                    s = {
                      level: n.level,
                      hints: n.question.hints,
                      questions: n.question.images,
                    }
                  x.changeData(s), c(''), x.handleError(e.message)
                } else h(!1), x.handleError(e.message)
              }))
            : x.handleError("Answer Can't Be Empty")
        }
        return 'Mobile' === e.for
          ? (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsx)('div', {
                  className: 'AnswerBar',
                  children: (0, H.jsxs)('form', {
                    children: [
                      (0, H.jsx)('input', {
                        className: 'AnswerBar-Input',
                        type: 'text',
                        value: o,
                        onChange: function (e) {
                          c(e.target.value)
                        },
                        placeholder: 'Enter Answer',
                      }),
                      (0, H.jsxs)('div', {
                        className: 'AnswerBar-Bottom',
                        children: [
                          (0, H.jsxs)('button', {
                            className: 'AnswerBar-Hint',
                            onClick: function (e) {
                              e.preventDefault(), r(!0)
                            },
                            children: [
                              'Hint',
                              (0, H.jsx)('img', {
                                className: 'AnswerBar-Icon',
                                src: 'images/idea.jpg',
                              }),
                            ],
                          }),
                          (0, H.jsx)('button', {
                            disabled: m,
                            type: 'button',
                            className: 'AnswerBar-Submit',
                            onClick: g,
                            children: 'submit',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, H.jsx)(J, { show: a, hints: x.data.hints, setShowHint: r }),
              ],
            })
          : (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsx)('div', {
                  className: 'AnswerBar',
                  children: (0, H.jsxs)('div', {
                    className: 'AnswerBar-Oneline-Bottom',
                    children: [
                      (0, H.jsxs)('button', {
                        className: 'AnswerBar-Hint-lap',
                        onClick: function (e) {
                          e.preventDefault(), r(!0)
                        },
                        children: [
                          (0, H.jsx)('p', { children: 'Hint' }),
                          (0, H.jsx)('img', {
                            className: 'AnswerBar-Icon',
                            src: 'images/idea.jpg',
                          }),
                        ],
                      }),
                      (0, H.jsx)('input', {
                        type: 'text',
                        className: 'AnswerBar-Input',
                        placeholder: 'Enter Answer',
                        value: o,
                        onChange: function (e) {
                          c(e.target.value)
                        },
                      }),
                      (0, H.jsx)('button', {
                        className: 'AnswerBar-Submit-lap',
                        type: 'button',
                        onClick: g,
                        children: 'submit',
                      }),
                    ],
                  }),
                }),
                (0, H.jsx)(J, { show: a, hints: x.data.hints, setShowHint: r }),
              ],
            })
      }
      var Y = s(7948),
        V = s.n(Y),
        K = s(4221),
        $ = (s(1138), t.createContext())
      var ee = function (e) {
        var n = (0, t.useState)({
            width: window.innerWidth,
            height: window.innerHeight,
          }),
          s = (0, C.Z)(n, 2),
          a = s[0],
          r = s[1],
          i = (0, t.useState)(null),
          l = (0, C.Z)(i, 2),
          o = l[0],
          c = l[1],
          d = (0, t.useState)(''),
          u = (0, C.Z)(d, 2),
          m = u[0],
          h = u[1],
          x = (0, t.useState)(!1),
          g = (0, C.Z)(x, 2),
          j = g[0],
          p = g[1],
          v = (0, t.useState)(''),
          _ = (0, C.Z)(v, 2),
          f = _[0],
          w = _[1],
          N = {
            data: o,
            changeData: c,
            message: m,
            handleMessage: h,
            error: f,
            handleError: w,
          }
        ;(0, t.useEffect)(function () {
          function e() {
            r({ width: window.innerWidth, height: window.innerHeight })
          }
          return (
            G().then(function (e) {
              if ('success' === e.message) {
                var n = {}
                ;(n.level = e.data.level),
                  (n.questions = e.data.question.images),
                  (n.hints = e.data.question.hints),
                  c(n)
              } else h(e.message)
            }),
            window.addEventListener('resize', e),
            function () {
              window.removeEventListener('resize', e)
            }
          )
        }, []),
          (0, t.useEffect)(
            function () {
              console.log(f),
                '' !== f && 'success' !== f
                  ? 'game ended' === f
                    ? (c(null),
                      h('you have completed the game !!'),
                      document
                        .getElementsByClassName('party__button')[0]
                        .click())
                    : (K.fn.error(f), w(''))
                  : 'success' === f && (K.fn.success(f), w(''))
            },
            [f],
          )
        var y = I()
        return (0, H.jsxs)('main', {
          className: W.main,
          children: [
            (0, H.jsx)(L, { loggedIn: !0, desktop: y.width > 1024 }),
            (0, H.jsx)('div', { className: W.wrapper }),
            (0, H.jsxs)($.Provider, {
              value: N,
              children: [
                (0, H.jsx)('button', {
                  className: W.party__button,
                  style: {
                    display: 'none',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    translate: 'transform(-50%,-50%)',
                  },
                }),
                (0, H.jsxs)('div', {
                  className: W.GamePage,
                  children: [
                    (0, H.jsxs)('div', {
                      className: W.game__nav,
                      children: [
                        (0, H.jsx)('span', { className: W.game__menu }),
                        (0, H.jsx)('span', {
                          className: W.trophy,
                          children:
                            null !== o &&
                            (0, H.jsxs)('div', {
                              children: [
                                o.level,
                                ' ',
                                (0, H.jsx)(P.xng, {
                                  style: { color: 'yellow' },
                                }),
                                ' ',
                              ],
                            }),
                        }),
                      ],
                    }),
                    null === o
                      ? (0, H.jsx)('div', {
                          className: W.message__div,
                          children: '' === m ? 'loading' : m,
                        })
                      : a.width <= 1300
                      ? (0, H.jsxs)(H.Fragment, {
                          children: [
                            (0, H.jsx)(Q, { for: 'Mobile' }),
                            (0, H.jsx)(X, { for: 'Mobile' }),
                          ],
                        })
                      : (0, H.jsxs)(H.Fragment, {
                          children: [(0, H.jsx)(Q, {}), (0, H.jsx)(X, {})],
                        }),
                    (0, H.jsxs)(V(), {
                      className: W.success__modal,
                      isOpen: j,
                      children: [
                        (0, H.jsxs)('button', {
                          onClick: function () {
                            p(!1)
                          },
                          children: [' ', 'X'],
                        }),
                        (0, H.jsx)('p', { children: 'Success!!' }),
                      ],
                    }),
                  ],
                }),
                (0, H.jsx)(K.mh, {}),
              ],
            }),
          ],
        })
      }
      var ne = function () {
          return (0, H.jsx)('div', { children: 'Leaderboard' })
        },
        se = 'Login_main__OFmWj',
        te = 'Login_wrapper__+Nfl1',
        ae = 'Login_login__dH0gZ',
        re = 'Login_darkLayer__qL9s4',
        ie = 'Login_loginBox__upQPW',
        le = 'Login_createAccount__OEJ18',
        oe =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      function ce(e) {
        return e.toLowerCase().match(oe)
      }
      function de(e) {
        return e.length >= 8
      }
      function ue() {
        var e = (0, t.useState)(!1),
          n = (0, C.Z)(e, 2),
          s = n[0],
          a = n[1]
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
                  ce(e.target.value)
                    ? ((e.target.style.border = '0.1rem solid green'), a(!1))
                    : ((e.target.style.border = '0.1rem solid red'), a(!0)),
                    '' === e.target.value &&
                      (a(!1), (e.target.style.border = ''))
                })(e)
              },
              required: !0,
            }),
          ],
        })
      }
      function me(e) {
        var n = (0, t.useState)(!1),
          s = (0, C.Z)(n, 2),
          a = s[0],
          r = s[1]
        return (0, H.jsxs)(H.Fragment, {
          children: [
            (0, H.jsx)('span', {
              style: { display: a ? '' : 'none' },
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
                  de(e.target.value)
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
      function he(e) {
        var n = (0, t.useState)(!1),
          s = (0, C.Z)(n, 2),
          a = s[0],
          r = s[1]
        return (0, H.jsxs)(H.Fragment, {
          children: [
            (0, H.jsx)('span', {
              style: { display: a ? '' : 'none' },
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
      var xe = function () {
          var e = t.useContext(i.i),
            n = I(),
            s = (0, r.s0)()
          return (0, H.jsxs)('main', {
            className: se,
            children: [
              (0, H.jsx)(L, { loggedIn: !0, desktop: n.width > 1024 }),
              (0, H.jsx)('div', {
                className: te,
                children: (0, H.jsx)('div', {
                  className: ae,
                  children: (0, H.jsx)('div', {
                    className: re,
                    children: (0, H.jsxs)('form', {
                      className: ie,
                      children: [
                        (0, H.jsx)('h1', { children: 'Sign In' }),
                        (0, H.jsx)(ue, {}),
                        (0, H.jsx)(me, {}),
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
                              ce(s.email) &&
                                de(s.password) &&
                                (0, M.Z)(
                                  q().mark(function n() {
                                    var t, a
                                    return q().wrap(function (n) {
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
                                              (t = n.sent),
                                              (n.next = 5),
                                              t.json()
                                            )
                                          case 5:
                                            'success' ===
                                              (a = n.sent).message &&
                                              (0, b.vx)(
                                                a.token,
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
                          className: le,
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
        ge = 'Rules_main__GIxjv',
        je = 'Rules_wrapper__ReoAq',
        pe = 'Rules_section__dSiFW',
        ve = 'Rules_bg__cnwNG',
        _e = 'Rules_one__68+Yw',
        fe = 'Rules_ruletext__S6ckw'
      var we = function () {
          var e = I()
          return (0, H.jsxs)('main', {
            className: ge,
            children: [
              (0, H.jsx)(L, { loggedIn: !0, desktop: e.width > 1024 }),
              (0, H.jsx)('div', { className: je }),
              (0, H.jsx)('div', {
                className: ve,
                children: (0, H.jsxs)('section', {
                  className: _e,
                  children: [
                    (0, H.jsx)('div', { className: pe, children: 'Rules' }),
                    (0, H.jsxs)('div', {
                      className: fe,
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
        Ne = 'Signup_main__UxcTo',
        ye = 'Signup_wrapper__8m1s3',
        be = 'Signup_container__lV1-P',
        Ce = 'Signup_aldreadyHavingAccount__QNkPm'
      var ke = function () {
        var e = t.useContext(i.i),
          n = I(),
          s = (0, r.s0)()
        return (0, H.jsxs)('main', {
          className: Ne,
          children: [
            (0, H.jsx)(L, { loggedIn: !0, desktop: n.width > 1024 }),
            (0, H.jsx)('div', {
              className: ye,
              children: (0, H.jsxs)('div', {
                className: be,
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
                      (0, H.jsx)(ue, {}),
                      (0, H.jsx)('input', {
                        type: 'text',
                        name: 'clg',
                        id: 'clg',
                        placeholder: 'College',
                        required: !0,
                      }),
                      (0, H.jsx)(me, {}),
                      (0, H.jsx)(he, {}),
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
                            ce(s.email) &&
                              de(s.password) &&
                              (0, M.Z)(
                                q().mark(function n() {
                                  var t, a
                                  return q().wrap(function (n) {
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
                                            (t = n.sent), (n.next = 5), t.json()
                                          )
                                        case 5:
                                          'success' === (a = n.sent).message &&
                                            (0, b.vx)(a.token, e.handleIsLogin)
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
                        className: Ce,
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
            (0, H.jsx)(K.mh, {}),
          ],
        })
      }
      var Se = function () {
        return (0, H.jsx)('div', { children: 'Team' })
      }
      function Ae() {
        return (0, H.jsxs)(r.Z5, {
          children: [
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(ee, {}), path: '/game' }),
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(Se, {}), path: '/team' }),
            (0, H.jsx)(r.AW, {
              element: (0, H.jsx)(ne, {}),
              path: '/leaderboard',
            }),
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(F, {}), path: '/' }),
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(we, {}), path: '/rules' }),
            (0, H.jsx)(r.AW, {
              element: (0, H.jsx)(r.Fg, { to: '/' }),
              path: '/*',
            }),
          ],
        })
      }
      function He() {
        return (0, H.jsxs)(r.Z5, {
          children: [
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(F, {}), path: '/' }),
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(xe, {}), path: '/login' }),
            (0, H.jsx)(r.AW, {
              element: (0, H.jsx)(ke, {}),
              path: '/register',
            }),
            (0, H.jsx)(r.AW, { element: (0, H.jsx)(we, {}), path: '/rules' }),
            (0, H.jsx)(r.AW, {
              element: (0, H.jsx)(r.Fg, { to: '/' }),
              path: '/*',
            }),
          ],
        })
      }
      var Be = function () {
        var e = t.useContext(i.i)
        return (0, H.jsx)(H.Fragment, {
          children: (0, H.jsx)(a.VK, {
            children:
              !0 === e.isLogin ? (0, H.jsx)(Ae, {}) : (0, H.jsx)(He, {}),
          }),
        })
      }
    },
  },
])
//# sourceMappingURL=340.81e89721.chunk.js.map
