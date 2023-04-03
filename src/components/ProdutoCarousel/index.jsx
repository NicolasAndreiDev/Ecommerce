import style from './ProdutoCompra.module.css'
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Thumbs, Pagination } from 'swiper';
import { useState } from 'react';
import Tamanho from './Tamanho';
import 'swiper/css/pagination';
import "swiper/css/thumbs";
import { useListaDeProdutos }  from '../Api';
import "swiper/css/free-mode";
import 'swiper/css';
import Botao from '../Botao';

const ProdutoCompra = () => {
    const { id } = useParams();
    const pageNumber = parseInt(id);
    const produtos = useListaDeProdutos();
    const produto = produtos.find(produto => produto.id === pageNumber);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [unidade, setUnidade] = useState(1)

    const [tamanhoSelecionado, setTamanhoSelecionado] = useState('');

    function adicionar(){
        setUnidade(unidade + 1)
    }

    function remover(){
        if(unidade >= 2) {
        setUnidade(unidade - 1)
        }
    }

    const BotaoValidacao = () => {
        if (!tamanhoSelecionado) {
          return (
            <button className={style.addCartTamanho}>Add to Cart</button>
          );
        }
        return (
          <Botao className={style.addCart} idDoProduto={produto.id} unidade={unidade} tamanho={tamanhoSelecionado} valor={produto.valor} imagem={produto.img} descricao={produto.descricao}/>
        );
    };
    
    return(
        <section className={style.container}>
            {produto && (
                    <>
                    <div className={style.esquerda}>
                    <div className={style.slides}>
                        <Swiper
                        className={style.swiperaside}
                        direction={'vertical'}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs]}
                        >
                            <SwiperSlide>
                                <img className={style.slide1} src={produto.img} alt={produto.descricao} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={style.slide1} src={produto.img2} alt={produto.descricao} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={style.slide1} src={produto.img3} alt={produto.descricao} />
                            </SwiperSlide>
                            {produto.img4 === undefined ? '' :
                            <SwiperSlide>
                                <img className={style.slide1} src={produto.img4} alt={produto.descricao} />
                            </SwiperSlide> }
                        </Swiper>
                        <Swiper className={style.swiper}
                        style={{
                        '--swiper-pagination-color': 'gray',
                        }}
                        spaceBetween={10}
                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                        modules={[FreeMode, Thumbs, Pagination]}
                        pagination={{clickable: true}}
                        >
                            <SwiperSlide>
                                <img className={style.slide2} src={produto.img} alt={produto.descricao} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={style.slide2} src={produto.img2} alt={produto.descricao} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className={style.slide2} src={produto.img3} alt={produto.descricao} />
                            </SwiperSlide>
                            {produto.img4 === undefined ? '' :
                            <SwiperSlide>
                                <img className={style.slide2} src={produto.img4} alt={produto.descricao} />
                            </SwiperSlide> }
                        </Swiper>
                </div>
                </div>
                <div className={style.direita}>
                    <div className={style.alinhamento}>
                        <h2>{produto.descricao}</h2>
                        <div className={style.preco}>
                            <span>R$ {produto.valor},00</span>
                            <p>or 3 interest-free payments of R$ {produto.valor / 3},00</p>
                        </div>
                        <div className={style.select}>
                            <span>Size</span>
                            <Tamanho setTamanhoSelecionado={setTamanhoSelecionado}/>
                        </div>
                        <div className={style.compra}>
                            <div className={style.buttonDiv}>
                                <div className={style.button} onClick={remover}>-</div>
                                <span className={style.unidade}>{unidade}</span>
                                <div className={style.button} onClick={adicionar}>+</div>
                            </div>
                            <BotaoValidacao/>
                        </div>
                    </div>
            </div>
            </>)}
        </section>
    )
}

export default ProdutoCompra