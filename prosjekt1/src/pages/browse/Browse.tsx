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

  function getSessionState(id: string) {
    let choice = document.getElementById(id) as HTMLInputElement;
    if (localStorage.getItem(id) == "checked") {
      localStorage.setItem(id, "unchecked");
    } else if (
      localStorage.getItem(id) == "unchecked" ||
      localStorage.getItem(id) == null
    ) {
      localStorage.setItem(id, "checked");
    }
    console.log(localStorage.getItem(id));
    return localStorage.getItem(id);
  }

  function filter() {
    if (getSessionState("alcoholic") == "checked") {
      const checkbox = document.getElementById(
        "alcoholic"
      ) as HTMLInputElement | null;
      if (checkbox != null) {
        checkbox.checked = false;
      }
    }
    window.location.reload();
  }

  return (
    <div className="container">
      <div className="filter">
        <label> Filters:</label>
        <div>
          <label>
            <input
              type="checkbox"
              id="alcoholic"
              onClick={() => getSessionState("alcoholic")}
            />
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
            Favourite
          </label>
        </div>
        <button type="submit" className="filterButton" onClick={filter}>
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
