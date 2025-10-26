import { Suspense } from "react";
import ProductGrid from "../../components/ProductGrid";

export default function ProductsPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <section className="py-24 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#f5deb3] to-[#fff] mb-16">
          Our SIGNATURE Collection
        </h1>
        <Suspense>
          <ProductGrid />
        </Suspense>
      </section>
    </main>
  );
}
