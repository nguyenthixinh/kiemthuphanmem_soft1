# Báo Cáo Kiểm Thử Hiệu Năng với JMeter

> **Ghi chú:** Đây là template báo cáo. Sau khi chạy test xong, điền thông tin thực tế vào các phần được đánh dấu `[Điền...]` và thay thế giá trị mẫu bằng kết quả thực tế.

---

## 1. Thông Tin Chung

**Người thực hiện:** [Hoàng Minh Thiện]  
**MSSV:** [BIT230390]  
**Ngày thực hiện:** [23/01/2026]  
**Website kiểm thử:** https://www.reddit.com

---

## 2. Mục Tiêu Kiểm Thử

Mục tiêu của bài kiểm thử này là:

- Đánh giá hiệu năng của website dưới các mức tải khác nhau
- Xác định thời gian phản hồi (Response Time) của server
- Đo lường khả năng xử lý yêu cầu (Throughput)
- Phát hiện lỗi và điểm nghẽn hiệu năng
- Xác định giới hạn tải mà website có thể xử lý

---

## 3. Môi Trường Kiểm Thử

**Thông tin hệ thống:**

- **JMeter version:** [Điền version, ví dụ: 5.6.3]
- **Java version:** [Điền version, ví dụ: Java 21]
- **Hệ điều hành:** [Điền OS, ví dụ: Windows 11]
- **Cấu hình máy:** [Điền RAM và CPU, ví dụ: 16GB RAM, Intel i7-12700]

**Website được chọn:**

- **URL:** https://www.reddit.com
- **Lý do chọn:** Reddit là một trang web quy mô lớn với lượng truy cập cao, phù hợp để kiểm thử hiệu năng và học hỏi cách một hệ thống thực tế xử lý tải. Website có nhiều endpoints khác nhau để test và cung cấp insights về kiến trúc web hiện đại.

---

## 4. Kịch Bản Kiểm Thử

### Thread Group 1: Kịch Bản Cơ Bản

**Mục đích:** Thiết lập baseline performance metrics với tải nhẹ

**Cấu hình:**

- **Số lượng người dùng (Threads):** 10
- **Ramp-up Period:** 1 giây
- **Loop Count:** 5 lần lặp
- **Tổng số requests:** 50 (10 users × 5 loops)

**Hành vi:**

- Gửi HTTP GET request đến trang chủ Reddit (`/`)

**Mục tiêu kiểm tra:**

- Thời gian phản hồi trong điều kiện tải thấp
- Đảm bảo website hoạt động bình thường
- Thiết lập baseline để so sánh với các kịch bản khác

---

### Thread Group 2: Kịch Bản Tải Nặng

**Mục đích:** Kiểm thử khả năng chịu tải và phát hiện bottleneck

**Cấu hình:**

- **Số lượng người dùng (Threads):** 50
- **Ramp-up Period:** 30 giây
- **Loop Count:** 1 lần
- **Tổng thời gian chạy:** ~30 giây

**Hành vi:**

- HTTP GET request đến trang chủ Reddit (`/`)
- HTTP GET request đến trang `/r/popular/` (trang các bài viết phổ biến)

**Mục tiêu kiểm tra:**

- Hiệu năng khi có nhiều người dùng đồng thời
- Khả năng xử lý requests đến nhiều endpoints khác nhau
- Phát hiện lỗi khi tải tăng cao
- Đánh giá sự suy giảm hiệu năng khi số users tăng

---

### Thread Group 3: Kịch Bản Tùy Chỉnh

**Mục đích:** Mô phỏng traffic liên tục và hành vi phức tạp

**Cấu hình:**

- **Số lượng người dùng (Threads):** 20
- **Ramp-up Period:** 10 giây
- **Duration:** 60 giây
- **Loop Count:** Forever (chạy theo thời gian)

**Hành vi:**

