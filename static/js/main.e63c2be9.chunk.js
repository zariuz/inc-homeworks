(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,function(e,t,a){e.exports={hiddenMenu:"Header_hiddenMenu__1kDys",hiddenMenuTicker:"Header_hiddenMenuTicker__2noLO",btnMenu:"Header_btnMenu__3Qlv2",first:"Header_first__2d20t",second:"Header_second__3zyoj",third:"Header_third__2o6ja",menuItem:"Header_menuItem__1uOrV",menuLink:"Header_menuLink__1TIqI",selected:"Header_selected__3Ay6u"}},,function(e,t,a){e.exports={wrapper:"Affairs_wrapper__2KQQi",affairs:"Affairs_affairs__OzoEx",affairItem:"Affairs_affairItem__2JG-D",affairEl:"Affairs_affairEl__H3hRj",btn:"Affairs_btn__3K6zz"}},,,function(e,t,a){e.exports={wrapper:"Message_wrapper__2x3cl",avatar:"Message_avatar__k8gOI",message:"Message_message__12qm6",name:"Message_name__n8ZAo",messageTime:"Message_messageTime__idGRD"}},function(e,t,a){e.exports={blue:"HW4_blue__2HFMH",column:"HW4_column__1bedE",button:"HW4_button__2IhPg",inputWrraper:"HW4_inputWrraper__3BCjb",testSpanError:"HW4_testSpanError__178i0"}},,,,,,function(e,t,a){e.exports={wrapper:"Greeting_wrapper__HV9Nz",total:"Greeting_total__3xN5g",button:"Greeting_button__OPShh",error:"Greeting_error__3fbng",errorMessage:"Greeting_errorMessage__294YB"}},function(e,t,a){e.exports={input:"SuperInputText_input__29yJl",superInput:"SuperInputText_superInput__1uhsz",errorInput:"SuperInputText_errorInput__3GATz",error:"SuperInputText_error__2WWiV"}},,function(e,t,a){e.exports={title:"App_title__2SEQu",main:"App_main__PAuoF"}},function(e,t,a){e.exports={button:"SuperButton_button__1m-Ul",blink:"SuperButton_blink__1u-M8",default:"SuperButton_default__3N4Ze",red:"SuperButton_red__1Nu6A"}},,,function(e,t,a){e.exports={label:"SuperCheckbox_label__1O3VD",checkbox:"SuperCheckbox_checkbox__-kuty"}},,,,,,function(e,t,a){e.exports={img:"Error404_img__38y7l"}},,,,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(27),s=a.n(c),i=(a(35),a(18)),l=a.n(i),o=a(10),j=a(2),u=a(28),d=a.n(u),b=a(0);var m=function(){return Object(b.jsx)("div",{className:d.a.img})};var h=function(){return Object(b.jsx)("div",{})};var x=function(){return Object(b.jsx)("div",{})},O=a(8),_=a.n(O);var f=function(e){var t=e.avatar,a=e.name,r=e.message,n=e.time;return Object(b.jsxs)("div",{className:_.a.wrapper,children:[Object(b.jsx)("div",{className:_.a.avatar,children:Object(b.jsx)("img",{src:t,alt:"avatar"})}),Object(b.jsxs)("div",{className:_.a.message,children:[Object(b.jsxs)("div",{className:_.a.messageInfo,children:[Object(b.jsx)("div",{className:_.a.name,children:a}),Object(b.jsx)("div",{className:_.a.text,children:r})]}),Object(b.jsx)("div",{className:_.a.messageTime,children:n})]})]})},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Some Name",N="some text",g="22:00";var k=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(f,{avatar:p,name:v,message:N,time:g}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},C=a(7),y=a(5),w=a.n(y),S=a(11),I=a(12),H=a(19),A=a.n(H),E=function(e){var t=e.red,a=e.className,r=Object(I.a)(e,["red","className"]),n="".concat(A.a.button," ").concat(t?A.a.red:A.a.default," ").concat(a);return Object(b.jsx)("button",Object(S.a)({className:n},r))};var M=function(e){var t=e.affair.priority,a="low"===t?"green":"middle"===t?"orange":"red";return Object(b.jsxs)("div",{className:w.a.affairItem,children:[Object(b.jsx)("div",{className:w.a.affairEl,children:e.affair.name}),Object(b.jsxs)("div",{className:w.a.affairEl,style:{color:a},children:["[",t,"]"]}),Object(b.jsx)("div",{className:w.a.affairEl,children:Object(b.jsx)(E,{onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})})]})};var T=function(e){var t=e.data.map((function(t){return Object(b.jsx)(M,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:w.a.wrapper,children:[Object(b.jsx)("div",{className:w.a.affairs,children:t}),Object(b.jsxs)("div",{className:w.a.buttonBlock,children:[Object(b.jsx)(E,{className:w.a.btn,onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)(E,{className:w.a.btn,onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)(E,{className:w.a.btn,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)(E,{className:w.a.btn,onClick:function(){e.setFilter("low")},children:"Low"})]})]})},B=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var W=function(){var e=Object(r.useState)(B),t=Object(C.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)("all"),s=Object(C.a)(c,2),i=s[0],l=s[1],o=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(a,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(T,{data:o,setFilter:l,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},F=a(30),G=a(44),P=a(15),J=a.n(P),K=a(16),z=a.n(K),L=function(e){e.type;var t=e.onChange,a=e.onBlur,r=e.onChangeText,n=e.onKeyPress,c=e.onEnter,s=e.error,i=e.className,l=e.spanClassName,o=Object(I.a)(e,["type","onChange","onBlur","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(z.a.error," ").concat(l||""),u="".concat(z.a.input," ").concat(s?z.a.errorInput:z.a.superInput," ").concat(i);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(S.a)({type:"text",onBlur:function(e){a&&a(e)},onChange:function(e){t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),c&&"Enter"===e.key&&c()},className:u},o)),s&&Object(b.jsx)("div",{className:j,children:s})]})},U=function(e){var t=e.name,a=e.setNameCallback,r=e.addUser,n=e.onKeyEnterHandler,c=e.error,s=e.totalUsers,i=e.setOnBlur;return Object(b.jsxs)("div",{className:J.a.wrapper,children:[Object(b.jsx)("div",{className:J.a.input,children:Object(b.jsx)(L,{value:t,error:c,onChange:a,onKeyPress:n,onBlur:i})}),Object(b.jsxs)("div",{className:J.a.button,children:[Object(b.jsx)(E,{onClick:r,disabled:!t,children:"add"}),Object(b.jsx)("span",{className:J.a.total,children:s})]})]})},q=function(e){var t=e.users,a=e.addUserCallback,n=Object(r.useState)(""),c=Object(C.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)(""),o=Object(C.a)(l,2),j=o[0],u=o[1],d=function(){a(s),i("")},m=t.length;return Object(b.jsx)(U,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),j&&u("")):(i(""),u("Name is required!"))},addUser:d,onKeyEnterHandler:function(e){s&&"Enter"===e.key&&d()},error:j,totalUsers:m,setOnBlur:function(){!s&&u("Name is required!")}})};var D=function(){var e=Object(r.useState)([]),t=Object(C.a)(e,2),a=t[0],n=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(q,{users:a,addUserCallback:function(e){n([].concat(Object(F.a)(a),[{_id:Object(G.a)(),name:e}]))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Q=a(9),R=a.n(Q),V=a(22),Z=a.n(V),X=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),c=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Z.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(S.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s},c)),n&&Object(b.jsx)("span",{className:Z.a.spanClassName,children:n})]})};var Y=function(){var e=Object(r.useState)(""),t=Object(C.a)(e,2),a=t[0],n=t[1],c=a?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(r.useState)(!1),l=Object(C.a)(i,2),o=l[0],j=l[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:R.a.column,children:[Object(b.jsx)("div",{className:R.a.inputWrraper,children:Object(b.jsx)(L,{value:a,onChangeText:n,onEnter:s,error:c})}),Object(b.jsx)("div",{className:R.a.inputWrraper,children:Object(b.jsx)(L,{className:R.a.blue})}),Object(b.jsx)("div",{className:R.a.button,children:Object(b.jsx)(E,{children:"default"})}),Object(b.jsx)("div",{className:R.a.button,children:Object(b.jsx)(E,{red:!0,onClick:s,children:"Submit "})}),Object(b.jsx)("div",{className:R.a.button,children:Object(b.jsx)(E,{disabled:!0,children:"disabled"})}),Object(b.jsx)(X,{checked:o,onChangeChecked:j,children:"some text "}),Object(b.jsx)(X,{checked:o,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var $=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(k,{}),Object(b.jsx)(W,{}),Object(b.jsx)(D,{}),Object(b.jsx)(Y,{})]})},ee="/pre-junior",te="/junior",ae="/junior-plus";var re=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(j.a,{to:ee})}}),Object(b.jsx)(j.b,{path:ee,render:function(){return Object(b.jsx)($,{})}}),Object(b.jsx)(j.b,{path:te,render:function(){return Object(b.jsx)(h,{})}}),Object(b.jsx)(j.b,{path:ae,render:function(){return Object(b.jsx)(x,{})}}),Object(b.jsx)(j.b,{render:function(){return Object(b.jsx)(m,{})}})]})})},ne=a(3),ce=a.n(ne);var se=function(){return Object(b.jsxs)("nav",{children:[Object(b.jsx)("input",{type:"checkbox",id:"hmt",className:ce.a.hiddenMenuTicker}),Object(b.jsxs)("label",{className:ce.a.btnMenu,htmlFor:"hmt",children:[Object(b.jsx)("span",{className:ce.a.first}),Object(b.jsx)("span",{className:ce.a.second}),Object(b.jsx)("span",{className:ce.a.third})]}),Object(b.jsxs)("ul",{className:ce.a.hiddenMenu,children:[Object(b.jsx)("li",{className:ce.a.menuItem,children:Object(b.jsx)(o.b,{to:ee,className:ce.a.menuLink,activeClassName:ce.a.selected,children:"PreJunior"})}),Object(b.jsx)("li",{className:ce.a.menuItem,children:Object(b.jsx)(o.b,{to:te,className:ce.a.menuLink,activeClassName:ce.a.selected,children:"Junior"})}),Object(b.jsx)("li",{className:ce.a.menuItem,children:Object(b.jsx)(o.b,{to:ae,className:ce.a.menuLink,activeClassName:ce.a.selected,children:"Junior+"})})]})]})};var ie=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(se,{}),Object(b.jsx)(re,{})]})})};var le=function(){return Object(b.jsxs)("div",{className:l.a.App,children:[Object(b.jsx)("div",{className:l.a.title,children:"React Homeworks:"}),Object(b.jsx)("div",{className:l.a.main,children:Object(b.jsx)(ie,{})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(le,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.e63c2be9.chunk.js.map