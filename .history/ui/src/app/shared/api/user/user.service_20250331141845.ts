import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '@shared/data/env';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url = env.apiURL

  constructor(private http: HttpClient) { }
}
