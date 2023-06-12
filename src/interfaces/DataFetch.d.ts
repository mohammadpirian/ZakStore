interface GetCategory {
  _id?: string;
  name?: string;
  icon?: string;
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
