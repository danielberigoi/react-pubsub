"use strict";exports.__esModule=!0,exports.withTopics=exports.TopicsConsumer=exports.TopicsProvider=exports.TopicsContext=exports.TopicsHOC=void 0;var _react=_interopRequireWildcard(require("react"));function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return _getRequireWildcardCache=function(){return t},t}function _interopRequireWildcard(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=_getRequireWildcardCache();if(e&&e.has(t))return e.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var n=o?Object.getOwnPropertyDescriptor(t,i):null;n&&(n.get||n.set)?Object.defineProperty(r,i,n):r[i]=t[i]}return r.default=t,e&&e.set(t,r),r}function _objectWithoutPropertiesLoose(t,e){if(null==t)return{};var r,o,i={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}).apply(this,arguments)}const Context=(0,_react.createContext)({}),_noop=()=>{},_uuid=()=>Math.random().toString(36).substr(2,9),_get=(t,e,r={})=>e?t[e]:t||r,_toObj=(t,e=_noop,r={})=>t.reduce((t,r)=>_extends({},t,{[r]:e(t,r)}),r),_buildSubscribeData=({data:t,topics:e,subs:r,callback:o=_noop})=>_toObj(e,(t,e)=>_extends({},_get(t,e),{[r[e]]:t=>o(e,t)}),_get(t)),_buildUnsubscribeData=({data:t,topics:e,subs:r})=>_toObj(e,(t,e)=>{return _objectWithoutPropertiesLoose(_get(t,e),[r[e]].map(_toPropertyKey))},_get(t)),_buildPublishData=({data:t,topic:e})=>{const r=_get(t,e);return r?Object.values(r):(console.error(`[TOPICS] The "${e}" topic does not exist.`),[])},Provider=t=>{const[e,r]=(0,_react.useState)({}),o={_subscribe:(t,e)=>{const o=_toObj(t,()=>_uuid());return r(r=>_buildSubscribeData({data:r,topics:t,subs:o,callback:e})),o},_unsubscribe:(t,e)=>{r(r=>_buildUnsubscribeData({data:r,topics:e,subs:t}))},publish:(t,r={})=>{_buildPublishData({data:e,topic:t}).forEach(t=>t(r))}};return _react.default.createElement(Context.Provider,{value:{topics:o}},t.children)},Consumer=(0,_react.memo)(t=>{const{componentProps:e,component:r,options:{topics:o=[]},topics:{_subscribe:i,_unsubscribe:n,publish:s}}=t,[c,u]=(0,_react.useState)(_toObj(o,()=>({})));return(0,_react.useEffect)(()=>{if(0===o.length)return;const t=i(o,(t,e)=>u(r=>_extends({},r,{[t]:_extends({},r[t],e)})));return()=>n(t,o)},[]),r(_extends({},e,{topics:{data:c,publish:s}}))}),TopicsHOC=(t,e={})=>r=>_react.default.createElement(Context.Consumer,null,o=>_react.default.createElement(Consumer,_extends({options:e,component:t,componentProps:r},o)));exports.TopicsHOC=TopicsHOC;const TopicsContext=Context;exports.TopicsContext=TopicsContext;const TopicsProvider=Provider;exports.TopicsProvider=TopicsProvider;const TopicsConsumer=Consumer;exports.TopicsConsumer=TopicsConsumer;const withTopics=TopicsHOC;exports.withTopics=withTopics;