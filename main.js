const btn_calcular = document.getElementById('btn_calcular');
const input_monto = document.getElementById('input_monto');

const mensualidad = document.getElementById('mensualidad');
const cantidad_interes = document.getElementById('cantidad_interes');
const monto = document.getElementById('monto');
const total = document.getElementById('total');
const meses = document.getElementById('meses');

const historial_prestamos = [];

console.log(monto);

const tasa = 0.01;

btn_calcular.addEventListener('click', () => {
    obtenerMensualidades();
});

const obtenerMensualidades = () => {
    const mensualidades = tasa * input_monto.value / (1 - (1 + tasa) ** - meses.value);
    obtenerTotal(mensualidades); 
}

const obtenerTotal = (mensualidades) => {
    const total = Math.ceil(mensualidades) * meses.value;

    const prestamo = {
        monto: input_monto.value,
        mensualidades: mensualidades,
        intereses: total - input_monto.value,
        totalPrestamo: total
    }
    console.log(prestamo.monto);


    pintarPrestamo(prestamo);
    guardarLocalStorage(prestamo);
}

const pintarPrestamo = (prestamo) => {

    console.log(prestamo.mensualidades);
    mensualidad.innerText = `$${prestamo.mensualidades}`;
    cantidad_interes.innerText = `${prestamo.intereses}`;
    monto.innerText = `$${prestamo.monto}`;
    total.innerText = `$${prestamo.totalPrestamo}`;

  };

  const guardarLocalStorage = (prestamo) => {
    
    historial_prestamos.push(prestamo);

    localStorage.setItem('historial', JSON.stringify(historial_prestamos));
  }