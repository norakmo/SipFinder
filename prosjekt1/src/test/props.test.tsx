import { render, waitFor } from "@testing-library/react";
import CarouselItem from "../components/CarouselItem/CarouselItem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { expect } from "vitest";

//Props test for carousel items margarita and martini made in setup.ts
test("Drink 1", async () => {
  const queryClient = new QueryClient();
  const drink = (
    <QueryClientProvider client={queryClient}>
      <CarouselItem drinkId="1" key="1" />
    </QueryClientProvider>
  );
  const rh = render(drink);

  await waitFor(() => {
    const title = rh.getByText("margarita");
    expect(title).toBeDefined();
  });
});

test("Drink 2", async () => {
  const queryClient = new QueryClient();
  const drink = (
    <QueryClientProvider client={queryClient}>
      <CarouselItem drinkId="2" key="2" />
    </QueryClientProvider>
  );
  const rh = render(drink);

  await waitFor(() => {
    const title = rh.getByText("martini");
    expect(title).toBeDefined();
  });
});
