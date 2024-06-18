//Fetch de un JSON o XML o CSV (Valores separados por comas)
//Export (palabra reservada) porque posteriormente podrá ser importada desde otro JS
//async para cargar al mismo tiempo que el resto de recursos y poder hacer uso de await
export async function leerFichero(){

    try{
        //Espera a cargar los datos de JSON
        let respuesta = await fetch("json/objetos.json") //Se obtiene siempre una string
        //Espera a leer el contenido JSON
        //Luego, haz un PARSE a esa Strind a datos que sean iterables por JavaScript -> OBJETOS / ARRAY
        let datos = await respuesta.json();

        //Con return devuelve los datos fuera de la funcion, en otro fichero JS
        return datos;

    }catch(error){
        console.log(error);
    }
}