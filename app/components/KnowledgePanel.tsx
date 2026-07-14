"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  X,
  GraduationCap,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useReadProgress } from "../hooks/useReadProgress";
import { ReadableBlock } from "./ReadableBlock";
import { SectionProgress } from "./SectionProgress";
import { Flashcard } from "./Flashcard";

const KNOWLEDGE_SECTIONS = [
  {
    id: "5.1",
    title: "5.1 – Kinh tế thị trường định hướng XHCN",
    color: "text-blue-300",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/05",
    points: [
      {
        heading: "Khái niệm",
        text: "Nền kinh tế vận hành theo các quy luật thị trường, đồng thời hướng tới mục tiêu 'dân giàu, nước mạnh, dân chủ, công bằng, văn minh'; có sự điều tiết của Nhà nước do Đảng CSVN lãnh đạo.",
      },
      {
        heading: "Hai vế cốt lõi",
        text: "Vế 'thị trường': vận hành theo quy luật giá trị, cung–cầu, cạnh tranh. Vế 'định hướng XHCN': mục tiêu xã hội, vai trò lãnh đạo Đảng và điều tiết Nhà nước.",
      },
      {
        heading: "Đặc trưng về sở hữu",
        text: "Nhiều hình thức sở hữu, nhiều thành phần kinh tế bình đẳng trước pháp luật; kinh tế Nhà nước giữ vai trò chủ đạo, kinh tế Nhà nước cùng kinh tế Tập thể làm nền tảng vững chắc.",
      },
      {
        heading: "Quan hệ tăng trưởng – công bằng",
        text: "Gắn tăng trưởng kinh tế với tiến bộ và công bằng xã hội ngay trong từng bước, từng chính sách — không 'tăng trưởng trước, công bằng sau'.",
      },
      {
        heading: "Vì sao Việt Nam chọn mô hình này?",
        text: "Ba lý do: (1) phù hợp xu hướng phát triển khách quan của thế giới trong bối cảnh toàn cầu hóa; (2) tận dụng tính ưu việt của kinh tế thị trường để thúc đẩy lực lượng sản xuất phát triển nhanh; (3) đúng nguyện vọng của nhân dân — vừa tăng trưởng nhanh, vừa không đánh đổi định hướng XHCN.",
      },
      {
        heading: "Ví dụ: Từ bao cấp đến Đổi mới",
        text: "Trước 1986, Việt Nam vận hành theo cơ chế kế hoạch hóa tập trung, quan liêu, bao cấp — Nhà nước định giá, phân phối bằng tem phiếu, kinh tế trì trệ, thiếu hàng hóa triền miên. Đại hội VI (1986) khởi xướng Đổi mới, thừa nhận kinh tế nhiều thành phần và cơ chế thị trường. Đến Đại hội IX (2001), khái niệm 'kinh tế thị trường định hướng XHCN' mới chính thức được nêu ra. Đây là mốc để nhớ nếu đề thi hỏi về tính tất yếu lịch sử.",
      },
      {
        heading: "Đặc trưng về quản lý kinh tế",
        text: "Nhà nước quản lý nền kinh tế bằng pháp luật, chiến lược, quy hoạch, kế hoạch và các công cụ, chính sách kinh tế — dưới sự lãnh đạo của Đảng — nhưng vẫn tôn trọng các quy luật khách quan của thị trường, khác với quản lý bằng mệnh lệnh hành chính thuần túy của cơ chế bao cấp trước đây.",
      },
      {
        heading: "Ví dụ: Nhà nước quản lý xe công nghệ",
        text: "Khi Grab/Be xuất hiện, Nhà nước không cấm (kìm hãm thị trường) cũng không thả nổi hoàn toàn (bỏ mặc taxi truyền thống và quyền lợi tài xế). Nghị định 10/2020/NĐ-CP đưa xe công nghệ vào khung pháp lý riêng, vừa cho cạnh tranh vừa ràng buộc nghĩa vụ thuế, bảo hiểm cho tài xế — đúng tinh thần 'quản lý bằng pháp luật, tôn trọng quy luật thị trường'.",
      },
      {
        heading: "Đặc trưng về phân phối",
        text: "Thực hiện nhiều hình thức phân phối, trong đó phân phối theo kết quả lao động và hiệu quả kinh tế là chủ yếu, kết hợp phân phối theo mức đóng góp vốn/nguồn lực và phân phối qua phúc lợi xã hội — vừa tạo động lực sản xuất, vừa hạn chế phân hóa giàu nghèo quá mức.",
      },
      {
        heading: "Ví dụ: Lương tối thiểu vùng",
        text: "Lương tối thiểu vùng ở Việt Nam không áp dụng một mức chung cả nước mà chia theo 4 vùng (I–IV) dựa trên mức sống và năng suất từng khu vực, đồng thời điều chỉnh định kỳ theo lộ trình — vừa phân phối theo lao động/hiệu quả kinh tế thực tế của từng vùng, vừa có sự điều tiết của Nhà nước để bảo vệ người lao động thu nhập thấp.",
      },
    ],
  },
  {
    id: "5.2",
    title: "5.2 – Hoàn thiện thể chế kinh tế",
    color: "text-violet-300",
    borderColor: "border-violet-500/20",
    bgColor: "bg-violet-500/05",
    points: [
      {
        heading: "Thể chế là gì?",
        text: "Hệ thống đường lối, pháp luật, quy tắc chính thức và phi chính thức điều chỉnh hoạt động kinh tế.",
      },
      {
        heading: "Nội dung hoàn thiện chủ yếu",
        text: "① Thể chế về sở hữu & phát triển thành phần kinh tế. ② Phát triển đồng bộ các loại thị trường (hàng hóa, tài chính, lao động, BĐS, KHCN). ③ Gắn tăng trưởng với công bằng xã hội & môi trường. ④ Thúc đẩy hội nhập kinh tế quốc tế. ⑤ Nâng cao năng lực Đảng & hiệu lực Nhà nước.",
      },
      {
        heading: "Điều tiết thị trường BĐS",
        text: "Công khai thông tin quy hoạch, áp thuế lũy tiến với BĐS thứ hai — thay vì mệnh lệnh hành chính thô bạo hay để thị trường tự phát hoàn toàn.",
      },
      {
        heading: "Vì sao cần tiếp tục hoàn thiện?",
        text: "Hệ thống pháp luật, cơ chế chính sách còn thiếu đồng bộ; các thị trường yếu tố sản xuất (đất đai, vốn, lao động, khoa học – công nghệ) phát triển chưa đầy đủ, chưa hiện đại; hiệu lực quản lý nhà nước và kỷ luật thị trường còn hạn chế.",
      },
      {
        heading: "Ví dụ: Cổ phần hóa doanh nghiệp nhà nước",
        text: "Một doanh nghiệp nhà nước thua lỗ, công nghệ lạc hậu được cổ phần hóa cho nhà đầu tư tư nhân, nhưng kèm điều kiện giữ việc làm tối thiểu 2 năm và cam kết đổi mới công nghệ — vừa để thị trường quyết định hiệu quả, vừa bảo vệ người lao động cũ, đúng tinh thần hoàn thiện thể chế sở hữu.",
      },
      {
        heading: "Ví dụ: Hội nhập qua CPTPP, EVFTA",
        text: "Việt Nam cam kết giảm thuế quan gần về 0% với nhiều mặt hàng khi ký CPTPP, EVFTA, nhưng đàm phán lộ trình mở cửa theo từng ngành (5–10 năm) cho các lĩnh vực nhạy cảm như ô tô, sữa — hội nhập có chuẩn bị thay vì mở toang ngay lập tức.",
      },
    ],
  },
  {
    id: "5.3",
    title: "5.3 – Các quan hệ lợi ích kinh tế",
    color: "text-emerald-300",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-500/05",
    points: [
      {
        heading: "Lợi ích kinh tế",
        text: "Sự thỏa mãn nhu cầu vật chất của chủ thể kinh tế; là động lực trực tiếp của các hoạt động kinh tế. Bản chất phản ánh quan hệ sở hữu tư liệu sản xuất.",
      },
      {
        heading: "Quan hệ lợi ích cơ bản",
        text: "① Người lao động – người sử dụng lao động. ② Giữa những người sử dụng lao động. ③ Giữa những người lao động. ④ Lợi ích cá nhân – nhóm – xã hội.",
      },
      {
        heading: "Vai trò Nhà nước",
        text: "① Bảo vệ lợi ích hợp pháp & tạo môi trường thuận lợi. ② Điều hòa lợi ích qua thuế, lương tối thiểu, an sinh xã hội. ③ Kiểm soát, ngăn ngừa quan hệ lợi ích tiêu cực. ④ Giải quyết mâu thuẫn lợi ích qua đối thoại ba bên.",
      },
      {
        heading: "Hài hòa lợi ích",
        text: "Thống nhất biện chứng giữa lợi ích các chủ thể: mặt mâu thuẫn được hạn chế, mặt thống nhất được khuyến khích.",
      },
      {
        heading: "Nhân tố ảnh hưởng đến quan hệ lợi ích",
        text: "Trình độ phát triển của lực lượng sản xuất; địa vị của chủ thể trong quan hệ sở hữu tư liệu sản xuất; chính sách phân phối thu nhập của Nhà nước; mức độ hội nhập kinh tế quốc tế.",
      },
      {
        heading: "Ví dụ: Đình công đòi tăng lương",
        text: "Công nhân một khu công nghiệp đình công đòi tăng lương khi giá sinh hoạt tăng mạnh — đây là biểu hiện trực tiếp của quan hệ lợi ích giữa người lao động và người sử dụng lao động, nơi lợi ích hai bên vừa thống nhất (cùng cần doanh nghiệp tồn tại) vừa mâu thuẫn (phân chia phần giá trị tạo ra).",
      },
      {
        heading: "Ví dụ: Thuế thu nhập cá nhân lũy tiến",
        text: "Người thu nhập càng cao chịu mức thuế suất càng lớn, phần thu thêm được đưa vào quỹ bảo hiểm y tế, trợ cấp thất nghiệp — đây là công cụ Nhà nước dùng để điều hòa lợi ích giữa cá nhân thu nhập cao và phần còn lại của xã hội.",
      },
      {
        heading: "Ví dụ: Đối thoại ba bên giải quyết tranh chấp lao động",
        text: "Khi xảy ra tranh chấp lương/điều kiện làm việc, Nhà nước (qua Sở Lao động), công đoàn và doanh nghiệp cùng ngồi đối thoại để tìm phương án các bên chấp nhận được, thay vì để đình công tự phát kéo dài — thể hiện vai trò giải quyết mâu thuẫn lợi ích bằng công cụ đối thoại, hòa giải.",
      },
    ],
  },
];

