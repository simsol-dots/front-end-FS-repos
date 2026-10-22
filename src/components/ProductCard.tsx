

import ProductType from '@/lib/types/productType';
import React from 'react'


  
export default function ProductCard(props: ProductType) {


    // const image = "https://iqguernsey.com/cdn/shop/files/IMG-18072112_m_jpeg_1_d2b1dcef-4d1c-45f0-8828-5d2e796acd2b.jpg?v=1757469820";
    // const title = "iPhone 18 Pro Max";
    // const description = "Experience premium design, powerful performance, and an exceptional smartphone experience.";
    // const price = 1999.99;



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl">
        {/* Product Image */}
        <div className="flex h-72 items-center justify-center bg-gray-50 p-6">
          <img
            src={props.image}
            alt={props.title}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4 p-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
              Apple
            </p>
            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              {props.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              {props.description}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Price</span>
            <span className="text-2xl font-bold text-gray-900">
              ${
              props.price
              }
            </span>
          </div>

          {/* Add to Cart */}
          <button
            type="button"
            className="w-full rounded-xl bg-black px-5 py-3 font-semibold text-white transition-colors hover:bg-gray-800 active:scale-[0.98]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

