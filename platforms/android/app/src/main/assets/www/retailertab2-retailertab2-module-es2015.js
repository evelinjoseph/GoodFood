(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retailertab2-retailertab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab2/retailertab2.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab2/retailertab2.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar mode=\"ios\" color=\"primary\">\r\n    <ion-title>Good Food</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen [hidden]=\"!isReady\">\r\n\r\n  <div *ngIf=\"!((retailerItems | async)?.isVerified) ; else verified\" class=\"centerText\">\r\n    <ion-text class=\"centerText\" color=\"primary\" style=\"text-align: center\">\r\n      <p>Your account is not verified yet, please wait until verified to gain access to this tab!</p>\r\n    </ion-text>\r\n  </div>\r\n\r\n  <ng-template #verified>\r\n      <div *ngFor=\"let item of ((retailerItems | async)?.listings)\">\r\n        <ion-card>\r\n\r\n        <ion-item>\r\n          <ion-card-title class=\"ion-text-wrap\" [routerLink]=\"['/retailer-listing']\" [queryParams]=\"{ id: item.listingID }\" routerDirection=\"forward\">{{item.name}}</ion-card-title>\r\n        \r\n        </ion-item>\r\n      \r\n        <ion-card-content > \r\n          <div [routerLink]=\"['/retailer-listing']\" [queryParams]=\"{ id: item.listingID }\" routerDirection=\"forward\">\r\n\r\n          <p> Price: ${{item.price | number:'1.2-2'}}</p>\r\n          <p> Description: {{item.description}}</p>\r\n          <p> Location: {{location}}</p>\r\n          <p> Retailer Type: {{retailerType}}</p>\r\n          \r\n          </div>\r\n          <ion-button  (click)=\"delete(item)\" fill=\"outline\" slot=\"end\">Delete</ion-button> \r\n          <ion-button  *ngIf=\"item.isListed\" (click)=\"unpublish(item)\" slot=\"end\">Unpublish</ion-button>       \r\n        </ion-card-content>\r\n\r\n        \r\n      </ion-card>\r\n      </div>      \r\n        <ion-text *ngIf=\"((retailerItems | async)?.listings).length <= 0\" class=\"centerText\" color=\"primary\" style=\"text-align: center\">\r\n          <p>There are no listings currently.</p>\r\n        </ion-text>\r\n  </ng-template>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <div *ngIf=\"((retailerItems | async)?.isVerified)\">\r\n    <ion-toolbar position=\"bottom\" style=\"text-align: center;\">     \r\n      <ion-button size =\"large\" [routerLink]=\"['/new-listing']\" routerDirection=\"forward\">Add Listing</ion-button>    \r\n    </ion-toolbar>\r\n  </div>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ "./src/app/retailertab2/retailertab2-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/retailertab2/retailertab2-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: Retailertab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Retailertab2PageRoutingModule", function() { return Retailertab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _retailertab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retailertab2.page */ "./src/app/retailertab2/retailertab2.page.ts");




const routes = [
    {
        path: '',
        component: _retailertab2_page__WEBPACK_IMPORTED_MODULE_3__["Retailertab2Page"]
    }
];
let Retailertab2PageRoutingModule = class Retailertab2PageRoutingModule {
};
Retailertab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Retailertab2PageRoutingModule);



/***/ }),

/***/ "./src/app/retailertab2/retailertab2.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/retailertab2/retailertab2.module.ts ***!
  \*****************************************************/
/*! exports provided: Retailertab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Retailertab2PageModule", function() { return Retailertab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _retailertab2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retailertab2-routing.module */ "./src/app/retailertab2/retailertab2-routing.module.ts");
/* harmony import */ var _retailertab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retailertab2.page */ "./src/app/retailertab2/retailertab2.page.ts");







let Retailertab2PageModule = class Retailertab2PageModule {
};
Retailertab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _retailertab2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Retailertab2PageRoutingModule"]
        ],
        declarations: [_retailertab2_page__WEBPACK_IMPORTED_MODULE_6__["Retailertab2Page"]]
    })
], Retailertab2PageModule);



/***/ }),

