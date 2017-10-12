webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\n    <div class=\"row\">  \n      <div class=\"col-sm-12 col-md-12\" style=\"min-height:500px;\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h1>Bienvenido a {{ title }} <small>Prueba {{ cliente }}</small></h1>\n              <hr>\n              <p>Elija cualquiera de las opciones del panel de administraci&oacute;n</p>\n              <div class=\"row container\">\n                <div class=\"col-md-4 panel\">\n                  <a href=\"#\" (click)=\"respuestaProductos()\">\n                    <span class=\"glyphicon glyphicon-folder-open\"></span>\n                    <h3 class=\"text-center\">Productos</h3>\n                  </a>\n                </div>\n                <div class=\"col-md-4 panel\">\n                    <a href=\"#\" (click)=\"respuestaCategorias()\">\n                      <span class=\"glyphicon glyphicon-th-list\"></span>\n                      <h3 class=\"text-center\">Categor&iacute;as</h3>\n                    </a>\n                </div>\n                <div class=\"col-md-4 panel\">\n                  <a href=\"#\" (click)=\"respuestaColores()\">\n                    <span class=\"glyphicon glyphicon-equalizer\"></span>\n                    <h3 class=\"text-center\">Colores</h3>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"app-productos\" style=\"display:none;\"></div>\n              <div class=\"app-categorias\" style=\"display:none;\"></div>\n              <div class=\"app-colores\" style=\"display:none;\"></div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'CMS';
        this.cliente = 'NitsNets';
    }
    AppComponent.prototype.respuestaProductos = function () {
        document.getElementsByClassName('app-categorias')[0].setAttribute("style", "display:none;");
        document.getElementsByClassName('app-colores')[0].setAttribute("style", "display:none;");
        document.getElementsByClassName('app-productos')[0].setAttribute("style", "display:block;");
    };
    AppComponent.prototype.respuestaCategorias = function () {
        document.getElementsByClassName('app-productos')[0].setAttribute("style", "display:none;");
        document.getElementsByClassName('app-colores')[0].setAttribute("style", "display:none;");
        document.getElementsByClassName('app-categorias')[0].setAttribute("style", "display:block;");
    };
    AppComponent.prototype.respuestaColores = function () {
        document.getElementsByClassName('app-productos')[0].setAttribute("style", "display:none;");
        document.getElementsByClassName('app-categorias')[0].setAttribute("style", "display:none;");
        document.getElementsByClassName('app-colores')[0].setAttribute("style", "display:block;");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productos_productos_component__ = __webpack_require__("../../../../../src/app/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__colores_colores_component__ = __webpack_require__("../../../../../src/app/colores/colores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categorias_categorias_component__ = __webpack_require__("../../../../../src/app/categorias/categorias.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Terceros





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__productos_productos_component__["a" /* ProductosComponent */],
            __WEBPACK_IMPORTED_MODULE_6__categorias_categorias_component__["a" /* CategoriasComponent */],
            __WEBPACK_IMPORTED_MODULE_5__colores_colores_component__["a" /* ColoresComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/categorias/categorias.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Administrar Categorias</h2>\r\n<div class=\"row\">\r\n    <div class=\"table-responsive col-md-12\">\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                    <tr>\r\n                        <th>Id</th>\r\n                        <th>Nombre Categor&iacute;a</th>\r\n                        <th>Cantidad de productos</th>\r\n                        <th>Acci&oacute;n</th>\r\n                    </tr>\r\n            </thead>\r\n            <tbody>\r\n                    <tr *ngFor=\"let categoria of categorias; let i = index\">\r\n                            <td>{{ categoria.id }}</td>\r\n                            <td>{{ categoria.nombre }}</td>\r\n                            <td>{{ categoria.productos }}</td>\r\n                            <td>\r\n                                <a href=\"#editar\" id=\"{{i+1}}\" title=\"Editar\" (click)=\"editarCategoria(i)\"><span class=\"glyphicon glyphicon-pencil\"></span></a>&nbsp;\r\n                                <a href=\"\" id=\"{{i+1}}\" title=\"Eliminar\" (click)=\"eliminarCategoria(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                            </td>\r\n                    </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <button class=\"btn btn-info\" (click)=\"crearCategoria()\">Crear Categoria</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\" style=\"display:none;\" id=\"editarCategoria\">\r\n            <h3>Editar Categor&iacute;a</h3>\r\n            <form>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"idCategoria\">Id:</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"idCategoria\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"nombre\">Nombre categoria:</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nombreCategoria\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"productosCategoria\">Cantidad de productos:</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"productosCategoria\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <button type=\"submit\" class=\"btn btn-info\">Guardar</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/categorias/categorias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoriasComponent = (function () {
    function CategoriasComponent() {
        this.categorias = [
            {
                "id": "1", "nombre": "Televisores", "productos": "1"
            },
            {
                "id": "2", "nombre": "Smartphones", "productos": "2"
            },
            {
                "id": "3", "nombre": "Perifericos", "productos": "2"
            },
            {
                "id": "4", "nombre": "Ordenadores", "productos": "1"
            }
        ];
        this.modelo = [{
                "id": this.categorias.length + 1, "nombre": "Nueva Categoria", "productos": "0"
            }];
    }
    CategoriasComponent.prototype.crearCategoria = function () {
        this.categorias = this.categorias.concat(this.modelo);
    };
    CategoriasComponent.prototype.editarCategoria = function (i) {
        document.getElementById("editarCategoria").setAttribute("style", "display:block;");
        document.getElementById("idCategoria").setAttribute("value", i + 1);
        document.getElementById("nombreCategoria").setAttribute("value", this.categorias[i].nombre);
        document.getElementById("productosCategoria").setAttribute("value", this.categorias[i].productos);
    };
    CategoriasComponent.prototype.eliminarCategoria = function (i) {
        this.categorias.splice(i, 1);
        return false;
    };
    return CategoriasComponent;
}());
CategoriasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '.app-categorias',
        template: __webpack_require__("../../../../../src/app/categorias/categorias.component.html")
    })
], CategoriasComponent);

//# sourceMappingURL=categorias.component.js.map

/***/ }),

/***/ "../../../../../src/app/colores/colores.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Editar Colores</h2>\r\n<div class=\"row\">\r\n    <div class=\"table-responsive col-md-12\">\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                    <tr>\r\n                        <th>Id</th>\r\n                        <th>Nombre Color</th>\r\n                        <th>Cantidad de productos</th>\r\n                        <th>Acci&oacute;n</th>\r\n                    </tr>\r\n            </thead>\r\n            <tbody>\r\n                    <tr *ngFor=\"let color of colores; let i = index\">\r\n                            <td>{{ color.id }}</td>\r\n                            <td><button class=\"btn\"style=\"color: white; width: 100px;\" [style.background-color] = \"color.codigo\">{{ color.nombre }}</button></td>\r\n                            <td>{{ color.productos }}</td>\r\n                            <td>\r\n                                <a href=\"#editarColor\" id=\"{{i+1}}\" title=\"Editar\" (click)=\"editarColor(i)\"><span class=\"glyphicon glyphicon-pencil\"></span></a>&nbsp;\r\n                                <a href=\"\" id=\"{{i+1}}\" title=\"Eliminar\" (click)=\"eliminarColor(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                            </td>\r\n                    </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <button class=\"btn btn-info\" (click)=\"crearColor()\">Crear Color</button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\" style=\"display:none;\" id=\"editarColor\">\r\n        <h3>Editar Color</h3>\r\n        <form>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"idColor\">Id:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"idColor\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"nombre\">Nombre color:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"nombreColor\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"productos\">Cantidad de productos:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"productos\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <button type=\"submit\" class=\"btn btn-info\">Guardar</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/colores/colores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ColoresComponent = (function () {
    function ColoresComponent() {
        this.colores = [
            {
                "id": "1", "nombre": "Rojo", "codigo": "#FF0000", "productos": "4"
            },
            {
                "id": "2", "nombre": "Azul", "codigo": "#0000FF", "productos": "2"
            },
            {
                "id": "3", "nombre": "Amarillo", "codigo": "#FFFF00", "productos": "3"
            },
            {
                "id": "4", "nombre": "Verde", "codigo": "#00FF00", "productos": "5"
            },
            {
                "id": "5", "nombre": "Rosa", "codigo": "#FA58AC", "productos": "1"
            },
            {
                "id": "6", "nombre": "Naranja", "codigo": "#FF4000", "productos": "3"
            },
            {
                "id": "7", "nombre": "Negro", "codigo": "#000000", "productos": "4"
            }
        ];
        this.modelo = [{
                "id": this.colores.length + 1, "nombre": "Nuevo Color", "codigo": "#000000", "productos": "0"
            }];
    }
    ColoresComponent.prototype.crearColor = function () {
        this.colores = this.colores.concat(this.modelo);
    };
    ColoresComponent.prototype.editarColor = function (i) {
        document.getElementById("editarColor").setAttribute("style", "display:block;");
        document.getElementById("idColor").setAttribute("value", i + 1);
        document.getElementById("nombreColor").setAttribute("value", this.colores[i].nombre);
        document.getElementById("productos").setAttribute("value", this.colores[i].productos);
    };
    ColoresComponent.prototype.eliminarColor = function (i) {
        this.colores.splice(i, 1);
        return false;
    };
    return ColoresComponent;
}());
ColoresComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '.app-colores',
        template: __webpack_require__("../../../../../src/app/colores/colores.component.html")
    })
], ColoresComponent);

