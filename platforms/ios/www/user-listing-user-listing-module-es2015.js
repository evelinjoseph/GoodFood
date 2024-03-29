(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-listing-user-listing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-listing/user-listing.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-listing/user-listing.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"text-align: center\">\n  <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"Back\" defaultHref=\"/tabs/tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Good Food\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [hidden]=\"!isReady\" fullscreen>\n  <img [src]=\"url\" style=\"width:100%;\"> \n\n  <h1 style=\"text-align: center; font-weight: bold\"> {{ retailer }}</h1>\n  <hr>\n  <ion-text color=\"primary\">\n  <h3 style=\"text-align: center; font-weight: bold;\" > ${{ price | number:'1.2-2' }}</h3>\n  </ion-text> \n\n  <div style=\"text-align: center; font-size: large;\">\n    <ion-icon name=\"location-outline\"></ion-icon> \n    {{ location }}\n  </div>\n\n  <p style=\"text-align: center; font-weight: bold;\"> {{ quantity }} meals left</p>  \n  <hr> \n  <div style=\"text-align: center;\">\n    <ion-icon name=\"time-outline\"></ion-icon>\n   Pick Up By: {{deleteDate}}\n  </div>\n  <hr>\n \n  <p style=\"text-align: center; font-weight: bold;\" > Please keep in mind that because the Good Food application deals with surplus food, all options vary on availability. Thank you!</p> \n  \n  <ion-toolbar [hidden]=\"!isReady\" position=\"bottom\" style=\"text-align: center;\" color=\"translucent\"> \n    <ion-button expand=\"block\" size =\"large\" (click)=\"cart(listing)\">Add To Cart</ion-button>\n  </ion-toolbar>\n</ion-content>\n\n\n\n");

/***/ }),

/***/ "./src/app/user-listing/user-listing-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/user-listing/user-listing-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserListingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListingPageRoutingModule", function() { return UserListingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_listing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-listing.page */ "./src/app/user-listing/user-listing.page.ts");




const routes = [
    {
        path: '',
        component: _user_listing_page__WEBPACK_IMPORTED_MODULE_3__["UserListingPage"]
    }
];
let UserListingPageRoutingModule = class UserListingPageRoutingModule {
};
UserListingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserListingPageRoutingModule);



/***/ }),

/***/ "./src/app/user-listing/user-listing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-listing/user-listing.module.ts ***!
  \*****************************************************/
/*! exports provided: UserListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListingPageModule", function() { return UserListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_listing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-listing-routing.module */ "./src/app/user-listing/user-listing-routing.module.ts");
/* harmony import */ var _user_listing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-listing.page */ "./src/app/user-listing/user-listing.page.ts");







let UserListingPageModule = class UserListingPageModule {
};
UserListingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_listing_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserListingPageRoutingModule"]
        ],
        declarations: [_user_listing_page__WEBPACK_IMPORTED_MODULE_6__["UserListingPage"]]
    })
], UserListingPageModule);



/***/ }),

/***/ "./src/app/user-listing/user-listing.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/user-listing/user-listing.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\n  color: black;\n  border-style: solid;\n  background-color: black;\n}\n\n.ion-text {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0aW5nL3VzZXItbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC91c2VyLWxpc3RpbmcvdXNlci1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuLmlvbi10ZXh0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/user-listing/user-listing.page.ts":
/*!***************************************************!*\
  !*** ./src/app/user-listing/user-listing.page.ts ***!
  \***************************************************/
/*! exports provided: UserListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListingPage", function() { return UserListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let UserListingPage = class UserListingPage {
    constructor(nacCtrl, alertController, activatedRoute, firestore, afStorage, changeDetection, loadingController) {
        this.nacCtrl = nacCtrl;
        this.alertController = alertController;
        this.activatedRoute = activatedRoute;
        this.firestore = firestore;
        this.afStorage = afStorage;
        this.changeDetection = changeDetection;
        this.loadingController = loadingController;
        this.isReady = false;
        this.userCart = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            try {
                this.ID = this.activatedRoute.snapshot.queryParamMap.get('id');
                var self = this;
                //collection.doc.id  ??to add to db when we get to it
                this.listingSub = this.firestore.collection("listings").doc(this.ID).valueChanges().subscribe(data => {
                    this.listing = data;
                    this.description = this.listing.description;
                    this.location = this.listing.location;
                    this.price = this.listing.price;
                    this.quantity = this.listing.quantity;
                    this.retailerType = this.listing.retailerType;
                    this.retailerUID = this.listing.retailerUID;
                    this.deleteDate = this.listing.deleteDate.toDate().toLocaleTimeString();
                    console.log(data);
                    var storageRef = this.afStorage.ref(`images/${this.retailerUID}`).getDownloadURL().toPromise().then(function (url) {
                        self.url = url;
                        console.log(url);
                    }).catch(function (error) {
                        self.url = 'assets/images/default.png';
                    });
                    var retailerRef = this.firestore.doc(`users/${this.retailerUID}`);
                    retailerRef.get().toPromise().then(function (doc) {
                        if (doc.exists) {
                            self.retailer = doc.data().name;
                        }
                        else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch(function (error) {
                        console.log("Error getting document:", error);
                    });
                });
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
    cart(listing) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var self = this;
            yield this.firestore.doc(`users/${firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid}`).get().toPromise().then(function (querySnapshot) {
                self.userCart = [];
                var cart1 = querySnapshot.get("cart");
                self.changeDetection.detectChanges();
                cart1.forEach(element => {
                    self.userCart.push(element);
                });
            })
                .catch(function (error) {
                console.log("Error getting documents");
            });
            this.userCart = this.userCart.filter(cartItem => {
                if (cartItem.listingID && listing.listingID) {
                    return (cartItem.listingID.toLowerCase() === listing.listingID.toLowerCase());
                }
            });
            if (this.userCart.length > 0) {
                const confirm = yield this.presentAlert('Item Previously Added to Cart!');
                this.nacCtrl.navigateRoot(['tabs/tabs/tab3']);
            }
            else {
                this.firestore.doc(`users/${firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid}`).update({
                    cart: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayUnion({
                        description: listing.description,
                        listingID: listing.listingID,
                        retailerUID: listing.retailerUID,
                        quantity: listing.quantity,
                        quantityCart: 1,
                        price: listing.price,
                        totalPrice: listing.price
                    })
                });
                const confirm = yield this.presentAlert('Successfully Added to Cart!');
                this.nacCtrl.navigateRoot(['tabs/tabs/tab3']);
            }
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                duration: 900,
                translucent: true,
                cssClass: 'transparent',
                backdropDismiss: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            this.isReady = true;
            this.changeDetection.detectChanges();
        });
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resolveFunction;
            const promise = new Promise(resolve => {
                resolveFunction = resolve;
            });
            const alert = yield this.alertController.create({
                header: message,
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
    ngOnDestroy() {
        this.listingSub.unsubscribe();
    }
};
UserListingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
UserListingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-listing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-listing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-listing/user-listing.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-listing.page.scss */ "./src/app/user-listing/user-listing.page.scss")).default]
    })
], UserListingPage);



/***/ })

}]);
//# sourceMappingURL=user-listing-user-listing-module-es2015.js.map