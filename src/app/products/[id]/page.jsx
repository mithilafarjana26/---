import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

const ProductsDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${id}`);
  if (!res.ok) {
    if (res.status === 404) notFound();
    throw new Error("পণ্যের তথ্য লোড করা যায়নি");
  }

  const product = await res.json();

  const formatPrice = (price) =>
    Number(price).toLocaleString("bn-BD");

  const getUnit = (unit) => {
    if (unit === "kg") return "কেজি";
    if (unit === "litre") return "লিটার";
    if (unit === "piece") return "পিস";
    return unit || "একক";
  };

  const changeUp = product.change?.dir === "up";

  const priceDifference = product.today - product.yesterday;

  return (
    <main className="min-h-screen bg-[#f1f5f0] px-3 py-5 sm:px-6 md:py-8">
      <div className="mx-auto max-w-5xl">

        {/* Breadcrumb */}
        <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-green-700">
            হোম
          </Link>
          <span>›</span>
          <span>{product.categoryNameBn || "পণ্য"}</span>
          <span>›</span>
          <span className="font-medium text-gray-700">
            {product.nameBn}
          </span>
        </nav>

        {/* Product Header */}
        <section className="mb-4 flex flex-col gap-4 rounded-xl border border-[#e2e9e2] bg-[#fbfcfb] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f4ef] text-3xl sm:h-16 sm:w-16 sm:text-4xl">
              {product.image || product.categoryIcon || "🛒"}
            </div>

            <div className="min-w-0">
              <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
                {product.nameBn}
              </h1>

              <p className="mt-1 text-xs text-gray-500">
                প্রতি {getUnit(product.unit)}
              </p>

              <p className="mt-2 text-xs text-gray-600">
                {changeUp
                  ? "গতকালের তুলনায় আজ দাম বেড়েছে"
                  : product.change?.dir === "down"
                    ? "গতকালের তুলনায় আজ দাম কমেছে"
                    : "গতকালের তুলনায় দাম অপরিবর্তিত"}
                {" "}{" "}
                <span
                  className={
                    changeUp
                      ? "font-semibold text-red-600"
                      : product.change?.dir === "down"
                        ? "font-semibold text-green-600"
                        : "font-semibold text-gray-600"
                  }
                >
                  {priceDifference > 0 ? "+" : ""}
                  {formatPrice(priceDifference)} টাকা
                </span>
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-between gap-4 rounded-xl bg-[#f0f4ef] px-4 py-3 sm:min-w-28 sm:flex-col sm:gap-1 sm:text-center">
            <div>
              <p className="text-xs text-gray-500">আজকের দাম</p>
              <p className="text-2xl font-bold text-gray-800">
                {formatPrice(product.today)}
              </p>
              <p className="text-xs text-gray-500">
                টাকা / {getUnit(product.unit)}
              </p>
            </div>

            <span
              className={`text-xs font-semibold ${
                changeUp
                  ? "text-red-600"
                  : product.change?.dir === "down"
                    ? "text-green-600"
                    : "text-gray-500"
              }`}
            >
              {changeUp ? "▲" : product.change?.dir === "down" ? "▼" : "●"}{" "}
              {formatPrice(Math.abs(product.change?.pct || 0))}%
            </span>
          </div>
        </section>

        {/* Price Summary */}
        <section className="mb-4 rounded-xl border border-[#e2e9e2] bg-[#fbfcfb] p-4 sm:p-5">
          <h2 className="mb-4 text-sm font-bold text-gray-800">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#e6ece6] p-3 sm:p-4">
              <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-1 text-lg font-bold text-green-600">
                ৳{formatPrice(
                  Math.min(...(product.markets || []).map((m) => m.min))
                )}
                <span className="ml-1 text-xs font-normal">টাকা</span>
              </p>
              <p className="mt-1 text-[11px] text-gray-500">
                বাজারের সর্বনিম্ন দাম
              </p>
            </div>

            <div className="rounded-xl border border-[#e6ece6] p-3 sm:p-4">
              <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
              <p className="mt-1 text-lg font-bold text-red-600">
                ৳{formatPrice(
                  Math.max(...(product.markets || []).map((m) => m.max))
                )}
                <span className="ml-1 text-xs font-normal">টাকা</span>
              </p>
              <p className="mt-1 text-[11px] text-gray-500">
                বাজারের সর্বোচ্চ দাম
              </p>
            </div>

            <div className="rounded-xl border border-[#e6ece6] p-3 sm:p-4">
              <p className="text-xs text-gray-500">আজকের দাম</p>
              <p className="mt-1 text-lg font-bold text-green-600">
                ৳{formatPrice(product.today)}
                <span className="ml-1 text-xs font-normal">টাকা</span>
              </p>
              <p className="mt-1 text-[11px] text-gray-500">
                প্রতি {getUnit(product.unit)}
              </p>
            </div>
          </div>

          {/* Market Table */}
          <div className="mt-5">
            <h2 className="mb-3 text-sm font-bold text-gray-800">
              বাজারভিত্তিক আজকের দাম
            </h2>

            <div className="overflow-x-auto rounded-xl border border-[#e2e9e2]">
              <table className="w-full min-w-[560px] border-collapse text-left text-xs">
                <thead className="bg-[#f7faf7] text-gray-600">
                  <tr>
                    <th className="px-3 py-3 font-medium">বাজার</th>
                    <th className="px-3 py-3 font-medium">বিভাগ</th>
                    <th className="px-3 py-3 text-right font-medium">
                      সর্বনিম্ন
                    </th>
                    <th className="px-3 py-3 text-right font-medium">
                      সর্বোচ্চ
                    </th>
                    <th className="px-3 py-3 text-right font-medium">
                      আজ
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {(product.markets || []).map((market, index) => (
                    <tr
                      key={`${market.market}-${index}`}
                      className={
                        index % 2 === 0
                          ? "bg-[#fbfcfb]"
                          : "bg-[#f0f5ef]"
                      }
                    >
                      <td className="whitespace-nowrap px-3 py-3 font-medium text-gray-700">
                        {market.market}
                      </td>

                      <td className="whitespace-nowrap px-3 py-3 text-gray-600">
                        {market.division}
                      </td>

                      <td className="whitespace-nowrap px-3 py-3 text-right text-gray-700">
                        ৳{formatPrice(market.min)}
                      </td>

                      <td className="whitespace-nowrap px-3 py-3 text-right text-gray-700">
                        ৳{formatPrice(market.max)}
                      </td>

                      <td className="whitespace-nowrap px-3 py-3 text-right font-semibold text-gray-800">
                        ৳{formatPrice(product.today)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductsDetails;