"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
function validateRequest(schema) {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.params);
        }
        catch (err) {
            return res.send(err).status(400);
        }
        next();
    };
}
exports.validateRequest = validateRequest;
//# sourceMappingURL=validateRequest.js.map