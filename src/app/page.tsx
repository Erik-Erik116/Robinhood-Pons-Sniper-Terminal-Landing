import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductFeatures } from "@/components/ProductFeatures";
import { Workflow } from "@/components/Workflow";
import { Statement } from "@/components/Statement";
import { Ecosystem } from "@/components/Ecosystem";
import { TokenUtility } from "@/components/TokenUtility";
import { DocsCTA } from "@/components/DocsCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ProductFeatures />
        <Workflow />
        <Statement />
        <Ecosystem />
        <TokenUtility />
        <DocsCTA />
      </main>
      <Footer />
    </>
  );
}
