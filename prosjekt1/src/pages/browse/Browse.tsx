import { useState } from "react";
import "./Browse.css";

function Browse() {

  function getState(){
    if (localStorage.getItem("button") == "favorite") {
      localStorage.setItem("button", "not-favorite")
      console.log(localStorage.getItem("button"))
    }

    else if (localStorage.getItem("button") == "not-favorite" || localStorage.getItem("button") == null){
      localStorage.setItem("button", "favorite")
      console.log(localStorage.getItem("button"))
    }
    
  }
  const [count, setCount] = useState(0);

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
        <div className="drinkElement">
          <div className="picture">
            Picture
          </div>
          <div className="title">
            <h3>Clink clink</h3>
            <p></p>
          </div>
          <div className="favorite">
            <button type="submit" className="filterButton">
              favorite
            </button>
          </div>
        </div>
        <div className="drinkElement">
          <div className="picture">
            Picture
          </div>
          <div className="title">
            <h3>Clink clink</h3>
            <p></p>
          </div>
          <div className="favorite">
            <button type="submit" className="filterButton" style={{ backgroundColor: 'blue' }} onClick={getState}>
              favorite
            </button>
          </div>
        </div>
        <div className="drinkElement">
          <div className="picture">
            Picture
          </div>
          <div className="title">
            <h3>Clink clink</h3>
            <p></p>
          </div>
          <div className="favorite">
            <button type="submit" className="filterButton">
              favorite
            </button>
          </div>
        </div>
        <div className="drinkElement">
          <div className="picture">
            Picture
          </div>
          <div className="title">
            <h3>Clink clink</h3>
          </div>
          <div className="favorite">
            <button type="submit" className="filterButton">
              favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Browse;
