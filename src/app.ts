import express  from "express";
import {router as routerStars} from "./routes/stars.router";

const app = express();
const PORT = 3000;


app.use(express.json());

app.use('/stars', routerStars)


app.listen(PORT, () => {

    console.log('servidor express con TS conectado')
})