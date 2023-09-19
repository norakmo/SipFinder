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

  /*Gets data on all drinks from the API. EnsureQueryData first checks the query cache and only sends
  a request to the API if necessary.*/
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

  function getFavorites() {
    if (!(allDrinks === undefined)) {
      const favorites: SimpleDrinkAPI[] = allDrinks.filter(
        (drink) => localStorage.getItem(drink.idDrink) == "favorite"
      );
      return favorites;
    }
    return [];
  }

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

  useEffect(() => {
    if (sessionStorage.getItem("filter") == "true") {
      handleFilter();
    }
  }, [nonAlcDrinks, allDrinks]);

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
          console.log("her", nonAlcDrinks);
        }
      });
  }
  useEffect(() => {
    if (filter) applyFilter();
  }, [filter]);

  async function applyFilter() {
    if (allDrinks === undefined || nonAlcDrinks === undefined) {
      throw console.error("drinks not found");
    }
    //no filters
    if (!alcoholic && !nonAlcoholic && !favorite) {
      setFilter(false);
      sessionStorage.setItem("filter", "false");
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

    console.log("alc", alcoholic);
    console.log("nonalc", nonAlcoholic);
    console.log("fav", favorite);
  }

  function handleClickAlcoholic() {
    sessionStorage.setItem("alcoholic", (!alcoholic).toString());
    setAlcoholic(!alcoholic);
  }
  function handleClickNonAlcoholic() {
    sessionStorage.setItem("nonAlcoholic", (!nonAlcoholic).toString());
    setNonAlcoholic(!nonAlcoholic);
  }

  function handleClickFavourite() {
    sessionStorage.setItem("favourite", (!favorite).toString());
    setFavourite(!favorite);
  }

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

  function handleFilter() {
    if (!filter) {
      setFilter(true);
      sessionStorage.setItem("filter", "true");
    } else applyFilter();
  }

  return (
    <div className="container">
      <div className="filter">
        <label> Filters:</label>
        <div>
          <label>
            <input
              type="checkbox"
              onClick={handleClickAlcoholic}
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
              onClick={handleClickNonAlcoholic}
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
              onClick={handleClickFavourite}
              checked={favorite}
              id="favourite"
            />
            Favourite
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
                {filteredDrinks.map((drink: SimpleDrinkAPI) => {
                  return <ListElement drink={drink} key={drink.idDrink} />;
                })}
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
