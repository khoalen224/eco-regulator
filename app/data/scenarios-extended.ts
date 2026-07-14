import type { Scenario } from "./scenarios";

export type Alignment = "thi-truong" | "can-thiep" | "can-bang";

export interface ExtendedChoice {
  text: string;
  effect: { growth: number; equity: number; budget: number };
  feedback: string;
  alignment: Alignment;
}

export interface ExtendedScenario extends Omit<Scenario, "choices"> {
  tag: string;
  choices: ExtendedChoice[];
}

export const extendedScenarios: ExtendedScenario[] = [
  {
    id: 4, tag: "5.1.3.a", category: "Mục tiêu & Sở hữu (Mục 5.1)",
    question: "Bộ Kế hoạch đề xuất lấy tốc độ tăng GDP làm chỉ tiêu duy nhất đánh giá thành tích các địa phương trong 5 năm tới, bỏ bớt các chỉ tiêu xã hội (y tế, giáo dục, giảm nghèo) để \"tập trung nguồn lực\". Bạn quyết định thế nào?",
    choices: [
      { text: "A. Đồng ý, chỉ giữ chỉ tiêu GDP để dễ đo lường và tạo áp lực tăng trưởng.", effect: { growth: 15, equity: -20, budget: 0 }, feedback: "Tăng trưởng có thể bứt phá ngắn hạn, nhưng đi ngược đặc trưng về mục tiêu của KTTT định hướng XHCN: kinh tế thị trường ở đây là phương tiện, không phải mục đích tự thân.", alignment: "thi-truong" },
      { text: "B. Bác bỏ, giữ nguyên toàn bộ hệ chỉ tiêu xã hội cũ, không đổi gì.", effect: { growth: -5, equity: 5, budget: -5 }, feedback: "An toàn nhưng thụ động — không tạo được động lực cải thiện hiệu quả quản lý, dễ rơi vào tư duy hành chính bao cấp.", alignment: "can-thiep" },
      { text: "C. Giữ GDP làm một chỉ tiêu, nhưng bổ sung chỉ số phát triển con người (HDI) và giảm nghèo làm điều kiện xét thi đua.", effect: { growth: 8, equity: 10, budget: -3 }, feedback: "Đúng tinh thần đặc trưng mục tiêu: dùng tăng trưởng làm phương tiện nâng cao đời sống nhân dân, không đánh đổi công bằng xã hội để lấy tăng trưởng đơn thuần.", alignment: "can-bang" },
    ],
  },
  {
    id: 5, tag: "5.1.3.c", category: "Quản lý kinh tế (Mục 5.1)",
    question: "Một Tập đoàn Nhà nước ngành viễn thông thua lỗ 3 năm liên tiếp nhưng xin giữ vị thế độc quyền với lý do \"an ninh kinh tế quốc gia\", từ chối cho tư nhân tham gia hạ tầng mạng lõi. Bạn xử lý ra sao?",
    choices: [
      { text: "A. Chấp thuận giữ độc quyền vô thời hạn, cấp thêm vốn bù lỗ từ ngân sách.", effect: { growth: -10, equity: 0, budget: -15 }, feedback: "Đây là quản lý bằng mệnh lệnh hành chính thuần túy, không tôn trọng quy luật cạnh tranh — đi ngược đặc trưng \"quản lý kinh tế tôn trọng quy luật thị trường\".", alignment: "can-thiep" },
      { text: "B. Cổ phần hóa và mở hoàn toàn cho tư nhân/nước ngoài cạnh tranh tự do, không ràng buộc.", effect: { growth: 12, equity: -10, budget: 8 }, feedback: "Thúc đẩy hiệu quả nhưng bỏ ngỏ rủi ro an ninh hạ tầng trọng yếu — thiếu vai trò điều tiết cần thiết của Nhà nước.", alignment: "thi-truong" },
      { text: "C. Mở hạ tầng phụ trợ cho tư nhân cạnh tranh, Nhà nước giữ cổ phần chi phối ở hạ tầng lõi và đặt lộ trình buộc tập đoàn cải thiện hiệu quả.", effect: { growth: 6, equity: 5, budget: -2 }, feedback: "Kết hợp quản lý theo pháp luật/kế hoạch với tôn trọng quy luật cạnh tranh — đúng đặc trưng quan hệ quản lý kinh tế của KTTT định hướng XHCN.", alignment: "can-bang" },
    ],
  },
  {
    id: 6, tag: "5.1.3.d", category: "Quan hệ phân phối (Mục 5.1)",
    question: "Lương tối thiểu vùng đã 4 năm không điều chỉnh trong khi giá sinh hoạt tăng mạnh. Hiệp hội doanh nghiệp phản đối tăng lương vì sợ giảm sức cạnh tranh xuất khẩu; công đoàn đòi tăng 15%.",
    choices: [
      { text: "A. Giữ nguyên lương tối thiểu để bảo vệ lợi nhuận doanh nghiệp và thu hút FDI.", effect: { growth: 8, equity: -15, budget: 2 }, feedback: "Ưu tiên phân phối theo vốn/lợi nhuận doanh nghiệp, bỏ qua phân phối theo lao động — lệch khỏi đặc trưng phân phối của mô hình.", alignment: "thi-truong" },
      { text: "B. Tăng ngay 15% theo đúng yêu cầu công đoàn, áp dụng đồng loạt mọi ngành.", effect: { growth: -8, equity: 15, budget: -5 }, feedback: "Bảo vệ người lao động tức thời nhưng có thể đẩy chi phí doanh nghiệp nhỏ vượt ngưỡng chịu đựng, thiếu cân nhắc hiệu quả kinh tế.", alignment: "can-thiep" },
      { text: "C. Tăng theo lộ trình 3 năm, mức tăng khác nhau theo vùng và năng suất ngành.", effect: { growth: 3, equity: 8, budget: -1 }, feedback: "Phân phối theo lao động và hiệu quả kinh tế là chủ yếu, có tính đến điều kiện thực tế — đúng đặc trưng quan hệ phân phối của KTTT định hướng XHCN.", alignment: "can-bang" },
    ],
  },
  {
    id: 7, tag: "5.1.3.e", category: "Tăng trưởng gắn công bằng XH (Mục 5.1)",
    question: "Ngân sách dư 2.000 tỷ đồng cuối năm. Bộ Tài chính đề xuất hai phương án: (1) giảm thuế doanh nghiệp để kích thích đầu tư, hoặc (2) đầu tư trạm y tế, trường học ở vùng sâu vùng xa.",
    choices: [
      { text: "A. Dồn toàn bộ để giảm thuế doanh nghiệp, tối đa hóa tăng trưởng.", effect: { growth: 15, equity: -10, budget: -5 }, feedback: "Tăng trưởng trước, công bằng tính sau — đây chính là mô hình \"tăng trưởng trước, chia sau\" mà giáo trình chỉ rõ là khác với định hướng XHCN.", alignment: "thi-truong" },
      { text: "B. Dồn toàn bộ cho y tế - giáo dục vùng khó khăn, không giảm thuế.", effect: { growth: -5, equity: 15, budget: -8 }, feedback: "Rất thiên về công bằng nhưng bỏ lỡ cơ hội tạo thêm việc làm/tăng trưởng đi kèm — cần cân đối hơn để duy trì động lực kinh tế.", alignment: "can-thiep" },
      { text: "C. Chia đôi: một phần giảm thuế có điều kiện tạo việc làm mới, một phần đầu tư hạ tầng xã hội vùng khó khăn.", effect: { growth: 8, equity: 8, budget: -6 }, feedback: "Gắn tăng trưởng kinh tế với tiến bộ, công bằng xã hội ngay trong từng bước, từng chính sách — đúng đặc trưng thứ năm của mô hình.", alignment: "can-bang" },
    ],
  },
  {
    id: 8, tag: "5.2", category: "Hoàn thiện thể chế đất đai (Mục 5.2)",
    question: "Sửa Luật Đất đai: một số ý kiến đề nghị cho phép chuyển nhượng đất nông nghiệp hoàn toàn tự do; một số khác đề nghị cấm chuyển nhượng để giữ đất cho nông dân.",
    choices: [
      { text: "A. Tự do hóa hoàn toàn thị trường chuyển nhượng đất nông nghiệp.", effect: { growth: 12, equity: -15, budget: 0 }, feedback: "Thúc đẩy tích tụ ruộng đất nhưng rủi ro nông dân mất đất, mất sinh kế nếu thiếu ràng buộc.", alignment: "thi-truong" },
      { text: "B. Cấm chuyển nhượng, chỉ cho thuê ngắn hạn, giữ nguyên hiện trạng manh mún.", effect: { growth: -8, equity: 5, budget: 0 }, feedback: "Bảo vệ nông dân trước mắt nhưng cản trở tích tụ đất đai để sản xuất quy mô lớn — hạn chế phát triển thị trường yếu tố sản xuất.", alignment: "can-thiep" },
      { text: "C. Cho phép chuyển nhượng có hạn mức, kèm quỹ hỗ trợ chuyển đổi nghề cho nông dân mất đất.", effect: { growth: 6, equity: 6, budget: -4 }, feedback: "Hoàn thiện thể chế sở hữu và phát triển thị trường yếu tố sản xuất (đất đai) đồng bộ — đúng nội dung mục 5.2.", alignment: "can-bang" },
    ],
  },
  {
    id: 9, tag: "5.2", category: "Hội nhập kinh tế quốc tế (Mục 5.2)",
    question: "Đàm phán FTA thế hệ mới yêu cầu Việt Nam mở cửa hoàn toàn ngành sữa nội địa cho tập đoàn nước ngoài, đổi lại thuế xuất khẩu nông sản Việt Nam sang thị trường đó giảm về 0%.",
    choices: [
      { text: "A. Ký ngay, mở cửa hoàn toàn để giữ ưu đãi xuất khẩu nông sản.", effect: { growth: 10, equity: -8, budget: 3 }, feedback: "Ngành sữa nội địa có thể bị áp đảo nhanh — hội nhập cần lộ trình bảo vệ doanh nghiệp trong nước.", alignment: "thi-truong" },
      { text: "B. Từ chối đàm phán để bảo hộ tuyệt đối ngành sữa trong nước.", effect: { growth: -6, equity: 3, budget: 0 }, feedback: "Bỏ lỡ cơ hội tiếp cận thị trường xuất khẩu lớn — không thúc đẩy hội nhập kinh tế quốc tế theo tinh thần mục 5.2.", alignment: "can-thiep" },
      { text: "C. Ký FTA nhưng đàm phán lộ trình mở cửa ngành sữa trong 5 năm, kèm hỗ trợ doanh nghiệp sữa nội nâng cao năng lực.", effect: { growth: 7, equity: 4, budget: -3 }, feedback: "Đẩy mạnh hội nhập kinh tế quốc tế có chuẩn bị — đúng nội dung hoàn thiện thể chế hội nhập ở mục 5.2.", alignment: "can-bang" },
    ],
  },
  {
    id: 10, tag: "5.2", category: "Cổ phần hóa DNNN (Mục 5.2)",
    question: "Một doanh nghiệp nhà nước ngành cơ khí thua lỗ nhiều năm, công nghệ lạc hậu. Có nhà đầu tư tư nhân muốn mua lại 100% cổ phần.",
    choices: [
      { text: "A. Bán 100% ngay lập tức, không kèm điều kiện, thu tiền về ngân sách.", effect: { growth: 8, equity: -10, budget: 12 }, feedback: "Giải quyết nhanh gánh nặng ngân sách nhưng bỏ ngỏ rủi ro mất việc làm hàng loạt cho người lao động cũ.", alignment: "thi-truong" },
      { text: "B. Không bán, tiếp tục bơm vốn ngân sách để duy trì hoạt động.", effect: { growth: -10, equity: 2, budget: -15 }, feedback: "Kéo dài tình trạng kém hiệu quả, hao tổn ngân sách nhà nước — không phù hợp hướng cổ phần hóa DNNN yếu kém.", alignment: "can-thiep" },
      { text: "C. Cổ phần hóa có điều kiện: nhà đầu tư cam kết giữ việc làm tối thiểu 2 năm và đầu tư đổi mới công nghệ.", effect: { growth: 6, equity: 6, budget: 5 }, feedback: "Phát triển các thành phần kinh tế theo cơ chế thị trường nhưng có ràng buộc bảo vệ người lao động — đúng nội dung mục 5.2.", alignment: "can-bang" },
    ],
  },
  {
    id: 11, tag: "5.3.1", category: "Quan hệ lợi ích lao động (Mục 5.3)",
    question: "Công nhân một khu công nghiệp đình công đòi tăng lương 20% và cải thiện bữa ăn ca. Chủ doanh nghiệp FDI dọa rút vốn nếu bị ép tăng chi phí.",
    choices: [
      { text: "A. Đứng về phía doanh nghiệp, yêu cầu công nhân quay lại làm việc ngay.", effect: { growth: 5, equity: -18, budget: 0 }, feedback: "Ưu tiên giữ vốn đầu tư nhưng bỏ qua lợi ích chính đáng của người lao động — làm trầm trọng thêm mâu thuẫn lợi ích.", alignment: "thi-truong" },
      { text: "B. Ép doanh nghiệp đáp ứng 100% yêu cầu công nhân ngay lập tức.", effect: { growth: -12, equity: 10, budget: 0 }, feedback: "Bảo vệ người lao động nhưng rủi ro đẩy doanh nghiệp rút vốn — can thiệp hành chính quá mức vào thỏa thuận lao động.", alignment: "can-thiep" },
      { text: "C. Tổ chức đối thoại ba bên (Nhà nước - công đoàn - doanh nghiệp), hòa giải mức tăng lương theo lộ trình.", effect: { growth: 3, equity: 10, budget: -1 }, feedback: "Đúng vai trò Nhà nước trong giải quyết mâu thuẫn quan hệ lợi ích kinh tế bằng đối thoại, hòa giải — theo mục 5.3.2.", alignment: "can-bang" },
    ],
  },
  {
    id: 12, tag: "5.3.2", category: "Điều hòa lợi ích qua thuế (Mục 5.3)",
    question: "Đề xuất áp thuế thu nhập cá nhân lũy tiến mạnh hơn với nhóm thu nhập cao để tăng nguồn lực cho an sinh xã hội. Nhóm doanh nhân phản đối vì sợ giảm động lực làm giàu.",
    choices: [
      { text: "A. Không tăng thuế nhóm thu nhập cao, giữ nguyên để khuyến khích đầu tư.", effect: { growth: 8, equity: -10, budget: -5 }, feedback: "Giữ động lực làm giàu nhưng bỏ lỡ công cụ điều hòa lợi ích cá nhân - xã hội quan trọng của Nhà nước.", alignment: "thi-truong" },
      { text: "B. Áp mức thuế lũy tiến rất cao (trên 50%) với nhóm thu nhập cao nhất ngay lập tức.", effect: { growth: -10, equity: 12, budget: 10 }, feedback: "Tăng nguồn thu an sinh xã hội mạnh nhưng có thể làm nản lòng nhà đầu tư, giảm động lực kinh doanh.", alignment: "can-thiep" },
      { text: "C. Tăng thuế lũy tiến ở mức vừa phải, dùng nguồn thu bổ sung cho quỹ bảo hiểm y tế và trợ cấp thất nghiệp.", effect: { growth: 2, equity: 10, budget: 6 }, feedback: "Đúng vai trò điều hòa lợi ích cá nhân - doanh nghiệp - xã hội qua chính sách phân phối lại thu nhập — theo mục 5.3.2.", alignment: "can-bang" },
    ],
  },
  {
    id: 13, tag: "5.3.2", category: "Kiểm soát lợi ích tiêu cực (Mục 5.3)",
    question: "Thanh tra phát hiện một dự án đầu tư công lớn có dấu hiệu \"lợi ích nhóm\" giữa quan chức địa phương và nhà thầu, gây thất thoát ngân sách.",
    choices: [
      { text: "A. Xử lý nội bộ, kỷ luật nhẹ để tránh ảnh hưởng tiến độ dự án.", effect: { growth: 2, equity: -15, budget: -10 }, feedback: "Che giấu vấn đề chỉ khiến quan hệ lợi ích tiêu cực tiếp tục lan rộng, đi ngược vai trò kiểm soát tham nhũng của Nhà nước.", alignment: "thi-truong" },
      { text: "B. Dừng toàn bộ dự án vô thời hạn để điều tra triệt để.", effect: { growth: -12, equity: 5, budget: -8 }, feedback: "Kiên quyết nhưng gây đình trệ hạ tầng, ảnh hưởng đời sống dân cư phụ thuộc dự án.", alignment: "can-thiep" },
      { text: "C. Điều tra công khai, xử lý nghiêm cá nhân sai phạm, đồng thời chỉ định đơn vị khác tiếp tục thi công.", effect: { growth: 3, equity: 12, budget: -3 }, feedback: "Đúng nội dung kiểm soát, ngăn ngừa quan hệ lợi ích tiêu cực, phòng chống tham nhũng — theo mục 5.3.2.", alignment: "can-bang" },
    ],
  },
  {
    id: 14, tag: "5.3.2", category: "Mâu thuẫn lợi ích đất đai (Mục 5.3)",
    question: "Một doanh nghiệp được giao đất làm khu công nghiệp nhưng giá đền bù bị nông dân cho là quá thấp so với thị trường, dẫn đến khiếu kiện kéo dài.",
    choices: [
      { text: "A. Giữ nguyên mức giá đền bù theo khung nhà nước cũ để dự án không đội vốn.", effect: { growth: 5, equity: -12, budget: 3 }, feedback: "Bảo vệ tiến độ và ngân sách dự án nhưng để lại bất bình trong dân, tiềm ẩn bất ổn xã hội kéo dài.", alignment: "thi-truong" },
      { text: "B. Hủy dự án theo yêu cầu của người dân khiếu kiện, bất kể cam kết đã ký.", effect: { growth: -10, equity: 6, budget: -6 }, feedback: "Bảo vệ lợi ích trước mắt của nông dân nhưng gây mất niềm tin nhà đầu tư, ảnh hưởng môi trường đầu tư lâu dài.", alignment: "can-thiep" },
      { text: "C. Định giá đền bù lại theo sát giá thị trường, tổ chức đối thoại công khai với người dân.", effect: { growth: 4, equity: 10, budget: -4 }, feedback: "Giải quyết mâu thuẫn lợi ích kinh tế bằng đối thoại và công cụ pháp luật — đúng tinh thần mục 5.3.2.", alignment: "can-bang" },
    ],
  },
  {
    id: 15, tag: "5.1.1", category: "Kiểm soát lạm phát (Mục 5.1)",
    question: "Giá xăng dầu và lương thực tăng mạnh do biến động thế giới, lạm phát có nguy cơ vượt mục tiêu. Có đề xuất áp trần giá bán lẻ với toàn bộ mặt hàng thiết yếu.",
    choices: [
      { text: "A. Áp trần giá cứng với tất cả mặt hàng thiết yếu trong 6 tháng.", effect: { growth: -10, equity: 5, budget: -8 }, feedback: "Có thể kìm giá tạm thời nhưng vi phạm quy luật cung – cầu, dễ gây khan hiếm hàng hóa.", alignment: "can-thiep" },
      { text: "B. Để giá vận hành hoàn toàn theo thị trường, không can thiệp.", effect: { growth: 6, equity: -15, budget: 5 }, feedback: "Tôn trọng quy luật cung – cầu nhưng bỏ mặc nhóm thu nhập thấp chịu tác động nặng nề nhất.", alignment: "thi-truong" },
      { text: "C. Dùng quỹ bình ổn giá xăng dầu, trợ giá có mục tiêu cho hộ nghèo, không áp trần cứng.", effect: { growth: 2, equity: 8, budget: -6 }, feedback: "Tôn trọng quy luật thị trường nhưng có công cụ điều tiết của Nhà nước hướng đến nhóm yếu thế — đúng đặc trưng KTTT định hướng XHCN.", alignment: "can-bang" },
    ],
  },
];
