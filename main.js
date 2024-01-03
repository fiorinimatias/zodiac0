function signos(){ 
    var dia = document.getElementById("dia").value
    var mes = document.getElementById("mes").value.toLowerCase()

    if (mes === "enero") {
        if(dia <= 20){
            document.getElementById("imagenes").src="capricornio.png"
        } else {
            document.getElementById("imagenes").src="acuario.png"
        }
    } 

    else if (mes === "febrero") {
        if(dia <= 19){
            document.getElementById("imagenes").src="acuario.png"
        } else {
            document.getElementById("imagenes").src="piscis.png"
        }
    }
    
    else if (mes === "marzo") {
        if(dia <= 20){
            document.getElementById("imagenes").src="piscis.png"
        } else {
            document.getElementById("imagenes").src="aries.png"
        }
    }  

    else if (mes === "abril") {
        if(dia <= 21){
            document.getElementById("imagenes").src="aries.png"
        } else {
            document.getElementById("imagenes").src="tauro.png"
        }
    } 
    
    else if (mes === "mayo") {
        if(dia <= 21){
            document.getElementById("imagenes").src="tauro.png"
        } else {
            document.getElementById("imagenes").src="geminis.png"
        }
    } 

    else if (mes === "junio") {
        if(dia <= 21){
            document.getElementById("imagenes").src="geminis.png"
        } else {
            document.getElementById("imagenes").src="cancer.png"
        }
    } 

    else if (mes === "julio") {
        if(dia <= 22){
            document.getElementById("imagenes").src="cancer.png"
        } else {
            document.getElementById("imagenes").src="leo.png"
        }
    } 

    else if (mes === "agosto") {
        if(dia <= 22){
            document.getElementById("imagenes").src="leo.png"
        } else {
            document.getElementById("imagenes").src="virgo.png"
        }
    } 

    else if (mes === "septiembre") {
        if(dia <= 22){
            document.getElementById("imagenes").src="virgo.png"
        } else {
            document.getElementById("imagenes").src="libra.png"
        }
    } 

    else if (mes === "octubre") {
        if(dia <= 22){
            document.getElementById("imagenes").src="libra.png"
        } else {
            document.getElementById("imagenes").src="escorpio.png"
        }
    } 

    else if (mes === "noviembre") {
        if(dia <= 22){
            document.getElementById("imagenes").src="escorpio.png"
        } else {
            document.getElementById("imagenes").src="sagitario.png"
        }
    } 

    else if (mes === "diciembre") {
        if(dia <= 21){
            document.getElementById("imagenes").src="sagitario.png"
        } else {
            document.getElementById("imagenes").src="capricornio.png"
        }
    } 
}