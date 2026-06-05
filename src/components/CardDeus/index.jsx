import { Card } from "./style"
import { Link } from "react-router-dom"

export const CardDeus = ({id, nome, dominio, imagem}) => {
    return(
        <Card>
            <img src={imagem} alt={nome}/>
            <h2>{nome}</h2>
            <p>{dominio}</p>
            <Link to={`/deuses/${id}`}>
                <button>Ver mais</button>
            </Link>
        </Card>
    )
}