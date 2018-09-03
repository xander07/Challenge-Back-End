import { NestFactory } from "@nestjs/core";
import * as express from 'express';
import { AppModule } from "./app/app.module";



(async () =>{
    //Crear Servidor http en express
    const server = express();
    //Crear aplicación en NestJS
    const app = await NestFactory.create(AppModule,server);
    //Iniciar Aplicacion
    await app.listen(3000);
}) ();