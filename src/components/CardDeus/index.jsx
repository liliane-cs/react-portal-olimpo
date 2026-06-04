import { Card } from "./style"

export const CardDeus  = ({nome,dominio,imagem}) => {
    return(
    <Card>
        <img src={imagem} alt={nome}/>
        <h2>{nome}</h2>
        <p>{dominio}</p>
    </Card>
)
}