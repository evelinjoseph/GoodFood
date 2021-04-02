(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retailertabs-retailertabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/retailertabs/retailertabs.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/retailertabs/retailertabs.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar color=\"primary\" slot=\"bottom\">\n    <ion-tab-button tab=\"retailertab1\">\n      <ion-icon name=\"restaurant\"></ion-icon>\n      <ion-label>Orders</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"retailertab2\">\n      <ion-icon name=\"list\"></ion-icon>\n      <ion-label>Listings</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"retailertab3\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/retailertabs/retailertabs-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/retailertabs/retailertabs-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RetailertabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailertabsPageRoutingModule", function() { return RetailertabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _retailertabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retailertabs.page */ "./src/app/retailertabs/retailertabs.page.ts");




const routes = [
    {
        path: 'retailertabs',
        component: _retailertabs_page__WEBPACK_IMPORTED_MODULE_3__["RetailertabsPage"],
        children: [
            {
                path: 'retailertab1',
                loadChildren: () => Promise.all(/*! import() | retailertab1-retailertab1-module */[__webpack_require__.e("common"), __webpack_require__.e("retailertab1-retailertab1-module")]).then(__webpack_require__.bind(null, /*! ../retailertab1/retailertab1.module */ "./src/app/retailertab1/retailertab1.module.ts")).then(m => m.Retailertab1PageModule)
            },
            {
                path: 'retailertab2',
                loadChildren: () => Promise.all(/*! import() | retailertab2-retailertab2-module */[__webpack_require__.e("common"), __webpack_require__.e("retailertab2-retailertab2-module")]).then(__webpack_require__.bind(null, /*! ../retailertab2/retailertab2.module */ "./src/app/retailertab2/retailertab2.module.ts")).then(m => m.Retailertab2PageModule)
            },
            {
                path: 'retailertab3',
                loadChildren: () => __webpack_require__.e(/*! import() | retailertab3-retailertab3-module */ "retailertab3-retailertab3-module").then(__webpack_require__.bind(null, /*! ../retailertab3/retailertab3.module */ "./src/app/retailertab3/retailertab3.module.ts")).then(m => m.Retailertab3PageModule)
            },
            {
                path: '',
                redirectTo: '/retailertabs/retailertab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/retailertabs/retailertabs/retailertab1',
        pathMatch: 'full'
    }
];
let RetailertabsPageRoutingModule = class RetailertabsPageRoutingModule {
};
RetailertabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RetailertabsPageRoutingModule);



/***/ }),

/***/ "./src/app/retailertabs/retailertabs.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/retailertabs/retailertabs.module.ts ***!
  \*****************************************************/
/*! exports provided: RetailertabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailertabsPageModule", function() { return RetailertabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _retailertabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retailertabs-routing.module */ "./src/app/retailertabs/retailertabs-routing.module.ts");
/* harmony import */ var _retailertabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retailertabs.page */ "./src/app/retailertabs/retailertabs.page.ts");







let RetailertabsPageModule = class RetailertabsPageModule {
};
RetailertabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _retailertabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["RetailertabsPageRoutingModule"]
        ],
        declarations: [_retailertabs_page__WEBPACK_IMPORTED_MODULE_6__["RetailertabsPage"]]
    })
], RetailertabsPageModule);



/***/ }),

/***/ "./src/app/retailertabs/retailertabs.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/retailertabs/retailertabs.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldGFpbGVydGFicy9yZXRhaWxlcnRhYnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/retailertabs/retailertabs.page.ts":
/*!***************************************************!*\
  !*** ./src/app/retailertabs/retailertabs.page.ts ***!
  \***************************************************/
/*! exports provided: RetailertabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailertabsPage", function() { return RetailertabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RetailertabsPage = class RetailertabsPage {
    constructor() { }
    ngOnInit() {
    }
};
RetailertabsPage.ctorParameters = () => [];
RetailertabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-retailertabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./retailertabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/retailertabs/retailertabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./retailertabs.page.scss */ "./src/app/retailertabs/retailertabs.page.scss")).default]
    })
], RetailertabsPage);



/***/ })

}]);
//# sourceMappingURL=retailertabs-retailertabs-module-es2015.js.map