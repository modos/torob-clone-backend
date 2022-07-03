import { IsNotEmpty } from 'class-validator';

export class LikedProductDto {
  @IsNotEmpty()
  product: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  seller: number;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  uesr: number;
}
