export interface Record {
  id: string;
}

export interface UserData {
  createdAt?: string;
  displayName?: string;
  email?: string;
}

export interface User extends Record, UserData {}
