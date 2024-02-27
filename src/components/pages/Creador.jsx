import { Container, Table, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ItemRecetas from "./receta/ItemRecetas";
import { useEffect, useState } from "react";
import { leeRecetaAPI } from "../../helpers/queries";

const Creador = () => {
const [recetas, setrecetas] = useState([]);

useEffect(()=>{
 traerecetas();
},[]
)

const traerecetas = async()=>{
  try {
    const listaRecetasAPI =
    await leeRecetaAPI();
    setrecetas(listaRecetasAPI);
  } catch (error) {
    console.log(error)
  }
}

    return (
        <>
        <Container className="mainPage">
          <article className="d-flex align-items-center">
            <h2 className="text-black display-5 mt-2">Todas nuestras Recetas</h2>
            <Button className="mt-1 boton border-success bg-success ms-auto">
            <Link className="btn btn-success border-0" to="/creador/creareceta">
            <i className="bi bi-file-earmark-plus fs-2"></i>
            </Link>
            </Button>
            </article>
            <hr/>
            <Table responsive striped bordered hover>
  <thead>
    <tr>
      <th>Code</th>
      <th>Receta</th>
      <th>Tiempo</th>
      <th>Comensales</th>
      <th>Imagen</th>
      <th>Descripcion breve</th>
      <th>Opciones</th>
    </tr>
  </thead>
  <tbody>
  {
    recetas.map((receta)=><ItemRecetas key={receta} receta={receta} setrecetas={setrecetas}></ItemRecetas>)
  }
  </tbody>
</Table>
        </Container>
    </>
    );
};

export default Creador;