/***/ "./src/app/retailertab2/retailertab2.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/retailertab2/retailertab2.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centerText {\n  height: 90% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  align-content: center !important;\n  flex-wrap: wrap !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0YWlsZXJ0YWIyL3JldGFpbGVydGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JldGFpbGVydGFiMi9yZXRhaWxlcnRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlclRleHQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7ICAgIFxyXG4gfSJdfQ== */");

/***/ }),

/***/ "./src/app/retailertab2/retailertab2.page.ts":
/*!***************************************************!*\
  !*** ./src/app/retailertab2/retailertab2.page.ts ***!
  \***************************************************/
/*! exports provided: Retailertab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Retailertab2Page", function() { return Retailertab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _listings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../listings.service */ "./src/app/listings.service.ts");







let Retailertab2Page = class Retailertab2Page {
    constructor(listingService, afAuth, afstore, changeDetection, alertCtrl) {
        this.listingService = listingService;
        this.afAuth = afAuth;
        this.afstore = afstore;
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
                    var userRef = (yield self.afstore.collection("users").doc(self.retailerUID).get().toPromise()).data();
                    self.retailerType = userRef.retailerType;
                    self.location = userRef.location;
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
    delete(listing) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.presentAlertDelete();
            if (confirm) {
                this.afstore.doc(`users/${this.retailerUID}`).update({
                    listings: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayRemove({
                        name: listing.name,
                        description: listing.description,
                        listingID: listing.listingID,
                        price: listing.price,
                        quantity: listing.quantity,
                        isListed: listing.isListed
                    })
                });
                this.afstore.collection('listings').doc(listing.listingID).delete();
                //TODO: add to archive when deleted
                this.afstore.collection('archive').doc(listing.listingID).set({
                    name: listing.name,
                    description: listing.description,
                    listingID: listing.listingID,
                    price: listing.price,
                    type: "Listing",
                    deleteTime: new Date()
                })
                    .then(function () {
                    console.log("Document successfully written!");
                })
                    .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
                // TODO: may need to delete from carts?
                yield this.listingService.deleteListing(listing);
            }
        });
    }
    unpublish(listing) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.presentAlertUnpublish();
            if (confirm) {
                this.afstore.doc(`users/${this.retailerUID}`).update({
                    listings: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayUnion({
                        name: listing.name,
                        description: listing.description,
                        listingID: listing.listingID,
                        price: listing.price,
                        quantity: listing.quantity,
                        isListed: false
                    })
                });
                this.afstore.doc(`users/${this.retailerUID}`).update({
                    listings: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayRemove({
                        name: listing.name,
                        description: listing.description,
                        listingID: listing.listingID,
                        price: listing.price,
                        quantity: listing.quantity,
                        isListed: listing.isListed
                    })
                });
                // TODO: may need to delete from carts?
                yield this.listingService.deleteListing(listing);
                this.afstore.collection('listings').doc(listing.listingID).delete();
            }
        });
    }
    presentAlertDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resolveFunction;
            const promise = new Promise(resolve => {
                resolveFunction = resolve;
            });
            const alert = yield this.alertCtrl.create({
                header: 'Confirm Delete',
                message: 'Are you sure you want to delete this listing?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => resolveFunction(true)
                    }, {
                        text: 'No',
                        handler: () => resolveFunction(false)
                    }
                ]
            });
            yield alert.present();
            return promise;
        });
    }
    presentAlertUnpublish() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resolveFunction;
            const promise = new Promise(resolve => {
                resolveFunction = resolve;
            });
            const alert = yield this.alertCtrl.create({
                header: 'Confirm Unpublish',
                message: 'Are you sure you want to unpublish this listing?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => resolveFunction(true)
                    }, {
                        text: 'No',
                        handler: () => resolveFunction(false)
                    }
                ]
            });
            yield alert.present();
            return promise;
        });
    }
};
Retailertab2Page.ctorParameters = () => [
    { type: _listings_service__WEBPACK_IMPORTED_MODULE_6__["ListingsService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
Retailertab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-retailertab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./retailertab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab2/retailertab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./retailertab2.page.scss */ "./src/app/retailertab2/retailertab2.page.scss")).default]
    })
], Retailertab2Page);



/***/ })

}]);
//# sourceMappingURL=retailertab2-retailertab2-module-es2015.js.map