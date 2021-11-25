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


export const CarouselComponent = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ] 

  return (
      <div className='CarouselComponent'>
          <Carousel breakPoints={breakPoints}> 
            <CarouselCard image={jazz} name='jazz' genre='Jazz'/>
            <CarouselCard image={reggae} name='reggae' genre='Reggae'/>
            <CarouselCard image={rap} name='rap' genre='Rap'/>
            <CarouselCard image={funk} name='funk' genre='Funk'/>
            <CarouselCard image={pop} name='pop' genre='Pop'/>
            <CarouselCard image={latino} name='latin' genre='Latino'/>
            <CarouselCard image={hiphop} name='hiphop'genre='Hip-hop'/>
            <CarouselCard image={blues} name='blues' genre='Blues'/>
            <CarouselCard image={country} name='country' genre='Country'/>
            <CarouselCard image={soul} name='soul' genre='Soul'/>
            <CarouselCard image={electro} name='electronic'genre='Electro'/>
            <CarouselCard image={classic} name='classique'genre='Classique'/>
            <CarouselCard image={rock} name='rock' genre='Rock'/>
          </Carousel>
      </div>
  );
}