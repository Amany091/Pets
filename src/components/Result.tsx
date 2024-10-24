import Pet from "./Pets";
import { Pet as PetType } from "../types/common.tsx"

type Props = {
    pets: PetType[]
}

const Result = ({ pets }: Props) => {
    return (
        <div className="search-box">

            {pets?.length === 0 ? (
                <div>No Pets Found</div>
            ) :
                (
                    pets?.map(pet => {
                        return (
                            <div id="search" key={pet.id} style={{width:"100%"}}>
                                <Pet
                                    name={pet.name}
                                    animal={pet.animal}
                                    breed={pet.breed}
                                    key={pet.id}
                                    image={pet.images.length > 0 ? pet.images[0] : pet.name}
                                    description={pet.description}
                                    city={pet.city}
                                    state={pet.state}
                                    id={pet.id}
                                />
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}

export default Result;