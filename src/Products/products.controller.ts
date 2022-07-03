import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateCategoryDto } from './dto/CreateCategory.dto';
import { CreateProductDto } from './dto/CreateProduct.dto';
import { CreateReportDto } from './dto/CreateReport.dto';
import { CreateStoreDto } from './dto/CreateStore.dto';
import { LikedProductDto } from './dto/LikedProduct.dto';
import { RemoveProductDto } from './dto/RemoveProduct.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('create')
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Post('like')
  likeProduct(@Body() likedProductDto: LikedProductDto) {
    return this.productsService.likeProduct(likedProductDto);
  }

  @Get('all')
  showAllProducts(@Query('cat') cat, @Query('filter') filter) {
    if (!cat && !filter) {
      return this.productsService.allProducts();
    } else if (cat && !filter) {
      return this.productsService.productsByCategory(cat);
    }
  }

  @Get('liked')
  showUserLikedProducts(@Query('id') id) {
    return this.productsService.userLikedProducts(id);
  }

  @Post('liked/remove')
  removeUserLikedProduct(@Body() body) {
    return this.productsService.removeUserLikedProduct(body.id);
  }

  @Post('store/create')
  createStore(@Body() createStoreDto: CreateStoreDto) {
    return this.productsService.createStore(createStoreDto);
  }

  @Get('/store/all')
  showSellerStores(@Query('id') id) {
    return this.productsService.sellerStores(id);
  }

  @Get('/seller')
  showSellerProducts(@Query('id') id) {
    return this.productsService.sellerProducts(id);
  }

  @Post('/seller/remove')
  removeSellerProduct(@Body() removeProductDto: RemoveProductDto) {
    return this.productsService.removeSellerProduct(removeProductDto.id);
  }

  @Get('/single')
  showProductWithId(@Query('id') id) {
    return this.productsService.showProductWithId(id);
  }

  @Post('report')
  reportProduct(@Body() createReportDto: CreateReportDto) {
    return this.productsService.reportProduct(createReportDto);
  }

  @Get('report')
  showReports(@Query('id') id) {
    return this.productsService.showReports(id);
  }

  @Get('categories')
  showCategories() {
    return this.productsService.showCategories();
  }

  @Post('categories/create')
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.productsService.createCategory(createCategoryDto);
  }
}
