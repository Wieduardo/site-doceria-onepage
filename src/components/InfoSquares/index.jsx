import { SquareBottomLeft, SquareBottomRight, SquareContainer, SquareTopLeft, SquareTopRight } from "./style";

const InfoSquares = () => {
    return(
        <>
        <SquareContainer>
            <SquareTopLeft>
                <h2>Ingredientes Selecionados</h2>
                <span>Tudo que é usado na fabricação de nossos produtos passa por uma criteriosa seleção e inspeção 
                    . Nosso setor de compras trabalha com fornecedores parceiros que garantem a qualidade de suas 
                    entregas.
                </span>
            </SquareTopLeft>
            <SquareTopRight>
                <h2>Higiene, Limpeza e organização</h2>
                <span>
                Nossas operações funcionam com base em um fluxo de melhoria contínua. Tudo é higienizado de acordo 
                com as mais rígidas políticas sanitárias e de organização, preservando a saúde de todos.
                </span>
            </SquareTopRight>
            <SquareBottomLeft>
                <h2>Sistema Próprio de Entregas</h2>
                <span>Trabalhamos com frota e funcionários próprios, garantindo a máxima eficiência nas entregas de Mercado Delivery.
                     Todos os pedidos são vistoriados na saída e conferidos no momento que chegam até você.</span>
            </SquareBottomLeft>
            <SquareBottomRight>
                <h2>Responsabilidade Social</h2>
                <span>Temos uma rede consolidada de instituições que recebem periodicamente doações de produtos alimentícios
                     da nossa produção própria. Também realizamos eventos de arrecadação de roupas e itens de higiene. </span>
            </SquareBottomRight>
        </SquareContainer>
        </>
    )
}

export default InfoSquares;