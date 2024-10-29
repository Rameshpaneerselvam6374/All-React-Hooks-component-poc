//get to the method
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(event)=>{
     event.preventDefault()
     validateInputs();
})

function validateInputs(){
    const usernameVal = username.ariaValueMax.trim();
    const emailVal = email.ariaValueMax.trim();
    const passwordVal = password.ariaValueMax.trim();
    const cpasswordVal = cpassword.ariaValueMax.trim();

    if(usernameVal===''){
        setError(username,'username is required')
    }else{
        setSuccess(username)
    }

    if(emailVal===''){
        setError(email,'email is required')

    }else if(!validateEmail(emailVal)){
        setError(email,'please enter a valid email')
    }else{
        setSuccess(email)
    }
    if (passwordVal === '') {
        setError(password,'password is required')
    }else if (passwordVal.length<8){
        setError(password,'password must be atleast 8 character')
    }else{
        setSuccess(password)
    }

    if (passwordVal === ''){
        setError(cpassword,'confirm password is required')
    }else if (cpasswordVal!==password){
    setError(cpassword,'password does not match')
}
else{
    setSuccess(cpassword)
}
}



//element is password message is password required
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText=message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');

}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText= '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');

}

const validateEmail = (email) =>{
    return String(email)
    .toLocaleLowerCase()
    .match(
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    );
};