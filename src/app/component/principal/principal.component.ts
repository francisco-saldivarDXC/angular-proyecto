import { Component } from '@angular/core';
import { LogInService } from 'src/app/services/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  public user : string = "";
  public password : string = "";
  public showError : boolean = false;

  PrincipalComponent( user: string, password : string ) {
    this.user = user;
    this.password = password;
  }

  constructor(private service: LogInService, public router: Router){}

  public logIn () : void {
    const response : any = this.service.logIn(this.user, this.password);

    if(!response.status){
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 4000);
    }else{
      alert("Inicio de sesión exitoso");
      localStorage.setItem("auth", JSON.stringify( {user: response.user, token: response.token}));
      this.router.navigate(["/uno"]);
    }
  }
}
