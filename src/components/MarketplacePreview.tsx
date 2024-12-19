import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

const previewNFTs = [
  {
    name: 'Turbo X-1',
    type: 'Car',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80',
    price: '0.5 ETH',
  },
  {
    name: 'Quantum Engine',
    type: 'Part',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80',
    price: '0.2 ETH',
  },
  {
    name: 'Cyber Wheels',
    type: 'Part',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80',
    price: '0.1 ETH',
  },
];

export function MarketplacePreview() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          NFT Marketplace
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewNFTs.map((nft, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{nft.name}</h3>
                    <p className="text-gray-400">{nft.type}</p>
                  </div>
                  <p className="text-blue-400 font-semibold">{nft.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Visit Marketplace
          </Button>
        </div>
      </div>
    </section>
  );
}