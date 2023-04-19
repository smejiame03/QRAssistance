//definir variable contenedor QR
const contenedorQR = document.getElementById('contenedorQR');
const formulario2 = document.getElementById('formulario2');
//new QRCode(contenedorQR, 'https://forms.gle/rJqv4uTrsu14qjhL8')

const QR = new QRCode(contenedorQR); //guardando la referencia dentro de esta variable

formulario2.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode('https://forms.gle/6xeRLWdjqQDnvZ8a6')
}); //detectar cuando la persona presione el boton y ejecute el submit 