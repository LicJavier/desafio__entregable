alert("calculemos el IMC");
let calcular= prompt("Ingrese calcular para comenzar");
let peso= "";
let talla = "";
const imc = (peso, talla) => {return (peso/talla/talla).toFixed(2)}
function programa(){
    peso =parseFloat(prompt("Ingrese su peso en kg ej: 87.5"));    
    talla=parseFloat(prompt("Ingrese su talla en metros, ej: 1.71"));
        resultado = imc(peso, talla);
        if(resultado<18.5){
            alert("¡Estas en bajo peso!");
        }   else if((resultado>=18.5)&&(resultado<=25)){
                alert("Tu indice de masa corporal es " + resultado+ ", el nivel de peso es normal");
            }else if((resultado>=25)&&(resultado<30)){
                alert("Tu indice de masa corporal es " + resultado+ ", estás en sobrepeso");
            }else if(resultado>=30){
                alert("Tu indice de masa corporal es " + resultado+ ", el nivel de peso es obesidad");
            }else{
                alert("Parametros desconocidos");
            }calcular= prompt("ingrese calcular para comenzar");}
    
while((calcular == "calcular")||(calcular=="Calcular")||(calcular=="CALCULAR")){
    programa();
}