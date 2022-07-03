import { IsNotEmpty } from 'class-validator';

export class RemoveProductDto {
  @IsNotEmpty()
  id: number;
}
