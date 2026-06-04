import { CardDeus } from "../../components/CardDeus"
import { listaDosDeuses } from "../../data/deuses"
import { Container } from "./style"

export const Deuses = () => {
    return(
        <Container>
            {listaDosDeuses.map((deusIndividualmente) => 
            <CardDeus nome={deusIndividualmente.nome} dominio={deusIndividualmente.dominio} imagem ={deusIndividualmente.imagem}/>)
            }
        </Container>


)
}