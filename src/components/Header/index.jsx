import style from './Header.module.css'
import Nav from './Nav'

const Header= () => {

    return(
        <header className={style.header}>
            <Nav />
        </header>
    )
}

export default Header