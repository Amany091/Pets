import {  useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import Carousel from "../components/Carousel"
import usePet from "../components/hooks/usePet"
import { useContext } from "react"
import AdoptedPetContext from "../context/adoptedPetContect"
import Modal from "../components/Modal"
import { Pet } from "../types/common"

const Details = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState<boolean>(false)
    const [, setAdoptedPet] = useContext(AdoptedPetContext)
    console.log(showModal)
    if (!id) throw new Error("no id provided")
    
    const petQuery = usePet(+id)
    let pet = petQuery.data?.pets[0] as Pet 
    
    return (
        <div className="pet-details" style={{color:"white"}}>
            {/* {petQuery.isLoading && <div className="loader-spinner" > <Loader /> </div>} */}
            {petQuery.isError && <h1> { (petQuery.error as Error).message} </h1>}
            {petQuery.data && (
                <div className="details">
                    <h2>{pet.name}</h2>
                    <Carousel images={pet.images} />
                    <h1>Pets {id} Details </h1>
                    <p> {pet.animal} - {pet.breed} - {pet.city} / {pet.state} </p>
                    <p style={{width:"50vw"}} >{pet.description}</p>
                    <button onClick={() => setShowModal(true)}>Adopt Me</button>
                    <button onClick={() => navigate('/')} >Back</button>
                    {showModal &&
                        <Modal>
                            <h5>Would you like to adopt {pet.name} </h5>
                            <div className="buttons">
                                <button onClick={() => {
                                    setAdoptedPet(pet)
                                    navigate('/')
                                }} className="yes" >Yes</button>
                                <button onClick={()=> setShowModal(false)}>No</button>
                            </div>
                        </Modal>
                    }
                </div>
            )
            }

        </div>
    )
}

export default Details