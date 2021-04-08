(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paypal-paypal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paypal/paypal.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paypal/paypal.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"text-align: center\">\r\n  <ion-toolbar color=\"primary\" mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [text]=\"Back\" defaultHref=\"/tabs/tabs/tab3\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Good Food\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngFor=\"let item of cart\">\r\n    <ion-card>      \r\n      <ion-card-header>\r\n        <ion-card-title>{{item.name}}</ion-card-title>      \r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <p> Quantity: {{item.quantityCart}} </p>\r\n        <p> Price: ${{item.totalPrice | number:'1.2-2'}} </p>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <ion-toolbar position=\"bottom\" style=\"text-align: center\">\r\n    <div class=\"ion-text-end\" id=\"subtotal\">\r\n      <ion-text > <p style=\"font-size: large;\"> Subtotal ${{paymentAmount | number:'1.2-2'}} </p></ion-text> \r\n      <ion-text > <p style=\"font-size: large;\"> Tax $-</p></ion-text> \r\n      <ion-text > <p id=\"total\"> TOTAL ${{paymentAmount | number:'1.2-2'}} </p></ion-text> \r\n    </div>  \r\n    <div id=\"paypal-button-container\" ></div>  \r\n  </ion-toolbar>\r\n\r\n \r\n</ion-content>\r\n\r\n\r\n\r\n<!-- <ion-footer class=\"ion-no-border\">\r\n   <ion-toolbar position=\"bottom\" style=\"text-align: center;\">\r\n    <div class=\"ion-text-end\" id=\"subtotal\">\r\n      <ion-text > <p style=\"font-size: large;\"> Subtotal ${{paymentAmount | number:'1.2-2'}} </p></ion-text> \r\n      <ion-text > <p style=\"font-size: large;\"> Tax $-</p></ion-text> \r\n      <ion-text > <p id=\"total\"> TOTAL ${{paymentAmount | number:'1.2-2'}} </p></ion-text> \r\n    </div>  \r\n    <div id=\"paypal-button-container\"></div>   \r\n    <div class=\"paypal_div\">\r\n    <ion-button class=\"paypal_button\" expand=\"full\" color=\"warning\" (click)=\"payWithPayPal()\">Pay with PayPal</ion-button>\r\n    \r\n  </div> \r\n </ion-toolbar>\r\n</ion-footer> -->");

/***/ }),

/***/ "./src/app/paypal/paypal-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/paypal/paypal-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PaypalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPageRoutingModule", function() { return PaypalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _paypal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paypal.page */ "./src/app/paypal/paypal.page.ts");




const routes = [
    {
        path: '',
        component: _paypal_page__WEBPACK_IMPORTED_MODULE_3__["PaypalPage"]
    }
];
let PaypalPageRoutingModule = class PaypalPageRoutingModule {
};
PaypalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaypalPageRoutingModule);



/***/ }),

/***/ "./src/app/paypal/paypal.module.ts":
/*!*****************************************!*\
  !*** ./src/app/paypal/paypal.module.ts ***!
  \*****************************************/
/*! exports provided: PaypalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPageModule", function() { return PaypalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _paypal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paypal-routing.module */ "./src/app/paypal/paypal-routing.module.ts");
/* harmony import */ var _paypal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paypal.page */ "./src/app/paypal/paypal.page.ts");







let PaypalPageModule = class PaypalPageModule {
};
PaypalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _paypal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaypalPageRoutingModule"]
        ],
        declarations: [_paypal_page__WEBPACK_IMPORTED_MODULE_6__["PaypalPage"]]
    })
], PaypalPageModule);



/***/ }),

/***/ "./src/app/paypal/paypal.page.scss":
/*!*****************************************!*\
  !*** ./src/app/paypal/paypal.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".paypal_button {\n  font-family: Verdana;\n  font-weight: bold;\n}\n\np {\n  padding-right: 2%;\n  font-size: large;\n}\n\n#total {\n  font-size: large;\n  font-weight: bold;\n}\n\n.paypal_div {\n  padding-bottom: 2%;\n  padding-left: 2%;\n  padding-right: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5cGFsL3BheXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BheXBhbC9wYXlwYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheXBhbF9idXR0b257XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5we1xyXG4gICAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4jdG90YWx7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wYXlwYWxfZGl2e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/paypal/paypal.page.ts":
/*!***************************************!*\
  !*** ./src/app/paypal/paypal.page.ts ***!
  \***************************************/
