function foo(token1,token2){
    function bar(token3,token4){
        let allToken2 = token3+token4;
        return allToken2;
    }
    console.log(bar(12,10));
    let allToken1 = token1+token2;
    return allToken1;
}
console.log(foo(10,20));