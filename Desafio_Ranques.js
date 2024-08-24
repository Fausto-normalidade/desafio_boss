let heroi = [ 
    {nome: "sexo" , pontosDeLiga: 9000}
]

for( let ranque = 0; ranque < heroi.length; ranque++){
    let nomeHeroi = heroi[ranque].nome
    let xp = heroi[ranque].pontosDeLiga
    let resultado = ""

if(xp <= 1000){
    resultado = "ferro"  
} 
else if (xp >= 1001 && xp <= 2000) {
    resultado  = "bronze"
} 
else if (xp >= 2001 && xp <= 5000) {
    resultado = "prata"
} 
else if (xp >= 5001 && xp <= 7000) {
    resultado = "ouro"
} 
else if (xp >= 7001 && xp <= 8000) {
    resultado = "platina"
} 
else if (xp >= 8001 && xp <= 9000) {
    resultado = "ascendente"
} 
else if (xp >= 9001 && xp <= 10000) {
    resultado = "imortal"
} 
else{
    resultado = "radiante"
}
console.log("O heroi de nome, " + nomeHeroi + ". Esta no nivel de classificacao: " + resultado)
}























