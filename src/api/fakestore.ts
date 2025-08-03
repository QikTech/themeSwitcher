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
  const response = await api.get('/products?limit=5');
  return response.data;
};