//# sourceMappingURL=colores.component.js.map

/***/ }),

/***/ "../../../../../src/app/productos/productos.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Administrar Productos</h2>\r\n<div class=\"row\">\r\n    <div class=\"table-responsive col-md-12\">\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                    <tr>\r\n                        <th>Id</th>\r\n                        <th>Nombre Producto</th>\r\n                        <th>Descripci&oacute;n</th>\r\n                        <th>Precio</th>\r\n                        <th>Acci&oacute;n</th>\r\n                    </tr>\r\n            </thead>\r\n            <tbody>\r\n                    <tr *ngFor=\"let producto of productos; let i = index\">\r\n                            <td>{{ producto.id }}</td>\r\n                            <td>{{ producto.nombre }}</td>\r\n                            <td>{{ producto.descripcion }}</td>\r\n                            <td>{{ producto.precio }}</td>\r\n                            <td>\r\n                                <a href=\"#editar\" id=\"{{i+1}}\" title=\"Editar\" (click)=\"editarProducto(i)\"><span class=\"glyphicon glyphicon-pencil\"></span></a>&nbsp;\r\n                                <a href=\"\" id=\"{{i+1}}\" title=\"Eliminar\" (click)=\"eliminarProducto(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\r\n                            </td>\r\n                    </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <button class=\"btn btn-info\" (click)=\"crearProducto()\">Crear Producto</button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\" style=\"display:none;\" id=\"editar\">\r\n        <h3>Editar Producto</h3>\r\n        <form>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"idProducto\">Id:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"idProducto\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"nombre\">Nombre producto:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"nombre\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"descripcion\">Descripci&oacute;n:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"descripcion\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"precio\">Precio:</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"precio\">\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-info\">Guardar</button>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/productos/productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductosComponent = (function () {
    function ProductosComponent() {
        this.productos = [
            {
                "id": "1", "nombre": "PC ASUS", "descripcion": "Ordenador tipo torre, marca ASUS", "precio": "499.99"
            },
            {
                "id": "2", "nombre": "Monitor Samsung", "descripcion": "Monitor Full HD, marca Samsung", "precio": "159.99"
            },
            {
                "id": "3", "nombre": "Smartphone HUAWEI", "descripcion": "HUAWEI GX8, con Android 6.0", "precio": "299.99"
            },
            {
                "id": "4", "nombre": "TV LG", "descripcion": "TV OLED, marca LG", "precio": "599.99"
            },
            {
                "id": "5", "nombre": "Altavoces Energy System", "descripcion": "Altavoces Dolby Surround, marca Energy System", "precio": "239.99"
            },
            {
                "id": "6", "nombre": "Smartphone Samsung", "descripcion": "Samsung S7 Edge Plus", "precio": "699.99"
            }
        ];
        this.modelo = [{
                "id": "-", "nombre": "-", "descripcion": "-", "precio": "-"
            }];
    }
    ProductosComponent.prototype.crearProducto = function () {
        this.productos = this.productos.concat(this.modelo);
    };
    ProductosComponent.prototype.editarProducto = function (i) {
        document.getElementById("editar").setAttribute("style", "display:block;");
        document.getElementById("idProducto").setAttribute("value", i + 1);
        document.getElementById("nombre").setAttribute("value", this.productos[i].nombre);
        document.getElementById("descripcion").setAttribute("value", this.productos[i].descripcion);
        document.getElementById("precio").setAttribute("value", this.productos[i].precio);
    };
    ProductosComponent.prototype.eliminarProducto = function (i) {
        this.productos.splice(i, 1);
        return false;
    };
    return ProductosComponent;
}());
ProductosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '.app-productos',
        template: __webpack_require__("../../../../../src/app/productos/productos.component.html")
    })
], ProductosComponent);

//# sourceMappingURL=productos.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map