"use strict";
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 5957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/sub-components/services-card.tsx


const ServicesCard = ({ item  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: item.button_url ? item.button_url : "#contact",
        className: "box",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "image",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: item.files,
                    alt: ""
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "info",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: item.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: item.describe
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-info"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const services_card = (ServicesCard);

;// CONCATENATED MODULE: ./components/services.tsx



const Services = ({ data  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "services",
            id: "services",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "heading",
                    children: "Наши услуги "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "box-container",
                    children: data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(services_card, {
                            item: item
                        }, item.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const services = (Services);


/***/ })

};
;