/** Types for user profile data */

export interface UserProfile {
  id: string;
  displayName: string;
  avatarUrl?: string;
  coverPhotoUrl?: string;
  bio?: string;
  university?: string;
  birthday?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  roles: string[];
  teammateCount?: number;
}

export interface CompetitionItem {
  name: string;
  date: string;
  iconUrl?: string;
}

export interface SkillItem {
  name: string;
  /** URL of the rank icon image — leave empty for default ship placeholder */
  iconUrl?: string;
  rank?: string;
}

export interface ActiveTeam {
  teamName: string;
  dateRange?: string;
  daysLeft?: number;
  /** e.g. "กำลังประกาศ", "กำลังร่วมทีม" */
  status?: string;
  memberCount?: string;
}
