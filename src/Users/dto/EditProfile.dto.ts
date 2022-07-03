import { IsNotEmpty } from 'class-validator';

export class EditProfileDto {
  @IsNotEmpty()
  id: number;

  username: string;

  password: string;

  mobile: string;

  email: string;
}
