import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { LoginComponent } from './veterinario/login/login.component';
import { EstabelecimentosComponent } from './user/estabelecimentos/estabelecimentos.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { AjudaComponent } from './veterinario/ajuda/ajuda.component';
import { PerfilComponent } from './veterinario/perfil/perfil.component';
import { GerenteComponent } from './gerente/gerente.component';
import { Ajuda2Component } from './gerente/ajuda2/ajuda2.component'; 
import { LojaComponent } from './user/loja/loja.component';
import { LadingpageComponent } from './ladingpage/ladingpage.component';

const routes: Routes = [
  {path: 'user',component:UserComponent},
  {path: 'funcionario/login',component:LoginComponent},
  {path: 'user/estabelecimentos',component:EstabelecimentosComponent},
  {path: 'veterinario',component:VeterinarioComponent},
  {path: 'veterinario/ajuda',component:AjudaComponent},
  {path: 'veterinario/perfil',component:PerfilComponent},
  {path: 'gerente',component:GerenteComponent},
  {path: 'gerente/ajuda',component:Ajuda2Component},
  {path: 'user/loja', component:LojaComponent},
  {path: '', component:LadingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
