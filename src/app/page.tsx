import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhatIDo from "@/components/WhatIDo";
import HealthcareCallout from "@/components/HealthcareCallout";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedProjects />
        <WhatIDo />
        <HealthcareCallout />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
