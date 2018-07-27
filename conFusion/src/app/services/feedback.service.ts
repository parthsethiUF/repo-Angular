import { Injectable } from '@angular/core';

import { Feedback } from '../shared/feedback';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private restangular: Restangular) { }


  submitFeedback(feedback: Feedback): Observable<Feedback> {
    return this.restangular.all('feedback').post(feedback);
  }


}
