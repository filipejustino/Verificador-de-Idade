function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('ano')
    var resultado = document.getElementById('result')

    if(nasc.value.length == 0 || nasc.value > ano){
        window.alert(`ERRO! Verifique os dados e tente novamente`)
    } else{
        var sexo = document.getElementsByName('sex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'homem'
            
            if(idade >= 0 && idade < 5){
                img.setAttribute('src', 'img/babyBoy.jpg')
            } else if(idade >= 5 && idade < 13){
                img.setAttribute('src', 'img/kidBoy.jpg')
            } else if(idade >= 14 && idade < 21){
                img.setAttribute('src', 'img/teenBoy.jpg')
            } else if(idade >= 21 && idade < 40){
                img.setAttribute('src', 'img/adultMan.jpg')
            } else if(idade >= 40){
                img.setAttribute('src', 'img/oldMan.jpg')
            }
        } else if(sexo[1].checked){
            genero = 'mulher'

            if(idade >= 0 && idade < 5){
                img.setAttribute('src', 'img/babyGirl.jpg')
            } else if(idade >= 5 && idade < 13){
                img.setAttribute('src', 'img/kidGirl.jpg')
            } else if(idade >= 14 && idade < 21){
                img.setAttribute('src', 'img/teenGirl.jpg')
            } else if(idade >= 21 && idade < 40){
                img.setAttribute('src', 'img/adultWoman.jpg')
            } else if(idade >= 40){
                img.setAttribute('src', 'img/oldWoman.jpg')
            }
        }
        resultado.innerHTML = `Detectamos um ${genero} de ${idade} anos`
        resultado.appendChild(img)

    }

}


