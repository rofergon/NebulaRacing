import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Lead Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'Blockchain expert with 8+ years of gaming experience',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Sarah Johnson',
    role: 'Game Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'Former AAA game designer passionate about Web3',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Mike Rodriguez',
    role: 'Smart Contract Engineer',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    bio: 'DeFi protocol developer and racing enthusiast',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
];

export function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 text-center"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-blue-400 mb-2">{member.role}</p>
              <p className="text-gray-400 mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={member.social.github} className="text-gray-400 hover:text-blue-400">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}