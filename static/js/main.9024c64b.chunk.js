(this["webpackJsonpreact-empty-app"]=this["webpackJsonpreact-empty-app"]||[]).push([[0],{58:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(45),r=c.n(n),i=(c(58),c(85)),l=c(82),j=c(24),d=c(2);var o=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)(i.a,{container:!0,children:[Object(d.jsxs)(i.a,{item:!0,xs:6,children:[Object(d.jsx)("h1",{className:"my-5 text-success fw-bold",children:"Welcome to Food Island"}),Object(d.jsxs)("p",{className:"lead text-muted",children:["Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",Object(d.jsx)("br",{})," Facilis beatae sunt nulla maxime excepturi fugit alias ",Object(d.jsx)("br",{})," blanditiis dicta ex ab eveniet unde, corrupti ",Object(d.jsx)("br",{})," distinctio ipsum ratione saepe minima numquam at!"]})]}),Object(d.jsx)(i.a,{item:!0,xs:6,children:Object(d.jsx)("img",{src:"https://designhooks.com/wp-content/uploads/2018/06/kitchen-scene-mockup1.jpg",className:"img-fluid rounded-3 mt-4 w-75",alt:""})})]}),Object(d.jsx)(j.b,{to:"/restaurent",children:Object(d.jsx)(l.a,{variant:"contained",className:"d-block mx-auto my-5 py-2",children:"Find Recipe"})})]})})},b=c(8);var m=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("nav",{className:"navbar navbar-expand-md navbar-light py-3",children:[Object(d.jsx)("a",{className:"navbar-brand d-flex align-items-center",href:"#",children:Object(d.jsx)("h3",{className:"ms-2 pt-1 text-secondary",children:"Food Island"})}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navmenu",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navmenu",children:Object(d.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{to:"/",className:"nav-link fw-bold",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{to:"/restaurent",className:"nav-link",children:"Restaurant"})})]})})]})})},h=c(18),u=c(83),x=c(86),O=c(87),p=c(88),v=c(89);var f=function(e){var t=e.meal,c=t.strMeal,a=t.strInstructions,s=t.strMealThumb,n=t.idMeal;return Object(d.jsx)("div",{className:"container mt-5",children:Object(d.jsxs)(u.a,{sx:{maxWidth:345},children:[Object(d.jsx)(x.a,{component:"img",height:"140",image:s,alt:"green iguana"}),Object(d.jsxs)(O.a,{children:[Object(d.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"div",children:c}),Object(d.jsx)(p.a,{variant:"body2",color:"text.secondary",children:a.slice(0,220)})]}),Object(d.jsx)(v.a,{children:Object(d.jsx)(j.b,{to:"/recipe/".concat(n),className:"d-block mx-auto fw-bold",children:Object(d.jsx)(l.a,{size:"medium",children:"Show Details"})})})]})})};var N=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(h.a)(n,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(c)).then((function(e){return e.json()})).then((function(e){return l(e.meals)}))}),[c]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"text-center text-primary fst-italic",children:"Find your favorite recipe here"}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)("input",{onChange:function(e){var t=e.target.value;s(t)},type:"text",className:"form-control w-25 d-block mx-auto my-5",placeholder:"Type Recipe Name"})}),Object(d.jsx)("div",{className:"row row-cols-3",children:null===i||void 0===i?void 0:i.map((function(e){return Object(d.jsx)(f,{meal:e},e.idMeal)}))})]})};var g=function(e){var t=Object(b.f)().rcid,c=Object(a.useState)({}),s=Object(h.a)(c,2),n=s[0],r=s[1];Object(a.useEffect)((function(){fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(t)).then((function(e){return e.json()})).then((function(e){return r(e.meals[0])}))}));var i=n.strMeal,l=n.strCategory,j=n.strArea,o=n.strInstructions,m=n.strMealThumb,u=n.strYoutube;return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"card my-5 p-3 mx-auto rounded-3 shadow",style:{width:"45rem"},children:[Object(d.jsx)("img",{src:m,className:"rounded-circle h-50 w-50 d-block mx-auto",alt:i}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title text-primary fw-bold display-5 my-3",children:i}),Object(d.jsxs)("h5",{className:"card-title fst-italic",children:["Category: ",l]}),Object(d.jsxs)("h5",{className:"card-title fst-italic",children:["Origin: ",j]}),Object(d.jsx)("h4",{className:"card-title mt-4 fw-bold",children:"Instruction:"}),Object(d.jsx)("p",{className:"card-text fst-italic lead",children:o}),Object(d.jsx)("a",{href:u,className:"btn btn-primary d-block w-25 mx-auto py-3 rounded-pill fst-italic",target:"_blank",children:"Watch on YouTube"})]})]})})};var y=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(m,{}),Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{exact:!0,path:"/",children:Object(d.jsx)(o,{})}),Object(d.jsx)(b.a,{path:"/restaurent",children:Object(d.jsx)(N,{})}),Object(d.jsx)(b.a,{path:"/recipe/:rcid",children:Object(d.jsx)(g,{})})]})]})})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.9024c64b.chunk.js.map