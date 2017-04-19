export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public recipeAuthor: string,
    public recipeUrl: string,
    public servingsNumber: number,
    public ingredients: string[],
    public instructions: object[],
    public imageUrl: string) {
    }
}
