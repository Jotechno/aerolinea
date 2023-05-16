

const validateForm = () => {
    const departingDateInput = document.getElementById('fechaSalida');
    const returningDateInput = document.getElementById('fechaLlegada');

    if (departingDateInput.value.trim() === '' || returningDateInput.value.trim() === '') {
        alert('Por favor, selecciona fechas de salida y llegada.');
        return;
    }

    const validateDatesResult = validateDates();

    if (validateDatesResult) {
        // Ejecutar la lógica adicional para mostrar los vuelos o el mensaje de error
        alert('Mostrar vuelos');
    }
};

const validateDates = () => {
    const departingDate = new Date(document.getElementById('fechaSalida').value);
    const returningDate = new Date(document.getElementById('fechaLlegada').value);
    const currentDate = new Date();
    let errorMessage = '';

    if (departingDate <= currentDate) {
        errorMessage = 'La fecha de salida debe ser posterior a la fecha actual.';
    } else if (departingDate > returningDate) {
        errorMessage = 'La fecha de salida no puede ser posterior a la fecha de regreso';
    }

    if (errorMessage) {
        alert(errorMessage);
        return false;
    } else {
        return true;
    }
};

document.getElementById('show-flights-btn').addEventListener('click', validateForm);

