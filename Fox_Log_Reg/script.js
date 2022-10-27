function login(){
    var user = document.getElementById ("usuario").value;
    var pass = document.getElementById ("contraseña").value;

    if(user == "Fox" && pass == "1999" || user == "Pastorsoft" && pass == "1976"){
        window.location = "Foxstor/index.html"
    }else{
        document.getElementById("demo").innerHTML="Contraseña o Correo Electronico incorrecto."; 
    }
}

const $btnSignIn = document.querySelector ('.sign-in-btn'),
      $btnSignUp = document.querySelector ('.sign-up-btn'),
      $signUp = document.querySelector ('.sign-up'),
      $signIn = document.querySelector ('.sign-in');

document.addEventListener ('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle ('active');
        $signUp.classList.toggle ('active')
    }
});
