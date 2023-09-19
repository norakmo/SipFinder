import { useEffect, useState } from "react";
import { DrinkElement } from "../../utils/Types";
import "./ListElement.css";

export default function ListElement({ drink }: DrinkElement) {
  const [color, setColor] = useState<string>();
  useEffect(() => {
    if (localStorage.getItem(drink.idDrink) == "favorite") {
      setColor("favorite");
    } else {
      setColor("notfavorite");
    }
  }, []);

  const handleFavoriteClick = () => {
    const state: string | null = localStorage.getItem(drink.idDrink);
    console.log(state);
    if (state == "favorite") {
      localStorage.setItem(drink.idDrink, "not-favorite");
      setColor("notfavorite");
    } else {
      localStorage.setItem(drink.idDrink, "favorite");
      setColor("favorite");
    }
  };

  return (
    <div className="drinkElement">
      <img src={drink.strDrinkThumb} className="picture" />
      <div className="title">
        <h2>{drink.strDrink}</h2>
      </div>
      <div className="favorite">
        <button type="submit" className={color} onClick={handleFavoriteClick}>
          ♥
        </button>
      </div>
    </div>
  );
}
