var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stock-quatity");
var currentPrice = document.querySelector("#currrent-price");
var submitButton = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

 submitButton.addEventListener("click", submitHandler) 

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);
  if(ip == 0 || qty==0 || curr==0){
    showOutput("Please provide all inputs...")
  } else
  calculateProfitAndLoss(ip, qty, curr);
}
function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(
      `Hey the loss is  ${loss} and the percent is    ${lossPercentage.toFixed(2)}% `);
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / current) * 100;
    showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage.toFixed(2)}% `);
  } else{
    // the rest logic
    showOutput('No Pain No Gain and No Gain No Pain');
  }
}
    function showOutput(message){
        outputBox.innerHTML = message;
    }
 

// calculateProfitAndLoss(100, 10, 110);
// calculateProfitAndLoss(120, 10, 110);
// calculateProfitAndLoss(10, 10, 10);
