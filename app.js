
const formulario = document.getElementById("formulario");
const nombreTexto = document.getElementById("nombre");
const primerApellidoTexto = document.getElementById("primer_apellido");
const segundoApellidoTexto = document.getElementById("segundo_apellido");
const nacionalidadTexto = document.getElementById("nacionalidad");
const mensajeCorrecto = document.getElementById("mensajeCorrecto");
const error = document.getElementById("error");


// Verifica si hay datos de usuario almacenados en la sesión.
if (sessionStorage.getItem("datosUsuario")) {
    const datosUsuario = JSON.parse(sessionStorage.getItem("datosUsuario"));
    // Rellena los campos de texto con los datos del usuario.
    nombreTexto.value = datosUsuario.nombre;
    primerApellidoTexto.value = datosUsuario.primer_apellido;
    segundoApellidoTexto.value = datosUsuario.segundo_apellido;
    nacionalidadTexto.value = datosUsuario.nacionalidad;
}

// Agrega un controlador de eventos al formulario para manejar la modificación de datos.
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    // Obtiene los valores de los campos de texto.
    const nombre = nombreTexto.value;
    const primerApellido = primerApellidoTexto.value;
    const segundoApellido = segundoApellidoTexto.value;
    const nacionalidad = nacionalidadTexto.value;



    if (nombre.length < 3 || nombre.length > 20 ||
        primerApellido.length < 3 || primerApellido.length > 20 ||
        segundoApellido.length < 3 || segundoApellido.length > 20 ||
        nacionalidad.length < 3 || nacionalidad.length > 15) {
        // Muestra el mensaje de error en rojo.
        error.textContent = "Error: Verifica las validaciones";
        error.style.display = "block";
        mensajeCorrecto.style.display = "none";
        return;
    }

    // Crea un objeto con los nuevos datos del usuario.
    const datosUsuario = {
        nombre,
        primer_apellido: primerApellido,
        segundo_apellido: segundoApellido,
        nacionalidad,
    };

    // Guarda los datos del usuario en la sesión.
    sessionStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));



    mensajeCorrecto.style.color = "green";
    mensajeCorrecto.style.display = "block";
    mensajeCorrecto.textContent = "Guardado correctamente";

  

    // Puedes agregar aquí cualquier otra lógica que necesites, como enviar los datos a un servidor.

    // No es necesario actualizar los cuadros de texto ya que se han modificado directamente.
});

// function cargarDatos(){
//     /*document.getElementById('idPersona').value = persona.id
//     document.getElementById('nombre').value = persona.nombre
//     document.getElementById('apellido1').value = persona.apellido1
//     document.getElementById('apellido2').value = persona.apellido2
//     document.getElementById('nacionalidad').value = persona.nacionalidad*/
//     menu = document.getElementById('menu').innerHTML
// }

// function cargarCabecera(dest){  
//  document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
// }




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