/** Types for team and people listings */

export interface TeamCardData {
  teamName: string;
  creatorName?: string;
  creatorAvatarUrl?: string;
  dateRange?: string;
  daysLeft?: number;
  roleTags: string[];
  skillTags: string[];
  currentMembers: number;
  maxMembers: number;
  memberAvatarUrls: string[];
}

export interface PersonCardData {
  name: string;
  avatarUrl?: string;
  bio?: string;
  roleTags: string[];
  skillTags: string[];
  isFavorited?: boolean;
}

export interface CreateTeamPayload {
  title: string;
  details: string;
  eventDate: string;
  durationDays: number;
  memberCount: number;
  roles: string[];
  skills: string[];
}
