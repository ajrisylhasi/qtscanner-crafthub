(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1412:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"default",function(){return WeatherWidgets});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),moment__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),moment__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__),axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(370),axios__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__),a;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var a=t[_];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,_){return t&&_defineProperties(e.prototype,t),_&&_defineProperties(e,_),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,a&&a(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};function getIcon(e){switch(e){case 200<=e&&e<300:return"wi wi-night-showers";case 300<=e&&e<500:return"wi day-sleet";case 500<=e&&e<600:return"wi wi-night-showers";case 600<=e&&e<700:return"wi wi-day-snow";case 700<=e&&e<800:return"wi wi-day-fog";case 800===e:return"wi wi-day-sunny";case 801<=e&&e<803:return"wi wi-night-partly-cloudy";case 802<=e&&e<900:return"wi wi-day-cloudy";case 905===e||951<=e&&e<=956:return"wi wi-day-windy";case 900<=e&&e<1e3:return"wi wi-night-showers"}}var WeatherWidgets=function(_Component){function WeatherWidgets(){var e,t;_classCallCheck(this,WeatherWidgets);for(var _=arguments.length,a=new Array(_),r=0;r<_;r++)a[r]=arguments[r];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(WeatherWidgets)).call.apply(e,[this].concat(a)))).state={weatherData:null,city:t.props.city?t.props.city:"New York"},t}return _inherits(WeatherWidgets,_Component),_createClass(WeatherWidgets,[{key:"componentDidMount",value:function(){var t=this;axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://api.openweathermap.org/data/2.5/forecast/daily?q="+this.state.city+"&cnt=5&units=metric&mode=json&appid=b1b15e88fa797225412429c1c50c122a1&apikey=69b72ed255ce5efad910bd946685883a").then(function(e){t.setState({weatherData:e.data})}).catch(function(e){console.log("Error fetching and parsing data",e)})}},{key:"renderFiveDayForecast",value:function(){var e=this.state.weatherData,t=[];if(e)for(var _=1;_<e.list.length;_++){var a=e.list[_],r=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"d-flex justify-content-between align-items-center",key:a.dt},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"w-50"},this.state.city,", ",moment__WEBPACK_IMPORTED_MODULE_1___default()(1e3*a.dt).format("ddd DD MMMM")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"w-icon"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:getIcon(a.weather[0].id)})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"d-block"},a.temp.max,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup",null,"°C")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"d-block"},a.weather[0].main));t.push(r)}return t}},{key:"render",value:function(){var e=this.state.weatherData;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"weather-top rct-weather-widget overflow-hidden rounded-top"},null!==e&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"black-overlay weather-over py-20"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"weather-head mb-20 d-flex justify-content-between"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"align-items-start"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,e.city.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,moment__WEBPACK_IMPORTED_MODULE_1___default()().format("ddd, HH:mm A"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:getIcon(e.list[0].weather[0].id)})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"weather-temp"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,e.list[0].temp.day,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup",null,"°C"))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"weather-bottom"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"list-inline mb-0"},this.renderFiveDayForecast())))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),WeatherWidgets}(react__WEBPACK_IMPORTED_MODULE_0__.Component),X,Y;X="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,X&&(X.register(getIcon,"getIcon","/home/iron/Documents/All Projects/Reactify/reactify-dev/reactify-thunk/src/components/Widgets/WeatherV2.js"),X.register(WeatherWidgets,"WeatherWidgets","/home/iron/Documents/All Projects/Reactify/reactify-dev/reactify-thunk/src/components/Widgets/WeatherV2.js")),Y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,Y&&Y(module)}.call(this,__webpack_require__(6)(module))}}]);