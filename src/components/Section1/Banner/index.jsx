import { Link } from 'react-router-dom';
import style from './Banner.module.css'

const Banner = () => {
    return (
      <div>
        <div className={style.banner}>
            <h2 translate='no'>DROP GOODS'23</h2>
            <Link to={'/Produtos'}>
              <button>View Products</button>
            </Link>
        </div>
      </div>
  );
};

export default Banner
