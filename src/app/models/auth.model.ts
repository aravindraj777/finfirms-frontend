
export interface AuthResponse{
    status:number;
    message:string;
}

export interface LoginResponse{
    user:User
}

export interface User{
    id:number;
    firstName:string;
    lastName:string;
    phone:string;
    email:string;
    password:string;
}


