import { Component, OnInit } from '@angular/core';
import { Agenzia } from '../pw2api.model';
import { AgenziaService } from '../agenzia.service';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-agenzia-dettaglio',
  templateUrl: './agenzia-dettaglio.component.html',
  styleUrls: ['./agenzia-dettaglio.component.css']
})
export class AgenziaDettaglioComponent  implements OnInit {

  agenzia: Agenzia | undefined;

  constructor (public agenziaService : AgenziaService,
                  private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id != null) {
      this.agenziaService.getAgenzia(Number(id))
        .then( agenzia =>{
          this.agenzia = agenzia;
        })
    }
  }

}
