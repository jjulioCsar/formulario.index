function validaFormulario(){
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;

    if(nome == ''||email == ''|| senha == '' ){
    alert("POR FAVOR, PREENCHA OS CAMPOS")
    return
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
        alert("Por favor, insira um email válido!")
        return
    }
    
    if(senha.length > 8){
        alert("Limite de carácter definido!")
        return
    }

    alert ("Cadastro realizado com sucesso!")
}