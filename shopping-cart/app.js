function updateNumber(product,price,value){
    const productInput=document.getElementById(product+'-number');
    let productValue=parseInt(productInput.value);
    if(value){
        productInput.value=productValue+1;
        productValue=productInput.value;
    }else if(productValue>0){
        productInput.value=productValue-1;
        productValue=productInput.value;
    }

    const productTotal=document.getElementById(product+'-total');
    productTotal.innerText=productValue*price;

    let firstValue=parseInt(document.getElementById('phone-total').innerText);
    let secondValue=parseInt(document.getElementById('case-total').innerText);
    let subTotal=firstValue+secondValue;
    document.getElementById('sub-total').innerText=subTotal;

    let tax=subTotal/10;
    document.getElementById('tax-total').innerText=tax;

    let final=tax+subTotal;
    document.getElementById('final-total').innerText=final;
}

document.getElementById('phone-plus').addEventListener('click',function(){
    updateNumber('phone',1219,true);
})

document.getElementById('phone-minus').addEventListener('click',function(){
    updateNumber('phone',1219,false);
})

document.getElementById('case-plus').addEventListener('click',function(){
    updateNumber('case',59,true);
})

document.getElementById('case-minus').addEventListener('click',function(){
    updateNumber('case',59,false);
})