"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImages = void 0;
const images_1 = require("../dal/images");
const cacheLocal_1 = __importDefault(require("../utils/cacheLocal"));
async function getImages(start, end) {
    let images = cacheLocal_1.default.get('images');
    if (images === undefined) {
        images = await (0, images_1.getImagesFromSource)();
        cacheLocal_1.default.set('images', images);
    }
    return images.slice(start, end);
}
exports.getImages = getImages;
//# sourceMappingURL=images.js.map