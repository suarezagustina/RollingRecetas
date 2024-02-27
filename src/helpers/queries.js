const URI_RECETAS= import.meta.env.VITE_API_RECETAS;

console.log(URI_RECETAS);

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