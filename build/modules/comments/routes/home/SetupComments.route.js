"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var SetupCommentsController_1 = __importDefault(require("../../controllers/home/SetupCommentsController"));
var commentsRouter = (0, express_1.Router)();
var commentsController = new SetupCommentsController_1.default();
commentsRouter.post('/', (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        comment_id: celebrate_1.Joi.number(),
        comment: celebrate_1.Joi.string(),
        email: celebrate_1.Joi.string(),
    },
    _a)), commentsController.setupComment);
exports.default = commentsRouter;
