/*Múltiplos
Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem 
"Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.*/

var lines = gets().split("\n");
var line = lines.shift().split(" ");
var a = parseInt(line[0]);
var b = parseInt(line[1]);

if (Math.abs(a) < Math.abs(b)) 
{
    let c = a;
    a = b;
    b = c;
}
if (a % b == 0) 
{
    console.log('Sao Multiplos');
}
else 
{
    console.log('Nao sao Multiplos');
}