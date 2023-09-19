//import { useQuery } from "@tanstack/react-query";
//import { ApiResponse } from "../utils/Types";
//import { useState, useEffect } from "react";

export default function Drink() {
  // const [id, setId] = useState<string | null>(null)

  // const { data: selectedDrink } = useQuery<ApiResponse, Error>({
  //     queryKey: ["getDrink", id],
  //     queryFn: () =>
  //         fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  //             .then((res) => {
  //                 if (!res.ok) {
  //                     throw new Error('Network response was not ok');
  //                 }
  //                 return res.json() as Promise<ApiResponse>;
  //             }),
  //     enabled: !!id,
  // })

  // useEffect(() => {
  //     if (dataAllDrinks) {
  //         const Ids = dataAllDrinks.drinks.map((drink) => drink.idDrink);
  //         setId(Ids[0])
  //         console.log(selectedDrink)
  //         setId(Ids[1])
  //     }
  // }, [dataAllDrinks, selectedDrink]);

  return <p></p>;
}
