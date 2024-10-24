import { QueryFunction, useQuery } from "@tanstack/react-query";
import { PetApiResponse } from "../../types/common";
import { SearchParamsType } from "../../types/common";

const fetchPets:QueryFunction<PetApiResponse, ["pets" , SearchParamsType]> = async ({ queryKey }) => {
    const [, {location , animal , breed}] = queryKey
    const response = await fetch(`http://pets-v2.dev-apis.com/pets?location=${location}&animal=${animal}&breed=${breed}`);
    return response.json()
}

const usePetsSearch = (SearchParams: SearchParamsType) => {
    return useQuery({queryKey: ['pets' , SearchParams ] , queryFn : fetchPets})
}

export default usePetsSearch