import { useEffect, useState } from "react";
import { DrinkElement } from "../../utils/Types";
import "./ListElement.css";
import { Link } from "react-router-dom";

export default function ListElement({ drink }: DrinkElement) {
  const [color, setColor] = useState<string>("notfavorite");

  // Checks if the drink is saved as a favorite in localStorage
  useEffect(() => {
    if (localStorage.getItem(drink.idDrink) == "favorite") {
      setColor("favorite");
    } else {
      setColor("notfavorite");
    }
  }, [drink.idDrink]);

  //Makes a drink a favorite or removes it from favorites
  const handleFavoriteClick = () => {
    const state: string | null = localStorage.getItem(drink.idDrink);
    if (state == "favorite") {
      localStorage.setItem(drink.idDrink, "not-favorite");
      setColor("notfavorite");
    } else {
      localStorage.setItem(drink.idDrink, "favorite");
      setColor("favorite");
    }
  };

  // Link to correct drink page
  const drinkLink: string = "/drink/" + drink.idDrink;
  return (
    <div className="drinkElement">
      <img src={drink.strDrinkThumb} className="picture" />
      <Link to={drinkLink} className="title">
        <div>
          <h2>{drink.strDrink}</h2>
        </div>
      </Link>

      <button
        className="favorite-button"
        type="submit"
        id={color}
        onClick={handleFavoriteClick}
      >
        &#x2661;
      </button>
    </div>
  );
}
