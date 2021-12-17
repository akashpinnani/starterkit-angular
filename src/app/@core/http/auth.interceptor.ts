/*
 * File: auth.interceptor.ts
 * Project: tasky
 * File Created: Wednesday, 24th March 2021 3:02:54 pm
 * Author: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Last Modified: Wednesday, 24th March 2021 3:03:49 pm
 * Modified By: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Copyright 2020 - 2021 Mutual Mobile, Mutual Mobile
 */

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // check if access token is available
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    if (credentials?.accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + credentials.accessToken,
        },
      });
    }

    return next.handle(request);
  }
}
