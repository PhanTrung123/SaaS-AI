import React from "react";
import { PricingTable } from "@clerk/clerk-react";

const Plan = () => {
  return (
    <div className=" px-4 sm:px-20 xl:px-32 py-20">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Chọn một gói sử dụng
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Chọn gói phù hợp với nhu cầu của bạn và bắt đầu tận hưởng các công cụ
          AI mạnh mẽ ngay hôm nay.
        </p>
      </div>

      <div className="mt-10 max-sm:mx-8 px-4 max-w-3xl mx-auto">
        <PricingTable />
      </div>
    </div>
  );
};

export default Plan;
