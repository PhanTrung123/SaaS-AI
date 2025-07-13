import favicon from "./favicon.svg";
import logo from "./logo.svg";
import {
  SquarePen,
  PenLine,
  Image,
  Eraser,
  Trash2,
  FileText,
  Users,
} from "lucide-react";

export const assets = {
  favicon,
  logo,
};

export const AiToolsData = [
  {
    title: "Công cụ viết bài bằng AI",
    desc: "Khám phá các công cụ AI mạnh mẽ giúp bạn tối ưu hóa công việc và nâng cao hiệu suất.",
    Icon: SquarePen,
    bg: { from: "#a8edea", to: "#fed6e3" },
    path: "/ai/write-article",
  },
  {
    title: "Công cụ tạo tiêu đề cho blog",
    desc: "Tạo tiêu đề chất lượng cao một cách nhanh chóng và hiệu quả với các công cụ AI tiên tiến.",
    Icon: PenLine,
    bg: { from: "#b153ea", to: "#e549a3" },
    path: "/ai/blog",
  },
  {
    title: "Tạo hình ảnh bằng AI",
    desc: "Biến ý tưởng của bạn thành hình ảnh tuyệt đẹp với công nghệ AI hiện đại.",
    Icon: Image,
    bg: { from: "#fefcbf", to: "#fbd38d" },
    path: "/ai/images",
  },
  {
    title: "Xóa nền ảnh",
    desc: "Xử lý ảnh nhanh chóng và tự động bằng công cụ xóa nền sử dụng AI.",
    Icon: Eraser,
    bg: { from: "#d1fae5", to: "#a7f3d0" },
    path: "/ai/remove-background",
  },
  {
    title: "Xóa vật thể khỏi ảnh",
    desc: "Loại bỏ các chi tiết không mong muốn khỏi ảnh một cách thông minh bằng AI.",
    Icon: Trash2,
    bg: { from: "#fee2e2", to: "#fecaca" },
    path: "/ai/remove-obj",
  },
  {
    title: "Đánh giá CV xin việc",
    desc: "Phân tích và đánh giá hồ sơ xin việc của bạn bằng AI để cải thiện cơ hội nghề nghiệp.",
    Icon: FileText,
    bg: { from: "#e0e7ff", to: "#c7d2fe" },
    path: "/ai/review-resume",
  },
  {
    title: "Cộng đồng chia sẻ ý tưởng",
    desc: "Tham gia thảo luận, chia sẻ và học hỏi từ cộng đồng yêu công nghệ AI.",
    Icon: Users,
    bg: { from: "#f3e8ff", to: "#fbcfe8" },
    path: "/ai/community",
  },
];
