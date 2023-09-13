/*ticket
first 100  --> 100tk
101-200  ---> 90tk
200+  ----> 
 */
function ticketPrice(tickQuantity) {
    let first100Rate = 100;
    let second100Rate = 90;
    let restTicketRate = 70;
    if (tickQuantity <= 100) {
        let price = tickQuantity * first100Rate;
        return price;

    }
    else if (tickQuantity <=200){
       let first100Rate1 = 100*first100Rate;
       let restTicketQuantity = tickQuantity -100;
       let second100Rate1= restTicketQuantity* second100Rate;
       let totalRate = second100Rate1+first100Rate1;
       return totalRate;

    }
  else{
    let third = 100*first100Rate;
    let third1= 100*second100Rate;
    let third2 = tickQuantity -200;
    let third3 = third2*restTicketRate;
    let all = third+ third1+ third3;
    return all;
  }
 
}
let overall= ticketPrice(250);
console.log(overall)

