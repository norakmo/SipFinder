import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { rest } from "msw";

//file for setting up mock server for testing

//drink items for testing
const posts = {
  drinks: [
    {
      idDrink: 1,
      strDrink: "margarita",
      stringDrinkThumb: "picture",
    },
  ],
};

const posts2 = {
  drinks: [
    {
      idDrink: 2,
      strDrink: "martini",
      stringDrinkThumb: "picture",
    },
  ],
};

export const restHandlers = [
  //handler for snapshot test
  rest.get(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail",
    (req, res, ctx) => {
      //const category = req.url.searchParams.get("c=Cocktail");
      return res(ctx.json(posts));
    }
  ),
  //handler for component testing
  rest.get(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?",
    (req, res, ctx) => {
      const category = req.url.searchParams.get("i");
      if (category === "1") return res(ctx.json(posts));
      if (category === "2") return res(ctx.json(posts2));
    }
  ),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
