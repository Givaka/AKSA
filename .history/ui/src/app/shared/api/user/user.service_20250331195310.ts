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
    return this.http.request<Client[]>('GET', `${this.url}/clients`, {
      withCredentials: true,
    });
  }

  create(data: Client) {
    return this.http.request('POST', `${this.url}/client`, {
      withCredentials: true,
      body: data,
    });
  }

  change(id: string, data: Client) {
    return this.http.request('PUT', `${this.url}/client/${id}`, {
      withCredentials: true,
      body: data,
    });
  }
}
