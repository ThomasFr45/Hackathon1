import "./carousel.css";  

export const CarouselCard = ({image, name, genre}) => {
  return (
    <div className="container" >
      <img className="image" src={image} alt={name} />
      <div className="overlay">
        <div className="text">{genre}</div>
      </div>
    </div>
  ); 
}