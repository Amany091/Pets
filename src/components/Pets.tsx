import { Link } from "react-router-dom"

type Props = {
    image: string,
    name: string,
    description: string,
    animal: string,
    breed: string,
    city: string,
    state: string,
    id: string
}

const Pet = ({ image, name, description, animal, breed, city, state, id }: Props) => {
    return (
        <Link to={`details/${id} `} style={{textDecoration:"none", color:"white"}} >
            <div className="pets" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"5px", backgroundColor:"#151515", margin:"10px 0px", padding:"10px", borderRadius: "30px"}} >
                <img src={image} alt={name} />
                <p> {animal} - {name} - {breed} - {city} / {state} </p>
                <p> description of animal : {description}</p>

            </div>
        </Link>
    )
}

export default Pet