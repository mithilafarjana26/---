import React from 'react';

const GlobalLoading = () => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="rounded-xl border border-base-300 bg-base-100 p-4 shadow-sm"
        >
          {/* Image Skeleton */}
          <div className="skeleton h-64 w-full rounded-lg"></div>

          {/* Title */}
          <div className="mt-4 skeleton h-6 w-3/4"></div>

          {/* Author */}
          <div className="mt-2 skeleton h-4 w-1/2"></div>

          {/* Description */}
          <div className="mt-4 skeleton h-4 w-full"></div>
          <div className="mt-2 skeleton h-4 w-5/6"></div>

          {/* Button */}
          <div className="mt-5 skeleton h-10 w-32 rounded-lg"></div>
        </div>
      ))}
    </div>
        </div>
    );
};

export default GlobalLoading;