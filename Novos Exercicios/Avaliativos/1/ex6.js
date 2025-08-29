const inp = document.getElementById('inp')
function parimpar(){
    const numero = parseInt(inp.value)
    if (numero % 2 === 0) {
        inp.style.backgroundColor = 'green'
      } else {
        inp.style.backgroundColor = 'red'
      }
}