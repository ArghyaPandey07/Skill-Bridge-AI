export type SkillProficiency = "Novice" | "Developing" | "Intermediate" | "Advanced" | "Expert";
export type EvidenceType = "project" | "github" | "certificate" | "assessment" | "projects" | "certificates" | "assessments";

export interface SkillEvidenceItem {
  id: string;
  type: EvidenceType;
  title: string;
  sourceName: string;
  url?: string;
  verifiedAt: string;
  confidenceContribution: number;
}

export interface SkillItem {
  id: string;
  name: string;
  category: "Core AI & Data" | "Systems & Frontend" | "Cloud & Infrastructure" | "Research & Methods";
  proficiency: SkillProficiency;
  confidence: number;
  evidenceCount: number;
  evidenceBreakdown: {
    projects: number;
    github: number;
    certificates: number;
    assessments: number;
  };
  evidenceList: SkillEvidenceItem[];
  marketDemand: "High" | "Critical" | "Emerging";
  unlockOpportunitiesCount: number;
  isGap?: boolean;
  gapImpactDescription?: string;
}

export const studentSkills: SkillItem[] = [
  {
    id: "skill-python",
    name: "Python",
    category: "Core AI & Data",
    proficiency: "Advanced",
    confidence: 91,
    evidenceCount: 4,
    evidenceBreakdown: {
      projects: 1,
      github: 2,
      certificates: 0,
      assessments: 1
    },
    evidenceList: [
      {
        id: "ev-py-1",
        type: "github",
        title: "Autonomous Drone Navigation Stack (2,400+ LOC, AsyncIO)",
        sourceName: "github.com/alexchen/drone-nav",
        verifiedAt: "2 hours ago",
        confidenceContribution: 28
      },
      {
        id: "ev-py-2",
        type: "github",
        title: "Vision Model Data Pipeline & Benchmark Harness",
        sourceName: "github.com/alexchen/vision-pipe",
        verifiedAt: "3 days ago",
        confidenceContribution: 24
      },
      {
        id: "ev-py-3",
        type: "project",
        title: "Campus AI Shuttle Tracking Engine",
        sourceName: "TreeHacks Project Submission",
        verifiedAt: "1 month ago",
        confidenceContribution: 22
      },
      {
        id: "ev-py-4",
        type: "assessment",
        title: "Algorithmic Python & Vectorization Benchmark",
        sourceName: "Verified CodeSignal Assessment (94th Percentile)",
        verifiedAt: "2 weeks ago",
        confidenceContribution: 17
      }
    ],
    marketDemand: "Critical",
    unlockOpportunitiesCount: 52
  },
  {
    id: "skill-ml",
    name: "Machine Learning",
    category: "Core AI & Data",
    proficiency: "Advanced",
    confidence: 84,
    evidenceCount: 3,
    evidenceBreakdown: {
      projects: 1,
      github: 1,
      certificates: 1,
      assessments: 0
    },
    evidenceList: [
      {
        id: "ev-ml-1",
        type: "project",
        title: "Autonomous Drone Obstacle Avoidance (PyTorch & YOLOv8)",
        sourceName: "Stanford Robotics Capstone",
        verifiedAt: "3 weeks ago",
        confidenceContribution: 32
      },
      {
        id: "ev-ml-2",
        type: "github",
        title: "Transformer Latency Optimizer Repo",
        sourceName: "github.com/alexchen/tiny-transformer",
        verifiedAt: "1 week ago",
        confidenceContribution: 27
      },
      {
        id: "ev-ml-3",
        type: "certificate",
        title: "Stanford CS229: Machine Learning Specialization",
        sourceName: "Stanford Online Credential #STFD-9482",
        verifiedAt: "3 months ago",
        confidenceContribution: 25
      }
    ],
    marketDemand: "Critical",
    unlockOpportunitiesCount: 44
  },
  {
    id: "skill-react",
    name: "React",
    category: "Systems & Frontend",
    proficiency: "Intermediate",
    confidence: 76,
    evidenceCount: 2,
    evidenceBreakdown: {
      projects: 1,
      github: 1,
      certificates: 0,
      assessments: 0
    },
    evidenceList: [
      {
        id: "ev-rc-1",
        type: "project",
        title: "Stanford Student Hub Event Coordination Dashboard",
        sourceName: "Production Deployment (1,200 Daily Active Users)",
        verifiedAt: "1 month ago",
        confidenceContribution: 42
      },
      {
        id: "ev-rc-2",
        type: "github",
        title: "Merged PR #42 in OpenCampus Ecosystem UI",
        sourceName: "github.com/opencampus/core-web",
        verifiedAt: "3 days ago",
        confidenceContribution: 34
      }
    ],
    marketDemand: "High",
    unlockOpportunitiesCount: 31
  },
  {
    id: "skill-sql",
    name: "SQL",
    category: "Systems & Frontend",
    proficiency: "Developing",
    confidence: 62,
    evidenceCount: 1,
    evidenceBreakdown: {
      projects: 0,
      github: 0,
      certificates: 0,
      assessments: 1
    },
    evidenceList: [
      {
        id: "ev-sql-1",
        type: "assessment",
        title: "Relational Schema Design & Join Optimization",
        sourceName: "Stanford CS145 Benchmark Assessment (Score: 78%)",
        verifiedAt: "1 month ago",
        confidenceContribution: 62
      }
    ],
    marketDemand: "Critical",
    unlockOpportunitiesCount: 37,
    isGap: true,
    gapImpactDescription: "Improving SQL from Developing to Advanced unlocks +37 campus & civic data opportunities"
  },
  {
    id: "skill-data-analysis",
    name: "Data Analysis",
    category: "Core AI & Data",
    proficiency: "Intermediate",
    confidence: 80,
    evidenceCount: 2,
    evidenceBreakdown: {
      projects: 1,
      github: 1,
      certificates: 0,
      assessments: 0
    },
    evidenceList: [
      {
        id: "ev-da-1",
        type: "github",
        title: "Bay Area Air Quality Temporal Trend Explorer",
        sourceName: "github.com/alexchen/air-quality-eda",
        verifiedAt: "2 weeks ago",
        confidenceContribution: 40
      },
      {
        id: "ev-da-2",
        type: "project",
        title: "Campus Dining Hall Waste Reduction Analysis",
        sourceName: "Stanford Sustainability Board Report",
        verifiedAt: "2 months ago",
        confidenceContribution: 40
      }
    ],
    marketDemand: "High",
    unlockOpportunitiesCount: 29
  },
  {
    id: "skill-research-method",
    name: "Research Methodology",
    category: "Research & Methods",
    proficiency: "Novice",
    confidence: 34,
    evidenceCount: 0,
    evidenceBreakdown: {
      projects: 0,
      github: 0,
      certificates: 0,
      assessments: 0
    },
    evidenceList: [],
    marketDemand: "Critical",
    unlockOpportunitiesCount: 24,
    isGap: true,
    gapImpactDescription: "Currently missing experimental protocol evidence. Key blocker for 4 tier-1 campus research labs."
  },
  {
    id: "skill-docker",
    name: "Docker & Containerization",
    category: "Cloud & Infrastructure",
    proficiency: "Novice",
    confidence: 40,
    evidenceCount: 0,
    evidenceBreakdown: {
      projects: 0,
      github: 0,
      certificates: 0,
      assessments: 0
    },
    evidenceList: [],
    marketDemand: "High",
    unlockOpportunitiesCount: 19,
    isGap: true,
    gapImpactDescription: "Packaging models as microservices is required for 19 campus engineering & lab roles."
  }
];

