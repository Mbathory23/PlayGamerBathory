import CartWidget from "./CartWidget"
const NavbarComponent = ()=>{
    return(
        <nav className="navContainer">
            <a className='aLink'>Play Gamer</a>
            <a className="aLink">Nuevos ingresos</a>
            <a className="aLink">Ofertas</a>
            <a className="aLink">Juegos</a>
            <CartWidget counter={15}/>
        </nav>
    )
}

export default NavbarComponent