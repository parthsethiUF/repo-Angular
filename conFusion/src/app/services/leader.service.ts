import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';

import { Restangular } from 'ngx-restangular';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getFeaturedLeaders(): Observable<Leader> {
    return this.restangular.all('leaders').getList({ featured: true })
      .pipe(map(leaders => leaders[0]));
  }
  
}
