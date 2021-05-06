(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"text-align: center\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>Good Food</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen [hidden]=\"!isReady\">\n  <div *ngFor=\"let item of cart\">\n    <ion-card>\n     <ion-item>\n      <ion-card-title class=\"ion-text-wrap\">{{getRetailer(item.retailerUID)}}</ion-card-title>\n      <ion-button  (click)=\"delete(item)\" fill=\"outline\" slot=\"end\">Delete</ion-button> \n    </ion-item>\n   \n     <ion-card-content> \n        <p style=\"font-size: large;\" > Quantity: \n          <ion-button (click)=\"dec(item)\" size=\"small\" fill=\"clear\"> \n            <ion-icon name=\"remove-circle-outline\"></ion-icon> \n          </ion-button>\n          {{item.quantityCart}}\n          <ion-button (click)=\"inc(item)\" size=\"small\" fill=\"clear\"> \n            <ion-icon name=\"add-circle-outline\"></ion-icon> \n          </ion-button></p>\n          <p style=\"font-size: large;\"> Price: ${{item.totalPrice | number:'1.2-2'}}</p>\n     </ion-card-content>\n   </ion-card>\n  </div>\n  <ion-text class=\"centerText\" *ngIf=\"((userItems | async)?.cart).length <= 0\" color=\"primary\" style=\"text-align: center\">\n      <p>There are no items in the cart.</p>\n  </ion-text>  \n</ion-content>\n\n<ion-footer *ngIf=\"((userItems | async)?.cart).length > 0\" >\n  <!-- class=\"ion-no-border\" -->\n \n  <ion-toolbar *ngIf=\"userItems | async as cartData\"  position=\"bottom\" style=\"text-align: center;\">\n    <div class=\"ion-text-end\" id=\"subtotal\">\n      <ion-text > <p style=\"font-size: large;\"> Subtotal: ${{subtotal | number:'1.2-2'}} </p></ion-text> \n    </div>     \n    <ion-button expand=\"block\" (click)=\"checkOut(cartData.cart)\" size=\"large\">Checkout</ion-button>\n </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/tab3/tab3-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "./src/app/tab3/tab3-routing.module.ts");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".large {\n  font-size: 1500%;\n}\n\n.centerText {\n  height: 90% !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  align-content: center !important;\n  flex-wrap: wrap !important;\n}\n\n#subtotal {\n  padding-right: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQztFQUNHLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhcmdle1xuICAgIGZvbnQtc2l6ZTogMTUwMCU7XG59XG5cbi5jZW50ZXJUZXh0IHtcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50OyAgICBcbiB9XG5cbiAjc3VidG90YWx7XG4gICAgcGFkZGluZy1yaWdodDogMiU7XG4gfVxuXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.cjs.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _listings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../listings.service */
      "./src/app/listings.service.ts");

      var Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(listingService, afauth, nacCtrl, afstore, changeDetection, alertCtrl) {
          _classCallCheck(this, Tab3Page);

          this.listingService = listingService;
          this.afauth = afauth;
          this.nacCtrl = nacCtrl;
          this.afstore = afstore;
          this.changeDetection = changeDetection;
          this.alertCtrl = alertCtrl;
          this.cart = [];
          this.subtotal = 0;
          this.isReady = false;
        }

        _createClass(Tab3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var self = this;
            this.cart = [];
            this.subtotal = 0;
            this.afauth.onAuthStateChanged(function (user) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!user) {
                          _context.next = 9;
                          break;
                        }

                        self.userUID = user.uid;
                        self.items = self.afstore.doc("users/".concat(self.userUID));
                        self.userItems = self.items.valueChanges();
                        _context.next = 6;
                        return self.listingService.initializeItems();

                      case 6:
                        self.retailers = self.listingService.getUsers().filter(function (currentUser) {
                          if (currentUser.isRetailer) {
                            return currentUser.isRetailer;
                          }
                        });
                        self.changeDetection.detectChanges();
                        self.getCart();

                      case 9:
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.cart = [];
                      this.subtotal = 0;

                      if (!this.items) {
                        _context2.next = 9;
                        break;
                      }

                      this.userItems = this.items.valueChanges();
                      _context2.next = 6;
                      return this.listingService.initializeItems();

                    case 6:
                      this.retailers = this.listingService.getUsers().filter(function (currentListing) {
                        if (currentListing.isRetailer) {
                          return currentListing.isRetailer;
                        }
                      });
                      this.getCart();
                      this.changeDetection.detectChanges();

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getCart",
          value: function getCart() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var self;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      self = this;
                      _context3.next = 3;
                      return this.afstore.doc("users/".concat(this.userUID)).get().toPromise().then(function (querySnapshot) {
                        self.cart = [];
                        self.subtotal = 0;
                        var cart1 = querySnapshot.get("cart");
                        self.changeDetection.detectChanges();
                        cart1.forEach(function (element) {
                          self.cart.push(element);
                          self.subtotal += element.totalPrice;
                        });
                      })["catch"](function (error) {
                        console.log("Error getting documents");
                      });

                    case 3:
                      this.changeDetection.detectChanges();
                      this.isReady = true;

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var confirm;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.presentAlertDelete();

                    case 2:
                      confirm = _context4.sent;

                      if (confirm) {
                        this.afstore.doc("users/".concat(this.userUID)).update({
                          cart: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayRemove({
                            description: item.description,
                            listingID: item.listingID,
                            retailerUID: item.retailerUID,
                            quantity: item.quantity,
                            quantityCart: item.quantityCart,
                            price: item.price,
                            totalPrice: item.totalPrice
                          })
                        });
                        this.cart = this.cart.filter(function (currentListing) {
                          if (currentListing.listingID && item.listingID) {
                            return !(currentListing.listingID.toLowerCase() === item.listingID.toLowerCase());
                          }
                        });
                        this.subtotal -= item.totalPrice;
                      }

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentAlertDelete",
          value: function presentAlertDelete() {
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
                      return this.alertCtrl.create({
                        header: 'Confirm Delete',
                        message: 'Are you sure you want to delete this item from your cart?',
                        buttons: [{
                          text: 'Yes',
                          handler: function handler() {
                            return resolveFunction(true);
                          }
                        }, {
                          text: 'No',
                          handler: function handler() {
                            return resolveFunction(false);
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
          key: "inc",
          value: function inc(item) {
            if (item.quantityCart + 1 <= item.quantity) {
              var quantityValue = item.quantityCart + 1;
              var priceValue = item.totalPrice + item.price;
              this.afstore.doc("users/".concat(this.userUID)).update({
                cart: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayUnion({
                  description: item.description,
                  listingID: item.listingID,
                  retailerUID: item.retailerUID,
                  quantity: item.quantity,
                  quantityCart: quantityValue,
                  price: item.price,
                  totalPrice: priceValue
                })
              });
              this.afstore.doc("users/".concat(this.userUID)).update({
                cart: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayRemove({
                  description: item.description,
                  listingID: item.listingID,
                  retailerUID: item.retailerUID,
                  quantity: item.quantity,
                  quantityCart: item.quantityCart,
                  price: item.price,
                  totalPrice: item.totalPrice
                })
              });
              item.quantityCart++;
              item.totalPrice += item.price;
              this.subtotal += item.price;
            }
          }
        }, {
          key: "dec",
          value: function dec(item) {
            if (item.quantityCart - 1 > 0) {
              var quantityValue = item.quantityCart - 1;
              var priceValue = item.totalPrice - item.price;
              this.afstore.doc("users/".concat(this.userUID)).update({
                cart: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayUnion({
                  description: item.description,
                  listingID: item.listingID,
                  retailerUID: item.retailerUID,
                  quantity: item.quantity,
                  quantityCart: quantityValue,
                  totalPrice: priceValue,
                  price: item.price
                })
              });
              this.afstore.doc("users/".concat(this.userUID)).update({
                cart: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.arrayRemove({
                  description: item.description,
                  listingID: item.listingID,
                  retailerUID: item.retailerUID,
                  quantity: item.quantity,
                  quantityCart: item.quantityCart,
                  price: item.price,
                  totalPrice: item.totalPrice
                })
              });
              item.quantityCart--;
              item.totalPrice -= item.price;
              this.subtotal -= item.price;
            }
          }
        }, {
          key: "getRetailer",
          value: function getRetailer(uid) {
            if (this.retailers) {
              var user = this.retailers.find(function (element) {
                return element.retailerUID == uid;
              });
              return user.name;
            }
          }
        }, {
          key: "checkOut",
          value: function checkOut(cart) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var confirm;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.presentAlertCheck();

                    case 2:
                      confirm = _context6.sent;

                      if (confirm) {
                        this.nacCtrl.navigateRoot(['./paypal']);
                      }

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "presentAlertCheck",
          value: function presentAlertCheck() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var resolveFunction, promise, alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        resolveFunction = resolve;
                      });
                      _context7.next = 3;
                      return this.alertCtrl.create({
                        header: 'Confirm Check-Out',
                        message: 'Are you sure you want to check out these items from your cart?',
                        buttons: [{
                          text: 'No',
                          handler: function handler() {
                            return resolveFunction(false);
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            return resolveFunction(true);
                          }
                        }]
                      });

                    case 3:
                      alert = _context7.sent;
                      _context7.next = 6;
                      return alert.present();

                    case 6:
                      return _context7.abrupt("return", promise);

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return Tab3Page;
      }();

      Tab3Page.ctorParameters = function () {
        return [{
          type: _listings_service__WEBPACK_IMPORTED_MODULE_6__["ListingsService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab3.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab3.page.scss */
        "./src/app/tab3/tab3.page.scss"))["default"]]
      })], Tab3Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map