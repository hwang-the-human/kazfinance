(this.webpackJsonpkazfinance=this.webpackJsonpkazfinance||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),i=c.n(a),r=(c(38),c(19)),l=c.n(r),d=c(32),o=c(8),j=c(9),h=c(11),u=c(10),b=(c(40),c(41),c(42),c(12)),x=c.n(b),m=c(33),p=c.n(m),O=(c(61),c(20)),f=c(0),v=function(e){Object(h.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={data:{name:"",phone:"",email:"",city:""},errors:{}},e.validate=function(){var t={},c=e.state.data;return""===c.name&&(t.name="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),""===c.phone&&(t.phone="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),""===c.email&&(t.email="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),""===c.city&&(t.city="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),0===Object.keys(t).length?null:t},e.validateProperty=function(e){var t=e.name,c=e.value;if("name"===t){if(c.length<=2)return"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0431\u0443\u043a\u0432\u044b";if(c.length>=21)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 20 \u0431\u0443\u043a\u0432\u044b"}if("phone"===t){if(c.length<=10)return"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 9 \u0431\u0443\u043a\u0432\u044b";if(c.length>=13)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 12 \u0431\u0443\u043a\u0432\u044b"}if("email"===t){if(!c.includes("@")||!c.includes("mail"))return"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u0435\u043d";if(c.length>=31)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 30 \u0431\u0443\u043a\u0432"}if("city"===t){if(c.length<=2)return"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0431\u0443\u043a\u0432\u044b";if(c.length>=16)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 15 \u0431\u0443\u043a\u0432\u044b"}},e.handleSubmit=function(t){t.preventDefault();var c=e.validate();e.setState({errors:c||{}}),c||e.errors||e.doSubmit()},e.handleChange=function(t){var c=t.currentTarget,n=Object(O.a)({},e.state.errors),s=e.validateProperty(c);s?n[c.name]=s:delete n[c.name];var a=Object(O.a)({},e.state.data);a[c.name]=c.value,e.setState({data:a,errors:n})},e.handleCursor=function(t){var c=t.target.getBoundingClientRect().top;t.clientY-30<=c&&e.moveCursorToEnd(t.target)},e}return Object(j.a)(c,[{key:"renderButton",value:function(e){return Object(f.jsx)("button",{onClick:this.handleSubmit,className:"submit-form",type:"submit",children:e})}},{key:"renderInput",value:function(e,t){var c=this.state,n=c.data,s=c.errors;return Object(f.jsxs)("div",{className:"form",children:[Object(f.jsxs)("div",{className:"text-field",children:[Object(f.jsx)("input",{name:t,value:n[t],id:t,type:"text",autoComplete:"off",error:s[t],onChange:this.handleChange,required:!0}),Object(f.jsx)("label",{className:"label-name",children:Object(f.jsx)("span",{className:"content-name",children:e})})]}),s[t]&&Object(f.jsx)("p",{children:s[t]})]})}},{key:"moveCursorToEnd",value:function(e){if("number"==typeof e.selectionStart)e.selectionStart=e.selectionEnd=e.value.length;else if("undefined"!=typeof e.createTextRange){e.focus();var t=e.createTextRange();t.collapse(!1),t.select()}}}]),c}(n.Component),g=c(3),S=c(13),y=function(e){Object(h.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={currencies:{USDKZT:"",USDXAU:"",USDBTC:"",oil:""},data:{name:"",phone:"",email:"",city:""},errors:{},scrolled:!1,isSubmitted:!1},e.doSubmit=function(){var t=(new Date).getTime();if(t>=(localStorage.getItem("expire")||0)){x.a.post("/api/sendEmail",e.state.data),e.state.isSubmitted=!0;var c=t+6e5;localStorage.setItem("expire",c)}},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,n,s=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://apilayer.net/api/live?access_key=29441c0bec284edff6e3916c4df75c31&currencies=KZT,XAU,BTC&source=USD&format=1",t="https://api.eia.gov/series/?api_key=40693bc9d7dc317a7dfb6b0687cc263c&series_id=PET.RBRTE.D",e.next=4,x.a.get("http://apilayer.net/api/live?access_key=29441c0bec284edff6e3916c4df75c31&currencies=KZT,XAU,BTC&source=USD&format=1");case 4:return c=e.sent,e.next=7,x.a.get(t);case 7:n=e.sent,this.setState({currencies:c.data.quotes,oil:n.data.series[0].data[0][1]}),p.a.init({duration:2e3}),window.addEventListener("scroll",(function(){var e=window.scrollY<100;window.innerWidth<=768&&(e=10),!0!==e?s.setState({scrolled:!0}):s.setState({scrolled:!1})}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.currencies,c=e.oil,n=e.scrolled,s=e.isSubmitted,a=(1*t.USDKZT).toFixed(2),i=(1/t.USDXAU).toFixed(2),r=(1/t.USDBTC).toFixed(2),l=(1*c).toFixed(2),d=(new Date).getTime(),o=(localStorage.getItem("expire")-d)/6e4|0;return Object(f.jsx)("div",{className:"bg-image",children:Object(f.jsxs)("div",{className:"bg-color",children:[Object(f.jsxs)("div",{className:"ticker-box",id:"main",children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:["USD | ",a," KZT"]}),Object(f.jsxs)("p",{children:["XAUUSD | ",i," USD"]}),Object(f.jsxs)("p",{children:["BTC | ",r," USD"]}),Object(f.jsxs)("p",{children:["BRENT | ",l," USD"]})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:["USD | ",a," KZT"]}),Object(f.jsxs)("p",{children:["XAUUSD | ",i," USD"]}),Object(f.jsxs)("p",{children:["BTC | ",r," USD"]}),Object(f.jsxs)("p",{children:["BRENT | ",l," USD"]})]})]}),Object(f.jsxs)("nav",{className:n?"is-scrolled":"",children:[Object(f.jsxs)("ul",{"data-aos":"fade",children:[Object(f.jsx)("li",{children:Object(f.jsx)(g.Link,{to:"main",smooth:!0,duration:1e3,children:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435"})}),Object(f.jsx)("li",{children:Object(f.jsx)(g.Link,{to:"why",smooth:!0,duration:1e3,offset:-45,children:"\u041e \u043d\u0430\u0441"})}),Object(f.jsx)("li",{children:Object(f.jsx)(g.Link,{to:"consultation",smooth:!0,duration:1e3,offset:-45,children:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f"})})]}),Object(f.jsxs)("div",{className:"info-box","data-aos":"fade",children:[Object(f.jsx)(S.c,{className:"icon"}),Object(f.jsx)("span",{children:"+7(777)-115-65-64"}),Object(f.jsx)(S.b,{className:"icon"}),Object(f.jsx)("p",{children:"support@kazfinance.com info@kazfinance.com"}),Object(f.jsx)(S.a,{className:"icon"}),Object(f.jsx)("p",{children:"\u0411\u0435\u043a\u0445\u043e\u0436\u0438\u043d\u0430, 15\u0430"})]})]}),Object(f.jsx)("img",{className:"logo-image",src:"images/logo.png",alt:"","data-aos":"zoom-in"}),Object(f.jsx)("p",{"data-aos":"fade-up",children:"\u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0440\u0443\u0439 \u0432 \u0441\u0432\u043e\u0435 \u0431\u0443\u0434\u0443\u0449\u0435\u0435!"}),Object(f.jsx)("i",{className:n?"isSelected-arrow-down":"arrow-down","data-aos":"fade-up"}),Object(f.jsx)("div",{className:"title-1",id:"why",children:"\u041e \u041d\u0410\u0421"}),Object(f.jsxs)("div",{className:"person-box","data-aos":"fade-up",children:[Object(f.jsxs)("div",{className:"para-1",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{className:"person-image",src:"/images/AE.jpg",alt:""}),Object(f.jsx)("p",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440"}),Object(f.jsx)("p",{children:"\u0422\u041e\u041e KAZFINANCE"}),Object(f.jsx)("p",{children:"\u0423\u0442\u0435\u0443\u043b\u0438\u043d \u0410\u0439\u043d\u0430\u0440 \u0415\u0440\u0438\u043a\u043e\u0432\u0438\u0447"})]}),Object(f.jsx)("p",{className:"text",children:"\u0412 \u043d\u0430\u0448\u0435 \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0436\u0438\u0437\u043d\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0443\u0440\u043e\u0432\u043d\u0435\u043c \u0431\u043b\u0430\u0433\u043e\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430. \u041a\u0430\u0436\u0434\u044b\u0439 \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u0440\u0435\u0448\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0432\u043e\u043f\u0440\u043e\u0441 \u043f\u043e-\u0440\u0430\u0437\u043d\u043e\u043c\u0443, \u043a\u0442\u043e-\u0442\u043e \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u043f\u043e \u043a\u0430\u0440\u044c\u0435\u0440\u043d\u043e\u0439 \u043b\u0435\u0441\u0442\u043d\u0438\u0446\u0435 \u043d\u0430 \u043d\u0430\u0435\u043c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u0435, \u043a\u0442\u043e-\u0442\u043e \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\xa0\u0436\u0438\u0437\u043d\u0438,\xa0\u0437\u0430\u043d\u0438\u043c\u0430\u044f\u0441\u044c \u0431\u0438\u0437\u043d\u0435\u0441\u043e\u043c, \u043a\u0442\u043e-\u0442\u043e \u043f\u044b\u0442\u0430\u0435\u0442 \u0441\u0447\u0430\u0441\u0442\u044c\u044f \u043d\u0430 \u0442\u0435\u043d\u0434\u0435\u0440\u043d\u044b\u0445 \u0431\u0438\u0440\u0436\u0430\u0445, \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u044f\u0442\u044c \u0431\u0435\u0437 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438, \u043d\u043e \u0435\u0441\u043b\u0438 \u0437\u0430\u0434\u0443\u043c\u0430\u0442\u044c\u0441\u044f, \u0440\u0430\u0437\u0432\u0435 \u0438\u043c\u0435\u043d\u043d\u043e \u0432\u044b\u0431\u043e\u0440 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0433\u043e \u0432\u0438\u0434\u0430 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442 \u043d\u0430\u043c \u0443\u0441\u043f\u0435\u0445 \u0438 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u0443\u044e \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c? \u041d\u0430\u0448\u0438 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0435 \u043f\u043e\u0438\u0441\u043a\u0438 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u043e\u0434\u0430 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0435\u0437 \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u0440\u0438\u0441\u043a\u043e\u0432 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442\u044c \u043d\u0430\u043c \u0432\u044b\u0441\u043e\u043a\u0438\u0435 \u0434\u043e\u0445\u043e\u0434\u044b \u0434\u043e \u043a\u043e\u043d\u0446\u0430 \u043d\u0430\u0448\u0438\u0445 \u0434\u043d\u0435\u0439, \u043f\u0440\u0438\u0432\u043e\u0434\u044f\u0442\xa0\u043d\u0430\u0441 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0442\u043e\u0447\u043a\u0435 \u0441\u0442\u0430\u0440\u0442\u0430 \u0441\u043d\u043e\u0432\u0430 \u0438 \u0441\u043d\u043e\u0432\u0430, \u0433\u0434\u0435 \u043c\u044b \u0437\u0430\u0434\u0430\u0435\u043c\u0441\u044f \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u043c, \u0447\u0435\u043c \u0431\u044b \u043d\u0430\u043c \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f."})]}),Object(f.jsx)("p",{className:"text",children:'\u0417\u0430\u0434\u0443\u043c\u0430\u0439\u0442\u0435\u0441\u044c, \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u0433\u0430\u0442\u044b\u043c, \u0437\u0430\u043d\u0438\u043c\u0430\u044f\u0441\u044c \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u043b\u044e\u0431\u044b\u043c \u0432\u0438\u0434\u043e\u043c \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0432 \u043b\u044e\u0431\u043e\u0439 \u0441\u0444\u0435\u0440\u0435, \u0433\u043b\u0430\u0432\u043d\u043e\u0435 - \u044d\u0442\u043e \u0431\u044b\u0442\u044c \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u043e \u0433\u0440\u0430\u043c\u043e\u0442\u043d\u044b\u043c, \u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0435 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u0432\u0430\u0448\u0438\u0445 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0434\u043d\u0435\u0439, \u0432\u0435\u0434\u044c \u0443\u0431\u0435\u0440\u0435\u0447\u044c \u0441\u0432\u043e\u0438 \u0434\u0435\u043d\u044c\u0433\u0438 \u0441\u0442\u043e\u0438\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0442\u0440\u0443\u0434\u043e\u0432, \u0447\u0435\u043c \u0434\u043e\u0431\u044b\u0442\u044c \u0438\u0445. \u0414\u0435\u043d\u044c\u0433\u0438 \u043a\u0430\u043a \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0438\u044f: \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043b\u0435\u0433\u0447\u0435, \u0447\u0435\u043c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c. \u0415\u0441\u043b\u0438 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u0432\u043a\u0440\u0430\u0442\u0446\u0435, \u0442\u043e \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 - \u044d\u0442\u043e \u0441\u043f\u043e\u0441\u043e\u0431 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u043f\u0440\u0438\u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u044f \u0443\u0436\u0435 \u0438\u043c\u0435\u044e\u0449\u0438\u0445\u0441\u044f \u0441\u0440\u0435\u0434\u0441\u0442\u0432, \u0438 \u043d\u0430 \u043b\u0438\u0447\u043d\u043e\u043c \u043e\u043f\u044b\u0442\u0435, \u043c\u043e\u0433\u0443 \u0432\u0430\u0441 \u0437\u0430\u0432\u0435\u0440\u0438\u0442\u044c, \u0447\u0442\u043e \u043f\u043e\u0434 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u043c "\u0443\u0436\u0435 \u0438\u043c\u0435\u044e\u0449\u0438\u0445\u0441\u044f \u0441\u0440\u0435\u0434\u0441\u0442\u0432" \u044f \u043d\u0435 \u0438\u043c\u0435\u044e \u0432 \u0432\u0438\u0434\u0443 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u044b \u0438\u043b\u0438 \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u044b \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0445 \u0434\u0435\u043d\u0435\u0433. \u041f\u043e\u0440\u0430 \u043c\u0435\u043d\u044f\u0442\u044c \u0441\u0432\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432, \u0438 \u0442\u043e\u0433\u0434\u0430, \u0412\u044b \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u0441\u044c, \u043a\u0430\u043a \u0412\u0430\u0448\u0430 \u0436\u0438\u0437\u043d\u044c \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f, \u043a\u0430\u043a \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0430\u0441\u044c \u043a\u043e\u0433\u0434\u0430-\u0442\u043e \u043c\u043e\u044f.'})]}),Object(f.jsx)("div",{className:"video-container","data-aos":"fade-up",children:Object(f.jsx)("iframe",{width:"80%",height:"100%",src:"https://www.youtube.com/embed/HchmMsUgsPI?autoplay=0&mute=0",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,webkitallowfullscreen:"true",mozallowfullscreen:"true"})}),Object(f.jsxs)("div",{className:"why-box","data-aos":"fade-up",children:[Object(f.jsx)("p",{children:"\u0412 \u043d\u044b\u043d\u0435\u0448\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 - \u044d\u0442\u043e \u043d\u0435\u043e\u0442\u044a\u0435\u043c\u043b\u0435\u043c\u044b\u0439 \u044d\u0442\u0430\u043f \u0432 \u0436\u0438\u0437\u043d\u0438 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430, \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u043e\u0436\u043d\u043e \u043a\u0430\u043a \u0432 10, \u0442\u0430\u043a \u0438 \u0432 100 \u043b\u0435\u0442. \u041c\u044b \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0438 \u043d\u0435\u043f\u0440\u0438\u043d\u0443\u0436\u0434\u0435\u043d\u043d\u044b\u043c, \u0442.\u043a \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u0430\u044f \u0433\u0440\u0430\u043c\u043e\u0442\u043d\u043e\u0441\u0442\u044c - \u044d\u0442\u043e \u0432\u0441\u0435\u0433\u0434\u0430 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0438 \u043d\u0443\u0436\u043d\u0430\u044f \u0442\u0435\u043c\u0430 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u0432 \u043d\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0435. \u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043d\u0435 \u043d\u0430 \u043d\u0430\u0448\u0435\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u0435, \u0441\u0440\u0435\u0434\u0438 20 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u043d\u0442 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u043e \u0433\u0440\u0430\u043c\u043e\u0442\u043d\u044b\u0445 \u043b\u044e\u0434\u0435\u0439 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 0.9%, \u044d\u0442\u043e \u043a\u0440\u0430\u0439\u043d\u0435 \u043f\u0435\u0447\u0430\u043b\u044c\u043d\u044b\u0435 \u0446\u0438\u0444\u0440\u044b. \u041c\u044b \u043a\u0430\u043a \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0449\u0435\u0435\u0441\u044f \u043d\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438 \u0438\u043c\u0435\u043d\u043d\u043e \u043d\u0430 \u0444\u0438\u043d.\u0433\u0440\u0430\u043c\u043e\u0442\u043d\u043e\u0441\u0442\u0438 \u043a\u0440\u0430\u0439\u043d\u0435 \u043e\u0437\u0430\u0434\u0430\u0447\u0435\u043d\u044b \u044d\u0442\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439."}),Object(f.jsx)("p",{children:"\u0422\u0430\u043a \u043f\u043e\u0447\u0435\u043c\u0443 \u0436\u0435 \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435 \u0442\u0430\u043a \u043c\u0430\u043b\u043e \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u043e \u0433\u0440\u0430\u043c\u043e\u0442\u043d\u044b\u0445 \u043b\u044e\u0434\u0435\u0439?! \u041e\u0442\u0432\u0435\u0442 \u043f\u0440\u043e\u0441\u0442, \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043a \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u044e \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432 \u0438 \u043d\u0430\u0443\u043a, \u043b\u044e\u0431\u043e\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043e\u043a\u043e\u043d\u0447\u0438\u0432\u0448\u0438\u0439 \u0448\u043a\u043e\u043b\u0443 \u0443\u043c\u0435\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0438 \u043f\u0438\u0441\u0430\u0442\u044c, \u043d\u043e \u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0443\u0447\u0438\u043b\u0438 \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u044b\u043c \u0432\u0435\u0449\u0430\u043c:\u043a\u0430\u043a \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0438 \u043f\u0440\u0435\u0443\u043c\u043d\u043e\u0436\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u0434\u0435\u043d\u044c\u0433\u0438? \u041e\u0442 \u0447\u0435\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 \u0412\u0430\u043b\u044e\u0442\u044b, \u043f\u043e\u0447\u0435\u043c\u0443 \u0442\u0430\u043a\u0438\u0435 \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u044b \u043d\u0430 \u043a\u0440\u0435\u0434\u0438\u0442 \u0432 \u0431\u0430\u043d\u043a\u0435. \u041e\u043d \u043c\u043e\u0436\u0435\u0442 \u0437\u043d\u0430\u0442\u044c \u0432\u044b\u0441\u0448\u0443\u044e \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0443, \u043d\u043e \u043e\u043d \u043d\u0435 \u0437\u043d\u0430\u0435\u0442 \u043f\u043e\u0447\u0435\u043c\u0443 \u0438\u043d\u0444\u043b\u044f\u0446\u0438\u044f \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435 \u0440\u0430\u0441\u0442\u0435\u0442 \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e."}),Object(f.jsx)("p",{children:"\u041d\u0430\u0448\u0435 \u0441\u043a\u0440\u043e\u043c\u043d\u043e\u0435 \u043c\u043d\u0435\u043d\u0438\u0435 \u0442\u0430\u043a\u043e\u0432\u043e - \u0424\u0438\u043d.\u0433\u0440\u0430\u043c\u043e\u0442\u043d\u043e\u0441\u0442\u044c - \u044d\u0442\u043e \u0442\u043e\u0442 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0441 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043d\u043e \u0442.\u043a \u043c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f, \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u0438\u043c\u0435\u043d\u043d\u043e \u0432\u0430\u0441, \u0432\u044b \u043f\u0440\u043e\u0439\u0434\u044f \u044d\u0442\u043e\u0442 \u043a\u0443\u0440\u0441, \u0437\u0430\u0436\u0438\u0432\u0435\u0442\u0435 \u043f\u043e \u043d\u043e\u0432\u043e\u043c\u0443, \u0442\u0430\u043a\u0438\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u044b \u043a\u0430\u043a \u0438\u043d\u0444\u043b\u044f\u0446\u0438\u044f \u0438 \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0441\u0442\u0430\u043d\u0443\u0442 \u043e\u0431\u044b\u0434\u0435\u043d\u043d\u044b\u043c\u0438 \u0434\u043b\u044f \u0432\u0430\u0441. \u0417\u0430\u0434\u0443\u043c\u0430\u0439\u0442\u0435\u0441\u044c... \u041c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0448\u043b\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u0436\u0438\u0437\u043d\u044c \u0432 \u043b\u0443\u0447\u0448\u0443\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u0422\u0435\u043c \u0431\u043e\u043b\u0435\u0435 \u043f\u0435\u0440\u0432\u0430\u044f \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0439\u0434\u0451\u0442 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e. \u0425\u0432\u0430\u0442\u0438\u0442 \u0431\u043e\u044f\u0442\u044c\u0441\u044f \u0437\u043d\u0430\u043d\u0438\u0439, \u0445\u0432\u0430\u0442\u0438\u0442 \u0431\u043e\u044f\u0442\u044c\u0441\u044f \u0441\u043f\u0440\u043e\u0441\u0438\u0442\u044c."})]}),Object(f.jsx)("div",{className:"title-1",id:"consultation",children:"\u041a\u041e\u041d\u0421\u0423\u041b\u042c\u0422\u0410\u0426\u0418\u042f"}),Object(f.jsxs)("div",{className:"courses-box","data-aos":"fade-up",children:[Object(f.jsxs)("ul",{children:[Object(f.jsx)("p",{children:"\u041f\u043e \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0438 \u043a\u0443\u0440\u0441\u0430 \u0432\u044b: "}),Object(f.jsx)("li",{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u043e \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0438 \u043a\u0443\u0440\u0441\u0430"}),Object(f.jsx)("li",{children:"\u0423\u0437\u043d\u0430\u0435\u0442\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0438 \u0438 \u0431\u0443\u0434\u0435\u0442\u0435 \u0432 \u043a\u0443\u0440\u0441\u0435 \u0432\u0441\u0435\u0445 \u043c\u0438\u0440\u043e\u0432\u044b\u0445 \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u0438 \u0438\u0445 \u0432\u0437\u0430\u0438\u043c\u043e\u0441\u0432\u044f\u0437\u044c \u0441 \u043d\u0430\u0448\u0435\u0439 \u043f\u043e\u0432\u0441\u0435\u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0436\u0438\u0437\u043d\u044c\u044e"}),Object(f.jsx)("li",{children:"\u041d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u0442\u044c \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u0438 \u043e\u0441\u043d\u043e\u0432\u044b\u0432\u0430\u044f\u0441\u044c \u043d\u0430 \u044d\u0442\u0438\u0445 \u0437\u043d\u0430\u043d\u0438\u044f\u0445"})]}),Object(f.jsxs)("div",{className:"course",children:[Object(f.jsx)("div",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u0443\u0440\u0441"}),Object(f.jsx)("div",{children:"\u041e\u0441\u043d\u043e\u0432\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0444\u0438\u043d\u0430\u043d\u0441\u0430\u043c\u0438"}),Object(f.jsxs)("div",{className:"prices-box",children:[Object(f.jsx)("div",{children:"30000\u0442\u0433"}),Object(f.jsx)("div",{children:"45000\u0442\u0433"})]}),Object(f.jsx)("div",{children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435!"}),Object(f.jsx)(g.Link,{className:"scroll-button",to:"Consultation",smooth:!0,duration:1e3,children:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]}),Object(f.jsxs)("div",{className:"course",children:[Object(f.jsxs)("div",{children:["\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439",Object(f.jsx)("br",{}),"\u041a\u0443\u0440\u0441"]}),Object(f.jsxs)("div",{children:["\u0412\u0438\u0434\u044b \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438,",Object(f.jsx)("br",{}),"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044f"]}),Object(f.jsxs)("div",{className:"prices-box",children:[Object(f.jsx)("div",{children:"70000\u0442\u0433"}),Object(f.jsx)("div",{children:"85000\u0442\u0433"})]}),Object(f.jsx)("div",{children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435!"}),Object(f.jsx)(g.Link,{className:"scroll-button",to:"Consultation",smooth:!0,duration:1e3,children:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}),Object(f.jsx)("span",{children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0439"})]})]}),Object(f.jsxs)("form",{className:"form-box",onClick:this.handleCursor,"data-aos":"fade-up",id:"Consultation",children:[Object(f.jsx)("h1",{children:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e!"}),this.renderInput("\u0418\u043c\u044f \u0438 \u0424\u0430\u043c\u0438\u043b\u0438\u044f","name"),this.renderInput("\u0422\u0435\u043b\u0435\u0444\u043e\u043d","phone"),this.renderInput("\u041f\u043e\u0447\u0442\u0430","email"),this.renderInput("\u0413\u043e\u0440\u043e\u0434","city"),Object(f.jsxs)("div",{children:[s&&Object(f.jsx)("p",{style:{color:"green"},children:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e!"}),o>0&&Object(f.jsx)("p",{children:"\u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u044f\u0432\u043a\u0443, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 "+o+(o>3?" \u043c\u0438\u043d\u0443\u0442":" \u043c\u0438\u043d\u0443\u0442\u044b")})]}),this.renderButton("\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")]})]})})}}]),c}(v),N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),N()}},[[73,1,2]]]);
//# sourceMappingURL=main.b934e3bb.chunk.js.map