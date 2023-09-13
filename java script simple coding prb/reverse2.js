function reversWay(str) {
    let red=' ';
    for (let i = str.length-1; i >= 0; i--) {
        let index1 = i;
        let element1 = str[index1];
        red= red+element1;
        console.log(element1,red);
    
    }
return red;
}
let text = 'i am a sexy boy';
let reversed1 = reversWay(text);
console.log(reversed1);