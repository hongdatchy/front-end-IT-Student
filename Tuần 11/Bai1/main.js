function checkUser(input){
    return input.value.length >= 5
}
function checkEmail(input){
    let regex = /\w+@\w+/;
    return regex.test(input.value);
}
function checkPassword(input){
    let rs1 = false;
    let rs2 = false;
    for(let i=0; i< input.value.length; i++){
        if(input.value[i] >= "A" && input.value[i] <= "Z"){
            rs1 = true;
        }
        if(input.value[i] >= "0" && input.value[i] <= "9"){
            rs2 = true;
        }
    }
    return rs1 && rs2 && input.value.length >=8;
}
function checkConfirmPassword(input1, input2){
    return input1.value == input2.value;
}
let inputUsername = document.getElementById("input-username");
let inputEmail = document.getElementById("input-email");
let inputPassword = document.getElementById("input-password");
let inputConfirmPassword = document.getElementById("input-confirm-password");
let btnRegister = document.getElementById("btn-register");
btnRegister.onclick = function(){
    if(checkUser(inputUsername) && checkEmail(inputEmail) && checkPassword(inputPassword) && checkConfirmPassword(inputConfirmPassword, inputPassword)){
        alert("Thành công");
    }else{
        alert("Thất bại");
    }
}
