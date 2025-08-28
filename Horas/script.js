function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 6 && hora < 13){
    img.src = 'manha.jpg'
} else if (hora >= 13 && hora < 17){
    img.src = 'tarde.jpg'
} else {
    img.src = 'noite.jpg'
}
}