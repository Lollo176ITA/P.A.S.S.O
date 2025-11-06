import TestConnection from "@/components/TestConnection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubHeader from "@/components/SubHeader";
import AnimatedHero from "@/components/AnimatedHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      <SubHeader />
      
      <AnimatedHero />

      {/* Footer */}
      <Footer />
      
      {/* Test connessione database 
      <TestConnection />*/}
    </div>
  );
}
