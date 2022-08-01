var inputUsername=document.getElementById("username");
var inputPassword=document.getElementById("password");


var formLogin=document.getElementById("form-login");

if(formLogin.attachEvent){
    formLogin.attachEvent('submit', onFormSubmit)
}else {
    formLogin.addEventListener('submit', onFormSubmit)
}
function onFormSubmit(){
    var inputUsername=document.getElementById("username");
    var inputPassword=document.getElementById("password");
    var username=inputUsername.value;
    var password=inputPassword.value;
    if (username==='sang' && password==='123'){
        alert("đăng nhập thành công");
    } else {
        alert("đăng nhập thất bại")
    }
}
