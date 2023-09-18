import { ApiResponse, ApiResponseSingleDrink } from "./Types";

export const getAllDrinks = (): Promise<ApiResponse> => {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json() as Promise<ApiResponse>;
  });
};

export const getDrink = (): Promise<ApiResponseSingleDrink> => {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}"
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json() as Promise<ApiResponseSingleDrink>;
  });
};
