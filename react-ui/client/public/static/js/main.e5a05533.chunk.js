(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t){},117:function(e,t){},150:function(e,t,a){},152:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),s=a.n(l),c=a(10),o=a(11),i=a(13),u=a(12),d=a(14),h=a(6),m=a(164),g=a(168),p=a(167),k=a(169),f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a.Item,{onClick:function(){return e.handleClick("year",e.year)}},e.year))};var b=function(e){return r.a.createElement(k.a.Item,{onClick:function(){return e.handleClick("month",e.month)}},e.monthNames[e.month-1])};a(85);for(var w=function(e){return e.selected?r.a.createElement(k.a.Item,{className:"selectedWeek",onClick:function(){return e.handleClick("week",e.week)}},"Week ",e.week," (",e.weekDisplayStart," - ",e.weekDisplayEnd,")"):r.a.createElement(k.a.Item,{onClick:function(){return e.handleClick("week",e.week)}},"Week ",e.week," (",e.weekDisplayStart," - ",e.weekDisplayEnd,")")},v=a(25),E=(a(34),a(157)),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={category:"type",rowIndex:e.rowindex,time:e.time,type:e.type,edited:!1},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.saveChanges=a.saveChanges.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t,a=e.target,n=a.name,r=a.value;this.setState((t={},Object(v.a)(t,n,r),Object(v.a)(t,"edited",!0),t))}},{key:"saveChanges",value:function(){var e=this;this.state.edited&&this.props.saveChanges(this.state,function(){return e.setState({edited:!1})})}},{key:"render",value:function(){var e=this.state.time,t=this.state.type;return r.a.createElement("td",{className:this.state.edited?"edited data":"original data"},r.a.createElement("input",{value:e,name:"time",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{value:t,name:"type",onChange:this.handleChange}),r.a.createElement("br",null),this.state.edited?r.a.createElement(E.a,{className:"saveChanges",onClick:this.saveChanges},"Save"):r.a.createElement("br",null))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={category:"detail",rowIndex:e.rowindex,dayIndex:e.dayindex,numGuests:e.numguests,guides:e.guides,edited:!1},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.handleArrayChange=a.handleArrayChange.bind(Object(h.a)(Object(h.a)(a))),a.saveChanges=a.saveChanges.bind(Object(h.a)(Object(h.a)(a))),a.addSubtractRows=a.addSubtractRows.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.addSubtractRows()}},{key:"componentDidUpdate",value:function(){this.addSubtractRows()}},{key:"addSubtractRows",value:function(){var e=this.state.guides;""!==e.slice(-1)[0]&&""!==e.slice(-2)[0]?(e.push(""),console.log("addsubtractrows update state top"),this.setState({guides:e})):""===e.slice(-2)[0]&&e.length>1&&(console.log("second to last empty",e.slice(-2)[0]),e.pop(),console.log("addsubtractrows update state"),this.setState({guides:e}))}},{key:"handleChange",value:function(e){var t,a=e.target,n=a.name,r=a.value;this.setState((t={},Object(v.a)(t,n,r),Object(v.a)(t,"edited",!0),t))}},{key:"handleArrayChange",value:function(e){var t=e.target,a=t.name,n=t.value,r=parseInt(a),l=this.state.guides.map(function(e,t){return t===r?n:e});this.setState({guides:l,edited:!0})}},{key:"saveChanges",value:function(){var e=this;this.state.edited&&this.props.saveChanges(this.state,function(){return e.setState({edited:!1})})}},{key:"render",value:function(){var e=this,t=this.state.guides;return r.a.createElement("td",{className:this.state.edited?"edited data":"original data",align:"center"},r.a.createElement("h4",null,"Num Guests"),r.a.createElement("input",{value:this.state.numGuests,name:"numGuests",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"Guides"),t.map(function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:t,name:a,onChange:e.handleArrayChange}),r.a.createElement("br",null))}),this.state.edited?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{className:"saveChanges",onClick:this.saveChanges},"Save")):r.a.createElement("br",null))}}]),t}(n.Component),C=a(51),j=a(53),S=(a(91),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={row:a.props.row||{}},a.addRow=a.addRow.bind(Object(h.a)(Object(h.a)(a))),a.deleteRow=a.deleteRow.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"addRow",value:function(){this.props.addrow(this.props.rowindex)}},{key:"deleteRow",value:function(){this.props.deleterow(this.props.rowindex)}},{key:"render",value:function(){var e=this;return r.a.createElement("tr",{className:"border_bottom"},r.a.createElement(y,{key:this.state.row,time:this.state.row.time,type:this.state.row.type,rowindex:this.props.rowindex,saveChanges:this.props.saveChanges}),this.state.row.days.map(function(t,a){return r.a.createElement(O,{key:t,rowindex:e.props.rowindex,dayindex:a,numguests:t.numGuests,guides:t.guides,saveChanges:e.props.saveChanges})}),r.a.createElement("td",{className:"data tableFunctions"},r.a.createElement(C.a,{icon:j.b,pull:"right",onClick:this.deleteRow}),r.a.createElement("br",null),r.a.createElement(C.a,{icon:j.a,pull:"right",onClick:this.addRow})))}}]),t}(n.Component)),Y=a(158),I=a(18),W=a.n(I),R={getAll:function(){return W.a.get("/api/rows").catch(function(e){return console.log(e)})},getWeek:function(e,t){return W.a.get("/api/rows/"+t+"/"+e).catch(function(e){return console.log(e)})},updateWeek:function(e,t){return W.a.put("/api/rows/update",e).then(function(e){t(e)}).catch(function(e){return console.log(e)})},createWeek:function(e,t,a){return W.a.put("/api/rows/create",{week:e,year:t}).then(function(e){a(e)}).catch(function(e){return console.log(e)})},fixWeek:function(e,t,a){return console.log("week",e),console.log("year",t),W.a.put("/api/rows/fix",{week:e,year:t}).then(function(e){a(e)}).catch(function(e){return console.log(e)})},login:function(e){var t={token:"1a2b3c4d",data:{email:e.email,firstName:"test",lastName:"test"}};return new Promise(function(e){return setTimeout(e(t),1e3)})},logout:function(){return new Promise(function(e){return setTimeout(e,1e3)})}},x=(a(109),a(69)),M=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={weekSchedule:a.props.week||{}},a.saveChanges=a.saveChanges.bind(Object(h.a)(Object(h.a)(a))),a.deleteRow=a.deleteRow.bind(Object(h.a)(Object(h.a)(a))),a.addRow=a.addRow.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"populateDates",value:function(e,t){for(var a=x(e+" "+t,"w-YYYY"),n=[],r=1;r<8;r++)n.push(x(a).add(r,"day").format("D-MMM"));return n}},{key:"saveChanges",value:function(e,t){var a=this.state.weekSchedule;console.log("changes to save: ",e);var n=e.rowIndex;switch(e.category){case"type":var r=e.time,l=e.type;a.rows[n].time=r,a.rows[n].type=l,R.updateWeek(a,function(e){t()});break;case"detail":var s=e.dayIndex,c=e.numGuests,o=e.guides;a.rows[n].days[s].numGuests=c,a.rows[n].days[s].guides=o,console.log("newSched detail",a),R.updateWeek(a,function(e){t()});break;case"deleteRow":R.updateWeek(a,function(e){t()})}}},{key:"deleteRow",value:function(e){for(var t=this.state.weekSchedule,a=[],n=0;n<t.rows.length;n++)console.log(n),n!==parseInt(e)&&a.push(t.rows[n]);t.category="deleteRow",t.rows=a,this.saveChanges(t,function(e){return console.log(e)})}},{key:"addRow",value:function(e){console.log("rowIndex",e)}},{key:"render",value:function(){var e=this;return r.a.createElement(Y.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,M.map(function(e){return r.a.createElement("th",null,e)})),r.a.createElement("tr",null,r.a.createElement("th",null),this.populateDates(this.state.weekSchedule.week,this.state.weekSchedule.year).map(function(e){return r.a.createElement("th",null,e)}))),r.a.createElement("tbody",null,this.state.weekSchedule.rows.map(function(t,a){return r.a.createElement(S,{key:t,rowindex:a,row:t,saveChanges:e.saveChanges,deleterow:e.deleteRow,addrow:e.addRow})}),r.a.createElement("tr",null)))}}]),t}(n.Component),N=a(159),G=a(160),F=a(73),P=a(69),A=["January","February","March","April","May","June","July","August","September","October","November","December"],B=[1,2,3,4,5,6,7,8,9,10,11,12],U=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],L=[],T=2015;T<=P().format("YYYY");T++)L.push(T);var J=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).weekOfYear=function(e,t){return parseInt(e)<13?parseInt(P(e+" "+t,"M-YYYY").week()):53},e.findWeekSchedule=function(t,a){e.pullSchedule(t,a,function(t){e.setState({week:t},function(){console.table(e.state.week)})})},e.createEmptySchedule=function(t,a){R.createWeek(t,a,function(n){console.log("new week",n.data),e.findWeekSchedule(t,a)})},e.pullSchedule=function(t,a,n){R.getWeek(t,a).then(function(r){r.data?r.data.rows.length>0?n(r.data):R.fixWeek(t,a,function(n){console.log("fixed week",n.data),e.findWeekSchedule(t,a)}):n(e.createEmptySchedule(t,a))}).catch(function(e){return console.log(e)})},e.handleClick=function(t,a){switch(t){case"year":a===parseInt(e.state.selectedYear)?e.setState({selectedYear:null,selectedMonth:null,selectedWeek:null}):e.setState({selectedYear:a,selectedMonth:null,selectedWeek:null});break;case"month":a===parseInt(e.state.selectedMonth)?e.setState({selectedMonth:null,selectedWeek:null}):e.setState({selectedMonth:a,selectedWeek:null});break;case"week":a===parseInt(e.state.selectedWeek)?e.setState({selectedWeek:null}):(e.setState({selectedWeek:a}),e.findWeekSchedule(a,e.state.selectedYear))}},e.renderYears=function(){return r.a.createElement(k.a,null,L.map(function(t){return t===parseInt(e.state.selectedYear)?r.a.createElement(r.a.Fragment,{key:"activeYear"},r.a.createElement(f,{key:t.toString(),year:t,handleClick:e.handleClick}),e.renderMonths(t)):r.a.createElement(f,{key:t.toString(),year:t,handleClick:e.handleClick})}))},e.renderMonths=function(t){return r.a.createElement(k.a,null,B.map(function(a){return a===parseInt(e.state.selectedMonth)?r.a.createElement(r.a.Fragment,{key:"activeMonth"},r.a.createElement(b,{key:a.toString(),month:a,handleClick:e.handleClick,monthNames:A}),e.renderWeeks(a,t)):r.a.createElement(b,{key:a.toString(),month:a,handleClick:e.handleClick,monthNames:A})}))},e.state={selectedYear:P().format("YYYY"),selectedMonth:P().format("M"),selectedWeek:P().format("W"),week:null},e.clickButton=e.clickButton.bind(Object(h.a)(Object(h.a)(e))),e.renderSchedule=e.renderSchedule.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"clickButton",value:function(){}},{key:"componentDidMount",value:function(){this.findWeekSchedule(this.state.selectedWeek,this.state.selectedYear)}},{key:"renderWeeks",value:function(e,t){var a=this;return r.a.createElement(k.a,null,U.map(function(n){return n<a.weekOfYear(parseInt(e+1),t)&&n>=a.weekOfYear(e,t)?n===parseInt(a.state.selectedWeek)?r.a.createElement(w,{key:n.toString(),week:n,handleClick:a.handleClick,weekDisplayStart:P(n+"-"+t,"w-YYYY").add(1,"d").format("M/D/YY"),weekDisplayEnd:n<52?P(n+1+"-"+t,"w-YYYY").format("M/D/YY"):P("1-"+(parseInt(t)+1),"w-YYYY").format("M/D/YY"),selected:!0}):r.a.createElement(w,{key:n.toString(),week:n,handleClick:a.handleClick,weekDisplayStart:P(n+"-"+t,"w-YYYY").add(1,"d").format("M/D/YY"),weekDisplayEnd:n<52?P(n+1+"-"+t,"w-YYYY").format("M/D/YY"):P("1-"+(parseInt(t)+1),"w-YYYY").format("M/D/YY"),selected:!1}):null}))}},{key:"renderSchedule",value:function(){return this.state.selectedWeek&&this.state.week?parseInt(this.state.selectedWeek)===parseInt(this.state.week.week)?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Week ",this.state.selectedWeek),r.a.createElement(D,{key:this.state.week.toString()+"sched",week:this.state.week})):"Loading":r.a.createElement("br",null)}},{key:"render",value:function(){return r.a.createElement(N.a,{fluid:!0},r.a.createElement(G.a,null,r.a.createElement(F.a,{size:"md-6 sm-12"},this.renderYears(),this.renderSchedule())))}}]),t}(n.Component),z=a(162),_=a(163),q=a(38),H=a.n(q);var K=function(e){return r.a.createElement(z.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark"},r.a.createElement(z.a.Brand,{href:"#home"},r.a.createElement("img",{src:H.a,height:"75px",className:"d-inline-block align-top",alt:"Raft1 logo"})),r.a.createElement(z.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(z.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(_.a,{className:"mr-auto"},r.a.createElement(_.a.Item,null),r.a.createElement(_.a.Item,null)),r.a.createElement(_.a,null,e.user?r.a.createElement(z.a.Brand,null,"Signed in as ",e.user,". ",r.a.createElement("button",{className:"sign-out",onClick:e.logOut},"Sign Out?")):r.a.createElement("br",null))))},Q=(a(150),a(166)),V=a(161),X=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).setRedirect=function(){e.setState({redirect:!0})},e.state={username:"",password:"",wrongPassword:!1},e.onChange=e.onChange.bind(Object(h.a)(Object(h.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(Object(h.a)(e))),e.setRedirect=e.setRedirect.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"onChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(v.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),W.a.post("/api/auth/login",{username:this.state.username,password:this.state.password}).then(function(e){console.log(e),200===e.status&&(console.log(t.props),console.log("login success!"),t.props.logIn(e.data.username),t.props.history.push("/"))}).catch(function(e){t.setState({wrongPassword:!0})})}},{key:"render",value:function(){return r.a.createElement(N.a,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(G.a,{classname:"loginRow"},r.a.createElement(F.a,{className:"intro-column"},r.a.createElement("h1",{className:"text-center"},"Raft 1 Scheduler Portal"),r.a.createElement("br",null),r.a.createElement(Q.a.Img,{src:H.a,fluid:!0})),r.a.createElement(F.a,{className:"login-column"},r.a.createElement(Q.a,{bg:"light"},r.a.createElement(Q.a.Body,null,r.a.createElement(Q.a.Title,null,"Log in"),r.a.createElement(V.a,{className:"form-group"},r.a.createElement(V.a.Group,{controlID:"formUsername"},r.a.createElement(V.a.Label,null,"Username:"),r.a.createElement(V.a.Control,{type:"username",placeholder:"Username",name:"username",value:this.state.username,onChange:this.onChange})),r.a.createElement(V.a.Group,{controlID:"formPassword"},r.a.createElement(V.a.Label,null,"Password:"),r.a.createElement(V.a.Control,{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange})),this.state.wrongPassword?r.a.createElement("p",{className:"incorrect-password"},"Incorrect Password!"):r.a.createElement("br",null),r.a.createElement(E.a,{variant:"primary",size:"lg",block:!0,onClick:this.handleSubmit},"Log In")))))))}}]),t}(n.Component),Z=a(165),$=function(e){var t=e.component,a=e.exact,n=void 0!==a&&a,l=e.path,s=e.authenticated;return r.a.createElement(p.a,{exact:n,path:l,render:function(e){return s?r.a.createElement(t,e):r.a.createElement(Z.a,{to:{pathname:"/login",state:{from:e.location}}})}})},ee=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={loggedIn:!1,user:null,checked:!1},e.logIn=e.logIn.bind(Object(h.a)(Object(h.a)(e))),e.logOut=e.logOut.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"getUser",value:function(e){var t=this;W.a.get("/api/auth/user").then(function(e){e.data.user?t.setState({loggedIn:!0,user:e.data.user.username,checked:!0}):(console.log("Get user: no user"),t.setState({loggedIn:!1,user:null,checked:!0}))})}},{key:"logIn",value:function(e){sessionStorage.setItem("loggedIn",!0),console.log("session storage",sessionStorage.getItem("loggedIn")),this.setState({user:e,loggedIn:!0})}},{key:"logOut",value:function(){var e=this;console.log("logging out"),W.a.post("/api/auth/logout").then(function(t){console.log(t),e.setState({user:null,loggedIn:!1})})}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,this.state&&this.state.checked&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{loggedIn:this.state.loggedIn,user:this.state.user,logOut:this.logOut}),r.a.createElement(g.a,null,r.a.createElement($,{exact:!0,path:"/",component:J,authenticated:this.state.loggedIn}),r.a.createElement(p.a,{path:"/login",render:function(t){return r.a.createElement(X,Object.assign({},t,{logIn:e.logIn}))}}))))}}]),t}(n.Component);a(152),a(153);a(33),window.React2=a(0),s.a.render(r.a.createElement(ee,null),document.getElementById("root"))},34:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/Raft1Logo.873b7253.png"},80:function(e,t,a){e.exports=a(154)},85:function(e,t,a){},91:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.e5a05533.chunk.js.map