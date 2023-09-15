import { Request, Response } from "express";
import star from "../data/star.json";


export async function getStarsController (req:Request, res: Response) {
    const type = req.query.type as string;
    let variousStars = star;
    if(type){
        variousStars = star.filter((estrella) => estrella.type.includes(type));
    }
    return res.status(200).json(variousStars);
}