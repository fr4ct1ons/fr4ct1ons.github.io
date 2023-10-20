"use strict";
(self["webpackChunkgabriel_lucena_s_portfolio"] = self["webpackChunkgabriel_lucena_s_portfolio"] || []).push([[678],{

/***/ 1009:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: function() { return /* binding */ Head; },
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/globalLayout.js + 1 modules
var globalLayout = __webpack_require__(3885);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/index.browser-006c3456.js
var index_browser_006c3456 = __webpack_require__(8032);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(4160);
;// CONCATENATED MODULE: ./src/components/skillCard.js
function SkillCard(props){//const image = getImage(this.props.img);
const data=(0,gatsby_browser_entry/* useStaticQuery */.K2)("2007905456");let imageNode;imageNode=data.allImageSharp.edges.filter(edge=>edge.node.fixed.originalName==props.img);//console.log(imageNode[0].node.gatsbyImageData);
//const image = imageNode.node.gatsbyImageData;
//console.log(image);
var style={};if(props.size){style.width=props.size;}return/*#__PURE__*/react.createElement("div",{className:"SkillCard",style:style},/*#__PURE__*/react.createElement(index_browser_006c3456.G,{image:imageNode[0].node.gatsbyImageData}),/*#__PURE__*/react.createElement("div",{className:"imageOverlay"},/*#__PURE__*/react.createElement("p",null,props.name)));}
;// CONCATENATED MODULE: ./src/components/educationItem.js
function EducationItem(props){const data=(0,gatsby_browser_entry/* useStaticQuery */.K2)("2007905456");const imageNode=data.allImageSharp.edges.filter(edge=>edge.node.fixed.originalName==props.img);return/*#__PURE__*/react.createElement("div",{className:"EducationItem"},/*#__PURE__*/react.createElement(index_browser_006c3456.G,{image:imageNode[0].node.gatsbyImageData}),/*#__PURE__*/react.createElement("div",{className:"EducationText"},/*#__PURE__*/react.createElement("h1",null,props.title),/*#__PURE__*/react.createElement("h2",null,props.institution),/*#__PURE__*/react.createElement("h3",null,props.duration)));}//<GatsbyImage img={imageNode[0].node.gatsbyImageData}/>
/* harmony default export */ var educationItem = (EducationItem);
;// CONCATENATED MODULE: ./src/components/experienceItem.js
function ExperienceItem(props){const data=(0,gatsby_browser_entry/* useStaticQuery */.K2)("2007905456");const imageNode=data.allImageSharp.edges.filter(edge=>edge.node.fixed.originalName==props.img);return/*#__PURE__*/react.createElement("div",{className:"ExperienceItem"},/*#__PURE__*/react.createElement(index_browser_006c3456.G,{image:imageNode[0].node.gatsbyImageData}),/*#__PURE__*/react.createElement("div",{className:"ExperienceText"},/*#__PURE__*/react.createElement("h1",null,props.title),/*#__PURE__*/react.createElement("h2",null,props.project),/*#__PURE__*/react.createElement("h3",null,props.workplace," | ",props.period),/*#__PURE__*/react.createElement("p",null,props.desc)));}/* harmony default export */ var experienceItem = (ExperienceItem);
// EXTERNAL MODULE: ./node_modules/react-device-detect/dist/lib.js
var lib = __webpack_require__(5518);
;// CONCATENATED MODULE: ./src/pages/index.js
function IndexPage(){let socialsIcon={marginLeft:"16px",marginright:"16px",height:"58px",width:"58px"};let skillsList={borderBottom:"2px solid rgb(255, 80, 50)",display:"inline-block",//to use with grid
gridTemplateColumns:"auto auto auto  auto auto auto",gridGap:"20px",alignItems:"center",justifyItems:"center",textAlign:"center",width:"80%",overflowWrap:"break-word",marginBottom:"20px",paddingBottom:"20px"};if(lib/* isMobile */.tq){socialsIcon.height="32px";socialsIcon.width="32px";socialsIcon.marginLeft="8px";socialsIcon.marginright="8px";skillsList.width="100%";skillsList.gridGap="7px";skillsList.gridTemplateColumns="auto auto auto auto";}return/*#__PURE__*/react.createElement(globalLayout/* default */.Z,null,/*#__PURE__*/react.createElement("h1",null,"Welcome!"),/*#__PURE__*/react.createElement("p",null,"Hi there! My name is Gabriel Lucena and I'm a game developer from Brazil. Welcome to my portfolio!"),/*#__PURE__*/react.createElement("p",null,"I'm a tech artist with experience working on shaders, lighting and visual effects, though I enjoy both art and programming."),/*#__PURE__*/react.createElement("p",null,"I have a bachelor's degree in Information Technology and experience on Unity and Unreal, as well as its respective languages. I use mostly Blender and the Substance Suite for 3D models and Clip Studio Paint and Krita for 2D art."),/*#__PURE__*/react.createElement("p",null,"My most recent work experience was One Lonely Outpost, during which I worked mainly as a shader programmer and VFX artist. ",/*#__PURE__*/react.createElement("a",{href:"https://store.steampowered.com/app/1465550/One_Lonely_Outpost/"},"Out now on Steam!")),/*#__PURE__*/react.createElement("p",null,"Below is my 2022 demo reel."),/*#__PURE__*/react.createElement("iframe",{className:"ytEmbedVideo",src:"https://www.youtube-nocookie.com/embed/_AUPU_fNi3E",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:true}),/*#__PURE__*/react.createElement("p",null,"You can also follow me on social media below. I'd greatly appreciate it!"),/*#__PURE__*/react.createElement("div",{styl:true},/*#__PURE__*/react.createElement("a",{href:"https://twitter.com/fr4ct1ons"},/*#__PURE__*/react.createElement(index_browser_006c3456.S,{style:socialsIcon,src:"../images/socialMedia/twitter-icon.png",__imageData:__webpack_require__(2197)})),/*#__PURE__*/react.createElement("a",{href:"https://github.com/fr4ct1ons"},/*#__PURE__*/react.createElement(index_browser_006c3456.S,{style:socialsIcon,src:"../images/socialMedia/Github-icon.png",__imageData:__webpack_require__(1266)})),/*#__PURE__*/react.createElement("a",{href:"https://sketchfab.com/fr4ct1ons"},/*#__PURE__*/react.createElement(index_browser_006c3456.S,{style:socialsIcon,src:"../images/socialMedia/Sketchfab-icon.png",__imageData:__webpack_require__(7788)})),/*#__PURE__*/react.createElement("a",{href:"https://fr4ct1ons.itch.io/"},/*#__PURE__*/react.createElement(index_browser_006c3456.S,{style:socialsIcon,src:"../images/socialMedia/Itchio-icon.png",__imageData:__webpack_require__(5489)}))),/*#__PURE__*/react.createElement("h3",null,"Tools & Skills"),/*#__PURE__*/react.createElement("div",{style:skillsList},/*#__PURE__*/react.createElement(SkillCard,{name:"Unity",img:"Unity.png"}),/*#__PURE__*/react.createElement(SkillCard,{name:"Unreal",img:"Unreal.png"}),/*#__PURE__*/react.createElement(SkillCard,{name:"Shaders",img:"ShaderAlt.png"}),/*#__PURE__*/react.createElement(SkillCard,{name:"Blender",img:"Blender.png"}),/*#__PURE__*/react.createElement(SkillCard,{name:"C++",img:"cpp.png"}),/*#__PURE__*/react.createElement(SkillCard,{name:"C#",img:"cs.png"}),/*#__PURE__*/react.createElement(SkillCard,{name:"Substance 3D",img:"Substance.jpg"}),/*#__PURE__*/react.createElement(SkillCard,{name:"Clip Studio Paint",img:"ClipStudioPaint.png"}),/*#__PURE__*/react.createElement(SkillCard,{name:"Flutter & Dart",img:"Flutter.png"})),/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,"Visual Effects"),/*#__PURE__*/react.createElement("li",null,"Tool Development"),/*#__PURE__*/react.createElement("li",null,"3D modelling"),/*#__PURE__*/react.createElement("li",null,"Unity Multiplayer w/ Mirror"),/*#__PURE__*/react.createElement("li",null,"Lighting"),/*#__PURE__*/react.createElement("li",null,"Procedural mesh generation"),/*#__PURE__*/react.createElement("li",null,"Texturing & UV Mapping"),/*#__PURE__*/react.createElement("li",null,"UI Programming"),/*#__PURE__*/react.createElement("li",null,"Basic 3D animation & rigging"),/*#__PURE__*/react.createElement("li",null,"Design patterns & SOLID")),/*#__PURE__*/react.createElement("h3",null,"Education"),/*#__PURE__*/react.createElement(educationItem,{title:"BSc. Information Technology",institution:"Universidade Federal do Rio Grande do Norte",duration:"2018-2022",img:"UFRN.png"}),/*#__PURE__*/react.createElement("h3",null,"Experience"),/*#__PURE__*/react.createElement(experienceItem,{title:"Tech Artist",workplace:"Freedom Games",period:"2022-2023",project:"One Lonely Outpost",img:"FreedomGames.png",desc:"Worked as a tech artist for One Lonely Outpost, creating shaders and visual effects, as well as other functions related to setting up lighting, post processing, animations and character customization."}),/*#__PURE__*/react.createElement(experienceItem,{title:"VFX Artist",workplace:"Stegosoft Games",period:"2021",project:"Rise of the Third Power",img:"Stegosoft.png",desc:"Production of battle visual effects for attacks and buffs, as well as scenery props and environmental effects such as rain, falling leafs and birds, for Rise of the Third Power."}));}/* harmony default export */ var pages = (IndexPage);const Head=()=>/*#__PURE__*/react.createElement("title",null,"Home Page");

/***/ }),

