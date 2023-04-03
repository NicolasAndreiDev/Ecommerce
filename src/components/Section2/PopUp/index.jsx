import Botao from '../../Botao'
import Tamanho from '../../ProdutoCarousel/Tamanho'
import Carrousel from '../Carrousel'
import style from './PopUp.module.css'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const PopUp = ({produto, ...props}) => {
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState('');

    const BotaoValidacao = () => {
        if (!tamanhoSelecionado) {
          return (
            <button className={style.addCartTamanho}>Add to Cart</button>
          );
        }
        return (
          <Botao className={style.addCart} idDoProduto={produto.id} unidade={1} tamanho={tamanhoSelecionado} valor={produto.valor} imagem={produto.img} descricao={produto.descricao}/>
        );
    };

    return(
        <div className={style.card}>
            <Carrousel produto={produto}/>
            <div>
                <div className={style.top}>
                    <IoCloseOutline className={style.icon} {...props}/>
                </div>
                <div className={style.add}>
                    <div className={style.valor}>
                        <h2>{produto.descricao}</h2>
                        <span>R$ {produto.valor},00</span>
                        <p>or 3 interest-free payments of R$ {produto.valor / 3},00</p>
                        <hr/>
                    </div>
                    <div className={style.valor}>
                        <span>Size</span>
                        <Tamanho setTamanhoSelecionado={setTamanhoSelecionado}/>
                    </div>
                    <BotaoValidacao />
                    <div className={style.valor}>
                        <hr/>
                        <Link to={`/Produto/${produto.id}`} className={style.link}>
                            <p>Visit Product Page</p>
                            <HiOutlineArrowNarrowRight className={style.arrow}/>
                        </Link>
                        <hr/>
                    </div>
                    <h2>SKATEST</h2>
                </div>
            </div>
        </div>
    )
}

export default PopUp