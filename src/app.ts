import express, { Request, Response } from "express";
import {router as routerStars} from "./routes/stars.router";

const app = express();
const PORT = 3000;


app.use(express.json());

app.use('/stars', routerStars)


// app.get("/", (req: Request, res: Response) => {
//   return res.status(200).json({ message: "Hello PEPITO" });
// });

// // app.get("/stars", (req: Request, res: Response) => {
// //     const type = req.query.type as string;
// //     let variousStars = stars;
// //     if(type){
// //         variousStars = stars.filter((estrella) => estrella.type.includes(type));
// //     }
// //     res.status(200).json(variousStars);
// // });

app.listen(PORT, () => {

    console.log('servidor express con TS conectado')
})