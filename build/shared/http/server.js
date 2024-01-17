"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var swagger_json_1 = __importDefault(require("./swagger.json"));
var AppError_1 = __importDefault(require("../errors/AppError"));
var app = (0, express_1.default)();
app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(function (error, request, response, next) {
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }
    console.log("AQUI = " + error);
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});
app.use("/v1", routes_1.default);
app.listen(5000, function () {
    require('dotenv/config');
    console.log('Server started on port 5000! 🏆');
});
