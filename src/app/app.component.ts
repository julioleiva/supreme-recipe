import { Component, OnInit } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { SearchService } from "./services/search.service";
import { Recipe } from "./shared/models/Recipe.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls:["./app.component.css"]
})
export class AppComponent implements OnInit {
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
    this.searchChar.next(word)
  }
}
