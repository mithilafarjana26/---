
import Image from "next/image";
// import banner from '/bazar-hero.png'

const Banner = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <div className="mx-auto mt-6 flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-6 rounded-3xl border border-gray-200 bg-white px-5 py-6 sm:flex-row sm:px-8 sm:py-8">

            <div className="w-full sm:w-3/5">
                <p className="mb-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {date}
                </p>

                <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                    আজকের বাজারের দাম এক নজরে
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও অন্যান্য নিত্যপ্রয়োজনীয়
                    পণ্যের দাম — বাজারদরভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ
                    এবং দামের পরিবর্তন এক জায়গায়।
                </p>

                <a
                    href="#categories"
                    className="mt-6 inline-block rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-800"
                >
                    সব পণ্য দেখুন
                </a>
            </div>

            <div className="flex w-full justify-center sm:w-2/5 sm:justify-end">
                <Image
                     src="/bazar-hero.png"
                    alt="বাজারের বিভিন্ন পণ্য"
                    width={280}
                    height={220}
                    priority
                    className="h-auto w-44 object-contain sm:w-56 lg:w-64"
                />
            </div>

        </div>
    );
};

export default Banner;
