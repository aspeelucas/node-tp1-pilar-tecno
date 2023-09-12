import { Request, Response, Router } from "express";
import star from "../data/star.json";
import { getStarsController } from "../controller/get.stars.controller";
import { getStarsById } from "../controller/get.stars.by.id.controller";
import { createStarsController } from "../controller/create.stars.controller";

export const router = Router();

router.get('/', getStarsController)

router.get('/:id',getStarsById )


router.post('/',createStarsController )