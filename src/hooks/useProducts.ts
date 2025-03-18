import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      return data;
    },
  });
};