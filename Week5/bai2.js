// Mảng sản phẩm với thông tin id, tên sản phẩm và giá
const products = [
    { id: 1, product_name: "Product A", price: 300 },
    { id: 2, product_name: "Product B", price: 100 },
    { id: 3, product_name: "Product C", price: 200 }
  ];
  
  // Hàm sắp xếp các sản phẩm theo giá sử dụng thuật toán Bubble Sort
  function bubbleSortProducts(products) {
    let n = products.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (products[j].price > products[j + 1].price) {
          // Hoán đổi 2 sản phẩm nếu giá sản phẩm trước lớn hơn sản phẩm sau
          let temp = products[j];
          products[j] = products[j + 1];
          products[j + 1] = temp;
        }
      }
    }
  }
  
  // Hàm in ra danh sách sản phẩm
  function printProducts(products) {
    products.forEach(product => {
      console.log(`ID: ${product.id}, Name: ${product.product_name}, Price: ${product.price}`);
    });
  }
  
  // In danh sách sản phẩm trước khi sắp xếp
  console.log("Danh sách sản phẩm trước khi sắp xếp:");
  printProducts(products);
  
  // Sắp xếp danh sách sản phẩm theo giá tăng dần
  bubbleSortProducts(products);
  
  // In danh sách sản phẩm sau khi sắp xếp
  console.log("\nDanh sách sản phẩm sau khi sắp xếp theo giá tăng dần:");
  printProducts(products);
  