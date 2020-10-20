(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),s=(a(13),a(2)),r=(a(14),a(7)),i=function(e){var t=e.input,a=e.setInput,o=e.todos,c=e.setTodos,l=e.setStatus;return n.a.createElement("form",null,n.a.createElement("input",{className:"todo-input",type:"text",value:t,onChange:function(e){a(e.target.value)}}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),t?(c([].concat(Object(r.a)(o),[{id:1e3*Math.random(),title:t,createdAt:(new Date).toLocaleString(),done:!1}])),a("")):alert("[ERROR] EMPTY TEXT")},className:"todo-button",type:"submit"},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{onChange:function(e){return l(e.target.value)},name:"todos",className:"filter-todo"},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},u=a(4),d=function(e){var t=e.todo,a=e.todos,o=e.setTodos;return n.a.createElement("div",{className:"todo",title:"Created at: ".concat(t.createdAt)},n.a.createElement("li",{className:"todo-item ".concat(t.done&&"completed")},t.title),n.a.createElement("button",{onClick:function(){o(a.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{done:!e.done}):e})))},className:"complete-btn"},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{onClick:function(){o(a.filter((function(e){return e.id!==t.id})))},className:"trash-btn"},n.a.createElement("i",{className:"fas fa-trash"})))},m=function(e){var t=e.todos,a=e.setTodos,o=e.filteredTodos;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},o.length>0&&o.map((function(e,o){return n.a.createElement(d,Object.assign({key:e.id},{todo:e,todos:t,setTodos:a}))}))))},f=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)([]),r=Object(s.a)(l,2),u=r[0],d=r[1],f=Object(o.useState)("all"),p=Object(s.a)(f,2),E=p[0],b=p[1],v=Object(o.useState)([]),g=Object(s.a)(v,2),h=g[0],O=g[1];Object(o.useEffect)((function(){null===localStorage.getItem("todos")?localStorage.setItem("todos",JSON.stringify([])):d(JSON.parse(localStorage.getItem("todos")))}),[]);var N=Object(o.useCallback)((function(){switch(E){case"completed":O(u.filter((function(e){return e.done})));break;case"uncompleted":O(u.filter((function(e){return!e.done})));break;default:O(u)}localStorage.setItem("todos",JSON.stringify(u))}),[E,u]);return Object(o.useEffect)((function(){N()}),[N]),n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"Todo App")),n.a.createElement(i,{input:a,setInput:c,todos:u,setTodos:d,setStatus:b}),n.a.createElement(m,{todos:u,setTodos:d,filteredTodos:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.01f16aab.chunk.js.map