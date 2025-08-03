import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const getProducts = async (): Promise<Product[]> => {
  // We've removed '?limit=5' to fetch all products
  const response = await api.get('/products');
  return response.data;
};