!function (e) {
    "use strict";
    e(window).on("load", (function () {
        e(".preloader").fadeOut()
    })), e(".preloader").length > 0 && e(".preloaderCls").each((function () {
        e(this).on("click", (function (t) {
            t.preventDefault(), e(".preloader").css("display", "none")
        }))
    })), e.fn.vsmobilemenu = function (t) {
        var a = e.extend({
            menuToggleBtn: ".as-menu-toggle",
            bodyToggleClass: "as-body-visible",
            subMenuClass: "as-submenu",
            subMenuParent: "as-item-has-children",
            subMenuParentToggle: "as-active",
            meanExpandClass: "as-mean-expand",
            appendElement: '<span class="as-mean-expand"></span>',
            subMenuToggleClass: "as-open",
            toggleSpeed: 400
        }, t);
        return this.each((function () {
            var t = e(this);

            function s() {
                t.toggleClass(a.bodyToggleClass);
                var s = "." + a.subMenuClass;
                e(s).each((function () {
                    e(this).hasClass(a.subMenuToggleClass) && (e(this).removeClass(a.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(a.subMenuParentToggle))
                }))
            }

            t.find("li").each((function () {
                var t = e(this).find("ul");
                t.addClass(a.subMenuClass), t.css("display", "none"), t.parent().addClass(a.subMenuParent), t.prev("a").append(a.appendElement), t.next("a").append(a.appendElement)
            }));
            var o = "." + a.meanExpandClass;
            e(o).each((function () {
                e(this).on("click", (function (t) {
                    var s;
                    t.preventDefault(), s = e(this).parent(), e(s).next("ul").length > 0 ? (e(s).parent().toggleClass(a.subMenuParentToggle), e(s).next("ul").slideToggle(a.toggleSpeed), e(s).next("ul").toggleClass(a.subMenuToggleClass)) : e(s).prev("ul").length > 0 && (e(s).parent().toggleClass(a.subMenuParentToggle), e(s).prev("ul").slideToggle(a.toggleSpeed), e(s).prev("ul").toggleClass(a.subMenuToggleClass))
                }))
            })), e(a.menuToggleBtn).each((function () {
                e(this).on("click", (function () {
                    s()
                }))
            })), t.on("click", (function (e) {
                e.stopPropagation(), s()
            })), t.find("div").on("click", (function (e) {
                e.stopPropagation()
            }))
        }))
    }, e(".as-menu-wrapper").vsmobilemenu();
    var t = "";
    e(window).on("scroll", (function () {
        var a, s, o, n, i;
        a = e(".sticky-active"), s = "active", o = "will-sticky", n = e(window).scrollTop(), i = a.css("height"), a.parent().css("min-height", i), e(window).scrollTop() > 800 ? (a.parent().addClass(o), n > t ? a.removeClass(s) : a.addClass(s)) : (a.parent().css("min-height", "").removeClass(o), a.removeClass(s)), t = n, e(this).scrollTop() > 500 ? e(".scrollToTop").addClass("show") : e(".scrollToTop").removeClass("show")
    })), e(".scrollToTop").each((function () {
        e(this).on("click", (function (a) {
            return a.preventDefault(), e("html, body").animate({scrollTop: 0}, t / 3), !1
        }))
    })), e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function () {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e("[data-mask-src]").length > 0 && e("[data-mask-src]").each((function () {
        var t = e(this).attr("data-mask-src");
        e(this).css({
            "mask-image": "url(" + t + ")",
            "-webkit-mask-image": "url(" + t + ")"
        }), e(this).removeAttr("data-mask-src")
    })), e("[data-bg-color]").length > 0 && e("[data-bg-color]").each((function () {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color")
    })), e(".as-carousel").each((function () {
        var t = e(this);

        function a(e) {
            return t.data(e)
        }

        var s = '<button type="button" class="slick-prev"><i class="' + a("prev-arrow") + '"></i></button>',
            o = '<button type="button" class="slick-next"><i class="' + a("next-arrow") + '"></i></button>';
        e("[data-slick-next]").each((function () {
            e(this).on("click", (function (t) {
                t.preventDefault(), e(e(this).data("slick-next")).slick("slickNext")
            }))
        })), e("[data-slick-prev]").each((function () {
            e(this).on("click", (function (t) {
                t.preventDefault(), e(e(this).data("slick-prev")).slick("slickPrev")
            }))
        })), 1 == a("arrows") && (t.closest(".arrow-wrap").length || t.closest(".container").parent().addClass("arrow-wrap")), t.slick({
            dots: !!a("dots"),
            fade: !!a("fade"),
            arrows: !!a("arrows"),
            speed: a("speed") ? a("speed") : 1e3,
            asNavFor: !!a("asnavfor") && a("asnavfor"),
            autoplay: 0 != a("autoplay"),
            infinite: 0 != a("infinite"),
            slidesToShow: a("slide-show") ? a("slide-show") : 1,
            adaptiveHeight: !!a("adaptive-height"),
            centerMode: !!a("center-mode"),
            autoplaySpeed: a("autoplay-speed") ? a("autoplay-speed") : 8e3,
            centerPadding: a("center-padding") ? a("center-padding") : "0",
            focusOnSelect: 0 != a("focuson-select"),
            pauseOnFocus: !!a("pauseon-focus"),
            pauseOnHover: !!a("pauseon-hover"),
            variableWidth: !!a("variable-width"),
            vertical: !!a("vertical"),
            verticalSwiping: !!a("vertical"),
            swipeToSlide: !!a("swipetoslide"),
            prevArrow: a("prev-arrow") ? s : '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
            nextArrow: a("next-arrow") ? o : '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
            rtl: "rtl" == e("html").attr("dir"),
            responsive: [{
                breakpoint: 1600,
                settings: {
                    arrows: !!a("xl-arrows"),
                    dots: !!a("xl-dots"),
                    slidesToShow: a("xl-slide-show") ? a("xl-slide-show") : a("slide-show"),
                    centerMode: !!a("xl-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1400,
                settings: {
                    arrows: !!a("ml-arrows"),
                    dots: !!a("ml-dots"),
                    slidesToShow: a("ml-slide-show") ? a("ml-slide-show") : a("slide-show"),
                    centerMode: !!a("ml-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1200,
                settings: {
                    arrows: !!a("lg-arrows"),
                    dots: !!a("lg-dots"),
                    slidesToShow: a("lg-slide-show") ? a("lg-slide-show") : a("slide-show"),
                    centerMode: !!a("lg-center-mode") && a("lg-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: !!a("md-arrows"),
                    dots: !!a("md-dots"),
                    slidesToShow: a("md-slide-show") ? a("md-slide-show") : 1,
                    centerMode: !!a("md-center-mode") && a("md-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 767,
                settings: {
                    arrows: !!a("sm-arrows"),
                    dots: !!a("sm-dots"),
                    slidesToShow: a("sm-slide-show") ? a("sm-slide-show") : 1,
                    centerMode: !!a("sm-center-mode") && a("sm-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: !!a("xs-arrows"),
                    dots: !!a("xs-dots"),
                    slidesToShow: a("xs-slide-show") ? a("xs-slide-show") : 1,
                    centerMode: !!a("xs-center-mode") && a("xs-center-mode"),
                    centerPadding: 0
                }
            }]
        })
    }));
    var a, s, o, n = ".ajax-contact", i = '[name="email"]', l = e(".form-messages");

    function r() {
        var t = e(n).serialize();
        (function () {
            var t, a = !0;

            function s(s) {
                s = s.split(",");
                for (var o = 0; o < s.length; o++) t = n + " " + s[o], e(t).val() ? (e(t).removeClass("is-invalid"), a = !0) : (e(t).addClass("is-invalid"), a = !1)
            }

            s('[name="name"],[name="email"],[name="subject"],[name="message"]'), e(i).val() && e(i).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(i).removeClass("is-invalid"), a = !0) : (e(i).addClass("is-invalid"), a = !1);
            return a
        })() && jQuery.ajax({url: e(n).attr("action"), data: t, type: "POST"}).done((function (t) {
            l.removeClass("error"), l.addClass("success"), l.text(t), e(n + ' input:not([type="submit"]),' + n + " textarea").val("")
        })).fail((function (e) {
            l.removeClass("success"), l.addClass("error"), "" !== e.responseText ? l.html(e.responseText) : l.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    function c(e) {
        return parseInt(e, 10)
    }

    e(n).on("submit", (function (e) {
        e.preventDefault(), r()
    })), a = ".sidemenu-wrapper", s = ".sideMenuCls", o = "show", e(".sideMenuToggler").on("click", (function (t) {
        t.preventDefault(), e(a).addClass(o)
    })), e(a).on("click", (function (t) {
        t.stopPropagation(), e(a).removeClass(o)
    })), e(a + " > div").on("click", (function (t) {
        t.stopPropagation(), e(a).addClass(o)
    })), e(s).on("click", (function (t) {
        t.preventDefault(), t.stopPropagation(), e(a).removeClass(o)
    })), e(".popup-image").magnificPopup({
        type: "image",
        gallery: {enabled: !0}
    }), e(".popup-video").magnificPopup({type: "iframe"}), e.fn.sectionPosition = function (t, a) {
        e(this).each((function () {
            var s, o, n, i, l, r = e(this);
            s = Math.floor(r.height() / 2), o = r.attr(t), n = r.attr(a), i = c(e(n).css("padding-top")), l = c(e(n).css("padding-bottom")), "top-half" === o ? (e(n).css("padding-bottom", l + s + "px"), r.css("margin-top", "-" + s + "px")) : "bottom-half" === o && (e(n).css("padding-top", i + s + "px"), r.css("margin-bottom", "-" + s + "px"))
        }))
    };
    e("[data-sec-pos]").length && e("[data-sec-pos]").imagesLoaded((function () {
        e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for")
    })), e(".filter-active").imagesLoaded((function () {
        var t = ".filter-active";
        if (e(t).length > 0) {
            var a = e(t).isotope({itemSelector: ".filter-item", filter: "*", masonry: {columnWidth: ".filter-item"}});
            e(".filter-menu-active").on("click", "button", (function (t) {
                t.preventDefault();
                var s = e(this), o = e(this).attr("data-filter");
                a.isotope({filter: o}), s.addClass("active").siblings(".active").removeClass("active")
            })), e('[data-bs-toggle="tab"]').on("shown.bs.tab", (function (s) {
                var o = e(this).attr("data-bs-target");
                if (e(o).find(t).length) {
                    var n = e(".filter-menu-active").find(".active").attr("data-filter");
                    a.isotope({filter: n})
                }
            }))
        }
    })), e("#ship-to-different-address-checkbox").on("change", (function () {
        e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
    })), e(".woocommerce-form-login-toggle a").on("click", (function (t) {
        t.preventDefault(), e(".woocommerce-form-login").slideToggle()
    })), e(".woocommerce-form-coupon-toggle a").on("click", (function (t) {
        t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
    })), e(".shipping-calculator-button").on("click", (function (t) {
        t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
    })), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function () {
        e(this).on("change", (function () {
            e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
        }))
    })), e(".rating-select .stars a").each((function () {
        e(this).on("click", (function (t) {
            t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
        }))
    })), e.fn.vsTab = function (t) {
        var a = e.extend({sliderTab: !1, tabButton: "button", indicator: !1}, t);
        e(this).each((function () {
            var t = e(this), s = t.find(a.tabButton);
            if (s.on("click", (function (t) {
                t.preventDefault();
                var s = e(this);
                s.addClass("active").siblings().removeClass("active"), a.sliderTab && e(o).slick("slickGoTo", s.data("slide-go-to"))
            })), a.sliderTab) {
                var o = t.data("asnavfor"), n = 0;
                s.each((function () {
                    var s = e(this);
                    s.attr("data-slide-go-to", n), n++, s.hasClass("active") && e(o).slick("slickGoTo", s.data("slide-go-to")), e(o).on("beforeChange", (function (e, s, o, n) {
                        t.find(a.tabButton + '[data-slide-go-to="' + n + '"]').addClass("active").siblings().removeClass("active")
                    }))
                }))
            }
        }))
    }, e(".as-custom-dots").length && e(".as-custom-dots").vsTab({
        sliderTab: !0,
        tabButton: ".dot-btn"
    }), e.fn.countdown = function () {
        e(this).each((function () {
            var t = e(this), a = new Date(t.data("offer-date")).getTime();

            function s(e) {
                return t.find(e)
            }

            var o = setInterval((function () {
                var e = (new Date).getTime(), n = a - e, i = Math.floor(n / 864e5), l = Math.floor(n % 864e5 / 36e5),
                    r = Math.floor(n % 36e5 / 6e4), c = Math.floor(n % 6e4 / 1e3);
                i < 10 && (i = "0" + i), l < 10 && (l = "0" + l), r < 10 && (r = "0" + r), c < 10 && (c = "0" + c), n < 0 ? (clearInterval(o), t.addClass("expired"), t.find(".message").css("display", "block")) : (s(".day").html(i), s(".hour").html(l), s(".minute").html(r), s(".seconds").html(c))
            }), 1e3)
        }))
    }, e(".offer-counter").length && e(".offer-counter").countdown(), e(".quantity-plus").each((function () {
        e(this).on("click", (function (t) {
            t.preventDefault();
            var a = e(this).siblings(".qty-input"), s = parseInt(a.val());
            isNaN(s) || a.val(s + 1)
        }))
    })), e(".quantity-minus").each((function () {
        e(this).on("click", (function (t) {
            t.preventDefault();
            var a = e(this).siblings(".qty-input"), s = parseInt(a.val());
            !isNaN(s) && s > 1 && a.val(s - 1)
        }))
    })), e(".lesson-box__body.collapsed").css("display", "none"), e(".lesson-box__toggler").each((function () {
        e(this).on("click", (function () {
            e(this).toggleClass("active").next(".lesson-box__body").toggleClass("collapsed").slideToggle(), e(this).parent().toggleClass("show")
        }))
    })), e("[data-ani-duration]").each((function () {
        var t = e(this).data("ani-duration");
        e(this).css("animation-duration", t)
    })), e("[data-ani-delay]").each((function () {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t)
    })), e("[data-ani]").each((function () {
        var t = e(this).data("ani");
        e(this).addClass(t), e(".slick-current [data-ani]").addClass("vs-animated")
    })), e(".as-carousel").on("afterChange", (function (t, a, s, o) {
        e(a.$slides).find("[data-ani]").removeClass("vs-animated"), e(a.$slides[s]).find("[data-ani]").addClass("vs-animated")
    })), e('[data-bs-toggle="tab"]').on("shown.bs.tab", (function (t) {
        var a = e(t.target).attr("data-bs-target"), s = e(a).find(".as-carousel");
        s && s.slick("setPosition")
    })), e.fn.shapeMockup = function () {
        e(this).each((function () {
            var t = e(this), a = t.data("top"), s = t.data("right"), o = t.data("bottom"), n = t.data("left");
            t.css({
                top: a,
                right: s,
                bottom: o,
                left: n
            }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
        }))
    }, e(".shape-mockup") && e(".shape-mockup").shapeMockup(), e(".counter-number").counterUp({
        delay: 10,
        time: 1e3
    }), window.addEventListener("contextmenu", (function (e) {
        e.preventDefault()
    }), !1), document.onkeydown = function (e) {
        return 123 != event.keyCode && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && ((!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && void 0))))
    }
}(jQuery);