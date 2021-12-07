import Search from "./Search";
import { CarouselComponent } from "./carousel/CarouselComponent";
import Navbar from "./Navbar";
import Banniere from "./Banniere";

const Home = ({ radio }) => {
  return (
    <>
      <Navbar />
      <Banniere title="Bienvenue, ici le plus important, c'est de passer un bon moment !" />
      <div>
        <h2 className="home-h2">Sélectionnez votre genre musical</h2>
        <CarouselComponent />
        <Search radio={radio} />
      </div>
    </>
  );
};
export default Home;
