(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,o){e.exports=o(53)},52:function(e,t,o){},53:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),c=o(13),l=o.n(c),r=(o(39),o(23)),i=o(24),s=o(31),u=o(25),d=o(32),m=o(54),f=o(9),g=o(12),v=function(e){var t=Object(n.useState)([]),o=Object(f.a)(t,2),a=o[0],c=o[1],l=Object(n.useState)("all"),r=Object(f.a)(l,2),i=r[0],s=r[1];return Object(n.useEffect)(function(){!function(e){null===localStorage.getItem("todos")&&localStorage.setItem("todos",JSON.stringify([]));var t=JSON.parse(localStorage.getItem("todos"));"function"===typeof e&&e(t)}(function(e){c(e)})},[]),{todos:a,status:i,deleteTodo:function(e){!function(e,t){var o=JSON.parse(localStorage.getItem("todos")).filter(function(t){return t.id!==e});localStorage.setItem("todos",JSON.stringify(o)),"function"===typeof t&&t(o)}(e,function(e){c(e),s("all")})},toggleTodo:function(e){!function(e,t){var o=JSON.parse(localStorage.getItem("todos"));o=o.map(function(t){return t.id===e?Object(g.a)({},t,{isComplete:!t.isComplete}):t}),localStorage.setItem("todos",JSON.stringify(o)),"function"===typeof t&&t(o)}(e,function(e){c(e),s("all")})},addTodo:function(e){!function(e,t){var o=JSON.parse(localStorage.getItem("todos")),n=[];0===o.length?(n=[Object(g.a)({},{id:1},{item:e.item,isComplete:!1})],localStorage.setItem("todos",JSON.stringify(n))):(n=o.concat([Object(g.a)({},{id:o[o.length-1].id+1},{item:e.item})]),localStorage.setItem("todos",JSON.stringify(n))),"function"===typeof t&&t(n)}(e,function(e){c(e),s("all")})},filterTodos:function(e){!function(e,t){var o=JSON.parse(localStorage.getItem("todos")),n=[];switch(e){case"active":n=o.filter(function(e){return!0!==e.isComplete});break;case"completed":n=o.filter(function(e){return!0===e.isComplete});break;default:n=o}"function"===typeof t&&t(n)}(e,function(t){c(t),s(e)})}}},p=function(e){var t=e.addTodo,o=function(e){var t=Object(n.useState)(""),o=Object(f.a)(t,2),a=o[0],c=o[1];return{value:a,reset:function(){c("")},onChange:function(e){c(e.target.value)}}}(),c=o.value,l=o.reset,r=o.onChange;return a.a.createElement(m.a,{onSubmit:function(e){e.preventDefault(),t({item:c}),l()}},a.a.createElement(m.a.Group,{controlId:"formBasic"},a.a.createElement(m.a.Control,{type:"text",placeholder:"Enter Todo",onChange:r,value:c})))},h=o(56),E=function(e){var t=e.todo,o=e.deleteTodo,n=e.toggleTodo,c=t.id,l=t.item,r=t.isComplete;return a.a.createElement(h.a.Item,null,a.a.createElement("div",{className:"todo-item"},a.a.createElement("span",{className:r?"complete":"",onClick:function(){return n(c)}},l),a.a.createElement("svg",{onClick:function(){return o(c)},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"}))))},O=o(55),S=function(){return a.a.createElement(O.a,{dismissible:!0,variant:"warning"},a.a.createElement(O.a.Heading,null,"Empty warning"),a.a.createElement("p",null,"there is no todo item existed."))},T=function(e){var t=e.todos,o=e.deleteTodo,n=e.toggleTodo;return t&&t.length>0?t.map(function(e,t){return a.a.createElement(E,{key:t,todo:e,deleteTodo:o,toggleTodo:n})}):a.a.createElement(S,null)},b=function(e){var t=e.todos,o=e.filterTodos,n=e.status;return a.a.createElement("div",{className:"action-footer"},a.a.createElement("span",null,t.length," items left"),a.a.createElement("div",{className:"action"},a.a.createElement("span",{className:"all"===n?"active":"",onClick:function(){return o("all")}},"All"),a.a.createElement("span",{className:"active"===n?"active":"",onClick:function(){return o("active")}},"Active"),a.a.createElement("span",{className:"completed"===n?"active":"",onClick:function(){return o("completed")}},"Completed")))},w=function(){var e=v(),t=e.addTodo,o=e.todos,n=e.deleteTodo,c=e.toggleTodo,l=e.filterTodos,r=e.status;return a.a.createElement("div",{className:"todo-container"},a.a.createElement("h1",null,"Todo List"),a.a.createElement(p,{addTodo:t}),a.a.createElement(T,{todos:o,deleteTodo:n,toggleTodo:c}),a.a.createElement(b,{todos:o,filterTodos:l,status:r}))},N=(o(52),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement(w,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.e36e08f6.chunk.js.map