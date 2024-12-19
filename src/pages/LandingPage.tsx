import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TokenomicsSection } from '@/components/TokenomicsSection';
import { MarketplacePreview } from '@/components/MarketplacePreview';
import { RoadmapSection } from '@/components/RoadmapSection';
import { TeamSection } from '@/components/TeamSection';
import { CommunitySection } from '@/components/CommunitySection';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      <TokenomicsSection />
      <MarketplacePreview />
      <RoadmapSection />
      <TeamSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}