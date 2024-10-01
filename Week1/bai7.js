// Nhập giá trị a và b từ người dùng
const a = parseFloat(prompt("Nhập giá trị của a:"));
const b = parseFloat(prompt("Nhập giá trị của b:"));

if (a === 0) {
    if (b === 0) {
        console.log("Phương trình có vô số nghiệm.");
    } else {
        console.log("Phương trình vô nghiệm.");
    }
} else {
    const x = -b / a;
    console.log(`Nghiệm của phương trình là: x = ${x}`);
}
