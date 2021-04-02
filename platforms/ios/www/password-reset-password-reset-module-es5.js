(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-reset-password-reset-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/password-reset/password-reset.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password-reset/password-reset.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPasswordResetPasswordResetPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"text-align: center\" >\n  <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"Back\" defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Good Food\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"text-align: center\" color = \"white\">\n  <img class=\"displayed\"  height=\"250 px\" width=\"250 px\" src=\"assets/images/GoodFoodLogo.png\" alt=\"logo\">\n    <div padding>    \n      <ion-item>    \n            <ion-label position = \"floating\">\n              Email Address\n            </ion-label>\n            <ion-input type = \"text\" [(ngModel)]=\"emailAddress\"></ion-input>\n      </ion-item>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\" (click)=\"resetPassword()\">Reset Password</ion-button>\n        </ion-col>\n      </ion-row>\n\n    <small>\n      Please provide the username or email address that you used when you signed\n      up for your GoodFood account.\n    </small>\n    </div>\n  <form>\n\n\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/password-reset/password-reset-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/password-reset/password-reset-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: PasswordResetPageRoutingModule */

    /***/
    function srcAppPasswordResetPasswordResetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordResetPageRoutingModule", function () {
        return PasswordResetPageRoutingModule;
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


      var _password_reset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./password-reset.page */
      "./src/app/password-reset/password-reset.page.ts");

      var routes = [{
        path: '',
        component: _password_reset_page__WEBPACK_IMPORTED_MODULE_3__["PasswordResetPage"]
      }];

      var PasswordResetPageRoutingModule = function PasswordResetPageRoutingModule() {
        _classCallCheck(this, PasswordResetPageRoutingModule);
      };

      PasswordResetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PasswordResetPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/password-reset/password-reset.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/password-reset/password-reset.module.ts ***!
      \*********************************************************/

    /*! exports provided: PasswordResetPageModule */

    /***/
    function srcAppPasswordResetPasswordResetModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordResetPageModule", function () {
        return PasswordResetPageModule;
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


      var _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./password-reset-routing.module */
      "./src/app/password-reset/password-reset-routing.module.ts");
      /* harmony import */


      var _password_reset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./password-reset.page */
      "./src/app/password-reset/password-reset.page.ts");

      var PasswordResetPageModule = function PasswordResetPageModule() {
        _classCallCheck(this, PasswordResetPageModule);
      };

      PasswordResetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_5__["PasswordResetPageRoutingModule"]],
        declarations: [_password_reset_page__WEBPACK_IMPORTED_MODULE_6__["PasswordResetPage"]]
      })], PasswordResetPageModule);
      /***/
    },

    /***/
    "./src/app/password-reset/password-reset.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/password-reset/password-reset.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPasswordResetPasswordResetPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkLXJlc2V0L3Bhc3N3b3JkLXJlc2V0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/password-reset/password-reset.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/password-reset/password-reset.page.ts ***!
      \*******************************************************/

    /*! exports provided: PasswordResetPage */

    /***/
    function srcAppPasswordResetPasswordResetPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordResetPage", function () {
        return PasswordResetPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var PasswordResetPage = /*#__PURE__*/function () {
        function PasswordResetPage(afAuth, nacCtrl, alertController) {
          _classCallCheck(this, PasswordResetPage);

          this.afAuth = afAuth;
          this.nacCtrl = nacCtrl;
          this.alertController = alertController;
          this.emailAddress = "";
        }

        _createClass(PasswordResetPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "resetPassword",
          value: function resetPassword() {
            var self = this;
            this.afAuth.sendPasswordResetEmail(this.emailAddress).then(function () {
              self.presentAlert("Password Reset Link Sent to Email");
              self.nacCtrl.navigateRoot(['./login']); // Email sent.
            })["catch"](function (error) {
              self.presentAlert(error);
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var resolveFunction, promise, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        resolveFunction = resolve;
                      });
                      _context.next = 3;
                      return this.alertController.create({
                        header: 'Password Reset',
                        message: message,
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {
                            return resolveFunction(true);
                          }
                        }]
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                      return _context.abrupt("return", promise);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return PasswordResetPage;
      }();

      PasswordResetPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      PasswordResetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-reset',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./password-reset.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/password-reset/password-reset.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./password-reset.page.scss */
        "./src/app/password-reset/password-reset.page.scss"))["default"]]
      })], PasswordResetPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=password-reset-password-reset-module-es5.js.map