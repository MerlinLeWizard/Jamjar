export interface UserType {
  id: number;
  slug: string;
  name: string;
  bio: string;
  profilePicture: string;
  bannerPicture: string;
  createdAt: Date;
  mod: boolean;
  admin: boolean;
}
