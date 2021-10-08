"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./lib/routes"));
const port = 8080;
const app = (0, express_1.default)();
const reactFolder = path_1.default.resolve(__dirname, '../client/build');
app.use(express_1.default.json());
app.use(routes_1.default);
app.get('/', (req, res) => {
    res.sendFile(path_1.default.resolve(reactFolder, 'index.html'));
});
app.use(express_1.default.static(reactFolder));
const server = app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
module.exports = server;
//# sourceMappingURL=server.js.map