import { Component, OnInit } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { SearchService } from "src/app/services/search.service";
import { SearchItem } from "./../../shared/SearchItemModel";
import { FormControl } from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap
} from "rxjs/operators";

@Component({
  selector: "app-searcher",
  templateUrl: "./searcher.component.html",
  styleUrls: ["./searcher.component.css"]
})
export class SearcherComponent implements OnInit {
  /* resultsRecipes: Object; */
  searchRecipes$ = new Subject();
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchRecipes$).subscribe(results => {
      this.results = results["results"];
    });
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchService.search(term)),
    );
  }
}
