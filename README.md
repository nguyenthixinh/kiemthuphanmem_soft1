# Bài tập thực hành kiểm thử tự động End-to-End với Cypress

## 📋 Mô tả dự án

Dự án này là bài tập thực hành kiểm thử tự động End-to-End sử dụng Cypress để kiểm tra trang web [SauceDemo](https://www.saucedemo.com) - một ứng dụng demo cho thực hành kiểm thử tự động.

## 🎯 Mục tiêu

- Hiểu và thực hành các kịch bản kiểm thử tự động end-to-end phổ biến
- Sử dụng Cypress để kiểm tra trang web mẫu
- Viết và chạy các test cases cho các tính năng: đăng nhập, giỏ hàng, và thanh toán

## 📁 Cấu trúc dự án

```
cypress-exercise/
├── cypress/
│   ├── e2e/
│   │   ├── login_spec.cy.js      # Test đăng nhập
│   │   ├── cart_spec.cy.js       # Test giỏ hàng
│   │   └── checkout_spec.cy.js   # Test thanh toán
│   └── support/
│       ├── commands.js            # Custom commands
│       └── e2e.js                 # Support file
├── cypress.config.js              # Cấu hình Cypress
├── package.json
└── README.md
```

## 🚀 Cài đặt

### Yêu cầu tiên quyết

- Node.js (phiên bản 14 hoặc cao hơn)
- npm hoặc yarn

### Các bước cài đặt

1. **Clone hoặc tải dự án về máy**

2. **Cài đặt dependencies**

```bash
npm install
```

## 📝 Các kịch bản kiểm thử

### 1. Login Test (`login_spec.cy.js`)

- ✅ **Đăng nhập thành công**: Kiểm tra đăng nhập với thông tin hợp lệ
  - Username: `standard_user`
  - Password: `secret_sauce`
  - Xác minh chuyển hướng đến trang `/inventory.html`

- ❌ **Đăng nhập thất bại**: Kiểm tra thông báo lỗi khi đăng nhập sai
  - Username: `invalid_user`
  - Password: `wrong_password`
  - Xác minh hiển thị thông báo lỗi

### 2. Cart Test (`cart_spec.cy.js`)

- 🛒 **Thêm sản phẩm vào giỏ hàng**: Kiểm tra thêm sản phẩm
  - Thêm sản phẩm đầu tiên
  - Xác minh badge giỏ hàng hiển thị "1"

- 🔢 **Sắp xếp sản phẩm theo giá**: Kiểm tra chức năng sắp xếp
  - Sắp xếp theo "Price (low to high)"
  - Xác minh sản phẩm đầu tiên có giá $7.99

- 🗑️ **Xóa sản phẩm khỏi giỏ hàng**: Kiểm tra xóa sản phẩm
  - Thêm sản phẩm vào giỏ
  - Xóa sản phẩm
  - Xác minh badge giỏ hàng biến mất

### 3. Checkout Test (`checkout_spec.cy.js`)

- 💳 **Quy trình thanh toán hoàn chỉnh**: Kiểm tra toàn bộ flow thanh toán
  - Đăng nhập
  - Thêm sản phẩm vào giỏ
  - Đi đến giỏ hàng
  - Tiến hành checkout
  - Điền thông tin:
    - First Name: `John`
    - Last Name: `Doe`
    - Zip Code: `12345`
  - Xác minh chuyển đến trang `/checkout-step-two.html`
  - Hoàn tất đơn hàng
  - Xác minh thông báo "Thank you for your order!"

## 🎮 Cách chạy test

### Mở Cypress Test Runner (Interactive Mode)

```bash
npm run cy:open
```

Sau đó chọn các test file để chạy trong giao diện Cypress.

### Chạy tất cả tests (Headless Mode)

```bash
npm test
```

hoặc

```bash
npm run cy:run
```

### Chạy tests với trình duyệt cụ thể

```bash
# Chrome
npm run cy:run:chrome

# Firefox
npm run cy:run:firefox
```

### Chạy tests với hiển thị trình duyệt

```bash
npm run test:headed
```

## 📊 Kết quả mong đợi

Tất cả test cases sẽ PASS nếu:

- Kết nối internet ổn định
- Website SauceDemo hoạt động bình thường
- Các selector trong test vẫn đúng với cấu trúc HTML hiện tại của website

## 🎓 Thông tin tài khoản test

Website SauceDemo cung cấp nhiều tài khoản test:

| Username                  | Password       | Mô tả                                        |
| ------------------------- | -------------- | -------------------------------------------- |
| `standard_user`           | `secret_sauce` | Tài khoản chuẩn (được sử dụng trong bài tập) |
| `locked_out_user`         | `secret_sauce` | Tài khoản bị khóa                            |
| `problem_user`            | `secret_sauce` | Tài khoản có vấn đề                          |
| `performance_glitch_user` | `secret_sauce` | Tài khoản với hiệu suất chậm                 |

## 📚 Tài liệu tham khảo

- [Cypress Documentation](https://docs.cypress.io)
- [SauceDemo Website](https://www.saucedemo.com)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)

## 🔧 Cấu hình Cypress

File `cypress.config.js` chứa các cấu hình:

- **baseUrl**: `https://www.saucedemo.com`
- **viewportWidth**: 1280px
- **viewportHeight**: 720px
- **video**: true (ghi video khi chạy test)
- **screenshotOnRunFailure**: true (chụp màn hình khi test fail)

## 📸 Nộp bài

Khi hoàn thành, sinh viên cần nộp:

1. ✅ Toàn bộ mã nguồn dự án
2. ✅ Screenshots hoặc video chạy test thành công
3. ✅ File README.md này

## 💡 Tips

- Sử dụng `cy.pause()` để tạm dừng test và debug
- Xem video recordings trong folder `cypress/videos/` sau khi chạy test
- Xem screenshots trong folder `cypress/screenshots/` khi test fail
- Sử dụng Cypress Dashboard để xem chi tiết test results

## 🤝 Hỗ trợ

Nếu gặp vấn đề:

1. Kiểm tra phiên bản Node.js: `node --version`
2. Xóa `node_modules` và cài lại: `rm -rf node_modules && npm install`
3. Xóa cache Cypress: `npx cypress cache clear`
4. Cài lại Cypress: `npm install cypress --save-dev`

---

**Chúc bạn thực hành thành công! **
