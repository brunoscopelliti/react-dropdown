(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1631:function(module,exports,__webpack_require__){__webpack_require__(1632),__webpack_require__(1809),__webpack_require__(1810),__webpack_require__(2703),__webpack_require__(2704),__webpack_require__(2707),__webpack_require__(2708),__webpack_require__(2706),__webpack_require__(2705),__webpack_require__(2709),__webpack_require__(2521),__webpack_require__(2649),__webpack_require__(2710),module.exports=__webpack_require__(2673)},1700:function(module,exports){},1810:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1034)},2562:function(module,exports){},2564:function(module,exports){},2575:function(module,exports){},2577:function(module,exports){},2602:function(module,exports){},2604:function(module,exports){},2605:function(module,exports){},2610:function(module,exports){},2612:function(module,exports){},2631:function(module,exports){},2643:function(module,exports){},2646:function(module,exports){},2669:function(module,exports,__webpack_require__){var api=__webpack_require__(1568),content=__webpack_require__(2670);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2670:function(module,exports,__webpack_require__){(exports=__webpack_require__(1569)(!1)).push([module.i,'body {\n  margin: 0;\n  font-family: "Nunito", sans-serif;\n  font-size: 16px;\n  line-height: normal; }\n',""]),module.exports=exports},2671:function(module,exports,__webpack_require__){var api=__webpack_require__(1568),content=__webpack_require__(2672);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2672:function(module,exports,__webpack_require__){(exports=__webpack_require__(1569)(!1)).push([module.i,'.ui-dropdown .ui-dd-hook {\n  background: none;\n  border: 0;\n  font-size: 1rem;\n  margin: 0;\n  padding: 0; }\n\n.ui-dropdown .ui-dd-hook:not([disabled]) {\n  cursor: pointer; }\n\n.ui-dropdown .ui-dd-box {\n  background: #fff;\n  color: #000;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  outline: none;\n  padding: .2rem .2rem .1rem; }\n\n.ui-dropdown .ui-dd-box:not([hidden]) {\n  position: absolute;\n  margin-top: .2rem;\n  padding: .2rem 0;\n  z-index: 999; }\n\n.ui-dropdown .ui-dd-box hr {\n  height: 1px;\n  overflow: hidden;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: .25rem 0; }\n\n.ui-dropdown [role="menuitem"] {\n  color: #000;\n  display: block;\n  margin: .05rem 0;\n  padding: .2rem 1rem;\n  text-decoration: none; }\n\n.ui-dropdown [role="menuitem"]:focus,\n.ui-dropdown [role="menuitem"]:hover {\n  background: #eaeaea;\n  outline: none; }\n',""]),module.exports=exports},2673:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(1034).configure)([__webpack_require__(2674)],module,!1)}).call(this,__webpack_require__(116)(module))},2674:function(module,exports,__webpack_require__){var map={"./index.stories.js":2711};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2674},2710:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(1547),__webpack_require__(1557),__webpack_require__(2662),__webpack_require__(2663),__webpack_require__(2664),__webpack_require__(2665),__webpack_require__(2666),__webpack_require__(2667),__webpack_require__(2668);var client_api=__webpack_require__(173),esm=__webpack_require__(5),parameters=(__webpack_require__(2669),__webpack_require__(2671),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},2711:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SimpleDropdown",(function(){return SimpleDropdown})),__webpack_require__.d(__webpack_exports__,"DisabledDropdown",(function(){return DisabledDropdown}));__webpack_require__(1570),__webpack_require__(2676);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=(__webpack_require__(2678),__webpack_require__(2679),__webpack_require__(1557),__webpack_require__(2680),__webpack_require__(2681),__webpack_require__(2683),__webpack_require__(2684),__webpack_require__(1575),__webpack_require__(2691),__webpack_require__(2692),__webpack_require__(2693),__webpack_require__(2694),__webpack_require__(1547),__webpack_require__(2701),__webpack_require__(1)),prop_types_default=__webpack_require__.n(prop_types),index_es=__webpack_require__(1602),dist_index_es=__webpack_require__(971),package_dist_index_es=__webpack_require__(1603),use_id_package_dist_index_es=__webpack_require__(1604),use_forward_ref_package_dist_index_es=__webpack_require__(1605),jsx_runtime=__webpack_require__(40);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=arr&&("undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"]);if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var src_DropdownHook=function DropdownHook(props){var labelledby=props["aria-labelledby"],id=props.id,label=props.label,show=props.show,visible=props.visible,hookProps=_objectWithoutProperties(props,["aria-labelledby","id","label","show","visible"]),ref=Object(react.useRef)(null),_useKeydownWhenActive=function useKeydownWhenActive(el,onKeydown){var _useBool2=_slicedToArray(Object(dist_index_es.a)(el===document.activeElement),3),hasFocus=_useBool2[0],onFocus=_useBool2[1],onBlur=_useBool2[2];return Object(react.useEffect)((function(){if(hasFocus)return document.addEventListener("keydown",onKeydown),function(){document.removeEventListener("keydown",onKeydown)}}),[hasFocus,onKeydown]),{onBlur:onBlur,onFocus:onFocus}}(ref.current,(function onKeydown(event){switch(event.code){case"ArrowDown":case"ArrowUp":show()}})),onBlur=_useKeydownWhenActive.onBlur,onFocus=_useKeydownWhenActive.onFocus;return Object(jsx_runtime.jsx)("button",Object.assign({ref:ref},hookProps,{className:"ui-dd-hook",id:id,onBlur:onBlur,onClick:show,onFocus:onFocus,type:"button","aria-expanded":visible||void 0,"aria-labelledby":labelledby?"".concat(labelledby," ").concat(id):id,children:label}))};src_DropdownHook.displayName="DropdownHook",src_DropdownHook.propTypes={"aria-labelledby":prop_types_default.a.string,disabled:prop_types_default.a.bool,id:prop_types_default.a.string.isRequired,label:prop_types_default.a.node.isRequired,show:prop_types_default.a.func.isRequired,visible:prop_types_default.a.bool.isRequired};var src_DropdownContent=function DropdownContent(props){var children=props.children,visible=props.visible,boxProps=_objectWithoutProperties(props,["children","visible"]),ref=Object(react.useRef)(null);return Object(react.useEffect)((function(){visible&&ref.current.focus()}),[visible]),Object(jsx_runtime.jsx)("div",Object.assign({ref:ref},boxProps,{className:"ui-dd-box",tabIndex:-1,hidden:!visible,children:children}))};src_DropdownContent.displayName="DropdownContent",src_DropdownContent.propTypes={children:prop_types_default.a.node.isRequired,role:prop_types_default.a.string.isRequired,visible:prop_types_default.a.bool.isRequired};var src_Dropdown=function Dropdown(props){var _useBool4=_slicedToArray(Object(dist_index_es.a)(),3),visible=_useBool4[0],show=_useBool4[1],hide=_useBool4[2],ref=Object(package_dist_index_es.a)(hide,visible);return Object(jsx_runtime.jsx)(ControlledDropdown,Object.assign({},props,{ref:ref,visible:visible,show:show}))};src_Dropdown.displayName="Dropdown",src_Dropdown.propTypes={"aria-labelledby":prop_types_default.a.string,children:prop_types_default.a.node,className:prop_types_default.a.string,disabled:prop_types_default.a.bool,label:prop_types_default.a.node,role:prop_types_default.a.string.isRequired},src_Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{"aria-labelledby":{type:{name:"string"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},label:{type:{name:"node"},required:!1,description:""},role:{type:{name:"string"},required:!0,description:""}}};var src=src_Dropdown,ControlledDropdown=react_default.a.forwardRef((function(props,maybeRef){var labelledby=props["aria-labelledby"],activedescendant=props["aria-activedescendant"],children=props.children,className=props.className,disabled=props.disabled,label=props.label,role=props.role,show=props.show,visible=props.visible,ref=Object(use_forward_ref_package_dist_index_es.a)(maybeRef),buttonId=Object(use_id_package_dist_index_es.a)({prefix:"dd-hook"});return Object(jsx_runtime.jsxs)("div",{ref:ref,className:Object(index_es.a)("ui-dropdown",className),children:[Object(jsx_runtime.jsx)(src_DropdownHook,{"aria-labelledby":labelledby,"aria-haspopup":role,disabled:disabled,id:buttonId,label:label,show:show,visible:visible}),Object(jsx_runtime.jsx)(src_DropdownContent,{"aria-activedescendant":activedescendant,"aria-labelledby":labelledby||buttonId,role:role,visible:visible,children:children})]})}));ControlledDropdown.propTypes=Object.assign({},src_Dropdown.propTypes,{"aria-activedescendant":prop_types_default.a.string,visible:prop_types_default.a.bool.isRequired,show:prop_types_default.a.func.isRequired}),ControlledDropdown.__docgenInfo={description:"",methods:[],displayName:"ControlledDropdown",props:{"aria-activedescendant":{type:{name:"string"},required:!1,description:""},visible:{type:{name:"bool"},required:!0,description:""},show:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["package/src/index.js"]={name:"Dropdown",docgenInfo:src_Dropdown.__docgenInfo,path:"package/src/index.js"}),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["package/src/index.js"]={name:"ControlledDropdown",docgenInfo:ControlledDropdown.__docgenInfo,path:"package/src/index.js"});__webpack_exports__.default={title:"Dropdown",component:src};var index_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(src,Object.assign({},args))};index_stories_Template.displayName="Template";var SimpleDropdown=index_stories_Template.bind({});SimpleDropdown.args={children:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("a",{role:"menuitem",href:"#account",children:"Account"}),Object(jsx_runtime.jsx)("a",{role:"menuitem",href:"#about",children:"About"}),Object(jsx_runtime.jsx)("a",{role:"menuitem",href:"#contact",children:"Contact"}),Object(jsx_runtime.jsx)("hr",{}),Object(jsx_runtime.jsx)("a",{role:"menuitem",href:"#logout",children:"Logout"})]}),label:"Demo",role:"menu"};var DisabledDropdown=index_stories_Template.bind({});DisabledDropdown.args={children:Object(jsx_runtime.jsx)("div",{}),disabled:!0,label:"Demo"},SimpleDropdown.parameters=Object.assign({storySource:{source:"(args) => {\n  return (\n    <Dropdown {...args} />\n  );\n}"}},SimpleDropdown.parameters),DisabledDropdown.parameters=Object.assign({storySource:{source:"(args) => {\n  return (\n    <Dropdown {...args} />\n  );\n}"}},DisabledDropdown.parameters)}},[[1631,2,3]]]);