/* function javascript(fileName){
    if(fileName.endsWith('.js')){
        return true
    }
    else{
        return false
    }
}
let file ='index.js'
console.log(javascript(file)) */


// upor ta r akta  niyom a solve kora jay

/* function javascript(fileName){
    if(file[file.length-1]=='s'){
        if(file[file.length-2]=='j'){
            if(file[file.length-3]=='.'){
                return true
            }
        }
    }
        return false
}
let file ='index.js'
console.log(javascript(file)); */
function fileJavascript(nameFile) {
    if (file[file.length - 1] == 's') {
        if (file[file.length - 2] == 'j') {
            if (file[file.length - 3] == '.')
                return true
        }
    }
    return false
}
let file = 'index.js'
console.log(fileJavascript(file));