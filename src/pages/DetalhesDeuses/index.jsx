import { Container, Nome, Info, Descricao, InfoEspecial } from "./style"
import { useParams } from "react-router-dom"
import { listaDosDeuses } from "../../data/deuses"

export const DetalhesDeuses = () => {
    const { id } = useParams()
    const deus = listaDosDeuses.find((deus) => deus.id === id)

    return(
        <Container>
            <img src={deus.imagem} alt={deus.nome}/>
            <div>
                <Nome>{deus.nome}</Nome>
                <InfoEspecial>Domínio: {deus.dominio}</InfoEspecial>
                <InfoEspecial>Símbolo: {deus.simbolo}</InfoEspecial>
                <InfoEspecial>Animal: {deus.animal}</InfoEspecial>
                <h2>Especial sobre mim...</h2>
                <Descricao>{deus.descricao}</Descricao>
            </div>
        </Container>
    )
}