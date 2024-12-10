import { Navbar } from "@/components/landing-page/navbar";
import { Workflow } from "../components/landing-page/work";
import { Hero } from "@/components/landing-page/hero-section";
import { Feature } from "@/components/landing-page/features";
import FooterSection from "@/components/landing-page/footer";

export default function Home() {
  return (
    <div className="background">
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <Hero />
        <Feature />
        <Workflow />
        <FooterSection />
      </div>
    </div>
  );
}
