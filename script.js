function verificar() {
    var data = new Date() //data atual
    var ano = data.getFullYear() //ano atual com 4 digitos
    var fano = window.document.getElementById('txtano')   //ano digitado no formulario no input
    var res = window.document.querySelector('div#res')  // div = res

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')  //linkar com o radsex M/F
        var idade = ano - Number(fano.value)  //calcular idade
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        // se a seleção radsex foi masculino
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebeH.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homemAdulto.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebeF.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulherAdulto.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }

            
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)


    }

}