import { IPhoto } from './iphoto';

export interface IMember {
  id: number;
  userName: string;
  photoUrl: string;
  age: number;
  knownAs: string;
  created: Date;
  lastActive: Date;
  gender: string;
  introducción: string;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  photos: IPhoto[];
}
