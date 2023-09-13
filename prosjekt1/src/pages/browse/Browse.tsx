import { useState } from "react";
import "./Browse.css";
import { useQueryClient } from "@tanstack/react-query";
import { getAllDrinks } from "../../utils/ApiRequests";
import { ApiResponse, SimpleDrinkAPI } from "../../utils/Types";
import ListElement from "../../components/ListElement/ListElement";

function Browse() {
  const queryClient = useQueryClient();
  const [allDrinks, setAllDrinks] = useState<SimpleDrinkAPI[]>();
  async function getData() {
    await queryClient
      .ensureQueryData({ queryKey: ["getAll"], queryFn: () => getAllDrinks() })
      .then((res) => {
        if (res === undefined) {
          throw console.error("drinks not found");
        } else {
          setAllDrinks(res.drinks);
        }
      });
  }
  getData();

  // function getState(){
  //   if (localStorage.getItem("button") == "favorite") {
  //     localStorage.setItem("button", "not-favorite")
  //     console.log(localStorage.getItem("button"))
  //   }

  //   else if (localStorage.getItem("button") == "not-favorite" || localStorage.getItem("button") == null){
  //     localStorage.setItem("button", "favorite")
  //     console.log(localStorage.getItem("button"))
  //   }

  // }

  return (
    <div className="container">
      <div className="filter">
        <label> Filters:</label>
        <div>
          <label>
            <input type="checkbox" />
            Alcoholic
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Non-alcoholic
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Cocktail glass
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Champagne flute
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Favourite
          </label>
        </div>
        <button type="submit" className="filterButton">
          Apply filter
        </button>
      </div>
      <div className="contents">
        {allDrinks === undefined ? (
          <>
            <div>Loading ...</div>
          </>
        ) : (
          <>
            {allDrinks.map((drink: SimpleDrinkAPI) => {
              return <ListElement drink={drink} key={drink.idDrink} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Browse;
