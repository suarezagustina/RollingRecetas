import {Container, Carousel} from 'react-bootstrap'
import bannerimg1 from "../../assets/bannerimg1.png"
import bannerimg2 from "../../assets/bannerimg2.png"
import bannerimg3 from "../../assets/bannerimg3.png"

const Inicio = () => {
    return (
        <>
          <Carousel>
      <Carousel.Item>
        <img src={bannerimg1} text="First slide" className='bannerimg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={bannerimg2} text="Second slide" className='bannerimg'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={bannerimg3} text="Third slide" className='bannerimg'/>
      </Carousel.Item>
    </Carousel>
        <Container className='mainPage mt-4'>
          <h1 className='text-center'>Subi o mira las recetas!!</h1>
        </Container>
        </>
    );
};

export default Inicio;