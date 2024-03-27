import { getDiscountedPrice } from "@/utils/utility";

export default function CategoryProducts({ products }) {
  return (
    <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {/* <!-- Product 1 Start --> */}
      {products.map((product) => (
        <div key={product.id}>
          <div
            style={{ backgroundImage: `url(${product.thumbnail})` }}
            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform"
          ></div>
          <h2 className="text-sm lg:text-base mt-2">
            <a className="text-base font-bold" href="./productPage.html">
              {product.title}
            </a>
            <span className="text-[#919090]">
              <a href="./category.html">({product.category})</a>
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
      ))}
    </div>
  );
}
