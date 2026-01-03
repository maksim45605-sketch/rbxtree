(self["webpackChunksp_admin"] = self["webpackChunksp_admin"] || []).push([[256], {
    50915: function(e, a, t) {
        "use strict";
        t.d(a, {
            Z: function() {
                return _
            }
        });
        var l = t(73396)
          , s = t(87139)
          , i = t(44870)
          , o = t(57041)
          , n = t(3139);
        const r = {
            class: "payment-method-card__icon"
        }
          , u = {
            class: "payment-method-card__text"
        }
          , c = {
            class: "payment-method-card__text__title"
        };
        var m = (0,
        l.aZ)({
            __name: "index",
            props: {
                methodName: {
                    type: String,
                    default: ""
                },
                methodType: {
                    type: String,
                    default: ""
                },
                tax: {
                    type: Number,
                    default: 0
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                type: {
                    type: String,
                    default: "purchase"
                }
            },
            setup(e) {
                const a = e
                  , t = (0,
                l.Fl)(( () => a.methodName ? (0,
                o.d)(a.methodName, a?.methodType) : "Метод еще не выбран"));
                return (e, o) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    class: (0,
                    s.C_)(["payment-method-card", {
                        disabled: a.disabled
                    }])
                }, [(0,
                l._)("div", r, [(0,
                l.Wm)((0,
                i.SU)(n.Z), {
                    type: "solid",
                    name: "card"
                })]), (0,
                l._)("div", u, [(0,
                l._)("div", c, [(0,
                l.Uk)((0,
                s.zw)(t.value) + " ", 1), "purchase" === a.type ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    key: 0,
                    class: (0,
                    s.C_)(["payment-method-card__text__title__tax", {
                        unactive: 0 === a.tax
                    }])
                }, (0,
                s.zw)(a.tax) + "% ", 3)) : (0,
                l.kq)("", !0)]), o[0] || (o[0] = (0,
                l._)("span", {
                    class: "payment-method-card__text__description"
                }, "Метод оплаты", -1))]), (0,
                l.Wm)((0,
                i.SU)(n.Z), {
                    type: "outline",
                    name: "caretRight",
                    class: "payment-method-card__arrow"
                })], 2))
            }
        });
        const d = m;
        var p = d
          , _ = p
    },
    60148: function(e, a, t) {
        "use strict";
        t.d(a, {
            Z: function() {
                return C
            }
        });
        var l = t(73396)
          , s = t(87139)
          , i = t(44870)
          , o = t(77400)
          , n = t(13398)
          , r = t(57041);
        const u = {
            class: "data-info-card__wrapper"
        }
          , c = {
            key: 0,
            class: "data-info-card__label"
        }
          , m = {
            class: "data-info-card__body"
        }
          , d = {
            class: "data-info-card__image data-info-card__image--payment"
        }
          , p = {
            class: "data-info-card__info"
        }
          , _ = {
            class: "data-info-card__title"
        }
          , v = {
            class: "data-info-card__description"
        }
          , g = {
            class: "data-info-card__image"
        }
          , h = ["src"]
          , b = {
            class: "data-info-card__info"
        }
          , y = {
            class: "data-info-card__title"
        }
          , k = {
            class: "data-info-card__description"
        }
          , f = {
            class: "data-info-card__right"
        }
          , S = {
            key: 0,
            class: "data-info-card__right-image"
        }
          , U = ["src"];
        var w = (0,
        l.aZ)({
            __name: "index",
            props: {
                paymentMethod: {
                    type: Object
                },
                size: {
                    type: String,
                    default: "m"
                },
                title: {
                    type: [String, Number],
                    default: ""
                },
                label: {
                    type: String,
                    default: ""
                },
                description: {
                    type: String,
                    default: ""
                },
                image: {
                    type: String,
                    default: ""
                },
                isPayment: {
                    type: Boolean,
                    default: !1
                },
                isBalance: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e) {
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", u, [e.label ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", c, (0,
                s.zw)(e.label), 1)) : (0,
                l.kq)("", !0), (0,
                l._)("div", {
                    class: (0,
                    s.C_)(["data-info-card", [`size_${e.size}`]])
                }, [(0,
                l._)("div", m, [e.isPayment || e.isBalance ? ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, {
                    key: 0
                }, [(0,
                l._)("div", d, [(0,
                l.Wm)(o.Z, {
                    name: "shoppingBasket",
                    type: "solid"
                })]), (0,
                l._)("div", p, [(0,
                l._)("div", _, (0,
                s.zw)(e.title), 1), (0,
                l._)("div", v, (0,
                s.zw)((0,
                i.SU)(r.d)(e.paymentMethod?.name) || e.paymentMethod?.name), 1)])], 64)) : ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, {
                    key: 1
                }, [(0,
                l._)("div", g, [(0,
                l._)("img", {
                    src: e.image,
                    alt: "cover"
                }, null, 8, h)]), (0,
                l._)("div", b, [(0,
                l._)("div", y, (0,
                s.zw)(e.title), 1), (0,
                l._)("div", k, (0,
                s.zw)(e.description), 1)])], 64))]), (0,
                l._)("div", f, [e.isPayment && e.paymentMethod ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", S, [(0,
                l._)("img", {
                    src: (0,
                    i.SU)(n.Bf)(e.paymentMethod?.iconName, e.paymentMethod?.iconType),
                    alt: "payment"
                }, null, 8, U)])) : (0,
                l.kq)("", !0), (0,
                l.Wm)(o.Z, {
                    class: "data-info-card__caret",
                    type: "solid",
                    name: "caretRight"
                })])], 2)]))
            }
        });
        const x = w;
        var Z = x
          , C = Z
    },
    76842: function(e, a, t) {
        "use strict";
        t.r(a),
        t.d(a, {
            default: function() {
                return lr
            }
        });
        t(57658);
        var l = t(73396)
          , s = t(44870)
          , i = t(22483)
          , o = t(96919)
          , n = t(92474)
          , r = t(13398)
          , u = t(90552)
          , c = t(65712)
          , m = t(29e3)
          , d = t.p + "img/art.23cf6b14.svg"
          , p = t(3139)
          , _ = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                return (e, a) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    class: "game-support-banner",
                    onClick: a[0] || (a[0] = (...e) => (0,
                    s.SU)(r.WB) && (0,
                    s.SU)(r.WB)(...e))
                }, [a[1] || (a[1] = (0,
                l.uE)('<div class="game-support-banner__body"><img class="game-support-banner__icon" src="' + d + '" alt="art"><div class="game-support-banner__description"><div class="title">Нет нужной игры?</div><div class="info">Обратись в поддержку!</div></div></div>', 1)), (0,
                l.Wm)((0,
                s.SU)(p.Z), {
                    class: "game-support-banner__arrow",
                    type: "solid",
                    name: "caretRight"
                })]))
            }
        });
        const v = _;
        var g = v
          , h = g;
        const b = {
            class: "method-form"
        }
          , y = {
            key: 0,
            class: "header-right"
        }
          , k = {
            class: "method-form__content"
        };
        var f = (0,
        l.aZ)({
            __name: "index",
            props: {
                methodName: {
                    default: ""
                },
                headerTitle: {
                    default: ""
                },
                headerDescription: {
                    default: ""
                },
                searchValue: {},
                headerIcon: {
                    default: "user"
                },
                isShowSearch: {
                    type: Boolean,
                    default: !1
                },
                method: {},
                isShowSupport: {
                    type: Boolean
                }
            },
            emits: ["update:search", "click:search"],
            setup(e, {emit: a}) {
                const t = a
                  , i = (0,
                s.iH)(!1)
                  , o = (0,
                n.b)();
                return (e, a) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", b, [(0,
                l.Wm)((0,
                s.SU)(c.Z), {
                    visible: i.value || !(0,
                    s.SU)(o).isTablet,
                    type: (0,
                    s.SU)(o).isMobile ? "primary" : "secondary",
                    icon: e.headerIcon,
                    title: e.headerTitle,
                    description: e.headerDescription
                }, {
                    default: (0,
                    l.w5)(( () => [e.isShowSearch ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", y, [(0,
                    l.Wm)((0,
                    s.SU)(m.Z), {
                        "model-value": e.searchValue,
                        placeholder: "Введите название",
                        "left-icon": "search",
                        state: "success",
                        class: "header-right__input",
                        "onUpdate:modelValue": a[0] || (a[0] = e => t("update:search", e)),
                        onClick: a[1] || (a[1] = e => t("click:search"))
                    }, null, 8, ["model-value"]), "superPass" === e.method ? ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(h), {
                        key: 0
                    })) : (0,
                    l.kq)("", !0)])) : (0,
                    l.kq)("", !0), e.isShowSupport ? ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(u.Z), {
                        key: 1,
                        class: "header-right__gamepass-support",
                        type: "outline",
                        "icon-type": "outline",
                        "left-icon": "headset",
                        size: "s",
                        "mobile-size": "s",
                        "is-uppercase-disabled": "",
                        onClick: (0,
                        s.SU)(r.WB)
                    }, {
                        default: (0,
                        l.w5)(( () => a[2] || (a[2] = [(0,
                        l.Uk)(" Нужна помощь? ")]))),
                        _: 1,
                        __: [2]
                    }, 8, ["onClick"])) : (0,
                    l.kq)("", !0)])),
                    _: 1
                }, 8, ["visible", "type", "icon", "title", "description"]), (0,
                l._)("div", k, [(0,
                l.WI)(e.$slots, "content")])]))
            }
        });
        const S = f;
        var U = S
          , w = U
          , x = t(87139)
          , Z = (0,
        l.aZ)({
            __name: "index",
            props: {
                text: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e) {
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    class: (0,
                    x.C_)(["step-bar", {
                        disabled: e.disabled
                    }])
                }, [(0,
                l.WI)(a.$slots, "default"), (0,
                l._)("span", null, (0,
                x.zw)(e.text), 1)], 2))
            }
        });
        const C = Z;
        var P = C
          , D = P;
        const j = {
            class: "method-way__content-wrapper"
        }
          , W = ["src"]
          , z = ["src"]
          , B = {
            class: "method-way__text"
        }
          , q = {
            class: "method-way__text__title"
        }
          , F = {
            class: "method-way__text__description"
        };
        var H = (0,
        l.aZ)({
            __name: "index",
            props: {
                way: {
                    type: String,
                    require: !0,
                    default: "cookie"
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e) {
                const a = e
                  , i = {
                    cookie: {
                        title: "Cookie-cпособ",
                        description: "Вам не требуется вводить код",
                        iconBgImage: "cookie-bg.svg",
                        iconImage: "cookie.svg"
                    },
                    "2fa": {
                        title: "2FA-способ",
                        description: "Требуется ввести логин и пароль от аккаунта",
                        iconBgImage: "2fa-bg.svg",
                        iconImage: "2fa.svg"
                    }
                }
                  , o = (0,
                l.Fl)(( () => t(18542)(`./${i[a.way].iconBgImage}`)))
                  , n = (0,
                l.Fl)(( () => t(18542)(`./${i[a.way].iconImage}`)))
                  , r = (0,
                l.Fl)(( () => i[a.way].title))
                  , u = (0,
                l.Fl)(( () => i[a.way].description));
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    class: (0,
                    x.C_)(["log-pass-method-way", {
                        disabled: e.disabled
                    }])
                }, [(0,
                l._)("div", j, [(0,
                l._)("img", {
                    class: "method-way__bg-image",
                    src: o.value,
                    alt: ""
                }, null, 8, W), (0,
                l._)("img", {
                    class: "method-way__image",
                    src: n.value,
                    alt: ""
                }, null, 8, z), (0,
                l._)("div", B, [(0,
                l._)("span", q, (0,
                x.zw)(r.value), 1), (0,
                l._)("span", F, (0,
                x.zw)(u.value), 1)]), (0,
                l.Wm)((0,
                s.SU)(p.Z), {
                    class: "method-way__arrow",
                    type: "solid",
                    name: "caretRight"
                })]), t[0] || (t[0] = (0,
                l._)("div", {
                    class: "method-way__error-message"
                }, "Способ временно недоступен", -1))], 2))
            }
        });
        const M = H;
        var A = M
          , O = A
          , I = t(49242)
          , R = (0,
        l.aZ)({
            __name: "closeButton",
            props: {
                size: {
                    type: String
                }
            },
            setup(e) {
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    class: (0,
                    x.C_)(["close-button", e.size])
                }, [(0,
                l.Wm)((0,
                s.SU)(p.Z), {
                    type: "outline",
                    name: "close"
                })], 2))
            }
        });
        const T = R;
        var N = T
          , G = N
          , V = t(90746);
        const E = {
            class: "video-block__video-wrapper"
        }
          , L = ["src"];
        var Y = (0,
        l.aZ)({
            __name: "index",
            props: {
                videoUrl: {
                    type: String,
                    required: !0
                }
            },
            setup(e) {
                const a = (0,
                s.iH)(!1)
                  , t = (0,
                s.iH)(!1)
                  , i = (0,
                s.iH)(null)
                  , o = () => {
                    a.value || (a.value = !0)
                }
                  , n = () => {
                    !t.value && i.value ? i.value.play() : i.value && i.value.pause(),
                    t.value = !t.value
                }
                  , r = () => {
                    a.value = !1,
                    i.value && (i.value.pause(),
                    t.value = !1,
                    i.value.currentTime = 0)
                }
                  , u = () => {
                    i.value && (i.value.pause(),
                    t.value = !1)
                }
                ;
                return (c, m) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    class: (0,
                    x.C_)(["video-block", {
                        fullscreen: a.value
                    }])
                }, [(0,
                l._)("div", E, [(0,
                l._)("div", {
                    class: "video-block__video-container",
                    onClick: o
                }, [t.value ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(V.Z), {
                    key: 0,
                    class: "video-block__play-btn",
                    onClick: n
                })), (0,
                l.Wm)((0,
                s.SU)(G), {
                    class: "video-block__close-btn",
                    onClick: (0,
                    I.iM)(r, ["stop"])
                }), (0,
                l._)("video", {
                    src: e.videoUrl,
                    ref_key: "video",
                    ref: i,
                    onClick: u
                }, null, 8, L)])])], 2))
            }
        });
        const $ = Y;
        var K = $
          , J = K;
        const X = {
            class: "cookie-input"
        }
          , Q = {
            class: "cookie-input__header"
        };
        var ee = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = (0,
                s.iH)("")
                  , t = (0,
                s.iH)("default")
                  , i = (0,
                s.iH)(!1);
                return (e, o) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", X, [(0,
                l._)("div", Q, [(0,
                l.Wm)((0,
                s.SU)(m.Z), {
                    modelValue: a.value,
                    "onUpdate:modelValue": o[0] || (o[0] = e => a.value = e),
                    class: "cookie-input__input",
                    placeholder: "Введите cookie",
                    "left-icon": "palette",
                    state: t.value,
                    disabled: i.value
                }, null, 8, ["modelValue", "state", "disabled"]), (0,
                l.Wm)((0,
                s.SU)(u.Z), {
                    class: "cookie-input__button",
                    "right-icon": "arrowRight",
                    loading: i.value
                }, {
                    default: (0,
                    l.w5)(( () => o[1] || (o[1] = [(0,
                    l.Uk)(" ДАЛЕЕ ")]))),
                    _: 1,
                    __: [1]
                }, 8, ["loading"])]), o[2] || (o[2] = (0,
                l._)("div", {
                    class: "cookie-input__content"
                }, [(0,
                l._)("div", {
                    class: "cookie-input__image"
                }, [(0,
                l._)("span", null, "Тут должен быть арт, но его не завезли :(")]), (0,
                l._)("div", {
                    class: "cookie-input__text"
                }, [(0,
                l.Uk)(" Сами по себе куки не опасны — это обычные текстовые файлы. Они не могут запускать процессы на компьютере и вообще взаимодействовать с операционной системой. Но их могут попытаться перехватить или украсть, чтобы отследить ваши предыдущие действия в сети или входить в ваши аккаунты без авторизации. "), (0,
                l._)("br"), (0,
                l._)("br"), (0,
                l.Uk)(" Обычно информацию, которую записывают в куки, зашифровывают перед отправкой, а сами куки передают по HTTPS-протоколу. Это помогает защитить пользовательские данные, но за внедрение шифрования и безопасную отправку отвечает разработчик сайта. Посетителям остаётся только надеяться, что всё настроили грамотно. Со своей стороны пользователь может только запретить браузеру использовать куки или время от времени чистить их самостоятельно. ")])], -1))]))
            }
        });
        const ae = ee;
        var te = ae
          , le = te;
        const se = {
            class: "cookie-form-content"
        };
        var ie = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                return (e, a) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", se, [(0,
                l.Wm)((0,
                s.SU)(J), {
                    "video-url": "https://www.w3schools.com/html/mov_bbb.mp4"
                }), (0,
                l.Wm)((0,
                s.SU)(le))]))
            }
        });
        const oe = ie;
        var ne = oe
          , re = ne
          , ue = t(28154)
          , ce = t(74849)
          , me = t(69286)
          , de = t(93335)
          , pe = t.p + "img/fencing.6d6559c8.svg"
          , _e = t.p + "img/medal.c02aa996.svg"
          , ve = t.p + "img/lightning.713da8e6.svg";
        const ge = {
            class: "transfer-card__icon"
        }
          , he = {
            key: 0,
            src: pe
        }
          , be = {
            key: 1,
            src: _e
        }
          , ye = {
            class: "transfer-card__text"
        }
          , ke = {
            class: "transfer-card__text__title"
        }
          , fe = {
            class: "transfer-card__text__description"
        }
          , Se = {
            key: 0,
            class: "transfer-card__active-icon",
            src: ve
        };
        Boolean;
        var Ue = t(2130)
          , we = t(64418)
          , xe = t(21842)
          , Ze = t(27085)
          , Ce = t(63315)
          , Pe = t(66039)
          , De = t(52710);
        const je = {
            key: 0,
            class: "purchase-form__transfer-method"
        }
          , We = {
            class: "purchase-form__amount"
        }
          , ze = {
            class: "purchase-form__amount__in-stock"
        }
          , Be = {
            class: "form-description"
        }
          , qe = {
            class: "purchase-form__footer"
        }
          , Fe = {
            class: "purchase-form__transfer-method"
        }
          , He = {
            class: "purchase-form__transfer-method__items"
        }
          , Me = {
            key: 0,
            class: "purchase-form__amount-gift"
        }
          , Ae = {
            class: "purchase-form__footer"
        }
          , Oe = {
            class: "purchase-form__amount"
        }
          , Ie = {
            class: "purchase-form__footer"
        };
        var Re = (0,
        l.aZ)({
            __name: "index",
            props: {
                method: {
                    type: String,
                    default: "logpass"
                },
                nickname: {
                    type: String,
                    default: ""
                },
                place: {
                    type: String,
                    default: ""
                },
                plugin: {
                    type: String,
                    default: ""
                },
                rbxAmountInStock: {
                    type: String,
                    default: ""
                },
                gift: {
                    type: Object
                },
                ageLimit: {
                    type: Number
                },
                isLoading: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["submit", "submit:gift", "submit:superPass", "submit:market", "back"],
            setup(e, {emit: a}) {
                const t = e
                  , i = a
                  , o = (0,
                s.iH)(!1)
                  , n = ((0,
                s.iH)("gamepass"),
                (0,
                s.iH)("default"))
                  , r = (0,
                s.iH)("")
                  , c = (0,
                s.iH)(Pe.R)
                  , {goToNextAuthStep: d} = (0,
                xe.P)()
                  , p = (0,
                Ze.useTransferPurchaseStore)()
                  , _ = (0,
                Ce.G)()
                  , {validateGift: v} = (0,
                De.f)((0,
                s.iH)(null), (0,
                s.iH)(null), (0,
                s.iH)(0));
                (0,
                l.bv)(( () => {
                    o.value = !1
                }
                ));
                (0,
                l.Fl)(( () => "transfer" === t.method ? c.value && t.nickname && t.place : "fastpass" === t.method && (c.value && t.nickname && t.plugin)));
                const g = () => {
                    const e = c.value > 1 ? [] : ["сумма"]
                      , a = t.nickname ? [] : ["никнейм"]
                      , l = t.place ? [] : ["плейс"]
                      , s = [...e, ...a, ...l]
                      , i = !s.length;
                    return i || _.setNotification({
                        description: `Необходимо заполнить данные: ${s.join(", ")}`,
                        title: "Внимание!",
                        type: "error"
                    }),
                    i
                }
                  , h = () => {
                    const e = !!t.nickname;
                    return e || _.setNotification({
                        description: "Введите никнейм и выберите персонажа",
                        title: "Внимание!",
                        type: "error"
                    }),
                    e
                }
                  , b = async () => {
                    if (!d())
                        return;
                    if ("gift" === t.method) {
                        if (!v(t.gift))
                            return;
                        return void i("submit:gift")
                    }
                    if ("superPass" === t.method) {
                        if (!h())
                            return;
                        return void i("submit:superPass")
                    }
                    if ("market" === t.method) {
                        if (!h())
                            return;
                        return void i("submit:market")
                    }
                    if (!g())
                        return;
                    r.value = "";
                    const {error: e, validAmount: a} = (0,
                    we.a)(c.value, +t.rbxAmountInStock);
                    a && (c.value = a),
                    e ? r.value = e : ["transfer", "fastpass"].includes(t.method) && i("submit", c.value)
                }
                ;
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    class: (0,
                    x.C_)(["purchase-form", e.method])
                }, ["transfer" === e.method ? ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, {
                    key: 0
                }, ["transfer" === e.method ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", je, [t[5] || (t[5] = (0,
                l._)("div", {
                    class: "purchase-form__transfer-method__header"
                }, [(0,
                l._)("span", {
                    class: "form-title"
                }, "Способ и сумма покупки"), (0,
                l._)("span", {
                    class: "form-description"
                }, " Выберите способ покупки и введите сумму робуксов ")], -1)), (0,
                l.kq)("", !0)])) : (0,
                l.kq)("", !0), (0,
                l._)("div", We, [t[7] || (t[7] = (0,
                l._)("div", {
                    class: "purchase-form__amount__top-line"
                }, null, -1)), (0,
                l._)("div", ze, [t[6] || (t[6] = (0,
                l._)("span", {
                    class: "form-title"
                }, "В наличии:", -1)), (0,
                l._)("span", Be, (0,
                x.zw)(e.rbxAmountInStock) + " R$", 1)]), (0,
                l.Wm)((0,
                s.SU)(me.Z), {
                    amount: c.value,
                    onChange: t[1] || (t[1] = e => c.value = e),
                    "show-promo": "",
                    "promo-bonus": (0,
                    s.SU)(p).promoCode.bonus,
                    rate: (0,
                    s.SU)(p).rate
                }, null, 8, ["amount", "promo-bonus", "rate"])]), (0,
                l._)("div", qe, ["error" === n.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(de.Z), {
                    key: 0,
                    type: "error",
                    text: r.value
                }, null, 8, ["text"])) : (0,
                l.kq)("", !0), r.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(de.Z), {
                    key: 1,
                    type: "error",
                    text: r.value
                }, null, 8, ["text"])) : (0,
                l.kq)("", !0), (0,
                l.Wm)((0,
                s.SU)(ce.Z), {
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: t[2] || (t[2] = e => i("back"))
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        class: "purchase-form__button",
                        loading: o.value,
                        "right-icon": "arrowRight",
                        size: "l",
                        "mobile-size": "l",
                        onClick: b
                    }, {
                        default: (0,
                        l.w5)(( () => t[8] || (t[8] = [(0,
                        l.Uk)(" ДАЛЕЕ ")]))),
                        _: 1,
                        __: [8]
                    }, 8, ["loading"])])),
                    _: 1
                })])], 64)) : (0,
                l.kq)("", !0), "gift" === e.method ? ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, {
                    key: 1
                }, [(0,
                l._)("div", Fe, [t[9] || (t[9] = (0,
                l._)("div", {
                    class: "purchase-form__transfer-method__header gift"
                }, [(0,
                l._)("span", {
                    class: "form-title"
                }, "Выбранная подарочная карта Роблокс:")], -1)), (0,
                l._)("div", He, [e.gift ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Ue.Z), {
                    key: 0,
                    amount: e.gift.robux_amount,
                    price: e.gift.price,
                    "is-static": ""
                }, null, 8, ["amount", "price"])) : (0,
                l.kq)("", !0)])]), e.gift ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", Me, [(0,
                l.Wm)((0,
                s.SU)(m.Z), {
                    class: "robux-input__input",
                    state: "success",
                    placeholder: "Робуксы",
                    type: "number",
                    "left-icon": "robux",
                    theme: "primary",
                    "model-value": e.gift?.robux_amount,
                    inactive: ""
                }, null, 8, ["model-value"]), (0,
                l.Wm)((0,
                s.SU)(m.Z), {
                    class: "robux-input__input",
                    state: "success",
                    placeholder: "К оплате",
                    type: "number",
                    "left-icon": "wallet",
                    theme: "primary",
                    "model-value": e.gift?.price,
                    inactive: ""
                }, null, 8, ["model-value"])])) : (0,
                l.kq)("", !0), (0,
                l._)("div", Ae, ["error" === n.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(de.Z), {
                    key: 0,
                    type: "error",
                    text: r.value
                }, null, 8, ["text"])) : (0,
                l.kq)("", !0), r.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(de.Z), {
                    key: 1,
                    type: "error",
                    text: r.value
                }, null, 8, ["text"])) : (0,
                l.kq)("", !0), (0,
                l.Wm)((0,
                s.SU)(ce.Z), {
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: t[3] || (t[3] = e => i("back"))
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        class: "purchase-form__button",
                        loading: o.value,
                        "right-icon": "arrowRight",
                        size: "l",
                        "mobile-size": "l",
                        onClick: b
                    }, {
                        default: (0,
                        l.w5)(( () => t[10] || (t[10] = [(0,
                        l.Uk)(" ДАЛЕЕ ")]))),
                        _: 1,
                        __: [10]
                    }, 8, ["loading"])])),
                    _: 1
                })])], 64)) : (0,
                l.kq)("", !0), "superPass" === e.method || "market" === e.method ? ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, {
                    key: 2
                }, [t[12] || (t[12] = (0,
                l._)("div", {
                    class: "purchase-form__transfer-method"
                }, [(0,
                l._)("div", {
                    class: "purchase-form__transfer-method__header"
                }, [(0,
                l._)("span", {
                    class: "form-title"
                }, "Выбор никнейма"), (0,
                l._)("span", {
                    class: "form-description"
                }, "Информация об игроке")])], -1)), (0,
                l._)("div", Oe, [(0,
                l.Wm)((0,
                s.SU)(m.Z), {
                    "left-icon": "user",
                    placeholder: "Никнейм не выбран",
                    type: "text",
                    theme: "primary",
                    state: e.nickname ? "success" : "default",
                    "model-value": e.nickname,
                    inactive: "",
                    "highlight-success-body": ""
                }, null, 8, ["state", "model-value"])]), (0,
                l._)("div", Ie, ["error" === n.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(de.Z), {
                    key: 0,
                    type: "error",
                    text: r.value
                }, null, 8, ["text"])) : (0,
                l.kq)("", !0), r.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(de.Z), {
                    key: 1,
                    type: "error",
                    text: r.value
                }, null, 8, ["text"])) : (0,
                l.kq)("", !0), (0,
                l.Wm)((0,
                s.SU)(ce.Z), {
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: t[4] || (t[4] = e => i("back"))
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        class: "purchase-form__button",
                        loading: o.value || e.isLoading,
                        "right-icon": "arrowRight",
                        size: "l",
                        "mobile-size": "l",
                        onClick: b
                    }, {
                        default: (0,
                        l.w5)(( () => t[11] || (t[11] = [(0,
                        l.Uk)(" ДАЛЕЕ ")]))),
                        _: 1,
                        __: [11]
                    }, 8, ["loading"])])),
                    _: 1
                })])], 64)) : (0,
                l.kq)("", !0)], 2))
            }
        });
        const Te = Re;
        var Ne = Te
          , Ge = Ne
          , Ve = t(66184)
          , Ee = t(65646)
          , Le = t(22329)
          , Ye = t(92695);
        const $e = {
            key: 0,
            class: "logpass__purchase-method"
        }
          , Ke = {
            key: 2,
            class: "logpass__purchase-form"
        }
          , Je = {
            key: 3,
            class: "logpass__payment"
        }
          , Xe = {
            key: 4,
            class: "logpass__orders"
        };
        var Qe = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = (0,
                s.iH)(1)
                  , t = (0,
                s.iH)("cookie")
                  , i = (0,
                s.iH)([{
                    imgName: "binocular",
                    headerTitle: "Выбор способа покупки",
                    headerDescription: "Вы можете выбрать любой удобный для вас cпособ покупки через метод Log+Pass"
                }, {
                    cookie: {
                        imgName: "cookie",
                        headerTitle: "Ознакомление с инструкцией и ввод cookie",
                        headerDescription: "Внимательно посмотрите инструкцию и введите cookie для продолжения покупки"
                    },
                    userData: {
                        imgName: "contacts",
                        headerTitle: "Введите данные Вашего аккаунта",
                        headerDescription: "Пожалуйста, введите корректные данные, чтобы избежать ошибок"
                    }
                }, {
                    imgName: "robux",
                    headerTitle: "Покупка и оплата",
                    headerDescription: "На данном этапе Вам необходимо выбрать платежный метод и провести покупку"
                }, {
                    imgName: "checkedBox",
                    headerTitle: "Выполнение заказа",
                    headerDescription: "Платеж прошел успешно и теперь заказ выполняется."
                }])
                  , o = (0,
                l.Fl)(( () => "cookie" === t.value ? "Ввод cookie" : "Ввод данных"))
                  , n = (0,
                l.Fl)(( () => {
                    const e = {
                        imgName: "binocular",
                        headerTitle: "",
                        headerDescription: ""
                    }
                      , l = a.value - 1;
                    for (const s in e)
                        2 === a.value ? e[s] = i.value[l][t.value][s] : e[s] = i.value[l][s];
                    return e
                }
                ))
                  , r = e => {
                    t.value = e,
                    a.value = 2
                }
                ;
                return (e, i) => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(w), {
                    "method-name": "Log+Pass",
                    "header-title": n.value.headerTitle,
                    "header-description": n.value.headerDescription,
                    "header-icon": n.value.imgName
                }, {
                    steps: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(D), {
                        text: "Выбор способа"
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Wm)((0,
                        s.SU)(p.Z), {
                            name: "binocular",
                            type: "solid"
                        })])),
                        _: 1
                    }), t.value && a.value > 1 ? ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(D), {
                        key: 0,
                        text: o.value
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Wm)((0,
                        s.SU)(p.Z), {
                            name: "cookie" === t.value ? "cookie" : "contacts",
                            type: "solid"
                        }, null, 8, ["name"])])),
                        _: 1
                    }, 8, ["text"])) : (0,
                    l.kq)("", !0), (0,
                    l.Wm)((0,
                    s.SU)(D), {
                        text: "Покупка робусов",
                        disabled: a.value < 3
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Wm)((0,
                        s.SU)(p.Z), {
                            name: "robux",
                            type: "solid"
                        })])),
                        _: 1
                    }, 8, ["disabled"]), (0,
                    l.Wm)((0,
                    s.SU)(D), {
                        text: "Выполнение заказа",
                        disabled: a.value < 4
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Wm)((0,
                        s.SU)(p.Z), {
                            name: "checkedBox",
                            type: "solid"
                        })])),
                        _: 1
                    }, 8, ["disabled"])])),
                    content: (0,
                    l.w5)(( () => [1 === a.value ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", $e, [(0,
                    l.Wm)((0,
                    s.SU)(O), {
                        way: "cookie",
                        onClick: i[0] || (i[0] = e => r("cookie")),
                        disabled: !1
                    }), (0,
                    l.Wm)((0,
                    s.SU)(O), {
                        way: "2fa",
                        onClick: i[1] || (i[1] = e => r("userData")),
                        disabled: !1
                    })])) : (0,
                    l.kq)("", !0), 2 === a.value && "cookie" === t.value ? ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(re), {
                        key: 1
                    })) : (0,
                    l.kq)("", !0), 2 === a.value && "userData" === t.value ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", Ke, [(0,
                    l.Wm)((0,
                    s.SU)(ue.Z)), (0,
                    l.Wm)((0,
                    s.SU)(Ge), {
                        method: "logpass"
                    })])) : (0,
                    l.kq)("", !0), 3 === a.value ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", Je, [(0,
                    l.Wm)((0,
                    s.SU)(Ve.Z), {
                        "on-select": e => {}
                    }), (0,
                    l.Wm)((0,
                    s.SU)(Ee.Z), {
                        purchaseMethod: "logpass"
                    })])) : (0,
                    l.kq)("", !0), 4 === a.value ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", Xe, [(0,
                    l.Wm)((0,
                    s.SU)(Ye.Z)), (0,
                    l.Wm)((0,
                    s.SU)(Le.Z))])) : (0,
                    l.kq)("", !0)])),
                    _: 1
                }, 8, ["header-title", "header-description", "header-icon"]))
            }
        });
        const ea = Qe;
        var aa = ea
          , ta = aa
          , la = t(18920)
          , sa = t(26413)
          , ia = t(79958)
          , oa = t(55694)
          , na = t(9785)
          , ra = t(84155)
          , ua = t(45106)
          , ca = t(45034)
          , ma = t(61020)
          , da = t(23923);
        const pa = {
            class: "mobile-roblox-accounts"
        }
          , _a = {
            key: 0,
            class: "mobile-roblox-accounts__input-account"
        }
          , va = {
            key: 0,
            class: "mobile-roblox-accounts__items"
        }
          , ga = {
            key: 1,
            class: "roblox-accounts__loader"
        }
          , ha = {
            key: 2,
            class: "roblox-accounts__loader"
        }
          , ba = {
            key: 3,
            class: "roblox-accounts__loader"
        }
          , ya = {
            key: 1,
            class: "mobile-roblox-accounts__input-password"
        }
          , ka = {
            class: "mobile-roblox-accounts__input-password__footer"
        }
          , fa = {
            key: 2,
            class: "mobile-roblox-accounts__input-place"
        }
          , Sa = {
            key: 2,
            class: "roblox-accounts__places__loader"
        }
          , Ua = {
            key: 3,
            class: "mobile-roblox-accounts__input-place"
        }
          , wa = {
            class: "mobile-roblox-accounts__items"
        };
        var xa = (0,
        l.aZ)({
            __name: "index",
            props: {
                type: {
                    type: String,
                    default: "withPlace",
                    required: !0
                },
                selectedUser: {
                    type: Object,
                    default: null
                },
                selectedPlugin: {
                    type: Object,
                    default: null
                },
                selectedPlace: {
                    type: Object,
                    default: null
                },
                method: {
                    type: String,
                    default: "transfer"
                },
                isLoading: {
                    type: Boolean,
                    default: !1
                },
                robuxAmount: {
                    type: Number,
                    default: 0
                }
            },
            emits: ["onAccountInput", "onPasswordInput", "onPlaceInput", "onPluginInput", "reset", "back", "submit"],
            setup(e, {emit: a}) {
                const t = a
                  , i = (0,
                n.b)()
                  , o = e
                  , r = (0,
                s.iH)(!1)
                  , c = (0,
                s.iH)(!1)
                  , d = (0,
                s.iH)(!1)
                  , p = (0,
                s.iH)("")
                  , _ = (0,
                s.iH)("")
                  , v = (0,
                s.iH)()
                  , g = (0,
                s.iH)("")
                  , h = (0,
                s.iH)("account")
                  , b = (0,
                s.iH)(!1)
                  , y = (0,
                s.iH)(!1)
                  , k = (0,
                s.iH)([])
                  , f = (0,
                s.iH)([])
                  , {uniqueNamesList: S} = (0,
                ra.U)()
                  , U = (0,
                Ze.useTransferPurchaseStore)()
                  , {placesList: w, accountId: Z} = (0,
                ma.Jk)(U);
                async function C(e) {
                    r.value = !0,
                    y.value = !1,
                    w.value = await la.f.getPlaces(e),
                    y.value = !0,
                    r.value = !1
                }
                async function P(e) {
                    r.value = !0;
                    const a = await ua.b.pending.getPlugins(e.toString());
                    r.value = !1,
                    a && (f.value = a)
                }
                function D(e) {
                    "withPlugin" === o.type && (h.value = "plugin"),
                    "withPassword" === o.type && (h.value = "password"),
                    j(null),
                    w.value = [],
                    _.value = e,
                    Z.value = e.user_id.toString(),
                    t("onAccountInput", e),
                    "transfer" === o.method && C(e.user_id),
                    "fastpass" === o.method && P(e.user_id)
                }
                function j(e) {
                    i.isMobile || t("onPlaceInput", e),
                    v.value = e
                }
                function W(e) {
                    t("onPluginInput", e)
                }
                function z() {
                    g.value = "",
                    h.value = "account",
                    t("reset")
                }
                async function B() {
                    if ("withPass" !== o.type) {
                        if (v.value && "place" === h.value && t("onPlaceInput", v.value),
                        "withPlace" === o.type) {
                            if ("transfer" === o.method && "account" === h.value && _.value?.name) {
                                const e = await U.getPurchasesSum(_.value.name) + Number(o.robuxAmount) > 5e3;
                                e && (da.c?.send("modal_warningban_shown", {}),
                                U.showModal("warningOneMethod"))
                            }
                            h.value = "place"
                        }
                    } else
                        t("submit")
                }
                async function q() {
                    window.open("https://create.roblox.com/dashboard/creations", "_blank")
                }
                function F() {
                    "account" === h.value && t("back"),
                    "place" === h.value && (h.value = "account")
                }
                return (0,
                l.YP)(p, ( (e, a) => {
                    e && e !== a ? (d.value = !0,
                    k.value = []) : e || (d.value = !1,
                    k.value = [])
                }
                )),
                (0,
                sa.B_)(p, ( () => {
                    p.value.length > 0 ? (d.value = !1,
                    c.value = !0,
                    la.f.getUsers(p.value).then((e => {
                        k.value = e
                    }
                    )).catch((e => {
                        console.error("Failed to fetch users:", e),
                        k.value = []
                    }
                    )).finally(( () => {
                        c.value = !1
                    }
                    ))) : d.value = !1
                }
                ), {
                    debounce: 1e3,
                    maxWait: 8e3
                }),
                (0,
                l.YP)(k, (e => {
                    if (e.length > 0) {
                        const a = e.filter((e => e.name === p.value))[0];
                        a && D(a)
                    }
                }
                )),
                (a, i) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", pa, ["account" === h.value ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", _a, [(0,
                l.Wm)((0,
                s.SU)(m.Z), {
                    bold: "",
                    placeholder: "Никнейм Roblox",
                    "left-icon": "user",
                    theme: "secondary",
                    class: "mobile-roblox-accounts__input",
                    modelValue: p.value,
                    "onUpdate:modelValue": i[0] || (i[0] = e => p.value = e)
                }, null, 8, ["modelValue"]), (0,
                l.Wm)((0,
                s.SU)(na.Z), {
                    accounts: (0,
                    s.SU)(S),
                    "roblox-nickname": p.value,
                    onOnClick: i[1] || (i[1] = e => p.value = e)
                }, null, 8, ["accounts", "roblox-nickname"]), !d.value && !c.value && k.value.length > 0 ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", va, [((0,
                l.wg)(!0),
                (0,
                l.iD)(l.HY, null, (0,
                l.Ko)(k.value, (a => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ia.Z), {
                    key: a.id,
                    name: a.name,
                    active: a.user_id === e.selectedUser?.user_id,
                    "account-img-path": a.imageUrl,
                    type: "account",
                    onClick: () => D(a)
                }, null, 8, ["name", "active", "account-img-path", "onClick"])))), 128))])) : (d.value || c.value) && p.value.length > 0 ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", ga, " Идет поиск аккаунтов... ")) : !d.value && !c.value && p.value.length > 0 && 0 === k.value.length ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", ha, [(0,
                l.Wm)((0,
                s.SU)(ca.Z), {
                    type: "users"
                }, {
                    text: (0,
                    l.w5)(( () => i[4] || (i[4] = [(0,
                    l.Uk)("Пользователь не найден")]))),
                    _: 1
                })])) : d.value || c.value || 0 !== p.value.length ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.iD)("div", ba, [(0,
                l.Wm)((0,
                s.SU)(ca.Z), {
                    type: "users"
                }, {
                    text: (0,
                    l.w5)(( () => i[5] || (i[5] = [(0,
                    l.Uk)("Введите никнейм")]))),
                    _: 1
                })]))])) : (0,
                l.kq)("", !0), "password" === h.value ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", ya, [(0,
                l.Wm)((0,
                s.SU)(ia.Z), {
                    name: _.value,
                    rightIcon: "editAlt",
                    "on-right-icon-click": z
                }, null, 8, ["name"]), (0,
                l.Wm)((0,
                s.SU)(m.Z), {
                    placeholder: "Пароль от аккаунта",
                    theme: "secondary",
                    modelValue: g.value,
                    "onUpdate:modelValue": i[2] || (i[2] = e => g.value = e),
                    "left-icon": "key",
                    password: !0
                }, null, 8, ["modelValue"]), (0,
                l._)("div", ka, [b.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(de.Z), {
                    key: 0,
                    text: "Неверный пароль!"
                })) : (0,
                l.kq)("", !0), i[6] || (i[6] = (0,
                l._)("span", {
                    class: "mobile-roblox-accounts__input-password__footer__text"
                }, " Мы гарантируем конфиденциальность предоставляемых вами данных и запрашиваем пароль исключительно в целях предоставления возможности пополнения. ", -1))]), (0,
                l.Wm)((0,
                s.SU)(u.Z), {
                    "right-icon": "arrowRight",
                    size: "l",
                    "mobile-size": "l",
                    loading: r.value,
                    class: "mobile-roblox-accounts__input-password__button"
                }, {
                    default: (0,
                    l.w5)(( () => i[7] || (i[7] = [(0,
                    l.Uk)(" ПРОДОЛЖИТЬ ")]))),
                    _: 1,
                    __: [7]
                }, 8, ["loading"])])) : (0,
                l.kq)("", !0), "place" === h.value ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", fa, [(0,
                l.Wm)((0,
                s.SU)(ia.Z), {
                    name: e.selectedUser?.name,
                    "account-img-path": e.selectedUser?.imageUrl,
                    rightIcon: "editAlt",
                    "on-right-icon-click": z
                }, null, 8, ["name", "account-img-path"]), i[10] || (i[10] = (0,
                l._)("div", {
                    class: "mobile-roblox-accounts__input-place__line"
                }, null, -1)), (0,
                l._)("div", {
                    class: (0,
                    x.C_)(["mobile-roblox-accounts__items", (0,
                    s.SU)(w).length ? "" : " mobile-roblox-accounts__items-empty"])
                }, [(0,
                s.SU)(w).length ? ((0,
                l.wg)(!0),
                (0,
                l.iD)(l.HY, {
                    key: 0
                }, (0,
                l.Ko)((0,
                s.SU)(w), (e => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ia.Z), {
                    active: e.placeId === v.value?.placeId,
                    key: e.placeId,
                    name: e.name,
                    "account-img-path": e.imageUrl,
                    type: "place",
                    onClick: () => j(e)
                }, null, 8, ["active", "name", "account-img-path", "onClick"])))), 128)) : r.value || (0,
                s.SU)(w).length ? r.value ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", Sa, " Идет поиск плейсов... ")) : (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ca.Z), {
                    key: 1,
                    type: "users"
                }, {
                    text: (0,
                    l.w5)(( () => [i[9] || (i[9] = (0,
                    l.Uk)(" Не нашли публичных плейсов у этого персонажа ")), "place" === h.value ? ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(u.Z), {
                        key: 0,
                        class: "mobile-roblox-accounts__places__button",
                        size: "l",
                        type: "outline",
                        onClick: q
                    }, {
                        default: (0,
                        l.w5)(( () => i[8] || (i[8] = [(0,
                        l.Uk)(" Посмотреть мои плейсы ")]))),
                        _: 1,
                        __: [8]
                    })) : (0,
                    l.kq)("", !0)])),
                    _: 1
                }))], 2)])) : (0,
                l.kq)("", !0), (0,
                l.Wm)(oa.Z, {
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: F
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        "right-icon": "arrowRight",
                        size: "l",
                        "mobile-size": "l",
                        class: "mobile-roblox-accounts__input-place__button",
                        disabled: "account" === h.value ? !e.selectedUser : !v.value,
                        loading: e.isLoading,
                        onClick: B
                    }, {
                        default: (0,
                        l.w5)(( () => i[11] || (i[11] = [(0,
                        l.Uk)(" ВЫБРАТЬ ")]))),
                        _: 1,
                        __: [11]
                    }, 8, ["disabled", "loading"])])),
                    _: 1
                }), "plugin" === h.value ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", Ua, [(0,
                l.Wm)((0,
                s.SU)(ia.Z), {
                    name: e.selectedUser?.name,
                    "account-img-path": e.selectedUser?.imageUrl,
                    rightIcon: "editAlt",
                    "on-right-icon-click": z
                }, null, 8, ["name", "account-img-path"]), i[13] || (i[13] = (0,
                l._)("div", {
                    class: "mobile-roblox-accounts__input-place__line"
                }, null, -1)), (0,
                l._)("div", wa, [((0,
                l.wg)(!0),
                (0,
                l.iD)(l.HY, null, (0,
                l.Ko)(f.value, (a => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ia.Z), {
                    key: a.assetId,
                    name: a.assetName,
                    active: a.assetId === e.selectedPlugin?.assetId,
                    onClick: () => W(a),
                    type: "place"
                }, null, 8, ["name", "active", "onClick"])))), 128))]), _.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(u.Z), {
                    key: 0,
                    "right-icon": "arrowRight",
                    size: "l",
                    class: "mobile-roblox-accounts__input-place__button",
                    disabled: !e.selectedPlugin,
                    onClick: i[3] || (i[3] = a => t("onPluginInput", e.selectedPlugin))
                }, {
                    default: (0,
                    l.w5)(( () => i[12] || (i[12] = [(0,
                    l.Uk)(" ВЫБРАТЬ ")]))),
                    _: 1,
                    __: [12]
                }, 8, ["disabled"])) : (0,
                l.kq)("", !0)])) : (0,
                l.kq)("", !0)]))
            }
        });
        const Za = xa;
        var Ca = Za
          , Pa = Ca
          , Da = t(50915)
          , ja = t(61354)
          , Wa = t(45315)
          , za = t(15818);
        const Ba = {
            class: "mobile-purchase-form"
        }
          , qa = {
            key: 0,
            class: "mobile-purchase-form__gift-inputs"
        }
          , Fa = {
            class: "mobile-purchase-form__payment-system"
        }
          , Ha = {
            class: "mobile-purchase-form__payment-system__header"
        }
          , Ma = {
            class: "mobile-purchase-form__payment-system__content"
        }
          , Aa = {
            key: 4,
            class: "mobile-purchase-form__amount"
        }
          , Oa = {
            class: "mobile-purchase-form__footer"
        }
          , Ia = {
            class: "mobile-purchase-form__agreement"
        }
          , Ra = {
            class: "mobile-purchase-form__agreement__text"
        }
          , Ta = "Время выполнения заказа может быть увеличено."
          , Na = "Актуальное время ожидания робуксов - 5 дней (120 часов)";
        var Ga = (0,
        l.aZ)({
            __name: "index",
            props: {
                robuxAmount: {
                    type: Number,
                    default: 0
                },
                method: {
                    type: String,
                    default: "logpass"
                },
                payFromBalance: {
                    type: Boolean,
                    default: !1
                },
                paymentMethod: {
                    type: Object
                },
                loading: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                premiumOffer: {
                    type: Object,
                    default: () => ({
                        currencyAmount: 0,
                        robuxAmount: 0,
                        currency: "rub"
                    })
                },
                amountToReplenishBalance: {
                    type: Number,
                    default: 0
                },
                rate: {
                    type: Number,
                    default: 0
                },
                promoBonus: {
                    type: Number,
                    default: 0
                },
                gift: {
                    type: Object,
                    default: () => {}
                },
                methodValidate: {
                    type: Function,
                    default: () => !0
                }
            },
            emits: ["submit:balance", "submit:paymentSystem", "select:paymentMethod", "input:email", "checkPromo:error", "back"],
            setup(e, {emit: a}) {
                const t = e
                  , i = a
                  , o = (0,
                Ze.useTransferPurchaseStore)()
                  , {applyPromo: n, resetPromo: c} = (0,
                za.T)()
                  , d = (0,
                Ce.G)()
                  , _ = (0,
                s.iH)("")
                  , v = (0,
                s.iH)(!1)
                  , g = (0,
                s.iH)(!1)
                  , h = (0,
                l.Fl)(( () => !b.value && !o.promoCode.isFree));
                (0,
                l.bv)(( () => {
                    _.value = t.robuxAmount,
                    t.payFromBalance || (v.value = !0)
                }
                ));
                const b = (0,
                l.Fl)(( () => {
                    const e = t.payFromBalance ? 1 : t.paymentMethod?.tax;
                    return 1 !== e && !e || !f.value ? "" : (0,
                    r.Pd)(f.value, e, t.paymentMethod?.simpleCalculation)
                }
                ))
                  , y = (0,
                l.Fl)(( () => t.paymentMethod ? (0,
                r.BX)(t.paymentMethod.tax) : 0))
                  , k = (0,
                l.Fl)(( () => "rub_card" === t.paymentMethod?.name))
                  , f = (0,
                l.Fl)(( () => {
                    if (o.promoCode.isFree)
                        return 0;
                    if (t.gift?.rub)
                        return t.gift.rub;
                    const e = t.amountToReplenishBalance ? t.amountToReplenishBalance : t.robuxAmount * t.rate;
                    return e.toFixed(2)
                }
                ))
                  , S = (0,
                l.Fl)(( () => o.isPresaleMode ? Ta : Na));
                function U(e) {
                    v.value = e
                }
                const w = () => (g.value || d.setNotification({
                    description: "Примите пользовательское соглашение",
                    title: "Внимание!",
                    type: "error"
                }),
                g.value);
                async function Z() {
                    if (t.methodValidate() && w()) {
                        if (o.promoCode.promo) {
                            const e = await n(o.promoCode.promo, _.value);
                            if (!e)
                                return c(),
                                void i("checkPromo:error")
                        }
                        i(t.payFromBalance ? "submit:balance" : "submit:paymentSystem")
                    }
                }
                function C(e) {
                    i("select:paymentMethod", e),
                    v.value = !1
                }
                return (a, n) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", Ba, [t.gift?.rub ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", qa, [(0,
                l.Wm)((0,
                s.SU)(m.Z), {
                    class: "robux-input__input",
                    "model-value": t.gift.robux,
                    placeholder: "Робуксы",
                    type: "number",
                    state: "success",
                    "left-icon": "robux",
                    theme: "secondary"
                }, null, 8, ["model-value"]), (0,
                l.Wm)((0,
                s.SU)(m.Z), {
                    class: "robux-input__input",
                    "model-value": t.gift.rub,
                    placeholder: "К оплате",
                    type: "number",
                    "left-icon": "wallet",
                    state: t.gift.rub ? "success" : "default",
                    theme: "secondary"
                }, null, 8, ["model-value", "state"])])) : "premium" !== t.method ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(me.Z), {
                    key: 1,
                    amount: _.value,
                    freezed: "transfer" === t.method,
                    withoutOptions: "transfer" === t.method || "fastpass" === t.method,
                    "hide-rub-price": !e.payFromBalance,
                    "promo-bonus": t.promoBonus,
                    rate: (0,
                    s.SU)(o).rate,
                    onChange: n[0] || (n[0] = e => _.value = e)
                }, null, 8, ["amount", "freezed", "withoutOptions", "hide-rub-price", "promo-bonus", "rate"])) : (0,
                l.kq)("", !0), "premium" === t.method ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ja.Z), {
                    key: 2,
                    "premium-offer": t.premiumOffer,
                    active: !0
                }, null, 8, ["premium-offer"])) : (0,
                l.kq)("", !0), e.payFromBalance ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, {
                    key: 3
                }, [n[10] || (n[10] = (0,
                l._)("div", {
                    class: "mobile-purchase-form__line"
                }, null, -1)), (0,
                l.Wm)((0,
                s.SU)(Da.Z), {
                    class: "mobile-purchase-form__payment",
                    methodName: e.paymentMethod?.name,
                    tax: y.value,
                    onClick: n[1] || (n[1] = e => U(!0))
                }, null, 8, ["methodName", "tax"])], 64)), (0,
                l.wy)((0,
                l._)("div", Fa, [(0,
                l._)("div", Ha, [(0,
                l.Wm)((0,
                s.SU)(p.Z), {
                    type: "outline",
                    name: "caretLeft",
                    class: "mobile-purchase-form__payment-system__back",
                    onClick: n[2] || (n[2] = e => v.value = !1)
                }), n[11] || (n[11] = (0,
                l._)("span", null, "Метод оплаты", -1))]), (0,
                l._)("div", Ma, [(0,
                l.Wm)((0,
                s.SU)(Ve.Z), {
                    "on-select": e => C(e),
                    "show-balance-card": e.payFromBalance,
                    onBack: n[3] || (n[3] = e => v.value = !1)
                }, null, 8, ["on-select", "show-balance-card"])])], 512), [[I.F8, v.value]]), t.payFromBalance ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.iD)("div", Aa, ["premium" !== t.method ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(m.Z), {
                    key: 0,
                    "left-icon": "wallet",
                    theme: "secondary",
                    placeholder: "Стоимость",
                    modelValue: f.value,
                    "onUpdate:modelValue": n[4] || (n[4] = e => f.value = e)
                }, null, 8, ["modelValue"])) : (0,
                l.kq)("", !0), (0,
                l.Wm)((0,
                s.SU)(m.Z), {
                    "left-icon": "shoppingCart",
                    theme: "secondary",
                    placeholder: "Вы заплатите",
                    modelValue: b.value,
                    "onUpdate:modelValue": n[5] || (n[5] = e => b.value = e)
                }, null, 8, ["modelValue"])])), n[15] || (n[15] = (0,
                l._)("div", {
                    class: "mobile-purchase-form__line"
                }, null, -1)), k.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(m.Z), {
                    key: 5,
                    class: "payment-form__email",
                    "onUpdate:modelValue": n[6] || (n[6] = e => i("input:email", e)),
                    placeholder: "E-mail",
                    state: "default",
                    "left-icon": "gmail"
                })) : (0,
                l.kq)("", !0), (0,
                s.SU)(o).isGamepassPurchaseDisabled ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(de.Z), {
                    key: 6,
                    mini: "",
                    type: "info",
                    "outline-icon": "",
                    class: "payment-form__hint",
                    text: "Не забудьте настроить геймпасс в профиле нашего сайта после оплаты заказа!"
                })) : (0,
                l.kq)("", !0), (0,
                l._)("div", Oa, [(0,
                l._)("div", Ia, [(0,
                l.Wm)((0,
                s.SU)(Wa.Z), {
                    modelValue: g.value,
                    "onUpdate:modelValue": n[7] || (n[7] = e => g.value = e)
                }, null, 8, ["modelValue"]), (0,
                l._)("span", Ra, [n[12] || (n[12] = (0,
                l.Uk)(" Я согласен с ")), n[13] || (n[13] = (0,
                l._)("a", {
                    class: "agreement__link",
                    href: "/docs/terms-of-use",
                    target: "_blank"
                }, " пользовательским соглашением ", -1)), n[14] || (n[14] = (0,
                l.Uk)(" и ")), (0,
                l._)("a", {
                    class: "agreement__link",
                    href: "/docs/privacy-policy",
                    onClick: n[8] || (n[8] = e => a.$router.push("/docs/privacy-policy"))
                }, " политикой конфиденциальности ")])]), (0,
                l.Wm)(oa.Z, {
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: n[9] || (n[9] = e => i("back"))
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        size: "l",
                        "mobile-size": "l",
                        "left-icon": "shoppingCart",
                        iconType: "solid",
                        loading: e.loading,
                        disabled: h.value,
                        class: "mobile-purchase-form__button",
                        onClick: Z
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Uk)(" ОПЛАТИТЬ " + (0,
                        x.zw)(b.value ? b.value : "0") + " ₽ ", 1)])),
                        _: 1
                    }, 8, ["loading", "disabled"])])),
                    _: 1
                })]), e.gift.rub ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(de.Z), {
                    key: 7,
                    mini: "",
                    class: "payment-form__hint gift",
                    title: "Внимание!",
                    type: "warning",
                    text: "Все спорные вопросы по применению подарочных кодов рассматриваются\n\t                   поддержкой только при предоставлении видеозаписи без монтажа от\n\t                   момента покупки подарочного кода до момента его проверки на сайте Roblox"
                })) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(de.Z), {
                    key: 8,
                    class: "mobile-purchase-form__hint",
                    title: "Внимание!",
                    type: "warning",
                    text: S.value
                }, null, 8, ["text"]))]))
            }
        });
        const Va = Ga;
        var Ea = Va
          , La = Ea
          , Ya = t(49757);
        const $a = {
            class: "mobile-logpass-method"
        };
        var Ka = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = [{
                    title: "Найдите свой аккаунт",
                    description: "Пожалуйста, введите корректные данные, чтобы избежать ошибок",
                    icon: "user"
                }, {
                    title: "Укажите пароль от аккаунта",
                    description: "Пожалуйста, введите корректные данные, чтобы избежать ошибок",
                    icon: "key"
                }, {
                    title: "Выбор суммы и оплата заказа",
                    description: "Пожалуйста, введите корректные данные, чтобы избежать ошибок",
                    icon: "robux"
                }, {
                    title: "Выполнение заказа",
                    description: "Платеж прошел успешно и теперь заказ выполняется. Пожалуйста, ожидайте!",
                    icon: "checkedBox"
                }]
                  , t = (0,
                s.iH)(1)
                  , i = (0,
                s.iH)("")
                  , o = (0,
                s.iH)("")
                  , n = (0,
                l.Fl)(( () => a[t.value - 1].title))
                  , r = (0,
                l.Fl)(( () => a[t.value - 1].description))
                  , u = (0,
                l.Fl)(( () => a[t.value - 1].icon));
                function m(e) {
                    i.value = e,
                    t.value = 2
                }
                function d() {
                    i.value = "",
                    o.value = "",
                    t.value = 1
                }
                return (e, a) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", $a, [(0,
                l.Wm)((0,
                s.SU)(c.Z), {
                    icon: u.value,
                    currentStep: t.value,
                    totalSteps: 4,
                    title: n.value,
                    description: r.value,
                    type: "primary"
                }, null, 8, ["icon", "currentStep", "title", "description"]), 1 === t.value || 2 === t.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Pa), {
                    key: 0,
                    type: "withPassword",
                    onOnAccountInput: m,
                    onReset: d
                })) : (0,
                l.kq)("", !0), 3 === t.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(La), {
                    key: 1,
                    method: "logpass"
                })) : (0,
                l.kq)("", !0), 4 === t.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Ya.Z), {
                    key: 2
                })) : (0,
                l.kq)("", !0)]))
            }
        });
        const Ja = Ka;
        var Xa = Ja
          , Qa = Xa
          , et = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = (0,
                n.b)();
                return (e, t) => (0,
                s.SU)(a).isMobile ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Qa), {
                    key: 0
                })) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ta), {
                    key: 1
                }))
            }
        });
        const at = et;
        var tt = at
          , lt = tt
          , st = t(17885)
          , it = t(39854)
          , ot = t(60148)
          , nt = t(86367);
        const rt = {
            class: "payment-game-form__header"
        }
          , ut = {
            class: "payment-game-form__header__text"
        }
          , ct = {
            class: "payment-game-form__header__description"
        }
          , mt = {
            class: "payment-game-form__info"
        }
          , dt = {
            class: "payment-game-form__robux-amount-wrapper"
        }
          , pt = {
            class: "payment-game-form__currency-amount__commission"
        }
          , _t = {
            class: "payment-game-form__footer"
        }
          , vt = {
            class: "payment-game-form__agreement"
        }
          , gt = {
            class: "payment-game-form__agreement__text"
        }
          , ht = {
            key: 2,
            class: "payment-system__footer"
        };
        var bt = (0,
        l.aZ)({
            __name: "index",
            props: {
                paymentMethod: {
                    type: Object,
                    required: !1
                },
                game: {
                    type: Object
                },
                pass: {
                    type: Object
                },
                robuxAmount: {
                    type: Number,
                    default: 0
                },
                rubleAmount: {
                    type: Number,
                    default: 0
                },
                payFromBalance: {
                    type: Boolean,
                    default: !1
                },
                errorMessage: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                loading: {
                    type: Boolean,
                    default: !1
                },
                amountToReplenishBalance: {
                    type: Number,
                    default: 0
                },
                rate: {
                    type: Number,
                    default: 0
                },
                custom: {
                    type: Boolean,
                    default: !1
                },
                promoBonus: {
                    type: Number,
                    default: 0
                },
                method: {
                    type: String
                },
                methodValidate: {
                    type: Function,
                    default: () => !0
                }
            },
            emits: ["submit:balance", "submit:paymentSystem", "input:email", "checkPromo:error", "back"],
            setup(e, {expose: a, emit: t}) {
                const i = e
                  , o = t
                  , c = (0,
                n.b)()
                  , d = (0,
                Ze.useTransferPurchaseStore)()
                  , {ensurePermissions: _, permissionGranted: v} = (0,
                nt.Oao)()
                  , g = (0,
                Ce.G)()
                  , h = (0,
                s.iH)(!1)
                  , b = (0,
                l.Fl)(( () => i.paymentMethod || i.payFromBalance ? "" : "Проверьте данные заказа"))
                  , y = (0,
                l.Fl)(( () => i.paymentMethod ? (0,
                r.BX)(i.paymentMethod.tax) : 0))
                  , k = (0,
                l.Fl)(( () => {
                    const e = i.pass?.rubble_amount || i.pass?.rub_amount || 0
                      , a = i.amountToReplenishBalance
                      , t = Number(a || e);
                    return t.toFixed(2)
                }
                ))
                  , f = (0,
                l.Fl)(( () => {
                    const e = i.payFromBalance ? 1 : i.paymentMethod?.tax;
                    return 1 === e || e ? (0,
                    r.Pd)(k.value, e, i.paymentMethod?.simpleCalculation) : i.pass?.rubble_amount || i.pass?.rub_amount
                }
                ))
                  , S = (0,
                l.Fl)(( () => "rub_card" === i.paymentMethod?.name))
                  , U = (0,
                l.Fl)(( () => i.loading))
                  , w = async () => {
                    o(i.payFromBalance ? "submit:balance" : "submit:paymentSystem")
                }
                  , Z = async () => {
                    try {
                        const {method: e} = i;
                        let a = !1
                          , t = !0;
                        if ("superPass" === e) {
                            const e = await ua.b.pending.getSuperPassStock();
                            a = Boolean(e?.length)
                        } else if ("market" === e) {
                            const e = await ua.b.pending.getMarketStock();
                            a = Boolean(e?.suppliers),
                            t = Boolean(e?.workingHours)
                        }
                        return t || "market" !== e || (d.showModal("superPass"),
                        "market" === e && da.c?.send("market_modal_error_tech", {})),
                        a || "superPass" !== e && "market" !== e || (da.c?.send("superpass_modal_error_tech", {}),
                        d.showModal("superPassStock"),
                        "superPass" === e && da.c?.send("superpass_modal_error_night", {}),
                        "market" === e && da.c?.send("market_modal_error_tech", {})),
                        a && t
                    } catch (e) {
                        return !1
                    }
                }
                  , C = () => (h.value || g.setNotification({
                    description: "Примите пользовательское соглашение",
                    title: "Внимание!",
                    type: "error"
                }),
                h.value)
                  , P = async () => {
                    C() && i.methodValidate() && await Z() && await w()
                }
                ;
                return (0,
                l.bv)(( () => {
                    _(),
                    v.value || g.setNotification({
                        title: "Внимание!",
                        description: "Примите разрешение, чтобы мы сообщили, когда Вам нужно будет зайти в игру",
                        type: "warning"
                    })
                }
                )),
                a({
                    pay: w,
                    agreement: h
                }),
                (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    class: (0,
                    x.C_)(["payment-game-form", [{
                        balance: e.payFromBalance
                    }]])
                }, [(0,
                l._)("div", rt, [(0,
                l._)("div", ut, [t[5] || (t[5] = (0,
                l._)("span", {
                    class: "payment-game-form__header__title"
                }, "Данные о заказе:", -1)), (0,
                l._)("span", ct, (0,
                x.zw)(b.value), 1)])]), (0,
                l._)("div", mt, [(0,
                l.Wm)((0,
                s.SU)(ot.Z), {
                    title: "Выбранная игра:",
                    description: e.game?.name,
                    image: e.game?.image_uri
                }, null, 8, ["description", "image"]), (0,
                l.Wm)((0,
                s.SU)(ot.Z), {
                    title: `Выбранный ${e.pass?.rub_amount ? "предмет" : "пасс"}:`,
                    description: e.pass?.name,
                    image: e.pass?.image_uri
                }, null, 8, ["title", "description", "image"]), e.payFromBalance ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ot.Z), {
                    key: 0,
                    title: "Метод оплаты:",
                    "payment-method": {
                        name: "Средства со счета"
                    },
                    "is-balance": ""
                })) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ot.Z), {
                    key: 1,
                    title: "Метод оплаты:",
                    "payment-method": e.paymentMethod,
                    "is-payment": ""
                }, null, 8, ["payment-method"]))]), t[11] || (t[11] = (0,
                l._)("div", {
                    class: "payment-game-form__line"
                }, null, -1)), t[12] || (t[12] = (0,
                l._)("div", {
                    class: "payment-game-form__header"
                }, [(0,
                l._)("div", {
                    class: "payment-game-form__header__text"
                }, [(0,
                l._)("span", {
                    class: "payment-game-form__header__title"
                }, "Будет списано:")])], -1)), (0,
                l._)("div", dt, [(0,
                l.Wm)((0,
                s.SU)(m.Z), {
                    class: "payment-game-form__final-amount",
                    "model-value": `${f.value} ₽`,
                    placeholder: "Вы заплатите",
                    "left-icon": "shoppingCart",
                    inactive: !0
                }, null, 8, ["model-value"]), e.pass?.robux_amount ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(m.Z), {
                    key: 0,
                    class: "payment-game-form__robux-amount",
                    "model-value": e.pass?.robux_amount,
                    placeholder: "Введите сумму для покупки",
                    type: "number",
                    "left-icon": "robux",
                    inactive: !0
                }, null, 8, ["model-value"])) : (0,
                l.kq)("", !0)]), (0,
                l._)("div", pt, [(0,
                l._)("span", null, [t[6] || (t[6] = (0,
                l.Uk)(" Комиссия составляет: ")), (0,
                l._)("span", null, (0,
                x.zw)(y.value) + "%", 1)]), (0,
                l.Wm)((0,
                s.SU)(p.Z), {
                    type: "outline",
                    name: "infoCircle"
                })]), S.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(m.Z), {
                    key: 0,
                    class: "payment-form__email",
                    "onUpdate:modelValue": t[0] || (t[0] = e => o("input:email", e)),
                    placeholder: "E-mail",
                    state: "default",
                    "left-icon": "gmail"
                })) : (0,
                l.kq)("", !0), (0,
                l._)("div", _t, [e.errorMessage && !e.custom ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(de.Z), {
                    key: 0,
                    type: "error",
                    text: e.errorMessage
                }, null, 8, ["text"])) : (0,
                l.kq)("", !0), (0,
                l._)("div", vt, [(0,
                l.Wm)((0,
                s.SU)(Wa.Z), {
                    modelValue: h.value,
                    "onUpdate:modelValue": t[1] || (t[1] = e => h.value = e)
                }, null, 8, ["modelValue"]), (0,
                l._)("span", gt, [t[7] || (t[7] = (0,
                l.Uk)(" Я согласен с ")), t[8] || (t[8] = (0,
                l._)("a", {
                    class: "agreement__link",
                    href: "/docs/terms-of-use",
                    target: "_blank"
                }, " пользовательским соглашением ", -1)), t[9] || (t[9] = (0,
                l.Uk)(" и ")), (0,
                l._)("a", {
                    class: "agreement__link",
                    href: "/docs/privacy-policy",
                    onClick: t[2] || (t[2] = e => a.$router.push("/docs/privacy-policy"))
                }, " политикой конфиденциальности ")])]), (0,
                s.SU)(c).isMobile ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.j4)(oa.Z, {
                    key: 1,
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: t[3] || (t[3] = e => o("back"))
                }, {
                    default: (0,
                    l.w5)(( () => [e.custom || (0,
                    s.SU)(c).isMobile ? (0,
                    l.kq)("", !0) : ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(u.Z), {
                        key: 0,
                        class: "payment-game-form__submit",
                        size: "xl",
                        "mobile-size": "s",
                        onClick: P,
                        loading: e.loading,
                        disabled: U.value,
                        "left-icon": "shoppingCart"
                    }, {
                        default: (0,
                        l.w5)(( () => t[10] || (t[10] = [(0,
                        l.Uk)(" ОПЛАТИТЬ ")]))),
                        _: 1,
                        __: [10]
                    }, 8, ["loading", "disabled"]))])),
                    _: 1
                })), (0,
                s.SU)(c).isMobile ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", ht, [(0,
                l.Wm)(oa.Z, {
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: t[4] || (t[4] = e => o("back"))
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        class: "payment-game-form__submit",
                        size: "s",
                        "mobile-size": "s",
                        onClick: P,
                        loading: e.loading,
                        disabled: U.value,
                        "left-icon": "shoppingCart"
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Uk)(" ОПЛАТИТЬ " + (0,
                        x.zw)(f.value ? f.value : "0") + " ₽ ", 1)])),
                        _: 1
                    }, 8, ["loading", "disabled"])])),
                    _: 1
                })])) : (0,
                l.kq)("", !0)])], 2))
            }
        });
        const yt = bt;
        var kt = yt
          , ft = kt
          , St = t(46088);
        const Ut = {
            class: "game-card__cover"
        }
          , wt = ["src"]
          , xt = {
            class: "game-card__description"
        }
          , Zt = {
            class: "game-card__name"
        }
          , Ct = {
            class: "game-card__rating"
        };
        var Pt = (0,
        l.aZ)({
            __name: "index",
            props: {
                game: {
                    type: Object,
                    required: !0
                },
                size: {
                    type: String,
                    default: "m"
                },
                active: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                hideCheckbox: {
                    type: Boolean,
                    default: !1
                },
                lite: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e) {
                return (a, t) => e.game ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    key: 0,
                    class: (0,
                    x.C_)(["game-card", [`size_${e.size}`, {
                        active: e.active,
                        disabled: e.disabled,
                        lite: e.lite
                    }]])
                }, [(0,
                l._)("div", Ut, [(0,
                l._)("img", {
                    src: e.game.image_uri,
                    alt: "cover"
                }, null, 8, wt)]), (0,
                l._)("div", xt, [(0,
                l._)("div", Zt, (0,
                x.zw)(e.game.name), 1), (0,
                l._)("div", Ct, [(0,
                l.Wm)((0,
                s.SU)(p.Z), {
                    name: "like",
                    type: "solid"
                }), (0,
                l._)("span", null, (0,
                x.zw)(e.game.rate) + "%", 1), t[0] || (t[0] = (0,
                l._)("span", null, "Rating", -1))])]), e.active && !e.hideCheckbox ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Wa.Z), {
                    key: 0,
                    "model-value": e.active,
                    class: "game-card__checkbox"
                }, null, 8, ["model-value"])) : (0,
                l.kq)("", !0)], 2)) : (0,
                l.kq)("", !0)
            }
        });
        const Dt = Pt;
        var jt = Dt
          , Wt = jt
          , zt = t(90570);
        function Bt(e, a) {
            const t = new Map
              , s = () => {
                t.clear()
            }
              , i = (0,
            l.Fl)(( () => {
                const l = e()
                  , s = a().toLowerCase().trim();
                if (!l || !s)
                    return l;
                if (t.has(s))
                    return t.get(s);
                const i = l.filter((e => e.name.toLowerCase().includes(s) || e.name_en?.toLowerCase().includes(s) || e.tags?.includes(s)));
                return t.set(s, i),
                i
            }
            ));
            return {
                filteredGames: i,
                clearCache: s
            }
        }
        const qt = {
            key: 1,
            class: "games-list"
        };
        var Ft = (0,
        l.aZ)({
            __name: "index",
            props: {
                current: {
                    type: Object
                },
                size: {
                    type: String,
                    default: "m"
                }
            },
            emits: ["onSelectGame"],
            setup(e, {emit: a}) {
                const t = a
                  , i = (0,
                Ze.useTransferPurchaseStore)()
                  , o = (0,
                s.iH)(!1)
                  , n = (0,
                s.iH)(null)
                  , {filteredGames: u, clearCache: c} = Bt(( () => m.value), ( () => i.search.game))
                  , m = (0,
                l.Fl)(( () => {
                    const e = n.value;
                    if (!e?.length)
                        return null;
                    const a = e?.sort(( (e, a) => a.orders - e.orders))
                      , t = a?.slice(0, 6)
                      , l = a?.slice(6)
                      , s = l.sort(( (e, a) => a.online - e.online));
                    return [...t, ...s]
                }
                ));
                (0,
                l.YP)(m, c);
                const d = async () => {
                    m.value?.length || (o.value = !0);
                    try {
                        let e = await i.getGamesSuperPassList();
                        if (!e)
                            return;
                        e = e.filter((e => e.superpass_enabled)),
                        n.value = e
                    } catch (e) {
                        console.error("Failed to load games:", e)
                    } finally {
                        o.value = !1
                    }
                }
                ;
                return (0,
                l.wF)(d),
                (a, i) => ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, null, [i[2] || (i[2] = (0,
                l._)("div", {
                    class: "info-banner"
                }, " На последнем этапе вам возможно придется войти в игру, чтобы получить пасс ", -1)), o.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(zt.Z), {
                    key: 0
                })) : (0,
                s.SU)(u)?.length ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", qt, [(0,
                l._)("div", {
                    class: (0,
                    x.C_)(["games-list-scroll", [`size_${e.size}`]])
                }, [((0,
                l.wg)(!0),
                (0,
                l.iD)(l.HY, null, (0,
                l.Ko)((0,
                s.SU)(u), (a => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Wt), {
                    key: "game" + a.id,
                    game: a,
                    active: a.id === e.current?.id,
                    size: e.size,
                    onClick: () => t("onSelectGame", a)
                }, null, 8, ["game", "active", "size", "onClick"])))), 128))], 2)])) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ca.Z), {
                    key: 2
                }, {
                    text: (0,
                    l.w5)(( () => i[1] || (i[1] = [(0,
                    l.Uk)("Не нашли такую игру роблокс в нашем списке.")]))),
                    footer: (0,
                    l.w5)(( () => [(0,
                    l._)("a", {
                        href: "#",
                        onClick: i[0] || (i[0] = (0,
                        I.iM)(( (...e) => (0,
                        s.SU)(r.WB) && (0,
                        s.SU)(r.WB)(...e)), ["prevent"]))
                    }, " Чтобы мы добавили новую игру в список, отправьте нашей поддержке ссылку на нее! ")])),
                    _: 1
                }))], 64))
            }
        })
          , Ht = t(40089);
        const Mt = (0,
        Ht.Z)(Ft, [["__scopeId", "data-v-50fe2d5e"]]);
        var At = Mt
          , Ot = At;
        const It = {
            key: 1,
            class: "games-list"
        };
        var Rt = (0,
        l.aZ)({
            __name: "index",
            props: {
                current: {
                    type: Object
                },
                size: {
                    type: String,
                    default: "m"
                }
            },
            emits: ["onSelectGame"],
            setup(e, {emit: a}) {
                const t = a
                  , i = (0,
                Ze.useTransferPurchaseStore)()
                  , o = (0,
                s.iH)(!1)
                  , n = (0,
                s.iH)(null)
                  , {filteredGames: u, clearCache: c} = Bt(( () => m.value), ( () => i.search.game))
                  , m = (0,
                l.Fl)(( () => n.value?.filter((e => e.enabled)).sort(( (e, a) => e.priority - a.priority)) || null));
                (0,
                l.YP)(m, c);
                const d = async () => {
                    m.value?.length || (o.value = !0);
                    try {
                        let e = await i.getGamesMarketList();
                        if (!e)
                            return;
                        e = e.filter((e => e.enabled)),
                        n.value = e
                    } catch (e) {
                        console.error("Failed to load games:", e)
                    } finally {
                        o.value = !1
                    }
                }
                ;
                return (0,
                l.wF)(d),
                (a, i) => ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, null, [i[2] || (i[2] = (0,
                l._)("div", {
                    class: "info-banner"
                }, " НА ПОСЛЕДНЕМ ЭТАПЕ ВАМ ПРИДЁТСЯ ПРИНЯТЬ ТРЕЙД В ИГРЕ, ЧТОБЫ ПОЛУЧИТЬ ПРЕДМЕТ ", -1)), o.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(zt.Z), {
                    key: 0
                })) : (0,
                s.SU)(u)?.length ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", It, [(0,
                l._)("div", {
                    class: (0,
                    x.C_)(["games-list-scroll", [`size_${e.size}`]])
                }, [((0,
                l.wg)(!0),
                (0,
                l.iD)(l.HY, null, (0,
                l.Ko)((0,
                s.SU)(u), (a => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Wt), {
                    key: "game" + a.id,
                    game: a,
                    active: a.id === e.current?.id,
                    size: e.size,
                    onClick: () => t("onSelectGame", a)
                }, null, 8, ["game", "active", "size", "onClick"])))), 128))], 2)])) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ca.Z), {
                    key: 2
                }, {
                    text: (0,
                    l.w5)(( () => i[1] || (i[1] = [(0,
                    l.Uk)("Не нашли такую игру роблокс в нашем списке.")]))),
                    footer: (0,
                    l.w5)(( () => [(0,
                    l._)("a", {
                        href: "#",
                        onClick: i[0] || (i[0] = (0,
                        I.iM)(( (...e) => (0,
                        s.SU)(r.WB) && (0,
                        s.SU)(r.WB)(...e)), ["prevent"]))
                    }, " Чтобы мы добавили новую игру в список, отправьте нашей поддержке ссылку на нее! ")])),
                    _: 1
                }))], 64))
            }
        });
        const Tt = (0,
        Ht.Z)(Rt, [["__scopeId", "data-v-e1831d4e"]]);
        var Nt = Tt
          , Gt = Nt
          , Vt = t(77400);
        const Et = {
            class: "pass-card__robux"
        }
          , Lt = {
            key: 0,
            class: "pass-card__sale"
        }
          , Yt = ["src"]
          , $t = {
            class: "pass-card__description"
        }
          , Kt = {
            class: "pass-card__price"
        }
          , Jt = {
            key: 0,
            class: "pass-card__discount"
        };
        var Xt = (0,
        l.aZ)({
            __name: "index",
            props: {
                pass: {
                    type: Object
                },
                size: {
                    type: String,
                    default: "m"
                },
                active: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                hideCheckbox: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e) {
                return (a, t) => e.pass ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    key: 0,
                    class: (0,
                    x.C_)(["pass-card", [`size_${e.size}`, {
                        active: e.active,
                        disabled: e.disabled,
                        discount: e.pass.sale
                    }]])
                }, [(0,
                l._)("div", Et, [(0,
                l._)("span", null, (0,
                x.zw)(e.pass.robux), 1), (0,
                l.Wm)(Vt.Z, {
                    type: "solid",
                    name: "robux"
                })]), e.pass.sale ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", Lt, "-" + (0,
                x.zw)(e.pass.sale) + "%", 1)) : (0,
                l.kq)("", !0), (0,
                l._)("img", {
                    class: "pass-card__cover",
                    src: e.pass.image_uri,
                    alt: "cover"
                }, null, 8, Yt), (0,
                l._)("div", $t, (0,
                x.zw)(e.pass.name), 1), (0,
                l._)("div", Kt, [e.pass.sale ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", Jt, (0,
                x.zw)(e.pass.oldRubleAmount) + " ₽ ", 1)) : (0,
                l.kq)("", !0), (0,
                l._)("span", null, (0,
                x.zw)(e.pass.rubble_amount) + " ₽", 1)]), e.active && !e.hideCheckbox ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Wa.Z), {
                    key: 1,
                    "model-value": e.active,
                    class: "pass-card__checkbox"
                }, null, 8, ["model-value"])) : (0,
                l.kq)("", !0)], 2)) : (0,
                l.kq)("", !0)
            }
        });
        const Qt = (0,
        Ht.Z)(Xt, [["__scopeId", "data-v-43e55692"]]);
        var el = Qt
          , al = el
          , tl = t(59938);
        const ll = {
            key: 1,
            class: "pass-list"
        }
          , sl = {
            key: 0
        }
          , il = {
            key: 1
        };
        var ol = (0,
        l.aZ)({
            __name: "index",
            props: {
                current: {
                    type: Object
                },
                game: {
                    type: Object
                },
                size: {
                    type: String,
                    default: "m"
                },
                searchValue: {
                    type: String
                }
            },
            emits: ["onSelectPass", "back"],
            setup(e, {emit: a}) {
                const t = e
                  , i = a
                  , o = (0,
                Ze.useTransferPurchaseStore)()
                  , n = (0,
                s.iH)(null)
                  , r = (0,
                s.iH)(null)
                  , u = (0,
                s.iH)(!0);
                (0,
                l.YP)(( () => o.search.pass), (e => {
                    r.value || (r.value = n.value),
                    n.value = e ? r.value?.filter((a => a.name.toLowerCase().includes(e.toLowerCase().trim()))) || null : r.value
                }
                ), {
                    immediate: !0
                });
                const c = async () => {
                    try {
                        const e = t.game?.id || "";
                        let a = await o.getPassesList(e);
                        if (!a)
                            return;
                        a = a.filter((e => e.enabled)).sort(( (e, a) => a.orders - e.orders)),
                        r.value = a,
                        n.value = a
                    } catch (e) {
                        console.error("Failed to load games:", e)
                    } finally {
                        u.value = !1
                    }
                }
                ;
                return (0,
                l.wF)(c),
                (a, t) => u.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(zt.Z), {
                    key: 0
                })) : n.value?.length ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", ll, [(0,
                l._)("div", {
                    class: (0,
                    x.C_)(["pass-list-scroll", [`size_${e.size}`]])
                }, [((0,
                l.wg)(!0),
                (0,
                l.iD)(l.HY, null, (0,
                l.Ko)(n.value, (a => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(al), {
                    key: "pass" + a.id,
                    pass: a,
                    active: a.id === e.current?.id,
                    size: e.size,
                    onClick: () => i("onSelectPass", a)
                }, null, 8, ["pass", "active", "size", "onClick"])))), 128))], 2)])) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ca.Z), {
                    key: 2
                }, {
                    text: (0,
                    l.w5)(( () => [e.searchValue ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("span", sl, "Не нашли такой пасс в нашем списке")) : ((0,
                    l.wg)(),
                    (0,
                    l.iD)("span", il, " Пассы для этой игры еще не добавлены. Мы уже работаем над их добавлением! "))])),
                    footer: (0,
                    l.w5)(( () => [(0,
                    l.Wm)(tl.Z, {
                        size: "xs",
                        "mobile-size": "xs",
                        "right-icon": "arrowRight",
                        onClick: t[0] || (t[0] = e => i("back"))
                    }, {
                        default: (0,
                        l.w5)(( () => t[1] || (t[1] = [(0,
                        l.Uk)(" КУПИТЬ ПАСС ДЛЯ ДРУГОЙ ИГРЫ ")]))),
                        _: 1,
                        __: [1]
                    })])),
                    _: 1
                }))
            }
        });
        const nl = ol;
        var rl = nl
          , ul = rl
          , cl = t(43025);
        const ml = {
            class: "base-market-card"
        }
          , dl = "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 64.74%)"
          , pl = "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6))";
        var _l = (0,
        l.aZ)({
            __name: "baseMarketCard",
            props: {
                pass: {
                    type: Object,
                    required: !0
                },
                active: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e) {
                const a = e
                  , t = (0,
                l.Fl)(( () => 0 === a.pass?.count))
                  , s = (0,
                l.Fl)(( () => (0,
                r.Xc)(a.pass?.rarity)))
                  , i = (0,
                l.Fl)(( () => ({
                    background: `${dl}, ${cl.J_[s.value]}`
                })))
                  , o = (0,
                l.Fl)(( () => ({
                    background: `${pl}, ${cl.J_[s.value]}`
                })));
                return (a, n) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", ml, [(0,
                l.WI)(a.$slots, "default", {
                    pass: e.pass,
                    notAvailable: t.value,
                    rarity: s.value,
                    gradientHeaderBackground: i.value,
                    gradientNameBackground: o.value,
                    active: e.active,
                    onFire: a.onFire,
                    disabled: e.disabled
                })]))
            }
        });
        const vl = _l;
        var gl = vl
          , hl = gl;
        const bl = {
            key: 0,
            class: "head"
        }
          , yl = {
            key: 1,
            class: "head hit"
        }
          , kl = ["src"]
          , fl = {
            class: "discount-percent"
        }
          , Sl = {
            class: "discount-price"
        }
          , Ul = {
            class: "description"
        }
          , wl = {
            class: "actions"
        };
        var xl = (0,
        l.aZ)({
            __name: "index-mix-version",
            props: {
                pass: {
                    type: Object,
                    required: !0
                },
                size: {
                    type: String,
                    default: "m"
                },
                active: {
                    type: Boolean,
                    default: !1
                },
                onFire: {
                    type: Boolean,
                    default: !0
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                quantity: {
                    type: Number,
                    default: 0
                }
            },
            emits: ["update:increment", "update:decrement"],
            setup(e, {emit: a}) {
                const i = a;
                return (a, o) => {
                    const n = (0,
                    l.up)("inline-svg");
                    return (0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(hl), {
                        pass: e.pass,
                        active: e.active,
                        disabled: e.disabled
                    }, {
                        default: (0,
                        l.w5)(( ({notAvailable: a, gradientHeaderBackground: c, gradientNameBackground: m}) => [(0,
                        l._)("div", {
                            class: (0,
                            x.C_)(["market-card-vertical", [`size_${e.size}`, {
                                active: e.quantity,
                                disabled: a
                            }]])
                        }, [a ? ((0,
                        l.wg)(),
                        (0,
                        l.iD)("div", bl, "НЕТ В НАЛИЧИИ")) : e.pass.hit ? ((0,
                        l.wg)(),
                        (0,
                        l.iD)("div", yl, [(0,
                        l.Wm)((0,
                        s.SU)(p.Z), {
                            type: "solid",
                            name: "crown"
                        }), o[1] || (o[1] = (0,
                        l._)("span", null, "ХИТ ПРОДАЖ", -1))])) : ((0,
                        l.wg)(),
                        (0,
                        l.iD)("div", {
                            key: 2,
                            class: "rarity-indicator",
                            style: (0,
                            x.j5)(c)
                        }, null, 4)), (0,
                        l._)("img", {
                            class: (0,
                            x.C_)(["cover", {
                                active: e.quantity
                            }]),
                            src: e.pass.image_uri,
                            alt: "cover"
                        }, null, 10, kl), (0,
                        l._)("div", null, [(0,
                        l._)("div", {
                            class: (0,
                            x.C_)(["price", {
                                active: e.active,
                                discount: e.pass.sale
                            }])
                        }, (0,
                        x.zw)((0,
                        s.SU)(r.Yx)(e.pass.old_rub_amount || e.pass.rub_amount)) + " ₽ ", 3), e.pass.sale ? ((0,
                        l.wg)(),
                        (0,
                        l.iD)(l.HY, {
                            key: 0
                        }, [(0,
                        l._)("div", fl, [(0,
                        l.Uk)((0,
                        x.zw)(e.pass.sale) + " ", 1), o[2] || (o[2] = (0,
                        l._)("span", null, "%", -1))]), (0,
                        l._)("div", Sl, (0,
                        x.zw)((0,
                        s.SU)(r.Yx)(e.pass.rub_amount)) + " ₽ ", 1)], 64)) : (0,
                        l.kq)("", !0)]), (0,
                        l._)("div", {
                            class: "name",
                            style: (0,
                            x.j5)(m)
                        }, [(0,
                        l._)("span", null, (0,
                        x.zw)((0,
                        s.SU)(cl.Ms)[e.pass.type]), 1)], 4), (0,
                        l._)("div", Ul, [(0,
                        l._)("span", null, (0,
                        x.zw)(e.pass.name), 1)]), (0,
                        l._)("div", wl, [(0,
                        l.Wm)(I.uT, {
                            name: "fade"
                        }, {
                            default: (0,
                            l.w5)(( () => [(0,
                            l.Wm)((0,
                            s.SU)(u.Z), {
                                class: "cart",
                                size: "xs",
                                onClick: o[0] || (o[0] = (0,
                                I.iM)((e => i("update:increment")), ["stop"]))
                            }, {
                                default: (0,
                                l.w5)(( () => o[3] || (o[3] = [(0,
                                l.Uk)(" Выбрать ")]))),
                                _: 1,
                                __: [3]
                            })])),
                            _: 1
                        })]), e.pass.hit ? ((0,
                        l.wg)(),
                        (0,
                        l.j4)(n, {
                            key: 3,
                            class: "fire",
                            src: t(13857)
                        }, null, 8, ["src"])) : (0,
                        l.kq)("", !0)], 2)])),
                        _: 1
                    }, 8, ["pass", "active", "disabled"])
                }
            }
        });
        const Zl = (0,
        Ht.Z)(xl, [["__scopeId", "data-v-21d43f6d"]]);
        var Cl = Zl
          , Pl = Cl
          , Dl = t(10404)
          , jl = t(75892)
          , Wl = t(59352);
        const zl = {
            key: 0,
            class: "market-title"
        }
          , Bl = {
            class: "market-selects"
        }
          , ql = {
            class: "market-filter"
        }
          , Fl = {
            class: "market-title__mobile"
        }
          , Hl = {
            class: "market-list-inputs"
        }
          , Ml = {
            class: "market-list-actionFilters"
        };
        var Al = (0,
        l.aZ)({
            __name: "index",
            props: {
                current: {
                    type: Object
                },
                game: {
                    type: Object
                },
                size: {
                    type: String,
                    default: "m"
                },
                searchValue: {
                    type: String
                },
                isShowFilter: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["onSelectPass", "back", "closeFilter"],
            setup(e, {emit: a}) {
                const t = e
                  , i = a
                  , o = (0,
                n.b)()
                  , r = (0,
                Ze.useTransferPurchaseStore)()
                  , u = (0,
                s.iH)(null)
                  , c = (0,
                s.iH)(null)
                  , d = (0,
                s.iH)(!0)
                  , p = (0,
                s.iH)()
                  , _ = (0,
                s.iH)()
                  , v = (0,
                l.Fl)(( () => {
                    const e = [{
                        value: "all",
                        label: cl.Ms.all,
                        icon: "alltypes"
                    }];
                    return c.value?.forEach((a => {
                        e.push({
                            value: a.type,
                            label: cl.Ms[a.type],
                            icon: Wl.P[a?.type] ? a.type : "flame"
                        })
                    }
                    )),
                    Array.from(new Map(e.map((e => [e.value, e]))).values())
                }
                ))
                  , g = (0,
                l.Fl)(( () => {
                    const e = c.value?.map((e => ({
                        value: e.rarity,
                        label: e.rarity,
                        color: cl.J_[e.rarity],
                        icon: "diamond"
                    })))
                      , a = Array.from(new Map(e?.map((e => [e.value, e]))).values());
                    return [{
                        value: "all",
                        label: "Все редкости",
                        icon: "diamond"
                    }, ...a]
                }
                ))
                  , h = (0,
                s.iH)({
                    value: "all",
                    label: "Все редкости",
                    icon: "diamond"
                })
                  , b = (0,
                s.iH)({
                    value: "all",
                    label: "Все типы предметов",
                    icon: "alltypes"
                });
                (0,
                l.YP)(( () => [r.search.pass, b, h, p, _]), ( ([e,a,t,l,s]) => {
                    c.value || (c.value = u.value),
                    !e && "all" === a.value.value && "all" === t.value.value && !+l.value > 0 && !+s.value > 0 ? u.value = c.value : u.value = c.value?.filter((a => a.name.toLowerCase().includes(e.toLowerCase().trim()))).filter((e => "all" === a.value.value || e.type === a.value.value)).filter((e => "all" === t.value.value || e.rarity === t.value.value)).filter((e => (!(+l.value > 0) || e.rub_amount >= +l.value) && (!(+s.value > 0) || e.rub_amount <= +s.value))) || null
                }
                ), {
                    immediate: !0,
                    deep: !0
                });
                const y = (0,
                l.Fl)(( () => c.value?.length ? "Не найдены предметы для этой игры с выбранными фильтрами. Измените фильтры или купите предметы для другой игры." : "Предметы для этой игры еще не добавлены. Мы уже работаем над их добавлением!."))
                  , k = () => {
                    p.value = w.value,
                    _.value = U.value
                }
                  , f = async () => {
                    try {
                        const e = t.game?.id || "";
                        let a = await r.getPassesMarketList(e);
                        if (!a)
                            return;
                        const l = a.filter((e => e.enabled && e.count > 0));
                        a = l.sort(( (e, a) => +(a.count > 0) - +(e.count > 0))).sort(( (e, a) => a.orders - e.orders)),
                        c.value = a,
                        u.value = a
                    } catch (e) {
                        console.error("Failed to load games:", e)
                    } finally {
                        d.value = !1
                    }
                    k()
                }
                  , S = (0,
                l.Fl)(( () => (u.value || []).map((e => e.rub_amount))))
                  , U = (0,
                l.Fl)(( () => Math.max(...S.value)))
                  , w = (0,
                l.Fl)(( () => Math.min(...S.value)))
                  , Z = () => {
                    b.value = {
                        value: "all",
                        label: "Все типы предметов",
                        icon: "alltypes"
                    },
                    h.value = {
                        value: "all",
                        label: "Все редкости",
                        icon: "diamond"
                    },
                    p.value = 0,
                    _.value = 0,
                    i("closeFilter")
                }
                ;
                return (0,
                l.wF)(f),
                (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, null, [d.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(zt.Z), {
                    key: 0
                })) : ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, {
                    key: 1
                }, [(0,
                s.SU)(o).isMobile ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.iD)("div", zl, [((0,
                l.wg)(),
                (0,
                l.j4)(l.Ob, null, [(0,
                l._)("div", Bl, [(0,
                l.Wm)((0,
                s.SU)(Dl.Z), {
                    icon: "diamond",
                    "icon-type": "solid",
                    modelValue: h.value,
                    placeholder: "Все редкости",
                    options: g.value,
                    "onUpdate:modelValue": t[0] || (t[0] = e => h.value = e)
                }, null, 8, ["modelValue", "options"]), (0,
                l.Wm)((0,
                s.SU)(Dl.Z), {
                    class: "market-title__select type",
                    icon: "alltypes",
                    "icon-type": "solid",
                    modelValue: b.value,
                    placeholder: "Все типы предметов",
                    options: v.value,
                    "onUpdate:modelValue": t[1] || (t[1] = e => b.value = e)
                }, null, 8, ["modelValue", "options"])])], 1024)), (0,
                l._)("div", ql, [t[10] || (t[10] = (0,
                l._)("p", null, "Стоимость", -1)), (0,
                l.Wm)((0,
                s.SU)(m.Z), {
                    class: "market-list-input",
                    "left-icon": "from",
                    type: "number",
                    "right-icon": "rub",
                    "align-text": "right",
                    lite: "",
                    "model-value": p.value,
                    "onUpdate:modelValue": t[2] || (t[2] = e => p.value = e)
                }, null, 8, ["model-value"]), (0,
                l.Wm)((0,
                s.SU)(m.Z), {
                    class: "market-list-input",
                    "left-icon": "to",
                    type: "number",
                    "right-icon": "rub",
                    "align-text": "right",
                    lite: "",
                    "model-value": _.value,
                    "onUpdate:modelValue": t[3] || (t[3] = e => _.value = e)
                }, null, 8, ["model-value"])])])), u.value?.length ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    key: 1,
                    class: (0,
                    x.C_)(["market-list", [`size_${e.size}`]])
                }, [((0,
                l.wg)(!0),
                (0,
                l.iD)(l.HY, null, (0,
                l.Ko)(u.value, (a => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Pl), {
                    key: "pass" + a._id,
                    pass: a,
                    active: !(0,
                    s.SU)(o).isMobile && a.id === e.current?.id,
                    size: e.size,
                    onClick: () => i("onSelectPass", a),
                    "onUpdate:increment": () => i("onSelectPass", a)
                }, null, 8, ["pass", "active", "size", "onClick", "onUpdate:increment"])))), 128))], 2)) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ca.Z), {
                    key: 2
                }, {
                    text: (0,
                    l.w5)(( () => [(0,
                    l._)("span", null, (0,
                    x.zw)(y.value), 1)])),
                    footer: (0,
                    l.w5)(( () => [(0,
                    l.Wm)(tl.Z, {
                        size: "xs",
                        "mobile-size": "xs",
                        "right-icon": "arrowRight",
                        onClick: t[4] || (t[4] = e => i("back"))
                    }, {
                        default: (0,
                        l.w5)(( () => t[11] || (t[11] = [(0,
                        l.Uk)(" КУПИТЬ ПРЕДМЕТ ДЛЯ ДРУГОЙ ИГРЫ ")]))),
                        _: 1,
                        __: [11]
                    })])),
                    _: 1
                }))], 64)), (0,
                s.SU)(o).isMobile && e.isShowFilter ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(jl.Z), {
                    key: 2,
                    "on-close": () => i("closeFilter")
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l._)("div", Fl, [(0,
                    l.Wm)((0,
                    s.SU)(Dl.Z), {
                        icon: "diamond",
                        "icon-type": "solid",
                        modelValue: h.value,
                        placeholder: "Все редкости",
                        options: g.value,
                        "onUpdate:modelValue": t[5] || (t[5] = e => h.value = e)
                    }, null, 8, ["modelValue", "options"]), (0,
                    l.Wm)((0,
                    s.SU)(Dl.Z), {
                        icon: "alltypes",
                        "icon-type": "solid",
                        modelValue: b.value,
                        placeholder: "Все типы предметов",
                        options: v.value,
                        "onUpdate:modelValue": t[6] || (t[6] = e => b.value = e)
                    }, null, 8, ["modelValue", "options"]), (0,
                    l._)("div", Hl, [t[12] || (t[12] = (0,
                    l._)("p", null, "Стоимость", -1)), (0,
                    l._)("div", null, [(0,
                    l.Wm)((0,
                    s.SU)(m.Z), {
                        class: "market-list-input",
                        "left-icon": "from",
                        type: "number",
                        "right-icon": "rub",
                        "align-text": "right",
                        lite: "",
                        "model-value": p.value,
                        "onUpdate:modelValue": t[7] || (t[7] = e => p.value = e)
                    }, null, 8, ["model-value"]), (0,
                    l.Wm)((0,
                    s.SU)(m.Z), {
                        class: "market-list-input",
                        "left-icon": "to",
                        type: "number",
                        "right-icon": "rub",
                        "align-text": "right",
                        lite: "",
                        "model-value": _.value,
                        "onUpdate:modelValue": t[8] || (t[8] = e => _.value = e)
                    }, null, 8, ["model-value"])])]), (0,
                    l._)("div", Ml, [(0,
                    l.Wm)(tl.Z, {
                        size: "xs",
                        class: "mobile-games-passes__input-place__button",
                        onClick: t[9] || (t[9] = e => i("closeFilter"))
                    }, {
                        default: (0,
                        l.w5)(( () => t[13] || (t[13] = [(0,
                        l.Uk)(" ПРИМЕНИТЬ ФИЛЬТР ")]))),
                        _: 1,
                        __: [13]
                    }), (0,
                    l.Wm)(tl.Z, {
                        size: "xs",
                        type: "outline",
                        class: "mobile-games-passes__input-place__button",
                        onClick: Z
                    }, {
                        default: (0,
                        l.w5)(( () => t[14] || (t[14] = [(0,
                        l.Uk)(" СБРОСИТЬ ФИЛЬТР ")]))),
                        _: 1,
                        __: [14]
                    })])])])),
                    _: 1
                }, 8, ["on-close"])) : (0,
                l.kq)("", !0)], 64))
            }
        });
        const Ol = Al;
        var Il = Ol
          , Rl = Il
          , Tl = t(87270);
        const Nl = {
            class: "game-form superPass"
        }
          , Gl = {
            class: "game-form__transfer-method"
        }
          , Vl = {
            class: "game-form__transfer-method__header"
        }
          , El = {
            class: "form-title"
        }
          , Ll = {
            class: "form-description"
        }
          , Yl = {
            class: "game-form__body"
        }
          , $l = {
            key: 0,
            class: "pass-item"
        }
          , Kl = ["src"]
          , Jl = {
            class: "pass-item__name"
        }
          , Xl = {
            class: "pass-item__price"
        }
          , Ql = {
            class: "pass-item__robux"
        }
          , es = {
            key: 1,
            class: "game-form__cover"
        }
          , as = {
            key: 2,
            class: "game-form__description pass"
        }
          , ts = {
            key: 1,
            class: "game-form__cover"
        }
          , ls = {
            key: 2,
            class: "game-form__description"
        }
          , ss = {
            class: "game-form__footer"
        };
        var is = (0,
        l.aZ)({
            __name: "index",
            props: {
                item: {
                    type: String,
                    default: "game"
                },
                game: {
                    type: Object
                },
                pass: {
                    type: Object
                }
            },
            emits: ["submit:game", "submit:pass", "back"],
            setup(e, {emit: a}) {
                const t = e
                  , i = a
                  , o = (0,
                Ze.useTransferPurchaseStore)()
                  , n = (0,
                Ce.G)()
                  , c = (0,
                l.Fl)(( () => "pass" === t.item))
                  , m = (0,
                l.Fl)(( () => c.value ? "Выбранный пасс:" : "Выбранная игра:"))
                  , d = (0,
                l.Fl)(( () => c.value ? "Вы выбрали данный пасс для карты:" : "Информация по выбранной игре:"))
                  , p = (0,
                l.Fl)(( () => c.value ? "Пасс не выбран" : "Игра не выбрана"))
                  , _ = (0,
                l.Fl)(( () => {
                    if (!t.pass)
                        return "";
                    const e = (0,
                    r.kQ)(1, o.rates.superPass);
                    return `Вы моментально получаете пасс! <br />\nКурс покупки пасса  1₽ = ${e} R$`
                }
                ))
                  , v = () => {
                    const e = {
                        isValid: c.value ? !!t.pass : !!t.game,
                        message: c.value ? "Выберите пасс" : "Выберите игру"
                    };
                    return e.isValid || n.setNotification({
                        description: e.message,
                        title: "Внимание!",
                        type: "error"
                    }),
                    e.isValid
                }
                  , g = () => {
                    v() && (c.value ? i("submit:pass") : i("submit:game"))
                }
                ;
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", Nl, [(0,
                l._)("div", Gl, [(0,
                l._)("div", Vl, [(0,
                l._)("span", El, (0,
                x.zw)(m.value), 1), (0,
                l._)("span", Ll, (0,
                x.zw)(d.value), 1)])]), (0,
                l._)("div", Yl, [c.value ? ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, {
                    key: 0
                }, [e.pass ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", $l, [(0,
                l._)("img", {
                    class: "pass-item__cover",
                    src: e.pass.image_uri,
                    alt: "cover"
                }, null, 8, Kl), (0,
                l._)("div", Jl, (0,
                x.zw)(e.pass.name), 1), (0,
                l._)("div", Xl, (0,
                x.zw)(e.pass.rubble_amount) + " ₽", 1), (0,
                l._)("div", Ql, [(0,
                l._)("span", null, (0,
                x.zw)(e.pass.robux), 1), (0,
                l.Wm)(Vt.Z, {
                    type: "solid",
                    name: "robux"
                })])])) : ((0,
                l.wg)(),
                (0,
                l.iD)("div", es, [(0,
                l._)("span", null, (0,
                x.zw)(p.value), 1)])), e.pass ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", as, [t[1] || (t[1] = (0,
                l._)("span", {
                    class: "form-title"
                }, "Описание:", -1)), (0,
                l._)("p", null, (0,
                x.zw)(e.pass.name), 1)])) : (0,
                l.kq)("", !0)], 64)) : (0,
                l.kq)("", !0), c.value ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, {
                    key: 1
                }, [e.game ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Wt), {
                    key: 0,
                    game: e.game,
                    lite: ""
                }, null, 8, ["game"])) : ((0,
                l.wg)(),
                (0,
                l.iD)("div", ts, [(0,
                l._)("span", null, (0,
                x.zw)(p.value), 1)])), e.game ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", ls, [t[2] || (t[2] = (0,
                l._)("span", {
                    class: "form-title"
                }, "Описание:", -1)), (0,
                l._)("p", null, (0,
                x.zw)(e.game?.description), 1)])) : (0,
                l.kq)("", !0)], 64))]), (0,
                l._)("div", ss, [e.pass ? ((0,
                l.wg)(),
                (0,
                l.j4)(Tl.Z, {
                    key: 0,
                    type: "info",
                    text: _.value
                }, {
                    default: (0,
                    l.w5)(( () => t[3] || (t[3] = [(0,
                    l.Uk)(" Пасс не выбран ")]))),
                    _: 1,
                    __: [3]
                }, 8, ["text"])) : (0,
                l.kq)("", !0), (0,
                l.Wm)(oa.Z, {
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: t[0] || (t[0] = e => i("back"))
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        class: "game-form__button",
                        "right-icon": "arrowRight",
                        size: "l",
                        "mobile-size": "l",
                        onClick: g
                    }, {
                        default: (0,
                        l.w5)(( () => t[4] || (t[4] = [(0,
                        l.Uk)(" ДАЛЕЕ ")]))),
                        _: 1,
                        __: [4]
                    })])),
                    _: 1
                })])]))
            }
        });
        const os = is;
        var ns = os
          , rs = ns;
        const us = {
            key: 0,
            class: "market-form__transfer-method"
        }
          , cs = {
            class: "market-form__body"
        }
          , ms = {
            key: 0,
            class: "market-item"
        }
          , ds = ["src"]
          , ps = {
            class: "market-item__info"
        }
          , _s = {
            class: "market-item__name"
        }
          , vs = {
            class: "market-item__properties"
        }
          , gs = {
            class: "market-item__property"
        }
          , hs = {
            class: "market-item__property__value"
        }
          , bs = {
            class: "market-item__property"
        }
          , ys = {
            class: "market-item__property__value"
        }
          , ks = {
            class: "market-item__price"
        }
          , fs = {
            class: "market-item__description"
        }
          , Ss = {
            key: 1,
            class: "market-form__cover"
        }
          , Us = {
            key: 1,
            class: "market-form__footer"
        }
          , ws = "linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))";
        var xs = (0,
        l.aZ)({
            __name: "index",
            props: {
                game: {
                    type: Object
                },
                item: {
                    type: Object,
                    required: !0
                }
            },
            emits: ["submit:marketItem", "back"],
            setup(e, {emit: a}) {
                const t = e
                  , i = a
                  , o = (0,
                Ce.G)()
                  , c = () => (t.item || o.setNotification({
                    description: "Выберите предмет",
                    title: "Внимание!",
                    type: "error"
                }),
                t.item)
                  , m = () => {
                    c() && i("submit:marketItem")
                }
                  , d = (0,
                n.b)()
                  , p = (0,
                l.Fl)(( () => ({
                    background: `${ws}, ${cl.J_[(0,
                    r.Xc)(t.item.rarity)]}`
                })));
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    class: (0,
                    x.C_)(["market-form", {
                        "market-form__desktop": !(0,
                        s.SU)(d).isMobile
                    }])
                }, [(0,
                s.SU)(d).isMobile ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.iD)("div", us, t[1] || (t[1] = [(0,
                l._)("div", {
                    class: "market-form__transfer-method__header"
                }, [(0,
                l._)("span", {
                    class: "form-title"
                }, "Выбранный предмет:"), (0,
                l._)("span", {
                    class: "form-description"
                }, " Вы выбрали данный предмет для трейда: ")], -1)]))), (0,
                l._)("div", cs, [e.item ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", ms, [(0,
                l._)("div", {
                    class: "market-item__header",
                    style: (0,
                    x.j5)({
                        background: (0,
                        s.SU)(cl.i0)[e.item.rarity]
                    })
                }, [(0,
                l._)("img", {
                    class: "market-item__header__img",
                    src: e.item.image_uri,
                    alt: "cover"
                }, null, 8, ds), (0,
                l._)("div", {
                    class: "market-item__header__border market-item__header__border--left",
                    style: (0,
                    x.j5)(p.value)
                }, null, 4), (0,
                l._)("div", {
                    class: "market-item__header__border market-item__header__border--right",
                    style: (0,
                    x.j5)(p.value)
                }, null, 4), (0,
                l.Wm)(Vt.Z, {
                    class: "market-item__header__background",
                    name: "marketItemBackground",
                    type: "solid",
                    style: (0,
                    x.j5)({
                        fill: (0,
                        s.SU)(cl.J_)[e.item.rarity]
                    })
                }, null, 8, ["style"]), (0,
                l._)("div", {
                    class: "market-item__header__rarity",
                    style: (0,
                    x.j5)(p.value)
                }, (0,
                x.zw)(e.item.rarity), 5)], 4), (0,
                l._)("div", ps, [(0,
                l._)("div", _s, (0,
                x.zw)(e.item.name), 1), (0,
                l._)("div", vs, [(0,
                l._)("div", gs, [t[2] || (t[2] = (0,
                l._)("span", {
                    class: "market-item__property__name"
                }, "Тип предмета:", -1)), t[3] || (t[3] = (0,
                l._)("div", {
                    class: "market-item__property__space"
                }, null, -1)), (0,
                l._)("span", hs, (0,
                x.zw)((0,
                s.SU)(cl.Ms)[e.item.type]), 1)]), (0,
                l._)("div", bs, [t[4] || (t[4] = (0,
                l._)("span", {
                    class: "market-item__property__name"
                }, "Редкость:", -1)), t[5] || (t[5] = (0,
                l._)("div", {
                    class: "market-item__property__space"
                }, null, -1)), (0,
                l._)("span", ys, (0,
                x.zw)(e.item.rarity), 1)])]), (0,
                l._)("div", ks, (0,
                x.zw)(e.item.rub_amount) + " ₽", 1), (0,
                l._)("div", fs, [t[6] || (t[6] = (0,
                l._)("span", null, "Описание:", -1)), (0,
                l._)("p", null, ' Предмет для игры "' + (0,
                x.zw)(e.game?.name) + '" типа "' + (0,
                x.zw)(e.item.type) + '" с редкостью "' + (0,
                x.zw)(e.item.rarity) + '" ', 1)])])])) : ((0,
                l.wg)(),
                (0,
                l.iD)("div", Ss, t[7] || (t[7] = [(0,
                l._)("span", null, "Предмет не выбран", -1)])))]), (0,
                s.SU)(d).isMobile ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.iD)("div", Us, [(0,
                l.Wm)(oa.Z, {
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: t[0] || (t[0] = e => i("back"))
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        class: "__button",
                        "right-icon": "arrowRight",
                        size: "l",
                        "mobile-size": "l",
                        onClick: m
                    }, {
                        default: (0,
                        l.w5)(( () => t[8] || (t[8] = [(0,
                        l.Uk)(" ДАЛЕЕ ")]))),
                        _: 1,
                        __: [8]
                    })])),
                    _: 1
                })]))], 2))
            }
        });
        const Zs = xs;
        var Cs = Zs
          , Ps = Cs
          , Ds = t.p + "img/age-example.b2a52e8e.svg"
          , js = t(77242)
          , Ws = t.p + "img/age-banner.10628b4b.svg";
        const zs = ["id", "checked"]
          , Bs = ["for"];
        var qs = (0,
        l.aZ)({
            __name: "radio",
            props: {
                label: {
                    type: String
                },
                id: {
                    type: String
                },
                checked: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e) {
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, null, [(0,
                l._)("input", (0,
                l.dG)({
                    type: "radio",
                    id: e.id
                }, a.$attrs, {
                    checked: e.checked
                }), null, 16, zs), (0,
                l._)("label", {
                    for: e.id
                }, null, 8, Bs)], 64))
            }
        });
        const Fs = qs;
        var Hs = Fs
          , Ms = Hs;
        const As = {
            class: "radio-card__content"
        }
          , Os = {
            class: "radio-card__icon"
        }
          , Is = {
            class: "radio-card__info"
        }
          , Rs = {
            class: "form-title"
        }
          , Ts = {
            class: "radio-card__description"
        }
          , Ns = {
            class: "radio-card__input"
        };
        var Gs = (0,
        l.aZ)({
            __name: "RadioCard",
            props: {
                title: {
                    type: String
                },
                description: {
                    type: String
                },
                icon: {
                    type: Wl.P
                },
                active: {
                    type: Boolean,
                    default: !1
                },
                id: {
                    type: String
                }
            },
            setup(e) {
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    class: (0,
                    x.C_)(["radio-card", {
                        active: e.active
                    }])
                }, [(0,
                l._)("div", As, [(0,
                l._)("div", Os, [(0,
                l.Wm)((0,
                s.SU)(p.Z), {
                    name: e.icon,
                    type: "solid"
                }, null, 8, ["name"])]), (0,
                l._)("div", Is, [(0,
                l._)("div", Rs, (0,
                x.zw)(e.title), 1), (0,
                l._)("div", Ts, (0,
                x.zw)(e.description), 1)])]), (0,
                l._)("div", Ns, [(0,
                l.Wm)((0,
                s.SU)(Ms), {
                    id: e.id,
                    checked: e.active
                }, null, 8, ["id", "checked"])])], 2))
            }
        });
        const Vs = Gs;
        var Es = Vs;
        const Ls = {
            class: "account-age"
        }
          , Ys = {
            key: 0,
            src: Ws,
            class: "account-age__banner",
            alt: "age-banner"
        }
          , $s = {
            key: 1,
            class: "account-age__title form-title"
        }
          , Ks = {
            class: "account-age__actions"
        }
          , Js = ["href"]
          , Xs = {
            class: "account-age__list"
        }
          , Qs = 'Для аккаунтов с пометкой "<13" обмен предметами возможен только через дружбу';
        var ei = (0,
        l.aZ)({
            __name: "index",
            props: {
                age: {
                    type: Number
                },
                isLight: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e) {
                const a = [{
                    title: "Возраст менее 13 лет",
                    description: "Трейд предмета через дружбу",
                    icon: "treeSmall",
                    value: 1
                }, {
                    title: "Возраст более 13 лет",
                    description: "Обычный трейд предмета",
                    icon: "treeBig",
                    value: 0
                }]
                  , t = (0,
                Ze.useTransferPurchaseStore)()
                  , i = e => {
                    t.setMarketLimitAge(e)
                }
                  , o = () => {
                    t.showModal("age")
                }
                ;
                return (n, r) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", Ls, [e.isLight ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.iD)("img", Ys)), e.isLight ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.iD)("span", $s, " Выберите тип аккаунта в Roblox ")), (0,
                l._)("div", Ks, [(0,
                l._)("a", {
                    href: (0,
                    s.SU)(cl.Wp),
                    target: "_blank"
                }, "Посмотреть на сайте Роблокс", 8, Js), e.isLight ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.iD)("a", {
                    key: 0,
                    href: "#",
                    onClick: (0,
                    I.iM)(o, ["prevent"])
                }, " Где посмотреть тип аккаунта? "))]), (0,
                l._)("div", Xs, [((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, null, (0,
                l.Ko)(a, (e => (0,
                l.Wm)(Es, {
                    key: e.value,
                    title: e.title,
                    description: e.description,
                    icon: e.icon,
                    active: (0,
                    s.SU)(t).marketLimitAge === e.value,
                    onClick: a => i(e.value)
                }, null, 8, ["title", "description", "icon", "active", "onClick"]))), 64))]), (0,
                l.Wm)(Tl.Z, {
                    class: "account-age__message",
                    type: "info",
                    text: Qs
                })]))
            }
        });
        const ai = ei;
        var ti = ai
          , li = ti;
        const si = {
            class: "age-modal-mobile"
        }
          , ii = {
            class: "age-modal__footer"
        }
          , oi = "Зайди в свой аккаунт Роблокс и посмотри, какая отметка стоит рядом с именем профиля.";
        var ni = (0,
        l.aZ)({
            __name: "age-modal",
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                loading: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["close", "submit"],
            setup(e, {emit: a}) {
                const t = (0,
                n.b)()
                  , i = (0,
                Ze.useTransferPurchaseStore)()
                  , o = (0,
                Ce.G)()
                  , r = a;
                function c() {
                    r("close")
                }
                function m() {
                    null !== i.marketLimitAge ? r("submit") : o.setNotification({
                        description: "Выберите возраст",
                        title: "Внимание!",
                        type: "error"
                    })
                }
                function d() {
                    window.open(cl.Wp, "_blank")
                }
                return (a, i) => e.show && (0,
                s.SU)(t).isMobile ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(jl.Z), {
                    key: 0,
                    "on-close": c,
                    class: "age-modal-mobile"
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l._)("div", si, [i[1] || (i[1] = (0,
                    l._)("div", {
                        class: "age-modal-mobile__title form-title"
                    }, " Укажите возраст аккаунта в Roblox ", -1)), (0,
                    l._)("div", {
                        class: "age-modal-mobile__description"
                    }, (0,
                    x.zw)(oi)), i[2] || (i[2] = (0,
                    l._)("div", {
                        class: "age-modal-mobile__image"
                    }, [(0,
                    l._)("img", {
                        src: Ds,
                        alt: "age-example"
                    })], -1)), (0,
                    l.Wm)((0,
                    s.SU)(li), {
                        "is-light": ""
                    }), (0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        class: "age-modal-mobile__button",
                        "right-icon": "arrowRight",
                        loading: e.loading,
                        onClick: m
                    }, {
                        default: (0,
                        l.w5)(( () => i[0] || (i[0] = [(0,
                        l.Uk)(" Выбрать ")]))),
                        _: 1,
                        __: [0]
                    }, 8, ["loading"])])])),
                    _: 1
                })) : e.show ? ((0,
                l.wg)(),
                (0,
                l.j4)(js.Z, {
                    key: 1,
                    title: "Где посмотреть тип аккаунта?",
                    imageName: "fileUser",
                    "image-type": "outline",
                    onClose: c
                }, {
                    content: (0,
                    l.w5)(( () => [(0,
                    l._)("div", {
                        class: "age-modal__content"
                    }, (0,
                    x.zw)(oi)), i[3] || (i[3] = (0,
                    l._)("div", {
                        class: "age-modal__image"
                    }, [(0,
                    l._)("img", {
                        src: Ds,
                        alt: "age-example"
                    })], -1))])),
                    footer: (0,
                    l.w5)(( () => [(0,
                    l._)("div", ii, [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        class: "age-modal__button",
                        "right-icon": "arrowRight",
                        onClick: d
                    }, {
                        default: (0,
                        l.w5)(( () => i[4] || (i[4] = [(0,
                        l.Uk)(" Перейти в роблокс ")]))),
                        _: 1,
                        __: [4]
                    }), (0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        class: "age-modal__button",
                        type: "secondary",
                        onClick: c
                    }, {
                        default: (0,
                        l.w5)(( () => i[5] || (i[5] = [(0,
                        l.Uk)(" Закрыть ")]))),
                        _: 1,
                        __: [5]
                    })])])),
                    _: 1
                })) : (0,
                l.kq)("", !0)
            }
        });
        const ri = ni;
        var ui = ri
          , ci = t(45546)
          , mi = t(72360);
        const di = {
            class: "transfer__purchase-form"
        }
          , pi = {
            class: "transfer__body"
        }
          , _i = {
            key: "transfer__purchase-form",
            class: "transfer__purchase-form"
        }
          , vi = {
            class: "transfer__body"
        }
          , gi = {
            key: 1,
            class: "transfer__purchase-form"
        }
          , hi = {
            class: "transfer__body"
        }
          , bi = {
            class: "transfer__purchase-form"
        }
          , yi = {
            class: "transfer__body"
        }
          , ki = {
            key: 0,
            class: "transfer__banner",
            src: st,
            alt: "balance-banner"
        }
          , fi = {
            key: "transfer__purchase-form",
            class: "transfer__purchase-form"
        }
          , Si = {
            class: "transfer__body transfer__body--gameMarket"
        }
          , Ui = {
            key: 1,
            class: "transfer__purchase-form"
        }
          , wi = {
            class: "transfer__body transfer__body--market"
        }
          , xi = {
            class: "transfer__purchase-form"
        }
          , Zi = {
            class: "transfer__body"
        }
          , Ci = {
            key: 0,
            class: "transfer__banner",
            src: st,
            alt: "balance-banner"
        }
          , Pi = {
            key: 1,
            class: "transfer__banner",
            src: st,
            alt: "balance-banner"
        };
        var Di = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = (0,
                l.f3)("analytics")
                  , t = (0,
                Ze.useTransferPurchaseStore)()
                  , o = (0,
                i.yj)()
                  , n = (0,
                i.tv)()
                  , r = (0,
                l.Fl)(( () => {
                    const e = {
                        imgName: "binocular",
                        headerTitle: "",
                        headerDescription: ""
                    }
                      , a = t.isPurchaseWithoutGamepass && "transfer" === O.value && 3 === t.step ? 2 : 1
                      , l = t.step - a;
                    for (const t in e)
                        e[t] = $.value[l][t];
                    return e
                }
                ))
                  , u = (0,
                l.Fl)(( () => N.value && (1 === t.step || 2 === t.step) || G.value && (1 === t.step || 2 === t.step)))
                  , c = (0,
                l.Fl)(( () => 2 === t.step && V.value))
                  , m = (0,
                l.Fl)(( () => {
                    const e = {
                        2: "game",
                        3: "pass"
                    };
                    return t.search[e[t.step]]
                }
                ))
                  , d = (0,
                s.iH)(null)
                  , p = (0,
                s.iH)(null)
                  , _ = (0,
                s.iH)(0)
                  , v = (0,
                s.iH)(null)
                  , {onBalancePaySubmit: g, onSubmitPaymentSystem: h, validateAmountToReplenish: b, updatePaymentData: y, validateGiftAmount: k, checkActivePassOrder: f, validatePaymentMethod: S, saveSearch: U, onClickSearch: Z, resetState: C, checkRouteId: P, checkSmartOrder: D, checkActiveSmartOrders: j, paymentMethod: W, payFromBalance: z, loading: B, error: q, email: F, submitDisabled: H, rbxAmountInStock: M, amountToReplenishBalance: A, method: O, gift: R, isGiftMethod: T, isPassMethod: N, isMarketMethod: G, isTransferMethod: V, game: E, pass: L, YM_GOALS: Y} = (0,
                De.f)(d, p, _)
                  , {dataByStep: $} = (0,
                ci.h)(!1, O, !1)
                  , {sendGamePassAnalyticsAB: K} = mi.T.useABTests()
                  , J = (e, t) => {
                    d.value = e,
                    t && (a?.send(t, {}),
                    a?.sendAbMetric(t, {}))
                }
                  , X = e => {
                    p.value = e,
                    e && (a?.send("purch_purch_trans_2_place", {}),
                    a?.sendAbMetric("purch_purch_trans_2_place", {}))
                }
                  , Q = async e => {
                    _.value = Number(e);
                    const l = "transfer" === O.value;
                    if (l && d?.value?.name) {
                        const e = await t.getPurchasesSum(d.value.name) + _.value > 5e3;
                        e && (a?.send("modal_warningban_shown", {}),
                        t.showModal("warningOneMethod"))
                    }
                    if (!p.value)
                        return;
                    a?.send("purch_purch_trans_3_first", {}),
                    a?.sendAbMetric("purch_purch_trans_3_first", {});
                    const s = l && t.isPurchaseWithoutGamepass ? 3 : 2;
                    t.setStep(s)
                }
                  , ee = () => {
                    if (A.value > 0) {
                        z.value = !1;
                        const e = (0,
                        Ce.G)();
                        e.setNotification({
                            title: "Внимание!",
                            description: `Пополните баланс на недостающие ${A.value} рублей!`,
                            type: "warning"
                        })
                    }
                }
                  , ae = async e => {
                    y(),
                    v.value = e,
                    t.setStep(3),
                    a?.send("purch_purch_trans_4_gamepass", {}),
                    a?.sendAbMetric("purch_purch_trans_4_gamepass", {}),
                    K("purchase"),
                    ee()
                }
                  , te = async () => {
                    const e = await f();
                    e || (t.setStep(4),
                    ee())
                }
                  , le = e => {
                    t.step >= e && t.setStep(e)
                }
                  , se = e => {
                    W.value = e,
                    b(A.value, e?.min)
                }
                  , ie = () => {
                    if (!k(R.value?.price))
                        return t.setGiftData(T.value, "active"),
                        t.setGiftData(R.value?.price, "rub"),
                        t.setGiftData(R.value?.robux_amount, "robux"),
                        t.setGiftData(R.value?.instruction, "instruction"),
                        t.showModal("balance"),
                        void a?.send("purch_gift_e1_payment_insufficient", {});
                    a?.send("purch_purch_gift_1_card", {}),
                    _.value = R.value?.robux_amount,
                    t.setStep(3)
                }
                  , oe = () => {
                    t.search.game = "",
                    t.search.pass = "",
                    t.step = G.value ? 1 : 2
                }
                  , ne = e => {
                    if (!u.value)
                        return;
                    const {step: a} = t;
                    1 === a && U(e, "game"),
                    2 === a && U(e, "pass")
                }
                  , re = async () => {
                    const e = G.value ? "purch_purch_market_1_game" : "purch_purch_super_1_game";
                    a?.send(e, {}),
                    t.setStep(2)
                }
                  , ce = () => {
                    const e = G.value ? "purch_purch_market_2_item" : "purch_purch_super_2_pass";
                    a?.send(e, {}),
                    t.setStep(3)
                }
                  , me = e => {
                    const a = t.step;
                    1 !== a ? T.value || t.skipGamePass || t.isPurchaseWithoutGamepass ? t.setStep(1) : (t.setStep(a - 1),
                    e && E.value && (L.value = null)) : n.push("/")
                }
                  , de = () => {
                    me(),
                    t.setMarketLimitAge(null)
                }
                ;
                return (0,
                l.YP)(( () => o.query), ( () => {
                    C(),
                    o.query.method ? O.value = o.query.method : O.value = "transfer"
                }
                )),
                (0,
                l.wF)(( () => {
                    const e = o.query.method;
                    e && (O.value = e,
                    t.setMethod(e)),
                    P(( () => t.setStep(2))),
                    D(( () => t.setStep(2))),
                    j()
                }
                )),
                (0,
                l.Ah)(( () => {
                    t.setMethod("transfer"),
                    t.setSkipGamePass(!1)
                }
                )),
                (e, a) => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(w), {
                    "method-name": "Transfer",
                    headerTitle: r.value?.headerTitle,
                    headerDescription: r.value?.headerDescription,
                    headerIcon: r.value?.imgName,
                    "is-show-search": u.value,
                    "is-show-support": c.value,
                    "search-value": m.value,
                    method: (0,
                    s.SU)(O),
                    "onUpdate:search": ne,
                    "onClick:search": a[21] || (a[21] = e => (0,
                    s.SU)(Z)((0,
                    s.SU)(t).step))
                }, {
                    content: (0,
                    l.w5)(( () => [((0,
                    l.wg)(),
                    (0,
                    l.j4)(l.Ob, null, [(0,
                    l.wy)((0,
                    l._)("div", di, [(0,
                    l._)("div", pi, [(0,
                    s.SU)(T) ? ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(St.Z), {
                        key: 0,
                        size: "l",
                        current: (0,
                        s.SU)(R),
                        columns: 4,
                        onOnSelectGift: a[0] || (a[0] = e => R.value = e)
                    }, null, 8, ["current"])) : ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(ue.Z), {
                        key: 1,
                        method: (0,
                        s.SU)(O),
                        "selected-user": d.value,
                        "selected-place": p.value,
                        onOnSelectUser: a[1] || (a[1] = e => J(e, (0,
                        s.SU)(Y).TRANSFER_NICK)),
                        onOnSelectPlace: X
                    }, null, 8, ["method", "selected-user", "selected-place"]))]), (0,
                    l.Wm)((0,
                    s.SU)(Ge), {
                        method: (0,
                        s.SU)(O),
                        nickname: d.value?.name,
                        place: p.value?.name,
                        "rbx-amount-in-stock": (0,
                        s.SU)(M),
                        gift: (0,
                        s.SU)(R),
                        onBack: me,
                        onSubmit: Q,
                        "onSubmit:gift": ie
                    }, null, 8, ["method", "nickname", "place", "rbx-amount-in-stock", "gift"])], 512), [[I.F8, 1 === (0,
                    s.SU)(t).step && !(0,
                    s.SU)(N) && !(0,
                    s.SU)(G)]])], 1024)), (0,
                    s.SU)(N) ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)(l.HY, {
                        key: 0
                    }, [1 === (0,
                    s.SU)(t).step ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", _i, [(0,
                    l._)("div", vi, [(0,
                    l.Wm)((0,
                    s.SU)(Ot), {
                        class: "transfer__games-list",
                        current: (0,
                        s.SU)(E),
                        onOnSelectGame: a[2] || (a[2] = e => E.value = e)
                    }, null, 8, ["current"])]), (0,
                    l.Wm)((0,
                    s.SU)(rs), {
                        game: (0,
                        s.SU)(E),
                        "onSubmit:game": re,
                        onBack: me
                    }, null, 8, ["game"])])) : (0,
                    l.kq)("", !0), 2 === (0,
                    s.SU)(t).step ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", gi, [(0,
                    l._)("div", hi, [(0,
                    l.Wm)((0,
                    s.SU)(ul), {
                        class: "transfer__games-list",
                        current: (0,
                        s.SU)(L),
                        game: (0,
                        s.SU)(E),
                        "search-value": m.value,
                        onOnSelectPass: a[3] || (a[3] = e => L.value = e),
                        onBack: oe
                    }, null, 8, ["current", "game", "search-value"])]), (0,
                    l.Wm)((0,
                    s.SU)(rs), {
                        pass: (0,
                        s.SU)(L),
                        game: (0,
                        s.SU)(E),
                        item: "pass",
                        "onSubmit:pass": ce,
                        onBack: a[4] || (a[4] = e => me(!0))
                    }, null, 8, ["pass", "game"])])) : (0,
                    l.kq)("", !0), (0,
                    l.wy)((0,
                    l._)("div", bi, [(0,
                    l._)("div", yi, [(0,
                    l.Wm)((0,
                    s.SU)(ue.Z), {
                        method: (0,
                        s.SU)(O),
                        "selected-user": d.value,
                        onOnSelectUser: a[5] || (a[5] = e => J(e, (0,
                        s.SU)(Y).SUPER_PASS_NICK))
                    }, null, 8, ["method", "selected-user"])]), (0,
                    l.Wm)((0,
                    s.SU)(Ge), {
                        method: (0,
                        s.SU)(O),
                        nickname: d.value?.name,
                        onBack: me,
                        "onSubmit:superPass": te
                    }, null, 8, ["method", "nickname"])], 512), [[I.F8, 3 === (0,
                    s.SU)(t).step]]), 4 === (0,
                    s.SU)(t).step ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", {
                        key: 2,
                        class: (0,
                        x.C_)(["transfer__payment", {
                            end: (0,
                            s.SU)(z)
                        }])
                    }, [(0,
                    s.SU)(z) ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("img", ki)) : ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(Ve.Z), {
                        key: 1,
                        "on-select": se
                    })), (0,
                    l.Wm)((0,
                    s.SU)(ft), {
                        game: (0,
                        s.SU)(E),
                        pass: (0,
                        s.SU)(L),
                        method: (0,
                        s.SU)(O),
                        loading: (0,
                        s.SU)(B),
                        disabled: (0,
                        s.SU)(H),
                        "pay-from-balance": (0,
                        s.SU)(z),
                        "payment-method": (0,
                        s.SU)(W),
                        "method-validate": (0,
                        s.SU)(S),
                        "amount-to-replenish-balance": (0,
                        s.SU)(A),
                        onBack: me,
                        "onInput:email": a[6] || (a[6] = e => F.value = e),
                        "onSubmit:balance": a[7] || (a[7] = e => (0,
                        s.SU)(g)((0,
                        s.SU)(Y).BALANCE_PURCHASE_SUPER)),
                        "onSubmit:paymentSystem": a[8] || (a[8] = e => (0,
                        s.SU)(h)((0,
                        s.SU)(Y).CREDITS_PURCHASE_SUPER))
                    }, null, 8, ["game", "pass", "method", "loading", "disabled", "pay-from-balance", "payment-method", "method-validate", "amount-to-replenish-balance"])], 2)) : (0,
                    l.kq)("", !0)], 64)) : (0,
                    s.SU)(G) ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)(l.HY, {
                        key: 1
                    }, [1 === (0,
                    s.SU)(t).step ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", fi, [(0,
                    l._)("div", Si, [(0,
                    l.Wm)((0,
                    s.SU)(Gt), {
                        class: "transfer__games-list",
                        current: (0,
                        s.SU)(E),
                        onOnSelectGame: a[9] || (a[9] = e => E.value = e)
                    }, null, 8, ["current"])]), (0,
                    l.Wm)((0,
                    s.SU)(rs), {
                        game: (0,
                        s.SU)(E),
                        "onSubmit:game": re,
                        onBack: me
                    }, null, 8, ["game"])])) : (0,
                    l.kq)("", !0), 2 === (0,
                    s.SU)(t).step ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", Ui, [(0,
                    l._)("div", wi, [(0,
                    l.Wm)((0,
                    s.SU)(Rl), {
                        class: "transfer__games-list",
                        current: (0,
                        s.SU)(L),
                        game: (0,
                        s.SU)(E),
                        "search-value": m.value,
                        onOnSelectPass: a[10] || (a[10] = e => L.value = e),
                        onBack: oe
                    }, null, 8, ["current", "game", "search-value"])]), (0,
                    l.Wm)((0,
                    s.SU)(Ps), {
                        item: (0,
                        s.SU)(L),
                        game: (0,
                        s.SU)(E),
                        onBack: a[11] || (a[11] = e => me(!0)),
                        "onSubmit:marketItem": ce
                    }, null, 8, ["item", "game"])])) : (0,
                    l.kq)("", !0), (0,
                    l.wy)((0,
                    l._)("div", xi, [(0,
                    l._)("div", Zi, [(0,
                    l.Wm)((0,
                    s.SU)(ue.Z), {
                        method: (0,
                        s.SU)(O),
                        "selected-user": d.value,
                        onOnSelectUser: a[12] || (a[12] = e => J(e, (0,
                        s.SU)(Y).MARKET_NICK))
                    }, null, 8, ["method", "selected-user"])]), (0,
                    l.Wm)((0,
                    s.SU)(Ge), {
                        method: (0,
                        s.SU)(O),
                        nickname: d.value?.name,
                        "age-limit": (0,
                        s.SU)(t).marketLimitAge,
                        "is-loading": (0,
                        s.SU)(B),
                        onBack: de,
                        "onSubmit:market": te
                    }, null, 8, ["method", "nickname", "age-limit", "is-loading"]), (0,
                    l.Wm)(ui, {
                        show: (0,
                        s.SU)(t).modals.isShowAge,
                        loading: (0,
                        s.SU)(B),
                        onClose: a[13] || (a[13] = e => (0,
                        s.SU)(t).hideModal("age")),
                        onSubmit: te
                    }, null, 8, ["show", "loading"])], 512), [[I.F8, 3 === (0,
                    s.SU)(t).step]]), 4 === (0,
                    s.SU)(t).step ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", {
                        key: 2,
                        class: (0,
                        x.C_)(["transfer__payment", {
                            end: (0,
                            s.SU)(z)
                        }])
                    }, [(0,
                    s.SU)(z) ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("img", Ci)) : ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(Ve.Z), {
                        key: 1,
                        "on-select": se
                    })), (0,
                    l.Wm)((0,
                    s.SU)(ft), {
                        game: (0,
                        s.SU)(E),
                        pass: (0,
                        s.SU)(L),
                        method: (0,
                        s.SU)(O),
                        loading: (0,
                        s.SU)(B),
                        disabled: (0,
                        s.SU)(H),
                        "pay-from-balance": (0,
                        s.SU)(z),
                        "payment-method": (0,
                        s.SU)(W),
                        "method-validate": (0,
                        s.SU)(S),
                        "amount-to-replenish-balance": (0,
                        s.SU)(A),
                        onBack: me,
                        "onInput:email": a[14] || (a[14] = e => F.value = e),
                        "onSubmit:balance": a[15] || (a[15] = e => (0,
                        s.SU)(g)((0,
                        s.SU)(Y).BALANCE_PURCHASE_MARKET)),
                        "onSubmit:paymentSystem": a[16] || (a[16] = e => (0,
                        s.SU)(h)((0,
                        s.SU)(Y).CREDITS_PURCHASE_MARKET))
                    }, null, 8, ["game", "pass", "method", "loading", "disabled", "pay-from-balance", "payment-method", "method-validate", "amount-to-replenish-balance"])], 2)) : (0,
                    l.kq)("", !0)], 64)) : ((0,
                    l.wg)(),
                    (0,
                    l.iD)(l.HY, {
                        key: 2
                    }, [2 === (0,
                    s.SU)(t).step ? ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(it.Z), {
                        key: 0,
                        place: p.value,
                        robux: _.value,
                        "on-submit": ae,
                        onBack: me
                    }, null, 8, ["place", "robux"])) : (0,
                    l.kq)("", !0), 3 === (0,
                    s.SU)(t).step ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", {
                        key: 1,
                        class: (0,
                        x.C_)(["transfer__payment", {
                            center: (0,
                            s.SU)(z)
                        }])
                    }, [(0,
                    s.SU)(z) ? (0,
                    l.kq)("", !0) : ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(Ve.Z), {
                        key: 0,
                        "on-select": se,
                        "show-balance-card": (0,
                        s.SU)(z)
                    }, null, 8, ["show-balance-card"])), (0,
                    l.Wm)((0,
                    s.SU)(Ee.Z), {
                        "purchase-method": (0,
                        s.SU)(O),
                        "ruble-amount": (0,
                        s.SU)(R)?.price,
                        "payment-method": (0,
                        s.SU)(W),
                        "robux-amount": _.value,
                        "pay-from-balance": (0,
                        s.SU)(z),
                        "error-message": (0,
                        s.SU)(q),
                        loading: (0,
                        s.SU)(B),
                        disabled: (0,
                        s.SU)(H),
                        "amount-to-replenish-balance": (0,
                        s.SU)(A),
                        rate: (0,
                        s.SU)(t).rate,
                        "promo-bonus": (0,
                        s.SU)(t).promoCode.bonus,
                        "method-validate": (0,
                        s.SU)(S),
                        onBack: me,
                        "onInput:email": a[17] || (a[17] = e => F.value = e),
                        "onSubmit:balance": a[18] || (a[18] = e => (0,
                        s.SU)(g)((0,
                        s.SU)(Y).BALANCE_PURCHASE, (0,
                        s.SU)(T) ? (0,
                        s.SU)(Y).GIFT_PURCHASE : void 0)),
                        "onSubmit:paymentSystem": a[19] || (a[19] = e => (0,
                        s.SU)(h)((0,
                        s.SU)(Y).CREDITS_PURCHASE)),
                        "onCheckPromo:error": a[20] || (a[20] = e => le(1))
                    }, null, 8, ["purchase-method", "ruble-amount", "payment-method", "robux-amount", "pay-from-balance", "error-message", "loading", "disabled", "amount-to-replenish-balance", "rate", "promo-bonus", "method-validate"]), (0,
                    s.SU)(z) ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("img", Pi)) : (0,
                    l.kq)("", !0)], 2)) : (0,
                    l.kq)("", !0)], 64))])),
                    _: 1
                }, 8, ["headerTitle", "headerDescription", "headerIcon", "is-show-search", "is-show-support", "search-value", "method"]))
            }
        });
        const ji = Di;
        var Wi = ji
          , zi = Wi;
        t(99892);
        const Bi = {
            class: "mobile-games-passes"
        }
          , qi = {
            class: "mobile-games-passes__input-account"
        };
        var Fi = (0,
        l.aZ)({
            __name: "index",
            props: {
                step: {
                    type: Number,
                    default: 2
                },
                game: {
                    type: Object
                },
                pass: {
                    type: Object
                },
                selectedGame: {
                    type: Object,
                    default: null
                }
            },
            emits: ["onGameInput", "onPassInput", "submit:game", "submit:pass", "back"],
            setup(e, {emit: a}) {
                const t = a
                  , o = e
                  , n = (0,
                i.tv)()
                  , r = (0,
                Ce.G)()
                  , c = () => {
                    const e = o.game?.in_game ? "Внимание!" : "Успешно!"
                      , a = o.game?.in_game ? "Чтобы получить пасс для выбранной игры, вам понадобится зайти в игру после оплаты." : "Вам не нужно будет заходить в игру, чтобы получить пасс.";
                    r.setNotification({
                        description: a,
                        title: e,
                        type: "success"
                    })
                }
                ;
                function m() {
                    t("back")
                }
                function d() {
                    if (1 === o.step)
                        return t("submit:game"),
                        void c();
                    t("submit:pass")
                }
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", Bi, [(0,
                l._)("div", qi, [((0,
                l.wg)(),
                (0,
                l.j4)(l.Ob, null, [1 === e.step ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Ot), {
                    key: 0,
                    class: "transfer__games-list",
                    current: e.game,
                    onOnSelectGame: t[0] || (t[0] = e => a.$emit("onGameInput", e))
                }, null, 8, ["current"])) : (0,
                l.kq)("", !0)], 1024)), 2 === e.step ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ul), {
                    key: 0,
                    class: "transfer__games-list",
                    current: e.pass,
                    game: e.game,
                    onOnSelectPass: t[1] || (t[1] = e => a.$emit("onPassInput", e))
                }, null, 8, ["current", "game"])) : (0,
                l.kq)("", !0)]), 1 === e.step ? ((0,
                l.wg)(),
                (0,
                l.j4)(oa.Z, {
                    key: 0,
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: t[2] || (t[2] = e => (0,
                    s.SU)(n).push({
                        name: "home"
                    }))
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        "right-icon": "arrowRight",
                        size: "l",
                        "mobile-size": "l",
                        class: "mobile-games-passes__input-place__button",
                        disabled: !e.game,
                        onClick: d
                    }, {
                        default: (0,
                        l.w5)(( () => t[3] || (t[3] = [(0,
                        l.Uk)(" ВЫБРАТЬ ")]))),
                        _: 1,
                        __: [3]
                    }, 8, ["disabled"])])),
                    _: 1
                })) : ((0,
                l.wg)(),
                (0,
                l.j4)(oa.Z, {
                    key: 1,
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: m
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        "right-icon": "arrowRight",
                        size: "l",
                        "mobile-size": "l",
                        class: "mobile-games-passes__input-place__button",
                        disabled: !e.pass,
                        onClick: d
                    }, {
                        default: (0,
                        l.w5)(( () => t[4] || (t[4] = [(0,
                        l.Uk)(" ВЫБРАТЬ ")]))),
                        _: 1,
                        __: [4]
                    }, 8, ["disabled"])])),
                    _: 1
                }))]))
            }
        });
        const Hi = Fi;
        var Mi = Hi
          , Ai = Mi;
        const Oi = {
            class: "mobile-games-passes"
        }
          , Ii = {
            class: "mobile-games-passes__input-account"
        };
        var Ri = (0,
        l.aZ)({
            __name: "index",
            props: {
                step: {
                    type: Number,
                    default: 2
                },
                game: {
                    type: Object
                },
                pass: {
                    type: Object
                },
                selectedGame: {
                    type: Object,
                    default: null
                },
                isShowFilter: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["onGameInput", "onPassInput", "submit:game", "submit:pass", "closeFilter", "back"],
            setup(e, {emit: a}) {
                const t = a
                  , o = e
                  , n = (0,
                Ce.G)()
                  , r = (0,
                i.tv)()
                  , c = () => {
                    const e = "Внимание!"
                      , a = "Чтобы получить предмет для выбранной игры, вам понадобится зайти в игру после оплаты.";
                    n.setNotification({
                        description: a,
                        title: e,
                        type: "success"
                    })
                }
                ;
                function m() {
                    t("back")
                }
                function d() {
                    if (1 === o.step)
                        return t("submit:game"),
                        void c();
                    t("submit:pass")
                }
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", Oi, [(0,
                l._)("div", Ii, [((0,
                l.wg)(),
                (0,
                l.j4)(l.Ob, null, [1 === e.step ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Gt), {
                    key: 0,
                    class: "transfer__games-list",
                    current: e.game,
                    onOnSelectGame: t[0] || (t[0] = e => a.$emit("onGameInput", e))
                }, null, 8, ["current"])) : (0,
                l.kq)("", !0)], 1024)), 2 === e.step ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Rl), {
                    key: 0,
                    class: "transfer__games-list",
                    current: e.pass,
                    game: e.game,
                    isShowFilter: e.isShowFilter,
                    onCloseFilter: t[1] || (t[1] = e => a.$emit("closeFilter")),
                    onBack: m,
                    onOnSelectPass: t[2] || (t[2] = e => a.$emit("onPassInput", e))
                }, null, 8, ["current", "game", "isShowFilter"])) : (0,
                l.kq)("", !0), 3 === e.step ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Ps), {
                    key: 1,
                    item: e.pass,
                    game: e.game
                }, null, 8, ["item", "game"])) : (0,
                l.kq)("", !0)]), 1 === e.step ? ((0,
                l.wg)(),
                (0,
                l.j4)(oa.Z, {
                    key: 0,
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: t[3] || (t[3] = e => (0,
                    s.SU)(r).push({
                        name: "home"
                    }))
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        "right-icon": "arrowRight",
                        size: "l",
                        "mobile-size": "l",
                        class: "mobile-games-passes__input-place__button",
                        disabled: !e.game,
                        onClick: d
                    }, {
                        default: (0,
                        l.w5)(( () => t[4] || (t[4] = [(0,
                        l.Uk)(" ВЫБРАТЬ ")]))),
                        _: 1,
                        __: [4]
                    }, 8, ["disabled"])])),
                    _: 1
                })) : ((0,
                l.wg)(),
                (0,
                l.j4)(oa.Z, {
                    key: 1,
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: m
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        "right-icon": "arrowRight",
                        size: "l",
                        "mobile-size": "l",
                        class: "mobile-games-passes__input-place__button",
                        disabled: !e.pass,
                        onClick: d
                    }, {
                        default: (0,
                        l.w5)(( () => t[5] || (t[5] = [(0,
                        l.Uk)(" ВЫБРАТЬ ")]))),
                        _: 1,
                        __: [5]
                    }, 8, ["disabled"])])),
                    _: 1
                }))]))
            }
        });
        const Ti = Ri;
        var Ni = Ti
          , Gi = Ni;
        const Vi = [{
            title: "Количество робуксов",
            description: "Выберите предпочитаемое для покупки количество робуксов",
            icon: "robux"
        }, {
            title: "Найдите свой аккаунт",
            description: "Пожалуйста, введите корректные данные, чтобы избежать ошибок",
            icon: "fileUser"
        }, {
            title: "Выберите публичный Place",
            description: "",
            icon: "image"
        }, {
            title: "Создание и настройка Game-Pass",
            description: "Внимательно ознакомьтесь с инструкцией и выполните все указанные действия",
            icon: "mapLocation"
        }, {
            title: "Оплата заказа",
            description: "Пожалуйста, введите корректные данные, чтобы избежать ошибок",
            icon: "robux"
        }]
          , Ei = [{
            icon: "gamepad",
            title: "Выберите игру",
            description: "Выберите игру из списка"
        }, {
            icon: "diamond",
            title: "Выберите пасс",
            description: "Выбери нужный пасс"
        }, {
            icon: "user",
            title: "Введи свои данные",
            description: "Введи никнейм, выбери персонажа из игры Roblox"
        }, {
            icon: "card",
            title: "Выберите платежный метод",
            description: "Выберите нужный платежный метод из списка"
        }, {
            icon: "checkedBox",
            title: "Оплати свой заказ",
            description: "Выбери платежный метод и оплати заказ"
        }]
          , Li = [{
            icon: "gamepad",
            title: "Выберите игру",
            description: "Выберите игру из списка"
        }, {
            icon: "diamond",
            title: "Выберите предмет",
            description: "Выбери нужный предмет"
        }, {
            icon: "diamond",
            title: "Выберите предмет",
            description: "Вы выбрали данный предмет для трейда: "
        }, {
            icon: "user",
            title: "Введи свои данные",
            description: "Введи никнейм, выбери персонажа из игры Roblox и выберите плейс"
        }, {
            icon: "card",
            title: "Выберите платежный метод",
            description: "Выберите нужный платежный метод из списка"
        }, {
            icon: "checkedBox",
            title: "Оплати свой заказ",
            description: "Проверьте все данные и оплатите заказ"
        }]
          , Yi = [{
            title: "Выбери подарочную карту",
            description: "С нужным количеством робуксов",
            icon: "wallet"
        }, {
            title: "Оплата заказа",
            description: "Пожалуйста, введите корректные данные, чтобы избежать ошибок",
            icon: "robux"
        }]
          , $i = {
            class: "mobile-transfer-method"
        }
          , Ki = {
            class: "mobile-transfer-method__header"
        }
          , Ji = {
            key: 0,
            class: "mobile-transfer-method__search"
        }
          , Xi = {
            key: 0,
            class: "mobile-transfer-method__gift-list"
        }
          , Qi = {
            key: 1,
            class: "mobile-transfer-method__robux-input transfer-method-block"
        }
          , eo = {
            class: "mobile-transfer-method__in-stock"
        }
          , ao = {
            class: "form-description"
        }
          , to = {
            key: 1,
            class: "mobile-transfer-method__payment"
        }
          , lo = {
            class: "mobile-search-filter"
        }
          , so = {
            key: 0,
            class: "mobile-transfer-method__payment"
        };
        var io = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = (0,
                s.iH)(1)
                  , t = (0,
                s.iH)(null)
                  , o = (0,
                s.iH)(null)
                  , n = (0,
                s.iH)(Pe.R)
                  , r = (0,
                s.iH)(null)
                  , {onBalancePaySubmit: d, onSubmitPaymentSystem: _, validateAmountToReplenish: v, updatePaymentData: g, checkActivePassOrder: h, validateGiftAmount: b, validatePaymentMethod: y, saveSearch: k, onClickSearch: f, resetState: S, checkRouteId: U, checkActiveSmartOrders: w, paymentMethod: Z, payFromBalance: C, loading: P, error: D, email: j, submitDisabled: W, rbxAmountInStock: z, amountToReplenishBalance: B, method: q, isPassMethod: F, isMarketMethod: H, game: M, pass: A, gift: O, isGiftMethod: I, isTransferMethod: R, YM_GOALS: T} = (0,
                De.f)(t, o, n)
                  , {sendGamePassAnalyticsAB: N} = mi.T.useABTests()
                  , {goToNextAuthStep: G} = (0,
                xe.P)()
                  , V = (0,
                i.yj)()
                  , E = (0,
                i.tv)()
                  , L = (0,
                Ze.useTransferPurchaseStore)()
                  , Y = (0,
                s.iH)(!1)
                  , $ = (0,
                s.iH)(!1)
                  , K = (0,
                l.Fl)(( () => {
                    const e = C.value ? Ei.toSpliced(Ei.length - 2, 1) : Ei
                      , a = C.value ? Li.toSpliced(Li.length - 2, 1) : Li;
                    return F.value ? e : I.value ? Yi : H.value ? a : Vi
                }
                ))
                  , J = (0,
                l.Fl)(( () => K.value[a.value - 1].title))
                  , X = (0,
                l.Fl)(( () => 3 !== a.value || F.value || H.value ? K.value[a.value - 1].description : `Этот Place находится у игрока ${t.value?.name}. Выберите подходящий`))
                  , Q = (0,
                l.Fl)(( () => K.value[a.value - 1].icon))
                  , ee = (0,
                l.Fl)(( () => (F.value || H.value) && (1 === a.value || 2 === a.value)))
                  , ae = (0,
                l.Fl)(( () => a.value > 3 && R.value && L.isPurchaseWithoutGamepass ? a.value - 1 : a.value))
                  , te = (0,
                l.Fl)(( () => {
                    const e = K.value.length;
                    return L.isPurchaseWithoutGamepass ? e - 1 : e
                }
                ))
                  , le = async e => {
                    if (a.value = 5,
                    r.value = e,
                    da.c?.send("purch_purch_trans_4_gamepass", {}),
                    da.c?.sendAbMetric("purch_purch_trans_4_gamepass", {}),
                    N("purchase"),
                    B.value > 0) {
                        C.value = !1;
                        const e = (0,
                        Ce.G)();
                        e.setNotification({
                            title: "Внимание!",
                            description: `Пополните баланс на недостающие ${B.value.toFixed(2)} рублей!`,
                            type: "warning"
                        })
                    }
                }
                ;
                async function se(e) {
                    if ((H.value || F.value) && !G())
                        return;
                    const l = H.value ? T.MARKET_NICK : F.value ? T.SUPER_PASS_NICK : T.TRANSFER_NICK;
                    da.c?.send(l, {}),
                    da.c?.sendAbMetric(l, {}),
                    t.value = e,
                    R.value && (a.value = 3)
                }
                async function ie(e) {
                    const t = await h();
                    t || (a.value = H.value ? 5 : 4)
                }
                function oe(e) {
                    o.value = e,
                    e && (da.c?.send("purch_purch_trans_2_place", {}),
                    da.c?.sendAbMetric("purch_purch_trans_2_place", {})),
                    pe()
                }
                function ne() {
                    t.value = null,
                    o.value = null,
                    a.value = 2
                }
                const re = async e => {
                    Z.value = e,
                    v(B.value, e?.min)
                }
                  , ue = () => {
                    D.value = "";
                    const {error: e, validAmount: t} = (0,
                    we.a)(n.value, Number(z.value));
                    t && (n.value = t),
                    e ? D.value = e : a.value = 2
                }
                  , pe = () => {
                    G() && (g(),
                    a.value = L.isPurchaseWithoutGamepass ? 5 : 4)
                }
                  , _e = () => {
                    const e = V.query.method;
                    if (e)
                        return q.value = e,
                        void L.setMethod(e);
                    if (!V.query.amount)
                        return;
                    if (L.gift?.rub)
                        return q.value = "gift",
                        n.value = L.gift.robux,
                        void (a.value = 2);
                    const {promo: t, bonus: s, bonusForGamepass: i, isFree: o, robux: r} = JSON.parse(V.query.promoCode);
                    n.value = +V.query.amount,
                    a.value = 2,
                    (0,
                    l.Y3)(( () => {
                        L.setPromoCode(t, s, i, o, r)
                    }
                    ))
                }
                  , ve = async () => {
                    a.value = 2;
                    const e = H.value ? "purch_purch_market_1_game" : "purch_purch_super_1_game";
                    da.c?.send(e, {})
                }
                  , ge = () => {
                    a.value = 3,
                    Y.value = !1,
                    da.c?.send("purch_purch_super_2_pass", {})
                }
                  , he = () => {
                    a.value = 4,
                    Y.value = !1,
                    da.c?.send("purch_purch_market_2_item", {})
                }
                  , be = e => {
                    ee.value && (1 === a.value && k(e, "game"),
                    2 === a.value && k(e, "pass"))
                }
                  , ye = e => {
                    Z.value = e,
                    v(B.value, e?.min),
                    a.value = H.value ? 6 : 5
                }
                  , ke = () => {
                    a.value = H.value || !C.value ? 4 : 3
                }
                  , fe = e => {
                    O.value = e,
                    n.value = e.robux_amount,
                    L.setGiftData(e.price, "rub"),
                    L.setGiftData(e.robux_amount, "robux"),
                    L.setGiftData(e.instruction, "instruction")
                }
                  , Se = () => {
                    O.value && (b(O.value.price) ? a.value = 2 : L.showModal("balance"))
                }
                  , Ue = () => {
                    I.value ? a.value = 1 : a.value = 3
                }
                  , je = () => {
                    a.value = a.value - 1,
                    2 === a.value && (A.value = null)
                }
                  , We = () => {
                    a.value = 3,
                    L.setMarketLimitAge(null)
                }
                  , ze = () => {
                    Y.value = !Y.value,
                    f(a.value)
                }
                ;
                return (0,
                l.YP)(( () => V.query), ( () => {
                    S(),
                    a.value = 1,
                    q.value = V.query.method
                }
                )),
                (0,
                l.bv)(( () => {
                    _e(),
                    U(( () => a.value = 3)),
                    w()
                }
                )),
                (0,
                l.Jd)(( () => {
                    L.gift?.rub && (L.setGiftData(0, "rub"),
                    L.setGiftData(0, "instruction")),
                    L.setSkipGamePass(!1)
                }
                )),
                (e, i) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", $i, [(0,
                l._)("div", Ki, [(0,
                l.Wm)((0,
                s.SU)(c.Z), {
                    icon: Q.value,
                    currentStep: ae.value,
                    totalSteps: te.value,
                    title: J.value,
                    description: X.value,
                    type: "primary"
                }, null, 8, ["icon", "currentStep", "totalSteps", "title", "description"]), ee.value && !(0,
                s.SU)(H) ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", Ji, [(0,
                l.Wm)((0,
                s.SU)(m.Z), {
                    "left-icon": "search",
                    class: "mobile-transfer-method__search-input",
                    inactive: "",
                    bold: Y.value,
                    onClick: ze
                }, null, 8, ["bold"])])) : (0,
                l.kq)("", !0)]), (0,
                s.SU)(D) ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(de.Z), {
                    key: 0,
                    type: "error",
                    text: (0,
                    s.SU)(D)
                }, null, 8, ["text"])) : (0,
                l.kq)("", !0), 1 !== a.value || (0,
                s.SU)(F) || (0,
                s.SU)(H) ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.j4)(l.Ob, {
                    key: 1
                }, [(0,
                s.SU)(I) ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", Xi, [(0,
                l.Wm)((0,
                s.SU)(St.Z), {
                    current: (0,
                    s.SU)(O),
                    size: "m",
                    "disable-loader": "",
                    onOnSelectGift: fe
                }, null, 8, ["current"]), (0,
                l.Wm)((0,
                s.SU)(ce.Z), {
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: i[0] || (i[0] = e => (0,
                    s.SU)(E).push({
                        name: "home"
                    }))
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        "right-icon": "arrowRight",
                        size: "l",
                        "mobile-size": "l",
                        class: "mobile-transfer-method__robux-input__button",
                        disabled: !n.value,
                        onClick: Se
                    }, {
                        default: (0,
                        l.w5)(( () => i[34] || (i[34] = [(0,
                        l.Uk)(" ПРОДОЛЖИТЬ ")]))),
                        _: 1,
                        __: [34]
                    }, 8, ["disabled"])])),
                    _: 1
                })])) : ((0,
                l.wg)(),
                (0,
                l.iD)("div", Qi, [(0,
                l._)("div", eo, [i[35] || (i[35] = (0,
                l._)("span", {
                    class: "form-title"
                }, "В наличии:", -1)), (0,
                l._)("span", ao, (0,
                x.zw)((0,
                s.SU)(z)) + " R$", 1)]), (0,
                l.Wm)((0,
                s.SU)(me.Z), {
                    "show-promo": "",
                    amount: n.value,
                    "default-value": n.value,
                    "promo-bonus": (0,
                    s.SU)(L).promoCode.bonus,
                    rate: (0,
                    s.SU)(L).rate,
                    onChange: i[1] || (i[1] = e => n.value = e)
                }, null, 8, ["amount", "default-value", "promo-bonus", "rate"]), (0,
                l.Wm)((0,
                s.SU)(ce.Z), {
                    size: "l",
                    "mobile-size": "l",
                    onOnBack: i[2] || (i[2] = e => (0,
                    s.SU)(E).push({
                        name: "home"
                    }))
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        "right-icon": "arrowRight",
                        size: "l",
                        "mobile-size": "l",
                        class: "mobile-transfer-method__robux-input__button",
                        disabled: !n.value,
                        onClick: ue
                    }, {
                        default: (0,
                        l.w5)(( () => i[36] || (i[36] = [(0,
                        l.Uk)(" ПРОДОЛЖИТЬ ")]))),
                        _: 1,
                        __: [36]
                    }, 8, ["disabled"])])),
                    _: 1
                })]))], 1024)), (0,
                s.SU)(F) ? ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, {
                    key: 2
                }, [Y.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(m.Z), {
                    key: 0,
                    placeholder: "Введите название",
                    "left-icon": "search",
                    "onUpdate:modelValue": be,
                    onClick: i[3] || (i[3] = e => (0,
                    s.SU)(f)(a.value))
                })) : (0,
                l.kq)("", !0), ((0,
                l.wg)(),
                (0,
                l.j4)(l.Ob, null, [1 === a.value || 2 === a.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Ai), {
                    key: 0,
                    step: a.value,
                    game: (0,
                    s.SU)(M),
                    pass: (0,
                    s.SU)(A),
                    onOnGameInput: i[4] || (i[4] = e => M.value = e),
                    onOnPassInput: i[5] || (i[5] = e => A.value = e),
                    onReset: ne,
                    onBack: je,
                    "onSubmit:game": ve,
                    "onSubmit:pass": ge
                }, null, 8, ["step", "game", "pass"])) : (0,
                l.kq)("", !0)], 1024)), ((0,
                l.wg)(),
                (0,
                l.j4)(l.Ob, null, [3 === a.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Pa), {
                    key: 0,
                    type: "withPass",
                    "selected-user": t.value,
                    "selected-place": o.value,
                    onOnAccountInput: i[6] || (i[6] = e => se(e)),
                    onOnPlaceInput: i[7] || (i[7] = e => oe(e)),
                    onReset: ne,
                    onBack: i[8] || (i[8] = e => a.value = 2),
                    onSubmit: ie
                }, null, 8, ["selected-user", "selected-place"])) : (0,
                l.kq)("", !0)], 1024)), 4 === a.value || 5 === a.value ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", to, [(0,
                s.SU)(C) || 5 === a.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ft), {
                    key: 0,
                    game: (0,
                    s.SU)(M),
                    pass: (0,
                    s.SU)(A),
                    loading: (0,
                    s.SU)(P),
                    disabled: (0,
                    s.SU)(W),
                    "pay-from-balance": (0,
                    s.SU)(C),
                    "payment-method": (0,
                    s.SU)(Z),
                    method: (0,
                    s.SU)(q),
                    "method-validate": (0,
                    s.SU)(y),
                    onBack: ke,
                    "onInput:email": i[9] || (i[9] = e => j.value = e),
                    "onSubmit:balance": i[10] || (i[10] = e => (0,
                    s.SU)(d)((0,
                    s.SU)(T).BALANCE_PURCHASE_SUPER)),
                    "onSubmit:paymentSystem": i[11] || (i[11] = e => (0,
                    s.SU)(_)((0,
                    s.SU)(T).CREDITS_PURCHASE_SUPER))
                }, null, 8, ["game", "pass", "loading", "disabled", "pay-from-balance", "payment-method", "method", "method-validate"])) : 4 === a.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Ve.Z), {
                    key: 1,
                    "on-select": ye,
                    onBack: i[12] || (i[12] = e => a.value = 3)
                })) : (0,
                l.kq)("", !0)])) : (0,
                l.kq)("", !0)], 64)) : (0,
                s.SU)(H) ? ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, {
                    key: 3
                }, [(0,
                l._)("div", lo, [1 === a.value || 2 === a.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(m.Z), {
                    key: 0,
                    placeholder: "Введите название",
                    "left-icon": "search",
                    "onUpdate:modelValue": be,
                    onClick: i[13] || (i[13] = e => (0,
                    s.SU)(f)(a.value))
                })) : (0,
                l.kq)("", !0), 2 === a.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(u.Z), {
                    key: 1,
                    class: (0,
                    x.C_)(["mobile-search-filter__button", {
                        "mobile-search-filter__button-active": $.value
                    }]),
                    mobileSize: "m",
                    type: "outline",
                    onClick: i[14] || (i[14] = e => $.value = !$.value)
                }, {
                    default: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(p.Z), {
                        type: "solid",
                        name: "settingsAdjust"
                    })])),
                    _: 1
                }, 8, ["class"])) : (0,
                l.kq)("", !0)]), ((0,
                l.wg)(),
                (0,
                l.j4)(l.Ob, null, [1 === a.value || 2 === a.value || 3 === a.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Gi), {
                    key: 0,
                    step: a.value,
                    game: (0,
                    s.SU)(M),
                    pass: (0,
                    s.SU)(A),
                    "is-show-filter": $.value,
                    onOnGameInput: i[15] || (i[15] = e => M.value = e),
                    onOnPassInput: i[16] || (i[16] = e => {
                        A.value = e,
                        a.value = 3
                    }
                    ),
                    onCloseFilter: i[17] || (i[17] = () => $.value = !1),
                    onReset: ne,
                    onBack: je,
                    "onSubmit:game": ve,
                    "onSubmit:pass": he
                }, null, 8, ["step", "game", "pass", "is-show-filter"])) : (0,
                l.kq)("", !0)], 1024)), ((0,
                l.wg)(),
                (0,
                l.j4)(l.Ob, null, [4 === a.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Pa), {
                    key: 0,
                    type: "withPass",
                    "selected-user": t.value,
                    "selected-place": o.value,
                    "is-loading": (0,
                    s.SU)(P),
                    onOnAccountInput: i[18] || (i[18] = e => se(e)),
                    onOnPlaceInput: i[19] || (i[19] = e => oe(e)),
                    onReset: ne,
                    onBack: We,
                    onSubmit: ie
                }, null, 8, ["selected-user", "selected-place", "is-loading"])) : (0,
                l.kq)("", !0)], 1024)), (0,
                l.Wm)(ui, {
                    show: (0,
                    s.SU)(L).modals.isShowAge,
                    loading: (0,
                    s.SU)(P),
                    onClose: i[20] || (i[20] = e => (0,
                    s.SU)(L).hideModal("age")),
                    onSubmit: i[21] || (i[21] = e => ie(!0))
                }, null, 8, ["show", "loading"]), 5 === a.value || 6 === a.value ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", so, [(0,
                s.SU)(C) || 6 === a.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ft), {
                    key: 0,
                    game: (0,
                    s.SU)(M),
                    pass: (0,
                    s.SU)(A),
                    loading: (0,
                    s.SU)(P),
                    disabled: (0,
                    s.SU)(W),
                    method: (0,
                    s.SU)(q),
                    "pay-from-balance": (0,
                    s.SU)(C),
                    "payment-method": (0,
                    s.SU)(Z),
                    "method-validate": (0,
                    s.SU)(y),
                    onBack: ke,
                    "onInput:email": i[22] || (i[22] = e => j.value = e),
                    "onSubmit:balance": i[23] || (i[23] = e => (0,
                    s.SU)(d)((0,
                    s.SU)(T).BALANCE_PURCHASE_MARKET)),
                    "onSubmit:paymentSystem": i[24] || (i[24] = e => (0,
                    s.SU)(_)((0,
                    s.SU)(T).CREDITS_PURCHASE_MARKET))
                }, null, 8, ["game", "pass", "loading", "disabled", "method", "pay-from-balance", "payment-method", "method-validate"])) : 5 == a.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Ve.Z), {
                    key: 1,
                    "on-select": ye,
                    onBack: i[25] || (i[25] = e => a.value = 4)
                })) : (0,
                l.kq)("", !0)])) : (0,
                l.kq)("", !0)], 64)) : ((0,
                l.wg)(),
                (0,
                l.iD)(l.HY, {
                    key: 4
                }, [((0,
                l.wg)(),
                (0,
                l.j4)(l.Ob, null, [2 !== a.value && 3 !== a.value || (0,
                s.SU)(I) ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Pa), {
                    key: 0,
                    type: "withPlace",
                    "selected-user": t.value,
                    "selected-place": o.value,
                    "robux-amount": n.value,
                    onOnAccountInput: i[26] || (i[26] = e => se(e)),
                    onOnPlaceInput: i[27] || (i[27] = e => oe(e)),
                    onReset: ne,
                    onBack: i[28] || (i[28] = e => a.value = 1)
                }, null, 8, ["selected-user", "selected-place", "robux-amount"]))], 1024)), 4 === a.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(it.Z), {
                    key: 0,
                    place: o.value,
                    robux: n.value,
                    "on-submit": le,
                    onBack: i[29] || (i[29] = e => a.value = 3)
                }, null, 8, ["place", "robux"])) : (0,
                l.kq)("", !0), 5 === a.value || (0,
                s.SU)(I) && 2 === a.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(La), {
                    key: 1,
                    robuxAmount: n.value,
                    gift: (0,
                    s.SU)(L).gift,
                    "pay-from-balance": (0,
                    s.SU)(C),
                    "payment-method": (0,
                    s.SU)(Z),
                    loading: (0,
                    s.SU)(P),
                    disabled: (0,
                    s.SU)(W),
                    "amount-to-replenish-balance": (0,
                    s.SU)(B),
                    rate: (0,
                    s.SU)(L).rate,
                    "promo-bonus": (0,
                    s.SU)(L).promoCode.bonus,
                    "method-validate": (0,
                    s.SU)(y),
                    method: "transfer",
                    "onInput:email": i[30] || (i[30] = e => j.value = e),
                    "onSubmit:balance": i[31] || (i[31] = e => (0,
                    s.SU)(d)((0,
                    s.SU)(T).BALANCE_PURCHASE, (0,
                    s.SU)(I) ? (0,
                    s.SU)(T).GIFT_PURCHASE : void 0)),
                    "onSubmit:paymentSystem": i[32] || (i[32] = e => (0,
                    s.SU)(_)((0,
                    s.SU)(T).CREDITS_PURCHASE)),
                    "onSelect:paymentMethod": re,
                    onBack: Ue,
                    "onCheckPromo:error": i[33] || (i[33] = e => a.value = 1)
                }, null, 8, ["robuxAmount", "gift", "pay-from-balance", "payment-method", "loading", "disabled", "amount-to-replenish-balance", "rate", "promo-bonus", "method-validate"])) : (0,
                l.kq)("", !0)], 64)), 6 !== a.value || (0,
                s.SU)(H) ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Ya.Z), {
                    key: 5
                }))]))
            }
        });
        const oo = io;
        var no = oo
          , ro = no
          , uo = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = (0,
                n.b)();
                return (e, t) => (0,
                s.SU)(a).isMobile ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ro), {
                    key: 1
                })) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(zi), {
                    key: 0
                }))
            }
        });
        const co = uo;
        var mo = co
          , po = mo;
        const _o = {
            key: 1,
            class: "premium__payment"
        }
          , vo = {
            key: 2,
            class: "premium__orders"
        };
        var go = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = (0,
                s.iH)(1)
                  , t = (0,
                s.iH)([{
                    imgName: "cookie",
                    headerTitle: "Ознакомление с инструкцией и ввод cookie",
                    headerDescription: "Внимательно посмотрите инструкцию и введите cookie для продолжения покупки"
                }, {
                    imgName: "fire",
                    headerTitle: "Выбор и покупка премиума",
                    headerDescription: "На данном этапе Вам необходимо выбрать платежный метод, вариант премиума и провести покупку"
                }, {
                    imgName: "checkedBox",
                    headerTitle: "Выполнение заказа",
                    headerDescription: "Платеж прошел успешно и теперь заказ выполняется."
                }])
                  , i = (0,
                l.Fl)(( () => {
                    const e = {
                        imgName: "binocular",
                        headerTitle: "",
                        headerDescription: ""
                    }
                      , l = a.value - 1;
                    for (const a in e)
                        e[a] = t.value[l][a];
                    return e
                }
                ));
                return (e, t) => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(w), {
                    "method-name": "Premium",
                    headerTitle: i.value.headerTitle,
                    headerDescription: i.value.headerDescription,
                    headerIcon: i.value.imgName
                }, {
                    steps: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(D), {
                        text: "Ввод cookie"
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Wm)((0,
                        s.SU)(p.Z), {
                            name: "cookie",
                            type: "solid"
                        })])),
                        _: 1
                    }), (0,
                    l.Wm)((0,
                    s.SU)(D), {
                        text: "Покупка премиума",
                        disabled: a.value < 2
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Wm)((0,
                        s.SU)(p.Z), {
                            name: "fire",
                            type: "solid"
                        })])),
                        _: 1
                    }, 8, ["disabled"]), (0,
                    l.Wm)((0,
                    s.SU)(D), {
                        text: "Выполнение заказа",
                        disabled: a.value < 3
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Wm)((0,
                        s.SU)(p.Z), {
                            name: "checkedBox",
                            type: "solid"
                        })])),
                        _: 1
                    }, 8, ["disabled"])])),
                    content: (0,
                    l.w5)(( () => [1 === a.value ? ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(re), {
                        key: 0
                    })) : (0,
                    l.kq)("", !0), 2 === a.value ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", _o, [(0,
                    l.Wm)((0,
                    s.SU)(Ve.Z), {
                        "on-select": () => {}
                    }), (0,
                    l.Wm)((0,
                    s.SU)(Ee.Z), {
                        purchaseMethod: "premium"
                    })])) : (0,
                    l.kq)("", !0), 3 === a.value ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", vo, [(0,
                    l.Wm)((0,
                    s.SU)(Ye.Z)), (0,
                    l.Wm)((0,
                    s.SU)(Le.Z))])) : (0,
                    l.kq)("", !0)])),
                    _: 1
                }, 8, ["headerTitle", "headerDescription", "headerIcon"]))
            }
        });
        const ho = go;
        var bo = ho
          , yo = bo;
        const ko = {
            class: "mobile-premium-method"
        }
          , fo = {
            key: 0,
            class: "mobile-premium-method__blanks"
        };
        var So = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = (0,
                s.iH)([{
                    currencyAmount: 240,
                    robuxAmount: 450,
                    currency: "rub"
                }, {
                    currencyAmount: 300,
                    robuxAmount: 1150,
                    currency: "rub"
                }, {
                    currencyAmount: 600,
                    robuxAmount: 2250,
                    currency: "rub"
                }])
                  , t = [{
                    title: "Выбор Premium",
                    description: "Выберите самый подходящий для вас вариант покупки Premium",
                    icon: "fire"
                }, {
                    title: "Найдите свой аккаунт",
                    description: "Пожалуйста, введите корректные данные, чтобы избежать ошибок",
                    icon: "user"
                }, {
                    title: "Укажите пароль от аккаунта",
                    description: "Пожалуйста, введите корректные данные, чтобы избежать ошибок",
                    icon: "key"
                }, {
                    title: "Выбор суммы и оплата заказа",
                    description: "Пожалуйста, введите корректные данные, чтобы избежать ошибок",
                    icon: "robux"
                }, {
                    title: "Выполнение заказа",
                    description: "Платеж прошел успешно и теперь заказ выполняется. Пожалуйста, ожидайте!",
                    icon: "checkedBox"
                }]
                  , i = (0,
                s.iH)(4)
                  , o = (0,
                s.iH)(0)
                  , n = (0,
                s.iH)("")
                  , r = (0,
                s.iH)("")
                  , m = (0,
                l.Fl)(( () => t[i.value - 1].title))
                  , d = (0,
                l.Fl)(( () => t[i.value - 1].description))
                  , p = (0,
                l.Fl)(( () => t[i.value - 1].icon))
                  , _ = (0,
                l.Fl)(( () => a.value.find((e => e.currencyAmount === o.value))));
                function v(e) {
                    n.value = e,
                    i.value = 3
                }
                function g() {
                    n.value = "",
                    r.value = "",
                    i.value = 2
                }
                function h(e) {
                    r.value = e,
                    i.value = 4
                }
                function b() {
                    o.value && (i.value = 2)
                }
                return (e, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", ko, [(0,
                l.Wm)((0,
                s.SU)(c.Z), {
                    icon: p.value,
                    currentStep: i.value,
                    totalSteps: 4,
                    title: m.value,
                    description: d.value,
                    type: "primary"
                }, null, 8, ["icon", "currentStep", "title", "description"]), 1 === i.value ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", fo, [((0,
                l.wg)(!0),
                (0,
                l.iD)(l.HY, null, (0,
                l.Ko)(a.value, (e => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(ja.Z), {
                    key: e.currencyAmount,
                    "premium-offer": e,
                    disabled: !1,
                    active: o.value === e.currencyAmount,
                    onClick: () => o.value = e.currencyAmount
                }, null, 8, ["premium-offer", "active", "onClick"])))), 128)), (0,
                l.Wm)((0,
                s.SU)(u.Z), {
                    class: "mobile-premium-method__blanks__button",
                    "right-icon": "arrowRight",
                    size: "xs",
                    disabled: 0 === o.value,
                    onClick: b
                }, {
                    default: (0,
                    l.w5)(( () => t[2] || (t[2] = [(0,
                    l.Uk)(" ПРОДОЛЖИТЬ ")]))),
                    _: 1,
                    __: [2]
                }, 8, ["disabled"])])) : (0,
                l.kq)("", !0), 2 === i.value || 3 === i.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Pa), {
                    key: 1,
                    type: "withPassword",
                    onOnAccountInput: t[0] || (t[0] = e => v(e)),
                    onOnPasswordInput: t[1] || (t[1] = e => h(e)),
                    onReset: g
                })) : (0,
                l.kq)("", !0), 4 === i.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(La), {
                    key: 2,
                    method: "premium",
                    "premium-offer": _.value
                }, null, 8, ["premium-offer"])) : (0,
                l.kq)("", !0), 5 === i.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Ya.Z), {
                    key: 3
                })) : (0,
                l.kq)("", !0)]))
            }
        });
        const Uo = So;
        var wo = Uo
          , xo = wo
          , Zo = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = (0,
                n.b)();
                return (e, t) => (0,
                s.SU)(a).isMobile ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(xo), {
                    key: 1
                })) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(yo), {
                    key: 0
                }))
            }
        });
        const Co = Zo;
        var Po = Co
          , Do = Po
          , jo = t.p + "img/mobile-error-img.873e2755.png"
          , Wo = t.p + "img/art.5dd069e0.svg";
        const zo = {
            class: "mobile-video"
        }
          , Bo = ["src"]
          , qo = {
            key: 0,
            class: "mobile-video__button"
        };
        var Fo = (0,
        l.aZ)({
            __name: "index",
            props: {
                videoUrl: {
                    type: String,
                    default: ""
                }
            },
            setup(e) {
                const a = (0,
                s.iH)(!1)
                  , t = (0,
                s.iH)(null)
                  , i = () => {
                    t.value && (t.value.pause(),
                    a.value = !1)
                }
                  , o = () => {
                    !a.value && t.value ? t.value.play() : t.value && t.value.pause(),
                    a.value = !a.value
                }
                ;
                return (n, r) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", zo, [(0,
                l._)("video", {
                    src: e.videoUrl,
                    ref_key: "video",
                    ref: t,
                    onClick: i
                }, null, 8, Bo), a.value ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.iD)("div", qo, [a.value ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(p.Z), {
                    key: 0,
                    name: "play",
                    type: "solid",
                    onClick: o
                }))]))]))
            }
        });
        const Ho = Fo;
        var Mo = Ho
          , Ao = Mo
          , Oo = t(24709)
          , Io = t(29568);
        const Ro = {
            class: "plugin-block-wrapper"
        }
          , To = {
            key: 2,
            class: "plugin-block-mobile-error"
        }
          , No = {
            key: 3,
            class: "plugin-block"
        }
          , Go = {
            class: "plugin-block__content"
        }
          , Vo = {
            class: "plugin-block__footer"
        };
        var Eo = (0,
        l.aZ)({
            __name: "index",
            props: {
                user: {
                    type: Object,
                    default: null
                },
                selectedPlugin: {
                    type: Object,
                    default: null
                },
                robux: {
                    type: Number,
                    default: 0
                },
                onSubmit: {
                    type: Function,
                    required: !0
                }
            },
            setup(e) {
                const a = (0,
                n.b)()
                  , i = (0,
                s.iH)("create")
                  , o = (0,
                s.iH)([])
                  , r = (0,
                s.iH)(!1)
                  , c = (0,
                s.iH)(!1)
                  , m = (0,
                s.iH)(!1)
                  , d = e;
                async function p() {
                    return d.user ? await ua.b.pending.getPlugins(d.user.user_id.toString()) : []
                }
                async function _() {
                    o.value = await p()
                }
                function v() {
                    "create" === i.value && (window.open("https://create.roblox.com/dashboard/creations", "_blank"),
                    r.value = !0),
                    "configure" === i.value && d.selectedPlugin && (window.open(`https://create.roblox.com/dashboard/creations/marketplace/${d.selectedPlugin.assetId}/configure`, "_blank"),
                    r.value = !0)
                }
                const g = (0,
                l.Fl)(( () => {
                    const e = {
                        desktop: ["СОЗДАТЬ ПЛАГИН", "НАСТРОИТЬ ПЛАГИН"],
                        mobile: ["Настроить"]
                    };
                    return a.isMobile ? e.mobile[0] : "create" === i.value ? e.desktop[0] : e.desktop[1]
                }
                ))
                  , h = (0,
                l.Fl)(( () => a.isMobile ? "Я НАСТРОИЛ ПЛАГИН" : "ПРОДОЛЖИТЬ"))
                  , b = (0,
                l.Fl)(( () => !!c.value && (a.isMobile && 0 === o.value.length)))
                  , y = (0,
                l.Fl)(( () => Math.round(d.robux / .7)))
                  , k = (0,
                l.Fl)(( () => a.isMobile ? t(40524) : t(96667)));
                function f() {
                    m.value = !0,
                    r.value = !1,
                    setTimeout(( () => {
                        m.value = !1
                    }
                    ), 4e3)
                }
                async function S() {
                    if (c.value = !0,
                    await _(),
                    !d.selectedPlugin)
                        return c.value = !1,
                        i.value = "create",
                        void (r.value = !1);
                    const e = await (0,
                    Oo.validatePlugin)(d.selectedPlugin.assetId.toString(), y.value);
                    c.value = !1,
                    r.value = !1,
                    e ? d.onSubmit(d.selectedPlugin) : f()
                }
                return (0,
                l.wF)((async () => {
                    if (await _(),
                    d.selectedPlugin) {
                        const e = await ua.b.pending.validatePlugin(d.selectedPlugin.assetId.toString(), y.value);
                        e ? d.onSubmit(d.selectedPlugin) : i.value = "configure"
                    }
                }
                )),
                (e, t) => {
                    const i = (0,
                    l.up)("spn");
                    return (0,
                    l.wg)(),
                    (0,
                    l.iD)("div", Ro, [!b.value && (0,
                    s.SU)(a).isMobile ? ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(Ao), {
                        key: 0,
                        "video-url": k.value
                    }, null, 8, ["video-url"])) : (0,
                    l.kq)("", !0), (0,
                    s.SU)(a).isMobile ? (0,
                    l.kq)("", !0) : ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(J), {
                        key: 1,
                        "video-url": k.value
                    }, null, 8, ["video-url"])), b.value ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", To, [t[4] || (t[4] = (0,
                    l._)("img", {
                        src: jo,
                        class: "plugin-block-mobile-error__img"
                    }, null, -1)), (0,
                    l.Wm)((0,
                    s.SU)(de.Z), {
                        class: "plugin-block-mobile-error__text",
                        type: "error",
                        text: "Приносим свои извинения, но создать плагин с телефона невозможно.\n          Пожалуйста, воспользуйтесь компьютером!"
                    }), (0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        class: "plugin-block-mobile-error__button",
                        "right-icon": "arrowRight",
                        size: "xs",
                        onClick: t[0] || (t[0] = a => e.$router.push("/"))
                    }, {
                        default: (0,
                        l.w5)(( () => t[3] || (t[3] = [(0,
                        l.Uk)(" НА ГЛАВНУЮ ")]))),
                        _: 1,
                        __: [3]
                    })])) : ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", No, [(0,
                    l._)("div", Go, [t[6] || (t[6] = (0,
                    l._)("img", {
                        src: Wo,
                        alt: "",
                        srcset: "",
                        class: "plugin-block__content__image"
                    }, null, -1)), (0,
                    l.Wm)(i, {
                        class: "plugin-block__content__text"
                    }, {
                        default: (0,
                        l.w5)(( () => t[5] || (t[5] = [(0,
                        l.Uk)(" Сюда нужен текст Сюда нужен текст Сюда нужен текст Сюда нужен текст Сюда нужен текст Сюда нужен текст Сюда нужен текст Сюда нужен текст Сюда нужен текст Сюда нужен текст Сюда нужен текст Сюда нужен текст ")]))),
                        _: 1,
                        __: [5]
                    })]), (0,
                    l._)("div", Vo, [m.value && (0,
                    s.SU)(a).isMobile ? ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(Io.Z), {
                        key: 0,
                        type: "error",
                        title: "Внимание!",
                        description: "Проверьте корректность данных в ПЛАГИНЕ!",
                        onClose: t[1] || (t[1] = e => m.value = !1)
                    })) : (0,
                    l.kq)("", !0), (0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        "right-icon": (0,
                        s.SU)(a).isMobile ? "arrowRight" : void 0,
                        size: (0,
                        s.SU)(a).isMobile ? "xs" : "xl",
                        disabled: c.value,
                        onClick: v
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Uk)((0,
                        x.zw)(g.value), 1)])),
                        _: 1
                    }, 8, ["right-icon", "size", "disabled"]), (0,
                    l.Wm)((0,
                    s.SU)(u.Z), {
                        "icon-type": (0,
                        s.SU)(a).isMobile ? "solid" : void 0,
                        "left-icon": (0,
                        s.SU)(a).isMobile ? "checkedBox" : void 0,
                        "right-icon": (0,
                        s.SU)(a).isMobile ? void 0 : "arrowRight",
                        size: (0,
                        s.SU)(a).isMobile ? "xs" : "xl",
                        disabled: !r.value,
                        loading: c.value,
                        onClick: S
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Uk)((0,
                        x.zw)(h.value), 1)])),
                        _: 1
                    }, 8, ["icon-type", "left-icon", "right-icon", "size", "disabled", "loading"])])])), m.value && !(0,
                    s.SU)(a).isMobile ? ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(Io.Z), {
                        key: 4,
                        type: "error",
                        title: "Внимание!",
                        description: "Проверьте корректность данных в ПЛАГИНЕ!",
                        onClose: t[2] || (t[2] = e => m.value = !1)
                    })) : (0,
                    l.kq)("", !0)])
                }
            }
        });
        const Lo = Eo;
        var Yo = Lo
          , $o = Yo;
        const Ko = async (e, a, t, l, s) => ua.b.pending.makeOrderPlugin(e, a, t, l, s).then((e => {
            let {data: a, order: t} = e
              , l = "";
            return e.status ? a = t : a.includes(4) ? l = "Недостаточно средств на балансе" : a.includes(5) ? l = "Вы не авторизованы" : a.includes(1) ? l = "Ошибка на сервере" : a.includes(6) ? l = "Количество робаксов недоступно для покупки" : a.data.includes(7) && (l = "Проверьте настройки Plugin!"),
            {
                data: a,
                error: l
            }
        }
        ));
        var Jo = t(77098)
          , Xo = t(36702);
        function Qo(e, a, t) {
            const o = (0,
            i.tv)()
              , n = (0,
            s.iH)()
              , r = (0,
            s.iH)(!0)
              , u = (0,
            s.iH)(null)
              , c = (0,
            s.iH)(!1)
              , m = (0,
            s.iH)("")
              , d = (0,
            s.iH)("")
              , p = (0,
            Xo.F)()
              , _ = (0,
            l.Fl)(( () => !r.value && !n.value))
              , v = async () => {
                m.value = "",
                u.value = await Ko(t.value, a.value?.assetId, e.value?.user_id, e.value?.name),
                m.value = u.value?.error,
                u.value?.error ? (r.value = !1,
                n.value = null) : await o.push("/profile")
            }
              , g = async () => {
                if (m.value = "",
                "rub_card" === n.value?.name) {
                    const {errorMessage: e} = (0,
                    we.o)(d.value);
                    if (e)
                        return void (m.value = e)
                }
                u.value = await Ko(t.value, a.value?.assetId, e.value?.user_id, e.value?.name, !0),
                await h(u.value?.data?._id)
            }
              , h = async e => {
                c.value = !0;
                const a = p.profile.user_id
                  , l = Number(t.value);
                (0,
                Jo.M)(n.value, a, l, e, d.value).finally(( () => c.value = !1))
            }
            ;
            return {
                onBalancePaySubmit: v,
                onSubmitPaymentSystem: g,
                error: m,
                loading: c,
                paymentMethod: n,
                payFromBalance: r,
                submitDisabled: _,
                email: d
            }
        }
        const en = {
            key: 0,
            class: "fastpass__purchase-form"
        };
        var an = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = (0,
                s.iH)(1)
                  , t = (0,
                s.iH)([{
                    imgName: "user",
                    headerTitle: "Сумма и игрок",
                    headerDescription: "Введите данные о своем аккаунте и сумму робуксов для покупки"
                }, {
                    imgName: "settingsAlt",
                    headerTitle: "Создание плагина",
                    headerDescription: "Посмотрите инструкцию и выполните все указанные действия"
                }, {
                    imgName: "robux",
                    headerTitle: "Покупка и оплата",
                    headerDescription: "На данном этапе Вам необходимо выбрать платежный метод и провести покупку"
                }, {
                    imgName: "checkedBox",
                    headerTitle: "Выполнение заказа",
                    headerDescription: "Платеж прошел успешно и теперь заказ выполняется."
                }])
                  , i = (0,
                l.Fl)(( () => {
                    const e = {
                        imgName: "binocular",
                        headerTitle: "",
                        headerDescription: ""
                    }
                      , l = a.value - 1;
                    for (const a in e)
                        e[a] = t.value[l][a];
                    return e
                }
                ))
                  , o = (0,
                s.iH)(null)
                  , n = (0,
                s.iH)(null)
                  , r = (0,
                s.iH)(0)
                  , u = (0,
                s.iH)(0)
                  , {onBalancePaySubmit: c, onSubmitPaymentSystem: m, paymentMethod: d, payFromBalance: _, loading: v, error: g, email: h, submitDisabled: b} = Qo(o, n, r)
                  , y = e => {
                    o.value = e
                }
                  , k = e => {
                    n.value = e
                }
                  , f = async e => {
                    r.value = e,
                    a.value = 2
                }
                  , S = async e => {
                    u.value = e,
                    a.value = 3
                }
                  , U = e => {
                    a.value >= e && (a.value = e)
                }
                ;
                return (e, t) => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(w), {
                    "method-name": "Fast Pass",
                    headerTitle: i.value.headerTitle,
                    headerDescription: i.value.headerDescription,
                    headerIcon: i.value.imgName
                }, {
                    steps: (0,
                    l.w5)(( () => [(0,
                    l.Wm)((0,
                    s.SU)(D), {
                        text: "Ввод данных",
                        onClick: t[0] || (t[0] = e => U(1))
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Wm)((0,
                        s.SU)(p.Z), {
                            name: "user",
                            type: "solid"
                        })])),
                        _: 1
                    }), (0,
                    l.Wm)((0,
                    s.SU)(D), {
                        text: "Настройка плагина",
                        disabled: a.value < 2,
                        onClick: t[1] || (t[1] = e => U(2))
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Wm)((0,
                        s.SU)(p.Z), {
                            name: "settingsAlt",
                            type: "solid"
                        })])),
                        _: 1
                    }, 8, ["disabled"]), (0,
                    l.Wm)((0,
                    s.SU)(D), {
                        text: "Покупка робусов",
                        disabled: a.value < 3,
                        onClick: t[2] || (t[2] = e => U(3))
                    }, {
                        default: (0,
                        l.w5)(( () => [(0,
                        l.Wm)((0,
                        s.SU)(p.Z), {
                            name: "robux",
                            type: "solid"
                        })])),
                        _: 1
                    }, 8, ["disabled"])])),
                    content: (0,
                    l.w5)(( () => [1 === a.value ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", en, [(0,
                    l.Wm)((0,
                    s.SU)(ue.Z), {
                        method: "fastpass",
                        "selected-user": o.value,
                        "selected-plugin": n.value,
                        onOnSelectUser: y,
                        onOnSelectPlugin: k
                    }, null, 8, ["selected-user", "selected-plugin"]), (0,
                    l.Wm)((0,
                    s.SU)(Ge), {
                        method: "fastpass",
                        nickname: o.value?.name,
                        onSubmit: f,
                        plugin: n.value?.assetName
                    }, null, 8, ["nickname", "plugin"])])) : (0,
                    l.kq)("", !0), 2 === a.value ? ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)($o), {
                        key: 1,
                        user: o.value,
                        robux: r.value,
                        "on-submit": S,
                        "selected-plugin": n.value
                    }, null, 8, ["user", "robux", "selected-plugin"])) : (0,
                    l.kq)("", !0), 3 === a.value ? ((0,
                    l.wg)(),
                    (0,
                    l.iD)("div", {
                        key: 2,
                        class: (0,
                        x.C_)(["fastpass__payment", {
                            center: (0,
                            s.SU)(_)
                        }])
                    }, [(0,
                    s.SU)(_) ? (0,
                    l.kq)("", !0) : ((0,
                    l.wg)(),
                    (0,
                    l.j4)((0,
                    s.SU)(Ve.Z), {
                        key: 0,
                        "on-select": e => d.value = e,
                        "show-balance-card": (0,
                        s.SU)(_)
                    }, null, 8, ["on-select", "show-balance-card"])), (0,
                    l.Wm)((0,
                    s.SU)(Ee.Z), {
                        purchaseMethod: "fastpass",
                        "payment-method": (0,
                        s.SU)(d),
                        "pay-from-balance": (0,
                        s.SU)(_),
                        "robux-amount": r.value,
                        "error-message": (0,
                        s.SU)(g),
                        loading: (0,
                        s.SU)(v),
                        disabled: (0,
                        s.SU)(b),
                        "onInput:email": t[3] || (t[3] = e => h.value = e),
                        "onSubmit:balance": (0,
                        s.SU)(c),
                        "onSubmit:paymentSystem": (0,
                        s.SU)(m)
                    }, null, 8, ["payment-method", "pay-from-balance", "robux-amount", "error-message", "loading", "disabled", "onSubmit:balance", "onSubmit:paymentSystem"])], 2)) : (0,
                    l.kq)("", !0)])),
                    _: 1
                }, 8, ["headerTitle", "headerDescription", "headerIcon"]))
            }
        });
        const tn = an;
        var ln = tn
          , sn = ln;
        const on = {
            class: "mobile-fastpass-method"
        }
          , nn = {
            key: 1,
            class: "mobile-fastpass-method__robux-input fastpass-method-block"
        };
        var rn = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = [{
                    title: "Найдите свой аккаунт",
                    description: "Пожалуйста, введите корректные данные, чтобы избежать ошибок",
                    icon: "user"
                }, {
                    title: "Количество робуксов",
                    description: "Выберите предпочитаемое для покупки количество робуксов",
                    icon: "robux"
                }, {
                    title: "Создание плагина",
                    description: "Пожалуйста, перейдите на любое ПК устройство, создайте плагин и возвращайтесь снова!",
                    icon: "bookmark"
                }, {
                    title: "Настройка плагина",
                    description: "Проведите настройку Вашего плагина, основываясь на инструкции ниже",
                    icon: "bookmark"
                }, {
                    title: "Оплата заказа",
                    description: "Пожалуйста, введите корректные данные, чтобы избежать ошибок",
                    icon: "robux"
                }, {
                    title: "Выполнение заказа",
                    description: "Платеж прошел успешно и теперь заказ выполняется. Пожалуйста, ожидайте!",
                    icon: "checkedBox"
                }]
                  , t = (0,
                s.iH)(1)
                  , i = (0,
                s.iH)(null)
                  , o = (0,
                s.iH)(160)
                  , n = (0,
                s.iH)(null)
                  , {onBalancePaySubmit: r, onSubmitPaymentSystem: m, paymentMethod: d, payFromBalance: p, loading: _, error: v, email: g, submitDisabled: h} = Qo(i, n, o)
                  , {goToNextAuthStep: b} = (0,
                xe.P)()
                  , y = (0,
                l.Fl)(( () => a[t.value - 1].title))
                  , k = (0,
                l.Fl)(( () => a[t.value - 1].description))
                  , f = (0,
                l.Fl)(( () => a[t.value - 1].icon));
                function S(e) {
                    i.value = e,
                    t.value = 2
                }
                function U(e) {
                    n.value = e,
                    t.value = 3
                }
                function w() {
                    i.value = null,
                    t.value = 1
                }
                const x = async e => {
                    t.value = 5
                }
                  , Z = async e => {
                    d.value = e
                }
                  , C = () => {
                    b() && (t.value = 4)
                }
                ;
                return (e, a) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", on, [(0,
                l.Wm)((0,
                s.SU)(c.Z), {
                    icon: f.value,
                    currentStep: t.value,
                    totalSteps: 5,
                    title: y.value,
                    description: k.value,
                    type: "primary"
                }, null, 8, ["icon", "currentStep", "title", "description"]), 1 === t.value || 2 === t.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Pa), {
                    key: 0,
                    type: "withPlugin",
                    method: "fastpass",
                    "selected-user": i.value,
                    "selected-plugin": n.value,
                    onOnAccountInput: S,
                    onOnPluginInput: U,
                    onReset: w
                }, null, 8, ["selected-user", "selected-plugin"])) : (0,
                l.kq)("", !0), 3 === t.value ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", nn, [(0,
                l.Wm)((0,
                s.SU)(me.Z), {
                    amount: o.value,
                    onChange: a[0] || (a[0] = e => o.value = e)
                }, null, 8, ["amount"]), (0,
                l.Wm)((0,
                s.SU)(u.Z), {
                    "right-icon": "arrowRight",
                    size: "xs",
                    class: "mobile-transfer-method__robux-input__button",
                    disabled: !o.value,
                    onClick: C
                }, {
                    default: (0,
                    l.w5)(( () => a[2] || (a[2] = [(0,
                    l.Uk)(" ПРОДОЛЖИТЬ ")]))),
                    _: 1,
                    __: [2]
                }, 8, ["disabled"])])) : (0,
                l.kq)("", !0), 4 === t.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)($o), {
                    key: 2,
                    user: i.value,
                    "selected-plugin": n.value,
                    robux: o.value,
                    "on-submit": x
                }, null, 8, ["user", "selected-plugin", "robux"])) : (0,
                l.kq)("", !0), (0,
                s.SU)(v) ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(de.Z), {
                    key: 3,
                    type: "error",
                    text: (0,
                    s.SU)(v)
                }, null, 8, ["text"])) : (0,
                l.kq)("", !0), 5 === t.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(La), {
                    key: 4,
                    robuxAmount: o.value,
                    "pay-from-balance": (0,
                    s.SU)(p),
                    "payment-method": (0,
                    s.SU)(d),
                    loading: (0,
                    s.SU)(_),
                    disabled: (0,
                    s.SU)(h),
                    method: "fastpass",
                    "onInput:email": a[1] || (a[1] = e => g.value = e),
                    "onSubmit:balance": (0,
                    s.SU)(r),
                    "onSubmit:paymentSystem": (0,
                    s.SU)(m),
                    "onSelect:paymentMethod": Z
                }, null, 8, ["robuxAmount", "pay-from-balance", "payment-method", "loading", "disabled", "onSubmit:balance", "onSubmit:paymentSystem"])) : (0,
                l.kq)("", !0), 6 === t.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Ya.Z), {
                    key: 5
                })) : (0,
                l.kq)("", !0)]))
            }
        });
        const un = rn;
        var cn = un
          , mn = cn
          , dn = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = (0,
                n.b)();
                return (e, t) => (0,
                s.SU)(a).isMobile ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(mn), {
                    key: 0
                })) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(sn), {
                    key: 1
                }))
            }
        });
        const pn = dn;
        var _n = pn
          , vn = _n;
        const gn = [{
            title: "ПОПОЛНЕНИЕ STEAM",
            description: "Введите все необходимые данные",
            icon: "fileUser"
        }, {
            title: "Выбери платежный метод",
            description: "Выберите нужный платежный метод из списка",
            icon: "card"
        }, {
            title: "Оплата заказа",
            description: "Проверьте все данные и оплатите заказ",
            icon: "checkedBox"
        }]
          , hn = [{
            title: "Пополнение Pubg-mobile",
            description: "Выберите карту пополнения",
            icon: "gift"
        }, {
            title: "Введите свои данные",
            description: "Введите все необходимые данные",
            icon: "fileUser"
        }, {
            title: "Выбери платежный метод",
            description: "Выберите нужный платежный метод из списка",
            icon: "card"
        }, {
            title: "Оплата заказа",
            description: "Проверьте все данные и оплатите заказ",
            icon: "checkedBox"
        }]
          , bn = [{
            title: "Пополнение Genshin Impact",
            description: "Выберите карту пополнения",
            icon: "gift"
        }, {
            title: "Введите свои данные",
            description: "Введите все необходимые данные",
            icon: "fileUser"
        }, {
            title: "Выбери платежный метод",
            description: "Выберите нужный платежный метод из списка",
            icon: "card"
        }, {
            title: "Оплата заказа",
            description: "Проверьте все данные и оплатите заказ",
            icon: "checkedBox"
        }]
          , yn = [{
            title: "Введите свои данные",
            description: "Введите все необходимые данные",
            icon: "fileUser"
        }, {
            title: "Выбери платежный метод",
            description: "Выберите нужный платежный метод из списка",
            icon: "card"
        }, {
            title: "Оплата заказа",
            description: "Проверьте все данные и оплатите заказ",
            icon: "checkedBox"
        }]
          , kn = {
            [o.FN.STEAM]: gn,
            [o.FN.PUBG]: hn,
            [o.FN.TELEGRAM]: yn,
            [o.FN.GENSHIN]: bn
        };
        var fn = t(78308)
          , Sn = t(85369);
        const Un = {
            class: "mobile-games-method"
        }
          , wn = {
            class: "mobile-games-method__header"
        };
        var xn = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = (0,
                i.yj)()
                  , {step: t, component: o, continueHandler: n, setCurrentStep: r} = (0,
                Sn.E)()
                  , u = (0,
                fn.r)()
                  , m = (0,
                l.Fl)(( () => kn[u.method] || []))
                  , d = (0,
                l.Fl)(( () => m.value[t.value - 1]?.title))
                  , p = (0,
                l.Fl)(( () => m.value[t.value - 1]?.description))
                  , _ = (0,
                l.Fl)(( () => m.value[t.value - 1]?.icon))
                  , v = () => {
                    const e = a.query.method;
                    e && (u.method = e)
                }
                ;
                return (0,
                l.YP)(( () => a.query), ( () => {
                    u.method = a.query.method
                }
                )),
                (0,
                l.bv)(( () => {
                    v()
                }
                )),
                (e, a) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", Un, [(0,
                l._)("div", wn, [(0,
                l.Wm)((0,
                s.SU)(c.Z), {
                    icon: _.value,
                    currentStep: (0,
                    s.SU)(t),
                    totalSteps: m.value.length,
                    title: d.value,
                    description: p.value,
                    type: "primary"
                }, null, 8, ["icon", "currentStep", "totalSteps", "title", "description"])]), ((0,
                l.wg)(),
                (0,
                l.j4)(l.Ob, null, [((0,
                l.wg)(),
                (0,
                l.j4)((0,
                l.LL)((0,
                s.SU)(o)), {
                    ref: "currentStepComponent",
                    step: (0,
                    s.SU)(t),
                    onSubmit: (0,
                    s.SU)(n),
                    onBack: a[0] || (a[0] = e => (0,
                    s.SU)(r)((0,
                    s.SU)(t) - 1))
                }, null, 40, ["step", "onSubmit"]))], 1024))]))
            }
        });
        const Zn = xn;
        var Cn = Zn
          , Pn = Cn
          , Dn = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                return (e, a) => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Pn)))
            }
        });
        const jn = Dn;
        var Wn = jn
          , zn = Wn;
        const Bn = {
            class: "purchase-method-button__icon"
        }
          , qn = {
            class: "purchase-method-button__data"
        }
          , Fn = {
            class: "purchase-method-button__title"
        }
          , Hn = {
            class: "purchase-method-button__description"
        };
        var Mn = (0,
        l.aZ)({
            __name: "index",
            props: {
                method: {
                    type: String,
                    default: "transfer",
                    required: !0
                },
                active: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                onSelect: {
                    type: Function,
                    required: !0
                },
                withoutDescription: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e) {
                const a = e
                  , t = {
                    home: {
                        title: "Домой",
                        description: "На главную",
                        iconPath: "transfer"
                    },
                    transfer: {
                        title: "Transfer",
                        description: "Метод трансфера",
                        iconPath: "transfer"
                    },
                    premium: {
                        title: "Premium",
                        description: "Премиум-покупка",
                        iconPath: "premium"
                    },
                    logpass: {
                        title: "Log+Pass",
                        description: "Метод логина",
                        iconPath: "logpass"
                    },
                    fastpass: {
                        title: "Fast Pass",
                        description: "Метод плагина",
                        iconPath: "fastpass"
                    },
                    superPass: {
                        title: "Супер пасс",
                        description: "Метод покупки",
                        iconPath: "superpass"
                    },
                    gift: {
                        title: "Подарочные карты",
                        description: "Метод покупки",
                        iconPath: "robux"
                    },
                    market: {
                        title: "Маркет предметов",
                        description: "Метод покупки",
                        iconPath: "market"
                    }
                }
                  , i = (0,
                l.Fl)(( () => t[a.method]?.title))
                  , o = (0,
                l.Fl)(( () => t[a.method]?.description))
                  , n = (0,
                l.Fl)(( () => t[a.method]?.iconPath))
                  , r = () => {
                    a.disabled || a.onSelect(a.method)
                }
                ;
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    class: (0,
                    x.C_)(["purchase-method-button", {
                        active: e.active,
                        disabled: e.disabled
                    }]),
                    onClick: r
                }, [(0,
                l._)("div", Bn, [(0,
                l.Wm)((0,
                s.SU)(p.Z), {
                    type: "solid",
                    name: n.value
                }, null, 8, ["name"])]), (0,
                l._)("div", qn, [(0,
                l._)("span", Fn, (0,
                x.zw)(i.value), 1), (0,
                l._)("span", Hn, (0,
                x.zw)(o.value), 1)]), (0,
                l.Wm)((0,
                s.SU)(p.Z), {
                    class: "purchase-method-button__selected-icon",
                    type: "solid",
                    name: "shoppingBasket"
                })], 2))
            }
        });
        const An = Mn;
        var On = An
          , In = On
          , Rn = t(14807)
          , Tn = t(96907);
        const Nn = {
            class: "purchase__methods"
        }
          , Gn = {
            key: 0,
            class: "purchase__methods__not-available"
        }
          , Vn = {
            class: "purchase__methods__copy__text"
        }
          , En = {
            class: "purchase__methods__copy__icon"
        }
          , Ln = {
            class: "purchase-method-button__icon"
        };
        var Yn = (0,
        l.aZ)({
            __name: "index",
            props: {
                selectedMethod: {
                    type: String,
                    required: !1,
                    default: ""
                },
                isMini: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                currentStep: {
                    type: Number,
                    required: !1,
                    default: ""
                },
                isGift: {
                    type: Boolean,
                    required: !1,
                    default: !1
                }
            },
            emits: ["update:select"],
            setup(e, {emit: a}) {
                (0,
                i.tv)();
                const t = (0,
                n.b)()
                  , o = (0,
                Xo.F)()
                  , u = (0,
                Ze.useTransferPurchaseStore)()
                  , c = (0,
                s.iH)(["transfer", "premium", "logpass", "fastpass", "superPass", "market", "gift"])
                  , m = (0,
                s.iH)([])
                  , d = (0,
                s.iH)(!1)
                  , p = (0,
                l.Fl)(( () => 0 === m.value.length));
                (0,
                l.Fl)(( () => c.value.filter((e => !m.value.includes(e)))));
                const _ = async e => {}
                  , v = async () => (m.value = ["transfer"],
                m.value)
                  , g = (0,
                l.Fl)(( () => u.method))
                  , {dataByStep: h} = (0,
                ci.h)(!1, g, !0);
                return (0,
                l.bv)(( () => {
                    v()
                }
                )),
                (a, i) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", Nn, [p.value ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", Gn, i[2] || (i[2] = [(0,
                l._)("span", {
                    class: "purchase__methods__not-available__title"
                }, " Извините... 😓 ", -1), (0,
                l._)("span", {
                    class: "purchase__methods__not-available__description"
                }, " К сожалению, все методы сейчас недоступны. Попробуйте снова через некоторое время. ", -1)]))) : (0,
                l.kq)("", !0), (0,
                l.Wm)((0,
                s.SU)(In), {
                    key: "home",
                    method: g.value,
                    "without-description": !0,
                    active: !1,
                    "on-select": () => a.$router.push("/")
                }, null, 8, ["method", "on-select"]), i[4] || (i[4] = (0,
                l._)("div", {
                    class: "purchase__methods__break-line"
                }, null, -1)), ((0,
                l.wg)(!0),
                (0,
                l.iD)(l.HY, null, (0,
                l.Ko)((0,
                s.SU)(h), (a => ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Tn.Z), {
                    item: a,
                    key: a.imgName,
                    active: e.currentStep === a.id,
                    disabled: e.currentStep < a.id,
                    "hide-description": e.isMini,
                    "on-select": _
                }, null, 8, ["item", "active", "disabled", "hide-description"])))), 128)), (0,
                l._)("div", {
                    class: "purchase__methods__profile-id",
                    onClick: i[1] || (i[1] = e => d.value = !d.value)
                }, [(0,
                l._)("div", {
                    class: (0,
                    x.C_)(["purchase-method-button", {
                        active: d.value
                    }])
                }, i[3] || (i[3] = [(0,
                l._)("div", {
                    class: "purchase-method-button__icon"
                }, "ID", -1), (0,
                l._)("div", {
                    class: "purchase-method-button__data"
                }, [(0,
                l._)("span", {
                    class: "purchase-method-button__title"
                }, "Ваш ID"), (0,
                l._)("span", {
                    class: "purchase-method-button__description"
                }, " Нажмите, чтобы скопировать ")], -1)]), 2), (0,
                l._)("div", {
                    class: (0,
                    x.C_)(["purchase__methods__copy", {
                        active: d.value,
                        "is-mini": e.isMini
                    }]),
                    onClick: i[0] || (i[0] = e => (0,
                    s.SU)(r.zp)((0,
                    s.SU)(o).profile.user_id))
                }, [(0,
                l._)("div", Vn, (0,
                x.zw)((0,
                s.SU)(o).profile.user_id), 1), (0,
                l._)("div", En, [(0,
                l._)("div", Ln, [(0,
                l.Wm)(Vt.Z, {
                    type: "solid",
                    name: "copy"
                })])])], 2)]), (0,
                l.Wm)((0,
                s.SU)(Rn.Z), {
                    title: "Возникли трудности?",
                    description: "Мы вам поможем!",
                    onClick: (0,
                    s.SU)(r.WB),
                    "is-mini": (0,
                    s.SU)(t).isTablet || e.isMini
                }, null, 8, ["onClick", "is-mini"])]))
            }
        });
        const $n = Yn;
        var Kn = $n
          , Jn = t(35004);
        const Xn = {
            class: "purchase"
        }
          , Qn = {
            class: "purchase__content"
        };
        var er = (0,
        l.aZ)({
            __name: "index",
            setup(e) {
                const a = (0,
                n.b)()
                  , t = (0,
                s.iH)([])
                  , r = (0,
                s.iH)("transfer");
                (0,
                Jn.L)("/");
                const u = (0,
                i.yj)()
                  , c = (0,
                i.tv)()
                  , m = (0,
                Ze.useTransferPurchaseStore)()
                  , d = (0,
                fn.r)();
                m.setStep(1),
                (0,
                l.YP)(( () => u.query), ( () => {
                    r.value = "transfer"
                }
                ));
                const p = async e => {
                    e || !m.gift.active ? m.setStep(e) : await c.push({
                        name: "replenishment"
                    })
                }
                ;
                return (0,
                l.wF)((async () => {
                    if ("market" === u.query.method)
                        return void m.showModal("redirectMarketModal");
                    const e = u.params.method
                      , l = u.query.isGame;
                    if (l)
                        return a.isMobile ? void (r.value = "games") : (d.method = u.query.method || o.FN.STEAM,
                        void await c.push({
                            name: "home",
                            hash: "#games"
                        }));
                    if (e && t.value.includes(e))
                        r.value = e;
                    else {
                        const e = t.value[0];
                        e && (r.value = e,
                        await c.push("/purchase/" + e))
                    }
                }
                )),
                (e, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", Xn, [(0,
                s.SU)(a).isMobile || (0,
                s.SU)(m).currentSmartOrder._id ? (0,
                l.kq)("", !0) : ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Kn), {
                    key: 0,
                    "selected-method": r.value,
                    "current-step": (0,
                    s.SU)(m).step,
                    "is-gift": (0,
                    s.SU)(m).gift.active,
                    "onUpdate:select": p
                }, null, 8, ["selected-method", "current-step", "is-gift"])), (0,
                l._)("div", Qn, ["transfer" === r.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(po), {
                    key: 0
                })) : (0,
                l.kq)("", !0), "fastpass" === r.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(vn), {
                    key: 1
                })) : (0,
                l.kq)("", !0), "logpass" === r.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(lt), {
                    key: 2
                })) : (0,
                l.kq)("", !0), "premium" === r.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(Do), {
                    key: 3
                })) : (0,
                l.kq)("", !0), "games" === r.value ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                s.SU)(zn), {
                    key: 4
                })) : (0,
                l.kq)("", !0)])]))
            }
        });
        const ar = er;
        var tr = ar
          , lr = tr
    },
    74849: function(e, a, t) {
        "use strict";
        var l = t(55694);
        a.Z = l.Z
    },
    10404: function(e, a, t) {
        "use strict";
        t.d(a, {
            Z: function() {
                return v
            }
        });
        var l = t(73396)
          , s = t(87139)
          , i = t(44870)
          , o = t(49242)
          , n = t(86367)
          , r = t(3139);
        const u = {
            key: 0,
            class: "options"
        }
          , c = ["onClick"];
        var m = (0,
        l.aZ)({
            __name: "base-select",
            props: {
                icon: {
                    type: String
                },
                options: {
                    type: Array,
                    required: !0
                },
                iconType: {
                    type: String,
                    default: "outline"
                },
                disabled: Boolean,
                modelValue: {
                    type: Object
                },
                placeholder: {
                    type: String,
                    required: !0
                },
                isDefaultInput: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["update:modelValue"],
            setup(e, {emit: a}) {
                const t = a
                  , m = (0,
                i.iH)(!1)
                  , d = (0,
                i.iH)(null);
                (0,
                n.i9H)(d, ( () => m.value = !1));
                const p = () => {
                    m.value = !m.value
                }
                  , _ = () => {
                    m.value = !1
                }
                  , v = e => {
                    t("update:modelValue", e),
                    _()
                }
                ;
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    class: (0,
                    s.C_)(["select-wrapper", {
                        disabled: e.disabled,
                        "default-input": e.isDefaultInput
                    }]),
                    ref_key: "wrapperRef",
                    ref: d
                }, [(0,
                l._)("div", {
                    class: "select-header",
                    onClick: p
                }, [e.icon ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                i.SU)(r.Z), {
                    key: 0,
                    class: (0,
                    s.C_)(["icon", `color-${e.modelValue?.value}`]),
                    type: e.iconType,
                    name: e.modelValue?.icon || e.icon
                }, null, 8, ["class", "type", "name"])) : (0,
                l.kq)("", !0), (0,
                l._)("span", {
                    class: (0,
                    s.C_)(["selected-label", [`color-${e.modelValue?.value}`, {
                        placeholder: !e.modelValue?.label
                    }]]),
                    style: (0,
                    s.j5)({
                        color: e.modelValue?.color
                    })
                }, (0,
                s.zw)(e.modelValue?.label ?? e.placeholder), 7), (0,
                l.Wm)((0,
                i.SU)(r.Z), {
                    class: (0,
                    s.C_)(["icon arrow", ["arrow", {
                        open: m.value
                    }, `color-${e.modelValue?.value}`]]),
                    style: (0,
                    s.j5)({
                        fill: e.modelValue?.color
                    }),
                    name: "caretDown"
                }, null, 8, ["class", "style"])]), m.value ? ((0,
                l.wg)(),
                (0,
                l.iD)("div", u, [((0,
                l.wg)(!0),
                (0,
                l.iD)(l.HY, null, (0,
                l.Ko)(e.options, (a => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    key: a.value,
                    class: (0,
                    s.C_)(["option", [{
                        selected: a.value === e.modelValue?.value
                    }, `color-${a?.value}`]]),
                    style: (0,
                    s.j5)({
                        color: a?.color
                    }),
                    onClick: (0,
                    o.iM)((e => v(a)), ["stop"])
                }, [a?.icon ? ((0,
                l.wg)(),
                (0,
                l.j4)((0,
                i.SU)(r.Z), {
                    key: 0,
                    class: (0,
                    s.C_)(["icon", `color-${a.value}`]),
                    type: "solid",
                    style: (0,
                    s.j5)({
                        fill: a?.color
                    }),
                    name: a?.icon
                }, null, 8, ["class", "style", "name"])) : (0,
                l.kq)("", !0), (0,
                l._)("p", null, (0,
                s.zw)(a.label), 1)], 14, c)))), 128))])) : (0,
                l.kq)("", !0)], 2))
            }
        })
          , d = t(40089);
        const p = (0,
        d.Z)(m, [["__scopeId", "data-v-69f0fdc5"]]);
        var _ = p
          , v = _
    },
    90746: function(e, a, t) {
        "use strict";
        t.d(a, {
            Z: function() {
                return c
            }
        });
        var l = t(73396)
          , s = t(87139)
          , i = t(44870)
          , o = t(3139)
          , n = (0,
        l.aZ)({
            __name: "playButton",
            props: {
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e) {
                return (a, t) => ((0,
                l.wg)(),
                (0,
                l.iD)("div", {
                    class: (0,
                    s.C_)(["play-button", {
                        disabled: e.disabled
                    }])
                }, [(0,
                l.Wm)((0,
                i.SU)(o.Z), {
                    type: "solid",
                    name: "play"
                })], 2))
            }
        });
        const r = n;
        var u = r
          , c = u
    },
    18542: function(e, a, t) {
        var l = {
            "./2fa-bg.svg": 48448,
            "./2fa.svg": 79081,
            "./cookie-bg.svg": 17307,
            "./cookie.svg": 80983
        };
        function s(e) {
            var a = i(e);
            return t(a)
        }
        function i(e) {
            if (!t.o(l, e)) {
                var a = new Error("Cannot find module '" + e + "'");
                throw a.code = "MODULE_NOT_FOUND",
                a
            }
            return l[e]
        }
        s.keys = function() {
            return Object.keys(l)
        }
        ,
        s.resolve = i,
        e.exports = s,
        s.id = 18542
    },
    48448: function(e, a, t) {
        "use strict";
        e.exports = t.p + "img/2fa-bg.4c2a4f52.svg"
    },
    79081: function(e, a, t) {
        "use strict";
        e.exports = t.p + "img/2fa.826f5e20.svg"
    },
    17307: function(e, a, t) {
        "use strict";
        e.exports = t.p + "img/cookie-bg.2c899b48.svg"
    },
    80983: function(e, a, t) {
        "use strict";
        e.exports = t.p + "img/cookie.0a5365cf.svg"
    },
    40524: function(e, a, t) {
        "use strict";
        e.exports = t.p + "media/editing-plugin-mobile.74b17954.mp4"
    },
    96667: function(e, a, t) {
        "use strict";
        e.exports = t.p + "media/editing-plugin.55b67108.mp4"
    }
}]);
