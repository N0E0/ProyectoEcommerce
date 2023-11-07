import "../styles/banner.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/img/bannerImg.jpg';
import image2 from '../assets/img/bannerImg2.jpg';
import image3 from '../assets/img/bannerImg3.jpg';
import image4 from '../assets/img/bannerImg4.jpg';
import "react-responsive-carousel"

const Banner = () => {
  return (
    <div className="banner">
      <Carousel showArrows={false}>
        <div>
          <img src={image1} alt="Imagen 1" />
        </div>
        <div>
          <img src={image2} alt="Imagen 2" />
        </div>
        <div>
          <img src={image3} alt="Imagen 3" />
        </div>
        <div>
          <img src={image4} alt="Imagen 3"/>
        </div>
      </Carousel>
      <div className="banner-text">
        <h1>GINOGA</h1>
        <p>A un click de todo lo que buscas..</p>
      </div>
    </div>
  );
};

export default Banner;
