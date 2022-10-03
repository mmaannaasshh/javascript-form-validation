let nameError=document.getElementById('name-error')
let phoneError=document.getElementById('phone-error')
let emailError=document.getElementById('email-error')
let messageError=document.getElementById('message-error')
let submitError=document.getElementById('submit-error')

function validateName(){
    var name=document.getElementById('contact-name').value;
    if (name.length==0) {
        nameError.innerHTML='Name is requred';
        return false;
    }
    if (!name.match(/[A-Z]+[a-z]*\s{1}[A-Z]+[a-z]*$/) ) {
        nameError.innerHTML='Write Full Name';
        return false;


    }
    nameError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true
}
function validatePhone() {
    var phone=document.getElementById('contact-phone').value;
    if (phone.length==0) {
        phoneError.innerHTML='phone number is requied';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML='phone number sould be 10 degit';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML='Only degit please';
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;

}
function validateEmail(){
     var email=document.getElementById('contact-email').value;
     if (email.length==0) {
        emailError.innerHTML='email is requred'
        return false;
    }
    if (!email.match(/^[A-Za-z0-9&_\.-]*[@][a-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML='email is not a valid email';
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;

}
function validateMessage() {
    var message=document.getElementById('contact-message').value.trim();
    var requred=30;
    var left=requred-message.length;

    if (left > 0) {
        messageError.innerHTML=left+'more charecter is requred'
        return false;
    }
    messageError.innerHTML='<i class="fa-solid fa-square-check"></i>';
    return true;
}
function validateform() {
    if (!validatePhone() && !validateName() && !validateEmail() && !validateMessage()   ) {
        submitError.style.display='block';
        submitError.innerHTML='please fix this error to submit';
        setTimeout(()=>{submitError.style.display='none'},2000)

        return false;
    }
}