import {Card, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const CardReceta = () => {
    return (
        <>
   <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img src="https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cafe" className="cardImagen" />
        </div>
        <Card.Body className='cardBody'>
              <Card.Title className="colorPrincipal2 mb-0">
               Titulo de la receta
              </Card.Title>
            <Card.Text className="fs-5">
            <Card.Text className="mb-0 cardText">
                Descripcion breve de la receta
            </Card.Text>
        </Card.Text>


               </Card.Body>
        <Card.Footer className="text-end">
        <Link className='btn btn-dark me-2' to='/detalleReceta'>Ver más</Link>
      </Card.Footer>
      </Card>
    </Col>
        </>
    );
};

export default CardReceta;