export interface SkillGapItem {
  id: string;
  skillName: string;
  category: string;
  currentConfidence: number;
  targetConfidence: number;
  urgency: "High" | "Medium";
  unlockedOpportunities: number;
  reason: string;
  recommendedAction: string;
  timeEstimate: string;
}

export const topSkillGaps: SkillGapItem[] = [
  {
    id: "gap-1",
    skillName: "Research Methodology & Paper Replication",
    category: "Research & Methods",
    currentConfidence: 34,
    targetConfidence: 75,
    urgency: "High",
    unlockedOpportunities: 24,
    reason: "Required by Stanford Vision & AI Lab. Current profile lacks formal peer review or ablation study documentation.",
    recommendedAction: "Complete the 1-week Vision Transformer ablation study module and commit the reproducible benchmark notebook.",
    timeEstimate: "5-7 days"
  },
  {
    id: "gap-2",
    skillName: "Advanced SQL & Geospatial Indexing",
    category: "Systems & Frontend",
    currentConfidence: 62,
    targetConfidence: 85,
    urgency: "High",
    unlockedOpportunities: 37,
    reason: "Blocks Community Climate Analyst and 36 other civic data roles requiring PostGIS & query optimization.",
    recommendedAction: "Verify PostGIS query optimization assessment on campus data sandbox.",
    timeEstimate: "3-4 days"
  },
  {
    id: "gap-3",
    skillName: "Docker & MLOps Deployment",
    category: "Cloud & Infrastructure",
    currentConfidence: 40,
    targetConfidence: 80,
    urgency: "Medium",
    unlockedOpportunities: 19,
    reason: "Required by ACM Hackathon Platform for containerizing judging microservices.",
    recommendedAction: "Containerize the autonomous drone REST API and add a GitHub Actions CI workflow.",
    timeEstimate: "2 days"
  }
];
