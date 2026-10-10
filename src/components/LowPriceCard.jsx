import React from "react";

const LowPriceCard = ({ price }) => {
  const getUnit = (unit) => {
    if (unit === "kg") return "প্রতি কেজি";
    if (unit === "litre") return "প্রতি লিটার";
    if (unit === "piece") return "প্রতি পিস";
    return `প্রতি ${unit || "একক"}`;
  };

  return (
    <div className="rounded-2xl border border-[#e0e8e1] bg-[#fbfcfb] p-3 transition-shadow hover:shadow-sm md:p-4">
      {/* Product information */}
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f4ef] text-2xl">
          {price.image || price.categoryIcon || "🛒"}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            {price.nameBn}
          </h3>

          <p className="text-xs text-gray-500">
            {getUnit(price.unit)}
          </p>
        </div>
      </div>

      {/* Today's price and decrease */}
      <div className="flex items-end justify-between gap-2">
        <div>
          <p className="mb-1 text-xs text-gray-500">
            আজকের দাম
          </p>

          <p className="text-base font-bold text-gray-900">
            ৳{Number(price.today).toLocaleString("bn-BD")} টাকা
          </p>
        </div>

        <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-green-50 px-2 py-1 text-[11px] font-semibold text-green-600">
          <span>▼</span>
          {Math.abs(Number(price.change?.pct || 0)).toLocaleString(
            "bn-BD",
            { maximumFractionDigits: 1 }
          )}
          %
        </span>
      </div>
    </div>
  );
};

export default LowPriceCard;