import { useQueryClient } from "@tanstack/react-query";
import { getAllDrinks } from "../../utils/ApiRequests";
import { useState } from "react";
import CarouselItem from "../../components/CarouselItem/CarouselItem";
import "./home.css";

export default function Home() {
  const queryClient = useQueryClient();
  const [allIds, setAllIds] = useState<string[]>();
  const [currentItem, setCurrentItem] = useState<number>(0); // index of current slide
  const numberOfItems = 100;

  /* Gets the ids of all the drinks from the API. EnsureQueryData first checks the query cache and only sends
  a request to the API if necessary. The drinkIds are saved in "allIds" */
  async function getData() {
    await queryClient
      .ensureQueryData({
        queryKey: ["getAll"],
        queryFn: () => getAllDrinks(),
      })
      .then((res) => {
        setAllIds(res.drinks.map((drink) => drink.idDrink));
        console.log(res.drinks);
      });
  }

  if (allIds == undefined) {
    getData();
  }

  const handleMoveToNextSlide = function () {
    // check if last slide has been reached
    if (currentItem === numberOfItems - 1) {
      setCurrentItem(0); // go back to first slide
    } else {
      // move to next slide
      setCurrentItem((prevItem) => prevItem + 1);
    }
  };

  const handleMoveToPrevSlide = function () {
    // check if we're on the first slide
    if (currentItem === 0) {
      setCurrentItem(numberOfItems - 1); // move to the last slide
    } else {
      // move back one
      setCurrentItem((prevItem) => prevItem - 1);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel-actions" id="button-prev-container">
        <button
          id="carousel-button-prev"
          aria-label="Previous"
          onClick={handleMoveToPrevSlide}
        >
          &#60;
        </button>
      </div>
      {allIds === undefined ? (
        <>
          <div>Loading ...</div>
        </>
      ) : (
        <>
          <CarouselItem
            drinkId={allIds[currentItem]}
            key={allIds[currentItem]}
          />
        </>
      )}
      <div className="carousel-actions" id="button-next-container">
        <button
          id="carousel-button-next"
          aria-label="Next"
          onClick={handleMoveToNextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
