"use strict";
exports.id = 258;
exports.ids = [258];
exports.modules = {

/***/ 1258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ projects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/sub-components/projects-card.tsx



const ProjectsCard = ({ item  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: `/products/${item.id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: "box",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: item.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: item.sub_title
                })
            ]
        })
    }));
};
/* harmony default export */ const projects_card = (ProjectsCard);

;// CONCATENATED MODULE: ./components/projects.tsx



const Projects = ({ data  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "products",
            id: "products",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "heading",
                    children: "Каталог продуктов"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "box-container",
                    children: data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(projects_card, {
                            item: item
                        }, item.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const projects = (Projects);


/***/ })

};
;