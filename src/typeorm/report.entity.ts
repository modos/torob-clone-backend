import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    type: 'bigint',
    name: 'product_id',
    nullable: false,
  })
  product: number;

  @Column({
    nullable: false,
    name: 'seller_id',
  })
  seller: number;

  @Column({
    nullable: false,
    name: 'store_id',
  })
  store: number;

  @Column({
    name: 'user_id',
    type: 'bigint',
  })
  user: number;

  @Column({
    nullable: false,
  })
  message: string;
}
