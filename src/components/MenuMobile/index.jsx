import style from './MenuMobile.module.css'
import { Link } from "react-router-dom";

const Menu = () => {
    
    return (
      <div className={style.menuLinksMobile}>
        <Link to={'/Produtos'}>Shop</Link>
        <Link to={'/LookBook'}>LookBook</Link>
      </div>
    );
}

export default Menu