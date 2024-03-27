import EmailScoop from "@/components/EmailScoop";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ProductList />
        <EmailScoop />
      </main>
      <Footer />
    </>
  );
}
