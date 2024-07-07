import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel showArrows={false} showStatus={true} showThumbs={false} stopOnHover={true} infiniteLoop={true} autoPlay interval={1000}>
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1670934158407-d2009128cb02?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1670934158275-0a51383caa1d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1670934158407-d2009128cb02?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default Banner;


// import imag1 from '../../assets/1';
// import imag2 from '../../assets/2';
// import imag3 from '../../assets/3';
// import imag2 from '../../../src/assets/banner2.jpg';
// import imag3 from '../../../src/assets/banner3.jpg';
