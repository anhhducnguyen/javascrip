// Mảng lưu trữ danh sách người dùng
const users = [];

// Hàm validate dữ liệu người dùng
function validateUser(user) {
  // Kiểm tra tên không được để trống
  if (!user.user_name || user.user_name.length === 0) {
    console.log("Tên không được để trống.");
    return false;
  }

  // Kiểm tra email không được để trống và đúng định dạng
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!user.email || !emailPattern.test(user.email)) {
    console.log("Email không hợp lệ.");
    return false;
  }

  // Kiểm tra mật khẩu phải có tối thiểu 8 ký tự
  if (!user.password || user.password.length < 8) {
    console.log("Mật khẩu phải có ít nhất 8 ký tự.");
    return false;
  }

  // Kiểm tra email đã tồn tại hay chưa
  const emailExists = users.some((u) => u.email === user.email);
  if (emailExists) {
    console.log("Email đã tồn tại. Vui lòng chọn email khác.");
    return false;
  }

  // Tất cả điều kiện hợp lệ
  return true;
}

function register() {
  let valid = false;
  let newUser;

  // Liên tục yêu cầu nhập lại dữ liệu nếu không hợp lệ
  while (!valid) {
    const id = users.length + 1; // ID tự động tăng
    const user_name = prompt("Nhập tên người dùng:");
    const email = prompt("Nhập email:");
    const password = prompt("Nhập mật khẩu:");

    newUser = { id, user_name, email, password };
    valid = validateUser(newUser); // Kiểm tra tính hợp lệ của dữ liệu
  }

  // Nếu hợp lệ, thêm user vào mảng
  users.push(newUser);
  console.log("Đăng ký thành công. Người dùng mới đã được thêm.");
}

function login() {
  let loggedIn = false;

  while (!loggedIn) {
    const email = prompt("Nhập email:");
    const password = prompt("Nhập mật khẩu:");

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      console.log("Đăng nhập thành công.");
      console.log(
        `ID: ${user.id}, Tên: ${user.user_name}, Email: ${user.email}`
      );
      loggedIn = true;
    } else {
      console.log("Đăng nhập thất bại. Vui lòng thử lại.");
    }
  }
}

function main() {
  let running = true;

  while (running) {
    const choice = prompt("Nhập lựa chọn:\n1. Đăng ký\n2. Đăng nhập\n3. Thoát");

    switch (choice) {
      case "1":
        register();
        break;
      case "2":
        login();
        break;
      case "3":
        console.log("Thoát chương trình.");
        running = false;
        break;
      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
  }
}

main(); // Gọi hàm chính để bắt đầu chương trình
