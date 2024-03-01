const reservedKey = 'LisbonPersonReservationData';
const checkIn = document.getElementById('in');
const checkOut = document.getElementById('out');
const reserve = document.getElementById('reserve');

// Função para carregar os dados salvos
function loadReservationData() {
    const savedData = localStorage.getItem(reservedKey);
    if (savedData) {
        const data = JSON.parse(savedData);
        checkIn.value = data.checkIn;
        checkOut.value = data.checkOut;
        updateReserveButton(data.reserved);
    }
}

// Função para atualizar o botão
function updateReserveButton(reserved) {
    reserve.innerHTML = reserved ? 'Reservado' : 'Reservar';
    reserve.disabled = reserved;
}

// Evento de carregamento da página
window.onload = function () {
    loadReservationData();
}

// Evento de clique no botão
reserve.addEventListener('click', function () {
    const data = {
        checkIn: checkIn.value.toString(),
        checkOut: checkOut.value.toString(),
        reserved: true
    };
    localStorage.setItem(reservedKey, JSON.stringify(data));
    updateReserveButton(data.reserved);
});
