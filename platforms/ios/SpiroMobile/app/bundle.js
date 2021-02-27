require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/grey.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/grey.css"));
global.registerModule("@nativescript/theme/css/grey.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/grey.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. You can learn more about the \nNativeScript core theme at https://github.com/nativescript/theme\nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"'~@nativescript/theme/css/grey.css'"},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "},{"type":"comment","comment":"\nThe following CSS rule changes the font size of all Buttons that have the\n\"-primary\" class modifier.\n"},{"type":"rule","selectors":[".page"],"declarations":[{"type":"declaration","property":"background-color","value":"#272B38"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"padding","value":"50px"},{"type":"declaration","property":"font-size","value":"18px"}]},{"type":"rule","selectors":["TextField","TextView","Label",".h2"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":["Button.-primary"],"declarations":[{"type":"declaration","property":"font-size","value":"18px"}]},{"type":"rule","selectors":[".far"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Free\", \"fa-regular-400\", monospace"},{"type":"declaration","property":"font-weight","value":"400"}]},{"type":"rule","selectors":[".fab"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Free\", \"fa-brands-400\", fantasy"},{"type":"declaration","property":"font-weight","value":"400"}]},{"type":"rule","selectors":[".fas"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Free\", \"fa-solid-900\", fantasy"},{"type":"declaration","property":"font-weight","value":"900"}]},{"type":"rule","selectors":[".orange"],"declarations":[{"type":"declaration","property":"color","value":"orange"},{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".purple"],"declarations":[{"type":"declaration","property":"color","value":"purple"},{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".white"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".card-button"],"declarations":[{"type":"declaration","property":"android-elevation","value":"4"},{"type":"declaration","property":"height","value":"45px"},{"type":"declaration","property":"elevation","value":"above"},{"type":"declaration","property":"background-color","value":"orange"},{"type":"declaration","property":"border-radius","value":"14px"},{"type":"declaration","property":"border-width","value":"1px"},{"type":"declaration","property":"color","value":"#272B38"},{"type":"declaration","property":"font-size","value":"18px"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"margin-top","value":"40px"},{"type":"declaration","property":"float","value":"left"},{"type":"declaration","property":"alignment","value":"left"},{"type":"declaration","property":"width","value":"250px"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/@core/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/index.js");





class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://127.0.0.1:8000/';
        this.baseCardUrl = `${this.baseUrl}api/cards/`;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
    }
    getCards() {
        return this.httpClient.get(this.baseCardUrl, { headers: this.getAuthHeaders() });
    }
    getCard(id) {
        return this.httpClient.get(`${this.baseCardUrl}${id}/`, { headers: this.getAuthHeaders() });
    }
    createCard(title, description) {
        const body = JSON.stringify({ title, description });
        return this.httpClient.post(`${this.baseCardUrl}`, body, { headers: this.getAuthHeaders() });
    }
    updateCard(id, title, description) {
        const body = JSON.stringify({ title, description });
        return this.httpClient.put(`${this.baseCardUrl}${id}/`, body, { headers: this.getAuthHeaders() });
    }
    deleteCard(id) {
        return this.httpClient.delete(`${this.baseCardUrl}${id}/`, { headers: this.getAuthHeaders() });
    }
    rateCard(rate, cardId) {
        const body = JSON.stringify({ stars: rate });
        return this.httpClient.post(`${this.baseCardUrl}${cardId}/rate_card/`, body, { headers: this.getAuthHeaders() });
    }
    loginUser(authData) {
        const body = JSON.stringify(authData);
        return this.httpClient.post(`${this.baseUrl}auth/`, body, { headers: this.headers });
    }
    registerUser(authData) {
        const body = JSON.stringify(authData);
        return this.httpClient.post(`${this.baseUrl}api/users/`, body, { headers: this.headers });
    }
    getAuthHeaders() {
        const token = Object(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_2__["getString"])("mr-token");
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _pages_item_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/pages/item/items.component.ts");
/* harmony import */ var _pages_item_item_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/pages/item/item-detail.component.ts");
/* harmony import */ var _pages_cards_card_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/pages/cards/card-detail.component.ts");
/* harmony import */ var _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/pages/cards/cards.component.ts");
/* harmony import */ var _pages_card_form_card_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/pages/card-form/card-form.component.ts");
/* harmony import */ var _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/pages/auth/auth.component.ts");










const routes = [
    { path: "", redirectTo: "/auth", pathMatch: "full" },
    { path: "auth", component: _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"] },
    { path: "items", component: _pages_item_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"] },
    { path: "item/:id", component: _pages_item_item_detail_component__WEBPACK_IMPORTED_MODULE_3__["ItemDetailComponent"] },
    { path: "cards", component: _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"] },
    { path: "card/:id", component: _pages_cards_card_detail_component__WEBPACK_IMPORTED_MODULE_4__["CardDetailComponent"] },
    { path: "edit/:id", component: _pages_card_form_card_form_component__WEBPACK_IMPORTED_MODULE_6__["CardFormComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]], exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
                exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ns-app"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "page-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["PageRouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ns-app",
                templateUrl: "./app.component.html"
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _pages_item_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/pages/item/items.component.ts");
/* harmony import */ var _pages_item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/pages/item/item-detail.component.ts");
/* harmony import */ var _pages_cards_card_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/pages/cards/card-detail.component.ts");
/* harmony import */ var _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/pages/cards/cards.component.ts");
/* harmony import */ var _pages_card_form_card_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/pages/card-form/card-form.component.ts");
/* harmony import */ var _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/pages/auth/auth.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"],
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_item_items_component__WEBPACK_IMPORTED_MODULE_4__["ItemsComponent"],
        _pages_item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__["ItemDetailComponent"],
        _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_7__["CardsComponent"],
        _pages_cards_card_detail_component__WEBPACK_IMPORTED_MODULE_6__["CardDetailComponent"],
        _pages_card_form_card_form_component__WEBPACK_IMPORTED_MODULE_8__["CardFormComponent"],
        _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"]], imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"],
        _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptHttpClientModule"],
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptFormsModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_item_items_component__WEBPACK_IMPORTED_MODULE_4__["ItemsComponent"],
                    _pages_item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__["ItemDetailComponent"],
                    _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_7__["CardsComponent"],
                    _pages_cards_card_detail_component__WEBPACK_IMPORTED_MODULE_6__["CardDetailComponent"],
                    _pages_card_form_card_form_component__WEBPACK_IMPORTED_MODULE_8__["CardFormComponent"],
                    _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"]
                ],
                providers: [],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/pages/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/@core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function AuthComponent_label_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function AuthComponent_label_8_Template_label_tap_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.registerMode = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_label_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function AuthComponent_label_9_Template_label_tap_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.registerMode = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// import { SnackBar } from 'nativescript-material-snackbar';
class AuthComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    ngOnInit() {
        this.registerMode = false;
        const myToken = Object(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__["getString"])("mr-token");
        if (myToken) {
            this.router.navigate(['/items']);
        }
        else {
            this.auth = { username: "", password: "" };
        }
    }
    submitForm() {
        if (this.registerMode) {
            this.apiService.registerUser(this.auth).subscribe((results) => {
                this.loginFunction();
            }, err => {
                console.log(err);
                // const snackbar = new SnackBar();
                // snackbar.simple(`Can't register`);
            });
        }
        else {
            this.loginFunction();
        }
    }
    loginFunction() {
        this.apiService.loginUser(this.auth).subscribe((results) => {
            Object(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"])("mr-token", results.token);
            this.router.navigate(['/items']);
        }, err => {
            console.log(err);
            // const snackbar = new SnackBar();
            // snackbar.simple(err.error.non_field_errors[0]);
        });
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["ns-auth"]], decls: 10, vars: 5, consts: [["title", "AMP'd In"], ["visibility", "collapsed"], [1, "page"], ["text", "Username", 1, "h2"], ["autocapitalizationType", "none", 3, "ngModel", "ngModelChange"], ["text", "Password", 1, "h2"], ["secure", "true", "autocapitalizationType", "none", 3, "ngModel", "ngModelChange"], [1, "-primary", "-rounded-lg", 3, "text", "tap"], ["text", "Don't have an account yet? Register here", 3, "tap", 4, "ngIf"], ["text", "You have an account? Login here", 3, "tap", 4, "ngIf"], ["text", "Don't have an account yet? Register here", 3, "tap"], ["text", "You have an account? Login here", 3, "tap"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "StackLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "TextField", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthComponent_Template_TextField_ngModelChange_4_listener($event) { return ctx.auth.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "Label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "TextField", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthComponent_Template_TextField_ngModelChange_6_listener($event) { return ctx.auth.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "Button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function AuthComponent_Template_Button_tap_7_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AuthComponent_label_8_Template, 1, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AuthComponent_label_9_Template, 1, 0, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.auth.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.auth.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", ctx.registerMode ? "Register" : "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.registerMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerMode);
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_4__["ActionBarComponent"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__["NavigationButtonDirective"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@import url(~@nativescript/theme/css/core.css);\n@import url(~@nativescript/theme/css/grey.css);\n.fas[_ngcontent-%COMP%] {\n  font-family: \"Font Awesome 5 Free\", \"fa-solid-900\";\n  font-weight: bold; }\n\n.far[_ngcontent-%COMP%] {\n  font-family: \"Font Awesome 5 Free\", \"fa-regular-400\", serif;\n  font-weight: 400; }\n\n.fab[_ngcontent-%COMP%] {\n  font-family: \"Font Awesome 5 Free\", \"fa-brands-400\", serif;\n  font-weight: 400; }\n\n.page[_ngcontent-%COMP%] {\n  background-color: #272B38;\n  color: white;\n  padding: 20px;\n  font-size: 18px; }\n\n.orange[_ngcontent-%COMP%] {\n  color: orange;\n  font-weight: bold; }\n\n.purple[_ngcontent-%COMP%] {\n  color: purple; }\n\n.white[_ngcontent-%COMP%] {\n  color: white; }\n\n.page[_ngcontent-%COMP%] {\n  background-color: #272B38;\n  color: white;\n  padding: 20px;\n  font-size: 18px; }\n\n.my-button[_ngcontent-%COMP%] {\n  android-elevation: 4;\n  background-color: red;\n  border-radius: 20px;\n  border-width: 1px;\n  color: whitesmoke;\n  font-size: 18px;\n  font-weight: bold; }\n\n.textbox[_ngcontent-%COMP%] {\n  background-color: #9ea7b6;\n  color: #272B38;\n  width: 95%;\n  height: 50px;\n  margin-right: 45px;\n  android-elevation: 4;\n  border-radius: 10px;\n  border-width: 1px;\n  font-size: 18px;\n  font-weight: bold; }\n\n.title[_ngcontent-%COMP%] {\n  width: 600px; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ns-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss'],
                /*duleId: module.i*/
            }]
    }], function () { return [{ type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./app/pages/card-form/card-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFormComponent", function() { return CardFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/@core/services/api.service.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function CardFormComponent_StackLayout_3_Button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "Button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function CardFormComponent_StackLayout_3_Button_7_Template_Button_tap_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.removeCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardFormComponent_StackLayout_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "StackLayout", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "TextField", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardFormComponent_StackLayout_3_Template_TextField_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.card.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "Label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "TextView", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardFormComponent_StackLayout_3_Template_TextView_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.card.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "Button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function CardFormComponent_StackLayout_3_Template_Button_tap_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.saveForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardFormComponent_StackLayout_3_Button_7_Template, 1, 0, "Button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.card.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.card.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", ctx_r0.card.id ? "Update" : "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.card.id);
} }
``;
class CardFormComponent {
    constructor(apiService, route, router) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        const id = +this.route.snapshot.params.id;
        if (id >= 0) {
            this.getDetails(id);
        }
        else {
            // @ts-ignore
            this.card = { title: "", description: '' };
        }
    }
    getDetails(id) {
        this.apiService.getCard(id).subscribe((data) => {
            this.card = data;
            this.cardTitle = this.card.title;
        }, err => console.log(err));
    }
    saveForm() {
        if (this.card.id) {
            this.apiService.updateCard(this.card.id, this.card.title, this.card.description).subscribe(result => this.router.navigate(['/items']), err => console.log(err));
        }
        else {
            this.apiService.createCard(this.card.title, this.card.description).subscribe(result => this.router.navigate(['/items']), err => console.log(err));
        }
    }
    editClicked() {
        //this.router.navigate(['/edit', this.card.id])
    }
    goBack() {
        // this.routerExtension.backToPreviousPage();
    }
    removeCard() {
        this.apiService.deleteCard(this.card.id).subscribe(result => this.router.navigate(['/items']), err => console.log(err));
    }
}
CardFormComponent.ɵfac = function CardFormComponent_Factory(t) { return new (t || CardFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CardFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardFormComponent, selectors: [["ns-card-form"]], decls: 4, vars: 2, consts: [[1, "action-bar", 3, "title"], ["icon", "font://\uF104", "ios.position", "left", 1, "fas", "h2", 3, "tap"], ["icon", "font://\uF0C7", "ios.position", "right", 1, "fas", "h2", 3, "tap"], ["class", "page", 4, "ngIf"], [1, "page"], ["text", "Title", 1, "h2"], [1, "h2", "textbox", "title", 3, "ngModel", "ngModelChange"], ["text", "Description", 1, "h2"], [1, "h2", "textbox", 3, "ngModel", "ngModelChange"], ["id", "button1", 1, "-primary", "-rounded-lg", "my-other-button", 3, "text", "tap"], ["text", "Delete", "class", "my-button", "id", "button2", 3, "tap", 4, "ngIf"], ["text", "Delete", "id", "button2", 1, "my-button", 3, "tap"]], template: function CardFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function CardFormComponent_Template_NavigationButton_tap_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ActionItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function CardFormComponent_Template_ActionItem_tap_2_listener() { return ctx.saveForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardFormComponent_StackLayout_3_Template, 8, 4, "StackLayout", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.cardTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card);
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["ActionBarComponent"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["NavigationButtonDirective"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["ActionItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ns-card-form',
                templateUrl: './card-form.component.html',
                /*duleId: module.i*/
            }]
    }], function () { return [{ type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./app/pages/cards/card-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailComponent", function() { return CardDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/@core/services/api.service.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");







class CardDetailComponent {
    constructor(apiService, route) {
        this.apiService = apiService;
        this.route = route;
    }
    ngOnInit() {
        const id = +this.route.snapshot.params.id;
        // this.card = this.apiService.getCard(id);
    }
}
CardDetailComponent.ɵfac = function CardDetailComponent_Factory(t) { return new (t || CardDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
CardDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardDetailComponent, selectors: [["ns-details"]], decls: 6, vars: 3, consts: [["title", "Details"], ["flexDirection", "column"], [1, "m-15"], [1, "h2", 3, "textContent"], [1, "h4", "m-15", 3, "textContent"]], template: function CardDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "FlexboxLayout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "FlexboxLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textContent", ctx.card.id + ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textContent", ctx.card.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textContent", ctx.card.description);
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["ActionBarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ns-details",
                templateUrl: "./card-detail.component.html",
            }]
    }], function () { return [{ type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./app/pages/cards/cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/@core/services/api.service.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");





const _c0 = function (a1) { return ["/item", a1]; };
function CardsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "StackLayout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.card;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, card_r1.id))("text", card_r1.title);
} }
class CardsComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() {
        // @ts-ignore
        // this.cards = this.apiService.getCards();
        this.apiService.getCards().subscribe((data) => {
            this.cards = data;
        }, err => console.log(err));
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["ns-cards"]], decls: 4, vars: 1, consts: [["title", "My App"], [3, "cards"], [3, "nsRouterLink", "text"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "GridLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ListView", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardsComponent_ng_template_3_Template, 2, 4, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards", ctx.cards);
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["ActionBarComponent"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["ListViewComponent"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["NSRouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ns-cards",
                templateUrl: "./cards.component.html"
            }]
    }], function () { return [{ type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./app/pages/item/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goBack", function() { return goBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSettings", function() { return openSettings; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/@core/services/api.service.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _nativescript_core_ui_frame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/frame/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = function (a0, a1) { return { "fas purple": a0, "far white": a1 }; };
function ItemDetailComponent_Label_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "Label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function ItemDetailComponent_Label_15_Template_Label_tap_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const rate_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setHightlight(rate_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r0.highlight >= rate_r1, ctx_r0.highlight < rate_r1));
} }
const _c1 = function (a0) { return { "orange": a0 }; };
const _c2 = function () { return [1, 2, 3, 4, 5]; };
class ItemDetailComponent {
    constructor(apiService, route, router, routerExtension) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.routerExtension = routerExtension;
    }
    ngOnInit() {
        this.highlight = 0;
        const id = +this.route.snapshot.params.id;
        this.getDetails(id);
    }
    setHightlight(rate) {
        this.highlight = rate;
    }
    rateClicked() {
        this.apiService.rateCard(this.highlight, this.card.id).subscribe(result => this.getDetails(this.card.id), err => console.log(err));
    }
    getDetails(id) {
        this.apiService.getCard(id).subscribe((data) => {
            this.card = data;
        }, err => console.log(err));
    }
    editClicked() {
        this.router.navigate(['/edit', this.card.id]);
    }
    goBack() {
        this.routerExtension.backToPreviousPage();
    }
}
ItemDetailComponent.ɵfac = function ItemDetailComponent_Factory(t) { return new (t || ItemDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"])); };
ItemDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemDetailComponent, selectors: [["ns-details"]], decls: 17, vars: 20, consts: [[1, "action-bar", 3, "title"], ["icon", "font://\uF104", "ios.position", "left", 1, "fas", "h2", 3, "tap"], ["icon", "font://\uF044", "ios.position", "right", 1, "fas", "h2", 3, "tap"], [1, "page"], ["orientation", "horizontal", 1, "body", "pull-left"], ["text", "\uF005", 1, "fas", "h2", 3, "ngClass"], [1, "h2", 3, "text"], [1, "h2", "desc", 3, "text"], [1, "body", "pull-left"], ["text", "Rate it !!!", 1, "h2"], ["orientation", "horizontal"], ["text", "\uF005", "class", "h1 pull-left b-stars", "style", "font-weight: bold", 3, "ngClass", "tap", 4, "ngFor", "ngForOf"], ["text", "Rate", 1, "card-button", "h2", 3, "tap"], ["text", "\uF005", 1, "h1", "pull-left", "b-stars", 2, "font-weight", "bold", 3, "ngClass", "tap"]], template: function ItemDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function ItemDetailComponent_Template_NavigationButton_tap_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ActionItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function ItemDetailComponent_Template_ActionItem_tap_2_listener() { return ctx.editClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "StackLayout", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "StackLayout", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "Label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "Label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "Label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "Label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "Label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "Label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "Label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "StackLayout", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "Label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "StackLayout", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ItemDetailComponent_Label_15_Template, 1, 4, "Label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "Button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function ItemDetailComponent_Template_Button_tap_16_listener() { return ctx.rateClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.card == null ? null : ctx.card.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, (ctx.card == null ? null : ctx.card.avg_rating) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, (ctx.card == null ? null : ctx.card.avg_rating) > 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, (ctx.card == null ? null : ctx.card.avg_rating) > 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, (ctx.card == null ? null : ctx.card.avg_rating) > 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, (ctx.card == null ? null : ctx.card.avg_rating) > 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("text", "(", ctx.card == null ? null : ctx.card.no_of_ratings, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.card == null ? null : ctx.card.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["ActionBarComponent"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["NavigationButtonDirective"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["ActionItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ns-details",
                templateUrl: "./item-detail.component.html"
            }]
    }], function () { return [{ type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }]; }, null); })();
function goBack() {
    _nativescript_core_ui_frame__WEBPACK_IMPORTED_MODULE_4__["Frame"].topmost().goBack();
}
function openSettings() {
    // implement the custom logic
}


/***/ }),

/***/ "./app/pages/item/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/@core/services/api.service.ts");
/* harmony import */ var _nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/application-settings/index.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");








const _c0 = function (a1) { return ["/item", a1]; };
function ItemsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "StackLayout", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1.id))("text", item_r1.title);
} }
class ItemsComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    ngOnInit() {
        const myToken = Object(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__["getString"])("mr-token");
        if (myToken) {
            this.apiService.getCards().subscribe((data) => {
                this.cards = data;
            }, err => console.log(err));
        }
        else {
            this.router.navigate(['/auth']);
        }
    }
    newCard() {
        this.router.navigate(['/edit', -1]);
    }
    logout() {
        Object(_nativescript_core_application_settings__WEBPACK_IMPORTED_MODULE_3__["remove"])("mr-token");
        this.router.navigate(['/auth']);
    }
}
ItemsComponent.ɵfac = function ItemsComponent_Factory(t) { return new (t || ItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemsComponent, selectors: [["ns-items"]], decls: 7, vars: 1, consts: [["title", "Spirovanni Mobile Application"], ["visibility", "collapsed"], ["icon", "font://\uF2F5", "ios.position", "right", 1, "fas", "h2", 3, "tap"], [1, "page"], [1, "list", 3, "items"], ["text", "New Card", 1, "card-button", 3, "tap"], [1, "cards-l"], [3, "nsRouterLink", "text"]], template: function ItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "NavigationButton", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ActionItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function ItemsComponent_Template_ActionItem_tap_2_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "StackLayout", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ListView", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ItemsComponent_ng_template_5_Template, 2, 4, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "Button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function ItemsComponent_Template_Button_tap_6_listener() { return ctx.newCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.cards);
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_4__["ActionBarComponent"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__["NavigationButtonDirective"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__["ActionItemDirective"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__["ListViewComponent"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_4__["NSRouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ns-items",
                templateUrl: "./items.component.html"
            }]
    }], function () { return [{ type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.module.ts");

            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "~/package.json":
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9AY29yZS9zZXJ2aWNlcy9hcGkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL2F1dGgvYXV0aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL2F1dGgvYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvY2FyZC1mb3JtL2NhcmQtZm9ybS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL2NhcmQtZm9ybS9jYXJkLWZvcm0uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL2NhcmRzL2NhcmQtZGV0YWlsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvY2FyZHMvY2FyZC1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL2NhcmRzL2NhcmRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvY2FyZHMvY2FyZHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9wYWdlcy9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wYWdlcy9pdGVtL2l0ZW1zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvaXRlbS9pdGVtcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIn4vcGFja2FnZS5qc29uXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7QUNaQSwrR0FBaUUsbUJBQU8sQ0FBQyxpSUFBK0Y7QUFDeEssZ0VBQWdFLG1CQUFPLENBQUMsaUlBQStGO0FBQ3ZLLGlFQUFpRSxtQkFBTyxDQUFDLGlJQUErRjtBQUN4SyxnRUFBZ0UsbUJBQU8sQ0FBQyxpSUFBK0YsR0FBRyxrQkFBa0Isa0NBQWtDLFVBQVUsa2pCQUFrakIsRUFBRSxpRUFBaUUsRUFBRSwrREFBK0QsRUFBRSwySkFBMkosRUFBRSx5SUFBeUksRUFBRSxxREFBcUQscUVBQXFFLEVBQUUsd0RBQXdELEVBQUUseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSxrRkFBa0Ysd0RBQXdELEVBQUUsRUFBRSwrREFBK0QsMkRBQTJELEVBQUUsRUFBRSxvREFBb0QsK0dBQStHLEVBQUUsNERBQTRELEVBQUUsRUFBRSxvREFBb0QsNEdBQTRHLEVBQUUsNERBQTRELEVBQUUsRUFBRSxvREFBb0QsMkdBQTJHLEVBQUUsNERBQTRELEVBQUUsRUFBRSx1REFBdUQseURBQXlELEVBQUUsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQseURBQXlELEVBQUUsNkRBQTZELEVBQUUsRUFBRSxzREFBc0Qsd0RBQXdELEVBQUUsNkRBQTZELEVBQUUsRUFBRSw0REFBNEQsZ0VBQWdFLEVBQUUsd0RBQXdELEVBQUUsNERBQTRELEVBQUUsb0VBQW9FLEVBQUUsK0RBQStELEVBQUUsNkRBQTZELEVBQUUsMERBQTBELEVBQUUsMkRBQTJELEVBQUUsNkRBQTZELEVBQUUsNERBQTRELEVBQUUsdURBQXVE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ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ncmV5LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2dyZXkuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2dyZXkuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZ3JleS5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSBcXG5OYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbmF0aXZlc2NyaXB0L3RoZW1lXFxuVGhlIGltcG9ydGVkIENTUyBydWxlcyBtdXN0IHByZWNlZGUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzLlxcblwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZ3JleS5jc3MnXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXG5UaGUgZm9sbG93aW5nIENTUyBydWxlIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiBhbGwgQnV0dG9ucyB0aGF0IGhhdmUgdGhlXFxuXFxcIi1wcmltYXJ5XFxcIiBjbGFzcyBtb2RpZmllci5cXG5cIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnBhZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI3MkIzOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiNTBweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4cHhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0RmllbGRcIixcIlRleHRWaWV3XCIsXCJMYWJlbFwiLFwiLmgyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvbi4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4cHhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCJcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCIsIFxcXCJmYS1yZWd1bGFyLTQwMFxcXCIsIG1vbm9zcGFjZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhYlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiLCBcXFwiZmEtYnJhbmRzLTQwMFxcXCIsIGZhbnRhc3lcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjQwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgXFxcImZhLXNvbGlkLTkwMFxcXCIsIGZhbnRhc3lcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjkwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5vcmFuZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIm9yYW5nZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wdXJwbGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInB1cnBsZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi53aGl0ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuY2FyZC1idXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmRyb2lkLWVsZXZhdGlvblwiLFwidmFsdWVcIjpcIjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI0NXB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZWxldmF0aW9uXCIsXCJ2YWx1ZVwiOlwiYWJvdmVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwib3JhbmdlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjE0cHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMyNzJCMzhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOHB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjQwcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmbG9hdFwiLFwidmFsdWVcIjpcImxlZnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbGlnbm1lbnRcIixcInZhbHVlXCI6XCJsZWZ0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIyNTBweFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi9tb2RlbHMvQ2FyZCc7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnLi4vbW9kZWxzL0F1dGgnO1xuaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcbiAgYmFzZVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvJztcbiAgYmFzZUNhcmRVcmwgPSBgJHt0aGlzLmJhc2VVcmx9YXBpL2NhcmRzL2A7XG4gIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgfSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCxcbiAgICAvLyBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2VcbiAgKSB7IH1cbiAgZ2V0Q2FyZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8Q2FyZFtdPih0aGlzLmJhc2VDYXJkVXJsLCB7aGVhZGVyczogdGhpcy5nZXRBdXRoSGVhZGVycygpfSk7XG4gIH1cbiAgZ2V0Q2FyZChpZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8Q2FyZD4oYCR7dGhpcy5iYXNlQ2FyZFVybH0ke2lkfS9gLCB7aGVhZGVyczogdGhpcy5nZXRBdXRoSGVhZGVycygpfSk7XG4gIH1cbiAgY3JlYXRlQ2FyZCh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHt0aXRsZSwgZGVzY3JpcHRpb259KTtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3QoYCR7dGhpcy5iYXNlQ2FyZFVybH1gLCBib2R5LCB7aGVhZGVyczogdGhpcy5nZXRBdXRoSGVhZGVycygpfSk7XG4gIH1cbiAgdXBkYXRlQ2FyZChpZDogbnVtYmVyLCB0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHt0aXRsZSwgZGVzY3JpcHRpb259KTtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnB1dChgJHt0aGlzLmJhc2VDYXJkVXJsfSR7aWR9L2AsIGJvZHksIHtoZWFkZXJzOiB0aGlzLmdldEF1dGhIZWFkZXJzKCl9KTtcbiAgfVxuICBkZWxldGVDYXJkKGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmRlbGV0ZShgJHt0aGlzLmJhc2VDYXJkVXJsfSR7aWR9L2AsIHtoZWFkZXJzOiB0aGlzLmdldEF1dGhIZWFkZXJzKCl9KTtcbiAgfVxuICByYXRlQ2FyZChyYXRlOiBudW1iZXIsIGNhcmRJZDogbnVtYmVyKSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtzdGFyczogcmF0ZX0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdChgJHt0aGlzLmJhc2VDYXJkVXJsfSR7Y2FyZElkfS9yYXRlX2NhcmQvYCwgYm9keSwge2hlYWRlcnM6IHRoaXMuZ2V0QXV0aEhlYWRlcnMoKX0pO1xuICB9XG4gIGxvZ2luVXNlcihhdXRoRGF0YTogQXV0aCkge1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShhdXRoRGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuYmFzZVVybH1hdXRoL2AsIGJvZHksIHtoZWFkZXJzOiB0aGlzLmhlYWRlcnN9KTtcbiAgfVxuXG4gIHJlZ2lzdGVyVXNlcihhdXRoRGF0YSkge1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShhdXRoRGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuYmFzZVVybH1hcGkvdXNlcnMvYCwgYm9keSwge2hlYWRlcnM6IHRoaXMuaGVhZGVyc30pO1xuICB9XG4gIGdldEF1dGhIZWFkZXJzKCkge1xuICAgIGNvbnN0IHRva2VuID0gZ2V0U3RyaW5nKFwibXItdG9rZW5cIik7XG4gICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgQXV0aG9yaXphdGlvbjogYFRva2VuICR7dG9rZW59YFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZERldGFpbENvbXBvbmVudCAgfSBmcm9tIFwiLi9wYWdlcy9jYXJkcy9jYXJkLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRzQ29tcG9uZW50ICB9IGZyb20gXCIuL3BhZ2VzL2NhcmRzL2NhcmRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9jYXJkLWZvcm0vY2FyZC1mb3JtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2F1dGgvYXV0aC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9hdXRoXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiYXV0aFwiLCBjb21wb25lbnQ6IEF1dGhDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJpdGVtLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiY2FyZHNcIiwgY29tcG9uZW50OiBDYXJkc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJjYXJkLzppZFwiLCBjb21wb25lbnQ6IENhcmREZXRhaWxDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiZWRpdC86aWRcIiwgY29tcG9uZW50OiBDYXJkRm9ybUNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XG4iLCI8R3JpZExheW91dD5cbiAgPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cbjwvR3JpZExheW91dD5cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlLCBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmREZXRhaWxDb21wb25lbnQgIH0gZnJvbSBcIi4vcGFnZXMvY2FyZHMvY2FyZC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2NhcmRzL2NhcmRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9jYXJkLWZvcm0vY2FyZC1mb3JtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2F1dGgvYXV0aC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBDYXJkc0NvbXBvbmVudCxcbiAgICAgICAgQ2FyZERldGFpbENvbXBvbmVudCxcbiAgICAgICAgQ2FyZEZvcm1Db21wb25lbnQsXG4gICAgICAgIEF1dGhDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCIuLi8uLi9AY29yZS9tb2RlbHMvQXV0aFwiO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL0Bjb3JlL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG4vLyBpbXBvcnQgeyBTbmFja0JhciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1tYXRlcmlhbC1zbmFja2Jhcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtYXV0aCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2F1dGguY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2F1dGguY29tcG9uZW50LnNjc3MnXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyByZWdpc3Rlck1vZGU6IGJvb2xlYW47XG4gICAgcHVibGljIGF1dGg6IEF1dGg7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBteVRva2VuID0gZ2V0U3RyaW5nKFwibXItdG9rZW5cIik7XG4gICAgICAgIGlmKG15VG9rZW4pe1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaXRlbXMnXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IHt1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCJ9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHN1Ym1pdEZvcm0oKXtcbiAgICAgICAgaWYodGhpcy5yZWdpc3Rlck1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5yZWdpc3RlclVzZXIodGhpcy5hdXRoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRnVuY3Rpb24oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3Qgc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc25hY2tiYXIuc2ltcGxlKGBDYW4ndCByZWdpc3RlcmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5GdW5jdGlvbigpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgbG9naW5GdW5jdGlvbigpe1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2UubG9naW5Vc2VyKHRoaXMuYXV0aCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN0cmluZyhcIm1yLXRva2VuXCIsIHJlc3VsdHMudG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2l0ZW1zJ10pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKTtcbiAgICAgICAgICAgICAgICAvLyBzbmFja2Jhci5zaW1wbGUoZXJyLmVycm9yLm5vbl9maWVsZF9lcnJvcnNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxufVxuIiwiPEFjdGlvbkJhciB0aXRsZT1cIkFNUCdkIEluXCI+XG4gICAgPE5hdmlnYXRpb25CdXR0b24gdmlzaWJpbGl0eT1cImNvbGxhcHNlZFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbjwvQWN0aW9uQmFyPlxuPFN0YWNrTGF5b3V0IGNsYXNzPVwicGFnZVwiPlxuICAgIDxMYWJlbCBjbGFzcz1cImgyXCIgdGV4dD1cIlVzZXJuYW1lXCI+PC9MYWJlbD5cbiAgICA8VGV4dEZpZWxkIFsobmdNb2RlbCldPVwiYXV0aC51c2VybmFtZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XG4gICAgPExhYmVsIGNsYXNzPVwiaDJcIiB0ZXh0PVwiUGFzc3dvcmRcIj48L0xhYmVsPlxuICAgIDxUZXh0RmllbGQgWyhuZ01vZGVsKV09XCJhdXRoLnBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiPjwvVGV4dEZpZWxkPlxuICAgIDxCdXR0b24gdGV4dD1cInt7cmVnaXN0ZXJNb2RlID8gJ1JlZ2lzdGVyJyA6ICdMb2dpbid9fVwiICh0YXApPVwic3VibWl0Rm9ybSgpXCIgY2xhc3M9XCItcHJpbWFyeSAtcm91bmRlZC1sZ1wiPjwvQnV0dG9uPlxuXG4gICAgPGxhYmVsICh0YXApPVwicmVnaXN0ZXJNb2RlID0gdHJ1ZVwiICpuZ0lmPVwiIXJlZ2lzdGVyTW9kZVwiIHRleHQ9XCJEb24ndCBoYXZlIGFuIGFjY291bnQgeWV0PyBSZWdpc3RlciBoZXJlXCI+PC9sYWJlbD5cbiAgICA8bGFiZWwgKHRhcCk9XCJyZWdpc3Rlck1vZGUgPSBmYWxzZVwiICpuZ0lmPVwicmVnaXN0ZXJNb2RlXCIgdGV4dD1cIllvdSBoYXZlIGFuIGFjY291bnQ/IExvZ2luIGhlcmVcIj48L2xhYmVsPlxuPC9TdGFja0xheW91dD5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uL0Bjb3JlL21vZGVscy9DYXJkJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vQGNvcmUvc2VydmljZXMvYXBpLnNlcnZpY2VcIjtcbmBgXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLWNhcmQtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNhcmQ6IENhcmQ7XG4gICAgY2FyZFRpdGxlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDtcbiAgICAgICAgaWYgKGlkID49IDApe1xuICAgICAgICAgICAgdGhpcy5nZXREZXRhaWxzKGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRoaXMuY2FyZCA9IHt0aXRsZTogXCJcIiwgZGVzY3JpcHRpb246ICcnfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXREZXRhaWxzKGlkOiBudW1iZXIpe1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0Q2FyZChpZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGRhdGE6IENhcmQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmQgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZFRpdGxlID0gdGhpcy5jYXJkLnRpdGxlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIClcbiAgICB9XG4gICAgc2F2ZUZvcm0oKXtcbiAgICAgICAgaWYodGhpcy5jYXJkLmlkKXtcbiAgICAgICAgICAgIHRoaXMuYXBpU2VydmljZS51cGRhdGVDYXJkKHRoaXMuY2FyZC5pZCwgdGhpcy5jYXJkLnRpdGxlLFxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZC5kZXNjcmlwdGlvbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9pdGVtcyddKSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuXG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwaVNlcnZpY2UuY3JlYXRlQ2FyZCh0aGlzLmNhcmQudGl0bGUsXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkLmRlc2NyaXB0aW9uKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2l0ZW1zJ10pLFxuICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBlZGl0Q2xpY2tlZCgpe1xuICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFsnL2VkaXQnLCB0aGlzLmNhcmQuaWRdKVxuICAgIH1cbiAgICBnb0JhY2soKXtcbiAgICAgICAgLy8gdGhpcy5yb3V0ZXJFeHRlbnNpb24uYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuICAgIHJlbW92ZUNhcmQoKXtcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmRlbGV0ZUNhcmQodGhpcy5jYXJkLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXN1bHQgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaXRlbXMnXSksXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICAgICApXG4gICAgfVxuXG59XG4iLCI8QWN0aW9uQmFyIHRpdGxlPVwie3tjYXJkVGl0bGV9fVwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPlxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGljb249XCJmb250Oi8vJiN4ZjEwNDtcIiBjbGFzcz1cImZhcyBoMlwiIGlvcy5wb3NpdGlvbj1cImxlZnRcIiAodGFwKT1cImdvQmFjaygpXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxuPCEtLSAgICA8QWN0aW9uSXRlbSBpY29uPVwiZm9udDovLyYjeGYwNDQ7XCIgY2xhc3M9XCJmYXMgaDJcIiBpb3MucG9zaXRpb249XCJyaWdodFwiICh0YXApPVwiZWRpdENsaWNrZWQoKVwiPjwvQWN0aW9uSXRlbT4tLT5cbjwhLS0gICAgPEFjdGlvbkl0ZW0gaWNvbj1cImZvbnQ6Ly8mI3hmMDQ0O1wiIGNsYXNzPVwiZmFzIGgyXCIgaW9zLnBvc2l0aW9uPVwicmlnaHRcIiAodGFwKT1cImVkaXRDbGlja2VkKClcIj48L0FjdGlvbkl0ZW0+LS0+XG4gICAgPEFjdGlvbkl0ZW0gaWNvbj1cImZvbnQ6Ly8mI3hmMGM3O1wiIGNsYXNzPVwiZmFzIGgyXCIgaW9zLnBvc2l0aW9uPVwicmlnaHRcIiAodGFwKT1cInNhdmVGb3JtKClcIj48L0FjdGlvbkl0ZW0+XG48L0FjdGlvbkJhcj5cblxuPFN0YWNrTGF5b3V0IGNsYXNzPVwicGFnZVwiICpuZ0lmPVwiY2FyZFwiPlxuICAgIDxMYWJlbCBjbGFzcz1cImgyXCIgdGV4dD1cIlRpdGxlXCI+PC9MYWJlbD5cbiAgICA8VGV4dEZpZWxkIFsobmdNb2RlbCldPVwiY2FyZC50aXRsZVwiIGNsYXNzPVwiaDIgdGV4dGJveCB0aXRsZVwiPjwvVGV4dEZpZWxkPlxuICAgIDxMYWJlbCBjbGFzcz1cImgyXCIgdGV4dD1cIkRlc2NyaXB0aW9uXCI+PC9MYWJlbD5cbiAgICA8VGV4dFZpZXcgWyhuZ01vZGVsKV09XCJjYXJkLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJoMiB0ZXh0Ym94XCI+PC9UZXh0Vmlldz5cbiAgICA8ZGl2PlxuICAgICAgICA8QnV0dG9uIHRleHQ9XCJ7e2NhcmQuaWQgPyAnVXBkYXRlJyA6ICdDcmVhdGUnfX1cIiAodGFwKT1cInNhdmVGb3JtKClcIiBjbGFzcz1cIi1wcmltYXJ5IC1yb3VuZGVkLWxnIG15LW90aGVyLWJ1dHRvblwiIGlkPVwiYnV0dG9uMVwiPjwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uICpuZ0lmPVwiY2FyZC5pZFwiIHRleHQ9XCJEZWxldGVcIiAodGFwKT1cInJlbW92ZUNhcmQoKVwiIGNsYXNzPVwibXktYnV0dG9uXCIgaWQ9XCJidXR0b24yXCI+PC9CdXR0b24+XG4gICAgPC9kaXY+XG48L1N0YWNrTGF5b3V0PlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vQGNvcmUvbW9kZWxzL0NhcmQnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gXCIuLi8uLi9AY29yZS9zZXJ2aWNlcy9hcGkuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjYXJkOiBDYXJkO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQ7XG4gICAgICAgIC8vIHRoaXMuY2FyZCA9IHRoaXMuYXBpU2VydmljZS5nZXRDYXJkKGlkKTtcbiAgICB9XG59XG4iLCI8QWN0aW9uQmFyIHRpdGxlPVwiRGV0YWlsc1wiPjwvQWN0aW9uQmFyPlxuXG48RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJtLTE1XCI+XG4gICAgICAgIDxMYWJlbCBjbGFzcz1cImgyXCIgW3RleHRDb250ZW50XT1cImNhcmQuaWQgKyAnLiAnXCI+PC9MYWJlbD5cbiAgICAgICAgPExhYmVsIGNsYXNzPVwiaDJcIiBbdGV4dENvbnRlbnRdPVwiY2FyZC50aXRsZVwiPjwvTGFiZWw+XG4gICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgIDxMYWJlbCBjbGFzcz1cImg0IG0tMTVcIiBbdGV4dENvbnRlbnRdPVwiY2FyZC5kZXNjcmlwdGlvblwiPjwvTGFiZWw+XG48L0ZsZXhib3hMYXlvdXQ+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL0Bjb3JlL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vQGNvcmUvbW9kZWxzL0NhcmQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWNhcmRzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkcy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIENhcmRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjYXJkczogQXJyYXk8Q2FyZD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgLy8gdGhpcy5jYXJkcyA9IHRoaXMuYXBpU2VydmljZS5nZXRDYXJkcygpO1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0Q2FyZHMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHMgPSBkYXRhO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIClcbiAgICB9XG59XG4iLCI8IS0tXG5UaGUgdGVtcGxhdGUgZGVmaW5lcyB0aGUgdmlldyBvZiB0aGUgY29tcG9uZW50IC0gd2hhdCBpcyBhY3R1YWxseSByZW5kZXJlZC5cbkluIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbnMgdGhlIHRlbXBsYXRlIGlzIGRlZmluZWQgd2l0aCBYTUwgdXNpbmcgTmF0aXZlU2NyaXB0IFVJIGVsZW1lbnRzLlxuSXQgaXMgZGlmZmVyZW50IGZyb20gSFRNTC4gU28gaW5zdGVhZCBvZiA8aW5wdXQ+LCA8c3Bhbj4sIDxkaXY+IGV0Yy4gLSB3ZSBoYXZlIDxUZXh0RmllbGQ+LCA8TGFiZWw+IGFuZCBsYXlvdXRzLlxuVGhlIGltcG9ydGFudCB0aGluZyBpcyB0aGF0IGFsdGhvdWdoIHRoZSBlbGVtZW50cyBhcmUgZGlmZmVyZW50IC0gYWxsIG9mIHRoZSBBbmd1bGFy4oCZcyB0ZW1wbGF0ZSBzeW50YXggd29ya3MgZXhhY3RseSB0aGUgc2FtZS5cblNvIHlvdSBjYW4gc3RpbGwgdXNlIHRlbXBsYXRlIGV4cHJlc3Npb25zLCBiaW5kaW5ncywgdGVtcGxhdGVzIGFzIHdlbGwgYXMgYWxsIHRoZSBidWlsdC1pbiBkaXJlY3RpdmVzLlxuLS0+XG5cbjwhLS1cblRoZSBBY3Rpb25CYXIgaXMgdGhlIE5hdGl2ZVNjcmlwdCBjb21tb24gYWJzdHJhY3Rpb24gb3ZlciB0aGUgQW5kcm9pZCBBY3Rpb25CYXIgYW5kIGlPUyBOYXZpZ2F0aW9uQmFyLlxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9hY3Rpb24tYmFyXG4tLT5cbjxBY3Rpb25CYXIgdGl0bGU9XCJNeSBBcHBcIj5cbjwvQWN0aW9uQmFyPlxuXG48IS0tXG5UaGUgR3JpZExheW91dCBhcnJhbmdlcyBpdHMgY2hpbGQgZWxlbWVudHMgaW4gYSB0YWJsZSBzdHJ1Y3R1cmUgb2Ygcm93cyBhbmQgY29sdW1ucy5cbkEgY2VsbCBjYW4gY29udGFpbiBtdWx0aXBsZSBjaGlsZCBlbGVtZW50cywgdGhleSBjYW4gc3BhbiBvdmVyIG11bHRpcGxlIHJvd3MgYW5kIGNvbHVtbnMsXG5hbmQgZXZlbiBvdmVybGFwIGVhY2ggb3RoZXIuIFRoZSBHcmlkTGF5b3V0IGhhcyBvbmUgY29sdW1uIGFuZCBvbmUgcm93IGJ5IGRlZmF1bHQuXG5Zb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgTmF0aXZlU2NyaXB0IGxheW91dHMgYXQgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvbGF5b3V0LWNvbnRhaW5lcnMuXG5cblRoZXNlIGNvbXBvbmVudHMgbWFrZSB1c2Ugb2YgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lLCB3aGljaCBzdHlsZXMgdGhlbSB3aXRoIGVsZW1lbnQgc2VsZWN0b3JzLlxuVGhlIHRoZW1lIGFsc28gcHJvdmlkZXMgYSBzZXQgb2YgaGVscGVyIGNsYXNzIG5hbWVzIHN1Y2ggYXMgcC0yMCwgaDEsIGgyLCBhbmQgdGV4dC1jZW50ZXIgdG8gZW5oYW5jZSBzdHlsaW5nLlxuWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbmF0aXZlc2NyaXB0L3RoZW1lXG4tLT5cbjxHcmlkTGF5b3V0PlxuICAgIDxMaXN0VmlldyBbY2FyZHNdPVwiY2FyZHNcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jYXJkPVwiY2FyZFwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxMYWJlbCBbbnNSb3V0ZXJMaW5rXT1cIlsnL2l0ZW0nLCBjYXJkLmlkXVwiIFt0ZXh0XT1cImNhcmQudGl0bGVcIj48L0xhYmVsPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L0xpc3RWaWV3PlxuPC9HcmlkTGF5b3V0PlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vLi4vQGNvcmUvbW9kZWxzL0NhcmRcIjtcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vQGNvcmUvc2VydmljZXMvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZnJhbWVcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNhcmQ6IENhcmQ7XG4gICAgaGlnaGxpZ2h0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSAwO1xuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDtcbiAgICAgICAgdGhpcy5nZXREZXRhaWxzKGlkKTtcbiAgICB9XG4gICAgc2V0SGlnaHRsaWdodChyYXRlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSByYXRlO1xuICAgIH1cbiAgICByYXRlQ2xpY2tlZCgpe1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2UucmF0ZUNhcmQodGhpcy5oaWdobGlnaHQsIHRoaXMuY2FyZC5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzdWx0ID0+IHRoaXMuZ2V0RGV0YWlscyh0aGlzLmNhcmQuaWQpLFxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgKVxuICAgIH1cbiAgICBnZXREZXRhaWxzKGlkOiBudW1iZXIpe1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0Q2FyZChpZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGRhdGE6IENhcmQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmQgPSBkYXRhO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIClcbiAgICB9XG4gICAgZWRpdENsaWNrZWQoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZWRpdCcsIHRoaXMuY2FyZC5pZF0pXG4gICAgfVxuICAgIGdvQmFjaygpe1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbi5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIEZyYW1lLnRvcG1vc3QoKS5nb0JhY2soKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvcGVuU2V0dGluZ3MoKSB7XG4gICAgLy8gaW1wbGVtZW50IHRoZSBjdXN0b20gbG9naWNcbn1cbiIsIjxBY3Rpb25CYXIgdGl0bGU9XCJ7e2NhcmQ/LnRpdGxlfX1cIiBjbGFzcz1cImFjdGlvbi1iYXJcIj5cbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpY29uPVwiZm9udDovLyYjeGYxMDQ7XCIgY2xhc3M9XCJmYXMgaDJcIiBpb3MucG9zaXRpb249XCJsZWZ0XCIgKHRhcCk9XCJnb0JhY2soKVwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbiAgICA8QWN0aW9uSXRlbSBpY29uPVwiZm9udDovLyYjeGYwNDQ7XCIgY2xhc3M9XCJmYXMgaDJcIiBpb3MucG9zaXRpb249XCJyaWdodFwiICh0YXApPVwiZWRpdENsaWNrZWQoKVwiPjwvQWN0aW9uSXRlbT5cbjwhLS0gICAgPEFjdGlvbkl0ZW0gaWNvbj1cImZvbnQ6Ly8mI3hmMGM3O1wiIGNsYXNzPVwiZmFzIGgyXCIgaW9zLnBvc2l0aW9uPVwicmlnaHRcIiAodGFwKT1cInJhdGVDbGlja2VkKClcIj48L0FjdGlvbkl0ZW0+LS0+XG48L0FjdGlvbkJhcj5cblxuPFN0YWNrTGF5b3V0IGNsYXNzPVwicGFnZVwiPlxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBjbGFzcz1cImJvZHkgcHVsbC1sZWZ0XCI+XG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiJiN4ZjAwNTtcIiBjbGFzcz1cImZhcyBoMlwiIFtuZ0NsYXNzXT1cInsnb3JhbmdlJzogY2FyZD8uYXZnX3JhdGluZyA+IDB9XCI+PC9MYWJlbD5cbiAgICAgICAgPExhYmVsIHRleHQ9XCImI3hmMDA1O1wiIGNsYXNzPVwiZmFzIGgyXCIgW25nQ2xhc3NdPVwieydvcmFuZ2UnOiBjYXJkPy5hdmdfcmF0aW5nID4gMX1cIj48L0xhYmVsPlxuICAgICAgICA8TGFiZWwgdGV4dD1cIiYjeGYwMDU7XCIgY2xhc3M9XCJmYXMgaDJcIiBbbmdDbGFzc109XCJ7J29yYW5nZSc6IGNhcmQ/LmF2Z19yYXRpbmcgPiAyfVwiPjwvTGFiZWw+XG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiJiN4ZjAwNTtcIiBjbGFzcz1cImZhcyBoMlwiIFtuZ0NsYXNzXT1cInsnb3JhbmdlJzogY2FyZD8uYXZnX3JhdGluZyA+IDN9XCI+PC9MYWJlbD5cbiAgICAgICAgPExhYmVsIHRleHQ9XCImI3hmMDA1O1wiIGNsYXNzPVwiZmFzIGgyXCIgW25nQ2xhc3NdPVwieydvcmFuZ2UnOiBjYXJkPy5hdmdfcmF0aW5nID4gNH1cIj48L0xhYmVsPlxuICAgICAgICA8TGFiZWwgdGV4dD1cIih7e2NhcmQ/Lm5vX29mX3JhdGluZ3N9fSlcIiBjbGFzcz1cImgyXCI+PC9MYWJlbD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDxMYWJlbCBjbGFzcz1cImgyIGRlc2NcIiBbdGV4dF09XCJjYXJkPy5kZXNjcmlwdGlvblwiPjwvTGFiZWw+XG48IS0tICAgIDxMYWJlbCBjbGFzcz1cImZhc1wiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGRcIiB0ZXh0PVwiJiN4ZjJiYjtcIj48L0xhYmVsPi0tPlxuXG4gICAgIDxTdGFja0xheW91dCBjbGFzcz1cImJvZHkgcHVsbC1sZWZ0XCI+XG4gICAgICAgICA8TGFiZWwgdGV4dD1cIlJhdGUgaXQgISEhXCIgY2xhc3M9XCJoMlwiPjwvTGFiZWw+XG4gICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgPExhYmVsICpuZ0Zvcj1cImxldCByYXRlIG9mIFsxLDIsMyw0LDVdXCIgdGV4dD1cIiYjeGYwMDU7XCIgY2xhc3M9XCJoMSBwdWxsLWxlZnQgYi1zdGFyc1wiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGRcIlxuICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ZhcyBwdXJwbGUnOiBoaWdobGlnaHQgPj0gcmF0ZSwgJ2ZhciB3aGl0ZSc6IGhpZ2hsaWdodCA8IHJhdGV9XCJcbiAgICAgICAgICAgICAgICAgKHRhcCk9XCJzZXRIaWdodGxpZ2h0KHJhdGUpXCI+PC9MYWJlbD5cbiAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICA8QnV0dG9uIHRleHQ9XCJSYXRlXCIgKHRhcCk9XCJyYXRlQ2xpY2tlZCgpXCIgY2xhc3M9XCJjYXJkLWJ1dHRvbiBoMlwiPjwvQnV0dG9uPlxuICAgICA8L1N0YWNrTGF5b3V0PlxuPC9TdGFja0xheW91dD5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vLi4vQGNvcmUvbW9kZWxzL0NhcmRcIjtcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vQGNvcmUvc2VydmljZXMvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7IGdldFN0cmluZywgcmVtb3ZlICB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IEFjdGlvbkJhckNvbXBvbmVudCAgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyL2RpcmVjdGl2ZXMvYWN0aW9uLWJhclwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjYXJkczogQXJyYXk8Q2FyZD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBteVRva2VuID0gZ2V0U3RyaW5nKFwibXItdG9rZW5cIik7XG4gICAgICAgIGlmKG15VG9rZW4pe1xuICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldENhcmRzKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChkYXRhOiBDYXJkW10pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aCddKVxuICAgICAgICB9XG4gICAgfVxuICAgIG5ld0NhcmQoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZWRpdCcsIC0xXSlcbiAgICB9XG4gICAgbG9nb3V0KCl7XG4gICAgICAgIHJlbW92ZShcIm1yLXRva2VuXCIpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoJ10pXG4gICAgfVxufVxuIiwiPCEtLVxuVGhlIHRlbXBsYXRlIGRlZmluZXMgdGhlIHZpZXcgb2YgdGhlIGNvbXBvbmVudCAtIHdoYXQgaXMgYWN0dWFsbHkgcmVuZGVyZWQuXG5JbiBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb25zIHRoZSB0ZW1wbGF0ZSBpcyBkZWZpbmVkIHdpdGggWE1MIHVzaW5nIE5hdGl2ZVNjcmlwdCBVSSBlbGVtZW50cy5cbkl0IGlzIGRpZmZlcmVudCBmcm9tIEhUTUwuIFNvIGluc3RlYWQgb2YgPGlucHV0PiwgPHNwYW4+LCA8ZGl2PiBldGMuIC0gd2UgaGF2ZSA8VGV4dEZpZWxkPiwgPExhYmVsPiBhbmQgbGF5b3V0cy5cblRoZSBpbXBvcnRhbnQgdGhpbmcgaXMgdGhhdCBhbHRob3VnaCB0aGUgZWxlbWVudHMgYXJlIGRpZmZlcmVudCAtIGFsbCBvZiB0aGUgQW5ndWxhcuKAmXMgdGVtcGxhdGUgc3ludGF4IHdvcmtzIGV4YWN0bHkgdGhlIHNhbWUuXG5TbyB5b3UgY2FuIHN0aWxsIHVzZSB0ZW1wbGF0ZSBleHByZXNzaW9ucywgYmluZGluZ3MsIHRlbXBsYXRlcyBhcyB3ZWxsIGFzIGFsbCB0aGUgYnVpbHQtaW4gZGlyZWN0aXZlcy5cbi0tPlxuXG48IS0tXG5UaGUgQWN0aW9uQmFyIGlzIHRoZSBOYXRpdmVTY3JpcHQgY29tbW9uIGFic3RyYWN0aW9uIG92ZXIgdGhlIEFuZHJvaWQgQWN0aW9uQmFyIGFuZCBpT1MgTmF2aWdhdGlvbkJhci5cbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvYWN0aW9uLWJhclxuLS0+XG48QWN0aW9uQmFyIHRpdGxlPVwiU3Bpcm92YW5uaSBNb2JpbGUgQXBwbGljYXRpb25cIj5cbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiB2aXNpYmlsaXR5PVwiY29sbGFwc2VkXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxuICAgIDxBY3Rpb25JdGVtIGljb249XCJmb250Oi8vJiN4ZjJmNTtcIiBjbGFzcz1cImZhcyBoMlwiIGlvcy5wb3NpdGlvbj1cInJpZ2h0XCIgKHRhcCk9XCJsb2dvdXQoKVwiPjwvQWN0aW9uSXRlbT5cbjwvQWN0aW9uQmFyPlxuXG48IS0tXG5UaGUgR3JpZExheW91dCBhcnJhbmdlcyBpdHMgY2hpbGQgZWxlbWVudHMgaW4gYSB0YWJsZSBzdHJ1Y3R1cmUgb2Ygcm93cyBhbmQgY29sdW1ucy5cbkEgY2VsbCBjYW4gY29udGFpbiBtdWx0aXBsZSBjaGlsZCBlbGVtZW50cywgdGhleSBjYW4gc3BhbiBvdmVyIG11bHRpcGxlIHJvd3MgYW5kIGNvbHVtbnMsXG5hbmQgZXZlbiBvdmVybGFwIGVhY2ggb3RoZXIuIFRoZSBHcmlkTGF5b3V0IGhhcyBvbmUgY29sdW1uIGFuZCBvbmUgcm93IGJ5IGRlZmF1bHQuXG5Zb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgTmF0aXZlU2NyaXB0IGxheW91dHMgYXQgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvbGF5b3V0LWNvbnRhaW5lcnMuXG5cblRoZXNlIGNvbXBvbmVudHMgbWFrZSB1c2Ugb2YgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lLCB3aGljaCBzdHlsZXMgdGhlbSB3aXRoIGVsZW1lbnQgc2VsZWN0b3JzLlxuVGhlIHRoZW1lIGFsc28gcHJvdmlkZXMgYSBzZXQgb2YgaGVscGVyIGNsYXNzIG5hbWVzIHN1Y2ggYXMgcC0yMCwgaDEsIGgyLCBhbmQgdGV4dC1jZW50ZXIgdG8gZW5oYW5jZSBzdHlsaW5nLlxuWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbmF0aXZlc2NyaXB0L3RoZW1lXG4tLT5cbjxTdGFja0xheW91dCBjbGFzcz1cInBhZ2VcIj5cbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cImNhcmRzXCIgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImNhcmRzLWxcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgW25zUm91dGVyTGlua109XCJbJy9pdGVtJywgaXRlbS5pZF1cIiBbdGV4dF09XCJpdGVtLnRpdGxlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9MaXN0Vmlldz5cbiAgICA8QnV0dG9uIHRleHQ9XCJOZXcgQ2FyZFwiICh0YXApPVwibmV3Q2FyZCgpXCIgY2xhc3M9XCJjYXJkLWJ1dHRvblwiPjwvQnV0dG9uPlxuPC9TdGFja0xheW91dD5cbiIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cyxcbi8vIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuXG4vLyBBbmd1bGFyIGFwcGxpY2F0aW9ucyBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aGVpciBvd24gaW5pdGlhbGl6YXRpb246XG4vLyBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcbi8vIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwifi9wYWNrYWdlLmpzb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==