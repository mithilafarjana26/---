
import React from "react";

const AllProductsCard = ({ product }) => {
  const price = Number(product?.today ?? 0);
  const direction = product?.change?.dir;
  const percentage = Number(product?.change?.pct ?? 0);

  const isDown = direction === "down";
  const isUp = direction === "up";
  const isSame = !isDown && !isUp;

  const badgeClass = isDown
    ? "bg-green-50 text-green-700"
    : isUp
    ? "bg-red-50 text-red-600"
    : "bg-slate-100 text-slate-500";

  return (
    <div className="flex w-full min-w-0 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/75 p-3 transition duration-200 hover:border-slate-300 hover:shadow-sm">
      {/* Product Image */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100/90">
        <span className="text-xl">
          {product?.image || product?.categoryIcon || "🛒"}
        </span>
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-sm font-semibold leading-5 text-slate-800">
          {product?.nameBn || product?.name || "পণ্যের নাম"}
        </h2>

        <p className="mt-0.5 text-[11px] text-slate-500">
          {product?.unit === "kg"
            ? "প্রতি কেজি"
            : product?.unit || "প্রতি পিস"}
        </p>

        {/* Price */}
        <div className="mt-3">
          <p className="text-[10px] text-slate-500">
            আজকের দাম
          </p>

          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-bold text-slate-800">
              {price.toLocaleString("bn-BD")} টাকা
            </p>

            <span
              className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-medium ${badgeClass}`}
            >
              {isDown ? "▼" : isUp ? "▲" : "—"}{" "}
              {percentage.toLocaleString("bn-BD", {
                maximumFractionDigits: 1,
              })}
              %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsCard;
