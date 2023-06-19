import Link from "next/link";
import React from "react";

const SingelCardCategory = ({ item }: { item: GetPropsProduct }) => {
  console.log(item);

  return (
    <Link
      href={{
        pathname: `/SingleProduct/${item.name}`,
        query: { id: item._id },
      }}
    >
      <div
        key={item._id}
        className="group relative p-2 border-2 rounded-lg"
        dir="rtl"
      >
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={`${process.env.BASE_IMAGE_URL}${item.images[0]}`}
            alt={item.name}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a>
                <span aria-hidden="true" className="absolute inset-0" />
                {item.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{item.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingelCardCategory;
