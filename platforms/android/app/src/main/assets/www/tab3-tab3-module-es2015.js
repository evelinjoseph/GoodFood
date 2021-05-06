(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"text-align: center\">\r\n  <ion-toolbar mode=\"ios\" color=\"primary\">\r\n    <ion-title>Good Food</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen [hidden]=\"!isReady\">\r\n  <div *ngFor=\"let item of cart\">\r\n    <ion-card>\r\n     <ion-item>\r\n      <ion-card-title class=\"ion-text-wrap\">{{getRetailer(item.retailerUID)}}</ion-card-title>\r\n      <ion-button  (click)=\"delete(item)\" fill=\"outline\" slot=\"end\">Delete</ion-button> \r\n    </ion-item>\r\n   \r\n     <ion-card-content> \r\n        <p style=\"font-size: large;\" > Quantity: \r\n          <ion-button (click)=\"dec(item)\" size=\"small\" fill=\"clear\"> \r\n            <ion-icon name=\"remove-circle-outline\"></ion-icon> \r\n          </ion-button>\r\n          {{item.quantityCart}}\r\n          <ion-button (click)=\"inc(item)\" size=\"small\" fill=\"clear\"> \r\n            <ion-icon name=\"add-circle-outline\"></ion-icon> \r\n          </ion-button></p>\r\n          <p style=\"font-size: large;\"> Price: ${{item.totalPrice | number:'1.2-2'}}</p>\r\n     </ion-card-content>\r\n   </ion-card>\r\n  </div>\r\n  <ion-text class=\"centerText\" *ngIf=\"((userItems | async)?.cart).length <= 0\" color=\"primary\" style=\"text-align: center\">\r\n      <p>There are no items in the cart.</p>\r\n  </ion-text>  \r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"((userItems | async)?.cart).length > 0\" >\r\n  <!-- class=\"ion-no-border\" -->\r\n \r\n  <ion-toolbar *ngIf=\"userItems | async as cartData\"  position=\"bottom\" style=\"text-align: center;\">\r\n    <div class=\"ion-text-end\" id=\"subtotal\">\r\n      <ion-text > <p style=\"font-size: large;\"> Subtotal: ${{subtotal | number:'1.2-2'}} </p></ion-text> \r\n    </div>     \r\n    <ion-button expand=\"block\" (click)=\"checkOut(cartData.cart)\" size=\"large\">Checkout</ion-button>\r\n </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/tab3/tab3-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/tab3/tab3-routing.module.ts");








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".large {\n  font-size: 1500%;\n}\n\n.centerText {\n  height: 90% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  align-content: center !important;\n  flex-wrap: wrap !important;\n}\n\n#subtotal {\n  padding-right: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQztFQUNHLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhcmdle1xyXG4gICAgZm9udC1zaXplOiAxNTAwJTtcclxufVxyXG5cclxuLmNlbnRlclRleHQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7ICAgIFxyXG4gfVxyXG5cclxuICNzdWJ0b3RhbHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gfVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _listings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../listings.service */ "./src/app/listings.service.ts");







