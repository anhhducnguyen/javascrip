var month = +prompt("Hãy nhập vào tháng (1-12): ");

function dateDisplay(month){
    if (month == 2) {
        console.log(`Tháng ${month} có 28 hoặc 29 ngày.`);
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11){
        console.log(`Tháng ${month} có 30 ngày.`);
    } else {
        console.log(`Tháng ${month} có 31 ngày.`);
    }
}

if (month < 1 || month > 12) {
    console.log("Nhập không hợp lệ !!!");
} else {
    dateDisplay(month);
}



