(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retailertab3-retailertab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab3/retailertab3.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab3/retailertab3.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"text-align: center\">\r\n  <ion-toolbar color=\"primary\" mode=\"ios\">\r\n    <ion-title>\r\n      Good Food\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [hidden]=\"!isReady\">  \r\n  <img [src]=\"url\" style=\"width:100%;\"> \r\n  <h1 style=\"text-align: center;\"> {{ name }} </h1>\r\n\r\n  <div id=\"container\" *ngIf=\"!isRead\">\r\n\r\n    <div class=\"ion-text-center\" *ngIf=\"!isUploading && !isUploaded\">\r\n      \r\n        <h2>Image Upload</h2>\r\n      \r\n        <ion-button class=\"ion-text-center\" color=\"primary\" style=\"width: 100%\">\r\n          <input type=\"file\" (change)=\"uploadImage($event.target.files)\" />\r\n        </ion-button>\r\n      </div>\r\n     \r\n\r\n    <!-- File upload progress bar -->\r\n    <!-- <div *ngIf=\"percentageVal | async as percentage\">\r\n      Progress: {{ percentage | number }}%\r\n      <ion-progress-bar value=\"{{ percentage / 100 }}\"></ion-progress-bar>\r\n    </div>\r\n\r\n    <div *ngIf=\"trackSnapshot | async as snap\">\r\n      File size: {{ snap.totalBytes | formatFileSize }} \r\n      \r\n      Data transfered: {{ snap.bytesTransferred | formatFileSize }}\r\n    </div>     -->\r\n\r\n  </div>\r\n \r\n  <ion-item >    \r\n    <ion-label>\r\n      Retailer Name:\r\n    </ion-label>\r\n    <ion-textarea placeholder=\"{{ name }}\" [readonly]=\"isRead\" [(ngModel)]=\"name\" ></ion-textarea>\r\n  </ion-item>\r\n\r\n   <ion-item >    \r\n        <ion-label>\r\n          Retailer UID:\r\n        </ion-label>\r\n        <ion-textarea placeholder=\"{{ retailerUID }}\" [readonly]=true  ></ion-textarea>\r\n    </ion-item>\r\n\r\n     <ion-item >    \r\n        <ion-label>\r\n          Retailer Email Address:\r\n        </ion-label>\r\n        <ion-textarea placeholder=\"{{ email }}\" [readonly]=true  ></ion-textarea>\r\n    </ion-item>\r\n    \r\n    <div style=\"text-align: center\"> \r\n      <section >\r\n        <br>\r\n        <ion-button expand=\"block\" (click)=\"edit()\">{{buttonText}}</ion-button>\r\n      </section>\r\n      <section>\r\n        <ion-button expand=\"block\" (click)=\"updatePassword()\">Update Password</ion-button>\r\n      </section>\r\n      <section *ngIf=\"!isVerified\">\r\n        <ion-button expand=\"block\" (click)=\"sendEmail()\">Send Verification Email</ion-button>\r\n      </section>\r\n    </div>\r\n\r\n    \r\n</ion-content>");

/***/ }),

/***/ "./src/app/retailertab3/format-file-size.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/retailertab3/format-file-size.pipe.ts ***!
  \*******************************************************/
/*! exports provided: FormatFileSizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatFileSizePipe", function() { return FormatFileSizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];
let FormatFileSizePipe = class FormatFileSizePipe {
    transform(sizeInBytes, longForm) {
        const units = longForm
            ? FILE_SIZE_UNITS_LONG
            : FILE_SIZE_UNITS;
        let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        const size = sizeInBytes / Math.pow(1024, power); // size in new units
        const formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
        const unit = units[power];
        return `${formattedSize} ${unit}`;
    }
};
FormatFileSizePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'formatFileSize'
    })
], FormatFileSizePipe);



/***/ }),

/***/ "./src/app/retailertab3/retailertab3-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/retailertab3/retailertab3-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: Retailertab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Retailertab3PageRoutingModule", function() { return Retailertab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _retailertab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retailertab3.page */ "./src/app/retailertab3/retailertab3.page.ts");




