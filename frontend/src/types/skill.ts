/** Types for skill bank data */

export type RankTier = "Gold" | "Silver" | "Bronze" | "Unranked";

export interface RankOverview {
  tier: RankTier;
  progressPercent: number;
}

export interface RoleMastery {
  roleName: string;
  count: number;
}

export interface HardSkill {
  name: string;
  iconUrl?: string;
  currentLevel: number;
  maxLevel: number;
}

export interface SoftSkillRating {
  roleName: string;
  score: number;
  maxScore: number;
}

export interface SkillBankData {
  rank: RankOverview;
  roleMastery: RoleMastery[];
  hardSkills: HardSkill[];
  softSkillOverall: number;
  softSkillByRole: SoftSkillRating[];
}

export interface CompetitionEntry {
  name: string;
  award?: string;
  dateRange: string;
  memberCount: number;
}