let Tab3Page = class Tab3Page {
    constructor(listingService, afauth, nacCtrl, afstore, changeDetection, alertCtrl) {
        this.listingService = listingService;
        this.afauth = afauth;
        this.nacCtrl = nacCtrl;
        this.afstore = afstore;
        this.changeDetection = changeDetection;
        this.alertCtrl = alertCtrl;
        this.cart = [];
        this.subtotal = 0;
        this.isReady = false;
    }
    ngOnInit() {
        var self = this;
        this.cart = [];
        this.subtotal = 0;
        this.afauth.onAuthStateChanged(function (user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (user) {
                    self.userUID = user.uid;
                    self.items = self.afstore.doc(`users/${self.userUID}`);
                    self.userItems = self.items.valueChanges();
                    yield self.listingService.initializeItems();
                    self.retailers = self.listingService.getUsers().filter(currentUser => {
                        if (currentUser.isRetailer) {
                            return (currentUser.isRetailer);
                        }
                    });
                    self.changeDetection.detectChanges();
                    self.getCart();
                }
            });
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cart = [];
            this.subtotal = 0;
            if (this.items) {
                this.userItems = this.items.valueChanges();
                yield this.listingService.initializeItems();
                this.retailers = this.listingService.getUsers().filter(currentListing => {
                    if (currentListing.isRetailer) {
                        return (currentListing.isRetailer);
                    }
                });
                this.getCart();
                this.changeDetection.detectChanges();
            }
        });
    }
    getCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var self = this;
            yield this.afstore.doc(`users/${this.userUID}`).get().toPromise().then(function (querySnapshot) {
                self.cart = [];
                self.subtotal = 0;
                var cart1 = querySnapshot.get("cart");
                self.changeDetection.detectChanges();
                cart1.forEach(element => {
                    self.cart.push(element);
                    self.subtotal += element.totalPrice;
                });
            })
                .catch(function (error) {
                console.log("Error getting documents");
            });
            this.changeDetection.detectChanges();
            this.isReady = true;
        });
    }
    delete(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.presentAlertDelete();
            if (confirm) {
                this.afstore.doc(`users/${this.userUID}`).update({
                    cart: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayRemove({
                        description: item.description,
                        listingID: item.listingID,
                        retailerUID: item.retailerUID,
                        quantity: item.quantity,
                        quantityCart: item.quantityCart,
                        price: item.price,
                        totalPrice: item.totalPrice
                    })
                });
                this.cart = this.cart.filter(currentListing => {
                    if (currentListing.listingID && item.listingID) {
                        return (!(currentListing.listingID.toLowerCase() === item.listingID.toLowerCase()));
                    }
                });
                this.subtotal -= item.totalPrice;
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
                message: 'Are you sure you want to delete this item from your cart?',
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
    inc(item) {
        if (item.quantityCart + 1 <= item.quantity) {
            var quantityValue = item.quantityCart + 1;
            var priceValue = item.totalPrice + item.price;
            this.afstore.doc(`users/${this.userUID}`).update({
                cart: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayUnion({
                    description: item.description,
                    listingID: item.listingID,
                    retailerUID: item.retailerUID,
                    quantity: item.quantity,
                    quantityCart: quantityValue,
                    price: item.price,
                    totalPrice: priceValue
                })
            });
            this.afstore.doc(`users/${this.userUID}`).update({
                cart: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayRemove({
                    description: item.description,
                    listingID: item.listingID,
                    retailerUID: item.retailerUID,
                    quantity: item.quantity,
                    quantityCart: item.quantityCart,
                    price: item.price,
                    totalPrice: item.totalPrice
                })
            });
            item.quantityCart++;
            item.totalPrice += item.price;
            this.subtotal += item.price;
        }
    }
    dec(item) {
        if (item.quantityCart - 1 > 0) {
            var quantityValue = item.quantityCart - 1;
            var priceValue = item.totalPrice - item.price;
            this.afstore.doc(`users/${this.userUID}`).update({
                cart: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayUnion({
                    description: item.description,
                    listingID: item.listingID,
                    retailerUID: item.retailerUID,
                    quantity: item.quantity,
                    quantityCart: quantityValue,
                    totalPrice: priceValue,
                    price: item.price
                })
            });
            this.afstore.doc(`users/${this.userUID}`).update({
                cart: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayRemove({
                    description: item.description,
                    listingID: item.listingID,
                    retailerUID: item.retailerUID,
                    quantity: item.quantity,
                    quantityCart: item.quantityCart,
                    price: item.price,
                    totalPrice: item.totalPrice
                })
            });
            item.quantityCart--;
            item.totalPrice -= item.price;
            this.subtotal -= item.price;
        }
    }
    getRetailer(uid) {
        if (this.retailers) {
            const user = this.retailers.find(element => element.retailerUID == uid);
            return user.name;
        }
    }
    checkOut(cart) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.presentAlertCheck();
            if (confirm) {
                this.nacCtrl.navigateRoot(['./paypal']);
            }
        });
    }
    presentAlertCheck() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resolveFunction;
            const promise = new Promise(resolve => {
                resolveFunction = resolve;
            });
            const alert = yield this.alertCtrl.create({
                header: 'Confirm Check-Out',
                message: 'Are you sure you want to check out these items from your cart?',
                buttons: [
                    {
                        text: 'No',
                        handler: () => resolveFunction(false)
                    },
                    {
                        text: 'Yes',
                        handler: () => resolveFunction(true)
                    }
                ]
            });
            yield alert.present();
            return promise;
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _listings_service__WEBPACK_IMPORTED_MODULE_6__["ListingsService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    })
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map