/*! exports provided: PaypalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPage", function() { return PaypalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let PaypalPage = class PaypalPage {
    constructor(afAuth, nacCtrl, alertController, afstore, payPal, loadingController, changeDetection) {
        this.afAuth = afAuth;
        this.nacCtrl = nacCtrl;
        this.alertController = alertController;
        this.afstore = afstore;
        this.payPal = payPal;
        this.loadingController = loadingController;
        this.changeDetection = changeDetection;
        this.paymentAmount = 0;
        this.currency = 'USD';
        this.cart = [];
    }
    ngOnInit() {
        let self = this;
        this.cart = [];
        this.paymentAmount = 0;
        this.afAuth.onAuthStateChanged(function (user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (user) {
                    self.userUID = user.uid;
                    yield self.getCart();
                    self.changeDetection.detectChanges();
                    self.retailers = yield self.afstore.collection('users').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).toPromise();
                    console.log(self.retailers);
                    try {
                        for (var item of self.cart) {
                            self.listing = yield self.afstore.collection('listings').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).toPromise();
                            let thisListing = self.listing.filter(currentListing => {
                                if (currentListing.listingID && item.listingID) {
                                    return (currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1);
                                }
                            });
                            thisListing.forEach(element => {
                                if (item.quantityCart > element.quantity) {
                                    throw new Error("Sorry, unfortunately there is not enough quantity to complete the " + element.name + " order. Please edit the quantity to be less than or equal to " + element.quantity + ".");
                                }
                            });
                        }
                    }
                    catch (error) {
                        console.log(error);
                        self.presentAlert(error);
                        self.nacCtrl.navigateRoot(['/tabs/tabs/tab3']);
                    }
                }
            });
        });
        setTimeout(() => {
            // Render the PayPal button into #paypal-button-container
            window['paypal'].Buttons({
                // Set up the transaction
                createOrder: function (data, actions) {
                    console.log(self.paymentAmount.toFixed(2));
                    return actions.order.create({
                        purchase_units: [{
                                amount: {
                                    value: self.paymentAmount.toFixed(2)
                                }
                            }]
                    });
                },
                // Finalize the transaction
                onApprove: function (data, actions) {
                    return actions.order.capture()
                        .then(function (details) {
                        // Show a success message to the buyer
                        console.log(self.cart);
                        for (var item of self.cart) {
                            self.date = new Date();
                            self.afstore.doc(`users/${self.userUID}`).update({
                                orders: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                                    name: item.name,
                                    description: item.description,
                                    listingID: item.listingID,
                                    retailerUID: item.retailerUID,
                                    isCurrent: true,
                                    date: self.date
                                })
                            });
                            self.afstore.doc(`users/${self.userUID}`).update({
                                cart: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayRemove({
                                    name: item.name,
                                    description: item.description,
                                    listingID: item.listingID,
                                    retailerUID: item.retailerUID,
                                    quantity: item.quantity,
                                    quantityCart: item.quantityCart,
                                    price: item.price,
                                    totalPrice: item.totalPrice
                                })
                            });
                            self.afstore.doc(`users/${item.retailerUID}`).update({
                                orders: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                                    name: item.name,
                                    description: item.description,
                                    listingID: item.listingID,
                                    retailerUID: item.retailerUID,
                                    userUID: self.userUID,
                                    isCurrent: true,
                                    date: self.date
                                })
                            });
                            //add Email
                            self.currentRetailer = self.retailers.filter(currentListing => {
                                if (currentListing.retailerUID && item.retailerUID) {
                                    return (currentListing.retailerUID.toLowerCase().indexOf(item.retailerUID.toLowerCase()) > -1);
                                }
                            });
                            console.log(self.currentRetailer);
                            console.log(`${self.currentRetailer[0].email}`);
                            Email.send({
                                SecureToken: "c11c8a65-d4f9-45b7-8c2a-61f9c48e0ea7",
                                To: `${self.currentRetailer[0].email}`,
                                From: 'goodfoodinnova@gmail.com',
                                Subject: "New Good Food Order",
                                Body: 'Hello ' + self.currentRetailer[0].name + ', you have an order for your listing: ' + item.name + '. Please check the Good Food application for more details. Thank you!'
                            }).then(message => console.log(message));
                            if (item.quantityCart > 0) {
                                const decrement = firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.increment(-item.quantityCart);
                                console.log(self.listing);
                                let thisListing = self.listing.filter(currentListing => {
                                    if (currentListing.listingID && item.listingID) {
                                        return (currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1);
                                    }
                                });
                                console.log(thisListing);
                                thisListing.forEach(element => {
                                    if (item.quantityCart == element.quantity) {
                                        console.log(self.currentRetailer[0].listings);
                                        var quantityArr = self.currentRetailer[0].listings.filter(currentListing => {
                                            if (currentListing.listingID && item.listingID) {
                                                return (currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1);
                                            }
                                        });
                                        self.afstore.collection('archive').doc(item.listingID).set({
                                            name: item.name,
                                            description: item.description,
                                            listingID: item.listingID,
                                            price: item.price,
                                            type: "Listing",
                                            deleteTime: new Date()
                                        })
                                            .then(function () {
                                            console.log("Document successfully written!");
                                        })
                                            .catch(function (error) {
                                            console.error("Error writing document: ", error);
                                        });
                                        self.afstore.collection('listings').doc(item.listingID).delete();
                                        //change isListed
                                        self.afstore.doc(`users/${item.retailerUID}`).update({
                                            listings: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                                                name: item.name,
                                                description: item.description,
                                                listingID: item.listingID,
                                                price: item.price,
                                                quantity: quantityArr[0].quantity,
                                                isListed: false
                                            })
                                        });
                                        self.afstore.doc(`users/${item.retailerUID}`).update({
                                            listings: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayRemove({
                                                name: item.name,
                                                description: item.description,
                                                listingID: item.listingID,
                                                price: item.price,
                                                quantity: quantityArr[0].quantity,
                                                isListed: true
                                            })
                                        });
                                    }
                                    else {
                                        self.afstore.doc(`listings/${item.listingID}`).update({
                                            quantity: decrement
                                        });
                                    }
                                });
                            }
                        }
                        self.nacCtrl.navigateRoot(['/tabs/tabs/tab4']);
                        self.cart = [];
                        console.log("checkout complete!");
                        alert('Transaction completed by ' + details.payer.name.given_name + '!');
                    })
                        .catch(err => {
                        console.log(err);
                        self.presentAlert(err);
                        self.nacCtrl.navigateRoot(['/tabs/tabs/tab3']);
                    });
                }
            }).render('#paypal-button-container');
        }, 10);
    }
    ionViewWillEnter() {
        this.cart = [];
        this.paymentAmount = 0;
        let self = this;
        this.afAuth.onAuthStateChanged(function (user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (user) {
                    self.userUID = user.uid;
                    yield self.getCart();
                    self.changeDetection.detectChanges();
                }
            });
        });
    }
    getCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var self = this;
            yield this.afstore.doc(`users/${this.userUID}`).get().toPromise().then(function (querySnapshot) {
                self.cart = [];
                self.paymentAmount = 0;
                var cart1 = querySnapshot.get("cart");
                self.changeDetection.detectChanges();
                cart1.forEach(element => {
                    self.cart.push(element);
                    self.paymentAmount += element.totalPrice;
                });
            })
                .catch(function (error) {
                console.log("Error getting documents");
            });
            console.log(this.cart);
            this.changeDetection.detectChanges();
        });
    }
    payWithPayPal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                for (var item of this.cart) {
                    this.listing = yield this.afstore.collection('listings').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).toPromise();
                    let thisListing = this.listing.filter(currentListing => {
                        if (currentListing.listingID && item.listingID) {
                            return (currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1);
                        }
                    });
                    thisListing.forEach(element => {
                        if (item.quantityCart > element.quantity) {
                            throw new Error("Sorry, unfortunately there is not enough quantity to complete the " + element.name + " order. Please edit the quantity to be less than or equal to " + element.quantity + ".");
                        }
                    });
                }
                this.payPal.init({
                    PayPalEnvironmentProduction: 'AZdLLjUn69oERT3rIneIeL6pYWh7iFidUWTrDRfpPDh7F9zcETzH9lYNMbRbnWoRwCX506xQJX0sDoQa',
                    PayPalEnvironmentSandbox: 'AZdLLjUn69oERT3rIneIeL6pYWh7iFidUWTrDRfpPDh7F9zcETzH9lYNMbRbnWoRwCX506xQJX0sDoQa'
                }).then(() => {
                    // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                    this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalConfiguration"]({
                    // Only needed if you get an "Internal Service Error" after PayPal login!
                    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                    })).then(() => {
                        console.log(this.paymentAmount.toString());
                        let payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalPayment"](this.paymentAmount.toString(), this.currency, 'Description', 'sale');
                        this.payPal.renderSinglePaymentUI(payment).then((res) => {
                            console.log(res);
                            // Successfully paid
                            // Example sandbox response
                            //
                            // {
                            //   "client": {
                            //     "environment": "sandbox",
                            //     "product_name": "PayPal iOS SDK",
                            //     "paypal_sdk_version": "2.16.0",
                            //     "platform": "iOS"
                            //   },
                            //   "response_type": "payment",
                            //   "response": {
                            //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                            //     "state": "approved",
                            //     "create_time": "2016-10-03T13:33:33Z",
                            //     "intent": "sale"
                            //   }
                            // }
                            for (var item of this.cart) {
                                this.date = new Date();
                                this.afstore.doc(`users/${this.userUID}`).update({
                                    orders: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                                        name: item.name,
                                        description: item.description,
                                        listingID: item.listingID,
                                        retailerUID: item.retailerUID,
                                        isCurrent: true,
                                        date: this.date
                                    })
                                });
                                this.afstore.doc(`users/${this.userUID}`).update({
                                    cart: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayRemove({
                                        name: item.name,
                                        description: item.description,
                                        listingID: item.listingID,
                                        retailerUID: item.retailerUID,
                                        quantity: item.quantity,
                                        quantityCart: item.quantityCart,
                                        price: item.price,
                                        totalPrice: item.totalPrice
                                    })
                                });
                                this.afstore.doc(`users/${item.retailerUID}`).update({
                                    orders: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                                        name: item.name,
                                        description: item.description,
                                        listingID: item.listingID,
                                        retailerUID: item.retailerUID,
                                        userUID: this.userUID,
                                        isCurrent: true,
                                        date: this.date
                                    })
                                });
                                if (item.quantityCart > 0) {
                                    const decrement = firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.increment(-item.quantityCart);
                                    let thisListing = this.listing.filter(currentListing => {
                                        if (currentListing.listingID && item.listingID) {
                                            return (currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1);
                                        }
                                    });
                                    thisListing.forEach(element => {
                                        if (item.quantityCart == element.quantity) {
                                            console.log(element);
                                            console.log(item);
                                            this.afstore.collection('listings').doc(item.listingID).delete();
                                            //TODO: add to archive
                                        }
                                        else {
                                            this.afstore.doc(`listings/${item.listingID}`).update({
                                                quantity: decrement
                                            });
                                        }
                                    });
                                }
                            }
                            this.nacCtrl.navigateRoot(['/tabs/tabs/tab4']);
                            this.cart = [];
                            console.log("checkout complete!");
                        }, (error) => {
                            // Error or render dialog closed without being successful
                            console.log(error);
                        });
                    }, (error) => {
                        // Error in configuration
                        console.log(error);
                    });
                }, (error) => {
                    // Error in initialization, maybe PayPal isn't supported or something else
                    console.log(error);
                });
            }
            catch (error) {
                console.log(error);
                this.presentAlert(error);
                this.nacCtrl.navigateRoot(['/tabs/tabs/tab3']);
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
                header: 'Order Error',
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
PaypalPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPal"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
PaypalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paypal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./paypal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paypal/paypal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./paypal.page.scss */ "./src/app/paypal/paypal.page.scss")).default]
    })
], PaypalPage);



/***/ })

}]);
//# sourceMappingURL=paypal-paypal-module-es2015.js.map