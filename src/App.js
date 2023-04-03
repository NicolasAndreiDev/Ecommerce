import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OsProdutos from "./pages/Produtos";
import ProdutoPage from "./pages/Produto";
import CheckoutForm from "./pages/Checkout";
import LookBook from "./pages/LookBook";
import { CartProvider } from "./providers/CarrinhoContext";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produto/:id" element={<ProdutoPage />} />
        <Route path="/Produtos" element={<OsProdutos />} />
        <Route path="/LookBook" element={<LookBook />} />
        <Route path="/Checkout" element={<CheckoutForm />}/>
        <Route path="*" element={<div style={{height: '100vh', width: '100%', display: 'grid', placeItems: 'center'}}><h1 style={{fontSize: '5rem'}}>404</h1></div>} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;