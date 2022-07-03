import { IsNotEmpty } from 'class-validator';

export class CreateReportDto {
  @IsNotEmpty()
  product: number;

  @IsNotEmpty()
  seller: number;

  @IsNotEmpty()
  store: number;

  @IsNotEmpty()
  user: number;

  @IsNotEmpty()
  message: string;
}
