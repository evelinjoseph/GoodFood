(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paypal-paypal-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/paypal/paypal.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paypal/paypal.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPaypalPaypalPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"text-align: center\">\n  <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"Back\" defaultHref=\"/tabs/tabs/tab3\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Good Food\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let item of cart\">\n    <ion-card>      \n      <ion-card-header>\n        <ion-card-title>{{item.name}}</ion-card-title>      \n      </ion-card-header>\n      <ion-card-content>\n        <p> Quantity: {{item.quantityCart}} </p>\n        <p> Price: ${{item.totalPrice | number:'1.2-2'}} </p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ion-toolbar position=\"bottom\" style=\"text-align: center\">\n    <div class=\"ion-text-end\" id=\"subtotal\">\n      <ion-text > <p style=\"font-size: large;\"> Subtotal ${{paymentAmount | number:'1.2-2'}} </p></ion-text> \n      <ion-text > <p style=\"font-size: large;\"> Tax $-</p></ion-text> \n      <ion-text > <p id=\"total\"> TOTAL ${{paymentAmount | number:'1.2-2'}} </p></ion-text> \n    </div>  \n    <div id=\"paypal-button-container\" ></div>  \n  </ion-toolbar>\n\n \n</ion-content>\n\n\n\n<!-- <ion-footer class=\"ion-no-border\">\n   <ion-toolbar position=\"bottom\" style=\"text-align: center;\">\n    <div class=\"ion-text-end\" id=\"subtotal\">\n      <ion-text > <p style=\"font-size: large;\"> Subtotal ${{paymentAmount | number:'1.2-2'}} </p></ion-text> \n      <ion-text > <p style=\"font-size: large;\"> Tax $-</p></ion-text> \n      <ion-text > <p id=\"total\"> TOTAL ${{paymentAmount | number:'1.2-2'}} </p></ion-text> \n    </div>  \n    <div id=\"paypal-button-container\"></div>   \n    <div class=\"paypal_div\">\n    <ion-button class=\"paypal_button\" expand=\"full\" color=\"warning\" (click)=\"payWithPayPal()\">Pay with PayPal</ion-button>\n    \n  </div> \n </ion-toolbar>\n</ion-footer> -->";
      /***/
    },

    /***/
    "./src/app/paypal/paypal-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/paypal/paypal-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: PaypalPageRoutingModule */

    /***/
    function srcAppPaypalPaypalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaypalPageRoutingModule", function () {
        return PaypalPageRoutingModule;
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


      var _paypal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./paypal.page */
      "./src/app/paypal/paypal.page.ts");

      var routes = [{
        path: '',
        component: _paypal_page__WEBPACK_IMPORTED_MODULE_3__["PaypalPage"]
      }];

      var PaypalPageRoutingModule = function PaypalPageRoutingModule() {
        _classCallCheck(this, PaypalPageRoutingModule);
      };

      PaypalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PaypalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/paypal/paypal.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/paypal/paypal.module.ts ***!
      \*****************************************/

    /*! exports provided: PaypalPageModule */

    /***/
    function srcAppPaypalPaypalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaypalPageModule", function () {
        return PaypalPageModule;
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


      var _paypal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./paypal-routing.module */
      "./src/app/paypal/paypal-routing.module.ts");
      /* harmony import */


      var _paypal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./paypal.page */
      "./src/app/paypal/paypal.page.ts");

      var PaypalPageModule = function PaypalPageModule() {
        _classCallCheck(this, PaypalPageModule);
      };

      PaypalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _paypal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaypalPageRoutingModule"]],
        declarations: [_paypal_page__WEBPACK_IMPORTED_MODULE_6__["PaypalPage"]]
      })], PaypalPageModule);
      /***/
    },

    /***/
    "./src/app/paypal/paypal.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/paypal/paypal.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppPaypalPaypalPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".paypal_button {\n  font-family: Verdana;\n  font-weight: bold;\n  padding-top: 3%;\n}\n\np {\n  padding-right: 2%;\n  font-size: large;\n}\n\n#total {\n  font-size: large;\n  font-weight: bold;\n}\n\n.paypal_div {\n  padding-bottom: 2%;\n  padding-left: 2%;\n  padding-right: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5cGFsL3BheXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYXlwYWwvcGF5cGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXlwYWxfYnV0dG9ue1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctdG9wOiAzJTtcbn1cblxucHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4jdG90YWx7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBheXBhbF9kaXZ7XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgcGFkZGluZy1yaWdodDogMiU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/paypal/paypal.page.ts":
    /*!***************************************!*\
      !*** ./src/app/paypal/paypal.page.ts ***!
      \***************************************/

    /*! exports provided: PaypalPage */

    /***/
    function srcAppPaypalPaypalPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaypalPage", function () {
        return PaypalPage;
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


      var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/paypal/ngx */
      "./node_modules/@ionic-native/paypal/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.cjs.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var PaypalPage = /*#__PURE__*/function () {
        function PaypalPage(afAuth, nacCtrl, alertController, afstore, payPal, loadingController, changeDetection) {
          _classCallCheck(this, PaypalPage);

          this.afAuth = afAuth;
          this.nacCtrl = nacCtrl;
          this.alertController = alertController;
          this.afstore = afstore;
          this.payPal = payPal;
          this.loadingController = loadingController;
          this.changeDetection = changeDetection;
          this.paymentAmount = 0;
          this.currency = 'USD';
          this.cart = [];
        }

        _createClass(PaypalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var self = this;
            this.cart = [];
            this.paymentAmount = 0;
            this.afAuth.onAuthStateChanged(function (user) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _iterator, _step, item, thisListing;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!user) {
                          _context.next = 36;
                          break;
                        }

                        self.userUID = user.uid;
                        _context.next = 4;
                        return self.getCart();

                      case 4:
                        self.changeDetection.detectChanges();
                        _context.next = 7;
                        return self.afstore.collection('users').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).toPromise();

                      case 7:
                        self.retailers = _context.sent;
                        _context.prev = 8;
                        _iterator = _createForOfIteratorHelper(self.cart);
                        _context.prev = 10;

                        _iterator.s();

                      case 12:
                        if ((_step = _iterator.n()).done) {
                          _context.next = 21;
                          break;
                        }

                        item = _step.value;
                        _context.next = 16;
                        return self.afstore.collection('listings').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).toPromise();

                      case 16:
                        self.listing = _context.sent;
                        thisListing = self.listing.filter(function (currentListing) {
                          if (currentListing.listingID && item.listingID) {
                            return currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1;
                          }
                        });
                        thisListing.forEach(function (element) {
                          if (item.quantityCart > element.quantity) {
                            throw new Error("Sorry, unfortunately there is not enough quantity to complete the " + element.name + " order. Please edit the quantity to be less than or equal to " + element.quantity + ".");
                          }
                        });

                      case 19:
                        _context.next = 12;
                        break;

                      case 21:
                        _context.next = 26;
                        break;

                      case 23:
                        _context.prev = 23;
                        _context.t0 = _context["catch"](10);

                        _iterator.e(_context.t0);

                      case 26:
                        _context.prev = 26;

                        _iterator.f();

                        return _context.finish(26);

                      case 29:
                        _context.next = 36;
                        break;

                      case 31:
                        _context.prev = 31;
                        _context.t1 = _context["catch"](8);
                        console.log(_context.t1);
                        self.presentAlert(_context.t1);
                        self.nacCtrl.navigateRoot(['/tabs/tabs/tab3']);

                      case 36:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[8, 31], [10, 23, 26, 29]]);
              }));
            });
            setTimeout(function () {
              // Render the PayPal button into #paypal-button-container
              window['paypal'].Buttons({
                // Set up the transaction
                createOrder: function createOrder(data, actions) {
                  console.log(self.paymentAmount.toFixed(2));
                  return actions.order.create({
                    purchase_units: [{
                      amount: {
                        value: self.paymentAmount.toFixed(2)
                      }
                    }]
                  });
                },
                // Finalize the transaction
                onApprove: function onApprove(data, actions) {
                  return actions.order.capture().then(function (details) {
                    // Show a success message to the buyer
                    console.log(self.cart);

                    var _iterator2 = _createForOfIteratorHelper(self.cart),
                        _step2;

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var item = _step2.value;
                        self.date = new Date();
                        self.afstore.doc("users/".concat(self.userUID)).update({
                          orders: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                            name: item.name,
                            description: item.description,
                            listingID: item.listingID,
                            retailerUID: item.retailerUID,
                            isCurrent: true,
                            date: self.date
                          })
                        });
                        self.afstore.doc("users/".concat(self.userUID)).update({
                          cart: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayRemove({
                            name: item.name,
                            description: item.description,
                            listingID: item.listingID,
                            retailerUID: item.retailerUID,
                            quantity: item.quantity,
                            quantityCart: item.quantityCart,
                            price: item.price,
                            totalPrice: item.totalPrice
                          })
                        });
                        self.afstore.doc("users/".concat(item.retailerUID)).update({
                          orders: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                            name: item.name,
                            description: item.description,
                            listingID: item.listingID,
                            retailerUID: item.retailerUID,
                            userUID: self.userUID,
                            isCurrent: true,
                            date: self.date
                          })
                        }); //add Email

                        self.currentRetailer = self.retailers.filter(function (currentListing) {
                          if (currentListing.retailerUID && item.retailerUID) {
                            return currentListing.retailerUID.toLowerCase().indexOf(item.retailerUID.toLowerCase()) > -1;
                          }
                        });
                        console.log(self.currentRetailer);
                        console.log("".concat(self.currentRetailer[0].email));
                        Email.send({
                          SecureToken: "c11c8a65-d4f9-45b7-8c2a-61f9c48e0ea7",
                          To: "".concat(self.currentRetailer[0].email),
                          From: 'goodfoodinnova@gmail.com',
                          Subject: "New Good Food Order",
                          Body: 'Hello ' + self.currentRetailer[0].name + ', you have an order for your listing: ' + item.name + '. Please check the Good Food application for more details. Thank you!'
                        }).then(function (message) {
                          return console.log(message);
                        });

                        if (item.quantityCart > 0) {
                          (function () {
                            var decrement = firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.increment(-item.quantityCart);
                            console.log(self.listing);
                            var thisListing = self.listing.filter(function (currentListing) {
                              if (currentListing.listingID && item.listingID) {
                                return currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1;
                              }
                            }); //console.log(thisListing);

                            thisListing.forEach(function (element) {
                              if (item.quantityCart == element.quantity) {
                                console.log(self.currentRetailer[0].listings);
                                var quantityArr = self.currentRetailer[0].listings.filter(function (currentListing) {
                                  if (currentListing.listingID && item.listingID) {
                                    return currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1;
                                  }
                                });
                                self.afstore.collection('archive').doc(item.listingID).set({
                                  name: item.name,
                                  description: item.description,
                                  listingID: item.listingID,
                                  price: item.price,
                                  type: "Listing",
                                  deleteTime: new Date()
                                }).then(function () {
                                  console.log("Document successfully written!");
                                })["catch"](function (error) {
                                  console.error("Error writing document: ", error);
                                });
                                self.afstore.collection('listings').doc(item.listingID)["delete"](); //change isListed

                                self.afstore.doc("users/".concat(item.retailerUID)).update({
                                  listings: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                                    name: item.name,
                                    description: item.description,
                                    listingID: item.listingID,
                                    price: item.price,
                                    quantity: quantityArr[0].quantity,
                                    isListed: false
                                  })
                                });
                                self.afstore.doc("users/".concat(item.retailerUID)).update({
                                  listings: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayRemove({
                                    name: item.name,
                                    description: item.description,
                                    listingID: item.listingID,
                                    price: item.price,
                                    quantity: quantityArr[0].quantity,
                                    isListed: true
                                  })
                                });
                              } else {
                                self.afstore.doc("listings/".concat(item.listingID)).update({
                                  quantity: decrement
                                });
                              }
                            });
                          })();
                        }
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }

                    self.nacCtrl.navigateRoot(['/tabs/tabs/tab4']);
                    self.cart = [];
                    console.log("checkout complete!");
                    alert('Transaction completed by ' + details.payer.name.given_name + '!');
                  })["catch"](function (err) {
                    console.log(err);
                    self.presentAlert(err);
                    self.nacCtrl.navigateRoot(['/tabs/tabs/tab3']);
                  });
                }
              }).render('#paypal-button-container');
            }, 10);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.cart = [];
            this.paymentAmount = 0;
            var self = this;
            this.afAuth.onAuthStateChanged(function (user) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!user) {
                          _context2.next = 5;
                          break;
                        }

                        self.userUID = user.uid;
                        _context2.next = 4;
                        return self.getCart();

                      case 4:
                        self.changeDetection.detectChanges();

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
            });
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
                        self.paymentAmount = 0;
                        var cart1 = querySnapshot.get("cart");
                        self.changeDetection.detectChanges();
                        cart1.forEach(function (element) {
                          self.cart.push(element);
                          self.paymentAmount += element.totalPrice;
                        });
                      })["catch"](function (error) {
                        console.log("Error getting documents");
                      });

                    case 3:
                      console.log(this.cart);
                      this.changeDetection.detectChanges();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "payWithPayPal",
          value: function payWithPayPal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this = this;

              var _iterator3, _step3, item, thisListing;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      _iterator3 = _createForOfIteratorHelper(this.cart);
                      _context4.prev = 2;

                      _iterator3.s();

                    case 4:
                      if ((_step3 = _iterator3.n()).done) {
                        _context4.next = 13;
                        break;
                      }

                      item = _step3.value;
                      _context4.next = 8;
                      return this.afstore.collection('listings').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).toPromise();

                    case 8:
                      this.listing = _context4.sent;
                      thisListing = this.listing.filter(function (currentListing) {
                        if (currentListing.listingID && item.listingID) {
                          return currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1;
                        }
                      });
                      thisListing.forEach(function (element) {
                        if (item.quantityCart > element.quantity) {
                          throw new Error("Sorry, unfortunately there is not enough quantity to complete the " + element.name + " order. Please edit the quantity to be less than or equal to " + element.quantity + ".");
                        }
                      });

                    case 11:
                      _context4.next = 4;
                      break;

                    case 13:
                      _context4.next = 18;
                      break;

                    case 15:
                      _context4.prev = 15;
                      _context4.t0 = _context4["catch"](2);

                      _iterator3.e(_context4.t0);

                    case 18:
                      _context4.prev = 18;

                      _iterator3.f();

                      return _context4.finish(18);

                    case 21:
                      this.payPal.init({
                        PayPalEnvironmentProduction: 'AZdLLjUn69oERT3rIneIeL6pYWh7iFidUWTrDRfpPDh7F9zcETzH9lYNMbRbnWoRwCX506xQJX0sDoQa',
                        PayPalEnvironmentSandbox: 'AZdLLjUn69oERT3rIneIeL6pYWh7iFidUWTrDRfpPDh7F9zcETzH9lYNMbRbnWoRwCX506xQJX0sDoQa'
                      }).then(function () {
                        // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                        _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalConfiguration"]({// Only needed if you get an "Internal Service Error" after PayPal login!
                          //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                        })).then(function () {
                          console.log(_this.paymentAmount.toString());
                          var payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalPayment"](_this.paymentAmount.toString(), _this.currency, 'Description', 'sale');

                          _this.payPal.renderSinglePaymentUI(payment).then(function (res) {
                            console.log(res); // Successfully paid
                            // Example sandbox response
                            //
                            // {
                            //   "client": {
                            //     "environment": "sandbox",
                            //     "product_name": "PayPal iOS SDK",
                            //     "paypal_sdk_version": "2.16.0",
                            //     "platform": "iOS"
                            //   },
                            //   "response_type": "payment",
                            //   "response": {
                            //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                            //     "state": "approved",
                            //     "create_time": "2016-10-03T13:33:33Z",
                            //     "intent": "sale"
                            //   }
                            // }

                            var _iterator4 = _createForOfIteratorHelper(_this.cart),
                                _step4;

                            try {
                              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                                var item = _step4.value;
                                _this.date = new Date();

                                _this.afstore.doc("users/".concat(_this.userUID)).update({
                                  orders: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                                    name: item.name,
                                    description: item.description,
                                    listingID: item.listingID,
                                    retailerUID: item.retailerUID,
                                    isCurrent: true,
                                    date: _this.date
                                  })
                                });

                                _this.afstore.doc("users/".concat(_this.userUID)).update({
                                  cart: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayRemove({
                                    name: item.name,
                                    description: item.description,
                                    listingID: item.listingID,
                                    retailerUID: item.retailerUID,
                                    quantity: item.quantity,
                                    quantityCart: item.quantityCart,
                                    price: item.price,
                                    totalPrice: item.totalPrice
                                  })
                                });

                                _this.afstore.doc("users/".concat(item.retailerUID)).update({
                                  orders: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                                    name: item.name,
                                    description: item.description,
                                    listingID: item.listingID,
                                    retailerUID: item.retailerUID,
                                    userUID: _this.userUID,
                                    isCurrent: true,
                                    date: _this.date
                                  })
                                });

                                if (item.quantityCart > 0) {
                                  (function () {
                                    var decrement = firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.increment(-item.quantityCart);

                                    var thisListing = _this.listing.filter(function (currentListing) {
                                      if (currentListing.listingID && item.listingID) {
                                        return currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1;
                                      }
                                    });

                                    thisListing.forEach(function (element) {
                                      if (item.quantityCart == element.quantity) {
                                        console.log(element);
                                        console.log(item);

                                        _this.afstore.collection('listings').doc(item.listingID)["delete"](); //TODO: add to archive

                                      } else {
                                        _this.afstore.doc("listings/".concat(item.listingID)).update({
                                          quantity: decrement
                                        });
                                      }
                                    });
                                  })();
                                }
                              }
                            } catch (err) {
                              _iterator4.e(err);
                            } finally {
                              _iterator4.f();
                            }

                            _this.nacCtrl.navigateRoot(['/tabs/tabs/tab4']);

                            _this.cart = [];
                            console.log("checkout complete!");
                          }, function (error) {
                            // Error or render dialog closed without being successful
                            console.log(error);
                          });
                        }, function (error) {
                          // Error in configuration
                          console.log(error);
                        });
                      }, function (error) {
                        // Error in initialization, maybe PayPal isn't supported or something else
                        console.log(error);
                      });
                      _context4.next = 29;
                      break;

                    case 24:
                      _context4.prev = 24;
                      _context4.t1 = _context4["catch"](0);
                      console.log(_context4.t1);
                      this.presentAlert(_context4.t1);
                      this.nacCtrl.navigateRoot(['/tabs/tabs/tab3']);

                    case 29:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[0, 24], [2, 15, 18, 21]]);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(errorMessage) {
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
                        header: 'Order Error',
                        message: errorMessage,
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
        }]);

        return PaypalPage;
      }();

      PaypalPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }, {
          type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPal"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      PaypalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paypal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./paypal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/paypal/paypal.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./paypal.page.scss */
        "./src/app/paypal/paypal.page.scss"))["default"]]
      })], PaypalPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paypal-paypal-module-es5.js.map