function validationLogin() {
    
    let emailList = [
        'davidteixeira.info@gmail.com',
        'divield@gmail.com',
        'tiodavidteixeira@gmail.com',
        'davidteixeira.projetos@gmail.com',
        'davidtmasin.banco@gmail.com'
    ]

    let emailPassword = [
        'qwe123',
        'qwerty12',
        'david123',
        'abc123',
        'pvt666'
    ]
    
    let getEmail = document.getElementById('email').value
    let getPassword = document.getElementById('password').value
    
    if (!getEmail || !getPassword) {
        alert('Usuário e/ou senha não informados!')
        if (!getEmail) {
            document.getElementById('userName').focus()
        } else {
            document.getElementById('userPassword').focus()
        }
    }
    else {
        if (emailList.indexOf(getEmail) != -1 & emailPassword.indexOf(getPassword) != -1 ) {
            // console.log("Usuário cadastrado!");
            alert('Logando em ' + getEmail + '.')
            // window.location.href = "./assets/page/cadastroLivro.html";
            document.getElementById('userName').value = ""
            document.getElementById('userPassword').value = ""
        }
        else {
            alert("Usuário não cadastrado!");
            document.getElementById('userName').value = ""
            document.getElementById('userPassword').value = ""
            document.getElementById('userName').focus()
        }

    }

}