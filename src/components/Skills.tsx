import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 90, icon: "🔶" },
        { name: "Azure", level: 85, icon: "🔷" },
        { name: "Google Cloud", level: 80, icon: "🟡" },
        { name: "DigitalOcean", level: 75, icon: "🌊" }
      ]
    },
    {
      title: "Container & Orchestration",
      skills: [
        { name: "Docker", level: 95, icon: "🐳" },
        { name: "Kubernetes", level: 90, icon: "⚓" },
        { name: "Helm", level: 85, icon: "🎛️" },
        { name: "Istio", level: 70, icon: "🕸️" }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 92, icon: "🏗️" },
        { name: "Ansible", level: 88, icon: "📋" },
        { name: "CloudFormation", level: 80, icon: "☁️" },
        { name: "Pulumi", level: 75, icon: "🚀" }
      ]
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "Prometheus", level: 88, icon: "📊" },
        { name: "Grafana", level: 90, icon: "📈" },
        { name: "ELK Stack", level: 85, icon: "🔍" },
        { name: "Datadog", level: 82, icon: "🐕" }
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
              <span className="text-white">ls -la /skills/</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">Technical Arsenal</h2>
            <p className="text-gray-400">Tools and technologies I use to build reliable systems</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden"
              >
                <div className="bg-gray-700 px-4 py-3">
                  <h3 className="text-lg font-semibold text-orange-400 font-mono">
                    {category.title}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-gray-100 font-mono">{skill.name}</span>
                        </div>
                        <span className="text-orange-400 text-sm font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;