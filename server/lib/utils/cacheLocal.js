"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
class cacheLocal {
    constructor(ttlSeconds) {
        this.cache = new node_cache_1.default({
            stdTTL: ttlSeconds,
            checkperiod: ttlSeconds * 0.2,
            useClones: false
        });
    }
    static getInstance() {
        if (!cacheLocal._instance) {
            cacheLocal._instance = new cacheLocal(10000);
        }
        return cacheLocal._instance;
    }
    get(key) {
        return this.cache.get(key);
    }
    set(key, value) {
        this.cache.set(key, value);
    }
}
exports.default = cacheLocal.getInstance();
//# sourceMappingURL=cacheLocal.js.map