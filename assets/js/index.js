//Capturar evento de submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);

    if (imc <= 18.5 ) {
        setResultado('Abaixo do peso');
        return;
    } else if (imc >= 18.6 && imc <= 24.9) {
        setResultado('Peso Normal');
        return;
    } else if (imc >= 25 && imc <= 29.9) {
        setResultado('Sobrepeso');
        return;
    } else if (imc >= 30 && imc <= 34.9) {
        setResultado('Obsidade Grau 1');
        return;
    } else if (imc >= 35 && imc <= 39.9) {
        setResultado('Obsidade Grau 2');
        return;
    } else if (imc >= 40) {
        setResultado('Obsidade Grau 3');
        return;
    }

});

/*
function getNivelImc (imc) {
    const nivel = ['Abaixo do Peso', 'Normal', 'Sobrepeso', 'Obsidade Grau 1',
        'Obsidade Grau 2', 'Obsidade Grau 3'];

        if (imc >= 39.9)   {
            return nivel [5];
        } else if (imc >= 34.9) {
            return nivel [4];
        } else if (imc >= 29.9) {
            return nivel [3];
        } else if (imc >= 24.9) {
            return nivel [2];
        } else if (imc >= 18.5) {
            return nivel [1];
        } else if (imc < 18.5) {
            return nivel [0];
        } */


function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p =document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}



