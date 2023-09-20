import { useQueryClient } from "@tanstack/react-query";
import "./CarouselItem.css";
import { useEffect, useState } from "react";
import {
  ApiResponseSingleDrink,
  CarouselDrink,
  DrinkAPI,
  transformDrink,
} from "../../utils/Types";

export default function CarouselItem({ drinkId }: CarouselDrink) {
  const queryClient = useQueryClient();
  const [drinkData, setDrinkData] = useState<DrinkAPI>();

  /* Gets data on all drinks from the API. EnsureQueryData first checks the query cache and only sends
  a request to the API if necessary. The drinks are saved in "allDrinks" */
  async function getData() {
    await queryClient
      .ensureQueryData({
        queryKey: ["getDrink", drinkId],
        queryFn: () =>
          fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
              drinkId
          ).then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json() as Promise<ApiResponseSingleDrink>;
          }),
      })
      .then((res) => {
        if (res === undefined) {
          throw console.error("Drink not found");
        } else {
          setDrinkData(res.drinks[0]);
        }
      });
  }

  if (drinkData == undefined) {
    getData();
  }

  // Connects the ingredients to the correct measurement
  function formatIngredients(drink: DrinkAPI) {
    const transformedDrink = transformDrink(drink);
    const container = document.getElementById("ingredients-and-measures");
    if (container) {
      container.innerHTML = "";
      for (let i = 0; i < transformedDrink.ingredients.length; i++) {
        const ingredient = document.createElement("p");
        ingredient.innerHTML =
          transformedDrink.ingredients[i] + ": " + transformedDrink.measures[i];
        container.appendChild(ingredient);
      }
    }
  }

  useEffect(() => {
    if (drinkData) {
      formatIngredients(drinkData);
    }
  }, [drinkData]);

  return (
    <div className="carousel-item">
      {drinkData === undefined ? (
        <>
          <div>Loading ...</div>
        </>
      ) : (
        <>
          <p className="drinkname">{drinkData.strDrink}</p>
          <img src={drinkData.strDrinkThumb} alt="drink" />
          <div id="ingredients-and-measures"></div>
          <p>
            <b>Instructions: </b>
            {drinkData.strInstructions}
          </p>
        </>
      )}
    </div>
  );
}
