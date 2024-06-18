
import {leerFichero} from "./fetch-try.js";
//Con esta función creamos las cards con los datos obtenidos del fetch()
export async function generarTarjetas(){

    //invoca la funcion y almacena los datos de la misma
    let data = await leerFichero();

    //¿Dónde voy a pintar?
    let convidatsContainer = document.querySelector("#cards")

    data.invitados.forEach(valor => {
        //parte de creacion
        //Recorre la Array y genera los elementos
        let card = document.createElement("article");
        let nomConvidat = document.createElement("h3");
        let descripcioConvidat = document.createElement("p")
        let pictureConvidat = document.createElement("picture");
        let sourceConvidat = document.createElement("source");
        let imgConvidat = document.createElement("img");
        let enlaceModal = document.createElement("a")
        //Escribe el nombre en el <h3></h3>
        nomConvidat.textContent = valor.nom;

        //Escrbie la descripcion en <p></p>
        descripcioConvidat.textContent = valor.descripcio;

        //Escribe el texto en la <a></a> (VER BIOGRAFIA)
        enlaceModal.textContent = valor.modal;
         
          //Escribe valor de source 
          sourceConvidat.srcset = valor.img.srcset
         //escribe valores src de img
 
         imgConvidat.src = valor.img.src;
 
         //escribe valor alt de img
         imgConvidat.alt = valor.img.alt;       

        // card.classList.add(pictureConvidat)

        //Adjuntar los elementos creados a HTML
        card.appendChild(pictureConvidat);
        //<article><picture></picture></article>

        pictureConvidat.appendChild(sourceConvidat);
        pictureConvidat.appendChild(imgConvidat)
        //<picture>
        // <source>
        // <img>

        // </picture>

        card.appendChild(nomConvidat);
        /* <picture>
        <h3>
        </picture>
        */

        card.appendChild(descripcioConvidat);
        /* <picture>
        <h3>
        </picture>
        <p></p>
        */

        card.appendChild(enlaceModal);
        /* <picture>
        <h3>
        </picture>
        <p></p>
        <a></a>
        */
       convidatsContainer.appendChild(card)
       /*
       <div id="cards">
       <article>
       (...)
       </article>
       */ 

       card.classList.add("articonvidats")
       enlaceModal.classList.add("modal")
       descripcioConvidat.classList.add("descripcion")
    });
}
