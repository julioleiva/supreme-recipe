import { Recipe } from './Recipe.model';

export interface SearchItemResponse {
    title: string,
    href: string,
    ingredients: string,
    results: Recipe[]
}