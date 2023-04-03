import { Link, useLocation } from 'react-router-dom';
import style from './Nav.module.css';
import { BsCart } from 'react-icons/bs';
import { useState, useRef, useEffect } from 'react';
import { useContext } from 'react';
import CarrinhoContext from '../../../providers/CarrinhoContext';
import { IoMenu } from 'react-icons/io5';
import CarrinhoDeCompra from '../../CarrinhoDeCompra';
import Menu from '../../MenuMobile';
import Foco from '../../CarrinhoDeCompra/Foco';

const Nav = () => {
  const location = useLocation();

  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [carrinho, setCarrinho] = useState(false);
  const [foco, setFoco] = useState(false);
  const carrinhoRef = useRef();
  const { innerWidth: width } = window;

  useEffect(() => {
    function handleClickOutside(event) {
      if (carrinhoRef.current && !carrinhoRef.current.contains(event.target)) {
        setCarrinho(false);
        setFoco(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
  }, [carrinhoRef]);

  function toggleMenu() {
    setMostrarMenu(prevState => !prevState);
  }

  const { produto } = useContext(CarrinhoContext)

  return (
    <>
    <nav className={style.nav}>
      <div className={style.navmenu}>
        <IoMenu className={style.menu} onClick={toggleMenu} />
      </div>
      {mostrarMenu && <Menu />}
      <div className={style.links}>
        <Link to={'/Produtos'} className={location.pathname === '/Produtos' ? style.ativa : ''}>
          Shop
        </Link>
        <Link to={'/LookBook'} className={location.pathname === '/LookBook' ? style.ativa : ''}>
          LookBook
        </Link>
      </div>
      <div className={style.home}>
        <Link to={'/'}>
          <h1 translate='no'>SkateST</h1>
        </Link>
      </div>
      <div className={style.user}>
        <BsCart className={style.icon} onClick={() => {setCarrinho(!carrinho); setFoco(true)}}
        />{produto.length >= 1 ? <span className={style.notificacao} onClick={() => {setCarrinho(!carrinho); setFoco(true)}}>{produto.length}</span> : ''}
      </div>
    </nav>
    <div ref={carrinhoRef}>
      {width >= 800 ? <CarrinhoDeCompra style={{ width: carrinho ? '55rem' : '0', transition: carrinho ? '.42s' : '0s' }} fechar={() => {setCarrinho(false); setFoco(false)}} /> :
      <CarrinhoDeCompra style={{ width: carrinho ? '100vw' : '0', transition: carrinho ? '.42s' : '0s' }} fechar={() => {setCarrinho(false); setFoco(false)}} />
      }
    </div>
    {foco && <Foco />}
    </>
  );
};

export default Nav;
