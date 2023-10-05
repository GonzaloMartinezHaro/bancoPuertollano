
 
function cargarDatos(){
    /*document.getElementById('idPersona').value = persona.id
    document.getElementById('nombre').value = persona.nombre
    document.getElementById('apellido1').value = persona.apellido1
    document.getElementById('apellido2').value = persona.apellido2
    document.getElementById('nacionalidad').value = persona.nacionalidad*/
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest){  
 document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
}




//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//INFO CUENTA

// Valores por defecto
var ibanDefault = "ES0123456789012345678901";
var saldoDefault = 500;

//Validar que es un numero entero
let valEntero = /^\d+$/

// Obtener los elementos de entrada por su ID
var ibanInput = document.getElementById("iban");
var saldoInput = document.getElementById("saldo");
var mensaje = document.getElementById("mensaje");

// Establecer los valores por defecto
ibanInput.value = ibanDefault;
saldoInput.value = saldoDefault + " euros";

// Agregar un event listener al botón "Ingresar"
var ingresarButton = document.getElementById("ingresar");
ingresarButton.addEventListener("click", function() {

    var ingreso = document.getElementById("ingreso").value;

    if (valEntero.test(ingreso) == true) {

        //error desconocido
        saldoDefault =parseInt(saldoDefault)  + parseInt(ingreso) 
        saldoInput.value = saldoDefault + " euros";

        mensaje.textContent = "Ingreso realizado de la cantidad de: " + ingreso
        mensaje.style.color = "green"
    }

});


// Agregar un event listener al botón "Retirar"
var ingresarButton = document.getElementById("retirar");
ingresarButton.addEventListener("click", function() {
                                                                
    var retirada = document.getElementById("retiro").value
    

if (valEntero.test(retirada)== true) {
                                                                    
    if (retirada<=saldoDefault) {

        saldoDefault = saldoDefault - retirada
        
        saldoInput.value = saldoDefault + " euros"

        mensaje.textContent = "Dinero retirado correctamente: " + retirada + "€"
        mensaje.style.color = "green"


    }else{
        mensaje.textContent = "Fondos insuficientes"
        mensaje.style.color = "red"
    }

}else{
    mensaje.textContent = "Los datos introducidos no son validos"
        mensaje.style.color = "red"
}
   


   

    
});

//evento borrar

 var ingresarInput = document.getElementById("ingreso");
 var retirarInput = document.getElementById("retiro");

 retirarInput.addEventListener("focus", function() {
     
     ingresarInput.value = "";
 });

 ingresarInput.addEventListener("focus",function() {

    retirarInput.value = "";

 });


 //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------