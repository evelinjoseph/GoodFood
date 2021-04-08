(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-listing-new-listing-module"], {
    /***/
    "./node_modules/ez-guid/dist/guid.js":
    /*!*******************************************!*\
      !*** ./node_modules/ez-guid/dist/guid.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function node_modulesEzGuidDistGuidJs(module, exports, __webpack_require__) {
      "use strict";

      exports.__esModule = true;

      var Guid =
      /** @class */
      function () {
        function Guid(guid) {
          /** Container for the GUID itself (in the hyphenated format). */
          this.value = Guid.EMPTY;

          if (guid && Guid.isValid(guid)) {
            //hyphenated, no conversion necessary
            this.value = guid.toLowerCase();
          } else if (guid && !(guid.indexOf("-") >= 0) && guid.length == 32) {
            //non-hyphenated
            var tempGuid = "";
            var pos = 0;

            for (var _i = 0, _a = [8, 4, 4, 4, 12]; _i < _a.length; _i++) {
              var i = _a[_i];
              if (pos != 0) tempGuid += "-";
              tempGuid += guid.substr(pos, i).toLowerCase();
              pos += i;
            }

            this.value = tempGuid;
          } else if (!guid) {
            this.value = Guid.random();
          } else throw new TypeError("No valid GUID string given; cannot instantiate!");
        }

        Guid.isValid = function (guid) {
          var value = guid.toString();
          return guid && (guid instanceof Guid || this.validator.test(value));
        };

        Guid.create = function (guid) {
          if (!guid) guid = this.random();
          return new Guid(guid);
        };
        /** Generates an empty, hyphenated GUID object. */


        Guid.createEmpty = function () {
          return new Guid(this.EMPTY);
        };

        Guid.gen = function (count) {
          var out = "";

          for (var i = 0; i < count; i++) {
            // tslint:disable-next-line:no-bitwise
            out += ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1).toLowerCase();
          }

          return out;
        };
        /** Generates a random, hyphenated GUID string. */


        Guid.random = function () {
          return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-");
        };
        /** Compares one Guid instance with another */


        Guid.prototype.equals = function (other) {
          return Guid.isValid(other) && this.value === other.toString();
        };

        Guid.prototype.isEmpty = function () {
          return this.value === Guid.EMPTY;
        };
        /** Returns the hyphenated GUID */


        Guid.prototype.toString = function () {
          return this.value;
        };
        /** Returns the non-hyphenated GUID */


        Guid.prototype.toShortString = function () {
          return this.value.replace(/-/g, "");
        };
        /** Empty GUID string (hyphenated). */


        Guid.EMPTY = "00000000-0000-0000-0000-000000000000";
        Guid.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
        return Guid;
      }();

      exports.Guid = Guid;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/new-listing/new-listing.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-listing/new-listing.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNewListingNewListingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header style=\"text-align: center\">\r\n  <ion-toolbar color=\"primary\" mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [text]=\"Back\" defaultHref=\"/retailertabs/retailertabs/retailertab2\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Good Food\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n      <br>\r\n      <p style=\"text-align: center;\" > Please Enter a Name, Description, Price, and Quantity for the New Listing </p>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Name</ion-label>\r\n          <ion-input autocapitalize='sentences' type=\"text\" [(ngModel)]=\"name\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Description</ion-label>\r\n          <ion-input [(ngModel)]=\"description\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Price</ion-label>\r\n          <ion-input type=\"number\" [(ngModel)]=\"price\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Quantity</ion-label>\r\n          <ion-input type=\"number\" [(ngModel)]=\"quantity\"></ion-input>\r\n        </ion-item>\r\n        <br>\r\n        <ion-footer class=\"ion-no-border\">\r\n          <ion-toolbar position=\"bottom\" style=\"text-align: center;\">     \r\n            <ion-button onmouseover=\"\" (click)=\"save()\">Add Listing\r\n              <span></span>\r\n            </ion-button> \r\n            <ion-button (click)=\"publish()\">Add and Publish Listing</ion-button> \r\n          </ion-toolbar>\r\n        </ion-footer>\r\n        \r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    "./src/app/new-listing/new-listing-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/new-listing/new-listing-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: NewListingPageRoutingModule */

    /***/
    function srcAppNewListingNewListingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewListingPageRoutingModule", function () {
        return NewListingPageRoutingModule;
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


      var _new_listing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-listing.page */
      "./src/app/new-listing/new-listing.page.ts");

      var routes = [{
        path: '',
        component: _new_listing_page__WEBPACK_IMPORTED_MODULE_3__["NewListingPage"]
      }];

      var NewListingPageRoutingModule = function NewListingPageRoutingModule() {
        _classCallCheck(this, NewListingPageRoutingModule);
      };

      NewListingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewListingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/new-listing/new-listing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/new-listing/new-listing.module.ts ***!
      \***************************************************/

    /*! exports provided: NewListingPageModule */

    /***/
    function srcAppNewListingNewListingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewListingPageModule", function () {
        return NewListingPageModule;
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


      var _new_listing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-listing-routing.module */
      "./src/app/new-listing/new-listing-routing.module.ts");
      /* harmony import */


      var _new_listing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-listing.page */
      "./src/app/new-listing/new-listing.page.ts");

      var NewListingPageModule = function NewListingPageModule() {
        _classCallCheck(this, NewListingPageModule);
      };

      NewListingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_listing_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewListingPageRoutingModule"]],
        declarations: [_new_listing_page__WEBPACK_IMPORTED_MODULE_6__["NewListingPage"]]
      })], NewListingPageModule);
      /***/
    },

    /***/
    "./src/app/new-listing/new-listing.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/new-listing/new-listing.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNewListingNewListingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1saXN0aW5nL25ldy1saXN0aW5nLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/new-listing/new-listing.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/new-listing/new-listing.page.ts ***!
      \*************************************************/

    /*! exports provided: NewListingPage */

    /***/
    function srcAppNewListingNewListingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewListingPage", function () {
        return NewListingPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var ez_guid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ez-guid */
      "./node_modules/ez-guid/dist/guid.js");
      /* harmony import */


      var ez_guid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ez_guid__WEBPACK_IMPORTED_MODULE_8__);

      var NewListingPage = /*#__PURE__*/function () {
        function NewListingPage(afstore, alertController, activatedRoute, firestore, afStorage, afAuth, loadingController, changeDetection) {
          _classCallCheck(this, NewListingPage);

          this.afstore = afstore;
          this.alertController = alertController;
          this.activatedRoute = activatedRoute;
          this.firestore = firestore;
          this.afStorage = afStorage;
          this.afAuth = afAuth;
          this.loadingController = loadingController;
          this.changeDetection = changeDetection;
          this.name = "";
          this.description = "";
          this.price = 0;
          this.quantity = 0;
        }

        _createClass(NewListingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var self = this;
            this.afAuth.onAuthStateChanged(function (user) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var userRef;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!user) {
                          _context.next = 9;
                          break;
                        }

                        self.retailerUID = user.uid;
                        _context.next = 4;
                        return self.afstore.collection("users").doc(self.retailerUID).get().toPromise();

                      case 4:
                        userRef = _context.sent.data();
                        self.retailerType = userRef.retailerType;
                        self.location = userRef.location;
                        self.pickupTime = userRef.pickupTime;
                        self.changeDetection.detectChanges();

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
          key: "save",
          value: function save() {
            try {
              if (this.name.length == 0) {
                throw new Error('Please Enter a Name');
              }

              if (this.description.length == 0) {
                throw new Error('Please Enter a Description');
              }

              if (this.price <= 0) {
                throw new Error('Please Enter Price');
              }

              if (this.quantity <= 0) {
                throw new Error('Please Enter Quantity');
              } //TODO: make error checks better


              this.listingID = ez_guid__WEBPACK_IMPORTED_MODULE_8__["Guid"].create().toShortString();
              this.afstore.doc("users/".concat(this.retailerUID)).update({
                listings: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                  quantity: this.quantity,
                  price: this.price,
                  description: this.description,
                  name: this.name,
                  listingID: this.listingID,
                  isListed: false
                })
              });
              this.presentAlert("Listing Added Successfully");
            } catch (error) {
              this.presentError(error.message);
            }
          }
        }, {
          key: "publish",
          value: function publish() {
            try {
              if (this.name.length == 0) {
                throw new Error('Please Enter a Name');
              }

              if (this.description.length == 0) {
                throw new Error('Please Enter a Description');
              }

              if (this.price == 0) {
                throw new Error('Please Enter Price');
              }

              if (this.quantity == 0) {
                throw new Error('Please Enter Quantity');
              } //TODO: make error checks better


              this.listingID = ez_guid__WEBPACK_IMPORTED_MODULE_8__["Guid"].create().toShortString();
              this.date = new Date();
              this.pickupDate = new Date(this.pickupTime.toDate()); // TODO: if adding after the pickuptime then increase the date to tomorrow (add one to todays date)

              var data = {
                description: this.description,
                listingID: this.listingID,
                name: this.name,
                price: this.price,
                quantity: this.quantity,
                retailerType: this.retailerType,
                location: this.location,
                retailerUID: this.retailerUID,
                deleteDate: new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), this.pickupDate.getHours(), this.pickupDate.getMinutes(), this.pickupDate.getSeconds(), this.pickupDate.getMilliseconds())
              };
              this.afstore.collection("listings").doc(this.listingID).set(data);
              this.afstore.doc("users/".concat(this.retailerUID)).update({
                listings: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                  quantity: this.quantity,
                  price: this.price,
                  description: this.description,
                  name: this.name,
                  listingID: this.listingID,
                  isListed: true
                })
              });
              this.presentAlert("Listing Added and Published Successfully");
            } catch (error) {
              this.presentError(error.message);
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var resolveFunction, promise, alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        resolveFunction = resolve;
                      });
                      _context2.next = 3;
                      return this.alertController.create({
                        header: message,
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {
                            return resolveFunction(true);
                          }
                        }]
                      });

                    case 3:
                      alert = _context2.sent;
                      _context2.next = 6;
                      return alert.present();

                    case 6:
                      return _context2.abrupt("return", promise);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentError",
          value: function presentError(errorMessage) {
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
                        header: 'New Listing Error',
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
        }]);

        return NewListingPage;
      }();

      NewListingPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      NewListingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-listing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./new-listing.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/new-listing/new-listing.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./new-listing.page.scss */
        "./src/app/new-listing/new-listing.page.scss"))["default"]]
      })], NewListingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=new-listing-new-listing-module-es5.js.map