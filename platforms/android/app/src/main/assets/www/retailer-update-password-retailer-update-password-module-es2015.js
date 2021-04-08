(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retailer-update-password-retailer-update-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/retailer-update-password/retailer-update-password.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/retailer-update-password/retailer-update-password.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"text-align: center\">\r\n  <ion-toolbar color=\"primary\" mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [text]=\"Back\" defaultHref='/retailertabs/retailertabs/retailertab3'></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Good Food\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"text-align: center\">\r\n  <img class=\"displayed\" height=\"250 px\" width=\"250 px\" src=\"assets/images/GoodFoodLogo.png\" alt=\"logo\">\r\n    <div padding>\r\n      <small>\r\n        Please enter the current password and new password for your Good Food account.\r\n      </small>\r\n      <br>\r\n      <ion-item>\r\n        <ion-label position = \"floating\">\r\n            Current Password\r\n          </ion-label>\r\n          <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item>\r\n        <ion-label position = \"floating\">\r\n            New Password\r\n          </ion-label>\r\n          <ion-input type=\"password\" [(ngModel)]=\"newpassword\"></ion-input>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item>\r\n        <ion-label position = \"floating\">\r\n          Confirm Password\r\n        </ion-label>\r\n        <ion-input type=\"password\" [(ngModel)]=\"cpassword\"></ion-input>\r\n    </ion-item>\r\n    <br>\r\n    <ion-button type=\"submit\" color=\"primary\" expand=\"block\" (click)=\"updatePassword()\">Update Password</ion-button>\r\n    \r\n  </div>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/retailer-update-password/retailer-update-password-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/retailer-update-password/retailer-update-password-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: RetailerUpdatePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerUpdatePasswordPageRoutingModule", function() { return RetailerUpdatePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _retailer_update_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retailer-update-password.page */ "./src/app/retailer-update-password/retailer-update-password.page.ts");




const routes = [
    {
        path: '',
        component: _retailer_update_password_page__WEBPACK_IMPORTED_MODULE_3__["RetailerUpdatePasswordPage"]
    }
];
let RetailerUpdatePasswordPageRoutingModule = class RetailerUpdatePasswordPageRoutingModule {
};
RetailerUpdatePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RetailerUpdatePasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/retailer-update-password/retailer-update-password.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/retailer-update-password/retailer-update-password.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RetailerUpdatePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerUpdatePasswordPageModule", function() { return RetailerUpdatePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _retailer_update_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retailer-update-password-routing.module */ "./src/app/retailer-update-password/retailer-update-password-routing.module.ts");
/* harmony import */ var _retailer_update_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retailer-update-password.page */ "./src/app/retailer-update-password/retailer-update-password.page.ts");







let RetailerUpdatePasswordPageModule = class RetailerUpdatePasswordPageModule {
};
RetailerUpdatePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _retailer_update_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["RetailerUpdatePasswordPageRoutingModule"]
        ],
        declarations: [_retailer_update_password_page__WEBPACK_IMPORTED_MODULE_6__["RetailerUpdatePasswordPage"]]
    })
], RetailerUpdatePasswordPageModule);



/***/ }),

/***/ "./src/app/retailer-update-password/retailer-update-password.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/retailer-update-password/retailer-update-password.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldGFpbGVyLXVwZGF0ZS1wYXNzd29yZC9yZXRhaWxlci11cGRhdGUtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/retailer-update-password/retailer-update-password.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/retailer-update-password/retailer-update-password.page.ts ***!
  \***************************************************************************/
/*! exports provided: RetailerUpdatePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerUpdatePasswordPage", function() { return RetailerUpdatePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





let RetailerUpdatePasswordPage = class RetailerUpdatePasswordPage {
    constructor(afAuth, nacCtrl) {
        this.afAuth = afAuth;
        this.nacCtrl = nacCtrl;
        this.password = "";
        this.newpassword = "";
        this.cpassword = "";
    }
    ngOnInit() {
    }
    updatePassword() {
        try {
            let self = this;
            const { password, newpassword, cpassword } = this;
            if (password.trim().length == 0) {
                throw new Error('Please Enter Current Password');
            }
            if (newpassword.trim().length == 0) {
                throw new Error('Please Enter New Password');
            }
            if (cpassword.trim().length == 0) {
                throw new Error('Please Confirm Password');
            }
            if (newpassword !== cpassword) {
                throw new Error('Passwords Do Not Match');
            }
            self.afAuth.signInWithEmailAndPassword(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.email, password).then(function () {
                firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.updatePassword(newpassword).then(function () {
                    alert("Password Updated");
                    self.password = "";
                    self.newpassword = "";
                    self.cpassword = "";
                    self.nacCtrl.navigateRoot(['/retailertabs/retailertabs/retailertab3']);
                }).catch(function (error) {
                    alert(error);
                });
            }).catch(function (error) {
                alert(error);
            });
        }
        catch (error) {
            alert(error.message);
        }
    }
    ngOnDestroy() {
        this.password = "";
        this.newpassword = "";
        this.cpassword = "";
        console.log("Left update password");
    }
};
RetailerUpdatePasswordPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
RetailerUpdatePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-retailer-update-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./retailer-update-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/retailer-update-password/retailer-update-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./retailer-update-password.page.scss */ "./src/app/retailer-update-password/retailer-update-password.page.scss")).default]
    })
], RetailerUpdatePasswordPage);



/***/ })

}]);
//# sourceMappingURL=retailer-update-password-retailer-update-password-module-es2015.js.map