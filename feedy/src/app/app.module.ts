import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './veterinario/login/login.component';
import { AjudaComponent } from './veterinario/ajuda/ajuda.component';
import { PerfilComponent } from './veterinario/perfil/perfil.component';
import { EstabelecimentosComponent } from './user/estabelecimentos/estabelecimentos.component';
import { MenuComponent } from './menu/menu.component';
import { GerenteComponent } from './gerente/gerente.component';
import { Ajuda2Component } from './gerente/ajuda2/ajuda2.component'; 

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LojaComponent } from './user/loja/loja.component';

@NgModule({
  declarations: [
    AppComponent,
    VeterinarioComponent,
    UserComponent,
    AjudaComponent,
    PerfilComponent,
    EstabelecimentosComponent,
    MenuComponent,
    LoginComponent,
    GerenteComponent,
    Ajuda2Component,
    LojaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MenuComponent },
    ])
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
