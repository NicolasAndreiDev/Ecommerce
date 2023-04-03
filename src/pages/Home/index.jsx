import Header from '../../components/Header';
import Section1 from '../../components/Section1';
import Section2 from '../../components/Section2';
import Section3 from '../../components/Section3';
import style from './Home.module.css'

const Home = () => {
    return (
      <div className={style.home}>
            <Header />
            <Section1 />      
            <Section2 />      
            <Section3 />
      </div>  
    );
  };

export default Home