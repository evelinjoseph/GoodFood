(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-password-update-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/update-password/update-password.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-password/update-password.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUpdatePasswordUpdatePasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"text-align: center\">\n  <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"Back\" defaultHref=\"/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Good Food\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"text-align: center\">\n  <img class=\"displayed\" height=\"250 px\" width=\"250 px\" src=\"assets/images/GoodFoodLogo.png\" alt=\"logo\">\n    <div padding>\n      <small>\n        Please enter the current password and new password for your Good Food account.\n      </small>\n      <br>\n      <ion-item>\n        <ion-label position = \"floating\">\n            Current Password\n          </ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n      <br>\n      <ion-item>\n        <ion-label position = \"floating\">\n            New Password\n          </ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"newpassword\"></ion-input>\n      </ion-item>\n      <br>\n      <ion-item>\n        <ion-label position = \"floating\">\n          Confirm Password\n        </ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"cpassword\"></ion-input>\n    </ion-item>\n    <br>\n    <ion-button type=\"submit\" color=\"primary\" expand=\"block\" (click)=\"updatePassword()\">Update Password</ion-button>\n    \n  </div>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/update-password/update-password-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/update-password/update-password-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: UpdatePasswordPageRoutingModule */

    /***/
    function srcAppUpdatePasswordUpdatePasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdatePasswordPageRoutingModule", function () {
        return UpdatePasswordPageRoutingModule;
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


      var _update_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./update-password.page */
      "./src/app/update-password/update-password.page.ts");

      var routes = [{
        path: '',
        component: _update_password_page__WEBPACK_IMPORTED_MODULE_3__["UpdatePasswordPage"]
      }];

      var UpdatePasswordPageRoutingModule = function UpdatePasswordPageRoutingModule() {
        _classCallCheck(this, UpdatePasswordPageRoutingModule);
      };

      UpdatePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UpdatePasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/update-password/update-password.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/update-password/update-password.module.ts ***!
      \***********************************************************/

    /*! exports provided: UpdatePasswordPageModule */

    /***/
    function srcAppUpdatePasswordUpdatePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdatePasswordPageModule", function () {
        return UpdatePasswordPageModule;
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


      var _update_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./update-password-routing.module */
      "./src/app/update-password/update-password-routing.module.ts");
      /* harmony import */


      var _update_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./update-password.page */
      "./src/app/update-password/update-password.page.ts");

      var UpdatePasswordPageModule = function UpdatePasswordPageModule() {
        _classCallCheck(this, UpdatePasswordPageModule);
      };

      UpdatePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _update_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdatePasswordPageRoutingModule"]],
        declarations: [_update_password_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePasswordPage"]]
      })], UpdatePasswordPageModule);
      /***/
    },

    /***/
    "./src/app/update-password/update-password.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/update-password/update-password.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUpdatePasswordUpdatePasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/update-password/update-password.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/update-password/update-password.page.ts ***!
      \*********************************************************/

    /*! exports provided: UpdatePasswordPage */

    /***/
    function srcAppUpdatePasswordUpdatePasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdatePasswordPage", function () {
        return UpdatePasswordPage;
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
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);

      var UpdatePasswordPage = /*#__PURE__*/function () {
        function UpdatePasswordPage(afAuth, nacCtrl) {
          _classCallCheck(this, UpdatePasswordPage);

          this.afAuth = afAuth;
          this.nacCtrl = nacCtrl;
          this.password = "";
          this.newpassword = "";
          this.cpassword = "";
        }

        _createClass(UpdatePasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updatePassword",
          value: function updatePassword() {
            try {
              var self = this;
              var password = this.password,
                  newpassword = this.newpassword,
                  cpassword = this.cpassword;

              if (password.trim().length == 0) {
                throw new Error('Please Enter Current Password');
              }

              if (newpassword.trim().length == 0) {
                throw new Error('Please Enter New Password');
              }

              if (cpassword.trim().length == 0) {
                throw new Error('Please Confirm Password');
              }

              if (newpassword !== cpassword) {
                throw new Error('Passwords Do Not Match');
              }

              self.afAuth.signInWithEmailAndPassword(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.email, password).then(function () {
                firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.updatePassword(newpassword).then(function () {
                  alert("Password Updated");
                  self.password = "";
                  self.newpassword = "";
                  self.cpassword = "";
                  self.nacCtrl.navigateRoot(['/account']);
                })["catch"](function (error) {
                  alert(error);
                });
              })["catch"](function (error) {
                alert(error);
              });
            } catch (error) {
              alert(error.message);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.password = "";
            this.newpassword = "";
            this.cpassword = "";
            console.log("Left update password");
          }
        }]);

        return UpdatePasswordPage;
      }();

      UpdatePasswordPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      UpdatePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./update-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/update-password/update-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./update-password.page.scss */
        "./src/app/update-password/update-password.page.scss"))["default"]]
      })], UpdatePasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=update-password-update-password-module-es5.js.map