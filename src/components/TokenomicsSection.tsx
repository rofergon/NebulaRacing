import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TokenomicsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Tokenomics & Vesting
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Tokenomics Chart */}
            <div className="aspect-square rounded-full border-4 border-blue-500 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-white">15%</span>
                  <span className="text-gray-400">Dev Team</span>
                </div>
              </div>
              {/* Add more chart segments here */}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Development Team Vesting
              </h3>
              <p className="text-gray-300 mb-4">
                15% of the total token supply is allocated to the development team,
                with a 6-month linear vesting schedule to ensure long-term
                commitment to the project.
              </p>
              <Button variant="outline" className="group">
                View Smart Contract
                <ExternalLink className="ml-2 h-4 w-4 group-hover:text-blue-500" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}