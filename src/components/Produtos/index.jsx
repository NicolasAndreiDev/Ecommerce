import { Link } from "react-router-dom";
import style from './Produtos.module.css'
import { useListaDeProdutos } from "../Api";

const Produtos = () => {
    const produtos = useListaDeProdutos();
    
    return(
        <div className={style.container}>
            {produtos.map(produto => {
                return (
                    <div key={produto.id} className={style.produto}>
                        <div className={style.card}>
                            <Link to={`/Produto/${produto.id}`}>
                                <img src={produto.img} alt={produto.descricao} />
                            </Link>
                        </div>
                        <div className={style.fora}>
                            <p>{produto.descricao}</p>
                            <span translate='no'>R$ {produto.valor},00</span>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Produtos;
