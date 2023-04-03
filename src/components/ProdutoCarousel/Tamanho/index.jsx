import { useState } from "react";
import style from "./Tamanho.module.css";

const Tamanho = ({ setTamanhoSelecionado }) => {
    const [selecionarTamanho, setSelecionarTamanho] = useState();

    const handleChange = (event) => {
        const tamanhoSelecionado = event.target.value;
        setSelecionarTamanho(tamanhoSelecionado);
        setTamanhoSelecionado(tamanhoSelecionado)
    };

    const tamanho = ['P', 'M', 'G', 'GG', 'XGG'];

    return (
        <div className={style.tamanho}>
            {tamanho.map(tam => {
                return (
                    <div key={tam} className={style.tamanho}>
                        <input 
                            required
                            type='radio' 
                            id={tam} 
                            name='tamanho' 
                            value={tam} 
                            checked={selecionarTamanho === `${tam}`} 
                            onChange={handleChange}
                        />
                        <label htmlFor={tam} className={style.button}>{tam}</label>
                    </div>
                )
            })}
        </div>
    );
};

export default Tamanho;
