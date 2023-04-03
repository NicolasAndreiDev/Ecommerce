import style from './CarrinhoDeCompra.module.css'
import { IoCloseOutline } from 'react-icons/io5'
import MostrarProduto from './MostrarProduto'
import FinalizarCompra from './FinalizarCompra'
import { useContext } from 'react'
import CarrinhoContext from '../../providers/CarrinhoContext'

const CarrinhoDeCompra = ({fechar, ...props}) => {
    const { produto } = useContext(CarrinhoContext)

    if(produto.length >= 1) {
        return(
            <div className={style.carrinho}  {...props}>
            <div className={style.top}>
                <div className={style.info}>
                    <h2>Carrinho</h2>
                    {produto.length > 1 ? <span>( {produto.length} itens )</span>: <span>( {produto.length} item )</span>} 
                </div>
                <IoCloseOutline className={style.icon} onClick={fechar}/>
            </div>
            <div className={style.centerComItem}>
                <div className={style.produto}>
                    <MostrarProduto />
                    <div className={style.espaco}></div>
                </div>
                <FinalizarCompra />
            </div>
        </div>
        )
    } else {
        return(
            <div className={style.carrinho}  {...props}>
            <div className={style.top}>
                <div className={style.info}>
                    <h2>Carrinho</h2>
                    <span>( 0 itens )</span>
                </div>
                <IoCloseOutline className={style.icon} onClick={fechar}/>
            </div>
            <div className={style.center}>
                <p>Seu carinho está vazio</p>
            </div>
            </div>
        )
    }
}

export default CarrinhoDeCompra