import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono mb-6">
              <span className="text-green-400">$ </span>
              <span className="text-white">echo "Let's build something amazing together"</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">Get In Touch</h2>
            <p className="text-gray-400 text-lg">
              Ready to discuss your next infrastructure project or collaboration?
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg font-mono mb-12">
            <div className="bg-gray-700 px-4 py-2 flex items-center space-x-2 rounded-t-lg">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-300 text-sm ml-4">contact.sh</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">oussema@devops:~$</span>
                <span className="text-white">contact --method=email</span>
              </div>
              <div className="text-orange-400 pl-4">
                &gt; djelassioussema@gmail.com
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-green-400">oussema@devops:~$</span>
                <span className="text-white">socials --platform=all</span>
              </div>
              <div className="text-orange-400 pl-4">
                &gt; LinkedIn: /in/oussema-jelassi
              </div>
              <div className="text-orange-400 pl-4">
                &gt; GitHub: Available upon request
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                <Mail className="text-orange-400" size={24} />
                <div>
                  <h3 className="text-white font-semibold font-mono">Email</h3>
                  <p className="text-gray-400">djelassioussema@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                <MapPin className="text-orange-400" size={24} />
                <div>
                  <h3 className="text-white font-semibold font-mono">Location</h3>
                  <p className="text-gray-400">Open to Remote Opportunities</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <a
                href="https://www.linkedin.com/in/oussema-jelassi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-orange-500 transition-all transform hover:scale-105"
              >
                <Linkedin className="text-orange-400" size={24} />
                <div>
                  <h3 className="text-white font-semibold font-mono">LinkedIn</h3>
                  <p className="text-gray-400">Professional Network</p>
                </div>
              </a>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                <Github className="text-orange-400" size={24} />
                <div>
                  <h3 className="text-white font-semibold font-mono">GitHub</h3>
                  <p className="text-gray-400">Code Portfolio</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 font-mono">
              <div className="text-green-400 mb-2">$ uptime</div>
              <div className="text-gray-100">
                Available for new opportunities and exciting challenges in DevOps and Cloud Infrastructure
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-500 font-mono">
              © 2024 Oussema Jelassi. Built with React + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;