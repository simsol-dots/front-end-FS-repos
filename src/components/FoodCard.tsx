"use client";

import Image from "next/image";
import FoodType from "@/lib/types/foodType";


export default function FoodCard({ food, onAdd }: { food: FoodType; onAdd: () => void }) {
  return (
    <article className="flex min-h-36 items-center gap-4 rounded-xl border border-gray-200 bg-white p-3 sm:gap-5 sm:p-4">
      <div className="min-w-0 flex-1 self-stretch">
        <h2 className="truncate text-base font-semibold text-gray-900 sm:text-lg">{food.title}</h2>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
          <p className="text-lg text-pink-600"><span className="text-sm">ចាប់ពី</span> ${food.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 line-through">${food.oldPrice.toFixed(2)}</p>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">{food.description}</p>
        {food.popular && <p className="mt-1 text-sm text-gray-700"><span className="mr-1 text-orange-600" aria-hidden="true">🔥</span>ពេញនិយម</p>}
      </div>

      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-32 sm:w-32">
        <img
          src={food.image}
          alt={food.title}
          className="object-cover"
        />
        <button
          onClick={onAdd}
          aria-label={`Add another ${food.title} card`}
          type="button"
          className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-gray-900 shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>
    </article>
  );
}
