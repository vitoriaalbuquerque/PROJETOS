const number = 11

if(number % 2 === 0){
    if(number % 5 === 0) console.log("O número par é divisível por 5")
    else console.log("O número NÃO é divisível por 5")    
} else{


    for (let i = 2; i < number; i++)
    if (number % i === 0){
        console.log("Ele é  ímpar, mas não é primo")
        break
    } else{
        if (i === number -1) console.log("Ele é um número primo")
}
    } 