- HTTP GET request đến trang `/r/all/` (tất cả bài viết)
- HTTP GET request đến trang `/r/AskReddit/` (subreddit AskReddit)

**Mục tiêu kiểm tra:**

- Hiệu năng dưới sustained load (tải liên tục)
- Khả năng xử lý requests lặp lại trong thời gian dài
- Phát hiện memory leak hoặc resource exhaustion
- Mô phỏng người dùng thực lướt qua nhiều trang

---

## 5. Cấu Hình JMeter

### HTTP Request Defaults

```
Server Name or IP: www.reddit.com
Port: 443 (HTTPS)
Protocol: https
Content Encoding: UTF-8
```

### HTTP Header Manager

```
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.9
```

### Listeners Sử Dụng

- **View Results Tree:** Xem chi tiết từng request/response
- **Summary Report:** Xem tổng hợp kết quả
- **Aggregate Report:** Xem các chỉ số thống kê chi tiết
- **Graph Results:** Hiển thị biểu đồ hiệu năng
- **CSV Data Set Config:** Lưu kết quả ra file CSV cho từng Thread Group

---

## 6. Kết Quả Kiểm Thử

> **Lưu ý:** Điền các giá trị thực tế từ JMeter Summary Report vào các bảng dưới đây.

### Thread Group 1: Kịch Bản Cơ Bản

| Metric                    | Value                       |
| ------------------------- | --------------------------- |
| **Số samples**            | 50                          |
| **Average Response Time** | [Điền giá trị] ms           |
| **Min Response Time**     | [Điền giá trị] ms           |
| **Max Response Time**     | [Điền giá trị] ms           |
| **Throughput**            | [Điền giá trị] requests/sec |
| **Error Rate**            | [Điền giá trị] %            |
| **Received KB/sec**       | [Điền giá trị] KB/sec       |

**Screenshots:**

![Thread Group 1 - Summary Report](results/thread-group-1-summary.png)

**Nhận xét:**

[Điền nhận xét của bạn về kết quả Thread Group 1. Ví dụ:]

- Website phản hồi tốt với tải nhẹ, thời gian phản hồi trung bình là [X] ms
- Không có lỗi nào xảy ra (Error rate = 0%)
- Throughput ổn định ở mức [X] requests/sec
- Response time min và max không chênh lệch quá lớn, cho thấy hiệu năng ổn định

---

### Thread Group 2: Kịch Bản Tải Nặng

| Metric                    | Value                       |
| ------------------------- | --------------------------- |
| **Số samples**            | 100                         |
| **Average Response Time** | [Điền giá trị] ms           |
| **Min Response Time**     | [Điền giá trị] ms           |
| **Max Response Time**     | [Điền giá trị] ms           |
| **Throughput**            | [Điền giá trị] requests/sec |
| **Error Rate**            | [Điền giá trị] %            |
| **Received KB/sec**       | [Điền giá trị] KB/sec       |

**Screenshots:**

![Thread Group 2 - Summary Report](results/thread-group-2-summary.png)

**Nhận xét:**

[Điền nhận xét của bạn về kết quả Thread Group 2. Ví dụ:]

- Thời gian phản hồi tăng lên [X%] so với Thread Group 1 khi số users tăng lên 50
- Xuất hiện [X%] lỗi, chủ yếu là [loại lỗi, ví dụ: timeout, 429 Too Many Requests]
- Throughput đạt [X] requests/sec, [tăng/giảm] so với baseline
- Max response time tăng đáng kể lên [X] ms, cho thấy có bottleneck khi tải cao

---

### Thread Group 3: Kịch Bản Tùy Chỉnh

| Metric                    | Value                       |
| ------------------------- | --------------------------- |
| **Số samples**            | [Điền giá trị]              |
| **Average Response Time** | [Điền giá trị] ms           |
| **Min Response Time**     | [Điền giá trị] ms           |
| **Max Response Time**     | [Điền giá trị] ms           |
| **Throughput**            | [Điền giá trị] requests/sec |
| **Error Rate**            | [Điền giá trị] %            |
| **Received KB/sec**       | [Điền giá trị] KB/sec       |

