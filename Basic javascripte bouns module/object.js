let nayok = {
    name: 'sakib khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['apu', 'Raaz', 'salman', 'aamir'],
  movies:[{nam:'no.1',year:2015},{name:'king khan',year:2018}],
  act:function(){
console.log('acting like sakib khan')
  }, 
  car: {
        brand: 'tesla',
        price: 500000,
        made: 2025,
        manufaturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'usa '
        }
    }


}
// console.log(nayok.car);
// console.log(nayok.car.manufaturer);
console.log(nayok.act);
nayok.act()