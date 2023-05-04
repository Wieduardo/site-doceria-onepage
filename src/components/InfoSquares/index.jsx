import { SquareBottomLeft, SquareBottomRight, SquareContainer, SquareTopLeft, SquareTopRight } from "./style";

const InfoSquares = () => {
    return(
        <>
        <SquareContainer>
            <SquareTopLeft>
                <h2>Ingredientes Selecionados</h2>
                <span>Selecionamos cuidadosamente os ingredientes que usamos, isso é fundamental para
                     garantir a qualidade, o sabor e a segurança alimentar.
                </span>
            </SquareTopLeft>
            <SquareTopRight>
                <h2>Sanitização</h2>
                <span>
                Nosso processo de limpeza e desinfecção visa eliminar contaminantes de superfícies, equipamentos,
                 utensílios e ambientes, a fim de garantir a segurança e a qualidade dos alimentos e proteger
                  a saúde pública.
                </span>
            </SquareTopRight>
            <SquareBottomLeft>
                <h2>Entregas</h2>
                <span>- Entrega balcão: o cliente busca o produto diretamente no estabelecimento.</span>
                <span>- Transporte próprio: trabalhamos com  transportadoras contratadas. Consultar taxa de entrega.</span>
            </SquareBottomLeft>
            <SquareBottomRight>
                <h2>Nossa Missão</h2>
                <span>Criar e oferecer produtos de alta qualidade e sabor inigualável.
                     Além disso, busca-se proporcionar uma experiência agradável e única de felicidade 
                    pelos sabores e aromas intensos dos ingredientes utilizados.</span>
            </SquareBottomRight>
        </SquareContainer>
        </>
    )
}

export default InfoSquares;