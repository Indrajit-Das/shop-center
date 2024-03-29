import CategoryHeroSection from "@/components/category/CategoryHeroSection";

export default function CategoryLayout({ children }) {
  return (
    <>
      <CategoryHeroSection />
      {children}
    </>
  );
}
