const users = []; // Mảng trống để lưu người dùng hợp lệ

function validateUser(user) {
  // Kiểm tra tên không được để trống và không ngắn hơn 3 ký tự
  if (!user.user_name || user.user_name.length < 3) {
    console.log("Tên không được để trống và phải có ít nhất 3 ký tự.");
    return false;
  }

  // Kiểm tra email không được để trống và đúng định dạng
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email đơn giản
  if (!user.email || !emailPattern.test(user.email)) {
    console.log("Email không hợp lệ.");
    return false;
  }

  // Kiểm tra mật khẩu không được để trống và phải có tối thiểu 8 ký tự
  if (!user.password || user.password.length < 8) {
    console.log("Mật khẩu phải có ít nhất 8 ký tự.");
    return false;
  }

  // Nếu tất cả điều kiện hợp lệ
  return true;
}

function getUserInput() {
  const id = users.length + 1; // Tạo ID tự động dựa trên số lượng người dùng trong mảng

  // Giả sử ta sử dụng prompt để lấy dữ liệu từ người dùng
  const user_name = prompt("Nhập tên người dùng:");
  const email = prompt("Nhập email:");
  const password = prompt("Nhập mật khẩu:");

  return { id, user_name, email, password };
}

function addUser() {
  let valid = false;
  let newUser;

  // Yêu cầu người dùng nhập lại dữ liệu nếu không hợp lệ
  while (!valid) {
    newUser = getUserInput();
    valid = validateUser(newUser); // Kiểm tra tính hợp lệ của dữ liệu
  }

  // Nếu hợp lệ, thêm người dùng vào mảng
  users.push(newUser);
  console.log("Người dùng đã được thêm thành công:", newUser);
}

// Thực hiện việc thêm người dùng và kiểm tra tính hợp lệ
addUser();
console.log("Danh sách người dùng hiện tại:", users);
