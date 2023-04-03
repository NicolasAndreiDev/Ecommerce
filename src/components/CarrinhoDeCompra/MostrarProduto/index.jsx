import style from './MostrarProduto.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
import CarrinhoContext from '../../../providers/CarrinhoContext';

const MostrarProduto = () => {
  const [, setQuantidade] = useState();
  const { produto, setProduto } = useContext(CarrinhoContext)

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinhoSalvo) {
      setProduto(carrinhoSalvo);
    }
  }, []);

  function atualizarQuantidade(produtos) {
    const carrinhoAtualizado = produto.map(item => item.id === produtos.id ? produtos : item);
    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtualizado));
    setProduto(carrinhoAtualizado);
  }

  function removerProduto(produtos) {
    const carrinhoAtualizado = produto.filter(item => item.id !== produtos.id);
    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtualizado));
    setProduto(carrinhoAtualizado);
  }
  

  function adicionar(produto) {
    const novaUnidade = produto.unidade += 1;
    const novoTotal = produto.valor * novaUnidade;
    atualizarQuantidade({ ...produto, unidade: novaUnidade, total: novoTotal});
    setQuantidade(novaUnidade);
  }

  function remover(produto) {
    if (produto.unidade >= 2) {
      const novaUnidade = produto.unidade -= 1;
      const novoTotal = produto.valor * novaUnidade;
      atualizarQuantidade({ ...produto, unidade: novaUnidade, total: novoTotal });
      setQuantidade(novaUnidade);
    }
  }

  return (
    <>
    {produto.map(produto => {
      return(
        <div key={produto.id} className={style.produto}>
        <div className={style.imagemGrid}>
          <img src={produto.imagem} alt={produto.descricao} />
        </div>
        <div className={style.grid}>
          <div className={style.top}>
            <h2 className={style.item}>{produto.descricao}</h2>
            <div className={style.tamanhoValor}>
              <span className={style.tamanho}>{produto.tamanho}</span>
              <span className={style.valor}>R$ {produto.valor},00</span>
            </div>
          </div>
          <div className={style.bottom}>
            <button className={style.button} onClick={() => remover(produto)}>
              -
            </button>
            <span className={style.unidade}>{produto.unidade}</span>
            <button className={style.button} onClick={() => adicionar(produto)}>
              +
            </button>
            <button className={style.excluir} onClick={() => removerProduto(produto)}>
              <RiDeleteBin6Line className={style.icon}/>
            </button>
          </div>
        </div>
      </div>
      )
    })}
    </>
  );
};

export default MostrarProduto;
