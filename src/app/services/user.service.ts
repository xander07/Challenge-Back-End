import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjecteModel } from '@nestjs/mongoose';
import { IUser} from "../interfaces/user.interface";

@Injectable()
export class UserService {
    constructor(
        @InjecteModel('tokenUserSchema')
        private readonly model : Model<IUser>
    ) {}
}
public find(conditions){
    return this.model.find(conditions).exec();
}