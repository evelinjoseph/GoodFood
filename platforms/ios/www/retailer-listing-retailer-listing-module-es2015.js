(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retailer-listing-retailer-listing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/retailer-listing/retailer-listing.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/retailer-listing/retailer-listing.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"text-align: center\">\n  <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"Back\" defaultHref=\"/retailertabs/retailertabs/retailertab2\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Good Food\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [hidden]=\"!isReady\" fullscreen >\n  <div *ngFor=\"let item of listing\"> \n  <img [src]=\"url\" style=\"width:100%;\"> \n\n  <h1 style=\"text-align: center; font-weight: bold\"> {{ retailer }}</h1>\n  <hr>\n  <ion-text color=\"primary\">\n  <h3 style=\"text-align: center; font-weight: bold;\" > ${{ item.price | number:'1.2-2' }}</h3>\n  </ion-text> \n\n  <div style=\"text-align: center; font-size: large;\">\n    <ion-icon name=\"location-outline\"></ion-icon> \n    {{ location }}\n  </div>\n\n  <p style=\"text-align: center\"> {{ item.quantity }} meals left</p>  \n  <hr>\n  <div style=\"text-align: center\" *ngIf=\"!item.isListed\">\n  <ion-icon name=\"time-outline\"></ion-icon>\n  Pickup Time: {{pickupTime | date:'h:mm a'}}\n  </div>\n\n  <div style=\"text-align: center\" *ngIf=\"item.isListed\">\n    <ion-icon name=\"time-outline\"></ion-icon>\n    Listing Delete Date: {{pickupTime}}\n    </div>\n  <hr>\n  <!-- after publish and clicking on edit -->\n  <ion-item [hidden]=\"isRead\">\n    <ion-label>Delete Date</ion-label>\n    <ion-datetime value={{pickupTime}} [(ngModel)]=\"pDate\" (ionChange)=\"setPickupDate(this.pDate)\"></ion-datetime>\n  </ion-item>\n  <ion-item [hidden]=\"isRead\">\n    <ion-label>Delete/Pick Up Time</ion-label>\n    <ion-datetime value={{pickupTime}} display-format=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"time\" (ionChange)=\"setPickupTime(this.time)\"></ion-datetime>\n  </ion-item> \n \n  <p style=\"text-align: center; font-size: large;\"> {{ item.description }} </p>\n</div>\n</ion-content>\n\n<ion-toolbar [hidden]=\"!isReady\" position=\"bottom\" style=\"text-align: center;\" color=\"translucent\" *ngFor=\"let item of listing\"> \n  <ion-button *ngIf=\"!item.isListed\" size =\"large\" (click)=\"publish(item)\">Publish</ion-button>\n  <ion-button *ngIf=\"item.isListed\" size =\"large\" (click)=\"edit(item)\">{{buttonText}}</ion-button>\n  <ion-button *ngIf=\"item.isListed\" size =\"large\" (click)=\"unpublish(item)\">Unpublish</ion-button>\n</ion-toolbar>\n\n");

/***/ }),

/***/ "./src/app/retailer-listing/retailer-listing-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/retailer-listing/retailer-listing-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RetailerListingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerListingPageRoutingModule", function() { return RetailerListingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _retailer_listing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retailer-listing.page */ "./src/app/retailer-listing/retailer-listing.page.ts");




const routes = [
    {
        path: '',
        component: _retailer_listing_page__WEBPACK_IMPORTED_MODULE_3__["RetailerListingPage"]
    }
];
let RetailerListingPageRoutingModule = class RetailerListingPageRoutingModule {
};
RetailerListingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RetailerListingPageRoutingModule);



/***/ }),

/***/ "./src/app/retailer-listing/retailer-listing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/retailer-listing/retailer-listing.module.ts ***!
  \*************************************************************/
