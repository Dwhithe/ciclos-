const num1=parseInt(prompt("ingrese primer numero positivo"));
const num2=parseInt(prompt("ingrese segundo numero positivo"));

let sum=0;

for(let i=num1; i<=num2; i++){
sum+=i;
}
console.log("la suma total de los numeros enteros ${num1} hasta ${num2} es: ${sum}")
