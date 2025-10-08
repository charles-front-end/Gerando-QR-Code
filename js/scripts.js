/* Seleciona o container principal */
const conteiner = document.querySelector('.conteiner');
/* Seleciona o botao gerar */
const qrCodeBtn = document.querySelector('#qr-form button');
/* Seleciona o input do formulario */
const qrCodeInput = document.querySelector('#qr-form input');
/* Seleciona a imagem do QR code */
const qrCodeImg = document.querySelector('#qr-code img');


/* Eventos*/
function gerarQRCode() {
    /* Pega o valor do input */
    const qrCodeValue = qrCodeInput.value;
    /* Verifica se o input esta vazio */
    if(!qrCodeValue) return; /* Se estiver vazio, retorna nada */

    /*fasendo um exemplo de laowd para resposta da api */
    qrCodeBtn.innerText = 'Gerando QR Code...';
    /* Faz a requisicao para a API do QR code */
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeValue}&t=${Date.now()}`;
    /* Quando a imagem for carregada, adiciona a classe 'ative' ao container q gera a imagem da api */
    qrCodeImg.addEventListener('load', () => {
        conteiner.classList.add('ative');
        qrCodeBtn.innerText = 'QR Code Gerado';
        qrCodeInput.value = '';
        /* Remove a classe 'ative'(imagem do qr code) do container depois de 5 segundos */
          setTimeout(() => {
            conteiner.classList.remove('ative');
            qrCodeImg.src = '';
            qrCodeBtn.innerText = 'Gerar QR Code';
        }, 5000);
    });
}

/* Adiciona um evento de clique ao botao de gera QR code */
qrCodeBtn.addEventListener('click', () => {
    gerarQRCode()
});

/* Adiciona um evento de teclado ao input como o ENTER (tecla) */
qrCodeInput.addEventListener('keydown', (e) => {
    if(e.code === 'Enter') {
        gerarQRCode()
    }
});