import {Card, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const CardReceta = ({receta}) => {
    return (
        <>
   <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img src={receta.imagen} alt="imagen de {receta.recetaTitulo}" className="cardImagen" />
        </div>
        <Card.Body className='cardBody'>
              <Card.Title className="colorPrincipal2 mb-0">
              {receta.recetaTitulo}
              </Card.Title>
            <Card.Text className="fs-5">
            <Card.Text className="mb-0 cardText">
            {receta.descripcionBreve}
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