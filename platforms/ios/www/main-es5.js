(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n    <ion-header>\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-title>Good Food</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"true\">        \n        <ion-item (click)=\"account()\">Account Settings</ion-item>\n        <!-- <ion-item>Notification Settings</ion-item> -->\n        <ion-item (click)=\"about()\">About</ion-item>\n        <ion-item (click)=\"logout()\">Logout</ion-item>\n      </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'initial-page',
        pathMatch: 'full'
      }, {
        path: 'tab1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab1-tab1-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null,
          /*! ./tab1/tab1.module */
          "./src/app/tab1/tab1.module.ts")).then(function (m) {
            return m.Tab1PageModule;
          });
        }
      }, {
        path: 'tab2',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tab2-tab2-module */
          "tab2-tab2-module").then(__webpack_require__.bind(null,
          /*! ./tab2/tab2.module */
          "./src/app/tab2/tab2.module.ts")).then(function (m) {
            return m.Tab2PageModule;
          });
        }
      }, {
        path: 'tab3',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab3-tab3-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null,
          /*! ./tab3/tab3.module */
          "./src/app/tab3/tab3.module.ts")).then(function (m) {
            return m.Tab3PageModule;
          });
        }
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | register-register-module */
          "register-register-module").then(__webpack_require__.bind(null,
          /*! ./register/register.module */
          "./src/app/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'initial-page',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | initial-page-initial-page-module */
          [__webpack_require__.e("common"), __webpack_require__.e("initial-page-initial-page-module")]).then(__webpack_require__.bind(null,
          /*! ./initial-page/initial-page.module */
          "./src/app/initial-page/initial-page.module.ts")).then(function (m) {
            return m.InitialPagePageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'retailer-register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | retailer-register-retailer-register-module */
          "retailer-register-retailer-register-module").then(__webpack_require__.bind(null,
          /*! ./retailer-register/retailer-register.module */
          "./src/app/retailer-register/retailer-register.module.ts")).then(function (m) {
            return m.RetailerRegisterPageModule;
          });
        }
      }, {
        path: 'tab4',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab4-tab4-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab4-tab4-module")]).then(__webpack_require__.bind(null,
          /*! ./tab4/tab4.module */
          "./src/app/tab4/tab4.module.ts")).then(function (m) {
            return m.Tab4PageModule;
          });
        }
      }, {
        path: 'retailertabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | retailertabs-retailertabs-module */
          "retailertabs-retailertabs-module").then(__webpack_require__.bind(null,
          /*! ./retailertabs/retailertabs.module */
          "./src/app/retailertabs/retailertabs.module.ts")).then(function (m) {
            return m.RetailertabsPageModule;
          });
        }
      }, {
        path: 'retailertab1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | retailertab1-retailertab1-module */
          [__webpack_require__.e("common"), __webpack_require__.e("retailertab1-retailertab1-module")]).then(__webpack_require__.bind(null,
          /*! ./retailertab1/retailertab1.module */
          "./src/app/retailertab1/retailertab1.module.ts")).then(function (m) {
            return m.Retailertab1PageModule;
          });
        }
      }, {
        path: 'retailertab2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | retailertab2-retailertab2-module */
          [__webpack_require__.e("common"), __webpack_require__.e("retailertab2-retailertab2-module")]).then(__webpack_require__.bind(null,
          /*! ./retailertab2/retailertab2.module */
          "./src/app/retailertab2/retailertab2.module.ts")).then(function (m) {
            return m.Retailertab2PageModule;
          });
        }
      }, {
        path: 'retailertab3',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | retailertab3-retailertab3-module */
          "retailertab3-retailertab3-module").then(__webpack_require__.bind(null,
          /*! ./retailertab3/retailertab3.module */
          "./src/app/retailertab3/retailertab3.module.ts")).then(function (m) {
            return m.Retailertab3PageModule;
          });
        }
      }, {
        path: 'user-listing',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-listing-user-listing-module */
          "user-listing-user-listing-module").then(__webpack_require__.bind(null,
          /*! ./user-listing/user-listing.module */
          "./src/app/user-listing/user-listing.module.ts")).then(function (m) {
            return m.UserListingPageModule;
          });
        }
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | account-account-module */
          "account-account-module").then(__webpack_require__.bind(null,
          /*! ./account/account.module */
          "./src/app/account/account.module.ts")).then(function (m) {
            return m.AccountPageModule;
          });
        }
      }, {
        path: 'new-listing',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | new-listing-new-listing-module */
          "new-listing-new-listing-module").then(__webpack_require__.bind(null,
          /*! ./new-listing/new-listing.module */
          "./src/app/new-listing/new-listing.module.ts")).then(function (m) {
            return m.NewListingPageModule;
          });
        }
      }, {
        path: 'retailer-listing',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | retailer-listing-retailer-listing-module */
          [__webpack_require__.e("common"), __webpack_require__.e("retailer-listing-retailer-listing-module")]).then(__webpack_require__.bind(null,
          /*! ./retailer-listing/retailer-listing.module */
          "./src/app/retailer-listing/retailer-listing.module.ts")).then(function (m) {
            return m.RetailerListingPageModule;
          });
        }
      }, {
        path: 'paypal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | paypal-paypal-module */
          "paypal-paypal-module").then(__webpack_require__.bind(null,
          /*! ./paypal/paypal.module */
          "./src/app/paypal/paypal.module.ts")).then(function (m) {
            return m.PaypalPageModule;
          });
        }
      }, {
        path: 'password-reset',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | password-reset-password-reset-module */
          "password-reset-password-reset-module").then(__webpack_require__.bind(null,
          /*! ./password-reset/password-reset.module */
          "./src/app/password-reset/password-reset.module.ts")).then(function (m) {
            return m.PasswordResetPageModule;
          });
        }
      }, {
        path: 'update-password',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | update-password-update-password-module */
          [__webpack_require__.e("default~firebase-auth~retailer-update-password-retailer-update-password-module~update-password-updat~c63c26d4"), __webpack_require__.e("default~retailer-update-password-retailer-update-password-module~update-password-update-password-module"), __webpack_require__.e("update-password-update-password-module")]).then(__webpack_require__.bind(null,
          /*! ./update-password/update-password.module */
          "./src/app/update-password/update-password.module.ts")).then(function (m) {
            return m.UpdatePasswordPageModule;
          });
        }
      }, {
        path: 'retailer-update-password',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | retailer-update-password-retailer-update-password-module */
          [__webpack_require__.e("default~firebase-auth~retailer-update-password-retailer-update-password-module~update-password-updat~c63c26d4"), __webpack_require__.e("default~retailer-update-password-retailer-update-password-module~update-password-update-password-module"), __webpack_require__.e("retailer-update-password-retailer-update-password-module")]).then(__webpack_require__.bind(null,
          /*! ./retailer-update-password/retailer-update-password.module */
          "./src/app/retailer-update-password/retailer-update-password.module.ts")).then(function (m) {
            return m.RetailerUpdatePasswordPageModule;
          });
        }
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | about-about-module */
          "about-about-module").then(__webpack_require__.bind(null,
          /*! ./about/about.module */
          "./src/app/about/about.module.ts")).then(function (m) {
            return m.AboutPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, nacCtrl, afAuth, afstore) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.nacCtrl = nacCtrl;
          this.afAuth = afAuth;
          this.afstore = afstore;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();
            });
          }
        }, {
          key: "account",
          value: function account() {
            var self = this;
            this.afAuth.onAuthStateChanged(function (users) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var docRef;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!users) {
                          _context.next = 5;
                          break;
                        }

                        _context.next = 3;
                        return self.afstore.collection("users").doc(users.uid).get().toPromise();

                      case 3:
                        docRef = _context.sent.data();

                        if (docRef.isRetailer == false) {
                          self.nacCtrl.navigateRoot(['/account']);
                        } else {
                          self.nacCtrl.navigateRoot(['/retailertabs/retailertabs/retailertab3']);
                        }

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
            });
          }
        }, {
          key: "about",
          value: function about() {
            this.nacCtrl.navigateRoot(['/about']);
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.afAuth.signOut().then(function () {
                        console.log("logout complete");
                      }, function (error) {
                        console.log(error);
                      });
                      this.nacCtrl.navigateRoot(['./login']);

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("left account");
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/email-composer/ngx */
      "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/paypal/ngx */
      "./node_modules/@ionic-native/paypal/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot({
          mode: 'ios'
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__["AngularFireStorageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }, _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_15__["EmailComposer"], _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_16__["PayPal"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_17__["NativeGeocoder"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyDLY_0UjfbJtZeNDxL4IChreF17ZPLZnA8",
          authDomain: "goodfood-29325.firebaseapp.com",
          databaseURL: "https://goodfood-29325.firebaseio.com",
          projectId: "goodfood-29325",
          storageBucket: "goodfood-29325.appspot.com",
          messagingSenderId: "415963894032",
          appId: "1:415963894032:web:97623910e04a395c885595",
          measurementId: "G-WLBPTEYDFV"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/tharunkarakattu/Desktop/Evelin/GoodFood/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map