//The properties given in the db when getting detailed information on one drink
export interface DrinkAPI {
  idDrink: string;
  strDrink: string;
  strAlcoholic: string;
  strInstructions: string;
  strDrinkThumb: string;

  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;

  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
}

// The properties given in the db when getting data about a list of drinks
export interface SimpleDrinkAPI {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

// The props for ListElement
export interface DrinkElement {
  drink: SimpleDrinkAPI;
}

// The props for CarouselItem
export interface CarouselDrink {
  drinkId: string;
}

//Simplified interface
export interface Drink {
  id: string;
  name: string;
  alc: boolean;
  instructions: string;
  photo: string;
  ingredients: string[];
  measures: string[];
}

// Interface for the response given by the REST API when requesting data on a list of drinks
export interface ApiResponse {
  drinks: SimpleDrinkAPI[];
}

// Interface for the response given by the REST API when requesting data on a single drink
export interface ApiResponseSingleDrink {
  drinks: DrinkAPI[];
}

export function transformDrink(drinkAPI: DrinkAPI): Drink {
  const ingredients: string[] = [];
  const measures: string[] = [];

  const allIngredients = [
    drinkAPI.strIngredient1,
    drinkAPI.strIngredient2,
    drinkAPI.strIngredient3,
    drinkAPI.strIngredient4,
    drinkAPI.strIngredient5,
    drinkAPI.strIngredient6,
    drinkAPI.strIngredient7,
    drinkAPI.strIngredient8,
    drinkAPI.strIngredient9,
    drinkAPI.strIngredient10,
    drinkAPI.strIngredient11,
    drinkAPI.strIngredient12,
    drinkAPI.strIngredient13,
    drinkAPI.strIngredient14,
    drinkAPI.strIngredient15,
  ];

  const allMeasures = [
    drinkAPI.strMeasure1,
    drinkAPI.strMeasure2,
    drinkAPI.strMeasure3,
    drinkAPI.strMeasure4,
    drinkAPI.strMeasure5,
    drinkAPI.strMeasure6,
    drinkAPI.strMeasure7,
    drinkAPI.strMeasure8,
    drinkAPI.strMeasure9,
    drinkAPI.strMeasure10,
    drinkAPI.strMeasure11,
    drinkAPI.strMeasure12,
    drinkAPI.strMeasure13,
    drinkAPI.strMeasure14,
    drinkAPI.strMeasure15,
  ];

  //Adds the ingredients and measures if they are not null
  for (let i = 0; i <= 14; i++) {
    const ingredient = allIngredients[i];
    const measure = allMeasures[i];

    if (ingredient && measure) {
      ingredients.push(ingredient);
      measures.push(measure);
    }
  }

  return {
    id: drinkAPI.idDrink,
    name: drinkAPI.strDrink,
    alc: drinkAPI.strAlcoholic === "Alcoholic",
    instructions: drinkAPI.strInstructions,
    photo: drinkAPI.strDrinkThumb,
    ingredients,
    measures,
  };
}
