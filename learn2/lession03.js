
let result = 50;
let loop = true;


while(loop){
    let n = +prompt("Nhập vào số n(1-100): ")
    if(n < result) {
        console.log("Too small");
    } else if(n > result) {
        console.log("Too big");
    } else {
        console.log("Bingo");
        // loop = false
        break;
    }
}