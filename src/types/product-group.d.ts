import { Product } from './product';
import { ProductItem } from './product-item';

export interface ProductGroup extends Product {
  imageUrl?: string;
  items: ProductItem[];
  type: string;
}
