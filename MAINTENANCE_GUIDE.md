# 🛠️ Hướng Dẫn Maintain Website

## 📁 Cấu Trúc File Mới

```
📦 Website
├── 📄 index.html          # Trang chủ
├── 📄 about.html          # Trang thông tin  
├── 📄 contact.html        # Trang liên hệ
├── 🎨 style.css           # CSS styling
├── ⚙️ config.js           # ⭐ CẤU HÌNH CHÍNH - THAY ĐỔI TẠI ĐÂY
├── 🔧 utils.js            # Hàm tiện ích
├── 🚀 main-refactored.js  # Logic chính
├── 📜 main.js             # File cũ (có thể xóa)
└── 📖 MAINTENANCE_GUIDE.md # Hướng dẫn này
```

## 🎯 Cách Thay Đổi Nội Dung

### 1. **Thay Đổi Ngày Quen Biết**
```javascript
// Trong file config.js, dòng 8:
FRIENDSHIP_START_DATE: "2024-01-01", // Đổi thành ngày thực tế
```

### 2. **Thay Đổi Tên & Mối Quan Hệ**
```javascript
// Trong file config.js:
PERSON_NAME: "Nguyễn Thị Cẩm Giang",
RELATIONSHIP: "Người quan trọng nhất trong cuộc đời anh",
```

### 3. **Thay Đổi Quotes**
```javascript
// Trong file config.js, mảng QUOTES:
QUOTES: [
    "Thêm quote mới ở đây 🌟",
    "Hoặc sửa quote cũ 💕",
    // ...
]
```

### 4. **Thay Đổi Timeline**
```javascript
// Trong file config.js, mảng TIMELINE_EVENTS:
TIMELINE_EVENTS: [
    {
        date: "🌟 Sự kiện mới",
        title: "Tiêu đề sự kiện", 
        content: "Mô tả chi tiết sự kiện..."
    }
]
```

### 5. **Thay Đổi Thư Bí Mật**
```javascript
// Trong file config.js, mảng SECRET_LETTERS:
SECRET_LETTERS: [
    {
        title: "💖 Tiêu đề thư mới",
        content: "Nội dung thư mới..."
    }
]
```

## 🔧 Ưu Điểm Của Cấu Trúc Mới

### ✅ **Dễ Maintain**
- Tất cả nội dung tập trung trong `config.js`
- Không cần sửa code logic
- Chỉ cần thay đổi text và ngày tháng

### ✅ **Tách Biệt Rõ Ràng**
- `config.js`: Chứa tất cả nội dung
- `utils.js`: Chứa các hàm tiện ích
- `main-refactored.js`: Chứa logic ứng dụng
- `style.css`: Chứa styling

### ✅ **Tái Sử Dụng**
- Các hàm trong `utils.js` có thể dùng lại
- Code được tổ chức theo class
- Dễ thêm tính năng mới

## 🚀 Cách Thêm Tính Năng Mới

### 1. **Thêm Quote Mới**
```javascript
// Trong config.js, thêm vào mảng QUOTES:
"Quote mới của bạn 💖"
```

### 2. **Thêm Message Generator Mới**
```javascript
// Trong config.js, thêm vào mảng NICE_MESSAGES:
"Message mới cho generator! ✨"
```

### 3. **Thêm Thư Bí Mật**
```javascript
// Trong config.js, thêm vào mảng SECRET_LETTERS:
{
    title: "💝 Thư mới",
    content: "Nội dung thư bí mật mới..."
}
```

## 🎨 Cách Thay Đổi Giao Diện

### 1. **Thay Đổi Màu Sắc**
- Mở file `style.css`
- Tìm các màu hiện tại: `#e75480`, `#7b2ff2`, `#ff6b9d`
- Thay thế bằng màu mới

### 2. **Thay Đổi Font**
- Trong `style.css`, tìm `font-family`
- Thay đổi font chữ theo ý muốn

## 📱 Test Website

1. Mở file `index.html` trong trình duyệt
2. Kiểm tra tất cả tính năng:
   - Counter đếm ngày
   - Quotes tự động thay đổi
   - Hiệu ứng trái tim
   - Form liên hệ
   - Thư bí mật

## 🐛 Troubleshooting

### **Lỗi: Counter không hoạt động**
- Kiểm tra ngày trong `config.js` đúng format `YYYY-MM-DD`

### **Lỗi: Quotes không hiển thị**
- Kiểm tra mảng `QUOTES` trong `config.js` có đúng syntax

### **Lỗi: JavaScript không chạy**
- Kiểm tra thứ tự load file trong HTML
- Mở Developer Tools để xem lỗi

## 💡 Tips

1. **Backup trước khi sửa**: Luôn sao lưu file trước khi chỉnh sửa
2. **Test từng bước**: Sau mỗi thay đổi, test ngay
3. **Sử dụng Developer Tools**: F12 để debug lỗi
4. **Giữ format**: Khi thêm nội dung mới, giữ đúng format JSON

## 🎉 Kết Luận

Cấu trúc mới giúp bạn:
- ✅ Dễ dàng thay đổi nội dung
- ✅ Không cần biết JavaScript sâu
- ✅ Ít rủi ro lỗi khi sửa
- ✅ Code sạch và có tổ chức

**Chỉ cần sửa file `config.js` là đủ cho hầu hết các thay đổi!** 🚀
