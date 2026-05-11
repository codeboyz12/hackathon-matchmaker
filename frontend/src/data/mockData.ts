export const CURRENT_USER_ID = "u1";

export type Role = 
  | "Developer" 
  | "Business" 
  | "UI/UX Designer" 
  | "Marketing" 
  | "AI / Data" 
  | "Pitching";

export interface SkillBank {
  rankOverall: "Bronze" | "Silver" | "Gold" | "Diamond";
  roleMastery: Record<Role, number>;
  hardSkills: { name: string; level: string; count: number }[];
  softSkillScore: number;
  roleSoftSkills: { role: Role; score: number }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  bio: string;
  university: string;
  birthDate: string;
  github?: string;
  linkedin?: string;
  roles: Role[];
  skillBank: SkillBank;
}

export const mockUsers: Record<string, User> = {
  u1: {
    id: "u1",
    name: "Murchy D.Luffy",
    email: "marchydluffy@gmail.com",
    avatarUrl: "/avatar.png",
    bio: "ฉันจะเป็นราชาโจรสลัดให้ได้เลย เหมียวโอ่ง เริดเลยหละ",
    university: "king mongkut's university of technology thonburi",
    birthDate: "5 May 2005",
    github: "github.com/marchydluffy",
    linkedin: "th.linkedin.com/marchydluffy",
    roles: ["Developer", "AI / Data"],
    skillBank: {
      rankOverall: "Gold",
      roleMastery: { 
        "Developer": 8, 
        "Business": 0, 
        "UI/UX Designer": 0, 
        "Marketing": 0, 
        "AI / Data": 5, 
        "Pitching": 1 
      },
      hardSkills: [
        { name: "React", level: "gold", count: 8 },
        { name: "NextJS", level: "gold", count: 7 },
        { name: "LLM", level: "diamond", count: 12 },
        { name: "Python", level: "gold", count: 5 }
      ],
      softSkillScore: 4.9,
      roleSoftSkills: [
        { role: "Developer", score: 4.8 },
        { role: "AI / Data", score: 4.9 }
      ]
    }
  },
  u2: {
    id: "u2",
    name: "Chanut Sunatho",
    email: "chanut@example.com",
    avatarUrl: "https://i.pravatar.cc/150?u=1",
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    university: "Chulalongkorn University",
    birthDate: "10 Oct 2003",
    roles: ["UI/UX Designer", "Pitching"],
    skillBank: {
      rankOverall: "Silver",
      roleMastery: { 
        "Developer": 0, 
        "Business": 1, 
        "UI/UX Designer": 10, 
        "Marketing": 2, 
        "AI / Data": 0, 
        "Pitching": 5 
      },
      hardSkills: [
        { name: "Figma", level: "gold", count: 10 },
        { name: "Prototype", level: "silver", count: 4 },
        { name: "Present", level: "gold", count: 5 }
      ],
      softSkillScore: 4.5,
      roleSoftSkills: [
        { role: "UI/UX Designer", score: 4.5 },
        { role: "Pitching", score: 4.2 }
      ]
    }
  },
  u3: {
    id: "u3",
    name: "Somchai JaiDee",
    email: "somchai@example.com",
    avatarUrl: "https://i.pravatar.cc/150?u=4",
    bio: "Passionate about creating beautiful user experiences.",
    university: "Kasetsart University",
    birthDate: "1 Jan 2002",
    roles: ["Business", "Marketing"],
    skillBank: {
      rankOverall: "Bronze",
      roleMastery: { 
        "Developer": 0, 
        "Business": 8, 
        "UI/UX Designer": 1, 
        "Marketing": 5, 
        "AI / Data": 0, 
        "Pitching": 3 
      },
      hardSkills: [
        { name: "Strategy", level: "gold", count: 8 },
        { name: "Sales", level: "silver", count: 5 },
        { name: "SEO", level: "bronze", count: 3 }
      ],
      softSkillScore: 4.8,
      roleSoftSkills: [
        { role: "Business", score: 4.9 },
        { role: "Marketing", score: 4.6 }
      ]
    }
  },
  u4: {
    id: "u4",
    name: "Alice Wonderland",
    email: "alice@example.com",
    avatarUrl: "https://i.pravatar.cc/150?u=7",
    bio: "Backend developer looking for a fun team to build scalable microservices.",
    university: "Chiang Mai University",
    birthDate: "12 Dec 2004",
    roles: ["Developer", "AI / Data"],
    skillBank: {
      rankOverall: "Diamond",
      roleMastery: { 
        "Developer": 15, 
        "Business": 0, 
        "UI/UX Designer": 0, 
        "Marketing": 0, 
        "AI / Data": 8, 
        "Pitching": 0 
      },
      hardSkills: [
        { name: "API", level: "diamond", count: 15 },
        { name: "DB", level: "gold", count: 10 },
        { name: "Vision", level: "gold", count: 8 }
      ],
      softSkillScore: 4.2,
      roleSoftSkills: [
        { role: "Developer", score: 4.2 },
        { role: "AI / Data", score: 4.0 }
      ]
    }
  }
};

export const mockPendingRequests = [
  {
    id: "r1",
    requesterId: "u2",
    targetOwnerId: "u1",
    teamId: "t1",
    teamName: "Pirate Hackathon",
    time: "10 นาทีที่แล้ว"
  }
];

export interface DetailedMember {
  name: string;
  avatar: string;
  role: Role;
  score: number;
}

export interface Team {
  id: string;
  name: string;
  ownerId: string;
  requiredRoles: { role: Role; count: number }[];
  skills: string[];
  currentMembers: number;
  maxMembers: number;
  memberAvatars: string[];
  detailedMembers: DetailedMember[];
}

export const mockTeams: Team[] = [
  {
    id: "t1",
    name: "Pirate Hackathon",
    ownerId: "u1",
    requiredRoles: [
      { role: "Developer", count: 1 },
      { role: "Pitching", count: 1 },
      { role: "Business", count: 1 }
    ],
    skills: ["React", "API", "Story", "Strategy"],
    currentMembers: 3,
    maxMembers: 4,
    memberAvatars: [mockUsers.u1.avatarUrl, mockUsers.u3.avatarUrl],
    detailedMembers: [
      { name: mockUsers.u1.name, avatar: mockUsers.u1.avatarUrl, role: "Developer", score: 4.9 },
      { name: mockUsers.u3.name, avatar: mockUsers.u3.avatarUrl, role: "Business", score: 4.8 },
      { name: "Alice Doe", avatar: "https://i.pravatar.cc/150?u=3", role: "Pitching", score: 5.0 }
    ]
  }
];
