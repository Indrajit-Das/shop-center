import CategoryHeroSection from "@/components/category/CategoryHeroSection";

export const metadata = {
  title: "Learn with Sumit",
  description: "Learn with Sumit",
};

export default function CategoryLayout({ children }) {
  return (
    <>
      <CategoryHeroSection />
      {children}
    </>
  );
}
