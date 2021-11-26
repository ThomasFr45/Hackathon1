import Search from "./Search";
import { CarouselComponent } from './carousel/CarouselComponent'

const Home = ({ radio }) => {
  return (
    <div > 
      <h2>Sélectionner votre genre musical</h2>
      <CarouselComponent/>
      <Search radio={radio}/>
    </div>
  );
}
export default Home;