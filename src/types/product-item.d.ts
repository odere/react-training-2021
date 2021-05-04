import { Product } from './product';

export interface ProductItem extends Product {
  imageUrl: string;
  price: number;
}