/***/ 2197:
/***/ (function(module) {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#08f8f8","images":{"fallback":{"src":"/static/14aac2171c0b8068d7c6b8a80301ee32/b5658/twitter-icon.png","srcSet":"/static/14aac2171c0b8068d7c6b8a80301ee32/acb7c/twitter-icon.png 256w,\\n/static/14aac2171c0b8068d7c6b8a80301ee32/ccc41/twitter-icon.png 512w,\\n/static/14aac2171c0b8068d7c6b8a80301ee32/b5658/twitter-icon.png 1024w","sizes":"(min-width: 1024px) 1024px, 100vw"},"sources":[{"srcSet":"/static/14aac2171c0b8068d7c6b8a80301ee32/22bfc/twitter-icon.webp 256w,\\n/static/14aac2171c0b8068d7c6b8a80301ee32/d689f/twitter-icon.webp 512w,\\n/static/14aac2171c0b8068d7c6b8a80301ee32/67ded/twitter-icon.webp 1024w","type":"image/webp","sizes":"(min-width: 1024px) 1024px, 100vw"}]},"width":1024,"height":1024}');

/***/ }),

/***/ 5489:
/***/ (function(module) {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#08f8f8","images":{"fallback":{"src":"/static/05c3f297f462eb94f3c910048ec35127/ccc41/Itchio-icon.png","srcSet":"/static/05c3f297f462eb94f3c910048ec35127/bf8e1/Itchio-icon.png 128w,\\n/static/05c3f297f462eb94f3c910048ec35127/acb7c/Itchio-icon.png 256w,\\n/static/05c3f297f462eb94f3c910048ec35127/ccc41/Itchio-icon.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/05c3f297f462eb94f3c910048ec35127/6766a/Itchio-icon.webp 128w,\\n/static/05c3f297f462eb94f3c910048ec35127/22bfc/Itchio-icon.webp 256w,\\n/static/05c3f297f462eb94f3c910048ec35127/d689f/Itchio-icon.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ 7788:
/***/ (function(module) {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#08f8f8","images":{"fallback":{"src":"/static/ec6891418b38c6b8aa46eb9ed1e92e6c/b5658/Sketchfab-icon.png","srcSet":"/static/ec6891418b38c6b8aa46eb9ed1e92e6c/acb7c/Sketchfab-icon.png 256w,\\n/static/ec6891418b38c6b8aa46eb9ed1e92e6c/ccc41/Sketchfab-icon.png 512w,\\n/static/ec6891418b38c6b8aa46eb9ed1e92e6c/b5658/Sketchfab-icon.png 1024w","sizes":"(min-width: 1024px) 1024px, 100vw"},"sources":[{"srcSet":"/static/ec6891418b38c6b8aa46eb9ed1e92e6c/22bfc/Sketchfab-icon.webp 256w,\\n/static/ec6891418b38c6b8aa46eb9ed1e92e6c/d689f/Sketchfab-icon.webp 512w,\\n/static/ec6891418b38c6b8aa46eb9ed1e92e6c/67ded/Sketchfab-icon.webp 1024w","type":"image/webp","sizes":"(min-width: 1024px) 1024px, 100vw"}]},"width":1024,"height":1024}');

/***/ }),

/***/ 1266:
/***/ (function(module) {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/a41d7659ab6117bab8e7cb4c9444e487/ccc41/Github-icon.png","srcSet":"/static/a41d7659ab6117bab8e7cb4c9444e487/bf8e1/Github-icon.png 128w,\\n/static/a41d7659ab6117bab8e7cb4c9444e487/acb7c/Github-icon.png 256w,\\n/static/a41d7659ab6117bab8e7cb4c9444e487/ccc41/Github-icon.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/a41d7659ab6117bab8e7cb4c9444e487/6766a/Github-icon.webp 128w,\\n/static/a41d7659ab6117bab8e7cb4c9444e487/22bfc/Github-icon.webp 256w,\\n/static/a41d7659ab6117bab8e7cb4c9444e487/d689f/Github-icon.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-8282d7d5cc2f2f06c3ee.js.map