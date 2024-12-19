import { ArrowRight, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy">
        <div className="absolute inset-0 bg-[url('/Background1-enhanced-transformed.png')] opacity-10 bg-cover bg-center" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          TurboChain
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Racing
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the future of racing with NFTs and crypto rewards
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            onClick={() => navigate('/game')}
          >
            Start Racing <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
            onClick={() => navigate('/tokenomics')}
          >
            Tokenomics <Coins className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}