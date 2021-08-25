function getIuputValue(inputId){
    let input_value=document.getElementById(inputId);
    console.log(input_value.value);

    let input_text=input_value.value;
    let input_number=parseFloat(input_text);

    input_value.value='';

    return input_number;
}

function updateBalance(inputId,amount){
    let total_text=document.getElementById(inputId).innerText;
    let total_number=parseFloat(total_text);
    
    let new_value=(amount+total_number);
    document.getElementById(inputId).innerText=new_value;
}

function currentBalace(){
    let balance_text=document.getElementById('total_balance');
    let balance_total_text=balance_text.innerText;
    let balance_number=parseFloat(balance_total_text);
    return balance_number;
}

function updateTotal(amount,add){
    let balance_text=document.getElementById('total_balance');
    balance_number=currentBalace();
    if(add){
        let total_value=(amount+balance_number);
        balance_text.innerText=total_value;
    }else{
        let total_value=(balance_number-amount);
        balance_text.innerText=total_value;
    }
}

document.getElementById('deposit-button').addEventListener('click',function(){
    // let deposit_value=document.getElementById('deposit-amount');
    // console.log(deposit_value.value);

    // let first_text=deposit_value.value;
    // let first_number=parseFloat(first_text);


    // let second_text=document.getElementById('total_deposit').innerText;
    // let second_number=parseFloat(second_text);
    
    // let new_value=(first_number+second_number);
    // document.getElementById('total_deposit').innerText=new_value;
    // deposit_value.value='';

    // balance

    // let balance_text=document.getElementById('total_balance').innerText;
    // let balance_number=parseFloat(balance_text);

    // let total_value=(first_number+balance_number);
    // document.getElementById('total_balance').innerText=total_value;
    let first_number=getIuputValue('deposit-amount');
    if(first_number>0){
        updateBalance('total_deposit',first_number)
        updateTotal(first_number,true);
    }else{
        window.alert("please input a positive number");
    }

})

document.getElementById('withdraw-button').addEventListener('click',function(){
    // let withdraw_value=document.getElementById('withdraw-amount');
    // console.log(withdraw_value.value);

    // let first_text=withdraw_value.value;
    // let first_number=parseFloat(first_text);

    // let second_text=document.getElementById('total_withdraw').innerText;
    // let second_number=parseFloat(second_text);
    

    // let new_value=(first_number+second_number);
    // document.getElementById('total_withdraw').innerText=new_value;
    const first_number=getIuputValue('withdraw-amount');
    const current_Balace=currentBalace();
    if(first_number>0 && current_Balace>first_number){
        updateBalance('total_withdraw',first_number);
        updateTotal(first_number,false);
    }else{
        window.alert("Please input a positive number which is less than your balance");
    }

})