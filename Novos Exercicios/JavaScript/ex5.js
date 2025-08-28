
const b = document.getElementById('b')
const apagada = document.getElementById('apagada')
const container = document.getElementById('container');
const imagem = document.createElement('img');
imagem.setAttribute('src', '../html/acesa.png');
imagem.setAttribute('alt', 'acesa');
document.body.style.backgroundColor = 'gray';

// Função para transição suave de cor
function transicaoCor(corInicial, corFinal, duracao) {
    const inicio = Date.now();
    const r1 = parseInt(corInicial.slice(1, 3), 16);
    const g1 = parseInt(corInicial.slice(3, 5), 16);
    const b1 = parseInt(corInicial.slice(5, 7), 16);
    
    const r2 = parseInt(corFinal.slice(1, 3), 16);
    const g2 = parseInt(corFinal.slice(3, 5), 16);
    const b2 = parseInt(corFinal.slice(5, 7), 16);
    
    const intervalo = setInterval(() => {
        const tempoDecorrido = Date.now() - inicio;
        const progresso = Math.min(tempoDecorrido / duracao, 1);
        
        const r = Math.round(r1 + (r2 - r1) * progresso);
        const g = Math.round(g1 + (g2 - g1) * progresso);
        const b = Math.round(b1 + (b2 - b1) * progresso);
        
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        
        if (progresso === 1) {
            clearInterval(intervalo);
        }
    }, 16); // 60 FPS aproximadamente
}

function status() {
    if (b.innerText === 'acender') {
        b.innerText = 'apagar';
        container.appendChild(imagem);
        container.removeChild(apagada);
        
        // Transição suave de cinza para branco em 1 segundos
        transicaoCor('#808080', '#FFFFE0 ', 500);
    }
    else {
        b.innerText = 'acender';
        container.appendChild(apagada);
        container.removeChild(imagem);
        
        // Transição suave de branco para cinza em 1 segundo
        transicaoCor('#FFFFE0 ', '#808080', 500);
    }
}