/*! exports provided: RetailerListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerListingPageModule", function() { return RetailerListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _retailer_listing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retailer-listing-routing.module */ "./src/app/retailer-listing/retailer-listing-routing.module.ts");
/* harmony import */ var _retailer_listing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retailer-listing.page */ "./src/app/retailer-listing/retailer-listing.page.ts");







let RetailerListingPageModule = class RetailerListingPageModule {
};
RetailerListingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _retailer_listing_routing_module__WEBPACK_IMPORTED_MODULE_5__["RetailerListingPageRoutingModule"]
        ],
        declarations: [_retailer_listing_page__WEBPACK_IMPORTED_MODULE_6__["RetailerListingPage"]]
    })
], RetailerListingPageModule);



/***/ }),

/***/ "./src/app/retailer-listing/retailer-listing.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/retailer-listing/retailer-listing.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\n  color: black;\n  border-style: solid;\n  background-color: black;\n}\n\n.ion-text {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0YWlsZXItbGlzdGluZy9yZXRhaWxlci1saXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3JldGFpbGVyLWxpc3RpbmcvcmV0YWlsZXItbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIH1cbi5pb24tdGV4dHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/retailer-listing/retailer-listing.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/retailer-listing/retailer-listing.page.ts ***!
  \***********************************************************/
/*! exports provided: RetailerListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerListingPage", function() { return RetailerListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _listings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../listings.service */ "./src/app/listings.service.ts");









