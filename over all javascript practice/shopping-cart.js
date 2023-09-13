let phones = [
    { name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'walton', camera: 15, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 100, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'xaomi', camera: 10, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'oppo', camera: 50, storage: '32gb', price: 20000, color: 'silver' },
    { name: 'nokia', camera: 8, storage: '32gb', price: 44000, color: 'silver' },
    { name: 'HTC', camera: 116, storage: '32gb', price: 62000, color: 'silver' }
 ];
 function totalPricePhone(total){
    let overAll = 0;
    for(let i=0; i<total.length; i++){
        let element = total[i];
        overAll =overAll + element.price  

    }
    return overAll;
 }
 console.log(totalPricePhone(phones))