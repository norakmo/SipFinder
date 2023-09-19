import { render } from "@testing-library/react";
import Home from "../pages/home/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { expect, it } from "vitest";

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
