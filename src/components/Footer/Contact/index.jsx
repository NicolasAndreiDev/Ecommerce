import style from './Contact.module.css'

const Contact = () => {
    return(
        <div className={style.container}>
            <h3>Contact</h3>
            <ul>
                <li>nicolasandreislc@gmail.com</li>
                <li><a href="https://www.linkedin.com/in/nicolas-andrei-da-silva-186a8a251/" target='_blank' rel="noreferrer noopener">Linkedin</a></li>
                <li><a href="https://github.com/NicolasAndreiDev" target='_blank' rel="noreferrer noopener">Github</a></li>
            </ul>
        </div>
    )
}

export default Contact