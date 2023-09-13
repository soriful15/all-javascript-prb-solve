 /* ........................................................includes............................ */
// search er 1 number niyom
/* let lyrics = 'tmi bondhu kala pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
let doesExist = lyrics.includes('pakhi');
console.log(doesExist); */

// 2. number niyom
/* let lyrics = 'tmi bondhu kala pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
let searchLyrics = 'pakhi';
let doesExist = lyrics.includes(searchLyrics);
console.log(doesExist); */

// 1. number niyom lowercase
/* let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
let lyricsLowerCase = lyrics.toLowerCase('pakhi');
let searchLyrics = 'pakhi';
let doesExist = lyrics.includes(searchLyrics);
console.log(doesExist); */

/* let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
let lowercase = lyrics.toLowerCase('pakhi');
let search ='pakhi';
let doesExist = lyrics.includes(search); */
// console.log(doesExist);

// 2 number niyom
/* let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
let searchLyrics = lyrics.toLowerCase();
let search ='pakhi';
let doesExist = searchLyrics.includes(search);
console.log(doesExist); */

// je ta serrch dibo serach likhe je word ta ksearch dibo se ta jodi boro hat er likhi tahole
/* let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
let search ='paKhi';
let searchLyrics = lyrics.toLowerCase();
let serachString = search.toLowerCase();
let doesExist= searchLyrics.includes(serachString);
console.log(doesExist); */


//amra jodi kono kichu k ak kine a korte chai
/* let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
let search ='paKhi';

let oneLineSearch  = lyrics.toLowerCase().includes(search.toLowerCase());
 console.log(oneLineSearch); */


//1. upper case but answer false
/* let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala Pakhi ami jeno ki';
 let search = 'Pakhi';
 let uppercase = search.toUpperCase(search);
 let doesExist = lyrics.includes(uppercase);
 console.log(doesExist); */


// 2. UPPER CASE KORTE HOBE MAIN TA K THEN TRUE ASBE
/*  let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala Pakhi ami jeno ki';
 let upperLyrics = lyrics.toUpperCase();
 let search = 'PAKHI';
 let doesExist = upperLyrics.includes(search);
 console.log(doesExist); */



 /* ........................................................index............................ */

 let lyrics = 'tmi bondhu kala Pakhi. ami jeno ki.kala sada rong milise ganer mela.tmi bondhu kala pakhi ami jeno ki';
 console.log(lyrics.indexOf('kala'));
 console.log(lyrics.indexOf('tmi'));


/* 
 if(lyrics.indexOf('sada') !== -1){
    console.log('ai sada ache');
 }
 else{
    console.log('ai khane aso');
 } */

 if(lyrics.indexOf('sadda') !== -1){
    console.log('ai sada ache');
 }
 else{
    console.log('ai khane aso');
 }



 /* ........................................................start with............................ */


let name1 = 'soriful is a good boy';
console.log(name1.startsWith('soriful'));

 /* ........................................................end with............................ */
 let name2 = 'soriful is a good boy';
console.log(name2.endsWith('boy'));