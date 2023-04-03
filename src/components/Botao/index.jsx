import React, { useContext } from 'react';
import CarrinhoContext from '../../providers/CarrinhoContext';

const Botao = ({ tamanho, unidade, total, valor, idDoProduto, descricao, imagem, ...props }) => {
  const { setProduto } = useContext(CarrinhoContext);

  const adicionarAoCarrinho = () => {
    const item = {
      tamanho: tamanho,
      unidade: unidade,
      valor: valor,
      total: valor * unidade,
      descricao: descricao,
      imagem: imagem,
      idDoProduto: idDoProduto,
      id: idDoProduto + tamanho,
    };
  
    const carrinhoAtualizado = JSON.parse(localStorage.getItem('carrinho'));
    const itemExistente = carrinhoAtualizado.find(item => item.idDoProduto === idDoProduto && item.tamanho === tamanho);
  
    if (itemExistente) {
      const novaUnidade = itemExistente.unidade + unidade;
      itemExistente.unidade = novaUnidade;
      itemExistente.total = novaUnidade * valor;
    } else {
      carrinhoAtualizado.push(item);
    }
  
    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtualizado));
    setProduto(carrinhoAtualizado);
  };

  return (
    <button {...props} onClick={adicionarAoCarrinho}>
      Add to Cart
    </button>
  );
};

export default Botao;