**Screenshots:**

![Thread Group 3 - Summary Report](results/thread-group-3-summary.png)

**Nhận xét:**

[Điền nhận xét của bạn về kết quả Thread Group 3. Ví dụ:]

- Test chạy trong 60 giây tạo ra [X] samples tổng cộng
- Thời gian phản hồi trung bình ổn định ở mức [X] ms
- Các endpoint khác nhau (/r/all, /r/AskReddit) có response time [giống nhau/khác nhau]
- Error rate [thấp/cao] ở mức [X%], cho thấy hệ thống [ổn định/có vấn đề] dưới sustained load

---

## 7. File Kết Quả

Các file CSV và screenshots được lưu trong thư mục `results/`:

- `thread-group-1-results.csv` - Dữ liệu chi tiết Thread Group 1
- `thread-group-2-results.csv` - Dữ liệu chi tiết Thread Group 2
- `thread-group-3-results.csv` - Dữ liệu chi tiết Thread Group 3
- `thread-group-1-summary.png` - Screenshot Summary Report Thread Group 1
- `thread-group-2-summary.png` - Screenshot Summary Report Thread Group 2
- `thread-group-3-summary.png` - Screenshot Summary Report Thread Group 3

---

## 8. Phân Tích Tổng Hợp

### So Sánh Các Kịch Bản

| Thread Group     | Avg Response Time | Throughput   | Error Rate |
| ---------------- | ----------------- | ------------ | ---------- |
| TG1 (Basic)      | [Điền] ms         | [Điền] req/s | [Điền] %   |
| TG2 (Heavy Load) | [Điền] ms         | [Điền] req/s | [Điền] %   |
| TG3 (Custom)     | [Điền] ms         | [Điền] req/s | [Điền] %   |

**Biểu đồ so sánh:** (Optional - có thể vẽ biểu đồ từ Excel/Google Sheets)

### Phân Tích Xu Hướng

[Điền phân tích về xu hướng dựa trên kết quả. Ví dụ:]

- **Response Time:** Tăng từ [X] ms (TG1) lên [Y] ms (TG2), tăng [Z%] khi số users tăng 5 lần
- **Throughput:** [Tăng/Không tăng tuyến tính] theo số users, cho thấy [phân tích]
- **Error Rate:** [Phân tích về lỗi xuất hiện ở mức tải nào]

### Nhận Xét Chung

**Điểm mạnh:**

[Điền các điểm mạnh của website. Ví dụ:]

- Reddit xử lý tốt với tải nhẹ và trung bình
- Hệ thống có cơ chế caching hiệu quả
- Response time ổn định trong hầu hết các trường hợp
- Tỷ lệ lỗi thấp ngay cả khi tải cao

**Điểm yếu:**

[Điền các điểm yếu phát hiện được. Ví dụ:]

- Thời gian phản hồi tăng đáng kể khi số người dùng > 40
- Xuất hiện rate limiting (HTTP 429) khi test với tải cao
- Một số endpoint có response time cao hơn đáng kể
- Độ biến động (variance) của response time tăng khi tải cao

**Khuyến nghị cải thiện:**

[Điền các khuyến nghị. Ví dụ:]

- Nếu xây dựng hệ thống tương tự, cần implement caching ở nhiều tầng (browser, CDN, application, database)
- Sử dụng load balancer để phân phối tải đều
- Implement rate limiting hợp lý để bảo vệ hệ thống
- Tối ưu hóa queries và indexes cho database
- Sử dụng CDN để phân phối static content
- Monitor và scale horizontally khi cần thiết

---

## 9. Kết Luận

[Tóm tắt kết quả kiểm thử, đánh giá tổng thể, và đưa ra nhận định. Ví dụ:]

