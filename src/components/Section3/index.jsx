import style from './Section3.module.css'
import Carousel from "./Carousel"
import Footer from '../Footer'
import Marcas from './Marcas'

const Section3 = () => {

    return(
        <section className={style.section}>
            <Carousel />
            <Marcas />
            <Footer />
        </section>
    )
}

export default Section3