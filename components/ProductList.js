import Link from "next/link";
import productsData from "../data/products.json";
import { getDiscountedPrice } from "../utils/utility.js";

const { products } = productsData;

export default function ProductList() {
  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
        {/* <!-- Product 1 Start --> */}
        {products.map((product) => {
          return (
            <div key={product.id}>
              <div
                style={{ backgroundImage: `url(${product.thumbnail})` }}
                className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform"
              ></div>
              <h2 className="text-sm lg:text-base mt-2">
                <Link
                  className="text-base font-bold"
                  href={`/products/${product.id}`}
                >
                  {product.title}
                </Link>
                <span className="text-[#919090]">
                  <Link href={`/category/${product.category}`}>
                    {" "}
                    ({product.category})
                  </Link>
                </span>
              </h2>
              <p className="text-[#919090] text-sm ">{product.description}</p>

              <p className="text-rose-600 text-sm mt-4">
                <span className="text-[#919090] line-through">
                  ${product.price}
                </span>{" "}
                ${getDiscountedPrice(product.price, product.discountPercentage)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
