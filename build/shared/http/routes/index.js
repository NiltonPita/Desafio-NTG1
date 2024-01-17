"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SetupComments_route_1 = __importDefault(require("../../../modules/comments/routes/home/SetupComments.route"));
var GetComments_route_1 = __importDefault(require("../../../modules/comments/routes/home/GetComments.route"));
var routes = (0, express_1.Router)();
routes.use('/home/create', SetupComments_route_1.default);
routes.use('/home/list', GetComments_route_1.default);
exports.default = routes;
