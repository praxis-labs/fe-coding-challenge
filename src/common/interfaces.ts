export interface Cohort {
  id: number;
  name: string;
  memberCount: number | null;
  createdAt: string | null;
}

export interface Role {
  name: string;
}

export interface Organization {
  alottedNumberOfSeats: number;
  cohorts: Cohort[];
  id: number;
  name: string;
  numberOfSeatsAvailable: number;
  numberOfSeatsUsed: number;
  jobDepartments: string[];
}

export interface User {
  cohorts: Cohort[];
  fullName: string;
  id: number;
  roles: Role[];
  shareActivity: boolean;
  verifiedAt: string;
  workEmail: string;
  organization: Organization;
  jobDepartment: string;
  lastLoginAt: string;
  createdAt: string;
}
