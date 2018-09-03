import { Module } from '@nestjs/common';
import {AppController} from "./controllers/app.controller";
import { MongooseModule} from "@nestjs/mongoose";
import {UserService} from "./services/user.service";
import {userSchema} from "./schemas/user.schema";

@Module({
    controllers: [
        AppController
    ],
    imports: [
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/bot', {useNewUrlParser:
        true}),
        MongooseModule.forFeature([
            {name: 'tokenUserSchema', schema: userSchema}
        ]),
    ],
    providers:[
        UserService
    ]
})
export class AppModule {}