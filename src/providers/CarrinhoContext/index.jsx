import { createContext, useState, useEffect } from "react";

const CarrinhoContext = createContext();

export const CartProvider = ({ children }) => {
  const [produto, setProduto] = useState(() => {
    const carrinhoLocal = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return carrinhoLocal;
  });

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(produto));
  }, [produto]);

  return (
    <CarrinhoContext.Provider value={{ produto, setProduto }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoContext;

