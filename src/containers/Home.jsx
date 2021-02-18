import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';



const Home = (props) => {
  const {mylist, trends, originals} = props;
  console.log(props)
  return (
    <div className="Home">
      <Search />
      {mylist.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {
              mylist.map(item =>              
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </div>
  );
}

const getInfoToStore = state => {    
    return {
      mylist:state.mylist,
      trends:state.trends,
      originals:state.originals
    }
};


export default connect(getInfoToStore, null)(Home);