import React from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative flex flex-col justify-center items-start min-h-screen  text-gray-800">
      <div className="max-w-4xl space-y-6 py-16 mx-auto text-center leading-[1.5]">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Khám Phá Sức Mạnh Của{" "}
          <span className=" text-blue-500">Công Cụ AI</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          Giải pháp AI hiện đại giúp bạn tối ưu công việc, ra quyết định nhanh
          chóng và hiệu quả hơn.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
          <button
            onClick={() => navigate("/ai")}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all text-sm font-medium cursor-pointer active:scale-95"
          >
            Bắt Đầu Ngay
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full hover:shadow transition-all text-sm font-medium cursor-pointer active:scale-95">
            Xem Bản Demo
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-500 mt-6 hidden sm:block">
          {" "}
          <Users className="w-6 h-6" /> Hơn{" "}
          <span className="font-semibold text-blue-600">10.000+</span> người
          dùng đã tin tưởng và sử dụng{" "}
          <span className="font-semibold text-blue-600">ChatBox AI</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
