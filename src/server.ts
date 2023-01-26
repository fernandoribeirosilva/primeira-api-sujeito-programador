import cors from 'cors';
import 'dotenv/config';
import express, { NextFunction, Request, Response, json } from "express";
import { router } from './routers';

const server = express();

server.use(cors());
server.use(json());
server.use(express.urlencoded({ extended: true }));

//middleware Global
server.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`URL CHAMADA: ${req.url}`)

  return next();
});

server.use(router);

server.listen(process.env.PORT, () => console.log('Server running'));