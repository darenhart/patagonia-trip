webpackJsonp([5],{"0z3v":function(t,e,a){var r=a("okWP");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a("X/Wc").default)("82b7e2d0",r,!1,{})},Ma2J:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"LayoutDefault",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:a("NBDm").y}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-layout-header",[a("q-toolbar",{attrs:{color:"primary",inverted:"ios"===t.$q.theme}},[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),t._v(" "),a("q-toolbar-title",[t._v("\n        Viagem de bicicleta à Patagônia\n        "),a("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Daniel Werle Arenhart")])])],1)],1),t._v(" "),a("q-layout-drawer",{attrs:{"content-class":"mat"===t.$q.theme?"bg-grey-2":null},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[a("q-list-header"),t._v(" "),a("q-item",{staticClass:"home",attrs:{to:"/"}},[a("q-item-side",{attrs:{icon:"timeline"}}),t._v(" "),a("q-item-main",{attrs:{label:"Rota",sublabel:""}})],1),t._v(" "),a("q-item",{attrs:{to:"/gear"}},[a("q-item-side",{attrs:{icon:"settings"}}),t._v(" "),a("q-item-main",{attrs:{label:"Equipamento",sublabel:""}})],1),t._v(" "),a("q-item",{attrs:{to:"/gallery"}},[a("q-item-side",{attrs:{icon:"photo library"}}),t._v(" "),a("q-item-main",{attrs:{label:"Galeria",sublabel:""}})],1),t._v(" "),a("q-item",{attrs:{to:"/video"}},[a("q-item-side",{attrs:{icon:"play circle filled"}}),t._v(" "),a("q-item-main",{attrs:{label:"Vídeo",sublabel:""}})],1),t._v(" "),a("q-item",{attrs:{to:"/log"}},[a("q-item-side",{attrs:{icon:"list"}}),t._v(" "),a("q-item-main",{attrs:{label:"Log diário",sublabel:""}})],1)],1)],1),t._v(" "),a("q-page-container",[a("router-view")],1)],1)},l=[];i._withStripped=!0;var n=a("xRi5"),o=!1;var s=function(t){o||a("0z3v")},u=Object(n.a)(r,i,l,!1,s,null,null);u.options.__file="layouts/default.vue";e.default=u.exports},okWP:function(t,e,a){(t.exports=a("lcwS")(!1)).push([t.i,"\n.home.q-item.router-link-active {\n  background-color: transparent;\n}\n.home.q-item.router-link-active:hover {\n  background-color: rgba(189,189,189,0.4);\n}\n",""])}});