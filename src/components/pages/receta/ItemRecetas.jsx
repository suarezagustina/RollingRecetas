import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ItemRecetas = () => {
    return (
        <>
    <tr>
    <td>id</td>
    <td>chocotorta</td>
    <td>2 horas</td>
    <td>5 comensales</td>
    <td>
        <img  className='img-fluid' width={250} src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/14170007/chocotorta-destacada.jpg" alt="" />
    </td>
    <td>chocotorta rica</td>
    <td className="text-center">
    <Link variant="warning" className="me-lg-2 btn btn-warning" to="/creador/editareceta">
          <i className="bi bi-pencil-square"></i>
    </Link>
    <Button className="mt-1 botonBorrar ms-3 bg-danger border-danger">
    <i class="bi bi-trash3 text-white"></i>
    </Button>
    </td>
  </tr>
        </>
    );
};

export default ItemRecetas;