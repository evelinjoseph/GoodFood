(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retailertab1-retailertab1-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab1/retailertab1.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab1/retailertab1.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRetailertab1Retailertab1PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"text-align: center\">\r\n  <ion-toolbar mode=\"ios\" color=\"primary\">\r\n    <ion-title>Good Food</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen [hidden]=\"!isReady\" >\r\n\r\n  <div *ngIf=\"!((retailerItems | async)?.isVerified) ; else verified\" class=\"centerText\">\r\n    <ion-text class=\"centerText\" color=\"primary\" style=\"text-align: center\">\r\n      <p>Your account is not verified yet, please wait until verified to gain access to this tab!</p>\r\n    </ion-text>\r\n  </div>\r\n  <ng-template #verified>\r\n    <div *ngFor=\"let item of ((retailerItems | async)?.orders).sort().reverse()\">\r\n      <ion-card>\r\n\r\n      <ion-item>\r\n        <ion-card-title class=\"ion-text-wrap\">{{item.name}}</ion-card-title>\r\n      </ion-item>\r\n    \r\n      <ion-card-content> \r\n          <p> Description: {{item.description}}</p>\r\n          <p> Ordered: {{item.date.toDate().toLocaleString()}}</p>\r\n          <p> User: {{getUser(item.userUID)}}</p>      \r\n      </ion-card-content>\r\n    </ion-card>\r\n    </div>  \r\n    \r\n      <ion-text *ngIf=\"((retailerItems | async)?.orders).length <= 0\" class=\"centerText\" color=\"primary\" style=\"text-align: center\">\r\n        <p>There are no orders currently.</p>\r\n      </ion-text>\r\n  </ng-template>  \r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    "./src/app/retailertab1/retailertab1-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/retailertab1/retailertab1-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: Retailertab1PageRoutingModule */

    /***/
    function srcAppRetailertab1Retailertab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Retailertab1PageRoutingModule", function () {
        return Retailertab1PageRoutingModule;
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


      var _retailertab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./retailertab1.page */
      "./src/app/retailertab1/retailertab1.page.ts");

      var routes = [{
        path: '',
        component: _retailertab1_page__WEBPACK_IMPORTED_MODULE_3__["Retailertab1Page"]
      }];

      var Retailertab1PageRoutingModule = function Retailertab1PageRoutingModule() {
        _classCallCheck(this, Retailertab1PageRoutingModule);
      };

      Retailertab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Retailertab1PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/retailertab1/retailertab1.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/retailertab1/retailertab1.module.ts ***!
      \*****************************************************/

    /*! exports provided: Retailertab1PageModule */

    /***/
    function srcAppRetailertab1Retailertab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Retailertab1PageModule", function () {
        return Retailertab1PageModule;
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


      var _retailertab1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./retailertab1-routing.module */
      "./src/app/retailertab1/retailertab1-routing.module.ts");
      /* harmony import */


      var _retailertab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./retailertab1.page */
      "./src/app/retailertab1/retailertab1.page.ts");

      var Retailertab1PageModule = function Retailertab1PageModule() {
        _classCallCheck(this, Retailertab1PageModule);
      };

      Retailertab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _retailertab1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Retailertab1PageRoutingModule"]],
        declarations: [_retailertab1_page__WEBPACK_IMPORTED_MODULE_6__["Retailertab1Page"]]
      })], Retailertab1PageModule);
      /***/
    },

    /***/
    "./src/app/retailertab1/retailertab1.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/retailertab1/retailertab1.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRetailertab1Retailertab1PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".centerText {\n  height: 90% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  align-content: center !important;\n  flex-wrap: wrap !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0YWlsZXJ0YWIxL3JldGFpbGVydGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3JldGFpbGVydGFiMS9yZXRhaWxlcnRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlclRleHQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50OyAgICBcclxuIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/retailertab1/retailertab1.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/retailertab1/retailertab1.page.ts ***!
      \***************************************************/

    /*! exports provided: Retailertab1Page */

    /***/
    function srcAppRetailertab1Retailertab1PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Retailertab1Page", function () {
        return Retailertab1Page;
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


      var _listings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../listings.service */
      "./src/app/listings.service.ts");

      var Retailertab1Page = /*#__PURE__*/function () {
        function Retailertab1Page(listingService, afstore, afAuth, changeDetection, alertCtrl) {
          _classCallCheck(this, Retailertab1Page);

          this.listingService = listingService;
          this.afstore = afstore;
          this.afAuth = afAuth;
          this.changeDetection = changeDetection;
          this.alertCtrl = alertCtrl;
          this.isReady = false;
        }

        _createClass(Retailertab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var self = this;
            this.afAuth.onAuthStateChanged(function (user) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!user) {
                          _context.next = 13;
                          break;
                        }

                        self.retailerUID = user.uid;
                        self.items = self.afstore.doc("users/".concat(self.retailerUID));
                        self.retailerItems = self.items.valueChanges();
                        _context.next = 6;
                        return self.listingService.initializeItems();

                      case 6:
                        self.users = self.listingService.getUsers();
                        self.users = self.users.filter(function (currentUser) {
                          if (!currentUser.isRetailer) {
                            return !currentUser.isRetailer;
                          }
                        });
                        console.log(self.users);
                        self.isReady = true;
                        self.changeDetection.detectChanges();
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
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.items) {
              this.retailerItems = this.items.valueChanges();
              this.changeDetection.detectChanges();
              this.isReady = true;
            }
          }
        }, {
          key: "getUser",
          value: function getUser(uid) {
            if (this.users) {
              var user = this.users.find(function (element) {
                return element.userUID == uid;
              });
              return user.firstname + " " + user.lastname + " (" + uid + ")";
            }
          }
        }]);

        return Retailertab1Page;
      }();

      Retailertab1Page.ctorParameters = function () {
        return [{
          type: _listings_service__WEBPACK_IMPORTED_MODULE_5__["ListingsService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      Retailertab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-retailertab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./retailertab1.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/retailertab1/retailertab1.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./retailertab1.page.scss */
        "./src/app/retailertab1/retailertab1.page.scss"))["default"]]
      })], Retailertab1Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=retailertab1-retailertab1-module-es5.js.map