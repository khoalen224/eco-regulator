export interface ChoiceEffect {
  growth: number;
  equity: number;
  budget: number;
}

export interface Choice {
  text: string;
  effect: ChoiceEffect;
  feedback: string;
}

export interface Scenario {
  id: number;
  category: string;
  question: string;
  choices: Choice[];
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    category: "Mục tiêu & Sở hữu (Mục 5.1)",
    question:
      "Một tập đoàn tư nhân lớn đề xuất xây dựng chuỗi siêu thị bán lẻ độc quyền, cam kết đẩy mạnh GDP tăng trưởng nhanh nhưng yêu cầu Nhà nước thắt chặt các chính sách hỗ trợ Hợp tác xã (Kinh tế tập thể). Bạn quyết định thế nào?",
    choices: [
      {
        text: "A. Đồng ý hoàn toàn để tối đa hóa hiệu quả thị trường tự do.",
        effect: { growth: 15, equity: -15, budget: 5 },
        feedback:
          "Kinh tế tăng trưởng mạnh nhờ tư nhân nhưng vi phạm nguyên tắc 'Kinh tế Nhà nước cùng kinh tế Tập thể làm nền tảng vững chắc'.",
      },
      {
        text: "B. Bác bỏ đề xuất để bảo vệ tuyệt đối các Hợp tác xã truyền thống.",
        effect: { growth: -10, equity: 10, budget: -5 },
        feedback:
          "Giữ được công bằng nhưng kìm hãm động lực phát triển lực lượng sản xuất của khu vực tư nhân.",
      },
      {
        text: "C. Đồng ý cho đầu tư nhưng đi kèm điều kiện ràng buộc liên kết và bao tiêu sản phẩm cho các Hợp tác xã địa phương.",
        effect: { growth: 8, equity: 8, budget: 0 },
        feedback:
          "Tuyệt vời! Bạn đã kết hợp hài hòa giữa tăng trưởng kinh tế với tiến bộ và công bằng xã hội ngay trong chính sách.",
      },
    ],
  },
  {
    id: 2,
    category: "Hoàn thiện Thể chế (Mục 5.2)",
    question:
      "Thị trường bất động sản đang có dấu hiệu sốt ảo, đầu cơ tích trữ đất đai nghiêm trọng, gây khó khăn cho người nghèo mua nhà và làm nghẽn dòng vốn vào sản xuất. Giải pháp thể chế của bạn là gì?",
    choices: [
      {
        text: "A. Kê biên, tịch thu đất đai của các đối tượng đầu cơ bằng mệnh lệnh hành chính.",
        effect: { growth: -15, equity: 10, budget: -10 },
        feedback:
          "Hành động thô bạo làm tổn hại thể chế an toàn quyền sở hữu tài sản, khiến các nhà đầu tư hoang mang rút vốn.",
      },
      {
        text: "B. Hoàn thiện thể chế bằng cách công khai minh bạch thông tin quy hoạch và áp dụng thuế điều tiết lũy tiến với bất động sản thứ hai.",
        effect: { growth: 5, equity: 15, budget: 10 },
        feedback:
          "Chính xác! Hoàn thiện thể chế công khai, minh bạch giúp đồng bộ thị trường bất động sản phát triển lành mạnh.",
      },
      {
        text: "C. Để thị trường tự điều tiết hoàn toàn theo quy luật cung cầu khách quan.",
        effect: { growth: 5, equity: -20, budget: 0 },
        feedback:
          "Sốt đất tiếp tục tăng cao, khoảng cách giàu nghèo nới rộng, đẩy người lao động yếu thế vào thế kiệt quệ.",
      },
    ],
  },
  {
    id: 3,
    category: "Quan hệ Lợi ích Kinh tế (Mục 5.3)",
    question:
      "Tại một Khu công nghiệp lớn, mâu thuẫn lợi ích gay gắt nảy sinh: công nhân đình công đòi tăng lương và cải thiện an sinh, trong khi chủ doanh nghiệp dọa đóng cửa nhà máy vì chi phí tăng cao. Vai trò Nhà nước của bạn lúc này?",
    choices: [
      {
        text: "A. Dùng ngân sách nhà nước cấp bù lương trực tiếp cho toàn bộ công nhân.",
        effect: { growth: 0, equity: 15, budget: -25 },
        feedback:
          "Hành động này làm thâm hụt ngân sách quốc gia nghiêm trọng và không giải quyết được gốc rễ quan hệ phân phối.",
      },
      {
        text: "B. Đứng ra làm trọng tài, tổ chức đối thoại ba bên để tăng lương tối thiểu vùng hợp lý, đồng thời hỗ trợ doanh nghiệp giảm tiền thuê đất.",
        effect: { growth: 5, equity: 10, budget: -5 },
        feedback:
          "Quyết định sáng suốt! Bạn đã thực hiện tốt vai trò của Nhà nước trong việc bảo đảm hài hòa các quan hệ lợi ích kinh tế.",
      },
      {
        text: "C. Áp đặt mệnh lệnh bắt buộc công nhân trở lại làm việc để giữ chỉ số tăng trưởng sản xuất.",
        effect: { growth: 5, equity: -15, budget: 5 },
        feedback:
          "Lợi ích hợp pháp của người lao động bị tổn hại, mâu thuẫn giai cấp ngầm âm ỉ có nguy cơ gây bất ổn xã hội.",
      },
    ],
  },
];
