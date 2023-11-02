import Logo from '../../assets/logo.png';

export default function Header() {
    return(

        <>
        <nav>
            <img src={Logo} alt="logo do projeto" />
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Artists</a></li>
                <li><a href="">Events</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Tickets</a></li>
                <li><a href="">Contacts</a></li>
                <img src="" alt="TikTok" />
                <img src="" alt="Facebook" />
            </ul>
        </nav>
        
        </>
    )

}