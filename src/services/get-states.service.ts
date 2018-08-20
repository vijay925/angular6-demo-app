import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from './../models/state.model';

// Service to request states.json using HTTP
@Injectable()
export class GetStatesService {

  constructor(private http: HttpClient) { }

  getStates(url: string): Observable<State[]> {
    return this.http.get<State[]>(url);
}
}
