function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+'';
    if(pinString.length==4){
        return pin;
    }else{
        console.log('Got a 3 digit and calling again',pin);
        return getPin();
    }
}

function generatePin(){
    const pin=getPin();
    document.getElementById('display-pin').value=pin;
}


document.getElementById('key-pad').addEventListener('click',function(event){
    const number=event.target.innerText;
    const calc= document.getElementById('type-number');
    if(isNaN(number)){
        if(number=='C'){
            calc.value='';
        }
    }else{
        const previousCalc=calc.value;
        const newCalc=previousCalc+number
        calc.value=newCalc;  
    }
})


function verifyPin(){
    const pin=document.getElementById('display-pin').value;
    const typeNumber=document.getElementById('type-number').value;

    const failError=document.getElementById('notify-fail');
    const successMessage=document.getElementById('notify-success');

    if(pin==typeNumber){
        failError.style.display='none';
        successMessage.style.display='block';
    }else{
        successMessage.style.display='none';
        failError.style.display='block';
    }
}