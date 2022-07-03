import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'product_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
    default: '',
  })
  category: string;

  @Column({
    name: 'seller_id',
    nullable: false,
    default: '',
  })
  seller: number;

  @Column({
    nullable: false,
    default: '',
  })
  price: number;

  @Column({
    name: 'store_id',
    nullable: false,
    default: '',
  })
  store: number;

  @Column({
    nullable: false,
    default: '',
  })
  link: string;
}
