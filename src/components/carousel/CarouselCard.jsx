import "./carousel.css";  
import { Link } from 'react-router-dom';

export const CarouselCard = ({image, name, genre}) => {
  return (
    
    <div className="carouselContainer" >
      <Link to="/listening">
      <img className="carouselImage" src={image} alt={name} />
      <div className="carouselOverlay">
        <div className="carouselText">{genre}</div>
      </div>
      </Link>
    </div>
  ); 
}