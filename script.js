
var selectedNumbers = [];
window.onload = function () {
    var numbersContainer = document.getElementById('numbers-container');
    

    // Generar números del 1 al 150
    for (var i = 1; i <= 150; i++) {
        var number = document.createElement('div');
        number.classList.add('number');
        number.textContent = i;

        // Verificar si el número es 11 o 7
        if (i === 11 || i === 7) {
            number.classList.add('occupied');
        } else {
            // Agregar evento de clic para seleccionar/deseleccionar el número
            number.addEventListener('click', function () {
                this.classList.toggle('selected');
                var numberValue = parseInt(this.textContent);
                var index = selectedNumbers.indexOf(numberValue);
                if (index === -1) {
                    selectedNumbers.push(numberValue);
                } else {
                    selectedNumbers.splice(index, 1);
                }
            });
        }

        numbersContainer.appendChild(number);
    }

};
function sendWhatsAppMessage() {
    if (selectedNumbers.length === 0) {
        alert('Por favor, selecciona al menos un número.');
        return;
    }

    var numbersText = selectedNumbers.join(', ');
    var url = "https://wa.me/+527535339974?text=Estoy%20interesado%20en%20los%20números:%20" + numbersText;
    window.open(url);
}


