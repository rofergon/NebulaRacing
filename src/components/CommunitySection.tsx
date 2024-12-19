import { MessageCircle, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CommunitySection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">
          Join Our Community
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Be part of the future of racing. Join our community to get early access,
          exclusive rewards, and connect with other racers.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Join Discord
          </Button>
          <Button
            size="lg"
            className="bg-[#1DA1F2] hover:bg-[#1A8CD8] text-white"
          >
            <Twitter className="mr-2 h-5 w-5" />
            Follow on Twitter
          </Button>
        </div>
      </div>
    </section>
  );
}