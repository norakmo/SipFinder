//test for checking that the favorite button heart changes color when clicked
import { render, fireEvent } from "@testing-library/react";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import ListElement from "../components/ListElement/ListElement";

// Test for checking that the favorite button heart changes color when clicked
describe("ListElement", () => {
  it("changes color when the 'favorite' button is clicked", async () => {
    const fakeDrink = {
      idDrink: "3",
      strDrink: "Moscow Mule",
      strDrinkThumb: "test.jpg",
    };

    // Wrap the ListElement in MemoryRouter and set the basename
    const { container } = render(
      <MemoryRouter initialEntries={["/project1"]}>
        <ListElement drink={fakeDrink} />
      </MemoryRouter>
    );

    const favoriteButton = container.querySelector(".favorite button");
    expect(favoriteButton?.classList.contains("notfavorite")).toBe(true);

    // Fire a click event on the button
    favoriteButton && fireEvent.click(favoriteButton);

    // Use an asynchronous assertion to check the updated class
    expect(favoriteButton?.classList.contains("favorite")).toBe(true);
  });
});
