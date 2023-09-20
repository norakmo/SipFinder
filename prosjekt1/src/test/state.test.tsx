import { render, screen, fireEvent } from "@testing-library/react";
import { expect, it } from "vitest";
import ListElement from "../components/ListElement/ListElement";

describe("Check LocalState", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Should set 'favorite' color when localStorage has 'favorite' state", () => {
    const drink = {
      idDrink: "1",
      strDrink: "Amaretto Sour",
      strDrinkThumb: "amaretto.jpg",
    };

    localStorage.setItem(drink.idDrink, "favorite");
    render(<ListElement drink={drink} />);
    const favoriteButton = screen.getByRole("button", { name: "♥" });
    expect(favoriteButton.classList.contains("favorite")).toBe(true);
  });

  it("Set 'filterButton' color when localStorage has 'not-favorite' state", () => {
    const drink = {
      idDrink: "2",
      strDrink: "Mojito",
      strDrinkThumb: "mojito.jpg",
    };

    localStorage.setItem(drink.idDrink, "not-favorite");
    render(<ListElement drink={drink} />);
    const favoriteButton = screen.getByRole("button", { name: "♥" });
    expect(favoriteButton.classList.contains("notfavorite")).toBe(true);
  });

  it("Toggles the state in localStorage when the favorite button is clicked", () => {
    const drink = {
      idDrink: "3",
      strDrink: "Pina Colada",
      strDrinkThumb: "pinacolada.jpg",
    };

    render(<ListElement drink={drink} />);

    const favoriteButton = screen.getByRole("button", { name: "♥" });
    fireEvent.click(favoriteButton);
    expect(localStorage.getItem(drink.idDrink)).toBe("favorite");
    expect(favoriteButton.classList.contains("favorite")).toBe(true);

    fireEvent.click(favoriteButton);
    expect(localStorage.getItem(drink.idDrink)).toBe("not-favorite");
    expect(favoriteButton.classList.contains("notfavorite")).toBe(true);
  });
});
