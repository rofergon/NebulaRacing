import { MessageCircle, Twitter, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function GameFooter() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-screen-2xl">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <MessageCircle className="h-4 w-4 mr-2" />
            Discord
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Twitter className="h-4 w-4 mr-2" />
            Twitter
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
          onClick={() => navigate('/')}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Exit Game
        </Button>
      </div>
    </footer>
  );
}