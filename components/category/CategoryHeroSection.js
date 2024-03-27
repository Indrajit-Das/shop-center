import Header from "../../public/assets/header.webp";
export default function CategoryHeroSection() {
  return (
    <header
      style={{ backgroundImage: `url(${Header.src})` }}
      className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full "
    ></header>
  );
}
