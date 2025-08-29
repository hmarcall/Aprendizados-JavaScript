const container = document.getElementById('container')
const login = document.getElementById('login')
const senha = document.getElementById('senha')
const nome = document.createElement('p');
const nomee = document.createElement('p');  
nome.textContent = 'Login bem sucedido!';
nome.style.backgroundColor = 'green';
nomee.textContent = 'Usuario e senha incorretos!';
nomee.style.backgroundColor = 'red';

function logar(){
    if (login.value === 'Henrique' && senha.value === 'minato') {  
        container.appendChild(nome);

        if (container.contains(nomee)) {
            container.removeChild(nomee)
        }
    } else { 
        container.appendChild(nomee);

        if (container.contains(nome)) {
            container.removeChild(nome)
        }
}
}