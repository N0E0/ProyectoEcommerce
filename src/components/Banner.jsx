import "../styles/banner.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/img/bannerImg1.jpg';
import image4 from '../assets/img/bannerImg2.png';
import "react-responsive-carousel"

const Banner = () => {
  return (
    <div className="banner">
      <Carousel className="carrousel-home" showArrows={false}  showThumbs={false}>
        <div>
      <div className="banner-text">
        <h1>GINOGA</h1>
        <p className="eslogan">A un click de todo lo que buscas..</p>
      </div>
          <img src={image1} alt="Imagen 1" />
        </div>
        <div>
          <img src={image4} alt="Imagen 4"/>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
