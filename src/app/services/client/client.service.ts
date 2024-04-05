import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base-api.service';
import { HttpClient } from '@angular/common/http';
import { ClientModel } from '../../models/clients/clients-response.model';
import { Observable, catchError, map } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends BaseService {
  constructor(
    private _httpClientResolve: HttpClient,
    private _routerResolve: Router,
    private _messageServiceResolve: MessageService
  ) {
    super(_httpClientResolve, _routerResolve, _messageServiceResolve);
  }

  getAllClients(): Observable<ClientModel[]> {
    return this.get<ClientModel[]>('api/Clientes', '', true).pipe(
      map((result) => {
        return result;
      }),
      catchError(this.handleError)
    );
  }

  getClient(idClient: number): Observable<ClientModel> {
    return this.get<ClientModel>(
      'api/Clientes/',
      idClient.toString(),
      true
    ).pipe(
      map((result) => {
        return result;
      }),
      catchError(this.handleError)
    );
  }

  saveClient(requestClient: ClientModel): Observable<ClientModel> {
    return this.post<ClientModel>(
      'api/Clientes/Create',
      requestClient,
      true
    ).pipe(
      map((result) => {
        return result;
      }),
      catchError(this.handleError)
    );
  }

  updateClient(requestClient: ClientModel): Observable<ClientModel> {
    return this.post<ClientModel>(
      'api/Clientes/Update',
      requestClient,
      true
    ).pipe(
      map((result) => {
        return result;
      }),
      catchError(this.handleError)
    );
  }
}
