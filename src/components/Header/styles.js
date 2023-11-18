import styled from "styled-components";

export const NavBar = styled.nav`
height:10.1rem;
display:flex;
justify-content:space-evenly;
align-items:center;
background-color:black;
opacity:0.6;
position:absolute;
width:100%;
z-index:2;
`
export const ListaNav = styled.ul`
display:flex;
gap:30px;

li{
   
    color:white;
    font-size:18px;
    font-weight:700;
    cursor: pointer;
    &:hover{
        color:orange;
    }
}

`

export const RedeSocial = styled.img`

width:30px;
cursor: pointer;
`
export const DivSocial = styled.div`

display:flex;
justify-content:center;
align-items:center;
width:200px;
gap:20px;

`
