import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { HttpcacheService } from './httpcache.service';
import { of } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorsService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler){
    //get sivay ni badhi request
    if(req.method !=='GET'){
     return next.handle(req);
    }
    //cache ma find karshe
    const cacheResponce=this._cacheData.get(req);
    //cache result return karse
    if(cacheResponce){
      console.log('from cache');
      return of(cacheResponce);
    }
    //first time or cache expired
    return next.handle(req).pipe(
      tap(x=>{
        if (x instanceof HttpResponse){
          console.log('adding to cache');
          this._cacheData.put(req,x);
        }
      })
    );

  }
  constructor(private _cacheData:HttpcacheService) { }
}
