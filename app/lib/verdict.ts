import type { Alignment } from "../data/scenarios-extended";

export interface Stats {
  growth: number;
  equity: number;
  budget: number;
}

export interface DecisionLogEntry {
  scenarioCategory: string;
  tag: string;
  choiceText: string;
  alignment: Alignment;
}

export interface Verdict {
  title: string;
  summary: string;
  breakdown: { label: string; percent: number }[];
  strengths: string[];
  gaps: string[];
  explanationText: string;
}

function clamp(n: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, n));
}

function countAlignment(log: DecisionLogEntry[]) {
  const total = log.length || 1;
  const counts = { "thi-truong": 0, "can-thiep": 0, "can-bang": 0 };
  log.forEach((l) => counts[l.alignment]++);
  return {
    thiTruongPct: Math.round((counts["thi-truong"] / total) * 100),
    canThiepPct: Math.round((counts["can-thiep"] / total) * 100),
    canBangPct: Math.round((counts["can-bang"] / total) * 100),
  };
}

export function computeVerdict(rawStats: Stats, log: DecisionLogEntry[]): Verdict {
  const stats: Stats = {
    growth: clamp(rawStats.growth),
    equity: clamp(rawStats.equity),
    budget: clamp(rawStats.budget),
  };
  const { thiTruongPct, canThiepPct, canBangPct } = countAlignment(log);

  const breakdown = [
    { label: "Thiên hướng thị trường tự do", percent: thiTruongPct },
    { label: "Thiên hướng can thiệp/bao cấp", percent: canThiepPct },
    { label: "Cân bằng định hướng XHCN", percent: canBangPct },
  ];

  let title: string;
  let summary: string;
  const strengths: string[] = [];
  const gaps: string[] = [];

  if (stats.budget < 20) {
    title = "Nhà quản lý khủng hoảng ngân sách";
    summary =
      "Ngân sách quốc gia gần cạn kiệt vì các quyết định chi tiêu/can thiệp vượt quá khả năng chi trả. Trong thực tế, đây là kịch bản dẫn tới mất ổn định kinh tế vĩ mô.";
    gaps.push(
      "Chưa cân đối giữa mục tiêu xã hội và kỷ luật tài khóa — KTTT định hướng XHCN vẫn phải vận hành theo quy luật giá trị, không thể duy trì chi tiêu vượt khả năng ngân sách dài hạn."
    );
  } else if (stats.equity < 30 && stats.growth > 65) {
    title = "Người theo chủ nghĩa thị trường tự do";
    summary =
      "Bạn ưu tiên gần như tuyệt đối cho tăng trưởng và hiệu quả thị trường, để công bằng xã hội giảm sâu.";
    strengths.push("Tạo được tốc độ tăng trưởng kinh tế ấn tượng, thu hút đầu tư tốt.");
    gaps.push(
      "Vi phạm đặc trưng về mục tiêu và quan hệ tăng trưởng – công bằng xã hội (mục 5.1.3): KTTT định hướng XHCN yêu cầu gắn tăng trưởng với tiến bộ, công bằng xã hội ngay trong từng bước phát triển."
    );
  } else if (stats.growth < 30 && stats.equity > 65) {
    title = "Nhà quản lý thiên về bao cấp";
    summary =
      "Bạn ưu tiên gần như tuyệt đối cho công bằng và an sinh xã hội, can thiệp hành chính sâu vào thị trường.";
    strengths.push("Bảo vệ tốt các nhóm yếu thế, giữ ổn định xã hội.");
    gaps.push(
      "Có xu hướng lặp lại hạn chế của cơ chế kế hoạch hóa tập trung trước Đổi mới: can thiệp hành chính quá mức, không tôn trọng quy luật giá trị và cạnh tranh."
    );
  } else if (
    canBangPct >= 50 &&
    stats.growth >= 40 &&
    stats.equity >= 40 &&
    stats.budget >= 30
  ) {
    title = "Nhà cải cách cân bằng";
    summary =
      "Phần lớn quyết định của bạn kết hợp quy luật thị trường với vai trò điều tiết của Nhà nước, giữ cân đối giữa tăng trưởng, công bằng xã hội và ngân sách.";
    strengths.push(
      "Bám sát bản chất KTTT định hướng XHCN: vận hành theo quy luật thị trường, đồng thời có sự điều tiết của Nhà nước hướng tới mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
    );
  } else {
    title = "Nhà quản lý thực dụng";
    summary =
      "Các quyết định của bạn khá phân tán giữa ba xu hướng, chưa hình thành một triết lý quản lý nhất quán.";
    gaps.push(
      "Nên đối chiếu với đặc trưng trong mục 5.1.3 để hiểu vì sao phương án cân bằng thường sát định hướng XHCN hơn."
    );
  }

  const explanationText = buildExplanationText(
    title, summary, stats, breakdown, strengths, gaps, log
  );

  return { title, summary, breakdown, strengths, gaps, explanationText };
}

function buildExplanationText(
  title: string,
  summary: string,
  stats: Stats,
  breakdown: { label: string; percent: number }[],
  strengths: string[],
  gaps: string[],
  log: DecisionLogEntry[]
): string {
  const tagList = Array.from(new Set(log.map((l) => l.tag))).join("; ");
  const lines = [
    `GIẢI TRÌNH KẾT QUẢ TRÒ CHƠI "ECOREGULATOR"`,
    ``,
    `Trường phái quản lý: ${title}`,
    `Chỉ số cuối: Tăng trưởng ${stats.growth}/100 — Công bằng xã hội ${stats.equity}/100 — Ngân sách ${stats.budget}/100.`,
    `Phân bố lựa chọn: ${breakdown.map((b) => `${b.label} ${b.percent}%`).join(", ")}.`,
    ``,
    summary,
  ];
  if (strengths.length)
    lines.push(``, `Điểm phù hợp:`, ...strengths.map((s) => `- ${s}`));
  if (gaps.length)
    lines.push(``, `Điểm cần rút kinh nghiệm:`, ...gaps.map((g) => `- ${g}`));
  lines.push(``, `Các mục kiến thức đã áp dụng: ${tagList}.`);
  return lines.join("\n");
}
