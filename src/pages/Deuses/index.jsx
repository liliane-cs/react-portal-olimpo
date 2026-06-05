import { CardDeus } from "../../components/CardDeus";
import { listaDosDeuses } from "../../data/deuses";
import { Container } from "./style";
import { SessaoCard } from "./style";
import { useState } from "react"

export const Deuses = () => {
    const [busca, setBusca] = useState("")
    const deusesEncontrados = listaDosDeuses.filter((deus) =>
        deus.nome.toLowerCase().includes(busca.toLowerCase())
    )

    return (
        <SessaoCard>
            <h1>Deuses do Olimpo</h1>
            <input
                type="text"
                placeholder="Busque pelo nome do seu Deus preferido..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />
            <Container>
                {deusesEncontrados.map((deusIndividualmente) => (
                    <CardDeus
                        nome={deusIndividualmente.nome}
                        dominio={deusIndividualmente.dominio}
                        imagem={deusIndividualmente.imagem}
                        id={deusIndividualmente.id}
                    />
                ))}
            </Container>
        </SessaoCard>
    );
};