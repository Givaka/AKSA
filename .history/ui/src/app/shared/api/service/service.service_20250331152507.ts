import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '@shared/data/env';
import { Service } from '@shared/data/interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private readonly apiUrl = env.apiURL;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.request<Service[]>('GET', `${this.apiUrl}/services`, {
      withCredentials: true,
    });
  }
}
