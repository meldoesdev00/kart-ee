import Nav from "@/app/components/Nav";
import SplitHero from "@/app/components/SplitHero";
import KardiklaasidSection from "@/app/components/KardiklaasidSection";
import TalendidSection from "@/app/components/TalendidSection";
import AkadeemiaSection from "@/app/components/AkadeemiaSection";
import VoistlussarjadSection from "@/app/components/VoistlussarjadSection";
import UudisedSection from "@/app/components/UudisedSection";
import MeistSection from "@/app/components/MeistSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <SplitHero />
        <KardiklaasidSection />
        <TalendidSection />
        <AkadeemiaSection />
        <VoistlussarjadSection />
        <UudisedSection />
        <MeistSection />
        <Footer />
      </main>
    </>
  );
}
