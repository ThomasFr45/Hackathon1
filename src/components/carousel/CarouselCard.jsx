import "./carousel.css";  
import { Link } from 'react-router-dom';

export const CarouselCard = ({image, name, genre}) => {
  return (
    
    <div className="container" >
      <Link to="/listening">
      <img className="image" src={image} alt={name} />
      <div className="overlay">
        <div className="text">{genre}</div>
      </div>
      </Link>
    </div>
  ); 
}