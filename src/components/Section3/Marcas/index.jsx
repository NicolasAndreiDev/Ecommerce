import style from './Marcas.module.css'

const Marcas = () => {
    return(
        <div className={style.marcas}>
            <div className={style.marcas__info}>
                <img src="./imagens/logoButter.png" alt="logoButter" />
                <img src='./imagens/logoHigh.png' alt='logoHigh' />
            </div>
        </div>
    )
}

export default Marcas