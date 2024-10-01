// Nhập tháng và năm từ người dùng
let month = parseInt(prompt("Nhập vào tháng (1-12): "));
let year = parseInt(prompt("Nhập vào năm: "));

// Kiểm tra xem tháng có hợp lệ không
if (month < 1 || month > 12) {
    console.log("Tháng không hợp lệ. Vui lòng nhập giá trị từ 1 đến 12.");
} else {
    let days;

    // Xác định số ngày trong tháng
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        days = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        days = 30;
    } else if (month === 2) {
        // Kiểm tra xem năm có phải là năm nhuận không
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            days = 29; // Tháng 2 năm nhuận có 29 ngày
        } else {
            days = 28; // Tháng 2 không phải năm nhuận có 28 ngày
        }
    }

    // In kết quả ra màn hình console
    console.log(`Tháng ${month} năm ${year} có ${days} ngày.`);
}
