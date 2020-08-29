const bloqueEducacion = document.querySelector("#educacion");
for (let i = 0; i < educacion.length; i++) {
    const element = educacion[i];
    

    let divCard = document.createElement("div");
    divCard.className="card";
    let divRow= document.createElement("div");
    divRow.className="row no-gutters";
    let divCol4= document.createElement("div");
    divCol4.className="col-md-4 text-center";
    let enlaceImagenMiniatura= document.createElement("a");
    enlaceImagenMiniatura.href= element.urlminiatura;
    enlaceImagenMiniatura.className= "card-link";
    enlaceImagenMiniatura.target= "_blank";
    let imagenMiniatura= document.createElement("img");
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
