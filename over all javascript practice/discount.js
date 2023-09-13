/*ticket
first 100  --> 100tk
101-200  ---> 90tk
200+  ----> 
 */
function perTicket(number){
    let ticket100 =100;
    let ticketUp100 =90;
    let ticketUp200 =70;

    if(number<=100){
        let ticket1001= number*ticket100;
        return ticket1001
    }
    else if(number <=200){
      let ticket =ticket100*100;
        let perticket12 = number- 100;
        let overAllTicket =perticket12*ticketUp100;
        let totalTicket = ticket+ overAllTicket;
        return totalTicket;

    }
    else{
        let ticket3 = 100*  ticket100;
        let ticket31 =100*  ticketUp100;
        let ticket4 = number-200;
        let ticket5 = ticket4* ticketUp200;
        let cost = ticket3+ ticket31+ ticket5;
        return cost
    }

}
console.log(perTicket(250))