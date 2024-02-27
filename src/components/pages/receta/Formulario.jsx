import { Container, Form, Button, FormControl } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { crearecetaAPI, editarRecetaAPI, obtenerRecetaAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";

const Formulario = ({editar, titulo}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();
  const {id} = useParams();
  const navegacion = useNavigate()

  useEffect(()=>{
    if(editar){
  cargarDatosForm()
    }
  }
  ,[])

  const cargarDatosForm = async ()=>{
    const respuesta = await obtenerRecetaAPI(id)
  if(respuesta.status === 200){
    const recetabuscada = await respuesta.json();
    console.log(recetabuscada)
    setValue("recetaTitulo", recetabuscada.recetaTitulo)
    setValue("imagen", recetabuscada.imagen)
    setValue("acercaDeLaReceta", recetabuscada.acercaDeLaReceta)
    setValue("email", recetabuscada.email)
    setValue("descripcionBreve", recetabuscada.descripcionBreve)
    setValue("ingredientes", recetabuscada.ingredientes)
    setValue("instrucciones", recetabuscada.instrucciones)
    setValue("tiempo", recetabuscada.tiempo)
    setValue("comensales", recetabuscada.comensales)
  }else{
    Swal.fire({
      title: "Ocurrio un error",
      text:  "Lo siento!. Ocurrio un error, intenta editar la receta en otro momento",
      icon: "error"
    });
  }
  }

  const onSubmit = async(receta) => {
    if(editar){
      //editar producto 
    const respuesta = await editarRecetaAPI(id, receta)
    if(respuesta.status === 200){
      Swal.fire({
        title: "Receta editada!",
        text:  `La Receta: ${receta.recetaTitulo} fue editada correctamente `,
        icon: "success"
      });
    navegacion("/creador")
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text:  "Lo siento!. Ocurrio un error, intenta editar la receta en otro momento",
        icon: "error"
      });
    }

    }else{
    //  console.log(receta);
      //CREAR
      const respuesta = await crearecetaAPI(receta);
      if(respuesta.status === 201){
        //mensaje
        Swal.fire({
          title: "Receta creada!",
          text:  `La Receta: ${receta.recetaTitulo} fue creada correctamente `,
          icon: "success"
        });
        //console.log("recetacreada")
        reset();
      }else{
      //  console.log("error")
      Swal.fire({
        title: "Ocurrio un error",
        text:  "Lo siento!. Ocurrio un error, intenta crear la receta en otro momento",
        icon: "error"
      });
      }
    };
    }

  return (
    <>
      <section>
        <Container className="mainPage">
          <h2 className="display-5">{titulo}</h2>
          <hr />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <article className="bgForm mx-2">
              <Form.Group className="mb-3" controlId="formNombreReceta">
                <Form.Label className="text-black">
                  Nombre de la Receta:*
                </Form.Label>
                <Form.Control
                  id="nombreReceta"
                  type="text"
                  placeholder="Titulo: Chocotorta"

                  {
                    ...register("recetaTitulo", {
                    required: "El nombre del producto es obligatorio",
                    minLength:{
                      value: 5,
                      message: "Debe ingresar como minimo 5 caracteres para el titulo de la Receta"
                    },
                    maxLength:{
                      value: 70,
                      message: "Debe ingresar como maximo 70 caracteres para el titulo de la Receta"
                    }
                    })
                  }

                />
                <Form.Text className="text-danger">
                  {errors.recetaTitulo?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formImagen">
                <Form.Label>Imagen URL*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/14170007/chocotorta-destacada.jpg"

                  {...register("imagen", {
                    required: "La imagen de la receta es necesaria",
                    pattern: {
                      value: "/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/",
                      message:
                        "Ingrese una URL valida",
                    },
                  })}

                />
                <Form.Text className="text-danger">
                {errors.imagen?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  className="text-center"
                  type="text"
                  placeholder="Comparte un poco mas de este plato. ¿Que lo hace especial para ti? ¿Para quienes los cocinas? etc"

                  {
                    ...register("acercaDeLaReceta", {
                    minLength:{
                      value: 10,
                      message: "Debe ingresar como minimo 10 caracteres para escribir algo acerca de la Receta"
                    },
                    maxLength:{
                      value: 500,
                      message: "Puede ingresar como maximo 500 caracteres para escribir algo acerca de la Receta"
                    }
                    })
                  }

                />
                <Form.Text className="text-danger">
                {errors.acercaDeLaRececta?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-black">
                  Cual es tu email? (Puedes agregarlo por si alguien quiere consultarte algo!!)
                </Form.Label>
                <Form.Control
                  className="text-center"
                  type="email"
                  placeholder="Enter email"{

                  ...register("email", {
                    minLength:{
                        value: 15,
                        message: "Debes ingresar como minimo 15 caracteres"
                    },
                    maxLength:{
                        value: 35,
                        message: "Puedes ingresar como maximo 35 caracteres"
                    }
                })
                }

                />
               <Form.Text className="text-danger">
                {errors.email?.message}
                </Form.Text>
              </Form.Group>

              <div className="row">
                 
                <div className="col-6">
                  <Form.Group className="mb-3" controlId="formComensales">
                    <Form.Label className="text-black">
                      Numero aproximado de comensales:
                    </Form.Label>
                    <Form.Control
                      className="text-center"
                      type="text"
                      placeholder="Ejemplo: 4 personas"

                      {...register("comensales", {
                        required: "El numero de comensales es obligatorio",
                       min: {
                        value: 1,
                        message:
                          "El minimo es al menos una persona",
                       },
                       max: {
                        value: 100000,
                        message:
                        "El precio maximo de personas es 10000",
                       }
                      })}

                    />

                <Form.Text className="text-danger">
                {errors.comensales?.message}
                </Form.Text>
                  </Form.Group>
                </div>

                <div className="col-6">
                  <Form.Group className="mb-3" controlId="formTiempo">
                    <Form.Label className="text-black">Tiempo:*</Form.Label>
                    <Form.Control
                      className="text-center"
                      type="text"
                      placeholder="Ejemplo: 2 horas"

                      {
                        ...register("tiempo", {
                          required: "El tiempo empleado es obligatorio",
                          minLength:{
                              value: 1,
                              message: "Debes ingresar como minimo un caracter (numero)"
                          },
                          maxLength:{
                              value: 25,
                              message: "Puedes ingresar como maximo 25 caracteres (Ej como max: 5 horas y 30 minutos)"
                          }
                      })
                      }

                    />
                <Form.Text className="text-danger">
                {errors.tiempo?.message}
                </Form.Text>
                  </Form.Group>
                </div>
              </div>
            </article>

            <article className="bgForm mt-4">
              <h3>Descripcion Breve de la Receta:*</h3>
              <Form.Group className="mb-3" controlId="formDescripcion">
                <Form.Control
                  type="text"
                  placeholder="Ejemplo: Postre clasico, sencillo y delicioso!!"

                  {
                    ...register("descripcionBreve", {
                    required: "Una descripcion Breve es obligatoria",
                    minLength:{
                      value: 5,
                      message: "Debe ingresar como minimo 5 caracteres para una breve descripcion"
                    },
                    maxLength:{
                      value: 270,
                      message: "Puede ingresar como maximo 270 caracteres para una breve descripcion"
                    }
                    })
                  }

                />
                <Form.Text className="text-danger">
                {errors.descripcionBreve?.message}
                </Form.Text>
              </Form.Group>
            </article>

            <article className="bgForm mx-2 mt-4">
              <h3>Ingredientes*</h3>
              <Form.Group className="mb-3" controlId="formIngredientes">
                <Form.Control
                  type="text"
                  placeholder="Ejemplo: 250g de chocolate"

                  {
                    ...register("ingredientes", {
                    required: "Agregar el ingrediente es obligatorio",
                    minLength:{
                      value: 5,
                      message: "Debe ingresar como minimo 5 caracteres para un ingrediente"
                    },
                    maxLength:{
                      value: 10000,
                      message: "Debe ingresar como maximo 10000 caracteres para un ingrediente"
                    }
                    })
                  }

                />
                 <Form.Text className="text-danger">
                {errors.ingredientes?.message}
                </Form.Text>
              </Form.Group>
            </article>

            <article className="bgForm mx-2 mt-4">
              <h3>Intrucciones:*</h3>
              <Form.Group className="mb-3" controlId="formInstrucciones">
                <Form.Control
                  type="text"
                  placeholder="Ejemplo: Primero hay que comenzar..."               

                  {
                    ...register("instrucciones", {
                      required: "Las instrucciones son obligatorias",
                      minLength:{
                          value: 20,
                          message: "Debes ingresar como minimo 20 caracteres para las instrucciones"
                      },
                      maxLength:{
                          value: 10000,
                          message: "Puedes ingresar como maximo 10000 caracteres para las instrucciones"
                      }
                  })
                  }

                />
                   <Form.Text className="text-danger">
                {errors.instrucciones?.message}
                </Form.Text>
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
