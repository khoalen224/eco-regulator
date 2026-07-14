// data/quiz.ts
// Ngân hàng câu hỏi trắc nghiệm Chương 5 — tự soạn theo đúng nội dung giáo trình
// (tr.177–220), tham khảo định dạng câu hỏi phổ biến trên các bộ đề ôn tập công khai
// (điền khuyết, chọn đáp án đúng, nhận diện đặc trưng...) để đa dạng dạng câu, không
// sao chép nguyên văn câu hỏi/đáp án từ bất kỳ nguồn nào.

export type QuizType = "mcq" | "cloze" | "true-false";

export interface QuizOption {
  id: "A" | "B" | "C" | "D";
  text: string;
}

export interface QuizQuestion {
  id: string;
  tag: string; // liên kết sang mục trong panel "Kiến thức lý luận"
  type: QuizType;
  question: string;
  options: QuizOption[];
  correctId: "A" | "B" | "C" | "D";
  explanation: string; // hiện ra sau khi trả lời, giải thích ngắn gọn vì sao đúng/sai
}

export const quizBank: QuizQuestion[] = [
  // ---------- 5.1.1 Khái niệm ----------
  {
    id: "q01",
    tag: "5.1.1",
    type: "cloze",
    question:
      "Điền vào chỗ trống: 'Kinh tế thị trường định hướng XHCN là nền kinh tế vận hành theo các ...(1)... của thị trường, đồng thời có sự ...(2)... của Nhà nước do Đảng Cộng sản Việt Nam lãnh đạo.'",
    options: [
      { id: "A", text: "(1) nguyên tắc — (2) quản lý" },
      { id: "B", text: "(1) quy luật — (2) điều tiết" },
      { id: "C", text: "(1) chỉ tiêu — (2) kiểm soát" },
      { id: "D", text: "(1) quy luật — (2) sở hữu" },
    ],
    correctId: "B",
    explanation:
      "Đúng nguyên văn định nghĩa trong giáo trình: vận hành theo 'quy luật' của thị trường, có sự 'điều tiết' của Nhà nước.",
  },
  {
    id: "q02",
    tag: "5.1.1",
    type: "mcq",
    question: "Kinh tế thị trường, xét về bản chất, là sản phẩm của:",
    options: [
      { id: "A", text: "Riêng chủ nghĩa tư bản" },
      { id: "B", text: "Riêng chủ nghĩa xã hội" },
      { id: "C", text: "Văn minh nhân loại nói chung" },
      { id: "D", text: "Riêng các nước đang phát triển" },
    ],
    correctId: "C",
    explanation:
      "Giáo trình nhấn mạnh KTTT là thành tựu chung của văn minh nhân loại, không phải đặc sản riêng của CNTB.",
  },
  {
    id: "q03",
    tag: "5.1.1",
    type: "mcq",
    question:
      "Đảng Cộng sản Việt Nam chính thức nêu khái niệm 'kinh tế thị trường định hướng xã hội chủ nghĩa' tại đại hội nào?",
    options: [
      { id: "A", text: "Đại hội VI (1986)" },
      { id: "B", text: "Đại hội VII (1991)" },
      { id: "C", text: "Đại hội IX (2001)" },
      { id: "D", text: "Đại hội XI (2011)" },
    ],
    correctId: "C",
    explanation:
      "Đại hội VI khởi xướng Đổi mới (thừa nhận kinh tế nhiều thành phần); khái niệm chính thức được nêu tại Đại hội IX (2001).",
  },

  // ---------- 5.1.2 Tính tất yếu khách quan ----------
  {
    id: "q04",
    tag: "5.1.2",
    type: "mcq",
    question:
      "Đâu KHÔNG phải là một trong ba lý do giải thích tính tất yếu khách quan của việc phát triển KTTT định hướng XHCN ở Việt Nam?",
    options: [
      { id: "A", text: "Phù hợp xu hướng phát triển khách quan của thế giới" },
      { id: "B", text: "Tính ưu việt của KTTT trong thúc đẩy phát triển" },
      { id: "C", text: "Phù hợp nguyện vọng của nhân dân Việt Nam" },
      { id: "D", text: "Yêu cầu bắt buộc từ các tổ chức tài chính quốc tế" },
    ],
    correctId: "D",
    explanation:
      "Ba lý do theo giáo trình là: xu hướng khách quan của thế giới, tính ưu việt của KTTT, và nguyện vọng của nhân dân — không có lý do 'bị ép buộc từ bên ngoài'.",
  },
  {
    id: "q05",
    tag: "5.1.2",
    type: "mcq",
    question: "Đại hội nào của Đảng khởi xướng công cuộc Đổi mới, từ bỏ mô hình kế hoạch hóa tập trung quan liêu, bao cấp?",
    options: [
      { id: "A", text: "Đại hội V (1982)" },
      { id: "B", text: "Đại hội VI (1986)" },
      { id: "C", text: "Đại hội VIII (1996)" },
      { id: "D", text: "Đại hội X (2006)" },
    ],
    correctId: "B",
    explanation: "Đại hội VI (12/1986) là mốc khởi xướng Đổi mới ở Việt Nam.",
  },

  // ---------- 5.1.3 Đặc trưng ----------
  {
    id: "q06",
    tag: "5.1.3",
    type: "mcq",
    question:
      "'Hướng tới phát triển lực lượng sản xuất, xây dựng cơ sở vật chất – kỹ thuật của CNXH, nâng cao đời sống nhân dân' là nội dung thể hiện đặc trưng nào của KTTT định hướng XHCN?",
    options: [
      { id: "A", text: "Về quan hệ sở hữu" },
      { id: "B", text: "Về quan hệ quản lý" },
      { id: "C", text: "Về mục tiêu" },
      { id: "D", text: "Về quan hệ phân phối" },
    ],
    correctId: "C",
    explanation: "Đây chính là nội dung đặc trưng 'về mục tiêu' — điểm khác biệt căn bản với KTTT tư bản chủ nghĩa.",
  },
  {
    id: "q07",
    tag: "5.1.3",
    type: "mcq",
    question: "Trong nền KTTT định hướng XHCN ở Việt Nam, thành phần kinh tế nào giữ vai trò chủ đạo?",
    options: [
      { id: "A", text: "Kinh tế tư nhân" },
      { id: "B", text: "Kinh tế có vốn đầu tư nước ngoài" },
      { id: "C", text: "Kinh tế nhà nước" },
      { id: "D", text: "Kinh tế tập thể" },
    ],
    correctId: "C",
    explanation: "Kinh tế nhà nước giữ vai trò chủ đạo; kinh tế nhà nước cùng kinh tế tập thể ngày càng trở thành nền tảng vững chắc.",
  },
  {
    id: "q08",
    tag: "5.1.3",
    type: "mcq",
    question:
      "Nhà nước quản lý nền KTTT định hướng XHCN chủ yếu bằng công cụ nào, dưới sự lãnh đạo của Đảng?",
    options: [
      { id: "A", text: "Mệnh lệnh hành chính trực tiếp tới từng doanh nghiệp" },
      { id: "B", text: "Pháp luật, chiến lược, quy hoạch, kế hoạch và chính sách kinh tế" },
      { id: "C", text: "Ấn định giá cả toàn bộ hàng hóa trên thị trường" },
      { id: "D", text: "Phân phối vật tư bằng tem phiếu" },
    ],
    correctId: "B",
    explanation:
      "Đây là đặc trưng về quan hệ quản lý kinh tế — quản lý bằng pháp luật/kế hoạch/chính sách, tôn trọng quy luật thị trường, khác cơ chế bao cấp cũ (đáp án C, D).",
  },
  {
    id: "q09",
    tag: "5.1.3",
    type: "mcq",
    question: "Hình thức phân phối được xem là chủ yếu trong KTTT định hướng XHCN ở Việt Nam là:",
    options: [
      { id: "A", text: "Phân phối bình quân theo đầu người" },
      { id: "B", text: "Phân phối theo kết quả lao động và hiệu quả kinh tế" },
      { id: "C", text: "Phân phối hoàn toàn theo vốn sở hữu" },
      { id: "D", text: "Phân phối theo cấp bậc hành chính" },
    ],
    correctId: "B",
    explanation: "Phân phối theo lao động và hiệu quả kinh tế là chủ yếu, kết hợp phân phối qua phúc lợi xã hội.",
  },
  {
    id: "q10",
    tag: "5.1.3",
    type: "true-false",
    question:
      "Nhận định: 'Việt Nam chủ trương tăng trưởng kinh tế trước, sau đó mới giải quyết công bằng xã hội.' Nhận định này đúng hay sai?",
    options: [
      { id: "A", text: "Đúng" },
      { id: "B", text: "Sai" },
      { id: "C", text: "Không đủ căn cứ" },
      { id: "D", text: "Chỉ đúng với giai đoạn trước 1986" },
    ],
    correctId: "B",
    explanation:
      "Sai. Đặc trưng thứ năm của mô hình là gắn tăng trưởng kinh tế với tiến bộ, công bằng xã hội NGAY TRONG TỪNG BƯỚC, không phải tăng trưởng trước - công bằng sau.",
  },

  // ---------- 5.2 Hoàn thiện thể chế ----------
  {
    id: "q11",
    tag: "5.2",
    type: "mcq",
    question: "Thể chế kinh tế thị trường định hướng XHCN được hiểu là:",
    options: [
      { id: "A", text: "Chỉ riêng hệ thống pháp luật kinh tế" },
      { id: "B", text: "Toàn bộ đường lối, chủ trương, pháp luật, quy tắc điều chỉnh hoạt động kinh tế" },
      { id: "C", text: "Chỉ các cơ quan quản lý nhà nước về kinh tế" },
      { id: "D", text: "Chỉ các doanh nghiệp nhà nước" },
    ],
    correctId: "B",
    explanation: "Thể chế kinh tế bao gồm cả quy tắc chính thức (pháp luật) lẫn phi chính thức điều chỉnh hoạt động kinh tế, không chỉ luật hay bộ máy quản lý đơn lẻ.",
  },
  {
    id: "q12",
    tag: "5.2",
    type: "mcq",
    question: "Đâu KHÔNG nằm trong 5 nội dung hoàn thiện thể chế KTTT định hướng XHCN theo giáo trình?",
    options: [
      { id: "A", text: "Hoàn thiện thể chế về sở hữu và các thành phần kinh tế" },
      { id: "B", text: "Hoàn thiện thể chế phát triển đồng bộ các loại thị trường" },
      { id: "C", text: "Xóa bỏ hoàn toàn vai trò điều tiết của Nhà nước với thị trường" },
      { id: "D", text: "Nâng cao năng lực lãnh đạo của Đảng, hiệu lực quản lý Nhà nước" },
    ],
    correctId: "C",
    explanation: "Hoàn thiện thể chế không đồng nghĩa với xóa bỏ vai trò điều tiết của Nhà nước — đây là điểm gây nhiễu điển hình cần cảnh giác.",
  },
  {
    id: "q13",
    tag: "5.2",
    type: "mcq",
    question: "Thị trường nào sau đây được xem là 'thị trường yếu tố sản xuất' cần hoàn thiện thể chế theo mục 5.2?",
    options: [
      { id: "A", text: "Thị trường hàng tiêu dùng nhanh (FMCG)" },
      { id: "B", text: "Thị trường lao động, đất đai, vốn, khoa học – công nghệ" },
      { id: "C", text: "Thị trường du lịch nội địa" },
      { id: "D", text: "Thị trường giải trí trực tuyến" },
    ],
    correctId: "B",
    explanation: "Các yếu tố sản xuất cốt lõi cần thể chế đồng bộ gồm: lao động, đất đai, vốn (tài chính), khoa học công nghệ, bất động sản.",
  },
  {
    id: "q14",
    tag: "5.2",
    type: "mcq",
    question: "Việc ký kết các FTA thế hệ mới (CPTPP, EVFTA...) thuộc nội dung hoàn thiện thể chế nào?",
    options: [
      { id: "A", text: "Thể chế về sở hữu" },
      { id: "B", text: "Thể chế phát triển đồng bộ các loại thị trường trong nước" },
      { id: "C", text: "Thể chế thúc đẩy hội nhập kinh tế quốc tế" },
      { id: "D", text: "Thể chế phân phối thu nhập" },
    ],
    correctId: "C",
    explanation: "Đàm phán, ký kết các hiệp định thương mại tự do thuộc nội dung hoàn thiện thể chế hội nhập kinh tế quốc tế.",
  },

  // ---------- 5.3.1 Lợi ích kinh tế ----------
  {
    id: "q15",
    tag: "5.3.1",
    type: "mcq",
    question: "Lợi ích kinh tế, xét về bản chất, phản ánh trước hết mối quan hệ nào?",
    options: [
      { id: "A", text: "Quan hệ chính trị giữa các quốc gia" },
      { id: "B", text: "Quan hệ sở hữu về tư liệu sản xuất" },
      { id: "C", text: "Quan hệ ngoại giao" },
      { id: "D", text: "Quan hệ văn hóa – xã hội" },
    ],
    correctId: "B",
    explanation: "Lợi ích kinh tế phản ánh quan hệ sản xuất, trước hết và chủ yếu là quan hệ sở hữu về tư liệu sản xuất.",
  },
  {
    id: "q16",
    tag: "5.3.1",
    type: "mcq",
    question: "Vai trò của lợi ích kinh tế đối với các chủ thể trong nền kinh tế là:",
    options: [
      { id: "A", text: "Chỉ có ý nghĩa về mặt lý luận, không tác động thực tế" },
      { id: "B", text: "Là động lực trực tiếp của các hoạt động kinh tế" },
      { id: "C", text: "Chỉ quan trọng với doanh nghiệp nhà nước" },
      { id: "D", text: "Không liên quan đến quyết định sản xuất - kinh doanh" },
    ],
    correctId: "B",
    explanation: "Lợi ích kinh tế là động lực trực tiếp thúc đẩy hành động của các chủ thể kinh tế.",
  },
  {
    id: "q17",
    tag: "5.3.1",
    type: "mcq",
    question: "Đâu KHÔNG phải là nhân tố ảnh hưởng đến quan hệ lợi ích kinh tế theo giáo trình?",
    options: [
      { id: "A", text: "Trình độ phát triển của lực lượng sản xuất" },
      { id: "B", text: "Địa vị của chủ thể trong hệ thống quan hệ sản xuất" },
      { id: "C", text: "Chính sách phân phối thu nhập của Nhà nước" },
      { id: "D", text: "Sở thích cá nhân của người đứng đầu doanh nghiệp" },
    ],
    correctId: "D",
    explanation:
      "Bốn nhân tố theo giáo trình: trình độ LLSX, địa vị trong QHSX, chính sách phân phối của Nhà nước, hội nhập kinh tế quốc tế — không phải yếu tố chủ quan cá nhân.",
  },
  {
    id: "q18",
    tag: "5.3.1",
    type: "mcq",
    question: "Quan hệ lợi ích giữa những người sử dụng lao động với nhau thường biểu hiện rõ nhất qua:",
    options: [
      { id: "A", text: "Cạnh tranh trên cùng một thị trường (giá cả, thị phần, nguồn lực)" },
      { id: "B", text: "Đình công đòi tăng lương" },
      { id: "C", text: "Thuế thu nhập cá nhân lũy tiến" },
      { id: "D", text: "Trợ cấp thất nghiệp" },
    ],
    correctId: "A",
    explanation:
      "Giữa những người sử dụng lao động (chủ doanh nghiệp) với nhau, quan hệ lợi ích thể hiện chủ yếu qua cạnh tranh giành thị phần, nguồn lực, khách hàng.",
  },

  // ---------- 5.3.2 Vai trò Nhà nước ----------
  {
    id: "q19",
    tag: "5.3.2",
    type: "mcq",
    question: "'Hài hòa lợi ích kinh tế' được hiểu là:",
    options: [
      { id: "A", text: "Triệt tiêu hoàn toàn mọi mâu thuẫn lợi ích" },
      { id: "B", text: "Sự thống nhất biện chứng: hạn chế mặt mâu thuẫn, khuyến khích mặt thống nhất" },
      { id: "C", text: "Chia đều lợi ích cho tất cả chủ thể kinh tế" },
      { id: "D", text: "Ưu tiên tuyệt đối lợi ích của Nhà nước" },
    ],
    correctId: "B",
    explanation: "Hài hòa không có nghĩa là xóa bỏ mâu thuẫn (điều không thể trong KTTT) mà là hạn chế mặt tiêu cực, phát huy mặt thống nhất.",
  },
  {
    id: "q20",
    tag: "5.3.2",
    type: "mcq",
    question: "Việc điều chỉnh thuế thu nhập cá nhân, lương tối thiểu, an sinh xã hội thể hiện vai trò nào của Nhà nước?",
    options: [
      { id: "A", text: "Bảo vệ lợi ích hợp pháp và tạo môi trường thuận lợi" },
      { id: "B", text: "Điều hòa lợi ích giữa cá nhân – doanh nghiệp – xã hội" },
      { id: "C", text: "Kiểm soát, ngăn ngừa quan hệ lợi ích tiêu cực" },
      { id: "D", text: "Giải quyết mâu thuẫn lợi ích kinh tế" },
    ],
    correctId: "B",
    explanation: "Đây là công cụ phân phối và phân phối lại thu nhập — thuộc vai trò 'điều hòa lợi ích cá nhân – doanh nghiệp – xã hội'.",
  },
  {
    id: "q21",
    tag: "5.3.2",
    type: "mcq",
    question: "Phòng, chống tham nhũng, lãng phí trong nền kinh tế thuộc vai trò nào của Nhà nước trong bảo đảm hài hòa lợi ích?",
    options: [
      { id: "A", text: "Bảo vệ lợi ích hợp pháp, tạo môi trường thuận lợi" },
      { id: "B", text: "Điều hòa lợi ích qua chính sách phân phối" },
      { id: "C", text: "Kiểm soát, ngăn ngừa các quan hệ lợi ích tiêu cực" },
      { id: "D", text: "Giải quyết mâu thuẫn lợi ích kinh tế" },
    ],
    correctId: "C",
    explanation: "Phòng chống tham nhũng, lãng phí, kiểm soát thu nhập bất hợp pháp nằm trong nhóm vai trò 'kiểm soát, ngăn ngừa quan hệ lợi ích tiêu cực'.",
  },
  {
    id: "q22",
    tag: "5.3.2",
    type: "mcq",
    question: "Đối thoại ba bên (Nhà nước – công đoàn – doanh nghiệp) để hòa giải tranh chấp lao động thể hiện vai trò nào của Nhà nước?",
    options: [
      { id: "A", text: "Bảo vệ lợi ích hợp pháp, tạo môi trường thuận lợi" },
      { id: "B", text: "Kiểm soát, ngăn ngừa quan hệ lợi ích tiêu cực" },
      { id: "C", text: "Giải quyết mâu thuẫn trong quan hệ lợi ích kinh tế" },
      { id: "D", text: "Không thuộc vai trò nào trong 4 vai trò đã học" },
    ],
    correctId: "C",
    explanation: "Đây là công cụ giải quyết mâu thuẫn lợi ích bằng đối thoại, hòa giải — thuộc vai trò thứ tư của Nhà nước theo mục 5.3.2.",
  },

  // ---------- Câu tổng hợp / vận dụng ----------
  {
    id: "q23",
    tag: "5.1.3",
    type: "mcq",
    question:
      "Một tỉnh quyết định giữ độc quyền cấp nước sạch cho doanh nghiệp nhà nước dù hoạt động kém hiệu quả, với lý do 'an ninh nguồn nước'. Quyết định này có xu hướng lệch về phía nào?",
    options: [
      { id: "A", text: "Lệch về thị trường tự do thuần túy" },
      { id: "B", text: "Lệch về quản lý hành chính, thiếu tôn trọng quy luật cạnh tranh" },
      { id: "C", text: "Đúng chuẩn đặc trưng quản lý kinh tế của mô hình" },
      { id: "D", text: "Thể hiện đặc trưng phân phối" },
    ],
    correctId: "B",
    explanation:
      "Giữ độc quyền vô điều kiện, bất chấp hiệu quả, là biểu hiện của quản lý bằng mệnh lệnh hành chính — không tôn trọng đầy đủ quy luật cạnh tranh của thị trường.",
  },
  {
    id: "q24",
    tag: "5.3.2",
    type: "mcq",
    question:
      "Chính sách nào sau đây thể hiện RÕ NHẤT việc gắn tăng trưởng kinh tế với công bằng xã hội ngay trong từng bước phát triển?",
    options: [
      { id: "A", text: "Giảm thuế doanh nghiệp toàn diện, không kèm điều kiện" },
      { id: "B", text: "Đầu tư hạ tầng y tế – giáo dục vùng khó khăn song song với thu hút đầu tư" },
      { id: "C", text: "Tăng trưởng tối đa trước, xử lý phúc lợi xã hội sau 10 năm" },
      { id: "D", text: "Bỏ toàn bộ chính sách trợ giá, để thị trường tự điều chỉnh" },
    ],
    correctId: "B",
    explanation: "Đây là ví dụ điển hình của việc gắn tăng trưởng với công bằng ngay trong từng chính sách, đúng đặc trưng thứ năm của mục 5.1.3.",
  },
  {
    id: "q25",
    tag: "5.2",
    type: "mcq",
    question:
      "Cho phép chuyển nhượng đất nông nghiệp có hạn mức, kèm quỹ hỗ trợ chuyển đổi nghề cho nông dân mất đất — đây là ví dụ của việc hoàn thiện thể chế nào?",
    options: [
      { id: "A", text: "Thể chế hội nhập kinh tế quốc tế" },
      { id: "B", text: "Thể chế về sở hữu và phát triển thị trường yếu tố sản xuất (đất đai)" },
      { id: "C", text: "Thể chế phân phối thu nhập cá nhân" },
      { id: "D", text: "Thể chế nâng cao năng lực lãnh đạo của Đảng" },
    ],
    correctId: "B",
    explanation: "Đây là ví dụ hoàn thiện thể chế sở hữu đất đai, đồng thời phát triển thị trường yếu tố sản xuất (đất đai) có kiểm soát.",
  },

  // ---------- 25 Câu Bổ Sung Tự Động (q26 - q50) ----------
  {
    id: "q26",
    tag: "5.1.1",
    type: "cloze",
    question: "Kinh tế thị trường định hướng XHCN là nền kinh tế nhiều ...(1)..., nhiều hình thức ...(2)...",
    options: [
      { id: "A", text: "(1) thành phần — (2) phân phối" },
      { id: "B", text: "(1) thành phần — (2) sở hữu" },
      { id: "C", text: "(1) hình thức — (2) quản lý" },
      { id: "D", text: "(1) chế độ — (2) điều tiết" },
    ],
    correctId: "B",
    explanation: "Định nghĩa chuẩn quy định đây là nền kinh tế nhiều thành phần, nhiều hình thức sở hữu, trong đó kinh tế nhà nước giữ vai trò chủ đạo.",
  },
  {
    id: "q27",
    tag: "5.1.3",
    type: "mcq",
    question: "Đặc trưng nào thể hiện sự khác biệt lớn nhất giữa KTTT định hướng XHCN ở Việt Nam và KTTT tư bản chủ nghĩa?",
    options: [
      { id: "A", text: "Quy luật cung cầu và cạnh tranh tự do" },
      { id: "B", text: "Sự phân hóa giàu nghèo ngày càng sâu sắc" },
      { id: "C", text: "Mục tiêu phát triển dân giàu, nước mạnh, dân chủ, công bằng, văn minh" },
      { id: "D", text: "Sự bảo hộ tuyệt đối của Nhà nước đối với các doanh nghiệp" },
    ],
    correctId: "C",
    explanation: "Mục tiêu phát triển (dân giàu, nước mạnh, tiến lên CNXH) là điểm khác biệt căn bản nhất, định hình lại toàn bộ quá trình vận hành của nền kinh tế.",
  },
  {
    id: "q28",
    tag: "5.1.3",
    type: "mcq",
    question: "Thành phần kinh tế nào được Đảng ta xác định là 'một động lực quan trọng' của nền kinh tế quốc dân?",
    options: [
      { id: "A", text: "Kinh tế tập thể" },
      { id: "B", text: "Kinh tế tư nhân" },
      { id: "C", text: "Kinh tế có vốn đầu tư nước ngoài" },
      { id: "D", text: "Kinh tế nhà nước" },
    ],
    correctId: "B",
    explanation: "Từ Đại hội X, XI và đặc biệt là Nghị quyết Trung ương 5 khóa XII, Đảng đã khẳng định kinh tế tư nhân là một động lực quan trọng của nền kinh tế.",
  },
  {
    id: "q29",
    tag: "5.1.3",
    type: "mcq",
    question: "Kinh tế nhà nước cùng với thành phần kinh tế nào ngày càng trở thành nền tảng vững chắc của nền kinh tế quốc dân?",
    options: [
      { id: "A", text: "Kinh tế tư nhân" },
      { id: "B", text: "Kinh tế tập thể" },
      { id: "C", text: "Kinh tế có vốn đầu tư nước ngoài" },
      { id: "D", text: "Kinh tế hộ gia đình" },
    ],
    correctId: "B",
    explanation: "Theo giáo trình, kinh tế nhà nước giữ vai trò chủ đạo, cùng với kinh tế tập thể tạo thành nền tảng vững chắc của nền KTTT định hướng XHCN.",
  },
  {
    id: "q30",
    tag: "5.1.3",
    type: "mcq",
    question: "Sự lãnh đạo của Đảng Cộng sản Việt Nam đối với nền kinh tế thị trường được thể hiện chủ yếu qua hình thức nào?",
    options: [
      { id: "A", text: "Can thiệp trực tiếp vào hoạt động sản xuất của các doanh nghiệp tư nhân" },
      { id: "B", text: "Hoạch định đường lối, chủ trương, chiến lược phát triển kinh tế - xã hội" },
      { id: "C", text: "Chỉ đạo ấn định mức giá trần và giá sàn cho mọi mặt hàng" },
      { id: "D", text: "Trực tiếp điều hành ngân sách quốc gia thay cho Chính phủ" },
    ],
    correctId: "B",
    explanation: "Đảng lãnh đạo nền kinh tế thông qua việc vạch ra Cương lĩnh, đường lối chiến lược, còn Nhà nước thực hiện quản lý, điều hành cụ thể bằng pháp luật.",
  },
  {
    id: "q31",
    tag: "5.2",
    type: "mcq",
    question: "Lý do chủ yếu nhất đòi hỏi Việt Nam phải tiếp tục hoàn thiện thể chế KTTT định hướng XHCN là gì?",
    options: [
      { id: "A", text: "Để chuyển hẳn sang nền kinh tế kế hoạch hóa tập trung" },
      { id: "B", text: "Thể chế hiện tại còn nhiều bất cập, thiếu đồng bộ và chưa theo kịp thực tiễn hội nhập" },
      { id: "C", text: "Do yêu cầu bắt buộc khi gia nhập ASEAN" },
      { id: "D", text: "Để thay thế hoàn toàn vai trò của thị trường bằng vai trò của Nhà nước" },
    ],
    correctId: "B",
    explanation: "Thực tiễn cho thấy thể chế KTTT ở nước ta còn nhiều bất cập, các loại thị trường phát triển chưa đồng bộ, cản trở sự phát triển của LLSX.",
  },
  {
    id: "q32",
    tag: "5.2",
    type: "mcq",
    question: "Giải pháp quan trọng hàng đầu để hoàn thiện thể chế về sở hữu là gì?",
    options: [
      { id: "A", text: "Thể chế hóa đầy đủ quyền tài sản (quyền sở hữu, quyền sử dụng, quyền định đoạt)" },
      { id: "B", text: "Quốc hữu hóa toàn bộ các doanh nghiệp có quy mô lớn" },
      { id: "C", text: "Chỉ công nhận duy nhất hình thức sở hữu toàn dân" },
      { id: "D", text: "Bãi bỏ hoàn toàn sự kiểm soát của Nhà nước đối với tài nguyên" },
    ],
    correctId: "A",
    explanation: "Việc thể chế hóa, bảo vệ quyền tài sản hợp pháp của mọi chủ thể là điều kiện tiên quyết để khuyến khích đầu tư và phát triển thị trường.",
  },
  {
    id: "q33",
    tag: "5.2",
    type: "mcq",
    question: "Phát triển đồng bộ các loại thị trường bao gồm việc ưu tiên xây dựng các thị trường nào?",
    options: [
      { id: "A", text: "Chỉ tập trung vào thị trường hàng hóa tiêu dùng" },
      { id: "B", text: "Thị trường chứng khoán, bất động sản, khoa học - công nghệ và lao động" },
      { id: "C", text: "Thị trường độc quyền nhà nước" },
      { id: "D", text: "Thị trường chợ đen để tự do hóa tối đa" },
    ],
    correctId: "B",
    explanation: "Để KTTT vận hành trơn tru, cần phát triển đồng bộ các 'thị trường yếu tố sản xuất' (vốn, lao động, BĐS, khoa học công nghệ) bên cạnh thị trường hàng hóa thông thường.",
  },
  {
    id: "q34",
    tag: "5.2",
    type: "mcq",
    question: "Trong quá trình hoàn thiện thể chế, việc nâng cao năng lực lãnh đạo của Đảng và hiệu lực quản lý của Nhà nước cần gắn liền với:",
    options: [
      { id: "A", text: "Thu hẹp quyền tự do kinh doanh của người dân" },
      { id: "B", text: "Phát huy quyền làm chủ của nhân dân và vai trò của Mặt trận Tổ quốc" },
      { id: "C", text: "Tăng cường bao cấp cho mọi doanh nghiệp" },
      { id: "D", text: "Đóng cửa nền kinh tế để bảo vệ sản xuất trong nước" },
    ],
    correctId: "B",
    explanation: "Sự giám sát của nhân dân và các tổ chức đoàn thể xã hội là cơ chế quan trọng để đảm bảo Đảng và Nhà nước hoạt động hiệu lực, hiệu quả, chống tham nhũng.",
  },
  {
    id: "q35",
    tag: "5.3.1",
    type: "mcq",
    question: "Trong hệ thống các lợi ích kinh tế, loại lợi ích nào đóng vai trò là cơ sở, nền tảng cho sự tồn tại và phát triển của các lợi ích khác?",
    options: [
      { id: "A", text: "Lợi ích tập thể" },
      { id: "B", text: "Lợi ích quốc gia, dân tộc" },
      { id: "C", text: "Lợi ích cá nhân" },
      { id: "D", text: "Lợi ích nhóm" },
    ],
    correctId: "C",
    explanation: "Lợi ích cá nhân là cơ sở, nền tảng. Khi lợi ích cá nhân chính đáng được thỏa mãn sẽ tạo động lực mạnh mẽ thúc đẩy họ cống hiến cho tập thể và xã hội.",
  },
  {
    id: "q36",
    tag: "5.3.1",
    type: "mcq",
    question: "Mâu thuẫn cơ bản về lợi ích kinh tế giữa người sử dụng lao động và người lao động xuất phát từ đâu?",
    options: [
      { id: "A", text: "Từ sở thích và tính cách cá nhân khác nhau" },
      { id: "B", text: "Từ tỷ lệ phân chia phần giá trị mới sáng tạo ra (giữa tiền lương và lợi nhuận)" },
      { id: "C", text: "Từ sự khác biệt về văn hóa vùng miền" },
      { id: "D", text: "Từ yêu cầu của các hiệp định thương mại quốc tế" },
    ],
    correctId: "B",
    explanation: "Tuy thống nhất cùng cần doanh nghiệp tồn tại, nhưng họ mâu thuẫn trong việc phân chia chiếc bánh doanh thu: lương tăng thì lợi nhuận giảm và ngược lại.",
  },
  {
    id: "q37",
    tag: "5.3.1",
    type: "true-false",
    question: "Nhận định: 'Lợi ích nhóm luôn luôn mang tính tiêu cực và cần phải bị loại bỏ trong nền kinh tế thị trường định hướng XHCN.' Nhận định này đúng hay sai?",
    options: [
      { id: "A", text: "Đúng" },
      { id: "B", text: "Sai" },
    ],
    correctId: "B",
    explanation: "Sai. Lợi ích nhóm có thể tích cực (nếu phù hợp với lợi ích chung của XH). Chỉ khi lợi ích nhóm đi ngược lại lợi ích xã hội (nhóm lợi ích tiêu cực, sân sau) mới cần loại bỏ.",
  },
  {
    id: "q38",
    tag: "5.3.2",
    type: "mcq",
    question: "Để thực hiện vai trò bảo vệ lợi ích hợp pháp của các chủ thể kinh tế, Nhà nước cần làm gì trước tiên?",
    options: [
      { id: "A", text: "Can thiệp ấn định giá cả tất cả các mặt hàng thiết yếu" },
      { id: "B", text: "Xây dựng và hoàn thiện hệ thống pháp luật, tạo hành lang pháp lý an toàn" },
      { id: "C", text: "Trực tiếp đàm phán hợp đồng thương mại cho các doanh nghiệp" },
      { id: "D", text: "Cấm các doanh nghiệp nước ngoài cạnh tranh với doanh nghiệp nội" },
    ],
    correctId: "B",
    explanation: "Pháp luật là công cụ quan trọng nhất. Tạo ra hành lang pháp lý minh bạch là cách Nhà nước bảo vệ lợi ích hợp pháp hiệu quả nhất.",
  },
  {
    id: "q39",
    tag: "5.3.2",
    type: "mcq",
    question: "Khi có mâu thuẫn lợi ích kinh tế gay gắt xảy ra, nguyên tắc tối cao trong giải quyết của Nhà nước ta là gì?",
    options: [
      { id: "A", text: "Bảo vệ lợi ích của người giàu để họ tiếp tục đầu tư" },
      { id: "B", text: "Bảo vệ lợi ích cá nhân bằng mọi giá" },
      { id: "C", text: "Đặt lợi ích quốc gia, dân tộc lên trên hết" },
      { id: "D", text: "Ưu tiên hoàn toàn lợi ích của nhà đầu tư nước ngoài (FDI)" },
    ],
    correctId: "C",
    explanation: "Lợi ích quốc gia, dân tộc là mục tiêu tối thượng. Mọi mâu thuẫn lợi ích cá nhân, tập thể đều phải được giải quyết dựa trên nền tảng không làm tổn hại đến lợi ích quốc gia.",
  },
  {
    id: "q40",
    tag: "5.3.2",
    type: "mcq",
    question: "Công cụ sắc bén nhất của Nhà nước để điều tiết và phân phối lại thu nhập, nhằm giảm thiểu bất bình đẳng là:",
    options: [
      { id: "A", text: "Quy định về đạo đức kinh doanh" },
      { id: "B", text: "Hệ thống thuế (đặc biệt là thuế thu nhập cá nhân lũy tiến) và an sinh xã hội" },
      { id: "C", text: "Kêu gọi lòng hảo tâm của các tỷ phú" },
      { id: "D", text: "Chính sách nới lỏng tiền tệ của Ngân hàng Trung ương" },
    ],
    correctId: "B",
    explanation: "Thuế lũy tiến và các quỹ phúc lợi/an sinh xã hội là công cụ kinh tế mạnh mẽ nhất để Nhà nước lấy từ nơi thu nhập rất cao bù đắp cho những đối tượng yếu thế.",
  },
  {
    id: "q41",
    tag: "5.1.3",
    type: "true-false",
    question: "Nhận định: 'Trong KTTT định hướng XHCN, kinh tế tư nhân bị giới hạn quy mô phát triển để không lấn át kinh tế nhà nước.' Đúng hay sai?",
    options: [
      { id: "A", text: "Đúng" },
      { id: "B", text: "Sai" },
    ],
    correctId: "B",
    explanation: "Sai. Kinh tế tư nhân được khuyến khích phát triển không giới hạn về quy mô trong tất cả các ngành nghề, lĩnh vực mà pháp luật không cấm.",
  },
  {
    id: "q42",
    tag: "5.2",
    type: "true-false",
    question: "Nhận định: 'Nguyên tắc của KTTT định hướng XHCN là chỉ ưu tiên nguồn vốn tín dụng nhà nước cho các tập đoàn, tổng công ty Nhà nước.' Đúng hay sai?",
    options: [
      { id: "A", text: "Đúng" },
      { id: "B", text: "Sai" },
    ],
    correctId: "B",
    explanation: "Sai. Yêu cầu của hoàn thiện thể chế KTTT là đảm bảo sự bình đẳng trong tiếp cận các nguồn lực (vốn, đất đai...) giữa mọi thành phần kinh tế.",
  },
  {
    id: "q43",
    tag: "5.3.1",
    type: "cloze",
    question: "Sự ...(1)... về lợi ích kinh tế là nguyên nhân chính, sâu xa dẫn đến các ...(2)... xã hội, do đó cần có vai trò điều hòa của Nhà nước.",
    options: [
      { id: "A", text: "(1) tương đồng — (2) phát triển" },
      { id: "B", text: "(1) mâu thuẫn/xung đột — (2) tranh chấp/bất ổn" },
      { id: "C", text: "(1) phụ thuộc — (2) liên minh" },
      { id: "D", text: "(1) chia sẻ — (2) khủng hoảng" },
    ],
    correctId: "B",
    explanation: "Lợi ích kinh tế vừa có tính thống nhất, vừa có tính mâu thuẫn. Khi mâu thuẫn trở nên gay gắt không được giải quyết sẽ dẫn đến đình công, khiếu kiện, bất ổn xã hội.",
  },
  {
    id: "q44",
    tag: "5.1.2",
    type: "mcq",
    question: "Sự tồn tại khách quan của nhiều thành phần kinh tế ở nước ta trong thời kỳ quá độ chủ yếu bắt nguồn từ nguyên nhân nào?",
    options: [
      { id: "A", text: "Sự tồn tại của nhiều hình thức sở hữu tư liệu sản xuất khác nhau" },
      { id: "B", text: "Do tác động của toàn cầu hóa văn hóa" },
      { id: "C", text: "Do chủ trương tạm thời của Đảng để thu hút FDI" },
      { id: "D", text: "Do tàn dư của cơ chế bao cấp để lại" },
    ],
    correctId: "A",
    explanation: "Nhiều hình thức sở hữu về tư liệu sản xuất (nhà nước, tập thể, tư nhân, hỗn hợp) là cơ sở hình thành nên nền kinh tế có nhiều thành phần kinh tế.",
  },
  {
    id: "q45",
    tag: "5.2",
    type: "mcq",
    question: "Trong định hướng hội nhập kinh tế quốc tế, Việt Nam thực hiện phương châm nào?",
    options: [
      { id: "A", text: "Chỉ hợp tác với các nước có cùng thể chế chính trị" },
      { id: "B", text: "Đa phương hóa, đa dạng hóa các quan hệ kinh tế quốc tế" },
      { id: "C", text: "Đóng cửa đối với các nhà đầu tư ngoài khu vực ASEAN" },
      { id: "D", text: "Chỉ tập trung xuất khẩu, hạn chế tối đa nhập khẩu" },
    ],
    correctId: "B",
    explanation: "Việt Nam chủ trương làm bạn, đối tác tin cậy của cộng đồng quốc tế, thực hiện đa phương hóa, đa dạng hóa nhằm tận dụng tối đa lợi thế so sánh.",
  },
  {
    id: "q46",
    tag: "5.1.3",
    type: "mcq",
    question: "Việc thừa nhận và thực hiện nhiều hình thức phân phối trong nền KTTT định hướng XHCN nhằm mục đích chính là gì?",
    options: [
      { id: "A", text: "Để xóa bỏ hoàn toàn khoảng cách giàu nghèo" },
      { id: "B", text: "Tạo động lực mạnh mẽ kích thích các chủ thể hăng say sản xuất, kinh doanh" },
      { id: "C", text: "Bảo đảm mọi người dân đều có thu nhập ngang bằng nhau" },
      { id: "D", text: "Phục vụ việc phân phối theo nhu cầu như giai đoạn xã hội cộng sản" },
    ],
    correctId: "B",
    explanation: "Đa dạng hóa hình thức phân phối (theo lao động, theo vốn...) nhằm triệt để tạo động lực kinh tế, khắc phục tình trạng cào bằng, ỷ lại của thời kỳ bao cấp.",
  },
  {
    id: "q47",
    tag: "5.3.2",
    type: "mcq",
    question: "Một doanh nghiệp cố tình xả nước thải chưa qua xử lý ra môi trường để tiết kiệm chi phí, tối đa hóa lợi nhuận. Đây là biểu hiện của:",
    options: [
      { id: "A", text: "Sự thống nhất lợi ích giữa doanh nghiệp và người dân khu vực xung quanh" },
      { id: "B", text: "Mâu thuẫn giữa lợi ích cá nhân (doanh nghiệp) và lợi ích xã hội (môi trường sống chung)" },
      { id: "C", text: "Tính tất yếu của cạnh tranh lành mạnh" },
      { id: "D", text: "Sự hài hòa lợi ích do cơ chế thị trường tự mang lại" },
    ],
    correctId: "B",
    explanation: "Vì chạy theo lợi ích cục bộ (lợi nhuận), doanh nghiệp đã xâm phạm nghiêm trọng đến lợi ích cộng đồng, gây ra xung đột lợi ích cá nhân - xã hội.",
  },
  {
    id: "q48",
    tag: "5.3.2",
    type: "mcq",
    question: "Đối với hành vi vi phạm môi trường của doanh nghiệp trên, Nhà nước cần thể hiện vai trò nào?",
    options: [
      { id: "A", text: "Bảo vệ lợi ích doanh nghiệp vì họ tạo ra việc làm" },
      { id: "B", text: "Để cho người dân tự thỏa thuận bồi thường với doanh nghiệp" },
      { id: "C", text: "Kiểm soát, ngăn ngừa lợi ích tiêu cực bằng cách xử phạt nghiêm minh theo pháp luật" },
      { id: "D", text: "Dùng ngân sách nhà nước để xây trạm xử lý thải giúp doanh nghiệp" },
    ],
    correctId: "C",
    explanation: "Đây là lúc Nhà nước phải sử dụng sức mạnh cưỡng chế (pháp luật) để trừng phạt hành vi trục lợi gây hậu quả xấu cho xã hội, ngăn chặn lợi ích tiêu cực.",
  },
  {
    id: "q49",
    tag: "5.1.1",
    type: "mcq",
    question: "Đặc trưng cốt lõi nào làm cho mô hình KTTT ở Việt Nam mang tính 'đặc thù' so với các mô hình KTTT khác trên thế giới?",
    options: [
      { id: "A", text: "Sử dụng đồng tiền chung với các nước trong khu vực" },
      { id: "B", text: "Chỉ phát triển nông nghiệp làm trọng tâm" },
      { id: "C", text: "Có sự lãnh đạo của Đảng Cộng sản Việt Nam và hướng tới mục tiêu xây dựng CNXH" },
      { id: "D", text: "Hoàn toàn không có sự tham gia của các doanh nghiệp tư nhân" },
    ],
    correctId: "C",
    explanation: "Tính 'định hướng XHCN' và sự lãnh đạo của Đảng Cộng sản là nét đặc thù xuyên suốt tạo nên sự khác biệt về chất của mô hình KTTT tại Việt Nam.",
  },
  {
    id: "q50",
    tag: "5.2",
    type: "mcq",
    question: "Ví dụ nào sau đây KHÔNG phản ánh nội dung hoàn thiện thể chế gắn tăng trưởng kinh tế với tiến bộ, công bằng xã hội?",
    options: [
      { id: "A", text: "Nhà nước hỗ trợ vốn vay ưu đãi cho phụ nữ khởi nghiệp ở vùng sâu vùng xa" },
      { id: "B", text: "Bảo hiểm y tế toàn dân được triển khai sâu rộng" },
      { id: "C", text: "Thúc đẩy cổ phần hóa doanh nghiệp nhà nước bằng mọi giá để thu hồi vốn" },
      { id: "D", text: "Chương trình mục tiêu quốc gia giảm nghèo bền vững" },
    ],
    correctId: "C",
    explanation: "Cổ phần hóa bằng mọi giá liên quan đến việc sắp xếp lại thể chế sở hữu và quản lý DNNN, không trực tiếp phản ánh nội dung giải quyết công bằng xã hội (nếu làm sai còn có thể gây bất công).",
  },
];

// Tiện ích: lọc câu hỏi theo mục, dùng cho chế độ "Ôn tập theo chương"
export function getQuizByTag(tag: string): QuizQuestion[] {
  return quizBank.filter((q) => q.tag === tag || q.tag.startsWith(tag + "."));
}

// Tiện ích: lấy ngẫu nhiên N câu, dùng cho chế độ "Kiểm tra nhanh"
export function getRandomQuiz(count: number): QuizQuestion[] {
  const shuffled = [...quizBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
