import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchService } from './services/search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  resultsRecipes: Object;
  searchRecipes$ = new Subject<String>();
  
  constructor(private searchService: SearchService ){ 
    this.searchService.search(this.searchRecipes$)
      .subscribe( results => {
        this.resultsRecipes = results['results']
      });
  }

}