const routes = [
    {
        path: '',
        component: _retailertab3_page__WEBPACK_IMPORTED_MODULE_3__["Retailertab3Page"]
    }
];
let Retailertab3PageRoutingModule = class Retailertab3PageRoutingModule {
};
Retailertab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Retailertab3PageRoutingModule);



/***/ }),

/***/ "./src/app/retailertab3/retailertab3.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/retailertab3/retailertab3.module.ts ***!
  \*****************************************************/
/*! exports provided: Retailertab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Retailertab3PageModule", function() { return Retailertab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _retailertab3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retailertab3-routing.module */ "./src/app/retailertab3/retailertab3-routing.module.ts");
/* harmony import */ var _retailertab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retailertab3.page */ "./src/app/retailertab3/retailertab3.page.ts");
/* harmony import */ var _format_file_size_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./format-file-size.pipe */ "./src/app/retailertab3/format-file-size.pipe.ts");








let Retailertab3PageModule = class Retailertab3PageModule {
};
Retailertab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _retailertab3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Retailertab3PageRoutingModule"]
        ],
        declarations: [
            _retailertab3_page__WEBPACK_IMPORTED_MODULE_6__["Retailertab3Page"],
            _format_file_size_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatFileSizePipe"]
        ]
    })
], Retailertab3PageModule);



/***/ }),

/***/ "./src/app/retailertab3/retailertab3.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/retailertab3/retailertab3.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldGFpbGVydGFiMy9yZXRhaWxlcnRhYjMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/retailertab3/retailertab3.page.ts":
/*!***************************************************!*\
  !*** ./src/app/retailertab3/retailertab3.page.ts ***!
  \***************************************************/
