(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){e.exports=t(254)},106:function(e,a,t){},116:function(e,a,t){},228:function(e,a,t){},239:function(e,a,t){},247:function(e,a,t){},248:function(e,a,t){},249:function(e,a,t){e.exports=t.p+"static/media/IMG_7384.3de5ad02.jpg"},250:function(e,a,t){},251:function(e,a,t){e.exports=t.p+"static/media/IMG_7392.5baec0f5.jpg"},252:function(e,a,t){},253:function(e,a,t){},254:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(20),s=t.n(r),c=(t(106),t(7)),i=t(8),l=t(10),m=t(9),u=t(11),d=t(21),p=t(99),f=t.n(p),h=t(100),v=t.n(h),g=t(23),E=t.n(g),b=t(22),j=t(93),O=t(97),_=t.n(O),w=t(25),k=t.n(w),y=t(96),N=t.n(y),x=t(94),C=t.n(x),q=t(36),A=t.n(q),D=(t(116),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={top:!1,left:!1,bottom:!1,right:!1,anchorEl:null,selectedIndex:0},t.toggleDrawer=function(e,a){return function(){t.setState(Object(j.a)({},e,a))}},t.handleClickListItem=function(e){t.setState({anchorEl:e.currentTarget})},t.handleMenuItemClick=function(e,a){t.setState({selectedIndex:a,anchorEl:null})},t.handleClose=function(){t.setState({anchorEl:null})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,t=o.a.createElement("div",{className:a.list},o.a.createElement(C.a,null,["Home"].map(function(a,t){return o.a.createElement(b.Link,{to:"home_content",smooth:!0,offset:0,duration:500,key:a},o.a.createElement(A.a,{onClick:e.toggleDrawer("right",!1)},a))}),["Quem somos"].map(function(a,t){return o.a.createElement(b.Link,{to:"about_us",smooth:!0,offset:0,duration:500,key:a},o.a.createElement(A.a,{onClick:e.toggleDrawer("right",!1)},a))}),["As nossas velas"].map(function(a,t){return o.a.createElement(b.Link,{to:"candles",smooth:!0,offset:0,duration:500,key:a},o.a.createElement(A.a,{onClick:e.toggleDrawer("right",!1)},a))}),["Contactos"].map(function(a,t){return o.a.createElement(b.Link,{to:"footer",offset:0,smooth:!0,duration:500,key:a},o.a.createElement(A.a,{onClick:e.toggleDrawer("right",!1)},a))})));return o.a.createElement("div",{className:a.root},o.a.createElement(k.a,{onClick:this.toggleDrawer("right",!0),className:a.menuButton,color:"inherit","aria-label":"Menu"},o.a.createElement(N.a,null)),o.a.createElement(_.a,{anchor:"right",open:this.state.right,onClose:this.toggleDrawer("right",!1),onOpen:this.toggleDrawer("right",!0)},o.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("right",!1),onKeyDown:this.toggleDrawer("right",!1)},t)))}}]),a}(o.a.Component)),I=Object(d.withStyles)({list:{width:250},sideList:{width:"auto"}})(D),G=t(57),S=t.n(G),L=(t(228),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(S.a,{variant:"h6",color:"inherit",className:e.grow},o.a.createElement(b.Link,{id:"logo",to:"home_content",smooth:!0,offset:0,duration:500},"Aroma"))}}]),a}(n.Component)),z=Object(d.withStyles)({root:{flexGrow:1},grow:{flexGrow:1}})(L),H=t(98),M=t.n(H),P=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.destination,t=e.text;return o.a.createElement(b.Link,{className:"navigation__link",smooth:!0,to:a,offset:0,duration:500},t)}}]),a}(n.Component);t(239);var B=Object(d.withStyles)({root:{flexGrow:1},grow:{flexGrow:1}})(function(e){var a=e.classes;return o.a.createElement("div",{id:"navBar",className:a.root},o.a.createElement(M.a,null,o.a.createElement(f.a,{position:"static"},o.a.createElement(v.a,{className:"navBar_toolbar"},o.a.createElement(z,null),o.a.createElement(E.a,{xsDown:!0},o.a.createElement(P,{destination:"home_content",text:"Home"}),o.a.createElement(P,{destination:"about_us",text:"Quem somos"}),o.a.createElement(P,{destination:"candles",text:"As nossas velas"}),o.a.createElement(P,{destination:"footer",text:"Contactos"})),o.a.createElement(E.a,{smUp:!0},o.a.createElement(I,null))))))}),T=(t(247),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e="Aroma",a="O teu conforto";return o.a.createElement("div",{id:"home_content",className:"fullHeight lineHeight bgColor"},o.a.createElement("div",{className:"home__text"},o.a.createElement("h1",null,e),o.a.createElement("h2",null,a)))}}]),a}(n.Component)),Q=(t(248),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getPageText",value:function(){return["A nossa marca foi criada ap\xf3s o confinamento enquanto procurei transformar a minha casa num local sereno, acolhedor e bem decorado. Juntando o meu gosto por velas, pela luz de uma pequena chama, pela arte e pela decora\xe7\xe3o sofisticada que cada uma traz ao ambiente criei a minha nova paix\xe3o \u2013 AROMA","Este \xe9 o valor do nosso pequeno neg\xf3cio: o amor e o cuidado em cada detalhe de cada produto. A nossa miss\xe3o \xe9 criar velas para todos os gostos porque acreditamos que assim vamos conseguir fazer a diferen\xe7a e tornar a experi\xeancia de cada um \xfanica.","As nossas velas s\xe3o feitas \xe0 m\xe3o na integra e tentamos adaptar todos os elementos a todos os clientes \u2013 n\xe3o somos uma grande empresa, somos uma empresa grande com voc\xeas. Gostamos que cada cliente se sinta envolvido em todo o processo que podemos adaptar para ele, tornando a experi\xeancia \xfanica e confort\xe1vel desde o primeiro contacto. ","A sustentabilidade ambiental \xe9 uma raz\xe3o de preocupa\xe7\xe3o da nossa marca. Podemos tornar o nosso ambiente sereno e acolhedor sem prejudicar os demais. Todos os produtos s\xe3o adquiridos com essa prioridade e estamos dedicados a entender o impacto que causamos e a aplicar esfor\xe7os para o reduzir. As nossas velas s\xe3o completamente veganas, feitas apenas de cera de soja."]}},{key:"render",value:function(){var e={title:"Quem somos",image:t(249),content:this.getPageText()};return o.a.createElement("div",{id:"about_us",className:"fullHeight bgColor flex"},o.a.createElement("section",{className:"flex"},o.a.createElement("div",null,o.a.createElement("h2",{className:"about_us__title main_title"},e.title)),o.a.createElement(E.a,{smUp:!0},o.a.createElement("img",{src:e.image,alt:e.title,className:"about_us__photo1"}),o.a.createElement("br",null))),o.a.createElement("section",null,o.a.createElement(E.a,{xsDown:!0},o.a.createElement("div",{className:"column"},o.a.createElement("img",{src:e.image,alt:e.title,className:"about_us__photo1"}),o.a.createElement("br",null))),o.a.createElement("div",{className:"column"},o.a.createElement("div",null,e.content.map(function(e){return o.a.createElement("div",null,o.a.createElement("span",{className:"about_us__content"},e),o.a.createElement("br",null))})))))}}]),a}(n.Component)),R=(t(250),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"GetOurCare",value:function(){return["As nossas velas e pavios s\xe3o sempre testados mesmo que a maioria das velas com figuras seja usada apenas para decora\xe7\xe3o de interiores ou para oferecer em ocasi\xf5es especiais. ","Por serem completamente feitas \xe0 m\xe3o podem tornar-se um pouco diferentes a n\xedvel de cor, cheiro ou forma como queimam. Dependendo de algumas condi\xe7\xf5es que n\xe3o controlamos, como a temperatura, as vossas velas podem ter pequenas marcas brancas, conhecidas como \u201cFrosting\u201d, o que \xe9 muito normal e comum em velas 100% de cera de soja. N\xe3o afetanto a maneira como queimam, torna-as completamente \xfanicas."]}},{key:"GetYourCare",value:function(){return["Queremos que as vossas encomendas sejam sempre proveitosas quer adquiram uma vela para queimar, para objeto de decora\xe7\xe3o ou para oferecer a algu\xe9m muito querido. Para refor\xe7ar este objetivo deixo-vos alguns cuidados a seguir:","","\u2022 Apare o pavio antes de cada utiliza\xe7\xe3o. Pode utilizar uma tesoura normal. Isto vai evitar fumo excessivo e ajuda a que a vela queime normalmente;","\u2022 Acenda sempre as suas velas numa base \xe0 prova de fogo, pr\xf3pria para o efeito. A cera vai derreter e a base deve ser suficiente para que a cera n\xe3o escorra para fora;","\u2022 N\xe3o mexa a vela enquanto est\xe1 acesa e/ou ainda liquida ap\xf3s derreter;","\u2022 Acenda as suas velas apenas quando est\xe1 presente e com possibilidade de as vigiar. Mantenha-as afastadas de crian\xe7as, animais e superf\xedcies inflam\xe1veis;","\u2022 Tenha cuidado com correntes de ar e/ou ventoinhas que podem mudar o sentido da chama, prejudicando a vela e podendo causar acidentes;"]}},{key:"render",value:function(){var e={title:"As nossas Velas",image:t(251),our_care_title:"Ao nosso cuidado",our_care:this.GetOurCare(),your_care_title:"Ao seu cuidado",your_care:this.GetYourCare()};return o.a.createElement("div",{id:"candles",className:"fullHeight bgColor flex"},o.a.createElement("section",{className:"flex"},o.a.createElement("div",null,o.a.createElement("h2",{className:"candles__title main_title"},e.title)),o.a.createElement(E.a,{smUp:!0},o.a.createElement("img",{src:e.image,alt:e.title,className:"candles__photo1"}),o.a.createElement("br",null))),o.a.createElement("section",null,o.a.createElement("div",{className:"column"},o.a.createElement("h4",{className:"candles__title main_title"},e.our_care_title),e.our_care.map(function(e){return o.a.createElement("div",null,o.a.createElement("span",{className:"candles__content"},e),o.a.createElement("br",null))})),o.a.createElement(E.a,{xsDown:!0},o.a.createElement("div",{className:"column"},o.a.createElement("img",{src:e.image,alt:e.title,className:"candles__photo1"}))),o.a.createElement("div",{className:"column"},o.a.createElement("h4",{className:"candles__title main_title"},e.your_care_title),e.your_care.map(function(e){return o.a.createElement("div",null,o.a.createElement("span",{className:"about_us__content"},e),o.a.createElement("br",null))}))))}}]),a}(n.Component)),J=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"home"},o.a.createElement(B,null),o.a.createElement(T,null),o.a.createElement(Q,null),o.a.createElement(R,null))}}]),a}(n.Component);var U=Object(d.withStyles)(function(e){return{margin:{margin:e.spacing.unit},extendedIcon:{marginRight:e.spacing.unit}}})(function(e){var a=e.classes;return o.a.createElement("div",null,o.a.createElement(k.a,{className:a.margin,onClick:function(){var e="https://wa.me/".concat("351914860322","?text=").concat("Ol\xe1, como poderia obter mais informa\xe7\xf5es?");window.open(e)}},o.a.createElement("i",{className:"fab fa-whatsapp"})))});var W=Object(d.withStyles)(function(e){return{margin:{margin:e.spacing.unit},extendedIcon:{marginRight:e.spacing.unit}}})(function(e){var a=e.classes;return o.a.createElement("div",null,o.a.createElement(k.a,{className:a.margin,onClick:function(){var e="https://instagram.com/".concat("o.teu.aroma","/");window.open(e)}},o.a.createElement("i",{className:"fab fa-instagram"})))});var Y=Object(d.withStyles)(function(e){return{margin:{margin:e.spacing.unit},extendedIcon:{marginRight:e.spacing.unit}}})(function(e){var a=e.classes;return o.a.createElement("div",null,o.a.createElement(k.a,{className:a.margin,onClick:function(){var e="https://facebook.com/profile.php?id=".concat("100084877923996");window.open(e)}},o.a.createElement("i",{className:"fab fa-facebook-square"})))}),F=(t(252),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"footer"},o.a.createElement("div",{className:"social"},o.a.createElement(U,null),o.a.createElement(W,null),o.a.createElement(Y,null)))}}]),a}(n.Component)),K=(t(253),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(J,null),o.a.createElement(F,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[101,1,2]]]);
//# sourceMappingURL=main.34f42b1a.chunk.js.map