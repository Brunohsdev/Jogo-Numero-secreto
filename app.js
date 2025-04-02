alert('Bem vindo ao jogo: Adivinhe o número secreto');
let numeroSecreto = parseInt(Math.random()*100+1);
let numeroTentativas = 1;
let chute;
console.log(numeroSecreto);

while(chute != numeroTentativas){
    chute = prompt('Digite um número de 0 a 100');
    // se chute for igual ao numero secreto o codigo para
    if(chute == numeroSecreto){
        break;
    } else{
        if(chute > numeroSecreto){
            alert(` O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que o seu ${chute}`);
        }
        }
        //contador + 1
        numeroTentativas ++;
    }
let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí ! Você descobriu o número secreto ${numeroSecreto} com ${numeroTentativas} ${palavraTentativa}`);

if(numeroTentativas == 5){
    alert(`
        Que pena! Você não acertou o número secreto. O numero secreto era ${numeroSecreto}`);
}