import { EvidenceType } from "./skillsData";

export interface EvidencePillar {
  type: EvidenceType;
  title: string;
  count: number;
  description: string;
  badgeColor: string;
  iconName: string;
  verifiedCount: number;
  recentHighlight: string;
}

export const evidencePillars: EvidencePillar[] = [
  {
    type: "projects",
    title: "Projects",
    count: 3,
    description: "Production code, capstones, and deployed campus applications",
    badgeColor: "emerald",
    iconName: "FolderGit2",
    verifiedCount: 3,
    recentHighlight: "Autonomous Drone Navigation Capstone deployed with PyTorch"
  },
  {
    type: "github",
    title: "GitHub",
    count: 6,
    description: "Analyzed repositories, merged pull requests, and commit cadence",
    badgeColor: "cyan",
    iconName: "GitPullRequest",
    verifiedCount: 6,
    recentHighlight: "Merged PR #42 in OpenCampus UI & 48 commits to drone-nav"
  },
  {
    type: "certificates",
    title: "Certificates",
    count: 2,
    description: "Verified institutional credentials and academic course credits",
    badgeColor: "violet",
    iconName: "Award",
    verifiedCount: 2,
    recentHighlight: "Stanford CS229: Machine Learning Specialization Credential"
  },
  {
    type: "assessments",
    title: "Assessments",
    count: 3,
    description: "Proctored benchmarks, code evaluations, and algorithmic challenges",
    badgeColor: "amber",
    iconName: "FileCheck",
    verifiedCount: 3,
    recentHighlight: "Algorithmic Python Benchmark â 94th Percentile"
  }
];

export interface EvidenceTimelineItem {
  id: string;
  skillName: string;
  title: string;
  source: string;
  type: EvidenceType;
  timestamp: string;
  confidenceDelta: string;
  verifiedStatus: "verified" | "pending" | "enhanced";
  proofHash: string;
}

export const evidenceTimeline: EvidenceTimelineItem[] = [
  {
    id: "tl-1",
    skillName: "Python & Computer Vision",
    title: "Pushed 14 commits to autonomous-drone-nav (AsyncIO + OpenCV pipeline)",
    source: "github.com/alexchen/drone-nav",
    type: "github",
    timestamp: "2 hours ago",
    confidenceDelta: "+4% confidence",
    verifiedStatus: "verified",
    proofHash: "git:8f1e92d"
  },
  {
    id: "tl-2",
    skillName: "Machine Learning",
    title: "Completed Stanford CS229 Machine Learning benchmark (88th percentile)",
    source: "Stanford Course Evaluation Harness",
    type: "assessments",
    timestamp: "Yesterday",
    confidenceDelta: "+8% confidence",
    verifiedStatus: "verified",
    proofHash: "eval:cs229-3991"
  },
  {
    id: "tl-3",
    skillName: "React & Next.js",
    title: "Merged Pull Request #42 in OpenCampus Ecosystem UI",
    source: "github.com/opencampus/core-web",
    type: "github",
    timestamp: "3 days ago",
    confidenceDelta: "+6% confidence",
    verifiedStatus: "verified",
    proofHash: "pr:42-merged"
  },
  {
    id: "tl-4",
    skillName: "Machine Learning & Neural Nets",
    title: "Linked Coursera Deep Learning Specialization Certificate",
    source: "DeepLearning.AI Verified Certificate",
    type: "certificates",
    timestamp: "5 days ago",
    confidenceDelta: "+5% confidence",
    verifiedStatus: "verified",
    proofHash: "cert:dl-ai-891"
  },
  {
    id: "tl-5",
    skillName: "SQL & Schema Architecture",
    title: "Submitted Stanford CS145 Relational Query Optimization Benchmark",
    source: "Stanford CS Lab Assessment",
    type: "assessments",
    timestamp: "2 weeks ago",
    confidenceDelta: "+12% confidence",
    verifiedStatus: "verified",
    proofHash: "eval:sql-opt-145"
  }
];
