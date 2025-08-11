import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "2022 - Present",
      description: [
        "Architected and implemented multi-cloud infrastructure serving 1M+ users",
        "Reduced deployment time by 75% through automated CI/CD pipelines",
        "Led migration from monolithic to microservices architecture",
        "Implemented comprehensive monitoring and alerting systems"
      ],
      technologies: ["AWS", "Kubernetes", "Terraform", "GitLab CI", "Prometheus"]
    },
    {
      title: "DevOps Engineer",
      company: "CloudTech Ventures",
      location: "San Francisco, CA",
      duration: "2020 - 2022",
      description: [
        "Managed containerized applications using Docker and Kubernetes",
        "Implemented Infrastructure as Code using Terraform and Ansible",
        "Established security best practices and compliance frameworks",
        "Collaborated with development teams on application architecture"
      ],
      technologies: ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins"]
    },
    {
      title: "System Administrator",
      company: "StartupCorp",
      location: "New York, NY",
      duration: "2019 - 2020",
      description: [
        "Maintained Linux-based server infrastructure",
        "Implemented backup and disaster recovery procedures",
        "Automated routine tasks using shell scripting and Python",
        "Provided 24/7 support for critical production systems"
      ],
      technologies: ["Linux", "Python", "Bash", "MySQL", "Apache"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-800 border border-gray-700 rounded-lg p-4 font-mono mb-6">
              <span className="text-green-400">$ </span>
              <span className="text-white">history | grep -E "experience|career"</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">Professional Journey</h2>
            <p className="text-gray-400">Building reliable systems and enabling teams to scale</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-orange-400 font-mono mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg text-white font-mono mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-orange-400 mr-2 mt-2 block w-1 h-1 bg-orange-400 rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 text-orange-400 rounded-full text-sm font-mono border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.linkedin.com/in/oussema-jelassi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-500 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="mr-2" size={20} />
              View Full LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;