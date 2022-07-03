import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category, Product, ProductUser, Report, Store } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/CreateProduct.dto';
import { LikedProductDto } from './dto/LikedProduct.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductUser)
    private readonly productUserRepository: Repository<ProductUser>,
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  createProduct(createProductDto: CreateProductDto) {
    return this.productRepository.save(createProductDto);
  }

  likeProduct(likedProduct: LikedProductDto) {
    return this.productUserRepository.save(likedProduct);
  }

  allProducts() {
    return this.productRepository.find();
  }

  userLikedProducts(user_id: number) {
    return this.productUserRepository.findBy({ user: user_id });
  }

  removeUserLikedProduct(product_user_id: number) {
    return this.productUserRepository.delete({ id: product_user_id });
  }

  productsByCategory(cat: string) {
    return this.productRepository.findBy({ category: cat });
  }

  createStore(store: object) {
    return this.storeRepository.save(store);
  }

  sellerStores(id: string) {
    return this.storeRepository.find({ where: { seller: id } });
  }

  sellerProducts(id: number) {
    return this.productRepository.find({ where: { seller: id } });
  }

  removeSellerProduct(id: number) {
    return this.productRepository.delete({ id: id });
  }

  showProductWithId(id: number) {
    return this.productRepository.findOne({ where: { id: id } });
  }

  reportProduct(report) {
    return this.reportRepository.save(report);
  }

  showReports(sellerId) {
    return this.reportRepository.find({ where: { seller: sellerId } });
  }

  showCategories() {
    return this.categoryRepository.find();
  }

  createCategory(createCategoryDto: object) {
    return this.categoryRepository.save(createCategoryDto);
  }
}
