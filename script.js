//  ************ SIMULADOR PLAZO FIJO  **********
//Solicita la cantidad de meses y el monto,luego consulta si desea volver a crear el plazo fijo para salir o no del WHILE.
// El interés compuesto se calculó mediante un FOR, en este caso con capitalización mensual.


let tiempo = 1;  // En meses.
let interesAnual = 40;  // Capitalización mensual.
let ganancia = 0;   
let interesObtenido = 0;
let plazofijo = CrearPlazofijo();
 

//****  Funciones a usar ********

//La funcion toma de datos es para que más adelante se pueda hacer un login
function tomadedatos(){
      let nombre= prompt ("Ingrese su nombre")
      let apellido= prompt ("Ingrese su apellido")
      let mail= prompt ("Ingrese su mail")
      
}

function CrearPlazofijo(){
  let plazofijo= prompt ("Desea constituir un plazo fijo? Indique Si o No");
  return plazofijo
}

function continuarPlazofijo(){
 let plazofijo = prompt ("Desea volver a crear un plazo fijo? Indique Si o No");
 return plazofijo
}

function noCrearPlazofijo(){
  alert ("Hasta luego")
}

function monto(){
  let montoaInvertir = parseInt (prompt ("Qué monto desea invertir?"))
  return montoaInvertir
}

function meses(){
  let tiempoMeses=parseInt(prompt ("Cuántos meses desea mantener la inversión?") )
  return tiempoMeses
}

function calculoInteresCompuesto(){
  for (let i=1; i<=tiempo; i++){ 
    interesObtenido = (ganancia * interesAnual / 1200) //calcula el interés que se obtiene mensualmente.
    ganancia = interesObtenido + ganancia   // lo suma a ganancia (es interés compuesto).
    console.log (ganancia)       // se puede ver mensualmente cuanto va ganando.
    } 
    alert (`Su ganancia es de ${ganancia.toFixed(2)}`)
}

/// *** Código ***
if (plazofijo.toLowerCase() !== "no"){
    tomadedatos();
}

while (plazofijo.toLowerCase() == "si") {
  ganancia= monto();
  tiempo= meses();
  calculoInteresCompuesto()   
  plazofijo = continuarPlazofijo(); // Condición para salir o no del While.
}
  
noCrearPlazofijo()
