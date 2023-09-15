import { Router } from "express";
import { getStarsController } from "../controller/get.stars.controller";
import { getStarsById } from "../controller/get.stars.by.id.controller";
import { createStarsController } from "../controller/create.stars.controller";
import { validateStarsMiddleware } from "../middlewares/create.validation.middle";

export const router = Router();

router.get('/', getStarsController)

router.get('/:id',getStarsById )


router.post('/',validateStarsMiddleware ,createStarsController )