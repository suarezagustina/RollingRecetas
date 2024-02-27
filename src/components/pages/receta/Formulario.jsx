import { Container, Form, Button, FormControl } from "react-bootstrap";
import React, { useState } from "react";

const Formulario = () => {
  const [formControls, setFormControls] = useState([]);

  const agregarFormControl = () => {
    setFormControls((prevFormControls) => [
      ...prevFormControls,
      <div id="botoning">
      <FormControl key={prevFormControls.length}/>
      </div>
    ]);
  };

  const eliminarFormControl = () => {
    setFormControls((prevFormControls) => {
      const newFormControls = [...prevFormControls];
      newFormControls.pop();
      return newFormControls;
    });
  };

  return (
    <>
      <section>
        <Container className="mainPage">
            <h2 className="display-5">Agrega Tu receta!!</h2>
            <hr />
          <Form>
            <article className="bgForm mx-2">
            <Form.Group className="mb-3" controlId="formNombreReceta">
              <Form.Label className="text-black">Nombre de la Receta:*</Form.Label>
              <Form.Control
                id="nombreReceta"
                type="text"
                placeholder="Titulo: Chocotorta"
              />
              <Form.Text className="text-danger">
                <p>error prueba</p>
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/14170007/chocotorta-destacada.jpg"
          />
          <Form.Text className="text-danger">
        <p>error prueba</p>
          </Form.Text>
        </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                className="text-center" 
                type="text"
                placeholder="Comparte un poco mas de este plato. ¿Que lo hace especial para ti? ¿Para quienes los cocinas? etc"
              />
              <Form.Text className="text-danger">
                <p>error prueba</p>
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-black">Cual es tu email?</Form.Label>
              <Form.Control className="text-center"  type="email" placeholder="Enter email" />
              <p className="text-danger">error prueba</p>
            </Form.Group>
            <div className="row">
            <div className="col-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-black">Numero aproximado de comensales:</Form.Label>
              <Form.Control className="text-center" type="text" placeholder="Ejemplo: 4 personas" />
              <p className="text-danger">error prueba</p>
            </Form.Group>
            </div>
            <div className="col-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-black">Tiempo:*</Form.Label>
              <Form.Control className="text-center" type="text" placeholder="Ejemplo: 2 horas" />
              <p className="text-danger">error prueba</p>
            </Form.Group>
            </div>
            </div>
            </article>

            <article className="bgForm mt-4">
                <h3>Descripcion Breve de la Receta:*</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Ejemplo: Postre clasico, sencillo y delicioso!!" />
              <p className="text-danger">error prueba</p>
            </Form.Group>
            </article>


            <article className="bgForm mx-2 mt-4">
                <h3>Ingredientes*</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Ejemplo: 250g de chocolate" />
              <p className="text-danger">error prueba</p>
            </Form.Group>
            <div>
                {formControls}
                <Button onClick={agregarFormControl} className="mt-3" variant="dark">
                  Agregar Ingrediente
                </Button>
                <Button onClick={eliminarFormControl} className="ms-3 mt-3" variant="dark">
                  Eliminar último ingrediente
                </Button>
              </div>
            </article>

            <article className="bgForm mx-2 mt-4">
                <h3>Intrucciones:*</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Ejemplo: Primero hay que comenzar..." />
              <p className="text-danger">error prueba</p>
            </Form.Group>
            </article>

<div className="text-center">
            <Button variant="dark" type="submit" className="my-3">
              Agregar receta
            </Button>
            </div>

          </Form>
        </Container>
      </section>
    </>
  );
};

export default Formulario;
