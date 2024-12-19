import { Wallet, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function GameHeader() {
  return (
    <header className="w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-screen-2xl">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">TurboChain</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="bg-gray-800 rounded-full px-4 py-1.5 flex items-center">
            <Wallet className="h-4 w-4 text-yellow-500 mr-2" />
            <span className="text-white font-medium">1,234 GAS</span>
          </div>
          
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}