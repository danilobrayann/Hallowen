import Logo from '../../assets/logo.png';
import { ListaNav, NavBar } from './styles';

export default function Header() {
    return(

        <>
        <NavBar>
            <img src={Logo} alt="logo do projeto" />
            <ListaNav>
                <li><a href="">About</a></li>
                <li><a href="">Artists</a></li>
                <li><a href="">Events</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Tickets</a></li>
                <li><a href="">Contacts</a></li>
                <img src="" alt="TikTok" />
                <img src="" alt="Facebook" />
            </ListaNav>
        </NavBar>
        
        </>
    )

}