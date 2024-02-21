function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `<p>Bom dia! </br>Agora são ${hora} horas.</p>`
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#DCC490'
    }else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `<p>Boa tarde! </br>Agora são ${hora} horas ${minuto} minutos e ${segundos} segundos.</p>`
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#FDBD81' 
    }else{
        msg.innerHTML = `<p>Boa noite! </br>Agora são ${hora} horas.</p>`
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#192326'
    }
}