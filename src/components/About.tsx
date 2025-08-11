import React from 'react';
import { Server, Cloud, Shield, Code2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl font-mono mb-12">
            <div className="bg-gray-700 px-4 py-2 flex items-center space-x-2 rounded-t-lg">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-300 text-sm ml-4">about.sh</span>
            </div>
            <div className="p-6">
              <div className="text-green-400 mb-2">$ cat /home/oussema/profile.txt</div>
              <div className="text-gray-100 pl-4 space-y-2">
                <p>Passionate DevOps and Site Reliability Engineer with expertise in building</p>
                <p>and maintaining scalable cloud infrastructure. Specialized in automation,</p>
                <p>containerization, and implementing CI/CD pipelines that enable teams to</p>
                <p>deploy with confidence at scale.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud Architecture",
                description: "AWS, Azure, GCP multi-cloud solutions"
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "Infrastructure",
                description: "Kubernetes, Terraform, Ansible automation"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Security & Monitoring",
                description: "Zero-trust architecture, observability"
              },
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "CI/CD Pipelines",
                description: "GitLab CI, GitHub Actions, Jenkins"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-orange-400 mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-white font-mono">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;