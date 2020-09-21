import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient) {
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    console.log('--> ApiService.get()');
    return this.http.get(path, { params });
  }

  put(path: string, body: Object = {}): Observable<any> {
    console.log('--> ApiService.put()');
    return this.http.put(path,
      JSON.stringify(body)
    );
  }

  post(path: string, body: Object = {}): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    console.log('--> ApiService.post()');
    return this.http.post(path,
      JSON.stringify(body), httpOptions
    );
  }

  delete(path: string): Observable<any> {
    console.log('--> ApiService.delete()');
    return this.http.delete(path
    );
  }
}
