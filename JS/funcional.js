//crear las propiedades del objeto

let p = {
    teclas = document.querySelectorAll("#calculadora ul li"),
    acion = null,
    digito = null,
    operacion = ddocument.querySelector("#operaciones"),
    cantisimbolo = 0,
    cantdecimal = false,
    resultado = false
}

//creas los metodos

let m = {
    inicio: function () {
               for (let i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirtecla);
        }         
    
    }, oprimirtecla: function (tecla) {
        p.accion = tecla.target.getAttribute("class");
        m.calcular(p.accion);



    }, calcular: function(accion) {
        switch (accion) {
        case "numero":
            console.log(" numero");
            break;
        case "simbolo":
            console.log("simbolo");
            break;
        case "decimal":
            console.log("decimal");
            break;
        case "igual":
            console.log("igual");
            break;
        
        }
    }
}