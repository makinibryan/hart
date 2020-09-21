import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MultiPurposeService {

  constructor(private http: HttpClient) { }

  submitContactForm(contactForm: any): Observable<any> {

    const headerOptions = new HttpHeaders();
    headerOptions.set('Content-Type', 'application/json');

    console.log(`--> MultiPurpose.submitContactForm(${contactForm.email})`);
    return this.http.post('/api/MultiPurpose/ProcessContactForm', contactForm, { headers: headerOptions }).pipe(
      catchError(this.handleError)
    );
  }

  submitInquiryForm(inquiryForm: any): Observable<any> {

    const headerOptions = new HttpHeaders();
    headerOptions.set('Content-Type', 'application/json');

    console.log(`--> MultiPurpose.submitInquiryForm(${inquiryForm.email})`);
    return this.http.post('/api/MultiPurpose/ProcessInquiryForm', inquiryForm, { headers: headerOptions }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
