function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zero to minutes and seconds if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var message = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = message;
}

window.onload = function() {
    var visitTime = new Date();
    var hours = visitTime.getHours(); // Get the current hour (0-23)

    if (hours >= 8 && hours <= 20) {
        document.getElementsByTagName('body')[0].classList.add('day');
    } else {
        document.getElementsByTagName('body')[0].classList.add('night');
    }

    updateClock(); 
    setInterval(updateClock, 1000); 
}
