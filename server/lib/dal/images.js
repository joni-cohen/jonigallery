"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImagesFromSource = void 0;
const axios_1 = __importDefault(require("axios"));
async function getImagesFromSource() {
    const res = await axios_1.default.get('https://api.jonathanczyzyk.com/api/v1/images/small', {
        headers: {
            'x-api-key': 'api-key-65996da3-e085-40d9-b521-b8edd3b68ce9'
        }
    }).catch(err => {
        throw err;
    });
    const images = res.data || [];
    return images;
}
exports.getImagesFromSource = getImagesFromSource;
//# sourceMappingURL=images.js.map