import Link from "next/link";

export default function CategorySideBar({ categories, activeCategory }) {
  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <Link
        className={`hover:border-b border-black block h-6 box-border mt-4 ${
          activeCategory === "all" ? "border-b" : ""
        }`}
        href="/category/all"
      >
        All
      </Link>
      {categories.map((category, index) => (
        <Link
          className={`hover:border-b border-black block h-6 box-border mt-5 ${
            activeCategory === category ? "border-b" : ""
          }`}
          href={`/category/${category}`}
          key={index}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
