
// Front-end client verificiation- ensures no invalid data is sent to back-end
function validateform() {
  var bitCoinAddr = document.paymentForm.bitCoinAddress.value;
  if ((bitCoinAddr.length < 26) || (bitCoinAddr.length > 35)) {
    alert("BitCoin address must be 26-35 characters long!");
    return false;
  }
  // If it matches with non alphanumeric characters
  if (bitCoinAddr.match(/(\W)/)) {
    alert("The BitCoin address cannot have symbols and other characters!");
    return false;
  }
  if (!bitCoinAddr.match(/(1|3|bc1)/)) {
    alert("Every BitCoin address must begin with either 1, 3 or bc1!");
    return false;
  }
  var moneyAmount = document.paymentForm.amount.value;

  /** Regex expression says for any digit and needs decimal point
      and other numbers may be needed
  **/
  if (!moneyAmount.match(/^\d+(\.\d+)?$/)) {
    alert("Invalid money format!");
    return false;
  }

  var phoneNum = document.paymentForm.phoneNumber.value;
  if (phoneNum.length != 8) {
    alert("Please enter a valid Singapore (+65) phone number!");
    return false;
  }
  alert("Please check your phone for the newly generated OTP number!");
  return true;
}
