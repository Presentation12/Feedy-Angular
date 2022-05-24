import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

declare function submit():any;
declare function ok():any;

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css']
})
export class AjudaComponent implements OnInit {

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

  Veterinario: any = {};

  refreshDadosVeterinario() {
    this.service.getDadosFuncionario().subscribe(data => {
      this.Veterinario = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.loadScript("assets/js/ajuda.js");
    this.refreshDadosVeterinario();
  }

}
