/* function solution(letter){
 let myChar= letter.toLocaleLowerCase();
 switch(myChar){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(letter,'is vowel');
        default:
            console.log(letter,'is constant');
 }
}
solution('k') */








 function solution(letter){
   
    if(letter==='a'|| letter==='e' || letter==='i' || letter==='o' || letter==='u'){
        // console.log('is vowel')
        return 'vowel'
    }
    else{
        // console.log('is constant')
        return 'constant'
    }
   

}
// solution('k')
console.log(solution('a'))



