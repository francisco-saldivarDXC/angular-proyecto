import { Injectable } from '@angular/core';

export interface IUser {
  status: boolean,
  user: string,
  token: string,
}

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor() { }

  public logIn(user: string, password: string) : boolean | IUser{
    if(user === "user" && password === "12345"){
      return {
        status: true,
        user: user,
        token: "jrhfiurfhi3ufhu5465"
      };
    }else{
      return {
        status: false,
        user: "",
        token: ""
      };
    }

  }
}
