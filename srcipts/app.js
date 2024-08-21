
const textoEncriptar = document.getElementById('textoEncriptar');
const mostrarTexto = document.getElementById('mostrartexto');
const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar')
const indicaciones = document.getElementById('indicaciones');
const texto = document.getElementById('text');
const vocalesAcentos = /[áéíóúü]/; 
const vocalesEncriptadas = ['ai', 'enter', 'imes', 'ober', 'ufat']; 
const vocales = [ 'a', 'e', 'i', 'o', 'u'];
let textoEncriptado = '';



function btnEncriptar(){
    //Chequea que no haya mayusculas o acentos
    if (textoEncriptar.value.match(/[A-Z]/) || textoEncriptar.value.match(vocalesAcentos)){
        alert('El texto contiene mayusculas o acentos');
    }else{
        //Chequea que haya texto
        if (textoEncriptar.value == ""){
            alert('Ingrese el texto que desea encriptar o desencriptar')
        }else{
            texto.removeAttribute('hidden')
            indicaciones.style.display = 'none'
            for (const iterator of textoEncriptar.value) {
                if (iterator == 'a') {
                    textoEncriptado += 'ai'
                } else if (iterator == 'e') {
                    textoEncriptado += 'enter'
                } else if (iterator == 'i') {
                    textoEncriptado += 'imes'
                }
                else if (iterator == 'o'){
                    textoEncriptado += 'ober';
                }
                else if(iterator == 'u'){
                    textoEncriptado += 'ufat';
                }
                else{
                    textoEncriptado += iterator;
                } 
            }
            mostrarTexto.innerHTML = textoEncriptado;
            texto.style.display = 'flex';
        }

        }

}


function btnDesencriptar(){
    if(textoEncriptar.value.match(/[A-Z]/) || textoEncriptar.value.match(vocalesAcentos)){
        alert('El texto contiene mayusculas o acentos')
    }else{
        if (textoEncriptar.value == ""){
            alert('Ingrese el texto que desea encriptar o desencriptar')
        }else{
            texto.removeAttribute('hidden')
            indicaciones.style.display = 'none'
            texto.style.display = 'flex';
            let desencriptado = textoEncriptar.value;
            for (let i = 0; i < vocalesEncriptadas.length; i++) {
                const secuencia = vocalesEncriptadas[i];
                desencriptado = desencriptado.replaceAll(secuencia, secuencia.charAt(0));
            }   
            mostrarTexto.innerHTML = desencriptado;
        }
    }
}    


document.getElementById('copiar').addEventListener('click', function() {
    txtCopy = mostrarTexto.innerText;

    navigator.clipboard.writeText(txtCopy)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar: ', err);
        });
});
console.log(textoEncriptado.innerHTML)
