import { useState, useContext } from "react";
import useBreedsList from "../components/hooks/useBreedsList";
import Result from "../components/Result";
import usePetsSearch from "../components/hooks/usePetsSearch";
import ErrorBoundary from "../components/ErrorBoundary";
import { Animal, SearchParamsType } from "../types/common";
import AdoptedPetContext from "../context/adoptedPetContect";



const SearchParams = () => {
    const animals = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];


    const [searchParams, setSearchParams] = useState<SearchParamsType>({ animal: '' as Animal, location: '', breed: '' })
    const [adoptedPet] = useContext(AdoptedPetContext)

    const breedsQuery = useBreedsList(searchParams.animal) // return breeds list by animal value
    const breeds = breedsQuery?.data?.breeds ?? []

    const petsQuery = usePetsSearch(searchParams)
    const pets = petsQuery?.data?.pets ?? []

    return (
        <div className="container form-pets">
            <form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const location = formData.get('location')
                const animal = formData.get('animal')
                const breed = formData.get('breed')
                setSearchParams({ animal: animal, location: location, breed: breed } as SearchParamsType)
            }} >
                {adoptedPet &&
                    <img  style={{borderRadius:"50%", width: "50%",objectFit:"contain"}} src={adoptedPet.images[0]} alt={adoptedPet.name} />
                }

                <div id="location">
                    <label htmlFor="location">Location</label>
                    <input type="text"
                        name="location"
                        id="location"
                    />
                </div>

                <div id="animal">
                    <label htmlFor="animal">Animal</label>
                    <select name="animal" id="animal" onChange={(e) => setSearchParams({
                        ...searchParams,
                        animal: e.target.value as Animal,
                        breed: ''
                    })}
                    >
                        <option value="">Select option</option>
                        {animals.map(animal => {
                            return <option
                                key={animal}
                                value={animal}
                            > {animal} </option>
                        })}
                    </select>
                </div>

                <label htmlFor="breed"> Breed
                    <select name="breed" id="breed" disabled={!breeds.length} >
                        <option value="">Select option</option>
                        {breeds.map((breed: string) => {
                            return <option key={breed} value={breed}>{breed}</option>
                        })}
                    </select>
                </label>
                <button>Submit</button>
            </form>

            <ErrorBoundary>
                <Result pets={pets} />
            </ErrorBoundary>
        </div>

    )
}

export default SearchParams;