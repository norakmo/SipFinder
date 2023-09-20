import { render, fireEvent } from "@testing-library/react";
import { expect, it } from "vitest";
import ListElement from "../components/ListElement/ListElement";

describe("ListElement", () => {
  it("changes color when the 'favorite' button is clicked", () => {
    const fakeDrink = {
      idDrink: "3",
      strDrink: "Moscow Mule",
      strDrinkThumb: "test.jpg",
    };
    const { getByText } = render(<ListElement drink={fakeDrink} />);

    const favoriteButton = getByText("favorite");

    expect(favoriteButton.classList.contains("filterButton")).toBe(true);

    fireEvent.click(favoriteButton);

    expect(favoriteButton.classList.contains("favorite")).toBe(true);
  });
});
