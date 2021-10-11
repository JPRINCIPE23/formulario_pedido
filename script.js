const evento=document.getElementById('send')
const enviarFormulario =() => {
        let cliente = document.getElementById('cliente').value;
        let contacto = document.getElementById('contacto').value;
        let celular = document.getElementById('celular').value;
        let direccion = document.getElementById('direccion').value;
        let facturacion = document.getElementById('facturacion').value;
        let fecha = document.getElementById('fecha').value;
        let prioridad = document.getElementById('prioridad').value;
        let prenda = document.getElementById('prenda').value;
        let tela = document.getElementById('tela').value;
        let gramaje = document.getElementById('gramaje').value;
        let marca = document.getElementById('marca').value;
        let color = document.getElementById('color').value;
        let unidad= document.getElementById('unidad').value;
        let tallas = document.getElementById('tallas').value;
        let tallam = document.getElementById('tallam').value;
        let tallal = document.getElementById('tallal').value;
        let tallaxl = document.getElementById('tallaxl').value;
        let tallau = document.getElementById('tallau').value;
        let suma = document.getElementById('suma').value;
        let precio = document.getElementById('precio').value;
        let total = document.getElementById('total').value;
        let sellado = document.getElementById('sellado').value;
        let tallero = document.getElementById('tallero').value;
        let encajado = document.getElementById('encajado').value;
        let medio = document.getElementById('medio').value;
        let banco = document.getElementById('banco').value;
        let importe = document.getElementById('importe').value;
        let saldo = document.getElementById('saldo').value;
        let numero = 51984321024;
var win= window.open(`https://wa.me/${numero}?text=*CLIENTE:*%20${cliente}%0A*CONTACTO:*%20${contacto}%0A*CELULAR:*%20${celular}%0A*DIRECCION:*%20${direccion}%0A*FACTURACION:*%20${facturacion}%0A*FECHA:*%20${fecha}%0A*PRIORIDAD:*%20${prioridad}%0A*PRENDA:*%20${prenda}%0A*TELA:*%20${tela}%0A*GRAMAJE:*%20${gramaje}%0A*MARCA:*%20${marca}%0A*COLOR:*%20${color}%0A*UND MEDIDA:*%20${unidad}%0A*T-S:*%20${tallas}%20*T-M:*%20${tallam}%20*T-L:*%20${tallal}%20*T-XL:*%20${tallaxl}%20*T-U:*%20${tallau}%0A*CANTIDAD TOTAL:*%20${suma}%0A*PRECIO:*%20${precio}%0A*VALOR TOTAL:*%20${total}%0A*SELLADO:*%20${sellado}%0A*TALLERO:*%20${tallero}%0A*ENCAJADO:*%20${encajado}%0A*MEDIO PAGO:*%20${medio}%0A*BANCO:*%20${banco}%0A*IMPORTE:*%20${importe}%0A*SALDO:*%20${saldo}`,'_black');
}

evento.addEventListener('click',enviarFormulario)