const SECTIONS_WITH_IDS = KNOWLEDGE_SECTIONS.map((s) => ({
  ...s,
  points: s.points.map((p, i) => ({
    ...p,
    id: `block-${s.id}-${i}`,
    isExample: p.heading.toLowerCase().startsWith("ví dụ"),
  })),
}));

function SectionWrapper({
  section,
  isExpanded,
  onToggle,
}: {
  section: typeof SECTIONS_WITH_IDS[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const blockIds = section.points.map((p) => p.id);
  const { isRead, markRead, progress } = useReadProgress(section.id, blockIds);

  return (
    <div className={`rounded-xl border ${section.borderColor} ${section.bgColor} overflow-hidden`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left cursor-pointer hover:bg-white/02 transition-colors"
        id={`knowledge-section-${section.id}`}
      >
        <div className="flex items-center gap-2.5">
          <BookOpen className={`w-4 h-4 ${section.color} flex-shrink-0`} />
          <span className={`font-semibold text-sm ${section.color}`}>{section.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <SectionProgress {...progress} />
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3">
              {section.points.map((point) => (
                <ReadableBlock
                  key={point.id}
                  blockId={point.id}
                  heading={point.heading}
                  body={point.text}
                  isExample={point.isExample}
                  isRead={isRead(point.id)}
                  onRead={markRead}
                />
              ))}

              {section.points.length > 0 && (
                <Flashcard 
                  frontText={section.points[0].heading} 
                  backText={section.points[0].text} 
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface KnowledgePanelProps {
  isOpen: boolean;
  onClose: () => void;
  autoOpenTag?: string | null;
}

export default function KnowledgePanel({ isOpen, onClose, autoOpenTag }: KnowledgePanelProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>("5.1");

  // Auto-expand section if autoOpenTag is provided
  useEffect(() => {
    if (isOpen && autoOpenTag) {
      const sectionId = autoOpenTag.substring(0, 3); // Extract "5.1" from "5.1.2.a"
      if (SECTIONS_WITH_IDS.some((s) => s.id === sectionId)) {
        setExpandedSection(sectionId);
        
        // Wait a bit for the animation, then scroll
        setTimeout(() => {
          const el = document.getElementById(`knowledge-section-${sectionId}`);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            // Add a temporary glow class
            el.parentElement?.classList.add("ring-2", "ring-violet-400", "ring-offset-2", "ring-offset-slate-900", "transition-all", "duration-500");
            setTimeout(() => {
              el.parentElement?.classList.remove("ring-2", "ring-violet-400", "ring-offset-2", "ring-offset-slate-900");
            }, 2000);
          }
        }, 300);
      }
    }
  }, [isOpen, autoOpenTag]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{ background: "rgba(5,11,26,0.6)", backdropFilter: "blur(4px)" }}
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-slate-900 border-l border-slate-700/50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <GraduationCap className="w-4.5 h-4.5 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-100">Kiến thức lý luận</h2>
                  <p className="text-xs text-slate-500">Chương 5 – Kinh tế chính trị MLN</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-all cursor-pointer"
                id="btn-close-knowledge"
                aria-label="Đóng bảng kiến thức"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {SECTIONS_WITH_IDS.map((section) => (
                <SectionWrapper
                  key={section.id}
                  section={section}
                  isExpanded={expandedSection === section.id}
                  onToggle={() =>
                    setExpandedSection(
                      expandedSection === section.id ? null : section.id
                    )
                  }
                />
              ))}
            </div>


            {/* Footer */}
            <div className="p-4 border-t border-slate-700/50 bg-slate-900/90">
              <p className="text-xs text-center text-slate-600 leading-relaxed">
                Nguồn: Giáo trình Kinh tế chính trị Mác–Lênin (2021), tr.177–220 |
                Tạp chí Cộng sản | Học viện CTQG Hồ Chí Minh
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
