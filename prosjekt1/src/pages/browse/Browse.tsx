import { useEffect, useState } from "react";
import "./Browse.css";
import { useQueryClient } from "@tanstack/react-query";
import { getAllDrinks, getNonAlcDrinks } from "../../utils/ApiRequests";
import { SimpleDrinkAPI } from "../../utils/Types";
import ListElement from "../../components/ListElement/ListElement";

function Browse() {
  const queryClient = useQueryClient();
  const [allDrinks, setAllDrinks] = useState<SimpleDrinkAPI[]>();
  const [nonAlcDrinks, setNonAlcDrinks] = useState<string[]>();
  const [filter, setFilter] = useState<boolean>(false);
  const [filteredDrinks, setFilteredDrinks] = useState<SimpleDrinkAPI[]>();
  const [alcoholic, setAlcoholic] = useState<boolean>(false);
  const [nonAlcoholic, setNonAlcoholic] = useState<boolean>(false);
  const [favorite, setFavourite] = useState<boolean>(false);

  /* Gets data on all drinks from the API. EnsureQueryData first checks the query cache and only sends
  a request to the API if necessary. The drinks are saved in "allDrinks" */
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

  /* Returns a list of favorite drinks. Favorites are stored in localStorage.*/
  function getFavorites() {
    if (!(allDrinks === undefined)) {
      const favorites: SimpleDrinkAPI[] = allDrinks.filter(
        (drink) => localStorage.getItem(drink.idDrink) == "favorite"
      );
      return favorites;
    }
    return [];
  }

  /* Gets a list of the ids of all non-alcoholic drinks from the API (or cache) 
  and stores them in "nonAlcDrinks"*/
  async function getNonAlcData() {
    await queryClient
      .ensureQueryData({
        queryKey: ["getNonAlc"],
        queryFn: () => getNonAlcDrinks(),
      })
      .then((res) => {
        if (res === undefined) {
          throw console.error("drinks not found");
        } else {
          setNonAlcDrinks(res.drinks.map((drink) => drink.idDrink));
        }
      });
  }

  /* Puts the drinks that match the ckecked attributes in the "filteredDrinks"-list */
  async function applyFilter() {
    if (allDrinks === undefined || nonAlcDrinks === undefined) {
      //Waitfor drinks to load, error will be thrown if data can't be found
    } else {
      //no filters
      if (!alcoholic && !nonAlcoholic && !favorite) {
        setFilter(false);
      }
      //both alcoholic and non-alcoholic -> no results
      if (alcoholic && nonAlcoholic) {
        setFilteredDrinks([]);
      }
      //alcoholic drinks
      if (alcoholic && !nonAlcoholic && !favorite) {
        setFilteredDrinks(
          allDrinks.filter((drink) => !nonAlcDrinks.includes(drink.idDrink))
        );
      }
      //non-alcoholic drinks
      if (!alcoholic && nonAlcoholic && !favorite) {
        setFilteredDrinks(
          allDrinks.filter((drink) => nonAlcDrinks.includes(drink.idDrink))
        );
      }
      //favorite drinks
      if (!alcoholic && !nonAlcoholic && favorite) {
        setFilteredDrinks(getFavorites());
      }
      //favorite alcoholic drinks
      if (alcoholic && !nonAlcoholic && favorite) {
        setFilteredDrinks(
          allDrinks.filter(
            (drink) =>
              !nonAlcDrinks.includes(drink.idDrink) &&
              getFavorites().includes(drink)
          )
        );
      }
      //favorite non-alcoholic drinks
      if (!alcoholic && nonAlcoholic && favorite) {
        setFilteredDrinks(
          allDrinks.filter(
            (drink) =>
              nonAlcDrinks.includes(drink.idDrink) &&
              getFavorites().includes(drink)
          )
        );
      }

      //update sessionStorage
      sessionStorage.setItem("alcoholic", alcoholic.toString());
      sessionStorage.setItem("nonAlcoholic", nonAlcoholic.toString());
      sessionStorage.setItem("favourite", favorite.toString());
    }
  }

  //Sets the alcoholic-state to the opposite of the previous value
  function handleClickAlcoholic() {
    setAlcoholic(!alcoholic);
  }
  //Sets the nonAlcoholic-state to the opposite of the previous value
  function handleClickNonAlcoholic() {
    setNonAlcoholic(!nonAlcoholic);
  }
  //Sets the favorite-state to the opposite of the previous value
  function handleClickFavourite() {
    setFavourite(!favorite);
  }

  //Resets all filters and updates sessionStorage
  function handleClear() {
    setFilter(false);
    setAlcoholic(false);
    setNonAlcoholic(false);
    setFavourite(false);
    sessionStorage.setItem("alcoholic", "false");
    sessionStorage.setItem("nonAlcoholic", "false");
    sessionStorage.setItem("favourite", "false");
    sessionStorage.setItem("filter", "false");
  }

  //Applies a filter to the list or updates the already existing filters
  function handleFilter() {
    if (!filter) {
      setFilter(true);
      sessionStorage.setItem("filter", "true");
    } else applyFilter();
  }

  //Initial useEffect that runs at mount. Gets drink-data and restores the states from sessionStorage.
  useEffect(() => {
    getData();
    getNonAlcData();
    if (sessionStorage.getItem("filter") == "true") {
      if (sessionStorage.getItem("alcoholic") == "true") {
        setAlcoholic(true);
      }
      if (sessionStorage.getItem("nonAlcoholic") == "true") {
        setNonAlcoholic(true);
      }
      if (sessionStorage.getItem("favourite") == "true") {
        setFavourite(true);
      }
      handleFilter();
    }
    if (sessionStorage.getItem("alcoholic") == null)
      sessionStorage.setItem("alcoholic", "false");
    if (sessionStorage.getItem("nonAlcoholic") == null)
      sessionStorage.setItem("nonAlcoholic", "false");
    if (sessionStorage.getItem("favourite") == null)
      sessionStorage.setItem("favourite", "false");
  }, []);

  //Applies filtes if saved in sessionStorage
  useEffect(() => {
    if (sessionStorage.getItem("filter") == "true") {
      handleFilter();
    }
  }, [nonAlcDrinks, allDrinks]);

  //Applies filters if filter-state is set to true
  useEffect(() => {
    if (filter) applyFilter();
  }, [filter]);

  return (
    <div className="container">
      <div className="filter">
        <label>
          {" "}
          <h3>Filters</h3>
        </label>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={handleClickAlcoholic}
              checked={alcoholic}
              id="alcoholic"
            />
            Alcoholic
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={handleClickNonAlcoholic}
              checked={nonAlcoholic}
              id="nonAlcoholic"
            />
            Non-alcoholic
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={handleClickFavourite}
              checked={favorite}
              id="favourite"
            />
            Favorite
          </label>
        </div>
        <button type="submit" className="filterButton" onClick={handleFilter}>
          Apply filter
        </button>
        <button type="submit" className="clearButton" onClick={handleClear}>
          Clear filters
        </button>
      </div>
      <div className="contents">
        {filter ? (
          <>
            {filteredDrinks === undefined ? (
              <>
                <div>Loading ...</div>
              </>
            ) : (
              <>
                {filteredDrinks.length == 0 ? (
                  <>
                    <div> No drinks match the search </div>
                  </>
                ) : (
                  <>
                    {filteredDrinks.map((drink: SimpleDrinkAPI) => {
                      return <ListElement drink={drink} key={drink.idDrink} />;
                    })}
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Browse;
