/* function publicBusFare(participant){
if(typeof participant !='number' || participant<50){
    return 'provide valid participant';

}
let localBusVara= 250
let busSeatCapacity = 50;
let microBusSeatCapacity = 11;
let remaining =0;
remaining= participant% busSeatCapacity;
remaining= remaining% microBusSeatCapacity;
let costPublicBus= remaining*localBusVara;
return costPublicBus; 
}
console.log(publicBusFare(117)); */


function publicBusFare(participant){
    let remaining=0;
    if(typeof participant !='number' || participant<50){
        return 'provide valid participant';
    }
    let localBusVara= 250
let busSeatCapacity = 50;
let microBusSeatCapacity = 11;
remaining = participant% busSeatCapacity;
remaining =remaining% microBusSeatCapacity;
let costPublicBus = remaining*localBusVara;
return costPublicBus;
}
console.log(publicBusFare(235))