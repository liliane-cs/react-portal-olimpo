import { Container } from "./style"
import { Link } from "react-router-dom"

export const Portal = () => {
    return (
        <Container>
            <h1>Portal do Olimpo</h1>
            <h3>Descubra os deuses do Olimpo e conheça suas histórias, símbolos e os poderes que os tornaram lendários.</h3>
            <Link to="/deuses">
                <button>Explorar Deuses</button>
            </Link>
        </Container>
    )
}