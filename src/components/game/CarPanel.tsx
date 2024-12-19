import { Car, Gauge, Battery } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export function CarPanel() {
  return (
    <div className="h-full flex flex-col bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">Selected Car</h2>
          <p className="text-sm text-gray-400">NFT ID #4578</p>
        </div>
      </div>
      
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 mb-4">
        <img
          src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80"
          alt="Selected car"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
          <div className="flex items-center">
            <Car className="h-5 w-5 text-blue-400 mr-2" />
            <span className="text-gray-200">Quantum X-1</span>
          </div>
          <span className="text-blue-400 font-semibold">Rare</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <Gauge className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-gray-200">Performance</span>
            </div>
            <span className="text-gray-400">Level 3</span>
          </div>
          <Progress value={75} className="bg-gray-700 h-2" />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <Battery className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-gray-200">Durability</span>
            </div>
            <span className="text-gray-400">85%</span>
          </div>
          <Progress value={85} className="bg-gray-700 h-2" />
        </div>
      </div>
    </div>
  );
}