/*! exports provided: Retailertab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Retailertab3Page", function() { return Retailertab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");










let Retailertab3Page = class Retailertab3Page {
    constructor(nacCtrl, activatedRoute, firestore, afStorage, afAuth, loadingController, changeDetection, emailComposer, alertController) {
        this.nacCtrl = nacCtrl;
        this.activatedRoute = activatedRoute;
        this.firestore = firestore;
        this.afStorage = afStorage;
        this.afAuth = afAuth;
        this.loadingController = loadingController;
        this.changeDetection = changeDetection;
        this.emailComposer = emailComposer;
        this.alertController = alertController;
        this.buttonText = "Edit";
        this.isRead = true;
        this.isReady = false;
        this.isVerified = false;
        this.isFileUploading = false;
        this.isFileUploaded = false;
        // Define uploaded files collection
        this.filesCollection = firestore.collection('imagesCollection');
        this.files = this.filesCollection.valueChanges();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            try {
                var self = this;
                yield (firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(function (user) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (user) {
                            self.userUID = user.uid;
                            self.userRef = (yield self.firestore.collection("users").doc(self.userUID).get().toPromise()).data();
                            self.retailerType = self.userRef.retailerType;
                            self.retailerUID = self.userRef.retailerUID;
                            self.email = self.userRef.email;
                            self.name = self.userRef.name;
                            self.isVerified = self.userRef.isVerified;
                            var storageRef = self.afStorage.ref(`images/${self.userUID}`).getDownloadURL().toPromise().then(function (url) {
                                self.url = url;
                            }).catch(function (error) {
                                self.url = 'assets/images/default.png';
                            });
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
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.userUID) {
                const userRef = (yield this.firestore.collection("users").doc(this.userUID).get().toPromise()).data();
                this.isVerified = userRef.isVerified;
                this.changeDetection.detectChanges();
                this.isReady = true;
            }
        });
    }
    updatePassword() {
        this.nacCtrl.navigateRoot(['./retailer-update-password']);
    }
    sendEmail() {
        Email.send({
            SecureToken: "c11c8a65-d4f9-45b7-8c2a-61f9c48e0ea7",
            To: 'goodfoodinnova@gmail.com',
            From: 'goodfoodinnova@gmail.com',
            Subject: "New Retailer Verification Reminder",
            Body: 'Hello, please verify retailer: ' + this.name + ' with email: ' + this.email + ' and uid: ' + this.retailerUID + '. Thank you!'
        }).then((message) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (message == "OK") {
                console.log(message);
                this.presentConfirmation("A message has been sent to ensure your account is verified!");
            }
            else {
                console.log("SMTP.js Error: " + message);
                const emailConfirmation = yield this.presentAlertCheck();
                if (emailConfirmation) {
                    let newEmail = {
                        to: 'goodfoodinnova@gmail.com',
                        subject: 'New Retailer Verification',
                        body: 'Hello, please verify retailer: ' + this.name + ' with email: ' + this.email + ' and uid: ' + this.retailerUID + '. Thank you!',
                        isHtml: true,
                    };
                    this.emailComposer.isAvailable().then((available) => {
                        if (available) {
                            console.log("isAvailable");
                        }
                    }).catch((error) => { console.log('EmailComposer Error: ' + error.message); });
                    this.emailComposer.open(newEmail);
                }
            }
        }));
    }
    presentAlertCheck() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resolveFunction;
            const promise = new Promise(resolve => {
                resolveFunction = resolve;
            });
            const alert = yield this.alertController.create({
                header: 'Confirm Navigation',
                message: 'You are about to be navigated out of this application. Click OK to continue.',
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
    edit() {
        console.log("clicked edit");
        console.log(this.buttonText);
        console.log(this.isRead);
        if (this.buttonText == "Edit") {
            this.isRead = false;
            console.log("entered if");
            this.buttonText = "Save";
            this.changeDetection.detectChanges();
        }
        else {
            let self = this;
            var storageRef = this.afStorage.ref(`images/${this.userUID}`).getDownloadURL().toPromise().then(function (url) {
                self.url = url;
            }).catch(function (error) {
                self.url = 'assets/images/default.png';
            });
            this.changeDetection.detectChanges();
            const { name } = this;
            if (name.trim().length != 0) {
                try {
                    this.firestore.doc(`users/${this.userUID}`).update({
                        name
                    });
                    this.isRead = true;
                    this.buttonText = "Edit";
                }
                catch (error) {
                    console.log(error.message);
                }
            }
            else {
                this.presentAlert("Please enter a value for name");
            }
        }
    }
    presentAlert(errorMessage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resolveFunction;
            const promise = new Promise(resolve => {
                resolveFunction = resolve;
            });
            const alert = yield this.alertController.create({
                header: 'Error',
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
    presentConfirmation(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resolveFunction;
            const promise = new Promise(resolve => {
                resolveFunction = resolve;
            });
            const alert = yield this.alertController.create({
                header: 'Email Confirmation',
                message: message,
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
    uploadImage(event) {
        const file = event.item(0);
        // Image validation
        if (file.type.split('/')[0] !== 'image') {
            this.presentAlert('File type is not supported!');
            return;
        }
        this.isFileUploading = true;
        this.isFileUploaded = false;
        this.imgName = this.retailerUID;
        // Storage path
        const fileStoragePath = `images/${this.imgName}`;
        // Image reference
        const imageRef = this.afStorage.ref(fileStoragePath);
        // File upload task
        this.fileUploadTask = this.afStorage.upload(fileStoragePath, file);
        // Show uploading progress
        this.percentageVal = this.fileUploadTask.percentageChanges();
        this.trackSnapshot = this.fileUploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            // Retreive uploaded image storage path
            this.UploadedImageURL = imageRef.getDownloadURL();
            this.UploadedImageURL.subscribe(resp => {
                this.storeFilesFirebase({
                    name: this.retailerUID,
                    filepath: resp,
                    size: this.imgSize
                });
                this.isFileUploading = false;
                this.isFileUploaded = true;
            }, error => {
                console.log(error);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(snap => {
            this.imgSize = snap.totalBytes;
        }));
    }
    storeFilesFirebase(image) {
        //const fileId = this.afstore.createId();
        this.filesCollection.doc(this.retailerUID).set(image).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }
};
Retailertab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_9__["EmailComposer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
Retailertab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-retailertab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./retailertab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab3/retailertab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./retailertab3.page.scss */ "./src/app/retailertab3/retailertab3.page.scss")).default]
    })
], Retailertab3Page);



/***/ })

}]);
//# sourceMappingURL=retailertab3-retailertab3-module-es2015.js.map