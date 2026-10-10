
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f8faf8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[64px] py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 text-center sm:text-left">
          
          {/* Left Side */}
          <p className="text-[11px] sm:text-xs text-gray-700 leading-relaxed">
            বাজারদর — প্রতিদিনের পণ্যের সঠিক দর জানুন।
          </p>

          {/* Right Side */}
          <p className="text-[11px] sm:text-xs text-gray-700 leading-relaxed">
            সকল পণ্যের বাজারদর, সঠিক তথ্যের জন্য নির্ভরযোগ্য উৎস।
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
