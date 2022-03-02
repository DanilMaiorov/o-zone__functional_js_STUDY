/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/price */ \"./src/modules/price.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__.cart)()\r\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__.load)()\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__.search)()\r\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__.catalog)()\r\n;(0,_modules_price__WEBPACK_IMPORTED_MODULE_4__.price)()\n\n//# sourceURL=webpack://OZON/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cart\": () => (/* binding */ cart)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\nfunction cart () {\r\n    const cartBtn = document.getElementById('cart');\r\n    const cartModal = document.querySelector('.cart');\r\n    const goodsWrapper = document.querySelector('.goods');\r\n    const cartTotal = cartModal.querySelector('.cart-total > span'); //суммарная стоимость\r\n    const cartWrapper = document.querySelector('.cart-wrapper'); //обертка\r\n    const cartSendBtn = cartModal.querySelector('.cart-confirm');//кнопка отправки данных\r\n    const amountItem = document.querySelector('.counter');\r\n    const cart = localStorage.getItem('cart') ? \r\n    JSON.parse(localStorage.getItem('cart')) : [] //по клику достаем весь массив из локалсторэджа\r\n\r\n    function openCart () { //функция открытия корзины\r\n        const cart = localStorage.getItem('cart') ? \r\n        JSON.parse(localStorage.getItem('cart')) : [] //проверили есть ли чтото в локал сторэдже по ключу корзины\r\n        cartModal.style.display = 'flex'\r\n        ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__.renderCart)(cart)\r\n        cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n            return sum + goodItem.price\r\n        }, 0)\r\n    }\r\n    function closeCart () { //функция закрытия корзины\r\n        cartModal.style.display = 'none'\r\n    }\r\n    function counter (data) { //функция подсчета элементов в корзине\r\n        data ? amountItem.textContent = data.length : amountItem.textContent = 0\r\n    }\r\n    cartBtn.addEventListener('click', () => {\r\n        openCart()\r\n    })\r\n    cartModal.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        const target = e.target\r\n        if(target.closest('.cart-close')) {\r\n            closeCart()\r\n        }\r\n    })\r\n    document.addEventListener('keydown', (e) => {\r\n        if(e.key === 'Escape') {\r\n            closeCart()\r\n        }\r\n    })\r\n    //создание товаров в корзине\r\n    goodsWrapper.addEventListener('click', (e) => {\r\n        if(e.target.closest('.btn')){\r\n            const card = e.target.closest('.card') //обозначили карточку товара\r\n            const key = card.dataset.key    //достали дата атрибут\r\n            const goods = JSON.parse(localStorage.getItem('goods')) //вытащили всё что есть из локалсторэджа\r\n            const cart = localStorage.getItem('cart') ? \r\n            JSON.parse(localStorage.getItem('cart')) : [] //проверили есть ли чтото в локал сторэдже по ключу корзины\r\n            const goodItem = goods.find((item) => { //перебрали массив методом find и тем самым достаём карточку товара\r\n                return item.id === +key\r\n            })\r\n            cart.push(goodItem)\r\n            counter(cart)\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n        }\r\n    })\r\n    cartWrapper.addEventListener('click', (e) => {//для удаления элементов из корзины\r\n        if(e.target.closest('.btn-primary')) { //получим кнопку\r\n            const cart = localStorage.getItem('cart') ? \r\n                JSON.parse(localStorage.getItem('cart')) : [] //проверили есть ли чтото в локал сторэдже по ключу корзины\r\n            const card = e.target.closest('.card') //обозначили карточку товара\r\n            const key = card.dataset.key    //достали дата атрибут\r\n            const index = cart.findIndex((item) => {\r\n                return item.id === +key\r\n            })\r\n            cart.splice(index, 1)//сплайсом отрезаем куски массива\r\n            counter(cart)\r\n            localStorage.setItem('cart', JSON.stringify(cart)) //и снова записали\r\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__.renderCart)(cart)//вызвали рендер\r\n            cartTotal.textContent = cart.reduce((sum, goodItem) => { //пересчитали\r\n                return sum + goodItem.price\r\n            }, 0)\r\n        }\r\n    })\r\n    cartSendBtn.addEventListener('click', () => {\r\n        const cart = localStorage.getItem('cart') ? \r\n        JSON.parse(localStorage.getItem('cart')) : [] //по клику достаем весь массив из локалсторэджа\r\n        ;(0,_postData__WEBPACK_IMPORTED_MODULE_1__.postData)(cart).then(() => {\r\n            localStorage.removeItem('cart')\r\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__.renderCart)([])\r\n            cartTotal.textContent = 0\r\n            counter([])\r\n        })\r\n    })\r\n    counter(cart)\r\n}\r\n\n\n//# sourceURL=webpack://OZON/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"catalog\": () => (/* binding */ catalog)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nfunction catalog () {\r\n    const catalogBtn = document.querySelector('.catalog-button > button');\r\n    const catalogModal = document.querySelector('.catalog');\r\n    const catalogArray = [catalogBtn, catalogModal]\r\n    const catalogModalItems = document.querySelectorAll('.catalog-list li');\r\n\r\n    \r\n    let isOpen = false\r\n\r\n    catalogArray.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            isOpen = !isOpen\r\n            if(isOpen) {\r\n                catalogModal.style.display = 'block'\r\n            } else {\r\n                catalogModal.style.display = ''\r\n            } \r\n        })\r\n    })\r\n\r\n    catalogModalItems.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            const text = item.textContent\r\n            ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)().then((data) => {\r\n                ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__.renderGoods)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text))\r\n            })\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://OZON/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"saleFilter\": () => (/* binding */ saleFilter)\n/* harmony export */ });\nfunction searchFilter (goods, value) { //фильтрация по названию\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.title.toLowerCase().trim().includes(value.toLowerCase().trim())\r\n    })\r\n}\r\nfunction categoryFilter (goods, value) { //фильтрация по категории\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.category === value\r\n    })\r\n}\r\nfunction priceFilter (goods, min, max) { //фильтрация по цене\r\n    return goods.filter((goodsItem) => {\r\n        if(min === '' && max === '') {\r\n            return goodsItem\r\n        } else if (min !== '' && max !== '') {\r\n            return  max >= goodsItem.price && goodsItem.price >= min\r\n        } else if (min !== '' && max === '') {\r\n            return goodsItem.price >= +min\r\n        } else if (min === '' && max !== '') {\r\n            return  goodsItem.price <= +max\r\n        }\r\n    })\r\n}\r\nfunction saleFilter (goods, checkbox) {\r\n    return goods.filter((goodsItem) => {\r\n        if(checkbox) {\r\n            return goodsItem.sale === true\r\n        } else {\r\n            return goodsItem\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://OZON/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nfunction getData (str) {\r\n   \r\n    return fetch(\r\n/*         `https://ozon-test-7a259-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`) //работа с локальным сервером\r\n        .then((res) => res.json()) */\r\n/*     return fetch(*/'http://localhost:3000/goods') //работа с локальным сервером\r\n    .then((res) => res.json()) \r\n}\r\n\n\n//# sourceURL=webpack://OZON/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load\": () => (/* binding */ load)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nfunction load () {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)().then((data) => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__.renderGoods)(data)\r\n    })          \r\n}\n\n//# sourceURL=webpack://OZON/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nfunction postData (cart) {\r\n/*     return fetch('http://localhost:3000/goods/24', {\r\n        method: 'DELETE',\r\n\r\n    }).then(res => res.json()) */\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n        method: 'POST',\r\n        body: JSON.stringify(cart),\r\n        headers: {\r\n            'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n    }).then(res => res.json())\r\n}\n\n//# sourceURL=webpack://OZON/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/price.js":
/*!******************************!*\
  !*** ./src/modules/price.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"price\": () => (/* binding */ price)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nfunction price () {\r\n    const prices = document.querySelectorAll('.filter-price_input');\r\n    const sale = document.querySelector('#discount-checkbox');\r\n    const checkbox = document.querySelector('.filter-check_checkmark');\r\n\r\n    prices.forEach(price => {\r\n        if(price.id === 'min') {\r\n            const min = price.id === 'min'\r\n        }\r\n        if(price.id === 'max') {\r\n            const max = price.id === 'max'\r\n        }\r\n        price.addEventListener('input', () => {\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)().then((data) => { \r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__.renderGoods)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, sale.checked), min.value, max.value))\r\n            }) \r\n        }) \r\n    })\r\n    sale.addEventListener('change', () => {\r\n        if(sale.checked) {\r\n            checkbox.classList.add('checked')\r\n        } else {\r\n            checkbox.classList.remove('checked')\r\n        }\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)().then((data) => { \r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__.renderGoods)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, sale.checked), min.value, max.value))\r\n            }) \r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://OZON/./src/modules/price.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCart\": () => (/* binding */ renderCart)\n/* harmony export */ });\nfunction renderCart (goods) {\r\n    const cartWrapper = document.querySelector('.cart-wrapper');\r\n    cartWrapper.innerHTML = ''\r\n    if(goods.length === 0) {\r\n        cartWrapper.insertAdjacentHTML('beforeend', `\r\n            <div id=\"cart-empty\">\r\n                Ваша корзина пока пуста\r\n            </div>`)\r\n    } else {\r\n        goods.forEach((goodsItem) => {\r\n            cartWrapper.insertAdjacentHTML('beforeend', `\r\n                <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n                ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                    <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                            style=\"background-image: url(${goodsItem.img})\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n                        <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                        <button type=\"button\" class=\"btn btn-primary\">Удалить</button>\r\n                     </div>\r\n                 </div>`\r\n            )\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://OZON/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderGoods\": () => (/* binding */ renderGoods)\n/* harmony export */ });\nfunction renderGoods (goods) {\r\n    const goodsWrapper = document.querySelector('.goods');\r\n    localStorage.setItem('goods', JSON.stringify(goods))\r\n\r\n    goodsWrapper.innerHTML = ''\r\n    if(goods) {\r\n        goods.forEach((goodsItem) => {\r\n            goodsWrapper.insertAdjacentHTML('beforeend', `\r\n                <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n                    <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n                    ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                        <div class=\"card-img-wrapper\">\r\n                            <span class=\"card-img-top\"\r\n                                style=\"background-image: url(${goodsItem.img})\"></span>\r\n                        </div>\r\n                        <div class=\"card-body justify-content-between\">\r\n                            <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n                            <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                            <button class=\"btn btn-primary\">В корзину</button>\r\n                        </div>\r\n                    </div>\r\n                </div>`\r\n            )\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://OZON/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": () => (/* binding */ search)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nfunction search () {\r\n    const searchInput = document.querySelector('.search-wrapper_input');\r\n    \r\n    searchInput.addEventListener('input', (e) => {\r\n        const value = e.target.value\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__.renderGoods)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value))\r\n        })\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n  \n\n//# sourceURL=webpack://OZON/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;