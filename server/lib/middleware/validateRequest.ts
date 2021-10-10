import {Schema} from "joi";
import {Request, Response, NextFunction} from "express";

export function validateRequest(schema: Schema) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.params);
        } catch (err) {
            return res.status(400).send(err);
        }
        next();
    };
}
