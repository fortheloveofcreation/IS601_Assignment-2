function counter(){
    let ip=document.getElementById("ip").value;
    var vowelsCount = 0;
    var consonantsCount=0;
      for(var i = 0; i<ip.length; i++) {
        var currentLetter=ip[i].toLowerCase();
        if(currentLetter === "a" || currentLetter === "e" || currentLetter === "i" || currentLetter === "o" || currentLetter === "u"){
          vowelsCount++;
        }
        else if(currentLetter.charCodeAt(0)>96&&currentLetter.charCodeAt(0)<123){            
            consonantsCount++;
        }
    }
    document.getElementById("counter_op").innerHTML="The count of vowels is "+vowelsCount+" and the count of consonants is "+consonantsCount;
}
function palindrome(){
  let ip=document.getElementById("ip").value;
  if(ip==""){
      document.getElementById("palindrome_op").innerHTML="You did not enter a number. Please try again";
      return false;
  }
  var l = ip.length;
  for (var i = 0; i < l / 2; i++) {
          if (ip.charAt(i)!==ip.charAt(l-1-i)) {
              document.getElementById("palindrome_op").innerHTML="The numbers do not form a palindrome"; 
              return false; 
          }
  }
  document.getElementById("palindrome_op").innerHTML="The numbers form a palindrome";
}
function finance(){
  let subtotal=document.getElementById("subtotal").value;
  let gratuity_rate=document.getElementById("gratuity_rate").value;
  if (subtotal==""&&gratuity_rate==""){
      document.getElementById("financial_op").innerHTML="The subtotal and gratuity rate are not numbers. Please try again";
      return false;
  }
  if (subtotal==""){
      document.getElementById("financial_op").innerHTML="The subtotal is not a number. Please try again";
      return false;
  }
  if (gratuity_rate==""){
      document.getElementById("financial_op").innerHTML="The gratuity rate is not a number. Please try again";
      return false;
  }
  let gratuity=gratuity_rate*subtotal/100;
  let total=parseFloat(subtotal)+parseFloat(gratuity);
  document.getElementById("financial_op").innerHTML="The total bill amount is $"+total;
}