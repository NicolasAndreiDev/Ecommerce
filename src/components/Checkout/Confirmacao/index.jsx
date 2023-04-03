import style from './Confirmacao.module.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Confirmacao = () => {
    return(
    <div className={style.confirma}>
        Pagamento concluido!
        <AiOutlineCheckCircle />
    </div>
    )
}

export default Confirmacao