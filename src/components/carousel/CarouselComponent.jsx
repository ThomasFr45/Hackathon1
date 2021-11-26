import { CarouselCard } from "./CarouselCard";
import Carousel from 'react-elastic-carousel';
import "./carousel.css";
import jazz from '../../assets/jazz.jpg';
import reggae from '../../assets/reggae.jpg';
import rap from '../../assets/rap.jpg';
import funk from '../../assets/funk.jpg';
import pop from '../../assets/pop.jpg';
import latino from '../../assets/latino.jpg';
import hiphop from '../../assets/hip-hop.jpg';
import blues from '../../assets/blues.jpg';
import country from '../../assets/country.jpg';
import soul from '../../assets/soull.jpg';
import electro from '../../assets/electro.jpg';
import classic from '../../assets/classic.jpg';
import rock from '../../assets/rock.jpg';


export const CarouselComponent = ({ setSearchValue }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ] 
  return (
      <div className='CarouselComponent'>
          <Carousel breakPoints={breakPoints}> 
            <CarouselCard image={jazz} name='jazz' genre='Jazz' setSearchValue={setSearchValue}/>
            <CarouselCard image={reggae} name='reggae' genre='Reggae' setSearchValue={setSearchValue}/>
            <CarouselCard image={rap} name='rap' genre='Rap' setSearchValue={setSearchValue}/>
            <CarouselCard image={funk} name='funk' genre='Funk' setSearchValue={setSearchValue}/>
            <CarouselCard image={pop} name='pop' genre='Pop' setSearchValue={setSearchValue}/>
            <CarouselCard image={latino} name='latin' genre='Latino' setSearchValue={setSearchValue}/>
            <CarouselCard image={hiphop} name='hiphop'genre='Hip-hop' setSearchValue={setSearchValue}/>
            <CarouselCard image={blues} name='blues' genre='Blues' setSearchValue={setSearchValue}/>
            <CarouselCard image={country} name='country' genre='Country' setSearchValue={setSearchValue}/>
            <CarouselCard image={soul} name='soul' genre='Soul' setSearchValue={setSearchValue}/>
            <CarouselCard image={electro} name='electronic'genre='Electro' setSearchValue={setSearchValue}/>
            <CarouselCard image={classic} name='classique'genre='Classique' setSearchValue={setSearchValue}/>
            <CarouselCard image={rock} name='rock' genre='Rock' setSearchValue={setSearchValue}/>
          </Carousel>
      </div>
  );
}