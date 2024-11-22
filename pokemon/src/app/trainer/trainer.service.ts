import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from './Trainer';
import { TrainerDetail } from './trainer-detail';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private apiUrl: string = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon/';

  constructor(private http: HttpClient) {}

  getListTrainer(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${this.apiUrl}trainers.json`);
  }

  getDetailTrainer(id: string): Observable<TrainerDetail> {
    return this.http.get<TrainerDetail>(`${this.apiUrl}${id}/trainers.json`);
  }
}
