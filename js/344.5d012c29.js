(self["webpackChunksp_admin"] = self["webpackChunksp_admin"] || []).push([[344], {
    35004: function(s, e, t) {
        "use strict";
        t.d(e, {
            L: function() {
                return r
            }
        });
        var o = t(13398)
          , a = t(22483)
          , i = t(16530);
        function r(s) {
            const e = (0,
            a.yj)();
            (0,
            i.u)({
                link: [{
                    rel: "canonical",
                    href: (0,
                    o.aG)(s || e?.path || "")
                }]
            })
        }
    },
    45522: function(s, e, t) {
        "use strict";
        t.d(e, {
            u: function() {
                return a
            }
        });
        var o = t(45106);
        function a() {
            function s(s) {
                return s.filter((s => s.paid && !s.configured)).map((s => ({
                    ...s,
                    date: s.datetime
                })))
            }
            async function e(e) {
                const t = await o.b.pending.getSmartOrders();
                t && e(s(t))
            }
            return {
                filterActiveSmartOrders: s,
                getActiveSmartOrders: e
            }
        }
    },
    45034: function(s, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return v
            }
        });
        var o = t(73396)
          , a = t(87139);
        const i = {
            class: "empty-list-info"
        }
          , r = ["src"]
          , n = {
            class: "empty-list-info__text"
        }
          , l = {
            class: "empty-list-info__footer"
        };
        var u = (0,
        o.aZ)({
            __name: "emptyListInfo",
            props: {
                small: {
                    type: Boolean,
                    default: !1
                },
                type: {
                    type: String,
                    default: "search"
                }
            },
            setup(s) {
                const e = s
                  , u = {
                    search: "empty-search",
                    users: "empty-search-user",
                    uncomplitedOrders: "empty-order-list",
                    balance: "placeholder-balance"
                }
                  , g = (0,
                o.Fl)(( () => t(40146)(`./${u[e.type]}.svg`)));
                return (e, t) => ((0,
                o.wg)(),
                (0,
                o.iD)("div", i, [(0,
                o._)("div", {
                    class: (0,
                    a.C_)(["empty-list-info__body", {
                        small: s.small
                    }])
                }, [(0,
                o._)("img", {
                    src: g.value,
                    alt: "icon"
                }, null, 8, r), (0,
                o._)("div", n, [(0,
                o.WI)(e.$slots, "text")]), (0,
                o._)("div", l, [(0,
                o.WI)(e.$slots, "footer")])], 2)]))
            }
        });
        const g = u;
        var c = g
          , v = c
    },
    90570: function(s, e, t) {
        "use strict";
        var o = t(89681);
        e.Z = o.Z
    },
    15818: function(s, e, t) {
        "use strict";
        t.d(e, {
            T: function() {
                return v
            }
        });
        var o = t(44870)
          , a = t(73396)
          , i = t(45106)
          , r = t(27085)
          , n = t(63315)
          , l = t(36702)
          , u = t(59363);
        const g = {
            default: "Промокод не применен",
            success: "Промокод применен",
            error: "Не удалось применить промокод",
            minError: "Минимальная сумма для активации промокода",
            maxError: "Максимальная сумма для активации промокода",
            isNoPromo: "Данного промокода не существует!",
            promoExpired: "Истекло время действия промокода!",
            promoMaxUsage: "Время действия промокода закончилось!",
            notAuth: "Требуется авторизация!",
            reuse: "Промокод можно использовать только один раз!"
        }
          , c = {
            value: "",
            loading: !1,
            error: "",
            status: "",
            bonus: "",
            bonusForGamepass: "",
            validValue: null,
            isFree: !1,
            robux: 0
        };
        function v() {
            const s = (0,
            o.qj)({
                ...c
            })
              , e = (0,
            r.useTransferPurchaseStore)()
              , t = (0,
            n.G)()
              , v = (0,
            l.F)()
              , {isSmartPurchase: p} = (0,
            u.useABTests)()
              , d = (0,
            a.Fl)(( () => ({
                1: g.isNoPromo,
                2: g.promoExpired,
                3: g.promoMaxUsage,
                4: `${g.minError} ${s.validValue} R$`,
                5: `${g.maxError} ${s.validValue} R$`,
                6: g.notAuth,
                7: g.error
            })))
              , m = s => "fix" === s.type ? +s.bonus : +Math.floor(Number(s.robux_amount_no_promo * s.bonus)).toFixed(2)
              , f = async (o, a) => {
                o = o?.trim()?.toUpperCase(),
                s.loading = !0;
                try {
                    const r = await i.b.pending.applyPromo(o, +a);
                    if (r?.status) {
                        s.status = "success",
                        s.isFree = !!r.robux;
                        const t = r.promo?.type;
                        "fix" === t ? (s.bonus = r.promo.bonus,
                        s.bonusForGamepass = r.promo.bonus) : "percent" === t ? (s.bonus = Math.floor(Number(+a * +r.promo.bonus)).toFixed(2),
                        s.bonusForGamepass = Math.floor(Number(+a * +r.promo.bonus)).toFixed(2)) : r.free && (s.robux = Number(r.robux)),
                        e.setPromoCode(o, +s.bonus, +s.bonusForGamepass, r.free, r.robux)
                    } else if (r) {
                        if (s.status = "error",
                        s.error = g.error,
                        r.promo_config) {
                            let e = r.promo_config;
                            r.promo_config?.length && (e = r.promo_config[0],
                            s.validValue = r.promo_config[1]),
                            s.error = d.value[e]
                        } else
                            r.promo_usage || v.isAuthorized ? r.promo_usage && (s.error = g.reuse) : s.error = d.value[6];
                        t.setNotification({
                            title: "Внимание!",
                            description: s.error,
                            type: "error"
                        })
                    }
                    return "success" === s.status
                } catch (r) {
                    return console.error(r),
                    !1
                } finally {
                    s.loading = !1,
                    e.setGamepassPurchaseDisabled(!s.isFree && p.value)
                }
            }
              , b = () => {
                e.resetPromoCode(),
                Object.keys(c).forEach((e => s[e] = c[e])),
                e.setGamepassPurchaseDisabled(p.value)
            }
            ;
            return {
                promoCode: s,
                promoErrors: d,
                applyPromo: f,
                resetPromo: b,
                formattingPromoBonus: m
            }
        }
    },
    14531: function(s, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return g
            }
        });
        var o = t(73396)
          , a = t(87139);
        const i = {
            class: "tabs-block"
        }
          , r = ["onClick"];
        var n = (0,
        o.aZ)({
            __name: "index",
            props: {
                items: {
                    type: Array,
                    required: !0,
                    default: () => []
                },
                selected: {
                    type: String,
                    required: !1,
                    default: ""
                }
            },
            emits: ["change"],
            setup(s, {emit: e}) {
                const t = e;
                function n(s) {
                    t("change", s)
                }
                return (e, t) => ((0,
                o.wg)(),
                (0,
                o.iD)("div", i, [((0,
                o.wg)(!0),
                (0,
                o.iD)(o.HY, null, (0,
                o.Ko)(s.items, (e => ((0,
                o.wg)(),
                (0,
                o.iD)("div", {
                    key: e.name,
                    class: (0,
                    a.C_)(["tabs-block__item", {
                        active: e.name === s.selected
                    }]),
                    onClick: s => n(e.name)
                }, [(0,
                o._)("span", null, (0,
                a.zw)(e.text), 1)], 10, r)))), 128))]))
            }
        });
        const l = n;
        var u = l
          , g = u
    },
    55694: function(s, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return u
            }
        });
        var o = t(73396)
          , a = t(44870)
          , i = t(90552);
        const r = {
            class: "back-button-wrapper"
        };
        var n = (0,
        o.aZ)({
            __name: "back-button-wrapper",
            props: {
                hideBackButton: {
                    type: Boolean,
                    default: !1
                },
                size: {
                    type: String,
                    default: "xl"
                },
                mobileSize: {
                    type: String
                }
            },
            emits: ["onBack"],
            setup(s, {emit: e}) {
                const t = e;
                return (e, n) => ((0,
                o.wg)(),
                (0,
                o.iD)("div", r, [s.hideBackButton ? (0,
                o.kq)("", !0) : ((0,
                o.wg)(),
                (0,
                o.j4)((0,
                a.SU)(i.Z), {
                    key: 0,
                    "left-icon": "arrowLeft",
                    size: s.size,
                    "mobile-size": s.mobileSize,
                    class: "back",
                    onClick: n[0] || (n[0] = s => t("onBack"))
                }, null, 8, ["size", "mobile-size"])), (0,
                o.WI)(e.$slots, "default")]))
            }
        });
        const l = n;
        var u = l
    },
    14790: function(s, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return Z
            }
        });
        var o = t(73396)
          , a = t(87139)
          , i = t(44870)
          , r = t(92474)
          , n = t(45106)
          , l = t(63315)
          , u = t(27085)
          , g = t(90552)
          , c = t(55694)
          , v = t(65712);
        const p = (0,
        r.b)()
          , d = s => ["Посмотрите видео-инструкцию и скопируйте сумму для настройки гейм-пасса →", "Нажмите кнопку «НАСТРОИТЬ GAME-PASS» и в новой вкладке на сайте Roblox произведите настройку с вашей суммой как в инструкции " + (p.isMobile || s ? "" : "→"), "Вернитесь на наш сайт (другая вкладка) и нажмите кнопку «ПРОДОЛЖИТЬ»"]
          , m = s => ["Посмотрите видео-инструкцию", "Нажмите кнопку «СОЗДАТЬ GAME-PASS» и в новой вкладке на сайте Roblox создайте гейм-пасс по инструкции " + (s ? "" : "→"), "Вернитесь на наш сайт (другая вкладка) и нажмите кнопку «ПРОДОЛЖИТЬ»"];
        var f = t(13398)
          , b = t(3139);
        const _ = {
            class: "gamepass-steps__body"
        }
          , h = {
            class: "gamepass-step__number"
        }
          , k = {
            class: "gamepass-step__title"
        };
        var y = (0,
        o.aZ)({
            __name: "index",
            props: {
                isEdit: {
                    type: Boolean,
                    default: !1
                },
                loading: {
                    type: Boolean,
                    default: !1
                },
                isCard: {
                    type: Boolean,
                    default: !1
                },
                isModal: {
                    type: Boolean,
                    default: !1
                },
                isCustomSettings: {
                    type: Boolean,
                    default: !1
                },
                robuxAmount: {
                    type: Number,
                    default: 0
                },
                btnText: {
                    type: String,
                    default: ""
                }
            },
            emits: ["submit"],
            setup(s, {emit: e}) {
                const t = s
                  , n = e
                  , l = (0,
                r.b)()
                  , u = (0,
                o.Fl)(( () => t.isEdit ? d(t.isModal) : m(t.isModal)));
                return (e, t) => ((0,
                o.wg)(),
                (0,
                o.iD)("div", {
                    class: (0,
                    a.C_)(["gamepass-steps", {
                        "is-card": s.isCard,
                        "p-0": s.isCustomSettings
                    }])
                }, [s.isCard ? (0,
                o.WI)(e.$slots, "instruction", {
                    key: 0
                }) : (0,
                o.kq)("", !0), (0,
                o._)("div", _, [((0,
                o.wg)(!0),
                (0,
                o.iD)(o.HY, null, (0,
                o.Ko)(u.value, ( (r, u) => ((0,
                o.wg)(),
                (0,
                o.iD)("div", {
                    class: "gamepass-step",
                    key: `step-${u}`
                }, [(0,
                o._)("div", {
                    class: (0,
                    a.C_)(["gamepass-step__header", {
                        "align-start": 1 === u
                    }])
                }, [(0,
                o._)("div", h, (0,
                a.zw)(u + 1), 1), (0,
                o._)("div", k, (0,
                a.zw)(r), 1), s.isEdit && 0 === u ? ((0,
                o.wg)(),
                (0,
                o.iD)("div", {
                    key: 0,
                    class: "gamepass-step__amount",
                    onClick: t[0] || (t[0] = e => (0,
                    i.SU)(f.zp)(s.robuxAmount, "Сумма успешно скопирована"))
                }, [(0,
                o._)("span", null, (0,
                a.zw)(s.robuxAmount) + " R$", 1), (0,
                o.Wm)((0,
                i.SU)(b.Z), {
                    type: "outline",
                    name: "copy"
                })])) : (0,
                o.kq)("", !0), 1 !== u || s.isCustomSettings ? (0,
                o.kq)("", !0) : ((0,
                o.wg)(),
                (0,
                o.j4)((0,
                i.SU)(g.Z), {
                    key: 1,
                    size: (0,
                    i.SU)(l).isMobile ? "xs" : "l",
                    "mobile-size": "xs",
                    "left-icon": s.isEdit ? "settingsAdjust" : "plus",
                    disabled: s.loading,
                    onClick: t[1] || (t[1] = s => n("submit"))
                }, {
                    default: (0,
                    o.w5)(( () => [(0,
                    o.Uk)((0,
                    a.zw)(s.btnText), 1)])),
                    _: 1
                }, 8, ["size", "left-icon", "disabled"]))], 2), s.isCard || 0 !== u ? (0,
                o.kq)("", !0) : (0,
                o.WI)(e.$slots, "instruction", {
                    key: 0,
                    step: r
                })])))), 128))])], 2))
            }
        });
        const w = y;
        var x = w
          , S = x
          , C = t(22483);
        const F = {
            class: "gamepass-block-wrapper__video"
        }
          , P = {
            key: 0,
            class: "total-robux"
        }
          , z = ["src"]
          , G = {
            key: 1,
            class: "gamepass-block"
        }
          , U = {
            class: "gamepass-block__footer"
        };
        var B = (0,
        o.aZ)({
            __name: "index",
            props: {
                place: {
                    type: Object,
                    default: null
                },
                robux: {
                    type: Number,
                    default: 0
                },
                onSubmit: {
                    type: Function
                },
                isCard: {
                    type: Boolean,
                    default: !1
                },
                isModal: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["back", "smartOrderSuccess"],
            setup(s, {expose: e, emit: p}) {
                const d = s
                  , m = ((0,
                C.tv)(),
                (0,
                r.b)())
                  , b = p
                  , _ = (0,
                i.iH)("create")
                  , h = (0,
                i.iH)(!1)
                  , k = (0,
                i.iH)(null)
                  , y = (0,
                u.useTransferPurchaseStore)()
                  , w = (0,
                l.G)()
                  , x = (0,
                o.Fl)(( () => "create" === _.value))
                  , B = (0,
                o.Fl)(( () => "edit" === _.value))
                  , M = (0,
                o.Fl)(( () => y.currentSmartOrder))
                  , A = (0,
                o.Fl)(( () => !!y.currentSmartOrder._id))
                  , Z = (0,
                o.Fl)(( () => A.value ? M.value.universe_id : d.place?.universeID))
                  , E = (0,
                o.Fl)(( () => A.value ? M.value.robux_amount : y.promoCode.bonusForGamepass ? Number(d.robux) + Number(y.promoCode.bonusForGamepass) : d.robux))
                  , N = (0,
                o.Fl)(( () => Math.round(E.value / .7)))
                  , $ = ((0,
                o.Fl)(( () => t(58163))),
                (0,
                o.Fl)(( () => {
                    const s = m.isMobile
                      , e = t(s ? 11870 : 33862)
                      , o = t(s ? 98310 : 94493);
                    return x.value ? e : o
                }
                )))
                  , D = (0,
                o.Fl)(( () => Math.round(E.value / .7)))
                  , O = (0,
                o.Fl)(( () => {
                    const s = x.value ? "Создание" : "Настройка";
                    return `${s} Game-Pass`
                }
                ))
                  , L = (0,
                o.Fl)(( () => B.value ? "НАСТРОИТЬ GAME-PASS" : "СОЗДАТЬ GAME-PASS"));
                async function T() {
                    if (!Z.value)
                        return null;
                    const s = await n.b.pending.getPasses(Z.value || "");
                    return s || null
                }
                function j() {
                    Z && (x.value && (window.open(`https://create.roblox.com/dashboard/creations/experiences/${Z.value}/passes/create`, "_blank"),
                    h.value = !0),
                    B.value && k.value && (window.open(`https://create.roblox.com/dashboard/creations/experiences/${Z.value}/passes/${k.value.id}/sales`, "_blank"),
                    h.value = !0))
                }
                function q() {
                    return h.value || w.setNotification({
                        title: "Внимание!",
                        description: "Для продолжения необходимо настроить геймпасс",
                        type: "error"
                    }),
                    h.value
                }
                function I(s) {
                    s.price === N.value ? V(s) : (R(),
                    console.log("ЦЕНА НЕ СОВПАДАЕТ", s.price, N.value))
                }
                async function W() {
                    if (!q())
                        return;
                    h.value = !1,
                    y.setGamePassLoading(!0);
                    const s = await T();
                    if (y.setGamePassLoading(!1),
                    null === s)
                        return void R(!1);
                    if (!s.length)
                        return _.value = "create",
                        void R();
                    const e = s[0];
                    k.value = e,
                    x.value ? _.value = "edit" : B.value && I(e)
                }
                function R(s=!0) {
                    h.value = !1;
                    const e = s ? "Проверьте правильность настройки геймпасс" : "Что-то пошло не так. Попробуйте еще раз.";
                    w.setNotification({
                        title: "Внимание!",
                        description: e,
                        type: "error"
                    })
                }
                async function H() {
                    const s = await n.b.pending.configureSmartOrder(M.value._id);
                    if (s)
                        return w.setNotification({
                            title: "Успешно",
                            description: "Данный геймпасс настроен! Заказ принят в обработку. Пожалуйста, ожидайте!",
                            type: "success"
                        }),
                        void b("smartOrderSuccess");
                    w.setNotification({
                        title: "Внимание!",
                        description: "Что-то пошло не так",
                        type: "error"
                    })
                }
                function V(s, e=!1, t=!1) {
                    A.value ? H() : (e && y.setSkipGamePass(!0),
                    t && w.setNotification({
                        title: "Успешно",
                        description: "Данный геймпасс уже настроен! Если вы хотите изменить сумму, то пожалуйста начните покупку заново!",
                        type: "success"
                    }),
                    d.onSubmit && d.onSubmit(s))
                }
                return (0,
                o.wF)((async () => {
                    if (d.disabled)
                        return;
                    y.setGamePassLoading(!0),
                    y.setSkipGamePass(!1);
                    const s = await T();
                    if (s) {
                        const e = s[0];
                        if (k.value = e,
                        e && e.price === N.value)
                            return V(e, !0, !0),
                            void y.setGamePassLoading(!1);
                        _.value = e ? "edit" : "create"
                    }
                    y.setGamePassLoading(!1),
                    d.isCard || y.setIsRobloxBanner(!0)
                }
                )),
                (0,
                o.Ah)(( () => {
                    y.setIsRobloxBanner(!1),
                    y.resetCurrentSmartOrder()
                }
                )),
                e({
                    submit: W,
                    makeTargetAction: j,
                    btnText: L,
                    isEdit: B
                }),
                (e, t) => ((0,
                o.wg)(),
                (0,
                o.iD)("div", {
                    class: (0,
                    a.C_)(["gamepass-block-wrapper", {
                        "is-card": s.isCard,
                        "is-modal": s.isModal
                    }])
                }, [s.isCard ? ((0,
                o.wg)(),
                (0,
                o.j4)((0,
                i.SU)(v.Z), {
                    key: 0,
                    "is-mini": "",
                    icon: "mapLocation",
                    description: "Внимательно ознакомьтесь с инструкцией и выполните все действия",
                    title: O.value,
                    "is-h1": !1
                }, {
                    default: (0,
                    o.w5)(( () => [(0,
                    o.Wm)((0,
                    i.SU)(g.Z), {
                        class: "gamepass-block-wrapper__support",
                        type: "outline",
                        "icon-type": "outline",
                        "left-icon": "headset",
                        size: "s",
                        "mobile-size": "s",
                        "is-uppercase-disabled": "",
                        onClick: (0,
                        i.SU)(f.WB)
                    }, {
                        default: (0,
                        o.w5)(( () => t[1] || (t[1] = [(0,
                        o.Uk)(" Нужна помощь? ")]))),
                        _: 1,
                        __: [1]
                    }, 8, ["onClick"])])),
                    _: 1
                }, 8, ["title"])) : (0,
                o.kq)("", !0), (0,
                o.Wm)((0,
                i.SU)(S), {
                    "is-edit": B.value,
                    "is-card": s.isCard,
                    "is-modal": s.isModal,
                    "robux-amount": D.value,
                    loading: (0,
                    i.SU)(y).isGamePassLoading,
                    "btn-text": L.value,
                    "is-custom-settings": A.value,
                    onSubmit: j
                }, {
                    instruction: (0,
                    o.w5)(( () => [(0,
                    o._)("div", {
                        class: (0,
                        a.C_)(["gamepass-block-wrapper__instructions", {
                            hide: (0,
                            i.SU)(y).isGamePassLoading
                        }])
                    }, [(0,
                    o._)("div", F, [B.value ? ((0,
                    o.wg)(),
                    (0,
                    o.iD)("div", P, (0,
                    a.zw)(D.value), 1)) : (0,
                    o.kq)("", !0), (0,
                    o._)("img", {
                        alt: "instruction",
                        src: $.value
                    }, null, 8, z)])], 2)])),
                    _: 1
                }, 8, ["is-edit", "is-card", "is-modal", "robux-amount", "loading", "btn-text", "is-custom-settings"]), s.isCard || A.value ? (0,
                o.kq)("", !0) : ((0,
                o.wg)(),
                (0,
                o.iD)("div", G, [(0,
                o._)("div", U, [(0,
                o.Wm)(c.Z, {
                    "mobile-size": "l",
                    size: "l",
                    "hide-back-button": A.value,
                    onOnBack: t[0] || (t[0] = s => b("back"))
                }, {
                    default: (0,
                    o.w5)(( () => [(0,
                    i.SU)(m).isMobile ? ((0,
                    o.wg)(),
                    (0,
                    o.j4)((0,
                    i.SU)(g.Z), {
                        key: 0,
                        size: "l",
                        "mobile-size": "l",
                        "left-icon": "checkedBox",
                        "icon-type": "solid",
                        loading: (0,
                        i.SU)(y).isGamePassLoading,
                        onClick: W
                    }, {
                        default: (0,
                        o.w5)(( () => t[2] || (t[2] = [(0,
                        o.Uk)(" ПРОДОЛЖИТЬ ")]))),
                        _: 1,
                        __: [2]
                    }, 8, ["loading"])) : ((0,
                    o.wg)(),
                    (0,
                    o.j4)((0,
                    i.SU)(g.Z), {
                        key: 1,
                        size: "l",
                        "mobile-size": "l",
                        "right-icon": "arrowRight",
                        loading: (0,
                        i.SU)(y).isGamePassLoading,
                        onClick: W
                    }, {
                        default: (0,
                        o.w5)(( () => t[3] || (t[3] = [(0,
                        o.Uk)(" ПРОДОЛЖИТЬ ")]))),
                        _: 1,
                        __: [3]
                    }, 8, ["loading"]))])),
                    _: 1
                }, 8, ["hide-back-button"])])]))], 2))
            }
        })
          , M = t(40089);
        const A = (0,
        M.Z)(B, [["__scopeId", "data-v-796f7aa0"]]);
        var Z = A
    },
    40146: function(s, e, t) {
        var o = {
            "./add.svg": 15246,
            "./alarm.svg": 15862,
            "./alltypes.svg": 85742,
            "./android.svg": 16049,
            "./app-store.svg": 37628,
            "./apple.svg": 73049,
            "./apps.svg": 32496,
            "./arrow-down.svg": 43985,
            "./arrow-left.svg": 5673,
            "./arrow-right.svg": 51384,
            "./arrow-up.svg": 28187,
            "./at-sign.svg": 89568,
            "./attach.svg": 93511,
            "./award.svg": 72844,
            "./backspace.svg": 32153,
            "./bag.svg": 31087,
            "./bank.svg": 58741,
            "./banner-arrow.svg": 43149,
            "./binocular.svg": 63612,
            "./bookmark.svg": 90483,
            "./box.svg": 24210,
            "./bullhorn.svg": 2189,
            "./calculator.svg": 99960,
            "./calendar.svg": 26905,
            "./cancel.svg": 725,
            "./card.svg": 60315,
            "./caret-down.svg": 17296,
            "./caret-left.svg": 45429,
            "./caret-right.svg": 85080,
            "./caret-up.svg": 4092,
            "./cat.svg": 72785,
            "./chart-pie-alt.svg": 63319,
            "./chart-pie.svg": 25329,
            "./chat.svg": 52523,
            "./check.svg": 4299,
            "./checked-box.svg": 48332,
            "./checkmark.svg": 22126,
            "./chrome.svg": 80186,
            "./clipboard-alt.svg": 55481,
            "./clipboard.svg": 77103,
            "./clock.svg": 89834,
            "./close.svg": 69929,
            "./cloud-check.svg": 16681,
            "./cloud-download.svg": 71344,
            "./cloud-off.svg": 46483,
            "./cloud-upload.svg": 36694,
            "./cloud.svg": 17943,
            "./collapse.svg": 64346,
            "./columns.svg": 20594,
            "./comment-block.svg": 93040,
            "./comment-minus.svg": 42553,
            "./comment-plus.svg": 15103,
            "./comment.svg": 91846,
            "./contacts.svg": 41342,
            "./cookie.svg": 40187,
            "./copy.svg": 62749,
            "./cross.svg": 62349,
            "./crown.svg": 18455,
            "./current-location.svg": 9926,
            "./cursor.svg": 76026,
            "./diamond.svg": 16273,
            "./discord.svg": 73762,
            "./dislike.svg": 86421,
            "./document.svg": 80,
            "./download.svg": 95880,
            "./edit-alt.svg": 81864,
            "./edit.svg": 63263,
            "./empty-order-list.svg": 85565,
            "./empty-search-user.svg": 75156,
            "./empty-search.svg": 99083,
            "./envelope-open.svg": 48217,
            "./envelope.svg": 58483,
            "./error.svg": 33447,
            "./exchange.svg": 79516,
            "./expand.svg": 1487,
            "./explore.svg": 73239,
            "./eye-closed.svg": 18088,
            "./eye.svg": 91659,
            "./facebook.svg": 86110,
            "./fastpass.svg": 25150,
            "./feedback.svg": 62048,
            "./file-download.svg": 956,
            "./file-upload.svg": 3259,
            "./file-user.svg": 8055,
            "./file.svg": 34521,
            "./filter.svg": 40966,
            "./fire.svg": 56242,
            "./flame.svg": 73924,
            "./flask.svg": 71320,
            "./forward.svg": 40137,
            "./from.svg": 7453,
            "./gamepad.svg": 49612,
            "./gift.svg": 54683,
            "./globe.svg": 25583,
            "./gmail.svg": 20287,
            "./google-alt.svg": 20408,
            "./google-play.svg": 90096,
            "./google.svg": 28557,
            "./gun.svg": 23739,
            "./headphone.svg": 31054,
            "./headset.svg": 4842,
            "./heart-off.svg": 12354,
            "./heart-plus.svg": 41111,
            "./heart.svg": 69084,
            "./heartbeat.svg": 97040,
            "./history.svg": 8282,
            "./home.svg": 52388,
            "./hotspot.svg": 52685,
            "./image.svg": 57317,
            "./info-circle.svg": 55873,
            "./info-rect.svg": 82831,
            "./info-triangle.svg": 10827,
            "./instagram.svg": 71003,
            "./invoice.svg": 43044,
            "./key.svg": 56980,
            "./layout.svg": 35465,
            "./lightbulb-alt.svg": 6758,
            "./lightbulb-off.svg": 30430,
            "./lightbulb.svg": 52387,
            "./lightning-alt.svg": 74834,
            "./lightning.svg": 63646,
            "./like.svg": 68198,
            "./linkedin.svg": 38360,
            "./location-check.svg": 58115,
            "./location-plus.svg": 13311,
            "./location-question.svg": 94921,
            "./location.svg": 50779,
            "./lock-time.svg": 53258,
            "./lock.svg": 98982,
            "./login.svg": 77343,
            "./logout.svg": 18255,
            "./logpass.svg": 11504,
            "./map-location.svg": 25545,
            "./market_item_background.svg": 8134,
            "./menu.svg": 47139,
            "./microphone-off.svg": 15458,
            "./microphone.svg": 68840,
            "./moon.svg": 5753,
            "./move.svg": 64433,
            "./music.svg": 94061,
            "./navigation.svg": 38935,
            "./notification-off.svg": 11837,
            "./notification-on.svg": 28967,
            "./notification.svg": 53280,
            "./other-1.svg": 4160,
            "./other-2.svg": 55788,
            "./other.svg": 51202,
            "./palette.svg": 7546,
            "./pause.svg": 48546,
            "./pet.svg": 12638,
            "./phone-in.svg": 13106,
            "./phone-miss.svg": 24417,
            "./phone-off.svg": 11411,
            "./phone-out.svg": 34630,
            "./phone.svg": 28754,
            "./picture.svg": 52377,
            "./pin.svg": 76593,
            "./pinterest.svg": 66336,
            "./placeholder-balance.svg": 45751,
            "./play.svg": 81952,
            "./plus.svg": 80590,
            "./plus2.svg": 73267,
            "./power-button.svg": 84845,
            "./premium.svg": 76558,
            "./present.svg": 1386,
            "./pulse.svg": 23528,
            "./refresh.svg": 53955,
            "./reply.svg": 1607,
            "./roblox-input.svg": 82061,
            "./robux-white.svg": 15758,
            "./robux.svg": 92297,
            "./rows.svg": 13562,
            "./rub.svg": 43963,
            "./sand-watch.svg": 63151,
            "./save.svg": 92632,
            "./search.svg": 84032,
            "./send.svg": 52465,
            "./server.svg": 29792,
            "./settings-adjust.svg": 1218,
            "./settings-alt.svg": 99672,
            "./settings.svg": 61770,
            "./share-box.svg": 47825,
            "./share.svg": 1556,
            "./shield.svg": 80839,
            "./shopping-bag.svg": 67777,
            "./shopping-basket-cancel.svg": 32624,
            "./shopping-basket.svg": 98337,
            "./shopping-cart.svg": 66408,
            "./shuffle.svg": 64590,
            "./skip-next.svg": 59021,
            "./skip-prev.svg": 66750,
            "./sort.svg": 6763,
            "./star-half.svg": 23644,
            "./star.svg": 43638,
            "./sun.svg": 2364,
            "./superpass.svg": 65222,
            "./telegram.svg": 30375,
            "./timer.svg": 87791,
            "./to.svg": 10103,
            "./transfer.svg": 44077,
            "./trash-alt.svg": 33010,
            "./trash.svg": 62195,
            "./tree-big.svg": 33669,
            "./tree-small.svg": 54725,
            "./tumblr.svg": 69994,
            "./twitch.svg": 88085,
            "./twitter.svg": 41490,
            "./unlock.svg": 96039,
            "./upload.svg": 46958,
            "./user-block.svg": 1696,
            "./user-clock.svg": 1618,
            "./user-plus.svg": 54564,
            "./user.svg": 71856,
            "./vk.svg": 991,
            "./volume-down.svg": 19886,
            "./volume-off.svg": 72815,
            "./volume-up.svg": 23989,
            "./wallet.svg": 55383,
            "./wechat.svg": 39378,
            "./whatsapp.svg": 59965,
            "./windows.svg": 68398,
            "./youtube.svg": 61826,
            "./zoom-in.svg": 72864,
            "./zoom-out.svg": 20672,
            "./брейнрот.svg": 80412
        };
        function a(s) {
            var e = i(s);
            return t(e)
        }
        function i(s) {
            if (!t.o(o, s)) {
                var e = new Error("Cannot find module '" + s + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return o[s]
        }
        a.keys = function() {
            return Object.keys(o)
        }
        ,
        a.resolve = i,
        s.exports = a,
        a.id = 40146
    },
    27225: function(s, e, t) {
        "use strict";
        s.exports = t.p + "img/pubg-card.68db6bf3.webp"
    },
    57457: function(s, e, t) {
        "use strict";
        s.exports = t.p + "img/genshin.ae5b9a9f.webp"
    },
    11997: function(s, e, t) {
        "use strict";
        s.exports = t.p + "img/telegram-premium.a069711c.webp"
    },
    19874: function(s, e, t) {
        "use strict";
        s.exports = t.p + "img/telegram-stars.5dc7ab80.webp"
    },
    94493: function(s, e, t) {
        "use strict";
        s.exports = t.p + "img/Tree_pass_config_desktop_transparent_2.f95a70b7.gif"
    },
    98310: function(s, e, t) {
        "use strict";
        s.exports = t.p + "img/Tree_pass_config_mobile_transparent_3.ccbd0bf1.gif"
    },
    33862: function(s, e, t) {
        "use strict";
        s.exports = t.p + "img/Tree_pass_create_desktop_2.92d8791d.gif"
    },
    11870: function(s, e, t) {
        "use strict";
        s.exports = t.p + "img/Tree_pass_create_mobile_3.dc39cd35.gif"
    },
    58163: function(s, e, t) {
        "use strict";
        s.exports = t.p + "media/create-gamepass.27dc67e2.mp4"
    }
}]);
