import type ProductType from "@/lib/types/productType";

type ProductCardProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-64 items-center justify-center bg-slate-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-xl font-bold text-slate-950">{product.title}</h2>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-950">
            ${product.price.toFixed(2)}
          </span>

          <button
            type="button"
            className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

