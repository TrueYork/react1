(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[4],{295:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__1faG1",dialogsItems:"Dialogs_dialogsItems__1jLOh",active:"Dialogs_active__ZAyil",messages:"Dialogs_messages__1pF1v",messageIn:"Dialogs_messageIn__3jtVd",messageOut:"Dialogs_messageOut__UIeRn",text:"Dialogs_text__FQ5vz"}},296:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(12),s=a(13),r=a(15),i=a(14),c=a(0),l=a.n(c),o=a(32),m=a(22),u=a(38),p=function(e){return{isAuth:Object(u.b)(e)}},d=function(e){var t=function(t){Object(r.a)(c,t);var a=Object(i.a)(c);function c(){return Object(n.a)(this,c),a.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(o.a,{to:"/login"})}}]),c}(l.a.Component);return Object(m.b)(p)(t)}},301:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),i=a(13),c=a(15),l=a(14),o=a(295),m=a.n(o),u=a(16),p=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e="/dialogs/"+this.props.id;return s.a.createElement("div",{className:m.a.dialogsItems},s.a.createElement("img",{src:this.props.ava,alt:"contactAva"}),s.a.createElement(u.b,{to:e,activeClassName:m.a.active},this.props.name))}}]),a}(s.a.Component),d=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return 0===this.props.sender?s.a.createElement("div",{className:m.a.messageOut},s.a.createElement("span",null,this.props.sender),s.a.createElement("p",null,this.props.message)):s.a.createElement("div",{className:m.a.messageIn},s.a.createElement("span",null,this.props.sender),s.a.createElement("p",null,this.props.message))}}]),a}(s.a.Component),g=a(89),b=a(130),v=a(45),h=a(40),f=Object(v.a)(100),O=Object(h.a)("textarea"),j=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.dialogState.contacts.map((function(e){return s.a.createElement(p,{name:e.name,key:e.id,id:e.id,ava:e.ava})})),a=this.props.dialogState.messages.map((function(e){return s.a.createElement(d,{sender:e.ownerId,message:e.message,key:e.id})}));return s.a.createElement("div",{className:m.a.dialogs},s.a.createElement("div",{className:m.a.dialogsItems},t),s.a.createElement("div",{className:m.a.messages},a),s.a.createElement("div",null),s.a.createElement("div",null,s.a.createElement(E,{onSubmit:function(t){e.props.sendMessage(t.text)}})))}}]),a}(s.a.Component),E=Object(b.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(g.a,{component:O,validate:[v.b,f],name:"text",placeholder:"Type a message here."})),s.a.createElement("div",null,s.a.createElement("button",null,"Send")))})),_=j,y=a(22),I=a(129),k=a(296),D=a(7);t.default=Object(D.d)(Object(y.b)((function(e){return{dialogState:e.messagesPage}}),{sendMessage:I.b}),k.a)(_)}}]);
//# sourceMappingURL=4.9afa42ca.chunk.js.map