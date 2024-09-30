// Nhập cân nặng (kg) và chiều cao (m) từ người dùng
let weight = parseFloat(prompt("Nhập cân nặng (kg): "));
let height = parseFloat(prompt("Nhập chiều cao (m): "));

// Tính chỉ số BMI
let bmi = weight / (height * height);

// Phân loại dựa trên chỉ số BMI
let category;
if (bmi < 18.5) {
    category = "Gầy";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Bình thường";
} else if (bmi >= 25 && bmi <= 29.9) {
    category = "Thừa cân";
} else {
    category = "Béo phì";
}

// Hiển thị kết quả
console.log(`Chỉ số BMI của bạn là: ${bmi.toFixed(2)}`);
console.log(`Phân loại: ${category}`);
