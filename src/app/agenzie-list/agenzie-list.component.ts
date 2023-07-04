import { Component, OnInit } from '@angular/core';
import { AgenziaService } from '../agenzia.service';
import { Agenzia } from '../pw2api.model';

@Component({
  selector: 'app-agenzie-list',
  templateUrl: './agenzie-list.component.html',
  styleUrls: ['./agenzie-list.component.css']
})
export class AgenzieListComponent  implements OnInit {

  agenziaList: Agenzia[] | undefined = [];

  constructor (public agenziaService : AgenziaService) {}

  ngOnInit(): void {
    this.agenziaService.getAgenzie()
      .then( list =>{
        this.agenziaList = list;
      })
  }

}
