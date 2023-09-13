/* let phones = [
    { name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'walton', camera: 15, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 100, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'xaomi', camera: 10, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'oppo', camera: 50, storage: '32gb', price: 20000, color: 'silver' },
    { name: 'nokia', camera: 8, storage: '32gb', price: 44000, color: 'silver' },
    { name: 'HTC', camera: 116, storage: '32gb', price: 62000, color: 'silver' }
 ];
 function phonePrice(pr){
    let smallPrice1= pr[0];
    for(let i=0;i<pr.length; i++){
        let element = pr[i];
        if(element.price < smallPrice1.price ){
            smallPrice1= element
        }
    }
    return smallPrice1
 }
 console.log(phonePrice(phones)); */


 let phones = [
    { name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'walton', camera: 15, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 100, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'xaomi', camera: 10, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'oppo', camera: 50, storage: '32gb', price: 20000, color: 'silver' },
    { name: 'nokia', camera: 8, storage: '32gb', price: 44000, color: 'silver' },
    { name: 'HTC', camera: 116, storage: '32gb', price: 62000, color: 'silver' }
 ];
 function cameraSize(size) {
    let smallCamera = size[0];
    for (let i = 0; i < size.length; i++) {
       let camera1 = size[i];
       if (camera1.camera < smallCamera.camera) {
          smallCamera = camera1;
       }
     
    }
    return smallCamera;
 }
 let allCamera = cameraSize(phones);
 console.log(allCamera);