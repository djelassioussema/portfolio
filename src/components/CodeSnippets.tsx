import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeSnippets: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const snippets = [
    {
      title: "Kubernetes Deployment with HPA",
      language: "yaml",
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  namespace: production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: nginx:1.21
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: web-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-app
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70`
    },
    {
      title: "Terraform AWS EKS Cluster",
      language: "hcl",
      code: `resource "aws_eks_cluster" "main" {
  name     = var.cluster_name
  role_arn = aws_iam_role.cluster.arn
  version  = "1.24"

  vpc_config {
    subnet_ids              = var.subnet_ids
    endpoint_private_access = true
    endpoint_public_access  = true
    public_access_cidrs     = var.public_access_cidrs
  }

  encryption_config {
    resources = ["secrets"]
    provider {
      key_id = aws_kms_key.eks.arn
    }
  }

  enabled_cluster_log_types = ["api", "audit", "authenticator", "controllerManager", "scheduler"]

  depends_on = [
    aws_iam_role_policy_attachment.cluster-AmazonEKSClusterPolicy,
    aws_iam_role_policy_attachment.cluster-AmazonEKSVPCResourceController,
  ]

  tags = var.tags
}

resource "aws_eks_node_group" "main" {
  cluster_name    = aws_eks_cluster.main.name
  node_group_name = "main"
  node_role_arn   = aws_iam_role.node_group.arn
  subnet_ids      = var.private_subnet_ids

  scaling_config {
    desired_size = 3
    max_size     = 10
    min_size     = 1
  }

  update_config {
    max_unavailable = 1
  }

  instance_types = ["t3.medium"]
  capacity_type  = "ON_DEMAND"

  depends_on = [
    aws_iam_role_policy_attachment.node-AmazonEKSWorkerNodePolicy,
    aws_iam_role_policy_attachment.node-AmazonEKS_CNI_Policy,
    aws_iam_role_policy_attachment.node-AmazonEC2ContainerRegistryReadOnly,
  ]

  tags = var.tags
}`
    },
    {
      title: "GitLab CI/CD Pipeline",
      language: "yaml",
      code: `stages:
  - build
  - test
  - security
  - deploy

variables:
  DOCKER_DRIVER: overlay2
  DOCKER_TLS_CERTDIR: "/certs"

build:
  stage: build
  image: docker:latest
  services:
    - docker:dind
  before_script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
  script:
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
  only:
    - main
    - develop

security_scan:
  stage: security
  image: docker:stable
  services:
    - docker:dind
  script:
    - docker run --rm -v /var/run/docker.sock:/var/run/docker.sock 
      -v $PWD:/tmp/.cache/ aquasec/trivy 
      --cache-dir /tmp/.cache/ image --exit-code 0 --no-progress 
      --format table $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
  allow_failure: true
  only:
    - main
    - develop

deploy_staging:
  stage: deploy
  image: bitnami/kubectl:latest
  script:
    - kubectl config use-context $KUBE_CONTEXT
    - kubectl set image deployment/app app=$CI_REGISTRY_IMAGE:$CI_COMMIT_SHA -n staging
    - kubectl rollout status deployment/app -n staging
  environment:
    name: staging
    url: https://staging.example.com
  only:
    - develop

deploy_production:
  stage: deploy
  image: bitnami/kubectl:latest
  script:
    - kubectl config use-context $KUBE_CONTEXT_PROD
    - kubectl set image deployment/app app=$CI_REGISTRY_IMAGE:$CI_COMMIT_SHA -n production
    - kubectl rollout status deployment/app -n production
  environment:
    name: production
    url: https://example.com
  when: manual
  only:
    - main`
    },
    {
      title: "Prometheus Monitoring Rules",
      language: "yaml",
      code: `groups:
- name: kubernetes-apps
  rules:
  - alert: KubePodCrashLooping
    expr: rate(kube_pod_container_status_restarts_total[5m]) > 0
    for: 15m
    labels:
      severity: warning
    annotations:
      summary: Pod {{ $labels.namespace }}/{{ $labels.pod }} is crash looping
      description: "Pod {{ $labels.namespace }}/{{ $labels.pod }} is restarting {{ printf "%.2f" $value }} times / 5 minutes."

  - alert: KubeDeploymentReplicasMismatch
    expr: |
      (
        kube_deployment_spec_replicas{job="kube-state-metrics"}
        !=
        kube_deployment_status_replicas_available{job="kube-state-metrics"}
      )
      and
      (
        changes(kube_deployment_status_replicas_updated{job="kube-state-metrics"}[10m])
        ==
        0
      )
    for: 15m
    labels:
      severity: warning
    annotations:
      summary: Deployment {{ $labels.namespace }}/{{ $labels.deployment }} has not matched the expected number of replicas
      description: "Deployment {{ $labels.namespace }}/{{ $labels.deployment }} has not matched the expected number of replicas for longer than 15 minutes."

  - alert: HighMemoryUsage
    expr: (node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes > 0.9
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: High memory usage on {{ $labels.instance }}
      description: "Memory usage is above 90% on {{ $labels.instance }}"

  - alert: HighCPUUsage
    expr: 100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: High CPU usage on {{ $labels.instance }}
      description: "CPU usage is above 80% on {{ $labels.instance }}"`
    }
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-800 border border-gray-700 rounded-lg p-4 font-mono mb-6">
              <span className="text-green-400">$ </span>
              <span className="text-white">cat ~/snippets/*.yaml | grep -v "^#"</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">Code Snippets</h2>
            <p className="text-gray-400">Production-ready configurations and automation scripts</p>
          </div>

          <div className="space-y-8">
            {snippets.map((snippet, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300"
              >
                <div className="bg-gray-700 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300 text-sm font-mono">{snippet.title}</span>
                    <span className="text-orange-400 text-xs font-mono bg-gray-600 px-2 py-1 rounded">
                      {snippet.language}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(snippet.code, index)}
                    className="flex items-center space-x-1 px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-sm transition-colors"
                  >
                    {copiedIndex === index ? (
                      <Check size={14} className="text-green-400" />
                    ) : (
                      <Copy size={14} className="text-gray-300" />
                    )}
                    <span className="text-gray-300 text-xs">
                      {copiedIndex === index ? 'Copied!' : 'Copy'}
                    </span>
                  </button>
                </div>
                <div className="p-0 bg-gray-900">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-gray-100 font-mono leading-relaxed block p-6">
                      {snippet.code}
                    </code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSnippets;