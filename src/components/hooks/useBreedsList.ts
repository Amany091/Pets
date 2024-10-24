import { QueryFunction, useQuery } from "@tanstack/react-query";
import { Animal, BreedsListApiResponse } from "../../types/common";

const fetchBreedsList:QueryFunction< BreedsListApiResponse, ["breeds", Animal]> = async ({ queryKey }) => {
  const [, animal] = queryKey;
  if(!animal) return []
  const res = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  return res.json();
};

const useBreedsList = (animal:Animal) => {
  return useQuery({ queryKey: ["breeds", animal], queryFn: fetchBreedsList });
};

export default useBreedsList;
