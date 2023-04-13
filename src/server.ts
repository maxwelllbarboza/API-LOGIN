import * as dotenv from 'dotenv'; 
import express from "express";

dotenv.config()
const app = express();
app.use(express.json());



app.listen(process.env.PORT || 3000, () => console.log("Servidor subiu na porta 3000."));

