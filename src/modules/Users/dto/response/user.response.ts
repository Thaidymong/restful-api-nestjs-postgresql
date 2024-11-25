export class UserResponse {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
}

export class AllUserResponse {
    data?: UserResponse[];
}

export class CreateUserResponse {
    data?: UserResponse;
}
