import { Request, Response } from "express";
import {resolve} from "path";

class PagesController {

    public index(req:Request, res:Response) {

        const dir = process.env.NODE_ENV == "production" ? "build" : "src"

        return res.sendFile(resolve(`./${dir}/views/index.html`))

    }

}

export default new PagesController()