import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agenzia } from './pw2api.model';

@Injectable({
  providedIn: 'root'
})
export class AgenziaService {

  baseurl = 'http://localhost:8000/api/agenzie';

  constructor(private http: HttpClient) { }

  getAgenzie(): Promise<Agenzia[] | undefined> {
    const url =` ${this.baseurl}`;
    return this.http.get<Agenzia[]>(url).toPromise();

  }

  getAgenzia(id: number): Promise<Agenzia | undefined> {
    const url =` ${this.baseurl}/${id}`;
    return this.http.get<Agenzia>(url).toPromise();

  }

}
