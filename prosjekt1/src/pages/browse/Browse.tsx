import { useState } from "react";
import "./Browse.css";

function Browse() {
  const [count, setCount] = useState(0);

  return (
    <>
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
            Ordinary
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Cocktail
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
        <button type="submit" className="button1">
          Apply filter
        </button>
      </div>
    </>
  );
}

export default Browse;
