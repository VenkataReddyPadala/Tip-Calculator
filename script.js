const incrementBtn = document.querySelector('.plus');
const decrementBtn = document.querySelector('.minus');
const noOfPeople = document.querySelector('.totalcount');
const totalAmount = document.querySelector('#bill');
const totalTip = document.querySelector('#tip');
const splitBill = document.querySelector('.totalbill');
var amountAfterTip, tipAmount;
var count=1;
calculateBill = () =>{
    amountAfterTip = (Number(totalAmount.value)+((Number(totalAmount.value)*(Number(totalTip.value)))/100))/(count);
    splitBill.innerText = ` ${amountAfterTip.toFixed(2)}`;
};
incrementBtn.addEventListener('click',()=>{
    count++;
    noOfPeople.innerText = count;
    calculateBill();
});

decrementBtn.addEventListener('click',()=>{
    if(noOfPeople.innerText != '1'){
        count--;
        noOfPeople.innerText = count;
        
    }
    calculateBill();    
});

totalTip.addEventListener('input',()=>{
    if(totalTip.value.length > 3) {
        totalTip.value = totalTip.value.slice(0,3);
    }
    calculateBill();    
   });
  
totalAmount.addEventListener('input',()=>{
    if(totalAmount.value.length > 10) {
        totalAmount.value = totalAmount.value.slice(0,10);
    }
    calculateBill();    
        
});
