import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import { FooterContainer, FooterEndereco, FooterMedia, IconFace, IconInsta, IconTwit, IconWhats, MediaContainer } from "./style";

const Footer = () => {

    const { userData } = useContext(GlobalContext);

    return(
        <>
        <FooterContainer>
            <MediaContainer>
                <FooterMedia>
                    <h3>Formas de pagamento</h3>
                    <img src={require('../../imagens/icones-cartao.png')}/>
                </FooterMedia>
                <FooterEndereco>
                    <h3>Venha nos Conhecer!</h3>
                    <span> {userData.rua} - {userData.bairro} - {userData.cidade}</span>
                </FooterEndereco>
            </MediaContainer>
        </FooterContainer>
        </>
    )   
}

export default Footer;