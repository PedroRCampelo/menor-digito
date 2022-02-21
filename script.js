// Forma 1
let stringDig = document.getElementById ("stringDig");

let calcular = function(){

    valor = stringDig.value;

    let aux = '';

    for (let i = 0; i < valor.length; i++){

      
        if (i == 0 || valor[i] < aux){
            aux = valor[i]
        }
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p> O menor número inserido é: ${aux} </p>`
        
}


//Forma 2
// let inputNum = document.getElementById ("stringDig");

// let calcular = function(){

//     stringSeq = inputNum.value

//     let arrayNum = stringSeq.split(' ');
    
//     let sorted = arrayNum.sort();

//     let resultado = document.getElementById ("resultado");
//     resultado.innerHTML = `<p> O menor número inserido é: ${sorted[0]}</p>`;

// }


