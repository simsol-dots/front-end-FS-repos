
"use client";

import { useState } from "react";
import FoodCard from "@/components/FoodCard";
import foodData from "@/data/foodData";

export default function FoodsPage() {
  const [nextCardId, setNextCardId] = useState(foodData.length + 1);
  const [foodCards, setFoodCards] = useState(
    foodData.map((food) => ({ ...food, cardId: food.id })),
  );

  function addFoodCard(foodId: number) {
    const food = foodData.find((item) => item.id === foodId);
    if (!food) return;

    setFoodCards((cards) => [...cards, { ...food, cardId: nextCardId }]);
    setNextCardId((id) => id + 1);
  }

  return (
    <main className="min-h-screen bg-white px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-7">
          <h1 className="text-2xl font-bold text-stone-900">Food menu</h1>
        </header>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {foodCards.map(({ cardId, ...food }) => (
            <FoodCard key={cardId} food={food} onAdd={() => addFoodCard(food.id)} />
          ))}
        </div>
      </div>
    </main>
  );
}
