import * as dotenv from 'dotenv'; 
import express from "express";
import { prismaClient } from './database/client';

const port = process.env.PORT || 3000

dotenv.config()
const app = express();
app.use(express.json());

app.post('/usuarios', async (request, response) => {   
    const { email, username, name } = request.body
  
    const verifyIfExistsUser = await prismaClient.user.findFirst({
      where: {
        username,
        OR: {
          email,
        },
      },
    })
  
    if (verifyIfExistsUser)
      return response.status(400).json({ error: 'Usuário já existe.' })
  
    const userCreated = await prismaClient.user.create({
      data: {
        email,
        username,
        name,
      },
    })
  
    return response.json(userCreated)
  })

app.listen(port, () => console.log("Servidor subiu na porta 3000."));

