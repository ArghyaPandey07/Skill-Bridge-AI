export interface SkillMatchDetail {
  skillName: string;
  status: "Strong evidence" | "2 projects" | "GitHub evidence" | "Moderate" | "Missing";
  statusType: "strong" | "moderate" | "missing";
  evidenceNote: string;
  requiredProficiency: string;
  userProficiency?: string;
}

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  organizationLogo?: string;
  type: "Campus Research Lab" | "Student Organization" | "Community Fellowship" | "Civic Tech";
  location: string;
  deadline: string;
  deadlineDays: number;
  matchScore: number;
  readinessScore: number;
  compensation: string;
  commitment: string;
  summary: string;
  overview: string;
  requirements: string[];
  responsibilities: string[];
  skillsRequired: string[];
  whyYouMatch: SkillMatchDetail[];
  readinessRoadmap: {
    stepNumber: number;
    title: string;
    description: string;
    timeEstimate: string;
    impactGain: string;
    status: "completed" | "in-progress" | "recommended";
  }[];
  organizerContact: {
    name: string;
    role: string;
    avatar: string;
    labOrDepartment: string;
  };
}

export const opportunitiesList: Opportunity[] = [
  {
    id: "ai-research-intern",
    title: "AI Research Intern",
    organization: "Stanford Vision & AI Lab",
    type: "Campus Research Lab",
    location: "Gates Computer Science Building, Stanford",
    deadline: "5 days left (Sept 16)",
    deadlineDays: 5,
    matchScore: 92,
    readinessScore: 81,
    compensation: "$28/hr or 4 Research Units",
    commitment: "12-15 hrs/week â¢ Autumn Quarter",
    summary: "Conduct empirical ablation studies on multimodal vision-language models for autonomous navigation testbeds.",
    overview: "The Stanford Vision & AI Lab (SVIL) is investigating lightweight robotic perception architectures capable of real-time zero-shot spatial reasoning. You will work alongside senior PhD candidates and Prof. Fei-Fei Li's research group to benchmark transformer latency across edge robotic platforms.",
    requirements: [
      "Demonstrated proficiency in Python (NumPy, PyTorch, AsyncIO)",
      "Hands-on experience with computer vision models (YOLO, ViT, or CLIP)",
      "Familiarity with benchmark evaluation pipelines and reproducibility standards",
      "Comfort working in Linux server environments with Slurm GPU clusters"
    ],
    responsibilities: [
      "Implement and test benchmark pipelines for vision-transformer token pruning",
      "Evaluate inference latency on simulated edge drone robotics workloads",
      "Prepare visualization artifacts and experimental tables for CVPR paper submission",
      "Participate in weekly lab reading groups and technical critiques"
    ],
    skillsRequired: ["Python", "Machine Learning", "Data Analysis", "Statistics", "Research Methodology"],
    whyYouMatch: [
      {
        skillName: "Python",
        status: "Strong evidence",
        statusType: "strong",
        evidenceNote: "GitHub repo drone-nav (2,400+ LOC) + 94th percentile CodeSignal benchmark",
        requiredProficiency: "Advanced",
        userProficiency: "Advanced (91% confidence)"
      },
      {
        skillName: "Machine Learning",
        status: "2 projects",
        statusType: "strong",
        evidenceNote: "Autonomous Drone Obstacle Avoidance Capstone + CS229 Specialization",
        requiredProficiency: "Advanced",
        userProficiency: "Advanced (84% confidence)"
      },
      {
        skillName: "Data Analysis",
        status: "GitHub evidence",
        statusType: "strong",
        evidenceNote: "pandas/numpy benchmark pipelines verified in vision-pipe repo",
        requiredProficiency: "Intermediate",
        userProficiency: "Intermediate (80% confidence)"
      },
      {
        skillName: "Statistics",
        status: "Moderate",
        statusType: "moderate",
        evidenceNote: "Stanford CS109 Probability for Computer Scientists course completed",
        requiredProficiency: "Intermediate",
        userProficiency: "Developing (65% confidence)"
      },
      {
        skillName: "Research Methodology",
        status: "Missing",
        statusType: "missing",
        evidenceNote: "Profile lacks published paper review or documented scientific ablation study",
        requiredProficiency: "Intermediate",
        userProficiency: "Novice (34% confidence)"
      }
    ],
    readinessRoadmap: [
      {
        stepNumber: 1,
        title: "Verify Python & PyTorch Tensor Pipeline",
        description: "Your autonomous drone code demonstrates the exact tensor pipeline required for lab experiments.",
        timeEstimate: "Completed",
        impactGain: "+45% Base Match",
        status: "completed"
      },
      {
        stepNumber: 2,
        title: "Review Edge Token Pruning Paper",
        description: "Review 'Fast-ViT: Edge Spatial Transformers' and document 1 reproducible evaluation run.",
        timeEstimate: "3 days",
        impactGain: "+11% Readiness",
        status: "in-progress"
      },
      {
        stepNumber: 3,
        title: "Submit Research Methodology Reflection",
        description: "Write an ablation protocol detailing control baselines and confidence intervals.",
        timeEstimate: "2 days",
        impactGain: "+8% Readiness",
        status: "recommended"
      }
    ],
    organizerContact: {
      name: "Dr. Elena Rostova",
      role: "Postdoctoral Research Fellow",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
      labOrDepartment: "Stanford Vision & Learning Lab (SVL)"
    }
  },
  {
    id: "fullstack-lead-hackathon",
    title: "Full-Stack Lead - Campus Hackathon Platform",
    organization: "Stanford ACM Chapter",
    type: "Student Organization",
    location: "Huang Engineering Center / Hybrid",
    deadline: "12 days left (Sept 23)",
    deadlineDays: 12,
    matchScore: 88,
    readinessScore: 74,
    compensation: "Leadership Fellowship + $1,500 Tech Grant",
    commitment: "8-10 hrs/week â¢ 2 Quarters",
    summary: "Lead the software engineering team building the participant registration and live judging portal for TreeHacks 2027.",
    overview: "Stanford ACM develops mission-critical open-source software powering collegiate student initiatives. As Full-Stack Lead, you will spearhead our next-generation event infrastructure supporting 2,500+ hackers, 120 sponsor mentors, and 30 simultaneous judging tracks.",
    requirements: [
      "Demonstrated experience with React, Next.js, and TypeScript in production or heavy personal projects",
      "Experience integrating relational databases (PostgreSQL/Supabase) and real-time websockets",
      "Familiarity with role-based auth, rate limiting, and component libraries",
      "Eagerness to mentor 4 junior student developers"
    ],
    responsibilities: [
      "Architect Next.js App Router application with server actions and edge caching",
      "Refactor judging evaluation matrix to handle concurrent submission scoring",
      "Run weekly agile code reviews and maintain CI/CD pipelines",
      "Collaborate with design leads on Figma system parity"
    ],
    skillsRequired: ["React", "TypeScript", "Next.js", "SQL", "System Design"],
    whyYouMatch: [
      {
        skillName: "React & Next.js",
        status: "Strong evidence",
        statusType: "strong",
        evidenceNote: "Stanford Student Hub event coordinator (1.2k DAU) + Next.js App Router experience",
        requiredProficiency: "Advanced",
        userProficiency: "Intermediate (76% confidence)"
      },
      {
        skillName: "TypeScript",
        status: "GitHub evidence",
        statusType: "strong",
        evidenceNote: "Merged PR #42 in OpenCampus UI with strict TypeScript types",
        requiredProficiency: "Intermediate",
        userProficiency: "Intermediate (74% confidence)"
      },
      {
        skillName: "Python APIs",
        status: "Strong evidence",
        statusType: "strong",
        evidenceNote: "FastAPI and AsyncIO background from drone and event backends",
        requiredProficiency: "Intermediate",
        userProficiency: "Advanced (91% confidence)"
      },
      {
        skillName: "SQL & Relational DB",
        status: "Moderate",
        statusType: "moderate",
        evidenceNote: "CS145 relational assessment verified, but missing multi-tenant schema proof",
        requiredProficiency: "Intermediate",
        userProficiency: "Developing (62% confidence)"
      },
      {
        skillName: "Docker Containerization",
        status: "Missing",
        statusType: "missing",
        evidenceNote: "Microservice judging runners require containerized sandboxes",
        requiredProficiency: "Developing",
        userProficiency: "Novice (40% confidence)"
      }
    ],
    readinessRoadmap: [
      {
        stepNumber: 1,
        title: "Verify React Component Library Experience",
        description: "Your open-source pull request in OpenCampus demonstrates required frontend skills.",
        timeEstimate: "Completed",
        impactGain: "+42% Base Match",
        status: "completed"
      },
      {
        stepNumber: 2,
        title: "Complete PostgreSQL Multi-Tenant Sandbox",
        description: "Build a schema migration with row-level security for team judge assignments.",
        timeEstimate: "3 days",
        impactGain: "+14% Readiness",
        status: "in-progress"
      },
      {
        stepNumber: 3,
        title: "Containerize Next.js + Postgres in Docker Compose",
        description: "Provide a working compose script that passes ACM integration test suite.",
        timeEstimate: "2 days",
        impactGain: "+12% Readiness",
        status: "recommended"
      }
    ],
    organizerContact: {
      name: "Marcus Vance",
      role: "VP of Technology",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80",
      labOrDepartment: "Stanford ACM & TreeHacks Organizing Committee"
    }
  },
  {
    id: "community-climate-analyst",
    title: "Community Climate Data Analyst",
    organization: "Bay Area Climate Action Network",
    type: "Community Fellowship",
    location: "Civic Center / Remote",
    deadline: "18 days left (Sept 29)",
    deadlineDays: 18,
    matchScore: 79,
    readinessScore: 65,
    compensation: "$2,500 Community Fellowship Stipend",
    commitment: "6-8 hrs/week â¢ 3 Months",
    summary: "Analyze municipal open sensor data across microclimates to recommend high-priority urban tree canopy corridors.",
    overview: "The Bay Area Climate Action Network works with grassroots neighborhood councils to combat urban heat islands. We collect thousands of IoT sensor telemetry logs across underserved East Bay transit corridors to advocate for targeted municipal green infrastructure investments.",
    requirements: [
      "Strong Python data wrangling and time-series analysis (Pandas, Polars, GeoPandas)",
      "Experience with relational databases and spatial SQL queries (PostGIS)",
      "Ability to translate statistical trends into compelling visual stories for city planners",
      "Passion for environmental justice and community impact"
    ],
    responsibilities: [
      "Aggregate daily surface temperature and particulate matter sensor feeds",
      "Construct spatial regression models identifying vulnerable pedestrian paths",
      "Generate interactive choropleth maps for municipal council presentations",
      "Coordinate with local youth environmental advocates"
    ],
    skillsRequired: ["Python", "Data Analysis", "SQL", "Spatial Modeling", "Communication"],
    whyYouMatch: [
      {
        skillName: "Python",
        status: "Strong evidence",
        statusType: "strong",
        evidenceNote: "Demonstrated across multiple repositories and automated pipelines",
        requiredProficiency: "Intermediate",
        userProficiency: "Advanced (91% confidence)"
      },
      {
        skillName: "Data Analysis",
        status: "GitHub evidence",
        statusType: "strong",
        evidenceNote: "Air quality EDA repo and campus sustainability study verified",
        requiredProficiency: "Intermediate",
        userProficiency: "Intermediate (80% confidence)"
      },
      {
        skillName: "Machine Learning",
        status: "Moderate",
        statusType: "moderate",
        evidenceNote: "Capable of time-series regressions though role prioritizes spatial EDA",
        requiredProficiency: "Developing",
        userProficiency: "Advanced (84% confidence)"
      },
      {
        skillName: "SQL & PostGIS",
        status: "Missing",
        statusType: "missing",
        evidenceNote: "No spatial indexing or ST_Contains queries present in current Skill DNA",
        requiredProficiency: "Intermediate",
        userProficiency: "Developing (62% confidence)"
      },
      {
        skillName: "Spatial Modeling",
        status: "Missing",
        statusType: "missing",
        evidenceNote: "GeoPandas / Folium spatial mapping evidence needed",
        requiredProficiency: "Developing",
        userProficiency: "Novice (25% confidence)"
      }
    ],
    readinessRoadmap: [
      {
        stepNumber: 1,
        title: "Verify Environmental EDA Repository",
        description: "Your Bay Area air quality exploration demonstrates foundational EDA competence.",
        timeEstimate: "Completed",
        impactGain: "+38% Base Match",
        status: "completed"
      },
      {
        stepNumber: 2,
        title: "Complete 3-Hour GeoPandas Spatial Tutorial",
        description: "Join county census boundary GeoJSON with NOAA temperature stations.",
        timeEstimate: "1 day",
        impactGain: "+18% Readiness",
        status: "in-progress"
      },
      {
        stepNumber: 3,
        title: "Solve 2 PostGIS Spatial Join Queries",
        description: "Prove ability to calculate radius buffer intersections on geospatial data.",
        timeEstimate: "2 days",
        impactGain: "+17% Readiness",
        status: "recommended"
      }
    ],
    organizerContact: {
      name: "Maya Hernandez",
      role: "Civic Science Director",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
      labOrDepartment: "Bay Area Climate Action Network"
    }
  },
  {
    id: "quantum-student-fellow",
    title: "Quantum Algorithms Student Fellow",
    organization: "Stanford Quantum Information Group",
    type: "Campus Research Lab",
    location: "McCullough Building / Physics Corner",
    deadline: "24 days left (Oct 5)",
    deadlineDays: 24,
    matchScore: 68,
    readinessScore: 52,
    compensation: "$26/hr or Physics 199 Units",
    commitment: "10 hrs/week â¢ Academic Year",
    summary: "Simulate variational quantum eigensolvers (VQE) for molecular energy ground state estimation.",
    overview: "Work with theoretical physics and CS faculty on noise-mitigated quantum circuit simulation algorithms using Qiskit and PennyLane.",
    requirements: ["Linear algebra and quantum mechanics basics", "Python proficiency", "Scientific computing libraries"],
    responsibilities: ["Implement circuit noise models", "Benchmark gradient descent optimizers on noisy quantum gates"],
    skillsRequired: ["Python", "Quantum Mechanics", "Linear Algebra", "Qiskit"],
    whyYouMatch: [
      {
        skillName: "Python",
        status: "Strong evidence",
        statusType: "strong",
        evidenceNote: "Scientific computing and vectorization verified",
        requiredProficiency: "Advanced",
        userProficiency: "Advanced (91%)"
      },
      {
        skillName: "Linear Algebra",
        status: "Moderate",
        statusType: "moderate",
        evidenceNote: "MATH 51 completed with distinction",
        requiredProficiency: "Advanced",
        userProficiency: "Intermediate (70%)"
      },
      {
        skillName: "Qiskit & Circuit Simulation",
        status: "Missing",
        statusType: "missing",
        evidenceNote: "No quantum circuit evidence in DNA",
        requiredProficiency: "Developing",
        userProficiency: "Novice (15%)"
      }
    ],
    readinessRoadmap: [],
    organizerContact: {
      name: "Prof. David Schuster",
      role: "Principal Investigator",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
      labOrDepartment: "Department of Applied Physics"
    }
  },
  {
    id: "civic-mobile-developer",
    title: "Civic Transit Mobile Engineer",
    organization: "San Jose Urban Mobility Initiative",
    type: "Civic Tech",
    location: "San Jose Downtown / Hybrid",
    deadline: "28 days left (Oct 9)",
    deadlineDays: 28,
    matchScore: 74,
    readinessScore: 61,
    compensation: "$22/hr Civic Tech Grant",
    commitment: "10-12 hrs/week",
    summary: "Enhance accessible GTFS real-time transit alerts for low-income commuters across Santa Clara Valley.",
    overview: "Build open-source React Native and web accessibility features ensuring paratransit riders receive reliable real-time route deviations.",
    requirements: ["React/React Native experience", "REST/GraphQL API integration", "WCAG AA accessibility adherence"],
    responsibilities: ["Develop audio cue routing components", "Integrate GTFS-RT protobuf streaming feeds"],
    skillsRequired: ["React", "TypeScript", "Accessibility", "API Design"],
    whyYouMatch: [
      {
        skillName: "React",
        status: "Strong evidence",
        statusType: "strong",
        evidenceNote: "Stanford Student Hub event coordinator (1.2k DAU)",
        requiredProficiency: "Intermediate",
        userProficiency: "Intermediate (76%)"
      },
      {
        skillName: "TypeScript",
        status: "GitHub evidence",
        statusType: "strong",
        evidenceNote: "PR #42 in OpenCampus UI",
        requiredProficiency: "Intermediate",
        userProficiency: "Intermediate (74%)"
      },
      {
        skillName: "Accessibility (a11y)",
        status: "Missing",
        statusType: "missing",
        evidenceNote: "No formal WCAG verification in Skill DNA",
        requiredProficiency: "Developing",
        userProficiency: "Novice (20%)"
      }
    ],
    readinessRoadmap: [],
    organizerContact: {
      name: "Teresa Morales",
      role: "Executive Director",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
      labOrDepartment: "San Jose Urban Mobility Initiative"
    }
  }
];
