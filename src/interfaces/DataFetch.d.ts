interface GetCategory {
  _id?: string;
  name?: string;
  icon?: string;
  createdAt?: string;
  updatedAt?: string;
  slugname?: string;
}

interface GetSubCategory {
  _id?: string;
  category?: string;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
  slugname?: string;
}

interface RowCategoryTable {
  _id?: string;
  name?: string;
  icon?: string;
  createdAt?: string;
  updatedAt?: string;
  slugname?: string;
}

interface GetAllProduct {
  _id?: string;
  category?: string;
  subcategory?: string;
  name?: string;
  price?: number;
  quantity?: number;
  brand?: string;
  description?: string;
  thumbnail?: string;
  images?: string[];
  slugname?: string;
}
interface GetPropsProduct {
  brand: string;
  category: string;
  createdAt: string;
  description: string;
  images: string[];
  name: string;
  price: number;
  quantity: number;
  rating: { rate: number; count: number };
  slugname: string;
  subcategory: string;
  thumbnail: string;
  updatedAt: string;
  _id: string;
}
