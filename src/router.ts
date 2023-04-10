import { Router } from "express";
import pagesController from "./controller/PagesController";

const router = Router()

router.get("/", pagesController.index)

export default router