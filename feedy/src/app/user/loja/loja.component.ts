import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

declare function filter(): any;
declare function submit(): any;

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  constructor(private service: SharedService) { }

  public loadScript(url: any) {
    let node = document.createElement("script");
    node.src = url;
    node.type = 'text/javascript';
    document.body.append(node);
  }

  Filter() {
    filter();
  }

  ArtigoSelecionado: any = {};
  DetalheCheck: number = 0;
  PayCheck: number = 0;

  Details(Art: any) {
    this.ArtigoSelecionado = Art;
    this.DetalheCheck = 1;
  }

  Pay()
  {
    this.PayCheck = 1;
  }

  Ok() {
    this.DetalheCheck = 0;
    this.PayCheck = 0
  }

  tipText = "Deve lavar o seu cão, pelo menos, uma vez por mês.";
  selected = ["selected", "", ""];

  changeTip() {
    setInterval(() => {
      this.tipText = this.service.changeTip(this.tipText);
      this.service.changeTipLi(this.selected);
    }, 5000);
  }

  Cliente: any = {};

  refreshDadosCliente() {
    this.service.getDadosCliente().subscribe(data => {
      this.Cliente = data;
    })
  }

  ListaEstabelecimentos: any = [];

  refreshListaEstabelecimentos() {
    this.service.getListaEstabelecimentos().subscribe(data => {
      this.ListaEstabelecimentos = data;
    });
  }

  ListaArtigos: any = [];

  refreshArtigos() {
    this.service.getArtigos().subscribe(data => {
      this.ListaArtigos = data;
    })
  }

  Carrinho: any = [];
  ArtigoCarrinho: any = {};
  Qtd: any;
  PrecoFinal: any = 0;

  refreshCarrinho() {
    this.ArtigoCarrinho =
    {
      Nome: `${this.ArtigoSelecionado.Nome}`,
      Qtd: `${this.Qtd}`,
      Preco: `${this.ArtigoSelecionado.Preco}`,
      IdStock: `${this.ArtigoSelecionado.IdStock}`,
      IdEncomenda: ""
    }
    this.ArtigoSelecionado.Stock-=this.Qtd;
    this.Carrinho.push(this.ArtigoCarrinho);
    this.Ok();
    this.PrecoFinal += this.Qtd * this.ArtigoSelecionado.Preco;
    this.Qtd = 0;
  }

  add(artigo : any)
  {
    artigo.Qtd++;
    this.PrecoFinal += +artigo.Preco;
  }

  cancel()
  {
    this.PrecoFinal = 0;
    this.Carrinho = [];
    this.Ok();
  }

  Encomenda: any;
  MetodoPagamento: any;
  EncomendaStock: any = {};
  buyCarrinho()
  {
    this.Encomenda={
      MetodoPagamento: `${this.MetodoPagamento}`,
      IdMorada: `${this.Cliente.IdMorada}`,
      IdCliente: `${this.Cliente.IdCliente}`
    }
    this.service.postEncomenda(this.Encomenda).subscribe(data=>{
      this.EncomendaStock = data;

      this.Carrinho.forEach((artigo: any) => {
        artigo.IdEncomenda = this.EncomendaStock.IdEncomenda;
        this.service.postEncomendaStock(artigo).subscribe();
      });

    });
    this.aceite();
  }

  Mensagem:any = 0;
  aceite()
  {
    this.PayCheck = 0;
    this.Mensagem = 1;
  }

  OkAceite()
  {
    this.Mensagem = 0;
    submit();
  }

  ngOnInit(): void {
    this.loadScript("assets/js/loja.js");
    this.changeTip();
    this.refreshDadosCliente();
    this.refreshListaEstabelecimentos();
    this.refreshArtigos();
  }

}
