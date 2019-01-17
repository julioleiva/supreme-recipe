import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// rxjs
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Models and configs
import { SearchItemResponse } from './../shared/models/SearchItemResponse.model';
import { Recipe } from './../shared/models/Recipe.model';
import { AppSettings } from './../shared/configs/AppSettings';


@Injectable({
  providedIn: "root"
})
export class SearchService {

  constructor(private http: HttpClient) {}

  getRecipes(name: string) : Observable<Recipe[]> {

    if(!name.trim()){
      return of([]);
    }

    const url = `${AppSettings.API_ENDPOINT_ROOT}${AppSettings.API_ENDPOINT_QUERY}${name}`

    return this.http.get<SearchItemResponse>(url).pipe(
      map(response => {
        return response.results;
      }),
      catchError( error => {
        console.log(error)
        return of([]);
      })
    );
  }
}
