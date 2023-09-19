import { DrinkElement } from "../../utils/Types";
import "./ListElement.css";

function getLocalState(b: string) {
  let color: string = "";
  if (localStorage.getItem(b) == "favorite") {
    localStorage.setItem(b, "not-favorite");
    color = "filterButton";
    // console.log(localStorage.getItem(b));
    // console.log(b);
  } else if (
    localStorage.getItem(b) == "not-favorite" ||
    localStorage.getItem(b) == null
  ) {
    localStorage.setItem(b, "favorite");
    color = "favorite";
    // console.log(localStorage.getItem(b));
    // console.log(b);
  }
  return color;
}

export default function ListElement({ drink }: DrinkElement) {
  const handleFavoriteClick = () => {
    getLocalState(drink.strDrink);
    window.location.reload();
  };

  return (
    <div className="drinkElement">
      <img src={drink.strDrinkThumb} className="picture" />
      <div className="title">
        <h2>{drink.strDrink}</h2>
      </div>
      <div className="favorite">
        <button
          type="submit"
          className={getLocalState(drink.strDrink)}
          onClick={handleFavoriteClick}
        >
          favorite
        </button>
      </div>
    </div>
  );
}
