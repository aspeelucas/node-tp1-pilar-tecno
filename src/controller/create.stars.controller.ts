import { Request, Response } from "express";

export async function createStarsController(req: Request, res: Response) {
  const { id, name, type, distancia, radius, age } = req.body;
  if (!id || !name || !type || !distancia || !radius || !age) {
    res.status(400).json({ error: "Please. Send all fields" });
  }
  res.status(200).json({ message: "New star added" });
}
