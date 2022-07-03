import { Product } from './product.entity';
import { ProductUser } from './productUser.entity';
import { User } from './user.entity';
import { Store } from './store.entity';
import { Report } from './report.entity';
import { Category } from './category.entity';

const entities = [User, Product, ProductUser, Store, Report, Category];

export { User, Product, ProductUser, Store, Report, Category };
export default entities;
