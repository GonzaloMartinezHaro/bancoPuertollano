
try {

    
// Valores por defecto
var ibanDefault = "ES0123456789012345678901";
var saldoDefault = 500;

//Validar que es un numero entero
let valEntero = /^\d+$/

// Obtener los elementos de entrada por su ID
var ibanInput = document.getElementById("iban");
var saldoInput = document.getElementById("saldo");
var mensaje = document.getElementById("mensaje");



if (sessionStorage.getItem("datosSaldo")) {
    const datosSaldo = JSON.parse(sessionStorage.getItem("datosSaldo"));
    // Rellena el campo de saldo con el daro guardado.
    saldoInput.value = datosSaldo.saldo;
    ibanInput.value = ibanDefault;

    
}else{

    // Establecer los valores por defecto
    ibanInput.value = ibanDefault;
    saldoInput.value = saldoDefault + " euros";


}



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

    datosSaldo = {

        saldo: saldoInput.value,
    }
    sessionStorage.setItem("datosSaldo", JSON.stringify(datosSaldo));

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
   
datosSaldo = {

    saldo: saldoInput.value,
}
sessionStorage.setItem("datosSaldo", JSON.stringify(datosSaldo));

   

    
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


  



    
} catch (error) {



    
}



 //ParteUno
 //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



 try {

    
var formulario = document.getElementById("formulario");
var nombreTexto = document.getElementById("nombre");
var primerApellidoTexto = document.getElementById("primer_apellido");
var segundoApellidoTexto = document.getElementById("segundo_apellido");
var nacionalidadTexto = document.getElementById("nacionalidad");
var mensajeCorrecto = document.getElementById("mensajeCorrecto");
var error = document.getElementById("error");




// Verifica si hay datos de usuario almacenados en la sesión.
if (sessionStorage.getItem("datosUsuario") != null) {
    const datosUsuario = JSON.parse(sessionStorage.getItem("datosUsuario"));
    // Rellena los campos de texto con los datos del usuario.
    nombreTexto.value = datosUsuario.nombre;
    primerApellidoTexto.value = datosUsuario.primer_apellido;
    segundoApellidoTexto.value = datosUsuario.segundo_apellido;
    nacionalidadTexto.value = datosUsuario.nacionalidad;
}


    document.getElementById("agregarDatos").addEventListener("click", function () {
   
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
        error.style.color = "red";
        error.textContent = "Error: Compruebe que ha rellenado correctamente los campos";
        error.style.display = "block";
        mensajeCorrecto.style.display = "none";
        return;
    }else{
        
    mensajeCorrecto.style.color = "green";
    mensajeCorrecto.textContent = "Guardado correctamente";
    error.style.display = "none";

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
    mensajeCorrecto.textContent = "Guardado correctamente";
   
});
    
 } catch (error) {
    
 }



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Parte3

    
    

    var formulario = document.getElementById("formularioTarjeta");
    var listaTarjetas = document.getElementById("listaTarjetas");
    var mensajeCorrecto2 = document.getElementById("mensajeCorrecto2");
    var error2 = document.getElementById("error2");

    // Cargar tarjetas predefinidas

    
    if(sessionStorage.getItem("tarjetas") === null){
        var Tarjeta1 = {
            numeroTarjeta :'1234 12345 123456' ,
            cvv : 123,
            tarjetaActiva: 'Si'
        };
        guardarTarjetaEnSessionStorage(Tarjeta1)
        
    
        var Tarjeta2 = {
            numeroTarjeta :'1234 12345 123456' ,
            cvv : '123',
            tarjetaActiva: 'No'
        };
        guardarTarjetaEnSessionStorage(Tarjeta2)
        

    }
 

    cargarTarjetasDesdeSessionStorage();

    document.getElementById("agregarTarjeta").addEventListener("click", function () {
        const numeroTarjeta = document.getElementById("numeroTarjeta").value;
        const cvv = document.getElementById("cvv").value;
        const tarjetaActiva = document.getElementById("tarjetaActiva").checked;

        // Validar y agregar la tarjeta a la tabla y a SessionStorage
        if (cvv == "" || numeroTarjeta == "") {
            error2.textContent = "Rellene los campos";
        } else if (cvv.length>3 || cvv.length<3) {
            error2.textContent = "el cvv debe contener 3 digitos";
           
        } else if (numeroTarjeta.length> 17 || numeroTarjeta.length<17) {
            error2.textContent = "El formato del numero de la tarjeta es incorrecto";
           
        }
        else{
            const nuevaTarjeta = document.createElement("tr");
            nuevaTarjeta.innerHTML = `
                <td>${ibanDefault}</td>
                <td>${numeroTarjeta}</td>
                <td>${tarjetaActiva ? "Sí" : "No"}</td>
            `;
            listaTarjetas.appendChild(nuevaTarjeta);

            // Guardar la tarjeta en SessionStorage
            guardarTarjetaEnSessionStorage({
                numeroTarjeta,
                cvv,
                tarjetaActiva
            });

            // Limpiar el formulario después de agregar la tarjeta
            formulario.reset();
            
            error2.textContent = "";
            }
        }
    );

    // Función para guardar la tarjeta en SessionStorage
    function guardarTarjetaEnSessionStorage(tarjeta) {
        let tarjetasGuardadas = JSON.parse(sessionStorage.getItem("tarjetas")) || [];
        tarjetasGuardadas.push(tarjeta);
        sessionStorage.setItem("tarjetas", JSON.stringify(tarjetasGuardadas));
    }

    // Función para cargar las tarjetas almacenadas en SessionStorage
    function cargarTarjetasDesdeSessionStorage() {
        const tarjetasGuardadas = JSON.parse(sessionStorage.getItem("tarjetas")) || [];
        tarjetasGuardadas.forEach(tarjeta => {
            const nuevaTarjeta = document.createElement("tr");
            nuevaTarjeta.innerHTML = `
                <td>${ibanDefault}</td>
                <td>${tarjeta.numeroTarjeta}</td>
                <td>${tarjeta.tarjetaActiva ? "Sí" : "No"}</td>
            `;
            listaTarjetas.appendChild(nuevaTarjeta);
        });
    }
