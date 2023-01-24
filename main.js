const button = document.querySelector(".button");
const generateToken = () =>{
    const valuesToken = ["a","b","c","d","e","f","g","h","i",];
    let token = "";
  
    for (let i = 0; i < 20; i++) {
    const random = Math.floor(Math.random() * 8);
     token += valuesToken[random]        
    }
    return token
}
button.addEventListener("click", (e)=>{
    e.preventDefault();
    const campo1 = document.querySelector("#email").value;
    const campo2 = document.querySelector("#password").value;
    let emailRegex = new RegExp( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (!emailRegex.test(campo1)){
        alert('Ingrese un Email Correcto');
    }
    if(campo2.length < 8){
        alert("La contraseña debe tener minimo 8 caracteres");
    }else{
        button.classList += "animation";
        setTimeout(() => {
            location = "./home.html";
        }, 10000);
        const token = generateToken();
        localStorage.setItem("token", token)
    }
    if (campo2 == "") {
        alert("Completa la informacion para continuar");
    }
    }
)
