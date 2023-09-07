import { useState } from "react";
import "./Browse.css";

function Browse() {
  const [count, setCount] = useState(0);

  return (
    <>
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
        <div className="drinklist">
          <div className="DrinkElement">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at luctus tortor. 
              Etiam quis tristique neque. Donec dolor erat, ornare vel dapibus sit amet, finibus nec mauris. Etiam volutpat 
              dui sed luctus tempor. Ut dapibus turpis neque, eu porta nunc volutpat id. Nunc malesuada metus vel euismod porta. 
              Fusce lacinia metus est. Morbi suscipit ut metus non rutrum. Vestibulum lectus neque, dapibus eu lorem ac, varius dapibus lorem. 
            </p>
          </div>
          <div className="DrinkElement">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at luctus tortor. 
              Etiam quis tristique neque. Donec dolor erat, ornare vel dapibus sit amet, finibus nec mauris. Etiam volutpat 
              dui sed luctus tempor. Ut dapibus turpis neque, eu porta nunc volutpat id. Nunc malesuada metus vel euismod porta. 
              Fusce lacinia metus est. Morbi suscipit ut metus non rutrum. Vestibulum lectus neque, dapibus eu lorem ac, varius dapibus lorem. 
            </p>
          </div>
          <div className="DrinkElement">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at luctus tortor. 
              Etiam quis tristique neque. Donec dolor erat, ornare vel dapibus sit amet, finibus nec mauris. Etiam volutpat 
              dui sed luctus tempor. Ut dapibus turpis neque, eu porta nunc volutpat id. Nunc malesuada metus vel euismod porta. 
              Fusce lacinia metus est. Morbi suscipit ut metus non rutrum. Vestibulum lectus neque, dapibus eu lorem ac, varius dapibus lorem. 
            </p>
          </div>
          <div className="DrinkElement">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at luctus tortor. 
              Etiam quis tristique neque. Donec dolor erat, ornare vel dapibus sit amet, finibus nec mauris. Etiam volutpat 
              dui sed luctus tempor. Ut dapibus turpis neque, eu porta nunc volutpat id. Nunc malesuada metus vel euismod porta. 
              Fusce lacinia metus est. Morbi suscipit ut metus non rutrum. Vestibulum lectus neque, dapibus eu lorem ac, varius dapibus lorem. 
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Browse;
