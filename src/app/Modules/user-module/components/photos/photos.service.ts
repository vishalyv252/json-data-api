import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Photos } from './photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private Photos_API_URL = "https://jsonplaceholder.typicode.com/photos";

  constructor(private httpClient: HttpClient) { }

  getPhotosById(id: number): Observable<Photos[]> {
    const url = `${this.Photos_API_URL}?id=${id}`;
    return this.httpClient.get<Photos[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

}
