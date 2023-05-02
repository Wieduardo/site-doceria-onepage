import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FooterContainer, FooterEndereco, FooterMedia, IconFace, IconInsta, IconTwit, IconWhats, MediaContainer } from "./style";

const Footer = () => {

    const { userData } = useContext(GlobalContext);

    return(
        <>
        <FooterContainer>
            <h3>Venha nos conhecer!</h3>
            <MediaContainer>
                <FooterMedia>
                    <li>
                        <IconWhats target="_blank" rel='noreferrer' href={`https://web.whatsapp.com/send?phone=+55${userData.celular}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}>
                            <FaWhatsapp/>
                        </IconWhats>
                    </li>
                    <li>
                        <IconFace target="_blank" rel='noreferrer' href={userData.facebook}>
                            <FaFacebook/>
                        </IconFace>
                    </li>
                    <li>
                        <IconTwit target="_blank" rel='noreferrer' href={userData.twitter}>
                            <FaTwitter/>
                        </IconTwit>
                    </li>
                    <li>
                        <IconInsta target="_blank" rel='noreferrer' href={userData.insta}>
                            <FaInstagram/>
                        </IconInsta>
                    </li>
                </FooterMedia>
                <FooterEndereco>
                    <h3>Endereço:</h3>
                    <span> {userData.rua} - {userData.bairro} - {userData.cidade}</span>
                </FooterEndereco>
            </MediaContainer>
        </FooterContainer>
        </>
    )   
}

export default Footer;