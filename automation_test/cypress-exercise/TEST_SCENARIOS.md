# Hướng dẫn chi tiết các kịch bản kiểm thử

## 📖 Mục lục


- [Kịch bản 1: Kiểm tra đăng nhập thành công](#kịch-bản-1-kiểm-tra-đăng-nhập-thành-công)
- [Kịch bản 2: Kiểm tra đăng nhập thất bại](#kịch-bản-2-kiểm-tra-đăng-nhập-thất-bại)
- [Kịch bản 3: Thêm sản phẩm vào giỏ hàng](#kịch-bản-3-thêm-sản-phẩm-vào-giỏ-hàng)
- [Kịch bản 4: Sắp xếp sản phẩm theo giá](#kịch-bản-4-sắp-xếp-sản-phẩm-theo-giá)
- [Kịch bản 5: Xóa sản phẩm khỏi giỏ hàng (Bài tập)](#kịch-bản-5-xóa-sản-phẩm-khỏi-giỏ-hàng)
- [Kịch bản 6: Quy trình thanh toán (Bài tập)](#kịch-bản-6-quy-trình-thanh-toán)

---

## Kịch bản 1: Kiểm tra đăng nhập thành công

### Mục tiêu

Kiểm tra xem người dùng có thể đăng nhập thành công với thông tin hợp lệ.

### Các bước thực hiện

1. Truy cập trang https://www.saucedemo.com
2. Nhập tên người dùng: `standard_user`
3. Nhập mật khẩu: `secret_sauce`
4. Nhấn nút "Login"
5. Xác minh rằng trang được chuyển hướng đến `/inventory.html`

### Kết quả mong đợi

- URL chứa `/inventory.html`
- Trang hiển thị danh sách sản phẩm
- Không có thông báo lỗi

### Code Implementation

```javascript
it("Should login successfully with valid credentials", () => {
  cy.visit("https://www.saucedemo.com");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
  cy.url().should("include", "/inventory.html");
});
```

---

## Kịch bản 2: Kiểm tra đăng nhập thất bại

### Mục tiêu

Kiểm tra xem hệ thống hiển thị thông báo lỗi khi đăng nhập với thông tin không hợp lệ.

### Các bước thực hiện

1. Truy cập trang https://www.saucedemo.com
2. Nhập tên người dùng: `invalid_user`
3. Nhập mật khẩu: `wrong_password`
4. Nhấn nút "Login"
5. Xác minh thông báo lỗi hiển thị

### Kết quả mong đợi

- Thông báo lỗi xuất hiện
- Nội dung: "Username and password do not match"
- Người dùng vẫn ở trang login

### Code Implementation

```javascript
it("Should show error message with invalid credentials", () => {
  cy.visit("https://www.saucedemo.com");
  cy.get("#user-name").type("invalid_user");
  cy.get("#password").type("wrong_password");
  cy.get("#login-button").click();
  cy.get(".error-message-container").should(
    "contain",
    "Username and password do not match",
  );
});
```

---

## Kịch bản 3: Thêm sản phẩm vào giỏ hàng

### Mục tiêu

Kiểm tra xem người dùng có thể thêm sản phẩm vào giỏ hàng sau khi đăng nhập.

### Điều kiện tiên quyết

- Đã đăng nhập thành công với `standard_user`

### Các bước thực hiện

1. Đăng nhập với thông tin hợp lệ
2. Nhấn nút "Add to cart" của sản phẩm đầu tiên
3. Xác minh badge giỏ hàng hiển thị số "1"

### Kết quả mong đợi

- Badge giỏ hàng xuất hiện
- Badge hiển thị số "1"
- Nút "Add to cart" chuyển thành "Remove"

### Code Implementation

```javascript
it("Should add a product to the cart", () => {
  cy.get(".inventory_item").first().find(".btn_inventory").click();
  cy.get(".shopping_cart_badge").should("have.text", "1");
});
```

---

## Kịch bản 4: Sắp xếp sản phẩm theo giá

### Mục tiêu

Kiểm tra bộ lọc sản phẩm hoạt động đúng khi chọn "Price (low to high)".

### Điều kiện tiên quyết

- Đã đăng nhập thành công

### Các bước thực hiện

1. Đăng nhập với thông tin hợp lệ
2. Chọn "Price (low to high)" từ dropdown sắp xếp
3. Xác minh sản phẩm đầu tiên có giá thấp nhất ($7.99)

### Kết quả mong đợi

- Danh sách sản phẩm được sắp xếp lại
- Sản phẩm đầu tiên hiển thị giá $7.99
- Thứ tự tăng dần theo giá

### Code Implementation

```javascript
it("Should sort products by price low to high", () => {
  cy.get(".product_sort_container").select("lohi");
  cy.get(".inventory_item_price").first().should("have.text", "$7.99");
});
```

---

## Kịch bản 5: Xóa sản phẩm khỏi giỏ hàng

### ⭐ BÀI TẬP YÊU CẦU

### Mục tiêu

Kiểm tra chức năng xóa sản phẩm khỏi giỏ hàng.

### Điều kiện tiên quyết

- Đã đăng nhập thành công
- Đã thêm ít nhất 1 sản phẩm vào giỏ

### Các bước thực hiện

1. Đăng nhập với thông tin hợp lệ
2. Thêm một sản phẩm vào giỏ hàng
3. Xác minh badge hiển thị "1"
4. Nhấn nút "Remove"
5. Xác minh badge giỏ hàng biến mất

### Kết quả mong đợi

- Badge giỏ hàng không còn hiển thị
- Nút "Remove" chuyển lại thành "Add to cart"
- Giỏ hàng trống

### Code Implementation

```javascript
it("Should remove a product from the cart", () => {
  // Add product to cart first
  cy.get(".inventory_item").first().find(".btn_inventory").click();
  cy.get(".shopping_cart_badge").should("have.text", "1");

  // Remove product from cart
  cy.get(".inventory_item").first().find(".btn_inventory").click();
  cy.get(".shopping_cart_badge").should("not.exist");
});
```

---

## Kịch bản 6: Quy trình thanh toán

### ⭐ BÀI TẬP YÊU CẦU

### Mục tiêu

Kiểm tra toàn bộ quy trình thanh toán từ đầu đến cuối.

### Điều kiện tiên quyết

- Đã đăng nhập thành công
- Có ít nhất 1 sản phẩm trong giỏ

### Các bước thực hiện

1. Đăng nhập với thông tin hợp lệ
2. Thêm sản phẩm vào giỏ hàng
3. Click vào icon giỏ hàng
4. Xác minh đến trang `/cart.html`
5. Click nút "Checkout"
6. Điền thông tin:
   - First Name: `John`
   - Last Name: `Doe`
   - Zip Code: `12345`
7. Click nút "Continue"
8. Xác minh đến trang `/checkout-step-two.html`
9. Click nút "Finish"
10. Xác minh thông báo thành công

### Kết quả mong đợi

- URL chứa `/checkout-step-two.html` sau khi điền thông tin
- Hiển thị trang overview với thông tin sản phẩm
- Sau khi finish, URL chứa `/checkout-complete.html`
- Thông báo: "Thank you for your order!"

### Code Implementation

```javascript
it("Should complete checkout process successfully", () => {
  // Add product to cart
  cy.get(".inventory_item").first().find(".btn_inventory").click();
  cy.get(".shopping_cart_badge").should("have.text", "1");

  // Go to cart
  cy.get(".shopping_cart_link").click();
  cy.url().should("include", "/cart.html");

  // Proceed to checkout
  cy.get("#checkout").click();
  cy.url().should("include", "/checkout-step-one.html");

  // Fill checkout information
  cy.get("#first-name").type("John");
  cy.get("#last-name").type("Doe");
  cy.get("#postal-code").type("12345");
  cy.get("#continue").click();

  // Verify navigation to checkout step two
  cy.url().should("include", "/checkout-step-two.html");

  // Verify product is in checkout overview
  cy.get(".cart_item").should("have.length", 1);

  // Complete checkout
  cy.get("#finish").click();
  cy.url().should("include", "/checkout-complete.html");
  cy.get(".complete-header").should("have.text", "Thank you for your order!");
});
```

---

## 💡 Tips cho việc viết test

### 1. Sử dụng beforeEach

```javascript
beforeEach(() => {
  // Code chạy trước mỗi test case
  cy.visit("https://www.saucedemo.com");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
});
```

### 2. Custom Commands

Đã được định nghĩa trong `cypress/support/commands.js`:

```javascript
// Sử dụng custom command
cy.login(); // Tự động đăng nhập với standard_user
cy.login("problem_user", "secret_sauce"); // Đăng nhập với user khác
```

### 3. Assertions phổ biến

```javascript
// URL
cy.url().should("include", "/inventory.html");
cy.url().should("eq", "https://www.saucedemo.com/inventory.html");

// Text
cy.get(".element").should("have.text", "Expected Text");
cy.get(".element").should("contain", "Partial Text");

// Visibility
cy.get(".element").should("be.visible");
cy.get(".element").should("not.exist");

// Value
cy.get("input").should("have.value", "some value");
```

### 4. Chờ đợi (Wait)

```javascript
// Đợi element xuất hiện
cy.get(".element").should("be.visible");

// Đợi API response
cy.intercept("/api/products").as("getProducts");
cy.wait("@getProducts");
```

---

## 📝 Checklist nộp bài

- [ ] Tất cả test cases chạy thành công
- [ ] Có screenshot hoặc video kết quả chạy test
- [ ] Code được format đẹp và có comments
- [ ] README.md được cập nhật đầy đủ
- [ ] Đã test trên ít nhất 1 trình duyệt
- [ ] Không có hardcode values không cần thiết
- [ ] Sử dụng custom commands nếu có thể
- [ ] Test cases độc lập với nhau

---

**Chúc bạn hoàn thành tốt bài tập! 🚀**
