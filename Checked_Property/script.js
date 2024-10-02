const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const MasterCardBtn = document.getElementById("MasterCardBtn");
const PaypalBtn = document.getElementById("PaypalBtn");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = () => {
    if(myCheckBox.checked){
        document.getElementById("subResult").textContent = "You have subscribed 😃!";
    }
    else{
        document.getElementById("subResult").textContent = "You have not subscribed yet 😒!";
    }

    if(visaBtn.checked){
        document.getElementById("paymentResult").textContent = "You have to pay through Visa.";
    }
    else if(MasterCardBtn.checked){
        document.getElementById("paymentResult").textContent = "You have to pay through MasterCard.";
    }
    else if(PaypalBtn.checked){
        document.getElementById("paymentResult").textContent = "You have to pay through Paypal.";
    }
    else{
        document.getElementById("paymentResult").textContent = "Kindly , select any payment options 😊!"
    }
}

