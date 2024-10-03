let n = +prompt("Nhập vào số n: ");

if(isNaN(n) || n <= 0){
    console.log("Vui lòng nhập một số nguyên dương hợp lệ");
    
} else {
    let star = '';
    for (let i = 1; i <= n; i++) {
        let line = ''
        for (let j = 1; j <= i; j++) {
            line += '*';  
        }  
        star += line + '\n';
    }  
    console.log(star);

    console.log("");

    let starSecond = '';
    for (let i = 1; i <= n; i++) {
        let line = ''
        for (let j = 1; j <= (n - i); j++) {
            line += ' ';
        }
        for (let j = 1; j <= i; j++) {
            line += '*';  
        }  
        starSecond += line + '\n';
    }  
    console.log(starSecond);
}


