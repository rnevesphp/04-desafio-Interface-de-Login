// forçar o usuário a se registrar

// dados do usuario
let UserMail = document.querySelector('#signUpMail').value;
let UserPswd = document.querySelector('#signUpPswd').value;
let UserPswdConfirm = document.querySelector('#ConfirmSignUpPswd').value

// mostrar a info do usuario no console
console.log(`
   ${UserMail}: Este é o seu email\n
   ${UserPswd}: Esta é a senha\n 
   ${UserPswdConfirm}: Senha confirmada!
`);

// função básica de validação
function validateReg() {

   if (UserPswd !== UserPswdConfirm) {
      alert("As senhas não coincidem!");
   } else {
      alert('Registro efetuado com sucesso!');
   }

}

if (document.getElementById('saveRegister').checked) {
   saveSesion();
}

function saveSesion() {

}