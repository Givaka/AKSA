import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '@shared/data/env';
import { Client } from '@shared/data/interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly url = env.apiURL;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.request<Client[]>('GET', `${this.url}/client`, {
      withCredentials: true,
    });
  }
}
