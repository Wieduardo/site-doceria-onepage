import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import { List, Card, InfoCard, ListContainer } from "./style";

const Catalogo = () => {

    const { filtro, busca, setBusca } = useContext(GlobalContext);

    return(
        <>
            <ListContainer>
                <h2>Confira os nossos produtos!</h2>
                <input type="text" value={busca} placeholder="Digite aqui o nome do produto que deseja procurar" onChange={(ev) => setBusca(ev.target.value)}/>
                <List>
                    {filtro.map((item, index) => (
                        <Card key={index}>
                            <img src={item.imagem} alt={item.nome} />
                            <InfoCard>
                                <h3>{item.nome}</h3>
                                <span>{item.descri} <a href={item.link} target="blank">{item.nome}</a></span>
                            </InfoCard>
                        </Card>
                    ))}
                </List>
            </ListContainer>
        </>
    )
}
export default Catalogo;