!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","prop-types","react"],t):"object"==typeof exports?exports.ReactClock=t(require("classnames"),require("prop-types"),require("react")):e.ReactClock=t(e.classnames,e["prop-types"],e.react)}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t.default=a.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,i,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(4),p=r(f),d=n(3),m=r(d),y=n(2),h=r(y),b=(i=c=function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"componentDidMount",value:function(){this.initClocks()}},{key:"initClocks",value:function(){for(var e=this.hands,t=0;t<e.length;t++)for(var n=document.querySelectorAll("."+e[t].hand),r=0;r<n.length;r++)n[r].style.webkitTransform="rotateZ("+e[t].angle+"deg)",n[r].style.transform="rotateZ("+e[t].angle+"deg)","minutes"===e[t].hand&&n[r].parentNode.setAttribute("data-second-angle",e[t+1].angle)}},{key:"render",value:function(){var e=this.props,t=e.className;o(e,["className"]);return p.default.createElement("section",{className:(0,h.default)("react-clock",t)},p.default.createElement("div",{className:"hours-container"},p.default.createElement("i",{className:"hours"})),p.default.createElement("div",{className:"minutes-container"},p.default.createElement("i",{className:"minutes"})),p.default.createElement("div",{className:"seconds-container"},p.default.createElement("i",{className:"seconds"})))}},{key:"hands",get:function(){var e=this.props,t=e.seconds,n=e.minutes,r=e.hours;return[{hand:"hours",angle:30*r+n/2},{hand:"minutes",angle:6*n},{hand:"seconds",angle:6*t}]}}]),t}(f.Component),c.propTypes={className:m.default.string,hours:m.default.number,minutes:m.default.number,seconds:m.default.number},c.defaultProps={hours:3,minutes:10,seconds:35},i);t.default=b},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])});
//# sourceMappingURL=react-clock.js.map