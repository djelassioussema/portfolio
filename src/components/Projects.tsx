import React from 'react';
import { Github, ExternalLink, Server, Cloud, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure Platform",
      description: "Terraform-based infrastructure platform supporting AWS, Azure, and GCP with automated compliance and cost optimization.",
      icon: <Cloud className="w-6 h-6" />,
      technologies: ["Terraform", "AWS", "Azure", "GCP", "Python"],
      highlights: [
        "99.9% uptime across all environments",
        "40% cost reduction through automation",
        "SOC 2 Type II compliant infrastructure"
      ]
    },
    {
      title: "Kubernetes GitOps Pipeline",
      description: "Complete GitOps workflow using ArgoCD, Helm, and automated testing for continuous deployment of microservices.",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Kubernetes", "ArgoCD", "Helm", "GitLab CI", "Istio"],
      highlights: [
        "Zero-downtime deployments",
        "Automated rollback mechanisms",
        "Blue-green deployment strategy"
      ]
    },
    {
      title: "Security Monitoring Stack",
      description: "Comprehensive security monitoring solution with threat detection, compliance reporting, and incident response automation.",
      icon: <Shield className="w-6 h-6" />,
      technologies: ["ELK Stack", "Prometheus", "Falco", "OPA", "Python"],
      highlights: [
        "Real-time threat detection",
        "Automated incident response",
        "Compliance dashboard and reporting"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono mb-6">
              <span className="text-green-400">$ </span>
              <span className="text-white">find ./projects -type f -name "*.yaml" | head -10</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">Featured Projects</h2>
            <p className="text-gray-400">Infrastructure solutions that scale and secure applications</p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="text-orange-400">{project.icon}</div>
                      <h3 className="text-2xl font-semibold text-white font-mono">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                        <Github size={20} className="text-gray-400" />
                      </button>
                      <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                        <ExternalLink size={20} className="text-gray-400" />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-orange-400 font-mono mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-700 text-gray-100 rounded-full text-sm font-mono border border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-orange-400 font-mono mb-3">Key Achievements</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="text-orange-400 mr-2 mt-1.5 block w-1 h-1 bg-orange-400 rounded-full flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;