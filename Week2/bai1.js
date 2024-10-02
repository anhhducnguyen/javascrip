result = 5
let loop = true

while(loop){
    let n = +prompt("Nhập vào số n (1-10):");
    if(n > result) {
        console.log("Lớn hơn");
    } else if (n < result) {
        console.log("Nhỏ hơn");
    } else {
        console.log("Great");
        break
    }
}
