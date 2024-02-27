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