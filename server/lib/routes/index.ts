import Joi from "joi";
import {Router, Request,Response} from "express";
import {getImages} from "../logic/images";
import {validateRequest} from "../middleware/validateRequest"
const routes = Router();

routes.get('/api/images/:start/:end' ,
    validateRequest(Joi.object().keys({
        start: Joi.number().required(),
        end: Joi.number().required()
    }).required()),
    async (req: Request<{start: string, end: string}, {},{}>, res: Response, next) => {
    try {
        const result = await getImages(+req.params.start, +req.params.end);
        res.json(result);
    } catch(err) {
        return res.status(500).send(err);
    }
});

export default routes;