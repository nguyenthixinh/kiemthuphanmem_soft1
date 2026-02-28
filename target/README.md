# Student Analyzer – Unit Testing with JUnit

## 📌 Giới thiệu

Dự án Java này thực hiện **phân tích dữ liệu điểm số học sinh** và minh họa cách viết **kiểm thử đơn vị (Unit Test) bằng JUnit 5**.

Mục tiêu:

* Lọc và đếm học sinh đạt loại Giỏi
* Tính điểm trung bình hợp lệ
* Thực hành quy trình kiểm thử tự động với Maven + JUnit

---

## 🧩 Chức năng chính

### 1. `countExcellentStudents(List<Double> scores)`

Đếm số học sinh đạt loại Giỏi.

**Quy tắc:**

* Giỏi khi `>= 8.0`
* Bỏ qua điểm `< 0` hoặc `> 10`
* Danh sách rỗng → trả về `0`

---

### 2. `calculateValidAverage(List<Double> scores)`

Tính điểm trung bình của các điểm hợp lệ.

**Quy tắc:**

* Chỉ tính điểm trong `[0, 10]`
* Bỏ qua dữ liệu sai
* Không có điểm hợp lệ → trả về `0`

---

## 🏗️ Cấu trúc project

```
student-analyzer/
├── src/
│   ├── main/java/com/example/
│   │   └── StudentAnalyzer.java
│   └── test/java/com/example/
│       └── StudentAnalyzerTest.java
├── pom.xml
└── README.md
```

---

## ⚙️ Yêu cầu môi trường

* Java 17+
* Maven 3.9+
* VS Code hoặc IDE Java bất kỳ

Kiểm tra nhanh:

```bash
java -version
mvn -version
```

---

## 🚀 Cách chạy project

### Bước 1. Clone repo

```bash
git clone <repo-url>
cd student-analyzer
```

---

### Bước 2. Chạy unit test

```bash
mvn test
```

**Kết quả mong đợi:**

```
BUILD SUCCESS
Tests run: X, Failures: 0
```

---

## 🧪 Các trường hợp kiểm thử

Project bao phủ các nhóm test:

### ✅ Trường hợp bình thường

* Danh sách có điểm hợp lệ và không hợp lệ
* Danh sách toàn bộ hợp lệ

### ⚠️ Trường hợp biên

* Danh sách rỗng
* Chỉ chứa 0 hoặc 10

### ❌ Trường hợp ngoại lệ dữ liệu

* Điểm < 0
* Điểm > 10

---

## 🔗 Liên kết Issue

| Issue | Nội dung                             |
| ----- | ------------------------------------ |
| #1    | Implement `countExcellentStudents()` |
| #2    | Implement `calculateValidAverage()`  |
| #3    | Add unit tests                       |
| #4    | Update README                        |

---

## 🧠 Công nghệ sử dụng

* Java 17
* Maven
* JUnit 5
* VS Code

---

## 👤 Tác giả

Nguyễn Thị Xinh - Sinh viên thực hiện bài tập kiểm thử phần mềm – Manual Testing.

---

## 📚 Tài liệu tham khảo

* JUnit 5 User Guide
* Maven Documentation
* GitHub Docs

---

✅ **Trạng thái hiện tại:** Unit tests chạy thành công.
