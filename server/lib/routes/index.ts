import Joi from "joi";
import {Router, Request,Response} from "express";
import {getImages} from "../logic/images";
import {validateRequest} from "../middleware/validateRequest"
const routes = Router();

routes.get('/api/images/:start/:end' ,
    validateRequest(Joi.object({
        start: Joi.number().required(),
        end: Joi.number().required().greater(Joi.ref('start'))
    }).required()),
    async (req: Request<{start: string, end: string}, {},{}>, res: Response) => {
    try {
        const result = await getImages(+req.params.start, +req.params.end);
        res.json(result);
    } catch(err) {
        return res.status(500).send(err);
    }
});

export default routes;