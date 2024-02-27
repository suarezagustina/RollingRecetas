const URI_RECETAS= import.meta.env.VITE_API_RECETAS;

console.log(URI_RECETAS);
//get
 export const leeRecetaAPI = async()=>{
    try {
        const respuesta = await fetch(URI_RECETAS);
       // console.log(respuesta);
        const listarecetas = await respuesta.json();
     //   console.log(listarecetas);
        return listarecetas;
    } catch (error) {
        console.log(error)
    }
}
//post
export const crearecetaAPI = async(recetaNueva)=>{
try {
    const respuesta = await fetch(URI_RECETAS, {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(recetaNueva)
    })
    console.log(respuesta)
    return respuesta
} catch (error) {
    console.log(error)
}
}
//borrar receta
export const borrarRecetaAPI = async(id)=>{
try {
    const respuesta = await fetch(`${URI_RECETAS}/${id}`, {
        method: "DELETE"
    })
    console.log(respuesta)
    return respuesta
} catch (error) {
    console.log(error)
}
}
//get d una receta
export const obtenerRecetaAPI = async(id)=>{
    try {
        const respuesta = await fetch(`${URI_RECETAS}/${id}`);
       // const recetaBuscada = await respuesta.json();
       console.log(respuesta)
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}
//funcion put
export const editarRecetaAPI = async(id, receta)=> {
    try {
        const respuesta = await fetch(`${URI_RECETAS}/${id}`,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(receta)
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }
}