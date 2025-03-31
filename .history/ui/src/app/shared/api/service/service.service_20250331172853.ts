import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '@shared/data/env';
import { Service } from '@shared/data/interface';
import { catchError } from 'rxjs';

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

  create(data: Service) {
    return this.http.request('POST', `${this.apiUrl}/services`, {
      withCredentials: true,
      body: data,
    });
  }

  delete(ids: string[]) {
    let params = new HttpParams();
    params = params.appendAll({ ids: ids });

    return this.http.request('DELETE', `${this.apiUrl}/services`, {
      withCredentials: true,
      params: params,
    });
  }
}
