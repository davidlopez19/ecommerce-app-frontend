import { Injectable } from '@angular/core';
import { BaseService } from './base-api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationRequestModel } from '../../models/authentication-request.model';
import { AuthenticationResponseModel } from '../../models/authentication-response.model';
import {
  BehaviorSubject,
  EMPTY,
  EmptyError,
  Observable,
  catchError,
  map,
  of,
  throwError,
} from 'rxjs';
import { ResponseModel } from '../../models/response.model';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseService {
  constructor(
    private _httpClientResolve: HttpClient,
    private _routerResolve: Router,
    private _messageServiceResolve: MessageService
  ) {
    super(_httpClientResolve, _routerResolve, _messageServiceResolve);
  }

  login(
    loginRequest: AuthenticationRequestModel
  ): Observable<ResponseModel<AuthenticationResponseModel>> {
    return this.post<AuthenticationResponseModel>(
      'api/Authenticate',
      loginRequest,
      false
    ).pipe(
      map((result) => {
        let responseModel = new ResponseModel<AuthenticationResponseModel>();
        responseModel.model = result;
        return responseModel;
      }),
      catchError((err, caught) => {
        let responseModelObservable = this.proccessError(err);
        return responseModelObservable.asObservable();
      })
    );
  }

  private proccessError(err: any) {
    let responseModel = new ResponseModel<AuthenticationResponseModel>();
    console.log(err.error);
    responseModel.statusCode = err.error.StatusCode;
    responseModel.message = err.error.message;
    let responseModelObservable = new BehaviorSubject<
      ResponseModel<AuthenticationResponseModel>
    >(responseModel);
    return responseModelObservable;
  }

  login2(
    loginRequest: AuthenticationRequestModel
  ): Observable<AuthenticationResponseModel> {
    return this.post<AuthenticationResponseModel>(
      'api/Authenticate',
      loginRequest,
      false
    ).pipe(
      map((result) => {
        return result;
      }),
      catchError(this.handleError)
    );
  }
}
