import { render, screen, fireEvent } from "@testing-library/react";
import { expect, it } from "vitest";
import ListElement from "../components/ListElement/ListElement";
import { BrowserRouter } from "react-router-dom";

//file for testing local state

//clears local storage before each test
describe("Check LocalState", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  //changes color of the heart when clicked (favorited)
  it("Should set 'favorite' color when localStorage has 'favorite' state", () => {
    const drink = {
      idDrink: "1",
      strDrink: "Amaretto Sour",
      strDrinkThumb: "amaretto.jpg",
    };
    //set local storage to favorite
    localStorage.setItem(drink.idDrink, "favorite");
    render(
      <BrowserRouter basename="/">
        <ListElement drink={drink} />
      </BrowserRouter>
    );
    const favoriteButton = screen.getByRole("button", { name: "♡" });
    expect(favoriteButton.classList.contains("favorite")).toBe(true);
  });

  //changes color of the heart is clicked again (unfavorited)
  it("Set 'notfavorite' color when localStorage has 'not-favorite' state", () => {
    const drink = {
      idDrink: "2",
      strDrink: "Mojito",
      strDrinkThumb: "mojito.jpg",
    };
    //set local storage to  not-favorite
    localStorage.setItem(drink.idDrink, "not-favorite");
    render(
      <BrowserRouter basename="/">
        <ListElement drink={drink} />
      </BrowserRouter>
    );
    const favoriteButton = screen.getByRole("button", { name: "♡" });
    expect(favoriteButton.classList.contains("notfavorite")).toBe(true);
  });

  it("Toggles the state in localStorage when the favorite button is clicked", () => {
    const drink = {
      idDrink: "3",
      strDrink: "Pina Colada",
      strDrinkThumb: "pinacolada.jpg",
    };
    //checks that local storage is like expected
    render(
      <BrowserRouter basename="/">
        <ListElement drink={drink} />
      </BrowserRouter>
    );
    const favoriteButton = screen.getByRole("button", { name: "♡" });

    fireEvent.click(favoriteButton);
    expect(localStorage.getItem(drink.idDrink)).toBe("favorite");
    expect(favoriteButton.classList.contains("favorite")).toBe(true);

    fireEvent.click(favoriteButton);
    expect(localStorage.getItem(drink.idDrink)).toBe("not-favorite");
    expect(favoriteButton.classList.contains("notfavorite")).toBe(true);
  });
});
