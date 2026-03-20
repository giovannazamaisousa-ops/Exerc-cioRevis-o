//Criar um programa para exibir: Se a nota for maior que 9 "Excelente". Se a nota etsiver entre 8 e 7 "Ótimo". Se a nota estiver entre 6 e 5 "Bom". Se a nota tiver entre 4 e 2 "Regular". Se a nota for menor que 1 "Ruim".

let nota =9
if (nota >= 9) {
    console.log("Exelente")
} else if (nota <= 8 && nota >=7) {
    console.log ("Ótimo")
    } else if (nota <= 6 && nota >=5) {
        console.log("Bom")
 } else if (nota <= 4 && nota >= 2) {
    console,log("Regular")
 } else {
    console.log("Ruim")
 }