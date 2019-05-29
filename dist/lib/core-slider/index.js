!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e){t.exports='<div id="button">\n  <span><slot></slot></span>\n</div>'},function(t,e){t.exports='<div class="modal">\n  <div class="modal-content">\n    <div class="modal-header">\n      <span class="close">&times;</span>\n      <slot name="header"><h1>Default text</h1></slot>\n    </div>\n    <div class="modal-body">\n      <slot></slot>\n    </div>\n  </div>\n</div>'},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);const o={tiny:"tiny",xsmall:"xsmall",small:"small",medium:"medium",large:"large"},s={primary:"primary",secondary:"secondary",dark:"dark"},a=document.createElement("template");a.innerHTML=r.a;const l=document.createElement("style");l.innerHTML='#button {\n\ttext-align: center;\n\tborder: 0.3rem solid #a5a5a5; /* default color is light grey*/\n\tpadding: 0 5px;\n\theight: 3rem;\n\tline-height: 3rem;\n\tdisplay: inline-block;\n\t\n\t/* transition-duration:0.4s; */\n\tcursor: pointer;\n}\n\n#button:hover{\n\tbackground-color: #a5a5a5; /* default color is light grey*/\n\tcolor: white;\n}\n\n.shadow{\n\tbox-shadow: 0 12px 16px 0 rgba(0,0,0,0.24);\n}\n\n.rounded{\n\tborder-radius: 1rem;\n}\n\n/* rules for default size circle */\n#button.circle{\n\tborder-radius: 50%;\n\toverflow: hidden;\n\twidth: 4rem;\n\theight: 4rem;\n\tline-height: 4rem;\n}\n\n/* rules for small size circle */\n#button.small.circle{\n\twidth: 3rem;\n\theight: 3rem;\n\tline-height: 3rem;\n}\n\n/* rules for medium size circle */\n#button.medium.circle{\n\twidth: 5rem;\n\theight: 5rem;\n\tline-height: 5rem;\n}\n\n/* rules for large size circle */\n#button.large.circle{\n\twidth: 6rem;\n\theight: 6rem;\n\tline-height: 6rem;\n}\n\n/* rules for tiny size button */\n#button.tiny {\n\tfont-size: 10px;\n\theight: 1.2rem;\n\tline-height: 1.2rem;\n}\n\n/* rules for extra small size button */\n#button.xsmall {\n\tfont-size: 12px;\n\theight: 1.5rem;\n\tline-height: 1.5rem;\n}\n\n/* rules for small size button */\n#button.small{\n\tfont-size: 14px;\n\twidth: 4rem;\n\theight: 2rem;\n\tline-height: 2rem;\n}\n\n/* rules for medium size button */\n#button.medium{\n\tfont-size: 16px;\n\twidth: 7rem;\n\theight: 4rem;\n\tline-height: 4rem;\n}\n\n/* rules for large size button */\n#button.large{\n\tfont-size: 22px;\n\twidth: 10rem;\n\theight: 5rem;\n\tline-height: 5rem;\n}\n\n#button.primary{\n\tborder: 0.3rem solid #4286f4; /* primary color is blue*/\n}\n\n#button.primary:hover{\n\tbackground-color: #4386f4; /* primary color is blue */\n\tcolor: white;\n}\n\n#button.secondary{\n\tborder: 0.3rem solid #f44336; /* secondary color is red*/\n}\n\n#button.secondary:hover{\n\tbackground-color: #f44336; /* secondary color is red */\n\tcolor: white;\n}\n\n#button.dark{\n\tborder: 0.3rem solid #555555; /* dark color is dark grey */\n}\n\n#button.dark:hover{\n\tbackground-color: #555555; /* dark color is dark grey */\n\tcolor: white;\n}\n\n/* this rule adds the animation of moving the button text \n   to the left smoothly*/\n#button.animated span{\n\tcursor: pointer;\n\tdisplay: inline-block;\n\tposition: relative;\n\ttransition: 0.5s;\n}\n\n/* this rule adds the ">>" to the button text */\n#button.animated span:after{\n\tcontent: \'\\00bb\';\n\tposition: absolute;\n\tright: -20px;\n\ttransition: 0.5s;\n\topacity: 0;\n\ttop: 0;\n}\n\n/* this rule moves the button text over to make room for ">>" */\n#button.animated:hover span{\n\tpadding-right: 25px;\n}\n\n/* this rule makes the ">>" visible when button is hovered on*/\n#button.animated:hover span:after{\n\topacity: 1;\n\tright: 0;\n}';class d extends HTMLElement{static get observedAttributes(){return["rounded","size","shadow","color","animated","circle"]}constructor(){super();const t=this.attachShadow({mode:"open"});t.appendChild(a.content.cloneNode(!0)),t.appendChild(l.cloneNode(!0)),this._button=t.getElementById("button")}get rounded(){return this.hasAttribute("rounded")}get size(){return this.getAttribute("size")}get shadow(){return this.hasAttribute("shadow")}get color(){return this.getAttribute("color")}get animated(){return this.hasAttribute("animated")}get circle(){return this.hasAttribute("circle")}set rounded(t){t?this.setAttribute("rounded",""):this.removeAttribute("rounded")}set size(t){t?this.setAttribute("size",t):this.removeAttribute("size")}set shadow(t){t?this.setAttribute("shadow",t):this.removeAttribute("shadow")}set color(t){t?this.setAttribute("color",t):this.removeAttribute("color")}set animated(t){t?this.setAttribute("animated",t):this.removeAttribute("animated")}set circle(t){t?this.setAttribute("circle",t):this.removeAttribute("circle")}attributeChangedCallback(t,e,n){switch(t){case"rounded":case"shadow":case"animated":case"circle":{const e=""==n;this.addToClassList(t,e);break}case"size":{const t=o[n],e=null!=t;this.addToClassList(t,e);break}case"color":{const t=s[n],e=null!=t;this.addToClassList(t,e);break}}}addToClassList(t,e){e?this._button.classList.add(t):this._button.classList.remove(t)}}customElements.get("core-button")||customElements.define("core-button",d)},function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i);const o=document.createElement("template");o.innerHTML=r.a;const s=document.createElement("style");s.innerHTML="/* The Modal (background) */\n.modal {\n\tdisplay: none;\n\tposition: fixed;\n\tz-index: 1;\n\tpadding-top: 100px;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: auto;\n\tbackground-color: rgba(0, 0, 0, 0.4);\n}\n\n/* Modal Content */\n.modal-content {\n\tposition: relative;\n\tbackground-color: #fefefe;\n\tmargin: auto;\n\tpadding: 0;\n\tborder: 1px solid #888;\n\twidth: 60%;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\t-webkit-animation-name: animatetop;\n\t-webkit-animation-duration: 0.4s;\n\tanimation-name: animatetop;\n\tanimation-duration: 0.4s;\n}\n\n/* Add Animation */\n@-webkit-keyframes animatetop {\n\tfrom {\n\t\ttop: -300px;\n\t\topacity: 0;\n\t}\n\t\n\tto {\n\t\ttop: 0;\n\t\topacity: 1;\n\t}\n}\n@keyframes animatetop {\n\tfrom {\n\t\ttop: -300px;\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttop: 0;\n\t\topacity: 1;\n\t}\n}\n\n/* The Close Button */\n.close {\n\tcolor: white;\n\tfloat: right;\n\tfont-size: 28px;\n\tfont-weight: bold;\n}\n\n.close:hover, .close:focus {\n\tcolor: #000;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.modal-header {\n\tpadding: 2px 16px;\n\tbackground-color: rgb(24, 113, 185);\n\tcolor: white;\n}\n\n.modal-body {\n\tpadding: 25px;\n}\n";class a extends HTMLElement{static get observedAttributes(){return[]}constructor(){super();const t=this.attachShadow({mode:"open"});t.appendChild(o.content.cloneNode(!0)),t.appendChild(s.cloneNode(!0))}connectedCallback(){this._modal=this.shadowRoot.querySelector(".modal"),this._close=this.shadowRoot.querySelector(".close"),this._button=document.querySelector(`[modal="${this.getAttribute("name")}"]`),this._close.addEventListener("click",this._hideModal.bind(this)),this._button.addEventListener("click",this._showModal.bind(this))}disconnectedCallback(){this._button.removeEventListener("click",this._showModal.bind(this)),this._close.removeEventListener("click",this._hideModal.bind(this))}_showModal(){this._modalVisible=!0,this._modal.style.display="block"}_hideModal(){this._modalVisible=!1,this._modal.style.display="none"}attributeChangedCallback(t,e,n){}}customElements.get("core-modal")||customElements.define("core-modal",a)},,function(t,e,n){var i,r,o=n(7),s=n(8),a=0,l=0;t.exports=function(t,e,n){var d=e&&n||0,h=e||[],c=(t=t||{}).node||i,u=void 0!==t.clockseq?t.clockseq:r;if(null==c||null==u){var m=o();null==c&&(c=i=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==u&&(u=r=16383&(m[6]<<8|m[7]))}var p=void 0!==t.msecs?t.msecs:(new Date).getTime(),b=void 0!==t.nsecs?t.nsecs:l+1,g=p-a+(b-l)/1e4;if(g<0&&void 0===t.clockseq&&(u=u+1&16383),(g<0||p>a)&&void 0===t.nsecs&&(b=0),b>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=p,l=b,r=u;var f=(1e4*(268435455&(p+=122192928e5))+b)%4294967296;h[d++]=f>>>24&255,h[d++]=f>>>16&255,h[d++]=f>>>8&255,h[d++]=255&f;var x=p/4294967296*1e4&268435455;h[d++]=x>>>8&255,h[d++]=255&x,h[d++]=x>>>24&15|16,h[d++]=x>>>16&255,h[d++]=u>>>8|128,h[d++]=255&u;for(var v=0;v<6;++v)h[d+v]=c[v];return e||s(h)}},function(t,e){t.exports='<div id="slider">\n  \x3c!-- This allows us to place children into the element --\x3e\n  <slot></slot>\n  <div id="description">\n    <slot name="title"><span>Title</span></slot>\n    <slot name="content"><p>Description of these pictures.</p></slot>\n  </div>\n</div>'},function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var i=new Uint8Array(16);t.exports=function(){return n(i),i}}else{var r=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),r[e]=t>>>((3&e)<<3)&255;return r}}},function(t,e){for(var n=[],i=0;i<256;++i)n[i]=(i+256).toString(16).substr(1);t.exports=function(t,e){var i=e||0,r=n;return[r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],"-",r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]],r[t[i++]]].join("")}},,function(t,e,n){"use strict";n.r(e);var i=n(5),r=n.n(i),o=n(6),s=n.n(o);n(2),n(3);const a=document.createElement("template");a.innerHTML=s.a;const l=document.createElement("style");l.innerHTML=':host {\n\t--initial-width: 400px;\n\tdisplay: inline-block;\n}\n\n:host([size="small"]) {\n\t--initial-width: 280px;\n\t--title-size: 25px;\n\t--description-size: 15px;\n}\n\n:host([size="medium"]) {\n\t--initial-width: 400px;\n\t--title-size: 32px;\n\t--description-size: 17px;\n}\n\n:host([size="large"]) {\n\t--initial-width: 600px;\n\t--title-size: 38px;\n\t--description-size: 20px;\n}\n\np, ::slotted(p) {\n\tmargin: 10px;\n}\n\n#description {\n\topacity: 0;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tcolor: white;\n\tz-index: 1;\n\theight: 40%;\n\tbox-sizing: border-box;\n\tpadding: calc(var(--initial-width) * 0.03) calc(var(--initial-width) * 0.05);\n\ttransform: translate(0, calc(var(--initial-width) * 0.6));\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n\n:host([text]) #description {\n\topacity: 1;\n}\n\n:host([theme="circle"]) #description {\n\ttext-align: center;\n\tpadding: calc(var(--initial-width) * 0.03) calc(var(--initial-width) * 0.15);\n}\n\n#slider {\n\ttransition-property: opacity;\n\ttransition-duration: 1s;\n\toverflow: hidden;\n\tposition: relative;\n\theight: var(--initial-width);\n\twidth: var(--initial-width);\n}\n\n#menu {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\talign-items: center;\n\tjustify-content: center;\n\tdisplay: flex;\n\twidth: 100%;\n\tpadding: 30px;\n\tbox-sizing: border-box;\n}\n\n#menu .menu-item {\n\tborder-radius: 50%;\n\twidth: 1em;\n\theight: 1em;\n\tborder: 2px white solid;\n\tbackground-color: transparent;\n\tmargin: 0px 10px;\n\tcursor: pointer;\n}\n\n#menu .menu-item[selected] {\n\twidth: 1.1em;\n\theight: 1.1em;\n\tbackground-color: white;\n}\n\n.arrow {\n\tborder: solid white;\n\tborder-width: 0 5px 5px 0;\n\tdisplay: inline-block;\n\tpadding: 6px;\n\tposition: absolute;\n\tcursor: pointer\n}\n\n#left-arrow {\n\tleft: 2%;\n\ttop: 50%;\n\ttransform: rotate(135deg);\n\t-webkit-transform: rotate(135deg) translate(-50%, -50%);\n}\n\n#right-arrow {\n\tright: 2%;\n\ttop: 50%;\n\ttransform: rotate(-45deg);\n\t-webkit-transform: rotate(-45deg) translate(-50%, -50%);\n}\n\n:host([theme="rounded"]) #slider {\n\tborder-radius: calc(var(--initial-width) * 1 / 10);\n}\n\n:host([theme="circle"]) #slider {\n\tborder-radius: calc(var(--initial-width) / 2);\n}\n\n:host([shadow]) #slider {\n\tbox-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.32), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n#description span,\n::slotted([slot="title"]) {\n\tfont-size: var(--title-size);\n}\n\n#description p,\n::slotted([slot="content"]) {\n\tfont-size: var(--description-size);\n}\n\n::slotted(img) {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\topacity: 1;\n\ttransition: 0.5s ease-in-out;\n\twidth: 100%;\n\theight: 100%;\n}\n\n::slotted(img.hide) {\n\topacity: 0;\n}\n';class d extends HTMLElement{constructor(){super(),this._index=0,this._controlInitialized=!1;const t=this.attachShadow({mode:"open"});t.appendChild(a.content.cloneNode(!0)),t.appendChild(l.cloneNode(!0)),this._slider=this.shadowRoot.getElementById("slider")}_hideContent(){const t=this._content.innerHTML,e=this._title.innerHTML,n=this.getAttribute("size"),i=this.getAttribute("theme"),o="circle"===i?.5:1;let s,a=!1;switch(n){case"small":{const e=30;s="tiny",t.length>e*o&&(this._content.innerHTML=t.substring(0,e)+"...",a=!0);break}case"medium":{const e=80;s="circle"===i?"tiny":"xsmall",t.length>e*o&&(this._content.innerHTML=t.substring(0,e)+"...",a=!0);break}case"large":{const e=200;s="circle"===i?"xsmall":"small",t.length>e*o&&(this._content.innerHTML=t.substring(0,e)+"...",a=!0);break}}if(a){const n=r()(),o=document.createElement("core-button");o.setAttribute("rounded",!0),o.setAttribute("size",s),o.setAttribute("color","secondary"),o.setAttribute("modal",n),"circle"!==i?o.setAttribute("style","float: right; margin: 10px 20px;"):(o.setAttribute("style","margin: 20px 20px;"),this._content.style["align-items"]="center"),o.innerHTML="Read more",this._content.appendChild(o);const a=document.createElement("core-modal");a.setAttribute("name",n),a.innerHTML=`\n        <h1 slot="header">${e}</h1>\n        <p>${t}</p>\n      `,document.body.appendChild(a)}}static get observedAttributes(){return["time","size","theme","shadow","text","control"]}set size(t){t?this.setAttribute("size",t):this.removeAttribute("size")}set theme(t){t?this.setAttribute("theme",t):this.removeAttribute("theme")}set shadow(t){!0===t?this.setAttribute("shadow",""):this.removeAttribute("shadow")}set text(t){!0===t?this.setAttribute("text",""):this.removeAttribute("text")}set control(t){!0===t?this.setAttribute("control",""):this.removeAttribute("control")}get size(){return this.getAttribute("size")}get theme(){return this.getAttribute("theme")}get shadow(){return""===this.getAttribute("shadow")}get text(){return""===this.getAttribute("text")}get control(){return""===this.getAttribute("control")}connectedCallback(){this._imageChildren=this.getElementsByTagName("img"),this._imageChildCount=this._imageChildren.length,this._start(0)}_initControl(){this._imageChildren=this.getElementsByTagName("img"),this._imageChildCount=this._imageChildren.length;let t="";for(let e=0;e<this._imageChildCount;e++)t+=`<div index=${e} class="menu-item"></div>`;const e=document.createElement("div");e.setAttribute("id","menu"),e.innerHTML=t,Array.from(e.children).forEach(t=>{t.addEventListener("click",()=>{this._start(t.getAttribute("index"))})}),this._menuItems=Array.from(e.children);const n=document.createElement("div"),i=document.createElement("div");n.setAttribute("id","left-arrow"),n.classList.add("arrow"),i.setAttribute("id","right-arrow"),i.classList.add("arrow"),n.addEventListener("click",()=>{this.index-=1,this._start(this.index)}),i.addEventListener("click",()=>{this.index+=1,this._start(this.index)}),this._menu=e,this._leftArrow=n,this._rightArrow=i}attributeChangedCallback(t,e,n){switch(t){case"time":this._slider.style.transitionDuration=n;break;case"control":this._controlInitialized||(this._initControl(),this._controlInitialized=!1),this.control?(this._slider.appendChild(this._menu),this._slider.appendChild(this._leftArrow),this._slider.appendChild(this._rightArrow)):""===e&&(this._slider.removeChild(this._slider.querySelector("#menu")),this._slider.removeChild(this._slider.querySelector("#left-arrow")),this._slider.removeChild(this._slider.querySelector("#right-arrow")));case"text":this.text&&void 0===this._title&&void 0===this._content&&(this._title=this.querySelector('[slot="title"]'),this._content=this.querySelector('[slot="content"]'),this.text&&null!==this._title&&null!==this._content&&this._hideContent())}}get time(){return this.getAttribute("time")||"2s"}set time(t){t?this.setAttribute("time",t):this.setAttribute("time","2s")}get index(){return this._index}set index(t){this._index=t,this._index>=this._imageChildCount&&(this.index=0),this._index<0&&(this.index=Number(this._imageChildCount)-1)}_start(t){void 0!==this._interval&&clearInterval(this._interval),this._reRender(t),this.index=t,this._interval=setInterval(this._tick.bind(this),1e3*parseFloat(this.time))}_tick(){this.index=Number(this.index)+1,this._reRender(this.index)}_reRender(t){Array.from(this._imageChildren).forEach(t=>{t.classList.add("hide")}),this._imageChildren[t].classList.remove("hide"),this.control&&null!==this._menuItems&&(this._menuItems.forEach(t=>{t.removeAttribute("selected","")}),this._menuItems[t].setAttribute("selected",""))}}customElements.get("core-slier")||customElements.define("core-slider",d)}]);