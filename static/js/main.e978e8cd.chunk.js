(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e){e.exports={People:[{nome:"Marcelo Bepler",documento:"146.431.580-93",telefone:"99123 4567"},{nome:"Jo\xe3o Costa",documento:"041.346.870-47",telefone:"87456 7635"},{nome:"Paula da Silva",documento:"067.177.470-05",telefone:"46546 5783"},{nome:"Cristiano Moraes",documento:"450.615.360-02",telefone:"99123 4573"},{nome:"Felipe Araujo",documento:"406.729.450-61",telefone:"46546 4578"},{nome:"Rui Barbosa",documento:"149.246.170-91",telefone:"465464 3533"},{nome:"Felipe Oliveria",documento:"326.848.020-92",telefone:"4546 74564"},{nome:"Paulo Macedo",documento:"871.844.760-00",telefone:"64564 4574"}]}},153:function(e){e.exports={CheckIn:[{dataEntrada:"2019-04-23T05:00:00",dataSaida:"2019-04-30T19:17:00",adicionalVeiculo:!1,pessoa:{nome:"Marcelo Bepler",documento:"146.431.580-93",telefone:"99123 4567"}},{dataEntrada:"2019-04-26T08:00:00",dataSaida:"2019-04-29T10:17:00",adicionalVeiculo:!0,pessoa:{nome:"Jo\xe3o Costa",documento:"041.346.870-47",telefone:"87456 7635"}},{dataEntrada:"2019-05-03T04:45:00",dataSaida:"2019-05-08T22:12:00",adicionalVeiculo:!1,pessoa:{nome:"Paula da Silva",documento:"067.177.470-05",telefone:"46546 5783"}},{dataEntrada:"2019-05-18T10:25:00",dataSaida:"2019-05-27T15:17:00",adicionalVeiculo:!1,pessoa:{nome:"Cristiano Moraes",documento:"450.615.360-02",telefone:"99123 4573"}},{dataEntrada:"2019-05-24T15:50:00",dataSaida:"2019-05-29T18:17:00",adicionalVeiculo:!0,pessoa:{nome:"Felipe Araujo",documento:"406.729.450-61",telefone:"46546 4578"}},{dataEntrada:"2019-05-31T19:00:00",dataSaida:"2019-06-02T20:17:00",adicionalVeiculo:!1,pessoa:{nome:"Rui Barbosa",documento:"149.246.170-91",telefone:"465464 3533"}},{dataEntrada:"2019-06-03T02:00:00",dataSaida:"2019-06-04T10:28:00",adicionalVeiculo:!0,pessoa:{nome:"Felipe Oliveria",documento:"326.848.020-92",telefone:"4546 74564"}},{dataEntrada:"2019-06-06T05:55:00",dataSaida:"2019-06-10T20:17:00",adicionalVeiculo:!1,pessoa:{nome:"Paulo Macedo",documento:"871.844.760-00",telefone:"64564 4574"}}]}},159:function(e,t,n){e.exports=n(230)},228:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),s=n.n(o),i=n(22),l=n(23),c=n(25),u=n(24),p=n(26),d=n(31),h=n(47),m=n(156),E=n(46),f=n(11),y=n(154),b=n.n(y),g=n(40),v=n.n(g),T=n(14),_=n.n(T),O=n(80),S=n.n(O),C=n(109),I=n.n(C),k=n(63),R=n.n(k),D=n(155),j=n.n(D),P=n(96),w=n.n(P),G=n(158),N=(n(168),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(G.a,{data:this.props.data,columns:[{Header:"Name",accessor:"name"},{Header:"Document",accessor:"document"},{Header:"Amount Spent ($)",accessor:"total"}],defaultPageSize:5})}}]),t}(r.a.Component)),U=n(32),F=n.n(U),H=n(18),A=n.n(H),L=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(A.a,{show:this.props.show,onHide:function(){return e.props.closeScreen()},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(A.a.Header,{closeButton:!0},r.a.createElement(A.a.Title,null,"Insert Guest")),r.a.createElement(A.a.Body,null,r.a.createElement(_.a.Label,null,"Name"),r.a.createElement(_.a.Control,{type:"text",placeholder:"Name",onChange:function(t){return e.props.setName(t)}}),r.a.createElement(_.a.Label,null,"Document"),r.a.createElement(_.a.Control,{type:"text",placeholder:"Document",onChange:function(t){return e.props.setDocument(t)}}),r.a.createElement(_.a.Label,null,"Phone"),r.a.createElement(_.a.Control,{type:"text",placeholder:"Phone",onChange:function(t){return e.props.setPhone(t)}})),r.a.createElement(A.a.Footer,null,r.a.createElement(F.a,{variant:"secondary",onClick:function(){return e.props.closeScreen()}},"Close"),r.a.createElement(F.a,{variant:"primary",onClick:function(){return e._insertGuest()}},"Insert")))}},{key:"_insertGuest",value:function(){var e=this.props,t=e.name,n=e.document,a=e.phone,r=e.label,o=e.value;this.props.insertGuest({name:t,document:n,phone:a,label:r,value:o},this.props.hotelRegistration)}}]),t}(a.Component),x=Object(d.b)(function(e){return{name:e.InsertGuestReducer.name,document:e.InsertGuestReducer.document,phone:e.InsertGuestReducer.phone,label:e.InsertGuestReducer.label,value:e.InsertGuestReducer.value,hotelRegistration:e.HomeReducer.hotelRegistration}},{setName:function(e){return{type:"SET_NAME",payload:e.target.value}},setDocument:function(e){return{type:"SET_DOCUMENT",payload:e.target.value}},setPhone:function(e){return{type:"SET_PHONE",payload:e.target.value}}})(L),M=n(50),V=n(53),B=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={people:[]},n._updateGuest=n._updateGuest.bind(Object(M.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=[];for(var a in e.options)n.push(e.options[a].guest);return this.state.people=n.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}),!(this.props==e&&this.state==t)}},{key:"render",value:function(){var e=this;return r.a.createElement(A.a,{show:this.props.show,onHide:function(){return e.props.closeScreen()},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(A.a.Header,{closeButton:!0},r.a.createElement(A.a.Title,null,"Update guest")),r.a.createElement(A.a.Body,null,r.a.createElement(_.a.Label,null,"Choose guest to be updated:"),r.a.createElement(V.a,{isClearable:!0,value:this.props.guest,options:this.state.people,placeholder:"Choose guest to be updated",onChange:function(t){return e.props.setPerson(t)}}),r.a.createElement(_.a.Label,null,"Guest"),r.a.createElement(_.a.Control,{disabled:this.props.disableFields,type:"text",placeholder:"Name",onChange:function(t){return e.props.setName(t)},value:this.props.name}),r.a.createElement(_.a.Label,null,"Document"),r.a.createElement(_.a.Control,{disabled:this.props.disableFields,type:"text",placeholder:"Document",onChange:function(t){return e.props.setDocument(t)},value:this.props.document}),r.a.createElement(_.a.Label,null,"Phone"),r.a.createElement(_.a.Control,{disabled:this.props.disableFields,type:"text",placeholder:"Phone",onChange:function(t){return e.props.setPhone(t)},value:this.props.phone})),r.a.createElement(A.a.Footer,null,r.a.createElement(F.a,{variant:"secondary",onClick:function(){return e.props.closeScreen()}},"Close"),r.a.createElement(F.a,{variant:"primary",onClick:function(){return e._updateGuest()}},"Update")))}},{key:"_updateGuest",value:function(){var e=this.props,t=e.name,n=e.document,a=e.phone,r=e.label,o=e.value,s=e.person;this.props.updateGuest({name:t,document:n,phone:a,label:r,value:o,person:s}),this.props.reset()}}]),t}(a.Component),W=Object(d.b)(function(e){return{name:e.UpdateGuestReducer.name,document:e.UpdateGuestReducer.document,phone:e.UpdateGuestReducer.phone,label:e.UpdateGuestReducer.label,value:e.UpdateGuestReducer.value,person:e.UpdateGuestReducer.person,disableFields:e.UpdateGuestReducer.disableFields}},{reset:function(){return{type:"RESET_SCREEN_UPDATE"}},setName:function(e){return{type:"SET_NAME_UPDATE",payload:e.target.value}},setDocument:function(e){return{type:"SET_DOCUMENT_UPDATE",payload:e.target.value}},setPhone:function(e){return{type:"SET_PHONE_UPDATE",payload:e.target.value}},setPerson:function(e){return e?{type:"SET_PERSON_UPDATE",payload:{name:e.name,label:e.name,value:e.document,document:e.document,phone:e.phone,person:e,disableFields:!1}}:{type:"RESET_SCREEN_UPDATE"}}})(B),z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={people:[]},n._deleteGuest=n._deleteGuest.bind(Object(M.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=[];for(var a in e.options)n.push(e.options[a].guest);return this.state.people=n.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}),!(this.props==e&&this.state==t)}},{key:"render",value:function(){var e=this;return r.a.createElement(A.a,{show:this.props.show,onHide:function(){return e.props.closeScreen()},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(A.a.Header,{closeButton:!0},r.a.createElement(A.a.Title,null,"Delete Guest")),r.a.createElement(A.a.Body,null,r.a.createElement(_.a.Label,null,"Guest"),r.a.createElement(V.a,{isClearable:!0,value:this.props.guest,options:this.state.people,placeholder:"Choose a guest to delete",onChange:function(t){return e.props.setPerson(t)}})," "),r.a.createElement(A.a.Footer,null,r.a.createElement(F.a,{variant:"secondary",onClick:function(){return e.props.closeScreen()}},"Close"),r.a.createElement(F.a,{variant:"primary",onClick:function(){return e._deleteGuest()}},"Delete")))}},{key:"_deleteGuest",value:function(){this.props.deleteGuest(this.props.person),this.props.reset()}}]),t}(a.Component),J=Object(d.b)(function(e){return{person:e.DeleteGuestReducer.person}},{setPerson:function(e){return{type:"SET_PERSON_DELETE",payload:e}},reset:function(){return{type:"RESET_SCREEN_DELETE"}}})(z),K=n(101),$=(n(208),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={startDate:new Date,endDate:new Date,people:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=[];for(var a in e.options)n.push(e.options[a].guest);return this.state.people=n.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}),!(this.props==e&&this.state==t)}},{key:"render",value:function(){var e=this;return r.a.createElement("span",null,r.a.createElement(S.a,{className:"justify-content-center"},r.a.createElement(v.a,{style:q.card},r.a.createElement(v.a.Header,{style:q.cardHeader},"New Check-In"),r.a.createElement(v.a.Body,{style:q.container},r.a.createElement("div",{style:q.lines},r.a.createElement("div",{style:q.fields},r.a.createElement(v.a.Text,null,"Date/Time Check-In"),r.a.createElement(K.a,{selected:this.props.dateIn,onChange:function(t){return e.props.setDateIn(t)},dateFormat:"dd/MM/yyyy HH:mm",showTimeSelect:!0,timeFormat:"HH:mm"})),r.a.createElement("div",{style:q.fields},r.a.createElement(v.a.Text,null,"Date/Time Check-Out"),r.a.createElement(K.a,{selected:this.props.dateOut,onChange:function(t){return e.props.setDateOut(t)},dateFormat:"dd/MM/yyyy HH:mm",showTimeSelect:!0,timeFormat:"HH:mm"}))),r.a.createElement("div",{style:q.lines},r.a.createElement("div",{style:q.fields},r.a.createElement(_.a.Label,null,"Person"),r.a.createElement(V.a,{isClearable:!0,value:this.props.guest,options:this.state.people,placeholder:"Name",onChange:function(t){return e.props.setGuest(t)}})),r.a.createElement("div",{style:q.fields},r.a.createElement(_.a.Check,{checked:this.props.isParking,id:"possui_veiculo",label:"Parking Lot",style:q.checkbox,onChange:function(){return e.props.setParking(e.props.isParking)}}))),r.a.createElement("div",{style:q.lines},r.a.createElement(F.a,{onClick:function(){return e._insertCheckIn()}},"Save"))))))}},{key:"_insertCheckIn",value:function(){var e=this.props,t=e.dateIn,n=e.dateOut,a=e.guest,r=e.isParking;this.props.insertCheckIn({dateIn:t,dateOut:n,guest:a,isParking:r}),this.props.resetState()}}]),t}(a.Component)),q={container:{minHeight:"100%",height:"auto",justifyContent:"space-between"},cardHeader:{backgroundColor:"#1a73e8",textAlign:"left",color:"White",fontWeight:"bold"},card:{width:"100%"},lines:{justifyContent:"space-between",padding:"0.25rem",display:"flex"},fields:{display:"block",width:"48%"},checkbox:{height:"100%",position:"relative",display:"flex",paddingLeft:"1.25rem",alignItems:"center"}},Q=Object(d.b)(function(e){return{dateIn:e.InsertCheckInReducer.dateIn,dateOut:e.InsertCheckInReducer.dateOut,guest:e.InsertCheckInReducer.guest,isParking:e.InsertCheckInReducer.isParking}},{setDateIn:function(e){return{type:"SET_DATE_IN",payload:e}},setDateOut:function(e){return{type:"SET_DATE_OUT",payload:e}},setGuest:function(e){return{type:"SET_GUEST",payload:e}},setParking:function(e){return{type:"SET_PARKING",payload:!e}},resetState:function(){return{type:"RESET_STATE"}}})($),X=n(152),Y=n(153),Z=n(88);function ee(e){var t=e.dateIn,n=e.dateOut,a=function(e,t){var n=0,a=0,r=new Date(new Date(e).setHours(0,0,0,0)),o=new Date(new Date(t).setHours(0,0,0,0));for(;r<=o;){var s=r.getDay();6!=s&&0!=s?n++:a++,r.setDate(r.getDate()+1)}return{weekDayCount:n,weekendDayCount:a}}(t,n),r=a.weekDayCount,o=a.weekendDayCount,s=r+o;(function(e){var t=e.getMinutes(),n=e.getHours();if(n>16)return!1;if(16==n&&t>30)return!1;return!0})(n)&&s>1&&(!function(e){var t=!1,n=e.getDay();6!=n&&0!=n&&(t=!0);return t}(n)?o--:r--);var i=0;return e.isParking&&(i=15*r+20*o),120*r+150*o+i}function te(e,t){var n=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),a={};return a.name=e.name,a.document=e.document,a.total=n.format(t),a}function ne(e){var t=new Date,n=!1;for(var a in e.checkIn){var r=e.checkIn[a];if(r.dateIn<=t&&r.dateOut>=t){n=!0;break}}return n}var ae=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e)))._init(),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{style:re.container},r.a.createElement(x,{show:this.props.showInsert,closeScreen:this.props.closeInsertScreen,insertGuest:this.props.insertGuest}),r.a.createElement(W,{show:this.props.showUpdate,closeScreen:this.props.closeUpdateScreen,updateGuest:this._updateGuest,options:this.props.hotelRegistration}),r.a.createElement(J,{show:this.props.showDelete,closeScreen:this.props.closeDeleteScreen,deleteGuest:this._deleteGuest,options:this.props.hotelRegistration}),r.a.createElement("div",{style:re.content},r.a.createElement("span",null,r.a.createElement("div",{style:{marginLeft:"-15px"}},r.a.createElement(j.a,{id:"dropdown-basic-button",title:"Manage Guests"},r.a.createElement(R.a.Item,{onClick:function(){return e.props.showInsertScreen()}},"Insert Guest"),r.a.createElement(R.a.Item,{onClick:function(){return e.props.showUpdateScreen()}},"Update Guest"),r.a.createElement(R.a.Item,{onClick:function(){return e.props.showDeleteScreen()}},"Delete Guest")))),r.a.createElement(Q,{insertCheckIn:this._insertCheckIn,options:this.props.hotelRegistration}),r.a.createElement("span",null,r.a.createElement(S.a,{className:"justify-content-center"},r.a.createElement(v.a,{style:re.card},r.a.createElement(v.a.Header,{style:re.cardHeader},"Board"),r.a.createElement(v.a.Body,{style:re.container},r.a.createElement("div",{style:re.lines},r.a.createElement(I.a.Prepend,null,r.a.createElement(I.a.Text,{id:"filtro"},"Find by:")),r.a.createElement(w.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",onChange:function(t){return e._setFilter(t)}})),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(_.a.Check,{checked:this.props.presentFilter,label:"Guests at hotel",style:re.checkbox,onChange:function(){return e._setPresentFilter(e.props.presentFilter)}}),r.a.createElement(_.a.Check,{checked:this.props.notPresentFilter,label:"Guests who have left the hotel",style:Object(f.a)({},re.checkbox,{marginLeft:"1.25rem"}),onChange:function(){return e._setNotPresentFilter(e.props.notPresentFilter)}})),r.a.createElement("div",{style:{paddingTop:"1.25rem"}},r.a.createElement(N,{data:this.props.dataGrid}))))))))}},{key:"_init",value:function(){this.props.loadInitialData(X.People,Y.CheckIn),setTimeout(function(){this.props.calculateValues(this.props)}.bind(this),100),this._insertCheckIn=this._insertCheckIn.bind(this),this._setFilter=this._setFilter.bind(this),this._setNotPresentFilter=this._setNotPresentFilter.bind(this),this._setPresentFilter=this._setPresentFilter.bind(this),this._updateGuest=this._updateGuest.bind(this),this._deleteGuest=this._deleteGuest.bind(this)}},{key:"_deleteGuest",value:function(e){this.props.deleteGuest(e,this.props.hotelRegistration),setTimeout(function(){this.props.calculateValues(this.props)}.bind(this),100)}},{key:"_updateGuest",value:function(e){this.props.updateGuest(e,this.props.hotelRegistration),setTimeout(function(){this.props.calculateValues(this.props)}.bind(this),100)}},{key:"_insertCheckIn",value:function(e){this.props.insertCheckIn(e,this.props.hotelRegistration),setTimeout(function(){this.props.calculateValues(this.props)}.bind(this),100)}},{key:"_setFilter",value:function(e){this.props.setFilter(e),setTimeout(function(){this.props.calculateValues(this.props)}.bind(this),100)}},{key:"_setPresentFilter",value:function(e){this.props.setPresentFilter(e),setTimeout(function(){this.props.calculateValues(this.props)}.bind(this),100)}},{key:"_setNotPresentFilter",value:function(e){this.props.setNotPresentFilter(e),setTimeout(function(){this.props.calculateValues(this.props)}.bind(this),100)}}]),t}(r.a.Component),re={container:{minHeight:"100%",height:"auto",justifyContent:"space-between"},cardHeader:{backgroundColor:"#1a73e8",textAlign:"left",color:"White",fontWeight:"bold"},card:{width:"100%"},content:{display:"inline",justifyContent:"space-between",padding:"10%"},lines:{justifyContent:"space-between",padding:"0.25rem",display:"flex"},fields:{display:"block",width:"48%"},checkbox:{height:"100%",position:"relative",display:"flex",paddingLeft:"1.25rem",alignItems:"center"}},oe=Object(d.b)(function(e){return{showInsert:e.HomeReducer.showInsert,showUpdate:e.HomeReducer.showUpdate,showDelete:e.HomeReducer.showDelete,presentFilter:e.HomeReducer.presentFilter,notPresentFilter:e.HomeReducer.notPresentFilter,filter:e.HomeReducer.filter,dataGrid:e.HomeReducer.dataGrid,hotelRegistration:e.HomeReducer.hotelRegistration}},{calculateValues:function(e){if(e.hotelRegistration){var t=function(e){var t=[],n=e.hotelRegistration;for(var a in n){var r=n[a],o=r.guest.name,s=r.guest.document,i=ne(r);(e.notPresentFilter&&!i||e.presentFilter&&i)&&(!e.filter||o.toUpperCase().includes(e.filter.toUpperCase())||s.toUpperCase().includes(e.filter.toUpperCase()))&&t.push(r)}return t}(e),n=[];for(var a in t){var r=t[a],o=0;for(var s in r.checkIn)o+=ee(r.checkIn[s]);n=[].concat(Object(Z.a)(n),[te(r.guest,o)])}return{type:"CALCULATE_VALUES",payload:n.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})}}return{type:"CALCULATE_VALUES",payload:n}},setNotPresentFilter:function(e){return{type:"SET_NOT_PRESENT_FILTER",payload:!e}},setPresentFilter:function(e){return{type:"SET_PRESENT_FILTER",payload:!e}},setFilter:function(e){return{type:"SET_FILTER",payload:e.target.value}},insertCheckIn:function(e,t){if(e.dateIn>e.dateOut)alert("Data de entrada menor que data de sa\xedda");else{if(e.dateIn&&e.dateOut&&e.guest){var n=t.find(function(t){return t.guest===e.guest}),a={dateIn:e.dateIn,dateOut:e.dateOut,isParking:e.isParking};return n.checkIn.push(a),{type:"INSERT_NEW_CHECKIN",payload:t}}alert("Campos obrigat\xf3rios n\xe3o preenchidos")}return{type:"ERROR"}},insertGuest:function(e,t){if(e.name&&e.document&&e.phone){if(t.find(function(t){return t.guest.document===e.document}))return alert("H\xf3spede com esse documento j\xe1 cadastrado"),{type:"ERROR"};var n={guest:e,checkIn:[]};return{type:"INSERT_GUEST",payload:t=t?[].concat(Object(Z.a)(t),[n]):[n]}}return alert("Campos obrigat\xf3rios n\xe3o preenchidos"),{type:"ERROR"}},updateGuest:function(e,t){if(e.name&&e.document&&e.phone&&e.person){for(var n in t)if(t[n].guest===e.person){var a={name:e.name,label:e.name,value:e.document,document:e.document,phone:e.phone};t[n].guest=a;var r=Object(Z.a)(t)}return{type:"UPDATE_GUEST",payload:r}}return alert("Campos obrigat\xf3rios n\xe3o preenchidos"),{type:"ERROR"}},showInsertScreen:function(){return{type:"SHOW_INSERT",payload:!0}},closeInsertScreen:function(){return{type:"SHOW_INSERT",payload:!1}},loadInitialData:function(e,t){var n=[];for(var a in e){var r=e[a],o={};o.name=r.nome,o.label=r.nome,o.value=r.documento,o.document=r.documento,o.phone=r.telefone;var s=t.find(function(e){return e.pessoa.documento===o.document}),i={dateIn:new Date(s.dataEntrada),dateOut:new Date(s.dataSaida),isParking:s.adicionalVeiculo};n.push({guest:o,checkIn:[i]})}return{type:"INSERT_INITIAL_DATA",payload:n}},showUpdateScreen:function(){return{type:"SHOW_UPDATE",payload:!0}},closeUpdateScreen:function(){return{type:"SHOW_UPDATE",payload:!1}},showDeleteScreen:function(){return{type:"SHOW_DELETE",payload:!0}},closeDeleteScreen:function(){return{type:"SHOW_DELETE",payload:!1}},deleteGuest:function(e,t){return{type:"DELETE_GUEST",payload:t.filter(function(t){return t.guest!==e})}}})(ae),se=function(e){return r.a.createElement(m.a,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:oe,key:"Home"})))},ie=n(111),le=n.n(ie),ce={header:{height:"10%",backgroundColor:"rgb(26, 115, 232)"},headerImg:{width:"10rem",height:"4rem"}},ue=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(le.a,{variant:"dark",style:ce.header},r.a.createElement(le.a.Brand,{href:"https://github.com/mbepler"},r.a.createElement("img",{alt:"my_github",src:"https://miro.medium.com/max/1170/1*zvwgIycD5ePCTv1fUNdeJg.png",className:"d-inline-block align-top",style:ce.headerImg})))}}]),t}(r.a.Component),pe={name:"",label:"",value:"",document:"",phone:""},de={name:"",label:"",value:"",document:"",phone:"",person:{},disableFields:!0},he={person:{}},me={dateIn:new Date,dateOut:new Date,guest:"",isParking:!1},Ee={showInsert:!1,showUpdate:!1,showDelete:!1,presentFilter:!0,notPresentFilter:!0,filter:"",guests:[],checkIns:[],dataGrid:[],hotelRegistration:[]},fe=Object(h.c)({InsertGuestReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NAME":return Object(f.a)({},e,{name:t.payload,label:t.payload});case"SET_DOCUMENT":return Object(f.a)({},e,{document:t.payload,value:t.payload});case"SET_PHONE":return Object(f.a)({},e,{phone:t.payload});default:return e}},UpdateGuestReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NAME_UPDATE":return Object(f.a)({},e,{name:t.payload,label:t.payload});case"SET_DOCUMENT_UPDATE":return Object(f.a)({},e,{document:t.payload,value:t.payload});case"SET_PHONE_UPDATE":return Object(f.a)({},e,{phone:t.payload});case"SET_PERSON_UPDATE":return t.payload;case"RESET_SCREEN_UPDATE":return de;default:return e}},InsertCheckInReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATE_IN":return Object(f.a)({},e,{dateIn:t.payload});case"SET_DATE_OUT":return Object(f.a)({},e,{dateOut:t.payload});case"SET_GUEST":return Object(f.a)({},e,{guest:t.payload});case"SET_PARKING":return Object(f.a)({},e,{isParking:t.payload});case"RESET_STATE":return me;default:return e}},DeleteGuestReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PERSON_DELETE":return Object(f.a)({},e,{person:t.payload});case"RESET_SCREEN_DELETE":return he;default:return e}},HomeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_INSERT":return Object(f.a)({},e,{showInsert:t.payload});case"SHOW_UPDATE":return Object(f.a)({},e,{showUpdate:t.payload});case"SHOW_DELETE":return Object(f.a)({},e,{showDelete:t.payload});case"INSERT_GUEST":return Object(f.a)({},e,{hotelRegistration:t.payload,showInsert:!1});case"UPDATE_GUEST":return Object(f.a)({},e,{hotelRegistration:t.payload,showUpdate:!1});case"DELETE_GUEST":return Object(f.a)({},e,{hotelRegistration:t.payload,showDelete:!1});case"INSERT_NEW_CHECKIN":return Object(f.a)({},e,{hotelRegistration:t.payload});case"SET_FILTER":return Object(f.a)({},e,{filter:t.payload});case"SET_PRESENT_FILTER":return Object(f.a)({},e,{presentFilter:t.payload});case"SET_NOT_PRESENT_FILTER":return Object(f.a)({},e,{notPresentFilter:t.payload});case"CALCULATE_VALUES":return Object(f.a)({},e,{dataGrid:t.payload});case"INSERT_INITIAL_DATA":return Object(f.a)({},e,{hotelRegistration:t.payload});case"INSERT_INITIAL_CHECKIN":return Object(f.a)({},e,{checkIns:t.payload});default:return e}}}),ye=n(157),be=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:Object(h.d)(fe,{},Object(h.a)(ye.a))},r.a.createElement("div",{id:"root",style:ge.root},r.a.createElement(ue,null),r.a.createElement(se,null)))}}]),t}(r.a.Component),ge={root:{height:"100%",width:"100%"}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(228),n(229);s.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[159,1,2]]]);
//# sourceMappingURL=main.e978e8cd.chunk.js.map