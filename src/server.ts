import * as dotenv from 'dotenv'; 
import express from "express";
import { prismaClient } from './database/prismaClient';

const port = process.env.PORT || 3000

dotenv.config()
const app = express();
app.use(express.json());



app.listen(port, () => console.log("Servidor subiu na porta 3000."));

