// Đối tượng Contact
class Contact {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

// Mảng lưu trữ danh sách liên lạc
const contacts = [];

// Hàm để thêm một liên lạc mới vào danh bạ
function addContact(name, phone, email) {
  const newContact = new Contact(name, phone, email);
  contacts.push(newContact);
  console.log("Đã thêm liên lạc mới:", newContact);
}

// Hàm để tìm kiếm liên lạc dựa trên tên
function findContactByName(name) {
  const contact = contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (contact) {
    console.log("Tìm thấy liên lạc:", contact);
    return contact;
  } else {
    console.log("Không tìm thấy liên hệ với tên:", name);
    return null;
  }
}

// Hàm để hiển thị tất cả các liên lạc trong danh bạ
function displayContacts() {
  if (contacts.length === 0) {
    console.log("Danh bạ trống.");
  } else {
    console.log("Danh sách liên lạc:");
    contacts.forEach((contact) => {
      console.log(
        `Tên: ${contact.name}, Số điện thoại: ${contact.phone}, Email: ${contact.email}`
      );
    });
  }
}

// Hàm để xóa liên lạc dựa trên tên
function deleteContactByName(name) {
  const index = contacts.findIndex(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (index !== -1) {
    const removedContact = contacts.splice(index, 1);
    console.log("Đã xóa liên lạc:", removedContact[0]);
  } else {
    console.log("Không tìm thấy liên hệ với tên:", name);
  }
}

// Hàm để cập nhật thông tin liên lạc dựa trên tên
function updateContactByName(name, updatedInfo) {
  const contact = findContactByName(name);
  if (contact) {
    contact.name = updatedInfo.name || contact.name;
    contact.phone = updatedInfo.phone || contact.phone;
    contact.email = updatedInfo.email || contact.email;
    console.log("Đã cập nhật thông tin liên lạc:", contact);
  }
}

function main() {
  let running = true;

  while (running) {
    const choice = prompt(
      "Nhập lựa chọn:\n1. Thêm liên lạc\n2. Tìm liên lạc\n3. Hiển thị tất cả liên lạc\n4. Xóa liên lạc\n5. Cập nhật liên lạc\n6. Thoát"
    );

    switch (choice) {
      case "1": // Thêm liên lạc
        const name = prompt("Nhập tên liên lạc:");
        const phone = prompt("Nhập số điện thoại:");
        const email = prompt("Nhập email:");
        addContact(name, phone, email);
        break;
      case "2": // Tìm liên lạc
        const searchName = prompt("Nhập tên liên lạc cần tìm:");
        findContactByName(searchName);
        break;
      case "3": // Hiển thị tất cả liên lạc
        displayContacts();
        break;
      case "4": // Xóa liên lạc
        const deleteName = prompt("Nhập tên liên lạc cần xóa:");
        deleteContactByName(deleteName);
        break;
      case "5": // Cập nhật liên lạc
        const updateName = prompt("Nhập tên liên lạc cần cập nhật:");
        const updatedName = prompt(
          "Nhập tên mới (hoặc để trống để giữ nguyên):"
        );
        const updatedPhone = prompt(
          "Nhập số điện thoại mới (hoặc để trống để giữ nguyên):"
        );
        const updatedEmail = prompt(
          "Nhập email mới (hoặc để trống để giữ nguyên):"
        );
        updateContactByName(updateName, {
          name: updatedName,
          phone: updatedPhone,
          email: updatedEmail,
        });
        break;
      case "6": // Thoát
        console.log("Thoát chương trình.");
        running = false;
        break;
      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
  }
}

main(); // Gọi hàm chính để bắt đầu chương trình