Sau khi thực hiện ba kịch bản kiểm thử với tổng cộng [X] requests, có thể kết luận rằng Reddit là một hệ thống được thiết kế tối ưu cho hiệu năng cao và khả năng mở rộng tốt. Website cho thấy:

1. **Hiệu năng cơ bản tốt:** Với tải nhẹ (10 users), thời gian phản hồi trung bình là [X] ms, đạt mức excellent theo chuẩn ngành.

2. **Khả năng chịu tải:** Khi tăng lên 50 users đồng thời, hệ thống vẫn duy trì được [X%] uptime với thời gian phản hồi chấp nhận được.

3. **Kiến trúc ổn định:** Test liên tục trong 60 giây cho thấy không có dấu hiệu memory leak hay resource exhaustion.

4. **Rate limiting hiệu quả:** Reddit implement rate limiting để bảo vệ hệ thống khỏi abuse, đây là practice tốt cần học hỏi.

**Bài học rút ra:**

- Caching là yếu tố then chốt cho performance
- Rate limiting cần thiết cho mọi hệ thống production
- Monitoring và testing thường xuyên giúp phát hiện bottleneck sớm
- Scalability cần được thiết kế từ đầu, không phải sau khi có vấn đề

Bài kiểm thử này giúp hiểu rõ hơn về cách một hệ thống quy mô lớn hoạt động và áp dụng các best practices vào dự án thực tế.

---

## Phụ Lục

### A. File JMeter Test Plan

- **File:** `reddit-performance-test.jmx`
- **Đường dẫn:** `automation_test/jmeter/reddit-performance-test.jmx`
- **Mô tả:** Test plan chứa 3 Thread Groups và các listeners cần thiết

### B. Hướng Dẫn Chạy Test

Chi tiết xem file `README.md` trong cùng thư mục.

### C. Lưu Ý Khi Thực Hiện

- **Tuân thủ chính sách:** Không gửi quá nhiều requests để tránh vi phạm ToS
- **Thời gian test:** Test vào giờ thấp điểm để tránh ảnh hưởng người dùng thực
- **Đạo đức:** Đây là mục đích học tập, không stress test quá mức
- **Kết quả biến động:** Kết quả có thể khác nhau tùy thời điểm, mạng, và tải server

### D. Giải Thích Metrics

**Response Time (Thời gian phản hồi):**

- Thời gian từ khi gửi request đến khi nhận response hoàn chỉnh
- **Excellent:** < 200ms
- **Good:** 200-500ms
- **Acceptable:** 500-1000ms
- **Poor:** > 1000ms

**Throughput (Thông lượng):**

- Số requests được xử lý trong 1 giây
- Cao hơn = tốt hơn
- Phụ thuộc vào khả năng server và băng thông

**Error Rate (Tỷ lệ lỗi):**

- Phần trăm requests bị lỗi
- **Excellent:** 0%
- **Good:** < 0.5%
- **Acceptable:** 0.5-1%
- **Poor:** > 1%

**Latency:**

- Thời gian từ khi gửi request đến khi nhận byte đầu tiên
- Time to First Byte (TTFB)

### E. Troubleshooting

**Connection Timeout:**

- Kiểm tra internet connection
- Giảm số threads
- Tăng timeout settings trong JMeter

**HTTP 429 Too Many Requests:**

- Giảm số requests
- Thêm delays giữa requests
- Chờ một lúc trước khi test lại

**JMeter chạy chậm:**

- Tắt "View Results Tree"
- Tăng Java heap size
- Chạy non-GUI mode

### F. Tài Liệu Tham Khảo

- JMeter Documentation: https://jmeter.apache.org/usermanual/
- Performance Testing Best Practices: https://jmeter.apache.org/usermanual/best-practices.html
- Reddit API Guidelines: https://www.reddit.com/wiki/api

---


---

_Template version 1.0 - Created for Software Testing Course_

