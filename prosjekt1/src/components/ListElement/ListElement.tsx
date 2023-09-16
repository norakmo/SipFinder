import { SimpleDrinkAPI, DrinkElement } from "../../utils/Types";
import "./ListElement.css";

export default function ListElement({ drink }: DrinkElement) {
  return (
    <div className="drinkElement">
      <img src={drink.strDrinkThumb} className="picture" />
      <div className="title">
        <h2>{drink.strDrink}</h2>
      </div>
      <div className="favorite">
        <button type="submit" className="filterButton">
          favorite
        </button>
      </div>
    </div>
  );
}
