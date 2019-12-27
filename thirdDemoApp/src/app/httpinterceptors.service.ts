import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorsService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler){

  const preq=req.clone({
    url:req.url.replace('http','https'),
    headers:req.headers.set('Content-Type','application/json')
  });
  console.log(preq);
    return next.handle(preq);
  }
  constructor() { }
}
