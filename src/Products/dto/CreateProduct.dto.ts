import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  seller: number;

  @IsNotEmpty()
  store: number;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  link: string;
}
