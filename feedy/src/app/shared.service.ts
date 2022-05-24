import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:5001/api";
  readonly PhotoUrl = "https://localhost:5001/images/";
  headerAuth = new HttpHeaders().append("Authorization", 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJkdWFydGVyaWJlaXJvZGVtZWxvQGhvdG1haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkZ1bmNpb25hcmlvIiwiQWRtaW4iXSwiZXhwIjoxNjUzNDA1NTExfQ.8jH96OqQCLchsBilS1SuZKuGOVtAVJtAeKLq4v05F3RJPZuNn1p5MLCQy0if2h5SIXv6dEKEtQp3M7VaLdvKtQ')

  constructor(private http: HttpClient) { }

//LOGIN (+ RECUPERAR PASS)
  // login
  loginFuncionario(val: any) {
    return this.http.post(this.APIUrl + '/funcionario/login', val);
  }

//USER/ESTABELECIMENTOS
  // buscar os estabelecimentos para mostrar
  getListaEstabelecimentos(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/estabelecimento', { headers: this.headerAuth });
  }
  // bucar todos os distritos existentes de estabelecimentos
  getDistritos(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/estabelecimento/distritos', { headers: this.headerAuth });
  }
  // buscar dados do cliente para top navbar
  getDadosCliente(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/cliente/1', { headers: this.headerAuth });
  }
  //slider dicas
  changeTip(tip: string) {
    const text1 = "Deve lavar o seu cão, pelo menos, uma vez por mês.";
    const text2 = "Deve dar de comer ao seu cão duas vezes por dia.";
    const text3 = "Deve levar o seu cão à rua, pelo menos, uma vez por dia.";
    if (tip == "") {
      return text1;
    }
    if (tip == text1) {
      return text2;
    }
    else if (tip == text2) {
      return text3;
    }
    else if (tip == text3) {
      return text1;
    }
    else {
      return "error";
    }
  }

  changeTipLi(lis: string[]) {
    if (lis[0] == "selected") {
      lis[0] = "";
      lis[1] = "selected";
    }
    else if (lis[1] == "selected") {
      lis[1] = "";
      lis[2] = "selected";
    }
    else if (lis[2] == "selected") {
      lis[2] = "";
      lis[0] = "selected";
    }
  }

//VETERINARIO/PERFIL
  // mostrar os dados do veterinario (get)
  getDadosFuncionario(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/funcionario/1', { headers: this.headerAuth });
  }
  // mostra todas as clinicas de um veterinario
  getClincasVeterinario(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/funcionario/1/clinicas', { headers: this.headerAuth });
  }

  // update dos dados do veterinario (patch)
  editDadosFuncionario(val: any): Observable<any[]> {
    return this.http.patch<any>(this.APIUrl + '/funcionario/editaccount', val, { headers: this.headerAuth });
  }

  // update password (patch)
  editPasswordsFuncionario(val: any): Observable<any[]> {
    return this.http.patch<any>(this.APIUrl + '/funcionario/changepassword', val, { headers: this.headerAuth });
  }

  UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + '/funcionario/SaveFile', val, { headers: this.headerAuth })
  }

//USER/LOJA
  //mostrar artigos disponiveis para compra de um estabelecimento
  getArtigos(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/stockestabelecimento', {headers:this.headerAuth});
  }

}