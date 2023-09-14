import { useQueryClient } from "@tanstack/react-query";
import "./CarouselItem.css";
import { useState } from "react";
import {
  ApiResponseSingleDrink,
  CarouselDrink,
  Drink,
  DrinkAPI,
  transformDrink,
} from "../../utils/Types";

export default function CarouselItem({ drinkId }: CarouselDrink) {
  const queryClient = useQueryClient();
  const [drinkData, setDrinkData] = useState<DrinkAPI>();

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
          //const drink = transformDrink(res.drinks[0]);
          setDrinkData(res.drinks[0]);
          console.log("drinkData", drinkData);
          console.log(res.drinks[0]);
          console.log("hei");
          console.log(drinkId);
          /*for (let i = 0; i < drink.ingredients.length; i++) {
            console.log(drink.ingredients[i]);
          }*/
        }
      });
  }

  if (drinkData == undefined) {
    getData();
  }

  return (
    <div className="carousel-item">
      {drinkData === undefined ? (
        <>
          <div>Loading ...</div>
        </>
      ) : (
        <>
          <p>{drinkData.strDrink}</p>
          <img src={drinkData.strDrinkThumb} alt="drink" />
          <div className="ingredients">
            <p>Ingredients</p>
          </div>
          <p>Instructions:</p>
        </>
      )}
    </div>
  );
}
