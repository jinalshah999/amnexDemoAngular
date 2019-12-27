import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { tap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttploggerService implements HttpInterceptor  {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const startTime = Date.now();
    let status: string;

    return next.handle(req).pipe(
      tap(
        event => {
          status = "";
          if (event instanceof HttpResponse) {
            status = "succeeded";
          }
        },
        error => (status = "failed")
      ),
      finalize(() => {
        const elapsedTime = Date.now() - startTime;
        const message =
          req.method +
          " " +
          req.urlWithParams +
          " " +
          status +
          " in " +
          elapsedTime +
          "ms";

        this.logDetails(message);
      })
    );
  }
  private logDetails(msg: string) {
    console.log(msg);
  }

  constructor() { }
}
