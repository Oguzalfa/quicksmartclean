import { About } from "@/components/About";
import { BrandStatement } from "@/components/BrandStatement";
import { CinematicDivider } from "@/components/CinematicDivider";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { OperationsGallery } from "@/components/OperationsGallery";
import { Process } from "@/components/Process";
import { SectorShowcase } from "@/components/SectorShowcase";
import { Services } from "@/components/Services";
import { SiteLayout } from "@/components/SiteLayout";
import { WhyQuick } from "@/components/WhyQuick";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <BrandStatement />
      <About />
      <SectorShowcase />
      <CinematicDivider />
      <Services />
      <WhyQuick />
      <Process />
      <OperationsGallery />
      <Contact />
    </SiteLayout>
  );
}
