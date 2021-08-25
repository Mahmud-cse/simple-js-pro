document.getElementById('submit-button').addEventListener('click',function(){
    const emailField=document.getElementById('user-email').value;
    const passwordField=document.getElementById('user-password').value;

    if(emailField=='mahmud.hasan@gmail.com' && passwordField=='hasan'){
        window.location.href='new.html';
    }
})