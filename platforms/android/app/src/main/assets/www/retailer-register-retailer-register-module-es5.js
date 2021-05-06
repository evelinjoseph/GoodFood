(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retailer-register-retailer-register-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/retailer-register/retailer-register.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/retailer-register/retailer-register.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRetailerRegisterRetailerRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"text-align: center\">\r\n  <ion-toolbar color=\"primary\" mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [text]=\"Back\" defaultHref=\"initial-page\"></ion-back-button>\r\n    </ion-buttons> \r\n    <ion-title>\r\n      Registration\r\n    </ion-title>     \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <br>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Pick Up Time</ion-label>\r\n      <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"pickupTime\" (ionChange)=\"setPickupTime(this.pickupTime)\"></ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position = \"floating\">\r\n          Name\r\n        </ion-label>\r\n        <ion-input autocapitalize='sentences' type = \"text\" [(ngModel)]=\"name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-label position = \"floating\">\r\n        Email Address\r\n      </ion-label>\r\n      <ion-input type = \"text\" [(ngModel)]=\"email\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position = \"floating\">\r\n        Address Line 1\r\n      </ion-label>\r\n      <ion-input autocapitalize='sentences' type = \"text\" [(ngModel)]=\"location\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position = \"floating\">\r\n        City\r\n      </ion-label>\r\n      <ion-input autocapitalize='sentences' type = \"text\" [(ngModel)]=\"city\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position = \"floating\">\r\n        State\r\n      </ion-label>\r\n      <ion-input autocapitalize='sentences' type = \"text\" [(ngModel)]=\"state\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position = \"floating\">\r\n        Zipcode\r\n      </ion-label>\r\n      <ion-input type = \"text\" [(ngModel)]=\"zipcode\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position = \"floating\">\r\n        Retailer Type\r\n      </ion-label>\r\n      <ion-input autocapitalize='sentences' type = \"text\" [(ngModel)]=\"retailerType\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label position = \"floating\">\r\n        Password\r\n      </ion-label>\r\n      <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position = \"floating\">\r\n      Confirm Password\r\n    </ion-label>\r\n    <ion-input type=\"password\" [(ngModel)]=\"cpassword\"></ion-input>\r\n</ion-item>\r\n</ion-list>\r\n  \r\n<div style=\"text-align: center\">\r\n  <br>\r\n<ion-button expand=\"block\" fill=\"solid\" Size = \"large\" color=\"primary\" (click)=\"register()\">Sign Up</ion-button>\r\n</div>\r\n</ion-content>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "./src/app/retailer-register/retailer-register-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/retailer-register/retailer-register-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: RetailerRegisterPageRoutingModule */

    /***/
    function srcAppRetailerRegisterRetailerRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RetailerRegisterPageRoutingModule", function () {
        return RetailerRegisterPageRoutingModule;
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


      var _retailer_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./retailer-register.page */
      "./src/app/retailer-register/retailer-register.page.ts");

      var routes = [{
        path: '',
        component: _retailer_register_page__WEBPACK_IMPORTED_MODULE_3__["RetailerRegisterPage"]
      }];

      var RetailerRegisterPageRoutingModule = function RetailerRegisterPageRoutingModule() {
        _classCallCheck(this, RetailerRegisterPageRoutingModule);
      };

      RetailerRegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RetailerRegisterPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/retailer-register/retailer-register.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/retailer-register/retailer-register.module.ts ***!
      \***************************************************************/

    /*! exports provided: RetailerRegisterPageModule */

    /***/
    function srcAppRetailerRegisterRetailerRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RetailerRegisterPageModule", function () {
        return RetailerRegisterPageModule;
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


      var _retailer_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./retailer-register-routing.module */
      "./src/app/retailer-register/retailer-register-routing.module.ts");
      /* harmony import */


      var _retailer_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./retailer-register.page */
      "./src/app/retailer-register/retailer-register.page.ts");

      var RetailerRegisterPageModule = function RetailerRegisterPageModule() {
        _classCallCheck(this, RetailerRegisterPageModule);
      };

      RetailerRegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _retailer_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RetailerRegisterPageRoutingModule"]],
        declarations: [_retailer_register_page__WEBPACK_IMPORTED_MODULE_6__["RetailerRegisterPage"]]
      })], RetailerRegisterPageModule);
      /***/
    },

    /***/
    "./src/app/retailer-register/retailer-register.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/retailer-register/retailer-register.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRetailerRegisterRetailerRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldGFpbGVyLXJlZ2lzdGVyL3JldGFpbGVyLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/retailer-register/retailer-register.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/retailer-register/retailer-register.page.ts ***!
      \*************************************************************/

    /*! exports provided: RetailerRegisterPage */

    /***/
    function srcAppRetailerRegisterRetailerRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RetailerRegisterPage", function () {
        return RetailerRegisterPage;
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/email-composer/ngx */
      "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");

      var RetailerRegisterPage = /*#__PURE__*/function () {
        function RetailerRegisterPage(nacCtrl, afAuth, afstore, alertController, emailComposer) {
          _classCallCheck(this, RetailerRegisterPage);

          this.nacCtrl = nacCtrl;
          this.afAuth = afAuth;
          this.afstore = afstore;
          this.alertController = alertController;
          this.emailComposer = emailComposer;
          this.name = "";
          this.email = "";
          this.password = "";
          this.cpassword = "";
          this.location = "";
          this.city = "";
          this.state = "";
          this.zipcode = "";
          this.retailerType = "";
        }

        _createClass(RetailerRegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "register",
          value: function register() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var name, email, password, cpassword, location, retailerType, res;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      name = this.name, email = this.email, password = this.password, cpassword = this.cpassword, location = this.location, retailerType = this.retailerType;

                      if (!(password !== cpassword)) {
                        _context2.next = 4;
                        break;
                      }

                      throw new Error('Passwords Do Not Match');

                    case 4:
                      if (!(name.length == 0)) {
                        _context2.next = 6;
                        break;
                      }

                      throw new Error('Please Enter a Name');

                    case 6:
                      if (!(location.length == 0)) {
                        _context2.next = 8;
                        break;
                      }

                      throw new Error('Please Enter an Address');

                    case 8:
                      if (!(retailerType.length == 0)) {
                        _context2.next = 10;
                        break;
                      }

                      throw new Error('Please Enter Retailer Type (Restaurant, Food Truck, Cafe)');

                    case 10:
                      if (!(this.pickupTime == undefined)) {
                        _context2.next = 12;
                        break;
                      }

                      throw new Error('Please Enter Pickup Time');

                    case 12:
                      _context2.next = 14;
                      return this.afAuth.createUserWithEmailAndPassword(email, password);

                    case 14:
                      res = _context2.sent;
                      this.afstore.doc("users/".concat(res.user.uid)).set({
                        email: email,
                        name: name,
                        isVerified: false,
                        isRetailer: true,
                        retailerUID: res.user.uid,
                        location: this.location + ", " + this.city + ", " + this.state + " " + this.zipcode,
                        retailerType: retailerType,
                        listings: [],
                        orders: [],
                        pickupTime: new Date(this.pickupTime)
                      }); //https://accounts.google.com/b/0/DisplayUnlockCaptcha

                      Email.send({
                        SecureToken: "c11c8a65-d4f9-45b7-8c2a-61f9c48e0ea7",
                        To: 'goodfoodinnova@gmail.com',
                        From: 'goodfoodinnova@gmail.com',
                        Subject: "New Retailer Verification",
                        Body: 'Hello, please verify retailer: ' + name + ' with email: ' + email + ' and uid: ' + res.user.uid + '. Thank you!'
                      }).then(function (message) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var emailConfirmation, newEmail;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!(message == "OK")) {
                                    _context.next = 5;
                                    break;
                                  }

                                  console.log(message);
                                  this.presentEmailConfirmation("A message has been sent to ensure your account is verified!");
                                  _context.next = 10;
                                  break;

                                case 5:
                                  console.log("SMTP.js Error: " + message);
                                  _context.next = 8;
                                  return this.presentAlertCheck();

                                case 8:
                                  emailConfirmation = _context.sent;

                                  if (emailConfirmation) {
                                    newEmail = {
                                      to: 'goodfoodinnova@gmail.com',
                                      subject: 'New Retailer Verification',
                                      body: 'Hello, please verify retailer: ' + name + ' with email: ' + email + ' and uid: ' + res.user.uid + '. Thank you!',
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
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });
                      this.nacCtrl.navigateRoot(["./retailertabs/retailertabs/retailertab1"]);
                      _context2.next = 23;
                      break;

                    case 20:
                      _context2.prev = 20;
                      _context2.t0 = _context2["catch"](0);
                      this.presentAlert(_context2.t0.message);

                    case 23:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 20]]);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(errorMessage) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var resolveFunction, promise, alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        resolveFunction = resolve;
                      });
                      _context3.next = 3;
                      return this.alertController.create({
                        header: 'Registration Error',
                        message: errorMessage,
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {
                            return resolveFunction(true);
                          }
                        }]
                      });

                    case 3:
                      alert = _context3.sent;
                      _context3.next = 6;
                      return alert.present();

                    case 6:
                      return _context3.abrupt("return", promise);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentEmailConfirmation",
          value: function presentEmailConfirmation(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var resolveFunction, promise, alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        resolveFunction = resolve;
                      });
                      _context4.next = 3;
                      return this.alertController.create({
                        header: 'Email Confirmation',
                        message: message,
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {
                            return resolveFunction(true);
                          }
                        }]
                      });

                    case 3:
                      alert = _context4.sent;
                      _context4.next = 6;
                      return alert.present();

                    case 6:
                      return _context4.abrupt("return", promise);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
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
          key: "setPickupTime",
          value: function setPickupTime(pickupTime) {
            var date = new Date(pickupTime);
            this.pickupTime = date.toString();
          }
        }]);

        return RetailerRegisterPage;
      }();

      RetailerRegisterPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__["EmailComposer"]
        }];
      };

      RetailerRegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-retailer-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./retailer-register.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/retailer-register/retailer-register.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./retailer-register.page.scss */
        "./src/app/retailer-register/retailer-register.page.scss"))["default"]]
      })], RetailerRegisterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=retailer-register-retailer-register-module-es5.js.map