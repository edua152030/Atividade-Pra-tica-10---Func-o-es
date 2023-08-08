/**1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2). 

let nota01 = 10
let nota02 = 10
let nota03 = 7
let letra = 'P'

function calcular (nota01, nota02, nota03, parametro){

    let media
    
    if(letra === 'A'){
    const peso1 = 5
    const peso2 = 3
    const peso3 = 2
    const totalPeso = peso1 + peso2 + peso3
        media = (nota01 * peso1 + nota02 * peso2 + nota03 * peso3) / totalPeso
    }else if(letra === 'P'){
        media = (nota01 + nota02 + nota03) / 3
    }else{
        return "letra invalida"
    }
    return media
}

let mediaCalculada = calcular(nota01, nota02, nota03, letra)
console.log(mediaCalculada) 
*/

/**2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par. 

const valor = Number(prompt('digite um valor'))

function confereValor(){
    if(valor % 2 === 1){
        console.log(true)
    }else{
        console.log(false)
    }
}

confereValor()

*/

/*3. Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for.

function primo(valor){
    let dividendo = 0

    for(let i = valor; i > 0; i--){
        if(valor %i ==0){
        dividendo++
    }
}

if(dividendo ==2){
    console.log(`o numero ${valor} é primo`)
}else{
    console.log(`o numero ${valor} não é primo`);
}
}
primo(65)*/

/*4. Crie uma função que recebe por parâmetro o tempo de duração de
uma fábrica expressa em segundos e retorna esse tempo em horas,
minutos e segundos.

Ex:
Entrada: 3672
Saída: 1:1:12

function tempo(seg){
    
        const minutos = 60;
        const horas = minutos * 60;
    
        const horaTempo = Math.floor(seg / horas);
        const minutosRestantes = Math.floor((seg % horas) / minutos);
        const segundosTempo = seg % minutos;
    
        console.log(`${horaTempo}:${minutosRestantes}:${segundosTempo}`);
    }
    
    tempo(3672);*/

/*5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio.

Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

function verificarNumero(numero){
    const divisores = []
    let somaDivisores = 0
        for (let i = 0; i < numero; i++) {
            if (numero % i === 0) {
                divisores.push
            }
            
        }
        for(let j = 0; j < divisores.length; j++){
            somaDivisores += divisores[j]
        }
        if (somaDivisores === numero) {
            return `${numero} é um numero perfeito`
        }else{
            return `${numero} não é um numero perfeito`
        }
}

console.log(verificarNumero(4))*/

/*6. Crie uma função chamada acessoAoSite() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
um alerta informando “Bem vindo ao site”.

function acessoAoSite(){
    alert('Bem vindo ao site')
}

acessoAoSite()*/

/*7. Crie uma função chamada mostrarMensagem() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
uma mensagem no console.log() informando “Acesso à aplicação
NomeAplicação” e um alerta informando “Bem vindo à aplicação
NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
uma variável para mostrar nas mensagens.

function mostrarMensagem(){
    let aplicacacao = 'NomeAplicacao'
    console.log(`Acesso à aplicação ${aplicacacao}`);
    alert(`Acesso à aplicação ${aplicacacao}`)
}

mostrarMensagem()*/

/*8. Crie uma função chamada mostrarDobro(num), que recebe um
parâmetro sendo um número inteiro. Esta função será chamada ao
abrir a página e mostrará um alerta com o resultado. Exemplo: “O
dobro do número 5 é 10.”

function dobra(numero){
    alert(`o numero ${numero} tem o dobro ${(numero * 2)}`)
}

dobra(7)*/

/**9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
nome), que recebe 4 parâmetros sendo três inteiros e um texto
(String). Esta função será chamada ao abrir a página e mostrará um
alerta com a média. Exemplo: “João, sua média é 70.” A função
também deve mostrar no console.log() as notas recebidas. Exemplo
“Nota 1: 60,Nota 2: 70,Nota 3: 80”. 

const media = function(nota1, nota2, nota3, nome){
    let media1 = (nota1 + nota2 + nota3) / 3 
    nome = 'eduardo'
    console.log(media1)
    console.log(media.nome)
}


function calcularMedia(nota1, nota2, nota3, nome){
    let media = (nota1 + nota2 + nota3) / 3
    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    alert(`${nome} sua media é : ${media}`)
}

calcularMedia(10, 7, 8, 'eduardo')*/







