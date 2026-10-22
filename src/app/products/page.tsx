import ProductCard from "@/components/ProductCard";
import productData from "@/data/productData";

export default function CardPage() {
    return (
        <div className="min-h-screen flex items-center flex-wrap flex-3 justify-center bg-gray-100 p-6">

            {productData.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))} 
            
        </div>
    );
    }