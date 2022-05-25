import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-parcerias',
  templateUrl: './parcerias.component.html',
  styleUrls: ['./parcerias.component.css']
})
export class ParceriasComponent implements OnInit {

  constructor(private service: SharedService) { }

  ListaEstabelecimentos: any = [];

  refreshListaEstabelecimentos() {
    this.service.getEstabelecimentosNameAndPhoto().subscribe(data=>{
      this.ListaEstabelecimentos = data;
      });
  }

  ngOnInit(): void {
    this.refreshListaEstabelecimentos();
  }

}
