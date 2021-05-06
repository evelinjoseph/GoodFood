(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"text-align: center\">\n  <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"Back\" defaultHref=\"initial-page\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Good Food\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color = \"white\">\n  <img class=\"displayed\"  height=\"250 px\" width=\"250 px\" src=\"assets/images/GoodFoodLogo.png\" alt=\"logo\">\n    <div padding>    \n      <ion-item>    \n            <ion-label position = \"floating\">\n              Email Address\n            </ion-label>\n            <ion-input id = \"inputEmail\" type = \"text\" [(ngModel)]=\"email\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position = \"floating\">\n              Password\n            </ion-label>\n            <ion-input id = \"inputPassword\" type=\"password\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n        </div>\n     \n <div style=\"text-align: center\"> \n  <section >\n    <br>\n    <ion-button expand=\"block\" id=\"login2\" size =\"large\" (click)=\"login()\">Login</ion-button>\n  </section>\n  <br>\n  <section>\n    <ion-text [routerDirection] = \"'forward'\" [routerLink]=\"['/password-reset']\" color=\"primary\">\n      <a><u>Forgot Password?</u></a>\n    </ion-text>\n  </section>\n</div>\n  \n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".displayed {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5ZWR7XG5cbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _listings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../listings.service */ "./src/app/listings.service.ts");







let LoginPage = class LoginPage {
    constructor(listingService, nacCtrl, afAuth, afstore, alertController) {
        this.listingService = listingService;
        this.nacCtrl = nacCtrl;
        this.afAuth = afAuth;
        this.afstore = afstore;
        this.alertController = alertController;
        this.email = "";
        this.password = "";
    }
    ngOnInit() {
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const { email, password } = this;
                if (email.length == 0) {
                    throw new Error('Please Enter Email Address');
                }
                if (password.length == 0) {
                    throw new Error('Please Enter Password');
                }
                var self = this;
                this.afAuth.setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].Auth.Persistence.LOCAL).then(function () {
                    // New sign-in will be persisted with local persistence.
                    return self.afAuth.signInWithEmailAndPassword(email, password);
                })
                    .catch(function (error) {
                    self.presentAlert(error.message);
                });
                if (firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser) {
                    yield this.listingService.initializeItems();
                    var docRef = (yield this.afstore.collection("users").doc(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid).get().toPromise()).data();
                    if (docRef.isRetailer == false) {
                        this.nacCtrl.navigateRoot(['./tabs/tabs/tab1']);
                    }
                    else {
                        this.nacCtrl.navigateRoot(['./retailertabs/retailertabs/retailertab1']);
                    }
                }
            }
            catch (err) {
                console.log(err.message);
                this.presentAlert(err.message);
            }
        });
    }
    presentAlert(errorMessage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resolveFunction;
            const promise = new Promise(resolve => {
                resolveFunction = resolve;
            });
            const alert = yield this.alertController.create({
                header: 'Login Error',
                message: errorMessage,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => resolveFunction(true)
                    }
                ]
            });
            yield alert.present();
            return promise;
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _listings_service__WEBPACK_IMPORTED_MODULE_6__["ListingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map