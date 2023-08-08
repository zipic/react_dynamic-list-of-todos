(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(2),d=c(8),i=c(1),o=(c(13),c(14),c(6)),r=c.n(o),j=c(0),b=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),t.map((function(e){return Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()(e.id!==(null===c||void 0===c?void 0:c.id)?"far fa-eye":"far fa-eye-slash")})})})})]},e.id)})}))]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var u=function(e){var t=e.setTypeSelect,c=e.query,a=e.setQuery;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",onChange:function(e){t(e.target.value)},children:Object(j.jsxs)("select",{"data-cy":"statusSelect",children:[Object(j.jsx)("option",{value:s.ALL,children:"All"}),Object(j.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(j.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){a(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),c.length>0&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function O(e){return fetch("https://mate-academy.github.io/react_dynamic-list-of-todos/api/"+e).then((function(e){return e.json()}))}var m=function(e){var t=e.todo,c=e.setSelectedTodo,s=Object(i.useState)(!1),a=Object(l.a)(s,2),n=a[0],d=a[1],o=Object(i.useState)(null),r=Object(l.a)(o,2),b=r[0],u=r[1];return Object(i.useEffect)((function(){var e;d(!0),(e=t.userId,O("users/".concat(e,".json"))).then((function(e){u(e),d(!1)}))}),[t.userId]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),n?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",b&&Object(j.jsx)("a",{href:"mailto:".concat(b.email),children:b.name})]})]})]})]})};var x=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(!1),o=Object(l.a)(n,2),r=o[0],x=o[1],f=Object(i.useState)(""),p=Object(l.a)(f,2),N=p[0],v=p[1],y=Object(i.useState)(s.ALL),g=Object(l.a)(y,2),T=g[0],S=g[1],C=Object(i.useState)(null),E=Object(l.a)(C,2),L=E[0],k=E[1];Object(i.useEffect)((function(){x(!0),O("todos.json").then((function(e){return e})).then((function(e){a(e),x(!1)}))}),[]);var w=function(e,t,c){var a=t.toLowerCase(),n=Object(d.a)(e);return c&&(n=n.filter((function(e){switch(c){case s.ACTIVE:return!e.completed;case s.COMPLETED:return e.completed;default:return!0}}))),t.trim()&&(n=n.filter((function(e){return e.title.toLowerCase().includes(a)}))),n}(c,N,T);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),r&&Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(u,{setTypeSelect:S,query:N,setQuery:v})}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{todos:w,selectedTodo:L,setSelectedTodo:k})})]})})}),L&&Object(j.jsx)(m,{todo:L,setSelectedTodo:k})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6825503d.chunk.js.map