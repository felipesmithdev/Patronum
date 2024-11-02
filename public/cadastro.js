function cadastrar(){
    let nome = document.getElementById("input_nome").value;
    let data = document.getElementById("input_data").value;
    let dataToRoute = data;
    let email = document.getElementById("input_email").value;
    let conf_email = document.getElementById("input_conf_email").value;
    let senha = document.getElementById("input_senha").value;
    let conf_senha = document.getElementById("input_conf_senha").value;

    let especiais = ["!", "@", "#", "$", "%", "&","*", "-", "_"];
    // let tem_especiais = especiais.some(char => nome.includes(char));
    var possui_especial = false;
    let possui_numero = false;
    
    // validar nome
    for (var i = 0; i < especiais.length; i++){
      if(nome.includes(especiais[i])){
        possui_especial = true;
      }
    }
    for (var i = 0; i < nome.length; i++){
        if(!isNaN(parseInt(nome[i]))){
            possui_numero = true;      
        }
    }

    if (nome == "" || possui_especial || possui_numero || nome.length < 10){
        alert("Nome inválido");
        return;
    }

    // validar data 

    let data_atual = new Date();
    let data_transformada = new Date(data);
    let data_maior_de18 = data_atual - data_transformada;

    let data_convertida_para_anos = data_maior_de18 / (1000 * 60 * 60 * 24 * 365.25);
    data = Math.floor(data_convertida_para_anos);
    console.log(data);


    if( data == "" || data < 18 || data > 100 ) {
        alert("Data Inválida");
        return;
    }


    //validar email 
    let email_lower = email.toLowerCase();
    let comeca_com_especial = false;
    let possui_arroba = email_lower.includes('@');
    let indice_arroba = email_lower.indexOf("@");
    let indice_com = email_lower.indexOf(".com");

    for (var i = 0; i < especiais.length; i++){
      if(email_lower.startsWith(especiais[i])){
        comeca_com_especial = true;
      }
    }
    
    
     if (email == "" || !email.endsWith(".com") || comeca_com_especial || indice_arroba > indice_com || !possui_arroba){
        alert("Email Inválido");
        return;
     }
     email = email_lower;

     // validar o confirme o email
     if (conf_email != email){
        alert("Os emais estão diferentes!");
        return;
     }

     // validar senha 
    let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let letras_maiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

     let inclui_caractere_especial = false;
     let inclui_letra_maiuscula = false
     let inclui_letra_minuscula = false;
     let tamanho_senha = senha.length >= 8;
    
     for (var i = 0; i < especiais.length; i++){
      if(senha.includes(especiais[i])){
        inclui_caractere_especial = true;
      }
    }
    for (var i = 0; i < letras.length; i++){
      if(senha.includes(letras[i])){
        inclui_letra_minuscula = true;
      }
      if(senha.includes(letras_maiusculas[i])){
        inclui_letra_maiuscula = true
      }
    }

     if (!inclui_caractere_especial || !inclui_letra_maiuscula || !inclui_letra_minuscula || !tamanho_senha){
        alert("Valores da senha inválidos, por favor, insira uma senha com um caractere especial, no minimo 8 caracteres, uma letra minúscula e maiúscula");
        return;
     }
     // validar confirme a senha
     if(conf_senha != senha){
        alert("As senhas estão diferentes!");
        return;
     }

         // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nome,
        dataServer: dataToRoute,
        emailServer: email,
        senhaServer: senha,
        casa: null
      }),
    })
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso! Indo para a página de login...");

          setTimeout(() => {
            window.location = "../login.html";
          }, "2000");
          
        } else {
          alert("Houve um erro ao efetuar seu cadastro, por favor, tente novamente!");
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })

    return false;
  

}