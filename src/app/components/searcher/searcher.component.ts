import { Component, OnInit } from "@angular/core";

// RxJS
import { Subject, Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

// Services
import { SearchService } from "../../services/search.service";

// Models
import { Recipe } from "../../shared/models/Recipe.model";

@Component({
  selector: "app-searcher",
  templateUrl: "./searcher.component.html",
  styleUrls: ["./searcher.component.css"]
})
export class SearcherComponent implements OnInit {
  searchChar = new Subject<string>();
  recipes$: Observable<Recipe[]>;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.recipes$ = this.searchChar.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(word => this.searchService.getRecipes(word))
    );
  }

  search(word: string) {
    this.searchChar.next(word);
  }
}
