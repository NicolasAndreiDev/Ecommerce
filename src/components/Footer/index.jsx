import Contact from './Contact'
import style from './Footer.module.css'
import Lorem from './Lorem'

const Footer = () => {
    return(
        <div className={style.footer}>
            <div className={style.info}>
                <div className={style.loja}>
                    <h2>SKATEST</h2>
                    <i>copyrigth © Nicolas Andrei Da Silva 2023</i>
                </div>
                <Lorem />
                <Lorem />
                <Contact />
            </div>
        </div>
    )    
} 

export default Footer