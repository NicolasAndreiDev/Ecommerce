import style from './FinalizarCompra.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CarrinhoContext from '../../../providers/CarrinhoContext';

const FinalizarCompra = () => {
  const { produto } = useContext(CarrinhoContext);

  const total = produto.reduce((acc, produto) => {
  return acc + (produto.total);
}, 0); 

  return (
    <div className={style.container}>
      <div className={style.top}>
        <h3>Subtotal</h3>
        <span>R$ {total},00</span>
      </div>
      <div className={style.top}>
        <h3>Freight</h3>
        <span>Free</span>
      </div>
      <div className={style.bottom}>
        <Link to={'/Checkout'} className={style.button}>
          <button>Finalizar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default FinalizarCompra;
