/* let phones = [
   { name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
   { name: 'walton', camera: 10, storage: '32gb', price: 22000, color: 'silver' },
   { name: 'iphone', camera: 10, storage: '32gb', price: 82000, color: 'silver' },
   { name: 'xaomi', camera: 10, storage: '32gb', price: 52000, color: 'silver' },
   { name: 'oppo', camera: 10, storage: '32gb', price: 20000, color: 'silver' },
   { name: 'nokia', camera: 10, storage: '32gb', price: 44000, color: 'silver' },
   { name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver' }
];

function cheapestPhone(phones) {
   let lowPrice = phones[0];
   for (let i = 0; i < phones.length; i++) {
      let phone = phones[i];
      //   console.log(phone) ;
      if (phone.price < lowPrice.price) {
         lowPrice = phone
      }
   }
   return lowPrice
}
let mySelection = cheapestPhone(phones);
console.log(mySelection); */






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