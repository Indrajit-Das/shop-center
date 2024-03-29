import EmailScoop from "@/components/EmailScoop";
import Footer from "@/components/Footer";
import CategoryProducts from "@/components/category/CategoryProducts";
import CategorySideBar from "@/components/category/CategorySideBar";
import data from "../../../data/products.json";

const categories = Array.from(
  new Set(data.products.map((product) => product.category))
);

const filterProductsByCategory = (category) => {
  if (category == "all") {
    return data.products;
  }
  return data.products.filter((product) => product.category === category);
};

export default function Category({ params }) {
  const category = params.categoryName;
  const filteredProducts = filterProductsByCategory(category);
  return (
    <>
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <CategorySideBar categories={categories} activeCategory={category} />
          <CategoryProducts products={filteredProducts} />
        </section>
      </main>
      <EmailScoop />
      <Footer />
    </>
  );
}
