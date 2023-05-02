import { Logo, NavContent, Navigation, Bola } from "./style";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

const Nav = () =>{

    return(
        <>
            <Navigation>
                <Logo>
                <h1>Ione Doces</h1>
                </Logo>
                <NavContent>
                    <Bola><BsFacebook/></Bola>
                    <Bola><BsInstagram/></Bola>
                    <Bola><BsWhatsapp/></Bola>
                </NavContent>
            </Navigation>
        </>
    )
}
export default Nav;