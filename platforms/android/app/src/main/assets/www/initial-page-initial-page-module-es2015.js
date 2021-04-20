(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["initial-page-initial-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/initial-page/initial-page.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/initial-page/initial-page.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"text-align: center\" [hidden]=\"!isReady\">\r\n  <ion-toolbar color=\"primary\" mode=\"ios\">\r\n    <ion-title>\r\n      Good Food\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"white\" [hidden]=\"!isReady\">  \r\n  <img class=\"displayed\"  height=\"250 px\" width=\"250 px\" src=\"assets/images/GoodFoodLogo.png\" alt=\"logo\">\r\n         \r\n <div style=\"text-align: center\" > \r\n  <section >\r\n    <ion-button size=\"large\" color=\"primary\" [routerDirection] = \"'forward'\" [routerLink]=\"['/register']\">Create Account</ion-button>\r\n  </section>\r\n  <section >  \r\n    <ion-button size=\"large\" color=\"secondary\" [routerDirection] = \"'forward'\" [routerLink]=\"['/retailer-register']\">I'm a Retailer</ion-button>\r\n  </section>\r\n  <section > \r\n    <br>\r\n    <br> \r\n  <ion-text color=\"primary\">\r\n    Already have an account?\r\n  </ion-text>\r\n  <ion-text [routerDirection] = \"'forward'\" [routerLink]=\"['/login']\" color=\"primary\">\r\n    <a><u>Log In</u></a>\r\n  </ion-text>\r\n</section > \r\n\r\n</div>\r\n  \r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/initial-page/initial-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/initial-page/initial-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: InitialPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPagePageRoutingModule", function() { return InitialPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _initial_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial-page.page */ "./src/app/initial-page/initial-page.page.ts");




const routes = [
    {
        path: '',
        component: _initial_page_page__WEBPACK_IMPORTED_MODULE_3__["InitialPagePage"]
    }
];
let InitialPagePageRoutingModule = class InitialPagePageRoutingModule {
};
InitialPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InitialPagePageRoutingModule);



/***/ }),

/***/ "./src/app/initial-page/initial-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/initial-page/initial-page.module.ts ***!
  \*****************************************************/
/*! exports provided: InitialPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPagePageModule", function() { return InitialPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _initial_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initial-page-routing.module */ "./src/app/initial-page/initial-page-routing.module.ts");
/* harmony import */ var _initial_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initial-page.page */ "./src/app/initial-page/initial-page.page.ts");







let InitialPagePageModule = class InitialPagePageModule {
};
InitialPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _initial_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["InitialPagePageRoutingModule"]
        ],
        declarations: [_initial_page_page__WEBPACK_IMPORTED_MODULE_6__["InitialPagePage"]]
    })
], InitialPagePageModule);



/***/ }),

/***/ "./src/app/initial-page/initial-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/initial-page/initial-page.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".displayed {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-button {\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pdGlhbC1wYWdlL2luaXRpYWwtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUlBO0VBQ0UsWUFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvaW5pdGlhbC1wYWdlL2luaXRpYWwtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheWVke1xyXG5cclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBcclxuICB9XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/initial-page/initial-page.page.ts":
/*!***************************************************!*\
  !*** ./src/app/initial-page/initial-page.page.ts ***!
  \***************************************************/
/*! exports provided: InitialPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPagePage", function() { return InitialPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _listings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../listings.service */ "./src/app/listings.service.ts");






let InitialPagePage = class InitialPagePage {
    constructor(listingService, nacCtrl, afAuth, afstore, loadingController, changeDetection) {
        //this.presentLoading();
        this.listingService = listingService;
        this.nacCtrl = nacCtrl;
        this.afAuth = afAuth;
        this.afstore = afstore;
        this.loadingController = loadingController;
        this.changeDetection = changeDetection;
        this.isReady = false;
    }
    ngOnInit() {
        var self = this;
        this.afAuth.onAuthStateChanged(function (users) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (users) {
                    self.presentLoading();
                    yield self.listingService.initializeItems();
                    var docRef = (yield self.afstore.collection("users").doc(users.uid).get().toPromise()).data();
                    if (docRef.isRetailer == false) {
                        self.nacCtrl.navigateRoot(['./tabs/tabs/tab1']);
                    }
                    else {
                        self.nacCtrl.navigateRoot(['./retailertabs/retailertabs/retailertab1']);
                    }
                }
                else {
                    self.isReady = true;
                    self.changeDetection.detectChanges();
                }
            });
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                duration: 600,
                translucent: true,
                cssClass: 'transparent',
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            this.changeDetection.detectChanges();
        });
    }
};
InitialPagePage.ctorParameters = () => [
    { type: _listings_service__WEBPACK_IMPORTED_MODULE_5__["ListingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
InitialPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-initial-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./initial-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/initial-page/initial-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./initial-page.page.scss */ "./src/app/initial-page/initial-page.page.scss")).default]
    })
], InitialPagePage);



/***/ })

}]);
//# sourceMappingURL=initial-page-initial-page-module-es2015.js.map