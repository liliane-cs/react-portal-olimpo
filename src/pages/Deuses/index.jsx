import { CardDeus } from "../../components/CardDeus"
import { listaDosDeuses } from "../../data/deuses"

export const Deuses = () => {
    return(
        <div>
            {listaDosDeuses.map((deusIndividualmente) => 
            <CardDeus nome={deusIndividualmente.nome} dominio={deusIndividualmente.dominio}/>)
            }
        </div>


)
}