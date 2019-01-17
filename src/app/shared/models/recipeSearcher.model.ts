import { Observable } from 'rxjs';

import { Recipe } from './Recipe.model';

export abstract class RecipeSearcher {
  searchByName: (name: string) => Observable<Recipe[]>;
}