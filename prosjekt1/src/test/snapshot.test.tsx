import { render } from "@testing-library/react";
import Home from "../pages/home/home";
import Browse from "../pages/browse/Browse";
import Drink from "../pages/drink/Drink";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { expect, it } from "vitest";

//Snapshot test for home page
it("renders correctly", () => {
  const queryClient = new QueryClient();
  const home = (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
  const rh = render(home);
  expect(rh).toMatchSnapshot();
});

//Snapshot test for browse page
it("renders correctly", () => {
  const queryClient = new QueryClient();
  const browse = (
    <QueryClientProvider client={queryClient}>
      <Browse />
    </QueryClientProvider>
  );
  const rh = render(browse);
  expect(rh).toMatchSnapshot();
});

//Snapshot test for drink page
it("renders correctly", () => {
  const queryClient = new QueryClient();
  const drink = (
    <QueryClientProvider client={queryClient}>
      <Drink />
    </QueryClientProvider>
  );
  const rh = render(drink);
  expect(rh).toMatchSnapshot();
});
