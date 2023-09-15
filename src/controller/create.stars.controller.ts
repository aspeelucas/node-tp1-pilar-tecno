import type { Request, Response } from "express";

export async function createStarsController(req: Request, res: Response) {
  return res.status(200).json({ message: "New star added" });
}
