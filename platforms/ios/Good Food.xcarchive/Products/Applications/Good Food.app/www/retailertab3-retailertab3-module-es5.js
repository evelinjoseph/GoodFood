(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retailertab3-retailertab3-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab3/retailertab3.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab3/retailertab3.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRetailertab3Retailertab3PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"text-align: center\">\n  <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-title>\n      Good Food\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [hidden]=\"!isReady\" fullscreen>  \n  <img [src]=\"url\" style=\"width:100%;\"> \n  <h1 style=\"text-align: center;\"> {{ name }} </h1>\n\n  <div id=\"container\" *ngIf=\"!isRead\">\n\n    <div class=\"ion-text-center\" *ngIf=\"!isUploading && !isUploaded\">\n      \n        <h2>Image Upload</h2>\n      \n        <ion-button class=\"ion-text-center\" color=\"primary\" style=\"width: 100%\">\n          <input type=\"file\" (change)=\"uploadImage($event.target.files)\" />\n        </ion-button>\n      </div>\n     \n\n    <!-- File upload progress bar -->\n    <!-- <div *ngIf=\"percentageVal | async as percentage\">\n      Progress: {{ percentage | number }}%\n      <ion-progress-bar value=\"{{ percentage / 100 }}\"></ion-progress-bar>\n    </div>\n\n    <div *ngIf=\"trackSnapshot | async as snap\">\n      File size: {{ snap.totalBytes | formatFileSize }} \n      \n      Data transfered: {{ snap.bytesTransferred | formatFileSize }}\n    </div>     -->\n\n  </div>\n \n  <ion-item >    \n    <ion-label>\n      Retailer Name:\n    </ion-label>\n    <ion-textarea placeholder=\"{{ name }}\" [readonly]=\"isRead\" [(ngModel)]=\"name\" ></ion-textarea>\n  </ion-item>\n\n   <ion-item >    \n        <ion-label>\n          Retailer UID:\n        </ion-label>\n        <ion-textarea placeholder=\"{{ retailerUID }}\" [readonly]=true  ></ion-textarea>\n    </ion-item>\n\n     <ion-item >    \n        <ion-label>\n          Retailer Email Address:\n        </ion-label>\n        <ion-textarea placeholder=\"{{ email }}\" [readonly]=true  ></ion-textarea>\n    </ion-item>\n    \n    <div style=\"text-align: center\"> \n      <section >\n        <br>\n        <ion-button expand=\"block\" (click)=\"edit()\">{{buttonText}}</ion-button>\n      </section>\n      <section>\n        <ion-button expand=\"block\" (click)=\"updatePassword()\">Update Password</ion-button>\n      </section>\n      <section *ngIf=\"!isVerified\">\n        <ion-button expand=\"block\" (click)=\"sendEmail()\">Send Verification Email</ion-button>\n      </section>\n    </div>\n\n    \n</ion-content>";
      /***/
    },

    /***/
    "./src/app/retailertab3/format-file-size.pipe.ts":
    /*!*******************************************************!*\
      !*** ./src/app/retailertab3/format-file-size.pipe.ts ***!
      \*******************************************************/

    /*! exports provided: FormatFileSizePipe */

    /***/
    function srcAppRetailertab3FormatFileSizePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormatFileSizePipe", function () {
        return FormatFileSizePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      var FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];

      var FormatFileSizePipe = /*#__PURE__*/function () {
        function FormatFileSizePipe() {
          _classCallCheck(this, FormatFileSizePipe);
        }

        _createClass(FormatFileSizePipe, [{
          key: "transform",
          value: function transform(sizeInBytes, longForm) {
            var units = longForm ? FILE_SIZE_UNITS_LONG : FILE_SIZE_UNITS;
            var power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
            power = Math.min(power, units.length - 1);
            var size = sizeInBytes / Math.pow(1024, power); // size in new units

            var formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals

            var unit = units[power];
            return "".concat(formattedSize, " ").concat(unit);
          }
        }]);

        return FormatFileSizePipe;
      }();

      FormatFileSizePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'formatFileSize'
      })], FormatFileSizePipe);
      /***/
    },

    /***/
    "./src/app/retailertab3/retailertab3-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/retailertab3/retailertab3-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: Retailertab3PageRoutingModule */

    /***/
    function srcAppRetailertab3Retailertab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Retailertab3PageRoutingModule", function () {
        return Retailertab3PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _retailertab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./retailertab3.page */
      "./src/app/retailertab3/retailertab3.page.ts");

      var routes = [{
        path: '',
        component: _retailertab3_page__WEBPACK_IMPORTED_MODULE_3__["Retailertab3Page"]
      }];

      var Retailertab3PageRoutingModule = function Retailertab3PageRoutingModule() {
        _classCallCheck(this, Retailertab3PageRoutingModule);
      };

      Retailertab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Retailertab3PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/retailertab3/retailertab3.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/retailertab3/retailertab3.module.ts ***!
      \*****************************************************/

    /*! exports provided: Retailertab3PageModule */

    /***/
    function srcAppRetailertab3Retailertab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Retailertab3PageModule", function () {
        return Retailertab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _retailertab3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./retailertab3-routing.module */
      "./src/app/retailertab3/retailertab3-routing.module.ts");
      /* harmony import */


      var _retailertab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./retailertab3.page */
      "./src/app/retailertab3/retailertab3.page.ts");
      /* harmony import */


      var _format_file_size_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./format-file-size.pipe */
      "./src/app/retailertab3/format-file-size.pipe.ts");

      var Retailertab3PageModule = function Retailertab3PageModule() {
        _classCallCheck(this, Retailertab3PageModule);
      };

      Retailertab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _retailertab3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Retailertab3PageRoutingModule"]],
        declarations: [_retailertab3_page__WEBPACK_IMPORTED_MODULE_6__["Retailertab3Page"], _format_file_size_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatFileSizePipe"]]
      })], Retailertab3PageModule);
      /***/
    },

    /***/
    "./src/app/retailertab3/retailertab3.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/retailertab3/retailertab3.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRetailertab3Retailertab3PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldGFpbGVydGFiMy9yZXRhaWxlcnRhYjMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/retailertab3/retailertab3.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/retailertab3/retailertab3.page.ts ***!
      \***************************************************/

    /*! exports provided: Retailertab3Page */

    /***/
    function srcAppRetailertab3Retailertab3PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Retailertab3Page", function () {
        return Retailertab3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.cjs.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/email-composer/ngx */
      "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");

      var Retailertab3Page = /*#__PURE__*/function () {
        function Retailertab3Page(nacCtrl, activatedRoute, firestore, afStorage, afAuth, loadingController, changeDetection, emailComposer, alertController) {
          _classCallCheck(this, Retailertab3Page);

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
          this.isFileUploaded = false; // Define uploaded files collection

          this.filesCollection = firestore.collection('imagesCollection');
          this.files = this.filesCollection.valueChanges();
        }

        _createClass(Retailertab3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var self;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.presentLoading();
                      _context2.prev = 1;
                      self = this;
                      _context2.next = 5;
                      return firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(function (user) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var storageRef;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!user) {
                                    _context.next = 13;
                                    break;
                                  }

                                  self.userUID = user.uid;
                                  _context.next = 4;
                                  return self.firestore.collection("users").doc(self.userUID).get().toPromise();

                                case 4:
                                  self.userRef = _context.sent.data();
                                  self.retailerType = self.userRef.retailerType;
                                  self.retailerUID = self.userRef.retailerUID;
                                  self.email = self.userRef.email;
                                  self.name = self.userRef.name;
                                  self.isVerified = self.userRef.isVerified;
                                  storageRef = self.afStorage.ref("images/".concat(self.userUID)).getDownloadURL().toPromise().then(function (url) {
                                    self.url = url;
                                  })["catch"](function (error) {
                                    self.url = 'assets/images/default.png';
                                  });
                                  _context.next = 14;
                                  break;

                                case 13:
                                  console.log('no user signed in');

                                case 14:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));
                      });

                    case 5:
                      _context2.next = 10;
                      break;

                    case 7:
                      _context2.prev = 7;
                      _context2.t0 = _context2["catch"](1);
                      console.log(_context2.t0.message);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[1, 7]]);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var userRef;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this.userUID) {
                        _context3.next = 7;
                        break;
                      }

                      _context3.next = 3;
                      return this.firestore.collection("users").doc(this.userUID).get().toPromise();

                    case 3:
                      userRef = _context3.sent.data();
                      this.isVerified = userRef.isVerified;
                      this.changeDetection.detectChanges();
                      this.isReady = true;

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "updatePassword",
          value: function updatePassword() {
            this.nacCtrl.navigateRoot(['./retailer-update-password']);
          }
        }, {
          key: "sendEmail",
          value: function sendEmail() {
            var _this = this;

            Email.send({
              SecureToken: "c11c8a65-d4f9-45b7-8c2a-61f9c48e0ea7",
              To: 'goodfoodinnova@gmail.com',
              From: 'goodfoodinnova@gmail.com',
              Subject: "New Retailer Verification Reminder",
              Body: 'Hello, please verify retailer: ' + this.name + ' with email: ' + this.email + ' and uid: ' + this.retailerUID + '. Thank you!'
            }).then(function (message) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var emailConfirmation, newEmail;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!(message == "OK")) {
                          _context4.next = 5;
                          break;
                        }

                        console.log(message);
                        alert("A message has been sent to ensure your account is verified!");
                        _context4.next = 10;
                        break;

                      case 5:
                        console.log("SMTP.js Error: " + message);
                        _context4.next = 8;
                        return this.presentAlertCheck();

                      case 8:
                        emailConfirmation = _context4.sent;

                        if (emailConfirmation) {
                          newEmail = {
                            to: 'goodfoodinnova@gmail.com',
                            subject: 'New Retailer Verification',
                            body: 'Hello, please verify retailer: ' + this.name + ' with email: ' + this.email + ' and uid: ' + this.retailerUID + '. Thank you!',
                            isHtml: true
                          };
                          this.emailComposer.isAvailable().then(function (available) {
                            if (available) {
                              console.log("isAvailable");
                            }
                          })["catch"](function (error) {
                            console.log('EmailComposer Error: ' + error.message);
                          });
                          this.emailComposer.open(newEmail);
                        }

                      case 10:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
        }, {
          key: "presentAlertCheck",
          value: function presentAlertCheck() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var resolveFunction, promise, alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        resolveFunction = resolve;
                      });
                      _context5.next = 3;
                      return this.alertController.create({
                        header: 'Confirm Navigation',
                        message: 'You are about to be navigated out of this application. Click OK to continue.',
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {
                            return resolveFunction(true);
                          }
                        }]
                      });

                    case 3:
                      alert = _context5.sent;
                      _context5.next = 6;
                      return alert.present();

                    case 6:
                      return _context5.abrupt("return", promise);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "edit",
          value: function edit() {
            console.log("clicked edit");
            console.log(this.buttonText);
            console.log(this.isRead);

            if (this.buttonText == "Edit") {
              this.isRead = false;
              console.log("entered if");
              this.buttonText = "Save";
              this.changeDetection.detectChanges();
            } else {
              this.isRead = true;
              this.buttonText = "Edit";
              var self = this;
              var storageRef = this.afStorage.ref("images/".concat(this.userUID)).getDownloadURL().toPromise().then(function (url) {
                self.url = url;
              })["catch"](function (error) {
                self.url = 'assets/images/default.png';
              });
              this.changeDetection.detectChanges();
              var name = this.name;

              if (name.trim().length != 0) {
                try {
                  this.firestore.doc("users/".concat(this.userUID)).update({
                    name: name
                  });
                } catch (error) {
                  console.log(error.message);
                }
              } else {
                alert("Please enter a value for name");
              }
            }
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loadingController.create({
                        duration: 900,
                        translucent: true,
                        cssClass: 'transparent',
                        backdropDismiss: false
                      });

                    case 2:
                      loading = _context6.sent;
                      _context6.next = 5;
                      return loading.present();

                    case 5:
                      _context6.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context6.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      this.isReady = true;
                      this.changeDetection.detectChanges();

                    case 12:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "uploadImage",
          value: function uploadImage(event) {
            var _this2 = this;

            var file = event.item(0); // Image validation

            if (file.type.split('/')[0] !== 'image') {
              alert('File type is not supported!');
              return;
            }

            this.isFileUploading = true;
            this.isFileUploaded = false;
            this.imgName = this.retailerUID; // Storage path

            var fileStoragePath = "images/".concat(this.imgName); // Image reference

            var imageRef = this.afStorage.ref(fileStoragePath); // File upload task

            this.fileUploadTask = this.afStorage.upload(fileStoragePath, file); // Show uploading progress

            this.percentageVal = this.fileUploadTask.percentageChanges();
            this.trackSnapshot = this.fileUploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              // Retreive uploaded image storage path
              _this2.UploadedImageURL = imageRef.getDownloadURL();

              _this2.UploadedImageURL.subscribe(function (resp) {
                _this2.storeFilesFirebase({
                  name: _this2.retailerUID,
                  filepath: resp,
                  size: _this2.imgSize
                });

                _this2.isFileUploading = false;
                _this2.isFileUploaded = true;
              }, function (error) {
                console.log(error);
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (snap) {
              _this2.imgSize = snap.totalBytes;
            }));
          }
        }, {
          key: "storeFilesFirebase",
          value: function storeFilesFirebase(image) {
            //const fileId = this.afstore.createId();
            this.filesCollection.doc(this.retailerUID).set(image).then(function (res) {
              console.log(res);
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }]);

        return Retailertab3Page;
      }();

      Retailertab3Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_9__["EmailComposer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      Retailertab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-retailertab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./retailertab3.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab3/retailertab3.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./retailertab3.page.scss */
        "./src/app/retailertab3/retailertab3.page.scss"))["default"]]
      })], Retailertab3Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=retailertab3-retailertab3-module-es5.js.map