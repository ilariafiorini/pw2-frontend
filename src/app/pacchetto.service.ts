import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pacchetto } from './pw2api.model';

@Injectable({
  providedIn: 'root'
})
export class PacchettoService {


 baseurl = 'http://localhost:8000/api/pacchettiagenzia';

  constructor(private http: HttpClient) { }


  getPacchetti(idagenzia: number): Promise<Pacchetto[] | undefined> {
    const url =` ${this.baseurl}/${idagenzia}`;
    console.log(url);
    return this.http.get<Pacchetto[]>(url).toPromise();

  }

}
