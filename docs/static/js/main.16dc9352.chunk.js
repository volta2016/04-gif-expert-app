(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/logo-gif-expert-app.640560cd.svg"},12:function(e,t,a){e.exports=a(21)},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),i=a(1),s=a(11),u=a(8),o=a.n(u),m=function(e){e.categories;var t=e.setCategories,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],u=c[1],m=function(e){e.preventDefault(),l.trim().length>2&&(t((function(e){return[l].concat(Object(s.a)(e))})),u(""))};return r.a.createElement("form",{onSubmit:m},r.a.createElement("p",null,l),r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",value:l,onChange:function(e){u(e.target.value)}}),r.a.createElement("button",{type:"submit",onChange:m},r.a.createElement("img",{className:"search__btn",src:".".concat(o.a),alt:"button search"}))),r.a.createElement("button",{className:"search__btn--clear",onClick:function(){t([])}},"Clear Gifs"))},p=a(3),f=a.n(p),d=a(5),g=a.n(d),E=a(9),h=function(){var e=Object(E.a)(g.a.mark((function e(t){var a,n,r,c,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=rEsg35kMJgcpu89M3sbOsXXeTd5BLxc6"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,l=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))};v.proTypes={title:f.a.string.isRequired,url:f.a.string.isRequired};var b=v,_=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){h(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,l=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"card-grid animate__animated animate__fadeIn"},t," ",r.a.createElement("span",{role:"img","aria-label":"stars"},"\ud83c\udf1f")),l&&r.a.createElement("div",{className:"spinner"}),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(b,Object.assign({key:e.id},e))}))))};_.protoTypes={category:f.a.string.isRequired};var x=_,y=a(10),O=a.n(y),j=function(){return r.a.createElement("header",null,r.a.createElement("figure",null,r.a.createElement("img",{className:"btn__search",src:".".concat(O.a),alt:"Logo Gif expert App"})))},N=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"line"}),r.a.createElement("small",null,"\xa9 Copyright 2021 Gif Expert App ",r.a.createElement("a",{href:"https://voltauxui.cl/"},"www.voltauxui.cl")))},k=function(e){e.defaultCategories;var t=Object(n.useState)(["One Punch"]),a=Object(i.a)(t,2),c=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Find your favorite gif ",r.a.createElement("span",{role:"img","aria-label":"smile"},"\ud83d\ude04")),r.a.createElement(m,{setCategories:l}),r.a.createElement("hr",null),r.a.createElement("ol",null,c.map((function(e){return r.a.createElement(x,{key:e,category:e})})))),r.a.createElement(N,null))};a(20);l.a.render(r.a.createElement(k,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/search.9f64d783.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.16dc9352.chunk.js.map