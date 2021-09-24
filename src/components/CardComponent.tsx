import React from "react";
import { formatCurrencyCode } from "../utils/formatCurrency";

function CardComponent({ item }: { item: IGarmentData }) {
  return (
    <div className="flex w-1/2 shadow-md rounded-md hover:shadow-xl mx-4">
      <div className="flex-none w-48 relative">
        <img
          src={
            item.image_urls[0] ||
            item.images[0].url ||
            item.product_imgs_src[0] ||
            ""
          }
          alt={item?.product_categories[0] || ""}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <form className="flex-auto p-6" method="POST" action={item.url}>
        <div className="flex flex-wrap mb-4">
          <h1 className="flex-auto text-xl font-semibold">
            {item.product_title || "Product Name"}
          </h1>
          <div className="text-xl font-semibold text-gray-500">
            {formatCurrencyCode(item.currency_code)}&nbsp;{item.price || 50}
          </div>
          <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            {item?.stock > 0 ? "In stock" : "Out of Stock"}
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6">{item.product_description}</p>
        <div className="flex space-x-3 mb-4 text-sm font-medium">
          <div className="flex-auto flex space-x-3">
            <button
              className="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
              type="submit"
            >
              Buy now
            </button>
            <button
              className="w-1/2 flex items-center justify-center rounded-md border border-gray-300"
              type="button"
            >
              Add to bag
            </button>
          </div>
          <button
            className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
            type="button"
            aria-label="like"
          >
            <svg width="20" height="20" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CardComponent;
