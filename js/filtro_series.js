
let $botonTodo = document.querySelector("#filtro-todo");
let $botonHbo = document.getElementById("filtro-hbo")
let $botonNetflix = document.getElementById("filtro-netflix")
let $botonFilmin = document.getElementById("filtro-filmin")
let $botonPrime = document.getElementById("filtro-prime")
let $botonDisney = document.getElementById("filtro-disney")

console.log($botonTodo);



let div = document.getElementsByClassName("serie")
console.log(div)

$botonTodo.addEventListener("click", ()=> filtarSerie("todo"));
$botonHbo.addEventListener("click", ()=> filtarSerie("hbo"));
$botonNetflix.addEventListener("click", ()=> filtarSerie("netflix"));
$botonFilmin.addEventListener("click", ()=> filtarSerie("filmin"));
$botonPrime.addEventListener("click", ()=> filtarSerie("prime"));
$botonDisney.addEventListener("click", ()=> filtarSerie("disney"));


 function filtarSerie(title){
     for (let i = 0; i < div.length; i++){

        let serie = div[i];
        //<div class="serie" title="prime"></div>

        let liTitle = serie.getAttribute("title");//prime
        console.log(liTitle)
   

    if (title === "todo" || liTitle === title) {
         serie.classList.remove("ocultar")
    } else {
        serie.classList.add("ocultar")
        }
    }
 }
