import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [commandIndex, setCommandIndex] = useState(0);

  const commands = [
    'engineering-scalable-platforms --mode=production',
    'kubectl get expertise --all-namespaces',
    'terraform plan -var="experience=senior"',
    'docker build -t devops-expert:latest .',
    'aws sts get-caller-identity'
  ];

  useEffect(() => {
    const command = commands[commandIndex];
    if (currentCommand.length < command.length) {
      const timeout = setTimeout(() => {
        setCurrentCommand(command.slice(0, currentCommand.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentCommand('');
        setCommandIndex((prev) => (prev + 1) % commands.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentCommand, commandIndex, commands]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-2xl mb-8 font-mono">
            <div className="bg-gray-700 px-4 py-2 flex items-center space-x-2 rounded-t-lg">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-300 text-sm ml-4">oussema@devops: ~</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">oussema@devops:~$</span>
                <span className="text-white">whoami</span>
              </div>
              <div className="text-orange-400 pl-4">
                &gt; DevOps &amp; Site Reliability Engineer
              </div>
              
              <div className="flex items-center space-x-2 mt-6">
                <span className="text-green-400">oussema@devops:~$</span>
                <span className="text-white">{currentCommand}</span>
                <span className={`text-white ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-purple-400 to-orange-500 bg-clip-text text-transparent">
              Oussema Jelassi
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-mono">
              Building scalable infrastructure with precision and reliability
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/oussema-jelassi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-500 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <ChevronRight className="mr-2" size={20} />
                LinkedIn Profile
              </a>
              <a
                href="mailto:djelassioussema@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <ChevronRight className="mr-2" size={20} />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;