"use strict";
(self["webpackChunksp_admin"] = self["webpackChunksp_admin"] || []).push([[96], {
    3234: function(e, a, t) {
        var r, _, o;
        t.d(a, {
            aS: function() {
                return _
            },
            H: function() {
                return r
            }
        }),
        function(e) {
            e["SUCCESS"] = "success",
            e["PAID"] = "paid",
            e["CANCEL"] = "cancel",
            e["IN_GAME"] = "in_game",
            e["FRIEND"] = "friend"
        }(r || (r = {})),
        function(e) {
            e["SUCCESS"] = "success",
            e["PROCESSING"] = "processing",
            e["FAILED"] = "failed",
            e["PAID"] = "paid"
        }(_ || (_ = {})),
        function(e) {
            e["ERROR"] = "error",
            e["PENDING"] = "pending",
            e["ROBUXSHIP"] = "robuxship",
            e["SYSTEM_ERROR"] = "system_error"
        }(o || (o = {}))
    },
    76353: function(e, a, t) {
        t.d(a, {
            $l: function() {
                return _
            },
            Zq: function() {
                return r
            },
            ee: function() {
                return o
            }
        });
        const r = "Ошибка. Средства возвращены на баланс"
          , _ = "Ошибка. Активируйте промокод еще раз."
          , o = "Ошибка. Повторите попытку через час"
    },
    74658: function(e, a, t) {
        var r;
        t.d(a, {
            T: function() {
                return o
            }
        }),
        function(e) {
            e["PLAYER_NOT_JOINED"] = "noJoin",
            e["PLAYER_NOT_PLAYED"] = "noPlay",
            e["NO_ITEM"] = "noItem",
            e["PASS_ALREADY_BOUGHT"] = "alreadyBought",
            e["GAME_ERROR"] = "gameError",
            e["SERVER_ERROR"] = "serverError",
            e["TIMEOUT"] = "timeout",
            e["OTHER"] = "other"
        }(r || (r = {}));
        const _ = "Ошибка выполнения заказа";
        function o(e) {
            const a = {
                [r.PLAYER_NOT_JOINED]: "Ошибка: Вы не зашли на сервер",
                [r.PLAYER_NOT_PLAYED]: "Ошибка: Вы еще ни разу не заходили в игру",
                [r.NO_ITEM]: _,
                [r.PASS_ALREADY_BOUGHT]: "Ошибка: Вы уже приобрели этот пасс",
                [r.GAME_ERROR]: "Ошибка: Не получилось подарить пасс",
                [r.SERVER_ERROR]: "Ошибка: Проблема с сервером Roblox",
                [r.TIMEOUT]: _,
                [r.OTHER]: _
            };
            return e ? a[e] : a[r.OTHER]
        }
    },
    22329: function(e, a, t) {
        t.d(a, {
            Z: function() {
                return oe
            }
        });
        t(57658);
        var r = t(73396)
          , _ = t(44870)
          , o = t.p + "img/empty.49e286ba.svg"
          , l = t(87139)
          , i = t(3139)
          , s = t(87270)
          , d = t(15818)
          , m = t(13398)
          , n = t(27085)
          , c = t(74658)
          , u = t(76353)
          , p = t(78308)
          , v = t(96919);
        const g = {
            class: "completed-order-item"
        }
          , k = {
            class: "completed-order-item__data__item"
        }
          , b = {
            class: "completed-order__text-block"
        }
          , w = {
            class: "completed-order-item__data__item"
        }
          , h = {
            key: 0,
            class: "completed-order__text-block"
        }
          , f = {
            key: 1,
            class: "completed-order__text-block"
        }
          , y = {
            key: 2,
            class: "completed-order__text-block"
        }
          , S = {
            key: 3,
            class: "completed-order__text-block"
        }
          , D = {
            key: 4,
            class: "completed-order__text-block"
        }
          , U = {
            class: "completed-order__text-block__title"
        }
          , z = {
            key: 5,
            class: "completed-order__text-block"
        }
          , x = {
            class: "completed-order__text-block__title"
        }
          , F = {
            key: 0,
            class: "completed-order-item__data__item"
        }
          , R = {
            class: "completed-order__text-block"
        }
          , C = {
            class: "completed-order__text-block__title"
        }
          , Z = {
            key: 0,
            class: "promo"
        }
          , N = {
            class: "completed-order-item__data__item"
        }
          , q = {
            class: "completed-order__text-block"
        }
          , E = {
            class: "completed-order__text-block__title"
        }
          , P = {
            key: 0,
            class: "completed-order-item__info"
        }
          , T = {
            class: "completed-order__text-block max"
        }
          , H = {
            class: "completed-order__text-block__title"
        }
          , M = {
            class: "completed-order__text-block__description"
        }
          , Y = {
            class: "completed-order__text-block max"
        }
          , G = {
            class: "completed-order__text-block__title"
        }
          , I = {
            class: "completed-order__text-block__description"
        }
          , O = {
            class: "completed-order-item__footer"
        }
          , A = {
            key: 0,
            class: "phone-icon"
        }
          , L = {
            class: "completed-order-item__status__text"
        }
          , j = {
            class: "completed-order-item__status__time"
        }
          , W = "Проверьте настройки GAMEPASS!";
        var B = (0,
        r.aZ)({
            __name: "index",
            props: {
                order: {
                    type: Object,
                    required: !0
                }
            },
            setup(e) {
                const a = e
                  , t = (0,
                r.f3)("gamesList", [])
                  , o = (0,
                r.f3)("marketGamesList", [])
                  , B = (0,
                r.f3)("passesList", [])
                  , $ = (0,
                r.f3)("marketPassesList", [])
                  , {formattingPromoBonus: K} = (0,
                d.T)()
                  , J = (0,
                n.useTransferPurchaseStore)()
                  , V = (0,
                p.r)()
                  , X = (0,
                r.Fl)(( () => {
                    if (!a.order.date)
                        return "";
                    const {order: e} = a;
                    return (0,
                    m.pL)(e.finish_date || e.date)
                }
                ))
                  , Q = (0,
                r.Fl)(( () => a.order?.gift_code))
                  , ee = (0,
                r.Fl)(( () => "superPass" === a.order?.method))
                  , ae = (0,
                r.Fl)(( () => "market" === a.order?.method))
                  , te = (0,
                r.Fl)(( () => a.order?.login && !a.order?.telegramMethod))
                  , re = (0,
                r.Fl)(( () => a.order?.uid && !a.order?.server))
                  , _e = (0,
                r.Fl)(( () => a.order?.server))
                  , oe = (0,
                r.Fl)(( () => a.order?.telegramMethod))
                  , le = (0,
                r.Fl)(( () => {
                    switch (!0) {
                    case !se.value:
                        return u.$l;
                    case !(!_e.value && !re.value):
                        return u.ee;
                    default:
                        return u.Zq
                    }
                }
                ))
                  , ie = (0,
                r.Fl)(( () => {
                    if (me.value && (te.value || re.value || _e.value || oe.value))
                        return le.value;
                    const e = a.order?.game_id || te.value || re.value || _e.value || oe.value ? "Заказ выполнен успешно!" : "";
                    return e || a.order.description || "Код выдан"
                }
                ))
                  , se = (0,
                r.Fl)(( () => {
                    const e = a.order.rubble_amount || a.order.rub_amount;
                    return (0,
                    m.Yx)(e || 0)
                }
                ))
                  , de = (0,
                r.Fl)(( () => {
                    if (ee.value ? !t.value : !o.value)
                        return {
                            gameName: "",
                            passName: "",
                            marketGameName: ""
                        };
                    const e = t.value.find((e => e.id === a.order?.game_id))
                      , r = B.value.find((e => e.id === a.order?.superpass_id))
                      , _ = o.value.find((e => e.id === a.order?.game_id))
                      , l = $.value.find((e => e.id === a.order?.item_id));
                    return {
                        gameName: e?.name,
                        passName: r?.name,
                        marketGameName: _?.name,
                        marketItem: l?.name
                    }
                }
                ))
                  , me = (0,
                r.Fl)(( () => ["error", "system_error", "cancel", "failed"].includes(a.order?.status)))
                  , ne = (0,
                r.Fl)(( () => {
                    const e = a.order?.cancel_reason
                      , t = ie.value === W ? le.value : ie.value;
                    return me.value ? ee.value || ae.value ? (0,
                    c.T)(e) : t : ie.value
                }
                ))
                  , ce = (0,
                r.Fl)(( () => "robuxship" === a.order.status && J.isPresaleMode))
                  , ue = () => {
                    (0,
                    m.WB)()
                }
                  , pe = () => {
                    J.setGiftData(a.order?.gift_code, "code"),
                    J.setGiftData(a.order?.robux_amount, "robux"),
                    J.setGiftData(a.order?.instruction, "instruction"),
                    J.showModal("gift")
                }
                ;
                return (a, t) => ((0,
                r.wg)(),
                (0,
                r.iD)("div", g, [(0,
                r._)("div", {
                    class: (0,
                    l.C_)(["completed-order-item__data", {
                        isPass: ae.value || ee.value || te.value || re.value || _e.value || oe.value
                    }])
                }, [(0,
                r._)("div", k, [(0,
                r._)("div", b, [(0,
                r._)("div", {
                    class: "completed-order__text-block__copy",
                    onClick: t[0] || (t[0] = a => (0,
                    _.SU)(m.zp)(e.order._id.toString()))
                }, " Copy ID "), t[1] || (t[1] = (0,
                r._)("span", {
                    class: "completed-order__text-block__description"
                }, " ID заказа ", -1))])]), (0,
                r._)("div", w, [Q.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", h, t[2] || (t[2] = [(0,
                r._)("span", {
                    class: "completed-order__text-block__title"
                }, " Подарочная карта ", -1), (0,
                r._)("span", {
                    class: "completed-order__text-block__description"
                }, " Метод покупки ", -1)]))) : te.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", f, t[3] || (t[3] = [(0,
                r._)("span", {
                    class: "completed-order__text-block__title"
                }, " Пополнение Steam ", -1), (0,
                r._)("span", {
                    class: "completed-order__text-block__description"
                }, " Метод покупки ", -1)]))) : re.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", y, t[4] || (t[4] = [(0,
                r._)("span", {
                    class: "completed-order__text-block__title"
                }, " Пополнение Pubg-Mobile ", -1), (0,
                r._)("span", {
                    class: "completed-order__text-block__description"
                }, " Метод покупки ", -1)]))) : _e.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", S, t[5] || (t[5] = [(0,
                r._)("span", {
                    class: "completed-order__text-block__title"
                }, " Пополнение Genshin Impact ", -1), (0,
                r._)("span", {
                    class: "completed-order__text-block__description"
                }, " Метод покупки ", -1)]))) : oe.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", D, [(0,
                r._)("span", U, " Telegram " + (0,
                l.zw)(e.order.telegramMethod === (0,
                _.SU)(v.p4).STARS ? "звёзды" : "премиум"), 1), t[6] || (t[6] = (0,
                r._)("span", {
                    class: "completed-order__text-block__description"
                }, " Метод покупки ", -1))])) : ((0,
                r.wg)(),
                (0,
                r.iD)("div", z, [(0,
                r._)("span", x, (0,
                l.zw)(e.order.username), 1), t[7] || (t[7] = (0,
                r._)("span", {
                    class: "completed-order__text-block__description"
                }, " Игровой никнейм ", -1))]))]), ee.value || ae.value || te.value || re.value || _e.value || oe.value ? (0,
                r.kq)("", !0) : ((0,
                r.wg)(),
                (0,
                r.iD)("div", F, [(0,
                r._)("div", R, [(0,
                r._)("span", C, [(0,
                r._)("span", null, (0,
                l.zw)(e.order.promo ? e.order.promo.robux_amount_no_promo : e.order.robux_amount?.toLocaleString("en-US")), 1), e.order.promo ? ((0,
                r.wg)(),
                (0,
                r.iD)("span", Z, " +" + (0,
                l.zw)((0,
                _.SU)(K)(e.order.promo)), 1)) : (0,
                r.kq)("", !0), (0,
                r.Wm)((0,
                _.SU)(i.Z), {
                    class: "completed-order-item__robux",
                    type: "solid",
                    name: "robux"
                })]), t[8] || (t[8] = (0,
                r._)("span", {
                    class: "completed-order__text-block__description"
                }, "Получено", -1))])])), (0,
                r._)("div", N, [(0,
                r._)("div", q, [(0,
                r._)("span", E, [se.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 0
                }, [(0,
                r.Uk)((0,
                l.zw)(se.value) + " " + (0,
                l.zw)((0,
                _.SU)(m.jK)("rub")), 1)], 64)) : ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 1
                }, [(0,
                r.Uk)("Бесплатно")], 64))]), t[9] || (t[9] = (0,
                r._)("span", {
                    class: "completed-order__text-block__description"
                }, "Оплачено", -1))])])], 2), ee.value || ae.value || te.value || re.value || _e.value || oe.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", P, [(0,
                r._)("div", T, [(0,
                r._)("div", H, [te.value || re.value || _e.value || oe.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 0
                }, [(0,
                r.Uk)((0,
                l.zw)((0,
                _.SU)(m.Yx)(e.order.amount || 0)) + " " + (0,
                l.zw)(te.value ? "₽" : "") + " " + (0,
                l.zw)(re.value ? "UC" : "") + " " + (0,
                l.zw)(_e.value && (0,
                _.SU)(V).getFormattedGenshinProduct({
                    type: e.order.type
                }).info) + " ", 1), oe.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 0
                }, [(0,
                r.Uk)((0,
                l.zw)(e.order.telegramMethod === (0,
                _.SU)(v.p4).STARS ? "⭐️" : "месяца(-ев)"), 1)], 64)) : (0,
                r.kq)("", !0)], 64)) : ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 1
                }, [(0,
                r.Uk)((0,
                l.zw)(de.value.gameName || de.value.marketGameName), 1)], 64))]), (0,
                r._)("div", M, [_e.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 0
                }, [(0,
                r.Uk)("Предмет")], 64)) : ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 1
                }, [(0,
                r.Uk)((0,
                l.zw)(te.value || re.value || oe.value ? "Сумма" : "Название игры"), 1)], 64))])]), (0,
                r._)("div", Y, [(0,
                r._)("div", G, [te.value || oe.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 0
                }, [(0,
                r.Uk)((0,
                l.zw)(e.order.login?.replace("@", "")), 1)], 64)) : re.value || _e.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 1
                }, [(0,
                r.Uk)((0,
                l.zw)(e.order.uid), 1)], 64)) : ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 2
                }, [(0,
                r.Uk)((0,
                l.zw)(de.value.passName || de.value.marketItem), 1)], 64))]), (0,
                r._)("div", I, [te.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 0
                }, [(0,
                r.Uk)("Логин Steam")], 64)) : oe.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 1
                }, [(0,
                r.Uk)("Telegram Username")], 64)) : re.value || _e.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 2
                }, [(0,
                r.Uk)("Игровой UID")], 64)) : ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 3
                }, [(0,
                r.Uk)(" Название " + (0,
                l.zw)("market" === e.order.method ? "предмета" : "superPass" === e.order.method ? "пасса" : ""), 1)], 64))])])])) : (0,
                r.kq)("", !0), (0,
                r._)("div", O, [me.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", A, [(0,
                r.Wm)((0,
                _.SU)(i.Z), {
                    onClick: ue,
                    type: "solid",
                    name: "headset"
                })])) : (0,
                r.kq)("", !0), (0,
                r._)("div", {
                    class: (0,
                    l.C_)(["completed-order-item__status", e.order.status])
                }, [Q.value ? ((0,
                r.wg)(),
                (0,
                r.j4)((0,
                _.SU)(i.Z), {
                    key: 0,
                    type: "solid",
                    name: "checkedBox"
                })) : (0,
                r.kq)("", !0), "success" === e.order.status || "paid" === e.order.status ? ((0,
                r.wg)(),
                (0,
                r.j4)((0,
                _.SU)(i.Z), {
                    key: 1,
                    type: "solid",
                    name: "checkedBox"
                })) : (0,
                r.kq)("", !0), me.value ? ((0,
                r.wg)(),
                (0,
                r.j4)((0,
                _.SU)(i.Z), {
                    key: 2,
                    type: "solid",
                    name: "infoRect"
                })) : (0,
                r.kq)("", !0), (0,
                r._)("span", L, (0,
                l.zw)(ne.value), 1), Q.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("p", {
                    key: 3,
                    class: "completed-order-item__status__gift-badge",
                    onClick: pe
                }, " Посмотреть код ")) : (0,
                r.kq)("", !0), (0,
                r._)("span", j, (0,
                l.zw)(X.value), 1)], 2)]), ce.value ? ((0,
                r.wg)(),
                (0,
                r.j4)(s.Z, {
                    key: 1,
                    class: "completed-order-item__message",
                    text: "Время выдачи увеличено до 1 часа",
                    type: "warning",
                    revert: "",
                    mini: ""
                })) : (0,
                r.kq)("", !0)]))
            }
        });
        const $ = B;
        var K = $
          , J = K
          , V = t(90552);
        const X = {
            class: "completed-orders"
        }
          , Q = {
            class: "completed-orders__content"
        }
          , ee = {
            key: 0,
            class: "completed-orders__content__empty"
        }
          , ae = {
            key: 1,
            class: "completed-orders__content__orders"
        };
        var te = (0,
        r.aZ)({
            __name: "index",
            props: {
                method: {
                    type: String,
                    required: !0,
                    default: "logpass"
                }
            },
            setup(e) {
                const a = (0,
                r.f3)("completedOrders", []);
                return (e, t) => ((0,
                r.wg)(),
                (0,
                r.iD)("div", X, [t[4] || (t[4] = (0,
                r._)("div", {
                    class: "completed-orders__header"
                }, [(0,
                r._)("span", {
                    class: "completed-orders__header__title"
                }, "Завершенные заказы"), (0,
                r._)("span", {
                    class: "completed-orders__header__description"
                }, " История всех Ваших выполненных заказов ")], -1)), (0,
                r._)("div", Q, [0 === (0,
                _.SU)(a).length ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", ee, [t[2] || (t[2] = (0,
                r._)("img", {
                    src: o
                }, null, -1)), t[3] || (t[3] = (0,
                r._)("span", {
                    class: "completed-orders__content__empty__text"
                }, " Выполненных заказов еще нет... ", -1)), (0,
                r.Wm)((0,
                _.SU)(V.Z), {
                    class: "completed-orders__content__empty__button",
                    "right-icon": "arrowRight",
                    size: "l",
                    "mobile-size": "l",
                    onClick: t[0] || (t[0] = a => e.$router.push("/"))
                }, {
                    default: (0,
                    r.w5)(( () => t[1] || (t[1] = [(0,
                    r._)("span", null, "СДЕЛАТЬ ЗАКАЗ", -1)]))),
                    _: 1,
                    __: [1]
                })])) : (0,
                r.kq)("", !0), (0,
                _.SU)(a).length > 0 ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", ae, [((0,
                r.wg)(!0),
                (0,
                r.iD)(r.HY, null, (0,
                r.Ko)((0,
                _.SU)(a), (e => ((0,
                r.wg)(),
                (0,
                r.j4)((0,
                _.SU)(J), {
                    key: e._id,
                    order: e
                }, null, 8, ["order"])))), 128))])) : (0,
                r.kq)("", !0)])]))
            }
        });
        const re = te;
        var _e = re
          , oe = _e
    },
    49757: function(e, a, t) {
        t.d(a, {
            Z: function() {
                return He
            }
        });
        t(57658);
        var r = t(73396)
          , _ = t(44870)
          , o = t(14531)
          , l = t(87139)
          , i = t(13398)
          , s = t(3139)
          , d = t(59938)
          , m = t(87270)
          , n = t(3234)
          , c = t(15818)
          , u = t(27085)
          , p = t(26413)
          , v = t(74658)
          , g = t(76353)
          , k = t(78308)
          , b = t(96919);
        const w = {
            key: 0,
            class: "mobile-order-item__header"
        }
          , h = {
            class: "mobile-order-item__header__column"
        }
          , f = {
            class: "mobile-order-item__header__item"
        }
          , y = {
            class: "mobile-order-item__header__item"
        }
          , S = {
            class: "mobile-order-item__header__item__title"
        }
          , D = {
            class: "mobile-order-item__header__column"
        }
          , U = {
            key: 0,
            class: "mobile-order-item__header__item"
        }
          , z = {
            key: 1,
            class: "mobile-order-item__header__item"
        }
          , x = {
            class: "mobile-order-item__header__item__title"
        }
          , F = {
            class: "mobile-order-item__header__item"
        }
          , R = {
            class: "mobile-order-item__header__item__title"
        }
          , C = {
            key: 0,
            class: "promo"
        }
          , Z = {
            key: 1,
            class: "mobile-order-item__header pass"
        }
          , N = {
            class: "mobile-order-item__header__info"
        }
          , q = {
            class: "mobile-order-item__header__item"
        }
          , E = {
            class: "mobile-order-item__header__item"
        }
          , P = {
            class: "mobile-order-item__header__item__title"
        }
          , T = {
            class: "mobile-order-item__header__item__description"
        }
          , H = {
            class: "mobile-order-item__header__price"
        }
          , M = {
            class: "mobile-order-item__header__item"
        }
          , Y = {
            class: "mobile-order-item__header__item__title"
        }
          , G = {
            key: 2,
            class: "mobile-order-item__line"
        }
          , I = {
            class: "mobile-order-item__body"
        }
          , O = {
            class: "mobile-order-item__header__item"
        }
          , A = {
            class: "mobile-order-item__header__item__title"
        }
          , L = {
            class: "mobile-order-item__header__item"
        }
          , j = {
            class: "mobile-order-item__header__item__title"
        }
          , W = {
            class: "mobile-order-item__header__item__description"
        }
          , B = {
            key: 4,
            class: "mobile-order-item__header__info"
        }
          , $ = {
            class: "mobile-order-item__header__item min-w-50"
        }
          , K = {
            class: "mobile-order-item__header__item__title"
        }
          , J = {
            class: "mobile-order-item__header__item"
        }
          , V = {
            class: "mobile-order-item__header__item__title"
        }
          , X = {
            key: 5,
            class: "mobile-order-item__header__info"
        }
          , Q = {
            class: "mobile-order-item__header__item min-w-50"
        }
          , ee = {
            class: "mobile-order-item__header__item__title"
        }
          , ae = {
            class: "mobile-order-item__header__item"
        }
          , te = {
            class: "mobile-order-item__header__item__title"
        }
          , re = {
            key: 6,
            class: "mobile-order-item__header__info"
        }
          , _e = {
            class: "mobile-order-item__header__item min-w-50"
        }
          , oe = {
            class: "mobile-order-item__header__item__title"
        }
          , le = {
            class: "mobile-order-item__header__item"
        }
          , ie = {
            class: "mobile-order-item__header__item__title"
        }
          , se = {
            key: 7,
            class: "mobile-order-item__header__info"
        }
          , de = {
            class: "mobile-order-item__header__item min-w-50"
        }
          , me = {
            class: "mobile-order-item__header__item__title"
        }
          , ne = {
            class: "mobile-order-item__header__item"
        }
          , ce = {
            class: "mobile-order-item__header__item__title"
        }
          , ue = {
            class: "mobile-order-item__footer"
        }
          , pe = {
            class: "mobile-order-item__status-block__status-text"
        }
          , ve = {
            class: "mobile-order-item__status-block__time"
        }
          , ge = {
            key: 2,
            class: "mobile-order-item__status-block success"
        }
          , ke = {
            class: "mobile-order-item__status-block__time"
        }
          , be = {
            key: 4,
            class: "mobile-order-item__pending-block"
        }
          , we = {
            class: "mobile-order-item__pending-block__time"
        }
          , he = {
            class: "mobile-order-item__pending-block__link"
        }
          , fe = {
            key: 5,
            class: "mobile-order-item__pending-block"
        }
          , ye = {
            key: 0,
            class: "mobile-order-item__pending-block__time"
        }
          , Se = {
            key: 6,
            class: "mobile-order-item__pending-block center"
        };
        var De = (0,
        r.aZ)({
            __name: "index",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            setup(e) {
                const a = e
                  , t = (0,
                r.f3)("gamesList", [])
                  , o = (0,
                r.f3)("marketGamesList", [])
                  , De = (0,
                r.f3)("passesList", [])
                  , Ue = (0,
                r.f3)("marketPassesList", [])
                  , ze = (0,
                _.iH)("")
                  , {formattingPromoBonus: xe} = (0,
                c.T)()
                  , Fe = (0,
                u.useTransferPurchaseStore)()
                  , Re = (0,
                k.r)();
                function Ce() {
                    (0,
                    i.WB)()
                }
                function Ze() {
                    Fe.setGiftData(a.data?.gift_code, "code"),
                    Fe.setGiftData(a.data?.robux_amount, "robux"),
                    Fe.setGiftData(a.data?.instruction, "instruction"),
                    Fe.showModal("gift")
                }
                const Ne = (0,
                r.Fl)(( () => {
                    const e = Te.value ? a.data.rubble_amount : a.data.rub_amount;
                    return (0,
                    i.Yx)(e || 0)
                }
                ))
                  , qe = (0,
                r.Fl)(( () => {
                    if (!a.data.date)
                        return "";
                    const {data: e} = a;
                    return (0,
                    i.pL)(e.finish_date || e.date)
                }
                ))
                  , Ee = (0,
                r.Fl)(( () => {
                    const e = a.data?.status
                      , t = ["success", "error", "robuxship", "cancel", "failed", "system_error"];
                    return t.includes(e)
                }
                ))
                  , Pe = (0,
                r.Fl)(( () => a.data?.gift_code))
                  , Te = (0,
                r.Fl)(( () => "superPass" === a.data?.method))
                  , He = (0,
                r.Fl)(( () => "market" === a.data?.method))
                  , Me = (0,
                r.Fl)(( () => a.data?.login && !a.data?.telegramMethod))
                  , Ye = (0,
                r.Fl)(( () => a.data?.uid && !a.data?.server))
                  , Ge = (0,
                r.Fl)(( () => a.data?.server))
                  , Ie = (0,
                r.Fl)(( () => a.data?.telegramMethod))
                  , Oe = (0,
                r.Fl)(( () => "configured"in a.data))
                  , Ae = (0,
                r.Fl)(( () => ["error", "cancel", "failed"].includes(a.data?.status)))
                  , Le = (0,
                r.Fl)(( () => {
                    if (!t.value)
                        return {
                            gameName: "",
                            passName: "",
                            marketGameName: "",
                            marketItem: ""
                        };
                    const e = t.value.find((e => e.id === a.data?.game_id))
                      , r = De.value.find((e => e.id === a.data?.superpass_id))
                      , _ = o.value.find((e => e.id === a.data?.game_id))
                      , l = Ue.value.find((e => e.id === a.data?.item_id));
                    return {
                        inGame: e?.in_game || _?.in_game,
                        gameName: e?.name,
                        passName: r?.name,
                        marketGameName: _?.name,
                        marketItem: l?.name
                    }
                }
                ))
                  , je = (0,
                r.Fl)(( () => {
                    switch (!0) {
                    case !Ne.value:
                        return g.$l;
                    case Ge.value || Ye.value:
                        return g.ee;
                    default:
                        return g.Zq
                    }
                }
                ))
                  , We = (0,
                r.Fl)(( () => {
                    if (Ae.value && (Me.value || Ye.value || Ge.value || Ie.value))
                        return je.value;
                    if (Ae.value && Te.value || Ae.value && He.value)
                        return "Ошибка выполнения заказа";
                    const e = a.data?.game_id || Me.value || Ye.value || Ge.value || Ie.value ? "Заказ выполнен успешно!" : "";
                    return e || a.data.description || "Код выдан"
                }
                ))
                  , Be = (0,
                r.Fl)(( () => {
                    const e = a.data?.cancel_reason;
                    if (Ae.value) {
                        const a = Pe.value || Te.value || He.value ? We.value : je.value;
                        return Te.value || He.value ? (0,
                        v.T)(e) : a
                    }
                    return We.value
                }
                ))
                  , $e = (0,
                r.Fl)(( () => "Telegram " + (a.data?.telegramMethod === b.p4.STARS ? "звёзды" : "премиум")))
                  , Ke = (0,
                r.Fl)(( () => "robuxship" === a.data.status && Fe.isPresaleMode))
                  , Je = () => {
                    const e = new Date
                      , t = new Date(a.data.date).getTime() + 36e5;
                    if (e.getTime() >= t)
                        ze.value = "00:00";
                    else {
                        const a = t - e.getTime()
                          , r = Math.floor(a / 6e4 % 60)
                          , _ = Math.floor(a / 1e3 % 60)
                          , o = r.toString().padStart(2, "0")
                          , l = _.toString().padStart(2, "0");
                        ze.value = `${o}:${l}`
                    }
                }
                ;
                Je(),
                (0,
                p.Zv)(Je, 1e3);
                const Ve = (0,
                r.Fl)(( () => ze.value))
                  , Xe = () => {
                    Fe.setCurrentSmartOrder(a.data),
                    Fe.showModal("gamepassModal")
                }
                ;
                return (a, t) => ((0,
                r.wg)(),
                (0,
                r.iD)("div", {
                    class: (0,
                    l.C_)(["mobile-order-item", e.data.status])
                }, [Te.value || He.value || Me.value || Ye.value || Ge.value || Ie.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", Z, [(0,
                r._)("div", N, [(0,
                r._)("div", q, [(0,
                r._)("div", {
                    class: "mobile-order-item__header__item__copy",
                    onClick: t[1] || (t[1] = a => (0,
                    _.SU)(i.zp)(e.data?._id.toString()))
                }, " Copy ID "), t[8] || (t[8] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " № заказа ", -1))]), (0,
                r._)("div", E, [(0,
                r._)("span", P, (0,
                l.zw)(Me.value ? "Пополнение Steam" : Ye.value ? "Pubg-Mobile" : Ge.value ? "Genshin Impact" : Ie.value ? $e.value : e.data.username), 1), (0,
                r._)("span", T, (0,
                l.zw)(Me.value || Ye.value || Ge.value || Ie.value ? "Метод покупки" : "Игровой никнейм"), 1)])]), (0,
                r._)("div", H, [(0,
                r._)("div", M, [(0,
                r._)("span", Y, (0,
                l.zw)(Ne.value) + " " + (0,
                l.zw)((0,
                _.SU)(i.jK)("rub")), 1), t[9] || (t[9] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Оплачено ", -1))])])])) : ((0,
                r.wg)(),
                (0,
                r.iD)("div", w, [(0,
                r._)("div", h, [(0,
                r._)("div", f, [(0,
                r._)("div", {
                    class: "mobile-order-item__header__item__copy",
                    onClick: t[0] || (t[0] = a => (0,
                    _.SU)(i.zp)(e.data?._id.toString()))
                }, " Copy ID "), t[3] || (t[3] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " № заказа ", -1))]), (0,
                r._)("div", y, [(0,
                r._)("span", S, [Ne.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 0
                }, [(0,
                r.Uk)((0,
                l.zw)(Ne.value) + " " + (0,
                l.zw)((0,
                _.SU)(i.jK)("rub")), 1)], 64)) : ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 1
                }, [(0,
                r.Uk)("Бесплатно")], 64))]), t[4] || (t[4] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Оплаченная сумма ", -1))])]), (0,
                r._)("div", D, [Pe.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", U, t[5] || (t[5] = [(0,
                r._)("span", {
                    class: "mobile-order-item__header__item__title"
                }, " Подарочная карта ", -1), (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Метод покупки ", -1)]))) : ((0,
                r.wg)(),
                (0,
                r.iD)("div", z, [(0,
                r._)("span", x, (0,
                l.zw)(e.data.username), 1), t[6] || (t[6] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Игровой никнейм ", -1))])), (0,
                r._)("div", F, [(0,
                r._)("span", R, [(0,
                r._)("span", null, (0,
                l.zw)(e.data.promo ? e.data.promo.robux_amount_no_promo : e.data.robux_amount?.toLocaleString("en-US")), 1), e.data.promo ? ((0,
                r.wg)(),
                (0,
                r.iD)("span", C, " +" + (0,
                l.zw)((0,
                _.SU)(xe)(e.data.promo)), 1)) : (0,
                r.kq)("", !0), (0,
                r.Wm)((0,
                _.SU)(s.Z), {
                    type: "solid",
                    name: "robux",
                    class: "mobile-order-item__header__item__icon-robux"
                })]), t[7] || (t[7] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Сумма в робуксах ", -1))])])])), Me.value || Ye.value || Ge.value || Ie.value ? (0,
                r.kq)("", !0) : ((0,
                r.wg)(),
                (0,
                r.iD)("div", G)), Te.value || He.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 3
                }, [(0,
                r._)("div", I, [(0,
                r._)("div", O, [(0,
                r._)("span", A, (0,
                l.zw)(Le.value.gameName || Le.value.marketGameName), 1), t[10] || (t[10] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Название игры ", -1))]), (0,
                r._)("div", L, [(0,
                r._)("span", j, (0,
                l.zw)(Le.value.passName || Le.value.marketItem), 1), (0,
                r._)("span", W, " Название " + (0,
                l.zw)(Le.value.passName ? "пасса" : "") + " " + (0,
                l.zw)(Le.value.marketItem ? "предмета" : ""), 1)])]), t[11] || (t[11] = (0,
                r._)("div", {
                    class: "mobile-order-item__line"
                }, null, -1))], 64)) : (0,
                r.kq)("", !0), Me.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", B, [(0,
                r._)("div", $, [(0,
                r._)("div", K, (0,
                l.zw)(e.data.amount) + " ₽ ", 1), t[12] || (t[12] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Сумма ", -1))]), (0,
                r._)("div", J, [(0,
                r._)("span", V, (0,
                l.zw)(e.data.login), 1), t[13] || (t[13] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Логин Steam ", -1))])])) : (0,
                r.kq)("", !0), Ye.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", X, [(0,
                r._)("div", Q, [(0,
                r._)("div", ee, (0,
                l.zw)(e.data.amount) + " UC ", 1), t[14] || (t[14] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Сумма ", -1))]), (0,
                r._)("div", ae, [(0,
                r._)("span", te, (0,
                l.zw)(e.data.uid), 1), t[15] || (t[15] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Игровой UID ", -1))])])) : (0,
                r.kq)("", !0), Ge.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", re, [(0,
                r._)("div", _e, [(0,
                r._)("div", oe, (0,
                l.zw)(e.data.amount) + " " + (0,
                l.zw)((0,
                _.SU)(Re).getFormattedGenshinProduct({
                    type: e.data.type
                }).info), 1), t[16] || (t[16] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Предмет ", -1))]), (0,
                r._)("div", le, [(0,
                r._)("span", ie, (0,
                l.zw)(e.data.uid), 1), t[17] || (t[17] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Игровой UID ", -1))])])) : (0,
                r.kq)("", !0), Ie.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", se, [(0,
                r._)("div", de, [(0,
                r._)("div", me, (0,
                l.zw)(e.data.amount) + " " + (0,
                l.zw)(e.data.telegramMethod === (0,
                _.SU)(b.p4).STARS ? "⭐️" : "месяца(-ев)"), 1), t[18] || (t[18] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Сумма ", -1))]), (0,
                r._)("div", ne, [(0,
                r._)("span", ce, (0,
                l.zw)(e.data.login?.replace("@", "")), 1), t[19] || (t[19] = (0,
                r._)("span", {
                    class: "mobile-order-item__header__item__description"
                }, " Telegram Username ", -1))])])) : (0,
                r.kq)("", !0), (0,
                r._)("div", ue, [Ee.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", {
                    key: 0,
                    class: (0,
                    l.C_)(["mobile-order-item__status-block", e.data.status])
                }, [(0,
                r.Wm)((0,
                _.SU)(s.Z), {
                    name: "success" === e.data.status ? "checkedBox" : "infoRect",
                    type: "solid",
                    class: "mobile-order-item__status-block__icon"
                }, null, 8, ["name"]), (0,
                r._)("span", pe, (0,
                l.zw)(Be.value), 1), (0,
                r._)("span", ve, (0,
                l.zw)(qe.value), 1)], 2)) : (0,
                r.kq)("", !0), Ke.value ? ((0,
                r.wg)(),
                (0,
                r.j4)(m.Z, {
                    key: 1,
                    class: "mobile-order-item__message",
                    text: "Время выдачи увеличено до 1 часа",
                    type: "warning",
                    revert: "",
                    mini: ""
                })) : (0,
                r.kq)("", !0), Pe.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", ge, [(0,
                r.Wm)((0,
                _.SU)(s.Z), {
                    name: "checkedBox",
                    type: "solid",
                    class: "mobile-order-item__status-block__icon"
                }), t[20] || (t[20] = (0,
                r._)("span", {
                    class: "mobile-order-item__status-block__status-text"
                }, " Выдан код ", -1)), (0,
                r._)("p", {
                    class: "completed-order-item__status__gift-badge",
                    onClick: Ze
                }, " Смотреть "), (0,
                r._)("span", ke, (0,
                l.zw)(qe.value), 1)])) : (0,
                r.kq)("", !0), Ae.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", {
                    key: 3,
                    class: "mobile-order-item__support",
                    onClick: Ce
                }, [(0,
                r.Wm)((0,
                _.SU)(s.Z), {
                    name: "headset",
                    type: "solid",
                    class: "mobile-order-item__support__icon"
                }), t[21] || (t[21] = (0,
                r._)("span", null, "Обратиться в тех. поддержку", -1))])) : (0,
                r.kq)("", !0), "pending" === e.data.status ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", be, [(0,
                r._)("div", we, [(0,
                r.Wm)((0,
                _.SU)(s.Z), {
                    name: "timer",
                    type: "solid",
                    class: "mobile-order-item__pending-block__time__icon"
                }), (0,
                r._)("span", null, (0,
                l.zw)(qe.value), 1)]), (0,
                r._)("div", he, [t[22] || (t[22] = (0,
                r._)("span", null, "Отслеживать", -1)), (0,
                r.Wm)((0,
                _.SU)(s.Z), {
                    name: "login",
                    type: "solid",
                    class: "mobile-order-item__pending-block__link__icon"
                })])])) : (0,
                r.kq)("", !0), (Te.value || He.value) && [(0,
                _.SU)(n.H).PAID, (0,
                _.SU)(n.H).IN_GAME, (0,
                _.SU)(n.H).FRIEND].includes(e.data.status) ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", fe, [Le.value.inGame ? (0,
                r.kq)("", !0) : ((0,
                r.wg)(),
                (0,
                r.iD)("div", ye, [(0,
                r.Wm)((0,
                _.SU)(s.Z), {
                    name: "timer",
                    type: "solid",
                    class: "mobile-order-item__pending-block__time__icon"
                }), (0,
                r._)("span", null, (0,
                l.zw)(Ve.value), 1)])), Le.value.inGame ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 1
                }, ["in_game" === e.data.status ? ((0,
                r.wg)(),
                (0,
                r.j4)(d.Z, {
                    key: 0,
                    class: "uncompleted-order-data__pass-btn error",
                    "lef-icon": "infoRect",
                    "icon-type": "solid",
                    size: "m",
                    "mobile-size": "xs"
                }, {
                    default: (0,
                    r.w5)(( () => t[23] || (t[23] = [(0,
                    r.Uk)(" НЕОБХОДИМО ДЕЙСТВИЕ ")]))),
                    _: 1,
                    __: [23]
                })) : ((0,
                r.wg)(),
                (0,
                r.j4)(d.Z, {
                    key: 1,
                    class: "uncompleted-order-data__pass-btn warning",
                    "right-icon": "arrowRight",
                    size: "m",
                    "mobile-size": "xs"
                }, {
                    default: (0,
                    r.w5)(( () => t[24] || (t[24] = [(0,
                    r.Uk)(" ОТКРЫТЬ ОКНО ОЖИДАНИЯ ")]))),
                    _: 1,
                    __: [24]
                }))], 64)) : ((0,
                r.wg)(),
                (0,
                r.j4)(d.Z, {
                    key: 2,
                    class: "uncompleted-order-data__pass-btn",
                    "right-icon": "arrowRight",
                    size: "m",
                    "mobile-size": "xs",
                    onClick: t[2] || (t[2] = e => a.$router.push({
                        name: "purchase",
                        query: {
                            method: "superPass"
                        }
                    }))
                }, {
                    default: (0,
                    r.w5)(( () => t[25] || (t[25] = [(0,
                    r.Uk)(" Купить другой пасс ")]))),
                    _: 1,
                    __: [25]
                }))])) : (0,
                r.kq)("", !0), Oe.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", Se, [(0,
                r.Wm)(d.Z, {
                    class: "uncompleted-order-data__pass-btn warning",
                    "lef-icon": "infoRect",
                    "icon-type": "solid",
                    size: "m",
                    "mobile-size": "xs",
                    onClick: Xe
                }, {
                    default: (0,
                    r.w5)(( () => t[26] || (t[26] = [(0,
                    r.Uk)(" НЕОБХОДИМО ДЕЙСТВИЕ ")]))),
                    _: 1,
                    __: [26]
                })])) : (0,
                r.kq)("", !0)])], 2))
            }
        });
        const Ue = De;
        var ze = Ue
          , xe = ze
          , Fe = t(45034);
        const Re = {
            class: "mobile-orders"
        }
          , Ce = {
            class: "mobile-orders__header"
        }
          , Ze = {
            class: "mobile-orders__content"
        }
          , Ne = {
            key: 1,
            class: "mobile-orders__empty"
        }
          , qe = {
            class: "mobile-orders__footer"
        };
        var Ee = (0,
        r.aZ)({
            __name: "index",
            setup(e) {
                const a = [{
                    name: "current",
                    text: "Текущие заказы"
                }, {
                    name: "completed",
                    text: "Завершенные"
                }]
                  , t = (0,
                r.f3)("uncompletedOrders", [])
                  , l = (0,
                r.f3)("completedOrders", [])
                  , i = (0,
                _.iH)(t.value.length ? "current" : "completed")
                  , s = (0,
                r.Fl)(( () => "current" === i.value ? t.value : l.value));
                function m(e) {
                    i.value = e
                }
                return (e, t) => ((0,
                r.wg)(),
                (0,
                r.iD)("div", Re, [(0,
                r._)("div", Ce, [(0,
                r.Wm)((0,
                _.SU)(o.Z), {
                    items: a,
                    selected: i.value,
                    onChange: t[0] || (t[0] = e => m(e))
                }, null, 8, ["selected"])]), (0,
                r._)("div", Ze, [s.value.length ? ((0,
                r.wg)(!0),
                (0,
                r.iD)(r.HY, {
                    key: 0
                }, (0,
                r.Ko)(s.value, (e => ((0,
                r.wg)(),
                (0,
                r.j4)((0,
                _.SU)(xe), {
                    key: e?._id,
                    data: e
                }, null, 8, ["data"])))), 128)) : "current" === i.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", Ne, [(0,
                r.Wm)((0,
                _.SU)(Fe.Z), {
                    type: "uncomplitedOrders"
                }, {
                    text: (0,
                    r.w5)(( () => t[3] || (t[3] = [(0,
                    r.Uk)("У Вас нет в данный момент текущих заказов")]))),
                    footer: (0,
                    r.w5)(( () => [(0,
                    r.Wm)(d.Z, {
                        "mobile-size": "l",
                        "right-icon": "arrowRight",
                        onClick: t[1] || (t[1] = a => e.$router.push("/"))
                    }, {
                        default: (0,
                        r.w5)(( () => t[4] || (t[4] = [(0,
                        r.Uk)(" Сделать заказ ")]))),
                        _: 1,
                        __: [4]
                    })])),
                    _: 1
                })])) : (0,
                r.kq)("", !0)]), (0,
                r._)("div", qe, [(0,
                r.Wm)(d.Z, {
                    size: "l",
                    onClick: t[2] || (t[2] = a => e.$router.push("/"))
                }, {
                    default: (0,
                    r.w5)(( () => t[5] || (t[5] = [(0,
                    r.Uk)("Новый заказ")]))),
                    _: 1,
                    __: [5]
                })])]))
            }
        });
        const Pe = Ee;
        var Te = Pe
          , He = Te
    },
    92695: function(e, a, t) {
        t.d(a, {
            Z: function() {
                return le
            }
        });
        t(57658);
        var r = t(73396)
          , _ = t(44870)
          , o = t(87139)
          , l = t.p + "img/empty.98cecdb7.svg"
          , i = t(3139)
          , s = t(59938)
          , d = t(87270)
          , m = t(13398)
          , n = t(26413)
          , c = t(43025)
          , u = t(22483)
          , p = t(15818)
          , v = t(27085)
          , g = t(78308)
          , k = t(96919);
        const b = {
            class: "uncompleted-order-item"
        }
          , w = {
            class: "uncompleted-order-item__image"
        }
          , h = ["src"]
          , f = {
            class: "uncompleted-order-item__content"
        }
          , y = {
            class: "uncompleted-order-data__item"
        }
          , S = {
            class: "uncompleted-order-data__item"
        }
          , D = {
            class: "uncompleted-order-data__item__title"
        }
          , U = {
            class: "uncompleted-order-data__item__description"
        }
          , z = {
            key: 0,
            class: "uncompleted-order-data__item"
        }
          , x = {
            class: "uncompleted-order-data__item__title"
        }
          , F = {
            key: 1,
            class: "uncompleted-order-data__item"
        }
          , R = {
            class: "uncompleted-order-data__item__title"
        }
          , C = {
            key: 2,
            class: "uncompleted-order-data__item"
        }
          , Z = {
            class: "uncompleted-order-data__item__title"
        }
          , N = {
            key: 3,
            class: "uncompleted-order-data__item"
        }
          , q = {
            class: "uncompleted-order-data__item__title"
        }
          , E = {
            key: 0,
            class: "promo"
        }
          , P = {
            class: "uncompleted-order-data__item"
        }
          , T = {
            class: "uncompleted-order-data__item__title"
        }
          , H = {
            class: "uncompleted-order-data__item"
        }
          , M = {
            class: "uncompleted-order-data__item__title"
        }
          , Y = {
            class: "uncompleted-order-data__item__description"
        }
          , G = {
            key: 5,
            class: "uncompleted-order-data__item"
        }
          , I = {
            class: "uncompleted-order-data__item__title"
        }
          , O = {
            key: 6,
            class: "uncompleted-order-data__item"
        }
          , A = {
            class: "uncompleted-order-data__item__title"
        }
          , L = {
            key: 7,
            class: "uncompleted-order-data__item"
        }
          , j = {
            class: "uncompleted-order-data__item__title"
        }
          , W = {
            key: 8,
            class: "uncompleted-order-data__item"
        }
          , B = {
            class: "uncompleted-order-data__item__title"
        }
          , $ = {
            class: "uncompleted-order-data__item"
        }
          , K = {
            class: "uncompleted-order-data__item__title"
        }
          , J = {
            class: "uncompleted-order-data__tracking"
        };
        var V = (0,
        r.aZ)({
            __name: "index",
            props: {
                order: {
                    type: Object,
                    required: !0
                }
            },
            setup(e) {
                const a = e
                  , l = (0,
                r.f3)("gamesList", [])
                  , V = (0,
                r.f3)("passesList", [])
                  , X = (0,
                r.f3)("marketGamesList", [])
                  , Q = (0,
                r.f3)("marketPassesList", [])
                  , ee = (0,
                u.tv)()
                  , {formattingPromoBonus: ae} = (0,
                p.T)()
                  , te = (0,
                v.useTransferPurchaseStore)()
                  , re = (0,
                g.r)()
                  , _e = (0,
                _.iH)("")
                  , oe = (0,
                r.Fl)(( () => a.order?.game_id && a.order?.rubble_amount))
                  , le = (0,
                r.Fl)(( () => a.order?.game_id && a.order?.rub_amount))
                  , ie = (0,
                r.Fl)(( () => !oe.value && !le.value && !de.value && !me.value && !ne.value && !ce.value))
                  , se = (0,
                r.Fl)(( () => a.order.is_gamepass))
                  , de = (0,
                r.Fl)(( () => a.order?.login && !a.order?.telegramMethod))
                  , me = (0,
                r.Fl)(( () => a.order?.uid && !a.order?.server))
                  , ne = (0,
                r.Fl)(( () => a.order?.server))
                  , ce = (0,
                r.Fl)(( () => a.order?.telegramMethod))
                  , ue = (0,
                r.Fl)(( () => de.value || me.value || ne.value || ce.value))
                  , pe = (0,
                r.Fl)(( () => "configured"in a.order))
                  , ve = (0,
                r.Fl)(( () => {
                    const e = a.order.rubble_amount || a.order.rub_amount;
                    return (0,
                    m.Yx)(e || 0)
                }
                ))
                  , ge = (0,
                r.Fl)(( () => {
                    if (!l.value && !X.value)
                        return {
                            gameName: "",
                            passName: ""
                        };
                    const e = l.value.find((e => e.id === a.order?.game_id))
                      , t = V.value.find((e => e.id === a.order?.superpass_id))
                      , r = Q.value.find((e => e.id === a.order?.item_id))
                      , _ = X.value.find((e => e.id === a.order?.game_id));
                    return {
                        inGame: e?.in_game,
                        gameName: e?.name,
                        passName: t?.name,
                        marketGameName: _?.name,
                        marketPassName: r?.name
                    }
                }
                ))
                  , ke = (0,
                r.Fl)(( () => se.value && te.isPresaleMode))
                  , be = () => {
                    const e = new Date
                      , t = new Date(a.order.date).getTime()
                      , r = (se.value,
                    36e5)
                      , _ = ie.value ? r : 9e5
                      , o = oe.value && !a.order.in_game ? t + (a.order.all_count_orders_before || 1) * c.gx * 1e3 : t + _;
                    if (e.getTime() >= o)
                        _e.value = "00:00";
                    else {
                        const a = o - e.getTime()
                          , t = Math.floor(a / 36e5)
                          , r = Math.floor(a / 6e4 % 60)
                          , _ = Math.floor(a / 1e3 % 60)
                          , l = t.toString().padStart(2, "0")
                          , i = r.toString().padStart(2, "0")
                          , s = _.toString().padStart(2, "0");
                        _e.value = `${l}:${i}:${s}`
                    }
                }
                  , we = () => {
                    te.showModal("friends")
                }
                  , he = () => {
                    te.setCurrentSmartOrder(a.order),
                    te.showModal("gamepassModal")
                }
                ;
                be(),
                (0,
                n.Zv)(be, 1e3);
                const fe = (0,
                r.Fl)(( () => _e.value))
                  , ye = (0,
                r.Fl)(( () => a.order?.telegramMethod === k.p4.STARS ? t(19874) : t(11997)))
                  , Se = (0,
                r.Fl)(( () => de.value ? t(61474) : me.value ? t(27225) : ne.value ? t(57457) : ce.value ? ye.value : ie.value ? t(40424) : t(9435)))
                  , De = () => {
                    window.open("https://www.roblox.com/transactions", "_blank")
                }
                ;
                return (a, t) => ((0,
                r.wg)(),
                (0,
                r.iD)("div", b, [(0,
                r._)("div", w, [(0,
                r._)("img", {
                    src: Se.value,
                    alt: "cover",
                    class: (0,
                    o.C_)({
                        top: ne.value
                    })
                }, null, 10, h)]), (0,
                r._)("div", f, [(0,
                r._)("div", {
                    class: (0,
                    o.C_)(["uncompleted-order-data", {
                        isPass: oe.value || le.value,
                        isGames: ue.value
                    }])
                }, [(0,
                r._)("div", y, [(0,
                r._)("div", {
                    class: "uncompleted-order-data__item__copy",
                    onClick: t[0] || (t[0] = a => (0,
                    _.SU)(m.zp)(e.order._id.toString()))
                }, " Copy ID "), t[2] || (t[2] = (0,
                r._)("span", {
                    class: "uncompleted-order-data__item__description"
                }, " ID заказа ", -1))]), (0,
                r._)("div", S, [(0,
                r._)("span", D, (0,
                o.zw)(de.value ? "Пополнение Steam" : me.value ? "Pubg-Mobile" : ne.value ? "Genshin Impact" : ce.value ? "Покупка Telegram" : e.order.username), 1), (0,
                r._)("span", U, (0,
                o.zw)(ue.value ? "Метод покупки" : "Игровой никнейм"), 1)]), de.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", z, [(0,
                r._)("span", x, (0,
                o.zw)(e.order.login), 1), t[3] || (t[3] = (0,
                r._)("span", {
                    class: "uncompleted-order-data__item__description"
                }, " Логин Steam ", -1))])) : (0,
                r.kq)("", !0), me.value || ne.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", F, [(0,
                r._)("span", R, (0,
                o.zw)(e.order.uid), 1), t[4] || (t[4] = (0,
                r._)("span", {
                    class: "uncompleted-order-data__item__description"
                }, " Игровой UID ", -1))])) : (0,
                r.kq)("", !0), ce.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", C, [(0,
                r._)("span", Z, (0,
                o.zw)(e.order.login?.replace("@", "")), 1), t[5] || (t[5] = (0,
                r._)("span", {
                    class: "uncompleted-order-data__item__description"
                }, " Telegram Username ", -1))])) : (0,
                r.kq)("", !0), ie.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", N, [(0,
                r._)("span", q, [(0,
                r._)("span", null, (0,
                o.zw)(e.order.promo ? e.order.promo.robux_amount_no_promo : e.order.robux_amount?.toLocaleString("en-US")), 1), e.order.promo ? ((0,
                r.wg)(),
                (0,
                r.iD)("span", E, " +" + (0,
                o.zw)((0,
                _.SU)(ae)(e.order.promo)), 1)) : (0,
                r.kq)("", !0), (0,
                r.Wm)((0,
                _.SU)(i.Z), {
                    class: "completed-order-item__robux",
                    type: "solid",
                    name: "robux"
                })]), t[6] || (t[6] = (0,
                r._)("span", {
                    class: "uncompleted-order-data__item__description"
                }, " Сумма в робуксах ", -1))])) : oe.value || le.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 4
                }, [(0,
                r._)("div", P, [(0,
                r._)("span", T, (0,
                o.zw)(ge.value.gameName || ge.value.marketGameName), 1), t[7] || (t[7] = (0,
                r._)("span", {
                    class: "uncompleted-order-data__item__description"
                }, " Название игры ", -1))]), (0,
                r._)("div", H, [(0,
                r._)("span", M, (0,
                o.zw)(ge.value.passName || ge.value.marketPassName), 1), (0,
                r._)("span", Y, " Название " + (0,
                o.zw)(le.value ? "предмета" : "пасса"), 1)])], 64)) : me.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", G, [(0,
                r._)("span", I, (0,
                o.zw)(e.order.amount) + " UC ", 1), t[8] || (t[8] = (0,
                r._)("span", {
                    class: "uncompleted-order-data__item__description"
                }, "Сумма", -1))])) : ne.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", O, [(0,
                r._)("span", A, (0,
                o.zw)(e.order.amount) + " " + (0,
                o.zw)((0,
                _.SU)(re).getFormattedGenshinProduct({
                    type: e.order.type
                }).info), 1), t[9] || (t[9] = (0,
                r._)("span", {
                    class: "uncompleted-order-data__item__description"
                }, " Предмет ", -1))])) : ce.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", L, [(0,
                r._)("span", j, (0,
                o.zw)(e.order.amount) + " " + (0,
                o.zw)(e.order.telegramMethod === (0,
                _.SU)(k.p4).STARS ? "⭐️" : "месяца(-ев)"), 1), t[10] || (t[10] = (0,
                r._)("span", {
                    class: "uncompleted-order-data__item__description"
                }, " Предмет ", -1))])) : ((0,
                r.wg)(),
                (0,
                r.iD)("div", W, [(0,
                r._)("span", B, (0,
                o.zw)(e.order.amount) + " ₽ ", 1), t[11] || (t[11] = (0,
                r._)("span", {
                    class: "uncompleted-order-data__item__description"
                }, "Сумма", -1))])), (0,
                r._)("div", $, [(0,
                r._)("span", K, [ve.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 0
                }, [(0,
                r.Uk)((0,
                o.zw)(ve.value) + " " + (0,
                o.zw)((0,
                _.SU)(m.jK)("rub")), 1)], 64)) : ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 1
                }, [(0,
                r.Uk)("Бесплатно")], 64))]), t[12] || (t[12] = (0,
                r._)("span", {
                    class: "uncompleted-order-data__item__description"
                }, " Оплачено ", -1))])], 2), ke.value ? ((0,
                r.wg)(),
                (0,
                r.j4)(d.Z, {
                    key: 0,
                    class: "uncompleted-order-data__message",
                    text: "Время выдачи увеличено до 1 часа",
                    type: "warning",
                    revert: "",
                    mini: ""
                })) : (0,
                r.kq)("", !0), (0,
                r._)("div", J, [pe.value ? ((0,
                r.wg)(),
                (0,
                r.j4)(s.Z, {
                    key: 0,
                    class: "uncompleted-order-data__pass-btn warning",
                    "lef-icon": "infoRect",
                    "icon-type": "solid",
                    size: "m",
                    "mobile-size": "s",
                    onClick: he
                }, {
                    default: (0,
                    r.w5)(( () => t[13] || (t[13] = [(0,
                    r.Uk)(" НЕОБХОДИМО ДЕЙСТВИЕ ")]))),
                    _: 1,
                    __: [13]
                })) : ge.value.inGame ? (0,
                r.kq)("", !0) : ((0,
                r.wg)(),
                (0,
                r.iD)("div", {
                    key: 1,
                    class: (0,
                    o.C_)(["uncompleted-order-data__tracking__time", {
                        warning: ke.value
                    }])
                }, [(0,
                r.Wm)((0,
                _.SU)(i.Z), {
                    type: "solid",
                    name: "timer"
                }), (0,
                r._)("span", null, (0,
                o.zw)(fe.value), 1)], 2)), ie.value && !pe.value ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", {
                    key: 2,
                    onClick: De,
                    class: "uncompleted-order-data__tracking__btn"
                }, [t[14] || (t[14] = (0,
                r._)("span", null, "Отслеживать поступление робуксов на моем аккаунте", -1)), (0,
                r.Wm)((0,
                _.SU)(i.Z), {
                    type: "solid",
                    name: "login"
                })])) : de.value || me.value || ne.value || ce.value || pe.value ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 3
                }, [], 64)) : ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 4
                }, [ge.value.inGame ? ((0,
                r.wg)(),
                (0,
                r.iD)(r.HY, {
                    key: 0
                }, ["in_game" === e.order.status ? ((0,
                r.wg)(),
                (0,
                r.j4)(s.Z, {
                    key: 0,
                    class: "uncompleted-order-data__pass-btn error",
                    "lef-icon": "infoRect",
                    "icon-type": "solid",
                    size: "m",
                    "mobile-size": "s",
                    onClick: we
                }, {
                    default: (0,
                    r.w5)(( () => t[15] || (t[15] = [(0,
                    r.Uk)(" НЕОБХОДИМО ДЕЙСТВИЕ ")]))),
                    _: 1,
                    __: [15]
                })) : ((0,
                r.wg)(),
                (0,
                r.j4)(s.Z, {
                    key: 1,
                    class: "uncompleted-order-data__pass-btn warning",
                    "right-icon": "arrowRight",
                    size: "m",
                    "mobile-size": "s",
                    onClick: we
                }, {
                    default: (0,
                    r.w5)(( () => t[16] || (t[16] = [(0,
                    r.Uk)(" ОТКРЫТЬ ОКНО ОЖИДАНИЯ ")]))),
                    _: 1,
                    __: [16]
                }))], 64)) : ((0,
                r.wg)(),
                (0,
                r.j4)(s.Z, {
                    key: 1,
                    class: "uncompleted-order-data__pass-btn",
                    "right-icon": "arrowRight",
                    size: "m",
                    "mobile-size": "s",
                    onClick: t[1] || (t[1] = e => (0,
                    _.SU)(ee).push({
                        name: "purchase",
                        query: {
                            method: le.value ? "market" : "superPass"
                        }
                    }))
                }, {
                    default: (0,
                    r.w5)(( () => [(0,
                    r.Uk)(" Купить другой " + (0,
                    o.zw)(le.value ? "предмет" : "пасс"), 1)])),
                    _: 1
                }))], 64))])])]))
            }
        });
        const X = V;
        var Q = X
          , ee = Q
          , ae = t(90552);
        const te = {
            class: "uncompleted-orders"
        };
        var re = (0,
        r.aZ)({
            __name: "index",
            setup(e) {
                let a = (0,
                r.f3)("uncompletedOrders", []);
                const t = (0,
                r.f3)("completedOrders", []);
                return (e, i) => ((0,
                r.wg)(),
                (0,
                r.iD)("div", te, [0 === (0,
                _.SU)(a).length ? ((0,
                r.wg)(),
                (0,
                r.iD)("div", {
                    key: 0,
                    class: (0,
                    o.C_)(["uncompleted-orders__empty", {
                        full: !(0,
                        _.SU)(a).length && !(0,
                        _.SU)(t).length
                    }])
                }, [i[2] || (i[2] = (0,
                r._)("img", {
                    src: l,
                    alt: "empty"
                }, null, -1)), i[3] || (i[3] = (0,
                r._)("span", {
                    class: "uncompleted-orders__empty__text"
                }, " У Вас нет в данный момент текущих заказов ", -1)), (0,
                r.Wm)((0,
                _.SU)(ae.Z), {
                    class: "uncompleted-orders__empty__button",
                    "right-icon": "arrowRight",
                    size: "l",
                    "mobile-size": "l",
                    onClick: i[0] || (i[0] = a => e.$router.push("/"))
                }, {
                    default: (0,
                    r.w5)(( () => i[1] || (i[1] = [(0,
                    r._)("span", null, "СДЕЛАТЬ ЗАКАЗ", -1)]))),
                    _: 1,
                    __: [1]
                })], 2)) : (0,
                r.kq)("", !0), ((0,
                r.wg)(!0),
                (0,
                r.iD)(r.HY, null, (0,
                r.Ko)((0,
                _.SU)(a), (e => ((0,
                r.wg)(),
                (0,
                r.j4)((0,
                _.SU)(ee), {
                    key: e._id,
                    order: e
                }, null, 8, ["order"])))), 128))]))
            }
        });
        const _e = re;
        var oe = _e
          , le = oe
    },
    9435: function(e, a, t) {
        e.exports = t.p + "img/order-image-pass.d32396e8.svg"
    },
    40424: function(e, a, t) {
        e.exports = t.p + "img/order-image.28f15525.svg"
    },
    61474: function(e, a, t) {
        e.exports = t.p + "img/steam.af80281c.webp"
    }
}]);
