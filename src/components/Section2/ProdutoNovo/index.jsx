import style from './Produto.module.css'
import { useListaDeProdutos } from '../../Api';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from "swiper";
import { BsCartPlus } from "react-icons/bs"
import { useState, useRef, useEffect } from 'react';
import PopUp from '../PopUp';
import Foco from '../../CarrinhoDeCompra/Foco';
import "swiper/css/navigation";
import 'swiper/css';

const Produto = () => {
    const [popUp, setPopUp] = useState(false)
    const [idProduto, setIdProduto] = useState()
    const PopUpRef = useRef();

    const produtos = useListaDeProdutos();
    
    useEffect(() => {
        function handleClickOutside(event) {
          if (PopUpRef.current && !PopUpRef.current.contains(event.target)) {
            setPopUp(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
      }, [PopUpRef]);
    
    const [estadosDosProdutos, setEstadosDosProdutos] = useState(
        produtos.reduce((estados, produto) => {
            estados[produto.id] = false;
            return estados;
        }, {})
    );
    

    const toggleProdutos = (id) => {
        setEstadosDosProdutos((estadosAntigos) => {
            return {
                ...estadosAntigos,
                [id]: !estadosAntigos[id]
            };
        });
    };

    const togglePopUp = (id) => {
        setPopUp(!popUp);
        setIdProduto(id);
    };
    
    return (
        <>
        <Swiper
            style={{
                "--swiper-navigation-color": "#000",
                "--swiper-pagination-color": "#000",
            }}
            className={style.swiper}
            navigation
            modules={[ Navigation ]}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 1,
                },
                700: {
                    slidesPerView: 2,
                },
                1000: {
                    slidesPerView: 3,
                },
                1500: {
                    slidesPerView: 5,
                }
            }}
        >
            {produtos.map((produto) => {
                return (
                    <div key={produto.id}>
                        <SwiperSlide key={produto.id}>
                            <div className={style.produto}>
                                <div className={style.card} onMouseEnter={() => toggleProdutos(produto.id)} onMouseLeave={() => toggleProdutos(produto.id)}>
                                    <Link to={`/Produto/${produto.id}`}>
                                        <img src={produto.img} alt={produto.descricao} />
                                    </Link>
                                    <button className={style.adicionar} style={{ height: estadosDosProdutos[produto.id] ? '5rem' : '0' }} onClick={() => togglePopUp(produto.id)}>
                                        Add to Cart
                                        <BsCartPlus/>
                                    </button>
                                </div>
                                <div className={style.fora}>
                                    <p>{produto.descricao}</p>
                                    <span>R$ {produto.valor},00</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                );
            })}
        </Swiper>
        {popUp && (
            <>
                <Foco/>
                <div ref={PopUpRef}>
                    <PopUp onClick={togglePopUp} produto={produtos.find(p => p.id === idProduto)} />
                </div>
            </>
        )}
        </>
    );    
};

export default Produto
