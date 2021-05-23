// guardo en la constante "bloqueEducacion" la referencia al div con id="educacion"
// que voy a usar para luego meter dentro de ella, todos los componentes que voy a crear
const bloqueEducacion = document.querySelector("#educacion");

// con este ciclo for recorro el array que se encientra en el archivo educacion.js con 
// el nombre "educacion"
for (let i = 0; i < educacion.length; i++) {

// en la constante "element" guardo cada uno de los elementos que tenga "educacion"
    const element = educacion[i];

// creo un elemento <div></div> y los guardo en "divCard"
    let divCard = document.createElement("div");

    // le agrego la clase "card" (clase de ccs) a "divCard"
    divCard.className="card";

    let divRow= document.createElement("div");
    divRow.className="row no-gutters";
    let divCol4= document.createElement("div");
    divCol4.className="col-md-4 text-center";

    // creo un elemento <a></a> y lo guardo en en la variable "enlaceImagenMiniatura"
    let enlaceImagenMiniatura= document.createElement("a");

    // le agrego una url al tag <a href=""></a> 
    enlaceImagenMiniatura.href= element.urlminiatura;

    // le agrego una clase al tag <a class=""></a> 
    enlaceImagenMiniatura.className= "card-link";

    // le agrego un target al tag <a target=""></a> 
    enlaceImagenMiniatura.target= "_blank";

    // creo un elemento <img /> y lo gaurdo en la variable "imagenMiniatura" 
    let imagenMiniatura= document.createElement("img");

    // ahora indico fuente de la imagen con el atributo src  <img src="" />
    imagenMiniatura.src= element.miniatura;
    imagenMiniatura.className= "card-img";
    let divCol8= document.createElement("div");
    divCol8.className="col-md-8 detalle-cert";
    let divCardBody= document.createElement("div");
    divCardBody.className= "card-body p-0";
    let h5= document.createElement("h5");
    h5.className="card-title";
    h5.innerText=element.titulacion;
    let p1=document.createElement("p");
    p1.className="card-text";
    p1.innerText= element.institucion;
    let p2=document.createElement("p");
    p2.className="card-text";
    p2.innerText="";
    let small= document.createElement("small");
    small.className="text-muted";
    small.innerText=element.mes+" "+element.anio;
    p2.appendChild(small);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(p1);
    divCardBody.appendChild(p2);
    divCol8.appendChild(divCardBody);
    enlaceImagenMiniatura.appendChild(imagenMiniatura);
    divCol4.appendChild(enlaceImagenMiniatura);
    divRow.appendChild(divCol4);
    divRow.appendChild(divCol8);
    divCard.appendChild(divRow);
    bloqueEducacion.appendChild(divCard);
}
