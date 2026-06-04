import { Card } from "./style"

export const CardDeus  = ({nome,dominio}) => {
    return(
    <Card>
        <p>{nome}</p>
        <p>{dominio}</p>
    </Card>
)
}