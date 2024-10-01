// Nhập giá trị a, b, c từ người dùng
const a = parseFloat(prompt("Nhập giá trị của a:"));
const b = parseFloat(prompt("Nhập giá trị của b:"));
const c = parseFloat(prompt("Nhập giá trị của c:"));

if (a === 0) {
    // Nếu a = 0, phương trình trở thành phương trình bậc nhất
    if (b === 0) {
        if (c === 0) {
            console.log("Phương trình có vô số nghiệm.");
        } else {
            console.log("Phương trình vô nghiệm.");
        }
    } else {
        const x = -c / b;
        console.log(`Phương trình bậc nhất có nghiệm: x = ${x}`);
    }
} else {
    // Tính delta (b^2 - 4ac)
    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        console.log("Phương trình vô nghiệm.");
    } else if (delta === 0) {
        const x = -b / (2 * a);
        console.log(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Phương trình có hai nghiệm: x1 = ${x1}, x2 = ${x2}`);
    }
}
