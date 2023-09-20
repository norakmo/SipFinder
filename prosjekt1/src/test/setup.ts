import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { rest } from "msw";

//https://vitest.dev/guide/mocking.html#requests

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
  rest.get(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail",
    (req, res, ctx) => {
      //const category = req.url.searchParams.get("c=Cocktail");
      return res(ctx.json(posts));
    }
  ),
  rest.get(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=2",
    (req, res, ctx) => {
      //const category = req.url.searchParams.get("c=Cocktail");
      return res(ctx.json(posts2));
    }
  ),

  rest.get(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=1",
    (req, res, ctx) => {
      //const category = req.url.searchParams.get("c=Cocktail");
      return res(ctx.json(posts));
    }
  ),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
