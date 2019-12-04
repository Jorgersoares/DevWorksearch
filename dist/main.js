/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/add_cidades.mjs":
/*!****************************!*\
  !*** ./js/add_cidades.mjs ***!
  \****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addCity; });\n/* harmony import */ var _filter_bairros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter_bairros.mjs */ \"./js/filter_bairros.mjs\");\n/* harmony import */ var _render_empresas_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render_empresas.mjs */ \"./js/render_empresas.mjs\");\nlet choice_city = document.querySelector('#choice-city')\nlet choice_location = document.querySelector('#choice-location')\n\n\n\nfunction addCity(json) {\n    let city_list = []\n\n    json.map(key => {\n        city_list.push(key.city)\n    })\n\n    //Cidades distintas\n    let set_city_list = Array.from(new Set(city_list))\n\n    //adicionando no componente da interface\n    set_city_list.map(i => {\n        choice_city.insertAdjacentHTML('beforeend', `<option value=\"${i}\">${i}</option>`)\n    })\n    \n    choice_city.addEventListener(\"change\", () => {\n        event.preventDefault()\n        if (choice_city.value === \"None\") {\n            card_area.innerHTML = ''\n            choice_location.classList.add('d-none')\n        }\n        else {\n            choice_location.classList.remove('d-none')\n            //Chama função para adicionar o filtro por bairro de acordo com a cidade escolhida\n            Object(_filter_bairros_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(choice_city.value,json)\n            //Chama função que irá renderizar os cards das empresas\n            Object(_render_empresas_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(choice_city.value,json)\n            \n        }\n    })\n}\n\n//# sourceURL=webpack:///./js/add_cidades.mjs?");

/***/ }),

/***/ "./js/api.mjs":
/*!********************!*\
  !*** ./js/api.mjs ***!
  \********************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return api; });\n// Chamada da API\nasync function api(rota){\n    try {\n        const response = await fetch(rota)\n        return await response.json()\n    }\n    catch (error) {\n        console.log(error)\n    }\n}\n\n//# sourceURL=webpack:///./js/api.mjs?");

/***/ }),

/***/ "./js/filter_bairros.mjs":
/*!*******************************!*\
  !*** ./js/filter_bairros.mjs ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return filterLocation; });\nlet choice_location = document.querySelector('#choice-location')\n\nfunction filterLocation(city,json) {\n\n    const location_list = []\n\n    choice_location.innerHTML = \"\"\n    choice_location.insertAdjacentHTML('beforeend', '<option value=\"\" disabled selected hidden>Filtrar por bairro...</option>')\n    choice_location.insertAdjacentHTML('beforeend', '<option>All</option>')\n\n    json.map(key => {\n        if(key.city == city)\n            location_list.push(key.location)\n    })\n\n    //Bairros distintos\n    const set_location_arr = Array.from(new Set(location_list))\n    set_location_arr.map(i => {\n        choice_location.insertAdjacentHTML('beforeend', `<option value=\"${i}\">${i}</option>`)\n    })\n    \n    //exibe o componente para filtrar\n    choice_location.classList.remove('d-none')\n\n    //Funcao para resetar o filtro\n    function showAll() {\n        let cards = Array.from(document.querySelectorAll('#card'))\n        cards.map(card => {\n            card.classList.remove('d-none')\n            card.classList.add('d-flex')\n        })\n    }\n\n    choice_location.addEventListener(\"change\", () => {\n        event.preventDefault()\n        if (choice_location.value == \"All\") {\n            showAll()\n        }\n        else {\n            showAll()\n            json.map(key => {\n                if (key.location != choice_location.value && choice_location.value != \"None\" && choice_location.value != \"Filtrar...\") {\n                    let div_card = document.querySelector('#E' + key._id).parentNode\n                    div_card.classList.remove('d-flex')\n                    div_card.classList.add('d-none')\n                }\n            })\n\n        }\n    })\n}\n\n//# sourceURL=webpack:///./js/filter_bairros.mjs?");

/***/ }),

/***/ "./js/main.mjs":
/*!*********************!*\
  !*** ./js/main.mjs ***!
  \*********************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.mjs */ \"./js/api.mjs\");\n/* harmony import */ var _add_cidades_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_cidades.mjs */ \"./js/add_cidades.mjs\");\nlet banner_img = document.querySelector('div#banner-img')\nlet banner_btn = document.querySelector('button#banner-btn')\nlet search_area = document.querySelector('div#search-area')\nlet choice_city = document.querySelector('#choice-city')\nlet brand = document.querySelector('.navbar-brand')\nlet html = document.querySelector('html')\n\n\n\n//Home\nbanner_btn.addEventListener('click', () => {\n    banner_img.classList.add('d-none')\n    search_area.classList.remove('d-none')\n    html.style.overflowY = \"scroll\"\n})\n\n//Logo\nbrand.addEventListener('click', () => {\n    banner_img.classList.remove('d-none')\n    search_area.classList.add('d-none')\n    html.style.overflowY = \"scroll\"\n})\n\n// Chamada da API\nconst res = Object(_api_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"https://project-js-api.herokuapp.com/api/get\")\nres.then(data => {\n    //Chama função para adicionar as cidades\n    Object(_add_cidades_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\n})\n\n\n\n\n//# sourceURL=webpack:///./js/main.mjs?");

/***/ }),

/***/ "./js/render_empresas.mjs":
/*!********************************!*\
  !*** ./js/render_empresas.mjs ***!
  \********************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return exibeEmpresas; });\nlet card_area = document.querySelector('#grid-cards')\n\nfunction exibeEmpresas(city, json) {\n    card_area.innerHTML = \"\"\n    //Adiciona os cards em tela\n    json.map(key => {\n        if (key.city == city)\n            card_area.insertAdjacentHTML('beforeend',\n                `<div class=\"col-md-4 d-flex justify-content-center\" id=\"card\">\n                    <div class=\"card-e\" id=\"E${key._id}\">\n                        <div class=\"div-logo\">\n                            <img src=\"logo/${key.logo}\" alt=\"\" class=\"logo\">\n                        </div>\n                        <button type=\"button\" class=\"btn btn-primary w-50 mt-2\" data-toggle=\"modal\"\n                        data-target=\"#Modal${key._id}\"> Detalhes </button>\n                        <!-- Modal -->\n                            <div class=\"modal fade\" id=\"Modal${key._id}\" tabindex=\"-1\" role=\"dialog\"\n                                aria-labelledby=\"ModalCenterTitle\" aria-hidden=\"true\">\n                            <div class=\"modal-dialog modal-dialog\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">${key.name}</h5>\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                        <span aria-hidden=\"true\">&times;</span>\n                                    </button>\n                                </div>\n                            <div class=\"modal-body\">\n                                <div style=\"width: 100%\"><iframe width=\"100%\" height=\"300\"\n                                    src=\"https://maps.google.com/maps?width=100%&amp;height=300&amp;hl=en&amp;q=${key.name}+()&amp;ie=UTF8&amp;t=&amp;z=20&amp;iwloc=B&amp;output=embed\"\n                                    frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"><a\n                                        href=\"https://www.maps.ie/coordinates.html\">latitude longitude\n                                        finder</a></iframe></div><br />\n\n                                        <p class=\"ml-1\"> <i class=\"fas fa-phone-volume\"> </i> ${key.phone} </p>\n                                </div>\n\n                            <div class=\"modal-footer\">\n                                <a href=\"http://${key.site}\" class=\"btn btn-primary\" target=\"_blank\">Ver site</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>`\n\n            )\n    })\n}\n\n//# sourceURL=webpack:///./js/render_empresas.mjs?");

/***/ })

/******/ });