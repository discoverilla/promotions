(this["webpackJsonpreact-chrono-custom-icons"]=this["webpackJsonpreact-chrono-custom-icons"]||[]).push([[0],{26:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(19),r=n.n(a),o=n(15),d=n(20),s=n(7),u=(n(26),n(16)),j=n(13),b=n(21),l=n(9),f=function(t){return{x:0,y:-4*t,scale:1,rot:20*Math.random()-10,delay:100*t}},O=function(t,e){return"perspective(1500px) rotateX(30deg) rotateY(".concat(t/10,"deg) rotateZ(").concat(t,"deg) scale(").concat(e,")")},v=function(t){var e=t.data,n=Object(c.useState)(!1),i=Object(s.a)(n,2),a=i[0],r=i[1],o=Object(c.useState)((function(){return new Set})),d=Object(s.a)(o,1)[0],v=Object(j.c)(e.length,(function(t){return Object(u.a)(Object(u.a)({},f(t)),{},{from:{x:0,rot:0,scale:1.5,y:-1e3}})})),p=Object(s.a)(v,2),h=p[0],g=p[1],x=Object(b.a)((function(t){var n=Object(s.a)(t.args,1)[0],c=t.down,i=Object(s.a)(t.delta,1)[0],a=(t.distance,Object(s.a)(t.direction,1)[0]),r=t.velocity,o=a<0?-1:1;!c&&r>.2&&d.add(n),g((function(t){if(n===t){var e=d.has(n);return{x:e?(200+window.innerWidth)*o:c?i:0,rot:i/100+(e?10*o*r:0),scale:c?1.1:1,delay:void 0,config:{friction:50,tension:c?800:e?200:500}}}})),c||d.size!==e.length||setTimeout((function(){return d.clear()||g((function(t){return f(t)}))}),600)})),m=function(){r(!1)},w=function(){r(!0)};return h.map((function(t,n){var c=t.x,i=t.y,r=t.rot,o=t.scale;return Object(l.jsx)(j.a.div,{style:{transform:Object(j.b)([c,i],(function(t,e){return"translate3d(".concat(t,"px,").concat(e,"px,0)")}))},onMouseDown:m,onMouseMove:w,onMouseUp:function(){return t=e[n].url,void(a||window.open(t,"_blank"));var t},children:Object(l.jsx)(j.a.div,Object(u.a)(Object(u.a)({},x(n)),{},{style:{transform:Object(j.b)([r,o],O),backgroundImage:"url(".concat(e[n].imgUrl,")")}}))},n)}))},p=[{id:"0000792"},{id:"0000001"},{id:"0000793"},{id:"0000002"},{id:"0000794"},{id:"0001054"},{id:"0001376"},{id:"0001853"},{id:"0002990"},{id:"0009800"},{id:"0009801"},{id:"0009802"},{id:"0009803"},{id:"0009804"},{id:"0009805"},{id:"0009806"},{id:"0009807"},{id:"0009808"},{id:"0008779"},{id:"0008780"},{id:"0008781"},{id:"0008782"},{id:"0008783"},{id:"0008784"},{id:"0008785"},{id:"0008786"},{id:"0000003"},{id:"0000004"},{id:"0000005"},{id:"0000006"},{id:"0001377"}],h=function(t){return"https://storage.googleapis.com/discoverilla-galaxy/thumbnail/128x128/".concat(t,".jpg")};function g(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)(Object(d.a)(Object(o.a)().mark((function t(){var e,n,c;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=[],n=Object(o.a)().mark((function t(n){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch((c=p[n].id,"https://storage.googleapis.com/discoverilla-galaxy/vision/".concat(c,".json"))).then((function(t){return t.json()})).then((function(t){var c={url:t.link,imgUrl:h(p[n].id)};e.push(c)}));case 2:case"end":return t.stop()}var c}),t)})),c=0;case 3:if(!(c<p.length)){t.next=8;break}return t.delegateYield(n(c),"t0",5);case 5:c++,t.next=3;break;case 8:i(e);case 9:case"end":return t.stop()}}),t)}))),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{id:"coverBlack"}),Object(l.jsx)("div",{id:"chrono-div",children:Object(l.jsx)(v,{data:n})})]})}var x=document.getElementById("root");r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(g,{})}),x)}},[[28,1,2]]]);
//# sourceMappingURL=main.921fc0e5.chunk.js.map