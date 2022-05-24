import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

declare function filter(): any;

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.component.html',
  styleUrls: ['./estabelecimentos.component.css']
})
export class EstabelecimentosComponent implements OnInit {

  constructor(private service: SharedService) {
  }

  public loadScript(url: any) {
    let node = document.createElement("script");
    node.src = url;
    node.type = 'text/javascript';
    document.body.append(node);
  }

  tipText = "Deve lavar o seu cão, pelo menos, uma vez por mês.";
  selected = ["selected", "", ""];

  changeTip() {
    setInterval(() => {
      this.tipText = this.service.changeTip(this.tipText);
      this.service.changeTipLi(this.selected);
    }, 5000);
  }

  Filter() {
    filter();
  }

  EstabelecimentoSelecionado: any = {};
  DetalheCheck: number = 0;

  Details(Est: any) {
    this.EstabelecimentoSelecionado = Est;
    this.DetalheCheck = 1;
    console.log(this.DetalheCheck);
  }

  Ok() {
    this.DetalheCheck = 0;
  }

  ListaEstabelecimentos: any = [];

  refreshListaEstabelecimentos() {
    this.service.getListaEstabelecimentos().subscribe(data => {
      this.ListaEstabelecimentos = data;
    });
  }

  ListaDistritos: any = [];

  refreshListaDistritos() {
    this.service.getDistritos().subscribe(data => {
      this.ListaDistritos = data;
    });
  }

  Cliente: any = {};

  refreshDadosCliente() {
    this.service.getDadosCliente().subscribe(data => {
      this.Cliente = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.loadScript("assets/js/estabelecimentos.js");
    this.refreshDadosCliente();
    this.refreshListaEstabelecimentos();
    this.refreshListaDistritos();
    this.changeTip();
  }


}
