let error=[];
function  Signin(){
    let email=document.getElementById('email').value;
    let emailerror=document.getElementById('emailerror');
    let pattern=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g;
    console.log(email.match(pattern));

    if(email.length===0){
        error.push('error')
        emailerror.innerHTML='please enter your email' 
    }else if(email.match(pattern)===null){
        emailerror.innerHTML=" your email is invalid";
    }
    let password=document.getElementById('password').value;
    let passworderror=document.getElementById('passworderror');

    if(password.length===0){
        passworderror.push('errorr')
        passworderror.innerHTML='please enter your password'
    }
    {
let msg=document.getElementById('main');
if(error.length===0){
    msg.style.display='none'
}
}
    let msg=document.getElementById('msg');
    if(error.length===0){
        msg.style.transform='translate(0%)'
    }
}