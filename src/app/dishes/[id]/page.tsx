// import type { Metadata } from "next";

// type Props = {
//   params: Promise<{ id: string }>;
// };

// // Fetch dish data from API
// async function getDish(id: string) {
//   const res = await fetch(
//     `https://api.example.com/dishes/${id}`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch dish");
//   }

//   return res.json();
// }

// // Generate dynamic metadata
// export async function generateMetadata(
//   { params }: Props
// ): Promise<Metadata> {
//   const { id } = await params;
//   const dish = await getDish(id);

//   return {
//     title: `${dish.name} | SmartServe`,
//     description: dish.description,
//   };
// }

// // Dishes Page
// export default async function DishPage({
//   params,
// }: Props) {
//   const { id } = await params;
//   const dish = await getDish(id);

//   return (
//     <div>
//       <h1>{dish.name}</h1>
//       <p>{dish.description}</p>
//       <p>Price: ${dish.price}</p>
//     </div>
//   );
// }

import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params;

  const res = await fetch(
    `https://api.example.com/dishes/${id}`
  );

  const dish = await res.json();

  return {
    title: `${dish.name} | SmartServe`,
    description: dish.description,
  };
}