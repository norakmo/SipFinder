import { useState } from "react";
import "./Browse.css";
import { useQueryClient } from "@tanstack/react-query";
import { getAllDrinks } from "../../utils/ApiRequests";

function Browse() {
  const queryClient = useQueryClient();
  const [name, setName] = useState<string>("her");
  async function getData() {
    await queryClient
      .ensureQueryData({ queryKey: ["getAll"], queryFn: () => getAllDrinks() })
      .then((res) => {
        setName(res.drinks[0].strDrink);
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
      <div className="contents">{name}</div>
    </div>
  );
}

export default Browse;
