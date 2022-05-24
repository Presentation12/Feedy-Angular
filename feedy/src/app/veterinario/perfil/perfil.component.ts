import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { VeterinarioComponent } from '../veterinario.component';

declare function showPass(pass: any): any;
declare function editable(): any;
declare function nonEditable(): any;
declare function insertsPass(buton: any, passes: any): any;
declare function cancel(buton: any, passes: any): any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private service: SharedService) { }

  public loadScript(url: any) {
    let node = document.createElement("script");
    node.src = url;
    node.type = 'text/javascript';
    document.body.append(node);
  }

  ShowPass(pass: any) {
    showPass(pass);
  }

  Editable() {
    editable();
  }

  NonEditable() {
    nonEditable();
  }

  InsertsPass(buton: any, passes: any) {
    insertsPass(buton, passes);
  }

  Cancel(buton: any, passes: any) {
    cancel(buton, passes);
  }

  Veterinario: any = {};

  refreshDadosVeterinario() {
    this.service.getDadosFuncionario().subscribe(data => {
      this.Veterinario = data;
      console.log(data);
    })
  }

  ListaClinicas: any = [];

  refreshListaClinicasVeterinario() {
    this.service.getClincasVeterinario().subscribe(data => {
      this.ListaClinicas = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.loadScript("assets/js/perfil.js");
    this.refreshDadosVeterinario();
    this.refreshListaClinicasVeterinario();
  }

  Account: any;

  edit(): void {
    this.Account = {
      FuncionarioFoto: `${this.Veterinario.FuncionarioFoto}`,
      Nome: `${this.Veterinario.Nome}`,
      Apelido: `${this.Veterinario.Apelido}`,
      Email: `${this.Veterinario.Email}`,
      Telemovel: `${this.Veterinario.Telemovel}`
    }
    this.service.editDadosFuncionario(this.Account).subscribe();
    nonEditable();
  }

  PassNew: any;
  PassConfirm: any;

  editPassword(): void {
    this.Account = {
      Pass: `${this.PassNew}`
    }
    if((this.PassNew == this.PassConfirm))
    {
      this.service.editPasswordsFuncionario(this.Account).subscribe();
      nonEditable();
    }
    else
    {
      alert("Passwords não equivalentes");
    }
  }

  fotoFileName:string="";
  fotoFilePath:string="";

  uploadPhoto(event:any){
    var file = event.target.files[0];
    const formData:FormData=new FormData();
    formData.append("uploadedFile", file,file.name)

    this.service.UploadPhoto(formData).subscribe(data => {
      this.fotoFileName = data.toString();
      this.Veterinario.FuncionarioFoto = this.service.PhotoUrl+this.fotoFileName;
    })
  } 

}