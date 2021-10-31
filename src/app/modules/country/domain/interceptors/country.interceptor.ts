import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {CountryStoreService} from "../services/country-store.service";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class CountryInterceptor implements HttpInterceptor {

  constructor(
    private countryStoreService: CountryStoreService
  ) {
  }

  /**
   * This handles a simpler loader which is shown on top.
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.countryStoreService.setLoading(true);
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.countryStoreService.setLoading(false);
      }
    }, (error) => {
      this.countryStoreService.setLoading(false);
      return throwError(error);
    }), catchError((error: any) => {
      this.countryStoreService.setLoading(false);
      return throwError(error);
    }));
  }
}
