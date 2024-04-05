import {
  HttpHeaders,
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public headers: HttpHeaders;
  public API_ROOT = 'https://eccommerce.azurewebsites.net/';

  constructor(
    protected _httpClient: HttpClient,
    protected router: Router,
    protected messageService: MessageService
  ) {
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
  }

  public addAutorization() {
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${this.getTokenFromCookie()}`,
    });
  }

  public get<Tmodel>(
    endPoint: string,
    queryString: string,
    authorization?: boolean
  ): Observable<Tmodel> {
    if (authorization) {
      this.addAutorization();
    }
    return this._httpClient
      .get<Tmodel>(`${this.API_ROOT}${endPoint}${queryString}`, {
        headers: this.headers,
      })
      .pipe();
  }

  public post<Tmodel>(
    endPoint: string,
    object: any,
    addAutorization?: boolean
  ): Observable<Tmodel> {
    if (addAutorization) {
      this.addAutorization();
    }
    return this._httpClient
      .post<Tmodel>(`${this.API_ROOT}${endPoint}`, object, {
        headers: this.headers,
      })
      .pipe();
  }

  public getDownloadFile(endPoint: string, object: any, mimeTypeFile: string) {
    this._httpClient
      .post(`${this.API_ROOT}${endPoint}`, object, {
        responseType: 'arraybuffer',
      })
      .subscribe((response) => this.postDownloadFile(response, mimeTypeFile));
  }

  public postDownloadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }

  public handleError(err: HttpErrorResponse): Observable<never> {
    if (err.error.statusCode == 401) {
      // this.router.navigateByUrl('authentication');

      // this.messageService.add({
      //   severity: 'warn',
      //   summary: 'Warn',
      //   detail: 'Su sesion ha expirado',
      // });
    }

    // just a test ... more could would go here
    return throwError(() => err);
  }

  /**
   *Metodo para obtener la url a donde se va a consumir el api
   *
   * @private
   * @param {string} baseulr url, en caso de que esta sea null se pondra por defecto la de concreto webapi
   * @return {*}  {string} retornar la url para consumir el api
   * @memberof DataService
   */
  private getUrl(baseUrl: string): string {
    if (!baseUrl) return this.API_ROOT;
    return baseUrl;
  }

  private getTokenFromCookie() {
    return localStorage.getItem('token');
  }

  private getCookie(name: string): string {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;
    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }
}
