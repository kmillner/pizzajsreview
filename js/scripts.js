var pizzaSize = [];
pizzaSize["Round4"] =5.50;
pizzaSize["Round6"] =8.50;
pizzaSize["Round8"] =9.95;
pizzaSize["Round12"] =13.50;
pizzaSize["Round14"] =15.75;
pizzaSize["Round18"] =18.25;
pizzaSize["Round36"] =27.00;

function getpizzaSize() {
  var getpizzaSize=0;
  var theForm = document.forms["pizzaform"];
  var selectedSize = theForm.elements["selectedsize"];
  for(var i = 0; i < selectedSize.length; i++)
  {
    if(selectedSize[i].checked)
    {
      pizzaSizePrice = pizzaSize[selectedSize[i].value];
      break;
    }
  }

  return pizzaSize;

  function calculateTotal()
  {
    var pizzaPrice = getpizzaSize() + getToppingPrice() + quality();

    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Pizza $"+pizzaPrice;

  }

  function hideTotal()
  {
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
  }

  $(document).ready(function() {
    
