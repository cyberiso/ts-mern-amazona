import { Product } from '../types/Product';

type State = {
  products: { products: Product[] };
  loading: boolean;
  error: string;
};
