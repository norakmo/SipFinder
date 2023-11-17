//test for checking that the favorite button heart changes color when clicked
import { render, fireEvent } from "@testing-library/react";
import { expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ListElement from "../components/ListElement/ListElement";
import NavBar from "../components/NavBar/NavBar";
import "@testing-library/jest-dom";

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

    const favoriteButton = container.querySelector(".favorite-button");
    expect(favoriteButton?.getAttribute("id")).toBe("notfavorite");

    // Fire a click event on the button
    favoriteButton && fireEvent.click(favoriteButton);

    // Use an asynchronous assertion to check the updated class
    expect(favoriteButton?.getAttribute("id")).toBe("favorite");
  });
});

// Test for checking that the navigation links are present and point to the correct routes
describe("NavBar", () => {
  it("renders the navigation links correctly", () => {
    // Render the NavBar component within MemoryRouter
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // Check if the logo link is present and points to the correct route
    const logoLink = getByText("SipFinder") as HTMLAnchorElement;
    expect(logoLink.closest("a")?.getAttribute("href")).toBe("/");

    // Check if the Home link is present and points to the correct route
    const homeLink = getByText("Home") as HTMLAnchorElement;
    expect(homeLink.closest("a")?.getAttribute("href")).toBe("/");

    // Check if the Browse link is present and points to the correct route
    const browseLink = getByText("Browse") as HTMLAnchorElement;
    expect(browseLink.closest("a")?.getAttribute("href")).toBe("/browse");
  });
});
