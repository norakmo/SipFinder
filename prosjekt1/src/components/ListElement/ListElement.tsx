import { useEffect, useState } from "react";
import { DrinkElement } from "../../utils/Types";
import "./ListElement.css";
import { Link } from "react-router-dom";

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
    if (state == "favorite") {
      localStorage.setItem(drink.idDrink, "not-favorite");
      setColor("notfavorite");
    } else {
      localStorage.setItem(drink.idDrink, "favorite");
      setColor("favorite");
    }
  };

  const drinkLink: string = "/drink/" + drink.idDrink;
  return (
    <div className="drinkElement">
      <img src={drink.strDrinkThumb} className="picture" />
      <Link to={drinkLink} className="title">
        <div>
          <h2>{drink.strDrink}</h2>
        </div>
      </Link>

      <div className="favorite">
        <button type="submit" className={color} onClick={handleFavoriteClick}>
          ♥
        </button>
      </div>
    </div>
  );
}
