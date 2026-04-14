
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}


function compute() {
    
    var principal = document.getElementById("principal").value;
    
    
    if (principal === "" || principal <= 0) {
        alert("Please enter a valid positive number for the amount!");
        document.getElementById("principal").focus();
        return;
    }
    
  
    var rate = document.getElementById("rate").value;
   
    var years = document.getElementById("years").value;
    
   
    if (years === "" || years <= 0) {
        alert("Please enter a valid number of years!");
        document.getElementById("years").focus();
        return;
    }
    
 
    var interest = (principal * rate * years) / 100;
    
    
    var currentYear = new Date().getFullYear();
    
   
    var maturityYear = currentYear + parseInt(years);
    
   
    var resultMessage = "If you deposit $" + principal + " at an interest rate of " + 
                        rate + "%. You will receive an amount of $" + interest.toFixed(2) + 
                        " in the year " + maturityYear;
    
   
    document.getElementById("result").innerHTML = resultMessage;
}



window.onload = function() {
  
    var rateSlider = document.getElementById("rate");
    if (rateSlider) {
        rateSlider.addEventListener("input", updateRate);
    }
    
   
    var inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                compute();
            }
        });
    });
};