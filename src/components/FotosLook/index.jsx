import style from './FotosLook.module.css'
import { fotos } from '../../bdFotos';
import Masonry from "react-masonry-css";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

const FotosLook = () => {
    const [count, setCount] = useState(8);
    const [fotosToShow, setFotosToShow] = useState(fotos.slice(0, count));

    const loadMore = () => {
        setCount(count + 1);
        setFotosToShow(fotos.slice(0, count + 1));
      };

      const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };  

        return (
          <InfiniteScroll
            dataLength={fotosToShow.length}
            next={loadMore}
            hasMore={fotosToShow.length < fotos.length}
            scrollThreshold={0.5}
          > <Masonry
            breakpointCols={breakpointColumnsObj}
            className={style.container}
          >
           {fotosToShow.map((foto) => {
              return (
                <img
                  key={foto.id}
                  src={foto.foto}
                  alt="foto"
                  style={{ height: `${foto.altura}` }}
                />
              );
            })}
            </Masonry>
          </InfiniteScroll>
        );
};

export default FotosLook