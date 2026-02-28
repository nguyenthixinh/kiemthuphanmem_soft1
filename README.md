
# KIỂM THỬ PHẦN MỀM – SOFTWARE TESTING

## 📌 Thông tin chung

- **Môn học:** Kiểm thử phần mềm
- **Sinh viên:** Nguyễn Thị Xinh
- **MSSV:** BIT230466
- **Lớp:** 23IT2
- **Giảng viên:** Phạm Tuấn Anh
- **Học kỳ:** 8

Repo này dùng để **lưu trữ toàn bộ bài tập thực hành, tài liệu và báo cáo** trong suốt quá trình học môn Kiểm thử phần mềm.

## 🎯 Mục tiêu học phần

- Làm quen và **thực hành các công cụ kiểm thử phổ biến trong thực tế**
- Rèn luyện kỹ năng:
  - Viết test case, test plan
  - Thực hiện kiểm thử đơn vị, tích hợp, giao diện, hiệu năng, bảo mật
  - Quản lý lỗi và viết tài liệu kiểm thử
- Vận dụng kiến thức kiểm thử vào **dự án nhóm**
- Tiếp cận **công cụ kiểm thử hiện đại có ứng dụng mô hình ngôn ngữ lớn (LLM/AI)**


## 📂 Cấu trúc Repository (Quản lý theo Branch)

Repository này được tổ chức và quản lý mã nguồn theo các nhánh (branch) trên GitHub để phân chia từng bài thực hành:

-  **`main`**: Nhánh chính mặc định, chứa thông tin tổng quan của môn học.
-  **`week-2`**: Nhánh bài thực hành tuần 2 - Unit Testing.
  - Bao gồm: Thư mục `student-analyzer/` (Dự án JUnit 5), `README.md`
-  **`week3`**: Nhánh bài thực hành tuần 3 - End-to-End Testing.
  - Bao gồm: Thư mục `automation_test/cypress-exercise/` (Dự án Cypress), `README.md`
-  **`week4`**: Nhánh bài thực hành tuần 4 - Performance Testing.
  - Bao gồm: Thư mục `automation_test/jmeter/` (Các kịch bản JMeter)

---

## ✅ Kết quả thực hành

### 🗓️ Tuần 1: UI Testing

**Nội dung:** Kiểm thử giao diện người dùng

**Công cụ sử dụng:** [Can't Unsee](https://cantunsee.space/)

**Loại kiểm thử:** UI Testing (Kiểm thử giao diện người dùng)


**Trình duyệt:** Google Chrome (đã đăng nhập, có dấu hiệu cá nhân)

**Kết quả của bài tập trang Can't Unsee:**
<img src="https://github.com/nguyenthixinh/kiemthuphanmem_soft1/blob/main/Screenshot%202026-01-08%20085818.png">

---

### 🗓️ Tuần 2: Unit Testing với JUnit 5

**Nội dung:** Unit Testing - Phân tích dữ liệu điểm số học sinh

**Công nghệ:** Java, JUnit 5, Maven

**Loại kiểm thử:** Unit Testing (Kiểm thử đơn vị)

**Kết quả:**

- ✅ Tất cả test case **PASS**
- ✅ Maven build: **BUILD SUCCESS**

**📁 Chi tiết bài thực hành:**  Xem tại Branch week-2

---

### 🗓️ Tuần 3: End-to-End Testing với Cypress

**Nội dung:** Kiểm thử tự động E2E cho trang web SauceDemo

**Công nghệ:** Cypress, Node.js, JavaScript

**Loại kiểm thử:** End-to-End Testing (Kiểm thử đầu cuối)

**Website được test:** [SauceDemo](https://www.saucedemo.com)

**Kết quả:**

- ✅ Tổng số test specs: **3 files**
- ✅ Tổng số test cases: **6 tests**
- ✅ Kết quả: **Tất cả PASS (100%)**

**Các test scenarios đã thực hiện:**

1. **Kiểm thử Đăng nhập** (2 tests)
   - ✅ Đăng nhập thành công với thông tin hợp lệ
   - ✅ Hiển thị thông báo lỗi với thông tin không hợp lệ

2. **Kiểm thử Giỏ hàng** (3 tests)
   - ✅ Thêm sản phẩm vào giỏ hàng
   - ✅ Sắp xếp sản phẩm theo giá
   - ✅ Xóa sản phẩm khỏi giỏ hàng

3. **Kiểm thử Thanh toán** (1 test)
   - ✅ Hoàn thành quy trình thanh toán đầy đủ

**📁 Chi tiết bài thực hành:**  Xem tại Branch week3

---

### 🗓️ Tuần 4: Performance Testing với JMeter

**Nội dung:** Kiểm thử hiệu năng trang web với Apache JMeter

**Công nghệ:** Apache JMeter, Java

**Loại kiểm thử:** Performance Testing (Kiểm thử hiệu năng)

**Mục tiêu:**

- Hiểu cách sử dụng JMeter để thực hiện kiểm thử hiệu năng
- Thiết kế kịch bản kiểm thử với các tham số khác nhau
- Phân tích kết quả kiểm thử và viết báo cáo

**Kịch bản kiểm thử:**

1. **Thread Group 1: Kịch bản cơ bản**
   - 10 users, 5 loops
   - Test trang chủ với tải nhẹ

2. **Thread Group 2: Kịch bản tải nặng**
   - 50 users, 30s ramp-up
   - Test trang chủ + subpage với tải cao

3. **Thread Group 3: Kịch bản tùy chỉnh**
   - 20 users, 60s duration
   - Test POST/GET requests với sustained load

**📁 Chi tiết bài thực hành:**  Xem tại Branch week4

**📖 Tài liệu hướng dẫn:**

- [SETUP_GUIDE.md](automation_test/jmeter/SETUP_GUIDE.md) - Hướng dẫn cài đặt và cấu hình JMeter
- [test-scenarios.md](automation_test/jmeter/test-scenarios.md) - Chi tiết các kịch bản kiểm thử

---

## 📌 Ghi chú

Mỗi bài thực hành đều có:

- ✔️ Mã nguồn hoàn chỉnh
- ✔️ README mô tả chi tiết
- ✔️ Kết quả kiểm thử minh chứng
- ✔️ Commit và quản lý theo từng branch/tuần trên GitHub
