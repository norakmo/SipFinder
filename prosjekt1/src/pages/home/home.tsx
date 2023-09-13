import { QueryCache, useQuery, useQueryClient } from "@tanstack/react-query"
import { ApiResponse } from "../../utils/Types";
import { getAllDrinks } from "../../utils/ApiRequests";
import { useState } from "react";

export default function Home(){
    const queryClient = useQueryClient()
    const [name, setName] = useState<string>("her")
    async function getData(){
        await queryClient.ensureQueryData({ queryKey: ["getAll"], queryFn: () => getAllDrinks() })
        .then((res)=> {setName(res.drinks[0].strDrink)})
    }
    getData()
    return(
        <div>
            {name}
        </div>
    )
}