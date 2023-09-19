import { render, waitFor } from "@testing-library/react";
import CarouselItem from "../components/CarouselItem/CarouselItem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { expect, vi } from "vitest";

test("Drink title", async () => {
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
