import { Container, Nome, Info, Descricao, InfoEspecial } from "./style"
import zeus from "../../assets/Imagens/zeus.png"

export const DetalhesDeuses = () => {
    return(
        <Container>
            <img src={zeus} alt="Zeus"/>
            <div>
                <Nome>Zeus</Nome>
                <Info>Rei dos deuses do Olimpo</Info>
                <InfoEspecial>Domínio: Céu e Trovões</InfoEspecial>
                <InfoEspecial>Símbolo: Raio</InfoEspecial>
                <InfoEspecial>Animal: Águia</InfoEspecial>
                <h2>Especial sobre mim...</h2>
                <Descricao>Rei dos deuses do Olimpo, Zeus era conhecido por lançar raios contra quem ousasse desafiar sua autoridade. Apesar do poder imenso, vivia se disfarçando de humano para se aventurar entre os mortais.</Descricao>
            </div>
        </Container>
    )
}