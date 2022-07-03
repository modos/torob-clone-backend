import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category, Product, ProductUser, Report, Store } from 'src/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductUser, Store, Report, Category]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
