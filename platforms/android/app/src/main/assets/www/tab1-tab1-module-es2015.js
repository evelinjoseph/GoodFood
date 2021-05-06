(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar mode=\"ios\" color=\"primary\">\r\n    <ion-title>Good Food</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen [hidden]=\"!isReady\"> \r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  \r\n  <br>\r\n  <ion-toolbar> \r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n      <ion-searchbar mode=\"ios\" (ionInput)=\"search($event)\" placeholder = {{searchText}}></ion-searchbar>\r\n    </ion-col>\r\n      <ion-col size=\"1\">\r\n      <ion-icon size=\"4\" name=\"options\" (click)=\"filterSearch()\"></ion-icon>\r\n    </ion-col>\r\n  </ion-row> \r\n    </ion-toolbar> \r\n    \r\n  <div *ngFor=\"let item of listings\">   \r\n    <ion-card [routerLink]=\"['/user-listing']\" [queryParams]=\"{ id: item.listingID }\" routerDirection=\"forward\">\r\n             \r\n        <img src={{item.url}} style=\"width:100%;\"> \r\n        <ion-card-header> \r\n          <ion-card-title class=\"ion-text-wrap\">{{getRetailer(item.retailerUID)}}</ion-card-title> \r\n        </ion-card-header>\r\n   \r\n     <ion-card-content> \r\n      <p style=\"font-weight: bold; color:black\"> {{item.quantity}} meals left</p>\r\n       <p> Price: ${{item.price | number:'1.2-2'}}</p>\r\n       <p> Location: {{item.location}}</p>\r\n       <p> Retailer Type: {{item.retailerType}}</p>\r\n     </ion-card-content>\r\n   </ion-card>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _listings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../listings.service */ "./src/app/listings.service.ts");








let Tab1Page = class Tab1Page {
    constructor(listingService, afStorage, activatedRoute, nacCtrl, afAuth, firestore, changeDetection, loadingController, alertController) {
        this.listingService = listingService;
        this.afStorage = afStorage;
        this.activatedRoute = activatedRoute;
        this.nacCtrl = nacCtrl;
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.changeDetection = changeDetection;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.searchText = "Search By Retailer";
        this.searchBy = "Retailer";
        this.isReady = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            this.listings = yield this.initializeItems();
        });
    }
    initializeItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let listing = yield this.listingService.initializeItems();
            this.retailers = this.listingService.getUsers().filter(currentListing => {
                if (currentListing.isRetailer) {
                    return (currentListing.isRetailer);
                }
            });
            var self = this;
            listing.forEach(function (element, ind, array) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    var retailerURL;
                    var storageRef = yield self.afStorage.ref(`images/${element.retailerUID}`).getDownloadURL().toPromise().then(function (url) {
                        retailerURL = url;
                    }).catch(function (error) {
                        retailerURL = 'assets/images/default.png';
                    });
                    const data = {
                        deleteDate: element.deleteDate,
                        description: element.description,
                        listingID: element.listingID,
                        location: element.location,
                        price: element.price,
                        quantity: element.quantity,
                        retailerType: element.retailerType,
                        retailerUID: element.retailerUID,
                        url: retailerURL
                    };
                    array[ind] = data;
                });
            });
            this.listingsBackup = listing;
            return listing;
        });
    }
    search(event) {
        this.listings = this.listingsBackup;
        const searchTerm = event.srcElement.value;
        if (!searchTerm) {
            this.changeDetection.detectChanges();
            return;
        }
        if (this.searchBy == "Retailer") {
            let matchingRetailers = [];
            matchingRetailers = this.retailers.filter(retailer => {
                return (retailer.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
            });
            this.listings = this.listings.filter(currentListing => {
                if (matchingRetailers.length > 0 && currentListing.retailerUID) {
                    for (var i = 0; i < matchingRetailers.length; i++) {
                        if (currentListing.retailerUID.toLowerCase().indexOf(matchingRetailers[i].retailerUID.toLowerCase()) > -1) {
                            return true;
                        }
                    }
                }
            });
        }
        else if (this.searchBy == "Location") {
            this.listings = this.listings.filter(currentListing => {
                if (currentListing.location && searchTerm) {
                    return (currentListing.location.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
        }
        else if (this.searchBy == "Retailer Type") {
            this.listings = this.listings.filter(currentListing => {
                if (currentListing.retailerType && searchTerm) {
                    return (currentListing.retailerType.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
        }
        this.changeDetection.detectChanges();
    }
    filterSearch() {
        this.presentAlertRadio();
        this.changeDetection.detectChanges();
    }
    presentAlertRadio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Search By:',
                inputs: [
                    {
                        name: 'radio1',
                        type: 'radio',
                        label: 'Retailer',
                        value: 'Retailer',
                        checked: true
                    },
                    {
                        name: 'radio2',
                        type: 'radio',
                        label: 'Retailer Type',
                        value: 'Retailer Type'
                    },
                    {
                        name: 'radio3',
                        type: 'radio',
                        label: 'Location',
                        value: 'Location'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    },
                    {
                        text: 'OK',
                        handler: (data) => {
                            this.searchText = "Search By " + data;
                            this.searchBy = data;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                duration: 700,
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
    doRefresh(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.isReady = false;
            // this.presentLoading();
            this.listings = yield this.initializeItems();
            event.target.complete();
        });
    }
    getRetailer(uid) {
        if (this.retailers) {
            const user = this.retailers.find(element => element.retailerUID == uid);
            return user.name;
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _listings_service__WEBPACK_IMPORTED_MODULE_7__["ListingsService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map