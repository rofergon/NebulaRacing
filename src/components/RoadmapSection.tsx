import { CheckCircle2, Circle } from 'lucide-react';

const roadmapItems = [
  {
    date: 'Q1 2024',
    title: 'Beta Launch',
    description: 'Initial game release with core features and basic NFT integration',
    completed: true,
  },
  {
    date: 'Q2 2024',
    title: 'Garage Integration',
    description: 'Custom car modification system and part crafting',
    completed: false,
  },
  {
    date: 'Q3 2024',
    title: 'Level 4 Parts',
    description: 'New high-tier parts and advanced customization options',
    completed: false,
  },
  {
    date: 'Q4 2024',
    title: 'Special Tournaments',
    description: 'Competitive events with exclusive rewards and prizes',
    completed: false,
  },
];

export function RoadmapSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Roadmap
        </h2>
        <div className="max-w-3xl mx-auto">
          {roadmapItems.map((item, index) => (
            <div key={index} className="relative pl-8 pb-8">
              {/* Timeline line */}
              {index !== roadmapItems.length - 1 && (
                <div className="absolute left-[11px] top-2 h-full w-0.5 bg-blue-600" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-1">
                {item.completed ? (
                  <CheckCircle2 className="h-6 w-6 text-blue-500" />
                ) : (
                  <Circle className="h-6 w-6 text-gray-600" />
                )}
              </div>
              <div className="bg-gray-900 rounded-lg p-6">
                <span className="text-blue-400 font-semibold">{item.date}</span>
                <h3 className="text-xl font-semibold text-white mt-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}