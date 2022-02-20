"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 99:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
;// CONCATENATED MODULE: ./components/popup/popup.tsx



const Popup = ({ isOpen , closeModal , children  })=>{
    if (!isOpen) return null;
    return(/*#__PURE__*/ (0,external_react_dom_namespaceObject.createPortal)(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "contact contact-modal",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "modal-close",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-times",
                        onClick: ()=>closeModal(!isOpen)
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: children
                })
            ]
        })
    }), document.querySelector("body")));
};

// EXTERNAL MODULE: ./components/contact-form.tsx
var contact_form = __webpack_require__(7907);
// EXTERNAL MODULE: ./utils/fetching.ts + 1 modules
var fetching = __webpack_require__(7074);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "react-yandex-metrika"
const external_react_yandex_metrika_namespaceObject = require("react-yandex-metrika");
;// CONCATENATED MODULE: ./pages/_app.tsx









const isButton = (position)=>position == 'bottom' ? 'btn' : ''
;
const PagesLink = ({ pages , prefix ='' , position ='top'  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            " ",
            pages.map((item)=>{
                if (item.show) return;
                return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: `${prefix}/page/${item.id}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: isButton(position),
                        children: item.page_title
                    })
                }, item.id));
            })
        ]
    }));
};
function Layout({ Component , pageProps  }) {
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(false);
    const { 0: modal , 1: setModal  } = (0,external_react_.useState)(false);
    const { 0: pages , 1: setPages  } = (0,external_react_.useState)([]);
    const router = (0,router_.useRouter)();
    const isTech = (path)=>path.split("/")[1] == 'tech'
    ;
    const showNavBar = ()=>setActive(!active)
    ;
    const HrefConstructor = (path)=>isTech(router.pathname) ? `#${path}` : `/${path}`
    ;
    const moveBetweenSection = (position = 'top')=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: !isTech(router.pathname) ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: '/tech',
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: isButton(position),
                    children: "Разработка Програмного обеспечения"
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: '/',
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: isButton(position),
                    children: "Строительстов"
                })
            })
        }));
    };
    (0,external_react_.useEffect)(()=>{
        if (!isTech(router.pathname)) {
            (0,fetching/* fetchData */.r)('main', 'page/all/').then((response)=>setPages(response)
            );
        } else {
            setPages([]);
        }
    }, [
        router.pathname
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_yandex_metrika_namespaceObject.YMInitializer, {
                        accounts: [
                            87581961
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/css/lightgallery.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "./logo.png",
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: `navbar ${active && 'active'}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: HrefConstructor('products'),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Продукты"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: HrefConstructor('services'),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Услуги"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: HrefConstructor('works'),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Работы"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(PagesLink, {
                                pages: pages
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "icons",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "menu-btn",
                                className: "fas fa-bars",
                                onClick: showNavBar
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "btn",
                                onClick: ()=>setModal(!modal)
                                ,
                                children: "Связаться"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Popup, {
                        isOpen: modal,
                        closeModal: setModal,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(contact_form/* default */.Z, {
                            path: isTech(router.pathname) ? 'tech' : 'main'
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "footer",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "links",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: HrefConstructor('products'),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "btn",
                                    children: "Продукты"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: HrefConstructor('services'),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "btn",
                                    children: "Услуги"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: HrefConstructor('works'),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "btn",
                                    children: "Работы"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(PagesLink, {
                                pages: pages,
                                position: 'bottom'
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "credit",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "./bottom.png",
                                    alt: "",
                                    style: {
                                        width: 300
                                    }
                                })
                            })
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const _app = (Layout);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,907], () => (__webpack_exec__(99)));
module.exports = __webpack_exports__;

})();