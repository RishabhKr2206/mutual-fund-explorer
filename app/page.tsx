import Header from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import ExploreFundsSection from "./components/Explore/ExploreFundsSection";
import FooterBanner from "./components/FooterBanner/FooterBanner";
import Footer from "./components/Footer/Footer";
import { FundExplorerProvider } from "./context/FundExplorerContext";
import { getFunds } from "./lib/funds";

export default function Home() {
  const funds = getFunds();

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col bg-surface-subtle">
        <FundExplorerProvider funds={funds}>
          <HeroSection />
          <ExploreFundsSection />
        </FundExplorerProvider>
        <FooterBanner />
      </main>
      <Footer />
    </div>
  );
}
