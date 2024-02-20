import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { users_module } from './user-module';

@Injectable({
  providedIn: 'root'
})
export class UserModuleService {

  private Users_API_URL = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }

  get_All_Users(): Observable<users_module[]> {
    return this.httpClient.get<users_module[]>(this.Users_API_URL).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

}
