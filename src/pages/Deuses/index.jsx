import { CardDeus } from "../../components/CardDeus"
import { listaDosDeuses } from "../../data/deuses"
import { Container } from "./style"
import { SessaoCard } from "./style"

export const Deuses = () => {
    return(
        <SessaoCard>
            <h1>Deuses do Olimpo</h1>
            <Container>
                {listaDosDeuses.map((deusIndividualmente) => 
                <CardDeus nome={deusIndividualmente.nome} dominio={deusIndividualmente.dominio} imagem ={deusIndividualmente.imagem}/>)
                }
            </Container>
        </SessaoCard>

)
}