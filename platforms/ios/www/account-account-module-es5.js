(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAccountAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"text-align: center\">\n  <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"Back\" defaultHref=\"/tabs/tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Good Food\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h1 style=\"text-align: center;\"> {{firstName}} {{lastName}} </h1>\n \n  <ion-item >    \n    <ion-label>\n      First Name:\n    </ion-label>\n    <ion-textarea placeholder=\"{{ firstName }}\" [readonly]=\"isRead\" [(ngModel)]=\"firstName\" ></ion-textarea>\n  </ion-item>\n\n  <ion-item >    \n    <ion-label>\n      Last Name:\n    </ion-label>\n    <ion-textarea placeholder=\"{{ lastName }}\" [readonly]=\"isRead\" [(ngModel)]=\"lastName\" ></ion-textarea>\n  </ion-item>\n\n   <ion-item >    \n        <ion-label>\n          User UID:\n        </ion-label>\n        <ion-textarea placeholder=\"{{ userUID }}\" [readonly]=true  ></ion-textarea>\n    </ion-item>\n\n     <ion-item >    \n        <ion-label>\n          Email Address:\n        </ion-label>\n        <ion-textarea placeholder=\"{{ email }}\" [readonly]=true  ></ion-textarea>\n    </ion-item>\n \n    \n    <div style=\"text-align: center\"> \n      \n      <section >\n        <br>\n        <ion-button expand=\"block\" (click)=\"edit()\">{{buttonText}}</ion-button>\n      </section>\n\n      <section>\n        <ion-button expand=\"block\" (click)=\"updatePassword()\">Update Password</ion-button>\n      </section>\n\n      <section >\n        <br>\n        <ion-text color=\"danger\"  (click)=\"deleteAccount()\">\n          <u>Delete Account?</u>\n        </ion-text>\n      </section>\n    </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/account/account-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/account/account-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AccountPageRoutingModule */

    /***/
    function srcAppAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
        return AccountPageRoutingModule;
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


      var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account.page */
      "./src/app/account/account.page.ts");

      var routes = [{
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
      }];

      var AccountPageRoutingModule = function AccountPageRoutingModule() {
        _classCallCheck(this, AccountPageRoutingModule);
      };

      AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/account/account.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/account/account.module.ts ***!
      \*******************************************/

    /*! exports provided: AccountPageModule */

    /***/
    function srcAppAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
        return AccountPageModule;
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


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-routing.module */
      "./src/app/account/account-routing.module.ts");
      /* harmony import */


      var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account.page */
      "./src/app/account/account.page.ts");

      var AccountPageModule = function AccountPageModule() {
        _classCallCheck(this, AccountPageModule);
      };

      AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
      })], AccountPageModule);
      /***/
    },

    /***/
    "./src/app/account/account.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/account/account.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppAccountAccountPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/account/account.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/account/account.page.ts ***!
      \*****************************************/

    /*! exports provided: AccountPage */

    /***/
    function srcAppAccountAccountPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
        return AccountPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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

      var AccountPage = /*#__PURE__*/function () {
        function AccountPage(nacCtrl, activatedRoute, firestore, changeDetection, afAuth, alertController) {
          _classCallCheck(this, AccountPage);

          this.nacCtrl = nacCtrl;
          this.activatedRoute = activatedRoute;
          this.firestore = firestore;
          this.changeDetection = changeDetection;
          this.afAuth = afAuth;
          this.alertController = alertController;
          this.buttonText = "Edit";
          this.isRead = true;
        }

        _createClass(AccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var self;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      self = this;
                      _context2.next = 4;
                      return this.afAuth.onAuthStateChanged(function (user) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var userRef;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!user) {
                                    _context.next = 11;
                                    break;
                                  }

                                  self.userUID = user.uid;
                                  _context.next = 4;
                                  return self.firestore.collection("users").doc(self.userUID).get().toPromise();

                                case 4:
                                  userRef = _context.sent.data();
                                  self.firstName = userRef.firstname;
                                  self.lastName = userRef.lastname;
                                  self.email = userRef.email;
                                  self.changeDetection.detectChanges();
                                  _context.next = 12;
                                  break;

                                case 11:
                                  console.log('no user signed in');

                                case 12:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));
                      });

                    case 4:
                      _context2.next = 9;
                      break;

                    case 6:
                      _context2.prev = 6;
                      _context2.t0 = _context2["catch"](0);
                      console.log(_context2.t0.message);

                    case 9:
                      this.changeDetection.detectChanges();

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 6]]);
            }));
          }
        }, {
          key: "edit",
          value: function edit() {
            if (this.buttonText == "Edit") {
              this.isRead = false;
              this.buttonText = "Save";
            } else {
              var firstName = this.firstName,
                  lastName = this.lastName;

              if (firstName.trim().length != 0 && lastName.trim().length != 0) {
                try {
                  this.firestore.doc("users/".concat(this.userUID)).update({
                    firstname: this.firstName,
                    lastname: this.lastName
                  });
                  this.isRead = true;
                  this.buttonText = "Edit";
                } catch (error) {
                  console.log(error.message);
                }
              } else {
                this.presentAlert("Please enter a value for name");
              }
            }
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
                        header: 'Error',
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
          key: "updatePassword",
          value: function updatePassword() {
            this.nacCtrl.navigateRoot(['./update-password']);
          }
        }, {
          key: "deleteAccount",
          value: function deleteAccount() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var confirm, userRef;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.presentAlertDelete();

                    case 2:
                      confirm = _context4.sent;
                      _context4.next = 5;
                      return this.firestore.collection("users").doc(this.userUID).get().toPromise();

                    case 5:
                      userRef = _context4.sent.data();

                      if (!confirm) {
                        _context4.next = 20;
                        break;
                      }

                      _context4.prev = 7;
                      _context4.next = 10;
                      return this.afAuth.currentUser;

                    case 10:
                      _context4.sent["delete"]();

                      this.firestore.collection('archive').doc(this.userUID).set({
                        deleteTime: new Date(),
                        email: userRef.email,
                        firstname: userRef.firstname,
                        lastname: userRef.lastname,
                        isRetailer: userRef.isRetailer,
                        orders: userRef.orders,
                        type: "User Account"
                      });
                      this.firestore.doc("users/".concat(this.userUID))["delete"]();
                      this.nacCtrl.navigateRoot(['./login']);
                      console.log("user deleted");
                      _context4.next = 20;
                      break;

                    case 17:
                      _context4.prev = 17;
                      _context4.t0 = _context4["catch"](7);
                      console.log(_context4.t0);

                    case 20:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[7, 17]]);
            }));
          }
        }, {
          key: "presentAlertDelete",
          value: function presentAlertDelete() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this = this;

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
                        header: 'Confirm Delete',
                        message: 'Are you sure you want to delete this account? This is a permanent deletion and cannot be undone. Please enter your password to continue',
                        inputs: [{
                          name: 'password',
                          placeholder: 'Password',
                          type: 'password'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          handler: function handler() {
                            return resolveFunction(false);
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler(data) {
                            _this.afAuth.signInWithEmailAndPassword(firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.email, data.password).then(function () {
                              console.log("signed in");
                              resolveFunction(true);
                            })["catch"](function (error) {
                              console.log(error.message);
                            });
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
        }]);

        return AccountPage;
      }();

      AccountPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./account.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./account.page.scss */
        "./src/app/account/account.page.scss"))["default"]]
      })], AccountPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-account-module-es5.js.map