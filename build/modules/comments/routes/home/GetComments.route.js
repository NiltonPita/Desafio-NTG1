"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var GetCommentsController_1 = __importDefault(require("../../controllers/home/GetCommentsController"));
var commentRouter = (0, express_1.Router)();
var commentController = new GetCommentsController_1.default();
commentRouter.get('/:comment_id', (0, celebrate_1.celebrate)((_a = {},
    _a[celebrate_1.Segments.PARAMS] = {
        comment_id: celebrate_1.Joi.string(),
    },
    _a)), commentController.getCommentId);
exports.default = commentRouter;
