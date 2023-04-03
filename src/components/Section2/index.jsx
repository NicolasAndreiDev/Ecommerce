import style from './Section2.module.css'
import Produto from './ProdutoNovo'

const Section2 = () => {
    return(
        <section className={style.section}>
            <div className={style.titulo}>
                <h2>New Arrivals</h2>
            </div>
            <div className={style.direita}>
                <div className={style.cards}>
                    <Produto />
                </div>
            </div>
        </section>
    )
}

export default Section2