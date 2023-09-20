import { render, fireEvent } from "@testing-library/react";
import { expect, it } from "vitest";
import ListElement from "../components/ListElement/ListElement";

//test for checking that the favorite button heart changes color when clicked
describe("ListElement", () => {
  it("changes color when the 'favorite' button is clicked", () => {
    const fakeDrink = {
      idDrink: "3",
      strDrink: "Moscow Mule",
      strDrinkThumb: "test.jpg",
    };
    const { container } = render(<ListElement drink={fakeDrink} />);
    const favoriteButton = container.querySelector(".favorite button");
    expect(favoriteButton?.classList.contains("notfavorite")).toBe(true);
    favoriteButton && fireEvent.click(favoriteButton);
    expect(favoriteButton?.classList.contains("favorite")).toBe(true);
  });
});
