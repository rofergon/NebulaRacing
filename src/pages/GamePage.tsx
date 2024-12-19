import { GameHeader } from '@/components/game/GameHeader';
import { GameTrack } from '@/components/game/GameTrack';
import { CarPanel } from '@/components/game/CarPanel';
import { RaceSettings } from '@/components/game/RaceSettings';
import { GameFooter } from '@/components/game/GameFooter';

export default function GamePage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[url('/Background1-enhanced-transformed.png')] bg-cover bg-center">
      <GameHeader />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_300px] gap-6 h-[calc(100vh-8rem)]">
          <CarPanel />
          <GameTrack />
          <RaceSettings />
        </div>
      </main>
      <GameFooter />
    </div>
  );
}