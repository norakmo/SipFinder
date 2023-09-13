import { Drink } from "../../utils/Types";
import "./ListElement.css";

export default function ListElement(drink: Drink){
    return(
    <div className="drinkElement">
        <div className="picture">
            <img src={drink.photo} className="BookListPhoto" />
        </div>
        <div className="title">
            <h3>{drink.name}</h3>
        </div>
        <div className="favorite">
            <button type="submit" className="filterButton">
                favorite
            </button>
        </div>
    </div>
    )

}