import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

declare function mostraPass(): any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: SharedService) {
  }

  public loadScript(url: any) {
    let node = document.createElement("script");
    node.src = url;
    node.type = 'text/javascript';
    document.body.append(node);
  }

  MostraPass() {
    mostraPass();
  }

  ngOnInit(): void {
    this.loadScript("assets/js/login.js");
  }

  Account: any;
  Cod: any;
  Pass: any;

  login(): void {
    this.Account = {
      Codigo: this.Cod,
      Pass: this.Pass
    }
    this.service.loginFuncionario(this.Account).subscribe(data => {
      console.log(data);
    });
  }

}