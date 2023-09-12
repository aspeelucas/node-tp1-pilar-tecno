
import { Request, Response } from "express";
import star from "../data/star.json";

export async function getStarsById (req:Request , res: Response){
    const id = req.params.id;
    const starFound = star.find((estrella) => estrella.id === parseInt(id));
    if(starFound){
        res.status(200).json(starFound);
    }else{
        res.status(404).json({message: 'Star not found'});
    }
}