import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Posts } from './posts';
import { Albums } from './albums';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class DataUserIdService {

  private Posts_API_URL = "https://jsonplaceholder.typicode.com/posts";
  private Albums_API_URL = "https://jsonplaceholder.typicode.com/albums";
  private Todos_API_URL = "https://jsonplaceholder.typicode.com/todos";

  constructor(private httpClient: HttpClient) { }

  getPostsByUserId(userId: number): Observable<Posts[]> {
    const url = `${this.Posts_API_URL}?userId=${userId}`;
    return this.httpClient.get<Posts[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  getAlbumsByUserId(userId: number): Observable<Albums[]> {
    const url = `${this.Albums_API_URL}?userId=${userId}`;
    return this.httpClient.get<Albums[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  getTodosByUserId(userId: number): Observable<Todos[]> {
    const url = `${this.Todos_API_URL}?userId=${userId}`;
    return this.httpClient.get<Todos[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

}
