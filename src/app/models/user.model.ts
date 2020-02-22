import { Model } from './model.model';

export class User extends Model {
    username: string;
    password: string;
    token: User;
}