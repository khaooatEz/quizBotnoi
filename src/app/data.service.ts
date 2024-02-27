import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient){}

  getData(): Observable<any>{
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/1/');
  }

  getTypespoke(): Observable<any>{
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/1/');
  }

  getStatuspoke(): Observable<any>{
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/1/');
  }

  getimagePoke(): Observable<any>{
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/1/');
  }
}
