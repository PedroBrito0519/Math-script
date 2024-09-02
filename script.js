let numero1 = 4.7
let numero2 = 4.9

//math.round e o arredondamento comum
console.log(Math.round(numero1))

//math.ceil e o arredondamento para cima  4.1 = 5
console.log(Math.ceil(numero1))
    
//math.floor e o arredondamento pra baixo 4.9= 4
console.log(Math.floor(numero1))

//math.pow e a potencia
console.log(Math.pow(2,3)) //2 elevado a 3

//math.sqrt e a raiz quadrasda
console.log(Math.sqrt(35)) //numero que eu quero da raiz quadrada ent 35 = 5.838732728

//math.abs e o numero absoluto
console.log(Math.abs(-35)) //~transforma um numero em positivo

//math.min de vaios numeors o minimo
console.log(Math.min(2,7,10,22)) // min = 2

//math.max de vaios numeors e o valor maximo
console.log(Math.max(2,7,10,22)) //max = 22

//math.random retorna um numero aleatorio entre 0 e 1( nao iclui  o 1)
let numAle = Math.random 
console.log(Math.random(2,7,10,22)) 


//para fazer de 0 a 10

console.log(Math.floor(math.random() * 10));





/* exercicio 1- faça uma funçao que receba dois numeros de um usuario ne devolva a media com 3 formas de arredondameno
*/
 
function calcular() {

    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var media = (num1 + num2) / 2;
    var arredondamento1 = Math.round(media);  
    var arredondamento2 = Math.floor(media);  
    var arredondamento3 = Math.ceil(media);   

   
    document.getElementById("resultados").innerHTML = `
        media ${media.toFixed(2)}
        round ${arredondamento1}
        floor ${arredondamento2}
        ceil ${arredondamento3}
    `;
}
//exercicio 2 - receba 2 numeros sendo um que tenha que elevar e qual ele quer elevado e faça potencia entre eles
function calcularpot() {

    var numero1 = parseFloat(document.getElementById("num1").value);
    var numero2 = parseFloat(document.getElementById("num2").value);
    var potencia = Math.pow(numero1,numero2)
    

   
    document.getElementById("resultado").innerHTML = `
        potencia ${potencia}
    
    `;
}