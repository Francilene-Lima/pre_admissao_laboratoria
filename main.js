let name = prompt("Bem vindX!  Qual é o seu nome?")

let test = prompt("Quer mesmo dar início a prova? \n Digite 1 para Sim \n Digite 2 para Não")

if (test == "1"){
    let answer1 = prompt ("Quanto é 2+2. Digite a opção correta \n 1- 3 \n 2- 4 \n 3- 6")
    if (answer1 == "2"){
        document.getElementById("correct").innerHTML = "Resposta 1"      
    }
    let answer2 = prompt ("Quanto é 4+4")
    let answer3 = prompt ("Quanto é 8+8")
}
    else if (test == "2"){
        alert ("Encerrar sessão")
}

