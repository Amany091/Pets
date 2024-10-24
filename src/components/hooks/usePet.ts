import { QueryFunction, useQuery } from "@tanstack/react-query"
import { PetApiResponse } from "../../types/common"

const fetchPet:QueryFunction<PetApiResponse, ["pet", number]> = async ({queryKey}) => {
    const [, id] = queryKey // ',' is called hole or elision It means that the first element of the queryKey array is being skipped or ignored.
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
    return res.json()
}

const usePet = (petId: number) => {
    const petQuery = useQuery({ queryKey: ['pet', petId], queryFn: fetchPet })
    return petQuery;
}

export default usePet