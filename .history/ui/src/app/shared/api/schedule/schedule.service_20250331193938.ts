import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '@shared/data/env';
import { Schedule } from '@shared/data/interface';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private readonly apiUrl = env.apiURL;

  constructor(private http: HttpClient) {}

  get() {
    return this.http.request<Schedule>('GET', `${this.apiUrl}/schedule`, {
      withCredentials: true,
    });
  }
}
