// Programa para calcular o IMC

const nome = `Carlos`
const peso = "150"
const altura = "1.80"
imc = (peso/(altura*altura));

if(imc >="30") {
    console.log("Carlos, você está acima do peso")
   // console.log("Seu IMC é "+ (imc))
}
else{
    console.log("Carlos, você não está acima do peso");
    //console.log("Seu IMC é "+ (imc))
}