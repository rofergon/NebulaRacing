import { Settings, Wrench, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RaceSettings() {
  return (
    <div className="h-full flex flex-col bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">Race Settings</h2>
          <p className="text-sm text-gray-400">Configure your race</p>
        </div>
      </div>
      
      <div className="flex-1 space-y-4">
        <Button 
          variant="outline" 
          className="w-full justify-start bg-gray-800/50 hover:bg-gray-700/50"
        >
          <Settings className="mr-2 h-4 w-4" />
          Change Car
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full justify-start bg-gray-800/50 hover:bg-gray-700/50" 
          disabled
        >
          <Wrench className="mr-2 h-4 w-4" />
          Visit Garage
        </Button>
        
        <div className="pt-4 border-t border-gray-700">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            Game Guide
          </Button>
        </div>
      </div>
    </div>
  );
}