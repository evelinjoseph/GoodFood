(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-listing-user-listing-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-listing/user-listing.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-listing/user-listing.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserListingUserListingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"text-align: center\">\n  <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"Back\" defaultHref=\"/tabs/tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Good Food\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [hidden]=\"!isReady\" fullscreen>\n  <img [src]=\"url\" style=\"width:100%;\"> \n\n  <h1 style=\"text-align: center; font-weight: bold\"> {{ retailer }}: {{ name }}</h1>\n  <hr>\n  <ion-text color=\"primary\">\n  <h3 style=\"text-align: center; font-weight: bold;\" > ${{ price | number:'1.2-2' }}</h3>\n  </ion-text> \n\n  <div style=\"text-align: center; font-size: large;\">\n    <ion-icon name=\"location-outline\"></ion-icon> \n    {{ location }}\n  </div>\n\n  <p style=\"text-align: center\"> {{ quantity }} meals left</p>  \n  <hr> \n  <div style=\"text-align: center;\">\n    <ion-icon name=\"time-outline\"></ion-icon>\n   Pick Up By: {{deleteDate}}\n  </div>\n  <hr>\n  <p style=\"text-align: center; font-size: large;\"> {{ description }} </p>\n  <p style=\"text-align: center; font-weight: bold;\" > Please keep in mind that because the Good Food application deals with surplus food, all options vary on availability. Thank you!</p>   \n</ion-content>\n\n<ion-toolbar [hidden]=\"!isReady\" position=\"bottom\" style=\"text-align: center;\" color=\"translucent\"> \n  <ion-button size =\"large\" (click)=\"cart(listing)\">Add To Cart</ion-button>\n</ion-toolbar>\n\n";
      /***/
    },

    /***/
    "./src/app/user-listing/user-listing-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/user-listing/user-listing-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: UserListingPageRoutingModule */

    /***/
    function srcAppUserListingUserListingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListingPageRoutingModule", function () {
        return UserListingPageRoutingModule;
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


      var _user_listing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-listing.page */
      "./src/app/user-listing/user-listing.page.ts");

      var routes = [{
        path: '',
        component: _user_listing_page__WEBPACK_IMPORTED_MODULE_3__["UserListingPage"]
      }];

      var UserListingPageRoutingModule = function UserListingPageRoutingModule() {
        _classCallCheck(this, UserListingPageRoutingModule);
      };

      UserListingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserListingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user-listing/user-listing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/user-listing/user-listing.module.ts ***!
      \*****************************************************/

    /*! exports provided: UserListingPageModule */

    /***/
    function srcAppUserListingUserListingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListingPageModule", function () {
        return UserListingPageModule;
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


      var _user_listing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-listing-routing.module */
      "./src/app/user-listing/user-listing-routing.module.ts");
      /* harmony import */


      var _user_listing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-listing.page */
      "./src/app/user-listing/user-listing.page.ts");

      var UserListingPageModule = function UserListingPageModule() {
        _classCallCheck(this, UserListingPageModule);
      };

      UserListingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_listing_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserListingPageRoutingModule"]],
        declarations: [_user_listing_page__WEBPACK_IMPORTED_MODULE_6__["UserListingPage"]]
      })], UserListingPageModule);
      /***/
    },

    /***/
    "./src/app/user-listing/user-listing.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/user-listing/user-listing.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserListingUserListingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "hr {\n  color: black;\n  border-style: solid;\n  background-color: black;\n}\n\n.ion-text {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0aW5nL3VzZXItbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC91c2VyLWxpc3RpbmcvdXNlci1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuLmlvbi10ZXh0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/user-listing/user-listing.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/user-listing/user-listing.page.ts ***!
      \***************************************************/

    /*! exports provided: UserListingPage */

    /***/
    function srcAppUserListingUserListingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListingPage", function () {
        return UserListingPage;
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


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
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

      var UserListingPage = /*#__PURE__*/function () {
        function UserListingPage(nacCtrl, alertController, activatedRoute, firestore, afStorage, changeDetection, loadingController) {
          _classCallCheck(this, UserListingPage);

          this.nacCtrl = nacCtrl;
          this.alertController = alertController;
          this.activatedRoute = activatedRoute;
          this.firestore = firestore;
          this.afStorage = afStorage;
          this.changeDetection = changeDetection;
          this.loadingController = loadingController;
          this.isReady = false;
        }

        _createClass(UserListingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var self;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.presentLoading();

                      try {
                        this.ID = this.activatedRoute.snapshot.queryParamMap.get('id');
                        self = this; //collection.doc.id  ??to add to db when we get to it

                        this.listingSub = this.firestore.collection("listings").doc(this.ID).valueChanges().subscribe(function (data) {
                          _this.listing = data;
                          _this.name = _this.listing.name;
                          _this.description = _this.listing.description;
                          _this.location = _this.listing.location;
                          _this.price = _this.listing.price;
                          _this.quantity = _this.listing.quantity;
                          _this.retailerType = _this.listing.retailerType;
                          _this.retailerUID = _this.listing.retailerUID;
                          _this.deleteDate = _this.listing.deleteDate.toDate().toLocaleTimeString();
                          console.log(data);

                          var storageRef = _this.afStorage.ref("images/".concat(_this.retailerUID)).getDownloadURL().toPromise().then(function (url) {
                            self.url = url;
                            console.log(url);
                          })["catch"](function (error) {
                            self.url = 'assets/images/default.png';
                          });

                          var retailerRef = _this.firestore.doc("users/".concat(_this.retailerUID));

                          retailerRef.get().toPromise().then(function (doc) {
                            if (doc.exists) {
                              self.retailer = doc.data().name;
                            } else {
                              // doc.data() will be undefined in this case
                              console.log("No such document!");
                            }
                          })["catch"](function (error) {
                            console.log("Error getting document:", error);
                          });
                        });
                      } catch (error) {
                        console.log(error.message);
                      }

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "cart",
          value: function cart(listing) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var confirm;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.firestore.doc("users/".concat(firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid)).update({
                        cart: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayUnion({
                          name: listing.name,
                          description: listing.description,
                          listingID: listing.listingID,
                          retailerUID: listing.retailerUID,
                          quantity: listing.quantity,
                          quantityCart: 1,
                          price: listing.price,
                          totalPrice: listing.price
                        })
                      });
                      _context2.next = 3;
                      return this.presentAlert();

                    case 3:
                      confirm = _context2.sent;
                      this.nacCtrl.navigateRoot(['tabs/tabs/tab3']);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        duration: 900,
                        translucent: true,
                        cssClass: 'transparent',
                        backdropDismiss: false
                      });

                    case 2:
                      loading = _context3.sent;
                      _context3.next = 5;
                      return loading.present();

                    case 5:
                      _context3.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context3.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      this.isReady = true;
                      this.changeDetection.detectChanges();

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
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
                        header: 'Successfully Added to Cart!',
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
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.listingSub.unsubscribe();
          }
        }]);

        return UserListingPage;
      }();

      UserListingPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }];
      };

      UserListingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-listing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-listing.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-listing/user-listing.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-listing.page.scss */
        "./src/app/user-listing/user-listing.page.scss"))["default"]]
      })], UserListingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-listing-user-listing-module-es5.js.map