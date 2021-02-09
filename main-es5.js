function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/helpers/auth.guard */
    "./src/app/shared/helpers/auth.guard.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _sales_sales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sales/sales.component */
    "./src/app/sales/sales.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./reports/reports.component */
    "./src/app/reports/reports.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./users-form/users-form.component */
    "./src/app/users-form/users-form.component.ts");
    /* harmony import */


    var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./inventory/inventory.component */
    "./src/app/inventory/inventory.component.ts");
    /* harmony import */


    var _categories_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./categories/categories.component */
    "./src/app/categories/categories.component.ts");
    /* harmony import */


    var _recovery_password_recovery_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./recovery-password/recovery-password.component */
    "./src/app/recovery-password/recovery-password.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'sales',
      component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_5__["SalesComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }, {
      path: 'users',
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }, {
      path: 'users/:id',
      component: _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_9__["UsersFormComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }, {
      path: 'users-form',
      component: _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_9__["UsersFormComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }, {
      path: 'products',
      component: _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }, {
      path: 'products/:id',
      component: _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }, {
      path: 'inventory-add',
      component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_10__["InventoryComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
      data: {
        type: "add"
      }
    }, {
      path: 'inventory-list',
      component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_10__["InventoryComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
      data: {
        type: "list"
      }
    }, {
      path: 'inventory-edit',
      component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_10__["InventoryComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
      data: {
        type: "edit"
      }
    }, {
      path: 'inventory-sell',
      component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_10__["InventoryComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
      data: {
        type: "sell"
      }
    }, {
      path: 'categories',
      component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }, {
      path: 'reports',
      component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"],
      canActivate: [_shared_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }, {
      path: 'recovery-password',
      component: _recovery_password_recovery_password_component__WEBPACK_IMPORTED_MODULE_12__["RecoveryPasswordComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/services/authentication.service */
    "./src/app/shared/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loading/loading.component */
    "./src/app/loading/loading.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sidenav/sidenav.component */
    "./src/app/sidenav/sidenav.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "inside": a0
      };
    };

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService, router) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.router = router;
        this.title = 'front-end';
        this.hidden = true;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.events.subscribe(function (event) {
            _this.hidden = _this.authService.isLogged() ? false : true;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 5,
      consts: [[3, "hidden"], [2, "margin", "2% 5% 0% 5%", 3, "ngClass"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hidden);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hidden);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx.hidden));
        }
      },
      directives: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
    /* harmony import */


    var ngx_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-currency */
    "./node_modules/ngx-currency/__ivy_ngcc__/fesm2015/ngx-currency.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @shared/helpers/jwt.interceptor */
    "./src/app/shared/helpers/jwt.interceptor.ts");
    /* harmony import */


    var _shared_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @shared/helpers/error.interceptor */
    "./src/app/shared/helpers/error.interceptor.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./categories/categories.component */
    "./src/app/categories/categories.component.ts");
    /* harmony import */


    var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./inventory/inventory.component */
    "./src/app/inventory/inventory.component.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./sidenav/sidenav.component */
    "./src/app/sidenav/sidenav.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _sales_sales_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./sales/sales.component */
    "./src/app/sales/sales.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./users-form/users-form.component */
    "./src/app/users-form/users-form.component.ts");
    /* harmony import */


    var _click_outside_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./click-outside.directive */
    "./src/app/click-outside.directive.ts");
    /* harmony import */


    var _hover_class_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./hover-class.directive */
    "./src/app/hover-class.directive.ts");
    /* harmony import */


    var _reports_reports_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./reports/reports.component */
    "./src/app/reports/reports.component.ts");
    /* harmony import */


    var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./shared/components/pagination/pagination.component */
    "./src/app/shared/components/pagination/pagination.component.ts");
    /* harmony import */


    var _loading_loading_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./loading/loading.component */
    "./src/app/loading/loading.component.ts");
    /* harmony import */


    var _shared_helpers_loading_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @shared/helpers/loading.interceptor */
    "./src/app/shared/helpers/loading.interceptor.ts");
    /* harmony import */


    var _recovery_password_recovery_password_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./recovery-password/recovery-password.component */
    "./src/app/recovery-password/recovery-password.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _shared_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _shared_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _shared_helpers_loading_interceptor__WEBPACK_IMPORTED_MODULE_26__["LoadingInterceptorService"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_3__["NgxMaskModule"].forRoot(), ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesComponent"], _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_15__["SidenavComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"], _sales_sales_component__WEBPACK_IMPORTED_MODULE_17__["SalesComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _click_outside_directive__WEBPACK_IMPORTED_MODULE_21__["ClickOutsideDirective"], _users_users_component__WEBPACK_IMPORTED_MODULE_19__["UsersComponent"], _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_20__["UsersFormComponent"], _hover_class_directive__WEBPACK_IMPORTED_MODULE_22__["HoverClassDirective"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_23__["ReportsComponent"], _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_24__["PaginationComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"], _recovery_password_recovery_password_component__WEBPACK_IMPORTED_MODULE_27__["RecoveryPasswordComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_3__["NgxMaskModule"], ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesComponent"], _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_15__["SidenavComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"], _sales_sales_component__WEBPACK_IMPORTED_MODULE_17__["SalesComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _click_outside_directive__WEBPACK_IMPORTED_MODULE_21__["ClickOutsideDirective"], _users_users_component__WEBPACK_IMPORTED_MODULE_19__["UsersComponent"], _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_20__["UsersFormComponent"], _hover_class_directive__WEBPACK_IMPORTED_MODULE_22__["HoverClassDirective"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_23__["ReportsComponent"], _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_24__["PaginationComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"], _recovery_password_recovery_password_component__WEBPACK_IMPORTED_MODULE_27__["RecoveryPasswordComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_3__["NgxMaskModule"].forRoot(), ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _shared_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _shared_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _shared_helpers_loading_interceptor__WEBPACK_IMPORTED_MODULE_26__["LoadingInterceptorService"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/categories/categories.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/categories/categories.component.ts ***!
    \****************************************************/

  /*! exports provided: CategoriesComponent */

  /***/
  function srcAppCategoriesCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
      return CategoriesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_forms_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/forms/categories */
    "./src/app/shared/forms/categories.ts");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/services/categories.service */
    "./src/app/shared/services/categories.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/components/pagination/pagination.component */
    "./src/app/shared/components/pagination/pagination.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["name"];

    function CategoriesComponent_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_tr_25_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var category_r52 = ctx.$implicit;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.selectCategory(category_r52);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_tr_25_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var category_r52 = ctx.$implicit;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.deleteCategory(category_r52);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " close ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r52 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r52.name);
      }
    }

    var CategoriesComponent =
    /*#__PURE__*/
    function () {
      function CategoriesComponent(service, formBuilder, route) {
        var _this2 = this;

        _classCallCheck(this, CategoriesComponent);

        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.loading = false;

        this.selectCategory = function (category) {
          _this2.nameField.nativeElement.focus();

          _this2.category = category;

          _this2.fillForm();
        };

        this.fillForm = function () {
          return _this2.categoryForm.patchValue(_this2.category);
        };

        this.emptyForm = function () {
          _this2.category = null;
        };

        this.getCategories = function () {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          return _this2.service.get(page).subscribe(function (response) {
            return _this2.categoriesInfos = response;
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
        };

        this.deleteCategory = function (category) {
          return _this2.service.delete(category).subscribe(function (data) {
            materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
              html: 'Deletado com sucesso',
              classes: 'succes'
            });

            _this2.getCategories();
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
              html: 'Erro ao deletar',
              classes: 'fail'
            });
          });
        };
      }

      _createClass(CategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.categoryForm = this.formBuilder.group(new _shared_forms_categories__WEBPACK_IMPORTED_MODULE_1__["CategoryForm"]());
          this.route.queryParams.subscribe(function (_ref) {
            var page = _ref.page;
            return _this3.getCategories(page);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          this.loading = true;

          if (this.categoryForm.invalid) {
            return;
          }

          if (this.category) {
            this.service.update(this.categoryForm.value).subscribe(function (response) {
              var _a;

              materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
                html: (_a = response) === null || _a === void 0 ? void 0 : _a.message,
                classes: 'succes'
              });

              _this4.getCategories();

              _this4.emptyForm();
            }, function (error) {
              return materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
                html: error,
                classes: 'fail'
              });
            }, function () {
              return _this4.loading = false;
            });
            return;
          }

          this.service.store(this.categoryForm.value).subscribe(function (data) {
            var _a;

            materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
              html: (_a = data) === null || _a === void 0 ? void 0 : _a.message,
              classes: 'succes'
            });

            _this4.getCategories();
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
              html: error,
              classes: 'fail'
            });
          }, function () {
            return _this4.loading = false;
          });
        }
      }, {
        key: "pagination",
        get: function get() {
          var _a;

          return _toConsumableArray(Array((_a = this.categoriesInfos) === null || _a === void 0 ? void 0 : _a.last_page).keys());
        }
      }]);

      return CategoriesComponent;
    }();

    CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) {
      return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoriesComponent,
      selectors: [["app-categories"]],
      viewQuery: function CategoriesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nameField = _t.first);
        }
      },
      decls: 27,
      vars: 8,
      consts: [[1, "col", "s8", "card-panel", 3, "formGroup"], [1, "row"], [1, "col", "s12", "center-align"], [1, "input-field", "col", "s12", "m8"], ["type", "text", "placeholder", "Nome da categoria", "formControlName", "name"], ["name", ""], [1, "col", "s6", "m3"], [1, "btn", "orange", "darken-1", 3, "disabled", "click"], [1, "col", "s3", "push-s3"], ["moduleUrl", "categories", 3, "arrayInfos", "page"], [4, "ngFor", "ngForOf"], [1, "orange-text", "clickable", 3, "click"], [1, "material-icons"], [1, "red-text", "clickable", 3, "click"]],
      template: function CategoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cadastrar Categoria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesComponent_Template_button_click_10_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-pagination", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Excluir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CategoriesComponent_tr_25_Template, 11, 1, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-pagination", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.categoryForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx.category ? "Cadastrar" : "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrayInfos", ctx.categoriesInfos)("page", ctx.categoriesInfos == null ? null : ctx.categoriesInfos.current_page);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoriesInfos == null ? null : ctx.categoriesInfos.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrayInfos", ctx.categoriesInfos)("page", ctx.categoriesInfos == null ? null : ctx.categoriesInfos.current_page);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: [".btn.orange.darken-1[_ngcontent-%COMP%] {\n  margin-top: 1.5em;\n}\n\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9DOlxcd2FtcDY0XFx3d3dcXGZyb250LWVuZC1lcnAvc3JjXFxhcHBcXGNhdGVnb3JpZXNcXGNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FESVE7RUFDSSxpQ0FBQTtVQUFBLHlCQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLm9yYW5nZS5kYXJrZW4tMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxufVxyXG5cclxudGQge1xyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmJ0bi5vcmFuZ2UuZGFya2VuLTEge1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbn1cblxudGQgYTpob3ZlciBpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-categories',
          templateUrl: './categories.component.html',
          styleUrls: ['./categories.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, {
        nameField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['name']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/click-outside.directive.ts":
  /*!********************************************!*\
    !*** ./src/app/click-outside.directive.ts ***!
    \********************************************/

  /*! exports provided: ClickOutsideDirective */

  /***/
  function srcAppClickOutsideDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function () {
      return ClickOutsideDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClickOutsideDirective =
    /*#__PURE__*/
    function () {
      function ClickOutsideDirective(_elementRef) {
        _classCallCheck(this, ClickOutsideDirective);

        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ClickOutsideDirective, [{
        key: "onClick",
        value: function onClick(targetElement) {
          var clickedInside = this._elementRef.nativeElement.contains(targetElement);

          if (!clickedInside) {
            this.clickOutside.emit(null);
          }
        }
      }]);

      return ClickOutsideDirective;
    }();

    ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
      return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ClickOutsideDirective,
      selectors: [["", "clickOutside", ""]],
      hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      outputs: {
        clickOutside: "clickOutside"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[clickOutside]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        clickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:click', ['$event.target']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/services/categories.service */
    "./src/app/shared/services/categories.service.ts");
    /* harmony import */


    var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/services/products.service */
    "./src/app/shared/services/products.service.ts");
    /* harmony import */


    var _shared_services_sales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/services/sales.service */
    "./src/app/shared/services/sales.service.ts");
    /* harmony import */


    var _shared_services_feeds_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/services/feeds.service */
    "./src/app/shared/services/feeds.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_li_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r1 == null ? null : item_r1.hour, " ", item_r1 == null ? null : item_r1.action, "");
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(categoriesService, productsService, salesService, feedsService) {
        _classCallCheck(this, HomeComponent);

        this.categoriesService = categoriesService;
        this.productsService = productsService;
        this.salesService = salesService;
        this.feedsService = feedsService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(this.categoriesService.get(1), this.productsService.get(), this.salesService.get(), this.feedsService.get()).subscribe(function (infos) {
            _this5.categoriesInfos = infos[0];
            _this5.productsInfos = infos[1];
            _this5.salesInfos = infos[2];
            _this5.feedsInfos = infos[3];
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_sales_service__WEBPACK_IMPORTED_MODULE_4__["SalesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_feeds_service__WEBPACK_IMPORTED_MODULE_5__["FeedsService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 46,
      vars: 4,
      consts: [[1, "row"], [1, "section"], [1, "col", "s12", "m4", "l4", "x13"], [1, "card", "gradient-45deg-light-blue-cyan", "white-text"], [1, "card-content"], [1, "col", "s7", "m7"], [1, "material-icons", "background-round", "mt-5"], [1, "col", "s5", "m5", "right-align"], [1, "mb-0"], [1, "card", "gradient-45deg-green-teal", "white-text"], [1, "card", "gradient-45deg-red-pink", "white-text"], [1, "col", "s12"], [1, "collection"], [1, "collection-header", "center"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add_shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Produtos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "timeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Vendas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "timeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Categorias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Atividades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HomeComponent_li_45_Template, 2, 2, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.productsInfos == null ? null : ctx.productsInfos.total) || "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.salesInfos == null ? null : ctx.salesInfos.total) || "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.categoriesInfos == null ? null : ctx.categoriesInfos.total) || "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.feedsInfos == null ? null : ctx.feedsInfos.data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]
        }, {
          type: _shared_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
        }, {
          type: _shared_services_sales_service__WEBPACK_IMPORTED_MODULE_4__["SalesService"]
        }, {
          type: _shared_services_feeds_service__WEBPACK_IMPORTED_MODULE_5__["FeedsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hover-class.directive.ts":
  /*!******************************************!*\
    !*** ./src/app/hover-class.directive.ts ***!
    \******************************************/

  /*! exports provided: HoverClassDirective */

  /***/
  function srcAppHoverClassDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoverClassDirective", function () {
      return HoverClassDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HoverClassDirective =
    /*#__PURE__*/
    function () {
      function HoverClassDirective(elementRef) {
        _classCallCheck(this, HoverClassDirective);

        this.elementRef = elementRef;
        console.log(elementRef);
      }

      _createClass(HoverClassDirective, [{
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this.elementRef.nativeElement.classList.add(this.hoverClass);
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.elementRef.nativeElement.classList.remove(this.hoverClass);
        }
      }]);

      return HoverClassDirective;
    }();

    HoverClassDirective.ɵfac = function HoverClassDirective_Factory(t) {
      return new (t || HoverClassDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    HoverClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: HoverClassDirective,
      selectors: [["", "hover-class", ""]],
      hostBindings: function HoverClassDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HoverClassDirective_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function HoverClassDirective_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
      },
      inputs: {
        hoverClass: ["hover-class", "hoverClass"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoverClassDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[hover-class]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        hoverClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['hover-class']
        }],
        onMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseenter']
        }],
        onMouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/inventory/inventory.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/inventory/inventory.component.ts ***!
    \**************************************************/

  /*! exports provided: InventoryComponent */

  /***/
  function srcAppInventoryInventoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryComponent", function () {
      return InventoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shared_forms_sales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/forms/sales */
    "./src/app/shared/forms/sales.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/services/products.service */
    "./src/app/shared/services/products.service.ts");
    /* harmony import */


    var _shared_services_sales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/services/sales.service */
    "./src/app/shared/services/sales.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @shared/services/authentication.service */
    "./src/app/shared/services/authentication.service.ts");
    /* harmony import */


    var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/components/pagination/pagination.component */
    "./src/app/shared/components/pagination/pagination.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hover_class_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../hover-class.directive */
    "./src/app/hover-class.directive.ts");

    function InventoryComponent_th_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Baixa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InventoryComponent_th_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InventoryComponent_th_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Adicionar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InventoryComponent_th_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Excluir");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InventoryComponent_tr_43_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_tr_43_td_13_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var product_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.selectProduct(product_r35);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " shopping_cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InventoryComponent_tr_43_td_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "//products/", product_r35.id, "");
      }
    }

    function InventoryComponent_tr_43_td_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_tr_43_td_15_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var product_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.selectProduct(product_r35);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " add ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InventoryComponent_tr_43_td_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_tr_43_td_16_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var product_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.delete(product_r35);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InventoryComponent_tr_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InventoryComponent_tr_43_td_13_Template, 4, 0, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InventoryComponent_tr_43_td_14_Template, 4, 1, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InventoryComponent_tr_43_td_15_Template, 4, 0, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InventoryComponent_tr_43_td_16_Template, 4, 0, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r35 = ctx.$implicit;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r35.ref);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r35.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r35.value_buy);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r35.value_sell);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r35.application);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r35.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.screenType === "sell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.screenType === "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.screenType === "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r34.loggedUser == null ? null : ctx_r34.loggedUser.role_id) == 1 && ctx_r34.screenType === "edit");
      }
    }

    var InventoryComponent =
    /*#__PURE__*/
    function () {
      function InventoryComponent(route, service, salesService, formBuilder, authenticationService, router) {
        var _this6 = this;

        _classCallCheck(this, InventoryComponent);

        this.route = route;
        this.service = service;
        this.salesService = salesService;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.router = router;
        this.loading = false;
        this.filterType = "title";
        this.screenType = "";

        this.getProducts = function (page) {
          return _this6.service.get(page).subscribe(function (data) {
            return _this6.productsInfos = data;
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
        };

        this.selectProduct = function (product) {
          _this6.selectedProduct = product;

          _this6.saleForm.patchValue({
            product_id: product.id
          });
        };

        this.initializeModal = function () {
          var elems = document.querySelectorAll('.modal');
          var instances = materialize_css__WEBPACK_IMPORTED_MODULE_1__["Modal"].init(elems, {});
        };

        this.initializeSelect = function () {
          var elems = document.querySelectorAll('select');
          var instances = materialize_css__WEBPACK_IMPORTED_MODULE_1__["FormSelect"].init(elems, {});
        };

        this.sell = function () {
          _this6.saleForm.controls['price'].setValue(_this6.saleForm.value.amount * _this6.selectedProduct.value_sell);

          _this6.salesService.store(_this6.saleForm.value).subscribe(function (data) {
            materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: 'Baixa cadastrada',
              classses: 'succes'
            });
            _this6.haveFilter() ? _this6.search("".concat(_this6.service.filter, "&page=").concat(_this6.page)) : _this6.getProducts(_this6.page);
          }, function (error) {
            var _a;

            materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: (_a = error) === null || _a === void 0 ? void 0 : _a.amount,
              classes: 'fail'
            });
          });
        };

        this.addAmount = function () {
          return _this6.service.update({
            id: _this6.selectedProduct.id,
            amount: _this6.amount + _this6.selectedProduct.amount
          }).subscribe(function (data) {
            materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: 'Adicionado com sucesso',
              classses: 'succes'
            });
            _this6.haveFilter() ? _this6.search("".concat(_this6.service.filter, "&page=").concat(_this6.page)) : _this6.getProducts(_this6.page);
          }, function (error) {
            materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
        };

        this.search = function (filter, page) {
          _this6.service.search(filter !== null && filter !== void 0 ? filter : "".concat(_this6.filterType, "=").concat(_this6.filter), page).subscribe(function (products) {
            _this6.productsInfos = products;

            _this6.changingQueryParams();
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: error,
              classes: "fail"
            });
          });
        };

        this.haveFilter = function () {
          return _this6.service.filter;
        };

        this.initializeSaleForm = function () {
          _this6.saleForm = _this6.formBuilder.group(new _shared_forms_sales__WEBPACK_IMPORTED_MODULE_2__["SaleForm"]());

          _this6.saleForm.patchValue({
            user_id: _this6.loggedUser.id
          });
        };

        this.delete = function (product) {
          var _a;

          return _this6.service.delete((_a = product) === null || _a === void 0 ? void 0 : _a.id).subscribe(function () {
            return _this6.getProducts();
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
        };
      }

      _createClass(InventoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.loggedUser = this.authenticationService.currentUserValue;
          this.screenType = this.route.snapshot.data.type;
          this.initializeSaleForm();
          this.route.queryParams.subscribe(function (_ref2) {
            var page = _ref2.page;
            _this7.page = page;
            _this7.haveFilter() ? _this7.search("".concat(_this7.service.filter), page) : _this7.getProducts(page);
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
          materialize_css__WEBPACK_IMPORTED_MODULE_1__["updateTextFields"]();
          this.initializeSelect();
          this.initializeModal();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.service.filter = null;
        }
      }, {
        key: "changingQueryParams",
        value: function changingQueryParams() {
          var _a;

          this.router.navigate([], {
            queryParams: {
              page: (_a = this.productsInfos) === null || _a === void 0 ? void 0 : _a.current_page
            }
          });
        }
      }, {
        key: "pagination",
        get: function get() {
          var _a;

          return _toConsumableArray(Array((_a = this.productsInfos) === null || _a === void 0 ? void 0 : _a.last_page).keys());
        }
      }]);

      return InventoryComponent;
    }();

    InventoryComponent.ɵfac = function InventoryComponent_Factory(t) {
      return new (t || InventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_sales_service__WEBPACK_IMPORTED_MODULE_5__["SalesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    InventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InventoryComponent,
      selectors: [["app-inventory"]],
      decls: 83,
      vars: 19,
      consts: [[1, "row"], [1, "col", "s12", "center"], [1, "col", "s12"], [1, "input-field", "col", "m4", "s12"], ["name", "filterType", "id", "filterType", "placeholder", "T\xEDtulo", 3, "ngModel", "ngModelChange"], ["value", "title", "selected", ""], ["value", "ref"], ["for", "filterType"], [1, "input-field", "col", "m8", "s12"], ["type", "text", "placeholder", "T\xEDtulo ou Refer\xEAncia do produto", "name", "filter", 3, "ngModel", "ngModelChange", "keyup"], ["for", "filter"], [3, "arrayInfos", "moduleUrl", "page"], [1, "responsive-table", "striped"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "sells", 1, "modal", "sells"], [1, "modal-content"], [1, "col", "s12", 3, "formGroup"], [1, "input-field", "col", "s12"], ["type", "number", "placeholder", "Quantidade", "formControlName", "amount", "name", "amount"], [1, "modal-footer"], [1, "col", "s6", "m3", "push-sm"], [1, "modal-close", "btn", "grey", "lighten-2", "black-text"], [1, "col", "s6", "m3", "push-m6"], [1, "waves-effect", "waves-orange", "btn", "orange", "darken-1", 3, "click"], ["id", "add-amount", 1, "modal"], [1, "succes"], ["type", "number", "placeholder", "Quantidade", "name", "amount", 3, "ngModel", "ngModelChange"], ["for", "amount"], [1, "col", "s3", "push-s3"], ["id", "application"], ["data-target", "sells", 1, "green-text", "modal-trigger", "clickable", 3, "click"], [1, "material-icons"], [1, "orange-text", 3, "routerLink"], ["hover-class", "orange-text", "data-target", "add-amount", 1, "green-text", "darken-1", "modal-trigger", "clickable", "add", 3, "click"], [1, "red-text", "clickable", 3, "click"]],
      template: function InventoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pesquisar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_select_ngModelChange_11_listener($event) {
            return ctx.filterType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "T\xEDtulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Referencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Selecione o filtro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.filter = $event;
          })("keyup", function InventoryComponent_Template_input_keyup_19_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "T\xEDtulo ou Refer\xEAncia do produto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-pagination", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ref.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Custo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Valor Venda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Aplica\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Quantidade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, InventoryComponent_th_38_Template, 2, 0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, InventoryComponent_th_39_Template, 2, 0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, InventoryComponent_th_40_Template, 2, 0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, InventoryComponent_th_41_Template, 2, 0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, InventoryComponent_tr_43_Template, 17, 10, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-pagination", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "form", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Fechar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_Template_button_click_59_listener() {
            return ctx.sell();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Registrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Atualmente possui ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InventoryComponent_Template_input_ngModelChange_72_listener($event) {
            return ctx.amount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Quantidade que deseja adicionar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Fechar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_Template_button_click_81_listener() {
            return ctx.addAmount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Adicionar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.screenType === "sell" ? "Dar baixa em produtos" : ctx.screenType === "edit" ? "Editar estoque" : "Consultar estoque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("moduleUrl", "inventory-", ctx.screenType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrayInfos", ctx.productsInfos)("page", ctx.productsInfos == null ? null : ctx.productsInfos.current_page);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenType === "sell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenType === "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenType === "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.loggedUser == null ? null : ctx.loggedUser.role_id) == 1 && ctx.screenType === "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productsInfos == null ? null : ctx.productsInfos.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("moduleUrl", "inventory-", ctx.screenType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrayInfos", ctx.productsInfos)("page", ctx.productsInfos == null ? null : ctx.productsInfos.current_page);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dar baixa em ", ctx.selectedProduct == null ? null : ctx.selectedProduct.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.saleForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Adicionar ao estoque ", ctx.selectedProduct == null ? null : ctx.selectedProduct.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.selectedProduct == null ? null : ctx.selectedProduct.amount, " itens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amount);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _hover_class_directive__WEBPACK_IMPORTED_MODULE_10__["HoverClassDirective"]],
      styles: ["@media only screen and (max-width: 1023px) {\n  td[_ngcontent-%COMP%] {\n    max-width: 100px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n#add-amount[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n}\ntd#application[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L0M6XFx3YW1wNjRcXHd3d1xcZnJvbnQtZW5kLWVycC9zcmNcXGFwcFxcaW52ZW50b3J5XFxpbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQ0ROO0FBQ0Y7QURLSTtFQUNJLGVBQUE7QUNIUjtBRFNRO0VBQ0ksaUNBQUE7VUFBQSx5QkFBQTtBQ05aO0FEVUk7RUFDSSxnQkFBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3ZhcnMuc2Nzcyc7XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDoxMDIzcHgpe1xyXG4gICAgdGR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG59XHJcblxyXG4jYWRkLWFtb3VudCB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIGE6aG92ZXIge1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmI2FwcGxpY2F0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICB9XHJcbn1cclxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgdGQge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufVxuI2FkZC1hbW91bnQgZm9ybSB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxudGQgYTpob3ZlciBpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn1cbnRkI2FwcGxpY2F0aW9uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inventory',
          templateUrl: './inventory.component.html',
          styleUrls: ['./inventory.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _shared_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
        }, {
          type: _shared_services_sales_service__WEBPACK_IMPORTED_MODULE_5__["SalesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/loading/loading.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/loading/loading.component.ts ***!
    \**********************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/services/loading.service */
    "./src/app/shared/services/loading.service.ts");

    var LoadingComponent =
    /*#__PURE__*/
    function () {
      function LoadingComponent(loadingScreenService, _elmRef, _changeDetectorRef) {
        _classCallCheck(this, LoadingComponent);

        this.loadingScreenService = loadingScreenService;
        this._elmRef = _elmRef;
        this._changeDetectorRef = _changeDetectorRef;
      }

      _createClass(LoadingComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this8 = this;

          this._elmRef.nativeElement.style.display = 'none';
          this.loadingSubscription = this.loadingScreenService.loading$.pipe().subscribe(function (status) {
            _this8._elmRef.nativeElement.style.display = status ? 'block' : 'none';

            _this8._changeDetectorRef.detectChanges();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.loadingSubscription.unsubscribe();
        }
      }]);

      return LoadingComponent;
    }();

    LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
      return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingComponent,
      selectors: [["app-loading"]],
      decls: 9,
      vars: 0,
      consts: [[1, "wrapper"], [1, "preloader-wrapper", "big", "active"], [1, "spinner-layer", "spinner-orange-only"], [1, "circle-clipper", "left"], [1, "circle"], [1, "gap-patch"], [1, "circle-clipper", "right"]],
      template: function LoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".wrapper[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n  z-index: 9999;\n}\n.wrapper[_ngcontent-%COMP%]   .preloader-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  z-index: 99999;\n  right: 50%;\n  top: 50%;\n}\n.spinner-orange-only[_ngcontent-%COMP%] {\n  border-color: #ff5a27;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9DOlxcd2FtcDY0XFx3d3dcXGZyb250LWVuZC1lcnAvc3JjXFxhcHBcXGxvYWRpbmdcXGxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNDUjtBRElBO0VBQ0kscUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgXHJcbiAgICAucHJlbG9hZGVyLXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLnNwaW5uZXItb3JhbmdlLW9ubHkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY1YTI3O1xyXG59IiwiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4ud3JhcHBlciAucHJlbG9hZGVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gIHotaW5kZXg6IDk5OTk5O1xuICByaWdodDogNTAlO1xuICB0b3A6IDUwJTtcbn1cblxuLnNwaW5uZXItb3JhbmdlLW9ubHkge1xuICBib3JkZXItY29sb3I6ICNmZjVhMjc7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loading',
          templateUrl: './loading.component.html',
          styleUrls: ['./loading.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_forms_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/forms/login */
    "./src/app/shared/forms/login.ts");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @shared/services/authentication.service */
    "./src/app/shared/services/authentication.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Autope\xE7as");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Entrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Entrar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_1_Template_span_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.recoveryPass = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Esqueceu a senha?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.loginForm);
      }
    }

    function LoginComponent_form_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_2_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.recoveryPass = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " keyboard_arrow_left ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Entrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Recuperar senha");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_2_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.recovery();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Entrar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.recoveryForm);
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(formBuilder, route, router, authenticationService) {
        var _this9 = this;

        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.recoveryPass = false;
        this.loading = false;
        this.submitted = false;
        this.error = '';

        this.recovery = function () {
          _this9.authenticationService.createRecoveryPassord(_this9.recoveryForm.value).subscribe(function (data) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_4__["toast"]({
              html: "Email enviado!"
            });
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_4__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
        };

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          materialize_css__WEBPACK_IMPORTED_MODULE_4__["updateTextFields"]();
          this.loginForm = this.formBuilder.group(new _shared_forms_login__WEBPACK_IMPORTED_MODULE_3__["Login"]());
          this.recoveryForm = this.formBuilder.group({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          this.submitted = true;

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;
          this.authenticationService.login(this.f.user.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
            return _this10.router.navigate(['/']);
          }, function (error) {
            materialize_css__WEBPACK_IMPORTED_MODULE_4__["toast"]({
              html: "Usuário ou senha incorretos",
              classes: "fail"
            });
            _this10.error = error;
            _this10.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 3,
      vars: 2,
      consts: [[1, "row", "valign-wrapper", "loginBg"], ["class", "col s12 m8 pull-m2 login", 3, "formGroup", 4, "ngIf"], ["class", "col s12 pull-s2 login", 3, "formGroup", 4, "ngIf"], [1, "col", "s12", "m8", "pull-m2", "login", 3, "formGroup"], [1, "logo"], [1, "row"], [1, "col", "s12", "black-background"], [1, "col", "s12"], [1, ""], [1, "input-field", "col", "s12"], ["placeholder", "Usu\xE1rio", "id", "user", "type", "text", "formControlName", "user", 1, "validate"], ["placeholder", "Senha", "id", "password", "type", "password", "formControlName", "password", 1, "validate"], [1, "col", "s12", "m4"], [1, "waves-effect", "waves-light", "btn", "orange", "darken-3", "white-text", 3, "click"], [1, "orange-text", "clickable", 3, "click"], [1, "col", "s12", "pull-s2", "login", 3, "formGroup"], [1, "row", "back", "clickable"], [1, "col", "s12", 3, "click"], [1, "material-icons"], [1, "col", "s8", "push-s2"], [1, "col", "s6"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_form_1_Template, 21, 1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_form_2_Template, 20, 1, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.recoveryPass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recoveryPass);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["*[_ngcontent-%COMP%] {\n  color: #ff784e;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #ff784e;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  color: #ff784e;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #ff784e;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #ff784e;\n}\n@media only screen and (min-width: 1024px) {\n  .loginBg[_ngcontent-%COMP%] {\n    margin-left: -300px !important;\n  }\n}\n.logo[_ngcontent-%COMP%] {\n  color: #444;\n  font-size: 36px;\n  text-transform: uppercase;\n  text-align: center;\n  padding-bottom: 1em;\n}\n.login[_ngcontent-%COMP%] {\n  background: #ff9d52;\n  background-image: -webkit-gradient(linear, left top, right top, from(#ff9d52), to(#ff6b47));\n  background-image: linear-gradient(90deg, #ff9d52, #ff6b47);\n  border-radius: 3em;\n  padding: 2% 5% 5% 5%;\n  box-shadow: 0px 0px 10px 0 black;\n  margin-top: 1em;\n}\n.login[_ngcontent-%COMP%]   .black-background[_ngcontent-%COMP%] {\n  background: #252525;\n  border-radius: 3em;\n  padding: 5em;\n  box-shadow: 0px 0px 10px 0 black;\n}\n.login[_ngcontent-%COMP%]   .black-background[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #2a2a2a;\n}\n.login[_ngcontent-%COMP%]   .black-background[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.login[_ngcontent-%COMP%]   .black-background[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0px 20px 0 #ff814c;\n}\n.back[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: black !important;\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXHdhbXA2NFxcd3d3XFxmcm9udC1lbmQtZXJwL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL0M6XFx3YW1wNjRcXHd3d1xcZnJvbnQtZW5kLWVycC9zcmNcXGFwcFxcdmFycy5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNDV1M7QUNaYjtBRkVJO0VBQ0ksY0NTSztBQ1RiO0FGREk7RUFDSSxjQ1NLO0FDVGI7QUZESTtFQUNJLGNDU0s7QUNUYjtBRkRJO0VBQ0ksY0NTSztBQ1RiO0FGSUE7RUFDSTtJQUNJLDhCQUFBO0VFRE47QUFDRjtBRklBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUVGSjtBRktBO0VBQ0ksbUJDWlM7RURhVCwyRkFBQTtFQUFBLDBEQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBRUZKO0FGSUk7RUFDSSxtQkNISTtFRElKLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FFRlI7QUZHUTtFQUNJLG1CQ1BBO0FDTVo7QUZJUTtFQUNJLGlCQUFBO0FFRlo7QUZHWTtFQUNJLGdDQUFBO0FFRGhCO0FGVUk7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FFUFIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3ZhcnMnO1xyXG5cclxuKiB7XHJcbiAgICBjb2xvcjogJG9yYW5nZS0zMDA7XHJcbiAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogJG9yYW5nZS0zMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcclxuICAgIC5sb2dpbkJne1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Oi0zMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfSAgICBcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4ubG9naW4geyAgICBcclxuICAgIGJhY2tncm91bmQ6ICRvcmFuZ2UtMTAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkb3JhbmdlLTEwMCwkb3JhbmdlLTIwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzZW07XHJcbiAgICBwYWRkaW5nOiAyJSA1JSA1JSA1JTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwIGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgXHJcbiAgICAuYmxhY2stYmFja2dyb3VuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrLTYwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzZW07XHJcbiAgICAgICAgcGFkZGluZzogNWVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwIGJsYWNrO1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDokYmxhY2stNTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwcHggMjBweCAwICNmZjgxNGM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLmJhY2sge1xyXG4gICAgKiwgLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6MS4zZW07XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iLCIkYmx1ZTogIzNFNTlGRjtcclxuJGxpZ2h0LWJsdWU6ICM0MmQ3RUU7XHJcbiRza3k6ICMwMEMzRkY7XHJcbiRwdXJwbGU6ICM1RjQ1OUU7XHJcblxyXG4kZ3JlZW46ICMzRUU2QjM7XHJcbiRyZWQ6ICNGMjYxNzU7XHJcbiR5ZWxsb3c6ICNGRkNFMzg7XHJcbiRsZW1vbjogI0U1REMwMDtcclxuXHJcbiRwaW5rOiAjRTc0Njg4O1xyXG4kb3JhbmdlOiAjRkY2RDAwO1xyXG4kb3JhbmdlLTEwMDogI2ZmOWQ1MjtcclxuJG9yYW5nZS0yMDA6ICNmZjZiNDc7XHJcbiRvcmFuZ2UtMzAwOiAjZmY3ODRlO1xyXG4kb3JhbmdlLXNoYWRvdzogI2ZmODE0YztcclxuXHJcbiRkYXJrZXN0OiAjMTcxYTJiO1xyXG4kZGFyay1ncmV5OiAjMzQzQTQwO1xyXG4kZ3JleS0xMDAwOiAjNDI1MjU3O1xyXG4kbGlnaHQtZ3JleTogI0Y4RjlGRDtcclxuJGdyZXktNjAwOiAjNkM3NTdEO1xyXG4kZ3JleS01MDA6IHJnYigxNDYsIDE1MCwgMTUzKTtcclxuJGdyZXktNDAwOiAjZTBlMGUwO1xyXG4kZ3JleS0zMDA6ICNERUUyRTY7XHJcbiRncmV5LTEwMDogI2Y1ZjVmNTtcclxuJGdyZXktMTA6ICNFM0UzRTM7XHJcbiR3aGl0ZTogI0ZGRjtcclxuXHJcbiRibGFjay02MDA6ICMyNTI1MjU7XHJcbiRibGFjay01MDA6ICMyYTJhMmE7IiwiKiB7XG4gIGNvbG9yOiAjZmY3ODRlO1xufVxuKiA6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZjc4NGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5sb2dpbkJnIHtcbiAgICBtYXJnaW4tbGVmdDogLTMwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5sb2dvIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG4ubG9naW4ge1xuICBiYWNrZ3JvdW5kOiAjZmY5ZDUyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjlkNTIsICNmZjZiNDcpO1xuICBib3JkZXItcmFkaXVzOiAzZW07XG4gIHBhZGRpbmc6IDIlIDUlIDUlIDUlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMCBibGFjaztcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuLmxvZ2luIC5ibGFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogIzI1MjUyNTtcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xuICBwYWRkaW5nOiA1ZW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwIGJsYWNrO1xufVxuLmxvZ2luIC5ibGFjay1iYWNrZ3JvdW5kIGlucHV0IHtcbiAgYmFja2dyb3VuZDogIzJhMmEyYTtcbn1cbi5sb2dpbiAuYmxhY2stYmFja2dyb3VuZCBidXR0b24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5sb2dpbiAuYmxhY2stYmFja2dyb3VuZCBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDBweCAyMHB4IDAgI2ZmODE0Yztcbn1cblxuLmJhY2sgKiwgLmJhY2sgLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/services/notifications.service */
    "./src/app/shared/services/notifications.service.ts");
    /* harmony import */


    var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/services/authentication.service */
    "./src/app/shared/services/authentication.service.ts");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _click_outside_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../click-outside.directive */
    "./src/app/click-outside.directive.ts");

    function NavbarComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 10);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "unread": a0
      };
    };

    function NavbarComponent_ul_18_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " trending_down ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var notification_r61 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, (notification_r61 == null ? null : notification_r61.read_at) == null));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", notification_r61 == null ? null : notification_r61.data == null ? null : notification_r61.data.name, " (", notification_r61 == null ? null : notification_r61.data == null ? null : notification_r61.data.title, ") ");
      }
    }

    function NavbarComponent_ul_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function NavbarComponent_ul_18_Template_ul_clickOutside_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r62.hideNotifications();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " NOTIFICA\xC7\xD5ES ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ul_18_Template_span_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r64.markAllAsRead();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " playlist_add_check ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_ul_18_li_7_Template, 4, 5, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r59.notifications == null ? null : ctx_r59.notifications.data);
      }
    }

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(notificationsService, authService, service, router) {
        var _this11 = this;

        _classCallCheck(this, NavbarComponent);

        this.notificationsService = notificationsService;
        this.authService = authService;
        this.service = service;
        this.router = router;
        this.notifications = {
          data: [{
            read_at: ''
          }]
        };
        this.show = false;
        this.clickOutCounter = 0;
        this.loggedUserName = "";

        this.showNotifications = function () {
          return _this11.show = true;
        };

        this.hideNotifications = function () {
          if (_this11.clickOutCounter === 0) {
            _this11.sumClickOut();
          } else {
            _this11.show = false;
            _this11.clickOutCounter = 0;
          }
        };

        this.sumClickOut = function () {
          return _this11.clickOutCounter++;
        };

        this.markAllAsRead = function () {
          _this11.notificationsService.marAsRead(_this11.authService.currentUserValue.id).subscribe(function () {
            return _this11.getNotifications();
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: "Erro ao buscar notificações",
              classes: "fail"
            });
          });
        };

        this.getNotifications = function () {
          var _a, _b;

          _this11.notificationsService.get((_b = (_a = _this11.authService) === null || _a === void 0 ? void 0 : _a.currentUserValue) === null || _b === void 0 ? void 0 : _b.id).subscribe(function (data) {
            _this11.notifications = data;
            _this11.show = false;
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: "Erro ao buscar notificações",
              classes: "fail"
            });
          });
        };
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.service.find(this.authService.currentUserValue.id).subscribe(function (data) {
            return _this12.loggedUserName = data.name;
          });
          this.router.events.forEach(function (event) {
            var _a, _b;

            var result = ((_a = location) === null || _a === void 0 ? void 0 : _a.pathname.indexOf('login')) > -1 || ((_b = location) === null || _b === void 0 ? void 0 : _b.pathname.indexOf('recovery-password')) > -1;

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              if (!result) {
                _this12.getNotifications();
              }
            } // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized

          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 19,
      vars: 3,
      consts: [[1, "navbar-fixed"], [1, "nav-wrapper"], ["href", "#", "data-target", "slide-out", 1, "sidenav-trigger"], [1, "material-icons"], ["id", "nav-mobile", 1, "right"], [1, "clickable", "icon-pulldown", 3, "click"], ["class", "badge-point", 4, "ngIf"], [1, "icon-pulldown", "user-icon"], [1, "logged-user-name"], ["class", "notifications .dropdown-contet", 3, "clickOutside", 4, "ngIf"], [1, "badge-point"], [1, "notifications", ".dropdown-contet", 3, "clickOutside"], [1, "right-align"], [1, "title"], [1, "material-icons", "white-text", "mark-as-read", "clickable", 3, "click"], [1, "divider"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "material-icons", "background-round", "small", "orange", "darken-3"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_7_listener() {
            return ctx.showNotifications();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " notifications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_span_10_Template, 1, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " account_circle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavbarComponent_ul_18_Template, 8, 1, "ul", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.notifications == null ? null : ctx.notifications.data[0] == null ? null : ctx.notifications.data[0].read_at) == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loggedUserName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _click_outside_directive__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
      styles: ["nav[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%] {\n  background: #E3E3E3;\n  color: #425257;\n  box-shadow: none;\n}\nnav[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #425257 !important;\n}\n.user-icon[_ngcontent-%COMP%] {\n  margin-right: 5px !important;\n}\n.icon-pulldown[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n}\n.badge-point[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: #FF6D00;\n  margin: 10px;\n  position: relative;\n  bottom: 4.2em;\n  display: block;\n  border-radius: 5px;\n  box-shadow: 0 0 20px 7px #FF6D00;\n  -webkit-animation-name: pulse;\n          animation-name: pulse;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n@media only screen and (min-width: 1024px) {\n  .notifications[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 997;\n    right: 11em;\n    width: 20%;\n    background: #252525;\n    max-height: 50%;\n    overflow-y: auto;\n    top: 2em;\n    color: #FFF;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  }\n  .notifications[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 1em 2em;\n    background: #252525;\n  }\n  .notifications[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    vertical-align: super;\n    margin-right: 1em;\n  }\n  .notifications[_ngcontent-%COMP%]   li.right-align[_ngcontent-%COMP%] {\n    padding-bottom: 1em;\n  }\n  .notifications[_ngcontent-%COMP%]   li.unread[_ngcontent-%COMP%] {\n    background: #e0e0e0;\n    color: black;\n  }\n  .notifications[_ngcontent-%COMP%]   li.divider[_ngcontent-%COMP%] {\n    padding: 0;\n    width: 100%;\n    height: 5px;\n    background-color: #FF6D00;\n    background-image: linear-gradient(30deg, #ff9d52, #ff6b47);\n  }\n  .notifications[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n  .notifications[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icons.mark-as-read[_ngcontent-%COMP%] {\n    padding: 0.1em;\n    border-radius: 2px;\n  }\n  .notifications[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .background-round[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .logged-user-name[_ngcontent-%COMP%] {\n    max-width: 100px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .notifications[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 997;\n    left: 4em;\n    width: 66%;\n    margin-left: 50px;\n    background: #252525;\n    max-height: 50%;\n    overflow-y: auto;\n    top: 2em;\n    color: #FFF;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  }\n  .notifications[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 1em 2em;\n    background: #252525;\n  }\n  .notifications[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    vertical-align: super;\n    margin-right: 1em;\n  }\n  .notifications[_ngcontent-%COMP%]   li.right-align[_ngcontent-%COMP%] {\n    padding-bottom: 1em;\n  }\n  .notifications[_ngcontent-%COMP%]   li.unread[_ngcontent-%COMP%] {\n    background: #e0e0e0;\n    color: black;\n  }\n  .notifications[_ngcontent-%COMP%]   li.divider[_ngcontent-%COMP%] {\n    padding: 0;\n    width: 100%;\n    height: 5px;\n    background-color: #FF6D00;\n    background-image: linear-gradient(30deg, #ff9d52, #ff6b47);\n  }\n  .notifications[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n  .notifications[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icons.mark-as-read[_ngcontent-%COMP%] {\n    padding: 0.1em;\n    border-radius: 2px;\n  }\n  .notifications[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .background-round[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n}\n@-webkit-keyframes pulse {\n  0% {\n    box-shadow: 0 0 20px 3px #FF6D00;\n  }\n  100% {\n    box-shadow: 0 0 20px 10px #FF6D00;\n  }\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 20px 3px #FF6D00;\n  }\n  100% {\n    box-shadow: 0 0 20px 10px #FF6D00;\n  }\n}\nul#nav-mobile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFx3YW1wNjRcXHd3d1xcZnJvbnQtZW5kLWVycC9zcmNcXGFwcFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmJhci9DOlxcd2FtcDY0XFx3d3dcXGZyb250LWVuZC1lcnAvc3JjXFxhcHBcXHZhcnMuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQ3VCTTtFRHRCTixjQ2VRO0VEZFIsZ0JBQUE7QUVESjtBRkVJO0VBQ0UseUJBQUE7QUVBTjtBRklBO0VBQ0ksNEJBQUE7QUVESjtBRklBO0VBQ0ksaUJBQUE7QUVESjtBRklBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkNYSztFRFlMLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUVBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUVGSjtBRktBO0VBRUk7SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsbUJDakJJO0lEa0JKLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFFBQUE7SUFDQSxXQ3ZCQTtJRHdCQSwrR0FBQTtFRUhOO0VGS007SUFDSSxnQkFBQTtJQUNBLG1CQzFCQTtFQ3VCVjtFRklVO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtFRUZkO0VGS1U7SUFDSSxtQkFBQTtFRUhkO0VGTVU7SUFDSSxtQkMzQ0w7SUQ0Q0ssWUFBQTtFRUpkO0VGT1U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSx5QkMvRFA7SURnRU8sMERBQUE7RUVMZDtFRlFVO0lBQ0ksaUJBQUE7RUVOZDtFRlNVO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0VFUGQ7RUZTVTtJQUNJLFlBQUE7RUVQZDtBQUNGO0FGYUE7RUFFSTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0VFWk47O0VGZUU7SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkNoRkk7SURpRkosZUFBQTtJQUNBLGdCQUFBO0lBQ0EsUUFBQTtJQUNBLFdDdEZBO0lEdUZBLCtHQUFBO0VFWk47RUZjTTtJQUNJLGdCQUFBO0lBQ0EsbUJDekZBO0VDNkVWO0VGYVU7SUFDSSxxQkFBQTtJQUNBLGlCQUFBO0VFWGQ7RUZjVTtJQUNJLG1CQUFBO0VFWmQ7RUZlVTtJQUNJLG1CQzFHTDtJRDJHSyxZQUFBO0VFYmQ7RUZnQlU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSx5QkM5SFA7SUQrSE8sMERBQUE7RUVkZDtFRmlCVTtJQUNJLGlCQUFBO0VFZmQ7RUZrQlU7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7RUVoQmQ7RUZrQlU7SUFDSSxZQUFBO0VFaEJkO0FBQ0Y7QUZzQkE7RUFDSTtJQUNHLGdDQUFBO0VFcEJMO0VGc0JFO0lBQ0UsaUNBQUE7RUVwQko7QUFDRjtBRmNBO0VBQ0k7SUFDRyxnQ0FBQTtFRXBCTDtFRnNCRTtJQUNFLGlDQUFBO0VFcEJKO0FBQ0Y7QUZ1QkE7RUFDSSxpQkFBQTtBRXJCSiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi92YXJzJztcclxuXHJcbm5hdiwgLnNpZGVuYXYge1xyXG4gICAgYmFja2dyb3VuZDogJGdyZXktMTA7XHJcbiAgICBjb2xvcjogJGdyZXktMTAwMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgICBjb2xvcjokZ3JleS0xMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51c2VyLWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbi1wdWxsZG93bntcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG59XHJcblxyXG4uYmFkZ2UtcG9pbnQge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkb3JhbmdlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA0LjJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggN3B4ICRvcmFuZ2U7XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG5cclxuICAgIC5ub3RpZmljYXRpb25zIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogOTk3O1xyXG4gICAgICAgIHJpZ2h0OiAxMWVtO1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrLTYwMDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICB0b3A6IDJlbTtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMTIpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4yKTtcclxuICAgIFxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMWVtIDJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrLTYwMDtcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgJi5yaWdodC1hbGlnbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgJi51bnJlYWQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyZXktNDAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgJi5kaXZpZGVyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMGRlZywgJG9yYW5nZS0xMDAsJG9yYW5nZS0yMDApO1xyXG4gICAgICAgICAgICB9ICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMubWFyay1hcy1yZWFkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMWVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYWNrZ3JvdW5kLXJvdW5kIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcclxuXHJcbiAgICAubG9nZ2VkLXVzZXItbmFtZXtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuXHJcbiAgICAubm90aWZpY2F0aW9ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDk5NztcclxuICAgICAgICBsZWZ0OiA0ZW07XHJcbiAgICAgICAgd2lkdGg6IDY2JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2stNjAwO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIHRvcDogMmVtO1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMiksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjIpO1xyXG4gICAgXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW0gMmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2stNjAwO1xyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAmLnJpZ2h0LWFsaWduIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAmLnVucmVhZCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JleS00MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAmLmRpdmlkZXIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwZGVnLCAkb3JhbmdlLTEwMCwkb3JhbmdlLTIwMCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5tYXRlcmlhbC1pY29ucy5tYXJrLWFzLXJlYWQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4xZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJhY2tncm91bmQtcm91bmQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAwJSAgIHtcclxuICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDNweCAkb3JhbmdlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7IFxyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAxMHB4ICRvcmFuZ2U7XHJcbiAgICB9ICAgIFxyXG4gfVxyXG5cclxudWwjbmF2LW1vYmlsZSBsaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxufSIsIiRibHVlOiAjM0U1OUZGO1xyXG4kbGlnaHQtYmx1ZTogIzQyZDdFRTtcclxuJHNreTogIzAwQzNGRjtcclxuJHB1cnBsZTogIzVGNDU5RTtcclxuXHJcbiRncmVlbjogIzNFRTZCMztcclxuJHJlZDogI0YyNjE3NTtcclxuJHllbGxvdzogI0ZGQ0UzODtcclxuJGxlbW9uOiAjRTVEQzAwO1xyXG5cclxuJHBpbms6ICNFNzQ2ODg7XHJcbiRvcmFuZ2U6ICNGRjZEMDA7XHJcbiRvcmFuZ2UtMTAwOiAjZmY5ZDUyO1xyXG4kb3JhbmdlLTIwMDogI2ZmNmI0NztcclxuJG9yYW5nZS0zMDA6ICNmZjc4NGU7XHJcbiRvcmFuZ2Utc2hhZG93OiAjZmY4MTRjO1xyXG5cclxuJGRhcmtlc3Q6ICMxNzFhMmI7XHJcbiRkYXJrLWdyZXk6ICMzNDNBNDA7XHJcbiRncmV5LTEwMDA6ICM0MjUyNTc7XHJcbiRsaWdodC1ncmV5OiAjRjhGOUZEO1xyXG4kZ3JleS02MDA6ICM2Qzc1N0Q7XHJcbiRncmV5LTUwMDogcmdiKDE0NiwgMTUwLCAxNTMpO1xyXG4kZ3JleS00MDA6ICNlMGUwZTA7XHJcbiRncmV5LTMwMDogI0RFRTJFNjtcclxuJGdyZXktMTAwOiAjZjVmNWY1O1xyXG4kZ3JleS0xMDogI0UzRTNFMztcclxuJHdoaXRlOiAjRkZGO1xyXG5cclxuJGJsYWNrLTYwMDogIzI1MjUyNTtcclxuJGJsYWNrLTUwMDogIzJhMmEyYTsiLCJuYXYsIC5zaWRlbmF2IHtcbiAgYmFja2dyb3VuZDogI0UzRTNFMztcbiAgY29sb3I6ICM0MjUyNTc7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5uYXYgLm1hdGVyaWFsLWljb25zLCAuc2lkZW5hdiAubWF0ZXJpYWwtaWNvbnMge1xuICBjb2xvcjogIzQyNTI1NyAhaW1wb3J0YW50O1xufVxuXG4udXNlci1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmljb24tcHVsbGRvd24ge1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cblxuLmJhZGdlLXBvaW50IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogI0ZGNkQwMDtcbiAgbWFyZ2luOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNC4yZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDdweCAjRkY2RDAwO1xuICBhbmltYXRpb24tbmFtZTogcHVsc2U7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAubm90aWZpY2F0aW9ucyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5NztcbiAgICByaWdodDogMTFlbTtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJhY2tncm91bmQ6ICMyNTI1MjU7XG4gICAgbWF4LWhlaWdodDogNTAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgdG9wOiAyZW07XG4gICAgY29sb3I6ICNGRkY7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG4gIC5ub3RpZmljYXRpb25zIGxpIHtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIGJhY2tncm91bmQ6ICMyNTI1MjU7XG4gIH1cbiAgLm5vdGlmaWNhdGlvbnMgbGkgLnRpdGxlIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cbiAgLm5vdGlmaWNhdGlvbnMgbGkucmlnaHQtYWxpZ24ge1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIH1cbiAgLm5vdGlmaWNhdGlvbnMgbGkudW5yZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAubm90aWZpY2F0aW9ucyBsaS5kaXZpZGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjZEMDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMwZGVnLCAjZmY5ZDUyLCAjZmY2YjQ3KTtcbiAgfVxuICAubm90aWZpY2F0aW9ucyBsaSAubWF0ZXJpYWwtaWNvbnMge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIC5ub3RpZmljYXRpb25zIGxpIC5tYXRlcmlhbC1pY29ucy5tYXJrLWFzLXJlYWQge1xuICAgIHBhZGRpbmc6IDAuMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgfVxuICAubm90aWZpY2F0aW9ucyBsaSAuYmFja2dyb3VuZC1yb3VuZCB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubG9nZ2VkLXVzZXItbmFtZSB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cblxuICAubm90aWZpY2F0aW9ucyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5NztcbiAgICBsZWZ0OiA0ZW07XG4gICAgd2lkdGg6IDY2JTtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjUyNTI1O1xuICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHRvcDogMmVtO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuICAubm90aWZpY2F0aW9ucyBsaSB7XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjMjUyNTI1O1xuICB9XG4gIC5ub3RpZmljYXRpb25zIGxpIC50aXRsZSB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICB9XG4gIC5ub3RpZmljYXRpb25zIGxpLnJpZ2h0LWFsaWduIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG4gIC5ub3RpZmljYXRpb25zIGxpLnVucmVhZCB7XG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgLm5vdGlmaWNhdGlvbnMgbGkuZGl2aWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2RDAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMGRlZywgI2ZmOWQ1MiwgI2ZmNmI0Nyk7XG4gIH1cbiAgLm5vdGlmaWNhdGlvbnMgbGkgLm1hdGVyaWFsLWljb25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAubm90aWZpY2F0aW9ucyBsaSAubWF0ZXJpYWwtaWNvbnMubWFyay1hcy1yZWFkIHtcbiAgICBwYWRkaW5nOiAwLjFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cbiAgLm5vdGlmaWNhdGlvbnMgbGkgLmJhY2tncm91bmQtcm91bmQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAzcHggI0ZGNkQwMDtcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAxMHB4ICNGRjZEMDA7XG4gIH1cbn1cbnVsI25hdi1tb2JpbGUgbGkge1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]
        }, {
          type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }, {
          type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.component.ts":
  /*!************************************************!*\
    !*** ./src/app/products/products.component.ts ***!
    \************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_forms_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/forms/products */
    "./src/app/shared/forms/products.ts");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/services/products.service */
    "./src/app/shared/services/products.service.ts");
    /* harmony import */


    var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/services/categories.service */
    "./src/app/shared/services/categories.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_currency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-currency */
    "./node_modules/ngx-currency/__ivy_ngcc__/fesm2015/ngx-currency.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");

    function ProductsComponent_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 26);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "validate invalid": a0
      };
    };

    var _c1 = function _c1() {
      return {
        prefix: "R$ ",
        thousands: ".",
        decimal: ",",
        align: "left"
      };
    };

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(formBuilder, service, categoriesService, route) {
        var _this13 = this;

        _classCallCheck(this, ProductsComponent);

        this.formBuilder = formBuilder;
        this.service = service;
        this.categoriesService = categoriesService;
        this.route = route;
        this.loading = false;

        this.getCategories = function () {
          return _this13.categoriesService.get().subscribe(function (categories) {
            return _this13.categories = categories;
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
        };

        this.handleError = function (e) {
          var formFields = Object.keys(_this13.productForm.value);
          var errorsFields = Object.keys(e);
          var fields = formFields.filter(function (value) {
            return errorsFields.includes(value);
          });
          fields.map(function (f) {
            return _this13.productForm.controls[f].setErrors({
              'unavailable': true
            });
          });
        };

        this.clean = function () {
          return _this13.productForm.reset();
        };
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          materialize_css__WEBPACK_IMPORTED_MODULE_2__["updateTextFields"]();
          this.productForm = this.formBuilder.group(new _shared_forms_products__WEBPACK_IMPORTED_MODULE_1__["ProductForm"]());
          this.getCategories();

          if (this.route.snapshot.paramMap.get('id')) {
            this.service.find(this.route.snapshot.paramMap.get('id')).subscribe(function (product) {
              _this14.productForm.patchValue(product);

              materialize_css__WEBPACK_IMPORTED_MODULE_2__["updateTextFields"]();
              materialize_css__WEBPACK_IMPORTED_MODULE_2__["textareaAutoResize"](document.querySelector('.materialize-textarea'));
            }, function (error) {
              return materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
                html: error,
                classes: 'fail'
              });
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this15 = this;

          this.loading = true;

          if (this.productForm.invalid) {
            return;
          }

          if (this.productForm.value.id) {
            this.service.update(this.productForm.value).subscribe(function () {
              return materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
                html: "Atualizado com sucesso",
                classes: 'succes'
              });
            }, function (error) {
              return materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
                html: error,
                classes: 'fail'
              });
            }, function () {
              return _this15.loading = false;
            });
          } else {
            this.service.store(this.productForm.value).subscribe(function () {
              materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
                html: "Cadastrado com sucesso",
                classes: 'succes'
              });

              _this15.productForm.reset();
            }, function (error) {
              _this15.handleError(error);

              _this15.loading = false;
            }, function () {
              return _this15.loading = false;
            });
          }
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.productForm.controls;
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 45,
      vars: 13,
      consts: [["autocomplete", "off", "autocomplete", "false", 1, "col", "s8", "card-panel", 3, "formGroup"], [1, "row"], [1, "col", "s12", "center-align"], [1, "input-field", "col", "m4", "s6"], ["type", "text", "placeholder", "Nome da pe\xE7a", "formControlName", "title"], ["for", "title"], ["type", "text", "placeholder", "Refer\xEAncia", "formControlName", "ref", "name", "ref", 3, "ngClass"], ["for", "ref"], ["data-error", "Refer\xEAncia j\xE1 cadastrada", "data-succes", "right", "class", "helper-text", 4, "ngIf"], [1, "input-field", "col", "m2", "s6"], ["type", "number", "placeholder", "Quantidade", "formControlName", "amount", "name", "amount"], ["for", "amount"], ["type", "number", "placeholder", "Notificar abaixo de", "value", "1", "formControlName", "limit_amount", "name", "limit_amount"], ["for", "limit_amount"], ["for", "value_cost"], ["type", "text", "placeholder", "Valor de custo", "formControlName", "value_cost", "name", "value_cost", "currencyMask", "", 3, "options"], ["type", "text", "placeholder", "Valor de venda", "formControlName", "value_sell", "name", "value_sell", "currencyMask", "", 3, "options"], ["for", "value_sell"], [1, "col", "m4", "s12"], [1, "input-field", "col", "s12"], ["bindLabel", "name", "bindValue", "id", "placeholder", "Categorias", "formControlName", "category_id", 3, "items"], ["id", "textarea1", "formControlName", "application", 1, "materialize-textarea"], ["for", "textarea1"], [1, "row", "center-align"], [1, "col", "m3", "s6"], [1, "btn", "orange", "darken-1", 3, "disabled", "click"], ["data-error", "Refer\xEAncia j\xE1 cadastrada", "data-succes", "right", 1, "helper-text"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "T\xEDtulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Refer\xEAncia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductsComponent_span_14_Template, 1, 0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Quantidade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Estoque M\xEDnimo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Valor de custo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Valor de venda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "ng-select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "textarea", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Aplica\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_43_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx.productForm == null ? null : ctx.productForm.value == null ? null : ctx.productForm.value.id) ? "Editar" : "Cadastrar", " Produtos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.formControls == null ? null : ctx.formControls.ref == null ? null : ctx.formControls.ref.errors == null ? null : ctx.formControls.ref.errors.unavailable));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControls == null ? null : ctx.formControls.ref == null ? null : ctx.formControls.ref.errors == null ? null : ctx.formControls.ref.errors.unavailable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (ctx.productForm == null ? null : ctx.productForm.invalid) || ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.productForm == null ? null : ctx.productForm.value == null ? null : ctx.productForm.value.id) ? "Salvar" : "Cadastrar", " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], ngx_currency__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _shared_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
        }, {
          type: _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/recovery-password/recovery-password.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/recovery-password/recovery-password.component.ts ***!
    \******************************************************************/

  /*! exports provided: RecoveryPasswordComponent */

  /***/
  function srcAppRecoveryPasswordRecoveryPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecoveryPasswordComponent", function () {
      return RecoveryPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_forms_recovery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/forms/recovery */
    "./src/app/shared/forms/recovery.ts");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/services/authentication.service */
    "./src/app/shared/services/authentication.service.ts");

    var RecoveryPasswordComponent =
    /*#__PURE__*/
    function () {
      function RecoveryPasswordComponent(formBuilder, route, service) {
        _classCallCheck(this, RecoveryPasswordComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
      }

      _createClass(RecoveryPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          materialize_css__WEBPACK_IMPORTED_MODULE_2__["updateTextFields"]();
          this.recoveryForm = this.formBuilder.group(new _shared_forms_recovery__WEBPACK_IMPORTED_MODULE_1__["Recovery"]());
          this.route.queryParams.subscribe(function (_ref3) {
            var token = _ref3.token;

            _this16.service.findToken(token).subscribe(function (data) {
              return _this16.recoveryForm.patchValue(data);
            }, function (error) {
              return materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
                html: error,
                classes: 'fail'
              });
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.service.recoveryPassword(this.recoveryForm.value).subscribe(function (data) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
              html: 'Senha alterada com sucesso'
            });
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_2__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
        }
      }]);

      return RecoveryPasswordComponent;
    }();

    RecoveryPasswordComponent.ɵfac = function RecoveryPasswordComponent_Factory(t) {
      return new (t || RecoveryPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]));
    };

    RecoveryPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecoveryPasswordComponent,
      selectors: [["app-recovery-password"]],
      decls: 17,
      vars: 1,
      consts: [[1, "row", "valign-wrapper"], [1, "col", "s12", "pull-s2", "login", 3, "formGroup"], [1, "row"], [1, "col", "s8", "push-s2"], [1, "col", "s12"], [1, ""], [1, "input-field", "col", "s12"], ["placeholder", "Senha", "id", "password", "type", "text", "formControlName", "password", 1, "validate"], ["placeholder", "Nova senha", "id", "password_confirmation", "type", "text", "formControlName", "password_confirmation", 1, "validate"], [1, "waves-effect", "waves-light", "btn", "orange", "darken-3", "white-text", 3, "click"]],
      template: function RecoveryPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Recuperar senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecoveryPasswordComponent_Template_button_click_15_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Recuperar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.recoveryForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]],
      styles: ["*[_ngcontent-%COMP%] {\n  color: #ff784e;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #ff784e;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  color: #ff784e;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #ff784e;\n}\n*[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #ff784e;\n}\n.login[_ngcontent-%COMP%] {\n  background: #ff9d52;\n  background-image: -webkit-gradient(linear, left top, right top, from(#ff9d52), to(#ff6b47));\n  background-image: linear-gradient(90deg, #ff9d52, #ff6b47);\n  border-radius: 3em;\n  padding: 5em;\n  box-shadow: 0px 0px 10px 0 black;\n  margin-top: 12em;\n}\n.login[_ngcontent-%COMP%]   .s8[_ngcontent-%COMP%] {\n  background: #252525;\n  border-radius: 3em;\n  padding: 5em;\n  box-shadow: 0px 0px 10px 0 black;\n}\n.login[_ngcontent-%COMP%]   .s8[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #2a2a2a;\n}\n.login[_ngcontent-%COMP%]   .s8[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.login[_ngcontent-%COMP%]   .s8[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0px 20px 0 #ff814c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3ZlcnktcGFzc3dvcmQvQzpcXHdhbXA2NFxcd3d3XFxmcm9udC1lbmQtZXJwL3NyY1xcYXBwXFxyZWNvdmVyeS1wYXNzd29yZFxccmVjb3ZlcnktcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlY292ZXJ5LXBhc3N3b3JkL0M6XFx3YW1wNjRcXHd3d1xcZnJvbnQtZW5kLWVycC9zcmNcXGFwcFxcdmFycy5zY3NzIiwic3JjL2FwcC9yZWNvdmVyeS1wYXNzd29yZC9yZWNvdmVyeS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNDV1M7QUNaYjtBRkVJO0VBQ0ksY0NTSztBQ1RiO0FGREk7RUFDSSxjQ1NLO0FDVGI7QUZESTtFQUNJLGNDU0s7QUNUYjtBRkRJO0VBQ0ksY0NTSztBQ1RiO0FGSUE7RUFDSSxtQkNFUztFRERULDJGQUFBO0VBQUEsMERBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FFREo7QUZHSTtFQUNJLG1CQ1dJO0VEVkosa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUVEUjtBRkVRO0VBQ0ksbUJDT0E7QUNQWjtBRkdRO0VBQ0ksaUJBQUE7QUVEWjtBRkVZO0VBQ0ksZ0NBQUE7QUVBaEIiLCJmaWxlIjoic3JjL2FwcC9yZWNvdmVyeS1wYXNzd29yZC9yZWNvdmVyeS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3ZhcnMnO1xyXG5cclxuKiB7XHJcbiAgICBjb2xvcjogJG9yYW5nZS0zMDA7XHJcbiAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogJG9yYW5nZS0zMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dpbiB7ICAgIFxyXG4gICAgYmFja2dyb3VuZDogJG9yYW5nZS0xMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRvcmFuZ2UtMTAwLCRvcmFuZ2UtMjAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNlbTtcclxuICAgIHBhZGRpbmc6IDVlbTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwIGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMTJlbTtcclxuICAgIFxyXG4gICAgLnM4IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2stNjAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNlbTtcclxuICAgICAgICBwYWRkaW5nOiA1ZW07XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDAgYmxhY2s7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiRibGFjay01MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDBweCAyMHB4IDAgI2ZmODE0YztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiJGJsdWU6ICMzRTU5RkY7XHJcbiRsaWdodC1ibHVlOiAjNDJkN0VFO1xyXG4kc2t5OiAjMDBDM0ZGO1xyXG4kcHVycGxlOiAjNUY0NTlFO1xyXG5cclxuJGdyZWVuOiAjM0VFNkIzO1xyXG4kcmVkOiAjRjI2MTc1O1xyXG4keWVsbG93OiAjRkZDRTM4O1xyXG4kbGVtb246ICNFNURDMDA7XHJcblxyXG4kcGluazogI0U3NDY4ODtcclxuJG9yYW5nZTogI0ZGNkQwMDtcclxuJG9yYW5nZS0xMDA6ICNmZjlkNTI7XHJcbiRvcmFuZ2UtMjAwOiAjZmY2YjQ3O1xyXG4kb3JhbmdlLTMwMDogI2ZmNzg0ZTtcclxuJG9yYW5nZS1zaGFkb3c6ICNmZjgxNGM7XHJcblxyXG4kZGFya2VzdDogIzE3MWEyYjtcclxuJGRhcmstZ3JleTogIzM0M0E0MDtcclxuJGdyZXktMTAwMDogIzQyNTI1NztcclxuJGxpZ2h0LWdyZXk6ICNGOEY5RkQ7XHJcbiRncmV5LTYwMDogIzZDNzU3RDtcclxuJGdyZXktNTAwOiByZ2IoMTQ2LCAxNTAsIDE1Myk7XHJcbiRncmV5LTQwMDogI2UwZTBlMDtcclxuJGdyZXktMzAwOiAjREVFMkU2O1xyXG4kZ3JleS0xMDA6ICNmNWY1ZjU7XHJcbiRncmV5LTEwOiAjRTNFM0UzO1xyXG4kd2hpdGU6ICNGRkY7XHJcblxyXG4kYmxhY2stNjAwOiAjMjUyNTI1O1xyXG4kYmxhY2stNTAwOiAjMmEyYTJhOyIsIioge1xuICBjb2xvcjogI2ZmNzg0ZTtcbn1cbiogOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmY3ODRlO1xufVxuXG4ubG9naW4ge1xuICBiYWNrZ3JvdW5kOiAjZmY5ZDUyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjlkNTIsICNmZjZiNDcpO1xuICBib3JkZXItcmFkaXVzOiAzZW07XG4gIHBhZGRpbmc6IDVlbTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDAgYmxhY2s7XG4gIG1hcmdpbi10b3A6IDEyZW07XG59XG4ubG9naW4gLnM4IHtcbiAgYmFja2dyb3VuZDogIzI1MjUyNTtcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xuICBwYWRkaW5nOiA1ZW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwIGJsYWNrO1xufVxuLmxvZ2luIC5zOCBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICMyYTJhMmE7XG59XG4ubG9naW4gLnM4IGJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxvZ2luIC5zOCBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDBweCAyMHB4IDAgI2ZmODE0Yztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecoveryPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recovery-password',
          templateUrl: './recovery-password.component.html',
          styleUrls: ['./recovery-password.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/reports/reports.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/reports/reports.component.ts ***!
    \**********************************************/

  /*! exports provided: ReportsComponent */

  /***/
  function srcAppReportsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
      return ReportsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_forms_reportObsoleteProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/forms/reportObsoleteProduct */
    "./src/app/shared/forms/reportObsoleteProduct.ts");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @environment/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/services/reports.service */
    "./src/app/shared/services/reports.service.ts");
    /* harmony import */


    var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @shared/services/authentication.service */
    "./src/app/shared/services/authentication.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ReportsComponent_tr_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r24 == null ? null : product_r24.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r24 == null ? null : product_r24.amount_total);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r24 == null ? null : product_r24.value);
      }
    }

    function ReportsComponent_tr_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r25 == null ? null : product_r25.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r25 == null ? null : product_r25.ref, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r25 == null ? null : product_r25.limit_amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r25 == null ? null : product_r25.amount);
      }
    }

    var ReportsComponent =
    /*#__PURE__*/
    function () {
      function ReportsComponent(formBuilder, service, authService) {
        var _this17 = this;

        _classCallCheck(this, ReportsComponent);

        this.formBuilder = formBuilder;
        this.service = service;
        this.authService = authService;

        this.getInventoryDownProducts = function () {
          _this17.service.inventoryDownProducts().subscribe(function (data) {
            return _this17.reportInventoryDown = data;
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_3__["toast"]({
              html: 'Erro ao buscar os produtos',
              classes: 'fail'
            });
          });
        };

        this.getPdfInventoryDown = function () {
          window.open(_environment_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].getInventoryDownUrl, "_blank");
        };

        this.downloadPdfInventoryDown = function () {
          window.open(_environment_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].downloadInventoryDownUrl, "_blank");
        };
      }

      _createClass(ReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _a, _b;

          materialize_css__WEBPACK_IMPORTED_MODULE_3__["Tabs"].init(document.querySelectorAll('.tabs'), {
            swipeable: true
          });
          materialize_css__WEBPACK_IMPORTED_MODULE_3__["updateTextFields"]();
          this.reportObsoleteForm = this.formBuilder.group(new _shared_forms_reportObsoleteProduct__WEBPACK_IMPORTED_MODULE_1__["ReportObsoleteProduct"]((_b = (_a = this.authService) === null || _a === void 0 ? void 0 : _a.currentUserValue) === null || _b === void 0 ? void 0 : _b.id));
          this.getInventoryDownProducts();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this18 = this;

          var _a;

          this.service.obsoleteProducts((_a = this.reportObsoleteForm) === null || _a === void 0 ? void 0 : _a.value).subscribe(function (data) {
            return _this18.data = data;
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_3__["toast"]({
              html: error,
              classes: 'error'
            });
          });
        }
      }]);

      return ReportsComponent;
    }();

    ReportsComponent.ɵfac = function ReportsComponent_Factory(t) {
      return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]));
    };

    ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReportsComponent,
      selectors: [["app-reports"]],
      decls: 69,
      vars: 3,
      consts: [[1, "row"], [1, "col", "s12"], ["id", "tabs-swipe-demo", 1, "tabs"], [1, "tab", "col", "s3"], ["href", "#obsolete-products", 1, "active"], ["href", "#inventory-down-products"], ["id", "obsolete-products", 2, "height", "40em"], [1, "col", "s12", "m3", 3, "formGroup"], [1, "col", "s12", "center-align", 2, "margin", "20px 0 20px 0"], [1, "input-field", "col", "s12"], ["type", "date", "placeholder", "Desde", "formControlName", "since", "name", "since"], ["for", "since"], ["type", "date", "placeholder", "Desde", "formControlName", "at", "name", "at"], ["for", "at"], ["type", "text", "placeholder", "M\xEDnimo de venda", "formControlName", "minimun_amount", "name", "limit_amount"], ["for", "minimun_amount"], [1, "col", "s12", "m9"], [1, "btn", "orange", "darken-1", 3, "click"], [1, "col", "s12", "m8", "list"], [1, "striped", "responsive-table"], [4, "ngFor", "ngForOf"], ["id", "inventory-down-products", 2, "padding", "5%"], [1, "col", "s3"], [1, "btn", "green", "darken-1", 3, "click"], [1, "material-icons", "left"], [1, "col", "s12", "list"], [1, "striped"]],
      template: function ReportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Produtos Obsoletos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Produtos baixo estoque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Relat\xF3rio de produtos obsoletos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Desde");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "At\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "M\xEDnimo de venda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_Template_button_click_30_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Cadastrar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Quantidade Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Valor Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ReportsComponent_tr_43_Template, 7, 3, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_Template_a_click_47_listener() {
            return ctx.downloadPdfInventoryDown();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "get_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Baixar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_Template_a_click_52_listener() {
            return ctx.getPdfInventoryDown();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Visualizar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "table", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Produto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Quantidade m\xEDnima");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Quantidade Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ReportsComponent_tr_68_Template, 9, 4, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reportObsoleteForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reportInventoryDown);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: [".list[_ngcontent-%COMP%] {\n  height: 50em;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9DOlxcd2FtcDY0XFx3d3dcXGZyb250LWVuZC1lcnAvc3JjXFxhcHBcXHJlcG9ydHNcXHJlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XHJcbiAgICBoZWlnaHQ6IDUwZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufSIsIi5saXN0IHtcbiAgaGVpZ2h0OiA1MGVtO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reports',
          templateUrl: './reports.component.html',
          styleUrls: ['./reports.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"]
        }, {
          type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sales/sales.component.ts":
  /*!******************************************!*\
    !*** ./src/app/sales/sales.component.ts ***!
    \******************************************/

  /*! exports provided: SalesComponent */

  /***/
  function srcAppSalesSalesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesComponent", function () {
      return SalesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/services/sales.service */
    "./src/app/shared/services/sales.service.ts");
    /* harmony import */


    var _shared_helpers_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/helpers/pagination */
    "./src/app/shared/helpers/pagination.ts");
    /* harmony import */


    var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/components/pagination/pagination.component */
    "./src/app/shared/components/pagination/pagination.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SalesComponent_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sale_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sale_r11 == null ? null : sale_r11.product == null ? null : sale_r11.product.ref);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sale_r11 == null ? null : sale_r11.product == null ? null : sale_r11.product.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sale_r11 == null ? null : sale_r11.product == null ? null : sale_r11.product.application);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sale_r11 == null ? null : sale_r11.amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sale_r11 == null ? null : sale_r11.date);
      }
    }

    var SalesComponent =
    /*#__PURE__*/
    function () {
      function SalesComponent(route, service, paginationHelper) {
        var _this19 = this;

        _classCallCheck(this, SalesComponent);

        this.route = route;
        this.service = service;
        this.paginationHelper = paginationHelper;

        this.getSales = function (page) {
          _this19.page = page;

          _this19.service.get(page).subscribe(function (data) {
            return _this19.salesInfos = data;
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
        };
      }

      _createClass(SalesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.getSales();
          this.route.queryParams.subscribe(function (_ref4) {
            var page = _ref4.page;
            return _this20.getSales(page);
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
        }
      }]);

      return SalesComponent;
    }();

    SalesComponent.ɵfac = function SalesComponent_Factory(t) {
      return new (t || SalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_helpers_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationHelper"]));
    };

    SalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SalesComponent,
      selectors: [["app-sales"]],
      decls: 20,
      vars: 4,
      consts: [[1, "row"], [1, "col", "s12", "center"], [3, "arrayInfos", "moduleUrl", "page"], [1, "striped", "responsive-table"], [4, "ngFor", "ngForOf"]],
      template: function SalesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Baixas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-pagination", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ref.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Aplica\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quantidade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SalesComponent_tr_19_Template, 11, 5, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrayInfos", ctx.salesInfos)("moduleUrl", "sales")("page", ctx.page);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.salesInfos == null ? null : ctx.salesInfos.data);
        }
      },
      directives: [_shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["@media only screen and (max-width: 1023px) {\n  td[_ngcontent-%COMP%] {\n    max-width: 100px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZXMvQzpcXHdhbXA2NFxcd3d3XFxmcm9udC1lbmQtZXJwL3NyY1xcYXBwXFxzYWxlc1xcc2FsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NhbGVzL3NhbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2FsZXMvc2FsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDoxMDIzcHgpe1xyXG4gICAgdGR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG59IiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgdGQge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sales',
          templateUrl: './sales.component.html',
          styleUrls: ['./sales.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _shared_services_sales_service__WEBPACK_IMPORTED_MODULE_3__["SalesService"]
        }, {
          type: _shared_helpers_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationHelper"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/pagination/pagination.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/pagination/pagination.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PaginationComponent */

  /***/
  function srcAppSharedComponentsPaginationPaginationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
      return PaginationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_helpers_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/helpers/pagination */
    "./src/app/shared/helpers/pagination.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function PaginationComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var page_r66 = ctx.$implicit;

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r67.goTo(page_r66);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r66 = ctx.$implicit;

        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, page_r66 === (ctx_r65.arrayInfos == null ? null : ctx_r65.arrayInfos.current_page)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", page_r66, " ");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "disabled": a0
      };
    };

    var PaginationComponent =
    /*#__PURE__*/
    function () {
      function PaginationComponent(paginationHelper, router) {
        var _this21 = this;

        _classCallCheck(this, PaginationComponent);

        this.paginationHelper = paginationHelper;
        this.router = router;

        this.goTo = function () {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

          _this21.router.navigate([_this21.moduleUrl], {
            queryParams: {
              page: page
            }
          });
        };
      }

      _createClass(PaginationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.page) {
            this.page = 1;
          }
        }
      }, {
        key: "pagination",
        get: function get() {
          var _a;

          var paginationNumbers = _toConsumableArray(Array((_a = this.arrayInfos) === null || _a === void 0 ? void 0 : _a.last_page).keys());

          var actual = this.paginationHelper.getActual(paginationNumbers, this.page);
          var pagination = this.paginationHelper.getPagination(paginationNumbers, actual);
          return pagination != -1 ? pagination : [];
        }
      }]);

      return PaginationComponent;
    }();

    PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
      return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_helpers_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaginationComponent,
      selectors: [["app-pagination"]],
      inputs: {
        arrayInfos: "arrayInfos",
        moduleUrl: "moduleUrl",
        page: "page",
        filter: "filter"
      },
      decls: 11,
      vars: 10,
      consts: [[1, "pagination"], [1, "clickable", 3, "ngClass", "click"], [1, "material-icons"], ["class", "waves-effect", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "waves-effect", 3, "ngClass", "click"]],
      template: function PaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_li_click_1_listener() {
            return ctx.goTo((ctx.arrayInfos == null ? null : ctx.arrayInfos.current_page) - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 3, 4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_li_click_5_listener() {
            return ctx.goTo((ctx.arrayInfos == null ? null : ctx.arrayInfos.current_page) + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "chevron_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_li_click_8_listener() {
            return ctx.goTo(ctx.arrayInfos == null ? null : ctx.arrayInfos.last_page);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "last_page ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, (ctx.arrayInfos == null ? null : ctx.arrayInfos.current_page) === 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagination);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, (ctx.arrayInfos == null ? null : ctx.arrayInfos.current_page) === (ctx.arrayInfos == null ? null : ctx.arrayInfos.last_page)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, (ctx.arrayInfos == null ? null : ctx.arrayInfos.current_page) === (ctx.arrayInfos == null ? null : ctx.arrayInfos.last_page)));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pagination',
          templateUrl: './pagination.component.html',
          styleUrls: ['./pagination.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_helpers_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationHelper"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        arrayInfos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        moduleUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/forms/categories.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/forms/categories.ts ***!
    \********************************************/

  /*! exports provided: CategoryForm */

  /***/
  function srcAppSharedFormsCategoriesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryForm", function () {
      return CategoryForm;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var CategoryForm = function CategoryForm() {
      _classCallCheck(this, CategoryForm);

      this.id = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
      this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
    };
    /***/

  },

  /***/
  "./src/app/shared/forms/login.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/forms/login.ts ***!
    \***************************************/

  /*! exports provided: Login */

  /***/
  function srcAppSharedFormsLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Login", function () {
      return Login;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var Login = function Login() {
      _classCallCheck(this, Login);

      this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
    };
    /***/

  },

  /***/
  "./src/app/shared/forms/products.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/forms/products.ts ***!
    \******************************************/

  /*! exports provided: ProductForm */

  /***/
  function srcAppSharedFormsProductsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductForm", function () {
      return ProductForm;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ProductForm = function ProductForm() {
      _classCallCheck(this, ProductForm);

      this.id = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null);
      this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.ref = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.category_id = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.application = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.value_cost = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.value_sell = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.limit_amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
    };
    /***/

  },

  /***/
  "./src/app/shared/forms/recovery.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/forms/recovery.ts ***!
    \******************************************/

  /*! exports provided: Recovery */

  /***/
  function srcAppSharedFormsRecoveryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Recovery", function () {
      return Recovery;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var Recovery = function Recovery() {
      _classCallCheck(this, Recovery);

      this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.password_confirmation = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.token = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
    };
    /***/

  },

  /***/
  "./src/app/shared/forms/reportObsoleteProduct.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/forms/reportObsoleteProduct.ts ***!
    \*******************************************************/

  /*! exports provided: ReportObsoleteProduct */

  /***/
  function srcAppSharedFormsReportObsoleteProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportObsoleteProduct", function () {
      return ReportObsoleteProduct;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ReportObsoleteProduct = function ReportObsoleteProduct(authUserId) {
      _classCallCheck(this, ReportObsoleteProduct);

      var _a;

      this.authUserId = authUserId;
      this.id = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null);
      this.user_id = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]((_a = this.authUserId, _a !== null && _a !== void 0 ? _a : null), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.since = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.at = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.data = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.minimun_amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
    };
    /***/

  },

  /***/
  "./src/app/shared/forms/sales.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/forms/sales.ts ***!
    \***************************************/

  /*! exports provided: SaleForm */

  /***/
  function srcAppSharedFormsSalesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaleForm", function () {
      return SaleForm;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SaleForm = function SaleForm() {
      _classCallCheck(this, SaleForm);

      this.id = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null);
      this.user_id = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.product_id = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.price = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0.0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
    };
    /***/

  },

  /***/
  "./src/app/shared/forms/users.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/forms/users.ts ***!
    \***************************************/

  /*! exports provided: UserForm */

  /***/
  function srcAppSharedFormsUsersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserForm", function () {
      return UserForm;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UserForm = function UserForm() {
      _classCallCheck(this, UserForm);

      this.id = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null);
      this.role_id = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.cpf = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
    };
    /***/

  },

  /***/
  "./src/app/shared/helpers/auth.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/helpers/auth.guard.ts ***!
    \**********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedHelpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/services/authentication.service */
    "./src/app/shared/services/authentication.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authenticationService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser) {
            // logged in so return true
            return true;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/helpers/error.interceptor.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/helpers/error.interceptor.ts ***!
    \*****************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppSharedHelpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/services/authentication.service */
    "./src/app/shared/services/authentication.service.ts");

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(authenticationService) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this22 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
              _this22.authenticationService.logout(); // const result = request?.url?.indexOf('login') > -1;
              // if(!result) {


              location.reload(true); // }
            }

            var error = err.error.errors || err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/helpers/jwt.interceptor.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/helpers/jwt.interceptor.ts ***!
    \***************************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppSharedHelpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/services/authentication.service */
    "./src/app/shared/services/authentication.service.ts");

    var JwtInterceptor =
    /*#__PURE__*/
    function () {
      function JwtInterceptor(authenticationService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add authorization header with jwt token if available
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser && currentUser.access_token) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.access_token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
      return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JwtInterceptor,
      factory: JwtInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/helpers/loading.interceptor.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/helpers/loading.interceptor.ts ***!
    \*******************************************************/

  /*! exports provided: LoadingInterceptorService */

  /***/
  function srcAppSharedHelpersLoadingInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingInterceptorService", function () {
      return LoadingInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/services/loading.service */
    "./src/app/shared/services/loading.service.ts");

    var LoadingInterceptorService =
    /*#__PURE__*/
    function () {
      function LoadingInterceptorService(loadingScreenService) {
        _classCallCheck(this, LoadingInterceptorService);

        this.loadingScreenService = loadingScreenService;
        this.activeRequests = 0;
      }

      _createClass(LoadingInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this23 = this;

          if (this.activeRequests === 0) {
            this.loadingScreenService.startLoading();
          }

          this.activeRequests++;
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this23.activeRequests--;

            if (_this23.activeRequests === 0) {
              _this23.loadingScreenService.stopLoading();
            }
          }));
        }
      }]);

      return LoadingInterceptorService;
    }();

    LoadingInterceptorService.ɵfac = function LoadingInterceptorService_Factory(t) {
      return new (t || LoadingInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]));
    };

    LoadingInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoadingInterceptorService,
      factory: LoadingInterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/helpers/pagination.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/helpers/pagination.ts ***!
    \**********************************************/

  /*! exports provided: PaginationHelper */

  /***/
  function srcAppSharedHelpersPaginationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationHelper", function () {
      return PaginationHelper;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PaginationHelper = function PaginationHelper() {
      var _this24 = this;

      _classCallCheck(this, PaginationHelper);

      /**
       * arrayOfPages - array with all pages numbers
       * actual - actual page of screen
       *
       * return a range of 5 pagination
       */
      this.getPagination = function (arrayOfPages, actual) {
        var pages = [];

        if (actual != 1 && actual != -1) {
          pages.push(actual - 1);
        }

        if (!actual) {
          return -1;
        }

        for (var i = actual; i <= _this24.getLimiter(arrayOfPages, actual); i++) {
          pages.push(i);
        }

        return pages;
      };
      /**
       * array - array with all pages numbers
       * page - GET url parameters page
       *
       * return false if page is invalid
       */


      this.getActual = function (array, page) {
        return array.findIndex(function (index) {
          return index + 1 == page;
        }) + 1 || false;
      };
      /**
       * array - array with all pages numbers
       * actual - actual page of screen
       *
       * return the range limit to pagination
       */


      this.getLimiter = function (array, actual) {
        if (array.length > 3 && actual + 3 < array.length && actual != 1) {
          return actual + 3;
        } else if (array.length > 4 && actual + 4 < array.length && actual == 1) {
          return actual + 4;
        } else {
          return array.length;
        }
      };
    };

    PaginationHelper.ɵfac = function PaginationHelper_Factory(t) {
      return new (t || PaginationHelper)();
    };

    PaginationHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PaginationHelper,
      factory: PaginationHelper.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/authentication.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/services/authentication.service.ts ***!
    \***********************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppSharedServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @environment/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http) {
        var _this25 = this;

        _classCallCheck(this, AuthenticationService);

        this.http = http;

        this.login = function (user, password) {
          return _this25.http.post("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/auth/login"), {
            user: user,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            _this25.currentUserSubject.next(user);

            return user;
          }));
        };

        this.logout = function () {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');

          _this25.currentUserSubject.next(null);

          return _this25.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/auth/logout"));
        };

        this.findToken = function (token) {
          return _this25.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/password/find/").concat(token));
        };

        this.createRecoveryPassord = function (recoveryForm) {
          return _this25.http.post("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/password/create"), recoveryForm);
        };

        this.recoveryPassword = function (recoveryForm) {
          return _this25.http.post("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/password/reset"), recoveryForm);
        };

        this.isLogged = function () {
          return _this25.currentUserValue;
        };

        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/categories.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/services/categories.service.ts ***!
    \*******************************************************/

  /*! exports provided: CategoriesService */

  /***/
  function srcAppSharedServicesCategoriesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesService", function () {
      return CategoriesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environment/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CategoriesService = function CategoriesService(http) {
      var _this26 = this;

      _classCallCheck(this, CategoriesService);

      this.http = http;
      /**
       * Return all categories
       */

      this.get = function () {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
        return _this26.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/categories?page=").concat(page));
      };
      /**
       * Return an category
       */


      this.find = function (id) {
        return _this26.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/categories/").concat(id));
      };
      /**
       * Store an category
       */


      this.store = function (category) {
        return _this26.http.post("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/categories"), category);
      };
      /**
       * Update an category
       */


      this.update = function (category) {
        return _this26.http.put("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/categories/").concat(category.id), category);
      };
      /**
       * Delete an category
       */


      this.delete = function (category) {
        return _this26.http.delete("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/categories/").concat(category.id));
      };
    };

    CategoriesService.ɵfac = function CategoriesService_Factory(t) {
      return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CategoriesService,
      factory: CategoriesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/feeds.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/feeds.service.ts ***!
    \**************************************************/

  /*! exports provided: FeedsService */

  /***/
  function srcAppSharedServicesFeedsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedsService", function () {
      return FeedsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environment/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FeedsService = function FeedsService(http) {
      var _this27 = this;

      _classCallCheck(this, FeedsService);

      this.http = http;
      /**
       * Return all products
       */

      this.get = function () {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
        return _this27.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/feeds"));
      };
    };

    FeedsService.ɵfac = function FeedsService_Factory(t) {
      return new (t || FeedsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    FeedsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FeedsService,
      factory: FeedsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/loading.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/loading.service.ts ***!
    \****************************************************/

  /*! exports provided: LoadingService */

  /***/
  function srcAppSharedServicesLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
      return LoadingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoadingService = function LoadingService() {
      var _this28 = this;

      _classCallCheck(this, LoadingService);

      this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();

      this.startLoading = function () {
        return _this28.loading$.next(true);
      };

      this.stopLoading = function () {
        return _this28.loading$.next(false);
      };
    };

    LoadingService.ɵfac = function LoadingService_Factory(t) {
      return new (t || LoadingService)();
    };

    LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoadingService,
      factory: LoadingService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/notifications.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/notifications.service.ts ***!
    \**********************************************************/

  /*! exports provided: NotificationsService */

  /***/
  function srcAppSharedServicesNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
      return NotificationsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environment/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var NotificationsService = function NotificationsService(http) {
      var _this29 = this;

      _classCallCheck(this, NotificationsService);

      this.http = http;
      /**
       * Return all products
       */

      this.get = function (user) {
        return _this29.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/").concat(user, "/notifications"));
      };

      this.marAsRead = function (user) {
        return _this29.http.post("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/").concat(user, "/notifications/mark-as-read"), {});
      };
    };

    NotificationsService.ɵfac = function NotificationsService_Factory(t) {
      return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationsService,
      factory: NotificationsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/products.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/products.service.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppSharedServicesProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environment/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductsService = function ProductsService(http) {
      var _this30 = this;

      _classCallCheck(this, ProductsService);

      this.http = http;
      this.filter = null;
      /**
       * Return all products
       */

      this.get = function () {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
        return _this30.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/products?page=").concat(page));
      };
      /**
       * Return an product
       */


      this.find = function (id) {
        return _this30.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/products/").concat(id));
      };
      /**
       * Store an product
       */


      this.store = function (product) {
        return _this30.http.post("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/products"), product);
      };
      /**
       * Update an product
       */


      this.update = function (product) {
        return _this30.http.put("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/products/").concat(product.id), product);
      };

      this.delete = function (product) {
        return _this30.http.delete("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/products/").concat(product));
      };
      /**
       * Search products
       */


      this.search = function (filter, page) {
        _this30.filter = filter;
        return _this30.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/products/search?").concat(filter, "&page=").concat(page ? page : 1));
      };
    };

    ProductsService.ɵfac = function ProductsService_Factory(t) {
      return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductsService,
      factory: ProductsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/reports.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/reports.service.ts ***!
    \****************************************************/

  /*! exports provided: ReportsService */

  /***/
  function srcAppSharedServicesReportsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsService", function () {
      return ReportsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environment/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ReportsService = function ReportsService(http) {
      var _this31 = this;

      _classCallCheck(this, ReportsService);

      this.http = http;
      /**
       * Store a reports
       */

      this.obsoleteProducts = function (report) {
        return _this31.http.post("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/reports/obsolete-products"), report);
      };

      this.inventoryDownProducts = function () {
        return _this31.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/reports/inventory-down-products"));
      };

      this.downloadInventoryDownProducts = function () {
        return _this31.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].downloadInventoryDownUrl));
      };
    };

    ReportsService.ɵfac = function ReportsService_Factory(t) {
      return new (t || ReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ReportsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ReportsService,
      factory: ReportsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/roles.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/roles.service.ts ***!
    \**************************************************/

  /*! exports provided: RolesService */

  /***/
  function srcAppSharedServicesRolesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolesService", function () {
      return RolesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environment/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RolesService =
    /*#__PURE__*/
    function () {
      function RolesService(http) {
        _classCallCheck(this, RolesService);

        this.http = http;
      }

      _createClass(RolesService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/roles"));
        }
      }]);

      return RolesService;
    }();

    RolesService.ɵfac = function RolesService_Factory(t) {
      return new (t || RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    RolesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RolesService,
      factory: RolesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/sales.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/sales.service.ts ***!
    \**************************************************/

  /*! exports provided: SalesService */

  /***/
  function srcAppSharedServicesSalesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesService", function () {
      return SalesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environment/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SalesService = function SalesService(http) {
      var _this32 = this;

      _classCallCheck(this, SalesService);

      this.http = http;
      /**
       * Return all sales
       */

      this.get = function () {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
        return _this32.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/sales?page=").concat(page));
      };
      /**
       * Return an sale
       */


      this.find = function (id) {
        return _this32.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/sales/").concat(id));
      };
      /**
       * Store an sale
       */


      this.store = function (sale) {
        return _this32.http.post("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/sales"), sale);
      };
      /**
       * Update an sale
       */


      this.update = function (sale) {
        return _this32.http.put("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/sales/").concat(sale.id), sale);
      };
    };

    SalesService.ɵfac = function SalesService_Factory(t) {
      return new (t || SalesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    SalesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SalesService,
      factory: SalesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/user.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/user.service.ts ***!
    \*************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environment/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = function UserService(http) {
      var _this33 = this;

      _classCallCheck(this, UserService);

      this.http = http;

      this.getAll = function () {
        return _this33.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users"));
      };
      /**
       * Store an user
       */


      this.store = function (user) {
        return _this33.http.post("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users"), user);
      };
      /**
       * Update an user
       */


      this.update = function (user) {
        var _a;

        return _this33.http.put("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/").concat((_a = user) === null || _a === void 0 ? void 0 : _a.id), user);
      };
      /**
       * Find an user
       */


      this.find = function (user) {
        return _this33.http.get("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/").concat(user));
      };

      this.delete = function (user) {
        return _this33.http.delete("".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/users/").concat(user));
      };
    };

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sidenav/sidenav.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidenav/sidenav.component.ts ***!
    \**********************************************/

  /*! exports provided: SidenavComponent */

  /***/
  function srcAppSidenavSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
      return SidenavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/services/authentication.service */
    "./src/app/shared/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SidenavComponent_li_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cadastrar Usu\xE1rios");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["users", a1];
    };

    function SidenavComponent_a_94_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Editar Perfil");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r57.user == null ? null : ctx_r57.user.id));
      }
    }

    var SidenavComponent =
    /*#__PURE__*/
    function () {
      function SidenavComponent(authService) {
        var _this34 = this;

        _classCallCheck(this, SidenavComponent);

        this.authService = authService;

        this.logout = function () {
          _this34.authService.logout().subscribe(function () {
            return location.reload(true);
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
        };
      }

      _createClass(SidenavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.authService.currentUserValue;
          materialize_css__WEBPACK_IMPORTED_MODULE_1__["Collapsible"].init(document.querySelectorAll('.collapsible'), {
            accordion: true
          });
          materialize_css__WEBPACK_IMPORTED_MODULE_1__["Sidenav"].init(document.querySelectorAll('.sidenav'), {});
        }
      }]);

      return SidenavComponent;
    }();

    SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
      return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidenavComponent,
      selectors: [["app-sidenav"]],
      decls: 101,
      vars: 2,
      consts: [["id", "slide-out", 1, "sidenav", "sidenav-fixed"], ["routerLink", "/home"], [1, "material-icons"], [1, "divider"], [1, "no-padding"], ["data-collapsible", "expandable", "materialize", "collapsible", 1, "collapsible", "collapsible-accordion"], [1, "collapsible-header"], [1, "material-icons", "icon"], [1, "collapsible-body"], ["routerLink", "/products"], ["routerLink", "/inventory-add"], [4, "ngIf"], ["routerLink", "/users"], ["routerLink", "/inventory-list"], ["routerLink", "/inventory-edit"], ["routerLink", "/inventory-sell"], ["routerLink", "/sales"], ["routerLink", "/categories"], ["routerLink", "/reports"], [3, "routerLink", 4, "ngIf"], [3, "click"], [1, "clickable"], ["routerLink", "/users-form"], [3, "routerLink"]],
      template: function SidenavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "local_car_wash");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " JF Pe\xE7as Automotivas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "arrow_drop_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cadastrar Produto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Novo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "arrow_upward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Acrescentar ao estoque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "arrow_drop_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Usu\xE1rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SidenavComponent_li_40_Template, 6, 0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "people");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Listas Usu\xE1rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "arrow_drop_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Estoque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Consultar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Dar Baixa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "assessment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Listar Baixas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "bookmarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Categorias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "bar_chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Gerar Relat\xF3rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, SidenavComponent_a_94_Template, 5, 3, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_li_click_95_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "cancel_presentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Sair");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.role_id) == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".sidenav[_ngcontent-%COMP%] {\n  background: #252525;\n  color: white;\n  top: 0px;\n}\n.sidenav[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover:not(:first-child) {\n  background-color: #6C757D;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n  width: 100%;\n}\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: white;\n}\n.sidenav[_ngcontent-%COMP%]   .collapsible-body[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   .sidenav.fixed[_ngcontent-%COMP%]   .collapsible-body[_ngcontent-%COMP%] {\n  background-color: #425257;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n}\n.sidenav[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  height: 5px;\n  background-color: #FF6D00;\n  background-image: linear-gradient(30deg, #ff9d52, #ff6b47);\n}\n.sidenav[_ngcontent-%COMP%]   .collapsible-header[_ngcontent-%COMP%], .sidenav.fixed[_ngcontent-%COMP%]   .collapsible-header[_ngcontent-%COMP%] {\n  padding: 0 26px;\n}\n.collapsible[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 32px;\n  vertical-align: middle;\n  \n  -webkit-transform: rotate(-90deg);\n  \n  transform: rotate(-90deg);\n}\n.collapsible[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  \n  -webkit-transform: rotate(0deg);\n  \n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9DOlxcd2FtcDY0XFx3d3dcXGZyb250LWVuZC1lcnAvc3JjXFxhcHBcXHNpZGVuYXZcXHNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGVuYXYvQzpcXHdhbXA2NFxcd3d3XFxmcm9udC1lbmQtZXJwL3NyY1xcYXBwXFx2YXJzLnNjc3MiLCJzcmMvYXBwL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQzBCUTtFRHpCUixZQUFBO0VBTUEsUUFBQTtBRU5KO0FGRUk7RUFDRSx1QkFBQTtBRUFOO0FGSUk7RUFDSSx5QkNTRztFRFJILDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FFRlI7QUZJSTtFQUNJLFlBQUE7QUVGUjtBRklJOztFQUVJLHlCQ0hJO0VESUosNkJBQUE7RUFDQSxnQ0FBQTtBRUZSO0FGS0k7RUFDSSxXQUFBO0VBQ0EseUJDbEJDO0VEbUJELDBEQUFBO0FFSFI7QUZPQTtFQUNJLGVBQUE7QUVKSjtBRlFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUMrQixTQUFBO0VBQy9CLGlDQUFBO0VBQW1DLDBCQUFBO0VBQ25DLHlCQUFBO0FFSEo7QUZNQTtFQUNpQyxTQUFBO0VBQzdCLCtCQUFBO0VBQWlDLDBCQUFBO0VBQ2pDLHVCQUFBO0FFREoiLCJmaWxlIjoic3JjL2FwcC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdmFyc1wiO1xyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgYmFja2dyb3VuZDogJGJsYWNrLTYwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICBcclxuICAgIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsaTpob3Zlcjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktNjAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgbGkgPiBhIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuY29sbGFwc2libGUtYm9keSwgXHJcbiAgICAuc2lkZW5hdi5maXhlZCAuY29sbGFwc2libGUtYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktMTAwMDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2aWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzBkZWcsICRvcmFuZ2UtMTAwLCRvcmFuZ2UtMjAwKTtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi5zaWRlbmF2IC5jb2xsYXBzaWJsZS1oZWFkZXIsIC5zaWRlbmF2LmZpeGVkIC5jb2xsYXBzaWJsZS1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMCAyNnB4O1xyXG59XHJcblxyXG5cclxuLmNvbGxhcHNpYmxlIGxpIC5pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgLyogSUUgOSAqL1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbn1cclxuXHJcbi5jb2xsYXBzaWJsZSBsaS5hY3RpdmUgLmljb24ge1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyAvKiBJRSA5ICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59XHJcbiIsIiRibHVlOiAjM0U1OUZGO1xyXG4kbGlnaHQtYmx1ZTogIzQyZDdFRTtcclxuJHNreTogIzAwQzNGRjtcclxuJHB1cnBsZTogIzVGNDU5RTtcclxuXHJcbiRncmVlbjogIzNFRTZCMztcclxuJHJlZDogI0YyNjE3NTtcclxuJHllbGxvdzogI0ZGQ0UzODtcclxuJGxlbW9uOiAjRTVEQzAwO1xyXG5cclxuJHBpbms6ICNFNzQ2ODg7XHJcbiRvcmFuZ2U6ICNGRjZEMDA7XHJcbiRvcmFuZ2UtMTAwOiAjZmY5ZDUyO1xyXG4kb3JhbmdlLTIwMDogI2ZmNmI0NztcclxuJG9yYW5nZS0zMDA6ICNmZjc4NGU7XHJcbiRvcmFuZ2Utc2hhZG93OiAjZmY4MTRjO1xyXG5cclxuJGRhcmtlc3Q6ICMxNzFhMmI7XHJcbiRkYXJrLWdyZXk6ICMzNDNBNDA7XHJcbiRncmV5LTEwMDA6ICM0MjUyNTc7XHJcbiRsaWdodC1ncmV5OiAjRjhGOUZEO1xyXG4kZ3JleS02MDA6ICM2Qzc1N0Q7XHJcbiRncmV5LTUwMDogcmdiKDE0NiwgMTUwLCAxNTMpO1xyXG4kZ3JleS00MDA6ICNlMGUwZTA7XHJcbiRncmV5LTMwMDogI0RFRTJFNjtcclxuJGdyZXktMTAwOiAjZjVmNWY1O1xyXG4kZ3JleS0xMDogI0UzRTNFMztcclxuJHdoaXRlOiAjRkZGO1xyXG5cclxuJGJsYWNrLTYwMDogIzI1MjUyNTtcclxuJGJsYWNrLTUwMDogIzJhMmEyYTsiLCIuc2lkZW5hdiB7XG4gIGJhY2tncm91bmQ6ICMyNTI1MjU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdG9wOiAwcHg7XG59XG4uc2lkZW5hdiAubWF0ZXJpYWwtaWNvbnMge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5zaWRlbmF2IGxpOmhvdmVyOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZDNzU3RDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zaWRlbmF2IGxpID4gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zaWRlbmF2IC5jb2xsYXBzaWJsZS1ib2R5LFxuLnNpZGVuYXYgLnNpZGVuYXYuZml4ZWQgLmNvbGxhcHNpYmxlLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI1MjU3O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XG59XG4uc2lkZW5hdiAuZGl2aWRlciB7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2RDAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzBkZWcsICNmZjlkNTIsICNmZjZiNDcpO1xufVxuXG4uc2lkZW5hdiAuY29sbGFwc2libGUtaGVhZGVyLCAuc2lkZW5hdi5maXhlZCAuY29sbGFwc2libGUtaGVhZGVyIHtcbiAgcGFkZGluZzogMCAyNnB4O1xufVxuXG4uY29sbGFwc2libGUgbGkgLmljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAvKiBJRSA5ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbi5jb2xsYXBzaWJsZSBsaS5hY3RpdmUgLmljb24ge1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC8qIElFIDkgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidenav',
          templateUrl: './sidenav.component.html',
          styleUrls: ['./sidenav.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users-form/users-form.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/users-form/users-form.component.ts ***!
    \****************************************************/

  /*! exports provided: UsersFormComponent */

  /***/
  function srcAppUsersFormUsersFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersFormComponent", function () {
      return UsersFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shared_forms_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/forms/users */
    "./src/app/shared/forms/users.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_roles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/services/roles.service */
    "./src/app/shared/services/roles.service.ts");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UsersFormComponent_button_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersFormComponent_button_31_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.clean();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Limpar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UsersFormComponent =
    /*#__PURE__*/
    function () {
      function UsersFormComponent(formBuilder, roleService, service, route) {
        var _this35 = this;

        _classCallCheck(this, UsersFormComponent);

        this.formBuilder = formBuilder;
        this.roleService = roleService;
        this.service = service;
        this.route = route;

        this.getAllRoles = function () {
          _this35.roleService.getAll().subscribe(function (data) {
            return _this35.roles = data;
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
        };

        this.clean = function () {
          return _this35.userForm.reset();
        };
      }

      _createClass(UsersFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          materialize_css__WEBPACK_IMPORTED_MODULE_1__["updateTextFields"]();
          this.getAllRoles();
          this.userForm = this.formBuilder.group(new _shared_forms_users__WEBPACK_IMPORTED_MODULE_2__["UserForm"]());

          if (this.route.snapshot.paramMap.get('id')) {
            this.service.find(this.route.snapshot.paramMap.get('id')).subscribe(function (data) {
              _this36.userForm.patchValue(data);

              materialize_css__WEBPACK_IMPORTED_MODULE_1__["updateTextFields"]();
            }, function (error) {
              return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
                html: error,
                classes: 'fail'
              });
            });
          }

          materialize_css__WEBPACK_IMPORTED_MODULE_1__["updateTextFields"]();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _a, _b, _c;

          if ((_b = (_a = this.userForm) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.id) {
            this.service.update((_c = this.userForm) === null || _c === void 0 ? void 0 : _c.value).subscribe(function (data) {
              return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
                html: 'Atualizado com suceso',
                classes: 'succes'
              });
            }, function (error) {
              return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
                html: error,
                classes: 'fail'
              });
            });
          } else {
            this.service.store(this.userForm.value).subscribe(function (data) {
              return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
                html: 'Criado com sucesso',
                classes: 'succes'
              });
            }, function (error) {
              return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
                html: error,
                classes: 'fail'
              });
            });
          }
        }
      }]);

      return UsersFormComponent;
    }();

    UsersFormComponent.ɵfac = function UsersFormComponent_Factory(t) {
      return new (t || UsersFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_roles_service__WEBPACK_IMPORTED_MODULE_4__["RolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    UsersFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersFormComponent,
      selectors: [["app-users-form"]],
      decls: 35,
      vars: 5,
      consts: [["autocomplete", "off", "autocomplete", "false", 1, "col", "s8", "card-panel", 3, "formGroup"], [1, "row"], [1, "col", "s12", "center-align"], [1, "input-field", "col", "m4", "s6"], ["type", "text", "placeholder", "Nome", "formControlName", "name"], ["for", "name"], ["type", "text", "placeholder", "CPF", "formControlName", "cpf", "name", "cpf", "mask", "000.000.000-00"], ["for", "cpf"], [1, "input-field", "col", "m4", "s12"], ["type", "text", "placeholder", "Usu\xE1rio para login", "formControlName", "user", "name", "user"], ["for", "user"], ["type", "email", "placeholder", "Email", "formControlName", "email"], ["for", "email"], ["type", "password", "placeholder", "Senha", "formControlName", "password", "name", "password"], ["for", "password"], ["bindLabel", "name", "bindValue", "id", "formControlName", "role_id", "placeholder", "Cargos", 1, "custom", 3, "items"], [1, "col", "m3", "s6", "push-m3"], ["class", "btn red", 3, "click", 4, "ngIf"], [1, "btn", "blue", "darken-1", 3, "disabled", "click"], [1, "btn", "red", 3, "click"]],
      template: function UsersFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cadastrar Usu\xE1rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CPF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Usu\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "ng-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UsersFormComponent_button_31_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersFormComponent_Template_button_click_33_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.roles == null ? null : ctx.roles.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.userForm == null ? null : ctx.userForm.value == null ? null : ctx.userForm.value.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.userForm == null ? null : ctx.userForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.userForm == null ? null : ctx.userForm.value == null ? null : ctx.userForm.value.id) ? "Editar" : "Cadastrar", " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], ngx_mask__WEBPACK_IMPORTED_MODULE_7__["MaskDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzLWZvcm0vdXNlcnMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users-form',
          templateUrl: './users-form.component.html',
          styleUrls: ['./users-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _shared_services_roles_service__WEBPACK_IMPORTED_MODULE_4__["RolesService"]
        }, {
          type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! materialize-css */
    "./node_modules/materialize-css/dist/js/materialize.js");
    /* harmony import */


    var materialize_css__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/services/authentication.service */
    "./src/app/shared/services/authentication.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function UsersComponent_th_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_th_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Excluir");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_tr_18_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "//users/", user_r15.id, "");
      }
    }

    function UsersComponent_tr_18_td_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_18_td_10_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var user_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.delete(user_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UsersComponent_tr_18_td_9_Template, 4, 1, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UsersComponent_tr_18_td_10_Template, 4, 0, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r15 = ctx.$implicit;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r15 == null ? null : user_r15.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r15 == null ? null : user_r15.user);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r15 == null ? null : user_r15.cpf);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r15 == null ? null : user_r15.role.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.authUser.role_id === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.authUser.role_id === 1);
      }
    }

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent(service, authService) {
        var _this37 = this;

        _classCallCheck(this, UsersComponent);

        this.service = service;
        this.authService = authService;

        this.getUsers = function () {
          return _this37.service.getAll().subscribe(function (data) {
            return _this37.usersInfos = data;
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
        };

        this.delete = function (user) {
          var _a;

          _this37.service.delete((_a = user) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (data) {
            return _this37.getUsers();
          }, function (error) {
            return materialize_css__WEBPACK_IMPORTED_MODULE_1__["toast"]({
              html: error,
              classes: 'fail'
            });
          });
        };
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authUser = this.authService.currentUserValue;
          this.getUsers();
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 19,
      vars: 3,
      consts: [[1, "row"], [1, "col", "s12"], [2, "text-align", "center"], [1, "striped", "responsive-table"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "orange-text", 3, "routerLink"], [1, "material-icons"], [1, "red-text", "clickable", 3, "click"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Usu\xE1rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Usu\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CPF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tipo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UsersComponent_th_15_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UsersComponent_th_16_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UsersComponent_tr_18_Template, 11, 6, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authUser.role_id === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authUser.role_id === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersInfos == null ? null : ctx.usersInfos.data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users',
          templateUrl: './users.component.html',
          styleUrls: ['./users.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      }, null);
    })();
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
      apiUrl: "http://localhost:8080",
      getInventoryDownUrl: "http://localhost:8080/reports/pdf/get-inventory-down-products",
      downloadInventoryDownUrl: "http://localhost:8080/reports/pdf/download-inventory-down-products"
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
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
    /*! C:\wamp64\www\front-end-erp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map