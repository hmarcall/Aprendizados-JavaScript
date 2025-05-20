function contar(){
  
    let inicio = window.document.getElementById('txt1')
    let fim = window.document.getElementById('txt2')
    let cont = window.document.getElementById('txt3')
    let res= window.document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || cont.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
          let i = Number(inicio.value)
          let f = Number(fim.value)
          let c = Number(cont.value)
          if (i < f){
            for (let contador = i;contador <= f;contador += c){
            res.innerHTML += `${contador}`}
          for (let contador = i;contador <= f;contador += c){
            
            }
        }
        else {
            for (let contador = i; contador >= f; contador -= c) {
                
            }
            res.innerHTML += `${contador}`;
 
     }
     
}
}