 /* ........................................................split............................ */
//  space word k alada korbe
/* let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
let parts = lyrics.split(' ');
console.log(parts);  */ 

// sentence k alada korbe
/* let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
let sentence = lyrics.split('.');
console.log(sentence);  */

// ak sathe space word and sentence
/* let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
let parts = lyrics.split(' ');
console.log(parts); 
let sentence = lyrics.split('.');
console.log(sentence); */


// every charticers k alada korbe
/* let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
let char = lyrics.split('');
console.log(char); */ 




 /* ........................................................slice............................ */

/*  let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
let name1 = lyrics.slice(0,5);
console.log(name1); */
 /* ........................................................substring............................ */

 let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
let name1 = lyrics.substring(-10,5);
console.log(name1);


 /* ........................................................trim............................ */
 let name2= '  hello world  '
//  console.log(name2.trim());
// console.log(name2.trimEnd());
console.log(name2.trimStart());

 /* ........................................................concat............................ */
 let num1= 'shuvo';
 let num2 = 'islam';
 console.log(num1.concat(' ', num2));


  /* ........................................................join............................ */
  let nameJoin=  ['tmi bondhu kala Pakhi',' ami jeno ki',
    'kala sada rong milise ganer mela','tmi bondhu kala pakhi ami jeno ki'
  ]
  console.log(nameJoin.join('. '));