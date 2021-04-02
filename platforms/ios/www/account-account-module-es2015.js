(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"text-align: center\">\n  <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"Back\" defaultHref=\"/tabs/tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Good Food\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h1 style=\"text-align: center;\"> {{firstName}} {{lastName}} </h1>\n \n  <ion-item >    \n    <ion-label>\n      First Name:\n    </ion-label>\n    <ion-textarea placeholder=\"{{ firstName }}\" [readonly]=\"isRead\" [(ngModel)]=\"firstName\" ></ion-textarea>\n  </ion-item>\n\n  <ion-item >    \n    <ion-label>\n      Last Name:\n    </ion-label>\n    <ion-textarea placeholder=\"{{ lastName }}\" [readonly]=\"isRead\" [(ngModel)]=\"lastName\" ></ion-textarea>\n  </ion-item>\n\n   <ion-item >    \n        <ion-label>\n          User UID:\n        </ion-label>\n        <ion-textarea placeholder=\"{{ userUID }}\" [readonly]=true  ></ion-textarea>\n    </ion-item>\n\n     <ion-item >    \n        <ion-label>\n          Email Address:\n        </ion-label>\n        <ion-textarea placeholder=\"{{ email }}\" [readonly]=true  ></ion-textarea>\n    </ion-item>\n \n    \n    <div style=\"text-align: center\"> \n      \n      <section >\n        <br>\n        <ion-button expand=\"block\" (click)=\"edit()\">{{buttonText}}</ion-button>\n      </section>\n\n      <section>\n        <ion-button expand=\"block\" (click)=\"updatePassword()\">Update Password</ion-button>\n      </section>\n\n      <section >\n        <br>\n        <ion-text color=\"danger\"  (click)=\"deleteAccount()\">\n          <u>Delete Account?</u>\n        </ion-text>\n      </section>\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "./src/app/account/account.page.ts");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/account/account.page.ts");







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "./src/app/account/account.page.scss":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/account/account.page.ts":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let AccountPage = class AccountPage {
    constructor(nacCtrl, activatedRoute, firestore, changeDetection, afAuth, alertCtrl) {
        this.nacCtrl = nacCtrl;
        this.activatedRoute = activatedRoute;
        this.firestore = firestore;
        this.changeDetection = changeDetection;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.buttonText = "Edit";
        this.isRead = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var self = this;
                yield (this.afAuth.onAuthStateChanged(function (user) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (user) {
                            self.userUID = user.uid;
                            var userRef = (yield self.firestore.collection("users").doc(self.userUID).get().toPromise()).data();
                            self.firstName = userRef.firstname;
                            self.lastName = userRef.lastname;
                            self.email = userRef.email;
                            self.changeDetection.detectChanges();
                        }
                        else {
                            console.log('no user signed in');
                        }
                    });
                }));
            }
            catch (error) {
                console.log(error.message);
            }
            this.changeDetection.detectChanges();
        });
    }
    edit() {
        if (this.buttonText == "Edit") {
            this.isRead = false;
            this.buttonText = "Save";
        }
        else {
            this.isRead = true;
            this.buttonText = "Edit";
            const { firstName, lastName } = this;
            if (firstName.trim().length != 0 && lastName.trim().length != 0) {
                try {
                    this.firestore.doc(`users/${this.userUID}`).update({
                        firstname: this.firstName,
                        lastname: this.lastName
                    });
                }
                catch (error) {
                    console.log(error.message);
                }
            }
            else {
                alert("Please enter a value for name");
            }
        }
    }
    updatePassword() {
        this.nacCtrl.navigateRoot(['./update-password']);
    }
    deleteAccount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //let self = this;
            const confirm = yield this.presentAlertDelete();
            var userRef = (yield this.firestore.collection("users").doc(this.userUID).get().toPromise()).data();
            if (confirm) {
                try {
                    (yield this.afAuth.currentUser).delete();
                    this.firestore.collection('archive').doc(this.userUID).set({
                        deleteTime: new Date(),
                        email: userRef.email,
                        firstname: userRef.firstname,
                        lastname: userRef.lastname,
                        isRetailer: userRef.isRetailer,
                        orders: userRef.orders,
                        type: "User Account"
                    });
                    this.firestore.doc(`users/${this.userUID}`).delete();
                    this.nacCtrl.navigateRoot(['./login']);
                    console.log("user deleted");
                }
                catch (error) {
                    console.log(error);
                }
                // firebase.auth().currentUser.delete().then(function() {
                //   // User deleted.       
                //   console.log("entered then")  
                //   console.log(self.userUID);
                //   console.log(userRef);
                //   self.firestore.collection('archive').doc(self.userUID).set({
                //     email: userRef.email,
                //     firstname: userRef.firstname,
                //     lastname: userRef.lastname,
                //     isRetailer: userRef.isRetailer,
                //     orders: userRef.orders,
                //     type: "User Account"
                //   })
                //   .then(function() {
                //       console.log("Document successfully written to Archive!");
                //   })
                //   .catch(function(error) {
                //       console.error("Error writing document: ", error);
                //   });        
                //   self.firestore.doc(`users/${self.userUID}`).delete();
                //   self.nacCtrl.navigateRoot(['./login'])
                //   console.log("user deleted")
                // }).catch(function(error) {
                //   console.log(error)
                //   console.log("Error deleting user")
                // });
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
                message: 'Are you sure you want to delete this account? This is a permanent deletion and cannot be undone. Please enter your password to continue',
                inputs: [
                    {
                        name: 'password',
                        placeholder: 'Password',
                        type: 'password'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => resolveFunction(false)
                    },
                    {
                        text: 'Yes',
                        handler: data => {
                            this.afAuth.signInWithEmailAndPassword(firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.email, data.password).then(function () {
                                console.log("signed in");
                                resolveFunction(true);
                            }).catch(function (error) {
                                console.log(error.message);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
            return promise;
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account.page.scss */ "./src/app/account/account.page.scss")).default]
    })
], AccountPage);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map