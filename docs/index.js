!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=function(t,e,o){var i=/#/.test(t),r=void 0!==e&&void 0!==o,s=Array.isArray(t),a="#ffffff",c=0;if(i)c=n(t.substr(1,2)),e=n(t.substr(3,2)),o=n(t.substr(5,2));else if(r)c=parseInt(t),e=parseInt(e),o=parseInt(o);else{if(!s)return a;c=parseInt(t[0]),e=parseInt(t[1]),o=parseInt(t[2])}return Math.sqrt(c*c*.241+e*e*.691+o*o*.068)>130&&(a="#000000"),a};var n=function(t){var e=t.replace(/[^a-f0-9]/gi,"");return parseInt(e,16)}},function(t,e,n){t.exports=n(4)},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(2),n(3);var o=n(0),i=n.n(o);function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var a=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=e||{},this.settings=e,["i18n"].forEach(function(t){n.settings[t]=n.settings[t]||{}}),this.id="hoverBar-"+Math.random().toString(36).substr(2),this.bar=document.createElement("div"),this.bar.setAttribute("id",this.id),this.bar.innerHTML='<div class="hello-bar-container"><p class="hello-bar-text">'.concat(this.settings.text,'</p></div><div class="hello-bar-text--after"></div>'),this.settings.hideClose||(this.bar.innerHTML+='<button class="hello-bar-button" aria-controls="'.concat(this.id,'" aria-expanded="true" aria-label="').concat(this.settings.i18n.hideText||"Hide announcement",'">\n        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">\n            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>\n        </svg>\n      </button>')),this.bar.classList.add("hello-bar"),this.settings.fixed&&this.bar.classList.add("hello-bar--is-fixed"),this.insertBar(),this.functionBar(),this.calculateHeight(),this.colorizeBar(),this.settings.disableBodyMove||this.moveElements(document.body),this.moveElements(this.settings.move),this.showBar()}var e,n,o;return e=t,(n=[{key:"showBar",value:function(){var t=this;document.querySelector("#".concat(this.id))&&(this.bar.style.transition=(this.settings.duration||500)+"ms",setTimeout(function(){t.bar.classList.add("hello-bar--is-visible")},this.settings.delay||1))}},{key:"hideBar",value:function(){var t=this;if(document.querySelector("#".concat(this.id))){this.bar.classList.remove("hello-bar--is-visible");for(var e=document.querySelectorAll(".hello-bar--has-moved"),n=0;n<e.length;n++){var o=parseInt(e[n].style.marginTop);e[n].style.marginTop="".concat(o-this.height,"px"),e[n].classList.remove("hello-bar--has-moved")}setTimeout(function(){t.bar.parentNode.removeChild(t.bar)},(this.settings.duration||500)+1)}}},{key:"functionBar",value:function(){var t=this;document.querySelector(".hello-bar button.hello-bar-button")&&document.querySelector(".hello-bar button.hello-bar-button").addEventListener("click",function(){return t.hideBar()})}},{key:"colorizeBar",value:function(){if(document.querySelector("#".concat(this.id))){var t=this.settings.background||"#eeeeee";this.bar.style.backgroundColor=t,document.querySelector(".hello-bar .hello-bar-text--after")&&(document.querySelector(".hello-bar .hello-bar-text--after").style.background="linear-gradient(to right, rgba(0, 0, 0, 0), ".concat(t,")")),this.bar.style.color=this.settings.textColor||i()(t),this.bar.style.textAlign=this.settings.align||"center",document.querySelector(".hello-bar p.hello-bar-text .cta")&&(document.querySelector(".hello-bar p.hello-bar-text .cta").style.height="".concat(this.height,"px"),document.querySelector(".hello-bar p.hello-bar-text .cta").style.lineHeight="".concat(this.height,"px"),document.querySelector(".hello-bar p.hello-bar-text .cta").style.color=this.settings.background||"#eeeeee",document.querySelector(".hello-bar p.hello-bar-text .cta").style.background=this.settings.textColor||i()(t))}}},{key:"calculateHeight",value:function(){document.querySelector("#".concat(this.id))&&(this.settings.size&&this.bar.classList.add("hello-bar--size-".concat(this.settings.size)),"function"===typeof this.bar.getBoundingClientRect&&this.bar.getBoundingClientRect().height?this.height=this.bar.getBoundingClientRect().height:this.height=this.bar.offsetHeight,this.height=parseInt(this.height))}},{key:"insertBar",value:function(){var t=document.querySelector("body > *");t?document.body.insertBefore(this.bar,t):document.body.appendChild(this.bar)}},{key:"moveElements",value:function(t){if(t)if("string"===typeof t)for(var e=document.querySelectorAll(t),n=0;n<e.length;n++)this.moveElements(e[n]);else if(t.constructor===Array&&t.length)for(var o=0;o<t.length;o++)this.moveElements(t[o]);else if("object"===r(t)&&"object"===r(t.classList)&&"function"===typeof t.classList.add&&!t.classList.contains("hello-bar--has-moved")){var i=t.currentStyle||window.getComputedStyle(t);"object"===r(i)&&i.marginTop?t.style.marginTop="".concat(parseInt(i.marginTop)+this.height,"px"):t.style.marginTop="".concat(this.height,"px"),t.classList.add("hello-bar--has-moved")}}}])&&s(e.prototype,n),o&&s(e,o),t}();new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=new a({text:"Welcome to this website! How are you doing today? This is great, <a href='https://github.com/AnandChowdhary/hello-bar'>isn't it</a>? <a class='cta wiggle' href='https://github.com/AnandChowdhary/hello-bar'>\u2b50 Star now</a>",background:"#5352ed",size:"large",delay:500});console.log("Demo loaded!",e)}}]);
//# sourceMappingURL=index.js.map