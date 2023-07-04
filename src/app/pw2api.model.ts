export interface Pacchetto {

  id: number;
  destinazione: string;
  durata: number;
  prezzo: number;
  agenzia_id: number;

}

export interface Agenzia {

  id: number;
  nome: string;
  indirizzo: string;
  tel: string;

}

