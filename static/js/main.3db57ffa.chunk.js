(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{11:function(t,e,o){t.exports={TodoItem:"TodoItem_TodoItem__3RALd"}},12:function(t,e,o){t.exports={TodoItems:"Todos_TodoItems__3fU17"}},2:function(t,e,o){t.exports={Wrap:"EnterData_Wrap__3xGY8",Wrapper:"EnterData_Wrapper__3lHNn"}},21:function(t,e,o){},22:function(t,e,o){"use strict";o.r(e);var s=o(0),r=o(1),a=o(7),n=o.n(a),c=o(5),i=o.n(c),l=o(3),d=o(8),j=o(9),f=o(10),u=o(14),b=o(13),x=o(6),h=o.n(x),O=function(t){return Object(s.jsx)("div",{className:h.a.Nav,children:Object(s.jsxs)("ul",{className:h.a.ul,children:[Object(s.jsx)("li",{children:"Task Manager"}),Object(s.jsxs)("li",{children:["Todos ",Object(s.jsx)("span",{children:t.todosLength})]})]})})},T=o(2),p=o.n(T),v=function(t){return Object(s.jsx)("div",{className:p.a.Wrap,children:Object(s.jsxs)("form",{onSubmit:t.click,children:[Object(s.jsxs)("div",{className:p.a.Wrapper,children:[Object(s.jsx)("label",{children:"ENTER TASK"}),Object(s.jsx)("input",{type:"text",onChange:t.changed,value:t.text,placeholder:"Enter your tasks here"})]}),Object(s.jsx)("button",{children:"SUBMIT"})]})})},m=o(11),g=o.n(m),k=function(t){return Object(s.jsxs)("div",{className:g.a.TodoItem,children:[Object(s.jsx)("p",{children:t.todo}),Object(s.jsx)("i",{className:"fa fa-remove",onClick:t.remove})]})},y=o(12),N=o.n(y),_=function(t){return Object(s.jsx)("div",{className:p.a.Wrap,children:Object(s.jsx)("form",{children:Object(s.jsxs)("div",{className:p.a.Wrapper,children:[Object(s.jsx)("label",{style:{fontSize:"1.2rem",color:"teal"},children:"filter tasks"}),Object(s.jsx)("input",{type:"text",onChange:t.filter,value:t.filterText,disabled:!t.canFilter,placeholder:t.canFilter?"filter by tasks":"No tasks to filter",style:{backgroundColor:"white"}})]})})})},F=function(t){return console.log(t.filterTodos),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(v,Object(l.a)({},t)),Object(s.jsx)(_,{filter:t.filter,filterText:t.filterText,canFilter:t.canFilter}),Object(s.jsx)("div",{className:N.a.TodoItems,children:0===Object.keys(t.filterTodos).length?Object.keys(t.todos).map((function(e,o){return Object(s.jsx)(k,{todo:t.todos[e],remove:function(){return t.removed(e)}},e)})):t.filterTodos.noTodos?null:Object.keys(t.filterTodos).map((function(e,o){return Object(s.jsx)(k,{todo:t.todos[e],remove:function(){return t.removed(e)}},e)}))})]})},S=function(t){Object(u.a)(o,t);var e=Object(b.a)(o);function o(){var t;Object(j.a)(this,o);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={todos:{},text:"",filterTodos:{},filterText:"",canFilter:!1},t.filterTodos=function(e){var o=e.target.value;if(0!==o.length){var s=new RegExp(o),r={};Object.keys(t.state.todos).forEach((function(e){s.test(t.state.todos[e])&&(r[e]=t.state.todos[e])})),0!==Object.keys(r).length?t.setState({filterTodos:r,filterText:e.target.value}):t.setState({filterTodos:{noTodos:!0},filterText:e.target.value})}else t.setState({filterTodos:{},filterText:e.target.value})},t.onChange=function(e){t.setState({text:e.target.value})},t.addTodo=function(){var e=Object(d.a)(i.a.mark((function e(o){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.preventDefault(),""!==t.state.text&&((s=Object(l.a)({},t.state.todos))[Date.now()]=t.state.text,t.setState({todos:s,text:"",canFilter:!0}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.removeTodo=function(e){var o=Object(l.a)({},t.state.todos),s=Object(l.a)({},t.state.filterTodos),r=!0,a=t.state.filterText;delete o[e],delete s[e],0===Object.keys(s).length&&(a=""),0===Object.keys(o).length&&(r=!1),t.setState({todos:o,filterTodos:s,filterText:a,canFilter:r})},t}return Object(f.a)(o,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O,{todosLength:Object.keys(this.state.todos).length}),Object(s.jsx)(F,{click:this.addTodo,changed:this.onChange,todos:this.state.todos,filterTodos:this.state.filterTodos,removed:this.removeTodo,text:this.state.text,filter:this.filterTodos,filterText:this.state.filterText,canFilter:this.state.canFilter})]})}}]),o}(r.Component);o(21);n.a.render(Object(s.jsx)(S,{}),document.getElementById("root"))},6:function(t,e,o){t.exports={ul:"Navbar_ul__1D3UV",Nav:"Navbar_Nav__1yypr"}}},[[22,1,2]]]);
//# sourceMappingURL=main.3db57ffa.chunk.js.map