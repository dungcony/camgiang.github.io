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
        "Với anh, em là người tuyệt vời nhất 🌍",
        "Em làm cuộc sống anh vui vẻ hơn 💓",
        "Anh mong được bên cạnh em như một người tốt 🤗"
    ],

    // Messages cho generator
    NICE_MESSAGES: [
        "Em xinh đẹp như một thiên thần từ thiên đường! 👼✨",
        "Nụ cười của em làm cả thế giới này trở nên tươi sáng! 🌟😊",
        "Em là người tuyệt vời nhất mà cuộc đời tặng cho anh! 🎁💕",
        "Mỗi ngày bên em đều là một ngày vui vẻ nhất! 🌈💖",
        "Em chơi PUBG giỏi quá, anh thán phục em lắm! 🎮🏆",
        "Màu hồng pastel đẹp nhất khi em mặc! 💗👗",
        "Em là ánh sáng dẫn lối cho anh trong cuộc đời này! 🌟💫",
        "Trân trọng em nhiều hơn tất cả những ngôi sao trên trời! ⭐💕",
        "Em là lý do anh tin vào những điều tốt đẹp trong cuộc sống! 💘🌹",
        "Với anh, em là người tuyệt vời nhất! 🌍💖"
    ],

    // Timeline events
    TIMELINE_EVENTS: [
        {
            date: "🌟 Lần Đầu Gặp",
            title: "Khoảnh khắc định mệnh",
            content: "Ngày đầu tiên anh nhìn thấy em, anh đã biết em là người đặc biệt. Nụ cười của em đã làm tan chảy trái tim anh ngay lập tức."
        },
        {
            date: "🎮 Chơi Game Cùng",
            title: "PUBG Partners",
            content: "Những buổi tối chúng ta cùng nhau \"ăn gà\" trong PUBG. Em chơi giỏi lắm, anh rất tự hào về em!"
        },
        {
            date: "💝 Hiện Tại",
            title: "Trân trọng em mỗi ngày",
            content: "Mỗi ngày trôi qua, anh lại trân trọng tình với em nhiều hơn. Em là người tuyệt vời nhất mà anh có."
        }
    ],

    // Secret letters
    SECRET_LETTERS: [
        {
            title: "💖 Thư chúc số 1",
            content: "Cẩm Giang thân mến, từ ngày đầu tiên gặp em, anh đã biết rằng em chính là người tuyệt vời mà anh đã tìm kiếm. Em xinh đẹp, dễ thương và ngoan hiền đến mức làm anh cảm thấy vui vẻ mỗi khi gặp em."
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
            content: "Em là cô gái đặc biệt của anh, là điều tuyệt vời nhất đã đến với cuộc đời anh. Anh hứa sẽ luôn trân trọng tình này và mong em luôn hạnh phúc. Chúc em tất cả những điều tốt đẹp nhất! 💖"
        }
    ],

    // Gallery images - just image paths
    GALLERY_IMAGES: [
        "public/imgs/9.jpg",
        "public/imgs/z6917564606436_ddb9a9d4f523635a8d0f9db659fe24ef.jpg",
        "public/imgs/z6917564611811_0ef63083774e61aee98847fb8822ab89.jpg",
        "public/imgs/z6920674832264_2b4264f364d4196c86189908e8515ba0.jpg",
        "public/imgs/z6920674885018_2a12481a6524fbc0a3815f1816e0154b.jpg",
        "public/imgs/z6921070318196_f7d356b6a5d1031e834008b5e9122369.jpg",
        "public/imgs/z6921070318995_b403bcabcc32e9409d0f92bd1150e40c.jpg",
        "public/imgs/z6936851678160_f02bbe831160cb92e66b19592051a58f.jpg",
        "public/imgs/z6937068839608_231c7425f4f1d6c7977b4f6e1b54d74b.jpg",
        "public/imgs/z6937842948883_9847eed10b60ca9257ccbe704bf2ac15.jpg",
        "public/imgs/z6937842953610_b5a2118e6af45f67a99e1aabaac19f29.jpg",
        "public/imgs/z6937842966677_1be05a7902586e49b9edbb9899962fbd.jpg",
        "public/imgs/z6937842971558_c812d0eddf66cf74bb0c7f1ea234704c.jpg",
        "public/imgs/z6937842972754_eade1e9abe54e4e8b7666e1e8b4444da.jpg",
        "public/imgs/z6937842980773_01a0d0cf893d44b7c05b389af4bd96f1.jpg",
        "public/imgs/z6937842984113_de14a4acae4c31aec92c67284871ba30.jpg",
        "public/imgs/z6937842988008_830d598b60c76fb5639a52ac1693dd20.jpg",
        "public/imgs/z6937842995348_647aa1a6ba14493e6766c7191c9d2cce.jpg",
        "public/imgs/z6937843002664_555eadc3d4f421da7289e2cc318513f6.jpg",
        "public/imgs/z6937843008211_f26e2c55050eb3c02dccab41dfa5e5b4.jpg",
        "public/imgs/z6937843010951_0c36bc332da1076eaa990f6d8ed85de7.jpg",
        "public/imgs/z6937843267505_b557a3b14cfe68199dfea9432a24c0ca.jpg"
    ],

    // Messages
    MESSAGES: {
        SUCCESS_CONTACT: "💌 Gửi lời chúc thành công! Cảm ơn đã nhắn tin cho Cẩm Giang! 💕",
        LOADING_TEXT: "Đang tải tình cảm... 💕",
        LETTER_SIGNATURE: "💌 Từ người thân nhất 💌",
        HEART_BUTTON_TEXT: "💖 Click để gửi tình cảm 💖"
    }
};

// Export để sử dụng trong các file khác
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WEBSITE_CONFIG;
}
