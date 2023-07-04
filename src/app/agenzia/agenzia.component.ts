import { Component, Input, OnInit } from '@angular/core';
import { AgenziaService } from '../agenzia.service';
import { Agenzia } from '../pw2api.model';

@Component({
  selector: 'app-agenzia',
  templateUrl: './agenzia.component.html',
  styleUrls: ['./agenzia.component.css']
})
export class AgenziaComponent implements OnInit {


  @Input() agenzia: Agenzia | null = null;

  constructor(public agenziaService: AgenziaService){}

  ngOnInit(): void {}

}
