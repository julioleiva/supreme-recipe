import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  urlRoot: String = 'http://www.recipepuppy.com/api/';
  recipeQuery: String = '?q=';

  constructor(private http: HttpClient) { }
  
  search(items: Observable<String>) {
    return items.debounceTime(400)
      .switchMap( (item: String) => this.searchInputs(item));
  } 

  searchInputs(item: String) {
    return this.http
      .get(`${this.urlRoot}${this.recipeQuery}${item}`)
  }
}
