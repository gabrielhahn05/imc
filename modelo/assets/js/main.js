document.getElementById('calcularBtn').addEventListener('click', function(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    if (peso && altura) {
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        var imc  = peso / (altura*altura);

    }   if (imc >= 0 && imc <= 18.5) { 
        document.getElementById('resultado').innerText = `Seu IMC é de ${imc.toFixed(1)}, você está abaixo do peso.`;
            } else if (imc >= 18.5 && imc <= 24.9) {
                document.getElementById('resultado').innerText = `Seu IMC é de ${imc.toFixed(1)}, você está no peso normal.`;
                } else if (imc >= 25 && imc <= 29.9) {
                    document.getElementById('resultado').innerText = `Seu IMC é de  ${imc.toFixed(1)}, você está com sobrepeso.`;
                     } else if (imc >= 30 && imc <= 34.9) {
                        document.getElementById('resultado').innerText = `Seu IMC é de ${imc.toFixed(1)}, você esta com Obesidade de grau 1.`;
                         } else if (imc >= 35 && imc <= 39.9) {
                            document.getElementById('resultado').innerText = `Seu IMC é de ${imc.toFixed(1)}, você está com Obesidade de grau 2.`;
                            } else if (imc >= 40 && imc <= 9999999999) {
                                document.getElementById('resultado').innerText = `Seu imc é de ${imc.toFixed(1)}, você está com Obesidade de grau 3.`;
                            }                      
    
})
