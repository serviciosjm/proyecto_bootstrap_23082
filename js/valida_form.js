let precio = 200;
function validarEntero(cantidad) {
    let valorEnt = parseInt(cantidad.value);
    //console.log(valorEnt)
    if (!Number.isInteger(valorEnt)) {
        return false;
    } else {
        cantidad.value = valorEnt;
        return (valorEnt);
    }
}

function validaForm(){
    let descEstudiante = 80;
    let descTrainner = 50;
    let descJunior = 15;
    let regLetras  = /^[a-zA-Z]+$/;
    let regCorreo  = /\S+@\S+\.\S+/;
    let regNumero  = /^[0-9]+$/;
    let nombre    = document.getElementById("nombre");
    let apellido  = document.getElementById("apellido");
    let correo    = document.getElementById("correo");
    let cantidad  = document.getElementById("cantidad");
    let selectCat = document.getElementById("categoria").value; 
    //let selectCat = categoria.value;
    //let valor;

    if (!nombre.value){
        alert("Debe ingresar su nombre.")
        nombre.focus()
        return;
    }
    if (!regLetras.test(nombre.value)){
        alert("El nombre debe contener solo letras")
        nombre.focus()
        return;
    }

    if (!apellido.value){
        alert("Debe ingresar su Apellido")
        apellido.focus()
        return;
    }
    if (!regLetras.test(apellido.value)){
        alert("El apellido debe contener solo letras")
        apellido.focus()
        return;
    }

    if (!correo.value){
        alert("Debe ingresar un Correo Electrónico")
        correo.focus()
        return;
    }
    if (!regCorreo.test(correo.value)){
        alert("Ingrese un Correo Electrónico Válido")
        correo.focus()
        return;
    }
    
    valor = validarEntero(cantidad);

    if (!Number(valor)){
        alert("Ingrese solo números en la Cantidad")
        cantidad.focus()
        return;
    }

    if (selectCat == null || selectCat == 0){
        alert("Debe seleccionar una Categoría")
        document.vForm.categoria.focus();
        return;
    }else if(selectCat == "1"){
        //console.log(valor)
        totEstudiante = valor * (precio - (precio * descEstudiante)/100);
        document.getElementById("totalPagar").value = "Total a Pagar: $ " + totEstudiante;
        //console.log(totEstudiante)
    }else if(selectCat == "2"){
       
       totTrainner = valor * (precio - (precio * descTrainner)/100);
       document.getElementById("totalPagar").value = totTrainner;
       document.getElementById("totalPagar").value = "Total a Pagar: $ " + totTrainner;
       //console.log(totTrainner)
    }else if(selectCat == "3"){
        //console.log(valor)
        totJunior = valor * (precio - (precio * descJunior)/100);
        document.getElementById("totalPagar").value = totJunior;
        document.getElementById("totalPagar").value = "Total a Pagar: $ " + totJunior;
        //console.log(totJunior)
    }
}