import { InvokeFunctionExpr } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bikeProyecto';

  home = false;
  about = false;
  admin = false;
  viewRegistration = false;


  constructor(){}

  Cambia(valor:any){
    if (valor === "home")
    {
      this.home = true;
    }
    if (valor ==="about")
    {
      this.about = true;
    }
    if (valor === "admin")
    {
      this.admin = true;
    }
  }
}

