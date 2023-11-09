import Logo from '../../assets/logo.png';
import Instagram from '../../assets/instagram.png'
import Facbook from '../../assets/facebook.png'
import { ListaNav, NavBar,RedeSocial } from './styles';

export default function Header() {
    return(

        <>
        <NavBar>
            <img src={Logo} alt="logo do projeto" />
            <ListaNav>
                <li>About</li>
                <li>Artists</li>
                <li>Events</li>
                <li>News</li>
                <li>Tickets</li>
                <li>Contacts</li>
                <RedeSocial src={Instagram} alt="Instagram" />
                <RedeSocial src={Facbook} alt="Facebook" />
            </ListaNav>
        </NavBar>
        
        </>
    )

}