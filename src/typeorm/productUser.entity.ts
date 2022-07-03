import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductUser {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'product_user_id',
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
  })
  name: string;

  @Column({
    nullable: false,
    default: '',
  })
  category: string;

  @Column({
    name: 'seller_id',
    type: 'bigint',
    nullable: false,
  })
  seller: number;

  @Column({
    nullable: false,
  })
  price: number;

  @Column({
    name: 'user_id',
    type: 'bigint',
    nullable: false,
  })
  user: number;
}