let RetailerListingPage = class RetailerListingPage {
    constructor(listingService, nacCtrl, activatedRoute, afAuth, afstore, afStorage, changeDetection, loadingController, alertController) {
        this.listingService = listingService;
        this.nacCtrl = nacCtrl;
        this.activatedRoute = activatedRoute;
        this.afAuth = afAuth;
        this.afstore = afstore;
        this.afStorage = afStorage;
        this.changeDetection = changeDetection;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.isReady = false;
        this.buttonText = "Edit";
        this.isRead = true;
    }
    ngOnInit() {
        this.presentLoading();
        this.listingID = this.activatedRoute.snapshot.queryParamMap.get('id');
        var self = this;
        this.afAuth.onAuthStateChanged(function (user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (user) {
                    self.retailerUID = user.uid;
                    var userRef = (yield self.afstore.collection("users").doc(self.retailerUID).get().toPromise()).data();
                    self.retailer = userRef.name;
                    self.location = userRef.location;
                    self.retailerType = userRef.retailerType;
                    self.listing = userRef.listings;
                    self.pickupTime = userRef.pickupTime.toDate().toLocaleString();
                    self.listing = self.listing.filter(currentListing => {
                        if (currentListing.listingID && self.listingID) {
                            return (currentListing.listingID.toLowerCase().indexOf(self.listingID.toLowerCase()) > -1);
                        }
                    });
                    if (self.listing[0].isListed) {
                        var listingRef = (yield self.afstore.collection("listings").doc(self.listingID).get().toPromise()).data();
                        self.pickupTime = listingRef.deleteDate.toDate().toLocaleString();
                    }
                    var storageRef = self.afStorage.ref(`images/${self.retailerUID}`).getDownloadURL().toPromise().then(function (url) {
                        self.url = url;
                    }).catch(function (error) {
                        self.url = 'assets/images/default.png';
                    });
                    self.changeDetection.detectChanges();
                }
                else {
                    console.log('no user signed in');
                }
            });
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
    publish(listing) {
        this.date = new Date();
        this.pickupDate = new Date(this.pickupTime);
        const data = {
            description: listing.description,
            listingID: listing.listingID,
            price: listing.price,
            quantity: listing.quantity,
            retailerType: this.retailerType,
            location: this.location,
            retailerUID: this.retailerUID,
            deleteDate: new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), this.pickupDate.getHours(), this.pickupDate.getMinutes(), this.pickupDate.getSeconds(), this.pickupDate.getMilliseconds())
        };
        this.afstore.collection("listings").doc(this.listingID).set(data);
        this.afstore.doc(`users/${this.retailerUID}`).update({
            listings: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayUnion({
                quantity: listing.quantity,
                price: listing.price,
                description: listing.description,
                listingID: listing.listingID,
                isListed: true
            })
        });
        this.afstore.doc(`users/${this.retailerUID}`).update({
            listings: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayRemove({
                quantity: listing.quantity,
                price: listing.price,
                description: listing.description,
                listingID: listing.listingID,
                isListed: false
            })
        });
        this.changeDetection.detectChanges();
        this.presentAlert();
        this.nacCtrl.navigateRoot(["./retailertabs/retailertabs/retailertab2"]);
        this.changeDetection.detectChanges();
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resolveFunction;
            const promise = new Promise(resolve => {
                resolveFunction = resolve;
            });
            const alert = yield this.alertController.create({
                header: 'Listing Successfully Published!',
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
    unpublish(listing) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.presentAlertUnpublish();
            if (confirm) {
                this.afstore.doc(`users/${this.retailerUID}`).update({
                    listings: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayUnion({
                        description: listing.description,
                        listingID: listing.listingID,
                        price: listing.price,
                        quantity: listing.quantity,
                        isListed: false
                    })
                });
                this.afstore.doc(`users/${this.retailerUID}`).update({
                    listings: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayRemove({
                        description: listing.description,
                        listingID: listing.listingID,
                        price: listing.price,
                        quantity: listing.quantity,
                        isListed: listing.isListed
                    })
                });
                yield this.listingService.deleteListing(listing);
                this.afstore.collection('listings').doc(listing.listingID).delete();
                this.nacCtrl.navigateRoot(["./retailertabs/retailertabs/retailertab2"]);
                this.changeDetection.detectChanges();
            }
        });
    }
    presentAlertUnpublish() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resolveFunction;
            const promise = new Promise(resolve => {
                resolveFunction = resolve;
            });
            const alert = yield this.alertController.create({
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
    setPickupTime(pickupTime) {
        let date = new Date(pickupTime);
        this.time = date.toString();
        console.log(this.time);
    }
    setPickupDate(pickupDate) {
        console.log(pickupDate);
        this.pDate = (new Date(pickupDate)).toDateString();
        console.log(this.pDate);
    }
    edit(listing) {
        if (this.buttonText == "Edit") {
            this.isRead = false;
            this.buttonText = "Save";
        }
        else {
            this.isRead = true;
            this.buttonText = "Edit";
            //set pickuptime
            //change deleteDate in firestore      
            this.time = new Date(this.time);
            this.pDate = new Date(this.pDate);
            let newDate = new Date(this.pDate.getFullYear(), this.pDate.getMonth(), this.pDate.getDate(), this.time.getHours(), this.time.getMinutes(), this.time.getSeconds(), this.time.getMilliseconds());
            console.log(newDate);
            const data = {
                description: listing.description,
                listingID: listing.listingID,
                price: listing.price,
                quantity: listing.quantity,
                retailerType: this.retailerType,
                location: this.location,
                retailerUID: this.retailerUID,
                deleteDate: new Date(this.pDate.getFullYear(), this.pDate.getMonth(), this.pDate.getDate(), this.time.getHours(), this.time.getMinutes(), this.time.getSeconds(), this.time.getMilliseconds())
            };
            this.afstore.collection("listings").doc(this.listingID).set(data);
            this.pickupTime = newDate.toLocaleString();
        }
    }
};
RetailerListingPage.ctorParameters = () => [
    { type: _listings_service__WEBPACK_IMPORTED_MODULE_8__["ListingsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
RetailerListingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-retailer-listing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./retailer-listing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/retailer-listing/retailer-listing.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./retailer-listing.page.scss */ "./src/app/retailer-listing/retailer-listing.page.scss")).default]
    })
], RetailerListingPage);



/***/ })

}]);
//# sourceMappingURL=retailer-listing-retailer-listing-module-es2015.js.map