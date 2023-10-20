"use strict";
(self["webpackChunkgabriel_lucena_s_portfolio"] = self["webpackChunkgabriel_lucena_s_portfolio"] || []).push([[466],{

/***/ 3755:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8032);
function GalleryEntry(props){let divStyle={};if(props.style){divStyle=props.style;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"GalleryEntry",style:divStyle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:props.url},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"GalleryPageDyna"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.G,{image:props.img}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"PageTitle"},props.title))));}/* harmony default export */ __webpack_exports__.Z = (GalleryEntry);

/***/ }),

/***/ 5156:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8032);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5518);
/* harmony import */ var _components_globalLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3885);
/* harmony import */ var _components_galleryEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3755);
function Games(data){let edges=data.data.allMarkdownRemark.edges;let entries=[];let varStyle={};//TODO: Move this to CSS
if(react_device_detect__WEBPACK_IMPORTED_MODULE_1__/* .isMobile */ .tq){varStyle={width:"100%",margin:"0%",marginBottom:"3%"};}for(let I=0;I<edges.length;I++){const element=edges[I].node.frontmatter;if(element.gallery=="games"){entries.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_galleryEntry__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{style:varStyle,url:element.slug,title:element.shortTitle,img:(0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.c)(element.Image01)}));}}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_globalLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{centerStyle:{width:"100%"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Games"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Games I have worked on"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,entries));}/* harmony default export */ __webpack_exports__["default"] = (Games);const getGames="130109580";

/***/ })

}]);
//# sourceMappingURL=component---src-pages-games-js-94cb5ec12802d6582b00.js.map