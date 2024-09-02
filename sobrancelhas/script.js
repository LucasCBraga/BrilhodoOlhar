const initialMinutes = 5; // Tempo inicial em minutos
const countdownDate = new Date().getTime() + initialMinutes * 60 * 1000; // Data de término

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calcula o número total de minutos e segundos restantes
    const minutes = Math.floor(distance / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualiza os elementos com a contagem regressiva
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // Quando a contagem regressiva termina
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
        document.getElementById("countdown").innerHTML = "Oferta Expirada";
    }
}, 1000);
