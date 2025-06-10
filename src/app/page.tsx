
import HeroSection from "@/components/home/hero";
import MidSection from "@/components/home/MidSection";
import QRGeneratorInterface from "@/components/home/qr-code";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <QRGeneratorInterface />
      <MidSection />
     
    </main>
  )
}
