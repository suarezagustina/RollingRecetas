import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ItemRecetas = ({receta}) => {
    return (
        <>
    <tr>
    <td>{receta.id}</td>
    <td>{receta.recetaTitulo}</td>
    <td>{receta.tiempo}</td>
    <td>{receta.comensales}</td>
    <td>
        <img  className='img-fluid' width={250} src={receta.imagen} alt="imagen de {receta.recetaTitulo}" />
    </td>
    <td>{receta.descripcionBreve} </td>
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