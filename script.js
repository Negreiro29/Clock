function updateDate() {
    let now = new Date();
    let hour = now.getHours(); //getHours pegara as horas
    let minute = now.getMinutes(); //getMinutes pegara os minutos
    let second = now.getSeconds(); //getSeconds pegara os segundos

    hour = hour < 10 ? "0" + hour : hour; //Se a hora for menor que 10 ele adiconara o zero(0) na frente do número para manter o padrão, se não, ele retornara o valor normal da hora
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.getElementById("hour").textContent = hour;
    document.getElementById("minute").textContent = minute;
    document.getElementById("second").textContent = second;
}

setInterval(updateDate, 1000);