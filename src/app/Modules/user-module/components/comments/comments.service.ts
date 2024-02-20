import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { comments } from './comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private Comments_API_URL = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private httpClient: HttpClient) { }

  getCommentsById(id: number): Observable<comments[]> {
    const url = `${this.Comments_API_URL}${id}/comments`;
    return this.httpClient.get<comments[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

}
