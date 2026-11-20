"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useGetDishesQuery } from "@/store/dishesApi";
import { nextSlide, previousSlide, setSlide } from "@/store/slideSlice";
import type { RootState } from "@/store";

export default function DishesCarousel() {
  const { data, isLoading, isError, refetch } = useGetDishesQuery();
  const current = useSelector((state: RootState) => state.slide.current);
  const dispatch = useDispatch();
  const dishes = data?.recipes ?? [];
  const activeDish = dishes[current];

  if (isLoading) {
    return (
      <div className="mx-auto flex min-h-96 max-w-6xl items-center justify-center rounded-3xl bg-stone-100">
        <p className="text-lg text-stone-500">Loading dishes...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto flex min-h-96 max-w-6xl flex-col items-center justify-center rounded-3xl bg-red-50">
        <p className="mb-4 text-red-700">Could not load dishes.</p>
        <button onClick={() => refetch()} className="rounded-full bg-stone-900 px-5 py-2 text-white">
          Try again
        </button>
      </div>
    );
  }

  if (!activeDish) return null;

  return (
    <section className="mx-auto max-w-6xl">
      <div className="relative overflow-hidden rounded-[2rem] bg-stone-900 shadow-xl">
        <div className="relative h-[430px] sm:h-[520px]">
          <Image
            src={activeDish.image}
            alt={activeDish.name}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          <button
            type="button"
            aria-label="Previous dish"
            onClick={() => dispatch(previousSlide(dishes.length))}
            className="absolute left-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl text-stone-900 shadow-lg transition hover:bg-white sm:left-7"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next dish"
            onClick={() => dispatch(nextSlide(dishes.length))}
            className="absolute right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl text-stone-900 shadow-lg transition hover:bg-white sm:right-7"
          >
            ›
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-10">
            <div className="mb-3 flex gap-2">
              <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-stone-950">
                {activeDish.cuisine}
              </span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
                ★ {activeDish.rating}
              </span>
            </div>
            <h2 className="max-w-3xl text-3xl font-bold sm:text-5xl">{activeDish.name}</h2>
            <p className="mt-3 text-sm text-white/80">
              {activeDish.difficulty} · {activeDish.mealType.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="min-w-16 text-sm font-semibold text-stone-500">
          {String(current + 1).padStart(2, "0")} / {String(dishes.length).padStart(2, "0")}
        </p>
        <div className="flex max-w-full gap-2 overflow-x-auto pb-2">
          {dishes.map((dish, index) => (
            <button
              key={dish.id}
              type="button"
              aria-label={`Show ${dish.name}`}
              onClick={() => dispatch(setSlide(index))}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition sm:h-20 sm:w-20 ${
                index === current ? "border-amber-400 opacity-100" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={dish.image} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
