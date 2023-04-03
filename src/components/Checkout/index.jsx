import axios from 'axios'
import { useState } from 'react';
import { CardNumberElement, useElements, useStripe, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router';
import style from './Checkout.module.css'
import { useContext } from 'react';
import CarrinhoContext from '../../providers/CarrinhoContext';
import Confirmacao from './Confirmacao';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import Paises from './InputPaises';

const CheckoutForm = () => {
    const navigate = useNavigate();
    const { produto, setProduto } = useContext(CarrinhoContext)
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [pagamentoConcluido, setPagamentoConcluido] = useState(false);
    const [cardHolderName, setCardHolderName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardCvcElement, CardExpiryElement, CardNumberElement),
      billing_details: {
        name: cardHolderName,
        email: email,
        address: {
          line1: '123 Main St',
          line2: 'Apt 4',
          city: 'Anytown',
          state: 'CA',
          postal_code: '12345',
          country: 'US',
        }
      }
    });

    if (error) {
      setIsProcessing(false);
    } else {

      try {
        setPagamentoConcluido(true);
        setTimeout(() => {
          navigate('/');
          setProduto([])
        }, 2500);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const total = produto.reduce((acc, produto) => {
    return acc + (produto.valor * produto.unidade);
  }, 0); 

  const handleCardHolderNameChange = (event) => {
    setCardHolderName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  return (
    <>
    <section className={style.container}>
      <div className={style.esquerda}>
      <div className={style.top}>
        <button onClick={() => navigate(-1)} className={style.voltar}> 
          <HiOutlineArrowNarrowLeft className={style.arrow}/>
          Back
        </button>
        </div>
        <div className={style.valor}>
          <span>Total value</span>
          <span className={style.valorTotal}>R$ {total},00</span>
        </div>
            <div className={style.produtos}>
              {produto.map(produto => {
                return(
              <div key={produto.id} className={style.card}>
                <div style={{backgroundImage: `url(${produto.imagem})`}} alt={produto.descricao} className={style.imagem}/>
                <div className={style.alinhamento}>
                  <div className={style.descUnidade}>
                    <h2>{produto.descricao}</h2>
                    <div className={style.quadradosep}>
                      <span>Unit</span>
                      <span className={style.quadrado}>{produto.unidade}</span>
                    </div>
                    <div className={style.quadradosep}>
                      <span>Size</span>
                      <span className={style.quadrado}>{produto.tamanho}</span>
                    </div>
                  </div>
                  <span className={style.totalProduto}>R$ {produto.total},00</span>
                </div>
              </div>
                )
                  })}
        </div>
        <span className={style.termos}>Terms | privacy</span>
      </div>
      <div className={style.direita}>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.nome}>
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" className={style.input} required value={email} aria-describedby="email-error"
            onChange={handleEmailChange}/>
          </div>
          <div className={style.cardInformationTop}>
            <span>Card Information</span>
            <div className={style.cardInformation}>
            <div>
              <CardNumberElement className={style.input1} options={{showIcon: true}} required />
            </div>
            <div className={style.cardInformationbottom}>
              <CardExpiryElement className={style.input2} required />
              <CardCvcElement className={style.input3} required />
            </div>
            </div>
          </div>
          <div className={style.nome}>
            <label htmlFor='nome'>Name of card holder</label>
            <input id='nome' type="text" name="cardholder-name" required className={style.input}  value={cardHolderName}
            onChange={handleCardHolderNameChange}/>
          </div>
          <div className={style.nome}>
            <label>Country</label>
            <div className={style.cardInformation}>
              <Paises className={style.input4} id='country' required />
              <input placeholder='ZIP' className={style.input4} required/>
            </div>
          </div>
          <button disabled={!stripe || isProcessing} className={style.button}>
            {isProcessing ? 'Processando pagamento...' : 'Pay'}
          </button>
          {pagamentoConcluido && <Confirmacao/>}
        </form>
      </div>
    </section>
    </>
  );
};

export default CheckoutForm
