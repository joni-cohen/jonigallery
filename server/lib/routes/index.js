"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const express_1 = require("express");
const images_1 = require("../logic/images");
const validateRequest_1 = require("../middleware/validateRequest");
const routes = (0, express_1.Router)();
routes.get('/api/images/:start/:end', (0, validateRequest_1.validateRequest)(joi_1.default.object().keys({
    start: joi_1.default.number().required(),
    end: joi_1.default.number().required()
}).required()), async (req, res, next) => {
    try {
        const result = await (0, images_1.getImages)(+req.params.start, +req.params.end);
        res.json(result);
    }
    catch (err) {
        return res.status(500).send(err);
    }
});
exports.default = routes;
//# sourceMappingURL=index.js.map