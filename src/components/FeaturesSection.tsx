import { CircuitBoard, Car, Flame, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Procedural Tracks',
    description: 'Every race is unique with our procedurally generated tracks',
    icon: CircuitBoard,
  },
  {
    title: 'NFT Cars & Parts',
    description: 'Customize your car with unique NFT parts and level up',
    icon: Car,
  },
  {
    title: 'Gas Token Economy',
    description: 'Earn and spend Gas tokens in the game economy',
    icon: Flame,
  },
  {
    title: 'Daily Leaderboard',
    description: 'Compete daily for crypto rewards and exclusive prizes',
    icon: Trophy,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Game Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <feature.icon className="h-12 w-12 mb-4 text-blue-500" />
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}