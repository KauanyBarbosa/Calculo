
function soma() {
    let valor01 = Number(document.getElementById("valor1").value);
    let valor02 = Number(document.getElementById("valor2").value);
    let resultado = valor01 + valor02;

    document.getElementById("operacoes").innerHTML = "O resultado é: " + resultado;

}
function sub() {
    let valor01 = Number(document.getElementById("valor1").value);
    let valor02 = Number(document.getElementById("valor2").value);
    let resultado = valor01 - valor02;

    document.getElementById("operacoes").innerHTML = "O resultado é: " + resultado;

}
function mult() {
    let valor01 = Number(document.getElementById("valor1").value);
    let valor02 = Number(document.getElementById("valor2").value);
    let resultado = valor01 * valor02;

    document.getElementById("operacoes").innerHTML = "O resultado é: " + resultado;

}
function div() {
    let valor01 = Number(document.getElementById("valor1").value);
    let valor02 = Number(document.getElementById("valor2").value);
    let resultado = valor01 / valor02;

    document.getElementById("operacoes").innerHTML = "O resultado é: " + resultado;

}

function hip() {
    let valor01 = Number(document.getElementById("cateto1").value);
    let valor02 = Number(document.getElementById("cateto2").value);
    let resultado = Math.round(Math.sqrt((valor01 * valor01) + (valor02 * valor02)));

    document.getElementById("hipotenusa").innerHTML = "O resultado é: " + resultado;

}
function imc() {
    let altura = Number(document.getElementById("altura").value);
    let peso = Number(document.getElementById("peso").value);
    let imc = peso / (altura * altura);



    if (imc < 18.5) {
        document.getElementById("imc").innerHTML = imc.toFixed(2) + " VOCÊ ESTÁ: ABAIXO DO PESO";
    } else if (imc < 25) {
        document.getElementById("imc").innerHTML = imc.toFixed(2) + " VOCÊ ESTÁ: PESO NORMAL";
    } else if (imc < 30) {
        document.getElementById("imc").innerHTML = imc.toFixed(2) + " VOCÊ ESTÁ: EXCESSO DE PESO";
    } else if (imc < 35) {
        document.getElementById("imc").innerHTML = imc.toFixed(2) + " VOCÊ ESTÁ: OBESIDADE CLASSE I";
    } else if (imc < 40) {
        document.getElementById("imc").innerHTML = imc.toFixed(2) + " VOCÊ ESTÁ: OBESIDADE CLASSE II";
    } else {
        document.getElementById("imc").innerHTML = imc.toFixed(2) + " VOCÊ ESTÁ: OBESIDADE CLASSE III";
    }
    
}
