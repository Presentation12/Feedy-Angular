import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

declare function submit():any;
declare function ok():any;

@Component({
  selector: 'app-ajuda2',
  templateUrl: './ajuda2.component.html',
  styleUrls: ['./ajuda2.component.css']
})
export class Ajuda2Component implements OnInit {

  constructor(private service: SharedService) { }

  public loadScript(url : any)
  {
    let node = document.createElement("script");
    node.src=url;
    node.type ='text/javascript';
    document.body.append(node);
  }

  Submit()
  {
    submit();
  }

  Ok()
  {
    ok();
  }

  Gerente: any = {};

  refreshDadosGerente() {
    this.service.getDadosFuncionario().subscribe(data => {
      this.Gerente = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.loadScript("assets/js/ajuda.js");
    this.refreshDadosGerente();
  }

}
