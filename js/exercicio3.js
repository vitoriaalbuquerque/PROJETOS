const randomNumber = Math.floor(Math.random() * (10 - 1) + 1)
const winningNumber = Math.floor(Math.random() * (10 - 1) + 1)

console.log(randomNumber, "randomNumber")
console.log(winningNumber, "winningNumber")

if(randomNumber === winningNumber){
    console.log("Você ganhou")
} else{
    console.log("Você perdeu")
}