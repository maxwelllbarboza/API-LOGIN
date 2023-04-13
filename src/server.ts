import * as dotenv from 'dotenv'; 
import express, { response } from "express";

dotenv.config()
const app = express();
app.use(express.json());

app.get("/", async (Request, Response) => {

    return response.json("Entrei aqui.");

})

app.listen(process.env.PORT || 3000, () => console.log("Servidor subiu na porta 3000."));

