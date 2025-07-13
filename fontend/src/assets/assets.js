import favicon from "./favicon.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import logo from "./logo.svg";
import {
  SquarePen,
  PenLine,
  Image,
  Eraser,
  Trash2,
  FileText,
} from "lucide-react";

export const assets = {
  favicon,
  logo,
  star_icon,
  star_dull_icon,
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
];

export const dummyTestimonialData = [
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "John Doe",
    title: "Marketing Director, TechCorp",
    content:
      "ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
    rating: 4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Jane Smith",
    title: "Content Creator, TechCorp",
    content:
      "ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
    rating: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    name: "David Lee",
    title: "Content Writer, TechCorp",
    content:
      "ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.",
    rating: 4,
  },
];
