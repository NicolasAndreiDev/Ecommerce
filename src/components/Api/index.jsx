import { useEffect, useState } from "react";
import axios from "axios";

export const useListaDeProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get("https://my-json-server.typicode.com/NicolasAndreiDev/backendEcommerce/produtos");
        setProdutos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProdutos();
  }, []);

  return produtos;
}
