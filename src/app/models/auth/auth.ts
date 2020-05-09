import { Img } from './user/img';
import { Class } from '../class/class';
import { Course } from '../course/course';
export class Role {
    description: string;
    id: number;
    name: string;
    type: string;
}

export class User {
    blocked: boolean;
    class: Class;
    confirmed: boolean;
    course: number;
    created_at: string;
    email: string;
    id: number;
    provider: string;
    role: Role;
    updated_at: string;
    username: string;
    img: Img;
}

export class Auth {
    jwt: string;
    user: User;
}
