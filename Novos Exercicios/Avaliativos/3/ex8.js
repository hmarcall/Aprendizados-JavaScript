const botoes = document.querySelectorAll('button');
const respostaCorreta = 0;

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        botoes.forEach(b => b.classList.remove('correto', 'incorreto'));
        
        if (index === respostaCorreta) {
            botao.classList.add('correto');
        } else {
            botao.classList.add('incorreto');
        }
        
        botoes.forEach(b => b.disabled = true);
    });
});

const estilo = document.createElement('style');
estilo.textContent = `
    .correto { background-color: #4CAF50 }
    .incorreto { background-color: #f44336 }
`;
document.head.appendChild(estilo);
