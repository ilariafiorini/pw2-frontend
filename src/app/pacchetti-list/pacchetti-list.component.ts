import { Component, OnInit } from '@angular/core';
import { PacchettoService } from '../pacchetto.service';
import { Pacchetto } from '../pw2api.model';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pacchetti-list',
  templateUrl: './pacchetti-list.component.html',
  styleUrls: ['./pacchetti-list.component.css']
})


export class PacchettiListComponent implements OnInit {

 pacchettoList: Pacchetto[] | undefined = [];

 agenzia: number = 0;

  constructor (public pacchettoService : PacchettoService,
    private activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.agenzia = Number(id);

    this.pacchettoService.getPacchetti(Number(id))
      .then( list =>{
        this.pacchettoList = list;
      })
  }

}


