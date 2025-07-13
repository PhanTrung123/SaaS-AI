import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="px-4 sm:px-20 xl:px-32 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-6 text-gray-800">
        <h2 className="text-3xl sm:text-5xl font-bold leading-tight ">
          Các công cụ AI mạnh mẽ
        </h2>
        <p className="text-lg sm:text-xl text-gray-700">
          Tăng tốc công việc của bạn với bộ công cụ AI tiên tiến – từ viết bài,
          tạo tiêu đề đến xử lý hình ảnh và đánh giá CV.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-10">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            className="p-8 m-4 max-w-xs rounded-lg bg-[#fdfdfe] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer "
            onClick={() => user && navigate(tool.path)}
          >
            <tool.Icon
              className="w-12 h-12 p-3 text-black rounded-xl "
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            />
            <h3 className="mt-6 mb-3 text-lg font-semibold">{tool.title}</h3>
            <p className="text-gray-600 text-sm max-w-[95%]">{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
