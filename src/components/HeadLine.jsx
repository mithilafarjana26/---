import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
const HeadLine = async() => {
const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
  const data = await res.json();
    return (
        <div className="p-2 md:p-0">
            <div className="flex-1  min-w-0 border-t-2 mt-3 md:mt-8 py-2.5">
          <MarqueeText pauseOnHover={true} duration={25} direction="left">
            {data.map(
              (category) => (
                <span
                  key={category.id}
                  className="inline-flex items-center text-sm sm:text-base font-medium"
                >
                     <span className=" sm:mx-3">
                    {category.categoryIcon}
                  </span>
                  <Link href={`/products/${category.id}`}>
                  <span className="mx-2 sm:mx-3">
                    {category.nameBn}
                  </span>
                  </Link>

                  <span className="text-red-200 font-bold">
                    •
                  </span>
                </span>
              )
            )}
          </MarqueeText>
        </div>
        </div>
    );
};

export default HeadLine;