import Search from "./Search";
import { CarouselComponent } from './carousel/CarouselComponent'

const Home = () => {
  return (
    <div > 
      <h2>Sélectionner votre genre musical</h2>
      <CarouselComponent/>
      <Search />
    </div>
  );
}
export default Home;