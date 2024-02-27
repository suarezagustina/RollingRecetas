import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarRecetaAPI, leeRecetaAPI } from "../../../helpers/queries";


const ItemRecetas = ({receta, setrecetas}) => {

const borrarReceta =()=>{
    Swal.fire({
        title: "¿Estas seguro de eliminar esta Receta?",
        text: "No puedes revertir este proceso posteriormente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
  
        const respuesta = await borrarRecetaAPI (receta.id)
        if(respuesta.status === 200){
            const recetaActualizada = await leeRecetaAPI()
            setrecetas(recetaActualizada)
            Swal.fire({
                title: "Receta eliminada",
                text: `La receta "${receta.recetaTitulo}" fue eliminada correctamente`,
                icon: "success"
              });
            
        }else{
            Swal.fire({
                title: "Ocurrio un error",
                text: `La receta "${receta.recetaTitulo}" no fue eliminada`,
                icon: "error"
              });
        }
        }
    });
}
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
    <div className="d-flex">
    <Link variant="warning" className="me-lg-2 btn btn-warning" to={`/creador/editareceta/${receta.id}`}>
          <i className="bi bi-pencil-square"></i>
    </Link>
    <Button className="mt-1 botonBorrar ms-3 bg-danger border-danger" onClick={borrarReceta}>
    <i class="bi bi-trash3 text-white"></i>
    </Button>
    </div>
    </td>
  </tr>
        </>
    );
};

export default ItemRecetas;