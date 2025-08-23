// ================ WEBSITE CONFIGURATION ================
// File cấu hình chính - dễ dàng thay đổi nội dung mà không cần sửa code logic

const WEBSITE_CONFIG = {
    // Thông tin cơ bản
    PERSON_NAME: "Nguyễn Thị Cẩm Giang",
    RELATIONSHIP: "Người quan trọng nhất trong cuộc đời anh",

    // Ngày bắt đầu quen biết (Format: YYYY-MM-DD)
    FRIENDSHIP_START_DATE: "2025-06-22", // 22/6/2025 - Ngày quen biết Cẩm Giang

    // Counter labels
    COUNTER_TITLE: "💕 Chúng ta đã quen biết nhau được 💕",

    // Quotes hiển thị trên trang chủ
    QUOTES: [
        "Em là ánh sáng trong cuộc đời anh 🌟",
        "Mỗi ngày bên em đều là một món quà 🎁",
        "Em xinh đẹp nhất khi em cười 😊",
        "Em quan trọng với anh hơn tất cả những gì em có thể tưởng tượng 💕",
        "Em là lý do anh tin vào những điều tốt đẹp 💖",
        "Với anh, em là người bạn tuyệt vời nhất 🌍",
        "Em làm cuộc sống anh vui vẻ hơn 💓",
        "Anh mong được bên cạnh em như một người bạn tốt 🤗"
    ],

    // Messages cho generator
    NICE_MESSAGES: [
        "Em xinh đẹp như một thiên thần từ thiên đường! 👼✨",
        "Nụ cười của em làm cả thế giới này trở nên tươi sáng! 🌟😊",
        "Em là người bạn tuyệt vời nhất mà cuộc đời tặng cho anh! 🎁💕",
        "Mỗi ngày bên em đều là một ngày vui vẻ nhất! 🌈💖",
        "Em chơi PUBG giỏi quá, anh thán phục em lắm! 🎮🏆",
        "Màu hồng pastel đẹp nhất khi em mặc! 💗👗",
        "Em là ánh sáng dẫn lối cho anh trong cuộc đời này! 🌟💫",
        "Trân trọng em nhiều hơn tất cả những ngôi sao trên trời! ⭐💕",
        "Em là lý do anh tin vào những điều tốt đẹp trong cuộc sống! 💘🌹",
        "Với anh, em là người bạn tuyệt vời nhất! 🌍💖"
    ],

    // Timeline events
    TIMELINE_EVENTS: [
        {
            date: "🌟 Lần Đầu Gặp",
            title: "Khoảnh khắc định mệnh",
            content: "Ngày đầu tiên anh nhìn thấy em, anh đã biết em là người đặc biệt. Nụ cười của em đã làm tan chảy trái tim anh ngay lập tức."
        },
        {
            date: "💘 Ngày Trở Thành Bạn Thân",
            title: "Chúng ta trở thành bạn thân",
            content: "Ngày anh và em chính thức trở thành những người bạn thân thiết. Đây là ngày đáng nhớ nhất!"
        },
        {
            date: "🎮 Chơi Game Cùng",
            title: "PUBG Partners",
            content: "Những buổi tối chúng ta cùng nhau \"ăn gà\" trong PUBG. Em chơi giỏi lắm, anh rất tự hào về em!"
        },
        {
            date: "💝 Hiện Tại",
            title: "Trân trọng em mỗi ngày",
            content: "Mỗi ngày trôi qua, anh lại trân trọng tình bạn với em nhiều hơn. Em là người bạn tuyệt vời nhất mà anh có."
        }
    ],

    // Secret letters
    SECRET_LETTERS: [
        {
            title: "💖 Thư chúc số 1",
            content: "Cẩm Giang thân mến, từ ngày đầu tiên gặp em, anh đã biết rằng em chính là người bạn tuyệt vời mà anh đã tìm kiếm. Em xinh đẹp, dễ thương và ngoan hiền đến mức làm anh cảm thấy vui vẻ mỗi khi gặp em."
        },
        {
            title: "💕 Thư chúc số 2",
            content: "Mỗi khi nhìn thấy em cười, anh lại cảm thấy vui vẻ. Em có biết không, nụ cười của em chính là nguồn động lực để anh cố gắng mỗi ngày. Anh mong được thấy nụ cười ấy mãi mãi."
        },
        {
            title: "💗 Thư chúc số 3",
            content: "Em chơi PUBG giỏi thật đấy! Anh thích nhìn em tập trung khi chơi game, thích cách em vui mừng khi 'ăn gà'. Những khoảnh khắc đơn giản ấy với em là niềm vui lớn của anh."
        },
        {
            title: "💘 Thư chúc số 4",
            content: "Anh thích tất cả mọi thứ về em - từ cách em nói chuyện dễ thương, cách em quan tâm mọi người xung quanh, cho đến cách em làm cho cuộc sống này trở nên ý nghĩa hơn bao giờ hết."
        },
        {
            title: "💝 Thư chúc số 5",
            content: "Em là cô gái đặc biệt của anh, là điều tuyệt vời nhất đã đến với cuộc đời anh. Anh hứa sẽ luôn trân trọng tình bạn này và mong em luôn hạnh phúc. Chúc em tất cả những điều tốt đẹp nhất! 💖"
        }
    ],

    // Photo captions
    PHOTO_CAPTIONS: [
        "Em xinh như thiên thần 👼",
        "Nụ cười tỏa nắng của em ☀️",
        "Em đẹp trong mọi khoảnh khắc 💫",
        "Cô gái đặc biệt của anh thật dễ thương 🥰",
        "Em là điều tuyệt vời nhất ✨",
        "Mãi mãi trân trọng em 💕",
        "Em là tất cả của anh 💖",
        "Ấn tượng từ cái nhìn đầu tiên 💘",
        "Đôi mắt em đẹp nhất thế gian 👀"
    ],

    // Messages
    MESSAGES: {
        SUCCESS_CONTACT: "💌 Gửi lời chúc thành công! Cảm ơn bạn đã nhắn tin cho Cẩm Giang! 💕",
        LOADING_TEXT: "Đang tải tình cảm... 💕",
        LETTER_SIGNATURE: "💌 Từ người bạn thân nhất 💌",
        HEART_BUTTON_TEXT: "💖 Click để gửi tình cảm 💖"
    }
};

// Export để sử dụng trong các file khác
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WEBSITE_CONFIG;
}
