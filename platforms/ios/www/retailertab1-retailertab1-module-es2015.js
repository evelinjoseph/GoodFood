(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retailertab1-retailertab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab1/retailertab1.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab1/retailertab1.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"text-align: center\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>Good Food</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen [hidden]=\"!isReady\" >\n\n  <div *ngIf=\"!((retailerItems | async)?.isVerified) ; else verified\" class=\"centerText\">\n    <ion-text class=\"centerText\" color=\"primary\" style=\"text-align: center\">\n      <p>Your account is not verified yet, please wait until verified to gain access to this tab!</p>\n    </ion-text>\n  </div>\n  <ng-template #verified>\n    <div *ngFor=\"let item of ((retailerItems | async)?.orders).sort().reverse()\">\n      <ion-card>\n\n      <ion-item>\n        <ion-card-title class=\"ion-text-wrap\">{{item.name}}</ion-card-title>\n      </ion-item>\n    \n      <ion-card-content> \n          <p> Description: {{item.description}}</p>\n          <p> Ordered: {{item.date.toDate().toLocaleString()}}</p>\n          <p> User: {{getUser(item.userUID)}}</p>      \n      </ion-card-content>\n    </ion-card>\n    </div>  \n    \n      <ion-text *ngIf=\"((retailerItems | async)?.orders).length <= 0\" class=\"centerText\" color=\"primary\" style=\"text-align: center\">\n        <p>There are no orders currently.</p>\n      </ion-text>\n  </ng-template>  \n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/retailertab1/retailertab1-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/retailertab1/retailertab1-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: Retailertab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Retailertab1PageRoutingModule", function() { return Retailertab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _retailertab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retailertab1.page */ "./src/app/retailertab1/retailertab1.page.ts");




const routes = [
    {
        path: '',
        component: _retailertab1_page__WEBPACK_IMPORTED_MODULE_3__["Retailertab1Page"]
    }
];
let Retailertab1PageRoutingModule = class Retailertab1PageRoutingModule {
};
Retailertab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Retailertab1PageRoutingModule);



/***/ }),

/***/ "./src/app/retailertab1/retailertab1.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/retailertab1/retailertab1.module.ts ***!
  \*****************************************************/
/*! exports provided: Retailertab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Retailertab1PageModule", function() { return Retailertab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _retailertab1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retailertab1-routing.module */ "./src/app/retailertab1/retailertab1-routing.module.ts");
/* harmony import */ var _retailertab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retailertab1.page */ "./src/app/retailertab1/retailertab1.page.ts");







let Retailertab1PageModule = class Retailertab1PageModule {
};
Retailertab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _retailertab1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Retailertab1PageRoutingModule"]
        ],
        declarations: [_retailertab1_page__WEBPACK_IMPORTED_MODULE_6__["Retailertab1Page"]]
    })
], Retailertab1PageModule);



/***/ }),

/***/ "./src/app/retailertab1/retailertab1.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/retailertab1/retailertab1.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centerText {\n  height: 90% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  align-content: center !important;\n  flex-wrap: wrap !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0YWlsZXJ0YWIxL3JldGFpbGVydGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JldGFpbGVydGFiMS9yZXRhaWxlcnRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlclRleHQge1xuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50OyAgICBcbiB9Il19 */");

/***/ }),

/***/ "./src/app/retailertab1/retailertab1.page.ts":
/*!***************************************************!*\
  !*** ./src/app/retailertab1/retailertab1.page.ts ***!
  \***************************************************/
/*! exports provided: Retailertab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Retailertab1Page", function() { return Retailertab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _listings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../listings.service */ "./src/app/listings.service.ts");






let Retailertab1Page = class Retailertab1Page {
    constructor(listingService, afstore, afAuth, changeDetection, alertCtrl) {
        this.listingService = listingService;
        this.afstore = afstore;
        this.afAuth = afAuth;
        this.changeDetection = changeDetection;
        this.alertCtrl = alertCtrl;
        this.isReady = false;
    }
    ngOnInit() {
        var self = this;
        this.afAuth.onAuthStateChanged(function (user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (user) {
                    self.retailerUID = user.uid;
                    self.items = self.afstore.doc(`users/${self.retailerUID}`);
                    self.retailerItems = self.items.valueChanges();
                    yield self.listingService.initializeItems();
                    self.users = self.listingService.getUsers();
                    self.users = self.users.filter(currentUser => {
                        if (!currentUser.isRetailer) {
                            return (!currentUser.isRetailer);
                        }
                    });
                    console.log(self.users);
                    self.isReady = true;
                    self.changeDetection.detectChanges();
                }
                else {
                    console.log('no user signed in');
                }
            });
        });
    }
    ionViewWillEnter() {
        if (this.items) {
            this.retailerItems = this.items.valueChanges();
            this.changeDetection.detectChanges();
            this.isReady = true;
        }
    }
    getUser(uid) {
        if (this.users) {
            const user = this.users.find(element => element.userUID == uid);
            return user.firstname + " " + user.lastname + " (" + uid + ")";
        }
    }
};
Retailertab1Page.ctorParameters = () => [
    { type: _listings_service__WEBPACK_IMPORTED_MODULE_5__["ListingsService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
Retailertab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-retailertab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./retailertab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab1/retailertab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./retailertab1.page.scss */ "./src/app/retailertab1/retailertab1.page.scss")).default]
    })
], Retailertab1Page);



/***/ })

}]);
//# sourceMappingURL=retailertab1-retailertab1-module-es2015.js.map