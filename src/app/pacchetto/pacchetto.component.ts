import { Component, Input, OnInit } from '@angular/core';
import { Pacchetto } from '../pw2api.model';
import { PacchettoService } from '../pacchetto.service';

@Component({
  selector: 'app-pacchetto',
  templateUrl: './pacchetto.component.html',
  styleUrls: ['./pacchetto.component.css']
})
export class PacchettoComponent implements OnInit {


  @Input() pacchetto: Pacchetto | null = null;

  constructor(public pacchettoService: PacchettoService){}

  ngOnInit(): void {}

}
