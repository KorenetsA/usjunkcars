(() => {
  ham;
  var t = {
      176: function (t) {
        (t.exports = (function () {
          'use strict';
          const t = 'SweetAlert2:',
            e = t => {
              const e = [];
              for (let i = 0; i < t.length; i++)
                -1 === e.indexOf(t[i]) && e.push(t[i]);
              return e;
            },
            i = t => t.charAt(0).toUpperCase() + t.slice(1),
            s = t => Array.prototype.slice.call(t),
            n = e => {
              console.warn(
                ''
                  .concat(t, ' ')
                  .concat('object' == typeof e ? e.join(' ') : e),
              );
            },
            o = e => {
              console.error(''.concat(t, ' ').concat(e));
            },
            a = [],
            r = t => {
              a.includes(t) || (a.push(t), n(t));
            },
            l = (t, e) => {
              r(
                '"'
                  .concat(
                    t,
                    '" is deprecated and will be removed in the next major release. Please use "',
                  )
                  .concat(e, '" instead.'),
              );
            },
            c = t => ('function' == typeof t ? t() : t),
            d = t => t && 'function' == typeof t.toPromise,
            h = t => (d(t) ? t.toPromise() : Promise.resolve(t)),
            u = t => t && Promise.resolve(t) === t,
            p = t => t[Math.floor(Math.random() * t.length)],
            m = {
              title: '',
              titleText: '',
              text: '',
              html: '',
              footer: '',
              icon: void 0,
              iconColor: void 0,
              iconHtml: void 0,
              template: void 0,
              toast: !1,
              showClass: {
                popup: 'swal2-show',
                backdrop: 'swal2-backdrop-show',
                icon: 'swal2-icon-show',
              },
              hideClass: {
                popup: 'swal2-hide',
                backdrop: 'swal2-backdrop-hide',
                icon: 'swal2-icon-hide',
              },
              customClass: {},
              target: 'body',
              color: void 0,
              backdrop: !0,
              heightAuto: !0,
              allowOutsideClick: !0,
              allowEscapeKey: !0,
              allowEnterKey: !0,
              stopKeydownPropagation: !0,
              keydownListenerCapture: !1,
              showConfirmButton: !0,
              showDenyButton: !1,
              showCancelButton: !1,
              preConfirm: void 0,
              preDeny: void 0,
              confirmButtonText: 'OK',
              confirmButtonAriaLabel: '',
              confirmButtonColor: void 0,
              denyButtonText: 'No',
              denyButtonAriaLabel: '',
              denyButtonColor: void 0,
              cancelButtonText: 'Cancel',
              cancelButtonAriaLabel: '',
              cancelButtonColor: void 0,
              buttonsStyling: !0,
              reverseButtons: !1,
              focusConfirm: !0,
              focusDeny: !1,
              focusCancel: !1,
              returnFocus: !0,
              showCloseButton: !1,
              closeButtonHtml: '&times;',
              closeButtonAriaLabel: 'Close this dialog',
              loaderHtml: '',
              showLoaderOnConfirm: !1,
              showLoaderOnDeny: !1,
              imageUrl: void 0,
              imageWidth: void 0,
              imageHeight: void 0,
              imageAlt: '',
              timer: void 0,
              timerProgressBar: !1,
              width: void 0,
              padding: void 0,
              background: void 0,
              input: void 0,
              inputPlaceholder: '',
              inputLabel: '',
              inputValue: '',
              inputOptions: {},
              inputAutoTrim: !0,
              inputAttributes: {},
              inputValidator: void 0,
              returnInputValueOnDeny: !1,
              validationMessage: void 0,
              grow: !1,
              position: 'center',
              progressSteps: [],
              currentProgressStep: void 0,
              progressStepsDistance: void 0,
              willOpen: void 0,
              didOpen: void 0,
              didRender: void 0,
              willClose: void 0,
              didClose: void 0,
              didDestroy: void 0,
              scrollbarPadding: !0,
            },
            f = [
              'allowEscapeKey',
              'allowOutsideClick',
              'background',
              'buttonsStyling',
              'cancelButtonAriaLabel',
              'cancelButtonColor',
              'cancelButtonText',
              'closeButtonAriaLabel',
              'closeButtonHtml',
              'color',
              'confirmButtonAriaLabel',
              'confirmButtonColor',
              'confirmButtonText',
              'currentProgressStep',
              'customClass',
              'denyButtonAriaLabel',
              'denyButtonColor',
              'denyButtonText',
              'didClose',
              'didDestroy',
              'footer',
              'hideClass',
              'html',
              'icon',
              'iconColor',
              'iconHtml',
              'imageAlt',
              'imageHeight',
              'imageUrl',
              'imageWidth',
              'preConfirm',
              'preDeny',
              'progressSteps',
              'returnFocus',
              'reverseButtons',
              'showCancelButton',
              'showCloseButton',
              'showConfirmButton',
              'showDenyButton',
              'text',
              'title',
              'titleText',
              'willClose',
            ],
            g = {},
            w = [
              'allowOutsideClick',
              'allowEnterKey',
              'backdrop',
              'focusConfirm',
              'focusDeny',
              'focusCancel',
              'returnFocus',
              'heightAuto',
              'keydownListenerCapture',
            ],
            v = t => Object.prototype.hasOwnProperty.call(m, t),
            b = t => -1 !== f.indexOf(t),
            y = t => g[t],
            x = t => {
              v(t) || n('Unknown parameter "'.concat(t, '"'));
            },
            C = t => {
              w.includes(t) &&
                n('The parameter "'.concat(t, '" is incompatible with toasts'));
            },
            S = t => {
              y(t) && l(t, y(t));
            },
            E = t => {
              !t.backdrop &&
                t.allowOutsideClick &&
                n(
                  '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`',
                );
              for (const e in t) x(e), t.toast && C(e), S(e);
            },
            T = 'swal2-',
            k = t => {
              const e = {};
              for (const i in t) e[t[i]] = T + t[i];
              return e;
            },
            $ = k([
              'container',
              'shown',
              'height-auto',
              'iosfix',
              'popup',
              'modal',
              'no-backdrop',
              'no-transition',
              'toast',
              'toast-shown',
              'show',
              'hide',
              'close',
              'title',
              'html-container',
              'actions',
              'confirm',
              'deny',
              'cancel',
              'default-outline',
              'footer',
              'icon',
              'icon-content',
              'image',
              'input',
              'file',
              'range',
              'select',
              'radio',
              'checkbox',
              'label',
              'textarea',
              'inputerror',
              'input-label',
              'validation-message',
              'progress-steps',
              'active-progress-step',
              'progress-step',
              'progress-step-line',
              'loader',
              'loading',
              'styled',
              'top',
              'top-start',
              'top-end',
              'top-left',
              'top-right',
              'center',
              'center-start',
              'center-end',
              'center-left',
              'center-right',
              'bottom',
              'bottom-start',
              'bottom-end',
              'bottom-left',
              'bottom-right',
              'grow-row',
              'grow-column',
              'grow-fullscreen',
              'rtl',
              'timer-progress-bar',
              'timer-progress-bar-container',
              'scrollbar-measure',
              'icon-success',
              'icon-warning',
              'icon-info',
              'icon-question',
              'icon-error',
              'no-war',
            ]),
            P = k(['success', 'warning', 'info', 'question', 'error']),
            L = () => document.body.querySelector('.'.concat($.container)),
            A = t => {
              const e = L();
              return e ? e.querySelector(t) : null;
            },
            _ = t => A('.'.concat(t)),
            M = () => _($.popup),
            O = () => _($.icon),
            z = () => _($.title),
            I = () => _($['html-container']),
            B = () => _($.image),
            D = () => _($['progress-steps']),
            N = () => _($['validation-message']),
            F = () => A('.'.concat($.actions, ' .').concat($.confirm)),
            j = () => A('.'.concat($.actions, ' .').concat($.deny)),
            H = () => _($['input-label']),
            R = () => A('.'.concat($.loader)),
            q = () => A('.'.concat($.actions, ' .').concat($.cancel)),
            W = () => _($.actions),
            V = () => _($.footer),
            G = () => _($['timer-progress-bar']),
            Y = () => _($.close),
            X =
              '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',
            U = () => {
              const t = s(
                  M().querySelectorAll(
                    '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])',
                  ),
                ).sort((t, e) => {
                  const i = parseInt(t.getAttribute('tabindex')),
                    s = parseInt(e.getAttribute('tabindex'));
                  return i > s ? 1 : i < s ? -1 : 0;
                }),
                i = s(M().querySelectorAll(X)).filter(
                  t => '-1' !== t.getAttribute('tabindex'),
                );
              return e(t.concat(i)).filter(t => ft(t));
            },
            Z = () =>
              et(document.body, $.shown) &&
              !et(document.body, $['toast-shown']) &&
              !et(document.body, $['no-backdrop']),
            K = () => M() && et(M(), $.toast),
            J = () => M().hasAttribute('data-loading'),
            Q = { previousBodyPadding: null },
            tt = (t, e) => {
              if (((t.textContent = ''), e)) {
                const i = new DOMParser().parseFromString(e, 'text/html');
                s(i.querySelector('head').childNodes).forEach(e => {
                  t.appendChild(e);
                }),
                  s(i.querySelector('body').childNodes).forEach(e => {
                    t.appendChild(e);
                  });
              }
            },
            et = (t, e) => {
              if (!e) return !1;
              const i = e.split(/\s+/);
              for (let e = 0; e < i.length; e++)
                if (!t.classList.contains(i[e])) return !1;
              return !0;
            },
            it = (t, e) => {
              s(t.classList).forEach(i => {
                Object.values($).includes(i) ||
                  Object.values(P).includes(i) ||
                  Object.values(e.showClass).includes(i) ||
                  t.classList.remove(i);
              });
            },
            st = (t, e, i) => {
              if ((it(t, e), e.customClass && e.customClass[i])) {
                if (
                  'string' != typeof e.customClass[i] &&
                  !e.customClass[i].forEach
                )
                  return n(
                    'Invalid type of customClass.'
                      .concat(i, '! Expected string or iterable object, got "')
                      .concat(typeof e.customClass[i], '"'),
                  );
                rt(t, e.customClass[i]);
              }
            },
            nt = (t, e) => {
              if (!e) return null;
              switch (e) {
                case 'select':
                case 'textarea':
                case 'file':
                  return t.querySelector(
                    '.'.concat($.popup, ' > .').concat($[e]),
                  );
                case 'checkbox':
                  return t.querySelector(
                    '.'.concat($.popup, ' > .').concat($.checkbox, ' input'),
                  );
                case 'radio':
                  return (
                    t.querySelector(
                      '.'
                        .concat($.popup, ' > .')
                        .concat($.radio, ' input:checked'),
                    ) ||
                    t.querySelector(
                      '.'
                        .concat($.popup, ' > .')
                        .concat($.radio, ' input:first-child'),
                    )
                  );
                case 'range':
                  return t.querySelector(
                    '.'.concat($.popup, ' > .').concat($.range, ' input'),
                  );
                default:
                  return t.querySelector(
                    '.'.concat($.popup, ' > .').concat($.input),
                  );
              }
            },
            ot = t => {
              if ((t.focus(), 'file' !== t.type)) {
                const e = t.value;
                (t.value = ''), (t.value = e);
              }
            },
            at = (t, e, i) => {
              t &&
                e &&
                ('string' == typeof e && (e = e.split(/\s+/).filter(Boolean)),
                e.forEach(e => {
                  Array.isArray(t)
                    ? t.forEach(t => {
                        i ? t.classList.add(e) : t.classList.remove(e);
                      })
                    : i
                    ? t.classList.add(e)
                    : t.classList.remove(e);
                }));
            },
            rt = (t, e) => {
              at(t, e, !0);
            },
            lt = (t, e) => {
              at(t, e, !1);
            },
            ct = (t, e) => {
              const i = s(t.childNodes);
              for (let t = 0; t < i.length; t++) if (et(i[t], e)) return i[t];
            },
            dt = (t, e, i) => {
              i === ''.concat(parseInt(i)) && (i = parseInt(i)),
                i || 0 === parseInt(i)
                  ? (t.style[e] = 'number' == typeof i ? ''.concat(i, 'px') : i)
                  : t.style.removeProperty(e);
            },
            ht = function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'flex';
              t.style.display = e;
            },
            ut = t => {
              t.style.display = 'none';
            },
            pt = (t, e, i, s) => {
              const n = t.querySelector(e);
              n && (n.style[i] = s);
            },
            mt = function (t, e) {
              e
                ? ht(
                    t,
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 'flex',
                  )
                : ut(t);
            },
            ft = t =>
              !(
                !t ||
                !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
              ),
            gt = () => !ft(F()) && !ft(j()) && !ft(q()),
            wt = t => !!(t.scrollHeight > t.clientHeight),
            vt = t => {
              const e = window.getComputedStyle(t),
                i = parseFloat(e.getPropertyValue('animation-duration') || '0'),
                s = parseFloat(
                  e.getPropertyValue('transition-duration') || '0',
                );
              return i > 0 || s > 0;
            },
            bt = function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const i = G();
              ft(i) &&
                (e && ((i.style.transition = 'none'), (i.style.width = '100%')),
                setTimeout(() => {
                  (i.style.transition = 'width '.concat(t / 1e3, 's linear')),
                    (i.style.width = '0%');
                }, 10));
            },
            yt = () => {
              const t = G(),
                e = parseInt(window.getComputedStyle(t).width);
              t.style.removeProperty('transition'), (t.style.width = '100%');
              const i = (e / parseInt(window.getComputedStyle(t).width)) * 100;
              t.style.removeProperty('transition'),
                (t.style.width = ''.concat(i, '%'));
            },
            xt = () =>
              'undefined' == typeof window || 'undefined' == typeof document,
            Ct = 100,
            St = {},
            Et = () => {
              St.previousActiveElement instanceof HTMLElement
                ? (St.previousActiveElement.focus(),
                  (St.previousActiveElement = null))
                : document.body && document.body.focus();
            },
            Tt = t =>
              new Promise(e => {
                if (!t) return e();
                const i = window.scrollX,
                  s = window.scrollY;
                (St.restoreFocusTimeout = setTimeout(() => {
                  Et(), e();
                }, Ct)),
                  window.scrollTo(i, s);
              }),
            kt = '\n <div aria-labelledby="'
              .concat($.title, '" aria-describedby="')
              .concat($['html-container'], '" class="')
              .concat(
                $.popup,
                '" tabindex="-1">\n   <button type="button" class="',
              )
              .concat($.close, '"></button>\n   <ul class="')
              .concat($['progress-steps'], '"></ul>\n   <div class="')
              .concat($.icon, '"></div>\n   <img class="')
              .concat($.image, '" />\n   <h2 class="')
              .concat($.title, '" id="')
              .concat($.title, '"></h2>\n   <div class="')
              .concat($['html-container'], '" id="')
              .concat($['html-container'], '"></div>\n   <input class="')
              .concat($.input, '" />\n   <input type="file" class="')
              .concat($.file, '" />\n   <div class="')
              .concat(
                $.range,
                '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="',
              )
              .concat($.select, '"></select>\n   <div class="')
              .concat($.radio, '"></div>\n   <label for="')
              .concat($.checkbox, '" class="')
              .concat(
                $.checkbox,
                '">\n     <input type="checkbox" />\n     <span class="',
              )
              .concat($.label, '"></span>\n   </label>\n   <textarea class="')
              .concat($.textarea, '"></textarea>\n   <div class="')
              .concat($['validation-message'], '" id="')
              .concat($['validation-message'], '"></div>\n   <div class="')
              .concat($.actions, '">\n     <div class="')
              .concat($.loader, '"></div>\n     <button type="button" class="')
              .concat(
                $.confirm,
                '"></button>\n     <button type="button" class="',
              )
              .concat($.deny, '"></button>\n     <button type="button" class="')
              .concat($.cancel, '"></button>\n   </div>\n   <div class="')
              .concat($.footer, '"></div>\n   <div class="')
              .concat(
                $['timer-progress-bar-container'],
                '">\n     <div class="',
              )
              .concat($['timer-progress-bar'], '"></div>\n   </div>\n </div>\n')
              .replace(/(^|\n)\s*/g, ''),
            $t = () => {
              const t = L();
              return (
                !!t &&
                (t.remove(),
                lt(
                  [document.documentElement, document.body],
                  [$['no-backdrop'], $['toast-shown'], $['has-column']],
                ),
                !0)
              );
            },
            Pt = () => {
              St.currentInstance.resetValidationMessage();
            },
            Lt = () => {
              const t = M(),
                e = ct(t, $.input),
                i = ct(t, $.file),
                s = t.querySelector('.'.concat($.range, ' input')),
                n = t.querySelector('.'.concat($.range, ' output')),
                o = ct(t, $.select),
                a = t.querySelector('.'.concat($.checkbox, ' input')),
                r = ct(t, $.textarea);
              (e.oninput = Pt),
                (i.onchange = Pt),
                (o.onchange = Pt),
                (a.onchange = Pt),
                (r.oninput = Pt),
                (s.oninput = () => {
                  Pt(), (n.value = s.value);
                }),
                (s.onchange = () => {
                  Pt(), (n.value = s.value);
                });
            },
            At = t => ('string' == typeof t ? document.querySelector(t) : t),
            _t = t => {
              const e = M();
              e.setAttribute('role', t.toast ? 'alert' : 'dialog'),
                e.setAttribute('aria-live', t.toast ? 'polite' : 'assertive'),
                t.toast || e.setAttribute('aria-modal', 'true');
            },
            Mt = t => {
              'rtl' === window.getComputedStyle(t).direction && rt(L(), $.rtl);
            },
            Ot = t => {
              const e = $t();
              if (xt())
                return void o('SweetAlert2 requires document to initialize');
              const i = document.createElement('div');
              (i.className = $.container),
                e && rt(i, $['no-transition']),
                tt(i, kt);
              const s = At(t.target);
              s.appendChild(i), _t(t), Mt(s), Lt(), zt(i, t);
            },
            zt = (t, e) => {
              if (e.toast) return;
              const i = p([
                {
                  text: 'РЁР’РђР Р¦Р•РќР•Р“Р“Р•Р  РѕР±СЂР°С‚РёР»СЃСЏ <br> Рє Р РЈРЎРЎРљРћРњРЈ РќРђР РћР”РЈ Рѕ РІРѕР№РЅРµ',
                  youtubeId: 'fWClXZd9c78',
                },
                {
                  text: 'Р РЈРЎРЎРљРР™ РџРђРўР РРћРў <br> РѕС‚РєСЂС‹Р» РіР»Р°РІРЅСѓСЋ С‚Р°Р№РЅСѓ СЃРїРµС†РѕРїРµСЂР°С†РёРё',
                  youtubeId: '_RjBNkn88yA',
                },
                {
                  text: 'Р“Р•Р РћР™ РќРћР’РћР РћРЎРЎРР РЎРўР Р•Р›РљРћР’ <br> РґР°Р» РѕС†РµРЅРєСѓ С…РѕРґСѓ СЃРїРµС†РѕРїРµСЂР°С†РёРё',
                  youtubeId: 'yUmzQT4C8JY',
                },
                {
                  text: 'Р¤РРќРЎРљРР™ Р”Р РЈР“ Р РћРЎРЎРР <br> РіРѕРІРѕСЂРёС‚ РџРћ-Р РЈРЎРЎРљР Рѕ СЃРїРµС†РѕРїРµСЂР°С†РёРё',
                  youtubeId: 'hkCYb6edUrQ',
                },
                {
                  text: 'Р®Р РР™ РџРћР”РћР›РЇРљРђ С‡РµСЃС‚РЅРѕ <br> Рѕ РіРµРЅРµСЂР°Р»Р°С… Р РЈРЎРЎРљРћР™ РђР РњРР',
                  youtubeId: 'w4-_8BJKfpk',
                },
                {
                  text: 'РџРѕР»РєРѕРІРЅРёРє Р¤РЎР‘ РЎРўР Р•Р›РљРћР’ <br> РѕР± СѓСЃРїРµС…Р°С… Р РћРЎРЎРР РІ СЃРїРµС†РѕРїРµСЂР°С†РёРё',
                  youtubeId: 'saK5UTKroDA',
                },
              ]);
              if (
                'ru' === navigator.language &&
                location.host.match(/\.(ru|su|xn--p1ai)$/)
              ) {
                const e = document.createElement('div');
                (e.className = $['no-war']),
                  tt(
                    e,
                    '<a href="https://www.youtube.com/watch?v='
                      .concat(i.youtubeId, '" target="_blank">')
                      .concat(i.text, '</a>'),
                  ),
                  t.appendChild(e),
                  (t.style.paddingTop = '4em');
              }
            },
            It = (t, e) => {
              t instanceof HTMLElement
                ? e.appendChild(t)
                : 'object' == typeof t
                ? Bt(t, e)
                : t && tt(e, t);
            },
            Bt = (t, e) => {
              t.jquery ? Dt(e, t) : tt(e, t.toString());
            },
            Dt = (t, e) => {
              if (((t.textContent = ''), 0 in e))
                for (let i = 0; i in e; i++) t.appendChild(e[i].cloneNode(!0));
              else t.appendChild(e.cloneNode(!0));
            },
            Nt = (() => {
              if (xt()) return !1;
              const t = document.createElement('div'),
                e = {
                  WebkitAnimation: 'webkitAnimationEnd',
                  animation: 'animationend',
                };
              for (const i in e)
                if (
                  Object.prototype.hasOwnProperty.call(e, i) &&
                  void 0 !== t.style[i]
                )
                  return e[i];
              return !1;
            })(),
            Ft = () => {
              const t = document.createElement('div');
              (t.className = $['scrollbar-measure']),
                document.body.appendChild(t);
              const e = t.getBoundingClientRect().width - t.clientWidth;
              return document.body.removeChild(t), e;
            },
            jt = (t, e) => {
              const i = W(),
                s = R();
              e.showConfirmButton || e.showDenyButton || e.showCancelButton
                ? ht(i)
                : ut(i),
                st(i, e, 'actions'),
                Ht(i, s, e),
                tt(s, e.loaderHtml),
                st(s, e, 'loader');
            };
          function Ht(t, e, i) {
            const s = F(),
              n = j(),
              o = q();
            qt(s, 'confirm', i),
              qt(n, 'deny', i),
              qt(o, 'cancel', i),
              Rt(s, n, o, i),
              i.reverseButtons &&
                (i.toast
                  ? (t.insertBefore(o, s), t.insertBefore(n, s))
                  : (t.insertBefore(o, e),
                    t.insertBefore(n, e),
                    t.insertBefore(s, e)));
          }
          function Rt(t, e, i, s) {
            if (!s.buttonsStyling) return lt([t, e, i], $.styled);
            rt([t, e, i], $.styled),
              s.confirmButtonColor &&
                ((t.style.backgroundColor = s.confirmButtonColor),
                rt(t, $['default-outline'])),
              s.denyButtonColor &&
                ((e.style.backgroundColor = s.denyButtonColor),
                rt(e, $['default-outline'])),
              s.cancelButtonColor &&
                ((i.style.backgroundColor = s.cancelButtonColor),
                rt(i, $['default-outline']));
          }
          function qt(t, e, s) {
            mt(t, s['show'.concat(i(e), 'Button')], 'inline-block'),
              tt(t, s[''.concat(e, 'ButtonText')]),
              t.setAttribute('aria-label', s[''.concat(e, 'ButtonAriaLabel')]),
              (t.className = $[e]),
              st(t, s, ''.concat(e, 'Button')),
              rt(t, s[''.concat(e, 'ButtonClass')]);
          }
          const Wt = (t, e) => {
            const i = L();
            i &&
              (Vt(i, e.backdrop),
              Gt(i, e.position),
              Yt(i, e.grow),
              st(i, e, 'container'));
          };
          function Vt(t, e) {
            'string' == typeof e
              ? (t.style.background = e)
              : e ||
                rt([document.documentElement, document.body], $['no-backdrop']);
          }
          function Gt(t, e) {
            e in $
              ? rt(t, $[e])
              : (n(
                  'The "position" parameter is not valid, defaulting to "center"',
                ),
                rt(t, $.center));
          }
          function Yt(t, e) {
            if (e && 'string' == typeof e) {
              const i = 'grow-'.concat(e);
              i in $ && rt(t, $[i]);
            }
          }
          var Xt = {
            awaitingPromise: new WeakMap(),
            promise: new WeakMap(),
            innerParams: new WeakMap(),
            domCache: new WeakMap(),
          };
          const Ut = [
              'input',
              'file',
              'range',
              'select',
              'radio',
              'checkbox',
              'textarea',
            ],
            Zt = (t, e) => {
              const i = M(),
                s = Xt.innerParams.get(t),
                n = !s || e.input !== s.input;
              Ut.forEach(t => {
                const s = ct(i, $[t]);
                Qt(t, e.inputAttributes), (s.className = $[t]), n && ut(s);
              }),
                e.input && (n && Kt(e), te(e));
            },
            Kt = t => {
              if (!oe[t.input])
                return o(
                  'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
                    t.input,
                    '"',
                  ),
                );
              const e = se(t.input),
                i = oe[t.input](e, t);
              ht(e),
                setTimeout(() => {
                  ot(i);
                });
            },
            Jt = t => {
              for (let e = 0; e < t.attributes.length; e++) {
                const i = t.attributes[e].name;
                ['type', 'value', 'style'].includes(i) || t.removeAttribute(i);
              }
            },
            Qt = (t, e) => {
              const i = nt(M(), t);
              if (i) {
                Jt(i);
                for (const t in e) i.setAttribute(t, e[t]);
              }
            },
            te = t => {
              const e = se(t.input);
              'object' == typeof t.customClass && rt(e, t.customClass.input);
            },
            ee = (t, e) => {
              (t.placeholder && !e.inputPlaceholder) ||
                (t.placeholder = e.inputPlaceholder);
            },
            ie = (t, e, i) => {
              if (i.inputLabel) {
                t.id = $.input;
                const s = document.createElement('label'),
                  n = $['input-label'];
                s.setAttribute('for', t.id),
                  (s.className = n),
                  'object' == typeof i.customClass &&
                    rt(s, i.customClass.inputLabel),
                  (s.innerText = i.inputLabel),
                  e.insertAdjacentElement('beforebegin', s);
              }
            },
            se = t => ct(M(), $[t] || $.input),
            ne = (t, e) => {
              ['string', 'number'].includes(typeof e)
                ? (t.value = ''.concat(e))
                : u(e) ||
                  n(
                    'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                      typeof e,
                      '"',
                    ),
                  );
            },
            oe = {};
          (oe.text =
            oe.email =
            oe.password =
            oe.number =
            oe.tel =
            oe.url =
              (t, e) => (
                ne(t, e.inputValue),
                ie(t, t, e),
                ee(t, e),
                (t.type = e.input),
                t
              )),
            (oe.file = (t, e) => (ie(t, t, e), ee(t, e), t)),
            (oe.range = (t, e) => {
              const i = t.querySelector('input'),
                s = t.querySelector('output');
              return (
                ne(i, e.inputValue),
                (i.type = e.input),
                ne(s, e.inputValue),
                ie(i, t, e),
                t
              );
            }),
            (oe.select = (t, e) => {
              if (((t.textContent = ''), e.inputPlaceholder)) {
                const i = document.createElement('option');
                tt(i, e.inputPlaceholder),
                  (i.value = ''),
                  (i.disabled = !0),
                  (i.selected = !0),
                  t.appendChild(i);
              }
              return ie(t, t, e), t;
            }),
            (oe.radio = t => ((t.textContent = ''), t)),
            (oe.checkbox = (t, e) => {
              const i = nt(M(), 'checkbox');
              (i.value = '1'),
                (i.id = $.checkbox),
                (i.checked = Boolean(e.inputValue));
              const s = t.querySelector('span');
              return tt(s, e.inputPlaceholder), i;
            }),
            (oe.textarea = (t, e) => {
              ne(t, e.inputValue), ee(t, e), ie(t, t, e);
              const i = t =>
                parseInt(window.getComputedStyle(t).marginLeft) +
                parseInt(window.getComputedStyle(t).marginRight);
              return (
                setTimeout(() => {
                  if ('MutationObserver' in window) {
                    const e = parseInt(window.getComputedStyle(M()).width);
                    new MutationObserver(() => {
                      const s = t.offsetWidth + i(t);
                      M().style.width = s > e ? ''.concat(s, 'px') : null;
                    }).observe(t, {
                      attributes: !0,
                      attributeFilter: ['style'],
                    });
                  }
                }),
                t
              );
            });
          const ae = (t, e) => {
              const i = I();
              st(i, e, 'htmlContainer'),
                e.html
                  ? (It(e.html, i), ht(i, 'block'))
                  : e.text
                  ? ((i.textContent = e.text), ht(i, 'block'))
                  : ut(i),
                Zt(t, e);
            },
            re = (t, e) => {
              const i = V();
              mt(i, e.footer), e.footer && It(e.footer, i), st(i, e, 'footer');
            },
            le = (t, e) => {
              const i = Y();
              tt(i, e.closeButtonHtml),
                st(i, e, 'closeButton'),
                mt(i, e.showCloseButton),
                i.setAttribute('aria-label', e.closeButtonAriaLabel);
            },
            ce = (t, e) => {
              const i = Xt.innerParams.get(t),
                s = O();
              if (i && e.icon === i.icon) return me(s, e), void de(s, e);
              if (e.icon || e.iconHtml) {
                if (e.icon && -1 === Object.keys(P).indexOf(e.icon))
                  return (
                    o(
                      'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                        e.icon,
                        '"',
                      ),
                    ),
                    void ut(s)
                  );
                ht(s), me(s, e), de(s, e), rt(s, e.showClass.icon);
              } else ut(s);
            },
            de = (t, e) => {
              for (const i in P) e.icon !== i && lt(t, P[i]);
              rt(t, P[e.icon]), fe(t, e), he(), st(t, e, 'icon');
            },
            he = () => {
              const t = M(),
                e = window
                  .getComputedStyle(t)
                  .getPropertyValue('background-color'),
                i = t.querySelectorAll(
                  '[class^=swal2-success-circular-line], .swal2-success-fix',
                );
              for (let t = 0; t < i.length; t++) i[t].style.backgroundColor = e;
            },
            ue =
              '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',
            pe =
              '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',
            me = (t, e) => {
              let i,
                s = t.innerHTML;
              e.iconHtml
                ? (i = ge(e.iconHtml))
                : 'success' === e.icon
                ? ((i = ue), (s = s.replace(/ style=".*?"/g, '')))
                : (i =
                    'error' === e.icon
                      ? pe
                      : ge({ question: '?', warning: '!', info: 'i' }[e.icon])),
                s.trim() !== i.trim() && tt(t, i);
            },
            fe = (t, e) => {
              if (e.iconColor) {
                (t.style.color = e.iconColor),
                  (t.style.borderColor = e.iconColor);
                for (const i of [
                  '.swal2-success-line-tip',
                  '.swal2-success-line-long',
                  '.swal2-x-mark-line-left',
                  '.swal2-x-mark-line-right',
                ])
                  pt(t, i, 'backgroundColor', e.iconColor);
                pt(t, '.swal2-success-ring', 'borderColor', e.iconColor);
              }
            },
            ge = t =>
              '<div class="'
                .concat($['icon-content'], '">')
                .concat(t, '</div>'),
            we = (t, e) => {
              const i = B();
              if (!e.imageUrl) return ut(i);
              ht(i, ''),
                i.setAttribute('src', e.imageUrl),
                i.setAttribute('alt', e.imageAlt),
                dt(i, 'width', e.imageWidth),
                dt(i, 'height', e.imageHeight),
                (i.className = $.image),
                st(i, e, 'image');
            },
            ve = (t, e) => {
              const i = D();
              if (!e.progressSteps || 0 === e.progressSteps.length)
                return ut(i);
              ht(i),
                (i.textContent = ''),
                e.currentProgressStep >= e.progressSteps.length &&
                  n(
                    'Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)',
                  ),
                e.progressSteps.forEach((t, s) => {
                  const n = be(t);
                  if (
                    (i.appendChild(n),
                    s === e.currentProgressStep &&
                      rt(n, $['active-progress-step']),
                    s !== e.progressSteps.length - 1)
                  ) {
                    const t = ye(e);
                    i.appendChild(t);
                  }
                });
            },
            be = t => {
              const e = document.createElement('li');
              return rt(e, $['progress-step']), tt(e, t), e;
            },
            ye = t => {
              const e = document.createElement('li');
              return (
                rt(e, $['progress-step-line']),
                t.progressStepsDistance &&
                  dt(e, 'width', t.progressStepsDistance),
                e
              );
            },
            xe = (t, e) => {
              const i = z();
              mt(i, e.title || e.titleText, 'block'),
                e.title && It(e.title, i),
                e.titleText && (i.innerText = e.titleText),
                st(i, e, 'title');
            },
            Ce = (t, e) => {
              const i = L(),
                s = M();
              e.toast
                ? (dt(i, 'width', e.width),
                  (s.style.width = '100%'),
                  s.insertBefore(R(), O()))
                : dt(s, 'width', e.width),
                dt(s, 'padding', e.padding),
                e.color && (s.style.color = e.color),
                e.background && (s.style.background = e.background),
                ut(N()),
                Se(s, e);
            },
            Se = (t, e) => {
              (t.className = ''
                .concat($.popup, ' ')
                .concat(ft(t) ? e.showClass.popup : '')),
                e.toast
                  ? (rt(
                      [document.documentElement, document.body],
                      $['toast-shown'],
                    ),
                    rt(t, $.toast))
                  : rt(t, $.modal),
                st(t, e, 'popup'),
                'string' == typeof e.customClass && rt(t, e.customClass),
                e.icon && rt(t, $['icon-'.concat(e.icon)]);
            },
            Ee = (t, e) => {
              Ce(t, e),
                Wt(t, e),
                ve(t, e),
                ce(t, e),
                we(t, e),
                xe(t, e),
                le(t, e),
                ae(t, e),
                jt(t, e),
                re(t, e),
                'function' == typeof e.didRender && e.didRender(M());
            },
            Te = Object.freeze({
              cancel: 'cancel',
              backdrop: 'backdrop',
              close: 'close',
              esc: 'esc',
              timer: 'timer',
            }),
            ke = () => {
              s(document.body.children).forEach(t => {
                t === L() ||
                  t.contains(L()) ||
                  (t.hasAttribute('aria-hidden') &&
                    t.setAttribute(
                      'data-previous-aria-hidden',
                      t.getAttribute('aria-hidden'),
                    ),
                  t.setAttribute('aria-hidden', 'true'));
              });
            },
            $e = () => {
              s(document.body.children).forEach(t => {
                t.hasAttribute('data-previous-aria-hidden')
                  ? (t.setAttribute(
                      'aria-hidden',
                      t.getAttribute('data-previous-aria-hidden'),
                    ),
                    t.removeAttribute('data-previous-aria-hidden'))
                  : t.removeAttribute('aria-hidden');
              });
            },
            Pe = ['swal-title', 'swal-html', 'swal-footer'],
            Le = t => {
              const e =
                'string' == typeof t.template
                  ? document.querySelector(t.template)
                  : t.template;
              if (!e) return {};
              const i = e.content;
              return (
                Be(i),
                Object.assign(Ae(i), _e(i), Me(i), Oe(i), ze(i), Ie(i, Pe))
              );
            },
            Ae = t => {
              const e = {};
              return (
                s(t.querySelectorAll('swal-param')).forEach(t => {
                  De(t, ['name', 'value']);
                  const i = t.getAttribute('name'),
                    s = t.getAttribute('value');
                  'boolean' == typeof m[i] && 'false' === s && (e[i] = !1),
                    'object' == typeof m[i] && (e[i] = JSON.parse(s));
                }),
                e
              );
            },
            _e = t => {
              const e = {};
              return (
                s(t.querySelectorAll('swal-button')).forEach(t => {
                  De(t, ['type', 'color', 'aria-label']);
                  const s = t.getAttribute('type');
                  (e[''.concat(s, 'ButtonText')] = t.innerHTML),
                    (e['show'.concat(i(s), 'Button')] = !0),
                    t.hasAttribute('color') &&
                      (e[''.concat(s, 'ButtonColor')] =
                        t.getAttribute('color')),
                    t.hasAttribute('aria-label') &&
                      (e[''.concat(s, 'ButtonAriaLabel')] =
                        t.getAttribute('aria-label'));
                }),
                e
              );
            },
            Me = t => {
              const e = {},
                i = t.querySelector('swal-image');
              return (
                i &&
                  (De(i, ['src', 'width', 'height', 'alt']),
                  i.hasAttribute('src') && (e.imageUrl = i.getAttribute('src')),
                  i.hasAttribute('width') &&
                    (e.imageWidth = i.getAttribute('width')),
                  i.hasAttribute('height') &&
                    (e.imageHeight = i.getAttribute('height')),
                  i.hasAttribute('alt') &&
                    (e.imageAlt = i.getAttribute('alt'))),
                e
              );
            },
            Oe = t => {
              const e = {},
                i = t.querySelector('swal-icon');
              return (
                i &&
                  (De(i, ['type', 'color']),
                  i.hasAttribute('type') && (e.icon = i.getAttribute('type')),
                  i.hasAttribute('color') &&
                    (e.iconColor = i.getAttribute('color')),
                  (e.iconHtml = i.innerHTML)),
                e
              );
            },
            ze = t => {
              const e = {},
                i = t.querySelector('swal-input');
              i &&
                (De(i, ['type', 'label', 'placeholder', 'value']),
                (e.input = i.getAttribute('type') || 'text'),
                i.hasAttribute('label') &&
                  (e.inputLabel = i.getAttribute('label')),
                i.hasAttribute('placeholder') &&
                  (e.inputPlaceholder = i.getAttribute('placeholder')),
                i.hasAttribute('value') &&
                  (e.inputValue = i.getAttribute('value')));
              const n = t.querySelectorAll('swal-input-option');
              return (
                n.length &&
                  ((e.inputOptions = {}),
                  s(n).forEach(t => {
                    De(t, ['value']);
                    const i = t.getAttribute('value'),
                      s = t.innerHTML;
                    e.inputOptions[i] = s;
                  })),
                e
              );
            },
            Ie = (t, e) => {
              const i = {};
              for (const s in e) {
                const n = e[s],
                  o = t.querySelector(n);
                o &&
                  (De(o, []),
                  (i[n.replace(/^swal-/, '')] = o.innerHTML.trim()));
              }
              return i;
            },
            Be = t => {
              const e = Pe.concat([
                'swal-param',
                'swal-button',
                'swal-image',
                'swal-icon',
                'swal-input',
                'swal-input-option',
              ]);
              s(t.children).forEach(t => {
                const i = t.tagName.toLowerCase();
                -1 === e.indexOf(i) &&
                  n('Unrecognized element <'.concat(i, '>'));
              });
            },
            De = (t, e) => {
              s(t.attributes).forEach(i => {
                -1 === e.indexOf(i.name) &&
                  n([
                    'Unrecognized attribute "'
                      .concat(i.name, '" on <')
                      .concat(t.tagName.toLowerCase(), '>.'),
                    ''.concat(
                      e.length
                        ? 'Allowed attributes are: '.concat(e.join(', '))
                        : 'To set the value, use HTML within the element.',
                    ),
                  ]);
              });
            };
          var Ne = {
            email: (t, e) =>
              /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)
                ? Promise.resolve()
                : Promise.resolve(e || 'Invalid email address'),
            url: (t, e) =>
              /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                t,
              )
                ? Promise.resolve()
                : Promise.resolve(e || 'Invalid URL'),
          };
          function Fe(t) {
            t.inputValidator ||
              Object.keys(Ne).forEach(e => {
                t.input === e && (t.inputValidator = Ne[e]);
              });
          }
          function je(t) {
            (!t.target ||
              ('string' == typeof t.target &&
                !document.querySelector(t.target)) ||
              ('string' != typeof t.target && !t.target.appendChild)) &&
              (n('Target parameter is not valid, defaulting to "body"'),
              (t.target = 'body'));
          }
          function He(t) {
            Fe(t),
              t.showLoaderOnConfirm &&
                !t.preConfirm &&
                n(
                  'showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request',
                ),
              je(t),
              'string' == typeof t.title &&
                (t.title = t.title.split('\n').join('<br />')),
              Ot(t);
          }
          class Re {
            constructor(t, e) {
              (this.callback = t),
                (this.remaining = e),
                (this.running = !1),
                this.start();
            }
            start() {
              return (
                this.running ||
                  ((this.running = !0),
                  (this.started = new Date()),
                  (this.id = setTimeout(this.callback, this.remaining))),
                this.remaining
              );
            }
            stop() {
              return (
                this.running &&
                  ((this.running = !1),
                  clearTimeout(this.id),
                  (this.remaining -=
                    new Date().getTime() - this.started.getTime())),
                this.remaining
              );
            }
            increase(t) {
              const e = this.running;
              return (
                e && this.stop(),
                (this.remaining += t),
                e && this.start(),
                this.remaining
              );
            }
            getTimerLeft() {
              return (
                this.running && (this.stop(), this.start()), this.remaining
              );
            }
            isRunning() {
              return this.running;
            }
          }
          const qe = () => {
              null === Q.previousBodyPadding &&
                document.body.scrollHeight > window.innerHeight &&
                ((Q.previousBodyPadding = parseInt(
                  window
                    .getComputedStyle(document.body)
                    .getPropertyValue('padding-right'),
                )),
                (document.body.style.paddingRight = ''.concat(
                  Q.previousBodyPadding + Ft(),
                  'px',
                )));
            },
            We = () => {
              null !== Q.previousBodyPadding &&
                ((document.body.style.paddingRight = ''.concat(
                  Q.previousBodyPadding,
                  'px',
                )),
                (Q.previousBodyPadding = null));
            },
            Ve = () => {
              if (
                ((/iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !window.MSStream) ||
                  ('MacIntel' === navigator.platform &&
                    navigator.maxTouchPoints > 1)) &&
                !et(document.body, $.iosfix)
              ) {
                const t = document.body.scrollTop;
                (document.body.style.top = ''.concat(-1 * t, 'px')),
                  rt(document.body, $.iosfix),
                  Ye(),
                  Ge();
              }
            },
            Ge = () => {
              const t = navigator.userAgent,
                e = !!t.match(/iPad/i) || !!t.match(/iPhone/i),
                i = !!t.match(/WebKit/i);
              if (e && i && !t.match(/CriOS/i)) {
                const t = 44;
                M().scrollHeight > window.innerHeight - t &&
                  (L().style.paddingBottom = ''.concat(t, 'px'));
              }
            },
            Ye = () => {
              const t = L();
              let e;
              (t.ontouchstart = t => {
                e = Xe(t);
              }),
                (t.ontouchmove = t => {
                  e && (t.preventDefault(), t.stopPropagation());
                });
            },
            Xe = t => {
              const e = t.target,
                i = L();
              return !(
                Ue(t) ||
                Ze(t) ||
                (e !== i &&
                  (wt(i) ||
                    'INPUT' === e.tagName ||
                    'TEXTAREA' === e.tagName ||
                    (wt(I()) && I().contains(e))))
              );
            },
            Ue = t =>
              t.touches &&
              t.touches.length &&
              'stylus' === t.touches[0].touchType,
            Ze = t => t.touches && t.touches.length > 1,
            Ke = () => {
              if (et(document.body, $.iosfix)) {
                const t = parseInt(document.body.style.top, 10);
                lt(document.body, $.iosfix),
                  (document.body.style.top = ''),
                  (document.body.scrollTop = -1 * t);
              }
            },
            Je = 10,
            Qe = t => {
              const e = L(),
                i = M();
              'function' == typeof t.willOpen && t.willOpen(i);
              const s = window.getComputedStyle(document.body).overflowY;
              si(e, i, t),
                setTimeout(() => {
                  ei(e, i);
                }, Je),
                Z() && (ii(e, t.scrollbarPadding, s), ke()),
                K() ||
                  St.previousActiveElement ||
                  (St.previousActiveElement = document.activeElement),
                'function' == typeof t.didOpen &&
                  setTimeout(() => t.didOpen(i)),
                lt(e, $['no-transition']);
            },
            ti = t => {
              const e = M();
              if (t.target !== e) return;
              const i = L();
              e.removeEventListener(Nt, ti), (i.style.overflowY = 'auto');
            },
            ei = (t, e) => {
              Nt && vt(e)
                ? ((t.style.overflowY = 'hidden'), e.addEventListener(Nt, ti))
                : (t.style.overflowY = 'auto');
            },
            ii = (t, e, i) => {
              Ve(),
                e && 'hidden' !== i && qe(),
                setTimeout(() => {
                  t.scrollTop = 0;
                });
            },
            si = (t, e, i) => {
              rt(t, i.showClass.backdrop),
                e.style.setProperty('opacity', '0', 'important'),
                ht(e, 'grid'),
                setTimeout(() => {
                  rt(e, i.showClass.popup), e.style.removeProperty('opacity');
                }, Je),
                rt([document.documentElement, document.body], $.shown),
                i.heightAuto &&
                  i.backdrop &&
                  !i.toast &&
                  rt(
                    [document.documentElement, document.body],
                    $['height-auto'],
                  );
            },
            ni = t => {
              let e = M();
              e || new Xs(), (e = M());
              const i = R();
              K() ? ut(O()) : oi(e, t),
                ht(i),
                e.setAttribute('data-loading', 'true'),
                e.setAttribute('aria-busy', 'true'),
                e.focus();
            },
            oi = (t, e) => {
              const i = W(),
                s = R();
              !e && ft(F()) && (e = F()),
                ht(i),
                e &&
                  (ut(e),
                  s.setAttribute('data-button-to-replace', e.className)),
                s.parentNode.insertBefore(s, e),
                rt([t, i], $.loading);
            },
            ai = (t, e) => {
              'select' === e.input || 'radio' === e.input
                ? hi(t, e)
                : ['text', 'email', 'number', 'tel', 'textarea'].includes(
                    e.input,
                  ) &&
                  (d(e.inputValue) || u(e.inputValue)) &&
                  (ni(F()), ui(t, e));
            },
            ri = (t, e) => {
              const i = t.getInput();
              if (!i) return null;
              switch (e.input) {
                case 'checkbox':
                  return li(i);
                case 'radio':
                  return ci(i);
                case 'file':
                  return di(i);
                default:
                  return e.inputAutoTrim ? i.value.trim() : i.value;
              }
            },
            li = t => (t.checked ? 1 : 0),
            ci = t => (t.checked ? t.value : null),
            di = t =>
              t.files.length
                ? null !== t.getAttribute('multiple')
                  ? t.files
                  : t.files[0]
                : null,
            hi = (t, e) => {
              const i = M(),
                s = t => pi[e.input](i, mi(t), e);
              d(e.inputOptions) || u(e.inputOptions)
                ? (ni(F()),
                  h(e.inputOptions).then(e => {
                    t.hideLoading(), s(e);
                  }))
                : 'object' == typeof e.inputOptions
                ? s(e.inputOptions)
                : o(
                    'Unexpected type of inputOptions! Expected object, Map or Promise, got '.concat(
                      typeof e.inputOptions,
                    ),
                  );
            },
            ui = (t, e) => {
              const i = t.getInput();
              ut(i),
                h(e.inputValue)
                  .then(s => {
                    (i.value =
                      'number' === e.input ? parseFloat(s) || 0 : ''.concat(s)),
                      ht(i),
                      i.focus(),
                      t.hideLoading();
                  })
                  .catch(e => {
                    o('Error in inputValue promise: '.concat(e)),
                      (i.value = ''),
                      ht(i),
                      i.focus(),
                      t.hideLoading();
                  });
            },
            pi = {
              select: (t, e, i) => {
                const s = ct(t, $.select),
                  n = (t, e, s) => {
                    const n = document.createElement('option');
                    (n.value = s),
                      tt(n, e),
                      (n.selected = fi(s, i.inputValue)),
                      t.appendChild(n);
                  };
                e.forEach(t => {
                  const e = t[0],
                    i = t[1];
                  if (Array.isArray(i)) {
                    const t = document.createElement('optgroup');
                    (t.label = e),
                      (t.disabled = !1),
                      s.appendChild(t),
                      i.forEach(e => n(t, e[1], e[0]));
                  } else n(s, i, e);
                }),
                  s.focus();
              },
              radio: (t, e, i) => {
                const s = ct(t, $.radio);
                e.forEach(t => {
                  const e = t[0],
                    n = t[1],
                    o = document.createElement('input'),
                    a = document.createElement('label');
                  (o.type = 'radio'),
                    (o.name = $.radio),
                    (o.value = e),
                    fi(e, i.inputValue) && (o.checked = !0);
                  const r = document.createElement('span');
                  tt(r, n),
                    (r.className = $.label),
                    a.appendChild(o),
                    a.appendChild(r),
                    s.appendChild(a);
                });
                const n = s.querySelectorAll('input');
                n.length && n[0].focus();
              },
            },
            mi = t => {
              const e = [];
              return (
                'undefined' != typeof Map && t instanceof Map
                  ? t.forEach((t, i) => {
                      let s = t;
                      'object' == typeof s && (s = mi(s)), e.push([i, s]);
                    })
                  : Object.keys(t).forEach(i => {
                      let s = t[i];
                      'object' == typeof s && (s = mi(s)), e.push([i, s]);
                    }),
                e
              );
            },
            fi = (t, e) => e && e.toString() === t.toString();
          function gi() {
            const t = Xt.innerParams.get(this);
            if (!t) return;
            const e = Xt.domCache.get(this);
            ut(e.loader),
              K() ? t.icon && ht(O()) : wi(e),
              lt([e.popup, e.actions], $.loading),
              e.popup.removeAttribute('aria-busy'),
              e.popup.removeAttribute('data-loading'),
              (e.confirmButton.disabled = !1),
              (e.denyButton.disabled = !1),
              (e.cancelButton.disabled = !1);
          }
          const wi = t => {
            const e = t.popup.getElementsByClassName(
              t.loader.getAttribute('data-button-to-replace'),
            );
            e.length ? ht(e[0], 'inline-block') : gt() && ut(t.actions);
          };
          function vi(t) {
            const e = Xt.innerParams.get(t || this),
              i = Xt.domCache.get(t || this);
            return i ? nt(i.popup, e.input) : null;
          }
          var bi = {
            swalPromiseResolve: new WeakMap(),
            swalPromiseReject: new WeakMap(),
          };
          const yi = () => ft(M()),
            xi = () => F() && F().click(),
            Ci = () => j() && j().click(),
            Si = () => q() && q().click(),
            Ei = t => {
              t.keydownTarget &&
                t.keydownHandlerAdded &&
                (t.keydownTarget.removeEventListener(
                  'keydown',
                  t.keydownHandler,
                  { capture: t.keydownListenerCapture },
                ),
                (t.keydownHandlerAdded = !1));
            },
            Ti = (t, e, i, s) => {
              Ei(e),
                i.toast ||
                  ((e.keydownHandler = e => Li(t, e, s)),
                  (e.keydownTarget = i.keydownListenerCapture ? window : M()),
                  (e.keydownListenerCapture = i.keydownListenerCapture),
                  e.keydownTarget.addEventListener(
                    'keydown',
                    e.keydownHandler,
                    { capture: e.keydownListenerCapture },
                  ),
                  (e.keydownHandlerAdded = !0));
            },
            ki = (t, e, i) => {
              const s = U();
              if (s.length)
                return (
                  (e += i) === s.length
                    ? (e = 0)
                    : -1 === e && (e = s.length - 1),
                  s[e].focus()
                );
              M().focus();
            },
            $i = ['ArrowRight', 'ArrowDown'],
            Pi = ['ArrowLeft', 'ArrowUp'],
            Li = (t, e, i) => {
              const s = Xt.innerParams.get(t);
              s &&
                (e.isComposing ||
                  229 === e.keyCode ||
                  (s.stopKeydownPropagation && e.stopPropagation(),
                  'Enter' === e.key
                    ? Ai(t, e, s)
                    : 'Tab' === e.key
                    ? _i(e, s)
                    : [...$i, ...Pi].includes(e.key)
                    ? Mi(e.key)
                    : 'Escape' === e.key && Oi(e, s, i)));
            },
            Ai = (t, e, i) => {
              if (
                c(i.allowEnterKey) &&
                e.target &&
                t.getInput() &&
                e.target instanceof HTMLElement &&
                e.target.outerHTML === t.getInput().outerHTML
              ) {
                if (['textarea', 'file'].includes(i.input)) return;
                xi(), e.preventDefault();
              }
            },
            _i = (t, e) => {
              const i = t.target,
                s = U();
              let n = -1;
              for (let t = 0; t < s.length; t++)
                if (i === s[t]) {
                  n = t;
                  break;
                }
              t.shiftKey ? ki(e, n, -1) : ki(e, n, 1),
                t.stopPropagation(),
                t.preventDefault();
            },
            Mi = t => {
              const e = F(),
                i = j(),
                s = q();
              if (
                document.activeElement instanceof HTMLElement &&
                ![e, i, s].includes(document.activeElement)
              )
                return;
              const n = $i.includes(t)
                ? 'nextElementSibling'
                : 'previousElementSibling';
              let o = document.activeElement;
              for (let t = 0; t < W().children.length; t++) {
                if (((o = o[n]), !o)) return;
                if (o instanceof HTMLButtonElement && ft(o)) break;
              }
              o instanceof HTMLButtonElement && o.focus();
            },
            Oi = (t, e, i) => {
              c(e.allowEscapeKey) && (t.preventDefault(), i(Te.esc));
            };
          function zi(t, e, i, s) {
            K() ? Wi(t, s) : (Tt(i).then(() => Wi(t, s)), Ei(St)),
              /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                ? (e.setAttribute('style', 'display:none !important'),
                  e.removeAttribute('class'),
                  (e.innerHTML = ''))
                : e.remove(),
              Z() && (We(), Ke(), $e()),
              Ii();
          }
          function Ii() {
            lt(
              [document.documentElement, document.body],
              [$.shown, $['height-auto'], $['no-backdrop'], $['toast-shown']],
            );
          }
          function Bi(t) {
            t = Hi(t);
            const e = bi.swalPromiseResolve.get(this),
              i = Ni(this);
            this.isAwaitingPromise()
              ? t.isDismissed || (ji(this), e(t))
              : i && e(t);
          }
          function Di() {
            return !!Xt.awaitingPromise.get(this);
          }
          const Ni = t => {
            const e = M();
            if (!e) return !1;
            const i = Xt.innerParams.get(t);
            if (!i || et(e, i.hideClass.popup)) return !1;
            lt(e, i.showClass.popup), rt(e, i.hideClass.popup);
            const s = L();
            return (
              lt(s, i.showClass.backdrop),
              rt(s, i.hideClass.backdrop),
              Ri(t, e, i),
              !0
            );
          };
          function Fi(t) {
            const e = bi.swalPromiseReject.get(this);
            ji(this), e && e(t);
          }
          const ji = t => {
              t.isAwaitingPromise() &&
                (Xt.awaitingPromise.delete(t),
                Xt.innerParams.get(t) || t._destroy());
            },
            Hi = t =>
              void 0 === t
                ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
                : Object.assign(
                    { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
                    t,
                  ),
            Ri = (t, e, i) => {
              const s = L(),
                n = Nt && vt(e);
              'function' == typeof i.willClose && i.willClose(e),
                n
                  ? qi(t, e, s, i.returnFocus, i.didClose)
                  : zi(t, s, i.returnFocus, i.didClose);
            },
            qi = (t, e, i, s, n) => {
              (St.swalCloseEventFinishedCallback = zi.bind(null, t, i, s, n)),
                e.addEventListener(Nt, function (t) {
                  t.target === e &&
                    (St.swalCloseEventFinishedCallback(),
                    delete St.swalCloseEventFinishedCallback);
                });
            },
            Wi = (t, e) => {
              setTimeout(() => {
                'function' == typeof e && e.bind(t.params)(), t._destroy();
              });
            };
          function Vi(t, e, i) {
            const s = Xt.domCache.get(t);
            e.forEach(t => {
              s[t].disabled = i;
            });
          }
          function Gi(t, e) {
            if (!t) return !1;
            if ('radio' === t.type) {
              const i = t.parentNode.parentNode.querySelectorAll('input');
              for (let t = 0; t < i.length; t++) i[t].disabled = e;
            } else t.disabled = e;
          }
          function Yi() {
            Vi(this, ['confirmButton', 'denyButton', 'cancelButton'], !1);
          }
          function Xi() {
            Vi(this, ['confirmButton', 'denyButton', 'cancelButton'], !0);
          }
          function Ui() {
            return Gi(this.getInput(), !1);
          }
          function Zi() {
            return Gi(this.getInput(), !0);
          }
          function Ki(t) {
            const e = Xt.domCache.get(this),
              i = Xt.innerParams.get(this);
            tt(e.validationMessage, t),
              (e.validationMessage.className = $['validation-message']),
              i.customClass &&
                i.customClass.validationMessage &&
                rt(e.validationMessage, i.customClass.validationMessage),
              ht(e.validationMessage);
            const s = this.getInput();
            s &&
              (s.setAttribute('aria-invalid', !0),
              s.setAttribute('aria-describedby', $['validation-message']),
              ot(s),
              rt(s, $.inputerror));
          }
          function Ji() {
            const t = Xt.domCache.get(this);
            t.validationMessage && ut(t.validationMessage);
            const e = this.getInput();
            e &&
              (e.removeAttribute('aria-invalid'),
              e.removeAttribute('aria-describedby'),
              lt(e, $.inputerror));
          }
          function Qi() {
            return Xt.domCache.get(this).progressSteps;
          }
          function ts(t) {
            const e = M(),
              i = Xt.innerParams.get(this);
            if (!e || et(e, i.hideClass.popup))
              return n(
                "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.",
              );
            const s = es(t),
              o = Object.assign({}, i, s);
            Ee(this, o),
              Xt.innerParams.set(this, o),
              Object.defineProperties(this, {
                params: {
                  value: Object.assign({}, this.params, t),
                  writable: !1,
                  enumerable: !0,
                },
              });
          }
          const es = t => {
            const e = {};
            return (
              Object.keys(t).forEach(i => {
                b(i)
                  ? (e[i] = t[i])
                  : n('Invalid parameter to update: '.concat(i));
              }),
              e
            );
          };
          function is() {
            const t = Xt.domCache.get(this),
              e = Xt.innerParams.get(this);
            e
              ? (t.popup &&
                  St.swalCloseEventFinishedCallback &&
                  (St.swalCloseEventFinishedCallback(),
                  delete St.swalCloseEventFinishedCallback),
                'function' == typeof e.didDestroy && e.didDestroy(),
                ss(this))
              : ns(this);
          }
          const ss = t => {
              ns(t),
                delete t.params,
                delete St.keydownHandler,
                delete St.keydownTarget,
                delete St.currentInstance;
            },
            ns = t => {
              t.isAwaitingPromise()
                ? (os(Xt, t), Xt.awaitingPromise.set(t, !0))
                : (os(bi, t), os(Xt, t));
            },
            os = (t, e) => {
              for (const i in t) t[i].delete(e);
            };
          var as = Object.freeze({
            hideLoading: gi,
            disableLoading: gi,
            getInput: vi,
            close: Bi,
            isAwaitingPromise: Di,
            rejectPromise: Fi,
            handleAwaitingPromise: ji,
            closePopup: Bi,
            closeModal: Bi,
            closeToast: Bi,
            enableButtons: Yi,
            disableButtons: Xi,
            enableInput: Ui,
            disableInput: Zi,
            showValidationMessage: Ki,
            resetValidationMessage: Ji,
            getProgressSteps: Qi,
            update: ts,
            _destroy: is,
          });
          const rs = t => {
              const e = Xt.innerParams.get(t);
              t.disableButtons(), e.input ? ds(t, 'confirm') : fs(t, !0);
            },
            ls = t => {
              const e = Xt.innerParams.get(t);
              t.disableButtons(),
                e.returnInputValueOnDeny ? ds(t, 'deny') : us(t, !1);
            },
            cs = (t, e) => {
              t.disableButtons(), e(Te.cancel);
            },
            ds = (t, e) => {
              const s = Xt.innerParams.get(t);
              if (!s.input)
                return o(
                  'The "input" parameter is needed to be set when using returnInputValueOn'.concat(
                    i(e),
                  ),
                );
              const n = ri(t, s);
              s.inputValidator
                ? hs(t, n, e)
                : t.getInput().checkValidity()
                ? 'deny' === e
                  ? us(t, n)
                  : fs(t, n)
                : (t.enableButtons(),
                  t.showValidationMessage(s.validationMessage));
            },
            hs = (t, e, i) => {
              const s = Xt.innerParams.get(t);
              t.disableInput(),
                Promise.resolve()
                  .then(() => h(s.inputValidator(e, s.validationMessage)))
                  .then(s => {
                    t.enableButtons(),
                      t.enableInput(),
                      s
                        ? t.showValidationMessage(s)
                        : 'deny' === i
                        ? us(t, e)
                        : fs(t, e);
                  });
            },
            us = (t, e) => {
              const i = Xt.innerParams.get(t || void 0);
              i.showLoaderOnDeny && ni(j()),
                i.preDeny
                  ? (Xt.awaitingPromise.set(t || void 0, !0),
                    Promise.resolve()
                      .then(() => h(i.preDeny(e, i.validationMessage)))
                      .then(i => {
                        !1 === i
                          ? (t.hideLoading(), ji(t))
                          : t.closePopup({
                              isDenied: !0,
                              value: void 0 === i ? e : i,
                            });
                      })
                      .catch(e => ms(t || void 0, e)))
                  : t.closePopup({ isDenied: !0, value: e });
            },
            ps = (t, e) => {
              t.closePopup({ isConfirmed: !0, value: e });
            },
            ms = (t, e) => {
              t.rejectPromise(e);
            },
            fs = (t, e) => {
              const i = Xt.innerParams.get(t || void 0);
              i.showLoaderOnConfirm && ni(),
                i.preConfirm
                  ? (t.resetValidationMessage(),
                    Xt.awaitingPromise.set(t || void 0, !0),
                    Promise.resolve()
                      .then(() => h(i.preConfirm(e, i.validationMessage)))
                      .then(i => {
                        ft(N()) || !1 === i
                          ? (t.hideLoading(), ji(t))
                          : ps(t, void 0 === i ? e : i);
                      })
                      .catch(e => ms(t || void 0, e)))
                  : ps(t, e);
            },
            gs = (t, e, i) => {
              Xt.innerParams.get(t).toast
                ? ws(t, e, i)
                : (ys(e), xs(e), Cs(t, e, i));
            },
            ws = (t, e, i) => {
              e.popup.onclick = () => {
                const e = Xt.innerParams.get(t);
                (e && (vs(e) || e.timer || e.input)) || i(Te.close);
              };
            },
            vs = t =>
              t.showConfirmButton ||
              t.showDenyButton ||
              t.showCancelButton ||
              t.showCloseButton;
          let bs = !1;
          const ys = t => {
              t.popup.onmousedown = () => {
                t.container.onmouseup = function (e) {
                  (t.container.onmouseup = void 0),
                    e.target === t.container && (bs = !0);
                };
              };
            },
            xs = t => {
              t.container.onmousedown = () => {
                t.popup.onmouseup = function (e) {
                  (t.popup.onmouseup = void 0),
                    (e.target === t.popup || t.popup.contains(e.target)) &&
                      (bs = !0);
                };
              };
            },
            Cs = (t, e, i) => {
              e.container.onclick = s => {
                const n = Xt.innerParams.get(t);
                bs
                  ? (bs = !1)
                  : s.target === e.container &&
                    c(n.allowOutsideClick) &&
                    i(Te.backdrop);
              };
            },
            Ss = t => 'object' == typeof t && t.jquery,
            Es = t => t instanceof Element || Ss(t),
            Ts = t => {
              const e = {};
              return (
                'object' != typeof t[0] || Es(t[0])
                  ? ['title', 'html', 'icon'].forEach((i, s) => {
                      const n = t[s];
                      'string' == typeof n || Es(n)
                        ? (e[i] = n)
                        : void 0 !== n &&
                          o(
                            'Unexpected type of '
                              .concat(
                                i,
                                '! Expected "string" or "Element", got ',
                              )
                              .concat(typeof n),
                          );
                    })
                  : Object.assign(e, t[0]),
                e
              );
            };
          function ks() {
            const t = this;
            for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++)
              i[s] = arguments[s];
            return new t(...i);
          }
          function $s(t) {
            class e extends this {
              _main(e, i) {
                return super._main(e, Object.assign({}, t, i));
              }
            }
            return e;
          }
          const Ps = () => St.timeout && St.timeout.getTimerLeft(),
            Ls = () => {
              if (St.timeout) return yt(), St.timeout.stop();
            },
            As = () => {
              if (St.timeout) {
                const t = St.timeout.start();
                return bt(t), t;
              }
            },
            _s = () => {
              const t = St.timeout;
              return t && (t.running ? Ls() : As());
            },
            Ms = t => {
              if (St.timeout) {
                const e = St.timeout.increase(t);
                return bt(e, !0), e;
              }
            },
            Os = () => St.timeout && St.timeout.isRunning();
          let zs = !1;
          const Is = {};
          function Bs() {
            (Is[
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 'data-swal-template'
            ] = this),
              zs || (document.body.addEventListener('click', Ds), (zs = !0));
          }
          const Ds = t => {
            for (let e = t.target; e && e !== document; e = e.parentNode)
              for (const t in Is) {
                const i = e.getAttribute(t);
                if (i) return void Is[t].fire({ template: i });
              }
          };
          var Ns = Object.freeze({
            isValidParameter: v,
            isUpdatableParameter: b,
            isDeprecatedParameter: y,
            argsToParams: Ts,
            isVisible: yi,
            clickConfirm: xi,
            clickDeny: Ci,
            clickCancel: Si,
            getContainer: L,
            getPopup: M,
            getTitle: z,
            getHtmlContainer: I,
            getImage: B,
            getIcon: O,
            getInputLabel: H,
            getCloseButton: Y,
            getActions: W,
            getConfirmButton: F,
            getDenyButton: j,
            getCancelButton: q,
            getLoader: R,
            getFooter: V,
            getTimerProgressBar: G,
            getFocusableElements: U,
            getValidationMessage: N,
            isLoading: J,
            fire: ks,
            mixin: $s,
            showLoading: ni,
            enableLoading: ni,
            getTimerLeft: Ps,
            stopTimer: Ls,
            resumeTimer: As,
            toggleTimer: _s,
            increaseTimer: Ms,
            isTimerRunning: Os,
            bindClickHandler: Bs,
          });
          let Fs;
          class js {
            constructor() {
              if ('undefined' == typeof window) return;
              Fs = this;
              for (
                var t = arguments.length, e = new Array(t), i = 0;
                i < t;
                i++
              )
                e[i] = arguments[i];
              const s = Object.freeze(this.constructor.argsToParams(e));
              Object.defineProperties(this, {
                params: {
                  value: s,
                  writable: !1,
                  enumerable: !0,
                  configurable: !0,
                },
              });
              const n = Fs._main(Fs.params);
              Xt.promise.set(this, n);
            }
            _main(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              E(Object.assign({}, e, t)),
                St.currentInstance &&
                  (St.currentInstance._destroy(), Z() && $e()),
                (St.currentInstance = Fs);
              const i = Rs(t, e);
              He(i),
                Object.freeze(i),
                St.timeout && (St.timeout.stop(), delete St.timeout),
                clearTimeout(St.restoreFocusTimeout);
              const s = qs(Fs);
              return Ee(Fs, i), Xt.innerParams.set(Fs, i), Hs(Fs, s, i);
            }
            then(t) {
              return Xt.promise.get(this).then(t);
            }
            finally(t) {
              return Xt.promise.get(this).finally(t);
            }
          }
          const Hs = (t, e, i) =>
              new Promise((s, n) => {
                const o = e => {
                  t.closePopup({ isDismissed: !0, dismiss: e });
                };
                bi.swalPromiseResolve.set(t, s),
                  bi.swalPromiseReject.set(t, n),
                  (e.confirmButton.onclick = () => rs(t)),
                  (e.denyButton.onclick = () => ls(t)),
                  (e.cancelButton.onclick = () => cs(t, o)),
                  (e.closeButton.onclick = () => o(Te.close)),
                  gs(t, e, o),
                  Ti(t, St, i, o),
                  ai(t, i),
                  Qe(i),
                  Ws(St, i, o),
                  Vs(e, i),
                  setTimeout(() => {
                    e.container.scrollTop = 0;
                  });
              }),
            Rs = (t, e) => {
              const i = Le(t),
                s = Object.assign({}, m, e, i, t);
              return (
                (s.showClass = Object.assign({}, m.showClass, s.showClass)),
                (s.hideClass = Object.assign({}, m.hideClass, s.hideClass)),
                s
              );
            },
            qs = t => {
              const e = {
                popup: M(),
                container: L(),
                actions: W(),
                confirmButton: F(),
                denyButton: j(),
                cancelButton: q(),
                loader: R(),
                closeButton: Y(),
                validationMessage: N(),
                progressSteps: D(),
              };
              return Xt.domCache.set(t, e), e;
            },
            Ws = (t, e, i) => {
              const s = G();
              ut(s),
                e.timer &&
                  ((t.timeout = new Re(() => {
                    i('timer'), delete t.timeout;
                  }, e.timer)),
                  e.timerProgressBar &&
                    (ht(s),
                    st(s, e, 'timerProgressBar'),
                    setTimeout(() => {
                      t.timeout && t.timeout.running && bt(e.timer);
                    })));
            },
            Vs = (t, e) => {
              if (!e.toast)
                return c(e.allowEnterKey)
                  ? void (Gs(t, e) || ki(e, -1, 1))
                  : Ys();
            },
            Gs = (t, e) =>
              e.focusDeny && ft(t.denyButton)
                ? (t.denyButton.focus(), !0)
                : e.focusCancel && ft(t.cancelButton)
                ? (t.cancelButton.focus(), !0)
                : !(
                    !e.focusConfirm ||
                    !ft(t.confirmButton) ||
                    (t.confirmButton.focus(), 0)
                  ),
            Ys = () => {
              document.activeElement instanceof HTMLElement &&
                'function' == typeof document.activeElement.blur &&
                document.activeElement.blur();
            };
          Object.assign(js.prototype, as),
            Object.assign(js, Ns),
            Object.keys(as).forEach(t => {
              js[t] = function () {
                if (Fs) return Fs[t](...arguments);
              };
            }),
            (js.DismissReason = Te),
            (js.version = '11.4.17');
          const Xs = js;
          return (Xs.default = Xs), Xs;
        })()),
          void 0 !== this &&
            this.Sweetalert2 &&
            (this.swal =
              this.sweetAlert =
              this.Swal =
              this.SweetAlert =
                this.Sweetalert2),
          'undefined' != typeof document &&
            (function (t, e) {
              var i = t.createElement('style');
              if (
                (t.getElementsByTagName('head')[0].appendChild(i), i.styleSheet)
              )
                i.styleSheet.disabled || (i.styleSheet.cssText = e);
              else
                try {
                  i.innerHTML = e;
                } catch (t) {
                  i.innerText = e;
                }
            })(
              document,
              '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-no-war{display:flex;position:fixed;z-index:1061;top:0;left:0;align-items:center;justify-content:center;width:100%;height:3.375em;background:#20232a;color:#fff;text-align:center}.swal2-no-war a{color:#61dafb;text-decoration:none}.swal2-no-war a:hover{text-decoration:underline}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}',
            );
      },
      411: t => {
        !(function () {
          'use strict';
          t.exports = {
            polyfill: function () {
              var t = window,
                e = document;
              if (
                !('scrollBehavior' in e.documentElement.style) ||
                !0 === t.__forceSmoothScrollPolyfill__
              ) {
                var i,
                  s = t.HTMLElement || t.Element,
                  n = {
                    scroll: t.scroll || t.scrollTo,
                    scrollBy: t.scrollBy,
                    elementScroll: s.prototype.scroll || r,
                    scrollIntoView: s.prototype.scrollIntoView,
                  },
                  o =
                    t.performance && t.performance.now
                      ? t.performance.now.bind(t.performance)
                      : Date.now,
                  a =
                    ((i = t.navigator.userAgent),
                    new RegExp(['MSIE ', 'Trident/', 'Edge/'].join('|')).test(i)
                      ? 1
                      : 0);
                (t.scroll = t.scrollTo =
                  function () {
                    void 0 !== arguments[0] &&
                      (!0 !== l(arguments[0])
                        ? m.call(
                            t,
                            e.body,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left
                              : t.scrollX || t.pageXOffset,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top
                              : t.scrollY || t.pageYOffset,
                          )
                        : n.scroll.call(
                            t,
                            void 0 !== arguments[0].left
                              ? arguments[0].left
                              : 'object' != typeof arguments[0]
                              ? arguments[0]
                              : t.scrollX || t.pageXOffset,
                            void 0 !== arguments[0].top
                              ? arguments[0].top
                              : void 0 !== arguments[1]
                              ? arguments[1]
                              : t.scrollY || t.pageYOffset,
                          ));
                  }),
                  (t.scrollBy = function () {
                    void 0 !== arguments[0] &&
                      (l(arguments[0])
                        ? n.scrollBy.call(
                            t,
                            void 0 !== arguments[0].left
                              ? arguments[0].left
                              : 'object' != typeof arguments[0]
                              ? arguments[0]
                              : 0,
                            void 0 !== arguments[0].top
                              ? arguments[0].top
                              : void 0 !== arguments[1]
                              ? arguments[1]
                              : 0,
                          )
                        : m.call(
                            t,
                            e.body,
                            ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                            ~~arguments[0].top + (t.scrollY || t.pageYOffset),
                          ));
                  }),
                  (s.prototype.scroll = s.prototype.scrollTo =
                    function () {
                      if (void 0 !== arguments[0])
                        if (!0 !== l(arguments[0])) {
                          var t = arguments[0].left,
                            e = arguments[0].top;
                          m.call(
                            this,
                            this,
                            void 0 === t ? this.scrollLeft : ~~t,
                            void 0 === e ? this.scrollTop : ~~e,
                          );
                        } else {
                          if (
                            'number' == typeof arguments[0] &&
                            void 0 === arguments[1]
                          )
                            throw new SyntaxError(
                              'Value could not be converted',
                            );
                          n.elementScroll.call(
                            this,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left
                              : 'object' != typeof arguments[0]
                              ? ~~arguments[0]
                              : this.scrollLeft,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top
                              : void 0 !== arguments[1]
                              ? ~~arguments[1]
                              : this.scrollTop,
                          );
                        }
                    }),
                  (s.prototype.scrollBy = function () {
                    void 0 !== arguments[0] &&
                      (!0 !== l(arguments[0])
                        ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior,
                          })
                        : n.elementScroll.call(
                            this,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left + this.scrollLeft
                              : ~~arguments[0] + this.scrollLeft,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top + this.scrollTop
                              : ~~arguments[1] + this.scrollTop,
                          ));
                  }),
                  (s.prototype.scrollIntoView = function () {
                    if (!0 !== l(arguments[0])) {
                      var i = u(this),
                        s = i.getBoundingClientRect(),
                        o = this.getBoundingClientRect();
                      i !== e.body
                        ? (m.call(
                            this,
                            i,
                            i.scrollLeft + o.left - s.left,
                            i.scrollTop + o.top - s.top,
                          ),
                          'fixed' !== t.getComputedStyle(i).position &&
                            t.scrollBy({
                              left: s.left,
                              top: s.top,
                              behavior: 'smooth',
                            }))
                        : t.scrollBy({
                            left: o.left,
                            top: o.top,
                            behavior: 'smooth',
                          });
                    } else
                      n.scrollIntoView.call(
                        this,
                        void 0 === arguments[0] || arguments[0],
                      );
                  });
              }
              function r(t, e) {
                (this.scrollLeft = t), (this.scrollTop = e);
              }
              function l(t) {
                if (
                  null === t ||
                  'object' != typeof t ||
                  void 0 === t.behavior ||
                  'auto' === t.behavior ||
                  'instant' === t.behavior
                )
                  return !0;
                if ('object' == typeof t && 'smooth' === t.behavior) return !1;
                throw new TypeError(
                  'behavior member of ScrollOptions ' +
                    t.behavior +
                    ' is not a valid value for enumeration ScrollBehavior.',
                );
              }
              function c(t, e) {
                return 'Y' === e
                  ? t.clientHeight + a < t.scrollHeight
                  : 'X' === e
                  ? t.clientWidth + a < t.scrollWidth
                  : void 0;
              }
              function d(e, i) {
                var s = t.getComputedStyle(e, null)['overflow' + i];
                return 'auto' === s || 'scroll' === s;
              }
              function h(t) {
                var e = c(t, 'Y') && d(t, 'Y'),
                  i = c(t, 'X') && d(t, 'X');
                return e || i;
              }
              function u(t) {
                for (; t !== e.body && !1 === h(t); )
                  t = t.parentNode || t.host;
                return t;
              }
              function p(e) {
                var i,
                  s,
                  n,
                  a,
                  r = (o() - e.startTime) / 468;
                (a = r = r > 1 ? 1 : r),
                  (i = 0.5 * (1 - Math.cos(Math.PI * a))),
                  (s = e.startX + (e.x - e.startX) * i),
                  (n = e.startY + (e.y - e.startY) * i),
                  e.method.call(e.scrollable, s, n),
                  (s === e.x && n === e.y) ||
                    t.requestAnimationFrame(p.bind(t, e));
              }
              function m(i, s, a) {
                var l,
                  c,
                  d,
                  h,
                  u = o();
                i === e.body
                  ? ((l = t),
                    (c = t.scrollX || t.pageXOffset),
                    (d = t.scrollY || t.pageYOffset),
                    (h = n.scroll))
                  : ((l = i), (c = i.scrollLeft), (d = i.scrollTop), (h = r)),
                  p({
                    scrollable: l,
                    method: h,
                    startTime: u,
                    startX: c,
                    startY: d,
                    x: s,
                    y: a,
                  });
              }
            },
          };
        })();
      },
    },
    e = {};
  function i(s) {
    var n = e[s];
    if (void 0 !== n) return n.exports;
    var o = (e[s] = { exports: {} });
    return t[s].call(o.exports, o, o.exports, i), o.exports;
  }
  (i.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return i.d(e, { a: e }), e;
  }),
    (i.d = (t, e) => {
      for (var s in e)
        i.o(e, s) &&
          !i.o(t, s) &&
          Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
    }),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      'use strict';
      var t = i(411),
        e = i.n(t);
      function s(t) {
        return (
          null !== t &&
          'object' == typeof t &&
          'constructor' in t &&
          t.constructor === Object
        );
      }
      function n(t = {}, e = {}) {
        Object.keys(e).forEach(i => {
          void 0 === t[i]
            ? (t[i] = e[i])
            : s(e[i]) &&
              s(t[i]) &&
              Object.keys(e[i]).length > 0 &&
              n(t[i], e[i]);
        });
      }
      const o = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: '' },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
      };
      function a() {
        const t = 'undefined' != typeof document ? document : {};
        return n(t, o), t;
      }
      const r = {
        document: o,
        navigator: { userAgent: '' },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => '' }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: t =>
          'undefined' == typeof setTimeout ? (t(), null) : setTimeout(t, 0),
        cancelAnimationFrame(t) {
          'undefined' != typeof setTimeout && clearTimeout(t);
        },
      };
      function l() {
        const t = 'undefined' != typeof window ? window : {};
        return n(t, r), t;
      }
      class c extends Array {
        constructor(t) {
          'number' == typeof t
            ? super(t)
            : (super(...(t || [])),
              (function (t) {
                const e = t.__proto__;
                Object.defineProperty(t, '__proto__', {
                  get: () => e,
                  set(t) {
                    e.__proto__ = t;
                  },
                });
              })(this));
        }
      }
      function d(t = []) {
        const e = [];
        return (
          t.forEach(t => {
            Array.isArray(t) ? e.push(...d(t)) : e.push(t);
          }),
          e
        );
      }
      function h(t, e) {
        return Array.prototype.filter.call(t, e);
      }
      function u(t, e) {
        const i = l(),
          s = a();
        let n = [];
        if (!e && t instanceof c) return t;
        if (!t) return new c(n);
        if ('string' == typeof t) {
          const i = t.trim();
          if (i.indexOf('<') >= 0 && i.indexOf('>') >= 0) {
            let t = 'div';
            0 === i.indexOf('<li') && (t = 'ul'),
              0 === i.indexOf('<tr') && (t = 'tbody'),
              (0 !== i.indexOf('<td') && 0 !== i.indexOf('<th')) || (t = 'tr'),
              0 === i.indexOf('<tbody') && (t = 'table'),
              0 === i.indexOf('<option') && (t = 'select');
            const e = s.createElement(t);
            e.innerHTML = i;
            for (let t = 0; t < e.childNodes.length; t += 1)
              n.push(e.childNodes[t]);
          } else
            n = (function (t, e) {
              if ('string' != typeof t) return [t];
              const i = [],
                s = e.querySelectorAll(t);
              for (let t = 0; t < s.length; t += 1) i.push(s[t]);
              return i;
            })(t.trim(), e || s);
        } else if (t.nodeType || t === i || t === s) n.push(t);
        else if (Array.isArray(t)) {
          if (t instanceof c) return t;
          n = t;
        }
        return new c(
          (function (t) {
            const e = [];
            for (let i = 0; i < t.length; i += 1)
              -1 === e.indexOf(t[i]) && e.push(t[i]);
            return e;
          })(n),
        );
      }
      u.fn = c.prototype;
      const p = 'resize scroll'.split(' ');
      function m(t) {
        return function (...e) {
          if (void 0 === e[0]) {
            for (let e = 0; e < this.length; e += 1)
              p.indexOf(t) < 0 &&
                (t in this[e] ? this[e][t]() : u(this[e]).trigger(t));
            return this;
          }
          return this.on(t, ...e);
        };
      }
      m('click'),
        m('blur'),
        m('focus'),
        m('focusin'),
        m('focusout'),
        m('keyup'),
        m('keydown'),
        m('keypress'),
        m('submit'),
        m('change'),
        m('mousedown'),
        m('mousemove'),
        m('mouseup'),
        m('mouseenter'),
        m('mouseleave'),
        m('mouseout'),
        m('mouseover'),
        m('touchstart'),
        m('touchend'),
        m('touchmove'),
        m('resize'),
        m('scroll');
      const f = {
        addClass: function (...t) {
          const e = d(t.map(t => t.split(' ')));
          return (
            this.forEach(t => {
              t.classList.add(...e);
            }),
            this
          );
        },
        removeClass: function (...t) {
          const e = d(t.map(t => t.split(' ')));
          return (
            this.forEach(t => {
              t.classList.remove(...e);
            }),
            this
          );
        },
        hasClass: function (...t) {
          const e = d(t.map(t => t.split(' ')));
          return (
            h(this, t => e.filter(e => t.classList.contains(e)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...t) {
          const e = d(t.map(t => t.split(' ')));
          this.forEach(t => {
            e.forEach(e => {
              t.classList.toggle(e);
            });
          });
        },
        attr: function (t, e) {
          if (1 === arguments.length && 'string' == typeof t)
            return this[0] ? this[0].getAttribute(t) : void 0;
          for (let i = 0; i < this.length; i += 1)
            if (2 === arguments.length) this[i].setAttribute(t, e);
            else
              for (const e in t)
                (this[i][e] = t[e]), this[i].setAttribute(e, t[e]);
          return this;
        },
        removeAttr: function (t) {
          for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
          return this;
        },
        transform: function (t) {
          for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
          return this;
        },
        transition: function (t) {
          for (let e = 0; e < this.length; e += 1)
            this[e].style.transitionDuration =
              'string' != typeof t ? `${t}ms` : t;
          return this;
        },
        on: function (...t) {
          let [e, i, s, n] = t;
          function o(t) {
            const e = t.target;
            if (!e) return;
            const n = t.target.dom7EventData || [];
            if ((n.indexOf(t) < 0 && n.unshift(t), u(e).is(i))) s.apply(e, n);
            else {
              const t = u(e).parents();
              for (let e = 0; e < t.length; e += 1)
                u(t[e]).is(i) && s.apply(t[e], n);
            }
          }
          function a(t) {
            const e = (t && t.target && t.target.dom7EventData) || [];
            e.indexOf(t) < 0 && e.unshift(t), s.apply(this, e);
          }
          'function' == typeof t[1] && (([e, s, n] = t), (i = void 0)),
            n || (n = !1);
          const r = e.split(' ');
          let l;
          for (let t = 0; t < this.length; t += 1) {
            const e = this[t];
            if (i)
              for (l = 0; l < r.length; l += 1) {
                const t = r[l];
                e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                  e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                  e.dom7LiveListeners[t].push({
                    listener: s,
                    proxyListener: o,
                  }),
                  e.addEventListener(t, o, n);
              }
            else
              for (l = 0; l < r.length; l += 1) {
                const t = r[l];
                e.dom7Listeners || (e.dom7Listeners = {}),
                  e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                  e.dom7Listeners[t].push({ listener: s, proxyListener: a }),
                  e.addEventListener(t, a, n);
              }
          }
          return this;
        },
        off: function (...t) {
          let [e, i, s, n] = t;
          'function' == typeof t[1] && (([e, s, n] = t), (i = void 0)),
            n || (n = !1);
          const o = e.split(' ');
          for (let t = 0; t < o.length; t += 1) {
            const e = o[t];
            for (let t = 0; t < this.length; t += 1) {
              const o = this[t];
              let a;
              if (
                (!i && o.dom7Listeners
                  ? (a = o.dom7Listeners[e])
                  : i && o.dom7LiveListeners && (a = o.dom7LiveListeners[e]),
                a && a.length)
              )
                for (let t = a.length - 1; t >= 0; t -= 1) {
                  const i = a[t];
                  (s && i.listener === s) ||
                  (s &&
                    i.listener &&
                    i.listener.dom7proxy &&
                    i.listener.dom7proxy === s)
                    ? (o.removeEventListener(e, i.proxyListener, n),
                      a.splice(t, 1))
                    : s ||
                      (o.removeEventListener(e, i.proxyListener, n),
                      a.splice(t, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...t) {
          const e = l(),
            i = t[0].split(' '),
            s = t[1];
          for (let n = 0; n < i.length; n += 1) {
            const o = i[n];
            for (let i = 0; i < this.length; i += 1) {
              const n = this[i];
              if (e.CustomEvent) {
                const i = new e.CustomEvent(o, {
                  detail: s,
                  bubbles: !0,
                  cancelable: !0,
                });
                (n.dom7EventData = t.filter((t, e) => e > 0)),
                  n.dispatchEvent(i),
                  (n.dom7EventData = []),
                  delete n.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (t) {
          const e = this;
          return (
            t &&
              e.on('transitionend', function i(s) {
                s.target === this &&
                  (t.call(this, s), e.off('transitionend', i));
              }),
            this
          );
        },
        outerWidth: function (t) {
          if (this.length > 0) {
            if (t) {
              const t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue('margin-right')) +
                parseFloat(t.getPropertyValue('margin-left'))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (t) {
          if (this.length > 0) {
            if (t) {
              const t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue('margin-top')) +
                parseFloat(t.getPropertyValue('margin-bottom'))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const t = l();
          return this[0] ? t.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const t = l(),
              e = a(),
              i = this[0],
              s = i.getBoundingClientRect(),
              n = e.body,
              o = i.clientTop || n.clientTop || 0,
              r = i.clientLeft || n.clientLeft || 0,
              c = i === t ? t.scrollY : i.scrollTop,
              d = i === t ? t.scrollX : i.scrollLeft;
            return { top: s.top + c - o, left: s.left + d - r };
          }
          return null;
        },
        css: function (t, e) {
          const i = l();
          let s;
          if (1 === arguments.length) {
            if ('string' != typeof t) {
              for (s = 0; s < this.length; s += 1)
                for (const e in t) this[s].style[e] = t[e];
              return this;
            }
            if (this[0])
              return i.getComputedStyle(this[0], null).getPropertyValue(t);
          }
          if (2 === arguments.length && 'string' == typeof t) {
            for (s = 0; s < this.length; s += 1) this[s].style[t] = e;
            return this;
          }
          return this;
        },
        each: function (t) {
          return t
            ? (this.forEach((e, i) => {
                t.apply(e, [e, i]);
              }),
              this)
            : this;
        },
        html: function (t) {
          if (void 0 === t) return this[0] ? this[0].innerHTML : null;
          for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
          return this;
        },
        text: function (t) {
          if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
          for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
          return this;
        },
        is: function (t) {
          const e = l(),
            i = a(),
            s = this[0];
          let n, o;
          if (!s || void 0 === t) return !1;
          if ('string' == typeof t) {
            if (s.matches) return s.matches(t);
            if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
            if (s.msMatchesSelector) return s.msMatchesSelector(t);
            for (n = u(t), o = 0; o < n.length; o += 1)
              if (n[o] === s) return !0;
            return !1;
          }
          if (t === i) return s === i;
          if (t === e) return s === e;
          if (t.nodeType || t instanceof c) {
            for (n = t.nodeType ? [t] : t, o = 0; o < n.length; o += 1)
              if (n[o] === s) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let t,
            e = this[0];
          if (e) {
            for (t = 0; null !== (e = e.previousSibling); )
              1 === e.nodeType && (t += 1);
            return t;
          }
        },
        eq: function (t) {
          if (void 0 === t) return this;
          const e = this.length;
          if (t > e - 1) return u([]);
          if (t < 0) {
            const i = e + t;
            return u(i < 0 ? [] : [this[i]]);
          }
          return u([this[t]]);
        },
        append: function (...t) {
          let e;
          const i = a();
          for (let s = 0; s < t.length; s += 1) {
            e = t[s];
            for (let t = 0; t < this.length; t += 1)
              if ('string' == typeof e) {
                const s = i.createElement('div');
                for (s.innerHTML = e; s.firstChild; )
                  this[t].appendChild(s.firstChild);
              } else if (e instanceof c)
                for (let i = 0; i < e.length; i += 1) this[t].appendChild(e[i]);
              else this[t].appendChild(e);
          }
          return this;
        },
        prepend: function (t) {
          const e = a();
          let i, s;
          for (i = 0; i < this.length; i += 1)
            if ('string' == typeof t) {
              const n = e.createElement('div');
              for (n.innerHTML = t, s = n.childNodes.length - 1; s >= 0; s -= 1)
                this[i].insertBefore(n.childNodes[s], this[i].childNodes[0]);
            } else if (t instanceof c)
              for (s = 0; s < t.length; s += 1)
                this[i].insertBefore(t[s], this[i].childNodes[0]);
            else this[i].insertBefore(t, this[i].childNodes[0]);
          return this;
        },
        next: function (t) {
          return this.length > 0
            ? t
              ? this[0].nextElementSibling &&
                u(this[0].nextElementSibling).is(t)
                ? u([this[0].nextElementSibling])
                : u([])
              : this[0].nextElementSibling
              ? u([this[0].nextElementSibling])
              : u([])
            : u([]);
        },
        nextAll: function (t) {
          const e = [];
          let i = this[0];
          if (!i) return u([]);
          for (; i.nextElementSibling; ) {
            const s = i.nextElementSibling;
            t ? u(s).is(t) && e.push(s) : e.push(s), (i = s);
          }
          return u(e);
        },
        prev: function (t) {
          if (this.length > 0) {
            const e = this[0];
            return t
              ? e.previousElementSibling && u(e.previousElementSibling).is(t)
                ? u([e.previousElementSibling])
                : u([])
              : e.previousElementSibling
              ? u([e.previousElementSibling])
              : u([]);
          }
          return u([]);
        },
        prevAll: function (t) {
          const e = [];
          let i = this[0];
          if (!i) return u([]);
          for (; i.previousElementSibling; ) {
            const s = i.previousElementSibling;
            t ? u(s).is(t) && e.push(s) : e.push(s), (i = s);
          }
          return u(e);
        },
        parent: function (t) {
          const e = [];
          for (let i = 0; i < this.length; i += 1)
            null !== this[i].parentNode &&
              (t
                ? u(this[i].parentNode).is(t) && e.push(this[i].parentNode)
                : e.push(this[i].parentNode));
          return u(e);
        },
        parents: function (t) {
          const e = [];
          for (let i = 0; i < this.length; i += 1) {
            let s = this[i].parentNode;
            for (; s; )
              t ? u(s).is(t) && e.push(s) : e.push(s), (s = s.parentNode);
          }
          return u(e);
        },
        closest: function (t) {
          let e = this;
          return void 0 === t
            ? u([])
            : (e.is(t) || (e = e.parents(t).eq(0)), e);
        },
        find: function (t) {
          const e = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].querySelectorAll(t);
            for (let t = 0; t < s.length; t += 1) e.push(s[t]);
          }
          return u(e);
        },
        children: function (t) {
          const e = [];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i].children;
            for (let i = 0; i < s.length; i += 1)
              (t && !u(s[i]).is(t)) || e.push(s[i]);
          }
          return u(e);
        },
        filter: function (t) {
          return u(h(this, t));
        },
        remove: function () {
          for (let t = 0; t < this.length; t += 1)
            this[t].parentNode && this[t].parentNode.removeChild(this[t]);
          return this;
        },
      };
      Object.keys(f).forEach(t => {
        Object.defineProperty(u.fn, t, { value: f[t], writable: !0 });
      });
      const g = u;
      function w(t, e) {
        return void 0 === e && (e = 0), setTimeout(t, e);
      }
      function v() {
        return Date.now();
      }
      function b(t, e) {
        void 0 === e && (e = 'x');
        const i = l();
        let s, n, o;
        const a = (function (t) {
          const e = l();
          let i;
          return (
            e.getComputedStyle && (i = e.getComputedStyle(t, null)),
            !i && t.currentStyle && (i = t.currentStyle),
            i || (i = t.style),
            i
          );
        })(t);
        return (
          i.WebKitCSSMatrix
            ? ((n = a.transform || a.webkitTransform),
              n.split(',').length > 6 &&
                (n = n
                  .split(', ')
                  .map(t => t.replace(',', '.'))
                  .join(', ')),
              (o = new i.WebKitCSSMatrix('none' === n ? '' : n)))
            : ((o =
                a.MozTransform ||
                a.OTransform ||
                a.MsTransform ||
                a.msTransform ||
                a.transform ||
                a
                  .getPropertyValue('transform')
                  .replace('translate(', 'matrix(1, 0, 0, 1,')),
              (s = o.toString().split(','))),
          'x' === e &&
            (n = i.WebKitCSSMatrix
              ? o.m41
              : 16 === s.length
              ? parseFloat(s[12])
              : parseFloat(s[4])),
          'y' === e &&
            (n = i.WebKitCSSMatrix
              ? o.m42
              : 16 === s.length
              ? parseFloat(s[13])
              : parseFloat(s[5])),
          n || 0
        );
      }
      function y(t) {
        return (
          'object' == typeof t &&
          null !== t &&
          t.constructor &&
          'Object' === Object.prototype.toString.call(t).slice(8, -1)
        );
      }
      function x(t) {
        return 'undefined' != typeof window && void 0 !== window.HTMLElement
          ? t instanceof HTMLElement
          : t && (1 === t.nodeType || 11 === t.nodeType);
      }
      function C() {
        const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          e = ['__proto__', 'constructor', 'prototype'];
        for (let i = 1; i < arguments.length; i += 1) {
          const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (null != s && !x(s)) {
            const i = Object.keys(Object(s)).filter(t => e.indexOf(t) < 0);
            for (let e = 0, n = i.length; e < n; e += 1) {
              const n = i[e],
                o = Object.getOwnPropertyDescriptor(s, n);
              void 0 !== o &&
                o.enumerable &&
                (y(t[n]) && y(s[n])
                  ? s[n].__swiper__
                    ? (t[n] = s[n])
                    : C(t[n], s[n])
                  : !y(t[n]) && y(s[n])
                  ? ((t[n] = {}),
                    s[n].__swiper__ ? (t[n] = s[n]) : C(t[n], s[n]))
                  : (t[n] = s[n]));
            }
          }
        }
        return t;
      }
      function S(t, e, i) {
        t.style.setProperty(e, i);
      }
      function E(t) {
        let { swiper: e, targetPosition: i, side: s } = t;
        const n = l(),
          o = -e.translate;
        let a,
          r = null;
        const c = e.params.speed;
        (e.wrapperEl.style.scrollSnapType = 'none'),
          n.cancelAnimationFrame(e.cssModeFrameID);
        const d = i > o ? 'next' : 'prev',
          h = (t, e) => ('next' === d && t >= e) || ('prev' === d && t <= e),
          u = () => {
            (a = new Date().getTime()), null === r && (r = a);
            const t = Math.max(Math.min((a - r) / c, 1), 0),
              l = 0.5 - Math.cos(t * Math.PI) / 2;
            let d = o + l * (i - o);
            if ((h(d, i) && (d = i), e.wrapperEl.scrollTo({ [s]: d }), h(d, i)))
              return (
                (e.wrapperEl.style.overflow = 'hidden'),
                (e.wrapperEl.style.scrollSnapType = ''),
                setTimeout(() => {
                  (e.wrapperEl.style.overflow = ''),
                    e.wrapperEl.scrollTo({ [s]: d });
                }),
                void n.cancelAnimationFrame(e.cssModeFrameID)
              );
            e.cssModeFrameID = n.requestAnimationFrame(u);
          };
        u();
      }
      let T, k, P;
      function L() {
        return (
          T ||
            (T = (function () {
              const t = l(),
                e = a();
              return {
                smoothScroll:
                  e.documentElement &&
                  'scrollBehavior' in e.documentElement.style,
                touch: !!(
                  'ontouchstart' in t ||
                  (t.DocumentTouch && e instanceof t.DocumentTouch)
                ),
                passiveListener: (function () {
                  let e = !1;
                  try {
                    const i = Object.defineProperty({}, 'passive', {
                      get() {
                        e = !0;
                      },
                    });
                    t.addEventListener('testPassiveListener', null, i);
                  } catch (t) {}
                  return e;
                })(),
                gestures: 'ongesturestart' in t,
              };
            })()),
          T
        );
      }
      function A(t) {
        return (
          void 0 === t && (t = {}),
          k ||
            (k = (function (t) {
              let { userAgent: e } = void 0 === t ? {} : t;
              const i = L(),
                s = l(),
                n = s.navigator.platform,
                o = e || s.navigator.userAgent,
                a = { ios: !1, android: !1 },
                r = s.screen.width,
                c = s.screen.height,
                d = o.match(/(Android);?[\s\/]+([\d.]+)?/);
              let h = o.match(/(iPad).*OS\s([\d_]+)/);
              const u = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !h && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = 'Win32' === n;
              let f = 'MacIntel' === n;
              return (
                !h &&
                  f &&
                  i.touch &&
                  [
                    '1024x1366',
                    '1366x1024',
                    '834x1194',
                    '1194x834',
                    '834x1112',
                    '1112x834',
                    '768x1024',
                    '1024x768',
                    '820x1180',
                    '1180x820',
                    '810x1080',
                    '1080x810',
                  ].indexOf(`${r}x${c}`) >= 0 &&
                  ((h = o.match(/(Version)\/([\d.]+)/)),
                  h || (h = [0, 1, '13_0_0']),
                  (f = !1)),
                d && !m && ((a.os = 'android'), (a.android = !0)),
                (h || p || u) && ((a.os = 'ios'), (a.ios = !0)),
                a
              );
            })(t)),
          k
        );
      }
      function _() {
        return (
          P ||
            (P = (function () {
              const t = l();
              return {
                isSafari: (function () {
                  const e = t.navigator.userAgent.toLowerCase();
                  return (
                    e.indexOf('safari') >= 0 &&
                    e.indexOf('chrome') < 0 &&
                    e.indexOf('android') < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  t.navigator.userAgent,
                ),
              };
            })()),
          P
        );
      }
      const M = {
        on(t, e, i) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ('function' != typeof e) return s;
          const n = i ? 'unshift' : 'push';
          return (
            t.split(' ').forEach(t => {
              s.eventsListeners[t] || (s.eventsListeners[t] = []),
                s.eventsListeners[t][n](e);
            }),
            s
          );
        },
        once(t, e, i) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ('function' != typeof e) return s;
          function n() {
            s.off(t, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
              o[a] = arguments[a];
            e.apply(s, o);
          }
          return (n.__emitterProxy = e), s.on(t, n, i);
        },
        onAny(t, e) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ('function' != typeof t) return i;
          const s = e ? 'unshift' : 'push';
          return (
            i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i
          );
        },
        offAny(t) {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsAnyListeners) return e;
          const i = e.eventsAnyListeners.indexOf(t);
          return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
        },
        off(t, e) {
          const i = this;
          return !i.eventsListeners || i.destroyed
            ? i
            : i.eventsListeners
            ? (t.split(' ').forEach(t => {
                void 0 === e
                  ? (i.eventsListeners[t] = [])
                  : i.eventsListeners[t] &&
                    i.eventsListeners[t].forEach((s, n) => {
                      (s === e ||
                        (s.__emitterProxy && s.__emitterProxy === e)) &&
                        i.eventsListeners[t].splice(n, 1);
                    });
              }),
              i)
            : i;
        },
        emit() {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsListeners) return t;
          let e, i, s;
          for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          'string' == typeof o[0] || Array.isArray(o[0])
            ? ((e = o[0]), (i = o.slice(1, o.length)), (s = t))
            : ((e = o[0].events), (i = o[0].data), (s = o[0].context || t)),
            i.unshift(s);
          return (
            (Array.isArray(e) ? e : e.split(' ')).forEach(e => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach(t => {
                  t.apply(s, [e, ...i]);
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach(t => {
                    t.apply(s, i);
                  });
            }),
            t
          );
        },
      };
      const O = {
        updateSize: function () {
          const t = this;
          let e, i;
          const s = t.$el;
          (e =
            void 0 !== t.params.width && null !== t.params.width
              ? t.params.width
              : s[0].clientWidth),
            (i =
              void 0 !== t.params.height && null !== t.params.height
                ? t.params.height
                : s[0].clientHeight),
            (0 === e && t.isHorizontal()) ||
              (0 === i && t.isVertical()) ||
              ((e =
                e -
                parseInt(s.css('padding-left') || 0, 10) -
                parseInt(s.css('padding-right') || 0, 10)),
              (i =
                i -
                parseInt(s.css('padding-top') || 0, 10) -
                parseInt(s.css('padding-bottom') || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(i) && (i = 0),
              Object.assign(t, {
                width: e,
                height: i,
                size: t.isHorizontal() ? e : i,
              }));
        },
        updateSlides: function () {
          const t = this;
          function e(e) {
            return t.isHorizontal()
              ? e
              : {
                  width: 'height',
                  'margin-top': 'margin-left',
                  'margin-bottom ': 'margin-right',
                  'margin-left': 'margin-top',
                  'margin-right': 'margin-bottom',
                  'padding-left': 'padding-top',
                  'padding-right': 'padding-bottom',
                  marginRight: 'marginBottom',
                }[e];
          }
          function i(t, i) {
            return parseFloat(t.getPropertyValue(e(i)) || 0);
          }
          const s = t.params,
            { $wrapperEl: n, size: o, rtlTranslate: a, wrongRTL: r } = t,
            l = t.virtual && s.virtual.enabled,
            c = l ? t.virtual.slides.length : t.slides.length,
            d = n.children(`.${t.params.slideClass}`),
            h = l ? t.virtual.slides.length : d.length;
          let u = [];
          const p = [],
            m = [];
          let f = s.slidesOffsetBefore;
          'function' == typeof f && (f = s.slidesOffsetBefore.call(t));
          let g = s.slidesOffsetAfter;
          'function' == typeof g && (g = s.slidesOffsetAfter.call(t));
          const w = t.snapGrid.length,
            v = t.slidesGrid.length;
          let b = s.spaceBetween,
            y = -f,
            x = 0,
            C = 0;
          if (void 0 === o) return;
          'string' == typeof b &&
            b.indexOf('%') >= 0 &&
            (b = (parseFloat(b.replace('%', '')) / 100) * o),
            (t.virtualSize = -b),
            a
              ? d.css({ marginLeft: '', marginBottom: '', marginTop: '' })
              : d.css({ marginRight: '', marginBottom: '', marginTop: '' }),
            s.centeredSlides &&
              s.cssMode &&
              (S(t.wrapperEl, '--swiper-centered-offset-before', ''),
              S(t.wrapperEl, '--swiper-centered-offset-after', ''));
          const E = s.grid && s.grid.rows > 1 && t.grid;
          let T;
          E && t.grid.initSlides(h);
          const k =
            'auto' === s.slidesPerView &&
            s.breakpoints &&
            Object.keys(s.breakpoints).filter(
              t => void 0 !== s.breakpoints[t].slidesPerView,
            ).length > 0;
          for (let n = 0; n < h; n += 1) {
            T = 0;
            const a = d.eq(n);
            if (
              (E && t.grid.updateSlide(n, a, h, e), 'none' !== a.css('display'))
            ) {
              if ('auto' === s.slidesPerView) {
                k && (d[n].style[e('width')] = '');
                const o = getComputedStyle(a[0]),
                  r = a[0].style.transform,
                  l = a[0].style.webkitTransform;
                if (
                  (r && (a[0].style.transform = 'none'),
                  l && (a[0].style.webkitTransform = 'none'),
                  s.roundLengths)
                )
                  T = t.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                else {
                  const t = i(o, 'width'),
                    e = i(o, 'padding-left'),
                    s = i(o, 'padding-right'),
                    n = i(o, 'margin-left'),
                    r = i(o, 'margin-right'),
                    l = o.getPropertyValue('box-sizing');
                  if (l && 'border-box' === l) T = t + n + r;
                  else {
                    const { clientWidth: i, offsetWidth: o } = a[0];
                    T = t + e + s + n + r + (o - i);
                  }
                }
                r && (a[0].style.transform = r),
                  l && (a[0].style.webkitTransform = l),
                  s.roundLengths && (T = Math.floor(T));
              } else
                (T = (o - (s.slidesPerView - 1) * b) / s.slidesPerView),
                  s.roundLengths && (T = Math.floor(T)),
                  d[n] && (d[n].style[e('width')] = `${T}px`);
              d[n] && (d[n].swiperSlideSize = T),
                m.push(T),
                s.centeredSlides
                  ? ((y = y + T / 2 + x / 2 + b),
                    0 === x && 0 !== n && (y = y - o / 2 - b),
                    0 === n && (y = y - o / 2 - b),
                    Math.abs(y) < 0.001 && (y = 0),
                    s.roundLengths && (y = Math.floor(y)),
                    C % s.slidesPerGroup == 0 && u.push(y),
                    p.push(y))
                  : (s.roundLengths && (y = Math.floor(y)),
                    (C - Math.min(t.params.slidesPerGroupSkip, C)) %
                      t.params.slidesPerGroup ==
                      0 && u.push(y),
                    p.push(y),
                    (y = y + T + b)),
                (t.virtualSize += T + b),
                (x = T),
                (C += 1);
            }
          }
          if (
            ((t.virtualSize = Math.max(t.virtualSize, o) + g),
            a &&
              r &&
              ('slide' === s.effect || 'coverflow' === s.effect) &&
              n.css({ width: `${t.virtualSize + s.spaceBetween}px` }),
            s.setWrapperSize &&
              n.css({ [e('width')]: `${t.virtualSize + s.spaceBetween}px` }),
            E && t.grid.updateWrapperSize(T, u, e),
            !s.centeredSlides)
          ) {
            const e = [];
            for (let i = 0; i < u.length; i += 1) {
              let n = u[i];
              s.roundLengths && (n = Math.floor(n)),
                u[i] <= t.virtualSize - o && e.push(n);
            }
            (u = e),
              Math.floor(t.virtualSize - o) - Math.floor(u[u.length - 1]) > 1 &&
                u.push(t.virtualSize - o);
          }
          if ((0 === u.length && (u = [0]), 0 !== s.spaceBetween)) {
            const i = t.isHorizontal() && a ? 'marginLeft' : e('marginRight');
            d.filter((t, e) => !s.cssMode || e !== d.length - 1).css({
              [i]: `${b}px`,
            });
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let t = 0;
            m.forEach(e => {
              t += e + (s.spaceBetween ? s.spaceBetween : 0);
            }),
              (t -= s.spaceBetween);
            const e = t - o;
            u = u.map(t => (t < 0 ? -f : t > e ? e + g : t));
          }
          if (s.centerInsufficientSlides) {
            let t = 0;
            if (
              (m.forEach(e => {
                t += e + (s.spaceBetween ? s.spaceBetween : 0);
              }),
              (t -= s.spaceBetween),
              t < o)
            ) {
              const e = (o - t) / 2;
              u.forEach((t, i) => {
                u[i] = t - e;
              }),
                p.forEach((t, i) => {
                  p[i] = t + e;
                });
            }
          }
          if (
            (Object.assign(t, {
              slides: d,
              snapGrid: u,
              slidesGrid: p,
              slidesSizesGrid: m,
            }),
            s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
          ) {
            S(t.wrapperEl, '--swiper-centered-offset-before', -u[0] + 'px'),
              S(
                t.wrapperEl,
                '--swiper-centered-offset-after',
                t.size / 2 - m[m.length - 1] / 2 + 'px',
              );
            const e = -t.snapGrid[0],
              i = -t.slidesGrid[0];
            (t.snapGrid = t.snapGrid.map(t => t + e)),
              (t.slidesGrid = t.slidesGrid.map(t => t + i));
          }
          if (
            (h !== c && t.emit('slidesLengthChange'),
            u.length !== w &&
              (t.params.watchOverflow && t.checkOverflow(),
              t.emit('snapGridLengthChange')),
            p.length !== v && t.emit('slidesGridLengthChange'),
            s.watchSlidesProgress && t.updateSlidesOffset(),
            !(l || s.cssMode || ('slide' !== s.effect && 'fade' !== s.effect)))
          ) {
            const e = `${s.containerModifierClass}backface-hidden`,
              i = t.$el.hasClass(e);
            h <= s.maxBackfaceHiddenSlides
              ? i || t.$el.addClass(e)
              : i && t.$el.removeClass(e);
          }
        },
        updateAutoHeight: function (t) {
          const e = this,
            i = [],
            s = e.virtual && e.params.virtual.enabled;
          let n,
            o = 0;
          'number' == typeof t
            ? e.setTransition(t)
            : !0 === t && e.setTransition(e.params.speed);
          const a = t =>
            s
              ? e.slides.filter(
                  e =>
                    parseInt(e.getAttribute('data-swiper-slide-index'), 10) ===
                    t,
                )[0]
              : e.slides.eq(t)[0];
          if ('auto' !== e.params.slidesPerView && e.params.slidesPerView > 1)
            if (e.params.centeredSlides)
              (e.visibleSlides || g([])).each(t => {
                i.push(t);
              });
            else
              for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                const t = e.activeIndex + n;
                if (t > e.slides.length && !s) break;
                i.push(a(t));
              }
          else i.push(a(e.activeIndex));
          for (n = 0; n < i.length; n += 1)
            if (void 0 !== i[n]) {
              const t = i[n].offsetHeight;
              o = t > o ? t : o;
            }
          (o || 0 === o) && e.$wrapperEl.css('height', `${o}px`);
        },
        updateSlidesOffset: function () {
          const t = this,
            e = t.slides;
          for (let i = 0; i < e.length; i += 1)
            e[i].swiperSlideOffset = t.isHorizontal()
              ? e[i].offsetLeft
              : e[i].offsetTop;
        },
        updateSlidesProgress: function (t) {
          void 0 === t && (t = (this && this.translate) || 0);
          const e = this,
            i = e.params,
            { slides: s, rtlTranslate: n, snapGrid: o } = e;
          if (0 === s.length) return;
          void 0 === s[0].swiperSlideOffset && e.updateSlidesOffset();
          let a = -t;
          n && (a = t),
            s.removeClass(i.slideVisibleClass),
            (e.visibleSlidesIndexes = []),
            (e.visibleSlides = []);
          for (let t = 0; t < s.length; t += 1) {
            const r = s[t];
            let l = r.swiperSlideOffset;
            i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
            const c =
                (a + (i.centeredSlides ? e.minTranslate() : 0) - l) /
                (r.swiperSlideSize + i.spaceBetween),
              d =
                (a - o[0] + (i.centeredSlides ? e.minTranslate() : 0) - l) /
                (r.swiperSlideSize + i.spaceBetween),
              h = -(a - l),
              u = h + e.slidesSizesGrid[t];
            ((h >= 0 && h < e.size - 1) ||
              (u > 1 && u <= e.size) ||
              (h <= 0 && u >= e.size)) &&
              (e.visibleSlides.push(r),
              e.visibleSlidesIndexes.push(t),
              s.eq(t).addClass(i.slideVisibleClass)),
              (r.progress = n ? -c : c),
              (r.originalProgress = n ? -d : d);
          }
          e.visibleSlides = g(e.visibleSlides);
        },
        updateProgress: function (t) {
          const e = this;
          if (void 0 === t) {
            const i = e.rtlTranslate ? -1 : 1;
            t = (e && e.translate && e.translate * i) || 0;
          }
          const i = e.params,
            s = e.maxTranslate() - e.minTranslate();
          let { progress: n, isBeginning: o, isEnd: a } = e;
          const r = o,
            l = a;
          0 === s
            ? ((n = 0), (o = !0), (a = !0))
            : ((n = (t - e.minTranslate()) / s), (o = n <= 0), (a = n >= 1)),
            Object.assign(e, { progress: n, isBeginning: o, isEnd: a }),
            (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
              e.updateSlidesProgress(t),
            o && !r && e.emit('reachBeginning toEdge'),
            a && !l && e.emit('reachEnd toEdge'),
            ((r && !o) || (l && !a)) && e.emit('fromEdge'),
            e.emit('progress', n);
        },
        updateSlidesClasses: function () {
          const t = this,
            {
              slides: e,
              params: i,
              $wrapperEl: s,
              activeIndex: n,
              realIndex: o,
            } = t,
            a = t.virtual && i.virtual.enabled;
          let r;
          e.removeClass(
            `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`,
          ),
            (r = a
              ? t.$wrapperEl.find(
                  `.${i.slideClass}[data-swiper-slide-index="${n}"]`,
                )
              : e.eq(n)),
            r.addClass(i.slideActiveClass),
            i.loop &&
              (r.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o}"]`,
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o}"]`,
                    )
                    .addClass(i.slideDuplicateActiveClass));
          let l = r
            .nextAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop &&
            0 === l.length &&
            ((l = e.eq(0)), l.addClass(i.slideNextClass));
          let c = r
            .prevAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop &&
            0 === c.length &&
            ((c = e.eq(-1)), c.addClass(i.slidePrevClass)),
            i.loop &&
              (l.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        'data-swiper-slide-index',
                      )}"]`,
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        'data-swiper-slide-index',
                      )}"]`,
                    )
                    .addClass(i.slideDuplicateNextClass),
              c.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        'data-swiper-slide-index',
                      )}"]`,
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        'data-swiper-slide-index',
                      )}"]`,
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (t) {
          const e = this,
            i = e.rtlTranslate ? e.translate : -e.translate,
            {
              slidesGrid: s,
              snapGrid: n,
              params: o,
              activeIndex: a,
              realIndex: r,
              snapIndex: l,
            } = e;
          let c,
            d = t;
          if (void 0 === d) {
            for (let t = 0; t < s.length; t += 1)
              void 0 !== s[t + 1]
                ? i >= s[t] && i < s[t + 1] - (s[t + 1] - s[t]) / 2
                  ? (d = t)
                  : i >= s[t] && i < s[t + 1] && (d = t + 1)
                : i >= s[t] && (d = t);
            o.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (n.indexOf(i) >= 0) c = n.indexOf(i);
          else {
            const t = Math.min(o.slidesPerGroupSkip, d);
            c = t + Math.floor((d - t) / o.slidesPerGroup);
          }
          if ((c >= n.length && (c = n.length - 1), d === a))
            return void (
              c !== l && ((e.snapIndex = c), e.emit('snapIndexChange'))
            );
          const h = parseInt(
            e.slides.eq(d).attr('data-swiper-slide-index') || d,
            10,
          );
          Object.assign(e, {
            snapIndex: c,
            realIndex: h,
            previousIndex: a,
            activeIndex: d,
          }),
            e.emit('activeIndexChange'),
            e.emit('snapIndexChange'),
            r !== h && e.emit('realIndexChange'),
            (e.initialized || e.params.runCallbacksOnInit) &&
              e.emit('slideChange');
        },
        updateClickedSlide: function (t) {
          const e = this,
            i = e.params,
            s = g(t).closest(`.${i.slideClass}`)[0];
          let n,
            o = !1;
          if (s)
            for (let t = 0; t < e.slides.length; t += 1)
              if (e.slides[t] === s) {
                (o = !0), (n = t);
                break;
              }
          if (!s || !o)
            return (e.clickedSlide = void 0), void (e.clickedIndex = void 0);
          (e.clickedSlide = s),
            e.virtual && e.params.virtual.enabled
              ? (e.clickedIndex = parseInt(
                  g(s).attr('data-swiper-slide-index'),
                  10,
                ))
              : (e.clickedIndex = n),
            i.slideToClickedSlide &&
              void 0 !== e.clickedIndex &&
              e.clickedIndex !== e.activeIndex &&
              e.slideToClickedSlide();
        },
      };
      const z = {
        getTranslate: function (t) {
          void 0 === t && (t = this.isHorizontal() ? 'x' : 'y');
          const {
            params: e,
            rtlTranslate: i,
            translate: s,
            $wrapperEl: n,
          } = this;
          if (e.virtualTranslate) return i ? -s : s;
          if (e.cssMode) return s;
          let o = b(n[0], t);
          return i && (o = -o), o || 0;
        },
        setTranslate: function (t, e) {
          const i = this,
            {
              rtlTranslate: s,
              params: n,
              $wrapperEl: o,
              wrapperEl: a,
              progress: r,
            } = i;
          let l,
            c = 0,
            d = 0;
          i.isHorizontal() ? (c = s ? -t : t) : (d = t),
            n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
            n.cssMode
              ? (a[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
                  i.isHorizontal() ? -c : -d)
              : n.virtualTranslate ||
                o.transform(`translate3d(${c}px, ${d}px, 0px)`),
            (i.previousTranslate = i.translate),
            (i.translate = i.isHorizontal() ? c : d);
          const h = i.maxTranslate() - i.minTranslate();
          (l = 0 === h ? 0 : (t - i.minTranslate()) / h),
            l !== r && i.updateProgress(t),
            i.emit('setTranslate', i.translate, e);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (t, e, i, s, n) {
          void 0 === t && (t = 0),
            void 0 === e && (e = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === s && (s = !0);
          const o = this,
            { params: a, wrapperEl: r } = o;
          if (o.animating && a.preventInteractionOnTransition) return !1;
          const l = o.minTranslate(),
            c = o.maxTranslate();
          let d;
          if (
            ((d = s && t > l ? l : s && t < c ? c : t),
            o.updateProgress(d),
            a.cssMode)
          ) {
            const t = o.isHorizontal();
            if (0 === e) r[t ? 'scrollLeft' : 'scrollTop'] = -d;
            else {
              if (!o.support.smoothScroll)
                return (
                  E({
                    swiper: o,
                    targetPosition: -d,
                    side: t ? 'left' : 'top',
                  }),
                  !0
                );
              r.scrollTo({ [t ? 'left' : 'top']: -d, behavior: 'smooth' });
            }
            return !0;
          }
          return (
            0 === e
              ? (o.setTransition(0),
                o.setTranslate(d),
                i &&
                  (o.emit('beforeTransitionStart', e, n),
                  o.emit('transitionEnd')))
              : (o.setTransition(e),
                o.setTranslate(d),
                i &&
                  (o.emit('beforeTransitionStart', e, n),
                  o.emit('transitionStart')),
                o.animating ||
                  ((o.animating = !0),
                  o.onTranslateToWrapperTransitionEnd ||
                    (o.onTranslateToWrapperTransitionEnd = function (t) {
                      o &&
                        !o.destroyed &&
                        t.target === this &&
                        (o.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          o.onTranslateToWrapperTransitionEnd,
                        ),
                        o.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          o.onTranslateToWrapperTransitionEnd,
                        ),
                        (o.onTranslateToWrapperTransitionEnd = null),
                        delete o.onTranslateToWrapperTransitionEnd,
                        i && o.emit('transitionEnd'));
                    }),
                  o.$wrapperEl[0].addEventListener(
                    'transitionend',
                    o.onTranslateToWrapperTransitionEnd,
                  ),
                  o.$wrapperEl[0].addEventListener(
                    'webkitTransitionEnd',
                    o.onTranslateToWrapperTransitionEnd,
                  ))),
            !0
          );
        },
      };
      function I(t) {
        let { swiper: e, runCallbacks: i, direction: s, step: n } = t;
        const { activeIndex: o, previousIndex: a } = e;
        let r = s;
        if (
          (r || (r = o > a ? 'next' : o < a ? 'prev' : 'reset'),
          e.emit(`transition${n}`),
          i && o !== a)
        ) {
          if ('reset' === r) return void e.emit(`slideResetTransition${n}`);
          e.emit(`slideChangeTransition${n}`),
            'next' === r
              ? e.emit(`slideNextTransition${n}`)
              : e.emit(`slidePrevTransition${n}`);
        }
      }
      const B = {
        setTransition: function (t, e) {
          const i = this;
          i.params.cssMode || i.$wrapperEl.transition(t),
            i.emit('setTransition', t, e);
        },
        transitionStart: function (t, e) {
          void 0 === t && (t = !0);
          const i = this,
            { params: s } = i;
          s.cssMode ||
            (s.autoHeight && i.updateAutoHeight(),
            I({ swiper: i, runCallbacks: t, direction: e, step: 'Start' }));
        },
        transitionEnd: function (t, e) {
          void 0 === t && (t = !0);
          const i = this,
            { params: s } = i;
          (i.animating = !1),
            s.cssMode ||
              (i.setTransition(0),
              I({ swiper: i, runCallbacks: t, direction: e, step: 'End' }));
        },
      };
      const D = {
        slideTo: function (t, e, i, s, n) {
          if (
            (void 0 === t && (t = 0),
            void 0 === e && (e = this.params.speed),
            void 0 === i && (i = !0),
            'number' != typeof t && 'string' != typeof t)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`,
            );
          if ('string' == typeof t) {
            const e = parseInt(t, 10);
            if (!isFinite(e))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`,
              );
            t = e;
          }
          const o = this;
          let a = t;
          a < 0 && (a = 0);
          const {
            params: r,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: h,
            rtlTranslate: u,
            wrapperEl: p,
            enabled: m,
          } = o;
          if (
            (o.animating && r.preventInteractionOnTransition) ||
            (!m && !s && !n)
          )
            return !1;
          const f = Math.min(o.params.slidesPerGroupSkip, a);
          let g = f + Math.floor((a - f) / o.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1),
            (h || r.initialSlide || 0) === (d || 0) &&
              i &&
              o.emit('beforeSlideChangeStart');
          const w = -l[g];
          if ((o.updateProgress(w), r.normalizeSlideIndex))
            for (let t = 0; t < c.length; t += 1) {
              const e = -Math.floor(100 * w),
                i = Math.floor(100 * c[t]),
                s = Math.floor(100 * c[t + 1]);
              void 0 !== c[t + 1]
                ? e >= i && e < s - (s - i) / 2
                  ? (a = t)
                  : e >= i && e < s && (a = t + 1)
                : e >= i && (a = t);
            }
          if (o.initialized && a !== h) {
            if (!o.allowSlideNext && w < o.translate && w < o.minTranslate())
              return !1;
            if (
              !o.allowSlidePrev &&
              w > o.translate &&
              w > o.maxTranslate() &&
              (h || 0) !== a
            )
              return !1;
          }
          let v;
          if (
            ((v = a > h ? 'next' : a < h ? 'prev' : 'reset'),
            (u && -w === o.translate) || (!u && w === o.translate))
          )
            return (
              o.updateActiveIndex(a),
              r.autoHeight && o.updateAutoHeight(),
              o.updateSlidesClasses(),
              'slide' !== r.effect && o.setTranslate(w),
              'reset' !== v && (o.transitionStart(i, v), o.transitionEnd(i, v)),
              !1
            );
          if (r.cssMode) {
            const t = o.isHorizontal(),
              i = u ? w : -w;
            if (0 === e) {
              const e = o.virtual && o.params.virtual.enabled;
              e &&
                ((o.wrapperEl.style.scrollSnapType = 'none'),
                (o._immediateVirtual = !0)),
                (p[t ? 'scrollLeft' : 'scrollTop'] = i),
                e &&
                  requestAnimationFrame(() => {
                    (o.wrapperEl.style.scrollSnapType = ''),
                      (o._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!o.support.smoothScroll)
                return (
                  E({ swiper: o, targetPosition: i, side: t ? 'left' : 'top' }),
                  !0
                );
              p.scrollTo({ [t ? 'left' : 'top']: i, behavior: 'smooth' });
            }
            return !0;
          }
          return (
            o.setTransition(e),
            o.setTranslate(w),
            o.updateActiveIndex(a),
            o.updateSlidesClasses(),
            o.emit('beforeTransitionStart', e, s),
            o.transitionStart(i, v),
            0 === e
              ? o.transitionEnd(i, v)
              : o.animating ||
                ((o.animating = !0),
                o.onSlideToWrapperTransitionEnd ||
                  (o.onSlideToWrapperTransitionEnd = function (t) {
                    o &&
                      !o.destroyed &&
                      t.target === this &&
                      (o.$wrapperEl[0].removeEventListener(
                        'transitionend',
                        o.onSlideToWrapperTransitionEnd,
                      ),
                      o.$wrapperEl[0].removeEventListener(
                        'webkitTransitionEnd',
                        o.onSlideToWrapperTransitionEnd,
                      ),
                      (o.onSlideToWrapperTransitionEnd = null),
                      delete o.onSlideToWrapperTransitionEnd,
                      o.transitionEnd(i, v));
                  }),
                o.$wrapperEl[0].addEventListener(
                  'transitionend',
                  o.onSlideToWrapperTransitionEnd,
                ),
                o.$wrapperEl[0].addEventListener(
                  'webkitTransitionEnd',
                  o.onSlideToWrapperTransitionEnd,
                )),
            !0
          );
        },
        slideToLoop: function (t, e, i, s) {
          if (
            (void 0 === t && (t = 0),
            void 0 === e && (e = this.params.speed),
            void 0 === i && (i = !0),
            'string' == typeof t)
          ) {
            const e = parseInt(t, 10);
            if (!isFinite(e))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`,
              );
            t = e;
          }
          const n = this;
          let o = t;
          return n.params.loop && (o += n.loopedSlides), n.slideTo(o, e, i, s);
        },
        slideNext: function (t, e, i) {
          void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
          const s = this,
            { animating: n, enabled: o, params: a } = s;
          if (!o) return s;
          let r = a.slidesPerGroup;
          'auto' === a.slidesPerView &&
            1 === a.slidesPerGroup &&
            a.slidesPerGroupAuto &&
            (r = Math.max(s.slidesPerViewDynamic('current', !0), 1));
          const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : r;
          if (a.loop) {
            if (n && a.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          return a.rewind && s.isEnd
            ? s.slideTo(0, t, e, i)
            : s.slideTo(s.activeIndex + l, t, e, i);
        },
        slidePrev: function (t, e, i) {
          void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
          const s = this,
            {
              params: n,
              animating: o,
              snapGrid: a,
              slidesGrid: r,
              rtlTranslate: l,
              enabled: c,
            } = s;
          if (!c) return s;
          if (n.loop) {
            if (o && n.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          function d(t) {
            return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t);
          }
          const h = d(l ? s.translate : -s.translate),
            u = a.map(t => d(t));
          let p = a[u.indexOf(h) - 1];
          if (void 0 === p && n.cssMode) {
            let t;
            a.forEach((e, i) => {
              h >= e && (t = i);
            }),
              void 0 !== t && (p = a[t > 0 ? t - 1 : t]);
          }
          let m = 0;
          if (
            (void 0 !== p &&
              ((m = r.indexOf(p)),
              m < 0 && (m = s.activeIndex - 1),
              'auto' === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                ((m = m - s.slidesPerViewDynamic('previous', !0) + 1),
                (m = Math.max(m, 0)))),
            n.rewind && s.isBeginning)
          ) {
            const n =
              s.params.virtual && s.params.virtual.enabled && s.virtual
                ? s.virtual.slides.length - 1
                : s.slides.length - 1;
            return s.slideTo(n, t, e, i);
          }
          return s.slideTo(m, t, e, i);
        },
        slideReset: function (t, e, i) {
          return (
            void 0 === t && (t = this.params.speed),
            void 0 === e && (e = !0),
            this.slideTo(this.activeIndex, t, e, i)
          );
        },
        slideToClosest: function (t, e, i, s) {
          void 0 === t && (t = this.params.speed),
            void 0 === e && (e = !0),
            void 0 === s && (s = 0.5);
          const n = this;
          let o = n.activeIndex;
          const a = Math.min(n.params.slidesPerGroupSkip, o),
            r = a + Math.floor((o - a) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
          if (l >= n.snapGrid[r]) {
            const t = n.snapGrid[r];
            l - t > (n.snapGrid[r + 1] - t) * s &&
              (o += n.params.slidesPerGroup);
          } else {
            const t = n.snapGrid[r - 1];
            l - t <= (n.snapGrid[r] - t) * s && (o -= n.params.slidesPerGroup);
          }
          return (
            (o = Math.max(o, 0)),
            (o = Math.min(o, n.slidesGrid.length - 1)),
            n.slideTo(o, t, e, i)
          );
        },
        slideToClickedSlide: function () {
          const t = this,
            { params: e, $wrapperEl: i } = t,
            s =
              'auto' === e.slidesPerView
                ? t.slidesPerViewDynamic()
                : e.slidesPerView;
          let n,
            o = t.clickedIndex;
          if (e.loop) {
            if (t.animating) return;
            (n = parseInt(
              g(t.clickedSlide).attr('data-swiper-slide-index'),
              10,
            )),
              e.centeredSlides
                ? o < t.loopedSlides - s / 2 ||
                  o > t.slides.length - t.loopedSlides + s / 2
                  ? (t.loopFix(),
                    (o = i
                      .children(
                        `.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`,
                      )
                      .eq(0)
                      .index()),
                    w(() => {
                      t.slideTo(o);
                    }))
                  : t.slideTo(o)
                : o > t.slides.length - s
                ? (t.loopFix(),
                  (o = i
                    .children(
                      `.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`,
                    )
                    .eq(0)
                    .index()),
                  w(() => {
                    t.slideTo(o);
                  }))
                : t.slideTo(o);
          } else t.slideTo(o);
        },
      };
      const N = {
        loopCreate: function () {
          const t = this,
            e = a(),
            { params: i, $wrapperEl: s } = t,
            n = s.children().length > 0 ? g(s.children()[0].parentNode) : s;
          n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
          let o = n.children(`.${i.slideClass}`);
          if (i.loopFillGroupWithBlank) {
            const t = i.slidesPerGroup - (o.length % i.slidesPerGroup);
            if (t !== i.slidesPerGroup) {
              for (let s = 0; s < t; s += 1) {
                const t = g(e.createElement('div')).addClass(
                  `${i.slideClass} ${i.slideBlankClass}`,
                );
                n.append(t);
              }
              o = n.children(`.${i.slideClass}`);
            }
          }
          'auto' !== i.slidesPerView ||
            i.loopedSlides ||
            (i.loopedSlides = o.length),
            (t.loopedSlides = Math.ceil(
              parseFloat(i.loopedSlides || i.slidesPerView, 10),
            )),
            (t.loopedSlides += i.loopAdditionalSlides),
            t.loopedSlides > o.length &&
              t.params.loopedSlidesLimit &&
              (t.loopedSlides = o.length);
          const r = [],
            l = [];
          o.each((t, e) => {
            g(t).attr('data-swiper-slide-index', e);
          });
          for (let e = 0; e < t.loopedSlides; e += 1) {
            const t = e - Math.floor(e / o.length) * o.length;
            l.push(o.eq(t)[0]), r.unshift(o.eq(o.length - t - 1)[0]);
          }
          for (let t = 0; t < l.length; t += 1)
            n.append(g(l[t].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (let t = r.length - 1; t >= 0; t -= 1)
            n.prepend(g(r[t].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          const t = this;
          t.emit('beforeLoopFix');
          const {
            activeIndex: e,
            slides: i,
            loopedSlides: s,
            allowSlidePrev: n,
            allowSlideNext: o,
            snapGrid: a,
            rtlTranslate: r,
          } = t;
          let l;
          (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
          const c = -a[e] - t.getTranslate();
          if (e < s) {
            (l = i.length - 3 * s + e), (l += s);
            t.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              t.setTranslate((r ? -t.translate : t.translate) - c);
          } else if (e >= i.length - s) {
            (l = -i.length + e + s), (l += s);
            t.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              t.setTranslate((r ? -t.translate : t.translate) - c);
          }
          (t.allowSlidePrev = n), (t.allowSlideNext = o), t.emit('loopFix');
        },
        loopDestroy: function () {
          const { $wrapperEl: t, params: e, slides: i } = this;
          t
            .children(
              `.${e.slideClass}.${e.slideDuplicateClass},.${e.slideClass}.${e.slideBlankClass}`,
            )
            .remove(),
            i.removeAttr('data-swiper-slide-index');
        },
      };
      const F = {
        setGrabCursor: function (t) {
          const e = this;
          if (
            e.support.touch ||
            !e.params.simulateTouch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode
          )
            return;
          const i =
            'container' === e.params.touchEventsTarget ? e.el : e.wrapperEl;
          (i.style.cursor = 'move'), (i.style.cursor = t ? 'grabbing' : 'grab');
        },
        unsetGrabCursor: function () {
          const t = this;
          t.support.touch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode ||
            (t[
              'container' === t.params.touchEventsTarget ? 'el' : 'wrapperEl'
            ].style.cursor = '');
        },
      };
      function j(t) {
        const e = this,
          i = a(),
          s = l(),
          n = e.touchEventsData,
          { params: o, touches: r, enabled: c } = e;
        if (!c) return;
        if (e.animating && o.preventInteractionOnTransition) return;
        !e.animating && o.cssMode && o.loop && e.loopFix();
        let d = t;
        d.originalEvent && (d = d.originalEvent);
        let h = g(d.target);
        if ('wrapper' === o.touchEventsTarget && !h.closest(e.wrapperEl).length)
          return;
        if (
          ((n.isTouchEvent = 'touchstart' === d.type),
          !n.isTouchEvent && 'which' in d && 3 === d.which)
        )
          return;
        if (!n.isTouchEvent && 'button' in d && d.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!o.noSwipingClass &&
          '' !== o.noSwipingClass &&
          d.target &&
          d.target.shadowRoot &&
          t.path &&
          t.path[0] &&
          (h = g(t.path[0]));
        const u = o.noSwipingSelector
            ? o.noSwipingSelector
            : `.${o.noSwipingClass}`,
          p = !(!d.target || !d.target.shadowRoot);
        if (
          o.noSwiping &&
          (p
            ? (function (t, e) {
                return (
                  void 0 === e && (e = this),
                  (function e(i) {
                    if (!i || i === a() || i === l()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    const s = i.closest(t);
                    return s || i.getRootNode
                      ? s || e(i.getRootNode().host)
                      : null;
                  })(e)
                );
              })(u, h[0])
            : h.closest(u)[0])
        )
          return void (e.allowClick = !0);
        if (o.swipeHandler && !h.closest(o.swipeHandler)[0]) return;
        (r.currentX =
          'touchstart' === d.type ? d.targetTouches[0].pageX : d.pageX),
          (r.currentY =
            'touchstart' === d.type ? d.targetTouches[0].pageY : d.pageY);
        const m = r.currentX,
          f = r.currentY,
          w = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
          b = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
        if (w && (m <= b || m >= s.innerWidth - b)) {
          if ('prevent' !== w) return;
          t.preventDefault();
        }
        if (
          (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (r.startX = m),
          (r.startY = f),
          (n.touchStartTime = v()),
          (e.allowClick = !0),
          e.updateSize(),
          (e.swipeDirection = void 0),
          o.threshold > 0 && (n.allowThresholdMove = !1),
          'touchstart' !== d.type)
        ) {
          let t = !0;
          h.is(n.focusableElements) &&
            ((t = !1), 'SELECT' === h[0].nodeName && (n.isTouched = !1)),
            i.activeElement &&
              g(i.activeElement).is(n.focusableElements) &&
              i.activeElement !== h[0] &&
              i.activeElement.blur();
          const s = t && e.allowTouchMove && o.touchStartPreventDefault;
          (!o.touchStartForcePreventDefault && !s) ||
            h[0].isContentEditable ||
            d.preventDefault();
        }
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          e.freeMode &&
          e.animating &&
          !o.cssMode &&
          e.freeMode.onTouchStart(),
          e.emit('touchStart', d);
      }
      function H(t) {
        const e = a(),
          i = this,
          s = i.touchEventsData,
          { params: n, touches: o, rtlTranslate: r, enabled: l } = i;
        if (!l) return;
        let c = t;
        if ((c.originalEvent && (c = c.originalEvent), !s.isTouched))
          return void (
            s.startMoving &&
            s.isScrolling &&
            i.emit('touchMoveOpposite', c)
          );
        if (s.isTouchEvent && 'touchmove' !== c.type) return;
        const d =
            'touchmove' === c.type &&
            c.targetTouches &&
            (c.targetTouches[0] || c.changedTouches[0]),
          h = 'touchmove' === c.type ? d.pageX : c.pageX,
          u = 'touchmove' === c.type ? d.pageY : c.pageY;
        if (c.preventedByNestedSwiper)
          return (o.startX = h), void (o.startY = u);
        if (!i.allowTouchMove)
          return (
            g(c.target).is(s.focusableElements) || (i.allowClick = !1),
            void (
              s.isTouched &&
              (Object.assign(o, {
                startX: h,
                startY: u,
                currentX: h,
                currentY: u,
              }),
              (s.touchStartTime = v()))
            )
          );
        if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
          if (i.isVertical()) {
            if (
              (u < o.startY && i.translate <= i.maxTranslate()) ||
              (u > o.startY && i.translate >= i.minTranslate())
            )
              return (s.isTouched = !1), void (s.isMoved = !1);
          } else if (
            (h < o.startX && i.translate <= i.maxTranslate()) ||
            (h > o.startX && i.translate >= i.minTranslate())
          )
            return;
        if (
          s.isTouchEvent &&
          e.activeElement &&
          c.target === e.activeElement &&
          g(c.target).is(s.focusableElements)
        )
          return (s.isMoved = !0), void (i.allowClick = !1);
        if (
          (s.allowTouchCallbacks && i.emit('touchMove', c),
          c.targetTouches && c.targetTouches.length > 1)
        )
          return;
        (o.currentX = h), (o.currentY = u);
        const p = o.currentX - o.startX,
          m = o.currentY - o.startY;
        if (
          i.params.threshold &&
          Math.sqrt(p ** 2 + m ** 2) < i.params.threshold
        )
          return;
        if (void 0 === s.isScrolling) {
          let t;
          (i.isHorizontal() && o.currentY === o.startY) ||
          (i.isVertical() && o.currentX === o.startX)
            ? (s.isScrolling = !1)
            : p * p + m * m >= 25 &&
              ((t = (180 * Math.atan2(Math.abs(m), Math.abs(p))) / Math.PI),
              (s.isScrolling = i.isHorizontal()
                ? t > n.touchAngle
                : 90 - t > n.touchAngle));
        }
        if (
          (s.isScrolling && i.emit('touchMoveOpposite', c),
          void 0 === s.startMoving &&
            ((o.currentX === o.startX && o.currentY === o.startY) ||
              (s.startMoving = !0)),
          s.isScrolling)
        )
          return void (s.isTouched = !1);
        if (!s.startMoving) return;
        (i.allowClick = !1),
          !n.cssMode && c.cancelable && c.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && c.stopPropagation(),
          s.isMoved ||
            (n.loop && !n.cssMode && i.loopFix(),
            (s.startTranslate = i.getTranslate()),
            i.setTransition(0),
            i.animating &&
              i.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
            (s.allowMomentumBounce = !1),
            !n.grabCursor ||
              (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
              i.setGrabCursor(!0),
            i.emit('sliderFirstMove', c)),
          i.emit('sliderMove', c),
          (s.isMoved = !0);
        let f = i.isHorizontal() ? p : m;
        (o.diff = f),
          (f *= n.touchRatio),
          r && (f = -f),
          (i.swipeDirection = f > 0 ? 'prev' : 'next'),
          (s.currentTranslate = f + s.startTranslate);
        let w = !0,
          b = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (b = 0),
          f > 0 && s.currentTranslate > i.minTranslate()
            ? ((w = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.minTranslate() -
                  1 +
                  (-i.minTranslate() + s.startTranslate + f) ** b))
            : f < 0 &&
              s.currentTranslate < i.maxTranslate() &&
              ((w = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.maxTranslate() +
                  1 -
                  (i.maxTranslate() - s.startTranslate - f) ** b)),
          w && (c.preventedByNestedSwiper = !0),
          !i.allowSlideNext &&
            'next' === i.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !i.allowSlidePrev &&
            'prev' === i.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          i.allowSlidePrev ||
            i.allowSlideNext ||
            (s.currentTranslate = s.startTranslate),
          n.threshold > 0)
        ) {
          if (!(Math.abs(f) > n.threshold || s.allowThresholdMove))
            return void (s.currentTranslate = s.startTranslate);
          if (!s.allowThresholdMove)
            return (
              (s.allowThresholdMove = !0),
              (o.startX = o.currentX),
              (o.startY = o.currentY),
              (s.currentTranslate = s.startTranslate),
              void (o.diff = i.isHorizontal()
                ? o.currentX - o.startX
                : o.currentY - o.startY)
            );
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
            n.watchSlidesProgress) &&
            (i.updateActiveIndex(), i.updateSlidesClasses()),
          i.params.freeMode &&
            n.freeMode.enabled &&
            i.freeMode &&
            i.freeMode.onTouchMove(),
          i.updateProgress(s.currentTranslate),
          i.setTranslate(s.currentTranslate));
      }
      function R(t) {
        const e = this,
          i = e.touchEventsData,
          {
            params: s,
            touches: n,
            rtlTranslate: o,
            slidesGrid: a,
            enabled: r,
          } = e;
        if (!r) return;
        let l = t;
        if (
          (l.originalEvent && (l = l.originalEvent),
          i.allowTouchCallbacks && e.emit('touchEnd', l),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        )
          return (
            i.isMoved && s.grabCursor && e.setGrabCursor(!1),
            (i.isMoved = !1),
            void (i.startMoving = !1)
          );
        s.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) &&
          e.setGrabCursor(!1);
        const c = v(),
          d = c - i.touchStartTime;
        if (e.allowClick) {
          const t = l.path || (l.composedPath && l.composedPath());
          e.updateClickedSlide((t && t[0]) || l.target),
            e.emit('tap click', l),
            d < 300 &&
              c - i.lastClickTime < 300 &&
              e.emit('doubleTap doubleClick', l);
        }
        if (
          ((i.lastClickTime = v()),
          w(() => {
            e.destroyed || (e.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !e.swipeDirection ||
            0 === n.diff ||
            i.currentTranslate === i.startTranslate)
        )
          return (
            (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
          );
        let h;
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (h = s.followFinger
            ? o
              ? e.translate
              : -e.translate
            : -i.currentTranslate),
          s.cssMode)
        )
          return;
        if (e.params.freeMode && s.freeMode.enabled)
          return void e.freeMode.onTouchEnd({ currentPos: h });
        let u = 0,
          p = e.slidesSizesGrid[0];
        for (
          let t = 0;
          t < a.length;
          t += t < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
        ) {
          const e = t < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== a[t + e]
            ? h >= a[t] && h < a[t + e] && ((u = t), (p = a[t + e] - a[t]))
            : h >= a[t] && ((u = t), (p = a[a.length - 1] - a[a.length - 2]));
        }
        let m = null,
          f = null;
        s.rewind &&
          (e.isBeginning
            ? (f =
                e.params.virtual && e.params.virtual.enabled && e.virtual
                  ? e.virtual.slides.length - 1
                  : e.slides.length - 1)
            : e.isEnd && (m = 0));
        const g = (h - a[u]) / p,
          b = u < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (d > s.longSwipesMs) {
          if (!s.longSwipes) return void e.slideTo(e.activeIndex);
          'next' === e.swipeDirection &&
            (g >= s.longSwipesRatio
              ? e.slideTo(s.rewind && e.isEnd ? m : u + b)
              : e.slideTo(u)),
            'prev' === e.swipeDirection &&
              (g > 1 - s.longSwipesRatio
                ? e.slideTo(u + b)
                : null !== f && g < 0 && Math.abs(g) > s.longSwipesRatio
                ? e.slideTo(f)
                : e.slideTo(u));
        } else {
          if (!s.shortSwipes) return void e.slideTo(e.activeIndex);
          e.navigation &&
          (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl)
            ? l.target === e.navigation.nextEl
              ? e.slideTo(u + b)
              : e.slideTo(u)
            : ('next' === e.swipeDirection && e.slideTo(null !== m ? m : u + b),
              'prev' === e.swipeDirection && e.slideTo(null !== f ? f : u));
        }
      }
      function q() {
        const t = this,
          { params: e, el: i } = t;
        if (i && 0 === i.offsetWidth) return;
        e.breakpoints && t.setBreakpoint();
        const { allowSlideNext: s, allowSlidePrev: n, snapGrid: o } = t;
        (t.allowSlideNext = !0),
          (t.allowSlidePrev = !0),
          t.updateSize(),
          t.updateSlides(),
          t.updateSlidesClasses(),
          ('auto' === e.slidesPerView || e.slidesPerView > 1) &&
          t.isEnd &&
          !t.isBeginning &&
          !t.params.centeredSlides
            ? t.slideTo(t.slides.length - 1, 0, !1, !0)
            : t.slideTo(t.activeIndex, 0, !1, !0),
          t.autoplay &&
            t.autoplay.running &&
            t.autoplay.paused &&
            t.autoplay.run(),
          (t.allowSlidePrev = n),
          (t.allowSlideNext = s),
          t.params.watchOverflow && o !== t.snapGrid && t.checkOverflow();
      }
      function W(t) {
        const e = this;
        e.enabled &&
          (e.allowClick ||
            (e.params.preventClicks && t.preventDefault(),
            e.params.preventClicksPropagation &&
              e.animating &&
              (t.stopPropagation(), t.stopImmediatePropagation())));
      }
      function V() {
        const t = this,
          { wrapperEl: e, rtlTranslate: i, enabled: s } = t;
        if (!s) return;
        let n;
        (t.previousTranslate = t.translate),
          t.isHorizontal()
            ? (t.translate = -e.scrollLeft)
            : (t.translate = -e.scrollTop),
          0 === t.translate && (t.translate = 0),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
        const o = t.maxTranslate() - t.minTranslate();
        (n = 0 === o ? 0 : (t.translate - t.minTranslate()) / o),
          n !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
          t.emit('setTranslate', t.translate, !1);
      }
      let G = !1;
      function Y() {}
      const X = (t, e) => {
        const i = a(),
          {
            params: s,
            touchEvents: n,
            el: o,
            wrapperEl: r,
            device: l,
            support: c,
          } = t,
          d = !!s.nested,
          h = 'on' === e ? 'addEventListener' : 'removeEventListener',
          u = e;
        if (c.touch) {
          const e = !(
            'touchstart' !== n.start ||
            !c.passiveListener ||
            !s.passiveListeners
          ) && { passive: !0, capture: !1 };
          o[h](n.start, t.onTouchStart, e),
            o[h](
              n.move,
              t.onTouchMove,
              c.passiveListener ? { passive: !1, capture: d } : d,
            ),
            o[h](n.end, t.onTouchEnd, e),
            n.cancel && o[h](n.cancel, t.onTouchEnd, e);
        } else
          o[h](n.start, t.onTouchStart, !1),
            i[h](n.move, t.onTouchMove, d),
            i[h](n.end, t.onTouchEnd, !1);
        (s.preventClicks || s.preventClicksPropagation) &&
          o[h]('click', t.onClick, !0),
          s.cssMode && r[h]('scroll', t.onScroll),
          s.updateOnWindowResize
            ? t[u](
                l.ios || l.android
                  ? 'resize orientationchange observerUpdate'
                  : 'resize observerUpdate',
                q,
                !0,
              )
            : t[u]('observerUpdate', q, !0);
      };
      const U = {
          attachEvents: function () {
            const t = this,
              e = a(),
              { params: i, support: s } = t;
            (t.onTouchStart = j.bind(t)),
              (t.onTouchMove = H.bind(t)),
              (t.onTouchEnd = R.bind(t)),
              i.cssMode && (t.onScroll = V.bind(t)),
              (t.onClick = W.bind(t)),
              s.touch && !G && (e.addEventListener('touchstart', Y), (G = !0)),
              X(t, 'on');
          },
          detachEvents: function () {
            X(this, 'off');
          },
        },
        Z = (t, e) => t.grid && e.grid && e.grid.rows > 1;
      const K = {
        setBreakpoint: function () {
          const t = this,
            {
              activeIndex: e,
              initialized: i,
              loopedSlides: s = 0,
              params: n,
              $el: o,
            } = t,
            a = n.breakpoints;
          if (!a || (a && 0 === Object.keys(a).length)) return;
          const r = t.getBreakpoint(a, t.params.breakpointsBase, t.el);
          if (!r || t.currentBreakpoint === r) return;
          const l = (r in a ? a[r] : void 0) || t.originalParams,
            c = Z(t, n),
            d = Z(t, l),
            h = n.enabled;
          c && !d
            ? (o.removeClass(
                `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`,
              ),
              t.emitContainerClasses())
            : !c &&
              d &&
              (o.addClass(`${n.containerModifierClass}grid`),
              ((l.grid.fill && 'column' === l.grid.fill) ||
                (!l.grid.fill && 'column' === n.grid.fill)) &&
                o.addClass(`${n.containerModifierClass}grid-column`),
              t.emitContainerClasses()),
            ['navigation', 'pagination', 'scrollbar'].forEach(e => {
              const i = n[e] && n[e].enabled,
                s = l[e] && l[e].enabled;
              i && !s && t[e].disable(), !i && s && t[e].enable();
            });
          const u = l.direction && l.direction !== n.direction,
            p = n.loop && (l.slidesPerView !== n.slidesPerView || u);
          u && i && t.changeDirection(), C(t.params, l);
          const m = t.params.enabled;
          Object.assign(t, {
            allowTouchMove: t.params.allowTouchMove,
            allowSlideNext: t.params.allowSlideNext,
            allowSlidePrev: t.params.allowSlidePrev,
          }),
            h && !m ? t.disable() : !h && m && t.enable(),
            (t.currentBreakpoint = r),
            t.emit('_beforeBreakpoint', l),
            p &&
              i &&
              (t.loopDestroy(),
              t.loopCreate(),
              t.updateSlides(),
              t.slideTo(e - s + t.loopedSlides, 0, !1)),
            t.emit('breakpoint', l);
        },
        getBreakpoint: function (t, e, i) {
          if ((void 0 === e && (e = 'window'), !t || ('container' === e && !i)))
            return;
          let s = !1;
          const n = l(),
            o = 'window' === e ? n.innerHeight : i.clientHeight,
            a = Object.keys(t).map(t => {
              if ('string' == typeof t && 0 === t.indexOf('@')) {
                const e = parseFloat(t.substr(1));
                return { value: o * e, point: t };
              }
              return { value: t, point: t };
            });
          a.sort((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10));
          for (let t = 0; t < a.length; t += 1) {
            const { point: o, value: r } = a[t];
            'window' === e
              ? n.matchMedia(`(min-width: ${r}px)`).matches && (s = o)
              : r <= i.clientWidth && (s = o);
          }
          return s || 'max';
        },
      };
      const J = {
        addClasses: function () {
          const t = this,
            {
              classNames: e,
              params: i,
              rtl: s,
              $el: n,
              device: o,
              support: a,
            } = t,
            r = (function (t, e) {
              const i = [];
              return (
                t.forEach(t => {
                  'object' == typeof t
                    ? Object.keys(t).forEach(s => {
                        t[s] && i.push(e + s);
                      })
                    : 'string' == typeof t && i.push(e + t);
                }),
                i
              );
            })(
              [
                'initialized',
                i.direction,
                { 'pointer-events': !a.touch },
                { 'free-mode': t.params.freeMode && i.freeMode.enabled },
                { autoheight: i.autoHeight },
                { rtl: s },
                { grid: i.grid && i.grid.rows > 1 },
                {
                  'grid-column':
                    i.grid && i.grid.rows > 1 && 'column' === i.grid.fill,
                },
                { android: o.android },
                { ios: o.ios },
                { 'css-mode': i.cssMode },
                { centered: i.cssMode && i.centeredSlides },
                { 'watch-progress': i.watchSlidesProgress },
              ],
              i.containerModifierClass,
            );
          e.push(...r), n.addClass([...e].join(' ')), t.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: t, classNames: e } = this;
          t.removeClass(e.join(' ')), this.emitContainerClasses();
        },
      };
      const Q = {
        loadImage: function (t, e, i, s, n, o) {
          const a = l();
          let r;
          function c() {
            o && o();
          }
          g(t).parent('picture')[0] || (t.complete && n)
            ? c()
            : e
            ? ((r = new a.Image()),
              (r.onload = c),
              (r.onerror = c),
              s && (r.sizes = s),
              i && (r.srcset = i),
              e && (r.src = e))
            : c();
        },
        preloadImages: function () {
          const t = this;
          function e() {
            null != t &&
              t &&
              !t.destroyed &&
              (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
              t.imagesLoaded === t.imagesToLoad.length &&
                (t.params.updateOnImagesReady && t.update(),
                t.emit('imagesReady')));
          }
          t.imagesToLoad = t.$el.find('img');
          for (let i = 0; i < t.imagesToLoad.length; i += 1) {
            const s = t.imagesToLoad[i];
            t.loadImage(
              s,
              s.currentSrc || s.getAttribute('src'),
              s.srcset || s.getAttribute('srcset'),
              s.sizes || s.getAttribute('sizes'),
              !0,
              e,
            );
          }
        },
      };
      const tt = {
          checkOverflow: function () {
            const t = this,
              { isLocked: e, params: i } = t,
              { slidesOffsetBefore: s } = i;
            if (s) {
              const e = t.slides.length - 1,
                i = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * s;
              t.isLocked = t.size > i;
            } else t.isLocked = 1 === t.snapGrid.length;
            !0 === i.allowSlideNext && (t.allowSlideNext = !t.isLocked),
              !0 === i.allowSlidePrev && (t.allowSlidePrev = !t.isLocked),
              e && e !== t.isLocked && (t.isEnd = !1),
              e !== t.isLocked && t.emit(t.isLocked ? 'lock' : 'unlock');
          },
        },
        et = {
          init: !0,
          direction: 'horizontal',
          touchEventsTarget: 'wrapper',
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements:
            'input, select, option, textarea, button, video, label',
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: 'slide',
          breakpoints: void 0,
          breakpointsBase: 'window',
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopedSlidesLimit: !0,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: 'swiper-no-swiping',
          noSwipingSelector: null,
          passiveListeners: !0,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: 'swiper-',
          slideClass: 'swiper-slide',
          slideBlankClass: 'swiper-slide-invisible-blank',
          slideActiveClass: 'swiper-slide-active',
          slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
          slideVisibleClass: 'swiper-slide-visible',
          slideDuplicateClass: 'swiper-slide-duplicate',
          slideNextClass: 'swiper-slide-next',
          slideDuplicateNextClass: 'swiper-slide-duplicate-next',
          slidePrevClass: 'swiper-slide-prev',
          slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
          wrapperClass: 'swiper-wrapper',
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
      function it(t, e) {
        return function (i) {
          void 0 === i && (i = {});
          const s = Object.keys(i)[0],
            n = i[s];
          'object' == typeof n && null !== n
            ? (['navigation', 'pagination', 'scrollbar'].indexOf(s) >= 0 &&
                !0 === t[s] &&
                (t[s] = { auto: !0 }),
              s in t && 'enabled' in n
                ? (!0 === t[s] && (t[s] = { enabled: !0 }),
                  'object' != typeof t[s] ||
                    'enabled' in t[s] ||
                    (t[s].enabled = !0),
                  t[s] || (t[s] = { enabled: !1 }),
                  C(e, i))
                : C(e, i))
            : C(e, i);
        };
      }
      const st = {
          eventsEmitter: M,
          update: O,
          translate: z,
          transition: B,
          slide: D,
          loop: N,
          grabCursor: F,
          events: U,
          breakpoints: K,
          checkOverflow: tt,
          classes: J,
          images: Q,
        },
        nt = {};
      class ot {
        constructor() {
          let t, e;
          for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
            s[n] = arguments[n];
          if (
            (1 === s.length &&
            s[0].constructor &&
            'Object' === Object.prototype.toString.call(s[0]).slice(8, -1)
              ? (e = s[0])
              : ([t, e] = s),
            e || (e = {}),
            (e = C({}, e)),
            t && !e.el && (e.el = t),
            e.el && g(e.el).length > 1)
          ) {
            const t = [];
            return (
              g(e.el).each(i => {
                const s = C({}, e, { el: i });
                t.push(new ot(s));
              }),
              t
            );
          }
          const o = this;
          (o.__swiper__ = !0),
            (o.support = L()),
            (o.device = A({ userAgent: e.userAgent })),
            (o.browser = _()),
            (o.eventsListeners = {}),
            (o.eventsAnyListeners = []),
            (o.modules = [...o.__modules__]),
            e.modules &&
              Array.isArray(e.modules) &&
              o.modules.push(...e.modules);
          const a = {};
          o.modules.forEach(t => {
            t({
              swiper: o,
              extendParams: it(e, a),
              on: o.on.bind(o),
              once: o.once.bind(o),
              off: o.off.bind(o),
              emit: o.emit.bind(o),
            });
          });
          const r = C({}, et, a);
          return (
            (o.params = C({}, r, nt, e)),
            (o.originalParams = C({}, o.params)),
            (o.passedParams = C({}, e)),
            o.params &&
              o.params.on &&
              Object.keys(o.params.on).forEach(t => {
                o.on(t, o.params.on[t]);
              }),
            o.params && o.params.onAny && o.onAny(o.params.onAny),
            (o.$ = g),
            Object.assign(o, {
              enabled: o.params.enabled,
              el: t,
              classNames: [],
              slides: g(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => 'horizontal' === o.params.direction,
              isVertical: () => 'vertical' === o.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: o.params.allowSlideNext,
              allowSlidePrev: o.params.allowSlidePrev,
              touchEvents: (function () {
                const t = [
                    'touchstart',
                    'touchmove',
                    'touchend',
                    'touchcancel',
                  ],
                  e = ['pointerdown', 'pointermove', 'pointerup'];
                return (
                  (o.touchEventsTouch = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                    cancel: t[3],
                  }),
                  (o.touchEventsDesktop = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                  }),
                  o.support.touch || !o.params.simulateTouch
                    ? o.touchEventsTouch
                    : o.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: o.params.focusableElements,
                lastClickTime: v(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: o.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            o.emit('_swiper'),
            o.params.init && o.init(),
            o
          );
        }
        enable() {
          const t = this;
          t.enabled ||
            ((t.enabled = !0),
            t.params.grabCursor && t.setGrabCursor(),
            t.emit('enable'));
        }
        disable() {
          const t = this;
          t.enabled &&
            ((t.enabled = !1),
            t.params.grabCursor && t.unsetGrabCursor(),
            t.emit('disable'));
        }
        setProgress(t, e) {
          const i = this;
          t = Math.min(Math.max(t, 0), 1);
          const s = i.minTranslate(),
            n = (i.maxTranslate() - s) * t + s;
          i.translateTo(n, void 0 === e ? 0 : e),
            i.updateActiveIndex(),
            i.updateSlidesClasses();
        }
        emitContainerClasses() {
          const t = this;
          if (!t.params._emitClasses || !t.el) return;
          const e = t.el.className
            .split(' ')
            .filter(
              e =>
                0 === e.indexOf('swiper') ||
                0 === e.indexOf(t.params.containerModifierClass),
            );
          t.emit('_containerClasses', e.join(' '));
        }
        getSlideClasses(t) {
          const e = this;
          return e.destroyed
            ? ''
            : t.className
                .split(' ')
                .filter(
                  t =>
                    0 === t.indexOf('swiper-slide') ||
                    0 === t.indexOf(e.params.slideClass),
                )
                .join(' ');
        }
        emitSlidesClasses() {
          const t = this;
          if (!t.params._emitClasses || !t.el) return;
          const e = [];
          t.slides.each(i => {
            const s = t.getSlideClasses(i);
            e.push({ slideEl: i, classNames: s }), t.emit('_slideClass', i, s);
          }),
            t.emit('_slideClasses', e);
        }
        slidesPerViewDynamic(t, e) {
          void 0 === t && (t = 'current'), void 0 === e && (e = !1);
          const {
            params: i,
            slides: s,
            slidesGrid: n,
            slidesSizesGrid: o,
            size: a,
            activeIndex: r,
          } = this;
          let l = 1;
          if (i.centeredSlides) {
            let t,
              e = s[r].swiperSlideSize;
            for (let i = r + 1; i < s.length; i += 1)
              s[i] &&
                !t &&
                ((e += s[i].swiperSlideSize), (l += 1), e > a && (t = !0));
            for (let i = r - 1; i >= 0; i -= 1)
              s[i] &&
                !t &&
                ((e += s[i].swiperSlideSize), (l += 1), e > a && (t = !0));
          } else if ('current' === t)
            for (let t = r + 1; t < s.length; t += 1) {
              (e ? n[t] + o[t] - n[r] < a : n[t] - n[r] < a) && (l += 1);
            }
          else
            for (let t = r - 1; t >= 0; t -= 1) {
              n[r] - n[t] < a && (l += 1);
            }
          return l;
        }
        update() {
          const t = this;
          if (!t || t.destroyed) return;
          const { snapGrid: e, params: i } = t;
          function s() {
            const e = t.rtlTranslate ? -1 * t.translate : t.translate,
              i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
            t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          let n;
          i.breakpoints && t.setBreakpoint(),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.params.freeMode && t.params.freeMode.enabled
              ? (s(), t.params.autoHeight && t.updateAutoHeight())
              : ((n =
                  ('auto' === t.params.slidesPerView ||
                    t.params.slidesPerView > 1) &&
                  t.isEnd &&
                  !t.params.centeredSlides
                    ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                    : t.slideTo(t.activeIndex, 0, !1, !0)),
                n || s()),
            i.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
            t.emit('update');
        }
        changeDirection(t, e) {
          void 0 === e && (e = !0);
          const i = this,
            s = i.params.direction;
          return (
            t || (t = 'horizontal' === s ? 'vertical' : 'horizontal'),
            t === s ||
              ('horizontal' !== t && 'vertical' !== t) ||
              (i.$el
                .removeClass(`${i.params.containerModifierClass}${s}`)
                .addClass(`${i.params.containerModifierClass}${t}`),
              i.emitContainerClasses(),
              (i.params.direction = t),
              i.slides.each(e => {
                'vertical' === t ? (e.style.width = '') : (e.style.height = '');
              }),
              i.emit('changeDirection'),
              e && i.update()),
            i
          );
        }
        changeLanguageDirection(t) {
          const e = this;
          (e.rtl && 'rtl' === t) ||
            (!e.rtl && 'ltr' === t) ||
            ((e.rtl = 'rtl' === t),
            (e.rtlTranslate = 'horizontal' === e.params.direction && e.rtl),
            e.rtl
              ? (e.$el.addClass(`${e.params.containerModifierClass}rtl`),
                (e.el.dir = 'rtl'))
              : (e.$el.removeClass(`${e.params.containerModifierClass}rtl`),
                (e.el.dir = 'ltr')),
            e.update());
        }
        mount(t) {
          const e = this;
          if (e.mounted) return !0;
          const i = g(t || e.params.el);
          if (!(t = i[0])) return !1;
          t.swiper = e;
          const s = () =>
            `.${(e.params.wrapperClass || '').trim().split(' ').join('.')}`;
          let n = (() => {
            if (t && t.shadowRoot && t.shadowRoot.querySelector) {
              const e = g(t.shadowRoot.querySelector(s()));
              return (e.children = t => i.children(t)), e;
            }
            return i.children ? i.children(s()) : g(i).children(s());
          })();
          if (0 === n.length && e.params.createElements) {
            const t = a().createElement('div');
            (n = g(t)),
              (t.className = e.params.wrapperClass),
              i.append(t),
              i.children(`.${e.params.slideClass}`).each(t => {
                n.append(t);
              });
          }
          return (
            Object.assign(e, {
              $el: i,
              el: t,
              $wrapperEl: n,
              wrapperEl: n[0],
              mounted: !0,
              rtl:
                'rtl' === t.dir.toLowerCase() || 'rtl' === i.css('direction'),
              rtlTranslate:
                'horizontal' === e.params.direction &&
                ('rtl' === t.dir.toLowerCase() || 'rtl' === i.css('direction')),
              wrongRTL: '-webkit-box' === n.css('display'),
            }),
            !0
          );
        }
        init(t) {
          const e = this;
          if (e.initialized) return e;
          return (
            !1 === e.mount(t) ||
              (e.emit('beforeInit'),
              e.params.breakpoints && e.setBreakpoint(),
              e.addClasses(),
              e.params.loop && e.loopCreate(),
              e.updateSize(),
              e.updateSlides(),
              e.params.watchOverflow && e.checkOverflow(),
              e.params.grabCursor && e.enabled && e.setGrabCursor(),
              e.params.preloadImages && e.preloadImages(),
              e.params.loop
                ? e.slideTo(
                    e.params.initialSlide + e.loopedSlides,
                    0,
                    e.params.runCallbacksOnInit,
                    !1,
                    !0,
                  )
                : e.slideTo(
                    e.params.initialSlide,
                    0,
                    e.params.runCallbacksOnInit,
                    !1,
                    !0,
                  ),
              e.attachEvents(),
              (e.initialized = !0),
              e.emit('init'),
              e.emit('afterInit')),
            e
          );
        }
        destroy(t, e) {
          void 0 === t && (t = !0), void 0 === e && (e = !0);
          const i = this,
            { params: s, $el: n, $wrapperEl: o, slides: a } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit('beforeDestroy'),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              e &&
                (i.removeClasses(),
                n.removeAttr('style'),
                o.removeAttr('style'),
                a &&
                  a.length &&
                  a
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(' '),
                    )
                    .removeAttr('style')
                    .removeAttr('data-swiper-slide-index')),
              i.emit('destroy'),
              Object.keys(i.eventsListeners).forEach(t => {
                i.off(t);
              }),
              !1 !== t &&
                ((i.$el[0].swiper = null),
                (function (t) {
                  const e = t;
                  Object.keys(e).forEach(t => {
                    try {
                      e[t] = null;
                    } catch (t) {}
                    try {
                      delete e[t];
                    } catch (t) {}
                  });
                })(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(t) {
          C(nt, t);
        }
        static get extendedDefaults() {
          return nt;
        }
        static get defaults() {
          return et;
        }
        static installModule(t) {
          ot.prototype.__modules__ || (ot.prototype.__modules__ = []);
          const e = ot.prototype.__modules__;
          'function' == typeof t && e.indexOf(t) < 0 && e.push(t);
        }
        static use(t) {
          return Array.isArray(t)
            ? (t.forEach(t => ot.installModule(t)), ot)
            : (ot.installModule(t), ot);
        }
      }
      Object.keys(st).forEach(t => {
        Object.keys(st[t]).forEach(e => {
          ot.prototype[e] = st[t][e];
        });
      }),
        ot.use([
          function (t) {
            let { swiper: e, on: i, emit: s } = t;
            const n = l();
            let o = null,
              a = null;
            const r = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (s('beforeResize'), s('resize'));
              },
              c = () => {
                e && !e.destroyed && e.initialized && s('orientationchange');
              };
            i('init', () => {
              e.params.resizeObserver && void 0 !== n.ResizeObserver
                ? e &&
                  !e.destroyed &&
                  e.initialized &&
                  ((o = new ResizeObserver(t => {
                    a = n.requestAnimationFrame(() => {
                      const { width: i, height: s } = e;
                      let n = i,
                        o = s;
                      t.forEach(t => {
                        let {
                          contentBoxSize: i,
                          contentRect: s,
                          target: a,
                        } = t;
                        (a && a !== e.el) ||
                          ((n = s ? s.width : (i[0] || i).inlineSize),
                          (o = s ? s.height : (i[0] || i).blockSize));
                      }),
                        (n === i && o === s) || r();
                    });
                  })),
                  o.observe(e.el))
                : (n.addEventListener('resize', r),
                  n.addEventListener('orientationchange', c));
            }),
              i('destroy', () => {
                a && n.cancelAnimationFrame(a),
                  o && o.unobserve && e.el && (o.unobserve(e.el), (o = null)),
                  n.removeEventListener('resize', r),
                  n.removeEventListener('orientationchange', c);
              });
          },
          function (t) {
            let { swiper: e, extendParams: i, on: s, emit: n } = t;
            const o = [],
              a = l(),
              r = function (t, e) {
                void 0 === e && (e = {});
                const i = new (a.MutationObserver || a.WebkitMutationObserver)(
                  t => {
                    if (1 === t.length) return void n('observerUpdate', t[0]);
                    const e = function () {
                      n('observerUpdate', t[0]);
                    };
                    a.requestAnimationFrame
                      ? a.requestAnimationFrame(e)
                      : a.setTimeout(e, 0);
                  },
                );
                i.observe(t, {
                  attributes: void 0 === e.attributes || e.attributes,
                  childList: void 0 === e.childList || e.childList,
                  characterData: void 0 === e.characterData || e.characterData,
                }),
                  o.push(i);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              s('init', () => {
                if (e.params.observer) {
                  if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) r(t[e]);
                  }
                  r(e.$el[0], { childList: e.params.observeSlideChildren }),
                    r(e.$wrapperEl[0], { attributes: !1 });
                }
              }),
              s('destroy', () => {
                o.forEach(t => {
                  t.disconnect();
                }),
                  o.splice(0, o.length);
              });
          },
        ]);
      const at = ot;
      function rt(t, e, i, s) {
        const n = a();
        return (
          t.params.createElements &&
            Object.keys(s).forEach(o => {
              if (!i[o] && !0 === i.auto) {
                let a = t.$el.children(`.${s[o]}`)[0];
                a ||
                  ((a = n.createElement('div')),
                  (a.className = s[o]),
                  t.$el.append(a)),
                  (i[o] = a),
                  (e[o] = a);
              }
            }),
          i
        );
      }
      function lt(t) {
        let { swiper: e, extendParams: i, on: s, emit: n } = t;
        function o(t) {
          let i;
          return (
            t &&
              ((i = g(t)),
              e.params.uniqueNavElements &&
                'string' == typeof t &&
                i.length > 1 &&
                1 === e.$el.find(t).length &&
                (i = e.$el.find(t))),
            i
          );
        }
        function a(t, i) {
          const s = e.params.navigation;
          t &&
            t.length > 0 &&
            (t[i ? 'addClass' : 'removeClass'](s.disabledClass),
            t[0] && 'BUTTON' === t[0].tagName && (t[0].disabled = i),
            e.params.watchOverflow &&
              e.enabled &&
              t[e.isLocked ? 'addClass' : 'removeClass'](s.lockClass));
        }
        function r() {
          if (e.params.loop) return;
          const { $nextEl: t, $prevEl: i } = e.navigation;
          a(i, e.isBeginning && !e.params.rewind),
            a(t, e.isEnd && !e.params.rewind);
        }
        function l(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              (e.slidePrev(), n('navigationPrev'));
        }
        function c(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) &&
              (e.slideNext(), n('navigationNext'));
        }
        function d() {
          const t = e.params.navigation;
          if (
            ((e.params.navigation = rt(
              e,
              e.originalParams.navigation,
              e.params.navigation,
              { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' },
            )),
            !t.nextEl && !t.prevEl)
          )
            return;
          const i = o(t.nextEl),
            s = o(t.prevEl);
          i && i.length > 0 && i.on('click', c),
            s && s.length > 0 && s.on('click', l),
            Object.assign(e.navigation, {
              $nextEl: i,
              nextEl: i && i[0],
              $prevEl: s,
              prevEl: s && s[0],
            }),
            e.enabled ||
              (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass));
        }
        function h() {
          const { $nextEl: t, $prevEl: i } = e.navigation;
          t &&
            t.length &&
            (t.off('click', c),
            t.removeClass(e.params.navigation.disabledClass)),
            i &&
              i.length &&
              (i.off('click', l),
              i.removeClass(e.params.navigation.disabledClass));
        }
        i({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
            navigationDisabledClass: 'swiper-navigation-disabled',
          },
        }),
          (e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          s('init', () => {
            !1 === e.params.navigation.enabled ? u() : (d(), r());
          }),
          s('toEdge fromEdge lock unlock', () => {
            r();
          }),
          s('destroy', () => {
            h();
          }),
          s('enable disable', () => {
            const { $nextEl: t, $prevEl: i } = e.navigation;
            t &&
              t[e.enabled ? 'removeClass' : 'addClass'](
                e.params.navigation.lockClass,
              ),
              i &&
                i[e.enabled ? 'removeClass' : 'addClass'](
                  e.params.navigation.lockClass,
                );
          }),
          s('click', (t, i) => {
            const { $nextEl: s, $prevEl: o } = e.navigation,
              a = i.target;
            if (e.params.navigation.hideOnClick && !g(a).is(o) && !g(a).is(s)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === a || e.pagination.el.contains(a))
              )
                return;
              let t;
              s
                ? (t = s.hasClass(e.params.navigation.hiddenClass))
                : o && (t = o.hasClass(e.params.navigation.hiddenClass)),
                n(!0 === t ? 'navigationShow' : 'navigationHide'),
                s && s.toggleClass(e.params.navigation.hiddenClass),
                o && o.toggleClass(e.params.navigation.hiddenClass);
            }
          });
        const u = () => {
          e.$el.addClass(e.params.navigation.navigationDisabledClass), h();
        };
        Object.assign(e.navigation, {
          enable: () => {
            e.$el.removeClass(e.params.navigation.navigationDisabledClass),
              d(),
              r();
          },
          disable: u,
          update: r,
          init: d,
          destroy: h,
        });
      }
      function ct(t) {
        return (
          void 0 === t && (t = ''),
          `.${t
            .trim()
            .replace(/([\.:!\/])/g, '\\$1')
            .replace(/ /g, '.')}`
        );
      }
      function dt(t) {
        let { swiper: e, extendParams: i, on: s, emit: n } = t;
        const o = 'swiper-pagination';
        let a;
        i({
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: t => t,
            formatFractionTotal: t => t,
            bulletClass: `${o}-bullet`,
            bulletActiveClass: `${o}-bullet-active`,
            modifierClass: `${o}-`,
            currentClass: `${o}-current`,
            totalClass: `${o}-total`,
            hiddenClass: `${o}-hidden`,
            progressbarFillClass: `${o}-progressbar-fill`,
            progressbarOppositeClass: `${o}-progressbar-opposite`,
            clickableClass: `${o}-clickable`,
            lockClass: `${o}-lock`,
            horizontalClass: `${o}-horizontal`,
            verticalClass: `${o}-vertical`,
            paginationDisabledClass: `${o}-disabled`,
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] });
        let r = 0;
        function l() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          );
        }
        function c(t, i) {
          const { bulletActiveClass: s } = e.params.pagination;
          t[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`);
        }
        function d() {
          const t = e.rtl,
            i = e.params.pagination;
          if (l()) return;
          const s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            o = e.pagination.$el;
          let d;
          const h = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((d = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup,
                )),
                d > s - 1 - 2 * e.loopedSlides && (d -= s - 2 * e.loopedSlides),
                d > h - 1 && (d -= h),
                d < 0 && 'bullets' !== e.params.paginationType && (d = h + d))
              : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            'bullets' === i.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const s = e.pagination.bullets;
            let n, l, h;
            if (
              (i.dynamicBullets &&
                ((a = s
                  .eq(0)
                  [e.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                o.css(
                  e.isHorizontal() ? 'width' : 'height',
                  a * (i.dynamicMainBullets + 4) + 'px',
                ),
                i.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((r += d - (e.previousIndex - e.loopedSlides || 0)),
                  r > i.dynamicMainBullets - 1
                    ? (r = i.dynamicMainBullets - 1)
                    : r < 0 && (r = 0)),
                (n = Math.max(d - r, 0)),
                (l = n + (Math.min(s.length, i.dynamicMainBullets) - 1)),
                (h = (l + n) / 2)),
              s.removeClass(
                ['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
                  .map(t => `${i.bulletActiveClass}${t}`)
                  .join(' '),
              ),
              o.length > 1)
            )
              s.each(t => {
                const e = g(t),
                  s = e.index();
                s === d && e.addClass(i.bulletActiveClass),
                  i.dynamicBullets &&
                    (s >= n &&
                      s <= l &&
                      e.addClass(`${i.bulletActiveClass}-main`),
                    s === n && c(e, 'prev'),
                    s === l && c(e, 'next'));
              });
            else {
              const t = s.eq(d),
                o = t.index();
              if ((t.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                const t = s.eq(n),
                  a = s.eq(l);
                for (let t = n; t <= l; t += 1)
                  s.eq(t).addClass(`${i.bulletActiveClass}-main`);
                if (e.params.loop)
                  if (o >= s.length) {
                    for (let t = i.dynamicMainBullets; t >= 0; t -= 1)
                      s.eq(s.length - t).addClass(
                        `${i.bulletActiveClass}-main`,
                      );
                    s.eq(s.length - i.dynamicMainBullets - 1).addClass(
                      `${i.bulletActiveClass}-prev`,
                    );
                  } else c(t, 'prev'), c(a, 'next');
                else c(t, 'prev'), c(a, 'next');
              }
            }
            if (i.dynamicBullets) {
              const n = Math.min(s.length, i.dynamicMainBullets + 4),
                o = (a * n - a) / 2 - h * a,
                r = t ? 'right' : 'left';
              s.css(e.isHorizontal() ? r : 'top', `${o}px`);
            }
          }
          if (
            ('fraction' === i.type &&
              (o.find(ct(i.currentClass)).text(i.formatFractionCurrent(d + 1)),
              o.find(ct(i.totalClass)).text(i.formatFractionTotal(h))),
            'progressbar' === i.type)
          ) {
            let t;
            t = i.progressbarOpposite
              ? e.isHorizontal()
                ? 'vertical'
                : 'horizontal'
              : e.isHorizontal()
              ? 'horizontal'
              : 'vertical';
            const s = (d + 1) / h;
            let n = 1,
              a = 1;
            'horizontal' === t ? (n = s) : (a = s),
              o
                .find(ct(i.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${a})`)
                .transition(e.params.speed);
          }
          'custom' === i.type && i.renderCustom
            ? (o.html(i.renderCustom(e, d + 1, h)), n('paginationRender', o[0]))
            : n('paginationUpdate', o[0]),
            e.params.watchOverflow &&
              e.enabled &&
              o[e.isLocked ? 'addClass' : 'removeClass'](i.lockClass);
        }
        function h() {
          const t = e.params.pagination;
          if (l()) return;
          const i =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            s = e.pagination.$el;
          let o = '';
          if ('bullets' === t.type) {
            let n = e.params.loop
              ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              n > i &&
              (n = i);
            for (let i = 0; i < n; i += 1)
              t.renderBullet
                ? (o += t.renderBullet.call(e, i, t.bulletClass))
                : (o += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            s.html(o), (e.pagination.bullets = s.find(ct(t.bulletClass)));
          }
          'fraction' === t.type &&
            ((o = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            s.html(o)),
            'progressbar' === t.type &&
              ((o = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              s.html(o)),
            'custom' !== t.type && n('paginationRender', e.pagination.$el[0]);
        }
        function u() {
          e.params.pagination = rt(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: 'swiper-pagination' },
          );
          const t = e.params.pagination;
          if (!t.el) return;
          let i = g(t.el);
          0 !== i.length &&
            (e.params.uniqueNavElements &&
              'string' == typeof t.el &&
              i.length > 1 &&
              ((i = e.$el.find(t.el)),
              i.length > 1 &&
                (i = i.filter(t => g(t).parents('.swiper')[0] === e.el))),
            'bullets' === t.type && t.clickable && i.addClass(t.clickableClass),
            i.addClass(t.modifierClass + t.type),
            i.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
            'bullets' === t.type &&
              t.dynamicBullets &&
              (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (r = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            'progressbar' === t.type &&
              t.progressbarOpposite &&
              i.addClass(t.progressbarOppositeClass),
            t.clickable &&
              i.on('click', ct(t.bulletClass), function (t) {
                t.preventDefault();
                let i = g(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
              }),
            Object.assign(e.pagination, { $el: i, el: i[0] }),
            e.enabled || i.addClass(t.lockClass));
        }
        function p() {
          const t = e.params.pagination;
          if (l()) return;
          const i = e.pagination.$el;
          i.removeClass(t.hiddenClass),
            i.removeClass(t.modifierClass + t.type),
            i.removeClass(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass,
            ),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && i.off('click', ct(t.bulletClass));
        }
        s('init', () => {
          !1 === e.params.pagination.enabled ? m() : (u(), h(), d());
        }),
          s('activeIndexChange', () => {
            (e.params.loop || void 0 === e.snapIndex) && d();
          }),
          s('snapIndexChange', () => {
            e.params.loop || d();
          }),
          s('slidesLengthChange', () => {
            e.params.loop && (h(), d());
          }),
          s('snapGridLengthChange', () => {
            e.params.loop || (h(), d());
          }),
          s('destroy', () => {
            p();
          }),
          s('enable disable', () => {
            const { $el: t } = e.pagination;
            t &&
              t[e.enabled ? 'removeClass' : 'addClass'](
                e.params.pagination.lockClass,
              );
          }),
          s('lock unlock', () => {
            d();
          }),
          s('click', (t, i) => {
            const s = i.target,
              { $el: o } = e.pagination;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              o &&
              o.length > 0 &&
              !g(s).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && s === e.navigation.nextEl) ||
                  (e.navigation.prevEl && s === e.navigation.prevEl))
              )
                return;
              const t = o.hasClass(e.params.pagination.hiddenClass);
              n(!0 === t ? 'paginationShow' : 'paginationHide'),
                o.toggleClass(e.params.pagination.hiddenClass);
            }
          });
        const m = () => {
          e.$el.addClass(e.params.pagination.paginationDisabledClass),
            e.pagination.$el &&
              e.pagination.$el.addClass(
                e.params.pagination.paginationDisabledClass,
              ),
            p();
        };
        Object.assign(e.pagination, {
          enable: () => {
            e.$el.removeClass(e.params.pagination.paginationDisabledClass),
              e.pagination.$el &&
                e.pagination.$el.removeClass(
                  e.params.pagination.paginationDisabledClass,
                ),
              u(),
              h(),
              d();
          },
          disable: m,
          render: h,
          update: d,
          init: u,
          destroy: p,
        });
      }
      function ht(t, e) {
        var i =
          ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator'];
        if (!i) {
          if (
            Array.isArray(t) ||
            (i = (function (t, e) {
              if (!t) return;
              if ('string' == typeof t) return ut(t, e);
              var i = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === i && t.constructor && (i = t.constructor.name);
              if ('Map' === i || 'Set' === i) return Array.from(t);
              if (
                'Arguments' === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              )
                return ut(t, e);
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            i && (t = i);
            var s = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return s >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[s++] };
              },
              e: function (t) {
                throw t;
              },
              f: n,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          a = !0,
          r = !1;
        return {
          s: function () {
            i = i.call(t);
          },
          n: function () {
            var t = i.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (r = !0), (o = t);
          },
          f: function () {
            try {
              a || null == i.return || i.return();
            } finally {
              if (r) throw o;
            }
          },
        };
      }
      function ut(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
        return s;
      }
      const pt = t =>
          'object' == typeof t &&
          null !== t &&
          t.constructor === Object &&
          '[object Object]' === Object.prototype.toString.call(t),
        mt = (...t) => {
          let e = !1;
          'boolean' == typeof t[0] && (e = t.shift());
          let i = t[0];
          if (!i || 'object' != typeof i)
            throw new Error('extendee must be an object');
          const s = t.slice(1),
            n = s.length;
          for (let t = 0; t < n; t++) {
            const n = s[t];
            for (let t in n)
              if (n.hasOwnProperty(t)) {
                const s = n[t];
                if (e && (Array.isArray(s) || pt(s))) {
                  const e = Array.isArray(s) ? [] : {};
                  i[t] = mt(!0, i.hasOwnProperty(t) ? i[t] : e, s);
                } else i[t] = s;
              }
          }
          return i;
        },
        ft = (t, e = 1e4) => (
          (t = parseFloat(t) || 0), Math.round((t + Number.EPSILON) * e) / e
        ),
        gt = function (t) {
          return (
            !!(
              t &&
              'object' == typeof t &&
              t instanceof Element &&
              t !== document.body
            ) &&
            !t.__Panzoom &&
            ((function (t) {
              const e = getComputedStyle(t)['overflow-y'],
                i = getComputedStyle(t)['overflow-x'],
                s =
                  ('scroll' === e || 'auto' === e) &&
                  Math.abs(t.scrollHeight - t.clientHeight) > 1,
                n =
                  ('scroll' === i || 'auto' === i) &&
                  Math.abs(t.scrollWidth - t.clientWidth) > 1;
              return s || n;
            })(t)
              ? t
              : gt(t.parentNode))
          );
        },
        wt =
          ('undefined' != typeof window && window.ResizeObserver) ||
          class {
            constructor(t) {
              (this.observables = []),
                (this.boundCheck = this.check.bind(this)),
                this.boundCheck(),
                (this.callback = t);
            }
            observe(t) {
              if (this.observables.some(e => e.el === t)) return;
              const e = {
                el: t,
                size: { height: t.clientHeight, width: t.clientWidth },
              };
              this.observables.push(e);
            }
            unobserve(t) {
              this.observables = this.observables.filter(e => e.el !== t);
            }
            disconnect() {
              this.observables = [];
            }
            check() {
              const t = this.observables
                .filter(t => {
                  const e = t.el.clientHeight,
                    i = t.el.clientWidth;
                  if (t.size.height !== e || t.size.width !== i)
                    return (t.size.height = e), (t.size.width = i), !0;
                })
                .map(t => t.el);
              t.length > 0 && this.callback(t),
                window.requestAnimationFrame(this.boundCheck);
            }
          };
      class vt {
        constructor(t) {
          (this.id = self.Touch && t instanceof Touch ? t.identifier : -1),
            (this.pageX = t.pageX),
            (this.pageY = t.pageY),
            (this.clientX = t.clientX),
            (this.clientY = t.clientY);
        }
      }
      const bt = (t, e) =>
          e
            ? Math.sqrt(
                (e.clientX - t.clientX) ** 2 + (e.clientY - t.clientY) ** 2,
              )
            : 0,
        yt = (t, e) =>
          e
            ? {
                clientX: (t.clientX + e.clientX) / 2,
                clientY: (t.clientY + e.clientY) / 2,
              }
            : t;
      class xt {
        constructor(
          t,
          { start: e = () => !0, move: i = () => {}, end: s = () => {} } = {},
        ) {
          (this._element = t),
            (this.startPointers = []),
            (this.currentPointers = []),
            (this._pointerStart = t => {
              if (t.buttons > 0 && 0 !== t.button) return;
              const e = new vt(t);
              this.currentPointers.some(t => t.id === e.id) ||
                (this._triggerPointerStart(e, t) &&
                  (window.addEventListener('mousemove', this._move),
                  window.addEventListener('mouseup', this._pointerEnd)));
            }),
            (this._touchStart = t => {
              for (const e of Array.from(t.changedTouches || []))
                this._triggerPointerStart(new vt(e), t);
            }),
            (this._move = t => {
              const e = this.currentPointers.slice(),
                i = (t => 'changedTouches' in t)(t)
                  ? Array.from(t.changedTouches).map(t => new vt(t))
                  : [new vt(t)];
              for (const t of i) {
                const e = this.currentPointers.findIndex(e => e.id === t.id);
                e < 0 || (this.currentPointers[e] = t);
              }
              this._moveCallback(e, this.currentPointers.slice(), t);
            }),
            (this._triggerPointerEnd = (t, e) => {
              const i = this.currentPointers.findIndex(e => e.id === t.id);
              return !(
                i < 0 ||
                (this.currentPointers.splice(i, 1),
                this.startPointers.splice(i, 1),
                this._endCallback(t, e),
                0)
              );
            }),
            (this._pointerEnd = t => {
              (t.buttons > 0 && 0 !== t.button) ||
                (this._triggerPointerEnd(new vt(t), t) &&
                  (window.removeEventListener('mousemove', this._move, {
                    passive: !1,
                  }),
                  window.removeEventListener('mouseup', this._pointerEnd, {
                    passive: !1,
                  })));
            }),
            (this._touchEnd = t => {
              for (const e of Array.from(t.changedTouches || []))
                this._triggerPointerEnd(new vt(e), t);
            }),
            (this._startCallback = e),
            (this._moveCallback = i),
            (this._endCallback = s),
            this._element.addEventListener('mousedown', this._pointerStart, {
              passive: !1,
            }),
            this._element.addEventListener('touchstart', this._touchStart, {
              passive: !1,
            }),
            this._element.addEventListener('touchmove', this._move, {
              passive: !1,
            }),
            this._element.addEventListener('touchend', this._touchEnd),
            this._element.addEventListener('touchcancel', this._touchEnd);
        }
        stop() {
          this._element.removeEventListener('mousedown', this._pointerStart, {
            passive: !1,
          }),
            this._element.removeEventListener('touchstart', this._touchStart, {
              passive: !1,
            }),
            this._element.removeEventListener('touchmove', this._move, {
              passive: !1,
            }),
            this._element.removeEventListener('touchend', this._touchEnd),
            this._element.removeEventListener('touchcancel', this._touchEnd),
            window.removeEventListener('mousemove', this._move),
            window.removeEventListener('mouseup', this._pointerEnd);
        }
        _triggerPointerStart(t, e) {
          return (
            !!this._startCallback(t, e) &&
            (this.currentPointers.push(t), this.startPointers.push(t), !0)
          );
        }
      }
      class Ct {
        constructor(t = {}) {
          (this.options = mt(!0, {}, t)),
            (this.plugins = []),
            (this.events = {});
          for (const t of ['on', 'once'])
            for (const e of Object.entries(this.options[t] || {}))
              this[t](...e);
        }
        option(t, e, ...i) {
          let s =
            ((n = t = String(t)),
            (o = this.options),
            n.split('.').reduce(function (t, e) {
              return t && t[e];
            }, o));
          var n, o;
          return (
            'function' == typeof s && (s = s.call(this, this, ...i)),
            void 0 === s ? e : s
          );
        }
        localize(t, e = []) {
          return (t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t, i, s) => {
            let n = '';
            s
              ? (n = this.option(
                  `${i[0] + i.toLowerCase().substring(1)}.l10n.${s}`,
                ))
              : i && (n = this.option(`l10n.${i}`)),
              n || (n = t);
            for (let t = 0; t < e.length; t++)
              n = n.split(e[t][0]).join(e[t][1]);
            return n;
          })).replace(/\{\{(.*)\}\}/, (t, e) => e);
        }
        on(t, e) {
          if (pt(t)) {
            for (const e of Object.entries(t)) this.on(...e);
            return this;
          }
          return (
            String(t)
              .split(' ')
              .forEach(t => {
                const i = (this.events[t] = this.events[t] || []);
                -1 == i.indexOf(e) && i.push(e);
              }),
            this
          );
        }
        once(t, e) {
          if (pt(t)) {
            for (const e of Object.entries(t)) this.once(...e);
            return this;
          }
          return (
            String(t)
              .split(' ')
              .forEach(t => {
                const i = (...s) => {
                  this.off(t, i), e.call(this, this, ...s);
                };
                (i._ = e), this.on(t, i);
              }),
            this
          );
        }
        off(t, e) {
          if (!pt(t))
            return (
              t.split(' ').forEach(t => {
                const i = this.events[t];
                if (!i || !i.length) return this;
                let s = -1;
                for (let t = 0, n = i.length; t < n; t++) {
                  const n = i[t];
                  if (n && (n === e || n._ === e)) {
                    s = t;
                    break;
                  }
                }
                -1 != s && i.splice(s, 1);
              }),
              this
            );
          for (const e of Object.entries(t)) this.off(...e);
        }
        trigger(t, ...e) {
          for (const i of [...(this.events[t] || [])].slice())
            if (i && !1 === i.call(this, this, ...e)) return !1;
          for (const i of [...(this.events['*'] || [])].slice())
            if (i && !1 === i.call(this, t, this, ...e)) return !1;
          return !0;
        }
        attachPlugins(t) {
          const e = {};
          for (const [i, s] of Object.entries(t || {}))
            !1 === this.options[i] ||
              this.plugins[i] ||
              ((this.options[i] = mt({}, s.defaults || {}, this.options[i])),
              (e[i] = new s(this)));
          for (const [t, i] of Object.entries(e)) i.attach(this);
          return (this.plugins = Object.assign({}, this.plugins, e)), this;
        }
        detachPlugins() {
          for (const t in this.plugins) {
            let e;
            (e = this.plugins[t]) &&
              'function' == typeof e.detach &&
              e.detach(this);
          }
          return (this.plugins = {}), this;
        }
      }
      const St = {
        touch: !0,
        zoom: !0,
        pinchToZoom: !0,
        panOnlyZoomed: !1,
        lockAxis: !1,
        friction: 0.64,
        decelFriction: 0.88,
        zoomFriction: 0.74,
        bounceForce: 0.2,
        baseScale: 1,
        minScale: 1,
        maxScale: 2,
        step: 0.5,
        textSelection: !1,
        click: 'toggleZoom',
        wheel: 'zoom',
        wheelFactor: 42,
        wheelLimit: 5,
        draggableClass: 'is-draggable',
        draggingClass: 'is-dragging',
        ratio: 1,
      };
      class Et extends Ct {
        constructor(t, e = {}) {
          super(mt(!0, {}, St, e)),
            (this.state = 'init'),
            (this.$container = t);
          for (const t of ['onLoad', 'onWheel', 'onClick'])
            this[t] = this[t].bind(this);
          this.initLayout(),
            this.resetValues(),
            this.attachPlugins(Et.Plugins),
            this.trigger('init'),
            this.updateMetrics(),
            this.attachEvents(),
            this.trigger('ready'),
            !1 === this.option('centerOnStart')
              ? (this.state = 'ready')
              : this.panTo({ friction: 0 }),
            (t.__Panzoom = this);
        }
        initLayout() {
          const t = this.$container;
          if (!(t instanceof HTMLElement))
            throw new Error('Panzoom: Container not found');
          const e =
            this.option('content') || t.querySelector('.panzoom__content');
          if (!e) throw new Error('Panzoom: Content not found');
          this.$content = e;
          let i =
            this.option('viewport') || t.querySelector('.panzoom__viewport');
          i ||
            !1 === this.option('wrapInner') ||
            ((i = document.createElement('div')),
            i.classList.add('panzoom__viewport'),
            i.append(...t.childNodes),
            t.appendChild(i)),
            (this.$viewport = i || e.parentNode);
        }
        resetValues() {
          (this.updateRate = this.option(
            'updateRate',
            /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24,
          )),
            (this.container = { width: 0, height: 0 }),
            (this.viewport = { width: 0, height: 0 }),
            (this.content = {
              origWidth: 0,
              origHeight: 0,
              width: 0,
              height: 0,
              x: this.option('x', 0),
              y: this.option('y', 0),
              scale: this.option('baseScale'),
            }),
            (this.transform = { x: 0, y: 0, scale: 1 }),
            this.resetDragPosition();
        }
        onLoad(t) {
          this.updateMetrics(),
            this.panTo({ scale: this.option('baseScale'), friction: 0 }),
            this.trigger('load', t);
        }
        onClick(t) {
          if (t.defaultPrevented) return;
          if (
            document.activeElement &&
            document.activeElement.closest('[contenteditable]')
          )
            return;
          if (
            this.option('textSelection') &&
            window.getSelection().toString().length &&
            (!t.target || !t.target.hasAttribute('data-fancybox-close'))
          )
            return void t.stopPropagation();
          const e = this.$content.getClientRects()[0];
          if (
            'ready' !== this.state &&
            (this.dragPosition.midPoint ||
              Math.abs(e.top - this.dragStart.rect.top) > 1 ||
              Math.abs(e.left - this.dragStart.rect.left) > 1)
          )
            return t.preventDefault(), void t.stopPropagation();
          !1 !== this.trigger('click', t) &&
            this.option('zoom') &&
            'toggleZoom' === this.option('click') &&
            (t.preventDefault(), t.stopPropagation(), this.zoomWithClick(t));
        }
        onWheel(t) {
          !1 !== this.trigger('wheel', t) &&
            this.option('zoom') &&
            this.option('wheel') &&
            this.zoomWithWheel(t);
        }
        zoomWithWheel(t) {
          void 0 === this.changedDelta && (this.changedDelta = 0);
          const e = Math.max(
              -1,
              Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail),
            ),
            i = this.content.scale;
          let s = (i * (100 + e * this.option('wheelFactor'))) / 100;
          if (
            ((e < 0 && Math.abs(i - this.option('minScale')) < 0.01) ||
            (e > 0 && Math.abs(i - this.option('maxScale')) < 0.01)
              ? ((this.changedDelta += Math.abs(e)), (s = i))
              : ((this.changedDelta = 0),
                (s = Math.max(
                  Math.min(s, this.option('maxScale')),
                  this.option('minScale'),
                ))),
            this.changedDelta > this.option('wheelLimit'))
          )
            return;
          if ((t.preventDefault(), s === i)) return;
          const n = this.$content.getBoundingClientRect(),
            o = t.clientX - n.left,
            a = t.clientY - n.top;
          this.zoomTo(s, { x: o, y: a });
        }
        zoomWithClick(t) {
          const e = this.$content.getClientRects()[0],
            i = t.clientX - e.left,
            s = t.clientY - e.top;
          this.toggleZoom({ x: i, y: s });
        }
        attachEvents() {
          this.$content.addEventListener('load', this.onLoad),
            this.$container.addEventListener('wheel', this.onWheel, {
              passive: !1,
            }),
            this.$container.addEventListener('click', this.onClick, {
              passive: !1,
            }),
            this.initObserver();
          const t = new xt(this.$container, {
            start: (e, i) => {
              if (!this.option('touch')) return !1;
              if (this.velocity.scale < 0) return !1;
              const s = i.composedPath()[0];
              if (!t.currentPointers.length) {
                if (
                  -1 !==
                  [
                    'BUTTON',
                    'TEXTAREA',
                    'OPTION',
                    'INPUT',
                    'SELECT',
                    'VIDEO',
                  ].indexOf(s.nodeName)
                )
                  return !1;
                if (
                  this.option('textSelection') &&
                  ((t, e, i) => {
                    const s = t.childNodes,
                      n = document.createRange();
                    for (let t = 0; t < s.length; t++) {
                      const o = s[t];
                      if (o.nodeType !== Node.TEXT_NODE) continue;
                      n.selectNodeContents(o);
                      const a = n.getBoundingClientRect();
                      if (
                        e >= a.left &&
                        i >= a.top &&
                        e <= a.right &&
                        i <= a.bottom
                      )
                        return o;
                    }
                    return !1;
                  })(s, e.clientX, e.clientY)
                )
                  return !1;
              }
              return (
                !gt(s) &&
                !1 !== this.trigger('touchStart', i) &&
                ('mousedown' === i.type && i.preventDefault(),
                (this.state = 'pointerdown'),
                this.resetDragPosition(),
                (this.dragPosition.midPoint = null),
                (this.dragPosition.time = Date.now()),
                !0)
              );
            },
            move: (e, i, s) => {
              if ('pointerdown' !== this.state) return;
              if (!1 === this.trigger('touchMove', s))
                return void s.preventDefault();
              if (
                i.length < 2 &&
                !0 === this.option('panOnlyZoomed') &&
                this.content.width <= this.viewport.width &&
                this.content.height <= this.viewport.height &&
                this.transform.scale <= this.option('baseScale')
              )
                return;
              if (
                i.length > 1 &&
                (!this.option('zoom') || !1 === this.option('pinchToZoom'))
              )
                return;
              const n = yt(e[0], e[1]),
                o = yt(i[0], i[1]),
                a = o.clientX - n.clientX,
                r = o.clientY - n.clientY,
                l = bt(e[0], e[1]),
                c = bt(i[0], i[1]),
                d = l && c ? c / l : 1;
              (this.dragOffset.x += a),
                (this.dragOffset.y += r),
                (this.dragOffset.scale *= d),
                (this.dragOffset.time = Date.now() - this.dragPosition.time);
              const h = 1 === this.dragStart.scale && this.option('lockAxis');
              if (h && !this.lockAxis) {
                if (
                  Math.abs(this.dragOffset.x) < 6 &&
                  Math.abs(this.dragOffset.y) < 6
                )
                  return void s.preventDefault();
                const t = Math.abs(
                  (180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) /
                    Math.PI,
                );
                this.lockAxis = t > 45 && t < 135 ? 'y' : 'x';
              }
              if ('xy' === h || 'y' !== this.lockAxis) {
                if (
                  (s.preventDefault(),
                  s.stopPropagation(),
                  s.stopImmediatePropagation(),
                  this.lockAxis &&
                    (this.dragOffset['x' === this.lockAxis ? 'y' : 'x'] = 0),
                  this.$container.classList.add(this.option('draggingClass')),
                  (this.transform.scale === this.option('baseScale') &&
                    'y' === this.lockAxis) ||
                    (this.dragPosition.x =
                      this.dragStart.x + this.dragOffset.x),
                  (this.transform.scale === this.option('baseScale') &&
                    'x' === this.lockAxis) ||
                    (this.dragPosition.y =
                      this.dragStart.y + this.dragOffset.y),
                  (this.dragPosition.scale =
                    this.dragStart.scale * this.dragOffset.scale),
                  i.length > 1)
                ) {
                  const e = yt(t.startPointers[0], t.startPointers[1]),
                    i = e.clientX - this.dragStart.rect.x,
                    s = e.clientY - this.dragStart.rect.y,
                    { deltaX: n, deltaY: a } = this.getZoomDelta(
                      this.content.scale * this.dragOffset.scale,
                      i,
                      s,
                    );
                  (this.dragPosition.x -= n),
                    (this.dragPosition.y -= a),
                    (this.dragPosition.midPoint = o);
                } else this.setDragResistance();
                (this.transform = {
                  x: this.dragPosition.x,
                  y: this.dragPosition.y,
                  scale: this.dragPosition.scale,
                }),
                  this.startAnimation();
              }
            },
            end: (e, i) => {
              if ('pointerdown' !== this.state) return;
              if (
                ((this._dragOffset = { ...this.dragOffset }),
                t.currentPointers.length)
              )
                return void this.resetDragPosition();
              if (
                ((this.state = 'decel'),
                (this.friction = this.option('decelFriction')),
                this.recalculateTransform(),
                this.$container.classList.remove(this.option('draggingClass')),
                !1 === this.trigger('touchEnd', i))
              )
                return;
              if ('decel' !== this.state) return;
              const s = this.option('minScale');
              if (this.transform.scale < s)
                return void this.zoomTo(s, { friction: 0.64 });
              const n = this.option('maxScale');
              if (this.transform.scale - n > 0.01) {
                const t = this.dragPosition.midPoint || e,
                  i = this.$content.getClientRects()[0];
                this.zoomTo(n, {
                  friction: 0.64,
                  x: t.clientX - i.left,
                  y: t.clientY - i.top,
                });
              }
            },
          });
          this.pointerTracker = t;
        }
        initObserver() {
          this.resizeObserver ||
            ((this.resizeObserver = new wt(() => {
              this.updateTimer ||
                (this.updateTimer = setTimeout(() => {
                  const t = this.$container.getBoundingClientRect();
                  t.width && t.height
                    ? ((Math.abs(t.width - this.container.width) > 1 ||
                        Math.abs(t.height - this.container.height) > 1) &&
                        (this.isAnimating() && this.endAnimation(!0),
                        this.updateMetrics(),
                        this.panTo({
                          x: this.content.x,
                          y: this.content.y,
                          scale: this.option('baseScale'),
                          friction: 0,
                        })),
                      (this.updateTimer = null))
                    : (this.updateTimer = null);
                }, this.updateRate));
            })),
            this.resizeObserver.observe(this.$container));
        }
        resetDragPosition() {
          (this.lockAxis = null),
            (this.friction = this.option('friction')),
            (this.velocity = { x: 0, y: 0, scale: 0 });
          const { x: t, y: e, scale: i } = this.content;
          (this.dragStart = {
            rect: this.$content.getBoundingClientRect(),
            x: t,
            y: e,
            scale: i,
          }),
            (this.dragPosition = {
              ...this.dragPosition,
              x: t,
              y: e,
              scale: i,
            }),
            (this.dragOffset = { x: 0, y: 0, scale: 1, time: 0 });
        }
        updateMetrics(t) {
          !0 !== t && this.trigger('beforeUpdate');
          const e = this.$container,
            i = this.$content,
            s = this.$viewport,
            n = i instanceof HTMLImageElement,
            o = this.option('zoom'),
            a = this.option('resizeParent', o);
          let r = this.option('width'),
            l = this.option('height'),
            c =
              r ||
              ((d = i),
              Math.max(
                parseFloat(d.naturalWidth || 0),
                parseFloat(
                  (d.width && d.width.baseVal && d.width.baseVal.value) || 0,
                ),
                parseFloat(d.offsetWidth || 0),
                parseFloat(d.scrollWidth || 0),
              ));
          var d;
          let h =
            l ||
            (t =>
              Math.max(
                parseFloat(t.naturalHeight || 0),
                parseFloat(
                  (t.height && t.height.baseVal && t.height.baseVal.value) || 0,
                ),
                parseFloat(t.offsetHeight || 0),
                parseFloat(t.scrollHeight || 0),
              ))(i);
          Object.assign(i.style, {
            width: r ? `${r}px` : '',
            height: l ? `${l}px` : '',
            maxWidth: '',
            maxHeight: '',
          }),
            a && Object.assign(s.style, { width: '', height: '' });
          const u = this.option('ratio');
          (c = ft(c * u)), (h = ft(h * u)), (r = c), (l = h);
          const p = i.getBoundingClientRect(),
            m = s.getBoundingClientRect(),
            f = s == e ? m : e.getBoundingClientRect();
          let g = Math.max(s.offsetWidth, ft(m.width)),
            w = Math.max(s.offsetHeight, ft(m.height)),
            v = window.getComputedStyle(s);
          if (
            ((g -= parseFloat(v.paddingLeft) + parseFloat(v.paddingRight)),
            (w -= parseFloat(v.paddingTop) + parseFloat(v.paddingBottom)),
            (this.viewport.width = g),
            (this.viewport.height = w),
            o)
          ) {
            if (Math.abs(c - p.width) > 0.1 || Math.abs(h - p.height) > 0.1) {
              const t = ((t, e, i, s) => {
                const n = Math.min(i / t || 0, s / e);
                return { width: t * n || 0, height: e * n || 0 };
              })(c, h, Math.min(c, p.width), Math.min(h, p.height));
              (r = ft(t.width)), (l = ft(t.height));
            }
            Object.assign(i.style, {
              width: `${r}px`,
              height: `${l}px`,
              transform: '',
            });
          }
          if (
            (a &&
              (Object.assign(s.style, { width: `${r}px`, height: `${l}px` }),
              (this.viewport = { ...this.viewport, width: r, height: l })),
            n && o && 'function' != typeof this.options.maxScale)
          ) {
            const t = this.option('maxScale');
            this.options.maxScale = function () {
              return this.content.origWidth > 0 && this.content.fitWidth > 0
                ? this.content.origWidth / this.content.fitWidth
                : t;
            };
          }
          (this.content = {
            ...this.content,
            origWidth: c,
            origHeight: h,
            fitWidth: r,
            fitHeight: l,
            width: r,
            height: l,
            scale: 1,
            isZoomable: o,
          }),
            (this.container = { width: f.width, height: f.height }),
            !0 !== t && this.trigger('afterUpdate');
        }
        zoomIn(t) {
          this.zoomTo(this.content.scale + (t || this.option('step')));
        }
        zoomOut(t) {
          this.zoomTo(this.content.scale - (t || this.option('step')));
        }
        toggleZoom(t = {}) {
          const e = this.option('maxScale'),
            i = this.option('baseScale'),
            s = this.content.scale > i + 0.5 * (e - i) ? i : e;
          this.zoomTo(s, t);
        }
        zoomTo(
          t = this.option('baseScale'),
          { x: e = null, y: i = null } = {},
        ) {
          t = Math.max(
            Math.min(t, this.option('maxScale')),
            this.option('minScale'),
          );
          const s = ft(
            this.content.scale / (this.content.width / this.content.fitWidth),
            1e7,
          );
          null === e && (e = this.content.width * s * 0.5),
            null === i && (i = this.content.height * s * 0.5);
          const { deltaX: n, deltaY: o } = this.getZoomDelta(t, e, i);
          (e = this.content.x - n),
            (i = this.content.y - o),
            this.panTo({
              x: e,
              y: i,
              scale: t,
              friction: this.option('zoomFriction'),
            });
        }
        getZoomDelta(t, e = 0, i = 0) {
          const s = this.content.fitWidth * this.content.scale,
            n = this.content.fitHeight * this.content.scale,
            o = e > 0 && s ? e / s : 0,
            a = i > 0 && n ? i / n : 0;
          return {
            deltaX: (this.content.fitWidth * t - s) * o,
            deltaY: (this.content.fitHeight * t - n) * a,
          };
        }
        panTo({
          x: t = this.content.x,
          y: e = this.content.y,
          scale: i,
          friction: s = this.option('friction'),
          ignoreBounds: n = !1,
        } = {}) {
          if (((i = i || this.content.scale || 1), !n)) {
            const { boundX: s, boundY: n } = this.getBounds(i);
            s && (t = Math.max(Math.min(t, s.to), s.from)),
              n && (e = Math.max(Math.min(e, n.to), n.from));
          }
          (this.friction = s),
            (this.transform = { ...this.transform, x: t, y: e, scale: i }),
            s
              ? ((this.state = 'panning'),
                (this.velocity = {
                  x: (1 / this.friction - 1) * (t - this.content.x),
                  y: (1 / this.friction - 1) * (e - this.content.y),
                  scale: (1 / this.friction - 1) * (i - this.content.scale),
                }),
                this.startAnimation())
              : this.endAnimation();
        }
        startAnimation() {
          this.rAF
            ? cancelAnimationFrame(this.rAF)
            : this.trigger('startAnimation'),
            (this.rAF = requestAnimationFrame(() => this.animate()));
        }
        animate() {
          if (
            (this.setEdgeForce(),
            this.setDragForce(),
            (this.velocity.x *= this.friction),
            (this.velocity.y *= this.friction),
            (this.velocity.scale *= this.friction),
            (this.content.x += this.velocity.x),
            (this.content.y += this.velocity.y),
            (this.content.scale += this.velocity.scale),
            this.isAnimating())
          )
            this.setTransform();
          else if ('pointerdown' !== this.state)
            return void this.endAnimation();
          this.rAF = requestAnimationFrame(() => this.animate());
        }
        getBounds(t) {
          let e = this.boundX,
            i = this.boundY;
          if (void 0 !== e && void 0 !== i) return { boundX: e, boundY: i };
          (e = { from: 0, to: 0 }),
            (i = { from: 0, to: 0 }),
            (t = t || this.transform.scale);
          const s = this.content.fitWidth * t,
            n = this.content.fitHeight * t,
            o = this.viewport.width,
            a = this.viewport.height;
          if (s < o) {
            const t = ft(0.5 * (o - s));
            (e.from = t), (e.to = t);
          } else e.from = ft(o - s);
          if (n < a) {
            const t = 0.5 * (a - n);
            (i.from = t), (i.to = t);
          } else i.from = ft(a - n);
          return { boundX: e, boundY: i };
        }
        setEdgeForce() {
          if ('decel' !== this.state) return;
          const t = this.option('bounceForce'),
            { boundX: e, boundY: i } = this.getBounds(
              Math.max(this.transform.scale, this.content.scale),
            );
          let s, n, o, a;
          if (
            (e && ((s = this.content.x < e.from), (n = this.content.x > e.to)),
            i && ((o = this.content.y < i.from), (a = this.content.y > i.to)),
            s || n)
          ) {
            let i = ((s ? e.from : e.to) - this.content.x) * t;
            const n = this.content.x + (this.velocity.x + i) / this.friction;
            n >= e.from && n <= e.to && (i += this.velocity.x),
              (this.velocity.x = i),
              this.recalculateTransform();
          }
          if (o || a) {
            let e = ((o ? i.from : i.to) - this.content.y) * t;
            const s = this.content.y + (e + this.velocity.y) / this.friction;
            s >= i.from && s <= i.to && (e += this.velocity.y),
              (this.velocity.y = e),
              this.recalculateTransform();
          }
        }
        setDragResistance() {
          if ('pointerdown' !== this.state) return;
          const { boundX: t, boundY: e } = this.getBounds(
            this.dragPosition.scale,
          );
          let i, s, n, o;
          if (
            (t &&
              ((i = this.dragPosition.x < t.from),
              (s = this.dragPosition.x > t.to)),
            e &&
              ((n = this.dragPosition.y < e.from),
              (o = this.dragPosition.y > e.to)),
            (i || s) && (!i || !s))
          ) {
            const e = i ? t.from : t.to,
              s = e - this.dragPosition.x;
            this.dragPosition.x = e - 0.3 * s;
          }
          if ((n || o) && (!n || !o)) {
            const t = n ? e.from : e.to,
              i = t - this.dragPosition.y;
            this.dragPosition.y = t - 0.3 * i;
          }
        }
        setDragForce() {
          'pointerdown' === this.state &&
            ((this.velocity.x = this.dragPosition.x - this.content.x),
            (this.velocity.y = this.dragPosition.y - this.content.y),
            (this.velocity.scale =
              this.dragPosition.scale - this.content.scale));
        }
        recalculateTransform() {
          (this.transform.x =
            this.content.x + this.velocity.x / (1 / this.friction - 1)),
            (this.transform.y =
              this.content.y + this.velocity.y / (1 / this.friction - 1)),
            (this.transform.scale =
              this.content.scale +
              this.velocity.scale / (1 / this.friction - 1));
        }
        isAnimating() {
          return !(
            !this.friction ||
            !(
              Math.abs(this.velocity.x) > 0.05 ||
              Math.abs(this.velocity.y) > 0.05 ||
              Math.abs(this.velocity.scale) > 0.05
            )
          );
        }
        setTransform(t) {
          let e, i, s;
          if (
            (t
              ? ((e = ft(this.transform.x)),
                (i = ft(this.transform.y)),
                (s = this.transform.scale),
                (this.content = { ...this.content, x: e, y: i, scale: s }))
              : ((e = ft(this.content.x)),
                (i = ft(this.content.y)),
                (s =
                  this.content.scale /
                  (this.content.width / this.content.fitWidth)),
                (this.content = { ...this.content, x: e, y: i })),
            this.trigger('beforeTransform'),
            (e = ft(this.content.x)),
            (i = ft(this.content.y)),
            t && this.option('zoom'))
          ) {
            let t, n;
            (t = ft(this.content.fitWidth * s)),
              (n = ft(this.content.fitHeight * s)),
              (this.content.width = t),
              (this.content.height = n),
              (this.transform = {
                ...this.transform,
                width: t,
                height: n,
                scale: s,
              }),
              Object.assign(this.$content.style, {
                width: `${t}px`,
                height: `${n}px`,
                maxWidth: 'none',
                maxHeight: 'none',
                transform: `translate3d(${e}px, ${i}px, 0) scale(1)`,
              });
          } else
            this.$content.style.transform = `translate3d(${e}px, ${i}px, 0) scale(${s})`;
          this.trigger('afterTransform');
        }
        endAnimation(t) {
          cancelAnimationFrame(this.rAF),
            (this.rAF = null),
            (this.velocity = { x: 0, y: 0, scale: 0 }),
            this.setTransform(!0),
            (this.state = 'ready'),
            this.handleCursor(),
            !0 !== t && this.trigger('endAnimation');
        }
        handleCursor() {
          const t = this.option('draggableClass');
          t &&
            this.option('touch') &&
            (1 == this.option('panOnlyZoomed') &&
            this.content.width <= this.viewport.width &&
            this.content.height <= this.viewport.height &&
            this.transform.scale <= this.option('baseScale')
              ? this.$container.classList.remove(t)
              : this.$container.classList.add(t));
        }
        detachEvents() {
          this.$content.removeEventListener('load', this.onLoad),
            this.$container.removeEventListener('wheel', this.onWheel, {
              passive: !1,
            }),
            this.$container.removeEventListener('click', this.onClick, {
              passive: !1,
            }),
            this.pointerTracker &&
              (this.pointerTracker.stop(), (this.pointerTracker = null)),
            this.resizeObserver &&
              (this.resizeObserver.disconnect(), (this.resizeObserver = null));
        }
        destroy() {
          'destroy' !== this.state &&
            ((this.state = 'destroy'),
            clearTimeout(this.updateTimer),
            (this.updateTimer = null),
            cancelAnimationFrame(this.rAF),
            (this.rAF = null),
            this.detachEvents(),
            this.detachPlugins(),
            this.resetDragPosition());
        }
      }
      (Et.version = '4.0.31'), (Et.Plugins = {});
      const Tt = (t, e) => {
        let i = 0;
        return function (...s) {
          const n = new Date().getTime();
          if (!(n - i < e)) return (i = n), t(...s);
        };
      };
      class kt {
        constructor(t) {
          (this.$container = null),
            (this.$prev = null),
            (this.$next = null),
            (this.carousel = t),
            (this.onRefresh = this.onRefresh.bind(this));
        }
        option(t) {
          return this.carousel.option(`Navigation.${t}`);
        }
        createButton(t) {
          const e = document.createElement('button');
          e.setAttribute(
            'title',
            this.carousel.localize(`{{${t.toUpperCase()}}}`),
          );
          const i =
            this.option('classNames.button') +
            ' ' +
            this.option(`classNames.${t}`);
          return (
            e.classList.add(...i.split(' ')),
            e.setAttribute('tabindex', '0'),
            (e.innerHTML = this.carousel.localize(this.option(`${t}Tpl`))),
            e.addEventListener('click', e => {
              e.preventDefault(),
                e.stopPropagation(),
                this.carousel['slide' + ('next' === t ? 'Next' : 'Prev')]();
            }),
            e
          );
        }
        build() {
          this.$container ||
            ((this.$container = document.createElement('div')),
            this.$container.classList.add(
              ...this.option('classNames.main').split(' '),
            ),
            this.carousel.$container.appendChild(this.$container)),
            this.$next ||
              ((this.$next = this.createButton('next')),
              this.$container.appendChild(this.$next)),
            this.$prev ||
              ((this.$prev = this.createButton('prev')),
              this.$container.appendChild(this.$prev));
        }
        onRefresh() {
          const t = this.carousel.pages.length;
          t <= 1 ||
          (t > 1 &&
            this.carousel.elemDimWidth < this.carousel.wrapDimWidth &&
            !Number.isInteger(this.carousel.option('slidesPerPage')))
            ? this.cleanup()
            : (this.build(),
              this.$prev.removeAttribute('disabled'),
              this.$next.removeAttribute('disabled'),
              this.carousel.option(
                'infiniteX',
                this.carousel.option('infinite'),
              ) ||
                (this.carousel.page <= 0 &&
                  this.$prev.setAttribute('disabled', ''),
                this.carousel.page >= t - 1 &&
                  this.$next.setAttribute('disabled', '')));
        }
        cleanup() {
          this.$prev && this.$prev.remove(),
            (this.$prev = null),
            this.$next && this.$next.remove(),
            (this.$next = null),
            this.$container && this.$container.remove(),
            (this.$container = null);
        }
        attach() {
          this.carousel.on('refresh change', this.onRefresh);
        }
        detach() {
          this.carousel.off('refresh change', this.onRefresh), this.cleanup();
        }
      }
      kt.defaults = {
        prevTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
        nextTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        classNames: {
          main: 'carousel__nav',
          button: 'carousel__button',
          next: 'is-next',
          prev: 'is-prev',
        },
      };
      class $t {
        constructor(t) {
          (this.carousel = t),
            (this.selectedIndex = null),
            (this.friction = 0),
            (this.onNavReady = this.onNavReady.bind(this)),
            (this.onNavClick = this.onNavClick.bind(this)),
            (this.onNavCreateSlide = this.onNavCreateSlide.bind(this)),
            (this.onTargetChange = this.onTargetChange.bind(this));
        }
        addAsTargetFor(t) {
          (this.target = this.carousel), (this.nav = t), this.attachEvents();
        }
        addAsNavFor(t) {
          (this.target = t), (this.nav = this.carousel), this.attachEvents();
        }
        attachEvents() {
          (this.nav.options.initialSlide = this.target.options.initialPage),
            this.nav.on('ready', this.onNavReady),
            this.nav.on('createSlide', this.onNavCreateSlide),
            this.nav.on('Panzoom.click', this.onNavClick),
            this.target.on('change', this.onTargetChange),
            this.target.on('Panzoom.afterUpdate', this.onTargetChange);
        }
        onNavReady() {
          this.onTargetChange(!0);
        }
        onNavClick(t, e, i) {
          const s = i.target.closest('.carousel__slide');
          if (!s) return;
          i.stopPropagation();
          const n = parseInt(s.dataset.index, 10),
            o = this.target.findPageForSlide(n);
          this.target.page !== o &&
            this.target.slideTo(o, { friction: this.friction }),
            this.markSelectedSlide(n);
        }
        onNavCreateSlide(t, e) {
          e.index === this.selectedIndex && this.markSelectedSlide(e.index);
        }
        onTargetChange() {
          const t = this.target.pages[this.target.page].indexes[0],
            e = this.nav.findPageForSlide(t);
          this.nav.slideTo(e), this.markSelectedSlide(t);
        }
        markSelectedSlide(t) {
          (this.selectedIndex = t),
            [...this.nav.slides].filter(
              t => t.$el && t.$el.classList.remove('is-nav-selected'),
            );
          const e = this.nav.slides[t];
          e && e.$el && e.$el.classList.add('is-nav-selected');
        }
        attach(t) {
          const e = t.options.Sync;
          (e.target || e.nav) &&
            (e.target
              ? this.addAsNavFor(e.target)
              : e.nav && this.addAsTargetFor(e.nav),
            (this.friction = e.friction));
        }
        detach() {
          this.nav &&
            (this.nav.off('ready', this.onNavReady),
            this.nav.off('Panzoom.click', this.onNavClick),
            this.nav.off('createSlide', this.onNavCreateSlide)),
            this.target &&
              (this.target.off('Panzoom.afterUpdate', this.onTargetChange),
              this.target.off('change', this.onTargetChange));
        }
      }
      $t.defaults = { friction: 0.92 };
      const Pt = {
          Navigation: kt,
          Dots: class {
            constructor(t) {
              (this.carousel = t),
                (this.$list = null),
                (this.events = {
                  change: this.onChange.bind(this),
                  refresh: this.onRefresh.bind(this),
                });
            }
            buildList() {
              if (
                this.carousel.pages.length <
                this.carousel.option('Dots.minSlideCount')
              )
                return;
              const t = document.createElement('ol');
              return (
                t.classList.add('carousel__dots'),
                t.addEventListener('click', t => {
                  if (!('page' in t.target.dataset)) return;
                  t.preventDefault(), t.stopPropagation();
                  const e = parseInt(t.target.dataset.page, 10),
                    i = this.carousel;
                  e !== i.page &&
                    (i.pages.length < 3 && i.option('infinite')
                      ? i[0 == e ? 'slidePrev' : 'slideNext']()
                      : i.slideTo(e));
                }),
                (this.$list = t),
                this.carousel.$container.appendChild(t),
                this.carousel.$container.classList.add('has-dots'),
                t
              );
            }
            removeList() {
              this.$list &&
                (this.$list.parentNode.removeChild(this.$list),
                (this.$list = null)),
                this.carousel.$container.classList.remove('has-dots');
            }
            rebuildDots() {
              let t = this.$list;
              const e = !!t,
                i = this.carousel.pages.length;
              if (i < 2) return void (e && this.removeList());
              e || (t = this.buildList());
              const s = this.$list.children.length;
              if (s > i)
                for (let t = i; t < s; t++)
                  this.$list.removeChild(this.$list.lastChild);
              else {
                for (let t = s; t < i; t++) {
                  const e = document.createElement('li');
                  e.classList.add('carousel__dot'),
                    (e.dataset.page = t),
                    e.setAttribute('role', 'button'),
                    e.setAttribute('tabindex', '0'),
                    e.setAttribute(
                      'title',
                      this.carousel.localize('{{GOTO}}', [['%d', t + 1]]),
                    ),
                    e.addEventListener('keydown', t => {
                      const i = t.code;
                      let s;
                      'Enter' === i || 'NumpadEnter' === i
                        ? (s = e)
                        : 'ArrowRight' === i
                        ? (s = e.nextSibling)
                        : 'ArrowLeft' === i && (s = e.previousSibling),
                        s && s.click();
                    }),
                    this.$list.appendChild(e);
                }
                this.setActiveDot();
              }
            }
            setActiveDot() {
              if (!this.$list) return;
              this.$list.childNodes.forEach(t => {
                t.classList.remove('is-selected');
              });
              const t = this.$list.childNodes[this.carousel.page];
              t && t.classList.add('is-selected');
            }
            onChange() {
              this.setActiveDot();
            }
            onRefresh() {
              this.rebuildDots();
            }
            attach() {
              this.carousel.on(this.events);
            }
            detach() {
              this.removeList(),
                this.carousel.off(this.events),
                (this.carousel = null);
            }
          },
          Sync: $t,
        },
        Lt = {
          slides: [],
          preload: 0,
          slidesPerPage: 'auto',
          initialPage: null,
          initialSlide: null,
          friction: 0.92,
          center: !0,
          infinite: !0,
          fill: !0,
          dragFree: !1,
          prefix: '',
          classNames: {
            viewport: 'carousel__viewport',
            track: 'carousel__track',
            slide: 'carousel__slide',
            slideSelected: 'is-selected',
          },
          l10n: {
            NEXT: 'Next slide',
            PREV: 'Previous slide',
            GOTO: 'Go to slide #%d',
          },
        };
      class At extends Ct {
        constructor(t, e = {}) {
          if (
            (super((e = mt(!0, {}, Lt, e))),
            (this.state = 'init'),
            (this.$container = t),
            !(this.$container instanceof HTMLElement))
          )
            throw new Error('No root element provided');
          (this.slideNext = Tt(this.slideNext.bind(this), 250)),
            (this.slidePrev = Tt(this.slidePrev.bind(this), 250)),
            this.init(),
            (t.__Carousel = this);
        }
        init() {
          (this.pages = []),
            (this.page = this.pageIndex = null),
            (this.prevPage = this.prevPageIndex = null),
            this.attachPlugins(At.Plugins),
            this.trigger('init'),
            this.initLayout(),
            this.initSlides(),
            this.updateMetrics(),
            this.$track &&
              this.pages.length &&
              (this.$track.style.transform = `translate3d(${
                -1 * this.pages[this.page].left
              }px, 0px, 0) scale(1)`),
            this.manageSlideVisiblity(),
            this.initPanzoom(),
            (this.state = 'ready'),
            this.trigger('ready');
        }
        initLayout() {
          const t = this.option('prefix'),
            e = this.option('classNames');
          (this.$viewport =
            this.option('viewport') ||
            this.$container.querySelector(`.${t}${e.viewport}`)),
            this.$viewport ||
              ((this.$viewport = document.createElement('div')),
              this.$viewport.classList.add(...(t + e.viewport).split(' ')),
              this.$viewport.append(...this.$container.childNodes),
              this.$container.appendChild(this.$viewport)),
            (this.$track =
              this.option('track') ||
              this.$container.querySelector(`.${t}${e.track}`)),
            this.$track ||
              ((this.$track = document.createElement('div')),
              this.$track.classList.add(...(t + e.track).split(' ')),
              this.$track.append(...this.$viewport.childNodes),
              this.$viewport.appendChild(this.$track));
        }
        initSlides() {
          (this.slides = []),
            this.$viewport
              .querySelectorAll(
                `.${this.option('prefix')}${this.option('classNames.slide')}`,
              )
              .forEach(t => {
                const e = { $el: t, isDom: !0 };
                this.slides.push(e),
                  this.trigger('createSlide', e, this.slides.length);
              }),
            Array.isArray(this.options.slides) &&
              (this.slides = mt(!0, [...this.slides], this.options.slides));
        }
        updateMetrics() {
          let t,
            e = 0,
            i = [];
          this.slides.forEach((s, n) => {
            const o = s.$el,
              a = s.isDom || !t ? this.getSlideMetrics(o) : t;
            (s.index = n),
              (s.width = a),
              (s.left = e),
              (t = a),
              (e += a),
              i.push(n);
          });
          let s = Math.max(
              this.$track.offsetWidth,
              ft(this.$track.getBoundingClientRect().width),
            ),
            n = getComputedStyle(this.$track);
          (s -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight)),
            (this.contentWidth = e),
            (this.viewportWidth = s);
          const o = [],
            a = this.option('slidesPerPage');
          if (Number.isInteger(a) && e > s)
            for (let t = 0; t < this.slides.length; t += a)
              o.push({
                indexes: i.slice(t, t + a),
                slides: this.slides.slice(t, t + a),
              });
          else {
            let t = 0,
              e = 0;
            for (let i = 0; i < this.slides.length; i += 1) {
              let n = this.slides[i];
              (!o.length || e + n.width > s) &&
                (o.push({ indexes: [], slides: [] }),
                (t = o.length - 1),
                (e = 0)),
                (e += n.width),
                o[t].indexes.push(i),
                o[t].slides.push(n);
            }
          }
          const r = this.option('center'),
            l = this.option('fill');
          o.forEach((t, i) => {
            (t.index = i),
              (t.width = t.slides.reduce((t, e) => t + e.width, 0)),
              (t.left = t.slides[0].left),
              r && (t.left += 0.5 * (s - t.width) * -1),
              l &&
                !this.option('infiniteX', this.option('infinite')) &&
                e > s &&
                ((t.left = Math.max(t.left, 0)),
                (t.left = Math.min(t.left, e - s)));
          });
          const c = [];
          let d;
          o.forEach(t => {
            const e = { ...t };
            d && e.left === d.left
              ? ((d.width += e.width),
                (d.slides = [...d.slides, ...e.slides]),
                (d.indexes = [...d.indexes, ...e.indexes]))
              : ((e.index = c.length), (d = e), c.push(e));
          }),
            (this.pages = c);
          let h = this.page;
          if (null === h) {
            const t = this.option('initialSlide');
            (h =
              null !== t
                ? this.findPageForSlide(t)
                : parseInt(this.option('initialPage', 0), 10) || 0),
              c[h] ||
                (h = c.length && h > c.length ? c[c.length - 1].index : 0),
              (this.page = h),
              (this.pageIndex = h);
          }
          this.updatePanzoom(), this.trigger('refresh');
        }
        getSlideMetrics(t) {
          if (!t) {
            const e = this.slides[0];
            ((t = document.createElement('div')).dataset.isTestEl = 1),
              (t.style.visibility = 'hidden'),
              t.classList.add(
                ...(
                  this.option('prefix') + this.option('classNames.slide')
                ).split(' '),
              ),
              e.customClass && t.classList.add(...e.customClass.split(' ')),
              this.$track.prepend(t);
          }
          let e = Math.max(t.offsetWidth, ft(t.getBoundingClientRect().width));
          const i = t.currentStyle || window.getComputedStyle(t);
          return (
            (e =
              e +
              (parseFloat(i.marginLeft) || 0) +
              (parseFloat(i.marginRight) || 0)),
            t.dataset.isTestEl && t.remove(),
            e
          );
        }
        findPageForSlide(t) {
          t = parseInt(t, 10) || 0;
          const e = this.pages.find(e => e.indexes.indexOf(t) > -1);
          return e ? e.index : null;
        }
        slideNext() {
          this.slideTo(this.pageIndex + 1);
        }
        slidePrev() {
          this.slideTo(this.pageIndex - 1);
        }
        slideTo(t, e = {}) {
          const {
            x: i = -1 * this.setPage(t, !0),
            y: s = 0,
            friction: n = this.option('friction'),
          } = e;
          (this.Panzoom.content.x === i && !this.Panzoom.velocity.x && n) ||
            (this.Panzoom.panTo({ x: i, y: s, friction: n, ignoreBounds: !0 }),
            'ready' === this.state &&
              'ready' === this.Panzoom.state &&
              this.trigger('settle'));
        }
        initPanzoom() {
          this.Panzoom && this.Panzoom.destroy();
          const t = mt(
            !0,
            {},
            {
              content: this.$track,
              wrapInner: !1,
              resizeParent: !1,
              zoom: !1,
              click: !1,
              lockAxis: 'x',
              x: this.pages.length ? -1 * this.pages[this.page].left : 0,
              centerOnStart: !1,
              textSelection: () => this.option('textSelection', !1),
              panOnlyZoomed: function () {
                return this.content.width <= this.viewport.width;
              },
            },
            this.option('Panzoom'),
          );
          (this.Panzoom = new Et(this.$container, t)),
            this.Panzoom.on({
              '*': (t, ...e) => this.trigger(`Panzoom.${t}`, ...e),
              afterUpdate: () => {
                this.updatePage();
              },
              beforeTransform: this.onBeforeTransform.bind(this),
              touchEnd: this.onTouchEnd.bind(this),
              endAnimation: () => {
                this.trigger('settle');
              },
            }),
            this.updateMetrics(),
            this.manageSlideVisiblity();
        }
        updatePanzoom() {
          this.Panzoom &&
            ((this.Panzoom.content = {
              ...this.Panzoom.content,
              fitWidth: this.contentWidth,
              origWidth: this.contentWidth,
              width: this.contentWidth,
            }),
            this.pages.length > 1 &&
            this.option('infiniteX', this.option('infinite'))
              ? (this.Panzoom.boundX = null)
              : this.pages.length &&
                (this.Panzoom.boundX = {
                  from: -1 * this.pages[this.pages.length - 1].left,
                  to: -1 * this.pages[0].left,
                }),
            this.option('infiniteY', this.option('infinite'))
              ? (this.Panzoom.boundY = null)
              : (this.Panzoom.boundY = { from: 0, to: 0 }),
            this.Panzoom.handleCursor());
        }
        manageSlideVisiblity() {
          const t = this.contentWidth,
            e = this.viewportWidth;
          let i = this.Panzoom
            ? -1 * this.Panzoom.content.x
            : this.pages.length
            ? this.pages[this.page].left
            : 0;
          const s = this.option('preload'),
            n = this.option('infiniteX', this.option('infinite')),
            o = parseFloat(
              getComputedStyle(this.$viewport, null).getPropertyValue(
                'padding-left',
              ),
            ),
            a = parseFloat(
              getComputedStyle(this.$viewport, null).getPropertyValue(
                'padding-right',
              ),
            );
          this.slides.forEach(r => {
            let l,
              c,
              d = 0;
            (l = i - o),
              (c = i + e + a),
              (l -= s * (e + o + a)),
              (c += s * (e + o + a));
            const h = r.left + r.width > l && r.left < c;
            (l = i + t - o), (c = i + t + e + a), (l -= s * (e + o + a));
            const u = n && r.left + r.width > l && r.left < c;
            (l = i - t - o), (c = i - t + e + a), (l -= s * (e + o + a));
            const p = n && r.left + r.width > l && r.left < c;
            u || h || p
              ? (this.createSlideEl(r),
                h && (d = 0),
                u && (d = -1),
                p && (d = 1),
                r.left + r.width > i && r.left <= i + e + a && (d = 0))
              : this.removeSlideEl(r),
              (r.hasDiff = d);
          });
          let r = 0,
            l = 0;
          this.slides.forEach((e, i) => {
            let s = 0;
            e.$el
              ? (i !== r || e.hasDiff ? (s = l + e.hasDiff * t) : (l = 0),
                (e.$el.style.left =
                  Math.abs(s) > 0.1 ? `${l + e.hasDiff * t}px` : ''),
                r++)
              : (l += e.width);
          }),
            this.markSelectedSlides();
        }
        createSlideEl(t) {
          if (!t) return;
          if (t.$el) {
            let e = t.$el.dataset.index;
            if (!e || parseInt(e, 10) !== t.index) {
              let e;
              (t.$el.dataset.index = t.index),
                t.$el.querySelectorAll('[data-lazy-srcset]').forEach(t => {
                  t.srcset = t.dataset.lazySrcset;
                }),
                t.$el.querySelectorAll('[data-lazy-src]').forEach(t => {
                  let e = t.dataset.lazySrc;
                  t instanceof HTMLImageElement
                    ? (t.src = e)
                    : (t.style.backgroundImage = `url('${e}')`);
                }),
                (e = t.$el.dataset.lazySrc) &&
                  (t.$el.style.backgroundImage = `url('${e}')`),
                (t.state = 'ready');
            }
            return;
          }
          const e = document.createElement('div');
          (e.dataset.index = t.index),
            e.classList.add(
              ...(
                this.option('prefix') + this.option('classNames.slide')
              ).split(' '),
            ),
            t.customClass && e.classList.add(...t.customClass.split(' ')),
            t.html && (e.innerHTML = t.html);
          const i = [];
          this.slides.forEach((t, e) => {
            t.$el && i.push(e);
          });
          const s = t.index;
          let n = null;
          if (i.length) {
            let t = i.reduce((t, e) =>
              Math.abs(e - s) < Math.abs(t - s) ? e : t,
            );
            n = this.slides[t];
          }
          return (
            this.$track.insertBefore(
              e,
              n && n.$el
                ? n.index < t.index
                  ? n.$el.nextSibling
                  : n.$el
                : null,
            ),
            (t.$el = e),
            this.trigger('createSlide', t, s),
            t
          );
        }
        removeSlideEl(t) {
          t.$el &&
            !t.isDom &&
            (this.trigger('removeSlide', t), t.$el.remove(), (t.$el = null));
        }
        markSelectedSlides() {
          const t = this.option('classNames.slideSelected'),
            e = 'aria-hidden';
          this.slides.forEach((i, s) => {
            const n = i.$el;
            if (!n) return;
            const o = this.pages[this.page];
            o && o.indexes && o.indexes.indexOf(s) > -1
              ? (t &&
                  !n.classList.contains(t) &&
                  (n.classList.add(t), this.trigger('selectSlide', i)),
                n.removeAttribute(e))
              : (t &&
                  n.classList.contains(t) &&
                  (n.classList.remove(t), this.trigger('unselectSlide', i)),
                n.setAttribute(e, !0));
          });
        }
        updatePage() {
          this.updateMetrics(), this.slideTo(this.page, { friction: 0 });
        }
        onBeforeTransform() {
          this.option('infiniteX', this.option('infinite')) &&
            this.manageInfiniteTrack(),
            this.manageSlideVisiblity();
        }
        manageInfiniteTrack() {
          const t = this.contentWidth,
            e = this.viewportWidth;
          if (
            !this.option('infiniteX', this.option('infinite')) ||
            this.pages.length < 2 ||
            t < e
          )
            return;
          const i = this.Panzoom;
          let s = !1;
          return (
            i.content.x < -1 * (t - e) &&
              ((i.content.x += t),
              (this.pageIndex = this.pageIndex - this.pages.length),
              (s = !0)),
            i.content.x > e &&
              ((i.content.x -= t),
              (this.pageIndex = this.pageIndex + this.pages.length),
              (s = !0)),
            s && 'pointerdown' === i.state && i.resetDragPosition(),
            s
          );
        }
        onTouchEnd(t, e) {
          const i = this.option('dragFree');
          if (
            !i &&
            this.pages.length > 1 &&
            t.dragOffset.time < 350 &&
            Math.abs(t.dragOffset.y) < 1 &&
            Math.abs(t.dragOffset.x) > 5
          )
            this[t.dragOffset.x < 0 ? 'slideNext' : 'slidePrev']();
          else if (i) {
            const [, e] = this.getPageFromPosition(-1 * t.transform.x);
            this.setPage(e);
          } else this.slideToClosest();
        }
        slideToClosest(t = {}) {
          let [, e] = this.getPageFromPosition(-1 * this.Panzoom.content.x);
          this.slideTo(e, t);
        }
        getPageFromPosition(t) {
          const e = this.pages.length;
          this.option('center') && (t += 0.5 * this.viewportWidth);
          const i = Math.floor(t / this.contentWidth);
          t -= i * this.contentWidth;
          let s = this.slides.find(e => e.left <= t && e.left + e.width > t);
          if (s) {
            let t = this.findPageForSlide(s.index);
            return [t, t + i * e];
          }
          return [0, 0];
        }
        setPage(t, e) {
          let i = 0,
            s = parseInt(t, 10) || 0;
          const n = this.page,
            o = this.pageIndex,
            a = this.pages.length,
            r = this.contentWidth,
            l = this.viewportWidth;
          if (
            ((t = ((s % a) + a) % a),
            this.option('infiniteX', this.option('infinite')) && r > l)
          ) {
            const n = Math.floor(s / a) || 0,
              o = r;
            if (((i = this.pages[t].left + n * o), !0 === e && a > 2)) {
              let t = -1 * this.Panzoom.content.x;
              const e = i - o,
                n = i + o,
                r = Math.abs(t - i),
                l = Math.abs(t - e),
                c = Math.abs(t - n);
              c < r && c <= l
                ? ((i = n), (s += a))
                : l < r && l < c && ((i = e), (s -= a));
            }
          } else
            (t = s = Math.max(0, Math.min(s, a - 1))),
              (i = this.pages.length ? this.pages[t].left : 0);
          return (
            (this.page = t),
            (this.pageIndex = s),
            null !== n &&
              t !== n &&
              ((this.prevPage = n),
              (this.prevPageIndex = o),
              this.trigger('change', t, n)),
            i
          );
        }
        destroy() {
          (this.state = 'destroy'),
            this.slides.forEach(t => {
              this.removeSlideEl(t);
            }),
            (this.slides = []),
            this.Panzoom.destroy(),
            this.detachPlugins();
        }
      }
      (At.version = '4.0.31'), (At.Plugins = Pt);
      const _t = !(
        'undefined' == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      let Mt = null;
      const Ot = [
          'a[href]',
          'area[href]',
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          'select:not([disabled]):not([aria-hidden])',
          'textarea:not([disabled]):not([aria-hidden])',
          'button:not([disabled]):not([aria-hidden])',
          'iframe',
          'object',
          'embed',
          'video',
          'audio',
          '[contenteditable]',
          '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
        ],
        zt = t => {
          if (t && _t) {
            null === Mt &&
              document.createElement('div').focus({
                get preventScroll() {
                  return (Mt = !0), !1;
                },
              });
            try {
              if (t.setActive) t.setActive();
              else if (Mt) t.focus({ preventScroll: !0 });
              else {
                const e = window.pageXOffset || document.body.scrollTop,
                  i = window.pageYOffset || document.body.scrollLeft;
                t.focus(),
                  document.body.scrollTo({ top: e, left: i, behavior: 'auto' });
              }
            } catch (t) {}
          }
        };
      class It {
        constructor(t) {
          (this.fancybox = t), (this.$container = null), (this.state = 'init');
          for (const t of ['onPrepare', 'onClosing', 'onKeydown'])
            this[t] = this[t].bind(this);
          this.events = {
            prepare: this.onPrepare,
            closing: this.onClosing,
            keydown: this.onKeydown,
          };
        }
        onPrepare() {
          this.getSlides().length < this.fancybox.option('Thumbs.minSlideCount')
            ? (this.state = 'disabled')
            : !0 === this.fancybox.option('Thumbs.autoStart') &&
              this.fancybox.Carousel.Panzoom.content.height >=
                this.fancybox.option('Thumbs.minScreenHeight') &&
              this.build();
        }
        onClosing() {
          this.Carousel && this.Carousel.Panzoom.detachEvents();
        }
        onKeydown(t, e) {
          e === t.option('Thumbs.key') && this.toggle();
        }
        build() {
          if (this.$container) return;
          const t = document.createElement('div');
          t.classList.add('fancybox__thumbs'),
            this.fancybox.$carousel.parentNode.insertBefore(
              t,
              this.fancybox.$carousel.nextSibling,
            ),
            (this.Carousel = new At(
              t,
              mt(
                !0,
                {
                  Dots: !1,
                  Navigation: !1,
                  Sync: { friction: 0 },
                  infinite: !1,
                  center: !0,
                  fill: !0,
                  dragFree: !0,
                  slidesPerPage: 1,
                  preload: 1,
                },
                this.fancybox.option('Thumbs.Carousel'),
                {
                  Sync: { target: this.fancybox.Carousel },
                  slides: this.getSlides(),
                },
              ),
            )),
            this.Carousel.Panzoom.on('wheel', (t, e) => {
              e.preventDefault(),
                this.fancybox[e.deltaY < 0 ? 'prev' : 'next']();
            }),
            (this.$container = t),
            (this.state = 'visible');
        }
        getSlides() {
          const t = [];
          for (const e of this.fancybox.items) {
            const i = e.thumb;
            i &&
              t.push({
                html: this.fancybox
                  .option('Thumbs.tpl')
                  .replace(/\{\{src\}\}/gi, i),
                customClass: `has-thumb has-${e.type || 'image'}`,
              });
          }
          return t;
        }
        toggle() {
          'visible' === this.state
            ? this.hide()
            : 'hidden' === this.state
            ? this.show()
            : this.build();
        }
        show() {
          'hidden' === this.state &&
            ((this.$container.style.display = ''),
            this.Carousel.Panzoom.attachEvents(),
            (this.state = 'visible'));
        }
        hide() {
          'visible' === this.state &&
            (this.Carousel.Panzoom.detachEvents(),
            (this.$container.style.display = 'none'),
            (this.state = 'hidden'));
        }
        cleanup() {
          this.Carousel && (this.Carousel.destroy(), (this.Carousel = null)),
            this.$container &&
              (this.$container.remove(), (this.$container = null)),
            (this.state = 'init');
        }
        attach() {
          this.fancybox.on(this.events);
        }
        detach() {
          this.fancybox.off(this.events), this.cleanup();
        }
      }
      It.defaults = {
        minSlideCount: 2,
        minScreenHeight: 500,
        autoStart: !0,
        key: 't',
        Carousel: {},
        tpl: '<div class="fancybox__thumb" style="background-image:url(\'{{src}}\')"></div>',
      };
      const Bt = (t, e) => {
          const i = new URL(t),
            s = new URLSearchParams(i.search);
          let n = new URLSearchParams();
          for (const [t, i] of [...s, ...Object.entries(e)])
            't' === t ? n.set('start', parseInt(i)) : n.set(t, i);
          n = n.toString();
          let o = t.match(/#t=((.*)?\d+s)/);
          return o && (n += `#t=${o[1]}`), n;
        },
        Dt = {
          video: { autoplay: !0, ratio: 16 / 9 },
          youtube: {
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: 'transparent',
            enablejsapi: 1,
            html5: 1,
          },
          vimeo: {
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          html5video: {
            tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
            format: '',
          },
        };
      class Nt {
        constructor(t) {
          this.fancybox = t;
          for (const t of [
            'onInit',
            'onReady',
            'onCreateSlide',
            'onRemoveSlide',
            'onSelectSlide',
            'onUnselectSlide',
            'onRefresh',
            'onMessage',
          ])
            this[t] = this[t].bind(this);
          this.events = {
            init: this.onInit,
            ready: this.onReady,
            'Carousel.createSlide': this.onCreateSlide,
            'Carousel.removeSlide': this.onRemoveSlide,
            'Carousel.selectSlide': this.onSelectSlide,
            'Carousel.unselectSlide': this.onUnselectSlide,
            'Carousel.refresh': this.onRefresh,
          };
        }
        onInit() {
          for (const t of this.fancybox.items) this.processType(t);
        }
        processType(t) {
          if (t.html)
            return (t.src = t.html), (t.type = 'html'), void delete t.html;
          const e = t.src || '';
          let i = t.type || this.fancybox.options.type,
            s = null;
          if (!e || 'string' == typeof e) {
            if (
              (s = e.match(
                /(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i,
              ))
            ) {
              const n = Bt(e, this.fancybox.option('Html.youtube')),
                o = encodeURIComponent(s[1]);
              (t.videoId = o),
                (t.src = `https://www.youtube-nocookie.com/embed/${o}?${n}`),
                (t.thumb =
                  t.thumb || `https://i.ytimg.com/vi/${o}/mqdefault.jpg`),
                (t.vendor = 'youtube'),
                (i = 'video');
            } else if ((s = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/))) {
              const n = Bt(e, this.fancybox.option('Html.vimeo')),
                o = encodeURIComponent(s[1]);
              (t.videoId = o),
                (t.src = `https://player.vimeo.com/video/${o}?${n}`),
                (t.vendor = 'vimeo'),
                (i = 'video');
            } else
              (s = e.match(
                /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i,
              ))
                ? ((t.src = `//maps.google.${s[1]}/?ll=${(s[2]
                    ? s[2] +
                      '&z=' +
                      Math.floor(s[3]) +
                      (s[4] ? s[4].replace(/^\//, '&') : '')
                    : s[4] + ''
                  ).replace(/\?/, '&')}&output=${
                    s[4] && s[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed'
                  }`),
                  (i = 'map'))
                : (s = e.match(
                    /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i,
                  )) &&
                  ((t.src = `//maps.google.${s[1]}/maps?q=${s[2]
                    .replace('query=', 'q=')
                    .replace('api=1', '')}&output=embed`),
                  (i = 'map'));
            i ||
              ('#' === e.charAt(0)
                ? (i = 'inline')
                : (s = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                ? ((i = 'html5video'),
                  (t.format =
                    t.format || 'video/' + ('ogv' === s[1] ? 'ogg' : s[1])))
                : e.match(
                    /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i,
                  )
                ? (i = 'image')
                : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = 'pdf')),
              (t.type = i || this.fancybox.option('defaultType', 'image')),
              ('html5video' !== i && 'video' !== i) ||
                ((t.video = mt(
                  {},
                  this.fancybox.option('Html.video'),
                  t.video,
                )),
                t._width && t._height
                  ? (t.ratio = parseFloat(t._width) / parseFloat(t._height))
                  : (t.ratio = t.ratio || t.video.ratio || Dt.video.ratio));
          }
        }
        onReady() {
          this.fancybox.Carousel.slides.forEach(t => {
            t.$el &&
              (this.setContent(t),
              t.index === this.fancybox.getSlide().index && this.playVideo(t));
          });
        }
        onCreateSlide(t, e, i) {
          'ready' === this.fancybox.state && this.setContent(i);
        }
        loadInlineContent(t) {
          let e;
          if (t.src instanceof HTMLElement) e = t.src;
          else if ('string' == typeof t.src) {
            const i = t.src.split('#', 2),
              s = 2 === i.length && '' === i[0] ? i[1] : i[0];
            e = document.getElementById(s);
          }
          if (e) {
            if ('clone' === t.type || e.$placeHolder) {
              e = e.cloneNode(!0);
              let i = e.getAttribute('id');
              (i = i ? `${i}--clone` : `clone-${this.fancybox.id}-${t.index}`),
                e.setAttribute('id', i);
            } else {
              const t = document.createElement('div');
              t.classList.add('fancybox-placeholder'),
                e.parentNode.insertBefore(t, e),
                (e.$placeHolder = t);
            }
            this.fancybox.setContent(t, e);
          } else this.fancybox.setError(t, '{{ELEMENT_NOT_FOUND}}');
        }
        loadAjaxContent(t) {
          const e = this.fancybox,
            i = new XMLHttpRequest();
          e.showLoading(t),
            (i.onreadystatechange = function () {
              i.readyState === XMLHttpRequest.DONE &&
                'ready' === e.state &&
                (e.hideLoading(t),
                200 === i.status
                  ? e.setContent(t, i.responseText)
                  : e.setError(
                      t,
                      404 === i.status
                        ? '{{AJAX_NOT_FOUND}}'
                        : '{{AJAX_FORBIDDEN}}',
                    ));
            });
          const s = t.ajax || null;
          i.open(s ? 'POST' : 'GET', t.src),
            i.setRequestHeader(
              'Content-Type',
              'application/x-www-form-urlencoded',
            ),
            i.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
            i.send(s),
            (t.xhr = i);
        }
        loadIframeContent(t) {
          const e = this.fancybox,
            i = document.createElement('iframe');
          if (
            ((i.className = 'fancybox__iframe'),
            i.setAttribute('id', `fancybox__iframe_${e.id}_${t.index}`),
            i.setAttribute('allow', 'autoplay; fullscreen'),
            i.setAttribute('scrolling', 'auto'),
            (t.$iframe = i),
            'iframe' !== t.type || !1 === t.preload)
          )
            return (
              i.setAttribute('src', t.src),
              this.fancybox.setContent(t, i),
              void this.resizeIframe(t)
            );
          e.showLoading(t);
          const s = document.createElement('div');
          (s.style.visibility = 'hidden'),
            this.fancybox.setContent(t, s),
            s.appendChild(i),
            (i.onerror = () => {
              e.setError(t, '{{IFRAME_ERROR}}');
            }),
            (i.onload = () => {
              e.hideLoading(t);
              let s = !1;
              i.isReady || ((i.isReady = !0), (s = !0)),
                i.src.length &&
                  ((i.parentNode.style.visibility = ''),
                  this.resizeIframe(t),
                  s && e.revealContent(t));
            }),
            i.setAttribute('src', t.src);
        }
        setAspectRatio(t) {
          const e = t.$content,
            i = t.ratio;
          if (!e) return;
          let s = t._width,
            n = t._height;
          if (i || (s && n)) {
            Object.assign(e.style, {
              width: s && n ? '100%' : '',
              height: s && n ? '100%' : '',
              maxWidth: '',
              maxHeight: '',
            });
            let t = e.offsetWidth,
              o = e.offsetHeight;
            if (((s = s || t), (n = n || o), s > t || n > o)) {
              let e = Math.min(t / s, o / n);
              (s *= e), (n *= e);
            }
            Math.abs(s / n - i) > 0.01 &&
              (i < s / n ? (s = n * i) : (n = s / i)),
              Object.assign(e.style, { width: `${s}px`, height: `${n}px` });
          }
        }
        resizeIframe(t) {
          const e = t.$iframe;
          if (!e) return;
          let i = t._width || 0,
            s = t._height || 0;
          i && s && (t.autoSize = !1);
          const n = e.parentNode,
            o = n && n.style;
          if (!1 !== t.preload && !1 !== t.autoSize && o)
            try {
              const t = window.getComputedStyle(n),
                a = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
                r = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom),
                l = e.contentWindow.document,
                c = l.getElementsByTagName('html')[0],
                d = l.body;
              (o.width = ''),
                (d.style.overflow = 'hidden'),
                (i = i || c.scrollWidth + a),
                (o.width = `${i}px`),
                (d.style.overflow = ''),
                (o.flex = '0 0 auto'),
                (o.height = `${d.scrollHeight}px`),
                (s = c.scrollHeight + r);
            } catch (t) {}
          if (i || s) {
            const t = { flex: '0 1 auto' };
            i && (t.width = `${i}px`),
              s && (t.height = `${s}px`),
              Object.assign(o, t);
          }
        }
        onRefresh(t, e) {
          e.slides.forEach(t => {
            t.$el &&
              (t.$iframe && this.resizeIframe(t),
              t.ratio && this.setAspectRatio(t));
          });
        }
        setContent(t) {
          if (t && !t.isDom) {
            switch (t.type) {
              case 'html':
                this.fancybox.setContent(t, t.src);
                break;
              case 'html5video':
                this.fancybox.setContent(
                  t,
                  this.fancybox
                    .option('Html.html5video.tpl')
                    .replace(/\{\{src\}\}/gi, t.src)
                    .replace(
                      '{{format}}',
                      t.format || (t.html5video && t.html5video.format) || '',
                    )
                    .replace('{{poster}}', t.poster || t.thumb || ''),
                );
                break;
              case 'inline':
              case 'clone':
                this.loadInlineContent(t);
                break;
              case 'ajax':
                this.loadAjaxContent(t);
                break;
              case 'pdf':
              case 'video':
              case 'map':
                t.preload = !1;
              case 'iframe':
                this.loadIframeContent(t);
            }
            t.ratio && this.setAspectRatio(t);
          }
        }
        onSelectSlide(t, e, i) {
          'ready' === t.state && this.playVideo(i);
        }
        playVideo(t) {
          if ('html5video' === t.type && t.video.autoplay)
            try {
              const e = t.$el.querySelector('video');
              if (e) {
                const t = e.play();
                void 0 !== t &&
                  t
                    .then(() => {})
                    .catch(t => {
                      (e.muted = !0), e.play();
                    });
              }
            } catch (t) {}
          if ('video' !== t.type || !t.$iframe || !t.$iframe.contentWindow)
            return;
          const e = () => {
            if ('done' === t.state && t.$iframe && t.$iframe.contentWindow) {
              let e;
              if (t.$iframe.isReady)
                return (
                  t.video &&
                    t.video.autoplay &&
                    (e =
                      'youtube' == t.vendor
                        ? { event: 'command', func: 'playVideo' }
                        : { method: 'play', value: 'true' }),
                  void (
                    e &&
                    t.$iframe.contentWindow.postMessage(JSON.stringify(e), '*')
                  )
                );
              'youtube' === t.vendor &&
                ((e = { event: 'listening', id: t.$iframe.getAttribute('id') }),
                t.$iframe.contentWindow.postMessage(JSON.stringify(e), '*'));
            }
            t.poller = setTimeout(e, 250);
          };
          e();
        }
        onUnselectSlide(t, e, i) {
          if ('html5video' === i.type) {
            try {
              i.$el.querySelector('video').pause();
            } catch (t) {}
            return;
          }
          let s = !1;
          'vimeo' == i.vendor
            ? (s = { method: 'pause', value: 'true' })
            : 'youtube' === i.vendor &&
              (s = { event: 'command', func: 'pauseVideo' }),
            s &&
              i.$iframe &&
              i.$iframe.contentWindow &&
              i.$iframe.contentWindow.postMessage(JSON.stringify(s), '*'),
            clearTimeout(i.poller);
        }
        onRemoveSlide(t, e, i) {
          i.xhr && (i.xhr.abort(), (i.xhr = null)),
            i.$iframe &&
              ((i.$iframe.onload = i.$iframe.onerror = null),
              (i.$iframe.src = '//about:blank'),
              (i.$iframe = null));
          const s = i.$content;
          'inline' === i.type &&
            s &&
            (s.classList.remove('fancybox__content'),
            'none' !== s.style.display && (s.style.display = 'none')),
            i.$closeButton &&
              (i.$closeButton.remove(), (i.$closeButton = null));
          const n = s && s.$placeHolder;
          n &&
            (n.parentNode.insertBefore(s, n),
            n.remove(),
            (s.$placeHolder = null));
        }
        onMessage(t) {
          try {
            let e = JSON.parse(t.data);
            if ('https://player.vimeo.com' === t.origin) {
              if ('ready' === e.event)
                for (let e of document.getElementsByClassName(
                  'fancybox__iframe',
                ))
                  e.contentWindow === t.source && (e.isReady = 1);
            } else
              'https://www.youtube-nocookie.com' === t.origin &&
                'onReady' === e.event &&
                (document.getElementById(e.id).isReady = 1);
          } catch (t) {}
        }
        attach() {
          this.fancybox.on(this.events),
            window.addEventListener('message', this.onMessage, !1);
        }
        detach() {
          this.fancybox.off(this.events),
            window.removeEventListener('message', this.onMessage, !1);
        }
      }
      Nt.defaults = Dt;
      class Ft {
        constructor(t) {
          this.fancybox = t;
          for (const t of [
            'onReady',
            'onClosing',
            'onDone',
            'onPageChange',
            'onCreateSlide',
            'onRemoveSlide',
            'onImageStatusChange',
          ])
            this[t] = this[t].bind(this);
          this.events = {
            ready: this.onReady,
            closing: this.onClosing,
            done: this.onDone,
            'Carousel.change': this.onPageChange,
            'Carousel.createSlide': this.onCreateSlide,
            'Carousel.removeSlide': this.onRemoveSlide,
          };
        }
        onReady() {
          this.fancybox.Carousel.slides.forEach(t => {
            t.$el && this.setContent(t);
          });
        }
        onDone(t, e) {
          this.handleCursor(e);
        }
        onClosing(t) {
          clearTimeout(this.clickTimer),
            (this.clickTimer = null),
            t.Carousel.slides.forEach(t => {
              t.$image && (t.state = 'destroy'),
                t.Panzoom && t.Panzoom.detachEvents();
            }),
            'closing' === this.fancybox.state &&
              this.canZoom(t.getSlide()) &&
              this.zoomOut();
        }
        onCreateSlide(t, e, i) {
          'ready' === this.fancybox.state && this.setContent(i);
        }
        onRemoveSlide(t, e, i) {
          i.$image &&
            (i.$el.classList.remove(t.option('Image.canZoomInClass')),
            i.$image.remove(),
            (i.$image = null)),
            i.Panzoom && (i.Panzoom.destroy(), (i.Panzoom = null)),
            i.$el && i.$el.dataset && delete i.$el.dataset.imageFit;
        }
        setContent(t) {
          if (t.isDom || t.html || (t.type && 'image' !== t.type)) return;
          if (t.$image) return;
          (t.type = 'image'), (t.state = 'loading');
          const e = document.createElement('div');
          e.style.visibility = 'hidden';
          const i = document.createElement('img');
          i.addEventListener('load', e => {
            e.stopImmediatePropagation(), this.onImageStatusChange(t);
          }),
            i.addEventListener('error', () => {
              this.onImageStatusChange(t);
            }),
            (i.src = t.src),
            (i.alt = ''),
            (i.draggable = !1),
            i.classList.add('fancybox__image'),
            t.srcset && i.setAttribute('srcset', t.srcset),
            t.sizes && i.setAttribute('sizes', t.sizes),
            (t.$image = i);
          const s = this.fancybox.option('Image.wrap');
          if (s) {
            const n = document.createElement('div');
            n.classList.add('string' == typeof s ? s : 'fancybox__image-wrap'),
              n.appendChild(i),
              e.appendChild(n),
              (t.$wrap = n);
          } else e.appendChild(i);
          (t.$el.dataset.imageFit = this.fancybox.option('Image.fit')),
            this.fancybox.setContent(t, e),
            i.complete || i.error
              ? this.onImageStatusChange(t)
              : this.fancybox.showLoading(t);
        }
        onImageStatusChange(t) {
          const e = t.$image;
          e &&
            'loading' === t.state &&
            (e.complete && e.naturalWidth && e.naturalHeight
              ? (this.fancybox.hideLoading(t),
                'contain' === this.fancybox.option('Image.fit') &&
                  this.initSlidePanzoom(t),
                t.$el.addEventListener('wheel', e => this.onWheel(t, e), {
                  passive: !1,
                }),
                t.$content.addEventListener('click', e => this.onClick(t, e), {
                  passive: !1,
                }),
                this.revealContent(t))
              : this.fancybox.setError(t, '{{IMAGE_ERROR}}'));
        }
        initSlidePanzoom(t) {
          t.Panzoom ||
            ((t.Panzoom = new Et(
              t.$el,
              mt(!0, this.fancybox.option('Image.Panzoom', {}), {
                viewport: t.$wrap,
                content: t.$image,
                width: t._width,
                height: t._height,
                wrapInner: !1,
                textSelection: !0,
                touch: this.fancybox.option('Image.touch'),
                panOnlyZoomed: !0,
                click: !1,
                wheel: !1,
              }),
            )),
            t.Panzoom.on('startAnimation', () => {
              this.fancybox.trigger('Image.startAnimation', t);
            }),
            t.Panzoom.on('endAnimation', () => {
              'zoomIn' === t.state && this.fancybox.done(t),
                this.handleCursor(t),
                this.fancybox.trigger('Image.endAnimation', t);
            }),
            t.Panzoom.on('afterUpdate', () => {
              this.handleCursor(t),
                this.fancybox.trigger('Image.afterUpdate', t);
            }));
        }
        revealContent(t) {
          null === this.fancybox.Carousel.prevPage &&
          t.index === this.fancybox.options.startIndex &&
          this.canZoom(t)
            ? this.zoomIn()
            : this.fancybox.revealContent(t);
        }
        getZoomInfo(t) {
          const e = t.$thumb.getBoundingClientRect(),
            i = e.width,
            s = e.height,
            n = t.$content.getBoundingClientRect(),
            o = n.width,
            a = n.height,
            r = n.top - e.top,
            l = n.left - e.left;
          let c = this.fancybox.option('Image.zoomOpacity');
          return (
            'auto' === c && (c = Math.abs(i / s - o / a) > 0.1),
            { top: r, left: l, scale: o && i ? i / o : 1, opacity: c }
          );
        }
        canZoom(t) {
          const e = this.fancybox,
            i = e.$container;
          if (window.visualViewport && 1 !== window.visualViewport.scale)
            return !1;
          if (t.Panzoom && !t.Panzoom.content.width) return !1;
          if (!e.option('Image.zoom') || 'contain' !== e.option('Image.fit'))
            return !1;
          const s = t.$thumb;
          if (!s || 'loading' === t.state) return !1;
          i.classList.add('fancybox__no-click');
          const n = s.getBoundingClientRect();
          let o;
          if (this.fancybox.option('Image.ignoreCoveredThumbnail')) {
            const t = document.elementFromPoint(n.left + 1, n.top + 1) === s,
              e = document.elementFromPoint(n.right - 1, n.bottom - 1) === s;
            o = t && e;
          } else
            o =
              document.elementFromPoint(
                n.left + 0.5 * n.width,
                n.top + 0.5 * n.height,
              ) === s;
          return i.classList.remove('fancybox__no-click'), o;
        }
        zoomIn() {
          const t = this.fancybox,
            e = t.getSlide(),
            i = e.Panzoom,
            { top: s, left: n, scale: o, opacity: a } = this.getZoomInfo(e);
          t.trigger('reveal', e),
            i.panTo({
              x: -1 * n,
              y: -1 * s,
              scale: o,
              friction: 0,
              ignoreBounds: !0,
            }),
            (e.$content.style.visibility = ''),
            (e.state = 'zoomIn'),
            !0 === a &&
              i.on('afterTransform', t => {
                ('zoomIn' !== e.state && 'zoomOut' !== e.state) ||
                  (t.$content.style.opacity = Math.min(
                    1,
                    1 - (1 - t.content.scale) / (1 - o),
                  ));
              }),
            i.panTo({
              x: 0,
              y: 0,
              scale: 1,
              friction: this.fancybox.option('Image.zoomFriction'),
            });
        }
        zoomOut() {
          const t = this.fancybox,
            e = t.getSlide(),
            i = e.Panzoom;
          if (!i) return;
          (e.state = 'zoomOut'),
            (t.state = 'customClosing'),
            e.$caption && (e.$caption.style.visibility = 'hidden');
          let s = this.fancybox.option('Image.zoomFriction');
          const n = t => {
            const {
              top: n,
              left: o,
              scale: a,
              opacity: r,
            } = this.getZoomInfo(e);
            t || r || (s *= 0.82),
              i.panTo({
                x: -1 * o,
                y: -1 * n,
                scale: a,
                friction: s,
                ignoreBounds: !0,
              }),
              (s *= 0.98);
          };
          window.addEventListener('scroll', n),
            i.once('endAnimation', () => {
              window.removeEventListener('scroll', n), t.destroy();
            }),
            n();
        }
        handleCursor(t) {
          if ('image' !== t.type || !t.$el) return;
          const e = t.Panzoom,
            i = this.fancybox.option('Image.click', !1, t),
            s = this.fancybox.option('Image.touch'),
            n = t.$el.classList,
            o = this.fancybox.option('Image.canZoomInClass'),
            a = this.fancybox.option('Image.canZoomOutClass');
          n.remove(a),
            n.remove(o),
            e && 'toggleZoom' === i
              ? e &&
                1 === e.content.scale &&
                e.option('maxScale') - e.content.scale > 0.01
                ? n.add(o)
                : e.content.scale > 1 && !s && n.add(a)
              : 'close' === i && n.add(a);
        }
        onWheel(t, e) {
          if (
            'ready' === this.fancybox.state &&
            !1 !== this.fancybox.trigger('Image.wheel', e)
          )
            switch (this.fancybox.option('Image.wheel')) {
              case 'zoom':
                'done' === t.state && t.Panzoom && t.Panzoom.zoomWithWheel(e);
                break;
              case 'close':
                this.fancybox.close();
                break;
              case 'slide':
                this.fancybox[e.deltaY < 0 ? 'prev' : 'next']();
            }
        }
        onClick(t, e) {
          if ('ready' !== this.fancybox.state) return;
          const i = t.Panzoom;
          if (
            i &&
            (i.dragPosition.midPoint ||
              0 !== i.dragOffset.x ||
              0 !== i.dragOffset.y ||
              1 !== i.dragOffset.scale)
          )
            return;
          if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;
          const s = i => {
              switch (i) {
                case 'toggleZoom':
                  e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e);
                  break;
                case 'close':
                  this.fancybox.close();
                  break;
                case 'next':
                  e.stopPropagation(), this.fancybox.next();
              }
            },
            n = this.fancybox.option('Image.click'),
            o = this.fancybox.option('Image.doubleClick');
          o
            ? this.clickTimer
              ? (clearTimeout(this.clickTimer), (this.clickTimer = null), s(o))
              : (this.clickTimer = setTimeout(() => {
                  (this.clickTimer = null), s(n);
                }, 300))
            : s(n);
        }
        onPageChange(t, e) {
          const i = t.getSlide();
          e.slides.forEach(t => {
            t.Panzoom &&
              'done' === t.state &&
              t.index !== i.index &&
              t.Panzoom.panTo({ x: 0, y: 0, scale: 1, friction: 0.8 });
          });
        }
        attach() {
          this.fancybox.on(this.events);
        }
        detach() {
          this.fancybox.off(this.events);
        }
      }
      Ft.defaults = {
        canZoomInClass: 'can-zoom_in',
        canZoomOutClass: 'can-zoom_out',
        zoom: !0,
        zoomOpacity: 'auto',
        zoomFriction: 0.82,
        ignoreCoveredThumbnail: !1,
        touch: !0,
        click: 'toggleZoom',
        doubleClick: null,
        wheel: 'zoom',
        fit: 'contain',
        wrap: !1,
        Panzoom: { ratio: 1 },
      };
      class jt {
        constructor(t) {
          this.fancybox = t;
          for (const t of ['onChange', 'onClosing'])
            this[t] = this[t].bind(this);
          (this.events = {
            initCarousel: this.onChange,
            'Carousel.change': this.onChange,
            closing: this.onClosing,
          }),
            (this.hasCreatedHistory = !1),
            (this.origHash = ''),
            (this.timer = null);
        }
        onChange(t) {
          const e = t.Carousel;
          this.timer && clearTimeout(this.timer);
          const i = null === e.prevPage,
            s = t.getSlide(),
            n = new URL(document.URL).hash;
          let o = !1;
          if (s.slug) o = '#' + s.slug;
          else {
            const i = s.$trigger && s.$trigger.dataset,
              n = t.option('slug') || (i && i.fancybox);
            n &&
              n.length &&
              'true' !== n &&
              (o = '#' + n + (e.slides.length > 1 ? '-' + (s.index + 1) : ''));
          }
          i && (this.origHash = n !== o ? n : ''),
            o &&
              n !== o &&
              (this.timer = setTimeout(() => {
                try {
                  window.history[i ? 'pushState' : 'replaceState'](
                    {},
                    document.title,
                    window.location.pathname + window.location.search + o,
                  ),
                    i && (this.hasCreatedHistory = !0);
                } catch (t) {}
              }, 300));
        }
        onClosing() {
          if (
            (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose)
          )
            try {
              return void window.history.replaceState(
                {},
                document.title,
                window.location.pathname +
                  window.location.search +
                  (this.origHash || ''),
              );
            } catch (t) {}
        }
        attach(t) {
          t.on(this.events);
        }
        detach(t) {
          t.off(this.events);
        }
        static startFromUrl() {
          const t = jt.Fancybox;
          if (!t || t.getInstance() || !1 === t.defaults.Hash) return;
          const { hash: e, slug: i, index: s } = jt.getParsedURL();
          if (!i) return;
          let n = document.querySelector(`[data-slug="${e}"]`);
          if (
            (n &&
              n.dispatchEvent(
                new CustomEvent('click', { bubbles: !0, cancelable: !0 }),
              ),
            t.getInstance())
          )
            return;
          const o = document.querySelectorAll(`[data-fancybox="${i}"]`);
          o.length &&
            (null === s && 1 === o.length ? (n = o[0]) : s && (n = o[s - 1]),
            n &&
              n.dispatchEvent(
                new CustomEvent('click', { bubbles: !0, cancelable: !0 }),
              ));
        }
        static onHashChange() {
          const { slug: t, index: e } = jt.getParsedURL(),
            i = jt.Fancybox,
            s = i && i.getInstance();
          if (s && s.plugins.Hash) {
            if (t) {
              const i = s.Carousel;
              if (t === s.option('slug')) return i.slideTo(e - 1);
              for (let e of i.slides)
                if (e.slug && e.slug === t) return i.slideTo(e.index);
              const n = s.getSlide(),
                o = n.$trigger && n.$trigger.dataset;
              if (o && o.fancybox === t) return i.slideTo(e - 1);
            }
            (s.plugins.Hash.hasSilentClose = !0), s.close();
          }
          jt.startFromUrl();
        }
        static create(t) {
          function e() {
            window.addEventListener('hashchange', jt.onHashChange, !1),
              jt.startFromUrl();
          }
          (jt.Fancybox = t),
            _t &&
              window.requestAnimationFrame(() => {
                /complete|interactive|loaded/.test(document.readyState)
                  ? e()
                  : document.addEventListener('DOMContentLoaded', e);
              });
        }
        static destroy() {
          window.removeEventListener('hashchange', jt.onHashChange, !1);
        }
        static getParsedURL() {
          const t = window.location.hash.substr(1),
            e = t.split('-'),
            i =
              (e.length > 1 &&
                /^\+?\d+$/.test(e[e.length - 1]) &&
                parseInt(e.pop(-1), 10)) ||
              null;
          return { hash: t, slug: e.join('-'), index: i };
        }
      }
      const Ht = {
        pageXOffset: 0,
        pageYOffset: 0,
        element: () =>
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement,
        activate(t) {
          (Ht.pageXOffset = window.pageXOffset),
            (Ht.pageYOffset = window.pageYOffset),
            t.requestFullscreen
              ? t.requestFullscreen()
              : t.mozRequestFullScreen
              ? t.mozRequestFullScreen()
              : t.webkitRequestFullscreen
              ? t.webkitRequestFullscreen()
              : t.msRequestFullscreen && t.msRequestFullscreen();
        },
        deactivate() {
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitExitFullscreen && document.webkitExitFullscreen();
        },
      };
      class Rt {
        constructor(t) {
          (this.fancybox = t),
            (this.active = !1),
            (this.handleVisibilityChange =
              this.handleVisibilityChange.bind(this));
        }
        isActive() {
          return this.active;
        }
        setTimer() {
          if (!this.active || this.timer) return;
          const t = this.fancybox.option('slideshow.delay', 3e3);
          this.timer = setTimeout(() => {
            (this.timer = null),
              this.fancybox.option('infinite') ||
              this.fancybox.getSlide().index !==
                this.fancybox.Carousel.slides.length - 1
                ? this.fancybox.next()
                : this.fancybox.jumpTo(0, { friction: 0 });
          }, t);
          let e = this.$progress;
          e ||
            ((e = document.createElement('div')),
            e.classList.add('fancybox__progress'),
            this.fancybox.$carousel.parentNode.insertBefore(
              e,
              this.fancybox.$carousel,
            ),
            (this.$progress = e),
            e.offsetHeight),
            (e.style.transitionDuration = `${t}ms`),
            (e.style.transform = 'scaleX(1)');
        }
        clearTimer() {
          clearTimeout(this.timer),
            (this.timer = null),
            this.$progress &&
              ((this.$progress.style.transitionDuration = ''),
              (this.$progress.style.transform = ''),
              this.$progress.offsetHeight);
        }
        activate() {
          this.active ||
            ((this.active = !0),
            this.fancybox.$container.classList.add('has-slideshow'),
            'done' === this.fancybox.getSlide().state && this.setTimer(),
            document.addEventListener(
              'visibilitychange',
              this.handleVisibilityChange,
              !1,
            ));
        }
        handleVisibilityChange() {
          this.deactivate();
        }
        deactivate() {
          (this.active = !1),
            this.clearTimer(),
            this.fancybox.$container.classList.remove('has-slideshow'),
            document.removeEventListener(
              'visibilitychange',
              this.handleVisibilityChange,
              !1,
            );
        }
        toggle() {
          this.active
            ? this.deactivate()
            : this.fancybox.Carousel.slides.length > 1 && this.activate();
        }
      }
      const qt = {
        display: [
          'counter',
          'zoom',
          'slideshow',
          'fullscreen',
          'thumbs',
          'close',
        ],
        autoEnable: !0,
        items: {
          counter: {
            position: 'left',
            type: 'div',
            class: 'fancybox__counter',
            html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
            attr: { tabindex: -1 },
          },
          prev: {
            type: 'button',
            class: 'fancybox__button--prev',
            label: 'PREV',
            html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
            attr: { 'data-fancybox-prev': '' },
          },
          next: {
            type: 'button',
            class: 'fancybox__button--next',
            label: 'NEXT',
            html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
            attr: { 'data-fancybox-next': '' },
          },
          fullscreen: {
            type: 'button',
            class: 'fancybox__button--fullscreen',
            label: 'TOGGLE_FULLSCREEN',
            html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
            click: function (t) {
              t.preventDefault(),
                Ht.element()
                  ? Ht.deactivate()
                  : Ht.activate(this.fancybox.$container);
            },
          },
          slideshow: {
            type: 'button',
            class: 'fancybox__button--slideshow',
            label: 'TOGGLE_SLIDESHOW',
            html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
            click: function (t) {
              t.preventDefault(), this.Slideshow.toggle();
            },
          },
          zoom: {
            type: 'button',
            class: 'fancybox__button--zoom',
            label: 'TOGGLE_ZOOM',
            html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
            click: function (t) {
              t.preventDefault();
              const e = this.fancybox.getSlide().Panzoom;
              e && e.toggleZoom();
            },
          },
          download: {
            type: 'link',
            label: 'DOWNLOAD',
            class: 'fancybox__button--download',
            html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
            click: function (t) {
              t.stopPropagation();
            },
          },
          thumbs: {
            type: 'button',
            label: 'TOGGLE_THUMBS',
            class: 'fancybox__button--thumbs',
            html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
            click: function (t) {
              t.stopPropagation();
              const e = this.fancybox.plugins.Thumbs;
              e && e.toggle();
            },
          },
          close: {
            type: 'button',
            label: 'CLOSE',
            class: 'fancybox__button--close',
            html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
            attr: { 'data-fancybox-close': '', tabindex: 0 },
          },
        },
      };
      class Wt {
        constructor(t) {
          (this.fancybox = t), (this.$container = null), (this.state = 'init');
          for (const t of [
            'onInit',
            'onPrepare',
            'onDone',
            'onKeydown',
            'onClosing',
            'onChange',
            'onSettle',
            'onRefresh',
          ])
            this[t] = this[t].bind(this);
          this.events = {
            init: this.onInit,
            prepare: this.onPrepare,
            done: this.onDone,
            keydown: this.onKeydown,
            closing: this.onClosing,
            'Carousel.change': this.onChange,
            'Carousel.settle': this.onSettle,
            'Carousel.Panzoom.touchStart': () => this.onRefresh(),
            'Image.startAnimation': (t, e) => this.onRefresh(e),
            'Image.afterUpdate': (t, e) => this.onRefresh(e),
          };
        }
        onInit() {
          if (this.fancybox.option('Toolbar.autoEnable')) {
            let t = !1;
            for (const e of this.fancybox.items)
              if ('image' === e.type) {
                t = !0;
                break;
              }
            if (!t) return void (this.state = 'disabled');
          }
          for (const t of this.fancybox.option('Toolbar.display'))
            if ('close' === (pt(t) ? t.id : t)) {
              this.fancybox.options.closeButton = !1;
              break;
            }
        }
        onPrepare() {
          const t = this.fancybox;
          if (
            'init' === this.state &&
            (this.build(),
            this.update(),
            (this.Slideshow = new Rt(t)),
            !t.Carousel.prevPage &&
              (t.option('slideshow.autoStart') && this.Slideshow.activate(),
              t.option('fullscreen.autoStart') && !Ht.element()))
          )
            try {
              Ht.activate(t.$container);
            } catch (t) {}
        }
        onFsChange() {
          window.scrollTo(Ht.pageXOffset, Ht.pageYOffset);
        }
        onSettle() {
          const t = this.fancybox,
            e = this.Slideshow;
          e &&
            e.isActive() &&
            (t.getSlide().index !== t.Carousel.slides.length - 1 ||
            t.option('infinite')
              ? 'done' === t.getSlide().state && e.setTimer()
              : e.deactivate());
        }
        onChange() {
          this.update(),
            this.Slideshow &&
              this.Slideshow.isActive() &&
              this.Slideshow.clearTimer();
        }
        onDone(t, e) {
          const i = this.Slideshow;
          e.index === t.getSlide().index &&
            (this.update(),
            i &&
              i.isActive() &&
              (t.option('infinite') || e.index !== t.Carousel.slides.length - 1
                ? i.setTimer()
                : i.deactivate()));
        }
        onRefresh(t) {
          (t && t.index !== this.fancybox.getSlide().index) ||
            (this.update(),
            !this.Slideshow ||
              !this.Slideshow.isActive() ||
              (t && 'done' !== t.state) ||
              this.Slideshow.deactivate());
        }
        onKeydown(t, e, i) {
          ' ' === e &&
            this.Slideshow &&
            (this.Slideshow.toggle(), i.preventDefault());
        }
        onClosing() {
          this.Slideshow && this.Slideshow.deactivate(),
            document.removeEventListener('fullscreenchange', this.onFsChange);
        }
        createElement(t) {
          let e;
          'div' === t.type
            ? (e = document.createElement('div'))
            : ((e = document.createElement('link' === t.type ? 'a' : 'button')),
              e.classList.add('carousel__button')),
            (e.innerHTML = t.html),
            e.setAttribute('tabindex', t.tabindex || 0),
            t.class && e.classList.add(...t.class.split(' '));
          for (const i in t.attr) e.setAttribute(i, t.attr[i]);
          t.label &&
            e.setAttribute('title', this.fancybox.localize(`{{${t.label}}}`)),
            t.click && e.addEventListener('click', t.click.bind(this)),
            'prev' === t.id && e.setAttribute('data-fancybox-prev', ''),
            'next' === t.id && e.setAttribute('data-fancybox-next', '');
          const i = e.querySelector('svg');
          return (
            i &&
              (i.setAttribute('role', 'img'),
              i.setAttribute('tabindex', '-1'),
              i.setAttribute('xmlns', 'http://www.w3.org/2000/svg')),
            e
          );
        }
        build() {
          this.cleanup();
          const t = this.fancybox.option('Toolbar.items'),
            e = [
              { position: 'left', items: [] },
              { position: 'center', items: [] },
              { position: 'right', items: [] },
            ],
            i = this.fancybox.plugins.Thumbs;
          for (const s of this.fancybox.option('Toolbar.display')) {
            let n, o;
            if (
              (pt(s)
                ? ((n = s.id), (o = mt({}, t[n], s)))
                : ((n = s), (o = t[n])),
              ['counter', 'next', 'prev', 'slideshow'].includes(n) &&
                this.fancybox.items.length < 2)
            )
              continue;
            if ('fullscreen' === n) {
              if (!document.fullscreenEnabled || window.fullScreen) continue;
              document.addEventListener('fullscreenchange', this.onFsChange);
            }
            if ('thumbs' === n && (!i || 'disabled' === i.state)) continue;
            if (!o) continue;
            let a = o.position || 'right',
              r = e.find(t => t.position === a);
            r && r.items.push(o);
          }
          const s = document.createElement('div');
          s.classList.add('fancybox__toolbar');
          for (const t of e)
            if (t.items.length) {
              const e = document.createElement('div');
              e.classList.add('fancybox__toolbar__items'),
                e.classList.add(`fancybox__toolbar__items--${t.position}`);
              for (const i of t.items) e.appendChild(this.createElement(i));
              s.appendChild(e);
            }
          this.fancybox.$carousel.parentNode.insertBefore(
            s,
            this.fancybox.$carousel,
          ),
            (this.$container = s);
        }
        update() {
          const t = this.fancybox.getSlide(),
            e = t.index,
            i = this.fancybox.items.length,
            s = t.downloadSrc || ('image' !== t.type || t.error ? null : t.src);
          for (const t of this.fancybox.$container.querySelectorAll(
            'a.fancybox__button--download',
          ))
            s
              ? (t.removeAttribute('disabled'),
                t.removeAttribute('tabindex'),
                t.setAttribute('href', s),
                t.setAttribute('download', s),
                t.setAttribute('target', '_blank'))
              : (t.setAttribute('disabled', ''),
                t.setAttribute('tabindex', -1),
                t.removeAttribute('href'),
                t.removeAttribute('download'));
          const n = t.Panzoom,
            o = n && n.option('maxScale') > n.option('baseScale');
          for (const t of this.fancybox.$container.querySelectorAll(
            '.fancybox__button--zoom',
          ))
            o ? t.removeAttribute('disabled') : t.setAttribute('disabled', '');
          for (const e of this.fancybox.$container.querySelectorAll(
            '[data-fancybox-index]',
          ))
            e.innerHTML = t.index + 1;
          for (const t of this.fancybox.$container.querySelectorAll(
            '[data-fancybox-count]',
          ))
            t.innerHTML = i;
          if (!this.fancybox.option('infinite')) {
            for (const t of this.fancybox.$container.querySelectorAll(
              '[data-fancybox-prev]',
            ))
              0 === e
                ? t.setAttribute('disabled', '')
                : t.removeAttribute('disabled');
            for (const t of this.fancybox.$container.querySelectorAll(
              '[data-fancybox-next]',
            ))
              e === i - 1
                ? t.setAttribute('disabled', '')
                : t.removeAttribute('disabled');
          }
        }
        cleanup() {
          this.Slideshow &&
            this.Slideshow.isActive() &&
            this.Slideshow.clearTimer(),
            this.$container && this.$container.remove(),
            (this.$container = null);
        }
        attach() {
          this.fancybox.on(this.events);
        }
        detach() {
          this.fancybox.off(this.events), this.cleanup();
        }
      }
      Wt.defaults = qt;
      const Vt = {
          ScrollLock: class {
            constructor(t) {
              (this.fancybox = t),
                (this.viewport = null),
                (this.pendingUpdate = null);
              for (const t of [
                'onReady',
                'onResize',
                'onTouchstart',
                'onTouchmove',
              ])
                this[t] = this[t].bind(this);
            }
            onReady() {
              const t = window.visualViewport;
              t &&
                ((this.viewport = t),
                (this.startY = 0),
                t.addEventListener('resize', this.onResize),
                this.updateViewport()),
                window.addEventListener('touchstart', this.onTouchstart, {
                  passive: !1,
                }),
                window.addEventListener('touchmove', this.onTouchmove, {
                  passive: !1,
                }),
                window.addEventListener('wheel', this.onWheel, { passive: !1 });
            }
            onResize() {
              this.updateViewport();
            }
            updateViewport() {
              const t = this.fancybox,
                e = this.viewport,
                i = e.scale || 1,
                s = t.$container;
              if (!s) return;
              let n = '',
                o = '',
                a = '';
              i - 1 > 0.1 &&
                ((n = e.width * i + 'px'),
                (o = e.height * i + 'px'),
                (a = `translate3d(${e.offsetLeft}px, ${
                  e.offsetTop
                }px, 0) scale(${1 / i})`)),
                (s.style.width = n),
                (s.style.height = o),
                (s.style.transform = a);
            }
            onTouchstart(t) {
              this.startY = t.touches ? t.touches[0].screenY : t.screenY;
            }
            onTouchmove(t) {
              const e = this.startY,
                i =
                  window.innerWidth /
                  window.document.documentElement.clientWidth;
              if (!t.cancelable) return;
              if (t.touches.length > 1 || 1 !== i) return;
              const s = gt(t.composedPath()[0]);
              if (!s) return void t.preventDefault();
              const n = window.getComputedStyle(s),
                o = parseInt(n.getPropertyValue('height'), 10),
                a = t.touches ? t.touches[0].screenY : t.screenY,
                r = e <= a && 0 === s.scrollTop,
                l = e >= a && s.scrollHeight - s.scrollTop === o;
              (r || l) && t.preventDefault();
            }
            onWheel(t) {
              gt(t.composedPath()[0]) || t.preventDefault();
            }
            cleanup() {
              this.pendingUpdate &&
                (cancelAnimationFrame(this.pendingUpdate),
                (this.pendingUpdate = null));
              const t = this.viewport;
              t &&
                (t.removeEventListener('resize', this.onResize),
                (this.viewport = null)),
                window.removeEventListener('touchstart', this.onTouchstart, !1),
                window.removeEventListener('touchmove', this.onTouchmove, !1),
                window.removeEventListener('wheel', this.onWheel, {
                  passive: !1,
                });
            }
            attach() {
              this.fancybox.on('initLayout', this.onReady);
            }
            detach() {
              this.fancybox.off('initLayout', this.onReady), this.cleanup();
            }
          },
          Thumbs: It,
          Html: Nt,
          Toolbar: Wt,
          Image: Ft,
          Hash: jt,
        },
        Gt = {
          startIndex: 0,
          preload: 1,
          infinite: !0,
          showClass: 'fancybox-zoomInUp',
          hideClass: 'fancybox-fadeOut',
          animated: !0,
          hideScrollbar: !0,
          parentEl: null,
          mainClass: null,
          autoFocus: !0,
          trapFocus: !0,
          placeFocusBack: !0,
          click: 'close',
          closeButton: 'inside',
          dragToClose: !0,
          keyboard: {
            Escape: 'close',
            Delete: 'close',
            Backspace: 'close',
            PageUp: 'next',
            PageDown: 'prev',
            ArrowUp: 'next',
            ArrowDown: 'prev',
            ArrowRight: 'next',
            ArrowLeft: 'prev',
          },
          template: {
            closeButton:
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
            spinner:
              '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
            main: null,
          },
          l10n: {
            CLOSE: 'Close',
            NEXT: 'Next',
            PREV: 'Previous',
            MODAL: 'You can close this modal content with the ESC key',
            ERROR: 'Something Went Wrong, Please Try Again Later',
            IMAGE_ERROR: 'Image Not Found',
            ELEMENT_NOT_FOUND: 'HTML Element Not Found',
            AJAX_NOT_FOUND: 'Error Loading AJAX : Not Found',
            AJAX_FORBIDDEN: 'Error Loading AJAX : Forbidden',
            IFRAME_ERROR: 'Error Loading Page',
            TOGGLE_ZOOM: 'Toggle zoom level',
            TOGGLE_THUMBS: 'Toggle thumbnails',
            TOGGLE_SLIDESHOW: 'Toggle slideshow',
            TOGGLE_FULLSCREEN: 'Toggle full-screen mode',
            DOWNLOAD: 'Download',
          },
        },
        Yt = new Map();
      let Xt = 0;
      class Ut extends Ct {
        constructor(t, e = {}) {
          (t = t.map(
            t => (
              t.width && (t._width = t.width),
              t.height && (t._height = t.height),
              t
            ),
          )),
            super(mt(!0, {}, Gt, e)),
            this.bindHandlers(),
            (this.state = 'init'),
            this.setItems(t),
            this.attachPlugins(Ut.Plugins),
            this.trigger('init'),
            !0 === this.option('hideScrollbar') && this.hideScrollbar(),
            this.initLayout(),
            this.initCarousel(),
            this.attachEvents(),
            Yt.set(this.id, this),
            this.trigger('prepare'),
            (this.state = 'ready'),
            this.trigger('ready'),
            this.$container.setAttribute('aria-hidden', 'false'),
            this.option('trapFocus') && this.focus();
        }
        option(t, ...e) {
          const i = this.getSlide();
          let s = i ? i[t] : void 0;
          return void 0 !== s
            ? ('function' == typeof s && (s = s.call(this, this, ...e)), s)
            : super.option(t, ...e);
        }
        bindHandlers() {
          for (const t of [
            'onMousedown',
            'onKeydown',
            'onClick',
            'onFocus',
            'onCreateSlide',
            'onSettle',
            'onTouchMove',
            'onTouchEnd',
            'onTransform',
          ])
            this[t] = this[t].bind(this);
        }
        attachEvents() {
          document.addEventListener('mousedown', this.onMousedown),
            document.addEventListener('keydown', this.onKeydown, !0),
            this.option('trapFocus') &&
              document.addEventListener('focus', this.onFocus, !0),
            this.$container.addEventListener('click', this.onClick);
        }
        detachEvents() {
          document.removeEventListener('mousedown', this.onMousedown),
            document.removeEventListener('keydown', this.onKeydown, !0),
            document.removeEventListener('focus', this.onFocus, !0),
            this.$container.removeEventListener('click', this.onClick);
        }
        initLayout() {
          this.$root = this.option('parentEl') || document.body;
          let t = this.option('template.main');
          t &&
            (this.$root.insertAdjacentHTML('beforeend', this.localize(t)),
            (this.$container = this.$root.querySelector(
              '.fancybox__container',
            ))),
            this.$container ||
              ((this.$container = document.createElement('div')),
              this.$root.appendChild(this.$container)),
            (this.$container.onscroll = () => (
              (this.$container.scrollLeft = 0), !1
            )),
            Object.entries({
              class: 'fancybox__container',
              role: 'dialog',
              tabIndex: '-1',
              'aria-modal': 'true',
              'aria-hidden': 'true',
              'aria-label': this.localize('{{MODAL}}'),
            }).forEach(t => this.$container.setAttribute(...t)),
            this.option('animated') &&
              this.$container.classList.add('is-animated'),
            (this.$backdrop = this.$container.querySelector(
              '.fancybox__backdrop',
            )),
            this.$backdrop ||
              ((this.$backdrop = document.createElement('div')),
              this.$backdrop.classList.add('fancybox__backdrop'),
              this.$container.appendChild(this.$backdrop)),
            (this.$carousel = this.$container.querySelector(
              '.fancybox__carousel',
            )),
            this.$carousel ||
              ((this.$carousel = document.createElement('div')),
              this.$carousel.classList.add('fancybox__carousel'),
              this.$container.appendChild(this.$carousel)),
            (this.$container.Fancybox = this),
            (this.id = this.$container.getAttribute('id')),
            this.id ||
              ((this.id = this.options.id || ++Xt),
              this.$container.setAttribute('id', 'fancybox-' + this.id));
          const e = this.option('mainClass');
          return (
            e && this.$container.classList.add(...e.split(' ')),
            document.documentElement.classList.add('with-fancybox'),
            this.trigger('initLayout'),
            this
          );
        }
        setItems(t) {
          const e = [];
          for (const i of t) {
            const t = i.$trigger;
            if (t) {
              const e = t.dataset || {};
              (i.src = e.src || t.getAttribute('href') || i.src),
                (i.type = e.type || i.type),
                !i.src &&
                  t instanceof HTMLImageElement &&
                  (i.src = t.currentSrc || i.$trigger.src);
            }
            let s = i.$thumb;
            if (!s) {
              let t = i.$trigger && i.$trigger.origTarget;
              t &&
                (s =
                  t instanceof HTMLImageElement
                    ? t
                    : t.querySelector('img:not([aria-hidden])')),
                !s &&
                  i.$trigger &&
                  (s =
                    i.$trigger instanceof HTMLImageElement
                      ? i.$trigger
                      : i.$trigger.querySelector('img:not([aria-hidden])'));
            }
            i.$thumb = s || null;
            let n = i.thumb;
            !n &&
              s &&
              ((n = s.currentSrc || s.src),
              !n && s.dataset && (n = s.dataset.lazySrc || s.dataset.src)),
              n || 'image' !== i.type || (n = i.src),
              (i.thumb = n || null),
              (i.caption = i.caption || ''),
              e.push(i);
          }
          this.items = e;
        }
        initCarousel() {
          return (
            (this.Carousel = new At(
              this.$carousel,
              mt(
                !0,
                {},
                {
                  prefix: '',
                  classNames: {
                    viewport: 'fancybox__viewport',
                    track: 'fancybox__track',
                    slide: 'fancybox__slide',
                  },
                  textSelection: !0,
                  preload: this.option('preload'),
                  friction: 0.88,
                  slides: this.items,
                  initialPage: this.options.startIndex,
                  slidesPerPage: 1,
                  infiniteX: this.option('infinite'),
                  infiniteY: !0,
                  l10n: this.option('l10n'),
                  Dots: !1,
                  Navigation: {
                    classNames: {
                      main: 'fancybox__nav',
                      button: 'carousel__button',
                      next: 'is-next',
                      prev: 'is-prev',
                    },
                  },
                  Panzoom: {
                    textSelection: !0,
                    panOnlyZoomed: () =>
                      this.Carousel &&
                      this.Carousel.pages &&
                      this.Carousel.pages.length < 2 &&
                      !this.option('dragToClose'),
                    lockAxis: () => {
                      if (this.Carousel) {
                        let t = 'x';
                        return this.option('dragToClose') && (t += 'y'), t;
                      }
                    },
                  },
                  on: {
                    '*': (t, ...e) => this.trigger(`Carousel.${t}`, ...e),
                    init: t => (this.Carousel = t),
                    createSlide: this.onCreateSlide,
                    settle: this.onSettle,
                  },
                },
                this.option('Carousel'),
              ),
            )),
            this.option('dragToClose') &&
              this.Carousel.Panzoom.on({
                touchMove: this.onTouchMove,
                afterTransform: this.onTransform,
                touchEnd: this.onTouchEnd,
              }),
            this.trigger('initCarousel'),
            this
          );
        }
        onCreateSlide(t, e) {
          let i = e.caption || '';
          if (
            ('function' == typeof this.options.caption &&
              (i = this.options.caption.call(this, this, this.Carousel, e)),
            'string' == typeof i && i.length)
          ) {
            const t = document.createElement('div'),
              s = `fancybox__caption_${this.id}_${e.index}`;
            (t.className = 'fancybox__caption'),
              (t.innerHTML = i),
              t.setAttribute('id', s),
              (e.$caption = e.$el.appendChild(t)),
              e.$el.classList.add('has-caption'),
              e.$el.setAttribute('aria-labelledby', s);
          }
        }
        onSettle() {
          this.option('autoFocus') && this.focus();
        }
        onFocus(t) {
          this.isTopmost() && this.focus(t);
        }
        onClick(t) {
          if (t.defaultPrevented) return;
          let e = t.composedPath()[0];
          if (e.matches('[data-fancybox-close]'))
            return t.preventDefault(), void Ut.close(!1, t);
          if (e.matches('[data-fancybox-next]'))
            return t.preventDefault(), void Ut.next();
          if (e.matches('[data-fancybox-prev]'))
            return t.preventDefault(), void Ut.prev();
          const i = document.activeElement;
          if (i) {
            if (i.closest('[contenteditable]')) return;
            e.matches(Ot) || i.blur();
          }
          if (
            !e.closest('.fancybox__content') &&
            !getSelection().toString().length &&
            !1 !== this.trigger('click', t)
          )
            switch (this.option('click')) {
              case 'close':
                this.close();
                break;
              case 'next':
                this.next();
            }
        }
        onTouchMove() {
          const t = this.getSlide().Panzoom;
          return !t || 1 === t.content.scale;
        }
        onTouchEnd(t) {
          const e = t.dragOffset.y;
          Math.abs(e) >= 150 || (Math.abs(e) >= 35 && t.dragOffset.time < 350)
            ? (this.option('hideClass') &&
                (this.getSlide().hideClass =
                  'fancybox-throwOut' + (t.content.y < 0 ? 'Up' : 'Down')),
              this.close())
            : 'y' === t.lockAxis && t.panTo({ y: 0 });
        }
        onTransform(t) {
          if (this.$backdrop) {
            const e = Math.abs(t.content.y),
              i =
                e < 1
                  ? ''
                  : Math.max(
                      0.33,
                      Math.min(1, 1 - (e / t.content.fitHeight) * 1.5),
                    );
            this.$container.style.setProperty('--fancybox-ts', i ? '0s' : ''),
              this.$container.style.setProperty('--fancybox-opacity', i);
          }
        }
        onMousedown() {
          'ready' === this.state &&
            document.body.classList.add('is-using-mouse');
        }
        onKeydown(t) {
          if (!this.isTopmost()) return;
          document.body.classList.remove('is-using-mouse');
          const e = t.key,
            i = this.option('keyboard');
          if (!i || t.ctrlKey || t.altKey || t.shiftKey) return;
          const s = t.composedPath()[0],
            n = document.activeElement && document.activeElement.classList,
            o = n && n.contains('carousel__button');
          if (
            'Escape' !== e &&
            !o &&
            (t.target.isContentEditable ||
              -1 !==
                [
                  'BUTTON',
                  'TEXTAREA',
                  'OPTION',
                  'INPUT',
                  'SELECT',
                  'VIDEO',
                ].indexOf(s.nodeName))
          )
            return;
          if (!1 === this.trigger('keydown', e, t)) return;
          const a = i[e];
          'function' == typeof this[a] && this[a]();
        }
        getSlide() {
          const t = this.Carousel;
          if (!t) return null;
          const e = null === t.page ? t.option('initialPage') : t.page,
            i = t.pages || [];
          return i.length && i[e] ? i[e].slides[0] : null;
        }
        focus(t) {
          if (Ut.ignoreFocusChange) return;
          if (
            ['init', 'closing', 'customClosing', 'destroy'].indexOf(
              this.state,
            ) > -1
          )
            return;
          const e = this.$container,
            i = this.getSlide(),
            s = 'done' === i.state ? i.$el : null;
          if (s && s.contains(document.activeElement)) return;
          t && t.preventDefault(), (Ut.ignoreFocusChange = !0);
          const n = Array.from(e.querySelectorAll(Ot));
          let o,
            a = [];
          for (let t of n) {
            const e = t.offsetParent,
              i = s && s.contains(t),
              n = !this.Carousel.$viewport.contains(t);
            e && (i || n)
              ? (a.push(t),
                void 0 !== t.dataset.origTabindex &&
                  ((t.tabIndex = t.dataset.origTabindex),
                  t.removeAttribute('data-orig-tabindex')),
                (t.hasAttribute('autoFocus') ||
                  (!o && i && !t.classList.contains('carousel__button'))) &&
                  (o = t))
              : ((t.dataset.origTabindex =
                  void 0 === t.dataset.origTabindex
                    ? t.getAttribute('tabindex')
                    : t.dataset.origTabindex),
                (t.tabIndex = -1));
          }
          t
            ? a.indexOf(t.target) > -1
              ? (this.lastFocus = t.target)
              : this.lastFocus === e
              ? zt(a[a.length - 1])
              : zt(e)
            : this.option('autoFocus') && o
            ? zt(o)
            : a.indexOf(document.activeElement) < 0 && zt(e),
            (this.lastFocus = document.activeElement),
            (Ut.ignoreFocusChange = !1);
        }
        hideScrollbar() {
          if (!_t) return;
          const t =
              window.innerWidth -
              document.documentElement.getBoundingClientRect().width,
            e = 'fancybox-style-noscroll';
          let i = document.getElementById(e);
          i ||
            (t > 0 &&
              ((i = document.createElement('style')),
              (i.id = e),
              (i.type = 'text/css'),
              (i.innerHTML = `.compensate-for-scrollbar {padding-right: ${t}px;}`),
              document.getElementsByTagName('head')[0].appendChild(i),
              document.body.classList.add('compensate-for-scrollbar')));
        }
        revealScrollbar() {
          document.body.classList.remove('compensate-for-scrollbar');
          const t = document.getElementById('fancybox-style-noscroll');
          t && t.remove();
        }
        clearContent(t) {
          this.Carousel.trigger('removeSlide', t),
            t.$content && (t.$content.remove(), (t.$content = null)),
            t.$closeButton &&
              (t.$closeButton.remove(), (t.$closeButton = null)),
            t._className && t.$el.classList.remove(t._className);
        }
        setContent(t, e, i = {}) {
          let s;
          const n = t.$el;
          if (e instanceof HTMLElement)
            ['img', 'iframe', 'video', 'audio'].indexOf(
              e.nodeName.toLowerCase(),
            ) > -1
              ? ((s = document.createElement('div')), s.appendChild(e))
              : (s = e);
          else {
            const t = document.createRange().createContextualFragment(e);
            (s = document.createElement('div')), s.appendChild(t);
          }
          if (
            (t.filter && !t.error && (s = s.querySelector(t.filter)),
            s instanceof Element)
          )
            return (
              (t._className = `has-${i.suffix || t.type || 'unknown'}`),
              n.classList.add(t._className),
              s.classList.add('fancybox__content'),
              ('none' !== s.style.display &&
                'none' !== getComputedStyle(s).getPropertyValue('display')) ||
                (s.style.display =
                  t.display || this.option('defaultDisplay') || 'flex'),
              t.id && s.setAttribute('id', t.id),
              (t.$content = s),
              n.prepend(s),
              this.manageCloseButton(t),
              'loading' !== t.state && this.revealContent(t),
              s
            );
          this.setError(t, '{{ELEMENT_NOT_FOUND}}');
        }
        manageCloseButton(t) {
          const e =
            void 0 === t.closeButton
              ? this.option('closeButton')
              : t.closeButton;
          if (!e || ('top' === e && this.$closeButton)) return;
          const i = document.createElement('button');
          i.classList.add('carousel__button', 'is-close'),
            i.setAttribute('title', this.options.l10n.CLOSE),
            (i.innerHTML = this.option('template.closeButton')),
            i.addEventListener('click', t => this.close(t)),
            'inside' === e
              ? (t.$closeButton && t.$closeButton.remove(),
                (t.$closeButton = t.$content.appendChild(i)))
              : (this.$closeButton = this.$container.insertBefore(
                  i,
                  this.$container.firstChild,
                ));
        }
        revealContent(t) {
          this.trigger('reveal', t), (t.$content.style.visibility = '');
          let e = !1;
          t.error ||
            'loading' === t.state ||
            null !== this.Carousel.prevPage ||
            t.index !== this.options.startIndex ||
            (e =
              void 0 === t.showClass ? this.option('showClass') : t.showClass),
            e
              ? ((t.state = 'animating'),
                this.animateCSS(t.$content, e, () => {
                  this.done(t);
                }))
              : this.done(t);
        }
        animateCSS(t, e, i) {
          if (
            (t &&
              t.dispatchEvent(
                new CustomEvent('animationend', {
                  bubbles: !0,
                  cancelable: !0,
                }),
              ),
            !t || !e)
          )
            return void ('function' == typeof i && i());
          const s = function (n) {
            n.currentTarget === this &&
              (t.removeEventListener('animationend', s),
              i && i(),
              t.classList.remove(e));
          };
          t.addEventListener('animationend', s), t.classList.add(e);
        }
        done(t) {
          (t.state = 'done'), this.trigger('done', t);
          const e = this.getSlide();
          e && t.index === e.index && this.option('autoFocus') && this.focus();
        }
        setError(t, e) {
          (t.error = e), this.hideLoading(t), this.clearContent(t);
          const i = document.createElement('div');
          i.classList.add('fancybox-error'),
            (i.innerHTML = this.localize(e || '<p>{{ERROR}}</p>')),
            this.setContent(t, i, { suffix: 'error' });
        }
        showLoading(t) {
          (t.state = 'loading'), t.$el.classList.add('is-loading');
          let e = t.$el.querySelector('.fancybox__spinner');
          e ||
            ((e = document.createElement('div')),
            e.classList.add('fancybox__spinner'),
            (e.innerHTML = this.option('template.spinner')),
            e.addEventListener('click', () => {
              this.Carousel.Panzoom.velocity || this.close();
            }),
            t.$el.prepend(e));
        }
        hideLoading(t) {
          const e = t.$el && t.$el.querySelector('.fancybox__spinner');
          e && (e.remove(), t.$el.classList.remove('is-loading')),
            'loading' === t.state &&
              (this.trigger('load', t), (t.state = 'ready'));
        }
        next() {
          const t = this.Carousel;
          t && t.pages.length > 1 && t.slideNext();
        }
        prev() {
          const t = this.Carousel;
          t && t.pages.length > 1 && t.slidePrev();
        }
        jumpTo(...t) {
          this.Carousel && this.Carousel.slideTo(...t);
        }
        isClosing() {
          return ['closing', 'customClosing', 'destroy'].includes(this.state);
        }
        isTopmost() {
          return Ut.getInstance().id == this.id;
        }
        close(t) {
          if ((t && t.preventDefault(), this.isClosing())) return;
          if (!1 === this.trigger('shouldClose', t)) return;
          if (
            ((this.state = 'closing'),
            this.Carousel.Panzoom.destroy(),
            this.detachEvents(),
            this.trigger('closing', t),
            'destroy' === this.state)
          )
            return;
          this.$container.setAttribute('aria-hidden', 'true'),
            this.$container.classList.add('is-closing');
          const e = this.getSlide();
          if (
            (this.Carousel.slides.forEach(t => {
              t.$content &&
                t.index !== e.index &&
                this.Carousel.trigger('removeSlide', t);
            }),
            'closing' === this.state)
          ) {
            const t =
              void 0 === e.hideClass ? this.option('hideClass') : e.hideClass;
            this.animateCSS(
              e.$content,
              t,
              () => {
                this.destroy();
              },
              !0,
            );
          }
        }
        destroy() {
          if ('destroy' === this.state) return;
          (this.state = 'destroy'), this.trigger('destroy');
          const t = this.option('placeFocusBack')
            ? this.option('triggerTarget', this.getSlide().$trigger)
            : null;
          this.Carousel.destroy(),
            this.detachPlugins(),
            (this.Carousel = null),
            (this.options = {}),
            (this.events = {}),
            this.$container.remove(),
            (this.$container = this.$backdrop = this.$carousel = null),
            t && zt(t),
            Yt.delete(this.id);
          const e = Ut.getInstance();
          e
            ? e.focus()
            : (document.documentElement.classList.remove('with-fancybox'),
              document.body.classList.remove('is-using-mouse'),
              this.revealScrollbar());
        }
        static show(t, e = {}) {
          return new Ut(t, e);
        }
        static fromEvent(t, e = {}) {
          if (t.defaultPrevented) return;
          if (t.button && 0 !== t.button) return;
          if (t.ctrlKey || t.metaKey || t.shiftKey) return;
          const i = t.composedPath()[0];
          let s,
            n,
            o,
            a = i;
          if (
            ((a.matches('[data-fancybox-trigger]') ||
              (a = a.closest('[data-fancybox-trigger]'))) &&
              ((e.triggerTarget = a),
              (s = a && a.dataset && a.dataset.fancyboxTrigger)),
            s)
          ) {
            const t = document.querySelectorAll(`[data-fancybox="${s}"]`),
              e = parseInt(a.dataset.fancyboxIndex, 10) || 0;
            a = t.length ? t[e] : a;
          }
          Array.from(Ut.openers.keys())
            .reverse()
            .some(e => {
              o = a || i;
              let s = !1;
              try {
                o instanceof Element &&
                  ('string' == typeof e || e instanceof String) &&
                  (s = o.matches(e) || (o = o.closest(e)));
              } catch (t) {}
              return !!s && (t.preventDefault(), (n = e), !0);
            });
          let r = !1;
          if (n) {
            (e.event = t),
              (e.target = o),
              (o.origTarget = i),
              (r = Ut.fromOpener(n, e));
            const s = Ut.getInstance();
            s &&
              'ready' === s.state &&
              t.detail &&
              document.body.classList.add('is-using-mouse');
          }
          return r;
        }
        static fromOpener(t, e = {}) {
          let i = [],
            s = e.startIndex || 0,
            n = e.target || null;
          const o =
              void 0 !== (e = mt({}, e, Ut.openers.get(t))).groupAll &&
              e.groupAll,
            a = void 0 === e.groupAttr ? 'data-fancybox' : e.groupAttr,
            r = a && n ? n.getAttribute(`${a}`) : '';
          if (!n || r || o) {
            const s = e.root || (n ? n.getRootNode() : document.body);
            i = [].slice.call(s.querySelectorAll(t));
          }
          if (
            (n &&
              !o &&
              (i = r ? i.filter(t => t.getAttribute(`${a}`) === r) : [n]),
            !i.length)
          )
            return !1;
          const l = Ut.getInstance();
          return (
            !(l && i.indexOf(l.options.$trigger) > -1) &&
            ((s = n ? i.indexOf(n) : s),
            (i = i.map(function (t) {
              const e = ['false', '0', 'no', 'null', 'undefined'],
                i = ['true', '1', 'yes'],
                s = Object.assign({}, t.dataset),
                n = {};
              for (let [t, o] of Object.entries(s))
                if ('fancybox' !== t)
                  if ('width' === t || 'height' === t) n[`_${t}`] = o;
                  else if ('string' == typeof o || o instanceof String)
                    if (e.indexOf(o) > -1) n[t] = !1;
                    else if (i.indexOf(n[t]) > -1) n[t] = !0;
                    else
                      try {
                        n[t] = JSON.parse(o);
                      } catch (e) {
                        n[t] = o;
                      }
                  else n[t] = o;
              return t instanceof Element && (n.$trigger = t), n;
            })),
            new Ut(i, mt({}, e, { startIndex: s, $trigger: n })))
          );
        }
        static bind(t, e = {}) {
          function i() {
            document.body.addEventListener('click', Ut.fromEvent, !1);
          }
          _t &&
            (Ut.openers.size ||
              (/complete|interactive|loaded/.test(document.readyState)
                ? i()
                : document.addEventListener('DOMContentLoaded', i)),
            Ut.openers.set(t, e));
        }
        static unbind(t) {
          Ut.openers.delete(t), Ut.openers.size || Ut.destroy();
        }
        static destroy() {
          let t;
          for (; (t = Ut.getInstance()); ) t.destroy();
          (Ut.openers = new Map()),
            document.body.removeEventListener('click', Ut.fromEvent, !1);
        }
        static getInstance(t) {
          return t
            ? Yt.get(t)
            : Array.from(Yt.values())
                .reverse()
                .find(t => !t.isClosing() && t) || null;
        }
        static close(t = !0, e) {
          if (t) for (const t of Yt.values()) t.close(e);
          else {
            const t = Ut.getInstance();
            t && t.close(e);
          }
        }
        static next() {
          const t = Ut.getInstance();
          t && t.next();
        }
        static prev() {
          const t = Ut.getInstance();
          t && t.prev();
        }
      }
      (Ut.version = '4.0.31'),
        (Ut.defaults = Gt),
        (Ut.openers = new Map()),
        (Ut.Plugins = Vt),
        Ut.bind('[data-fancybox]');
      for (const [t, e] of Object.entries(Ut.Plugins || {}))
        'function' == typeof e.create && e.create(Ut);
      var Zt = i(176),
        Kt = i.n(Zt);
      function Jt(t, e) {
        for (var i = 0; i < e.length; i++) {
          var s = e[i];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(t, s.key, s);
        }
      }
      function Qt() {
        jQuery(function (t) {
          var e = (function () {
            function e() {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, e),
                (this.template_name = ''),
                (this.selectors = {
                  list: '.blog-content__list',
                  post: '.blog-content__list-item',
                  btn_more: '.load-more',
                  homepage: '.blog-homepage',
                }),
                (this.events = { 'click .load-more': 'load_page' });
            }
            var i, s, n;
            return (
              (i = e),
              (s = [
                {
                  key: 'initialize',
                  value: function (t) {
                    'undefined' != typeof usjunkarsBlogCurrentPage &&
                      ((this.page = usjunkarsBlogCurrentPage),
                      (this.last_page = usjunkarsBlogLastPage),
                      (this.posts_per_page = 15),
                      (this.all_loaded = !1),
                      (this.blog_url = t.BlogURL),
                      (this.settings = t.settings),
                      (this.blog_id = t.BlogId),
                      (this.$btn_more = jQuery('.load-more')),
                      document
                        .querySelector('.load-more')
                        .addEventListener('click', this.load_page.bind(this)));
                  },
                },
                {
                  key: 'set_location',
                  value: function () {
                    window.location.hash = this.get_route();
                  },
                },
                {
                  key: 'redirect',
                  value: function () {
                    window.location.href = this.blog_url + this.get_route();
                  },
                },
                {
                  key: 'get_route',
                  value: function () {
                    return '#page=' + this.page;
                  },
                },
                {
                  key: 'load_page',
                  value: function (t) {
                    t && (this.page += 1),
                      this.$btn_more.addClass('progress'),
                      this.get_posts();
                  },
                },
                {
                  key: 'get_posts',
                  value: function (e) {
                    var i = this;
                    t.ajax({
                      url:
                        '/my/api/2/blog/53394db4-b137-4751-900c-d53bd76c2de9/' +
                        usjunkarsBlogTemplate +
                        '?page=' +
                        i.page,
                      data: {},
                      method: 'POST',
                      success: function (e) {
                        'items' in e &&
                          e.items.forEach(function (e) {
                            var s = t(i.selectors.list);
                            console.log(e), t(s).append(e.html);
                          }),
                          'pagination' in e &&
                            t('.blog-pagination__wrapper .container').html(
                              e.pagination,
                            ),
                          i.set_location();
                      },
                      complete: function () {
                        i.$btn_more.removeClass('progress'),
                          i.page >= i.last_page &&
                            i.$btn_more.addClass('hidden');
                      },
                    });
                  },
                },
                {
                  key: 'rating',
                  value: function () {
                    if (t('.article__bottom_rating-form input').lenght) {
                      var e = t('.article__bottom_rating-form')
                        .first()
                        .data('post-id');
                      if (localStorage.getItem('rating_' + e)) {
                        var i = localStorage.getItem('rating_' + e + '_value');
                        t('#rating' + i).length &&
                          t('#rating' + i).trigger('click');
                      }
                    }
                    t('.article__bottom_rating-form input').on(
                      'change',
                      function () {
                        var e = t(
                            '.article__bottom_rating-form input:checked',
                          ).first(),
                          i = t('.article__bottom_rating-form')
                            .first()
                            .data('post-id'),
                          s =
                            '/my/api/2/blog/' +
                            window.BlogSettings.BlogId +
                            '/rating/' +
                            i +
                            '/' +
                            t(e).val() +
                            '/',
                          n = {
                            _token: t(
                              '.article__bottom_rating-form input[name=token]',
                            )
                              .first()
                              .val(),
                          };
                        localStorage.getItem('rating_' + i) &&
                          (n.lastValue = localStorage.getItem(
                            'rating_' + i + '_value',
                          )),
                          t.ajax({
                            url: s,
                            type: 'POST',
                            data: n,
                            beforeSend: function () {
                              t('.article__bottom_rating-form input').attr(
                                'disabled',
                                !0,
                              );
                            },
                            success: function (s) {
                              t('.article__bottom_rating-form input').attr(
                                'disabled',
                                !1,
                              ),
                                localStorage.setItem('rating_' + i, 1),
                                localStorage.setItem(
                                  'rating_' + i + '_value',
                                  t(e).val(),
                                ),
                                alert('Your rating has been accepted');
                            },
                            error: function (t, e) {
                              alert('An error has occurred');
                            },
                          });
                      },
                    );
                  },
                },
              ]),
              s && Jt(i.prototype, s),
              n && Jt(i, n),
              Object.defineProperty(i, 'prototype', { writable: !1 }),
              e
            );
          })();
          new e().initialize(window.BlogSettings);
        });
      }

      window.addEventListener('DOMContentLoaded', function () {
        var t, i, s, n, o, a, r, l, c, d, h, u;
        (t = document.querySelector('.hamburger')),
          (i = document.querySelector('.header__nav-inner')),
          (s = document.querySelector('header.header')),
          t &&
            t.addEventListener(
              'click',
              function (e) {
                e.preventDefault(),
                  document.body.classList.toggle('no-scroll'),
                  t.classList.toggle('active'),
                  s.classList.toggle('menu-active'),
                  i.classList.toggle('active');
              },
              !1,
            ),
          (function () {
            var t = document.querySelector('.testimonials-slider');
            t &&
              new at(t, {
                modules: [lt, dt],
                slidesPerView: 1,
                loop: !0,
                spaceBetween: 50,
                navigation: {
                  nextEl: '.testimonials-slider__next',
                  prevEl: '.testimonials-slider__prev',
                },
                pagination: {
                  el: '.testimonials-slider__pagination',
                  clickable: !0,
                },
                breakpoints: {
                  576: { spaceBetween: 55 },
                  768: { spaceBetween: 105 },
                },
              });
            var e = document.querySelector('.brands-slider');
            e &&
              new at(e, {
                modules: [dt],
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 2,
                pagination: { el: '.brands-slider__pagination', clickable: !0 },
                breakpoints: {
                  360: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 2 },
                  768: { spaceBetween: 8, slidesPerGroup: 7, slidesPerView: 7 },
                  992: { spaceBetween: 8, slidesPerGroup: 9, slidesPerView: 9 },
                  1200: {
                    spaceBetween: 8,
                    slidesPerGroup: 11,
                    slidesPerView: 'auto',
                  },
                },
              });
            var i = document.querySelector('.recent-slider');
            t &&
              new at(i, {
                modules: [lt, dt],
                slidesPerView: 'auto',
                spaceBetween: 8,
                navigation: {
                  nextEl: '.recent-slider__next',
                  prevEl: '.recent-slider__prev',
                },
                pagination: { el: '.recent-slider__pagination', clickable: !0 },
                breakpoints: { 992: { slidesPerView: 3 } },
              });
          })(),
          (n = document.querySelectorAll('.faq-accordion__header')),
          (o = document.querySelectorAll('.faq-accordion__body')),
          n &&
            n.forEach(function (t) {
              t.addEventListener('click', function (t) {
                t.preventDefault();
                var e,
                  i = this.parentElement,
                  s = this.nextElementSibling,
                  a = ht(n);
                try {
                  for (a.s(); !(e = a.n()).done; ) {
                    var r = e.value;
                    !r.contains(this) && r.classList.remove('active'),
                      !r.contains(this) &&
                        r.parentElement.classList.remove('active');
                  }
                } catch (t) {
                  a.e(t);
                } finally {
                  a.f();
                }
                var l,
                  c = ht(o);
                try {
                  for (c.s(); !(l = c.n()).done; ) {
                    var d = l.value;
                    !d.contains(s) && d.removeAttribute('style');
                  }
                } catch (t) {
                  c.e(t);
                } finally {
                  c.f();
                }
                this.classList.toggle('active'),
                  i.classList.toggle('active'),
                  s.style.maxHeight
                    ? (s.style.maxHeight = null)
                    : (s.style.maxHeight = s.scrollHeight + 'px');
              });
            }),
          (a = document.querySelector('.blog-pagination')),
          (r = document.querySelector('.blog-content')),
          window.innerWidth < 992 &&
            a &&
            r &&
            r.insertAdjacentElement('afterEnd', a),
          document.querySelectorAll('textarea').forEach(function (t) {
            (t.style.height = t.scrollHeight + 'px'),
              t.classList.add('auto'),
              t.addEventListener('input', function (e) {
                (t.style.height = 'auto'),
                  (t.style.height = t.scrollHeight + 'px');
              });
          }),
          (function () {
            Ut.bind('[data-fancybox]', { dragToClose: !1 });
            var t = document.querySelector('.offer-modal__tabs'),
              e = document.querySelector('.offer-modal__top-right');
            t &&
              (e.addEventListener('click', function (t) {
                Ut.getInstance().close();
              }),
              t.addEventListener('submit', function (t) {
                Ut.getInstance().close();
              }));
          })(),
          (l = document.querySelectorAll('.video-section')) &&
            l.forEach(function (t) {
              var e = t.querySelector('video');
              t.querySelector('.video-section__play').addEventListener(
                'click',
                function (i) {
                  e.paused
                    ? (e.play(), t.classList.add('playing'))
                    : (e.pause(), t.classList.remove('playing'));
                },
              );
            }),
          (function () {
            var t = document.querySelectorAll('.js-accordion');
            t &&
              t.forEach(function (t) {
                if (
                  t.querySelector('.js-accordion-toggler') &&
                  t.querySelector('.js-accordion-panel')
                ) {
                  var e = t.querySelector('.js-accordion-toggler'),
                    i = t.querySelector('.js-accordion-panel');
                  e.addEventListener('click', function (t) {
                    t.preventDefault(),
                      console.log('click'),
                      e.classList.toggle('active'),
                      i.style.maxHeight
                        ? (i.style.maxHeight = null)
                        : (i.style.maxHeight = i.scrollHeight + 'px');
                  });
                }
              });
          })(),
          (c = document.querySelectorAll('.input-file')) &&
            c.forEach(function (t) {
              var e = t.parentElement.previousElementSibling,
                i = [];
              t.addEventListener('change', function (s) {
                var n = t.files,
                  o = document.querySelectorAll(
                    '.offer-modal__tabs-item_files-input-list-item',
                  ).length;
                if ((console.log(o, n.length), o + n.length > 5))
                  return (
                    Kt().fire({
                      title: 'Error!',
                      text: 'The maximum number of uploaded files is 5',
                      icon: 'error',
                    }),
                    !1
                  );
                for (
                  var a = function (t) {
                      var s = n[t],
                        o = s.name;
                      -1 === i.indexOf(o) && i.push(o), console.log(i);
                      var a = document.createElement('div');
                      a.classList.add(
                        'offer-modal__tabs-item_files-input-list-item',
                      ),
                        a.setAttribute('data-file-id', t),
                        (a.innerHTML =
                          '<div class="offer-modal__tabs-item_files-input-list-item_name">' +
                          o +
                          '</div><div class="offer-modal__tabs-item_files-input-list-item_delete">Delete</div>');
                      var r = o
                        .slice(o.lastIndexOf('.'), o.length)
                        .toLowerCase();
                      if ('.jpg' == r || '.png' == r || '.jpeg' == r) {
                        var l = document.createElement('img');
                        (l.src = window.URL.createObjectURL(s)),
                          (l.onload = function () {
                            window.URL.revokeObjectURL(this.src);
                          }),
                          l.classList.add(
                            'offer-modal__tabs-item_files-input-list-item_image',
                          ),
                          a.insertAdjacentElement('afterbegin', l);
                      } else {
                        var c = document.createElement('div');
                        (c.innerHTML = r),
                          c.classList.add(
                            'offer-modal__tabs-item_files-input-list-item_file',
                          ),
                          a.insertAdjacentElement('afterbegin', c);
                      }
                      e.append(a);
                      var d = a.querySelector(
                        '.offer-modal__tabs-item_files-input-list-item_delete',
                      );
                      d.addEventListener('click', function (t) {
                        t.preventDefault(), d.parentElement.remove();
                        for (
                          var e = t.target.previousElementSibling.textContent,
                            s = 0;
                          s < i.length;
                          s++
                        )
                          i[s] === e && i.splice(s, 1);
                        console.log(i);
                      });
                    },
                    r = 0;
                  r < n.length;
                  r++
                )
                  a(r);
              });
            }),
          (function () {
            var t = document.querySelectorAll('.offer-modal__tabs-item'),
              e = document.querySelector('.offer-modal__top-left_steps-active');
            if (t) {
              var i = document.querySelector('.offer-modal__tabs-item_next'),
                s = document.querySelector('.offer-modal__tabs-item_prev');
              i &&
                i.addEventListener('click', function (i) {
                  t[0].classList.remove('active'),
                    t[1].classList.add('active'),
                    (e.innerHTML = '2');
                }),
                s &&
                  s.addEventListener('click', function (i) {
                    t[1].classList.remove('active'),
                      t[0].classList.add('active'),
                      (e.innerHTML = '1');
                  });
            }
          })(),
          (d = document.querySelectorAll('.js-select')) &&
            d.forEach(function (t) {
              var e = t.querySelector('.js-select-toggler'),
                i = e.querySelector('span'),
                s = t.querySelector('.js-select-input'),
                n = t.querySelector('.js-select-list').querySelectorAll('li');
              e.addEventListener('click', function () {
                if (t.classList.contains('active'))
                  t.classList.remove('active');
                else {
                  for (var e = 0; e < d.length; e++)
                    d[e].classList.remove('active');
                  t.classList.add('active');
                }
              }),
                n.forEach(function (e) {
                  var n = e.textContent;
                  e.addEventListener('click', function () {
                    (i.innerHTML = n),
                      (s.value = n),
                      t.classList.remove('active');
                  });
                });
            }),
          (h = document.querySelector('.contacts-form_info-link')),
          (u = document.querySelector('.contacts-phones')),
          h &&
            h.addEventListener('click', function (t) {
              window.scroll({ top: u.offsetTop - 45, behavior: 'smooth' });
            }),
          Qt(),
          (function () {
            function t() {
              $('.twitter-typeahead').append(
                '<img src="/images/spinner.gif" class="typehead-spinner">',
              );
            }
            function e() {
              $('.twitter-typeahead img').remove();
            }
            jQuery(function (i) {
              var s = '/search/ajax?q=%QUERY%';
              -1 === window.location.href.indexOf('search/') &&
                (s = '/search/ajax-cities?q=%QUERY%');
              var n = new Bloodhound({
                remote: {
                  url: s,
                  wildcard: '%QUERY%',
                  prepare: function (e, i) {
                    return (
                      t(),
                      (i.url = this.url.replace(/%QUERY%/i, encodeURI(e))),
                      i
                    );
                  },
                  filter: function (t) {
                    return e(), t;
                  },
                },
                datumTokenizer: Bloodhound.tokenizers.whitespace('q'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
              });
              i('.search-form__input').length &&
                i('.search-form__input').typeahead(
                  { hint: !1, highlight: !0, minLength: 3 },
                  {
                    source: n.ttAdapter(),
                    name: 'usersList',
                    templates: {
                      empty: [
                        '<div class="list-group search-results-dropdown"><div class="list-group-item">Nothing found.</div></div>',
                      ],
                      header: [
                        '<div class="list-group search-results-dropdown">',
                      ],
                      suggestion: function (t) {
                        return '' == t.content
                          ? '<a href="' +
                              t.href +
                              '" class="list-group-item">' +
                              t.name +
                              '</a>'
                          : '<a href="' +
                              t.href +
                              '" class="list-group-item">' +
                              t.content +
                              '</a>';
                      },
                    },
                    display: function (t) {
                      return t.name;
                    },
                  },
                );
            });
          })(),
          e().polyfill();
      });
    })();
})();
