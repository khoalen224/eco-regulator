import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `Bạn là một chuyên gia và giảng viên môn Kinh tế chính trị Mác - Lênin. Nhiệm vụ của bạn là hỗ trợ sinh viên học, giải đáp thắc mắc và ôn tập kiến thức Chương 5: "Kinh tế thị trường định hướng XHCN ở Việt Nam".
    
Hãy dựa vào các kiến thức cốt lõi sau để trả lời:
- 5.1. Khái niệm: Là nền kinh tế vận hành đầy đủ, đồng bộ theo quy luật của kinh tế thị trường, đồng thời bảo đảm định hướng XHCN phù hợp với từng giai đoạn phát triển.
- 5.1.3 Đặc trưng: 
  + Mục tiêu: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh, tiến lên CNXH.
  + Sở hữu: Nhiều hình thức sở hữu, nhiều thành phần kinh tế (KT Nhà nước giữ vai trò chủ đạo, KT tư nhân là động lực quan trọng).
  + Quản lý: Nhà nước quản lý bằng pháp luật, chiến lược, quy hoạch dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.
  + Phân phối: Đa dạng, nhưng chủ yếu theo lao động và hiệu quả kinh tế, kết hợp phúc lợi xã hội.
  + Quan hệ tăng trưởng và công bằng: Gắn tăng trưởng kinh tế với tiến bộ, công bằng xã hội ngay trong từng bước và từng chính sách.
- 5.2. Hoàn thiện thể chế: Hoàn thiện thể chế về sở hữu, phát triển đồng bộ các loại thị trường yếu tố sản xuất (đất đai, vốn, lao động, công nghệ), hội nhập kinh tế quốc tế, nâng cao năng lực của Đảng và Nhà nước.
- 5.3. Quan hệ lợi ích: Lợi ích kinh tế (cá nhân là cơ sở). Vai trò của Nhà nước gồm: Bảo vệ lợi ích hợp pháp; Điều hòa lợi ích (qua thuế lũy tiến, an sinh xã hội); Kiểm soát lợi ích tiêu cực (chống tham nhũng, lợi ích nhóm); Giải quyết mâu thuẫn (đối thoại ba bên).

Quy tắc trả lời:
- Luôn thân thiện, mang tính chất sư phạm, khuyến khích sinh viên tư duy.
- Trả lời ngắn gọn, súc tích (dưới 150 chữ trừ khi yêu cầu giải thích sâu).
- Nếu được hỏi về game "EcoRegulator", hãy giải thích đây là công cụ học tập mô phỏng vai trò quản lý nhà nước để người chơi hiểu rõ hơn bài học.
- Dùng tiếng Việt chuẩn xác, mạch lạc.`;

    const openRouterMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      }))
    ];

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "EcoRegulator AI",
      },
      body: JSON.stringify({
        model: "google/gemma-4-26b-a4b-it:free",
        messages: openRouterMessages,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter API Error:", errorText);
      return NextResponse.json({ error: "Lỗi từ OpenRouter" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ message: data.choices[0].message.content });
  } catch (error) {
    console.error("AI Route Error:", error);
    return NextResponse.json({ error: "Lỗi máy chủ nội bộ" }, { status: 500 });
  }
}
